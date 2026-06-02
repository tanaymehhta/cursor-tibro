import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tradeFairPackage',
  title: 'Trade Fair Package',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'fairName', type: 'string' }),
    defineField({ name: 'city', type: 'string' }),
    defineField({ name: 'country', type: 'string' }),
    defineField({ name: 'date', type: 'string' }),
    defineField({ name: 'pricingFrom', type: 'string' }),
    defineField({ name: 'summary', type: 'text' }),
    defineField({ name: 'whyAttend', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] })
  ]
})
