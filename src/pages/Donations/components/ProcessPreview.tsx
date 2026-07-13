import { site } from '../../../data/site'
import styles from './ProcessPreview.module.scss'

const { processPreview } = site.pages.donations

export function ProcessPreview() {
  return (
    <section className={styles.card} aria-labelledby="process-preview-title">
      <h2 id="process-preview-title" className={styles.title}>
        {processPreview.title}
      </h2>
      <p className={styles.intro}>{processPreview.intro}</p>
      <ul className={styles.items}>
        {processPreview.items.map((item) => (
          <li key={item}>
            <span className={styles.marker} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
