import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './DonationCtaSection.module.scss'

export function DonationCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="donation-cta-title">
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Podrži klub</p>
            <h2 id="donation-cta-title">Tvoja podrška gradi budućnost mladih igrača</h2>
            <p className={styles.text}>
              Donacije pomažu svakodnevni rad s djecom, nabavu opreme i održavanje terena.
              Svaki doprinos ide u razvoj nogometne škole i jačanje zajednice u Gornjoj Stubici.
            </p>
            <p className={styles.note}>{site.donationTeaser}</p>
          </div>

          <div className={styles.action}>
            <Button asChild variant="primary" size="lg" to="/donacije">
              Doniraj klubu
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
