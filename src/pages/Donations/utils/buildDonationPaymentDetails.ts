import { site } from '../../../data/site'
import { normalizeSpaces, truncateHub3Text } from './hub3Text'
import type { SubmittedDonation } from './validateDonationForm'

const { details } = site.pages.donations.payment

export const HUB3_FIELD_LIMITS = {
  payerName: 30,
  recipientName: 25,
  description: 35,
} as const

/** HUB3 biblioteka zahtijeva ne-prazna polja adrese; adrese nisu prikupljene u formi. */
export const HUB3_ADDRESS_PLACEHOLDER = '-'

export interface DonationPaymentDetails {
  donorName: string
  recipient: string
  iban: string
  bic: string
  bank: string
  currency: string
  model: string
  paymentReference: string
  amount: number
  amountFormatted: string
  description: string
  hub3Description: string
  hub3PayerName: string
  hub3RecipientName: string
}

function formatAmount(amount: number): string {
  return `${new Intl.NumberFormat('hr-HR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)} EUR`
}

export function buildDonationPaymentDetails(donation: SubmittedDonation): DonationPaymentDetails {
  const rawDonorName = normalizeSpaces(`${donation.firstName} ${donation.lastName}`)
  const hub3PayerName = truncateHub3Text(rawDonorName, HUB3_FIELD_LIMITS.payerName)
  const description = `Donacija - ${rawDonorName}`
  const hub3Description = truncateHub3Text(description, HUB3_FIELD_LIMITS.description)

  return {
    donorName: hub3PayerName,
    recipient: details.recipient,
    iban: details.iban,
    bic: details.bic,
    bank: details.bank,
    currency: details.currency,
    model: details.model,
    paymentReference: donation.paymentReference,
    amount: donation.amount,
    amountFormatted: formatAmount(donation.amount),
    description: hub3Description,
    hub3Description,
    hub3PayerName,
    hub3RecipientName: truncateHub3Text(details.recipient, HUB3_FIELD_LIMITS.recipientName),
  }
}
