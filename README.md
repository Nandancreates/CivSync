# CivSync

A responsive civic accountability prototype built with React, Vite, and Lucide icons. The visual design combines warm ivory, forest green, editorial typography, original SVG city artwork, and illustrated profiles.

## Run

Requires Node.js 20.19+ or 22.12+ (validated on Node.js 24).

```sh
cd /workspace/CivSync
npm ci --cache /tmp/civsync-npm --no-audit --no-fund
npm run dev -- --port 3000
```

## Validate

```sh
npm run build
npm test
node tests/browser.mjs
```

The browser smoke suite expects the development server on port 3000 and Chromium at `/usr/bin/chromium`. It checks representative filtering, saved profiles, contacts, record dialogs, demo address lookup and unsupported addresses, community posting and support, persistence, navigation, runtime errors, and mobile overflow. Screenshots are written to `/tmp/civsync-desktop.png` and `/tmp/civsync-mobile.png`.

## Features

- Address search with demo neighbourhoods in Bengaluru, New Delhi, and Mumbai; unsupported addresses receive an explicit explanation.
- Local, state, and central representative profiles, party affiliations, contact information, and browser-persisted bookmarks.
- Promise status filters, progress details, representative voting histories, and data provenance explanations.
- Development allocations, spending and remaining balances, and project breakdowns.
- Ruling coalition, opposition, and other party composition by government level.
- Community question submission, topics, government levels, searching, sorting, and reversible support votes.
- Responsive layouts, keyboard-accessible dialogs with focus containment and restoration, Escape dismissal, reduced-motion support, and clear prototype disclosures.

## Data and privacy

All officials, parties, affiliations, constituency labels, promises, votes, financial records, contact details, and town halls are **fictional illustrative data**. Profiles are intentionally reused across demo locations. This is not a real address-to-constituency lookup. No official documents or APIs have been connected, no messages are sent, and no real town hall submissions occur.

City selection, bookmarks, questions and votes are saved in localStorage on this browser only. Address strings are not sent to a backend. Google Fonts is the only optional external presentation dependency; local serif/sans-serif fallbacks are provided. No API keys or credentials are required.

Before launching a public service, connect verified electoral boundaries and representative data, dated official records for commitments, votes and budgets, real contact channels, and a moderated shared community backend. Do not remove demo disclosures until the relevant data has been verified.
