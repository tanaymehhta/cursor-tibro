import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '1ewsv4p2',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-05-01',
  useCdn: true
})

export const tourBySlugQuery = `*[_type == "tour" && slug.current == $slug][0]{..., itinerary[]{title, body}, inclusions, exclusions}`
export const allTourSlugsQuery = `*[_type == "tour" && defined(slug.current)]{ "slug": slug.current }`
export const pageByKeyQuery = `*[_type == "sitePage" && key == $key][0]`
