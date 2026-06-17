<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Session start

At the start of every new session or chat, read `PLAN.md` to resume from where work left off.

# Project context

Personal site for Julius Manowski. Stack: Next.js 16 (App Router), React 19, Tailwind v4, TypeScript, Sanity CMS, pnpm.

## Pages
- `/` — home page (rust background, FillLink animated nav, vertical name tickers)
- `/cv` — CV fetched from Sanity CMS
- `/projects` — projects fetched from Sanity CMS
- `/studio` — embedded Sanity Studio

## Layout structure
- `app/layout.tsx` — root layout, font only (Darker Grotesque)
- `app/(main)/layout.tsx` — shared nav + max-width container for CV and Projects pages
- Home page is outside `(main)` and has its own full-screen layout

## Key decisions
- Font: Darker Grotesque (loaded via `next/font/google` in `app/layout.tsx`)
- Tailwind v4: CSS-first config in `app/globals.css`, no `tailwind.config.js`
- Sanity project ID: `cwixueiz`, dataset: `production`
- Sanity client lives in `lib/sanity.ts`
- Sanity Studio embedded at `/studio` via `app/studio/[[...tool]]/page.tsx`
- Both CV and Projects are CMS-driven via Sanity
- Design: brutalist / constructivist — rust (#B5451B) background on home, black/white typography
- Git commits: use conventional commits format (`type(scope): description`)
- Always work in feature branches, merge to main when done
- Deployed at jules946.dev via Vercel — auto-deploys on push to main
- og:image generated via `app/opengraph-image.tsx` using Next.js edge runtime

## Components
- `app/components/VerticalName.tsx` — scrolling vertical name ticker, hidden below `lg` breakpoint
- `app/components/FillLink.tsx` — animated SVG fill link, touch-friendly (taps whole area on mobile)
