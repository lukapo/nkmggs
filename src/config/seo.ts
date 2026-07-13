import { site } from '../data/site'

export type SeoPageKey = keyof typeof site.seo.pages

export function buildCanonicalUrl(path: string): string {
  const base = site.seo.canonicalBase.replace(/\/$/, '')

  if (path === '/' || path === '') {
    return `${base}/`
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}

export function getPageSeo(page: SeoPageKey) {
  const meta = site.seo.pages[page]

  return {
    title: meta.title,
    description: meta.description,
    canonical: 'path' in meta && meta.path ? buildCanonicalUrl(meta.path) : undefined,
  }
}
