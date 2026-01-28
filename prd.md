# Claude Code Requirements Document

## Project: Become Chinese 🇨🇳

This document is written **specifically for Claude Code** to generate a complete, runnable MVP web application.

---

## 1. Project Goal

Build a **fun, immersive, web-based onboarding experience** that teaches foreigners how to live like a Chinese person.

Core goal:

> Make users feel: “I don’t just know about China — I *get* China.”

This is  **not** :

* a government guide
* a serious immigration service
* a travel booking site

This  **is** :

* culture-as-a-game
* lifestyle onboarding
* curiosity-driven exploration

---

## 2. Target Users

Primary users:

* Foreigners curious about living in China
* Expats / digital nomads
* People dating or married to Chinese partners
* China-curious users tired of shallow explanations

User traits:

* English-speaking
* Comfortable with modern web apps
* Likes interactive, humorous content

---

## 3. Product Form

* Web application (desktop-first, mobile-friendly)
* No login required for MVP
* Linear + modular exploration
* Strong copy-driven experience

---

## 4. Core Experience Flow

1. Landing Page (emotional hook)
2. Onboarding (motivation selection)
3. City Selection
4. Survival Dashboard
5. Modular learning sections
6. Final “Become Chinese” status

Users should always feel:

* Progressing
* Slightly challenged
* Entertained

---

## 5. Information Architecture

Pages / Routes:

* /
* /onboarding
* /city
* /dashboard
* /food
* /street-food
* /living
* /transport
* /clothing
* /language
* /money
* /work
* /social
* /dating
* /festivals
* /mindset
* /status

---

## 6. Functional Requirements (MVP)

### 6.1 Navigation

* Top navigation OR progress bar
* Back / Next buttons
* Persistent progress indicator

### 6.2 Dashboard

* Display user skill levels:
  * Food
  * Living
  * Transport
  * Culture
* Levels can be static for MVP

### 6.3 Modules

Each module page:

* Title
* Intro paragraph
* Bullet-based lessons
* Fun fact / warning box
* CTA button

No video or audio required for MVP.

---

## 7. Content Requirements

* Use **exact English copy** provided in:
  "Web App English Copy – Become Chinese (MVP)"
* No rewriting or summarizing
* Preserve tone and formatting

---

## 8. Interaction Rules

* Buttons advance routes
* No backend logic required
* No authentication
* No user data persistence required

Optional:

* LocalStorage for progress

---

## 9. Visual Style Guidelines

Tone:

* Playful
* Minimalist
* Confident

UI preferences:

* Large typography
* Plenty of whitespace
* Card-based layouts

Colors:

* Neutral background
* Red used sparingly as accent

---

## 10. Technical Constraints

Preferred stack (Claude Code may choose):

* Next.js or React
* Tailwind CSS
* Client-side routing

Must:

* Be runnable locally
* Include README with setup instructions

---

## 11. Non-Goals (Explicit)

Do NOT implement:

* Payments
* Accounts
* CMS
* AI features
* Localization

---

## 12. Success Criteria (MVP)

The MVP is successful if:

* A user can complete the full journey in 5–10 minutes
* The app feels coherent and fun
* Pages load instantly
* Copy is the star

---

## 13. Claude Code Instructions

Claude Code should:

1. Generate project structure
2. Implement all routes
3. Insert provided copy verbatim
4. Apply basic styling
5. Ensure navigation works end-to-end

Claude Code should NOT:

* Over-engineer
* Add features not requested
* Change product tone

---

## 14. Deliverables

* Full source code
* README.md
* Clear instructions to run locally

---

End of Requirements Document
