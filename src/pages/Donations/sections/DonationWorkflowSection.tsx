import { Container } from '../../../components/ui/Container/Container'
import { DonationStepper } from '../components/DonationStepper'
import { DonationFormPreview } from '../components/DonationFormPreview'
import { ConfirmationPreview } from '../components/ConfirmationPreview'
import { DonationRightPreview } from '../components/DonationRightPreview'
import styles from './DonationWorkflowSection.module.scss'

/** Staticki korak za UI fazu — kasnije zamijeniti stvarnim stanjem procesa. */
const CURRENT_STEP = 1

export function DonationWorkflowSection() {
  return (
    <section className={styles.section} aria-label="Proces donacije">
      <Container>
        <DonationStepper currentStep={CURRENT_STEP} />

        <div className={styles.workflow}>
          <div className={styles.left}>
            <DonationFormPreview />
            <ConfirmationPreview />
          </div>

          <div className={styles.right}>
            <DonationRightPreview currentStep={CURRENT_STEP} />
          </div>
        </div>
      </Container>
    </section>
  )
}
