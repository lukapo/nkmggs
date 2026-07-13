import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import {
  CONFIRMATION_TITLE_ID,
  PAYMENT_DECLARED_CHECKBOX_ID,
  PAYMENT_DECLARED_ERROR_ID,
  type DonationConfirmationErrors,
  type DonationConfirmationValues,
} from '../utils/validateDonationConfirmation'
import styles from './ConfirmationPreview.module.scss'

const { confirmation } = site.pages.donations

interface ConfirmationPreviewProps {
  values: DonationConfirmationValues
  errors: DonationConfirmationErrors
  showErrors: boolean
  isSendingEmail: boolean
  emailSendError: string | null
  className?: string
  onPaymentDeclaredChange: (checked: boolean) => void
  onPublicationConsentChange: (checked: boolean) => void
  onBack: () => void
  onConfirm: () => void
}

export function ConfirmationPreview({
  values,
  errors,
  showErrors,
  isSendingEmail,
  emailSendError,
  className,
  onPaymentDeclaredChange,
  onPublicationConsentChange,
  onBack,
  onConfirm,
}: ConfirmationPreviewProps) {
  const paymentDeclaredInvalid = showErrors && Boolean(errors.paymentDeclared)
  const isConfirmDisabled = !values.paymentDeclared || isSendingEmail

  return (
    <section
      className={[styles.card, className].filter(Boolean).join(' ')}
      aria-labelledby={CONFIRMATION_TITLE_ID}
    >
      <h2 id={CONFIRMATION_TITLE_ID} className={styles.title} tabIndex={-1}>
        {confirmation.title}
      </h2>

      <aside className={styles.important}>
        <h3 className={styles.importantTitle}>{confirmation.importantTitle}</h3>
        <p className={styles.importantText}>{confirmation.importantText}</p>
      </aside>

      <fieldset className={styles.declarationGroup}>
        <legend className={styles.visuallyHidden}>Obavezna izjava</legend>
        <label className={styles.checkboxRequired}>
          <input
            id={PAYMENT_DECLARED_CHECKBOX_ID}
            type="checkbox"
            name="paymentDeclared"
            checked={values.paymentDeclared}
            onChange={(event) => onPaymentDeclaredChange(event.target.checked)}
            aria-invalid={paymentDeclaredInvalid || undefined}
            aria-describedby={paymentDeclaredInvalid ? PAYMENT_DECLARED_ERROR_ID : undefined}
          />
          <span>{confirmation.statement}</span>
        </label>
        {paymentDeclaredInvalid ? (
          <p id={PAYMENT_DECLARED_ERROR_ID} className={styles.error} role="alert">
            {errors.paymentDeclared}
          </p>
        ) : null}
      </fieldset>

      <div className={styles.optionalConsent}>
        <p className={styles.optionalLabel}>Opcionalno</p>
        <label className={styles.checkboxOptional}>
          <input
            id="donation-publication-consent"
            type="checkbox"
            name="publicationConsent"
            checked={values.publicationConsent}
            onChange={(event) => onPublicationConsentChange(event.target.checked)}
          />
          <span>{confirmation.socialConsent}</span>
        </label>
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="ghost" size="md" onClick={onBack} disabled={isSendingEmail}>
          {confirmation.backToPaymentLabel}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="md"
          className={styles.confirmBtn}
          onClick={onConfirm}
          disabled={isConfirmDisabled}
          aria-disabled={isConfirmDisabled || undefined}
        >
          {isSendingEmail ? confirmation.confirmSendingLabel : confirmation.confirmLabel}
        </Button>
      </div>

      {emailSendError ? (
        <p className={styles.sendError} role="alert">
          {emailSendError}
        </p>
      ) : null}
    </section>
  )
}
