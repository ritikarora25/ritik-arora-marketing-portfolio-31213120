## Goal
Reduce bundle by removing dependencies and files with zero runtime/build usage. No visual, styling, or behavior changes.

## What the app actually uses

**App source imports** (`src/`):
- shadcn UI: `button`, `dialog`, `input`, `label`, `separator`, `sheet`, `skeleton`, `sonner`, `toast`, `toaster`, `toggle`, `tooltip`, `collapsible`
- Hooks: `use-toast`, `use-mobile`
- Libs: `react`, `react-dom`, `react-router-dom`, `react-helmet-async`, `@tanstack/react-query`, `lucide-react`, `sonner`, `next-themes` (via `ui/sonner`), `class-variance-authority`, `clsx`, `tailwind-merge`, `@supabase/supabase-js`
- Radix (via kept shadcn files + `App.tsx`): `react-slot`, `react-dialog`, `react-label`, `react-separator`, `react-toast`, `react-toggle`, `react-tooltip`, `react-collapsible`
- Tailwind plugins: `tailwindcss-animate` (in `tailwind.config.ts`)

## Files to delete (unused)

**Unused shadcn UI components** in `src/components/ui/`:
`accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, calendar, card, carousel, chart, checkbox, command, context-menu, drawer, dropdown-menu, form, hover-card, input-otp, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, sidebar, slider, switch, table, tabs, textarea, toggle-group`

**Unused project components**:
- `src/components/MetricCounter.tsx` (0 imports)
- `src/components/CaseStudyCard.tsx` (0 imports)

## Dependencies to remove

**Radix (their shadcn wrappers are being deleted, zero remaining imports)**:
`@radix-ui/react-accordion, react-alert-dialog, react-aspect-ratio, react-avatar, react-checkbox, react-context-menu, react-dropdown-menu, react-hover-card, react-menubar, react-navigation-menu, react-popover, react-progress, react-radio-group, react-scroll-area, react-select, react-slider, react-switch, react-tabs, react-toggle-group`

**Other unused libs**:
`@hookform/resolvers, cmdk, date-fns, embla-carousel-react, input-otp, react-day-picker, react-hook-form, react-resizable-panels, recharts, vaul, zod, @tailwindcss/typography`

## Dependencies kept (and why)

- `@radix-ui/react-slot` — used by `ui/button.tsx`
- `@radix-ui/react-dialog` — used by `ui/dialog.tsx` and `ui/sheet.tsx`
- `@radix-ui/react-label` — `ui/label.tsx`
- `@radix-ui/react-separator` — `ui/separator.tsx`
- `@radix-ui/react-toast` — `ui/toast.tsx`
- `@radix-ui/react-toggle` — `ui/toggle.tsx`
- `@radix-ui/react-tooltip` — `ui/tooltip.tsx` + `App.tsx`
- `@radix-ui/react-collapsible` — experience cards
- `sonner`, `next-themes` — `ui/sonner.tsx`
- `class-variance-authority`, `clsx`, `tailwind-merge` — button/toast variants + `lib/utils`
- `lucide-react` — icons across app
- `react-helmet-async`, `react-router-dom`, `@tanstack/react-query` — app runtime
- `@supabase/supabase-js` — `integrations/supabase/client`
- `tailwindcss-animate` — Tailwind config plugin
- All devDependencies (build toolchain)

## Steps

1. Delete unused UI component files and the two unused project components.
2. Run `bun remove` for all listed unused packages.
3. Run `bun run build` to verify success.
4. If build fails on any removal, restore that package/file and note it in the report.

## Report format at the end

- Removed dependencies (with reason each)
- Removed files
- Approximate installed-size / bundle-size reduction (from `bun remove` output + build stats before/after)
- Kept dependencies with justification

## Risk / uncertainty

Anything with even one indirect usage stays. If `bun run build` errors after any removal, revert that specific package immediately.
