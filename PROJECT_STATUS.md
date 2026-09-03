# Project status

**Phase:** Creative redesign — color, imagery, motion (OS v1.1)  
**Date:** 2026-09-03  
**Hosting:** GitHub Pages (static export)

This file is for future contributors. Read `docs/ORGANIZED_SOLUTIONS_WEBSITE_OS.md` for brand and product direction.

---

## Current phase

The owner selected a four-color palette (blue `#3A86FF`, lavender `#BDB2FF`, blush `#FFD6E0`, pale blush `#FFF4F4`) and rejected black/earthy brand environments. This pass keeps the image-led, parallax, and motion work and rebuilds the color identity around that palette.

The next milestone is owner review of the live site. Do not begin another independent redesign until that review.

---

## What existed when this pass began

The GitHub repository contained only:

- `README.md` (one-sentence description)
- `LICENSE` (MIT, copyright YegorCreative 2026)
- A single commit: `097b014 Initial commit`

There was no Copilot implementation, no application code, no design system, and no pages.

Baseline: nothing to run, lint, typecheck, or build.

---

## What was preserved

- The existing git remote and `main` branch
- `LICENSE`
- The repository identity as the official Organized Solutions website

There was no application architecture to preserve.

---

## What was implemented

### Stack

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4
- **Static export** (`output: "export"`) for GitHub Pages
- No runtime Node server, server actions, API routes, or middleware

### Documentation

- `docs/ORGANIZED_SOLUTIONS_WEBSITE_OS.md` — governing brand and website source of truth
- `README.md` — identity, how to run, architecture, hosting
- This file

### Visual system

Semantic tokens in `app/globals.css`:

- Primary blue `#3A86FF`
- Lavender `#BDB2FF`
- Blush `#FFD6E0`
- Pale blush canvas `#FFF4F4`
- Navy text `#15203C` (type only, not large fields)
- Newsreader (display) + Source Sans 3 (body/UI)

### Site chrome

- Sticky header with restrained navigation
- Accessible mobile overlay navigation
- Footer
- Centralized primary CTA: **Start a conversation** (`content/site.ts`)

### Homepage narrative

One composed story, not a stack of cards:

1. Problem
2. Promise
3. Recognition of operational strain
4. Fractional COO, explained simply
5. Philosophy: we diagnose before we prescribe
6. Engagement: Understand → Plan → Execute (increasing depth, not SaaS pricing)
7. Difference
8. Invitation

Proof is omitted. No testimonials, clients, or outcomes were invented.

### Secondary pages

Foundations exist for Services, Approach, About, Insights, Contact, and Privacy.

Insights is architected without invented articles.

### Contact

The form UI exists. Delivery is isolated in `lib/contact/` and is **not connected**.

GitHub Pages cannot run a server-side form. An external static-compatible provider may be added later **only with explicit owner approval**. Until then, the form does not pretend a note was sent.

### SEO / accessibility

- Per-page metadata, canonical URLs, Open Graph image, JSON-LD, sitemap, robots
- Skip link, semantic landmarks, visible focus, keyboard mobile nav, reduced-motion support
- `404.html` for unknown routes

### Deployment

`.github/workflows/pages.yml`:

1. Install
2. Lint
3. Typecheck
4. Static export (with Pages base path / site URL)
5. Publish `out/` to GitHub Pages

`NEXT_PUBLIC_BASE_PATH` is set in CI so a project site at `/organized-solutions/` resolves assets and routes. A custom domain uses an empty base path.

---

## Validation

Second-pass visual elevation reviewed at 390 / 768 / 1280 / 1440, including motion, CTA hover, mobile menu, reduced-motion, and static export.

Run locally on 2026-09-02:

| Check | Result |
| --- | --- |
| `npm run lint` | Pass |
| `npm run typecheck` | Pass |
| `npm run build` (static export to `out/`) | Pass |
| Tests | None in the repository |
| Visual review | Desktop 1440, laptop 1280, tablet 768, mobile 390 |
| Direct routes (`/about/`, `/services/`, etc.) | Pass |
| Unknown route | Custom 404 |
| Base-path export (`/organized-solutions/`) | Asset and link prefixes verified at build time |

---

## Known placeholders

- Approved photography (site is designed to stand without it)
- Contact delivery provider
- Insights essays
- Proof (clients, case studies, testimonials) — none until real
- Production domain / custom domain
- Open Graph uses a generated wordmark image, not photography

---

## Pending business-owner decisions

1. Confirm or change the primary CTA wording (**Start a conversation** is working copy).
2. Approve a static-compatible contact form provider, or an alternative contact channel. Do not invent an email address.
3. Enable GitHub Pages: **Settings → Pages → Source: GitHub Actions**.
4. Confirm whether the live URL is `https://<user>.github.io/organized-solutions/` or a custom domain.
5. Supply approved photography when available.
6. Supply any real proof that may be published (only with permission).
7. Founder name and any biographical facts beyond the unembellished healthcare origin.
8. Privacy policy review by the owner.

---

## What does not yet meet the quality bar

- Contact cannot actually receive notes until a provider is approved.
- Insights is an honest empty archive, not a publishing system.
- Secondary pages are complete as foundations; they are lighter than the homepage by design.
- No photography. That is correct for now, but the site will deepen when observational photography exists.
- Current-page indication in navigation is not yet implemented.
- The generated Open Graph image is typographic, not photographic.

Do not “fill” these gaps with invented content or stock photography.
