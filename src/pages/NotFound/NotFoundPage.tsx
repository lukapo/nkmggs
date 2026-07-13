import { useEffect, useRef } from 'react'
import { getPageSeo } from '../../config/seo'
import { SEO } from '../../components/seo/SEO'
import { site } from '../../data/site'
import { Button } from '../../components/ui/Button/Button'
import { Container } from '../../components/ui/Container/Container'
import styles from './NotFoundPage.module.scss'

const { notFound } = site.pages
const TITLE_ID = 'not-found-title'

export function NotFoundPage() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    requestAnimationFrame(() => {
      titleRef.current?.focus()
    })
  }, [])

  return (
    <section className={styles.page} aria-labelledby={TITLE_ID}>
      <SEO {...getPageSeo('notFound')} />
      <Container>
        <div className={styles.content}>
          <p className={styles.code}>{notFound.code}</p>
          <h1 id={TITLE_ID} ref={titleRef} className={styles.title} tabIndex={-1}>
            {notFound.subtitle}
          </h1>
          <p className={styles.description}>{notFound.description}</p>

          <div className={styles.actions}>
            <Button asChild variant="primary" size="md" to={notFound.homeCta.path}>
              {notFound.homeCta.label}
            </Button>
            <Button asChild variant="ghost" size="md" to={notFound.donationsCta.path}>
              {notFound.donationsCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
