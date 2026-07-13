import { getPageSeo } from '../../config/seo'
import { SEO } from '../../components/seo/SEO'
import { ContactHeaderSection } from './sections/ContactHeaderSection'
import { ContactDetailsSection } from './sections/ContactDetailsSection'
import { ContactMapSection } from './sections/ContactMapSection'

export function ContactPage() {
  return (
    <>
      <SEO {...getPageSeo('contact')} />
      <ContactHeaderSection />
      <ContactDetailsSection />
      <ContactMapSection />
    </>
  )
}
