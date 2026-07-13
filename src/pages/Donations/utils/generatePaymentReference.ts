/**
 * Privremeno pravilo poziva na broj: današnji datum u formatu DDMMYYYY.
 * Potvrditi s klubom/računovodstvom prije produkcijske upotrebe.
 */
export function generatePaymentReference(date: Date = new Date()): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())

  return `${day}${month}${year}`
}
