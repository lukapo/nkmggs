import { site } from '../../../data/site'
import { buildDonationPaymentDetails } from '../utils/buildDonationPaymentDetails'
import { Hub3Barcode } from './Hub3Barcode'
import type { SubmittedDonation } from '../utils/validateDonationForm'
import styles from './PaymentPreview.module.scss'

const { payment } = site.pages.donations

interface PaymentPreviewProps {
  donation: SubmittedDonation
  className?: string
}

export function PaymentPreview({ donation, className }: PaymentPreviewProps) {
  const paymentDetails = buildDonationPaymentDetails(donation)

  return (
    <section
      className={[styles.card, className].filter(Boolean).join(' ')}
      aria-labelledby="payment-preview-title"
    >
      <h2 id="payment-preview-title" className={styles.title} tabIndex={-1}>
        {payment.title}
      </h2>

      <Hub3Barcode donation={donation} />

      <dl className={styles.details}>
        <div className={styles.detailRow}>
          <dt>Donator</dt>
          <dd>{paymentDetails.donorName}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Primatelj</dt>
          <dd>{paymentDetails.recipient}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>IBAN</dt>
          <dd>{paymentDetails.iban}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>BIC/SWIFT</dt>
          <dd>{paymentDetails.bic}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Banka</dt>
          <dd>{paymentDetails.bank}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Valuta</dt>
          <dd>{paymentDetails.currency}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Opis plaćanja</dt>
          <dd>{paymentDetails.description}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Model</dt>
          <dd>{paymentDetails.model}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Poziv na broj</dt>
          <dd>{paymentDetails.paymentReference}</dd>
        </div>
        <div className={`${styles.detailRow} ${styles.amountRow}`}>
          <dt>Iznos</dt>
          <dd>{paymentDetails.amountFormatted}</dd>
        </div>
      </dl>

      <p className={styles.explanation}>{payment.explanation}</p>
    </section>
  )
}
