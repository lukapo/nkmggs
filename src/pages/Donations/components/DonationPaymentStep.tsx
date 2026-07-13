import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { PaymentPreview } from './PaymentPreview'
import type { SubmittedDonation } from '../utils/validateDonationForm'
import styles from './DonationPaymentStep.module.scss'

const { payment } = site.pages.donations

interface DonationPaymentStepProps {
  donation: SubmittedDonation
  onBack: () => void
  onContinue: () => void
}

export function DonationPaymentStep({ donation, onBack, onContinue }: DonationPaymentStepProps) {
  return (
    <div className={styles.step}>
      <PaymentPreview donation={donation} className={styles.paymentCard} />

      <div className={styles.actions}>
        <Button type="button" variant="ghost" size="md" onClick={onBack}>
          {payment.backLabel}
        </Button>
        <Button type="button" variant="secondary" size="md" onClick={onContinue}>
          {payment.continueLabel}
        </Button>
      </div>
    </div>
  )
}
