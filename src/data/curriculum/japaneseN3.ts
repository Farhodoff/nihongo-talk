import { Lesson } from '../../types/lesson';

export const JAPANESE_N3_LESSONS: Lesson[] = [
    // Unit 1: Passive, Causative & Causative-Passive
    {
        id: 'ja-n3-u1-l1',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u1',
        unitTitle: 'Unit 1: Passive & Causative Voices',
        language: 'ja',
        level: 'N3',
        lessonNumber: 1,
        title: 'Passive Voice (受身形): Direct & Suffering Passive (迷惑の受身)',
        description: 'Majhul nisbat (Ukemi) va yapon tiliga xos "zararlangan/noqulaylik his qilgan majhul" shakli.',
        estimatedDurationMinutes: 16,
        icon: '🛡️',
        steps: [
            {
                id: 'ja-n3-u1-l1-s1',
                title: '受身形 (Ukemi-kei) Turlanishi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Passive Voice Formation & Meiwaku Passive',
                    explanation: '1. Guruh 1: Oxirgi "u" tovushi "areru" ga o\'zgaradi: 叱[しか]る -> 叱[しか]られる (urushilmoq), 踏[ふ]む -> 踏[ふ]まれる (bosilmoq). 2. Guruh 2: 食べる -> 食べられる, 褒[ほ]める -> 褒[ほ]められる (maqtashmoq). 3. Guruh 3: する -> される, 来る -> こられる (Korareru). 4. Meiwaku no Ukemi (zararlangan majhul): 雨[あめ]に 降[ふ]られた (Yomg\'ir yog\'ib noqulay ahvolda qoldim), 電車[でんしゃ]で 足[あし]を 踏[ふ]まれた (Poyezdda oyog\'imni bosib olishdi).',
                    vocabulary: [
                        { term: '褒[ほ]めます', reading: 'Homemasu', meaning: 'Maqtamoq (Passive: 褒[ほ]められる)', exampleSentence: '先生[せんせい]に 褒[ほ]められました。', exampleTranslation: 'Ustoz tomonidan maqtaldim.' },
                        { term: '叱[しか]ります', reading: 'Shikarimasu', meaning: 'Urushmoq / Koyimoq', exampleSentence: '部長[ぶちょう]に 叱[しか]られました。', exampleTranslation: 'Bo\'lim boshlig\'idan dakki yedim.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri majhul nisbat shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u1-l1-e1', type: 'multiple-choice', prompt: '«Kimdir yangi velosipedimni o\'g\'irlab ketdi (noqulaylik majhuli)»:', options: ['誰[だれ]かに 新[あたら]しい 自転車[じてんしゃ]を 盗[ぬす]まれました', '自転車[じてんしゃ]を 盗[ぬす]みました', '自転車[じてんしゃ]が 盗[ぬす]んだ', '自転車[じてんしゃ]です'], correctAnswer: 0, explanation: 'Nusumaremashita (meiwaku passive).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u1-l1-q1', question: '«Meiwaku no Ukemi» yapon tilida qanday holatni ifodalaydi?', options: ['Boshqa birovning yoki tabiatning harakati natijasida gapiruvchi noqulaylik yoki zarar ko\'rganini', 'Juda xursand bo\'lganini', 'Hech narsa sodir bo\'lmaganini', 'Ruxsat berilganini'], correctAnswerIndex: 0, explanation: 'Suffering/inconvenience caused to speaker.' },
                        { id: 'ja-n3-u1-l1-q2', question: '「犬[いぬ]に 手[て]を 噛[か]まれました」ning ma\'nosi:', options: ['Kuchuk qo\'limni tishlab oldi', 'Kuchukni tishladim', 'Kuchuk sotib oldim', 'Kuchuk yo\'q'], correctAnswerIndex: 0, explanation: 'Kamaremashita (kuchuk tishlab oldi).' },
                        { id: 'ja-n3-u1-l1-q3', question: '「する」fe\'lining majhul (passive) shakli:', options: ['される (Sareru)', 'すれる', 'しられる', 'さられる'], correctAnswerIndex: 0, explanation: 'Sareru.' },
                        { id: 'ja-n3-u1-l1-q4', question: 'Tarixiy kashfiyotlar va binolar qurilishi qaysi nisbatda aytiladi?', options: ['To\'g\'ridan-to\'g\'ri majhul nisbatda (masalan: 1964年[ねん]に 開通[かいつう]された)', 'Xohish shaklida', 'Buyruq shaklida', 'Te-form'], correctAnswerIndex: 0, explanation: 'Direct passive for historical facts.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u1-l2',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u1',
        unitTitle: 'Unit 1: Passive & Causative Voices',
        language: 'ja',
        level: 'N3',
        lessonNumber: 2,
        title: 'Causative Voice (使役形): 〜(さ)せる (Make / Let someone do)',
        description: 'Orttirma nisbat (Shieki): birovni qilishga majburlash yoki ruxsat berish.',
        estimatedDurationMinutes: 16,
        icon: '⚙️',
        steps: [
            {
                id: 'ja-n3-u1-l2-s1',
                title: '使役形 (Shieki-kei) Turlanishi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Causative Voice Formation',
                    explanation: '1. Guruh 1: Oxirgi "u" tovushi "aseru" ga o\'zgaradi: 行[い]く -> 行[い]かせる, 読[よ]む -> 読[よ]ませる. 2. Guruh 2: 食べる -> 食べさせる, 見る -> 見させる. 3. Guruh 3: する -> させる, 来る -> こさせる (Kosaseru). 4. Muloyim iltimos: 〜させて いただけませんか (Iltimos, ... qilishimga ruxsat bera olasizmi?).',
                    vocabulary: [
                        { term: '行[い]かせます', reading: 'Ikasemasu', meaning: 'Bortirmoq / Jo\'natmoq', exampleSentence: '子供[こども]を 塾[じゅく]へ 行[い]かせます。', exampleTranslation: 'Bolani o\'quv markaziga yuboraman.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri orttirma shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u1-l2-e1', type: 'multiple-choice', prompt: '«Iltimos, o\'z fikrimni aytishimga ruxsat bering» qanday aytiladi?', options: ['私[わたし]の 意見[いけん]を 言[い]わせてください', '意見[いけん]を 言[い]ってください', '意見[いけん]を 言[い]います', '意見[いけん]です'], correctAnswer: 0, explanation: 'Iwasetekudasai (gapirishimga ruxsat bering).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u1-l2-q1', question: '«Ota bolasiga sabzavot yedirdi» jumlasi qaysi?', options: ['父[ちち]は 子供[こども]に 野菜[やさい]を 食[た]べさせました', '父[ちち]は 野菜[やさい]を 食[た]べました', '子供[こども]が 食[た]べました', '野菜[やさい]です'], correctAnswerIndex: 0, explanation: 'Tabesasemashita (yedirdi/ruxsat berdi).' },
                        { id: 'ja-n3-u1-l2-q2', question: '「来[く]る」fe\'lining orttirma (shieki) shakli:', options: ['こさせる (Kosaseru)', 'きさせる', 'くらせる', 'かさせる'], correctAnswerIndex: 0, explanation: 'Kosaseru.' },
                        { id: 'ja-n3-u1-l2-q3', question: '«Bugun meni biroz erta ketishimga ruxsat bering»:', options: ['今日[きょう]、早[はや]く 帰[かえ]らせて いただけませんか', '早[はや]く 帰[かえ]ってください', '早[はや]く 帰[かえ]ります', '帰[かえ]るな'], correctAnswerIndex: 0, explanation: 'Kaerasete itadakemasen ka.' },
                        { id: 'ja-n3-u1-l2-q4', question: '「読[よ]む」fe\'lining orttirma shakli:', options: ['読[よ]ませる (Yomaseru)', '読[よ]まれる', '読[よ]みさせる', '読[よ]す'], correctAnswerIndex: 0, explanation: 'Yomaseru.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u1-l3',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u1',
        unitTitle: 'Unit 1: Passive & Causative Voices',
        language: 'ja',
        level: 'N3',
        lessonNumber: 3,
        title: 'Causative-Passive Voice (使役受身形): 〜(さ)せられる (Forced to do)',
        description: 'Majburan qildirildi: xohlamasa ham biror ishni qilishga majbur bo\'lish (Shieki-Ukemi).',
        estimatedDurationMinutes: 16,
        icon: '⛓️',
        steps: [
            {
                id: 'ja-n3-u1-l3-s1',
                title: '使役受身 (Shieki-Ukemi) Turlanishi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Forced Action (〜させられる / 〜される)',
                    explanation: 'O\'zi xohlamagan holda boshqa birovning tazyiqi yoki talabi bilan biror ishni bajarishga majbur bo\'lish. 1. Guruh 1: 書[か]く -> 書[か]かせられる (qisqartmasi: 書[か]かされる), 待[ま]つ -> 待[ま]たされる. 2. Guruh 2: 食べる -> 食べさせられる. 3. Guruh 3: する -> させられる, 来る -> こさせられる.',
                    keyPoints: [
                        'カラオケで 歌[うた]を 歌[うた]わされました。 (Karaokeda qo\'shiq aytishga majbur bo\'ldim.)',
                        '無理[むり]に お酒[さけ]を 飲[の]まされた。 (Majburan spirtli ichimlik ichirildim.)'
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri majburlanganlik shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u1-l3-e1', type: 'multiple-choice', prompt: '«1 soat kutishga majbur bo\'ldim» qanday aytiladi?', options: ['1時間[いちじかん] 待[ま]たされました', '1時間[いちじかん] 待[ま]ちました', '1時間[いちじかん] 待[ま]ちたい', '待[ま]ってください'], correctAnswer: 0, explanation: 'Matasaremashita.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u1-l3-q1', question: '「母[はは]に 部屋[へや]を 掃除[そうじ]させられました」ning ma\'nosi:', options: ['Onam tomonidan xonani tozalashga majbur bo\'ldim', 'Onam xonani tozaladilar', 'Xona toza', 'Xonani tozalamadim'], correctAnswerIndex: 0, explanation: 'Forced to clean the room by mother.' },
                        { id: 'ja-n3-u1-l3-q2', question: 'Guruh 1 fe\'llarida 〜させられる ning so\'zlashuvdagi qisqartma shakli qaysi?', options: ['〜される (masalan: 飲まされる, 行かされる)', '〜てしまう', '〜てある', '〜ておく'], correctAnswerIndex: 0, explanation: '〜される (nomasareru).' },
                        { id: 'ja-n3-u1-l3-q3', question: '«Xohlamasam ham achchiq narsa yeyishga majbur bo\'ldim»:', options: ['嫌[いや]だったが、辛[から]い 物[もの]を 食[た]べさせられました', '辛[から]い 物[もの]を 食[た]べました', '辛[から]い 物[もの]が 好[す]きです', '食[た]べたい'], correctAnswerIndex: 0, explanation: 'Tabesaseraremashita.' },
                        { id: 'ja-n3-u1-l3-q4', question: '「する」fe\'lining causative-passive shakli:', options: ['させられる (Saserareru)', 'される', 'すれられる', 'しらされる'], correctAnswerIndex: 0, explanation: 'Saserareru.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u1-l4',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u1',
        unitTitle: 'Unit 1: Passive & Causative Voices',
        language: 'ja',
        level: 'N3',
        lessonNumber: 4,
        title: 'Preparatory Action: 〜ておく vs Resultant State: 〜てある',
        description: 'Oldindan tayyorlab qo\'yish (Te oku) va kimdir tomonidan bajarilgan tayyor holat (Te aru).',
        estimatedDurationMinutes: 15,
        icon: '📦',
        steps: [
            {
                id: 'ja-n3-u1-l4-s1',
                title: '〜ておく va 〜てある Farqi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Preparation (〜ておく) vs State (〜てある)',
                    explanation: '1. 〜ておく: Kelgusi qulaylik uchun oldindan tayyorlab qo\'yish: 旅行[りょこう]の 前[まえ]に ホテルを 予約[よやく]して おきます (Sayohatdan oldin mehmonxonani band qilib qo\'yaman). So\'zlashuvda: とく (Toki / Toite). 2. 〜てある: Maqsadli harakat qilinib, hozir shu holatda tayyor turganligi: カレンダーに 予定[よてい]が 書[か]いて あります (Taqvimga rejalar yozib qo\'yilgan).',
                    vocabulary: [
                        { term: '予約[よやく]します', reading: 'Yoyaku shimasu', meaning: 'Band qilmoq / Rezervatsiya', exampleSentence: 'チケットを 予約[よやく]して おきます。', exampleTranslation: 'Chiptalarni oldindan band qilib qo\'yaman.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri fe\'l shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u1-l4-e1', type: 'multiple-choice', prompt: '«Doskaga yangi so\'zlar yozib qo\'yilgan (holat)»:', options: ['黒板[こくばん]に 新[あたら]しい 言葉[ことば]が 書[か]いて あります', '言葉[ことば]を 書[か]いて おきます', '言葉[ことば]を 書[か]きました', '言葉[ことば]です'], correctAnswer: 0, explanation: 'Ga kaite arimasu (tayyor holat).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u1-l4-q1', question: '«Darsdan oldin yangi kanjilarni yodlab qo\'yaman» jumlasi qaysi?', options: ['授業[じゅぎょう]の 前[まえ]に 漢字[かんじ]を 覚[おぼ]えて おきます', '漢字[かんじ]を 覚[おぼ]えました', '漢字[かんじ]が 覚[おぼ]えて あります', '漢字[かんじ]です'], correctAnswerIndex: 0, explanation: 'Oboete okimasu (oldindan tayyorgarlik).' },
                        { id: 'ja-n3-u1-l4-q2', question: '〜てある qaysi turdagi fe\'llar bilan ishlatiladi?', options: ['Faqat o\'timli fe\'llar (Transitive verbs) bilan va egaga が (ga) qo\'yiladi', 'Faqat harakat fe\'llari', 'Sifatlar bilan', 'Faqat inkor shaklda'], correctAnswerIndex: 0, explanation: 'Transitive verbs with ga.' },
                        { id: 'ja-n3-u1-l4-q3', question: 'So\'zlashuvda「〜ておく」qanday qisqaradi?', options: ['〜とく (masalan: 買っとく = Katte oku)', '〜ちゃう', '〜なきゃ', '〜てる'], correctAnswerIndex: 0, explanation: '〜toku.' },
                        { id: 'ja-n3-u1-l4-q4', question: '「そのままに して おいて ください」ning ma\'nosi:', options: ['Shundayligicha qoldiring (tegmasdan turing)', 'Tezda tozalang', 'Buzib tashlang', 'Yig\'ishtiring'], correctAnswerIndex: 0, explanation: 'Leave it as it is.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u1-l5',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u1',
        unitTitle: 'Unit 1: Passive & Causative Voices',
        language: 'ja',
        level: 'N3',
        lessonNumber: 5,
        title: 'Spontaneous Occurrence: 〜てしまう (Regret & Completion)',
        description: 'Tugallanganlik va afsuslanish ma\'nolari (Te shimau / Chatte).',
        estimatedDurationMinutes: 15,
        icon: '😔',
        steps: [
            {
                id: 'ja-n3-u1-l5-s1',
                title: '〜てしまう Ikki Ma\'nosi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '1. To\'liq Tugallash (Completion) 2. Afsus/Xato (Regret)',
                    explanation: '1. To\'liq yakunlash: この本[ほん]を 全部[ぜんぶ] 読[よ]んで しまいました (Bu kitobni to\'liq o\'qib tugatdim). 2. Afsuslanish / Kutilmagan nojo\'ya harakat: 財布[さいふ]を 落[お]として しまいました (Hamyonimni tushirib yubordim-a!). So\'zlashuvda: 〜ちゃう (chau) / 〜じゃう (jau).',
                    vocabulary: [
                        { term: '落[お]とします', reading: 'Otoshimasu', meaning: 'Tushirib yubormoq', exampleSentence: '鍵[かぎ]を 落[お]として しまいました。', exampleTranslation: 'Kalitimni tushirib qo\'ydim.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri afsus/tugallash shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u1-l5-e1', type: 'multiple-choice', prompt: '«Poyezdda uxlab qolibman (afsus)» qanday aytiladi?', options: ['電車[でんしゃ]の 中[なか]で 寝[ね]て しまいました', '電車[でんしゃ]で 寝[ね]ました', '電車[でんしゃ]で 寝[ね]たい', '寝[ね]て おきます'], correctAnswer: 0, explanation: 'Nete shimaimashita.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u1-l5-q1', question: '「宿題[しゅくだい]を 忘[わす]れちゃった！」dagi «chatta» qaysi iboraning so\'zlashuv shakli?', options: ['忘[わす]れて しまいました', '忘[わす]れて おきました', '忘[わす]れて あります', '忘[わす]れない'], correctAnswerIndex: 0, explanation: 'Wasurete shimaimashita.' },
                        { id: 'ja-n3-u1-l5-q2', question: '«Bugun barcha vazifalarni tugatib qo\'ymoqchiman»:', options: ['今日[きょう]の 仕事[しごと]を 全部[ぜんぶ] やって しまいたいです', '仕事[しごと]を します', '仕事[しごと]が あります', '仕事[しごと]です'], correctAnswerIndex: 0, explanation: 'Yatte shimaitai desu.' },
                        { id: 'ja-n3-u1-l5-q3', question: '「飲[の]んで しまう」so\'zlashuvda nima bo\'ladi?', options: ['飲[の]んじゃう (Nonjau)', '飲[の]んちゃう', '飲[の]みとく', '飲[の]んてる'], correctAnswerIndex: 0, explanation: 'Nonjau.' },
                        { id: 'ja-n3-u1-l5-q4', question: '«Kassani yo\'qotib qo\'ydim»:', options: ['傘[かさ]を 無[な]くして しまいました', '傘[かさ]が あります', '傘[かさ]を 買[か]います', '傘[かさ]です'], correctAnswerIndex: 0, explanation: 'Nakushite shimaimashita.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Decisions, Habits & Intentions
    {
        id: 'ja-n3-u2-l1',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u2',
        unitTitle: 'Unit 2: Decisions & Habits',
        language: 'ja',
        level: 'N3',
        lessonNumber: 1,
        title: 'Decision & Rules: 〜ことにする vs 〜ことになる',
        description: 'Shaxsiy qat\'iy qaror (koto ni suru) va tashqi qaror/qoida (koto ni naru).',
        estimatedDurationMinutes: 15,
        icon: '⚖️',
        steps: [
            {
                id: 'ja-n3-u2-l1-s1',
                title: '〜ことにする va 〜ことになる',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Personal Decision vs External Rule',
                    explanation: '1. 〜ことにする (Shaxsiy qaror): 毎日[まいにち] ジョギングを することに しました (Har kuni yugurishga qaror qildim). 2. 〜ことになる (Kompaniya qarori, tashqi qoida, qonun): 来月[らいげつ] 日本[にほん]へ 転勤[てんきん]する ことに なりました (Kelasi oy Yaponiyaga ish o\'rnini ko\'chirishga qaror qilindi - kompaniya buyrug\'i).',
                    vocabulary: [
                        { term: '転勤[てんきん]', reading: 'Tenkin', meaning: 'Boshqa filialga ishga ko\'chish', exampleSentence: '大阪[おおさか]へ 転勤[てんきん]に なりました。', exampleTranslation: 'Osakaga ishga o\'tkazildim.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri qaror turini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u2-l1-e1', type: 'multiple-choice', prompt: '«Shakar yemaslikka qaror qildim (o\'zim)» qanday aytiladi?', options: ['甘[あま]い 物[もの]を 食[た]べない ことに しました', '食[た]べない ことに なりました', '食[た]べません', '食[た]べたい'], correctAnswer: 0, explanation: 'Koto ni shimashita (shaxsiy qaror).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u2-l1-q1', question: 'Kompaniya qoidasi yoki boshliqning qarori bilan biror o\'zgarish bo\'lsa qaysi biri ishlatiladi?', options: ['〜ことに なりました (Koto ni narimashita)', '〜ことに しました', '〜つもりです', '〜たいです'], correctAnswerIndex: 0, explanation: 'Koto ni narimashita (external decision).' },
                        { id: 'ja-n3-u2-l1-q2', question: '「法律[ほうりつ]で そういう ことに なっている」ning ma\'nosi:', options: ['Qonun bo\'yicha shunday belgilangan (qoida)', 'O\'zim shunday qildim', 'Qonun yo\'q', 'Qonun o\'zgardi'], correctAnswerIndex: 0, explanation: 'Established rule by law.' },
                        { id: 'ja-n3-u2-l1-q3', question: '«Har kuni ertalab 6:00 da turishni odat qildim»:', options: ['毎朝[まいあさ] 6時[ろくじ]に 起[お]きる ことに しています', '6時[ろくじ]に 起[お]きます', '6時[ろくじ]です', '起[お]きない'], correctAnswerIndex: 0, explanation: 'Koto ni shite imasu (shaxsiy doimiy odat).' },
                        { id: 'ja-n3-u2-l1-q4', question: '〜ことにする dan oldin fe\'l qaysi shaklda keladi?', options: ['Lug\'at shakli yoki Nai shakli', 'Masu shakli', 'Te shakli', 'Ta shakli'], correctAnswerIndex: 0, explanation: 'Dictionary / Nai form.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u2-l2',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u2',
        unitTitle: 'Unit 2: Decisions & Habits',
        language: 'ja',
        level: 'N3',
        lessonNumber: 2,
        title: 'Conscious Effort & Purpose: 〜ようにする vs 〜ように (In order that)',
        description: 'Harakat qilishga tirishish (you ni suru) va maqsad ergash gap (you ni).',
        estimatedDurationMinutes: 15,
        icon: '🎯',
        steps: [
            {
                id: 'ja-n3-u2-l2-s1',
                title: '〜ようにする va 〜ように',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Effort (〜ようにする) vs Goal (〜ように)',
                    explanation: '1. 〜ようにする (tirishmoq / odat qilmoq): 油[あぶら]っこい 物[もの]を 食[た]べない ように しています (Yog\'li ovqatlarni yemaslikka harakat qilyapman). 2. 〜ように (maqsad - ... bo\'lishi uchun / fe\'l imkoniyat yoki inkor bo\'ladi): 忘[わす]れない ように、メモを 取[と]ります (Unutib qo\'ymaslik uchun eslatma yozib olaman).',
                    vocabulary: [
                        { term: 'メモ', reading: 'Memo', meaning: 'Eslatma / Qayd', exampleSentence: 'メモを 取[と]ります。', exampleTranslation: 'Eslatma yozib olaman.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri maqsad shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u3-l2-e1', type: 'multiple-choice', prompt: '«Kechikmaslik uchun taksida boraman» qanday aytiladi?', options: ['遅刻[ちこく]しない ように、タクシーで 行[い]きます', '遅刻[ちこく]する ために、タクシー', '遅刻[ちこく]しない ように します', '遅刻[ちこく]です'], correctAnswer: 0, explanation: 'Chikoku shinai you ni (kechikmaslik uchun).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u2-l2-q1', question: '«〜ように» va «〜ために» o\'rtasidagi farq nima?', options: ['〜ように imkoniyat fe\'llari va inkor bilan keladi (maqsad holatga yo\'naltirilgan); 〜ために esa to\'g\'ridan-to\'g\'ri irodaviy harakat bilan keladi', 'Hech qanday farq yo\'q', 'Birinchisi o\'tgan zamon', 'Ikkisi ham taqiq'], correctAnswerIndex: 0, explanation: 'You ni is for potential/non-volitional/negative states.' },
                        { id: 'ja-n3-u2-l2-q2', question: '«Har kuni yaponcha yangiliklarni ko\'rishga tirishyapman»:', options: ['毎日[まいにち] 日本[にほん]の ニュースを 見[み]る ように しています', 'ニュースを 見[み]ました', 'ニュースを 見[み]る 予定[よてい]です', 'ニュースです'], correctAnswerIndex: 0, explanation: 'Miru you ni shite imasu.' },
                        { id: 'ja-n3-u2-l2-q3', question: '«Yaxshi eshitilishi uchun balandroq gapiring»:', options: ['よく 聞[き]こえる ように、大[おお]きな 声[こえ]で 話[はな]してください', '聞[き]く ために', '聞[き]こえる ように します', '話[はな]すな'], correctAnswerIndex: 0, explanation: 'Kikoeru you ni (eshitilishi uchun).' },
                        { id: 'ja-n3-u2-l2-q4', question: 'Shifokor bemorga «Iltimos, doringizni unutmang» deb maslahat berganda nima deydi?', options: ['薬[くすり]を 忘[わす]れない ように して ください', '薬[くすり]を 飲[の]まないで', '薬[くすり]を 買[か]う', '薬[くすり]です'], correctAnswerIndex: 0, explanation: 'Wasurenai you ni shite kudasai.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u2-l3',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u2',
        unitTitle: 'Unit 2: Decisions & Habits',
        language: 'ja',
        level: 'N3',
        lessonNumber: 3,
        title: 'Appearance & Hearsay: 〜そうだ (Looks like vs I heard that)',
        description: 'Tashqi ko\'rinishdan xulosa (sou da - o\'xshaydi) va eshitilgan xabar (sou da - deyishyapti).',
        estimatedDurationMinutes: 15,
        icon: '👀',
        steps: [
            {
                id: 'ja-n3-u2-l3-s1',
                title: '〜そうだ Ikki Xil Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Conjecture (Ko\'rinish) vs Hearsay (Eshitilgan xabar)',
                    explanation: '1. Ko\'rinish / Taxmin (Looks like): Sifat asosi + そうだ (おいしそう = Mazaliga o\'xshaydi; 雨[あめ]が 降[ふ]りそう = Yomg\'ir yog\'adigandek). 2. Eshitilgan xabar (I heard): Gapning to\'liq oddiy shakli + そうだ (明日[あした]は 雨[あめ]が 降[ふ]るそうだ = Ertaga yomg\'ir yog\'armish / deb eshitdim).',
                    vocabulary: [
                        { term: '降[ふ]りそう', reading: 'Furisou', meaning: 'Yog\'adigandek (ko\'rinish)', exampleSentence: '雨[あめ]が 降[ふ]りそうです。', exampleTranslation: 'Yomg\'ir yog\'adiganga o\'xshaydi.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri taxmin/xabar shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u2-l3-e1', type: 'multiple-choice', prompt: '«Ushbu taom juda mazaliga o\'xshaydi (tashqi ko\'rinishdan)»:', options: ['この料理[りょうり]は とても おいしそうです', 'おいしいそうです', 'おいしかったです', 'おいしいです'], correctAnswer: 0, explanation: 'Oishisou desu (i tushadi).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u2-l3-q1', question: '«Ob-havo ma\'lumotiga ko\'ra, ertaga qor yog\'armish»:', options: ['天気[てんき]予報[よほう]に よると、明日[あした] 雪[ゆき]が 降[ふ]るそうです', '雪[ゆき]が 降[ふ]りそうです', '雪[ゆき]が 降[ふ]りました', '雪[ゆき]です'], correctAnswerIndex: 0, explanation: 'Furu sou desu (hearsay).' },
                        { id: 'ja-n3-u2-l3-q2', question: '「いい (yaxshi)」sifatining ko\'rinish (taxmin) shakli nima bo\'ladi?', options: ['よさそう (Yosasou - istisno)', 'いいそう', 'いくそう', 'よいそう'], correctAnswerIndex: 0, explanation: 'Istisno: よさそう (Yosasou).' },
                        { id: 'ja-n3-u2-l3-q3', question: '「彼[かれ]は 元気[げんき]そうだ」ning ma\'nosi:', options: ['U tetik / sog\'lom ko\'rinyapti', 'U kasal', 'U ketdi', 'U keldi'], correctAnswerIndex: 0, explanation: 'Genkisou da (tetik ko\'rinadi).' },
                        { id: 'ja-n3-u2-l3-q4', question: '«Kimo-shakl + sou ni mo nai» nimani bildiradi?', options: ['Hech ham sodir bo\'ladiganga o\'xshamaydi', 'Darhol bo\'ladi', 'Bo\'lib o\'tdi', 'Bo\'lmoqchi'], correctAnswerIndex: 0, explanation: 'Unlikely to happen.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u2-l4',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u2',
        unitTitle: 'Unit 2: Decisions & Habits',
        language: 'ja',
        level: 'N3',
        lessonNumber: 4,
        title: 'Nuanced Reasoning & Contrast: 〜わりに(は) vs 〜くせに',
        description: 'Kutilganiga zid holat (warini - qaramay) va tanqidiy norozilik (kuseni - bo\'la turib).',
        estimatedDurationMinutes: 15,
        icon: '⚡',
        steps: [
            {
                id: 'ja-n3-u2-l4-s1',
                title: '〜わりに va 〜くせに Farqi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Contrast (〜わりに) vs Critical Resentment (〜くせに)',
                    explanation: '1. 〜わりに(は): Nisbatan / Qaraganda (kutilgan me\'yordan farq qilishi, neytral yoki ijobiy): この店[みせ]は 値段[ねだん]が 安[やす]い わりに、とても おいしい (Bu do\'kon narxi arzonligiga qaramay, juda mazali). 2. 〜くせに: ... bo\'la turib (faqat salbiy tanqid va norozilik): 何[なに]も 知[し]らない くせに、偉[えら]そうに 言[い]うな (Hech narsa bilmay turib, katta ketma!).',
                    vocabulary: [
                        { term: '値段[ねだん]', reading: 'Nedan', meaning: 'Narx', exampleSentence: '値段[ねだん]が 安[やす]い。', exampleTranslation: 'Narxi arzon.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri zidlik shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u2-l4-e1', type: 'multiple-choice', prompt: '«U yosh bo\'lishiga qaramay juda mulohazali va aqlli»:', options: ['彼[かれ]は 若[わか]い わりに、しっかり している', '若[わか]い くせに', '若[わか]い から', '若[わか]い なら'], correctAnswer: 0, explanation: 'Wakai warini (ijobiy kutilmagan mezon).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u3-l4-q1', question: 'Qaysi grammatik ifoda faqat salbiy tanqid va norozilik ohangiga ega?', options: ['〜くせに (Kuseni)', '〜わりに (Warini)', '〜のに (Noni)', '〜ても (Temo)'], correctAnswerIndex: 0, explanation: '〜くせに (Kuseni).' },
                        { id: 'ja-n3-u2-l4-q2', question: '«O\'zi puli yo\'q bo\'la turib qimmatbaho mashina sotib oldi (norozilik)»:', options: ['お金[かね]が ない くせに、高級車[こうきゅうしゃ]を 買[か]った', 'お金[かね]が ない わりに', 'お金[かね]が ない から', 'お金[かね]です'], correctAnswerIndex: 0, explanation: 'Nai kuseni.' },
                        { id: 'ja-n3-u2-l4-q3', question: 'Ot bilan «warini» qanday ulanadi?', options: ['Ot + の + わりに (Masalan: 年齢[ねんれい]の わりに)', 'Ot + な + わりに', 'Ot + だ + わりに', 'Ot + わりに'], correctAnswerIndex: 0, explanation: 'Ot + の + わりに.' },
                        { id: 'ja-n3-u2-l4-q4', question: '«Katta yoshda bo\'lishiga qaramay yosh ko\'rinadi»:', options: ['年[とし]の わりに 若[わか]く 見[み]える', '年[とし]の くせに', '年[とし]だから', '年[とし]です'], correctAnswerIndex: 0, explanation: 'Toshi no warini.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u2-l5',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u2',
        unitTitle: 'Unit 2: Decisions & Habits',
        language: 'ja',
        level: 'N3',
        lessonNumber: 5,
        title: 'N3 Reading: Essay on Modern Work Culture in Japan',
        description: 'Yaponiyadagi zamonaviy ish madaniyati (Telework, Work-Life Balance) haqidagi N3 o\'qish matni.',
        estimatedDurationMinutes: 16,
        icon: '💼',
        steps: [
            {
                id: 'ja-n3-u2-l5-s1',
                title: 'O\'qish Matni',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Essay: Changing Workstyles in Japan',
                    explanation: '近年[きんねん]、日本[にほん]の 企業[きぎょう]では テレワークや フレックスタイム制[せい]を 導入[どうにゅう]する 会社[かいしゃ]が 増[ふ]えて きました。 以前[いぜん]は 毎日[まいにち] 満員[まんいん]電車[でんしゃ]に 揺[ゆ]られて 通勤[つうきん]するのが 当然[とうぜん]だと 考[かんが]えられて いましたが、在宅[ざいたく]勤務[きんむ]によって 通勤[つうきん]の ストレスが 減[へ]り、家族[かぞく]と 過[す]ごす 時間[じかん]が 増[ふ]えたと 好評[こうひょう]です。 一方[いっぽう]で、社員[しゃいん]同士[どうし]の コミュニケーションが 減[へ]り、新入[しんにゅう]社員[しゃいん]の 育成[いくせい]が 難[むずか]しく なったという 課題[かだい]も 指摘[してき]されて います。',
                    keyPoints: [
                        'テレワークの メリット：通勤[つうきん]ストレスの 減少[げんしょう]、家族[かぞく]との 時間[じかん] (Afzalligi: Yo\'l stressi kamayishi, oilaga vaqt)',
                        'テレワークの 課題[かだい]：コミュニケーション不足[ぶそく]、新入[しんにゅう]社員[しゃいん]の 育成[いくせい] (Kamchiligi: Muloqot kamayishi, yangi xodimlarni o\'qitish qiyinligi)'
                    ],
                    vocabulary: [
                        { term: '導入[どうにゅう]', reading: 'Dounyuu', meaning: 'Joriy qilish / Kiritish', exampleSentence: '新[あたら]しい システムを 導入[どうにゅう]する。', exampleTranslation: 'Yangi tizimni joriy qilmoq.' },
                        { term: '課題[かだい]', reading: 'Kadai', meaning: 'Muammo / Hal qilinishi kerak bo\'lgan vazifa', exampleSentence: '多[おお]くの 課題[かだい]が ある。', exampleTranslation: 'Ko\'plab muammolar bor.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l5-s2',
                title: 'Tushunish Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri fikrni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u2-l5-e1', type: 'multiple-choice', prompt: 'Masofaviy ishlashning (Telework) qanday ijobiy tomoni aytilgan?', options: ['Qatnov stressining kamayishi va oila bilan vaqt o\'tkazish ko\'payishi', 'Ish haqi 2 barobar oshgani', 'Poyezdlar bepul bo\'lgani', 'Barcha kompaniyalar yopilgani'], correctAnswer: 0, explanation: 'Matnda: 通勤ストレスが減り、家族と過ごす時間が増えた.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u2-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u2-l5-q1', question: 'Matnda masofaviy ishlashning qanday kamchiligi (kadai) keltirilgan?', options: ['Xodimlar o\'rtasida muloqot kamayishi va yangi xodimlarni o\'rgatish qiyinlashuvi', 'Elektr toki o\'chib qolishi', 'Kompyuterlar yetishmasligi', 'Odamlar uxlayverishi'], correctAnswerIndex: 0, explanation: 'Muloqot kamayishi va yangi xodimlarni o\'rgatish qiyinlashuvi.' },
                        { id: 'ja-n3-u2-l5-q2', question: '「一方[いっぽう]で」bog\'lovchisining ma\'nosi:', options: ['Boshqa tomondan esa / Shu bilan birga (qarama-qarshi tomonni ko\'rsatish)', 'Shuning uchun', 'Chunki', 'Avval'], correctAnswerIndex: 0, explanation: 'On the other hand (boshqa tomondan).' },
                        { id: 'ja-n3-u2-l5-q3', question: '「在宅[ざいたく]勤務[きんむ]」nimani anglatadi?', options: ['Uydan turib ishlash (Work from home)', 'Ofisda tunab qolish', 'Chet elga xizmat safari', 'Dam olish kuni'], correctAnswerIndex: 0, explanation: 'Uydan ishlash.' },
                        { id: 'ja-n3-u2-l5-q4', question: '「満員[まんいん]電車[でんしゃ]」so\'zidagi 満員 nimani bildiradi?', options: ['Odamga liq to\'la / Tiqilinch', 'Bo\'m-bo\'sh', 'Tez yurar', 'Buzilgan'], correctAnswerIndex: 0, explanation: 'Full of people / Packed.' }
                    ]
                }
            }
        ]
    },

    // Unit 3: Formal Business Japanese (Keigo Basics)
    {
        id: 'ja-n3-u3-l1',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u3',
        unitTitle: 'Unit 3: Keigo & Business Japanese',
        language: 'ja',
        level: 'N3',
        lessonNumber: 1,
        title: 'Keigo 1: Honorific Language (尊敬語 - Sonkeigo)',
        description: 'Mijoz va ustoz harakatini ulug\'lovchi hurmat tili (Sonkeigo: いらっしゃる, おっしゃる, なさる).',
        estimatedDurationMinutes: 16,
        icon: '👑',
        steps: [
            {
                id: 'ja-n3-u3-l1-s1',
                title: '尊敬語 (Sonkeigo) Qoidalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Sonkeigo: Elevating the Listener / Third Party',
                    explanation: 'Suhbatdosh yoki hurmatli uchinchi shaxsning (boshliq, mijoz, ustoz) harakatini ulug\'lash uchun maxsus fe\'llar ishlatiladi: 行く/来る/いる -> いらっしゃる, 言う -> おっしゃる, 食べる/飲む -> 召[め]し上[あ]がる, する -> なさる, 見る -> ご覧[らん]に なる, 知っている -> ご存[ぞん]じです.',
                    keyPoints: [
                        'Umumiy qoida: お + Masu asosi + に なる (masalan: お帰[かえ]りに なります).'
                    ],
                    vocabulary: [
                        { term: 'おっしゃいます', reading: 'Osshaimasu', meaning: 'Aytmoqdalar / Demoqdalar (Sonkeigo)', exampleSentence: '社長[しゃちょう]が そう おっしゃいました。', exampleTranslation: 'Prezident shunday dedilar.' },
                        { term: '召[め]し上[あ]がります', reading: 'Meshiagarimasu', meaning: 'Yemoqdalar / Ichmoqdalar (Sonkeigo)', exampleSentence: 'どうぞ 召[め]し上[あ]がって ください。', exampleTranslation: 'Marhamat, tanovul qiling.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri Sonkeigo shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u3-l1-e1', type: 'multiple-choice', prompt: '«Ustoz hozir xonalaridami?» muloyim hurmat shaklida qanday so\'raladi?', options: ['先生[せんせい]は 今[いま] 研究室[けんきゅうしつ]に いらっしゃいますか', '先生[せんせい]は いますか', '先生[せんせい]が おるか', '先生[せんせい]です'], correctAnswer: 0, explanation: 'Irasshaimasu ka (Sonkeigo).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u3-l1-q1', question: 'Mijozga «Ushbu hujjatni ko\'rdingizmi?» deb qanday so\'raladi?', options: ['この資料[しりょう]を ご覧[らん]に なりましたか', 'この資料[しりょう]を 見[み]ましたか', 'この資料[しりょう]を 拝見[はいけん]しましたか', '資料[しりょう]です'], correctAnswerIndex: 0, explanation: 'Goran ni narimashita ka (Sonkeigo).' },
                        { id: 'ja-n3-u3-l2-q2', question: '«Bilmoq (Shitte iru)» fe\'lining Sonkeigo shakli:', options: ['ご存[ぞん]じです (Gozonji desu)', '存[ぞん]じて おります', '知[し]っています', '分[わ]かります'], correctAnswerIndex: 0, explanation: 'Gozonji desu.' },
                        { id: 'ja-n3-u3-l1-q3', question: 'Sonkeigo qachon ishlatilishi mutlaqo XATO hisoblanadi?', options: ['O\'zining yoki o\'z oilasining harakatiga nisbatan ishlatilganda', 'Mijozga nisbatan', 'Ustozga nisbatan', 'Kompaniya prezidentiga nisbatan'], correctAnswerIndex: 0, explanation: 'O\'z harakatiga Sonkeigo qo\'llab bo\'lmaydi.' },
                        { id: 'ja-n3-u3-l1-q4', question: '「何[なに]を なさいますか」ning ma\'nosi:', options: ['Nima qilasiz? / Nima buyurasiz?', 'Nima yedingiz?', 'Qayerga bordingiz?', 'Kim keldi?'], correctAnswerIndex: 0, explanation: 'Nima qilasiz? (Suru -> Nasaru).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u3-l2',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u3',
        unitTitle: 'Unit 3: Keigo & Business Japanese',
        language: 'ja',
        level: 'N3',
        lessonNumber: 2,
        title: 'Keigo 2: Humble Language (謙譲語 - Kenjougo)',
        description: 'O\'z harakatini kamtar tutib suhbatdoshni yuksaltirish tili (Kenjougo: 参る, 申す, いたす, 拝見する).',
        estimatedDurationMinutes: 16,
        icon: '🙇',
        steps: [
            {
                id: 'ja-n3-u3-l2-s1',
                title: '謙譲語 (Kenjougo) Qoidalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Kenjougo: Humbling Oneself to Show Deep Respect',
                    explanation: 'O\'z harakatingizni yoki o\'z kompaniyangiz a\'zolarining harakatini kamsuqum qilib ko\'rsatish: 行く/来る -> 参[まい]る (Mairu), 言う -> 申[もう]す (Mousu), する -> いたす (Itasu), 食べる/飲む -> いただく (Itadaku), 見る -> 拝見[はいけん]する (Haiken suru), 知っている -> 存[ぞん]じて おる (Zonjite oru).',
                    vocabulary: [
                        { term: '申[もう]します', reading: 'Moushimasu', meaning: 'Deb atalaman / Derman (Kenjougo)', exampleSentence: 'アリと 申[もう]します。', exampleTranslation: 'Ismim Alidir.' },
                        { term: '拝見[はいけん]します', reading: 'Haiken shimasu', meaning: 'Ko\'rib chiqaman / O\'qiyman (Kenjougo)', exampleSentence: 'メールを 拝見[はいけん]しました。', exampleTranslation: 'Xatingizni ko\'rib chiqdim.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri Kenjougo shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u3-l2-e1', type: 'multiple-choice', prompt: '«Ertaga soat 10:00 da ofisingizga boraman (kamtarona)»:', options: ['明日[あした] 10時[じゅうじ]に そちらへ 伺[うかが]います / 参[まい]ります', 'いらっしゃいます', '行[い]きます', '来[き]ます'], correctAnswer: 0, explanation: 'Ukagaimasu / Mairimasu (Kenjougo).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u3-l2-q1', question: 'Mijozga o\'zingizni tanishtirayotganda qaysi iborani qo\'llaysiz?', options: ['〜と 申[もう]します (Moushimasu)', '〜と おっしゃいます', '〜です', '〜と 言[い]う'], correctAnswerIndex: 0, explanation: '〜と 申します (Kenjougo).' },
                        { id: 'ja-n3-u3-l2-q2', question: '«Hujjatni qabul qilib oldim / ko\'rib chiqdim» kamtarona shakli:', options: ['拝見[はいけん]いたしました', 'ご覧[らん]に なりました', '見[み]ました', '見[み]てください'], correctAnswerIndex: 0, explanation: 'Haiken itashimashita.' },
                        { id: 'ja-n3-u3-l2-q3', question: 'Telefon orqali mijozga o\'z boshlig\'ingiz (Tanaka) haqida gapirganda qaysi biri to\'g\'ri?', options: ['Tanaka san emas, shunchaki «Tanaka wa tadaima gaishutsu shite orimasu» deyish (Kenjougo)', 'Tanaka-sama wa irasshaimasu', 'Tanaka-sensei wa...', 'Tanaka-san ga ikimashita'], correctAnswerIndex: 0, explanation: 'Uchi-soto qoidasi bo\'yicha o\'z boshlig\'iga san/sama qo\'shilmaydi va Kenjougo qo\'llaniladi.' },
                        { id: 'ja-n3-u3-l2-q4', question: '「ただいま お茶[ちゃ]を お持[も]ちします」dagi お〜します nimani bildiradi?', options: ['Kenjougo (hozir choy olib kelaman)', 'Sonkeigo', 'Buyruq', 'Taqiq'], correctAnswerIndex: 0, explanation: 'お+Masu+suru = Kenjougo.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u3-l3',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u3',
        unitTitle: 'Unit 3: Keigo & Business Japanese',
        language: 'ja',
        level: 'N3',
        lessonNumber: 3,
        title: 'N3 Intermediate Kanji: Abstract Concepts & Economy (経済, 政治, 影響, 関係, 相談)',
        description: 'Iqtisodiyot, jamiyat, ta\'sir va munosabatlarni ifodalovchi N3 iyerogliflari.',
        estimatedDurationMinutes: 15,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n3-u3-l3-s1',
                title: 'Abstrakt va Iqtisodiy Kanjilar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'N3 Abstract Kanji',
                    explanation: '経 (kei - boshqaruv/o\'tish), 済 (zai/su - yakunlash/iqtisod), 政 (sei - siyosat), 治 (ji/nao - boshqarish/tuzalish), 影 (ei/kage - soya), 響 (kyou/hibi - aks-sado/ta\'sir), 関 (kan/seki - aloqa), 係 (kei/kakari - munosabat/xodim).',
                    vocabulary: [
                        { term: '経済[けいざい]', reading: 'Keizai', meaning: 'Iqtisodiyot', exampleSentence: '世界[せかい]の 経済[けいざい]。', exampleTranslation: 'Jahon iqtisodiyoti.' },
                        { term: '影響[えいきょう]', reading: 'Eikyou', meaning: 'Ta\'sir', exampleSentence: '大[おお]きな 影響[えいきょう]を 与[あた]える。', exampleTranslation: 'Katta ta\'sir o\'tkazmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Iyeroglif birikmasini toping.',
                    exercises: [
                        { id: 'ja-n3-u3-l3-e1', type: 'multiple-choice', prompt: '「相談[そうだん] (Maslahatlashish)」so\'zidagi 談 qaysi ma\'noni bildiradi?', options: ['Suhbat / Muhokama (Dan)', 'Iqtisod', 'Pul', 'Yozuv'], correctAnswer: 0, explanation: '談 — Suhbat / Muzokara.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u3-l3-q1', question: '«Siyosat» kanjisi qaysi?', options: ['政治[せいじ]', '経済[けいざい]', '関係[かんけい]', '影響[えいきょう]'], correctAnswerIndex: 0, explanation: '政治 (Seiji).' },
                        { id: 'ja-n3-u3-l3-q2', question: '「関係[かんけい]が ある」ning ma\'nosi:', options: ['Aloqadorlik / Munosabat bor', 'Ta\'sir yo\'q', 'Iqtisodiyot o\'sdi', 'Siyosatchi'], correctAnswerIndex: 0, explanation: 'Aloqador / Munosabati bor.' },
                        { id: 'ja-n3-u3-l3-q3', question: '«Ta\'sir ko\'rsatmoq» iyeroglifi qaysi?', options: ['影響[えいきょう]', '相談[そうだん]', '案内[あんない]', '約束[やくそく]'], correctAnswerIndex: 0, explanation: '影響 (Eikyou).' },
                        { id: 'ja-n3-u3-l3-q4', question: '「係員[かかりいん]」so\'zining ma\'nosi:', options: ['Mas\'ul xodim / Navbatchi', 'Prezident', 'Talaba', 'Mijoz'], correctAnswerIndex: 0, explanation: 'Kakariin — Mas\'ul xodim.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u3-l4',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u3',
        unitTitle: 'Unit 3: Keigo & Business Japanese',
        language: 'ja',
        level: 'N3',
        lessonNumber: 4,
        title: 'N3 Intermediate Kanji: Nature, Weather & Disasters (地震, 台風, 気温, 変化, 被害)',
        description: 'Zilzila, to\'fon, harorat o\'zgarishi va tabiiy ofatlar kanjilari.',
        estimatedDurationMinutes: 15,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n3-u3-l4-s1',
                title: 'Tabiat va Ofat Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Nature & Disasters Kanji',
                    explanation: '地 (chi/ji - yer), 震 (shin/furu - silkinish/titrash), 台 (tai - minbar/tayanch), 風 (fuu/kaze - shamol), 変 (hen/ka - o\'zgarish), 化 (ka/bake - evrilish), 被 (hi/koumu - qamrab olish), 害 (gai - zarar).',
                    vocabulary: [
                        { term: '地震[じしん]', reading: 'Jishin', meaning: 'Zilzila', exampleSentence: '大[おお]きな 地震[じしん]が 起[お]きた。', exampleTranslation: 'Katta zilzila sodir bo\'ldi.' },
                        { term: '台風[たいふう]', reading: 'Taifuu', meaning: 'Tayfun / To\'fon', exampleSentence: '台風[たいふう]が 近[ちか]づいている。', exampleTranslation: 'Tayfun yaqinlashmoqda.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Iyeroglifni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u3-l4-e1', type: 'multiple-choice', prompt: '«Iqlim o\'zgarishi» birikmasidagi "o\'zgarish" kanjisi qaysi?', options: ['変化[へんか]', '台風[たいふう]', '地震[じしん]', '気温[きおん]'], correctAnswer: 0, explanation: '変化 (Henka).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u3-l4-q1', question: '«Zarar / Talafot» kanjisi qaysi?', options: ['被害[ひがい]', '政治[せいじ]', '経済[けいざい]', '案内[あんない]'], correctAnswerIndex: 0, explanation: '被害 (Higai).' },
                        { id: 'ja-n3-u3-l4-q2', question: '「気温[きおん]が 下[さ]がる」ning ma\'nosi:', options: ['Havo harorati tushmoqda', 'Harorat ko\'tarilmoqda', 'Zilzila bo\'ldi', 'Yomg\'ir yog\'di'], correctAnswerIndex: 0, explanation: 'Harorat pasaymoqda.' },
                        { id: 'ja-n3-u3-l4-q3', question: '«Zilzila» so\'zining to\'g\'ri kanjisi va o\'qilishi:', options: ['地震[じしん] (Jishin)', '自身[じしん]', '自信[じしん]', '時針[じしん]'], correctAnswerIndex: 0, explanation: '地震 (Jishin).' },
                        { id: 'ja-n3-u3-l4-q4', question: '「台風[たいふう]による 被害[ひがい]」nimani bildiradi?', options: ['Tayfun sababli yetkazilgan talafot', 'Yangi ob-havo', 'Tayfun to\'xtadi', 'Shamol yo\'q'], correctAnswerIndex: 0, explanation: 'Damage caused by typhoon.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u3-l5',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u3',
        unitTitle: 'Unit 3: Keigo & Business Japanese',
        language: 'ja',
        level: 'N3',
        lessonNumber: 5,
        title: 'N3 Choukai: Quick Response (即時応答) Mastery',
        description: 'JLPT N3 eshitish imtihonining eng tezkor bo\'limi: qisqa iboraga bir zumda to\'g\'ri javob qaytarish.',
        estimatedDurationMinutes: 16,
        icon: '⚡',
        steps: [
            {
                id: 'ja-n3-u3-l5-s1',
                title: '即時応答 (Sokuji Outou) Strategiyasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Quick Response Listening Section',
                    explanation: 'Audioda bitta jumla aytiladi (masalan:「この書類、明日までにチェックしておいてくれる？」) va darhol 3 ta qisqa javob varianti o\'qiladi. Varaqada hech narsa yozilmagan bo\'ladi!',
                    keyPoints: [
                        'Keigo, taklif, iltimos va norozilik iboralariga tezkor reaksiyani mashq qilish.'
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l5-s2',
                title: 'Tezkor Sinov Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Eng tabiiy javobni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u3-l5-e1', type: 'multiple-choice', prompt: 'Suhbatdosh:「田中さん、ちょっと手伝っていただけませんか。」 Sizning javobingiz:', options: ['ええ、いいですよ。何ですか。', 'はい、手伝いました。', 'いいえ、手伝います。', 'どういたしまして。'], correctAnswer: 0, explanation: 'Ee, ii desu yo. Nan desu ka.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u3-l5-q1', question: 'Boshliq:「この企画書、目を通しておいてくれた？」 Sizning javobingiz:', options: ['はい、先ほど 拝見[はいけん]いたしました。', 'いいえ、見[み]てください。', 'はい、目[め]が 痛[いた]いです。', 'どういたしまして。'], correctAnswerIndex: 0, explanation: 'Hai, sakihodo haiken itashimashita (Kenjougo).' },
                        { id: 'ja-n3-u3-l5-q2', question: 'Hamkasb:「会議の準備、手伝おうか。」 Sizning javobingiz:', options: ['助[たす]かるよ、お願[ねが]いできる？', 'はい、手伝[てつだ]いましょう。', '手伝[てつだ]っては いけません。', 'さようなら。'], correctAnswerIndex: 0, explanation: 'Tasukaru yo, onegai dekiru?' },
                        { id: 'ja-n3-u3-l5-q3', question: 'Xo\'jayin:「悪いけど、コピー頼める？」 Sizning javobingiz:', options: ['かしこまりました。すぐ やります。', 'ダメです。', 'コピーが あります。', 'ごちそうさま。'], correctAnswerIndex: 0, explanation: 'Kashikomarimashita. Sugu yarimasu.' },
                        { id: 'ja-n3-u3-l5-q4', question: 'Sokuji Outou bo\'limida bitta savolga javob berish uchun qancha soniya vaqt beriladi?', options: ['Faqat 3-5 soniya', '2 daqiqa', '10 daqiqa', 'Vaqt chegarasiz'], correctAnswerIndex: 0, explanation: '3-5 seconds instant response.' }
                    ]
                }
            }
        ]
    },

    // Unit 4: Advanced Reasoning & Contrast
    {
        id: 'ja-n3-u4-l1',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u4',
        unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
        language: 'ja',
        level: 'N3',
        lessonNumber: 1,
        title: 'Contrast & Opposites: 〜に対して vs 〜反面 (In contrast to vs On the flip side)',
        description: 'Taqqoslashdagi keskin farq (taishite) va bir narsaning ikki qarama-qarshi tomoni (hanmen).',
        estimatedDurationMinutes: 15,
        icon: '☯️',
        steps: [
            {
                id: 'ja-n3-u4-l1-s1',
                title: '〜に対して va 〜反面 Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Direct Contrast (〜に対して) vs Duality (〜反面)',
                    explanation: '1. 〜に対[たい]して (Ikki narsani solishtirish): 兄[あに]が 社交的[しゃこうてき]なのに対[たい]して、弟[おとうと]は 内気[うちき]だ (Akam kirishimli bo\'lgani holda, ukam tortinchoq). 2. 〜反面[はんめん] (Bitta narsaning ikkala ijobiy va salbiy tomoni): 一人[ひとり]暮[ぐ]らしは 自由[じゆう]な 反面[はんめん]、寂[さび]しさも ある (Yolg\'iz yashash erkin bo\'lgani bilan, yolg\'izlik hissi ham bor).',
                    vocabulary: [
                        { term: '社交的[しゃこうてき]', reading: 'Shakouteki', meaning: 'Kirishimli / Muomalali', exampleSentence: '社交的[しゃこうてき]な 人[ひと]。', exampleTranslation: 'Kirishimli inson.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri bog\'lovchini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u4-l1-e1', type: 'multiple-choice', prompt: '«Ushbu dori juda samarali bo\'lgani bilan, nojo\'ya ta\'sirlari ham kuchli»:', options: ['この薬[くすり]は 効果[こうか]が 高[たか]い 反面[はんめん]、副作用[ふくさよう]も 強[つよ]い', '効果[こうか]が 高[たか]い 対[たい]して', '効果[こうか]が 高[たか]い から', '効果[こうか]です'], correctAnswer: 0, explanation: 'Takai hanmen (bitta narsaning ikki tomoni).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u4-l1-q1', question: 'Bitta hodisaning ham yaxshi, ham yomon tomonini ochib berishda qaysi biri ishlatiladi?', options: ['〜反面[はんめん] (Hanmen)', '〜に対[たい]して', '〜から', '〜ため'], correctAnswerIndex: 0, explanation: '〜反面 (On the other hand / Flip side).' },
                        { id: 'ja-n3-u4-l1-q2', question: '«Katta shaharlar qulay bo\'lgani bilan, yashash narxi qimmat»:', options: ['都会[とかい]は 便利[べんり]な 反面[はんめん]、生活[せいかつ]費[ひ]が 高[たか]い', '都会[とかい]は 便利[べんり]な 対[たい]して', '都会[とかい]だから', '都会[とかい]です'], correctAnswerIndex: 0, explanation: 'Benri na hanmen.' },
                        { id: 'ja-n3-u4-l1-q3', question: '«Erkaklar soni ko\'payganiga nisbatan ayollar soni kamaydi»:', options: ['男性[だんせい]が 増[ふ]えたのに 対[たい]して、女性[じょせい]は 減[へ]った', '増[ふ]えた 反面[はんめん]', '増[ふ]えた から', '増[ふ]えた'], correctAnswerIndex: 0, explanation: 'Fueta no ni taishite (ikkala toifani solishtirish).' },
                        { id: 'ja-n3-u4-l1-q4', question: '「内気[うちき]な」so\'zining ma\'nosi:', options: ['Tortinchoq / Kamgap', 'Kirishimli', 'Jizzaki', 'Xushchaqchaq'], correctAnswerIndex: 0, explanation: 'Uchiki na — Tortinchoq.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u4-l2',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u4',
        unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
        language: 'ja',
        level: 'N3',
        lessonNumber: 2,
        title: 'Cause & Spontaneous Emotion: 〜によって (Means & Cause) & 〜せいで',
        description: 'Sabab va vosita (ni yotte - orqali/sababli) hamda ayblovchi salbiy sabab (sei de - dastidan).',
        estimatedDurationMinutes: 15,
        icon: '🌧️',
        steps: [
            {
                id: 'ja-n3-u4-l2-s1',
                title: '〜によって va 〜せいで',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Means / Cause (〜によって) vs Blame (〜せいで)',
                    explanation: '1. 〜によって: Vosita ("orqali") yoki neytral sabab ("tufayli"): インターネットによって、世界[せかい]と つながる (Internet orqali dunyo bilan bog\'lanamiz); 地震[じしん]によって 建物[たてもの]が 壊[こわ]れた (Zilzila tufayli). 2. 〜せいで: Faqat salbiy oqibat va birovni/biror narsani ayblash ("... dastidan / kasofatiga"): 台風[たいふう]の せいで、旅行[りょこう]が 中止[ちゅうし]に なった (To\'fon dastidan sayohat bekor bo\'ldi).',
                    vocabulary: [
                        { term: '中止[ちゅうし]', reading: 'Chuushi', meaning: 'Bekor qilish / To\'xtatish', exampleSentence: '試合[しあい]が 中止[ちゅうし]に なった。', exampleTranslation: 'O\'yin bekor bo\'ldi.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri sabab ifodasini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u4-l2-e1', type: 'multiple-choice', prompt: '«Uning xatosi dastidan barcha jazolandi (salbiy ayblov)»:', options: ['彼[かれ]の ミスの せいで、みんなが 怒[おこ]られた', '彼[かれ]の おかげで', '彼[かれ]に よって', '彼[かれ]です'], correctAnswer: 0, explanation: 'Misu no sei de (dastidan).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u4-l2-q1', question: 'Ijobiy natija va minnatdorchilik bildirishda qaysi biri ishlatiladi?', options: ['〜おかげで (Okage de - sharofati bilan)', '〜せいで (dastidan)', '〜くせに', '〜わりに'], correctAnswerIndex: 0, explanation: '〜おかげで (Thanks to / Sharofati bilan).' },
                        { id: 'ja-n3-u4-l2-q2', question: '«Ustozimning yordami sharofati bilan imtihondan o\'tdim»:', options: ['先生[せんせい]の おかげで、試験[しけん]に 合格[ごうかく]しました', '先生[せんせい]の せいで', '先生[せんせい]に よって', '先生[せんせい]です'], correctAnswerIndex: 0, explanation: 'Sensei no okage de.' },
                        { id: 'ja-n3-u4-l2-q3', question: '「人[ひと]によって 考[かんが]え方[かた]が 違[ちが]う」dagi 〜によって nimani bildiradi?', options: ['Turli-tumanlik (... ga qarab har xil)', 'Salbiy ayblov', 'Minnatdorchilik', 'Taqiq'], correctAnswerIndex: 0, explanation: 'Depends on the person.' },
                        { id: 'ja-n3-u4-l2-q4', question: '«Uyqusizlik dastidan boshim og\'riyapti»:', options: ['寝不足[ねぶそく]の せいで、頭[あたま]が 痛[いた]い', '寝不足[ねぶそく]の おかげで', '寝不足[ねぶそく]なら', '寝不足[ねぶそく]です'], correctAnswerIndex: 0, explanation: 'Nebusoku no sei de.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u4-l3',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u4',
        unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
        language: 'ja',
        level: 'N3',
        lessonNumber: 3,
        title: 'Limitation & Scope: 〜ばかり vs 〜だけ vs 〜のみ',
        description: 'Faqatgina (dake - aniq chegara), faqat shu ishni qilaverish (bakari - salbiy ko\'p takrorlanish).',
        estimatedDurationMinutes: 15,
        icon: '🔄',
        steps: [
            {
                id: 'ja-n3-u4-l3-s1',
                title: '〜ばかり va 〜だけ Farqi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜ばかり (Doimiy takrorlash / Salbiy) vs 〜だけ (Neytral Chegara)',
                    explanation: '1. 〜ばかり: Shunchaki "faqat" emas, balki bir xil ishni keragidan ortiq takrorlayverish (ko\'pincha tanqidiy ohang): ゲームばかり している (Faqat o\'yin o\'ynayveradi-a!); 肉[にく]ばかり 食[た]べないで、野菜[やさい]も 食[た]べなさい (Faqat go\'sht yeyvermasdan, sabzavot ham yeng). 2. 〜だけ: Neytral obyektiv chegara: 100円[ひゃくえん]だけ あります (Faqat 100 iyena bor).',
                    vocabulary: [
                        { term: '遊[あそ]んでばかり', reading: 'Asonde bakari', meaning: 'Faqat o\'ynayverish', exampleSentence: '遊[あそ]んでばかり いないで、勉強[べんきょう]しなさい。', exampleTranslation: 'Faqat o\'ynayvermasdan, dars qil.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri chegaralash shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u4-l3-e1', type: 'multiple-choice', prompt: '«Ukam faqat televizor ko\'raveradi (tanqidiy)»:', options: ['弟[おとうと]は テレビばかり 見[み]ている', 'テレビだけ 見[み]る', 'テレビが あります', 'テレビです'], correctAnswer: 0, explanation: 'Terebi bakari mite iru.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u4-l3-q1', question: '«Fe\'lning Ta-shakli + ばかり (Ta bakari)» nimani bildiradi?', options: ['Hozirgina biror ishni bajarib bo\'lganlikni (Just finished doing)', 'Faqat o\'yin o\'ynashni', 'Hech qachon qilmaslikni', 'Kelasi zamonni'], correctAnswerIndex: 0, explanation: 'Ta bakari = Just finished doing.' },
                        { id: 'ja-n3-u4-l3-q2', question: '「日本[にほん]に 来[き]た ばかりです」ning ma\'nosi:', options: ['Yaponiyaga hozirgina (yaqindagina) keldim', 'Yaponiyaga bormoqchiman', 'Yaponiyada yashamayman', 'Yaponiyaga ko\'p bordim'], correctAnswerIndex: 0, explanation: 'Just arrived in Japan.' },
                        { id: 'ja-n3-u4-l3-q3', question: '«Faqat bitta savolga javob bera olmadim (neytral fakt)»:', options: ['1問[いちもん]だけ 答[こた]えられなかった', '1問[いちもん]ばかり', '1問[いちもん]くせに', '1問[いちもん]です'], correctAnswerIndex: 0, explanation: '1-mon dake (neytral chegara).' },
                        { id: 'ja-n3-u4-l3-q4', question: 'Rasmiy yozma tilda «dake» o\'rniga qaysi so\'z ishlatiladi?', options: ['〜のみ (Nomi)', '〜ばかり', '〜ほど', '〜くらい'], correctAnswerIndex: 0, explanation: '〜のみ (Formal written "only").' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u4-l4',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u4',
        unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
        language: 'ja',
        level: 'N3',
        lessonNumber: 4,
        title: 'JLPT N3 Dokkai: Mid-Length Reading & Logic Extraction',
        description: 'O\'rta hajmdagi tahliliy matnlarni o\'qib muallifning asosiy xulosasini topish.',
        estimatedDurationMinutes: 16,
        icon: '📖',
        steps: [
            {
                id: 'ja-n3-u4-l4-s1',
                title: 'O\'rta Hajmli Dokkai',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Mid-Length Text Analysis: Communication in Digital Age',
                    explanation: 'SNSの 普及[ふきゅう]に より、私[わたし]たちは いつでも 誰[だれ]とでも 連絡[れんらく]が 取[と]れるように なった。 しかし、短[みじか]い メッセージや スタンプだけの やり取[と]りが 増[ふ]えたことで、相手[あいて]の 表情[ひょうじょう]や 声[こえ]の トーンを 感[かん]じ取[と]る 機会[きかい]が 減少[げんしょう]して いる。 筆者[ひっしゃ]は、便利[べんり]な ツールを 使[つか]いながらも、時[とき]には 直接[ちょくせつ] 会[あ]って 言葉[ことば]を 交[か]わすことの 大切[たいせつ]さを 忘[わす]れては ならないと 主張[しゅちょう]する。',
                    keyPoints: [
                        'Muallifning asosiy g\'oyasi: Matn oxiridagi「〜忘れてはならないと主張する」(Yuzma-yuz muloqot qadrini unutmaslik kerak).'
                    ],
                    vocabulary: [
                        { term: '普及[ふきゅう]', reading: 'Fukyuu', meaning: 'Keng tarqalish / Ommalashish', exampleSentence: 'スマホの 普及[ふきゅう]。', exampleTranslation: 'Smartfonlarning ommalashishi.' },
                        { term: '筆者[ひっしゃ]', reading: 'Hissha', meaning: 'Muallif / Yozuvchi', exampleSentence: '筆者[ひっしゃ]の 考[かんが]え。', exampleTranslation: 'Muallifning fikri.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l4-s2',
                title: 'Tahlil Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Muallifning asosiy fikrini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u4-l4-e1', type: 'multiple-choice', prompt: 'Muallif nima haqida ta\'kidlamoqda?', options: ['Raqamli qulayliklardan foydalangan holda, ba\'zan yuzma-yuz uchrashib gaplashish muhimligini unutmaslik kerak', 'SNS dan butunlay voz kechish kerak', 'Faqat stikerlar orqali muloqot qilish lozim', 'Smartfonlarni taqiqlash kerak'], correctAnswer: 0, explanation: 'Direct face-to-face communication value.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u4-l4-q1', question: 'JLPT Dokkai savollarida muallifning fikri ko\'pincha abzasning qaysi qismida ifodalanadi?', options: ['Matnning eng oxirgi xulosa qismida (〜と考える, 〜べきだ, 〜ではないだろうか)', 'Eng birinchi so\'zida', 'Faqat sarlavhada', 'Faqat qavs ichida'], correctAnswerIndex: 0, explanation: 'Conclusion at end of text.' },
                        { id: 'ja-n3-u4-l4-q2', question: '「交[か]わす (Kawasu)」fe\'lining ma\'nosi:', options: ['O\'zaro almashmoq (so\'z almashmoq / salomlashmoq)', 'Sotib olmoq', 'Yozmoq', 'Yugurmoq'], correctAnswerIndex: 0, explanation: 'O\'zaro almashmoq.' },
                        { id: 'ja-n3-u4-l4-q3', question: '«SNS tufayli qaysi imkoniyat kamaydi?»', options: ['Suhbatdoshning yuz ifodasi va ovoz ohangini his qilish imkoniyati', 'Rasm yuborish', 'Matn yozish', 'Xabar yuborish'], correctAnswerIndex: 0, explanation: 'Facial expressions & voice tone cues.' },
                        { id: 'ja-n3-u4-l4-q4', question: '「減少[げんしょう]する」kanjisining ma\'nosi:', options: ['Kamaymoq / Qisqarmoq', 'Ko\'paymoq', 'To\'xtamoq', 'Boshlanmoq'], correctAnswerIndex: 0, explanation: 'Genshou suru — Kamaymoq.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u4-l5',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u4',
        unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
        language: 'ja',
        level: 'N3',
        lessonNumber: 5,
        title: 'Nuanced Expectations: 〜はずだ vs 〜わけだ vs 〜べきだ',
        description: 'Mantiqiy ishonch (hazu da - bo\'lishi kerak), tabiiy xulosa (wake da - shunday ekanda), axloqiy burch (beki da).',
        estimatedDurationMinutes: 16,
        icon: '💡',
        steps: [
            {
                id: 'ja-n3-u4-l5-s1',
                title: '〜はず, 〜わけ, 〜べき Farqlari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Expectation (はず) vs Explanation (わけ) vs Obligation (べき)',
                    explanation: '1. 〜はずだ: Mantiqan shunday bo\'lishi kerak (aniq dalilga asoslangan ishonch): 今日[きょう]は 日曜日[にちようび]だから、銀行[ぎんこう]は 休[やす]みのはずだ (Bugun yakshanba, demak bank yopiq bo\'lishi kerak). 2. 〜わけだ: Sababni tushunib yetgach: 「昨日[きのう] 熱[ねつ]が あったんです」「ああ、それで 元気[げんき]が なかったわけですね」 (Kecha isitmasi bor edida, shuning uchun darmonsiz ekanda!). 3. 〜べきだ: Shunday qilish burch/to\'g\'ri: 約束[やくそく]は 守[まも]るべきだ (Va\'dani bajarish kerak).',
                    vocabulary: [
                        { term: '守[まも]る', reading: 'Mamoru', meaning: 'Himoya qilmoq / Bajarmoq (va\'dani)', exampleSentence: 'ルールを 守[まも]る。', exampleTranslation: 'Qoidaga amal qilmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri mantiqiy xulosani tanlang.',
                    exercises: [
                        { id: 'ja-n3-u4-l5-e1', type: 'multiple-choice', prompt: '«U 10 yil Yaponiyada yashagan, demak yapon tilini yaxshi bilishi kerak (mantiqiy ishonch)»:', options: ['彼[かれ]は 10年[じゅうねん] 日本[にほん]に 住[す]んでいたから、日本語[にほんご]が 上手[じょうず]な はずだ', '上手[じょうず]な わけだ', '上手[じょうず]な べきだ', '上手[じょうず]です'], correctAnswer: 0, explanation: 'Jouzu na hazu da (mantiqiy ishonch).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u4-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u4-l5-q1', question: '«Kattalarga hurmat ko\'rsatish insoniy burchdir»:', options: ['年上[としうえ]の 人[ひと]を 敬[うやま]うべきだ', '敬[うやま]うはずだ', '敬[うやま]うわけだ', '敬[うやま]う'], correctAnswerIndex: 0, explanation: 'Uyamau beki da (burch/axloqiy talab).' },
                        { id: 'ja-n3-u4-l5-q2', question: '「する」fe\'lining 〜べき shakli qaysi?', options: ['すべきだ (yoki するべきだ)', 'すべくだ', 'させべきだ', 'したべきだ'], correctAnswerIndex: 0, explanation: 'Subeki da / Suru beki da.' },
                        { id: 'ja-n3-u4-l5-q3', question: '«Bunday bo\'lishi mutlaqo mumkin emas!» qat\'iy inkor qaysi?', options: ['〜はずが ない (Hazu ga nai) / 〜わけが ない (Wake ga nai)', '〜ないべきだ', '〜ないそうだ', '〜ないだろう'], correctAnswerIndex: 0, explanation: 'Hazu ga nai / Wake ga nai.' },
                        { id: 'ja-n3-u4-l5-q4', question: '「暑[あつ]いわけだ。38度[さんじゅうはちど]も ある」ning ma\'nosi:', options: ['Issiq bo\'lmay iloji yo\'qda, harorat 38 daraja ekanku!', 'Issiq emas', 'Sovuq bo\'lishi kerak', 'Harorat yo\'q'], correctAnswerIndex: 0, explanation: 'No wonder it is so hot!' }
                    ]
                }
            }
        ]
    },

    // Unit 5: N3 Intermediate Kanji & Reading
    {
        id: 'ja-n3-u5-l1',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u5',
        unitTitle: 'Unit 5: Kanji Mastery & Reading',
        language: 'ja',
        level: 'N3',
        lessonNumber: 1,
        title: 'N3 Kanji 1: Technology & Science (科学, 技術, 発明, 研究, 実験)',
        description: 'Fan, texnika, ixtiro va tadqiqotlarni ifodalovchi N3 iyerogliflari.',
        estimatedDurationMinutes: 15,
        icon: '🔬',
        steps: [
            {
                id: 'ja-n3-u5-l1-s1',
                title: 'Ilm-fan va Texnologiya Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Science & Innovation Kanji',
                    explanation: '科 (ka - bo\'lim/fan), 技 (gi/waza - mahorat/texnika), 術 (jutsu - san\'at/usul), 発 (hatsu - paydo bo\'lish/otilish), 明 (mei/aka - yorug\'/ochiq), 究 (kyuu/kiwa - tadqiq qilish), 実 (jitsu/mi - haqiqat/meva), 験 (ken - sinov).',
                    vocabulary: [
                        { term: '科学[かがく]', reading: 'Kagaku', meaning: 'Ilm-fan / Fan', exampleSentence: '現代[げんだい]の 科学[かがく]。', exampleTranslation: 'Zamonaviy ilm-fan.' },
                        { term: '技術[ぎじゅつ]', reading: 'Gijutsu', meaning: 'Texnologiya / Texnika', exampleSentence: '先端[せんたん] 技術[ぎじゅつ]。', exampleTranslation: 'Ilg\'or texnologiya.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Iyeroglifni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u5-l1-e1', type: 'multiple-choice', prompt: '«Ixtiro qilmoq» kanjisi qaysi?', options: ['発明[はつめい]', '実験[じっけん]', '研究[けんきゅう]', '技術[ぎじゅつ]'], correctAnswer: 0, explanation: '発明 (Hatsumei).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u5-l1-q1', question: '«Laboratoriya tajribasi / Eksperiment» kanjisi qaysi?', options: ['実験[じっけん]', '研究[けんきゅう]', '科学[かがく]', '発明[はつめい]'], correctAnswerIndex: 0, explanation: '実験 (Jikken).' },
                        { id: 'ja-n3-u5-l1-q2', question: '「研究[けんきゅう]者[しゃ]」so\'zining ma\'nosi:', options: ['Tadqiqotchi / Olim', 'Talaba', 'Boshliq', 'Shifokor'], correctAnswerIndex: 0, explanation: 'Kenkyuusha — Tadqiqotchi.' },
                        { id: 'ja-n3-u5-l1-q3', question: '«Kashfiyot (yangi narsani topish)» kanjisi qaysi?', options: ['発見[はっけん]', '発明[はつめい]', '発展[はってん]', '出発[しゅっぱつ]'], correctAnswerIndex: 0, explanation: '発見 (Hakken).' },
                        { id: 'ja-n3-u5-l1-q4', question: '「発展[はってん]する」ning ma\'nosi:', options: ['Rivojlanmoq / Taraqqiy etmoq', 'Kasal bo\'lmoq', 'Tugamoq', 'Boshlanmoq'], correctAnswerIndex: 0, explanation: 'Hatten suru — Rivojlanmoq.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u5-l2',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u5',
        unitTitle: 'Unit 5: Kanji Mastery & Reading',
        language: 'ja',
        level: 'N3',
        lessonNumber: 2,
        title: 'N3 Kanji 2: Health, Body & Feelings (感情, 緊張, 複雑, 単純, 苦痛)',
        description: 'Tug\'g\'ular, asabiylashish, murakkablik va oddiylik iyerogliflari.',
        estimatedDurationMinutes: 15,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n3-u5-l2-s1',
                title: 'Hissiyot va Holat Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Feelings & Complexities',
                    explanation: '感 (kan - his qilish), 情 (jou/nasa - tuyg\'u/mehr), 緊 (kin - tarang), 張 (chou/ha - tortish/taranglashish), 複 (fuku - takror/qo\'shaloq), 雑 (zatsu - aralash), 単 (tan - yakka/oddiy), 純 (jun - toza/sofdil).',
                    vocabulary: [
                        { term: '緊張[きんちょう]', reading: 'Kinchou', meaning: 'Hayajon / Taranglik', exampleSentence: '面接[めんせつ]で 緊張[きんちょう]した。', exampleTranslation: 'Suhbatda hayajonlandim.' },
                        { term: '複雑[ふくざつ]', reading: 'Fukuzatsu', meaning: 'Murakkab / Chigal', exampleSentence: '複雑[ふくざつ]な 問題[もんだい]。', exampleTranslation: 'Murakkab masala.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Iyeroglifni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u5-l2-e1', type: 'multiple-choice', prompt: '«Oddiy / Sodda» kanjisi qaysi?', options: ['単純[たんじゅん]', '複雑[ふくざつ]', '緊張[きんちょう]', '感情[かんじょう]'], correctAnswer: 0, explanation: '単純 (Tanjun).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u5-l2-q1', question: '«Hayajonlanmoq / Asabiylashmoq» kanjisi qaysi?', options: ['緊張[きんちょう]', '感情[かんじょう]', '苦痛[くつう]', '安心[あんしん]'], correctAnswerIndex: 0, explanation: '緊張 (Kinchou).' },
                        { id: 'ja-n3-u5-l2-q2', question: '「感情[かんじょう]を 抑[おさ]える」ning ma\'nosi:', options: ['Hissiyotlarni jilovlamoq / Bosiq bo\'lmoq', 'Yig\'lamoq', 'Kulmoq', 'Xafa bo\'lmoq'], correctAnswerIndex: 0, explanation: 'Hissiyotlarni jilovlash.' },
                        { id: 'ja-n3-u5-l2-q3', question: '«Murakkab» (Fukuzatsu) ning antonimi qaysi?', options: ['単純[たんじゅん] (Tanjun)', '緊張[きんちょう]', '安心[あんしん]', '心配[しんぱい]'], correctAnswerIndex: 0, explanation: 'Tanjun (oddiy).' },
                        { id: 'ja-n3-u5-l2-q4', question: '「苦痛[くつう]」so\'zidagi 痛 nimani bildiradi?', options: ['Og\'riq / Azob', 'Quvonch', 'Hayajon', 'Balandlik'], correctAnswerIndex: 0, explanation: 'Og\'riq / Azob.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u5-l3',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u5',
        unitTitle: 'Unit 5: Kanji Mastery & Reading',
        language: 'ja',
        level: 'N3',
        lessonNumber: 3,
        title: 'N3 Conditionals Deep Dive: 〜と vs 〜たら vs 〜ば vs 〜なら',
        description: 'To\'rtta yapon shart ergash shaklining aniq chegaralari va nozik farqlari.',
        estimatedDurationMinutes: 16,
        icon: '🔀',
        steps: [
            {
                id: 'ja-n3-u5-l3-s1',
                title: 'To\'rtta Shart Shakli Qiyosi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'The 4 Japanese Conditionals (〜と, 〜たら, 〜ば, 〜なら)',
                    explanation: '1. 〜と: Tabiiy, muqarrar natija ("Tugmani bossang, chipta chiqadi"). 2. 〜たら: O\'tmishdagi kutilmagan voqea yoki universal shart ("Borib ko\'rsam, u yo\'q ekan"). 3. 〜ば: Umumiy gipotetik shart va maslahat ("Vaqt bo\'lsa, boraman"). 4. 〜なら: Suhbatdosh aytgan mavzuga taklif/maslahat ("Yaponiya bo\'yicha bo\'lsa, u kishidan so\'rang").',
                    vocabulary: [
                        { term: '必[かなら]ず', reading: 'Kanarazu', meaning: 'Albatta / Muqarrar', exampleSentence: '春[はる]に なると、花[はな]が 咲[さ]く。', exampleTranslation: 'Bahor kelsa, gullar ochiladi.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shart turini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u5-l3-e1', type: 'multiple-choice', prompt: '«Sushi yemoqchi bo\'lsangiz, ana u do\'kon eng yaxshisi» (mavzuga tavsiya):', options: ['寿司[すし]なら、あの店[みせ]が 一番[いちばん]ですよ', '寿司[すし]と、あの店[みせ]', '寿司[すし]ば、あの店[みせ]', '寿司[すし]です'], correctAnswer: 0, explanation: 'Sushi nara (Agar sushi haqida bo\'lsa).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u5-l3-q1', question: 'Tabiiy qonuniyatlar (Masalan: Bahor kelsa gullar ochiladi) uchun qaysi biri eng mos?', options: ['〜と (To)', '〜なら', '〜たい', '〜ても'], correctAnswerIndex: 0, explanation: '〜と (Tabiiy muqarrar oqibat).' },
                        { id: 'ja-n3-u5-l3-q2', question: '«Derazani ochib qarasam, qor yog\'ayotgan ekan (kutilmagan kashfiyot)»:', options: ['窓[まど]を 開[あ]けたら、雪[ゆき]が 降[ふ]っていた', '窓[まど]を 開[あ]けると 雪[ゆき]', '開[あ]ければ 雪[ゆき]', '開[あ]けるなら'], correctAnswerIndex: 0, explanation: 'Aketara (o\'tmishdagi kutilmagan kashfiyot).' },
                        { id: 'ja-n3-u5-l3-q3', question: 'Qaysi shart shaklidan keyin buyruq yoki taklif kela OLMAYDI?', options: ['〜と (To dan keyin buyruq/taklif qo\'llab bo\'lmaydi)', '〜たら', '〜なら', '〜ば'], correctAnswerIndex: 0, explanation: '〜と cannot be followed by volition/command.' },
                        { id: 'ja-n3-u5-l3-q4', question: '«Arzon bo\'lsa sotib olaman» (ba shakli):', options: ['安[やす]ければ 買[か]います', '安[やす]いと 買[か]う', '安[やす]いなら', '安[やす]い'], correctAnswerIndex: 0, explanation: 'Yasukereba kaimasu.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u5-l4',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u5',
        unitTitle: 'Unit 5: Kanji Mastery & Reading',
        language: 'ja',
        level: 'N3',
        lessonNumber: 4,
        title: 'Formal Writing Style (普通体 / だ・である調) & Academic Register',
        description: 'Insholar, ilmiy maqolalar va gazetalarning rasmiy yozma tili (Da / Dearu).',
        estimatedDurationMinutes: 15,
        icon: '✍️',
        steps: [
            {
                id: 'ja-n3-u5-l4-s1',
                title: 'だ・である Yozma Tili',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Written Academic Register (である調)',
                    explanation: 'Yapon tilida kitoblar, maqolalar va gazetalar です/ます shaklida emas, balki である shaklida yoziladi: です -> である, ではありません -> ではない, でした -> であった. Fe\'llar oddiy jisho-kei/ta-kei shaklda bo\'ladi.',
                    keyPoints: [
                        '本稿[ほんこう]の 目的[もくてき]は〜を 明[あき]らかにする ことで ある。 (Ushbu maqolaning maqsadi ... ni oydinlashtirishdan iboratdir.)'
                    ],
                    vocabulary: [
                        { term: '明[あき]らか', reading: 'Akiraka', meaning: 'Ochiq-oydin / Yaqqol', exampleSentence: '事実[じじつ]が 明[あき]らかに なった。', exampleTranslation: 'Haqiqat oydinlashdi.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Rasmiy yozma shaklni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u5-l4-e1', type: 'multiple-choice', prompt: '«Bu muhim masaladir» ilmiy maqola shakli qaysi?', options: ['これ は 重要[じゅうよう]な 問題[もんだい]で ある', 'これ は 重要[じゅうよう]な 問題[もんだい]です', '問題[もんだい]だね', '問題[もんだい]でした'], correctAnswer: 0, explanation: 'Mondai de aru (rasmiy ilmiy yozma til).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u5-l4-q1', question: 'Gazeta va rasmiy hisobotlarda qaysi uslub qo\'llaniladi?', options: ['である調 (Dearu-chou)', 'です・ます調', 'くだけた話し言葉', 'ギャル文字'], correctAnswerIndex: 0, explanation: 'である調.' },
                        { id: 'ja-n3-u5-l4-q2', question: '「ではない」ning o\'tgan zamon rasmiy yozma shakli:', options: ['ではなかった / であたらなかった', 'じゃない', 'でしたない', 'ではないでした'], correctAnswerIndex: 0, explanation: 'Dewa nakatta.' },
                        { id: 'ja-n3-u5-l4-q3', question: '«Ushbu tadqiqot natijasi quyidagicha»:', options: ['研究[けんきゅう]の 結果[けっか]は 次[つぎ]の 通[とお]りで ある', '結果[けっか]は 次[つぎ]です', '結果[けっか]だ', '結果[けっか]でした'], correctAnswerIndex: 0, explanation: 'Tsugi no toori de aru.' },
                        { id: 'ja-n3-u5-l4-q4', question: 'JLPT N3 Dokkai matnlarining aksariyati qaysi uslubda yozilgan bo\'ladi?', options: ['Oddiy yozma (だ・である) uslubida', 'Faqat bolalar tilida', 'Katakana bilan', 'Inglizcha'], correctAnswerIndex: 0, explanation: 'だ・である style.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u5-l5',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u5',
        unitTitle: 'Unit 5: Kanji Mastery & Reading',
        language: 'ja',
        level: 'N3',
        lessonNumber: 5,
        title: 'N3 Long Dokkai: Comparative Reading (統合読解)',
        description: 'Ikki xil muallifning bir mavzudagi fikrlarini qiyosiy tahlil qilish.',
        estimatedDurationMinutes: 16,
        icon: '📑',
        steps: [
            {
                id: 'ja-n3-u5-l5-s1',
                title: 'Qiyosiy Dokkai',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Comparative Reading (A & B Texts)',
                    explanation: 'A matn: Qog\'oz kitoblarning hid va sahifani his qilish kabi taktil xususiyatlarini afzal ko\'radi. B matn: Elektron kitoblarning ko\'chma qulayligi va xotira sig\'imini maqtaydi. Savol: Ikkala muallif qaysi nuqtada o\'zaro HAMFIKR?',
                    keyPoints: [
                        'Ikkala matnning umumiy kesishgan nuqtasini topish: «O\'qish orqali intellektual o\'sish muhimligi».'
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l5-s2',
                title: 'Tahlil Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Ikkala muallifning mushtarak fikrini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u5-l5-e1', type: 'multiple-choice', prompt: 'Ikkala muallif qaysi masalada to\'liq yakdil fikrda?', options: ['Kitobning formati qanday bo\'lishidan qat\'i nazar, mutolaa inson tafakkurini boyitishi', 'Qog\'oz kitoblar butunlay yo\'qolishi kerak', 'Smartfonlarni o\'chirish kerak', 'Elektron kitoblar bepul bo\'lishi kerak'], correctAnswer: 0, explanation: 'Universal value of reading.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u5-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u5-l5-q1', question: 'Qiyosiy Dokkai topshiriqlarida eng muhim ko\'nikma nima?', options: ['A va B matnlarining o\'xshash va farqli tomonlarini solishtirib xulosalash', 'Matnni yodlab olish', 'Tezroq sahifani yopish', 'Faqat bitta matnni o\'qish'], correctAnswerIndex: 0, explanation: 'Synthesizing commonalities & divergences.' },
                        { id: 'ja-n3-u5-l5-q2', question: '「共通[きょうつう]している」so\'zining ma\'nosi:', options: ['Umumiy / Bir xil bo\'lgan (ikkisiga ham tegishli)', 'Farqli bo\'lgan', 'Kichik bo\'lgan', 'Eski bo\'lgan'], correctAnswerIndex: 0, explanation: 'Common to both.' },
                        { id: 'ja-n3-u5-l5-q3', question: '「異[こと]なる」so\'zining ma\'nosi:', options: ['Farq qilmoq / Boshqacha bo\'lmoq', 'Bir xil bo\'lmoq', 'To\'xtamoq', 'Yo\'qolmoq'], correctAnswerIndex: 0, explanation: 'To differ.' },
                        { id: 'ja-n3-u5-l5-q4', question: 'JLPT N3 imtihonida Dokkai bo\'limi umumiy ballning qancha qismini tashkil etadi?', options: ['60 ball (umumiy 180 balldan til bilimlari va o\'qish birgalikda 120 ball beradi)', '10 ball', '180 ball', '5 ball'], correctAnswerIndex: 0, explanation: 'Substantial weighted portion of exam.' }
                    ]
                }
            }
        ]
    },

    // Unit 6: JLPT N3 Choukai & Capstone Grand Examination
    {
        id: 'ja-n3-u6-l1',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u6',
        unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
        language: 'ja',
        level: 'N3',
        lessonNumber: 1,
        title: 'N3 Choukai: Summary & Gist Comprehension (概要理解)',
        description: 'Eshitishning umumiy mazmun tushunish qismi: batafsil raqamlar emas, balki asosiy mavzuni anglash.',
        estimatedDurationMinutes: 16,
        icon: '🎧',
        steps: [
            {
                id: 'ja-n3-u6-l1-s1',
                title: '概要理解 (Gaiyou Rikai) Strategiyasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Gist Comprehension in JLPT Listening',
                    explanation: 'Gaiyou Rikai bo\'limida radio eshittirish yoki monolog beriladi. Savol odatda quyidagicha bo\'ladi:「話[はな]し手[て]は 何[なに]について 話[はな]していますか」 (Gapiruvchi nima haqida gapirmoqda?).',
                    keyPoints: [
                        'Mayda tafsilotlarga chalg\'imasdan, umumiy asosiy mavzuni va muallifning xulosasini ilg\'ab olish.'
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l1-s2',
                title: 'Eshitish Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Umumiy mavzuni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u6-l1-e1', type: 'multiple-choice', prompt: 'Spiker shahar ekologiyasida velosipedlarning o\'rni va yangi veloyo\'laklar haqida gapirdi. Asosiy mavzu:', options: ['Ekologik toza shahar transportini rivojlantirish', 'Velosiped narxlari', 'Avtomobil sotib olish', 'Poyezd qatnovi'], correctAnswer: 0, explanation: 'Eco-friendly urban transport development.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u6-l1-q1', question: 'Gaiyou Rikai savollarida nima so\'raladi?', options: ['Nutqning asosiy mavzusi va maqsadi', 'Muallifning tug\'ilgan sanasi', 'Har bir so\'zning imlosi', 'Poyezd chiptasi narxi'], correctAnswerIndex: 0, explanation: 'Overall main theme & speaker stance.' },
                        { id: 'ja-n3-u6-l1-q2', question: 'Spiker «つまり (Tsumari)...» yoki «要するに (Yousuru ni)...» desa, nima aytiladi?', options: ['O\'z fikrining yakuniy xulosasi va asosiy mazmuni', 'Yangi mavzuga o\'tish', 'Salomlashish', 'Kechirim so\'rash'], correctAnswerIndex: 0, explanation: 'Core summary statement.' },
                        { id: 'ja-n3-u6-l1-q3', question: 'N3 Choukai paytida yozib borish (memo qilish) ruxsat etiladimi?', options: ['Ha, test kitobchasiga xohlagancha qaydlar yozib borish mumkin', 'Taqiqlanadi', 'Faqat dastro\'molga yozish mumkin', 'Faqat barmoq bilan chiziladi'], correctAnswerIndex: 0, explanation: 'Taking notes in test booklet is allowed.' },
                        { id: 'ja-n3-u6-l1-q4', question: '«最も 伝[つた]えたい こと» nimani bildiradi?', options: ['Eng yetkazmoqchi bo\'lgan asosiy fikr', 'Eng sirli gap', 'Kechagi xabar', 'Ob-havo'], correctAnswerIndex: 0, explanation: 'Primary message intended by speaker.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u6-l2',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u6',
        unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
        language: 'ja',
        level: 'N3',
        lessonNumber: 2,
        title: 'Star (*) Grammar Mastery: Scrambled Sentence Logic',
        description: 'JLPT ning yulduzcha (*) grammatik topshiriqlarini mantiqiy sintaksis orqali yechish texnikasi.',
        estimatedDurationMinutes: 15,
        icon: '⭐',
        steps: [
            {
                id: 'ja-n3-u6-l2-s1',
                title: 'Yulduzcha (*) Savollari Texnikasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Star Ranking Sentence Construction',
                    explanation: 'Gapda 4 ta bo\'sh joy beriladi: ___ ___ ★ ___ . Variantlardagi 4 ta bo\'lakni grammatik qoidalar asosida to\'g\'ri joylashtirib, ★ turgan 3-o\'rindagi raqamni topish talab etiladi.',
                    keyPoints: [
                        'Juftliklarni oldindan topib olish (masalan: Sifat + Ot, Yuklama + Fe\'l).'
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l2-s2',
                title: 'Yulduzcha Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Yulduzcha o\'rnidagi to\'g\'ri raqamni toping.',
                    exercises: [
                        { id: 'ja-n3-u6-l2-e1', type: 'multiple-choice', prompt: 'Gap:「雨が [ 1. 降った 2. にも 3. かかわらず 4. 試合は ] 行われた。」 To\'g\'ri tartib: 1 -> 2 -> 3 -> 4. Yulduzcha 3-o\'rinda qaysi son turadi?', options: ['3 (かかわらず)', '1', '2', '4'], correctAnswer: 0, explanation: '降った(1) にも(2) かかわらず(3) 試合は(4).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u6-l2-q1', question: 'Yulduzcha savollarini yechishda eng samarali dastlabki qadam nima?', options: ['Bir-biriga grammatik bog\'lanadigan juftliklarni (chunk) birlashtirib olish', 'Hamma javobni 1 deb belgilash', 'Faqat oxirgi so\'zni o\'qish', 'Tavakkal qilish'], correctAnswerIndex: 0, explanation: 'Find grammatical chunks & collocational pairs.' },
                        { id: 'ja-n3-u6-l2-q2', question: '「〜にも かかわらず」grammatikasi nimani bildiradi?', options: ['... qaramasdan (Despite / In spite of)', '... sababli', '... bo\'lgach', '... uchun'], correctAnswerIndex: 0, explanation: 'Despite / In spite of.' },
                        { id: 'ja-n3-u6-l2-q3', question: 'N3 imtihonida nechta yulduzcha (*) savoli tushadi?', options: ['Har yili 5 ta savol', '50 ta', '1 ta', '100 ta'], correctAnswerIndex: 0, explanation: '5 questions in Bunpou section.' },
                        { id: 'ja-n3-u6-l2-q4', question: 'Agar variantda «Ot + にとって» bo\'lsa, u qanday ma\'no beradi?', options: ['... uchun / ... nazarida (From the perspective of)', '... bilan birga', '... haqida', '... dan'], correctAnswerIndex: 0, explanation: 'From the standpoint of.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u6-l3',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u6',
        unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
        language: 'ja',
        level: 'N3',
        lessonNumber: 3,
        title: 'N3 Business Etiquette: Phone Calls & Appointment Confirmation',
        description: 'Yapon kompaniyasida telefon orqali muloqot va uchrashuvlarni tasdiqlash Keigosi.',
        estimatedDurationMinutes: 15,
        icon: '📞',
        steps: [
            {
                id: 'ja-n3-u6-l3-s1',
                title: 'Ishbilarmonlik Telefoniya Tili',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Phone Call Formulas in Japanese Business',
                    explanation: '1. Qo\'ng\'iroqni qabul qilish:「お電話[でんわ]ありがとうございます。〇〇商事[しょうじ]の アリでございます。」 2. Doimiy hamkorga salom:「いつも 大変[たいへん] お世話[せわ]に なっております。」 3. Uchrashuvni tasdiqlash:「明日[あした]の 14時[じゅうよじ]に そちらへ 伺[うかが]います。」',
                    vocabulary: [
                        { term: 'お世話[せわ]に なっております', reading: 'Osewa ni natte orimasu', meaning: 'Doimiy ko\'mak va hamkorligingiz uchun tashakkur', exampleSentence: 'いつも お世話[せわ]に なっております。', exampleTranslation: 'Doimiy hamkorligingiz uchun rahmat.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri biznes telefon formulasini tanlang.',
                    exercises: [
                        { id: 'ja-n3-u6-l3-e1', type: 'multiple-choice', prompt: 'Kompaniyada go\'shakni ko\'targanda aytiladigan rasmiy ibora qaysi?', options: ['お電話[でんわ] ありがとうございます。〇〇の アリでございます。', 'もしもし、誰ですか。', 'はい、何ですか。', 'こんにちは。'], correctAnswer: 0, explanation: 'Odenwa arigatou gozaimasu... de gozaimasu.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 5,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u6-l3-q1', question: 'Biznes qo\'ng\'iroqlarida «もしもし (Moshimoshi)» deyish nima uchun taqiqlanadi?', options: ['Chunki bu norasmiy, do\'stona ibora bo\'lib, biznesda qo\'pol hisoblanadi', 'Chunki bu inglizcha so\'z', 'Chunki bu eshitilmaydi', 'Farqi yo\'q'], correctAnswerIndex: 0, explanation: 'Moshimoshi is too casual for professional business.' },
                        { id: 'ja-n3-u6-l3-q2', question: '«Boshlig\'im boshqa qo\'ng\'iroqda gaplashmoqda» kamtarona qanday tushuntiriladi?', options: ['ただいま 別[べつ]の 電話[でんわ]に 出[で]て おります', '田中[たなか]さんは 話[はな]しています', '電話[でんわ]が あります', '忙[いそが]しいです'], correctAnswerIndex: 0, explanation: 'Tadaima betsu no denwa ni dete orimasu.' },
                        { id: 'ja-n3-u6-l3-q3', question: 'Suhbat oxirida go\'shakni qo\'yishdan oldin aytiladigan ibora:', options: ['失礼[しつれい]いたします (Shitsurei itashimasu)', 'さようなら', 'バイバイ', 'おやすみ'], correctAnswerIndex: 0, explanation: 'Shitsurei itashimasu.' },
                        { id: 'ja-n3-u6-l3-q4', question: '«Kechirasiz, biroz ovozingiz uzoqdan kelmoqda (yaxshi eshitilmayapti)»:', options: ['恐[おそ]れ入[い]りますが、少[すこ]し お電話[でんわ]が 遠[とお]いようでございます', '聞[き]こえない', '大[おお]きな 声[こえ]で 話[はな]せ', '声[こえ]が 小[ちい]さい'], correctAnswerIndex: 0, explanation: 'Odenwa ga tooi you de gozaimasu.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u6-l4',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u6',
        unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
        language: 'ja',
        level: 'N3',
        lessonNumber: 4,
        title: 'Full JLPT N3 Simulation Exam: Moji, Goi, Bunpou & Dokkai',
        description: 'JLPT N3 imtihonining to\'liq formatli va vaqt chegaralangan simulatsiya testi.',
        estimatedDurationMinutes: 18,
        icon: '📝',
        steps: [
            {
                id: 'ja-n3-u6-l4-s1',
                title: 'N3 To\'liq Imtihon Sinovi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'JLPT N3 Simulation Strategy',
                    explanation: 'N3 darajasida umumiy 180 ball: 1. Moji/Goi (60 ball) 2. Bunpou/Dokkai (60 ball) 3. Choukai (60 ball). Har bir bo\'limdan minimal 19 ball olish va umumiy 95+ ball to\'plash talab etiladi.',
                    keyPoints: [
                        'Time management: Moji/Goi & Bunpou ga 30 daqiqa, Dokkai ga 40 daqiqa ajratish.'
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l4-s2',
                title: 'Imtihon Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n3-u6-l4-e1', type: 'multiple-choice', prompt: '「子供[こども]の ころは、よく 川[かわ]で 泳[およ]いだ _______ だ。」 (Eski xotiralarni eslash)', options: ['もの (mono da)', 'こと', 'わけ', 'はず'], correctAnswer: 0, explanation: 'Ta mono da (used to do in the past).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u6-l4-q1', question: '「〜たものだ (Ta mono da)」grammatikasi nimani anglatadi?', options: ['O\'tmishdagi qadrdon odat va xotirani eslash ("... qiluvchi edim")', 'Kelajakdagi reja', 'Hozirgi taqiq', 'Birovga sovg\'a berish'], correctAnswerIndex: 0, explanation: 'Reminiscing about past habits.' },
                        { id: 'ja-n3-u6-l4-q2', question: '「彼[かれ]は まるで 日本人[にほんじん]の _______ 上手[じょうず]に 話[はな]す。」', options: ['ように (you ni)', 'ために', 'そうに', 'らしい'], correctAnswerIndex: 0, explanation: 'Marude Nihonjin no you ni (xuddi yapondek).' },
                        { id: 'ja-n3-u6-l4-q3', question: '«Har bir bo\'limdan minimal qancha ball to\'plash shart?»', options: ['19 ball (bo\'limlar bo\'yicha qulamaslik uchun)', '50 ball', '0 ball', '60 ball'], correctAnswerIndex: 0, explanation: 'Sectional benchmark is 19/60.' },
                        { id: 'ja-n3-u6-l4-q4', question: '「試験[しけん]の 結果[けっか]を 楽[たの]しみに して _______。」', options: ['おります (Kenjougo)', 'いらっしゃいます', 'なさいます', 'ごらんになります'], correctAnswerIndex: 0, explanation: 'Tanoshimi ni shite orimasu.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n3-u6-l5',
        courseId: 'japanese-n3',
        unitId: 'ja-n3-u6',
        unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
        language: 'ja',
        level: 'N3',
        lessonNumber: 5,
        title: 'JLPT N3 Capstone Grand Examination & N2 Promotion Certification',
        description: 'JLPT N3 darajasini to\'liq yakunlash va N2 darajasiga o\'tish rasmiy sertifikatsiya sinovi.',
        estimatedDurationMinutes: 20,
        icon: '🏆',
        steps: [
            {
                id: 'ja-n3-u6-l5-s1',
                title: 'N3 Grand Mastery Xulosasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'JLPT N3 Intermediate Grand Master Status',
                    explanation: 'Siz yapon tilining barcha oraliq to\'siqlarini (Passive, Causative, Causative-Passive, Sonkeigo, Kenjougo, Dokkai, Choukai) muvaffaqiyatli zabt etdingiz! Siz endi Yaponiyada ishlash va oliy ta\'lim olish imkonini beruvchi N2 darajasiga to\'liq yo\'llanma oldingiz!',
                    keyPoints: [
                        'Total command of intermediate grammar & reading',
                        'Speaking is NOT required for JLPT promotion',
                        'Next Destination: JLPT N2'
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l5-s2',
                title: 'N3 Yakuniy Sinov Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Yakuniy bitiruv savoliga to\'g\'ri javob bering.',
                    exercises: [
                        { id: 'ja-n3-u6-l5-e1', type: 'multiple-choice', prompt: '「先生[せんせい]、お忙[いそが]しい ところ、お時間[じかん]を いただき、_______。」', options: ['誠[まこと]に ありがとうございます (Makoto ni arigatou gozaimasu)', 'どうも', 'すみません', 'おめでとう'], correctAnswer: 0, explanation: 'Makoto ni arigatou gozaimasu (chuqur minnatdorchilik).' }
                    ]
                }
            },
            {
                id: 'ja-n3-u6-l5-s3',
                title: 'N3 Grand Sertifikatsiya Testi',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'N3 darajasini to\'liq tasdiqlash uchun barcha savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n3-u6-l5-q1', question: '「社長[しゃちょう]は ゴルフを _______。」 (Prezident harakatini ulug\'lash)', options: ['なさいます (Sonkeigo)', 'いたします', 'されます', 'ゴルフだ'], correctAnswerIndex: 0, explanation: 'Nasaimasu (Sonkeigo).' },
                        { id: 'ja-n3-u6-l5-q2', question: '「あの人[ひと]が そんな 嘘[うそ]を つく _______。」 (Mantiqan mutlaqo imkonsiz)', options: ['はずが ない (Hazu ga nai)', 'はずだ', 'べきだ', 'そうだ'], correctAnswerIndex: 0, explanation: 'Hazu ga nai.' },
                        { id: 'ja-n3-u6-l5-q3', question: '「雨[あめ]が 降[ふ]って きた _______、傘[かさ]を 差[さ]した。」', options: ['ので (Node)', 'のに', 'くせに', '反面'], correctAnswerIndex: 0, explanation: 'Futte kita node.' },
                        { id: 'ja-n3-u6-l5-q4', question: 'JLPT N3 darajasidan so\'ng qaysi yuqori darajaga o\'tiladi?', options: ['JLPT N2 (Upper-Intermediate / Professional Business Japanese)', 'JLPT N1', 'N4', 'C1'], correctAnswerIndex: 0, explanation: 'JLPT N2.' }
                    ]
                }
            }
        ]
    }
];
