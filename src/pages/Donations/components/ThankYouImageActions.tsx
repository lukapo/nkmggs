import { useState } from 'react'
import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { downloadThankYouImage } from '../utils/downloadThankYouImage'
import { shareThankYouImage } from '../utils/shareThankYouImage'
import styles from './ThankYouImageActions.module.scss'

const { actions } = site.pages.donations

interface ThankYouImageActionsProps {
  thankYouBlob: Blob | null
  downloadFileName: string
  className?: string
}

export function ThankYouImageActions({
  thankYouBlob,
  downloadFileName,
  className,
}: ThankYouImageActionsProps) {
  const [isSharing, setIsSharing] = useState(false)
  const [shareMessage, setShareMessage] = useState<{
    variant: 'status' | 'error'
    text: string
  } | null>(null)

  const isImageReady = thankYouBlob !== null

  const handleDownload = () => {
    if (!thankYouBlob) {
      return
    }

    downloadThankYouImage(thankYouBlob, downloadFileName)
  }

  const handleShare = async () => {
    if (!thankYouBlob || isSharing) {
      return
    }

    setIsSharing(true)
    setShareMessage(null)

    const result = await shareThankYouImage(thankYouBlob, downloadFileName)

    setIsSharing(false)

    if (result.status === 'unsupported') {
      setShareMessage({ variant: 'status', text: actions.shareUnsupported })
      return
    }

    if (result.status === 'error') {
      setShareMessage({ variant: 'error', text: actions.shareError })
    }
  }

  return (
    <div className={[styles.actions, className].filter(Boolean).join(' ')}>
      <div className={styles.buttons}>
        <Button
          type="button"
          variant="primary"
          size="md"
          className={styles.actionBtn}
          disabled={!isImageReady}
          onClick={handleDownload}
        >
          {actions.downloadLabel}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="md"
          className={styles.actionBtn}
          disabled={!isImageReady || isSharing}
          onClick={handleShare}
        >
          {isSharing ? actions.sharePreparingLabel : actions.shareLabel}
        </Button>
      </div>

      {shareMessage ? (
        <p
          className={shareMessage.variant === 'error' ? styles.shareError : styles.shareStatus}
          role={shareMessage.variant === 'error' ? 'alert' : 'status'}
        >
          {shareMessage.text}
        </p>
      ) : null}
    </div>
  )
}
