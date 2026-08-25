import { Lesson } from '../../types/lesson';

export const ENGLISH_A1_LESSONS: Lesson[] = [
    {
        "id": "en-a1-u1-l1",
        "courseId": "english-a1",
        "unitId": "en-a1-u1",
        "unitTitle": "Unit 1: Essentials & Greetings",
        "language": "en",
        "level": "A1",
        "lessonNumber": 1,
        "title": "Greetings & Introductions",
        "description": "Present Simple: To Be (Am, Is, Are) va asosiy shaxs olmoshlari bilan tanishuv.",
        "estimatedDurationMinutes": 12,
        "icon": "👋",
        "steps": [
            {
                "id": "en-a1-u1-l1-s1",
                "title": "Yangi So'zlar & Qoida",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Salomlashish va To Be Fe'li",
                    "subtitle": "Boshlang'ich ingliz tili asoslari",
                    "explanation": "Ingliz tilida gap tuzishning asosi \"to be\" (bo'lmoq) fe'lidir. Hozirgi zamonda u am, is, are shakllariga ega.",
                    "keyPoints": [
                        "I -> am (I am a student)",
                        "He / She / It -> is (She is a doctor)",
                        "You / We / They -> are (They are friends)"
                    ],
                    "vocabulary": [
                        {
                            "term": "Hello",
                            "reading": "/həˈloʊ/",
                            "meaning": "Salom",
                            "exampleSentence": "Hello! My name is John.",
                            "exampleTranslation": "Salom! Mening ismim Jon."
                        },
                        {
                            "term": "Goodbye",
                            "reading": "/ɡʊdˈbaɪ/",
                            "meaning": "Xayr",
                            "exampleSentence": "Goodbye, see you tomorrow!",
                            "exampleTranslation": "Xayr, ertagacha!"
                        },
                        {
                            "term": "Name",
                            "reading": "/neɪm/",
                            "meaning": "Ism",
                            "exampleSentence": "What is your name?",
                            "exampleTranslation": "Ismingiz nima?"
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Do'st",
                            "exampleSentence": "Alex is my best friend.",
                            "exampleTranslation": "Alek mening eng yaqin do'stim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Subject + am/is/are + Noun/Adjective",
                            "meaning": "Kimdir yoki nimadir kim/qanday ekanligini bildiradi",
                            "usageNotes": "Inkor shaklida am not / is not (isn't) / are not (aren't) ishlatiladi.",
                            "examples": [
                                {
                                    "sentence": "I am from Uzbekistan.",
                                    "translation": "Men O'zbekistondanman."
                                },
                                {
                                    "sentence": "She is very happy today.",
                                    "translation": "U bugun juda xursand."
                                }
                            ]
                        }
                    ],
                    "culturalNotes": "Ingliz tilida tanishganda \"Nice to meet you\" (Tanishganimdan xursandman) deb qo'l berib ko'rishish odat tusiga kirgan."
                }
            },
            {
                "id": "en-a1-u1-l1-s2",
                "title": "Amaliy Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri \"to be\" fe'lini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u1-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"He _______ a teacher.\" Qaysi shakl to'g'ri?",
                            "options": [
                                "is",
                                "be",
                                "are",
                                "am"
                            ],
                            "correctAnswer": 0,
                            "explanation": "He/She/It olmoshlari bilan \"is\" ishlatiladi."
                        },
                        {
                            "id": "en-a1-u1-l1-e2",
                            "type": "multiple-choice",
                            "prompt": "\"They _______ from Spain.\" Qaysi shakl to'g'ri?",
                            "options": [
                                "is",
                                "being",
                                "are",
                                "am"
                            ],
                            "correctAnswer": 2,
                            "explanation": "They ko'plik olmoshi bilan \"are\" ishlatiladi."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l1-s3",
                "title": "Dars Testi",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob berib mavzuni mustahkamlang.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u1-l1-q1",
                            "question": "I _______ a student at university.",
                            "options": [
                                "am",
                                "be",
                                "are",
                                "is"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "I olmoshi bilan faqat \"am\" ishlatiladi."
                        },
                        {
                            "id": "en-a1-u1-l1-q2",
                            "question": "_______ you ready for the lesson?",
                            "options": [
                                "Is",
                                "Do",
                                "Are",
                                "Am"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "You bilan so'roq shaklida \"Are you...?\" ishlatiladi."
                        },
                        {
                            "id": "en-a1-u1-l1-q3",
                            "question": "\"Xayr\" so'zining to'g'ri inglizcha tarjimasi qaysi?",
                            "options": [
                                "Goodbye",
                                "Thank you",
                                "Please",
                                "Welcome"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Goodbye — Xayr."
                        },
                        {
                            "id": "en-a1-u1-l1-q4",
                            "question": "She _______ not at home right now.",
                            "options": [
                                "are",
                                "be",
                                "am",
                                "is"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "She bilan \"is not\" (isn't) ishlatiladi."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u1-l2",
        "courseId": "english-a1",
        "unitId": "en-a1-u1",
        "unitTitle": "Unit 1: Essentials & Greetings",
        "language": "en",
        "level": "A1",
        "lessonNumber": 2,
        "title": "Daily Objects & Numbers",
        "description": "Oddiy narsa-buyumlar va 1-100 gacha sonlar.",
        "estimatedDurationMinutes": 10,
        "icon": "🔢",
        "steps": [
            {
                "id": "en-a1-u1-l2-s1",
                "title": "Yangi So'zlar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Sonlar va Kundalik Buyumlar",
                    "explanation": "Ingliz tilida 1 dan 100 gacha sonlar va kundalik buyumlar nomlarini o'rganamiz.",
                    "vocabulary": [
                        {
                            "term": "Book",
                            "reading": "/bʊk/",
                            "meaning": "Kitob",
                            "exampleSentence": "This is an English book.",
                            "exampleTranslation": "Bu ingliz tili kitobi."
                        },
                        {
                            "term": "Pen",
                            "reading": "/pen/",
                            "meaning": "Ruchka",
                            "exampleSentence": "I need a blue pen.",
                            "exampleTranslation": "Menga ko'k ruchka kerak."
                        },
                        {
                            "term": "Ten",
                            "reading": "/ten/",
                            "meaning": "O'n (10)",
                            "exampleSentence": "There are ten students.",
                            "exampleTranslation": "O'nta talaba bor."
                        },
                        {
                            "term": "Twenty",
                            "reading": "/ˈtwen.ti/",
                            "meaning": "Yigirma (20)",
                            "exampleSentence": "Page twenty is interesting.",
                            "exampleTranslation": "Yigirmanchi sahifa qiziq."
                        }
                    ],
                    "keyPoints": [
                        "Sonlar: One(1), Two(2), Three(3), Ten(10), Twenty(20), Hundred(100)."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Daily Objects & Numbers",
                            "meaning": "Oddiy narsa-buyumlar va 1-100 gacha sonlar.",
                            "usageNotes": "Ingliz tilida 1 dan 100 gacha sonlar va kundalik buyumlar nomlarini o'rganamiz.",
                            "examples": [
                                {
                                    "sentence": "This is an English book.",
                                    "translation": "Bu ingliz tili kitobi."
                                },
                                {
                                    "sentence": "I need a blue pen.",
                                    "translation": "Menga ko'k ruchka kerak."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l2-s2",
                "title": "Amaliy Mashq",
                "type": "practice",
                "estimatedMinutes": 3,
                "practiceData": {
                    "instructions": "Son va buyum so'zlarini moslashtiring.",
                    "exercises": [
                        {
                            "id": "en-a1-u1-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Kitob\" so'zining inglizcha tarjimasi nima?",
                            "options": [
                                "Table",
                                "Chair",
                                "Door",
                                "Book"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Book — Kitob."
                        },
                        {
                            "id": "en-a1-u1-l2-e2",
                            "type": "multiple-choice",
                            "prompt": "\"15\" soni qanday yoziladi?",
                            "options": [
                                "Fifteen",
                                "Five",
                                "Fifth",
                                "Fifty"
                            ],
                            "correctAnswer": 0,
                            "explanation": "15 — Fifteen."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l2-s3",
                "title": "Dars Testi",
                "type": "test",
                "estimatedMinutes": 3,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u1-l2-q1",
                            "question": "Which word means \"Ruchka\"?",
                            "options": [
                                "Pencil",
                                "Bag",
                                "Desk",
                                "Pen"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Pen — Ruchka."
                        },
                        {
                            "id": "en-a1-u1-l2-q2",
                            "question": "How do you write 50 in English?",
                            "options": [
                                "Fifty",
                                "Five",
                                "Fifth",
                                "Fifteen"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "50 — Fifty."
                        },
                        {
                            "id": "en-a1-u1-l2-q3",
                            "question": "I have _______ notebooks on my desk.",
                            "options": [
                                "to",
                                "two",
                                "tow",
                                "too"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Two — 2 soni."
                        },
                        {
                            "id": "en-a1-u1-l2-q4",
                            "question": "\"Bag\" so'zining ma'nosi nima?",
                            "options": [
                                "Xona",
                                "Stol",
                                "Sumka / Portfel",
                                "Daftar"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Bag — Sumka."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u1-l3",
        "courseId": "english-a1",
        "unitId": "en-a1-u1",
        "unitTitle": "Unit 1: Essentials & Greetings",
        "language": "en",
        "level": "A1",
        "lessonNumber": 3,
        "title": "Demonstratives: This, That, These, Those",
        "description": "Yaqin va uzoqdagi narsalarni ko'rsatish olmoshlari.",
        "estimatedDurationMinutes": 10,
        "icon": "👉",
        "steps": [
            {
                "id": "en-a1-u1-l3-s1",
                "title": "Ko'rsatish Olmoshlari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "This, That, These, Those",
                    "explanation": "Yaqindagi bitta narsaga \"This\", uzoqdagi bittasiga \"That\", yaqindagi ko'plikka \"These\", uzoqdagi ko'plikka \"Those\" ishlatiladi.",
                    "keyPoints": [
                        "This is my pen (yaqin birlik)",
                        "That is your car (uzoq birlik)",
                        "These are my books (yaqin ko'plik)",
                        "Those are birds (uzoq ko'plik)"
                    ],
                    "vocabulary": [
                        {
                            "term": "This",
                            "reading": "/ðɪs/",
                            "meaning": "Bu (yaqindagi birlik)",
                            "exampleSentence": "This is my coffee.",
                            "exampleTranslation": "Bu mening qahvam."
                        },
                        {
                            "term": "That",
                            "reading": "/ðæt/",
                            "meaning": "U / Ana u (uzoqdagi birlik)",
                            "exampleSentence": "That building is high.",
                            "exampleTranslation": "Ana u bino baland."
                        },
                        {
                            "term": "Welcome",
                            "reading": "/ˈwel.kəm/",
                            "meaning": "Xush kelibsiz",
                            "exampleSentence": "Welcome to our English class.",
                            "exampleTranslation": "Ingliz tili darsimizga xush kelibsiz."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Demonstratives: This, That, These, Those",
                            "meaning": "Yaqin va uzoqdagi narsalarni ko'rsatish olmoshlari.",
                            "usageNotes": "Yaqindagi bitta narsaga \"This\", uzoqdagi bittasiga \"That\", yaqindagi ko'plikka \"These\", uzoqdagi ko'plikka \"Those\" ishlatiladi.",
                            "examples": [
                                {
                                    "sentence": "This is my coffee.",
                                    "translation": "Bu mening qahvam."
                                },
                                {
                                    "sentence": "That building is high.",
                                    "translation": "Ana u bino baland."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 3,
                "practiceData": {
                    "instructions": "To'g'ri ko'rsatish olmoshini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u1-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ are my keys in my hand.\"",
                            "options": [
                                "These",
                                "That",
                                "This",
                                "Those"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Qo'ldagi (yaqin) ko'plik uchun \"These\" ishlatiladi."
                        },
                        {
                            "id": "en-a1-u1-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"That building is high.\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "That",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"That\" (U / Ana u (uzoqdagi birlik)) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 3,
                "testData": {
                    "instructions": "Test savollariga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u1-l3-q1",
                            "question": "_______ is a laptop on the table over there.",
                            "options": [
                                "That",
                                "This",
                                "These",
                                "Those"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Uzoqdagi bitta buyum uchun \"That\" ishlatiladi."
                        },
                        {
                            "id": "en-a1-u1-l3-q2",
                            "question": "Look at _______ flowers right here in front of us!",
                            "options": [
                                "those",
                                "this",
                                "that",
                                "these"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Yaqindagi ko'plik gullar uchun \"these\"."
                        },
                        {
                            "id": "en-a1-u1-l3-q3",
                            "question": "What is _______ over there in the sky?",
                            "options": [
                                "this",
                                "those",
                                "that",
                                "these"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Osmondagi uzoq narsa uchun \"that\"."
                        },
                        {
                            "id": "en-a1-u1-l3-q4",
                            "question": "_______ shoes are very comfortable.",
                            "options": [
                                "A",
                                "These",
                                "This",
                                "That"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Poyabzal (shoes) ko'plikda bo'lgani uchun \"These\"."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u1-l4",
        "courseId": "english-a1",
        "unitId": "en-a1-u1",
        "unitTitle": "Unit 1: Essentials & Greetings",
        "language": "en",
        "level": "A1",
        "lessonNumber": 4,
        "title": "Articles: A, An, The",
        "description": "Noaniq (A, An) va aniq (The) artikllarni to'g'ri qo'llash.",
        "estimatedDurationMinutes": 12,
        "icon": "🔤",
        "steps": [
            {
                "id": "en-a1-u1-l4-s1",
                "title": "Artikllar Qoidasi",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "A, An va The Artikllari",
                    "explanation": "Undosh tovush bilan boshlangan birlik otlarga \"a\", unli tovush bilan boshlanganlarga \"an\" qo'yiladi. Aniq narsalar uchun \"the\" ishlatiladi.",
                    "keyPoints": [
                        "a car, a student, a university (/j/ undosh tovush)",
                        "an apple, an hour (/aʊər/ unli tovush)",
                        "the sun, the president (aniq/yagona narsalar)"
                    ],
                    "vocabulary": [
                        {
                            "term": "Apple",
                            "reading": "/ˈæp.əl/",
                            "meaning": "Olma",
                            "exampleSentence": "I eat an apple daily.",
                            "exampleTranslation": "Men har kuni bitta olma yeyman."
                        },
                        {
                            "term": "Car",
                            "reading": "/kɑːr/",
                            "meaning": "Mashina",
                            "exampleSentence": "He drives a car.",
                            "exampleTranslation": "U mashina haydaydi."
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Doʻst",
                            "exampleSentence": "She is my best friend.",
                            "exampleTranslation": "U mening eng yaxshi doʻstim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Articles: A, An, The",
                            "meaning": "Noaniq (A, An) va aniq (The) artikllarni to'g'ri qo'llash.",
                            "usageNotes": "Undosh tovush bilan boshlangan birlik otlarga \"a\", unli tovush bilan boshlanganlarga \"an\" qo'yiladi. Aniq narsalar uchun \"the\" ishlatiladi.",
                            "examples": [
                                {
                                    "sentence": "I eat an apple daily.",
                                    "translation": "Men har kuni bitta olma yeyman."
                                },
                                {
                                    "sentence": "He drives a car.",
                                    "translation": "U mashina haydaydi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri artiklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u1-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"She is _______ architect.\"",
                            "options": [
                                "a",
                                "an",
                                "no article",
                                "the"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Architect\" unli /ɑː/ tovushi bilan boshlangani uchun \"an\" olinadi."
                        },
                        {
                            "id": "en-a1-u1-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He drives a car.\"",
                            "options": [
                                "delay",
                                "Car",
                                "doubt",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Car\" (Mashina) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u1-l4-q1",
                            "question": "I saw _______ interesting movie yesterday.",
                            "options": [
                                "a",
                                "an",
                                "these",
                                "the"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Interesting unli bilan boshlanadi: an."
                        },
                        {
                            "id": "en-a1-u1-l4-q2",
                            "question": "_______ moon is very bright tonight.",
                            "options": [
                                "An",
                                "A",
                                "The",
                                "This"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Oy yagona bo'lgani uchun: The moon."
                        },
                        {
                            "id": "en-a1-u1-l4-q3",
                            "question": "He is _______ university professor.",
                            "options": [
                                "the",
                                "those",
                                "an",
                                "a"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "University /j/ undosh tovushi bilan boshlanadi: a university."
                        },
                        {
                            "id": "en-a1-u1-l4-q4",
                            "question": "Can I have _______ glass of water?",
                            "options": [
                                "a",
                                "any",
                                "the",
                                "an"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "A glass of water."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u1-l5",
        "courseId": "english-a1",
        "unitId": "en-a1-u1",
        "unitTitle": "Unit 1: Essentials & Greetings",
        "language": "en",
        "level": "A1",
        "lessonNumber": 5,
        "title": "Possessives: My, Your, His, Her",
        "description": "Egalik olmoshlari va narsalarning kimga tegishli ekanligini bildirish.",
        "estimatedDurationMinutes": 10,
        "icon": "🏷️",
        "steps": [
            {
                "id": "en-a1-u1-l5-s1",
                "title": "Egalik Olmoshlari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "My, Your, His, Her, Its, Our, Their",
                    "explanation": "Kimning narsasi ekanligini aytish uchun egalik olmoshlaridan foydalanamiz.",
                    "keyPoints": [
                        "My (mening), Your (sening/sizning)",
                        "His (uning - o'g'il bola), Her (uning - qiz bola)",
                        "Our (bizning), Their (ularning)"
                    ],
                    "vocabulary": [
                        {
                            "term": "Passport",
                            "reading": "/ˈpɑːs.pɔːt/",
                            "meaning": "Pasport",
                            "exampleSentence": "Where is my passport?",
                            "exampleTranslation": "Mening pasportim qayerda?"
                        },
                        {
                            "term": "Phone",
                            "reading": "/foʊn/",
                            "meaning": "Telefon",
                            "exampleSentence": "Her phone is new.",
                            "exampleTranslation": "Uning telefoni yangi."
                        },
                        {
                            "term": "Family",
                            "reading": "/ˈfæm.əl.i/",
                            "meaning": "Oila",
                            "exampleSentence": "I love my family.",
                            "exampleTranslation": "Men oilamni yaxshi koʻraman."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Possessives: My, Your, His, Her",
                            "meaning": "Egalik olmoshlari va narsalarning kimga tegishli ekanligini bildirish.",
                            "usageNotes": "Kimning narsasi ekanligini aytish uchun egalik olmoshlaridan foydalanamiz.",
                            "examples": [
                                {
                                    "sentence": "Where is my passport?",
                                    "translation": "Mening pasportim qayerda?"
                                },
                                {
                                    "sentence": "Her phone is new.",
                                    "translation": "Uning telefoni yangi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 3,
                "practiceData": {
                    "instructions": "To'g'ri egalik olmoshini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u1-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"John has a dog. _______ dog is brown.\"",
                            "options": [
                                "Their",
                                "My",
                                "His",
                                "Her"
                            ],
                            "correctAnswer": 2,
                            "explanation": "John erkak kishi bo'lgani uchun \"His\" ishlatiladi."
                        },
                        {
                            "id": "en-a1-u1-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Her phone is new.\"",
                            "options": [
                                "Phone",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Phone\" (Telefon) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u1-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 3,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u1-l5-q1",
                            "question": "Sarah is an engineer. _______ office is in downtown.",
                            "options": [
                                "Our",
                                "Their",
                                "Her",
                                "His"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Sarah ayol kishi: Her office."
                        },
                        {
                            "id": "en-a1-u1-l5-q2",
                            "question": "We love _______ new apartment.",
                            "options": [
                                "they",
                                "our",
                                "we",
                                "us"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "We uchun egalik: our."
                        },
                        {
                            "id": "en-a1-u1-l5-q3",
                            "question": "The students are doing _______ homework.",
                            "options": [
                                "their",
                                "there",
                                "they",
                                "them"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Students ko'plik: their."
                        },
                        {
                            "id": "en-a1-u1-l5-q4",
                            "question": "Is this _______ coat, David?",
                            "options": [
                                "you",
                                "yours",
                                "he",
                                "your"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Sening paltongmi: your coat."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u2-l1",
        "courseId": "english-a1",
        "unitId": "en-a1-u2",
        "unitTitle": "Unit 2: Family & Everyday Life",
        "language": "en",
        "level": "A1",
        "lessonNumber": 1,
        "title": "Family & People",
        "description": "Oila a'zolarini tasvirlash va oilaviy munosabatlar.",
        "estimatedDurationMinutes": 12,
        "icon": "👨‍👩‍👧‍👦",
        "steps": [
            {
                "id": "en-a1-u2-l1-s1",
                "title": "Oila Leksikasi",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Oila a'zolari (Family Members)",
                    "explanation": "Oila haqida gapirishda eng ko'p ishlatiladigan so'zlar.",
                    "vocabulary": [
                        {
                            "term": "Father",
                            "reading": "/ˈfɑː.ðər/",
                            "meaning": "Ota",
                            "exampleSentence": "My father is a doctor.",
                            "exampleTranslation": "Mening otam shifokor."
                        },
                        {
                            "term": "Mother",
                            "reading": "/ˈmʌð.ər/",
                            "meaning": "Ona",
                            "exampleSentence": "My mother is a teacher.",
                            "exampleTranslation": "Mening onam o'qituvchi."
                        },
                        {
                            "term": "Brother",
                            "reading": "/ˈbrʌð.ər/",
                            "meaning": "Aka / Uka",
                            "exampleSentence": "I have one younger brother.",
                            "exampleTranslation": "Mening bitta ukam bor."
                        },
                        {
                            "term": "Sister",
                            "reading": "/ˈsɪs.tər/",
                            "meaning": "Opa / Singil",
                            "exampleSentence": "Her sister lives in Samarkand.",
                            "exampleTranslation": "Uning opasi Samarqandda yashaydi."
                        }
                    ],
                    "keyPoints": [
                        "Parents — Ota-ona",
                        "Siblings — Aka-uka va opa-singillar"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Family & People",
                            "meaning": "Oila a'zolarini tasvirlash va oilaviy munosabatlar.",
                            "usageNotes": "Oila haqida gapirishda eng ko'p ishlatiladigan so'zlar.",
                            "examples": [
                                {
                                    "sentence": "My father is a doctor.",
                                    "translation": "Mening otam shifokor."
                                },
                                {
                                    "sentence": "My mother is a teacher.",
                                    "translation": "Mening onam o'qituvchi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Oila a'zosi nomini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u2-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Ota-ona\" so'zining inglizcha tarjimasi qaysi?",
                            "options": [
                                "Partners",
                                "Children",
                                "Parents",
                                "Cousins"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Parents — Ota-ona."
                        },
                        {
                            "id": "en-a1-u2-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"My mother is a teacher.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Mother"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Mother\" (Ona) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u2-l1-q1",
                            "question": "My father's mother is my _______.",
                            "options": [
                                "aunt",
                                "daughter",
                                "grandmother",
                                "sister"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Otamning onasi — buvim (grandmother)."
                        },
                        {
                            "id": "en-a1-u2-l1-q2",
                            "question": "My mother's brother is my _______.",
                            "options": [
                                "uncle",
                                "grandfather",
                                "nephew",
                                "cousin"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Onamning ukasi/akasi — tog'a (uncle)."
                        },
                        {
                            "id": "en-a1-u2-l1-q3",
                            "question": "How many _______ do you have?",
                            "options": [
                                "brother",
                                "brotherses",
                                "a brother",
                                "brothers"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "How many dan keyin ko'plik ot keladi: brothers."
                        },
                        {
                            "id": "en-a1-u2-l1-q4",
                            "question": "\"Daughter\" so'zining ma'nosi nima?",
                            "options": [
                                "Jiyan",
                                "Kelin",
                                "Qiz farzand",
                                "O'g'il farzand"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Daughter — Qiz farzand."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u2-l2",
        "courseId": "english-a1",
        "unitId": "en-a1-u2",
        "unitTitle": "Unit 2: Family & Everyday Life",
        "language": "en",
        "level": "A1",
        "lessonNumber": 2,
        "title": "Colors & Clothes",
        "description": "Ranglar va kiyim-kechaklarni tasvirlash.",
        "estimatedDurationMinutes": 10,
        "icon": "👗",
        "steps": [
            {
                "id": "en-a1-u2-l2-s1",
                "title": "Ranglar va Kiyimlar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Colors and Clothes",
                    "explanation": "Kiyimlarni ranglar bilan birga aytish: Sifat + Ot (a red shirt).",
                    "vocabulary": [
                        {
                            "term": "Shirt",
                            "reading": "/ʃɜːt/",
                            "meaning": "Ko'ylak",
                            "exampleSentence": "He wears a white shirt.",
                            "exampleTranslation": "U oq ko'ylak kiyadi."
                        },
                        {
                            "term": "Shoes",
                            "reading": "/ʃuːz/",
                            "meaning": "Poyabzal",
                            "exampleSentence": "These shoes are comfortable.",
                            "exampleTranslation": "Bu poyabzal qulay."
                        },
                        {
                            "term": "Blue",
                            "reading": "/bluː/",
                            "meaning": "Ko'k",
                            "exampleSentence": "The sky is blue.",
                            "exampleTranslation": "Osmon ko'k."
                        },
                        {
                            "term": "Black",
                            "reading": "/blæk/",
                            "meaning": "Qora",
                            "exampleSentence": "I have a black jacket.",
                            "exampleTranslation": "Menda qora kurtka bor."
                        }
                    ],
                    "keyPoints": [
                        "Ingliz tilida sifat otning oldidan keladi: a black jacket (black a jacket EMAS)."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Colors & Clothes",
                            "meaning": "Ranglar va kiyim-kechaklarni tasvirlash.",
                            "usageNotes": "Kiyimlarni ranglar bilan birga aytish: Sifat + Ot (a red shirt).",
                            "examples": [
                                {
                                    "sentence": "He wears a white shirt.",
                                    "translation": "U oq ko'ylak kiyadi."
                                },
                                {
                                    "sentence": "These shoes are comfortable.",
                                    "translation": "Bu poyabzal qulay."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 3,
                "practiceData": {
                    "instructions": "To'g'ri jumlani tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u2-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Qizil ko'ylak\" qanday aytiladi?",
                            "options": [
                                "A red shirt",
                                "Red the shirt",
                                "Shirt a red",
                                "A shirt red"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Sifat otdan oldin keladi: A red shirt."
                        },
                        {
                            "id": "en-a1-u2-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"These shoes are comfortable.\"",
                            "options": [
                                "Shoes",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Shoes\" (Poyabzal) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 3,
                "testData": {
                    "instructions": "Testni yeching.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u2-l2-q1",
                            "question": "She is wearing _______ coat.",
                            "options": [
                                "a green",
                                "an green",
                                "the greens",
                                "green a"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "A green coat."
                        },
                        {
                            "id": "en-a1-u2-l2-q2",
                            "question": "\"Yellow\" qaysi rang?",
                            "options": [
                                "Yashil",
                                "Sariq",
                                "Jigarrang",
                                "Qizil"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Yellow — Sariq."
                        },
                        {
                            "id": "en-a1-u2-l2-q3",
                            "question": "I need to buy new _______ for running.",
                            "options": [
                                "shoeses",
                                "a shoes",
                                "shoes",
                                "shoe"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Poyabzal juft bo'lgani uchun ko'plikda: shoes."
                        },
                        {
                            "id": "en-a1-u2-l2-q4",
                            "question": "\"Trousers / Pants\" so'zining ma'nosi:",
                            "options": [
                                "Shlyapa",
                                "Paypoq",
                                "Ko'ylak",
                                "Shim"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Trousers — Shim."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u2-l3",
        "courseId": "english-a1",
        "unitId": "en-a1-u2",
        "unitTitle": "Unit 2: Family & Everyday Life",
        "language": "en",
        "level": "A1",
        "lessonNumber": 3,
        "title": "Present Simple: Action Verbs (I work / live)",
        "description": "Harakat fe'llari va hozirgi oddiy zamon tuzilishi.",
        "estimatedDurationMinutes": 14,
        "icon": "🏃",
        "steps": [
            {
                "id": "en-a1-u2-l3-s1",
                "title": "Present Simple Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Present Simple: Muntazam Harakatlar",
                    "explanation": "Doimiy takrorlanadigan odatlar va faktlar uchun Present Simple ishlatiladi. He/She/It da fe'lga -s/-es qo'shiladi.",
                    "keyPoints": [
                        "I live in Tashkent.",
                        "He lives in London.",
                        "They work at a bank."
                    ],
                    "vocabulary": [
                        {
                            "term": "Live",
                            "reading": "/lɪv/",
                            "meaning": "Yashamoq",
                            "exampleSentence": "Where do you live?",
                            "exampleTranslation": "Qayerda yashaysiz?"
                        },
                        {
                            "term": "Work",
                            "reading": "/wɜːk/",
                            "meaning": "Ishlamoq",
                            "exampleSentence": "She works hard every day.",
                            "exampleTranslation": "U har kuni qattiq ishlaydi."
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Doʻst",
                            "exampleSentence": "She is my best friend.",
                            "exampleTranslation": "U mening eng yaxshi doʻstim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Present Simple: Action Verbs (I work / live)",
                            "meaning": "Harakat fe'llari va hozirgi oddiy zamon tuzilishi.",
                            "usageNotes": "Doimiy takrorlanadigan odatlar va faktlar uchun Present Simple ishlatiladi. He/She/It da fe'lga -s/-es qo'shiladi.",
                            "examples": [
                                {
                                    "sentence": "Where do you live?",
                                    "translation": "Qayerda yashaysiz?"
                                },
                                {
                                    "sentence": "She works hard every day.",
                                    "translation": "U har kuni qattiq ishlaydi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri fe'l shaklini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u2-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"He _______ (speak) English well.\"",
                            "options": [
                                "speak",
                                "is speak",
                                "speaking",
                                "speaks"
                            ],
                            "correctAnswer": 3,
                            "explanation": "He olmoshi bilan fe'lga -s qo'shiladi: speaks."
                        },
                        {
                            "id": "en-a1-u2-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She works hard every day.\"",
                            "options": [
                                "delay",
                                "Work",
                                "doubt",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Work\" (Ishlamoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u2-l3-q1",
                            "question": "My sister _______ coffee every morning.",
                            "options": [
                                "drink",
                                "is drink",
                                "drinking",
                                "drinks"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "My sister (she) -> drinks."
                        },
                        {
                            "id": "en-a1-u2-l3-q2",
                            "question": "We _______ in a big city.",
                            "options": [
                                "living",
                                "are live",
                                "live",
                                "lives"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "We -> live."
                        },
                        {
                            "id": "en-a1-u2-l3-q3",
                            "question": "The sun _______ in the east.",
                            "options": [
                                "is rise",
                                "rises",
                                "rise",
                                "rising"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Tabiat qonuni/haqiqat: rises."
                        },
                        {
                            "id": "en-a1-u2-l3-q4",
                            "question": "They _______ to university by bus.",
                            "options": [
                                "go",
                                "goes",
                                "going",
                                "are go"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "They -> go."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u2-l4",
        "courseId": "english-a1",
        "unitId": "en-a1-u2",
        "unitTitle": "Unit 2: Family & Everyday Life",
        "language": "en",
        "level": "A1",
        "lessonNumber": 4,
        "title": "Present Simple Negatives (don't / doesn't)",
        "description": "Inkor gaplar tuzish va yordamchi fe'llar.",
        "estimatedDurationMinutes": 12,
        "icon": "🚫",
        "steps": [
            {
                "id": "en-a1-u2-l4-s1",
                "title": "Inkor Shakli",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Don't va Doesn't",
                    "explanation": "I/You/We/They uchun \"do not (don't)\", He/She/It uchun \"does not (doesn't)\" ishlatiladi. doesn't dan keyin asosiy fe'lga -s qo'shilmaydi!",
                    "keyPoints": [
                        "I don't like tea.",
                        "He doesn't like coffee (likes EMAS)."
                    ],
                    "vocabulary": [
                        {
                            "term": "Like",
                            "reading": "/laɪk/",
                            "meaning": "Yoqtirmoq",
                            "exampleSentence": "I like learning languages.",
                            "exampleTranslation": "Men til o'rganishni yoqtiraman."
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Doʻst",
                            "exampleSentence": "She is my best friend.",
                            "exampleTranslation": "U mening eng yaxshi doʻstim."
                        },
                        {
                            "term": "Family",
                            "reading": "/ˈfæm.əl.i/",
                            "meaning": "Oila",
                            "exampleSentence": "I love my family.",
                            "exampleTranslation": "Men oilamni yaxshi koʻraman."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Present Simple Negatives (don't / doesn't)",
                            "meaning": "Inkor gaplar tuzish va yordamchi fe'llar.",
                            "usageNotes": "I/You/We/They uchun \"do not (don't)\", He/She/It uchun \"does not (doesn't)\" ishlatiladi. doesn't dan keyin asosiy fe'lga -s qo'shilmaydi!",
                            "examples": [
                                {
                                    "sentence": "I like learning languages.",
                                    "translation": "Men til o'rganishni yoqtiraman."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Inkor shaklini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u2-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"She _______ (not / eat) fast food.\"",
                            "options": [
                                "not eats",
                                "don't eat",
                                "doesn't eat",
                                "doesn't eats"
                            ],
                            "correctAnswer": 2,
                            "explanation": "She bilan doesn't eat ishlatiladi."
                        },
                        {
                            "id": "en-a1-u2-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She is my best friend.\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "Friend",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Friend\" (Doʻst) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u2-l4-q1",
                            "question": "I _______ know the answer.",
                            "options": [
                                "am not",
                                "doesn't",
                                "don't",
                                "no"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "I don't know."
                        },
                        {
                            "id": "en-a1-u2-l4-q2",
                            "question": "Tom _______ drive a car.",
                            "options": [
                                "isn't",
                                "not",
                                "don't",
                                "doesn't"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Tom doesn't drive."
                        },
                        {
                            "id": "en-a1-u2-l4-q3",
                            "question": "They _______ live in this neighborhood.",
                            "options": [
                                "don't",
                                "not",
                                "aren't",
                                "doesn't"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "They don't live."
                        },
                        {
                            "id": "en-a1-u2-l4-q4",
                            "question": "She _______ speak Spanish.",
                            "options": [
                                "don't",
                                "isn't",
                                "doesn't",
                                "not"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "She doesn't speak."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u2-l5",
        "courseId": "english-a1",
        "unitId": "en-a1-u2",
        "unitTitle": "Unit 2: Family & Everyday Life",
        "language": "en",
        "level": "A1",
        "lessonNumber": 5,
        "title": "Present Simple Questions (Do / Does)",
        "description": "So'roq gaplar tuzish va qisqa javoblar berish.",
        "estimatedDurationMinutes": 12,
        "icon": "❓",
        "steps": [
            {
                "id": "en-a1-u2-l5-s1",
                "title": "So'roq Shakli",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Do you...? / Does he...?",
                    "explanation": "So'roq gaplarda Do/Does egadan oldinga o'tadi.",
                    "keyPoints": [
                        "Do you play football? -> Yes, I do. / No, I don't.",
                        "Does she work here? -> Yes, she does. / No, she doesn't."
                    ],
                    "vocabulary": [
                        {
                            "term": "Question",
                            "reading": "/ˈkwes.tʃən/",
                            "meaning": "Savol",
                            "exampleSentence": "Can I ask a question?",
                            "exampleTranslation": "Savol bersam bo'ladimi?"
                        },
                        {
                            "term": "Family",
                            "reading": "/ˈfæm.əl.i/",
                            "meaning": "Oila",
                            "exampleSentence": "I love my family.",
                            "exampleTranslation": "Men oilamni yaxshi koʻraman."
                        },
                        {
                            "term": "Morning",
                            "reading": "/ˈmɔː.nɪŋ/",
                            "meaning": "Tong, ertalab",
                            "exampleSentence": "Good morning, everyone!",
                            "exampleTranslation": "Hammaga xayrli tong!"
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Present Simple Questions (Do / Does)",
                            "meaning": "So'roq gaplar tuzish va qisqa javoblar berish.",
                            "usageNotes": "So'roq gaplarda Do/Does egadan oldinga o'tadi.",
                            "examples": [
                                {
                                    "sentence": "Can I ask a question?",
                                    "translation": "Savol bersam bo'ladimi?"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri so'roq fe'lini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u2-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ you speak English?\"",
                            "options": [
                                "Is",
                                "Do",
                                "Does",
                                "Are"
                            ],
                            "correctAnswer": 1,
                            "explanation": "You bilan \"Do you speak...?\" ishlatiladi."
                        },
                        {
                            "id": "en-a1-u2-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"I love my family.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "reluctance",
                                "Family"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Family\" (Oila) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u2-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u2-l5-q1",
                            "question": "_______ he work in an office?",
                            "options": [
                                "Are",
                                "Does",
                                "Do",
                                "Is"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "He bilan \"Does he work...?\""
                        },
                        {
                            "id": "en-a1-u2-l5-q2",
                            "question": "\"Do they live here?\" — \"Yes, they _______.\"",
                            "options": [
                                "do",
                                "does",
                                "are",
                                "live"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Yes, they do."
                        },
                        {
                            "id": "en-a1-u2-l5-q3",
                            "question": "Where _______ she study?",
                            "options": [
                                "do",
                                "is",
                                "are",
                                "does"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Where does she study?"
                        },
                        {
                            "id": "en-a1-u2-l5-q4",
                            "question": "_______ you like chocolate ice cream?",
                            "options": [
                                "Do",
                                "Are",
                                "Have",
                                "Does"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Do you like...?"
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u3-l1",
        "courseId": "english-a1",
        "unitId": "en-a1-u3",
        "unitTitle": "Unit 3: Time, Food & Routines",
        "language": "en",
        "level": "A1",
        "lessonNumber": 1,
        "title": "Telling Time & Daily Routines",
        "description": "Soatni aytish va kun tartibini ifodalash.",
        "estimatedDurationMinutes": 12,
        "icon": "⏰",
        "steps": [
            {
                "id": "en-a1-u3-l1-s1",
                "title": "Soat va Vaqt",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "What time is it?",
                    "explanation": "Ingliz tilida vaqtni aytish: It is 7 o'clock (Soat 7). At 7:00 AM (ertalab soat 7 da).",
                    "vocabulary": [
                        {
                            "term": "O'clock",
                            "reading": "/əˈklɒk/",
                            "meaning": "Aniq soat",
                            "exampleSentence": "It is eight o'clock.",
                            "exampleTranslation": "Soat sakkiz."
                        },
                        {
                            "term": "Morning",
                            "reading": "/ˈmɔː.nɪŋ/",
                            "meaning": "Tong / Ertalab",
                            "exampleSentence": "Good morning everyone.",
                            "exampleTranslation": "Hammamizga xayrli tong."
                        },
                        {
                            "term": "Wake up",
                            "reading": "/weɪk ʌp/",
                            "meaning": "Uyg'onmoq",
                            "exampleSentence": "I wake up at 6:30.",
                            "exampleTranslation": "Men soat 6:30 da uyg'onaman."
                        }
                    ],
                    "keyPoints": [
                        "Vaqt oldidan \"at\" predlogi ishlatiladi: at 8 o'clock, at noon."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Telling Time & Daily Routines",
                            "meaning": "Soatni aytish va kun tartibini ifodalash.",
                            "usageNotes": "Ingliz tilida vaqtni aytish: It is 7 o'clock (Soat 7). At 7:00 AM (ertalab soat 7 da).",
                            "examples": [
                                {
                                    "sentence": "It is eight o'clock.",
                                    "translation": "Soat sakkiz."
                                },
                                {
                                    "sentence": "Good morning everyone.",
                                    "translation": "Hammamizga xayrli tong."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Vaqt predlogini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u3-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I start work _______ 9:00 AM.\"",
                            "options": [
                                "at",
                                "on",
                                "in",
                                "to"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Aniq vaqt bilan \"at\" ishlatiladi: at 9:00 AM."
                        },
                        {
                            "id": "en-a1-u3-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Good morning everyone.\"",
                            "options": [
                                "Morning",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Morning\" (Tong / Ertalab) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Test savollariga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u3-l1-q1",
                            "question": "What time _______ you usually have breakfast?",
                            "options": [
                                "do",
                                "does",
                                "are",
                                "is"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "What time do you...?"
                        },
                        {
                            "id": "en-a1-u3-l1-q2",
                            "question": "She goes to bed _______ 11:00 PM.",
                            "options": [
                                "in",
                                "by",
                                "at",
                                "on"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "At 11:00 PM."
                        },
                        {
                            "id": "en-a1-u3-l1-q3",
                            "question": "\"Noon\" so'zining ma'nosi nima?",
                            "options": [
                                "Tush payti (12:00)",
                                "Oqshom",
                                "Tong",
                                "Yarim kecha"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Noon — Tush vaqti (12:00)."
                        },
                        {
                            "id": "en-a1-u3-l1-q4",
                            "question": "I exercise in the _______.",
                            "options": [
                                "time",
                                "hour",
                                "clock",
                                "morning"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "In the morning (ertalab)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u3-l2",
        "courseId": "english-a1",
        "unitId": "en-a1-u3",
        "unitTitle": "Unit 3: Time, Food & Routines",
        "language": "en",
        "level": "A1",
        "lessonNumber": 2,
        "title": "Food, Drinks & Cafe Ordering",
        "description": "Oziq-ovqatlar, ichimliklar va kafeda buyurtma berish.",
        "estimatedDurationMinutes": 12,
        "icon": "☕",
        "steps": [
            {
                "id": "en-a1-u3-l2-s1",
                "title": "Taomlar va Ichimliklar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Ordering Food and Drinks",
                    "explanation": "Kafeda buyurtma berishda: \"Can I have... please?\" yoki \"I would like (I'd like)...\" ishlatiladi.",
                    "vocabulary": [
                        {
                            "term": "Coffee",
                            "reading": "/ˈkɒf.i/",
                            "meaning": "Qahva",
                            "exampleSentence": "A cup of black coffee, please.",
                            "exampleTranslation": "Iltimos, bir finjon qora qahva."
                        },
                        {
                            "term": "Tea",
                            "reading": "/tiː/",
                            "meaning": "Choy",
                            "exampleSentence": "Do you prefer green tea?",
                            "exampleTranslation": "Ko'k choyni ma'qul ko'rasizmi?"
                        },
                        {
                            "term": "Water",
                            "reading": "/ˈwɔː.tər/",
                            "meaning": "Suv",
                            "exampleSentence": "A bottle of mineral water.",
                            "exampleTranslation": "Bir shisha mineral suv."
                        },
                        {
                            "term": "Bread",
                            "reading": "/bred/",
                            "meaning": "Non",
                            "exampleSentence": "Fresh bread is delicious.",
                            "exampleTranslation": "Yangi yopilgan non mazali."
                        }
                    ],
                    "keyPoints": [
                        "Can I have a coffee, please? — Qahva bersangiz, iltimos."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Food, Drinks & Cafe Ordering",
                            "meaning": "Oziq-ovqatlar, ichimliklar va kafeda buyurtma berish.",
                            "usageNotes": "Kafeda buyurtma berishda: \"Can I have... please?\" yoki \"I would like (I'd like)...\" ishlatiladi.",
                            "examples": [
                                {
                                    "sentence": "A cup of black coffee, please.",
                                    "translation": "Iltimos, bir finjon qora qahva."
                                },
                                {
                                    "sentence": "Do you prefer green tea?",
                                    "translation": "Ko'k choyni ma'qul ko'rasizmi?"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Buyurtma iborasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u3-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I would _______ a cup of tea, please.\"",
                            "options": [
                                "want to",
                                "likes",
                                "liking",
                                "like"
                            ],
                            "correctAnswer": 3,
                            "explanation": "I would like... (Iltimos, menga ... bersangiz)."
                        },
                        {
                            "id": "en-a1-u3-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Do you prefer green tea?\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Tea",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Tea\" (Choy) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u3-l2-q1",
                            "question": "How much _______ this sandwich?",
                            "options": [
                                "are",
                                "am",
                                "do",
                                "is"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "How much is this sandwich?"
                        },
                        {
                            "id": "en-a1-u3-l2-q2",
                            "question": "Can I _______ the bill, please?",
                            "options": [
                                "have",
                                "make",
                                "do",
                                "be"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Can I have the bill, please? (Hisobni keltirsangiz)."
                        },
                        {
                            "id": "en-a1-u3-l2-q3",
                            "question": "\"Delicious\" so'zining ma'nosi nima?",
                            "options": [
                                "Eski",
                                "Mazali / Shiringina",
                                "Sho'r",
                                "Achchiq"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Delicious — Mazali."
                        },
                        {
                            "id": "en-a1-u3-l2-q4",
                            "question": "I drink two glasses of _______ every day.",
                            "options": [
                                "meat",
                                "rice",
                                "water",
                                "bread"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Glasses of water (Suv stakanlari)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u3-l3",
        "courseId": "english-a1",
        "unitId": "en-a1-u3",
        "unitTitle": "Unit 3: Time, Food & Routines",
        "language": "en",
        "level": "A1",
        "lessonNumber": 3,
        "title": "Rooms in a House & Prepositions of Place",
        "description": "Uy xonalari va joylashuv predloglari (in, on, under).",
        "estimatedDurationMinutes": 12,
        "icon": "🏠",
        "steps": [
            {
                "id": "en-a1-u3-l3-s1",
                "title": "Uy va Predloglar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "In, On, Under, Next to",
                    "explanation": "Narsalarning qayerda ekanligini bildirish: in (ichida), on (ustida), under (ostida), next to (yonida).",
                    "vocabulary": [
                        {
                            "term": "Kitchen",
                            "reading": "/ˈkɪtʃ.ən/",
                            "meaning": "Oshxona",
                            "exampleSentence": "Mom is in the kitchen.",
                            "exampleTranslation": "Ona oshxonada."
                        },
                        {
                            "term": "Bedroom",
                            "reading": "/ˈbed.ruːm/",
                            "meaning": "Yotoqxona",
                            "exampleSentence": "The bed is in my bedroom.",
                            "exampleTranslation": "Karavot yotoqxonamda."
                        },
                        {
                            "term": "Table",
                            "reading": "/ˈteɪ.bəl/",
                            "meaning": "Stol",
                            "exampleSentence": "The key is on the table.",
                            "exampleTranslation": "Kalit stol ustida."
                        }
                    ],
                    "keyPoints": [
                        "The book is on the desk.",
                        "The cat is under the chair."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Rooms in a House & Prepositions of Place",
                            "meaning": "Uy xonalari va joylashuv predloglari (in, on, under).",
                            "usageNotes": "Narsalarning qayerda ekanligini bildirish: in (ichida), on (ustida), under (ostida), next to (yonida).",
                            "examples": [
                                {
                                    "sentence": "Mom is in the kitchen.",
                                    "translation": "Ona oshxonada."
                                },
                                {
                                    "sentence": "The bed is in my bedroom.",
                                    "translation": "Karavot yotoqxonamda."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Joylashuv predlogini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u3-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"The soup is _______ the bowl.\"",
                            "options": [
                                "in",
                                "next",
                                "under",
                                "on"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Idishning ichida bo'lgani uchun \"in\"."
                        },
                        {
                            "id": "en-a1-u3-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The bed is in my bedroom.\"",
                            "options": [
                                "Bedroom",
                                "reluctance",
                                "delay",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Bedroom\" (Yotoqxona) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u3-l3-q1",
                            "question": "The shoes are _______ the bed.",
                            "options": [
                                "under",
                                "into",
                                "at",
                                "in"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Under the bed (karavot ostida)."
                        },
                        {
                            "id": "en-a1-u3-l3-q2",
                            "question": "There is a picture _______ the wall.",
                            "options": [
                                "under",
                                "at",
                                "in",
                                "on"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "On the wall (devorda)."
                        },
                        {
                            "id": "en-a1-u3-l3-q3",
                            "question": "\"Living room\" so'zining ma'nosi nima?",
                            "options": [
                                "Oshxona",
                                "Hammom",
                                "Mehmonxona / Zal",
                                "Garaj"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Living room — Mehmonxona."
                        },
                        {
                            "id": "en-a1-u3-l3-q4",
                            "question": "The supermarket is next _______ the bank.",
                            "options": [
                                "at",
                                "to",
                                "in",
                                "of"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Next to (yonida)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u3-l4",
        "courseId": "english-a1",
        "unitId": "en-a1-u3",
        "unitTitle": "Unit 3: Time, Food & Routines",
        "language": "en",
        "level": "A1",
        "lessonNumber": 4,
        "title": "Places in Town & Giving Simple Directions",
        "description": "Shahardagi asosiy joylar va yo'nalish so'rash.",
        "estimatedDurationMinutes": 12,
        "icon": "🗺️",
        "steps": [
            {
                "id": "en-a1-u3-l4-s1",
                "title": "Shahar va Yo'nalishlar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Places in Town & Directions",
                    "explanation": "Shahar bo'ylab harakatlanish: Turn left (chapga buring), Turn right (o'ngga buring), Go straight (to'g'riga yuring).",
                    "vocabulary": [
                        {
                            "term": "Hospital",
                            "reading": "/ˈhɒs.pɪ.təl/",
                            "meaning": "Shifoxona",
                            "exampleSentence": "The hospital is near here.",
                            "exampleTranslation": "Shifoxona shu yaqinda."
                        },
                        {
                            "term": "Bank",
                            "reading": "/bæŋk/",
                            "meaning": "Bank",
                            "exampleSentence": "Where is the nearest bank?",
                            "exampleTranslation": "Eng yaqin bank qayerda?"
                        },
                        {
                            "term": "Turn left",
                            "reading": "/tɜːn left/",
                            "meaning": "Chapga burilmoq",
                            "exampleSentence": "Turn left at the traffic lights.",
                            "exampleTranslation": "Svetoforda chapga buring."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Places in Town & Giving Simple Directions",
                            "meaning": "Shahardagi asosiy joylar va yo'nalish so'rash.",
                            "usageNotes": "Shahar bo'ylab harakatlanish: Turn left (chapga buring), Turn right (o'ngga buring), Go straight (to'g'riga yuring).",
                            "examples": [
                                {
                                    "sentence": "The hospital is near here.",
                                    "translation": "Shifoxona shu yaqinda."
                                },
                                {
                                    "sentence": "Where is the nearest bank?",
                                    "translation": "Eng yaqin bank qayerda?"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Yo'nalish so'zini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u3-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"To'g'riga boring\" iborasini tanlang:",
                            "options": [
                                "Go under",
                                "Go straight",
                                "Turn left",
                                "Turn back"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Go straight — To'g'riga yuring."
                        },
                        {
                            "id": "en-a1-u3-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Where is the nearest bank?\"",
                            "options": [
                                "doubt",
                                "delay",
                                "reluctance",
                                "Bank"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Bank\" (Bank) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Testni yeching.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u3-l4-q1",
                            "question": "Excuse me, _______ is the library?",
                            "options": [
                                "when",
                                "where",
                                "what",
                                "who"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Where is the library?"
                        },
                        {
                            "id": "en-a1-u3-l4-q2",
                            "question": "Turn _______ at the corner to find the pharmacy.",
                            "options": [
                                "direct",
                                "up",
                                "right",
                                "straight"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Turn right (o'ngga buring)."
                        },
                        {
                            "id": "en-a1-u3-l4-q3",
                            "question": "\"Airport\" so'zining ma'nosi:",
                            "options": [
                                "Temiryo'l vokzali",
                                "Mehmonxona",
                                "Avtobus bekati",
                                "Aeroport"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Airport — Aeroport."
                        },
                        {
                            "id": "en-a1-u3-l4-q4",
                            "question": "It is opposite _______ the park.",
                            "options": [
                                "to",
                                "in",
                                "of",
                                "no preposition"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Opposite the park (to'g'risida)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u3-l5",
        "courseId": "english-a1",
        "unitId": "en-a1-u3",
        "unitTitle": "Unit 3: Time, Food & Routines",
        "language": "en",
        "level": "A1",
        "lessonNumber": 5,
        "title": "Weather & Seasons",
        "description": "Ob-havo va yil fasllari haqida suhbatlashish.",
        "estimatedDurationMinutes": 10,
        "icon": "☀️",
        "steps": [
            {
                "id": "en-a1-u3-l5-s1",
                "title": "Ob-havo Leksikasi",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "What's the weather like?",
                    "explanation": "Ob-havoni tasvirlash: It is sunny (quyoshli), It is rainy (yomg'irli), It is cold (sovuq).",
                    "vocabulary": [
                        {
                            "term": "Sunny",
                            "reading": "/ˈsʌn.i/",
                            "meaning": "Quyoshli",
                            "exampleSentence": "It is warm and sunny today.",
                            "exampleTranslation": "Bugun iliq va quyoshli."
                        },
                        {
                            "term": "Rainy",
                            "reading": "/ˈreɪ.ni/",
                            "meaning": "Yomg'irli",
                            "exampleSentence": "Take an umbrella, it is rainy.",
                            "exampleTranslation": "Soyabon oling, yomg'ir yog'yapti."
                        },
                        {
                            "term": "Summer",
                            "reading": "/ˈsʌm.ər/",
                            "meaning": "Yoz fasli",
                            "exampleSentence": "Summer is my favorite season.",
                            "exampleTranslation": "Yoz mening sevimli faslim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Weather & Seasons",
                            "meaning": "Ob-havo va yil fasllari haqida suhbatlashish.",
                            "usageNotes": "Ob-havoni tasvirlash: It is sunny (quyoshli), It is rainy (yomg'irli), It is cold (sovuq).",
                            "examples": [
                                {
                                    "sentence": "It is warm and sunny today.",
                                    "translation": "Bugun iliq va quyoshli."
                                },
                                {
                                    "sentence": "Take an umbrella, it is rainy.",
                                    "translation": "Soyabon oling, yomg'ir yog'yapti."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 3,
                "practiceData": {
                    "instructions": "Ob-havo so'zini tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u3-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Qorli ob-havo\" qanday ataladi?",
                            "options": [
                                "Windy",
                                "Sunny",
                                "Snowy",
                                "Cloudy"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Snowy — Qorli."
                        },
                        {
                            "id": "en-a1-u3-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Take an umbrella, it is rainy.\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "Rainy",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Rainy\" (Yomg'irli) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u3-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 3,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u3-l5-q1",
                            "question": "It is very _______ in winter.",
                            "options": [
                                "warm",
                                "hot",
                                "cold",
                                "sunny"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Qishda sovuq: cold."
                        },
                        {
                            "id": "en-a1-u3-l5-q2",
                            "question": "How many _______ are there in a year?",
                            "options": [
                                "season",
                                "seasons",
                                "clouds",
                                "weather"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Four seasons in a year."
                        },
                        {
                            "id": "en-a1-u3-l5-q3",
                            "question": "\"Spring\" qaysi fasl?",
                            "options": [
                                "Bahor",
                                "Yoz",
                                "Qish",
                                "Kuz"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Spring — Bahor."
                        },
                        {
                            "id": "en-a1-u3-l5-q4",
                            "question": "It is _______ today, so wear a warm jacket.",
                            "options": [
                                "hot and sunny",
                                "warm",
                                "summer",
                                "windy and cold"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Windy and cold."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u4-l1",
        "courseId": "english-a1",
        "unitId": "en-a1-u4",
        "unitTitle": "Unit 4: Hobbies & Practical Skills",
        "language": "en",
        "level": "A1",
        "lessonNumber": 1,
        "title": "Modal Verb: Can for Ability & Permission",
        "description": "Imkoniyat va qobiliyatni ifodalash (I can swim).",
        "estimatedDurationMinutes": 12,
        "icon": "🏊",
        "steps": [
            {
                "id": "en-a1-u4-l1-s1",
                "title": "Can / Can't Qoidasi",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Can and Can't",
                    "explanation": "Biror ishni bajara olish qobiliyati yoki ruxsat uchun \"can\" ishlatiladi. Barcha shaxslar uchun shakli bir xil.",
                    "keyPoints": [
                        "I can speak English.",
                        "He can swim.",
                        "Can you help me?"
                    ],
                    "vocabulary": [
                        {
                            "term": "Swim",
                            "reading": "/swɪm/",
                            "meaning": "Suzmoq",
                            "exampleSentence": "I can swim fast.",
                            "exampleTranslation": "Men tez suza olaman."
                        },
                        {
                            "term": "Drive",
                            "reading": "/draɪv/",
                            "meaning": "Haydamoq",
                            "exampleSentence": "Can you drive a car?",
                            "exampleTranslation": "Mashina hayday olasizmi?"
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Doʻst",
                            "exampleSentence": "She is my best friend.",
                            "exampleTranslation": "U mening eng yaxshi doʻstim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Modal Verb: Can for Ability & Permission",
                            "meaning": "Imkoniyat va qobiliyatni ifodalash (I can swim).",
                            "usageNotes": "Biror ishni bajara olish qobiliyati yoki ruxsat uchun \"can\" ishlatiladi. Barcha shaxslar uchun shakli bir xil.",
                            "examples": [
                                {
                                    "sentence": "I can swim fast.",
                                    "translation": "Men tez suza olaman."
                                },
                                {
                                    "sentence": "Can you drive a car?",
                                    "translation": "Mashina hayday olasizmi?"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u4-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"She _______ (can) play the piano beautifully.\"",
                            "options": [
                                "cans",
                                "is can",
                                "can",
                                "can to"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Can fe'li o'zgarmaydi: She can play."
                        },
                        {
                            "id": "en-a1-u4-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Can you drive a car?\"",
                            "options": [
                                "doubt",
                                "delay",
                                "reluctance",
                                "Drive"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Drive\" (Haydamoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u4-l1-q1",
                            "question": "I _______ speak French, but I can speak English.",
                            "options": [
                                "am not",
                                "no",
                                "can't",
                                "don't can"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "I can't speak French."
                        },
                        {
                            "id": "en-a1-u4-l1-q2",
                            "question": "_______ you swim across the river?",
                            "options": [
                                "Can",
                                "Is",
                                "Are",
                                "Do"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Can you swim...?"
                        },
                        {
                            "id": "en-a1-u4-l1-q3",
                            "question": "He can _______ very fast.",
                            "options": [
                                "to run",
                                "running",
                                "runs",
                                "run"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Can dan keyin oddiy fe'l keladi: run."
                        },
                        {
                            "id": "en-a1-u4-l1-q4",
                            "question": "\"Can I open the window?\" nima ma'noni bildiradi?",
                            "options": [
                                "Derazani kim ochdi?",
                                "Deraza ochiqmi?",
                                "Derazani ochsam maylimi? (Ruxsat)",
                                "Deraza buzilganmi?"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Ruxsat so'rash iborasi."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u4-l2",
        "courseId": "english-a1",
        "unitId": "en-a1-u4",
        "unitTitle": "Unit 4: Hobbies & Practical Skills",
        "language": "en",
        "level": "A1",
        "lessonNumber": 2,
        "title": "Hobbies & Free Time Activities",
        "description": "Qiziqishlar va bo'sh vaqtdagi mashg'ulotlar haqida so'zlashuv.",
        "estimatedDurationMinutes": 12,
        "icon": "🎨",
        "steps": [
            {
                "id": "en-a1-u4-l2-s1",
                "title": "Qiziqishlar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Hobbies & Interests",
                    "explanation": "Bo'sh vaqtda nimalar bilan shug'ullanish: I like reading books, playing video games, listening to music.",
                    "vocabulary": [
                        {
                            "term": "Music",
                            "reading": "/ˈmjuː.zɪk/",
                            "meaning": "Musiqa",
                            "exampleSentence": "I listen to classical music.",
                            "exampleTranslation": "Men mumtoz musiqa tinglayman."
                        },
                        {
                            "term": "Travel",
                            "reading": "/ˈtræv.əl/",
                            "meaning": "Sayohat qilmoq",
                            "exampleSentence": "They love to travel in summer.",
                            "exampleTranslation": "Ular yozda sayohat qilishni yaxshi ko'radi."
                        },
                        {
                            "term": "Cooking",
                            "reading": "/ˈkʊk.ɪŋ/",
                            "meaning": "Pazandachilik",
                            "exampleSentence": "Cooking is my relaxing hobby.",
                            "exampleTranslation": "Ovqat pishirish mening hordiq chiqaruvchi mashg'ulotim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Hobbies & Free Time Activities",
                            "meaning": "Qiziqishlar va bo'sh vaqtdagi mashg'ulotlar haqida so'zlashuv.",
                            "usageNotes": "Bo'sh vaqtda nimalar bilan shug'ullanish: I like reading books, playing video games, listening to music.",
                            "examples": [
                                {
                                    "sentence": "I listen to classical music.",
                                    "translation": "Men mumtoz musiqa tinglayman."
                                },
                                {
                                    "sentence": "They love to travel in summer.",
                                    "translation": "Ular yozda sayohat qilishni yaxshi ko'radi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri birikmani tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u4-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"I like _______ to music in the evening.\"",
                            "options": [
                                "listening",
                                "listen",
                                "listens",
                                "to listening"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Like listening to music."
                        },
                        {
                            "id": "en-a1-u4-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"They love to travel in summer.\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "Travel",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Travel\" (Sayohat qilmoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u4-l2-q1",
                            "question": "What are your _______ in your free time?",
                            "options": [
                                "hobbies",
                                "hobby",
                                "works",
                                "jobs"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "What are your hobbies?"
                        },
                        {
                            "id": "en-a1-u4-l2-q2",
                            "question": "He likes playing _______ on weekends.",
                            "options": [
                                "footballing",
                                "football",
                                "a football",
                                "the footballs"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Play football."
                        },
                        {
                            "id": "en-a1-u4-l2-q3",
                            "question": "\"Free time\" nimani bildiradi?",
                            "options": [
                                "Ertalabki vaqt",
                                "Dars vaqti",
                                "Bo'sh vaqt",
                                "Ish vaqti"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Free time — Bo'sh vaqt."
                        },
                        {
                            "id": "en-a1-u4-l2-q4",
                            "question": "She enjoys _______ photographs of nature.",
                            "options": [
                                "take",
                                "took",
                                "takes",
                                "taking"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Enjoy taking photographs."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u4-l3",
        "courseId": "english-a1",
        "unitId": "en-a1-u4",
        "unitTitle": "Unit 4: Hobbies & Practical Skills",
        "language": "en",
        "level": "A1",
        "lessonNumber": 3,
        "title": "A1 Reading: My Daily Life",
        "description": "Qisqa sodda matnni o'qish va savollarga javob berish.",
        "estimatedDurationMinutes": 12,
        "icon": "📖",
        "steps": [
            {
                "id": "en-a1-u4-l3-s1",
                "title": "Matnni O'qish",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Reading Passage: Anvar's Daily Routine",
                    "explanation": "Quyidagi matnni diqqat bilan o'qing va tushuning.",
                    "keyPoints": [
                        "Anvar is a 20-year-old student from Tashkent.",
                        "He wakes up at 7:00 AM and drinks green tea.",
                        "He takes the metro to university at 8:15 AM.",
                        "In the evening, he plays chess with his brother and reads books."
                    ],
                    "vocabulary": [
                        {
                            "term": "Routine",
                            "reading": "/ruːˈtiːn/",
                            "meaning": "Kun tartibi",
                            "exampleSentence": "A healthy routine is good.",
                            "exampleTranslation": "Sog'lom kun tartibi foydali."
                        },
                        {
                            "term": "Family",
                            "reading": "/ˈfæm.əl.i/",
                            "meaning": "Oila",
                            "exampleSentence": "I love my family.",
                            "exampleTranslation": "Men oilamni yaxshi koʻraman."
                        },
                        {
                            "term": "Morning",
                            "reading": "/ˈmɔː.nɪŋ/",
                            "meaning": "Tong, ertalab",
                            "exampleSentence": "Good morning, everyone!",
                            "exampleTranslation": "Hammaga xayrli tong!"
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "A1 Reading: My Daily Life",
                            "meaning": "Qisqa sodda matnni o'qish va savollarga javob berish.",
                            "usageNotes": "Quyidagi matnni diqqat bilan o'qing va tushuning.",
                            "examples": [
                                {
                                    "sentence": "A healthy routine is good.",
                                    "translation": "Sog'lom kun tartibi foydali."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l3-s2",
                "title": "Matn Savollari",
                "type": "practice",
                "estimatedMinutes": 3,
                "practiceData": {
                    "instructions": "Matn bo'yicha to'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u4-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "How does Anvar go to university?",
                            "options": [
                                "On foot",
                                "By bicycle",
                                "By car",
                                "By metro"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Matnda \"takes the metro\" deyilgan."
                        },
                        {
                            "id": "en-a1-u4-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"I love my family.\"",
                            "options": [
                                "delay",
                                "Family",
                                "doubt",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Family\" (Oila) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Matn bo'yicha test savollariga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u4-l3-q1",
                            "question": "What time does Anvar wake up?",
                            "options": [
                                "6:00 AM",
                                "9:00 AM",
                                "8:15 AM",
                                "7:00 AM"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "He wakes up at 7:00 AM."
                        },
                        {
                            "id": "en-a1-u4-l3-q2",
                            "question": "What does he drink in the morning?",
                            "options": [
                                "Orange juice",
                                "Coffee",
                                "Green tea",
                                "Milk"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Drinks green tea."
                        },
                        {
                            "id": "en-a1-u4-l3-q3",
                            "question": "What game does he play in the evening?",
                            "options": [
                                "Football",
                                "Chess",
                                "Basketball",
                                "Tennis"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Plays chess with his brother."
                        },
                        {
                            "id": "en-a1-u4-l3-q4",
                            "question": "Where is Anvar from?",
                            "options": [
                                "Tashkent",
                                "Samarkand",
                                "New York",
                                "London"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Student from Tashkent."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u4-l4",
        "courseId": "english-a1",
        "unitId": "en-a1-u4",
        "unitTitle": "Unit 4: Hobbies & Practical Skills",
        "language": "en",
        "level": "A1",
        "lessonNumber": 4,
        "title": "A1 Listening: Dialogues at the Grocery Store",
        "description": "Do'konda xarid qilish suhbatini tinglab tushunish.",
        "estimatedDurationMinutes": 12,
        "icon": "🎧",
        "steps": [
            {
                "id": "en-a1-u4-l4-s1",
                "title": "Suhbat Matni",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Dialogue: At the Grocery Store",
                    "explanation": "Kassir va xaridor o'rtasidagi suhbat.",
                    "keyPoints": [
                        "Cashier: \"Good afternoon! Can I help you?\"",
                        "Customer: \"Yes, I need two bottles of milk and one loaf of bread.\"",
                        "Cashier: \"That will be 5 dollars in total.\"",
                        "Customer: \"Here you go. Thank you!\""
                    ],
                    "vocabulary": [
                        {
                            "term": "Bottle",
                            "reading": "/ˈbɒt.əl/",
                            "meaning": "Shisha idish",
                            "exampleSentence": "A bottle of milk.",
                            "exampleTranslation": "Bir shisha sut."
                        },
                        {
                            "term": "Total",
                            "reading": "/ˈtəʊ.təl/",
                            "meaning": "Jami summa",
                            "exampleSentence": "How much in total?",
                            "exampleTranslation": "Jami qancha bo'ladi?"
                        },
                        {
                            "term": "Welcome",
                            "reading": "/ˈwel.kəm/",
                            "meaning": "Xush kelibsiz",
                            "exampleSentence": "Welcome to our English class.",
                            "exampleTranslation": "Ingliz tili darsimizga xush kelibsiz."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "A1 Listening: Dialogues at the Grocery Store",
                            "meaning": "Do'konda xarid qilish suhbatini tinglab tushunish.",
                            "usageNotes": "Kassir va xaridor o'rtasidagi suhbat.",
                            "examples": [
                                {
                                    "sentence": "A bottle of milk.",
                                    "translation": "Bir shisha sut."
                                },
                                {
                                    "sentence": "How much in total?",
                                    "translation": "Jami qancha bo'ladi?"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "Suhbat bo'yicha savollarga javob bering.",
                    "exercises": [
                        {
                            "id": "en-a1-u4-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "How much is the total price?",
                            "options": [
                                "2 dollars",
                                "15 dollars",
                                "5 dollars",
                                "10 dollars"
                            ],
                            "correctAnswer": 2,
                            "explanation": "That will be 5 dollars in total."
                        },
                        {
                            "id": "en-a1-u4-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"How much in total?\"",
                            "options": [
                                "Total",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Total\" (Jami summa) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u4-l4-q1",
                            "question": "How many bottles of milk did the customer buy?",
                            "options": [
                                "Three",
                                "Four",
                                "Two",
                                "One"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Two bottles of milk."
                        },
                        {
                            "id": "en-a1-u4-l4-q2",
                            "question": "What else did the customer buy besides milk?",
                            "options": [
                                "Apples",
                                "Cheese",
                                "Coffee",
                                "A loaf of bread"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "One loaf of bread."
                        },
                        {
                            "id": "en-a1-u4-l4-q3",
                            "question": "\"Here you go\" iborasi qachon ishlatiladi?",
                            "options": [
                                "Pul yoki buyumni uzatayotganda",
                                "Xayrlashganda",
                                "Salomlashganda",
                                "Kechirim so'raganda"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Buyumni uzatganda \"Marhamat\"."
                        },
                        {
                            "id": "en-a1-u4-l4-q4",
                            "question": "Where does the conversation take place?",
                            "options": [
                                "At the airport",
                                "At a car station",
                                "In a grocery store",
                                "In a hospital"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "In a grocery store."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u4-l5",
        "courseId": "english-a1",
        "unitId": "en-a1-u4",
        "unitTitle": "Unit 4: Hobbies & Practical Skills",
        "language": "en",
        "level": "A1",
        "lessonNumber": 5,
        "title": "A1 Capstone Review & Self-Introduction",
        "description": "A1 darajasini umumlashtirish va o'zini tanishtirish nutqi.",
        "estimatedDurationMinutes": 15,
        "icon": "🎓",
        "steps": [
            {
                "id": "en-a1-u4-l5-s1",
                "title": "O'zini Tanishtirish Namunalari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Self-Introduction Template",
                    "explanation": "A1 darajasida to'liq o'zini tanishtirish strukturasi.",
                    "keyPoints": [
                        "Name & Origin: \"Hello, my name is Jasur and I am from Uzbekistan.\"",
                        "Profession/Study: \"I am a student at university.\"",
                        "Hobbies: \"In my free time, I like playing football and reading.\"",
                        "Routine: \"I wake up at 7:00 and study English every day.\""
                    ],
                    "vocabulary": [
                        {
                            "term": "Introduce",
                            "reading": "/ˌɪn.trəˈdʒuːs/",
                            "meaning": "Tanishtirmoq",
                            "exampleSentence": "Let me introduce myself.",
                            "exampleTranslation": "O'zimni tanishtirishga ijozat bering."
                        },
                        {
                            "term": "Welcome",
                            "reading": "/ˈwel.kəm/",
                            "meaning": "Xush kelibsiz",
                            "exampleSentence": "Welcome to our English class.",
                            "exampleTranslation": "Ingliz tili darsimizga xush kelibsiz."
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Doʻst",
                            "exampleSentence": "She is my best friend.",
                            "exampleTranslation": "U mening eng yaxshi doʻstim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "A1 Capstone Review & Self-Introduction",
                            "meaning": "A1 darajasini umumlashtirish va o'zini tanishtirish nutqi.",
                            "usageNotes": "A1 darajasida to'liq o'zini tanishtirish strukturasi.",
                            "examples": [
                                {
                                    "sentence": "Let me introduce myself.",
                                    "translation": "O'zimni tanishtirishga ijozat bering."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "O'zini tanishtirishdagi to'g'ri jumlalarni aniqlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u4-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Let me _______ myself.\"",
                            "options": [
                                "introducing",
                                "introduce",
                                "introduces",
                                "introduced"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Let me introduce myself."
                        },
                        {
                            "id": "en-a1-u4-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Welcome to our English class.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Welcome"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Welcome\" (Xush kelibsiz) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u4-l5-s3",
                "title": "A1 Yakuniy Test",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "A1 darajasini to'liq tasdiqlash uchun yakuniy test savollariga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u4-l5-q1",
                            "question": "Which sentence is grammatically correct?",
                            "options": [
                                "She live in London with her family.",
                                "She lives in London with her family.",
                                "She living in London.",
                                "She is live in London."
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "She lives in London."
                        },
                        {
                            "id": "en-a1-u4-l5-q2",
                            "question": "Do you _______ a cup of coffee?",
                            "options": [
                                "want",
                                "wanting",
                                "is want",
                                "wants"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Do you want...?"
                        },
                        {
                            "id": "en-a1-u4-l5-q3",
                            "question": "There are _______ books on the shelf.",
                            "options": [
                                "much",
                                "a",
                                "an",
                                "many"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Many books (ko'p kitoblar)."
                        },
                        {
                            "id": "en-a1-u4-l5-q4",
                            "question": "He _______ swim very well.",
                            "options": [
                                "can",
                                "cans",
                                "is can",
                                "can to"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "He can swim."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u5-l1",
        "courseId": "english-a1",
        "unitId": "en-a1-u5",
        "unitTitle": "Unit 5: Travel & Shopping",
        "language": "en",
        "level": "A1",
        "lessonNumber": 21,
        "title": "Asking for Directions & Places in Town",
        "description": "Shahar bo'ylab harakatlanish: \"Where is...?\", \"Turn left\", \"Go straight\" va joylashuv predloglari.",
        "estimatedDurationMinutes": 12,
        "icon": "🗺️",
        "steps": [
            {
                "id": "en-a1-u5-l1-s1",
                "title": "Yo'nalish So'rash & Predloglar",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Directions & Locations",
                    "explanation": "Shahar bo'ylab yo'l so'rash va ko'rsatish uchun \"Where is...\", \"next to\", \"opposite\", \"between\" ishlatiladi.",
                    "keyPoints": [
                        "Where is the library? — Kutubxona qayerda?",
                        "Turn left / Turn right — Chapga buriling / O'ngga buriling",
                        "Go straight ahead — To'g'riga bering",
                        "Opposite the bank — Bankning ro'parasida"
                    ],
                    "vocabulary": [
                        {
                            "term": "Library",
                            "reading": "/ˈlaɪ.brər.i/",
                            "meaning": "Kutubxona",
                            "exampleSentence": "The library is near the park.",
                            "exampleTranslation": "Kutubxona parkning yonida."
                        },
                        {
                            "term": "Opposite",
                            "reading": "/ˈɒp.ə.zɪt/",
                            "meaning": "Ro'parasida",
                            "exampleSentence": "The bus stop is opposite the store.",
                            "exampleTranslation": "Avtobus bekati do'konning ro'parasida."
                        },
                        {
                            "term": "Family",
                            "reading": "/ˈfæm.əl.i/",
                            "meaning": "Oila",
                            "exampleSentence": "I love my family.",
                            "exampleTranslation": "Men oilamni yaxshi koʻraman."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Asking for Directions & Places in Town",
                            "meaning": "Shahar bo'ylab harakatlanish: \"Where is...?\", \"Turn left\", \"Go straight\" va joylashuv predloglari.",
                            "usageNotes": "Shahar bo'ylab yo'l so'rash va ko'rsatish uchun \"Where is...\", \"next to\", \"opposite\", \"between\" ishlatiladi.",
                            "examples": [
                                {
                                    "sentence": "The library is near the park.",
                                    "translation": "Kutubxona parkning yonida."
                                },
                                {
                                    "sentence": "The bus stop is opposite the store.",
                                    "translation": "Avtobus bekati do'konning ro'parasida."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u5-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Turn left at the supermarket.\" ma'nosi:",
                            "options": [
                                "Supermarketdan chapga buriling",
                                "To'g'riga bering",
                                "O'ngga buriling",
                                "Supermarketga kiring"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Turn left = chapga buriling."
                        },
                        {
                            "id": "en-a1-u5-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The bus stop is opposite the store.\"",
                            "options": [
                                "Opposite",
                                "delay",
                                "reluctance",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Opposite\" (Ro'parasida) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u5-l1-q1",
                            "question": "Where _______ the nearest pharmacy?",
                            "options": [
                                "is",
                                "be",
                                "am",
                                "are"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Where is... (birlik ot)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u5-l2",
        "courseId": "english-a1",
        "unitId": "en-a1-u5",
        "unitTitle": "Unit 5: Travel & Shopping",
        "language": "en",
        "level": "A1",
        "lessonNumber": 22,
        "title": "At the Supermarket & Prices",
        "description": "Do'konda xarid qilish: \"How much is this?\", \"I would like...\", va pul birliklari.",
        "estimatedDurationMinutes": 12,
        "icon": "🛒",
        "steps": [
            {
                "id": "en-a1-u5-l2-s1",
                "title": "Xarid Iboralari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Shopping & Asking Prices",
                    "explanation": "Narx so'rash uchun \"How much is...?\" va \"How much are...?\" ishlatiladi.",
                    "keyPoints": [
                        "How much is this shirt? — Bu ko'ylak qancha turadi?",
                        "How much are these apples? — Bu olmalar qancha turadi?",
                        "I would like 1 kg of rice. — Men 1 kg guruch xohlayman."
                    ],
                    "vocabulary": [
                        {
                            "term": "Receipt",
                            "reading": "/rɪˈsiːt/",
                            "meaning": "Kvitansiya / Chek",
                            "exampleSentence": "Here is your receipt.",
                            "exampleTranslation": "Mana sizning chekingiz."
                        },
                        {
                            "term": "Family",
                            "reading": "/ˈfæm.əl.i/",
                            "meaning": "Oila",
                            "exampleSentence": "I love my family.",
                            "exampleTranslation": "Men oilamni yaxshi koʻraman."
                        },
                        {
                            "term": "Morning",
                            "reading": "/ˈmɔː.nɪŋ/",
                            "meaning": "Tong, ertalab",
                            "exampleSentence": "Good morning, everyone!",
                            "exampleTranslation": "Hammaga xayrli tong!"
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "At the Supermarket & Prices",
                            "meaning": "Do'konda xarid qilish: \"How much is this?\", \"I would like...\", va pul birliklari.",
                            "usageNotes": "Narx so'rash uchun \"How much is...?\" va \"How much are...?\" ishlatiladi.",
                            "examples": [
                                {
                                    "sentence": "Here is your receipt.",
                                    "translation": "Mana sizning chekingiz."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u5-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"How _______ is this jacket?\"",
                            "options": [
                                "old",
                                "much",
                                "many",
                                "long"
                            ],
                            "correctAnswer": 1,
                            "explanation": "How much = narx so'rash."
                        },
                        {
                            "id": "en-a1-u5-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"I love my family.\"",
                            "options": [
                                "delay",
                                "Family",
                                "doubt",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Family\" (Oila) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u5-l2-q1",
                            "question": "How much _______ these shoes?",
                            "options": [
                                "do",
                                "are",
                                "is",
                                "am"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "These shoes (ko'plik ot) -> are."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u5-l3",
        "courseId": "english-a1",
        "unitId": "en-a1-u5",
        "unitTitle": "Unit 5: Travel & Shopping",
        "language": "en",
        "level": "A1",
        "lessonNumber": 23,
        "title": "Ordering Food in a Restaurant",
        "description": "Restoranda taom buyurtma qilish: \"Can I have...?\", \"A table for two\", va menyu so'zlari.",
        "estimatedDurationMinutes": 12,
        "icon": "🍽️",
        "steps": [
            {
                "id": "en-a1-u5-l3-s1",
                "title": "Restoran Iboralari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Ordering Food & Drinks",
                    "explanation": "Restoranda xushmuomalalik bilan buyurtma berish iboralari.",
                    "keyPoints": [
                        "Can I have the menu, please? — Menyu bersangiz.",
                        "I would like a cup of tea. — Choy so'rayman.",
                        "The bill, please. — Hisobni keltirsangiz."
                    ],
                    "vocabulary": [
                        {
                            "term": "Menu",
                            "reading": "/ˈmen.juː/",
                            "meaning": "Taomnoma / Menyu",
                            "exampleSentence": "Could we see the menu?",
                            "exampleTranslation": "Menyuni ko'rsak bo'ladimi?"
                        },
                        {
                            "term": "Morning",
                            "reading": "/ˈmɔː.nɪŋ/",
                            "meaning": "Tong, ertalab",
                            "exampleSentence": "Good morning, everyone!",
                            "exampleTranslation": "Hammaga xayrli tong!"
                        },
                        {
                            "term": "Welcome",
                            "reading": "/ˈwel.kəm/",
                            "meaning": "Xush kelibsiz",
                            "exampleSentence": "Welcome to our English class.",
                            "exampleTranslation": "Ingliz tili darsimizga xush kelibsiz."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Ordering Food in a Restaurant",
                            "meaning": "Restoranda taom buyurtma qilish: \"Can I have...?\", \"A table for two\", va menyu so'zlari.",
                            "usageNotes": "Restoranda xushmuomalalik bilan buyurtma berish iboralari.",
                            "examples": [
                                {
                                    "sentence": "Could we see the menu?",
                                    "translation": "Menyuni ko'rsak bo'ladimi?"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u5-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Can I _______ a glass of water, please?\"",
                            "options": [
                                "having",
                                "has",
                                "have",
                                "had"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Can I have...?"
                        },
                        {
                            "id": "en-a1-u5-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Good morning, everyone!\"",
                            "options": [
                                "reluctance",
                                "doubt",
                                "Morning",
                                "delay"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Morning\" (Tong, ertalab) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u5-l3-q1",
                            "question": "How do you ask for the check in a restaurant?",
                            "options": [
                                "Where is food?",
                                "Give me money.",
                                "The bill, please.",
                                "I am full."
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "The bill, please."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u5-l4",
        "courseId": "english-a1",
        "unitId": "en-a1-u5",
        "unitTitle": "Unit 5: Travel & Shopping",
        "language": "en",
        "level": "A1",
        "lessonNumber": 24,
        "title": "Talking about Weather & Seasons",
        "description": "Ob-havo va fasllar: \"It is sunny/rainy/cold\", \"What is the weather like today?\".",
        "estimatedDurationMinutes": 12,
        "icon": "🌤️",
        "steps": [
            {
                "id": "en-a1-u5-l4-s1",
                "title": "Ob-havo Iboralari",
                "type": "learn",
                "estimatedMinutes": 4,
                "learnData": {
                    "title": "Weather & Seasons",
                    "explanation": "Ob-havo haqida gapirganda \"It is + Sifat\" qo'llaniladi (It is cold, It is raining).",
                    "keyPoints": [
                        "What is the weather like? — Ob-havo qanday?",
                        "It is hot and sunny. — Issiq va quyoshli.",
                        "Spring, Summer, Autumn, Winter — Yoz, Kuz, Qish, Bahor."
                    ],
                    "vocabulary": [
                        {
                            "term": "Weather",
                            "reading": "/ˈweð.ər/",
                            "meaning": "Ob-havo",
                            "exampleSentence": "The weather is nice today.",
                            "exampleTranslation": "Bugun ob-havo yaxshi."
                        },
                        {
                            "term": "Welcome",
                            "reading": "/ˈwel.kəm/",
                            "meaning": "Xush kelibsiz",
                            "exampleSentence": "Welcome to our English class.",
                            "exampleTranslation": "Ingliz tili darsimizga xush kelibsiz."
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Doʻst",
                            "exampleSentence": "She is my best friend.",
                            "exampleTranslation": "U mening eng yaxshi doʻstim."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Talking about Weather & Seasons",
                            "meaning": "Ob-havo va fasllar: \"It is sunny/rainy/cold\", \"What is the weather like today?\".",
                            "usageNotes": "Ob-havo haqida gapirganda \"It is + Sifat\" qo'llaniladi (It is cold, It is raining).",
                            "examples": [
                                {
                                    "sentence": "The weather is nice today.",
                                    "translation": "Bugun ob-havo yaxshi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 4,
                "practiceData": {
                    "instructions": "To'g'ri so'zni tanlang.",
                    "exercises": [
                        {
                            "id": "en-a1-u5-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"It is _______ outside. Take an umbrella!\"",
                            "options": [
                                "sunny",
                                "dry",
                                "hot",
                                "raining"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Raining = yomg'ir yog'moqda."
                        },
                        {
                            "id": "en-a1-u5-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Welcome to our English class.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "reluctance",
                                "Welcome"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Welcome\" (Xush kelibsiz) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 4,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-a1-u5-l4-q1",
                            "question": "Which season comes after Summer?",
                            "options": [
                                "Spring",
                                "Monday",
                                "Winter",
                                "Autumn"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Summer -> Autumn (Kuz)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-a1-u5-l5",
        "courseId": "english-a1",
        "unitId": "en-a1-u5",
        "unitTitle": "Unit 5: Travel & Shopping",
        "language": "en",
        "level": "A1",
        "lessonNumber": 25,
        "title": "A1 Comprehensive Final Assessment",
        "description": "A1 darajasidagi barcha grammatika va leksikani umumiy tekshirish uchun yakuniy baholash imtihoni.",
        "estimatedDurationMinutes": 15,
        "icon": "🏆",
        "steps": [
            {
                "id": "en-a1-u5-l5-s1",
                "title": "A1 Yakuniy Takrorlash",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "A1 Level Master Summary",
                    "explanation": "A1 darajasida egallangan barcha asosiy mavzular: To Be, Present Simple, Can/Can't, Directions, Shopping, Daily Routines.",
                    "keyPoints": [
                        "Present Simple: Everyday routines and habits",
                        "Basic Vocabulary: Numbers, days, food, places",
                        "Questions & Negatives: Do/Does, Is/Are"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "A1 Comprehensive Final Assessment",
                            "meaning": "A1 darajasidagi barcha grammatika va leksikani umumiy tekshirish uchun yakuniy baholash imtihoni.",
                            "usageNotes": "A1 darajasida egallangan barcha asosiy mavzular: To Be, Present Simple, Can/Can't, Directions, Shopping, Daily Routines.",
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
                            "term": "Welcome",
                            "reading": "/ˈwel.kəm/",
                            "meaning": "Xush kelibsiz",
                            "exampleSentence": "Welcome to our English class.",
                            "exampleTranslation": "Ingliz tili darsimizga xush kelibsiz."
                        },
                        {
                            "term": "Friend",
                            "reading": "/frend/",
                            "meaning": "Doʻst",
                            "exampleSentence": "She is my best friend.",
                            "exampleTranslation": "U mening eng yaxshi doʻstim."
                        },
                        {
                            "term": "Family",
                            "reading": "/ˈfæm.əl.i/",
                            "meaning": "Oila",
                            "exampleSentence": "I love my family.",
                            "exampleTranslation": "Men oilamni yaxshi koʻraman."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l5-s2",
                "title": "A1 Yakuniy Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "A1 darajasidagi savollarni yeching.",
                    "exercises": [
                        {
                            "id": "en-a1-u5-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ do you live?\" — \"I live in Tashkent.\"",
                            "options": [
                                "Where",
                                "When",
                                "Who",
                                "What"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Where = qayerda."
                        },
                        {
                            "id": "en-a1-u5-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"She is my best friend.\"",
                            "options": [
                                "Friend",
                                "reluctance",
                                "delay",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Friend\" (Doʻst) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-a1-u5-l5-s3",
                "title": "A1 Level Promotion Exam",
                "type": "test",
                "estimatedMinutes": 5,
                "testData": {
                    "instructions": "A2 darajasiga o'tish uchun testni kamida 80% natija bilan topshiring.",
                    "passingScorePercentage": 80,
                    "questions": [
                        {
                            "id": "en-a1-u5-l5-q1",
                            "question": "She _______ to the gym every morning.",
                            "options": [
                                "goes",
                                "going",
                                "is go",
                                "go"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "She goes..."
                        },
                        {
                            "id": "en-a1-u5-l5-q2",
                            "question": "Where _______ your parents work?",
                            "options": [
                                "does",
                                "is",
                                "are",
                                "do"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Parents (they) -> do."
                        },
                        {
                            "id": "en-a1-u5-l5-q3",
                            "question": "There is _______ apple on the table.",
                            "options": [
                                "an",
                                "a",
                                "some",
                                "any"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "An apple."
                        },
                        {
                            "id": "en-a1-u5-l5-q4",
                            "question": "We _______ have a car.",
                            "options": [
                                "not",
                                "don't",
                                "doesn't",
                                "aren't"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "We don't have..."
                        }
                    ]
                }
            }
        ]
    }
];
