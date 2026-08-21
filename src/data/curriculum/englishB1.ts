import { Lesson } from '../../types/lesson';

export const ENGLISH_B1_LESSONS: Lesson[] = [
    // Unit 1: Perfect Tenses & Time Expressions
    {
        id: 'en-b1-u1-l1',
        courseId: 'english-b1',
        unitId: 'en-b1-u1',
        unitTitle: 'Unit 1: Perfect Tenses & Experiences',
        language: 'en',
        level: 'B1',
        lessonNumber: 1,
        title: 'Present Perfect Simple: Life Experiences (have + V3)',
        description: 'Hayotiy tajribalar, natijalar va noaniq o\'tgan zamon (have / has + V3).',
        estimatedDurationMinutes: 15,
        icon: '🌟',
        steps: [
            {
                id: 'en-b1-u1-l1-s1',
                title: 'Present Perfect Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Present Perfect Simple',
                    explanation: 'Hozirgi payt bilan bog\'liq o\'tgan zamon harakatlari yoki hayotiy tajribalarni bildirish uchun have/has + V3 (past participle) ishlatiladi.',
                    keyPoints: [
                        'Tajriba (ever / never): Have you ever visited Japan? I have never tried sushi.',
                        'Hozirgi natija (just / already / yet): I have just finished my homework.',
                        'Boshlangan va davom etayotgan (for / since): She has lived here for five years.'
                    ],
                    vocabulary: [
                        { term: 'Experience', reading: '/ɪkˈspɪə.ri.əns/', meaning: 'Tajriba', exampleSentence: 'Teaching is a rewarding experience.', exampleTranslation: 'O\'qituvchilik maroqli tajriba.' },
                        { term: 'Already', reading: '/ɔːlˈred.i/', meaning: 'Allaqachon', exampleSentence: 'We have already sent the report.', exampleTranslation: 'Biz hisobotni allaqachon jo\'natdik.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b1-u1-l1-e1', type: 'multiple-choice', prompt: '"Have you ever _______ (eat) lobster?"', options: ['eaten', 'ate', 'eating', 'eat'], correctAnswer: 0, explanation: 'Have you ever eaten (V3).' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u1-l1-q1', question: 'She _______ in London since 2018.', options: ['has lived', 'lives', 'lived', 'is living'], correctAnswerIndex: 0, explanation: 'Since 2018 bilan Present Perfect: has lived.' },
                        { id: 'en-b1-u1-l1-q2', question: 'I haven\'t received the confirmation email _______.', options: ['yet', 'already', 'just', 'ever'], correctAnswerIndex: 0, explanation: 'Inkor gap oxirida: yet.' },
                        { id: 'en-b1-u1-l1-q3', question: 'They _______ their luggage at the airport.', options: ['have lost', 'has lost', 'losing', 'losted'], correctAnswerIndex: 0, explanation: 'They have lost.' },
                        { id: 'en-b1-u1-l1-q4', question: '"I have known him for ten years." Bu jumla nimani anglatadi?', options: ['Uni 10 yildan beri taniyman va hozir ham taniyman', 'Uni 10 yil oldin taniganman, hozir ko\'rishmaymiz', 'Uni 10 yildan keyin taniyman', 'U 10 yoshda'], correctAnswerIndex: 0, explanation: 'Hozirgi paytgacha davom etayotgan holat.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u1-l2',
        courseId: 'english-b1',
        unitId: 'en-b1-u1',
        unitTitle: 'Unit 1: Perfect Tenses & Experiences',
        language: 'en',
        level: 'B1',
        lessonNumber: 2,
        title: 'Present Perfect vs Past Simple',
        description: 'Aniq vaqt (Past Simple) va noaniq vaqt/natija (Present Perfect) farqlari.',
        estimatedDurationMinutes: 15,
        icon: '⚖️',
        steps: [
            {
                id: 'en-b1-u1-l2-s1',
                title: 'Farqlarni O\'rganish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Present Perfect vs Past Simple',
                    explanation: 'Agar gapda aniq vaqt ko\'rsatilgan bo\'lsa (yesterday, in 2020, two days ago, when I was a child) — faqat Past Simple ishlatiladi! Noaniq tajriba bo\'lsa — Present Perfect.',
                    keyPoints: [
                        'I visited Paris in 2019. (Aniq vaqt -> Past Simple)',
                        'I have visited Paris twice. (Hayotiy tajriba -> Present Perfect)',
                        'Did you see him yesterday? / Have you seen him today?'
                    ]
                }
            },
            {
                id: 'en-b1-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri zamon shaklini tanlang.',
                    exercises: [
                        { id: 'en-b1-u1-l2-e1', type: 'multiple-choice', prompt: '"I _______ (buy) a new laptop last Friday."', options: ['bought', 'have bought', 'buying', 'was bought'], correctAnswer: 0, explanation: 'Last Friday aniq vaqt ko\'rsatkichi bo\'lgani uchun Past Simple: bought.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u1-l2-q1', question: 'When _______ you graduate from university?', options: ['did', 'have', 'were', 'had'], correctAnswerIndex: 0, explanation: 'When bilan Past Simple: When did you...?' },
                        { id: 'en-b1-u1-l2-q2', question: 'Shakespeare _______ many famous plays.', options: ['wrote', 'has written', 'writes', 'had wrote'], correctAnswerIndex: 0, explanation: 'Tarixiy shaxs hayoti tugagan: wrote.' },
                        { id: 'en-b1-u1-l2-q3', question: 'I _______ my wallet! I can\'t find it anywhere right now.', options: ['have lost', 'lost', 'losing', 'was lost'], correctAnswerIndex: 0, explanation: 'Hozirgi natija: have lost.' },
                        { id: 'en-b1-u1-l2-q4', question: 'She _______ to Madrid three times this year.', options: ['has been', 'went', 'was', 'goes'], correctAnswerIndex: 0, explanation: 'This year (tugallanmagan vaqt): has been.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u1-l3',
        courseId: 'english-b1',
        unitId: 'en-b1-u1',
        unitTitle: 'Unit 1: Perfect Tenses & Experiences',
        language: 'en',
        level: 'B1',
        lessonNumber: 3,
        title: 'Present Perfect Continuous (have been doing)',
        description: 'O\'tmishda boshlanib hozirgacha davom etayotgan jarayonlar (have/has been + V-ing).',
        estimatedDurationMinutes: 15,
        icon: '⏳',
        steps: [
            {
                id: 'en-b1-u1-l3-s1',
                title: 'Present Perfect Continuous',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Have/Has Been + Verb-ing',
                    explanation: 'Harakatning davomiyligiga urg\'u berish yoki yaqindagina to\'xtagan jarayonning ko\'rinib turgan asoratini ifodalash.',
                    keyPoints: [
                        'I have been studying English for three hours. (Jarayon davomiyligi)',
                        'Why are your hands dirty? — I have been fixing my bicycle. (Yaqinda to\'xtagan jarayon asorati)'
                    ],
                    vocabulary: [
                        { term: 'Exhausted', reading: '/ɪɡˈzɔː.stɪd/', meaning: 'Haddan tashqari charchagan', exampleSentence: 'I am exhausted because I have been running.', exampleTranslation: 'Men juda charchadim, chunki yugurayotgan edim.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b1-u1-l3-e1', type: 'multiple-choice', prompt: '"It _______ (rain) all morning; the ground is wet."', options: ['has been raining', 'rained', 'is rain', 'had rain'], correctAnswer: 0, explanation: 'Has been raining.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u1-l3-q1', question: 'How long _______ you been learning German?', options: ['have', 'has', 'did', 'are'], correctAnswerIndex: 0, explanation: 'How long have you been learning...?' },
                        { id: 'en-b1-u1-l3-q2', question: 'He is tired because he _______ all night.', options: ['has been driving', 'drives', 'has drove', 'is driving'], correctAnswerIndex: 0, explanation: 'Has been driving.' },
                        { id: 'en-b1-u1-l3-q3', question: 'We have been waiting for the bus _______ 40 minutes.', options: ['for', 'since', 'during', 'from'], correctAnswerIndex: 0, explanation: 'Vaqt oralig\'i uchun: for 40 minutes.' },
                        { id: 'en-b1-u1-l3-q4', question: 'She _______ working on this project since 9 AM.', options: ['has been', 'have been', 'is', 'was'], correctAnswerIndex: 0, explanation: 'She has been working.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u1-l4',
        courseId: 'english-b1',
        unitId: 'en-b1-u1',
        unitTitle: 'Unit 1: Perfect Tenses & Experiences',
        language: 'en',
        level: 'B1',
        lessonNumber: 4,
        title: 'Used to & Would for Past Habits',
        description: 'O\'tmishdagi odatlar va endilikda mavjud bo\'lmagan holatlar.',
        estimatedDurationMinutes: 14,
        icon: '🕰️',
        steps: [
            {
                id: 'en-b1-u1-l4-s1',
                title: 'Used to va Would',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Past Habits & States',
                    explanation: '"Used to" o\'tmishdagi harakatlar va holatlar uchun ishlatiladi (I used to live in Samarkand). "Would" faqat takrorlangan harakatlar uchun ishlatiladi (Every summer we would swim in the river).',
                    keyPoints: [
                        'I used to play guitar (now I don\'t).',
                        'Did you use to wear glasses?'
                    ],
                    vocabulary: [
                        { term: 'Habit', reading: '/ˈhæb.ɪt/', meaning: 'Odat', exampleSentence: 'Reading daily is a good habit.', exampleTranslation: 'Har kuni mutolaa qilish yaxshi odat.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b1-u1-l4-e1', type: 'multiple-choice', prompt: '"I _______ (use to) eat meat, but now I am vegetarian."', options: ['used to', 'use to', 'was used to', 'am used to'], correctAnswer: 0, explanation: 'Used to eat.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u1-l4-q1', question: 'Did you _______ to live in a village when you were young?', options: ['use', 'used', 'using', 'uses'], correctAnswerIndex: 0, explanation: 'Did bilan: use to.' },
                        { id: 'en-b1-u1-l4-q2', question: 'There _______ be a cinema on this street ten years ago.', options: ['used to', 'would', 'is used to', 'was used'], correctAnswerIndex: 0, explanation: 'Holat fe\'li bilan faqat: used to be.' },
                        { id: 'en-b1-u1-l4-q3', question: 'He _______ smoke 20 cigarettes a day, but he quit.', options: ['used to', 'is used to', 'get used to', 'uses'], correctAnswerIndex: 0, explanation: 'Used to smoke.' },
                        { id: 'en-b1-u1-l4-q4', question: 'Every weekend, my grandfather _______ tell us interesting stories.', options: ['would', 'used', 'is used', 'will'], correctAnswerIndex: 0, explanation: 'Takrorlangan harakat: would tell.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u1-l5',
        courseId: 'english-b1',
        unitId: 'en-b1-u1',
        unitTitle: 'Unit 1: Perfect Tenses & Experiences',
        language: 'en',
        level: 'B1',
        lessonNumber: 5,
        title: 'B1 Reading: Technology & Social Innovation',
        description: 'Zamonaviy innovatsiyalar va texnologiyalar haqidagi ilmiy-ommabop maqolani o\'qib tushunish.',
        estimatedDurationMinutes: 15,
        icon: '💡',
        steps: [
            {
                id: 'en-b1-u1-l5-s1',
                title: 'Matnni O\'qish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Article: The Evolution of Renewable Energy',
                    explanation: 'Qayta tiklanuvchi energiya manbalari haqidagi maqolani o\'qing.',
                    keyPoints: [
                        'Over the past decade, solar energy technology has advanced dramatically.',
                        'Engineers have developed more efficient photovoltaic panels with lower production costs.',
                        'Many countries have reduced their carbon emissions by investing in wind farms.',
                        'However, energy storage and battery capacity remain key challenges.'
                    ],
                    vocabulary: [
                        { term: 'Renewable', reading: '/rɪˈnjuː.ə.bəl/', meaning: 'Qayta tiklanuvchi', exampleSentence: 'Solar power is a renewable energy source.', exampleTranslation: 'Quyosh quvvati qayta tiklanuvchi energiya manbaidir.' },
                        { term: 'Efficient', reading: '/ɪˈfɪʃ.ənt/', meaning: 'Samarali', exampleSentence: 'The new engine is much more efficient.', exampleTranslation: 'Yangi dvigatel ancha samarali.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l5-s2',
                title: 'Tahlil Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-b1-u1-l5-e1', type: 'multiple-choice', prompt: 'What remains a key challenge for renewable energy?', options: ['Energy storage and battery capacity', 'High sunlight costs', 'Lack of wind', 'Too many solar panels'], correctAnswer: 0, explanation: 'Matnda: energy storage and battery capacity remain key challenges.' }
                    ]
                }
            },
            {
                id: 'en-b1-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u1-l5-q1', question: 'How has solar energy changed over the past decade?', options: ['It has advanced dramatically', 'It has become more expensive', 'It has stopped functioning', 'It has declined in popularity'], correctAnswerIndex: 0, explanation: 'Advanced dramatically.' },
                        { id: 'en-b1-u1-l5-q2', question: '"Carbon emissions" nimani anglatadi?', options: ['Uglerod chiqindilari (atmosferaga)', 'Quyosh nurlari', 'Elektr toki', 'Suv zaxiralari'], correctAnswerIndex: 0, explanation: 'Uglerod chiqindilari.' },
                        { id: 'en-b1-u1-l5-q3', question: 'Why have countries invested in wind farms?', options: ['To reduce carbon emissions', 'To increase coal burning', 'To build more roads', 'To stop electricity'], correctAnswerIndex: 0, explanation: 'To reduce emissions.' },
                        { id: 'en-b1-u1-l5-q4', question: '"Efficient" so\'zining ma\'nodoshini toping:', options: ['Effective / Productive', 'Slow', 'Expensive', 'Dangerous'], correctAnswerIndex: 0, explanation: 'Effective / Productive (samarali).' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Conditionals & Hypothetical Situations
    {
        id: 'en-b1-u2-l1',
        courseId: 'english-b1',
        unitId: 'en-b1-u2',
        unitTitle: 'Unit 2: Conditionals & Hypotheticals',
        language: 'en',
        level: 'B1',
        lessonNumber: 1,
        title: 'Zero & First Conditionals (Real Possibilities)',
        description: 'Ilmiy faktlar (Zero) va kelajakdagi real ehtimollar (First Conditional).',
        estimatedDurationMinutes: 15,
        icon: '🔀',
        steps: [
            {
                id: 'en-b1-u2-l1-s1',
                title: 'Zero & First Conditional',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Conditionals: Zero vs First',
                    explanation: 'Zero Conditional (umumiy haqiqat): If + Present Simple, Present Simple (If you heat ice, it melts). First Conditional (real kelajak): If + Present Simple, Will + V (If it rains tomorrow, we will stay home).',
                    keyPoints: ['If qismida HECH QACHON "will" ishlatilmaydi: If you study hard, you will pass.'],
                    vocabulary: [
                        { term: 'Melt', reading: '/melt/', meaning: 'Erish / Erimoq', exampleSentence: 'Ice melts at 0 degrees Celsius.', exampleTranslation: 'Muz 0 darajada eriydi.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b1-u2-l1-e1', type: 'multiple-choice', prompt: '"If it _______ (snow) tomorrow, we will go skiing."', options: ['snows', 'will snow', 'snowed', 'is snow'], correctAnswer: 0, explanation: 'If qismida Present Simple: snows.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u2-l1-q1', question: 'If you _______ water to 100°C, it boils.', options: ['heat', 'will heat', 'heated', 'heating'], correctAnswerIndex: 0, explanation: 'Zero conditional: heat.' },
                        { id: 'en-b1-u2-l1-q2', question: 'If she passes the exam, she _______ celebrate with friends.', options: ['will', 'would', 'is', 'did'], correctAnswerIndex: 0, explanation: 'First conditional: will celebrate.' },
                        { id: 'en-b1-u2-l1-q3', question: 'Unless you _______ now, you will be late for your flight.', options: ['leave', 'will leave', 'left', 'don\'t leave'], correctAnswerIndex: 0, explanation: 'Unless (agar ...-masa): leave.' },
                        { id: 'en-b1-u2-l1-q4', question: 'What will you do if he _______ invite you?', options: ['doesn\'t', 'won\'t', 'didn\'t', 'isn\'t'], correctAnswerIndex: 0, explanation: 'If he doesn\'t invite...' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u2-l2',
        courseId: 'english-b1',
        unitId: 'en-b1-u2',
        unitTitle: 'Unit 2: Conditionals & Hypotheticals',
        language: 'en',
        level: 'B1',
        lessonNumber: 2,
        title: 'Second Conditional (Unreal Present & Dreams)',
        description: 'Hozirgi paytdagi noaniq yoki faraziy vaziyatlar (If + Past Simple, Would + V).',
        estimatedDurationMinutes: 15,
        icon: '💭',
        steps: [
            {
                id: 'en-b1-u2-l2-s1',
                title: 'Second Conditional Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Second Conditional: If I were you...',
                    explanation: 'Hozirgi paytda ro\'y bermaydigan faraziy xayollar va maslahat uchun: If + Past Simple, Would + Verb. To be fe\'li barcha shaxslar uchun ko\'pincha "were" bo\'ladi.',
                    keyPoints: [
                        'If I had a million dollars, I would travel around the world.',
                        'If I were you, I would consult a doctor (maslahat berish).'
                    ],
                    vocabulary: [
                        { term: 'Imaginary', reading: '/ɪˈmædʒ.ɪ.nər.i/', meaning: 'Xayoliy / Faraziy', exampleSentence: 'This is an imaginary situation.', exampleTranslation: 'Bu xayoliy vaziyat.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b1-u2-l2-e1', type: 'multiple-choice', prompt: '"If I _______ (know) his number, I would call him."', options: ['knew', 'know', 'had known', 'will know'], correctAnswer: 0, explanation: 'Second conditional: knew.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u2-l2-q1', question: 'If I _______ you, I wouldn\'t accept that risky offer.', options: ['were', 'am', 'was to', 'be'], correctAnswerIndex: 0, explanation: 'If I were you.' },
                        { id: 'en-b1-u2-l2-q2', question: 'Where would you live if you _______ choose any country?', options: ['could', 'can', 'will', 'can have'], correctAnswerIndex: 0, explanation: 'If you could choose.' },
                        { id: 'en-b1-u2-l2-q3', question: 'She _______ happier if she had more free time.', options: ['would be', 'will be', 'is', 'was'], correctAnswerIndex: 0, explanation: 'She would be.' },
                        { id: 'en-b1-u2-l2-q4', question: 'If they _______ the truth, they wouldn\'t be angry.', options: ['understood', 'understand', 'will understand', 'are understand'], correctAnswerIndex: 0, explanation: 'Understood.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u2-l3',
        courseId: 'english-b1',
        unitId: 'en-b1-u2',
        unitTitle: 'Unit 2: Conditionals & Hypotheticals',
        language: 'en',
        level: 'B1',
        lessonNumber: 3,
        title: 'I wish & If only for Present Regrets',
        description: 'Hozirgi holatdan norozilik yoki orzularni ifodalash (I wish + Past Simple).',
        estimatedDurationMinutes: 14,
        icon: '🌠',
        steps: [
            {
                id: 'en-b1-u2-l3-s1',
                title: 'Wish Qoidalari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'I Wish & If Only',
                    explanation: 'Hozirgi holat boshqacha bo\'lishini istaganda: I wish + Past Simple ishlatiladi (I wish I had more time = I don\'t have enough time).',
                    keyPoints: [
                        'I wish I lived near the sea (now I live far).',
                        'I wish I could speak Chinese.'
                    ]
                }
            },
            {
                id: 'en-b1-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b1-u2-l3-e1', type: 'multiple-choice', prompt: '"I wish I _______ (can) drive a car."', options: ['could', 'can', 'was can', 'will can'], correctAnswer: 0, explanation: 'I wish I could.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u2-l3-q1', question: 'I wish I _______ taller.', options: ['were', 'am', 'will be', 'have been'], correctAnswerIndex: 0, explanation: 'I wish I were.' },
                        { id: 'en-b1-u2-l3-q2', question: 'If only we _______ enough money to travel to Australia.', options: ['had', 'have', 'having', 'will have'], correctAnswerIndex: 0, explanation: 'If only we had.' },
                        { id: 'en-b1-u2-l3-q3', question: 'She wishes she _______ have to work on weekends.', options: ['didn\'t', 'doesn\'t', 'not', 'won\'t'], correctAnswerIndex: 0, explanation: 'Wishes she didn\'t have to.' },
                        { id: 'en-b1-u2-l3-q4', question: '"I wish it stopped raining." Bu nimani bildiradi?', options: ['Yomg\'ir yog\'yapti va men to\'xtashini xohlayman', 'Yomg\'ir yog\'mayapti', 'Kecha yomg\'ir yog\'di', 'Ertaga yomg\'ir yog\'adi'], correctAnswerIndex: 0, explanation: 'Hozirgi holatdan norozilik.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u2-l4',
        courseId: 'english-b1',
        unitId: 'en-b1-u2',
        unitTitle: 'Unit 2: Conditionals & Hypotheticals',
        language: 'en',
        level: 'B1',
        lessonNumber: 4,
        title: 'B1 Listening: Podcast on Behavioral Psychology',
        description: 'Odamlarning qaror qabul qilish psixologiyasi haqidagi podkastni tinglash.',
        estimatedDurationMinutes: 14,
        icon: '🧠',
        steps: [
            {
                id: 'en-b1-u2-l4-s1',
                title: 'Podkast Skripti',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Podcast: How Habits Shape Our Success',
                    explanation: 'Psixolog doktor Robertsning odatlar haqidagi fikrlari.',
                    keyPoints: [
                        '"Small daily habits compound into massive achievements over time."',
                        '"If you repeat a behavior in the same context for 66 days, it becomes automatic."',
                        '"Eliminating friction makes good habits much easier to maintain."'
                    ],
                    vocabulary: [
                        { term: 'Compound', reading: '/ˈkɒm.paʊnd/', meaning: 'Vaqt o\'tishi bilan jamlanib ko\'paymoq', exampleSentence: 'Knowledge compounds like interest.', exampleTranslation: 'Bilim foiz kabi jamlanib oshadi.' },
                        { term: 'Friction', reading: '/ˈfrɪk.ʃən/', meaning: 'Qarshilik / To\'siq', exampleSentence: 'Reduce friction to build good habits.', exampleTranslation: 'Yaxshi odatlarni shakllantirish uchun to\'siqlarni kamaytiring.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l4-s2',
                title: 'Tinglash Mashqi',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Podkast bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-b1-u2-l4-e1', type: 'multiple-choice', prompt: 'According to the research, approximately how many days does it take to automate a habit?', options: ['66 days', '21 days', '10 days', '100 days'], correctAnswer: 0, explanation: 'Matnda 66 kun ko\'rsatilgan.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u2-l4-q1', question: 'What makes good habits easier to maintain?', options: ['Eliminating friction', 'Making tasks harder', 'Working without sleep', 'Ignoring the environment'], correctAnswerIndex: 0, explanation: 'Eliminating friction.' },
                        { id: 'en-b1-u2-l4-q2', question: 'How do small habits lead to massive results?', options: ['By compounding over time', 'Instantly in one hour', 'Through pure luck', 'By giving up early'], correctAnswerIndex: 0, explanation: 'By compounding over time.' },
                        { id: 'en-b1-u2-l4-q3', question: '"Automatic" nimani bildiradi?', options: ['O\'z-o\'zidan (beixtiyor) sodir bo\'ladigan', 'Qiyin', 'Noma\'lum', 'Zararli'], correctAnswerIndex: 0, explanation: 'Automatic — Avtomatik/O\'z-o\'zidan.' },
                        { id: 'en-b1-u2-l4-q4', question: 'Who is the speaker in the podcast?', options: ['A psychologist', 'A car driver', 'A chef', 'A computer programmer'], correctAnswerIndex: 0, explanation: 'Psychologist Dr. Roberts.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u2-l5',
        courseId: 'english-b1',
        unitId: 'en-b1-u2',
        unitTitle: 'Unit 2: Conditionals & Hypotheticals',
        language: 'en',
        level: 'B1',
        lessonNumber: 5,
        title: 'B1 Structured Writing: Opinion Paragraph',
        description: 'Fikrni mantiqiy dalillar va bog\'lovchilar bilan asoslab paragraf yozish.',
        estimatedDurationMinutes: 15,
        icon: '✍️',
        steps: [
            {
                id: 'en-b1-u2-l5-s1',
                title: 'Fikr Paragrafi Strukturasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Structuring an Opinion Paragraph',
                    explanation: '1. Topic sentence (asosiy fikr), 2. Supporting reasons & examples (sabablar va misollar), 3. Concluding sentence (xulosa). Bog\'lovchilar: Firstly, Furthermore, In addition, Therefore.',
                    keyPoints: [
                        'Topic sentence: "In my view, remote work provides substantial benefits for employees."',
                        'Support: "Firstly, it eliminates long commuting times. Furthermore, it allows for flexible scheduling."',
                        'Conclusion: "In conclusion, working from home boosts overall productivity."'
                    ],
                    vocabulary: [
                        { term: 'Furthermore', reading: '/ˌfɜː.ðəˈmɔːr/', meaning: 'Bundan tashqari / Qolaversa', exampleSentence: 'Furthermore, it saves money.', exampleTranslation: 'Qolaversa, bu pulni tejaydi.' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l5-s2',
                title: 'Bog\'lovchilar Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri bog\'lovchini tanlang.',
                    exercises: [
                        { id: 'en-b1-u2-l5-e1', type: 'multiple-choice', prompt: '"He trained every day; _______, he won first place."', options: ['therefore', 'although', 'however', 'despite'], correctAnswer: 0, explanation: 'Natija bog\'lovchisi: therefore (shuning uchun).' }
                    ]
                }
            },
            {
                id: 'en-b1-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u2-l5-q1', question: 'Which transition expresses an additional supporting point?', options: ['In addition', 'However', 'In contrast', 'Despite this'], correctAnswerIndex: 0, explanation: 'In addition (Qo\'shimcha ravishda).' },
                        { id: 'en-b1-u2-l5-q2', question: 'Where is the topic sentence usually placed in an opinion paragraph?', options: ['At the very beginning', 'In the middle', 'At the very end', 'Nowhere'], correctAnswerIndex: 0, explanation: 'At the beginning.' },
                        { id: 'en-b1-u2-l5-q3', question: '"In conclusion" iborasi qachon ishlatiladi?', options: ['Xulosa chiqarishda', 'Salomlashganda', 'Birinchi dalilni kiritganda', 'Qarshi fikr bildirganda'], correctAnswerIndex: 0, explanation: 'Xulosalashda.' },
                        { id: 'en-b1-u2-l5-q4', question: 'Choose the correct sentence:', options: ['Although it was raining, they enjoyed the hike.', 'Although it was raining, but they enjoyed the hike.', 'Despite it was raining, they enjoyed.', 'In spite it was raining, they enjoyed.'], correctAnswerIndex: 0, explanation: 'Although + Clause (but ishlatilmaydi).' }
                    ]
                }
            }
        ]
    },

    // Unit 3: Passive Voice & Reported Speech
    {
        id: 'en-b1-u3-l1',
        courseId: 'english-b1',
        unitId: 'en-b1-u3',
        unitTitle: 'Unit 3: Passive Voice & Reported Speech',
        language: 'en',
        level: 'B1',
        lessonNumber: 1,
        title: 'Passive Voice: Present & Past Simple',
        description: 'Majhul nisbat (am/is/are + V3, was/were + V3) — harakat bajaruvchisidan ko\'ra harakat natijasi muhim bo\'lganda.',
        estimatedDurationMinutes: 15,
        icon: '⚙️',
        steps: [
            {
                id: 'en-b1-u3-l1-s1',
                title: 'Majhul Nisbat Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Passive Voice: Be + V3',
                    explanation: 'Ish-harakatni kim bajargani noma\'lum yoki muhim bo\'lmaganda majhul nisbat qo\'llaniladi.',
                    keyPoints: [
                        'Present Simple: English is spoken all over the world.',
                        'Past Simple: This castle was built in the 15th century.',
                        'By + agent: The telephone was invented by Alexander Graham Bell.'
                    ],
                    vocabulary: [
                        { term: 'Invent', reading: '/ɪnˈvent/', meaning: 'Kashf / Ixtiro qilmoq', exampleSentence: 'The wheel was invented thousands of years ago.', exampleTranslation: 'G\'ildirak ming yillar oldin ixtiro qilingan.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri majhul nisbat shaklini tanlang.',
                    exercises: [
                        { id: 'en-b1-u3-l1-e1', type: 'multiple-choice', prompt: '"Millions of emails _______ (send) every minute."', options: ['are sent', 'is sent', 'were sent', 'are send'], correctAnswer: 0, explanation: 'Emails ko\'plik: are sent.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u3-l1-q1', question: 'The Mona Lisa _______ painted by Leonardo da Vinci.', options: ['was', 'is', 'were', 'has'], correctAnswerIndex: 0, explanation: 'Was painted.' },
                        { id: 'en-b1-u3-l1-q2', question: 'These products _______ in Germany.', options: ['are manufactured', 'is manufactured', 'manufactures', 'manufactured'], correctAnswerIndex: 0, explanation: 'Are manufactured.' },
                        { id: 'en-b1-u3-l1-q3', question: 'The window _______ broken by the strong storm yesterday.', options: ['was', 'is', 'were', 'had'], correctAnswerIndex: 0, explanation: 'Was broken.' },
                        { id: 'en-b1-u3-l1-q4', question: 'Active: "They clean the rooms daily." -> Passive: "The rooms _______ daily."', options: ['are cleaned', 'were cleaned', 'cleaned', 'is cleaned'], correctAnswerIndex: 0, explanation: 'The rooms are cleaned.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u3-l2',
        courseId: 'english-b1',
        unitId: 'en-b1-u3',
        unitTitle: 'Unit 3: Passive Voice & Reported Speech',
        language: 'en',
        level: 'B1',
        lessonNumber: 2,
        title: 'Reported Speech: Statements & Backshift',
        description: 'O\'zlashtirma gap: zamonlarning bir pog\'ona orqaga siljishi (backshift).',
        estimatedDurationMinutes: 15,
        icon: '💬',
        steps: [
            {
                id: 'en-b1-u3-l2-s1',
                title: 'O\'zlashtirma Gap Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Reported Speech (Said that...)',
                    explanation: 'Birovning gapini boshqaga yetkazganda asosiy fe\'l o\'tgan zamonda bo\'lsa (He said...), ichki zamonlar bir pog\'ona o\'tmishga suriladi.',
                    keyPoints: [
                        'Present Simple -> Past Simple: "I am tired" -> He said he was tired.',
                        'Present Continuous -> Past Continuous: "I am studying" -> She said she was studying.',
                        'Will -> Would: "I will call" -> He said he would call.'
                    ],
                    vocabulary: [
                        { term: 'Tell', reading: '/tel/', meaning: 'Aytmoq (kimga: tell me)', exampleSentence: 'He told me the good news.', exampleTranslation: 'U menga xushxabarni aytdi.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri o\'zlashtirilgan shaklni tanlang.',
                    exercises: [
                        { id: 'en-b1-u3-l2-e1', type: 'multiple-choice', prompt: '"I live in Tokyo." -> He said that he _______ in Tokyo.', options: ['lived', 'lives', 'has lived', 'is living'], correctAnswer: 0, explanation: 'Present Simple -> Past Simple: lived.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u3-l2-q1', question: '"I will help you tomorrow." -> She said that she _______ help me the next day.', options: ['would', 'will', 'could', 'can'], correctAnswerIndex: 0, explanation: 'Will -> would.' },
                        { id: 'en-b1-u3-l2-q2', question: 'He told _______ that he had passed the exam.', options: ['me', 'to me', 'I', 'myself'], correctAnswerIndex: 0, explanation: 'Told me (told to me EMAS).' },
                        { id: 'en-b1-u3-l2-q3', question: '"We are working on a new project." -> They said they _______ on a new project.', options: ['were working', 'are working', 'worked', 'have worked'], correctAnswerIndex: 0, explanation: 'Are working -> were working.' },
                        { id: 'en-b1-u3-l2-q4', question: '"I have lost my passport." -> He explained that he _______ his passport.', options: ['had lost', 'has lost', 'lost', 'loses'], correctAnswerIndex: 0, explanation: 'Have lost -> had lost.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u3-l3',
        courseId: 'english-b1',
        unitId: 'en-b1-u3',
        unitTitle: 'Unit 3: Passive Voice & Reported Speech',
        language: 'en',
        level: 'B1',
        lessonNumber: 3,
        title: 'Reported Questions & Commands (asked if / told to)',
        description: 'So\'roq va buyruq gaplarni o\'zlashtirish (asked where I lived, told me to wait).',
        estimatedDurationMinutes: 14,
        icon: '📢',
        steps: [
            {
                id: 'en-b1-u3-l3-s1',
                title: 'O\'zlashtirma Savollar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Reported Questions & Imperatives',
                    explanation: 'Yes/No savollarda "if/whether" qo\'yiladi va gap darak tartibiga o\'tadi (He asked if I was ready). Buyruqlarda "told to / asked to" ishlatiladi (He told me to sit down).',
                    keyPoints: [
                        '"Where do you live?" -> He asked me where I lived.',
                        '"Don\'t touch!" -> The teacher told us not to touch.'
                    ]
                }
            },
            {
                id: 'en-b1-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri so\'z tartibini tanlang.',
                    exercises: [
                        { id: 'en-b1-u3-l3-e1', type: 'multiple-choice', prompt: '"Are you hungry?" -> She asked me if I _______ hungry.', options: ['was', 'am', 'were', 'had been'], correctAnswer: 0, explanation: 'She asked me if I was hungry.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u3-l3-q1', question: 'The doctor advised me _______ drink more water.', options: ['to', 'for', 'that', 'should'], correctAnswerIndex: 0, explanation: 'Advised me to drink.' },
                        { id: 'en-b1-u3-l3-q2', question: '"Where is the station?" -> He asked me where the station _______.', options: ['was', 'is', 'did', 'was it'], correctAnswerIndex: 0, explanation: 'Darak so\'z tartibi: where the station was.' },
                        { id: 'en-b1-u3-l3-q3', question: 'Mom told me _______ make noise.', options: ['not to', 'to not', 'don\'t', 'no to'], correctAnswerIndex: 0, explanation: 'Not to make noise.' },
                        { id: 'en-b1-u3-l3-q4', question: 'She asked me if I _______ ever visited Samarkand.', options: ['had', 'have', 'did', 'was'], correctAnswerIndex: 0, explanation: 'If I had ever visited.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u3-l4',
        courseId: 'english-b1',
        unitId: 'en-b1-u3',
        unitTitle: 'Unit 3: Passive Voice & Reported Speech',
        language: 'en',
        level: 'B1',
        lessonNumber: 4,
        title: 'B1 Formal Letter of Inquiry',
        description: 'Rasmiy ma\'lumot so\'rash xati va xushmuomala iboralar.',
        estimatedDurationMinutes: 15,
        icon: '📜',
        steps: [
            {
                id: 'en-b1-u3-l4-s1',
                title: 'Rasmiy Xat Yozish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Letter of Inquiry Template',
                    explanation: 'Salomlashish: Dear Mr./Ms. [Surname] yoki Dear Sir/Madam. Xat maqsadi: I am writing to inquire about... Xulosa: I look forward to hearing from you. Tugatish: Yours sincerely (nom ma\'lum bo\'lsa) / Yours faithfully (nom noma\'lum bo\'lsa).',
                    vocabulary: [
                        { term: 'Inquire', reading: '/ɪnˈkwaɪər/', meaning: 'Surishtirmoq / Ma\'lumot so\'ramoq', exampleSentence: 'I am writing to inquire about the course fees.', exampleTranslation: 'Kurs to\'lovlari haqida ma\'lumot so\'rab yozyapman.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l4-s2',
                title: 'Rasmiy Iboralar Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri rasmiy iborani tanlang.',
                    exercises: [
                        { id: 'en-b1-u3-l4-e1', type: 'multiple-choice', prompt: 'Which phrase is appropriate for ending a formal letter addressed to "Dear Sir/Madam"?', options: ['Yours faithfully,', 'Yours sincerely,', 'Best wishes,', 'Cheers,'], correctAnswer: 0, explanation: 'Dear Sir/Madam bilan "Yours faithfully" ishlatiladi.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u3-l4-q1', question: 'I look forward to _______ from you soon.', options: ['hearing', 'hear', 'heard', 'be heard'], correctAnswerIndex: 0, explanation: 'Look forward to + V-ing: hearing.' },
                        { id: 'en-b1-u3-l4-q2', question: '"Could you please provide further details?" Bu nima?', options: ['Xushmuomala rasmiy so\'rov', 'Do\'stona hazil', 'Norozilik shikoyati', 'Xayrlashuv'], correctAnswerIndex: 0, explanation: 'Polite formal request.' },
                        { id: 'en-b1-u3-l4-q3', question: 'Which opening is correct when you know the recipient\'s name?', options: ['Dear Ms. Johnson,', 'Dear Johnson,', 'Hi Ms. Johnson,', 'Dear Madam Johnson,'], correctAnswerIndex: 0, explanation: 'Dear Ms. Johnson.' },
                        { id: 'en-b1-u3-l4-q4', question: 'Choose the most formal sentence:', options: ['I would be grateful if you could send me the brochure.', 'Send me the brochure quickly.', 'Give me the info please.', 'Can you chuck me the brochure?'], correctAnswerIndex: 0, explanation: 'I would be grateful if you could...' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u3-l5',
        courseId: 'english-b1',
        unitId: 'en-b1-u3',
        unitTitle: 'Unit 3: Passive Voice & Reported Speech',
        language: 'en',
        level: 'B1',
        lessonNumber: 5,
        title: 'B1 Speaking: Expressing Opinions & Agreeing/Disagreeing',
        description: 'Mavzular bo\'yicha o\'z fikrini bildirish, rozi bo\'lish va xushmuomalalik bilan rad etish.',
        estimatedDurationMinutes: 14,
        icon: '🗣️',
        steps: [
            {
                id: 'en-b1-u3-l5-s1',
                title: 'Muzokara Iboralari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Expressing Opinions & Nuanced Agreement',
                    explanation: 'O\'z fikrini bildirish: In my opinion, From my perspective, As far as I am concerned. Rozilik: I completely agree, That is a valid point. E\'tiroz: I see your point, but... / I\'m afraid I disagree.',
                    vocabulary: [
                        { term: 'Perspective', reading: '/pəˈspek.tɪv/', meaning: 'Nuqtai nazar', exampleSentence: 'From my perspective, this is effective.', exampleTranslation: 'Mening nazarimda, bu juda samarali.' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'en-b1-u3-l5-e1', type: 'multiple-choice', prompt: 'Which phrase politely expresses disagreement?', options: ['I see what you mean, but...', 'You are totally wrong!', 'That is stupid.', 'No, never!'], correctAnswer: 0, explanation: 'I see what you mean, but... (Xushmuomala e\'tiroz).' }
                    ]
                }
            },
            {
                id: 'en-b1-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u3-l5-q1', question: '"As far as I am concerned" iborasi nima maqsadda ishlatiladi?', options: ['Shaxsiy fikr bildirishda', 'Xayrlashganda', 'Kechirim so\'raganda', 'Vaqtni belgilaganda'], correctAnswerIndex: 0, explanation: 'Mening fikrimcha / Qolversa.' },
                        { id: 'en-b1-u3-l5-q2', question: 'I _______ agree with your proposal; it makes complete sense.', options: ['entirely', 'rarely', 'hardly', 'barely'], correctAnswerIndex: 0, explanation: 'I entirely agree.' },
                        { id: 'en-b1-u3-l5-q3', question: 'Choose the most natural agreement phrase:', options: ['That\'s a great point.', 'I am point you.', 'You have agree.', 'It is agreed by me.'], correctAnswerIndex: 0, explanation: 'That\'s a great point.' },
                        { id: 'en-b1-u3-l5-q4', question: 'Which word completes: "To be _______, I have never thought about that."', options: ['honest', 'honor', 'honesty', 'honestly'], correctAnswerIndex: 0, explanation: 'To be honest (To\'g\'risini aytsam).' }
                    ]
                }
            }
        ]
    },

    // Unit 4: Relative Clauses & Modal Deduction
    {
        id: 'en-b1-u4-l1',
        courseId: 'english-b1',
        unitId: 'en-b1-u4',
        unitTitle: 'Unit 4: Relative Clauses & Modal Deduction',
        language: 'en',
        level: 'B1',
        lessonNumber: 1,
        title: 'Defining Relative Clauses (who, which, that, where)',
        description: 'Aniqlovchi ergash gaplar orqali odamlar, narsalar va joylarni aniqlashtirish.',
        estimatedDurationMinutes: 14,
        icon: '🔗',
        steps: [
            {
                id: 'en-b1-u4-l1-s1',
                title: 'Defining Clauses',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Who, Which, That, Where, Whose',
                    explanation: 'Who — odamlar uchun, Which/That — narsalar va hayvonlar uchun, Where — joylar uchun, Whose — egalik uchun.',
                    keyPoints: [
                        'The woman who lives next door is an architect.',
                        'The book which / that I borrowed was fascinating.',
                        'The cafe where we met is closed today.'
                    ]
                }
            },
            {
                id: 'en-b1-u4-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri nisbiy olmoshni tanlang.',
                    exercises: [
                        { id: 'en-b1-u4-l1-e1', type: 'multiple-choice', prompt: '"The man _______ car was stolen reported it to the police."', options: ['whose', 'who', 'which', 'whom'], correctAnswer: 0, explanation: 'Egalik: whose car.' }
                    ]
                }
            },
            {
                id: 'en-b1-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u4-l1-q1', question: 'A doctor is a person _______ treats ill patients.', options: ['who', 'which', 'where', 'whose'], correctAnswerIndex: 0, explanation: 'Inson uchun: who.' },
                        { id: 'en-b1-u4-l1-q2', question: 'This is the school _______ I studied ten years ago.', options: ['where', 'which', 'who', 'that'], correctAnswerIndex: 0, explanation: 'Joy uchun: where.' },
                        { id: 'en-b1-u4-l1-q3', question: 'I bought a gadget _______ helps monitor sleep quality.', options: ['that', 'who', 'where', 'whose'], correctAnswerIndex: 0, explanation: 'Narsa uchun: that / which.' },
                        { id: 'en-b1-u4-l1-q4', question: 'Do you know the girl _______ father is a pilot?', options: ['whose', 'who', 'whom', 'which'], correctAnswerIndex: 0, explanation: 'Whose father.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u4-l2',
        courseId: 'english-b1',
        unitId: 'en-b1-u4',
        unitTitle: 'Unit 4: Relative Clauses & Modal Deduction',
        language: 'en',
        level: 'B1',
        lessonNumber: 2,
        title: 'Non-defining Relative Clauses (extra info with commas)',
        description: 'Qo\'shimcha ma\'lumot beruvchi ergash gaplar va vergul qo\'yilishi.',
        estimatedDurationMinutes: 14,
        icon: '✍️',
        steps: [
            {
                id: 'en-b1-u4-l2-s1',
                title: 'Non-defining Clauses',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Non-defining Relative Clauses',
                    explanation: 'Asosiy gapga shunchaki qo\'shimcha ma\'lumot qo\'shadi, vergullar bilan ajratiladi. Bu turda "that" ishlatilmaydi!',
                    keyPoints: [
                        'My brother, who lives in Berlin, is visiting us next week.',
                        'Paris, which is the capital of France, attracts millions of tourists.'
                    ]
                }
            },
            {
                id: 'en-b1-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri olmoshni tanlang.',
                    exercises: [
                        { id: 'en-b1-u4-l2-e1', type: 'multiple-choice', prompt: '"Samarkand, _______ is an ancient city, is famous for its Registan square."', options: ['which', 'that', 'who', 'where'], correctAnswer: 0, explanation: 'Verguldan keyin "that" ishlatilmaydi: which.' }
                    ]
                }
            },
            {
                id: 'en-b1-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u4-l2-q1', question: 'Which sentence has correct punctuation?', options: ['My mother, who is a doctor, loves her job.', 'My mother who is a doctor, loves her job.', 'My mother, that is a doctor, loves her job.', 'My mother who is a doctor loves, her job.'], correctAnswerIndex: 0, explanation: 'Ikkala tomondan vergul bilan ajratilgan.' },
                        { id: 'en-b1-u4-l2-q2', question: 'Can "that" be used in a non-defining relative clause?', options: ['No, never', 'Yes, always', 'Only for people', 'Only for places'], correctAnswerIndex: 0, explanation: 'Non-defining gaplarda "that" ishlatilmaydi.' },
                        { id: 'en-b1-u4-l2-q3', question: 'Albert Einstein, _______ was born in Germany, won the Nobel Prize.', options: ['who', 'which', 'that', 'where'], correctAnswerIndex: 0, explanation: 'Inson uchun: who.' },
                        { id: 'en-b1-u4-l2-q4', question: 'The company\'s headquarters, _______ are located in New York, employ 500 staff.', options: ['which', 'that', 'where', 'who'], correctAnswerIndex: 0, explanation: 'Which.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u4-l3',
        courseId: 'english-b1',
        unitId: 'en-b1-u4',
        unitTitle: 'Unit 4: Relative Clauses & Modal Deduction',
        language: 'en',
        level: 'B1',
        lessonNumber: 3,
        title: 'Modals of Deduction: Must, Might, Can\'t be',
        description: 'Mantiqiy xulosa chiqarish: 100% ishonch (must be), ehtimol (might be), imkonsiz (can\'t be).',
        estimatedDurationMinutes: 14,
        icon: '🔍',
        steps: [
            {
                id: 'en-b1-u4-l3-s1',
                title: 'Mantiqiy Xulosa Modal Fe\'llari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Must, Might / May, Can\'t',
                    explanation: 'Must be — 95%+ ishonch ("shunday bo\'lsa kerak"). Might / May be — 50% ehtimol ("bo\'lishi mumkin"). Can\'t be — 0% ehtimol ("bo\'lishi mumkin emas").',
                    keyPoints: [
                        'He has a Ferrari; he must be wealthy.',
                        'She hasn\'t answered; she might be in a meeting.',
                        'He only left 5 minutes ago; he can\'t be in Samarkand already.'
                    ]
                }
            },
            {
                id: 'en-b1-u4-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri modal xulosani tanlang.',
                    exercises: [
                        { id: 'en-b1-u4-l3-e1', type: 'multiple-choice', prompt: '"The lights are off and no one answers the door. They _______ be out."', options: ['must', 'can\'t', 'shouldn\'t', 'needn\'t'], correctAnswer: 0, explanation: 'Mantiqiy kuchli xulosa: must be out.' }
                    ]
                }
            },
            {
                id: 'en-b1-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u4-l3-q1', question: 'That _______ be John. He is in London this week!', options: ['can\'t', 'must', 'might', 'should'], correctAnswerIndex: 0, explanation: 'Imkonsiz: can\'t be.' },
                        { id: 'en-b1-u4-l3-q2', question: 'Take an umbrella. It _______ rain later this afternoon.', options: ['might', 'must to', 'can\'t', 'ought'], correctAnswerIndex: 0, explanation: 'Ehtimol: might rain.' },
                        { id: 'en-b1-u4-l3-q3', question: 'She studied for 10 hours today. She _______ be exhausted.', options: ['must', 'can\'t', 'might not', 'shouldn\'t'], correctAnswerIndex: 0, explanation: 'Kuchli xulosa: must be exhausted.' },
                        { id: 'en-b1-u4-l3-q4', question: '"This restaurant can\'t be cheap; look at the diamond chandeliers." Bu jumlada can\'t be nima ma\'noda?', options: ['Arzon bo\'lishi aslo mumkin emas (kuchli inkor xulosa)', 'Arzon bo\'lishi kerak', 'Arzon bo\'lishi mumkin', 'Arzon bo\'lishi shart'], correctAnswerIndex: 0, explanation: 'Mantiqiy inkor xulosa.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u4-l4',
        courseId: 'english-b1',
        unitId: 'en-b1-u4',
        unitTitle: 'Unit 4: Relative Clauses & Modal Deduction',
        language: 'en',
        level: 'B1',
        lessonNumber: 4,
        title: 'Linking Words & Cohesion (However, Although, Therefore)',
        description: 'Fikrlarni mantiqiy bog\'lash, zidlash va natija ko\'rsatish vositalari.',
        estimatedDurationMinutes: 14,
        icon: '🧩',
        steps: [
            {
                id: 'en-b1-u4-l4-s1',
                title: 'Bog\'lovchilar Tizimi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Contrast, Result and Addition',
                    explanation: 'Contrast (Zidlash): However, Although, Despite, In spite of. Result (Natija): Therefore, As a result, Consequently. Addition (Qo\'shimcha): Moreover, Furthermore, In addition.',
                    keyPoints: [
                        'Despite + Noun / V-ing (Despite the rain, we went out).',
                        'Although + Clause (Although it was raining, we went out).'
                    ]
                }
            },
            {
                id: 'en-b1-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri bog\'lovchini tanlang.',
                    exercises: [
                        { id: 'en-b1-u4-l4-e1', type: 'multiple-choice', prompt: '"_______ the heavy traffic, we arrived on time."', options: ['Despite', 'Although', 'Even though', 'However'], correctAnswer: 0, explanation: 'Otdan oldin: Despite the heavy traffic.' }
                    ]
                }
            },
            {
                id: 'en-b1-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u4-l4-q1', question: 'He worked extremely hard. _______, he earned a well-deserved promotion.', options: ['Therefore', 'Although', 'Despite', 'However'], correctAnswerIndex: 0, explanation: 'Therefore (Natijada).' },
                        { id: 'en-b1-u4-l4-q2', question: '_______ she felt unwell, she attended the lecture.', options: ['Although', 'Despite', 'In spite of', 'However'], correctAnswerIndex: 0, explanation: 'Although + sentence.' },
                        { id: 'en-b1-u4-l4-q3', question: 'The hotel was expensive. _______, the service was disappointing.', options: ['Furthermore', 'Despite', 'Although', 'Even though'], correctAnswerIndex: 0, explanation: 'Furthermore (Bundan tashqari).' },
                        { id: 'en-b1-u4-l4-q4', question: 'Which word is followed by a comma when placed at the start of a sentence?', options: ['However,', 'Although', 'Because', 'While'], correctAnswerIndex: 0, explanation: 'However, ...' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u4-l5',
        courseId: 'english-b1',
        unitId: 'en-b1-u4',
        unitTitle: 'Unit 4: Relative Clauses & Modal Deduction',
        language: 'en',
        level: 'B1',
        lessonNumber: 5,
        title: 'B1 Reading: The Future of Global Remote Work',
        description: 'Masofaviy ish va xalqaro jamoalar haqidagi B1 tahliliy maqolani o\'qish.',
        estimatedDurationMinutes: 15,
        icon: '🌐',
        steps: [
            {
                id: 'en-b1-u4-l5-s1',
                title: 'Maqolani O\'qish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'The Shift to Hybrid Workspaces',
                    explanation: 'Matnni tahlil qilib o\'qing.',
                    keyPoints: [
                        'The global workforce has undergone significant transformations in recent years.',
                        'Hybrid models allow professionals to balance collaborative office meetings with focused home sessions.',
                        'Digital communication platforms enable seamless teamwork across multiple time zones.',
                        'However, maintaining corporate culture and preventing burnout require proactive management.'
                    ],
                    vocabulary: [
                        { term: 'Transformation', reading: '/ˌtræns.fəˈmeɪ.ʃən/', meaning: 'Katta o\'zgarish / Transformatsiya', exampleSentence: 'Digital transformation is essential.', exampleTranslation: 'Raqamli transformatsiya zarur.' },
                        { term: 'Burnout', reading: '/ˈbɜːn.aʊt/', meaning: 'Haddan tashqari toliqish / Ishdan sovush', exampleSentence: 'Long hours can cause burnout.', exampleTranslation: 'Uzoq ish vaqti toliqishga olib kelishi mumkin.' }
                    ]
                }
            },
            {
                id: 'en-b1-u4-l5-s2',
                title: 'Tushunish Savollari',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-b1-u4-l5-e1', type: 'multiple-choice', prompt: 'What do hybrid work models allow professionals to do?', options: ['Balance office collaboration with home focus', 'Never work again', 'Only work at night', 'Eliminate all meetings'], correctAnswer: 0, explanation: 'Balance office collaboration with focused home sessions.' }
                    ]
                }
            },
            {
                id: 'en-b1-u4-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u4-l5-q1', question: 'What enables seamless teamwork across different time zones?', options: ['Digital communication platforms', 'Slower internet', 'Postal mail', 'Fewer computers'], correctAnswerIndex: 0, explanation: 'Digital communication platforms.' },
                        { id: 'en-b1-u4-l5-q2', question: 'What requires proactive management according to the article?', options: ['Maintaining culture and preventing burnout', 'Buying more office furniture', 'Reducing salaries', 'Canceling all projects'], correctAnswerIndex: 0, explanation: 'Maintaining culture and preventing burnout.' },
                        { id: 'en-b1-u4-l5-q3', question: '"Seamless" so\'zining ma\'nosi:', options: ['Uzluksiz / Bir maromdagi', 'Qiyin', 'Xavfli', 'Qimmat'], correctAnswerIndex: 0, explanation: 'Seamless — Uzluksiz, oson integratsiyalashgan.' },
                        { id: 'en-b1-u4-l5-q4', question: 'The overall tone of the text is:', options: ['Informative and analytical', 'Angry and critical', 'Comedic', 'Fictional'], correctAnswerIndex: 0, explanation: 'Informative and analytical.' }
                    ]
                }
            }
        ]
    },

    // Unit 5: Society, Career & Academic Skills
    {
        id: 'en-b1-u5-l1',
        courseId: 'english-b1',
        unitId: 'en-b1-u5',
        unitTitle: 'Unit 5: Society & Career Development',
        language: 'en',
        level: 'B1',
        lessonNumber: 1,
        title: 'Work, Careers & Professional Interviews',
        description: 'Kasbiy faoliyat, ish intervyusi savollari va rezyume tili.',
        estimatedDurationMinutes: 15,
        icon: '💼',
        steps: [
            {
                id: 'en-b1-u5-l1-s1',
                title: 'Intervyu Leksikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Job Interview Vocabulary',
                    explanation: 'Intervyuda kuchli tomonlarni ko\'rsatish: "My key strengths include problem-solving and adaptability", "I have extensive experience in project coordination".',
                    vocabulary: [
                        { term: 'Adaptability', reading: '/əˌdæp.təˈbɪl.ə.ti/', meaning: 'Moslashuvchanlik', exampleSentence: 'Adaptability is vital in dynamic environments.', exampleTranslation: 'O\'zgaruvchan muhitda moslashuvchanlik muhimdir.' },
                        { term: 'Candidate', reading: '/ˈkæn.dɪ.dət/', meaning: 'Nomzod', exampleSentence: 'She is the ideal candidate for the position.', exampleTranslation: 'U lavozim uchun eng ideal nomzod.' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri kasbiy iborani tanlang.',
                    exercises: [
                        { id: 'en-b1-u5-l1-e1', type: 'multiple-choice', prompt: '"I am applying _______ the marketing manager position."', options: ['for', 'to', 'at', 'in'], correctAnswer: 0, explanation: 'Apply for a position (lavozimga ariza topshirmoq).' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u5-l1-q1', question: 'What is a curriculum vitae (CV)?', options: ['A professional resume outlining experience and qualifications', 'A company bill', 'A contract', 'A tax form'], correctAnswerIndex: 0, explanation: 'Professional resume.' },
                        { id: 'en-b1-u5-l1-q2', question: 'He has excellent interpersonal and communication _______.', options: ['skills', 'knowledges', 'talented', 'competent'], correctAnswerIndex: 0, explanation: 'Communication skills.' },
                        { id: 'en-b1-u5-l1-q3', question: '"Deadline" nimani bildiradi?', options: ['Vazifani topshirishning oxirgi muddati', 'Ish boshlanish vaqti', 'Tushlik tanaffusi', 'Maosh kuni'], correctAnswerIndex: 0, explanation: 'Deadline — Oxirgi muddat.' },
                        { id: 'en-b1-u5-l1-q4', question: 'I am responsible _______ managing client relationships.', options: ['for', 'of', 'with', 'about'], correctAnswerIndex: 0, explanation: 'Responsible for.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u5-l2',
        courseId: 'english-b1',
        unitId: 'en-b1-u5',
        unitTitle: 'Unit 5: Society & Career Development',
        language: 'en',
        level: 'B1',
        lessonNumber: 2,
        title: 'Environment, Climate & Sustainability',
        description: 'Atrof-muhitni muhofaza qilish, iqlim o\'zgarishi va ekologik atamalar.',
        estimatedDurationMinutes: 14,
        icon: '🌱',
        steps: [
            {
                id: 'en-b1-u5-l2-s1',
                title: 'Ekologiya Leksikasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Environmental Vocabulary',
                    explanation: 'Iqlim o\'zgarishi va tabiatni asrash bo\'yicha asosiy atamalar.',
                    vocabulary: [
                        { term: 'Sustainability', reading: '/səˌsteɪ.nəˈbɪl.ə.ti/', meaning: 'Barqarorlik / Ekologik muvozanat', exampleSentence: 'Sustainability must be a global priority.', exampleTranslation: 'Barqarorlik global ustuvorlik bo\'lishi shart.' },
                        { term: 'Pollution', reading: '/pəˈluː.ʃən/', meaning: 'Ifloslanish', exampleSentence: 'Air pollution affects urban health.', exampleTranslation: 'Havo ifloslanishi shahar aholisi salomatligiga ta\'sir qiladi.' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri atamani tanlang.',
                    exercises: [
                        { id: 'en-b1-u5-l2-e1', type: 'multiple-choice', prompt: '"We must reduce our carbon _______ to combat global warming."', options: ['footprint', 'handprint', 'emissionless', 'wasteful'], correctAnswer: 0, explanation: 'Carbon footprint (uglerod izi).' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u5-l2-q1', question: '"Recycle" nimani bildiradi?', options: ['Chiqindilarni qayta ishlash', 'Chiqindini yoqish', 'Daraxtlarni kesish', 'Suvni isrof qilish'], correctAnswerIndex: 0, explanation: 'Recycle — Qayta ishlash.' },
                        { id: 'en-b1-u5-l2-q2', question: 'Deforestation causes loss of natural _______ for wildlife.', options: ['habitats', 'apartments', 'offices', 'roads'], correctAnswerIndex: 0, explanation: 'Natural habitats (yashash muhiti).' },
                        { id: 'en-b1-u5-l2-q3', question: 'Solar and wind are types of _______ energy.', options: ['renewable', 'exhaustible', 'fossil', 'harmful'], correctAnswerIndex: 0, explanation: 'Renewable energy.' },
                        { id: 'en-b1-u5-l2-q4', question: 'Global warming leads to rising sea _______.', options: ['levels', 'depths', 'heights', 'waters'], correctAnswerIndex: 0, explanation: 'Sea levels (dengiz sathi).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u5-l3',
        courseId: 'english-b1',
        unitId: 'en-b1-u5',
        unitTitle: 'Unit 5: Society & Career Development',
        language: 'en',
        level: 'B1',
        lessonNumber: 3,
        title: 'Common Idiomatic Expressions & Collocations',
        description: 'Kundalik va kasbiy ingliz tilidagi eng mashhur idiomalar va so\'z birikmalari.',
        estimatedDurationMinutes: 14,
        icon: '💡',
        steps: [
            {
                id: 'en-b1-u5-l3-s1',
                title: 'Idiomalar va Birikmalar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Key Idioms and Collocations',
                    explanation: 'Ingliz tilini tabiiy va boy qilish uchun idiomalar: "Piece of cake" (juda oson), "Hit the nail on the head" (to\'ppa-to\'g\'ri topmoq), "Under the weather" (biroz tobi qochgan).',
                    vocabulary: [
                        { term: 'Piece of cake', reading: '/piːs əv keɪk/', meaning: 'Suv ichgandek oson', exampleSentence: 'The exam was a piece of cake.', exampleTranslation: 'Imtihon suv ichgandek oson bo\'ldi.' },
                        { term: 'Under the weather', reading: '/ˈʌn.dər ðə ˈweð.ər/', meaning: 'Tobi qochgan / Betob', exampleSentence: 'I felt under the weather yesterday.', exampleTranslation: 'Kecha o\'zimni biroz noxush his qildim.' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri idiomani tanlang.',
                    exercises: [
                        { id: 'en-b1-u5-l3-e1', type: 'multiple-choice', prompt: '"I am feeling slightly sick today." Which idiom expresses this?', options: ['Under the weather', 'Piece of cake', 'Cost an arm and a leg', 'Break a leg'], correctAnswer: 0, explanation: 'Under the weather.' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u5-l3-q1', question: '"Break a leg!" iborasi nima uchun ishlatiladi?', options: ['Omad tilashda (Good luck!)', 'Jazalaganda', 'Doktorga borganida', 'Sportda jarohat olganda'], correctAnswerIndex: 0, explanation: 'Omad tilash (Good luck).' },
                        { id: 'en-b1-u5-l3-q2', question: 'That luxury sports car cost an arm and a _______!', options: ['leg', 'foot', 'hand', 'head'], correctAnswerIndex: 0, explanation: 'Cost an arm and a leg (haddan tashqari qimmat).' },
                        { id: 'en-b1-u5-l3-q3', question: 'To "hit the nail on the head" means to:', options: ['Describe exactly what is causing a situation', 'Hammer a real nail', 'Make a mistake', 'Arrive early'], correctAnswerIndex: 0, explanation: 'Aniq nishonga urmoq / to\'g\'ri topmoq.' },
                        { id: 'en-b1-u5-l3-q4', question: 'We need to make a _______ before 5 PM.', options: ['decision', 'doing', 'decide', 'make'], correctAnswerIndex: 0, explanation: 'Make a decision (collocation).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u5-l4',
        courseId: 'english-b1',
        unitId: 'en-b1-u5',
        unitTitle: 'Unit 5: Society & Career Development',
        language: 'en',
        level: 'B1',
        lessonNumber: 4,
        title: 'B1 Academic Lecture: Psychology of Memory',
        description: 'Xotira va takrorlash qonuniyatlari bo\'yicha akademik mini-ma\'ruzani tinglab tushunish.',
        estimatedDurationMinutes: 15,
        icon: '🎓',
        steps: [
            {
                id: 'en-b1-u5-l4-s1',
                title: 'Ma\'ruza Matni',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Lecture: The Forgetting Curve & Spaced Repetition',
                    explanation: 'Akademik ma\'ruza parchasi.',
                    keyPoints: [
                        '"Hermann Ebbinghaus discovered that human memory decays exponentially without reinforcement."',
                        '"Spaced repetition algorithms counteract this forgetting curve by scheduling reviews at optimal intervals."',
                        '"Active recall strengthens neural pathways more effectively than passive rereading."'
                    ],
                    vocabulary: [
                        { term: 'Reinforcement', reading: '/ˌriː.ɪnˈfɔːs.mənt/', meaning: 'Mustahkamlash / Kuchaytirish', exampleSentence: 'Memory requires regular reinforcement.', exampleTranslation: 'Xotira muntazam mustahkamlashni talab qiladi.' },
                        { term: 'Optimal', reading: '/ˈɒp.tɪ.məl/', meaning: 'Eng maqbul / Optimal', exampleSentence: 'Find the optimal study schedule.', exampleTranslation: 'Eng maqbul o\'quv jadvalini toping.' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l4-s2',
                title: 'Ma\'ruza Tahlili',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Ma\'ruza bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-b1-u5-l4-e1', type: 'multiple-choice', prompt: 'What does active recall do more effectively than passive rereading?', options: ['Strengthens neural pathways', 'Causes quick forgetting', 'Takes zero effort', 'Wastes time'], correctAnswer: 0, explanation: 'Strengthens neural pathways.' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u5-l4-q1', question: 'Who researched the forgetting curve originally?', options: ['Hermann Ebbinghaus', 'Isaac Newton', 'Albert Einstein', 'Charles Darwin'], correctAnswerIndex: 0, explanation: 'Hermann Ebbinghaus.' },
                        { id: 'en-b1-u5-l4-q2', question: 'How does spaced repetition prevent forgetting?', options: ['By scheduling reviews at optimal intervals', 'By studying once for 20 hours', 'By reading backwards', 'By ignoring difficult words'], correctAnswerIndex: 0, explanation: 'Scheduling reviews at optimal intervals.' },
                        { id: 'en-b1-u5-l4-q3', question: '"Decay" so\'zining ilmiy ma\'nosi:', options: ['Asta-sekin yemirilish / Pasayish', 'Ko\'payish', 'Muzlash', 'Yorishish'], correctAnswerIndex: 0, explanation: 'Decay — Pasayish/so\'nish.' },
                        { id: 'en-b1-u5-l4-q4', question: 'Which learning method is recommended by the lecture?', options: ['Active recall with spaced repetition', 'Passive rereading the night before', 'Cramming in one session', 'Memorizing without understanding'], correctAnswerIndex: 0, explanation: 'Active recall with spaced repetition.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b1-u5-l5',
        courseId: 'english-b1',
        unitId: 'en-b1-u5',
        unitTitle: 'Unit 5: Society & Career Development',
        language: 'en',
        level: 'B1',
        lessonNumber: 5,
        title: 'B1 Capstone Comprehensive Examination',
        description: 'B1 Intermediate darajasini to\'liq tasdiqlash va B2 darajasiga o\'tish sinovi.',
        estimatedDurationMinutes: 18,
        icon: '🏆',
        steps: [
            {
                id: 'en-b1-u5-l5-s1',
                title: 'B1 Daraja Yakuniy Ko\'rib Chiqish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'B1 Intermediate Mastery Checklist',
                    explanation: 'Ushbu darajada siz Present Perfect (Simple & Continuous), Zero/First/Second Conditionals, Passive Voice, Reported Speech, Relative Clauses va Modal Verbs of Deduction mavzularini to\'liq o\'zlashtirdingiz.',
                    keyPoints: [
                        'Complex sentence structures and cohesion',
                        'Work, environment, psychology and academic foundations',
                        'Preparation for IELTS B2 level'
                    ]
                }
            },
            {
                id: 'en-b1-u5-l5-s2',
                title: 'Kompleks Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Barcha mavzulardan xatoni toping.',
                    exercises: [
                        { id: 'en-b1-u5-l5-e1', type: 'multiple-choice', prompt: 'Which sentence is completely correct grammatically?', options: ['If I had known, I would have told you.', 'If I knew, I will tell you.', 'If I know, I would told you.', 'If I was knowing, I would tell you.'], correctAnswer: 0, explanation: 'Correct conditional structure.' }
                    ]
                }
            },
            {
                id: 'en-b1-u5-l5-s3',
                title: 'B1 Yakuniy Sertifikatsiya Testi',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'B1 darajasini muvaffaqiyatli yakunlash uchun testni yeching.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b1-u5-l5-q1', question: 'The report _______ by the committee yesterday afternoon.', options: ['was approved', 'is approved', 'has approved', 'approves'], correctAnswerIndex: 0, explanation: 'Past Simple Passive: was approved.' },
                        { id: 'en-b1-u5-l5-q2', question: 'I haven\'t seen Sarah _______ she moved to Canada.', options: ['since', 'for', 'during', 'while'], correctAnswerIndex: 0, explanation: 'Since she moved.' },
                        { id: 'en-b1-u5-l5-q3', question: 'He said that he _______ his keys on the train.', options: ['had left', 'has left', 'leaves', 'will leave'], correctAnswerIndex: 0, explanation: 'Backshift: had left.' },
                        { id: 'en-b1-u5-l5-q4', question: 'Look at the ice! You _______ drive so fast.', options: ['mustn\'t', 'needn\'t', 'don\'t have to', 'may not'], correctAnswerIndex: 0, explanation: 'Mustn\'t (qat\'iy taqiq/xavf).' }
                    ]
                }
            }
        ]
    }
];
