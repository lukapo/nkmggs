export function downloadThankYouImage(blob: Blob, fileName: string): void {
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = fileName
  link.rel = 'noopener'
  link.click()
  URL.revokeObjectURL(objectUrl)
}
