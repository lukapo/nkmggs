import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import styles from './ContactHeaderSection.module.scss'

const { contact: contactPage } = site.pages
const { pageHeader } = contactPage

export function ContactHeaderSection() {
  return (
    <section className={styles.section} aria-labelledby="contact-page-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{pageHeader.eyebrow}</p>
          <h1 id="contact-page-title">{contactPage.title}</h1>
          <p className={styles.intro}>{contactPage.intro}</p>
        </div>
      </Container>
    </section>
  )
}
