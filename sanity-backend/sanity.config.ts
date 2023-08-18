import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'peru-goose',

  projectId: 'qkl0pvta',
  dataset: 'kids-speech',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
