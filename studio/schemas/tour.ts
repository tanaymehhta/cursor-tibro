import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tour',
  title: 'Luxury Tour',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'tagline', type: 'text' }),
    defineField({ name: 'scope', type: 'string', options: { list: ['domestic', 'international'] } }),
    defineField({ name: 'country', type: 'string' }),
    defineField({ name: 'region', type: 'string' }),
    defineField({ name: 'durationLabel', type: 'string' }),
    defineField({ name: 'priceFromDisplay', type: 'string' }),
    defineField({ name: 'themes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'route', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'itinerary', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'body', type: 'text' }] }] }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] })
  ]
})
