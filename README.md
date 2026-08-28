# Keystone Homes & Land

Concept realtor website by [Ridges & Valleys Studio](https://ridgesandvalleys.com) — a static HTML demo of modern brokerage UX, SEO structure, and agent tools.

**This is fiction.** Listings, market stats, contact details, and appointments are sample data for design. It is not a live MLS, licensed brokerage, or booking system.

**Live demo:** https://matthummel-pa.github.io/realtor-keystone-homes-and-land-theme/

## What’s in the demo

| Area | What you get |
| --- | --- |
| **Design** | Editorial charcoal + stone + forest green system, bold Fraunces headlines, traditional home photography |
| **Listings** | Filterable sample inventory (grid + map), save hearts, detail modal with payment estimate |
| **Showings** | Homepage appointment flow — property, date, time slots, on-page confirmation (no emails sent) |
| **Seller / buyer tools** | Demo home-value range, listing alerts, land/home buyer guide tools |
| **Blog** | Index + sample posts agents can adapt for SEO / education pages |
| **SEO / a11y** | Meta + Open Graph, JSON-LD (RealEstateAgent, WebSite, HowTo, FAQ, Blog), skip link, focus states, reduced-motion support |

## Site map

| Page | Path |
| --- | --- |
| Home | [`index.html`](index.html) |
| Listings | [`listings.html`](listings.html) |
| Areas | [`areas.html`](areas.html) |
| Buyer’s guide | [`guide.html`](guide.html) |
| Agents | [`agents.html`](agents.html) |
| Contact | [`contact.html`](contact.html) |
| Blog | [`blog.html`](blog.html) |
| Posts | [`posts/`](posts/) |

**Sample posts**

- [`posts/book-a-home-showing.html`](posts/book-a-home-showing.html) — showing appointment workflow
- [`posts/first-time-buyer-checklist.html`](posts/first-time-buyer-checklist.html) — scannable buyer checklist
- [`posts/land-vs-home-search.html`](posts/land-vs-home-search.html) — land vs home filter strategy

## Stack

Static site — no build step.

- HTML pages + shared [`styles.css`](styles.css)
- [`main.js`](main.js) — nav, chat widget, scroll reveal, footer year
- [`home.js`](home.js) — search handoff, value/alerts, showing booking
- [`listings.js`](listings.js) — filters, map, modal, saves
- [`guide.js`](guide.js) — guide-page tools

Fonts load from Google Fonts (Fraunces, Sora, IBM Plex Mono). Images are remote Unsplash URLs.

## Develop

```bash
# from the repo root
python3 -m http.server 8765
# then open http://127.0.0.1:8765/
```

Or open `index.html` directly in a browser. Edit HTML / CSS / JS in place — same files GitHub Pages serves.

## Deploy

Push to `main`. GitHub Pages publishes from the branch root (`/`).

**Live URL:** https://matthummel-pa.github.io/realtor-keystone-homes-and-land-theme/

If the URL 404s after the first push: **Settings → Pages → Deploy from a branch → `main` / (root)**.

## Source

Originally copied from  
`web/app/themes/ridgesandvalleys-theme/concept/realtor-keystone-homes-and-land/`  
in [matthummel-pa/ridgesandvalleys](https://github.com/matthummel-pa/ridgesandvalleys).

**This repo is the source of truth** for the live demo. Keep future concept updates here, not in the marketing site repo.
