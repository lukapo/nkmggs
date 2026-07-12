export type CategoryStatus = 'active' | 'coming-soon'

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  ageHint?: string
  status: CategoryStatus
  sortOrder: number
}
