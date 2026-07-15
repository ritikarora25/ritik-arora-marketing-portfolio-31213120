## Changes

1. **Remove CountUp animation**
   - Delete `src/components/CountUp.tsx`
   - Replace `<CountUp value="X" className="..." />` with plain `<span className="...">X</span>` in:
     - `src/components/PortfolioAchievements.tsx` (5 stats)
     - `src/components/experience/ApnaKlubCard.tsx` (3 stats)
     - `src/components/experience/Cars24Card.tsx` (3 stats)
     - `src/components/experience/KiranaBazaarCard.tsx` (stats)
     - `src/components/experience/StupaSportCard.tsx` (3 stats)
   - Remove the `CountUp` import from each file.

2. **Contrast fix in `src/index.css`**
   - Change `--muted-foreground: 0 0% 45%;` → `0 0% 38%;` in both `:root` and `.dark` blocks.

3. **Lazy-load images**
   - Add `loading="lazy"` to every `<img>` in the codebase **except** the hero image in `src/components/PortfolioHero.tsx`.
   - Scan targets: all 4 experience cards (logos), plus any other `<img>` in `src/` (e.g. About, Education, Skills, CaseStudyCard, companyLogos usage).

4. **Tailwind color tokens in `tailwind.config.ts`**
   - Replace:
     - `primary.DEFAULT: '#2B2E83'` → `'hsl(var(--primary))'`
     - `primary.foreground: '#FFFFFF'` → `'hsl(var(--primary-foreground))'`
     - `secondary.DEFAULT: '#0A66C2'` → `'hsl(var(--secondary))'`
     - `secondary.foreground: '#FFFFFF'` → `'hsl(var(--secondary-foreground))'`
   - Colors continue to render identically since `index.css` defines the same values.

No layout, typography, or content changes.
