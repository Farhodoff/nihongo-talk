export interface DailyBlitzQuestion {
  id: string;
  type: 'kanji' | 'grammar' | 'vocab';
  typeLabel: string;
  level: 'N5' | 'N4' | 'N3';
  prompt: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanationUz: string;
  explanationJa?: string;
}

export const KANJI_BLITZ_POOL: DailyBlitzQuestion[] = [
  {
    id: 'k-1',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N5',
    prompt: '日',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Kun, Quyosh', 'Oy, Tungi osmon', 'Olov, Issiqlik', "Daraxt, Yog'och"],
    correctIndex: 0,
    explanationUz:
      "『日』(hi / nichi) — Kun yoki Quyosh ma'nosini bildiradi. Masalan: 今日 (kyou) - bugun.",
  },
  {
    id: 'k-2',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N5',
    prompt: '本',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Suv', 'Kitob, Asos', 'Odam, Shaxs', 'Bino, Uy'],
    correctIndex: 1,
    explanationUz:
      '『本』(hon / moto) — Kitob yoki narsaning asosi / ildizi degani. Masalan: 日本 (Nihon) - Yaponiya.',
  },
  {
    id: 'k-3',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N5',
    prompt: '駅',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Poyezd bekati (Stantsiya)', 'Aeroport', 'Kasalxona', 'Kutubxona'],
    correctIndex: 0,
    explanationUz:
      '『駅』(eki) — Poyezd yoki metro bekati (stantsiya) degani. Masalan: 新宿駅 (Shinjuku-eki).',
  },
  {
    id: 'k-4',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N5',
    prompt: '車',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Kema', 'Avtomobil / Mashina', 'Samolyot', 'Velosiped'],
    correctIndex: 1,
    explanationUz:
      "『車』(kuruma / sha) — Avtomobil, g'ildirakli mashina. Masalan: 電車 (densha) - elektr poyezd.",
  },
  {
    id: 'k-5',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N4',
    prompt: '旅',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Sayohat', 'Ish, Kasb', "Dars, Ta'lim", 'Kiyim'],
    correctIndex: 0,
    explanationUz:
      "『旅』(tabi / ryo) — Sayohat ma'nosida. Masalan: 旅行 (ryokou) - sayohat qilish.",
  },
  {
    id: 'k-6',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N5',
    prompt: '友',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Dushman', "Do'st", "Qo'shni", "O'qituvchi"],
    correctIndex: 1,
    explanationUz: "『友』(tomo / yuu) — Do'st degani. Masalan: 友達 (tomodachi) - do'stlar.",
  },
  {
    id: 'k-7',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N4',
    prompt: '親',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Ota-ona, Yaqin inson', 'Notanish odam', 'Bola, Farzand', 'Direktor'],
    correctIndex: 0,
    explanationUz:
      '『親』(oya / shin) — Ota-ona yoki yaqin mehrli inson. Masalan: 両親 (ryoushin) - ota-ona, 親切 (shinsetsu) - mehribon.',
  },
  {
    id: 'k-8',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N5',
    prompt: '雨',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Qor', "Yomg'ir", 'Shamol', 'Bulut'],
    correctIndex: 1,
    explanationUz:
      "『雨』(ame / u) — Yomg'ir degani. Masalan: 雨が降る (ame ga furu) - yomg'ir yog'yapti.",
  },
  {
    id: 'k-9',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N4',
    prompt: '重',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Yengil', "Og'ir, Muhim", 'Tezkor', "Qorong'i"],
    correctIndex: 1,
    explanationUz:
      "『重』(omoi / juu) — Og'ir yoki salmoqli/muhim. Masalan: 重い (omoi) - og'ir yuk, 重要 (juuyou) - muhim.",
  },
  {
    id: 'k-10',
    type: 'kanji',
    typeLabel: 'Kanji',
    level: 'N5',
    prompt: '食',
    question: "Ushbu Kanji qanday ma'noni anglatadi?",
    options: ['Ichmoq', 'Yemoq, Ovqat', 'Uxlamoq', 'Yugurmoq'],
    correctIndex: 1,
    explanationUz:
      "『食』(ta / shoku) — Yemoq, oziq-ovqat ma'nosida. Masalan: 食べる (taberu) - yemoq, 食事 (shokuji) - ovqatlanish.",
  },
];

