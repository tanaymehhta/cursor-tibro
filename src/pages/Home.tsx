import { Link } from 'react-router-dom'
import { ArrowRight, Building2, GraduationCap, Plane, Sparkles } from 'lucide-react'
import { SEO } from '../components/SEO'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { allTours } from '../data/site'
import { tradeFairPackages } from '../data/tradeFairs'

const verticals = [
  { title: 'Trade Fairs', href: '/trade-fairs', icon: Building2, copy: 'Global exhibitions, seamlessly managed with on-ground support.' },
  { title: 'Luxury Holidays', href: '/luxury-holidays', icon: Sparkles, copy: 'Bespoke escapes with elevated hospitality, pace and personal attention.' },
  { title: 'Corporate Tours', href: '/corporate-tours', icon: Plane, copy: 'High-impact business journeys that align teams and deliver outcomes.' },
  { title: 'Knowledge Tours', href: '/knowledge-tours', icon: GraduationCap, copy: 'Educational experiences that connect learners with industry and culture.' }
]

export function Home() {
  const trending = [allTours.find((t) => t.id === 'morocco-7n-cultural'), allTours.find((t) => t.id === 'switzerland-8n-classic'), ...tradeFairPackages].filter(Boolean)
  return (
    <main>
      <SEO title="Tibro — Trade Fairs, Luxury Holidays, Corporate & Knowledge Tours" description="Curated trade fair tours, luxury holidays, corporate travel and knowledge journeys for Indian travellers." />
      <section className="relative overflow-hidden bg-stone-950 text-amber-50">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#c99b56,transparent_35%),radial-gradient(circle_at_80%_10%,#6e4d2f,transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl content-center gap-10 px-5 py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-amber-200">Trade Fairs · Luxury Holidays · Corporate · Knowledge</p>
            <h1 className="mt-6 font-serif text-6xl leading-none md:text-8xl">Journeys with quiet precision.</h1>
            <p className="mt-6 max-w-2xl text-lg text-stone-300">From high-stakes exhibition floors to serene luxury escapes, Tibro manages every detail with thirty years of relationships behind the curtain.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" variant="gold"><Link to="/luxury-holidays">Explore holidays</Link></Button><Button asChild size="lg" variant="outline" className="border-amber-100 text-amber-50 hover:bg-amber-50 hover:text-stone-950"><Link to="/trade-fairs">Trade fairs</Link></Button></div>
          </div>
          <Card className="self-end border-amber-100/20 bg-amber-50/10 text-amber-50 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-200">Why Tibro</p>
            <div className="mt-6 grid gap-5">
              {['A real planner within a day.', 'On the ground when it matters.', 'Relationships, not transactions.'].map((item, i) => <div key={item} className="flex gap-4"><span className="font-mono text-amber-200">0{i + 1}</span><p className="text-xl font-medium">{item}</p></div>)}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-stone-500">Our expertise</p>
        <h2 className="mt-4 font-serif text-5xl">Verticals of Distinction.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {verticals.map(({ title, href, icon: Icon, copy }) => <Card key={title} className="group"><Icon /><h3 className="mt-6 text-2xl font-semibold">{title}</h3><p className="mt-3 text-stone-600">{copy}</p><Link to={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explore vertical <ArrowRight size={16} /></Link></Card>)}
        </div>
      </section>

      <section className="bg-white/60 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-stone-500">This season</p>
          <h2 className="mt-4 font-serif text-5xl">Trending This Season.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trending.map((item: any) => <Link key={item.id} to={item.type === 'luxury' ? `/luxury-holidays/${item.id}` : `/package/${item.id}`}><Card className="h-full transition hover:-translate-y-1 hover:shadow-xl"><p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">{item.country || item.city}</p><h3 className="mt-3 text-2xl font-semibold">{item.title || item.fairName}</h3><p className="mt-3 text-sm text-stone-600">{item.tagline || item.summary}</p></Card></Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-4">
        {[['40+', 'Countries'], ['100k+', 'Travellers'], ['30+', 'Years'], ['200+', 'Trade Fairs']].map(([value, label]) => <div key={label} className="rounded-[2rem] bg-stone-950 p-8 text-amber-50"><p className="font-serif text-5xl">{value}</p><p className="mt-2 text-stone-300">{label}</p></div>)}
      </section>
    </main>
  )
}
