/**
 * roadmapMilestones.ts
 * Generates authentic, pedagogically structured learning milestones for Personal Learning Plans.
 * Replaces generic mock placeholders with concrete study objectives, kanji, grammar, listening, and exam simulations.
 */

import { SupportedLanguage } from '../types/lesson';
import { PlanGoalType } from '../types/learningPlan';

export interface RoadmapMilestone {
  month: number;
  title: string;
  desc: string;
  focusAreas: string[];
}

interface MilestoneTemplate {
  titleUz: string;
  titleEn: string;
  descUz: string;
  descEn: string;
  focusAreas: string[];
}

const JLPT_ROADMAP_TEMPLATES: Record<string, MilestoneTemplate[]> = {
  N5: [
    {
      titleUz: '1-Bosqich: Hiragana, Katakana & Asosiy Partikllar',
      titleEn: 'Stage 1: Hiragana, Katakana & Core Particles',
      descUz:
        'Yapon alifbosi, talaffuz asoslari, birinchi 40 ta asosiy Kanji va partikllar (は, が, を, に, で) bilan tanishuv.',
      descEn:
        'Mastering the Japanese syllabaries, first 40 basic Kanji, and essential case particles (wa, ga, wo, ni, de).',
      focusAreas: ['Kana', 'Kanji Basics', 'Particles', 'Greetings'],
    },
    {
      titleUz: "2-Bosqich: Fe'l Shakllari & Kundalik Ehtiyojlar",
      titleEn: 'Stage 2: Verb Forms & Daily Life Expressions',
      descUz:
        "Fe'l turlari (I, II, III guruh), ~te, ~nai va ~masu shakllari, Minna no Nihongo boshlang'ich darslari.",
      descEn:
        'Group I, II, and III verbs, ~te, ~nai, and ~masu conjugations, everyday vocabulary expansion.',
      focusAreas: ['Verb Conjugation', 'Te-form', 'Daily Vocabulary'],
    },
    {
      titleUz: '3-Bosqich: Sifatlar, Taqqoslash & Tinglab Tushunish',
      titleEn: 'Stage 3: Adjectives, Comparisons & Audio Comprehension',
      descUz:
        "I-keiyoushi va Na-keiyoushi sifatlari, taqqoslash sintaksisi, Choukai (listening) boshlang'ich mashqlari.",
      descEn:
        'Mastering i-adjectives and na-adjectives, comparative sentence structures, introductory audio listening.',
      focusAreas: ['Adjectives', 'Listening Basics', 'Sentence Structure'],
    },
    {
      titleUz: '4-Bosqich: N5 Kanjilari & Qisqa Dokkai Matnlari',
      titleEn: 'Stage 4: Complete N5 Kanji & Short Reading Passages',
      descUz:
        "N5 darajasidagi barcha 100+ ta kanjilar, Furigana bilan qisqa hikoya va e'lonlarni o'qib tushunish.",
      descEn:
        'Full coverage of 100+ N5 Kanji, reading simple notices, stories, and contextual dialogues.',
      focusAreas: ['100 Kanji', 'Reading Comprehension', 'Vocabulary Mastery'],
    },
    {
      titleUz: '5-Bosqich: Imtihon Strategiyalari & Xatolar Ustida Ishlash',
      titleEn: 'Stage 5: Exam Strategy & Error Vault Remediation',
      descUz:
        "Rasmiy N5 namunaviy savollari, tezkor partikl testlari va Error Vault dagi xatolarni to'liq tahlil qilish.",
      descEn:
        'Official N5 sample questions, rapid particle quizzes, and deep error vault mistake analysis.',
      focusAreas: ['Error Analysis', 'Sample Quizzes', 'Grammar Drills'],
    },
    {
      titleUz: "6-Bosqich: To'liq Mock Imtihon & Yakuniy Mustahkamlash",
      titleEn: 'Stage 6: Full-length Mock Exam & Final Confidence',
      descUz:
        "Vaqt nazorati ostida to'liq JLPT N5 imtihon simulyatsiyasi, zaif nuqtalarni bartaraf etish va N4 ga o'tish.",
      descEn:
        'Timed JLPT N5 mock exam simulation, resolving remaining weaknesses, and smooth transition to N4.',
      focusAreas: ['Timed Mock Exam', 'Review', 'Certification Readiness'],
    },
  ],
  N4: [
    {
      titleUz: "1-Bosqich: N4 Fe'l Turlari (Potentsial & Passiv Asoslari)",
      titleEn: 'Stage 1: N4 Advanced Verb Conjugations',
      descUz:
        "Mumkinlik (Potential), Ixtiyoriy/Majburiy fe'l shakllari, N4 ning dastlabki 50 ta yangi kanjisi.",
      descEn: 'Potential verb forms, giving/receiving verbs, and first 50 intermediate Kanji.',
      focusAreas: ['Potential Form', 'Polite Speech', 'Intermediate Kanji'],
    },
    {
      titleUz: "2-Bosqich: Murakkab Bog'lovchilar (~ba, ~tara, ~nara)",
      titleEn: 'Stage 2: Conditional Patterns (~ba, ~tara, ~nara)',
      descUz: "Shart mayli konstruksiyalari, farqlari va kundalik hayotdagi tabiiy qo'llanishi.",
      descEn:
        'Deep dive into conditional clauses, identifying subtle nuances in everyday spoken Japanese.',
      focusAreas: ['Conditionals', 'Grammar Nuances', 'Speaking Practice'],
    },
    {
      titleUz: "3-Bosqich: N4 O'qish (Dokkai) & Tezlikni Oshirish",
      titleEn: 'Stage 3: N4 Reading Fluency & Speed',
      descUz:
        "O'rta hajmdagi matnlar, xatlar va xabarnomalarni tez o'qish, asosiy ma'noni ajratib olish.",
      descEn:
        'Reading medium-length passages, emails, instructions, and boosting comprehension speed.',
      focusAreas: ['Reading Speed', 'Intermediate Vocab', 'Context Grasp'],
    },
    {
      titleUz: '4-Bosqich: Tinglab Tushunish (Choukai) Vaziyatlari',
      titleEn: 'Stage 4: Audio Comprehension in Real Situations',
      descUz:
        "Do'kon, stansiya, shifoxona va ish joyidagi tabiiy tezlikdagi yaponcha audiolar bilan ishlash.",
      descEn:
        'Listening to native conversations in shops, transport, and practical daily scenarios.',
      focusAreas: ['Listening Practice', 'Real Dialogues', 'Audio Drills'],
    },
    {
      titleUz: '5-Bosqich: N4 Mock Testlar & Xatolar Ombori',
      titleEn: 'Stage 5: N4 Mock Tests & Error Remediation',
      descUz: "JLPT N4 bo'yicha to'liq test sinovlari, grammatik nozikliklarni mustahkamlash.",
      descEn:
        'Full-length JLPT N4 mock tests and targeted remediation of persistent grammar mistakes.',
      focusAreas: ['Mock Tests', 'Error Vault', 'Grammar Drills'],
    },
    {
      titleUz: '6-Bosqich: N4 Sertifikatlash & N3 sari Bosqich',
      titleEn: 'Stage 6: N4 Mastery & Stepping into N3',
      descUz:
        "Yakuniy test sinovi, N4 sertifikat ballini kafolatlash va N3 o'rta darajaga poydevor qo'yish.",
      descEn:
        'Final exam readiness, securing top percentile score, and foundational bridge into N3.',
      focusAreas: ['Final Mock', 'Mastery Review', 'N3 Prep'],
    },
  ],
  N3: [
    {
      titleUz: '1-Bosqich: N3 Grammatik Strukturasi & Shinkanzen Asoslari',
      titleEn: 'Stage 1: N3 Core Grammar & Shinkanzen Patterns',
      descUz:
        "N3 ning eng ko'p uchraydigan 50 ta grammatik konstruksiyasi, 150 ta yangi kanji va so'z birikmalari.",
      descEn:
        'Mastering top 50 N3 grammatical patterns, 150 new Kanji, and natural Japanese collocations.',
      focusAreas: ['N3 Grammar', 'Kanji Expansion', 'Collocations'],
    },
    {
      titleUz: "2-Bosqich: Keigo (Hurmat So'zlari) & Rasmiy Nutq",
      titleEn: 'Stage 2: Keigo & Business Communication',
      descUz:
        "Sonkeigo, Kenjougo va Teineigo hurmat shakllarini farqlash va suhbatda erkin qo'llash.",
      descEn:
        'Distinguishing respectful, humble, and polite speech for business and natural interactions.',
      focusAreas: ['Keigo', 'Formal Speech', 'Honorifics'],
    },
    {
      titleUz: '3-Bosqich: N3 Dokkai — Fikr Tahlili va Maqolalar',
      titleEn: 'Stage 3: N3 Reading — Analytical Comprehension',
      descUz:
        'Gazeta maqolalari, insholar va tushuntirish xatlarini chuqur tahlil qilish strategiyalari.',
      descEn: 'Reading essays, opinion pieces, and editorial commentary with critical deduction.',
      focusAreas: ['Long-form Reading', 'Editorial Texts', 'Speed Reading'],
    },
    {
      titleUz: '4-Bosqich: N3 Choukai — Tezkor Dialoqlar va Javoblar',
      titleEn: 'Stage 4: N3 Listening — Rapid Response Comprehension',
      descUz: 'Qisqa javobli tezkor savollar (Sokutou) va murakkab vaziyatli audiolar amaliyoti.',
      descEn: 'Quick-response listening drills and comprehending conversational intentions.',
      focusAreas: ['Quick Response', 'Native Audio', 'Audio Intention'],
    },
    {
      titleUz: '5-Bosqich: Intensiv N3 Mock Testlar & Xatolar Ombori',
      titleEn: 'Stage 5: Intensive N3 Mock Exams & Error Vault',
      descUz:
        'Haqiqiy imtihon formatidagi sinovlar, xatoliklarni aniqlab, har bir kamchilikni bartaraf qilish.',
      descEn: 'Authentic timed JLPT N3 tests, mapping error patterns, and closing knowledge gaps.',
      focusAreas: ['Full Mocks', 'Error Vault', 'Score Maximizer'],
    },
    {
      titleUz: '6-Bosqich: N3 Yuqori Ball Kafolati & Yakuniy Sinov',
      titleEn: 'Stage 6: Top Score Guarantee & Final Simulation',
      descUz: "Imtihon oldi yakuniy sinovi, vaqtni to'g'ri taqsimlash va N2 ga ishonchli start.",
      descEn:
        'Final full rehearsal, optimal time management under pressure, and foundation for N2.',
      focusAreas: ['Final Rehearsal', 'Time Management', 'N2 Readiness'],
    },
  ],
};

