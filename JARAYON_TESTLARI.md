# 📋 JLPT (N5–N1) KONTENT VA TESTLARINI RIVOJLANTIRISH JARAYONI CHECKLISTI

Ushbu hujjat loyihadagi barcha JLPT darajalari (N5, N4, N3, N2, N1) bo'yicha kitoblardan olingan haqiqiy testlar, kanji, lug'at, grammatika, o'qish (dokkai) va eshitish (choukai) bazasini bosqichma-bosqich boyitish monitoringi uchun xizmat qiladi.

---

## 🎧 0. CHOUKAI (TINGLASH) BO'YICHA TOZALASH VA STUDIYA AUDIOLARI

> **Maqsad**: Brauzerning xira, past va sun'iy TTS ovozlarini olib tashlash hamda faqat haqiqiy studiya audio fayllaridan (CD MP3) foydalanish.

- [x] **0.1.** `src/data/jlpt/listening_data.ts` dagi bo'sh `audioUrl: ''` bo'lgan va sun'iy TTS ishlatadigan soxta choukai savollarini tozalash / haqiqiy audio bilan almashtirish.
- [x] **0.2.** `src/data/jlptMockExamData.ts` dagi bo'sh `audioUrl` li listening savollariga haqiqiy studiya audiosi biriktirildi va sun'iy robot TTS ovozi butunlay olib tashlandi.
- [x] **0.3.** `book_2/N4_Shinkanzen Master Listening_CD.rar` dagi haqiqiy MP3 audiolarni `public/audio/choukai/n4/` papkasiga chiqarish va N4 Choukai savollariga ulash.
- [x] **0.4.** `book_2/N3_Shinkanzen Master_Listening_CD.rar` dagi haqiqiy MP3 audiolarni `public/audio/choukai/n3/` papkasiga chiqarish va N3 Choukai savollariga ulash.
- [x] **0.5.** Admin Choukai Studiodan o'qituvchi/admin tomonidan to'g'ridan-to'g'ri haqiqiy MP3 yuklash oqimini doimiy sinovdan o'tkazish (`CustomContentService`).

---

## 🌸 1. N5 DARAJASI (BOSHLANG'ICH)

> **Mavjud kitoblar**: `500_voprosov_jlpt_n4_n5.pdf`, `Try N5.pdf`, `N5 Goi・Kanji test.pdf`, `N5 so'z testi! Orginal JLPT testdan olindi!.pdf`, `Basic_Kanji_Book1.pdf`, `Minna Shokyu 1 (Honsatsu, Hyoujun Mondaishuu, Kanji Renshuuchou)`.

