import { Lesson } from '../../types/lesson';

export const ENGLISH_A2_LESSONS: Lesson[] = [
    // Unit 1: Past Events & Experiences
    {
        id: 'en-a2-u1-l1',
        courseId: 'english-a2',
        unitId: 'en-a2-u1',
        unitTitle: 'Unit 1: Past Events & Experiences',
        language: 'en',
        level: 'A2',
        lessonNumber: 1,
        title: 'Past Simple: Regular Verbs (-ed)',
        description: 'To\'g\'ri fe\'llarning o\'tgan zamon shakllari va -ed talaffuzi.',
        estimatedDurationMinutes: 14,
        icon: '⏳',
        steps: [
            {
                id: 'en-a2-u1-l1-s1',
                title: 'O\'tgan Zamon Qoidasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Past Simple: Regular Verbs',
                    explanation: 'O\'tgan zamonda sodir bo\'lib tugagan harakatlar uchun fe\'lga -ed qo\'shimchasi qo\'shiladi.',
                    keyPoints: ['work -> worked', 'play -> played', 'watch -> watched', 'live -> lived'],
                    vocabulary: [
                        { term: 'Yesterday', reading: '/ˈjes.tə.deɪ/', meaning: 'Kecha', exampleSentence: 'I worked late yesterday.', exampleTranslation: 'Men kecha kechgacha ishladim.' },
                        { term: 'Last week', reading: '/lɑːst wiːk/', meaning: 'O\'tgan hafta', exampleSentence: 'We visited our grandparents last week.', exampleTranslation: 'Biz o\'tgan hafta buva-buvimiznikiga bordik.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri o\'tgan zamon shaklini tanlang.',
                    exercises: [
                        { id: 'en-a2-u1-l1-e1', type: 'multiple-choice', prompt: '"She _______ (watch) a movie last night."', options: ['watched', 'watch', 'watching', 'watches'], correctAnswer: 0, explanation: 'Regular verb: watched.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u1-l1-q1', question: 'They _______ football in the park yesterday.', options: ['played', 'play', 'playing', 'plays'], correctAnswerIndex: 0, explanation: 'Played football.' },
                        { id: 'en-a2-u1-l1-q2', question: 'I _______ my room on Saturday morning.', options: ['cleaned', 'clean', 'cleaning', 'cleans'], correctAnswerIndex: 0, explanation: 'Cleaned my room.' },
                        { id: 'en-a2-u1-l1-q3', question: 'He _______ in Berlin two years ago.', options: ['lived', 'live', 'living', 'lives'], correctAnswerIndex: 0, explanation: 'Lived in Berlin.' },
                        { id: 'en-a2-u1-l1-q4', question: 'We _______ dinner together last evening.', options: ['cooked', 'cook', 'cooking', 'cooks'], correctAnswerIndex: 0, explanation: 'Cooked dinner.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u1-l2',
        courseId: 'english-a2',
        unitId: 'en-a2-u1',
        unitTitle: 'Unit 1: Past Events & Experiences',
        language: 'en',
        level: 'A2',
        lessonNumber: 2,
        title: 'Past Simple: Common Irregular Verbs',
        description: 'Eng ko\'p uchraydigan noto\'g\'ri fe\'llar (went, saw, bought, had).',
        estimatedDurationMinutes: 15,
        icon: '📚',
        steps: [
            {
                id: 'en-a2-u1-l2-s1',
                title: 'Noto\'g\'ri Fe\'llar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Irregular Verbs (2-ustun)',
                    explanation: 'Noto\'g\'ri fe\'llar -ed olmaydi, ularning shakli butunlay o\'zgaradi.',
                    keyPoints: ['go -> went', 'see -> saw', 'buy -> bought', 'have -> had', 'make -> made'],
                    vocabulary: [
                        { term: 'Went', reading: '/went/', meaning: 'Bordi (go fe\'lining o\'tgan zamoni)', exampleSentence: 'He went to the cinema.', exampleTranslation: 'U kinoga bordi.' },
                        { term: 'Bought', reading: '/bɔːt/', meaning: 'Sotib oldi', exampleSentence: 'I bought a new jacket.', exampleTranslation: 'Men yangi kurtka sotib oldim.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri noto\'g\'ri fe\'lni tanlang.',
                    exercises: [
                        { id: 'en-a2-u1-l2-e1', type: 'multiple-choice', prompt: '"I _______ (see) David at the market yesterday."', options: ['saw', 'seed', 'seen', 'seeing'], correctAnswer: 0, explanation: 'See -> saw.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u1-l2-q1', question: 'We _______ to Samarkand by train last weekend.', options: ['went', 'goed', 'gone', 'going'], correctAnswerIndex: 0, explanation: 'Go -> went.' },
                        { id: 'en-a2-u1-l2-q2', question: 'She _______ a delicious cake yesterday.', options: ['made', 'maked', 'make', 'making'], correctAnswerIndex: 0, explanation: 'Make -> made.' },
                        { id: 'en-a2-u1-l2-q3', question: 'I _______ my keys on the bus.', options: ['lost', 'losed', 'lose', 'losing'], correctAnswerIndex: 0, explanation: 'Lose -> lost.' },
                        { id: 'en-a2-u1-l2-q4', question: 'They _______ breakfast at 8:00 AM.', options: ['had', 'haved', 'have', 'having'], correctAnswerIndex: 0, explanation: 'Have -> had.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u1-l3',
        courseId: 'english-a2',
        unitId: 'en-a2-u1',
        unitTitle: 'Unit 1: Past Events & Experiences',
        language: 'en',
        level: 'A2',
        lessonNumber: 3,
        title: 'Past Simple: Questions & Negatives (Did you...?)',
        description: 'O\'tgan zamonda so\'roq va inkor gaplar (didn\'t + V1).',
        estimatedDurationMinutes: 14,
        icon: '❓',
        steps: [
            {
                id: 'en-a2-u1-l3-s1',
                title: 'Didn\'t va Did you...?',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Did & Didn\'t',
                    explanation: 'Past Simple inkorida "didn\'t", so\'rog\'ida "did" ishlatiladi. E\'tibor bering: did/didn\'t dan keyin fe\'l asl 1-shakliga qaytadi!',
                    keyPoints: ['I didn\'t go (didn\'t went EMAS)', 'Did you see him? -> Yes, I did. / No, I didn\'t.'],
                    vocabulary: [
                        { term: 'Vacation', reading: '/veɪˈkeɪ.ʃən/', meaning: 'Ta\'til', exampleSentence: 'Where did you go for vacation?', exampleTranslation: 'Ta\'tilga qayerga bordingiz?' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri grammatik shaklni tanlang.',
                    exercises: [
                        { id: 'en-a2-u1-l3-e1', type: 'multiple-choice', prompt: '"Did you _______ (sleep) well last night?"', options: ['sleep', 'slept', 'sleeping', 'sleeps'], correctAnswer: 0, explanation: 'Did bilan fe\'lning 1-shakli: sleep.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Testni yeching.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u1-l3-q1', question: 'I _______ go to the concert yesterday because I was sick.', options: ['didn\'t', 'don\'t', 'wasn\'t', 'not'], correctAnswerIndex: 0, explanation: 'I didn\'t go.' },
                        { id: 'en-a2-u1-l3-q2', question: '_______ they finish the project on time?', options: ['Did', 'Do', 'Were', 'Are'], correctAnswerIndex: 0, explanation: 'Did they finish...?' },
                        { id: 'en-a2-u1-l3-q3', question: 'She didn\'t _______ the email.', options: ['receive', 'received', 'receiving', 'receives'], correctAnswerIndex: 0, explanation: 'Didn\'t receive (1-shakl).' },
                        { id: 'en-a2-u1-l3-q4', question: '"Did you call me?" — "No, I _______."', options: ['didn\'t', 'don\'t', 'wasn\'t', 'not'], correctAnswerIndex: 0, explanation: 'No, I didn\'t.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u1-l4',
        courseId: 'english-a2',
        unitId: 'en-a2-u1',
        unitTitle: 'Unit 1: Past Events & Experiences',
        language: 'en',
        level: 'A2',
        lessonNumber: 4,
        title: 'Past Continuous: I was doing',
        description: 'O\'tgan zamonda davom etayotgan harakatlar (was/were + V-ing).',
        estimatedDurationMinutes: 14,
        icon: '🔄',
        steps: [
            {
                id: 'en-a2-u1-l4-s1',
                title: 'Past Continuous Qoidasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Was / Were + Verb-ing',
                    explanation: 'O\'tgan zamondagi ma\'lum bir paytda davom etayotgan jarayonni bildiradi.',
                    keyPoints: ['At 8:00 PM yesterday, I was watching TV.', 'While I was walking home, it started to rain.'],
                    vocabulary: [
                        { term: 'While', reading: '/waɪl/', meaning: '... davomida / paytida', exampleSentence: 'While I was cooking, the phone rang.', exampleTranslation: 'Men ovqat pishirayotgan paytda telefon jiringladi.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-a2-u1-l4-e1', type: 'multiple-choice', prompt: '"What were you doing at 3 PM?" — "I _______ (study) in the library."', options: ['was studying', 'were studying', 'studied', 'am studying'], correctAnswer: 0, explanation: 'I was studying.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u1-l4-q1', question: 'They _______ dinner when I arrived.', options: ['were having', 'was having', 'had', 'have'], correctAnswerIndex: 0, explanation: 'They were having dinner.' },
                        { id: 'en-a2-u1-l4-q2', question: 'It _______ heavily when we woke up.', options: ['was raining', 'were raining', 'rained', 'rains'], correctAnswerIndex: 0, explanation: 'It was raining.' },
                        { id: 'en-a2-u1-l4-q3', question: 'What _______ you doing at midnight?', options: ['were', 'was', 'did', 'are'], correctAnswerIndex: 0, explanation: 'What were you doing?' },
                        { id: 'en-a2-u1-l4-q4', question: 'She _______ driving to work when the accident occurred.', options: ['was', 'were', 'is', 'did'], correctAnswerIndex: 0, explanation: 'She was driving.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u1-l5',
        courseId: 'english-a2',
        unitId: 'en-a2-u1',
        unitTitle: 'Unit 1: Past Events & Experiences',
        language: 'en',
        level: 'A2',
        lessonNumber: 5,
        title: 'A2 Reading: My Travel Diary',
        description: 'O\'tgan zamon fe\'llari bilan yozilgan sayohat kundaligi matni.',
        estimatedDurationMinutes: 14,
        icon: '✈️',
        steps: [
            {
                id: 'en-a2-u1-l5-s1',
                title: 'Sayohat Kundaligi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Diary Entry: Trip to Bukhara',
                    explanation: 'Quyidagi sayohat matnini o\'qing.',
                    keyPoints: [
                        'Last summer, Malika visited Bukhara for the first time.',
                        'She stayed in a traditional boutique hotel near Po-i-Kalyan.',
                        'She bought handmade souvenirs and took hundreds of photos.',
                        'The local food was delicious and the people were hospitable.'
                    ],
                    vocabulary: [
                        { term: 'Souvenir', reading: '/ˌsuː.vənˈɪər/', meaning: 'Esdalik sovg\'a', exampleSentence: 'I bought souvenirs for my friends.', exampleTranslation: 'Do\'stlarimga esdalik sovg\'alari sotib oldim.' },
                        { term: 'Hospitable', reading: '/hɒsˈpɪt.ə.bəl/', meaning: 'Mehmondo\'st', exampleSentence: 'The locals were very hospitable.', exampleTranslation: 'Mahalliy aholi juda mehmondo\'st edi.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l5-s2',
                title: 'Tushunish Mashqi',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-a2-u1-l5-e1', type: 'multiple-choice', prompt: 'Where did Malika stay in Bukhara?', options: ['In a traditional boutique hotel', 'At a friend\'s house', 'In a camping tent', 'At an airport motel'], correctAnswer: 0, explanation: 'Matnda: stayed in a traditional boutique hotel.' }
                    ]
                }
            },
            {
                id: 'en-a2-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u1-l5-q1', question: 'When did Malika visit Bukhara?', options: ['Last summer', 'Two years ago', 'Last month', 'Yesterday'], correctAnswerIndex: 0, explanation: 'Last summer.' },
                        { id: 'en-a2-u1-l5-q2', question: 'What did she buy for her friends?', options: ['Handmade souvenirs', 'Clothes', 'A laptop', 'Books'], correctAnswerIndex: 0, explanation: 'Handmade souvenirs.' },
                        { id: 'en-a2-u1-l5-q3', question: '"Hospitable" so\'zining ma\'nosi nima?', options: ['Mehmondo\'st', 'Balandparvoz', 'Qimmat', 'Qadimiy'], correctAnswerIndex: 0, explanation: 'Hospitable — Mehmondo\'st.' },
                        { id: 'en-a2-u1-l5-q4', question: 'How was the local food according to the text?', options: ['Delicious', 'Terrible', 'Spicy', 'Cold'], correctAnswerIndex: 0, explanation: 'The local food was delicious.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Future Forms & Plans
    {
        id: 'en-a2-u2-l1',
        courseId: 'english-a2',
        unitId: 'en-a2-u2',
        unitTitle: 'Unit 2: Future Forms & Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 1,
        title: 'Future: Going to for Intentions',
        description: 'Rejalashtirilgan niyatlar va maqsadlar (be going to + V).',
        estimatedDurationMinutes: 14,
        icon: '🎯',
        steps: [
            {
                id: 'en-a2-u2-l1-s1',
                title: 'Be Going To Qoidasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Be Going to (Qilishni rejalashtirmoq)',
                    explanation: 'Oldindan o\'ylangan niyatlar yoki ko\'rinib turgan dalil asosidagi bashoratlar uchun ishlatiladi.',
                    keyPoints: ['I am going to study abroad.', 'Look at the dark clouds! It is going to rain.'],
                    vocabulary: [
                        { term: 'Intention', reading: '/ɪnˈten.ʃən/', meaning: 'Niyat, maqsad', exampleSentence: 'My intention is to learn English.', exampleTranslation: 'Mening niyatim ingliz tilini o\'rganish.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-a2-u2-l1-e1', type: 'multiple-choice', prompt: '"We _______ (buy) a new car next month."', options: ['are going to buy', 'is going to buy', 'going to buy', 'are buy'], correctAnswer: 0, explanation: 'We are going to buy.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u2-l1-q1', question: 'She _______ start her own business soon.', options: ['is going to', 'are going to', 'going to', 'is go to'], correctAnswerIndex: 0, explanation: 'She is going to start.' },
                        { id: 'en-a2-u2-l1-q2', question: 'What _______ you going to do this weekend?', options: ['are', 'is', 'do', 'did'], correctAnswerIndex: 0, explanation: 'What are you going to do?' },
                        { id: 'en-a2-u2-l1-q3', question: 'I am not going to _______ late tomorrow.', options: ['be', 'being', 'was', 'am'], correctAnswerIndex: 0, explanation: 'Going to be late.' },
                        { id: 'en-a2-u2-l1-q4', question: 'They _______ to move to another city.', options: ['are going', 'is going', 'going', 'go'], correctAnswerIndex: 0, explanation: 'They are going to move.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u2-l2',
        courseId: 'english-a2',
        unitId: 'en-a2-u2',
        unitTitle: 'Unit 2: Future Forms & Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 2,
        title: 'Future: Will for Instant Decisions & Promises',
        description: 'Shu lahzada qabul qilingan qarorlar va va\'dalar (will / won\'t).',
        estimatedDurationMinutes: 12,
        icon: '⚡',
        steps: [
            {
                id: 'en-a2-u2-l2-s1',
                title: 'Will Qoidasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Will & Won\'t',
                    explanation: 'Suhbat paytida to\'satdan qaror qilganda, va\'da berganda yoki kelajak haqida o\'z fikringizni aytganda "will" ishlatiladi.',
                    keyPoints: ['"The door is ringing." -> "I will open it!"', '"I promise I will call you tomorrow."'],
                    vocabulary: [
                        { term: 'Promise', reading: '/ˈprɒm.ɪs/', meaning: 'Va\'da bermoq', exampleSentence: 'I promise to help you.', exampleTranslation: 'Sizga yordam berishga va\'da beraman.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-a2-u2-l2-e1', type: 'multiple-choice', prompt: '"I\'m cold." — "I _______ (close) the window."', options: ['will close', 'am close', 'closed', 'closing'], correctAnswer: 0, explanation: 'To\'satdan qaror: I will close.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u2-l2-q1', question: 'Don\'t worry, I _______ tell anyone your secret.', options: ['won\'t', 'will', 'not', 'don\'t'], correctAnswerIndex: 0, explanation: 'Won\'t (will not) tell.' },
                        { id: 'en-a2-u2-l2-q2', question: 'I think it _______ be a sunny day tomorrow.', options: ['will', 'is going', 'is', 'did'], correctAnswerIndex: 0, explanation: 'I think it will be.' },
                        { id: 'en-a2-u2-l2-q3', question: '"Will you marry me?" — "Yes, I _______."', options: ['will', 'do', 'am', 'did'], correctAnswerIndex: 0, explanation: 'Yes, I will.' },
                        { id: 'en-a2-u2-l2-q4', question: 'I am thirsty. I _______ drink some water.', options: ['will', 'am', 'was', 'have'], correctAnswerIndex: 0, explanation: 'I will drink.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u2-l3',
        courseId: 'english-a2',
        unitId: 'en-a2-u2',
        unitTitle: 'Unit 2: Future Forms & Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 3,
        title: 'Present Continuous for Fixed Arrangements',
        description: 'Aniq belgilangan uchrashuv va kelishuvlar (I am meeting).',
        estimatedDurationMinutes: 12,
        icon: '📅',
        steps: [
            {
                id: 'en-a2-u2-l3-s1',
                title: 'Belgilangan Rejalar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Present Continuous for Future',
                    explanation: 'Boshqa insonlar bilan oldindan aniq vaqt va joyi kelishilgan uchrashuvlar uchun Present Continuous ishlatiladi.',
                    keyPoints: ['I am flying to Dubai on Friday (chipta olingan).', 'We are having a team meeting tomorrow at 10 AM.'],
                    vocabulary: [
                        { term: 'Appointment', reading: '/əˈpɔɪnt.mənt/', meaning: 'Uchrashuv / Qabul', exampleSentence: 'I have a doctor\'s appointment on Monday.', exampleTranslation: 'Dushanba kuni shifokor qabulim bor.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-a2-u2-l3-e1', type: 'multiple-choice', prompt: '"I _______ (see) the dentist tomorrow morning at 9:00."', options: ['am seeing', 'see', 'saw', 'have seen'], correctAnswer: 0, explanation: 'Aniq rejalashtirilgan uchrashuv: am seeing.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u2-l3-q1', question: 'We _______ dinner with clients on Thursday evening.', options: ['are having', 'have', 'had', 'has'], correctAnswerIndex: 0, explanation: 'Are having dinner.' },
                        { id: 'en-a2-u2-l3-q2', question: 'Alex _______ next Saturday.', options: ['is getting married', 'gets married', 'got married', 'marry'], correctAnswerIndex: 0, explanation: 'Is getting married.' },
                        { id: 'en-a2-u2-l3-q3', question: 'What time _______ you meeting the manager?', options: ['are', 'do', 'did', 'will'], correctAnswerIndex: 0, explanation: 'Are you meeting...?' },
                        { id: 'en-a2-u2-l3-q4', question: 'I _______ to London tonight on the 9 PM flight.', options: ['am flying', 'fly', 'flew', 'flown'], correctAnswerIndex: 0, explanation: 'Am flying.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u2-l4',
        courseId: 'english-a2',
        unitId: 'en-a2-u2',
        unitTitle: 'Unit 2: Future Forms & Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 4,
        title: 'A2 Listening: Railway Station Announcements',
        description: 'Vokzal e\'lonlari va poyezdlar jadvalini tinglab tushunish.',
        estimatedDurationMinutes: 12,
        icon: '🚆',
        steps: [
            {
                id: 'en-a2-u2-l4-s1',
                title: 'E\'lon Matni',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Station Announcement',
                    explanation: 'Poyezd bekatidagi rasmiy bildirishnomalar.',
                    keyPoints: [
                        '"The 14:30 high-speed train to Samarkand will depart from Platform 2."',
                        '"Passengers are requested to have their tickets ready."',
                        '"The train to Bukhara is delayed by 15 minutes due to maintenance."'
                    ],
                    vocabulary: [
                        { term: 'Platform', reading: '/ˈplæt.fɔːm/', meaning: 'Peron / Platforma', exampleSentence: 'The train is on platform 3.', exampleTranslation: 'Poyezd 3-peronda.' },
                        { term: 'Delayed', reading: '/dɪˈleɪd/', meaning: 'Kechiktirilgan', exampleSentence: 'The flight is delayed.', exampleTranslation: 'Parvoz kechiktirildi.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'E\'lon bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-a2-u2-l4-e1', type: 'multiple-choice', prompt: 'Which platform will the Samarkand train depart from?', options: ['Platform 2', 'Platform 1', 'Platform 5', 'Platform 8'], correctAnswer: 0, explanation: 'Depart from Platform 2.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u2-l4-q1', question: 'How long is the Bukhara train delayed?', options: ['15 minutes', '30 minutes', '1 hour', '5 minutes'], correctAnswerIndex: 0, explanation: 'Delayed by 15 minutes.' },
                        { id: 'en-a2-u2-l4-q2', question: 'What time is the Samarkand train scheduled to leave?', options: ['14:30', '15:00', '12:00', '16:45'], correctAnswerIndex: 0, explanation: '14:30 train.' },
                        { id: 'en-a2-u2-l4-q3', question: '"Depart" so\'zining ma\'nosi nima?', options: ['Jo\'nab ketmoq', 'Yetib kelmoq', 'Kechikmoq', 'Chipta sotib olmoq'], correctAnswerIndex: 0, explanation: 'Depart — Jo\'nab ketmoq.' },
                        { id: 'en-a2-u2-l4-q4', question: '"Passenger" kim?', options: ['Yo\'lovchi', 'Haydovchi', 'Kassir', 'Pazanda'], correctAnswerIndex: 0, explanation: 'Passenger — Yo\'lovchi.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u2-l5',
        courseId: 'english-a2',
        unitId: 'en-a2-u2',
        unitTitle: 'Unit 2: Future Forms & Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 5,
        title: 'A2 Structured Writing: Informal Email to a Friend',
        description: 'Do\'stga norasmiy xat yozish va taklif bildirish.',
        estimatedDurationMinutes: 15,
        icon: '✉️',
        steps: [
            {
                id: 'en-a2-u2-l5-s1',
                title: 'Norasmiy Xat Strukturasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Writing an Informal Email',
                    explanation: 'Xatni boshlash (Hi Alex / Dear Sarah), asosiy qism (kelasi hafta dam olish rejalari), tugatish (Best wishes / Write back soon).',
                    keyPoints: [
                        'Opening: "Hi Mark! How are you doing? Hope you are well."',
                        'Body: "I am writing to invite you to my birthday party next Saturday."',
                        'Closing: "Let me know if you can come. Best wishes, Jasur."'
                    ],
                    vocabulary: [
                        { term: 'Invite', reading: '/ɪnˈvaɪt/', meaning: 'Taklif qilmoq', exampleSentence: 'I want to invite you to dinner.', exampleTranslation: 'Sizni kechki ovqatga taklif qilmoqchiman.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Xatdagi to\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'en-a2-u2-l5-e1', type: 'multiple-choice', prompt: 'Which closing phrase is suitable for an informal email to a friend?', options: ['Best wishes / See you soon', 'Yours faithfully', 'Dear Sir or Madam', 'To whom it may concern'], correctAnswer: 0, explanation: 'Do\'stga xatda "Best wishes / See you soon" ishlatiladi.' }
                    ]
                }
            },
            {
                id: 'en-a2-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u2-l5-q1', question: 'How do you greet a friend in an informal email?', options: ['Hi [Name],', 'Dear Sir/Madam,', 'To Whom It May Concern,', 'Sincerely,'], correctAnswerIndex: 0, explanation: 'Hi [Name].' },
                        { id: 'en-a2-u2-l5-q2', question: '"Let me know" nimani bildiradi?', options: ['Menga xabarini bering / aytib yuboring', 'Meni unuting', 'Ruxsat bering', 'Kechiring'], correctAnswerIndex: 0, explanation: 'Let me know — Xabar ber.' },
                        { id: 'en-a2-u2-l5-q3', question: 'Which sentence correctly expresses an invitation?', options: ['Would you like to come with us?', 'Are you coming with us not?', 'Do you have come with us?', 'Must you come with us?'], correctAnswerIndex: 0, explanation: 'Would you like to come...?' },
                        { id: 'en-a2-u2-l5-q4', question: 'Choose the correct sign-off phrase for friends:', options: ['Take care,', 'Yours sincerely,', 'Yours obediently,', 'Regards Sir,'], correctAnswerIndex: 0, explanation: 'Take care (O\'zingni ehtiyot qil).' }
                    ]
                }
            }
        ]
    },

    // Unit 3: Comparatives, Quantifiers & Modals
    {
        id: 'en-a2-u3-l1',
        courseId: 'english-a2',
        unitId: 'en-a2-u3',
        unitTitle: 'Unit 3: Comparatives, Quantifiers & Modals',
        language: 'en',
        level: 'A2',
        lessonNumber: 1,
        title: 'Comparatives & Superlatives (better, best)',
        description: 'Sifat darajalari: qiyosiy va orttirma daraja.',
        estimatedDurationMinutes: 14,
        icon: '📊',
        steps: [
            {
                id: 'en-a2-u3-l1-s1',
                title: 'Sifat Darajalari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Comparative and Superlative Adjectives',
                    explanation: 'Qisqa sifatlarga -er / -est qo\'shiladi (faster, fastest). Uzun sifatlarga more / most qo\'yiladi (more modern, most modern).',
                    keyPoints: ['good -> better -> the best', 'bad -> worse -> the worst', 'big -> bigger -> the biggest'],
                    vocabulary: [
                        { term: 'Better', reading: '/ˈbet.ər/', meaning: 'Yaxshiroq', exampleSentence: 'This phone is better than my old one.', exampleTranslation: 'Bu telefon eskisidan yaxshiroq.' },
                        { term: 'Worse', reading: '/wɜːs/', meaning: 'Yomonroq', exampleSentence: 'The traffic is worse today.', exampleTranslation: 'Bugun tirbandlik yomonroq.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri sifat shaklini tanlang.',
                    exercises: [
                        { id: 'en-a2-u3-l1-e1', type: 'multiple-choice', prompt: '"Tokyo is _______ (expensive) than Tashkent."', options: ['more expensive', 'expensiver', 'most expensive', 'as expensive'], correctAnswer: 0, explanation: 'More expensive than.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u3-l1-q1', question: 'Mount Everest is the _______ mountain in the world.', options: ['highest', 'higher', 'most high', 'high'], correctAnswerIndex: 0, explanation: 'The highest mountain.' },
                        { id: 'en-a2-u3-l1-q2', question: 'She is _______ than her brother.', options: ['taller', 'tallest', 'more tall', 'most tall'], correctAnswerIndex: 0, explanation: 'Taller than.' },
                        { id: 'en-a2-u3-l1-q3', question: 'What is the comparative form of "good"?', options: ['better', 'gooder', 'best', 'more good'], correctAnswerIndex: 0, explanation: 'Good -> better.' },
                        { id: 'en-a2-u3-l1-q4', question: 'This is the _______ delicious meal I have ever had.', options: ['most', 'more', 'much', 'many'], correctAnswerIndex: 0, explanation: 'The most delicious.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u3-l2',
        courseId: 'english-a2',
        unitId: 'en-a2-u3',
        unitTitle: 'Unit 3: Comparatives, Quantifiers & Modals',
        language: 'en',
        level: 'A2',
        lessonNumber: 2,
        title: 'Countable & Uncountable Nouns (much, many, some, any)',
        description: 'Sanaladigan va sanalmaydigan otlar, miqdor so\'zlari.',
        estimatedDurationMinutes: 14,
        icon: '🍎',
        steps: [
            {
                id: 'en-a2-u3-l2-s1',
                title: 'Sanaladigan va Sanalmaydigan Otlar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Much, Many, A lot of, Some, Any',
                    explanation: 'Sanaladigan otlar (apples, books) bilan many/a few, sanalmaydiganlar (water, money) bilan much/a little ishlatiladi. Darak gapda "some", inkor va so\'roqda "any".',
                    keyPoints: ['How many brothers do you have?', 'How much milk is in the fridge?', 'I have some money, but I don\'t have any cash.'],
                    vocabulary: [
                        { term: 'Enough', reading: '/ɪˈnʌf/', meaning: 'Yetarli', exampleSentence: 'Do we have enough time?', exampleTranslation: 'Bizda yetarli vaqt bormi?' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri miqdor so\'zini tanlang.',
                    exercises: [
                        { id: 'en-a2-u3-l2-e1', type: 'multiple-choice', prompt: '"How _______ sugar do you want in your tea?"', options: ['much', 'many', 'few', 'any'], correctAnswer: 0, explanation: 'Sugar sanalmaydi: How much.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u3-l2-q1', question: 'How _______ students are in your classroom?', options: ['many', 'much', 'little', 'any'], correctAnswerIndex: 0, explanation: 'Students sanaladi: How many.' },
                        { id: 'en-a2-u3-l2-q2', question: 'We don\'t have _______ milk left in the fridge.', options: ['any', 'some', 'no', 'many'], correctAnswerIndex: 0, explanation: 'Inkor gapda: any.' },
                        { id: 'en-a2-u3-l2-q3', question: 'I would like _______ information about the course.', options: ['some', 'a', 'an', 'many'], correctAnswerIndex: 0, explanation: 'Information sanalmaydi: some information.' },
                        { id: 'en-a2-u3-l2-q4', question: 'There are only a _______ people waiting outside.', options: ['few', 'little', 'much', 'any'], correctAnswerIndex: 0, explanation: 'A few people.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u3-l3',
        courseId: 'english-a2',
        unitId: 'en-a2-u3',
        unitTitle: 'Unit 3: Comparatives, Quantifiers & Modals',
        language: 'en',
        level: 'A2',
        lessonNumber: 3,
        title: 'Modals: Must, Have to, Should for Rules & Advice',
        description: 'Majburiyat (must / have to) va maslahat (should) berish.',
        estimatedDurationMinutes: 14,
        icon: '⚠️',
        steps: [
            {
                id: 'en-a2-u3-l3-s1',
                title: 'Modal Fe\'llar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Must, Have to, Should',
                    explanation: 'Must / Have to — Qat\'iy majburiyat yoki qoida. Should — Do\'stona maslahat ("qilsangiz yaxshi bo\'lardi").',
                    keyPoints: ['You must wear a seatbelt (qonun/qoida).', 'You should drink more water (foydali maslahat).', 'You don\'t have to pay (majbur emassiz).'],
                    vocabulary: [
                        { term: 'Advice', reading: '/ədˈvaɪs/', meaning: 'Maslahat', exampleSentence: 'Thank you for your useful advice.', exampleTranslation: 'Foydali maslahatingiz uchun rahmat.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri modal fe\'lni tanlang.',
                    exercises: [
                        { id: 'en-a2-u3-l3-e1', type: 'multiple-choice', prompt: '"You look exhausted. You _______ go to bed early."', options: ['should', 'must to', 'have', 'don\'t'], correctAnswer: 0, explanation: 'Maslahat berish: You should.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u3-l3-q1', question: 'Passengers _______ show their passports at border control.', options: ['must', 'should', 'can to', 'might'], correctAnswerIndex: 0, explanation: 'Qat\'iy qoida: must.' },
                        { id: 'en-a2-u3-l3-q2', question: 'Tomorrow is Sunday, so I _______ wake up early.', options: ['don\'t have to', 'mustn\'t', 'should', 'have to not'], correctAnswerIndex: 0, explanation: 'Majburiyat yo\'q: don\'t have to.' },
                        { id: 'en-a2-u3-l3-q3', question: 'You _______ eat too much sugary food.', options: ['shouldn\'t', 'must', 'have to', 'don\'t should'], correctAnswerIndex: 0, explanation: 'Shouldn\'t.' },
                        { id: 'en-a2-u3-l3-q4', question: 'Does she _______ wear a uniform at school?', options: ['have to', 'must', 'has to', 'should to'], correctAnswerIndex: 0, explanation: 'Does she have to...?' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u3-l4',
        courseId: 'english-a2',
        unitId: 'en-a2-u3',
        unitTitle: 'Unit 3: Comparatives, Quantifiers & Modals',
        language: 'en',
        level: 'A2',
        lessonNumber: 4,
        title: 'Adverbs of Frequency & Manner (always, quickly)',
        description: 'Takroriylik (always, usually, never) va harakat tarzi ravishlari (slowly, carefully).',
        estimatedDurationMinutes: 12,
        icon: '⚡',
        steps: [
            {
                id: 'en-a2-u3-l4-s1',
                title: 'Ravishlar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Adverbs: Frequency and Manner',
                    explanation: 'Chastota ravishlari asosiy fe\'ldan oldin (to be dan keyin) keladi: I always arrive on time. He is always happy. Tarz ravishlari -ly bilan tugaydi: drives carefully.',
                    keyPoints: ['always (100%), usually (80%), often (60%), sometimes (40%), never (0%)', 'quick -> quickly, careful -> carefully, fast -> fast (istisno)'],
                    vocabulary: [
                        { term: 'Carefully', reading: '/ˈkeə.fəl.i/', meaning: 'Ehtiyotkorlik bilan', exampleSentence: 'Drive carefully on icy roads.', exampleTranslation: 'Muzlama yo\'llarda ehtiyotkorlik bilan haydang.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri ravish o\'rnini tanlang.',
                    exercises: [
                        { id: 'en-a2-u3-l4-e1', type: 'multiple-choice', prompt: '"He _______ (never / eat) meat."', options: ['never eats', 'eats never', 'never eat', 'is never eat'], correctAnswer: 0, explanation: 'He never eats.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u3-l4-q1', question: 'She speaks English very _______.', options: ['fluently', 'fluent', 'more fluent', 'fluentlyness'], correctAnswerIndex: 0, explanation: 'Fluently (ravon tarzda).' },
                        { id: 'en-a2-u3-l4-q2', question: 'I _______ drink coffee before going to bed.', options: ['never', 'neverly', 'ever', 'always not'], correctAnswerIndex: 0, explanation: 'I never drink.' },
                        { id: 'en-a2-u3-l4-q3', question: 'He runs very _______.', options: ['fast', 'fastly', 'fasterly', 'quick'], correctAnswerIndex: 0, explanation: 'Fast ravishi -ly olmaydi.' },
                        { id: 'en-a2-u3-l4-q4', question: 'They are _______ late for the morning meeting.', options: ['rarely', 'rare', 'rarelyly', 'rarer'], correctAnswerIndex: 0, explanation: 'Are rarely late.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u3-l5',
        courseId: 'english-a2',
        unitId: 'en-a2-u3',
        unitTitle: 'Unit 3: Comparatives, Quantifiers & Modals',
        language: 'en',
        level: 'A2',
        lessonNumber: 5,
        title: 'Common Phrasal Verbs (wake up, look for, turn on)',
        description: 'Kundalik hayotda eng ko\'p ishlatiladigan iborali fe\'llar.',
        estimatedDurationMinutes: 14,
        icon: '🔌',
        steps: [
            {
                id: 'en-a2-u3-l5-s1',
                title: 'Phrasal Verbs',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Phrasal Verbs Asoslari',
                    explanation: 'Fe\'l va predlog birikib yangi ma\'no hosil qiladi.',
                    keyPoints: [
                        'Turn on / off (chiroq yoki asbobni yoqmoq/o\'chirmoq)',
                        'Look for (qidirmoq), Look after (parvarish qilmoq)',
                        'Give up (taslim bo\'lmoq / tashlamoq), Put on (kiymoq)'
                    ],
                    vocabulary: [
                        { term: 'Look for', reading: '/lʊk fɔːr/', meaning: 'Qidirmoq', exampleSentence: 'I am looking for my keys.', exampleTranslation: 'Men kalitlarimni qidiryapman.' },
                        { term: 'Turn on', reading: '/tɜːn ɒn/', meaning: 'Yoqmoq (asbobni)', exampleSentence: 'Please turn on the light.', exampleTranslation: 'Iltimos, chiroqni yoqing.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri phrasal verbni tanlang.',
                    exercises: [
                        { id: 'en-a2-u3-l5-e1', type: 'multiple-choice', prompt: '"It is dark in here. Please _______ the lamp."', options: ['turn on', 'turn off', 'look for', 'give up'], correctAnswer: 0, explanation: 'Turn on the lamp.' }
                    ]
                }
            },
            {
                id: 'en-a2-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u3-l5-q1', question: 'Don\'t _______ your dreams! Keep trying.', options: ['give up', 'give in', 'turn off', 'look after'], correctAnswerIndex: 0, explanation: 'Give up (taslim bo\'lmoq).' },
                        { id: 'en-a2-u3-l5-q2', question: 'She _______ her little brother while her parents work.', options: ['looks after', 'looks for', 'turns on', 'wakes up'], correctAnswerIndex: 0, explanation: 'Looks after (parvarishlaydi).' },
                        { id: 'en-a2-u3-l5-q3', question: '"Put on your coat" nimani bildiradi?', options: ['Paltoyingizni kiying', 'Paltoyingizni yeching', 'Palto sotib oling', 'Paltongizni yuvib qo\'ying'], correctAnswerIndex: 0, explanation: 'Put on — Kiymoq.' },
                        { id: 'en-a2-u3-l5-q4', question: 'I need to _______ early tomorrow for my flight.', options: ['wake up', 'look for', 'turn on', 'give up'], correctAnswerIndex: 0, explanation: 'Wake up (uyg\'onmoq).' }
                    ]
                }
            }
        ]
    },

    // Unit 4: Travel, Health & Everyday Communication
    {
        id: 'en-a2-u4-l1',
        courseId: 'english-a2',
        unitId: 'en-a2-u4',
        unitTitle: 'Unit 4: Travel & Health',
        language: 'en',
        level: 'A2',
        lessonNumber: 1,
        title: 'Travel, Airport & Hotel Check-in',
        description: 'Aeroport va mehmonxonada ro\'yxatdan o\'tish so\'zlashuvi.',
        estimatedDurationMinutes: 14,
        icon: '🏨',
        steps: [
            {
                id: 'en-a2-u4-l1-s1',
                title: 'Mehmonxona va Aeroport',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Hotel Check-in & Airport Language',
                    explanation: 'Sayohatdagi eng kerakli iboralar: "I have a reservation under the name of...", "Where is the boarding gate?"',
                    vocabulary: [
                        { term: 'Reservation', reading: '/ˌrez.əˈveɪ.ʃən/', meaning: 'Oldindan band qilish (bron)', exampleSentence: 'I have a reservation for two nights.', exampleTranslation: 'Menda ikki kechaga band qilingan joy bor.' },
                        { term: 'Boarding pass', reading: '/ˈbɔː.dɪŋ ˌpɑːs/', meaning: 'Samolyotga chiqish taloni', exampleSentence: 'Please show your passport and boarding pass.', exampleTranslation: 'Iltimos, pasport va chiqish talonini ko\'rsating.' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'en-a2-u4-l1-e1', type: 'multiple-choice', prompt: '"What time is _______ at this hotel?" — "At 11:00 AM."', options: ['check-out', 'boarding', 'depart', 'reserve'], correctAnswer: 0, explanation: 'Check-out (mehmonxonadan chiqish).' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u4-l1-q1', question: 'Where do you go to get on the airplane?', options: ['Boarding gate', 'Check-out desk', 'Reception', 'Baggage claim'], correctAnswerIndex: 0, explanation: 'Boarding gate.' },
                        { id: 'en-a2-u4-l1-q2', question: 'Can I have a wake-up _______ at 6 AM, please?', options: ['call', 'ring', 'phone', 'shout'], correctAnswerIndex: 0, explanation: 'Wake-up call (uyg\'otish qo\'ng\'irog\'i).' },
                        { id: 'en-a2-u4-l1-q3', question: '"Luggage / Baggage" nimani bildiradi?', options: ['Yuk / Bagaj', 'Chipta', 'Samolyot', 'Pasport'], correctAnswerIndex: 0, explanation: 'Luggage — Yuk.' },
                        { id: 'en-a2-u4-l1-q4', question: 'Is breakfast _______ in the room rate?', options: ['included', 'including', 'includes', 'include'], correctAnswerIndex: 0, explanation: 'Included in the room rate (xonaga kiritilgan).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u4-l2',
        courseId: 'english-a2',
        unitId: 'en-a2-u4',
        unitTitle: 'Unit 4: Travel & Health',
        language: 'en',
        level: 'A2',
        lessonNumber: 2,
        title: 'Health, Illness & Doctor\'s Appointment',
        description: 'Sog\'liq, kasallik belgilari va shifokor qabulida so\'zlashuv.',
        estimatedDurationMinutes: 14,
        icon: '🩺',
        steps: [
            {
                id: 'en-a2-u4-l2-s1',
                title: 'Shifokor Huzurida',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Talking about Symptoms',
                    explanation: 'O\'zini qanday his qilayotganini tushuntirish: "I have a headache", "I have a sore throat", "I feel dizzy".',
                    vocabulary: [
                        { term: 'Headache', reading: '/ˈhed.eɪk/', meaning: 'Bosh og\'rig\'i', exampleSentence: 'I have a terrible headache.', exampleTranslation: 'Menda qattiq bosh og\'rig\'i bor.' },
                        { term: 'Fever', reading: '/ˈfiː.vər/', meaning: 'Isitma', exampleSentence: 'The child has a high fever.', exampleTranslation: 'Bolada yuqori isitma bor.' },
                        { term: 'Medicine', reading: '/ˈmed.sən/', meaning: 'Dori-darmon', exampleSentence: 'Take this medicine twice a day.', exampleTranslation: 'Bu dorini kuniga ikki marta iching.' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri tibbiy so\'zni tanlang.',
                    exercises: [
                        { id: 'en-a2-u4-l2-e1', type: 'multiple-choice', prompt: '"I have a sore _______, so it hurts when I swallow."', options: ['throat', 'head', 'knee', 'stomach'], correctAnswer: 0, explanation: 'Sore throat (tomoq og\'rig\'i).' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u4-l2-q1', question: 'You should see a doctor if your _______ lasts more than 3 days.', options: ['fever', 'appointment', 'prescription', 'pills'], correctAnswerIndex: 0, explanation: 'Fever (isitma).' },
                        { id: 'en-a2-u4-l2-q2', question: '"Prescription" nimani bildiradi?', options: ['Shifokor yozib bergan dori retsepti', 'Kasalxona to\'lovi', 'Qon bosimi', 'Tashxis'], correctAnswerIndex: 0, explanation: 'Prescription — Retsept.' },
                        { id: 'en-a2-u4-l2-q3', question: 'I have a stomach ache. I _______ eat spicy food.', options: ['shouldn\'t', 'must', 'can', 'have to'], correctAnswerIndex: 0, explanation: 'Shouldn\'t eat.' },
                        { id: 'en-a2-u4-l2-q4', question: 'Take this pill _______ meals.', options: ['after', 'over', 'into', 'under'], correctAnswerIndex: 0, explanation: 'After meals (ovqatdan keyin).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u4-l3',
        courseId: 'english-a2',
        unitId: 'en-a2-u4',
        unitTitle: 'Unit 4: Travel & Health',
        language: 'en',
        level: 'A2',
        lessonNumber: 3,
        title: 'Shopping, Sizing & Returning Items',
        description: 'Do\'konda xarid qilish, kiyim o\'lchami va buyumni almashtirish.',
        estimatedDurationMinutes: 12,
        icon: '🛍️',
        steps: [
            {
                id: 'en-a2-u4-l3-s1',
                title: 'Xarid Tilini O\'rganish',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Shopping & Returns',
                    explanation: 'Kiyim sinab ko\'rish va o\'lcham so\'rash: "Can I try this on?", "Do you have this in a medium size?", "Can I get a refund?"',
                    vocabulary: [
                        { term: 'Size', reading: '/saɪz/', meaning: 'O\'lcham', exampleSentence: 'What size do you wear?', exampleTranslation: 'Qaysi o\'lchamni kiyasiz?' },
                        { term: 'Receipt', reading: '/rɪˈsiːt/', meaning: 'Chek / Kvitansiya', exampleSentence: 'Keep your receipt for returns.', exampleTranslation: 'Qaytarib berish uchun chekni saqlang.' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'en-a2-u4-l3-e1', type: 'multiple-choice', prompt: '"Where is the _______ room? I want to try these jeans on."', options: ['fitting', 'sleeping', 'living', 'kitchen'], correctAnswer: 0, explanation: 'Fitting room (kiyib ko\'rish xonasi).' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u4-l3-q1', question: 'These shoes are too tight. Do you have a _______ size?', options: ['larger', 'large', 'largest', 'more large'], correctAnswerIndex: 0, explanation: 'A larger size (kattaroq o\'lcham).' },
                        { id: 'en-a2-u4-l3-q2', question: '"Can I get a refund?" nimani anglatadi?', options: ['Pulimni qaytarib olsam bo\'ladimi?', 'Yana bitta sotib olsam maylimi?', 'Chegirma bormi?', 'Karta qabul qilasizmi?'], correctAnswerIndex: 0, explanation: 'Refund — Pulni qaytarish.' },
                        { id: 'en-a2-u4-l3-q3', question: 'Are you paying by cash or by _______?', options: ['credit card', 'receipt', 'discount', 'fitting'], correctAnswerIndex: 0, explanation: 'By credit card.' },
                        { id: 'en-a2-u4-l3-q4', question: 'This jacket _______ you perfectly!', options: ['fits', 'fit', 'fitting', 'is fit'], correctAnswerIndex: 0, explanation: 'Fits you perfectly (sizga juda yarashdi/mos keldi).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u4-l4',
        courseId: 'english-a2',
        unitId: 'en-a2-u4',
        unitTitle: 'Unit 4: Travel & Health',
        language: 'en',
        level: 'A2',
        lessonNumber: 4,
        title: 'Functional Speaking: Asking for Help & Clarification',
        description: 'Tushunmay qolganda qayta so\'rash va yordam so\'rash iboralari.',
        estimatedDurationMinutes: 12,
        icon: '🗣️',
        steps: [
            {
                id: 'en-a2-u4-l4-s1',
                title: 'Aniqlashtirish Iboralari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Clarification & Help',
                    explanation: 'Suhbatdosh tez yoki tushunarsiz gapirganda: "Could you repeat that, please?", "Could you speak more slowly?", "What does ... mean?"',
                    vocabulary: [
                        { term: 'Repeat', reading: '/rɪˈpiːt/', meaning: 'Takrorlamoq', exampleSentence: 'Could you repeat the question?', exampleTranslation: 'Savolni takrorlay olasizmi?' },
                        { term: 'Slowly', reading: '/ˈsləʊ.li/', meaning: 'Sekinroq', exampleSentence: 'Please speak more slowly.', exampleTranslation: 'Iltimos, sekinroq gapiring.' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'en-a2-u4-l4-e1', type: 'multiple-choice', prompt: '"I didn\'t catch that. Could you please say that _______?"', options: ['again', 'more', 'already', 'soon'], correctAnswer: 0, explanation: 'Say that again (yana bir bor aytib yuboring).' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u4-l4-q1', question: '"What does this word mean?" nima ma\'noda aytiladi?', options: ['Bu so\'z nimani bildiradi?', 'Bu so\'z qanday yoziladi?', 'Bu so\'zni kim aytdi?', 'Bu so\'z noto\'g\'rimi?'], correctAnswerIndex: 0, explanation: 'So\'z ma\'nosini so\'rash.' },
                        { id: 'en-a2-u4-l4-q2', question: 'Could you _______ me a hand with this heavy box?', options: ['give', 'make', 'do', 'take'], correctAnswerIndex: 0, explanation: 'Give someone a hand (yordamlashmoq).' },
                        { id: 'en-a2-u4-l4-q3', question: 'How do you _______ your surname?', options: ['spell', 'speak', 'talk', 'tell'], correctAnswerIndex: 0, explanation: 'Spell (harflab aytmoq).' },
                        { id: 'en-a2-u4-l4-q4', question: 'Sorry, I don\'t _______. Could you explain it differently?', options: ['understand', 'knowing', 'hear', 'learn'], correctAnswerIndex: 0, explanation: 'I don\'t understand.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u4-l5',
        courseId: 'english-a2',
        unitId: 'en-a2-u4',
        unitTitle: 'Unit 4: Travel & Health',
        language: 'en',
        level: 'A2',
        lessonNumber: 5,
        title: 'A2 Capstone Mastery & Progression Assessment',
        description: 'A2 darajasini to\'liq yakunlash va B1 ga o\'tish imtihoni.',
        estimatedDurationMinutes: 16,
        icon: '🏆',
        steps: [
            {
                id: 'en-a2-u4-l5-s1',
                title: 'A2 Daraja Xulosasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'A2 Pre-Intermediate Summary',
                    explanation: 'A2 darajasida siz o\'tgan zamon (Past Simple, Past Continuous), kelasi zamon (will, going to), sifat darajalari va kundalik erkin muloqotni egalladingiz.',
                    keyPoints: [
                        'Past vs Present vs Future comparison',
                        'Modal verbs: must, have to, should, can',
                        'Travel, hotel, doctor, shopping communications'
                    ]
                }
            },
            {
                id: 'en-a2-u4-l5-s2',
                title: 'Imtihon Oldi Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Xatolarni toping va to\'g\'ri jumlani tanlang.',
                    exercises: [
                        { id: 'en-a2-u4-l5-e1', type: 'multiple-choice', prompt: 'Which sentence is 100% correct?', options: ['While I was walking, I saw an accident.', 'While I was walking, I see an accident.', 'While I walked, I was seeing an accident.', 'I was see an accident while walking.'], correctAnswer: 0, explanation: 'While I was walking, I saw an accident.' }
                    ]
                }
            },
            {
                id: 'en-a2-u4-l5-s3',
                title: 'A2 Yakuniy Sinov',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'A2 darajasini muvaffaqiyatli yakunlash uchun barcha savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u4-l5-q1', question: 'Where _______ you go on holiday last year?', options: ['did', 'do', 'were', 'have'], correctAnswerIndex: 0, explanation: 'Where did you go...?' },
                        { id: 'en-a2-u4-l5-q2', question: 'This is the _______ restaurant in town.', options: ['best', 'goodest', 'better', 'most good'], correctAnswerIndex: 0, explanation: 'The best restaurant.' },
                        { id: 'en-a2-u4-l5-q3', question: 'You _______ pay for the museum on Sundays; it is free.', options: ['don\'t have to', 'mustn\'t', 'should', 'can\'t to'], correctAnswerIndex: 0, explanation: 'Don\'t have to pay (tekin bo\'lsa majburiyat yo\'q).' },
                        { id: 'en-a2-u4-l5-q4', question: 'Look at those dark clouds! It _______ rain.', options: ['is going to', 'will to', 'is rain', 'shall'], correctAnswerIndex: 0, explanation: 'Ko\'rinib turgan dalil: is going to rain.' }
                    ]
                }
            }
        ]
    },

    // Unit 5: Socializing, Technology & A2 Mastery Review (Lessons 21 - 25)
    {
        id: 'en-a2-u5-l1',
        courseId: 'english-a2',
        unitId: 'en-a2-u5',
        unitTitle: 'Unit 5: Socializing & Future Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 21,
        title: 'Making Invitations & Arrangements',
        description: 'Takliflar: "Would you like to...?", "Shall we...?", "How about...?" va mos javoblar.',
        estimatedDurationMinutes: 14,
        icon: '✉️',
        steps: [
            {
                id: 'en-a2-u5-l1-s1',
                title: 'Taklif Iboralari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Making & Responding to Invitations',
                    explanation: 'Birovni biror joyga taklif qilish va rozi bo\'lish / rad etish iboralari.',
                    keyPoints: [
                        'Would you like to join us for dinner? — Biz bilan kechki ovqatga qo\'shilasizmi?',
                        'I would love to, thanks! — Jon deb, rahmat!',
                        'I am sorry, I can\'t. I am busy. — Uzr, bora olmayman. Bandman.'
                    ],
                    vocabulary: [
                        { term: 'Invitation', reading: '/ˌɪn.vɪˈteɪ.ʃən/', meaning: 'Taklifnoma', exampleSentence: 'Thank you for the invitation.', exampleTranslation: 'Taklif uchun rahmat.' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-a2-u5-l1-e1', type: 'multiple-choice', prompt: '"Would you like _______ to the movies tonight?"', options: ['to go', 'going', 'go', 'went'], correctAnswer: 0, explanation: 'Would you like + to + verb.' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u5-l1-q1', question: 'How about _______ football this weekend?', options: ['playing', 'to play', 'play', 'played'], correctAnswerIndex: 0, explanation: 'How about + V-ing.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u5-l2',
        courseId: 'english-a2',
        unitId: 'en-a2-u5',
        unitTitle: 'Unit 5: Socializing & Future Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 22,
        title: 'Technology & Digital Life Vocabulary',
        description: 'Texnologiya va raqamli hayot: "Download", "Upload", "Password", "Social media", va fe\'llar.',
        estimatedDurationMinutes: 14,
        icon: '💻',
        steps: [
            {
                id: 'en-a2-u5-l2-s1',
                title: 'Raqamli So\'zlar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Digital Technology Terms',
                    explanation: 'Komp\'yuter va smartfondan foydalanishdagi asosiy A2 iboralar.',
                    keyPoints: [
                        'Log in / Log out — Tizimga kirish / chiqish',
                        'Attach a file — Fayl ilova qilish',
                        'Click the button — Tugmani bosish'
                    ],
                    vocabulary: [
                        { term: 'Password', reading: '/ˈpɑːs.wɜːd/', meaning: 'Parol', exampleSentence: 'Enter your password.', exampleTranslation: 'Parolingizni kiriting.' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri so\'zni tanlang.',
                    exercises: [
                        { id: 'en-a2-u5-l2-e1', type: 'multiple-choice', prompt: 'Don\'t forget to _______ your document before closing.', options: ['save', 'delete', 'forget', 'lose'], correctAnswer: 0, explanation: 'Save = saqlash.' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u5-l2-q1', question: 'I sent you an email with an _______ file.', options: ['attached', 'attaching', 'attaches', 'attach'], correctAnswerIndex: 0, explanation: 'Attached file (ilova qilingan fayl).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u5-l3',
        courseId: 'english-a2',
        unitId: 'en-a2-u5',
        unitTitle: 'Unit 5: Socializing & Future Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 23,
        title: 'Describing Life Events & Biography',
        description: 'Biografiya va hayotiy voqealar: "Be born", "Graduate", "Get a job", "Move to another city".',
        estimatedDurationMinutes: 14,
        icon: '📜',
        steps: [
            {
                id: 'en-a2-u5-l3-s1',
                title: 'Hayotiy Voqealar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Life Milestones',
                    explanation: 'O\'tmishdagi hayotiy bosqichlar va biografiyalar haqida gapirish.',
                    keyPoints: [
                        'He was born in 1995 in Samarkand.',
                        'She graduated from university 3 years ago.',
                        'They got married in 2020.'
                    ],
                    vocabulary: [
                        { term: 'Graduate', reading: '/ˈɡrædʒ.u.eɪt/', meaning: 'Bitirmoq (o\'quv yurti)', exampleSentence: 'I graduated in 2022.', exampleTranslation: 'Men 2022-yilda bitirdim.' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri fe\'l shaklini tanlang.',
                    exercises: [
                        { id: 'en-a2-u5-l3-e1', type: 'multiple-choice', prompt: '"Shakespeare _______ born in 1564."', options: ['was', 'were', 'is', 'has been'], correctAnswer: 0, explanation: 'He was born...' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u5-l3-q1', question: 'When did they _______ to Tashkent?', options: ['move', 'moved', 'moving', 'moves'], correctAnswerIndex: 0, explanation: 'Did ... move (lug\'at shakli).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u5-l4',
        courseId: 'english-a2',
        unitId: 'en-a2-u5',
        unitTitle: 'Unit 5: Socializing & Future Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 24,
        title: 'Giving Advice with Should & Ought To',
        description: 'Maslahat berish: "You should see a doctor", "You shouldn\'t stay up late".',
        estimatedDurationMinutes: 14,
        icon: '💡',
        steps: [
            {
                id: 'en-a2-u5-l4-s1',
                title: 'Maslahat Fe\'li (Should)',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Giving Advice (Should / Shouldn\'t)',
                    explanation: 'Kimgadir maslahat berishda "should" qo\'llaniladi.',
                    keyPoints: [
                        'You should drink more water. — Ko\'proq suv ichishingiz kerak.',
                        'You shouldn\'t eat so much junk food. — Juda ko\'p zararli taom yemasligingiz kerak.',
                        'What should I do? — Men nima qilishim kerak?'
                    ],
                    vocabulary: [
                        { term: 'Advice', reading: '/ədˈvaɪs/', meaning: 'Maslahat', exampleSentence: 'Can you give me some advice?', exampleTranslation: 'Menga biror maslahat bera olasizmi?' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-a2-u5-l4-e1', type: 'multiple-choice', prompt: '"You have a fever. You _______ see a doctor."', options: ['should', 'shouldn\'t', 'don\'t', 'mustn\'t to'], correctAnswer: 0, explanation: 'Should = tavsiya/maslahat.' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a2-u5-l4-q1', question: 'Which sentence correctly gives negative advice?', options: ['You shouldn\'t smoke.', 'You should not to smoke.', 'You don\'t should smoke.', 'You must not smoke to.'], correctAnswerIndex: 0, explanation: 'You shouldn\'t smoke.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a2-u5-l5',
        courseId: 'english-a2',
        unitId: 'en-a2-u5',
        unitTitle: 'Unit 5: Socializing & Future Plans',
        language: 'en',
        level: 'A2',
        lessonNumber: 25,
        title: 'A2 Comprehensive Final Assessment & B1 Bridge',
        description: 'A2 darajasining to\'liq yakuniy baholash imtihoni va B1 darajasiga o\'tish uchun tayyorgarlik.',
        estimatedDurationMinutes: 16,
        icon: '🎓',
        steps: [
            {
                id: 'en-a2-u5-l5-s1',
                title: 'A2 Xulosa va B1 Tayyorgarlik',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'A2 Comprehensive Review',
                    explanation: 'A2 darajadagi barcha asosiy tushunchalar: Past Simple, Continuous, Comparatives, Future (going to), Modals (have to, should).',
                    keyPoints: [
                        'Past vs Present comparison',
                        'Basic connectors: because, although, so, but',
                        'Expressing opinions and giving recommendations'
                    ]
                }
            },
            {
                id: 'en-a2-u5-l5-s2',
                title: 'A2 Mashqlar',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Savollarga javob bering.',
                    exercises: [
                        { id: 'en-a2-u5-l5-e1', type: 'multiple-choice', prompt: '"I missed the bus, _______ I walked to school."', options: ['so', 'because', 'although', 'but'], correctAnswer: 0, explanation: 'So = shuning uchun (natija).' }
                    ]
                }
            },
            {
                id: 'en-a2-u5-l5-s3',
                title: 'A2 Level Promotion Exam',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'B1 darajasiga o\'tish uchun testni kamida 80% natija bilan topshiring.',
                    passingScorePercentage: 80,
                    questions: [
                        { id: 'en-a2-u5-l5-q1', question: 'While we _______ dinner, the lights went out.', options: ['were having', 'had', 'have', 'are having'], correctAnswerIndex: 0, explanation: 'While we were having...' },
                        { id: 'en-a2-u5-l5-q2', question: 'He is _______ taller than his brother.', options: ['much', 'more', 'many', 'very'], correctAnswerIndex: 0, explanation: 'Much taller (ancha balandroq).' },
                        { id: 'en-a2-u5-l5-q3', question: 'You _______ clean your room before going out; mom said so.', options: ['must', 'shouldn\'t', 'don\'t have to', 'can'], correctAnswerIndex: 0, explanation: 'Must = buyruq/majburiyat.' },
                        { id: 'en-a2-u5-l5-q4', question: 'She has decided. She _______ start a new business next year.', options: ['is going to', 'will be', 'starts', 'went to'], correctAnswerIndex: 0, explanation: 'Qaror qilingan reja: is going to.' }
                    ]
                }
            }
        ]
    }
];

