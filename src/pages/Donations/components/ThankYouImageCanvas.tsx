import { useEffect, useRef, useState } from 'react'
import { site } from '../../../data/site'
import { formatDonorJerseyNameFromFullName } from '../utils/formatDonorJerseyName'
import {
  canvasToPngBlob,
  ensureThankYouFontsLoaded,
  generateDonationThankYouImage,
} from '../utils/generateDonationThankYouImage'
import styles from './ThankYouImageCanvas.module.scss'

const { thankYou } = site.pages.donations

export interface ThankYouImageSource {
  donorFullName: string
  jerseyNumber: number
}

export interface GeneratedThankYouImage {
  blob: Blob
  dataUrl: string
}

interface ThankYouImageCanvasProps {
  source: ThankYouImageSource
  onGenerated: (image: GeneratedThankYouImage) => void
}

export function ThankYouImageCanvas({ source, onGenerated }: ThankYouImageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    let cancelled = false

    void (async () => {
      try {
        await ensureThankYouFontsLoaded()

        const formattedName = formatDonorJerseyNameFromFullName(source.donorFullName)

        generateDonationThankYouImage(canvas, {
          messageLines: thankYou.canvasMessageLines,
          formattedName,
          jerseyNumber: source.jerseyNumber,
        })

        const dataUrl = canvas.toDataURL('image/png')
        const blob = await canvasToPngBlob(canvas)

        if (cancelled) {
          return
        }

        setPreviewUrl(dataUrl)
        setHasError(false)
        onGenerated({ blob, dataUrl })
      } catch (error) {
        console.error('Thank you image generation failed:', error)

        if (!cancelled) {
          setHasError(true)
          setPreviewUrl(null)
        }
      }
    })()

    return () => {
      cancelled = true
    }
  }, [source, onGenerated])

  if (hasError) {
    return (
      <div className={styles.errorBox} role="alert">
        <p className={styles.errorText}>{thankYou.generateError}</p>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.hiddenCanvas} aria-hidden="true" />
      {previewUrl ? (
        <img
          src={previewUrl}
          alt="Personalizirana zahvalnica NK Matija Gubec"
          className={styles.preview}
        />
      ) : (
        <p className={styles.loading} aria-live="polite">
          {thankYou.generatingLabel}
        </p>
      )}
    </div>
  )
}
