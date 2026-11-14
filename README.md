# Jumcart Verify

**Commerce. Verified.**

Jumcart Verify is the starting point for an African-first commerce trust infrastructure product. This repository contains a responsive Next.js App Router website and a production-minded foundation for building the product experience.

> The current site is a frontend foundation only. It does not process payments, verify transactions, store customer information, or connect to third-party services. No production integrations or credentials are included.

## Requirements

- Node.js 20.9 or later
- npm (or a compatible package manager)

## Local development

```bash
# Clone the repository and enter the project directory
 git clone https://github.com/Sanijibo/JumcartFlow-.git
 cd JumcartFlow-

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

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
app/                  App Router pages, layout, and global styles
components/           Reusable site components
lib/                  Shared product content and configuration
public/               Static assets
```

Keep server components as the default. Add a client component only when browser-side interactivity is needed. Put shared content and typed configuration in `lib/`, and reusable interface pieces in `components/`.

## Styling and icons

The project uses Tailwind CSS 4 through its PostCSS plugin. Global theme tokens and base styles live in `app/globals.css`. Icons come from [Lucide React](https://lucide.dev/).

## Deploying to Vercel

1. Import `Sanijibo/JumcartFlow-` into [Vercel](https://vercel.com/new) and authorize access to the repository.
2. Use the detected Next.js framework preset and default build settings.
3. No environment variables are required for this frontend foundation.
4. Deploy. Vercel can build subsequent pushes to the connected branch automatically.

Do not commit credentials. If future server-side integrations need secrets, configure them in Vercel Project Settings and document variable names (never secret values) here. Validate and authorize any external integration before exposing it to the application.

## GitHub workflow

Work on a feature branch, run the checks above, and open a pull request for review before merging. Add automated checks with GitHub Actions as the project grows; do not put credentials in workflow files.

## License

No license has been selected yet. Add one before distributing this project for reuse.
