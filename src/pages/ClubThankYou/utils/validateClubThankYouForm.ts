import { site } from '../../../data/site'

const { errors: messages } = site.pages.clubThankYou

export interface ClubThankYouFormValues {
  fullName: string
  jerseyNumber: string
}

export type ClubThankYouFormField = keyof ClubThankYouFormValues

export type ClubThankYouFormErrors = Partial<Record<ClubThankYouFormField, string>>

export const CLUB_THANK_YOU_FIELD_IDS: Record<ClubThankYouFormField, string> = {
  fullName: 'club-thankyou-full-name',
  jerseyNumber: 'club-thankyou-jersey-number',
}

export const CLUB_THANK_YOU_FIELD_ORDER: ClubThankYouFormField[] = ['fullName', 'jerseyNumber']

export function validateClubThankYouForm(values: ClubThankYouFormValues): ClubThankYouFormErrors {
  const errors: ClubThankYouFormErrors = {}

  const fullName = values.fullName.trim()
  if (!fullName) {
    errors.fullName = messages.fullNameRequired
  } else if (fullName.length < 2) {
    errors.fullName = messages.fullNameMinLength
  }

  const jerseyRaw = values.jerseyNumber.trim()
  if (!jerseyRaw) {
    errors.jerseyNumber = messages.jerseyNumberRequired
  } else {
    const jerseyNumber = Number(jerseyRaw)
    if (!Number.isInteger(jerseyNumber) || jerseyNumber < 0 || jerseyNumber > 99) {
      errors.jerseyNumber = messages.jerseyNumberInvalid
    }
  }

  return errors
}

export function hasClubThankYouFormErrors(errors: ClubThankYouFormErrors): boolean {
  return Object.keys(errors).length > 0
}

export function buildClubThankYouSource(values: ClubThankYouFormValues): {
  donorFullName: string
  jerseyNumber: number
} {
  return {
    donorFullName: values.fullName.trim().replace(/\s+/g, ' '),
    jerseyNumber: Number(values.jerseyNumber.trim()),
  }
}
