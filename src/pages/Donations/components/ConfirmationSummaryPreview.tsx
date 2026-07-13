import { site } from '../../../data/site'
import styles from './ConfirmationSummaryPreview.module.scss'

const { confirmationSummary } = site.pages.donations

export function ConfirmationSummaryPreview() {
  return (
    <section className={styles.card} aria-labelledby="confirmation-summary-title">
      <h2 id="confirmation-summary-title" className={styles.title}>
        {confirmationSummary.title}
      </h2>
      <p className={styles.description}>{confirmationSummary.description}</p>
      <ul className={styles.list}>
        {confirmationSummary.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
