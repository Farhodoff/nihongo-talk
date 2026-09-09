/**
 * roadmapMilestones.ts
 * Generates authentic, pedagogically structured learning milestones for Personal Learning Plans.
 * Realistically bridges from the student's CURRENT level to their TARGET goal without
 * showing irrelevant beginner content (e.g. no Hiragana/Katakana for N4+ students).
 */

import { SupportedLanguage } from '../types/lesson';
import { PlanGoalType } from '../types/learningPlan';

export interface RoadmapMilestone {
  month: number;
  title: string;
  desc: string;
  focusAreas: string[];
}

export interface MilestoneTemplate {
  titleUz: string;
  titleEn: string;
  descUz: string;
  descEn: string;
  focusAreas: string[];
}

export const JLPT_LEVEL_ORDER = ['ZERO', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type JlptLevel = (typeof JLPT_LEVEL_ORDER)[number];

// ==========================================
// 1. SINGLE-LEVEL MASTERY TEMPLATES (N5 to N1)
// Used when currentLevel == targetLevel (deep mastery)
// ==========================================
export const JLPT_SINGLE_LEVEL_TEMPLATES: Record<string, MilestoneTemplate[]> = {
  ZERO: [
    {
      titleUz: '1-Bosqich: Hiragana Alifbosi & To‘g‘ri Talaffuz',
      titleEn: 'Stage 1: Hiragana Syllabary & Pronunciation Basics',
      descUz:
        '46 ta asosiy Hiragana belgilari, dakuon/handakuon (が, ざ, だ, ば, ぱ), cho‘ziq unlilar va birikmalar.',
      descEn:
        'Mastering 46 core Hiragana characters, voiced sounds (dakuon/handakuon), long vowels, and combinations.',
      focusAreas: ['Hiragana', 'Pronunciation', 'Kana Writing'],
    },
    {
      titleUz: '2-Bosqich: Katakana & Chet El O‘zlashma So‘zlari',
      titleEn: 'Stage 2: Katakana & Loanwords (Gairaigo)',
      descUz:
        'Katakana alifbosi, chet eldan kirib kelgan so‘zlar (コーヒー, ホテル, バス) va o‘qish qoidalari.',
      descEn:
        'Katakana syllabary, foreign loanwords, and reading foreign brand/place names accurately.',
      focusAreas: ['Katakana', 'Loanwords', 'Reading Drills'],
    },
    {
      titleUz: '3-Bosqich: Salomlashuv, O‘zini Tanishtirish & ~desu',
      titleEn: 'Stage 3: Greetings, Self-Introduction & ~desu Structure',
      descUz:
        'Hajimemashite, xushmuomala salomlashuvlar, o‘zini tanishtirish va asosiy ~desu jumla tuzilishi.',
      descEn:
        'Essential greetings, polite self-introductions (Jikoshoukai), and foundational ~desu syntax.',
      focusAreas: ['Greetings', 'Self-Intro', 'Basic Syntax'],
    },
  ],
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
  N2: [
    {
      titleUz: '1-Bosqich: N2 Asosiy Grammatika & 350+ Yangi Kanji',
      titleEn: 'Stage 1: N2 Core Grammar & 350+ Intermediate Kanji',
      descUz:
        'N2 ning asosiy funksional ifodalari (~ni saishite, ~wo keiki ni, ~zaru wo enai), 350 ta yangi kanji va gazeta leksikasi.',
      descEn:
        'Mastering core N2 functional grammar (~ni saishite, ~wo keiki ni, ~zaru wo enai), 350+ new Kanji, and media vocabulary.',
      focusAreas: ['N2 Grammar', 'Kanji Mastery', 'Functional Expressions'],
    },
    {
      titleUz: '2-Bosqich: Keigo Mukammallashtirish & Biznes Kommunikatsiya',
      titleEn: 'Stage 2: Advanced Keigo & Professional Japanese',
      descUz:
        'Sonkeigo va Kenjougo hurmat shakllarini biznes kontekstida, rasmiy xatlar va muzokaralarda benuqson qo‘llash.',
      descEn:
        'Polishing business honorifics (Sonkeigo, Kenjougo), official correspondence, and formal dialogue.',
      focusAreas: ['Business Keigo', 'Formal Register', 'Workplace Fluency'],
    },
    {
      titleUz: '3-Bosqich: N2 Dokkai — Tahliliy Maqolalar & Fikr Tanqidi',
      titleEn: 'Stage 3: N2 Analytical Reading — Editorials & Critical Thought',
      descUz:
        'Iqtisodiy-ijtimoiy mavzudagi gazeta tahririyati maqolalari, taqqoslash va argumentatsiya matnlarini tez o‘qish.',
      descEn:
        'Speed-reading newspaper editorials, economic columns, comparative essays, and discerning author intent.',
      focusAreas: ['Editorial Dokkai', 'Speed Reading', 'Argument Analysis'],
    },
    {
      titleUz: '4-Bosqich: N2 Choukai — Sogo Rikai & Tabiiy Nutq Tahlili',
      titleEn: 'Stage 4: N2 Integrated Listening & Speaker Stance',
      descUz:
        'Integratsiyalashgan audio tushunish (Sogo Rikai), spikerning yashirin maqsadi va tezkor suhbatlar amaliyoti.',
      descEn:
        'Integrated listening comprehension (Sogo Rikai), discerning unspoken nuance, and native fast-paced speech.',
      focusAreas: ['Sogo Rikai', 'Native Speed', 'Audio Deduction'],
    },
    {
      titleUz: '5-Bosqich: N2 Rasmiy Namunaviy Testlar & Xatolar Ombori',
      titleEn: 'Stage 5: Official N2 Practice Tests & Error Remediation',
      descUz:
        'Oldingi yillardagi haqiqiy JLPT N2 savollari, partikl va sinonim tuzoqlari tahlili, Error Vault bo‘yicha ishlash.',
      descEn:
        'Authentic past JLPT N2 exam sets, resolving synonym nuances, and systematic error vault remediation.',
      focusAreas: ['Past Papers', 'Error Vault', 'Grammar Nuances'],
    },
    {
      titleUz: '6-Bosqich: To‘liq 180-Ballik Mock Imtihon & N2 Sertifikati',
      titleEn: 'Stage 6: 180-Point Mock Simulation & N2 Certification',
      descUz:
        'Vaqt nazorati ostida to‘liq rasmiy JLPT N2 imtihon simulyatsiyasi (105 daqiqalik Language/Reading + 50 daqiqa Listening).',
      descEn:
        'Timed full-length official JLPT N2 mock simulation (105m Language/Reading + 50m Listening) and score assurance.',
      focusAreas: ['Timed Mock', 'Time Management', 'N2 Certified'],
    },
  ],
  N1: [
    {
      titleUz: '1-Bosqich: N1 Adabiy Sintaksis & 500+ Ilg‘or Kanji',
      titleEn: 'Stage 1: N1 Literary Syntax & 500+ Advanced Kanji',
      descUz:
        'N1 ning eng murakkab adabiy grammatik konstruksiyalari (~de are, ~wo kawakiri ni, ~kiwamarinai) va 500 ta yangi kanji.',
      descEn:
        'Mastering high-register literary syntax (~de are, ~wo kawakiri ni, ~kiwamarinai) and 500+ advanced Kanji.',
      focusAreas: ['N1 Syntax', 'Literary Kanji', 'High Register'],
    },
    {
      titleUz: '2-Bosqich: Yojijukugo (Idiomalar) & Publitsistika Leksikasi',
      titleEn: 'Stage 2: Idiomatic Expressions (Yojijukugo) & Discourse',
      descUz:
        'To‘rt belgili yapon idiomasi (Yojijukugo), ilmiy abstrakt tushunchalar va rasmiy siyosat tili.',
      descEn:
        'Four-character idioms (Yojijukugo), scientific abstracts, and high-level political/societal discourse.',
      focusAreas: ['Yojijukugo', 'Advanced Lexicon', 'Discourse Analysis'],
    },
    {
      titleUz: '3-Bosqich: N1 Dokkai — Falsafiy Traktatlar & Abstrakt Tahlil',
      titleEn: 'Stage 3: N1 Critical Dokkai — Philosophy & Complex Treatises',
      descUz:
        'Falsafiy, ilmiy va sotsiologik murakkab matnlar, muallifning chuqur subyektiv mantiqini aniqlash.',
      descEn:
        'Deep analytical reading of philosophy, scientific theory, and complex opinion treatises under time pressure.',
      focusAreas: ['Philosophical Dokkai', 'Abstract Deduction', 'Speed Reading'],
    },
    {
      titleUz: '4-Bosqich: N1 Choukai — Ko‘p Spikerli Munozaralar & Ma’ruzalar',
      titleEn: 'Stage 4: N1 Choukai — Multi-Speaker Debates & Academic Audio',
      descUz:
        'Panel munozaralari, akademik ma’ruzalar, yashirin kinoya va tezkor reaksiyali sokutou tinglash mashqlari.',
      descEn:
        'Multi-speaker panel debates, university lectures, implied sarcasm, and rapid unscripted dialogue comprehension.',
      focusAreas: ['Debate Choukai', 'Academic Audio', 'Quick Response'],
    },
    {
      titleUz: '5-Bosqich: 110 Daqiqalik Imtihon Strategiyasi & Zaifliklar Tahlili',
      titleEn: 'Stage 5: 110-Minute Strategy & Sectional Remediation',
      descUz:
        '110 daqiqalik Language Knowledge va Reading blokida vaqtni taqsimlash, sectional cutoff xatarlarini yo‘qotish.',
      descEn:
        'Strategic time budgeting for 110-minute Language/Reading section, eliminating sectional cutoff risks.',
      focusAreas: ['Time Budgeting', 'Sectional Cutoff', 'Error Vault'],
    },
    {
      titleUz: '6-Bosqich: To‘liq Rasmiy JLPT N1 Mock Simulyatsiyasi & Yuqori Ball',
      titleEn: 'Stage 6: Authentic 180-Point JLPT N1 Simulation & Mastery',
      descUz:
        'Haqiqiy 180 ballik rasmiy JLPT N1 imtihoni simulyatsiyasi, maksimal ballga erishish va professional sertifikatlash.',
      descEn:
        'Full 180-point official JLPT N1 simulation, achieving top percentile score, and professional certification.',
      focusAreas: ['180-Point Mock', 'N1 Certification', 'Top Percentile'],
    },
  ],
};

// ==========================================
// 2. MULTI-LEVEL TRANSITION ROADMAPS
// Bridges from current level to target level!
// ==========================================

export const JLPT_N4_TO_N1_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N4 Mustahkamlash & N3 Grammatika/Kanji Start',
    titleEn: 'Stage 1: N4 Consolidation & N3 Foundations',
    descUz:
      'N4 bo‘yicha qoldiq bo‘shliqlarni yopish, N3 ning dastlabki 50 ta grammatik konstruksiyasi va 150 ta yangi kanji bilan tanishuv.',
    descEn:
      'Closing remaining N4 gaps, mastering first 50 N3 grammar patterns, and expanding with 150 new Kanji.',
    focusAreas: ['N4 Review', 'N3 Grammar Start', '150 Kanji', 'Sentence Drills'],
  },
  {
    titleUz: '2-Bosqich: N3 Dokkai, Choukai & Keigo (Hurmat Nutqi)',
    titleEn: 'Stage 2: N3 Reading, Listening & Keigo Mastery',
    descUz:
      'N3 o‘rta hajmdagi matnlarini tahlil qilish, tezkor tinglash (Sokutou), Sonkeigo/Kenjougo hurmat shakllari va N3 darajasini to‘liq mustahkamlash.',
    descEn:
      'Analyzing N3 medium-length texts, rapid listening response, business Keigo honorifics, and locking down N3.',
    focusAreas: ['N3 Dokkai', 'N3 Choukai', 'Keigo Honorifics', 'Mid-Level Fluency'],
  },
  {
    titleUz: '3-Bosqich: N2 ga O‘tish — Murakkab Konstruksiyalar & 350+ Kanji',
    titleEn: 'Stage 3: Transition to N2 — Complex Patterns & 350+ Kanji',
    descUz:
      'JLPT N2 ning asosiy grammatik konstruksiyalari (~ni saishite, ~wo keiki ni), publitsistika va gazeta leksikasi, 350 ta yangi N2 kanjisi.',
    descEn:
      'Core N2 grammar patterns (~ni saishite, ~wo keiki ni), media vocabulary, and 350+ intermediate Kanji.',
    focusAreas: ['N2 Grammar', 'Newspaper Vocab', '350 Kanji', 'Transition'],
  },
  {
    titleUz: '4-Bosqich: N2 Tahliliy Dokkai, Sogo Rikai & N2 Mock Sinovlari',
    titleEn: 'Stage 4: N2 Analytical Reading, Integrated Audio & N2 Mocks',
    descUz:
      'Ijtimoiy-iqtisodiy uzun matnlar tahlili, integratsiyalashgan audio (Sogo Rikai), N2 to‘liq mock imtihoni va N1 ga mustahkam poydevor.',
    descEn:
      'Reading economic and social columns, integrated audio comprehension, full N2 mock exam, and building N1 bridge.',
    focusAreas: ['N2 Speed Dokkai', 'Sogo Rikai', 'N2 Mock', 'Error Analysis'],
  },
  {
    titleUz: '5-Bosqich: N1 Adabiy Sintaksis & Abstrakt Dokkai',
    titleEn: 'Stage 5: N1 Literary Syntax & Abstract Reading Passages',
    descUz:
      'JLPT N1 ning eng murakkab adabiy grammatikasi (~de are, ~kiwamarinai), 500+ yangi N1 kanjisi, falsafiy va ilmiy matnlar tahlili.',
    descEn:
      'High-register literary grammar (~de are, ~kiwamarinai), 500+ N1 Kanji, and deciphering abstract philosophy passages.',
    focusAreas: ['N1 Syntax', 'Abstract Dokkai', 'N1 Kanji', 'Academic Tone'],
  },
  {
    titleUz: '6-Bosqich: N1 Choukai & Rasmiy 180-Ballik Mock Simulyatsiyasi',
    titleEn: 'Stage 6: N1 Panel Audio & Official 180-Point Mock Simulation',
    descUz:
      'Ko‘p spikerli munozaralar va panel dialoglari, 110 daqiqalik vaqt nazorati ostida to‘liq rasmiy JLPT N1 imtihon simulyatsiyasi va sertifikat kafolati.',
    descEn:
      'Multi-speaker panel listening, strict 110-minute time budgeting, full official 180-point JLPT N1 simulation, and score guarantee.',
    focusAreas: ['N1 Choukai', '180-Point Mock', 'Time Budgeting', 'N1 Certified'],
  },
];

