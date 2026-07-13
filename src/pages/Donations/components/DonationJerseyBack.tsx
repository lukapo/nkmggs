import styles from './ThankYouPreview.module.scss'

interface DonationJerseyBackProps {
  playerName: string
  playerNumber: number
}

function getPlayerNameClass(name: string): string {
  if (name.length > 22) {
    return styles.playerNameLong
  }

  if (name.length > 16) {
    return styles.playerNameMedium
  }

  return ''
}

export function DonationJerseyBack({ playerName, playerNumber }: DonationJerseyBackProps) {
  return (
    <div className={styles.jersey}>
      <div className={styles.jerseyBack}>
        <div className={styles.jerseyStripe} aria-hidden="true" />
        <p className={`${styles.playerName} ${getPlayerNameClass(playerName)}`}>{playerName}</p>
        <p className={styles.playerNumber} aria-label={`Broj na dresu ${playerNumber}`}>
          {playerNumber}
        </p>
        <div className={styles.jerseyCollar} aria-hidden="true" />
      </div>
    </div>
  )
}
