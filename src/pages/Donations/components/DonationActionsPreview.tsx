import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import styles from './DonationActionsPreview.module.scss'

const { actions } = site.pages.donations

export function DonationActionsPreview() {
  return (
    <section className={styles.card} aria-labelledby="donation-actions-title">
      <h2 id="donation-actions-title" className={styles.title}>
        {actions.title}
      </h2>

      <div className={styles.buttons}>
        <Button type="button" variant="primary" size="md" disabled className={styles.actionBtn}>
          {actions.downloadLabel}
          <span className={styles.soon}>{actions.soonLabel}</span>
        </Button>
        <Button type="button" variant="ghost" size="md" disabled className={styles.actionBtn}>
          {actions.shareLabel}
          <span className={styles.soon}>{actions.soonLabel}</span>
        </Button>
        <Button type="button" variant="ghost" size="md" disabled className={styles.actionBtn}>
          {actions.finishLabel}
          <span className={styles.soon}>{actions.soonLabel}</span>
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
