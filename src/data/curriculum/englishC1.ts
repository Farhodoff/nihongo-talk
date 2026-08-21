import { Lesson } from '../../types/lesson';

export const ENGLISH_C1_LESSONS: Lesson[] = [
    // Unit 1: Advanced Inversion, Fronting & Ellipsis
    {
        id: 'en-c1-u1-l1',
        courseId: 'english-c1',
        unitId: 'en-c1-u1',
        unitTitle: 'Unit 1: Advanced Syntax & Rhetoric',
        language: 'en',
        level: 'C1',
        lessonNumber: 1,
        title: 'Formal Inverted Conditionals (Had I known, Were you to, Should you need)',
        description: 'If so\'zisiz tuziladigan oliy darajadagi rasmiy shart ergash gaplar.',
        estimatedDurationMinutes: 16,
        icon: '🏛️',
        steps: [
            {
                id: 'en-c1-u1-l1-s1',
                title: 'Inverted Conditionals Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Inversion in Conditional Clauses',
                    explanation: 'Rasmiy va adabiy ingliz tilida "if" tushirib qoldirilib, Had / Were / Should gap boshiga o\'tkaziladi.',
                    keyPoints: [
                        'Type 1: "Should you require further assistance, do not hesitate to contact us." (If you should require...)',
                        'Type 2: "Were the government to reduce taxes, consumer spending would escalate." (If the government were to...)',
                        'Type 3: "Had we anticipated the logistical bottlenecks, we would have altered the schedule." (If we had anticipated...)'
                    ],
                    vocabulary: [
                        { term: 'Bottleneck', reading: '/ˈbɒt.əl.nek/', meaning: 'To\'siq / Tiqilinch / Cheklovchi omil', exampleSentence: 'Supply chain bottlenecks delayed production.', exampleTranslation: 'Ta\'minot zanjiridagi to\'siqlar ishlab chiqarishni kechiktirdi.' },
                        { term: 'Escalate', reading: '/ˈes.kə.leɪt/', meaning: 'Keskin oshmoq / Kuchaymoq', exampleSentence: 'Tensions began to escalate.', exampleTranslation: 'Keskinlik kuchaya boshladi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l1-s2',
                title: 'Inversiya Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri inversiyalangan shaklni tanlang.',
                    exercises: [
                        { id: 'en-c1-u1-l1-e1', type: 'multiple-choice', prompt: '"_______ you have any inquiries, our support team is available 24/7."', options: ['Should', 'Had', 'Were', 'If should'], correctAnswer: 0, explanation: 'Should you have inquiries...' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u1-l1-q1', question: '_______ I realized the full consequences of the deal, I would never have signed it.', options: ['Had', 'Were', 'Should', 'Did'], correctAnswerIndex: 0, explanation: 'Had I realized...' },
                        { id: 'en-c1-u1-l1-q2', question: '_______ they to reject our proposal, what would our alternative strategy be?', options: ['Were', 'Had', 'Should', 'If were'], correctAnswerIndex: 0, explanation: 'Were they to reject...' },
                        { id: 'en-c1-u1-l1-q3', question: 'Had it not been for his prompt intervention, the crisis _______ escalated into disaster.', options: ['would have', 'will have', 'had', 'would be'], correctAnswerIndex: 0, explanation: 'Would have escalated.' },
                        { id: 'en-c1-u1-l1-q4', question: '"Should circumstances change, we shall notify you." Ushbu jumla qaysi uslubga tegishli?', options: ['Highly formal / Professional', 'Slang / Informal', 'Childish', 'Broken English'], correctAnswerIndex: 0, explanation: 'Highly formal/professional.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u1-l2',
        courseId: 'english-c1',
        unitId: 'en-c1-u1',
        unitTitle: 'Unit 1: Advanced Syntax & Rhetoric',
        language: 'en',
        level: 'C1',
        lessonNumber: 2,
        title: 'Fronting, Ellipsis & Substitution in Academic Discourse',
        description: 'Gap bo\'laklarini oldinga surish (fronting) va ortiqcha so\'zlarni qisqartirish (ellipsis).',
        estimatedDurationMinutes: 15,
        icon: '✒️',
        steps: [
            {
                id: 'en-c1-u1-l2-s1',
                title: 'Fronting va Ellipsis',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Stylistic Fronting and Ellipsis',
                    explanation: 'Fronting: Urg\'u berilayotgan bo\'lakni gap boshiga olib chiqish ("Much more significant is the economic impact", "Directly opposite the plaza stood the grand library"). Ellipsis: Ma\'nosi tushunarli bo\'lgan so\'zlarni takrorlamaslik ("She wanted to attend, but couldn\'t [attend]").',
                    keyPoints: [
                        'Fronting adjectives: "Crucial to this argument is the assumption that..."',
                        'Substitution: "Do you think interest rates will rise?" — "I expect so / I fear not."'
                    ]
                }
            },
            {
                id: 'en-c1-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri fronting tuzilishini tanlang.',
                    exercises: [
                        { id: 'en-c1-u1-l2-e1', type: 'multiple-choice', prompt: '"_______ of paramount importance is the integrity of our empirical data."', options: ['Equally', 'Equal', 'More equal', 'Equality'], correctAnswer: 0, explanation: 'Equally of paramount importance is...' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u1-l2-q1', question: 'Central to this hypothesis _______ the notion of quantum entanglement.', options: ['is', 'are', 'were', 'being'], correctAnswerIndex: 0, explanation: 'Central to this hypothesis is...' },
                        { id: 'en-c1-u1-l2-q2', question: '"Will the treaty be ratified?" — "We certainly hope _______."', options: ['so', 'it', 'that', 'such'], correctAnswerIndex: 0, explanation: 'We hope so.' },
                        { id: 'en-c1-u1-l2-q3', question: 'What is the purpose of fronting in academic writing?', options: ['To create emphasis and establish smooth cohesion between paragraphs', 'To make sentences intentionally confusing', 'To replace punctuation', 'To reduce word count to zero'], correctAnswerIndex: 0, explanation: 'Emphasis and cohesion.' },
                        { id: 'en-c1-u1-l2-q4', question: 'Choose the sentence with correct ellipsis:', options: ['Some scholars supported the reform, while others did not.', 'Some scholars supported the reform, while others did not supported the reform.', 'Some scholars supported, other not.', 'Some scholars did, other no.'], correctAnswerIndex: 0, explanation: '... while others did not.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u1-l3',
        courseId: 'english-c1',
        unitId: 'en-c1-u1',
        unitTitle: 'Unit 1: Advanced Syntax & Rhetoric',
        language: 'en',
        level: 'C1',
        lessonNumber: 3,
        title: 'Nominalisation in High-Level Academic Writing',
        description: 'Fe\'l va sifatlarni ot birikmalariga aylantirish orqali akademik zichlik (density) yaratish.',
        estimatedDurationMinutes: 16,
        icon: '🏛️',
        steps: [
            {
                id: 'en-c1-u1-l3-s1',
                title: 'Nominalizatsiya San\'ati',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Academic Density via Nominalisation',
                    explanation: 'Og\'zaki tildagi fe\'lli jumlalarni ilmiy va ixcham otli konstruktsiyalarga aylantirish.',
                    keyPoints: [
                        'Informal: "Because the climate is changing rapidly, glaciers are melting faster."',
                        'Nominalised (C1/C2): "Rapid climatic shifts have accelerated glacial depletion."',
                        'Informal: "They investigated the matter thoroughly."',
                        'Nominalised: "A rigorous investigation into the matter was undertaken."'
                    ],
                    vocabulary: [
                        { term: 'Depletion', reading: '/dɪˈpliː.ʃən/', meaning: 'Tugash / Kamayib ketish', exampleSentence: 'Resource depletion threatens ecological stability.', exampleTranslation: 'Resurslarning tugashi ekologik barqarorlikka tahdid soladi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Eng yaxshi nominalizatsiyalangan akademik variantni tanlang.',
                    exercises: [
                        { id: 'en-c1-u1-l3-e1', type: 'multiple-choice', prompt: 'Convert: "When people migrate from rural areas to cities, cities grow rapidly."', options: ['Rural-to-urban migration drives unprecedented urban expansion.', 'People moving makes cities big.', 'When humans go to city, buildings increase.', 'Moving causes large cities.'], correctAnswer: 0, explanation: 'Rural-to-urban migration drives urban expansion.' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u1-l3-q1', question: 'Original: "Because technology evolved so fast, market dynamics changed." Best C1 nominalization:', options: ['Rapid technological evolution transformed market dynamics.', 'Tech was fast so market moved.', 'Because of tech evolution, things changed.', 'Technology evolved fast and changed stuff.'], correctAnswerIndex: 0, explanation: 'Rapid technological evolution transformed market dynamics.' },
                        { id: 'en-c1-u1-l3-q2', question: 'Which noun is the nominalized form of "proliferate"?', options: ['Proliferation', 'Proliferatingly', 'Proliferative', 'Proliferated'], correctAnswerIndex: 0, explanation: 'Proliferation (keskin ko\'payish).' },
                        { id: 'en-c1-u1-l3-q3', question: 'What is a major benefit of nominalisation in IELTS Band 8+ writing?', options: ['It increases lexical density and academic formality', 'It makes the essay rhyme', 'It makes sentences sound like poems', 'It uses fewer letters'], correctAnswerIndex: 0, explanation: 'Increases lexical density and formality.' },
                        { id: 'en-c1-u1-l3-q4', question: 'Convert: "They failed to comply with regulations." -> "Non-compliance with regulations resulted in..." This is an example of:', options: ['Nominalisation of the verb fail/comply', 'A grammatical error', 'Slang creation', 'Passive inversion'], correctAnswerIndex: 0, explanation: 'Nominalisation.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u1-l4',
        courseId: 'english-c1',
        unitId: 'en-c1-u1',
        unitTitle: 'Unit 1: Advanced Syntax & Rhetoric',
        language: 'en',
        level: 'C1',
        lessonNumber: 4,
        title: 'Complex Conditionals & Concessions (In the event of, Provided that, Albeit)',
        description: 'Murakkab shart va yon berish bog\'lovchilari (Albeit, In the event of, On condition that).',
        estimatedDurationMinutes: 15,
        icon: '🔀',
        steps: [
            {
                id: 'en-c1-u1-l4-s1',
                title: 'Murakkab Bog\'lovchilar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Advanced Conditional & Concessive Markers',
                    explanation: 'Albeit (/ɔːlˈbiː.ɪt/) — garchi ... bo\'lsa-da (sifat yoki ibora oldidan: "an effective, albeit expensive, solution"). Provided / Providing that — sharti bilan. In the event of + noun — sodir bo\'lgan taqdirda.',
                    vocabulary: [
                        { term: 'Albeit', reading: '/ɔːlˈbiː.ɪt/', meaning: 'Garchi ... bo\'lsa-da', exampleSentence: 'He made significant, albeit slow, progress.', exampleTranslation: 'U sekin bo\'lsa-da, sezilarli yutuqqa erishdi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri bog\'lovchini tanlang.',
                    exercises: [
                        { id: 'en-c1-u1-l4-e1', type: 'multiple-choice', prompt: '"The project was approved, _______ on condition that budget limits are strictly respected."', options: ['albeit', 'in the event', 'provided', 'unless'], correctAnswer: 0, explanation: 'Albeit on condition that...' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u1-l4-q1', question: '_______ an emergency, press the alarm button immediately.', options: ['In the event of', 'Provided that', 'Albeit', 'Notwithstanding that'], correctAnswerIndex: 0, explanation: 'In the event of an emergency.' },
                        { id: 'en-c1-u1-l4-q2', question: 'You may access the restricted laboratory, _______ you wear protective gear.', options: ['provided that', 'albeit', 'in the event of', 'unless not'], correctAnswerIndex: 0, explanation: 'Provided that (sharti bilan).' },
                        { id: 'en-c1-u1-l4-q3', question: '"The expedition was successful, albeit grueling." What does "albeit grueling" mean?', options: ['Even though it was extremely exhausting and difficult', 'Because it was fun', 'It was completely easy', 'It failed miserably'], correctAnswerIndex: 0, explanation: 'Even though it was grueling.' },
                        { id: 'en-c1-u1-l4-q4', question: 'As long as / So long as are synonyms for:', options: ['Provided that / On condition that', 'Although', 'Despite', 'Because'], correctAnswerIndex: 0, explanation: 'Provided that.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u1-l5',
        courseId: 'english-c1',
        unitId: 'en-c1-u1',
        unitTitle: 'Unit 1: Advanced Syntax & Rhetoric',
        language: 'en',
        level: 'C1',
        lessonNumber: 5,
        title: 'C1 Reading: Critical Discourse Analysis & Epistemology',
        description: 'Falsafa, bilim nazariyasi va matnlardagi yashirin noaniqliklarni fosh etuvchi tahliliy o\'qish.',
        estimatedDurationMinutes: 18,
        icon: '📖',
        steps: [
            {
                id: 'en-c1-u1-l5-s1',
                title: 'Falsafiy Matn',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Epistemology and Algorithmic Epistemic Bubbles',
                    explanation: 'Matnni chuqur tahlil qiling.',
                    keyPoints: [
                        'Epistemology investigates the foundational criteria demarcating justified belief from mere subjective opinion.',
                        'The proliferation of predictive recommendation algorithms has precipitated the emergence of epistemic filter bubbles.',
                        'Within these digital enclaves, dissenting viewpoints are systematically filtered out, reinforcing cognitive confirmation bias.',
                        'Consequently, intellectual resilience necessitates deliberate exposure to dialectical counter-arguments.'
                    ],
                    vocabulary: [
                        { term: 'Demarcate', reading: '/ˈdiː.mɑː.keɪt/', meaning: 'Chegara ajratmoq / Farqlamoq', exampleSentence: 'It is vital to demarcate science from pseudoscience.', exampleTranslation: 'Ilmni soxta ilmdan farqlash zarur.' },
                        { term: 'Resilience', reading: '/rɪˈzɪl.jəns/', meaning: 'Chidamlilik / Tiklanuvchanlik', exampleSentence: 'Intellectual resilience enables critical inquiry.', exampleTranslation: 'Aqliy chidamlilik tanqidiy izlanishga imkon beradi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l5-s2',
                title: 'Matn Tahlili',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-c1-u1-l5-e1', type: 'multiple-choice', prompt: 'According to the passage, what precipitates the emergence of epistemic bubbles?', options: ['The proliferation of predictive recommendation algorithms', 'Reading printed philosophical books', 'Exercising in nature', 'A total lack of internet access'], correctAnswer: 0, explanation: 'Proliferation of predictive algorithms.' }
                    ]
                }
            },
            {
                id: 'en-c1-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u1-l5-q1', question: 'What is epistemology primarily concerned with?', options: ['The criteria demarcating justified belief from mere opinion', 'The study of ancient rocks', 'Calculating software speeds', 'Analyzing animal migration'], correctAnswerIndex: 0, explanation: 'Justified belief vs opinion.' },
                        { id: 'en-c1-u1-l5-q2', question: 'What happens inside digital epistemic enclaves?', options: ['Dissenting viewpoints are filtered out and confirmation bias is reinforced', 'People only speak Latin', 'Algorithms delete all data', 'Everyone becomes unbiased'], correctAnswerIndex: 0, explanation: 'Dissenting viewpoints filtered out.' },
                        { id: 'en-c1-u1-l5-q3', question: '"Dialectical" so\'zining falsafiy ma\'nosi:', options: ['Qarama-qarshi fikrlarni taqqoslash va mantiqiy sintez qilish orqali haqiqatga yetishish', 'Yolg\'on gapirish', 'Matnni yodlash', 'Raqamlarni hisoblash'], correctAnswerIndex: 0, explanation: 'Dialectic inquiry.' },
                        { id: 'en-c1-u1-l5-q4', question: 'What does the author suggest to foster intellectual resilience?', options: ['Deliberate exposure to counter-arguments', 'Avoiding all books', 'Only interacting with like-minded peers', 'Blocking opposing news outlets'], correctAnswerIndex: 0, explanation: 'Deliberate exposure to counter-arguments.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Nominalisation, Nuance & Academic Stance
    {
        id: 'en-c1-u2-l1',
        courseId: 'english-c1',
        unitId: 'en-c1-u2',
        unitTitle: 'Unit 2: Lexical Precision & Stance',
        language: 'en',
        level: 'C1',
        lessonNumber: 1,
        title: 'Nuance in Hedging: Ostensibly, Purportedly, Plausibly',
        description: 'Dalillarning ishonchlilik darajasini yuqori aniqlikdagi ravishlar bilan ifodalash.',
        estimatedDurationMinutes: 15,
        icon: '💎',
        steps: [
            {
                id: 'en-c1-u2-l1-s1',
                title: 'Nozik Hedging So\'zlari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Advanced Stance Adverbs',
                    explanation: 'Ostensibly — sirtdan qaraganda / ko\'rinishidan (lekin aslida boshqacha bo\'lishi mumkin). Purportedly — da\'vo qilinishicha (isbotlanmagan). Plausibly — aqlga sig\'adigan darajada / ehtimolki.',
                    vocabulary: [
                        { term: 'Ostensibly', reading: '/ɒsˈten.sə.bli/', meaning: 'Zohiran / Sirtdan qaraganda', exampleSentence: 'The meeting was ostensibly about budgets, but leadership changes were discussed.', exampleTranslation: 'Majlis zohiran byudjet haqida edi, ammo rahbarlik o\'zgarishlari muhokama qilindi.' },
                        { term: 'Plausibly', reading: '/ˈplɔː.zə.bli/', meaning: 'Ishonarli tarzda / Mantiqan mumkin bo\'lgan holda', exampleSentence: 'This can plausibly explain the discrepancy.', exampleTranslation: 'Bu tafovutni ishonarli tarzda tushuntirishi mumkin.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri ravishni tanlang.',
                    exercises: [
                        { id: 'en-c1-u2-l1-e1', type: 'multiple-choice', prompt: '"The document was _______ authored by the minister, though experts doubt its authenticity."', options: ['purportedly', 'plausibly', 'certainly', 'undoubtedly'], correctAnswer: 0, explanation: 'Purportedly (da\'vo qilinishicha, lekin shubhali).' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u2-l1-q1', question: '"The reform was ostensibly aimed at reducing bureaucracy, but in reality increased costs." What does "ostensibly" imply?', options: ['Appearing as such on the surface, but with a different underlying reality', '100% verified truth', 'An accidental occurrence', 'A complete secret'], correctAnswerIndex: 0, explanation: 'Appearing as such on the surface.' },
                        { id: 'en-c1-u2-l1-q2', question: 'These archaeological artifacts could _______ belong to the Bronze Age.', options: ['plausibly', 'purportedlyly', 'ostensible', 'doubtingly'], correctAnswerIndex: 0, explanation: 'Plausibly belong.' },
                        { id: 'en-c1-u2-l1-q3', question: 'Which adverb casts the strongest doubt on a claim\'s veracity?', options: ['Allegedly / Purportedly', 'Undeniably', 'Conclusively', 'Categorically'], correctAnswerIndex: 0, explanation: 'Allegedly / Purportedly.' },
                        { id: 'en-c1-u2-l1-q4', question: 'Categorically denied means:', options: ['Completely and unequivocally denied', 'Maybe denied', 'Partially accepted', 'Whispered softly'], correctAnswerIndex: 0, explanation: 'Completely and unequivocally denied.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u2-l2',
        courseId: 'english-c1',
        unitId: 'en-c1-u2',
        unitTitle: 'Unit 2: Lexical Precision & Stance',
        language: 'en',
        level: 'C1',
        lessonNumber: 2,
        title: 'High-Register Idiomatic Mastery & Phrasal Verbs',
        description: 'C1 darajasidagi adabiy iboralar: "Double-edged sword", "Tip of the iceberg", "Steer clear of".',
        estimatedDurationMinutes: 15,
        icon: '💡',
        steps: [
            {
                id: 'en-c1-u2-l2-s1',
                title: 'Yuqori Darajadagi Idiomalar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Sophisticated Idiomatic Expressions',
                    explanation: 'A double-edged sword (ikki tomoni o\'tkir tig\' / ham foydasi ham zarari bor narsa), Tip of the iceberg (aysbergning uchi), Steer clear of (ehtiyotkorlik bilan chetlab o\'tmoq), Fall short of expectations (kutilgandek chiqmaslik).',
                    vocabulary: [
                        { term: 'Double-edged sword', reading: '/ˈdʌb.əl ˌedʒd sɔːd/', meaning: 'Ikki tomonlama oqibatga ega narsa', exampleSentence: 'Rapid automation is a double-edged sword.', exampleTranslation: 'Tezkor avtomatlashtirish ikki tomoni o\'tkir tig\'dir.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri idiomani tanlang.',
                    exercises: [
                        { id: 'en-c1-u2-l2-e1', type: 'multiple-choice', prompt: '"The quarterly profits _______ of Wall Street expectations by 5%."', options: ['fell short', 'dropped short', 'missed long', 'lost edge'], correctAnswer: 0, explanation: 'Fell short of expectations.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u2-l2-q1', question: 'To "steer clear of" risky investments means to:', options: ['Avoid them intentionally', 'Invest all your money', 'Steal them', 'Celebrate them'], correctAnswerIndex: 0, explanation: 'Avoid them intentionally.' },
                        { id: 'en-c1-u2-l2-q2', question: '"The reported cases are merely the tip of the iceberg." What does this imply?', options: ['The vast majority of the problem remains hidden beneath the surface', 'The problem is melting', 'It is very cold', 'Everything is resolved'], correctAnswerIndex: 0, explanation: 'Vast majority remains hidden.' },
                        { id: 'en-c1-u2-l2-q3', question: 'Which idiom means "to face a very difficult choice between two equally undesirable outcomes"?', options: ['Catch-22 / On the horns of a dilemma', 'A piece of cake', 'Spill the beans', 'Bite the bullet'], correctAnswerIndex: 0, explanation: 'On the horns of a dilemma / Catch-22.' },
                        { id: 'en-c1-u2-l2-q4', question: 'His speech really struck a _______ with the young audience.', options: ['chord', 'wire', 'bell', 'string'], correctAnswerIndex: 0, explanation: 'Strike a chord (qalbini zabt etmoq/hamfikrlik uyg\'otmoq).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u2-l3',
        courseId: 'english-c1',
        unitId: 'en-c1-u2',
        unitTitle: 'Unit 2: Lexical Precision & Stance',
        language: 'en',
        level: 'C1',
        lessonNumber: 3,
        title: 'Neuroscience, AI & Technological Ethics',
        description: 'Sun\'iy intellekt xavfsizligi, algoritmik tarafkashlik va bioetika terminologiyasi.',
        estimatedDurationMinutes: 16,
        icon: '🤖',
        steps: [
            {
                id: 'en-c1-u2-l3-s1',
                title: 'AI va Texnologik Etika',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'AI Governance & Algorithmic Alignment',
                    explanation: 'Algorithmic bias (algoritmik tarafkashlik), Alignment problem (sun\'iy intellekt maqsadlarini inson qadriyatlariga moslashtirish), Autonomous systems, Existential risk.',
                    vocabulary: [
                        { term: 'Alignment', reading: '/əˈlaɪn.mənt/', meaning: 'Moslik / Bir chiziqqa keltirish', exampleSentence: 'AI alignment ensures models adhere to human safety.', exampleTranslation: 'AI alignment modellarning inson xavfsizligiga mos bo\'lishini ta\'minlaydi.' },
                        { term: 'Autonomous', reading: '/ɔːˈtɒn.ə.məs/', meaning: 'Muxtor / Mustaqil boshqariladigan', exampleSentence: 'Autonomous vehicles navigate complex traffic.', exampleTranslation: 'Muxtor mashinalar murakkab harakatni boshqaradi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri atamani tanlang.',
                    exercises: [
                        { id: 'en-c1-u2-l3-e1', type: 'multiple-choice', prompt: '"When training datasets contain historical discrimination, the resulting model exhibits _______ bias."', options: ['algorithmic', 'biological', 'chemical', 'natural'], correctAnswer: 0, explanation: 'Algorithmic bias.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u2-l3-q1', question: 'What is the "AI Alignment Problem"?', options: ['The challenge of ensuring artificial intelligence systems pursue human-compatible goals and values', 'Connecting monitors with cables', 'Upgrading computer RAM', 'Making robots walk fast'], correctAnswerIndex: 0, explanation: 'Pursuing human-compatible goals and values.' },
                        { id: 'en-c1-u2-l3-q2', question: '"Existential risk" refers to threats that could:', options: ['Wipe out humanity or permanently curtail human potential', 'Cause a minor rainstorm', 'Break a single phone', 'Cause traffic delays'], correctAnswerIndex: 0, explanation: 'Wipe out humanity or curtail human potential.' },
                        { id: 'en-c1-u2-l3-q3', question: 'Bioethics deals with ethical dilemmas arising from:', options: ['Advances in biology, medicine and genetic engineering', 'Cooking recipes', 'Car manufacturing only', 'Astronomical telescope design'], correctAnswerIndex: 0, explanation: 'Advances in biology, medicine, and genetics.' },
                        { id: 'en-c1-u2-l3-q4', question: 'Which term describes an algorithm whose internal decision logic cannot be inspected by humans?', options: ['Black-box model', 'Open-source code', 'Transparent algorithm', 'Linear flowchart'], correctAnswerIndex: 0, explanation: 'Black-box model.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u2-l4',
        courseId: 'english-c1',
        unitId: 'en-c1-u2',
        unitTitle: 'Unit 2: Lexical Precision & Stance',
        language: 'en',
        level: 'C1',
        lessonNumber: 4,
        title: 'Global Governance, Diplomacy & International Law',
        description: 'Xalqaro shartnomalar, suverenitet, diplomatiya va geosiyosat terminologiyasi.',
        estimatedDurationMinutes: 16,
        icon: '🌐',
        steps: [
            {
                id: 'en-c1-u2-l4-s1',
                title: 'Diplomatiya Leksikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Diplomatic & Geopolitical Lexicon',
                    explanation: 'Sovereignty (suverenitet), Multilateralism (ko\'p tomonlama hamkorlik), Sanctions (sanksiyalar), Treaty ratification (shartnomani ratifikatsiya qilish), Jurisdiction (yurisdiksiya).',
                    vocabulary: [
                        { term: 'Sovereignty', reading: '/ˈsɒv.rɪn.ti/', meaning: 'Suverenitet / Mustaqil davlat hokimiyati', exampleSentence: 'National sovereignty must be respected.', exampleTranslation: 'Milliy suverenitet hurmat qilinishi lozim.' },
                        { term: 'Ratify', reading: '/ˈræt.ɪ.faɪ/', meaning: 'Ratifikatsiya qilmoq / Rasman tasdiqlamoq', exampleSentence: 'Parliament voted to ratify the accord.', exampleTranslation: 'Parlament bitimni ratifikatsiya qilish uchun ovoz berdi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri atamani tanlang.',
                    exercises: [
                        { id: 'en-c1-u2-l4-e1', type: 'multiple-choice', prompt: '"International disputes should be resolved through _______ diplomacy rather than unilateral aggression."', options: ['multilateral', 'isolated', 'reckless', 'hasty'], correctAnswer: 0, explanation: 'Multilateral diplomacy.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u2-l4-q1', question: 'What does "multilateralism" mean in international relations?', options: ['Multiple countries working collaboratively on shared global issues', 'A single dictator ruling the world', 'Banning all trade', 'Stopping foreign diplomacy'], correctAnswerIndex: 0, explanation: 'Multiple countries working collaboratively.' },
                        { id: 'en-c1-u2-l4-q2', question: '"Diplomatic immunity" protects foreign representatives from:', options: ['Local legal jurisdiction and prosecution in the host country', 'Catching the flu', 'Paying for personal food', 'Speaking their native language'], correctAnswerIndex: 0, explanation: 'Protects from local legal jurisdiction.' },
                        { id: 'en-c1-u2-l4-q3', question: 'Economic sanctions are intended to:', options: ['Pressure a state to alter its behavior without direct military force', 'Build free roads in other countries', 'Distribute free currency', 'Promote tourism'], correctAnswerIndex: 0, explanation: 'Pressure state without military force.' },
                        { id: 'en-c1-u2-l4-q4', question: 'A bilateral treaty is signed between:', options: ['Two sovereign parties', 'Twenty countries', 'Only private corporations', 'A citizen and a mayor'], correctAnswerIndex: 0, explanation: 'Two sovereign parties.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u2-l5',
        courseId: 'english-c1',
        unitId: 'en-c1-u2',
        unitTitle: 'Unit 2: Lexical Precision & Stance',
        language: 'en',
        level: 'C1',
        lessonNumber: 5,
        title: 'C1 Advanced Lexical Resource & Precision Workout',
        description: 'Kamdan-kam uchraydigan akademik so\'zlar (Ubiquitous, Equivocal, Ephemeral) va sinonimik nozikliklar.',
        estimatedDurationMinutes: 16,
        icon: '💎',
        steps: [
            {
                id: 'en-c1-u2-l5-s1',
                title: 'Oliy Leksika',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Precision Lexicon for Band 8.0+',
                    explanation: 'Ubiquitous (hamma yerda hoziru-nozir), Ephemeral (o\'tkinchi / bir lahzalik), Equivocal (ikki xil ma\'noli / noaniq), Juxtaposition (yonma-yon qo\'yib taqqoslash).',
                    vocabulary: [
                        { term: 'Ubiquitous', reading: '/juːˈbɪk.wɪ.təs/', meaning: 'Hamma yerda uchraydigan', exampleSentence: 'Smartphones have become ubiquitous.', exampleTranslation: 'Smartfonlar hamma yerda uchraydigan bo\'lib qoldi.' },
                        { term: 'Ephemeral', reading: '/ɪˈfem.ər.əl/', meaning: 'O\'tkinchi / Qisqa umrli', exampleSentence: 'Social media fame is often ephemeral.', exampleTranslation: 'Ijtimoiy tarmoqdagi shuhrat ko\'pincha o\'tkinchidir.' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri so\'zni tanlang.',
                    exercises: [
                        { id: 'en-c1-u2-l5-e1', type: 'multiple-choice', prompt: '"The politician gave an _______ answer, avoiding any definitive commitment."', options: ['equivocal', 'ubiquitous', 'ephemeral', 'epistemic'], correctAnswer: 0, explanation: 'Equivocal (ikki xil ma\'noli, noaniq).' }
                    ]
                }
            },
            {
                id: 'en-c1-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u2-l5-q1', question: 'What does "juxtaposition" mean?', options: ['Placing two contrasting things close together to highlight differences', 'Erasing a paragraph', 'A type of mathematical equation', 'A printing error'], correctAnswerIndex: 0, explanation: 'Placing contrasting things close together.' },
                        { id: 'en-c1-u2-l5-q2', question: 'The beauty of spring cherry blossoms is famously _______, lasting only a few days.', options: ['ephemeral', 'permanent', 'perpetual', 'indestructible'], correctAnswerIndex: 0, explanation: 'Ephemeral (o\'tkinchi).' },
                        { id: 'en-c1-u2-l5-q3', question: '"Ubiquitous" so\'zining eng aniq sinonimi qaysi?', options: ['Omnipresent / Pervasive', 'Rare', 'Invisible', 'Temporary'], correctAnswerIndex: 0, explanation: 'Omnipresent / Pervasive.' },
                        { id: 'en-c1-u2-l5-q4', question: 'His explanation was completely _______, leaving no doubt whatsoever in the jury\'s mind.', options: ['unequivocal / lucid', 'equivocal', 'vague', 'obscure'], correctAnswerIndex: 0, explanation: 'Unequivocal (shubhasiz, aniq).' }
                    ]
                }
            }
        ]
    },

    // Unit 3: Philosophy, Ethics, AI & Global Governance
    {
        id: 'en-c1-u3-l1',
        courseId: 'english-c1',
        unitId: 'en-c1-u3',
        unitTitle: 'Unit 3: Dialectics, Rhetoric & Synthesis',
        language: 'en',
        level: 'C1',
        lessonNumber: 1,
        title: 'Classical Rhetoric: Logos, Pathos & Ethos in Public Oratory',
        description: 'Mantiq (logos), hissiy ta\'sir (pathos) va notiqning nufuzi (ethos) orqali ishontirish san\'ati.',
        estimatedDurationMinutes: 16,
        icon: '🏛️',
        steps: [
            {
                id: 'en-c1-u3-l1-s1',
                title: 'Notiqlik Asoslari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Aristotelian Rhetorical Triangle',
                    explanation: 'Logos: Qat\'iy mantiq, statistika va dalillar. Pathos: Tinglovchining hissiyoti va empatiyasiga ta\'sir. Ethos: Notiqning ishonchliligi, axloqiy nufuzi va vakolati.',
                    vocabulary: [
                        { term: 'Oratory', reading: '/ˈɒr.ə.tər.i/', meaning: 'Notiqlik san\'ati', exampleSentence: 'His powerful oratory captivated the crowd.', exampleTranslation: 'Uning kuchli notiqligi ommani maftun etdi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri ritorika vositasini aniqlang.',
                    exercises: [
                        { id: 'en-c1-u3-l1-e1', type: 'multiple-choice', prompt: '"As a neurosurgeon with 25 years of clinical practice, I can attest to these medical risks." Which rhetorical appeal is used?', options: ['Ethos (Credibility / Authority)', 'Pathos', 'Logos only', 'Fallacy'], correctAnswer: 0, explanation: 'Ethos (shaxsiy nufuz va tajribaga tayanish).' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u3-l1-q1', question: 'Which rhetorical appeal relies strictly on empirical data, syllogisms and deductive reasoning?', options: ['Logos', 'Pathos', 'Ethos', 'Mythos'], correctAnswerIndex: 0, explanation: 'Logos.' },
                        { id: 'en-c1-u3-l1-q2', question: 'Using vivid, emotional imagery of suffering children to raise charity funds is an appeal to:', options: ['Pathos', 'Logos', 'Ethos', 'Fallacy'], correctAnswerIndex: 0, explanation: 'Pathos.' },
                        { id: 'en-c1-u3-l1-q3', question: 'What is a "straw man fallacy"?', options: ['Misrepresenting an opponent\'s argument to make it easier to attack', 'Quoting a famous scientist', 'Speaking too loudly', 'Using perfect grammar'], correctAnswerIndex: 0, explanation: 'Misrepresenting an argument.' },
                        { id: 'en-c1-u3-l1-q4', question: '"Ad hominem" refers to an attack directed against:', options: ['The person rather than their substantive argument', 'The statistics', 'The grammar of the text', 'The microphone'], correctAnswerIndex: 0, explanation: 'Directed against the person.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u3-l2',
        courseId: 'english-c1',
        unitId: 'en-c1-u3',
        unitTitle: 'Unit 3: Dialectics, Rhetoric & Synthesis',
        language: 'en',
        level: 'C1',
        lessonNumber: 2,
        title: 'Spontaneous Debate Formulation & Rebuttal Techniques',
        description: 'Muntazam bahs-munozarada raqib fikriga darhol mantiqiy e\'tiroz bildirish usullari.',
        estimatedDurationMinutes: 16,
        icon: '⚔️',
        steps: [
            {
                id: 'en-c1-u3-l2-s1',
                title: 'E\'tiroz San\'ati',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Constructing an Academic Rebuttal',
                    explanation: '1. Concession (Yon berish): "While I concede that initial capital expenditure is high..." 2. Counter-argument (Asosiy zarba): "... this overlooks the exponential long-term cost reductions." 3. Substantiation (Isbot): "Empirical benchmarks prove a return on investment within 36 months."',
                    vocabulary: [
                        { term: 'Rebuttal', reading: '/rɪˈbʌt.əl/', meaning: 'Raddiya / E\'tirozli dalil', exampleSentence: 'She formulated a devastating rebuttal.', exampleTranslation: 'U kuchli raddiya keltirdi.' },
                        { term: 'Concede', reading: '/kənˈsiːd/', meaning: 'Tan olmoq / Yon bermoq', exampleSentence: 'He conceded that the timeline was optimistic.', exampleTranslation: 'U muddat juda optimistik ekanini tan oldi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Eng kuchli raddiya variantini tanlang.',
                    exercises: [
                        { id: 'en-c1-u3-l2-e1', type: 'multiple-choice', prompt: 'Opponent: "Remote work reduces workplace productivity." Best C1 Rebuttal:', options: ['While collaboration patterns undoubtedly shift, comprehensive metadata from Fortune 500 enterprises indicates a 14% net gain in individual output.', 'No you are totally lying!', 'Productivity is whatever people feel.', 'I like working in pajamas.'], correctAnswer: 0, explanation: 'Nuanced concession followed by empirical refutation.' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u3-l2-q1', question: 'What is the purpose of making a partial concession in a debate?', options: ['It demonstrates intellectual honesty and strengthens your counter-point', 'It means you surrender immediately', 'It wastes the opponent\'s time', 'It confuses the judges'], correctAnswerIndex: 0, explanation: 'Demonstrates intellectual honesty.' },
                        { id: 'en-c1-u3-l2-q2', question: 'Which phrase introduces a sharp counter-argument?', options: ['Be that as it may, this premise fails to account for...', 'Yes I agree with everything', 'Whatever you say', 'I have no thoughts'], correctAnswerIndex: 0, explanation: 'Be that as it may...' },
                        { id: 'en-c1-u3-l2-q3', question: '"This argument is fundamentally premised on a false dichotomy." What is a false dichotomy?', options: ['Presenting only two extreme choices when other viable options exist', 'A true fact', 'A type of animal', 'A spelling error'], correctAnswerIndex: 0, explanation: 'Presenting only two extreme choices.' },
                        { id: 'en-c1-u3-l2-q4', question: 'To "refute" an allegation means to:', options: ['Prove it to be false through evidence and logic', 'Accept it blindly', 'Write it down in a diary', 'Publish it in a poem'], correctAnswerIndex: 0, explanation: 'Prove false with evidence.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u3-l3',
        courseId: 'english-c1',
        unitId: 'en-c1-u3',
        unitTitle: 'Unit 3: Dialectics, Rhetoric & Synthesis',
        language: 'en',
        level: 'C1',
        lessonNumber: 3,
        title: 'Professional Presentation & High-Stakes Negotiation',
        description: 'Xalqaro biznes muzokaralari, murosaga erishish va diplomatik bosim o\'tkazish tili.',
        estimatedDurationMinutes: 16,
        icon: '💼',
        steps: [
            {
                id: 'en-c1-u3-l3-s1',
                title: 'Muzokara Taktikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'High-Stakes Negotiation Strategies',
                    explanation: 'Non-confrontational pushback: "We appreciate your position; however, that valuation presents substantial compliance risks for our board." Win-win framing: "If you could meet us halfway on licensing terms, we would be prepared to guarantee volume commitments."',
                    vocabulary: [
                        { term: 'Compromise', reading: '/ˈkɒm.prə.maɪz/', meaning: 'Murosa', exampleSentence: 'Both parties reached a mutually beneficial compromise.', exampleTranslation: 'Har ikki tomon o\'zaro manfaatli murosaga erishdi.' },
                        { term: 'Concession', reading: '/kənˈseʃ.ən/', meaning: 'Yon berish (muzokarada)', exampleSentence: 'They made significant concessions on pricing.', exampleTranslation: 'Ular narx borasida sezilarli yon berdilar.' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri diplomatik iborani tanlang.',
                    exercises: [
                        { id: 'en-c1-u3-l3-e1', type: 'multiple-choice', prompt: 'Which phrase represents professional and diplomatic disagreement in a business meeting?', options: ['I have certain reservations regarding that timeline; perhaps we could examine intermediate milestones.', 'That is totally impossible and ridiculous.', 'You are wasting our time.', 'No way will we ever do that.'], correctAnswer: 0, explanation: 'Diplomatic reservation.' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u3-l3-q1', question: '"Meet someone halfway" means:', options: ['To reach a compromise where each side makes concessions', 'To run into someone on the street', 'To arrive 50% late', 'To cancel a contract'], correctAnswerIndex: 0, explanation: 'Reach a compromise.' },
                        { id: 'en-c1-u3-l3-q2', question: 'What does "BATNA" stand for in professional negotiation theory?', options: ['Best Alternative to a Negotiated Agreement', 'Business And Tax National Association', 'Better Action Towards New Assets', 'Bank Account Transfer Number Access'], correctAnswerIndex: 0, explanation: 'Best Alternative to a Negotiated Agreement.' },
                        { id: 'en-c1-u3-l3-q3', question: 'Which sentence effectively de-escalates tension during intense negotiations?', options: ['Let us take a step back and revisit our overarching mutual objectives.', 'Stop shouting at us right now.', 'You don\'t understand business at all.', 'We are walking out forever.'], correctAnswerIndex: 0, explanation: 'Revisiting mutual objectives.' },
                        { id: 'en-c1-u3-l3-q4', question: 'To "have reservations" about a plan means to:', options: ['Have doubts or hesitations regarding its viability', 'Book hotel rooms for it', 'Love it completely', 'Sign it instantly'], correctAnswerIndex: 0, explanation: 'Have doubts or hesitations.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u3-l4',
        courseId: 'english-c1',
        unitId: 'en-c1-u3',
        unitTitle: 'Unit 3: Dialectics, Rhetoric & Synthesis',
        language: 'en',
        level: 'C1',
        lessonNumber: 4,
        title: 'Advanced Academic Abstract & Executive Summary Writing',
        description: 'Ilmiy tadqiqot anotatsiyasi (abstract) va biznes rahbariyati uchun qisqacha xulosa (executive summary).',
        estimatedDurationMinutes: 16,
        icon: '📑',
        steps: [
            {
                id: 'en-c1-u3-l4-s1',
                title: 'Annotatsiya Tuzilishi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Academic Abstract Architecture',
                    explanation: '1. Background & Problem: Mavzu dolzarbligi. 2. Methodology: Tadqiqot usuli. 3. Results: Eng asosiy ilmiy natijalar. 4. Implications / Significance: Kengroq amaliy yoki nazariy xulosalar.',
                    vocabulary: [
                        { term: 'Abstract', reading: '/ˈæb.strækt/', meaning: 'Ilmiy maqola annotatsiyasi / qisqa mazmuni', exampleSentence: 'The abstract encapsulates the whole paper.', exampleTranslation: 'Annotatsiya butun maqolani o\'zida jamlaydi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri annotatsiya jumlasini tanlang.',
                    exercises: [
                        { id: 'en-c1-u3-l4-e1', type: 'multiple-choice', prompt: '"This study _______ (investigate) the socio-economic ramifications of automation."', options: ['investigates', 'was investigated', 'is investigate', 'investigating'], correctAnswer: 0, explanation: 'This study investigates...' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u3-l4-q1', question: 'What is the primary function of an academic abstract?', options: ['To provide a concise, comprehensive synthesis of the entire paper', 'To list all reference books', 'To introduce the author\'s biography', 'To display the University logo'], correctAnswerIndex: 0, explanation: 'Concise, comprehensive synthesis.' },
                        { id: 'en-c1-u3-l4-q2', question: 'What does "ramifications" mean in an academic context?', options: ['Complex consequences or secondary effects', 'Small tree branches only', 'Simple mathematics', 'Office decorations'], correctAnswerIndex: 0, explanation: 'Complex consequences or effects.' },
                        { id: 'en-c1-u3-l4-q3', question: 'Should an abstract contain extensive in-text citations and long quotes?', options: ['No, an abstract should be self-contained and free of heavy citations', 'Yes, fill it with 50 citations', 'Yes, only write quotes', 'It must be written in bold'], correctAnswerIndex: 0, explanation: 'Self-contained and free of citations.' },
                        { id: 'en-c1-u3-l4-q4', question: 'An Executive Summary is primarily tailored for:', options: ['Decision-makers and leadership who need key findings rapidly', 'Children learning to read', 'Librarians sorting shelves', 'Proofreaders checking commas only'], correctAnswerIndex: 0, explanation: 'Decision-makers and leadership.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u3-l5',
        courseId: 'english-c1',
        unitId: 'en-c1-u3',
        unitTitle: 'Unit 3: Dialectics, Rhetoric & Synthesis',
        language: 'en',
        level: 'C1',
        lessonNumber: 5,
        title: 'Critical Essay Evaluation & Peer Review',
        description: 'Akademik insholardagi mantiqiy bo\'shliqlarni tahlil qilish va taqriz yozish.',
        estimatedDurationMinutes: 16,
        icon: '📝',
        steps: [
            {
                id: 'en-c1-u3-l5-s1',
                title: 'Taqriz San\'ati',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Constructive Academic Peer Review',
                    explanation: 'Baholash mezonlari: Cohesion, logical flow, claim substantiation, lexical appropriateness, and grammatical precision.',
                    keyPoints: [
                        'Highlighting strengths: "The author cogently demonstrates..."',
                        'Identifying weaknesses: "However, the assertion lacks empirical validation..."'
                    ]
                }
            },
            {
                id: 'en-c1-u3-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri taqriz jumlasini tanlang.',
                    exercises: [
                        { id: 'en-c1-u3-l5-e1', type: 'multiple-choice', prompt: '"The essay presents a compelling thesis; _______, the transition between paragraphs 2 and 3 requires smoothing."', options: ['nonetheless', 'furthermore', 'because', 'namely'], correctAnswer: 0, explanation: 'Nonetheless (shunday bo\'lsa-da).' }
                    ]
                }
            },
            {
                id: 'en-c1-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u3-l5-q1', question: 'What does "cogent" mean in "a cogent argument"?', options: ['Clear, logical and convincing', 'Weak and confusing', 'Very loud', 'Comedic'], correctAnswerIndex: 0, explanation: 'Clear, logical and convincing.' },
                        { id: 'en-c1-u3-l5-q2', question: 'What is a "non-sequitur"?', options: ['A conclusion or statement that does not logically follow from the previous argument', 'A long paragraph', 'A Latin proverb', 'A grammar rule'], correctAnswerIndex: 0, explanation: 'Conclusion that does not logically follow.' },
                        { id: 'en-c1-u3-l5-q3', question: 'Why is peer review fundamental to the scientific method?', options: ['It filters out methodological flaws, bias and unsubstantiated claims', 'It is just a social ritual', 'It makes papers expensive', 'It prevents anyone from publishing'], correctAnswerIndex: 0, explanation: 'Filters out flaws, bias, and errors.' },
                        { id: 'en-c1-u3-l5-q4', question: '"The findings are corroborated by independent clinical trials." What does "corroborate" mean?', options: ['Confirm or support with fresh evidence', 'Disprove', 'Cancel', 'Hide'], correctAnswerIndex: 0, explanation: 'Confirm or support with evidence.' }
                    ]
                }
            }
        ]
    },

    // Unit 4: IELTS C1 (Band 7.5 - 8.0) Reading & Listening Analysis
    {
        id: 'en-c1-u4-l1',
        courseId: 'english-c1',
        unitId: 'en-c1-u4',
        unitTitle: 'Unit 4: IELTS C1 (Band 7.5-8.0) Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 1,
        title: 'IELTS C1 Reading: Inference, Subtext & Author\'s Stance',
        description: 'Matndagi bevosita aytilmagan yashirin ma\'nolarni (inference) va muallifning kinoyali yoki tanqidiy pozitsiyasini anglash.',
        estimatedDurationMinutes: 16,
        icon: '🔍',
        steps: [
            {
                id: 'en-c1-u4-l1-s1',
                title: 'Inference va Subtext',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Decoding Implicit Meaning in Band 8.0+ Texts',
                    explanation: 'Muallif to\'g\'ridan-to\'g\'ri "men rozi emasman" demaydi, balki kinoyali sifatlar ("questionable assumptions", "purported benefits", "ostensible breakthroughs") orqali o\'z shubhasini bildiradi.',
                    keyPoints: [
                        'Author tone: skeptical, enthusiastic, neutral, critical, or ambivalent.',
                        'Detecting underlying ideological bias through word choices.'
                    ]
                }
            },
            {
                id: 'en-c1-u4-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Muallif pozitsiyasini aniqlang.',
                    exercises: [
                        { id: 'en-c1-u4-l1-e1', type: 'multiple-choice', prompt: 'Text: "The company boasted of a revolutionary green initiative, yet independent audits revealed negligible carbon reductions." The author\'s stance is:', options: ['Skeptical / Critical of the company\'s claims', 'Enthusiastic and supportive', 'Completely indifferent', 'Confused'], correctAnswer: 0, explanation: 'Skeptical / Critical.' }
                    ]
                }
            },
            {
                id: 'en-c1-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u4-l1-q1', question: 'What does "inference" mean in IELTS Reading?', options: ['Drawing a logical conclusion based on evidence and reasoning rather than explicit statements', 'Copying a sentence word for word', 'Guessing randomly', 'Reading backwards'], correctAnswerIndex: 0, explanation: 'Drawing logical conclusions from evidence.' },
                        { id: 'en-c1-u4-l1-q2', question: 'If an author describes a theory as "audacious yet empirically fragile", their attitude is:', options: ['Appreciating its boldness while acknowledging its lack of solid proof', '100% agreement', 'Total anger', 'Complete boredom'], correctAnswerIndex: 0, explanation: 'Appreciating boldness while noting lack of proof.' },
                        { id: 'en-c1-u4-l1-q3', question: '"Ambivalent" means:', options: ['Having mixed feelings or contradictory ideas about something', 'Extremely angry', 'Completely certain', 'Asleep'], correctAnswerIndex: 0, explanation: 'Having mixed/contradictory feelings.' },
                        { id: 'en-c1-u4-l1-q4', question: 'How do Band 8+ candidates tackle difficult matching features questions?', options: ['By identifying parallel concepts rather than looking for identical keywords', 'By choosing option A for every question', 'By skimming without reading questions', 'By translating the whole text into their native language'], correctAnswerIndex: 0, explanation: 'Identifying parallel concepts.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u4-l2',
        courseId: 'english-c1',
        unitId: 'en-c1-u4',
        unitTitle: 'Unit 4: IELTS C1 (Band 7.5-8.0) Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 2,
        title: 'IELTS C1 Listening: High-Speed Multi-Speaker Debates',
        description: 'Tezkor sur\'atdagi bir nechta akademik so\'zlovchilarning fikriy to\'qnashuvlarini tushunish.',
        estimatedDurationMinutes: 16,
        icon: '🎧',
        steps: [
            {
                id: 'en-c1-u4-l2-s1',
                title: 'Tezkor Eshitish Tahlili',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Section 3 & 4 Complex Debate Tracking',
                    explanation: 'Talabalar va tadqiqotchilar o\'rtasidagi tez almashuvchi fikrlar: kim qaysi dalilni taklif qildi, kim rad etdi va oxir-oqibat nimaga kelishildi.',
                    keyPoints: [
                        'Track agreement markers: "I wouldn\'t go that far", "I am inclined to agree", "That premise holds water".'
                    ]
                }
            },
            {
                id: 'en-c1-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri xulosani aniqlang.',
                    exercises: [
                        { id: 'en-c1-u4-l2-e1', type: 'multiple-choice', prompt: 'Speaker A: "Should we discard the third dataset?" Speaker B: "I wouldn\'t go that far; it merely requires re-calibration." Speaker B believes:', options: ['The third dataset should be kept and re-calibrated', 'The dataset must be thrown away', 'The project is over', 'Speaker A is always right'], correctAnswer: 0, explanation: 'Keep and re-calibrate.' }
                    ]
                }
            },
            {
                id: 'en-c1-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u4-l2-q1', question: '"That premise holds water" means the idea is:', options: ['Logical, valid and sound', 'Full of leaks and bad', 'Wet and ruined', 'Silly'], correctAnswerIndex: 0, explanation: 'Logical, valid and sound.' },
                        { id: 'en-c1-u4-l2-q2', question: 'If speaker A proposes Tuesday and speaker B says "I have an immovable seminar then, but Wednesday afternoon is clear", which day is selected?', options: ['Wednesday', 'Tuesday', 'Friday', 'Monday'], correctAnswerIndex: 0, explanation: 'Wednesday.' },
                        { id: 'en-c1-u4-l2-q3', question: 'How many questions correct out of 40 are needed for Band 8.0 in IELTS Listening?', options: ['Approximately 35-36 correct', '20 correct', '15 correct', '40 only'], correctAnswerIndex: 0, explanation: '35-36 correct.' },
                        { id: 'en-c1-u4-l2-q4', question: '"I am inclined to agree with Professor Miller." This denotes:', options: ['Tendency towards agreement', 'Complete rejection', 'Total ignorance', 'Mockery'], correctAnswerIndex: 0, explanation: 'Tendency towards agreement.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u4-l3',
        courseId: 'english-c1',
        unitId: 'en-c1-u4',
        unitTitle: 'Unit 4: IELTS C1 (Band 7.5-8.0) Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 3,
        title: 'IELTS Writing Task 1: Multi-Chart Synthesis & Nuanced Comparison',
        description: 'Bir vaqtning o\'zida 2 xil grafik (masalan, jadval va pirog diagrammasi) berilganda ma\'lumotlarni mahorat bilan sintez qilish.',
        estimatedDurationMinutes: 16,
        icon: '📊',
        steps: [
            {
                id: 'en-c1-u4-l3-s1',
                title: 'Ko\'p Grafiklar Sintezi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Synthesizing Multiple Data Sources in Task 1',
                    explanation: 'Ikkita alohida grafikni shunchaki ketma-ket aytib berish emas, balki ular orasidagi bog\'liqlikni ko\'rsatish: "The table indicates higher car ownership, which directly correlates with the pie chart demonstrating a 40% share of private transport emissions."',
                    keyPoints: [
                        'Grouping logically: Body 1 (Chart 1 + correlation), Body 2 (Chart 2 + contrast).',
                        'Overview that connects both charts in 1-2 sophisticated sentences.'
                    ]
                }
            },
            {
                id: 'en-c1-u4-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri bog\'lanish jumlasini tanlang.',
                    exercises: [
                        { id: 'en-c1-u4-l3-e1', type: 'multiple-choice', prompt: 'Which sentence best links a table showing population rise with a bar chart showing water usage?', options: ['This demographic expansion is mirrored in the bar chart, which depicts a corresponding 25% surge in municipal water extraction.', 'Here is chart 1 and there is chart 2.', 'People drink water because they exist.', 'Both charts have numbers on them.'], correctAnswer: 0, explanation: 'This demographic expansion is mirrored in...' }
                    ]
                }
            },
            {
                id: 'en-c1-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u4-l3-q1', question: 'When Task 1 includes two different charts (e.g. a bar chart and a pie chart), how should the Overview be structured?', options: ['It must identify the key global trend or relationship from both visual representations', 'Only talk about the first chart and ignore the second', 'Do not write an overview', 'Write 50 numbers in a list'], correctAnswerIndex: 0, explanation: 'Identify key global trends from both visuals.' },
                        { id: 'en-c1-u4-l3-q2', question: '"Correlates with" nimani bildiradi?', options: ['O\'zaro mutanosiblik / Bog\'liqlikni aks ettiradi', 'Zid keladi', 'Yo\'q bo\'ladi', 'Kamaytiradi'], correctAnswerIndex: 0, explanation: 'Correlates with — Mutanosiblik/bog\'liqlik.' },
                        { id: 'en-c1-u4-l3-q3', question: 'What is the danger of listing every single figure from a dense table?', options: ['It lacks synthesis and turns into a mere list of data, capping Task Achievement at Band 5 or 6', 'Examiners love reading all 200 numbers', 'It guarantees Band 9', 'Nothing'], correctAnswerIndex: 0, explanation: 'Lacks synthesis and caps Task Achievement.' },
                        { id: 'en-c1-u4-l3-q4', question: 'Choose the most sophisticated adverb for "dramatic":', options: ['Substantially / Precipitous / Remarkable', 'Bigly', 'Very very', 'Greatest'], correctAnswerIndex: 0, explanation: 'Substantially / Precipitous / Remarkable.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u4-l4',
        courseId: 'english-c1',
        unitId: 'en-c1-u4',
        unitTitle: 'Unit 4: IELTS C1 (Band 7.5-8.0) Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 4,
        title: 'IELTS Writing Task 2: Sophisticated Cohesion & Counter-Argumentation',
        description: 'Band 8.0 insho: chuqur qarshi dalil (counter-argument) va uni rad etish (rebuttal) orqali mukammal fikr bildirish.',
        estimatedDurationMinutes: 18,
        icon: '✍️',
        steps: [
            {
                id: 'en-c1-u4-l4-s1',
                title: 'Band 8.0 Insho Arxitekturasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Counter-argument & Rebuttal Paragraph Structure',
                    explanation: '1. Counter-claim: "Admittedly, proponents of censorship contend that it preserves moral standards." 2. Refutation: "However, this assertion collapses upon scrutiny because granting central authorities unchecked discretionary power inevitably stifles legitimate democratic discourse." 3. Resolution: "Thus, independent media literacy remains a far superior remedy."',
                    vocabulary: [
                        { term: 'Discretionary', reading: '/dɪˈskreʃ.ən.ər.i/', meaning: 'O\'z xohishiga ko\'ra / Ixtiyoriy vakolat', exampleSentence: 'Judges possess discretionary powers.', exampleTranslation: 'Sudyalar ixtiyoriy vakolatlarga ega.' }
                    ]
                }
            },
            {
                id: 'en-c1-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Eng mukammal qarshi dalil strukturasini tanlang.',
                    exercises: [
                        { id: 'en-c1-u4-l4-e1', type: 'multiple-choice', prompt: 'Which sentence serves as an exemplary academic concession for Task 2?', options: ['While it is understandable that detractors cite exorbitant implementation costs, these expenses are vastly outweighed by future productivity gains.', 'Some people say it costs money and they are wrong.', 'Money is bad but we have to spend.', 'I don\'t care about cost.'], correctAnswer: 0, explanation: 'While it is understandable that detractors cite...' }
                    ]
                }
            },
            {
                id: 'en-c1-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u4-l4-q1', question: 'What characterizes Band 8.0 Coherence and Cohesion?', options: ['Sequences information logically and uses a wide range of cohesive devices seamlessly and unobtrusively', 'Using "Firstly, Secondly, Thirdly" in every sentence', 'Writing one 250-word sentence with no punctuation', 'Starting every sentence with "Moreover"'], correctAnswerIndex: 0, explanation: 'Seamless and unobtrusive cohesion.' },
                        { id: 'en-c1-u4-l4-q2', question: '"Detractor" so\'zining ma\'nosi nima?', options: ['Tanqidchi / Qarshi chiquvchi shaxs', 'Muxlis', 'Quruvchi', 'Homiy'], correctAnswerIndex: 0, explanation: 'Detractor — Tanqidchi.' },
                        { id: 'en-c1-u4-l4-q3', question: 'What happens if you use overly convoluted vocabulary incorrectly in IELTS Task 2?', options: ['Lexical Resource score drops due to lack of natural precision and inappropriate collocation', 'You get automatic Band 9', 'The examiner gives extra points for effort', 'Grammar score rises'], correctAnswerIndex: 0, explanation: 'Lexical score drops for unnatural precision.' },
                        { id: 'en-c1-u4-l4-q4', question: 'Which linking device denotes an indisputable fact?', options: ['Inarguably / Indisputably', 'Dubiously', 'Questionably', 'Supposedly'], correctAnswerIndex: 0, explanation: 'Inarguably / Indisputably.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u4-l5',
        courseId: 'english-c1',
        unitId: 'en-c1-u4',
        unitTitle: 'Unit 4: IELTS C1 (Band 7.5-8.0) Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 5,
        title: 'IELTS Speaking Band 8.0+: Idiomatic Eloquence & Spontaneous Depth',
        description: 'Imtihon oluvchi bilan tabiiy, chuqur va ravon suhbat: pauzasiz murakkab g\'oyalarni shakllantirish.',
        estimatedDurationMinutes: 18,
        icon: '🎙️',
        steps: [
            {
                id: 'en-c1-u4-l5-s1',
                title: 'Band 8.0+ Nutq Ko\'nikmalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Native-Like Eloquence in Speaking Parts 2 & 3',
                    explanation: 'Band 8.0+ darajasida nomzod so\'z qidirib to\'xtamaydi (effortless fluency), murakkab metaforalar va tabiiy kollokatsiyalardan foydalanadi, intonatsiya va urg\'uni mohirona boshqaradi.',
                    keyPoints: [
                        'Idiomatic precision: "At the end of the day", "To take it with a pinch of salt", "A catalyst for change".',
                        'Handling unexpected abstract questions with poise.'
                    ]
                }
            },
            {
                id: 'en-c1-u4-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Eng yuqori darajadagi javobni tanlang.',
                    exercises: [
                        { id: 'en-c1-u4-l5-e1', type: 'multiple-choice', prompt: 'Examiner: "Do you think modern architecture preserves historical identity?" Best Band 8.0+ answer:', options: ['That is a profound question. In my view, it is a delicate balancing act. While avant-garde skyscrapers redefine urban skylines, sensitive historical preservation serves as an irreplaceable cultural anchor.', 'No, skyscrapers are glass.', 'Modern buildings are new and old buildings are old.', 'I like towers.'], correctAnswer: 0, explanation: 'Flawless lexical range, metaphor, and rhetorical poise.' }
                    ]
                }
            },
            {
                id: 'en-c1-u4-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u4-l5-q1', question: 'What characterizes Band 8.0 Pronunciation in IELTS Speaking?', options: ['Uses a wide range of phonological features to convey precise subtle meaning, easily understood throughout', 'Sounds like a robotic dictionary', 'Speaks extremely loudly', 'Fakes an exaggerated accent unnaturally'], correctAnswerIndex: 0, explanation: 'Wide range of phonological features naturally.' },
                        { id: 'en-c1-u4-l5-q2', question: '"A delicate balancing act" nimani bildiradi?', options: ['Nozik muvozanatni talab qiluvchi murakkab vaziyat', 'Sirka o\'yini', 'Balandlikdan sakrash', 'Shunchaki oson ish'], correctAnswerIndex: 0, explanation: 'Nozik muvozanat talab qiluvchi holat.' },
                        { id: 'en-c1-u4-l5-q3', question: 'How should a candidate buy 2-3 seconds to think about an abstract Part 3 question without losing Fluency points?', options: ['Use natural conversational fillers: "That is an intriguing question with several multifaceted dimensions..."', 'Say "Um... uh... um..." for 20 seconds in total silence', 'Ask the examiner to answer first', 'Close eyes and say nothing'], correctAnswerIndex: 0, explanation: 'Natural conversational fillers.' },
                        { id: 'en-c1-u4-l5-q4', question: 'What does "catalyst for change" mean?', options: ['An event, person or factor that accelerates significant transformation', 'A chemistry test tube', 'A barrier that stops change', 'A legal contract'], correctAnswerIndex: 0, explanation: 'Accelerates significant transformation.' }
                    ]
                }
            }
        ]
    },

    // Unit 5: IELTS C1 Writing & Speaking Eloquence
    {
        id: 'en-c1-u5-l1',
        courseId: 'english-c1',
        unitId: 'en-c1-u5',
        unitTitle: 'Unit 5: C1 Capstone Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 1,
        title: 'C1 Advanced Synthesis: Grammar & Lexicon Convergence',
        description: 'Barcha murakkab grammatik konstruktsiyalar (Inverted conditionals, fronting, clefts, passive causatives)ni bir butun matnda jamlash.',
        estimatedDurationMinutes: 18,
        icon: '🏛️',
        steps: [
            {
                id: 'en-c1-u5-l1-s1',
                title: 'Oliy Sintaksis Sintezi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Convergence of Advanced Structures',
                    explanation: 'C1 darajadagi professional matn yuqori grammatik rang-baranglikni tabiiy ravishda birlashtiradi: Inverted conditional + Fronting + Nominalization + Cleft sentence.',
                    keyPoints: [
                        '"Had policymakers prioritized sustainable infrastructure a decade ago, the current urban gridlock would not be so acute. What is urgently needed today is not merely incremental funding, but a comprehensive paradigm shift in public transit architecture."'
                    ]
                }
            },
            {
                id: 'en-c1-u5-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri sintaktik strukturani tanlang.',
                    exercises: [
                        { id: 'en-c1-u5-l1-e1', type: 'multiple-choice', prompt: '"_______ the committee to endorse the proposal, execution would commence without delay."', options: ['Were', 'Had', 'Should', 'If were'], correctAnswer: 0, explanation: 'Were the committee to endorse...' }
                    ]
                }
            },
            {
                id: 'en-c1-u5-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u5-l1-q1', question: 'Which sentence demonstrates flawless C1 syntax?', options: ['Seldom has an intellectual discovery catalyzed such profound ethical dilemmas as genetic engineering.', 'Seldom an intellectual discovery has catalyzed dilemmas.', 'Seldom did an intellectual discovery catalyzed.', 'Rarely an intellectual discovery catalyzes.'], correctAnswerIndex: 0, explanation: 'Seldom has an intellectual discovery catalyzed...' },
                        { id: 'en-c1-u5-l1-q2', question: 'Had the warning signals _______ heeded, the catastrophe could have been averted.', options: ['been', 'being', 'be', 'have been'], correctAnswerIndex: 0, explanation: 'Had the signals been heeded (Passive).' },
                        { id: 'en-c1-u5-l1-q3', question: '"What warrants immediate scrutiny is..." Bu qaysi grammatik tuzilma?', options: ['Wh- Cleft sentence for emphasis', 'Passive participle', 'Inverted zero conditional', 'Dangling modifier'], correctAnswerIndex: 0, explanation: 'Wh- Cleft sentence.' },
                        { id: 'en-c1-u5-l1-q4', question: 'Choose the most cohesive and sophisticated academic linker:', options: ['Notwithstanding the aforementioned caveats,', 'Also and so,', 'Like I said before,', 'Anyway moving on,'], correctAnswerIndex: 0, explanation: 'Notwithstanding the aforementioned caveats...' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u5-l2',
        courseId: 'english-c1',
        unitId: 'en-c1-u5',
        unitTitle: 'Unit 5: C1 Capstone Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 2,
        title: 'C1 Advanced Reading: Deconstructing Sociopolitical Bias',
        description: 'Ommaviy axborot vositalari va siyosiy tahlillardagi tarafkashlik va ritorik nayranglarni ochib beruvchi tahliliy o\'qish.',
        estimatedDurationMinutes: 18,
        icon: '📰',
        steps: [
            {
                id: 'en-c1-u5-l2-s1',
                title: 'Tahliliy O\'qish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Media Framing & Rhetorical Manipulation',
                    explanation: 'Axborot maydonidagi manipulyatsiyalar: Framing effect (masalani qaysi burchakdan ko\'rsatish), Loaded language (hissiy bo\'yoqdor so\'zlar), Omission of crucial context.',
                    keyPoints: [
                        'Framing: "Fiscal reform" vs "Austerity cuts"',
                        'Loaded terms: "Freedom fighters" vs "Insurgents"'
                    ]
                }
            },
            {
                id: 'en-c1-u5-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Tarafkashlik turini aniqlang.',
                    exercises: [
                        { id: 'en-c1-u5-l2-e1', type: 'multiple-choice', prompt: 'An article titles an event "Heroic Tax Relief" instead of "Budget Reduction for Healthcare". This is an example of:', options: ['Loaded framing and bias', 'Pure objective science', 'Math formula', 'Translation error'], correctAnswer: 0, explanation: 'Loaded framing and bias.' }
                    ]
                }
            },
            {
                id: 'en-c1-u5-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u5-l2-q1', question: 'What is "framing" in media communication?', options: ['The way information is curated and presented to influence audience perception and judgment', 'Putting a picture in a wooden frame', 'Printing newspapers on color paper', 'Broadcasting sports events'], correctAnswerIndex: 0, explanation: 'Curating and presenting to influence perception.' },
                        { id: 'en-c1-u5-l2-q2', question: '"Omission bias" occurs when a journalist:', options: ['Leaves out critical context or counter-evidence that contradicts the desired narrative', 'Uses too many commas', 'Spells a name wrong', 'Interviews too many experts'], correctAnswerIndex: 0, explanation: 'Leaves out critical context.' },
                        { id: 'en-c1-u5-l2-q3', question: 'Which descriptor is the most neutral and objective?', options: ['The proposed fiscal legislation', 'The disastrous socialist scheme', 'The glorious economic miracle', 'The corrupt corporate handout'], correctAnswerIndex: 0, explanation: 'The proposed fiscal legislation.' },
                        { id: 'en-c1-u5-l2-q4', question: 'Critical media literacy empowers citizens to:', options: ['Discern rhetorical manipulation and evaluate claims based on empirical merit', 'Believe everything on social media', 'Refuse to read any news', 'Only listen to one television channel'], correctAnswerIndex: 0, explanation: 'Discern manipulation and evaluate empirical merit.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u5-l3',
        courseId: 'english-c1',
        unitId: 'en-c1-u5',
        unitTitle: 'Unit 5: C1 Capstone Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 3,
        title: 'C1 High-Level Academic Listening: Scientific Meta-Analysis',
        description: 'Olimlarning yuzlab tadqiqotlarni jamlovchi meta-tahlil ma\'ruzasini tinglash va ilmiy xulosalarni ajratish.',
        estimatedDurationMinutes: 18,
        icon: '🔬',
        steps: [
            {
                id: 'en-c1-u5-l3-s1',
                title: 'Meta-tahlil Ma\'ruzasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Systematic Reviews & Statistical Heterogeneity',
                    explanation: 'Meta-analysis birlamchi tadqiqotlarning natijalarini matematik jihatdan umumlashtiradi. Asosiy tushunchalar: Sample size (tanlanma hajmi), Statistical significance (statistik ahamiyatlilik: p < 0.05), Publication bias (faqat ijobiy natijalarning chop etilishi).',
                    vocabulary: [
                        { term: 'Heterogeneity', reading: '/ˌhet.ər.ə.dʒəˈniː.ə.ti/', meaning: 'Har xillik / Turfa xillik', exampleSentence: 'Statistical heterogeneity was observed.', exampleTranslation: 'Statistik turfa xillik kuzatildi.' }
                    ]
                }
            },
            {
                id: 'en-c1-u5-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Ilmiy xulosani aniqlang.',
                    exercises: [
                        { id: 'en-c1-u5-l3-e1', type: 'multiple-choice', prompt: 'Professor: "While individual cohort studies varied, the synthesized meta-analytic effect size yielded a statistically significant correlation." What is the finding?', options: ['The synthesized evidence confirms a statistically significant correlation', 'The studies proved nothing', 'All data was fabricated', 'No conclusions can ever be drawn'], correctAnswer: 0, explanation: 'Synthesized evidence confirms correlation.' }
                    ]
                }
            },
            {
                id: 'en-c1-u5-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u5-l3-q1', question: 'What is a "systematic review"?', options: ['A rigorous, reproducible synthesis of all available empirical studies on a specific research question', 'A quick glance at a magazine', 'A book review by a student', 'An advertisement for medicine'], correctAnswerIndex: 0, explanation: 'Rigorous reproducible synthesis of studies.' },
                        { id: 'en-c1-u5-l3-q2', question: '"Publication bias" refers to the tendency for journals to:', options: ['Publish statistically positive results while ignoring negative or null findings', 'Print on glossy paper', 'Only publish in French', 'Refuse to print graphs'], correctAnswerIndex: 0, explanation: 'Publish positive while ignoring null findings.' },
                        { id: 'en-c1-u5-l3-q3', question: 'What does "p < 0.05" conventionally indicate in scientific research?', options: ['That the observed result is statistically significant and unlikely due to random chance alone', 'That 5% of patients left', 'That the experiment took 5 hours', 'That the paper has 5 pages'], correctAnswerIndex: 0, explanation: 'Statistically significant result.' },
                        { id: 'en-c1-u5-l3-q4', question: 'A "placebo-controlled, double-blind randomized trial" means:', options: ['Neither participants nor researchers know who received the real treatment versus placebo during testing', 'Everyone is blindfolded', 'Doctors guess the results', 'Patients take whatever medicine they want'], correctAnswerIndex: 0, explanation: 'Neither participants nor researchers know.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u5-l4',
        courseId: 'english-c1',
        unitId: 'en-c1-u5',
        unitTitle: 'Unit 5: C1 Capstone Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 4,
        title: 'C1 Academic Editorial: Policy Recommendations & Reform',
        description: 'Hukumat yoki xalqaro tashkilotlar uchun yuqori darajadagi tahliliy bosh maqola (editorial) va strategik tavsiyanomalar yozish.',
        estimatedDurationMinutes: 18,
        icon: '🏛️',
        steps: [
            {
                id: 'en-c1-u5-l4-s1',
                title: 'Bosh Maqola Yozish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Formulating Policy Editorials',
                    explanation: '1. Situational Analysis: Muammoning miqyosi. 2. Critique of Current Inadequacies: Mavjud kamchiliklar. 3. Actionable Policy Roadmap: Aniq amaliy qadamlar. 4. Strategic Vision: Uzoq muddatli istiqbol.',
                    vocabulary: [
                        { term: 'Actionable', reading: '/ˈæk.ʃən.ə.bəl/', meaning: 'Amalda qo\'llasa bo\'ladigan / Real', exampleSentence: 'We require actionable policy recommendations.', exampleTranslation: 'Bizga amalda qo\'llasa bo\'ladigan siyosiy tavsiyalar kerak.' }
                    ]
                }
            },
            {
                id: 'en-c1-u5-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri siyosiy tavsiya jumlasini tanlang.',
                    exercises: [
                        { id: 'en-c1-u5-l4-e1', type: 'multiple-choice', prompt: 'Which sentence exemplifies an actionable, high-level policy recommendation?', options: ['Policymakers must institute transparent subsidy frameworks to incentivize private capital mobilization in decarbonization.', 'Governments should do good things.', 'Stop bad pollution now please.', 'Make everything green immediately.'], correctAnswer: 0, explanation: 'Policymakers must institute transparent subsidy frameworks...' }
                    ]
                }
            },
            {
                id: 'en-c1-u5-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u5-l4-q1', question: '"Incentivize" nimani bildiradi?', options: ['Rag\'batlantirmoq / Motivatsiya yaratmoq', 'Jazolamoq', 'Taqiqlamoq', 'Yo\'qotmoq'], correctAnswerIndex: 0, explanation: 'Incentivize — Rag\'batlantirmoq.' },
                        { id: 'en-c1-u5-l4-q2', question: 'An editorial reflects the official institutional stance of:', options: ['The publication\'s editorial board or organization', 'A random anonymous reader', 'A commercial sponsor only', 'A fictional character'], correctAnswerIndex: 0, explanation: 'Editorial board/organization.' },
                        { id: 'en-c1-u5-l4-q3', question: 'Which term denotes the practical feasibility and viability of a proposed policy?', options: ['Implementability / Viability', 'Impossibility', 'Fictionality', 'Abstractness'], correctAnswerIndex: 0, explanation: 'Viability / Implementability.' },
                        { id: 'en-c1-u5-l4-q4', question: 'Choose the most persuasive rhetorical closure for a policy paper:', options: ['Decisive legislative action today will secure economic prosperity and environmental resilience for generations to come.', 'And that is the end of the text.', 'We hope someone reads this.', 'Goodbye everyone.'], correctAnswerIndex: 0, explanation: 'Decisive legislative action today...' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c1-u5-l5',
        courseId: 'english-c1',
        unitId: 'en-c1-u5',
        unitTitle: 'Unit 5: C1 Capstone Mastery',
        language: 'en',
        level: 'C1',
        lessonNumber: 5,
        title: 'C1 Capstone Proficiency & C2 Transition Examination',
        description: 'C1 Advanced darajasini to\'liq tasdiqlash va C2 Mastery (IELTS 8.5-9.0) darajasiga yo\'llanma imtihoni.',
        estimatedDurationMinutes: 20,
        icon: '🏆',
        steps: [
            {
                id: 'en-c1-u5-l5-s1',
                title: 'C1 Advanced Bitiruv Imtihoni',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'C1 Advanced (IELTS 7.5 - 8.0) Comprehensive Mastery',
                    explanation: 'Siz murakkab sintaktik inversiyalar, nominalizatsiya, epistemic hedging, akademik ma\'ruzalar tahlili va oratory notiqlik san\'atini to\'liq egalladingiz!',
                    keyPoints: [
                        'Effortless academic and professional writing',
                        'Subtext and implicit meaning decoding across all skills',
                        'Ready for C2 Mastery (IELTS 8.5 - 9.0)'
                    ]
                }
            },
            {
                id: 'en-c1-u5-l5-s2',
                title: 'Kompleks C1 Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Imtihon savoliga to\'g\'ri javob bering.',
                    exercises: [
                        { id: 'en-c1-u5-l5-e1', type: 'multiple-choice', prompt: '"Were the initial findings _______ corroborated by independent trials, this would mark an epochal scientific milestone."', options: ['to be', 'being', 'having been', 'been to'], correctAnswer: 0, explanation: 'Were findings to be corroborated...' }
                    ]
                }
            },
            {
                id: 'en-c1-u5-l5-s3',
                title: 'C1 Yakuniy Sertifikatsiya Testi',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'C1 darajasini muvaffaqiyatli yakunlash uchun barcha savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c1-u5-l5-q1', question: 'Under no circumstances _______ confidential client records be disclosed without explicit judicial authorization.', options: ['should', 'they should', 'did', 'is to'], correctAnswerIndex: 0, explanation: 'Inversion: should confidential records be disclosed.' },
                        { id: 'en-c1-u5-l5-q2', question: 'Had the regulatory framework been updated earlier, the systemic financial contagion _______ mitigated.', options: ['could have been', 'would be', 'can have been', 'is'], correctAnswerIndex: 0, explanation: 'Could have been mitigated.' },
                        { id: 'en-c1-u5-l5-q3', question: '"Ubiquitous" nimani bildiradi?', options: ['Hamma yerda keng tarqalgan / Mavjud bo\'lgan', 'Juda qadimiy', 'Juda xavfli', 'Noma\'lum'], correctAnswerIndex: 0, explanation: 'Ubiquitous — Hamma yerda mavjud.' },
                        { id: 'en-c1-u5-l5-q4', question: 'Which IELTS score corresponds to the C1 Advanced level?', options: ['Band 7.0 to 8.0', 'Band 5.0', 'Band 4.0', 'Band 2.5'], correctAnswerIndex: 0, explanation: 'Band 7.0 to 8.0.' }
                    ]
                }
            }
        ]
    }
];
