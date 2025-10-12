# Agent Guidelines for Tarot POC

## Build/Lint/Test Commands
- **Development**: `npm run dev` (runs Next.js dev server with turbopack)
- **Build**: `npm run build` (production build with turbopack)
- **Start**: `npm start` (production server)
- **Lint**: `npm run lint` (ESLint with Next.js core-web-vitals + TypeScript config)
- **Type Check**: `npx tsc --noEmit` (no dedicated npm script)
- **Tests**: No test framework configured yet

## Code Style Guidelines
- **Framework**: Next.js 15.5.4 with App Router, React 19.1.0, TypeScript strict mode enabled
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`, use utility classes exclusively
- **Imports**: Use `@/` path alias for src imports (e.g., `@/app/...`), group external before internal
- **Components**: Export default function components, use PascalCase for component names, use "use client" directive when needed
- **Types**: TypeScript strict mode enabled (`strict: true`, `noImplicitAny: true`, `strictNullChecks: true`), prefer `type` over `interface`
- **File Structure**: 
  - App Router in `src/app/` with routes as folders containing `page.tsx`
  - Components in `src/components/`
  - Type definitions in `src/types/`
  - Data (cards, spreads, questions) in `src/data/`
  - Utilities in `src/lib/`
  - Static assets (card images) in `public/assets/`
- **Naming**: camelCase for variables/functions, PascalCase for components/types, kebab-case for files and folders
- **Error Handling**: Leverage strict null checks, handle async errors with try-catch, client-side validation before API calls
- **Images**: Card images stored in `public/assets/mage/majorArcana/`, use proper path references starting with `/assets/`
- **CSS Variables**: Define in globals.css with `--` prefix, use `@theme inline` for Tailwind integration
- **Dark Mode**: Support via `prefers-color-scheme`, use `dark:` prefix for Tailwind utilities
- **API Routes**: Next.js Route Handlers in `src/app/api/` folders with `route.ts`, use NextResponse for responses
- **Client-Side Storage**: Use sessionStorage for temporary reading data (see `src/lib/reading-storage.ts`)

## Project-Specific Details
- **Theme**: Mage: The Ascension Tarot readings
- **Deck**: Currently implements Major Arcana only (22 cards) in `src/data/cards.ts`
- **Spreads**: Celtic Cross (10-card spread) implemented in `src/data/spreads.ts`
- **Reading Flow**: 
  1. Home page (`src/app/page.tsx`) - user selects question and spread
  2. API call to `/api/reading` generates random card draw with orientations
  3. Reading page (`src/app/reading/page.tsx`) displays cards in Celtic Cross layout
  4. Click cards to see detailed meanings (upright/reversed)
- **Card Orientations**: Random 50/50 upright/reversed assignment in `src/lib/tarot-utils.ts`
- **Key Components**:
  - `Select.tsx` - Custom select dropdown
  - `TarotCard.tsx` - Individual card display with click handler
  - `CelticCrossLayout.tsx` - 10-card Celtic Cross grid layout
  - `CardDetails.tsx` - Modal/overlay for card details
- **No Cursor rules, Copilot instructions, or test framework**
- **ESLint ignores**: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`