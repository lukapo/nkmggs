import { site } from '../../data/site'
import { PlaceholderPage } from '../../components/ui/PlaceholderPage/PlaceholderPage'

const { categories } = site.pages

export function CategoriesPage() {
  return <PlaceholderPage title={categories.title} intro={categories.intro} />
}
