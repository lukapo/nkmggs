import { categories } from '../../../data/categories'
import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading/SectionHeading'
import { CategoryDetailCard } from '../components/CategoryDetailCard'
import styles from './CategoriesGridSection.module.scss'

const { grid } = site.pages.categories

export function CategoriesGridSection() {
  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <section className={styles.section} aria-labelledby="categories-grid-title">
      <Container>
        <SectionHeading
          eyebrow={grid.eyebrow}
          title={grid.title}
          titleId="categories-grid-title"
          description={grid.description}
        />

        <ul className={styles.grid}>
          {sortedCategories.map((category) => (
            <li key={category.id} className={styles.item}>
              <CategoryDetailCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
