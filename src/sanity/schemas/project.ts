import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'href', title: 'Project URL (GitHub etc.)', type: 'url' }),
    defineField({ name: 'dates', title: 'Year / Dates', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'imageUrl', title: 'Image URL', type: 'string', description: 'Full URL to a preview image' }),
    defineField({ name: 'category', title: 'Category', type: 'string', description: 'e.g. AI / ML, DevOps, Web3' }),
    defineField({ name: 'featured', title: 'Show on Homepage?', type: 'boolean' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Lower = shown first' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
})
