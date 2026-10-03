import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { workExperience } from './src/sanity/schemas/workExperience'
import { publication } from './src/sanity/schemas/publication'
import { project } from './src/sanity/schemas/project'
import { profile } from './src/sanity/schemas/profile'
import { education } from './src/sanity/schemas/education'

export default defineConfig({
  name: 'ritoban-portfolio',
  title: 'Ritoban Portfolio',
  projectId: 'icf8axc4',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Profile').id('profile').child(
              S.document().schemaType('profile').documentId('profile')
            ),
            S.divider(),
            S.documentTypeListItem('workExperience').title('Experience'),
            S.documentTypeListItem('education').title('Education'),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('publication').title('Publications'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [profile, workExperience, education, project, publication],
  },
})
