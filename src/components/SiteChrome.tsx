import { Link, NavLink, Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Compass, Menu } from 'lucide-react'
import { Button } from './ui/button'

const nav = [
  ['Trade Fairs', '/trade-fairs'],
  ['Luxury Holidays', '/luxury-holidays'],
  ['Corporate', '/corporate-tours'],
  ['Knowledge', '/knowledge-tours'],
  ['Visa', '/visa'],
  ['Journal', '/blog'],
  ['About', '/about-us'],
  ['Contact', '/contact']
]

export function RootLayout() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#f7f0e6] text-stone-950">
        <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f7f0e6]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link to="/" className="flex items-center gap-3 font-serif text-2xl font-semibold tracking-tight">
              <span className="grid size-10 place-items-center rounded-full bg-stone-950 text-amber-100"><Compass size={18} /></span>
              Tibro
            </Link>
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map(([label, href]) => (
                <NavLink key={href} to={href} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium ${isActive ? 'bg-stone-950 text-amber-50' : 'text-stone-700 hover:bg-white'}`}>
                  {label}
                </NavLink>
              ))}
            </nav>
            <Button asChild className="hidden md:inline-flex"><Link to="/contact">Plan a journey</Link></Button>
            <Menu className="lg:hidden" />
          </div>
        </header>
        <Outlet />
        <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <p className="font-serif text-4xl text-amber-50">Tibro</p>
              <p className="mt-4 max-w-md text-stone-400">Trade fairs, luxury holidays, corporate tours and knowledge journeys planned by real people since 1991.</p>
            </div>
            <div className="grid gap-2 text-sm">
              {nav.slice(0, 4).map(([label, href]) => <Link key={href} to={href} className="hover:text-amber-200">{label}</Link>)}
            </div>
            <div className="text-sm text-stone-400">
              <p>Mumbai · Ahmedabad · Bengaluru · Delhi</p>
              <p className="mt-3">info@tibro.in</p>
              <p>+91 22 2410 2801</p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  )
}
