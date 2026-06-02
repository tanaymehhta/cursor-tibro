import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { SEO } from '../components/SEO'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Input, Textarea } from '../components/ui/input'
import { tradeFairPackages } from '../data/tradeFairs'

export function TradeFairsPage() {
  return (
    <main className="tf-plex">
      <SEO title="Tibro — Curated Trade Fairs, Luxury & Knowledge Tours" description="Global exhibitions sourced and staged with operational precision." path="/trade-fairs" />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200">Business Travel</p>
          <h1 className="mt-4 text-7xl font-semibold tracking-tight">Trade Fairs.</h1>
          <p className="mt-5 max-w-2xl text-slate-300">Global exhibitions, sourced and staged with operational precision.</p>
          <Input className="mt-8 max-w-md border-slate-700 bg-slate-900 text-white" placeholder="Search" />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ['100k+', 'Delegates Sent'],
              ['200+', 'Exhibitions Curated'],
              ['40+', 'Countries Reached'],
              ['30+', 'Years In Trade']
            ].map(([value, label]) => (
              <Card key={label} className="border-slate-700 bg-slate-900 text-white">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="text-slate-400">{label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">{tradeFairPackages.length} trade fair packages found</p>
        <h2 className="mt-3 text-3xl font-semibold">Featured trade fair packages</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {tradeFairPackages.map((pkg) => (
            <Link key={pkg.id} to={`/package/${pkg.id}`}>
              <Card className="h-full border-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
                  {pkg.industry} · {pkg.city}, {pkg.country}
                </p>
                <h3 className="mt-3 text-3xl font-semibold">{pkg.fairName}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">{pkg.date} · {pkg.duration}</p>
                <p className="mt-4 line-clamp-4 text-slate-600">{pkg.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(pkg.specialties || []).slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{item}</span>
                  ))}
                </div>
                <p className="mt-6 font-semibold">Pricing from {pkg.pricingFrom}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export function PackagePage({ packageId }: { packageId?: string }) {
  const params = useParams()
  const id = packageId || params.id || ''
  const pkg = tradeFairPackages.find((item) => item.id === id) || tradeFairPackages[0]
  return (
    <main className="tf-plex">
      <SEO title={`${pkg.title} | Tibro`} description={pkg.summary} path={`/package/${pkg.id}`} />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <Link to="/trade-fairs" className="inline-flex items-center gap-2 text-sm text-cyan-200"><ArrowLeft size={16} /> Back to Trade Fairs</Link>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.35em] text-cyan-200">Trade Fairs · {pkg.industry}</p>
          <h1 className="mt-4 text-6xl font-semibold tracking-tight">{pkg.fairName}</h1>
          {pkg.tagline ? <p className="mt-3 text-xl text-cyan-100">{pkg.tagline}</p> : null}
          <p className="mt-4 text-lg text-slate-300">{pkg.city}, {pkg.country} · {pkg.duration} · {pkg.date}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="gold">Enquire Now</Button>
            <span className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950">From {pkg.pricingFrom}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[.68fr_.32fr]">
        <div>
          <PackageSection title="Overview">
            <p className="text-slate-700">{pkg.summary}</p>
            {pkg.previousHighlights ? <p className="mt-4 rounded-2xl bg-cyan-50 p-4 text-sm text-slate-700">{pkg.previousHighlights}</p> : null}
          </PackageSection>

          <PackageSection title="Why Attend">
            <ul className="grid gap-3">
              {pkg.whyAttend.map((item) => <li key={item} className="rounded-2xl bg-white p-4">{item}</li>)}
            </ul>
          </PackageSection>

          {pkg.specialties?.length ? (
            <PackageSection title="Visitor Industries & Specialties">
              <div className="flex flex-wrap gap-2">
                {pkg.specialties.map((item) => <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{item}</span>)}
              </div>
            </PackageSection>
          ) : null}

          {pkg.cityGuide ? (
            <PackageSection title={`${pkg.city} City Guide`}>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(pkg.cityGuide).filter(([key]) => key !== 'mustSee').map(([key, value]) => (
                  <Card key={key} className="border-slate-200">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{key}</p>
                    <p className="mt-2 text-sm text-slate-700">{value as string}</p>
                  </Card>
                ))}
              </div>
              {pkg.cityGuide.mustSee?.length ? (
                <div className="mt-4">
                  <p className="font-semibold">Must see</p>
                  <div className="mt-2 flex flex-wrap gap-2">{pkg.cityGuide.mustSee.map((item) => <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">{item}</span>)}</div>
                </div>
              ) : null}
            </PackageSection>
          ) : null}

          <PackageSection title="Hotels">
            <div className="grid gap-4 md:grid-cols-2">
              {(pkg.hotels || []).map((hotel) => (
                <Card key={hotel.name} className="border-slate-200">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{hotel.stars ? `${hotel.stars} star` : 'Hotel'}</p>
                  <h4 className="mt-2 text-xl font-semibold">{hotel.name}</h4>
                  {hotel.location ? <p className="mt-2 text-sm text-slate-600">{hotel.location}</p> : null}
                  {hotel.pricePerNight ? <p className="mt-3 text-sm font-semibold">{hotel.pricePerNight}</p> : null}
                </Card>
              ))}
            </div>
          </PackageSection>

          <PackageSection title="Itinerary">
            <div className="grid gap-4">
              {pkg.itinerary.map((day, i) => (
                <Card key={`${day.title}-${i}`} className="border-slate-200">
                  <p className="font-mono text-sm text-slate-500">Day {i + 1}</p>
                  <h4 className="text-xl font-semibold">{day.title}</h4>
                  <p className="mt-2 text-slate-600">{day.body}</p>
                </Card>
              ))}
            </div>
          </PackageSection>

          <PackageSection title="Inclusions & Exclusions">
            <div className="grid gap-5 md:grid-cols-2">
              <Checklist title="Included" items={pkg.inclusions || []} />
              <Checklist title="Not Included" items={pkg.exclusions || []} />
            </div>
          </PackageSection>

          {pkg.faq?.length ? (
            <PackageSection title="Frequently Asked Questions">
              <div className="grid gap-3">
                {pkg.faq.map((item) => (
                  <Card key={item.question} className="border-slate-200">
                    <h4 className="text-lg font-semibold">{item.question}</h4>
                    <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                  </Card>
                ))}
              </div>
            </PackageSection>
          ) : null}
        </div>

        <aside className="grid content-start gap-4">
          {pkg.facts.map((fact) => (
            <Card key={fact.label} className="border-slate-200">
              <p className="text-3xl font-semibold">{fact.value}</p>
              <p className="text-slate-500">{fact.label}</p>
            </Card>
          ))}
          <Card className="border-slate-200">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Venue</p>
            <h4 className="mt-2 text-xl font-semibold">{pkg.venue}</h4>
            <p className="mt-2 text-sm text-slate-600">{pkg.venueAddress}</p>
            {pkg.openingHours ? <p className="mt-3 text-sm"><b>Hours:</b> {pkg.openingHours}</p> : null}
            {pkg.fairWebsite ? <a href={pkg.fairWebsite} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">Official website <ExternalLink size={14} /></a> : null}
          </Card>
          <Card className="border-slate-200">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Travel support</p>
            {pkg.bestAirport ? <p className="mt-3 text-sm"><b>Best airport:</b> {pkg.bestAirport}</p> : null}
            {pkg.flightFromIndia ? <p className="mt-2 text-sm"><b>Flight:</b> {pkg.flightFromIndia}</p> : null}
            {pkg.groupSize ? <p className="mt-2 text-sm"><b>Group:</b> {pkg.groupSize}</p> : null}
            {pkg.languageSupport ? <p className="mt-2 text-sm"><b>Languages:</b> {pkg.languageSupport}</p> : null}
          </Card>
          <Card className="border-slate-200">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Pay</p>
            {pkg.priceNotes ? <p className="mt-3 text-sm text-slate-700">{pkg.priceNotes}</p> : null}
            {pkg.paymentTerms ? <p className="mt-3 text-sm"><b>Terms:</b> {pkg.paymentTerms}</p> : null}
            {pkg.cancellationPolicy ? <p className="mt-3 text-sm"><b>Cancellation:</b> {pkg.cancellationPolicy}</p> : null}
          </Card>
        </aside>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <Card className="border-slate-200">
          <h2 className="text-3xl font-semibold">Register interest</h2>
          <form className="mt-6 grid gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Work email" />
            <Input placeholder="Company" />
            <Textarea defaultValue={`I'm interested in ${pkg.fairName}. Please share package details.`} />
            <Button>Send enquiry</Button>
          </form>
        </Card>
      </section>
    </main>
  )
}

function PackageSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="mb-12"><h2 className="text-3xl font-semibold">{title}</h2><div className="mt-4">{children}</div></section>
}

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="border-slate-200">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm text-slate-600">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </Card>
  )
}
