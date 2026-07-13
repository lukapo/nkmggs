export function normalizeSpaces(value: string): string {
  return value.trim().replace(/\s+/g, ' ')
}

export function truncateHub3Text(value: string, maxLength: number): string {
  const normalized = normalizeSpaces(value)
  const characters = Array.from(normalized)

  if (characters.length <= maxLength) {
    return normalized
  }

  return characters.slice(0, maxLength).join('')
}
