import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading/SectionHeading'
import styles from './ValuesSection.module.scss'

const { values } = site.pages.about

export function ValuesSection() {
  return (
    <section className={styles.section} aria-labelledby="about-values-title">
      <Container>
        <SectionHeading
          eyebrow={values.eyebrow}
          title={values.title}
          titleId="about-values-title"
          description={values.description}
        />

        <ul className={styles.grid}>
          {values.items.map((value) => (
            <li key={value.title}>
              <article className={styles.card}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
