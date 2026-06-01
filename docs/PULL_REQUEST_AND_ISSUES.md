# 🚀 GitHub-da Issue va Pull Request Yaratish Qo'llanmasi

Ushbu hujjatda loyihada amalga oshirilgan oxirgi o'zgarishlar (WebRTC video xonalari, xonalarni o'chirish, xavfsizlikni tozalash va fayllar tuzilmasini optimallashtirish) uchun GitHub-da **Issue** va **Pull Request (PR)** yaratishda to'g'ridan-to'g'ri nusxalab ishlatishingiz mumkin bo'lgan tayyor matnlar keltirilgan.

---

## 1. 🐛 GitHub Issue: Muammo va Ehtiyojlar Tavsifi
> **Tavsiya etilgan Title:** `chore: security cleanup, personal WebRTC implementation, and workspace reorganization`  
> **Tegishli Label-lar:** `bug`, `security`, `enhancement`

### 📝 Nusxalash uchun matn (Markdown):
```markdown
## 🐛 Bartaraf Etilgan Muammolar va Yangi Ehtiyojlar

Oxirgi ishlanmalar jarayonida loyihamizda quyidagi texnik va xavfsizlik muammolari aniqlangan edi va ular muvaffaqiyatli bartaraf etildi:

1. **Jitsi Meet Kutubxonasidagi Cheklovlar:**
   - Jitsi iframe video oqimlari moslashuvchan emasligi va shaxsiy sozlash imkoniyatlari kamligi.
   - Dars xonalariga ulanishdan oldin kambera/mikrofonni sozlash uchun "Pre-join" ekranining yo'qligi.
   - Pomodoro/Whiteboard foydalanmaydiganlar uchun ekranda video dars juda kichik ko'rinishi.

2. **Xonalarni O'chirish Cheklovi:**
   - Yaratilgan maxsus xonalarni faqat uning egasi (creator) o'chira olishi uchun soft-delete mexanizmi yo'qligi.

3. **Xavfsizlik Tahdidlari (Security Leak):**
   - `.env.example` va `supabase/functions/.env.example` fayllarida ochiq Telegram bot tokeni qolib ketganligi.
   - Loyiha bosh katalogida (`root`) `.agents/skills` kabi agent lokal fayllarining va `skills-lock.json` kabi ortiqcha fayllarning git kuzatuvida turishi hamda repo papkasini chalkashtirishi.
```

---

## 2. 🚀 GitHub Pull Request: Amalga oshirilgan Yechimlar
> **Tavsiya etilgan Title:** `feat: custom WebRTC video calling, room soft-delete, security cleanup, and repository structure updates`  
> **Target Branch:** `main`

### 📝 Nusxalash uchun matn (Markdown):
```markdown
# 🚀 Pull Request: WebRTC, Soft-Delete, Xavfsizlik va Strukturani Optimallashtirish

Ushbu PR loyihadagi eng muhim funksional yangilanishlar va xavfsizlik choralarini o'z ichiga oladi. Barcha testlar muvaffaqiyatli bajarilgan.

## 🛠 Amalga oshirilgan Ishlar Ro'yxati

### 1. 📹 Shaxsiy WebRTC Video Konferensiya Tizimi (Jitsi o'rniga)
- **Native WebRTC:** `@jitsi/react-sdk` moduli butunlay o'chirildi va browserning native WebRTC API ulanishlari yo'lga qo'yildi.
- **Pre-join (Boshlash) Ekrani:** Ulanishdan oldin foydalanuvchining kamera preview ko'rinishi va boshqaruv paneli qo'shildi. Ular sozlanib, "Darsni boshlash" tugmasi bosilgandan so'ng WebRTC ishga tushadi.
- **Ekran Ulashish (Screen Share):**
  - Butun qurilma ekrani ustuvor qilindi (`displaySurface: "monitor"`).
  - Infinite mirror loop (cheksiz oyna) effekti chetlab o'tildi (`selfBrowserSurface: "exclude"`).
  - Local videodagi mirror va aspect-ratio rendering xatoligi (`object-contain`) orqali tuzatildi.
- **Katta Ekran Rejimi:** O'ng tarafdagi Pomodoro va Whiteboard panellarini yashirish va video oqimini ekranga to'liq kenglikda chiqarish imkoniyati yaratildi.

### 2. 🗑 Xonalarni Soft-Delete qilish
- Supabase-dagi `study_rooms` jadvalida xona egasi (`creator_id`) joriy foydalanuvchiga mos kelganda qizil "Chiqindixona" tugmasi paydo bo'ladi.
- Tasdiqlash modal oynasi orqali xonani `is_active = false` qilib ro'yxatdan o'chirish (soft-delete) funksiyasi ulandi.

### 3. 🔒 Xavfsizlik va Reponi Tozalash
- **Token Purge:** Barcha tarixiy commit'lardan ochiq qolib ketgan real Telegram Bot Tokeni `git filter-branch` orqali tozalandi va placeholderlar bilan almashtirildi.
- **Git Reorganization:** 
  - `.agents/` papkasi va uning ostidagi barcha `skills` fayllari Git kuzatuvidan olib tashlandi va `.gitignore` ga yozildi.
  - Avtomatik hosil bo'ladigan `skills-lock.json` fayli `.gitignore` ga qo'shildi.
  - Loyihaning bosh katalogidagi `maqsad.mdx` hujjat fayli tartib uchun `docs/maqsad.mdx` manziliga ko'chirildi.

## 🧪 Sinov (Testing) Natijalari

Barcha testlar, linter va typecheck muvaffaqiyatli yakunlandi:

```bash
$ npm run test

 RUN  v3.2.4 /Users/farhod/Desktop/github/study_planner

 Test Files  17 passed (17)
      Tests  136 passed (136)
   Duration  4.34s
```

- `npm run lint` - 0 ta ogohlantirish va xatolik.
- `npm run typecheck` - muvaffaqiyatli yakunlandi.
```