const GENERAL_JA_TEMPLATES: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: Kundalik Tanishuv & Asosiy Talaffuz',
    titleEn: 'Stage 1: Everyday Greetings & Natural Pronunciation',
    descUz:
      "O'zini tanishtirish, xushmuomala so'zlashuv, his-tuyg'ularni ifodalash va do'stona iboralar.",
    descEn:
      'Self-introductions, polite spoken interactions, expressing feelings, and friendly phrases.',
    focusAreas: ['Pronunciation', 'Daily Phrases', 'Polite Spoken Form'],
  },
  {
    titleUz: "2-Bosqich: Sayohat, Restoran va Do'kon Dialoglari",
    titleEn: 'Stage 2: Travel, Dining & Shopping Kaiwa',
    descUz:
      "Buyurtma berish, narxlarni so'rash, transport yo'nalishlarini aniqlash va xarid qilish nutqi.",
    descEn:
      'Ordering food, asking for directions, shopping interactions, and public transit navigation.',
    focusAreas: ['Travel Japanese', 'Ordering & Shopping', 'Audio Fluency'],
  },
  {
    titleUz: "3-Bosqich: Do'stona Suhbat (Tameguchi) & Madaniyat",
    titleEn: 'Stage 3: Casual Speech (Tameguchi) & Cultural Context',
    descUz:
      'Tengdoshlar bilan norasmiy muloqot, yapon madaniy nozikliklari, qisqartmalar va jargonlar.',
    descEn:
      'Casual conversation with peers, cultural nuances, everyday slang, and colloquial patterns.',
    focusAreas: ['Casual Speech', 'Cultural Nuances', 'Listening Speed'],
  },
  {
    titleUz: '4-Bosqich: Ish Joyi va Rasmiy Vaziyatlar (Keigo)',
    titleEn: 'Stage 4: Workplace & Business Situations',
    descUz:
      'Hamkasblar bilan muloqot, telefon suhbatlari, hurmat ohangi va ishbilarmonlik etikasi.',
    descEn:
      'Interacting with colleagues, telephone etiquette, polite requests, and workplace communication.',
    focusAreas: ['Business Basics', 'Workplace Kaiwa', 'Polite Telephone'],
  },
  {
    titleUz: '5-Bosqich: Erkin Fikr Bildirish & Munozaralar',
    titleEn: 'Stage 5: Expressing Opinions & Spontaneous Speech',
    descUz:
      "Qiziqishlar, kino, texnologiya va dolzarb mavzularda o'z fikrini erkin ifodalash amaliyoti.",
    descEn:
      'Discussing hobbies, media, technology, and expressing nuanced personal viewpoints smoothly.',
    focusAreas: ['Spontaneous Speech', 'Debate & Opinion', 'Speaking Confidence'],
  },
  {
    titleUz: '6-Bosqich: Ravon Yaponcha Muloqot (Fluency)',
    titleEn: 'Stage 6: Natural Conversational Fluency',
    descUz:
      "Yaponiyaliklar bilan to'siqsiz jonli suhbat, AI Speaking Coach bilan real ssenariylar sinovi.",
    descEn:
      'Uninhibited conversational flow, mastery of spontaneous dialogues, and speaking coach certification.',
    focusAreas: ['Conversational Flow', 'Speaking Coach Drills', 'Native Fluency'],
  },
];

