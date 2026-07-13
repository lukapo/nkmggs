import { ProcessPreview } from './ProcessPreview'
import { PaymentPreview } from './PaymentPreview'
import { ConfirmationSummaryPreview } from './ConfirmationSummaryPreview'
import { ThankYouLockedPreview } from './ThankYouLockedPreview'
import { ThankYouPreview } from './ThankYouPreview'
import { DonationActionsPreview } from './DonationActionsPreview'
import type { SubmittedDonation } from '../utils/validateDonationForm'
import styles from './DonationRightPreview.module.scss'

interface DonationRightPreviewProps {
  currentStep: number
  submittedDonation: SubmittedDonation | null
}

export function DonationRightPreview({
  currentStep,
  submittedDonation,
}: DonationRightPreviewProps) {
  const showThankYou = currentStep === 4

  return (
    <div className={styles.panel}>
      {currentStep === 1 ? <ProcessPreview /> : null}
      {currentStep === 2 && submittedDonation ? <PaymentPreview donation={submittedDonation} /> : null}
      {currentStep === 3 ? <ConfirmationSummaryPreview /> : null}

      {showThankYou ? (
        <div className={styles.thankYouStage}>
          <ThankYouPreview />
          <DonationActionsPreview />
        </div>
      ) : (
        <ThankYouLockedPreview />
      )}
    </div>
  )
}
