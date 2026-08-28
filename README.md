# Keystone Homes & Land

Concept realtor website by [Ridges & Valleys Studio](https://ridgesandvalleys.com) — modern brokerage UX, SEO structure, and agent tools in a static HTML demo.

**[Live demo →](https://matthummel-pa.github.io/realtor-keystone-homes-and-land-theme/)**

> **Fiction only.** Listings, market stats, contact details, and appointments are sample data. Not a live MLS, licensed brokerage, or booking system.

![Homepage hero — traditional home photography and forest CTAs](docs/screenshots/01-hero.png)

## Key features

### 1. Book a house showing
Highest-intent realtor action on the homepage: pick a sample property, date, and time slot. Slot chips beat long dropdowns; confirmation stays on-page (nothing is emailed).

![Showing appointment scheduler with time slots](docs/screenshots/02-showing-booking.png)

**Why it matters for agents**
- Property locked before time selection
- In-person / private / virtual showing types
- Mobile-friendly required fields
- Clear demo-only confirmation copy

### 2. Searchable sample listings
Filter by type, price, acreage, and area. Switch grid or map, save favorites, open a detail modal with payment estimates.

![Listings page with filters and sample inventory](docs/screenshots/03-listings.png)

### 3. Realtor blog ready to publish
A blog index plus sample posts agents can adapt for SEO and client education — showings, buyer checklists, land vs home search.

![Blog index with three sample posts](docs/screenshots/04-blog.png)

![Sample blog post — how to book a home showing](docs/screenshots/05-blog-post.png)

### 4. More tools on the homepage
| Tool | What it demos |
| --- | --- |
| **Buy / Sell / Tour** intent cards | Clear paths for different visitors |
| **Spotlight homes** | Scannable price · beds · acres cards that prefill booking |
| **Home value estimate** | Instant fictional range (not an appraisal) |
| **Listing alerts** | Demo inbox signup for new matches |
| **Market pulse** | Sample DOM / inventory stats for layout |
| **How-it-works steps** | Search → Shortlist → Book → Confirm |

### 5. Design, SEO & accessibility
- Editorial **charcoal + stone + forest green** system (non-blue)
- Bold **Fraunces** display type + Sora UI
- Traditional home photography
- Meta / Open Graph / Twitter cards
- JSON-LD: `RealEstateAgent`, `WebSite`, `HowTo`, `FAQPage`, `Blog`, `BlogPosting`
- Skip link, focus-visible, `prefers-reduced-motion`, semantic landmarks

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

| File | Role |
| --- | --- |
| [`styles.css`](styles.css) | Design system + layouts |
| [`main.js`](main.js) | Nav, chat, scroll reveal, footer year |
| [`home.js`](home.js) | Search handoff, value/alerts, showing booking |
| [`listings.js`](listings.js) | Filters, map, modal, saves |
| [`guide.js`](guide.js) | Guide-page tools |

Fonts: Google Fonts (Fraunces, Sora, IBM Plex Mono). Photos: Unsplash.

## Develop

```bash
# from the repo root
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

Or open `index.html` directly. Edit HTML / CSS / JS in place — same files GitHub Pages serves.

## Deploy

Push to `main`. GitHub Pages publishes from the branch root (`/`).

**Live:** https://matthummel-pa.github.io/realtor-keystone-homes-and-land-theme/

If the URL 404s after the first push: **Settings → Pages → Deploy from a branch → `main` / (root)**.

## Source

Originally copied from  
`web/app/themes/ridgesandvalleys-theme/concept/realtor-keystone-homes-and-land/`  
in [matthummel-pa/ridgesandvalleys](https://github.com/matthummel-pa/ridgesandvalleys).

**This repo is the source of truth** for the live demo. Keep future concept updates here.
