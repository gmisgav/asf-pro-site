# ASF.Pro

Landing site for ASF.Pro, the skill-based spot-the-ball game for American sport fans.

A static site with no build step. Open `index.html` in a browser or serve the folder with any static host:

```sh
python3 -m http.server 8000
```

## What's here

| File | What |
|---|---|
| `index.html` | The page: logo hero, the mascot holding a phone with the app's QR code, App Store link, and the footer pages |
| `legal.js` | Text for Terms, Privacy, Responsible Play, Support and Contact (opened by `#terms`, `#privacy`, …) |
| `asf-logo.webp` | The ASF logo, cut out of the brand poster |
| `mascot.webp`, `mascot-glove.webp` | The mascot cut out of the brand poster, and the fingertips drawn over the phone he holds |

## Before going live

- **QR code** points at the placeholder `https://asf.pro/app` (`APP_URL` in `index.html`).
- **Terms and Privacy are drafts, not in force.** They follow `docs/legal/*-draft.html` in the SpotTheBall repo
  (version `2026-10-07-draft-1`). Every highlighted blank needs counsel's answer.
- **Responsible Play** describes spend limits, cool-off and self-exclusion, which are planned (PRD §29), not built.
