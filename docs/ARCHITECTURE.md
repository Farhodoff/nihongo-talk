# 📐 AI Study Planner - Architecture & System Design

> System Architecture, Data Flow, va Component Diagrams

---

## 🏗️ OVERALL SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                     USERS (CLIENTS)                         │
│  - Web Browser (React App)                                  │
│  - Mobile (Responsive)                                      │
│  - Telegram Bot                                             │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┴────────────────┐
        │                                  │
        ▼                                  ▼
┌──────────────────┐            ┌──────────────────┐
│  VERCEL (CDN)    │            │ TELEGRAM SERVERS │
│  - React App     │            │ (Messaging API)  │
│  - Static Files  │            └──────────────────┘
│  - Edge Caching  │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│                    SUPABASE (Backend)                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Authentication (Supabase Auth)                         │ │
│  │ - JWT token management                                │ │
│  │ - Email/Password auth                                 │ │
│  │ - Session management                                  │ │
│  └────────────────────────────────────────────────────────┘ │
│                         │                                    │
│  ┌──────────────────────▼────────────────────────────────┐ │
│  │ PostgreSQL Database (RLS Policies)                    │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │ Tables:                                              │ │
│  │ • auth.users (managed by Supabase)                   │ │
│  │ • users_profiles (id, username, level, xp, streak) │ │
│  │ • subjects (id, user_id, title, description)        │ │
│  │ • tasks (id, user_id, title, status, priority)      │ │
│  │ • flashcards (id, question, answer, user_id)        │ │
│  │ • flashcard_decks (id, user_id, subject_id)         │ │
│  │ • study_sessions (id, user_id, duration, xp_earned)│ │
│  │ • notes (id, user_id, content, markdown)            │ │
│  │ • gamification (id, user_id, level, xp, streak)    │ │
│  │ • telegram_users (telegram_id, user_id, chat_id)   │ │
│  │ • study_rooms (id, creator_id, members, jitsi_url) │ │
│  └──────────────────────────────────────────────────────┘ │
│                         │                                    │
│  ┌──────────────────────▼────────────────────────────────┐ │
│  │ Real-time Subscriptions (WebSocket)                  │ │
│  │ - Channels: tasks:*, flashcards:*, notifications:*  │ │
│  │ - Events: INSERT, UPDATE, DELETE                    │ │
│  │ - Latency: ~50-100ms broadcast                      │ │
│  └──────────────────────────────────────────────────────┘ │
│                         │                                    │
│  ┌──────────────────────▼────────────────────────────────┐ │
│  │ Edge Functions (Serverless)                          │ │
│  │ - POST /telegram: Webhook handler                   │ │
│  │ - GET /generate-plan: AI integration                │ │
│  │ - POST /send-reminders: Scheduled notifications    │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
         │
    ┌────┴────────┬──────────────────┬─────────────┐
    ▼             ▼                  ▼             ▼
