import { ProcessPreview } from './ProcessPreview'
import styles from './DonationRightPreview.module.scss'

/** Informativni panel — prikazuje se samo u koraku 1. */
export function DonationRightPreview() {
  return (
    <div className={styles.panel}>
      <ProcessPreview />
    </div>
  )
}
