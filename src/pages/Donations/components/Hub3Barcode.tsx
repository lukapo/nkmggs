import { useEffect, useMemo, useRef } from 'react'
import { HUB3 } from 'pdf417-generator'
import { site } from '../../../data/site'
import { buildDonationPaymentDetails } from '../utils/buildDonationPaymentDetails'
import { buildHub3Payload } from '../utils/buildHub3Payload'
import { drawPdf417Utf8 } from '../utils/pdf417Utf8'
import type { SubmittedDonation } from '../utils/validateDonationForm'
import styles from './Hub3Barcode.module.scss'

const { payment } = site.pages.donations

const MIN_BARCODE_WIDTH = 240
const MAX_BARCODE_WIDTH = 320

interface Hub3BarcodeProps {
  donation: SubmittedDonation
}

type PreparedBarcode =
  | { ok: true; code: string }
  | { ok: false }

function getTargetBarcodeWidth(wrapper: HTMLElement): number {
  const styles = getComputedStyle(wrapper)
  const horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight)
  const availableWidth = wrapper.clientWidth - horizontalPadding

  return Math.min(MAX_BARCODE_WIDTH, Math.max(MIN_BARCODE_WIDTH, availableWidth))
}

export function Hub3Barcode({ donation }: Hub3BarcodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const paymentDetails = useMemo(() => buildDonationPaymentDetails(donation), [donation])

  const preparedBarcode = useMemo<PreparedBarcode>(() => {
    try {
      const hub3Payload = buildHub3Payload(donation, paymentDetails)
      const code = HUB3.format(hub3Payload)

      return { ok: true, code }
    } catch (error) {
      console.error('PDF417 generation failed:', error)
      return { ok: false }
    }
  }, [donation, paymentDetails])

  useEffect(() => {
    if (!preparedBarcode.ok) {
      return
    }

    const wrapper = wrapRef.current
    const canvas = canvasRef.current

    if (!wrapper || !canvas) {
      return
    }

    const renderBarcode = () => {
      try {
        drawPdf417Utf8(preparedBarcode.code, canvas, 2, -1, {
          targetDisplayWidth: getTargetBarcodeWidth(wrapper),
          devicePixelRatio: window.devicePixelRatio,
        })
      } catch (error) {
        console.error('PDF417 draw failed:', error)
      }
    }

    renderBarcode()

    const resizeObserver = new ResizeObserver(renderBarcode)
    resizeObserver.observe(wrapper)

    return () => {
      resizeObserver.disconnect()
    }
  }, [preparedBarcode])

  if (!preparedBarcode.ok) {
    return (
      <div className={styles.errorBox} role="alert">
        <p className={styles.errorText}>{payment.barcodeError}</p>
      </div>
    )
  }

  return (
    <figure className={styles.figure}>
      <div ref={wrapRef} className={styles.canvasWrap}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>
      <figcaption className={styles.caption}>{payment.barcodeCaption}</figcaption>
    </figure>
  )
}
