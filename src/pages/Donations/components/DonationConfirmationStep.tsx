import { ConfirmationPreview } from './ConfirmationPreview'
import type { DonationConfirmationErrors, DonationConfirmationValues } from '../utils/validateDonationConfirmation'
import styles from './DonationConfirmationStep.module.scss'

interface DonationConfirmationStepProps {
  values: DonationConfirmationValues
  errors: DonationConfirmationErrors
  showErrors: boolean
  isSendingEmail: boolean
  emailSendError: string | null
  onPaymentDeclaredChange: (checked: boolean) => void
  onPublicationConsentChange: (checked: boolean) => void
  onBack: () => void
  onConfirm: () => void
}

export function DonationConfirmationStep({
  values,
  errors,
  showErrors,
  isSendingEmail,
  emailSendError,
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
        isSendingEmail={isSendingEmail}
        emailSendError={emailSendError}
        onPaymentDeclaredChange={onPaymentDeclaredChange}
        onPublicationConsentChange={onPublicationConsentChange}
        onBack={onBack}
        onConfirm={onConfirm}
        className={styles.confirmationCard}
      />
    </div>
  )
}
