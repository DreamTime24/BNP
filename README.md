# Luna Atelier

A premium Bangladesh beauty commerce storefront built with Next.js, TypeScript, Tailwind CSS, and structured product data.

## Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostgreSQL + Prisma-ready schema
- Google OAuth environment preparation
- API route scaffolding for catalog and search

## Goal
This storefront presents a premium beauty, skincare, cosmetics, and women’s watch shopping experience with structured pages, seed data, catalog routes, and a clean route layout.

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment values:
   ```bash
   cp .env.example .env.local
   ```

3. Start the app:
   ```bash
   npm run dev
   ```

4. Open:
   ```bash
   http://localhost:3000
   ```

## Important architecture note
This repository began as a static HTML site and has been refactored into a modern storefront skeleton. It includes:
- Header and home layout
- Product catalog and detail screens
- Shopping cart and checkout forms
- Login/register pages
- Admin dashboard shell
- Prisma schema for database models
- API routes for products and search
- Environment variable template for Google and payment integrations

## Environment variables
See `.env.example` for the required variables.

Required for a functional setup:
- `DATABASE_URL`
- `AUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `PAYMENT_PUBLIC_KEY` / `PAYMENT_SECRET_KEY`
- `PAYMENT_WEBHOOK_SECRET`

## Database setup
For PostgreSQL / Prisma:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Seed data
```bash
python3 scripts/dev_seed.py
```

## Production and security checklist
- Keep credentials in `.env.local` or server environment
- Never hardcode secrets in client components
- Validate all checkout inputs and pricing server-side
- Use role checks for admin-only pages and endpoints
- Keep payment verification server-side and never trust client-side stock or pricing

## Google configuration guide
Create a Google Cloud project and enable:
- Google Identity Services
- Maps JavaScript API / Places API
- Analytics measurement ID setup in the browser

Use a restricted development key and only expose public keys in browser-side code.

## Notes
This implementation is a serious storefront foundation rather than a fully deployed production payment system. For real production, connect your own DB, auth provider, CMS, image host, and payment gateway.