export const JLPT_N4_TO_N2_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N4 Bo‘shliqlarni Yopish & N3 Grammatika Start',
    titleEn: 'Stage 1: Closing N4 Gaps & N3 Grammar Launch',
    descUz:
      'N4 murakkab fe’l va shart mayllarini yakunlash, N3 Shinkanzen grammatika asoslari va 150 ta yangi kanji.',
    descEn:
      'Consolidating N4 conditionals and verb types, starting N3 core grammar, and learning 150 new Kanji.',
    focusAreas: ['N4 Review', 'N3 Grammar', '150 Kanji'],
  },
  {
    titleUz: '2-Bosqich: N3 Dokkai, Choukai & Keigo (Hurmat Nutqi)',
    titleEn: 'Stage 2: N3 Reading, Listening & Keigo Speech',
    descUz:
      'O‘rta hajmdagi maqolalar, tezkor javobli (Sokutou) tinglash mashqlari va biznesda hurmat nutqi asoslari.',
    descEn: 'Medium-length articles, quick-response audio drills, and foundational business Keigo.',
    focusAreas: ['N3 Dokkai', 'N3 Choukai', 'Keigo'],
  },
  {
    titleUz: '3-Bosqich: N3 Yakuniy Sinovi & N2 Grammatik Konstruksiyalari',
    titleEn: 'Stage 3: N3 Mastery & Introduction to N2 Patterns',
    descUz:
      'N3 bo‘yicha mini mock test, N3 ni to‘liq egallash va N2 ning dastlabki funksional konstruksiyalari bilan tanishuv.',
    descEn:
      'Mini N3 mock test, finalizing N3 certification readiness, and introduction to N2 functional patterns.',
    focusAreas: ['N3 Mock', 'N2 Bridge', 'Grammar Patterns'],
  },
  {
    titleUz: '4-Bosqich: N2 Kanjilari & Gazeta/Ommaviy Axborot Leksikasi',
    titleEn: 'Stage 4: N2 Kanji Expansion & Media Vocabulary',
    descUz:
      '350 ta yangi N2 kanjisi, ijtimoiy-iqtisodiy maqolalar, publitsistika va yangiliklar tahlili.',
    descEn: '350+ new N2 Kanji, newspaper editorial analysis, and socio-economic terminology.',
    focusAreas: ['N2 Kanji', 'Media Vocab', 'Editorial Reading'],
  },
  {
    titleUz: '5-Bosqich: N2 Tahliliy Dokkai & Sogo Rikai Audio Mashqlari',
    titleEn: 'Stage 5: N2 Analytical Dokkai & Integrated Listening',
    descUz:
      'Uzoq tahliliy matnlar, tez o‘qish strategiyalari, spiker fikrini aniqlash va integratsiyalashgan tinglash.',
    descEn:
      'Long analytical essays, speed-reading strategies, and integrated audio comprehension drills.',
    focusAreas: ['Speed Dokkai', 'Sogo Rikai', 'Audio Intention'],
  },
  {
    titleUz: '6-Bosqich: To‘liq JLPT N2 Mock Imtihon & Sertifikat Kafolati',
    titleEn: 'Stage 6: Full JLPT N2 Mock Simulation & Certification',
    descUz:
      'Vaqt nazorati ostida to‘liq 180 ballik rasmiy JLPT N2 imtihon simulyatsiyasi va Error Vault xatolarini to‘liq yo‘qotish.',
    descEn:
      'Timed 180-point official JLPT N2 simulation, eliminating mistake patterns, and score assurance.',
    focusAreas: ['Timed N2 Mock', 'Error Vault', 'N2 Certified'],
  },
];

