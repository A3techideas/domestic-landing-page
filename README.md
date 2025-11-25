## Overview

This repository contains the Hub Domestic landing page built with the Next.js App Router. The “Get Your Free Strategy Call” form stores submissions in the shared Supabase `Contacts` table.

## Environment Variables

Secrets are no longer embedded in the source. Create a `.env.local` file (ignored by Git) in the project root before running the app:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> Keep `.env.local` private. If you need to share the setup with teammates, provide the values over a secure channel.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to view the site.

## Repository Cleanup

Legacy CloudFront/Route53 config files that were unrelated to this landing page have been removed to keep the project lightweight. Infrastructure configuration should live in a separate repo or deployment pipeline.

## Additional Notes

- Form submissions are handled in `app/actions.ts` and rely on the Supabase client defined in `lib/supabase.ts`.
- Update the Supabase credentials whenever you rotate keys.
