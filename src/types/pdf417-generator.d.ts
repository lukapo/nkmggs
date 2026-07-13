declare module 'pdf417-generator' {
  export interface Hub3FormatInput {
    amount: number
    payerName: string
    payerAddress: string
    payerCity: string
    recipientName: string
    recipientAddr: string
    recipientCity: string
    iban: string
    model?: string
    callNumber?: string
    purposeCode?: string
    description?: string
  }

  export const HUB3: {
    format: (data: Hub3FormatInput) => string
  }

  export const PDF417: {
    draw: (
      code: string,
      canvas: HTMLCanvasElement,
      aspectRatio?: number,
      ecl?: number,
      devicePixelRatio?: number,
      lineColor?: string,
    ) => void
  }
}
