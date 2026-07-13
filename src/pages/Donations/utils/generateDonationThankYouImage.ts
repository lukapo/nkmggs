export const THANK_YOU_CANVAS_WIDTH = 1200
export const THANK_YOU_CANVAS_HEIGHT = 1500

/** Viša interna rezolucija za oštriji tekst u previewu i PNG-u. */
export const THANK_YOU_RENDER_SCALE = 2

export const THANK_YOU_COLORS = {
  red: '#D72D19',
  yellow: '#F8D51C',
  yellowLight: '#FBE34A',
  yellowDark: '#E0C010',
  dark: '#25221C',
  white: '#FFFFFF',
  background: '#F7F7F4',
} as const

export const THANK_YOU_FONT_FAMILY = "'Barlow Condensed', system-ui, sans-serif"

export interface ThankYouImageInput {
  messageLines: readonly string[]
  formattedName: string
  jerseyNumber: number
  /** Zamijeniti stvarnom fotografijom poleđine dresa kada bude dostupna. */
  jerseyBackgroundImage?: HTMLImageElement | null
}

interface TextBounds {
  x: number
  y: number
  width: number
}

interface JerseyBounds {
  x: number
  y: number
  width: number
  height: number
}

function fitFontSize(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  initialSize: number,
  minSize: number,
  fontWeight: number,
): number {
  let fontSize = initialSize

  while (fontSize >= minSize) {
    context.font = `${fontWeight} ${fontSize}px ${THANK_YOU_FONT_FAMILY}`

    if (context.measureText(text).width <= maxWidth) {
      return fontSize
    }

    fontSize -= 2
  }

  return minSize
}

function drawCenteredText(
  context: CanvasRenderingContext2D,
  text: string,
  bounds: TextBounds,
  fontSize: number,
  fontWeight: number,
  color: string,
  baseline: CanvasTextBaseline = 'middle',
): void {
  context.fillStyle = color
  context.font = `${fontWeight} ${fontSize}px ${THANK_YOU_FONT_FAMILY}`
  context.textAlign = 'center'
  context.textBaseline = baseline
  context.fillText(text, bounds.x + bounds.width / 2, bounds.y)
}

function drawBackground(context: CanvasRenderingContext2D): void {
  context.fillStyle = THANK_YOU_COLORS.background
  context.fillRect(0, 0, THANK_YOU_CANVAS_WIDTH, THANK_YOU_CANVAS_HEIGHT)
}

function drawThankYouMessage(context: CanvasRenderingContext2D, messageLines: readonly string[]): void {
  const bounds: TextBounds = { x: 100, y: 0, width: THANK_YOU_CANVAS_WIDTH - 200 }
  const longestLine = messageLines.reduce(
    (currentLongest, line) => (line.length > currentLongest.length ? line : currentLongest),
    '',
  )
  const fontSize = fitFontSize(context, longestLine, bounds.width, 64, 42, 700)
  const lineHeight = fontSize * 1.2
  const startY = 175

  messageLines.forEach((line, index) => {
    drawCenteredText(
      context,
      line,
      { x: bounds.x, y: startY + index * lineHeight, width: bounds.width },
      fontSize,
      700,
      THANK_YOU_COLORS.dark,
      'top',
    )
  })
}

