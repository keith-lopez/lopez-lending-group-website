# Lopez Lending Group Website

The production marketing website for **Lopez Lending Group**, the mortgage practice of Keith Lopez (NC + SC). Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), TypeScript, and `@astrojs/sitemap`.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # serves the production build locally
```

Requires Node 20+.

---

## Where to edit content

Almost every word on the site is centralized in a small set of files. You shouldn't have to touch any component files for routine copy updates.

| What to change | File |
|---|---|
| Site-wide constants (NMLS, phone, email, Calendly, application URL, logo) | `src/data/site.ts` |
| Nav links | `src/data/nav.ts` |
| Loan cards and `/loan-options` deep sections | `src/data/loans.ts` |
| FAQ questions and categories | `src/data/faqs.ts` |
| Testimonials (mark with `isSample: true` if not yet verified) | `src/data/testimonials.ts` |
| Mortgage roadmap steps (also editable on `/mortgage-roadmap`) | `src/data/roadmap.ts` |
| Homepage 4-step process | `src/data/process.ts` |
| Homepage section copy | `src/components/sections/*.astro` |
| Per-page hero/H1 content | `src/pages/*.astro` |

---

## Add a blog post

1. Create a new Markdown file in `src/content/blog/` (e.g. `2026-05-15-fha-vs-conventional.md`).
2. Include the frontmatter shown below.
3. Run `npm run dev` and check `/blog`.

```yaml
---
title: "FHA vs. Conventional: which one actually fits you?"
description: "The honest trade-offs in 800 words."
pubDate: 2026-05-15
image: "/images/blog/fha-vs-conventional.jpg"   # optional
category: "First-Time Buyers"                    # must match the enum below
draft: false
---
```

Allowed `category` values (defined in `src/content.config.ts`):

- `First-Time Buyers`
- `Refinancing`
- `Investment`
- `Market Updates`
- `For Agents`

Set `draft: true` to keep a post out of the build until it's ready.

---

## Placeholders to replace before launch

These are intentionally generic and ready to be swapped:

| Placeholder | Where it lives | What to do |
|---|---|---|
| `NMLS-PLACEHOLDER` | Already wired through `NMLS_ID` in `src/data/site.ts` — confirm the value is correct (currently `2814077`). Updates flow to the footer, About page, and JSON-LD. |
| `CALENDLY-USERNAME-PLACEHOLDER` | `CALENDLY_URL` in `src/data/site.ts` controls the `/schedule` iframe and any CTA pointing at Calendly. |
| `APPLICATION-URL-PLACEHOLDER` | `APPLICATION_URL` in `src/data/site.ts` drives the `/apply` button. |
| Social links | Add real URLs to `Footer.astro` (LinkedIn / Facebook / Instagram anchors) and to `sameAs` in `src/layouts/BaseLayout.astro` (LocalBusiness JSON-LD). |
| Headshot | Replace `/public/images/headshot.jpg` (used on the homepage hero and `/about`). |
| Logo | `/public/images/logo.svg` (header) and `/public/images/logo-white.svg` (footer, when ready). |
| Open Graph images | `/public/images/og-default.jpg`, `/public/images/og-home.jpg`, `/public/images/og-for-agents.jpg`. |
| Privacy Policy / Accessibility Statement | Both anchors in `Footer.astro` currently point to `#`. Replace with real URLs once the policies are drafted. |

---

## Project structure

```
src/
├── components/
│   ├── forms/      # ContactForm, LeadMagnetForm, SecondLookForm
│   ├── layout/     # Header, Footer, Nav, MobileNav, StickyMobileCTA, BackToTop
│   ├── sections/   # Hero, ProblemSolution, FourStepProcess, WhyMe, Testimonials,
│   │               # LoanOptions, TwoPaths, SecondLookOffer, BlogPreview, FAQFinalCTA
│   └── ui/         # Button, Card, Accordion, BadgeStrip, SectionHeading,
│                   # EyebrowLabel, IconFeature
├── content/
│   └── blog/       # Markdown blog posts (validated by src/content.config.ts)
├── data/           # Centralized editable content (see "Where to edit content" above)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── loan-options.astro
│   ├── mortgage-roadmap.astro
│   ├── for-agents.astro
│   ├── resources.astro
│   ├── faq.astro
│   ├── testimonials.astro
│   ├── contact.astro
│   ├── apply.astro
│   ├── schedule.astro
│   ├── second-look.astro
│   └── blog/
│       ├── index.astro
│       └── [slug].astro
└── styles/
    └── global.css  # Font imports, Tailwind layers, .container-x / .section-y / .eyebrow / btn-primary / btn-secondary
```

---

## Forms

The three forms (`ContactForm`, `LeadMagnetForm`, `SecondLookForm`) all POST to placeholder endpoints (`/api/contact`, `/api/lead-magnet`, `/api/second-look`). Before launch, wire them to a form provider:

- **Formspree** — easiest drop-in. Replace each `action` with your Formspree endpoint.
- **Netlify Forms** — if you host on Netlify, add `data-netlify="true"` and a hidden `form-name` input.
- **Custom serverless** — point each form at an Astro server endpoint, AWS Lambda, etc.

The `SecondLookForm` posts `multipart/form-data` because it accepts a file upload — make sure whichever provider you pick supports attachments.

Search `// TODO: connect to form provider` to find each one.

---

## SEO

- Per-page `<title>`, `<meta description>`, and Open Graph image are set via `BaseLayout` props.
- `@astrojs/sitemap` generates `sitemap-index.xml` automatically at build time.
- `public/robots.txt` allows all crawlers and points at the sitemap.
- `LocalBusiness` JSON-LD is rendered on every page from `BaseLayout`.
- `FAQPage` JSON-LD is rendered on `/faq` and on the homepage Section 7 (6 featured FAQs).

---

## Color and typography

Defined in `tailwind.config.mjs`.

| Token | Hex |
|---|---|
| `teal` (primary CTA, accent) | `#366e6d` |
| `offwhite` (background) | `#fefefe` |
| `silver` (alt sections, cards) | `#e4eaeb` |
| `steel` (borders, secondary text) | `#9aadb3` |
| `navy` (headings, primary text) | `#37465c` |

Fonts: **Fraunces** (headings), **Inter** (body / UI) — both loaded from Google Fonts in `src/styles/global.css`.