export const JLPT_N4_TO_N3_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N4 Mustahkamlash & N3 Shinkanzen Grammatika Start',
    titleEn: 'Stage 1: N4 Solidification & N3 Grammar Launch',
    descUz:
      'N4 fe’l va shart mayllarini yakunlash, N3 ning eng muhim 50 ta grammatik konstruksiyasi va 100 ta yangi kanji.',
    descEn:
      'Reviewing N4 conditionals and verbs, mastering top 50 N3 grammar points, and 100 new Kanji.',
    focusAreas: ['N4 Polish', 'N3 Grammar', 'Kanji Boost'],
  },
  {
    titleUz: '2-Bosqich: N3 Grammatik Nozikliklar (~wake da, ~koto ni natte iru)',
    titleEn: 'Stage 2: N3 Grammar Nuances & Sentence Patterns',
    descUz:
      'Shinkanzen N3 ning chuqurlashtirilgan mavzulari, sabab-oqibat bog‘lovchilari va 150 ta kanji.',
    descEn: 'Advanced N3 grammatical connectors, cause-effect nuances, and 150 intermediate Kanji.',
    focusAreas: ['Grammar Nuances', 'Connectors', 'Kanji Expansion'],
  },
  {
    titleUz: '3-Bosqich: Keigo (Hurmat So‘zlari) & Rasmiy Suhbat Asoslari',
    titleEn: 'Stage 3: Business Keigo & Formal Japanese Interaction',
    descUz:
      'Sonkeigo va Kenjougo shakllarini farqlash, ish joyidagi tabiiy xushmuomalalik va amaliy dialoglar.',
    descEn:
      'Polishing respectful and humble Keigo forms, everyday workplace interaction, and audio roleplay.',
    focusAreas: ['Keigo', 'Formal Japanese', 'Spoken Nuance'],
  },
  {
    titleUz: '4-Bosqich: N3 Dokkai — Fikr Tahlili va Insholar',
    titleEn: 'Stage 4: N3 Reading — Opinion Passages & Speed Drills',
    descUz:
      'Gazeta maqolalari, insholar va tushuntirish xatlarini tez o‘qish, asosiy ma’noni ajratish.',
    descEn:
      'Speed reading opinion columns, essays, and extracting key arguments without hesitation.',
    focusAreas: ['N3 Dokkai', 'Speed Reading', 'Argument Grasp'],
  },
  {
    titleUz: '5-Bosqich: N3 Choukai — Sokutou (Tezkor Javoblar) & Vaziyatli Audio',
    titleEn: 'Stage 5: N3 Listening — Quick Response & Situational Drills',
    descUz:
      'Tezkor savol-javobli tinglash mashqlari (Sokutou), kundalik dialoglar va xatolar ombori ustida ishlash.',
    descEn:
      'Rapid question-response listening drills (Sokutou), natural audio dialogues, and error review.',
    focusAreas: ['N3 Choukai', 'Quick Response', 'Error Vault'],
  },
  {
    titleUz: '6-Bosqich: To‘liq Rasmiy JLPT N3 Mock Imtihon & Sertifikat',
    titleEn: 'Stage 6: Full Official JLPT N3 Mock Exam & Pass Assurance',
    descUz:
      '180 ballik rasmiy formatdagi simulyatsiya, vaqtni to‘g‘ri taqsimlash va N3 sertifikatiga to‘liq tayyorlik.',
    descEn:
      'Official 180-point JLPT N3 exam simulation, time management, and full certification confidence.',
    focusAreas: ['180-Point Mock', 'Time Management', 'N3 Pass Readiness'],
  },
];

