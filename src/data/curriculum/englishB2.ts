import { Lesson } from '../../types/lesson';

export const ENGLISH_B2_LESSONS: Lesson[] = [
    {
        "id": "en-b2-u1-l1",
        "courseId": "english-b2",
        "unitId": "en-b2-u1",
        "unitTitle": "Unit 1: Advanced Grammar & Inversion",
        "language": "en",
        "level": "B2",
        "lessonNumber": 1,
        "title": "Negative Inversion (Rarely, Seldom, Not only)",
        "description": "Urg'u berish uchun gap boshida inkor ravishlar bilan inversiya qo'llash.",
        "estimatedDurationMinutes": 16,
        "icon": "🔄",
        "steps": [
            {
                "id": "en-b2-u1-l1-s1",
                "title": "Inversiya Qoidalari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Negative Inversion for Emphasis",
                    "explanation": "Ingliz tilida inkor yoki cheklovchi so'zlar (Rarely, Seldom, Never, Hardly, Under no circumstances, Not only) gap boshiga chiqqanda yordamchi fe'l egadan oldinga o'tadi.",
                    "keyPoints": [
                        "Rarely have I seen such dedication. (I have rarely seen o'rniga)",
                        "Not only did she win the competition, but she also set a world record.",
                        "Hardly had we arrived when it began to pour down."
                    ],
                    "vocabulary": [
                        {
                            "term": "Seldom",
                            "reading": "/ˈsel.dəm/",
                            "meaning": "Kamdan-kam / Kam hollarda",
                            "exampleSentence": "Seldom does one encounter such natural talent.",
                            "exampleTranslation": "Bunday tabiiy iste'dod kamdan-kam uchraydi."
                        },
                        {
                            "term": "Circumstance",
                            "reading": "/ˈsɜː.kəm.stɑːns/",
                            "meaning": "Holat / Vaziyat",
                            "exampleSentence": "Under no circumstances should you leave.",
                            "exampleTranslation": "Hech qanday holatda ketmasligingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Negative Inversion (Rarely, Seldom, Not only)",
                            "meaning": "Urg'u berish uchun gap boshida inkor ravishlar bilan inversiya qo'llash.",
                            "usageNotes": "Ingliz tilida inkor yoki cheklovchi so'zlar (Rarely, Seldom, Never, Hardly, Under no circumstances, Not only) gap boshiga chiqqanda yordamchi fe'l egadan oldinga o'tadi.",
                            "examples": [
                                {
                                    "sentence": "Seldom does one encounter such natural talent.",
                                    "translation": "Bunday tabiiy iste'dod kamdan-kam uchraydi."
                                },
                                {
                                    "sentence": "Under no circumstances should you leave.",
                                    "translation": "Hech qanday holatda ketmasligingiz kerak."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l1-s2",
                "title": "Inversiya Mashqi",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri inversiya shaklini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u1-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Rarely _______ such an inspiring speech.\"",
                            "options": [
                                "have I heard",
                                "did I heard",
                                "I heard",
                                "I have heard"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Rarely + have I heard."
                        },
                        {
                            "id": "en-b2-u1-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Under no circumstances should you leave.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Circumstance",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Circumstance\" (Holat / Vaziyat) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u1-l1-q1",
                            "question": "Not only _______ late, but he also forgot the documents.",
                            "options": [
                                "did he arrive",
                                "was he arrived",
                                "he did arrive",
                                "he arrived"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Not only did he arrive..."
                        },
                        {
                            "id": "en-b2-u1-l1-q2",
                            "question": "Under no circumstances _______ the door unattended.",
                            "options": [
                                "you leave",
                                "leaving",
                                "you must leave",
                                "must you leave"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Under no circumstances must you leave."
                        },
                        {
                            "id": "en-b2-u1-l1-q3",
                            "question": "Hardly had they started the journey _______ the engine failed.",
                            "options": [
                                "that",
                                "than",
                                "when",
                                "while"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Hardly had ... when ..."
                        },
                        {
                            "id": "en-b2-u1-l1-q4",
                            "question": "No sooner had she finished her degree _______ she got a prestigious job offer.",
                            "options": [
                                "when",
                                "than",
                                "that",
                                "then"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "No sooner had ... than ..."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u1-l2",
        "courseId": "english-b2",
        "unitId": "en-b2-u1",
        "unitTitle": "Unit 1: Advanced Grammar & Inversion",
        "language": "en",
        "level": "B2",
        "lessonNumber": 2,
        "title": "Cleft Sentences for Emphasis (It was... that / What I need is...)",
        "description": "Gapdagi ma'lum bir bo'lakka urg'u berish uchun tuzilmalar.",
        "estimatedDurationMinutes": 15,
        "icon": "🎯",
        "steps": [
            {
                "id": "en-b2-u1-l2-s1",
                "title": "Cleft Sentences Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Cleft Sentences (It is / What...)",
                    "explanation": "Tinglovchi e'tiborini aniq bir faktga qaratish: \"It was John that solved the problem\", \"What we really need is more investment in education\".",
                    "keyPoints": [
                        "It + be + focus + that/who: It was yesterday that they signed the contract.",
                        "Wh- clause + be + focus: What surprised me was his calm reaction."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Cleft Sentences for Emphasis (It was... that / What I need is...)",
                            "meaning": "Gapdagi ma'lum bir bo'lakka urg'u berish uchun tuzilmalar.",
                            "usageNotes": "Tinglovchi e'tiborini aniq bir faktga qaratish: \"It was John that solved the problem\", \"What we really need is more investment in education\".",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri cleft strukturani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u1-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ I admire most about her is her relentless work ethic.\"",
                            "options": [
                                "It",
                                "What",
                                "That",
                                "Which"
                            ],
                            "correctAnswer": 1,
                            "explanation": "What I admire most is..."
                        },
                        {
                            "id": "en-b2-u1-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She understood every subtle nuance of the language.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Nuance"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Nuance\" (Nozik farq, qirra) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u1-l2-q1",
                            "question": "It was the financial crisis _______ prompted major regulatory changes.",
                            "options": [
                                "where",
                                "that",
                                "what",
                                "whom"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "It was ... that ..."
                        },
                        {
                            "id": "en-b2-u1-l2-q2",
                            "question": "All _______ want is an opportunity to prove myself.",
                            "options": [
                                "which I",
                                "that what I",
                                "I",
                                "what I"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "All I want is..."
                        },
                        {
                            "id": "en-b2-u1-l2-q3",
                            "question": "What we need right now _______ clear guidelines from management.",
                            "options": [
                                "are",
                                "being",
                                "were",
                                "is"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "What we need is..."
                        },
                        {
                            "id": "en-b2-u1-l2-q4",
                            "question": "\"It was in Samarkand that we first met.\" Gap nimaga urg'u bermoqda?",
                            "options": [
                                "Uchrashgan joyga (Samarqandga)",
                                "Kim bilan uchrashganiga",
                                "Uchrashgan vaqtga",
                                "Nega uchrashganiga"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Joyga urg'u berilgan."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u1-l3",
        "courseId": "english-b2",
        "unitId": "en-b2-u1",
        "unitTitle": "Unit 1: Advanced Grammar & Inversion",
        "language": "en",
        "level": "B2",
        "lessonNumber": 3,
        "title": "Advanced Passive & Causative (have something done)",
        "description": "Xizmatlardan foydalanish (have/get something done) va shaxsiy bo'lmagan majhul nisbat (It is believed that...).",
        "estimatedDurationMinutes": 16,
        "icon": "🛠️",
        "steps": [
            {
                "id": "en-b2-u1-l3-s1",
                "title": "Kauzativ va Shaxsiy Bo'lmagan Majhul",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Causative & Impersonal Passive",
                    "explanation": "1. Causative: Have/get + Object + V3 (I had my car repaired = Mexanik tuzatib berdi). 2. Impersonal Passive: It is widely believed that... / He is reported to have resigned.",
                    "keyPoints": [
                        "I had my teeth cleaned yesterday.",
                        "The suspect is considered to be dangerous."
                    ],
                    "vocabulary": [
                        {
                            "term": "Impersonal",
                            "reading": "/ɪmˈpɜː.sən.əl/",
                            "meaning": "Shaxsiy bo'lmagan / Umumiy",
                            "exampleSentence": "It is an impersonal scientific claim.",
                            "exampleTranslation": "Bu umumiy ilmiy da'vodir."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Advanced Passive & Causative (have something done)",
                            "meaning": "Xizmatlardan foydalanish (have/get something done) va shaxsiy bo'lmagan majhul nisbat (It is believed that...).",
                            "usageNotes": "1. Causative: Have/get + Object + V3 (I had my car repaired = Mexanik tuzatib berdi). 2. Impersonal Passive: It is widely believed that... / He is reported to have resigned.",
                            "examples": [
                                {
                                    "sentence": "It is an impersonal scientific claim.",
                                    "translation": "Bu umumiy ilmiy da'vodir."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri kauzativ shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u1-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I need to have my laptop _______ (repair) tomorrow.\"",
                            "options": [
                                "repair",
                                "repairing",
                                "repaired",
                                "repairs"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Have + object + V3: repaired."
                        },
                        {
                            "id": "en-b2-u1-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Ensure structural coherence throughout your essay.\"",
                            "options": [
                                "Coherence",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Coherence\" (Mantiqiy bogʻliqlik, izchillik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u1-l3-q1",
                            "question": "The company is reported _______ revenues by 20% this quarter.",
                            "options": [
                                "increased",
                                "increasing",
                                "to have increased",
                                "to increase had"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Reported to have increased."
                        },
                        {
                            "id": "en-b2-u1-l3-q2",
                            "question": "She had her wedding dress _______ by a famous Italian designer.",
                            "options": [
                                "design",
                                "designed",
                                "designs",
                                "designing"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Had + object + designed."
                        },
                        {
                            "id": "en-b2-u1-l3-q3",
                            "question": "It is estimated that renewable energy _______ 50% of global demand by 2035.",
                            "options": [
                                "will supply",
                                "is supplied",
                                "had supplied",
                                "supplied"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "It is estimated that ... will supply."
                        },
                        {
                            "id": "en-b2-u1-l3-q4",
                            "question": "\"He got his hair cut.\" Bu nimani anglatadi?",
                            "options": [
                                "U o'zi sochini kesdi",
                                "U sochini bo'yatdi",
                                "U sartaroshxonaga bormadi",
                                "Sartarosh uning sochini kesib qo'ydi"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Causative: xizmatdan foydalanish."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u1-l4",
        "courseId": "english-b2",
        "unitId": "en-b2-u1",
        "unitTitle": "Unit 1: Advanced Grammar & Inversion",
        "language": "en",
        "level": "B2",
        "lessonNumber": 4,
        "title": "Participle Clauses (Having seen, Walking down...)",
        "description": "Sifatdoshli oborotlar orqali gaplarni qisqartirish va akademik uslubni boyitish.",
        "estimatedDurationMinutes": 15,
        "icon": "✂️",
        "steps": [
            {
                "id": "en-b2-u1-l4-s1",
                "title": "Participle Clauses Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Present & Perfect Participle Clauses",
                    "explanation": "Bir xil egaga ega bo'lgan ergash gaplarni qisqartirish: \"Because he felt tired, he went to bed\" -> \"Feeling tired, he went to bed\". \"After she had finished her report, she left\" -> \"Having finished her report, she left\".",
                    "keyPoints": [
                        "Present participle (V-ing): Feeling tired, Seeing the danger.",
                        "Perfect participle (Having + V3): Having passed the exam, she felt relieved.",
                        "Passive participle (V3 / Having been V3): Built in 1890, the building is historic."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Participle Clauses (Having seen, Walking down...)",
                            "meaning": "Sifatdoshli oborotlar orqali gaplarni qisqartirish va akademik uslubni boyitish.",
                            "usageNotes": "Bir xil egaga ega bo'lgan ergash gaplarni qisqartirish: \"Because he felt tired, he went to bed\" -> \"Feeling tired, he went to bed\". \"After she had finished her report, she left\" -> \"Having finished her report, she left\".",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri participle shaklini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u1-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ (finish) all his tasks, he turned off his computer and left.\"",
                            "options": [
                                "Finishing",
                                "To finish",
                                "Finished by",
                                "Having finished"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Avval sodir bo'lgan harakat: Having finished."
                        },
                        {
                            "id": "en-b2-u1-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He presented a compelling argument in the debate.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Compelling",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Compelling\" (Juda ishonarli, maftunkor) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u1-l4-q1",
                            "question": "_______ in 1912, the Titanic sank on its maiden voyage.",
                            "options": [
                                "Building",
                                "To build",
                                "Having built",
                                "Built"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Passive participle: Built in 1912."
                        },
                        {
                            "id": "en-b2-u1-l4-q2",
                            "question": "_______ that she had lost her ticket, she spoke to the conductor.",
                            "options": [
                                "Realizing",
                                "Having realizing",
                                "Realized",
                                "Realize"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Realizing that..."
                        },
                        {
                            "id": "en-b2-u1-l4-q3",
                            "question": "_______ rejected by three publishers, the manuscript was finally accepted.",
                            "options": [
                                "Having",
                                "Been",
                                "Having been",
                                "Being have"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Having been rejected (Perfect passive)."
                        },
                        {
                            "id": "en-b2-u1-l4-q4",
                            "question": "Which sentence has a dangling modifier error?",
                            "options": [
                                "Walking down the street, the trees were beautiful.",
                                "Having studied hard, she passed the exam.",
                                "Feeling exhausted, he took a nap.",
                                "Walking down the street, I noticed the beautiful trees."
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Trees o'zi yura olmaydi (dangling participle)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u1-l5",
        "courseId": "english-b2",
        "unitId": "en-b2-u1",
        "unitTitle": "Unit 1: Advanced Grammar & Inversion",
        "language": "en",
        "level": "B2",
        "lessonNumber": 5,
        "title": "B2 Reading: Cognitive Science & Neuroplasticity",
        "description": "Miyaning moslashuvchanligi va kognitiv psixologiya bo'yicha B2 darajadagi akademik matn.",
        "estimatedDurationMinutes": 16,
        "icon": "🧠",
        "steps": [
            {
                "id": "en-b2-u1-l5-s1",
                "title": "Akademik Matn",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Neuroplasticity: The Adaptable Brain",
                    "explanation": "Miyaning o'zgaruvchan tabiati haqidagi ilmiy matnni o'qing.",
                    "keyPoints": [
                        "Neuroplasticity refers to the brain's remarkable capacity to reorganize synaptic connections in response to learning or experience.",
                        "Historically, neuroscientists believed that neural circuitry became rigid after early childhood.",
                        "However, modern neuroimaging demonstrates that sustained intellectual challenge stimulates neurogenesis throughout adulthood.",
                        "Consequently, deliberate cognitive training can mitigate age-related memory deterioration."
                    ],
                    "vocabulary": [
                        {
                            "term": "Capacity",
                            "reading": "/kəˈpæs.ə.ti/",
                            "meaning": "Sig'im / Qobiliyat",
                            "exampleSentence": "The brain has vast adaptive capacity.",
                            "exampleTranslation": "Miyaning moslashuvchanlik qobiliyati ulkandir."
                        },
                        {
                            "term": "Deterioration",
                            "reading": "/dɪˌtɪə.ri.əˈreɪ.ʃən/",
                            "meaning": "Yomonlashuv / Pasayish",
                            "exampleSentence": "Cognitive exercise prevents deterioration.",
                            "exampleTranslation": "Aqliy mashqlar pasayishning oldini oladi."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B2 Reading: Cognitive Science & Neuroplasticity",
                            "meaning": "Miyaning moslashuvchanligi va kognitiv psixologiya bo'yicha B2 darajadagi akademik matn.",
                            "usageNotes": "Miyaning o'zgaruvchan tabiati haqidagi ilmiy matnni o'qing.",
                            "examples": [
                                {
                                    "sentence": "The brain has vast adaptive capacity.",
                                    "translation": "Miyaning moslashuvchanlik qobiliyati ulkandir."
                                },
                                {
                                    "sentence": "Cognitive exercise prevents deterioration.",
                                    "translation": "Aqliy mashqlar pasayishning oldini oladi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l5-s2",
                "title": "Tahlil Mashqi",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Matn asosida savolga javob bering.",
                    "exercises": [
                        {
                            "id": "en-b2-u1-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "What did historical neuroscientists incorrectly believe about the human brain?",
                            "options": [
                                "That neural circuitry became rigid after childhood",
                                "That memory never decayed",
                                "That adults learned faster than children",
                                "That the brain had no neurons"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Historically believed neural circuitry became rigid after childhood."
                        },
                        {
                            "id": "en-b2-u1-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Cognitive exercise prevents deterioration.\"",
                            "options": [
                                "Deterioration",
                                "reluctance",
                                "delay",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Deterioration\" (Yomonlashuv / Pasayish) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u1-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u1-l5-q1",
                            "question": "What does \"neuroplasticity\" mean according to the text?",
                            "options": [
                                "The brain's capacity to reorganize synaptic connections",
                                "A surgical procedure on the brain",
                                "The physical weight of the brain",
                                "The loss of memory in elderly adults"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Capacity to reorganize synaptic connections."
                        },
                        {
                            "id": "en-b2-u1-l5-q2",
                            "question": "What can mitigate age-related cognitive deterioration?",
                            "options": [
                                "Avoiding reading",
                                "Sleeping less",
                                "Refusing to learn languages",
                                "Deliberate cognitive training"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Deliberate cognitive training."
                        },
                        {
                            "id": "en-b2-u1-l5-q3",
                            "question": "\"Mitigate\" so'zining ma'nodoshini toping:",
                            "options": [
                                "Reduce / Lessen",
                                "Increase",
                                "Destroy",
                                "Produce"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Mitigate — Yengillashtirmoq, kamaytirmoq."
                        },
                        {
                            "id": "en-b2-u1-l5-q4",
                            "question": "What modern tool proved that adult brains continue to adapt?",
                            "options": [
                                "Blood tests",
                                "Neuroimaging",
                                "Ancient manuscripts",
                                "Microscopes from 1800"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Modern neuroimaging."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u2-l1",
        "courseId": "english-b2",
        "unitId": "en-b2-u2",
        "unitTitle": "Unit 2: Conditionals & Unreal Past",
        "language": "en",
        "level": "B2",
        "lessonNumber": 1,
        "title": "Third Conditional (Unreal Past & Regrets)",
        "description": "O'tgan zamondagi amalga oshmagan voqealar (If + Had V3, Would have V3).",
        "estimatedDurationMinutes": 15,
        "icon": "⏳",
        "steps": [
            {
                "id": "en-b2-u2-l1-s1",
                "title": "Third Conditional Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Third Conditional: If + Had + V3, Would Have + V3",
                    "explanation": "O'tib ketgan ish-harakatlar haqida afsuslanish yoki boshqacha bo'lishi mumkin bo'lgan natijalar: If I had studied harder, I would have passed the exam (Lekin o'qimadim va yiqildim).",
                    "keyPoints": [
                        "If we had taken a taxi, we wouldn't have missed the flight.",
                        "Could have / Might have: If she had applied, she might have won the grant."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Third Conditional (Unreal Past & Regrets)",
                            "meaning": "O'tgan zamondagi amalga oshmagan voqealar (If + Had V3, Would have V3).",
                            "usageNotes": "O'tib ketgan ish-harakatlar haqida afsuslanish yoki boshqacha bo'lishi mumkin bo'lgan natijalar: If I had studied harder, I would have passed the exam (Lekin o'qimadim va yiqildim).",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u2-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"If they had warned us, we _______ (not / invest) in that company.\"",
                            "options": [
                                "wouldn't invest",
                                "hadn't invested",
                                "won't have invested",
                                "wouldn't have invested"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Third conditional: wouldn't have invested."
                        },
                        {
                            "id": "en-b2-u2-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She understood every subtle nuance of the language.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Nuance"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Nuance\" (Nozik farq, qirra) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u2-l1-q1",
                            "question": "If I _______ about your arrival, I would have met you at the airport.",
                            "options": [
                                "have known",
                                "would know",
                                "knew",
                                "had known"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "If I had known..."
                        },
                        {
                            "id": "en-b2-u2-l1-q2",
                            "question": "She _______ the interview if she hadn't arrived late.",
                            "options": [
                                "will have aced",
                                "might ace",
                                "might have aced",
                                "had aced"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Might have aced."
                        },
                        {
                            "id": "en-b2-u2-l1-q3",
                            "question": "Had you told me earlier, I _______ arranged different accommodations.",
                            "options": [
                                "will have",
                                "would have",
                                "would",
                                "had"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Inverted third conditional: Had you told me, I would have..."
                        },
                        {
                            "id": "en-b2-u2-l1-q4",
                            "question": "\"If I hadn't broken my leg, I would have won.\" Bu jumla nimani bildiradi?",
                            "options": [
                                "Oyog'im sindi va g'olib bo'la olmadim",
                                "Kelajakda oyog'im sinishi mumkin",
                                "Hozir oyog'im og'rimoqda",
                                "Oyog'im sinmadi va g'olib bo'ldim"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "O'tgan zamondagi afsus."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u2-l2",
        "courseId": "english-b2",
        "unitId": "en-b2-u2",
        "unitTitle": "Unit 2: Conditionals & Unreal Past",
        "language": "en",
        "level": "B2",
        "lessonNumber": 2,
        "title": "Mixed Conditionals (Past Cause -> Present Result)",
        "description": "Aralash shart ergash gaplar: o'tmishdagi harakatning hozirgi holatga ta'siri.",
        "estimatedDurationMinutes": 16,
        "icon": "🔀",
        "steps": [
            {
                "id": "en-b2-u2-l2-s1",
                "title": "Mixed Conditionals Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Mixed Conditionals: Past & Present Interplay",
                    "explanation": "1. O'tmishdagi harakat -> Hozirgi natija: If + Had V3, Would + Verb (If I had won the lottery yesterday, I would be rich today). 2. Hozirgi doimiy holat -> O'tgan zamondagi natija: If + Past Simple, Would have V3 (If I were braver, I would have spoken up yesterday).",
                    "keyPoints": [
                        "If he had taken the medicine, he wouldn't feel sick now.",
                        "If I spoke fluent German, I would have accepted the job offer in Munich."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Mixed Conditionals (Past Cause -> Present Result)",
                            "meaning": "Aralash shart ergash gaplar: o'tmishdagi harakatning hozirgi holatga ta'siri.",
                            "usageNotes": "1. O'tmishdagi harakat -> Hozirgi natija: If + Had V3, Would + Verb (If I had won the lottery yesterday, I would be rich today). 2. Hozirgi doimiy holat -> O'tgan zamondagi natija: If + Past Simple, Would have V3 (If I were braver, I would have spoken up yesterday).",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri aralash shart shaklini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u2-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"If I had slept well last night, I _______ (not / be) so tired right now.\"",
                            "options": [
                                "am not",
                                "won't be",
                                "wouldn't be",
                                "wouldn't have been"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Right now (hozirgi natija) bo'lgani uchun: wouldn't be."
                        },
                        {
                            "id": "en-b2-u2-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Ensure structural coherence throughout your essay.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Coherence",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Coherence\" (Mantiqiy bogʻliqlik, izchillik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u2-l2-q1",
                            "question": "If she had saved money in her youth, she _______ struggling financially today.",
                            "options": [
                                "wouldn't have been",
                                "isn't",
                                "wouldn't be",
                                "won't be"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Today bilan: wouldn't be."
                        },
                        {
                            "id": "en-b2-u2-l2-q2",
                            "question": "If I _______ afraid of flying, I would have traveled to New York with you last month.",
                            "options": [
                                "hadn't been",
                                "won't be",
                                "am not",
                                "weren't"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Hozirgi doimiy qo'rquv: If I weren't afraid..."
                        },
                        {
                            "id": "en-b2-u2-l2-q3",
                            "question": "Had he checked the engine before departure, we _______ stranded on the road right now.",
                            "options": [
                                "wouldn't be",
                                "hadn't been",
                                "wouldn't have been",
                                "won't be"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Right now: wouldn't be."
                        },
                        {
                            "id": "en-b2-u2-l2-q4",
                            "question": "Which sentence demonstrates a Mixed Conditional correctly?",
                            "options": [
                                "If I ate breakfast, I wouldn't have been hungry now.",
                                "If I eat breakfast, I would be full.",
                                "If I had eaten breakfast, I wouldn't be hungry now.",
                                "If I had eaten, I won't be hungry."
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "If I had eaten ..., I wouldn't be hungry now."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u2-l3",
        "courseId": "english-b2",
        "unitId": "en-b2-u2",
        "unitTitle": "Unit 2: Conditionals & Unreal Past",
        "language": "en",
        "level": "B2",
        "lessonNumber": 3,
        "title": "Past Modals of Deduction (must have, might have, can't have been)",
        "description": "O'tgan zamondagi voqealar bo'yicha mantiqiy xulosalar chiqarish.",
        "estimatedDurationMinutes": 15,
        "icon": "🔍",
        "steps": [
            {
                "id": "en-b2-u2-l3-s1",
                "title": "O'tgan Zamon Modal Xulosalari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Must have, Might have, Can't have + V3",
                    "explanation": "Must have done — 95% ishonch (\"aniq qilgan bo'lsa kerak\"). Might have done — 50% ehtimol (\"qilgan bo'lishi mumkin\"). Can't / Couldn't have done — 0% ehtimol (\"qilgan bo'lishi aslo mumkin emas\").",
                    "keyPoints": [
                        "The ground is soaked; it must have rained heavily last night.",
                        "He wasn't at the meeting; he might have forgotten the schedule.",
                        "She was in Paris yesterday; she can't have stolen the jewels in Tokyo!"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Past Modals of Deduction (must have, might have, can't have been)",
                            "meaning": "O'tgan zamondagi voqealar bo'yicha mantiqiy xulosalar chiqarish.",
                            "usageNotes": "Must have done — 95% ishonch (\"aniq qilgan bo'lsa kerak\"). Might have done — 50% ehtimol (\"qilgan bo'lishi mumkin\"). Can't / Couldn't have done — 0% ehtimol (\"qilgan bo'lishi aslo mumkin emas\").",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri modal xulosani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u2-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"He got 100% on the IELTS test. He _______ (study) exceptionally hard.\"",
                            "options": [
                                "can't have studied",
                                "must have studied",
                                "should study",
                                "might study"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Must have studied."
                        },
                        {
                            "id": "en-b2-u2-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He presented a compelling argument in the debate.\"",
                            "options": [
                                "doubt",
                                "Compelling",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Compelling\" (Juda ishonarli, maftunkor) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u2-l3-q1",
                            "question": "The front door was locked from inside. The burglar _______ entered through the window.",
                            "options": [
                                "can't have",
                                "must have",
                                "would",
                                "should have"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Must have entered."
                        },
                        {
                            "id": "en-b2-u2-l3-q2",
                            "question": "He _______ seen me at the conference because I didn't attend.",
                            "options": [
                                "can't have",
                                "might have",
                                "should have",
                                "must have"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Imkonsiz: can't have seen."
                        },
                        {
                            "id": "en-b2-u2-l3-q3",
                            "question": "Where is my parcel? — The courier _______ delivered it to your neighbor.",
                            "options": [
                                "must to",
                                "can have",
                                "ought",
                                "might have"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Ehtimol: might have delivered."
                        },
                        {
                            "id": "en-b2-u2-l3-q4",
                            "question": "You _______ told him the secret! Now everybody knows.",
                            "options": [
                                "shouldn't have",
                                "must have",
                                "might have",
                                "couldn't have"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Qilmasligingiz kerak edi (afsus/tanqid): shouldn't have told."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u2-l4",
        "courseId": "english-b2",
        "unitId": "en-b2-u2",
        "unitTitle": "Unit 2: Conditionals & Unreal Past",
        "language": "en",
        "level": "B2",
        "lessonNumber": 4,
        "title": "Subjunctive & Formal Expressions (It's high time / Had better / I'd rather)",
        "description": "Rasmiy sub'yunktiv va xohish-istak konstruktsiyalari.",
        "estimatedDurationMinutes": 14,
        "icon": "⚖️",
        "steps": [
            {
                "id": "en-b2-u2-l4-s1",
                "title": "Subjunctive & Unreal Structures",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "It's High Time & Would Rather",
                    "explanation": "1. It's high time + Subject + Past Simple: \"It's high time we took action\" (allaqachon vaqti keldi). 2. I'd rather + Subject + Past Simple: \"I'd rather you didn't smoke here\". 3. Had better + Bare Infinitive: \"You had better leave now\" (ogohlantirish).",
                    "keyPoints": [
                        "It is essential that he be informed immediately (Formal Subjunctive).",
                        "I would rather stay home tonight."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Subjunctive & Formal Expressions (It's high time / Had better / I'd rather)",
                            "meaning": "Rasmiy sub'yunktiv va xohish-istak konstruktsiyalari.",
                            "usageNotes": "1. It's high time + Subject + Past Simple: \"It's high time we took action\" (allaqachon vaqti keldi). 2. I'd rather + Subject + Past Simple: \"I'd rather you didn't smoke here\". 3. Had better + Bare Infinitive: \"You had better leave now\" (ogohlantirish).",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u2-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"It is high time governments _______ (invest) more heavily in green energy.\"",
                            "options": [
                                "invested",
                                "investing",
                                "invest",
                                "have invested"
                            ],
                            "correctAnswer": 0,
                            "explanation": "It is high time + Past Simple: invested."
                        },
                        {
                            "id": "en-b2-u2-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"You must substantiate your claims with empirical evidence.\"",
                            "options": [
                                "Substantiate",
                                "reluctance",
                                "doubt",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Substantiate\" (Asoslab bermoq, isbotlamoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u2-l4-q1",
                            "question": "I would rather you _______ mention this topic during the interview.",
                            "options": [
                                "didn't",
                                "won't",
                                "don't",
                                "haven't"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "I would rather you didn't..."
                        },
                        {
                            "id": "en-b2-u2-l4-q2",
                            "question": "You had better _______ an umbrella; it looks like rain.",
                            "options": [
                                "to take",
                                "took",
                                "take",
                                "taking"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Had better + bare infinitive: take."
                        },
                        {
                            "id": "en-b2-u2-l4-q3",
                            "question": "The board recommended that the CEO _______ immediately.",
                            "options": [
                                "resign",
                                "to resign",
                                "resigned",
                                "resigns"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Formal subjunctive base form: resign."
                        },
                        {
                            "id": "en-b2-u2-l4-q4",
                            "question": "\"It's about time we started.\" Bu jumla nimani ifodalaydi?",
                            "options": [
                                "Kechikkanimizni tan olmaslikni",
                                "Boshlash taqiqlanganini",
                                "Boshlashga hali erta ekanini",
                                "Boshlash vaqti allaqachon yetib kelganini"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Allaqachon vaqti kelgan."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u2-l5",
        "courseId": "english-b2",
        "unitId": "en-b2-u2",
        "unitTitle": "Unit 2: Conditionals & Unreal Past",
        "language": "en",
        "level": "B2",
        "lessonNumber": 5,
        "title": "B2 Academic Vocabulary: AWL Collocations & Precision",
        "description": "Akademik so'zlar ro'yxati (AWL) va ilmiy kollokatsiyalar.",
        "estimatedDurationMinutes": 15,
        "icon": "📚",
        "steps": [
            {
                "id": "en-b2-u2-l5-s1",
                "title": "AWL Leksikasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Academic Word List (AWL) Sublist 1-3",
                    "explanation": "Akademik yozma nutq va IELTS 6.5+ uchun yuqori darajadagi so'zlar.",
                    "vocabulary": [
                        {
                            "term": "Substantial",
                            "reading": "/səbˈstæn.ʃəl/",
                            "meaning": "Salmoqli / Sezilarli",
                            "exampleSentence": "There has been substantial progress.",
                            "exampleTranslation": "Sezilarli yutuqqa erishildi."
                        },
                        {
                            "term": "Paradigm",
                            "reading": "/ˈpær.ə.daɪm/",
                            "meaning": "Qolip / Paradigma",
                            "exampleSentence": "This marked a paradigm shift in physics.",
                            "exampleTranslation": "Bu fizikada yangi paradigmaga burilish yasadi."
                        },
                        {
                            "term": "Empirical",
                            "reading": "/ɪmˈpɪr.ɪ.kəl/",
                            "meaning": "Tajribaviy / Dalillarga asoslangan",
                            "exampleSentence": "Empirical evidence supports the hypothesis.",
                            "exampleTranslation": "Tajribaviy dalillar farazni tasdiqlaydi."
                        }
                    ],
                    "keyPoints": [
                        "Conduct research (research qilmoq)",
                        "Draw conclusions (xulosa chiqarmoq)",
                        "Substantiate claims (da'volarni dalillamoq)"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B2 Academic Vocabulary: AWL Collocations & Precision",
                            "meaning": "Akademik so'zlar ro'yxati (AWL) va ilmiy kollokatsiyalar.",
                            "usageNotes": "Akademik yozma nutq va IELTS 6.5+ uchun yuqori darajadagi so'zlar.",
                            "examples": [
                                {
                                    "sentence": "There has been substantial progress.",
                                    "translation": "Sezilarli yutuqqa erishildi."
                                },
                                {
                                    "sentence": "This marked a paradigm shift in physics.",
                                    "translation": "Bu fizikada yangi paradigmaga burilish yasadi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l5-s2",
                "title": "Akademik Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri akademik kollokatsiyani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u2-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"The researchers failed to provide _______ evidence for their theory.\"",
                            "options": [
                                "imaginative",
                                "casual",
                                "fictional",
                                "empirical"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Empirical evidence (dalillarga asoslangan isbot)."
                        },
                        {
                            "id": "en-b2-u2-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"This marked a paradigm shift in physics.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Paradigm"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Paradigm\" (Qolip / Paradigma) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u2-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u2-l5-q1",
                            "question": "Which verb collocates with \"a survey\"?",
                            "options": [
                                "Make",
                                "Perform",
                                "Fabricate",
                                "Conduct"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Conduct a survey."
                        },
                        {
                            "id": "en-b2-u2-l5-q2",
                            "question": "\"Substantial increase\" nimani anglatadi?",
                            "options": [
                                "Sezilarli darajada katta o'sish",
                                "Kichik pasayish",
                                "Sekin to'xtash",
                                "Noaniq tebranish"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Sezilarli katta o'sish."
                        },
                        {
                            "id": "en-b2-u2-l5-q3",
                            "question": "The findings _______ our initial assumptions.",
                            "options": [
                                "contradicting",
                                "contradict",
                                "contradiction",
                                "contradictory"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Contradict assumptions (farazlarga zid kelmoq)."
                        },
                        {
                            "id": "en-b2-u2-l5-q4",
                            "question": "Choose the most academic synonym for \"big problem\":",
                            "options": [
                                "Huge mess",
                                "Bad thing",
                                "Major challenge / Significant issue",
                                "Giant trouble"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Major challenge / Significant issue."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u3-l1",
        "courseId": "english-b2",
        "unitId": "en-b2-u3",
        "unitTitle": "Unit 3: Academic Discourse & Rhetoric",
        "language": "en",
        "level": "B2",
        "lessonNumber": 1,
        "title": "Advanced Discourse Markers (Conversely, Furthermore, In light of)",
        "description": "Murakkab fikrlar o'rtasida mantiqiy bog'liqlik o'rnatish.",
        "estimatedDurationMinutes": 15,
        "icon": "🔤",
        "steps": [
            {
                "id": "en-b2-u3-l1-s1",
                "title": "Diskurs Vositalari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Sophisticated Discourse Markers",
                    "explanation": "Conversely (Aksincha), In light of (Inobatga olgan holda), Notwithstanding (Shunga qaramasdan), In essence (Mohiyatan).",
                    "vocabulary": [
                        {
                            "term": "Conversely",
                            "reading": "/ˈkɒn.vɜːs.li/",
                            "meaning": "Aksincha / Teskarisiga",
                            "exampleSentence": "Some thrive under pressure; conversely, others falter.",
                            "exampleTranslation": "Ayrimlar bosim ostida o'sadi, aksincha, boshqalar qiyinchilikka uchraydi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Advanced Discourse Markers (Conversely, Furthermore, In light of)",
                            "meaning": "Murakkab fikrlar o'rtasida mantiqiy bog'liqlik o'rnatish.",
                            "usageNotes": "Conversely (Aksincha), In light of (Inobatga olgan holda), Notwithstanding (Shunga qaramasdan), In essence (Mohiyatan).",
                            "examples": [
                                {
                                    "sentence": "Some thrive under pressure; conversely, others falter.",
                                    "translation": "Ayrimlar bosim ostida o'sadi, aksincha, boshqalar qiyinchilikka uchraydi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri bog'lovchini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u3-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ recent data, we must revise our annual targets.\"",
                            "options": [
                                "In light of",
                                "By light of",
                                "In light with",
                                "To light of"
                            ],
                            "correctAnswer": 0,
                            "explanation": "In light of (inobatga olib)."
                        },
                        {
                            "id": "en-b2-u3-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Ensure structural coherence throughout your essay.\"",
                            "options": [
                                "Coherence",
                                "reluctance",
                                "doubt",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Coherence\" (Mantiqiy bogʻliqlik, izchillik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u3-l1-q1",
                            "question": "_______ the economic slowdown, the company posted record profits.",
                            "options": [
                                "Notwithstanding",
                                "Despite of",
                                "Although",
                                "Whereas"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Notwithstanding the slowdown."
                        },
                        {
                            "id": "en-b2-u3-l1-q2",
                            "question": "\"In essence\" iborasining ma'nosi:",
                            "options": [
                                "Boshida",
                                "Tasodifan",
                                "Kutilmaganda",
                                "Mohiyatan / Aslida"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "In essence — Mohiyatan."
                        },
                        {
                            "id": "en-b2-u3-l1-q3",
                            "question": "He presented a persuasive argument. _______, his methodology was flawed.",
                            "options": [
                                "Furthermore",
                                "Consequently",
                                "Nonetheless",
                                "Moreover"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Nonetheless (Shunga qaramay)."
                        },
                        {
                            "id": "en-b2-u3-l1-q4",
                            "question": "Which connector expresses a direct contrast between two sentences?",
                            "options": [
                                "Namely,",
                                "Conversely,",
                                "In addition,",
                                "For instance,"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Conversely (Aksincha)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u3-l2",
        "courseId": "english-b2",
        "unitId": "en-b2-u3",
        "unitTitle": "Unit 3: Academic Discourse & Rhetoric",
        "language": "en",
        "level": "B2",
        "lessonNumber": 2,
        "title": "Hedging & Modesty in Academic Stance (tends to, arguably)",
        "description": "Akademik matnlarda ehtiyotkorlik va dalillarni bo'rttirmasdan ifodalash san'ati.",
        "estimatedDurationMinutes": 14,
        "icon": "🛡️",
        "steps": [
            {
                "id": "en-b2-u3-l2-s1",
                "title": "Hedging Usullari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Hedging in Academic Writing",
                    "explanation": "Akademik tilda 100% mutlaq da'volar o'rniga (e.g. \"Computers destroy brains\" EMAS), ehtiyotkor konstruktsiyalar qo'llaniladi: \"Excessive screen time tends to impair concentration\", \"This arguably represents a breakthrough\".",
                    "keyPoints": [
                        "Verbs: appear to, seem to, tend to, suggest that",
                        "Adverbs: arguably, presumably, potentially, largely"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Hedging & Modesty in Academic Stance (tends to, arguably)",
                            "meaning": "Akademik matnlarda ehtiyotkorlik va dalillarni bo'rttirmasdan ifodalash san'ati.",
                            "usageNotes": "Akademik tilda 100% mutlaq da'volar o'rniga (e.g. \"Computers destroy brains\" EMAS), ehtiyotkor konstruktsiyalar qo'llaniladi: \"Excessive screen time tends to impair concentration\", \"This arguably represents a breakthrough\".",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri hedging ifodasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u3-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "Which sentence demonstrates proper academic hedging?",
                            "options": [
                                "Sleep deprivation definitely destroys everyone's brain.",
                                "The findings suggest that sleep deprivation may reduce cognitive capacity.",
                                "Sleep has 100% effect on everything.",
                                "No one can ever think without 10 hours of sleep."
                            ],
                            "correctAnswer": 1,
                            "explanation": "Suggest that ... may reduce ..."
                        },
                        {
                            "id": "en-b2-u3-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He presented a compelling argument in the debate.\"",
                            "options": [
                                "doubt",
                                "Compelling",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Compelling\" (Juda ishonarli, maftunkor) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u3-l2-q1",
                            "question": "\"Arguably\" nimani bildiradi?",
                            "options": [
                                "Mutlaqo noto'g'ri",
                                "Ehtimol / Fikrlarga ko'ra (isbotlanishi mumkin bo'lgan holda)",
                                "G'azab bilan",
                                "Hech qachon"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Arguably — Da'vo qilish mumkinki / Ehtimol."
                        },
                        {
                            "id": "en-b2-u3-l2-q2",
                            "question": "The preliminary survey _______ to indicate a shift in consumer preferences.",
                            "options": [
                                "appearedly",
                                "is appearing",
                                "appears",
                                "appear"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Appears to indicate."
                        },
                        {
                            "id": "en-b2-u3-l2-q3",
                            "question": "Why do researchers use hedging?",
                            "options": [
                                "To confuse readers",
                                "Because they don't know English",
                                "To make texts longer",
                                "To avoid making unsupported absolute claims"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "To avoid unsupported absolute claims."
                        },
                        {
                            "id": "en-b2-u3-l2-q4",
                            "question": "Which modal verb is most frequently used for hedging?",
                            "options": [
                                "May / Might / Could",
                                "Need / Dare",
                                "Will / Won't",
                                "Must / Shall"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "May / Might / Could."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u3-l3",
        "courseId": "english-b2",
        "unitId": "en-b2-u3",
        "unitTitle": "Unit 3: Academic Discourse & Rhetoric",
        "language": "en",
        "level": "B2",
        "lessonNumber": 3,
        "title": "Global Economics, Trade & Consumerism",
        "description": "Iqtisodiy jarayonlar, bozor dinamikasi va xalqaro savdo terminologiyasi.",
        "estimatedDurationMinutes": 15,
        "icon": "📈",
        "steps": [
            {
                "id": "en-b2-u3-l3-s1",
                "title": "Iqtisodiyot Leksikasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Economic & Trade Vocabulary",
                    "explanation": "Supply and demand (talab va taklif), Inflation (inflyatsiya), Fiscal policy (soliq-byudjet siyosati), Commodity prices (xomashyo narxlari).",
                    "vocabulary": [
                        {
                            "term": "Inflation",
                            "reading": "/ɪnˈfleɪ.ʃən/",
                            "meaning": "Inflyatsiya / Narxlar oshishi",
                            "exampleSentence": "Central banks raise interest rates to curb inflation.",
                            "exampleTranslation": "Markaziy banklar inflyatsiyani jilovlash uchun foiz stavkalarini oshiradi."
                        },
                        {
                            "term": "Revenue",
                            "reading": "/ˈrev.ən.juː/",
                            "meaning": "Daromad / Tushum",
                            "exampleSentence": "Company revenue surged by 15%.",
                            "exampleTranslation": "Kompaniya daromadi 15% ga o'sdi."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Global Economics, Trade & Consumerism",
                            "meaning": "Iqtisodiy jarayonlar, bozor dinamikasi va xalqaro savdo terminologiyasi.",
                            "usageNotes": "Supply and demand (talab va taklif), Inflation (inflyatsiya), Fiscal policy (soliq-byudjet siyosati), Commodity prices (xomashyo narxlari).",
                            "examples": [
                                {
                                    "sentence": "Central banks raise interest rates to curb inflation.",
                                    "translation": "Markaziy banklar inflyatsiyani jilovlash uchun foiz stavkalarini oshiradi."
                                },
                                {
                                    "sentence": "Company revenue surged by 15%.",
                                    "translation": "Kompaniya daromadi 15% ga o'sdi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri iqtisodiy atamani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u3-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"When supply is low and demand is high, prices usually _______.\"",
                            "options": [
                                "stabilize to zero",
                                "diminish",
                                "soar / increase",
                                "plummet"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Narxlar ko'tariladi: soar / increase."
                        },
                        {
                            "id": "en-b2-u3-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Company revenue surged by 15%.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Revenue",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Revenue\" (Daromad / Tushum) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u3-l3-q1",
                            "question": "\"Plummet\" so'zining ma'nosi nima?",
                            "options": [
                                "Barqaror turmoq",
                                "Ikkilanmoq",
                                "Keskin pasaymoq / Qulamoq",
                                "Sekin o'smoq"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Plummet — Keskin tushib ketmoq."
                        },
                        {
                            "id": "en-b2-u3-l3-q2",
                            "question": "Gross Domestic Product (GDP) measures a country's total _______ output.",
                            "options": [
                                "educational",
                                "economic",
                                "military",
                                "weather"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Economic output."
                        },
                        {
                            "id": "en-b2-u3-l3-q3",
                            "question": "Tariffs are taxes imposed on _______ goods.",
                            "options": [
                                "imported",
                                "domestic",
                                "free",
                                "discarded"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Imported goods (import tovarlari)."
                        },
                        {
                            "id": "en-b2-u3-l3-q4",
                            "question": "What happens in a competitive market?",
                            "options": [
                                "Prices become infinite",
                                "Only one company exists",
                                "All production ceases",
                                "Consumers benefit from quality and price choices"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Consumers benefit."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u3-l4",
        "courseId": "english-b2",
        "unitId": "en-b2-u3",
        "unitTitle": "Unit 3: Academic Discourse & Rhetoric",
        "language": "en",
        "level": "B2",
        "lessonNumber": 4,
        "title": "Environmental Sustainability & Climate Solutions",
        "description": "Ekologik yechimlar, uglerod neytralligi va yashil energetika tahlili.",
        "estimatedDurationMinutes": 15,
        "icon": "🌍",
        "steps": [
            {
                "id": "en-b2-u3-l4-s1",
                "title": "Yashil Barqarorlik",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Climate Mitigation Strategies",
                    "explanation": "Decarbonization (uglerodsizlantirish), Circular economy (aylanma iqtisodiyot), Biodiversity conservation (bioxilma-xillikni saqlash).",
                    "vocabulary": [
                        {
                            "term": "Biodiversity",
                            "reading": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
                            "meaning": "Bioxilma-xillik",
                            "exampleSentence": "Rainforests boast immense biodiversity.",
                            "exampleTranslation": "Yomg'irli o'rmonlar boy bioxilma-xillikka ega."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Environmental Sustainability & Climate Solutions",
                            "meaning": "Ekologik yechimlar, uglerod neytralligi va yashil energetika tahlili.",
                            "usageNotes": "Decarbonization (uglerodsizlantirish), Circular economy (aylanma iqtisodiyot), Biodiversity conservation (bioxilma-xillikni saqlash).",
                            "examples": [
                                {
                                    "sentence": "Rainforests boast immense biodiversity.",
                                    "translation": "Yomg'irli o'rmonlar boy bioxilma-xillikka ega."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri so'zni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u3-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"A circular economy aims to eliminate _______ through recycling and reuse.\"",
                            "options": [
                                "oxygen",
                                "food",
                                "wealth",
                                "waste"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Eliminate waste."
                        },
                        {
                            "id": "en-b2-u3-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She understood every subtle nuance of the language.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Nuance"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Nuance\" (Nozik farq, qirra) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u3-l4-q1",
                            "question": "\"Carbon neutral\" means:",
                            "options": [
                                "Stopping all industry",
                                "Building nuclear weapons",
                                "Burning maximum coal",
                                "Balancing emitted carbon with carbon removal"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Balancing emitted carbon."
                        },
                        {
                            "id": "en-b2-u3-l4-q2",
                            "question": "Afforestation refers to:",
                            "options": [
                                "Planting new forests on barren land",
                                "Building dams",
                                "Hunting wild animals",
                                "Cutting down forests"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Planting new forests."
                        },
                        {
                            "id": "en-b2-u3-l4-q3",
                            "question": "Which sector is a primary contributor to greenhouse gas emissions?",
                            "options": [
                                "Library book lending",
                                "Handicraft weaving",
                                "Fossil-fuel energy generation",
                                "Organic farming without machinery"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Fossil-fuel energy."
                        },
                        {
                            "id": "en-b2-u3-l4-q4",
                            "question": "\"Sustainable development meets the needs of the present without compromising future generations.\" Bu nima?",
                            "options": [
                                "Barqaror rivojlanishning klassik ta'rifi",
                                "Iqtisodiy qonun buzilishi",
                                "Eski ertak",
                                "Tijorat reklamasi"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Classic definition of sustainable development."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u3-l5",
        "courseId": "english-b2",
        "unitId": "en-b2-u3",
        "unitTitle": "Unit 3: Academic Discourse & Rhetoric",
        "language": "en",
        "level": "B2",
        "lessonNumber": 5,
        "title": "B2 Paraphrasing Techniques for High Band Scores",
        "description": "Sinonimlar, so'z turkumini o'zgartirish va grammatik strukturani restrukturizatsiya qilish orqali mukammal parafraz.",
        "estimatedDurationMinutes": 16,
        "icon": "🔄",
        "steps": [
            {
                "id": "en-b2-u3-l5-s1",
                "title": "Parafraz Qoidalari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "The Art of Paraphrasing for IELTS",
                    "explanation": "1. Synonym substitution (Sinonimlar almashtirish). 2. Changing word form (Otni fe'lga yoki sifatga o'zgartirish). 3. Changing active to passive. 4. Reversing sentence clauses.",
                    "keyPoints": [
                        "Original: \"Many young people prefer purchasing goods via online platforms because it is convenient.\"",
                        "Paraphrased: \"Digital commerce is increasingly favored by the youth demographic owing to its accessibility and speed.\""
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B2 Paraphrasing Techniques for High Band Scores",
                            "meaning": "Sinonimlar, so'z turkumini o'zgartirish va grammatik strukturani restrukturizatsiya qilish orqali mukammal parafraz.",
                            "usageNotes": "1. Synonym substitution (Sinonimlar almashtirish). 2. Changing word form (Otni fe'lga yoki sifatga o'zgartirish). 3. Changing active to passive. 4. Reversing sentence clauses.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Eng yaxshi parafraz variantini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u3-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "Original: \"Governments should allocate funds to public transportation.\" Which is the best paraphrase?",
                            "options": [
                                "Authorities ought to channel financial resources into public transit infrastructure.",
                                "Governments must spend money on cars.",
                                "People need to walk to work.",
                                "Public transport is bad and governments know it."
                            ],
                            "correctAnswer": 0,
                            "explanation": "Authorities ought to channel financial resources..."
                        },
                        {
                            "id": "en-b2-u3-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Ensure structural coherence throughout your essay.\"",
                            "options": [
                                "Coherence",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Coherence\" (Mantiqiy bogʻliqlik, izchillik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u3-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u3-l5-q1",
                            "question": "Original: \"Eating fast food leads to obesity.\" Best paraphrase:",
                            "options": [
                                "The consumption of processed junk food contributes to excessive weight gain.",
                                "Fast food is delicious and healthy.",
                                "Eating food makes people run faster.",
                                "Obesity causes people to cook burgers."
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Consumption of processed food contributes to weight gain."
                        },
                        {
                            "id": "en-b2-u3-l5-q2",
                            "question": "What is a common error in weak paraphrasing?",
                            "options": [
                                "Using accurate academic synonyms",
                                "Changing grammatical voice correctly",
                                "Maintaining the original meaning",
                                "Swapping words without understanding collocation nuance"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Swapping words blindly without collocations."
                        },
                        {
                            "id": "en-b2-u3-l5-q3",
                            "question": "Original: \"Tourism brings enormous financial benefits to local communities.\" Paraphrase:",
                            "options": [
                                "Regional populations derive substantial economic advantages from the travel industry.",
                                "Local money is spent on traveling abroad.",
                                "Financial institutions dislike tourists.",
                                "Tourists destroy hotels."
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Regional populations derive substantial economic advantages."
                        },
                        {
                            "id": "en-b2-u3-l5-q4",
                            "question": "Which technique was used: \"He solved the problem\" -> \"A solution was formulated by him\"?",
                            "options": [
                                "Pure copy-paste",
                                "Active to passive voice conversion and nominalization",
                                "Deletion of facts",
                                "Contraction"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Passive voice & nominalization."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u4-l1",
        "courseId": "english-b2",
        "unitId": "en-b2-u4",
        "unitTitle": "Unit 4: IELTS Reading & Listening Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 1,
        "title": "IELTS Reading: True / False / Not Given Mastery",
        "description": "Faktga asoslangan savollarni ajratish: TRUE (mos), FALSE (qarama-qarshi), NOT GIVEN (ma'lumot yo'q).",
        "estimatedDurationMinutes": 16,
        "icon": "🎯",
        "steps": [
            {
                "id": "en-b2-u4-l1-s1",
                "title": "T/F/NG Strategiyasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "True, False, Not Given Framework",
                    "explanation": "TRUE: Matndagi ma'no bilan 100% mos keladi. FALSE: Matndagi fikrga to'g'ridan-to'g'ri zid keladi (qarama-qarshi). NOT GIVEN: Matnda bu haqda ma'lumot berilmagan yoki xulosa chiqarishga yetarli dalil yo'q.",
                    "keyPoints": [
                        "Taxmin qilmang! Faqat matnda yozilganidan kelib chiqing.",
                        "Ehtiyot bo'ling: \"always\", \"only\", \"all\" kabi mutlaq so'zlar ko'pincha FALSE yoki NOT GIVEN bo'ladi."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Reading: True / False / Not Given Mastery",
                            "meaning": "Faktga asoslangan savollarni ajratish: TRUE (mos), FALSE (qarama-qarshi), NOT GIVEN (ma'lumot yo'q).",
                            "usageNotes": "TRUE: Matndagi ma'no bilan 100% mos keladi. FALSE: Matndagi fikrga to'g'ridan-to'g'ri zid keladi (qarama-qarshi). NOT GIVEN: Matnda bu haqda ma'lumot berilmagan yoki xulosa chiqarishga yetarli dalil yo'q.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l1-s2",
                "title": "Amaliy Tahlil",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Matn bo'yicha to'g'ri hukmni belgilang.",
                    "exercises": [
                        {
                            "id": "en-b2-u4-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "Text: \"Alexander Fleming discovered penicillin in 1928 by accidental contamination of a petri dish.\" Question: \"Fleming spent decades intentionally searching for penicillin.\" -> ?",
                            "options": [
                                "TRUE",
                                "FALSE",
                                "NOT GIVEN"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Matnda tasodifan (accidental) topgani aytilgan, shuning uchun \"spent decades intentionally searching\" FALSE."
                        },
                        {
                            "id": "en-b2-u4-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He presented a compelling argument in the debate.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Compelling",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Compelling\" (Juda ishonarli, maftunkor) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u4-l1-q1",
                            "question": "Text: \"Solar panels convert approximately 20% of sunlight into electricity.\" Statement: \"All solar panels achieve over 50% efficiency.\"",
                            "options": [
                                "TRUE",
                                "FALSE",
                                "NOT GIVEN"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "FALSE (20% is far below 50%)."
                        },
                        {
                            "id": "en-b2-u4-l1-q2",
                            "question": "Text: \"The library was founded in 1845 and expanded in 1910.\" Statement: \"The library architect was born in Scotland.\"",
                            "options": [
                                "FALSE",
                                "TRUE",
                                "NOT GIVEN"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "NOT GIVEN (arxitektorning vatani haqida ma'lumot yo'q)."
                        },
                        {
                            "id": "en-b2-u4-l1-q3",
                            "question": "Text: \"Regular aerobic exercise reduces the risk of cardiovascular disease.\" Statement: \"Cardiovascular health benefits from aerobic workouts.\"",
                            "options": [
                                "NOT GIVEN",
                                "TRUE",
                                "FALSE"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "TRUE (parafraz qilingan fakt)."
                        },
                        {
                            "id": "en-b2-u4-l1-q4",
                            "question": "What is the golden rule of NOT GIVEN?",
                            "options": [
                                "If you cannot find clear confirmation or direct contradiction in the passage, it is NOT GIVEN",
                                "If it sounds logical in real life, mark it TRUE",
                                "Always guess FALSE",
                                "NOT GIVEN is never the correct answer"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "No confirmation or direct contradiction."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u4-l2",
        "courseId": "english-b2",
        "unitId": "en-b2-u4",
        "unitTitle": "Unit 4: IELTS Reading & Listening Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 2,
        "title": "IELTS Reading: Headings Matching & Skimming",
        "description": "Paragraf sarlavhalarini moslashtirish, tezkor ko'zdan kechirish (skimming) texnikasi.",
        "estimatedDurationMinutes": 16,
        "icon": "📑",
        "steps": [
            {
                "id": "en-b2-u4-l2-s1",
                "title": "Matching Headings Strategiyasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Skimming and Topic Sentences",
                    "explanation": "Paragrafning birinchi va oxirgi 1-2 gapini o'qib, asosiy g'oyani (gist) aniqlang. Faqat bitta so'z o'xshashligiga aldanmang — butun paragrafning maqsadini tushuning.",
                    "keyPoints": [
                        "Sarlavhalardagi kalit so'zlarni belgilang.",
                        "Paragraf detallariga emas, umumiy xulosasiga e'tibor bering."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Reading: Headings Matching & Skimming",
                            "meaning": "Paragraf sarlavhalarini moslashtirish, tezkor ko'zdan kechirish (skimming) texnikasi.",
                            "usageNotes": "Paragrafning birinchi va oxirgi 1-2 gapini o'qib, asosiy g'oyani (gist) aniqlang. Faqat bitta so'z o'xshashligiga aldanmang — butun paragrafning maqsadini tushuning.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Paragrafga mos sarlavhani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u4-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "Paragraph: \"Despite initial funding shortages and public skepticism, the urban metro project was completed ahead of schedule and generated unprecedented passenger volume.\" Best Heading:",
                            "options": [
                                "Why passengers avoid public trains",
                                "The financial collapse of city transit",
                                "An unexpected infrastructure success",
                                "Technological failures in construction"
                            ],
                            "correctAnswer": 2,
                            "explanation": "An unexpected infrastructure success."
                        },
                        {
                            "id": "en-b2-u4-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"You must substantiate your claims with empirical evidence.\"",
                            "options": [
                                "Substantiate",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Substantiate\" (Asoslab bermoq, isbotlamoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u4-l2-q1",
                            "question": "What is the primary goal of skimming in IELTS Reading?",
                            "options": [
                                "To memorize all numbers",
                                "To count every comma",
                                "To quickly understand the general theme and structure without reading every word",
                                "To find grammar mistakes"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Understand general theme quickly."
                        },
                        {
                            "id": "en-b2-u4-l2-q2",
                            "question": "Where is the main idea of a paragraph most frequently located?",
                            "options": [
                                "In the margin",
                                "In the title of the book",
                                "In the footnote",
                                "In the opening 1-2 sentences (topic sentence)"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Opening sentences."
                        },
                        {
                            "id": "en-b2-u4-l2-q3",
                            "question": "If two headings seem similar, what should you do?",
                            "options": [
                                "Analyze the specific focus and nuance of each heading against the text",
                                "Skip the question",
                                "Choose randomly",
                                "Pick the longest one"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Analyze specific focus."
                        },
                        {
                            "id": "en-b2-u4-l2-q4",
                            "question": "What is scanning used for in IELTS Reading?",
                            "options": [
                                "Understanding abstract poetry",
                                "Enjoying a novel",
                                "Locating specific facts, numbers, dates or names rapidly",
                                "Translating every word"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Locating specific facts rapidly."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u4-l3",
        "courseId": "english-b2",
        "unitId": "en-b2-u4",
        "unitTitle": "Unit 4: IELTS Reading & Listening Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 3,
        "title": "IELTS Listening: Form Completion & Distractors",
        "description": "1-qism eshitish testi: anketalarni to'ldirish, raqamlar, harflar va chalg'ituvchi (distractor) javoblar.",
        "estimatedDurationMinutes": 15,
        "icon": "🎧",
        "steps": [
            {
                "id": "en-b2-u4-l3-s1",
                "title": "Distractorlardan Saqlanish",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Form Completion & Auditory Distractors",
                    "explanation": "IELTS Listeningda so'zlovchilar ko'pincha dastlab bitta ma'lumot aytib, so'ng tuzatish kiritadilar: \"My number is 5543... oh sorry, that is my old number, it is 5548\". To'g'ri javob doim so'nggi tuzatilgan variant bo'ladi!",
                    "keyPoints": [
                        "Imloga (spelling) va katta harflarga e'tibor bering.",
                        "So'zlar chegarasini tekshiring (NO MORE THAN TWO WORDS AND/OR A NUMBER)."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Listening: Form Completion & Distractors",
                            "meaning": "1-qism eshitish testi: anketalarni to'ldirish, raqamlar, harflar va chalg'ituvchi (distractor) javoblar.",
                            "usageNotes": "IELTS Listeningda so'zlovchilar ko'pincha dastlab bitta ma'lumot aytib, so'ng tuzatish kiritadilar: \"My number is 5543... oh sorry, that is my old number, it is 5548\". To'g'ri javob doim so'nggi tuzatilgan variant bo'ladi!",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l3-s2",
                "title": "Eshitish Mashqi",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Tinglab to'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u4-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "Speaker: \"We initially planned to meet on Tuesday, but the room is booked, so let's meet on Thursday at 4 PM.\" When is the meeting?",
                            "options": [
                                "Friday",
                                "Thursday",
                                "Tuesday",
                                "Wednesday"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Tuzatilgan yakuniy sana: Thursday."
                        },
                        {
                            "id": "en-b2-u4-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She understood every subtle nuance of the language.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Nuance"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Nuance\" (Nozik farq, qirra) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u4-l3-q1",
                            "question": "Speaker: \"My post code is SW19... wait, no, my new address is SW14 8NP.\" What is the correct postcode?",
                            "options": [
                                "SW14",
                                "SW14 8NP",
                                "SW19",
                                "SW19 8NP"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "SW14 8NP."
                        },
                        {
                            "id": "en-b2-u4-l3-q2",
                            "question": "If the instruction says \"NO MORE THAN ONE WORD\", which answer is acceptable?",
                            "options": [
                                "Hospital",
                                "A hospital",
                                "The big hospital",
                                "City hospital center"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Faqat bitta so'z: Hospital."
                        },
                        {
                            "id": "en-b2-u4-l3-q3",
                            "question": "What should you do during the 30 seconds preparation time before each section?",
                            "options": [
                                "Close your eyes and wait",
                                "Think about lunch",
                                "Erase previous answers",
                                "Read the questions and predict what type of information (noun, date, number) is missing"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Predict information type."
                        },
                        {
                            "id": "en-b2-u4-l3-q4",
                            "question": "How are plural nouns scored if the audio specifies a plural (e.g. \"books\" instead of \"book\")?",
                            "options": [
                                "Singular is marked wrong if plural was required",
                                "It doesn't matter",
                                "Spelling is ignored",
                                "They give half marks"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Must match singular/plural accurately."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u4-l4",
        "courseId": "english-b2",
        "unitId": "en-b2-u4",
        "unitTitle": "Unit 4: IELTS Reading & Listening Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 4,
        "title": "IELTS Listening: Section 3 & 4 Academic Discussions",
        "description": "Talabalar va professorlar o'rtasidagi murakkab akademik munozaralarni tahlil qilish.",
        "estimatedDurationMinutes": 16,
        "icon": "🎓",
        "steps": [
            {
                "id": "en-b2-u4-l4-s1",
                "title": "Akademik Munozara Tahlili",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Section 3 & 4 Strategies",
                    "explanation": "Section 3 da 2-3 kishi tadqiqot yoki topshiriqni muhokama qiladi. Section 4 da 1 kishi akademik ma'ruza o'qiydi. So'zlovchilarning fikri, roziligi yoki e'tiroziga e'tibor qaratish kerak.",
                    "keyPoints": [
                        "Sinonimlar orqali javoblarni topish (Audio: \"investigate thoroughly\" -> Option: \"conduct comprehensive research\").",
                        "Belgilar (signpost words): \"Turning now to...\", \"Furthermore...\", \"In conclusion...\"."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Listening: Section 3 & 4 Academic Discussions",
                            "meaning": "Talabalar va professorlar o'rtasidagi murakkab akademik munozaralarni tahlil qilish.",
                            "usageNotes": "Section 3 da 2-3 kishi tadqiqot yoki topshiriqni muhokama qiladi. Section 4 da 1 kishi akademik ma'ruza o'qiydi. So'zlovchilarning fikri, roziligi yoki e'tiroziga e'tibor qaratish kerak.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri xulosani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u4-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "Professor: \"While your survey data is adequate, your statistical methodology requires substantial refinement.\" What does the professor mean?",
                            "options": [
                                "The statistical methods need improvement",
                                "No changes are required",
                                "The student failed the whole course",
                                "The survey was completely useless"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Statistical methodology requires refinement."
                        },
                        {
                            "id": "en-b2-u4-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Ensure structural coherence throughout your essay.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Coherence",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Coherence\" (Mantiqiy bogʻliqlik, izchillik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u4-l4-q1",
                            "question": "What are \"signpost words\" in academic lectures?",
                            "options": [
                                "Transition words that signal a change of topic or structure",
                                "Difficult Greek words",
                                "Spelling mistakes",
                                "Road traffic words"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Transition words signaling topic structure."
                        },
                        {
                            "id": "en-b2-u4-l4-q2",
                            "question": "In Section 4, how many times is the lecture played?",
                            "options": [
                                "Twice",
                                "As many times as you want",
                                "Once only",
                                "Three times"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "IELTS da audio faqat 1 marta eshittiriladi."
                        },
                        {
                            "id": "en-b2-u4-l4-q3",
                            "question": "If you miss one question during the audio, what should you do immediately?",
                            "options": [
                                "Move on immediately to the next question to avoid losing the track",
                                "Ask the invigilator to rewind",
                                "Panic and stop listening",
                                "Leave the exam room"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Move on to the next question."
                        },
                        {
                            "id": "en-b2-u4-l4-q4",
                            "question": "Audio: \"The primary impediment to expansion was inadequate logistics.\" What is the answer for: \"Main obstacle was _______\"?",
                            "options": [
                                "rich investors",
                                "fast trains",
                                "sunny weather",
                                "inadequate logistics"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Impediment = obstacle -> inadequate logistics."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u4-l5",
        "courseId": "english-b2",
        "unitId": "en-b2-u4",
        "unitTitle": "Unit 4: IELTS Reading & Listening Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 5,
        "title": "B2 / IELTS 6.5 Reading & Listening Integrated Drill",
        "description": "O'qish va eshitish ko'nikmalarini birlashtiruvchi B2 darajadagi amaliy test.",
        "estimatedDurationMinutes": 18,
        "icon": "🏆",
        "steps": [
            {
                "id": "en-b2-u4-l5-s1",
                "title": "Kompleks Tahlil",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Integrated IELTS 6.5 Competencies",
                    "explanation": "Reading va Listening bo'limlarida 40 tadan savol beriladi. Band 6.5 olish uchun kamida 26-29 ta to'g'ri javob talab etiladi.",
                    "keyPoints": [
                        "Time management: 20 minutes per reading passage.",
                        "Paraphrasing recognition across all skills."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B2 / IELTS 6.5 Reading & Listening Integrated Drill",
                            "meaning": "O'qish va eshitish ko'nikmalarini birlashtiruvchi B2 darajadagi amaliy test.",
                            "usageNotes": "Reading va Listening bo'limlarida 40 tadan savol beriladi. Band 6.5 olish uchun kamida 26-29 ta to'g'ri javob talab etiladi.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l5-s2",
                "title": "Sinov Mashqi",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u4-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "Which skill is vital across both IELTS Reading and Listening?",
                            "options": [
                                "Translating into native language word-for-word",
                                "Writing quickly with a pencil",
                                "Memorizing the dictionary",
                                "Recognizing paraphrases and synonyms"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Recognizing paraphrases and synonyms."
                        },
                        {
                            "id": "en-b2-u4-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He presented a compelling argument in the debate.\"",
                            "options": [
                                "doubt",
                                "Compelling",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Compelling\" (Juda ishonarli, maftunkor) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u4-l5-s3",
                "title": "B2 Yakuniy Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u4-l5-q1",
                            "question": "How many passages are there in the IELTS Academic Reading test?",
                            "options": [
                                "2 passages",
                                "4 passages",
                                "5 passages",
                                "3 passages"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "3 passages."
                        },
                        {
                            "id": "en-b2-u4-l5-q2",
                            "question": "How many total questions are in the IELTS Reading test?",
                            "options": [
                                "40 questions",
                                "50 questions",
                                "25 questions",
                                "30 questions"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "40 questions."
                        },
                        {
                            "id": "en-b2-u4-l5-q3",
                            "question": "Is extra time given to transfer answers in IELTS Reading on paper?",
                            "options": [
                                "Yes, 10 minutes are provided",
                                "No, answers must be written directly onto the answer sheet within the 60 minutes",
                                "Yes, 15 minutes",
                                "Yes, 5 minutes are provided"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Readingda qo'shimcha transfer vaqti berilmaydi (Listeningda 10 daqiqa bor)."
                        },
                        {
                            "id": "en-b2-u4-l5-q4",
                            "question": "What is the total duration of the IELTS Academic Reading test?",
                            "options": [
                                "90 minutes",
                                "45 minutes",
                                "60 minutes",
                                "30 minutes"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "60 minutes."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u5-l1",
        "courseId": "english-b2",
        "unitId": "en-b2-u5",
        "unitTitle": "Unit 5: IELTS Writing Task 1 & 2 Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 1,
        "title": "IELTS Writing Task 1: Line Graphs & Bar Charts",
        "description": "Grafik va diagrammalarni tahlil qilish, umumiy ko'rinish (overview) va dinamika tili.",
        "estimatedDurationMinutes": 16,
        "icon": "📊",
        "steps": [
            {
                "id": "en-b2-u5-l1-s1",
                "title": "Task 1 Strukturasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Academic Writing Task 1 Structure",
                    "explanation": "1. Introduction: Savolni parafraz qilish. 2. Overview: Eng asosiy 2-3 ta tendensiyani umumlashtirish (sonlarsiz). 3. Body 1 & Body 2: Tafsilotlar, solishtirishlar va aniq raqamlar.",
                    "keyPoints": [
                        "Overview bo'lmasa — maksimal Band 5 beriladi!",
                        "Tendensiya so'zlari: increased steadily, fluctuated wildly, reached a peak of, plummeted dramatically."
                    ],
                    "vocabulary": [
                        {
                            "term": "Fluctuate",
                            "reading": "/ˈflʌk.tʃu.eɪt/",
                            "meaning": "Tebranmoq / O'zgarib turmoq",
                            "exampleSentence": "Oil prices fluctuated throughout the year.",
                            "exampleTranslation": "Neft narxi yil davomida tebranib turdi."
                        },
                        {
                            "term": "Overview",
                            "reading": "/ˈəʊ.və.vjuː/",
                            "meaning": "Umumiy xulosa / Sharh",
                            "exampleSentence": "The overview captures key trends.",
                            "exampleTranslation": "Umumiy sharh asosiy tendensiyalarni o'zida aks ettiradi."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Writing Task 1: Line Graphs & Bar Charts",
                            "meaning": "Grafik va diagrammalarni tahlil qilish, umumiy ko'rinish (overview) va dinamika tili.",
                            "usageNotes": "1. Introduction: Savolni parafraz qilish. 2. Overview: Eng asosiy 2-3 ta tendensiyani umumlashtirish (sonlarsiz). 3. Body 1 & Body 2: Tafsilotlar, solishtirishlar va aniq raqamlar.",
                            "examples": [
                                {
                                    "sentence": "Oil prices fluctuated throughout the year.",
                                    "translation": "Neft narxi yil davomida tebranib turdi."
                                },
                                {
                                    "sentence": "The overview captures key trends.",
                                    "translation": "Umumiy sharh asosiy tendensiyalarni o'zida aks ettiradi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri Task 1 iborasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u5-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Overall, renewable energy consumption _______ (experienced) a steady upward trend.\"",
                            "options": [
                                "was experienced",
                                "has experience",
                                "experienced",
                                "experiencing"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Experienced a steady upward trend."
                        },
                        {
                            "id": "en-b2-u5-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The overview captures key trends.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Overview",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Overview\" (Umumiy xulosa / Sharh) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u5-l1-q1",
                            "question": "What is the minimum word count for IELTS Academic Writing Task 1?",
                            "options": [
                                "100 words",
                                "200 words",
                                "150 words",
                                "250 words"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "150 words minimum."
                        },
                        {
                            "id": "en-b2-u5-l1-q2",
                            "question": "Why is an \"Overview\" paragraph essential in Task 1?",
                            "options": [
                                "It is optional and not graded",
                                "Without an overview, Task Achievement score cannot exceed Band 5",
                                "It adds colors to the chart",
                                "It counts as Task 2"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Cannot exceed Band 5 without an overview."
                        },
                        {
                            "id": "en-b2-u5-l1-q3",
                            "question": "Which phrase describes reaching the highest point?",
                            "options": [
                                "Reached a peak of",
                                "Bottomed out at",
                                "Remained flat at",
                                "Decreased slightly to"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Reached a peak of."
                        },
                        {
                            "id": "en-b2-u5-l1-q4",
                            "question": "Should you give your personal opinions in IELTS Task 1?",
                            "options": [
                                "Yes, always say which country is best",
                                "Yes, write about your life",
                                "Only in the conclusion",
                                "No, never — only describe what is shown in the chart"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Never give personal opinions in Task 1."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u5-l2",
        "courseId": "english-b2",
        "unitId": "en-b2-u5",
        "unitTitle": "Unit 5: IELTS Writing Task 1 & 2 Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 2,
        "title": "IELTS Writing Task 1: Process Diagrams & Maps",
        "description": "Jarayonlar (ishlab chiqarish bosqichlari) va xaritalardagi o'zgarishlarni tasvirlash.",
        "estimatedDurationMinutes": 15,
        "icon": "🗺️",
        "steps": [
            {
                "id": "en-b2-u5-l2-s1",
                "title": "Jarayon va Xarita Tili",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Process Diagrams & Map Descriptions",
                    "explanation": "Jarayonda majhul nisbat (Passive Voice) va ketma-ketlik bog'lovchilari (Initially, Subsequently, Following this, In the final stage) qo'llaniladi. Xaritalarda joylashuv va o'zgarish fe'llari: demolished, constructed, converted into, expanded.",
                    "vocabulary": [
                        {
                            "term": "Subsequently",
                            "reading": "/ˈsʌb.sɪ.kwənt.li/",
                            "meaning": "Shundan so'ng / Keyinchalik",
                            "exampleSentence": "The raw materials are subsequently heated.",
                            "exampleTranslation": "Xomashyo shundan so'ng qizdiriladi."
                        },
                        {
                            "term": "Demolish",
                            "reading": "/dɪˈmɒl.ɪʃ/",
                            "meaning": "Buzib tashlamoq (binoni)",
                            "exampleSentence": "The old warehouse was demolished.",
                            "exampleTranslation": "Eski omborxona buzib tashlandi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Writing Task 1: Process Diagrams & Maps",
                            "meaning": "Jarayonlar (ishlab chiqarish bosqichlari) va xaritalardagi o'zgarishlarni tasvirlash.",
                            "usageNotes": "Jarayonda majhul nisbat (Passive Voice) va ketma-ketlik bog'lovchilari (Initially, Subsequently, Following this, In the final stage) qo'llaniladi. Xaritalarda joylashuv va o'zgarish fe'llari: demolished, constructed, converted into, expanded.",
                            "examples": [
                                {
                                    "sentence": "The raw materials are subsequently heated.",
                                    "translation": "Xomashyo shundan so'ng qizdiriladi."
                                },
                                {
                                    "sentence": "The old warehouse was demolished.",
                                    "translation": "Eski omborxona buzib tashlandi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri so'zni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u5-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"The former industrial zone was converted _______ a public recreational park.\"",
                            "options": [
                                "for",
                                "onto",
                                "to",
                                "into"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Converted into (aylantirildi)."
                        },
                        {
                            "id": "en-b2-u5-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The old warehouse was demolished.\"",
                            "options": [
                                "doubt",
                                "Demolish",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Demolish\" (Buzib tashlamoq (binoni)) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u5-l2-q1",
                            "question": "Which grammatical voice is primarily used in man-made process diagrams?",
                            "options": [
                                "Future continuous",
                                "Imperative",
                                "Active voice only",
                                "Passive voice"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Passive voice (e.g. is harvested, is transported)."
                        },
                        {
                            "id": "en-b2-u5-l2-q2",
                            "question": "\"The trees were chopped down and replaced with apartments.\" What does \"chopped down\" mean?",
                            "options": [
                                "Cut down / Felled",
                                "Protected",
                                "Watered",
                                "Planted"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Cut down."
                        },
                        {
                            "id": "en-b2-u5-l2-q3",
                            "question": "Which linking phrase indicates the first step of a process?",
                            "options": [
                                "Lastly",
                                "Subsequently",
                                "Initially / In the initial stage",
                                "Eventually"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Initially."
                        },
                        {
                            "id": "en-b2-u5-l2-q4",
                            "question": "To the north of the river, a new bridge was _______.",
                            "options": [
                                "constructed",
                                "destructed",
                                "destroying",
                                "demolish"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Was constructed."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u5-l3",
        "courseId": "english-b2",
        "unitId": "en-b2-u5",
        "unitTitle": "Unit 5: IELTS Writing Task 1 & 2 Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 3,
        "title": "IELTS Writing Task 2: Opinion (Agree / Disagree) Essay",
        "description": "4 paragrafli insho strukturasi, tezis bayonoti (thesis statement) va dalillar keltirish.",
        "estimatedDurationMinutes": 16,
        "icon": "✍️",
        "steps": [
            {
                "id": "en-b2-u5-l3-s1",
                "title": "Insho Strukturasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "4-Paragraph Opinion Essay Blueprint",
                    "explanation": "1. Introduction: Mavzuni parafraz qilish + Aniq tezis (I completely agree with this viewpoint). 2. Body 1: Birinchi asosiy dalil + misol. 3. Body 2: Ikkinchi asosiy dalil + misol. 4. Conclusion: Asosiy fikrni qayta xulosalash.",
                    "keyPoints": [
                        "Minimum 250 so'z yozilishi shart (tavsiya etiladi: 260-280 so'z).",
                        "Tezis aniq bo'lishi va butun insho davomida izchil saqlanishi kerak."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Writing Task 2: Opinion (Agree / Disagree) Essay",
                            "meaning": "4 paragrafli insho strukturasi, tezis bayonoti (thesis statement) va dalillar keltirish.",
                            "usageNotes": "1. Introduction: Mavzuni parafraz qilish + Aniq tezis (I completely agree with this viewpoint). 2. Body 1: Birinchi asosiy dalil + misol. 3. Body 2: Ikkinchi asosiy dalil + misol. 4. Conclusion: Asosiy fikrni qayta xulosalash.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri tezis jumlasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u5-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "Which thesis statement clearly states the author's position for an Agree/Disagree prompt?",
                            "options": [
                                "This essay firmly agrees with the assertion that technological literacy is vital for modern employment.",
                                "Technology is everywhere in the world today.",
                                "Some people like technology but others do not like it.",
                                "I will talk about computers and phones."
                            ],
                            "correctAnswer": 0,
                            "explanation": "This essay firmly agrees..."
                        },
                        {
                            "id": "en-b2-u5-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Ensure structural coherence throughout your essay.\"",
                            "options": [
                                "Coherence",
                                "reluctance",
                                "doubt",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Coherence\" (Mantiqiy bogʻliqlik, izchillik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u5-l3-q1",
                            "question": "What is the recommended time allocation for IELTS Writing Task 2?",
                            "options": [
                                "40 minutes",
                                "20 minutes",
                                "60 minutes",
                                "15 minutes"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "40 minutes (Task 1: 20 minutes)."
                        },
                        {
                            "id": "en-b2-u5-l3-q2",
                            "question": "What is the minimum word requirement for IELTS Writing Task 2?",
                            "options": [
                                "150 words",
                                "350 words",
                                "200 words",
                                "250 words"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "250 words minimum."
                        },
                        {
                            "id": "en-b2-u5-l3-q3",
                            "question": "What is a \"Topic Sentence\" in a body paragraph?",
                            "options": [
                                "The opening sentence stating the central idea of that paragraph",
                                "A quote from a celebrity",
                                "A random fact",
                                "The title of the essay"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Opening sentence stating the central idea."
                        },
                        {
                            "id": "en-b2-u5-l3-q4",
                            "question": "Should you introduce completely new arguments in the conclusion paragraph?",
                            "options": [
                                "Yes, always add 3 new ideas",
                                "No, never — the conclusion should only summarize and restate the established stance",
                                "Only if you have extra time",
                                "Yes, change your opinion completely"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Never introduce new arguments in conclusion."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u5-l4",
        "courseId": "english-b2",
        "unitId": "en-b2-u5",
        "unitTitle": "Unit 5: IELTS Writing Task 1 & 2 Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 4,
        "title": "IELTS Writing Task 2: Discussion (Discuss Both Views & Give Opinion)",
        "description": "Ikki qarama-qarshi tomonni neytral tahlil qilish va o'z pozitsiyasini kiritish.",
        "estimatedDurationMinutes": 16,
        "icon": "⚖️",
        "steps": [
            {
                "id": "en-b2-u5-l4-s1",
                "title": "Both Views Insho Tizimi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Discuss Both Views Framework",
                    "explanation": "1. Introduction: Ikkala tomon qarashlarini aytish + o'z fikringiz. 2. Body 1: Birinchi tomonning dalillari (On the one hand, proponents argue that...). 3. Body 2: Ikkinchi tomonning dalillari (On the other hand, opponents contend that...). 4. Conclusion: Umumlashtirish va shaxsiy xulosa.",
                    "keyPoints": [
                        "Ikkala tomonga ham yetarli dalillar berilishi shart (muvozanat).",
                        "O'z fikringiz kirish, asosiy qism va xulosada ravshan aks etishi lozim."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Writing Task 2: Discussion (Discuss Both Views & Give Opinion)",
                            "meaning": "Ikki qarama-qarshi tomonni neytral tahlil qilish va o'z pozitsiyasini kiritish.",
                            "usageNotes": "1. Introduction: Ikkala tomon qarashlarini aytish + o'z fikringiz. 2. Body 1: Birinchi tomonning dalillari (On the one hand, proponents argue that...). 3. Body 2: Ikkinchi tomonning dalillari (On the other hand, opponents contend that...). 4. Conclusion: Umumlashtirish va shaxsiy xulosa.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri o'tish iborasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u5-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"On the one hand, advocates maintain that university education guarantees employment. _______, critics emphasize practical vocational skills.\"",
                            "options": [
                                "Furthermore",
                                "For example",
                                "On the other hand",
                                "Consequently"
                            ],
                            "correctAnswer": 2,
                            "explanation": "On the other hand (Ikkinchi tomondan)."
                        },
                        {
                            "id": "en-b2-u5-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He presented a compelling argument in the debate.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Compelling"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Compelling\" (Juda ishonarli, maftunkor) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u5-l4-q1",
                            "question": "If the prompt says \"Discuss both views and give your opinion\", what happens if you only discuss ONE view?",
                            "options": [
                                "You will get Band 9",
                                "Nothing happens",
                                "Task Achievement score will be penalized heavily (maximum Band 5 for TR)",
                                "The examiner will ignore it"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Heavy penalty for not addressing all parts."
                        },
                        {
                            "id": "en-b2-u5-l4-q2",
                            "question": "\"Proponent\" so'zining ma'nosi nima?",
                            "options": [
                                "Biror fikr yoki g'oyani qo'llab-quvvatlovchi (tarafdor)",
                                "Sudya",
                                "Raqib / Dushman",
                                "Befarq shaxs"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Proponent — Tarafdor."
                        },
                        {
                            "id": "en-b2-u5-l4-q3",
                            "question": "Where should your opinion be stated in a \"Discuss both views\" essay?",
                            "options": [
                                "Hidden as a secret",
                                "Nowhere at all",
                                "Only in the very last word",
                                "In the introduction, body (or conclusion) consistently"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Stated clearly throughout the essay."
                        },
                        {
                            "id": "en-b2-u5-l4-q4",
                            "question": "What is the four assessment criteria for IELTS Writing?",
                            "options": [
                                "Vocabulary only",
                                "Accent and pronunciation",
                                "Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy",
                                "Speed, Handwriting, Length, Ink color"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "The 4 standard criteria."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u5-l5",
        "courseId": "english-b2",
        "unitId": "en-b2-u5",
        "unitTitle": "Unit 5: IELTS Writing Task 1 & 2 Mastery",
        "language": "en",
        "level": "B2",
        "lessonNumber": 5,
        "title": "IELTS Writing Task 2: Problem & Solution Essay",
        "description": "Muammo va yechim insholari: sabablarni tahlil qilish va amaliy yechimlar taklif etish.",
        "estimatedDurationMinutes": 16,
        "icon": "💡",
        "steps": [
            {
                "id": "en-b2-u5-l5-s1",
                "title": "Problem & Solution Tizimi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Problem and Solution Structure",
                    "explanation": "1. Introduction: Muammoni parafraz qilish. 2. Body 1: Muammoning asosiy sabablari (The primary driver behind this issue is...). 3. Body 2: Amaliy yechimlar (To tackle this dilemma, policymakers should...). 4. Conclusion: Xulosa.",
                    "vocabulary": [
                        {
                            "term": "Mitigate",
                            "reading": "/ˈmɪt.ɪ.ɡeɪt/",
                            "meaning": "Yumshatmoq / Yechim orqali kamaytirmoq",
                            "exampleSentence": "Urgent measures are required to mitigate urban pollution.",
                            "exampleTranslation": "Shahar ifloslanishini yumshatish uchun tezkor choralar zarur."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Writing Task 2: Problem & Solution Essay",
                            "meaning": "Muammo va yechim insholari: sabablarni tahlil qilish va amaliy yechimlar taklif etish.",
                            "usageNotes": "1. Introduction: Muammoni parafraz qilish. 2. Body 1: Muammoning asosiy sabablari (The primary driver behind this issue is...). 3. Body 2: Amaliy yechimlar (To tackle this dilemma, policymakers should...). 4. Conclusion: Xulosa.",
                            "examples": [
                                {
                                    "sentence": "Urgent measures are required to mitigate urban pollution.",
                                    "translation": "Shahar ifloslanishini yumshatish uchun tezkor choralar zarur."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri yechim iborasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u5-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"To address this crisis effectively, municipal authorities must _______ stricter environmental regulations.\"",
                            "options": [
                                "implement",
                                "destroy",
                                "cancel",
                                "ignoring"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Implement regulations (qoidalarni tatbiq etmoq)."
                        },
                        {
                            "id": "en-b2-u5-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"You must substantiate your claims with empirical evidence.\"",
                            "options": [
                                "Substantiate",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Substantiate\" (Asoslab bermoq, isbotlamoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u5-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u5-l5-q1",
                            "question": "Which phrase introduces a practical solution?",
                            "options": [
                                "A viable solution would be to...",
                                "No one cares about this",
                                "It will forever be a disaster",
                                "This is totally impossible to fix"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "A viable solution would be to..."
                        },
                        {
                            "id": "en-b2-u5-l5-q2",
                            "question": "\"Tackle a problem\" nimani bildiradi?",
                            "options": [
                                "Muammodan qochmoq",
                                "Muammoni hal qilishga kirishmoq",
                                "Muammoni unutmoq",
                                "Muammo yaratmoq"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Tackle — Hal qilishga kirishmoq."
                        },
                        {
                            "id": "en-b2-u5-l5-q3",
                            "question": "Should solutions directly match the causes discussed in Body 1?",
                            "options": [
                                "It doesn't matter",
                                "No, solutions should be about something completely unrelated",
                                "Yes, solutions must directly correspond to the identified causes",
                                "Only write one sentence"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Must directly correspond to identified causes."
                        },
                        {
                            "id": "en-b2-u5-l5-q4",
                            "question": "Choose the most cohesive sentence for introducing an effect:",
                            "options": [
                                "And so health down.",
                                "Bad health happen next.",
                                "Because why not, health is bad.",
                                "As a direct consequence of this trend, public health has suffered."
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "As a direct consequence of this trend..."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u6-l1",
        "courseId": "english-b2",
        "unitId": "en-b2-u6",
        "unitTitle": "Unit 6: IELTS Speaking & Capstone Synthesis",
        "language": "en",
        "level": "B2",
        "lessonNumber": 1,
        "title": "IELTS Speaking Part 1: Fluency & Lexical Range",
        "description": "Kundalik savollarga to'liq, tabiiy va boy leksika bilan javob berish strategiyalari.",
        "estimatedDurationMinutes": 14,
        "icon": "🗣️",
        "steps": [
            {
                "id": "en-b2-u6-l1-s1",
                "title": "Part 1 Strategiyasi",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Extending Answers in Speaking Part 1",
                    "explanation": "Hech qachon faqat \"Yes/No\" yoki 1 ta so'z bilan javob bermang! Formula: Javob (Direct answer) + Sabab (Reason) + Misol yoki Qo'shimcha detal (Example/Detail) -> 2-3 ta ravon gap.",
                    "keyPoints": [
                        "Question: \"Do you enjoy cooking?\"",
                        "Band 5 answer: \"Yes, I like cooking food.\"",
                        "Band 7 answer: \"To be completely honest, I find cooking exceptionally therapeutic, especially after an intense working day. I love experimenting with traditional pasta recipes.\""
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Speaking Part 1: Fluency & Lexical Range",
                            "meaning": "Kundalik savollarga to'liq, tabiiy va boy leksika bilan javob berish strategiyalari.",
                            "usageNotes": "Hech qachon faqat \"Yes/No\" yoki 1 ta so'z bilan javob bermang! Formula: Javob (Direct answer) + Sabab (Reason) + Misol yoki Qo'shimcha detal (Example/Detail) -> 2-3 ta ravon gap.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Eng yaxshi kengaytirilgan javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u6-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "Examiner: \"How often do you read books?\" Best response:",
                            "options": [
                                "Books are good.",
                                "Sometimes books.",
                                "Yes, I read.",
                                "I make a conscious effort to read daily, usually dedicating at least thirty minutes before going to sleep to non-fiction or psychology."
                            ],
                            "correctAnswer": 3,
                            "explanation": "Full, extended, nuanced answer."
                        },
                        {
                            "id": "en-b2-u6-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She understood every subtle nuance of the language.\"",
                            "options": [
                                "doubt",
                                "Nuance",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Nuance\" (Nozik farq, qirra) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u6-l1-q1",
                            "question": "How long does IELTS Speaking Part 1 last?",
                            "options": [
                                "1 minute",
                                "20 minutes",
                                "10 to 12 minutes",
                                "4 to 5 minutes"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "4-5 minutes."
                        },
                        {
                            "id": "en-b2-u6-l1-q2",
                            "question": "What is the optimal length of an answer in Part 1?",
                            "options": [
                                "One word (\"Yes\")",
                                "A 5-minute continuous speech",
                                "2 to 4 sentences with clear elaboration",
                                "Silence"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "2-4 sentences."
                        },
                        {
                            "id": "en-b2-u6-l1-q3",
                            "question": "What should you do if you don't hear a question clearly?",
                            "options": [
                                "Make up your own question",
                                "Politely ask the examiner: \"Could you please repeat the question?\"",
                                "Leave the room",
                                "Remain completely silent"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Politely ask to repeat."
                        },
                        {
                            "id": "en-b2-u6-l1-q4",
                            "question": "Which assessment criteria evaluate your smoothness and speed of speech?",
                            "options": [
                                "Fluency & Coherence",
                                "Vocabulary spelling",
                                "Writing task achievement",
                                "Grammatical accuracy"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Fluency & Coherence."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u6-l2",
        "courseId": "english-b2",
        "unitId": "en-b2-u6",
        "unitTitle": "Unit 6: IELTS Speaking & Capstone Synthesis",
        "language": "en",
        "level": "B2",
        "lessonNumber": 2,
        "title": "IELTS Speaking Part 2: 2-Minute Cue Card Strategy",
        "description": "1 daqiqalik tayyorgarlik va 2 daqiqalik to'xtovsiz monolog strategiyasi.",
        "estimatedDurationMinutes": 16,
        "icon": "⏱️",
        "steps": [
            {
                "id": "en-b2-u6-l2-s1",
                "title": "Cue Card Texnikasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Mastering the 2-Minute Long Turn",
                    "explanation": "1 daqiqa ichida barcha savollarga (Who, Where, What, Why) kalit so'zlar va ilg'or sifatlarni yozib oling. Hikoyangizni xronologik tartibda boy detallar bilan 2 daqiqa gapirib bering.",
                    "keyPoints": [
                        "Storytelling strukturasidan foydalaning (kirish, rivojlanish, kulminatsiya, xulosa).",
                        "Imtihon oluvchi to'xtatmaguncha gapirishdan to'xtamang!"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Speaking Part 2: 2-Minute Cue Card Strategy",
                            "meaning": "1 daqiqalik tayyorgarlik va 2 daqiqalik to'xtovsiz monolog strategiyasi.",
                            "usageNotes": "1 daqiqa ichida barcha savollarga (Who, Where, What, Why) kalit so'zlar va ilg'or sifatlarni yozib oling. Hikoyangizni xronologik tartibda boy detallar bilan 2 daqiqa gapirib bering.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri monolog kirish jumlasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u6-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "Prompt: \"Describe a memorable journey you took.\" Best opening sentence:",
                            "options": [
                                "A journey was good.",
                                "Hello examiner, I traveled.",
                                "I would like to talk about an unforgettable expedition I embarked upon two summers ago across the mountains of Uzbekistan.",
                                "I will speak about journey."
                            ],
                            "correctAnswer": 2,
                            "explanation": "Eng mukammal va boy ochilish jumlasi."
                        },
                        {
                            "id": "en-b2-u6-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Ensure structural coherence throughout your essay.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Coherence",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Coherence\" (Mantiqiy bogʻliqlik, izchillik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u6-l2-q1",
                            "question": "How much preparation time is given in IELTS Speaking Part 2?",
                            "options": [
                                "30 seconds",
                                "No preparation time",
                                "1 minute",
                                "5 minutes"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Exactly 1 minute."
                        },
                        {
                            "id": "en-b2-u6-l2-q2",
                            "question": "How long should you speak in Part 2?",
                            "options": [
                                "Exactly 30 seconds",
                                "5 minutes",
                                "10 minutes",
                                "Up to 2 minutes continuously"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "1 to 2 minutes."
                        },
                        {
                            "id": "en-b2-u6-l2-q3",
                            "question": "Should you write full sentences or bullet points on your notes paper?",
                            "options": [
                                "Short bullet points and key vocabulary",
                                "Draw pictures only",
                                "Full essays",
                                "Nothing"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Short bullet points & vocabulary."
                        },
                        {
                            "id": "en-b2-u6-l2-q4",
                            "question": "What happens when the examiner stops you after 2 minutes?",
                            "options": [
                                "It means you failed",
                                "You must argue with the examiner",
                                "It is completely normal; it means you have spoken enough for the time limit",
                                "You lost points"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Normal time management."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u6-l3",
        "courseId": "english-b2",
        "unitId": "en-b2-u6",
        "unitTitle": "Unit 6: IELTS Speaking & Capstone Synthesis",
        "language": "en",
        "level": "B2",
        "lessonNumber": 3,
        "title": "IELTS Speaking Part 3: Abstract Discussion & Speculation",
        "description": "Jamiyat, kelajak va falsafiy mavzularda chuqur tahliliy fikr yuritish.",
        "estimatedDurationMinutes": 16,
        "icon": "💬",
        "steps": [
            {
                "id": "en-b2-u6-l3-s1",
                "title": "Part 3 Abstrakt Tahlil",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Analyzing Abstract Societal Issues",
                    "explanation": "Part 3 da savollar shaxsiy hayotingiz haqida emas, balki jamiyat, texnologiya, ta'lim va kelajak haqida bo'ladi. Shaxsiy \"I\" o'rniga umumiy \"People in general\", \"Governments\", \"Societies\" iboralaridan foydalaning.",
                    "keyPoints": [
                        "Speculation: \"It is highly probable that in the upcoming decades...\"",
                        "Generalization: \"Broadly speaking, urban populations tend to...\""
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Speaking Part 3: Abstract Discussion & Speculation",
                            "meaning": "Jamiyat, kelajak va falsafiy mavzularda chuqur tahliliy fikr yuritish.",
                            "usageNotes": "Part 3 da savollar shaxsiy hayotingiz haqida emas, balki jamiyat, texnologiya, ta'lim va kelajak haqida bo'ladi. Shaxsiy \"I\" o'rniga umumiy \"People in general\", \"Governments\", \"Societies\" iboralaridan foydalaning.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        },
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri Part 3 javob iborasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b2-u6-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "Examiner: \"How will artificial intelligence impact education in the future?\" Best opening:",
                            "options": [
                                "I like my computer.",
                                "From my perspective, AI will fundamentally revolutionize pedagogical methodologies by enabling customized learning paths.",
                                "I don't know about future.",
                                "AI is a robot."
                            ],
                            "correctAnswer": 1,
                            "explanation": "High-level abstract analysis."
                        },
                        {
                            "id": "en-b2-u6-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He presented a compelling argument in the debate.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Compelling"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Compelling\" (Juda ishonarli, maftunkor) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u6-l3-q1",
                            "question": "How does Part 3 differ from Part 1?",
                            "options": [
                                "Part 3 is written on paper",
                                "Part 3 focuses on broad, abstract, societal issues rather than personal habits",
                                "Part 3 is silent",
                                "Part 3 is multiple choice"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Abstract societal issues."
                        },
                        {
                            "id": "en-b2-u6-l3-q2",
                            "question": "How long does IELTS Speaking Part 3 last?",
                            "options": [
                                "4 to 5 minutes",
                                "1 minute",
                                "30 minutes",
                                "15 minutes"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "4 to 5 minutes."
                        },
                        {
                            "id": "en-b2-u6-l3-q3",
                            "question": "\"Broadly speaking\" iborasi nima maqsadda ishlatiladi?",
                            "options": [
                                "Faqat o'zim haqimda",
                                "Inkor qilganda",
                                "Xayrlashganda",
                                "Umumiy qilib aytganda / Keng ma'noda"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Generalization."
                        },
                        {
                            "id": "en-b2-u6-l3-q4",
                            "question": "What gives a candidate Band 7+ in Lexical Resource during Speaking?",
                            "options": [
                                "Using precise collocations, idiomatic phrases naturally, and paraphrasing effectively",
                                "Using very old medieval words unnaturally",
                                "Speaking as fast as possible without pauses",
                                "Repeating the examiner's question 5 times"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Precise collocations and natural idiom."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u6-l4",
        "courseId": "english-b2",
        "unitId": "en-b2-u6",
        "unitTitle": "Unit 6: IELTS Speaking & Capstone Synthesis",
        "language": "en",
        "level": "B2",
        "lessonNumber": 4,
        "title": "B2 / IELTS 6.5 Mock Simulation & Error Analysis",
        "description": "Eng ko'p uchraydigan xatolar tahlili va imtihon oldi to'liq tayyorgarlik.",
        "estimatedDurationMinutes": 18,
        "icon": "📝",
        "steps": [
            {
                "id": "en-b2-u6-l4-s1",
                "title": "Keng Tarqalgan Xatolar",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Top 5 Costly Errors in IELTS B2",
                    "explanation": "1. Over-generalization without evidence. 2. Memorized robotic templates. 3. Ignoring word limits in Task 1/2. 4. Mishearing distractors in Listening. 5. Assuming NOT GIVEN is FALSE.",
                    "keyPoints": [
                        "Always allocate 3-5 minutes for proofreading essays.",
                        "Focus on clarity and coherent flow over unnecessarily complex jargon."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B2 / IELTS 6.5 Mock Simulation & Error Analysis",
                            "meaning": "Eng ko'p uchraydigan xatolar tahlili va imtihon oldi to'liq tayyorgarlik.",
                            "usageNotes": "1. Over-generalization without evidence. 2. Memorized robotic templates. 3. Ignoring word limits in Task 1/2. 4. Mishearing distractors in Listening. 5. Assuming NOT GIVEN is FALSE.",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Compelling",
                            "reading": "/kəmˈpel.ɪŋ/",
                            "meaning": "Juda ishonarli, maftunkor",
                            "exampleSentence": "He presented a compelling argument in the debate.",
                            "exampleTranslation": "U bahsda juda ishonarli dalil keltirdi."
                        },
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l4-s2",
                "title": "Tuzatish Mashqi",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Xatoni aniqlang va tuzating.",
                    "exercises": [
                        {
                            "id": "en-b2-u6-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "Which sentence avoids grammatical and lexical errors?",
                            "options": [
                                "Despite facing fierce competition, the company achieved remarkable growth.",
                                "Although the fierce competition, the company achieved.",
                                "Despite of fierce competition, the company made growth.",
                                "In spite the competition was fierce, company grew."
                            ],
                            "correctAnswer": 0,
                            "explanation": "Despite facing fierce competition..."
                        },
                        {
                            "id": "en-b2-u6-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"You must substantiate your claims with empirical evidence.\"",
                            "options": [
                                "Substantiate",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Substantiate\" (Asoslab bermoq, isbotlamoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u6-l4-q1",
                            "question": "Why are memorized essay templates dangerous in IELTS?",
                            "options": [
                                "Examiners easily recognize them and reduce Task Achievement and Lexical scores",
                                "They guarantee Band 9",
                                "Examiners love memorized essays",
                                "They are required by the exam"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Examiners penalize memorized templates."
                        },
                        {
                            "id": "en-b2-u6-l4-q2",
                            "question": "What is the penalty for writing under 250 words in Task 2?",
                            "options": [
                                "Automatic zero",
                                "You get extra points",
                                "Deduction in Task Achievement score",
                                "No penalty"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Deduction in Task Achievement."
                        },
                        {
                            "id": "en-b2-u6-l4-q3",
                            "question": "What should you do if you finish your writing test with 4 minutes remaining?",
                            "options": [
                                "Carefully proofread for grammar, spelling, singular/plural and punctuation errors",
                                "Start writing another essay",
                                "Erase everything",
                                "Put your pen down and look around"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Proofread carefully."
                        },
                        {
                            "id": "en-b2-u6-l4-q4",
                            "question": "Which IELTS score corresponds to Upper-Intermediate B2 level?",
                            "options": [
                                "Band 9.0",
                                "Band 4.0",
                                "Band 2.0",
                                "Band 5.5 to 6.5"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Band 5.5 to 6.5."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b2-u6-l5",
        "courseId": "english-b2",
        "unitId": "en-b2-u6",
        "unitTitle": "Unit 6: IELTS Speaking & Capstone Synthesis",
        "language": "en",
        "level": "B2",
        "lessonNumber": 5,
        "title": "B2 Capstone Mastery & C1 Advancement Assessment",
        "description": "B2 darajasining to'liq yakuni va C1 Advanced darajasiga o'tish sinovi.",
        "estimatedDurationMinutes": 20,
        "icon": "🏆",
        "steps": [
            {
                "id": "en-b2-u6-l5-s1",
                "title": "B2 / IELTS 6.5 Yakuniy Sertifikatsiya",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "B2 Upper-Intermediate Full Competency",
                    "explanation": "Siz Inversion, Cleft Sentences, Causatives, Participle Clauses, Mixed Conditionals, Past Modals of Deduction, IELTS Academic Writing va Speaking tahlillarini to'liq o'zlashtirdingiz!",
                    "keyPoints": [
                        "High grammatical complexity with strong accuracy",
                        "Extensive academic lexicon and discourse management",
                        "Ready for Advanced C1 (IELTS 7.0 - 8.0)"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B2 Capstone Mastery & C1 Advancement Assessment",
                            "meaning": "B2 darajasining to'liq yakuni va C1 Advanced darajasiga o'tish sinovi.",
                            "usageNotes": "Siz Inversion, Cleft Sentences, Causatives, Participle Clauses, Mixed Conditionals, Past Modals of Deduction, IELTS Academic Writing va Speaking tahlillarini to'liq o'zlashtirdingiz!",
                            "examples": [
                                {
                                    "sentence": "I study English every day with dedication.",
                                    "translation": "Har kuni ingliz tilini astoydil o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "Substantiate",
                            "reading": "/səbˈstæn.ʃi.eɪt/",
                            "meaning": "Asoslab bermoq, isbotlamoq",
                            "exampleSentence": "You must substantiate your claims with empirical evidence.",
                            "exampleTranslation": "Siz oʻz daʼvolaringizni empirik dalillar bilan asoslab berishingiz kerak."
                        },
                        {
                            "term": "Nuance",
                            "reading": "/ˈnjuː.ɑːns/",
                            "meaning": "Nozik farq, qirra",
                            "exampleSentence": "She understood every subtle nuance of the language.",
                            "exampleTranslation": "U tilning har bir nozik qirrasini tushundi."
                        },
                        {
                            "term": "Coherence",
                            "reading": "/kəʊˈhɪə.rəns/",
                            "meaning": "Mantiqiy bogʻliqlik, izchillik",
                            "exampleSentence": "Ensure structural coherence throughout your essay.",
                            "exampleTranslation": "Inshoyingiz davomida tuzilmaviy izchillikni taʼminlang."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l5-s2",
                "title": "Kompleks Mashq",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "C1 darajaga o'tish uchun kompleks savolga javob bering.",
                    "exercises": [
                        {
                            "id": "en-b2-u6-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Rarely _______ a technological innovation transformed human society so rapidly as the internet.\"",
                            "options": [
                                "have",
                                "did",
                                "was",
                                "has"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Rarely has an innovation..."
                        },
                        {
                            "id": "en-b2-u6-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She understood every subtle nuance of the language.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Nuance",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Nuance\" (Nozik farq, qirra) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b2-u6-l5-s3",
                "title": "B2 Yakuniy Sinov Imtihoni",
                "type": "test",
                "estimatedMinutes": 8,
                "testData": {
                    "instructions": "B2 darajasini muvaffaqiyatli yakunlash uchun barcha savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b2-u6-l5-q1",
                            "question": "Not only _______ the grant, but she was also invited to speak at the summit.",
                            "options": [
                                "she secured",
                                "she had secure",
                                "was she secure",
                                "did she secure"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Inversion: did she secure."
                        },
                        {
                            "id": "en-b2-u6-l5-q2",
                            "question": "If we had implemented those safeguards earlier, we _______ facing these legal hurdles today.",
                            "options": [
                                "wouldn't be",
                                "wouldn't have been",
                                "won't be",
                                "aren't"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Mixed conditional: wouldn't be."
                        },
                        {
                            "id": "en-b2-u6-l5-q3",
                            "question": "The ancient manuscript _______ by historians to date back to the 9th century.",
                            "options": [
                                "has considered",
                                "is considered",
                                "considers",
                                "considering"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Passive: is considered."
                        },
                        {
                            "id": "en-b2-u6-l5-q4",
                            "question": "Having _______ the preliminary experiments, the team published their findings.",
                            "options": [
                                "conclude",
                                "been conclude",
                                "concluded",
                                "concluding"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Having concluded."
                        }
                    ]
                }
            }
        ]
    }
];
