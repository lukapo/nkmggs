import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import styles from './ContactMapSection.module.scss'

const { address } = site.contact
const { mapTitle } = site.pages.contact

export function ContactMapSection() {
  return (
    <section className={styles.section} aria-labelledby="contact-map-title">
      <Container>
        <h2 id="contact-map-title" className={styles.title}>
          {mapTitle}
        </h2>
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src={address.mapsEmbedUrl}
            title={mapTitle}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  )
}
