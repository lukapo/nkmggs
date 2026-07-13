import { site } from '../../../data/site'
import { DONATION_COMPLETE_TITLE_ID } from '../utils/validateDonationConfirmation'
import styles from './DonationCompleteStep.module.scss'

const { thankYou } = site.pages.donations

export function DonationCompleteStep() {
  return (
    <div className={styles.step}>
      <section className={styles.card} aria-labelledby={DONATION_COMPLETE_TITLE_ID}>
        <h2 id={DONATION_COMPLETE_TITLE_ID} className={styles.title} tabIndex={-1}>
          {thankYou.title}
        </h2>
        <p className={styles.text}>{thankYou.placeholderExplanation}</p>
      </section>
    </div>
  )
}
