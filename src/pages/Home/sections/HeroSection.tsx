import { useEffect, useState, type CSSProperties } from 'react'
import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import { Container } from '../../../components/ui/Container/Container'
import styles from './HeroSection.module.scss'

const { hero } = site.home
const { club, assets } = site

export function HeroSection() {
  const [hasHeroImage, setHasHeroImage] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = assets.heroImagePath

    image.onload = () => setHasHeroImage(true)
    image.onerror = () => setHasHeroImage(false)
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <div
          className={`${styles.photo} ${hasHeroImage ? styles.photoWithImage : ''}`}
          style={
            hasHeroImage
              ? ({ '--hero-photo': `url(${assets.heroImagePath})` } as CSSProperties)
              : undefined
          }
        />
        <div className={styles.overlay} />
      </div>

      <Container className={styles.content}>
        <p className={styles.eyebrow}>
          {club.name} · {club.location}
        </p>
        <h1 id="hero-title" className={styles.title}>
          {hero.titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.lead}>{club.description}</p>
        <div className={styles.actions}>
          <Button asChild variant="primary" size="lg" to={hero.primaryCta.path}>
            {hero.primaryCta.label}
          </Button>
          <Button asChild variant="outline" size="lg" to={hero.secondaryCta.path}>
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
