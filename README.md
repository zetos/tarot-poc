# Mage: The Ascension Tarot - Next.js Reading App (POC)

A modern Next.js 15 web application for performing digital Tarot readings using the complete 78-card Mage: The Ascension deck. This proof-of-concept demonstrates interactive card spreads, dynamic orientations, and responsive design with TypeScript and Tailwind CSS.

---

## Features

- **Complete 78-Card Digital Deck**  
  Full implementation of the Mage: The Ascension Tarot including 22 Major Arcana and 56 Minor Arcana cards (Questing, Primordialism, Dynamism, Pattern suits).

- **Celtic Cross Spread**  
  Interactive 10-card Celtic Cross layout with position-specific interpretations.

- **Card Orientation System**  
  Randomized upright and reversed card assignments with distinct meanings for each orientation.

- **Interactive Card Gallery**  
  Browse all 78 cards with filtering by suit or arcana, featuring detailed card information and lore.

- **Session-Based Reading Storage**  
  Readings persist in browser session storage for seamless navigation between pages.

- **Responsive Dark Theme**  
  Custom dark mode design with CSS variables and Tailwind utilities, inspired by Mage lore aesthetics.

---

## Tech Stack

| Component          | Technology                              |
| ------------------ | --------------------------------------- |
| Framework          | [Next.js 15.5.4](https://nextjs.org/) (App Router) |
| Runtime            | React 19.1.0                            |
| Language           | TypeScript (strict mode)                |
| Styling            | [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS |
| Animations         | [Framer Motion](https://www.framer.com/motion/) |
| AI Framework       | [Mastra 0.24.8](https://mastra.ai) (optional) |
| Build Tool         | Turbopack                               |
| Package Manager    | pnpm                                    |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zetos/tarot-poc.git
cd tarot-poc
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Copy the example environment file and add your API keys:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your OpenAI API key:

```
OPENAI_API_KEY=your_actual_api_key_here
```

**Note**: The OpenAI API key is optional. It's only required if you want to use the AI-powered reading interpretations feature powered by [Mastra](https://mastra.ai). Without it, the app will still function for manual card readings.

Get your OpenAI API key from: https://platform.openai.com/api-keys

### 4. Run the development server

```bash
pnpm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
tarot-poc/
│
├── public/
│   ├── assets/mage/           # Card images organized by suit
│   │   ├── majorArcana/       # 22 Major Arcana cards
│   │   ├── questing/          # Fire (Wands) - 14 cards
│   │   ├── primordialism/     # Water (Cups) - 14 cards
│   │   ├── dynamism/          # Air (Swords) - 14 cards
│   │   └── pattern/           # Earth (Pentacles) - 14 cards
│   └── darkpack_logo1.png     # Dark Pack Agreement logo
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── page.tsx           # Home - question and spread selection
│   │   ├── reading/page.tsx   # Reading display with Celtic Cross layout
│   │   ├── cards/page.tsx     # Full 78-card gallery with filtering
│   │   ├── about/page.tsx     # Project description, lore, and legal info
│   │   └── api/reading/       # API route for reading generation
│   ├── components/            # Reusable React components
│   │   ├── TarotCard.tsx      # Individual card display
│   │   ├── CelticCrossLayout.tsx # 10-card spread layout
│   │   ├── CardDetails.tsx    # Card detail modal
│   │   └── Select.tsx         # Custom select component
│   ├── data/                  # Static data
│   │   ├── cards.ts           # All 78 cards with meanings
│   │   ├── spreads.ts         # Spread definitions and positions
│   │   └── questions.ts       # Preset reading questions
│   ├── lib/                   # Utility functions
│   │   ├── tarot-utils.ts     # Card drawing and orientation logic
│   │   └── reading-storage.ts # Session storage helpers
│   ├── types/                 # TypeScript type definitions
│   │   └── tarot.ts           # Card, Spread, Reading types
│   └── agents/                # (Future: AI integration)
│
└── README.md
```

---

## Pages Overview

- **Home** (`/`) - Select a question and spread type to begin a reading
- **Reading** (`/reading`) - View your Celtic Cross spread with interactive card reveals
- **Cards** (`/cards`) - Browse the complete 78-card deck with suit filtering and detailed descriptions
- **About** (`/about`) - Learn about the Mage Tarot, its symbolism, and legal information

---

## Development Commands

| Command | Description |
| ------- | ----------- |
| `pnpm run dev` | Start development server with Turbopack |
| `pnpm run build` | Create production build |
| `pnpm run start` | Run production server |
| `pnpm run lint` | Run ESLint validation |
| `npx tsc --noEmit` | TypeScript type checking |

---

## Key Implementation Details

- **Card Data**: All 78 cards defined in `src/data/cards.ts` with upright and reversed interpretations
- **Random Draw Logic**: 50/50 upright/reversed orientation assignment in `src/lib/tarot-utils.ts`
- **Session Persistence**: Reading data stored in sessionStorage (see `src/lib/reading-storage.ts`)
- **Spread System**: Celtic Cross positions and meanings defined in `src/data/spreads.ts`
- **AI Integration**: Optional AI-powered reading interpretations using Mastra (v0.24.8) framework with OpenAI's GPT model. Agent configured with "Granny Weatherwax" personality for insightful, no-nonsense readings (see `src/agents/tarotAgent.ts`)
- **Custom Typography**: Mage-themed fonts (Abbess, Visit, etc.) loaded from `src/app/fonts/`
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Image Optimization**: Next.js Image component for card assets with proper sizing

---

## Dark Pack Agreement & Attribution

<div align="center">
  <img src="public/darkpack_logo1.png" alt="Dark Pack Logo" width="100"/>
</div>

This application is created as a fan project in accordance with the **World of Darkness Dark Pack Agreement**. The Dark Pack program allows fans to create and share non-commercial content while respecting Paradox Interactive's intellectual property rights.

**Legal Notice:**

Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission. All rights reserved. For more information please visit [worldofdarkness.com](https://worldofdarkness.com).

This material is not official World of Darkness material. For the full Dark Pack Agreement, visit the [official page](https://www.paradoxinteractive.com/games/world-of-darkness/community/dark-pack-agreement).

For complete project description, Tarot symbolism, and lore details, see the [About page](/about) (`src/app/about/page.tsx`).

---

## Future Considerations

- Additional spread layouts (Three-Card, Horseshoe, Seven-Card, etc.)
- AI-assisted reading interpretations via LLM integration
- Reading history and export to PDF/shareable link
- User accounts and saved readings
- Custom spread designer
- Additional deck variants

---

## License

**Code Implementation**: MIT License

**Content & Artwork**: All Mage: The Ascension materials, card artwork, and related content remain the property of Paradox Interactive AB. Used with permission under the Dark Pack Agreement for non-commercial fan projects.

---

**Note**: This is a proof-of-concept project demonstrating modern web development techniques with Next.js 15, React 19, TypeScript, and [Mastra](https://mastra.ai) AI agent framework. It is not intended for commercial use or as a replacement for traditional Tarot decks.
