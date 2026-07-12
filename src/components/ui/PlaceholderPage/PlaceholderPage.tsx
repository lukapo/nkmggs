import type { ReactNode } from 'react'
import { Container } from '../Container/Container'
import styles from './PlaceholderPage.module.scss'

interface PlaceholderPageProps {
  title: string
  intro: string
  children?: ReactNode
}

export function PlaceholderPage({ title, intro, children }: PlaceholderPageProps) {
  return (
    <Container as="section" className={styles.page}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p className={styles.intro}>{intro}</p>
      </header>
      {children ? <div className={styles.content}>{children}</div> : null}
    </Container>
  )
}
