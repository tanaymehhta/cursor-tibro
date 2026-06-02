import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './studio/schemas'

export default defineConfig({
  name: 'tibro-studio',
  title: 'Tibro Journeys',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '1ewsv4p2',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes }
})
