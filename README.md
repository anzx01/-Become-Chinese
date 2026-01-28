# Become Chinese 🇨🇳

A comprehensive cultural onboarding web application that teaches foreigners how to live, work, and thrive in China like a local.

## 🎯 Project Overview

An immersive, educational web experience guiding users through 13 detailed modules covering everything from chopstick etiquette to business culture. Designed to be practical, honest, and actionable—no fluff, just real advice for real life in China.

## ✨ Features

- **No Authentication Required** - Start learning immediately
- **13 Comprehensive Modules** - 65+ detailed lessons with step-by-step guidance
- **Progress Tracking** - LocalStorage-based progress system
- **Beautiful Landing Page** - Modern UI with image showcases and testimonials
- **Mobile Responsive** - Optimized for all devices
- **Practical Content** - Real-world advice from locals, expats, and immigrants

## 📚 Learning Modules

1. **Food** - Chopstick etiquette, ordering strategies, dining rules
2. **Street Food** - Finding good stalls, payment methods, safety tips
3. **Living** - Apartment hunting, utilities, phone setup, essential apps
4. **Healthcare** - Hospital navigation, registration system, insurance
5. **Transport** - Metro mastery, Didi, bike-sharing, rush hour survival
6. **Clothing** - Taobao shopping, sizing, dress codes, weather gear
7. **Language** - Survival phrases, numbers, tones, translation apps
8. **Money** - WeChat Pay, Alipay, QR codes, red envelopes
9. **Work** - 996 culture, hierarchy, face (面子), guanxi (关系)
10. **Social** - WeChat etiquette, group activities, gift-giving, KTV
11. **Dating** - Family approval, marriage pressure, dating apps
12. **Festivals** - Spring Festival, mooncakes, red envelopes
13. **Mindset** - Collectivism, pragmatism, indirect communication

## 🛠 Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (Radix UI)
- **Database**: Supabase (PostgreSQL)
- **ORM**: Drizzle
- **State Management**: LocalStorage + React State

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bcse
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   DATABASE_URL=your_database_url
   ```

4. Run the development server:
   ```bash
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## 📖 User Journey

1. **Landing Page** (`/`) - Hero section with image showcases and testimonials
2. **Onboarding** (`/onboarding`) - Choose motivation (Work, Study, Love, Adventure)
3. **City Selection** (`/city`) - Pick your base city in China
4. **Dashboard** (`/dashboard`) - View progress and skill levels
5. **Learning Modules** (`/modules/*`) - 13 detailed content modules
6. **Status Page** (`/status`) - Achievement celebration

## 🎨 Design System

- **Primary Color**: Chinese Red (#DC2626)
- **Typography**: System font stack (Inter fallback)
- **Border Radius**: 12-24px (rounded, friendly)
- **Animations**: Fade-in, scale, staggered delays
- **Tone**: Practical, honest, slightly irreverent

## 📜 Development Scripts

```bash
pnpm run dev      # Start development server (localhost:3000)
pnpm run build    # Build for production
pnpm run start    # Start production server
pnpm run lint     # Run ESLint
pnpm db:generate  # Generate Drizzle migrations
pnpm db:push      # Push schema to database
pnpm db:studio    # Open Drizzle Studio
```

## 📁 Project Structure

```
bcse/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main layout group
│   │   ├── page.tsx       # Landing page
│   │   ├── onboarding/    # Onboarding flow
│   │   ├── city/          # City selection
│   │   ├── dashboard/     # User dashboard
│   │   └── modules/       # Learning modules
│   └── status/            # Achievement page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── become-chinese/   # Custom components
├── lib/                  # Utilities and content
│   ├── content/         # Module content data
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   └── images/         # Landing page images
└── README.md           # This file
```

## 🌟 Key Features

### Structured Lesson Format

Each module contains 5 detailed lessons with:
- **Title**: Clear topic statement
- **Content**: 2-4 paragraphs of practical explanation
- **Steps**: Optional step-by-step instructions
- **Tips**: Optional pro tips and warnings

### Landing Page Enhancements

- Cherry blossoms image section (cultural beauty)
- Shanghai skyline section (modern urban life)
- Testimonials from real users
- Animated hero section with gradient backgrounds
- Responsive grid layouts

### Progress Tracking

- LocalStorage-based persistence
- Module completion tracking
- Skill level visualization
- No login required

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

---

**Built with ❤️ for curious explorers ready to understand China beyond the surface.**

*"Not just visiting China. Not just living in China. Actually understanding how Chinese people eat, live, move, think, and survive — in real life."*
