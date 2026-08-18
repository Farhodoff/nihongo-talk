# 🚀 Study Planner & AI Mastery Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Auth-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)

A comprehensive, full-stack learning management, language coaching, and productivity application. Built to empower students preparing for **IELTS (Band 5.0 - 9.0)** and **JLPT (N5 - N1 / 0-Level Beginners)** with AI-driven study planning, Anki SM-2 spaced repetition, real-time audio coaching, and collaborative whiteboards.

---

## 🇺🇿 O'zbekcha Qisqacha Sharh (Uzbek Summary)

**Study Planner** — O'quvchilar va mutaxassislarga IELTS va Yapon tili (JLPT) imtihonlariga noldan boshlab tayyorlanishda yordam beradigan eng zamonaviy platforma.

### ✨ Asosiy Imkoniyatlar:
- 🎓 **IELTS & JLPT Hub:** 1 yoshdan 12 oygacha bo'lgan dars rejasi kalkulyatori va **`0 Level (Noldan)`** boshlovchilar rejimi.
- ⚡ **Anki SM-2 Fleshkartalar:** 1,646 ta A1-A2, 1,201 ta B1-B2 va 388+ C1-C2 so'zlarini 1 soniyada yuklaydigan super-tezkor bulk batch tizimi.
- 🎙️ **AI Speaking & Voice Coach:** Ovozli muloqot, real-vaqtda talaffuz xatolarini tuzatish (IELTS Examiner, Strict Roast, Sabrli Tutor va IT Intervyu personalari).
- 📦 **Dynamic JSON Chunking:** JS bundle hajmini 1MB dan 1.6KB gacha tushirgan dynamic `import()` arxitekturasi.
- 🎨 **Interaktiv O'quv Xonasi:** P2P video muloqot, WebRTC va `tldraw` yordamida real-vaqtdagi umumiy doska (Whiteboard).

---

## 🇯🇵 日本語の概要 (Japanese Overview)

「Study Planner」は、IELTS・JLPT（N5〜N1・初学者0レベル）の合格を目指す学習者のためのフルスタック学習管理・AIコーチングプラットフォームです。

- **AI会話コーチ (Voice AI Coach):** 音声認識とAIを活用した日本語・英語のリアルタイム面接・会話シミュレーター。
- **SM-2暗記カードシステム (Anki Flashcards):** 3,000語以上の語彙を瞬時にロードする超高速バルクバッチインポート機能。
- **リアルタイム学習ルーム (Study Room):** WebRTCビデオ通話および `tldraw` 共有ホワイトボード。

---

## ✨ Key Features

### 🎓 1. IELTS & JLPT Smart Onboarding & Calculator
- **Dynamic 1-12 Month Slider:** Interactive plan duration selector with quick preset pills (`1 Oy`, `2 Oy`, `3 Oy`, `4 Oy ⭐`, `6 Oy`, `12 Oy`).
- **Complete Beginner Support:** **`🌱 0 Level (Noldan)`** mode tailored for users starting Japanese or English from scratch.
- **Feasibility Engine:** Real-time calculation of required daily study hours based on CEFR & JLPT target hours.

### ⚡ 2. Anki SM-2 Spaced Repetition & High-Performance Deck Library
- **Pre-Loaded Standard Preset Decks:**
  - 🌱 **A1-A2 Starter Vocabulary:** 1,646 flashcards
  - 📈 **B1-B2 Pre-IELTS Academic Vocab:** 1,201 flashcards
  - 📙 **C1-C2 Master IELTS Collocations:** 388+ flashcards
- **Supercharged Batch Import:** `addFlashcardsBatch` chunked at 200 items/query, saving 1,600+ cards in < 1 second.
- **1-Click Card Population:** Instant "To'plam Kartochkalarini Yuklash" action button directly on deck cards.

### 🎙️ 3. Real-Time AI Speaking & Voice Coach
- **Multi-Persona AI Examiners:**
  - 🌶️ *Strict Roast Coach* (harsh feedback)
  - 🌿 *Sabrli Tutor* (gentle explanation)
  - 🎓 *IELTS Examiner* (standard band 9 score assessment)
  - 💼 *Tech Interviewer* (IT job interview prep)
  - ✈️ *Travel & Airport* & ☕ *Casual Friend*
