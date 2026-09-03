# Organized Solutions Website Foundation

Official website foundation for Organized Solutions.

Current phase: **Foundation / Brand Discovery**.

## Business context currently approved

- Organized Solutions provides fractional COO services, delivering practical operational leadership without the cost of a full-time hire.
- Tagline: **Sustainable systems. Real results.**
- Supporting message: **We help businesses across every industry build operations that run smoothly — and keep running.**
- Engagement tiers:
  - Tier 1 — Assessment
  - Tier 2 — Assessment + Recommendation
  - Tier 3 — Assessment + Recommendation + Implementation

## Technology stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS v4
- ESLint

## Run locally

```bash
npm install
npm run dev
```

Production validation commands:

```bash
npm run lint
npm run build
```

## Folder structure

```text
app/
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx
  services/page.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  sections/
  site/
  ui/
lib/
  content.ts
  metadata.ts
  site.ts
PROJECT_STATUS.md
```

## Content architecture

Business copy is centralized in `lib/content.ts`.

- `companyContent` → positioning, tagline, supporting message, approach text
- `serviceTiers` → all three approved service tiers and “best for” content
- `faqContent` → FAQ structure and approved-entry guardrail
- `contactContent` → contact CTA architecture + list of required business details

This keeps business content out of UI component files and makes future editing straightforward.

## Design-token architecture

Global semantic tokens live in `app/globals.css` and are consumed by Tailwind classes:

- `background`
- `foreground`
- `surface`
- `muted`
- `border`
- `primary`
- `primary-foreground`
- `accent`

Temporary styling is intentionally neutral and should be replaced only after brand direction is approved.

## SEO foundation

- Shared metadata base in `app/layout.tsx`
- Per-page metadata via `lib/metadata.ts`
- `app/robots.ts`
- `app/sitemap.ts`
- Semantic page structure and heading hierarchy in route components

## What is intentionally incomplete

These items are pending brand discovery and must not be fabricated:

- Final brand color system
- Final typography direction
- Logo system and brand assets
- Final imagery direction
- Mission / vision / values
- Final page architecture and expanded copy
- Real contact details (email, phone, location, booking links)
- Social profile links
- Testimonials, case studies, statistics, certifications, team bios
- Approved FAQ entries from project materials

## Where to apply future brand-system changes

- Token values: `app/globals.css`
- Global metadata/site identity config: `lib/site.ts`
- Business copy: `lib/content.ts`
- Shared layout and navigation: `components/site/*`
- Reusable visual primitives: `components/ui/*`
- Section-level content blocks: `components/sections/*`
