import type { Request, Response } from 'express'
import { createServer } from '../server/app'

const app = createServer()

export default function handler(req: Request, res: Response) {
  return app(req, res)
}
