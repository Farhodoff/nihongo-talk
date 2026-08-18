import { Lesson } from '../../types/lesson';

export const SAMPLE_LESSONS: Lesson[] = [
    // ==========================================
    // 🇯🇵 JAPANESE TRACK (JLPT N3)
    // ==========================================
    {
        id: 'ja-n3-u1-l1',
        courseId: 'jlpt-n3',
        unitId: 'ja-n3-u1',
        unitTitle: '1-Bo\'lim: Kundalik Hayot va Sayohat',
        language: 'ja',
        level: 'N3',
        lessonNumber: 1,
        title: 'Sayohat va Transport (旅行と交通)',
        description: 'Poyezd, bekat va sayohatga oid asosiy N3 so\'zlari hamda 〜ことにする qoidasini o\'rganamiz.',
        estimatedDurationMinutes: 15,
        icon: '🚅',
        steps: [
            {
                id: 'ja-n3-u1-l1-s1',
                title: 'Yangi So\'zlar & Grammatika',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Sayohat So\'zlari va 〜ことにする Qoidasi',
                    subtitle: 'JLPT N3 Asosiy Konstruksiyalar',
                    explanation: 'Ushbu darsda Yaponiya bo\'ylab sayohat qilishda eng ko\'p uchraydigan transport so\'zlari va shaxsiy qaror qabul qilish grammatikasi bilan tanishamiz.',
                    keyPoints: [
                        '旅行 (Ryokou) — Sayohat ma\'nosida eng keng qo\'llaniladigan so\'z.',
                        '〜ことにする (Koto ni suru) — Inson o\'z ixtiyori bilan biror ishni qilishga qaror qilganida ishlatiladi.',
                        'Fe\'lning lug\'at shakli (Dictionary form) + ことにする / ことにした.'
                    ],
                    vocabulary: [
                        {
                            term: '旅行',
                            reading: 'りょこう (ryokou)',
                            meaning: 'Sayohat, safar',
                            exampleSentence: '来週、京都へ旅行に行きます。',
                            exampleTranslation: 'Keyingi hafta Kyotoga sayohatga boraman.'
                        },
                        {
                            term: '切符',
                            reading: 'きっぷ (kippu)',
                            meaning: 'Chipta (poyezd, avtobus)',
                            exampleSentence: '新幹線の切符を予約しました。',
                            exampleTranslation: 'Shinkansen poyezdiga chipta band qildim.'
                        },
                        {
                            term: '交通',
                            reading: 'こうつう (koutsuu)',
                            meaning: 'Transport, yo\'l harakati',
                            exampleSentence: '東京は交通がとても便利です。',
                            exampleTranslation: 'Tokioda transport qatnovi juda qulay.'
                        },
                        {
                            term: '乗り換える',
                            reading: 'のりかえる (norikaeru)',
                            meaning: 'Transport almashtirish (perevodka)',
                            exampleSentence: '新宿駅でJR線に乗り換えます。',
                            exampleTranslation: 'Shinjuku bekatida JR liniyasiga o\'taman.'
                        }
                    ],
                    grammarRules: [
                        {
                            pattern: 'V(Lug\'at shakli) + ことにする',
                            meaning: '... qilishga qaror qilmoq / ... qilmoqchi bo\'lmoq',
                            usageNotes: 'O\'z irodasi bilan qaror qabul qilinganda ishlatiladi. O\'tgan zamonda: 〜ことにした (qaror qildim).',
                            examples: [
                                {
                                    sentence: '健康のために、毎朝走ることにしました。',
                                    translation: 'Salomatlik uchun har tong yugurishga qaror qildim.'
                                },
                                {
                                    sentence: '今年の夏休みは日本へ行くことにします。',
                                    translation: 'Bu yilgi yozgi ta\'tilda Yaponiyaga borishga qaror qilaman.'
                                }
                            ]
                        }
                    ],
                    culturalNotes: 'Yaponiyada poyezdlar sekundigacha aniqlikda harakatlanadi. Bekatlarda "乗り換え" (almashtirish) ko\'rsatkichlariga qat\'iy e\'tibor bering.'
                }
            },
            {
                id: 'ja-n3-u1-l1-s2',
                title: 'Interaktiv Mashqlar',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'O\'rganilgan so\'z va qoidalar asosida quyidagi savollarga javob bering.',
                    exercises: [
                        {
                            id: 'ex1',
                            type: 'multiple-choice',
                            prompt: '「切符」 kanjisining to\'g\'ri o\'qilishini tanlang:',
                            options: ['きっぷ (kippu)', 'きふ (kifu)', 'けっぷ (keppu)', 'きっぶ (kibbu)'],
                            correctAnswer: 0,
                            explanation: '切 (kiru/setsu) + 符 (fu) birikib, «きっぷ» (kippu - chipta) deb o\'qiladi.'
                        },
                        {
                            id: 'ex2',
                            type: 'multiple-choice',
                            prompt: '«Har kuni yapon tilini o\'rganishga qaror qildim» jumlasini tuzish uchun qaysi qo\'shimcha to\'g\'ri?',
                            options: ['勉強する ことにしました', '勉強する ようになりました', '勉強する はずです', '勉強する べきです'],
                            correctAnswer: 0,
                            explanation: 'Shaxsiy ongli qaror uchun: V(dict) + ことにしました ishlatiladi.'
                        },
                        {
                            id: 'ex3',
                            type: 'multiple-choice',
                            prompt: '«Shinjuku bekatida poyezd almashtiraman» jumlasi uchun to\'g\'ri fe\'l:',
                            options: ['乗り換えます (norikaemasu)', '降ります (orimasu)', '乗ります (norimasu)', '着きます (tsukimasu)'],
                            correctAnswer: 0,
                            explanation: 'Boshqa transport liniyasiga o\'tish fe\'li — 乗り換える (norikaeru).'
                        }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l1-s3',
                title: 'Dars Testi (Quiz)',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Darsni muvaffaqiyatli yakunlash uchun test savollariga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        {
                            id: 'tq1',
                            question: '「交通」 so\'zining ma\'nosi nima?',
                            options: ['Transport va harakat', 'Sayohat', 'Mehmonxona', 'Aeroport'],
                            correctAnswerIndex: 0,
                            explanation: '交通 (こうつう - koutsuu) — transport, qatnov deganidir.'
                        },
                        {
                            id: 'tq2',
                            question: '«来月からタバコを（　）ことにしました。» Qavs ichiga qaysi shakl tushadi?',
                            options: ['やめる', 'やめて', 'やめた', 'やめないで'],
                            correctAnswerIndex: 0,
                            explanation: '〜ことにする qoidasidan oldin fe\'lning oddiy lug\'at shakli (辞書形) keladi: やめる.'
                        },
                        {
                            id: 'tq3',
                            question: 'Quyidagilardan qaysi biri «Sayohat» ma\'nosini bildiradi?',
                            options: ['旅行 (りょこう)', '料理 (りょうり)', '留学 (りゅうがく)', '約束 (やくそく)'],
                            correctAnswerIndex: 0,
                            explanation: '旅行 (ryokou) — sayohat. 料理 (taom), 留学 (chetda o\'qish), 約束 (va\'da).'
                        },
                        {
                            id: 'tq4',
                            question: 'Boshqa poyezd liniyasiga o\'tish uchun qaysi atama ishlatiladi?',
                            options: ['乗り換え (のりかえ)', '見送り (みおくり)', '出発 (しゅっぱつ)', '到着 (とうちゃく)'],
                            correctAnswerIndex: 0,
                            explanation: '乗り換え (norikae) — transport vositasini almashtirish.'
                        }
                    ]
                }
            }
        ]
    },

    // ==========================================
    // 🇬🇧 ENGLISH TRACK (B2 / IELTS 6.5)
    // ==========================================
    {
        id: 'en-b2-u1-l1',
        courseId: 'ielts-b2',
        unitId: 'en-b2-u1',
        unitTitle: 'Unit 1: Education & Academic Life',
        language: 'en',
        level: 'B2',
        lessonNumber: 1,
        title: 'Academic Learning & Inversion (Ta\'lim va Inversiya)',
        description: 'Advanced B2 academic vocabulary and grammatical inversion structures with negative adverbials.',
        estimatedDurationMinutes: 15,
        icon: '🎓',
        steps: [
            {
                id: 'en-b2-u1-l1-s1',
                title: 'Academic Vocab & Grammar Rules',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Academic Vocabulary & Inversion Structures',
                    subtitle: 'B2 / IELTS Academic Language Mastery',
                    explanation: 'In this lesson, we explore high-frequency academic vocabulary for education topics and master grammatical inversion to boost your IELTS Writing and Speaking scores.',
                    keyPoints: [
                        'Perseverance & Meticulous — Key academic adjectives and nouns for study excellence.',
                        'Negative Inversion (Rarely, Not only, Seldom) — Shifts auxiliary verbs before the subject for dramatic rhetorical emphasis.',
                        'Inversion formula: Negative Adverb + Auxiliary Verb + Subject + Main Verb.'
                    ],
                    vocabulary: [
                        {
                            term: 'Perseverance',
                            reading: '/ˌpɜː.sɪˈvɪə.rəns/',
                            meaning: 'Matonat, sabot, qat\'iyatlilik',
                            exampleSentence: 'Academic success requires immense perseverance and dedication.',
                            exampleTranslation: 'Ilmiy yutuq ulkan matonat va fidoyilikni talab qiladi.'
                        },
                        {
                            term: 'Meticulous',
                            reading: '/məˈtɪk.jə.ləs/',
                            meaning: 'O\'ta sinchkov, mayda detallargacha e\'tiborli',
                            exampleSentence: 'She conducted a meticulous analysis of the experimental data.',
                            exampleTranslation: 'U tajriba ma\'lumotlarini o\'ta sinchkovlik bilan tahlil qildi.'
                        },
                        {
                            term: 'Comprehend',
                            reading: '/ˌkɒm.prɪˈhend/',
                            meaning: 'To\'liq tushunmoq, anglab yetmoq',
                            exampleSentence: 'Complex scientific theories are difficult to comprehend at first.',
                            exampleTranslation: 'Murakkab ilmiy nazariyalarni dastlab tushunib yetish qiyin.'
                        },
                        {
                            term: 'Synthesize',
                            reading: '/ˈsɪn.θə.saɪz/',
                            meaning: 'Bir nechta manbalardan ma\'lumotni umumlashtirmoq',
                            exampleSentence: 'The essay requires students to synthesize arguments from multiple sources.',
                            exampleTranslation: 'Insho talabalardan bir nechta manbalardagi dalillarni umumlashtirishni talab qiladi.'
                        }
                    ],
                    grammarRules: [
                        {
                            pattern: 'Not only + [Auxiliary] + [Subject] + [Verb], but [Subject] also...',
                            meaning: 'Nafaqat ..., balki ... ham',
                            usageNotes: 'Inversiya (inversion) jumlani akademik va ta\'sirchan qiladi. Yordamchi fe\'l egadan oldinga o\'tadi.',
                            examples: [
                                {
                                    sentence: 'Not only did she pass the exam, but she also achieved the highest score.',
                                    translation: 'U nafaqat imtihondan o\'tdi, balki eng yuqori ballni ham qo\'lga kiritdi.'
                                },
                                {
                                    sentence: 'Rarely have I witnessed such profound academic dedication.',
                                    translation: 'Kamdan-kam hollarda bunday chuqur ilmiy fidoyilikka guvoh bo\'lganman.'
                                }
                            ]
                        }
                    ],
                    culturalNotes: 'In IELTS Writing Task 2, using 1-2 well-placed inversion sentences can significantly improve your Grammatical Range and Accuracy (GRA) score to Band 7.5+.'
                }
            },
            {
                id: 'en-b2-u1-l1-s2',
                title: 'Interactive Practice',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Select the most appropriate academic word or grammatical structure.',
                    exercises: [
                        {
                            id: 'en-ex1',
                            type: 'multiple-choice',
                            prompt: 'Choose the word that means "showing great attention to detail and very careful":',
                            options: ['Meticulous', 'Careless', 'Vague', 'Hasty'],
                            correctAnswer: 0,
                            explanation: 'Meticulous means showing great attention to detail; very careful and precise.'
                        },
                        {
                            id: 'en-ex2',
                            type: 'multiple-choice',
                            prompt: 'Complete the inverted sentence: "Rarely _____ such exceptional research."',
                            options: ['have we seen', 'we have seen', 'we saw', 'did we saw'],
                            correctAnswer: 0,
                            explanation: 'After negative adverb "Rarely", use auxiliary verb before subject: "have we seen".'
                        },
                        {
                            id: 'en-ex3',
                            type: 'multiple-choice',
                            prompt: 'Which word best describes combining multiple ideas into a cohesive whole?',
                            options: ['Synthesize', 'Separate', 'Distort', 'Isolate'],
                            correctAnswer: 0,
                            explanation: 'To synthesize means to combine various components into a connected whole.'
                        }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l1-s3',
                title: 'Lesson Mastery Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Answer all 4 questions to verify your mastery of this lesson.',
                    passingScorePercentage: 75,
                    questions: [
                        {
                            id: 'en-tq1',
                            question: 'What is the noun form describing steady persistence in adhering to a course of action?',
                            options: ['Perseverance', 'Hesitation', 'Indifference', 'Reluctance'],
                            correctAnswerIndex: 0,
                            explanation: 'Perseverance is continued effort and determination despite difficulties.'
                        },
                        {
                            id: 'en-tq2',
                            question: 'Identify the correct inversion structure:',
                            options: [
                                'Not only did he complete the assignment, but he also edited it.',
                                'Not only he completed the assignment, but also he edited.',
                                'Not only he did complete the assignment, but edited it.',
                                'Not did he only complete the assignment, but also edited.'
                            ],
                            correctAnswerIndex: 0,
                            explanation: '"Not only did he complete..." correctly places the auxiliary "did" before the subject "he".'
                        },
                        {
                            id: 'en-tq3',
                            question: 'Which word is a synonym for "to comprehend fully"?',
                            options: ['Grasp / Understand', 'Ignore', 'Forget', 'Overlook'],
                            correctAnswerIndex: 0,
                            explanation: 'To comprehend means to grasp mentally or understand thoroughly.'
                        },
                        {
                            id: 'en-tq4',
                            question: '"Little _____ about the upcoming changes." Which option fits the blank?',
                            options: ['did they know', 'they knew', 'they did know', 'knew they'],
                            correctAnswerIndex: 0,
                            explanation: '"Little" is a negative adverb, triggering auxiliary inversion: "did they know".'
                        }
                    ]
                }
            }
        ]
    }
];
