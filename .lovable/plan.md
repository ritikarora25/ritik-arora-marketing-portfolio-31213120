## 1. Bayt — hide from UI, keep in SEO metadata only

**`src/components/PortfolioHero.tsx`**
- Remove the Bayt `<a>` link (lines ~29-32).
- Remove `ExternalLink` from the `lucide-react` import (LinkedIn stays).

**`src/components/PortfolioContact.tsx`**
- Remove the Bayt `<span>` block (lines ~103-107).
- (After the form removal in step 2, this file will change more — see below.)

**`index.html`** — JSON-LD `sameAs` array
- Add `"https://people.bayt.com/ritikarora25"` alongside the existing Peerlist / GitHub / Medium / TheOrg entries. This is the same invisible "profile link" pattern the user referenced. Search engines and LLM crawlers will pick it up; nothing renders on the page.

## 2. Contact section — remove form, keep compact vertical contact list

Replace the current two-column layout (form + sidebar) in `src/components/PortfolioContact.tsx` with a single compact block:

- Drop the entire `<form>` (name / email / message / submit), all validation state, `useState`, `toast` import, and the `handleSubmit` / `validate` / `onChange` handlers.
- Drop the "Or reach out directly:" wrapper heading and the flex-row layout.
- Render a **vertical list** with three items only:
  - Email → `ritikchuchra1@gmail.com` (mailto:)
  - Phone → `+91-8685026736` (tel:)
  - LinkedIn → `/ritikarora25` (with `Linkedin` icon, opens in new tab)
- Each row: icon + label + value, stacked vertically (`flex flex-col gap-3`), left-aligned, tighter vertical padding on the section so it takes noticeably less space than today.
- Keep the section id `#contact` and the `<h2>Contact</h2>` heading so the nav anchor still works.
- Answers user Q2: today the form does nothing — it just shows a toast and discards input. Removing it is the cleanest fix and matches the "reduce space" request.

## 3. Verification

After changes:
- Confirm build passes (auto-run).
- Visually verify Hero no longer shows Bayt; Contact shows only email/phone/LinkedIn in a vertical stack; nav "Contact" link still jumps to the section.
- View page source to confirm Bayt URL is present in JSON-LD.

## Files touched
- `src/components/PortfolioHero.tsx` — remove Bayt link
- `src/components/PortfolioContact.tsx` — remove form + Bayt row, rebuild as vertical contact list
- `index.html` — add Bayt to JSON-LD `sameAs`

No changes to routes, styling tokens, fonts, or backend.
