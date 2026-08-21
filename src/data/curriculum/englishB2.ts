import { Lesson } from '../../types/lesson';

export const ENGLISH_B2_LESSONS: Lesson[] = [
    // Unit 1: Advanced Grammar & Inversion
    {
        id: 'en-b2-u1-l1',
        courseId: 'english-b2',
        unitId: 'en-b2-u1',
        unitTitle: 'Unit 1: Advanced Grammar & Inversion',
        language: 'en',
        level: 'B2',
        lessonNumber: 1,
        title: 'Negative Inversion (Rarely, Seldom, Not only)',
        description: 'Urg\'u berish uchun gap boshida inkor ravishlar bilan inversiya qo\'llash.',
        estimatedDurationMinutes: 16,
        icon: '🔄',
        steps: [
            {
                id: 'en-b2-u1-l1-s1',
                title: 'Inversiya Qoidalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Negative Inversion for Emphasis',
                    explanation: 'Ingliz tilida inkor yoki cheklovchi so\'zlar (Rarely, Seldom, Never, Hardly, Under no circumstances, Not only) gap boshiga chiqqanda yordamchi fe\'l egadan oldinga o\'tadi.',
                    keyPoints: [
                        'Rarely have I seen such dedication. (I have rarely seen o\'rniga)',
                        'Not only did she win the competition, but she also set a world record.',
                        'Hardly had we arrived when it began to pour down.'
                    ],
                    vocabulary: [
                        { term: 'Seldom', reading: '/ˈsel.dəm/', meaning: 'Kamdan-kam / Kam hollarda', exampleSentence: 'Seldom does one encounter such natural talent.', exampleTranslation: 'Bunday tabiiy iste\'dod kamdan-kam uchraydi.' },
                        { term: 'Circumstance', reading: '/ˈsɜː.kəm.stɑːns/', meaning: 'Holat / Vaziyat', exampleSentence: 'Under no circumstances should you leave.', exampleTranslation: 'Hech qanday holatda ketmasligingiz kerak.' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l1-s2',
                title: 'Inversiya Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri inversiya shaklini tanlang.',
                    exercises: [
                        { id: 'en-b2-u1-l1-e1', type: 'multiple-choice', prompt: '"Rarely _______ such an inspiring speech."', options: ['have I heard', 'I have heard', 'I heard', 'did I heard'], correctAnswer: 0, explanation: 'Rarely + have I heard.' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u1-l1-q1', question: 'Not only _______ late, but he also forgot the documents.', options: ['did he arrive', 'he arrived', 'he did arrive', 'was he arrived'], correctAnswerIndex: 0, explanation: 'Not only did he arrive...' },
                        { id: 'en-b2-u1-l1-q2', question: 'Under no circumstances _______ the door unattended.', options: ['must you leave', 'you must leave', 'you leave', 'leaving'], correctAnswerIndex: 0, explanation: 'Under no circumstances must you leave.' },
                        { id: 'en-b2-u1-l1-q3', question: 'Hardly had they started the journey _______ the engine failed.', options: ['when', 'than', 'that', 'while'], correctAnswerIndex: 0, explanation: 'Hardly had ... when ...' },
                        { id: 'en-b2-u1-l1-q4', question: 'No sooner had she finished her degree _______ she got a prestigious job offer.', options: ['than', 'when', 'then', 'that'], correctAnswerIndex: 0, explanation: 'No sooner had ... than ...' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u1-l2',
        courseId: 'english-b2',
        unitId: 'en-b2-u1',
        unitTitle: 'Unit 1: Advanced Grammar & Inversion',
        language: 'en',
        level: 'B2',
        lessonNumber: 2,
        title: 'Cleft Sentences for Emphasis (It was... that / What I need is...)',
        description: 'Gapdagi ma\'lum bir bo\'lakka urg\'u berish uchun tuzilmalar.',
        estimatedDurationMinutes: 15,
        icon: '🎯',
        steps: [
            {
                id: 'en-b2-u1-l2-s1',
                title: 'Cleft Sentences Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Cleft Sentences (It is / What...)',
                    explanation: 'Tinglovchi e\'tiborini aniq bir faktga qaratish: "It was John that solved the problem", "What we really need is more investment in education".',
                    keyPoints: [
                        'It + be + focus + that/who: It was yesterday that they signed the contract.',
                        'Wh- clause + be + focus: What surprised me was his calm reaction.'
                    ]
                }
            },
            {
                id: 'en-b2-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri cleft strukturani tanlang.',
                    exercises: [
                        { id: 'en-b2-u1-l2-e1', type: 'multiple-choice', prompt: '"_______ I admire most about her is her relentless work ethic."', options: ['What', 'That', 'Which', 'It'], correctAnswer: 0, explanation: 'What I admire most is...' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u1-l2-q1', question: 'It was the financial crisis _______ prompted major regulatory changes.', options: ['that', 'what', 'whom', 'where'], correctAnswerIndex: 0, explanation: 'It was ... that ...' },
                        { id: 'en-b2-u1-l2-q2', question: 'All _______ want is an opportunity to prove myself.', options: ['I', 'what I', 'which I', 'that what I'], correctAnswerIndex: 0, explanation: 'All I want is...' },
                        { id: 'en-b2-u1-l2-q3', question: 'What we need right now _______ clear guidelines from management.', options: ['is', 'are', 'were', 'being'], correctAnswerIndex: 0, explanation: 'What we need is...' },
                        { id: 'en-b2-u1-l2-q4', question: '"It was in Samarkand that we first met." Gap nimaga urg\'u bermoqda?', options: ['Uchrashgan joyga (Samarqandga)', 'Uchrashgan vaqtga', 'Kim bilan uchrashganiga', 'Nega uchrashganiga'], correctAnswerIndex: 0, explanation: 'Joyga urg\'u berilgan.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u1-l3',
        courseId: 'english-b2',
        unitId: 'en-b2-u1',
        unitTitle: 'Unit 1: Advanced Grammar & Inversion',
        language: 'en',
        level: 'B2',
        lessonNumber: 3,
        title: 'Advanced Passive & Causative (have something done)',
        description: 'Xizmatlardan foydalanish (have/get something done) va shaxsiy bo\'lmagan majhul nisbat (It is believed that...).',
        estimatedDurationMinutes: 16,
        icon: '🛠️',
        steps: [
            {
                id: 'en-b2-u1-l3-s1',
                title: 'Kauzativ va Shaxsiy Bo\'lmagan Majhul',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Causative & Impersonal Passive',
                    explanation: '1. Causative: Have/get + Object + V3 (I had my car repaired = Mexanik tuzatib berdi). 2. Impersonal Passive: It is widely believed that... / He is reported to have resigned.',
                    keyPoints: [
                        'I had my teeth cleaned yesterday.',
                        'The suspect is considered to be dangerous.'
                    ],
                    vocabulary: [
                        { term: 'Impersonal', reading: '/ɪmˈpɜː.sən.əl/', meaning: 'Shaxsiy bo\'lmagan / Umumiy', exampleSentence: 'It is an impersonal scientific claim.', exampleTranslation: 'Bu umumiy ilmiy da\'vodir.' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri kauzativ shaklni tanlang.',
                    exercises: [
                        { id: 'en-b2-u1-l3-e1', type: 'multiple-choice', prompt: '"I need to have my laptop _______ (repair) tomorrow."', options: ['repaired', 'repairing', 'repair', 'repairs'], correctAnswer: 0, explanation: 'Have + object + V3: repaired.' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u1-l3-q1', question: 'The company is reported _______ revenues by 20% this quarter.', options: ['to have increased', 'increasing', 'increased', 'to increase had'], correctAnswerIndex: 0, explanation: 'Reported to have increased.' },
                        { id: 'en-b2-u1-l3-q2', question: 'She had her wedding dress _______ by a famous Italian designer.', options: ['designed', 'design', 'designing', 'designs'], correctAnswerIndex: 0, explanation: 'Had + object + designed.' },
                        { id: 'en-b2-u1-l3-q3', question: 'It is estimated that renewable energy _______ 50% of global demand by 2035.', options: ['will supply', 'supplied', 'is supplied', 'had supplied'], correctAnswerIndex: 0, explanation: 'It is estimated that ... will supply.' },
                        { id: 'en-b2-u1-l3-q4', question: '"He got his hair cut." Bu nimani anglatadi?', options: ['Sartarosh uning sochini kesib qo\'ydi', 'U o\'zi sochini kesdi', 'U sochini bo\'yatdi', 'U sartaroshxonaga bormadi'], correctAnswerIndex: 0, explanation: 'Causative: xizmatdan foydalanish.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u1-l4',
        courseId: 'english-b2',
        unitId: 'en-b2-u1',
        unitTitle: 'Unit 1: Advanced Grammar & Inversion',
        language: 'en',
        level: 'B2',
        lessonNumber: 4,
        title: 'Participle Clauses (Having seen, Walking down...)',
        description: 'Sifatdoshli oborotlar orqali gaplarni qisqartirish va akademik uslubni boyitish.',
        estimatedDurationMinutes: 15,
        icon: '✂️',
        steps: [
            {
                id: 'en-b2-u1-l4-s1',
                title: 'Participle Clauses Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Present & Perfect Participle Clauses',
                    explanation: 'Bir xil egaga ega bo\'lgan ergash gaplarni qisqartirish: "Because he felt tired, he went to bed" -> "Feeling tired, he went to bed". "After she had finished her report, she left" -> "Having finished her report, she left".',
                    keyPoints: [
                        'Present participle (V-ing): Feeling tired, Seeing the danger.',
                        'Perfect participle (Having + V3): Having passed the exam, she felt relieved.',
                        'Passive participle (V3 / Having been V3): Built in 1890, the building is historic.'
                    ]
                }
            },
            {
                id: 'en-b2-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri participle shaklini tanlang.',
                    exercises: [
                        { id: 'en-b2-u1-l4-e1', type: 'multiple-choice', prompt: '"_______ (finish) all his tasks, he turned off his computer and left."', options: ['Having finished', 'Finishing', 'Finished by', 'To finish'], correctAnswer: 0, explanation: 'Avval sodir bo\'lgan harakat: Having finished.' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u1-l4-q1', question: '_______ in 1912, the Titanic sank on its maiden voyage.', options: ['Built', 'Building', 'Having built', 'To build'], correctAnswerIndex: 0, explanation: 'Passive participle: Built in 1912.' },
                        { id: 'en-b2-u1-l4-q2', question: '_______ that she had lost her ticket, she spoke to the conductor.', options: ['Realizing', 'Realized', 'Having realizing', 'Realize'], correctAnswerIndex: 0, explanation: 'Realizing that...' },
                        { id: 'en-b2-u1-l4-q3', question: '_______ rejected by three publishers, the manuscript was finally accepted.', options: ['Having been', 'Having', 'Being have', 'Been'], correctAnswerIndex: 0, explanation: 'Having been rejected (Perfect passive).' },
                        { id: 'en-b2-u1-l4-q4', question: 'Which sentence has a dangling modifier error?', options: ['Walking down the street, the trees were beautiful.', 'Walking down the street, I noticed the beautiful trees.', 'Feeling exhausted, he took a nap.', 'Having studied hard, she passed the exam.'], correctAnswerIndex: 0, explanation: 'Trees o\'zi yura olmaydi (dangling participle).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u1-l5',
        courseId: 'english-b2',
        unitId: 'en-b2-u1',
        unitTitle: 'Unit 1: Advanced Grammar & Inversion',
        language: 'en',
        level: 'B2',
        lessonNumber: 5,
        title: 'B2 Reading: Cognitive Science & Neuroplasticity',
        description: 'Miyaning moslashuvchanligi va kognitiv psixologiya bo\'yicha B2 darajadagi akademik matn.',
        estimatedDurationMinutes: 16,
        icon: '🧠',
        steps: [
            {
                id: 'en-b2-u1-l5-s1',
                title: 'Akademik Matn',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Neuroplasticity: The Adaptable Brain',
                    explanation: 'Miyaning o\'zgaruvchan tabiati haqidagi ilmiy matnni o\'qing.',
                    keyPoints: [
                        'Neuroplasticity refers to the brain\'s remarkable capacity to reorganize synaptic connections in response to learning or experience.',
                        'Historically, neuroscientists believed that neural circuitry became rigid after early childhood.',
                        'However, modern neuroimaging demonstrates that sustained intellectual challenge stimulates neurogenesis throughout adulthood.',
                        'Consequently, deliberate cognitive training can mitigate age-related memory deterioration.'
                    ],
                    vocabulary: [
                        { term: 'Capacity', reading: '/kəˈpæs.ə.ti/', meaning: 'Sig\'im / Qobiliyat', exampleSentence: 'The brain has vast adaptive capacity.', exampleTranslation: 'Miyaning moslashuvchanlik qobiliyati ulkandir.' },
                        { term: 'Deterioration', reading: '/dɪˌtɪə.ri.əˈreɪ.ʃən/', meaning: 'Yomonlashuv / Pasayish', exampleSentence: 'Cognitive exercise prevents deterioration.', exampleTranslation: 'Aqliy mashqlar pasayishning oldini oladi.' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l5-s2',
                title: 'Tahlil Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Matn asosida savolga javob bering.',
                    exercises: [
                        { id: 'en-b2-u1-l5-e1', type: 'multiple-choice', prompt: 'What did historical neuroscientists incorrectly believe about the human brain?', options: ['That neural circuitry became rigid after childhood', 'That the brain had no neurons', 'That memory never decayed', 'That adults learned faster than children'], correctAnswer: 0, explanation: 'Historically believed neural circuitry became rigid after childhood.' }
                    ]
                }
            },
            {
                id: 'en-b2-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u1-l5-q1', question: 'What does "neuroplasticity" mean according to the text?', options: ['The brain\'s capacity to reorganize synaptic connections', 'The loss of memory in elderly adults', 'A surgical procedure on the brain', 'The physical weight of the brain'], correctAnswerIndex: 0, explanation: 'Capacity to reorganize synaptic connections.' },
                        { id: 'en-b2-u1-l5-q2', question: 'What can mitigate age-related cognitive deterioration?', options: ['Deliberate cognitive training', 'Avoiding reading', 'Sleeping less', 'Refusing to learn languages'], correctAnswerIndex: 0, explanation: 'Deliberate cognitive training.' },
                        { id: 'en-b2-u1-l5-q3', question: '"Mitigate" so\'zining ma\'nodoshini toping:', options: ['Reduce / Lessen', 'Increase', 'Destroy', 'Produce'], correctAnswerIndex: 0, explanation: 'Mitigate — Yengillashtirmoq, kamaytirmoq.' },
                        { id: 'en-b2-u1-l5-q4', question: 'What modern tool proved that adult brains continue to adapt?', options: ['Neuroimaging', 'Ancient manuscripts', 'Microscopes from 1800', 'Blood tests'], correctAnswerIndex: 0, explanation: 'Modern neuroimaging.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Conditionals & Unreal Past
    {
        id: 'en-b2-u2-l1',
        courseId: 'english-b2',
        unitId: 'en-b2-u2',
        unitTitle: 'Unit 2: Conditionals & Unreal Past',
        language: 'en',
        level: 'B2',
        lessonNumber: 1,
        title: 'Third Conditional (Unreal Past & Regrets)',
        description: 'O\'tgan zamondagi amalga oshmagan voqealar (If + Had V3, Would have V3).',
        estimatedDurationMinutes: 15,
        icon: '⏳',
        steps: [
            {
                id: 'en-b2-u2-l1-s1',
                title: 'Third Conditional Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Third Conditional: If + Had + V3, Would Have + V3',
                    explanation: 'O\'tib ketgan ish-harakatlar haqida afsuslanish yoki boshqacha bo\'lishi mumkin bo\'lgan natijalar: If I had studied harder, I would have passed the exam (Lekin o\'qimadim va yiqildim).',
                    keyPoints: [
                        'If we had taken a taxi, we wouldn\'t have missed the flight.',
                        'Could have / Might have: If she had applied, she might have won the grant.'
                    ]
                }
            },
            {
                id: 'en-b2-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b2-u2-l1-e1', type: 'multiple-choice', prompt: '"If they had warned us, we _______ (not / invest) in that company."', options: ['wouldn\'t have invested', 'won\'t have invested', 'wouldn\'t invest', 'hadn\'t invested'], correctAnswer: 0, explanation: 'Third conditional: wouldn\'t have invested.' }
                    ]
                }
            },
            {
                id: 'en-b2-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u2-l1-q1', question: 'If I _______ about your arrival, I would have met you at the airport.', options: ['had known', 'knew', 'have known', 'would know'], correctAnswerIndex: 0, explanation: 'If I had known...' },
                        { id: 'en-b2-u2-l1-q2', question: 'She _______ the interview if she hadn\'t arrived late.', options: ['might have aced', 'might ace', 'will have aced', 'had aced'], correctAnswerIndex: 0, explanation: 'Might have aced.' },
                        { id: 'en-b2-u2-l1-q3', question: 'Had you told me earlier, I _______ arranged different accommodations.', options: ['would have', 'will have', 'had', 'would'], correctAnswerIndex: 0, explanation: 'Inverted third conditional: Had you told me, I would have...' },
                        { id: 'en-b2-u2-l1-q4', question: '"If I hadn\'t broken my leg, I would have won." Bu jumla nimani bildiradi?', options: ['Oyog\'im sindi va g\'olib bo\'la olmadim', 'Oyog\'im sinmadi va g\'olib bo\'ldim', 'Kelajakda oyog\'im sinishi mumkin', 'Hozir oyog\'im og\'rimoqda'], correctAnswerIndex: 0, explanation: 'O\'tgan zamondagi afsus.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u2-l2',
        courseId: 'english-b2',
        unitId: 'en-b2-u2',
        unitTitle: 'Unit 2: Conditionals & Unreal Past',
        language: 'en',
        level: 'B2',
        lessonNumber: 2,
        title: 'Mixed Conditionals (Past Cause -> Present Result)',
        description: 'Aralash shart ergash gaplar: o\'tmishdagi harakatning hozirgi holatga ta\'siri.',
        estimatedDurationMinutes: 16,
        icon: '🔀',
        steps: [
            {
                id: 'en-b2-u2-l2-s1',
                title: 'Mixed Conditionals Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Mixed Conditionals: Past & Present Interplay',
                    explanation: '1. O\'tmishdagi harakat -> Hozirgi natija: If + Had V3, Would + Verb (If I had won the lottery yesterday, I would be rich today). 2. Hozirgi doimiy holat -> O\'tgan zamondagi natija: If + Past Simple, Would have V3 (If I were braver, I would have spoken up yesterday).',
                    keyPoints: [
                        'If he had taken the medicine, he wouldn\'t feel sick now.',
                        'If I spoke fluent German, I would have accepted the job offer in Munich.'
                    ]
                }
            },
            {
                id: 'en-b2-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri aralash shart shaklini tanlang.',
                    exercises: [
                        { id: 'en-b2-u2-l2-e1', type: 'multiple-choice', prompt: '"If I had slept well last night, I _______ (not / be) so tired right now."', options: ['wouldn\'t be', 'wouldn\'t have been', 'am not', 'won\'t be'], correctAnswer: 0, explanation: 'Right now (hozirgi natija) bo\'lgani uchun: wouldn\'t be.' }
                    ]
                }
            },
            {
                id: 'en-b2-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u2-l2-q1', question: 'If she had saved money in her youth, she _______ struggling financially today.', options: ['wouldn\'t be', 'won\'t be', 'wouldn\'t have been', 'isn\'t'], correctAnswerIndex: 0, explanation: 'Today bilan: wouldn\'t be.' },
                        { id: 'en-b2-u2-l2-q2', question: 'If I _______ afraid of flying, I would have traveled to New York with you last month.', options: ['weren\'t', 'hadn\'t been', 'am not', 'won\'t be'], correctAnswerIndex: 0, explanation: 'Hozirgi doimiy qo\'rquv: If I weren\'t afraid...' },
                        { id: 'en-b2-u2-l2-q3', question: 'Had he checked the engine before departure, we _______ stranded on the road right now.', options: ['wouldn\'t be', 'wouldn\'t have been', 'hadn\'t been', 'won\'t be'], correctAnswerIndex: 0, explanation: 'Right now: wouldn\'t be.' },
                        { id: 'en-b2-u2-l2-q4', question: 'Which sentence demonstrates a Mixed Conditional correctly?', options: ['If I had eaten breakfast, I wouldn\'t be hungry now.', 'If I ate breakfast, I wouldn\'t have been hungry now.', 'If I had eaten, I won\'t be hungry.', 'If I eat breakfast, I would be full.'], correctAnswerIndex: 0, explanation: 'If I had eaten ..., I wouldn\'t be hungry now.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u2-l3',
        courseId: 'english-b2',
        unitId: 'en-b2-u2',
        unitTitle: 'Unit 2: Conditionals & Unreal Past',
        language: 'en',
        level: 'B2',
        lessonNumber: 3,
        title: 'Past Modals of Deduction (must have, might have, can\'t have been)',
        description: 'O\'tgan zamondagi voqealar bo\'yicha mantiqiy xulosalar chiqarish.',
        estimatedDurationMinutes: 15,
        icon: '🔍',
        steps: [
            {
                id: 'en-b2-u2-l3-s1',
                title: 'O\'tgan Zamon Modal Xulosalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Must have, Might have, Can\'t have + V3',
                    explanation: 'Must have done — 95% ishonch ("aniq qilgan bo\'lsa kerak"). Might have done — 50% ehtimol ("qilgan bo\'lishi mumkin"). Can\'t / Couldn\'t have done — 0% ehtimol ("qilgan bo\'lishi aslo mumkin emas").',
                    keyPoints: [
                        'The ground is soaked; it must have rained heavily last night.',
                        'He wasn\'t at the meeting; he might have forgotten the schedule.',
                        'She was in Paris yesterday; she can\'t have stolen the jewels in Tokyo!'
                    ]
                }
            },
            {
                id: 'en-b2-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri modal xulosani tanlang.',
                    exercises: [
                        { id: 'en-b2-u2-l3-e1', type: 'multiple-choice', prompt: '"He got 100% on the IELTS test. He _______ (study) exceptionally hard."', options: ['must have studied', 'can\'t have studied', 'might study', 'should study'], correctAnswer: 0, explanation: 'Must have studied.' }
                    ]
                }
            },
            {
                id: 'en-b2-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u2-l3-q1', question: 'The front door was locked from inside. The burglar _______ entered through the window.', options: ['must have', 'can\'t have', 'should have', 'would'], correctAnswerIndex: 0, explanation: 'Must have entered.' },
                        { id: 'en-b2-u2-l3-q2', question: 'He _______ seen me at the conference because I didn\'t attend.', options: ['can\'t have', 'must have', 'might have', 'should have'], correctAnswerIndex: 0, explanation: 'Imkonsiz: can\'t have seen.' },
                        { id: 'en-b2-u2-l3-q3', question: 'Where is my parcel? — The courier _______ delivered it to your neighbor.', options: ['might have', 'must to', 'can have', 'ought'], correctAnswerIndex: 0, explanation: 'Ehtimol: might have delivered.' },
                        { id: 'en-b2-u2-l3-q4', question: 'You _______ told him the secret! Now everybody knows.', options: ['shouldn\'t have', 'must have', 'might have', 'couldn\'t have'], correctAnswerIndex: 0, explanation: 'Qilmasligingiz kerak edi (afsus/tanqid): shouldn\'t have told.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u2-l4',
        courseId: 'english-b2',
        unitId: 'en-b2-u2',
        unitTitle: 'Unit 2: Conditionals & Unreal Past',
        language: 'en',
        level: 'B2',
        lessonNumber: 4,
        title: 'Subjunctive & Formal Expressions (It\'s high time / Had better / I\'d rather)',
        description: 'Rasmiy sub\'yunktiv va xohish-istak konstruktsiyalari.',
        estimatedDurationMinutes: 14,
        icon: '⚖️',
        steps: [
            {
                id: 'en-b2-u2-l4-s1',
                title: 'Subjunctive & Unreal Structures',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'It\'s High Time & Would Rather',
                    explanation: '1. It\'s high time + Subject + Past Simple: "It\'s high time we took action" (allaqachon vaqti keldi). 2. I\'d rather + Subject + Past Simple: "I\'d rather you didn\'t smoke here". 3. Had better + Bare Infinitive: "You had better leave now" (ogohlantirish).',
                    keyPoints: [
                        'It is essential that he be informed immediately (Formal Subjunctive).',
                        'I would rather stay home tonight.'
                    ]
                }
            },
            {
                id: 'en-b2-u2-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-b2-u2-l4-e1', type: 'multiple-choice', prompt: '"It is high time governments _______ (invest) more heavily in green energy."', options: ['invested', 'invest', 'investing', 'have invested'], correctAnswer: 0, explanation: 'It is high time + Past Simple: invested.' }
                    ]
                }
            },
            {
                id: 'en-b2-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u2-l4-q1', question: 'I would rather you _______ mention this topic during the interview.', options: ['didn\'t', 'don\'t', 'won\'t', 'haven\'t'], correctAnswerIndex: 0, explanation: 'I would rather you didn\'t...' },
                        { id: 'en-b2-u2-l4-q2', question: 'You had better _______ an umbrella; it looks like rain.', options: ['take', 'to take', 'taking', 'took'], correctAnswerIndex: 0, explanation: 'Had better + bare infinitive: take.' },
                        { id: 'en-b2-u2-l4-q3', question: 'The board recommended that the CEO _______ immediately.', options: ['resign', 'resigns', 'resigned', 'to resign'], correctAnswerIndex: 0, explanation: 'Formal subjunctive base form: resign.' },
                        { id: 'en-b2-u2-l4-q4', question: '"It\'s about time we started." Bu jumla nimani ifodalaydi?', options: ['Boshlash vaqti allaqachon yetib kelganini', 'Boshlashga hali erta ekanini', 'Kechikkanimizni tan olmaslikni', 'Boshlash taqiqlanganini'], correctAnswerIndex: 0, explanation: 'Allaqachon vaqti kelgan.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u2-l5',
        courseId: 'english-b2',
        unitId: 'en-b2-u2',
        unitTitle: 'Unit 2: Conditionals & Unreal Past',
        language: 'en',
        level: 'B2',
        lessonNumber: 5,
        title: 'B2 Academic Vocabulary: AWL Collocations & Precision',
        description: 'Akademik so\'zlar ro\'yxati (AWL) va ilmiy kollokatsiyalar.',
        estimatedDurationMinutes: 15,
        icon: '📚',
        steps: [
            {
                id: 'en-b2-u2-l5-s1',
                title: 'AWL Leksikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Academic Word List (AWL) Sublist 1-3',
                    explanation: 'Akademik yozma nutq va IELTS 6.5+ uchun yuqori darajadagi so\'zlar.',
                    vocabulary: [
                        { term: 'Substantial', reading: '/səbˈstæn.ʃəl/', meaning: 'Salmoqli / Sezilarli', exampleSentence: 'There has been substantial progress.', exampleTranslation: 'Sezilarli yutuqqa erishildi.' },
                        { term: 'Paradigm', reading: '/ˈpær.ə.daɪm/', meaning: 'Qolip / Paradigma', exampleSentence: 'This marked a paradigm shift in physics.', exampleTranslation: 'Bu fizikada yangi paradigmaga burilish yasadi.' },
                        { term: 'Empirical', reading: '/ɪmˈpɪr.ɪ.kəl/', meaning: 'Tajribaviy / Dalillarga asoslangan', exampleSentence: 'Empirical evidence supports the hypothesis.', exampleTranslation: 'Tajribaviy dalillar farazni tasdiqlaydi.' }
                    ],
                    keyPoints: ['Conduct research (research qilmoq)', 'Draw conclusions (xulosa chiqarmoq)', 'Substantiate claims (da\'volarni dalillamoq)']
                }
            },
            {
                id: 'en-b2-u2-l5-s2',
                title: 'Akademik Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri akademik kollokatsiyani tanlang.',
                    exercises: [
                        { id: 'en-b2-u2-l5-e1', type: 'multiple-choice', prompt: '"The researchers failed to provide _______ evidence for their theory."', options: ['empirical', 'imaginative', 'casual', 'fictional'], correctAnswer: 0, explanation: 'Empirical evidence (dalillarga asoslangan isbot).' }
                    ]
                }
            },
            {
                id: 'en-b2-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u2-l5-q1', question: 'Which verb collocates with "a survey"?', options: ['Conduct', 'Make', 'Perform', 'Fabricate'], correctAnswerIndex: 0, explanation: 'Conduct a survey.' },
                        { id: 'en-b2-u2-l5-q2', question: '"Substantial increase" nimani anglatadi?', options: ['Sezilarli darajada katta o\'sish', 'Kichik pasayish', 'Sekin to\'xtash', 'Noaniq tebranish'], correctAnswerIndex: 0, explanation: 'Sezilarli katta o\'sish.' },
                        { id: 'en-b2-u2-l5-q3', question: 'The findings _______ our initial assumptions.', options: ['contradict', 'contradiction', 'contradictory', 'contradicting'], correctAnswerIndex: 0, explanation: 'Contradict assumptions (farazlarga zid kelmoq).' },
                        { id: 'en-b2-u2-l5-q4', question: 'Choose the most academic synonym for "big problem":', options: ['Major challenge / Significant issue', 'Giant trouble', 'Huge mess', 'Bad thing'], correctAnswerIndex: 0, explanation: 'Major challenge / Significant issue.' }
                    ]
                }
            }
        ]
    },

    // Unit 3: Academic Vocabulary & Discourse Markers
    {
        id: 'en-b2-u3-l1',
        courseId: 'english-b2',
        unitId: 'en-b2-u3',
        unitTitle: 'Unit 3: Academic Discourse & Rhetoric',
        language: 'en',
        level: 'B2',
        lessonNumber: 1,
        title: 'Advanced Discourse Markers (Conversely, Furthermore, In light of)',
        description: 'Murakkab fikrlar o\'rtasida mantiqiy bog\'liqlik o\'rnatish.',
        estimatedDurationMinutes: 15,
        icon: '🔤',
        steps: [
            {
                id: 'en-b2-u3-l1-s1',
                title: 'Diskurs Vositalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Sophisticated Discourse Markers',
                    explanation: 'Conversely (Aksincha), In light of (Inobatga olgan holda), Notwithstanding (Shunga qaramasdan), In essence (Mohiyatan).',
                    vocabulary: [
                        { term: 'Conversely', reading: '/ˈkɒn.vɜːs.li/', meaning: 'Aksincha / Teskarisiga', exampleSentence: 'Some thrive under pressure; conversely, others falter.', exampleTranslation: 'Ayrimlar bosim ostida o\'sadi, aksincha, boshqalar qiyinchilikka uchraydi.' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri bog\'lovchini tanlang.',
                    exercises: [
                        { id: 'en-b2-u3-l1-e1', type: 'multiple-choice', prompt: '"_______ recent data, we must revise our annual targets."', options: ['In light of', 'In light with', 'By light of', 'To light of'], correctAnswer: 0, explanation: 'In light of (inobatga olib).' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u3-l1-q1', question: '_______ the economic slowdown, the company posted record profits.', options: ['Notwithstanding', 'Although', 'Despite of', 'Whereas'], correctAnswerIndex: 0, explanation: 'Notwithstanding the slowdown.' },
                        { id: 'en-b2-u3-l1-q2', question: '"In essence" iborasining ma\'nosi:', options: ['Mohiyatan / Aslida', 'Boshida', 'Kutilmaganda', 'Tasodifan'], correctAnswerIndex: 0, explanation: 'In essence — Mohiyatan.' },
                        { id: 'en-b2-u3-l1-q3', question: 'He presented a persuasive argument. _______, his methodology was flawed.', options: ['Nonetheless', 'Moreover', 'Furthermore', 'Consequently'], correctAnswerIndex: 0, explanation: 'Nonetheless (Shunga qaramay).' },
                        { id: 'en-b2-u3-l1-q4', question: 'Which connector expresses a direct contrast between two sentences?', options: ['Conversely,', 'In addition,', 'For instance,', 'Namely,'], correctAnswerIndex: 0, explanation: 'Conversely (Aksincha).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u3-l2',
        courseId: 'english-b2',
        unitId: 'en-b2-u3',
        unitTitle: 'Unit 3: Academic Discourse & Rhetoric',
        language: 'en',
        level: 'B2',
        lessonNumber: 2,
        title: 'Hedging & Modesty in Academic Stance (tends to, arguably)',
        description: 'Akademik matnlarda ehtiyotkorlik va dalillarni bo\'rttirmasdan ifodalash san\'ati.',
        estimatedDurationMinutes: 14,
        icon: '🛡️',
        steps: [
            {
                id: 'en-b2-u3-l2-s1',
                title: 'Hedging Usullari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Hedging in Academic Writing',
                    explanation: 'Akademik tilda 100% mutlaq da\'volar o\'rniga (e.g. "Computers destroy brains" EMAS), ehtiyotkor konstruktsiyalar qo\'llaniladi: "Excessive screen time tends to impair concentration", "This arguably represents a breakthrough".',
                    keyPoints: [
                        'Verbs: appear to, seem to, tend to, suggest that',
                        'Adverbs: arguably, presumably, potentially, largely'
                    ]
                }
            },
            {
                id: 'en-b2-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri hedging ifodasini tanlang.',
                    exercises: [
                        { id: 'en-b2-u3-l2-e1', type: 'multiple-choice', prompt: 'Which sentence demonstrates proper academic hedging?', options: ['The findings suggest that sleep deprivation may reduce cognitive capacity.', 'Sleep deprivation definitely destroys everyone\'s brain.', 'No one can ever think without 10 hours of sleep.', 'Sleep has 100% effect on everything.'], correctAnswer: 0, explanation: 'Suggest that ... may reduce ...' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u3-l2-q1', question: '"Arguably" nimani bildiradi?', options: ['Ehtimol / Fikrlarga ko\'ra (isbotlanishi mumkin bo\'lgan holda)', 'Mutlaqo noto\'g\'ri', 'Hech qachon', 'G\'azab bilan'], correctAnswerIndex: 0, explanation: 'Arguably — Da\'vo qilish mumkinki / Ehtimol.' },
                        { id: 'en-b2-u3-l2-q2', question: 'The preliminary survey _______ to indicate a shift in consumer preferences.', options: ['appears', 'is appearing', 'appearedly', 'appear'], correctAnswerIndex: 0, explanation: 'Appears to indicate.' },
                        { id: 'en-b2-u3-l2-q3', question: 'Why do researchers use hedging?', options: ['To avoid making unsupported absolute claims', 'To make texts longer', 'To confuse readers', 'Because they don\'t know English'], correctAnswerIndex: 0, explanation: 'To avoid unsupported absolute claims.' },
                        { id: 'en-b2-u3-l2-q4', question: 'Which modal verb is most frequently used for hedging?', options: ['May / Might / Could', 'Must / Shall', 'Will / Won\'t', 'Need / Dare'], correctAnswerIndex: 0, explanation: 'May / Might / Could.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u3-l3',
        courseId: 'english-b2',
        unitId: 'en-b2-u3',
        unitTitle: 'Unit 3: Academic Discourse & Rhetoric',
        language: 'en',
        level: 'B2',
        lessonNumber: 3,
        title: 'Global Economics, Trade & Consumerism',
        description: 'Iqtisodiy jarayonlar, bozor dinamikasi va xalqaro savdo terminologiyasi.',
        estimatedDurationMinutes: 15,
        icon: '📈',
        steps: [
            {
                id: 'en-b2-u3-l3-s1',
                title: 'Iqtisodiyot Leksikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Economic & Trade Vocabulary',
                    explanation: 'Supply and demand (talab va taklif), Inflation (inflyatsiya), Fiscal policy (soliq-byudjet siyosati), Commodity prices (xomashyo narxlari).',
                    vocabulary: [
                        { term: 'Inflation', reading: '/ɪnˈfleɪ.ʃən/', meaning: 'Inflyatsiya / Narxlar oshishi', exampleSentence: 'Central banks raise interest rates to curb inflation.', exampleTranslation: 'Markaziy banklar inflyatsiyani jilovlash uchun foiz stavkalarini oshiradi.' },
                        { term: 'Revenue', reading: '/ˈrev.ən.juː/', meaning: 'Daromad / Tushum', exampleSentence: 'Company revenue surged by 15%.', exampleTranslation: 'Kompaniya daromadi 15% ga o\'sdi.' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri iqtisodiy atamani tanlang.',
                    exercises: [
                        { id: 'en-b2-u3-l3-e1', type: 'multiple-choice', prompt: '"When supply is low and demand is high, prices usually _______."', options: ['soar / increase', 'plummet', 'stabilize to zero', 'diminish'], correctAnswer: 0, explanation: 'Narxlar ko\'tariladi: soar / increase.' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u3-l3-q1', question: '"Plummet" so\'zining ma\'nosi nima?', options: ['Keskin pasaymoq / Qulamoq', 'Sekin o\'smoq', 'Barqaror turmoq', 'Ikkilanmoq'], correctAnswerIndex: 0, explanation: 'Plummet — Keskin tushib ketmoq.' },
                        { id: 'en-b2-u3-l3-q2', question: 'Gross Domestic Product (GDP) measures a country\'s total _______ output.', options: ['economic', 'military', 'weather', 'educational'], correctAnswerIndex: 0, explanation: 'Economic output.' },
                        { id: 'en-b2-u3-l3-q3', question: 'Tariffs are taxes imposed on _______ goods.', options: ['imported', 'domestic', 'free', 'discarded'], correctAnswerIndex: 0, explanation: 'Imported goods (import tovarlari).' },
                        { id: 'en-b2-u3-l3-q4', question: 'What happens in a competitive market?', options: ['Consumers benefit from quality and price choices', 'Prices become infinite', 'Only one company exists', 'All production ceases'], correctAnswerIndex: 0, explanation: 'Consumers benefit.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u3-l4',
        courseId: 'english-b2',
        unitId: 'en-b2-u3',
        unitTitle: 'Unit 3: Academic Discourse & Rhetoric',
        language: 'en',
        level: 'B2',
        lessonNumber: 4,
        title: 'Environmental Sustainability & Climate Solutions',
        description: 'Ekologik yechimlar, uglerod neytralligi va yashil energetika tahlili.',
        estimatedDurationMinutes: 15,
        icon: '🌍',
        steps: [
            {
                id: 'en-b2-u3-l4-s1',
                title: 'Yashil Barqarorlik',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Climate Mitigation Strategies',
                    explanation: 'Decarbonization (uglerodsizlantirish), Circular economy (aylanma iqtisodiyot), Biodiversity conservation (bioxilma-xillikni saqlash).',
                    vocabulary: [
                        { term: 'Biodiversity', reading: '/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/', meaning: 'Bioxilma-xillik', exampleSentence: 'Rainforests boast immense biodiversity.', exampleTranslation: 'Yomg\'irli o\'rmonlar boy bioxilma-xillikka ega.' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri so\'zni tanlang.',
                    exercises: [
                        { id: 'en-b2-u3-l4-e1', type: 'multiple-choice', prompt: '"A circular economy aims to eliminate _______ through recycling and reuse."', options: ['waste', 'wealth', 'oxygen', 'food'], correctAnswer: 0, explanation: 'Eliminate waste.' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u3-l4-q1', question: '"Carbon neutral" means:', options: ['Balancing emitted carbon with carbon removal', 'Burning maximum coal', 'Stopping all industry', 'Building nuclear weapons'], correctAnswerIndex: 0, explanation: 'Balancing emitted carbon.' },
                        { id: 'en-b2-u3-l4-q2', question: 'Afforestation refers to:', options: ['Planting new forests on barren land', 'Cutting down forests', 'Hunting wild animals', 'Building dams'], correctAnswerIndex: 0, explanation: 'Planting new forests.' },
                        { id: 'en-b2-u3-l4-q3', question: 'Which sector is a primary contributor to greenhouse gas emissions?', options: ['Fossil-fuel energy generation', 'Library book lending', 'Organic farming without machinery', 'Handicraft weaving'], correctAnswerIndex: 0, explanation: 'Fossil-fuel energy.' },
                        { id: 'en-b2-u3-l4-q4', question: '"Sustainable development meets the needs of the present without compromising future generations." Bu nima?', options: ['Barqaror rivojlanishning klassik ta\'rifi', 'Eski ertak', 'Iqtisodiy qonun buzilishi', 'Tijorat reklamasi'], correctAnswerIndex: 0, explanation: 'Classic definition of sustainable development.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u3-l5',
        courseId: 'english-b2',
        unitId: 'en-b2-u3',
        unitTitle: 'Unit 3: Academic Discourse & Rhetoric',
        language: 'en',
        level: 'B2',
        lessonNumber: 5,
        title: 'B2 Paraphrasing Techniques for High Band Scores',
        description: 'Sinonimlar, so\'z turkumini o\'zgartirish va grammatik strukturani restrukturizatsiya qilish orqali mukammal parafraz.',
        estimatedDurationMinutes: 16,
        icon: '🔄',
        steps: [
            {
                id: 'en-b2-u3-l5-s1',
                title: 'Parafraz Qoidalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'The Art of Paraphrasing for IELTS',
                    explanation: '1. Synonym substitution (Sinonimlar almashtirish). 2. Changing word form (Otni fe\'lga yoki sifatga o\'zgartirish). 3. Changing active to passive. 4. Reversing sentence clauses.',
                    keyPoints: [
                        'Original: "Many young people prefer purchasing goods via online platforms because it is convenient."',
                        'Paraphrased: "Digital commerce is increasingly favored by the youth demographic owing to its accessibility and speed."'
                    ]
                }
            },
            {
                id: 'en-b2-u3-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Eng yaxshi parafraz variantini tanlang.',
                    exercises: [
                        { id: 'en-b2-u3-l5-e1', type: 'multiple-choice', prompt: 'Original: "Governments should allocate funds to public transportation." Which is the best paraphrase?', options: ['Authorities ought to channel financial resources into public transit infrastructure.', 'Governments must spend money on cars.', 'People need to walk to work.', 'Public transport is bad and governments know it.'], correctAnswer: 0, explanation: 'Authorities ought to channel financial resources...' }
                    ]
                }
            },
            {
                id: 'en-b2-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u3-l5-q1', question: 'Original: "Eating fast food leads to obesity." Best paraphrase:', options: ['The consumption of processed junk food contributes to excessive weight gain.', 'Fast food is delicious and healthy.', 'Eating food makes people run faster.', 'Obesity causes people to cook burgers.'], correctAnswerIndex: 0, explanation: 'Consumption of processed food contributes to weight gain.' },
                        { id: 'en-b2-u3-l5-q2', question: 'What is a common error in weak paraphrasing?', options: ['Swapping words without understanding collocation nuance', 'Using accurate academic synonyms', 'Changing grammatical voice correctly', 'Maintaining the original meaning'], correctAnswerIndex: 0, explanation: 'Swapping words blindly without collocations.' },
                        { id: 'en-b2-u3-l5-q3', question: 'Original: "Tourism brings enormous financial benefits to local communities." Paraphrase:', options: ['Regional populations derive substantial economic advantages from the travel industry.', 'Tourists destroy hotels.', 'Local money is spent on traveling abroad.', 'Financial institutions dislike tourists.'], correctAnswerIndex: 0, explanation: 'Regional populations derive substantial economic advantages.' },
                        { id: 'en-b2-u3-l5-q4', question: 'Which technique was used: "He solved the problem" -> "A solution was formulated by him"?', options: ['Active to passive voice conversion and nominalization', 'Pure copy-paste', 'Contraction', 'Deletion of facts'], correctAnswerIndex: 0, explanation: 'Passive voice & nominalization.' }
                    ]
                }
            }
        ]
    },

    // Unit 4: IELTS Reading & Listening Mastery
    {
        id: 'en-b2-u4-l1',
        courseId: 'english-b2',
        unitId: 'en-b2-u4',
        unitTitle: 'Unit 4: IELTS Reading & Listening Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 1,
        title: 'IELTS Reading: True / False / Not Given Mastery',
        description: 'Faktga asoslangan savollarni ajratish: TRUE (mos), FALSE (qarama-qarshi), NOT GIVEN (ma\'lumot yo\'q).',
        estimatedDurationMinutes: 16,
        icon: '🎯',
        steps: [
            {
                id: 'en-b2-u4-l1-s1',
                title: 'T/F/NG Strategiyasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'True, False, Not Given Framework',
                    explanation: 'TRUE: Matndagi ma\'no bilan 100% mos keladi. FALSE: Matndagi fikrga to\'g\'ridan-to\'g\'ri zid keladi (qarama-qarshi). NOT GIVEN: Matnda bu haqda ma\'lumot berilmagan yoki xulosa chiqarishga yetarli dalil yo\'q.',
                    keyPoints: [
                        'Taxmin qilmang! Faqat matnda yozilganidan kelib chiqing.',
                        'Ehtiyot bo\'ling: "always", "only", "all" kabi mutlaq so\'zlar ko\'pincha FALSE yoki NOT GIVEN bo\'ladi.'
                    ]
                }
            },
            {
                id: 'en-b2-u4-l1-s2',
                title: 'Amaliy Tahlil',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri hukmni belgilang.',
                    exercises: [
                        { id: 'en-b2-u4-l1-e1', type: 'multiple-choice', prompt: 'Text: "Alexander Fleming discovered penicillin in 1928 by accidental contamination of a petri dish." Question: "Fleming spent decades intentionally searching for penicillin." -> ?', options: ['FALSE', 'TRUE', 'NOT GIVEN'], correctAnswer: 0, explanation: 'Matnda tasodifan (accidental) topgani aytilgan, shuning uchun "spent decades intentionally searching" FALSE.' }
                    ]
                }
            },
            {
                id: 'en-b2-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u4-l1-q1', question: 'Text: "Solar panels convert approximately 20% of sunlight into electricity." Statement: "All solar panels achieve over 50% efficiency."', options: ['FALSE', 'TRUE', 'NOT GIVEN'], correctAnswerIndex: 0, explanation: 'FALSE (20% is far below 50%).' },
                        { id: 'en-b2-u4-l1-q2', question: 'Text: "The library was founded in 1845 and expanded in 1910." Statement: "The library architect was born in Scotland."', options: ['NOT GIVEN', 'TRUE', 'FALSE'], correctAnswerIndex: 0, explanation: 'NOT GIVEN (arxitektorning vatani haqida ma\'lumot yo\'q).' },
                        { id: 'en-b2-u4-l1-q3', question: 'Text: "Regular aerobic exercise reduces the risk of cardiovascular disease." Statement: "Cardiovascular health benefits from aerobic workouts."', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswerIndex: 0, explanation: 'TRUE (parafraz qilingan fakt).' },
                        { id: 'en-b2-u4-l1-q4', question: 'What is the golden rule of NOT GIVEN?', options: ['If you cannot find clear confirmation or direct contradiction in the passage, it is NOT GIVEN', 'If it sounds logical in real life, mark it TRUE', 'Always guess FALSE', 'NOT GIVEN is never the correct answer'], correctAnswerIndex: 0, explanation: 'No confirmation or direct contradiction.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u4-l2',
        courseId: 'english-b2',
        unitId: 'en-b2-u4',
        unitTitle: 'Unit 4: IELTS Reading & Listening Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 2,
        title: 'IELTS Reading: Headings Matching & Skimming',
        description: 'Paragraf sarlavhalarini moslashtirish, tezkor ko\'zdan kechirish (skimming) texnikasi.',
        estimatedDurationMinutes: 16,
        icon: '📑',
        steps: [
            {
                id: 'en-b2-u4-l2-s1',
                title: 'Matching Headings Strategiyasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Skimming and Topic Sentences',
                    explanation: 'Paragrafning birinchi va oxirgi 1-2 gapini o\'qib, asosiy g\'oyani (gist) aniqlang. Faqat bitta so\'z o\'xshashligiga aldanmang — butun paragrafning maqsadini tushuning.',
                    keyPoints: [
                        'Sarlavhalardagi kalit so\'zlarni belgilang.',
                        'Paragraf detallariga emas, umumiy xulosasiga e\'tibor bering.'
                    ]
                }
            },
            {
                id: 'en-b2-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Paragrafga mos sarlavhani tanlang.',
                    exercises: [
                        { id: 'en-b2-u4-l2-e1', type: 'multiple-choice', prompt: 'Paragraph: "Despite initial funding shortages and public skepticism, the urban metro project was completed ahead of schedule and generated unprecedented passenger volume." Best Heading:', options: ['An unexpected infrastructure success', 'The financial collapse of city transit', 'Why passengers avoid public trains', 'Technological failures in construction'], correctAnswer: 0, explanation: 'An unexpected infrastructure success.' }
                    ]
                }
            },
            {
                id: 'en-b2-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u4-l2-q1', question: 'What is the primary goal of skimming in IELTS Reading?', options: ['To quickly understand the general theme and structure without reading every word', 'To count every comma', 'To memorize all numbers', 'To find grammar mistakes'], correctAnswerIndex: 0, explanation: 'Understand general theme quickly.' },
                        { id: 'en-b2-u4-l2-q2', question: 'Where is the main idea of a paragraph most frequently located?', options: ['In the opening 1-2 sentences (topic sentence)', 'In the footnote', 'In the margin', 'In the title of the book'], correctAnswerIndex: 0, explanation: 'Opening sentences.' },
                        { id: 'en-b2-u4-l2-q3', question: 'If two headings seem similar, what should you do?', options: ['Analyze the specific focus and nuance of each heading against the text', 'Pick the longest one', 'Choose randomly', 'Skip the question'], correctAnswerIndex: 0, explanation: 'Analyze specific focus.' },
                        { id: 'en-b2-u4-l2-q4', question: 'What is scanning used for in IELTS Reading?', options: ['Locating specific facts, numbers, dates or names rapidly', 'Understanding abstract poetry', 'Translating every word', 'Enjoying a novel'], correctAnswerIndex: 0, explanation: 'Locating specific facts rapidly.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u4-l3',
        courseId: 'english-b2',
        unitId: 'en-b2-u4',
        unitTitle: 'Unit 4: IELTS Reading & Listening Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 3,
        title: 'IELTS Listening: Form Completion & Distractors',
        description: '1-qism eshitish testi: anketalarni to\'ldirish, raqamlar, harflar va chalg\'ituvchi (distractor) javoblar.',
        estimatedDurationMinutes: 15,
        icon: '🎧',
        steps: [
            {
                id: 'en-b2-u4-l3-s1',
                title: 'Distractorlardan Saqlanish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Form Completion & Auditory Distractors',
                    explanation: 'IELTS Listeningda so\'zlovchilar ko\'pincha dastlab bitta ma\'lumot aytib, so\'ng tuzatish kiritadilar: "My number is 5543... oh sorry, that is my old number, it is 5548". To\'g\'ri javob doim so\'nggi tuzatilgan variant bo\'ladi!',
                    keyPoints: [
                        'Imloga (spelling) va katta harflarga e\'tibor bering.',
                        'So\'zlar chegarasini tekshiring (NO MORE THAN TWO WORDS AND/OR A NUMBER).'
                    ]
                }
            },
            {
                id: 'en-b2-u4-l3-s2',
                title: 'Eshitish Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Tinglab to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-b2-u4-l3-e1', type: 'multiple-choice', prompt: 'Speaker: "We initially planned to meet on Tuesday, but the room is booked, so let\'s meet on Thursday at 4 PM." When is the meeting?', options: ['Thursday', 'Tuesday', 'Wednesday', 'Friday'], correctAnswer: 0, explanation: 'Tuzatilgan yakuniy sana: Thursday.' }
                    ]
                }
            },
            {
                id: 'en-b2-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u4-l3-q1', question: 'Speaker: "My post code is SW19... wait, no, my new address is SW14 8NP." What is the correct postcode?', options: ['SW14 8NP', 'SW19', 'SW19 8NP', 'SW14'], correctAnswerIndex: 0, explanation: 'SW14 8NP.' },
                        { id: 'en-b2-u4-l3-q2', question: 'If the instruction says "NO MORE THAN ONE WORD", which answer is acceptable?', options: ['Hospital', 'A hospital', 'The big hospital', 'City hospital center'], correctAnswerIndex: 0, explanation: 'Faqat bitta so\'z: Hospital.' },
                        { id: 'en-b2-u4-l3-q3', question: 'What should you do during the 30 seconds preparation time before each section?', options: ['Read the questions and predict what type of information (noun, date, number) is missing', 'Close your eyes and wait', 'Think about lunch', 'Erase previous answers'], correctAnswerIndex: 0, explanation: 'Predict information type.' },
                        { id: 'en-b2-u4-l3-q4', question: 'How are plural nouns scored if the audio specifies a plural (e.g. "books" instead of "book")?', options: ['Singular is marked wrong if plural was required', 'They give half marks', 'It doesn\'t matter', 'Spelling is ignored'], correctAnswerIndex: 0, explanation: 'Must match singular/plural accurately.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u4-l4',
        courseId: 'english-b2',
        unitId: 'en-b2-u4',
        unitTitle: 'Unit 4: IELTS Reading & Listening Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 4,
        title: 'IELTS Listening: Section 3 & 4 Academic Discussions',
        description: 'Talabalar va professorlar o\'rtasidagi murakkab akademik munozaralarni tahlil qilish.',
        estimatedDurationMinutes: 16,
        icon: '🎓',
        steps: [
            {
                id: 'en-b2-u4-l4-s1',
                title: 'Akademik Munozara Tahlili',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Section 3 & 4 Strategies',
                    explanation: 'Section 3 da 2-3 kishi tadqiqot yoki topshiriqni muhokama qiladi. Section 4 da 1 kishi akademik ma\'ruza o\'qiydi. So\'zlovchilarning fikri, roziligi yoki e\'tiroziga e\'tibor qaratish kerak.',
                    keyPoints: [
                        'Sinonimlar orqali javoblarni topish (Audio: "investigate thoroughly" -> Option: "conduct comprehensive research").',
                        'Belgilar (signpost words): "Turning now to...", "Furthermore...", "In conclusion...".'
                    ]
                }
            },
            {
                id: 'en-b2-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri xulosani tanlang.',
                    exercises: [
                        { id: 'en-b2-u4-l4-e1', type: 'multiple-choice', prompt: 'Professor: "While your survey data is adequate, your statistical methodology requires substantial refinement." What does the professor mean?', options: ['The statistical methods need improvement', 'The survey was completely useless', 'The student failed the whole course', 'No changes are required'], correctAnswer: 0, explanation: 'Statistical methodology requires refinement.' }
                    ]
                }
            },
            {
                id: 'en-b2-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u4-l4-q1', question: 'What are "signpost words" in academic lectures?', options: ['Transition words that signal a change of topic or structure', 'Road traffic words', 'Spelling mistakes', 'Difficult Greek words'], correctAnswerIndex: 0, explanation: 'Transition words signaling topic structure.' },
                        { id: 'en-b2-u4-l4-q2', question: 'In Section 4, how many times is the lecture played?', options: ['Once only', 'Twice', 'Three times', 'As many times as you want'], correctAnswerIndex: 0, explanation: 'IELTS da audio faqat 1 marta eshittiriladi.' },
                        { id: 'en-b2-u4-l4-q3', question: 'If you miss one question during the audio, what should you do immediately?', options: ['Move on immediately to the next question to avoid losing the track', 'Panic and stop listening', 'Ask the invigilator to rewind', 'Leave the exam room'], correctAnswerIndex: 0, explanation: 'Move on to the next question.' },
                        { id: 'en-b2-u4-l4-q4', question: 'Audio: "The primary impediment to expansion was inadequate logistics." What is the answer for: "Main obstacle was _______"?', options: ['inadequate logistics', 'rich investors', 'sunny weather', 'fast trains'], correctAnswerIndex: 0, explanation: 'Impediment = obstacle -> inadequate logistics.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u4-l5',
        courseId: 'english-b2',
        unitId: 'en-b2-u4',
        unitTitle: 'Unit 4: IELTS Reading & Listening Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 5,
        title: 'B2 / IELTS 6.5 Reading & Listening Integrated Drill',
        description: 'O\'qish va eshitish ko\'nikmalarini birlashtiruvchi B2 darajadagi amaliy test.',
        estimatedDurationMinutes: 18,
        icon: '🏆',
        steps: [
            {
                id: 'en-b2-u4-l5-s1',
                title: 'Kompleks Tahlil',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Integrated IELTS 6.5 Competencies',
                    explanation: 'Reading va Listening bo\'limlarida 40 tadan savol beriladi. Band 6.5 olish uchun kamida 26-29 ta to\'g\'ri javob talab etiladi.',
                    keyPoints: [
                        'Time management: 20 minutes per reading passage.',
                        'Paraphrasing recognition across all skills.'
                    ]
                }
            },
            {
                id: 'en-b2-u4-l5-s2',
                title: 'Sinov Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-b2-u4-l5-e1', type: 'multiple-choice', prompt: 'Which skill is vital across both IELTS Reading and Listening?', options: ['Recognizing paraphrases and synonyms', 'Translating into native language word-for-word', 'Writing quickly with a pencil', 'Memorizing the dictionary'], correctAnswer: 0, explanation: 'Recognizing paraphrases and synonyms.' }
                    ]
                }
            },
            {
                id: 'en-b2-u4-l5-s3',
                title: 'B2 Yakuniy Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u4-l5-q1', question: 'How many passages are there in the IELTS Academic Reading test?', options: ['3 passages', '2 passages', '4 passages', '5 passages'], correctAnswerIndex: 0, explanation: '3 passages.' },
                        { id: 'en-b2-u4-l5-q2', question: 'How many total questions are in the IELTS Reading test?', options: ['40 questions', '30 questions', '50 questions', '25 questions'], correctAnswerIndex: 0, explanation: '40 questions.' },
                        { id: 'en-b2-u4-l5-q3', question: 'Is extra time given to transfer answers in IELTS Reading on paper?', options: ['No, answers must be written directly onto the answer sheet within the 60 minutes', 'Yes, 10 minutes are provided', 'Yes, 5 minutes are provided', 'Yes, 15 minutes'], correctAnswerIndex: 0, explanation: 'Readingda qo\'shimcha transfer vaqti berilmaydi (Listeningda 10 daqiqa bor).' },
                        { id: 'en-b2-u4-l5-q4', question: 'What is the total duration of the IELTS Academic Reading test?', options: ['60 minutes', '45 minutes', '90 minutes', '30 minutes'], correctAnswerIndex: 0, explanation: '60 minutes.' }
                    ]
                }
            }
        ]
    },

    // Unit 5: IELTS Writing Task 1 & 2 Strategies
    {
        id: 'en-b2-u5-l1',
        courseId: 'english-b2',
        unitId: 'en-b2-u5',
        unitTitle: 'Unit 5: IELTS Writing Task 1 & 2 Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 1,
        title: 'IELTS Writing Task 1: Line Graphs & Bar Charts',
        description: 'Grafik va diagrammalarni tahlil qilish, umumiy ko\'rinish (overview) va dinamika tili.',
        estimatedDurationMinutes: 16,
        icon: '📊',
        steps: [
            {
                id: 'en-b2-u5-l1-s1',
                title: 'Task 1 Strukturasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Academic Writing Task 1 Structure',
                    explanation: '1. Introduction: Savolni parafraz qilish. 2. Overview: Eng asosiy 2-3 ta tendensiyani umumlashtirish (sonlarsiz). 3. Body 1 & Body 2: Tafsilotlar, solishtirishlar va aniq raqamlar.',
                    keyPoints: [
                        'Overview bo\'lmasa — maksimal Band 5 beriladi!',
                        'Tendensiya so\'zlari: increased steadily, fluctuated wildly, reached a peak of, plummeted dramatically.'
                    ],
                    vocabulary: [
                        { term: 'Fluctuate', reading: '/ˈflʌk.tʃu.eɪt/', meaning: 'Tebranmoq / O\'zgarib turmoq', exampleSentence: 'Oil prices fluctuated throughout the year.', exampleTranslation: 'Neft narxi yil davomida tebranib turdi.' },
                        { term: 'Overview', reading: '/ˈəʊ.və.vjuː/', meaning: 'Umumiy xulosa / Sharh', exampleSentence: 'The overview captures key trends.', exampleTranslation: 'Umumiy sharh asosiy tendensiyalarni o\'zida aks ettiradi.' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri Task 1 iborasini tanlang.',
                    exercises: [
                        { id: 'en-b2-u5-l1-e1', type: 'multiple-choice', prompt: '"Overall, renewable energy consumption _______ (experienced) a steady upward trend."', options: ['experienced', 'experiencing', 'was experienced', 'has experience'], correctAnswer: 0, explanation: 'Experienced a steady upward trend.' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u5-l1-q1', question: 'What is the minimum word count for IELTS Academic Writing Task 1?', options: ['150 words', '250 words', '100 words', '200 words'], correctAnswerIndex: 0, explanation: '150 words minimum.' },
                        { id: 'en-b2-u5-l1-q2', question: 'Why is an "Overview" paragraph essential in Task 1?', options: ['Without an overview, Task Achievement score cannot exceed Band 5', 'It adds colors to the chart', 'It counts as Task 2', 'It is optional and not graded'], correctAnswerIndex: 0, explanation: 'Cannot exceed Band 5 without an overview.' },
                        { id: 'en-b2-u5-l1-q3', question: 'Which phrase describes reaching the highest point?', options: ['Reached a peak of', 'Bottomed out at', 'Remained flat at', 'Decreased slightly to'], correctAnswerIndex: 0, explanation: 'Reached a peak of.' },
                        { id: 'en-b2-u5-l1-q4', question: 'Should you give your personal opinions in IELTS Task 1?', options: ['No, never — only describe what is shown in the chart', 'Yes, always say which country is best', 'Yes, write about your life', 'Only in the conclusion'], correctAnswerIndex: 0, explanation: 'Never give personal opinions in Task 1.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u5-l2',
        courseId: 'english-b2',
        unitId: 'en-b2-u5',
        unitTitle: 'Unit 5: IELTS Writing Task 1 & 2 Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 2,
        title: 'IELTS Writing Task 1: Process Diagrams & Maps',
        description: 'Jarayonlar (ishlab chiqarish bosqichlari) va xaritalardagi o\'zgarishlarni tasvirlash.',
        estimatedDurationMinutes: 15,
        icon: '🗺️',
        steps: [
            {
                id: 'en-b2-u5-l2-s1',
                title: 'Jarayon va Xarita Tili',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Process Diagrams & Map Descriptions',
                    explanation: 'Jarayonda majhul nisbat (Passive Voice) va ketma-ketlik bog\'lovchilari (Initially, Subsequently, Following this, In the final stage) qo\'llaniladi. Xaritalarda joylashuv va o\'zgarish fe\'llari: demolished, constructed, converted into, expanded.',
                    vocabulary: [
                        { term: 'Subsequently', reading: '/ˈsʌb.sɪ.kwənt.li/', meaning: 'Shundan so\'ng / Keyinchalik', exampleSentence: 'The raw materials are subsequently heated.', exampleTranslation: 'Xomashyo shundan so\'ng qizdiriladi.' },
                        { term: 'Demolish', reading: '/dɪˈmɒl.ɪʃ/', meaning: 'Buzib tashlamoq (binoni)', exampleSentence: 'The old warehouse was demolished.', exampleTranslation: 'Eski omborxona buzib tashlandi.' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri so\'zni tanlang.',
                    exercises: [
                        { id: 'en-b2-u5-l2-e1', type: 'multiple-choice', prompt: '"The former industrial zone was converted _______ a public recreational park."', options: ['into', 'to', 'for', 'onto'], correctAnswer: 0, explanation: 'Converted into (aylantirildi).' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u5-l2-q1', question: 'Which grammatical voice is primarily used in man-made process diagrams?', options: ['Passive voice', 'Active voice only', 'Future continuous', 'Imperative'], correctAnswerIndex: 0, explanation: 'Passive voice (e.g. is harvested, is transported).' },
                        { id: 'en-b2-u5-l2-q2', question: '"The trees were chopped down and replaced with apartments." What does "chopped down" mean?', options: ['Cut down / Felled', 'Planted', 'Watered', 'Protected'], correctAnswerIndex: 0, explanation: 'Cut down.' },
                        { id: 'en-b2-u5-l2-q3', question: 'Which linking phrase indicates the first step of a process?', options: ['Initially / In the initial stage', 'Lastly', 'Eventually', 'Subsequently'], correctAnswerIndex: 0, explanation: 'Initially.' },
                        { id: 'en-b2-u5-l2-q4', question: 'To the north of the river, a new bridge was _______.', options: ['constructed', 'destroying', 'destructed', 'demolish'], correctAnswerIndex: 0, explanation: 'Was constructed.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u5-l3',
        courseId: 'english-b2',
        unitId: 'en-b2-u5',
        unitTitle: 'Unit 5: IELTS Writing Task 1 & 2 Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 3,
        title: 'IELTS Writing Task 2: Opinion (Agree / Disagree) Essay',
        description: '4 paragrafli insho strukturasi, tezis bayonoti (thesis statement) va dalillar keltirish.',
        estimatedDurationMinutes: 16,
        icon: '✍️',
        steps: [
            {
                id: 'en-b2-u5-l3-s1',
                title: 'Insho Strukturasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '4-Paragraph Opinion Essay Blueprint',
                    explanation: '1. Introduction: Mavzuni parafraz qilish + Aniq tezis (I completely agree with this viewpoint). 2. Body 1: Birinchi asosiy dalil + misol. 3. Body 2: Ikkinchi asosiy dalil + misol. 4. Conclusion: Asosiy fikrni qayta xulosalash.',
                    keyPoints: [
                        'Minimum 250 so\'z yozilishi shart (tavsiya etiladi: 260-280 so\'z).',
                        'Tezis aniq bo\'lishi va butun insho davomida izchil saqlanishi kerak.'
                    ]
                }
            },
            {
                id: 'en-b2-u5-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri tezis jumlasini tanlang.',
                    exercises: [
                        { id: 'en-b2-u5-l3-e1', type: 'multiple-choice', prompt: 'Which thesis statement clearly states the author\'s position for an Agree/Disagree prompt?', options: ['This essay firmly agrees with the assertion that technological literacy is vital for modern employment.', 'Technology is everywhere in the world today.', 'Some people like technology but others do not like it.', 'I will talk about computers and phones.'], correctAnswer: 0, explanation: 'This essay firmly agrees...' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u5-l3-q1', question: 'What is the recommended time allocation for IELTS Writing Task 2?', options: ['40 minutes', '20 minutes', '60 minutes', '15 minutes'], correctAnswerIndex: 0, explanation: '40 minutes (Task 1: 20 minutes).' },
                        { id: 'en-b2-u5-l3-q2', question: 'What is the minimum word requirement for IELTS Writing Task 2?', options: ['250 words', '150 words', '350 words', '200 words'], correctAnswerIndex: 0, explanation: '250 words minimum.' },
                        { id: 'en-b2-u5-l3-q3', question: 'What is a "Topic Sentence" in a body paragraph?', options: ['The opening sentence stating the central idea of that paragraph', 'The title of the essay', 'A quote from a celebrity', 'A random fact'], correctAnswerIndex: 0, explanation: 'Opening sentence stating the central idea.' },
                        { id: 'en-b2-u5-l3-q4', question: 'Should you introduce completely new arguments in the conclusion paragraph?', options: ['No, never — the conclusion should only summarize and restate the established stance', 'Yes, always add 3 new ideas', 'Yes, change your opinion completely', 'Only if you have extra time'], correctAnswerIndex: 0, explanation: 'Never introduce new arguments in conclusion.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u5-l4',
        courseId: 'english-b2',
        unitId: 'en-b2-u5',
        unitTitle: 'Unit 5: IELTS Writing Task 1 & 2 Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 4,
        title: 'IELTS Writing Task 2: Discussion (Discuss Both Views & Give Opinion)',
        description: 'Ikki qarama-qarshi tomonni neytral tahlil qilish va o\'z pozitsiyasini kiritish.',
        estimatedDurationMinutes: 16,
        icon: '⚖️',
        steps: [
            {
                id: 'en-b2-u5-l4-s1',
                title: 'Both Views Insho Tizimi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Discuss Both Views Framework',
                    explanation: '1. Introduction: Ikkala tomon qarashlarini aytish + o\'z fikringiz. 2. Body 1: Birinchi tomonning dalillari (On the one hand, proponents argue that...). 3. Body 2: Ikkinchi tomonning dalillari (On the other hand, opponents contend that...). 4. Conclusion: Umumlashtirish va shaxsiy xulosa.',
                    keyPoints: [
                        'Ikkala tomonga ham yetarli dalillar berilishi shart (muvozanat).',
                        'O\'z fikringiz kirish, asosiy qism va xulosada ravshan aks etishi lozim.'
                    ]
                }
            },
            {
                id: 'en-b2-u5-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri o\'tish iborasini tanlang.',
                    exercises: [
                        { id: 'en-b2-u5-l4-e1', type: 'multiple-choice', prompt: '"On the one hand, advocates maintain that university education guarantees employment. _______, critics emphasize practical vocational skills."', options: ['On the other hand', 'Furthermore', 'Consequently', 'For example'], correctAnswer: 0, explanation: 'On the other hand (Ikkinchi tomondan).' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u5-l4-q1', question: 'If the prompt says "Discuss both views and give your opinion", what happens if you only discuss ONE view?', options: ['Task Achievement score will be penalized heavily (maximum Band 5 for TR)', 'You will get Band 9', 'The examiner will ignore it', 'Nothing happens'], correctAnswerIndex: 0, explanation: 'Heavy penalty for not addressing all parts.' },
                        { id: 'en-b2-u5-l4-q2', question: '"Proponent" so\'zining ma\'nosi nima?', options: ['Biror fikr yoki g\'oyani qo\'llab-quvvatlovchi (tarafdor)', 'Raqib / Dushman', 'Sudya', 'Befarq shaxs'], correctAnswerIndex: 0, explanation: 'Proponent — Tarafdor.' },
                        { id: 'en-b2-u5-l4-q3', question: 'Where should your opinion be stated in a "Discuss both views" essay?', options: ['In the introduction, body (or conclusion) consistently', 'Hidden as a secret', 'Only in the very last word', 'Nowhere at all'], correctAnswerIndex: 0, explanation: 'Stated clearly throughout the essay.' },
                        { id: 'en-b2-u5-l4-q4', question: 'What is the four assessment criteria for IELTS Writing?', options: ['Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy', 'Speed, Handwriting, Length, Ink color', 'Vocabulary only', 'Accent and pronunciation'], correctAnswerIndex: 0, explanation: 'The 4 standard criteria.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u5-l5',
        courseId: 'english-b2',
        unitId: 'en-b2-u5',
        unitTitle: 'Unit 5: IELTS Writing Task 1 & 2 Mastery',
        language: 'en',
        level: 'B2',
        lessonNumber: 5,
        title: 'IELTS Writing Task 2: Problem & Solution Essay',
        description: 'Muammo va yechim insholari: sabablarni tahlil qilish va amaliy yechimlar taklif etish.',
        estimatedDurationMinutes: 16,
        icon: '💡',
        steps: [
            {
                id: 'en-b2-u5-l5-s1',
                title: 'Problem & Solution Tizimi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Problem and Solution Structure',
                    explanation: '1. Introduction: Muammoni parafraz qilish. 2. Body 1: Muammoning asosiy sabablari (The primary driver behind this issue is...). 3. Body 2: Amaliy yechimlar (To tackle this dilemma, policymakers should...). 4. Conclusion: Xulosa.',
                    vocabulary: [
                        { term: 'Mitigate', reading: '/ˈmɪt.ɪ.ɡeɪt/', meaning: 'Yumshatmoq / Yechim orqali kamaytirmoq', exampleSentence: 'Urgent measures are required to mitigate urban pollution.', exampleTranslation: 'Shahar ifloslanishini yumshatish uchun tezkor choralar zarur.' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri yechim iborasini tanlang.',
                    exercises: [
                        { id: 'en-b2-u5-l5-e1', type: 'multiple-choice', prompt: '"To address this crisis effectively, municipal authorities must _______ stricter environmental regulations."', options: ['implement', 'ignoring', 'destroy', 'cancel'], correctAnswer: 0, explanation: 'Implement regulations (qoidalarni tatbiq etmoq).' }
                    ]
                }
            },
            {
                id: 'en-b2-u5-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u5-l5-q1', question: 'Which phrase introduces a practical solution?', options: ['A viable solution would be to...', 'This is totally impossible to fix', 'No one cares about this', 'It will forever be a disaster'], correctAnswerIndex: 0, explanation: 'A viable solution would be to...' },
                        { id: 'en-b2-u5-l5-q2', question: '"Tackle a problem" nimani bildiradi?', options: ['Muammoni hal qilishga kirishmoq', 'Muammodan qochmoq', 'Muammo yaratmoq', 'Muammoni unutmoq'], correctAnswerIndex: 0, explanation: 'Tackle — Hal qilishga kirishmoq.' },
                        { id: 'en-b2-u5-l5-q3', question: 'Should solutions directly match the causes discussed in Body 1?', options: ['Yes, solutions must directly correspond to the identified causes', 'No, solutions should be about something completely unrelated', 'It doesn\'t matter', 'Only write one sentence'], correctAnswerIndex: 0, explanation: 'Must directly correspond to identified causes.' },
                        { id: 'en-b2-u5-l5-q4', question: 'Choose the most cohesive sentence for introducing an effect:', options: ['As a direct consequence of this trend, public health has suffered.', 'Because why not, health is bad.', 'And so health down.', 'Bad health happen next.'], correctAnswerIndex: 0, explanation: 'As a direct consequence of this trend...' }
                    ]
                }
            }
        ]
    },

    // Unit 6: IELTS Speaking & High Band Synthesis
    {
        id: 'en-b2-u6-l1',
        courseId: 'english-b2',
        unitId: 'en-b2-u6',
        unitTitle: 'Unit 6: IELTS Speaking & Capstone Synthesis',
        language: 'en',
        level: 'B2',
        lessonNumber: 1,
        title: 'IELTS Speaking Part 1: Fluency & Lexical Range',
        description: 'Kundalik savollarga to\'liq, tabiiy va boy leksika bilan javob berish strategiyalari.',
        estimatedDurationMinutes: 14,
        icon: '🗣️',
        steps: [
            {
                id: 'en-b2-u6-l1-s1',
                title: 'Part 1 Strategiyasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Extending Answers in Speaking Part 1',
                    explanation: 'Hech qachon faqat "Yes/No" yoki 1 ta so\'z bilan javob bermang! Formula: Javob (Direct answer) + Sabab (Reason) + Misol yoki Qo\'shimcha detal (Example/Detail) -> 2-3 ta ravon gap.',
                    keyPoints: [
                        'Question: "Do you enjoy cooking?"',
                        'Band 5 answer: "Yes, I like cooking food."',
                        'Band 7 answer: "To be completely honest, I find cooking exceptionally therapeutic, especially after an intense working day. I love experimenting with traditional pasta recipes."'
                    ]
                }
            },
            {
                id: 'en-b2-u6-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Eng yaxshi kengaytirilgan javobni tanlang.',
                    exercises: [
                        { id: 'en-b2-u6-l1-e1', type: 'multiple-choice', prompt: 'Examiner: "How often do you read books?" Best response:', options: ['I make a conscious effort to read daily, usually dedicating at least thirty minutes before going to sleep to non-fiction or psychology.', 'Yes, I read.', 'Books are good.', 'Sometimes books.'], correctAnswer: 0, explanation: 'Full, extended, nuanced answer.' }
                    ]
                }
            },
            {
                id: 'en-b2-u6-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u6-l1-q1', question: 'How long does IELTS Speaking Part 1 last?', options: ['4 to 5 minutes', '10 to 12 minutes', '1 minute', '20 minutes'], correctAnswerIndex: 0, explanation: '4-5 minutes.' },
                        { id: 'en-b2-u6-l1-q2', question: 'What is the optimal length of an answer in Part 1?', options: ['2 to 4 sentences with clear elaboration', 'A 5-minute continuous speech', 'One word ("Yes")', 'Silence'], correctAnswerIndex: 0, explanation: '2-4 sentences.' },
                        { id: 'en-b2-u6-l1-q3', question: 'What should you do if you don\'t hear a question clearly?', options: ['Politely ask the examiner: "Could you please repeat the question?"', 'Make up your own question', 'Remain completely silent', 'Leave the room'], correctAnswerIndex: 0, explanation: 'Politely ask to repeat.' },
                        { id: 'en-b2-u6-l1-q4', question: 'Which assessment criteria evaluate your smoothness and speed of speech?', options: ['Fluency & Coherence', 'Grammatical accuracy', 'Vocabulary spelling', 'Writing task achievement'], correctAnswerIndex: 0, explanation: 'Fluency & Coherence.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u6-l2',
        courseId: 'english-b2',
        unitId: 'en-b2-u6',
        unitTitle: 'Unit 6: IELTS Speaking & Capstone Synthesis',
        language: 'en',
        level: 'B2',
        lessonNumber: 2,
        title: 'IELTS Speaking Part 2: 2-Minute Cue Card Strategy',
        description: '1 daqiqalik tayyorgarlik va 2 daqiqalik to\'xtovsiz monolog strategiyasi.',
        estimatedDurationMinutes: 16,
        icon: '⏱️',
        steps: [
            {
                id: 'en-b2-u6-l2-s1',
                title: 'Cue Card Texnikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Mastering the 2-Minute Long Turn',
                    explanation: '1 daqiqa ichida barcha savollarga (Who, Where, What, Why) kalit so\'zlar va ilg\'or sifatlarni yozib oling. Hikoyangizni xronologik tartibda boy detallar bilan 2 daqiqa gapirib bering.',
                    keyPoints: [
                        'Storytelling strukturasidan foydalaning (kirish, rivojlanish, kulminatsiya, xulosa).',
                        'Imtihon oluvchi to\'xtatmaguncha gapirishdan to\'xtamang!'
                    ]
                }
            },
            {
                id: 'en-b2-u6-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri monolog kirish jumlasini tanlang.',
                    exercises: [
                        { id: 'en-b2-u6-l2-e1', type: 'multiple-choice', prompt: 'Prompt: "Describe a memorable journey you took." Best opening sentence:', options: ['I would like to talk about an unforgettable expedition I embarked upon two summers ago across the mountains of Uzbekistan.', 'I will speak about journey.', 'A journey was good.', 'Hello examiner, I traveled.'], correctAnswer: 0, explanation: 'Eng mukammal va boy ochilish jumlasi.' }
                    ]
                }
            },
            {
                id: 'en-b2-u6-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u6-l2-q1', question: 'How much preparation time is given in IELTS Speaking Part 2?', options: ['1 minute', '5 minutes', '30 seconds', 'No preparation time'], correctAnswerIndex: 0, explanation: 'Exactly 1 minute.' },
                        { id: 'en-b2-u6-l2-q2', question: 'How long should you speak in Part 2?', options: ['Up to 2 minutes continuously', 'Exactly 30 seconds', '10 minutes', '5 minutes'], correctAnswerIndex: 0, explanation: '1 to 2 minutes.' },
                        { id: 'en-b2-u6-l2-q3', question: 'Should you write full sentences or bullet points on your notes paper?', options: ['Short bullet points and key vocabulary', 'Full essays', 'Draw pictures only', 'Nothing'], correctAnswerIndex: 0, explanation: 'Short bullet points & vocabulary.' },
                        { id: 'en-b2-u6-l2-q4', question: 'What happens when the examiner stops you after 2 minutes?', options: ['It is completely normal; it means you have spoken enough for the time limit', 'It means you failed', 'You lost points', 'You must argue with the examiner'], correctAnswerIndex: 0, explanation: 'Normal time management.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u6-l3',
        courseId: 'english-b2',
        unitId: 'en-b2-u6',
        unitTitle: 'Unit 6: IELTS Speaking & Capstone Synthesis',
        language: 'en',
        level: 'B2',
        lessonNumber: 3,
        title: 'IELTS Speaking Part 3: Abstract Discussion & Speculation',
        description: 'Jamiyat, kelajak va falsafiy mavzularda chuqur tahliliy fikr yuritish.',
        estimatedDurationMinutes: 16,
        icon: '💬',
        steps: [
            {
                id: 'en-b2-u6-l3-s1',
                title: 'Part 3 Abstrakt Tahlil',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Analyzing Abstract Societal Issues',
                    explanation: 'Part 3 da savollar shaxsiy hayotingiz haqida emas, balki jamiyat, texnologiya, ta\'lim va kelajak haqida bo\'ladi. Shaxsiy "I" o\'rniga umumiy "People in general", "Governments", "Societies" iboralaridan foydalaning.',
                    keyPoints: [
                        'Speculation: "It is highly probable that in the upcoming decades..."',
                        'Generalization: "Broadly speaking, urban populations tend to..."'
                    ]
                }
            },
            {
                id: 'en-b2-u6-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri Part 3 javob iborasini tanlang.',
                    exercises: [
                        { id: 'en-b2-u6-l3-e1', type: 'multiple-choice', prompt: 'Examiner: "How will artificial intelligence impact education in the future?" Best opening:', options: ['From my perspective, AI will fundamentally revolutionize pedagogical methodologies by enabling customized learning paths.', 'I like my computer.', 'AI is a robot.', 'I don\'t know about future.'], correctAnswer: 0, explanation: 'High-level abstract analysis.' }
                    ]
                }
            },
            {
                id: 'en-b2-u6-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u6-l3-q1', question: 'How does Part 3 differ from Part 1?', options: ['Part 3 focuses on broad, abstract, societal issues rather than personal habits', 'Part 3 is written on paper', 'Part 3 is multiple choice', 'Part 3 is silent'], correctAnswerIndex: 0, explanation: 'Abstract societal issues.' },
                        { id: 'en-b2-u6-l3-q2', question: 'How long does IELTS Speaking Part 3 last?', options: ['4 to 5 minutes', '15 minutes', '1 minute', '30 minutes'], correctAnswerIndex: 0, explanation: '4 to 5 minutes.' },
                        { id: 'en-b2-u6-l3-q3', question: '"Broadly speaking" iborasi nima maqsadda ishlatiladi?', options: ['Umumiy qilib aytganda / Keng ma\'noda', 'Faqat o\'zim haqimda', 'Inkor qilganda', 'Xayrlashganda'], correctAnswerIndex: 0, explanation: 'Generalization.' },
                        { id: 'en-b2-u6-l3-q4', question: 'What gives a candidate Band 7+ in Lexical Resource during Speaking?', options: ['Using precise collocations, idiomatic phrases naturally, and paraphrasing effectively', 'Using very old medieval words unnaturally', 'Speaking as fast as possible without pauses', 'Repeating the examiner\'s question 5 times'], correctAnswerIndex: 0, explanation: 'Precise collocations and natural idiom.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u6-l4',
        courseId: 'english-b2',
        unitId: 'en-b2-u6',
        unitTitle: 'Unit 6: IELTS Speaking & Capstone Synthesis',
        language: 'en',
        level: 'B2',
        lessonNumber: 4,
        title: 'B2 / IELTS 6.5 Mock Simulation & Error Analysis',
        description: 'Eng ko\'p uchraydigan xatolar tahlili va imtihon oldi to\'liq tayyorgarlik.',
        estimatedDurationMinutes: 18,
        icon: '📝',
        steps: [
            {
                id: 'en-b2-u6-l4-s1',
                title: 'Keng Tarqalgan Xatolar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Top 5 Costly Errors in IELTS B2',
                    explanation: '1. Over-generalization without evidence. 2. Memorized robotic templates. 3. Ignoring word limits in Task 1/2. 4. Mishearing distractors in Listening. 5. Assuming NOT GIVEN is FALSE.',
                    keyPoints: [
                        'Always allocate 3-5 minutes for proofreading essays.',
                        'Focus on clarity and coherent flow over unnecessarily complex jargon.'
                    ]
                }
            },
            {
                id: 'en-b2-u6-l4-s2',
                title: 'Tuzatish Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Xatoni aniqlang va tuzating.',
                    exercises: [
                        { id: 'en-b2-u6-l4-e1', type: 'multiple-choice', prompt: 'Which sentence avoids grammatical and lexical errors?', options: ['Despite facing fierce competition, the company achieved remarkable growth.', 'Despite of fierce competition, the company made growth.', 'Although the fierce competition, the company achieved.', 'In spite the competition was fierce, company grew.'], correctAnswer: 0, explanation: 'Despite facing fierce competition...' }
                    ]
                }
            },
            {
                id: 'en-b2-u6-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u6-l4-q1', question: 'Why are memorized essay templates dangerous in IELTS?', options: ['Examiners easily recognize them and reduce Task Achievement and Lexical scores', 'Examiners love memorized essays', 'They guarantee Band 9', 'They are required by the exam'], correctAnswerIndex: 0, explanation: 'Examiners penalize memorized templates.' },
                        { id: 'en-b2-u6-l4-q2', question: 'What is the penalty for writing under 250 words in Task 2?', options: ['Deduction in Task Achievement score', 'Automatic zero', 'No penalty', 'You get extra points'], correctAnswerIndex: 0, explanation: 'Deduction in Task Achievement.' },
                        { id: 'en-b2-u6-l4-q3', question: 'What should you do if you finish your writing test with 4 minutes remaining?', options: ['Carefully proofread for grammar, spelling, singular/plural and punctuation errors', 'Put your pen down and look around', 'Erase everything', 'Start writing another essay'], correctAnswerIndex: 0, explanation: 'Proofread carefully.' },
                        { id: 'en-b2-u6-l4-q4', question: 'Which IELTS score corresponds to Upper-Intermediate B2 level?', options: ['Band 5.5 to 6.5', 'Band 2.0', 'Band 9.0', 'Band 4.0'], correctAnswerIndex: 0, explanation: 'Band 5.5 to 6.5.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-b2-u6-l5',
        courseId: 'english-b2',
        unitId: 'en-b2-u6',
        unitTitle: 'Unit 6: IELTS Speaking & Capstone Synthesis',
        language: 'en',
        level: 'B2',
        lessonNumber: 5,
        title: 'B2 Capstone Mastery & C1 Advancement Assessment',
        description: 'B2 darajasining to\'liq yakuni va C1 Advanced darajasiga o\'tish sinovi.',
        estimatedDurationMinutes: 20,
        icon: '🏆',
        steps: [
            {
                id: 'en-b2-u6-l5-s1',
                title: 'B2 / IELTS 6.5 Yakuniy Sertifikatsiya',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'B2 Upper-Intermediate Full Competency',
                    explanation: 'Siz Inversion, Cleft Sentences, Causatives, Participle Clauses, Mixed Conditionals, Past Modals of Deduction, IELTS Academic Writing va Speaking tahlillarini to\'liq o\'zlashtirdingiz!',
                    keyPoints: [
                        'High grammatical complexity with strong accuracy',
                        'Extensive academic lexicon and discourse management',
                        'Ready for Advanced C1 (IELTS 7.0 - 8.0)'
                    ]
                }
            },
            {
                id: 'en-b2-u6-l5-s2',
                title: 'Kompleks Mashq',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'C1 darajaga o\'tish uchun kompleks savolga javob bering.',
                    exercises: [
                        { id: 'en-b2-u6-l5-e1', type: 'multiple-choice', prompt: '"Rarely _______ a technological innovation transformed human society so rapidly as the internet."', options: ['has', 'have', 'did', 'was'], correctAnswer: 0, explanation: 'Rarely has an innovation...' }
                    ]
                }
            },
            {
                id: 'en-b2-u6-l5-s3',
                title: 'B2 Yakuniy Sinov Imtihoni',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'B2 darajasini muvaffaqiyatli yakunlash uchun barcha savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-b2-u6-l5-q1', question: 'Not only _______ the grant, but she was also invited to speak at the summit.', options: ['did she secure', 'she secured', 'she had secure', 'was she secure'], correctAnswerIndex: 0, explanation: 'Inversion: did she secure.' },
                        { id: 'en-b2-u6-l5-q2', question: 'If we had implemented those safeguards earlier, we _______ facing these legal hurdles today.', options: ['wouldn\'t be', 'wouldn\'t have been', 'won\'t be', 'aren\'t'], correctAnswerIndex: 0, explanation: 'Mixed conditional: wouldn\'t be.' },
                        { id: 'en-b2-u6-l5-q3', question: 'The ancient manuscript _______ by historians to date back to the 9th century.', options: ['is considered', 'considers', 'considering', 'has considered'], correctAnswerIndex: 0, explanation: 'Passive: is considered.' },
                        { id: 'en-b2-u6-l5-q4', question: 'Having _______ the preliminary experiments, the team published their findings.', options: ['concluded', 'concluding', 'conclude', 'been conclude'], correctAnswerIndex: 0, explanation: 'Having concluded.' }
                    ]
                }
            }
        ]
    }
];
