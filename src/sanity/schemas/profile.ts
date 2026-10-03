import { defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'title', title: 'Title / Role', type: 'string' }),
    defineField({ name: 'institution', title: 'Institution', type: 'string' }),
    defineField({ name: 'institutionUrl', title: 'Institution URL', type: 'url' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'avatarUrl', title: 'Avatar URL', type: 'string', description: 'Path in /public or full URL' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3 }),
    defineField({ name: 'beginnersMind', title: "Beginner's Mind Paragraph", type: 'text', rows: 3 }),
    defineField({ name: 'convergenceParagraph', title: 'Convergence Paragraph', type: 'text', rows: 5, description: 'Separate paragraphs with a blank line (\\n\\n)' }),
    defineField({ name: 'aboutMeClosing', title: 'About Me Closing (italic)', type: 'text', rows: 2 }),
    defineField({ name: 'githubUsername', title: 'GitHub Username', type: 'string' }),
    defineField({ name: 'linkedinUsername', title: 'LinkedIn Username', type: 'string' }),
    defineField({ name: 'mediumUsername', title: 'Medium Username', type: 'string' }),
    defineField({ name: 'scholarUrl', title: 'Google Scholar URL', type: 'url' }),
    defineField({ name: 'cvUrl', title: 'CV / Resume URL', type: 'url' }),
    defineField({ name: 'blogUrl', title: 'Blog URL', type: 'url' }),
  ],
  preview: { select: { title: 'name', subtitle: 'title' } },
})
