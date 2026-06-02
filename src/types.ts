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
  tagline?: string
  industry?: string
  image?: string
  venue?: string
  venueAddress?: string
  openingHours?: string
  fairWebsite?: string
  groupSize?: string | null
  languageSupport?: string | null
  flightFromIndia?: string | null
  bestAirport?: string | null
  paymentTerms?: string | null
  cancellationPolicy?: string | null
  priceNotes?: string | null
  previousHighlights?: string | null
  facts: { label: string; value: string }[]
  whyAttend: string[]
  itinerary: TourDay[]
  testimonials: { quote: string; name: string }[]
  hotels?: { name: string; location?: string; stars?: number; pricePerNight?: string }[]
  inclusions?: string[]
  exclusions?: string[]
  faq?: { question: string; answer: string }[]
  specialties?: string[]
  relatedPackages?: string[]
  searchKeywords?: string[]
  chatbotPhrases?: string[]
  visitorIndustries?: string[]
  priceTiers?: { name: string; price: number | string }[]
  cityGuide?: {
    overview?: string
    weather?: string
    transport?: string
    food?: string
    currency?: string
    safety?: string
    mustSee?: string[]
  }
}

export interface Office {
  id: string
  city: string
  isHeadOffice: boolean
  addressLines: string[]
  phones: string[]
  email?: string | null
}
