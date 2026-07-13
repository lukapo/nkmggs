import { PDF417 } from 'pdf417-generator'

/**
 * pdf417-generator u byte modu koristi charCodeAt() (UTF-16 kodne točke), ne UTF-8 bajtove.
 * HUB-3A zahtijeva UTF-8, pa svaki bajt predstavljamo znakom s charCode 0–255 prije crtanja.
 */
export function encodeUtf8BinaryString(value: string): string {
  const bytes = new TextEncoder().encode(value)

  return Array.from(bytes, (byte) => String.fromCharCode(byte)).join('')
}

export interface DrawPdf417Utf8Options {
  aspectRatio?: number
  ecl?: number
  targetDisplayWidth?: number
  devicePixelRatio?: number
}

export function drawPdf417Utf8(
  code: string,
  canvas: HTMLCanvasElement,
  aspectRatio = 2,
  ecl = -1,
  options: DrawPdf417Utf8Options = {},
): void {
  const utf8BinaryPayload = encodeUtf8BinaryString(code)
  const pixelRatio =
    options.devicePixelRatio ?? (typeof window !== 'undefined' ? window.devicePixelRatio : 1)
  const targetDisplayWidth = options.targetDisplayWidth ?? 300

  const offscreen = document.createElement('canvas')
  PDF417.draw(utf8BinaryPayload, offscreen, options.aspectRatio ?? aspectRatio, options.ecl ?? ecl, pixelRatio)

  const logicalWidth = offscreen.width / pixelRatio
  const logicalHeight = offscreen.height / pixelRatio
  const integerScale = Math.max(2, Math.round(targetDisplayWidth / logicalWidth))
  const displayWidth = Math.round(logicalWidth * integerScale)
  const displayHeight = Math.round(logicalHeight * integerScale)

  canvas.width = displayWidth * pixelRatio
  canvas.height = displayHeight * pixelRatio

  const context = canvas.getContext('2d')

  if (!context) {
    return
  }

  context.setTransform(1, 0, 0, 1, 0, 0)
  context.imageSmoothingEnabled = false
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(offscreen, 0, 0, canvas.width, canvas.height)
}