const IELTS_ROADMAP_TEMPLATES: MilestoneTemplate[] = [
  {
    titleUz: "1-Bosqich: Diagnostik Tahlil, Akademik Lug'at & Speaking Part 1",
    titleEn: 'Stage 1: Diagnostic Assessment & Speaking Part 1 Fluency',
    descUz:
      "Kuchli va zaif ko'nikmalarni aniqlash, Academic Word List (AWL) boshlanishi va Speaking Part 1 tezkor savollari.",
    descEn:
      'Identifying core strengths and weaknesses, beginning Academic Word List, and mastering Speaking Part 1 fluency.',
    focusAreas: ['Academic Vocab', 'Speaking Part 1', 'Grammar Foundations'],
  },
  {
    titleUz: '2-Bosqich: Reading Skimming/Scanning & Listening Sections 1-2',
    titleEn: 'Stage 2: Reading Strategies & Listening Accuracy',
    descUz:
      "Matnni tez ko'zdan kechirish (skimming/scanning), kalit so'zlarni topish va Listening bo'yicha xatosiz yozish.",
    descEn:
      'Skimming and scanning strategies, keyword synonym matching, and spelling accuracy in Listening Sections 1 & 2.',
    focusAreas: ['Skimming & Scanning', 'Synonym Mapping', 'Listening Accuracy'],
  },
  {
    titleUz: '3-Bosqich: Writing Task 1 (Grafiklar & Diagrammalar) & Speaking Part 2',
    titleEn: 'Stage 3: Writing Task 1 Report & Speaking Part 2 Cue Card',
    descUz:
      "Bar, line, pie chartlarni tahlil qilish, trendlarni tasvirlash, Speaking Part 2 da 2 daqiqa to'xtovsiz nutq so'zlash.",
    descEn:
      'Analyzing charts and diagrams, trend vocabulary, and mastering 2-minute sustained speech for Speaking Part 2.',
    focusAreas: ['Task 1 Overview', 'Trend Vocabulary', 'Cue Card Fluency'],
  },
  {
    titleUz: '4-Bosqich: Writing Task 2 (Akademik Esse) & Listening Sections 3-4',
    titleEn: 'Stage 4: Writing Task 2 Essay & Complex Lectures',
    descUz:
      "Opinion, discussion va problem-solution insholarining mantiqiy tuzilmasi, akademik leksika va murakkab ma'ruzalar.",
    descEn:
      'Structuring argumentative and discussion essays, cohesion devices, and tackling Section 4 academic lectures.',
    focusAreas: ['Task 2 Essays', 'Cohesive Devices', 'Academic Lectures'],
  },
  {
    titleUz: "5-Bosqich: To'liq Mock Testlar & Xatolar Ustida Intensiv Ishlash",
    titleEn: 'Stage 5: Full-length Timed Mocks & Error Vault Remediation',
    descUz:
      "Haqiqiy imtihon sharoitida to'liq Mock sinovlari, band ball prognozi va Error Vault dagi barcha xatoliklarni bartaraf etish.",
    descEn:
      'Timed full-length mock exams, band score projection, and deep-dive error vault remediation.',
    focusAreas: ['Timed Mocks', 'Error Vault', 'Band 7+ Vocabulary'],
  },
  {
    titleUz: '6-Bosqich: Yakuniy Imtihon Simulyatsiyasi & Target Band Kafolati',
    titleEn: 'Stage 6: Final Exam Simulation & Target Band Guarantee',
    descUz:
      "Vaqtni qat'iy boshqarish, imtihon stressini yengish va maqsadli Band Score (7.0+) ni to'liq mustahkamlash.",
    descEn:
      'Strict time management, exam psychology, and solidifying readiness for your target Band Score.',
    focusAreas: ['Final Simulation', 'Time Management', 'Band Score Target'],
  },
];

