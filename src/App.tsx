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

const generatedTourRoutes: RouteRecord[] = allTours.map((tour) => ({ path: `/luxury-holidays/${tour.id}`, element: <TourPage /> }))
const generatedCountryRoutes: RouteRecord[] = countryHubs.map((hub) => ({ path: `/luxury-holidays/countries/${slugify(hub.country)}`, element: <CountryPage /> }))
const generatedRegionRoutes: RouteRecord[] = regions.map((region) => ({ path: `/luxury-holidays/regions/${slugify(region)}`, element: <RegionPage /> }))
const generatedCollectionRoutes: RouteRecord[] = collections.map(([name]) => ({ path: `/luxury-holidays/collections/${slugify(name)}`, element: <CollectionPage /> }))
const generatedPackageRoutes: RouteRecord[] = tradeFairPackages.map((pkg) => ({ path: `/package/${pkg.id}`, element: <PackagePage /> }))

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
