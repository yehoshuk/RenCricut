# RenCricut

Rena's Pesach Cricut product website. Plain HTML/CSS/JS. No build step.
Deployed to GitHub Pages. One page — all content lives in `index.html`.

## Commands

```bash
# Deploy (live on GitHub Pages in ~60 seconds)
git add -p
git commit -m "describe change"
git push

# Preview locally
npx serve .           # Node
python -m http.server # Python 3

# Live site
# https://yehoshuk.github.io/RenCricut/
```

## File Structure

```
index.html            ← All content. Only file most edits touch.
css/
  styles.css          ← Design tokens (:root), reset, section layouts
  components.css      ← Nav, product cards, contact form
  responsive.css      ← All media queries (breakpoints: 600px, 1024px)
js/
  main.js             ← Mobile nav toggle + form validation. Keep under 80 lines.
images/               ← Product photos go here (see Image Specs below)
```

## Design Tokens (css/styles.css :root)

Change colors or fonts here only — they cascade everywhere.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#f7f4ef` | Page background (linen white) |
| `--color-gold` | `#c9a84c` | Borders, prices, CTA buttons — use sparingly |
| `--color-gold-hover` | `#a07830` | Button hover state |
| `--color-wheat` | `#e8d9b5` | Ticker strip background |
| `--color-muted` | `#888880` | Captions, labels, taglines |
| `--color-black` | `#1a1a18` | Body text, headings |
| `--font-display` | Playfair Display | Headlines, product names |
| `--font-accent` | Cormorant Garamond | Taglines, italic sub-labels |
| `--font-body` | DM Sans | Body copy, nav, buttons, form |

## Design Invariants — Do Not Change

- **No `border-radius` anywhere** — sharp corners define the editorial feel
- **2px gap on `.products-grid` with `background: var(--color-black)`** — this creates the black grid lines between cards; do not add `border` to cards
- **Gold used sparingly** — only on dividers, prices, and one CTA; adding it elsewhere dilutes it
- **No JS animations** — all transitions are CSS only

## Typography Reference

| Element | Font | Size | Weight |
|---|---|---|---|
| Hero headline | Playfair Display | clamp(44px, 6.5vw, 96px) | 900 |
| Section title | Playfair Display | clamp(28px, 3.5vw, 48px) | 700 |
| Product name | Playfair Display | 20px | 700 |
| Taglines / sub-labels | Cormorant Garamond | 15–20px | 300 italic |
| Nav, labels, CTAs | DM Sans | 11–13px | 400–500, uppercase |
| Body copy, descriptions | DM Sans | 14–16px | 300 |

## Image Specs

Compress all images to under 200KB using [squoosh.app](https://squoosh.app).

| Image | File | Target width | Aspect ratio |
|---|---|---|---|
| Hero (Seder table) | `images/hero-table.jpg` | ~1800px | fills column |
| Rena portrait | `images/rena-portrait.jpg` | ~800px | 3:4 |
| Standard product | `images/product-XX.jpg` | ~800px | 4:5 |
| Featured product (#1, #7) | `images/product-01.jpg` | ~1200px | fills height |

Use `loading="eager"` on `hero-table.jpg`, `loading="lazy"` on everything else.

## Adding a Product

1. Copy an `<article class="product-card">` block in `index.html`
2. Update: `<img src/alt>`, `.product-card__name`, `.product-card__tagline`, `.product-card__desc`, `.product-card__price`
3. Add an `<option>` to `<select id="product">` in the order form
4. To make it featured (spans 2 columns): add class `product-card--featured`

## Formspree Setup (one-time, before launch)

1. Create free account at formspree.io
2. Create a new form → copy the form ID (e.g. `xaabbccdd`)
3. In `index.html`, replace `YOUR_FORM_ID` in `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Replace `rena@renacricut.com` with Rena's real email (appears in the order section and footer)

## Seasonal Update Checklist (each Pesach)

- [ ] `<title>` — update year
- [ ] Hero eyebrow: `"Handmade · Pesach 57XX"` — update Hebrew year
- [ ] Process strip: order deadline date
- [ ] Ticker text — update year references
- [ ] Footer tagline: `"Handmade Pesach pieces · 20XX"`
- [ ] `<meta name="description">` — update year

## Before Going Live

- [ ] Replace all Unsplash placeholder images with real product photos
- [ ] Complete Formspree setup above
- [ ] Test form submission end-to-end
- [ ] Check on iPhone Safari and Android Chrome
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) on the live URL
