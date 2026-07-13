import { useCallback, useState, type FormEvent } from 'react'
import { site } from '../../data/site'
import { SEO } from '../../components/seo/SEO'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { Button } from '../../components/ui/Button/Button'
import {
  ThankYouImageCanvas,
  type GeneratedThankYouImage,
  type ThankYouImageSource,
} from '../Donations/components/ThankYouImageCanvas'
import { ThankYouImageActions } from '../Donations/components/ThankYouImageActions'
import { buildThankYouFileNameFromFullName } from '../Donations/utils/buildThankYouFileName'
import {
  buildClubThankYouSource,
  CLUB_THANK_YOU_FIELD_IDS,
  CLUB_THANK_YOU_FIELD_ORDER,
  hasClubThankYouFormErrors,
  validateClubThankYouForm,
  type ClubThankYouFormErrors,
  type ClubThankYouFormValues,
} from './utils/validateClubThankYouForm'
import styles from './ClubThankYouPage.module.scss'

const { clubThankYou } = site.pages

const INITIAL_FORM_VALUES: ClubThankYouFormValues = {
  fullName: '',
  jerseyNumber: '',
}

const FORM_TITLE_ID = 'club-thankyou-form-title'

function focusFormEntry() {
  requestAnimationFrame(() => {
    const formTitle = document.getElementById(FORM_TITLE_ID)

    if (formTitle) {
      formTitle.focus()
      return
    }

    document.getElementById(CLUB_THANK_YOU_FIELD_IDS.fullName)?.focus()
  })
}

export function ClubThankYouPage() {
  const [formValues, setFormValues] = useState<ClubThankYouFormValues>(INITIAL_FORM_VALUES)
  const [errors, setErrors] = useState<ClubThankYouFormErrors>({})
  const [showErrors, setShowErrors] = useState(false)
  const [generatedSource, setGeneratedSource] = useState<ThankYouImageSource | null>(null)
  const [generatedImage, setGeneratedImage] = useState<GeneratedThankYouImage | null>(null)
  const [generationKey, setGenerationKey] = useState(0)

  const handleGenerated = useCallback((image: GeneratedThankYouImage) => {
    setGeneratedImage(image)
  }, [])

  const updateField = (field: keyof ClubThankYouFormValues, value: string) => {
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateClubThankYouForm(formValues)
    setErrors(validationErrors)
    setShowErrors(true)

    if (hasClubThankYouFormErrors(validationErrors)) {
      const firstInvalidField = CLUB_THANK_YOU_FIELD_ORDER.find((field) => validationErrors[field])

      if (firstInvalidField) {
        document.getElementById(CLUB_THANK_YOU_FIELD_IDS[firstInvalidField])?.focus()
      }

      return
    }

    setGeneratedImage(null)
    setGeneratedSource(buildClubThankYouSource(formValues))
    setGenerationKey((current) => current + 1)
  }

  const handleReset = () => {
    setFormValues(INITIAL_FORM_VALUES)
    setErrors({})
    setShowErrors(false)
    setGeneratedSource(null)
    setGeneratedImage(null)
    setGenerationKey((current) => current + 1)
    focusFormEntry()
  }

  const fullNameInvalid = showErrors && Boolean(errors.fullName)
  const jerseyInvalid = showErrors && Boolean(errors.jerseyNumber)
  const downloadFileName = generatedSource
    ? buildThankYouFileNameFromFullName(generatedSource.donorFullName)
    : 'zahvalnica-donator.png'

  return (
    <section className={styles.page} aria-labelledby={FORM_TITLE_ID}>
      <SEO
        title={site.seo.global.title}
        description={site.seo.global.description}
        robots="noindex,nofollow"
      />
      <Container>
        <div className={styles.content}>
          <SectionHeading
            title={clubThankYou.title}
            titleId={FORM_TITLE_ID}
            description={clubThankYou.intro}
            align="center"
          />

          <section className={styles.card} aria-label="Podaci za zahvalnicu">
            <form className={styles.form} noValidate onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor={CLUB_THANK_YOU_FIELD_IDS.fullName}>
                  {clubThankYou.fullNameLabel}
                </label>
                <input
                  id={CLUB_THANK_YOU_FIELD_IDS.fullName}
                  className={`${styles.input} ${fullNameInvalid ? styles.inputError : ''}`}
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  autoComplete="name"
                  aria-invalid={fullNameInvalid || undefined}
                  aria-describedby={fullNameInvalid ? 'club-thankyou-full-name-error' : undefined}
                />
                {fullNameInvalid ? (
                  <p id="club-thankyou-full-name-error" className={styles.error} role="alert">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={CLUB_THANK_YOU_FIELD_IDS.jerseyNumber}>
                  {clubThankYou.jerseyNumberLabel}
                </label>
                <input
                  id={CLUB_THANK_YOU_FIELD_IDS.jerseyNumber}
                  className={`${styles.input} ${jerseyInvalid ? styles.inputError : ''}`}
                  type="number"
                  name="jerseyNumber"
                  value={formValues.jerseyNumber}
                  onChange={(event) => updateField('jerseyNumber', event.target.value)}
                  min={0}
                  max={99}
                  step={1}
                  inputMode="numeric"
                  aria-invalid={jerseyInvalid || undefined}
                  aria-describedby={jerseyInvalid ? 'club-thankyou-jersey-number-error' : undefined}
                />
                {jerseyInvalid ? (
                  <p id="club-thankyou-jersey-number-error" className={styles.error} role="alert">
                    {errors.jerseyNumber}
                  </p>
                ) : null}
              </div>

              <Button type="submit" variant="primary" size="md" className={styles.submitBtn}>
                {clubThankYou.generateLabel}
              </Button>
            </form>
          </section>

          {generatedSource ? (
            <section className={styles.previewCard} aria-labelledby="club-thankyou-preview-title">
              <h2 id="club-thankyou-preview-title" className={styles.previewTitle}>
                {clubThankYou.previewTitle}
              </h2>

              <ThankYouImageCanvas
                key={generationKey}
                source={generatedSource}
                onGenerated={handleGenerated}
              />

              <ThankYouImageActions
                thankYouBlob={generatedImage?.blob ?? null}
                downloadFileName={downloadFileName}
                className={styles.previewActions}
              />

              <Button
                type="button"
                variant="ghost"
                size="md"
                className={styles.resetBtn}
                onClick={handleReset}
              >
                {clubThankYou.resetLabel}
              </Button>
            </section>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
