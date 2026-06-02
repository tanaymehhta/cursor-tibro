import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'office',
  title: 'Office',
  type: 'document',
  fields: [
    defineField({ name: 'city', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'isHeadOffice', type: 'boolean' }),
    defineField({ name: 'addressLines', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'phones', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'sortOrder', type: 'number' })
  ]
})
