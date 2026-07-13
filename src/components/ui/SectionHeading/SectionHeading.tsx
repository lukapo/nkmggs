import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  titleId?: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, titleId, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 id={titleId} tabIndex={titleId ? -1 : undefined}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}
