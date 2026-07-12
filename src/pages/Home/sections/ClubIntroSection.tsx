import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './ClubIntroSection.module.scss'

export function ClubIntroSection() {
  return (
    <section className={styles.section} aria-labelledby="club-intro-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.yearBlock}>
              <span className={styles.since}>Od</span>
              <span className={styles.year}>{site.foundedYear}</span>
            </div>
            <div className={styles.accentBar} />
            <img src={site.logoPath} alt="" className={styles.logoMark} width={120} height={120} />
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>O klubu</p>
            <h2 id="club-intro-title">Mjesto gdje raste nogometna zajednica</h2>
            <p className={styles.text}>{site.aboutIntro}</p>
            <p className={styles.text}>
              Već više od pet decenija klub okuplja djecu, mlade i odrasle igrače, roditelje i
              volontere koji zajedno grade nogometnu priču Gornje Stubice.
            </p>
            <Button asChild variant="ghost" to="/o-nama" className={styles.cta}>
              Više o klubu
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
