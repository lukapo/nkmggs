import type { Category } from '../../../types/category'
import { site } from '../../../data/site'
import styles from './CategoryDetailCard.module.scss'

interface CategoryDetailCardProps {
  category: Category
}

const { statusLabels, coachPendingLabel, photoPlaceholderLabel } = site.pages.categories

export function CategoryDetailCard({ category }: CategoryDetailCardProps) {
  const isComingSoon = category.status === 'coming-soon'
  const statusLabel = statusLabels[category.status]
  const coachName = category.coachName ?? coachPendingLabel
  const hasPhoto = Boolean(category.imagePath)

  return (
    <article className={`${styles.card} ${isComingSoon ? styles.comingSoon : ''}`}>
      <div className={styles.visual}>
        {hasPhoto ? (
          <img src={category.imagePath} alt="" className={styles.photo} />
        ) : (
          <div
            className={styles.gradient}
            style={{ background: category.visual.gradient }}
            aria-hidden="true"
          />
        )}
        {isComingSoon ? <div className={styles.visualOverlay} aria-hidden="true" /> : null}
        <span className={styles.statusBadge}>{statusLabel}</span>
        {!hasPhoto ? (
          <span className={styles.photoLabel}>{photoPlaceholderLabel}</span>
        ) : null}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{category.name}</h3>

        {category.ageLabel ? (
          <p className={styles.ageLabel}>{category.ageLabel}</p>
        ) : null}

        <p className={styles.description}>{category.description}</p>

        <p className={styles.meta}>
          <span className={styles.metaLabel}>Trener:</span> {coachName}
        </p>
      </div>
    </article>
  )
}
