import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import styles from './ConfirmationPreview.module.scss'

const { confirmation } = site.pages.donations

export function ConfirmationPreview() {
  return (
    <section className={styles.card} aria-labelledby="confirmation-preview-title">
      <p className={styles.previewNote}>Pregled — korak potvrde</p>
      <h2 id="confirmation-preview-title" className={styles.title}>
        {confirmation.title}
      </h2>

      <p className={styles.statement}>{confirmation.statement}</p>

      <aside className={styles.important}>
        <h3 className={styles.importantTitle}>{confirmation.importantTitle}</h3>
        <p className={styles.importantText}>{confirmation.importantText}</p>
      </aside>

      <label className={styles.checkbox}>
        <input type="checkbox" name="socialConsent" defaultChecked={false} />
        <span>{confirmation.socialConsent}</span>
      </label>

      <div className={styles.actions}>
        <Button type="button" variant="ghost" size="md">
          {confirmation.cancelLabel}
        </Button>
        <Button type="button" variant="secondary" size="md">
          {confirmation.confirmLabel}
        </Button>
      </div>
    </section>
  )
}
