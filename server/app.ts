import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { z } from 'zod'
import { allTours, offices } from '../src/data/site'
import { tradeFairPackages } from '../src/data/tradeFairs'
import { pingDatabase } from './db'

dotenv.config()

export function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.get('/api/health', async (_req, res) => {
    try {
      const db = await pingDatabase()
      res.json({ ok: true, service: 'tibro-api', db })
    } catch (error) {
      res.status(500).json({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' })
    }
  })

  app.get('/api/catalog', (_req, res) => res.json({ tours: allTours, tradeFairPackages }))
  app.get('/api/content/contact', (_req, res) => res.json({ offices }))
  app.get('/api/content/about', (_req, res) => res.json({ page: { heroEyebrow: 'About Tibro', heroTitleStart: 'Three decades', heroTitleEnd: 'of moving people,', heroTitlePunchline: 'meaningfully.' }, offices }))
  app.get('/api/content/footer', (_req, res) => res.json({ offices: offices.slice(0, 4) }))
  app.get('/api/content/visa', (_req, res) => res.json({ title: 'Any border, handled.' }))
  app.get('/api/content/careers', (_req, res) => res.json({ positions: [{ title: 'General application', location: 'Any office' }] }))

  app.post('/api/enquiry', (req, res) => {
    const schema = z.object({ name: z.string().min(1), email: z.string().email(), phone: z.string().optional(), message: z.string().min(1) })
    const parsed = schema.safeParse(req.body)
    if (!parsed.success) return res.status(400).json({ ok: false, errors: parsed.error.flatten() })
    res.status(202).json({ ok: true, message: 'Enquiry captured. Configure email/CRM env vars to forward it.' })
  })

  app.post('/api/careers/apply', (req, res) => {
    const schema = z.object({ name: z.string().min(1), email: z.string().email(), role: z.string().default('General application') })
    const parsed = schema.safeParse(req.body)
    if (!parsed.success) return res.status(400).json({ ok: false, errors: parsed.error.flatten() })
    res.status(202).json({ ok: true })
  })

  return app
}
