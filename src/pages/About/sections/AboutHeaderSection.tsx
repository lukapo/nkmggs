import { useEffect, useState, type CSSProperties } from 'react'
import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import styles from './AboutHeaderSection.module.scss'

const { pageHeader } = site.pages.about
const { club, assets } = site

export function AboutHeaderSection() {
  const [hasImage, setHasImage] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = assets.aboutImagePath
    image.onload = () => setHasImage(true)
    image.onerror = () => setHasImage(false)
  }, [])

  return (
    <section className={styles.section} aria-labelledby="about-page-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{pageHeader.eyebrow}</p>
            <h1 id="about-page-title">{site.pages.about.title}</h1>
            <p className={styles.intro}>{club.aboutIntro}</p>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div
              className={`${styles.photo} ${hasImage ? styles.photoWithImage : ''}`}
              style={
                hasImage
                  ? ({ '--about-photo': `url(${assets.aboutImagePath})` } as CSSProperties)
                  : undefined
              }
            />
            <div className={styles.visualContent}>
              <img src={assets.logoPath} alt="" className={styles.logo} width={80} height={80} />
              <span className={styles.year}>{club.foundedYear}</span>
            </div>
            <p className={styles.caption}>{pageHeader.visualCaption}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
