import { categories } from '../../../data/categories'
import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading/SectionHeading'
import styles from './ClubTodaySection.module.scss'

const { clubToday } = site.pages.about

export function ClubTodaySection() {
  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <section className={styles.section} aria-labelledby="about-club-today-title">
      <Container>
        <SectionHeading
          eyebrow={clubToday.eyebrow}
          title={clubToday.title}
          titleId="about-club-today-title"
          description={clubToday.description}
        />

        <ul className={styles.list}>
          {sortedCategories.map((category) => (
            <li key={category.id} className={styles.item}>
              <span className={styles.name}>{category.name}</span>
              {category.status === 'coming-soon' ? (
                <span className={styles.badge}>Uskoro</span>
              ) : null}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Button asChild variant="ghost" to={clubToday.cta.path}>
            {clubToday.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
