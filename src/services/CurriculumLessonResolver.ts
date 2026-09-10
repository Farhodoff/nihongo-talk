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

  // Japanese
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
