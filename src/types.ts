export type TourScope = 'domestic' | 'international'

export interface TourDay {
  title: string
  body: string
}

export interface TourHotel {
  city: string
  name: string
}

export interface Tour {
  id: string
  title: string
  tagline: string
  country: string
  countries: string[]
  region: string
  locationGroup?: string
  duration: string
  durationLabel: string
  themes: string[]
  bestMonths: string
  priceFrom: number
  priceFromDisplay: string
  currency: string
  scope: TourScope
  type: 'luxury'
  route: string[]
  highlights: string[]
  itinerary: TourDay[]
  hotels: TourHotel[]
  inclusions: string[]
  exclusions: string[]
  fieldNotes: string[]
  image?: string
}

export interface TradeFairPackage {
  id: string
  title: string
  fairName: string
  city: string
  country: string
  date: string
  duration: string
  pricingFrom: string
  summary: string
  facts: { label: string; value: string }[]
  whyAttend: string[]
  itinerary: TourDay[]
  testimonials: { quote: string; name: string }[]
}

export interface Office {
  id: string
  city: string
  isHeadOffice: boolean
  addressLines: string[]
  phones: string[]
  email?: string | null
}
