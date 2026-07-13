import { useState, type FormEvent } from 'react'
import { Container } from '../../../components/ui/Container/Container'
import { DonationStepper } from '../components/DonationStepper'
import { DonationFormPreview } from '../components/DonationFormPreview'
import { ConfirmationPreview } from '../components/ConfirmationPreview'
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
import styles from './DonationWorkflowSection.module.scss'

const INITIAL_FORM_VALUES: DonationFormValues = {
  firstName: '',
  lastName: '',
  jerseyNumber: '',
  amount: '',
}

export function DonationWorkflowSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formValues, setFormValues] = useState<DonationFormValues>(INITIAL_FORM_VALUES)
  const [errors, setErrors] = useState<DonationFormErrors>({})
  const [showErrors, setShowErrors] = useState(false)
  const [submittedDonation, setSubmittedDonation] = useState<SubmittedDonation | null>(null)

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

        <div className={styles.workflow}>
          <div className={styles.left}>
            <DonationFormPreview
              values={formValues}
              errors={errors}
              showErrors={showErrors}
              onFieldChange={updateField}
              onRandomJersey={handleRandomJersey}
              onSubmit={handleSubmit}
            />
            <ConfirmationPreview />
          </div>

          <div className={styles.right}>
            <DonationRightPreview
              currentStep={currentStep}
              submittedDonation={submittedDonation}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
