import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import styles from './DonationHeaderSection.module.scss'

const { pageHeader, title } = site.pages.donations

export function DonationHeaderSection() {
  return (
    <section className={styles.section} aria-labelledby="donations-page-title">
      <Container>
        <p className={styles.eyebrow}>{pageHeader.eyebrow}</p>
        <h1 id="donations-page-title">{title}</h1>
        <p className={styles.intro}>{pageHeader.intro}</p>
        <p className={styles.highlight}>{pageHeader.highlight}</p>
      </Container>
    </section>
  )
}
