import { Lesson } from '../../types/lesson';

export const ENGLISH_C2_LESSONS: Lesson[] = [
    {
        "id": "en-c2-u1-l1",
        "courseId": "english-c2",
        "unitId": "en-c2-u1",
        "unitTitle": "Unit 1: Master Stylistics & Pragmatics",
        "language": "en",
        "level": "C2",
        "lessonNumber": 1,
        "title": "Master-Level Stylistic Variation & Register Switching",
        "description": "Rasmiy ilmiy tildan tortib diplomatik pinhona kinoyagacha bo'lgan registrlar orasida bexato erkin harakatlanish.",
        "estimatedDurationMinutes": 18,
        "icon": "👑",
        "steps": [
            {
                "id": "en-c2-u1-l1-s1",
                "title": "Registrlar Almashinuvi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Register Flexibility & Pragmatic Competence",
                    "explanation": "C2 darajasida til egallovchi har qanday ijtimoiy va intellektual kontekstga to'liq moslashadi: Formal Academic, High-Stakes Legal, Literary, Diplomatic Euphemism va Nuanced Irony.",
                    "keyPoints": [
                        "Colloquial: \"He got mad and left.\"",
                        "Standard C1: \"He became agitated and departed abruptly.\"",
                        "Mastery C2: \"Succumbing to indignation, he vacated the premises with conspicuous disdain.\""
                    ],
                    "vocabulary": [
                        {
                            "term": "Indignation",
                            "reading": "/ˌɪn.dɪɡˈneɪ.ʃən/",
                            "meaning": "Adolatsizlikdan kelib chiqqan g'azab",
                            "exampleSentence": "The verdict sparked widespread indignation.",
                            "exampleTranslation": "Hukm keng ko'lamli g'azabga sabab bo'ldi."
                        },
                        {
                            "term": "Conspicuous",
                            "reading": "/kənˈspɪk.ju.əs/",
                            "meaning": "Ko'zga yaqqol tashlanadigan",
                            "exampleSentence": "His absence was conspicuous.",
                            "exampleTranslation": "Uning yo'qligi yaqqol ko'zga tashlandi."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Master-Level Stylistic Variation & Register Switching",
                            "meaning": "Rasmiy ilmiy tildan tortib diplomatik pinhona kinoyagacha bo'lgan registrlar orasida bexato erkin harakatlanish.",
                            "usageNotes": "C2 darajasida til egallovchi har qanday ijtimoiy va intellektual kontekstga to'liq moslashadi: Formal Academic, High-Stakes Legal, Literary, Diplomatic Euphemism va Nuanced Irony.",
                            "examples": [
                                {
                                    "sentence": "The verdict sparked widespread indignation.",
                                    "translation": "Hukm keng ko'lamli g'azabga sabab bo'ldi."
                                },
                                {
                                    "sentence": "His absence was conspicuous.",
                                    "translation": "Uning yo'qligi yaqqol ko'zga tashlandi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l1-s2",
                "title": "Registr Mashqi",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Eng yuksak adabiy-diplomatik registrni tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u1-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "Choose the most refined C2 version of \"We must accept the truth even if it hurts\":",
                            "options": [
                                "We gotta take the truth no matter what.",
                                "We must reconcile ourselves to unpalatable realities, however discomfiting they may prove.",
                                "Accept the bad truth.",
                                "Truth hurts but we must take it."
                            ],
                            "correctAnswer": 1,
                            "explanation": "We must reconcile ourselves to unpalatable realities..."
                        },
                        {
                            "id": "en-c2-u1-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"His absence was conspicuous.\"",
                            "options": [
                                "doubt",
                                "Conspicuous",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Conspicuous\" (Ko'zga yaqqol tashlanadigan) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u1-l1-q1",
                            "question": "What does \"pragmatic competence\" mean at C2 level?",
                            "options": [
                                "Memorizing grammar rules for a test",
                                "The ability to understand and produce subtle, culturally nuanced and context-appropriate language intuitively",
                                "Knowing how to translate into Latin",
                                "Speaking as quickly as possible"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Context-appropriate nuanced language intuitively."
                        },
                        {
                            "id": "en-c2-u1-l1-q2",
                            "question": "\"Unpalatable realities\" means truths that are:",
                            "options": [
                                "Completely fictional",
                                "Very delicious",
                                "Difficult or unpleasant to accept",
                                "Written on a menu"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Difficult or unpleasant to accept."
                        },
                        {
                            "id": "en-c2-u1-l1-q3",
                            "question": "Which word means \"subtle, understated irony or indirect polite critique\"?",
                            "options": [
                                "Exaggeration",
                                "Slang",
                                "Shouting",
                                "Understatement / Litotes"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Litotes / Understatement."
                        },
                        {
                            "id": "en-c2-u1-l1-q4",
                            "question": "Choose the highest register synonym for \"temporary\":",
                            "options": [
                                "Ephemeral / Transitory / Fugacious",
                                "Fast",
                                "Quick",
                                "Short"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Ephemeral / Transitory / Fugacious."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u1-l2",
        "courseId": "english-c2",
        "unitId": "en-c2-u1",
        "unitTitle": "Unit 1: Master Stylistics & Pragmatics",
        "language": "en",
        "level": "C2",
        "lessonNumber": 2,
        "title": "Archaic Nuances & Rare Inverted Syntax",
        "description": "Noyob ingliz tili tuzilmalari: Be that as it may, Come what may, Suffice it to say, So be it.",
        "estimatedDurationMinutes": 16,
        "icon": "📜",
        "steps": [
            {
                "id": "en-c2-u1-l2-s1",
                "title": "Arxaik va Oliy Konstruktsiyalar",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Idiomatic Formulaic Subjunctives",
                    "explanation": "Suffice it to say (shuni aytish kifoyaki), Come what may (nima bo'lsa ham / har qanday holatda), Be that as it may (har holda / shunday bo'lsa ham), Far be it from me to disagree (e'tiroz bildirishdan yiroqman).",
                    "vocabulary": [
                        {
                            "term": "Suffice",
                            "reading": "/səˈfaɪs/",
                            "meaning": "Yetarli / Kifoya qilmoq",
                            "exampleSentence": "One example will suffice to illustrate the point.",
                            "exampleTranslation": "Fikrni tushuntirish uchun bitta misol kifoya qiladi."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Archaic Nuances & Rare Inverted Syntax",
                            "meaning": "Noyob ingliz tili tuzilmalari: Be that as it may, Come what may, Suffice it to say, So be it.",
                            "usageNotes": "Suffice it to say (shuni aytish kifoyaki), Come what may (nima bo'lsa ham / har qanday holatda), Be that as it may (har holda / shunday bo'lsa ham), Far be it from me to disagree (e'tiroz bildirishdan yiroqman).",
                            "examples": [
                                {
                                    "sentence": "One example will suffice to illustrate the point.",
                                    "translation": "Fikrni tushuntirish uchun bitta misol kifoya qiladi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri formulani tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u1-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"_______ it to say, the results exceeded even our most sanguine forecasts.\"",
                            "options": [
                                "Sufficing",
                                "Sufficed",
                                "Suffice",
                                "Suffices"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Suffice it to say (formulaic subjunctive)."
                        },
                        {
                            "id": "en-c2-u1-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The swift dissemination of knowledge accelerates innovation.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Dissemination",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Dissemination\" (Keng yoyish, tarqatish) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u1-l2-q1",
                            "question": "\"Come what may, we shall persevere.\" What does \"Come what may\" mean?",
                            "options": [
                                "In the coming future only",
                                "If it stops raining",
                                "Whatever happens / Regardless of any obstacles",
                                "When someone arrives"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Whatever happens."
                        },
                        {
                            "id": "en-c2-u1-l2-q2",
                            "question": "\"Sanguine forecasts\" means projections that are:",
                            "options": [
                                "Mathematical",
                                "Optimistic and positive",
                                "Gloomy and dark",
                                "Bloody"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Sanguine — Optimistic/Positive."
                        },
                        {
                            "id": "en-c2-u1-l2-q3",
                            "question": "Far be it from me _______ dictate institutional policy.",
                            "options": [
                                "to",
                                "for",
                                "from",
                                "that"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Far be it from me to..."
                        },
                        {
                            "id": "en-c2-u1-l2-q4",
                            "question": "Be that as it _______, we must nevertheless enforce contractual compliance.",
                            "options": [
                                "can",
                                "might",
                                "will",
                                "may"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Be that as it may."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u1-l3",
        "courseId": "english-c2",
        "unitId": "en-c2-u1",
        "unitTitle": "Unit 1: Master Stylistics & Pragmatics",
        "language": "en",
        "level": "C2",
        "lessonNumber": 3,
        "title": "Subtle Pragmatic Norms: Understatement & Irony",
        "description": "Britaniya va xalqaro oliy muloqotdagi pinhona ma'nolar (e.g. \"I have a slight reservation\" = \"I strongly object\").",
        "estimatedDurationMinutes": 16,
        "icon": "🎭",
        "steps": [
            {
                "id": "en-c2-u1-l3-s1",
                "title": "Pragmatik Subtext",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Understatement in Professional English",
                    "explanation": "Ingliz tilida to'g'ridan-to'g'ri qo'pol gapirish o'rniga nozik tagma'noli iboralar qo'llaniladi: \"With the greatest respect...\" = \"You are entirely mistaken\". \"That is a brave proposal\" = \"That is dangerously reckless\". \"A minor setback\" = \"A total catastrophe\".",
                    "vocabulary": [
                        {
                            "term": "Litotes",
                            "reading": "/ˈlaɪ.tə.tiːz/",
                            "meaning": "Inkor orqali tasdiqlovchi kinoyaviy usul (e.g. not bad = very good)",
                            "exampleSentence": "Calling it \"no small feat\" is classic litotes.",
                            "exampleTranslation": "\"Kichik yutuq emas\" deyish klassik litotesdir."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Subtle Pragmatic Norms: Understatement & Irony",
                            "meaning": "Britaniya va xalqaro oliy muloqotdagi pinhona ma'nolar (e.g. \"I have a slight reservation\" = \"I strongly object\").",
                            "usageNotes": "Ingliz tilida to'g'ridan-to'g'ri qo'pol gapirish o'rniga nozik tagma'noli iboralar qo'llaniladi: \"With the greatest respect...\" = \"You are entirely mistaken\". \"That is a brave proposal\" = \"That is dangerously reckless\". \"A minor setback\" = \"A total catastrophe\".",
                            "examples": [
                                {
                                    "sentence": "Calling it \"no small feat\" is classic litotes.",
                                    "translation": "\"Kichik yutuq emas\" deyish klassik litotesdir."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Tagma'noni toping.",
                    "exercises": [
                        {
                            "id": "en-c2-u1-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "A British diplomat says: \"With all due respect, perhaps that premise requires further contemplation.\" What do they really mean?",
                            "options": [
                                "They don't understand English",
                                "They want to go to sleep",
                                "They love the idea completely",
                                "They strongly disagree with the premise and believe it is flawed"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Polite diplomatic disagreement."
                        },
                        {
                            "id": "en-c2-u1-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fame in the digital era can often be fleeting and ephemeral.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Ephemeral"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Ephemeral\" (Oʻtkinchi, bir lahzalik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u1-l3-q1",
                            "question": "When a senior manager remarks \"That is certainly an interesting perspective\", they often politely imply:",
                            "options": [
                                "They want to copy it immediately",
                                "They are buying the idea",
                                "The idea won a Nobel Prize",
                                "The idea is questionable, unconventional or problematic"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Polite skepticism."
                        },
                        {
                            "id": "en-c2-u1-l3-q2",
                            "question": "\"It is no trivial matter\" is an example of which rhetorical device?",
                            "options": [
                                "Litotes / Understatement",
                                "Slang",
                                "Alliteration",
                                "Hyperbole"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Litotes."
                        },
                        {
                            "id": "en-c2-u1-l3-q3",
                            "question": "If someone says \"I hear what you say\", British pragmatic convention often implies:",
                            "options": [
                                "I have perfect ears",
                                "I agree with 100% of it",
                                "I acknowledge your statement, but I disagree and will not alter my course",
                                "You speak too loudly"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "I disagree and will not change."
                        },
                        {
                            "id": "en-c2-u1-l3-q4",
                            "question": "Why is pragmatic competence critical at C2 proficiency?",
                            "options": [
                                "To avoid catastrophic misunderstandings in high-stakes international communication",
                                "To win spelling bees",
                                "To pass simple grammar tests",
                                "To read road signs"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Avoid misunderstandings in high-stakes settings."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u1-l4",
        "courseId": "english-c2",
        "unitId": "en-c2-u1",
        "unitTitle": "Unit 1: Master Stylistics & Pragmatics",
        "language": "en",
        "level": "C2",
        "lessonNumber": 4,
        "title": "Literary Text Analysis & Decoding Subtext",
        "description": "Klassik va zamonaviy adabiy matnlardagi ramzlar, metaforalar va falsafiy qatlamlarni tahlil qilish.",
        "estimatedDurationMinutes": 18,
        "icon": "📚",
        "steps": [
            {
                "id": "en-c2-u1-l4-s1",
                "title": "Adabiy Tahlil",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Allegory, Metaphor & Atmospheric Prose",
                    "explanation": "Matnning adabiy qatlamlarini ochish: Motif, allegory, pathetic fallacy (tabiat holatining qahramon ruhiyatiga mos kelishi), stream of consciousness.",
                    "vocabulary": [
                        {
                            "term": "Allegory",
                            "reading": "/ˈæl.ə.ɡər.i/",
                            "meaning": "Majoz / Ramziy hikoya",
                            "exampleSentence": "Animal Farm is an allegory of political totalitarianism.",
                            "exampleTranslation": "Animal Farm siyosiy totalitarizmning majoziy timsolidir."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Literary Text Analysis & Decoding Subtext",
                            "meaning": "Klassik va zamonaviy adabiy matnlardagi ramzlar, metaforalar va falsafiy qatlamlarni tahlil qilish.",
                            "usageNotes": "Matnning adabiy qatlamlarini ochish: Motif, allegory, pathetic fallacy (tabiat holatining qahramon ruhiyatiga mos kelishi), stream of consciousness.",
                            "examples": [
                                {
                                    "sentence": "Animal Farm is an allegory of political totalitarianism.",
                                    "translation": "Animal Farm siyosiy totalitarizmning majoziy timsolidir."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Adabiy san'at turini aniqlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u1-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "\"The weeping skies mirrored his profound grief.\" Which literary device is present?",
                            "options": [
                                "Pathetic fallacy / Personification",
                                "Hyperbole only",
                                "Technical jargon",
                                "Nominalization"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Pathetic fallacy (tabiat inson his-tuyg'usini aks ettirishi)."
                        },
                        {
                            "id": "en-c2-u1-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"It is the quintessential masterpiece of modern literature.\"",
                            "options": [
                                "Quintessential",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Quintessential\" (Eng oliy namuna, timsol) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u1-l4-q1",
                            "question": "What is an \"allegory\"?",
                            "options": [
                                "A narrative that can be interpreted to reveal a hidden symbolic meaning, typically moral or political",
                                "A short comic book",
                                "A dictionary definition",
                                "A mathematical formula"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Narrative with hidden symbolic meaning."
                        },
                        {
                            "id": "en-c2-u1-l4-q2",
                            "question": "An \"unreliable narrator\" in literature is a character who:",
                            "options": [
                                "Always tells 100% scientific truth",
                                "Never speaks",
                                "Is a robot",
                                "Tells the story with compromised credibility or distorted perception"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Compromised credibility or distorted perception."
                        },
                        {
                            "id": "en-c2-u1-l4-q3",
                            "question": "\"Juxtaposing light and dark imagery to reflect the protagonist's moral ambiguity\" demonstrates mastery of:",
                            "options": [
                                "Literary stylistic analysis",
                                "Spelling accuracy",
                                "Typing speed",
                                "Basic vocabulary"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Literary stylistic analysis."
                        },
                        {
                            "id": "en-c2-u1-l4-q4",
                            "question": "Pathetic fallacy specifically refers to attributing human emotions to:",
                            "options": [
                                "Other animals only",
                                "Nature and inanimate surroundings",
                                "Computers",
                                "Vehicles"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Nature and inanimate surroundings."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u1-l5",
        "courseId": "english-c2",
        "unitId": "en-c2-u1",
        "unitTitle": "Unit 1: Master Stylistics & Pragmatics",
        "language": "en",
        "level": "C2",
        "lessonNumber": 5,
        "title": "C2 Reading: Philosophical Treatises & Dialectical Logic",
        "description": "Kant, Nitsshe va zamonaviy faylasuflarning murakkab tahliliy traktatlarini erkin o'qib tushunish.",
        "estimatedDurationMinutes": 18,
        "icon": "🏛️",
        "steps": [
            {
                "id": "en-c2-u1-l5-s1",
                "title": "Falsafiy Traktat",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Kantian Deontology vs Utilitarianism",
                    "explanation": "Falsafiy axloq nazariyalari tahlili.",
                    "keyPoints": [
                        "Deontology posits that the moral worth of an action inheres intrinsically within the act itself, guided by universal categorical imperatives.",
                        "Conversely, consequentialist frameworks assess rectitude solely via the calculus of aggregate utility.",
                        "The tension between inviolable rights and utilitarian optimization forms the crucible of modern jurisprudence."
                    ],
                    "vocabulary": [
                        {
                            "term": "Inhere",
                            "reading": "/ɪnˈhɪər/",
                            "meaning": "Ichki mohiyatiga xos bo'lmoq / Singib ketgan bo'lmoq",
                            "exampleSentence": "Dignity inheres in every human being.",
                            "exampleTranslation": "Qadr-qimmat har bir inson mohiyatiga xosdir."
                        },
                        {
                            "term": "Rectitude",
                            "reading": "/ˈrek.tɪ.tʃuːd/",
                            "meaning": "Axloqiy to'g'rilik / Halollik",
                            "exampleSentence": "He acted with unquestioned moral rectitude.",
                            "exampleTranslation": "U so'zsiz axloqiy to'g'rilik bilan harakat qildi."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "C2 Reading: Philosophical Treatises & Dialectical Logic",
                            "meaning": "Kant, Nitsshe va zamonaviy faylasuflarning murakkab tahliliy traktatlarini erkin o'qib tushunish.",
                            "usageNotes": "Falsafiy axloq nazariyalari tahlili.",
                            "examples": [
                                {
                                    "sentence": "Dignity inheres in every human being.",
                                    "translation": "Qadr-qimmat har bir inson mohiyatiga xosdir."
                                },
                                {
                                    "sentence": "He acted with unquestioned moral rectitude.",
                                    "translation": "U so'zsiz axloqiy to'g'rilik bilan harakat qildi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Falsafiy kontseptsiyani aniqlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u1-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "According to deontological philosophy, where does the moral worth of an action reside?",
                            "options": [
                                "Solely in the pleasure it produces for the majority",
                                "In political power",
                                "Intrinsically within the act itself, irrespective of consequences",
                                "In monetary gain"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Intrinsically within the act itself."
                        },
                        {
                            "id": "en-c2-u1-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"He acted with unquestioned moral rectitude.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Rectitude",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Rectitude\" (Axloqiy to'g'rilik / Halollik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u1-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u1-l5-q1",
                            "question": "What is a \"categorical imperative\" in Kantian ethics?",
                            "options": [
                                "A suggestion that can be ignored if inconvenient",
                                "A mathematical theorem",
                                "An unconditional moral obligation that is binding in all circumstances",
                                "A temporary law in wartime"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Unconditional moral obligation."
                        },
                        {
                            "id": "en-c2-u1-l5-q2",
                            "question": "\"Crucible\" metaphorically signifies:",
                            "options": [
                                "A severe test or situation in which different elements interact to produce something new",
                                "A book cover",
                                "A cold winter day",
                                "An easy path"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Severe test/transformative situation."
                        },
                        {
                            "id": "en-c2-u1-l5-q3",
                            "question": "Utilitarianism evaluates actions primarily based on:",
                            "options": [
                                "Ancient ancestral customs",
                                "Random chance",
                                "Religious dogmas only",
                                "The maximization of overall happiness and well-being (utility)"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Maximization of aggregate utility."
                        },
                        {
                            "id": "en-c2-u1-l5-q4",
                            "question": "\"Inviolable rights\" means rights that:",
                            "options": [
                                "Expire every year",
                                "Only apply on holidays",
                                "Must never be infringed, compromised, or dishonored",
                                "Can be bought and sold"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Must never be infringed."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u2-l1",
        "courseId": "english-c2",
        "unitId": "en-c2-u2",
        "unitTitle": "Unit 2: Erudition & Nuanced Lexicon",
        "language": "en",
        "level": "C2",
        "lessonNumber": 1,
        "title": "Rare Erudite Vocabulary: Sesquipedalian, Equivocal, Pernicious",
        "description": "Kamdan-kam uchraydigan, yuksak intellektual adabiy leksika.",
        "estimatedDurationMinutes": 16,
        "icon": "💎",
        "steps": [
            {
                "id": "en-c2-u2-l1-s1",
                "title": "Erudit Leksikasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Erudite Lexicon for Native-Level Mastery",
                    "explanation": "Pernicious (o'ta xavfli / sezdirmasdan halokatli ta'sir ko'rsatuvchi), Sesquipedalian (juda uzun va murakkab so'zlardan foydalanuvchi), Obfuscate (atayin qorong'ilashtirmoq / chalkashtirmoq), Anachronistic (davriga to'g'ri kelmaydigan / eskirgan).",
                    "vocabulary": [
                        {
                            "term": "Pernicious",
                            "reading": "/pəˈnɪʃ.əs/",
                            "meaning": "Xavfli / Asta-sekin halokat keltiruvchi",
                            "exampleSentence": "Misinformation has a pernicious effect on society.",
                            "exampleTranslation": "Dezinformatsiya jamiyatga asta-sekin halokatli ta'sir ko'rsatadi."
                        },
                        {
                            "term": "Obfuscate",
                            "reading": "/ˈɒb.fʌs.keɪt/",
                            "meaning": "Atayin tushunarsiz qilmoq / Chalkashtirmoq",
                            "exampleSentence": "Lawyers often obfuscate plain facts.",
                            "exampleTranslation": "Advokatlar ko'pincha oddiy faktlarni atayin chalkashtiradilar."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Rare Erudite Vocabulary: Sesquipedalian, Equivocal, Pernicious",
                            "meaning": "Kamdan-kam uchraydigan, yuksak intellektual adabiy leksika.",
                            "usageNotes": "Pernicious (o'ta xavfli / sezdirmasdan halokatli ta'sir ko'rsatuvchi), Sesquipedalian (juda uzun va murakkab so'zlardan foydalanuvchi), Obfuscate (atayin qorong'ilashtirmoq / chalkashtirmoq), Anachronistic (davriga to'g'ri kelmaydigan / eskirgan).",
                            "examples": [
                                {
                                    "sentence": "Misinformation has a pernicious effect on society.",
                                    "translation": "Dezinformatsiya jamiyatga asta-sekin halokatli ta'sir ko'rsatadi."
                                },
                                {
                                    "sentence": "Lawyers often obfuscate plain facts.",
                                    "translation": "Advokatlar ko'pincha oddiy faktlarni atayin chalkashtiradilar."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri erudit so'zni tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u2-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"The author's style was excessively _______, full of obscure multisyllabic terms.\"",
                            "options": [
                                "equivocal",
                                "pernicious",
                                "sesquipedalian",
                                "anachronistic"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Sesquipedalian (uzun va murakkab so'zlar ishlatuvchi)."
                        },
                        {
                            "id": "en-c2-u2-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Lawyers often obfuscate plain facts.\"",
                            "options": [
                                "Obfuscate",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Obfuscate\" (Atayin tushunarsiz qilmoq / Chalkashtirmoq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u2-l1-q1",
                            "question": "\"Anachronistic\" refers to something that is:",
                            "options": [
                                "Made of solid gold",
                                "Extremely modern and high-tech",
                                "Chronologically out of place or belonging to an earlier era",
                                "Completely illegal"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Chronologically out of place."
                        },
                        {
                            "id": "en-c2-u2-l1-q2",
                            "question": "To \"obfuscate\" the truth means to:",
                            "options": [
                                "Translate it into English",
                                "Celebrate it loudly",
                                "Shine a bright light on it",
                                "Deliberately make it obscure, unclear or confusing"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Deliberately make obscure/confusing."
                        },
                        {
                            "id": "en-c2-u2-l1-q3",
                            "question": "A \"pernicious influence\" is:",
                            "options": [
                                "Subtly harmful and destructive over time",
                                "Short-lived",
                                "Completely harmless",
                                "Very funny and entertaining"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Subtly harmful and destructive."
                        },
                        {
                            "id": "en-c2-u2-l1-q4",
                            "question": "Choose the most erudite word for \"unavoidable\":",
                            "options": [
                                "Avoidless",
                                "Quick",
                                "Ineluctable / Inescapable",
                                "Un-stop"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Ineluctable."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u2-l2",
        "courseId": "english-c2",
        "unitId": "en-c2-u2",
        "unitTitle": "Unit 2: Erudition & Nuanced Lexicon",
        "language": "en",
        "level": "C2",
        "lessonNumber": 2,
        "title": "Cognitive Metaphors & Conceptual Blendings",
        "description": "Kognitiv tilshunoslik: metaforalarning inson tafakkurini boshqarish qudrati.",
        "estimatedDurationMinutes": 16,
        "icon": "🧠",
        "steps": [
            {
                "id": "en-c2-u2-l2-s1",
                "title": "Kognitiv Metafora",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Conceptual Metaphor Theory (Lakoff & Johnson)",
                    "explanation": "Metafora shunchaki adabiy bezak emas, balki inson fikrlash strukturasidir: \"Argument is War\" (He attacked my point, I defended my claim, She shot down his argument), \"Time is Money\" (Spend time, Save time, Invest hours).",
                    "vocabulary": [
                        {
                            "term": "Inherent",
                            "reading": "/ɪnˈher.ənt/",
                            "meaning": "Tug'ma / Ajralmas xususiyat",
                            "exampleSentence": "Risk is inherent in innovation.",
                            "exampleTranslation": "Xatar innovatsiyaning ajralmas qismidir."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Cognitive Metaphors & Conceptual Blendings",
                            "meaning": "Kognitiv tilshunoslik: metaforalarning inson tafakkurini boshqarish qudrati.",
                            "usageNotes": "Metafora shunchaki adabiy bezak emas, balki inson fikrlash strukturasidir: \"Argument is War\" (He attacked my point, I defended my claim, She shot down his argument), \"Time is Money\" (Spend time, Save time, Invest hours).",
                            "examples": [
                                {
                                    "sentence": "Risk is inherent in innovation.",
                                    "translation": "Xatar innovatsiyaning ajralmas qismidir."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "Asosiy metaforik modelni aniqlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u2-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"He demolished my thesis and struck down every counter-argument.\" Which conceptual metaphor is at work?",
                            "options": [
                                "Love is a Journey",
                                "Argument is War / Combat",
                                "Time is Money",
                                "Ideas are Food"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Argument is War."
                        },
                        {
                            "id": "en-c2-u2-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fame in the digital era can often be fleeting and ephemeral.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Ephemeral"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Ephemeral\" (Oʻtkinchi, bir lahzalik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u2-l2-q1",
                            "question": "In cognitive linguistics, conceptual metaphors function as:",
                            "options": [
                                "Errors made by non-native speakers",
                                "Fundamental cognitive mapping mechanisms that shape how humans perceive reality",
                                "Decorations for poetry only",
                                "Spelling rules"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Cognitive mapping mechanisms shaping perception."
                        },
                        {
                            "id": "en-c2-u2-l2-q2",
                            "question": "\"We have hit a crossroads in our relationship and must choose which path to take.\" Conceptual metaphor:",
                            "options": [
                                "Love / Life is a Journey",
                                "Time is Money",
                                "Knowledge is Light",
                                "Argument is Building"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Love/Life is a Journey."
                        },
                        {
                            "id": "en-c2-u2-l2-q3",
                            "question": "How does mastering conceptual metaphors assist C2 English proficiency?",
                            "options": [
                                "It eliminates the need for grammar",
                                "It lets you speak without vocabulary",
                                "It reduces speaking time",
                                "It enables effortless production and comprehension of native idiomatic nuance"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Enables effortless idiomatic nuance."
                        },
                        {
                            "id": "en-c2-u2-l2-q4",
                            "question": "\"That theory is half-baked; let me chew on it for a while.\" Conceptual metaphor:",
                            "options": [
                                "Ideas are Food / Nourishment",
                                "Money is Time",
                                "Mind is Computer",
                                "War is Peace"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Ideas are Food."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u2-l3",
        "courseId": "english-c2",
        "unitId": "en-c2-u2",
        "unitTitle": "Unit 2: Erudition & Nuanced Lexicon",
        "language": "en",
        "level": "C2",
        "lessonNumber": 3,
        "title": "Geopolitical Grand Strategy & Sovereign Macroeconomics",
        "description": "Xalqaro moliya arxitekturasi, Bretton-Vuds tizimi va global gegemoniya terminologiyasi.",
        "estimatedDurationMinutes": 16,
        "icon": "🌐",
        "steps": [
            {
                "id": "en-c2-u2-l3-s1",
                "title": "Global Strategiya Leksikasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Macroeconomics & Grand Strategy",
                    "explanation": "Hegemony (gegemoniya / yetakchilik), Fiat currency (qog'oz pul tizimi), Quantitative easing (miqdoriy yumshatish), Sovereign debt restructuring (davlat qarzini qayta tuzilishi).",
                    "vocabulary": [
                        {
                            "term": "Hegemony",
                            "reading": "/hɪˈdʒem.ə.ni/",
                            "meaning": "Gegemoniya / Siyosiy ustunlik",
                            "exampleSentence": "Economic hegemony shaped the global order.",
                            "exampleTranslation": "Iqtisodiy gegemoniya global tartibotni shakllantirdi."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Geopolitical Grand Strategy & Sovereign Macroeconomics",
                            "meaning": "Xalqaro moliya arxitekturasi, Bretton-Vuds tizimi va global gegemoniya terminologiyasi.",
                            "usageNotes": "Hegemony (gegemoniya / yetakchilik), Fiat currency (qog'oz pul tizimi), Quantitative easing (miqdoriy yumshatish), Sovereign debt restructuring (davlat qarzini qayta tuzilishi).",
                            "examples": [
                                {
                                    "sentence": "Economic hegemony shaped the global order.",
                                    "translation": "Iqtisodiy gegemoniya global tartibotni shakllantirdi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 5,
                "practiceData": {
                    "instructions": "To'g'ri atamani tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u2-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Central banks implemented _______ easing to inject liquidity into stagnating markets.\"",
                            "options": [
                                "quantitative",
                                "biological",
                                "computational",
                                "qualitative"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Quantitative easing (QE)."
                        },
                        {
                            "id": "en-c2-u2-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"It is the quintessential masterpiece of modern literature.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Quintessential",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Quintessential\" (Eng oliy namuna, timsol) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u2-l3-q1",
                            "question": "What is a \"fiat currency\"?",
                            "options": [
                                "Money that is not backed by a physical commodity like gold, but by government decree and trust",
                                "Foreign monopoly bills",
                                "Cryptocurrency only",
                                "Gold coins from Roman times"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Money backed by government decree/trust."
                        },
                        {
                            "id": "en-c2-u2-l3-q2",
                            "question": "\"Sovereign default\" occurs when a nation:",
                            "options": [
                                "Elects a new president",
                                "Changes its flag",
                                "Fails to meet its debt obligations to creditors",
                                "Builds a new capital"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Fails to meet debt obligations."
                        },
                        {
                            "id": "en-c2-u2-l3-q3",
                            "question": "A \"zero-sum game\" means a situation in which:",
                            "options": [
                                "One party's gain is exactly balanced by the other party's corresponding loss",
                                "All scores are erased",
                                "Everyone wins equally",
                                "No one participates"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "One party's gain equals another's loss."
                        },
                        {
                            "id": "en-c2-u2-l3-q4",
                            "question": "What does \"multipolarity\" denote in 21st-century geopolitics?",
                            "options": [
                                "North and South poles only",
                                "Free trade across oceans",
                                "Nuclear weapons proliferation",
                                "A global distribution of power among several influential nation-states rather than a single hegemon"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Power distributed among several influential states."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u2-l4",
        "courseId": "english-c2",
        "unitId": "en-c2-u2",
        "unitTitle": "Unit 2: Erudition & Nuanced Lexicon",
        "language": "en",
        "level": "C2",
        "lessonNumber": 4,
        "title": "High-Level Broadcast & Academic Lecture Listening: Quantum Decoherence",
        "description": "Kvant fizikasi va dekoherentsiya bo'yicha Oksford ma'ruzasini to'liq tezlikda tinglab tushunish.",
        "estimatedDurationMinutes": 18,
        "icon": "⚛️",
        "steps": [
            {
                "id": "en-c2-u2-l4-s1",
                "title": "Kvant Ma'ruzasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Quantum Decoherence and Superposition",
                    "explanation": "Kvant holatlari va makroskopik olam o'rtasidagi o'tish tahlili.",
                    "keyPoints": [
                        "Quantum superposition allows subatomic particles to inhabit probabilistic states simultaneously.",
                        "Decoherence describes the mechanism whereby environmental interaction irreversibly entangles a quantum system, rendering it classically deterministic.",
                        "Preserving coherence remains the paramount engineering challenge in scalable quantum computing architectures."
                    ],
                    "vocabulary": [
                        {
                            "term": "Superposition",
                            "reading": "/ˌsuː.pə.pəˈzɪʃ.ən/",
                            "meaning": "Kvant holatlari superpozitsiyasi",
                            "exampleSentence": "Qubits exploit quantum superposition.",
                            "exampleTranslation": "Kubitlar kvant superpozitsiyasidan foydalanadi."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "High-Level Broadcast & Academic Lecture Listening: Quantum Decoherence",
                            "meaning": "Kvant fizikasi va dekoherentsiya bo'yicha Oksford ma'ruzasini to'liq tezlikda tinglab tushunish.",
                            "usageNotes": "Kvant holatlari va makroskopik olam o'rtasidagi o'tish tahlili.",
                            "examples": [
                                {
                                    "sentence": "Qubits exploit quantum superposition.",
                                    "translation": "Kubitlar kvant superpozitsiyasidan foydalanadi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Ilmiy mohiyatni aniqlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u2-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "What causes quantum decoherence according to the lecture?",
                            "options": [
                                "Keeping particles completely frozen in vacuum",
                                "Computer programming bugs",
                                "Lack of electricity",
                                "Environmental interaction and entanglement with ambient particles"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Environmental interaction."
                        },
                        {
                            "id": "en-c2-u2-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Language and cultural identity are inextricably intertwined.\"",
                            "options": [
                                "doubt",
                                "Inextricable",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Inextricable\" (Ajralmas, chambarchas bogʻliq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u2-l4-q1",
                            "question": "What is the primary obstacle to building large-scale quantum computers?",
                            "options": [
                                "Buying computer screens",
                                "Connecting Wi-Fi",
                                "Writing software in HTML",
                                "Preventing quantum decoherence and maintaining fidelity"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Preventing decoherence and maintaining fidelity."
                        },
                        {
                            "id": "en-c2-u2-l4-q2",
                            "question": "\"Deterministic\" systems are those in which:",
                            "options": [
                                "Future states are completely dictated by initial conditions with no randomness",
                                "Magic is involved",
                                "Nothing happens",
                                "Everything is totally unpredictable"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Future states dictated by initial conditions."
                        },
                        {
                            "id": "en-c2-u2-l4-q3",
                            "question": "A qubit differs from a classical bit because it can represent:",
                            "options": [
                                "Only zero",
                                "Both 0 and 1 simultaneously via superposition",
                                "No information",
                                "Only one"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Both 0 and 1 via superposition."
                        },
                        {
                            "id": "en-c2-u2-l4-q4",
                            "question": "At C2 level, what listening capacity is expected on complex technical lectures?",
                            "options": [
                                "Reading subtitles only",
                                "Only catching 2 words per minute",
                                "Comprehending rapid native speech, technical vocabulary and underlying conceptual synthesis effortlessly",
                                "Asking for audio to be repeated 5 times"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Effortless comprehension of rapid technical speech."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u2-l5",
        "courseId": "english-c2",
        "unitId": "en-c2-u2",
        "unitTitle": "Unit 2: Erudition & Nuanced Lexicon",
        "language": "en",
        "level": "C2",
        "lessonNumber": 5,
        "title": "C2 Academic Essay Evaluation: The Pinnacle of Critical Feedback",
        "description": "Magistratura va doktorantura darajasidagi ilmiy maqolalarga taqriz va tahrir kiritish.",
        "estimatedDurationMinutes": 18,
        "icon": "📝",
        "steps": [
            {
                "id": "en-c2-u2-l5-s1",
                "title": "Doktorlik Darajasidagi Tahrir",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Doctoral Peer Review Framework",
                    "explanation": "Tahlil mezonlari: Epistemological rigor, methodological validity, falsifiability of hypotheses, and rhetorical elegance.",
                    "keyPoints": [
                        "Critiquing circular reasoning (begging the question)",
                        "Elevating academic tone without compromising communicative clarity"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "C2 Academic Essay Evaluation: The Pinnacle of Critical Feedback",
                            "meaning": "Magistratura va doktorantura darajasidagi ilmiy maqolalarga taqriz va tahrir kiritish.",
                            "usageNotes": "Tahlil mezonlari: Epistemological rigor, methodological validity, falsifiability of hypotheses, and rhetorical elegance.",
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
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Eng yaxshi tahririy tuzatishni tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u2-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "Draft sentence: \"The study proves that human nature is inherently selfish because people always act in selfish ways.\" How should this be critiqued?",
                            "options": [
                                "The assertion commits the logical fallacy of circular reasoning (petitio principii) and lacks empirical counter-weight.",
                                "It should have more exclamation marks.",
                                "It is completely fine.",
                                "The font size is wrong."
                            ],
                            "correctAnswer": 0,
                            "explanation": "Identifies circular reasoning (petitio principii)."
                        },
                        {
                            "id": "en-c2-u2-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The swift dissemination of knowledge accelerates innovation.\"",
                            "options": [
                                "Dissemination",
                                "reluctance",
                                "doubt",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Dissemination\" (Keng yoyish, tarqatish) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u2-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u2-l5-q1",
                            "question": "What does \"falsifiability\" mean in Karl Popper's philosophy of science?",
                            "options": [
                                "The capacity for a hypothesis or theory to be inherently proven false through empirical observation",
                                "Cheating on an exam",
                                "Making fake documents",
                                "Writing fiction novels"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Capacity to be proven false empirically."
                        },
                        {
                            "id": "en-c2-u2-l5-q2",
                            "question": "\"Petitio principii\" is the classical term for:",
                            "options": [
                                "A type of microscope",
                                "An award ceremony",
                                "A legal contract",
                                "Begging the question / Circular argument"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Circular reasoning / Begging the question."
                        },
                        {
                            "id": "en-c2-u2-l5-q3",
                            "question": "What is the hallmark of exemplary C2 academic prose?",
                            "options": [
                                "Using words from 1500 AD that no one understands",
                                "Writing without any paragraphs",
                                "Crystal-clear, precise reasoning paired with sophisticated syntactic variety and seamless flow",
                                "Convoluted sentences designed to confuse the reader"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Clear precise reasoning with syntactic variety."
                        },
                        {
                            "id": "en-c2-u2-l5-q4",
                            "question": "To \"substantiate a hypothesis\" means to:",
                            "options": [
                                "Disregard it completely",
                                "Provide verifiable empirical or logical evidence in its support",
                                "Delete it from the paper",
                                "Translate it into French"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Provide verifiable evidence in support."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u3-l1",
        "courseId": "english-c2",
        "unitId": "en-c2-u3",
        "unitTitle": "Unit 3: IELTS Band 8.5-9.0 Master Writing",
        "language": "en",
        "level": "C2",
        "lessonNumber": 1,
        "title": "IELTS Band 9.0 Writing Task 1: Flawless Synthesis & Elegant Overview",
        "description": "Band 9.0 mezonlari: tabiiy tahliliy ohang, ko'p o'lchovli ma'lumotlar integratsiyasi va nol grammatik xatolik.",
        "estimatedDurationMinutes": 18,
        "icon": "📊",
        "steps": [
            {
                "id": "en-c2-u3-l1-s1",
                "title": "Band 9.0 Task 1 Mezonlari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Band 9.0 Descriptor Requirements for Task 1",
                    "explanation": "Task Achievement: Fully satisfies all requirements with an insightful, comprehensive overview. Coherence: Seamless progression with natural paragraphing. Lexical: Wide range of vocabulary used with full flexibility and precise collocation. Grammar: Wide range of structures with full flexibility and accuracy; rare minor errors occur only as 'slips'.",
                    "keyPoints": [
                        "Avoid formulaic clichés like \"Looking at the chart we can see that...\"",
                        "Write authoritative, high-density analytical sentences."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Band 9.0 Writing Task 1: Flawless Synthesis & Elegant Overview",
                            "meaning": "Band 9.0 mezonlari: tabiiy tahliliy ohang, ko'p o'lchovli ma'lumotlar integratsiyasi va nol grammatik xatolik.",
                            "usageNotes": "Task Achievement: Fully satisfies all requirements with an insightful, comprehensive overview. Coherence: Seamless progression with natural paragraphing. Lexical: Wide range of vocabulary used with full flexibility and precise collocation. Grammar: Wide range of structures with full flexibility and accuracy; rare minor errors occur only as 'slips'.",
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
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Band 9.0 darajasidagi Overview jumlasini tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u3-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "Which Overview represents genuine Band 9.0 caliber?",
                            "options": [
                                "In summary, energy is important.",
                                "Overall, while global fossil fuel dependency underwent a precipitous decline over the 30-year timeframe, renewable energy adoption experienced an exponential surge, outstripping conventional sources by the final period.",
                                "Overall the line goes up and the bar goes down in the chart.",
                                "Looking at the chart, there are many numbers that change."
                            ],
                            "correctAnswer": 1,
                            "explanation": "Insightful, cohesive, and lexically masterful overview."
                        },
                        {
                            "id": "en-c2-u3-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fame in the digital era can often be fleeting and ephemeral.\"",
                            "options": [
                                "doubt",
                                "reluctance",
                                "delay",
                                "Ephemeral"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Ephemeral\" (Oʻtkinchi, bir lahzalik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u3-l1-q1",
                            "question": "How does Band 9.0 differ from Band 7.0 in Task 1 Lexical Resource?",
                            "options": [
                                "Band 9.0 uses rhyme",
                                "Band 9.0 uses vocabulary with full flexibility, precision and natural sophisticated collocation; errors are rare slips only",
                                "Band 9.0 writes 500 words",
                                "Band 9.0 uses colors"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Full flexibility, precision, and natural collocations."
                        },
                        {
                            "id": "en-c2-u3-l1-q2",
                            "question": "\"Outstripping conventional sources\" means:",
                            "options": [
                                "Becoming smaller than them",
                                "Stopping all generation",
                                "Surpassing and exceeding them significantly",
                                "Destroying them"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Surpassing and exceeding."
                        },
                        {
                            "id": "en-c2-u3-l1-q3",
                            "question": "What is a \"slip\" in IELTS assessment terminology?",
                            "options": [
                                "A severe misunderstanding of grammar rules",
                                "Falling down",
                                "Writing the wrong name on the exam paper",
                                "A rare minor typo made under pressure that does not reflect a lack of linguistic knowledge"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Rare minor typo under pressure."
                        },
                        {
                            "id": "en-c2-u3-l1-q4",
                            "question": "Is it necessary to include every single minor data point in Band 9.0 Task 1?",
                            "options": [
                                "No, Band 9.0 selects key features, contrasts them insightfully and synthesizes data rather than producing a raw inventory",
                                "Yes, write 10 pages of numbers",
                                "Yes, every millisecond must be listed",
                                "Leave the body paragraphs blank"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Selects key features and synthesizes insightfully."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u3-l2",
        "courseId": "english-c2",
        "unitId": "en-c2-u3",
        "unitTitle": "Unit 3: IELTS Band 8.5-9.0 Master Writing",
        "language": "en",
        "level": "C2",
        "lessonNumber": 2,
        "title": "IELTS Band 9.0 Writing Task 2: Flawless Dialectical Essay Mastery",
        "description": "Band 9.0 insho: chuqur intellektual dalillar, tabiiy diskurs oqimi va har qanday shablonlikdan holi mukammal insho.",
        "estimatedDurationMinutes": 18,
        "icon": "✍️",
        "steps": [
            {
                "id": "en-c2-u3-l2-s1",
                "title": "Band 9.0 Insho Arxitekturasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "The Band 9.0 Essay Blueprint",
                    "explanation": "Mavzu bo'yicha chuqur tahlil: Shablon iboralarsiz (e.g. \"Since ancient times this is debated\" EMAS), darhol masalaning mohiyatiga kirish va dalillarni uzviy mantiq bilan rivojlantirish.",
                    "keyPoints": [
                        "Nuanced position maintained throughout the entire text.",
                        "Cohesive devices that flow so naturally they are nearly invisible."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Band 9.0 Writing Task 2: Flawless Dialectical Essay Mastery",
                            "meaning": "Band 9.0 insho: chuqur intellektual dalillar, tabiiy diskurs oqimi va har qanday shablonlikdan holi mukammal insho.",
                            "usageNotes": "Mavzu bo'yicha chuqur tahlil: Shablon iboralarsiz (e.g. \"Since ancient times this is debated\" EMAS), darhol masalaning mohiyatiga kirish va dalillarni uzviy mantiq bilan rivojlantirish.",
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
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Band 9.0 insho kirish qismini tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u3-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "Which introduction represents genuine Band 9.0 execution for a prompt on urbanization?",
                            "options": [
                                "Cities are big places with buildings.",
                                "Nowadays urbanization is very important topic. Some like cities and some hate cities. I will discuss both.",
                                "The relentless pace of 21st-century urbanization has reignited intense debate regarding the socio-environmental viability of megacities. While detractors highlight acute infrastructure strain and ecological degradation, this essay contends that well-governed urban density remains humanity's most potent engine for sustainable economic innovation.",
                                "People live in cities since long ago."
                            ],
                            "correctAnswer": 2,
                            "explanation": "Flawless academic sophistication and crystal-clear thesis."
                        },
                        {
                            "id": "en-c2-u3-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"It is the quintessential masterpiece of modern literature.\"",
                            "options": [
                                "Quintessential",
                                "reluctance",
                                "doubt",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Quintessential\" (Eng oliy namuna, timsol) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u3-l2-q1",
                            "question": "What characterizes Band 9.0 Task Response in IELTS Writing?",
                            "options": [
                                "Uses the word \"moreover\" in every sentence",
                                "Writes 1000 words in 10 minutes",
                                "Fully addresses all parts of the task with a fully developed position and well-supported ideas throughout",
                                "Draws a flowchart in the margin"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Fully developed position and well-supported ideas."
                        },
                        {
                            "id": "en-c2-u3-l2-q2",
                            "question": "Why do Band 9.0 essays avoid robotic memorized templates?",
                            "options": [
                                "Because templates are too short",
                                "Because examiners instantly penalize artificial boilerplate formulas that disrupt organic coherence",
                                "Because templates are illegal",
                                "Because templates are written in pencil"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Examiners penalize artificial boilerplate."
                        },
                        {
                            "id": "en-c2-u3-l2-q3",
                            "question": "\"Ecological degradation\" refers to:",
                            "options": [
                                "The deterioration of the environment through depletion of resources and destruction of ecosystems",
                                "Cleaning a river",
                                "A weather forecast",
                                "Planting trees in a park"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Deterioration of the environment."
                        },
                        {
                            "id": "en-c2-u3-l2-q4",
                            "question": "In Band 9.0 cohesion, how are paragraphs connected?",
                            "options": [
                                "By drawing lines between them",
                                "By numbering them 1, 2, 3, 4",
                                "By repeating the question title 10 times",
                                "Through subtle thematic progression, conceptual references and natural transitions rather than mechanical linking words"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Subtle thematic progression and natural transitions."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u3-l3",
        "courseId": "english-c2",
        "unitId": "en-c2-u3",
        "unitTitle": "Unit 3: IELTS Band 8.5-9.0 Master Writing",
        "language": "en",
        "level": "C2",
        "lessonNumber": 3,
        "title": "Master Academic Dissertation Framing & Defense",
        "description": "Magistrlik va doktorlik dissertatsiyasi metodologiyasi, tadqiqot gipotezasi va himoyasi.",
        "estimatedDurationMinutes": 18,
        "icon": "🎓",
        "steps": [
            {
                "id": "en-c2-u3-l3-s1",
                "title": "Dissertatsiya Strukturasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Defending a Doctoral Thesis",
                    "explanation": "Dissertatsiya doirasida tadqiqot metodologiyasi (Quantitative, Qualitative, Mixed-methods), Triangulation (bir nechta manbalar orqali dalilni tekshirish), Limitations of the study.",
                    "vocabulary": [
                        {
                            "term": "Triangulation",
                            "reading": "/traɪˌæŋ.ɡjəˈleɪ.ʃən/",
                            "meaning": "Bir nechta metod va manbalar orqali ishonchlilikni tekshirish",
                            "exampleSentence": "Data triangulation validated the conclusions.",
                            "exampleTranslation": "Ma'lumotlar triangulyatsiyasi xulosalarni tasdiqladi."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Master Academic Dissertation Framing & Defense",
                            "meaning": "Magistrlik va doktorlik dissertatsiyasi metodologiyasi, tadqiqot gipotezasi va himoyasi.",
                            "usageNotes": "Dissertatsiya doirasida tadqiqot metodologiyasi (Quantitative, Qualitative, Mixed-methods), Triangulation (bir nechta manbalar orqali dalilni tekshirish), Limitations of the study.",
                            "examples": [
                                {
                                    "sentence": "Data triangulation validated the conclusions.",
                                    "translation": "Ma'lumotlar triangulyatsiyasi xulosalarni tasdiqladi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri metodologik iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u3-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "\"To mitigate subjectivity, the researcher utilized methodological _______ across three distinct datasets.\"",
                            "options": [
                                "obfuscation",
                                "indignation",
                                "litotes",
                                "triangulation"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Methodological triangulation."
                        },
                        {
                            "id": "en-c2-u3-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Language and cultural identity are inextricably intertwined.\"",
                            "options": [
                                "doubt",
                                "Inextricable",
                                "delay",
                                "reluctance"
                            ],
                            "correctAnswer": 1,
                            "explanation": "\"Inextricable\" (Ajralmas, chambarchas bogʻliq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u3-l3-q1",
                            "question": "What is the purpose of acknowledging \"limitations of the study\" in a doctoral dissertation?",
                            "options": [
                                "It proves the author failed",
                                "It is required by the printer",
                                "It makes the paper shorter",
                                "It reflects academic integrity and defines the precise scope and generalizability of findings"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Reflects integrity and defines scope."
                        },
                        {
                            "id": "en-c2-u3-l3-q2",
                            "question": "\"Empirical generalizability\" refers to:",
                            "options": [
                                "The extent to which study findings can be applied to broader populations or contexts",
                                "A military rank",
                                "Translating into general words",
                                "A dictionary index"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Extent to which findings apply to broader contexts."
                        },
                        {
                            "id": "en-c2-u3-l3-q3",
                            "question": "A \"null hypothesis\" assumes that:",
                            "options": [
                                "Everything is 100% related",
                                "The hypothesis was stolen",
                                "There is no significant statistical relationship or effect between the variables being tested",
                                "The experiment is cancelled"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "No significant relationship between variables."
                        },
                        {
                            "id": "en-c2-u3-l3-q4",
                            "question": "In a thesis defense (viva voce), the candidate must:",
                            "options": [
                                "Articulate and defend the original intellectual contribution of their research against critical committee examination",
                                "Cry for mercy",
                                "Stay silent and smile",
                                "Read the whole thesis aloud word for word"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Articulate and defend original intellectual contribution."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u3-l4",
        "courseId": "english-c2",
        "unitId": "en-c2-u3",
        "unitTitle": "Unit 3: IELTS Band 8.5-9.0 Master Writing",
        "language": "en",
        "level": "C2",
        "lessonNumber": 4,
        "title": "IELTS Speaking Band 9.0: Effortless Eloquence & Intellectual Spontaneity",
        "description": "Imtihon oluvchi bilan oliy darajadagi tengma-teng intellektual muloqot, mukammal fonetika va idiomatik tabiiylik.",
        "estimatedDurationMinutes": 18,
        "icon": "🎙️",
        "steps": [
            {
                "id": "en-c2-u3-l4-s1",
                "title": "Band 9.0 Speaking Mezonlari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "The Band 9.0 Speaking Profile",
                    "explanation": "Fluency: Speaks fluently with only rare repetition or self-correction; any hesitation is content-related to develop ideas. Lexicon: Uses vocabulary with full flexibility and precision in all topics; uses idiomatic language naturally and accurately. Grammar: Fully flexible and accurate structures. Pronunciation: Effortlessly understood; uses a full range of phonological features precisely.",
                    "keyPoints": [
                        "No hesitation searching for words — hesitation is only intellectual pondering.",
                        "Natural tone modulation and effortless humor/irony."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "IELTS Speaking Band 9.0: Effortless Eloquence & Intellectual Spontaneity",
                            "meaning": "Imtihon oluvchi bilan oliy darajadagi tengma-teng intellektual muloqot, mukammal fonetika va idiomatik tabiiylik.",
                            "usageNotes": "Fluency: Speaks fluently with only rare repetition or self-correction; any hesitation is content-related to develop ideas. Lexicon: Uses vocabulary with full flexibility and precision in all topics; uses idiomatic language naturally and accurately. Grammar: Fully flexible and accurate structures. Pronunciation: Effortlessly understood; uses a full range of phonological features precisely.",
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
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Band 9.0 darajasidagi javobni tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u3-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "Examiner: \"Should museums remain free of charge for the public?\" Band 9.0 response:",
                            "options": [
                                "Unquestionably. Public accessibility to cultural heritage serves as a quintessential cornerstone of an enlightened democracy. Imposing financial barriers inadvertently commodifies knowledge, whereas universally subsidized institutions cultivate cross-generational intellectual curiosity.",
                                "I think money for museums is bad because I have no money.",
                                "Museums have old paintings and we should see them free.",
                                "Yes, free museums are very nice for people."
                            ],
                            "correctAnswer": 0,
                            "explanation": "Effortless intellectual eloquence and philosophical depth."
                        },
                        {
                            "id": "en-c2-u3-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The swift dissemination of knowledge accelerates innovation.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Dissemination",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Dissemination\" (Keng yoyish, tarqatish) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u3-l4-q1",
                            "question": "What distinguishes Band 9.0 Fluency from lower bands in IELTS Speaking?",
                            "options": [
                                "Hesitation is exclusively content-related (thinking what to say rather than searching for words or grammar)",
                                "Never pausing even to breathe",
                                "Using simple vocabulary only",
                                "Speaking so fast the examiner cannot understand"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Hesitation is exclusively content-related."
                        },
                        {
                            "id": "en-c2-u3-l4-q2",
                            "question": "\"Commodify knowledge\" means:",
                            "options": [
                                "Learning to read",
                                "Printing school textbooks",
                                "Going to university",
                                "Treating knowledge as a commercial commodity to be bought and sold"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Treating knowledge as commercial commodity."
                        },
                        {
                            "id": "en-c2-u3-l4-q3",
                            "question": "\"Quintessential cornerstone\" is a collocation meaning:",
                            "options": [
                                "The most perfect and essential fundamental pillar",
                                "A broken stone",
                                "A minor detail",
                                "A square room"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Most perfect and essential pillar."
                        },
                        {
                            "id": "en-c2-u3-l4-q4",
                            "question": "How is humor or mild irony viewed in IELTS Speaking Part 3 at Band 9.0?",
                            "options": [
                                "The examiner does not understand it",
                                "As a sign of supreme pragmatic competence and natural native-level language mastery",
                                "It is strictly forbidden and results in disqualification",
                                "It loses grammar points"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Sign of supreme pragmatic competence."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u3-l5",
        "courseId": "english-c2",
        "unitId": "en-c2-u3",
        "unitTitle": "Unit 3: IELTS Band 8.5-9.0 Master Writing",
        "language": "en",
        "level": "C2",
        "lessonNumber": 5,
        "title": "C2 Capstone Grand Mastery Examination & Global Certification",
        "description": "Ingliz tili (CEFR C2 / IELTS 9.0) bo'yicha to'liq oliy darajadagi bitiruv imtihoni.",
        "estimatedDurationMinutes": 20,
        "icon": "👑",
        "steps": [
            {
                "id": "en-c2-u3-l5-s1",
                "title": "C2 Grand Mastery Xulosasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "CEFR C2 Mastery (Near-Native Fluency & Intellect)",
                    "explanation": "Siz ingliz tilining eng yuksak cho'qqisini zabt etdingiz. Sizning bilimingiz xalqaro ilmiy konferentsiyalar, Birlashgan Millatlar Tashkiloti sammitlari, nufuzli nashriyotlar va oliy ta'lim muassasalarida bexato va mukammal tan olinadi.",
                    "keyPoints": [
                        "Flawless command across all 6 skills",
                        "Subtle literary, pragmatic and philosophical competence",
                        "IELTS Band 8.5 - 9.0 certified readiness"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "C2 Capstone Grand Mastery Examination & Global Certification",
                            "meaning": "Ingliz tili (CEFR C2 / IELTS 9.0) bo'yicha to'liq oliy darajadagi bitiruv imtihoni.",
                            "usageNotes": "Siz ingliz tilining eng yuksak cho'qqisini zabt etdingiz. Sizning bilimingiz xalqaro ilmiy konferentsiyalar, Birlashgan Millatlar Tashkiloti sammitlari, nufuzli nashriyotlar va oliy ta'lim muassasalarida bexato va mukammal tan olinadi.",
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
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l5-s2",
                "title": "Oliy Bitiruv Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "Bitiruv sinovi savoliga javob bering.",
                    "exercises": [
                        {
                            "id": "en-c2-u3-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Far be it from me to cast aspersions on their integrity; _______, the statistical anomalies warrant independent forensic auditing.\"",
                            "options": [
                                "furthermore",
                                "so as to",
                                "nonetheless",
                                "because"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Nonetheless (shunga qaramay)."
                        },
                        {
                            "id": "en-c2-u3-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fame in the digital era can often be fleeting and ephemeral.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Ephemeral"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Ephemeral\" (Oʻtkinchi, bir lahzalik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u3-l5-s3",
                "title": "C2 Yakuniy Sertifikatsiya Imtihoni",
                "type": "test",
                "estimatedMinutes": 8,
                "testData": {
                    "instructions": "C2 darajasini to'liq tasdiqlash uchun imtihon savollariga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u3-l5-q1",
                            "question": "To \"cast aspersions on someone's integrity\" means to:",
                            "options": [
                                "Praise them publicly",
                                "Hire them for a job",
                                "Make damaging or derogatory remarks regarding their honesty and reputation",
                                "Give them a medal"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Make damaging remarks regarding honesty."
                        },
                        {
                            "id": "en-c2-u3-l5-q2",
                            "question": "Suffice it to say, the epochal discovery has _______ altered our understanding of theoretical physics.",
                            "options": [
                                "irrevocably",
                                "doubtfully",
                                "ephemeral",
                                "temporary"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Irrevocably altered (qaytarib bo'lmas darajada o'zgartirdi)."
                        },
                        {
                            "id": "en-c2-u3-l5-q3",
                            "question": "Which CEFR level represents absolute native-equivalent mastery of the English language?",
                            "options": [
                                "B2",
                                "A1",
                                "C1",
                                "C2"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "C2 (Mastery)."
                        },
                        {
                            "id": "en-c2-u3-l5-q4",
                            "question": "Which IELTS overall band score corresponds to CEFR C2 proficiency?",
                            "options": [
                                "Band 7.0",
                                "Band 6.0",
                                "Band 8.5 to 9.0",
                                "Band 5.5"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Band 8.5 to 9.0."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u4-l1",
        "courseId": "english-c2",
        "unitId": "en-c2-u4",
        "unitTitle": "Unit 4: Rhetoric & Legal Discourse",
        "language": "en",
        "level": "C2",
        "lessonNumber": 16,
        "title": "Jurisprudence & Legalistic Terminology",
        "description": "Huquqiy va institutsional til: \"Statutory\", \"Jurisdiction\", \"Inalienable\", \"Subpoena\".",
        "estimatedDurationMinutes": 18,
        "icon": "⚖️",
        "steps": [
            {
                "id": "en-c2-u4-l1-s1",
                "title": "Huquqiy Uslub va Terminologiya",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "Jurisprudence & Statutory Registers",
                    "explanation": "Institutsional va yuridik hujjatchilikka oid oliy akademik leksika.",
                    "keyPoints": [
                        "Inalienable rights — daxlsiz/tortib olib bo'lmaydigan huquqlar",
                        "Statutory obligations — qonuniy majburiyatlar",
                        "Pursuant to Section 4 — 4-bandga muvofiq"
                    ],
                    "vocabulary": [
                        {
                            "term": "Inalienable",
                            "reading": "/ɪnˈeɪ.li.ə.nə.bəl/",
                            "meaning": "Daxlsiz, ajralmas",
                            "exampleSentence": "Human dignity is an inalienable right.",
                            "exampleTranslation": "Inson qadr-qimmati ajralmas huquqdir."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Jurisprudence & Legalistic Terminology",
                            "meaning": "Huquqiy va institutsional til: \"Statutory\", \"Jurisdiction\", \"Inalienable\", \"Subpoena\".",
                            "usageNotes": "Institutsional va yuridik hujjatchilikka oid oliy akademik leksika.",
                            "examples": [
                                {
                                    "sentence": "Human dignity is an inalienable right.",
                                    "translation": "Inson qadr-qimmati ajralmas huquqdir."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri yuridik iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u4-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Pursuant _______ statutory regulations, the tribunal dismissed the claim.\"",
                            "options": [
                                "with",
                                "in",
                                "to",
                                "of"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Pursuant to = muvofiq."
                        },
                        {
                            "id": "en-c2-u4-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"It is the quintessential masterpiece of modern literature.\"",
                            "options": [
                                "Quintessential",
                                "reluctance",
                                "delay",
                                "doubt"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Quintessential\" (Eng oliy namuna, timsol) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u4-l1-q1",
                            "question": "What does \"statutory\" mean?",
                            "options": [
                                "Illegal",
                                "Temporary",
                                "Enacted, created, or required by statute or law",
                                "Optional"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Enacted or required by law."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u4-l2",
        "courseId": "english-c2",
        "unitId": "en-c2-u4",
        "unitTitle": "Unit 4: Rhetoric & Legal Discourse",
        "language": "en",
        "level": "C2",
        "lessonNumber": 17,
        "title": "Literary Allusions & Metaphorical Nuance",
        "description": "Adabiy ishoralar (allusions) va chuqur ko'chma ma'nolar: \"Achilles' heel\", \"Pyrrhic victory\", \"Pandora's box\".",
        "estimatedDurationMinutes": 18,
        "icon": "📚",
        "steps": [
            {
                "id": "en-c2-u4-l2-s1",
                "title": "Adabiy Ishoralar (Allusions)",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "Classic Allusions in Elite English",
                    "explanation": "Ingliz tili elita nutqida klassik va tarixiy ishoralarning ishlatilishi.",
                    "keyPoints": [
                        "Pyrrhic victory — juda katta yo'qotish evaziga erishilgan mag'lubiyatga teng g'alaba",
                        "Achilles' heel — eng nozik/zaif nuqta",
                        "Opening a Pandora's box — hal etib bo'lmas muammolar zanjirini keltirib chiqarish"
                    ],
                    "vocabulary": [
                        {
                            "term": "Pyrrhic",
                            "reading": "/ˈpɪr.ɪk/",
                            "meaning": "Pirr g'alabasi (og'ir yo'qotishli)",
                            "exampleSentence": "It was a Pyrrhic victory.",
                            "exampleTranslation": "Bu ulkan yo'qotishli g'alaba edi."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Literary Allusions & Metaphorical Nuance",
                            "meaning": "Adabiy ishoralar (allusions) va chuqur ko'chma ma'nolar: \"Achilles' heel\", \"Pyrrhic victory\", \"Pandora's box\".",
                            "usageNotes": "Ingliz tili elita nutqida klassik va tarixiy ishoralarning ishlatilishi.",
                            "examples": [
                                {
                                    "sentence": "It was a Pyrrhic victory.",
                                    "translation": "Bu ulkan yo'qotishli g'alaba edi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u4-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Lack of cyber-security proved to be the corporation's _______ heel.\"",
                            "options": [
                                "Hercules'",
                                "Achilles'",
                                "Zeus'",
                                "Apollo's"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Achilles' heel = nozik nuqta."
                        },
                        {
                            "id": "en-c2-u4-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Language and cultural identity are inextricably intertwined.\"",
                            "options": [
                                "doubt",
                                "delay",
                                "Inextricable",
                                "reluctance"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Inextricable\" (Ajralmas, chambarchas bogʻliq) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u4-l2-q1",
                            "question": "A \"Pyrrhic victory\" is one where:",
                            "options": [
                                "The victory is quick and easy",
                                "The toll paid negates any true strategic benefit",
                                "The enemy surrenders peacefully",
                                "Nobody wins"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "The toll paid negates any benefit."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u4-l3",
        "courseId": "english-c2",
        "unitId": "en-c2-u4",
        "unitTitle": "Unit 4: Rhetoric & Legal Discourse",
        "language": "en",
        "level": "C2",
        "lessonNumber": 18,
        "title": "Diplomatic Tact, Euphemism & Ambiguity",
        "description": "Diplomatik muloqot: evfemizmlar, vazminlik va siyosiy muloqot madaniyati.",
        "estimatedDurationMinutes": 18,
        "icon": "🕊️",
        "steps": [
            {
                "id": "en-c2-u4-l3-s1",
                "title": "Diplomatik Evfemizmlar",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "Diplomatic Discourse & Subtlety",
                    "explanation": "Xalqaro diplomatiya va oliy doiralarda fikrni o'ta bosiqlik bilan yetkazish.",
                    "keyPoints": [
                        "Frank exchange of views — Keskin va ziddiyatli muzokara",
                        "Economical with the truth — Haqiqatni yashirish/chalg'itish",
                        "Constructive ambiguity — Ikkala taraf uchun ham qulay noaniqlik"
                    ],
                    "vocabulary": [
                        {
                            "term": "Euphemism",
                            "reading": "/ˈjuː.fə.mɪ.zəm/",
                            "meaning": "Yumshatilgan so'z (evfemizm)",
                            "exampleSentence": "Using a euphemism for death.",
                            "exampleTranslation": "O'lim so'zi o'rniga yumshatilgan ibora ishlatish."
                        },
                        {
                            "term": "Dissemination",
                            "reading": "/dɪˌsem.ɪˈneɪ.ʃən/",
                            "meaning": "Keng yoyish, tarqatish",
                            "exampleSentence": "The swift dissemination of knowledge accelerates innovation.",
                            "exampleTranslation": "Bilimlarning tezkor tarqalishi innovatsiyalarni jadallashtiradi."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Diplomatic Tact, Euphemism & Ambiguity",
                            "meaning": "Diplomatik muloqot: evfemizmlar, vazminlik va siyosiy muloqot madaniyati.",
                            "usageNotes": "Xalqaro diplomatiya va oliy doiralarda fikrni o'ta bosiqlik bilan yetkazish.",
                            "examples": [
                                {
                                    "sentence": "Using a euphemism for death.",
                                    "translation": "O'lim so'zi o'rniga yumshatilgan ibora ishlatish."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri diplomatik iborani tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u4-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "In diplomatic cables, a \"frank exchange of views\" signifies:",
                            "options": [
                                "A heated disagreement or conflict",
                                "A complete agreement",
                                "A friendly chat over coffee",
                                "A silent meeting"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Frank exchange = keskin ziddiyatli muzokara."
                        },
                        {
                            "id": "en-c2-u4-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"The swift dissemination of knowledge accelerates innovation.\"",
                            "options": [
                                "Dissemination",
                                "doubt",
                                "reluctance",
                                "delay"
                            ],
                            "correctAnswer": 0,
                            "explanation": "\"Dissemination\" (Keng yoyish, tarqatish) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u4-l3-q1",
                            "question": "What is \"constructive ambiguity\"?",
                            "options": [
                                "Deliberate vagueness in negotiating to allow different interpretations by opposing sides",
                                "A translation error",
                                "A clear mistake in a treaty",
                                "An argument"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Deliberate vagueness to allow different interpretations."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u4-l4",
        "courseId": "english-c2",
        "unitId": "en-c2-u4",
        "unitTitle": "Unit 4: Rhetoric & Legal Discourse",
        "language": "en",
        "level": "C2",
        "lessonNumber": 19,
        "title": "Mastery of Epistemological & Philosophical Prose",
        "description": "Falsafiy va epistemologik ilmiy matnlar tahlili: \"Ontological\", \"Heuristic\", \"Hermeneutics\".",
        "estimatedDurationMinutes": 18,
        "icon": "🧠",
        "steps": [
            {
                "id": "en-c2-u4-l4-s1",
                "title": "Falsafiy Uslubiyat",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "Epistemology & Theoretical Analysis",
                    "explanation": "Akademiyadagi eng oliy tahliliy va falsafiy tushunchalar.",
                    "keyPoints": [
                        "Ontological security — Borliqqa oid barqarorlik hissi",
                        "Heuristic device — Amaliy kashfiyot vositasi",
                        "Hermeneutic circle — Matnni qism va butunlikda talqin qilish"
                    ],
                    "vocabulary": [
                        {
                            "term": "Epistemology",
                            "reading": "/ɪˌpɪs.təˈmɒl.ə.dʒi/",
                            "meaning": "Bilmash/Gnoseologiya nazariyasi",
                            "exampleSentence": "Epistemology studies the nature of knowledge.",
                            "exampleTranslation": "Epistemologiya bilimning tabiatini o'rganadi."
                        },
                        {
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Mastery of Epistemological & Philosophical Prose",
                            "meaning": "Falsafiy va epistemologik ilmiy matnlar tahlili: \"Ontological\", \"Heuristic\", \"Hermeneutics\".",
                            "usageNotes": "Akademiyadagi eng oliy tahliliy va falsafiy tushunchalar.",
                            "examples": [
                                {
                                    "sentence": "Epistemology studies the nature of knowledge.",
                                    "translation": "Epistemologiya bilimning tabiatini o'rganadi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri falsafiy atamani tanlang.",
                    "exercises": [
                        {
                            "id": "en-c2-u4-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "A practical problem-solving approach not guaranteed to be optimal is called a:",
                            "options": [
                                "syllogism",
                                "tautology",
                                "paradox",
                                "heuristic"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Heuristic device."
                        },
                        {
                            "id": "en-c2-u4-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"Fame in the digital era can often be fleeting and ephemeral.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "doubt",
                                "Ephemeral"
                            ],
                            "correctAnswer": 3,
                            "explanation": "\"Ephemeral\" (Oʻtkinchi, bir lahzalik) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "en-c2-u4-l4-q1",
                            "question": "What does \"ontological\" concern?",
                            "options": [
                                "The study of insects",
                                "Historical dates",
                                "Chemical bonds",
                                "The nature of being, existence, or reality"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Nature of being or existence."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "en-c2-u4-l5",
        "courseId": "english-c2",
        "unitId": "en-c2-u4",
        "unitTitle": "Unit 4: Rhetoric & Legal Discourse",
        "language": "en",
        "level": "C2",
        "lessonNumber": 20,
        "title": "C2 Master Class Final Capstone Examination",
        "description": "Ingliz tili C2 Oliy O'zlashtirish Darajasining to'liq va yakuniy professional baholash imtihoni.",
        "estimatedDurationMinutes": 20,
        "icon": "👑",
        "steps": [
            {
                "id": "en-c2-u4-l5-s1",
                "title": "C2 Ultimate Overview",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "C2 Mastery Peak Summary",
                    "explanation": "Congratulations! You have reached the pinnacle of English language learning (CEFR C2).",
                    "keyPoints": [
                        "Native-level fluency across academic, legal, and literary registers",
                        "Flawless mastery of inversion, rhetorical tropes, and diplomatic nuance",
                        "IELTS 8.5–9.0 equivalent competence"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "C2 Master Class Final Capstone Examination",
                            "meaning": "Ingliz tili C2 Oliy O'zlashtirish Darajasining to'liq va yakuniy professional baholash imtihoni.",
                            "usageNotes": "Congratulations! You have reached the pinnacle of English language learning (CEFR C2).",
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
                            "term": "Ephemeral",
                            "reading": "/ɪˈfem.ər.əl/",
                            "meaning": "Oʻtkinchi, bir lahzalik",
                            "exampleSentence": "Fame in the digital era can often be fleeting and ephemeral.",
                            "exampleTranslation": "Raqamli asrdagi shuhrat koʻpincha oʻtkinchi va lahzalik boʻlishi mumkin."
                        },
                        {
                            "term": "Quintessential",
                            "reading": "/ˌkwɪn.tɪˈsen.ʃəl/",
                            "meaning": "Eng oliy namuna, timsol",
                            "exampleSentence": "It is the quintessential masterpiece of modern literature.",
                            "exampleTranslation": "Bu zamonaviy adabiyotning eng oliy namunasidir."
                        },
                        {
                            "term": "Inextricable",
                            "reading": "/ˌɪn.ɪkˈstrɪk.ə.bəl/",
                            "meaning": "Ajralmas, chambarchas bogʻliq",
                            "exampleSentence": "Language and cultural identity are inextricably intertwined.",
                            "exampleTranslation": "Til va madaniy oʻzlik chambarchas bogʻlangan."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l5-s2",
                "title": "C2 Capstone Practice",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "Final Capstone practice question.",
                    "exercises": [
                        {
                            "id": "en-c2-u4-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "\"Notwithstanding the prevailing orthodoxy, her pioneering thesis _______ established a paradigm shift in quantum mechanics.\"",
                            "options": [
                                "unequivocally",
                                "doubtfully",
                                "scarcely",
                                "partially"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Unequivocally established a paradigm shift."
                        },
                        {
                            "id": "en-c2-u4-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Choose the correct word to complete the sentence: \"It is the quintessential masterpiece of modern literature.\"",
                            "options": [
                                "reluctance",
                                "delay",
                                "Quintessential",
                                "doubt"
                            ],
                            "correctAnswer": 2,
                            "explanation": "\"Quintessential\" (Eng oliy namuna, timsol) fits the context appropriately."
                        }
                    ]
                }
            },
            {
                "id": "en-c2-u4-l5-s3",
                "title": "C2 Level Mastery Certification Exam",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "C2 darajasidagi yakuniy professional sertifikatlash savollari.",
                    "passingScorePercentage": 85,
                    "questions": [
                        {
                            "id": "en-c2-u4-l5-q1",
                            "question": "Select the sentence that exhibits perfect C2 academic inversion and vocabulary:",
                            "options": [
                                "Under no circumstances should the integrity of empirical data be compromised.",
                                "In no circumstance data can be compromised.",
                                "Under no circumstances compromised should be data.",
                                "Under no circumstances the data should be compromised."
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Under no circumstances should ... be compromised."
                        },
                        {
                            "id": "en-c2-u4-l5-q2",
                            "question": "What is the meaning of \"paradigm shift\"?",
                            "options": [
                                "A shift in work hours",
                                "A translation of text",
                                "A small change in plan",
                                "A fundamental change in the basic concepts and experimental practices of a scientific discipline"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Fundamental change in basic concepts."
                        },
                        {
                            "id": "en-c2-u4-l5-q3",
                            "question": "Which term describes an argument that repeats the same idea in different words without adding proof?",
                            "options": [
                                "Oxymoron",
                                "Paradox",
                                "Tautology",
                                "Metaphor"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Tautology (takroriy mantiqsizlik)."
                        },
                        {
                            "id": "en-c2-u4-l5-q4",
                            "question": "Congratulations! You have completed the C2 English Curriculum with highest honors.",
                            "options": [
                                "Review Lessons",
                                "Accept Certificate",
                                "Exit",
                                "Restart Course"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Certificate awarded."
                        }
                    ]
                }
            }
        ]
    }
];
