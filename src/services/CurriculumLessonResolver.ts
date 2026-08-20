import { SupportedLanguage } from '../types/lesson';
import { MasterySkill } from '../types/mastery';
import { SAMPLE_LESSONS } from '../data/curriculum/sampleCurriculum';
import { IELTS_GRAMMAR_DATABASE } from '../data/ielts/ielts_grammar_data';

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
    resolveLessonByTopic(topicName: string, language: SupportedLanguage): ResolvedLessonContent | null {
        if (!topicName) return null;
        const normalizedQuery = topicName.trim().toLowerCase();

        // 1. Search in IELTS Grammar Database
        if (language === 'en') {
            const match = IELTS_GRAMMAR_DATABASE.find(t =>
                t.title.toLowerCase().includes(normalizedQuery) ||
                t.category?.toLowerCase().includes(normalizedQuery) ||
                normalizedQuery.includes(t.title.toLowerCase())
            );
            if (match) {
                return this.resolveLesson(match.id, 'en');
            }
        }

        // 2. Search in Sample Lessons (for both ja and en)
        const sampleMatch = SAMPLE_LESSONS.find(l =>
            l.language === language && (
                l.title.toLowerCase().includes(normalizedQuery) ||
                normalizedQuery.includes(l.title.toLowerCase())
            )
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
    resolveLesson(lessonId: string, fallbackLang: SupportedLanguage = 'en'): ResolvedLessonContent {
        // 1. Direct match in LessonPlayer database (SAMPLE_LESSONS)
        const sampleLesson = SAMPLE_LESSONS.find(l => l.id === lessonId);
        if (sampleLesson) {
            return {
                lessonId: sampleLesson.id,
                sourceType: 'lesson_player',
                route: `/lesson/${sampleLesson.id}`,
                contentId: sampleLesson.id,
                title: sampleLesson.title,
                language: sampleLesson.language,
                level: sampleLesson.level,
                skill: sampleLesson.language === 'ja' ? 'grammar' : 'grammar',
                isAvailable: true,
                availabilityMessage: "Dars to'liq interaktiv shaklda mavjud."
            };
        }

        // 2. Direct match in Murphy IELTS Grammar Database
        const murphyTopic = IELTS_GRAMMAR_DATABASE.find(t => t.id === lessonId);
        if (murphyTopic) {
            const levelCode = murphyTopic.level === 'A1-A2' ? 'A1' : murphyTopic.level === 'B1-B2' ? 'B2' : 'C1';
            return {
                lessonId: murphyTopic.id,
                sourceType: 'grammar',
                route: `/ielts?topic=${murphyTopic.id}`,
                contentId: murphyTopic.id,
                title: murphyTopic.title,
                language: 'en',
                level: levelCode,
                skill: 'grammar',
                isAvailable: true,
                availabilityMessage: "Grammatika nazariyasi, misollar va test mavjud."
            };
        }

        // 3. Known English Curriculum Nodes
        if (lessonId.startsWith('en-')) {
            if (lessonId === 'en-a1-u1-l1') {
                return {
                    lessonId,
                    sourceType: 'lesson_player',
                    route: '/lesson/en-a1-u1-l1',
                    contentId: 'en-a1-u1-l1',
                    title: 'Greetings & Introductions',
                    language: 'en',
                    level: 'A1',
                    skill: 'grammar',
                    isAvailable: true,
                    availabilityMessage: "A1 Boshlang'ich dars to'liq tayyor."
                };
            }
            if (lessonId === 'en-a1-u1-l2') {
                return {
                    lessonId,
                    sourceType: 'vocabulary',
                    route: '/vocabulary',
                    contentId: 'a1_a2',
                    title: 'Daily Objects & Numbers (A1)',
                    language: 'en',
                    level: 'A1',
                    skill: 'vocabulary',
                    isAvailable: true,
                    availabilityMessage: "Oxford 3000 A1 lug'at to'plami."
                };
            }
            if (lessonId === 'en-a2-u1-l1') {
                return {
                    lessonId,
                    sourceType: 'grammar',
                    route: '/ielts?topic=murphy_u05_past_simple',
                    contentId: 'murphy_u05_past_simple',
                    title: 'Past Simple & Irregular Verbs (A2)',
                    language: 'en',
                    level: 'A2',
                    skill: 'grammar',
                    isAvailable: true,
                    availabilityMessage: "Murphy Grammar A2 bo'limi."
                };
            }
            if (lessonId === 'en-b1-u1-l1') {
                return {
                    lessonId,
                    sourceType: 'grammar',
                    route: '/ielts?topic=murphy_u18_future_continuous_and_perfect',
                    contentId: 'murphy_u18_future_continuous_and_perfect',
                    title: 'Future Forms & Modals (B1)',
                    language: 'en',
                    level: 'B1',
                    skill: 'grammar',
                    isAvailable: true,
                    availabilityMessage: "Murphy Grammar B1 bo'limi."
                };
            }
            if (lessonId === 'en-b2-u1-l1') {
                return {
                    lessonId,
                    sourceType: 'lesson_player',
                    route: '/lesson/en-b2-u1-l1',
                    contentId: 'en-b2-u1-l1',
                    title: 'Academic Learning & Inversion',
                    language: 'en',
                    level: 'B2',
                    skill: 'grammar',
                    isAvailable: true,
                    availabilityMessage: "B2 Akademik Inversiya darsi."
                };
            }
            if (lessonId === 'en-b2-u1-l2') {
                return {
                    lessonId,
                    sourceType: 'vocabulary',
                    route: '/vocabulary',
                    contentId: 'b1_b2',
                    title: 'Academic Word List (AWL) Collocations',
                    language: 'en',
                    level: 'B2',
                    skill: 'vocabulary',
                    isAvailable: true,
                    availabilityMessage: "AWL Akademik lug'at mashg'ulotlari."
                };
            }
            if (lessonId === 'en-b2-u2-l1') {
                return {
                    lessonId,
                    sourceType: 'writing',
                    route: '/ielts/writing',
                    contentId: 'ielts_writing_b2',
                    title: 'IELTS Essay Structure & Cohesion',
                    language: 'en',
                    level: 'B2',
                    skill: 'writing',
                    isAvailable: true,
                    availabilityMessage: "IELTS Writing Task 1 & Task 2 simulyatori."
                };
            }
            if (lessonId === 'en-b2-u2-l2' || lessonId === 'en-c2-u1-l1') {
                return {
                    lessonId,
                    sourceType: 'speaking',
                    route: '/speaking-coach?lang=en',
                    contentId: 'speaking_coach_en',
                    title: 'Speaking Examiner Simulation',
                    language: 'en',
                    level: lessonId.includes('c2') ? 'C2' : 'B2',
                    skill: 'speaking',
                    isAvailable: true,
                    availabilityMessage: "AI IELTS Speaking Examiner bilan jonli muloqot."
                };
            }
            if (lessonId === 'en-c1-u1-l1') {
                return {
                    lessonId,
                    sourceType: 'grammar',
                    route: '/ielts?topic=murphy_u33_inversion_structures',
                    contentId: 'murphy_u33_inversion_structures',
                    title: 'Complex Academic Inversion & Cleft Sentences (C1)',
                    language: 'en',
                    level: 'C1',
                    skill: 'grammar',
                    isAvailable: true,
                    availabilityMessage: "C1 Advanced Grammar darsi."
                };
            }
        }

        // 4. Known Japanese Curriculum Nodes
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
                    availabilityMessage: "N5 Asosiy grammatika viktorinasi."
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
                    availabilityMessage: "N5 Kanji kartalari va mashqlar."
                };
            }
            if (lessonId === 'ja-n4-u1-l1') {
                return {
                    lessonId,
                    sourceType: 'grammar',
                    route: '/jlpt/grammar-quiz?level=N4',
                    contentId: 'jlpt_n4_grammar',
                    title: 'Te-forma va Ruxsat So\'rash (N4)',
                    language: 'ja',
                    level: 'N4',
                    skill: 'grammar',
                    isAvailable: true,
                    availabilityMessage: "N4 Grammatika amaliyoti."
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
                    availabilityMessage: "N3 Interaktiv dars to'liq tayyor."
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
                    availabilityMessage: "N3 Kanji amaliyoti."
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
                    availabilityMessage: "N3 Matn tushunish bo'limi."
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
                    availabilityMessage: "N3 Tinglab tushunish mashqlari."
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
                    availabilityMessage: "N2 Keigo va rasmiy uslub testi."
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
                    availabilityMessage: "N1 Ilmiy maqolalar tahlili."
                };
            }
        }

        // 5. Safe Fallback
        const isJa = fallbackLang === 'ja' || lessonId.startsWith('ja');
        return {
            lessonId,
            sourceType: isJa ? 'jlpt' : 'ielts',
            route: isJa ? '/jlpt' : '/ielts',
            contentId: lessonId,
            title: isJa ? 'Yapon Tili Darsi' : 'English Lesson',
            language: isJa ? 'ja' : 'en',
            level: isJa ? 'N3' : 'B2',
            skill: 'grammar',
            isAvailable: false,
            availabilityMessage: "Ushbu dars kontenti tez orada joylanadi."
        };
    }
};
