import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path?: string
  type?: string
}

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://tibro-journeys-39.vercel.app'

export function SEO({ title, description, path = '/', type = 'website' }: SEOProps) {
  const url = `${siteUrl}${path}`
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TravelAgency', '@id': `${siteUrl}#org`, name: 'Tibro', url: siteUrl },
      { '@type': 'WebPage', '@id': url, url, name: title, description }
    ]
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="author" content="Tibro" />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Tibro" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  )
}
