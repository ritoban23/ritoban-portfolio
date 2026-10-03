import { defineField, defineType } from 'sanity'

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'conference', title: 'Conference / Publisher', type: 'string', description: 'e.g. IEEE, Cambridge Scholars Publishing, IFIP IoT 2026 (In Progress)' }),
    defineField({ name: 'authors', title: 'Authors', type: 'string' }),
    defineField({ name: 'tldr', title: 'TL;DR / Abstract', type: 'text', rows: 4 }),
    defineField({ name: 'paperUrl', title: 'Paper URL', type: 'url' }),
    defineField({ name: 'codeUrl', title: 'Code URL', type: 'url' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Research', 'Books', 'Blogs'] },
    }),
    defineField({ name: 'featured', title: 'Show on Homepage?', type: 'boolean' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'conference' },
  },
})
