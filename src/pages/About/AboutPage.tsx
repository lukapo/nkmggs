import { site } from '../../data/site'
import { PlaceholderPage } from '../../components/ui/PlaceholderPage/PlaceholderPage'
import styles from './AboutPage.module.scss'

export function AboutPage() {
  return (
    <PlaceholderPage title="O nama" intro={site.aboutIntro}>
      <article className={styles.card}>
        <h2>Naša priča</h2>
        <p>
          NK Matija Gubec djeluje od {site.foundedYear}. godine u Gornjoj Stubici. Kroz desetljeća
          rada klub je postao mjesto okupljanja mladih igrača, roditelja i volontera koji zajedno
          grade nogometnu budućnost lokalne zajednice.
        </p>
      </article>
      <article className={styles.card}>
        <h2>Misija i vizija</h2>
        <p>
          Naša misija je razvijati nogometnu kulturu, fair play i odgovornost kroz rad s djecom i
          mladima. Vizija kluba je sustavno ulaganje u mlade igrače i jačanje zajednice u Gornjoj
          Stubici.
        </p>
        <p className={styles.note}>Sadržaj ove stranice bit će dopunjen u sljedećoj fazi projekta.</p>
      </article>
    </PlaceholderPage>
  )
}
