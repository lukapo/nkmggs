import { site } from '../../../data/site'
import styles from './ThankYouLockedPreview.module.scss'

const { thankYouLocked } = site.pages.donations

export function ThankYouLockedPreview() {
  return (
    <aside className={styles.card} aria-label="Zahvalnica — još nije dostupna">
      <div className={styles.silhouette} aria-hidden="true">
        <div className={styles.jersey}>
          <div className={styles.collar} />
          <div className={styles.nameArea} />
          <div className={styles.numberArea} />
        </div>
      </div>
      <p className={styles.message}>{thankYouLocked.message}</p>
    </aside>
  )
}
