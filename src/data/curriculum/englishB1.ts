import { Lesson } from '../../types/lesson';

export const ENGLISH_B1_LESSONS: Lesson[] = [
    {
        "id": "en-b1-u1-l1",
        "courseId": "english-b1",
        "unitId": "en-b1-u1",
        "unitTitle": "Unit 1: Perfect Tenses & Experiences",
        "language": "en",
        "level": "B1",
        "lessonNumber": 1,
        "title": "Present Perfect Simple: Life Experiences (have + V3)",
        "description": "Hayotiy tajribalar, natijalar va noaniq o'tgan zamon (have / has + V3).",
        "estimatedDurationMinutes": 15,
        "icon": "🌟",
        "steps": [
            {
                "id": "en-b1-u1-l1-s1",
                "title": "Present Perfect Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Present Perfect Simple",
                    "explanation": "Hozirgi payt bilan bog'liq o'tgan zamon harakatlari yoki hayotiy tajribalarni bildirish uchun have/has + V3 (past participle) ishlatiladi.",
                    "keyPoints": [
                        "Tajriba (ever / never): Have you ever visited Japan? I have never tried sushi.",
                        "Hozirgi natija (just / already / yet): I have just finished my homework.",
                        "Boshlangan va davom etayotgan (for / since): She has lived here for five years."
                    ],
                    "vocabulary": [
                        {
                            "term": "Experience",
                            "reading": "/ɪkˈspɪə.ri.əns/",
                            "meaning": "Tajriba",
                            "exampleSentence": "Teaching is a rewarding experience.",
                            "exampleTranslation": "O'qituvchilik maroqli tajriba."
                        },
                        {
                            "term": "Already",
                            "reading": "/ɔːlˈred.i/",
                            "meaning": "Allaqachon",
                            "exampleSentence": "We have already sent the report.",
                            "exampleTranslation": "Biz hisobotni allaqachon jo'natdik."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Present Perfect Simple: Life Experiences (have + V3)",
                            "meaning": "Hayotiy tajribalar, natijalar va noaniq o'tgan zamon (have / has + V3).",
                            "usageNotes": "Hozirgi payt bilan bog'liq o'tgan zamon harakatlari yoki hayotiy tajribalarni bildirish uchun have/has + V3 (past participle) ishlatiladi.",
                            "examples": [
                                {
                                    "sentence": "Teaching is a rewarding experience.",
                                    "translation": "O'qituvchilik maroqli tajriba."
                                },
                                {
                                    "sentence": "We have already sent the report.",
                                    "translation": "Biz hisobotni allaqachon jo'natdik."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u1-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Have you ever _______ (eat) lobster?\"",
                            "options": [
                                "ate",
                                "eating",
                                "eat",
                                "eaten"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Have you ever eaten (V3)."
                        },
                        {
                            "id": "en-b1-u1-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"We have already sent the report.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Already",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Already\" (Allaqachon) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u1-l1-q1",
                            "question": "She _______ in London since 2018.",
                            "options": [
                                "lives",
                                "lived",
                                "is living",
                                "has lived"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Since 2018 bilan Present Perfect: has lived."
                        },
                        {
                            "id": "en-b1-u1-l1-q2",
                            "question": "I haven't received the confirmation email _______.",
                            "options": [
                                "yet",
                                "already",
                                "just",
                                "ever"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Inkor gap oxirida: yet."
                        },
                        {
                            "id": "en-b1-u1-l1-q3",
                            "question": "They _______ their luggage at the airport.",
                            "options": [
                                "losted",
                                "have lost",
                                "has lost",
                                "losing"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "They have lost."
                        },
                        {
                            "id": "en-b1-u1-l1-q4",
                            "question": "\"I have known him for ten years.\" Bu jumla nimani anglatadi?",
                            "options": [
                                "Uni 10 yildan keyin taniyman",
                                "U 10 yoshda",
                                "Uni 10 yildan beri taniyman va hozir ham taniyman",
                                "Uni 10 yil oldin taniganman, hozir ko'rishmaymiz"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Hozirgi paytgacha davom etayotgan holat."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u1-l2",
        "courseId": "english-b1",
        "unitId": "en-b1-u1",
        "unitTitle": "Unit 1: Perfect Tenses & Experiences",
        "language": "en",
        "level": "B1",
        "lessonNumber": 2,
        "title": "Present Perfect vs Past Simple",
        "description": "Aniq vaqt (Past Simple) va noaniq vaqt/natija (Present Perfect) farqlari.",
        "estimatedDurationMinutes": 15,
        "icon": "⚖️",
        "steps": [
            {
                "id": "en-b1-u1-l2-s1",
                "title": "Farqlarni O'rganish",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Present Perfect vs Past Simple",
                    "explanation": "Agar gapda aniq vaqt ko'rsatilgan bo'lsa (yesterday, in 2020, two days ago, when I was a child) — faqat Past Simple ishlatiladi! Noaniq tajriba bo'lsa — Present Perfect.",
                    "keyPoints": [
                        "I visited Paris in 2019. (Aniq vaqt -> Past Simple)",
                        "I have visited Paris twice. (Hayotiy tajriba -> Present Perfect)",
                        "Did you see him yesterday? / Have you seen him today?"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Present Perfect vs Past Simple",
                            "meaning": "Aniq vaqt (Past Simple) va noaniq vaqt/natija (Present Perfect) farqlari.",
                            "usageNotes": "Agar gapda aniq vaqt ko'rsatilgan bo'lsa (yesterday, in 2020, two days ago, when I was a child) — faqat Past Simple ishlatiladi! Noaniq tajriba bo'lsa — Present Perfect.",
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
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri zamon shaklini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u1-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I _______ (buy) a new laptop last Friday.\"",
                            "options": [
                                "bought",
                                "was bought",
                                "buying",
                                "have bought"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Last Friday aniq vaqt ko'rsatkichi bo'lgani uchun Past Simple: bought."
                        },
                        {
                            "id": "en-b1-u1-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"We need to find a more efficient solution.\"",
                            "options": [
                                "Efficient",
                                "reluctance",
                                "delay",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Efficient\" (Samarali) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u1-l2-q1",
                            "question": "When _______ you graduate from university?",
                            "options": [
                                "did",
                                "had",
                                "were",
                                "have"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "When bilan Past Simple: When did you...?"
                        },
                        {
                            "id": "en-b1-u1-l2-q2",
                            "question": "Shakespeare _______ many famous plays.",
                            "options": [
                                "writes",
                                "had wrote",
                                "has written",
                                "wrote"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Tarixiy shaxs hayoti tugagan: wrote."
                        },
                        {
                            "id": "en-b1-u1-l2-q3",
                            "question": "I _______ my wallet! I can't find it anywhere right now.",
                            "options": [
                                "losing",
                                "lost",
                                "have lost",
                                "was lost"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Hozirgi natija: have lost."
                        },
                        {
                            "id": "en-b1-u1-l2-q4",
                            "question": "She _______ to Madrid three times this year.",
                            "options": [
                                "went",
                                "has been",
                                "goes",
                                "was"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "This year (tugallanmagan vaqt): has been."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u1-l3",
        "courseId": "english-b1",
        "unitId": "en-b1-u1",
        "unitTitle": "Unit 1: Perfect Tenses & Experiences",
        "language": "en",
        "level": "B1",
        "lessonNumber": 3,
        "title": "Present Perfect Continuous (have been doing)",
        "description": "O'tmishda boshlanib hozirgacha davom etayotgan jarayonlar (have/has been + V-ing).",
        "estimatedDurationMinutes": 15,
        "icon": "⏳",
        "steps": [
            {
                "id": "en-b1-u1-l3-s1",
                "title": "Present Perfect Continuous",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Have/Has Been + Verb-ing",
                    "explanation": "Harakatning davomiyligiga urg'u berish yoki yaqindagina to'xtagan jarayonning ko'rinib turgan asoratini ifodalash.",
                    "keyPoints": [
                        "I have been studying English for three hours. (Jarayon davomiyligi)",
                        "Why are your hands dirty? — I have been fixing my bicycle. (Yaqinda to'xtagan jarayon asorati)"
                    ],
                    "vocabulary": [
                        {
                            "term": "Exhausted",
                            "reading": "/ɪɡˈzɔː.stɪd/",
                            "meaning": "Haddan tashqari charchagan",
                            "exampleSentence": "I am exhausted because I have been running.",
                            "exampleTranslation": "Men juda charchadim, chunki yugurayotgan edim."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Present Perfect Continuous (have been doing)",
                            "meaning": "O'tmishda boshlanib hozirgacha davom etayotgan jarayonlar (have/has been + V-ing).",
                            "usageNotes": "Harakatning davomiyligiga urg'u berish yoki yaqindagina to'xtagan jarayonning ko'rinib turgan asoratini ifodalash.",
                            "examples": [
                                {
                                    "sentence": "I am exhausted because I have been running.",
                                    "translation": "Men juda charchadim, chunki yugurayotgan edim."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u1-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"It _______ (rain) all morning; the ground is wet.\"",
                            "options": [
                                "had rain",
                                "has been raining",
                                "rained",
                                "is rain"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Has been raining."
                        },
                        {
                            "id": "en-b1-u1-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fluency is a core requirement for this role.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "reluctance",
                                "Requirement"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Requirement\" (Talab, shart) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u1-l3-q1",
                            "question": "How long _______ you been learning German?",
                            "options": [
                                "are",
                                "have",
                                "has",
                                "did"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "How long have you been learning...?"
                        },
                        {
                            "id": "en-b1-u1-l3-q2",
                            "question": "He is tired because he _______ all night.",
                            "options": [
                                "has drove",
                                "is driving",
                                "has been driving",
                                "drives"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Has been driving."
                        },
                        {
                            "id": "en-b1-u1-l3-q3",
                            "question": "We have been waiting for the bus _______ 40 minutes.",
                            "options": [
                                "since",
                                "from",
                                "during",
                                "for"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Vaqt oralig'i uchun: for 40 minutes."
                        },
                        {
                            "id": "en-b1-u1-l3-q4",
                            "question": "She _______ working on this project since 9 AM.",
                            "options": [
                                "has been",
                                "is",
                                "have been",
                                "was"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "She has been working."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u1-l4",
        "courseId": "english-b1",
        "unitId": "en-b1-u1",
        "unitTitle": "Unit 1: Perfect Tenses & Experiences",
        "language": "en",
        "level": "B1",
        "lessonNumber": 4,
        "title": "Used to & Would for Past Habits",
        "description": "O'tmishdagi odatlar va endilikda mavjud bo'lmagan holatlar.",
        "estimatedDurationMinutes": 14,
        "icon": "🕰️",
        "steps": [
            {
                "id": "en-b1-u1-l4-s1",
                "title": "Used to va Would",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Past Habits & States",
                    "explanation": "\"Used to\" o'tmishdagi harakatlar va holatlar uchun ishlatiladi (I used to live in Samarkand). \"Would\" faqat takrorlangan harakatlar uchun ishlatiladi (Every summer we would swim in the river).",
                    "keyPoints": [
                        "I used to play guitar (now I don't).",
                        "Did you use to wear glasses?"
                    ],
                    "vocabulary": [
                        {
                            "term": "Habit",
                            "reading": "/ˈhæb.ɪt/",
                            "meaning": "Odat",
                            "exampleSentence": "Reading daily is a good habit.",
                            "exampleTranslation": "Har kuni mutolaa qilish yaxshi odat."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Used to & Would for Past Habits",
                            "meaning": "O'tmishdagi odatlar va endilikda mavjud bo'lmagan holatlar.",
                            "usageNotes": "\"Used to\" o'tmishdagi harakatlar va holatlar uchun ishlatiladi (I used to live in Samarkand). \"Would\" faqat takrorlangan harakatlar uchun ishlatiladi (Every summer we would swim in the river).",
                            "examples": [
                                {
                                    "sentence": "Reading daily is a good habit.",
                                    "translation": "Har kuni mutolaa qilish yaxshi odat."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u1-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I _______ (use to) eat meat, but now I am vegetarian.\"",
                            "options": [
                                "was used to",
                                "use to",
                                "used to",
                                "am used to"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Used to eat."
                        },
                        {
                            "id": "en-b1-u1-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Her grades improved significantly this term.\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "Significantly",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Significantly\" (Sezilarli darajada) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u1-l4-q1",
                            "question": "Did you _______ to live in a village when you were young?",
                            "options": [
                                "using",
                                "used",
                                "use",
                                "uses"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Did bilan: use to."
                        },
                        {
                            "id": "en-b1-u1-l4-q2",
                            "question": "There _______ be a cinema on this street ten years ago.",
                            "options": [
                                "would",
                                "used to",
                                "was used",
                                "is used to"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Holat fe'li bilan faqat: used to be."
                        },
                        {
                            "id": "en-b1-u1-l4-q3",
                            "question": "He _______ smoke 20 cigarettes a day, but he quit.",
                            "options": [
                                "used to",
                                "get used to",
                                "uses",
                                "is used to"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Used to smoke."
                        },
                        {
                            "id": "en-b1-u1-l4-q4",
                            "question": "Every weekend, my grandfather _______ tell us interesting stories.",
                            "options": [
                                "used",
                                "is used",
                                "will",
                                "would"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Takrorlangan harakat: would tell."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u1-l5",
        "courseId": "english-b1",
        "unitId": "en-b1-u1",
        "unitTitle": "Unit 1: Perfect Tenses & Experiences",
        "language": "en",
        "level": "B1",
        "lessonNumber": 5,
        "title": "B1 Reading: Technology & Social Innovation",
        "description": "Zamonaviy innovatsiyalar va texnologiyalar haqidagi ilmiy-ommabop maqolani o'qib tushunish.",
        "estimatedDurationMinutes": 15,
        "icon": "💡",
        "steps": [
            {
                "id": "en-b1-u1-l5-s1",
                "title": "Matnni O'qish",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Article: The Evolution of Renewable Energy",
                    "explanation": "Qayta tiklanuvchi energiya manbalari haqidagi maqolani o'qing.",
                    "keyPoints": [
                        "Over the past decade, solar energy technology has advanced dramatically.",
                        "Engineers have developed more efficient photovoltaic panels with lower production costs.",
                        "Many countries have reduced their carbon emissions by investing in wind farms.",
                        "However, energy storage and battery capacity remain key challenges."
                    ],
                    "vocabulary": [
                        {
                            "term": "Renewable",
                            "reading": "/rɪˈnjuː.ə.bəl/",
                            "meaning": "Qayta tiklanuvchi",
                            "exampleSentence": "Solar power is a renewable energy source.",
                            "exampleTranslation": "Quyosh quvvati qayta tiklanuvchi energiya manbaidir."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "The new engine is much more efficient.",
                            "exampleTranslation": "Yangi dvigatel ancha samarali."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Reading: Technology & Social Innovation",
                            "meaning": "Zamonaviy innovatsiyalar va texnologiyalar haqidagi ilmiy-ommabop maqolani o'qib tushunish.",
                            "usageNotes": "Qayta tiklanuvchi energiya manbalari haqidagi maqolani o'qing.",
                            "examples": [
                                {
                                    "sentence": "Solar power is a renewable energy source.",
                                    "translation": "Quyosh quvvati qayta tiklanuvchi energiya manbaidir."
                                },
                                {
                                    "sentence": "The new engine is much more efficient.",
                                    "translation": "Yangi dvigatel ancha samarali."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l5-s2",
                "title": "Tahlil Mashqi",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Matn bo'yicha to'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u1-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "What remains a key challenge for renewable energy?",
                            "options": [
                                "High sunlight costs",
                                "Too many solar panels",
                                "Lack of wind",
                                "Energy storage and battery capacity"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Matnda: energy storage and battery capacity remain key challenges."
                        },
                        {
                            "id": "en-b1-u1-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The new engine is much more efficient.\"",
                            "options": [
                                "delay",
                                "Efficient",
                                "doubt",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Efficient\" (Samarali) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u1-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u1-l5-q1",
                            "question": "How has solar energy changed over the past decade?",
                            "options": [
                                "It has become more expensive",
                                "It has declined in popularity",
                                "It has stopped functioning",
                                "It has advanced dramatically"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Advanced dramatically."
                        },
                        {
                            "id": "en-b1-u1-l5-q2",
                            "question": "\"Carbon emissions\" nimani anglatadi?",
                            "options": [
                                "Uglerod chiqindilari (atmosferaga)",
                                "Elektr toki",
                                "Quyosh nurlari",
                                "Suv zaxiralari"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Uglerod chiqindilari."
                        },
                        {
                            "id": "en-b1-u1-l5-q3",
                            "question": "Why have countries invested in wind farms?",
                            "options": [
                                "To increase coal burning",
                                "To stop electricity",
                                "To reduce carbon emissions",
                                "To build more roads"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "To reduce emissions."
                        },
                        {
                            "id": "en-b1-u1-l5-q4",
                            "question": "\"Efficient\" so'zining ma'nodoshini toping:",
                            "options": [
                                "Effective / Productive",
                                "Dangerous",
                                "Expensive",
                                "Slow"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Effective / Productive (samarali)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u2-l1",
        "courseId": "english-b1",
        "unitId": "en-b1-u2",
        "unitTitle": "Unit 2: Conditionals & Hypotheticals",
        "language": "en",
        "level": "B1",
        "lessonNumber": 1,
        "title": "Zero & First Conditionals (Real Possibilities)",
        "description": "Ilmiy faktlar (Zero) va kelajakdagi real ehtimollar (First Conditional).",
        "estimatedDurationMinutes": 15,
        "icon": "🔀",
        "steps": [
            {
                "id": "en-b1-u2-l1-s1",
                "title": "Zero & First Conditional",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Conditionals: Zero vs First",
                    "explanation": "Zero Conditional (umumiy haqiqat): If + Present Simple, Present Simple (If you heat ice, it melts). First Conditional (real kelajak): If + Present Simple, Will + V (If it rains tomorrow, we will stay home).",
                    "keyPoints": [
                        "If qismida HECH QACHON \"will\" ishlatilmaydi: If you study hard, you will pass."
                    ],
                    "vocabulary": [
                        {
                            "term": "Melt",
                            "reading": "/melt/",
                            "meaning": "Erish / Erimoq",
                            "exampleSentence": "Ice melts at 0 degrees Celsius.",
                            "exampleTranslation": "Muz 0 darajada eriydi."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Zero & First Conditionals (Real Possibilities)",
                            "meaning": "Ilmiy faktlar (Zero) va kelajakdagi real ehtimollar (First Conditional).",
                            "usageNotes": "Zero Conditional (umumiy haqiqat): If + Present Simple, Present Simple (If you heat ice, it melts). First Conditional (real kelajak): If + Present Simple, Will + V (If it rains tomorrow, we will stay home).",
                            "examples": [
                                {
                                    "sentence": "Ice melts at 0 degrees Celsius.",
                                    "translation": "Muz 0 darajada eriydi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u2-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"If it _______ (snow) tomorrow, we will go skiing.\"",
                            "options": [
                                "snows",
                                "will snow",
                                "snowed",
                                "is snow"
                            ],
                            "correctAnswer": 0,
                            "explanation": "If qismida Present Simple: snows."
                        },
                        {
                            "id": "en-b1-u2-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"We need to find a more efficient solution.\"",
                            "options": [
                                "Efficient",
                                "reluctance",
                                "doubt",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Efficient\" (Samarali) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u2-l1-q1",
                            "question": "If you _______ water to 100°C, it boils.",
                            "options": [
                                "heat",
                                "will heat",
                                "heated",
                                "heating"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Zero conditional: heat."
                        },
                        {
                            "id": "en-b1-u2-l1-q2",
                            "question": "If she passes the exam, she _______ celebrate with friends.",
                            "options": [
                                "did",
                                "will",
                                "would",
                                "is"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "First conditional: will celebrate."
                        },
                        {
                            "id": "en-b1-u2-l1-q3",
                            "question": "Unless you _______ now, you will be late for your flight.",
                            "options": [
                                "left",
                                "don't leave",
                                "leave",
                                "will leave"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Unless (agar ...-masa): leave."
                        },
                        {
                            "id": "en-b1-u2-l1-q4",
                            "question": "What will you do if he _______ invite you?",
                            "options": [
                                "won't",
                                "isn't",
                                "didn't",
                                "doesn't"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "If he doesn't invite..."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u2-l2",
        "courseId": "english-b1",
        "unitId": "en-b1-u2",
        "unitTitle": "Unit 2: Conditionals & Hypotheticals",
        "language": "en",
        "level": "B1",
        "lessonNumber": 2,
        "title": "Second Conditional (Unreal Present & Dreams)",
        "description": "Hozirgi paytdagi noaniq yoki faraziy vaziyatlar (If + Past Simple, Would + V).",
        "estimatedDurationMinutes": 15,
        "icon": "💭",
        "steps": [
            {
                "id": "en-b1-u2-l2-s1",
                "title": "Second Conditional Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Second Conditional: If I were you...",
                    "explanation": "Hozirgi paytda ro'y bermaydigan faraziy xayollar va maslahat uchun: If + Past Simple, Would + Verb. To be fe'li barcha shaxslar uchun ko'pincha \"were\" bo'ladi.",
                    "keyPoints": [
                        "If I had a million dollars, I would travel around the world.",
                        "If I were you, I would consult a doctor (maslahat berish)."
                    ],
                    "vocabulary": [
                        {
                            "term": "Imaginary",
                            "reading": "/ɪˈmædʒ.ɪ.nər.i/",
                            "meaning": "Xayoliy / Faraziy",
                            "exampleSentence": "This is an imaginary situation.",
                            "exampleTranslation": "Bu xayoliy vaziyat."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Second Conditional (Unreal Present & Dreams)",
                            "meaning": "Hozirgi paytdagi noaniq yoki faraziy vaziyatlar (If + Past Simple, Would + V).",
                            "usageNotes": "Hozirgi paytda ro'y bermaydigan faraziy xayollar va maslahat uchun: If + Past Simple, Would + Verb. To be fe'li barcha shaxslar uchun ko'pincha \"were\" bo'ladi.",
                            "examples": [
                                {
                                    "sentence": "This is an imaginary situation.",
                                    "translation": "Bu xayoliy vaziyat."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u2-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"If I _______ (know) his number, I would call him.\"",
                            "options": [
                                "had known",
                                "will know",
                                "know",
                                "knew"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Second conditional: knew."
                        },
                        {
                            "id": "en-b1-u2-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fluency is a core requirement for this role.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Requirement"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Requirement\" (Talab, shart) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u2-l2-q1",
                            "question": "If I _______ you, I wouldn't accept that risky offer.",
                            "options": [
                                "was to",
                                "be",
                                "am",
                                "were"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "If I were you."
                        },
                        {
                            "id": "en-b1-u2-l2-q2",
                            "question": "Where would you live if you _______ choose any country?",
                            "options": [
                                "will",
                                "can",
                                "could",
                                "can have"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "If you could choose."
                        },
                        {
                            "id": "en-b1-u2-l2-q3",
                            "question": "She _______ happier if she had more free time.",
                            "options": [
                                "will be",
                                "would be",
                                "was",
                                "is"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "She would be."
                        },
                        {
                            "id": "en-b1-u2-l2-q4",
                            "question": "If they _______ the truth, they wouldn't be angry.",
                            "options": [
                                "understood",
                                "will understand",
                                "are understand",
                                "understand"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Understood."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u2-l3",
        "courseId": "english-b1",
        "unitId": "en-b1-u2",
        "unitTitle": "Unit 2: Conditionals & Hypotheticals",
        "language": "en",
        "level": "B1",
        "lessonNumber": 3,
        "title": "I wish & If only for Present Regrets",
        "description": "Hozirgi holatdan norozilik yoki orzularni ifodalash (I wish + Past Simple).",
        "estimatedDurationMinutes": 14,
        "icon": "🌠",
        "steps": [
            {
                "id": "en-b1-u2-l3-s1",
                "title": "Wish Qoidalari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "I Wish & If Only",
                    "explanation": "Hozirgi holat boshqacha bo'lishini istaganda: I wish + Past Simple ishlatiladi (I wish I had more time = I don't have enough time).",
                    "keyPoints": [
                        "I wish I lived near the sea (now I live far).",
                        "I wish I could speak Chinese."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "I wish & If only for Present Regrets",
                            "meaning": "Hozirgi holatdan norozilik yoki orzularni ifodalash (I wish + Past Simple).",
                            "usageNotes": "Hozirgi holat boshqacha bo'lishini istaganda: I wish + Past Simple ishlatiladi (I wish I had more time = I don't have enough time).",
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
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u2-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I wish I _______ (can) drive a car.\"",
                            "options": [
                                "was can",
                                "will can",
                                "could",
                                "can"
                            ],
                            "correctAnswer": 2,
                            "explanation": "I wish I could."
                        },
                        {
                            "id": "en-b1-u2-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Her grades improved significantly this term.\"",
                            "options": [
                                "Significantly",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Significantly\" (Sezilarli darajada) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u2-l3-q1",
                            "question": "I wish I _______ taller.",
                            "options": [
                                "will be",
                                "have been",
                                "were",
                                "am"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "I wish I were."
                        },
                        {
                            "id": "en-b1-u2-l3-q2",
                            "question": "If only we _______ enough money to travel to Australia.",
                            "options": [
                                "have",
                                "will have",
                                "having",
                                "had"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "If only we had."
                        },
                        {
                            "id": "en-b1-u2-l3-q3",
                            "question": "She wishes she _______ have to work on weekends.",
                            "options": [
                                "didn't",
                                "not",
                                "doesn't",
                                "won't"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Wishes she didn't have to."
                        },
                        {
                            "id": "en-b1-u2-l3-q4",
                            "question": "\"I wish it stopped raining.\" Bu nimani bildiradi?",
                            "options": [
                                "Yomg'ir yog'mayapti",
                                "Ertaga yomg'ir yog'adi",
                                "Yomg'ir yog'yapti va men to'xtashini xohlayman",
                                "Kecha yomg'ir yog'di"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Hozirgi holatdan norozilik."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u2-l4",
        "courseId": "english-b1",
        "unitId": "en-b1-u2",
        "unitTitle": "Unit 2: Conditionals & Hypotheticals",
        "language": "en",
        "level": "B1",
        "lessonNumber": 4,
        "title": "B1 Listening: Podcast on Behavioral Psychology",
        "description": "Odamlarning qaror qabul qilish psixologiyasi haqidagi podkastni tinglash.",
        "estimatedDurationMinutes": 14,
        "icon": "🧠",
        "steps": [
            {
                "id": "en-b1-u2-l4-s1",
                "title": "Podkast Skripti",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Podcast: How Habits Shape Our Success",
                    "explanation": "Psixolog doktor Robertsning odatlar haqidagi fikrlari.",
                    "keyPoints": [
                        "\"Small daily habits compound into massive achievements over time.\"",
                        "\"If you repeat a behavior in the same context for 66 days, it becomes automatic.\"",
                        "\"Eliminating friction makes good habits much easier to maintain.\""
                    ],
                    "vocabulary": [
                        {
                            "term": "Compound",
                            "reading": "/ˈkɒm.paʊnd/",
                            "meaning": "Vaqt o'tishi bilan jamlanib ko'paymoq",
                            "exampleSentence": "Knowledge compounds like interest.",
                            "exampleTranslation": "Bilim foiz kabi jamlanib oshadi."
                        },
                        {
                            "term": "Friction",
                            "reading": "/ˈfrɪk.ʃən/",
                            "meaning": "Qarshilik / To'siq",
                            "exampleSentence": "Reduce friction to build good habits.",
                            "exampleTranslation": "Yaxshi odatlarni shakllantirish uchun to'siqlarni kamaytiring."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Listening: Podcast on Behavioral Psychology",
                            "meaning": "Odamlarning qaror qabul qilish psixologiyasi haqidagi podkastni tinglash.",
                            "usageNotes": "Psixolog doktor Robertsning odatlar haqidagi fikrlari.",
                            "examples": [
                                {
                                    "sentence": "Knowledge compounds like interest.",
                                    "translation": "Bilim foiz kabi jamlanib oshadi."
                                },
                                {
                                    "sentence": "Reduce friction to build good habits.",
                                    "translation": "Yaxshi odatlarni shakllantirish uchun to'siqlarni kamaytiring."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l4-s2",
                "title": "Tinglash Mashqi",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Podkast bo'yicha to'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u2-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "According to the research, approximately how many days does it take to automate a habit?",
                            "options": [
                                "21 days",
                                "66 days",
                                "100 days",
                                "10 days"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Matnda 66 kun ko'rsatilgan."
                        },
                        {
                            "id": "en-b1-u2-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Reduce friction to build good habits.\"",
                            "options": [
                                "delay",
                                "Friction",
                                "doubt",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Friction\" (Qarshilik / To'siq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u2-l4-q1",
                            "question": "What makes good habits easier to maintain?",
                            "options": [
                                "Making tasks harder",
                                "Eliminating friction",
                                "Ignoring the environment",
                                "Working without sleep"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Eliminating friction."
                        },
                        {
                            "id": "en-b1-u2-l4-q2",
                            "question": "How do small habits lead to massive results?",
                            "options": [
                                "By compounding over time",
                                "Through pure luck",
                                "By giving up early",
                                "Instantly in one hour"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "By compounding over time."
                        },
                        {
                            "id": "en-b1-u2-l4-q3",
                            "question": "\"Automatic\" nimani bildiradi?",
                            "options": [
                                "Qiyin",
                                "Noma'lum",
                                "Zararli",
                                "O'z-o'zidan (beixtiyor) sodir bo'ladigan"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Automatic — Avtomatik/O'z-o'zidan."
                        },
                        {
                            "id": "en-b1-u2-l4-q4",
                            "question": "Who is the speaker in the podcast?",
                            "options": [
                                "A psychologist",
                                "A car driver",
                                "A chef",
                                "A computer programmer"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Psychologist Dr. Roberts."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u2-l5",
        "courseId": "english-b1",
        "unitId": "en-b1-u2",
        "unitTitle": "Unit 2: Conditionals & Hypotheticals",
        "language": "en",
        "level": "B1",
        "lessonNumber": 5,
        "title": "B1 Structured Writing: Opinion Paragraph",
        "description": "Fikrni mantiqiy dalillar va bog'lovchilar bilan asoslab paragraf yozish.",
        "estimatedDurationMinutes": 15,
        "icon": "✍️",
        "steps": [
            {
                "id": "en-b1-u2-l5-s1",
                "title": "Fikr Paragrafi Strukturasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Structuring an Opinion Paragraph",
                    "explanation": "1. Topic sentence (asosiy fikr), 2. Supporting reasons & examples (sabablar va misollar), 3. Concluding sentence (xulosa). Bog'lovchilar: Firstly, Furthermore, In addition, Therefore.",
                    "keyPoints": [
                        "Topic sentence: \"In my view, remote work provides substantial benefits for employees.\"",
                        "Support: \"Firstly, it eliminates long commuting times. Furthermore, it allows for flexible scheduling.\"",
                        "Conclusion: \"In conclusion, working from home boosts overall productivity.\""
                    ],
                    "vocabulary": [
                        {
                            "term": "Furthermore",
                            "reading": "/ˌfɜː.ðəˈmɔːr/",
                            "meaning": "Bundan tashqari / Qolaversa",
                            "exampleSentence": "Furthermore, it saves money.",
                            "exampleTranslation": "Qolaversa, bu pulni tejaydi."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Structured Writing: Opinion Paragraph",
                            "meaning": "Fikrni mantiqiy dalillar va bog'lovchilar bilan asoslab paragraf yozish.",
                            "usageNotes": "1. Topic sentence (asosiy fikr), 2. Supporting reasons & examples (sabablar va misollar), 3. Concluding sentence (xulosa). Bog'lovchilar: Firstly, Furthermore, In addition, Therefore.",
                            "examples": [
                                {
                                    "sentence": "Furthermore, it saves money.",
                                    "translation": "Qolaversa, bu pulni tejaydi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l5-s2",
                "title": "Bog'lovchilar Mashqi",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri bog'lovchini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u2-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"He trained every day; _______, he won first place.\"",
                            "options": [
                                "therefore",
                                "however",
                                "although",
                                "despite"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Natija bog'lovchisi: therefore (shuning uchun)."
                        },
                        {
                            "id": "en-b1-u2-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"We need to find a more efficient solution.\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "Efficient",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Efficient\" (Samarali) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u2-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u2-l5-q1",
                            "question": "Which transition expresses an additional supporting point?",
                            "options": [
                                "In addition",
                                "In contrast",
                                "However",
                                "Despite this"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "In addition (Qo'shimcha ravishda)."
                        },
                        {
                            "id": "en-b1-u2-l5-q2",
                            "question": "Where is the topic sentence usually placed in an opinion paragraph?",
                            "options": [
                                "In the middle",
                                "Nowhere",
                                "At the very beginning",
                                "At the very end"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "At the beginning."
                        },
                        {
                            "id": "en-b1-u2-l5-q3",
                            "question": "\"In conclusion\" iborasi qachon ishlatiladi?",
                            "options": [
                                "Xulosa chiqarishda",
                                "Qarshi fikr bildirganda",
                                "Birinchi dalilni kiritganda",
                                "Salomlashganda"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Xulosalashda."
                        },
                        {
                            "id": "en-b1-u2-l5-q4",
                            "question": "Choose the correct sentence:",
                            "options": [
                                "Despite it was raining, they enjoyed.",
                                "In spite it was raining, they enjoyed.",
                                "Although it was raining, but they enjoyed the hike.",
                                "Although it was raining, they enjoyed the hike."
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Although + Clause (but ishlatilmaydi)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u3-l1",
        "courseId": "english-b1",
        "unitId": "en-b1-u3",
        "unitTitle": "Unit 3: Passive Voice & Reported Speech",
        "language": "en",
        "level": "B1",
        "lessonNumber": 1,
        "title": "Passive Voice: Present & Past Simple",
        "description": "Majhul nisbat (am/is/are + V3, was/were + V3) — harakat bajaruvchisidan ko'ra harakat natijasi muhim bo'lganda.",
        "estimatedDurationMinutes": 15,
        "icon": "⚙️",
        "steps": [
            {
                "id": "en-b1-u3-l1-s1",
                "title": "Majhul Nisbat Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Passive Voice: Be + V3",
                    "explanation": "Ish-harakatni kim bajargani noma'lum yoki muhim bo'lmaganda majhul nisbat qo'llaniladi.",
                    "keyPoints": [
                        "Present Simple: English is spoken all over the world.",
                        "Past Simple: This castle was built in the 15th century.",
                        "By + agent: The telephone was invented by Alexander Graham Bell."
                    ],
                    "vocabulary": [
                        {
                            "term": "Invent",
                            "reading": "/ɪnˈvent/",
                            "meaning": "Kashf / Ixtiro qilmoq",
                            "exampleSentence": "The wheel was invented thousands of years ago.",
                            "exampleTranslation": "G'ildirak ming yillar oldin ixtiro qilingan."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Passive Voice: Present & Past Simple",
                            "meaning": "Majhul nisbat (am/is/are + V3, was/were + V3) — harakat bajaruvchisidan ko'ra harakat natijasi muhim bo'lganda.",
                            "usageNotes": "Ish-harakatni kim bajargani noma'lum yoki muhim bo'lmaganda majhul nisbat qo'llaniladi.",
                            "examples": [
                                {
                                    "sentence": "The wheel was invented thousands of years ago.",
                                    "translation": "G'ildirak ming yillar oldin ixtiro qilingan."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri majhul nisbat shaklini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u3-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Millions of emails _______ (send) every minute.\"",
                            "options": [
                                "is sent",
                                "were sent",
                                "are send",
                                "are sent"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Emails ko'plik: are sent."
                        },
                        {
                            "id": "en-b1-u3-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fluency is a core requirement for this role.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Requirement"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Requirement\" (Talab, shart) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u3-l1-q1",
                            "question": "The Mona Lisa _______ painted by Leonardo da Vinci.",
                            "options": [
                                "is",
                                "were",
                                "has",
                                "was"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Was painted."
                        },
                        {
                            "id": "en-b1-u3-l1-q2",
                            "question": "These products _______ in Germany.",
                            "options": [
                                "are manufactured",
                                "manufactures",
                                "manufactured",
                                "is manufactured"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Are manufactured."
                        },
                        {
                            "id": "en-b1-u3-l1-q3",
                            "question": "The window _______ broken by the strong storm yesterday.",
                            "options": [
                                "is",
                                "was",
                                "had",
                                "were"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Was broken."
                        },
                        {
                            "id": "en-b1-u3-l1-q4",
                            "question": "Active: \"They clean the rooms daily.\" -> Passive: \"The rooms _______ daily.\"",
                            "options": [
                                "cleaned",
                                "were cleaned",
                                "are cleaned",
                                "is cleaned"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "The rooms are cleaned."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u3-l2",
        "courseId": "english-b1",
        "unitId": "en-b1-u3",
        "unitTitle": "Unit 3: Passive Voice & Reported Speech",
        "language": "en",
        "level": "B1",
        "lessonNumber": 2,
        "title": "Reported Speech: Statements & Backshift",
        "description": "O'zlashtirma gap: zamonlarning bir pog'ona orqaga siljishi (backshift).",
        "estimatedDurationMinutes": 15,
        "icon": "💬",
        "steps": [
            {
                "id": "en-b1-u3-l2-s1",
                "title": "O'zlashtirma Gap Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Reported Speech (Said that...)",
                    "explanation": "Birovning gapini boshqaga yetkazganda asosiy fe'l o'tgan zamonda bo'lsa (He said...), ichki zamonlar bir pog'ona o'tmishga suriladi.",
                    "keyPoints": [
                        "Present Simple -> Past Simple: \"I am tired\" -> He said he was tired.",
                        "Present Continuous -> Past Continuous: \"I am studying\" -> She said she was studying.",
                        "Will -> Would: \"I will call\" -> He said he would call."
                    ],
                    "vocabulary": [
                        {
                            "term": "Tell",
                            "reading": "/tel/",
                            "meaning": "Aytmoq (kimga: tell me)",
                            "exampleSentence": "He told me the good news.",
                            "exampleTranslation": "U menga xushxabarni aytdi."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Reported Speech: Statements & Backshift",
                            "meaning": "O'zlashtirma gap: zamonlarning bir pog'ona orqaga siljishi (backshift).",
                            "usageNotes": "Birovning gapini boshqaga yetkazganda asosiy fe'l o'tgan zamonda bo'lsa (He said...), ichki zamonlar bir pog'ona o'tmishga suriladi.",
                            "examples": [
                                {
                                    "sentence": "He told me the good news.",
                                    "translation": "U menga xushxabarni aytdi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri o'zlashtirilgan shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u3-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I live in Tokyo.\" -> He said that he _______ in Tokyo.",
                            "options": [
                                "lived",
                                "has lived",
                                "lives",
                                "is living"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Present Simple -> Past Simple: lived."
                        },
                        {
                            "id": "en-b1-u3-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Her grades improved significantly this term.\"",
                            "options": [
                                "Significantly",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Significantly\" (Sezilarli darajada) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u3-l2-q1",
                            "question": "\"I will help you tomorrow.\" -> She said that she _______ help me the next day.",
                            "options": [
                                "would",
                                "could",
                                "will",
                                "can"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Will -> would."
                        },
                        {
                            "id": "en-b1-u3-l2-q2",
                            "question": "He told _______ that he had passed the exam.",
                            "options": [
                                "to me",
                                "myself",
                                "I",
                                "me"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Told me (told to me EMAS)."
                        },
                        {
                            "id": "en-b1-u3-l2-q3",
                            "question": "\"We are working on a new project.\" -> They said they _______ on a new project.",
                            "options": [
                                "worked",
                                "have worked",
                                "were working",
                                "are working"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Are working -> were working."
                        },
                        {
                            "id": "en-b1-u3-l2-q4",
                            "question": "\"I have lost my passport.\" -> He explained that he _______ his passport.",
                            "options": [
                                "loses",
                                "had lost",
                                "has lost",
                                "lost"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Have lost -> had lost."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u3-l3",
        "courseId": "english-b1",
        "unitId": "en-b1-u3",
        "unitTitle": "Unit 3: Passive Voice & Reported Speech",
        "language": "en",
        "level": "B1",
        "lessonNumber": 3,
        "title": "Reported Questions & Commands (asked if / told to)",
        "description": "So'roq va buyruq gaplarni o'zlashtirish (asked where I lived, told me to wait).",
        "estimatedDurationMinutes": 14,
        "icon": "📢",
        "steps": [
            {
                "id": "en-b1-u3-l3-s1",
                "title": "O'zlashtirma Savollar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Reported Questions & Imperatives",
                    "explanation": "Yes/No savollarda \"if/whether\" qo'yiladi va gap darak tartibiga o'tadi (He asked if I was ready). Buyruqlarda \"told to / asked to\" ishlatiladi (He told me to sit down).",
                    "keyPoints": [
                        "\"Where do you live?\" -> He asked me where I lived.",
                        "\"Don't touch!\" -> The teacher told us not to touch."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Reported Questions & Commands (asked if / told to)",
                            "meaning": "So'roq va buyruq gaplarni o'zlashtirish (asked where I lived, told me to wait).",
                            "usageNotes": "Yes/No savollarda \"if/whether\" qo'yiladi va gap darak tartibiga o'tadi (He asked if I was ready). Buyruqlarda \"told to / asked to\" ishlatiladi (He told me to sit down).",
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
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri so'z tartibini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u3-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Are you hungry?\" -> She asked me if I _______ hungry.",
                            "options": [
                                "am",
                                "was",
                                "had been",
                                "were"
                            ],
                            "correctAnswer": 1,
                            "explanation": "She asked me if I was hungry."
                        },
                        {
                            "id": "en-b1-u3-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Traveling gives you a broader perspective on life.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Perspective",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Perspective\" (Nuqtayi nazar) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u3-l3-q1",
                            "question": "The doctor advised me _______ drink more water.",
                            "options": [
                                "for",
                                "to",
                                "should",
                                "that"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Advised me to drink."
                        },
                        {
                            "id": "en-b1-u3-l3-q2",
                            "question": "\"Where is the station?\" -> He asked me where the station _______.",
                            "options": [
                                "did",
                                "is",
                                "was",
                                "was it"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Darak so'z tartibi: where the station was."
                        },
                        {
                            "id": "en-b1-u3-l3-q3",
                            "question": "Mom told me _______ make noise.",
                            "options": [
                                "don't",
                                "no to",
                                "to not",
                                "not to"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Not to make noise."
                        },
                        {
                            "id": "en-b1-u3-l3-q4",
                            "question": "She asked me if I _______ ever visited Samarkand.",
                            "options": [
                                "had",
                                "was",
                                "did",
                                "have"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "If I had ever visited."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u3-l4",
        "courseId": "english-b1",
        "unitId": "en-b1-u3",
        "unitTitle": "Unit 3: Passive Voice & Reported Speech",
        "language": "en",
        "level": "B1",
        "lessonNumber": 4,
        "title": "B1 Formal Letter of Inquiry",
        "description": "Rasmiy ma'lumot so'rash xati va xushmuomala iboralar.",
        "estimatedDurationMinutes": 15,
        "icon": "📜",
        "steps": [
            {
                "id": "en-b1-u3-l4-s1",
                "title": "Rasmiy Xat Yozish",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Letter of Inquiry Template",
                    "explanation": "Salomlashish: Dear Mr./Ms. [Surname] yoki Dear Sir/Madam. Xat maqsadi: I am writing to inquire about... Xulosa: I look forward to hearing from you. Tugatish: Yours sincerely (nom ma'lum bo'lsa) / Yours faithfully (nom noma'lum bo'lsa).",
                    "vocabulary": [
                        {
                            "term": "Inquire",
                            "reading": "/ɪnˈkwaɪər/",
                            "meaning": "Surishtirmoq / Ma'lumot so'ramoq",
                            "exampleSentence": "I am writing to inquire about the course fees.",
                            "exampleTranslation": "Kurs to'lovlari haqida ma'lumot so'rab yozyapman."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Formal Letter of Inquiry",
                            "meaning": "Rasmiy ma'lumot so'rash xati va xushmuomala iboralar.",
                            "usageNotes": "Salomlashish: Dear Mr./Ms. [Surname] yoki Dear Sir/Madam. Xat maqsadi: I am writing to inquire about... Xulosa: I look forward to hearing from you. Tugatish: Yours sincerely (nom ma'lum bo'lsa) / Yours faithfully (nom noma'lum bo'lsa).",
                            "examples": [
                                {
                                    "sentence": "I am writing to inquire about the course fees.",
                                    "translation": "Kurs to'lovlari haqida ma'lumot so'rab yozyapman."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l4-s2",
                "title": "Rasmiy Iboralar Mashqi",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri rasmiy iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u3-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "Which phrase is appropriate for ending a formal letter addressed to \"Dear Sir/Madam\"?",
                            "options": [
                                "Best wishes,",
                                "Cheers,",
                                "Yours faithfully,",
                                "Yours sincerely,"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Dear Sir/Madam bilan \"Yours faithfully\" ishlatiladi."
                        },
                        {
                            "id": "en-b1-u3-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"We need to find a more efficient solution.\"",
                            "options": [
                                "Efficient",
                                "reluctance",
                                "delay",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Efficient\" (Samarali) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u3-l4-q1",
                            "question": "I look forward to _______ from you soon.",
                            "options": [
                                "heard",
                                "be heard",
                                "hearing",
                                "hear"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Look forward to + V-ing: hearing."
                        },
                        {
                            "id": "en-b1-u3-l4-q2",
                            "question": "\"Could you please provide further details?\" Bu nima?",
                            "options": [
                                "Xayrlashuv",
                                "Xushmuomala rasmiy so'rov",
                                "Do'stona hazil",
                                "Norozilik shikoyati"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Polite formal request."
                        },
                        {
                            "id": "en-b1-u3-l4-q3",
                            "question": "Which opening is correct when you know the recipient's name?",
                            "options": [
                                "Dear Ms. Johnson,",
                                "Dear Johnson,",
                                "Hi Ms. Johnson,",
                                "Dear Madam Johnson,"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Dear Ms. Johnson."
                        },
                        {
                            "id": "en-b1-u3-l4-q4",
                            "question": "Choose the most formal sentence:",
                            "options": [
                                "Send me the brochure quickly.",
                                "Give me the info please.",
                                "Can you chuck me the brochure?",
                                "I would be grateful if you could send me the brochure."
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "I would be grateful if you could..."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u3-l5",
        "courseId": "english-b1",
        "unitId": "en-b1-u3",
        "unitTitle": "Unit 3: Passive Voice & Reported Speech",
        "language": "en",
        "level": "B1",
        "lessonNumber": 5,
        "title": "B1 Speaking: Expressing Opinions & Agreeing/Disagreeing",
        "description": "Mavzular bo'yicha o'z fikrini bildirish, rozi bo'lish va xushmuomalalik bilan rad etish.",
        "estimatedDurationMinutes": 14,
        "icon": "🗣️",
        "steps": [
            {
                "id": "en-b1-u3-l5-s1",
                "title": "Muzokara Iboralari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Expressing Opinions & Nuanced Agreement",
                    "explanation": "O'z fikrini bildirish: In my opinion, From my perspective, As far as I am concerned. Rozilik: I completely agree, That is a valid point. E'tiroz: I see your point, but... / I'm afraid I disagree.",
                    "vocabulary": [
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtai nazar",
                            "exampleSentence": "From my perspective, this is effective.",
                            "exampleTranslation": "Mening nazarimda, bu juda samarali."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Speaking: Expressing Opinions & Agreeing/Disagreeing",
                            "meaning": "Mavzular bo'yicha o'z fikrini bildirish, rozi bo'lish va xushmuomalalik bilan rad etish.",
                            "usageNotes": "O'z fikrini bildirish: In my opinion, From my perspective, As far as I am concerned. Rozilik: I completely agree, That is a valid point. E'tiroz: I see your point, but... / I'm afraid I disagree.",
                            "examples": [
                                {
                                    "sentence": "From my perspective, this is effective.",
                                    "translation": "Mening nazarimda, bu juda samarali."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u3-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "Which phrase politely expresses disagreement?",
                            "options": [
                                "That is stupid.",
                                "No, never!",
                                "You are totally wrong!",
                                "I see what you mean, but..."
                            ],
                            "correctAnswer": 3,
                            "explanation": "I see what you mean, but... (Xushmuomala e'tiroz)."
                        },
                        {
                            "id": "en-b1-u3-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fluency is a core requirement for this role.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "reluctance",
                                "Requirement"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Requirement\" (Talab, shart) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u3-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u3-l5-q1",
                            "question": "\"As far as I am concerned\" iborasi nima maqsadda ishlatiladi?",
                            "options": [
                                "Kechirim so'raganda",
                                "Vaqtni belgilaganda",
                                "Xayrlashganda",
                                "Shaxsiy fikr bildirishda"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Mening fikrimcha / Qolversa."
                        },
                        {
                            "id": "en-b1-u3-l5-q2",
                            "question": "I _______ agree with your proposal; it makes complete sense.",
                            "options": [
                                "entirely",
                                "barely",
                                "hardly",
                                "rarely"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "I entirely agree."
                        },
                        {
                            "id": "en-b1-u3-l5-q3",
                            "question": "Choose the most natural agreement phrase:",
                            "options": [
                                "I am point you.",
                                "It is agreed by me.",
                                "That's a great point.",
                                "You have agree."
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "That's a great point."
                        },
                        {
                            "id": "en-b1-u3-l5-q4",
                            "question": "Which word completes: \"To be _______, I have never thought about that.\"",
                            "options": [
                                "honest",
                                "honesty",
                                "honor",
                                "honestly"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "To be honest (To'g'risini aytsam)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u4-l1",
        "courseId": "english-b1",
        "unitId": "en-b1-u4",
        "unitTitle": "Unit 4: Relative Clauses & Modal Deduction",
        "language": "en",
        "level": "B1",
        "lessonNumber": 1,
        "title": "Defining Relative Clauses (who, which, that, where)",
        "description": "Aniqlovchi ergash gaplar orqali odamlar, narsalar va joylarni aniqlashtirish.",
        "estimatedDurationMinutes": 14,
        "icon": "🔗",
        "steps": [
            {
                "id": "en-b1-u4-l1-s1",
                "title": "Defining Clauses",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Who, Which, That, Where, Whose",
                    "explanation": "Who — odamlar uchun, Which/That — narsalar va hayvonlar uchun, Where — joylar uchun, Whose — egalik uchun.",
                    "keyPoints": [
                        "The woman who lives next door is an architect.",
                        "The book which / that I borrowed was fascinating.",
                        "The cafe where we met is closed today."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Defining Relative Clauses (who, which, that, where)",
                            "meaning": "Aniqlovchi ergash gaplar orqali odamlar, narsalar va joylarni aniqlashtirish.",
                            "usageNotes": "Who — odamlar uchun, Which/That — narsalar va hayvonlar uchun, Where — joylar uchun, Whose — egalik uchun.",
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
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri nisbiy olmoshni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u4-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"The man _______ car was stolen reported it to the police.\"",
                            "options": [
                                "whose",
                                "which",
                                "whom",
                                "who"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Egalik: whose car."
                        },
                        {
                            "id": "en-b1-u4-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Her grades improved significantly this term.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Significantly",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Significantly\" (Sezilarli darajada) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u4-l1-q1",
                            "question": "A doctor is a person _______ treats ill patients.",
                            "options": [
                                "who",
                                "where",
                                "whose",
                                "which"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Inson uchun: who."
                        },
                        {
                            "id": "en-b1-u4-l1-q2",
                            "question": "This is the school _______ I studied ten years ago.",
                            "options": [
                                "which",
                                "where",
                                "that",
                                "who"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Joy uchun: where."
                        },
                        {
                            "id": "en-b1-u4-l1-q3",
                            "question": "I bought a gadget _______ helps monitor sleep quality.",
                            "options": [
                                "where",
                                "who",
                                "that",
                                "whose"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Narsa uchun: that / which."
                        },
                        {
                            "id": "en-b1-u4-l1-q4",
                            "question": "Do you know the girl _______ father is a pilot?",
                            "options": [
                                "whom",
                                "which",
                                "who",
                                "whose"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Whose father."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u4-l2",
        "courseId": "english-b1",
        "unitId": "en-b1-u4",
        "unitTitle": "Unit 4: Relative Clauses & Modal Deduction",
        "language": "en",
        "level": "B1",
        "lessonNumber": 2,
        "title": "Non-defining Relative Clauses (extra info with commas)",
        "description": "Qo'shimcha ma'lumot beruvchi ergash gaplar va vergul qo'yilishi.",
        "estimatedDurationMinutes": 14,
        "icon": "✍️",
        "steps": [
            {
                "id": "en-b1-u4-l2-s1",
                "title": "Non-defining Clauses",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Non-defining Relative Clauses",
                    "explanation": "Asosiy gapga shunchaki qo'shimcha ma'lumot qo'shadi, vergullar bilan ajratiladi. Bu turda \"that\" ishlatilmaydi!",
                    "keyPoints": [
                        "My brother, who lives in Berlin, is visiting us next week.",
                        "Paris, which is the capital of France, attracts millions of tourists."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Non-defining Relative Clauses (extra info with commas)",
                            "meaning": "Qo'shimcha ma'lumot beruvchi ergash gaplar va vergul qo'yilishi.",
                            "usageNotes": "Asosiy gapga shunchaki qo'shimcha ma'lumot qo'shadi, vergullar bilan ajratiladi. Bu turda \"that\" ishlatilmaydi!",
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
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri olmoshni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u4-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Samarkand, _______ is an ancient city, is famous for its Registan square.\"",
                            "options": [
                                "that",
                                "where",
                                "who",
                                "which"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Verguldan keyin \"that\" ishlatilmaydi: which."
                        },
                        {
                            "id": "en-b1-u4-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Traveling gives you a broader perspective on life.\"",
                            "options": [
                                "doubt",
                                "Perspective",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Perspective\" (Nuqtayi nazar) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u4-l2-q1",
                            "question": "Which sentence has correct punctuation?",
                            "options": [
                                "My mother who is a doctor, loves her job.",
                                "My mother who is a doctor loves, her job.",
                                "My mother, that is a doctor, loves her job.",
                                "My mother, who is a doctor, loves her job."
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Ikkala tomondan vergul bilan ajratilgan."
                        },
                        {
                            "id": "en-b1-u4-l2-q2",
                            "question": "Can \"that\" be used in a non-defining relative clause?",
                            "options": [
                                "Only for people",
                                "Only for places",
                                "No, never",
                                "Yes, always"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Non-defining gaplarda \"that\" ishlatilmaydi."
                        },
                        {
                            "id": "en-b1-u4-l2-q3",
                            "question": "Albert Einstein, _______ was born in Germany, won the Nobel Prize.",
                            "options": [
                                "where",
                                "who",
                                "which",
                                "that"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Inson uchun: who."
                        },
                        {
                            "id": "en-b1-u4-l2-q4",
                            "question": "The company's headquarters, _______ are located in New York, employ 500 staff.",
                            "options": [
                                "which",
                                "that",
                                "where",
                                "who"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Which."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u4-l3",
        "courseId": "english-b1",
        "unitId": "en-b1-u4",
        "unitTitle": "Unit 4: Relative Clauses & Modal Deduction",
        "language": "en",
        "level": "B1",
        "lessonNumber": 3,
        "title": "Modals of Deduction: Must, Might, Can't be",
        "description": "Mantiqiy xulosa chiqarish: 100% ishonch (must be), ehtimol (might be), imkonsiz (can't be).",
        "estimatedDurationMinutes": 14,
        "icon": "🔍",
        "steps": [
            {
                "id": "en-b1-u4-l3-s1",
                "title": "Mantiqiy Xulosa Modal Fe'llari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Must, Might / May, Can't",
                    "explanation": "Must be — 95%+ ishonch (\"shunday bo'lsa kerak\"). Might / May be — 50% ehtimol (\"bo'lishi mumkin\"). Can't be — 0% ehtimol (\"bo'lishi mumkin emas\").",
                    "keyPoints": [
                        "He has a Ferrari; he must be wealthy.",
                        "She hasn't answered; she might be in a meeting.",
                        "He only left 5 minutes ago; he can't be in Samarkand already."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Modals of Deduction: Must, Might, Can't be",
                            "meaning": "Mantiqiy xulosa chiqarish: 100% ishonch (must be), ehtimol (might be), imkonsiz (can't be).",
                            "usageNotes": "Must be — 95%+ ishonch (\"shunday bo'lsa kerak\"). Might / May be — 50% ehtimol (\"bo'lishi mumkin\"). Can't be — 0% ehtimol (\"bo'lishi mumkin emas\").",
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
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri modal xulosani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u4-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"The lights are off and no one answers the door. They _______ be out.\"",
                            "options": [
                                "shouldn't",
                                "can't",
                                "must",
                                "needn't"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Mantiqiy kuchli xulosa: must be out."
                        },
                        {
                            "id": "en-b1-u4-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"We need to find a more efficient solution.\"",
                            "options": [
                                "Efficient",
                                "reluctance",
                                "doubt",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Efficient\" (Samarali) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u4-l3-q1",
                            "question": "That _______ be John. He is in London this week!",
                            "options": [
                                "might",
                                "must",
                                "can't",
                                "should"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Imkonsiz: can't be."
                        },
                        {
                            "id": "en-b1-u4-l3-q2",
                            "question": "Take an umbrella. It _______ rain later this afternoon.",
                            "options": [
                                "can't",
                                "ought",
                                "must to",
                                "might"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Ehtimol: might rain."
                        },
                        {
                            "id": "en-b1-u4-l3-q3",
                            "question": "She studied for 10 hours today. She _______ be exhausted.",
                            "options": [
                                "must",
                                "shouldn't",
                                "might not",
                                "can't"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Kuchli xulosa: must be exhausted."
                        },
                        {
                            "id": "en-b1-u4-l3-q4",
                            "question": "\"This restaurant can't be cheap; look at the diamond chandeliers.\" Bu jumlada can't be nima ma'noda?",
                            "options": [
                                "Arzon bo'lishi kerak",
                                "Arzon bo'lishi shart",
                                "Arzon bo'lishi aslo mumkin emas (kuchli inkor xulosa)",
                                "Arzon bo'lishi mumkin"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Mantiqiy inkor xulosa."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u4-l4",
        "courseId": "english-b1",
        "unitId": "en-b1-u4",
        "unitTitle": "Unit 4: Relative Clauses & Modal Deduction",
        "language": "en",
        "level": "B1",
        "lessonNumber": 4,
        "title": "Linking Words & Cohesion (However, Although, Therefore)",
        "description": "Fikrlarni mantiqiy bog'lash, zidlash va natija ko'rsatish vositalari.",
        "estimatedDurationMinutes": 14,
        "icon": "🧩",
        "steps": [
            {
                "id": "en-b1-u4-l4-s1",
                "title": "Bog'lovchilar Tizimi",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Contrast, Result and Addition",
                    "explanation": "Contrast (Zidlash): However, Although, Despite, In spite of. Result (Natija): Therefore, As a result, Consequently. Addition (Qo'shimcha): Moreover, Furthermore, In addition.",
                    "keyPoints": [
                        "Despite + Noun / V-ing (Despite the rain, we went out).",
                        "Although + Clause (Although it was raining, we went out)."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Linking Words & Cohesion (However, Although, Therefore)",
                            "meaning": "Fikrlarni mantiqiy bog'lash, zidlash va natija ko'rsatish vositalari.",
                            "usageNotes": "Contrast (Zidlash): However, Although, Despite, In spite of. Result (Natija): Therefore, As a result, Consequently. Addition (Qo'shimcha): Moreover, Furthermore, In addition.",
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
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri bog'lovchini tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u4-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ the heavy traffic, we arrived on time.\"",
                            "options": [
                                "However",
                                "Despite",
                                "Although",
                                "Even though"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Otdan oldin: Despite the heavy traffic."
                        },
                        {
                            "id": "en-b1-u4-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fluency is a core requirement for this role.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Requirement"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Requirement\" (Talab, shart) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u4-l4-q1",
                            "question": "He worked extremely hard. _______, he earned a well-deserved promotion.",
                            "options": [
                                "However",
                                "Therefore",
                                "Although",
                                "Despite"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Therefore (Natijada)."
                        },
                        {
                            "id": "en-b1-u4-l4-q2",
                            "question": "_______ she felt unwell, she attended the lecture.",
                            "options": [
                                "Although",
                                "Despite",
                                "In spite of",
                                "However"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Although + sentence."
                        },
                        {
                            "id": "en-b1-u4-l4-q3",
                            "question": "The hotel was expensive. _______, the service was disappointing.",
                            "options": [
                                "Despite",
                                "Although",
                                "Even though",
                                "Furthermore"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Furthermore (Bundan tashqari)."
                        },
                        {
                            "id": "en-b1-u4-l4-q4",
                            "question": "Which word is followed by a comma when placed at the start of a sentence?",
                            "options": [
                                "However,",
                                "Because",
                                "While",
                                "Although"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "However, ..."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u4-l5",
        "courseId": "english-b1",
        "unitId": "en-b1-u4",
        "unitTitle": "Unit 4: Relative Clauses & Modal Deduction",
        "language": "en",
        "level": "B1",
        "lessonNumber": 5,
        "title": "B1 Reading: The Future of Global Remote Work",
        "description": "Masofaviy ish va xalqaro jamoalar haqidagi B1 tahliliy maqolani o'qish.",
        "estimatedDurationMinutes": 15,
        "icon": "🌐",
        "steps": [
            {
                "id": "en-b1-u4-l5-s1",
                "title": "Maqolani O'qish",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "The Shift to Hybrid Workspaces",
                    "explanation": "Matnni tahlil qilib o'qing.",
                    "keyPoints": [
                        "The global workforce has undergone significant transformations in recent years.",
                        "Hybrid models allow professionals to balance collaborative office meetings with focused home sessions.",
                        "Digital communication platforms enable seamless teamwork across multiple time zones.",
                        "However, maintaining corporate culture and preventing burnout require proactive management."
                    ],
                    "vocabulary": [
                        {
                            "term": "Transformation",
                            "reading": "/ˌtræns.fəˈmeɪ.ʃən/",
                            "meaning": "Katta o'zgarish / Transformatsiya",
                            "exampleSentence": "Digital transformation is essential.",
                            "exampleTranslation": "Raqamli transformatsiya zarur."
                        },
                        {
                            "term": "Burnout",
                            "reading": "/ˈbɜːn.aʊt/",
                            "meaning": "Haddan tashqari toliqish / Ishdan sovush",
                            "exampleSentence": "Long hours can cause burnout.",
                            "exampleTranslation": "Uzoq ish vaqti toliqishga olib kelishi mumkin."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Reading: The Future of Global Remote Work",
                            "meaning": "Masofaviy ish va xalqaro jamoalar haqidagi B1 tahliliy maqolani o'qish.",
                            "usageNotes": "Matnni tahlil qilib o'qing.",
                            "examples": [
                                {
                                    "sentence": "Digital transformation is essential.",
                                    "translation": "Raqamli transformatsiya zarur."
                                },
                                {
                                    "sentence": "Long hours can cause burnout.",
                                    "translation": "Uzoq ish vaqti toliqishga olib kelishi mumkin."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l5-s2",
                "title": "Tushunish Savollari",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Matn bo'yicha to'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u4-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "What do hybrid work models allow professionals to do?",
                            "options": [
                                "Balance office collaboration with home focus",
                                "Eliminate all meetings",
                                "Only work at night",
                                "Never work again"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Balance office collaboration with focused home sessions."
                        },
                        {
                            "id": "en-b1-u4-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Long hours can cause burnout.\"",
                            "options": [
                                "Burnout",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Burnout\" (Haddan tashqari toliqish / Ishdan sovush) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u4-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u4-l5-q1",
                            "question": "What enables seamless teamwork across different time zones?",
                            "options": [
                                "Digital communication platforms",
                                "Fewer computers",
                                "Postal mail",
                                "Slower internet"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Digital communication platforms."
                        },
                        {
                            "id": "en-b1-u4-l5-q2",
                            "question": "What requires proactive management according to the article?",
                            "options": [
                                "Buying more office furniture",
                                "Canceling all projects",
                                "Maintaining culture and preventing burnout",
                                "Reducing salaries"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Maintaining culture and preventing burnout."
                        },
                        {
                            "id": "en-b1-u4-l5-q3",
                            "question": "\"Seamless\" so'zining ma'nosi:",
                            "options": [
                                "Uzluksiz / Bir maromdagi",
                                "Xavfli",
                                "Qiyin",
                                "Qimmat"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Seamless — Uzluksiz, oson integratsiyalashgan."
                        },
                        {
                            "id": "en-b1-u4-l5-q4",
                            "question": "The overall tone of the text is:",
                            "options": [
                                "Angry and critical",
                                "Fictional",
                                "Comedic",
                                "Informative and analytical"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Informative and analytical."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u5-l1",
        "courseId": "english-b1",
        "unitId": "en-b1-u5",
        "unitTitle": "Unit 5: Society & Career Development",
        "language": "en",
        "level": "B1",
        "lessonNumber": 1,
        "title": "Work, Careers & Professional Interviews",
        "description": "Kasbiy faoliyat, ish intervyusi savollari va rezyume tili.",
        "estimatedDurationMinutes": 15,
        "icon": "💼",
        "steps": [
            {
                "id": "en-b1-u5-l1-s1",
                "title": "Intervyu Leksikasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Job Interview Vocabulary",
                    "explanation": "Intervyuda kuchli tomonlarni ko'rsatish: \"My key strengths include problem-solving and adaptability\", \"I have extensive experience in project coordination\".",
                    "vocabulary": [
                        {
                            "term": "Adaptability",
                            "reading": "/əˌdæp.təˈbɪl.ə.ti/",
                            "meaning": "Moslashuvchanlik",
                            "exampleSentence": "Adaptability is vital in dynamic environments.",
                            "exampleTranslation": "O'zgaruvchan muhitda moslashuvchanlik muhimdir."
                        },
                        {
                            "term": "Candidate",
                            "reading": "/ˈkæn.dɪ.dət/",
                            "meaning": "Nomzod",
                            "exampleSentence": "She is the ideal candidate for the position.",
                            "exampleTranslation": "U lavozim uchun eng ideal nomzod."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Work, Careers & Professional Interviews",
                            "meaning": "Kasbiy faoliyat, ish intervyusi savollari va rezyume tili.",
                            "usageNotes": "Intervyuda kuchli tomonlarni ko'rsatish: \"My key strengths include problem-solving and adaptability\", \"I have extensive experience in project coordination\".",
                            "examples": [
                                {
                                    "sentence": "Adaptability is vital in dynamic environments.",
                                    "translation": "O'zgaruvchan muhitda moslashuvchanlik muhimdir."
                                },
                                {
                                    "sentence": "She is the ideal candidate for the position.",
                                    "translation": "U lavozim uchun eng ideal nomzod."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri kasbiy iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u5-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I am applying _______ the marketing manager position.\"",
                            "options": [
                                "to",
                                "at",
                                "in",
                                "for"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Apply for a position (lavozimga ariza topshirmoq)."
                        },
                        {
                            "id": "en-b1-u5-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She is the ideal candidate for the position.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Candidate"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Candidate\" (Nomzod) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u5-l1-q1",
                            "question": "What is a curriculum vitae (CV)?",
                            "options": [
                                "A company bill",
                                "A contract",
                                "A tax form",
                                "A professional resume outlining experience and qualifications"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Professional resume."
                        },
                        {
                            "id": "en-b1-u5-l1-q2",
                            "question": "He has excellent interpersonal and communication _______.",
                            "options": [
                                "skills",
                                "knowledges",
                                "talented",
                                "competent"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Communication skills."
                        },
                        {
                            "id": "en-b1-u5-l1-q3",
                            "question": "\"Deadline\" nimani bildiradi?",
                            "options": [
                                "Maosh kuni",
                                "Vazifani topshirishning oxirgi muddati",
                                "Ish boshlanish vaqti",
                                "Tushlik tanaffusi"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Deadline — Oxirgi muddat."
                        },
                        {
                            "id": "en-b1-u5-l1-q4",
                            "question": "I am responsible _______ managing client relationships.",
                            "options": [
                                "with",
                                "about",
                                "for",
                                "of"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Responsible for."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u5-l2",
        "courseId": "english-b1",
        "unitId": "en-b1-u5",
        "unitTitle": "Unit 5: Society & Career Development",
        "language": "en",
        "level": "B1",
        "lessonNumber": 2,
        "title": "Environment, Climate & Sustainability",
        "description": "Atrof-muhitni muhofaza qilish, iqlim o'zgarishi va ekologik atamalar.",
        "estimatedDurationMinutes": 14,
        "icon": "🌱",
        "steps": [
            {
                "id": "en-b1-u5-l2-s1",
                "title": "Ekologiya Leksikasi",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Environmental Vocabulary",
                    "explanation": "Iqlim o'zgarishi va tabiatni asrash bo'yicha asosiy atamalar.",
                    "vocabulary": [
                        {
                            "term": "Sustainability",
                            "reading": "/səˌsteɪ.nəˈbɪl.ə.ti/",
                            "meaning": "Barqarorlik / Ekologik muvozanat",
                            "exampleSentence": "Sustainability must be a global priority.",
                            "exampleTranslation": "Barqarorlik global ustuvorlik bo'lishi shart."
                        },
                        {
                            "term": "Pollution",
                            "reading": "/pəˈluː.ʃən/",
                            "meaning": "Ifloslanish",
                            "exampleSentence": "Air pollution affects urban health.",
                            "exampleTranslation": "Havo ifloslanishi shahar aholisi salomatligiga ta'sir qiladi."
                        },
                        {
                            "term": "Requirement",
                            "reading": "/rɪˈkwaɪə.mənt/",
                            "meaning": "Talab, shart",
                            "exampleSentence": "Fluency is a core requirement for this role.",
                            "exampleTranslation": "Ravonlik bu lavozim uchun asosiy talabdir."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Environment, Climate & Sustainability",
                            "meaning": "Atrof-muhitni muhofaza qilish, iqlim o'zgarishi va ekologik atamalar.",
                            "usageNotes": "Iqlim o'zgarishi va tabiatni asrash bo'yicha asosiy atamalar.",
                            "examples": [
                                {
                                    "sentence": "Sustainability must be a global priority.",
                                    "translation": "Barqarorlik global ustuvorlik bo'lishi shart."
                                },
                                {
                                    "sentence": "Air pollution affects urban health.",
                                    "translation": "Havo ifloslanishi shahar aholisi salomatligiga ta'sir qiladi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri atamani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u5-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"We must reduce our carbon _______ to combat global warming.\"",
                            "options": [
                                "footprint",
                                "wasteful",
                                "emissionless",
                                "handprint"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Carbon footprint (uglerod izi)."
                        },
                        {
                            "id": "en-b1-u5-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Air pollution affects urban health.\"",
                            "options": [
                                "Pollution",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Pollution\" (Ifloslanish) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u5-l2-q1",
                            "question": "\"Recycle\" nimani bildiradi?",
                            "options": [
                                "Chiqindilarni qayta ishlash",
                                "Suvni isrof qilish",
                                "Daraxtlarni kesish",
                                "Chiqindini yoqish"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Recycle — Qayta ishlash."
                        },
                        {
                            "id": "en-b1-u5-l2-q2",
                            "question": "Deforestation causes loss of natural _______ for wildlife.",
                            "options": [
                                "offices",
                                "roads",
                                "apartments",
                                "habitats"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Natural habitats (yashash muhiti)."
                        },
                        {
                            "id": "en-b1-u5-l2-q3",
                            "question": "Solar and wind are types of _______ energy.",
                            "options": [
                                "fossil",
                                "exhaustible",
                                "renewable",
                                "harmful"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Renewable energy."
                        },
                        {
                            "id": "en-b1-u5-l2-q4",
                            "question": "Global warming leads to rising sea _______.",
                            "options": [
                                "depths",
                                "levels",
                                "waters",
                                "heights"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Sea levels (dengiz sathi)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u5-l3",
        "courseId": "english-b1",
        "unitId": "en-b1-u5",
        "unitTitle": "Unit 5: Society & Career Development",
        "language": "en",
        "level": "B1",
        "lessonNumber": 3,
        "title": "Common Idiomatic Expressions & Collocations",
        "description": "Kundalik va kasbiy ingliz tilidagi eng mashhur idiomalar va so'z birikmalari.",
        "estimatedDurationMinutes": 14,
        "icon": "💡",
        "steps": [
            {
                "id": "en-b1-u5-l3-s1",
                "title": "Idiomalar va Birikmalar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Key Idioms and Collocations",
                    "explanation": "Ingliz tilini tabiiy va boy qilish uchun idiomalar: \"Piece of cake\" (juda oson), \"Hit the nail on the head\" (to'ppa-to'g'ri topmoq), \"Under the weather\" (biroz tobi qochgan).",
                    "vocabulary": [
                        {
                            "term": "Piece of cake",
                            "reading": "/piːs əv keɪk/",
                            "meaning": "Suv ichgandek oson",
                            "exampleSentence": "The exam was a piece of cake.",
                            "exampleTranslation": "Imtihon suv ichgandek oson bo'ldi."
                        },
                        {
                            "term": "Under the weather",
                            "reading": "/ˈʌn.dər ðə ˈweð.ər/",
                            "meaning": "Tobi qochgan / Betob",
                            "exampleSentence": "I felt under the weather yesterday.",
                            "exampleTranslation": "Kecha o'zimni biroz noxush his qildim."
                        },
                        {
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Common Idiomatic Expressions & Collocations",
                            "meaning": "Kundalik va kasbiy ingliz tilidagi eng mashhur idiomalar va so'z birikmalari.",
                            "usageNotes": "Ingliz tilini tabiiy va boy qilish uchun idiomalar: \"Piece of cake\" (juda oson), \"Hit the nail on the head\" (to'ppa-to'g'ri topmoq), \"Under the weather\" (biroz tobi qochgan).",
                            "examples": [
                                {
                                    "sentence": "The exam was a piece of cake.",
                                    "translation": "Imtihon suv ichgandek oson bo'ldi."
                                },
                                {
                                    "sentence": "I felt under the weather yesterday.",
                                    "translation": "Kecha o'zimni biroz noxush his qildim."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri idiomani tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u5-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I am feeling slightly sick today.\" Which idiom expresses this?",
                            "options": [
                                "Break a leg",
                                "Under the weather",
                                "Piece of cake",
                                "Cost an arm and a leg"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Under the weather."
                        },
                        {
                            "id": "en-b1-u5-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"I felt under the weather yesterday.\"",
                            "options": [
                                "delay",
                                "Under the weather",
                                "doubt",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Under the weather\" (Tobi qochgan / Betob) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u5-l3-q1",
                            "question": "\"Break a leg!\" iborasi nima uchun ishlatiladi?",
                            "options": [
                                "Sportda jarohat olganda",
                                "Omad tilashda (Good luck!)",
                                "Jazalaganda",
                                "Doktorga borganida"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Omad tilash (Good luck)."
                        },
                        {
                            "id": "en-b1-u5-l3-q2",
                            "question": "That luxury sports car cost an arm and a _______!",
                            "options": [
                                "hand",
                                "head",
                                "leg",
                                "foot"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Cost an arm and a leg (haddan tashqari qimmat)."
                        },
                        {
                            "id": "en-b1-u5-l3-q3",
                            "question": "To \"hit the nail on the head\" means to:",
                            "options": [
                                "Hammer a real nail",
                                "Arrive early",
                                "Make a mistake",
                                "Describe exactly what is causing a situation"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Aniq nishonga urmoq / to'g'ri topmoq."
                        },
                        {
                            "id": "en-b1-u5-l3-q4",
                            "question": "We need to make a _______ before 5 PM.",
                            "options": [
                                "decision",
                                "decide",
                                "doing",
                                "make"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Make a decision (collocation)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u5-l4",
        "courseId": "english-b1",
        "unitId": "en-b1-u5",
        "unitTitle": "Unit 5: Society & Career Development",
        "language": "en",
        "level": "B1",
        "lessonNumber": 4,
        "title": "B1 Academic Lecture: Psychology of Memory",
        "description": "Xotira va takrorlash qonuniyatlari bo'yicha akademik mini-ma'ruzani tinglab tushunish.",
        "estimatedDurationMinutes": 15,
        "icon": "🎓",
        "steps": [
            {
                "id": "en-b1-u5-l4-s1",
                "title": "Ma'ruza Matni",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Lecture: The Forgetting Curve & Spaced Repetition",
                    "explanation": "Akademik ma'ruza parchasi.",
                    "keyPoints": [
                        "\"Hermann Ebbinghaus discovered that human memory decays exponentially without reinforcement.\"",
                        "\"Spaced repetition algorithms counteract this forgetting curve by scheduling reviews at optimal intervals.\"",
                        "\"Active recall strengthens neural pathways more effectively than passive rereading.\""
                    ],
                    "vocabulary": [
                        {
                            "term": "Reinforcement",
                            "reading": "/ˌriː.ɪnˈfɔːs.mənt/",
                            "meaning": "Mustahkamlash / Kuchaytirish",
                            "exampleSentence": "Memory requires regular reinforcement.",
                            "exampleTranslation": "Xotira muntazam mustahkamlashni talab qiladi."
                        },
                        {
                            "term": "Optimal",
                            "reading": "/ˈɒp.tɪ.məl/",
                            "meaning": "Eng maqbul / Optimal",
                            "exampleSentence": "Find the optimal study schedule.",
                            "exampleTranslation": "Eng maqbul o'quv jadvalini toping."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Academic Lecture: Psychology of Memory",
                            "meaning": "Xotira va takrorlash qonuniyatlari bo'yicha akademik mini-ma'ruzani tinglab tushunish.",
                            "usageNotes": "Akademik ma'ruza parchasi.",
                            "examples": [
                                {
                                    "sentence": "Memory requires regular reinforcement.",
                                    "translation": "Xotira muntazam mustahkamlashni talab qiladi."
                                },
                                {
                                    "sentence": "Find the optimal study schedule.",
                                    "translation": "Eng maqbul o'quv jadvalini toping."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l4-s2",
                "title": "Ma'ruza Tahlili",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Ma'ruza bo'yicha to'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-b1-u5-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "What does active recall do more effectively than passive rereading?",
                            "options": [
                                "Takes zero effort",
                                "Causes quick forgetting",
                                "Strengthens neural pathways",
                                "Wastes time"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Strengthens neural pathways."
                        },
                        {
                            "id": "en-b1-u5-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Find the optimal study schedule.\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "Optimal",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Optimal\" (Eng maqbul / Optimal) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u5-l4-q1",
                            "question": "Who researched the forgetting curve originally?",
                            "options": [
                                "Albert Einstein",
                                "Isaac Newton",
                                "Hermann Ebbinghaus",
                                "Charles Darwin"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Hermann Ebbinghaus."
                        },
                        {
                            "id": "en-b1-u5-l4-q2",
                            "question": "How does spaced repetition prevent forgetting?",
                            "options": [
                                "By studying once for 20 hours",
                                "By scheduling reviews at optimal intervals",
                                "By ignoring difficult words",
                                "By reading backwards"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Scheduling reviews at optimal intervals."
                        },
                        {
                            "id": "en-b1-u5-l4-q3",
                            "question": "\"Decay\" so'zining ilmiy ma'nosi:",
                            "options": [
                                "Asta-sekin yemirilish / Pasayish",
                                "Muzlash",
                                "Yorishish",
                                "Ko'payish"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Decay — Pasayish/so'nish."
                        },
                        {
                            "id": "en-b1-u5-l4-q4",
                            "question": "Which learning method is recommended by the lecture?",
                            "options": [
                                "Passive rereading the night before",
                                "Cramming in one session",
                                "Memorizing without understanding",
                                "Active recall with spaced repetition"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Active recall with spaced repetition."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-b1-u5-l5",
        "courseId": "english-b1",
        "unitId": "en-b1-u5",
        "unitTitle": "Unit 5: Society & Career Development",
        "language": "en",
        "level": "B1",
        "lessonNumber": 5,
        "title": "B1 Capstone Comprehensive Examination",
        "description": "B1 Intermediate darajasini to'liq tasdiqlash va B2 darajasiga o'tish sinovi.",
        "estimatedDurationMinutes": 18,
        "icon": "🏆",
        "steps": [
            {
                "id": "en-b1-u5-l5-s1",
                "title": "B1 Daraja Yakuniy Ko'rib Chiqish",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "B1 Intermediate Mastery Checklist",
                    "explanation": "Ushbu darajada siz Present Perfect (Simple & Continuous), Zero/First/Second Conditionals, Passive Voice, Reported Speech, Relative Clauses va Modal Verbs of Deduction mavzularini to'liq o'zlashtirdingiz.",
                    "keyPoints": [
                        "Complex sentence structures and cohesion",
                        "Work, environment, psychology and academic foundations",
                        "Preparation for IELTS B2 level"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "B1 Capstone Comprehensive Examination",
                            "meaning": "B1 Intermediate darajasini to'liq tasdiqlash va B2 darajasiga o'tish sinovi.",
                            "usageNotes": "Ushbu darajada siz Present Perfect (Simple & Continuous), Zero/First/Second Conditionals, Passive Voice, Reported Speech, Relative Clauses va Modal Verbs of Deduction mavzularini to'liq o'zlashtirdingiz.",
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
                            "term": "Significantly",
                            "reading": "/sɪɡˈnɪf.ɪ.kənt.li/",
                            "meaning": "Sezilarli darajada",
                            "exampleSentence": "Her grades improved significantly this term.",
                            "exampleTranslation": "Bu semestrda uning baholari sezilarli darajada yaxshilandi."
                        },
                        {
                            "term": "Perspective",
                            "reading": "/pəˈspek.tɪv/",
                            "meaning": "Nuqtayi nazar",
                            "exampleSentence": "Traveling gives you a broader perspective on life.",
                            "exampleTranslation": "Sayohat qilish hayotga kengroq nuqtayi nazar beradi."
                        },
                        {
                            "term": "Efficient",
                            "reading": "/ɪˈfɪʃ.ənt/",
                            "meaning": "Samarali",
                            "exampleSentence": "We need to find a more efficient solution.",
                            "exampleTranslation": "Biz yanada samaraliroq yechim topishimiz kerak."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l5-s2",
                "title": "Kompleks Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Barcha mavzulardan xatoni toping.",
                    "exercises": [
                        {
                            "id": "en-b1-u5-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "Which sentence is completely correct grammatically?",
                            "options": [
                                "If I knew, I will tell you.",
                                "If I was knowing, I would tell you.",
                                "If I know, I would told you.",
                                "If I had known, I would have told you."
                            ],
                            "correctAnswer": 3,
                            "explanation": "Correct conditional structure."
                        },
                        {
                            "id": "en-b1-u5-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Traveling gives you a broader perspective on life.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "reluctance",
                                "Perspective"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Perspective\" (Nuqtayi nazar) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-b1-u5-l5-s3",
                "title": "B1 Yakuniy Sertifikatsiya Testi",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "B1 darajasini muvaffaqiyatli yakunlash uchun testni yeching.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-b1-u5-l5-q1",
                            "question": "The report _______ by the committee yesterday afternoon.",
                            "options": [
                                "is approved",
                                "approves",
                                "has approved",
                                "was approved"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Past Simple Passive: was approved."
                        },
                        {
                            "id": "en-b1-u5-l5-q2",
                            "question": "I haven't seen Sarah _______ she moved to Canada.",
                            "options": [
                                "since",
                                "during",
                                "for",
                                "while"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Since she moved."
                        },
                        {
                            "id": "en-b1-u5-l5-q3",
                            "question": "He said that he _______ his keys on the train.",
                            "options": [
                                "has left",
                                "will leave",
                                "had left",
                                "leaves"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Backshift: had left."
                        },
                        {
                            "id": "en-b1-u5-l5-q4",
                            "question": "Look at the ice! You _______ drive so fast.",
                            "options": [
                                "mustn't",
                                "may not",
                                "don't have to",
                                "needn't"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Mustn't (qat'iy taqiq/xavf)."
                        }
                    ]
                }
            }
        ]
    }
];
