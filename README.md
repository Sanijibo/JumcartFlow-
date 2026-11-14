# Jumcart Verify

**Commerce. Verified.**

Jumcart Verify is an African-first commerce trust infrastructure product. This repository contains the public marketing site and a separately routed merchant-dashboard frontend MVP.

> **The dashboard is frontend-only and uses clearly labelled demo data.** It does not process payments, verify real transactions, store merchant/customer information, perform fraud detection, send notifications, or connect to third-party services. Payment-provider integrations are shown as disconnected until genuinely configured.

## Requirements

- Node.js 20.9 or later
- npm (or a compatible package manager)

## Local development

```bash
git clone https://github.com/Sanijibo/JumcartFlow-.git
cd JumcartFlow-
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site or [http://localhost:3000/app](http://localhost:3000/app) for the merchant demo dashboard.

## Dashboard routes

| Route | Module |
| --- | --- |
| `/app` | Overview metrics, sample payment performance chart, recent activity, and sample orders |
| `/app/orders` | Searchable/filterable sample orders, customer details, payment and delivery status, detail dialog |
| `/app/payments` | Sample payment references, providers, amounts, statuses, and illustrative matching/detail view |
| `/app/fraud` | Clearly labelled duplicate-reference, amount-mismatch, and repeated-failure demo scenarios |
| `/app/deliveries` | Sample delivery history and a non-verifying passcode UI preview |
| `/app/analytics` | Illustrative order, payment, delivery, and merchant trust metrics |
| `/app/integrations` | Paystack, Flutterwave, Monnify, WhatsApp, and logistics providers, all disconnected |
| `/app/settings` | Sample merchant profile, session-only preferences, notification controls, security guidance |

The marketing landing page remains at `/` and is not replaced by the dashboard.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types without emitting files |

Before opening a pull request, run `npm run lint`, `npm run typecheck`, and `npm run build`.

## Project structure

```text
app/                       Public site and App Router pages
  app/                     Merchant dashboard route group at /app
    orders/ payments/ fraud/ deliveries/ analytics/ integrations/ settings/
components/dashboard/       Dashboard shell and reusable dashboard modules
components/                 Reusable marketing site components
lib/                        Shared product content and configuration
public/                      Static assets
```

Keep server components as the default. Dashboard interactions are isolated in client components. The current demo state is local to the browser and is not persisted to a backend.

## Integrations and security

No provider connection or authentication has been implemented. Do not treat demo statuses, charts, alert scenarios, order records, or delivery passcode UI as genuine information. Do not add credentials to source control. When real services are introduced, use secure server-side integrations, validate provider callbacks, authenticate and authorize merchant access, and configure secrets only in the deployment environment.

## Deploying to Vercel

Import `Sanijibo/JumcartFlow-` into Vercel, use the detected Next.js framework preset and default build settings, and deploy. No environment variables are required for the frontend MVP. Confirm integrations remain disconnected unless real server-side setup and credentials have been completed.

## GitHub workflow

Work on a feature branch, run lint, typecheck, and production build checks, then open a pull request for review. Never add credentials to source files or workflow definitions.

## License

No license has been selected yet. Add one before distributing this project for reuse.
