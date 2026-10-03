import { defineField, defineType } from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'school', title: 'School / University', type: 'string' }),
    defineField({ name: 'href', title: 'School URL', type: 'url' }),
    defineField({ name: 'degree', title: 'Degree', type: 'string' }),
    defineField({ name: 'logoUrl', title: 'Logo URL', type: 'string' }),
    defineField({ name: 'start', title: 'Start Year', type: 'string' }),
    defineField({ name: 'end', title: 'End Year', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'school', subtitle: 'degree' } },
})