┌─────────┐ ┌──────────┐  ┌──────────────┐  ┌──────────┐
│ Gemini  │ │ Telegram │  │ Jitsi Meet   │  │ Firebase │
│  AI API │ │  Bot API │  │ (Video Call) │  │Analytics │
│         │ │          │  │              │  │          │
└─────────┘ └──────────┘  └──────────────┘  └──────────┘
```

---

## 🔄 DATA FLOW DIAGRAM

### **1. User Creates Task**

```
┌─────────────────┐
│ User clicks     │
│ "Add Task"      │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ React Component (TaskForm)          │
│ 1. Collect user input              │
│ 2. Validate (client-side)          │
│ 3. Update local state (optimistic) │
│ 4. Display immediately             │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ Supabase API                        │
│ INSERT INTO tasks (...)            │
│ RETURNING *                         │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ PostgreSQL with RLS                 │
│ - Verify: auth.uid() = user_id    │
│ - Insert row                        │
│ - Return confirmation               │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ Real-time Broadcast                 │
│ - Other user devices subscribed    │
│ - Receive INSERT event             │
│ - Update their local state         │
│ - UI re-renders                    │
└─────────────────────────────────────┘
```

### **2. AI-Generated Study Plan**

```
┌──────────────────────┐
│ User Input:          │
│ Subject: "Python"    │
│ Duration: 4 weeks    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Frontend (AIGeneratorModal)      │
│ 1. Show loading spinner          │
│ 2. Call Supabase Edge Function  │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Edge Function Handler             │
│ /generate-plan                   │
│ 1. Check rate limit              │
│ 2. Get user context              │
│ 3. Build prompt                  │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Google Gemini API                │
│ POST /generateContent            │
│ prompt: "Create 4-week..."       │
│ model: "gemini-2.0-flash"        │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Gemini Response (JSON)           │
│ {                                │
│   schedule: [                    │
│     { week: 1, topics: [...] }  │
│   ]                              │
│ }                                │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Validation & Parsing             │
│ 1. Verify JSON structure        │
│ 2. Check quality metrics        │
│ 3. If fail: regenerate          │
│ 4. If pass: continue            │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Save to Database                 │
│ INSERT INTO subjects             │
│ - user_id, title, description   │
│ - ai_generated_plan (JSON)      │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Return to Frontend               │
│ Display schedule with actions:   │
│ - View full plan                 │
│ - Create tasks from plan         │
│ - Save to subjects               │
└──────────────────────────────────┘
```

### **3. Real-time Task Sync (Multi-device)**

```
DEVICE A (Laptop)              DEVICE B (Phone)
┌────────────────┐             ┌────────────────┐
│ Update task    │             │ Subscribed to  │
│ status: DONE   │             │ real-time      │
└────────┬───────┘             └────────────────┘
         │                             ↑
         │                             │
         ▼                             │
┌─────────────────────────────────────┐
│ Supabase Realtime (WebSocket)       │
│ Channel: tasks:123                   │
│ Event: UPDATE { id: ..., status }   │
└─────────────────────────────────────┘
                                      │
                                      ▼
                              ┌────────────────┐
                              │ Device B       │
                              │ receives event │
                              │ updates state  │
                              │ UI re-renders  │
                              └────────────────┘
