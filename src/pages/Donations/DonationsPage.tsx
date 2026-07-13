import { getPageSeo } from '../../config/seo'
import { SEO } from '../../components/seo/SEO'
import { DonationHeaderSection } from './sections/DonationHeaderSection'
import { DonationWorkflowSection } from './sections/DonationWorkflowSection'

export function DonationsPage() {
  return (
    <>
      <SEO {...getPageSeo('donations')} />
      <DonationHeaderSection />
      <DonationWorkflowSection />
    </>
  )
}