function drawJerseyPlaceholder(context: CanvasRenderingContext2D, bounds: JerseyBounds): void {
  const { x, y, width, height } = bounds
  const radius = 24

  context.save()
  context.beginPath()
  context.moveTo(x + radius, y)
  context.lineTo(x + width - radius, y)
  context.quadraticCurveTo(x + width, y, x + width, y + radius)
  context.lineTo(x + width, y + height - radius)
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  context.lineTo(x + radius, y + height)
  context.quadraticCurveTo(x, y + height, x, y + height - radius)
  context.lineTo(x, y + radius)
  context.quadraticCurveTo(x, y, x + radius, y)
  context.closePath()
  context.clip()

  const gradient = context.createLinearGradient(x, y, x, y + height)
  gradient.addColorStop(0, THANK_YOU_COLORS.yellowLight)
  gradient.addColorStop(0.45, THANK_YOU_COLORS.yellow)
  gradient.addColorStop(1, THANK_YOU_COLORS.yellowDark)
  context.fillStyle = gradient
  context.fillRect(x, y, width, height)

  const collarWidth = width * 0.4
  const collarX = x + (width - collarWidth) / 2
  context.fillStyle = THANK_YOU_COLORS.dark
  context.beginPath()
  context.ellipse(
    collarX + collarWidth / 2,
    y + height * 0.04,
    collarWidth / 2,
    height * 0.04,
    0,
    0,
    Math.PI,
  )
  context.fill()

  const stripeHeight = height * 0.035
  const stripeGap = height * 0.012
  const stripeStartY = y + height * 0.1

  for (let index = 0; index < 3; index += 1) {
    const stripeY = stripeStartY + index * (stripeHeight + stripeGap)
    context.fillStyle = THANK_YOU_COLORS.dark
    context.fillRect(x, stripeY, width * 0.14, stripeHeight)
    context.fillRect(x + width - width * 0.14, stripeY, width * 0.14, stripeHeight)
  }

  context.restore()

  context.strokeStyle = 'rgba(37, 34, 28, 0.1)'
  context.lineWidth = 2
  context.strokeRect(x + 1, y + 1, width - 2, height - 2)
}

function drawJerseyVisual(
  context: CanvasRenderingContext2D,
  bounds: JerseyBounds,
  input: ThankYouImageInput,
): void {
  if (input.jerseyBackgroundImage) {
    context.drawImage(input.jerseyBackgroundImage, bounds.x, bounds.y, bounds.width, bounds.height)
  } else {
    drawJerseyPlaceholder(context, bounds)
  }

  const nameMaxWidth = bounds.width * 0.82
  const nameFontSize = fitFontSize(
    context,
    input.formattedName,
    nameMaxWidth,
    52,
    24,
    700,
  )

  drawCenteredText(
    context,
    input.formattedName,
    { x: bounds.x, y: bounds.y + bounds.height * 0.36, width: bounds.width },
    nameFontSize,
    700,
    THANK_YOU_COLORS.dark,
  )

  const numberText = String(input.jerseyNumber)
  const numberFontSize = fitFontSize(context, numberText, bounds.width * 0.7, 220, 120, 700)

  drawCenteredText(
    context,
    numberText,
    { x: bounds.x, y: bounds.y + bounds.height * 0.58, width: bounds.width },
    numberFontSize,
    700,
    THANK_YOU_COLORS.dark,
  )
}

export async function ensureThankYouFontsLoaded(): Promise<void> {
  if (!document.fonts) {
    return
  }

  await Promise.all([
    document.fonts.load(`700 64px ${THANK_YOU_FONT_FAMILY}`),
    document.fonts.load(`700 220px ${THANK_YOU_FONT_FAMILY}`),
  ])
  await document.fonts.ready
}

export function generateDonationThankYouImage(
  canvas: HTMLCanvasElement,
  input: ThankYouImageInput,
  renderScale = THANK_YOU_RENDER_SCALE,
): void {
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Canvas context unavailable')
  }

  canvas.width = THANK_YOU_CANVAS_WIDTH * renderScale
  canvas.height = THANK_YOU_CANVAS_HEIGHT * renderScale

  context.setTransform(1, 0, 0, 1, 0, 0)
  context.scale(renderScale, renderScale)
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.clearRect(0, 0, THANK_YOU_CANVAS_WIDTH, THANK_YOU_CANVAS_HEIGHT)

  drawBackground(context)
  drawThankYouMessage(context, input.messageLines)

  const jerseyWidth = 520
  const jerseyHeight = 700
  const jerseyBounds: JerseyBounds = {
    x: (THANK_YOU_CANVAS_WIDTH - jerseyWidth) / 2,
    y: 450,
    width: jerseyWidth,
    height: jerseyHeight,
  }

  drawJerseyVisual(context, jerseyBounds, input)
}

export function canvasToPngBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob)
        return
      }

      reject(new Error('Failed to create PNG blob'))
    }, 'image/png')
  })
}
