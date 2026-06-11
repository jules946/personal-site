<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Session start

At the start of every new session or chat, read `PLAN.md` to resume from where work left off.

# Project context

Personal site for Julius Manowski. Stack: Next.js 16 (App Router), React 19, Tailwind v4, TypeScript, Sanity CMS, pnpm.

## Pages
- `/` — home (minimal shell for now)
- `/cv` — hardcoded CV content, no CMS
- `/projects` — fetches from Sanity CMS

## Key decisions
- Font: Darker Grotesque (loaded via `next/font/google` in `app/layout.tsx`)
- Tailwind v4: CSS-first config in `app/globals.css`, no `tailwind.config.js`
- Sanity project ID: `cwixueiz`, dataset: `production`
- Sanity client lives in `lib/sanity.ts`
- Sanity Studio embedded at `/studio` via `app/studio/[[...tool]]/page.tsx`
- CV is hardcoded — not in Sanity. Only projects are CMS-driven.
- Design: minimal / typographic / brutalist
- Git commits: use conventional commits format (`type(scope): description`)
