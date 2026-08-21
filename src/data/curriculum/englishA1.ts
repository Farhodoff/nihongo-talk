import { Lesson } from '../../types/lesson';

export const ENGLISH_A1_LESSONS: Lesson[] = [
    // Unit 1: Essentials, Greetings & To Be
    {
        id: 'en-a1-u1-l1',
        courseId: 'english-a1',
        unitId: 'en-a1-u1',
        unitTitle: 'Unit 1: Essentials & Greetings',
        language: 'en',
        level: 'A1',
        lessonNumber: 1,
        title: 'Greetings & Introductions',
        description: 'Present Simple: To Be (Am, Is, Are) va asosiy shaxs olmoshlari bilan tanishuv.',
        estimatedDurationMinutes: 12,
        icon: '👋',
        steps: [
            {
                id: 'en-a1-u1-l1-s1',
                title: 'Yangi So\'zlar & Qoida',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Salomlashish va To Be Fe\'li',
                    subtitle: 'Boshlang\'ich ingliz tili asoslari',
                    explanation: 'Ingliz tilida gap tuzishning asosi "to be" (bo\'lmoq) fe\'lidir. Hozirgi zamonda u am, is, are shakllariga ega.',
                    keyPoints: [
                        'I -> am (I am a student)',
                        'He / She / It -> is (She is a doctor)',
                        'You / We / They -> are (They are friends)'
                    ],
                    vocabulary: [
                        { term: 'Hello', reading: '/həˈloʊ/', meaning: 'Salom', exampleSentence: 'Hello! My name is John.', exampleTranslation: 'Salom! Mening ismim Jon.' },
                        { term: 'Goodbye', reading: '/ɡʊdˈbaɪ/', meaning: 'Xayr', exampleSentence: 'Goodbye, see you tomorrow!', exampleTranslation: 'Xayr, ertagacha!' },
                        { term: 'Name', reading: '/neɪm/', meaning: 'Ism', exampleSentence: 'What is your name?', exampleTranslation: 'Ismingiz nima?' },
                        { term: 'Friend', reading: '/frend/', meaning: 'Do\'st', exampleSentence: 'Alex is my best friend.', exampleTranslation: 'Alek mening eng yaqin do\'stim.' }
                    ],
                    grammarRules: [
                        {
                            pattern: 'Subject + am/is/are + Noun/Adjective',
                            meaning: 'Kimdir yoki nimadir kim/qanday ekanligini bildiradi',
                            usageNotes: 'Inkor shaklida am not / is not (isn\'t) / are not (aren\'t) ishlatiladi.',
                            examples: [
                                { sentence: 'I am from Uzbekistan.', translation: 'Men O\'zbekistondanman.' },
                                { sentence: 'She is very happy today.', translation: 'U bugun juda xursand.' }
                            ]
                        }
                    ],
                    culturalNotes: 'Ingliz tilida tanishganda "Nice to meet you" (Tanishganimdan xursandman) deb qo\'l berib ko\'rishish odat tusiga kirgan.'
                }
            },
            {
                id: 'en-a1-u1-l1-s2',
                title: 'Amaliy Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri "to be" fe\'lini tanlang.',
                    exercises: [
                        {
                            id: 'en-a1-u1-l1-e1',
                            type: 'multiple-choice',
                            prompt: '"He _______ a teacher." Qaysi shakl to\'g\'ri?',
                            options: ['is', 'am', 'are', 'be'],
                            correctAnswer: 0,
                            explanation: 'He/She/It olmoshlari bilan "is" ishlatiladi.'
                        },
                        {
                            id: 'en-a1-u1-l1-e2',
                            type: 'multiple-choice',
                            prompt: '"They _______ from Spain." Qaysi shakl to\'g\'ri?',
                            options: ['are', 'is', 'am', 'being'],
                            correctAnswer: 0,
                            explanation: 'They ko\'plik olmoshi bilan "are" ishlatiladi.'
                        }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l1-s3',
                title: 'Dars Testi',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob berib mavzuni mustahkamlang.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u1-l1-q1', question: 'I _______ a student at university.', options: ['am', 'is', 'are', 'be'], correctAnswerIndex: 0, explanation: 'I olmoshi bilan faqat "am" ishlatiladi.' },
                        { id: 'en-a1-u1-l1-q2', question: '_______ you ready for the lesson?', options: ['Are', 'Is', 'Am', 'Do'], correctAnswerIndex: 0, explanation: 'You bilan so\'roq shaklida "Are you...?" ishlatiladi.' },
                        { id: 'en-a1-u1-l1-q3', question: '"Xayr" so\'zining to\'g\'ri inglizcha tarjimasi qaysi?', options: ['Goodbye', 'Please', 'Thank you', 'Welcome'], correctAnswerIndex: 0, explanation: 'Goodbye — Xayr.' },
                        { id: 'en-a1-u1-l1-q4', question: 'She _______ not at home right now.', options: ['is', 'are', 'am', 'be'], correctAnswerIndex: 0, explanation: 'She bilan "is not" (isn\'t) ishlatiladi.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u1-l2',
        courseId: 'english-a1',
        unitId: 'en-a1-u1',
        unitTitle: 'Unit 1: Essentials & Greetings',
        language: 'en',
        level: 'A1',
        lessonNumber: 2,
        title: 'Daily Objects & Numbers',
        description: 'Oddiy narsa-buyumlar va 1-100 gacha sonlar.',
        estimatedDurationMinutes: 10,
        icon: '🔢',
        steps: [
            {
                id: 'en-a1-u1-l2-s1',
                title: 'Yangi So\'zlar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Sonlar va Kundalik Buyumlar',
                    explanation: 'Ingliz tilida 1 dan 100 gacha sonlar va kundalik buyumlar nomlarini o\'rganamiz.',
                    vocabulary: [
                        { term: 'Book', reading: '/bʊk/', meaning: 'Kitob', exampleSentence: 'This is an English book.', exampleTranslation: 'Bu ingliz tili kitobi.' },
                        { term: 'Pen', reading: '/pen/', meaning: 'Ruchka', exampleSentence: 'I need a blue pen.', exampleTranslation: 'Menga ko\'k ruchka kerak.' },
                        { term: 'Ten', reading: '/ten/', meaning: 'O\'n (10)', exampleSentence: 'There are ten students.', exampleTranslation: 'O\'nta talaba bor.' },
                        { term: 'Twenty', reading: '/ˈtwen.ti/', meaning: 'Yigirma (20)', exampleSentence: 'Page twenty is interesting.', exampleTranslation: 'Yigirmanchi sahifa qiziq.' }
                    ],
                    keyPoints: ['Sonlar: One(1), Two(2), Three(3), Ten(10), Twenty(20), Hundred(100).']
                }
            },
            {
                id: 'en-a1-u1-l2-s2',
                title: 'Amaliy Mashq',
                type: 'practice',
                estimatedMinutes: 3,
                practiceData: {
                    instructions: 'Son va buyum so\'zlarini moslashtiring.',
                    exercises: [
                        { id: 'en-a1-u1-l2-e1', type: 'multiple-choice', prompt: '"Kitob" so\'zining inglizcha tarjimasi nima?', options: ['Book', 'Table', 'Chair', 'Door'], correctAnswer: 0, explanation: 'Book — Kitob.' },
                        { id: 'en-a1-u1-l2-e2', type: 'multiple-choice', prompt: '"15" soni qanday yoziladi?', options: ['Fifteen', 'Fifty', 'Five', 'Fifth'], correctAnswer: 0, explanation: '15 — Fifteen.' }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l2-s3',
                title: 'Dars Testi',
                type: 'test',
                estimatedMinutes: 3,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u1-l2-q1', question: 'Which word means "Ruchka"?', options: ['Pen', 'Pencil', 'Bag', 'Desk'], correctAnswerIndex: 0, explanation: 'Pen — Ruchka.' },
                        { id: 'en-a1-u1-l2-q2', question: 'How do you write 50 in English?', options: ['Fifty', 'Fifteen', 'Five', 'Fifth'], correctAnswerIndex: 0, explanation: '50 — Fifty.' },
                        { id: 'en-a1-u1-l2-q3', question: 'I have _______ notebooks on my desk.', options: ['two', 'to', 'too', 'tow'], correctAnswerIndex: 0, explanation: 'Two — 2 soni.' },
                        { id: 'en-a1-u1-l2-q4', question: '"Bag" so\'zining ma\'nosi nima?', options: ['Sumka / Portfel', 'Stol', 'Xona', 'Daftar'], correctAnswerIndex: 0, explanation: 'Bag — Sumka.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u1-l3',
        courseId: 'english-a1',
        unitId: 'en-a1-u1',
        unitTitle: 'Unit 1: Essentials & Greetings',
        language: 'en',
        level: 'A1',
        lessonNumber: 3,
        title: 'Demonstratives: This, That, These, Those',
        description: 'Yaqin va uzoqdagi narsalarni ko\'rsatish olmoshlari.',
        estimatedDurationMinutes: 10,
        icon: '👉',
        steps: [
            {
                id: 'en-a1-u1-l3-s1',
                title: 'Ko\'rsatish Olmoshlari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'This, That, These, Those',
                    explanation: 'Yaqindagi bitta narsaga "This", uzoqdagi bittasiga "That", yaqindagi ko\'plikka "These", uzoqdagi ko\'plikka "Those" ishlatiladi.',
                    keyPoints: ['This is my pen (yaqin birlik)', 'That is your car (uzoq birlik)', 'These are my books (yaqin ko\'plik)', 'Those are birds (uzoq ko\'plik)'],
                    vocabulary: [
                        { term: 'This', reading: '/ðɪs/', meaning: 'Bu (yaqindagi birlik)', exampleSentence: 'This is my coffee.', exampleTranslation: 'Bu mening qahvam.' },
                        { term: 'That', reading: '/ðæt/', meaning: 'U / Ana u (uzoqdagi birlik)', exampleSentence: 'That building is high.', exampleTranslation: 'Ana u bino baland.' }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 3,
                practiceData: {
                    instructions: 'To\'g\'ri ko\'rsatish olmoshini tanlang.',
                    exercises: [
                        { id: 'en-a1-u1-l3-e1', type: 'multiple-choice', prompt: '"_______ are my keys in my hand."', options: ['These', 'This', 'That', 'Those'], correctAnswer: 0, explanation: 'Qo\'ldagi (yaqin) ko\'plik uchun "These" ishlatiladi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 3,
                testData: {
                    instructions: 'Test savollariga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u1-l3-q1', question: '_______ is a laptop on the table over there.', options: ['That', 'These', 'This', 'Those'], correctAnswerIndex: 0, explanation: 'Uzoqdagi bitta buyum uchun "That" ishlatiladi.' },
                        { id: 'en-a1-u1-l3-q2', question: 'Look at _______ flowers right here in front of us!', options: ['these', 'those', 'that', 'this'], correctAnswerIndex: 0, explanation: 'Yaqindagi ko\'plik gullar uchun "these".' },
                        { id: 'en-a1-u1-l3-q3', question: 'What is _______ over there in the sky?', options: ['that', 'these', 'this', 'those'], correctAnswerIndex: 0, explanation: 'Osmondagi uzoq narsa uchun "that".' },
                        { id: 'en-a1-u1-l3-q4', question: '_______ shoes are very comfortable.', options: ['These', 'This', 'That', 'A'], correctAnswerIndex: 0, explanation: 'Poyabzal (shoes) ko\'plikda bo\'lgani uchun "These".' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u1-l4',
        courseId: 'english-a1',
        unitId: 'en-a1-u1',
        unitTitle: 'Unit 1: Essentials & Greetings',
        language: 'en',
        level: 'A1',
        lessonNumber: 4,
        title: 'Articles: A, An, The',
        description: 'Noaniq (A, An) va aniq (The) artikllarni to\'g\'ri qo\'llash.',
        estimatedDurationMinutes: 12,
        icon: '🔤',
        steps: [
            {
                id: 'en-a1-u1-l4-s1',
                title: 'Artikllar Qoidasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'A, An va The Artikllari',
                    explanation: 'Undosh tovush bilan boshlangan birlik otlarga "a", unli tovush bilan boshlanganlarga "an" qo\'yiladi. Aniq narsalar uchun "the" ishlatiladi.',
                    keyPoints: ['a car, a student, a university (/j/ undosh tovush)', 'an apple, an hour (/aʊər/ unli tovush)', 'the sun, the president (aniq/yagona narsalar)'],
                    vocabulary: [
                        { term: 'Apple', reading: '/ˈæp.əl/', meaning: 'Olma', exampleSentence: 'I eat an apple daily.', exampleTranslation: 'Men har kuni bitta olma yeyman.' },
                        { term: 'Car', reading: '/kɑːr/', meaning: 'Mashina', exampleSentence: 'He drives a car.', exampleTranslation: 'U mashina haydaydi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri artiklni tanlang.',
                    exercises: [
                        { id: 'en-a1-u1-l4-e1', type: 'multiple-choice', prompt: '"She is _______ architect."', options: ['an', 'a', 'the', 'no article'], correctAnswer: 0, explanation: '"Architect" unli /ɑː/ tovushi bilan boshlangani uchun "an" olinadi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u1-l4-q1', question: 'I saw _______ interesting movie yesterday.', options: ['an', 'a', 'the', 'these'], correctAnswerIndex: 0, explanation: 'Interesting unli bilan boshlanadi: an.' },
                        { id: 'en-a1-u1-l4-q2', question: '_______ moon is very bright tonight.', options: ['The', 'A', 'An', 'This'], correctAnswerIndex: 0, explanation: 'Oy yagona bo\'lgani uchun: The moon.' },
                        { id: 'en-a1-u1-l4-q3', question: 'He is _______ university professor.', options: ['a', 'an', 'the', 'those'], correctAnswerIndex: 0, explanation: 'University /j/ undosh tovushi bilan boshlanadi: a university.' },
                        { id: 'en-a1-u1-l4-q4', question: 'Can I have _______ glass of water?', options: ['a', 'an', 'the', 'any'], correctAnswerIndex: 0, explanation: 'A glass of water.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u1-l5',
        courseId: 'english-a1',
        unitId: 'en-a1-u1',
        unitTitle: 'Unit 1: Essentials & Greetings',
        language: 'en',
        level: 'A1',
        lessonNumber: 5,
        title: 'Possessives: My, Your, His, Her',
        description: 'Egalik olmoshlari va narsalarning kimga tegishli ekanligini bildirish.',
        estimatedDurationMinutes: 10,
        icon: '🏷️',
        steps: [
            {
                id: 'en-a1-u1-l5-s1',
                title: 'Egalik Olmoshlari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'My, Your, His, Her, Its, Our, Their',
                    explanation: 'Kimning narsasi ekanligini aytish uchun egalik olmoshlaridan foydalanamiz.',
                    keyPoints: ['My (mening), Your (sening/sizning)', 'His (uning - o\'g\'il bola), Her (uning - qiz bola)', 'Our (bizning), Their (ularning)'],
                    vocabulary: [
                        { term: 'Passport', reading: '/ˈpɑːs.pɔːt/', meaning: 'Pasport', exampleSentence: 'Where is my passport?', exampleTranslation: 'Mening pasportim qayerda?' },
                        { term: 'Phone', reading: '/foʊn/', meaning: 'Telefon', exampleSentence: 'Her phone is new.', exampleTranslation: 'Uning telefoni yangi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 3,
                practiceData: {
                    instructions: 'To\'g\'ri egalik olmoshini tanlang.',
                    exercises: [
                        { id: 'en-a1-u1-l5-e1', type: 'multiple-choice', prompt: '"John has a dog. _______ dog is brown."', options: ['His', 'Her', 'Their', 'My'], correctAnswer: 0, explanation: 'John erkak kishi bo\'lgani uchun "His" ishlatiladi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 3,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u1-l5-q1', question: 'Sarah is an engineer. _______ office is in downtown.', options: ['Her', 'His', 'Our', 'Their'], correctAnswerIndex: 0, explanation: 'Sarah ayol kishi: Her office.' },
                        { id: 'en-a1-u1-l5-q2', question: 'We love _______ new apartment.', options: ['our', 'we', 'us', 'they'], correctAnswerIndex: 0, explanation: 'We uchun egalik: our.' },
                        { id: 'en-a1-u1-l5-q3', question: 'The students are doing _______ homework.', options: ['their', 'there', 'they', 'them'], correctAnswerIndex: 0, explanation: 'Students ko\'plik: their.' },
                        { id: 'en-a1-u1-l5-q4', question: 'Is this _______ coat, David?', options: ['your', 'you', 'yours', 'he'], correctAnswerIndex: 0, explanation: 'Sening paltongmi: your coat.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Daily Routines & Present Simple
    {
        id: 'en-a1-u2-l1',
        courseId: 'english-a1',
        unitId: 'en-a1-u2',
        unitTitle: 'Unit 2: Family & Everyday Life',
        language: 'en',
        level: 'A1',
        lessonNumber: 1,
        title: 'Family & People',
        description: 'Oila a\'zolarini tasvirlash va oilaviy munosabatlar.',
        estimatedDurationMinutes: 12,
        icon: '👨‍👩‍👧‍👦',
        steps: [
            {
                id: 'en-a1-u2-l1-s1',
                title: 'Oila Leksikasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Oila a\'zolari (Family Members)',
                    explanation: 'Oila haqida gapirishda eng ko\'p ishlatiladigan so\'zlar.',
                    vocabulary: [
                        { term: 'Father', reading: '/ˈfɑː.ðər/', meaning: 'Ota', exampleSentence: 'My father is a doctor.', exampleTranslation: 'Mening otam shifokor.' },
                        { term: 'Mother', reading: '/ˈmʌð.ər/', meaning: 'Ona', exampleSentence: 'My mother is a teacher.', exampleTranslation: 'Mening onam o\'qituvchi.' },
                        { term: 'Brother', reading: '/ˈbrʌð.ər/', meaning: 'Aka / Uka', exampleSentence: 'I have one younger brother.', exampleTranslation: 'Mening bitta ukam bor.' },
                        { term: 'Sister', reading: '/ˈsɪs.tər/', meaning: 'Opa / Singil', exampleSentence: 'Her sister lives in Samarkand.', exampleTranslation: 'Uning opasi Samarqandda yashaydi.' }
                    ],
                    keyPoints: ['Parents — Ota-ona', 'Siblings — Aka-uka va opa-singillar']
                }
            },
            {
                id: 'en-a1-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Oila a\'zosi nomini tanlang.',
                    exercises: [
                        { id: 'en-a1-u2-l1-e1', type: 'multiple-choice', prompt: '"Ota-ona" so\'zining inglizcha tarjimasi qaysi?', options: ['Parents', 'Partners', 'Cousins', 'Children'], correctAnswer: 0, explanation: 'Parents — Ota-ona.' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u2-l1-q1', question: 'My father\'s mother is my _______.', options: ['grandmother', 'aunt', 'sister', 'daughter'], correctAnswerIndex: 0, explanation: 'Otamning onasi — buvim (grandmother).' },
                        { id: 'en-a1-u2-l1-q2', question: 'My mother\'s brother is my _______.', options: ['uncle', 'nephew', 'grandfather', 'cousin'], correctAnswerIndex: 0, explanation: 'Onamning ukasi/akasi — tog\'a (uncle).' },
                        { id: 'en-a1-u2-l1-q3', question: 'How many _______ do you have?', options: ['brothers', 'brother', 'a brother', 'brotherses'], correctAnswerIndex: 0, explanation: 'How many dan keyin ko\'plik ot keladi: brothers.' },
                        { id: 'en-a1-u2-l1-q4', question: '"Daughter" so\'zining ma\'nosi nima?', options: ['Qiz farzand', 'O\'g\'il farzand', 'Jiyan', 'Kelin'], correctAnswerIndex: 0, explanation: 'Daughter — Qiz farzand.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u2-l2',
        courseId: 'english-a1',
        unitId: 'en-a1-u2',
        unitTitle: 'Unit 2: Family & Everyday Life',
        language: 'en',
        level: 'A1',
        lessonNumber: 2,
        title: 'Colors & Clothes',
        description: 'Ranglar va kiyim-kechaklarni tasvirlash.',
        estimatedDurationMinutes: 10,
        icon: '👗',
        steps: [
            {
                id: 'en-a1-u2-l2-s1',
                title: 'Ranglar va Kiyimlar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Colors and Clothes',
                    explanation: 'Kiyimlarni ranglar bilan birga aytish: Sifat + Ot (a red shirt).',
                    vocabulary: [
                        { term: 'Shirt', reading: '/ʃɜːt/', meaning: 'Ko\'ylak', exampleSentence: 'He wears a white shirt.', exampleTranslation: 'U oq ko\'ylak kiyadi.' },
                        { term: 'Shoes', reading: '/ʃuːz/', meaning: 'Poyabzal', exampleSentence: 'These shoes are comfortable.', exampleTranslation: 'Bu poyabzal qulay.' },
                        { term: 'Blue', reading: '/bluː/', meaning: 'Ko\'k', exampleSentence: 'The sky is blue.', exampleTranslation: 'Osmon ko\'k.' },
                        { term: 'Black', reading: '/blæk/', meaning: 'Qora', exampleSentence: 'I have a black jacket.', exampleTranslation: 'Menda qora kurtka bor.' }
                    ],
                    keyPoints: ['Ingliz tilida sifat otning oldidan keladi: a black jacket (black a jacket EMAS).']
                }
            },
            {
                id: 'en-a1-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 3,
                practiceData: {
                    instructions: 'To\'g\'ri jumlani tanlang.',
                    exercises: [
                        { id: 'en-a1-u2-l2-e1', type: 'multiple-choice', prompt: '"Qizil ko\'ylak" qanday aytiladi?', options: ['A red shirt', 'A shirt red', 'Red the shirt', 'Shirt a red'], correctAnswer: 0, explanation: 'Sifat otdan oldin keladi: A red shirt.' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 3,
                testData: {
                    instructions: 'Testni yeching.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u2-l2-q1', question: 'She is wearing _______ coat.', options: ['a green', 'green a', 'an green', 'the greens'], correctAnswerIndex: 0, explanation: 'A green coat.' },
                        { id: 'en-a1-u2-l2-q2', question: '"Yellow" qaysi rang?', options: ['Sariq', 'Yashil', 'Qizil', 'Jigarrang'], correctAnswerIndex: 0, explanation: 'Yellow — Sariq.' },
                        { id: 'en-a1-u2-l2-q3', question: 'I need to buy new _______ for running.', options: ['shoes', 'a shoes', 'shoeses', 'shoe'], correctAnswerIndex: 0, explanation: 'Poyabzal juft bo\'lgani uchun ko\'plikda: shoes.' },
                        { id: 'en-a1-u2-l2-q4', question: '"Trousers / Pants" so\'zining ma\'nosi:', options: ['Shim', 'Ko\'ylak', 'Shlyapa', 'Paypoq'], correctAnswerIndex: 0, explanation: 'Trousers — Shim.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u2-l3',
        courseId: 'english-a1',
        unitId: 'en-a1-u2',
        unitTitle: 'Unit 2: Family & Everyday Life',
        language: 'en',
        level: 'A1',
        lessonNumber: 3,
        title: 'Present Simple: Action Verbs (I work / live)',
        description: 'Harakat fe\'llari va hozirgi oddiy zamon tuzilishi.',
        estimatedDurationMinutes: 14,
        icon: '🏃',
        steps: [
            {
                id: 'en-a1-u2-l3-s1',
                title: 'Present Simple Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Present Simple: Muntazam Harakatlar',
                    explanation: 'Doimiy takrorlanadigan odatlar va faktlar uchun Present Simple ishlatiladi. He/She/It da fe\'lga -s/-es qo\'shiladi.',
                    keyPoints: ['I live in Tashkent.', 'He lives in London.', 'They work at a bank.'],
                    vocabulary: [
                        { term: 'Live', reading: '/lɪv/', meaning: 'Yashamoq', exampleSentence: 'Where do you live?', exampleTranslation: 'Qayerda yashaysiz?' },
                        { term: 'Work', reading: '/wɜːk/', meaning: 'Ishlamoq', exampleSentence: 'She works hard every day.', exampleTranslation: 'U har kuni qattiq ishlaydi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri fe\'l shaklini tanlang.',
                    exercises: [
                        { id: 'en-a1-u2-l3-e1', type: 'multiple-choice', prompt: '"He _______ (speak) English well."', options: ['speaks', 'speak', 'speaking', 'is speak'], correctAnswer: 0, explanation: 'He olmoshi bilan fe\'lga -s qo\'shiladi: speaks.' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u2-l3-q1', question: 'My sister _______ coffee every morning.', options: ['drinks', 'drink', 'drinking', 'is drink'], correctAnswerIndex: 0, explanation: 'My sister (she) -> drinks.' },
                        { id: 'en-a1-u2-l3-q2', question: 'We _______ in a big city.', options: ['live', 'lives', 'living', 'are live'], correctAnswerIndex: 0, explanation: 'We -> live.' },
                        { id: 'en-a1-u2-l3-q3', question: 'The sun _______ in the east.', options: ['rises', 'rise', 'rising', 'is rise'], correctAnswerIndex: 0, explanation: 'Tabiat qonuni/haqiqat: rises.' },
                        { id: 'en-a1-u2-l3-q4', question: 'They _______ to university by bus.', options: ['go', 'goes', 'going', 'are go'], correctAnswerIndex: 0, explanation: 'They -> go.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u2-l4',
        courseId: 'english-a1',
        unitId: 'en-a1-u2',
        unitTitle: 'Unit 2: Family & Everyday Life',
        language: 'en',
        level: 'A1',
        lessonNumber: 4,
        title: 'Present Simple Negatives (don\'t / doesn\'t)',
        description: 'Inkor gaplar tuzish va yordamchi fe\'llar.',
        estimatedDurationMinutes: 12,
        icon: '🚫',
        steps: [
            {
                id: 'en-a1-u2-l4-s1',
                title: 'Inkor Shakli',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Don\'t va Doesn\'t',
                    explanation: 'I/You/We/They uchun "do not (don\'t)", He/She/It uchun "does not (doesn\'t)" ishlatiladi. doesn\'t dan keyin asosiy fe\'lga -s qo\'shilmaydi!',
                    keyPoints: ['I don\'t like tea.', 'He doesn\'t like coffee (likes EMAS).'],
                    vocabulary: [
                        { term: 'Like', reading: '/laɪk/', meaning: 'Yoqtirmoq', exampleSentence: 'I like learning languages.', exampleTranslation: 'Men til o\'rganishni yoqtiraman.' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Inkor shaklini tanlang.',
                    exercises: [
                        { id: 'en-a1-u2-l4-e1', type: 'multiple-choice', prompt: '"She _______ (not / eat) fast food."', options: ['doesn\'t eat', 'don\'t eat', 'not eats', 'doesn\'t eats'], correctAnswer: 0, explanation: 'She bilan doesn\'t eat ishlatiladi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u2-l4-q1', question: 'I _______ know the answer.', options: ['don\'t', 'doesn\'t', 'am not', 'no'], correctAnswerIndex: 0, explanation: 'I don\'t know.' },
                        { id: 'en-a1-u2-l4-q2', question: 'Tom _______ drive a car.', options: ['doesn\'t', 'don\'t', 'isn\'t', 'not'], correctAnswerIndex: 0, explanation: 'Tom doesn\'t drive.' },
                        { id: 'en-a1-u2-l4-q3', question: 'They _______ live in this neighborhood.', options: ['don\'t', 'doesn\'t', 'aren\'t', 'not'], correctAnswerIndex: 0, explanation: 'They don\'t live.' },
                        { id: 'en-a1-u2-l4-q4', question: 'She _______ speak Spanish.', options: ['doesn\'t', 'don\'t', 'not', 'isn\'t'], correctAnswerIndex: 0, explanation: 'She doesn\'t speak.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u2-l5',
        courseId: 'english-a1',
        unitId: 'en-a1-u2',
        unitTitle: 'Unit 2: Family & Everyday Life',
        language: 'en',
        level: 'A1',
        lessonNumber: 5,
        title: 'Present Simple Questions (Do / Does)',
        description: 'So\'roq gaplar tuzish va qisqa javoblar berish.',
        estimatedDurationMinutes: 12,
        icon: '❓',
        steps: [
            {
                id: 'en-a1-u2-l5-s1',
                title: 'So\'roq Shakli',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Do you...? / Does he...?',
                    explanation: 'So\'roq gaplarda Do/Does egadan oldinga o\'tadi.',
                    keyPoints: ['Do you play football? -> Yes, I do. / No, I don\'t.', 'Does she work here? -> Yes, she does. / No, she doesn\'t.'],
                    vocabulary: [
                        { term: 'Question', reading: '/ˈkwes.tʃən/', meaning: 'Savol', exampleSentence: 'Can I ask a question?', exampleTranslation: 'Savol bersam bo\'ladimi?' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri so\'roq fe\'lini tanlang.',
                    exercises: [
                        { id: 'en-a1-u2-l5-e1', type: 'multiple-choice', prompt: '"_______ you speak English?"', options: ['Do', 'Does', 'Are', 'Is'], correctAnswer: 0, explanation: 'You bilan "Do you speak...?" ishlatiladi.' }
                    ]
                }
            },
            {
                id: 'en-a1-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u2-l5-q1', question: '_______ he work in an office?', options: ['Does', 'Do', 'Is', 'Are'], correctAnswerIndex: 0, explanation: 'He bilan "Does he work...?"' },
                        { id: 'en-a1-u2-l5-q2', question: '"Do they live here?" — "Yes, they _______."', options: ['do', 'does', 'are', 'live'], correctAnswerIndex: 0, explanation: 'Yes, they do.' },
                        { id: 'en-a1-u2-l5-q3', question: 'Where _______ she study?', options: ['does', 'do', 'is', 'are'], correctAnswerIndex: 0, explanation: 'Where does she study?' },
                        { id: 'en-a1-u2-l5-q4', question: '_______ you like chocolate ice cream?', options: ['Do', 'Does', 'Are', 'Have'], correctAnswerIndex: 0, explanation: 'Do you like...?' }
                    ]
                }
            }
        ]
    },

    // Unit 3: Daily Life, Time & Food
    {
        id: 'en-a1-u3-l1',
        courseId: 'english-a1',
        unitId: 'en-a1-u3',
        unitTitle: 'Unit 3: Time, Food & Routines',
        language: 'en',
        level: 'A1',
        lessonNumber: 1,
        title: 'Telling Time & Daily Routines',
        description: 'Soatni aytish va kun tartibini ifodalash.',
        estimatedDurationMinutes: 12,
        icon: '⏰',
        steps: [
            {
                id: 'en-a1-u3-l1-s1',
                title: 'Soat va Vaqt',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'What time is it?',
                    explanation: 'Ingliz tilida vaqtni aytish: It is 7 o\'clock (Soat 7). At 7:00 AM (ertalab soat 7 da).',
                    vocabulary: [
                        { term: 'O\'clock', reading: '/əˈklɒk/', meaning: 'Aniq soat', exampleSentence: 'It is eight o\'clock.', exampleTranslation: 'Soat sakkiz.' },
                        { term: 'Morning', reading: '/ˈmɔː.nɪŋ/', meaning: 'Tong / Ertalab', exampleSentence: 'Good morning everyone.', exampleTranslation: 'Hammamizga xayrli tong.' },
                        { term: 'Wake up', reading: '/weɪk ʌp/', meaning: 'Uyg\'onmoq', exampleSentence: 'I wake up at 6:30.', exampleTranslation: 'Men soat 6:30 da uyg\'onaman.' }
                    ],
                    keyPoints: ['Vaqt oldidan "at" predlogi ishlatiladi: at 8 o\'clock, at noon.']
                }
            },
            {
                id: 'en-a1-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Vaqt predlogini tanlang.',
                    exercises: [
                        { id: 'en-a1-u3-l1-e1', type: 'multiple-choice', prompt: '"I start work _______ 9:00 AM."', options: ['at', 'in', 'on', 'to'], correctAnswer: 0, explanation: 'Aniq vaqt bilan "at" ishlatiladi: at 9:00 AM.' }
                    ]
                }
            },
            {
                id: 'en-a1-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Test savollariga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u3-l1-q1', question: 'What time _______ you usually have breakfast?', options: ['do', 'are', 'does', 'is'], correctAnswerIndex: 0, explanation: 'What time do you...?' },
                        { id: 'en-a1-u3-l1-q2', question: 'She goes to bed _______ 11:00 PM.', options: ['at', 'in', 'on', 'by'], correctAnswerIndex: 0, explanation: 'At 11:00 PM.' },
                        { id: 'en-a1-u3-l1-q3', question: '"Noon" so\'zining ma\'nosi nima?', options: ['Tush payti (12:00)', 'Yarim kecha', 'Tong', 'Oqshom'], correctAnswerIndex: 0, explanation: 'Noon — Tush vaqti (12:00).' },
                        { id: 'en-a1-u3-l1-q4', question: 'I exercise in the _______.', options: ['morning', 'clock', 'time', 'hour'], correctAnswerIndex: 0, explanation: 'In the morning (ertalab).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u3-l2',
        courseId: 'english-a1',
        unitId: 'en-a1-u3',
        unitTitle: 'Unit 3: Time, Food & Routines',
        language: 'en',
        level: 'A1',
        lessonNumber: 2,
        title: 'Food, Drinks & Cafe Ordering',
        description: 'Oziq-ovqatlar, ichimliklar va kafeda buyurtma berish.',
        estimatedDurationMinutes: 12,
        icon: '☕',
        steps: [
            {
                id: 'en-a1-u3-l2-s1',
                title: 'Taomlar va Ichimliklar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Ordering Food and Drinks',
                    explanation: 'Kafeda buyurtma berishda: "Can I have... please?" yoki "I would like (I\'d like)..." ishlatiladi.',
                    vocabulary: [
                        { term: 'Coffee', reading: '/ˈkɒf.i/', meaning: 'Qahva', exampleSentence: 'A cup of black coffee, please.', exampleTranslation: 'Iltimos, bir finjon qora qahva.' },
                        { term: 'Tea', reading: '/tiː/', meaning: 'Choy', exampleSentence: 'Do you prefer green tea?', exampleTranslation: 'Ko\'k choyni ma\'qul ko\'rasizmi?' },
                        { term: 'Water', reading: '/ˈwɔː.tər/', meaning: 'Suv', exampleSentence: 'A bottle of mineral water.', exampleTranslation: 'Bir shisha mineral suv.' },
                        { term: 'Bread', reading: '/bred/', meaning: 'Non', exampleSentence: 'Fresh bread is delicious.', exampleTranslation: 'Yangi yopilgan non mazali.' }
                    ],
                    keyPoints: ['Can I have a coffee, please? — Qahva bersangiz, iltimos.']
                }
            },
            {
                id: 'en-a1-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Buyurtma iborasini tanlang.',
                    exercises: [
                        { id: 'en-a1-u3-l2-e1', type: 'multiple-choice', prompt: '"I would _______ a cup of tea, please."', options: ['like', 'want to', 'likes', 'liking'], correctAnswer: 0, explanation: 'I would like... (Iltimos, menga ... bersangiz).' }
                    ]
                }
            },
            {
                id: 'en-a1-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u3-l2-q1', question: 'How much _______ this sandwich?', options: ['is', 'are', 'am', 'do'], correctAnswerIndex: 0, explanation: 'How much is this sandwich?' },
                        { id: 'en-a1-u3-l2-q2', question: 'Can I _______ the bill, please?', options: ['have', 'make', 'do', 'be'], correctAnswerIndex: 0, explanation: 'Can I have the bill, please? (Hisobni keltirsangiz).' },
                        { id: 'en-a1-u3-l2-q3', question: '"Delicious" so\'zining ma\'nosi nima?', options: ['Mazali / Shiringina', 'Sho\'r', 'Achchiq', 'Eski'], correctAnswerIndex: 0, explanation: 'Delicious — Mazali.' },
                        { id: 'en-a1-u3-l2-q4', question: 'I drink two glasses of _______ every day.', options: ['water', 'bread', 'meat', 'rice'], correctAnswerIndex: 0, explanation: 'Glasses of water (Suv stakanlari).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u3-l3',
        courseId: 'english-a1',
        unitId: 'en-a1-u3',
        unitTitle: 'Unit 3: Time, Food & Routines',
        language: 'en',
        level: 'A1',
        lessonNumber: 3,
        title: 'Rooms in a House & Prepositions of Place',
        description: 'Uy xonalari va joylashuv predloglari (in, on, under).',
        estimatedDurationMinutes: 12,
        icon: '🏠',
        steps: [
            {
                id: 'en-a1-u3-l3-s1',
                title: 'Uy va Predloglar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'In, On, Under, Next to',
                    explanation: 'Narsalarning qayerda ekanligini bildirish: in (ichida), on (ustida), under (ostida), next to (yonida).',
                    vocabulary: [
                        { term: 'Kitchen', reading: '/ˈkɪtʃ.ən/', meaning: 'Oshxona', exampleSentence: 'Mom is in the kitchen.', exampleTranslation: 'Ona oshxonada.' },
                        { term: 'Bedroom', reading: '/ˈbed.ruːm/', meaning: 'Yotoqxona', exampleSentence: 'The bed is in my bedroom.', exampleTranslation: 'Karavot yotoqxonamda.' },
                        { term: 'Table', reading: '/ˈteɪ.bəl/', meaning: 'Stol', exampleSentence: 'The key is on the table.', exampleTranslation: 'Kalit stol ustida.' }
                    ],
                    keyPoints: ['The book is on the desk.', 'The cat is under the chair.']
                }
            },
            {
                id: 'en-a1-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Joylashuv predlogini tanlang.',
                    exercises: [
                        { id: 'en-a1-u3-l3-e1', type: 'multiple-choice', prompt: '"The soup is _______ the bowl."', options: ['in', 'on', 'under', 'next'], correctAnswer: 0, explanation: 'Idishning ichida bo\'lgani uchun "in".' }
                    ]
                }
            },
            {
                id: 'en-a1-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u3-l3-q1', question: 'The shoes are _______ the bed.', options: ['under', 'in', 'at', 'into'], correctAnswerIndex: 0, explanation: 'Under the bed (karavot ostida).' },
                        { id: 'en-a1-u3-l3-q2', question: 'There is a picture _______ the wall.', options: ['on', 'in', 'under', 'at'], correctAnswerIndex: 0, explanation: 'On the wall (devorda).' },
                        { id: 'en-a1-u3-l3-q3', question: '"Living room" so\'zining ma\'nosi nima?', options: ['Mehmonxona / Zal', 'Hammom', 'Oshxona', 'Garaj'], correctAnswerIndex: 0, explanation: 'Living room — Mehmonxona.' },
                        { id: 'en-a1-u3-l3-q4', question: 'The supermarket is next _______ the bank.', options: ['to', 'at', 'of', 'in'], correctAnswerIndex: 0, explanation: 'Next to (yonida).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u3-l4',
        courseId: 'english-a1',
        unitId: 'en-a1-u3',
        unitTitle: 'Unit 3: Time, Food & Routines',
        language: 'en',
        level: 'A1',
        lessonNumber: 4,
        title: 'Places in Town & Giving Simple Directions',
        description: 'Shahardagi asosiy joylar va yo\'nalish so\'rash.',
        estimatedDurationMinutes: 12,
        icon: '🗺️',
        steps: [
            {
                id: 'en-a1-u3-l4-s1',
                title: 'Shahar va Yo\'nalishlar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Places in Town & Directions',
                    explanation: 'Shahar bo\'ylab harakatlanish: Turn left (chapga buring), Turn right (o\'ngga buring), Go straight (to\'g\'riga yuring).',
                    vocabulary: [
                        { term: 'Hospital', reading: '/ˈhɒs.pɪ.təl/', meaning: 'Shifoxona', exampleSentence: 'The hospital is near here.', exampleTranslation: 'Shifoxona shu yaqinda.' },
                        { term: 'Bank', reading: '/bæŋk/', meaning: 'Bank', exampleSentence: 'Where is the nearest bank?', exampleTranslation: 'Eng yaqin bank qayerda?' },
                        { term: 'Turn left', reading: '/tɜːn left/', meaning: 'Chapga burilmoq', exampleSentence: 'Turn left at the traffic lights.', exampleTranslation: 'Svetoforda chapga buring.' }
                    ]
                }
            },
            {
                id: 'en-a1-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Yo\'nalish so\'zini tanlang.',
                    exercises: [
                        { id: 'en-a1-u3-l4-e1', type: 'multiple-choice', prompt: '"To\'g\'riga boring" iborasini tanlang:', options: ['Go straight', 'Turn left', 'Turn back', 'Go under'], correctAnswer: 0, explanation: 'Go straight — To\'g\'riga yuring.' }
                    ]
                }
            },
            {
                id: 'en-a1-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Testni yeching.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u3-l4-q1', question: 'Excuse me, _______ is the library?', options: ['where', 'what', 'who', 'when'], correctAnswerIndex: 0, explanation: 'Where is the library?' },
                        { id: 'en-a1-u3-l4-q2', question: 'Turn _______ at the corner to find the pharmacy.', options: ['right', 'straight', 'direct', 'up'], correctAnswerIndex: 0, explanation: 'Turn right (o\'ngga buring).' },
                        { id: 'en-a1-u3-l4-q3', question: '"Airport" so\'zining ma\'nosi:', options: ['Aeroport', 'Temiryo\'l vokzali', 'Avtobus bekati', 'Mehmonxona'], correctAnswerIndex: 0, explanation: 'Airport — Aeroport.' },
                        { id: 'en-a1-u3-l4-q4', question: 'It is opposite _______ the park.', options: ['to', 'of', 'in', 'no preposition'], correctAnswerIndex: 3, explanation: 'Opposite the park (to\'g\'risida).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u3-l5',
        courseId: 'english-a1',
        unitId: 'en-a1-u3',
        unitTitle: 'Unit 3: Time, Food & Routines',
        language: 'en',
        level: 'A1',
        lessonNumber: 5,
        title: 'Weather & Seasons',
        description: 'Ob-havo va yil fasllari haqida suhbatlashish.',
        estimatedDurationMinutes: 10,
        icon: '☀️',
        steps: [
            {
                id: 'en-a1-u3-l5-s1',
                title: 'Ob-havo Leksikasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'What\'s the weather like?',
                    explanation: 'Ob-havoni tasvirlash: It is sunny (quyoshli), It is rainy (yomg\'irli), It is cold (sovuq).',
                    vocabulary: [
                        { term: 'Sunny', reading: '/ˈsʌn.i/', meaning: 'Quyoshli', exampleSentence: 'It is warm and sunny today.', exampleTranslation: 'Bugun iliq va quyoshli.' },
                        { term: 'Rainy', reading: '/ˈreɪ.ni/', meaning: 'Yomg\'irli', exampleSentence: 'Take an umbrella, it is rainy.', exampleTranslation: 'Soyabon oling, yomg\'ir yog\'yapti.' },
                        { term: 'Summer', reading: '/ˈsʌm.ər/', meaning: 'Yoz fasli', exampleSentence: 'Summer is my favorite season.', exampleTranslation: 'Yoz mening sevimli faslim.' }
                    ]
                }
            },
            {
                id: 'en-a1-u3-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 3,
                practiceData: {
                    instructions: 'Ob-havo so\'zini tanlang.',
                    exercises: [
                        { id: 'en-a1-u3-l5-e1', type: 'multiple-choice', prompt: '"Qorli ob-havo" qanday ataladi?', options: ['Snowy', 'Sunny', 'Windy', 'Cloudy'], correctAnswer: 0, explanation: 'Snowy — Qorli.' }
                    ]
                }
            },
            {
                id: 'en-a1-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 3,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u3-l5-q1', question: 'It is very _______ in winter.', options: ['cold', 'hot', 'warm', 'sunny'], correctAnswerIndex: 0, explanation: 'Qishda sovuq: cold.' },
                        { id: 'en-a1-u3-l5-q2', question: 'How many _______ are there in a year?', options: ['seasons', 'season', 'weather', 'clouds'], correctAnswerIndex: 0, explanation: 'Four seasons in a year.' },
                        { id: 'en-a1-u3-l5-q3', question: '"Spring" qaysi fasl?', options: ['Bahor', 'Kuz', 'Yoz', 'Qish'], correctAnswerIndex: 0, explanation: 'Spring — Bahor.' },
                        { id: 'en-a1-u3-l5-q4', question: 'It is _______ today, so wear a warm jacket.', options: ['windy and cold', 'hot and sunny', 'warm', 'summer'], correctAnswerIndex: 0, explanation: 'Windy and cold.' }
                    ]
                }
            }
        ]
    },

    // Unit 4: Skills, Modals & Reading
    {
        id: 'en-a1-u4-l1',
        courseId: 'english-a1',
        unitId: 'en-a1-u4',
        unitTitle: 'Unit 4: Hobbies & Practical Skills',
        language: 'en',
        level: 'A1',
        lessonNumber: 1,
        title: 'Modal Verb: Can for Ability & Permission',
        description: 'Imkoniyat va qobiliyatni ifodalash (I can swim).',
        estimatedDurationMinutes: 12,
        icon: '🏊',
        steps: [
            {
                id: 'en-a1-u4-l1-s1',
                title: 'Can / Can\'t Qoidasi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Can and Can\'t',
                    explanation: 'Biror ishni bajara olish qobiliyati yoki ruxsat uchun "can" ishlatiladi. Barcha shaxslar uchun shakli bir xil.',
                    keyPoints: ['I can speak English.', 'He can swim.', 'Can you help me?'],
                    vocabulary: [
                        { term: 'Swim', reading: '/swɪm/', meaning: 'Suzmoq', exampleSentence: 'I can swim fast.', exampleTranslation: 'Men tez suza olaman.' },
                        { term: 'Drive', reading: '/draɪv/', meaning: 'Haydamoq', exampleSentence: 'Can you drive a car?', exampleTranslation: 'Mashina hayday olasizmi?' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'en-a1-u4-l1-e1', type: 'multiple-choice', prompt: '"She _______ (can) play the piano beautifully."', options: ['can', 'cans', 'can to', 'is can'], correctAnswer: 0, explanation: 'Can fe\'li o\'zgarmaydi: She can play.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u4-l1-q1', question: 'I _______ speak French, but I can speak English.', options: ['can\'t', 'am not', 'don\'t can', 'no'], correctAnswerIndex: 0, explanation: 'I can\'t speak French.' },
                        { id: 'en-a1-u4-l1-q2', question: '_______ you swim across the river?', options: ['Can', 'Do', 'Are', 'Is'], correctAnswerIndex: 0, explanation: 'Can you swim...?' },
                        { id: 'en-a1-u4-l1-q3', question: 'He can _______ very fast.', options: ['run', 'runs', 'to run', 'running'], correctAnswerIndex: 0, explanation: 'Can dan keyin oddiy fe\'l keladi: run.' },
                        { id: 'en-a1-u4-l1-q4', question: '"Can I open the window?" nima ma\'noni bildiradi?', options: ['Derazani ochsam maylimi? (Ruxsat)', 'Deraza ochiqmi?', 'Derazani kim ochdi?', 'Deraza buzilganmi?'], correctAnswerIndex: 0, explanation: 'Ruxsat so\'rash iborasi.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u4-l2',
        courseId: 'english-a1',
        unitId: 'en-a1-u4',
        unitTitle: 'Unit 4: Hobbies & Practical Skills',
        language: 'en',
        level: 'A1',
        lessonNumber: 2,
        title: 'Hobbies & Free Time Activities',
        description: 'Qiziqishlar va bo\'sh vaqtdagi mashg\'ulotlar haqida so\'zlashuv.',
        estimatedDurationMinutes: 12,
        icon: '🎨',
        steps: [
            {
                id: 'en-a1-u4-l2-s1',
                title: 'Qiziqishlar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Hobbies & Interests',
                    explanation: 'Bo\'sh vaqtda nimalar bilan shug\'ullanish: I like reading books, playing video games, listening to music.',
                    vocabulary: [
                        { term: 'Music', reading: '/ˈmjuː.zɪk/', meaning: 'Musiqa', exampleSentence: 'I listen to classical music.', exampleTranslation: 'Men mumtoz musiqa tinglayman.' },
                        { term: 'Travel', reading: '/ˈtræv.əl/', meaning: 'Sayohat qilmoq', exampleSentence: 'They love to travel in summer.', exampleTranslation: 'Ular yozda sayohat qilishni yaxshi ko\'radi.' },
                        { term: 'Cooking', reading: '/ˈkʊk.ɪŋ/', meaning: 'Pazandachilik', exampleSentence: 'Cooking is my relaxing hobby.', exampleTranslation: 'Ovqat pishirish mening hordiq chiqaruvchi mashg\'ulotim.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri birikmani tanlang.',
                    exercises: [
                        { id: 'en-a1-u4-l2-e1', type: 'multiple-choice', prompt: '"I like _______ to music in the evening."', options: ['listening', 'listen', 'listens', 'to listening'], correctAnswer: 0, explanation: 'Like listening to music.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u4-l2-q1', question: 'What are your _______ in your free time?', options: ['hobbies', 'hobby', 'works', 'jobs'], correctAnswerIndex: 0, explanation: 'What are your hobbies?' },
                        { id: 'en-a1-u4-l2-q2', question: 'He likes playing _______ on weekends.', options: ['football', 'a football', 'the footballs', 'footballing'], correctAnswerIndex: 0, explanation: 'Play football.' },
                        { id: 'en-a1-u4-l2-q3', question: '"Free time" nimani bildiradi?', options: ['Bo\'sh vaqt', 'Ish vaqti', 'Ertalabki vaqt', 'Dars vaqti'], correctAnswerIndex: 0, explanation: 'Free time — Bo\'sh vaqt.' },
                        { id: 'en-a1-u4-l2-q4', question: 'She enjoys _______ photographs of nature.', options: ['taking', 'take', 'takes', 'took'], correctAnswerIndex: 0, explanation: 'Enjoy taking photographs.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u4-l3',
        courseId: 'english-a1',
        unitId: 'en-a1-u4',
        unitTitle: 'Unit 4: Hobbies & Practical Skills',
        language: 'en',
        level: 'A1',
        lessonNumber: 3,
        title: 'A1 Reading: My Daily Life',
        description: 'Qisqa sodda matnni o\'qish va savollarga javob berish.',
        estimatedDurationMinutes: 12,
        icon: '📖',
        steps: [
            {
                id: 'en-a1-u4-l3-s1',
                title: 'Matnni O\'qish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Reading Passage: Anvar\'s Daily Routine',
                    explanation: 'Quyidagi matnni diqqat bilan o\'qing va tushuning.',
                    keyPoints: [
                        'Anvar is a 20-year-old student from Tashkent.',
                        'He wakes up at 7:00 AM and drinks green tea.',
                        'He takes the metro to university at 8:15 AM.',
                        'In the evening, he plays chess with his brother and reads books.'
                    ],
                    vocabulary: [
                        { term: 'Routine', reading: '/ruːˈtiːn/', meaning: 'Kun tartibi', exampleSentence: 'A healthy routine is good.', exampleTranslation: 'Sog\'lom kun tartibi foydali.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l3-s2',
                title: 'Matn Savollari',
                type: 'practice',
                estimatedMinutes: 3,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'en-a1-u4-l3-e1', type: 'multiple-choice', prompt: 'How does Anvar go to university?', options: ['By metro', 'By car', 'On foot', 'By bicycle'], correctAnswer: 0, explanation: 'Matnda "takes the metro" deyilgan.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Matn bo\'yicha test savollariga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u4-l3-q1', question: 'What time does Anvar wake up?', options: ['7:00 AM', '8:15 AM', '6:00 AM', '9:00 AM'], correctAnswerIndex: 0, explanation: 'He wakes up at 7:00 AM.' },
                        { id: 'en-a1-u4-l3-q2', question: 'What does he drink in the morning?', options: ['Green tea', 'Coffee', 'Orange juice', 'Milk'], correctAnswerIndex: 0, explanation: 'Drinks green tea.' },
                        { id: 'en-a1-u4-l3-q3', question: 'What game does he play in the evening?', options: ['Chess', 'Football', 'Tennis', 'Basketball'], correctAnswerIndex: 0, explanation: 'Plays chess with his brother.' },
                        { id: 'en-a1-u4-l3-q4', question: 'Where is Anvar from?', options: ['Tashkent', 'London', 'Samarkand', 'New York'], correctAnswerIndex: 0, explanation: 'Student from Tashkent.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u4-l4',
        courseId: 'english-a1',
        unitId: 'en-a1-u4',
        unitTitle: 'Unit 4: Hobbies & Practical Skills',
        language: 'en',
        level: 'A1',
        lessonNumber: 4,
        title: 'A1 Listening: Dialogues at the Grocery Store',
        description: 'Do\'konda xarid qilish suhbatini tinglab tushunish.',
        estimatedDurationMinutes: 12,
        icon: '🎧',
        steps: [
            {
                id: 'en-a1-u4-l4-s1',
                title: 'Suhbat Matni',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Dialogue: At the Grocery Store',
                    explanation: 'Kassir va xaridor o\'rtasidagi suhbat.',
                    keyPoints: [
                        'Cashier: "Good afternoon! Can I help you?"',
                        'Customer: "Yes, I need two bottles of milk and one loaf of bread."',
                        'Cashier: "That will be 5 dollars in total."',
                        'Customer: "Here you go. Thank you!"'
                    ],
                    vocabulary: [
                        { term: 'Bottle', reading: '/ˈbɒt.əl/', meaning: 'Shisha idish', exampleSentence: 'A bottle of milk.', exampleTranslation: 'Bir shisha sut.' },
                        { term: 'Total', reading: '/ˈtəʊ.təl/', meaning: 'Jami summa', exampleSentence: 'How much in total?', exampleTranslation: 'Jami qancha bo\'ladi?' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Suhbat bo\'yicha savollarga javob bering.',
                    exercises: [
                        { id: 'en-a1-u4-l4-e1', type: 'multiple-choice', prompt: 'How much is the total price?', options: ['5 dollars', '10 dollars', '2 dollars', '15 dollars'], correctAnswer: 0, explanation: 'That will be 5 dollars in total.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u4-l4-q1', question: 'How many bottles of milk did the customer buy?', options: ['Two', 'One', 'Three', 'Four'], correctAnswerIndex: 0, explanation: 'Two bottles of milk.' },
                        { id: 'en-a1-u4-l4-q2', question: 'What else did the customer buy besides milk?', options: ['A loaf of bread', 'Apples', 'Coffee', 'Cheese'], correctAnswerIndex: 0, explanation: 'One loaf of bread.' },
                        { id: 'en-a1-u4-l4-q3', question: '"Here you go" iborasi qachon ishlatiladi?', options: ['Pul yoki buyumni uzatayotganda', 'Salomlashganda', 'Xayrlashganda', 'Kechirim so\'raganda'], correctAnswerIndex: 0, explanation: 'Buyumni uzatganda "Marhamat".' },
                        { id: 'en-a1-u4-l4-q4', question: 'Where does the conversation take place?', options: ['In a grocery store', 'At the airport', 'In a hospital', 'At a car station'], correctAnswerIndex: 0, explanation: 'In a grocery store.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'en-a1-u4-l5',
        courseId: 'english-a1',
        unitId: 'en-a1-u4',
        unitTitle: 'Unit 4: Hobbies & Practical Skills',
        language: 'en',
        level: 'A1',
        lessonNumber: 5,
        title: 'A1 Capstone Review & Self-Introduction',
        description: 'A1 darajasini umumlashtirish va o\'zini tanishtirish nutqi.',
        estimatedDurationMinutes: 15,
        icon: '🎓',
        steps: [
            {
                id: 'en-a1-u4-l5-s1',
                title: 'O\'zini Tanishtirish Namunalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Self-Introduction Template',
                    explanation: 'A1 darajasida to\'liq o\'zini tanishtirish strukturasi.',
                    keyPoints: [
                        'Name & Origin: "Hello, my name is Jasur and I am from Uzbekistan."',
                        'Profession/Study: "I am a student at university."',
                        'Hobbies: "In my free time, I like playing football and reading."',
                        'Routine: "I wake up at 7:00 and study English every day."'
                    ],
                    vocabulary: [
                        { term: 'Introduce', reading: '/ˌɪn.trəˈdʒuːs/', meaning: 'Tanishtirmoq', exampleSentence: 'Let me introduce myself.', exampleTranslation: 'O\'zimni tanishtirishga ijozat bering.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'O\'zini tanishtirishdagi to\'g\'ri jumlalarni aniqlang.',
                    exercises: [
                        { id: 'en-a1-u4-l5-e1', type: 'multiple-choice', prompt: '"Let me _______ myself."', options: ['introduce', 'introducing', 'introduced', 'introduces'], correctAnswer: 0, explanation: 'Let me introduce myself.' }
                    ]
                }
            },
            {
                id: 'en-a1-u4-l5-s3',
                title: 'A1 Yakuniy Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'A1 darajasini to\'liq tasdiqlash uchun yakuniy test savollariga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'en-a1-u4-l5-q1', question: 'Which sentence is grammatically correct?', options: ['She lives in London with her family.', 'She live in London with her family.', 'She is live in London.', 'She living in London.'], correctAnswerIndex: 0, explanation: 'She lives in London.' },
                        { id: 'en-a1-u4-l5-q2', question: 'Do you _______ a cup of coffee?', options: ['want', 'wants', 'wanting', 'is want'], correctAnswerIndex: 0, explanation: 'Do you want...?' },
                        { id: 'en-a1-u4-l5-q3', question: 'There are _______ books on the shelf.', options: ['many', 'much', 'a', 'an'], correctAnswerIndex: 0, explanation: 'Many books (ko\'p kitoblar).' },
                        { id: 'en-a1-u4-l5-q4', question: 'He _______ swim very well.', options: ['can', 'cans', 'is can', 'can to'], correctAnswerIndex: 0, explanation: 'He can swim.' }
                    ]
                }
            }
        ]
    }
];
