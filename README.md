# Become Chinese 🇨🇳

A fun, immersive web-based cultural onboarding experience that teaches foreigners how to live like a local in China.

## Project Overview

This is a playful, educational web application that guides users through 12+ modules covering everything from food and transport to social life and mindset. The experience is designed to be completed in 5-10 minutes with no login required.

## Features

- ✅ **No Authentication Required** - Jump right in
- ✅ **Progress Tracking** - LocalStorage-based progress system
- ✅ **15+ Routes** - Complete journey from landing to achievement
- ✅ **Playful Design** - Minimalist UI with Chinese red accent
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **12 Learning Modules** - Comprehensive cultural content

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **ORM**: Drizzle
- **State Management**: LocalStorage + React State

## Getting Started

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   DATABASE_URL=your_database_url
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## User Journey

1. **Landing Page** (`/`) - Hero with emotional hook
2. **Onboarding** (`/onboarding`) - Choose motivation (Work, Study, Love, Adventure)
3. **City Selection** (`/city`) - Pick your base city
4. **Dashboard** (`/dashboard`) - View progress and skill levels
5. **Learning Modules** - 12 content modules
6. **Status Page** (`/status`) - Achievement celebration

## Design System

- **Primary Color**: Chinese Red (#DC2626)
- **Typography**: Inter (system font)
- **Border Radius**: 12-24px (rounded, friendly)
- **Spacing**: Generous whitespace
- **Tone**: Playful, slightly irreverent, practical

## Development Scripts

```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run start    # Start production server
pnpm run lint     # Run ESLint
pnpm db:generate  # Generate Drizzle migrations
pnpm db:push      # Push schema to database
pnpm db:studio    # Open Drizzle Studio
```

## License

MIT

---

Built with ❤️ for curious explorers ready to dive deep into Chinese culture.
