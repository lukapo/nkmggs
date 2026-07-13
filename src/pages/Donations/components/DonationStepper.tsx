import { site } from '../../../data/site'
import styles from './DonationStepper.module.scss'

interface DonationStepperProps {
  currentStep: number
}

export function DonationStepper({ currentStep }: DonationStepperProps) {
  const steps = site.pages.donations.stepper.steps

  return (
    <nav className={styles.stepper} aria-label="Koraci donacije">
      <ol className={styles.list}>
        {steps.map((label, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isActive = stepNumber === currentStep
          const isUpcoming = stepNumber > currentStep

          return (
            <li
              key={label}
              className={`${styles.step} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''} ${isUpcoming ? styles.upcoming : ''}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className={styles.indicator} aria-hidden="true">
                {isCompleted ? (
                  <svg className={styles.check} viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5.5L4.5 9L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  stepNumber
                )}
              </span>
              <span className={styles.label}>{label}</span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
