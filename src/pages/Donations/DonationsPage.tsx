import { site } from '../../data/site'
import { PlaceholderPage } from '../../components/ui/PlaceholderPage/PlaceholderPage'

const { donations } = site.pages

export function DonationsPage() {
  return <PlaceholderPage title={donations.title} intro={donations.intro} />
}
