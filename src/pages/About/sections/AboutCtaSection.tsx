import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './AboutCtaSection.module.scss'

const { finalCta } = site.pages.about

export function AboutCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="about-cta-title">
      <Container>
        <div className={styles.panel}>
          <h2 id="about-cta-title">{finalCta.title}</h2>
          <p className={styles.text}>{finalCta.description}</p>
          <div className={styles.actions}>
            <Button asChild variant="secondary" size="lg" to={finalCta.primaryCta.path}>
              {finalCta.primaryCta.label}
            </Button>
            <Button asChild variant="ghost" size="lg" to={finalCta.secondaryCta.path} className={styles.secondaryAction}>
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
