# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Vassant Finance (vassantfinance.github.io). Multi-page company website deployed via GitHub Pages.

## Architecture

- **Static site** — no build step, no framework, no package manager
- Shared stylesheet at `css/styles.css` (Outfit + Plus Jakarta Sans via Google Fonts)
- Five HTML pages in root: `index.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`
- Images in `images/` (logo/favicon: `images/icon.png`)
- Deployed automatically on push to `main` via GitHub Pages

## File Structure

```
index.html        ← homepage: nav, hero, feature cards, content sections
about.html        ← mission, platform description, approach
contact.html      ← email, phone, mailing address (matches D-U-N-S)
privacy.html      ← privacy policy
terms.html        ← terms & conditions (CA governing law)
css/styles.css    ← shared stylesheet for all pages
images/icon.png   ← logo/favicon
```

## Shared Elements

- **Navigation** — sticky nav with logo + wordmark left, links right; hamburger menu at ≤640px via `onclick` class toggle
- **Footer** — copyright + links to Privacy Policy and Terms & Conditions
- **Background** — radial gradient glow effect via `body::before`

## Development

Open any `.html` file directly in a browser or use any local server:

```
python3 -m http.server 8000
```

There is no build, lint, or test pipeline.

## Deployment

Push to `main` branch. GitHub Pages serves from the repository root.
