# 🎓 AI Study Planner

**[🌐 Live Demo (task-planner-tau.vercel.app)](https://task-planner-tau.vercel.app)** &nbsp;|&nbsp; Deployling & About

> **Your intelligent companion for academic success.** 🚀  
> An advanced study management platform powered by AI, designed to optimize productivity, enhance focus, and gamify the learning experience. Built for the modern student.

## 📸 Sneak Peek
<div align="center">
  <!-- TODO: Upload your actual screenshot to your repo or drag-and-drop it here in GitHub -->
  <img src="https://placehold.co/800x450/1a1a1a/ffffff?text=Your+Dashboard+Screenshot+Here+.png|.gif" alt="Dashboard Preview" width="800" />
  <p><em>(Replace the placeholder above with your actual screenshot or GIF)</em></p>
</div>

## 🛠️ Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

---

### 💡 Note on Technical Stack (Portfolio Context)
While my CV mentions **FastAPI**, **WebSockets**, and direct **PostgreSQL** under building similar realtime logic, this specific showcase project leverages **Supabase** to handle those exact backend responsibilities. Supabase provides the direct PostgreSQL database under the hood, uses its Realtime engine (built on WebSockets) for live syncing, and Edge Functions (Deno) replacing a traditional FastAPI layer to ensure faster prototyping and serverless deployment. This architecture demonstrates my ability to adapt to modern Backend-as-a-Service (BaaS) ecosystems while retaining the core principles of database design, realtime events, and AI integration.

---

[🇺🇿 O'zbek tilida qo'llanma](./docs/USER_GUIDE_UZ.md) | [📖 Documentation](./docs/)

---

## ✨ Asosiy Funksiyalar

### 🧠 AI-Quvvatli Xususiyatlar
- **📚 O'quv Rejasi Generatori**: Imtihon sanasi va mavzuni kiriting - AI kunlik jadval tuzadi
- **🎯 Aqlli Manbalar**: Mavzular uchun eng yaxshi video va maqolalarni avtomatik topadi
- **🃏 Flashcard Generator**: Bir kalit so'zdan Anki-uslubidagi kartochkalar yaratadi
- **💡 AI Insights**: O'quv jarayonini tahlil qiladi va tavsiyalar beradi

### 🎮 Gamifikatsiya
- **⭐ XP va Daraja Tizimi**: Har bir vazifa, fokus sessiyasi va flashcard uchun XP oling
- **🔥 Streaklar**: Kunlik faollikni davom ettiring va motivatsiyani saqlang
- **🏆 Yutuqlar**: Maxsus yutuqlarga erishing
- **📊 Taraqqiyot Kuzatuvi**: Vizual statistika va grafiklar

### ⚡ Fokus va Chuqur Ish
- **⏱️ Pomodoro Timer**: Sozlanuvchi fokus/tanaffus intervallari
- **🎵 Ambient Tovushlar**: O'rnatilgan audio player (Yomg'ir, O'rmon, Kafe)
- **😊 Kayfiyat Kuzatuvi**: Sessiyalar oldidan va keyin kayfiyatni qayd eting
- **🌍 Global Audio**: Barcha sahifalarda musiqa va ringtone

### 🛠 Asosiy Vositalar
- **📋 Kanban Board**: Drag-and-drop vazifalar boshqaruvi
- **📅 Interaktiv Kalendar**: To'liq oy/hafta/kun ko'rinishlari
- **📝 Markdown Eslatmalar**: Fanlarga bog'langan boy matn yozish
- **🔄 Spaced Repetition (SRS)**: SM-2 algoritmi asosidagi flashcard tizimi
- **👥 Hamjamiyat**: Real-time o'quv xonalari (Jitsi Meet integratsiyasi)

### 🔒 Xavfsizlik va Saqlash
- **☁️ Supabase Backend**: Barcha ma'lumotlar bulutda xavfsiz saqlanadi
- **🔐 Row Level Security**: Har bir foydalanuvchi faqat o'z ma'lumotlarini ko'radi
- **🔄 Real-time Sync**: Bir necha qurilmada sinxronlash
- **💾 Offline Support**: LocalStorage orqali offline ishlash

### 📱 Telegram Bot Integratsiyasi
- **🔗 Account Linking**: Telegram akkauntni web app bilan bog'lash
- **🔔 Smart Notifications**: Ertalabki va kechki kun xabarnomalar (Schedule: 9 AM / 8 PM)
- **⏰ Deadline Reminders**: Imtihon va vazifa deadline eslatmalari (24h & 1h oldin)
- **⚙️ Sozlanadigan Vaqtlar**: Xabarnoma vaqtlarini konfiguratsiya qilish
- **🤖 Bot Commands**: `/start`, `/help` buyruqlari (Task management - kelgusida)

---

## 🚀 Texnologiyalar

### Frontend
- **React.js** (v18) - UI kutubxonasi
- **TypeScript** - Type safety
- **Vite** - Tez build tool
- **Tailwind CSS** - Styling
- **Lucide Icons** - Ikonlar

### Backend & Database
- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication
  - Row Level Security (RLS)
  - **Edge Functions** - Telegram Bot webhook handler

### AI & Integrations
- **Google Generative AI SDK** (Gemini 2.0 Flash)
- **Jitsi Meet** - Video conferencing
- **React Big Calendar** - Kalendar
- **Recharts** - Grafiklar

### Testing & Quality
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **ESLint** - Code quality

---

## 📦 O'rnatish to Local Setup (Quick Start)

### Option A: Standard Setup (Web Version)

**1. Repository ni Clone qiling**
```bash
git clone https://github.com/yourusername/study-planner-ai.git
cd study-planner-ai
```

**2. Dependencies ni o'rnating**
```bash
npm install
```

**3. Environment Variables ni sozlang**
`.env.example` faylidan nusxa olib, `.env` faylini yarating:
```bash
cp .env.example .env
```
Keyin `.env` faylini o'zingizning API kalitlaringiz bilan to'ldiring.

**4. Database Schema ni o'rnating**
Supabase SQL Editor da `database_schema_fixed.sql` faylini ishga tushiring.

**5. Ishga tushirish**
```bash
npm run dev
```

### Option B: Local Offline Setup (Docker + Ollama/Gemini)
Loyihani to'liq local va offline ishlatish uchun:

**1. Docker va Ollama ni o'rnating**
- Docker Desktop
- [Ollama](https://ollama.ai/) (Local AI xususiyatlari uchun)

**2. Modellarni yuklab oling**
```bash
ollama run llama3.2  # Yoki qwen2.5-coder kabi boshqa model
```

**3. Docker yordamida ishga tushiring (Tez orada)**
```bash
# Agar root da docker-compose.yml mavjud bo'lsa
docker-compose up -d --build
```
*Eslatma: Docker orqali ishga tushirishda backend servislari ajratilgan bo'lishi talab etiladi.*

---

## 🏗️ Build va Deploy

### Production Build
```bash
npm run build
```

Build fayllari `dist/` papkasida bo'ladi.

### Preview
```bash
npm run preview
```

---

## 🧪 Testing

### Barcha testlarni ishga tushirish
```bash
npm test
```

### Test Coverage
```bash
npm run test:coverage
```

---

## 📁 Loyiha Strukturasi

```
study-planner-ai/
├── src/
│   ├── components/          # React komponentlar
│   │   ├── ui/             # UI primitives (Button, Card, etc.)
│   │   └── ...             # Feature komponentlar
│   ├── pages/              # Sahifa komponentlari
│   ├── context/            # React Context (Global state)
│   ├── utils/              # Utility funksiyalar
│   │   ├── ai.ts          # AI integration
│   │   └── analytics.ts   # Analytics
│   ├── types/              # TypeScript types
│   └── lib/                # External libraries config
│       └── supabase.ts    # Supabase client
├── public/                 # Static assets
├── database_schema_fixed.sql  # Database schema
└── docs/                   # Documentation
```

---

## 🎯 Performance Optimizations

- ✅ **Lazy Loading**: Barcha sahifalar lazy load qilinadi
- ✅ **Code Splitting**: Bundle 5 ta chunk ga bo'lingan
  - `vendor.js` (165 KB) - React, Router
  - `supabase.js` (171 KB) - Supabase client
  - `ui.js` (643 KB) - UI libraries
  - `ai.js` (28 KB) - Gemini AI
- ✅ **Error Boundaries**: Global error handling
- ✅ **Optimized Images**: WebP format

---

## 🛡️ Xavfsizlik

- ✅ Row Level Security (RLS) Supabase da
- ✅ API keys `.env` da (git ignore)
- ✅ User authentication (Supabase Auth)
- ✅ HTTPS only (production)

---

## 🤝 Hissa Qo'shish

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. Commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

---

## 📝 License

MIT License - [LICENSE](LICENSE) faylini ko'ring

---

## 🙏 Minnatdorchilik

- [Google Gemini AI](https://ai.google.dev/)
- [Supabase](https://supabase.com/)
- [Jitsi Meet](https://jitsi.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📞 Aloqa

Savollar yoki takliflar uchun issue oching yoki Pull Request yuboring!

---

**O'zbek tilida to'liq qo'llanma:** [USER_GUIDE_UZ.md](./docs/USER_GUIDE_UZ.md)

