import { defineField, defineType } from 'sanity'

export const workExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'href', title: 'Company URL', type: 'url' }),
    defineField({ name: 'title', title: 'Role / Title', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'logoUrl', title: 'Logo URL', type: 'string', description: 'Path in /public or full URL' }),
    defineField({ name: 'start', title: 'Start Date', type: 'string', description: 'e.g. 08/2026' }),
    defineField({ name: 'end', title: 'End Date', type: 'string', description: 'e.g. 03/2026 or Present' }),
    defineField({ name: 'isCurrentRole', title: 'Current Role?', type: 'boolean' }),
    defineField({
      name: 'description',
      title: 'Description Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Lower = shown first. 1 = top.' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'company', subtitle: 'title' },
  },
})