export const JLPT_N3_TO_N1_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N3 ni Yakunlash & N2 Asosiy Grammatika Start',
    titleEn: 'Stage 1: Finalizing N3 & Launching N2 Grammar',
    descUz:
      'N3 dagi qoldiq bo‘shliqlarni yo‘qotish, N2 ning 80 ta asosiy grammatik konstruksiyasi va 200 ta yangi kanji.',
    descEn:
      'Resolving lingering N3 gaps, launching top 80 N2 grammar patterns, and learning 200 new Kanji.',
    focusAreas: ['N3 Review', 'N2 Grammar', 'Kanji Expansion'],
  },
  {
    titleUz: '2-Bosqich: N2 Dokkai, Keigo Mukammalligi & Yangiliklar Leksikasi',
    titleEn: 'Stage 2: N2 Reading, Keigo Polish & News Vocabulary',
    descUz:
      'Tahririyat maqolalari, iqtisodiy terminlar, biznes Keigo va N2 tinglab tushunish audiolarini o‘zlashtirish.',
    descEn:
      'Editorial articles, economic terms, business Keigo, and sharpening N2 listening comprehension.',
    focusAreas: ['N2 Dokkai', 'Business Keigo', 'Media Japanese'],
  },
  {
    titleUz: '3-Bosqich: N2 To‘liq Egallash & N1 Grammatik Sintaksis Start',
    titleEn: 'Stage 3: N2 Mastery & Stepping into N1 Syntax',
    descUz:
      'N2 mock testini muvaffaqiyatli topshirish va N1 ning adabiy sintaksisi (~de are, ~kiwamarinai) sari o‘tish.',
    descEn:
      'Passing N2 mock with distinction, then launching into high-difficulty N1 literary syntax.',
    focusAreas: ['N2 Mock Mastery', 'N1 Bridge', 'Advanced Syntax'],
  },
  {
    titleUz: '4-Bosqich: N1 Kanji (500+), Yojijukugo & Publitsistika',
    titleEn: 'Stage 4: N1 Kanji (500+), Idioms & Journalistic Japanese',
    descUz:
      '500 ta yangi N1 kanjisi, to‘rt belgili idiomalar (Yojijukugo), publitsistik va siyosiy matnlar tahlili.',
    descEn:
      '500+ new N1 Kanji, four-character idioms (Yojijukugo), and dissecting political discourse.',
    focusAreas: ['N1 Kanji', 'Yojijukugo', 'Journalism'],
  },
  {
    titleUz: '5-Bosqich: N1 Dokkai — Falsafiy & Ilmiy Abstrakt Traktatlar',
    titleEn: 'Stage 5: N1 Dokkai — Abstract & Philosophical Passages',
    descUz:
      'Falsafiy, ilmiy va tanqidiy insholarni chuqur tahlil qilish, muallif pozitsiyasini aniqlash va tez o‘qish.',
    descEn:
      'Analytical reading of philosophy and science essays, speed-reading abstract arguments.',
    focusAreas: ['Abstract Dokkai', 'Deductive Reasoning', 'Speed Drills'],
  },
  {
    titleUz: '6-Bosqich: N1 Choukai & Rasmiy 180-Ballik Mock Simulyatsiyasi',
    titleEn: 'Stage 6: N1 Choukai & Official 180-Point Mock Simulation',
    descUz:
      'Ko‘p spikerli munozaralar, 110 daqiqalik vaqt nazorati ostida rasmiy JLPT N1 simulyatsiyasi va sertifikat.',
    descEn:
      'Multi-speaker debates, 110-minute section time control, official JLPT N1 simulation, and certification.',
    focusAreas: ['N1 Choukai', '180-Point Mock', 'N1 Certified'],
  },
];

