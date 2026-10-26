# CivSync

A responsive civic accountability prototype built with React, Vite, and Lucide icons. The visual design combines warm ivory, forest green, editorial typography, original SVG city artwork, and illustrated profiles.

## Open without installing anything

Download `CivSync-preview.html` from the repository (use GitHub’s **Download raw file** button), then double-click the downloaded file. It opens the working demo directly in a browser without Node.js, a server, third-party preview services, or deployment. If the repository is private, sign in to GitHub first.

This self-contained preview bundles the existing app, uses local fallback fonts, and makes no network requests. Its demo data limitations remain the same as the app. Browser-local storage availability for local files varies by browser; the app still renders when storage is unavailable. Regenerate it after app changes with:

```sh
npm run build
node scripts/export-preview.mjs
node tests/preview-browser.mjs
```

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
node tests/directory-browser.mjs
```

The browser smoke suite expects the development server on port 3000 and Chromium at `/usr/bin/chromium`. It checks representative filtering, saved profiles, contacts, record dialogs, demo address lookup and unsupported addresses, community posting and support, persistence, navigation, runtime errors, and mobile overflow. Screenshots are written to `/tmp/civsync-desktop.png` and `/tmp/civsync-mobile.png`.

## Features

- Address search with demo neighbourhoods in Bengaluru, New Delhi, and Mumbai; unsupported addresses receive an explicit explanation.
- Local, state, and central representative profiles, party affiliations, contact information, and browser-persisted bookmarks.
- Searchable representation directory covering 81 offices and departments: local civic services, state ministers, Union ministries, constitutional offices, and oversight bodies. Government-level and selection-route filters distinguish directly elected, indirect, appointed, and variable routes; Delhi excludes the Legislative Council and State Information Commission.
- Expanded councillor, MLA, and MP profile tabs covering responsibilities, limits of authority, background and disclosures, promises, votes, funds, and contacts. Missing personal and official records are explicitly marked.
- The user-provided representation PDF informed the role hierarchy only; no named officeholder claims from the attachment are presented as verified current data.
- Promise status filters, progress details, representative voting histories, and data provenance explanations.
- Development allocations, spending and remaining balances, and project breakdowns.
- Ruling coalition, opposition, and other party composition by government level.
- Community question submission, topics, government levels, searching, sorting, and reversible support votes.
- Responsive layouts, keyboard-accessible dialogs with focus containment and restoration, Escape dismissal, reduced-motion support, and clear prototype disclosures.

## Data and privacy

All officials, parties, affiliations, constituency labels, promises, votes, financial records, contact details, and town halls are **fictional illustrative data**. Profiles are intentionally reused across demo locations. This is not a real address-to-constituency lookup. No official documents or APIs have been connected, no messages are sent, and no real town hall submissions occur.

City selection, bookmarks, questions and votes are saved in localStorage on this browser only. Address strings are not sent to a backend. Google Fonts is the only optional external presentation dependency; local serif/sans-serif fallbacks are provided. No API keys or credentials are required.

Before launching a public service, connect verified electoral boundaries and representative data, dated official records for commitments, votes and budgets, real contact channels, and a moderated shared community backend. Do not remove demo disclosures until the relevant data has been verified.
