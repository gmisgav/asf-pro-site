# ASF.Pro

Landing site for ASF.Pro, the skill-based spot-the-ball game for American sport fans.

A static site with no build step. Open `index.html` in a browser or serve the folder with any static host:

```sh
python3 -m http.server 8000
```

## What's here

| File | What |
|---|---|
| `index.html` | The page: logo hero, App Store link and QR code, the demo reel, and the footer pages |
| `legal.js` | Text for Terms, Privacy, Responsible Play, Support and Contact (opened by `#terms`, `#privacy`, …) |
| `asf-logo.webp` | The ASF logo, cut out of the brand poster |
| `photos/` | Five game photos: `<sport>.jpg` has the ball removed, `<sport>-o.jpg` is the original |

## Before going live

- **QR code** points at the placeholder `https://asf.pro/app` (`APP_URL` in `index.html`).
- **Terms and Privacy are drafts, not in force.** They follow `docs/legal/*-draft.html` in the SpotTheBall repo
  (version `2026-10-07-draft-1`). Every highlighted blank needs counsel's answer.
- **Responsible Play** describes spend limits, cool-off and self-exclusion, which are planned (PRD §29), not built.
- **Demo amounts** (entry × multiplier) are examples. The real-money product ranks players by distance to the
  judges' point; reconcile the demo with the product model.
- **Photo licenses:** the football photo is CC BY 3.0 and needs its credit, kept at the end of the Terms page.
  The others are public domain or CC0.
