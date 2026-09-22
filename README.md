# LIFT Consult · Version 1.0

A standalone patient-facing visual education app, separate from LFAS. Designed for short physician-led conversations on an iPad.

## Included

Eight three-screen stories:

- Why faces age differently
- Structural Support
- Mobility & Descent
- Tissue Burden
- Skin & Envelope
- Tissue Remodeling & Tightening — QuantumRF or Morpheus8
- Structural Support & Biological Optimization — Sculptra and Radiesse
- Refinement — Botox, skin boosters, fillers and IPL

The treatment groups have no prescribed order. Each story has large visuals, short talking points, touch/button/keyboard navigation, and an enlargeable original reference sheet. Finish returns to the library. Quick Consult favorites persist on the device.

No patient fields, records, uploaded photographs, recommendations engine, analytics, external fonts, accounts or database. Only favorite story IDs are stored in localStorage. Illustrations and application files are cached for offline use. Source links open externally when online. The app is public unless hosting-level access controls are configured.

## Run locally

Requires Node.js 20 or newer. No dependencies or install step.

```
npm start
```

Open http://127.0.0.1:4173. Change the port with `PORT=4176 npm start` if needed. The service worker is disabled on localhost/127.0.0.1 to keep development changes visible.

```
npm test
```

## Deploy

See DEPLOY-VERCEL.md. Deploy as its own project and origin, ideally consult.liftmedicalesthetics.com. Existing LFAS files remain untouched.

## Home Screen / offline

Open the deployed HTTPS site in iPad Safari. Wait for Available offline in the library footer. Share → Add to Home Screen. Verify an offline relaunch on your actual iPad before relying on it in a consultation. Browser storage can be cleared by the device.

## Future edits

Story copy lives in public/content.js. Illustrations live in public/assets. Existing PNGs are framed in SVG viewports; original reference sheets remain unchanged. Styling lives in public/styles.css. There is no framework/build pipeline.

For any deployment that changes app files or assets, increment the CACHE name in public/sw.js. The waiting worker takes over after existing tabs/windows close, so an active story is not interrupted. Reopen online, close all Consult windows once the update downloads, then reopen. Favorites persist across updates.

## Editorial scope

This is brief visual education supporting a clinician's assessment and procedure-specific discussion, not a consent document or a treatment algorithm. It contains no doses, injection sites, preset combinations, promised outcomes, or treatment schedules. Conceptual illustrations are not results photographs or anatomical procedure maps. The clinic should review wording before patient use, particularly product-dependent or jurisdiction-specific claims. Sources are in CONTENT-SOURCES.md and the app's About panel.
