import { getPageSeo } from '../../config/seo'
import { SEO } from '../../components/seo/SEO'
import { HeroSection } from './sections/HeroSection'
import { ClubIntroSection } from './sections/ClubIntroSection'
import { CategoriesPreviewSection } from './sections/CategoriesPreviewSection'
import { DonationCtaSection } from './sections/DonationCtaSection'
import { FinalCtaSection } from './sections/FinalCtaSection'

export function HomePage() {
  return (
    <>
      <SEO {...getPageSeo('home')} />
      <HeroSection />
      <ClubIntroSection />
      <CategoriesPreviewSection />
      <DonationCtaSection />
      <FinalCtaSection />
    </>
  )
}
