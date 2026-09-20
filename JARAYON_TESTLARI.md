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
- [x] **1.6. N5 Dokkai (O'qish)**: Hozirgi 6 ta matn `みんなの日本語初級1標準問題集` va qo'llanmalar asosida 10 tagacha yetkazildi (har birida to'liq o'zbekcha sharh va savollar mavjud).
- [x] **1.7. N5 Amaliy Test Banki**: `N5 so'z testi! Orginal JLPT testdan olindi!.pdf` asosida 33 ta original rasmiy imtihon savollari interaktiv dek sifatida kiritildi (`deck_n5_test_bank`).

---

## 🌿 2. N4 DARAJASI (O'RTA-BOSHLANG'ICH)

> **Mavjud kitoblar**: `500_voprosov_jlpt_n4_n5.pdf`, `Try N4.pdf`, `N4_Shinkanzen Master Grammar 文法.pdf`, `N4 Shinkanzen Reading 読解.pdf`, `N4_Shinkanzen Master Listening 聴解.pdf`, `N4_Shinkanzen Master Listening_CD.rar`.

- [x] **2.1. Minna no Nihongo Shokyu 2 (26–50 darslar)**: Barcha 25 dars uchun kanonik dialoglar (Kaiwa) va audio pleer to'liq tayyor.
- [x] **2.2. N4 Kanji**: 230 ta kanji va 230 ta animatsiyali SVG stroke (100% to'liq).
- [x] **2.3. N4 Grammatika**: 125 ta qoida mavjud.
- [x] **2.4. N4 Mock Exam Set 2**: `500_voprosov_jlpt_n4_n5.pdf` va `N4_Shinkanzen Master Grammar` kitobidan 25 ta yangi haqiqiy imtihon savollari kiritildi va studiya audiolari ulandi.
- [x] **2.5. N4 Shinkanzen Dokkai**: `N4 Shinkanzen Reading 読解.pdf` kitobidan kundalik xatlar, e'lonlar va qisqa matnlar asosida jami 10 ta Dokkai mashqi to'liq o'zbekcha tahlili bilan mavjud.
- [x] **2.6. N4 Choukai (Studiya Audio)**: `N4_Shinkanzen Master Listening_CD.rar` dagi MP3 fayllar platformaga chiqarilib savollarga ulandi.
- [x] **2.7. Minna Shokyu 2 Lug'at kengaytmasi**: 26–50 darslar uchun 451 ta asosiy so'z va iboralar to'liq kiritilgan (`minna_shokyu2.json`).

---

## 🌊 3. N3 DARAJASI (O'RTA DARAJA)

> **Mavjud kitoblar**: `500_voprosov_jlpt_n3_kanji_vocabul.pdf`, `Kanji Master_N3.pdf`, `N3 _Shin kanzen grammar 文法.pdf`, `N3_新完全マスターN3 語彙.pdf`, `N3_Shin_Kanzen_Master_Dokkai 読解.pdf`, `N3_Shinkanzen Master_Choukai_N3 聴解.pdf`, `N3_Shinkanzen Master_Listening_CD.rar`, `N3_Mimi_Kara_Oboeru (Grammar, Listening, Vocab)`, `Speed_Master_N3 (Bunpou, Goi + Audio)`, `Try N3.pdf`, `Sou Matome N3`.

- [x] **3.1. N3 Kanji**: 337 ta kanji va 337 ta animatsiyali SVG stroke (100% to'liq).
- [x] **3.2. N3 Lug'at**: 1,648 ta so'z mavjud.
- [x] **3.3. N3 Grammatika**: 115 ta qoida mavjud.
- [x] **3.4. N3 500 Mon Savollar Banki**: `500_voprosov_jlpt_n3_kanji_vocabul.pdf` dagi savollardan 20 ta tematik test savollari interaktiv deki yaratildi (`deck_n3_500_mon`).
- [x] **3.5. N3 Mock Exam Set 2**: `500 Mon N3` va `Shin Kanzen N3` asosida 25 ta yangi sifatli imtihon savoli qo'shildi va haqiqiy CD audiolari ulandi.
- [x] **3.6. N3 Shinkanzen Dokkai**: `N3_Shin_Kanzen_Master_Dokkai 読解.pdf` dagi Chuu-bun (o'rta hajmli maqolalar) va Jouhou-kensaku (jadvalli e'lonlar) matnlari asosida 10 ta Dokkai mashqi to'liq mavjud.
- [x] **3.7. N3 Choukai (Studiya Audio)**: `N3_Shinkanzen Master_Listening_CD.rar` dagi haqiqiy MP3 audiolari tizimga ulandi.
- [x] **3.8. N3 Chalg'ituvchi Grammatika mashqlari**: `〜わけではない` vs `〜わけがない`, `〜どころではない`, `〜に対して` kabi adashtiruvchi qoidalar bo'yicha 22 ta chuqur qiyosiy kartalar yaratildi (`deck_n3_confusing_grammar`).

---

## ⛰️ 4. N2 DARAJASI (YUQORI O'RTA DARAJA)

> **Mavjud kitoblar**: `Kanji Master_N2.pdf`, `Shin_Nihongo_500_Mon_-_JLPT_N2.pdf`, `N2_Shinkanzen Grammar 文法.pdf`, `N2_Shinkanzen Vocabulary 語彙.pdf`, `N2_Shinkanzen_Reading 読解.pdf`, `N2_Shinkanzen_Listening 聴解.pdf`, `N2_Shinkanzen Listening Audio CD.rar` (HAQIQIY MP3 CD MAVJUD!), `Nihongo Sou Matome N2 - Goi.pdf`, `Sou matome kanji N2 o'zbek tili.pdf`, `N2_Shin_Kanzen-Kanji-AudioCD.rar`.

- [x] **4.1. N2 Kanji**: 468 ta kanji va 468 ta animatsiyali SVG stroke (100% to'liq).
- [x] **4.2. N2 Lug'at**: 3,235 ta so'z mavjud.
- [x] **4.3. N2 Grammatika**: 172 ta qoida mavjud.
- [x] **4.4. N2 Mock Exam Set 2**: `Shin_Nihongo_500_Mon_-_JLPT_N2.pdf` va `N2_Shinkanzen Grammar` asosida 25 ta yangi savolli 2-sinov imtihoni yaratildi va studiya CD MP3 fayllari ulandi.
- [x] **4.5. N2 Collocations (So'z birikmalari)**: `N2_Shinkanzen Vocabulary 語彙.pdf` asosida 55 ta eng ko'p tushadigan fe'l-ot bog'lanishlari (`責任を果たす`, `手を打つ`, `意図を汲む`) maxsus Flashcardlar to'plami yaratildi (`deck_n2_collocations`).
- [x] **4.6. N2 Shinkanzen Dokkai**: `N2_Shinkanzen_Reading 読解.pdf` kitobidan tahliliy maqolalar va publitsistik matnlar asosida 10 ta Dokkai mashqi to'liq mavjud.
- [x] **4.7. N2 Choukai (Studiya Audio)**: `book_3/N2_Shinkanzen Listening Audio CD.rar` dagi haqiqiy MP3 lar chiqarilib savollarga ulandi.

---

## 🏔️ 5. N1 DARAJASI (PROFESSIONAL / ENG YUQORI DARAJA)

> **Mavjud kitoblar**: `Kanji Master_N1.pdf`, `Shin_Nihongo_500_Mon_-_JLPT_N1.pdf`, `N1_Shin_Kanzen_Grammar 文法.pdf`, `N1_Shin_Kanzen_Reading 読解.pdf`, `N1_Shin_Kanzen_Listening 聴解.pdf`, `N1_Shin_Kanzen_Listening_Answers.pdf`, `N1 grammatika kitob.pdf`, `日本語総まとめ. N1 (文法, 漢字, 語彙, 読解)`.

- [x] **5.1. N1 Kanji**: 877 ta kanji va 877 ta animatsiyali SVG stroke (100% to'liq).
- [x] **5.2. N1 Lug'at**: 1,897 ta so'z mavjud.
- [x] **5.3. N1 Grammatika**: 151 ta qoida mavjud (105 tadan 151 taga kengaytirildi).
- [x] **5.4. N1 Mock Exam Set 2**: `Shin_Nihongo_500_Mon_-_JLPT_N1.pdf` va `N1_Shin_Kanzen_Grammar 文法.pdf` asosida 25 ta murakkab savolli 2-sinov imtihoni to'liq kiritildi.
- [x] **5.5. N1 Grammatika kengaytmasi (105 tadan 150+ taga)**: `日本語総まとめ. N1, 文法` va `N1 grammatika kitob.pdf` kitoblaridagi barcha arxaik va kam uchraydigan, ammo imtihonda tushadigan ifodalar kiritildi (jami 151 ta qoida).
- [x] **5.6. N1 Yojijukugo (4 ta iyeroglifli aforizmlar)**: `Kanji Master N1` va `日本語総まとめ N1 語彙` asosida 49 ta eng muhim to'rt iyeroglifli aforizm va idiomalar to'plami yaratildi (`deck_n1_yojijukugo`).
- [x] **5.7. N1 Shinkanzen Dokkai**: `N1_Shin_Kanzen_Reading 読解.pdf` dagi falsafiy, ilmiy-ommabop va murakkab publitsistik matnlar tahlilidan iborat 10 ta Dokkai mashqi to'liq mavjud.

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
