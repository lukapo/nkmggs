import { useCallback, useState } from 'react'
import { site } from '../../../data/site'
import { ThankYouImageCanvas, type GeneratedThankYouImage } from './ThankYouImageCanvas'
import { DonationActionsPreview } from './DonationActionsPreview'
import { buildThankYouFileName } from '../utils/buildThankYouFileName'
import { normalizeSpaces } from '../utils/hub3Text'
import { DONATION_COMPLETE_TITLE_ID } from '../utils/validateDonationConfirmation'
import type { SubmittedDonation } from '../utils/validateDonationForm'
import styles from './DonationCompleteStep.module.scss'

const { thankYou } = site.pages.donations

interface DonationCompleteStepProps {
  donation: SubmittedDonation
  onFinish: () => void
}

export function DonationCompleteStep({ donation, onFinish }: DonationCompleteStepProps) {
  const [generatedImage, setGeneratedImage] = useState<GeneratedThankYouImage | null>(null)

  const handleGenerated = useCallback((image: GeneratedThankYouImage) => {
    setGeneratedImage(image)
  }, [])

  const thankYouSource = {
    donorFullName: normalizeSpaces(`${donation.firstName} ${donation.lastName}`),
    jerseyNumber: donation.jerseyNumber,
  }

  return (
    <div className={styles.step}>
      <section className={styles.card} aria-labelledby={DONATION_COMPLETE_TITLE_ID}>
        <h2 id={DONATION_COMPLETE_TITLE_ID} className={styles.title} tabIndex={-1}>
          {thankYou.title}
        </h2>
        <p className={styles.message}>{thankYou.gratitudeMessage}</p>

        <div className={styles.successNotice} role="status">
          <p className={styles.successMessage}>{thankYou.recordedMessage}</p>
          <p className={styles.successDisclaimer}>{thankYou.paymentDisclaimer}</p>
        </div>

        <ThankYouImageCanvas source={thankYouSource} onGenerated={handleGenerated} />
      </section>

      <DonationActionsPreview
        thankYouBlob={generatedImage?.blob ?? null}
        downloadFileName={buildThankYouFileName(donation.firstName, donation.lastName)}
        onFinish={onFinish}
      />
    </div>
  )
}
