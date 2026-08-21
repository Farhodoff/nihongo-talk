import { Lesson } from '../../types/lesson';

export const JAPANESE_N5_LESSONS: Lesson[] = [
    // Unit 1: Hiragana, Katakana & Basic Greetings
    {
        id: 'ja-n5-u1-l1',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u1',
        unitTitle: 'Unit 1: Writing Systems & Greetings',
        language: 'ja',
        level: 'N5',
        lessonNumber: 1,
        title: 'Hiragana Mastery: あ・い・う・え・お & Greetings',
        description: 'Xiragana alifbosining asosiy unlilari va kundalik salomlashish iboralari.',
        estimatedDurationMinutes: 12,
        icon: '🎌',
        steps: [
            {
                id: 'ja-n5-u1-l1-s1',
                title: 'Unlilar va Salomlashish',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Xiragana Asosiy Tovushlari',
                    subtitle: 'あ (a), い (i), う (u), え (e), お (o)',
                    explanation: 'Yapon tili fonetikasining asosi 5 ta asosiy unli tovushdan iborat: A, I, U, E, O.',
                    keyPoints: [
                        'あ (a) — ochiq "a" tovushi',
                        'い (i) — "i" tovushi',
                        'う (u) — lablarni cho\'chaytirmasdan aytiladigan "u"',
                        'え (e) — "e" tovushi',
                        'お (o) — "o" tovushi'
                    ],
                    vocabulary: [
                        { term: 'こんにちは', reading: 'Konnichiwa', meaning: 'Assalomu alaykum / Xayrli kun', exampleSentence: 'こんにちは、田中[たなか]さん。', exampleTranslation: 'Assalomu alaykum, Tanaka san.' },
                        { term: 'おはようございます', reading: 'Ohayou gozaimasu', meaning: 'Xayrli tong', exampleSentence: '先生[せんせい]、おはようございます。', exampleTranslation: 'Ustoz, xayrli tong.' },
                        { term: 'ありがとう', reading: 'Arigatou', meaning: 'Rahmat', exampleSentence: 'どうも ありがとう。', exampleTranslation: 'Katta rahmat.' },
                        { term: 'さようなら', reading: 'Sayounara', meaning: 'Xayr', exampleSentence: 'みなさん、さようなら。', exampleTranslation: 'Hammamizga xayr.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri o\'qilishini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u1-l1-e1', type: 'multiple-choice', prompt: '「あ」harfining to\'g\'ri talaffuzi qaysi?', options: ['A', 'I', 'U', 'O'], correctAnswer: 0, explanation: '「あ」— A tovushi.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u1-l1-q1', question: 'Ertalab ko\'rishganda qanday salomlashiladi?', options: ['おはようございます', 'こんばんは', 'さようなら', 'おやすみなさい'], correctAnswerIndex: 0, explanation: 'Ohayou gozaimasu — Xayrli tong.' },
                        { id: 'ja-n5-u1-l1-q2', question: '「ありがとう」so\'zining ma\'nosi nima?', options: ['Rahmat', 'Kechirasiz', 'Xayrli tun', 'Xush kelibsiz'], correctAnswerIndex: 0, explanation: 'Arigatou — Rahmat.' },
                        { id: 'ja-n5-u1-l1-q3', question: 'Xiraganada "I" qanday yoziladi?', options: ['い', 'あ', 'う', 'え'], correctAnswerIndex: 0, explanation: 'い — I.' },
                        { id: 'ja-n5-u1-l1-q4', question: 'Kechqurun ko\'rishganda aytiladigan salomlashuv:', options: ['こんばんは (Konbanwa)', 'おはよう', 'さようなら', 'いただきます'], correctAnswerIndex: 0, explanation: 'Konbanwa — Xayrli kech.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u1-l2',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u1',
        unitTitle: 'Unit 1: Writing Systems & Greetings',
        language: 'ja',
        level: 'N5',
        lessonNumber: 2,
        title: 'Katakana Essentials & Common Loanwords',
        description: 'Katakana alifbosi va chet tilidan kirib kelgan so\'zlar (Gairaigo).',
        estimatedDurationMinutes: 12,
        icon: '🔤',
        steps: [
            {
                id: 'ja-n5-u1-l2-s1',
                title: 'Katakana va O\'zlashma So\'zlar',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Katakana Asoslari',
                    explanation: 'Katakana chet el nomlari, xorijiy so\'zlar va texnologik atamalarni yozish uchun xizmat qiladi.',
                    vocabulary: [
                        { term: 'コーヒー', reading: 'Koohii', meaning: 'Qahva (Coffee)', exampleSentence: 'コーヒーを 飲[の]みます。', exampleTranslation: 'Qahva ichaman.' },
                        { term: 'パン', reading: 'Pan', meaning: 'Non (portugalcha pão)', exampleSentence: '朝[あさ]ごはんに パンを 食[た]べます。', exampleTranslation: 'Nonushtaga non yeyman.' },
                        { term: 'テレビ', reading: 'Terebi', meaning: 'Televizor', exampleSentence: 'テレビを 見[み]ます。', exampleTranslation: 'Televizor ko\'raman.' },
                        { term: 'ホテル', reading: 'Hoteru', meaning: 'Mehmonxona (Hotel)', exampleSentence: 'ホテルに 泊[と]まります。', exampleTranslation: 'Mehmonxonada tunayman.' }
                    ],
                    keyPoints: ['Cho\'ziq unlilar Katakanada chiziqcha (ー) bilan ifodalanadi: コーヒー (koohii).']
                }
            },
            {
                id: 'ja-n5-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Katakana so\'zining ma\'nosini toping.',
                    exercises: [
                        { id: 'ja-n5-u1-l2-e1', type: 'multiple-choice', prompt: '「コーヒー」so\'zi nimani bildiradi?', options: ['Qahva', 'Choy', 'Suv', 'Sut'], correctAnswer: 0, explanation: 'Koohii — Qahva.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u1-l2-q1', question: 'Katakana alifbosi nima uchun ishlatiladi?', options: ['Chet tildan kirib kelgan so\'zlar va xorijiy ismlar uchun', 'Faqat xitoycha qadimgi so\'zlar uchun', 'Faqat sonlar uchun', 'Faqat fe\'llar uchun'], correctAnswerIndex: 0, explanation: 'Xorijiy so\'zlar va ismlar uchun.' },
                        { id: 'ja-n5-u1-l2-q2', question: '「テレビ」so\'zining ma\'nosi nima?', options: ['Televizor', 'Telefon', 'Kompyuter', 'Radio'], correctAnswerIndex: 0, explanation: 'Terebi — Televizor.' },
                        { id: 'ja-n5-u1-l2-q3', question: 'Katakanadagi cho\'ziq unli belgisi qaysi?', options: ['ー', '〜', '・', '、'], correctAnswerIndex: 0, explanation: 'ー cho\'ziq unli belgisi.' },
                        { id: 'ja-n5-u1-l2-q4', question: '「レストラン」so\'zi nimani anglatadi?', options: ['Restoran', 'Magazin', 'Kutubxona', 'Maktab'], correctAnswerIndex: 0, explanation: 'Resutoran — Restoran.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u1-l3',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u1',
        unitTitle: 'Unit 1: Writing Systems & Greetings',
        language: 'ja',
        level: 'N5',
        lessonNumber: 3,
        title: 'Basic Grammar: Noun + です / ではありません (Affirmative & Negative)',
        description: 'Ot kesim gaplar: ~dir (desu) va ~emasdir (dewa arimasen).',
        estimatedDurationMinutes: 12,
        icon: '📋',
        steps: [
            {
                id: 'ja-n5-u1-l3-s1',
                title: 'です va ではありません',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'A は B です',
                    explanation: 'AはBです = A bu B dir. Inkor shakli: AはBではありません (yoki じゃありません) = A bu B emasdir.',
                    keyPoints: [
                        '私[わたし]は 学生[がくせい]です。 (Men talabaman.)',
                        '田中[たなか]さんは 先生[せんせい]ではありません。 (Tanaka san o\'qituvchi emas.)'
                    ],
                    vocabulary: [
                        { term: '私[わたし]', reading: 'Watashi', meaning: 'Men', exampleSentence: '私[わたし]は アリです。', exampleTranslation: 'Men Aliman.' },
                        { term: '学生[がくせい]', reading: 'Gakusei', meaning: 'Talaba / O\'quvchi', exampleSentence: '彼[かれ]は 学生[がくせい]です。', exampleTranslation: 'U talabadir.' },
                        { term: '先生[せんせい]', reading: 'Sensei', meaning: 'O\'qituvchi / Ustoz', exampleSentence: '田中[たなか]先生[せんせい]。', exampleTranslation: 'Tanaka ustoz.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri inkor shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u1-l3-e1', type: 'multiple-choice', prompt: '「私[わたし]は 医者[いしゃ]_______。」 (Men shifokor emasman)', options: ['ではありません', 'です', 'でした', 'ます'], correctAnswer: 0, explanation: 'ではありません (dewa arimasen) — inkor shakli.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u1-l3-q1', question: '「私[わたし]は 学生[がくせい]です」nimani bildiradi?', options: ['Men talabaman', 'Men o\'qituvchiman', 'Men shifokorman', 'Men talaba emasman'], correctAnswerIndex: 0, explanation: 'Men talabaman.' },
                        { id: 'ja-n5-u1-l3-q2', question: 'Yapon tilida so\'roq qo\'shimchasi qaysi?', options: ['か (ka)', 'ね (ne)', 'よ (yo)', 'の (no)'], correctAnswerIndex: 0, explanation: 'Gap oxirida "ka" so\'roq bildiradi.' },
                        { id: 'ja-n5-u1-l3-q3', question: '「田中[たなか]さんは 日本人[にほんじん]ですか」— «はい、_______。»', options: ['日本人[にほんじん]です', '日本人[にほんじん]ではありません', '学生[がくせい]ではありません', 'いいえ'], correctAnswerIndex: 0, explanation: 'Ha, yaponiyalik: Nihonjin desu.' },
                        { id: 'ja-n5-u1-l3-q4', question: '「じゃありません」qaysi ifodaning og\'zaki so\'zlashuv shakli?', options: ['ではありません', 'でした', 'です', 'ます'], correctAnswerIndex: 0, explanation: 'ではありません ning so\'zlashuv shakli.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u1-l4',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u1',
        unitTitle: 'Unit 1: Writing Systems & Greetings',
        language: 'ja',
        level: 'N5',
        lessonNumber: 4,
        title: 'Demonstratives: これ, それ, あれ, どれ (Ko-So-A-Do)',
        description: 'Yaqin, o\'rtacha va uzoqdagi buyumlarni ko\'rsatish olmoshlari.',
        estimatedDurationMinutes: 12,
        icon: '👉',
        steps: [
            {
                id: 'ja-n5-u1-l4-s1',
                title: 'Ko-So-A-Do Tizimi',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'これ, それ, あれ, どれ',
                    explanation: 'これ (kore) — gapiruvchiga yaqin ("bu"). それ (sore) — tinglovchiga yaqin ("u"). あれ (are) — ikkalasidan ham uzoqda ("ana u"). どれ (dore) — so\'roq ("qaysi biri?").',
                    keyPoints: [
                        'これは 私[わたし]の 本[ほん]です。 (Bu mening kitobim.)',
                        'あれは 車[くるま]です。 (Ana u mashinadir.)',
                        'どれが あなたの 傘[かさ]ですか。 (Qaysi biri sizning soyaboningiz?)'
                    ],
                    vocabulary: [
                        { term: '本[ほん]', reading: 'Hon', meaning: 'Kitob', exampleSentence: '日本語[にほんご]の 本[ほん]。', exampleTranslation: 'Yapon tili kitobi.' },
                        { term: '傘[かさ]', reading: 'Kasa', meaning: 'Soyabon', exampleSentence: 'これ は 傘[かさ]です。', exampleTranslation: 'Bu soyabondir.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri ko\'rsatish olmoshini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u1-l4-e1', type: 'multiple-choice', prompt: 'Ikkala suhbatdoshdan ham uzoqdagi narsaga nima deyiladi?', options: ['あれ (Are)', 'これ (Kore)', 'それ (Sore)', 'どれ (Dore)'], correctAnswer: 0, explanation: 'Uzoqdagi narsa: あれ (are).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u1-l4-q1', question: 'Qo\'lingizdagi buyumni ko\'rsatganda nima deysiz?', options: ['これ (Kore)', 'それ (Sore)', 'あれ (Are)', 'どれ (Dore)'], correctAnswerIndex: 0, explanation: 'Yaqindagi buyum: これ (Kore).' },
                        { id: 'ja-n5-u1-l4-q2', question: '«Qaysi biri sizning kalitingiz?» so\'rog\'i qanday bo\'ladi?', options: ['どれが あなたの 鍵[かぎ]ですか', 'これが 鍵[かぎ]です', 'あれは 鍵[かぎ]です', 'それ'], correctAnswerIndex: 0, explanation: 'どれ (dore) — Qaysi biri.' },
                        { id: 'ja-n5-u1-l4-q3', question: '「この本[ほん]」va「これ」o\'rtasidagi farq nima?', options: ['この dan keyin darhol ot keladi (kono hon), kore esa yakka o\'zi ishlatiladi', 'Farqi yo\'q', 'Kono fe\'ldir', 'Kore sifatdir'], correctAnswerIndex: 0, explanation: 'この + Ot (kono hon).' },
                        { id: 'ja-n5-u1-l4-q4', question: '「あれは 何[なん]ですか」ning tarjimasi:', options: ['Ana u nima?', 'Bu nima?', 'U qayerda?', 'Kim u?'], correctAnswerIndex: 0, explanation: 'Ana u nima?' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u1-l5',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u1',
        unitTitle: 'Unit 1: Writing Systems & Greetings',
        language: 'ja',
        level: 'N5',
        lessonNumber: 5,
        title: 'Possessive Particle: の (No) & Self Introductions (自己紹介)',
        description: 'Egalik va tegishlilik yuklamasi (No) hamda o\'zini tanishtirish.',
        estimatedDurationMinutes: 14,
        icon: '🤝',
        steps: [
            {
                id: 'ja-n5-u1-l5-s1',
                title: 'Egalik Yuklamasi の va Jikoshoukai',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'A の B (A ning B si)',
                    explanation: 'AのB = A ning B si. Shuningdek, qaysi sohaga tegishli ekanini bildiradi (e.g. 日本語[にほんご]の 先生[せんせい] = Yapon tili o\'qituvchisi).',
                    keyPoints: [
                        '初[はじ]めまして (Hajimemashite) — Tanishganimdan xursandman (suhbat boshida)',
                        'どうぞ よろしく お願[ねが]いします (Douzo yoroshiku onegaishimasu) — Menga marhamatli bo\'ling / Yaxshi munosabatda bo\'laylik'
                    ],
                    vocabulary: [
                        { term: '初[はじ]めまして', reading: 'Hajimemashite', meaning: 'Tanishganimdan xursandman', exampleSentence: '初[はじ]めまして、アリです。', exampleTranslation: 'Tanishganimdan xursandman, men Aliman.' },
                        { term: '車[くるま]', reading: 'Kuruma', meaning: 'Mashina', exampleSentence: '父[ちち]の 車[くるま]。', exampleTranslation: 'Otamning mashinasi.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri yuklamani tanlang.',
                    exercises: [
                        { id: 'ja-n5-u1-l5-e1', type: 'multiple-choice', prompt: '「これ は 私[わたし]_______ 鞄[かばん]です。」 (Bu mening sumkam)', options: ['の (no)', 'は (wa)', 'を (o)', 'に (ni)'], correctAnswer: 0, explanation: '私[わたし]の (watashi no) — Mening.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u1-l5-q1', question: '«Toshkent universiteti talabasi» yapon tilida qanday yoziladi?', options: ['タシケント大学[だいがく]の 学生[がくせい]', '学生[がくせい]の タシケント大学[だいがく]', 'タシケント大学[だいがく]は 学生[がくせい]', '学生[がくせい]は 大学[だいがく]'], correctAnswerIndex: 0, explanation: 'Toshkent daigaku no gakusei.' },
                        { id: 'ja-n5-u1-l5-q2', question: 'Tanishuv boshlanganda aytiladigan birinchi jumla:', options: ['初[はじ]めまして (Hajimemashite)', 'さようなら', 'おやすみなさい', 'いただきます'], correctAnswerIndex: 0, explanation: 'Hajimemashite.' },
                        { id: 'ja-n5-u1-l5-q3', question: '「どうぞ よろしく お願[ねが]いします」iborasi qachon ishlatiladi?', options: ['Tanishuv oxirida o\'zaro yaxshi munosabat tilaganda', 'Uxlashdan oldin', 'Ovqatlanib bo\'lgach', 'Birovni urishganda'], correctAnswerIndex: 0, explanation: 'Tanishuv oxirida.' },
                        { id: 'ja-n5-u1-l5-q4', question: '「誰[だれ]の 傘[かさ]ですか」savolining ma\'nosi:', options: ['Kimning soyaboni?', 'Bu nima?', 'Soyabon qayerda?', 'Qancha turadi?'], correctAnswerIndex: 0, explanation: 'Dare no kasa desu ka — Kimning soyaboni?' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Basic Particles, Locations & Places
    {
        id: 'ja-n5-u2-l1',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u2',
        unitTitle: 'Unit 2: Locations & Movement',
        language: 'ja',
        level: 'N5',
        lessonNumber: 1,
        title: 'Places & Direction Particles: ここ, そこ, あそこ & へ (E)',
        description: 'Joy nomlari va harakat yo\'nalishi yuklamasi (へ - e talaffuz qilinadi).',
        estimatedDurationMinutes: 12,
        icon: '📍',
        steps: [
            {
                id: 'ja-n5-u2-l1-s1',
                title: 'Joylar va Harakat Yuklamasi へ',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Harakat Yo\'nalishi: Joy + へ + 行きます',
                    explanation: 'Joylashuv: ここ (bu yer), そこ (u yer), あそこ (ana u yer), どこ (qayer?). Harakat yo\'nalishi: へ (e deb o\'qiladi): 日本[にほん]へ 行[い]きます (Yaponiyaga boraman).',
                    vocabulary: [
                        { term: '学校[がっこう]', reading: 'Gakkou', meaning: 'Maktab', exampleSentence: '学校[がっこう]へ 行[い]きます。', exampleTranslation: 'Maktabga boraman.' },
                        { term: '駅[えき]', reading: 'Eki', meaning: 'Vokzal / Stansiya', exampleSentence: '駅[えき]は どこですか。', exampleTranslation: 'Vokzal qayerda?' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri yuklamani tanlang.',
                    exercises: [
                        { id: 'ja-n5-u2-l1-e1', type: 'multiple-choice', prompt: '「明日[あした]、東京[とうきょう]_______ 行[い]きます。」', options: ['へ (e)', 'を (o)', 'が (ga)', 'で (de)'], correctAnswer: 0, explanation: 'Yo\'nalish: へ (e).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u2-l1-q1', question: '«Hojatxona qayerda?» yapon tilida qanday so\'raladi?', options: ['トイレは どこですか', 'トイレは これですか', 'トイレは 何[なん]ですか', 'トイレへ 行[い]きます'], correctAnswerIndex: 0, explanation: 'Toire wa doko desu ka.' },
                        { id: 'ja-n5-u2-l1-q2', question: 'Harakat yo\'nalishini bildiruvchi «へ» qanday talaffuz qilinadi?', options: ['E', 'He', 'Ha', 'Wa'], correctAnswerIndex: 0, explanation: 'Yuklama sifatida «e» o\'qiladi.' },
                        { id: 'ja-n5-u2-l1-q3', question: '「家[うち]へ 帰[かえ]ります」nimani anglatadi?', options: ['Uyga qaytaman', 'Maktabga boraman', 'Ishga boraman', 'Restoranga kiraman'], correctAnswerIndex: 0, explanation: 'Uyga qaytaman.' },
                        { id: 'ja-n5-u2-l1-q4', question: '«Ana u yer» qaysi so\'z?', options: ['あそこ (Asoko)', 'ここ (Koko)', 'そこ (Soko)', 'どこ (Doko)'], correctAnswerIndex: 0, explanation: 'あそこ — Ana u yer.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u2-l2',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u2',
        unitTitle: 'Unit 2: Locations & Movement',
        language: 'ja',
        level: 'N5',
        lessonNumber: 2,
        title: 'Verbs of Movement: 行きます, 来ます, 帰ります & Transportation (で)',
        description: 'Bormoq, kelmoq, qaytmoq fe\'llari va transport vositasi yuklamasi (de).',
        estimatedDurationMinutes: 12,
        icon: '🚆',
        steps: [
            {
                id: 'ja-n5-u2-l2-s1',
                title: 'Harakat Fe\'llari va Transport',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: 'Transport + で (bilan)',
                    explanation: 'Qaysi transportda borishni bildirish uchun で (de) yuklamasi qo\'yiladi: 電車[でんしゃ]で 行[い]きます (Poyezdda boraman). Piyoda borsa: 歩[ある]いて 行[い]きます (de ishlatilmaydi).',
                    vocabulary: [
                        { term: '電車[でんしゃ]', reading: 'Densha', meaning: 'Poyezd / Elektrichka', exampleSentence: '電車[でんしゃ]で 行[い]きます。', exampleTranslation: 'Poyezdda boraman.' },
                        { term: '飛行機[ひこうき]', reading: 'Hikouki', meaning: 'Samolyot', exampleSentence: '飛行機[ひこうき]で 来[き]ました。', exampleTranslation: 'Samolyotda keldim.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri yuklamani tanlang.',
                    exercises: [
                        { id: 'ja-n5-u2-l2-e1', type: 'multiple-choice', prompt: '「バス_______ 会社[かいしゃ]へ 行[い]きます。」 (Avtobusda kompaniyaga boraman)', options: ['で (de)', 'へ (e)', 'を (o)', 'に (ni)'], correctAnswer: 0, explanation: 'Transport vositasi: バスで (basu de).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u2-l2-q1', question: '«Piyoda maktabga boraman» jumlasi qaysi?', options: ['歩[ある]いて 学校[がっこう]へ 行[い]きます', '歩[ある]いてで 学校[がっこう]へ 行[い]きます', '車[くるま]で 行[い]きます', 'バスへ 行[い]きます'], correctAnswerIndex: 0, explanation: 'Aruite gakkou e ikimasu (de ishlatilmaydi).' },
                        { id: 'ja-n5-u2-l2-q2', question: '「来[き]ます (Kimasu)」fe\'lining ma\'nosi nima?', options: ['Kelmoq', 'Ketmoq / Bormoq', 'Qaytmoq', 'Yemoq'], correctAnswerIndex: 0, explanation: 'Kimasu — Kelmoq.' },
                        { id: 'ja-n5-u2-l2-q3', question: '«Kim bilan Yaponiyaga bordingiz?» so\'rog\'ida «bilan» yuklamasi qaysi?', options: ['と (to) — 誰[だれ]と', 'で (de)', 'を (o)', 'へ (e)'], correctAnswerIndex: 0, explanation: 'Inson bilan birga: と (to).' },
                        { id: 'ja-n5-u2-l2-q4', question: '「一人[ひとり]で」nimani anglatadi?', options: ['Bir o\'zi / Yolg\'iz', 'Do\'sti bilan', 'Oilasi bilan', 'Poyezdda'], correctAnswerIndex: 0, explanation: 'Hitori de — Yolg\'iz o\'zi.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u2-l3',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u2',
        unitTitle: 'Unit 2: Locations & Movement',
        language: 'ja',
        level: 'N5',
        lessonNumber: 3,
        title: 'Action Object Particle: を (O) & Basic Transitive Verbs',
        description: 'To\'ldiruvchi yuklamasi (を - o) va asosiy o\'timli fe\'llar (yemoq, ichmoq, ko\'rmoq).',
        estimatedDurationMinutes: 14,
        icon: '🍱',
        steps: [
            {
                id: 'ja-n5-u2-l3-s1',
                title: 'To\'ldiruvchi Yuklamasi を',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Ot + を + Fe\'l',
                    explanation: 'Ish-harakat qaysi narsaga qaratilgan bo\'lsa, unga を (o) yuklamasi qo\'shiladi.',
                    keyPoints: [
                        'ご飯[はん]を 食[た]べます。 (Ovqat yeyman.)',
                        '水[みず]を 飲[の]みます。 (Suv ichaman.)',
                        'テレビを 見[み]ます。 (Televizor ko\'raman.)',
                        '音楽[おんがく]を 聞[き]きます。 (Musiqa tinglayman.)'
                    ],
                    vocabulary: [
                        { term: '食[た]べます', reading: 'Tabemasu', meaning: 'Yemoq', exampleSentence: 'リンゴを 食[た]べます。', exampleTranslation: 'Olma yeyman.' },
                        { term: '飲[の]みます', reading: 'Nomimasu', meaning: 'Ichmoq', exampleSentence: 'お茶[ちゃ]を 飲[の]みます。', exampleTranslation: 'Choy ichaman.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri yuklamani tanlang.',
                    exercises: [
                        { id: 'ja-n5-u2-l3-e1', type: 'multiple-choice', prompt: '「私[わたし]は 本[ほん]_______ 読[よ]みます。」 (Men kitob o\'qiyman)', options: ['を (o)', 'は (wa)', 'へ (e)', 'で (de)'], correctAnswer: 0, explanation: 'Hon o yomimasu.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u2-l3-q1', question: '«Ertalab nima yeysiz?» savoli qanday bo\'ladi?', options: ['朝[あさ] 何[なに]を 食[た]べますか', '朝[あさ] どこへ 行[い]きますか', '朝[あさ] 誰[だれ]と 会[あ]いますか', '朝[あさ] 何時[なんじ]ですか'], correctAnswerIndex: 0, explanation: 'Asa nani o tabemasu ka.' },
                        { id: 'ja-n5-u2-l3-q2', question: '«Hech narsa yemayman» inkor jumlasi qaysi?', options: ['何[なに]も 食[た]べません', '何[なに]を 食[た]べます', '何[なに]が 食[た]べません', '食[た]べます'], correctAnswerIndex: 0, explanation: 'Nani mo tabemasen.' },
                        { id: 'ja-n5-u2-l3-q3', question: '「手紙[てがみ]を 書[か]きます」ning ma\'nosi:', options: ['Xat yozaman', 'Kitob o\'qiyman', 'Rasm chizaman', 'Xat o\'qiyman'], correctAnswerIndex: 0, explanation: 'Tegami o kakimasu — Xat yozaman.' },
                        { id: 'ja-n5-u2-l3-q4', question: '«Kafeda qahva ichaman» — Qaysi yuklamalar mos keladi?', options: ['カフェで コーヒーを 飲[の]みます', 'カフェへ コーヒーで 飲[の]みます', 'カフェに コーヒーが 飲[の]みます', 'カフェを コーヒーへ 飲[の]みます'], correctAnswerIndex: 0, explanation: 'Joyda harakat: で, to\'ldiruvchi: を.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u2-l4',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u2',
        unitTitle: 'Unit 2: Locations & Movement',
        language: 'ja',
        level: 'N5',
        lessonNumber: 4,
        title: 'Action Location: で (De) vs Existence Location: に (Ni)',
        description: 'Harakat sodir bo\'ladigan joy (de) va mavjudlik joylashuvi (ni) farqlari.',
        estimatedDurationMinutes: 14,
        icon: '⚖️',
        steps: [
            {
                id: 'ja-n5-u2-l4-s1',
                title: 'で va に Farqi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Action Place (で) vs Existence Place (に)',
                    explanation: '1. Agar joyda biror faol harakat qilinsa (o\'qimoq, ovqatlanmoq, ishlamoq) -> で (de) ishlatiladi: 図書館[としょかん]で 勉強[べんきょう]します. 2. Agar shunchaki biror narsa yoki inson mavjud bo\'lsa (arimasu / imasu) -> に (ni) ishlatiladi: 部屋[へや]に 机[つくえ]が あります.',
                    keyPoints: [
                        'レストランで 食[た]べます (Restoranda ovqatlanaman -> Harakat = で)',
                        '机[つくえ]の 上[うえ]に 本[ほん]が あります (Stol ustida kitob bor -> Mavjudlik = に)'
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri yuklamani tanlang.',
                    exercises: [
                        { id: 'ja-n5-u2-l4-e1', type: 'multiple-choice', prompt: '「公園[こうえん]_______ サッカーを します。」 (Parkda futbol o\'ynayman)', options: ['で (de)', 'に (ni)', 'へ (e)', 'を (o)'], correctAnswer: 0, explanation: 'Harakat sodir bo\'layotgani uchun: で (de).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u2-l4-q1', question: '「部屋[へや]_______ 猫[ねこ]が います。」 Qaysi yuklama to\'g\'ri?', options: ['に (ni)', 'で (de)', 'へ (e)', 'を (o)'], correctAnswerIndex: 0, explanation: 'Mavjudlik (imasu) bilan: に (ni).' },
                        { id: 'ja-n5-u2-l4-q2', question: '«Kutubxonada kitob o\'qiyman» jumlasi qaysi?', options: ['図書館[としょかん]で 本[ほん]を 読[よ]みます', '図書館[としょかん]に 本[ほん]を 読[よ]みます', '図書館[としょかん]へ 本[ほん]で 読[よ]みます', '図書館[としょかん]を 読[よ]みます'], correctAnswerIndex: 0, explanation: 'Toshokan de hon o yomimasu.' },
                        { id: 'ja-n5-u2-l4-q3', question: 'Qaysi fe\'llar bilan joyga «に» yuklamasi qo\'yiladi?', options: ['あります / います (Mavjudlik fe\'llari)', '食[た]べます / 飲[の]みます', '見[み]ます / 聞[き]きます', '買[か]います'], correctAnswerIndex: 0, explanation: 'Arimasu / Imasu.' },
                        { id: 'ja-n5-u2-l4-q4', question: '「スーパーで 買[か]い物[もの]を します」ning ma\'nosi:', options: ['Supermarketda xarid qilaman', 'Supermarketga boraman', 'Supermarketda kitob bor', 'Supermarket yopiq'], correctAnswerIndex: 0, explanation: 'Supermarketda xarid qilaman.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u2-l5',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u2',
        unitTitle: 'Unit 2: Locations & Movement',
        language: 'ja',
        level: 'N5',
        lessonNumber: 5,
        title: 'Giving & Asking for Assistance: Invitation Form (〜ませんか / 〜ましょう)',
        description: 'Birgalikda biror ish qilishga taklif bildirish va rozi bo\'lish.',
        estimatedDurationMinutes: 12,
        icon: '🍵',
        steps: [
            {
                id: 'ja-n5-u2-l5-s1',
                title: 'Taklif Shakllari',
                type: 'learn',
                estimatedMinutes: 4,
                learnData: {
                    title: '〜ませんか & 〜ましょう',
                    explanation: '1. 〜ませんか (masen ka) — Muloyim taklif ("Birga ... qilmaymizmi?"). 2. 〜ましょう (mashou) — Qat\'iy taklif / Rozi bo\'lish ("Qani, qilaylik!").',
                    keyPoints: [
                        '一緒[いっしょ]に お茶[ちゃ]を 飲[の]みませんか。 (Birga choy ichmaymizmi?)',
                        'ええ、飲[の]みましょう。 (Ha, qani ichaylik!)'
                    ],
                    vocabulary: [
                        { term: '一緒[いっしょ]に', reading: 'Issho ni', meaning: 'Birgalikda / Birga', exampleSentence: '一緒[いっしょ]に 行[い]きましょう。', exampleTranslation: 'Qani, birga boraylik.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri taklif shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u2-l5-e1', type: 'multiple-choice', prompt: '«Birga tushlik qilmaymizmi?» qanday aytiladi?', options: ['一緒[いっしょ]に 昼[ひる]ごはんを 食[た]べませんか', '昼[ひる]ごはんを 食[た]べました', '昼[ひる]ごはんを 食[た]べません', '昼[ひる]ごはんが あります'], correctAnswer: 0, explanation: 'Tabemasen ka — Taklif.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 4,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u2-l5-q1', question: '«Biroz dam olaylik!» yapon tilida qanday bo\'ladi?', options: ['少[すこ]し 休[やす]みましょう', '少[すこ]し 休[やす]みません', '休[やす]みました', '休[やす]む'], correctAnswerIndex: 0, explanation: 'Yasumimashou — Dam olaylik.' },
                        { id: 'ja-n5-u2-l5-q2', question: 'Taklifga rozi bo\'lganda nima deyiladi?', options: ['いいですね、そうしましょう (Ajoyib, shunday qilaylik)', 'いいえ、しません', 'さようなら', 'ごめんなさい'], correctAnswerIndex: 0, explanation: 'Ii desu ne, sou shimashou.' },
                        { id: 'ja-n5-u2-l5-q3', question: '「手伝[てつだ]いましょうか」ning ma\'nosi:', options: ['Yordam berib yuboraymi? (O\'z yordamini taklif qilish)', 'Yordam bering', 'Yordam kerak emas', 'Kim yordam berdi?'], correctAnswerIndex: 0, explanation: 'Tetsudaimashou ka — Yordam beraymi?' },
                        { id: 'ja-n5-u2-l5-q4', question: '「映画[えいが]を 見[み]に 行[い]きませんか」ning tarjimasi:', options: ['Kino ko\'rishga bormaymizmi?', 'Kino ko\'rdim', 'Kinoga bormayman', 'Kino qiziq'], correctAnswerIndex: 0, explanation: 'Kino ko\'rishga bormaymizmi?' }
                    ]
                }
            }
        ]
    },

    // Unit 3: Time, Calendar, Numbers & Verbs
    {
        id: 'ja-n5-u3-l1',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u3',
        unitTitle: 'Unit 3: Time, Days & Counting',
        language: 'ja',
        level: 'N5',
        lessonNumber: 1,
        title: 'Telling Time (時 / 分) & Days of the Week (曜日)',
        description: 'Soat va daqiqalarni aytish hamda hafta kunlari.',
        estimatedDurationMinutes: 14,
        icon: '⏰',
        steps: [
            {
                id: 'ja-n5-u3-l1-s1',
                title: 'Soat va Hafta Kunlari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜時 (Ji) & 〜曜日 (Youbi)',
                    explanation: 'Soat: 1時 (ichiji), 2時 (niji), 4時 (yoji - istisno), 9時 (kuji - istisno). Hafta kunlari: 月曜日 (Dushanba), 火曜日 (Seshanba), 水曜日 (Chorshanba), 木曜日 (Payshanba), 金曜日 (Juma), 土曜日 (Shanba), 日曜日 (Yakshanba).',
                    vocabulary: [
                        { term: '何時[なんじ]', reading: 'Nanji', meaning: 'Soat necha?', exampleSentence: '今[いま]、何時[なんじ]ですか。', exampleTranslation: 'Hozir soat necha?' },
                        { term: '日曜日[にちようび]', reading: 'Nichiyoubi', meaning: 'Yakshanba', exampleSentence: '日曜日[にちようび]は 休[やす]みです。', exampleTranslation: 'Yakshanba dam olish kuni.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri soat talaffuzini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u3-l1-e1', type: 'multiple-choice', prompt: 'Soat 4:00 yapon tilida qanday aytiladi?', options: ['よじ (Yoji)', 'よんじ (Yonji)', 'しじ (Shiji)', 'よっじ (Yojji)'], correctAnswer: 0, explanation: '4:00 — よじ (Yoji).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u3-l1-q1', question: '«Juma» kuni yapon tilida nima deyiladi?', options: ['金曜日[きんようび]', '月曜日[げつようび]', '火曜日[かようび]', '日曜日[にちようび]'], correctAnswerIndex: 0, explanation: 'Kinyoubi — Juma.' },
                        { id: 'ja-n5-u3-l1-q2', question: 'Soat 9:00 qanday aytiladi?', options: ['くじ (Kuji)', 'きゅうじ (Kyuuji)', 'きゅうじかん', 'くにん'], correctAnswerIndex: 0, explanation: '9:00 — くじ (Kuji).' },
                        { id: 'ja-n5-u3-l1-q3', question: '「半[はん] (han)」so\'zining soat bilan kelgandagi ma\'nosi:', options: ['Yarim (masalan 7時半 = 7:30)', 'Besh daqiqa', 'Chorak kam', 'Aniq soat'], correctAnswerIndex: 0, explanation: 'Yarim (30 daqiqa).' },
                        { id: 'ja-n5-u3-l1-q4', question: '«Dushanbadan jumagacha» jumlasi qaysi?', options: ['月曜日[げつようび]から 金曜日[きんようび]まで', '月曜日[げつようび]へ 金曜日[きんようび]で', '月曜日[げつようび]に 金曜日[きんようび]を', '月曜日[げつようび]と 金曜日[きんようび]'], correctAnswerIndex: 0, explanation: '〜から 〜まで (kara ... made).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u3-l2',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u3',
        unitTitle: 'Unit 3: Time, Days & Counting',
        language: 'ja',
        level: 'N5',
        lessonNumber: 2,
        title: 'Numbers (1-100,000), Money (円) & Prices (いくら)',
        description: 'Sonlar, yapon iyenasi (円 - en) va narx so\'rash.',
        estimatedDurationMinutes: 14,
        icon: '💴',
        steps: [
            {
                id: 'ja-n5-u3-l2-s1',
                title: 'Sonlar va Valyuta',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Raqamlar va Narxlar',
                    explanation: '100 = 百 (hyaku), 1,000 = 千 (sen), 10,000 = 一万 (ichiman). Yaponiyada hisoblash 4 ta nolli xonalar bilan bo\'linadi (Man = 10,000). Narx so\'rash: これは いくらですか (Bu qancha turadi?).',
                    vocabulary: [
                        { term: 'いくら', reading: 'Ikura', meaning: 'Qancha turadi?', exampleSentence: 'このリンゴは いくらですか。', exampleTranslation: 'Bu olma qancha turadi?' },
                        { term: '円[えん]', reading: 'En', meaning: 'Iyena (Yaponiya pul birligi)', exampleSentence: '百円[ひゃくえん]です。', exampleTranslation: 'Yuz iyena.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri sonni toping.',
                    exercises: [
                        { id: 'ja-n5-u3-l2-e1', type: 'multiple-choice', prompt: '3,000 soni yapon tilida qanday o\'qiladi?', options: ['さんぜん (Sanzen)', 'さんせん (Sansen)', 'さんひゃく (Sanhyaku)', 'さんまん (Sanman)'], correctAnswer: 0, explanation: '3,000 — さんぜん (Sanzen).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u3-l2-q1', question: '10,000 soni yapon tilida nima deyiladi?', options: ['いちまん (Ichiman)', 'じゅうせん (Juusen)', 'ひゃくまん (Hyakuman)', 'せん (Sen)'], correctAnswerIndex: 0, explanation: '10,000 — 一万 (Ichiman).' },
                        { id: 'ja-n5-u3-l2-q2', question: '«Bu kitob 1,500 iyena turadi» jumlasi qaysi?', options: ['この本[ほん]は 千五百円[せんごひゃくえん]です', 'この本[ほん]は 一万五千円[いちまんごせんえん]です', 'この本[ほん]は 百五十円[ひゃくごじゅうえん]です', '本[ほん]は 五百円[ごひゃくえん]です'], correctAnswerIndex: 0, explanation: 'Sen gohyaku en desu.' },
                        { id: 'ja-n5-u3-l2-q3', question: '300 sonining to\'g\'ri o\'qilishi:', options: ['さんびゃく (Sanbyaku)', 'さんひゃく (Sanhyaku)', 'さんぴゃく (Sanpyaku)', 'さく'], correctAnswerIndex: 0, explanation: 'Sanbyaku.' },
                        { id: 'ja-n5-u3-l2-q4', question: '600 sonining to\'g\'ri o\'qilishi:', options: ['ろっぴゃく (Roppyaku)', 'ろくひゃく (Rokuhyaku)', 'ろくせん (Rokusen)', 'ろくびゃく (Rokubyaku)'], correctAnswerIndex: 0, explanation: 'Roppyaku.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u3-l3',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u3',
        unitTitle: 'Unit 3: Time, Days & Counting',
        language: 'ja',
        level: 'N5',
        lessonNumber: 3,
        title: 'Counters (人, 冊, 本, 枚, つ)',
        description: 'Sanoq suffikslari: odamlar (nin), kitoblar (satsu), uzun buyumlar (hon), yupqa narsalar (mai), umumiy donalar (tsu).',
        estimatedDurationMinutes: 14,
        icon: '🔢',
        steps: [
            {
                id: 'ja-n5-u3-l3-s1',
                title: 'Sanoq Qo\'shimchalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Japanese Counters',
                    explanation: 'Yapon tilida buyum turiga qarab maxsus sanoq qo\'shimchasi qo\'shiladi.',
                    keyPoints: [
                        '〜人 (nin): odamlar (1人=hitori, 2人=futari, 3人=sannin)',
                        '〜つ (tsu): umumiy donalar (hitotsu, futatsu, mittsu, yottsu, itsutsu...)',
                        '〜本 (hon): ruchka, shisha kabi uzunchoq buyumlar',
                        '〜枚 (mai): qog\'oz, futbolka kabi yupqa tekis narsalar',
                        '〜冊 (satsu): kitob, daftar kabi jildli narsalar'
                    ],
                    vocabulary: [
                        { term: '一人[ひとり]', reading: 'Hitori', meaning: 'Bir kishi', exampleSentence: '一人[ひとり]で 行[い]きます。', exampleTranslation: 'Yolg\'iz o\'zim boraman.' },
                        { term: '二人[ふたり]', reading: 'Futari', meaning: 'Ikki kishi', exampleSentence: '二人[ふたり]で 食[た]べます。', exampleTranslation: 'Ikkovimiz yeymiz.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri sanoq qo\'shimchasini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u3-l3-e1', type: 'multiple-choice', prompt: '3 ta kitobni qanday sanaymiz?', options: ['三冊[さんさつ] (Sansatsu)', '三本[さんぼん]', '三枚[さんまい]', '三人[さんにん]'], correctAnswer: 0, explanation: 'Kitoblar uchun: 冊 (satsu).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u3-l3-q1', question: 'Qog\'oz yoki chipta kabi yupqa narsalar uchun qaysi sanoq qo\'shimchasi ishlatiladi?', options: ['枚 (mai)', '本 (hon)', '冊 (satsu)', '人 (nin)'], correctAnswerIndex: 0, explanation: 'Yupqa narsalar uchun: 枚 (mai).' },
                        { id: 'ja-n5-u3-l3-q2', question: '«Ikkita olma bering» jumlasi qaysi?', options: ['リンゴを 二[ふた]つ ください', 'リンゴを 二人[ふたり] ください', 'リンゴを 二枚[にまい] ください', 'リンゴを 二冊[にさつ] ください'], correctAnswerIndex: 0, explanation: 'Futatsu (2 dona).' },
                        { id: 'ja-n5-u3-l3-q3', question: 'Ruchka yoki shisha suv sanalganda qaysi qo\'shimcha ishlatiladi?', options: ['本 (hon)', '枚 (mai)', '冊 (satsu)', '階 (kai)'], correctAnswerIndex: 0, explanation: 'Uzunchoq buyumlar uchun: 本 (hon).' },
                        { id: 'ja-n5-u3-l3-q4', question: '1 dona va 2 dona umumiy sanoqda qanday aytiladi?', options: ['ひとつ (Hitotsu), ふたつ (Futatsu)', 'いちつ, につ', 'いっぽん, にほん', 'いちまい, にまい'], correctAnswerIndex: 0, explanation: 'Hitotsu, futatsu.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u3-l4',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u3',
        unitTitle: 'Unit 3: Time, Days & Counting',
        language: 'ja',
        level: 'N5',
        lessonNumber: 4,
        title: 'Past Tense of Verbs: 〜ました / 〜ませんでした',
        description: 'Fe\'llarning o\'tgan zamon tasdiq va inkor shakllari.',
        estimatedDurationMinutes: 14,
        icon: '⏳',
        steps: [
            {
                id: 'ja-n5-u3-l4-s1',
                title: 'Fe\'llar O\'tgan Zamoni',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜ました & 〜ませんでした',
                    explanation: 'Hozirgi zamon: 食べます (yeyman) / 食べません (yemayman). O\'tgan zamon: 食べました (yedim) / 食べませんでした (yemadim).',
                    keyPoints: [
                        '昨日[きのう]、勉強[べんきょう]しました。 (Kecha dars qildim.)',
                        '昨日[きのう]、どこへも 行[い]きませんでした。 (Kecha hech qayerga bormadim.)'
                    ],
                    vocabulary: [
                        { term: '昨日[きのう]', reading: 'Kinou', meaning: 'Kecha', exampleSentence: '昨日[きのう]の 夜[よる]。', exampleTranslation: 'Kecha kechqurun.' },
                        { term: '先週[せんしゅう]', reading: 'Senshuu', meaning: 'O\'tgan hafta', exampleSentence: '先週[せんしゅう] 日本[にほん]へ 来[き]ました。', exampleTranslation: 'O\'tgan hafta Yaponiyaga keldim.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri o\'tgan zamon shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u3-l4-e1', type: 'multiple-choice', prompt: '「昨日[きのう]、テレビを _______。」 (Kecha televizor ko\'rdim)', options: ['見[み]ました (Mimashita)', '見[み]ます', '見[み]ませんでした', '見[み]る'], correctAnswer: 0, explanation: 'O\'tgan zamon tasdiq: Mimashita.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u3-l4-q1', question: '«Bugun ertalab nonushta qilmadingizmi?» savoli qaysi?', options: ['今朝[けさ] 朝[あさ]ごはんを 食[た]べませんでしたか', '朝[あさ]ごはんを 食[た]べますか', '朝[あさ]ごはんを 食[た]べました', '朝[あさ]ごはんは 何[なん]ですか'], correctAnswerIndex: 0, explanation: 'Tabemasen deshita ka.' },
                        { id: 'ja-n5-u3-l4-q2', question: '「買[か]いました (Kaimashita)」fe\'lining ma\'nosi:', options: ['Sotib oldim', 'Sotib olaman', 'Sotib olmadim', 'Sotib oling'], correctAnswerIndex: 0, explanation: 'Sotib oldim.' },
                        { id: 'ja-n5-u3-l4-q3', question: '«O\'tgan oy» yapon tilida nima deyiladi?', options: ['先月[せんげつ]', '今月[こんげつ]', '来月[らいげつ]', '毎月[まいつき]'], correctAnswerIndex: 0, explanation: 'Sengetsu — O\'tgan oy.' },
                        { id: 'ja-n5-u3-l4-q4', question: '«Kecha 8 soat ishladim» jumlasi qaysi?', options: ['昨日[きのう] 8時間[はちじかん] 働[はたら]きました', '昨日[きのう] 8時[はちじ]に 働[はたら]きます', '昨日[きのう] 8時間[はちじかん] 働[はたら]きません', '明日[あした] 働[はたら]きます'], correctAnswerIndex: 0, explanation: 'Hachijikan hatarakimashita.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u3-l5',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u3',
        unitTitle: 'Unit 3: Time, Days & Counting',
        language: 'ja',
        level: 'N5',
        lessonNumber: 5,
        title: 'N5 Listening: Daily Conversations & Asking Directions',
        description: 'Vokzalda va ko\'chada yo\'l so\'rash, xarid qilish dialoglarini tinglab tushunish.',
        estimatedDurationMinutes: 14,
        icon: '🎧',
        steps: [
            {
                id: 'ja-n5-u3-l5-s1',
                title: 'Suhbat Matni',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Dialogue: Asking for Directions',
                    explanation: 'A: すみません、郵便局[ゆうびんきょく]は どこですか。 B: あそこに 銀行[ぎんこう]が ありますね。郵便局[ゆうびんきょく]は 銀行[ぎんこう]の 隣[となり]です。 A: どうも ありがとうございます。',
                    keyPoints: [
                        'すみません (Sumimasen) — Kechirasiz / Uzr',
                        '隣[となり] (Tonari) — Yonida / Qo\'shni',
                        '前[まえ] (Mae) — Oldida, 後[うし]ろ (Ushiro) — Orqasida'
                    ],
                    vocabulary: [
                        { term: '郵便局[ゆうびんきょく]', reading: 'Yuubinkyoku', meaning: 'Pochta bo\'limi', exampleSentence: '郵便局[ゆうびんきょく]へ 行[い]きます。', exampleTranslation: 'Pochtaga boraman.' },
                        { term: '銀行[ぎんこう]', reading: 'Ginkou', meaning: 'Bank', exampleSentence: '銀行[ぎんこう]の 隣[となり]。', exampleTranslation: 'Bankning yonida.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l5-s2',
                title: 'Tinglash Mashqi',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Suhbat bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n5-u3-l5-e1', type: 'multiple-choice', prompt: 'Pochta bo\'limi qayerda joylashgan?', options: ['Bankning yonida', 'Maktab ichida', 'Vokzal qarshisida', 'Park orqasida'], correctAnswer: 0, explanation: 'Ginkou no tonari desu.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u3-l5-q1', question: '«Birovdan yo\'l so\'rashdan oldin aytiladigan odobli so\'z»:', options: ['すみません (Sumimasen)', 'さようなら', 'いただきます', 'ごちそうさま'], correctAnswerIndex: 0, explanation: 'Sumimasen — Kechirasiz.' },
                        { id: 'ja-n5-u3-l5-q2', question: '「駅[えき]の 前[まえ]」nimani anglatadi?', options: ['Vokzalning oldida', 'Vokzalning orqasida', 'Vokzalning ichida', 'Vokzalning ustida'], correctAnswerIndex: 0, explanation: 'Eki no mae — Vokzal oldida.' },
                        { id: 'ja-n5-u3-l5-q3', question: '「交差点[こうさてん]を 右[みぎ]へ 曲[ま]がります」ning ma\'nosi:', options: ['Chorraqadan o\'ngga buriling', 'To\'g\'riga yuring', 'Chapga buriling', 'To\'xtang'], correctAnswerIndex: 0, explanation: 'Migi e magarimasu — O\'ngga buriling.' },
                        { id: 'ja-n5-u3-l5-q4', question: '«Ushbu avtobus aeroportga boradimi?» so\'rovi qaysi?', options: ['このバスは 空港[くうこう]へ 行[い]きますか', '空港[くうこう]は どこですか', 'バスは いくらですか', '飛行機[ひこうき]が ありますか'], correctAnswerIndex: 0, explanation: 'Kuukou e ikimasu ka.' }
                    ]
                }
            }
        ]
    },

    // Unit 4: Adjectives, Locations & Existence
    {
        id: 'ja-n5-u4-l1',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u4',
        unitTitle: 'Unit 4: Adjectives & Existence',
        language: 'ja',
        level: 'N5',
        lessonNumber: 1,
        title: 'I-Adjectives (い形容詞) Conjugation',
        description: 'い-sifatlarning hozirgi va o\'tgan zamon tasdiq va inkor turlanishi.',
        estimatedDurationMinutes: 14,
        icon: '🏷️',
        steps: [
            {
                id: 'ja-n5-u4-l1-s1',
                title: 'い-Sifatlar Turlanishi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'い-Adjectives (い形容詞)',
                    explanation: 'い sifatlar oxiri "i" bilan tugaydi (masalan: 高い - takai). Turlanishi: 1. Hozirgi tasdiq: 高いです (Qimmat). 2. Hozirgi inkor: 高くないです (Qimmat emas - i tushib kunai bo\'ladi). 3. O\'tgan tasdiq: 高かったです (Qimmat edi - katta). 4. O\'tgan inkor: 高くなかったです (Qimmat emas edi - kunakatta). Istisno: いい (yaxshi) -> よくない / よかった / よくなかった.',
                    vocabulary: [
                        { term: '高[たか]い', reading: 'Takai', meaning: 'Qimmat / Baland', exampleSentence: 'この時計[とけい]は 高[たか]いです。', exampleTranslation: 'Bu soat qimmat.' },
                        { term: '安[やす]い', reading: 'Yasui', meaning: 'Arzon', exampleSentence: 'この店[みせ]は 安[やす]いです。', exampleTranslation: 'Bu do\'kon arzon.' },
                        { term: '大[おお]きい', reading: 'Ookii', meaning: 'Katta', exampleSentence: '大[おお]きい 家[いえ]。', exampleTranslation: 'Katta uy.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri inkor shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u4-l1-e1', type: 'multiple-choice', prompt: '「暑[あつ]い (Issiq)」sifatining hozirgi inkor shakli qaysi?', options: ['暑[あつ]くないです', '暑[あつ]いじゃないです', '暑[あつ]いではありません', '暑[あつ]くでした'], correctAnswer: 0, explanation: 'Atsukunai desu (i tushib kunai bo\'ladi).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u4-l1-q1', question: '«Kecha havo juda sovuq edi» jumlasi qaysi?', options: ['昨日[きのう]は とても 寒[さむ]かったです', '昨日[きのう]は 寒[さむ]いです', '昨日[きのう]は 寒[さむ]くないです', '寒[さむ]いでした'], correctAnswerIndex: 0, explanation: 'Samukatta desu (o\'tgan zamon).' },
                        { id: 'ja-n5-u4-l1-q2', question: '「いい (yaxshi)」sifatining o\'tgan zamon tasdiq shakli qaysi?', options: ['よかったです (Yokatta desu)', 'いいかったです', 'いくなかったです', 'よかったですない'], correctAnswerIndex: 0, explanation: 'Ii -> Yokatta desu.' },
                        { id: 'ja-n5-u4-l1-q3', question: '「おいしい」ning ma\'nosi:', options: ['Mazali / Shiringina', 'Achchiq', 'Sho\'r', 'Qimmat'], correctAnswerIndex: 0, explanation: 'Oishii — Mazali.' },
                        { id: 'ja-n5-u4-l1-q4', question: '«Bu film qiziq emas edi» jumlasi qaysi?', options: ['この映画[えいが]は 面白[おもしろ]くなかったです', 'この映画[えいが]は 面白[おもしろ]くないです', '面白[おもしろ]いでした', '面白[おもしろ]い'], correctAnswerIndex: 0, explanation: 'Omoshirokunakatta desu.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u4-l2',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u4',
        unitTitle: 'Unit 4: Adjectives & Existence',
        language: 'ja',
        level: 'N5',
        lessonNumber: 2,
        title: 'Na-Adjectives (な形容詞) & Noun Modification',
        description: 'な-sifatlarning turlanishi va ot bilan birikishi (kirei na hana).',
        estimatedDurationMinutes: 14,
        icon: '🌸',
        steps: [
            {
                id: 'ja-n5-u4-l2-s1',
                title: 'な-Sifatlar Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Na-Adjectives (な形容詞)',
                    explanation: 'Ot oldidan kelganda な (na) qo\'shiladi: きれいな花[はな] (chiroyli gul), 静[しず]かな町[まち] (tinch shahar). Gap oxirida です bilan keladi: この町[まち]は 静[しず]かです. Inkor: 静[しず]かではありません.',
                    vocabulary: [
                        { term: '有名[ゆうめい]な', reading: 'Yuumei na', meaning: 'Mashhur', exampleSentence: '有名[ゆうめい]な レストラン。', exampleTranslation: 'Mashhur restoran.' },
                        { term: '親切[しんせつ]な', reading: 'Shinsetsu na', meaning: 'Mehribon / Ochiqko\'ngil', exampleSentence: '田中[たなか]さんは 親切[しんせつ]です。', exampleTranslation: 'Tanaka san mehribon.' },
                        { term: '暇[ひま]な', reading: 'Hima na', meaning: 'Bo\'sh (vaqti bor)', exampleSentence: '明日[あした]は 暇[ひま]ですか。', exampleTranslation: 'Ertaga bo\'shmisiz?' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri bog\'lanishni tanlang.',
                    exercises: [
                        { id: 'ja-n5-u4-l2-e1', type: 'multiple-choice', prompt: '«Chiroyli shahar» yapon tilida qanday bo\'ladi?', options: ['きれいな 町[まち]', 'きれいの 町[まち]', 'きれいい 町[まち]', 'きれい町[まち]'], correctAnswer: 0, explanation: 'Kirei na machi (na-sifat).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u4-l2-q1', question: '「きれい (kirei)」va「ゆうめい (yuumei)」qaysi turdagi sifatlar?', options: ['Oxiri "i" bilan tugashiga qaramay な-sifatlar (istisno)', 'い-sifatlar', 'Fe\'llar', 'Olmoshlar'], correctAnswerIndex: 0, explanation: 'Kirei va Yuumei — Na-sifatlar.' },
                        { id: 'ja-n5-u4-l2-q2', question: '«Kecha bo\'sh emas edim (band edim)» jumlasi qaysi?', options: ['昨日[きのう]は 暇[ひま]ではありませんでした', '昨日[きのう]は 暇[ひま]くないです', '昨日[きのう]は 暇[ひま]でした', '暇[ひま]です'], correctAnswerIndex: 0, explanation: 'Hima dewa arimasen deshita.' },
                        { id: 'ja-n5-u4-l2-q3', question: '「静[しず]かな」so\'zining ma\'nosi:', options: ['Tinch / Sokin', 'Shovqinli', 'Qulay', 'Issiq'], correctAnswerIndex: 0, explanation: 'Shizuka na — Tinch.' },
                        { id: 'ja-n5-u4-l2-q4', question: '«Nara — juda tinch va go\'zal shahar»:', options: ['奈良[なら]は 静[しず]かで きれいな 町[まち]です', '奈良[なら]は 静[しず]か町[まち]', '奈良[なら]は きれい町[まち]', '奈良[なら]の 町[まち]'], correctAnswerIndex: 0, explanation: 'Shizuka de kirei na machi desu.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u4-l3',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u4',
        unitTitle: 'Unit 4: Adjectives & Existence',
        language: 'ja',
        level: 'N5',
        lessonNumber: 3,
        title: 'Existence Verbs: あります (Inanimate) vs います (Animate)',
        description: 'Jonsiz narsalar/o\'simliklar (arimasu) va tirik jonivorlar/insonlar (imasu) mavjudligi.',
        estimatedDurationMinutes: 14,
        icon: '🐱',
        steps: [
            {
                id: 'ja-n5-u4-l3-s1',
                title: 'Mavjudlik: あります va います',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'あります (Jonsiz) & います (Jonli)',
                    explanation: '1. Jonsiz buyumlar, kitob, stol, daraxt uchun -> あります (arimasu). 2. Insonlar, hayvonlar, baliq, qushlar uchun -> います (imasu). Egaga が (ga) yuklamasi qo\'yiladi.',
                    keyPoints: [
                        '机[つくえ]の 上[うえ]に 本[ほん]が あります。 (Stol ustida kitob bor.)',
                        '庭[にわ]に 犬[いぬ]が います。 (Hovlida kuchuk bor.)',
                        '教室[きょうしつ]に 誰[だれ]が いますか。 (Sinfda kim bor?)'
                    ],
                    vocabulary: [
                        { term: '犬[いぬ]', reading: 'Inu', meaning: 'It / Kuchuk', exampleSentence: '白[しろ]い 犬[いぬ]が います。', exampleTranslation: 'Oq kuchuk bor.' },
                        { term: '猫[ねこ]', reading: 'Neko', meaning: 'Mushuk', exampleSentence: '猫[ねこ]が 好[す]きです。', exampleTranslation: 'Mushuklarni yaxshi ko\'raman.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri mavjudlik fe\'lini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u4-l3-e1', type: 'multiple-choice', prompt: '「部屋[へや]に 弟[おとうと]が _______。」 (Xonada ukam bor)', options: ['います (Imasu)', 'あります (Arimasu)', 'です', 'します'], correctAnswer: 0, explanation: 'Inson (tirik jonli) bo\'lgani uchun: います (imasu).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u4-l3-q1', question: '«Stol ostida mushuk bor» jumlasi qaysi?', options: ['机[つくえ]の 下[した]に 猫[ねこ]が います', '机[つくえ]の 下[した]に 猫[ねこ]が あります', '机[つくえ]の 上[うえ]に 猫[ねこ]が あります', '猫[ねこ]は 机[つくえ]です'], correctAnswerIndex: 0, explanation: 'Tsukue no shita ni neko ga imasu.' },
                        { id: 'ja-n5-u4-l3-q2', question: 'Daraxt (木 - ki) uchun qaysi fe\'l ishlatiladi?', options: ['あります (O\'simliklar jonsiz kabi arimasu oladi)', 'います', 'です', 'します'], correctAnswerIndex: 0, explanation: 'O\'simliklar va daraxtlar uchun: あります.' },
                        { id: 'ja-n5-u4-l3-q3', question: '«Muzlatgichda hech narsa yo\'q» jumlasi qaysi?', options: ['冷蔵庫[れいぞうこ]に 何[なに]も ありません', '冷蔵庫[れいぞうこ]に 何[なに]も いません', '何[なに]が あります', '冷蔵庫[れいぞうこ]です'], correctAnswerIndex: 0, explanation: 'Nani mo arimasen.' },
                        { id: 'ja-n5-u4-l3-q4', question: '「男[おとこ]の 人[ひと]が います」ning ma\'nosi:', options: ['Erkak kishi bor', 'Ayol kishi bor', 'Bola bor', 'Hech kim yo\'q'], correctAnswerIndex: 0, explanation: 'Otoko no hito ga imasu — Erkak kishi bor.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u4-l4',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u4',
        unitTitle: 'Unit 4: Adjectives & Existence',
        language: 'ja',
        level: 'N5',
        lessonNumber: 4,
        title: 'Desires: 〜が ほしい (Want Noun) & 〜たい (Want to do)',
        description: 'Narsalarni xohlash (hoshii) va harakatni bajarishni istash (V-tai desu).',
        estimatedDurationMinutes: 14,
        icon: '⭐',
        steps: [
            {
                id: 'ja-n5-u4-l4-s1',
                title: 'Xohish Shakllari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'ほしい (Ot) vs 〜たい (Fe\'l)',
                    explanation: '1. Biror buyumni xohlash: Ot + が + ほしいです (Masalan: 新[あたら]しい 車[くるま]が ほしいです). 2. Biror ishni qilishni xohlash: Fe\'lning Masu asosi + たいです (Masalan: 日本[にほん]へ 行[い]きたいです - bormoqchiman).',
                    keyPoints: [
                        '水[みず]を 飲[の]みたいです。 (Suv ichgim kelyapti.)',
                        '何[なに]も 食[た]べたくないです。 (Hech narsa yegim kelmayapti - inkor: takunai).'
                    ],
                    vocabulary: [
                        { term: 'ほしい', reading: 'Hoshii', meaning: 'Kerak / Xohlayman (buyumni)', exampleSentence: '時間[じかん]が ほしいです。', exampleTranslation: 'Vaqt bo\'lishini xohlayman.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'To\'g\'ri xohish shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n5-u4-l4-e1', type: 'multiple-choice', prompt: '«Yaponiyaga bormoqchiman» yapon tilida qanday bo\'ladi?', options: ['日本[にほん]へ 行[い]きたいです', '日本[にほん]へ 行[い]きほしいです', '日本[にほん]へ 行[い]きます', '日本[にほん]へ 行[い]きたくない'], correctAnswer: 0, explanation: 'Ikitai desu (fe\'l + tai).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u4-l4-q1', question: '«Yangi kompyuter xohlayman» jumlasi qaysi?', options: ['新[あたら]しい パソコンが ほしいです', 'パソコンを 買[か]いたいです', 'パソコンが あります', 'パソコンです'], correctAnswerIndex: 0, explanation: 'Atarashii pasokon ga hoshii desu.' },
                        { id: 'ja-n5-u4-l4-q2', question: '「休[やす]みたいです」fe\'lining inkor shakli qaysi?', options: ['休[やす]みたくないです', '休[やす]みたいじゃない', '休[やす]みませんでした', '休[やす]む'], correctAnswerIndex: 0, explanation: 'Yasumitakunai desu (dam olgim kelmayapti).' },
                        { id: 'ja-n5-u4-l4-q3', question: '«Dam olish kunida nima qilmoqchisiz?» so\'rovi:', options: ['休[やす]みの 日[ひ]に 何[なに]を したいですか', '何[なに]を しますか', 'どこへ 行[い]きましたか', '何[なに]が ほしいですか'], correctAnswerIndex: 0, explanation: 'Nani o shitai desu ka.' },
                        { id: 'ja-n5-u4-l4-q4', question: 'Boshqa birovning xohishini to\'g\'ridan-to\'g\'ri «〜たいですか» deb so\'rash odobdanmi?', options: ['Kattalarga to\'g\'ridan-to\'g\'ri "tai desu ka" deyish qo\'pol sanaladi; taklif (masen ka) ishlatish maqsadga muvofiq', 'Ha, xohlagancha so\'rash mumkin', 'Faqat bolalarga aytiladi', 'Farqi yo\'q'], correctAnswerIndex: 0, explanation: 'O\'rniga ~masen ka ishlatiladi.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u4-l5',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u4',
        unitTitle: 'Unit 4: Adjectives & Existence',
        language: 'ja',
        level: 'N5',
        lessonNumber: 5,
        title: 'N5 Reading: 田中さんの一日 (Tanaka\'s Daily Life)',
        description: 'Tanaka sanning kun tartibi haqidagi N5 o\'qish matni va tahlil.',
        estimatedDurationMinutes: 15,
        icon: '📖',
        steps: [
            {
                id: 'ja-n5-u4-l5-s1',
                title: 'Matnni O\'qish',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Tanaka san no Ichinichi',
                    explanation: '田中[たなか]さんは 毎朝[まいあさ] 7時[しちじ]に 起[お]きます。朝[あさ]ごはんは パンと 卵[たまご]を 食[た]べます。それから 8時[はちじ]に 電車[でんしゃ]で 会社[かいしゃ]へ 行[い]きます。会社[かいしゃ]は 9時[くじ]から 5時[ごじ]までです。夜[よる]は 家[うち]で 日本語[にほんご]を 勉強[べんきょう]します。',
                    keyPoints: [
                        '毎朝[まいあさ] 7時[しちじ]に 起[お]きる (Har tong soat 7 da uyg\'onadi)',
                        '8時[はちじ]に 電車[でんしゃ]で 会社[かいしゃ]へ 行[い]く (Soat 8 da poyezdda ishga boradi)',
                        '夜[よる] 日本語[にほんご]を 勉強[べんきょう]する (Kechasi yapon tilini o\'rganadi)'
                    ],
                    vocabulary: [
                        { term: '毎朝[まいあさ]', reading: 'Maiasa', meaning: 'Har tong', exampleSentence: '毎朝[まいあさ] 散歩[さんぽ]します。', exampleTranslation: 'Har tong sayr qilaman.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l5-s2',
                title: 'Tushunish Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n5-u4-l5-e1', type: 'multiple-choice', prompt: '田中[たなか]さんは 何時[なんじ]に 電車[でんしゃ]に 乗[の]りますか。', options: ['8時[はちじ]', '7時[しちじ]', '9時[くじ]', '5時[ごじ]'], correctAnswer: 0, explanation: 'Matnda: 8時[はちじ]に 電車[でんしゃ]で.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u4-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u4-l5-q1', question: '田中[たなか]さんは 朝[あさ]ごはん何[なに]を 食[た]べますか。', options: ['パンと 卵[たまご]', 'ご飯[はん]と 魚[さかな]', 'ラーメン', '何[なに]も 食[た]べない'], correctAnswerIndex: 0, explanation: 'Pan to tamago.' },
                        { id: 'ja-n5-u4-l5-q2', question: '田中[たなか]さんは 夜[よる] 何[なに]を しますか。', options: ['家[うち]で 日本語[にほんご]を 勉強[べんきょう]します', 'テレビを 見[み]ます', '散歩[さんぽ]します', '仕事[しごと]を します'], correctAnswerIndex: 0, explanation: 'Nihongo o benkyou shimasu.' },
                        { id: 'ja-n5-u4-l5-q3', question: '会社[かいしゃ]は 何時[なんじ]から 何時[なんじ]までですか。', options: ['9時[くじ]から 5時[ごじ]まで', '8時[はちじ]から 6時[ろくじ]まで', '7時[しちじ]から 3時[さんじ]まで', '10時[じゅうじ]から 4時[よじ]まで'], correctAnswerIndex: 0, explanation: '9:00 dan 17:00 gacha.' },
                        { id: 'ja-n5-u4-l5-q4', question: 'Tanaka san ishga qaysi transportda boradi?', options: ['Poyezdda (電車)', 'Avtobusda (バス)', 'Mashinada (車)', 'Piyoda (歩いて)'], correctAnswerIndex: 0, explanation: 'Densha de (poyezdda).' }
                    ]
                }
            }
        ]
    },

    // Unit 5: N5 Basic Kanji & Capstone
    {
        id: 'ja-n5-u5-l1',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u5',
        unitTitle: 'Unit 5: N5 Kanji & Capstone Mastery',
        language: 'ja',
        level: 'N5',
        lessonNumber: 1,
        title: 'N5 Basic Kanji 1: Numbers & Nature (一, 二, 三, 日, 月, 木, 水, 火)',
        description: 'N5 asosiy raqamlar va tabiat iyerogliflari.',
        estimatedDurationMinutes: 14,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n5-u5-l1-s1',
                title: 'Iyerogliflar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Kanji Radikallari va Ma\'nolari',
                    explanation: '一 (ichi - bir), 二 (ni - ikki), 三 (san - uch), 日 (hi/nichi - quyosh/kun), 月 (tsuki/getsu - oy), 木 (ki/moku - daraxt), 水 (mizu/sui - suv), 火 (hi/ka - olov).',
                    vocabulary: [
                        { term: '日本[にほん]', reading: 'Nihon', meaning: 'Yaponiya (Kunchiqar yurt)', exampleSentence: '日本[にほん]へ 行[い]きます。', exampleTranslation: 'Yaponiyaga boraman.' },
                        { term: '水曜日[すいようび]', reading: 'Suiyoubi', meaning: 'Chorshanba (Suv kuni)', exampleSentence: '水曜日[すいようび]に 会[あ]いましょう。', exampleTranslation: 'Chorshanba kuni ko\'rishaylik.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Iyeroglif ma\'nosini toping.',
                    exercises: [
                        { id: 'ja-n5-u5-l1-e1', type: 'multiple-choice', prompt: '「木」iyeroglifi nimani bildiradi?', options: ['Daraxt (Ki)', 'Suv (Mizu)', 'Olov (Hi)', 'Oy (Tsuki)'], correctAnswer: 0, explanation: '木 — Daraxt.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u5-l1-q1', question: '«Suv» iyeroglifi qaysi?', options: ['水', '火', '木', '金'], correctAnswerIndex: 0, explanation: '水 — Mizu (suv).' },
                        { id: 'ja-n5-u5-l1-q2', question: '「火曜日[かようび]」qaysi hafta kuni?', options: ['Seshanba (Olov kuni)', 'Dushanba', 'Chorshanba', 'Juma'], correctAnswerIndex: 0, explanation: 'Kayoubi — Seshanba.' },
                        { id: 'ja-n5-u5-l1-q3', question: '「月」iyeroglifining ma\'nolari:', options: ['Oy va dushanba (Getsuyoubi)', 'Quyosh', 'Daraxt', 'Oltin'], correctAnswerIndex: 0, explanation: 'Oy / Dushanba.' },
                        { id: 'ja-n5-u5-l1-q4', question: '«Bir kishi» yapon kanjisida qanday yoziladi?', options: ['一人', '二木', '三水', '一日'], correctAnswerIndex: 0, explanation: '一人 (Hitori).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u5-l2',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u5',
        unitTitle: 'Unit 5: N5 Kanji & Capstone Mastery',
        language: 'ja',
        level: 'N5',
        lessonNumber: 2,
        title: 'N5 Basic Kanji 2: People, Directions & Sizes (人, 男, 女, 大, 小, 中, 上, 下)',
        description: 'Odamlar, o\'lchamlar va yo\'nalish iyerogliflari.',
        estimatedDurationMinutes: 14,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n5-u5-l2-s1',
                title: 'Inson va Yo\'nalish Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Kishilar va O\'lchamlar',
                    explanation: '人 (hito/jin - inson), 男 (otoko - erkak), 女 (onna - ayol), 大 (dai/oo - katta), 小 (shou/chii - kichik), 中 (chuu/naka - ichi/o\'rtasi), 上 (ue - tepa/usti), 下 (shita - pasti/tagi).',
                    vocabulary: [
                        { term: '大人[おとな]', reading: 'Otona', meaning: 'Katta yoshli inson', exampleSentence: '大人[おとな]の 切符[きっぷ]。', exampleTranslation: 'Kattalar chiptasi.' },
                        { term: '大学[だいがく]', reading: 'Daigaku', meaning: 'Universitet (Katta ta\'lim)', exampleSentence: '大学[だいがく]で 学[まな]びます。', exampleTranslation: 'Universitetda o\'qiyman.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Iyeroglifni tanlang.',
                    exercises: [
                        { id: 'ja-n5-u5-l2-e1', type: 'multiple-choice', prompt: '«Stol usti» iborasidagi "usti" kanjisi qaysi?', options: ['上 (ue)', '下 (shita)', '中 (naka)', '前 (mae)'], correctAnswer: 0, explanation: '上 — Usti.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u5-l2-q1', question: '「男[おとこ]の 子[こ]」nimani bildiradi?', options: ['O\'g\'il bola', 'Qiz bola', 'Katta yoshli kishi', 'O\'qituvchi'], correctAnswerIndex: 0, explanation: 'Otoko no ko — O\'g\'il bola.' },
                        { id: 'ja-n5-u5-l2-q2', question: '«Kichik» ma\'nosidagi kanji qaysi?', options: ['小', '大', '中', '上'], correctAnswerIndex: 0, explanation: '小 (Chiisai).' },
                        { id: 'ja-n5-u5-l2-q3', question: '「一日中[いちにちじゅう]」iborasidagi 中 nimani bildiradi?', options: ['Kun bo\'yi / Kun davomida', 'Ertalab', 'Kechasi', 'Yarim kun'], correctAnswerIndex: 0, explanation: 'Kun davomida.' },
                        { id: 'ja-n5-u5-l2-q4', question: '«Qiz bola» yapon kanjisida qanday yoziladi?', options: ['女[おんな]の 子[こ]', '男[おとこ]の 子[こ]', '大人[おとな]', '先生[せんせい]'], correctAnswerIndex: 0, explanation: 'Onna no ko.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u5-l3',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u5',
        unitTitle: 'Unit 5: N5 Kanji & Capstone Mastery',
        language: 'ja',
        level: 'N5',
        lessonNumber: 3,
        title: 'N5 Basic Kanji 3: School, Study & Places (学, 校, 先, 生, 本, 車, 電)',
        description: 'Ta\'lim, maktab va transport iyerogliflari.',
        estimatedDurationMinutes: 14,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n5-u5-l3-s1',
                title: 'Ta\'lim va Harakat Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Maktab va Texnika',
                    explanation: '学 (gaku - o\'rganish), 校 (kou - maktab), 先 (sen - oldingi), 生 (sei/u - hayot/tug\'ilish), 本 (hon/moto - kitob/asos), 車 (kuruma/sha - g\'ildirak/mashina), 電 (den - elektr).',
                    vocabulary: [
                        { term: '先生[せんせい]', reading: 'Sensei', meaning: 'Ustoz / O\'qituvchi', exampleSentence: '日本語[にほんご]の 先生[せんせい]。', exampleTranslation: 'Yapon tili ustozi.' },
                        { term: '電車[でんしゃ]', reading: 'Densha', meaning: 'Poyezd (Elektr mashina)', exampleSentence: '電車[でんしゃ]に 乗[の]ります。', exampleTranslation: 'Poyezdga chiqaman.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 4,
                practiceData: {
                    instructions: 'Murakkab so\'zni toping.',
                    exercises: [
                        { id: 'ja-n5-u5-l3-e1', type: 'multiple-choice', prompt: '「学生[がくせい]」so\'zining ma\'nosi nima?', options: ['Talaba / O\'quvchi', 'O\'qituvchi', 'Shifoxona', 'Poyezd'], correctAnswer: 0, explanation: 'Gakusei — Talaba.' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u5-l3-q1', question: '«Maktab» kanjisi qaysi?', options: ['学校[がっこう]', '学生[がくせい]', '先生[せんせい]', '大学[だいがく]'], correctAnswerIndex: 0, explanation: '学校 (Gakkou).' },
                        { id: 'ja-n5-u5-l3-q2', question: '「電気[でんき]」so\'zining ma\'nosi:', options: ['Elektr toki / Chiroq', 'Poyezd', 'Telefon', 'Mashina'], correctAnswerIndex: 0, explanation: 'Denki — Elektr / Chiroq.' },
                        { id: 'ja-n5-u5-l3-q3', question: '«Avtomobil / Mashina» kanjisi qaysi?', options: ['車', '電', '校', '先'], correctAnswerIndex: 0, explanation: '車 (Kuruma).' },
                        { id: 'ja-n5-u5-l3-q4', question: '「生[う]まれます」ning ma\'nosi:', options: ['Tug\'ilmoq', 'O\'qimoq', 'Yashamoq', 'Yurmoq'], correctAnswerIndex: 0, explanation: 'Umaremasu — Tug\'ilmoq.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u5-l4',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u5',
        unitTitle: 'Unit 5: N5 Kanji & Capstone Mastery',
        language: 'ja',
        level: 'N5',
        lessonNumber: 4,
        title: 'JLPT N5 Mini-Mock Exam: Grammar & Reading',
        description: 'JLPT N5 imtihoni formati bo\'yicha grammatika va o\'qish sinov testi.',
        estimatedDurationMinutes: 16,
        icon: '📝',
        steps: [
            {
                id: 'ja-n5-u5-l4-s1',
                title: 'Imtihon Strategiyasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'JLPT N5 Test Structure',
                    explanation: 'JLPT N5 uch bo\'limdan iborat: 1. Moji/Goi (So\'z boyligi va kanji). 2. Bunpou/Dokkai (Grammatika va o\'qish). 3. Choukai (Eshitish). Eslatma: JLPT da speaking bo\'limi yo\'q.',
                    keyPoints: [
                        'Yuklamalarni (は, が, を, に, で, へ, と, も, から, まで) aniq qo\'llash',
                        'Sifatlar va fe\'llarning inkor/o\'tgan zamonlarini adashtirmaslik'
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l4-s2',
                title: 'Sinov Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n5-u5-l4-e1', type: 'multiple-choice', prompt: '「私[わたし]は 日曜日[にちようび]_______ 友達[ともだち]と サッカーを しました。」', options: ['に (ni)', 'で (de)', 'を (o)', 'へ (e)'], correctAnswer: 0, explanation: 'Aniq vaqt bilan: に (ni).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u5-l4-q1', question: '「昨日[きのう]の パーティーは _______。」', options: ['とても 楽[たの]しかったです', '楽[たの]しいです', '楽[たの]しいでした', '楽[たの]しくない'], correctAnswerIndex: 0, explanation: 'Tanoshikatta desu (o\'tgan zamon).' },
                        { id: 'ja-n5-u5-l4-q2', question: '「図書館[としょかん]で 本[ほん]を 借[か]りました」ning ma\'nosi:', options: ['Kutubxonadan kitob qarzga oldim', 'Kutubxonaga kitob berdim', 'Kitob sotib oldim', 'Kitob yozdim'], correctAnswerIndex: 0, explanation: 'Hon o karimashita.' },
                        { id: 'ja-n5-u5-l4-q3', question: '«Yapon tilida gaplasha olasizmi?» so\'rovi qaysi?', options: ['日本語[にほんご]が 分[わ]かりますか / 話[はな]せますか', '日本語[にほんご]を 食[た]べますか', '日本語[にほんご]へ 行[い]きますか', '日本語[にほんご]です'], correctAnswerIndex: 0, explanation: 'Wakarimasu ka.' },
                        { id: 'ja-n5-u5-l4-q4', question: '「一緒[いっしょ]に 晩[ばん]ごはんを 食[た]べませんか」— «_______»', options: ['いいですね、食[た]べましょう', 'いいえ、食[た]べます', 'ごちそうさまでした', 'さようなら'], correctAnswerIndex: 0, explanation: 'Ii desu ne, tabemashou.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n5-u5-l5',
        courseId: 'japanese-n5',
        unitId: 'ja-n5-u5',
        unitTitle: 'Unit 5: N5 Kanji & Capstone Mastery',
        language: 'ja',
        level: 'N5',
        lessonNumber: 5,
        title: 'JLPT N5 Capstone Mastery & N4 Transition Assessment',
        description: 'JLPT N5 darajasini to\'liq yakunlash va N4 darajasiga o\'tish imtihoni.',
        estimatedDurationMinutes: 18,
        icon: '🏆',
        steps: [
            {
                id: 'ja-n5-u5-l5-s1',
                title: 'N5 Daraja Xulosasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'JLPT N5 Complete Mastery Checklist',
                    explanation: 'Siz Xiragana, Katakana, 100 ga yaqin N5 kanjilari, barcha asosiy yuklamalar (wa, ga, o, ni, de, e, to, mo, kara, made), i/na sifatlar va kundalik muloqotni to\'liq egalladingiz!',
                    keyPoints: [
                        'Solid foundation in Japanese grammar and basic sentence patterns',
                        'Ready for N4 (Te-form, Potential, Conditional, Causative)'
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l5-s2',
                title: 'N5 Bitiruv Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Imtihon savoliga to\'g\'ri javob bering.',
                    exercises: [
                        { id: 'ja-n5-u5-l5-e1', type: 'multiple-choice', prompt: '「すみません、この 傘[かさ]を _______。」 (Kechirasiz, shu soyabonni bering)', options: ['ください (Kudasai)', 'します', 'あります', 'います'], correctAnswer: 0, explanation: 'Kudasai (bering).' }
                    ]
                }
            },
            {
                id: 'ja-n5-u5-l5-s3',
                title: 'N5 Yakuniy Sertifikatsiya Testi',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'N5 darajasini to\'liq tasdiqlash uchun savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n5-u5-l5-q1', question: '「私[わたし]は 日本[にほん]の アニメ_______ 大好[だいす]きです。」', options: ['が (ga)', 'を (o)', 'で (de)', 'へ (e)'], correctAnswerIndex: 0, explanation: 'Daisuki bilan egaga: が (ga).' },
                        { id: 'ja-n5-u5-l5-q2', question: '「先週[せんしゅう]の 日曜日[にちようび]は どこへも _______。」', options: ['行[い]きませんでした', '行[い]きました', '行[い]きます', '行[い]かない'], correctAnswerIndex: 0, explanation: 'Doko e mo ikimasen deshita.' },
                        { id: 'ja-n5-u5-l5-q3', question: '«Ushbu bino juda baland va yangi» jumlasi qaysi?', options: ['このビルは 高[たか]くて 新[あたら]しいです', 'このビルは 高[たか]い 新[あたら]しいです', '高[たか]いで 新[あたら]しいです', '高[たか]いでした'], correctAnswerIndex: 0, explanation: 'Takakute atarashii desu (i-sifat bog\'lanishi).' },
                        { id: 'ja-n5-u5-l5-q4', question: 'JLPT N5 darajasida speaking imtihoni bormi?', options: ['Yo\'q, JLPT imtihonida speaking mavjud emas (faqat Moji/Goi, Bunpou/Dokkai, Choukai)', 'Ha, 15 daqiqalik suhbat bor', 'Faqat yozma insho bor', 'Faqat diktant bor'], correctAnswerIndex: 0, explanation: 'JLPT da speaking yo\'q.' }
                    ]
                }
            }
        ]
    }
];
