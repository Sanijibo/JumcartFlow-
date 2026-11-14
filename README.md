# Supabase setup guide

This repository is prepared for a Supabase-backed merchant SaaS foundation. The public homepage and merchant dashboard remain in place, but the actual authentication and database foundation is intentionally implemented as a secure backend starter that must be configured in Supabase.

## 1. Create a Supabase project

1. Go to https://supabase.com and create a new project.
2. Record the project URL and anon key from the project settings.
3. Create a new database password if prompted.
4. Keep the service-role key in a secure environment only. Do not commit it to Git.

## 2. Configure local environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Use the Supabase values for:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL` (e.g. `http://localhost:3000`)
- `SUPABASE_SERVICE_ROLE_KEY` (server-only secret, never exposed to the browser)
- `SUPABASE_AUTH_REDIRECT_URL` (typically `http://localhost:3000/auth/callback`)

## 3. Apply the database migrations

From the repo root, run:

```bash
supabase db push
```

If you use the Supabase CLI for local development, run this after logging in:

```bash
supabase login
supabase link --project-ref <your-project-ref>
supabase db push
```

The included migration files are:

- `supabase/migrations/001_initial_schema.sql`
- `supabase/migrations/002_row_level_security.sql`

## 4. Configure authentication in Supabase

Inside your Supabase dashboard:

1. Open Authentication > Settings.
2. Enable email sign-in if needed.
3. Configure email confirmation behavior to match your product requirements.
4. Set the Site URL and redirect URLs to your local app while developing.
5. Add `http://localhost:3000/auth/callback` as a redirect URL for signup verification.

## 5. Run the app

```bash
npm install
npm run dev
```

Routes:

- `/` — marketing homepage
- `/login` — merchant login
- `/register` — merchant registration
- `/forgot-password` — password reset request
- `/reset-password` — set a new password
- `/onboarding` — business onboarding form
- `/app` — merchant dashboard workspace

## 6. Security notes

- Never expose the service-role key to the browser.
- Never commit `.env.local` files.
- Never trust client-supplied business IDs without authorization checks.
- Business access is enforced with Supabase Row Level Security policies and server-side checks.
- The front-end dashboard is protected by server-side auth checks, but the database policies remain the real enforcement layer.

## 7. Production deployment

When deploying to Vercel or another host:

1. Add environment variables in the deployment platform.
2. Set `NEXT_PUBLIC_APP_URL` to the production URL.
3. Keep the service-role key in secure server runtime settings only.
4. Configure Supabase auth redirect URLs for production before enabling live merchant access.

## 8. Current implementation status

This repository includes the secure database and auth foundation, but the project is not yet connected to a live Supabase instance in this environment. The SQL schema and RLS rules are prepared, but you must create the Supabase project and apply the migrations in your own environment before testing login or protected routes against real data.
