import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './FinalCtaSection.module.scss'

export function FinalCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <Container>
        <div className={styles.panel}>
          <h2 id="final-cta-title">Postani dio naše priče</h2>
          <p className={styles.text}>
            Bilo da tražiš informacije o treninzima, želiš upoznati kategorije ili se javiti klubu
            — tu smo za tebe.
          </p>
          <div className={styles.actions}>
            <Button asChild variant="secondary" size="lg" to="/kontakt">
              Kontaktiraj nas
            </Button>
            <Button asChild variant="ghost" size="lg" to="/kategorije" className={styles.secondaryAction}>
              Pregledaj kategorije
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
