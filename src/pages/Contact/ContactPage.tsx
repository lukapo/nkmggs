import { site } from '../../data/site'
import { PlaceholderPage } from '../../components/ui/PlaceholderPage/PlaceholderPage'

const { contact } = site.pages

export function ContactPage() {
  return <PlaceholderPage title={contact.title} intro={contact.intro} />
}
