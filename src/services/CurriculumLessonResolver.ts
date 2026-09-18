import { SupportedLanguage, Lesson } from '../types/lesson';
import { MasterySkill } from '../types/mastery';
import { SAMPLE_LESSONS } from '../data/curriculum/sampleCurriculum';
import { getCurriculumLessonById } from '../data/curriculum/curriculumLessons';

/**
 * Derive the primary skill of a curriculum lesson from its step content.
 * Real curriculum lessons carry no explicit `skill` field, so we infer it
 * from the first learn step (grammar rules → grammar, vocabulary → vocabulary).
 */
function deriveLessonSkill(lesson: Lesson): MasterySkill {
  for (const step of lesson.steps) {
    if (step.type === 'learn') {
      if (step.learnData?.grammarRules && step.learnData.grammarRules.length > 0) {
        return 'grammar';
      }
    }
  }
  for (const step of lesson.steps) {
    if (step.type === 'learn') {
      if (step.learnData?.vocabulary && step.learnData.vocabulary.length > 0) {
        return 'vocabulary';
      }
    }
  }
  return 'grammar';
}

export const STATIC_CURRICULUM_MAP: Record<
  string,
  {
    title: string;
    skill: MasterySkill;
    route?: string;
    contentId?: string;
    sourceType?: LessonSourceType;
  }
