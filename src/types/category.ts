export type CategoryStatus = 'active' | 'coming-soon'

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  ageHint?: string
  ageLabel?: string
  coachName?: string
  status: CategoryStatus
  sortOrder: number
  visual: {
    gradient: string
  }
  imagePath?: string
}
