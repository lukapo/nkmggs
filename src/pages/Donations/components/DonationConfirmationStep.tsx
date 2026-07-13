import { ConfirmationPreview } from './ConfirmationPreview'
import type { DonationConfirmationErrors, DonationConfirmationValues } from '../utils/validateDonationConfirmation'
import styles from './DonationConfirmationStep.module.scss'

interface DonationConfirmationStepProps {
  values: DonationConfirmationValues
  errors: DonationConfirmationErrors
  showErrors: boolean
  onPaymentDeclaredChange: (checked: boolean) => void
  onPublicationConsentChange: (checked: boolean) => void
  onBack: () => void
  onConfirm: () => void
}

export function DonationConfirmationStep({
  values,
  errors,
  showErrors,
  onPaymentDeclaredChange,
  onPublicationConsentChange,
  onBack,
  onConfirm,
}: DonationConfirmationStepProps) {
  return (
    <div className={styles.step}>
      <ConfirmationPreview
        values={values}
        errors={errors}
        showErrors={showErrors}
        onPaymentDeclaredChange={onPaymentDeclaredChange}
        onPublicationConsentChange={onPublicationConsentChange}
        onBack={onBack}
        onConfirm={onConfirm}
        className={styles.confirmationCard}
      />
    </div>
  )
}