```

---

## 🗂️ DATABASE SCHEMA (RLS Enforced)

```
┌─────────────────────────────────────────────────────┐
│ auth.users (Supabase managed)                       │
├─────────────────────────────────────────────────────┤
│ id (UUID)                                           │
│ email (VARCHAR UNIQUE)                              │
│ encrypted_password                                  │
│ email_confirmed_at (TIMESTAMP)                      │
│ created_at (TIMESTAMP DEFAULT now())                │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ users_profiles (RLS: SELECT/INSERT/UPDATE/DELETE)  │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK, FK → auth.users.id)                  │
│ user_id (UUID, FK → auth.users.id)                 │
│ username (VARCHAR)                                  │
│ avatar_url (TEXT)                                   │
│ total_xp (INTEGER DEFAULT 0)                        │
│ current_level (INTEGER DEFAULT 1)                   │
│ current_streak (INTEGER DEFAULT 0)                  │
│ last_activity_date (DATE)                           │
│ theme (VARCHAR DEFAULT 'light')                     │
│ created_at (TIMESTAMP)                              │
│ updated_at (TIMESTAMP)                              │
│                                                     │
│ RLS Policy:                                         │
│ - Users see own profile only                        │
│   USING (auth.uid() = user_id)                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ subjects (RLS enforced)                             │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ user_id (UUID, FK → auth.users.id)                 │
│ title (VARCHAR NOT NULL)                            │
│ description (TEXT)                                  │
│ ai_generated (BOOLEAN DEFAULT FALSE)                │
│ ai_generated_plan (JSONB)                           │
│ color (VARCHAR)                                     │
│ created_at (TIMESTAMP)                              │
│ updated_at (TIMESTAMP)                              │
│                                                     │
│ RLS Policies:                                       │
│ - SELECT: USING (auth.uid() = user_id)            │
│ - INSERT: WITH CHECK (auth.uid() = user_id)       │
│ - UPDATE: USING (auth.uid() = user_id)            │
│ - DELETE: USING (auth.uid() = user_id)            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ tasks (RLS enforced)                                │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ user_id (UUID, FK → auth.users.id)                 │
│ subject_id (UUID, FK → subjects.id)                │
│ title (VARCHAR NOT NULL)                            │
│ description (TEXT)                                  │
│ status (VARCHAR: 'todo', 'in_progress', 'done')    │
│ priority (INTEGER: 1-5)                             │
│ due_date (DATE)                                     │
│ completed (BOOLEAN DEFAULT FALSE)                   │
│ xp_reward (INTEGER DEFAULT 0)                       │
│ created_at (TIMESTAMP)                              │
│ updated_at (TIMESTAMP)                              │
│                                                     │
│ Indexes:                                            │
│ - (user_id, created_at DESC)                       │
│ - (user_id, due_date)                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ flashcard_decks (RLS enforced)                      │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ user_id (UUID, FK → auth.users.id)                 │
│ subject_id (UUID, FK → subjects.id)                │
│ title (VARCHAR NOT NULL)                            │
│ description (TEXT)                                  │
│ card_count (INTEGER)                                │
│ reviewed_count (INTEGER DEFAULT 0)                  │
│ created_at (TIMESTAMP)                              │
│ updated_at (TIMESTAMP)                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ flashcards (RLS enforced)                           │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ user_id (UUID, FK → auth.users.id)                 │
│ deck_id (UUID, FK → flashcard_decks.id)            │
│ front (TEXT - question)                             │
│ back (TEXT - answer)                                │
│ examples (TEXT)                                     │
│ difficulty (INTEGER: 1-5)                           │
│ last_reviewed (TIMESTAMP)                           │
│ review_count (INTEGER DEFAULT 0)                    │
│ next_review_date (DATE)                             │
│ interval (INTEGER - days until next review)        │
│ ease_factor (FLOAT DEFAULT 2.5)                     │
│ created_at (TIMESTAMP)                              │
│                                                     │
│ Indexes:                                            │
│ - (user_id, deck_id, next_review_date)            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ study_sessions (RLS enforced)                       │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ user_id (UUID, FK → auth.users.id)                 │
│ subject_id (UUID, FK → subjects.id)                │
│ duration_minutes (INTEGER)                          │
│ xp_earned (INTEGER)                                 │
│ mood (VARCHAR: 'focused', 'distracted', 'tired')   │
│ started_at (TIMESTAMP)                              │
│ completed_at (TIMESTAMP)                            │
│ created_at (TIMESTAMP)                              │
│                                                     │
│ Indexes:                                            │
│ - (user_id, completed_at DESC)                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ notes (RLS enforced)                                │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ user_id (UUID, FK → auth.users.id)                 │
│ subject_id (UUID, FK → subjects.id)                │
│ title (VARCHAR)                                     │
│ content (TEXT - markdown format)                    │
│ html_content (TEXT - rendered HTML)                 │
│ created_at (TIMESTAMP)                              │
│ updated_at (TIMESTAMP)                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ telegram_users (RLS: only admin/self can see)       │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ user_id (UUID, FK → auth.users.id)                 │
│ telegram_id (INTEGER UNIQUE)                        │
│ chat_id (INTEGER)                                   │
│ first_name (VARCHAR)                                │
│ username (VARCHAR)                                  │
│ linked_at (TIMESTAMP)                               │
│ notifications_enabled (BOOLEAN DEFAULT TRUE)        │
│ reminder_time_morning (TIME DEFAULT '09:00')        │
│ reminder_time_evening (TIME DEFAULT '20:00')        │
│ last_notified (TIMESTAMP)                           │
│ created_at (TIMESTAMP)                              │
│                                                     │
│ Unique Constraint:                                  │
│ - UNIQUE (user_id, telegram_id)                    │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ study_rooms (Shared data, complex RLS)              │
├─────────────────────────────────────────────────────┤
│ id (UUID, PK)                                       │
│ creator_id (UUID, FK → auth.users.id)              │
│ title (VARCHAR)                                     │
│ description (TEXT)                                  │
│ members (UUID[] - array of user IDs)               │
│ jitsi_room_url (VARCHAR)                            │
│ max_members (INTEGER DEFAULT 10)                    │
│ is_active (BOOLEAN DEFAULT TRUE)                    │
│ created_at (TIMESTAMP)                              │
│                                                     │
│ RLS Policy:                                         │
│ - SELECT: creator OR member                        │
│   USING (auth.uid() = creator_id                   │
│           OR auth.uid() = ANY(members))            │
└─────────────────────────────────────────────────────┘
```

---

## 🔗 SUPABASE REAL-TIME SUBSCRIPTIONS

```
┌──────────────────────────────────────┐
│ Frontend (React)                     │
│                                      │
│ useEffect(() => {                   │
│   const sub = supabase.channel(...) │
│     .on('postgres_changes', ...)   │
│     .subscribe()                   │
│ }, [])                              │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ Supabase Realtime Server             │
│ (WebSocket connection)               │
│                                      │
│ Listens for database changes:        │
│ - INSERT                             │
│ - UPDATE                             │
│ - DELETE                             │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ PostgreSQL (publication listener)    │
│                                      │
│ CREATE PUBLICATION supabase_realtime │
│   FOR TABLE tasks, flashcards, ...  │
│                                      │
│ Broadcasts changes to Realtime       │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ All subscribed clients receive       │
│ JSON payload:                        │
│                                      │
│ {                                    │
│   type: "postgres_changes",         │
│   event: "UPDATE",                  │
│   schema: "public",                 │
│   table: "tasks",                   │
│   new: { id, title, status, ... }, │
│   old: { id, title, status, ... }  │
│ }                                    │
│                                      │
│ Latency: ~50-100ms                  │
└──────────────────────────────────────┘
```

---

## 🎯 COMPONENT HIERARCHY

```
App
├── Auth Pages (AuthPage)
│
└── Protected Routes (Layout)
    ├── Sidebar
    │   ├── Navigation Links
    │   └── User Profile Card
    │
    ├── Header
    │   ├── Search
    │   ├── Notifications
    │   └── Settings Icon
    │
    └── Main Content
        ├── Dashboard
        │   ├── TaskCard (x multiple)
        │   ├── XPBar
        │   ├── StreakTracker
        │   └── KanbanBoard
        │       ├── Column (To Do)
        │       ├── Column (In Progress)
        │       └── Column (Done)
        │
        ├── Subjects
        │   ├── SubjectCard (x multiple)
        │   ├── AIGeneratorModal
        │   └── CreateSubjectForm
        │
        ├── Tasks
        │   ├── TaskList
        │   │   ├── TaskItem (x multiple)
        │   │   └── TaskFilters
        │   └── AddTaskModal
        │
        ├── Flashcards
        │   ├── DeckCard (x multiple)
        │   ├── StudyMode
        │   │   ├── CardViewer
        │   │   ├── RatingButtons
        │   │   └── Progress Bar
        │   └── FlashcardForm
        │
        ├── Focus (Pomodoro)
        │   ├── TimerDisplay
        │   ├── SessionControls
        │   ├── AmbientSounds
        │   └── SessionStats
        │
        ├── Calendar
        │   ├── MonthView
        │   ├── TaskPopover
        │   └── DeadlineIndicators
        │
        ├── Community
        │   ├── StudyRoomsList
        │   ├── RoomCard
        │   └── JitsiMeetIframe
        │
        ├── Notes
        │   ├── NotesList
        │   ├── MarkdownEditor
        │   └── NotePreview
        │
        ├── Progress
        │   ├── XPChart (Recharts)
        │   ├── LevelProgress
        │   ├── AchievementGrid
        │   └── StatsSummary
        │
        └── Settings
            ├── ProfileEditor
            ├── ThemeToggle
            ├── NotificationSettings
            ├── TelegramLinking
            └── DataExport
