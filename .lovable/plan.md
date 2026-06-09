## Plan: Add Google Analytics 4

### What to do
Insert the standard GA4 tracking snippet (`gtag.js`) into `index.html` inside the `<head>` section, just before the closing `</head>` tag.

### Measurement ID
`G-BT03QGN43K`

### Where it goes
`index.html`, inside `<head>`, after the existing JSON-LD schema script and before `</head>`.

### What the snippet looks like
Two tags: an async script load of `https://www.googletagmanager.com/gtag/js?id=G-BT03QGN43K`, followed by an inline script that calls `gtag('config', 'G-BT03QGN43K')`.

### No other changes
- No UI, styling, content, or functionality changes.
- No additional events or custom dimensions configured at this stage.