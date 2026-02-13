# 🚀 Loyiha Rivojlanish Rejasi (Development Plan)

Ushbu hujjat foydalanuvchi talabiga asosan loyihani yanada takomillashtirish uchun 5 ta ilg'or taklifni o'z ichiga oladi.

## 1. 🎙️ AI Voice Command (Ovozli Boshqaruv)
**Maqsad:** Foydalanuvchilarga ilova bilan ovoz orqali muloqot qilish imkonini berish.
- **Funksiyalar:**
    - Vazifa qo'shish ("Bugun soat 20:00 da ingliz tili darsini qo'sh").
    - AI bilan suhbatlashish (Yozish o'rniga gapirish).
    - Interfeysni ovoz bilan boshqarish.
- **Texnologiyalar:** Web Speech API, Ollama/Gemini API, Natural Language Processing.

## 2. 📱 PWA & Offline-First (Mobil Ilova Sifati)
**Maqsad:** Ilovani internetsiz ham ishlashini ta'minlash va mobil qurilmaga o'rnatish.
- **Funksiyalar:**
    - "Install App" tugmasi orqali ilovani telefonga o'rnatish.
    - Offline rejimda ma'lumotlarni ko'rish va o'zgartirish (keyin sinxronlash).
    - Push xabarnomalar (Vaqt eslatmalari).
- **Texnologiyalar:** Vite PWA Plugin, Service Workers, Background Sync API.

## 3. 📅 Google Calendar Integratsiyasi
**Maqsad:** O'quv rejasini foydalanuvchining shaxsiy taqvimi bilan birlashtirish.
- **Funksiyalar:**
    - Reja tuzilishi bilan uni Google Calendar'ga avtomatik qo'shish.
    - Ikki tomonlama sinxronizatsiya (Two-way sync).
    - Boshqa taqvimlarni import qilish.
- **Texnologiyalar:** Google Calendar API, OAuth 2.0 Auth.

## 4. 🤝 Real-time Study Rooms (Kengaytirilgan)
**Maqsad:** Masofaviy hamkorlikni kuchaytirish va dars qilish atmosferasini yaratish.
- **Funksiyalar:**
    - **Shared Timer:** Hamma uchun bir xil yuradigan Pomodoro soati (bir xil vaqtda dam olish).
    - **Interactive Whiteboard:** Bir vaqtning o'zida yozish va chizish taxtasi.
    - Ekran ulashish (Screen sharing) va video suhbat.
- **Texnologiyalar:** Supabase Realtime, Jitsi Meet API, Canvas API (yoki tldraw).

## 5. 🧩 Browser Extension (Chrome Kengaytmasi)
**Maqsad:** Internetdagi resurslarni oson yig'ish va tezkor o'rganish.
- **Funksiyalar:**
    - Saytda turib bitta tugma bilan uni reja yoki resurslarga qo'shish.
    - Matnni belgilab, to'g'ridan-to'g'ri Flashcard yaratish ("Flashcard qo'shish" menyusi).
    - YouTube videolardan avtomatik konspekt olish (AI Summary).
- **Texnologiyalar:** Chrome Extension Manifest V3, React, Content Scripts.
