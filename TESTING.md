# Validation · 22 September 2026

## Passed

- Five automated tests: story completeness and unique IDs; bounded/malformed deep links; stale/duplicate/empty favorites; reference-file existence; complete offline asset list.
- JavaScript syntax check.
- Browser: all eight modules and all 24 screens opened using visible controls. Finish returned to the library.
- All Stories displayed eight entries; Explore Treatment displayed three.
- Previous/Next navigation, reference dialog, enlargement and close worked.
- Favorite toggles updated correctly; a newly saved Tissue Burden favorite appeared after opening a fresh tab.
- Landscape iPad-sized reader visually inspected at 1194 × 834. No horizontal overflow observed at 1194, 834 and 390 pixels in checked views.
- Final story-page selectors measured 44 pixels wide; navigation and favorite controls are at least 44 pixels.
- Original images remain intact; framed illustrations checked visually after fixing viewport clipping.

## Still to check on the deployed iPad

- Physical swipe gestures and portrait/landscape rotation in Safari.
- Home-screen installation and offline relaunch after the library reports Available offline.
- Clinical wording and conceptual illustrations in an actual consultation.

PWA files and cache asset coverage are implemented and verified as present, but an offline browser/device session was not exercised. Local previews deliberately bypass service-worker installation so development changes remain visible. No live deployment was changed.