```

---

## 🔐 AUTHENTICATION FLOW

```
┌──────────────────────────────────────┐
│ User Registration                    │
│ 1. Enter email, password             │
│ 2. Validate (client)                │
│ 3. POST to Supabase Auth            │
└──────────┬───────────────────────────┘
           │
┌──────────▼───────────────────────────┐
│ Supabase Auth Endpoint               │
│ Sign up user                         │
│ Send confirmation email              │
│ Return auth token                    │
└──────────┬───────────────────────────┘
           │
┌──────────▼───────────────────────────┐
│ Frontend                             │
│ Store JWT in localStorage            │
│ Redirect to dashboard                │
└──────────┬───────────────────────────┘
           │

┌──────────────────────────────────────┐
│ Subsequent Requests                  │
│ 1. Include JWT in Authorization      │
│ 2. header: Authorization: Bearer ... │
└──────────┬───────────────────────────┘
           │
┌──────────▼───────────────────────────┐
│ Supabase                             │
│ 1. Verify JWT signature              │
│ 2. Extract user_id from token       │
│ 3. Apply RLS policies               │
│ 4. Return filtered data              │
└──────────────────────────────────────┘
```

---

## 🚀 DEPLOYMENT ARCHITECTURE

```
┌──────────────────────────────────────┐
│ GitHub Repository                    │
│ main branch                          │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ GitHub Actions                       │
│ Trigger on push:                     │
│ 1. Lint (ESLint)                     │
│ 2. Type check (TypeScript)           │
│ 3. Run tests (Vitest)                │
│ 4. Build verification                │
│ 5. Coverage report                   │
└──────────┬───────────────────────────┘
           │
    ┌──────┴──────┐
    │ Pass        │ Fail
    ▼             ▼
  Deploy      Notify
    │         (Slack)
    ▼
