const FILENAME_CHAR_MAP: Record<string, string> = {
  č: 'c',
  ć: 'c',
  đ: 'd',
  š: 's',
  ž: 'z',
  Č: 'c',
  Ć: 'c',
  Đ: 'd',
  Š: 's',
  Ž: 'z',
}

function transliterateForFileName(value: string): string {
  return Array.from(value, (character) => FILENAME_CHAR_MAP[character] ?? character).join('')
}

export function buildThankYouFileName(firstName: string, lastName: string): string {
  const rawSlug = `${firstName}-${lastName}`
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')

  const transliterated = transliterateForFileName(rawSlug)
  const safeSlug = transliterated
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  return `zahvalnica-${safeSlug || 'donator'}.png`
}

export function buildThankYouFileNameFromFullName(fullName: string): string {
  const normalized = fullName.trim().replace(/\s+/g, ' ')

  if (!normalized) {
    return buildThankYouFileName('', '')
  }

  const parts = normalized.split(' ').filter(Boolean)

  if (parts.length === 1) {
    return buildThankYouFileName(parts[0], '')
  }

  const lastName = parts[parts.length - 1]
  const firstName = parts.slice(0, -1).join(' ')
  return buildThankYouFileName(firstName, lastName)
}
