import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './ClubIntroSection.module.scss'

const { clubIntro } = site.home
const { club, assets } = site

export function ClubIntroSection() {
  return (
    <section className={styles.section} aria-labelledby="club-intro-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.yearBlock}>
              <span className={styles.since}>{clubIntro.sinceLabel}</span>
              <span className={styles.year}>{club.foundedYear}</span>
            </div>
            <div className={styles.accentBar} />
            <img src={assets.logoPath} alt="" className={styles.logoMark} width={120} height={120} />
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>{clubIntro.eyebrow}</p>
            <h2 id="club-intro-title">{clubIntro.title}</h2>
            <p className={styles.text}>{club.aboutIntro}</p>
            <p className={styles.text}>{clubIntro.additionalParagraph}</p>
            <Button asChild variant="ghost" to={clubIntro.cta.path} className={styles.cta}>
              {clubIntro.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
