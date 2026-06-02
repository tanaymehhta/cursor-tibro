import type { RouteRecord } from 'vite-react-ssg'
import { RootLayout } from './components/SiteChrome'
import { Home } from './pages/Home'
import { LuxuryHome, LuxuryListing, RegionPage, CountryPage, CollectionPage, TourPage } from './pages/Luxury'
import { TradeFairsPage, PackagePage } from './pages/TradeFairs'
import { KnowledgeToursPage } from './pages/Knowledge'
import { CorporateToursPage } from './pages/Corporate'
import { AboutPage, BlogPage, CareersPage, ContactPage, NotFoundPage, VisaPage } from './pages/TopLevel'
import { allTours, countryHubs, regions, slugify, collections } from './data/site'
import { tradeFairPackages } from './data/tradeFairs'

const generatedTourRoutes: RouteRecord[] = allTours.map((tour) => ({ path: `/luxury-holidays/${tour.id}`, element: <TourPage tourId={tour.id} /> }))
const generatedCountryRoutes: RouteRecord[] = countryHubs.map((hub) => {
  const countrySlug = slugify(hub.country)
  return { path: `/luxury-holidays/countries/${countrySlug}`, element: <CountryPage countrySlug={countrySlug} /> }
})
const generatedRegionRoutes: RouteRecord[] = regions.map((region) => {
  const regionSlug = slugify(region)
  return { path: `/luxury-holidays/regions/${regionSlug}`, element: <RegionPage regionSlug={regionSlug} /> }
})
const generatedCollectionRoutes: RouteRecord[] = collections.map(([name]) => {
  const collectionSlug = slugify(name)
  return { path: `/luxury-holidays/collections/${collectionSlug}`, element: <CollectionPage collectionSlug={collectionSlug} /> }
})
const generatedPackageRoutes: RouteRecord[] = tradeFairPackages.map((pkg) => ({ path: `/package/${pkg.id}`, element: <PackagePage packageId={pkg.id} /> }))

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'luxury-holidays', element: <LuxuryHome /> },
      { path: 'luxury-holidays/all', element: <LuxuryListing /> },
      ...generatedRegionRoutes,
      ...generatedCountryRoutes,
      ...generatedCollectionRoutes,
      ...generatedTourRoutes,
      { path: 'trade-fairs', element: <TradeFairsPage /> },
      ...generatedPackageRoutes,
      { path: 'knowledge-tours', element: <KnowledgeToursPage /> },
      { path: 'corporate-tours', element: <CorporateToursPage /> },
      { path: 'corporate', element: <CorporateToursPage /> },
      { path: 'about-us', element: <AboutPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'visa', element: <VisaPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]

export default routes
