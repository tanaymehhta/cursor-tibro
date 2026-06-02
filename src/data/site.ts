import domesticTours from './domesticLuxuryHolidays.json'
import internationalTours from './internationalLuxuryHolidays.json'
import type { Office, Tour } from '../types'

export const allTours = [...domesticTours, ...internationalTours] as Tour[]
export const domesticLuxuryHolidays = domesticTours as Tour[]
export const internationalLuxuryHolidays = internationalTours as Tour[]

export const regions = ['Europe', 'Southeast Asia', 'Asia', 'Africa', 'India', 'Americas', 'Scandinavia', 'Australia & NZ']

export const countryHubs = [
  { country: 'Japan', copy: 'Cherry-blossom to onsen, four crisp seasons.', journeys: 13 },
  { country: 'Switzerland', copy: 'Three lakes, two trains, alpine quiet.', journeys: 12 },
  { country: 'Vietnam', copy: 'Halong cruises, hill-country tea.', journeys: 22 },
  { country: 'Kenya', copy: 'Migration weeks in the Mara.', journeys: 15 },
  { country: 'India', copy: 'Palaces, palms, mountains — the home catalogue.', journeys: 80 },
  { country: 'Italy', copy: 'La dolce vita, slowly — Rome to Como.', journeys: 4 },
  { country: 'Morocco', copy: 'Medina to Sahara, doorway to desert.', journeys: 5 },
  { country: 'Bhutan', copy: 'Slow valleys and prayer-flag passes.', journeys: 8 },
  { country: 'Iceland', copy: 'Ring road, aurora, the lit dark.', journeys: 1 }
]

export const collections = [
  ['Honeymoons', 'Maldives villas, Santorini terraces, slow Bali mornings, quiet Kyoto streets.'],
  ['Wildlife & Safari', 'Masai Mara, Serengeti, Ranthambore, Kaziranga — and lodges that earned their stay.'],
  ['Snow & Aurora', 'Tromso, Lapland, Iceland ring road and winters worth the cold.'],
  ['Heritage & Culture', 'Italy, Vietnam, Japan, Morocco, Turkiye — old cities, longer dinners.'],
  ['Beach & Islands', 'Maldives, Mauritius, Bali, Andamans and Mediterranean barefoot days.'],
  ['Multi-Country', 'Switzerland + France, Spain + Portugal, Kenya + Tanzania.'],
  ['City & Cosmopolitan', 'Tokyo, Singapore, Dubai, London, New York shaped into a long weekend.'],
  ['Spiritual', 'Bhutan, Buddha Trail, Holy Trinity, Israel — journeys with weight.'],
  ['Multigenerational', 'Rooms next door, dinners that wait, rail journeys everyone can enjoy.'],
  ['Milestone', 'The journey that earns the year off.'],
  ['Bucket List', 'Antarctica, Galapagos, Kenya migration, Machu Picchu, Northern Lights.'],
  ['Quick Recharge', 'Dubai, Singapore, Bhutan, Phuket, Maldives — a short real holiday.']
] as const

export const offices: Office[] = [
  { id: 'mumbai', city: 'Mumbai', isHeadOffice: true, addressLines: ['Tibro Tours Pvt Ltd', '103, Navyug Industrial Estate', 'T. J. Road, Sewri (W)', 'Mumbai - 400 015'], phones: ['+91 22 24102801', '+91 8928738084'], email: 'info@tibro.in' },
  { id: 'ahmedabad', city: 'Ahmedabad', isHeadOffice: false, addressLines: ['304, Gold Leaf Complex', 'C. G. Road', 'Ahmedabad - 380009'], phones: ['+91 79 48910900', '+91 7048535184'] },
  { id: 'bengaluru', city: 'Bengaluru', isHeadOffice: false, addressLines: ['213, Westminster Building', 'Cunningham Road', 'Bengaluru - 560052'], phones: ['+91 80 41633470', '+91 9916924727'] },
  { id: 'delhi', city: 'Delhi', isHeadOffice: false, addressLines: ['4/10 East Patel Nagar', 'New Delhi - 110008'], phones: ['011-42632140', '011-42631940'] }
]

export function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function getTour(id = '') {
  return allTours.find((tour) => tour.id === id)
}