export const JLPT_N3_TO_N2_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N3 Mustahkamlash & N2 Grammatika Asoslari',
    titleEn: 'Stage 1: N3 Solidification & N2 Grammar Launch',
    descUz:
      'N3 bo‘shliqlarini yopish, N2 ning dastlabki funksional konstruksiyalari (~ni saishite, ~wo keiki ni) va 150 ta kanji.',
    descEn:
      'Reviewing N3 essentials, launching foundational N2 grammar patterns, and 150 intermediate Kanji.',
    focusAreas: ['N3 Review', 'N2 Grammar', 'Kanji Expansion'],
  },
  {
    titleUz: '2-Bosqich: N2 Kanjilari & Gazeta/OAV Leksikasi',
    titleEn: 'Stage 2: N2 Kanji Expansion & Media Vocabulary',
    descUz:
      '200 ta yangi N2 kanjisi, ijtimoiy va iqtisodiy yangiliklar leksikasi, publitsistik matnlar tahlili.',
    descEn:
      '200+ new N2 Kanji, socio-economic media vocabulary, and public news article comprehension.',
    focusAreas: ['N2 Kanji', 'Media Vocab', 'News Reading'],
  },
  {
    titleUz: '3-Bosqich: Keigo Mukammallashtirish & Ishbilarmonlik Etikasi',
    titleEn: 'Stage 3: Advanced Business Keigo & Workplace Etiquette',
    descUz:
      'Sonkeigo va Kenjougo shakllarini rasmiy maktublar, telefon va uchrashuvlarda benuqson qo‘llash.',
    descEn:
      'Flawless usage of respectful and humble Keigo in business emails, phone calls, and interviews.',
    focusAreas: ['Business Keigo', 'Workplace Fluency', 'Formal Register'],
  },
  {
    titleUz: '4-Bosqich: N2 Dokkai — Tahliliy Maqolalar & Fikr Tanqidi',
    titleEn: 'Stage 4: N2 Dokkai — Editorials & Critical Argumentation',
    descUz:
      'Gazeta tahririyati maqolalari, taqqoslash insholari va muallif subyektiv fikrini tez ajratib olish.',
    descEn:
      'Speed-reading newspaper editorials, comparing contrasting viewpoints, and deducing thesis.',
    focusAreas: ['Editorial Dokkai', 'Speed Reading', 'Argument Analysis'],
  },
  {
    titleUz: '5-Bosqich: N2 Choukai — Sogo Rikai & Spiker Niyatini Tushunish',
    titleEn: 'Stage 5: N2 Listening — Integrated Comprehension & Speaker Stance',
    descUz:
      'Integratsiyalashgan tinglash mashqlari (Sogo Rikai), tabiiy tezlikdagi yaponcha audiolar va xatolar tahlili.',
    descEn:
      'Integrated listening drills (Sogo Rikai), native-paced dialogues, and targeted error elimination.',
    focusAreas: ['Sogo Rikai', 'Native Speed', 'Error Vault'],
  },
  {
    titleUz: '6-Bosqich: To‘liq JLPT N2 Mock Imtihon & Sertifikat Kafolati',
    titleEn: 'Stage 6: Official 180-Point N2 Mock Exam & Pass Assurance',
    descUz:
      'Vaqt nazorati ostida 180 ballik rasmiy JLPT N2 imtihon simulyatsiyasi, yuqori ball va sertifikat kafolati.',
    descEn:
      'Timed 180-point official JLPT N2 exam simulation, securing top percentile score, and N2 certificate.',
    focusAreas: ['180-Point Mock', 'Time Management', 'N2 Certification'],
  },
];

export const JLPT_N2_TO_N1_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N2 Yuqori Ball Mustahkamlash & N1 Grammatik Sintaksis',
    titleEn: 'Stage 1: N2 Mastery & Launching N1 Literary Syntax',
    descUz:
      'N2 bilimlarni to‘liq sinovdan o‘tkazish, N1 ning adabiy grammatik sintaksisi (~de are, ~wo kawakiri ni, ~kiwamarinai) start.',
    descEn:
      'Solidifying top-tier N2 score, launching into N1 high-register literary syntax and advanced patterns.',
    focusAreas: ['N2 Perfection', 'N1 Syntax', 'Grammar Patterns'],
  },
  {
    titleUz: '2-Bosqich: N1 Kanjilari (500+) & Yojijukugo (Idiomalar)',
    titleEn: 'Stage 2: 500+ N1 Kanji & Four-Character Idioms (Yojijukugo)',
    descUz:
      'Kam uchraydigan 500 ta N1 kanjisi, to‘rt belgili yapon idiomasi (Yojijukugo) va akademik jukugo birikmalari.',
    descEn:
      '500+ specialized N1 Kanji, essential four-character idioms (Yojijukugo), and academic compounds.',
    focusAreas: ['N1 Kanji', 'Yojijukugo', 'Academic Vocab'],
  },
  {
    titleUz: '3-Bosqich: N1 Dokkai — Falsafiy Traktatlar & Publitsistika',
    titleEn: 'Stage 3: N1 Critical Dokkai — Philosophy & Socio-Political Essays',
    descUz:
      'Falsafiy, sotsiologik va ilmiy matnlar tahlili, nozik kinoya va murakkab sintaksisli uzun parchalarni o‘qish.',
    descEn:
      'Dissecting complex essays on philosophy and culture, mastering long-form analytical reading speed.',
    focusAreas: ['Philosophical Dokkai', 'Abstract Reading', 'Author Stance'],
  },
  {
    titleUz: '4-Bosqich: N1 Choukai — Ko‘p Spikerli Munozaralar & Ma’ruzalar',
    titleEn: 'Stage 4: N1 Choukai — Multi-Speaker Debates & Unscripted Audio',
    descUz:
      'Universitet ma’ruzalari, panel bahslari, tezkor sokutou tinglash mashqlari va kinoyali nutq tahlili.',
    descEn:
      'University lectures, panel discussions, quick-fire listening (Sokutou), and implied irony.',
    focusAreas: ['Panel Debates', 'Academic Audio', 'Quick Response'],
  },
  {
    titleUz: '5-Bosqich: 110 Daqiqalik Imtihon Strategiyasi & Xatolar Ombori',
    titleEn: 'Stage 5: 110-Minute Exam Strategy & Sectional Remediation',
    descUz:
      '110 daqiqalik Language Knowledge va Dokkai qismida vaqtni boshqarish, sectional cutoff (19 ball) xatarlarini yo‘qotish.',
    descEn:
      'Strict time allocation for 110-minute Language/Reading section, eliminating 19-point cutoff risks.',
    focusAreas: ['Time Budgeting', 'Sectional Cutoff', 'Error Vault'],
  },
  {
    titleUz: '6-Bosqich: To‘liq Rasmiy JLPT N1 Mock Simulyatsiyasi (180 Ball)',
    titleEn: 'Stage 6: Authentic 180-Point JLPT N1 Simulation & Certification',
    descUz:
      'Haqiqiy imtihon qoidalari ostida 180 ballik rasmiy JLPT N1 simulyatsiyasi va professional N1 sertifikati kafolati.',
    descEn:
      'Full-length 180-point official JLPT N1 exam simulation under timed pressure and certification readiness.',
    focusAreas: ['180-Point Mock Exam', 'N1 Certification', 'Mastery Level'],
  },
];

