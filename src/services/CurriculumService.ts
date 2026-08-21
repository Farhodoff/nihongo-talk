import { SupportedLanguage } from '../types/lesson';
import { CurriculumCourse, CurriculumLevelNode, CurriculumLessonNode } from '../types/curriculum';
import { CurriculumLessonResolver } from './CurriculumLessonResolver';

function createLessonNode(
    id: string,
    fallbackTitle: string,
    fallbackDesc: string,
    order: number,
    estimatedMinutes: number,
    skill: any,
    prerequisites?: string[]
): CurriculumLessonNode {
    const resolved = CurriculumLessonResolver.resolveLesson(id);
    return {
        id,
        title: resolved.title || fallbackTitle,
        description: fallbackDesc,
        order,
        estimatedMinutes,
        skill: resolved.skill || skill,
        route: resolved.route,
        sourceType: resolved.sourceType,
        contentId: resolved.contentId,
        isContentAvailable: resolved.isAvailable,
        availabilityMessage: resolved.availabilityMessage,
        prerequisites
    };
}

export const CurriculumService = {
    /**
     * Get English General & IELTS curriculum tree.
     */
    getEnglishCurriculum(): CurriculumCourse {
        const levels: CurriculumLevelNode[] = [
            {
                id: 'en-level-a1',
                code: 'A1',
                title: 'Beginner / Elementary',
                order: 1,
                description: 'Asosiy so\'zlashuv, alifbo, tanishuv va kundalik sodda iboralar.',
                units: [
                    {
                        id: 'en-a1-u1',
                        levelCode: 'A1',
                        title: 'Unit 1: Essentials & Greetings',
                        description: 'To be fe\'li, salomlashish va shaxsiy ma\'lumotlar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-a1-u1-l1',
                                'Greetings & Introductions',
                                'Present Simple: To Be (Am, Is, Are) va asosiy olmoshlar.',
                                1,
                                12,
                                'grammar'
                            ),
                            createLessonNode(
                                'en-a1-u1-l2',
                                'Daily Objects & Numbers',
                                'Oddiy narsa-buyumlar va 1-100 gacha sonlar.',
                                2,
                                10,
                                'vocabulary',
                                ['en-a1-u1-l1']
                            )
                        ]
                    }
                ]
            },
            {
                id: 'en-level-a2',
                code: 'A2',
                title: 'Pre-Intermediate',
                order: 2,
                description: 'O\'tgan zamon, sayohat va kundalik erkin muloqot.',
                units: [
                    {
                        id: 'en-a2-u1',
                        levelCode: 'A2',
                        title: 'Unit 1: Past Events & Experiences',
                        description: 'Past Simple, to\'g\'ri va noto\'g\'ri fe\'llar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-a2-u1-l1',
                                'Talking About Yesterday',
                                'Past Simple bilan o\'tgan kunni tasvirlash.',
                                1,
                                15,
                                'grammar'
                            )
                        ]
                    }
                ]
            },
            {
                id: 'en-level-b1',
                code: 'B1',
                title: 'Intermediate',
                order: 3,
                description: 'Murakkab zamonlar, fikr bildirish va mustaqil suhbat.',
                units: [
                    {
                        id: 'en-b1-u1',
                        levelCode: 'B1',
                        title: 'Unit 1: Life Transitions & Future',
                        description: 'Present Perfect va Future forms.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-b1-u1-l1',
                                'Future Plans & Possibilities',
                                'Will, Going to va Present Continuous for future.',
                                1,
                                15,
                                'grammar'
                            )
                        ]
                    }
                ]
            },
            {
                id: 'en-level-b2',
                code: 'B2',
                title: 'Upper-Intermediate / IELTS 6.5+',
                order: 4,
                description: 'Akademik insho, Inversion, IELTS Speaking & Reading strategiyalari.',
                units: [
                    {
                        id: 'en-b2-u1',
                        levelCode: 'B2',
                        title: 'Unit 1: Education & Advanced Grammar',
                        description: 'Akademik tahlil va Inversion qoidalari.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-b2-u1-l1',
                                'Academic Learning & Inversion',
                                'Inversion strukturasi va akademik o\'rganish lug\'ati.',
                                1,
                                15,
                                'grammar'
                            ),
                            createLessonNode(
                                'en-b2-u1-l2',
                                'Advanced Academic Vocabulary & Collocations',
                                'Academic Word List (AWL) kollokatsiyalari.',
                                2,
                                15,
                                'vocabulary',
                                ['en-b2-u1-l1']
                            )
                        ]
                    },
                    {
                        id: 'en-b2-u2',
                        levelCode: 'B2',
                        title: 'Unit 2: IELTS Writing & Speaking Mastery',
                        description: 'Task 1 grafiklar tahlili va Speaking Part 2.',
                        order: 2,
                        lessons: [
                            createLessonNode(
                                'en-b2-u2-l1',
                                'IELTS Essay Structure & Cohesion',
                                'Four-paragraph essay formati va bog\'lovchi so\'zlar.',
                                1,
                                20,
                                'writing',
                                ['en-b2-u1-l2']
                            ),
                            createLessonNode(
                                'en-b2-u2-l2',
                                'Speaking Examiner Simulation',
                                'Part 2 Cue Card va Part 3 tahliliy suhbat.',
                                2,
                                15,
                                'speaking',
                                ['en-b2-u2-l1']
                            )
                        ]
                    }
                ]
            },
            {
                id: 'en-level-c1',
                code: 'C1',
                title: 'Advanced / IELTS 7.5+',
                order: 5,
                description: 'Yuqori darajadagi akademik muloqot va ilmiy matnlar.',
                units: [
                    {
                        id: 'en-c1-u1',
                        levelCode: 'C1',
                        title: 'Unit 1: Nuance, Idioms & Critical Writing',
                        description: 'Nozik ma\'no farqlari va C1 darajadagi idiomatik ifodalar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-c1-u1-l1',
                                'Complex Academic Discourse',
                                'Hedge language, formal tone va argumentatsiyani rivojlantirish.',
                                1,
                                20,
                                'writing'
                            )
                        ]
                    }
                ]
            },
            {
                id: 'en-level-c2',
                code: 'C2',
                title: 'Mastery / Proficiency (IELTS 8.5+)',
                order: 6,
                description: 'Ona tili darajasidagi ravonlik va professional notiqlik.',
                units: [
                    {
                        id: 'en-c2-u1',
                        levelCode: 'C2',
                        title: 'Unit 1: Master-level Rhetoric',
                        description: 'Yuqori darajadagi ritorika va professional suhbatlar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'en-c2-u1-l1',
                                'Native-level Fluency & Precision',
                                'Semantik chuqurlik va uslubiy mukammallik.',
                                1,
                                20,
                                'speaking'
                            )
                        ]
                    }
                ]
            }
        ];

        return {
            id: 'course-en-general',
            language: 'en',
            title: 'English Mastery Curriculum (A1-C2 & IELTS)',
            type: 'general',
            levels
        };
    },

    /**
     * Get Japanese JLPT curriculum tree (N5 - N1).
     */
    getJapaneseCurriculum(): CurriculumCourse {
        const levels: CurriculumLevelNode[] = [
            {
                id: 'ja-level-n5',
                code: 'N5',
                title: 'JLPT N5 (Boshlang\'ich)',
                order: 1,
                description: 'Hiragana, Katakana, 100 ta asosiy Kanji va sodda jumlalar.',
                units: [
                    {
                        id: 'ja-n5-u1',
                        levelCode: 'N5',
                        title: '1-Bo\'lim: Kana & Asosiy Salomlashuv',
                        description: 'Hiragana/Katakana va Desu/Masu strukturasi.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'ja-n5-u1-l1',
                                'Tanishuv va Ko-So-A-Do',
                                'Kore, Sore, Are olmoshlari va tanishtirish.',
                                1,
                                12,
                                'grammar'
                            ),
                            createLessonNode(
                                'ja-n5-u1-l2',
                                'N5 Asosiy Kanji (Sonlar va Kunlar)',
                                '一, 二, 三, 日, 月, 火 belgilari.',
                                2,
                                10,
                                'kanji',
                                ['ja-n5-u1-l1']
                            )
                        ]
                    }
                ]
            },
            {
                id: 'ja-level-n4',
                code: 'N4',
                title: 'JLPT N4 (Quyi O\'rta)',
                order: 2,
                description: 'Te-form, buyruq, istak va 300 ta Kanji.',
                units: [
                    {
                        id: 'ja-n4-u1',
                        levelCode: 'N4',
                        title: '1-Bo\'lim: Harakatlar Ketma-ketligi',
                        description: 'V-te kudasai, V-te mo ii desu.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'ja-n4-u1-l1',
                                'Te-forma va Ruxsat So\'rash',
                                'Kundalik vaziyatlarda iltimos va ruxsat.',
                                1,
                                15,
                                'grammar'
                            )
                        ]
                    }
                ]
            },
            {
                id: 'ja-level-n3',
                code: 'N3',
                title: 'JLPT N3 (O\'rta Bosqich)',
                order: 3,
                description: 'Kundalik matnlarni tushunish, 650 ta Kanji va N3 grammatikasi.',
                units: [
                    {
                        id: 'ja-n3-u1',
                        levelCode: 'N3',
                        title: '1-Bo\'lim: Sayohat va Transport',
                        description: 'Ni tsuite, Ni yotte grammatikasi va sayohat lug\'ati.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'ja-n3-u1-l1',
                                'Sayohat va Transport (N3 Grammatika)',
                                '〜について (haqida), 〜によって (orqali) va Shinkansen so\'zlari.',
                                1,
                                15,
                                'grammar'
                            ),
                            createLessonNode(
                                'ja-n3-u1-l2',
                                'N3 Kanji & Sayohat Leksikasi',
                                '旅, 行, 通, 空 belgilari va birikmalar.',
                                2,
                                15,
                                'kanji',
                                ['ja-n3-u1-l1']
                            )
                        ]
                    },
                    {
                        id: 'ja-n3-u2',
                        levelCode: 'N3',
                        title: '2-Bo\'lim: N3 Matn Tushunish va Tinglab Tushunish',
                        description: 'Dokkai va Chokkai amaliyoti.',
                        order: 2,
                        lessons: [
                            createLessonNode(
                                'ja-n3-u2-l1',
                                'N3 Dokkai Matn Tahlili',
                                'O\'rta uzunlikdagi maqola va bildirishnomalarni o\'qish.',
                                1,
                                15,
                                'reading',
                                ['ja-n3-u1-l2']
                            ),
                            createLessonNode(
                                'ja-n3-u2-l2',
                                'N3 Chokkai Tinglab Tushunish',
                                'Jonli vaziyatlardagi suhbatlarni tushunish.',
                                2,
                                15,
                                'listening',
                                ['ja-n3-u2-l1']
                            )
                        ]
                    }
                ]
            },
            {
                id: 'ja-level-n2',
                code: 'N2',
                title: 'JLPT N2 (Yuqori O\'rta)',
                order: 4,
                description: 'Gazeta, yangiliklar, ishbilarmonlik yapon tili va 1000 ta Kanji.',
                units: [
                    {
                        id: 'ja-n2-u1',
                        levelCode: 'N2',
                        title: '1-Bo\'lim: Biznes va Jamiyat',
                        description: 'N2 rasmiy grammatika va maqolalar.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'ja-n2-u1-l1',
                                'Rasmiy Yapon Tili & Keigo',
                                'Sonkeigo va Kenjougo amaliyoti.',
                                1,
                                20,
                                'grammar'
                            )
                        ]
                    }
                ]
            },
            {
                id: 'ja-level-n1',
                code: 'N1',
                title: 'JLPT N1 (Mukammal / Professional)',
                order: 5,
                description: 'Ilmiy adabiyotlar, siyosat, falsafa va 2000 ta Kanji.',
                units: [
                    {
                        id: 'ja-n1-u1',
                        levelCode: 'N1',
                        title: '1-Bo\'lim: Ilmiy Maqolalar & Murakkab Ritorika',
                        description: 'N1 darajadagi abstrakt mavzular tahlili.',
                        order: 1,
                        lessons: [
                            createLessonNode(
                                'ja-n1-u1-l1',
                                'N1 Ilmiy va Ijtimoiy Matnlar',
                                'Murakkab sintaksis va klassik yapon tili elementlari.',
                                1,
                                20,
                                'reading'
                            )
                        ]
                    }
                ]
            }
        ];

        return {
            id: 'course-ja-jlpt',
            language: 'ja',
            title: 'Japanese JLPT Curriculum (N5-N1)',
            type: 'exam',
            levels
        };
    },

    /**
     * Phase 15: Get prerequisite lesson IDs for a given lesson.
     * Returns empty array if not found or no prerequisites.
     */
    getLessonPrerequisites(lessonId: string): string[] {
        for (const course of [this.getEnglishCurriculum(), this.getJapaneseCurriculum()]) {
            for (const level of course.levels) {
                for (const unit of level.units) {
                    for (const lesson of unit.lessons) {
                        if (lesson.id === lessonId) {
                            return lesson.prerequisites || [];
                        }
                    }
                }
            }
        }
        return [];
    },

    /**
     * Get Course by language.
     */
    getCourse(language: SupportedLanguage): CurriculumCourse {
        return language === 'ja' ? this.getJapaneseCurriculum() : this.getEnglishCurriculum();
    }
};
