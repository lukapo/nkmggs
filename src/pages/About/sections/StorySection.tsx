import { site } from '../../../data/site'
import { Container } from '../../../components/ui/Container/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading/SectionHeading'
import styles from './StorySection.module.scss'

const { story } = site.pages.about

export function StorySection() {
  const paragraphs = story.paragraphs.map((paragraph) =>
    paragraph.replace('{foundedYear}', String(site.club.foundedYear)),
  )

  return (
    <section className={styles.section} aria-labelledby="about-story-title">
      <Container>
        <SectionHeading
          eyebrow={story.eyebrow}
          title={story.title}
          titleId="about-story-title"
        />

        <div className={styles.content}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}
