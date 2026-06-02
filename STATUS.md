# Tibro rebuild status

## Completed in this milestone

- Greenfield Vite React TypeScript app using `vite-react-ssg` route records in `src/App.tsx`.
- Luxury/editorial home, luxury catalog, region/country/collection shelves, and generated individual tour pages.
- Domestic and international luxury JSON catalogs using the observed live `/api/catalog` object-array shape. Schema changes: none after creation.
- Trade fair listing and package detail pages with `.tf-plex` applied only on trade-fair surfaces.
- Knowledge tours, corporate tours, about, contact, visa, blog and careers top-level pages.
- Sanity client queries and `studio/` schemas for tours, trade fair packages, pages and offices.
- Express API in `server/` on port 3001 and Vercel serverless adapter in `api/`.
- Docker Postgres config on host port 5433 with database `tibro`.
- Vercel config, SEO/meta/JSON-LD patterns and SSG route generation.

## Source reference gap

- `https://github.com/tanaymehhta/tibro-journeys-39` returned 404 through both `git clone` and authenticated `gh repo view`; no files were modified outside this repository.
- The live reference site and public API responses at `https://tibro-journeys-39.vercel.app/` were used as the read-only behavioral reference.

## Known gaps

- Sanity content is CMS-ready but not connected to a private write token; static local data is used for production-safe rendering.
- The live reference contains hundreds of catalog records; this milestone ports representative domestic and international records plus generated templates for all added records.
- Enquiry and career endpoints validate payloads but do not forward to CRM/email until secrets and destination are supplied.
- No database migrations were added because the current API does not require persisted tables.
- Vercel deploy is not completed from this VM because the CLI requires device authentication. The branch is pushed and ready for Vercel Git integration or an authenticated `vercel deploy`.

## Required Cursor/Vercel secrets

- `VITE_SITE_URL`
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `DATABASE_URL` (local default: `postgres://tibro:tibro@localhost:5433/tibro`; production can be Neon)
- Optional: `ENQUIRY_FORWARD_TO`
- Vercel account/project authentication for CLI deployment, or connect this GitHub repo to a Vercel project.

## Recommended next agent tasks

- Import the full private source catalog once repository access is granted.
- Connect Sanity documents to page rendering with preview/draft handling.
- Add CRM/email forwarding for enquiries and career applications.
- Expand visual parity with production images and brand assets once licensed assets are available.
