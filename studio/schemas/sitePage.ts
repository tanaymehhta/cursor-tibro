import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sitePage',
  title: 'Site Page',
  type: 'document',
  fields: [
    defineField({ name: 'key', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'heroEyebrow', type: 'string' }),
    defineField({ name: 'heroCopy', type: 'text' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] })
  ]
})
