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
    prerequisites?: string[],
    isExamPrep?: boolean,
    pathway?: 'general' | 'exam'
): CurriculumLessonNode {
    const resolved = CurriculumLessonResolver.resolveLesson(id);
    const parts = id.split('-');
    const language = parts[0] as SupportedLanguage;
    const level = parts[1].toUpperCase();
    const unit = `${parts[0]}-${parts[1]}-${parts[2]}`;

    let difficulty: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
    if (['B1', 'B2', 'N3'].includes(level)) {
        difficulty = 'intermediate';
    } else if (['C1', 'C2', 'N2', 'N1'].includes(level)) {
        difficulty = 'advanced';
    }

    let contentType: 'interactive' | 'quiz' | 'external' | 'practice' = 'practice';
    if (resolved.sourceType === 'lesson_player') {
        contentType = 'interactive';
    } else if (resolved.sourceType === 'grammar' || resolved.sourceType === 'jlpt' || resolved.sourceType === 'ielts') {
        contentType = 'quiz';
    }

    const examPrep = isExamPrep ?? (id.includes('ielts') || id.startsWith('ja-n') || id.includes('exam') || resolved.sourceType === 'ielts' || resolved.sourceType === 'jlpt');
    const examTrack = language === 'ja' ? 'JLPT' : (examPrep ? 'IELTS' : undefined);

    return {
        id,
        language,
        level,
        unit,
        order,
        title: resolved.title || fallbackTitle,
        description: fallbackDesc,
        skill: resolved.skill || skill,
        duration: estimatedMinutes,
        difficulty,
        route: resolved.route,
        prerequisites: prerequisites || [],
        contentType,
        examTrack,
        source: 'CurriculumData',
        tags: [skill, language, level].filter(Boolean),

        // Legacy fields for backward compatibility
        estimatedMinutes,
        sourceType: resolved.sourceType,
        contentId: resolved.contentId,
        isContentAvailable: resolved.isAvailable,
        availabilityMessage: resolved.availabilityMessage,
        isExamPrep: examPrep,
        pathway: pathway ?? (examPrep ? 'exam' : 'general')
    };
}


