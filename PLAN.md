# Personal Site — Development Plan

## Phase 1: Foundation
- [x] 1. Clear the template — replace `app/page.tsx` with a bare shell
- [x] 2. Set up shared layout — nav/header with links, Darker Grotesque font (`app/layout.tsx`)
- [x] 3. Create routes — `app/cv/page.tsx` and `app/projects/page.tsx`
- [x] 4. Stub out content — CV hardcoded, projects stubbed

## Phase 2: Content & CMS
- [x] 5. Sanity set up, studio accessible at `/studio`
- [x] 6. Project content model defined (`name`, `description`, `tags`, `url`)
- [x] 7. Projects page fetching live data from Sanity — verified rendering ✓

## Phase 3: Polish
- [x] 8. Refine styling across all pages
  - [x] Home page: FillLink components with canvas-based pixel-accurate hover fill animation (bottom-to-top white fill)
  - [x] CV page: brutalist section headers, scrolling vertical name ticker (VerticalName, left side, white, reverse), right-aligned social links
  - [x] Projects page: styled to match brutalist direction
  - [x] Route group `(main)` for shared nav layout on CV/Projects, home page standalone
- [ ] 9. Social links on CV page (GitHub, LinkedIn) — right-aligned ✓ (done, tracked under item 8)
- [x] 10. Deploy — https://personal-site-seven-puce.vercel.app

## Phase 4: Iteration
- [x] CV moved to Sanity CMS
- [x] Mobile responsiveness — hide tickers on mobile, fix touch navigation on FillLinks, reposition Edinburgh
- [ ] Custom domain
- [ ] SEO — meta tags, og:image

## Key decisions
- **CMS:** Sanity (projects + CV)
- **Design:** Brutalist / constructivist — rust background, black/white only, heavy uppercase typography
- **Pages:** Home, CV (Sanity), Projects (Sanity)
- **Layout:** `app/layout.tsx` (root, font only) + `app/(main)/layout.tsx` (nav + container for CV/Projects)

## Mental model: Next.js App Router
- Every file in `app/` is a Server Component by default — runs on the server, can be `async`
- No `useState`/`useEffect` in Server Components — add `'use client'` only when you need interactivity
- Folders = routes, `page.tsx` = the page rendered at that route
