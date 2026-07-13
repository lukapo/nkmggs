const LOCALE = 'hr-HR'

function normalizeSpaces(value: string): string {
  return value.trim().replace(/\s+/g, ' ')
}

function getFirstLetter(word: string): string {
  for (const character of word) {
    if (/\p{L}/u.test(character)) {
      return character.toLocaleUpperCase(LOCALE)
    }
  }

  return ''
}

export function formatDonorJerseyName(firstName: string, lastName: string): string {
  const normalized = normalizeSpaces(`${firstName} ${lastName}`)

  if (!normalized) {
    return ''
  }

  const parts = normalized.split(' ').filter(Boolean)

  if (parts.length === 1) {
    return parts[0].toLocaleUpperCase(LOCALE)
  }

  const surname = parts[parts.length - 1].toLocaleUpperCase(LOCALE)
  const givenNames = parts.slice(0, -1)
  const initials = givenNames
    .map((name) => {
      const letter = getFirstLetter(name)
      return letter ? `${letter}.` : ''
    })
    .filter(Boolean)
    .join(' ')

  return initials ? `${initials} ${surname}` : surname
}

export function formatDonorJerseyNameFromFullName(fullName: string): string {
  const normalized = normalizeSpaces(fullName)

  if (!normalized) {
    return ''
  }

  const parts = normalized.split(' ').filter(Boolean)

  if (parts.length === 1) {
    return formatDonorJerseyName(parts[0], '')
  }

  const lastName = parts[parts.length - 1]
  const firstName = parts.slice(0, -1).join(' ')
  return formatDonorJerseyName(firstName, lastName)
}