export const GRAMMAR_BLITZ_POOL: DailyBlitzQuestion[] = [
  {
    id: 'g-1',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N5',
    prompt: '私は日本へ行ったこと（　）あります。',
    question: "Qavs o'rniga mos qo'shimchani qo'ying:",
    options: ['が', 'を', 'に', 'で'],
    correctIndex: 0,
    explanationUz:
      "Qolip: [Fe'l past shakli] + ことがある. Tajribani ifodalaganda 'こと'dan keyin 'が' keladi: ことがあります (borganman).",
  },
  {
    id: 'g-2',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N5',
    prompt: '日本料理を（　）たいです。',
    question: "Xohish-istakni bildirish uchun to'g'ri fe'l shaklini tanlang:",
    options: ['食べ', '食べる', '食べた', '食べて'],
    correctIndex: 0,
    explanationUz:
      "Qolip: [Fe'l ます asosi] + たい. 食べます fe'lining o'zagi '食べ' + たい = 食べたいです (yegim kelmoqda).",
  },
  {
    id: 'g-3',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N4',
    prompt: '音楽を（　）ながら勉強します。',
    question: "Bir vaqtning o'zida ikkita ish bajarilishini ifodalovchi shaklni tanlang:",
    options: ['聞き', '聞く', '聞いて', '聞かない'],
    correctIndex: 0,
    explanationUz:
      "Qolip: [Fe'l ます asosi] + ながら. 聞きます -> 聞き + ながら = 聞きながら (eshitgan holda dars qilaman).",
  },
  {
    id: 'g-4',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N4',
    prompt: 'ここでタバコを吸っ（　）いけません。',
    question: "Taqiqni ifodalovchi to'g'ri qo'shimchani tanlang:",
    options: ['ては', 'では', 'たら', 'ても'],
    correctIndex: 0,
    explanationUz:
      "Qolip: [Fe'l て shakli] + は + いけません. '吸って' + は + いけません = Chekish taqiqlanadi (mumkin emas).",
  },
  {
    id: 'g-5',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N5',
    prompt: '毎朝、7時（　）起きます。',
    question: "Aniq vaqtni ko'rsatuvchi to'g'ri yuklamani tanlang:",
    options: ['に', 'で', 'を', 'へ'],
    correctIndex: 0,
    explanationUz:
      "Aniq soat va vaqt ifodalanayotganda doimo 'に' predlogi ishlatiladi: 7時に起きます (soat 7 da uyg'onaman).",
  },
  {
    id: 'g-6',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N4',
    prompt: '雨が降っている（　）、傘を持っていきましょう。',
    question: "Sababni ifodalovchi muloyim bog'lovchini tanlang:",
    options: ['ので', 'のに', 'けど', 'たら'],
    correctIndex: 0,
    explanationUz:
      "Qolip: [Sifat/fe'l oddiy shakli] + ので. Ob'yektiv tabiiy sababni bildiradi: 雨が降っているので (yomg'ir yog'ayotganligi sababli).",
  },
  {
    id: 'g-7',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N5',
    prompt: '図書館へ本を（　）に行きます。',
    question: 'Biron maqsad bilan borishni ifodalovchi shaklni tanlang:',
    options: ['借り', '借りる', '借りた', '借りて'],
    correctIndex: 0,
    explanationUz:
      "Qolip: [Fe'l ます o'zagi] + に + 行きます. 借ります -> 借り + に行きます = Kitob olish maqsadida boraman.",
  },
  {
    id: 'g-8',
    type: 'grammar',
    typeLabel: 'Grammatika',
    level: 'N3',
    prompt: '暗くならない（　）うちに、家に帰りましょう。',
    question: "Fursatdan foydalanib biror narsa qilish ifodasini to'ldiring:",
    options: ['（qoʻshimchasiz）', 'の', 'に', 'な'],
    correctIndex: 0,
    explanationUz:
      "Qolip: [Fe'l inkor (ない) shakli] + うちに. Qo'shimchasiz to'g'ridan-to'g'ri qo'shiladi: 暗くならないうちに (qorong'i tushmasidan avval).",
  },
];

