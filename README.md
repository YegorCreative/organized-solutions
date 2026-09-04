# Organized Solutions

Official website for **Organized Solutions** — a fractional COO practice.

We help businesses across every industry build operations that run smoothly — and keep running.

**Tagline:** Sustainable systems. Real results.

**Positioning:** We diagnose before we prescribe.

This is not a generic consulting company. Organized Solutions brings experienced operational leadership into organizations that need clarity, structure, better systems, and execution without necessarily hiring a full-time COO.

---

## Technology

- Next.js 16 (App Router), statically exported
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint (`eslint-config-next`)
- GitHub Pages via GitHub Actions

This is a **static site**. There is no Node.js server in production.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run lint
npm run typecheck
npm run build          # writes a static site to out/
npm start              # serves out/ locally
npm run validate       # lint, typecheck, and static build
```

### Environment

Copy `.env.example` to `.env.local` if you need to override defaults.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL for metadata, sitemap, and Open Graph. Defaults to `http://localhost:3000`. |
| `NEXT_PUBLIC_BASE_PATH` | Subpath for GitHub project Pages. Empty locally and for a custom-domain root. |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Formspree form URL (`https://formspree.io/f/{form_id}`). Empty until the owner-created form is connected. Public in the client bundle — not a private API secret. |

Do not commit secrets, account passwords, or Formspree API tokens.

### Contact form (Formspree)

The contact page posts from the browser to Formspree. There is no server or API route.

Until `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is set, the form stays in an honest unconfigured state and does not pretend a note was sent. Direct email `admin@organizedsolutionsgroup.com` remains the fallback.

**Owner setup**

1. Create a Formspree account at [formspree.io](https://formspree.io/).
2. Create a form whose notification email is `admin@organizedsolutionsgroup.com`.
3. Confirm the Formspree address from that inbox if asked.
4. Copy the form endpoint (`https://formspree.io/f/{form_id}`).
5. Local: put it in `.env.local` as `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`.
6. Production: GitHub → repository **Settings → Secrets and variables → Actions → Variables** → `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`. Then redeploy.
7. In Formspree form Settings, disable visible reCAPTCHA so AJAX submissions are not blocked. Keep Formspree’s built-in spam filtering. The site already sends the `_gotcha` honeypot.
8. After a successful production test, optionally set Formspree **Restrict to Domain** to `yegorcreative.github.io` (the current GitHub Pages host). Do not enable this until the live test works — it will block `localhost`. Do not guess a future custom domain.

The notification subject is `New Organized Solutions Website Inquiry`. Reply-To uses the visitor’s email.

## Hosting

Production is **GitHub Pages**.

`.github/workflows/nextjs.yml` installs dependencies, runs lint and typecheck, statically exports the site to `out/`, and publishes that artifact to GitHub Pages on every push to `main`.

Pages **must** use **Source: GitHub Actions**. If it is set to “Deploy from a branch”, GitHub Jekyll-renders `README.md` instead of the Next.js site.

If the site is served from `https://<user>.github.io/organized-solutions/`, the workflow sets `NEXT_PUBLIC_BASE_PATH` to `/organized-solutions`. A custom domain uses an empty base path.

---

## Architecture

```
app/                 Routes, layout, metadata, sitemap, robots
components/
  brand/             Wordmark and primary CTA
  layout/            Header, mobile navigation, footer, skip link
  home/              Homepage narrative sections
  engagement/        Three-tier partnership storytelling
  contact/           Contact form
  seo/               JSON-LD
content/             Business copy, navigation, CTA, tiers, values
lib/                 Metadata, URLs, isolated contact delivery
docs/                Governing brand and website operating system
.github/workflows/   GitHub Pages deployment
```

Content and presentation are separated. Change CTA wording in `content/site.ts`. Change page copy in `content/copy.ts`. Change color, type, and spacing tokens in `app/globals.css`.

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/approach` | Approach |
| `/about` | About |
| `/insights` | Insights (architecture ready; no invented articles) |
| `/contact` | Contact |
| `/privacy` | Privacy |

---

## Documentation

| File | Role |
| --- | --- |
| `docs/ORGANIZED_SOLUTIONS_WEBSITE_OS.md` | Permanent brand and website source of truth |
| `PROJECT_STATUS.md` | Current phase, inherited condition, pending work, and validation |
| `README.md` | This file |

Read the OS before making design or copy changes. Read `PROJECT_STATUS.md` before assuming what is still placeholder.
