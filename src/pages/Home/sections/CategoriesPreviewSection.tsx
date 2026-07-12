import { categories } from '../../../data/categories'
import { CategoryCard } from '../../../components/ui/CategoryCard/CategoryCard'
import { Container } from '../../../components/ui/Container/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading/SectionHeading'
import { Button } from '../../../components/ui/Button/Button'
import styles from './CategoriesPreviewSection.module.scss'

export function CategoriesPreviewSection() {
  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <section className={styles.section} aria-labelledby="categories-title">
      <Container>
        <SectionHeading
          eyebrow="Kategorije"
          title="Od prvih koraka do veterana"
          titleId="categories-title"
          description="Naš klub okuplja igrače svih uzrasta — od najmlađih do odraslih. Svaka kategorija gradi temelje za sljedeći korak u nogometnom razvoju."
        />

        <ul className={styles.grid}>
          {sortedCategories.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Button asChild variant="ghost" to="/kategorije">
            Sve kategorije
          </Button>
        </div>
      </Container>
    </section>
  )
}
