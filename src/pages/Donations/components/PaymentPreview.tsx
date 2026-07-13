import { site } from '../../../data/site'
import styles from './PaymentPreview.module.scss'

const { payment } = site.pages.donations

export function PaymentPreview() {
  const { details } = payment

  return (
    <section className={styles.card} aria-labelledby="payment-preview-title">
      <h2 id="payment-preview-title" className={styles.title}>
        {payment.title}
      </h2>

      <div className={styles.qrPlaceholder} aria-hidden="true">
        <div className={styles.qrPattern} />
        <span className={styles.qrLabel}>{payment.qrPlaceholder}</span>
      </div>

      <dl className={styles.details}>
        <div className={styles.detailRow}>
          <dt>Primatelj</dt>
          <dd>{details.recipient}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>IBAN</dt>
          <dd>{details.iban}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>BIC/SWIFT</dt>
          <dd>{details.bic}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Banka</dt>
          <dd>{details.bank}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Valuta</dt>
          <dd>{details.currency}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Opis plaćanja</dt>
          <dd>{details.description}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Model</dt>
          <dd>{details.model}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Poziv na broj</dt>
          <dd>{details.reference}</dd>
        </div>
        <div className={`${styles.detailRow} ${styles.amountRow}`}>
          <dt>Iznos</dt>
          <dd>{details.amount}</dd>
        </div>
      </dl>

      <p className={styles.explanation}>{payment.explanation}</p>
    </section>
  )
}
