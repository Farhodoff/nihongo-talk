import { SupportedLanguage } from '../types/lesson';
import { CurriculumCourse, CurriculumLevelNode } from '../types/curriculum';

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
                            {
                                id: 'en-a1-u1-l1',
                                title: 'Greetings & Introductions',
                                description: 'Present Simple: To Be (Am, Is, Are) va asosiy olmoshlar.',
                                order: 1,
                                estimatedMinutes: 12,
                                skill: 'grammar',
                                route: '/lesson/en-b2-u1-l1' // Fallback to live player
                            },
                            {
                                id: 'en-a1-u1-l2',
                                title: 'Daily Objects & Numbers',
                                description: 'Oddiy narsa-buyumlar va 1-100 gacha sonlar.',
                                order: 2,
                                estimatedMinutes: 10,
                                skill: 'vocabulary',
                                route: '/vocabulary',
                                prerequisites: ['en-a1-u1-l1']
                            }
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
                            {
                                id: 'en-a2-u1-l1',
                                title: 'Talking About Yesterday',
                                description: 'Past Simple bilan o\'tgan kunni tasvirlash.',
                                order: 1,
                                estimatedMinutes: 15,
                                skill: 'grammar',
                                route: '/lesson/en-b2-u1-l1'
                            }
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
                            {
                                id: 'en-b1-u1-l1',
                                title: 'Future Plans & Possibilities',
                                description: 'Will, Going to va Present Continuous for future.',
                                order: 1,
                                estimatedMinutes: 15,
                                skill: 'grammar',
                                route: '/lesson/en-b2-u1-l1'
                            }
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
                            {
                                id: 'en-b2-u1-l1',
                                title: 'Academic Learning & Inversion',
                                description: 'Inversion strukturasi va akademik o\'rganish lug\'ati.',
                                order: 1,
                                estimatedMinutes: 15,
                                skill: 'grammar',
                                route: '/lesson/en-b2-u1-l1'
                            },
                            {
                                id: 'en-b2-u1-l2',
                                title: 'Advanced Academic Vocabulary & Collocations',
                                description: 'Academic Word List (AWL) kollokatsiyalari.',
                                order: 2,
                                estimatedMinutes: 15,
                                skill: 'vocabulary',
                                route: '/lesson/en-b2-u1-l2',
                                prerequisites: ['en-b2-u1-l1']
                            }
                        ]
                    },
                    {
                        id: 'en-b2-u2',
                        levelCode: 'B2',
                        title: 'Unit 2: IELTS Writing & Speaking Mastery',
                        description: 'Task 1 grafiklar tahlili va Speaking Part 2.',
                        order: 2,
                        lessons: [
                            {
                                id: 'en-b2-u2-l1',
                                title: 'IELTS Essay Structure & Cohesion',
                                description: 'Four-paragraph essay formati va bog\'lovchi so\'zlar.',
                                order: 1,
                                estimatedMinutes: 20,
                                skill: 'writing',
                                route: '/ielts/writing',
                                prerequisites: ['en-b2-u1-l2']
                            },
                            {
                                id: 'en-b2-u2-l2',
                                title: 'Speaking Examiner Simulation',
                                description: 'Part 2 Cue Card va Part 3 tahliliy suhbat.',
                                order: 2,
                                estimatedMinutes: 15,
                                skill: 'speaking',
                                route: '/speaking-coach?lang=en',
                                prerequisites: ['en-b2-u2-l1']
                            }
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
                            {
                                id: 'en-c1-u1-l1',
                                title: 'Complex Academic Discourse',
                                description: 'Hedge language, formal tone va argumentatsiyani rivojlantirish.',
                                order: 1,
                                estimatedMinutes: 20,
                                skill: 'writing',
                                route: '/ielts/writing'
                            }
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
                            {
                                id: 'en-c2-u1-l1',
                                title: 'Native-level Fluency & Precision',
                                description: 'Semantik chuqurlik va uslubiy mukammallik.',
                                order: 1,
                                estimatedMinutes: 20,
                                skill: 'speaking',
                                route: '/speaking-coach?lang=en'
                            }
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
                            {
                                id: 'ja-n5-u1-l1',
                                title: 'Tanishuv va Ko-So-A-Do',
                                description: 'Kore, Sore, Are olmoshlari va tanishtirish.',
                                order: 1,
                                estimatedMinutes: 12,
                                skill: 'grammar',
                                route: '/lesson/ja-n3-u1-l1'
                            },
                            {
                                id: 'ja-n5-u1-l2',
                                title: 'N5 Asosiy Kanji (Sonlar va Kunlar)',
                                description: '一, 二, 三, 日, 月, 火 belgilari.',
                                order: 2,
                                estimatedMinutes: 10,
                                skill: 'kanji',
                                route: '/jlpt',
                                prerequisites: ['ja-n5-u1-l1']
                            }
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
                            {
                                id: 'ja-n4-u1-l1',
                                title: 'Te-forma va Ruxsat So\'rash',
                                description: 'Kundalik vaziyatlarda iltimos va ruxsat.',
                                order: 1,
                                estimatedMinutes: 15,
                                skill: 'grammar',
                                route: '/lesson/ja-n3-u1-l1'
                            }
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
                            {
                                id: 'ja-n3-u1-l1',
                                title: 'Sayohat va Transport (N3 Grammatika)',
                                description: '〜について (haqida), 〜によって (orqali) va Shinkansen so\'zlari.',
                                order: 1,
                                estimatedMinutes: 15,
                                skill: 'grammar',
                                route: '/lesson/ja-n3-u1-l1'
                            },
                            {
                                id: 'ja-n3-u1-l2',
                                title: 'N3 Kanji & Sayohat Leksikasi',
                                description: '旅, 行, 通, 空 belgilari va birikmalar.',
                                order: 2,
                                estimatedMinutes: 15,
                                skill: 'kanji',
                                route: '/lesson/ja-n3-u1-l2',
                                prerequisites: ['ja-n3-u1-l1']
                            }
                        ]
                    },
                    {
                        id: 'ja-n3-u2',
                        levelCode: 'N3',
                        title: '2-Bo\'lim: N3 Matn Tushunish va Tinglab Tushunish',
                        description: 'Dokkai va Chokkai amaliyoti.',
                        order: 2,
                        lessons: [
                            {
                                id: 'ja-n3-u2-l1',
                                title: 'N3 Dokkai Matn Tahlili',
                                description: 'O\'rta uzunlikdagi maqola va bildirishnomalarni o\'qish.',
                                order: 1,
                                estimatedMinutes: 15,
                                skill: 'reading',
                                route: '/jlpt/reading',
                                prerequisites: ['ja-n3-u1-l2']
                            },
                            {
                                id: 'ja-n3-u2-l2',
                                title: 'N3 Chokkai Tinglab Tushunish',
                                description: 'Jonli vaziyatlardagi suhbatlarni tushunish.',
                                order: 2,
                                estimatedMinutes: 15,
                                skill: 'listening',
                                route: '/jlpt/listening',
                                prerequisites: ['ja-n3-u2-l1']
                            }
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
                            {
                                id: 'ja-n2-u1-l1',
                                title: 'Rasmiy Yapon Tili & Keigo',
                                description: 'Sonkeigo va Kenjougo amaliyoti.',
                                order: 1,
                                estimatedMinutes: 20,
                                skill: 'grammar',
                                route: '/jlpt/grammar-quiz'
                            }
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
                            {
                                id: 'ja-n1-u1-l1',
                                title: 'N1 Ilmiy va Ijtimoiy Matnlar',
                                description: 'Murakkab sintaksis va klassik yapon tili elementlari.',
                                order: 1,
                                estimatedMinutes: 20,
                                skill: 'reading',
                                route: '/jlpt/reading'
                            }
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
     * Get Course by language.
     */
    getCourse(language: SupportedLanguage): CurriculumCourse {
        return language === 'ja' ? this.getJapaneseCurriculum() : this.getEnglishCurriculum();
    }
};
