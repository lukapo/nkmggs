import { site } from '../../../data/site'

const { actions } = site.pages.donations

export type ShareThankYouResult =
  | { status: 'shared' }
  | { status: 'aborted' }
  | { status: 'unsupported' }
  | { status: 'error' }

export function createThankYouFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName, { type: 'image/png' })
}

export function canShareThankYouFile(blob: Blob, fileName: string): boolean {
  if (!navigator.share || !navigator.canShare) {
    return false
  }

  const file = createThankYouFile(blob, fileName)

  return navigator.canShare({ files: [file] })
}

export async function shareThankYouImage(blob: Blob, fileName: string): Promise<ShareThankYouResult> {
  if (!navigator.share || !navigator.canShare) {
    return { status: 'unsupported' }
  }

  const file = createThankYouFile(blob, fileName)

  if (!navigator.canShare({ files: [file] })) {
    return { status: 'unsupported' }
  }

  try {
    await navigator.share({
      files: [file],
      title: actions.shareTitle,
      text: actions.shareText,
    })

    return { status: 'shared' }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { status: 'aborted' }
    }

    console.error('Thank you share failed:', error)
    return { status: 'error' }
  }
}
