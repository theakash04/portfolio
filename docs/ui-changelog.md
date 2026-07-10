# UI Changelog

## r9k4m — Portfolio Redesign (2026-07-11)

### Added
- Bento-grid layout system with responsive 1/2/3 column sections
- 3D wireframe canvas background with floating cubes and perspective grid
- Code window chrome cards with terminal-style dot headers
- Tree-style tech stack display (`├── folder/ [chips]`)
- Timeline experience section with accent dot/line
- Project filter pills (All / Full Stack / Core)
- Gradient cover cards for all 12 projects (unique gradients per project)
- Scroll-reveal animations via IntersectionObserver
- Quote section with dashed border and corner dots
- Custom scrollbar and selection color theming
- Centralized data layer (`src/data/`) for all editable content
- JetBrains Mono font for mono/eyebrow elements
- `ink` (950–600) and `accent` (50–600, #FF6B35 orange) color scales

### Modified
- `tailwind.config.ts` — replaced old CSS variable colors with ink/accent scales
- `globals.css` — complete rewrite with new design system
- `layout.tsx` — added JetBrains Mono font, updated metadata
- `page.tsx` — rewritten as bento grid composition, removed Now section, re-aligned AboutCard full-width
- `zapme/page.tsx` — completely redesigned with background wireframe canvas, terminal headers, back button (`cd ..`), and accent color themes
- `Footer.tsx` — simplified, integrated old ReachOut contact info
- `StatsCard.tsx`, `StackCard.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx` — renumbered eyebrow labels sequentially (02 to 05) following the removal of Now section (02)

### Removed
- `motion` (Framer Motion) dependency — animations now CSS-only
- `react-icons` dependency — replaced with inline SVGs
- `@heroicons/react` dependency — unused
- `EnterAnim.tsx` — replaced by `RevealSection.tsx`
- `MainSection.tsx` — composition moved to `page.tsx`
- `AnnouncementBanner.tsx` — unused (was commented out)
- `Quote.tsx` — replaced by `QuoteSection.tsx`
- `HeroSection/` directory (About, ProfileCard, ReachOut)
- `Experience/page.tsx` — replaced by `ExperienceSection.tsx` + `data/experience.ts`
- `project/` directory (MainProjectSection, ProjectCard, ProjectContent)
- `skills/` directory (Skills, skillContent) — merged into `StackCard.tsx` + `data/stack.ts`
- `tabs/`, `sections/` — empty directories
- `now.ts`, `NowCard.tsx` — Now section removed per request

### Reason
Full redesign to match the reference design in `docs/index.html`, adopting a bento-grid layout with a cohesive dark theme, modular components, and centralized data files.
