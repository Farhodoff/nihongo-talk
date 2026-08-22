# 📚 Task Planner - React Router Marshrutlari

## 🎯 Barcha Marshrutlar (Routes)

### Asosiy Marshrutlar

| Marshrut | Komponent | Tavsif |
|----------|-----------|--------|
| `/` | Navigate to `/dashboard` | Asosiy sahifa (Dashboard'ga yo'naltiradi) |
| `/dashboard` | DashboardPage | **YANGI!** Asosiy boshqaruv paneli |
| `/calendar` | CalendarPage | Kalendar ko'rinishi |
| `/settings` | SettingsPage | Sozlamalar sahifasi |

### Maqsadlar va Reja
| Marshrut | Komponent | Tavsif |
|----------|-----------|--------|
| `/personal-plan` | PersonalPlanPage | Shaxsiy AI o'quv rejasi va maqsadlar markazi |
| `/goals` | Navigate to `/personal-plan` | Canonical yo'naltirish |
| `/plan` | Navigate to `/personal-plan` | Canonical yo'naltirish |
| `/tasks` | TasksPage | Vazifalar boshqaruvi |
| `/subjects` | SubjectsPage | Fanlar ro'yxati |
| `/subjects/:id` | SubjectDetailPage | Fan tafsilotlari |

### O'qish va Fokus

| Marshrut | Komponent | Tavsif |
|----------|-----------|--------|
| `/focus` | FocusPage | Fokus/Pomodoro timer |
| `/notes` | NotesPage | Qaydlar ro'yxati |
| `/notes/:id` | NoteEditorPage | Qayd muharriri |
| `/flashcards` | DecksPage | Fleshkartalar |
| `/flashcards/new` | FlashcardForm | Yangi fleshkarta yaratish |
| `/flashcards/study/:subjectId` | StudyModePage | O'qish rejimi |

### Statistika va Jamoa

| Marshrut | Komponent | Tavsif |
|----------|-----------|--------|
| `/progress` | ProgressPage | Progress va statistika |
| `/community` | CommunityPage | Jamoa chat |
| `/room/:roomId` | StudyRoomPage | O'qish xonalari |

## 🚀 Qanday Ishlatish

### 1. Dashboard Sahifasiga Kirish

```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/dashboard');
```

### 2. Calendar Sahifasiga Kirish

```tsx
navigate('/calendar');
```

### 3. Settings Sahifasiga Kirish

```tsx
navigate('/settings');
```

### 4. Link Orqali O'tish

```tsx
import { Link } from 'react-router-dom';

<Link to="/dashboard">Dashboard</Link>
<Link to="/calendar">Kalendar</Link>
<Link to="/settings">Sozlamalar</Link>
```

## 📱 Sidebar Navigatsiya

Layout komponentida quyidagi navigatsiya elementlari mavjud:

1. **Dashboard** 🏠 - Asosiy boshqaruv paneli
2. **Maqsadlar** 🎯 - Maqsadlar ro'yxati
3. **Fanlar** 📚 - Fanlar ro'yxati
4. **Vazifalar** ✅ - Vazifalar boshqaruvi
5. **Kalendar** 📅 - Kalendar ko'rinishi
6. **Fokus** ⏰ - Fokus/Pomodoro
7. **Qaydlar** 📝 - Qaydlar
8. **Fleshkartalar** 🃏 - Fleshkartalar
9. **Jamoa** 👥 - Jamoa chat
10. **Statistika** 📊 - Progress
11. **Sozlamalar** ⚙️ - Sozlamalar

## 🔒 Himoyalangan Marshrutlar

Barcha marshrutlar faqat autentifikatsiya qilingan foydalanuvchilar uchun mavjud. Agar foydalanuvchi tizimga kirmagan bo'lsa, avtomatik ravishda `/auth` sahifasiga yo'naltiriladi.

## 🎨 Dashboard Sahifasi Xususiyatlari

Yangi yaratilgan Dashboard sahifasi quyidagilarni ko'rsatadi:

- ✅ **Bugungi vazifalar soni**
- 🎯 **Bu hafta bajarilgan vazifalar**
- ⏰ **Jami o'qish vaqti (bu hafta)**
- 🔥 **Kunlik seriya (streak)**
- 📋 **Yaqinlashib kelayotgan vazifalar**
- 📚 **So'nggi o'qish sessiyalari**
- 📊 **Haftalik progress**

## 🔄 Lazy Loading

Barcha sahifalar lazy loading orqali yuklanadi, bu esa:
- ⚡ Tezroq boshlang'ich yuklash
- 📦 Kichikroq bundle hajmi
- 🚀 Yaxshilangan ishlash

## 📝 Misol Kod

```tsx
// App.tsx
import { lazy } from 'react';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

// Routes
<Route path="/" element={<Layout />}>
  <Route index element={<Navigate to="/dashboard" replace />} />
  <Route path="dashboard" element={<DashboardPage />} />
  <Route path="calendar" element={<CalendarPage />} />
  <Route path="settings" element={<SettingsPage />} />
</Route>
```

## 🎯 Keyingi Qadamlar

1. ✅ Dashboard sahifasini test qiling
2. ✅ Calendar sahifasini tekshiring
3. ✅ Settings sahifasini sozlang
4. 📊 Supabase jadvallarini yarating (`supabase_tasks_sessions.sql`)
5. 🔄 Ma'lumotlarni yuklash va saqlash funksiyalarini qo'shing
