import { getPageSeo } from '../../config/seo'
import { SEO } from '../../components/seo/SEO'
import { CategoriesHeaderSection } from './sections/CategoriesHeaderSection'
import { CategoriesGridSection } from './sections/CategoriesGridSection'
import { CategoriesCtaSection } from './sections/CategoriesCtaSection'

export function CategoriesPage() {
  return (
    <>
      <SEO {...getPageSeo('categories')} />
      <CategoriesHeaderSection />
      <CategoriesGridSection />
      <CategoriesCtaSection />
    </>
  )
}
