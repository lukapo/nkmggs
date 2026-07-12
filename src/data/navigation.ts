export interface NavItem {
  label: string
  path: string
  end?: boolean
}

export const navigationItems: NavItem[] = [
  { label: 'Početna', path: '/', end: true },
  { label: 'O nama', path: '/o-nama' },
  { label: 'Kategorije', path: '/kategorije' },
  { label: 'Kontakt', path: '/kontakt' },
  { label: 'Donacije', path: '/donacije' },
]