export const JLPT_N5_TO_N4_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N5 Mustahkamlash & N4 Fe’l Turlari (Potential/Passive)',
    titleEn: 'Stage 1: N5 Polish & N4 Advanced Verb Forms',
    descUz:
      'N5 fe’llarini mustahkamlash, N4 imkoniyat (Potential) va majburiy (Passive) fe’l shakllari va 50 ta yangi kanji.',
    descEn:
      'Polishing N5 foundations, mastering N4 potential and passive verb forms, and first 50 intermediate Kanji.',
    focusAreas: ['N5 Review', 'Potential Form', 'Passive Form'],
  },
  {
    titleUz: '2-Bosqich: Shart Mayllari (~ba, ~tara, ~nara) & Berish-Olish',
    titleEn: 'Stage 2: Conditionals (~ba, ~tara, ~nara) & Giving/Receiving',
    descUz:
      'Yapon shart mayllarining nozik farqlari, Ageru/Morau/Kureru konstruksiyalari va amaliy dialoglar.',
    descEn:
      'Nuances of Japanese conditional clauses, giving and receiving verbs (ageru/morau/kureru), and dialogues.',
    focusAreas: ['Conditionals', 'Giving/Receiving', 'Daily Grammar'],
  },
  {
    titleUz: '3-Bosqich: N4 Dokkai — Qisqa Hikoyalar, Xatlar & E’lonlar',
    titleEn: 'Stage 3: N4 Reading — Short Stories, Notices & Emails',
    descUz:
      'O‘rta hajmdagi matnlar, pochtalar va stansiya xabarnomalarini Furiganasiz o‘qish tezligini oshirish.',
    descEn:
      'Reading emails, notices, and short stories, weaning off Furigana to boost natural reading speed.',
    focusAreas: ['N4 Dokkai', 'Speed Reading', 'Notice Reading'],
  },
  {
    titleUz: '4-Bosqich: N4 Choukai — Kundalik Vaziyatli Audiolar',
    titleEn: 'Stage 4: N4 Listening — Situational Real-World Dialogues',
    descUz:
      'Klinika, do‘kon, transport va ish joyidagi tabiiy tezlikdagi audiolar, spiker niyatini tushunish.',
    descEn: 'Listening drills set in clinics, transport, and shops with native natural speech.',
    focusAreas: ['N4 Choukai', 'Situational Audio', 'Listening Basics'],
  },
  {
    titleUz: '5-Bosqich: N4 Namuna Testlar & Xatolar Sandig‘i Tahlili',
    titleEn: 'Stage 5: N4 Sample Tests & Mistake Remediation',
    descUz:
      'Rasmiy JLPT N4 test savollari, partikl tuzoqlari tahlili va Error Vault dagi kamchiliklarni to‘liq bartaraf qilish.',
    descEn:
      'Official sample N4 questions, particle traps, and systematic mistake review in Error Vault.',
    focusAreas: ['Sample Quizzes', 'Particle Drills', 'Error Vault'],
  },
  {
    titleUz: '6-Bosqich: To‘liq JLPT N4 Mock Imtihon & N3 sari Bosqich',
    titleEn: 'Stage 6: Full JLPT N4 Mock Exam & Transition to N3',
    descUz:
      '180 ballik rasmiy formatdagi N4 imtihon simulyatsiyasi, sertifikat ballini kafolatlash va N3 ga start.',
    descEn:
      'Timed full-length 180-point JLPT N4 simulation, securing passing score, and smooth launch to N3.',
    focusAreas: ['180-Point Mock', 'N4 Certified', 'N3 Transition'],
  },
];

export const JLPT_N5_TO_N3_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: N5 Mustahkamlash & N4 Fe’l Turlari',
    titleEn: 'Stage 1: N5 Consolidation & N4 Verb System',
    descUz:
      'N5 asoslarini mustahkamlash, N4 potential, passive va volitional fe’l shakllari va 100 ta yangi kanji.',
    descEn:
      'Consolidating N5, mastering N4 potential, passive, and volitional verbs, and 100 new Kanji.',
    focusAreas: ['N5 Review', 'N4 Verbs', 'Kanji Expansion'],
  },
  {
    titleUz: '2-Bosqich: N4 Shart Mayllari, Dokkai & Tinglab Tushunish',
    titleEn: 'Stage 2: N4 Conditionals, Reading & Audio Drills',
    descUz:
      'Shart mayllari (~ba, ~tara, ~nara), o‘rta hajmdagi matnlar va N4 mini mock testini topshirish.',
    descEn:
      'Conditional patterns (~ba, ~tara, ~nara), medium-length reading, and completing N4 benchmark test.',
    focusAreas: ['Conditionals', 'N4 Dokkai', 'N4 Audio'],
  },
  {
    titleUz: '3-Bosqich: N3 Shinkanzen Grammatika & 150+ Yangi Kanji',
    titleEn: 'Stage 3: Launching N3 Grammar & 150+ New Kanji',
    descUz:
      'N3 ning eng muhim grammatik konstruksiyalari (~wake da, ~koto ni natte iru), 150 ta yangi kanji va so‘z birikmalari.',
    descEn:
      'Core N3 grammar structures (~wake da, ~koto ni natte iru), 150 intermediate Kanji, and collocations.',
    focusAreas: ['N3 Grammar', 'Kanji Expansion', 'Sentence Building'],
  },
  {
    titleUz: '4-Bosqich: Keigo (Hurmat Nutqi) & Rasmiy Suhbat Asoslari',
    titleEn: 'Stage 4: Formal Keigo & Business Communication',
    descUz:
      'Sonkeigo va Kenjougo hurmat shakllarini farqlash, ish joyidagi tabiiy xushmuomala muloqot va dialoglar.',
    descEn:
      'Mastering respectful and humble Keigo forms for natural polite communication in work and society.',
    focusAreas: ['Keigo', 'Formal Speech', 'Workplace Japanese'],
  },
  {
    titleUz: '5-Bosqich: N3 Dokkai (Maqolalar) & Choukai (Sokutou)',
    titleEn: 'Stage 5: N3 Reading Essays & Quick-Response Listening',
    descUz:
      'Gazeta maqolalari, insholar tahlili, tezkor javobli sokutou audio mashqlari va xatolar ombori.',
    descEn:
      'Reading newspaper essays, rapid-fire listening response (Sokutou), and targeted error elimination.',
    focusAreas: ['N3 Dokkai', 'Sokutou Choukai', 'Error Vault'],
  },
  {
    titleUz: '6-Bosqich: To‘liq Rasmiy JLPT N3 Mock Imtihon & Sertifikat',
    titleEn: 'Stage 6: Full Official JLPT N3 Mock Exam & Pass Assurance',
    descUz:
      'Vaqt nazorati ostida 180 ballik rasmiy JLPT N3 imtihon simulyatsiyasi va sertifikat ballini kafolatlash.',
    descEn:
      'Timed 180-point official JLPT N3 simulation under real exam conditions and certification guarantee.',
    focusAreas: ['180-Point Mock', 'Time Control', 'N3 Certified'],
  },
];

