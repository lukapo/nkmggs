import { site } from '../../../data/site'

const { errors: messages } = site.pages.donations.form

export interface DonationFormValues {
  firstName: string
  lastName: string
  jerseyNumber: string
  amount: string
}

export type DonationFormField = keyof DonationFormValues

export type DonationFormErrors = Partial<Record<DonationFormField, string>>

export interface SubmittedDonation {
  firstName: string
  lastName: string
  jerseyNumber: number | null
  amount: number
}

export const DONATION_FIELD_IDS: Record<DonationFormField, string> = {
  firstName: 'donation-first-name',
  lastName: 'donation-last-name',
  jerseyNumber: 'donation-jersey',
  amount: 'donation-amount',
}

export const DONATION_FIELD_ORDER: DonationFormField[] = [
  'firstName',
  'lastName',
  'jerseyNumber',
  'amount',
]

export function validateDonationForm(values: DonationFormValues): DonationFormErrors {
  const errors: DonationFormErrors = {}

  const firstName = values.firstName.trim()
  if (!firstName) {
    errors.firstName = messages.firstNameRequired
  } else if (firstName.length < 2) {
    errors.firstName = messages.firstNameMinLength
  }

  const lastName = values.lastName.trim()
  if (!lastName) {
    errors.lastName = messages.lastNameRequired
  } else if (lastName.length < 2) {
    errors.lastName = messages.lastNameMinLength
  }

  const jerseyRaw = values.jerseyNumber.trim()
  if (jerseyRaw !== '') {
    const jerseyNumber = Number(jerseyRaw)
    if (!Number.isInteger(jerseyNumber) || jerseyNumber < 0 || jerseyNumber > 99) {
      errors.jerseyNumber = messages.jerseyNumberInvalid
    }
  }

  const amountRaw = values.amount.trim()
  if (!amountRaw) {
    errors.amount = messages.amountRequired
  } else {
    const amount = Number(amountRaw)
    if (!Number.isFinite(amount) || amount <= 0) {
      errors.amount = messages.amountInvalid
    }
  }

  return errors
}

export function hasDonationFormErrors(errors: DonationFormErrors): boolean {
  return Object.keys(errors).length > 0
}

export function buildSubmittedDonation(values: DonationFormValues): SubmittedDonation {
  const jerseyRaw = values.jerseyNumber.trim()

  return {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    jerseyNumber: jerseyRaw === '' ? null : Number(jerseyRaw),
    amount: Number(values.amount.trim()),
  }
}
