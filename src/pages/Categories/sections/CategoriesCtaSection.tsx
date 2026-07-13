import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './CategoriesCtaSection.module.scss'

const { finalCta } = site.pages.categories

export function CategoriesCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="categories-cta-title">
      <Container>
        <div className={styles.panel}>
          <h2 id="categories-cta-title">{finalCta.title}</h2>
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
