import emailjs from '@emailjs/browser'
import { getEmailJsConfig, getEmailJsMissingEnvVarNames } from '../config/emailjs'
import { buildDonationPaymentDetails } from '../pages/Donations/utils/buildDonationPaymentDetails'
import { normalizeSpaces } from '../pages/Donations/utils/hub3Text'
import type { DonationConfirmationValues } from '../pages/Donations/utils/validateDonationConfirmation'
import type { SubmittedDonation } from '../pages/Donations/utils/validateDonationForm'

export interface DonationEmailTemplateParams {
  donor_name: string
  donation_amount: string
  jersey_number: string
  reference_number: string
  submitted_at: string
  publication_consent: string
}

export interface SendDonationEmailInput {
  donation: SubmittedDonation
  confirmation: DonationConfirmationValues
}

export type SendDonationEmailResult =
  | { status: 'success' }
  | { status: 'config_missing' }
  | { status: 'error' }

function buildDonationEmailTemplateParams(
  donation: SubmittedDonation,
  confirmation: DonationConfirmationValues,
): DonationEmailTemplateParams {
  const paymentDetails = buildDonationPaymentDetails(donation)
  const submittedAt = new Intl.DateTimeFormat('hr-HR', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(new Date())

  return {
    donor_name: normalizeSpaces(`${donation.firstName} ${donation.lastName}`),
    donation_amount: paymentDetails.amountFormatted,
    jersey_number: String(donation.jerseyNumber),
    reference_number: donation.paymentReference,
    submitted_at: submittedAt,
    publication_consent: confirmation.publicationConsent ? 'DA' : 'NE',
  }
}

export async function sendDonationEmail({
  donation,
  confirmation,
}: SendDonationEmailInput): Promise<SendDonationEmailResult> {
  const configResult = getEmailJsConfig()

  if (configResult.status === 'missing') {
    if (import.meta.env.DEV) {
      const missingEnvNames = getEmailJsMissingEnvVarNames(configResult.missingKeys)
      console.error(
        `EmailJS konfiguracija nije potpuna. Nedostaju varijable: ${missingEnvNames.join(', ')}.`,
      )
    }

    return { status: 'config_missing' }
  }

  const { serviceId, templateId, publicKey } = configResult.config
  const templateParams = buildDonationEmailTemplateParams(donation, confirmation)

  try {
    await emailjs.send(
      serviceId,
      templateId,
      templateParams as unknown as Record<string, unknown>,
      { publicKey },
    )
    return { status: 'success' }
  } catch (error) {
    console.error('EmailJS donation notification failed:', error)
    return { status: 'error' }
  }
}
