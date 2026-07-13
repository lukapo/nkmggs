import assert from 'node:assert/strict'
import { HUB3 } from 'pdf417-generator'
import { normalizeSpaces, truncateHub3Text } from './hub3Text'
import { encodeUtf8BinaryString } from './pdf417Utf8'

function decodeUtf8BinaryString(value: string): string {
  const bytes = Uint8Array.from(value, (character) => character.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

function assertPreservesDiacritics(label: string, value: string): void {
  const truncated = truncateHub3Text(value, 35)
  const encoded = encodeUtf8BinaryString(truncated)
  const decoded = decodeUtf8BinaryString(encoded)

  assert.equal(decoded, truncated, `${label}: diakritici moraju ostati netaknuti`)
  assert.match(decoded, /[čćđšžČĆĐŠŽ]/u, `${label}: očekivani dijakritici nisu pronađeni`)
}

assert.equal(normalizeSpaces('  Luka   Postružin  '), 'Luka Postružin')
assert.equal(truncateHub3Text('Donacija - Luka Postružin', 35), 'Donacija - Luka Postružin')
assert.equal(truncateHub3Text('ČĆĐŠŽ čćđšž', 35), 'ČĆĐŠŽ čćđšž')
assert.equal(truncateHub3Text('Džurđa Čačić', 35), 'Džurđa Čačić')
assert.equal(truncateHub3Text('Šimić', 35), 'Šimić')
assert.equal(truncateHub3Text('Đurđević', 35), 'Đurđević')

assert.equal(truncateHub3Text('ABCDEFGHIJČĆĐŠŽabcdefghijčćđšž', 10), 'ABCDEFGHIJ')

assertPreservesDiacritics('Donacija - Luka Postružin', 'Donacija - Luka Postružin')
assertPreservesDiacritics('ČĆĐŠŽ čćđšž', 'ČĆĐŠŽ čćđšž')
assertPreservesDiacritics('Džurđa Čačić', 'Džurđa Čačić')
assertPreservesDiacritics('Šimić', 'Šimić')
assertPreservesDiacritics('Đurđević', 'Đurđević')

const hub3Code = HUB3.format({
  amount: 12.5,
  payerName: 'Luka Postružin',
  payerAddress: '-',
  payerCity: '-',
  recipientName: 'NK Matija Gubec Gornja Stu',
  recipientAddr: '-',
  recipientCity: '-',
  iban: 'HR4423600001102535916',
  model: 'HR00',
  callNumber: '13072026',
  purposeCode: '',
  description: 'Donacija - Luka Postružin',
})

assert.match(hub3Code, /Postružin/u, 'HUB3 payload mora zadržati ž u opisu')
assert.equal(
  decodeUtf8BinaryString(encodeUtf8BinaryString(hub3Code)),
  hub3Code,
  'UTF-8 binarni prijelaz mora biti reverzibilan',
)

console.log('hub3-diacritics checks passed')
