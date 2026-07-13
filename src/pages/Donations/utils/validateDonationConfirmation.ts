import { site } from '../../../data/site'

const { errors: messages } = site.pages.donations.confirmation

export interface DonationConfirmationValues {
  paymentDeclared: boolean
  publicationConsent: boolean
}

export type DonationConfirmationErrors = {
  paymentDeclared?: string
}

export const INITIAL_CONFIRMATION_VALUES: DonationConfirmationValues = {
  paymentDeclared: false,
  publicationConsent: false,
}

export const PAYMENT_DECLARED_CHECKBOX_ID = 'donation-payment-declared'
export const PAYMENT_DECLARED_ERROR_ID = 'donation-payment-declared-error'
export const CONFIRMATION_TITLE_ID = 'confirmation-preview-title'
export const PAYMENT_TITLE_ID = 'payment-preview-title'
export const DONATION_COMPLETE_TITLE_ID = 'donation-complete-title'

export function validateDonationConfirmation(
  values: DonationConfirmationValues,
): DonationConfirmationErrors {
  if (!values.paymentDeclared) {
    return { paymentDeclared: messages.paymentDeclaredRequired }
  }

  return {}
}

export function hasDonationConfirmationErrors(errors: DonationConfirmationErrors): boolean {
  return Object.keys(errors).length > 0
}
