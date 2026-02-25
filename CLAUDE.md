# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Vassant Finance (vassantfinance.github.io). Currently a single-page "Coming Soon" landing page deployed via GitHub Pages.

## Architecture

- **Static site** — no build step, no framework, no package manager
- Single `index.html` with inline CSS (Inter font via Google Fonts)
- `icon.png` — logo/favicon
- Deployed automatically on push to `main` via GitHub Pages

## Development

Open `index.html` directly in a browser or use any local server:

```
python3 -m http.server 8000
```

There is no build, lint, or test pipeline.

## Deployment

Push to `main` branch. GitHub Pages serves from the repository root.