export const JLPT_ZERO_TO_N4_ROADMAP: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: Hiragana & Katakana Alifbosi, Asosiy Tovushlar',
    titleEn: 'Stage 1: Hiragana & Katakana Syllabaries and Sounds',
    descUz:
      'Yapon alifbosi, to‘g‘ri yozish va talaffuz, dakuon/handakuon, birikmalar va birinchi 40 ta asosiy kanji.',
    descEn:
      'Mastering Hiragana and Katakana, stroke order, pronunciation, voiced sounds, and first 40 basic Kanji.',
    focusAreas: ['Kana Writing', 'Pronunciation', 'Kanji Basics'],
  },
  {
    titleUz: '2-Bosqich: N5 Fe’llar (~te, ~nai, ~ta) & Kundalik So‘zlashuv',
    titleEn: 'Stage 2: N5 Verbs (~te, ~nai, ~ta) & Everyday Expressions',
    descUz:
      'Fe’l guruhlari, asosiy zamonlar va shakllar, kundalik salomlashuvlar va 80 ta yangi kanji.',
    descEn:
      'Verb groups, basic past/negative conjugations, daily conversational phrases, and 80 core Kanji.',
    focusAreas: ['Verb Conjugations', 'Everyday Phrases', 'N5 Kanji'],
  },
  {
    titleUz: '3-Bosqich: N5 Yakunlash & N4 Fe’l Turlari (Potential/Passive)',
    titleEn: 'Stage 3: Completing N5 & Launching N4 Verb Forms',
    descUz:
      'N5 ni to‘liq yakunlash, N4 imkoniyat (Potential) va majburiy fe’l shakllari va berish-olish fe’llari.',
    descEn:
      'Locking down N5, launching N4 potential and passive verbs, and giving/receiving constructs.',
    focusAreas: ['N5 Completion', 'Potential Form', 'Giving/Receiving'],
  },
  {
    titleUz: '4-Bosqich: N4 Shart Mayllari (~ba, ~tara, ~nara) & 150 Kanji',
    titleEn: 'Stage 4: N4 Conditionals (~ba, ~tara, ~nara) & 150 Kanji',
    descUz:
      'Shart mayllarining kundalik hayotda to‘g‘ri qo‘llanishi, 150 ta oraliq kanji va Furiganasiz qisqa matnlar.',
    descEn:
      'Conditional clauses in practical usage, 150 intermediate Kanji, and weaning off Furigana.',
    focusAreas: ['Conditionals', 'Intermediate Kanji', 'Short Reading'],
  },
  {
    titleUz: '5-Bosqich: N4 Dokkai, Choukai & Do‘kon/Stansiya Dialoglari',
    titleEn: 'Stage 5: N4 Reading, Listening & Real-Life Dialogues',
    descUz:
      'E’lonlar, yo‘l-yo‘riqlar va tabiiy tezlikdagi yaponcha audiolar, partikl tuzoqlari ustida ishlash.',
    descEn: 'Public notices, transport instructions, natural native audio, and error remediation.',
    focusAreas: ['N4 Dokkai', 'N4 Choukai', 'Error Vault'],
  },
  {
    titleUz: '6-Bosqich: To‘liq JLPT N4 Mock Imtihon & Sertifikatlash',
    titleEn: 'Stage 6: Timed JLPT N4 Mock Exam & Certification Readiness',
    descUz:
      '180 ballik rasmiy JLPT N4 formatida imtihon simulyatsiyasi, vaqt nazorati va sertifikat darajasiga erishish.',
    descEn:
      'Timed 180-point official JLPT N4 simulation, time management, and achieving N4 certification.',
    focusAreas: ['Timed N4 Mock', 'N4 Certification', 'Exam Strategy'],
  },
];

export const GENERAL_JA_TEMPLATES: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: Kundalik Tanishuv & Asosiy Talaffuz',
    titleEn: 'Stage 1: Everyday Greetings & Natural Pronunciation',
    descUz:
      'O‘zini tanishtirish, xushmuomala so‘zlashuv, his-tuyg‘ularni ifodalash va do‘stona iboralar.',
    descEn:
      'Self-introductions, polite spoken interactions, expressing feelings, and friendly phrases.',
    focusAreas: ['Pronunciation', 'Daily Phrases', 'Polite Spoken Form'],
  },
  {
    titleUz: '2-Bosqich: Sayohat, Restoran va Do‘kon Dialoglari',
    titleEn: 'Stage 2: Travel, Dining & Shopping Kaiwa',
    descUz:
      'Buyurtma berish, narxlarni so‘rash, transport yo‘nalishlarini aniqlash va xarid qilish nutqi.',
    descEn:
      'Ordering food, asking for directions, shopping interactions, and public transit navigation.',
    focusAreas: ['Travel Japanese', 'Ordering & Shopping', 'Audio Fluency'],
  },
  {
    titleUz: '3-Bosqich: Do‘stona Suhbat (Tameguchi) & Madaniyat',
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
      'Qiziqishlar, kino, texnologiya va dolzarb mavzularda o‘z fikrini erkin ifodalash amaliyoti.',
    descEn:
      'Discussing hobbies, media, technology, and expressing nuanced personal viewpoints smoothly.',
    focusAreas: ['Spontaneous Speech', 'Debate & Opinion', 'Speaking Confidence'],
  },
  {
    titleUz: '6-Bosqich: Ravon Yaponcha Muloqot (Fluency)',
    titleEn: 'Stage 6: Natural Conversational Fluency',
    descUz:
      'Yaponiyaliklar bilan to‘siqsiz jonli suhbat, AI Speaking Coach bilan real ssenariylar sinovi.',
    descEn:
      'Uninhibited conversational flow, mastery of spontaneous dialogues, and speaking coach certification.',
    focusAreas: ['Conversational Flow', 'Speaking Coach Drills', 'Native Fluency'],
  },
];