┌──────────────────────────────────────┐
│ Vercel Production                    │
│ 1. Clone repo                        │
│ 2. Run build: yarn build             │
│ 3. Cache optimizations               │
│ 4. Deploy to CDN                     │
│ 5. Run edge functions                │
│ 6. Set environment variables         │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ DNS (Cloudflare)                 │
│ Route to Vercel CDN              │
│ SSL/TLS encryption               │
└──────────┬──────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ Users                            │
│ Access: task-planner-tau.app     │
└──────────────────────────────────┘
```

---

## 📊 CACHING STRATEGY

```
LAYER 1: Browser Cache (Service Workers)
┌────────────────────────────────────┐
│ Cached:                            │
│ - Static JS/CSS (24 hours)         │
│ - Images (7 days)                  │
│ - API responses (1 hour)           │
│                                    │
│ Miss: Fetch from Vercel CDN       │
│ Offline: Serve cached version     │
└────────────────────────────────────┘

LAYER 2: Vercel CDN (Edge Caching)
┌────────────────────────────────────┐
│ Caches:                            │
│ - All static assets               │
│ - API responses (smart cache)     │
│ - Purges on deployment            │
│                                    │
│ TTL: Varies by content type       │
│ Invalidation: On-demand purge     │
└────────────────────────────────────┘

LAYER 3: Supabase Cache (Redis-like)
┌────────────────────────────────────┐
│ Caches:                            │
│ - Frequently accessed subjects     │
│ - Flashcard decks                  │
│ - User profiles                    │
│                                    │
│ TTL: 1 hour                        │
│ Invalidation: On UPDATE/DELETE    │
└────────────────────────────────────┘

LAYER 4: PostgreSQL Query Cache
┌────────────────────────────────────┐
│ Internal query optimization:       │
│ - Indexes on (user_id, created_at)│
│ - Prepared statements              │
│ - Connection pooling (PgBouncer)  │
└────────────────────────────────────┘
```

---

**Loyihani tushunish uchun bu diagrammalar kengay xizmat beradi!** 📐
