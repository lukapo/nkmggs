import { Helmet } from 'react-helmet-async'
import { site } from '../../data/site'

export interface SEOProps {
  title: string
  description: string
  canonical?: string
  robots?: string
}

export function SEO({ title, description, canonical, robots }: SEOProps) {
  return (
    <Helmet>
      <html lang="hr" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={site.seo.themeColor} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {robots ? <meta name="robots" content={robots} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  )
}
