import { site } from '../../../data/site'
import type { SubmittedDonation } from '../utils/validateDonationForm'
import styles from './PaymentPreview.module.scss'

const { payment } = site.pages.donations

interface PaymentPreviewProps {
  donation: SubmittedDonation
  className?: string
}

function formatAmount(amount: number): string {
  return `${new Intl.NumberFormat('hr-HR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)} EUR`
}

export function PaymentPreview({ donation, className }: PaymentPreviewProps) {
  const { details } = payment
  const donorName = `${donation.firstName} ${donation.lastName}`
  const paymentDescription = `Donacija - ${donorName}`

  return (
    <section
      className={[styles.card, className].filter(Boolean).join(' ')}
      aria-labelledby="payment-preview-title"
    >
      <h2 id="payment-preview-title" className={styles.title} tabIndex={-1}>
        {payment.title}
      </h2>

      <div className={styles.qrPlaceholder} aria-hidden="true">
        <div className={styles.qrPattern} />
        <span className={styles.qrLabel}>{payment.qrPlaceholder}</span>
      </div>

      <dl className={styles.details}>
        <div className={styles.detailRow}>
          <dt>Donator</dt>
          <dd>{donorName}</dd>
        </div>
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
          <dd>{paymentDescription}</dd>
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
          <dd>{formatAmount(donation.amount)}</dd>
        </div>
      </dl>

      <p className={styles.explanation}>{payment.explanation}</p>
    </section>
  )
}
