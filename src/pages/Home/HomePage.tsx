import { PlaceholderPage } from '../../components/ui/PlaceholderPage/PlaceholderPage'
import { site } from '../../data/site'

export function HomePage() {
  return (
    <PlaceholderPage
      title={site.name}
      intro={`${site.tagline} Službena web stranica kluba trenutno je u izradi — sadržaj početne stranice dolazi u sljedećoj fazi.`}
    />
  )
}