> = {
  // English (Legacy nodes mapped cleanly)
  'en-a1-u1-l1': { title: 'Greetings & Introductions', skill: 'grammar' },
  'en-a1-u1-l2': { title: 'Daily Objects & Numbers', skill: 'vocabulary' },
  'en-a1-u2-l1': { title: 'Family & People', skill: 'reading' },
  'en-a1-u2-l2': { title: 'Colors & Clothes', skill: 'listening' },
  'en-a2-u1-l1': { title: 'Talking About Yesterday', skill: 'grammar' },
  'en-a2-u1-l2': { title: 'My Last Vacation', skill: 'vocabulary' },
  'en-a2-u2-l1': { title: 'Shopping & Directions', skill: 'reading' },
  'en-a2-u2-l2': { title: 'Food & Cooking', skill: 'listening' },
  'en-b1-u1-l1': { title: 'Future Plans & Possibilities', skill: 'grammar' },
  'en-b1-u1-l2': { title: 'Present Perfect vs Past Simple', skill: 'vocabulary' },
  'en-b1-u2-l1': { title: 'Health & Lifestyle', skill: 'reading' },
  'en-b1-u2-l2': { title: 'Technology & Media', skill: 'listening' },
  'en-b2-u1-l1': {
    title: 'Academic Learning & Inversion',
    skill: 'grammar',
    route: '/lesson/en-b2-u1-l1',
    sourceType: 'lesson_player',
  },
  'en-b2-u1-l2': {
    title: 'Advanced Writing Vocabulary',
    skill: 'vocabulary',
    route: '/lesson/en-b2-u1-l2',
    sourceType: 'lesson_player',
  },
  'en-b2-u2-l1': { title: 'IELTS Essay Structure & Cohesion', skill: 'writing' },
  'en-b2-u2-l2': { title: 'Speaking Examiner Simulation', skill: 'speaking' },
  'en-c1-u1-l1': { title: 'Complex Academic Discourse', skill: 'grammar' },
  'en-c1-u1-l2': { title: 'Advanced Idioms & Nuances', skill: 'vocabulary' },
  'en-c1-u2-l1': { title: 'Science & Philosophy Reading', skill: 'reading' },
  'en-c1-u2-l2': { title: 'Business & Negotiation Speaking', skill: 'speaking' },
  'en-c2-u1-l1': { title: 'Native-level Fluency & Precision', skill: 'speaking' },
  'en-c2-u1-l2': { title: 'Rhetoric & Persuasion', skill: 'writing' },
  'en-c2-u2-l1': { title: 'Literary Masterpieces Analysis', skill: 'reading' },

  // Japanese (Legacy & Structured)
  'ja-n5-u1-l1': { title: 'Tanishuv va Ko-So-A-Do', skill: 'grammar' },
  'ja-n5-u1-l2': { title: 'N5 Asosiy Kanji (Sonlar va Kunlar)', skill: 'kanji' },
  'ja-n5-u2-l1': { title: "N5 Boshlang'ich Leksika", skill: 'vocabulary' },
  'ja-n5-u2-l2': { title: 'N5 Sodda Matnlar', skill: 'reading' },
  'ja-n4-u1-l1': { title: "Te-forma va Ruxsat So'rash", skill: 'grammar' },
  'ja-n4-u1-l2': { title: 'N4 Kundalik Leksika', skill: 'vocabulary' },
  'ja-n4-u2-l1': { title: 'N4 Intermediate Kanji', skill: 'kanji' },
  'ja-n4-u2-l2': { title: 'N4 Qisqa Dialoqlar', skill: 'listening' },
  'ja-n3-u1-l1': { title: 'Sayohat va Transport (N3 Grammatika)', skill: 'grammar' },
  'ja-n3-u1-l2': { title: 'N3 Kanji & Sayohat Leksikasi', skill: 'kanji' },
  'ja-n3-u2-l1': { title: 'N3 Dokkai Matn Tahlili', skill: 'reading' },
  'ja-n3-u2-l2': { title: 'N3 Chokkai Tinglab Tushunish', skill: 'listening' },
  'ja-n2-u1-l1': { title: 'Rasmiy Yapon Tili & Keigo', skill: 'grammar' },
  'ja-n2-u1-l2': { title: 'N2 Gazeta Leksikasi', skill: 'vocabulary' },
  'ja-n2-u2-l1': { title: 'N2 Murakkab Kanji', skill: 'kanji' },
  'ja-n2-u2-l2': { title: 'N2 Ijtimoiy Matnlar', skill: 'reading' },
  'ja-n1-u1-l1': { title: 'N1 Ilmiy va Ijtimoiy Matnlar', skill: 'reading' },
  'ja-n1-u1-l2': { title: 'N1 Klassik Adabiyot', skill: 'reading' },
  'ja-n1-u2-l1': { title: 'N1 Professional Leksika', skill: 'vocabulary' },

  // Minna no Nihongo N5 (1–25)
  'ja-minna-l1': {
    title: "1-Dars: Tanishuv va O'zini tanishtirish",
    skill: 'grammar',
    route: '/lesson/ja-minna-l1',
    sourceType: 'lesson_player',
  },
  'ja-minna-l2': {
    title: '2-Dars: Kore, Sore, Are va Buyumlar',
    skill: 'grammar',
    route: '/lesson/ja-minna-l2',
    sourceType: 'lesson_player',
  },
  'ja-minna-l3': {
    title: '3-Dars: Koko, Soko, Asoko va Joylar',
    skill: 'grammar',
    route: '/lesson/ja-minna-l3',
    sourceType: 'lesson_player',
  },
  'ja-minna-l4': {
    title: "4-Dars: Soat, Kunlar va Vaqt fe'llari",
    skill: 'grammar',
    route: '/lesson/ja-minna-l4',
    sourceType: 'lesson_player',
  },
  'ja-minna-l5': {
    title: "5-Dars: Harakat fe'llari (Ikimasu, Kimasu)",
    skill: 'grammar',
    route: '/lesson/ja-minna-l5',
    sourceType: 'lesson_player',
  },
  'ja-minna-l6': {
    title: '6-Dars: Obyekt va Harakat (Wo, De yuklamalari)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l6',
    sourceType: 'lesson_player',
  },
  'ja-minna-l7': {
    title: '7-Dars: Vosita va Harakat (De, Agemasu, Moraimasu)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l7',
    sourceType: 'lesson_player',
  },
  'ja-minna-l8': {
    title: '8-Dars: Sifatlar (I-keiyoushi, Na-keiyoushi)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l8',
    sourceType: 'lesson_player',
  },
  'ja-minna-l9': {
    title: '9-Dars: Yoqtirish, Mahorat va Sabab (Ga, Kara)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l9',
    sourceType: 'lesson_player',
  },
  'ja-minna-l10': {
    title: '10-Dars: Mavjudlik (Imasu, Arimasu)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l10',
    sourceType: 'lesson_player',
  },
  'ja-minna-l11': {
    title: "11-Dars: Sanoq so'zlari va Miqdor",
    skill: 'grammar',
    route: '/lesson/ja-minna-l11',
    sourceType: 'lesson_player',
  },
  'ja-minna-l12': {
    title: "12-Dars: Sifat va Otlarning o'tgan zamoni, Taqqoslash",
    skill: 'grammar',
    route: '/lesson/ja-minna-l12',
    sourceType: 'lesson_player',
  },
  'ja-minna-l13': {
    title: '13-Dars: Istak va Maqsad (Hoshii, Tai, Ni ikimasu)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l13',
    sourceType: 'lesson_player',
  },
  'ja-minna-l14': {
    title: '14-Dars: Te-forma va Iltimos (Te kudasai)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l14',
    sourceType: 'lesson_player',
  },
  'ja-minna-l15': {
    title: '15-Dars: Ruxsat va Taqiq (Te mo ii, Te wa ikemasen)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l15',
    sourceType: 'lesson_player',
  },
  'ja-minna-l16': {
    title: '16-Dars: Ketma-ket harakatlar (Te-forma, Kara)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l16',
    sourceType: 'lesson_player',
  },
  'ja-minna-l17': {
    title: '17-Dars: Nai-forma va Majburiyat (Naide kudasai, Nakereba narimasen)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l17',
    sourceType: 'lesson_player',
  },
  'ja-minna-l18': {
    title: '18-Dars: Jisho-forma va Qobiliyat (Koto ga dekimasu)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l18',
    sourceType: 'lesson_player',
  },
  'ja-minna-l19': {
    title: '19-Dars: Ta-forma va Tajriba (Ta koto ga arimasu)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l19',
    sourceType: 'lesson_player',
  },
  'ja-minna-l20': {
    title: '20-Dars: Oddiy uslub (Futsuugo)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l20',
    sourceType: 'lesson_player',
  },
  'ja-minna-l21': {
    title: '21-Dars: Fikr va Iqtibos (To omoimasu, To iimashita)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l21',
    sourceType: 'lesson_player',
  },
  'ja-minna-l22': {
    title: '22-Dars: Aniqlovchi ergash gaplar (Rentaishushoku)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l22',
    sourceType: 'lesson_player',
  },
  'ja-minna-l23': {
    title: '23-Dars: Toki va To (Vaqt va Tabiiy natija)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l23',
    sourceType: 'lesson_player',
  },
  'ja-minna-l24': {
    title: '24-Dars: Kuremasu va Harakat hadyasi',
    skill: 'grammar',
    route: '/lesson/ja-minna-l24',
    sourceType: 'lesson_player',
  },
  'ja-minna-l25': {
    title: "25-Dars: Tara va Demo (Shart va To'siqsiz harakat)",
    skill: 'grammar',
    route: '/lesson/ja-minna-l25',
    sourceType: 'lesson_player',
  },

  // Minna no Nihongo N4 (26–50)
  'ja-minna-l26': {
    title: '26-Dars: 〜んです / 〜んですが (Izoh va iltimos)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l26',
    sourceType: 'lesson_player',
  },
  'ja-minna-l27': {
    title: "27-Dars: Fe'llarning Potensial shakli",
    skill: 'grammar',
    route: '/lesson/ja-minna-l27',
    sourceType: 'lesson_player',
  },
  'ja-minna-l28': {
    title: '28-Dars: 〜ながら va 〜し〜し (Bir vaqtda va sabablar)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l28',
    sourceType: 'lesson_player',
  },
  'ja-minna-l29': {
    title: '29-Dars: 〜てしまいました (Tugatish, afsuslanish)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l29',
    sourceType: 'lesson_player',
  },
  'ja-minna-l30': {
    title: '30-Dars: 〜てあります va 〜ておきます (Holat va tayyorgarlik)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l30',
    sourceType: 'lesson_player',
  },
  'ja-minna-l31': {
    title: '31-Dars: Niyat va Taklif shakli (意向形)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l31',
    sourceType: 'lesson_player',
  },
  'ja-minna-l32': {
    title: '32-Dars: 〜ほうがいい va Taxmin (〜でしょう)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l32',
    sourceType: 'lesson_player',
  },
  'ja-minna-l33': {
    title: '33-Dars: Buyruq va Taqiq shakllari (命令形・禁止形)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l33',
    sourceType: 'lesson_player',
  },
  'ja-minna-l34': {
    title: '34-Dars: 〜とおりに va 〜あとで (Ketma-ketlik)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l34',
    sourceType: 'lesson_player',
  },
  'ja-minna-l35': {
    title: '35-Dars: Shart mayli (条件形: 〜ば / 〜なら)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l35',
    sourceType: 'lesson_player',
  },
  'ja-minna-l36': {
    title: '36-Dars: 〜ように va 〜ようになります',
    skill: 'grammar',
    route: '/lesson/ja-minna-l36',
    sourceType: 'lesson_player',
  },
  'ja-minna-l37': {
    title: '37-Dars: Majhul nisbat (受身: 〜れる / 〜られる)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l37',
    sourceType: 'lesson_player',
  },
  'ja-minna-l38': {
    title: '38-Dars: Gaplarni otlashtirish (〜のは / 〜のが)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l38',
    sourceType: 'lesson_player',
  },
  'ja-minna-l39': {
    title: '39-Dars: Sabab-oqibat ifodalash (〜て / 〜ので)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l39',
    sourceType: 'lesson_player',
  },
  'ja-minna-l40': {
    title: "40-Dars: So'roq gapli birikmalar (〜かどうか / 〜か)",
    skill: 'grammar',
    route: '/lesson/ja-minna-l40',
    sourceType: 'lesson_player',
  },
  'ja-minna-l41': {
    title: "41-Dars: Hadya va yaxshilik fe'llari (授受動詞)",
    skill: 'grammar',
    route: '/lesson/ja-minna-l41',
    sourceType: 'lesson_player',
  },
  'ja-minna-l42': {
    title: '42-Dars: Maqsad va foydalanish (〜ために / 〜のに)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l42',
    sourceType: 'lesson_player',
  },
  'ja-minna-l43': {
    title: "43-Dars: Tashqi ko'rinish va taxmin (〜そうです)",
    skill: 'grammar',
    route: '/lesson/ja-minna-l43',
    sourceType: 'lesson_player',
  },
  'ja-minna-l44': {
    title: '44-Dars: Haddan oshish (〜すぎます) va Qulaylik (〜やすい)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l44',
    sourceType: 'lesson_player',
  },
  'ja-minna-l45': {
    title: '45-Dars: Holat va zidlik (〜場合は / 〜のに)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l45',
    sourceType: 'lesson_player',
  },
  'ja-minna-l46': {
    title: '46-Dars: Harakat lahzalari (〜ところです) va 〜ばかり',
    skill: 'grammar',
    route: '/lesson/ja-minna-l46',
    sourceType: 'lesson_player',
  },
  'ja-minna-l47': {
    title: '47-Dars: Eshitilgan xabar (〜そうです) va 〜ようです',
    skill: 'grammar',
    route: '/lesson/ja-minna-l47',
    sourceType: 'lesson_player',
  },
  'ja-minna-l48': {
    title: '48-Dars: Majburiy va ijozat nisbati (使役)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l48',
    sourceType: 'lesson_player',
  },
  'ja-minna-l49': {
    title: '49-Dars: Sonkeigo (Hurmat nutqi: お/ご〜になります)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l49',
    sourceType: 'lesson_player',
  },
  'ja-minna-l50': {
    title: '50-Dars: Kenjougo va Teineigo (Kamtarlik nutqi)',
    skill: 'grammar',
    route: '/lesson/ja-minna-l50',
    sourceType: 'lesson_player',
  },
};

