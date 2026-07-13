import { ProcessPreview } from './ProcessPreview'
import { PaymentPreview } from './PaymentPreview'
import { ConfirmationSummaryPreview } from './ConfirmationSummaryPreview'
import { ThankYouLockedPreview } from './ThankYouLockedPreview'
import { ThankYouPreview } from './ThankYouPreview'
import { DonationActionsPreview } from './DonationActionsPreview'
import styles from './DonationRightPreview.module.scss'

interface DonationRightPreviewProps {
  currentStep: number
}

export function DonationRightPreview({ currentStep }: DonationRightPreviewProps) {
  const showThankYou = currentStep === 4

  return (
    <div className={styles.panel}>
      {currentStep === 1 ? <ProcessPreview /> : null}
      {currentStep === 2 ? <PaymentPreview /> : null}
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
