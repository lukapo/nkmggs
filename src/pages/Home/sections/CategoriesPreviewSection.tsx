import { categories } from '../../../data/categories'
import { site } from '../../../data/site'
import { CategoryCard } from '../../../components/ui/CategoryCard/CategoryCard'
import { Container } from '../../../components/ui/Container/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading/SectionHeading'
import { Button } from '../../../components/ui/Button/Button'
import styles from './CategoriesPreviewSection.module.scss'

const { categories: categoriesContent } = site.home

export function CategoriesPreviewSection() {
  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <section className={styles.section} aria-labelledby="categories-title">
      <Container>
        <SectionHeading
          eyebrow={categoriesContent.eyebrow}
          title={categoriesContent.title}
          titleId="categories-title"
          description={categoriesContent.description}
        />

        <ul className={styles.grid}>
          {sortedCategories.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Button asChild variant="ghost" to={categoriesContent.cta.path}>
            {categoriesContent.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