export type LessonSourceType =
  | 'lesson_player'
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'listening'
  | 'speaking'
  | 'writing'
  | 'jlpt'
  | 'ielts';

export interface ResolvedLessonContent {
  lessonId: string;
  sourceType: LessonSourceType;
  route: string;
  contentId: string;
  title: string;
  language: SupportedLanguage;
  level: string;
  skill: MasterySkill;
  isAvailable: boolean;
  availabilityMessage: string;
}

export const CurriculumLessonResolver = {
  /**
   * Resolves the best target lesson content by searching for a topic title/description match.
   */
  resolveLessonByTopic(
    topicName: string,
    language: SupportedLanguage,
  ): ResolvedLessonContent | null {
    if (!topicName) return null;
    const normalizedQuery = topicName.trim().toLowerCase();

    // Search in Sample Lessons
    const sampleMatch = SAMPLE_LESSONS.find(
      (l) =>
        l.language === language &&
        (l.title.toLowerCase().includes(normalizedQuery) ||
          normalizedQuery.includes(l.title.toLowerCase())),
    );
    if (sampleMatch) {
      return this.resolveLesson(sampleMatch.id, language);
    }

    return null;
  },

  /**
   * Resolves any curriculum lesson ID to its true content source and route.
   * Prevents placeholder routing and ensures strict language & level consistency.
   */
  resolveLesson(lessonId: string, _fallbackLang: SupportedLanguage = 'ja'): ResolvedLessonContent {
    // 0. Phase 19 — real curriculum registry is the canonical content source.
    const realLesson = getCurriculumLessonById(lessonId);
    if (realLesson) {
      const staticSkill = STATIC_CURRICULUM_MAP[lessonId]?.skill;
      return {
        lessonId: realLesson.id,
        sourceType: 'lesson_player',
        route: `/lesson/${realLesson.id}`,
        contentId: realLesson.id,
        title: realLesson.title,
        language: realLesson.language,
        level: realLesson.level,
        skill: staticSkill || deriveLessonSkill(realLesson),
        isAvailable: true,
        availabilityMessage: "Dars to'liq interaktiv shaklda mavjud.",
      };
    }

    // 1. Known Japanese Curriculum Nodes (hardcoded routing overrides)
    if (lessonId.startsWith('ja-')) {
      if (lessonId === 'ja-n5-u1-l1') {
        return {
          lessonId,
          sourceType: 'grammar',
          route: '/jlpt/grammar-quiz?level=N5',
          contentId: 'jlpt_n5_grammar',
          title: 'Tanishuv va Ko-So-A-Do (N5)',
          language: 'ja',
          level: 'N5',
          skill: 'grammar',
          isAvailable: true,
          availabilityMessage: 'N5 Asosiy grammatika viktorinasi.',
        };
      }
      if (lessonId === 'ja-n5-u1-l2') {
        return {
          lessonId,
          sourceType: 'jlpt',
          route: '/jlpt?tab=kanji&level=N5',
          contentId: 'jlpt_n5_kanji',
          title: 'N5 Asosiy Kanji (Sonlar va Kunlar)',
          language: 'ja',
          level: 'N5',
          skill: 'kanji',
          isAvailable: true,
          availabilityMessage: 'N5 Kanji kartalari va mashqlar.',
        };
      }
      if (lessonId === 'ja-n4-u1-l1') {
        return {
          lessonId,
          sourceType: 'grammar',
          route: '/jlpt/grammar-quiz?level=N4',
          contentId: 'jlpt_n4_grammar',
          title: "Te-forma va Ruxsat So'rash (N4)",
          language: 'ja',
          level: 'N4',
          skill: 'grammar',
          isAvailable: true,
          availabilityMessage: 'N4 Grammatika amaliyoti.',
        };
      }
      if (lessonId === 'ja-n3-u1-l1') {
        return {
          lessonId,
          sourceType: 'lesson_player',
          route: '/lesson/ja-n3-u1-l1',
          contentId: 'ja-n3-u1-l1',
          title: 'Sayohat va Transport (旅行と交通)',
          language: 'ja',
          level: 'N3',
          skill: 'grammar',
          isAvailable: true,
          availabilityMessage: "N3 Interaktiv dars to'liq tayyor.",
        };
      }
      if (lessonId === 'ja-n3-u1-l2') {
        return {
          lessonId,
          sourceType: 'jlpt',
          route: '/jlpt?tab=kanji&level=N3',
          contentId: 'jlpt_n3_kanji',
          title: 'N3 Kanji & Sayohat Leksikasi',
          language: 'ja',
          level: 'N3',
          skill: 'kanji',
          isAvailable: true,
          availabilityMessage: 'N3 Kanji amaliyoti.',
        };
      }
      if (lessonId === 'ja-n3-u2-l1') {
        return {
          lessonId,
          sourceType: 'reading',
          route: '/jlpt/reading',
          contentId: 'jlpt_n3_dokkai',
          title: 'N3 Dokkai Matn Tahlili',
          language: 'ja',
          level: 'N3',
          skill: 'reading',
          isAvailable: true,
          availabilityMessage: "N3 Matn tushunish bo'limi.",
        };
      }
      if (lessonId === 'ja-n3-u2-l2') {
        return {
          lessonId,
          sourceType: 'listening',
          route: '/jlpt/listening',
          contentId: 'jlpt_n3_chokkai',
          title: 'N3 Chokkai Tinglab Tushunish',
          language: 'ja',
          level: 'N3',
          skill: 'listening',
          isAvailable: true,
          availabilityMessage: 'N3 Tinglab tushunish mashqlari.',
        };
      }
      if (lessonId === 'ja-n2-u1-l1') {
        return {
          lessonId,
          sourceType: 'grammar',
          route: '/jlpt/grammar-quiz?level=N2',
          contentId: 'jlpt_n2_grammar',
          title: 'Rasmiy Yapon Tili & Keigo (N2)',
          language: 'ja',
          level: 'N2',
          skill: 'grammar',
          isAvailable: true,
          availabilityMessage: 'N2 Keigo va rasmiy uslub testi.',
        };
      }
      if (lessonId === 'ja-n1-u1-l1') {
        return {
          lessonId,
          sourceType: 'reading',
          route: '/jlpt/reading',
          contentId: 'jlpt_n1_reading',
          title: 'N1 Ilmiy va Ijtimoiy Matnlar',
          language: 'ja',
          level: 'N1',
          skill: 'reading',
          isAvailable: true,
          availabilityMessage: 'N1 Ilmiy maqolalar tahlili.',
        };
      }
    }

    // 4. STATIC_CURRICULUM_MAP fallback
    const parts = lessonId.split('-');
    if (parts.length === 4 && (parts[0] === 'en' || parts[0] === 'ja')) {
      const language = parts[0] as SupportedLanguage;
      const level = parts[1].toUpperCase();

      const staticNode = STATIC_CURRICULUM_MAP[lessonId];
      if (staticNode) {
        let sourceType: LessonSourceType = staticNode.sourceType || 'lesson_player';
        let route = staticNode.route || `/lesson/${lessonId}`;
        let contentId = staticNode.contentId || lessonId;
        const skill = staticNode.skill;

        if (!staticNode.sourceType && !staticNode.route) {
          if (skill === 'grammar') {
            sourceType = 'grammar';
            route = `/jlpt/grammar-quiz?level=${level}`;
          } else if (skill === 'vocabulary') {
            sourceType = 'vocabulary';
            route = `/jlpt?tab=vocabulary&level=${level}`;
            contentId = `vocab_${level.toLowerCase()}`;
          } else if (skill === 'kanji') {
            sourceType = 'jlpt';
            route = `/jlpt?tab=kanji&level=${level}`;
          } else if (skill === 'reading') {
            sourceType = 'reading';
            route = '/jlpt/reading';
          } else if (skill === 'listening') {
            sourceType = 'listening';
            route = '/jlpt/listening';
          } else if (skill === 'speaking') {
            sourceType = 'speaking';
            route = `/speaking-coach?lang=${language}`;
          } else if (skill === 'writing') {
            sourceType = 'writing';
            route = '/study-mode';
          }
        }

        return {
          lessonId,
          sourceType,
          route,
          contentId,
          title: staticNode.title,
          language,
          level,
          skill,
          isAvailable: true,
          availabilityMessage: `${level} darajasidagi ${skill} darsi.`,
        };
      }
    }

    // 5. Fallback: check SAMPLE_LESSONS for any lesson with full content
    const sampleLesson = SAMPLE_LESSONS.find((l) => l.id === lessonId);
    if (sampleLesson) {
      return {
        lessonId: sampleLesson.id,
        sourceType: 'lesson_player',
        route: `/lesson/${sampleLesson.id}`,
        contentId: sampleLesson.id,
        title: sampleLesson.title,
        language: sampleLesson.language,
        level: sampleLesson.level,
        skill: 'grammar',
        isAvailable: true,
        availabilityMessage: "Dars to'liq interaktiv shaklda mavjud.",
      };
    }

    // 6. Safe Fallback
    return {
      lessonId,
      sourceType: 'jlpt',
      route: '/jlpt',
      contentId: lessonId,
      title: 'Yapon Tili Darsi',
      language: 'ja',
      level: 'N3',
      skill: 'grammar',
      isAvailable: false,
      availabilityMessage: 'Ushbu dars kontenti tez orada joylanadi.',
    };
  },
};