export const IELTS_ROADMAP_TEMPLATES: MilestoneTemplate[] = [
  {
    titleUz: '1-Bosqich: Diagnostik Tahlil, Akademik Lug‘at & Speaking Part 1',
    titleEn: 'Stage 1: Diagnostic Assessment & Speaking Part 1 Fluency',
    descUz:
      'Kuchli va zaif ko‘nikmalarni aniqlash, Academic Word List (AWL) boshlanishi va Speaking Part 1 tezkor savollari.',
    descEn:
      'Identifying core strengths and weaknesses, beginning Academic Word List, and mastering Speaking Part 1 fluency.',
    focusAreas: ['Academic Vocab', 'Speaking Part 1', 'Grammar Foundations'],
  },
  {
    titleUz: '2-Bosqich: Reading Skimming/Scanning & Listening Sections 1-2',
    titleEn: 'Stage 2: Reading Strategies & Listening Accuracy',
    descUz:
      'Matnni tez ko‘zdan kechirish (skimming/scanning), kalit so‘zlarni topish va Listening bo‘yicha xatosiz yozish.',
    descEn:
      'Skimming and scanning strategies, keyword synonym matching, and spelling accuracy in Listening Sections 1 & 2.',
    focusAreas: ['Skimming & Scanning', 'Synonym Mapping', 'Listening Accuracy'],
  },
  {
    titleUz: '3-Bosqich: Writing Task 1 (Grafiklar & Diagrammalar) & Speaking Part 2',
    titleEn: 'Stage 3: Writing Task 1 Report & Speaking Part 2 Cue Card',
    descUz:
      'Bar, line, pie chartlarni tahlil qilish, trendlarni tasvirlash, Speaking Part 2 da 2 daqiqa to‘xtovsiz nutq so‘zlash.',
    descEn:
      'Analyzing charts and diagrams, trend vocabulary, and mastering 2-minute sustained speech for Speaking Part 2.',
    focusAreas: ['Task 1 Overview', 'Trend Vocabulary', 'Cue Card Fluency'],
  },
  {
    titleUz: '4-Bosqich: Writing Task 2 (Akademik Esse) & Listening Sections 3-4',
    titleEn: 'Stage 4: Writing Task 2 Essay & Complex Lectures',
    descUz:
      'Opinion, discussion va problem-solution insholarining mantiqiy tuzilmasi, akademik leksika va murakkab ma’ruzalar.',
    descEn:
      'Structuring argumentative and discussion essays, cohesion devices, and tackling Section 4 academic lectures.',
    focusAreas: ['Task 2 Essays', 'Cohesive Devices', 'Academic Lectures'],
  },
  {
    titleUz: '5-Bosqich: To‘liq Mock Testlar & Xatolar Ustida Intensiv Ishlash',
    titleEn: 'Stage 5: Full-length Timed Mocks & Error Vault Remediation',
    descUz:
      'Haqiqiy imtihon sharoitida to‘liq Mock sinovlari, band ball prognozi va Error Vault dagi barcha xatoliklarni bartaraf etish.',
    descEn:
      'Timed full-length mock exams, band score projection, and deep-dive error vault remediation.',
    focusAreas: ['Timed Mocks', 'Error Vault', 'Band 7+ Vocabulary'],
  },
  {
    titleUz: '6-Bosqich: Yakuniy Imtihon Simulyatsiyasi & Target Band Kafolati',
    titleEn: 'Stage 6: Final Exam Simulation & Target Band Guarantee',
    descUz:
      'Vaqtni qat’iy boshqarish, imtihon stressini yengish va maqsadli Band Score (7.0+) ni to‘liq mustahkamlash.',
    descEn:
      'Strict time management, exam psychology, and solidifying readiness for your target Band Score.',
    focusAreas: ['Final Simulation', 'Time Management', 'Band Score Target'],
  },
];

/**
 * Helper to select or synthesize the best roadmap templates based on current and target levels.
 */
function resolveJlptTemplates(currentLevel: string, targetLevel: string): MilestoneTemplate[] {
  const cleanCurrent = (currentLevel || 'ZERO').trim().toUpperCase();
  const cleanTarget = (targetLevel || 'N5').trim().toUpperCase();

  const currIdx = JLPT_LEVEL_ORDER.indexOf(cleanCurrent as JlptLevel);
  const targIdx = JLPT_LEVEL_ORDER.indexOf(cleanTarget as JlptLevel);

  // Exact pair matches
  if (cleanCurrent === 'N4' && cleanTarget === 'N1') return JLPT_N4_TO_N1_ROADMAP;
  if (cleanCurrent === 'N4' && cleanTarget === 'N2') return JLPT_N4_TO_N2_ROADMAP;
  if (cleanCurrent === 'N4' && cleanTarget === 'N3') return JLPT_N4_TO_N3_ROADMAP;
  if (cleanCurrent === 'N3' && cleanTarget === 'N1') return JLPT_N3_TO_N1_ROADMAP;
  if (cleanCurrent === 'N3' && cleanTarget === 'N2') return JLPT_N3_TO_N2_ROADMAP;
  if (cleanCurrent === 'N2' && cleanTarget === 'N1') return JLPT_N2_TO_N1_ROADMAP;
  if (cleanCurrent === 'N5' && cleanTarget === 'N4') return JLPT_N5_TO_N4_ROADMAP;
  if (cleanCurrent === 'N5' && cleanTarget === 'N3') return JLPT_N5_TO_N3_ROADMAP;
  if (cleanCurrent === 'N5' && cleanTarget === 'N1') return JLPT_N4_TO_N1_ROADMAP; // High ambition
  if (cleanCurrent === 'ZERO' && cleanTarget === 'N4') return JLPT_ZERO_TO_N4_ROADMAP;
  if (cleanCurrent === 'ZERO' && cleanTarget === 'N3') return JLPT_N5_TO_N3_ROADMAP;

  // Single-level deep mastery if current equals target or target is lower
  if (currIdx >= targIdx && targIdx >= 0) {
    const single = JLPT_SINGLE_LEVEL_TEMPLATES[cleanTarget];
    if (single) return single;
  }

  // Fallback to target level single-level template
  const targetTemplate = JLPT_SINGLE_LEVEL_TEMPLATES[cleanTarget];
  if (targetTemplate) return targetTemplate;

  // Default to N5
  return JLPT_SINGLE_LEVEL_TEMPLATES['N5'];
}

/**
 * Generates authentic, pedagogically structured learning milestones for Personal Learning Plans.
 */
export function generatePersonalMilestones(
  language: SupportedLanguage,
  goalType: PlanGoalType,
  currentLevel: string,
  targetLevel: string,
  deadlineMonths: number,
  isUz: boolean = true,
): RoadmapMilestone[] {
  let templates: MilestoneTemplate[] = [];

  if (language === 'ja') {
    if (goalType === 'general_ja') {
      templates = GENERAL_JA_TEMPLATES;
    } else {
      templates = resolveJlptTemplates(currentLevel, targetLevel);
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
