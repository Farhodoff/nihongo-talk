import { Lesson } from '../../types/lesson';

export const ENGLISH_C2_LESSONS: Lesson[] = [
    // Unit 1: Master-level Stylistic Variation & Pragmatics
    {
        id: 'en-c2-u1-l1',
        courseId: 'english-c2',
        unitId: 'en-c2-u1',
        unitTitle: 'Unit 1: Master Stylistics & Pragmatics',
        language: 'en',
        level: 'C2',
        lessonNumber: 1,
        title: 'Master-Level Stylistic Variation & Register Switching',
        description: 'Rasmiy ilmiy tildan tortib diplomatik pinhona kinoyagacha bo\'lgan registrlar orasida bexato erkin harakatlanish.',
        estimatedDurationMinutes: 18,
        icon: '👑',
        steps: [
            {
                id: 'en-c2-u1-l1-s1',
                title: 'Registrlar Almashinuvi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Register Flexibility & Pragmatic Competence',
                    explanation: 'C2 darajasida til egallovchi har qanday ijtimoiy va intellektual kontekstga to\'liq moslashadi: Formal Academic, High-Stakes Legal, Literary, Diplomatic Euphemism va Nuanced Irony.',
                    keyPoints: [
                        'Colloquial: "He got mad and left."',
                        'Standard C1: "He became agitated and departed abruptly."',
                        'Mastery C2: "Succumbing to indignation, he vacated the premises with conspicuous disdain."'
                    ],
                    vocabulary: [
                        { term: 'Indignation', reading: '/ˌɪn.dɪɡˈneɪ.ʃən/', meaning: 'Adolatsizlikdan kelib chiqqan g\'azab', exampleSentence: 'The verdict sparked widespread indignation.', exampleTranslation: 'Hukm keng ko\'lamli g\'azabga sabab bo\'ldi.' },
                        { term: 'Conspicuous', reading: '/kənˈspɪk.ju.əs/', meaning: 'Ko\'zga yaqqol tashlanadigan', exampleSentence: 'His absence was conspicuous.', exampleTranslation: 'Uning yo\'qligi yaqqol ko\'zga tashlandi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l1-s2',
                title: 'Registr Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Eng yuksak adabiy-diplomatik registrni tanlang.',
                    exercises: [
                        { id: 'en-c2-u1-l1-e1', type: 'multiple-choice', prompt: 'Choose the most refined C2 version of "We must accept the truth even if it hurts":', options: ['We must reconcile ourselves to unpalatable realities, however discomfiting they may prove.', 'We gotta take the truth no matter what.', 'Truth hurts but we must take it.', 'Accept the bad truth.'], correctAnswer: 0, explanation: 'We must reconcile ourselves to unpalatable realities...' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u1-l1-q1', question: 'What does "pragmatic competence" mean at C2 level?', options: ['The ability to understand and produce subtle, culturally nuanced and context-appropriate language intuitively', 'Memorizing grammar rules for a test', 'Speaking as quickly as possible', 'Knowing how to translate into Latin'], correctAnswerIndex: 0, explanation: 'Context-appropriate nuanced language intuitively.' },
                        { id: 'en-c2-u1-l1-q2', question: '"Unpalatable realities" means truths that are:', options: ['Difficult or unpleasant to accept', 'Very delicious', 'Completely fictional', 'Written on a menu'], correctAnswerIndex: 0, explanation: 'Difficult or unpleasant to accept.' },
                        { id: 'en-c2-u1-l1-q3', question: 'Which word means "subtle, understated irony or indirect polite critique"?', options: ['Understatement / Litotes', 'Shouting', 'Exaggeration', 'Slang'], correctAnswerIndex: 0, explanation: 'Litotes / Understatement.' },
                        { id: 'en-c2-u1-l1-q4', question: 'Choose the highest register synonym for "temporary":', options: ['Ephemeral / Transitory / Fugacious', 'Short', 'Quick', 'Fast'], correctAnswerIndex: 0, explanation: 'Ephemeral / Transitory / Fugacious.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u1-l2',
        courseId: 'english-c2',
        unitId: 'en-c2-u1',
        unitTitle: 'Unit 1: Master Stylistics & Pragmatics',
        language: 'en',
        level: 'C2',
        lessonNumber: 2,
        title: 'Archaic Nuances & Rare Inverted Syntax',
        description: 'Noyob ingliz tili tuzilmalari: Be that as it may, Come what may, Suffice it to say, So be it.',
        estimatedDurationMinutes: 16,
        icon: '📜',
        steps: [
            {
                id: 'en-c2-u1-l2-s1',
                title: 'Arxaik va Oliy Konstruktsiyalar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Idiomatic Formulaic Subjunctives',
                    explanation: 'Suffice it to say (shuni aytish kifoyaki), Come what may (nima bo\'lsa ham / har qanday holatda), Be that as it may (har holda / shunday bo\'lsa ham), Far be it from me to disagree (e\'tiroz bildirishdan yiroqman).',
                    vocabulary: [
                        { term: 'Suffice', reading: '/səˈfaɪs/', meaning: 'Yetarli / Kifoya qilmoq', exampleSentence: 'One example will suffice to illustrate the point.', exampleTranslation: 'Fikrni tushuntirish uchun bitta misol kifoya qiladi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri formulani tanlang.',
                    exercises: [
                        { id: 'en-c2-u1-l2-e1', type: 'multiple-choice', prompt: '"_______ it to say, the results exceeded even our most sanguine forecasts."', options: ['Suffice', 'Suffices', 'Sufficing', 'Sufficed'], correctAnswer: 0, explanation: 'Suffice it to say (formulaic subjunctive).' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u1-l2-q1', question: '"Come what may, we shall persevere." What does "Come what may" mean?', options: ['Whatever happens / Regardless of any obstacles', 'When someone arrives', 'In the coming future only', 'If it stops raining'], correctAnswerIndex: 0, explanation: 'Whatever happens.' },
                        { id: 'en-c2-u1-l2-q2', question: '"Sanguine forecasts" means projections that are:', options: ['Optimistic and positive', 'Gloomy and dark', 'Bloody', 'Mathematical'], correctAnswerIndex: 0, explanation: 'Sanguine — Optimistic/Positive.' },
                        { id: 'en-c2-u1-l2-q3', question: 'Far be it from me _______ dictate institutional policy.', options: ['to', 'for', 'from', 'that'], correctAnswerIndex: 0, explanation: 'Far be it from me to...' },
                        { id: 'en-c2-u1-l2-q4', question: 'Be that as it _______, we must nevertheless enforce contractual compliance.', options: ['may', 'can', 'might', 'will'], correctAnswerIndex: 0, explanation: 'Be that as it may.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u1-l3',
        courseId: 'english-c2',
        unitId: 'en-c2-u1',
        unitTitle: 'Unit 1: Master Stylistics & Pragmatics',
        language: 'en',
        level: 'C2',
        lessonNumber: 3,
        title: 'Subtle Pragmatic Norms: Understatement & Irony',
        description: 'Britaniya va xalqaro oliy muloqotdagi pinhona ma\'nolar (e.g. "I have a slight reservation" = "I strongly object").',
        estimatedDurationMinutes: 16,
        icon: '🎭',
        steps: [
            {
                id: 'en-c2-u1-l3-s1',
                title: 'Pragmatik Subtext',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Understatement in Professional English',
                    explanation: 'Ingliz tilida to\'g\'ridan-to\'g\'ri qo\'pol gapirish o\'rniga nozik tagma\'noli iboralar qo\'llaniladi: "With the greatest respect..." = "You are entirely mistaken". "That is a brave proposal" = "That is dangerously reckless". "A minor setback" = "A total catastrophe".',
                    vocabulary: [
                        { term: 'Litotes', reading: '/ˈlaɪ.tə.tiːz/', meaning: 'Inkor orqali tasdiqlovchi kinoyaviy usul (e.g. not bad = very good)', exampleSentence: 'Calling it "no small feat" is classic litotes.', exampleTranslation: '"Kichik yutuq emas" deyish klassik litotesdir.' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Tagma\'noni toping.',
                    exercises: [
                        { id: 'en-c2-u1-l3-e1', type: 'multiple-choice', prompt: 'A British diplomat says: "With all due respect, perhaps that premise requires further contemplation." What do they really mean?', options: ['They strongly disagree with the premise and believe it is flawed', 'They love the idea completely', 'They don\'t understand English', 'They want to go to sleep'], correctAnswer: 0, explanation: 'Polite diplomatic disagreement.' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u1-l3-q1', question: 'When a senior manager remarks "That is certainly an interesting perspective", they often politely imply:', options: ['The idea is questionable, unconventional or problematic', 'The idea won a Nobel Prize', 'They want to copy it immediately', 'They are buying the idea'], correctAnswerIndex: 0, explanation: 'Polite skepticism.' },
                        { id: 'en-c2-u1-l3-q2', question: '"It is no trivial matter" is an example of which rhetorical device?', options: ['Litotes / Understatement', 'Hyperbole', 'Alliteration', 'Slang'], correctAnswerIndex: 0, explanation: 'Litotes.' },
                        { id: 'en-c2-u1-l3-q3', question: 'If someone says "I hear what you say", British pragmatic convention often implies:', options: ['I acknowledge your statement, but I disagree and will not alter my course', 'I have perfect ears', 'You speak too loudly', 'I agree with 100% of it'], correctAnswerIndex: 0, explanation: 'I disagree and will not change.' },
                        { id: 'en-c2-u1-l3-q4', question: 'Why is pragmatic competence critical at C2 proficiency?', options: ['To avoid catastrophic misunderstandings in high-stakes international communication', 'To pass simple grammar tests', 'To win spelling bees', 'To read road signs'], correctAnswerIndex: 0, explanation: 'Avoid misunderstandings in high-stakes settings.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u1-l4',
        courseId: 'english-c2',
        unitId: 'en-c2-u1',
        unitTitle: 'Unit 1: Master Stylistics & Pragmatics',
        language: 'en',
        level: 'C2',
        lessonNumber: 4,
        title: 'Literary Text Analysis & Decoding Subtext',
        description: 'Klassik va zamonaviy adabiy matnlardagi ramzlar, metaforalar va falsafiy qatlamlarni tahlil qilish.',
        estimatedDurationMinutes: 18,
        icon: '📚',
        steps: [
            {
                id: 'en-c2-u1-l4-s1',
                title: 'Adabiy Tahlil',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Allegory, Metaphor & Atmospheric Prose',
                    explanation: 'Matnning adabiy qatlamlarini ochish: Motif, allegory, pathetic fallacy (tabiat holatining qahramon ruhiyatiga mos kelishi), stream of consciousness.',
                    vocabulary: [
                        { term: 'Allegory', reading: '/ˈæl.ə.ɡər.i/', meaning: 'Majoz / Ramziy hikoya', exampleSentence: 'Animal Farm is an allegory of political totalitarianism.', exampleTranslation: 'Animal Farm siyosiy totalitarizmning majoziy timsolidir.' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Adabiy san\'at turini aniqlang.',
                    exercises: [
                        { id: 'en-c2-u1-l4-e1', type: 'multiple-choice', prompt: '"The weeping skies mirrored his profound grief." Which literary device is present?', options: ['Pathetic fallacy / Personification', 'Hyperbole only', 'Technical jargon', 'Nominalization'], correctAnswer: 0, explanation: 'Pathetic fallacy (tabiat inson his-tuyg\'usini aks ettirishi).' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u1-l4-q1', question: 'What is an "allegory"?', options: ['A narrative that can be interpreted to reveal a hidden symbolic meaning, typically moral or political', 'A short comic book', 'A dictionary definition', 'A mathematical formula'], correctAnswerIndex: 0, explanation: 'Narrative with hidden symbolic meaning.' },
                        { id: 'en-c2-u1-l4-q2', question: 'An "unreliable narrator" in literature is a character who:', options: ['Tells the story with compromised credibility or distorted perception', 'Always tells 100% scientific truth', 'Never speaks', 'Is a robot'], correctAnswerIndex: 0, explanation: 'Compromised credibility or distorted perception.' },
                        { id: 'en-c2-u1-l4-q3', question: '"Juxtaposing light and dark imagery to reflect the protagonist\'s moral ambiguity" demonstrates mastery of:', options: ['Literary stylistic analysis', 'Basic vocabulary', 'Spelling accuracy', 'Typing speed'], correctAnswerIndex: 0, explanation: 'Literary stylistic analysis.' },
                        { id: 'en-c2-u1-l4-q4', question: 'Pathetic fallacy specifically refers to attributing human emotions to:', options: ['Nature and inanimate surroundings', 'Other animals only', 'Vehicles', 'Computers'], correctAnswerIndex: 0, explanation: 'Nature and inanimate surroundings.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u1-l5',
        courseId: 'english-c2',
        unitId: 'en-c2-u1',
        unitTitle: 'Unit 1: Master Stylistics & Pragmatics',
        language: 'en',
        level: 'C2',
        lessonNumber: 5,
        title: 'C2 Reading: Philosophical Treatises & Dialectical Logic',
        description: 'Kant, Nitsshe va zamonaviy faylasuflarning murakkab tahliliy traktatlarini erkin o\'qib tushunish.',
        estimatedDurationMinutes: 18,
        icon: '🏛️',
        steps: [
            {
                id: 'en-c2-u1-l5-s1',
                title: 'Falsafiy Traktat',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Kantian Deontology vs Utilitarianism',
                    explanation: 'Falsafiy axloq nazariyalari tahlili.',
                    keyPoints: [
                        'Deontology posits that the moral worth of an action inheres intrinsically within the act itself, guided by universal categorical imperatives.',
                        'Conversely, consequentialist frameworks assess rectitude solely via the calculus of aggregate utility.',
                        'The tension between inviolable rights and utilitarian optimization forms the crucible of modern jurisprudence.'
                    ],
                    vocabulary: [
                        { term: 'Inhere', reading: '/ɪnˈhɪər/', meaning: 'Ichki mohiyatiga xos bo\'lmoq / Singib ketgan bo\'lmoq', exampleSentence: 'Dignity inheres in every human being.', exampleTranslation: 'Qadr-qimmat har bir inson mohiyatiga xosdir.' },
                        { term: 'Rectitude', reading: '/ˈrek.tɪ.tʃuːd/', meaning: 'Axloqiy to\'g\'rilik / Halollik', exampleSentence: 'He acted with unquestioned moral rectitude.', exampleTranslation: 'U so\'zsiz axloqiy to\'g\'rilik bilan harakat qildi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Falsafiy kontseptsiyani aniqlang.',
                    exercises: [
                        { id: 'en-c2-u1-l5-e1', type: 'multiple-choice', prompt: 'According to deontological philosophy, where does the moral worth of an action reside?', options: ['Intrinsically within the act itself, irrespective of consequences', 'Solely in the pleasure it produces for the majority', 'In monetary gain', 'In political power'], correctAnswer: 0, explanation: 'Intrinsically within the act itself.' }
                    ]
                }
            },
            {
                id: 'en-c2-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u1-l5-q1', question: 'What is a "categorical imperative" in Kantian ethics?', options: ['An unconditional moral obligation that is binding in all circumstances', 'A suggestion that can be ignored if inconvenient', 'A temporary law in wartime', 'A mathematical theorem'], correctAnswerIndex: 0, explanation: 'Unconditional moral obligation.' },
                        { id: 'en-c2-u1-l5-q2', question: '"Crucible" metaphorically signifies:', options: ['A severe test or situation in which different elements interact to produce something new', 'A cold winter day', 'A book cover', 'An easy path'], correctAnswerIndex: 0, explanation: 'Severe test/transformative situation.' },
                        { id: 'en-c2-u1-l5-q3', question: 'Utilitarianism evaluates actions primarily based on:', options: ['The maximization of overall happiness and well-being (utility)', 'Ancient ancestral customs', 'Religious dogmas only', 'Random chance'], correctAnswerIndex: 0, explanation: 'Maximization of aggregate utility.' },
                        { id: 'en-c2-u1-l5-q4', question: '"Inviolable rights" means rights that:', options: ['Must never be infringed, compromised, or dishonored', 'Can be bought and sold', 'Expire every year', 'Only apply on holidays'], correctAnswerIndex: 0, explanation: 'Must never be infringed.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Obscure & High-Register Lexicon
    {
        id: 'en-c2-u2-l1',
        courseId: 'english-c2',
        unitId: 'en-c2-u2',
        unitTitle: 'Unit 2: Erudition & Nuanced Lexicon',
        language: 'en',
        level: 'C2',
        lessonNumber: 1,
        title: 'Rare Erudite Vocabulary: Sesquipedalian, Equivocal, Pernicious',
        description: 'Kamdan-kam uchraydigan, yuksak intellektual adabiy leksika.',
        estimatedDurationMinutes: 16,
        icon: '💎',
        steps: [
            {
                id: 'en-c2-u2-l1-s1',
                title: 'Erudit Leksikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Erudite Lexicon for Native-Level Mastery',
                    explanation: 'Pernicious (o\'ta xavfli / sezdirmasdan halokatli ta\'sir ko\'rsatuvchi), Sesquipedalian (juda uzun va murakkab so\'zlardan foydalanuvchi), Obfuscate (atayin qorong\'ilashtirmoq / chalkashtirmoq), Anachronistic (davriga to\'g\'ri kelmaydigan / eskirgan).',
                    vocabulary: [
                        { term: 'Pernicious', reading: '/pəˈnɪʃ.əs/', meaning: 'Xavfli / Asta-sekin halokat keltiruvchi', exampleSentence: 'Misinformation has a pernicious effect on society.', exampleTranslation: 'Dezinformatsiya jamiyatga asta-sekin halokatli ta\'sir ko\'rsatadi.' },
                        { term: 'Obfuscate', reading: '/ˈɒb.fʌs.keɪt/', meaning: 'Atayin tushunarsiz qilmoq / Chalkashtirmoq', exampleSentence: 'Lawyers often obfuscate plain facts.', exampleTranslation: 'Advokatlar ko\'pincha oddiy faktlarni atayin chalkashtiradilar.' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri erudit so\'zni tanlang.',
                    exercises: [
                        { id: 'en-c2-u2-l1-e1', type: 'multiple-choice', prompt: '"The author\'s style was excessively _______, full of obscure multisyllabic terms."', options: ['sesquipedalian', 'pernicious', 'equivocal', 'anachronistic'], correctAnswer: 0, explanation: 'Sesquipedalian (uzun va murakkab so\'zlar ishlatuvchi).' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u2-l1-q1', question: '"Anachronistic" refers to something that is:', options: ['Chronologically out of place or belonging to an earlier era', 'Extremely modern and high-tech', 'Made of solid gold', 'Completely illegal'], correctAnswerIndex: 0, explanation: 'Chronologically out of place.' },
                        { id: 'en-c2-u2-l1-q2', question: 'To "obfuscate" the truth means to:', options: ['Deliberately make it obscure, unclear or confusing', 'Shine a bright light on it', 'Translate it into English', 'Celebrate it loudly'], correctAnswerIndex: 0, explanation: 'Deliberately make obscure/confusing.' },
                        { id: 'en-c2-u2-l1-q3', question: 'A "pernicious influence" is:', options: ['Subtly harmful and destructive over time', 'Very funny and entertaining', 'Completely harmless', 'Short-lived'], correctAnswerIndex: 0, explanation: 'Subtly harmful and destructive.' },
                        { id: 'en-c2-u2-l1-q4', question: 'Choose the most erudite word for "unavoidable":', options: ['Ineluctable / Inescapable', 'Avoidless', 'Un-stop', 'Quick'], correctAnswerIndex: 0, explanation: 'Ineluctable.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u2-l2',
        courseId: 'english-c2',
        unitId: 'en-c2-u2',
        unitTitle: 'Unit 2: Erudition & Nuanced Lexicon',
        language: 'en',
        level: 'C2',
        lessonNumber: 2,
        title: 'Cognitive Metaphors & Conceptual Blendings',
        description: 'Kognitiv tilshunoslik: metaforalarning inson tafakkurini boshqarish qudrati.',
        estimatedDurationMinutes: 16,
        icon: '🧠',
        steps: [
            {
                id: 'en-c2-u2-l2-s1',
                title: 'Kognitiv Metafora',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Conceptual Metaphor Theory (Lakoff & Johnson)',
                    explanation: 'Metafora shunchaki adabiy bezak emas, balki inson fikrlash strukturasidir: "Argument is War" (He attacked my point, I defended my claim, She shot down his argument), "Time is Money" (Spend time, Save time, Invest hours).',
                    vocabulary: [
                        { term: 'Inherent', reading: '/ɪnˈher.ənt/', meaning: 'Tug\'ma / Ajralmas xususiyat', exampleSentence: 'Risk is inherent in innovation.', exampleTranslation: 'Xatar innovatsiyaning ajralmas qismidir.' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Asosiy metaforik modelni aniqlang.',
                    exercises: [
                        { id: 'en-c2-u2-l2-e1', type: 'multiple-choice', prompt: '"He demolished my thesis and struck down every counter-argument." Which conceptual metaphor is at work?', options: ['Argument is War / Combat', 'Time is Money', 'Ideas are Food', 'Love is a Journey'], correctAnswer: 0, explanation: 'Argument is War.' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u2-l2-q1', question: 'In cognitive linguistics, conceptual metaphors function as:', options: ['Fundamental cognitive mapping mechanisms that shape how humans perceive reality', 'Decorations for poetry only', 'Spelling rules', 'Errors made by non-native speakers'], correctAnswerIndex: 0, explanation: 'Cognitive mapping mechanisms shaping perception.' },
                        { id: 'en-c2-u2-l2-q2', question: '"We have hit a crossroads in our relationship and must choose which path to take." Conceptual metaphor:', options: ['Love / Life is a Journey', 'Time is Money', 'Knowledge is Light', 'Argument is Building'], correctAnswerIndex: 0, explanation: 'Love/Life is a Journey.' },
                        { id: 'en-c2-u2-l2-q3', question: 'How does mastering conceptual metaphors assist C2 English proficiency?', options: ['It enables effortless production and comprehension of native idiomatic nuance', 'It eliminates the need for grammar', 'It lets you speak without vocabulary', 'It reduces speaking time'], correctAnswerIndex: 0, explanation: 'Enables effortless idiomatic nuance.' },
                        { id: 'en-c2-u2-l2-q4', question: '"That theory is half-baked; let me chew on it for a while." Conceptual metaphor:', options: ['Ideas are Food / Nourishment', 'War is Peace', 'Money is Time', 'Mind is Computer'], correctAnswerIndex: 0, explanation: 'Ideas are Food.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u2-l3',
        courseId: 'english-c2',
        unitId: 'en-c2-u2',
        unitTitle: 'Unit 2: Erudition & Nuanced Lexicon',
        language: 'en',
        level: 'C2',
        lessonNumber: 3,
        title: 'Geopolitical Grand Strategy & Sovereign Macroeconomics',
        description: 'Xalqaro moliya arxitekturasi, Bretton-Vuds tizimi va global gegemoniya terminologiyasi.',
        estimatedDurationMinutes: 16,
        icon: '🌐',
        steps: [
            {
                id: 'en-c2-u2-l3-s1',
                title: 'Global Strategiya Leksikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Macroeconomics & Grand Strategy',
                    explanation: 'Hegemony (gegemoniya / yetakchilik), Fiat currency (qog\'oz pul tizimi), Quantitative easing (miqdoriy yumshatish), Sovereign debt restructuring (davlat qarzini qayta tuzilishi).',
                    vocabulary: [
                        { term: 'Hegemony', reading: '/hɪˈdʒem.ə.ni/', meaning: 'Gegemoniya / Siyosiy ustunlik', exampleSentence: 'Economic hegemony shaped the global order.', exampleTranslation: 'Iqtisodiy gegemoniya global tartibotni shakllantirdi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri atamani tanlang.',
                    exercises: [
                        { id: 'en-c2-u2-l3-e1', type: 'multiple-choice', prompt: '"Central banks implemented _______ easing to inject liquidity into stagnating markets."', options: ['quantitative', 'qualitative', 'computational', 'biological'], correctAnswer: 0, explanation: 'Quantitative easing (QE).' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u2-l3-q1', question: 'What is a "fiat currency"?', options: ['Money that is not backed by a physical commodity like gold, but by government decree and trust', 'Gold coins from Roman times', 'Cryptocurrency only', 'Foreign monopoly bills'], correctAnswerIndex: 0, explanation: 'Money backed by government decree/trust.' },
                        { id: 'en-c2-u2-l3-q2', question: '"Sovereign default" occurs when a nation:', options: ['Fails to meet its debt obligations to creditors', 'Elects a new president', 'Builds a new capital', 'Changes its flag'], correctAnswerIndex: 0, explanation: 'Fails to meet debt obligations.' },
                        { id: 'en-c2-u2-l3-q3', question: 'A "zero-sum game" means a situation in which:', options: ['One party\'s gain is exactly balanced by the other party\'s corresponding loss', 'Everyone wins equally', 'All scores are erased', 'No one participates'], correctAnswerIndex: 0, explanation: 'One party\'s gain equals another\'s loss.' },
                        { id: 'en-c2-u2-l3-q4', question: 'What does "multipolarity" denote in 21st-century geopolitics?', options: ['A global distribution of power among several influential nation-states rather than a single hegemon', 'North and South poles only', 'Nuclear weapons proliferation', 'Free trade across oceans'], correctAnswerIndex: 0, explanation: 'Power distributed among several influential states.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u2-l4',
        courseId: 'english-c2',
        unitId: 'en-c2-u2',
        unitTitle: 'Unit 2: Erudition & Nuanced Lexicon',
        language: 'en',
        level: 'C2',
        lessonNumber: 4,
        title: 'High-Level Broadcast & Academic Lecture Listening: Quantum Decoherence',
        description: 'Kvant fizikasi va dekoherentsiya bo\'yicha Oksford ma\'ruzasini to\'liq tezlikda tinglab tushunish.',
        estimatedDurationMinutes: 18,
        icon: '⚛️',
        steps: [
            {
                id: 'en-c2-u2-l4-s1',
                title: 'Kvant Ma\'ruzasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Quantum Decoherence and Superposition',
                    explanation: 'Kvant holatlari va makroskopik olam o\'rtasidagi o\'tish tahlili.',
                    keyPoints: [
                        'Quantum superposition allows subatomic particles to inhabit probabilistic states simultaneously.',
                        'Decoherence describes the mechanism whereby environmental interaction irreversibly entangles a quantum system, rendering it classically deterministic.',
                        'Preserving coherence remains the paramount engineering challenge in scalable quantum computing architectures.'
                    ],
                    vocabulary: [
                        { term: 'Superposition', reading: '/ˌsuː.pə.pəˈzɪʃ.ən/', meaning: 'Kvant holatlari superpozitsiyasi', exampleSentence: 'Qubits exploit quantum superposition.', exampleTranslation: 'Kubitlar kvant superpozitsiyasidan foydalanadi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Ilmiy mohiyatni aniqlang.',
                    exercises: [
                        { id: 'en-c2-u2-l4-e1', type: 'multiple-choice', prompt: 'What causes quantum decoherence according to the lecture?', options: ['Environmental interaction and entanglement with ambient particles', 'Keeping particles completely frozen in vacuum', 'Computer programming bugs', 'Lack of electricity'], correctAnswer: 0, explanation: 'Environmental interaction.' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u2-l4-q1', question: 'What is the primary obstacle to building large-scale quantum computers?', options: ['Preventing quantum decoherence and maintaining fidelity', 'Buying computer screens', 'Connecting Wi-Fi', 'Writing software in HTML'], correctAnswerIndex: 0, explanation: 'Preventing decoherence and maintaining fidelity.' },
                        { id: 'en-c2-u2-l4-q2', question: '"Deterministic" systems are those in which:', options: ['Future states are completely dictated by initial conditions with no randomness', 'Everything is totally unpredictable', 'Magic is involved', 'Nothing happens'], correctAnswerIndex: 0, explanation: 'Future states dictated by initial conditions.' },
                        { id: 'en-c2-u2-l4-q3', question: 'A qubit differs from a classical bit because it can represent:', options: ['Both 0 and 1 simultaneously via superposition', 'Only zero', 'Only one', 'No information'], correctAnswerIndex: 0, explanation: 'Both 0 and 1 via superposition.' },
                        { id: 'en-c2-u2-l4-q4', question: 'At C2 level, what listening capacity is expected on complex technical lectures?', options: ['Comprehending rapid native speech, technical vocabulary and underlying conceptual synthesis effortlessly', 'Only catching 2 words per minute', 'Reading subtitles only', 'Asking for audio to be repeated 5 times'], correctAnswerIndex: 0, explanation: 'Effortless comprehension of rapid technical speech.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u2-l5',
        courseId: 'english-c2',
        unitId: 'en-c2-u2',
        unitTitle: 'Unit 2: Erudition & Nuanced Lexicon',
        language: 'en',
        level: 'C2',
        lessonNumber: 5,
        title: 'C2 Academic Essay Evaluation: The Pinnacle of Critical Feedback',
        description: 'Magistratura va doktorantura darajasidagi ilmiy maqolalarga taqriz va tahrir kiritish.',
        estimatedDurationMinutes: 18,
        icon: '📝',
        steps: [
            {
                id: 'en-c2-u2-l5-s1',
                title: 'Doktorlik Darajasidagi Tahrir',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Doctoral Peer Review Framework',
                    explanation: 'Tahlil mezonlari: Epistemological rigor, methodological validity, falsifiability of hypotheses, and rhetorical elegance.',
                    keyPoints: [
                        'Critiquing circular reasoning (begging the question)',
                        'Elevating academic tone without compromising communicative clarity'
                    ]
                }
            },
            {
                id: 'en-c2-u2-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Eng yaxshi tahririy tuzatishni tanlang.',
                    exercises: [
                        { id: 'en-c2-u2-l5-e1', type: 'multiple-choice', prompt: 'Draft sentence: "The study proves that human nature is inherently selfish because people always act in selfish ways." How should this be critiqued?', options: ['The assertion commits the logical fallacy of circular reasoning (petitio principii) and lacks empirical counter-weight.', 'It is completely fine.', 'It should have more exclamation marks.', 'The font size is wrong.'], correctAnswer: 0, explanation: 'Identifies circular reasoning (petitio principii).' }
                    ]
                }
            },
            {
                id: 'en-c2-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u2-l5-q1', question: 'What does "falsifiability" mean in Karl Popper\'s philosophy of science?', options: ['The capacity for a hypothesis or theory to be inherently proven false through empirical observation', 'Making fake documents', 'Cheating on an exam', 'Writing fiction novels'], correctAnswerIndex: 0, explanation: 'Capacity to be proven false empirically.' },
                        { id: 'en-c2-u2-l5-q2', question: '"Petitio principii" is the classical term for:', options: ['Begging the question / Circular argument', 'A type of microscope', 'A legal contract', 'An award ceremony'], correctAnswerIndex: 0, explanation: 'Circular reasoning / Begging the question.' },
                        { id: 'en-c2-u2-l5-q3', question: 'What is the hallmark of exemplary C2 academic prose?', options: ['Crystal-clear, precise reasoning paired with sophisticated syntactic variety and seamless flow', 'Convoluted sentences designed to confuse the reader', 'Using words from 1500 AD that no one understands', 'Writing without any paragraphs'], correctAnswerIndex: 0, explanation: 'Clear precise reasoning with syntactic variety.' },
                        { id: 'en-c2-u2-l5-q4', question: 'To "substantiate a hypothesis" means to:', options: ['Provide verifiable empirical or logical evidence in its support', 'Delete it from the paper', 'Translate it into French', 'Disregard it completely'], correctAnswerIndex: 0, explanation: 'Provide verifiable evidence in support.' }
                    ]
                }
            }
        ]
    },

    // Unit 3: IELTS Band 8.5–9.0 Flawless Writing Synthesis
    {
        id: 'en-c2-u3-l1',
        courseId: 'english-c2',
        unitId: 'en-c2-u3',
        unitTitle: 'Unit 3: IELTS Band 8.5-9.0 Master Writing',
        language: 'en',
        level: 'C2',
        lessonNumber: 1,
        title: 'IELTS Band 9.0 Writing Task 1: Flawless Synthesis & Elegant Overview',
        description: 'Band 9.0 mezonlari: tabiiy tahliliy ohang, ko\'p o\'lchovli ma\'lumotlar integratsiyasi va nol grammatik xatolik.',
        estimatedDurationMinutes: 18,
        icon: '📊',
        steps: [
            {
                id: 'en-c2-u3-l1-s1',
                title: 'Band 9.0 Task 1 Mezonlari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Band 9.0 Descriptor Requirements for Task 1',
                    explanation: 'Task Achievement: Fully satisfies all requirements with an insightful, comprehensive overview. Coherence: Seamless progression with natural paragraphing. Lexical: Wide range of vocabulary used with full flexibility and precise collocation. Grammar: Wide range of structures with full flexibility and accuracy; rare minor errors occur only as \'slips\'.',
                    keyPoints: [
                        'Avoid formulaic clichés like "Looking at the chart we can see that..."',
                        'Write authoritative, high-density analytical sentences.'
                    ]
                }
            },
            {
                id: 'en-c2-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Band 9.0 darajasidagi Overview jumlasini tanlang.',
                    exercises: [
                        { id: 'en-c2-u3-l1-e1', type: 'multiple-choice', prompt: 'Which Overview represents genuine Band 9.0 caliber?', options: ['Overall, while global fossil fuel dependency underwent a precipitous decline over the 30-year timeframe, renewable energy adoption experienced an exponential surge, outstripping conventional sources by the final period.', 'Overall the line goes up and the bar goes down in the chart.', 'Looking at the chart, there are many numbers that change.', 'In summary, energy is important.'], correctAnswer: 0, explanation: 'Insightful, cohesive, and lexically masterful overview.' }
                    ]
                }
            },
            {
                id: 'en-c2-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u3-l1-q1', question: 'How does Band 9.0 differ from Band 7.0 in Task 1 Lexical Resource?', options: ['Band 9.0 uses vocabulary with full flexibility, precision and natural sophisticated collocation; errors are rare slips only', 'Band 9.0 writes 500 words', 'Band 9.0 uses colors', 'Band 9.0 uses rhyme'], correctAnswerIndex: 0, explanation: 'Full flexibility, precision, and natural collocations.' },
                        { id: 'en-c2-u3-l1-q2', question: '"Outstripping conventional sources" means:', options: ['Surpassing and exceeding them significantly', 'Destroying them', 'Becoming smaller than them', 'Stopping all generation'], correctAnswerIndex: 0, explanation: 'Surpassing and exceeding.' },
                        { id: 'en-c2-u3-l1-q3', question: 'What is a "slip" in IELTS assessment terminology?', options: ['A rare minor typo made under pressure that does not reflect a lack of linguistic knowledge', 'A severe misunderstanding of grammar rules', 'Writing the wrong name on the exam paper', 'Falling down'], correctAnswerIndex: 0, explanation: 'Rare minor typo under pressure.' },
                        { id: 'en-c2-u3-l1-q4', question: 'Is it necessary to include every single minor data point in Band 9.0 Task 1?', options: ['No, Band 9.0 selects key features, contrasts them insightfully and synthesizes data rather than producing a raw inventory', 'Yes, every millisecond must be listed', 'Yes, write 10 pages of numbers', 'Leave the body paragraphs blank'], correctAnswerIndex: 0, explanation: 'Selects key features and synthesizes insightfully.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u3-l2',
        courseId: 'english-c2',
        unitId: 'en-c2-u3',
        unitTitle: 'Unit 3: IELTS Band 8.5-9.0 Master Writing',
        language: 'en',
        level: 'C2',
        lessonNumber: 2,
        title: 'IELTS Band 9.0 Writing Task 2: Flawless Dialectical Essay Mastery',
        description: 'Band 9.0 insho: chuqur intellektual dalillar, tabiiy diskurs oqimi va har qanday shablonlikdan holi mukammal insho.',
        estimatedDurationMinutes: 18,
        icon: '✍️',
        steps: [
            {
                id: 'en-c2-u3-l2-s1',
                title: 'Band 9.0 Insho Arxitekturasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'The Band 9.0 Essay Blueprint',
                    explanation: 'Mavzu bo\'yicha chuqur tahlil: Shablon iboralarsiz (e.g. "Since ancient times this is debated" EMAS), darhol masalaning mohiyatiga kirish va dalillarni uzviy mantiq bilan rivojlantirish.',
                    keyPoints: [
                        'Nuanced position maintained throughout the entire text.',
                        'Cohesive devices that flow so naturally they are nearly invisible.'
                    ]
                }
            },
            {
                id: 'en-c2-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Band 9.0 insho kirish qismini tanlang.',
                    exercises: [
                        { id: 'en-c2-u3-l2-e1', type: 'multiple-choice', prompt: 'Which introduction represents genuine Band 9.0 execution for a prompt on urbanization?', options: ['The relentless pace of 21st-century urbanization has reignited intense debate regarding the socio-environmental viability of megacities. While detractors highlight acute infrastructure strain and ecological degradation, this essay contends that well-governed urban density remains humanity\'s most potent engine for sustainable economic innovation.', 'Nowadays urbanization is very important topic. Some like cities and some hate cities. I will discuss both.', 'Cities are big places with buildings.', 'People live in cities since long ago.'], correctAnswer: 0, explanation: 'Flawless academic sophistication and crystal-clear thesis.' }
                    ]
                }
            },
            {
                id: 'en-c2-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u3-l2-q1', question: 'What characterizes Band 9.0 Task Response in IELTS Writing?', options: ['Fully addresses all parts of the task with a fully developed position and well-supported ideas throughout', 'Writes 1000 words in 10 minutes', 'Uses the word "moreover" in every sentence', 'Draws a flowchart in the margin'], correctAnswerIndex: 0, explanation: 'Fully developed position and well-supported ideas.' },
                        { id: 'en-c2-u3-l2-q2', question: 'Why do Band 9.0 essays avoid robotic memorized templates?', options: ['Because examiners instantly penalize artificial boilerplate formulas that disrupt organic coherence', 'Because templates are too short', 'Because templates are written in pencil', 'Because templates are illegal'], correctAnswerIndex: 0, explanation: 'Examiners penalize artificial boilerplate.' },
                        { id: 'en-c2-u3-l2-q3', question: '"Ecological degradation" refers to:', options: ['The deterioration of the environment through depletion of resources and destruction of ecosystems', 'Planting trees in a park', 'Cleaning a river', 'A weather forecast'], correctAnswerIndex: 0, explanation: 'Deterioration of the environment.' },
                        { id: 'en-c2-u3-l2-q4', question: 'In Band 9.0 cohesion, how are paragraphs connected?', options: ['Through subtle thematic progression, conceptual references and natural transitions rather than mechanical linking words', 'By drawing lines between them', 'By numbering them 1, 2, 3, 4', 'By repeating the question title 10 times'], correctAnswerIndex: 0, explanation: 'Subtle thematic progression and natural transitions.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u3-l3',
        courseId: 'english-c2',
        unitId: 'en-c2-u3',
        unitTitle: 'Unit 3: IELTS Band 8.5-9.0 Master Writing',
        language: 'en',
        level: 'C2',
        lessonNumber: 3,
        title: 'Master Academic Dissertation Framing & Defense',
        description: 'Magistrlik va doktorlik dissertatsiyasi metodologiyasi, tadqiqot gipotezasi va himoyasi.',
        estimatedDurationMinutes: 18,
        icon: '🎓',
        steps: [
            {
                id: 'en-c2-u3-l3-s1',
                title: 'Dissertatsiya Strukturasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Defending a Doctoral Thesis',
                    explanation: 'Dissertatsiya doirasida tadqiqot metodologiyasi (Quantitative, Qualitative, Mixed-methods), Triangulation (bir nechta manbalar orqali dalilni tekshirish), Limitations of the study.',
                    vocabulary: [
                        { term: 'Triangulation', reading: '/traɪˌæŋ.ɡjəˈleɪ.ʃən/', meaning: 'Bir nechta metod va manbalar orqali ishonchlilikni tekshirish', exampleSentence: 'Data triangulation validated the conclusions.', exampleTranslation: 'Ma\'lumotlar triangulyatsiyasi xulosalarni tasdiqladi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri metodologik iborani tanlang.',
                    exercises: [
                        { id: 'en-c2-u3-l3-e1', type: 'multiple-choice', prompt: '"To mitigate subjectivity, the researcher utilized methodological _______ across three distinct datasets."', options: ['triangulation', 'obfuscation', 'litotes', 'indignation'], correctAnswer: 0, explanation: 'Methodological triangulation.' }
                    ]
                }
            },
            {
                id: 'en-c2-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u3-l3-q1', question: 'What is the purpose of acknowledging "limitations of the study" in a doctoral dissertation?', options: ['It reflects academic integrity and defines the precise scope and generalizability of findings', 'It proves the author failed', 'It makes the paper shorter', 'It is required by the printer'], correctAnswerIndex: 0, explanation: 'Reflects integrity and defines scope.' },
                        { id: 'en-c2-u3-l3-q2', question: '"Empirical generalizability" refers to:', options: ['The extent to which study findings can be applied to broader populations or contexts', 'Translating into general words', 'A military rank', 'A dictionary index'], correctAnswerIndex: 0, explanation: 'Extent to which findings apply to broader contexts.' },
                        { id: 'en-c2-u3-l3-q3', question: 'A "null hypothesis" assumes that:', options: ['There is no significant statistical relationship or effect between the variables being tested', 'Everything is 100% related', 'The experiment is cancelled', 'The hypothesis was stolen'], correctAnswerIndex: 0, explanation: 'No significant relationship between variables.' },
                        { id: 'en-c2-u3-l3-q4', question: 'In a thesis defense (viva voce), the candidate must:', options: ['Articulate and defend the original intellectual contribution of their research against critical committee examination', 'Read the whole thesis aloud word for word', 'Stay silent and smile', 'Cry for mercy'], correctAnswerIndex: 0, explanation: 'Articulate and defend original intellectual contribution.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u3-l4',
        courseId: 'english-c2',
        unitId: 'en-c2-u3',
        unitTitle: 'Unit 3: IELTS Band 8.5-9.0 Master Writing',
        language: 'en',
        level: 'C2',
        lessonNumber: 4,
        title: 'IELTS Speaking Band 9.0: Effortless Eloquence & Intellectual Spontaneity',
        description: 'Imtihon oluvchi bilan oliy darajadagi tengma-teng intellektual muloqot, mukammal fonetika va idiomatik tabiiylik.',
        estimatedDurationMinutes: 18,
        icon: '🎙️',
        steps: [
            {
                id: 'en-c2-u3-l4-s1',
                title: 'Band 9.0 Speaking Mezonlari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'The Band 9.0 Speaking Profile',
                    explanation: 'Fluency: Speaks fluently with only rare repetition or self-correction; any hesitation is content-related to develop ideas. Lexicon: Uses vocabulary with full flexibility and precision in all topics; uses idiomatic language naturally and accurately. Grammar: Fully flexible and accurate structures. Pronunciation: Effortlessly understood; uses a full range of phonological features precisely.',
                    keyPoints: [
                        'No hesitation searching for words — hesitation is only intellectual pondering.',
                        'Natural tone modulation and effortless humor/irony.'
                    ]
                }
            },
            {
                id: 'en-c2-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Band 9.0 darajasidagi javobni tanlang.',
                    exercises: [
                        { id: 'en-c2-u3-l4-e1', type: 'multiple-choice', prompt: 'Examiner: "Should museums remain free of charge for the public?" Band 9.0 response:', options: ['Unquestionably. Public accessibility to cultural heritage serves as a quintessential cornerstone of an enlightened democracy. Imposing financial barriers inadvertently commodifies knowledge, whereas universally subsidized institutions cultivate cross-generational intellectual curiosity.', 'Yes, free museums are very nice for people.', 'I think money for museums is bad because I have no money.', 'Museums have old paintings and we should see them free.'], correctAnswer: 0, explanation: 'Effortless intellectual eloquence and philosophical depth.' }
                    ]
                }
            },
            {
                id: 'en-c2-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u3-l4-q1', question: 'What distinguishes Band 9.0 Fluency from lower bands in IELTS Speaking?', options: ['Hesitation is exclusively content-related (thinking what to say rather than searching for words or grammar)', 'Speaking so fast the examiner cannot understand', 'Never pausing even to breathe', 'Using simple vocabulary only'], correctAnswerIndex: 0, explanation: 'Hesitation is exclusively content-related.' },
                        { id: 'en-c2-u3-l4-q2', question: '"Commodify knowledge" means:', options: ['Treating knowledge as a commercial commodity to be bought and sold', 'Learning to read', 'Printing school textbooks', 'Going to university'], correctAnswerIndex: 0, explanation: 'Treating knowledge as commercial commodity.' },
                        { id: 'en-c2-u3-l4-q3', question: '"Quintessential cornerstone" is a collocation meaning:', options: ['The most perfect and essential fundamental pillar', 'A broken stone', 'A minor detail', 'A square room'], correctAnswerIndex: 0, explanation: 'Most perfect and essential pillar.' },
                        { id: 'en-c2-u3-l4-q4', question: 'How is humor or mild irony viewed in IELTS Speaking Part 3 at Band 9.0?', options: ['As a sign of supreme pragmatic competence and natural native-level language mastery', 'It is strictly forbidden and results in disqualification', 'It loses grammar points', 'The examiner does not understand it'], correctAnswerIndex: 0, explanation: 'Sign of supreme pragmatic competence.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u3-l5',
        courseId: 'english-c2',
        unitId: 'en-c2-u3',
        unitTitle: 'Unit 3: IELTS Band 8.5-9.0 Master Writing',
        language: 'en',
        level: 'C2',
        lessonNumber: 5,
        title: 'C2 Capstone Grand Mastery Examination & Global Certification',
        description: 'Ingliz tili (CEFR C2 / IELTS 9.0) bo\'yicha to\'liq oliy darajadagi bitiruv imtihoni.',
        estimatedDurationMinutes: 20,
        icon: '👑',
        steps: [
            {
                id: 'en-c2-u3-l5-s1',
                title: 'C2 Grand Mastery Xulosasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'CEFR C2 Mastery (Near-Native Fluency & Intellect)',
                    explanation: 'Siz ingliz tilining eng yuksak cho\'qqisini zabt etdingiz. Sizning bilimingiz xalqaro ilmiy konferentsiyalar, Birlashgan Millatlar Tashkiloti sammitlari, nufuzli nashriyotlar va oliy ta\'lim muassasalarida bexato va mukammal tan olinadi.',
                    keyPoints: [
                        'Flawless command across all 6 skills',
                        'Subtle literary, pragmatic and philosophical competence',
                        'IELTS Band 8.5 - 9.0 certified readiness'
                    ]
                }
            },
            {
                id: 'en-c2-u3-l5-s2',
                title: 'Oliy Bitiruv Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Bitiruv sinovi savoliga javob bering.',
                    exercises: [
                        { id: 'en-c2-u3-l5-e1', type: 'multiple-choice', prompt: '"Far be it from me to cast aspersions on their integrity; _______, the statistical anomalies warrant independent forensic auditing."', options: ['nonetheless', 'furthermore', 'because', 'so as to'], correctAnswer: 0, explanation: 'Nonetheless (shunga qaramay).' }
                    ]
                }
            },
            {
                id: 'en-c2-u3-l5-s3',
                title: 'C2 Yakuniy Sertifikatsiya Imtihoni',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'C2 darajasini to\'liq tasdiqlash uchun imtihon savollariga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u3-l5-q1', question: 'To "cast aspersions on someone\'s integrity" means to:', options: ['Make damaging or derogatory remarks regarding their honesty and reputation', 'Praise them publicly', 'Give them a medal', 'Hire them for a job'], correctAnswerIndex: 0, explanation: 'Make damaging remarks regarding honesty.' },
                        { id: 'en-c2-u3-l5-q2', question: 'Suffice it to say, the epochal discovery has _______ altered our understanding of theoretical physics.', options: ['irrevocably', 'temporary', 'ephemeral', 'doubtfully'], correctAnswerIndex: 0, explanation: 'Irrevocably altered (qaytarib bo\'lmas darajada o\'zgartirdi).' },
                        { id: 'en-c2-u3-l5-q3', question: 'Which CEFR level represents absolute native-equivalent mastery of the English language?', options: ['C2', 'C1', 'B2', 'A1'], correctAnswerIndex: 0, explanation: 'C2 (Mastery).' },
                        { id: 'en-c2-u3-l5-q4', question: 'Which IELTS overall band score corresponds to CEFR C2 proficiency?', options: ['Band 8.5 to 9.0', 'Band 6.0', 'Band 7.0', 'Band 5.5'], correctAnswerIndex: 0, explanation: 'Band 8.5 to 9.0.' }
                    ]
                }
            }
        ]
    },

    // Unit 4: Nuanced Rhetoric, Jurisprudence & Native Discourse (Lessons 16 - 20)
    {
        id: 'en-c2-u4-l1',
        courseId: 'english-c2',
        unitId: 'en-c2-u4',
        unitTitle: 'Unit 4: Rhetoric & Legal Discourse',
        language: 'en',
        level: 'C2',
        lessonNumber: 16,
        title: 'Jurisprudence & Legalistic Terminology',
        description: 'Huquqiy va institutsional til: "Statutory", "Jurisdiction", "Inalienable", "Subpoena".',
        estimatedDurationMinutes: 18,
        icon: '⚖️',
        steps: [
            {
                id: 'en-c2-u4-l1-s1',
                title: 'Huquqiy Uslub va Terminologiya',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'Jurisprudence & Statutory Registers',
                    explanation: 'Institutsional va yuridik hujjatchilikka oid oliy akademik leksika.',
                    keyPoints: [
                        'Inalienable rights — daxlsiz/tortib olib bo\'lmaydigan huquqlar',
                        'Statutory obligations — qonuniy majburiyatlar',
                        'Pursuant to Section 4 — 4-bandga muvofiq'
                    ],
                    vocabulary: [
                        { term: 'Inalienable', reading: '/ɪnˈeɪ.li.ə.nə.bəl/', meaning: 'Daxlsiz, ajralmas', exampleSentence: 'Human dignity is an inalienable right.', exampleTranslation: 'Inson qadr-qimmati ajralmas huquqdir.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri yuridik iborani tanlang.',
                    exercises: [
                        { id: 'en-c2-u4-l1-e1', type: 'multiple-choice', prompt: '"Pursuant _______ statutory regulations, the tribunal dismissed the claim."', options: ['to', 'of', 'with', 'in'], correctAnswer: 0, explanation: 'Pursuant to = muvofiq.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u4-l1-q1', question: 'What does "statutory" mean?', options: ['Enacted, created, or required by statute or law', 'Optional', 'Illegal', 'Temporary'], correctAnswerIndex: 0, explanation: 'Enacted or required by law.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u4-l2',
        courseId: 'english-c2',
        unitId: 'en-c2-u4',
        unitTitle: 'Unit 4: Rhetoric & Legal Discourse',
        language: 'en',
        level: 'C2',
        lessonNumber: 17,
        title: 'Literary Allusions & Metaphorical Nuance',
        description: 'Adabiy ishoralar (allusions) va chuqur ko\'chma ma\'nolar: "Achilles\' heel", "Pyrrhic victory", "Pandora\'s box".',
        estimatedDurationMinutes: 18,
        icon: '📚',
        steps: [
            {
                id: 'en-c2-u4-l2-s1',
                title: 'Adabiy Ishoralar (Allusions)',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'Classic Allusions in Elite English',
                    explanation: 'Ingliz tili elita nutqida klassik va tarixiy ishoralarning ishlatilishi.',
                    keyPoints: [
                        'Pyrrhic victory — juda katta yo\'qotish evaziga erishilgan mag\'lubiyatga teng g\'alaba',
                        'Achilles\' heel — eng nozik/zaif nuqta',
                        'Opening a Pandora\'s box — hal etib bo\'lmas muammolar zanjirini keltirib chiqarish'
                    ],
                    vocabulary: [
                        { term: 'Pyrrhic', reading: '/ˈpɪr.ɪk/', meaning: 'Pirr g\'alabasi (og\'ir yo\'qotishli)', exampleSentence: 'It was a Pyrrhic victory.', exampleTranslation: 'Bu ulkan yo\'qotishli g\'alaba edi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'en-c2-u4-l2-e1', type: 'multiple-choice', prompt: '"Lack of cyber-security proved to be the corporation\'s _______ heel."', options: ['Achilles\'', 'Hercules\'', 'Apollo\'s', 'Zeus\''], correctAnswer: 0, explanation: 'Achilles\' heel = nozik nuqta.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u4-l2-q1', question: 'A "Pyrrhic victory" is one where:', options: ['The toll paid negates any true strategic benefit', 'The victory is quick and easy', 'Nobody wins', 'The enemy surrenders peacefully'], correctAnswerIndex: 0, explanation: 'The toll paid negates any benefit.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u4-l3',
        courseId: 'english-c2',
        unitId: 'en-c2-u4',
        unitTitle: 'Unit 4: Rhetoric & Legal Discourse',
        language: 'en',
        level: 'C2',
        lessonNumber: 18,
        title: 'Diplomatic Tact, Euphemism & Ambiguity',
        description: 'Diplomatik muloqot: evfemizmlar, vazminlik va siyosiy muloqot madaniyati.',
        estimatedDurationMinutes: 18,
        icon: '🕊️',
        steps: [
            {
                id: 'en-c2-u4-l3-s1',
                title: 'Diplomatik Evfemizmlar',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'Diplomatic Discourse & Subtlety',
                    explanation: 'Xalqaro diplomatiya va oliy doiralarda fikrni o\'ta bosiqlik bilan yetkazish.',
                    keyPoints: [
                        'Frank exchange of views — Keskin va ziddiyatli muzokara',
                        'Economical with the truth — Haqiqatni yashirish/chalg\'itish',
                        'Constructive ambiguity — Ikkala taraf uchun ham qulay noaniqlik'
                    ],
                    vocabulary: [
                        { term: 'Euphemism', reading: '/ˈjuː.fə.mɪ.zəm/', meaning: 'Yumshatilgan so\'z (evfemizm)', exampleSentence: 'Using a euphemism for death.', exampleTranslation: 'O\'lim so\'zi o\'rniga yumshatilgan ibora ishlatish.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri diplomatik iborani tanlang.',
                    exercises: [
                        { id: 'en-c2-u4-l3-e1', type: 'multiple-choice', prompt: 'In diplomatic cables, a "frank exchange of views" signifies:', options: ['A heated disagreement or conflict', 'A friendly chat over coffee', 'A complete agreement', 'A silent meeting'], correctAnswer: 0, explanation: 'Frank exchange = keskin ziddiyatli muzokara.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u4-l3-q1', question: 'What is "constructive ambiguity"?', options: ['Deliberate vagueness in negotiating to allow different interpretations by opposing sides', 'A clear mistake in a treaty', 'A translation error', 'An argument'], correctAnswerIndex: 0, explanation: 'Deliberate vagueness to allow different interpretations.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u4-l4',
        courseId: 'english-c2',
        unitId: 'en-c2-u4',
        unitTitle: 'Unit 4: Rhetoric & Legal Discourse',
        language: 'en',
        level: 'C2',
        lessonNumber: 19,
        title: 'Mastery of Epistemological & Philosophical Prose',
        description: 'Falsafiy va epistemologik ilmiy matnlar tahlili: "Ontological", "Heuristic", "Hermeneutics".',
        estimatedDurationMinutes: 18,
        icon: '🧠',
        steps: [
            {
                id: 'en-c2-u4-l4-s1',
                title: 'Falsafiy Uslubiyat',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'Epistemology & Theoretical Analysis',
                    explanation: 'Akademiyadagi eng oliy tahliliy va falsafiy tushunchalar.',
                    keyPoints: [
                        'Ontological security — Borliqqa oid barqarorlik hissi',
                        'Heuristic device — Amaliy kashfiyot vositasi',
                        'Hermeneutic circle — Matnni qism va butunlikda talqin qilish'
                    ],
                    vocabulary: [
                        { term: 'Epistemology', reading: '/ɪˌpɪs.təˈmɒl.ə.dʒi/', meaning: 'Bilmash/Gnoseologiya nazariyasi', exampleSentence: 'Epistemology studies the nature of knowledge.', exampleTranslation: 'Epistemologiya bilimning tabiatini o\'rganadi.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri falsafiy atamani tanlang.',
                    exercises: [
                        { id: 'en-c2-u4-l4-e1', type: 'multiple-choice', prompt: 'A practical problem-solving approach not guaranteed to be optimal is called a:', options: ['heuristic', 'syllogism', 'tautology', 'paradox'], correctAnswer: 0, explanation: 'Heuristic device.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-c2-u4-l4-q1', question: 'What does "ontological" concern?', options: ['The nature of being, existence, or reality', 'The study of insects', 'Historical dates', 'Chemical bonds'], correctAnswerIndex: 0, explanation: 'Nature of being or existence.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-c2-u4-l5',
        courseId: 'english-c2',
        unitId: 'en-c2-u4',
        unitTitle: 'Unit 4: Rhetoric & Legal Discourse',
        language: 'en',
        level: 'C2',
        lessonNumber: 20,
        title: 'C2 Master Class Final Capstone Examination',
        description: 'Ingliz tili C2 Oliy O\'zlashtirish Darajasining to\'liq va yakuniy professional baholash imtihoni.',
        estimatedDurationMinutes: 20,
        icon: '👑',
        steps: [
            {
                id: 'en-c2-u4-l5-s1',
                title: 'C2 Ultimate Overview',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'C2 Mastery Peak Summary',
                    explanation: 'Congratulations! You have reached the pinnacle of English language learning (CEFR C2).',
                    keyPoints: [
                        'Native-level fluency across academic, legal, and literary registers',
                        'Flawless mastery of inversion, rhetorical tropes, and diplomatic nuance',
                        'IELTS 8.5–9.0 equivalent competence'
                    ]
                }
            },
            {
                id: 'en-c2-u4-l5-s2',
                title: 'C2 Capstone Practice',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Final Capstone practice question.',
                    exercises: [
                        { id: 'en-c2-u4-l5-e1', type: 'multiple-choice', prompt: '"Notwithstanding the prevailing orthodoxy, her pioneering thesis _______ established a paradigm shift in quantum mechanics."', options: ['unequivocally', 'partially', 'scarcely', 'doubtfully'], correctAnswer: 0, explanation: 'Unequivocally established a paradigm shift.' }
                    ]
                }
            },
            {
                id: 'en-c2-u4-l5-s3',
                title: 'C2 Level Mastery Certification Exam',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'C2 darajasidagi yakuniy professional sertifikatlash savollari.',
                    passingScorePercentage: 85,
                    questions: [
                        { id: 'en-c2-u4-l5-q1', question: 'Select the sentence that exhibits perfect C2 academic inversion and vocabulary:', options: ['Under no circumstances should the integrity of empirical data be compromised.', 'Under no circumstances the data should be compromised.', 'Under no circumstances compromised should be data.', 'In no circumstance data can be compromised.'], correctAnswerIndex: 0, explanation: 'Under no circumstances should ... be compromised.' },
                        { id: 'en-c2-u4-l5-q2', question: 'What is the meaning of "paradigm shift"?', options: ['A fundamental change in the basic concepts and experimental practices of a scientific discipline', 'A small change in plan', 'A shift in work hours', 'A translation of text'], correctAnswerIndex: 0, explanation: 'Fundamental change in basic concepts.' },
                        { id: 'en-c2-u4-l5-q3', question: 'Which term describes an argument that repeats the same idea in different words without adding proof?', options: ['Tautology', 'Paradox', 'Oxymoron', 'Metaphor'], correctAnswerIndex: 0, explanation: 'Tautology (takroriy mantiqsizlik).' },
                        { id: 'en-c2-u4-l5-q4', question: 'Congratulations! You have completed the C2 English Curriculum with highest honors.', options: ['Accept Certificate', 'Review Lessons', 'Restart Course', 'Exit'], correctAnswerIndex: 0, explanation: 'Certificate awarded.' }
                    ]
                }
            }
        ]
    }
];

