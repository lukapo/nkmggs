import { site } from '../../data/site'
import { PlaceholderPage } from '../../components/ui/PlaceholderPage/PlaceholderPage'
import styles from './AboutPage.module.scss'

const { about } = site.pages

export function AboutPage() {
  const storyText = about.storyText.replace('{foundedYear}', String(site.club.foundedYear))

  return (
    <PlaceholderPage title={about.title} intro={site.club.aboutIntro}>
      <article className={styles.card}>
        <h2>{about.storyHeading}</h2>
        <p>{storyText}</p>
      </article>
      <article className={styles.card}>
        <h2>{about.missionHeading}</h2>
        <p>{about.missionText}</p>
        <p className={styles.note}>{about.note}</p>
      </article>
    </PlaceholderPage>
  )
}
