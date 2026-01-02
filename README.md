# 🎓 AI Study Planner

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-cyan)
![Gemini AI](https://img.shields.io/badge/AI-Gemini%202.0-green)
![Supabase](https://img.shields.io/badge/Supabase-Enabled-green)

Zamonaviy talabalar uchun to'liq AI-quvvatli o'quv rejalashtirish veb-ilovasi. **Sun'iy intellekt**, **Gamifikatsiya**, **Real-time hamkorlik** va **Bulutli saqlash** bilan jihozlangan.

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

## 📦 O'rnatish

### 1. Repository ni Clone qiling
```bash
git clone https://github.com/yourusername/study-planner-ai.git
cd study-planner-ai
```

### 2. Dependencies ni o'rnating
```bash
npm install
```

### 3. Environment Variables ni sozlang

`.env` faylini yarating:

```env
# Gemini AI API Key
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**API Keys olish:**
- **Gemini AI**: [Google AI Studio](https://makersuite.google.com/app/apikey)
- **Supabase**: [Supabase Dashboard](https://supabase.com/dashboard)

### 4. Database Schema ni o'rnating

Supabase SQL Editor da `database_schema_fixed.sql` faylini ishga tushiring:

```bash
# Supabase Dashboard -> SQL Editor -> New Query
# database_schema_fixed.sql ni copy-paste qiling va Run bosing
```

### 5. Development Server ni ishga tushiring
```bash
npm run dev
```

Brauzerda `http://localhost:5173` ni oching.

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

*Zamonaviy talaba uchun ❤️ bilan qurilgan.*
