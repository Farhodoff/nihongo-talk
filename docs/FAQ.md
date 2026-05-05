# ❓ AI Study Planner - FAQ (Frequently Asked Questions)

**English** | [🇺🇿 O'zbek tilida](#uzbek-version)

---

## General Questions

### What is AI Study Planner?
AI Study Planner is an **intelligent study management platform** that combines task management, AI-powered content generation, gamification, and focus tools. It helps students and self-learners structure their studies, discover resources, and maintain consistent learning habits through science-backed techniques like Spaced Repetition and the Pomodoro method.

### Who is this app for?
- 👨‍🎓 **Students** managing multiple subjects and heavy coursework
- 🧑‍💻 **Self-taught developers** needing structured learning paths
- 🌍 **Language learners** wanting to organize vocabulary and grammar
- 🎯 **Anyone** struggling with procrastination and focus

### What makes it different from other to-do apps?
Unlike basic to-do apps, AI Study Planner:
- 🧠 **Generates study schedules** using AI (Google Gemini)
- 🎮 **Gamifies learning** with XP, streaks, and achievements
- 🔍 **Finds resources** (videos, articles) automatically
- 📚 **Creates flashcards** from any topic instantly
- 🔔 **Sends Telegram reminders** for deadlines

### Is it free?
Currently, the app is **free to use**. The live demo is available at [task-planner-tau.vercel.app](https://task-planner-tau.vercel.app).

---

## Setup & Installation

### How do I get started?
**Web Version (Easiest):**
1. Visit [task-planner-tau.vercel.app](https://task-planner-tau.vercel.app)
2. Sign up with email/password
3. Start creating subjects and tasks

**Local Setup:**
```bash
git clone https://github.com/yourusername/study-planner-ai.git
cd study-planner-ai
npm install
npm run dev
```

### Do I need Docker?
No, Docker is **optional**. For local development:
- Use `npm run dev` for Vite development server
- Use Docker if you want isolated environment setup

### What are the system requirements?
- **Modern browser** (Chrome, Firefox, Safari, Edge - latest versions)
- **Internet connection** (required for AI and Telegram features)
- **Node.js 18+** (for local development)

### How do I set up the Telegram bot?
1. Create a bot using **@BotFather** on Telegram
2. Get your bot token and chat ID
3. Go to **Settings → Integrations** in the app
4. Paste the bot token
5. Link your Telegram account to your study planner

See [GITHUB_SECURITY.md](./GITHUB_SECURITY.md) for detailed setup.

---

## Features & How to Use

### How do I create a study plan?
**Method 1: Manual**
1. Go to **Subjects** page
2. Click **+ Add Subject**
3. Enter subject name and description
4. Add tasks manually

**Method 2: AI Generation (Recommended)**
1. Go to **Subjects** page
2. Click **AI Generator** button
3. Enter a topic (e.g., "Python Machine Learning")
4. Click **Generate Plan**
5. Review and adjust the suggested schedule

### How do AI-generated flashcards work?
1. Create a subject or go to **Flashcard Decks**
2. Click **Create Deck from AI**
3. Enter the topic and number of cards
4. The AI generates Anki-style Q&A pairs
5. Use **Spaced Repetition** algorithm for optimal learning

### What's the Pomodoro timer?
A **25-minute focused work session** followed by a 5-minute break:
1. Go to **Focus Mode**
2. Set a subject to work on
3. Click **Start Timer**
4. Stay focused - the app blocks distractions
5. After 25 min, take a 5-min break

The app tracks your **focus streaks** and awards **XP** for completed sessions.

### How do I join a study room?
1. Go to **Community → Study Rooms**
2. Click **Create Room** or **Join** an existing room
3. You'll join a **Jitsi Meet video call** with other students
4. Ideal for collaborative studying or accountability partners

### Can I use notes and markdown?
Yes! **Rich Text Notes:**
1. Go to **Notes** page
2. Click **+ New Note**
3. Use **Markdown syntax** for formatting
4. Toggle **Preview Mode** to see formatted result
5. Notes are **auto-saved** to cloud

Supported: headings, bold, italics, code blocks, lists, tables.

### How does the Kanban board work?
1. Go to **Dashboard → Kanban Board**
2. Tasks are organized in columns: **To Do**, **In Progress**, **Done**
3. **Drag and drop** tasks between columns
4. Click task to edit details
5. Mark complete to earn **XP**

### What is the calendar view?
Go to **Calendar** to:
- See all **tasks and deadlines** in a monthly view
- Click on a day to see details
- **Color-coded** by subject
- Sync with Google Calendar (coming soon)

---

## Gamification & Progress

### How do I earn XP and levels?
**XP is earned by:**
- ✅ Completing tasks (+10-50 XP depending on priority)
- ⏱️ Finishing Pomodoro sessions (+25 XP)
- 💯 Completing flashcard reviews (+5 XP per card)
- 🎯 Achieving streak milestones (+bonus XP)

**Levels:**
- Level 1: 0-100 XP
- Level 2: 100-250 XP
- Each level requires 50% more XP

### What are achievements?
**Special badges** you unlock for:
- 🔥 **Streaker** - 7-day study streak
- 🌙 **Night Owl** - Study after midnight
- 👥 **Team Player** - Join 5 study rooms
- 📚 **Scholar** - Create 10+ subjects
- 🎓 **Master** - Reach level 10

Use them to showcase your progress!

### How does the streak system work?
- 📅 A "streak" is **consecutive days** of studying
- ⏱️ Study **at least 1 Pomodoro session** per day to continue
- 🔥 **Lose streak** if you miss a day
- 🏆 Bonus XP at 7, 14, 30 day milestones

### Can I see my progress?
Go to **Progress** page to view:
- 📊 **Weekly/monthly XP charts**
- 🎯 **Completion rates** by subject
- ⏱️ **Total focus hours**
- 🏅 **Achievements** unlocked
- 🔥 **Streaks** and milestones

---

## Account & Security

### How is my data protected?
✅ **Row Level Security (RLS)** - Only you can access your data  
✅ **PostgreSQL encryption** - Data at rest is encrypted  
✅ **HTTPS only** - Data in transit is encrypted  
✅ **Supabase hosting** - Enterprise-grade security  

See [GITHUB_SECURITY.md](./GITHUB_SECURITY.md) for details.

### Can I export my data?
Coming soon! We're adding CSV/JSON export for:
- Tasks and progress
- Flashcards and decks
- Notes and resources
- Study statistics

### What happens if I delete my account?
- ⚠️ **Permanent deletion** - All data is removed after 30 days
- 📥 You can request a data export before deletion
- 🔄 No recovery possible after the 30-day grace period

### Can I have multiple accounts?
You can use **the same email for one account only**. However:
- Sign out and sign in with a different email
- Create a new account per device if needed
- Consider using a secondary email for testing

### How do I change my password?
1. Go to **Settings → Account**
2. Click **Change Password**
3. Enter current password
4. Enter new password (min 6 characters)
5. Confirm the change

### Is my Telegram data safe?
- 🔒 Bot tokens are **encrypted** in the database
- 🚫 We **never** store your Telegram messages
- 🔐 Telegram connection uses **official Telegram Bot API**
- ⚙️ You can disconnect anytime in Settings

---

## Notifications & Telegram

### How do I enable Telegram notifications?
1. Message **@BotFather** on Telegram: `/newbot`
2. Follow the setup to create your bot
3. Get your **bot token** from BotFather
4. In app Settings → **Integrations**, paste the token
5. Click **Link Telegram Account**
6. You'll receive a message from the bot

### What notifications do I get?
- 📅 **Morning plan** (9 AM) - Today's tasks summary
- 🌙 **Evening reminder** (8 PM) - Deadlines coming up
- ⏰ **Deadline alerts** - 24 hours and 1 hour before exam/task due
- 🎉 **Achievement notifications** - When you level up or unlock badges

### Can I customize notification times?
Yes! Go to **Settings → Notifications**:
- Toggle notifications on/off
- Set **morning reminder time**
- Set **evening reminder time**
- Choose which **notification types** to receive

### Why am I not getting Telegram messages?
- ✅ Check bot token is **correct**
- ✅ Verify you **started the bot** (/start)
- ✅ Check **internet connection**
- ✅ Try disconnecting and reconnecting in Settings
- ✅ Contact support if issue persists

---

## Troubleshooting

### The app is loading slowly
**Solutions:**
- Clear **browser cache** (Ctrl+Shift+Delete)
- Try **disabling ad blockers**
- Switch to a different browser
- Check your **internet speed**
- Try the **local version** instead

### I can't log in
**Try these steps:**
1. Clear cookies and cache
2. Verify your **email is correct**
3. Check **CAPS LOCK** is off
4. Use **forgot password** to reset
5. Try **incognito mode**
6. Contact support: support@studyplanner.ai

### AI features aren't working
**Common issues:**
- ❌ **Google Gemini API rate limit** - Wait 1 hour and try again
- ❌ **No internet connection** - Check your connection
- ❌ **API key not set** - Add your Gemini API key in Settings
- ❌ **Old browser version** - Update your browser

### Tasks aren't syncing across devices
**Solutions:**
- 🔄 **Refresh the page** (F5)
- 📡 Check **internet connection**
- ⏲️ Wait a few seconds (real-time sync takes time)
- 🔌 Sign out and back in
- 💾 Clear local storage if data persists incorrectly

### I lost my flashcard deck
**Recovery options:**
- Check **Recycle Bin** in Flashcard page (coming soon)
- Contact support within **7 days** for recovery
- You can recreate using **AI generator**

### Mobile app not responsive?
- Use **Chrome mobile** (best performance)
- Pinch to zoom if interface is too small
- Rotate device to landscape for better view
- Native mobile app coming soon!

---

## Advanced Questions

### How does Spaced Repetition work?
Spaced Repetition is a technique where you review flashcards at **optimal intervals**:
- 🔴 **Red cards** (failed) - Review tomorrow
- 🟡 **Yellow cards** (hard) - Review in 3 days
- 🟢 **Green cards** (known) - Review in 7 days
- ⚪ **White cards** (mastered) - Review in 30 days

This **maximizes retention** with minimum effort.

### Can I integrate with Google Calendar?
**Yes!** Now you can:
- 📲 Export tasks to Google Calendar
- 📲 View Google Calendar events in-app
- 🔄 Automatic and manual sync

### Can I collaborate with friends?
Currently, **Study Rooms** (Jitsi) allow:
- 👥 Group video study sessions
- 🎙️ Voice/video chat during study
- 📍 Real-time presence

Coming: Shared subjects and collaborative notes.

### Does the app work offline?
**Partial support:**
- ✅ View cached tasks (if loaded before)
- ✅ Edit notes locally
- ❌ Sync requires internet connection
- 📱 Data syncs when reconnected

Full offline mode coming in v2.0!

### What's your privacy policy?
Read our full [PRIVACY_POLICY.md](./PRIVACY_POLICY.md) - we:
- ❌ Never sell data
- ✅ Encrypt all data
- ✅ Only process what's necessary
- ✅ Let you delete anytime

### How can I report bugs?
Report bugs on [GitHub Issues](https://github.com/yourusername/study-planner-ai/issues):
1. Describe the issue clearly
2. Include screenshots/videos
3. Specify your browser and OS
4. List reproduction steps

### Can I contribute to the project?
**Yes!** We welcome contributions:
- 🐛 **Bug reports** - Open an issue
- 🎨 **Features** - Discuss in discussions first
- 💻 **Code** - Fork, create PR, follow guidelines
- 📚 **Documentation** - Help improve guides

See [CONTRIBUTING.md](./CONTRIBUTING.md) (coming soon)

---

## Performance & Optimization

### Why does the first load take long?
The app uses **lazy loading** to optimize performance:
- 📦 Components load on-demand (not all at once)
- 🚀 First load ~3-5 seconds, subsequent loads ~1 second
- 💾 Service workers cache assets for faster loading

**Tips to improve:**
- Use a **modern browser** (Chrome/Firefox)
- Close unused tabs
- Check internet speed

### Is there a mobile app?
**Not yet!** But coming soon:
- 📱 React Native version
- 🍎 iOS app
- 🤖 Android app
- ⌚ Apple Watch integration

For now, use **responsive web version** on mobile.

### Can I self-host?
**Yes!** See [DEPLOYMENT_GUIDE.md](./DATABASE_MIGRATION_GUIDE.md):
1. Fork the repository
2. Set up your own Supabase backend
3. Configure environment variables
4. Deploy to Vercel, Railway, or your server

---

## Support & Feedback

### How do I contact support?
- 📧 **Email**: support@studyplanner.ai
- 💬 **Discord**: [Join our community](https://discord.gg/studyplanner)
- 🐛 **GitHub Issues**: Report bugs and request features
- 📖 **Documentation**: Check [docs](./docs) folder

### How can I provide feedback?
We'd love to hear from you!
- ⭐ Star us on GitHub
- 💭 Share ideas in [Discussions](https://github.com/yourusername/study-planner-ai/discussions)
- 📝 Fill out feedback form in app (Settings → Feedback)

### What's the roadmap?
**Q2 2026:**
- 📱 Native mobile apps (iOS/Android)
- 🤝 Collaborative features
- 📊 Advanced analytics

See [ROADMAP.md](./ROADMAP.md) for full details.

---

# 🇺🇿 O'ZBEK VERSIYASI {#uzbek-version}

## Ummumiy Savollar

### AI Study Planner nima?
**AI Study Planner** - bu o'quvchilar uchun ishlab chiqilgan aqlli o'quv platformasi. U quyidagilarni taqdim etadi:
- 📚 Barcha fanlarni markaziy joyda boshqarish
- 🧠 AI yordamida kunduzuk rejasi yaratish
- 🎮 O'yin elementlari bilan qiziqarli o'qish
- ⏱️ Pomodoro usuli bilan fokusga jalb qilish
- 📱 Telegram bilan qo'ng'iroq olish

### Kimlar uchun?
- 📖 Fanli o'quvchilar
- 🧑‍💻 O'z-o'zini o'qitayotgan dasturchilar
- 🌍 Tilni o'rganayotganlar
- 🎯 Har kim (prokrastinatsiyalni yengish uchun)

---

## O'rnatish va Boshlash

### Qanday boshlayman?
**Web versiyasi (eng oson):**
1. [task-planner-tau.vercel.app](https://task-planner-tau.vercel.app) ga kirish
2. Email va parol bilan ro'yxatdan o'tish
3. Fanlar va vazifalarni yaratishni boshlash

**Mahalliy o'rnatish:**
```bash
git clone https://github.com/yourusername/study-planner-ai.git
cd study-planner-ai
npm install
npm run dev
```

### Qanday tekshirish talablari?
- 🌐 Zamonavoy brauzer (Chrome, Firefox yoki Safari)
- 📡 Internet ulanishi
- 💻 Node.js 18+ (mahalliy ishlab chiqish uchun)

---

## Xususiyatlar

### Qanday AI rejasi yaratish mumkin?
1. **Subjects** sahifasiga o'ting
2. **AI Generator** tugmasini bosing
3. Mavzuni kiriting (masalan: "Python")
4. **Generate Plan** ni bosing
5. Shunga ko'ra rejani o'zgartirib olish mumkin

### Pomodoro taymer nima?
- ⏰ 25 daqiqali fokusli o'qish sessiyasi
- 5 daqiqali dam olish
- XP ishlab chiqish uchun mukofot
- Kunli streakni saqlash

### Kichik fanjalarni qanday yaratish mumkin?
1. **Flashcard Decks** sahifasiga o'ting
2. **Create Deck from AI** tugmasini bosing
3. Mavzuni va kartalari sonini kiriting
4. AI savollar va javoblarni yaratadi

### Study roomi nima?
- 👥 Boshqa o'quvchilar bilan video calling
- 🎙️ Ijobiy hamkasablar
- 📚 Birgalikda o'qish

---

## Gamifikatsiya

### Qanday XP ishlrab chiqish mumkin?
- ✅ Vazifani tugallash: 10-50 XP
- ⏱️ Pomodoro sessiya: 25 XP
- 📚 Flashcards: 5 XP har bir karta
- 🔥 Streaklar: Bonus XP

### Levels nima?
- 🏆 Har bir level 50% ko'p XP kerak
- 📊 Progress sahifasida ko'rish mumkin
- 🎖️ Achievements blogosidagi badge

---

## Account va Xavfsizlik

### Mening ma'lumotlarim qanday himoyalanadi?
- 🔐 **Row Level Security** - Faqat siz ko'rasiz
- 🛡️ **Shifrlanadi** - PostgreSQL hifoyas
- ✅ **HTTPS** - Barcha ulanishlar xavfsiz
- ☁️ **Supabase** - Yaqqol-darajadagi xavfsizlik

### Akkauntimni o'chira olamanmi?
- ⚠️ Barcha ma'lumotlar 30 kun ichida o'chadi
- 📥 O'chirmasdan oldin ma'lumotlarni export qilish mumkin
- 🔄 Qaytarish mumkin bo'lmaydi

### Parolni o'zgartirishni qanday?
1. **Settings → Account** ga o'ting
2. **Change Password** tugmasini bosing
3. Eski parol, yangi parol kiriting
4. Tasdiqlang

---

## Telegram

### Telegram bilan qanday ishlash mumkin?
1. **@BotFather** ga Telegram bilan `/newbot` yuboring
2. Bot tokenini olish
3. App Settings → **Integrations** -> tokeni kiriting
4. **Link Telegram Account** bosing
5. Botdan xabar olasiz

### Qanday eslatmalar olaman?
- 📅 Ertalabki rejalar (9:00 AM)
- 🌙 Kechki eslatmalar (8:00 PM)
- ⏰ Deadline eslatmalari (24h va 1h oldin)
- 🎉 Achievement eslatmalari

---

## Muammolarni Hal Qilish

### Ilova sekin yuglanmoqda
- 🗑️ Cache-ni tozalang
- 🔄 Brauzerni refresh qiling
- 🧩 Ad blockerlarni o'chiring
- 📡 Internet tezligini tekshiring

### Tizimga kira olmayman
- ✅ Email to'g'ri-mi?
- ✅ CAPS LOCK o'chgan-mi?
- ✅ "Forgot password" dan foydalaning
- ✅ Private mode bilan urinib ko'ring

### AI xususiyatlari ishlamaydi
- 🔄 1 soat kutib ko'ring
- 🔑 API key o'rnatilgan-mi?
- 📱 Brauzerni yangilang
- 🌐 Internet ulanishi tekshiring

### Flashcardlar yo'qoldi
- ♻️ Recycle Bin-da qidiring
- 📞 7 kun ichida qo'llab-quvvatlashga murojaat qiling
- 🔄 AI generatordan qayta yaratish mumkin

---

## Ko'proq Ma'lumot

### Spaced Repetition nima?
Optimal intervallarda flashcardni qayta ko'rib o'tish:
- 🔴 Noto'g'ri - ertaga qayta
- 🟡 Qiyin - 3 kun ichida
- 🟢 Biliman - 7 kun ichida
- ⚪ Menimizda - 30 kun ichida

### Google Calendar bilan qo'shish mumkin-mi?
**Ha!** Endi siz quyidagilarni qila orasiz:
- 📲 Vazifalarni Google Calendar ga eksport qilish
- 📲 Google Calendar tadbirlarini ilova ichida ko'rish
- 🔄 Avtomatik va qo'lda sinxronizatsiya qilish

*Eslatma: Agar ulanishda xatolik yuz bersa, [GOOGLE_AUTH_SETUP.md](./GOOGLE_AUTH_SETUP.md) qo'llanmasini ko'rib chiqing.*

### Oflayn ishlaysimmi?
Qisme qo'llanilavchi:
- ✅ Kesh qilingan vazifalarni ko'rish
- ✅ Notalarni mahalliy tahrir qilish
- ❌ Sinxronlash internet kerak
- 📱 Internet bo'lgach sinxronlanadi

---

## Ko'mak va Fikr-Mulohaza

### Qanday bilan bog'lanam?
- 📧 Email: support@studyplanner.ai
- 💬 Discord: [Hamjamiyatga qo'shiling](https://discord.gg/studyplanner)
- 🐛 GitHub: Buglari bildirib o'ting
- 📖 Docs: [Qo'llanma](./docs)

### Fikr-mulohazani qanday yuborsam?
- ⭐ GitHub'da yulduz bering
- 💭 Fikrlarni baham kuring
- 📝 App ichidagi feedback formani to'ldiring

---

**Boshqa savollari bormi?** [Support](./docs) bilan bog'laning!
