import type { Hub3FormatInput } from 'pdf417-generator'
import { amountToEuroCents } from './amountToEuroCents'
import {
  HUB3_ADDRESS_PLACEHOLDER,
  type DonationPaymentDetails,
} from './buildDonationPaymentDetails'
import type { SubmittedDonation } from './validateDonationForm'

export function buildHub3Payload(
  donation: SubmittedDonation,
  paymentDetails: DonationPaymentDetails,
): Hub3FormatInput {
  const euroCents = amountToEuroCents(donation.amount)

  return {
    amount: euroCents / 100,
    payerName: paymentDetails.hub3PayerName,
    payerAddress: HUB3_ADDRESS_PLACEHOLDER,
    payerCity: HUB3_ADDRESS_PLACEHOLDER,
    recipientName: paymentDetails.hub3RecipientName,
    recipientAddr: HUB3_ADDRESS_PLACEHOLDER,
    recipientCity: HUB3_ADDRESS_PLACEHOLDER,
    iban: paymentDetails.iban.replace(/\s/g, ''),
    model: paymentDetails.model,
    callNumber: paymentDetails.paymentReference,
    // Prazna šifra namjene dok klub ne potvrdi poslovno pravilo.
    purposeCode: '',
    description: paymentDetails.hub3Description,
  }
}
