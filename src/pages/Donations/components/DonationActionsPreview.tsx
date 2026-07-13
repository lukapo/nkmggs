import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { ThankYouImageActions } from './ThankYouImageActions'
import styles from './DonationActionsPreview.module.scss'

const { actions } = site.pages.donations

interface DonationActionsPreviewProps {
  thankYouBlob: Blob | null
  downloadFileName: string
  onFinish: () => void
}

export function DonationActionsPreview({
  thankYouBlob,
  downloadFileName,
  onFinish,
}: DonationActionsPreviewProps) {
  return (
    <section className={styles.card} aria-labelledby="donation-actions-title">
      <h2 id="donation-actions-title" className={styles.title}>
        {actions.title}
      </h2>

      <ThankYouImageActions
        thankYouBlob={thankYouBlob}
        downloadFileName={downloadFileName}
        className={styles.actionsWrap}
      />

      <div className={styles.finishRow}>
        <Button type="button" variant="ghost" size="md" className={styles.actionBtn} onClick={onFinish}>
          {actions.finishLabel}
        </Button>
      </div>

      <ul className={styles.notes}>
        {actions.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  )
}
