# cursor-tibro

Greenfield rebuild of the Tibro Journeys marketing, luxury holiday, trade fair, corporate, knowledge tour and CMS/API surfaces.

## Stack

React + Vite + TypeScript, Tailwind + shadcn-compatible primitives, Sanity, Express, Postgres, npm and `vite-react-ssg`.

## Commands

- `npm run dev` — Vite app on port 5173
- `npm run dev:api` — Express API on port 3001
- `docker compose up -d postgres` — Postgres on localhost:5433, database `tibro`
- `npm run dev:full` — local Postgres + API + Vite
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run studio`

## Environment

Copy `.env.example` to `.env.local` and add Cursor/Vercel secrets. Never commit secret values.