- [x] **1.1. Minna no Nihongo Shokyu 1 (1–25 darslar)**: Barcha 25 dars uchun kanonik dialoglar (Kaiwa), Furigana, Romaji, o'zbekcha tarjima va sequential player (Barchasini tinglash) to'liq tayyor.
- [x] **1.2. N5 Kanji**: 106 ta kanji va 106 ta animatsiyali SVG stroke (100% to'liq).
- [x] **1.3. N5 Lug'at**: 750 ta N5 so'z to'liq kiritilgan.
- [x] **1.4. N5 Grammatika**: 85 ta qoida mavjud.
- [x] **1.5. N5 Mock Exam Set 2**: `500_voprosov_jlpt_n4_n5.pdf` va `N5 Goi・Kanji test.pdf` kitoblaridan olingan 25 ta haqiqiy savolli 2-sinov imtihoni yaratildi va studiya audiolari biriktirildi.
- [x] **1.6. N5 Dokkai (O'qish)**: Hozirgi matnlar `みんなの日本語初級1標準問題集` va qo'llanmalar asosida to'liq 10 ta unikal matnga keltirildi (dublikatlardan tozalandi, har birida to'liq o'zbekcha sharh va savollar mavjud).
- [x] **1.7. N5 Amaliy Test Banki**: `N5 so'z testi! Orginal JLPT testdan olindi!.pdf` asosida 33 ta original rasmiy imtihon savollari interaktiv dek sifatida kiritildi (`deck_n5_test_bank`).
- [x] **1.8. Minna no Nihongo 1–25 Mondai Tinglash Testlari (CD Audio)**: Barcha 25 dars oxiridagi haqiqiy CD audiolari (`minna_shokyu_1_002.mp3` dan `087.mp3` gacha) bo'yicha Mondai 1, 2, 3 va 4 vazifalari interaktiv test (Step 4) sifatida qo'shildi, audio pleer, Furigana, o'zbekcha sharhlar va darslar panelida "🎧 Mondai" tezkor tugmasi yaratildi.

---

## 🌿 2. N4 DARAJASI (O'RTA-BOSHLANG'ICH)

> **Mavjud kitoblar**: `500_voprosov_jlpt_n4_n5.pdf`, `Try N4.pdf`, `N4_Shinkanzen Master Grammar 文法.pdf`, `N4 Shinkanzen Reading 読解.pdf`, `N4_Shinkanzen Master Listening 聴解.pdf`, `N4_Shinkanzen Master Listening_CD.rar`.

- [x] **2.1. Minna no Nihongo Shokyu 2 (26–50 darslar)**: Barcha 25 dars uchun kanonik dialoglar (Kaiwa) va audio pleer to'liq tayyor.
- [x] **2.2. N4 Kanji**: 230 ta kanji va 230 ta animatsiyali SVG stroke (100% to'liq).
- [x] **2.3. N4 Grammatika**: 125 ta qoida mavjud.
- [x] **2.4. N4 Mock Exam Set 2**: `500_voprosov_jlpt_n4_n5.pdf` va `N4_Shinkanzen Master Grammar` kitobidan 25 ta yangi haqiqiy imtihon savollari kiritildi va studiya audiolari ulandi.
- [x] **2.5. N4 Shinkanzen Dokkai**: `N4 Shinkanzen Reading 読解.pdf` kitobidan kundalik xatlar, e'lonlar, xorijiy sayohatdagi qiyinchiliklar va kompyuter burchagi qo'llanmasi asosida jami 12 ta Dokkai mashqi to'liq o'zbekcha tahlili bilan mavjud (`n4_read_1` - `n4_read_12`).
- [x] **2.6. N4 Choukai (Studiya Audio)**: `N4_Shinkanzen Master Listening_CD.rar` dagi 89 ta MP3 fayllar `public/audio/choukai/n4/` papkasiga to'liq chiqarilib savollarga ulandi.
- [x] **2.7. Minna Shokyu 2 Lug'at kengaytmasi**: 26–50 darslar uchun 451 ta asosiy so'z va iboralar to'liq kiritilgan (`minna_shokyu2.json`).
- [x] **2.8. Minna no Nihongo Shokyu 2 (26–50) Mondai Tinglash Testlari (CD Audio)**: Barcha 25 dars uchun 175 ta interaktiv tinglash savollari (Step 4) qo'shildi, haqiqiy CD audiolari (`shinkanzen_chokai_n4_CD-A_*.mp3`) bilan integratsiya qilindi, Furigana, o'zbekcha sharhlar va darslar panelida "🎧 Mondai" tugmasi hamda "🎧 Mondai Tinglash (26–50)" filtri faollashtirildi.
- [x] **2.9. N4 500 Mon Savollar Banki**: `Kanji Master N4`, `Shin Kanzen N4 Bunpou` va `Minna Shokyu 2` asosida 24 ta (8 Kanji + 8 Leksika + 8 Grammatika) 3 talik blokli interaktiv savollar to'plami yaratildi (`deck_n4_500_mon`).

---

## 🌊 3. N3 DARAJASI (O'RTA DARAJA)

> **Mavjud kitoblar**: `500_voprosov_jlpt_n3_kanji_vocabul.pdf`, `Kanji Master_N3.pdf`, `N3 _Shin kanzen grammar 文法.pdf`, `N3_新完全マスターN3 語彙.pdf`, `N3_Shin_Kanzen_Master_Dokkai 読解.pdf`, `N3_Shinkanzen Master_Choukai_N3 聴解.pdf`, `N3_Shinkanzen Master_Listening_CD.rar`, `N3_Mimi_Kara_Oboeru (Grammar, Listening, Vocab)`, `Speed_Master_N3 (Bunpou, Goi + Audio)`, `Try N3.pdf`, `Sou Matome N3`.

- [x] **3.1. N3 Kanji**: 337 ta kanji va 337 ta animatsiyali SVG stroke (100% to'liq).
- [x] **3.2. N3 Lug'at**: 1,648 ta so'z mavjud.
- [x] **3.3. N3 Grammatika**: 115 ta qoida mavjud.
- [x] **3.4. N3 500 Mon Savollar Banki**: `500_voprosov_jlpt_n3_kanji_vocabul.pdf` dagi savollardan 20 ta tematik test savollari interaktiv deki yaratildi (`deck_n3_500_mon`).
- [x] **3.5. N3 Mock Exam Set 2**: `500 Mon N3` va `Shin Kanzen N3` asosida 25 ta yangi sifatli imtihon savoli qo'shildi va haqiqiy CD audiolari ulandi.
- [x] **3.6. N3 Shinkanzen Dokkai**: `N3_Shin_Kanzen_Master_Dokkai 読解.pdf` dagi Chuu-bun (o'rta hajmli maqolalar, uyqu va miya xotirasi, qayta ishlash markazi hisoboti) va Jouhou-kensaku (jadvalli e'lonlar) matnlari asosida 12 ta Dokkai mashqi to'liq mavjud (`n3_read_1` - `n3_read_12`).
- [x] **3.7. N3 Choukai (Studiya Audio)**: `N3_Shinkanzen Master_Listening_CD.rar` dagi haqiqiy MP3 audiolari tizimga ulandi.
- [x] **3.8. N3 Chalg'ituvchi Grammatika mashqlari**: `〜わけではない` vs `〜わけがない`, `〜どころではない`, `〜に対して` kabi adashtiruvchi qoidalar bo'yicha 22 ta chuqur qiyosiy kartalar yaratildi (`deck_n3_confusing_grammar`).
- [x] **3.9. N3 Tematik Leksika Master**: 12 ta hayotiy mavzuni (Ish, his-tuyg'ular, jamiyat, taomlar, xarakter, tabiat) qamrab olgan 699 ta muhim so'z va namunaviy gaplar deki yaratildi (`deck_n3_thematic_vocab`).

---

## ⛰️ 4. N2 DARAJASI (YUQORI O'RTA DARAJA)

> **Mavjud kitoblar**: `Kanji Master_N2.pdf`, `Shin_Nihongo_500_Mon_-_JLPT_N2.pdf`, `N2_Shinkanzen Grammar 文法.pdf`, `N2_Shinkanzen Vocabulary 語彙.pdf`, `N2_Shinkanzen_Reading 読解.pdf`, `N2_Shinkanzen_Listening 聴解.pdf`, `N2_Shinkanzen Listening Audio CD.rar` (HAQIQIY MP3 CD MAVJUD!), `Nihongo Sou Matome N2 - Goi.pdf`, `Sou matome kanji N2 o'zbek tili.pdf`, `N2_Shin_Kanzen-Kanji-AudioCD.rar`.

- [x] **4.1. N2 Kanji**: 468 ta kanji va 468 ta animatsiyali SVG stroke (100% to'liq).
- [x] **4.2. N2 Lug'at**: 3,235 ta so'z mavjud.
- [x] **4.3. N2 Grammatika**: 172 ta qoida mavjud.
- [x] **4.4. N2 Mock Exam Set 2**: `Shin_Nihongo_500_Mon_-_JLPT_N2.pdf` va `N2_Shinkanzen Grammar` asosida 25 ta yangi savolli 2-sinov imtihoni yaratildi va studiya CD MP3 fayllari ulandi.
- [x] **4.5. N2 Collocations (So'z birikmalari)**: `N2_Shinkanzen Vocabulary 語彙.pdf` asosida 55 ta eng ko'p tushadigan fe'l-ot bog'lanishlari (`責任を果たす`, `手を打つ`, `意図を汲む`) maxsus Flashcardlar to'plami yaratildi (`deck_n2_collocations`).
- [x] **4.6. N2 Shinkanzen Dokkai**: `N2_Shinkanzen_Reading 読解.pdf` kitobidan tahliliy maqolalar, psixologik durdonalar (Yoshimoto Takaaki) va publitsistik matnlar asosida 12 ta Dokkai mashqi to'liq mavjud (`n2_read_1` - `n2_read_12`).
- [x] **4.7. N2 Choukai (Studiya Audio)**: `book_3/N2_Shinkanzen Listening Audio CD.rar` dagi haqiqiy MP3 lar chiqarilib savollarga ulandi.
- [x] **4.8. N2 500 Mon Savollar Banki**: `Shin_Nihongo_500_Mon_-_JLPT_N2.pdf` rasmiy kitobidan 24 ta (8 Kanji + 8 Leksika + 8 Grammatika) 3 talik blokli interaktiv savollar to'plami yaratildi (`deck_n2_500_mon`).

---

## 🏔️ 5. N1 DARAJASI (PROFESSIONAL / ENG YUQORI DARAJA)

> **Mavjud kitoblar**: `Kanji Master_N1.pdf`, `Shin_Nihongo_500_Mon_-_JLPT_N1.pdf`, `N1_Shin_Kanzen_Grammar 文法.pdf`, `N1_Shin_Kanzen_Reading 読解.pdf`, `N1_Shin_Kanzen_Listening 聴解.pdf`, `N1_Shin_Kanzen_Listening_Answers.pdf`, `N1 grammatika kitob.pdf`, `日本語総まとめ. N1 (文法, 漢字, 語彙, 読解)`.

- [x] **5.1. N1 Kanji**: 877 ta kanji va 877 ta animatsiyali SVG stroke (100% to'liq).
- [x] **5.2. N1 Lug'at**: 1,897 ta so'z mavjud.
- [x] **5.3. N1 Grammatika**: 151 ta qoida mavjud (105 tadan 151 taga kengaytirildi).
- [x] **5.4. N1 Mock Exam Set 2**: `Shin_Nihongo_500_Mon_-_JLPT_N1.pdf` va `N1_Shin_Kanzen_Grammar 文法.pdf` asosida 25 ta murakkab savolli 2-sinov imtihoni to'liq kiritildi.
- [x] **5.5. N1 Grammatika kengaytmasi (105 tadan 150+ taga)**: `日本語総まとめ. N1, 文法` va `N1 grammatika kitob.pdf` kitoblaridagi barcha arxaik va kam uchraydigan, ammo imtihonda tushadigan ifodalar kiritildi (jami 151 ta qoida).
- [x] **5.6. N1 Yojijukugo (4 ta iyeroglifli aforizmlar)**: `Kanji Master N1` va `日本語総まとめ N1 語彙` asosida 49 ta eng muhim to'rt iyeroglifli aforizm va idiomalar to'plami yaratildi (`deck_n1_yojijukugo`).
- [x] **5.7. N1 Shinkanzen Dokkai**: `N1_Shin_Kanzen_Reading 読解.pdf` dagi falsafiy, sotsiologik (Kang Sang-jung), ilmiy metodologiya (Tomas Kun) va murakkab publitsistik matnlar tahlilidan iborat 12 ta Dokkai mashqi to'liq mavjud (`n1_read_1` - `n1_read_12`).
- [x] **5.8. N1 500 Mon Savollar Banki**: `Nihongo no Mori N1 (520 betlik)` va `Kanji Master N1` asosida 24 ta (8 Kanji + 8 Ilg'or Leksika + 8 Oliy Grammatika) 3 talik blokli interaktiv savollar to'plami yaratildi (`deck_n1_500_mon`).

---

## 🏆 6. JLPT RASMIY MOCK IMTIHONLARI 3-TO'PLAM (SET 3 - BARCHA DARAJALAR: N5–N1)

> **Maqsad**: Barcha 5 ta JLPT darajasi (N5, N4, N3, N2, N1) bo'yicha Speed Master va Choukai Masterclass formatidagi to'liq 3-sinov to'plamini taqdim etish.

- [x] **6.1. JLPT N5 Mock Set 3**: 25 ta savol (13 ta Lug'at/Grammatika, 6 ta Dokkai matni, 6 ta Choukai audiosi - `/audio/choukai/n5/minna_shokyu_1_005.mp3..010.mp3`).
- [x] **6.2. JLPT N4 Mock Set 3**: 25 ta savol (13 ta Lug'at/Grammatika, 6 ta Dokkai matni, 6 ta Choukai audiosi - `/audio/choukai/n4/shinkanzen_chokai_n4_CD-B_001.mp3..006.mp3`).
- [x] **6.3. JLPT N3 Mock Set 3**: 25 ta savol (13 ta Lug'at/Grammatika, 6 ta Dokkai matni, 6 ta Choukai audiosi - `/audio/choukai/n3/04 Track 4.mp3..09 Track 9.mp3`).
- [x] **6.4. JLPT N2 Mock Set 3**: 25 ta savol (13 ta Lug'at/Grammatika, 6 ta Dokkai matni, 6 ta Choukai audiosi - `/audio/choukai/n2/Track04.mp3..Track09.mp3`).
- [x] **6.5. JLPT N1 Mock Set 3**: 25 ta savol (13 ta Ilg'or Lug'at/Grammatika, 6 ta Katta Falsafiy/Ijtimoiy Dokkai matni, 6 ta Ilmiy Konferensiya Choukai skriptlari).
- [x] **6.6. ExamService & UI Integratsiyasi**: `builtin_*_set3` sluglari orqali imtihon sahifasida 3-to'plam tanlash va avtomatik diagnostika to'liq ishga tushirildi.

---

## 📦 KITOBLARNING TO'LIQLIK HOLATI (BOOK_3 YUKLANGANDAN KEYIN)

1. **N5**:
   - `Minna Shokyu 1 CD Audio` (MP3) yuklandi (`book_3/0-0001-01-230020-0.zip`)!
   - `500 Mon N4/N5`, `Try N5`, `N5 Original Testlar` mavjud.
2. **N4**:
   - `Kanji Master N4` yuklandi (`book_3/Kanji Master_N4.pdf`)!
   - `Minna no Nihongo Shokyu 2 (26–50) 2nd Edition` yuklandi (`book_3/new Minna_no_Nihongo_Shokyu_II_Dai_2 (2).pdf`)!
   - `Shin Kanzen Master N4 Bunpou (Grammar)` yuklandi (`book_3/Bunpou.pdf`)!
   - `N4 Shinkanzen Listening CD (MP3)` mavjud.
3. **N3**:
   - Barcha kitoblar va `N3 Shinkanzen Listening CD (MP3)` to'liq mavjud!
4. **N2**:
   - `N2 Shinkanzen Listening CD Audio` (MP3) yuklandi (`book_3/N2_Shinkanzen Listening Audio CD.rar`)!
   - Barcha yozma va audio materiallar to'liq.
5. **N1**:
   - Barcha yozma kitoblar to'liq: `500 Mon N1`, `Kanji Master N1`, `Shin Kanzen Grammar`, `Shin Kanzen Reading`, `Sou Matome (Bunpou, Kanji, Goi, Dokkai)`.
   - Audio CD majburiy emas (Admin Choukai orqali xohlagan paytda biriktirish mumkin).

---

## 🛠️ 7. ADMIN STUDIO & CONTENT EDITOR (DOKKAI, CHOUKAI AUDIO VA PRESET DECKS)

> **Maqsad**: Admin panel orqali oʻqituvchilar va ma'murlar yangi Dokkai matnlari, Choukai audiolari va Flashcard deklarni bevosita vizual tahrirlashi, sinab ko'rishi va boshqarishini ta'minlash.

- [x] **7.1. AdminDokkaiManager (Vizual O'qish Boshqaruvi)**:
  - Base vs Custom matnlar ko'rinishi, daraja (N5–N1) va tur (short, medium, information_retrieval) filtrlari.
  - Furigana syntax helper (`[漢字|かんじ]`), savollar konstruktori, live Furigana preview.
  - Bazaviy matnlarni bir bosish bilan shablon sifatida klonlash va yangi tahrir yaratish.
  - JSON import/eksport va zaxira nusxalash.
- [x] **7.2. JlptReadingPage Dinamik Integratsiyasi**:
  - `CustomContentService.getMergedReadingPassages(selectedLevel)` orqali bazaviy va maxsus qo'shilgan/tahrirlangan matnlarni birlashtirib ko'rsatish.
- [x] **7.3. Choukai Audio Library Explorer (`AdminChoukaiManager`)**:
  - Loyihadagi mavjud 259 ta professional studiya audio fayllari katalogi (`choukaiAudioLibrary.ts`).
  - N5 (10 ta), N4 (86 ta), N3 (80 ta), N2 (83 ta) audiolarni jonli eshitish (Play/Pause preview), qidirish va savolga to'g'ridan-to'g'ri biriktirish imkoniyati.
- [x] **7.4. Preset Decks Explorer & Editor (`AdminContentStudio`)**:
  - Rasmiy deklarni (500 Mon N1/N2/N4, Yojijukugo, Collocations, Thematic Vocab) kartama-karta ko'rish va qidirish.
  - Kartalarning Kanji, O'qilishi, O'zbekcha tarjimasi va Misollarini tahrirlash hamda `GlobalFlashcardOverrideService` orqali saqlash.
- [x] **7.5. Unit Testlar va Build Tekshiruvi**:
  - `CustomContentDokkai.test.ts` (7 ta test) va `CustomContentService.test.ts` (17 ta test) 100% muvaffaqiyatli o'tdi.
  - `npx tsc --noEmit` 0 ta xato, `npm run build` muvaffaqiyatli yakunlandi.

---

## 🎯 8. JLPT MOCK EXAM DIAGNOSTIKA & SHAXSIY REJAGA MAXSUS MASHQLARNI BIRIKTIRISH

> **Maqsad**: Imtihon topshirgandan so'ng talabaning zaif nuqtalarini (Lug'at, Kanji, Grammatika, Dokkai, Choukai) avtomatik aniqlab, 4 ustunli chuqur tahlilni ko'rsatish va 1-bosish orqali Shaxsiy O'rganish Rejasiga (`PersonalLearningPlan`) mos mashqlarni kiritish.

- [x] **8.1. JlptMockDiagnosticService (4 Ustunli Diagnostika Dvigateli)**:
  - `kanji_vocab`, `grammar`, `reading`, `listening` bo'yicha to'g'rilik foizlari va ballarni tahlil qilish.
  - Sectional cutoff (<19 ball) va kritik zaifliklarni aniqlab, aniq daraja-spesifik `RemediationAction` mashqlarini yaratish (Dokkai matnlari, Choukai audiolari, 500 Mon kvizlari, Anki SRS).
  - Shaxsiy o'rganish rejasi uchun `WeeklyPlanTask` ob'ektlarini generatsiya qilish.
- [x] **8.2. PersonalLearningPlanService.injectRemediationTasks**:
  - Foydalanuvchining faol rejasi kunlariga (`monday`...`sunday`) yangi maxsus amaliy mashg'ulotlarni qo'shish va takrorlanishdan himoyalash.
  - Reja bo'lmagan taqdirda, darajaga mos boshlang'ich haftalik reja scaffoldini avtomatik yaratish.
  - `safeLocalStorage` va Supabase o'rtasida UUID muvofiqligi bilan xavfsiz sinxronlash hamda `study_planner_plan_updated` hodisasini yuborish.
- [x] **8.3. MasteryEngine & WeaknessEngine Integratsiyasi**:
  - `JlptMockExamPage.tsx` imtihon topshirilganda barcha 4 ta soha (`reading`, `listening`, `grammar`, `vocabulary`) bo'yicha dalillarni (`recordEvidence`) ro'yxatga oladi.
- [x] **8.4. Natijalar Kartochkasi UI Boyitilishi (`JlptExamResultCard.tsx`)**:
  - 4 ustun bo'yicha vizual foiz indikatorlari, daraja nishonlari va o'zbekcha sharhlar.
  - "🎯 Zaif Bo'limlar Bo'yicha Maxsus Mashqlar" bloki: to'g'ridan-to'g'ri bog'langan havolalar bilan.
  - "⚡ Shaxsiy Rejamga Biriktirish" interaktiv tugmasi: jonli saqlanish holati, bildirishnoma va reja sahifasiga tezkor o'tish tugmasi.
- [x] **8.5. Unit Testlar va Build Tekshiruvi**:
  - `JlptMockDiagnosticRemediation.test.ts` (3/3 testlar muvaffaqiyatli).
  - `JlptExamResultCard.test.tsx` (8/8 testlar muvaffaqiyatli).
  - `PersonalLearningPlan.test.ts`, `ExamService.test.ts`, `CustomContentDokkai.test.ts` regressiya testlari to'liq o'tdi.
  - `npx tsc --noEmit` 0 ta xato, `npm run build` muvaffaqiyatli yakunlandi.
