# Agent Guidelines for Tarot POC

## Build/Lint/Test Commands
- **Development**: `npm run dev` (runs Next.js dev server with turbopack)
- **Build**: `npm run build` (production build with turbopack)
- **Start**: `npm start` (production server)
- **Lint**: `npm run lint` (ESLint with Next.js core-web-vitals + TypeScript config)
- **Type Check**: `npx tsc --noEmit` (no dedicated npm script)
- **Tests**: No test framework configured yet

## Code Style Guidelines
- **Framework**: Next.js 15 with App Router, React 19, TypeScript strict mode enabled
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`, use utility classes exclusively
- **Imports**: Use `@/` path alias for src imports (e.g., `@/app/...`), group external before internal
- **Components**: Export default function components, use PascalCase for component names
- **Types**: TypeScript strict mode, prefer `type` over `interface`, use `Readonly<>` for props with children
- **File Structure**: App Router in `src/app/`, routes as folders with `page.tsx`, shared assets in `src/assets/`
- **Naming**: camelCase for variables/functions, PascalCase for components/types, kebab-case for files
- **Error Handling**: Leverage strict null checks, handle async errors, use Error boundaries for React errors
- **Metadata**: Export `metadata` object (type `Metadata`) from pages for SEO
- **Images**: Store in `src/assets/`, use Next.js `<Image>` with width/height/alt/priority props
- **CSS Variables**: Define in globals.css with `--` prefix, use `@theme inline` for Tailwind integration
- **Dark Mode**: Support via `prefers-color-scheme`, use `dark:` prefix for Tailwind utilities
- **Fonts**: Geist Sans/Mono from `next/font/google`, expose as CSS variables

## Project-Specific Notes
- No Cursor rules, Copilot instructions, or existing test framework
- ESLint ignores: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`