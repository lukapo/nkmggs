import { site } from '../../../data/site'
import styles from './ThankYouPreview.module.scss'

const { thankYou } = site.pages.donations

export function ThankYouPreview() {
  return (
    <section className={styles.card} aria-labelledby="thankyou-preview-title">
      <p className={styles.exampleLabel}>{thankYou.exampleLabel}</p>
      <h2 id="thankyou-preview-title" className={styles.title}>
        {thankYou.title}
      </h2>

      <div className={styles.jersey} aria-hidden="true">
        <div className={styles.jerseyBack}>
          <div className={styles.jerseyStripe} />
          <p className={styles.playerName}>{thankYou.previewName}</p>
          <p className={styles.playerNumber}>{thankYou.previewNumber}</p>
          <div className={styles.jerseyCollar} />
        </div>
      </div>

      <p className={styles.futureHint}>{thankYou.futureHint}</p>
      <p className={styles.explanation}>{thankYou.explanation}</p>
    </section>
  )
}