export const VOCAB_BLITZ_POOL: DailyBlitzQuestion[] = [
  {
    id: 'v-1',
    type: 'vocab',
    typeLabel: "So'z ma'nosi",
    level: 'N5',
    prompt: '約束 (やくそく - yakusoku)',
    question: "Ushbu so'zning o'zbekcha ma'nosi qaysi?",
    options: ["Va'da / Kelishuv", 'Vaqt / Soat', 'Ruxsatnoma', 'Taklifnoma'],
    correctIndex: 0,
    explanationUz:
      "『約束』(yakusoku) — Va'da yoki uchrashuv kelishuvi. Misol: 約束を守る (va'dani bajarmoq).",
  },
  {
    id: 'v-2',
    type: 'vocab',
    typeLabel: "So'z ma'nosi",
    level: 'N5',
    prompt: '便利 (べんり - benri)',
    question: "Ushbu sifat qanday ma'noni anglatadi?",
    options: ['Qulay / Oson', 'Noqulay / Qiyin', 'Xavfli', 'Qimmatbaho'],
    correctIndex: 0,
    explanationUz:
      '『便利』(benri) — Qulay, asqotadigan. Misol: スマホはとても便利です (Smartfon juda qulay).',
  },
  {
    id: 'v-3',
    type: 'vocab',
    typeLabel: "So'z ma'nosi",
    level: 'N4',
    prompt: '手伝う (てつだう - tetsudau)',
    question: "Ushbu fe'l qanday ma'noni anglatadi?",
    options: ['Yordam bermoq', 'Qo‘l ushlamoq', 'Tugatmoq', 'Dam olmoq'],
    correctIndex: 0,
    explanationUz:
      "『手伝う』(tetsudau) — Yordamlashmoq, ko'maklashmoq. Misol: 母の料理を手伝う (Onamga ovqatda yordam bermoq).",
  },
  {
    id: 'v-4',
    type: 'vocab',
    typeLabel: "So'z ma'nosi",
    level: 'N5',
    prompt: '大切 (たいせつ - taisetsu)',
    question: "Ushbu so'zning tarjimasi nima?",
    options: ['Qadrli / Muhim', 'Katta / Ulkan', 'Arzon / Oddiy', 'Xursand'],
    correctIndex: 0,
    explanationUz:
      "『大切』(taisetsu) — Qadrli, ahamiyatli, muhim. Misol: 大切な友達 (Qadrli do'stim).",
  },
  {
    id: 'v-5',
    type: 'vocab',
    typeLabel: "So'z ma'nosi",
    level: 'N4',
    prompt: '間に合う (まにあう - ma ni au)',
    question: "Ushbu ibora qanday ma'noni bildiradi?",
    options: ['Vaqtida ulgurmoq', 'Kech qolmoq', 'Uchrashib qolmoq', "Yo'lda qolmoq"],
    correctIndex: 0,
    explanationUz:
      "『間に合う』(ma ni au) — Biror narsaga o'z vaqtida yetib bormoq / ulgurmoq. Misol: 電車に間に合う (Poyezdga ulgurmoq).",
  },
  {
    id: 'v-6',
    type: 'vocab',
    typeLabel: "So'z ma'nosi",
    level: 'N5',
    prompt: '危ない (あぶない - abunai)',
    question: "Ushbu so'zning ma'nosi nima?",
    options: ['Xavfli / Ehtiyot bo‘l', 'Tinch / Osuda', 'Toza / Pokiza', 'Issiq'],
    correctIndex: 0,
    explanationUz: "『危ない』(abunai) — Xavfli, xatarli yoki 'ehtiyot bo'l!' ogohlantirishi.",
  },
  {
    id: 'v-7',
    type: 'vocab',
    typeLabel: "So'z ma'nosi",
    level: 'N4',
    prompt: '準備 (じゅんび - junbi)',
    question: "Ushbu so'zning ma'nosi qaysi?",
    options: ['Tayyorgarlik / Hozirlik', 'Sinov / Imtihon', 'Natija', 'Hamkorlik'],
    correctIndex: 0,
    explanationUz:
      "『準備』(junbi) — Tayyorgarlik ko'rish. Misol: 旅行の準備をする (Sayohatga tayyorgarlik ko'rmoq).",
  },
];

export function getTodaysBlitzQuestions(date: Date = new Date()): DailyBlitzQuestion[] {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayNumber = year * 365 + month * 31 + day;

  const kanjiIndex = Math.abs(dayNumber) % KANJI_BLITZ_POOL.length;
  const grammarIndex = Math.abs(dayNumber * 3) % GRAMMAR_BLITZ_POOL.length;
  const vocabIndex = Math.abs(dayNumber * 7) % VOCAB_BLITZ_POOL.length;

  return [
    KANJI_BLITZ_POOL[kanjiIndex],
    GRAMMAR_BLITZ_POOL[grammarIndex],
    VOCAB_BLITZ_POOL[vocabIndex],
  ];
}

export function getTodayStorageKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `jlpt_daily_blitz_${y}-${m}-${d}`;
}
