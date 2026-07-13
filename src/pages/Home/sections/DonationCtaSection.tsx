import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './DonationCtaSection.module.scss'

const { donationCta } = site.home

export function DonationCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="donation-cta-title">
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{donationCta.eyebrow}</p>
            <h2 id="donation-cta-title">{donationCta.title}</h2>
            <p className={styles.text}>{donationCta.text}</p>
            <p className={styles.note}>{donationCta.note}</p>
          </div>

          <div className={styles.action}>
            <Button asChild variant="primary" size="lg" to={donationCta.cta.path}>
              {donationCta.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
