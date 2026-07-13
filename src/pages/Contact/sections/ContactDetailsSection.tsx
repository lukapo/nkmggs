import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import styles from './ContactDetailsSection.module.scss'

const { contact: contactData } = site
const { contact: contactPage } = site.pages

export function ContactDetailsSection() {
  const emailAccessibleLabel = `${contactPage.emailLabel}: ${contactData.email}`
  const phoneAccessibleLabel = `${contactPage.phoneLabel} (${contactData.president.name}): ${contactData.phone.display}`

  return (
    <section className={styles.section} aria-label="Kontaktni podaci">
      <Container>
        <div className={styles.grid}>
          <article className={styles.card} aria-labelledby="contact-club-title">
            <h2 id="contact-club-title" className={styles.cardTitle}>
              {contactData.clubDisplayName}
            </h2>

            <dl className={styles.details}>
              <div className={styles.detailRow}>
                <dt className={styles.label}>{contactPage.emailLabel}</dt>
                <dd className={styles.value}>
                  <a
                    href={`mailto:${contactData.email}`}
                    className={styles.link}
                    aria-label={emailAccessibleLabel}
                  >
                    {contactData.email}
                  </a>
                </dd>
              </div>
            </dl>
          </article>

          <article className={styles.card} aria-labelledby="contact-president-title">
            <h2 id="contact-president-title" className={styles.cardTitle}>
              {contactData.president.role}
            </h2>
            <p className={styles.personName}>{contactData.president.name}</p>

            <dl className={styles.details}>
              <div className={styles.detailRow}>
                <dt className={styles.label}>{contactPage.phoneLabel}</dt>
                <dd className={styles.value}>
                  <a
                    href={contactData.phone.href}
                    className={styles.link}
                    aria-label={phoneAccessibleLabel}
                  >
                    {contactData.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </Container>
    </section>
  )
}
