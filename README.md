# Tako

Marketing site for **Tako**, a rideshare service across Cameroon. A multi-page
React site built with [Vite](https://vitejs.dev/) — black, white, and the open
road, with a live Leaflet map of Douala on the home page.

## Tech stack

- **Vite** — dev server + production build (multi-page).
- **React 18** (UMD-style global, see [Architecture](#architecture)) for the page UI.
- **Leaflet** + CARTO dark tiles + OSRM routing — the live driver map on the home hero.
- **Lucide** — icons (a curated subset; see `src/lib/icons.js`).
- Google Fonts: Plus Jakarta Sans (display), Manrope (text), Space Mono (data).

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-free production build → dist/
npm run preview  # serve the built dist/ (http://localhost:4173)
```

## Pages

Each page is a standalone HTML entry at the project root:

| File            | Page                                            |
| --------------- | ----------------------------------------------- |
| `index.html`    | Home — hero with live map, ride tiers, account  |
| `ride.html`     | Ride — fare estimator and ride options          |
| `drive.html`    | Drive — earnings estimator for drivers          |
| `cities.html`   | Cities — coverage map across Cameroon           |
| `business.html` | Tako Business — team travel                      |
| `safety.html`   | Safety — before / during / after the ride       |
| `help.html`     | Help — search, categories, FAQ                   |
| `auth.html`     | Sign up / log in (writes a demo user to `localStorage`) |

## Project structure

```
.
├── index.html, ride.html, …      # one HTML entry per page
├── public/assets/                # logo + brand images (served at /assets/…)
├── src/
│   ├── entries/                  # per-page entry modules (globals → shared → page)
│   ├── pages/                    # the page components (.jsx)
│   ├── lib/
│   │   ├── globals.js            # exposes React / ReactDOM / lucide on window + CSS
│   │   ├── leaflet-global.js     # exposes Leaflet as window.L (home only)
│   │   └── icons.js              # curated Lucide icon set
│   └── styles/
│       ├── colors_and_type.css   # design tokens (colors, type scale)
│       └── site.css              # site-wide component styles
└── vite.config.js
```

## Architecture

The pages were authored as classic, in-browser-Babel scripts: they read
`React`, `ReactDOM`, `lucide`, and `L` off the global `window`, and share helper
components (`Nav`, `Footer`, `SBtn`, …) by assigning them to `window`. Rather
than rewrite all of that into ES-module imports, the build preserves the model
and just compiles it ahead of time:

- **`src/lib/globals.js`** runs first in every page entry and puts a single
  React instance (plus Lucide and the stylesheets) on `window`. The home entry
  also loads `leaflet-global.js` for the map.
- **Classic JSX transform** — `vite.config.js` sets `jsxFactory:
  React.createElement` / `jsxFragment: React.Fragment`, so the compiled JSX
  references the global `React` instead of importing it.
- **Multi-page** — every `*.html` is a Rollup input, so the site builds to a set
  of static pages, exactly like the original separate files.

Because the cross-file helpers are attached to `window`, no page source needed
to change to move from in-browser Babel to a real build.

### Note on the Vite cache

This repo lives under a Dropbox-synced folder. `vite.config.js` points Vite's
dependency-optimizer cache at the OS temp dir so Dropbox can't invalidate the
optimized-dep hashes out from under the dev server (which otherwise causes stale
`504` responses on `npm run dev`).
