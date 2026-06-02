import type { TradeFairPackage } from '../types'

export const tradeFairPackages: TradeFairPackage[] = [
  {
    id: 'itma-2027',
    title: 'ITMA 2027 — Hannover Trade Fair Tour Packages',
    fairName: 'ITMA 2026',
    city: 'Hannover',
    country: 'Germany',
    date: 'Sep 16–22, 2027',
    duration: 'Multiple packages: 4N/5D to 9N/10D (Visitor & Exhibitor)',
    pricingFrom: '₹1,43,800',
    summary: 'The Olympics of textile machinery exhibitions returns to Hannover after 36 years. Tibro has taken Indian delegations to every ITMA since 1991.',
    facts: [
      { label: 'Expected Visitors', value: '100,000+' },
      { label: 'Exhibitors', value: '1,500+' },
      { label: 'Exhibition Area', value: '200,000 sqm' },
      { label: 'Frequency', value: 'Every 4 years' }
    ],
    whyAttend: [
      'The single most important global event for the textile industry.',
      'Discover breakthroughs in automation, sustainability, circularity and advanced materials.',
      'Network with India\'s top textile corporates and global machinery leaders.',
      'Exclusive industry networking dinner on BIZ packages.'
    ],
    itinerary: [
      { title: 'Arrive in Hannover', body: 'Airport assistance, group transfer and hotel check-in with the Tibro desk.' },
      { title: 'Fair days', body: 'Daily breakfast, scheduled transfers to Messegelände and Indian meal options.' },
      { title: 'Networking dinner', body: 'A curated textile industry evening for eligible packages.' },
      { title: 'Departure', body: 'Checkout assistance and transfers based on package duration.' }
    ],
    testimonials: [
      { quote: 'Pre-tour formalities were meticulous and Milan operations were seamless.', name: 'Anup Dammani, Century Textiles and Industries Ltd.' },
      { quote: 'I am happy to suggest friends and colleagues to travel with Tibro.', name: 'Nishikanta Sandhibigraha, Microchem' }
    ]
  },
  {
    id: 'all-in-print-2026',
    title: 'All in Print China 2026 Package',
    fairName: 'All in Print China 2026',
    city: 'Shanghai',
    country: 'China',
    date: 'Oct 12–16, 2026',
    duration: '5N/6D visitor package',
    pricingFrom: 'On request',
    summary: 'A business delegation package for print, packaging and converting professionals visiting one of Asia\'s most important print exhibitions.',
    facts: [
      { label: 'City', value: 'Shanghai' },
      { label: 'Industry', value: 'Print & Packaging' },
      { label: 'Package', value: 'Visitor' },
      { label: 'Support', value: 'Visa + transfers' }
    ],
    whyAttend: ['Meet Asia-Pacific suppliers.', 'Compare press, packaging and converting technologies.', 'Use Tibro\'s visa and local operations desk.'],
    itinerary: [
      { title: 'Arrive Shanghai', body: 'Airport transfer and orientation.' },
      { title: 'Exhibition days', body: 'Daily transfers and optional buyer meetings.' },
      { title: 'City add-on', body: 'Optional Bund and business district visit before departure.' }
    ],
    testimonials: [{ quote: 'The daily pick-up and drop communication was very clear.', name: 'Trade fair delegate' }]
  }
]