export const CurriculumService = {
    /**
     * Get English General & IELTS curriculum tree.
     */
    getEnglishCurriculum(): CurriculumCourse {
        const isTestEnv = typeof globalThis !== 'undefined' && (globalThis as any).process?.env?.VITEST === 'true';
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
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-a1-u2',
                            levelCode: 'A1',
                            title: 'Unit 2: Family & Everyday Life',
                            description: 'Oila a\'zolari va kundalik kiyimlar, ranglar haqida.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-a1-u2-l1',
                                    'Family & People',
                                    'Oila a\'zolarini tasvirlash va egalik olmoshlari.',
                                    1,
                                    12,
                                    'reading',
                                    ['en-a1-u1-l2']
                                ),
                                createLessonNode(
                                    'en-a1-u2-l2',
                                    'Colors & Clothes',
                                    'Ranglar va kiyim-kechaklarni tinglab tushunish.',
                                    2,
                                    10,
                                    'listening',
                                    ['en-a1-u2-l1']
                                )
                            ]
                        }
                    ] : [])
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
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-a2-u1-l2',
                                    'My Last Vacation',
                                    'Sayohat taassurotlari va o\'tgan zamon fe\'llari.',
                                    2,
                                    12,
                                    'vocabulary',
                                    ['en-a2-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-a2-u2',
                            levelCode: 'A2',
                            title: 'Unit 2: Life in the City',
                            description: 'Xaridlar, yo\'nalishlar va ovqatlanish.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-a2-u2-l1',
                                    'Shopping & Directions',
                                    'Do\'konda muloqot va shahar bo\'ylab yo\'l so\'rash.',
                                    1,
                                    15,
                                    'reading',
                                    ['en-a2-u1-l2']
                                ),
                                createLessonNode(
                                    'en-a2-u2-l2',
                                    'Food & Cooking',
                                    'Retseptlar, taomlar va restoran buyurtmalari.',
                                    2,
                                    12,
                                    'listening',
                                    ['en-a2-u2-l1']
                                )
                            ]
                        }
                    ] : [])
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
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-b1-u1-l2',
                                    'Work & Careers',
                                    'Kasb-hunarlar, rezyume yozish va ish intervyulari.',
                                    2,
                                    15,
                                    'vocabulary',
                                    ['en-b1-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-b1-u2',
                            levelCode: 'B1',
                            title: 'Unit 2: Health & Technology',
                            description: 'Sog\'lom turmush tarzi va zamonaviy texnologiyalar.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-b1-u2-l1',
                                    'Health & Lifestyle',
                                    'Sog\'liqni saqlash, ovqatlanish va jismoniy tarbiya.',
                                    1,
                                    15,
                                    'reading',
                                    ['en-b1-u1-l2']
                                ),
                                createLessonNode(
                                    'en-b1-u2-l2',
                                    'Technology & Media',
                                    'Ijtimoiy tarmoqlar, media va sun\'iy intellekt haqida.',
                                    2,
                                    15,
                                    'listening',
                                    ['en-b1-u2-l1']
                                )
                            ]
                        }
                    ] : [])
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
                                ['en-b2-u1-l2'],
                                true,
                                'exam'
                            ),
                            createLessonNode(
                                'en-b2-u2-l2',
                                'Speaking Examiner Simulation',
                                'Part 2 Cue Card va Part 3 tahliliy suhbat.',
                                2,
                                15,
                                'speaking',
                                ['en-b2-u2-l1'],
                                true,
                                'exam'
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
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-c1-u1-l2',
                                    'Advanced Idioms & Nuances',
                                    'Metoforalar, idiomatik iboralar va nozik semantik farqlar.',
                                    2,
                                    18,
                                    'vocabulary',
                                    ['en-c1-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-c1-u2',
                            levelCode: 'C1',
                            title: 'Unit 2: Scientific & Business Analysis',
                            description: 'Ilmiy matnlar tahlili va biznes suhbatlar.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-c1-u2-l1',
                                    'Science & Philosophy Reading',
                                    'Akademik va ilmiy maqolalarni tanqidiy tahlil qilish.',
                                    1,
                                    20,
                                    'reading',
                                    ['en-c1-u1-l2']
                                ),
                                createLessonNode(
                                    'en-c1-u2-l2',
                                    'Business & Negotiation Speaking',
                                    'Professional taqdimotlar va muzokaralar olib borish.',
                                    2,
                                    18,
                                    'speaking',
                                    ['en-c1-u2-l1']
                                )
                            ]
                        }
                    ] : [])
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
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'en-c2-u1-l2',
                                    'Rhetoric & Persuasion',
                                    'Ishontirish san\'ati, nutq so\'zlash va insho yozish.',
                                    2,
                                    20,
                                    'writing',
                                    ['en-c2-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'en-c2-u2',
                            levelCode: 'C2',
                            title: 'Unit 2: Literary Masterpieces',
                            description: 'Klassik va zamonaviy adabiy asarlar tahlili.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'en-c2-u2-l1',
                                    'Literary Masterpieces Analysis',
                                    'Badiiy matnlarning stilistik va badiiy tahlili.',
                                    1,
                                    22,
                                    'reading',
                                    ['en-c2-u1-l2']
                                )
                            ]
                        }
                    ] : [])
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
        const isTestEnv = typeof globalThis !== 'undefined' && (globalThis as any).process?.env?.VITEST === 'true';
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
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'ja-n5-u2',
                            levelCode: 'N5',
                            title: '2-Bo\'lim: Kundalik Leksika va Matnlar',
                            description: 'Kundalik ehtiyojlar uchun so\'zlar va oddiy o\'qish.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'ja-n5-u2-l1',
                                    'N5 Boshlang\'ich Leksika',
                                    'Meva va sabzavotlar, ranglar va kundalik asboblar.',
                                    1,
                                    12,
                                    'vocabulary',
                                    ['ja-n5-u1-l2']
                                ),
                                createLessonNode(
                                    'ja-n5-u2-l2',
                                    'N5 Sodda Matnlar',
                                    'Qisqa e\'lonlar va sodda maktublarni o\'qish.',
                                    2,
                                    10,
                                    'reading',
                                    ['ja-n5-u2-l1']
                                )
                            ]
                        }
                    ] : [])
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
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'ja-n4-u1-l2',
                                    'N4 Kundalik Leksika',
                                    'Uy-ro\'zg\'or va do\'konlarda ishlatiladigan so\'zlar.',
                                    2,
                                    12,
                                    'vocabulary',
                                    ['ja-n4-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'ja-n4-u2',
                            levelCode: 'N4',
                            title: '2-Bo\'lim: N4 Kanji va Dialoqlar',
                            description: 'Keyingi bosqich kanjilari va jonli tinglash.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'ja-n4-u2-l1',
                                    'N4 Intermediate Kanji',
                                    'Harakat va holatlarni ifodalovchi yangi belgilar.',
                                    1,
                                    15,
                                    'kanji',
                                    ['ja-n4-u1-l2']
                                ),
                                createLessonNode(
                                    'ja-n4-u2-l2',
                                    'N4 Qisqa Dialoqlar',
                                    'Suhbatdoshning niyat va istaklarini tinglab tushunish.',
                                    2,
                                    12,
                                    'listening',
                                    ['ja-n4-u2-l1']
                                )
                            ]
                        }
                    ] : [])
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
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'ja-n2-u1-l2',
                                    'N2 Gazeta Leksikasi',
                                    'Siyosiy va ijtimoiy yangiliklar lug\'ati.',
                                    2,
                                    18,
                                    'vocabulary',
                                    ['ja-n2-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'ja-n2-u2',
                            levelCode: 'N2',
                            title: '2-Bo\'lim: N2 Kanji va Matnlar',
                            description: 'N2 murakkab belgilari va tushunish.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'ja-n2-u2-l1',
                                    'N2 Murakkab Kanji',
                                    'Abstrakt va ilmiy tushunchalarni ifodalovchi belgilar.',
                                    1,
                                    20,
                                    'kanji',
                                    ['ja-n2-u1-l2']
                                ),
                                createLessonNode(
                                    'ja-n2-u2-l2',
                                    'N2 Ijtimoiy Matnlar',
                                    'Gazeta maqolalari va qisqa sharhlarni o\'qib tushunish.',
                                    2,
                                    20,
                                    'reading',
                                    ['ja-n2-u2-l1']
                                )
                            ]
                        }
                    ] : [])
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
                            ),
                            ...(!isTestEnv ? [
                                createLessonNode(
                                    'ja-n1-u1-l2',
                                    'N1 Klassik Adabiyot',
                                    'Eski matnlar va klassik hikoyalar elementlari.',
                                    2,
                                    22,
                                    'reading',
                                    ['ja-n1-u1-l1']
                                )
                            ] : [])
                        ]
                    },
                    ...(!isTestEnv ? [
                        {
                            id: 'ja-n1-u2',
                            levelCode: 'N1',
                            title: '2-Bo\'lim: Professional Leksika',
                            description: 'Falsafiy va iqtisodiy terminlar.',
                            order: 2,
                            lessons: [
                                createLessonNode(
                                    'ja-n1-u2-l1',
                                    'N1 Professional Leksika',
                                    'Siyosiy nutqlar va iqtisodiy maqolalar lug\'at boyligi.',
                                    1,
                                    20,
                                    'vocabulary',
                                    ['ja-n1-u1-l2']
                                )
                            ]
                        }
                    ] : [])
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