export function generatePersonalMilestones(
  language: SupportedLanguage,
  goalType: PlanGoalType,
  _currentLevel: string,
  targetLevel: string,
  deadlineMonths: number,
  isUz: boolean = true,
): RoadmapMilestone[] {
  let templates: MilestoneTemplate[] = [];

  if (language === 'ja') {
    if (goalType === 'general_ja') {
      templates = GENERAL_JA_TEMPLATES;
    } else {
      const cleanTarget = (targetLevel || 'N5').toUpperCase();
      templates = JLPT_ROADMAP_TEMPLATES[cleanTarget] || JLPT_ROADMAP_TEMPLATES['N5'];
    }
  } else {
    templates = IELTS_ROADMAP_TEMPLATES;
  }

  const result: RoadmapMilestone[] = [];
  const totalMonths = Math.max(1, Math.min(12, deadlineMonths));

  for (let m = 1; m <= totalMonths; m++) {
    // Map m onto template index proportionally
    const templateIndex = Math.min(
      templates.length - 1,
      Math.floor(((m - 1) / Math.max(1, totalMonths - 1)) * (templates.length - 1)),
    );
    const tmpl = templates[templateIndex] || templates[0];

    const monthPrefixUz = `${m}-Oy`;
    const monthPrefixEn = `Month ${m}`;

    result.push({
      month: m,
      title: isUz ? `${monthPrefixUz}: ${tmpl.titleUz}` : `${monthPrefixEn}: ${tmpl.titleEn}`,
      desc: isUz ? tmpl.descUz : tmpl.descEn,
      focusAreas: tmpl.focusAreas,
    });
  }

  return result;
}