- **Speech Tech:** Powered by Web Speech API, OpenAI TTS, and Live Ambient Sphere audio visualization.

### 👥 4. Real-Time Collaboration & Whiteboard (Study Room)
- **WebRTC P2P Video/Audio:** Multi-user study rooms with screen sharing.
- **Synchronized Whiteboard:** Integrated `tldraw` infinite canvas canvas for collaborative mind mapping.
- **Shared Pomodoro:** Group focus timer with synchronous state.

---

## 🛠️ Technology Stack & Performance

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18 (Vite), TypeScript (Strict), Tailwind CSS, Framer Motion, Lucide Icons |
| **Backend & Auth** | Supabase (PostgreSQL, Row Level Security, Realtime Channels) |
| **AI Core** | OpenAI GPT-4o / DeepSeek API / Gemini 2.0 Flash, OpenAI TTS Engine |
| **State & Routing** | React Context API, React Router v6, PWA Service Worker (VitePWA) |
| **Performance** | Dynamic `import()` deck JSON chunking, Lazy-loaded page routes |

---

## 📂 Project File Structure

```
study_planner/
├── .github/              # Issue templates, PR workflows & CI configs
├── api/                  # Serverless API routes (DeepSeek CORS proxy, streaming)
├── app/                  # Application runtime entry & core wrappers
├── books/                # Academic curriculum source PDFs (Oxford 3000, Cambridge)
├── constants/            # Global constants, room configs, & study constants
├── docs/                 # Security, encryption & architectural documentations
├── hooks/                # Custom React hooks (useFocusTimer, useSubscription, useFlashcards)
├── public/               # Static assets, PWA icons & manifest.webmanifest
├── scripts/              # Python & Node automation scripts (PDF parsing, dynamic JSON splitting)
├── src/                  # Main Frontend Source Code
│   ├── components/       # UI Components (decks, speaking, jlpt, ielts, whiteboard, pwa)
│   ├── context/          # React Context State Providers (StudyPlannerContext, FocusTimerContext)
│   ├── data/             # Preset Decks & Curriculum (decks/starter.json, academic.json, c1_c2.json)
│   ├── hooks/            # Dedicated UI & data fetching hooks
│   ├── i18n/             # Multi-language translation dictionaries (Uzbek, English, Japanese)
│   ├── pages/            # 27+ Lazy-loaded Page views (IeltsHub, JlptHub, SpeakingCoach, Decks)
│   ├── services/         # Supabase & Export/Import Data Services
│   ├── types/            # TypeScript Interface & Type Definitions
│   └── utils/            # SM-2 Spaced Repetition engine, AI helpers, IELTS & JLPT Calculators
├── supabase/             # PostgreSQL database migrations, RLS policies & SQL schema
├── .env.example          # Environment variables template
├── components.json       # Shadcn UI configuration
├── tailwind.config.js    # Custom Tailwind styling & design system config
├── tsconfig.json         # Strict TypeScript compiler options
├── vercel.json           # Vercel deployment & rewrite rules
└── vite.config.ts        # Vite build, PWA SW & Code-splitting configuration
```

---

## ⚙️ Architecture Optimizations

```
src/data/presetDecks.ts (1.68 KB lightweight loader)
   ├── dynamic import() ──> src/data/decks/starter.json (1,646 cards)
   ├── dynamic import() ──> src/data/decks/academic.json (1,201 cards)
   └── dynamic import() ──> src/data/decks/c1_c2.json (388+ cards)
```

- **Dynamic JSON Chunking:** Reduced main JavaScript bundle size by **99.5%** for preset deck definitions by isolating raw cards into dynamic JSON chunks.
- **Sub-Component Refactoring:** Extracted modular widgets (`PersonaSelector`, `AudioVisualizer`, `SessionReportModal`) to optimize memory footprint and React re-renders.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Farhodoff/study_planner.git
cd study_planner
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the project root:
```env
# Frontend Client (Public Anon Key)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Backend Serverless Environment Variables (Never use VITE_ prefix for secrets!)
DEEPSEEK_API_KEY=your_deepseek_api_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
SERVICE_ROLE=your_supabase_service_role_key
```

### 4. Run development server
```bash
npm run dev
```

### 5. Typecheck & Production Build
```bash
npm run typecheck && npm run build
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
