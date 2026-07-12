import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './HeroSection.module.scss'

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <div
          className={styles.photo}
          style={{ backgroundImage: `url(${site.heroImagePath})` }}
        />
        <div className={styles.overlay} />
      </div>

      <Container className={styles.content}>
        <p className={styles.eyebrow}>
          {site.name} · {site.location}
        </p>
        <h1 id="hero-title" className={styles.title}>
          {site.heroTitleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.lead}>{site.description}</p>
        <div className={styles.actions}>
          <Button asChild variant="primary" size="lg" to="/donacije">
            Podrži klub
          </Button>
          <Button asChild variant="outline" size="lg" to="/o-nama">
            Upoznaj klub
          </Button>
        </div>
      </Container>
    </section>
  )
}
