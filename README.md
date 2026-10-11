# Guys Being Guys — podcast website

Custom-coded podcast website built with Next.js, TypeScript, Tailwind CSS, Supabase and Netlify.

## Pages
Home, episodes archive and episode detail pages, host and guest profiles, gallery, wallpapers, about and contact.

## Current status
- Responsive website starter and demo content.
- RSS sync API for `https://anchor.fm/s/100390f0c/podcast/rss`, protected by `CRON_SECRET`.
- Netlify scheduled function configured to request RSS sync every six hours.
- Supabase migration at `supabase/migrations/0001_initial_schema.sql`.
- Gallery and wallpaper sections are placeholders until real media is added.
- Admin dashboard/auth, social publishing integrations and opt-in email/browser notifications are not implemented yet. Social publishing must remain approval-gated.

## Deploy
1. Import this GitHub repository into Netlify; it detects Next.js and uses `netlify.toml`.
2. Create a Supabase project and run `supabase/migrations/0001_initial_schema.sql` in SQL Editor.
3. Add Netlify environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (server-only), `NEXT_PUBLIC_SITE_URL`, `PODCAST_RSS_URL`, and `CRON_SECRET`.
4. Redeploy and review build logs. Do not commit `.env.local` or secrets.
5. Connect `guysbeingguys.com` after confirming availability and purchasing it.

Local preview: install Node.js 20.9+, run `npm install`, then `npm run dev`.

Production build has not yet been verified in this environment. The preferred domain has not been purchased or checked.