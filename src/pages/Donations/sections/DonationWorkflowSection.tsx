import { useState, type FormEvent } from 'react'
import { Container } from '../../../components/ui/Container/Container'
import { DonationStepper } from '../components/DonationStepper'
import { DonationFormPreview } from '../components/DonationFormPreview'
import { DonationPaymentStep } from '../components/DonationPaymentStep'
import { DonationConfirmationStep } from '../components/DonationConfirmationStep'
import { DonationCompleteStep } from '../components/DonationCompleteStep'
import { DonationRightPreview } from '../components/DonationRightPreview'
import {
  buildSubmittedDonation,
  DONATION_FIELD_IDS,
  DONATION_FIELD_ORDER,
  hasDonationFormErrors,
  validateDonationForm,
  type DonationFormErrors,
  type DonationFormField,
  type DonationFormValues,
  type SubmittedDonation,
} from '../utils/validateDonationForm'
import {
  CONFIRMATION_TITLE_ID,
  INITIAL_CONFIRMATION_VALUES,
  PAYMENT_DECLARED_CHECKBOX_ID,
  PAYMENT_TITLE_ID,
  DONATION_COMPLETE_TITLE_ID,
  hasDonationConfirmationErrors,
  validateDonationConfirmation,
  type DonationConfirmationErrors,
  type DonationConfirmationValues,
} from '../utils/validateDonationConfirmation'
import styles from './DonationWorkflowSection.module.scss'

const INITIAL_FORM_VALUES: DonationFormValues = {
  firstName: '',
  lastName: '',
  jerseyNumber: '',
  amount: '',
}

const FORM_TITLE_ID = 'donation-form-title'
const FORM_FIRST_FIELD_ID = 'donation-first-name'

function focusElementById(elementId: string) {
  requestAnimationFrame(() => {
    document.getElementById(elementId)?.focus()
  })
}

export function DonationWorkflowSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formValues, setFormValues] = useState<DonationFormValues>(INITIAL_FORM_VALUES)
  const [errors, setErrors] = useState<DonationFormErrors>({})
  const [showErrors, setShowErrors] = useState(false)
  const [submittedDonation, setSubmittedDonation] = useState<SubmittedDonation | null>(null)
  const [confirmationValues, setConfirmationValues] = useState<DonationConfirmationValues>(
    INITIAL_CONFIRMATION_VALUES,
  )
  const [confirmationErrors, setConfirmationErrors] = useState<DonationConfirmationErrors>({})
  const [showConfirmationErrors, setShowConfirmationErrors] = useState(false)

  const updateField = (field: DonationFormField, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }))

    if (showErrors) {
      setErrors((current) => {
        if (!current[field]) {
          return current
        }

        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  const handleRandomJersey = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    updateField('jerseyNumber', String(randomNumber))
  }

  const focusFormEntry = () => {
    requestAnimationFrame(() => {
      const formTitle = document.getElementById(FORM_TITLE_ID)

      if (formTitle) {
        formTitle.focus()
        return
      }

      document.getElementById(FORM_FIRST_FIELD_ID)?.focus()
    })
  }

  const focusPaymentStep = () => {
    focusElementById(PAYMENT_TITLE_ID)
  }

  const focusConfirmationStep = () => {
    const title = document.getElementById(CONFIRMATION_TITLE_ID)

    if (title) {
      focusElementById(CONFIRMATION_TITLE_ID)
      return
    }

    focusElementById(PAYMENT_DECLARED_CHECKBOX_ID)
  }

  const focusCompleteStep = () => {
    focusElementById(DONATION_COMPLETE_TITLE_ID)
  }

  const handleBackToForm = () => {
    setCurrentStep(1)
    focusFormEntry()
  }

  const handleContinueToConfirmation = () => {
    setCurrentStep(3)
    focusConfirmationStep()
  }

  const handleBackToPayment = () => {
    setCurrentStep(2)
    focusPaymentStep()
  }

  const handlePaymentDeclaredChange = (checked: boolean) => {
    setConfirmationValues((current) => ({ ...current, paymentDeclared: checked }))

    if (showConfirmationErrors && checked) {
      setConfirmationErrors((current) => {
        if (!current.paymentDeclared) {
          return current
        }

        const next = { ...current }
        delete next.paymentDeclared
        return next
      })
    }
  }

  const handlePublicationConsentChange = (checked: boolean) => {
    setConfirmationValues((current) => ({ ...current, publicationConsent: checked }))
  }

  const handleConfirmDonation = () => {
    const validationErrors = validateDonationConfirmation(confirmationValues)
    setConfirmationErrors(validationErrors)
    setShowConfirmationErrors(true)

    if (hasDonationConfirmationErrors(validationErrors)) {
      focusElementById(PAYMENT_DECLARED_CHECKBOX_ID)
      return
    }

    setCurrentStep(4)
    focusCompleteStep()
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateDonationForm(formValues)
    setErrors(validationErrors)
    setShowErrors(true)

    if (hasDonationFormErrors(validationErrors)) {
      const firstInvalidField = DONATION_FIELD_ORDER.find((field) => validationErrors[field])

      if (firstInvalidField) {
        document.getElementById(DONATION_FIELD_IDS[firstInvalidField])?.focus()
      }

      return
    }

    setSubmittedDonation(buildSubmittedDonation(formValues))
    setCurrentStep(2)
  }

  return (
    <section className={styles.section} aria-label="Proces donacije">
      <Container>
        <DonationStepper currentStep={currentStep} />

        <div
          className={`${styles.workflow} ${currentStep === 1 ? styles.workflowSplit : styles.workflowSingle}`}
        >
          {currentStep === 1 ? (
            <>
              <div className={styles.main}>
                <DonationFormPreview
                  values={formValues}
                  errors={errors}
                  showErrors={showErrors}
                  onFieldChange={updateField}
                  onRandomJersey={handleRandomJersey}
                  onSubmit={handleSubmit}
                />
              </div>
              <div className={styles.aside}>
                <DonationRightPreview />
              </div>
            </>
          ) : null}

          {currentStep === 2 && submittedDonation ? (
            <div className={styles.main}>
              <DonationPaymentStep
                donation={submittedDonation}
                onBack={handleBackToForm}
                onContinue={handleContinueToConfirmation}
              />
            </div>
          ) : null}

          {currentStep === 3 ? (
            <div className={styles.main}>
              <DonationConfirmationStep
                values={confirmationValues}
                errors={confirmationErrors}
                showErrors={showConfirmationErrors}
                onPaymentDeclaredChange={handlePaymentDeclaredChange}
                onPublicationConsentChange={handlePublicationConsentChange}
                onBack={handleBackToPayment}
                onConfirm={handleConfirmDonation}
              />
            </div>
          ) : null}

          {currentStep === 4 ? (
            <div className={styles.main}>
              <DonationCompleteStep />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
