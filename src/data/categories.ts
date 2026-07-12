import type { Category } from '../types/category'

export const categories: Category[] = [
  { id: 'prstici', name: 'Prstići', slug: 'prstici', description: 'Najmlađi igrači koji upoznaju nogomet kroz igru i rad u malim grupama.', ageHint: 'Najmlađi uzrast', status: 'active', sortOrder: 1 },
  { id: 'zagici', name: 'Zagići', slug: 'zagici', description: 'Rana nogometna škola s naglaskom na koordinaciju, timski duh i tehničke osnove.', status: 'active', sortOrder: 2 },
  { id: 'limaci', name: 'Limači', slug: 'limaci', description: 'Kategorija u kojoj djeca razvijaju tehničke vještine i prve takmičarske navike.', status: 'active', sortOrder: 3 },
  { id: 'mladji-pioniri', name: 'Mlađi pioniri', slug: 'mladji-pioniri', description: 'Uzrast u kojem se naglašava timska igra, disciplina i takmičarski duh.', status: 'active', sortOrder: 4 },
  { id: 'stariji-pioniri', name: 'Stariji pioniri', slug: 'stariji-pioniri', description: 'Priprema za prelazak u starije kategorije kroz intenzivniji treninžni proces.', status: 'active', sortOrder: 5 },
  { id: 'veterani', name: 'Veterani', slug: 'veterani', description: 'Rekreativna i natjecateljska kategorija za odrasle članove kluba.', status: 'active', sortOrder: 6 },
  { id: 'kadeti', name: 'Kadeti', slug: 'kadeti', description: 'Kategorija u pripremi — uskoro više informacija o treninzima i natjecanjima.', status: 'coming-soon', sortOrder: 7 },
  { id: 'juniori', name: 'Juniori', slug: 'juniori', description: 'Kategorija u pripremi — uskoro više informacija o treninzima i natjecanjima.', status: 'coming-soon', sortOrder: 8 },
]
