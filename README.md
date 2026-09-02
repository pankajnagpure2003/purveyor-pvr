# Purveyor (PVR) — Landing Page

A React + Vite + Tailwind CSS landing page for the Purveyor (PVR) fintech / RWA
token ecosystem, with Framer Motion animations throughout.

## Folder structure

```
purveyor-pvr/
├── index.html                 Vite entry HTML, fonts, meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx                React root
│   ├── App.jsx                 Assembles all page sections
│   ├── index.css               Tailwind + global styles
│   ├── assets/                 Your logo, coin, and about media
│   │   ├── icon.png
│   │   ├── coin.png
│   │   ├── logo-horizontal.png
│   │   ├── logo-vertical.png
│   │   └── about.mp4
│   └── components/
│       ├── Header.jsx          Sticky nav + mobile menu
│       ├── Hero.jsx            Hero with animated headline + stats
│       ├── About.jsx           Vision / mission / pillars
│       ├── UseCases.jsx        Tabbed interactive use-case panel
│       ├── Roadmap.jsx         4-phase roadmap with scroll-drawn line
│       ├── Ecosystem.jsx       Layered flow diagram + future components
│       ├── Tokenomics.jsx      Token table, donut chart, allocation bars
│       ├── ContractAddress.jsx Copy-to-clipboard contract card
│       ├── FAQ.jsx             Accordion
│       ├── FinalCTA.jsx        Closing call to action
│       ├── Footer.jsx          Footer links + risk disclaimer
│       ├── Reveal.jsx          Reusable scroll-reveal animation wrapper
│       └── CountUp.jsx         Animated number counter
└── public/                     (static passthrough, currently unused)
```

## Setup

Requires Node.js 18+.

```bash
# 1. Unzip and enter the project
cd purveyor-pvr

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Then open the URL Vite prints (defaults to http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production files are output to `dist/`, ready to deploy to any static
host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).

## Editing content

- Copy for every section lives directly in its component under
  `src/components/` — edit the arrays/strings at the top of each file
  (e.g. `PHASES` in `Roadmap.jsx`, `ALLOCATION` in `Tokenomics.jsx`).
- Colors and fonts are defined as design tokens in `tailwind.config.js`
  under `theme.extend`.
- Swap logos/media by replacing the files in `src/assets/` (keep the same
  filenames, or update the `import` paths in the relevant components).
