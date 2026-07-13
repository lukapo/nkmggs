import { AboutHeaderSection } from './sections/AboutHeaderSection'
import { StorySection } from './sections/StorySection'
import { ValuesSection } from './sections/ValuesSection'
import { ClubTodaySection } from './sections/ClubTodaySection'
import { AboutCtaSection } from './sections/AboutCtaSection'

export function AboutPage() {
  return (
    <>
      <AboutHeaderSection />
      <StorySection />
      <ValuesSection />
      <ClubTodaySection />
      <AboutCtaSection />
    </>
  )
}
