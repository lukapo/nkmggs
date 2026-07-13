export function amountToEuroCents(amount: number): number {
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error('Invalid donation amount')
  }

  const [whole, fraction = '00'] = amount.toFixed(2).split('.')
  const euros = Number(whole)
  const centsPart = Number(fraction.padEnd(2, '0').slice(0, 2))
  const totalCents = euros * 100 + centsPart

  if (!Number.isInteger(totalCents) || totalCents <= 0) {
    throw new Error('Invalid euro cent amount')
  }

  return totalCents
}
