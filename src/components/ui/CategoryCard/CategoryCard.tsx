import type { Category } from '../../../types/category'
import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const isComingSoon = category.status === 'coming-soon'

  return (
    <article
      className={`${styles.card} ${isComingSoon ? styles.comingSoon : ''}`}
      aria-label={category.name}
    >
      <div
        className={styles.visual}
        style={{ background: category.visual.gradient }}
        aria-hidden="true"
      />

      <div className={styles.body}>
        <div className={styles.header}>
          <h3>{category.name}</h3>
          {isComingSoon ? <span className={styles.badge}>Uskoro</span> : null}
        </div>
        {category.ageHint ? <p className={styles.ageHint}>{category.ageHint}</p> : null}
        <p className={styles.description}>{category.description}</p>
      </div>
    </article>
  )
}
