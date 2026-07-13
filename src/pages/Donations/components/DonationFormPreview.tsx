import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import type { DonationFormErrors, DonationFormField, DonationFormValues } from '../utils/validateDonationForm'
import styles from './DonationFormPreview.module.scss'
import type { FormEvent } from 'react'

const { form } = site.pages.donations

interface DonationFormPreviewProps {
  values: DonationFormValues
  errors: DonationFormErrors
  showErrors: boolean
  onFieldChange: (field: DonationFormField, value: string) => void
  onRandomJersey: () => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function getDescribedBy(
  field: DonationFormField,
  showErrors: boolean,
  errors: DonationFormErrors,
  hintId?: string,
): string | undefined {
  const errorId = `donation-${field === 'jerseyNumber' ? 'jersey' : field === 'firstName' ? 'first-name' : field === 'lastName' ? 'last-name' : 'amount'}-error`
  const hasError = showErrors && Boolean(errors[field])

  if (hasError) {
    return errorId
  }

  return hintId
}

export function DonationFormPreview({
  values,
  errors,
  showErrors,
  onFieldChange,
  onRandomJersey,
  onSubmit,
}: DonationFormPreviewProps) {
  const firstNameInvalid = showErrors && Boolean(errors.firstName)
  const lastNameInvalid = showErrors && Boolean(errors.lastName)
  const jerseyInvalid = showErrors && Boolean(errors.jerseyNumber)
  const amountInvalid = showErrors && Boolean(errors.amount)

  return (
    <section className={styles.card} aria-labelledby="donation-form-title">
      <h2 id="donation-form-title" className={styles.title} tabIndex={-1}>
        Vaši podaci
      </h2>

      <form className={styles.form} noValidate onSubmit={onSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="donation-first-name">
              {form.firstNameLabel}
            </label>
            <input
              id="donation-first-name"
              className={`${styles.input} ${firstNameInvalid ? styles.inputError : ''}`}
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={(event) => onFieldChange('firstName', event.target.value)}
              autoComplete="given-name"
              aria-invalid={firstNameInvalid || undefined}
              aria-describedby={getDescribedBy('firstName', showErrors, errors)}
            />
            {firstNameInvalid ? (
              <p id="donation-first-name-error" className={styles.error} role="alert">
                {errors.firstName}
              </p>
            ) : null}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="donation-last-name">
              {form.lastNameLabel}
            </label>
            <input
              id="donation-last-name"
              className={`${styles.input} ${lastNameInvalid ? styles.inputError : ''}`}
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={(event) => onFieldChange('lastName', event.target.value)}
              autoComplete="family-name"
              aria-invalid={lastNameInvalid || undefined}
              aria-describedby={getDescribedBy('lastName', showErrors, errors)}
            />
            {lastNameInvalid ? (
              <p id="donation-last-name-error" className={styles.error} role="alert">
                {errors.lastName}
              </p>
            ) : null}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="donation-jersey">
            {form.jerseyNumberLabel}
          </label>
          <div className={styles.jerseyRow}>
            <input
              id="donation-jersey"
              className={`${styles.input} ${jerseyInvalid ? styles.inputError : ''}`}
              type="number"
              name="jerseyNumber"
              value={values.jerseyNumber}
              onChange={(event) => onFieldChange('jerseyNumber', event.target.value)}
              min={0}
              max={99}
              step={1}
              inputMode="numeric"
              aria-invalid={jerseyInvalid || undefined}
              aria-describedby={getDescribedBy('jerseyNumber', showErrors, errors, 'donation-jersey-hint')}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className={styles.randomBtn}
              onClick={onRandomJersey}
            >
              {form.randomButtonLabel}
            </Button>
          </div>
          {jerseyInvalid ? (
            <p id="donation-jersey-error" className={styles.error} role="alert">
              {errors.jerseyNumber}
            </p>
          ) : (
            <p id="donation-jersey-hint" className={styles.hint}>
              {form.jerseyHint}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="donation-amount">
            {form.amountLabel}
          </label>
          <input
            id="donation-amount"
            className={`${styles.input} ${amountInvalid ? styles.inputError : ''}`}
            type="number"
            name="amount"
            value={values.amount}
            onChange={(event) => onFieldChange('amount', event.target.value)}
            min={1}
            step="0.01"
            inputMode="decimal"
            aria-invalid={amountInvalid || undefined}
            aria-describedby={getDescribedBy('amount', showErrors, errors)}
          />
          {amountInvalid ? (
            <p id="donation-amount-error" className={styles.error} role="alert">
              {errors.amount}
            </p>
          ) : null}
        </div>

        <Button type="submit" variant="primary" size="lg" className={styles.submit}>
          {form.submitLabel}
        </Button>
      </form>
    </section>
  )
}
