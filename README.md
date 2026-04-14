# storemcp.io

Marketing site, documentation, and pricing for **StoreMCP** — a WordPress plugin that turns any WordPress + WooCommerce site into a fully-featured MCP (Model Context Protocol) server.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (EN / ES)
- MDX for docs and blog (via `next-mdx-remote`)
- Shiki for syntax highlighting
- Framer Motion for animations
- Geist font family

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000` and redirects to the default locale (`/en`).

## Project structure

```
src/
├── app/
│   ├── [locale]/              # All public pages live under a locale segment
│   │   ├── layout.tsx         # Locale root with Header, Footer, i18n provider
│   │   ├── page.tsx           # Landing
│   │   ├── pricing/
│   │   ├── docs/              # MDX-backed documentation
│   │   ├── blog/              # MDX blog
│   │   ├── changelog/
│   │   ├── support/
│   │   ├── account/
│   │   ├── privacy/
│   │   └── terms/
│   ├── layout.tsx             # Root <html>
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── components/                # Shared UI
├── i18n/                      # next-intl config
├── lib/                       # Content loaders, utilities
└── middleware.ts              # next-intl routing

content/
├── docs/                      # MDX docs (English)
└── blog/                      # MDX blog posts

messages/
├── en.json
└── es.json
```

## Adding a doc page

1. Create `content/docs/<section>/<slug>.mdx`
2. Frontmatter: `title`, `description`, `tier` (free | pro | agency), `order`
3. Update the sidebar in `src/lib/docs-nav.ts` if you're adding a new section

## Adding a blog post

1. Create `content/blog/<slug>.mdx`
2. Frontmatter: `title`, `description`, `date`, `category`, `author`

## Deployment

Push to a repo connected to Vercel. The project is configured via `vercel.json` — no extra env vars needed for the base site.

## License

Proprietary. © ExitMedia LLC.
