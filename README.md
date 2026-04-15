# Corner Canyon Analytics

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sweetfalu-cloud/corner-canyon-analytics-landing-experience)

A modern full-stack analytics dashboard built with React, Tailwind CSS, shadcn/ui, and Cloudflare Workers. This project provides a production-ready starter with API routes, theming, error handling, and seamless deployment to Cloudflare.

## Features

- **React 18** with Vite for fast development and hot module replacement
- **Cloudflare Workers** backend using Hono for API routes
- **shadcn/ui** component library with Tailwind CSS and dark mode support
- **TanStack Query** for data fetching, caching, and mutations
- **Responsive design** with mobile-first approach and sidebar layout
- **TypeScript** end-to-end with strict typing
- **Theme toggle** (light/dark mode) with localStorage persistence
- **Error boundaries** and client-side error reporting
- **Sonner** toasts for user feedback
- **Production-optimized** with code splitting and tree shaking
- **Zero-config deployment** to Cloudflare Pages/Workers

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion, React Router |
| **State/Data** | TanStack Query, Zustand, React Hook Form, Zod |
| **Backend** | Cloudflare Workers, Hono |
| **UI/UX** | Headless UI, Radix UI, Tailwind Animate |
| **Dev Tools** | Bun, ESLint, Prettier, Wrangler |

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed (`curl -fsSL https://bun.sh/install | bash`)
- [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`bunx wrangler@latest`)
- Cloudflare account and API token for deployment

### Installation

1. Clone or download the repository
2. Install dependencies:

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

The app will be available at `http://localhost:3000` (or your configured `PORT`).

- Frontend: Hot-reloads on file changes
- Backend: API routes at `/api/*` (proxied automatically)

### Build for Production

```bash
bun run build
```

Outputs optimized assets to `dist/`.

### Deployment

Deploy to Cloudflare Workers/Pages with one command:

```bash
bun run deploy
```

This builds the app and runs `wrangler deploy`.

Alternatively:

```bash
bun run build
wrangler deploy
```

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sweetfalu-cloud/corner-canyon-analytics-landing-experience)

**Configure Wrangler**: Update `wrangler.jsonc` with your Cloudflare account ID and any custom bindings (KV, D1, R2, etc.).

## Usage

### API Development

Add custom API routes in `worker/userRoutes.ts`:

```typescript
import { userRoutes } from 'worker/userRoutes';

app.get('/api/users', (c) => c.json({ users: [] }));
```

Routes are automatically loaded and protected with CORS.

### Frontend Customization

- Replace `src/pages/HomePage.tsx` with your app
- Use shadcn/ui components from `src/components/ui/*`
- Extend Tailwind config in `tailwind.config.js`
- Add routes in `src/main.tsx`

### Environment Variables

Access via `import.meta.env.VITE_*` in frontend or `env` in Workers.

## Project Structure

```
├── src/                 # React app
│   ├── components/      # UI components (shadcn/ui + custom)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and reporters
│   └── pages/           # Page components
├── worker/              # Cloudflare Workers API
├── public/              # Static assets
├── tailwind.config.js   # Tailwind + custom theme
└── wrangler.jsonc       # Cloudflare config
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run lint` | Run ESLint |
| `bun run preview` | Local preview of production build |
| `bun run deploy` | Build + deploy to Cloudflare |
| `bunx wrangler types` | Generate Worker types |

## Contributing

1. Fork the repo
2. Create a feature branch (`bun run dev`)
3. Commit changes (`git commit -m 'feat: ...'`)
4. Push and open a PR

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- File issues on GitHub