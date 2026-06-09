# Personal Site — Development Plan

## Phase 1: Foundation
- [x] 1. Clear the template — replace `app/page.tsx` with a bare shell
- [x] 2. Set up shared layout — nav/header with links, Darker Grotesque font (`app/layout.tsx`)
- [x] 3. Create routes — `app/cv/page.tsx` and `app/projects/page.tsx`
- [x] 4. Stub out content — CV hardcoded, projects stubbed

## Phase 2: Content & CMS
- [x] 5. Sanity set up, studio accessible at `/studio`
- [x] 6. Project content model defined (`name`, `description`, `tags`, `url`)
- [x] 7. Projects page fetching live data from Sanity — **verify rendering next session**

## Phase 3: Polish
- [ ] 8. Refine styling with Tailwind v4 (CSS-first config in `globals.css`, no `tailwind.config.js`)
- [ ] 9. Social links already on CV page (GitHub, LinkedIn) ✓
- [ ] 10. Deploy — push to GitHub, connect to Vercel

## Key decisions
- **CMS:** Sanity (TBD)
- **Design:** Minimal / typographic
- **Pages:** Home (maybe), CV/About, Projects

## Mental model: Next.js App Router
- Every file in `app/` is a Server Component by default — runs on the server, can be `async`
- No `useState`/`useEffect` in Server Components — add `'use client'` only when you need interactivity
- Folders = routes, `page.tsx` = the page rendered at that route
