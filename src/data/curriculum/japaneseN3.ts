import { Lesson } from '../../types/lesson';

export const JAPANESE_N3_LESSONS: Lesson[] = [
  {
    id: 'ja-n3-u1-l1',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u1',
    unitTitle: 'Unit 1: Passive & Causative Voices',
    language: 'ja',
    level: 'N3',
    lessonNumber: 1,
    title: 'Passive Voice (受身形): Direct & Suffering Passive (迷惑の受身)',
    description:
      'Majhul nisbat (Ukemi) va yapon tiliga xos "zararlangan/noqulaylik his qilgan majhul" shakli.',
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
          explanation:
            '1. Guruh 1: Oxirgi "u" tovushi "areru" ga o\'zgaradi: 叱[しか]る -> 叱[しか]られる (urushilmoq), 踏[ふ]む -> 踏[ふ]まれる (bosilmoq). 2. Guruh 2: 食べる -> 食べられる, 褒[ほ]める -> 褒[ほ]められる (maqtashmoq). 3. Guruh 3: する -> される, 来る -> こられる (Korareru). 4. Meiwaku no Ukemi (zararlangan majhul): 雨[あめ]に 降[ふ]られた (Yomg\'ir yog\'ib noqulay ahvolda qoldim), 電車[でんしゃ]で 足[あし]を 踏[ふ]まれた (Poyezdda oyog\'imni bosib olishdi).',
          vocabulary: [
            {
              term: '褒[ほ]める',
              reading: 'homeru',
              meaning: 'Maqtamoq (Passive: 褒められる)',
              exampleSentence: '先生[せんせい]に 努力[どりょく]を 褒[ほ]められました。',
              exampleTranslation: 'Oʻqituvchi tomonidan harakatim maqtovga sazovor boʻldi.',
            },
            {
              term: '叱[しか]る',
              reading: 'shikaru',
              meaning: 'Koyimoq, urushmoq',
              exampleSentence: '母[はは]に 部屋[へや]が 汚[きたな]いと 叱[しか]られました。',
              exampleTranslation: 'Xonam iflosligi sababli onam meni koyidilar.',
            },
            {
              term: '踏[ふ]む',
              reading: 'fumu',
              meaning: 'Bosmoq (oyogʻini)',
              exampleSentence: '満員[まんいん]電車[でんしゃ]で 足[あし]を 踏[ふ]まれました。',
              exampleTranslation: 'Gavjum poyezdda oyogʻimni bosib olishdi.',
            },
            {
              term: '盗[ぬす]む',
              reading: 'nusumu',
              meaning: 'Oʻgʻirlamoq',
              exampleSentence: '駅[えき]の 前[まえ]で 自転車[じてんしゃ]を 盗[ぬす]まれました。',
              exampleTranslation: 'Vokzal oldida velosipedimni oʻgʻirlatib qoʻydim.',
            },
            {
              term: '頼[たの]む',
              reading: 'tanomu',
              meaning: 'Iltimos qilmoq, topshirmoq',
              exampleSentence:
                '部長[ぶちょう]に 新[あたら]しい 仕事[しごと]を 頼[たの]まれました。',
              exampleTranslation: 'Boʻlim boshligʻi menga yangi ish topshirdi.',
            },
            {
              term: '壊[こわ]す',
              reading: 'kowasu',
              meaning: 'Buzmoq, sindirmoq',
              exampleSentence:
                '弟[おとうと]に 大切[たいせつ]な 時計[とけい]を 壊[こわ]されました。',
              exampleTranslation: 'Ukam qadrli soatimni sindirib qoʻydi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Passive Voice (受身形): Direct & Suffering Passive (迷惑の受身)',
              meaning:
                'Majhul nisbat (Ukemi) va yapon tiliga xos "zararlangan/noqulaylik his qilgan majhul" shakli.',
              usageNotes:
                '1. Guruh 1: Oxirgi "u" tovushi "areru" ga o\'zgaradi: 叱[しか]る -> 叱[しか]られる (urushilmoq), 踏[ふ]む -> 踏[ふ]まれる (bosilmoq). 2. Guruh 2: 食べる -> 食べられる, 褒[ほ]める -> 褒[ほ]められる (maqtashmoq). 3. Guruh 3: する -> される, 来る -> こられる (Korareru). 4. Meiwaku no Ukemi (zararlangan majhul): 雨[あめ]に 降[ふ]られた (Yomg\'ir yog\'ib noqulay ahvolda qoldim), 電車[でんしゃ]で 足[あし]を 踏[ふ]まれた (Poyezdda oyog\'imni bosib olishdi).',
              examples: [
                {
                  sentence: '先生[せんせい]に 褒[ほ]められました。',
                  translation: 'Ustoz tomonidan maqtaldim.',
                },
                {
                  sentence: '部長[ぶちょう]に 叱[しか]られました。',
                  translation: "Bo'lim boshlig'idan dakki yedim.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l1-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri majhul nisbat shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u1-l1-e1',
              type: 'multiple-choice',
              prompt: "«Kimdir yangi velosipedimni o'g'irlab ketdi (noqulaylik majhuli)»:",
              options: [
                '自転車[じてんしゃ]を 盗[ぬす]みました',
                '自転車[じてんしゃ]です',
                '自転車[じてんしゃ]が 盗[ぬす]んだ',
                '誰[だれ]かに 新[あたら]しい 自転車[じてんしゃ]を 盗[ぬす]まれました',
              ],
              correctAnswer: 3,
              explanation: 'Nusumaremashita (meiwaku passive).',
            },
            {
              id: 'ja-n3-u1-l1-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「部長[ぶちょう]に 叱[しか]られました。」",
              options: ['運転[うんてん]', '叱[しか]ります', '散歩[さんぽ]', '食事[しょくじ]'],
              correctAnswer: 1,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"叱[しか]ります\" (Urushmoq / Koyimoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l1-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u1-l1-q1',
              question: '«Meiwaku no Ukemi» yapon tilida qanday holatni ifodalaydi?',
              options: [
                "Juda xursand bo'lganini",
                'Ruxsat berilganini',
                "Hech narsa sodir bo'lmaganini",
                "Boshqa birovning yoki tabiatning harakati natijasida gapiruvchi noqulaylik yoki zarar ko'rganini",
              ],
              correctAnswerIndex: 3,
              explanation: 'Suffering/inconvenience caused to speaker.',
            },
            {
              id: 'ja-n3-u1-l1-q2',
              question: "「犬[いぬ]に 手[て]を 噛[か]まれました」ning ma'nosi:",
              options: [
                "Kuchuk qo'limni tishlab oldi",
                'Kuchuk sotib oldim',
                'Kuchukni tishladim',
                "Kuchuk yo'q",
              ],
              correctAnswerIndex: 0,
              explanation: 'Kamaremashita (kuchuk tishlab oldi).',
            },
            {
              id: 'ja-n3-u1-l1-q3',
              question: "「する」fe'lining majhul (passive) shakli:",
              options: ['すれる', 'さられる', 'される', 'しられる'],
              correctAnswerIndex: 2,
              explanation: 'Sareru.',
            },
            {
              id: 'ja-n3-u1-l1-q4',
              question: 'Tarixiy kashfiyotlar va binolar qurilishi qaysi nisbatda aytiladi?',
              options: [
                "To'g'ridan-to'g'ri majhul nisbatda (masalan: 1964年[ねん]に 開通[かいつう]された)",
                'Te-form',
                'Buyruq shaklida',
                'Xohish shaklida',
              ],
              correctAnswerIndex: 0,
              explanation: 'Direct passive for historical facts.',
            },
            {
              id: 'ja-n3-u1-l1-q5',
              question: '電車[でんしゃ]の 中[なか]で 知[し]らない 人[ひと]に 足[あし]を （　）。',
              options: [
                '踏[ふ]みました',
                '踏[ふ]まれました',
                '踏[ふ]かせました',
                '踏[ふ]んでいました',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Poyezdda notanish odam oyogʻimni bosib oldi (meiwaku ukemi — noqulaylik majhuli: 踏まれる).',
            },
            {
              id: 'ja-n3-u1-l1-q6',
              question: '「褒[ほ]める」feʼlining toʻgʻri majhul (ukemi) shakli qaysi?',
              options: ['褒[ほ]めさせる', '褒[ほ]められる', '褒[ほ]まれる', '褒[ほ]みられる'],
              correctAnswerIndex: 1,
              explanation:
                '2-guruh feʼli boʻlgani uchun -ru tushib, -rareru qoʻshiladi: 褒められる.',
            },
            {
              id: 'ja-n3-u1-l1-q7',
              question: 'この お寺[てら]は 約[やく]500年[ねん]前[まえ]に （　）。',
              options: [
                '建[た]てられた',
                '建[た]てさせた',
                '建[た]てておいた',
                '建[た]ててしまった',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Tarixiy obidalar yoki kashfiyotlar toʻgʻridan-toʻgʻri majhulda ifodalanadi: 建[た]てられた (qurilgan).',
            },
            {
              id: 'ja-n3-u1-l1-q8',
              question: '雨[あめ]に （　） 服[ふく]が びしょ濡[ぬ]れに なってしまいました。',
              options: ['降[ふ]って', '降[ふ]られて', '降[ふ]らせて', '降[ふ]りて'],
              correctAnswerIndex: 1,
              explanation: 'Yomgʻir yogʻib noqulay ahvolda qolish: 雨に降られる (Ame ni furarete).',
            },
            {
              id: 'ja-n3-u1-l1-q9',
              question: '先生[せんせい]に 名前[なまえ]を （　）、返事[へんじ]を しました。',
              options: ['呼[よ]ばせて', '呼[よ]ばれて', '呼[よ]んでいて', '呼[よ]ばさせて'],
              correctAnswerIndex: 1,
              explanation: 'Ustoz tomonidan chaqirilib: 呼ばれて (Yobarete).',
            },
            {
              id: 'ja-n3-u1-l1-q10',
              question: '日記[にっき]を 妹[いもうと]に （　）、とても 恥[は]ずかしかったです。',
              options: ['読[よ]ませて', '見[み]せて', '読[よ]まれて', '書[か]かされて'],
              correctAnswerIndex: 2,
              explanation:
                'Kundalikni singlisi oʻqib qoʻyib noqulay vaziyatga tushgan: 読まれて (Yomarete).',
            },
          ],
        },
      },
    ],
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
          explanation:
            '1. Guruh 1: Oxirgi "u" tovushi "aseru" ga o\'zgaradi: 行[い]く -> 行[い]かせる, 読[よ]む -> 読[よ]ませる. 2. Guruh 2: 食べる -> 食べさせる, 見る -> 見させる. 3. Guruh 3: する -> させる, 来る -> こさせる (Kosaseru). 4. Muloyim iltimos: 〜させて いただけませんか (Iltimos, ... qilishimga ruxsat bera olasizmi?).',
          vocabulary: [
            {
              term: '習[なら]わせる',
              reading: 'narawaseru',
              meaning: 'Oʻrgatmoq, toʻgarakka bermoq',
              exampleSentence: '子供[こども]に ピアノを 習[なら]わせています。',
              exampleTranslation: 'Farzandimga pianino oʻrgatyapman.',
            },
            {
              term: '運[はこ]ばせる',
              reading: 'hakobaseru',
              meaning: 'Tashitmoq, koʻchirtirmoq',
              exampleSentence: '後輩[こうはい]に 重[おも]い 荷物[にもつ]を 運[はこ]ばせました。',
              exampleTranslation: 'Kichik hamkasbimga ogʻir yukni tashitdim.',
            },
            {
              term: '参加[さんか]させる',
              reading: 'sankasaseru',
              meaning: 'Qatnashtirmoq, jalb qilmoq',
              exampleSentence:
                '生徒[せいと]全員[ぜんいん]を 発表会[はっぴょうかい]に 参加[さんか]させます。',
              exampleTranslation: 'Barcha oʻquvchilarni taqdimotga qatnashtiraman.',
            },
            {
              term: '待[ま]たせる',
              reading: 'mataseru',
              meaning: 'Kuttirib qoʻymoq',
              exampleSentence: '遅刻[ちこく]して 友達[ともだち]を 待[ま]たせてしまいました。',
              exampleTranslation: 'Kechikib doʻstimni kuttirib qoʻydim.',
            },
            {
              term: '行[い]かせる',
              reading: 'ikaseru',
              meaning: 'Bortirmoq, joʻnatmoq',
              exampleSentence:
                '社長[しゃちょう]は 部下[ぶか]を 出張[しゅっちょう]に 行[い]かせました。',
              exampleTranslation: 'Rahbar xodimini xizmat safariga joʻnatdi.',
            },
            {
              term: '自由[じゆう]にさせる',
              reading: 'jiyuu ni saseru',
              meaning: 'Erkin qoʻymoq, oʻz erkiga qoʻymoq',
              exampleSentence: '週末[しゅうまつ]は 子供[こども]を 自由[じゆう]に させています。',
              exampleTranslation: 'Dam olish kunlari bolalarga erkinlik beraman.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Causative Voice (使役形): 〜(さ)せる (Make / Let someone do)',
              meaning: 'Orttirma nisbat (Shieki): birovni qilishga majburlash yoki ruxsat berish.',
              usageNotes:
                '1. Guruh 1: Oxirgi "u" tovushi "aseru" ga o\'zgaradi: 行[い]く -> 行[い]かせる, 読[よ]む -> 読[よ]ませる. 2. Guruh 2: 食べる -> 食べさせる, 見る -> 見させる. 3. Guruh 3: する -> させる, 来る -> こさせる (Kosaseru). 4. Muloyim iltimos: 〜させて いただけませんか (Iltimos, ... qilishimga ruxsat bera olasizmi?).',
              examples: [
                {
                  sentence: '子供[こども]を 塾[じゅく]へ 行[い]かせます。',
                  translation: "Bolani o'quv markaziga yuboraman.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l2-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri orttirma shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u1-l2-e1',
              type: 'multiple-choice',
              prompt: "«Iltimos, o'z fikrimni aytishimga ruxsat bering» qanday aytiladi?",
              options: [
                '私[わたし]の 意見[いけん]を 言[い]わせてください',
                '意見[いけん]を 言[い]います',
                '意見[いけん]です',
                '意見[いけん]を 言[い]ってください',
              ],
              correctAnswer: 0,
              explanation: 'Iwasetekudasai (gapirishimga ruxsat bering).',
            },
            {
              id: 'ja-n3-u1-l2-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「教育[きょういく]は 人生[じんせい]に 深[ふか]い 影響[えいきょう]を 与[あた]えます。」",
              options: [
                '影響[えいきょう]を与える',
                '運転[うんてん]',
                '食事[しょくじ]',
                '散歩[さんぽ]',
              ],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"影響[えいきょう]を与える\" (Taʼsir koʻrsatmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l2-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u1-l2-q1',
              question: '«Ota bolasiga sabzavot yedirdi» jumlasi qaysi?',
              options: [
                '父[ちち]は 子供[こども]に 野菜[やさい]を 食[た]べさせました',
                '子供[こども]が 食[た]べました',
                '野菜[やさい]です',
                '父[ちち]は 野菜[やさい]を 食[た]べました',
              ],
              correctAnswerIndex: 0,
              explanation: 'Tabesasemashita (yedirdi/ruxsat berdi).',
            },
            {
              id: 'ja-n3-u1-l2-q2',
              question: "「来[く]る」fe'lining orttirma (shieki) shakli:",
              options: ['きさせる', 'くらせる', 'かさせる', 'こさせる'],
              correctAnswerIndex: 3,
              explanation: 'Kosaseru.',
            },
            {
              id: 'ja-n3-u1-l2-q3',
              question: '«Bugun meni biroz erta ketishimga ruxsat bering»:',
              options: [
                '今日[きょう]、早[はや]く 帰[かえ]らせて いただけませんか',
                '早[はや]く 帰[かえ]ってください',
                '早[はや]く 帰[かえ]ります',
                '帰[かえ]るな',
              ],
              correctAnswerIndex: 0,
              explanation: 'Kaerasete itadakemasen ka.',
            },
            {
              id: 'ja-n3-u1-l2-q4',
              question: "「読[よ]む」fe'lining orttirma shakli:",
              options: ['読[よ]す', '読[よ]ませる', '読[よ]まれる', '読[よ]みさせる'],
              correctAnswerIndex: 1,
              explanation: 'Yomaseru.',
            },
            {
              id: 'ja-n3-u1-l2-q5',
              question: '子[こ]どもに 毎日[まいにち] 野菜[やさい]を （　） います。',
              options: [
                '食[た]べさせて',
                '食[た]べられて',
                '食[た]べさせておいて',
                '食[た]べられてしまって',
              ],
              correctAnswerIndex: 0,
              explanation: 'Bolaga sabzavot yedirmoq (orttirma nisbat: 食べさせる).',
            },
            {
              id: 'ja-n3-u1-l2-q6',
              question: '「行[い]く」feʼlining orttirma (shieki) shakli qaysi?',
              options: ['行[い]かせる', '行[い]かれる', '行[い]かさせる', '行[い]きさせる'],
              correctAnswerIndex: 0,
              explanation: '1-guruh feʼllarida -u tovushi -aseru ga oʻzgaradi: 行く -> 行かせる.',
            },
            {
              id: 'ja-n3-u1-l2-q7',
              question: '部長[ぶちょう]、その 仕事[しごと]は 私[わたし]に （　） ください。',
              options: ['やられて', 'やらせて', 'やらされて', 'やっておいて'],
              correctAnswerIndex: 1,
              explanation:
                'Oʻziga ruxsat soʻrash: 〜(さ)せてください (Menga bajartiring/ruxsat bering).',
            },
            {
              id: 'ja-n3-u1-l2-q8',
              question: '父[ちち]は 私[わたし]に ピアノを （　） くれました。',
              options: ['習[なら]わせて', '習[なら]われて', '習[なら]わされて', '習[なら]って'],
              correctAnswerIndex: 0,
              explanation:
                'Ruxsat berib imkoniyat yaratish: 習わせてくれました (Oʻrganishimga ruxsat berdilar).',
            },
            {
              id: 'ja-n3-u1-l2-q9',
              question: '先生[せんせい]は 学生[がくせい]を 教室[きょうしつ]の 前[まえ]に （　）。',
              options: [
                '立[た]たせました',
                '立[た]たれました',
                '立[た]たさせました',
                '立[た]ちました',
              ],
              correctAnswerIndex: 0,
              explanation: 'Talabani doska oldiga turgʻazib qoʻydi: 立たせました (Tatase-mashita).',
            },
            {
              id: 'ja-n3-u1-l2-q10',
              question: '遅[おく]れて みんなを （　） しまいました。',
              options: ['待[ま]たされて', '待[ま]たせて', '待[ま]たさせて', '待[ま]たれ'],
              correctAnswerIndex: 1,
              explanation: 'Boshqalarni kuttirib qoʻymoq (harakat qildirmoq): 待たせる (Mataseru).',
            },
          ],
        },
      },
    ],
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
    description:
      "Majburan qildirildi: xohlamasa ham biror ishni qilishga majbur bo'lish (Shieki-Ukemi).",
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
          explanation:
            "O'zi xohlamagan holda boshqa birovning tazyiqi yoki talabi bilan biror ishni bajarishga majbur bo'lish. 1. Guruh 1: 書[か]く -> 書[か]かせられる (qisqartmasi: 書[か]かされる), 待[ま]つ -> 待[ま]たされる. 2. Guruh 2: 食べる -> 食べさせられる. 3. Guruh 3: する -> させられる, 来る -> こさせられる.",
          keyPoints: [
            "カラオケで 歌[うた]を 歌[うた]わされました。 (Karaokeda qo'shiq aytishga majbur bo'ldim.)",
            '無理[むり]に お酒[さけ]を 飲[の]まされた。 (Majburan spirtli ichimlik ichirildim.)',
          ],
          grammarRules: [
            {
              pattern: 'Causative-Passive Voice (使役受身形): 〜(さ)せられる (Forced to do)',
              meaning:
                "Majburan qildirildi: xohlamasa ham biror ishni qilishga majbur bo'lish (Shieki-Ukemi).",
              usageNotes:
                "O'zi xohlamagan holda boshqa birovning tazyiqi yoki talabi bilan biror ishni bajarishga majbur bo'lish. 1. Guruh 1: 書[か]く -> 書[か]かせられる (qisqartmasi: 書[か]かされる), 待[ま]つ -> 待[ま]たされる. 2. Guruh 2: 食べる -> 食べさせられる. 3. Guruh 3: する -> させられる, 来る -> こさせられる.",
              examples: [
                {
                  sentence: '日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。',
                  translation: "Har kuni yapon tilini o'rganaman.",
                },
              ],
            },
          ],
          vocabulary: [
            {
              term: '歌[うた]わせられる',
              reading: 'utawaserareru',
              meaning: 'Qoʻshiq aytishga majbur boʻlmoq',
              exampleSentence: 'カラオケで 先輩[せんぱい]に 歌[うた]わせられました。',
              exampleTranslation:
                'Karaokeda katta hamkasblarim meni qoʻshiq aytishga majbur qildilar.',
            },
            {
              term: '待[ま]たせられる',
              reading: 'mataserareru',
              meaning: 'Kuttirib qoʻyilmoq, kutishga majbur boʻlmoq',
              exampleSentence: '病院[びょういん]で 2時間[にじかん]も 待[ま]たせられました。',
              exampleTranslation: 'Kasalxonada rosa 2 soat kutishga majbur boʻldim.',
            },
            {
              term: '走[はし]らせられる',
              reading: 'hashiraserareru',
              meaning: 'Yugurtirilmoq, yugurishga majbur boʻlmoq',
              exampleSentence:
                '部活[ぶかつ]の 練習[れんしゅう]で 何度[なんど]も 走[はし]らせられました。',
              exampleTranslation: 'Toʻgarak mashgʻulotida koʻp marta yugurtirildim.',
            },
            {
              term: '謝[あやま]らせられる',
              reading: 'ayamaraserareru',
              meaning: 'Kechirim soʻrashga majbur qilinmoq',
              exampleSentence: '悪[わる]くないのに 謝[あやま]らせられました。',
              exampleTranslation: 'Aybdor boʻlmasam ham kechirim soʻrashga majbur boʻldim.',
            },
            {
              term: '飲[の]ませられる',
              reading: 'nomaserareru',
              meaning: 'Ichishga majbur qilinmoq',
              exampleSentence:
                '忘年会[ぼうねんかい]で お酒[さけ]を たくさん 飲[の]ませられました。',
              exampleTranslation: 'Yil yakuni ziyofatida koʻp ichishga majbur boʻldim.',
            },
            {
              term: '掃除[そうじ]させられる',
              reading: 'soujisaserareru',
              meaning: 'Tozalashga majbur qilinmoq',
              exampleSentence:
                '宿題[しゅくだい]を 忘[わす]れて 教室[きょうしつ]を 掃除[そうじ]させられました。',
              exampleTranslation: 'Vazifani unutganim uchun xonani tozalashga majbur qilindim.',
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l3-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri majburlanganlik shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u1-l3-e1',
              type: 'multiple-choice',
              prompt: "«1 soat kutishga majbur bo'ldim» qanday aytiladi?",
              options: [
                '1時間[いちじかん] 待[ま]ちました',
                '待[ま]ってください',
                '1時間[いちじかん] 待[ま]たされました',
                '1時間[いちじかん] 待[ま]ちたい',
              ],
              correctAnswer: 2,
              explanation: 'Matasaremashita.',
            },
            {
              id: 'ja-n3-u1-l3-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「健康[けんこう]を 維持[いじ]するために 運動[うんどう]します。」",
              options: ['散歩[さんぽ]', '食事[しょくじ]', '運転[うんてん]', '維持[いじ]する'],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"維持[いじ]する\" (Saqlab turmoq (holatni)).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l3-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u1-l3-q1',
              question: "「母[はは]に 部屋[へや]を 掃除[そうじ]させられました」ning ma'nosi:",
              options: [
                'Onam xonani tozaladilar',
                'Xonani tozalamadim',
                "Onam tomonidan xonani tozalashga majbur bo'ldim",
                'Xona toza',
              ],
              correctAnswerIndex: 2,
              explanation: 'Forced to clean the room by mother.',
            },
            {
              id: 'ja-n3-u1-l3-q2',
              question:
                "Guruh 1 fe'llarida 〜させられる ning so'zlashuvdagi qisqartma shakli qaysi?",
              options: [
                '〜される (masalan: 飲まされる, 行かされる)',
                '〜ておく',
                '〜てある',
                '〜てしまう',
              ],
              correctAnswerIndex: 0,
              explanation: '〜される (nomasareru).',
            },
            {
              id: 'ja-n3-u1-l3-q3',
              question: "«Xohlamasam ham achchiq narsa yeyishga majbur bo'ldim»:",
              options: [
                '辛[から]い 物[もの]が 好[す]きです',
                '食[た]べたい',
                '辛[から]い 物[もの]を 食[た]べました',
                '嫌[いや]だったが、辛[から]い 物[もの]を 食[た]べさせられました',
              ],
              correctAnswerIndex: 3,
              explanation: 'Tabesaseraremashita.',
            },
            {
              id: 'ja-n3-u1-l3-q4',
              question: "「する」fe'lining causative-passive shakli:",
              options: ['すれられる', 'される', 'させられる', 'しらされる'],
              correctAnswerIndex: 2,
              explanation: 'Saserareru.',
            },
            {
              id: 'ja-n3-u1-l3-q5',
              question: '「飲[の]む」feʼlining orttirma-majhul (shieki-ukemi) qisqa shakli qaysi?',
              options: ['飲[の]まされる', '飲[の]まれる', '飲[の]ませる', '飲[の]みさせられる'],
              correctAnswerIndex: 0,
              explanation:
                '1-guruhda -masareru qisqartmasi ishlatiladi: 飲ませられる -> 飲まされる.',
            },
            {
              id: 'ja-n3-u1-l3-q6',
              question: '親[おや]に 好[す]きではない 塾[じゅく]へ （　）。',
              options: ['行[い]かされた', '行[い]かれた', '行[い]かせた', '行[い]ってしまった'],
              correctAnswerIndex: 0,
              explanation: 'Ota-ona majburlab toʻgarakka yubordi: 行かされた (Ikasareta).',
            },
            {
              id: 'ja-n3-u1-l3-q7',
              question: '悪[わる]いことを していないのに、謝[あやま]るよう （　）。',
              options: [
                '言[い]われた',
                '謝[あやま]らせられた',
                '謝[あやま]られた',
                '謝[あやま]らせた',
              ],
              correctAnswerIndex: 1,
              explanation: 'Kechirim soʻrashga majbur qilindi: 謝らせられた (Ayamaraserareta).',
            },
            {
              id: 'ja-n3-u1-l3-q8',
              question: '「勉強[べんきょう]する」ning shieki-ukemi shakli qaysi?',
              options: [
                '勉強[べんきょう]される',
                '勉強[べんきょう]させられる',
                '勉強[べんきょう]させる',
                '勉強[べんきょう]してある',
              ],
              correctAnswerIndex: 1,
              explanation: 'Suru feʼlining shieki-ukemi shakli: させられる (Saserareru).',
            },
            {
              id: 'ja-n3-u1-l3-q9',
              question: '試合[しあい]に 負[ま]けて、グラウンドを 10周[じゅっしゅう] （　）。',
              options: [
                '走[はし]らされた',
                '走[はし]られた',
                '走[はし]らせた',
                '走[はし]りおわった',
              ],
              correctAnswerIndex: 0,
              explanation: 'Murabbiy tomonidan 10 marta yugurtirildi: 走らされた (Hashirasareta).',
            },
            {
              id: 'ja-n3-u1-l3-q10',
              question: '彼[かれ]の 素晴[すば]らしい 演奏[えんそう]に 心[こころ]から （　）。',
              options: [
                '感動[かんどう]させられた',
                '感動[かんどう]された',
                '感動[かんどう]させた',
                '感動[かんどう]しておいた',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Birovning sanʼati inson qalbini oʻz-oʻzidan toʻlqinlantirishi: 感動させられた.',
            },
          ],
        },
      },
    ],
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
    description:
      "Oldindan tayyorlab qo'yish (Te oku) va kimdir tomonidan bajarilgan tayyor holat (Te aru).",
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
          explanation:
            "1. 〜ておく: Kelgusi qulaylik uchun oldindan tayyorlab qo'yish: 旅行[りょこう]の 前[まえ]に ホテルを 予約[よやく]して おきます (Sayohatdan oldin mehmonxonani band qilib qo'yaman). So'zlashuvda: とく (Toki / Toite). 2. 〜てある: Maqsadli harakat qilinib, hozir shu holatda tayyor turganligi: カレンダーに 予定[よてい]が 書[か]いて あります (Taqvimga rejalar yozib qo'yilgan).",
          vocabulary: [
            {
              term: '予約[よやく]する',
              reading: 'yoyaku suru',
              meaning: 'Band qilmoq, rezervatsiya qilmoq',
              exampleSentence:
                '人気[にんき]の レストランを あらかじめ 予約[よやく]して おきました。',
              exampleTranslation: 'Mashhur restoranni oldindan band qilib qoʻydim.',
            },
            {
              term: '片付[かたづ]ける',
              reading: 'katadzukeru',
              meaning: 'Yigʻishtirmoq, tartibga keltirmoq',
              exampleSentence:
                '友達[ともだち]が 来[く]る 前[まえ]に 部屋[へや]を 片付[かたづ]けて おきます。',
              exampleTranslation: 'Doʻstim kelishidan oldin xonani yigʻishtirib qoʻyaman.',
            },
            {
              term: '飾[かざ]る',
              reading: 'kazaru',
              meaning: 'Bezatmoq, ilib qoʻymoq',
              exampleSentence: '壁[かべ]に 綺麗[きれい]な 絵[え]が 飾[かざ]って あります。',
              exampleTranslation: 'Devorga chiroyli rasm ilib qoʻyilgan.',
            },
            {
              term: '並[なら]べる',
              reading: 'naraberu',
              meaning: 'Terib qoʻymoq, tartib bilan tizmoq',
              exampleSentence: '机[つくえ]の 上[うえ]に 資料[しりょう]が 並[なら]べて あります。',
              exampleTranslation: 'Stol ustiga hujjatlar terib qoʻyilgan.',
            },
            {
              term: '調[しら]べておく',
              reading: 'shirabete oku',
              meaning: 'Oldindan oʻrganib qoʻymoq',
              exampleSentence:
                '旅行[りょこう]の 前[まえ]に 電車[でんしゃ]の 時間[じかん]を 調[しら]べて おきます。',
              exampleTranslation: 'Sayohatdan oldin poyezd vaqtlarini bilib qoʻyaman.',
            },
            {
              term: '残[のこ]してある',
              reading: 'nokoshite aru',
              meaning: 'Qoldirib qoʻyilgan (holat)',
              exampleSentence: '冷蔵庫[れいぞうこ]に ケーキが 残[のこ]して あります。',
              exampleTranslation: 'Muzlatkichda tort qoldirib qoʻyilgan.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Preparatory Action: 〜ておく vs Resultant State: 〜てある',
              meaning:
                "Oldindan tayyorlab qo'yish (Te oku) va kimdir tomonidan bajarilgan tayyor holat (Te aru).",
              usageNotes:
                "1. 〜ておく: Kelgusi qulaylik uchun oldindan tayyorlab qo'yish: 旅行[りょこう]の 前[まえ]に ホテルを 予約[よやく]して おきます (Sayohatdan oldin mehmonxonani band qilib qo'yaman). So'zlashuvda: とく (Toki / Toite). 2. 〜てある: Maqsadli harakat qilinib, hozir shu holatda tayyor turganligi: カレンダーに 予定[よてい]が 書[か]いて あります (Taqvimga rejalar yozib qo'yilgan).",
              examples: [
                {
                  sentence: 'チケットを 予約[よやく]して おきます。',
                  translation: "Chiptalarni oldindan band qilib qo'yaman.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l4-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri fe'l shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u1-l4-e1',
              type: 'multiple-choice',
              prompt: "«Doskaga yangi so'zlar yozib qo'yilgan (holat)»:",
              options: [
                '黒板[こくばん]に 新[あたら]しい 言葉[ことば]が 書[か]いて あります',
                '言葉[ことば]を 書[か]いて おきます',
                '言葉[ことば]を 書[か]きました',
                '言葉[ことば]です',
              ],
              correctAnswer: 0,
              explanation: 'Ga kaite arimasu (tayyor holat).',
            },
            {
              id: 'ja-n3-u1-l4-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「環境[かんきょう]への 意識[いしき]が 高[たか]まっています。」",
              options: ['意識[いしき]', '食事[しょくじ]', '散歩[さんぽ]', '運転[うんてん]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"意識[いしき]\" (Ong, xabardorlik).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l4-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u1-l4-q1',
              question: "«Darsdan oldin yangi kanjilarni yodlab qo'yaman» jumlasi qaysi?",
              options: [
                '授業[じゅぎょう]の 前[まえ]に 漢字[かんじ]を 覚[おぼ]えて おきます',
                '漢字[かんじ]を 覚[おぼ]えました',
                '漢字[かんじ]が 覚[おぼ]えて あります',
                '漢字[かんじ]です',
              ],
              correctAnswerIndex: 0,
              explanation: 'Oboete okimasu (oldindan tayyorgarlik).',
            },
            {
              id: 'ja-n3-u1-l4-q2',
              question: "〜てある qaysi turdagi fe'llar bilan ishlatiladi?",
              options: [
                'Faqat inkor shaklda',
                "Faqat o'timli fe'llar (Transitive verbs) bilan va egaga が (ga) qo'yiladi",
                "Faqat harakat fe'llari",
                'Sifatlar bilan',
              ],
              correctAnswerIndex: 1,
              explanation: 'Transitive verbs with ga.',
            },
            {
              id: 'ja-n3-u1-l4-q3',
              question: "So'zlashuvda「〜ておく」qanday qisqaradi?",
              options: ['〜なきゃ', '〜てる', '〜とく (masalan: 買っとく = Katte oku)', '〜ちゃう'],
              correctAnswerIndex: 2,
              explanation: '〜toku.',
            },
            {
              id: 'ja-n3-u1-l4-q4',
              question: "「そのままに して おいて ください」ning ma'nosi:",
              options: [
                'Tezda tozalang',
                "Yig'ishtiring",
                'Buzib tashlang',
                'Shundayligicha qoldiring',
              ],
              correctAnswerIndex: 3,
              explanation: 'Leave it as it is.',
            },
            {
              id: 'ja-n3-u1-l4-q5',
              question: '会議[かいぎ]の 前[まえ]に 資料[しりょう]を コピーして （　）。',
              options: ['あります', 'おきます', 'しまいます', 'みます'],
              correctAnswerIndex: 1,
              explanation:
                'Kelgusi qulaylik uchun oldindan tayyorlab qoʻyish: 〜ておく (Kopiya qilib qoʻyaman).',
            },
            {
              id: 'ja-n3-u1-l4-q6',
              question: '壁[かべ]に きれいな 絵[え]が 掛[か]けて （　）。',
              options: ['おきます', 'あります', 'います', 'しまいます'],
              correctAnswerIndex: 1,
              explanation:
                'Kimdir maqsadli ilib qoʻygan va hozir tayyor turibdi: 〜てある (Kake te aru).',
            },
            {
              id: 'ja-n3-u1-l4-q7',
              question: '「〜ておく」ning ogʻzaki soʻzlashuvdagi qisqargan shakli qaysi?',
              options: ['〜ちゃう', '〜とく', '〜きゃ', '〜とる'],
              correctAnswerIndex: 1,
              explanation:
                '〜ておく soʻzlashuvda 〜とく ga qisqaradi (masalan: 買っておく -> 買っとく).',
            },
            {
              id: 'ja-n3-u1-l4-q8',
              question:
                '窓[まど]が 開[あ]けて あります。なぜ「開[あ]いて います」ではなく「開[あ]けて あります」なのか？',
              options: [
                'Birov shamollatish maqsadi bilan ataylab ochib qoʻygan holat boʻlgani uchun',
                'Shamolda oʻz-oʻzidan ochilib ketgani uchun',
                'Hozir deraza yopiq boʻlgani uchun',
                'Deraza singanligi uchun',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜てある oʻtimsiz feʼl (開く) emas, oʻtimli feʼl (開ける) bilan maqsadli bajarilgan natijani bildiradi.',
            },
            {
              id: 'ja-n3-u1-l4-q9',
              question:
                '旅行[りょこう]に 行[い]く 前[まえ]に 天気[てんき]予報[よほう]を （　） おこう。',
              options: ['調[しら]べて', '調[しら]べられて', '調[しら]べた', '調[しら]べ'],
              correctAnswerIndex: 0,
              explanation: 'Oldindan oʻrganib qoʻymoq: 調べておく (Shirabete oku).',
            },
            {
              id: 'ja-n3-u1-l4-q10',
              question: 'パーティーの 準備[じゅんび]は もう ぜんぶ （　） あります。',
              options: ['して', 'おいて', 'されて', 'し'],
              correctAnswerIndex: 0,
              explanation: 'Tayyor qilib qoʻyilgan holat: してある (Shite aru).',
            },
          ],
        },
      },
    ],
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
    description: "Tugallanganlik va afsuslanish ma'nolari (Te shimau / Chatte).",
    estimatedDurationMinutes: 15,
    icon: '😔',
    steps: [
      {
        id: 'ja-n3-u1-l5-s1',
        title: "〜てしまう Ikki Ma'nosi",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "1. To'liq Tugallash (Completion) 2. Afsus/Xato (Regret)",
          explanation:
            "1. To'liq yakunlash: この本[ほん]を 全部[ぜんぶ] 読[よ]んで しまいました (Bu kitobni to'liq o'qib tugatdim). 2. Afsuslanish / Kutilmagan nojo'ya harakat: 財布[さいふ]を 落[お]として しまいました (Hamyonimni tushirib yubordim-a!). So'zlashuvda: 〜ちゃう (chau) / 〜じゃう (jau).",
          vocabulary: [
            {
              term: '落[お]とす',
              reading: 'otosu',
              meaning: 'Tushirib yubormoq',
              exampleSentence: '階段[かいだん]で スマホを 落[お]として しまいました。',
              exampleTranslation: 'Zinapoyada telefonimni tushirib yubordim.',
            },
            {
              term: '忘[わす]れる',
              reading: 'wasureru',
              meaning: 'Unutmoq, esdan chiqarmoq',
              exampleSentence: '電車[でんしゃ]の 中[なか]に 傘[かさ]を 忘[わす]れて しまいました。',
              exampleTranslation: 'Poyezd ichida soyabonimni unutib qoldiribman.',
            },
            {
              term: '遅[おく]れる',
              reading: 'okureru',
              meaning: 'Kechikmoq',
              exampleSentence:
                '渋滞[じゅうたい]の せいで 約束[やくそく]に 遅[おく]れて しまいました。',
              exampleTranslation: 'Tirbandlik sababli uchrashuvga kechikib qoldim.',
            },
            {
              term: '失[な]くす',
              reading: 'nakusu',
              meaning: 'Yoʻqotib qoʻymoq',
              exampleSentence: '財布[さいふ]を どこかで 失[な]くして しまいました。',
              exampleTranslation: 'Hamyonimni qayerdadir yoʻqotib qoʻydim.',
            },
            {
              term: '壊[こわ]れる',
              reading: 'kowareru',
              meaning: 'Buzilmoq, sinmoq (oʻzlik)',
              exampleSentence: 'パソコンが 突然[とつぜん] 壊[こわ]れて しまいました。',
              exampleTranslation: 'Kompyuterim kutilmaganda buzilib qoldi.',
            },
            {
              term: '食[た]べきる',
              reading: 'tabekiru',
              meaning: 'Yeb tugatmoq (toʻliq)',
              exampleSentence: '大盛[おおも]りの カレーを 全部[ぜんぶ] 食[た]べて しまいました。',
              exampleTranslation: 'Katta likopdagi karining hammasini yeb qoʻydim.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Spontaneous Occurrence: 〜てしまう (Regret & Completion)',
              meaning: "Tugallanganlik va afsuslanish ma'nolari (Te shimau / Chatte).",
              usageNotes:
                "1. To'liq yakunlash: この本[ほん]を 全部[ぜんぶ] 読[よ]んで しまいました (Bu kitobni to'liq o'qib tugatdim). 2. Afsuslanish / Kutilmagan nojo'ya harakat: 財布[さいふ]を 落[お]として しまいました (Hamyonimni tushirib yubordim-a!). So'zlashuvda: 〜ちゃう (chau) / 〜じゃう (jau).",
              examples: [
                {
                  sentence: '鍵[かぎ]を 落[お]として しまいました。',
                  translation: "Kalitimni tushirib qo'ydim.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l5-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri afsus/tugallash shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u1-l5-e1',
              type: 'multiple-choice',
              prompt: '«Poyezdda uxlab qolibman (afsus)» qanday aytiladi?',
              options: [
                '電車[でんしゃ]で 寝[ね]たい',
                '寝[ね]て おきます',
                '電車[でんしゃ]で 寝[ね]ました',
                '電車[でんしゃ]の 中[なか]で 寝[ね]て しまいました',
              ],
              correctAnswer: 3,
              explanation: 'Nete shimaimashita.',
            },
            {
              id: 'ja-n3-u1-l5-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「困難[こんなん]を 克服[こくふく]して 成功[せいこう]しました。」",
              options: ['散歩[さんぽ]', '克服[こくふく]する', '運転[うんてん]', '食事[しょくじ]'],
              correctAnswer: 1,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"克服[こくふく]する\" (Yengib oʻtmoq, bartaraf etmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u1-l5-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u1-l5-q1',
              question:
                "「宿題[しゅくだい]を 忘[わす]れちゃった！」dagi «chatta» qaysi iboraning so'zlashuv shakli?",
              options: [
                '忘[わす]れて あります',
                '忘[わす]れない',
                '忘[わす]れて おきました',
                '忘[わす]れて しまいました',
              ],
              correctAnswerIndex: 3,
              explanation: 'Wasurete shimaimashita.',
            },
            {
              id: 'ja-n3-u1-l5-q2',
              question: "«Bugun barcha vazifalarni tugatib qo'ymoqchiman»:",
              options: [
                '仕事[しごと]が あります',
                '仕事[しごと]を します',
                '今日[きょう]の 仕事[しごと]を 全部[ぜんぶ] やって しまいたいです',
                '仕事[しごと]です',
              ],
              correctAnswerIndex: 2,
              explanation: 'Yatte shimaitai desu.',
            },
            {
              id: 'ja-n3-u1-l5-q3',
              question: "「飲[の]んで しまう」so'zlashuvda nima bo'ladi?",
              options: ['飲[の]んちゃう', '飲[の]んじゃう', '飲[の]んてる', '飲[の]みとく'],
              correctAnswerIndex: 1,
              explanation: 'Nonjau.',
            },
            {
              id: 'ja-n3-u1-l5-q4',
              question: "«Kassani yo'qotib qo'ydim»:",
              options: [
                '傘[かさ]を 無[な]くして しまいました',
                '傘[かさ]を 買[か]います',
                '傘[かさ]です',
                '傘[かさ]が あります',
              ],
              correctAnswerIndex: 0,
              explanation: 'Nakushite shimaimashita.',
            },
            {
              id: 'ja-n3-u1-l5-q5',
              question: '電車[でんしゃ]の 中[なか]に かさを 忘[わす]れて （　）。',
              options: ['おきました', 'ありました', 'しまいました', 'みました'],
              correctAnswerIndex: 2,
              explanation:
                'Unutib qoldirib afsuslanish: 忘れてしまいました (Wasurete shimaimashita).',
            },
            {
              id: 'ja-n3-u1-l5-q6',
              question: '「飲[の]んでしまう」ning soʻzlashuv tilidagi qisqartmasi qaysi?',
              options: ['飲[の]んじゃう', '飲[の]んじゃ', '飲[の]んどく', '飲[の]んちゃう'],
              correctAnswerIndex: 0,
              explanation:
                '-nde shimau soʻzlashuvda -njau ga aylanadi: 飲んでしまう -> 飲んじゃう.',
            },
            {
              id: 'ja-n3-u1-l5-q7',
              question: '今日[きょう]中[じゅう]に この 本[ほん]を 全部[ぜんぶ] （　） しまいたい。',
              options: ['読[よ]んで', '読[よ]み', '読[よ]まれて', '読[よ]ませて'],
              correctAnswerIndex: 0,
              explanation: 'Toʻliq tugatish istagi: 読んでしまいたい (Yonde shimaitai).',
            },
            {
              id: 'ja-n3-u1-l5-q8',
              question: '大切[たいせつ]な 書類[しょるい]を （　） しまいました。',
              options: ['失[な]くして', '失[な]くした', '失[な]くす', '失[な]くさなくて'],
              correctAnswerIndex: 0,
              explanation: 'Yoʻqotib qoʻymoq (afsuslanish): なくしてしまう (Nakushite shimau).',
            },
            {
              id: 'ja-n3-u1-l5-q9',
              question: '宿題[しゅくだい]は もう やって （　） から、遊[あそ]びに 行[い]こう。',
              options: ['おいた', 'しまった', 'あった', 'みた'],
              correctAnswerIndex: 1,
              explanation:
                'Toʻliq bajarib boʻlganlik (kanryou): やってしまったから (Yatte shimatta kara).',
            },
            {
              id: 'ja-n3-u1-l5-q10',
              question: 'ケーキが 美味[おい]しくて、一人[ひとり]で 全部[ぜんぶ] 食[た]べ （　）。',
              options: ['ちゃった', 'といた', 'ちゃいそう', 'てあった'],
              correctAnswerIndex: 0,
              explanation: 'Soʻzlashuv tilida yeb qoʻydim: 食べちゃった (Tabechatta).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u2-l1',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u2',
    unitTitle: 'Unit 2: Decisions & Habits',
    language: 'ja',
    level: 'N3',
    lessonNumber: 6,
    title: 'Decision & Rules: 〜ことにする vs 〜ことになる',
    description: "Shaxsiy qat'iy qaror (koto ni suru) va tashqi qaror/qoida (koto ni naru).",
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
          explanation:
            "1. 〜ことにする (Shaxsiy qaror): 毎日[まいにち] ジョギングを することに しました (Har kuni yugurishga qaror qildim). 2. 〜ことになる (Kompaniya qarori, tashqi qoida, qonun): 来月[らいげつ] 日本[にほん]へ 転勤[てんきん]する ことに なりました (Kelasi oy Yaponiyaga ish o'rnini ko'chirishga qaror qilindi - kompaniya buyrug'i).",
          vocabulary: [
            {
              term: '決[き]める',
              reading: 'kimeru',
              meaning: 'Qaror qilmoq',
              exampleSentence: '今年[ことし]こそ JLPT N3に 合格[ごうかく]する ことに しました。',
              exampleTranslation: 'Aynan shu yil JLPT N3 dan oʻtishga qaror qildim.',
            },
            {
              term: '転勤[てんきん]する',
              reading: 'tenkin suru',
              meaning: 'Boshqa filialga ishga oʻtmoq',
              exampleSentence:
                '来月[らいげつ]から 大阪[おおさか]支社[ししゃ]へ 転勤[てんきん]する ことに なりました。',
              exampleTranslation: 'Kelasi oydan Osaka filialiga koʻchib ishlaydigan boʻldim.',
            },
            {
              term: '留学[りゅうがく]する',
              reading: 'ryuugaku suru',
              meaning: 'Chet elda oʻqimoq',
              exampleSentence:
                '日本[にほん]の 大学[だいがく]に 留学[りゅうがく]する ことに しました。',
              exampleTranslation: 'Yaponiya universitetida oʻqishga qaror qildim.',
            },
            {
              term: '契約[けいやく]する',
              reading: 'keiyaku suru',
              meaning: 'Shartnoma tuzmoq',
              exampleSentence: '新[あたら]しい アパートを 契約[けいやく]する ことに なりました。',
              exampleTranslation: 'Yangi kvartira bilan shartnoma tuziladigan boʻldi.',
            },
            {
              term: '引[ひ]っ越[こ]す',
              reading: 'hikkosu',
              meaning: 'Koʻchmoq (uy-joy)',
              exampleSentence: '会社[かいしゃ]の 近[ちか]くに 引[ひ]っ越[こ]す ことに しました。',
              exampleTranslation: 'Kompaniya yaqiniga koʻchib oʻtishga qaror qildim.',
            },
            {
              term: '入社[にゅうしゃ]する',
              reading: 'nyuusha suru',
              meaning: 'Ishga kirmoq',
              exampleSentence:
                '四月[しがつ]から 商事[しょうじ]会社[がいしゃ]に 入社[にゅうしゃ]する ことに なりました。',
              exampleTranslation: 'Apreldan savdo kompaniyasiga ishga qabul qilinadigan boʻldim.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Decision & Rules: 〜ことにする vs 〜ことになる',
              meaning: "Shaxsiy qat'iy qaror (koto ni suru) va tashqi qaror/qoida (koto ni naru).",
              usageNotes:
                "1. 〜ことにする (Shaxsiy qaror): 毎日[まいにち] ジョギングを することに しました (Har kuni yugurishga qaror qildim). 2. 〜ことになる (Kompaniya qarori, tashqi qoida, qonun): 来月[らいげつ] 日本[にほん]へ 転勤[てんきん]する ことに なりました (Kelasi oy Yaponiyaga ish o'rnini ko'chirishga qaror qilindi - kompaniya buyrug'i).",
              examples: [
                {
                  sentence: '大阪[おおさか]へ 転勤[てんきん]に なりました。',
                  translation: "Osakaga ishga o'tkazildim.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l1-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri qaror turini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u2-l1-e1',
              type: 'multiple-choice',
              prompt: "«Shakar yemaslikka qaror qildim (o'zim)» qanday aytiladi?",
              options: [
                '食[た]べません',
                '食[た]べない ことに なりました',
                '甘[あま]い 物[もの]を 食[た]べない ことに しました',
                '食[た]べたい',
              ],
              correctAnswer: 2,
              explanation: 'Koto ni shimashita (shaxsiy qaror).',
            },
            {
              id: 'ja-n3-u2-l1-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「教育[きょういく]は 人生[じんせい]に 深[ふか]い 影響[えいきょう]を 与[あた]えます。」",
              options: [
                '食事[しょくじ]',
                '散歩[さんぽ]',
                '影響[えいきょう]を与える',
                '運転[うんてん]',
              ],
              correctAnswer: 2,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"影響[えいきょう]を与える\" (Taʼsir koʻrsatmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l1-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u2-l1-q1',
              question:
                "Kompaniya qoidasi yoki boshliqning qarori bilan biror o'zgarish bo'lsa qaysi biri ishlatiladi?",
              options: ['〜つもりです', '〜ことに しました', '〜ことに なりました', '〜たいです'],
              correctAnswerIndex: 2,
              explanation: 'Koto ni narimashita (external decision).',
            },
            {
              id: 'ja-n3-u2-l1-q2',
              question: "「法律[ほうりつ]で そういう ことに なっている」ning ma'nosi:",
              options: [
                "Qonun yo'q",
                "Qonun o'zgardi",
                "O'zim shunday qildim",
                "Qonun bo'yicha shunday belgilangan",
              ],
              correctAnswerIndex: 3,
              explanation: 'Established rule by law.',
            },
            {
              id: 'ja-n3-u2-l1-q3',
              question: '«Har kuni ertalab 6:00 da turishni odat qildim»:',
              options: [
                '毎朝[まいあさ] 6時[ろくじ]に 起[お]きる ことに しています',
                '起[お]きない',
                '6時[ろくじ]です',
                '6時[ろくじ]に 起[お]きます',
              ],
              correctAnswerIndex: 0,
              explanation: 'Koto ni shite imasu (shaxsiy doimiy odat).',
            },
            {
              id: 'ja-n3-u2-l1-q4',
              question: "〜ことにする dan oldin fe'l qaysi shaklda keladi?",
              options: ['Masu shakli', 'Ta shakli', "Lug'at shakli yoki Nai shakli", 'Te shakli'],
              correctAnswerIndex: 2,
              explanation: 'Dictionary / Nai form.',
            },
            {
              id: 'ja-n3-u2-l1-q5',
              question:
                '来月[らいげつ]から 東京[とうきょう]本社[ほんしゃ]へ 転勤[てんきん]する （　）。',
              options: ['ことにした', 'ことになった', 'ようにした', 'はずだ'],
              correctAnswerIndex: 1,
              explanation:
                'Kompaniya buyrugʻi yoki tashqi qaror bilan koʻchirilish: 〜ことになる (Koto ni natta).',
            },
            {
              id: 'ja-n3-u2-l1-q6',
              question: '健康[けんこう]の ために、毎日[まいにち] 走[はし]る （　） います。',
              options: ['ことに して', 'ことに なって', 'ように なって', 'ために して'],
              correctAnswerIndex: 0,
              explanation:
                'Oʻz ixtiyori bilan odatga aylantirish qarori: 〜ことにしている (Koto ni shite iru).',
            },
            {
              id: 'ja-n3-u2-l1-q7',
              question:
                '法律[ほうりつ]で、20歳[はたち]未満[みまん]は お酒[さけ]を 飲[の]んでは いけない （　）。',
              options: ['ことにしている', 'ことになっている', 'ようにしている', 'わけではない'],
              correctAnswerIndex: 1,
              explanation:
                'Qoida, qonun yoki ijtimoiy kelishuv: 〜ことになっている (Koto ni natte iru).',
            },
            {
              id: 'ja-n3-u2-l1-q8',
              question: '高[たか]すぎるので、この パソコンは 買[か]わない （　）。',
              options: ['ことにした', 'ことになった', 'ようになった', 'ようにした'],
              correctAnswerIndex: 0,
              explanation: 'Shaxsiy xarid qarori: 買わないことにした (Koto ni shita).',
            },
            {
              id: 'ja-n3-u2-l1-q9',
              question: '来週[らいしゅう]の 会議[かいぎ]は 中止[ちゅうし]に （　）。',
              options: ['することにした', 'なることになった', 'なった', 'することになった'],
              correctAnswerIndex: 1,
              explanation: 'Yigʻilish bekor boʻlishi rasman belgilandi: 中止になることになった.',
            },
            {
              id: 'ja-n3-u2-l1-q10',
              question: '「〜ことにする」oldidan feʼl qaysi shaklda keladi?',
              options: [
                'Lugʻat shakli yoki Nai shakli (Jisho-kei / Nai-kei)',
                'Masu shakli',
                'Te shakli',
                'Ta shakli',
              ],
              correctAnswerIndex: 0,
              explanation: 'Feʼlning oddiy hozirgi zamon shakllari: V-lugʻat / V-nai + ことにする.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u2-l2',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u2',
    unitTitle: 'Unit 2: Decisions & Habits',
    language: 'ja',
    level: 'N3',
    lessonNumber: 7,
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
          explanation:
            "1. 〜ようにする (tirishmoq / odat qilmoq): 油[あぶら]っこい 物[もの]を 食[た]べない ように しています (Yog'li ovqatlarni yemaslikka harakat qilyapman). 2. 〜ように (maqsad - ... bo'lishi uchun / fe'l imkoniyat yoki inkor bo'ladi): 忘[わす]れない ように、メモを 取[と]ります (Unutib qo'ymaslik uchun eslatma yozib olaman).",
          vocabulary: [
            {
              term: '心[こころ]がける',
              reading: 'kokorogakeru',
              meaning: 'Harakat qilmoq, eʼtibor bermoq',
              exampleSentence: '毎朝[まいあさ] 散歩[さんぽ]する ように 心[こころ]がけて います。',
              exampleTranslation: 'Har tong sayr qilishga harakat qilyapman.',
            },
            {
              term: '間[ま]に合[あ]う',
              reading: 'maniau',
              meaning: 'Vaqtida ulgurmoq',
              exampleSentence: '始発[しはつ]に 間[ま]に合[あ]う ように 早起[はやお]き しました。',
              exampleTranslation: 'Birinchi poyezdga ulgurish uchun erta uygʻondim.',
            },
            {
              term: '習慣[しゅうかん]',
              reading: 'shuukan',
              meaning: 'Odat, kun tartibi',
              exampleSentence:
                '寝[ね]る 前[まえ]に 単語[たんご]を 復習[ふくしゅう]する 習慣[しゅうかん]を つけました。',
              exampleTranslation:
                'Uxlashdan oldin yangi soʻzlarni takrorlash odatini shakllantirdim.',
            },
            {
              term: '予防[よぼう]する',
              reading: 'yobou suru',
              meaning: 'Oldini olmoq (kasallik, xavf)',
              exampleSentence:
                '風邪[かぜ]を ひかない ように 手洗[てあら]いを 徹底[てってい]します。',
              exampleTranslation: 'Shomollashning oldini olish uchun qoʻlni toza yuvaman.',
            },
            {
              term: '健康[けんこう]',
              reading: 'kenkou',
              meaning: 'Salomatlik, sogʻlomlik',
              exampleSentence:
                '健康[けんこう]の ために 野菜[やさい]を 多[おお]く 食[た]べる ように しています。',
              exampleTranslation:
                'Salomatlik uchun sabzavotlarni koʻproq yeyishga harakat qilyapman.',
            },
            {
              term: '忘[わす]れないように',
              reading: 'wasurenai you ni',
              meaning: 'Unutmaslik maqsadida',
              exampleSentence: '約束[やくそく]を 忘[わす]れない ように カレンダーに メモしました。',
              exampleTranslation: 'Vaqtni unutmaslik uchun taqvimga yozib qoʻydim.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Conscious Effort & Purpose: 〜ようにする vs 〜ように (In order that)',
              meaning: 'Harakat qilishga tirishish (you ni suru) va maqsad ergash gap (you ni).',
              usageNotes:
                "1. 〜ようにする (tirishmoq / odat qilmoq): 油[あぶら]っこい 物[もの]を 食[た]べない ように しています (Yog'li ovqatlarni yemaslikka harakat qilyapman). 2. 〜ように (maqsad - ... bo'lishi uchun / fe'l imkoniyat yoki inkor bo'ladi): 忘[わす]れない ように、メモを 取[と]ります (Unutib qo'ymaslik uchun eslatma yozib olaman).",
              examples: [
                {
                  sentence: 'メモを 取[と]ります。',
                  translation: 'Eslatma yozib olaman.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l2-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri maqsad shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u3-l2-e1',
              type: 'multiple-choice',
              prompt: '«Kechikmaslik uchun taksida boraman» qanday aytiladi?',
              options: [
                '遅刻[ちこく]しない ように、タクシーで 行[い]きます',
                '遅刻[ちこく]する ために、タクシー',
                '遅刻[ちこく]しない ように します',
                '遅刻[ちこく]です',
              ],
              correctAnswer: 0,
              explanation: 'Chikoku shinai you ni (kechikmaslik uchun).',
            },
            {
              id: 'ja-n3-u2-l2-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「健康[けんこう]を 維持[いじ]するために 運動[うんどう]します。」",
              options: ['散歩[さんぽ]', '運転[うんてん]', '食事[しょくじ]', '維持[いじ]する'],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"維持[いじ]する\" (Saqlab turmoq (holatni)).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l2-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u2-l2-q1',
              question: "«〜ように» va «〜ために» o'rtasidagi farq nima?",
              options: [
                'Ikkisi ham taqiq',
                "〜ように imkoniyat fe'llari va inkor bilan keladi (maqsad holatga yo'naltirilgan); 〜ために esa to'g'ridan-to'g'ri irodaviy harakat bilan keladi",
                "Hech qanday farq yo'q",
                "Birinchisi o'tgan zamon",
              ],
              correctAnswerIndex: 1,
              explanation: 'You ni is for potential/non-volitional/negative states.',
            },
            {
              id: 'ja-n3-u2-l2-q2',
              question: "«Har kuni yaponcha yangiliklarni ko'rishga tirishyapman»:",
              options: [
                '毎日[まいにち] 日本[にほん]の ニュースを 見[み]る ように しています',
                'ニュースを 見[み]ました',
                'ニュースを 見[み]る 予定[よてい]です',
                'ニュースです',
              ],
              correctAnswerIndex: 0,
              explanation: 'Miru you ni shite imasu.',
            },
            {
              id: 'ja-n3-u2-l2-q3',
              question: '«Yaxshi eshitilishi uchun balandroq gapiring»:',
              options: [
                '聞[き]く ために',
                '聞[き]こえる ように します',
                '話[はな]すな',
                'よく 聞[き]こえる ように、大[おお]きな 声[こえ]で 話[はな]してください',
              ],
              correctAnswerIndex: 3,
              explanation: 'Kikoeru you ni (eshitilishi uchun).',
            },
            {
              id: 'ja-n3-u2-l2-q4',
              question:
                'Shifokor bemorga «Iltimos, doringizni unutmang» deb maslahat berganda nima deydi?',
              options: [
                '薬[くすり]を 忘[わす]れない ように して ください',
                '薬[くすり]を 買[か]う',
                '薬[くすり]です',
                '薬[くすり]を 飲[の]まないで',
              ],
              correctAnswerIndex: 0,
              explanation: 'Wasurenai you ni shite kudasai.',
            },
            {
              id: 'ja-n3-u2-l2-q5',
              question: '風邪[かぜ]を ひかない （　）、温[あたた]かい 服[ふく]を 着[き]ます。',
              options: ['ように', 'ために', 'ようにして', 'ことになって'],
              correctAnswerIndex: 0,
              explanation:
                'Salbiy oqibatning oldini olish maqsadi (feʼl inkorida): 〜ように (Shamolab qolmaslik uchun).',
            },
            {
              id: 'ja-n3-u2-l2-q6',
              question: '忘[わす]れないように、手帳[てちょう]に メモを （　）。',
              options: [
                '書[か]くようにしています',
                '書[か]くことになりました',
                '書[か]くようです',
                '書[か]くはずです',
              ],
              correctAnswerIndex: 0,
              explanation: 'Har doim bajarishga harakat qilish odati: 〜ようにしている.',
            },
            {
              id: 'ja-n3-u2-l2-q7',
              question:
                '後ろの 人[ひと]にも よく （　）ように、大[おお]きな 声[こえ]で 話[はな]してください。',
              options: ['聞[き]こえる', '聞[き]く', '聞[き]こえて', '聞[き]かない'],
              correctAnswerIndex: 0,
              explanation:
                '〜ように dan oldin imkoniyat yoki oʻz-oʻzidan sodir boʻluvchi feʼl keladi: 聞こえる (eshitilishi uchun).',
            },
            {
              id: 'ja-n3-u2-l2-q8',
              question:
                '夜[よる]は 甘[あま]い ものを 食[た]べない （　） 努力[どりょく]して います。',
              options: ['ように', 'ために', 'ことに', 'はずで'],
              correctAnswerIndex: 0,
              explanation: 'Harakat qilmoq: 〜ないように努力する.',
            },
            {
              id: 'ja-n3-u2-l2-q9',
              question:
                '早[はや]く 日本語[にほんご]が 上手[じょうず]に （　）ように、毎日[まいにち] 練習[れんしゅう]します。',
              options: ['なる', 'なって', 'なりたい', 'ならせる'],
              correctAnswerIndex: 0,
              explanation: '〜ように oldidan nofaol oʻzgarish feʼli keladi: 上手になるように.',
            },
            {
              id: 'ja-n3-u2-l2-q10',
              question: '「〜ために」va「〜ように」oʻrtasidagi asosiy farq nima?',
              options: [
                '〜ために ixtiyoriy maqsad feʼllari bilan, 〜ように esa imkoniyat/inkor/nofaol holat bilan ishlatiladi',
                'Ikkalasi mutlaqo bir xil va farqsiz',
                '〜ように faqat oʻtmish zamon bilan keladi',
                '〜ために faqat bolalarga nisbatan aytiladi',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜ために ongli harakat maqsadi, 〜ように esa imkoniyat (話せるように) yoki inkor (忘れないように) bilan keladi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u2-l3',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u2',
    unitTitle: 'Unit 2: Decisions & Habits',
    language: 'ja',
    level: 'N3',
    lessonNumber: 8,
    title: 'Appearance & Hearsay: 〜そうだ (Looks like vs I heard that)',
    description:
      "Tashqi ko'rinishdan xulosa (sou da - o'xshaydi) va eshitilgan xabar (sou da - deyishyapti).",
    estimatedDurationMinutes: 15,
    icon: '👀',
    steps: [
      {
        id: 'ja-n3-u2-l3-s1',
        title: '〜そうだ Ikki Xil Qoidasi',
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: "Conjecture (Ko'rinish) vs Hearsay (Eshitilgan xabar)",
          explanation:
            "1. Ko'rinish / Taxmin (Looks like): Sifat asosi + そうだ (おいしそう = Mazaliga o'xshaydi; 雨[あめ]が 降[ふ]りそう = Yomg'ir yog'adigandek). 2. Eshitilgan xabar (I heard): Gapning to'liq oddiy shakli + そうだ (明日[あした]は 雨[あめ]が 降[ふ]るそうだ = Ertaga yomg'ir yog'armish / deb eshitdim).",
          vocabulary: [
            {
              term: '倒[たお]れそう',
              reading: 'taoresou',
              meaning: 'Yiqilayotgandek, agʻdarilayotgandek',
              exampleSentence: '強風[きょうふう]で 古[ふる]い 木[き]が 倒[たお]れそうです。',
              exampleTranslation: 'Kuchli shamolda eski daraxt agʻdarilayotgandek koʻrinadi.',
            },
            {
              term: '壊[こわ]れそう',
              reading: 'kowaresou',
              meaning: 'Buzilib ketadigandek, sinadigandek',
              exampleSentence: 'この 椅子[いす]は もう 壊[こわ]れそうです。',
              exampleTranslation: 'Bu stul hoziroq sinib ketadigandek koʻrinadi.',
            },
            {
              term: '噂[うわさ]',
              reading: 'uwasa',
              meaning: 'Mish-mish, gap-soʻz',
              exampleSentence:
                '彼[かれ]が 転職[てんしょく]する という 噂[うわさ]を 聞[き]きました。',
              exampleTranslation: 'Uning boshqa ishga oʻtishi haqidagi gap-soʻzni eshitdim.',
            },
            {
              term: '予報[よほう]',
              reading: 'yohou',
              meaning: 'Ob-havo maʼlumoti / bashorat',
              exampleSentence:
                '天気[てんき]予報[よほう]に よると、午後[ごご]から 雨[あめ]が 降[ふ]る そうです。',
              exampleTranslation: 'Ob-havo maʼlumotiga koʻra, tushdan soʻng yomgʻir yogʻar emish.',
            },
            {
              term: '発表[はっぴょう]する',
              reading: 'happyou suru',
              meaning: 'Eʼlon qilmoq, taqdimot qilmoq',
              exampleSentence:
                '来週[らいしゅう] 新製品[しんせいひん]が 発表[はっぴょう]される そうです。',
              exampleTranslation: 'Kelasi hafta yangi mahsulot taqdim etilishi aytilmoqda.',
            },
            {
              term: '美味しそう[おいしそう]',
              reading: 'oishisou',
              meaning: 'Mazalidek, ishtahabaxsh',
              exampleSentence:
                'とても 美味[おい]しそうな 料理[りょうり]が 運[はこ]ばれて きました。',
              exampleTranslation: 'Juda ishtahabaxsh koʻringan taom keltirildi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Appearance & Hearsay: 〜そうだ (Looks like vs I heard that)',
              meaning:
                "Tashqi ko'rinishdan xulosa (sou da - o'xshaydi) va eshitilgan xabar (sou da - deyishyapti).",
              usageNotes:
                "1. Ko'rinish / Taxmin (Looks like): Sifat asosi + そうだ (おいしそう = Mazaliga o'xshaydi; 雨[あめ]が 降[ふ]りそう = Yomg'ir yog'adigandek). 2. Eshitilgan xabar (I heard): Gapning to'liq oddiy shakli + そうだ (明日[あした]は 雨[あめ]が 降[ふ]るそうだ = Ertaga yomg'ir yog'armish / deb eshitdim).",
              examples: [
                {
                  sentence: '雨[あめ]が 降[ふ]りそうです。',
                  translation: "Yomg'ir yog'adiganga o'xshaydi.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l3-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri taxmin/xabar shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u2-l3-e1',
              type: 'multiple-choice',
              prompt: "«Ushbu taom juda mazaliga o'xshaydi (tashqi ko'rinishdan)»:",
              options: [
                'この料理[りょうり]は とても おいしそうです',
                'おいしいです',
                'おいしかったです',
                'おいしいそうです',
              ],
              correctAnswer: 0,
              explanation: 'Oishisou desu (i tushadi).',
            },
            {
              id: 'ja-n3-u2-l3-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「環境[かんきょう]への 意識[いしき]が 高[たか]まっています。」",
              options: ['意識[いしき]', '食事[しょくじ]', '運転[うんてん]', '散歩[さんぽ]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"意識[いしき]\" (Ong, xabardorlik).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l3-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u2-l3-q1',
              question: "«Ob-havo ma'lumotiga ko'ra, ertaga qor yog'armish»:",
              options: [
                '天気[てんき]予報[よほう]に よると、明日[あした] 雪[ゆき]が 降[ふ]るそうです',
                '雪[ゆき]です',
                '雪[ゆき]が 降[ふ]りました',
                '雪[ゆき]が 降[ふ]りそうです',
              ],
              correctAnswerIndex: 0,
              explanation: 'Furu sou desu (hearsay).',
            },
            {
              id: 'ja-n3-u2-l3-q2',
              question: "「いい (yaxshi)」sifatining ko'rinish (taxmin) shakli nima bo'ladi?",
              options: ['いいそう', 'よいそう', 'よさそう', 'いくそう'],
              correctAnswerIndex: 2,
              explanation: 'Istisno: よさそう (Yosasou).',
            },
            {
              id: 'ja-n3-u2-l3-q3',
              question: "「彼[かれ]は 元気[げんき]そうだ」ning ma'nosi:",
              options: ["U tetik / sog'lom ko'rinyapti", 'U ketdi', 'U kasal', 'U keldi'],
              correctAnswerIndex: 0,
              explanation: "Genkisou da (tetik ko'rinadi).",
            },
            {
              id: 'ja-n3-u2-l3-q4',
              question: '«Kimo-shakl + sou ni mo nai» nimani bildiradi?',
              options: [
                "Darhol bo'ladi",
                "Bo'lmoqchi",
                "Bo'lib o'tdi",
                "Hech ham sodir bo'ladiganga o'xshamaydi",
              ],
              correctAnswerIndex: 3,
              explanation: 'Unlikely to happen.',
            },
            {
              id: 'ja-n3-u2-l3-q5',
              question:
                '天気[てんき]予報[よほう]に よると、明日[あした]は 雨[あめ]が （　）そうです。',
              options: ['降[ふ]る', '降[ふ]り', '降[ふ]った', '降[ふ]りそう'],
              correctAnswerIndex: 0,
              explanation:
                'Manbaga asoslangan mish-mish/xabar (Hearsay): Feʼl oddiy zamon (降る) + そうだ.',
            },
            {
              id: 'ja-n3-u2-l3-q6',
              question:
                '今[いま]にも 雨[あめ]が （　）そうです。傘[かさ]を 持[も]って 行[い]きましょう。',
              options: ['降[ふ]り', '降[ふ]る', '降[ふ]った', '降[ふ]らない'],
              correctAnswerIndex: 0,
              explanation:
                'Koʻrinish/darhol sodir boʻlish alomati: Feʼl masu oʻzagi (降り) + そうだ.',
            },
            {
              id: 'ja-n3-u2-l3-q7',
              question: 'この ケーキ、とても （　）そうですね。',
              options: ['おいし', 'おいしい', 'おいしくて', 'おいしかった'],
              correctAnswerIndex: 0,
              explanation: 'I-sifat koʻrinishida oxirgi -i tushib qoladi: おいし + そう.',
            },
            {
              id: 'ja-n3-u2-l3-q8',
              question: '「よさそうだ」qaysi soʻzning koʻrinish shakli?',
              options: ['いい (Yaxshi)', 'よくない', 'よかった', 'よる'],
              correctAnswerIndex: 0,
              explanation:
                'いい (yoi) sifatining koʻrinish shakli istisno tariqasida よさそうだ boʻladi.',
            },
            {
              id: 'ja-n3-u2-l3-q9',
              question:
                '田中[たなか]さんは 来月[らいげつ] 結婚[けっこん]する （　）。お祝い[いわい]を しましょう。',
              options: ['そうだ', 'そうだとして', 'そうに', 'そうだそうだ'],
              correctAnswerIndex: 0,
              explanation: 'Eshitilgan yangilik (Hearsay): 結婚するそうだ.',
            },
            {
              id: 'ja-n3-u2-l3-q10',
              question: '荷物[にもつ]が 重[おも]くて、ひもが （　）そうだ。',
              options: ['切[き]れ', '切[き]る', '切[き]れた', '切[き]れる'],
              correctAnswerIndex: 0,
              explanation: 'Uzilay deb turibdi (xavfli koʻrinish): 切れそうだ (Kire-sou da).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u2-l4',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u2',
    unitTitle: 'Unit 2: Decisions & Habits',
    language: 'ja',
    level: 'N3',
    lessonNumber: 9,
    title: 'Nuanced Reasoning & Contrast: 〜わりに(は) vs 〜くせに',
    description:
      "Kutilganiga zid holat (warini - qaramay) va tanqidiy norozilik (kuseni - bo'la turib).",
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
          explanation:
            "1. 〜わりに(は): Nisbatan / Qaraganda (kutilgan me'yordan farq qilishi, neytral yoki ijobiy): この店[みせ]は 値段[ねだん]が 安[やす]い わりに、とても おいしい (Bu do'kon narxi arzonligiga qaramay, juda mazali). 2. 〜くせに: ... bo'la turib (faqat salbiy tanqid va norozilik): 何[なに]も 知[し]らない くせに、偉[えら]そうに 言[い]うな (Hech narsa bilmay turib, katta ketma!).",
          vocabulary: [
            {
              term: '値段[ねだん]',
              reading: 'nedan',
              meaning: 'Narx, baho',
              exampleSentence:
                'この 店[みせ]の 料理[りょうり]は 値段[ねだん]の わりには 量[りょう]が 多[おお]いです。',
              exampleTranslation: 'Bu restoranning taomi narxiga yarasha ancha koʻp.',
            },
            {
              term: '年齢[ねんれい]',
              reading: 'nenrei',
              meaning: 'Yosh, umr',
              exampleSentence:
                '祖母[そぼ]は 年齢[ねんれい]の わりには とても 若[わか]く 見[み]えます。',
              exampleTranslation: 'Buvim yoshlariga nisbatan ancha yosh koʻrinadilar.',
            },
            {
              term: '給料[きゅうりょう]',
              reading: 'kyuuryou',
              meaning: 'Oylik maosh',
              exampleSentence:
                '給料[きゅうりょう]が 安[やす]い わりには 仕事[しごと]が 忙[いそが]しすぎます。',
              exampleTranslation: 'Oylik kamligiga qaramay ish haddan tashqari koʻp.',
            },
            {
              term: '経験[けいけん]',
              reading: 'keiken',
              meaning: 'Tajriba',
              exampleSentence:
                '経験[けいけん]が 浅[あさ]い わりには 的確[てきかく]な 判断[はんだん]が できます。',
              exampleTranslation: 'Tajribasi kamligiga qaramay toʻgʻri xulosa chiqara oladi.',
            },
            {
              term: '実力[じつりょく]',
              reading: 'jitsuryoku',
              meaning: 'Haqiqiy bilim, mahorat',
              exampleSentence:
                '実力[じつりょく]が ある くせに 自信[じしん]が なさそうに 話[はな]します。',
              exampleTranslation: 'Haqiqiy bilimi boʻla turib, oʻziga ishonchsiz gapiradi.',
            },
            {
              term: '努力[どりょく]',
              reading: 'doryoku',
              meaning: 'Harakat, saʼy-harakat',
              exampleSentence:
                '自分[じぶん]では 努力[どりょく]しない くせに 人[ひと]の 文句[もんく]ばかり 言[い]います。',
              exampleTranslation: 'Oʻzi harakat qilmay turib, faqat boshqalardan noliyveradi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Nuanced Reasoning & Contrast: 〜わりに(は) vs 〜くせに',
              meaning:
                "Kutilganiga zid holat (warini - qaramay) va tanqidiy norozilik (kuseni - bo'la turib).",
              usageNotes:
                "1. 〜わりに(は): Nisbatan / Qaraganda (kutilgan me'yordan farq qilishi, neytral yoki ijobiy): この店[みせ]は 値段[ねだん]が 安[やす]い わりに、とても おいしい (Bu do'kon narxi arzonligiga qaramay, juda mazali). 2. 〜くせに: ... bo'la turib (faqat salbiy tanqid va norozilik): 何[なに]も 知[し]らない くせに、偉[えら]そうに 言[い]うな (Hech narsa bilmay turib, katta ketma!).",
              examples: [
                {
                  sentence: '値段[ねだん]が 安[やす]い。',
                  translation: 'Narxi arzon.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l4-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri zidlik shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u2-l4-e1',
              type: 'multiple-choice',
              prompt: "«U yosh bo'lishiga qaramay juda mulohazali va aqlli»:",
              options: [
                '若[わか]い くせに',
                '若[わか]い から',
                '若[わか]い なら',
                '彼[かれ]は 若[わか]い わりに、しっかり している',
              ],
              correctAnswer: 3,
              explanation: 'Wakai warini (ijobiy kutilmagan mezon).',
            },
            {
              id: 'ja-n3-u2-l4-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「困難[こんなん]を 克服[こくふく]して 成功[せいこう]しました。」",
              options: ['散歩[さんぽ]', '運転[うんてん]', '克服[こくふく]する', '食事[しょくじ]'],
              correctAnswer: 2,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"克服[こくふく]する\" (Yengib oʻtmoq, bartaraf etmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l4-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u3-l4-q1',
              question: 'Qaysi grammatik ifoda faqat salbiy tanqid va norozilik ohangiga ega?',
              options: ['〜くせに', '〜のに', '〜ても', '〜わりに'],
              correctAnswerIndex: 0,
              explanation: '〜くせに (Kuseni).',
            },
            {
              id: 'ja-n3-u2-l4-q2',
              question: "«O'zi puli yo'q bo'la turib qimmatbaho mashina sotib oldi (norozilik)»:",
              options: [
                'お金[かね]が ない くせに、高級車[こうきゅうしゃ]を 買[か]った',
                'お金[かね]が ない から',
                'お金[かね]です',
                'お金[かね]が ない わりに',
              ],
              correctAnswerIndex: 0,
              explanation: 'Nai kuseni.',
            },
            {
              id: 'ja-n3-u2-l4-q3',
              question: 'Ot bilan «warini» qanday ulanadi?',
              options: [
                'Ot + な + わりに',
                'Ot + の + わりに (Masalan: 年齢[ねんれい]の わりに)',
                'Ot + わりに',
                'Ot + だ + わりに',
              ],
              correctAnswerIndex: 1,
              explanation: 'Ot + の + わりに.',
            },
            {
              id: 'ja-n3-u2-l4-q4',
              question: "«Katta yoshda bo'lishiga qaramay yosh ko'rinadi»:",
              options: [
                '年[とし]だから',
                '年[とし]の くせに',
                '年[とし]の わりに 若[わか]く 見[み]える',
                '年[とし]です',
              ],
              correctAnswerIndex: 2,
              explanation: 'Toshi no warini.',
            },
            {
              id: 'ja-n3-u2-l4-q5',
              question:
                '彼[かれ]は お金[かね]が ない （　）、いつも 高[たか]い 服[ふく]ばかり 買[か]っている。',
              options: ['くせに', 'わりに', '反面[はんめん]', 'せいで'],
              correctAnswerIndex: 0,
              explanation:
                'Salbiy tanqid va ayblov ohangida zidlik: 〜くせに (Pulim yoʻq deganiga qaramay/nosamimiy).',
            },
            {
              id: 'ja-n3-u2-l4-q6',
              question:
                'この レストランは 値段[ねだん]が 高[たか]い （　）、味[あじ]は 普通[ふつう]だ。',
              options: ['わりに', 'くせに', 'ために', 'せいで'],
              correctAnswerIndex: 0,
              explanation:
                'Xolisona kutuv mezoniga mos kelmaslik: 〜わりに(は) (Narxi qimmatligiga yarasha emas).',
            },
            {
              id: 'ja-n3-u2-l4-q7',
              question: '子[こ]どもの （　）、大人[おとな]のような 意見[いけん]を 言[い]う。',
              options: ['くせに', 'わりに', 'わりには', 'だけで'],
              correctAnswerIndex: 2,
              explanation:
                'Kutilgandan yaxshiroq/yetukroq natija: 子どものわりには (Bola boʻlishiga qaramasdan).',
            },
            {
              id: 'ja-n3-u2-l4-q8',
              question:
                '自分[じぶん]では 何[なに]も やらない （　）、文句[もんく]ばかり 言[い]う。',
              options: ['くせに', 'わりに', '反面', 'ために'],
              correctAnswerIndex: 0,
              explanation: 'Birovning gʻalati xulqini jahl yoki tanqid bilan aytganda: 〜くせに.',
            },
            {
              id: 'ja-n3-u2-l4-q9',
              question: '彼[かれ]は 年齢[ねんれい]の （　） 若[わか]く 見[み]える。',
              options: ['わりに', 'くせに', 'せいで', 'おかげで'],
              correctAnswerIndex: 0,
              explanation: 'Yoshiga nisbatan yosh koʻrinish: 年齢のわりに (Nenrei no wari ni).',
            },
            {
              id: 'ja-n3-u2-l4-q10',
              question: '「〜くせに」konstruksiyasining eng muhim qoidasi qaysi?',
              options: [
                'Gapiruvchi oʻziga nisbatan bu soʻzni qoʻllay olmaydi (faqat boshqalarni tanqid qilishda ishlatiladi)',
                'Faqat ob-havo haqida gapirganda ishlatiladi',
                'Faqat minnatdorchilik bildirishda aytiladi',
                'Faqat yozma adabiy tilda qoʻllanadi',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜くせに da ayblov/tanqid maʼnosi boʻlgani sababli, inson oʻzining xatti-harakatiga bu grammatikani qoʻllay olmaydi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u2-l5',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u2',
    unitTitle: 'Unit 2: Decisions & Habits',
    language: 'ja',
    level: 'N3',
    lessonNumber: 10,
    title: 'N3 Reading: Essay on Modern Work Culture in Japan',
    description:
      "Yaponiyadagi zamonaviy ish madaniyati (Telework, Work-Life Balance) haqidagi N3 o'qish matni.",
    estimatedDurationMinutes: 16,
    icon: '💼',
    steps: [
      {
        id: 'ja-n3-u2-l5-s1',
        title: "O'qish Matni",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Essay: Changing Workstyles in Japan',
          explanation:
            '近年[きんねん]、日本[にほん]の 企業[きぎょう]では テレワークや フレックスタイム制[せい]を 導入[どうにゅう]する 会社[かいしゃ]が 増[ふ]えて きました。 以前[いぜん]は 毎日[まいにち] 満員[まんいん]電車[でんしゃ]に 揺[ゆ]られて 通勤[つうきん]するのが 当然[とうぜん]だと 考[かんが]えられて いましたが、在宅[ざいたく]勤務[きんむ]によって 通勤[つうきん]の ストレスが 減[へ]り、家族[かぞく]と 過[す]ごす 時間[じかん]が 増[ふ]えたと 好評[こうひょう]です。 一方[いっぽう]で、社員[しゃいん]同士[どうし]の コミュニケーションが 減[へ]り、新入[しんにゅう]社員[しゃいん]の 育成[いくせい]が 難[むずか]しく なったという 課題[かだい]も 指摘[してき]されて います。',
          keyPoints: [
            "テレワークの メリット：通勤[つうきん]ストレスの 減少[げんしょう]、家族[かぞく]との 時間[じかん] (Afzalligi: Yo'l stressi kamayishi, oilaga vaqt)",
            "テレワークの 課題[かだい]：コミュニケーション不足[ぶそく]、新入[しんにゅう]社員[しゃいん]の 育成[いくせい] (Kamchiligi: Muloqot kamayishi, yangi xodimlarni o'qitish qiyinligi)",
          ],
          vocabulary: [
            {
              term: '働き方改革[はたらきかたかいかく]',
              reading: 'hatarakikata kaikaku',
              meaning: 'Ish tartibi va mehnat madaniyati islohoti',
              exampleSentence:
                '日本[にほん]では 働[はたら]き方[かた]改革[かいかく]が 進[すす]んでいます。',
              exampleTranslation: 'Yaponiyada mehnat madaniyati islohoti jadal bormoqda.',
            },
            {
              term: '残業[ざんぎょう]',
              reading: 'zangyou',
              meaning: 'Ishdan keyingi ortiqcha ish',
              exampleSentence:
                '最近[さいきん]は 残業[ざんぎょう]を 減[へ]らす 企業[きぎょう]が 増[ふ]えています。',
              exampleTranslation:
                'Soʻnggi paytlarda qoʻshimcha ish vaqtini qisqartiruvchi kompaniyalar koʻpaymoqda.',
            },
            {
              term: '有給休暇[ゆうきゅうきゅうか]',
              reading: 'yuukyuu kyuuka',
              meaning: 'Haq toʻlanadigan mehnat taʼtili',
              exampleSentence:
                '有給[ゆうきゅう]休暇[きゅうか]を しっかり 取得[しゅとく]することが 推奨[すいしょう]されます。',
              exampleTranslation: 'Mehnat taʼtilidan toʻliq foydalanish tavsiya etiladi.',
            },
            {
              term: '効率[こうりつ]',
              reading: 'kouritsu',
              meaning: 'Samaradorlik, unumdorlik',
              exampleSentence:
                'ITツールを 活用[かつよう]して 業務[ぎょうむ]の 効率[こうりつ]を 上[あ]げます。',
              exampleTranslation: 'IT vositalaridan foydalanib ish samaradorligini oshiramiz.',
            },
            {
              term: '職場[しょくば]',
              reading: 'shokuba',
              meaning: 'Ish joyi, ofis muhiti',
              exampleSentence:
                '風通[かぜとお]しの 良[よ]い 職場[しょくば]環境[かんきょう]を 目指[めざ]しています。',
              exampleTranslation: 'Ochiq va qulay ish joyi muhitiga intilmoqdamiz.',
            },
            {
              term: '両立[りょうりつ]する',
              reading: 'ryouritsu suru',
              meaning: 'Ikkalasini birgalikda muvaffaqiyatli olib bormoq',
              exampleSentence:
                '仕事[しごと]と 子育[こそだ]てを 上手[じょうず]に 両立[りょうりつ]させて います。',
              exampleTranslation:
                'Karyera bilan farzand tarbiyasini ajoyib tarzda birga olib bormoqda.',
            },
          ],
          grammarRules: [
            {
              pattern: 'N3 Reading: Essay on Modern Work Culture in Japan',
              meaning:
                "Yaponiyadagi zamonaviy ish madaniyati (Telework, Work-Life Balance) haqidagi N3 o'qish matni.",
              usageNotes:
                '近年[きんねん]、日本[にほん]の 企業[きぎょう]では テレワークや フレックスタイム制[せい]を 導入[どうにゅう]する 会社[かいしゃ]が 増[ふ]えて きました。 以前[いぜん]は 毎日[まいにち] 満員[まんいん]電車[でんしゃ]に 揺[ゆ]られて 通勤[つうきん]するのが 当然[とうぜん]だと 考[かんが]えられて いましたが、在宅[ざいたく]勤務[きんむ]によって 通勤[つうきん]の ストレスが 減[へ]り、家族[かぞく]と 過[す]ごす 時間[じかん]が 増[ふ]えたと 好評[こうひょう]です。 一方[いっぽう]で、社員[しゃいん]同士[どうし]の コミュニケーションが 減[へ]り、新入[しんにゅう]社員[しゃいん]の 育成[いくせい]が 難[むずか]しく なったという 課題[かだい]も 指摘[してき]されて います。',
              examples: [
                {
                  sentence: '新[あたら]しい システムを 導入[どうにゅう]する。',
                  translation: 'Yangi tizimni joriy qilmoq.',
                },
                {
                  sentence: '多[おお]くの 課題[かだい]が ある。',
                  translation: "Ko'plab muammolar bor.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l5-s2',
        title: 'Tushunish Mashqi',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Matn bo'yicha to'g'ri fikrni tanlang.",
          exercises: [
            {
              id: 'ja-n3-u2-l5-e1',
              type: 'multiple-choice',
              prompt: 'Masofaviy ishlashning (Telework) qanday ijobiy tomoni aytilgan?',
              options: [
                "Qatnov stressining kamayishi va oila bilan vaqt o'tkazish ko'payishi",
                "Poyezdlar bepul bo'lgani",
                'Ish haqi 2 barobar oshgani',
                'Barcha kompaniyalar yopilgani',
              ],
              correctAnswer: 0,
              explanation: 'Matnda: 通勤ストレスが減り、家族と過ごす時間が増えた.',
            },
            {
              id: 'ja-n3-u2-l5-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「多[おお]くの 課題[かだい]が ある。」",
              options: ['課題[かだい]', '散歩[さんぽ]', '食事[しょくじ]', '運転[うんてん]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"課題[かだい]\" (Muammo / Hal qilinishi kerak bo'lgan vazifa).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u2-l5-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u2-l5-q1',
              question: 'Matnda masofaviy ishlashning qanday kamchiligi (kadai) keltirilgan?',
              options: [
                "Xodimlar o'rtasida muloqot kamayishi va yangi xodimlarni o'rgatish qiyinlashuvi",
                'Kompyuterlar yetishmasligi',
                "Elektr toki o'chib qolishi",
                'Odamlar uxlayverishi',
              ],
              correctAnswerIndex: 0,
              explanation: "Muloqot kamayishi va yangi xodimlarni o'rgatish qiyinlashuvi.",
            },
            {
              id: 'ja-n3-u2-l5-q2',
              question: "「一方[いっぽう]で」bog'lovchisining ma'nosi:",
              options: [
                'Shuning uchun',
                'Avval',
                'Chunki',
                'Boshqa tomondan esa / Shu bilan birga',
              ],
              correctAnswerIndex: 3,
              explanation: 'On the other hand (boshqa tomondan).',
            },
            {
              id: 'ja-n3-u2-l5-q3',
              question: '「在宅[ざいたく]勤務[きんむ]」nimani anglatadi?',
              options: [
                'Chet elga xizmat safari',
                'Dam olish kuni',
                'Uydan turib ishlash',
                'Ofisda tunab qolish',
              ],
              correctAnswerIndex: 2,
              explanation: 'Uydan ishlash.',
            },
            {
              id: 'ja-n3-u2-l5-q4',
              question: "「満員[まんいん]電車[でんしゃ]」so'zidagi 満員 nimani bildiradi?",
              options: ['Buzilgan', "Odamga liq to'la / Tiqilinch", "Bo'm-bo'sh", 'Tez yurar'],
              correctAnswerIndex: 1,
              explanation: 'Full of people / Packed.',
            },
            {
              id: 'ja-n3-u2-l5-q5',
              question:
                '日本[にほん]の 職場[しょくば]における「報・連・相（ほうれんそう）」の「相」とは 何[なん]のことか？',
              options: [
                '相談[そうだん] (Maslahatlashish)',
                '掃除[そうじ] (Tozalash)',
                '相撲[すもう] (Sport)',
                '相互[そうご] (Oʻzaro)',
              ],
              correctAnswerIndex: 0,
              explanation: 'Horenso: 報告 (Hisobot), 連絡 (Bogʻlanish), 相談 (Maslahat).',
            },
            {
              id: 'ja-n3-u2-l5-q6',
              question:
                '残業[ざんぎょう]を 減[へ]らす ために、企業[きぎょう]が 進[すす]めている 取[と]り組[く]みは 何[なに]か？',
              options: [
                '定時[ていじ]退社[たいしゃ]の 推進[すいしん]',
                '給料[きゅうりょう]の 削減[さくげん]',
                '有給[ゆうきゅう]休暇[きゅうか]の 廃止[はいし]',
                '勤務[きんむ]時間[じかん]の 延長[えんちょう]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ortiqcha ishni kamaytirish uchun vaqtida ketish (Teiji taisha suishin) joriy qilinadi.',
            },
            {
              id: 'ja-n3-u2-l5-q7',
              question: '「有給[ゆうきゅう]休暇[きゅうか]」とは どのような 休暇[きゅうか]か？',
              options: [
                '給料[きゅうりょう]が 出[で]る 休[やす]み (Haq toʻlanadigan taʼtil)',
                '無給[むきゅう]の 休[やす]み',
                '病気[びょうき]の 時[とき]だけの 休[やす]み',
                '週末[しゅうまつ]の 休[やす]み',
              ],
              correctAnswerIndex: 0,
              explanation: 'Yuukyuu kyuuka — xodimga haq toʻlanadigan qonuniy mehnat taʼtili.',
            },
            {
              id: 'ja-n3-u2-l5-q8',
              question:
                '「テレワーク」の 普及[ふきゅう]に よって 得[え]られた 最大[さいだい]の メリットは 何[なに]か？',
              options: [
                '通勤[つうきん]の ストレスが 減[へ]ったこと',
                '全員[ぜんいん]の 給料[きゅうりょう]が 2倍[ばい]に なったこと',
                '会社[かいしゃ]が なくなったこと',
                '日本語[にほんご]が 不要[ふよう]に なったこと',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Masofaviy ish (Telework) poyezdlardagi tirband qatnov (Tsuukin) stressini kamaytiradi.',
            },
            {
              id: 'ja-n3-u2-l5-q9',
              question:
                'ビジネスメールで「お世話[せわ]に なっております」を 書[か]く タイミングは？',
              options: [
                'メールの 冒頭[ぼうとう]（挨拶[あいさつ]）',
                'メールの 一番[いちばん] 最後[さいご]',
                '添付[てんぷ]ファイルの中',
                '件名[けんめい]（タイトル）',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ish yozishmalarida har bir xat boshida salomlashish odobi sifatida yoziladi.',
            },
            {
              id: 'ja-n3-u2-l5-q10',
              question:
                '同僚[どうりょう]が 先[さき]に 帰[かえ]る 際[さい]、何[なに]と 声[こえ]を かけますか？',
              options: [
                'お疲[つか]れ様[さま]でした',
                'ごちそうさまでした',
                'さようなら',
                'お大事[だいじ]に',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Hamkasb ishdan ketayotganda munosib mehnat ehtiromi: お疲れ様でした (Otsukaresama deshita).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u3-l1',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u3',
    unitTitle: 'Unit 3: Keigo & Business Japanese',
    language: 'ja',
    level: 'N3',
    lessonNumber: 11,
    title: 'Keigo 1: Honorific Language (尊敬語 - Sonkeigo)',
    description:
      "Mijoz va ustoz harakatini ulug'lovchi hurmat tili (Sonkeigo: いらっしゃる, おっしゃる, なさる).",
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
          explanation:
            "Suhbatdosh yoki hurmatli uchinchi shaxsning (boshliq, mijoz, ustoz) harakatini ulug'lash uchun maxsus fe'llar ishlatiladi: 行く/来る/いる -> いらっしゃる, 言う -> おっしゃる, 食べる/飲む -> 召[め]し上[あ]がる, する -> なさる, 見る -> ご覧[らん]に なる, 知っている -> ご存[ぞん]じです.",
          keyPoints: [
            'Umumiy qoida: お + Masu asosi + に なる (masalan: お帰[かえ]りに なります).',
          ],
          vocabulary: [
            {
              term: 'おっしゃる',
              reading: 'ossharu',
              meaning: 'Demoq, aytmoq (Sonkeigo)',
              exampleSentence: '社長[しゃちょう]が そのように おっしゃいました。',
              exampleTranslation: 'Prezident shunday deb aytdilar.',
            },
            {
              term: 'いらっしゃる',
              reading: 'irassharu',
              meaning: 'Boʻlmoq, kelmoq, bormoq (Sonkeigo)',
              exampleSentence: '先生[せんせい]は 研究室[けんきゅうしつ]に いらっしゃいます。',
              exampleTranslation: 'Ustoz xonalarida oʻtiribdilar.',
            },
            {
              term: 'ご覧[らん]になる',
              reading: 'goran ni naru',
              meaning: 'Koʻrmoq, nazar solmoq (Sonkeigo)',
              exampleSentence: 'この 資料[しりょう]を もう ご覧[らん]に なりましたか。',
              exampleTranslation: 'Ushbu hujjatni koʻrib chiqdingizmi?',
            },
            {
              term: 'なさる',
              reading: 'nasaru',
              meaning: 'Qilmoq, bajarmoq (Sonkeigo)',
              exampleSentence: '部長[ぶちょう]、今週末[こんしゅうまつ]は 何[なに]を なさいますか。',
              exampleTranslation: 'Boʻlim boshligʻi, bu dam olish kunlari nima qilasiz?',
            },
            {
              term: '召[め]し上[あ]がる',
              reading: 'meshiagaru',
              meaning: 'Yemoq, ichmoq (Sonkeigo)',
              exampleSentence: 'どうぞ 温[あたた]かい お茶[ちゃ]を 召[め]し上[あ]がって ください。',
              exampleTranslation: 'Iltimos, issiq choydan iching.',
            },
            {
              term: 'ご存じ[ぞんじ]',
              reading: 'gozonji',
              meaning: 'Bilmoq, xabardor boʻlmoq (Sonkeigo)',
              exampleSentence:
                '田中[たなか]さんの 新[あたら]しい 連絡先[れんらくさき]を ご存[ぞん]じですか。',
              exampleTranslation: 'Tanaka sanning yangi telefon raqamini bilasizmi?',
            },
          ],
          grammarRules: [
            {
              pattern: 'Keigo 1: Honorific Language (尊敬語 - Sonkeigo)',
              meaning:
                "Mijoz va ustoz harakatini ulug'lovchi hurmat tili (Sonkeigo: いらっしゃる, おっしゃる, なさる).",
              usageNotes:
                "Suhbatdosh yoki hurmatli uchinchi shaxsning (boshliq, mijoz, ustoz) harakatini ulug'lash uchun maxsus fe'llar ishlatiladi: 行く/来る/いる -> いらっしゃる, 言う -> おっしゃる, 食べる/飲む -> 召[め]し上[あ]がる, する -> なさる, 見る -> ご覧[らん]に なる, 知っている -> ご存[ぞん]じです.",
              examples: [
                {
                  sentence: '社長[しゃちょう]が そう おっしゃいました。',
                  translation: 'Prezident shunday dedilar.',
                },
                {
                  sentence: 'どうぞ 召[め]し上[あ]がって ください。',
                  translation: 'Marhamat, tanovul qiling.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l1-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri Sonkeigo shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u3-l1-e1',
              type: 'multiple-choice',
              prompt: "«Ustoz hozir xonalaridami?» muloyim hurmat shaklida qanday so'raladi?",
              options: [
                '先生[せんせい]が おるか',
                '先生[せんせい]です',
                '先生[せんせい]は いますか',
                '先生[せんせい]は 今[いま] 研究室[けんきゅうしつ]に いらっしゃいますか',
              ],
              correctAnswer: 3,
              explanation: 'Irasshaimasu ka (Sonkeigo).',
            },
            {
              id: 'ja-n3-u3-l1-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「どうぞ 召[め]し上[あ]がって ください。」",
              options: [
                '散歩[さんぽ]',
                '運転[うんてん]',
                '食事[しょくじ]',
                '召[め]し上[あ]がります',
              ],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"召[め]し上[あ]がります\" (Yemoqdalar / Ichmoqdalar (Sonkeigo)).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l1-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u3-l1-q1',
              question: "Mijozga «Ushbu hujjatni ko'rdingizmi?» deb qanday so'raladi?",
              options: [
                'この資料[しりょう]を 拝見[はいけん]しましたか',
                '資料[しりょう]です',
                'この資料[しりょう]を 見[み]ましたか',
                'この資料[しりょう]を ご覧[らん]に なりましたか',
              ],
              correctAnswerIndex: 3,
              explanation: 'Goran ni narimashita ka (Sonkeigo).',
            },
            {
              id: 'ja-n3-u3-l2-q2',
              question: "«Bilmoq (Shitte iru)» fe'lining Sonkeigo shakli:",
              options: [
                '存[ぞん]じて おります',
                '知[し]っています',
                '分[わ]かります',
                'ご存[ぞん]じです',
              ],
              correctAnswerIndex: 3,
              explanation: 'Gozonji desu.',
            },
            {
              id: 'ja-n3-u3-l1-q3',
              question: 'Sonkeigo qachon ishlatilishi mutlaqo XATO hisoblanadi?',
              options: [
                'Mijozga nisbatan',
                'Kompaniya prezidentiga nisbatan',
                "O'zining yoki o'z oilasining harakatiga nisbatan ishlatilganda",
                'Ustozga nisbatan',
              ],
              correctAnswerIndex: 2,
              explanation: "O'z harakatiga Sonkeigo qo'llab bo'lmaydi.",
            },
            {
              id: 'ja-n3-u3-l1-q4',
              question: "「何[なに]を なさいますか」ning ma'nosi:",
              options: [
                'Nima qilasiz? / Nima buyurasiz?',
                'Qayerga bordingiz?',
                'Nima yedingiz?',
                'Kim keldi?',
              ],
              correctAnswerIndex: 0,
              explanation: 'Nima qilasiz? (Suru -> Nasaru).',
            },
            {
              id: 'ja-n3-u3-l1-q5',
              question: '社長[しゃちょう]は もう お帰[かえ]りに （　）。',
              options: ['なりました', 'しました', 'いたしましました', '申[もう]しました'],
              correctAnswerIndex: 0,
              explanation:
                'Hurmat shakli (Sonkeigo): お + Feʼl oʻzagi + になる (Okaeri ni narimashita).',
            },
            {
              id: 'ja-n3-u3-l1-q6',
              question: '先生[せんせい]、この 本[ほん]を もう （　）か。',
              options: [
                'ご覧[らん]に なりました',
                '拝見[はいけん]しました',
                '見[み]ていただきました',
                'お見[み]せしました',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Koʻrmoq (見る) feʼlining sonkeigo (hurmat) shakli: ご覧になる (Goran ni naru).',
            },
            {
              id: 'ja-n3-u3-l1-q7',
              question: 'お客様[きゃくさま]、お飲[の]み物[もの]は 何[なに]を （　）か。',
              options: [
                '召[め]し上[あ]がります',
                '頂[いただ]きます',
                '参[まい]ります',
                '申[もう]されます',
              ],
              correctAnswerIndex: 0,
              explanation: 'Yemoq/ichmoq feʼlining sonkeigo shakli: 召し上がる (Meshiagaru).',
            },
            {
              id: 'ja-n3-u3-l1-q8',
              question: '部長[ぶちょう]は 会議[かいぎ]室[しつ]に （　）。',
              options: ['いらっしゃいます', 'おります', 'まいります', 'いただきます'],
              correctAnswerIndex: 0,
              explanation: 'Boʻlmoq (いる) feʼlining sonkeigo shakli: いらっしゃる (Irassharu).',
            },
            {
              id: 'ja-n3-u3-l1-q9',
              question: '鈴木[すずき]様[さま]は 明日[あした] （　）予定[よてい]です。',
              options: ['お越[こ]しに なる', '参[まい]る', '申[もう]し上[あ]げる', '伺[うかが]う'],
              correctAnswerIndex: 0,
              explanation:
                'Kelmoq (来る) feʼlining oliy hurmat shakli: お越しになる (Okoshi ni naru).',
            },
            {
              id: 'ja-n3-u3-l1-q10',
              question: '「言[い]う」feʼlining hurmat (sonkeigo) shakli qaysi?',
              options: ['おっしゃる', '申[もう]す', '申[もう]し上[あ]げる', '存[ぞん]じる'],
              correctAnswerIndex: 0,
              explanation: 'Boshqalarning gapirishi ehtirom bilan おっしゃる (Ossharu) deyiladi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u3-l2',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u3',
    unitTitle: 'Unit 3: Keigo & Business Japanese',
    language: 'ja',
    level: 'N3',
    lessonNumber: 12,
    title: 'Keigo 2: Humble Language (謙譲語 - Kenjougo)',
    description:
      "O'z harakatini kamtar tutib suhbatdoshni yuksaltirish tili (Kenjougo: 参る, 申す, いたす, 拝見する).",
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
          explanation:
            "O'z harakatingizni yoki o'z kompaniyangiz a'zolarining harakatini kamsuqum qilib ko'rsatish: 行く/来る -> 参[まい]る (Mairu), 言う -> 申[もう]す (Mousu), する -> いたす (Itasu), 食べる/飲む -> いただく (Itadaku), 見る -> 拝見[はいけん]する (Haiken suru), 知っている -> 存[ぞん]じて おる (Zonjite oru).",
          vocabulary: [
            {
              term: '申[もう]す',
              reading: 'mousu',
              meaning: 'Demoq, atalmoq (Kenjougo)',
              exampleSentence: '私[わたし]は 田中[たなか]と 申[もう]します。',
              exampleTranslation: 'Mening ismim Tanaka deyiladi.',
            },
            {
              term: '参[まい]る',
              reading: 'mairu',
              meaning: 'Bormoq, kelmoq (Kenjougo)',
              exampleSentence: '明日[あした]の 10時[じゅうじ]に 御社[おんしゃ]へ 参[まい]ります。',
              exampleTranslation: 'Ertaga soat 10 da kompaniyangizga boraman.',
            },
            {
              term: '拝見[はいけん]する',
              reading: 'haiken suru',
              meaning: 'Koʻrib chiqmoq, oʻqimoq (Kenjougo)',
              exampleSentence:
                '送[おく]って いただいた 企画書[きかくしょ]を 拝見[はいけん]しました。',
              exampleTranslation: 'Yuborgan loyiha taklifnomangizni koʻrib chiqdim.',
            },
            {
              term: '伺[うかが]う',
              reading: 'ukagau',
              meaning: 'Soʻramoq, eshitmoq, bormoq (Kenjougo)',
              exampleSentence:
                '少々[しょうしょう] お話[はなし]を 伺[うかが]っても よろしいでしょうか。',
              exampleTranslation: 'Biroz gaplashib, fikringizni eshitsam maylimi?',
            },
            {
              term: '致[いた]す',
              reading: 'itasu',
              meaning: 'Qilmoq, amalga oshirmoq (Kenjougo)',
              exampleSentence: '私[わたし]が その 仕事[しごと]を 担当[たんとう] いたします。',
              exampleTranslation: 'Ushbu ishni shaxsan oʻzim bajaraman.',
            },
            {
              term: 'お目[め]にかかる',
              reading: 'ome ni kakaru',
              meaning: 'Uchrashmoq, koʻrishmoq (Kenjougo)',
              exampleSentence: 'また お目[め]に かかれるのを 楽[たの]しみに して おります。',
              exampleTranslation: 'Yana uchrashishni intizorlik bilan kutib qolaman.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Keigo 2: Humble Language (謙譲語 - Kenjougo)',
              meaning:
                "O'z harakatini kamtar tutib suhbatdoshni yuksaltirish tili (Kenjougo: 参る, 申す, いたす, 拝見する).",
              usageNotes:
                "O'z harakatingizni yoki o'z kompaniyangiz a'zolarining harakatini kamsuqum qilib ko'rsatish: 行く/来る -> 参[まい]る (Mairu), 言う -> 申[もう]す (Mousu), する -> いたす (Itasu), 食べる/飲む -> いただく (Itadaku), 見る -> 拝見[はいけん]する (Haiken suru), 知っている -> 存[ぞん]じて おる (Zonjite oru).",
              examples: [
                {
                  sentence: 'アリと 申[もう]します。',
                  translation: 'Ismim Alidir.',
                },
                {
                  sentence: 'メールを 拝見[はいけん]しました。',
                  translation: "Xatingizni ko'rib chiqdim.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l2-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri Kenjougo shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u3-l2-e1',
              type: 'multiple-choice',
              prompt: '«Ertaga soat 10:00 da ofisingizga boraman (kamtarona)»:',
              options: [
                '明日[あした] 10時[じゅうじ]に そちらへ 伺[うかが]います / 参[まい]ります',
                'いらっしゃいます',
                '行[い]きます',
                '来[き]ます',
              ],
              correctAnswer: 0,
              explanation: 'Ukagaimasu / Mairimasu (Kenjougo).',
            },
            {
              id: 'ja-n3-u3-l2-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「メールを 拝見[はいけん]しました。」",
              options: ['食事[しょくじ]', '散歩[さんぽ]', '拝見[はいけん]します', '運転[うんてん]'],
              correctAnswer: 2,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"拝見[はいけん]します\" (Ko'rib chiqaman / O'qiyman (Kenjougo)).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l2-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u3-l2-q1',
              question: "Mijozga o'zingizni tanishtirayotganda qaysi iborani qo'llaysiz?",
              options: ['〜と 申[もう]します', '〜と おっしゃいます', '〜です', '〜と 言[い]う'],
              correctAnswerIndex: 0,
              explanation: '〜と 申します (Kenjougo).',
            },
            {
              id: 'ja-n3-u3-l2-q2',
              question: "«Hujjatni qabul qilib oldim / ko'rib chiqdim» kamtarona shakli:",
              options: [
                'ご覧[らん]に なりました',
                '見[み]ました',
                '見[み]てください',
                '拝見[はいけん]いたしました',
              ],
              correctAnswerIndex: 3,
              explanation: 'Haiken itashimashita.',
            },
            {
              id: 'ja-n3-u3-l2-q3',
              question:
                "Telefon orqali mijozga o'z boshlig'ingiz (Tanaka) haqida gapirganda qaysi biri to'g'ri?",
              options: [
                'Tanaka san emas, shunchaki «Tanaka wa tadaima gaishutsu shite orimasu» deyish',
                'Tanaka-sensei wa...',
                'Tanaka-san ga ikimashita',
                'Tanaka-sama wa irasshaimasu',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Uchi-soto qoidasi bo'yicha o'z boshlig'iga san/sama qo'shilmaydi va Kenjougo qo'llaniladi.",
            },
            {
              id: 'ja-n3-u3-l2-q4',
              question:
                '「ただいま お茶[ちゃ]を お持[も]ちします」dagi お〜します nimani bildiradi?',
              options: ['Sonkeigo', 'Kenjougo', 'Taqiq', 'Buyruq'],
              correctAnswerIndex: 1,
              explanation: 'お+Masu+suru = Kenjougo.',
            },
            {
              id: 'ja-n3-u3-l2-q5',
              question: '私[わたし]が 社長[しゃちょう]に 資料[しりょう]を お渡[わた]し （　）。',
              options: ['します', 'になります', 'くださいます', 'いらっしゃいます'],
              correctAnswerIndex: 0,
              explanation:
                'Kamtarlik (Kenjougo): お + Feʼl oʻzagi + する/いたします (Owatashi shimasu).',
            },
            {
              id: 'ja-n3-u3-l2-q6',
              question: '明日[あした] 10時[じゅうじ]に 御社[おんしゃ]へ （　）。',
              options: [
                '伺[うかが]います',
                'いらっしゃいます',
                'お越[こ]しになります',
                'なさいます',
              ],
              correctAnswerIndex: 0,
              explanation: 'Birovning huzuriga bormoq/tashrif buyurmoq kamtarlikda: 伺う (Ukagau).',
            },
            {
              id: 'ja-n3-u3-l2-q7',
              question: '私[わたし]は 田中[たなか]と （　）。よろしくお願[ねが]いいたします。',
              options: ['申[もう]します', 'おっしゃいます', 'いらっしゃいます', 'なさいます'],
              correctAnswerIndex: 0,
              explanation: 'Oʻz ismini aytganda kamtarlik bilan: 申します (Moushimasu).',
            },
            {
              id: 'ja-n3-u3-l2-q8',
              question: '先生[せんせい]から 推薦[すいせん]状[じょう]を （　）。',
              options: ['いただきました', 'くださいました', 'さしあげました', 'めしあがりました'],
              correctAnswerIndex: 0,
              explanation:
                'Hurmatli shaxsdan qabul qilib olmoq (Morau ning kenjougo shakli): いただく (Itadaku).',
            },
            {
              id: 'ja-n3-u3-l2-q9',
              question: 'メールを （　）ので、ご返信[へんしん]いたしました。',
              options: [
                '拝読[はいどく]しました',
                'お読[よ]みに なりました',
                'ご覧[らん]に なりました',
                '読[よ]まれました',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Birovning xatini ehtirom bilan oʻqib chiqdim (kamtarlik): 拝読する (Haidoku suru).',
            },
            {
              id: 'ja-n3-u3-l2-q10',
              question:
                '自分[じぶん]の 家族[かぞく]の ことについて 取引[とりひき]先[さき]に 話[はな]す 時[とき]、どちらを 使[つか]うか？',
              options: [
                '謙譲語[けんじょうご] (Kamtarlik shakllari)',
                '尊敬語[そんけいご] (Hurmat shakllari)',
                'タメ口[ぐち] (Doʻstona erkin soʻzlashuv)',
                '命令形[めいれいけい] (Buyruq shakli)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Tashqi hamkorlar bilan suhbatda oʻz oilasi va oʻz kompaniyasi vakillari haqida kenjougo (kamtarlik) qoʻllanadi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u3-l3',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u3',
    unitTitle: 'Unit 3: Keigo & Business Japanese',
    language: 'ja',
    level: 'N3',
    lessonNumber: 13,
    title: 'N3 Intermediate Kanji: Abstract Concepts & Economy (経済, 政治, 影響, 関係, 相談)',
    description: "Iqtisodiyot, jamiyat, ta'sir va munosabatlarni ifodalovchi N3 iyerogliflari.",
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
          explanation:
            "経 (kei - boshqaruv/o'tish), 済 (zai/su - yakunlash/iqtisod), 政 (sei - siyosat), 治 (ji/nao - boshqarish/tuzalish), 影 (ei/kage - soya), 響 (kyou/hibi - aks-sado/ta'sir), 関 (kan/seki - aloqa), 係 (kei/kakari - munosabat/xodim).",
          vocabulary: [
            {
              term: '経済[けいざい]',
              reading: 'keizai',
              meaning: 'Iqtisodiyot',
              exampleSentence:
                '世界[せかい]の 経済[けいざい]情勢[じょうせい]について 勉強[べんきょう]して います。',
              exampleTranslation: 'Dunyo iqtisodiy vaziyati boʻyicha taʼlim olyapman.',
            },
            {
              term: '景気[けいき]',
              reading: 'keiki',
              meaning: 'Bozor va biznes konʼyunkturasi',
              exampleSentence:
                '今年[ことし]に 入[はい]ってから 景気[けいき]が 回復[かいふく]し 始[はじ]めました。',
              exampleTranslation: 'Shu yil boshidan bozor holati tiklana boshladi.',
            },
            {
              term: '物価[ぶっか]',
              reading: 'bukka',
              meaning: 'Narx-navo, tovarlar bahosi',
              exampleSentence:
                '最近[さいきん]は 物価[ぶっか]の 上昇[じょうしょう]が 続[つづ]いて います。',
              exampleTranslation: 'Soʻnggi paytlarda narx-navo oʻsishi davom etmoqda.',
            },
            {
              term: '税金[ぜいきん]',
              reading: 'zeikin',
              meaning: 'Soliq',
              exampleSentence: '給料[きゅうりょう]から 税金[ぜいきん]が 引[ひ]かれます。',
              exampleTranslation: 'Oylik maoshdan soliq ushlab qolinadi.',
            },
            {
              term: '利益[りえき]',
              reading: 'rieki',
              meaning: 'Foyda, daromad',
              exampleSentence:
                '新製品[しんせいひん]が ヒットして 大[おお]きな 利益[りえき]が 出[で]ました。',
              exampleTranslation: 'Yangi mahsulot ommalashib, katta foyda keltirdi.',
            },
            {
              term: '投資[とうし]する',
              reading: 'toushi suru',
              meaning: 'Investitsiya kiritmoq, mablagʻ tikmoq',
              exampleSentence:
                '将来[しょうらい]の ために 新技術[しんぎじゅつ]に 投資[とうし]します。',
              exampleTranslation: 'Kelajak uchun yangi texnologiyalarga sarmoya kiritamiz.',
            },
          ],
          grammarRules: [
            {
              pattern:
                'N3 Intermediate Kanji: Abstract Concepts & Economy (経済, 政治, 影響, 関係, 相談)',
              meaning:
                "Iqtisodiyot, jamiyat, ta'sir va munosabatlarni ifodalovchi N3 iyerogliflari.",
              usageNotes:
                "経 (kei - boshqaruv/o'tish), 済 (zai/su - yakunlash/iqtisod), 政 (sei - siyosat), 治 (ji/nao - boshqarish/tuzalish), 影 (ei/kage - soya), 響 (kyou/hibi - aks-sado/ta'sir), 関 (kan/seki - aloqa), 係 (kei/kakari - munosabat/xodim).",
              examples: [
                {
                  sentence: '世界[せかい]の 経済[けいざい]。',
                  translation: 'Jahon iqtisodiyoti.',
                },
                {
                  sentence: '大[おお]きな 影響[えいきょう]を 与[あた]える。',
                  translation: "Katta ta'sir o'tkazmoq.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l3-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Iyeroglif birikmasini toping.',
          exercises: [
            {
              id: 'ja-n3-u3-l3-e1',
              type: 'multiple-choice',
              prompt: "「相談[そうだん] (Maslahatlashish)」so'zidagi 談 qaysi ma'noni bildiradi?",
              options: ['Iqtisod', 'Yozuv', 'Suhbat / Muhokama (Dan)', 'Pul'],
              correctAnswer: 2,
              explanation: '談 — Suhbat / Muzokara.',
            },
            {
              id: 'ja-n3-u3-l3-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「大[おお]きな 影響[えいきょう]を 与[あた]える。」",
              options: ['運転[うんてん]', '影響[えいきょう]', '散歩[さんぽ]', '食事[しょくじ]'],
              correctAnswer: 1,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"影響[えいきょう]\" (Ta'sir).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l3-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u3-l3-q1',
              question: '«Siyosat» kanjisi qaysi?',
              options: ['経済[けいざい]', '影響[えいきょう]', '政治[せいじ]', '関係[かんけい]'],
              correctAnswerIndex: 2,
              explanation: '政治 (Seiji).',
            },
            {
              id: 'ja-n3-u3-l3-q2',
              question: "「関係[かんけい]が ある」ning ma'nosi:",
              options: [
                'Aloqadorlik / Munosabat bor',
                "Iqtisodiyot o'sdi",
                "Ta'sir yo'q",
                'Siyosatchi',
              ],
              correctAnswerIndex: 0,
              explanation: 'Aloqador / Munosabati bor.',
            },
            {
              id: 'ja-n3-u3-l3-q3',
              question: "«Ta'sir ko'rsatmoq» iyeroglifi qaysi?",
              options: ['相談[そうだん]', '約束[やくそく]', '案内[あんない]', '影響[えいきょう]'],
              correctAnswerIndex: 3,
              explanation: '影響 (Eikyou).',
            },
            {
              id: 'ja-n3-u3-l3-q4',
              question: "「係員[かかりいん]」so'zining ma'nosi:",
              options: ['Talaba', 'Mijoz', "Mas'ul xodim / Navbatchi", 'Prezident'],
              correctAnswerIndex: 2,
              explanation: "Kakariin — Mas'ul xodim.",
            },
            {
              id: 'ja-n3-u3-l3-q5',
              question: '「経済」ning toʻgʻri oʻqilishi qaysi?',
              options: ['けいざい', 'けいさい', 'げいざい', 'きょうざい'],
              correctAnswerIndex: 0,
              explanation: '経済 = けいざい (Iqtisodiyot).',
            },
            {
              id: 'ja-n3-u3-l3-q6',
              question:
                '物価[ぶっか]の 上昇[じょうしょう]が 国民[こくみん]の 生活[せいかつ]に 大[おお]きな （　）を 与[あた]えた。',
              options: ['影響[えいきょう]', '関係[かんけい]', '政治[せいじ]', '相談[そうだん]'],
              correctAnswerIndex: 0,
              explanation: 'Taʼsir koʻrsatmoq: 影響を与える (Eikyou o ataeru).',
            },
            {
              id: 'ja-n3-u3-l3-q7',
              question: '「政府」ning toʻgʻri oʻqilishi va maʼnosi:',
              options: [
                'せいふ (Hukumat)',
                'せいほ (Sud)',
                'しょうふ (Vazirlik)',
                'じょうふ (Boshqaruv)',
              ],
              correctAnswerIndex: 0,
              explanation: '政府 = せいふ (Hukumat).',
            },
            {
              id: 'ja-n3-u3-l3-q8',
              question: '問題[もんだい]が 生[しょう]じたので、上司[じょうし]に （　）した。',
              options: ['相談[そうだん]', '判断[はんだん]', '影響[えいきょう]', '政治[せいじ]'],
              correctAnswerIndex: 0,
              explanation: 'Maslahatlashmoq: 相談する (Soudan suru).',
            },
            {
              id: 'ja-n3-u3-l3-q9',
              question: '「関係[かんけい]」soʻzidagi「関」kanjisining oʻqilishi:',
              options: ['かん', 'けん', 'せん', 'がん'],
              correctAnswerIndex: 0,
              explanation: '関 = かん (Kankei - Aloqa, munosabat).',
            },
            {
              id: 'ja-n3-u3-l3-q10',
              question:
                '両国[りょうこく]の 間[あいだ]で 新[あたら]しい 貿易[ぼうえき]（　）が 結[むす]ばれた。',
              options: ['条約[じょうやく]', '政治[せいじ]', '経済[けいざい]', '相談[そうだん]'],
              correctAnswerIndex: 0,
              explanation: 'Shartnoma/bitim tuzildi: 条約を結ぶ (Jouyaku o musubu).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u3-l4',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u3',
    unitTitle: 'Unit 3: Keigo & Business Japanese',
    language: 'ja',
    level: 'N3',
    lessonNumber: 14,
    title: 'N3 Intermediate Kanji: Nature, Weather & Disasters (地震, 台風, 気温, 変化, 被害)',
    description: "Zilzila, to'fon, harorat o'zgarishi va tabiiy ofatlar kanjilari.",
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
          explanation:
            "地 (chi/ji - yer), 震 (shin/furu - silkinish/titrash), 台 (tai - minbar/tayanch), 風 (fuu/kaze - shamol), 変 (hen/ka - o'zgarish), 化 (ka/bake - evrilish), 被 (hi/koumu - qamrab olish), 害 (gai - zarar).",
          vocabulary: [
            {
              term: '地震[じしん]',
              reading: 'jishin',
              meaning: 'Zilzila, yer silkinishi',
              exampleSentence:
                '昨夜[さくや] 関東[かんとう]地方[ちほう]で 大[おお]きな 地震[じしん]が ありました。',
              exampleTranslation: 'Kecha tunda Kanto viloyatida kuchli zilzila yuz berdi.',
            },
            {
              term: '台風[たいふう]',
              reading: 'taifuu',
              meaning: 'Tayfun, toʻfon',
              exampleSentence:
                '台風[たいふう]の 接近[せっきん]に 伴[ともな]い、電車[でんしゃ]が 運休[うんきゅう]しました。',
              exampleTranslation: 'Tayfun yaqinlashishi munosabati bilan poyezdlar toʻxtatildi.',
            },
            {
              term: '被害[ひがい]',
              reading: 'higai',
              meaning: 'Zarar, talofat',
              exampleSentence:
                '大雨[おおあめ]による 被害[ひがい]を 最小限[さいしょうげん]に 抑[おさ]えます。',
              exampleTranslation: 'Kuchli yomgʻirdan keladigan zararni minimallashtiramiz.',
            },
            {
              term: '警報[けいほう]',
              reading: 'keihou',
              meaning: 'Xavf signali, ogohlantirish',
              exampleSentence: '大雪[おおゆき]警報[けいほう]が 発令[はつれい]されました。',
              exampleTranslation: 'Kuchli qor yogʻishi haqida ogohlantirish berildi.',
            },
            {
              term: '避難[ひなん]する',
              reading: 'hinan suru',
              meaning: 'Xavfsiz joyga koʻchmoq, evakuatsiya',
              exampleSentence:
                '安全[あんぜん]な 学校[がっこう]の 体育館[たいいくかん]へ 避難[ひなん]しました。',
              exampleTranslation: 'Xavfsiz maktab sport zaliga evakuatsiya qilindilar.',
            },
            {
              term: '復旧[ふっきゅう]する',
              reading: 'fukkyuu suru',
              meaning: 'Qayta tiklanmoq (yoʻl, aloqa)',
              exampleSentence:
                '停電[ていでん]した 地域[ちいき]の 電気[でんき]が 復旧[ふっきゅう]しました。',
              exampleTranslation: 'Chiroq oʻchgan hududlarda elektr taʼminoti qayta tiklandi.',
            },
          ],
          grammarRules: [
            {
              pattern:
                'N3 Intermediate Kanji: Nature, Weather & Disasters (地震, 台風, 気温, 変化, 被害)',
              meaning: "Zilzila, to'fon, harorat o'zgarishi va tabiiy ofatlar kanjilari.",
              usageNotes:
                "地 (chi/ji - yer), 震 (shin/furu - silkinish/titrash), 台 (tai - minbar/tayanch), 風 (fuu/kaze - shamol), 変 (hen/ka - o'zgarish), 化 (ka/bake - evrilish), 被 (hi/koumu - qamrab olish), 害 (gai - zarar).",
              examples: [
                {
                  sentence: '大[おお]きな 地震[じしん]が 起[お]きた。',
                  translation: "Katta zilzila sodir bo'ldi.",
                },
                {
                  sentence: '台風[たいふう]が 近[ちか]づいている。',
                  translation: 'Tayfun yaqinlashmoqda.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l4-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Iyeroglifni tanlang.',
          exercises: [
            {
              id: 'ja-n3-u3-l4-e1',
              type: 'multiple-choice',
              prompt: '«Iqlim o\'zgarishi» birikmasidagi "o\'zgarish" kanjisi qaysi?',
              options: ['変化[へんか]', '地震[じしん]', '気温[きおん]', '台風[たいふう]'],
              correctAnswer: 0,
              explanation: '変化 (Henka).',
            },
            {
              id: 'ja-n3-u3-l4-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「台風[たいふう]が 近[ちか]づいている。」",
              options: ['台風[たいふう]', '運転[うんてん]', '食事[しょくじ]', '散歩[さんぽ]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"台風[たいふう]\" (Tayfun / To'fon).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l4-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u3-l4-q1',
              question: '«Zarar / Talafot» kanjisi qaysi?',
              options: ['被害[ひがい]', '経済[けいざい]', '案内[あんない]', '政治[せいじ]'],
              correctAnswerIndex: 0,
              explanation: '被害 (Higai).',
            },
            {
              id: 'ja-n3-u3-l4-q2',
              question: "「気温[きおん]が 下[さ]がる」ning ma'nosi:",
              options: [
                "Harorat ko'tarilmoqda",
                'Havo harorati tushmoqda',
                "Yomg'ir yog'di",
                "Zilzila bo'ldi",
              ],
              correctAnswerIndex: 1,
              explanation: 'Harorat pasaymoqda.',
            },
            {
              id: 'ja-n3-u3-l4-q3',
              question: "«Zilzila» so'zining to'g'ri kanjisi va o'qilishi:",
              options: ['自信[じしん]', '自身[じしん]', '地震[じしん]', '時針[じしん]'],
              correctAnswerIndex: 2,
              explanation: '地震 (Jishin).',
            },
            {
              id: 'ja-n3-u3-l4-q4',
              question: '「台風[たいふう]による 被害[ひがい]」nimani bildiradi?',
              options: [
                "Tayfun to'xtadi",
                "Shamol yo'q",
                'Yangi ob-havo',
                'Tayfun sababli yetkazilgan talafot',
              ],
              correctAnswerIndex: 3,
              explanation: 'Damage caused by typhoon.',
            },
            {
              id: 'ja-n3-u3-l4-q5',
              question: '「地震」ning toʻgʻri oʻqilishi qaysi?',
              options: ['じしん', 'ちしん', 'じし', 'ちじん'],
              correctAnswerIndex: 0,
              explanation: '地震 = じしん (Zilzila).',
            },
            {
              id: 'ja-n3-u3-l4-q6',
              question:
                '大雨[おおあめ]に より、各地[かくち]で 甚大[じんだい]な （　）が 出[で]た。',
              options: ['被害[ひがい]', '変化[へんか]', '気温[きおん]', '台風[たいふう]'],
              correctAnswerIndex: 0,
              explanation: 'Zarar, ziyon: 被害が出る (Higai ga deru).',
            },
            {
              id: 'ja-n3-u3-l4-q7',
              question: '「気温」kanjisining maʼnosi nima?',
              options: ['Havo harorati', 'Suv harorati', 'Shamol tezligi', 'Havo namligi'],
              correctAnswerIndex: 0,
              explanation: '気温 (Kion) = Havo harorati.',
            },
            {
              id: 'ja-n3-u3-l4-q8',
              question:
                '大型[おおがた]の （　）が 日本[にほん]列島[れっとう]に 近[ちか]づいて います。',
              options: ['台風[たいふう]', '被害[ひがい]', '変化[へんか]', '気温[きおん]'],
              correctAnswerIndex: 0,
              explanation: 'Tayfun, toʻfon yaqinlashmoqda: 台風 (Taifuu).',
            },
            {
              id: 'ja-n3-u3-l4-q9',
              question:
                '季節[きせつ]の （　）に 注意[ちゅうい]して 体調[たいちょう]を 管理[かんり]する。',
              options: ['変化[へんか]', '地震[じしん]', '被害[ひがい]', '津波[つなみ]'],
              correctAnswerIndex: 0,
              explanation: 'Fasl almashinuvi/oʻzgarishi: 変化 (Henka).',
            },
            {
              id: 'ja-n3-u3-l4-q10',
              question: '「洪水」ning toʻgʻri oʻqilishi qaysi?',
              options: ['こうずい', 'おおみず', 'こうすい', 'ごうずい'],
              correctAnswerIndex: 0,
              explanation: '洪水 = こうずい (Suv toshqini).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u3-l5',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u3',
    unitTitle: 'Unit 3: Keigo & Business Japanese',
    language: 'ja',
    level: 'N3',
    lessonNumber: 15,
    title: 'N3 Choukai: Quick Response (即時応答) Mastery',
    description:
      "JLPT N3 eshitish imtihonining eng tezkor bo'limi: qisqa iboraga bir zumda to'g'ri javob qaytarish.",
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
          explanation:
            "Audioda bitta jumla aytiladi (masalan:「この書類、明日までにチェックしておいてくれる？」) va darhol 3 ta qisqa javob varianti o'qiladi. Varaqada hech narsa yozilmagan bo'ladi!",
          keyPoints: [
            'Keigo, taklif, iltimos va norozilik iboralariga tezkor reaksiyani mashq qilish.',
          ],
          grammarRules: [
            {
              pattern: 'N3 Choukai: Quick Response (即時応答) Mastery',
              meaning:
                "JLPT N3 eshitish imtihonining eng tezkor bo'limi: qisqa iboraga bir zumda to'g'ri javob qaytarish.",
              usageNotes:
                "Audioda bitta jumla aytiladi (masalan:「この書類、明日までにチェックしておいてくれる？」) va darhol 3 ta qisqa javob varianti o'qiladi. Varaqada hech narsa yozilmagan bo'ladi!",
              examples: [
                {
                  sentence: '日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。',
                  translation: "Har kuni yapon tilini o'rganaman.",
                },
              ],
            },
          ],
          vocabulary: [
            {
              term: 'とっさに',
              reading: 'tossa ni',
              meaning: 'Shu lahzada, darhol',
              exampleSentence: '質問[しつもん]に とっさに 答[こた]える 練習[れんしゅう]を します。',
              exampleTranslation: 'Savollarga bir lahzada javob berishni mashq qilamiz.',
            },
            {
              term: '相づち[あいづち]',
              reading: 'aidzuchi',
              meaning: 'Suhbatdoshni maʼqullab turish reaksiyasi',
              exampleSentence:
                '適切[てきせつ]な 相づち[あいづち]を 打[う]つことで 会話[かいわ]が 弾[はず]みます。',
              exampleTranslation: 'Munosib tasdiq reaksiyalari orqali suhbat maroqli kechadi.',
            },
            {
              term: '遠慮[えんりょ]なく',
              reading: 'enryo naku',
              meaning: 'Tortinmasdan, bemalol',
              exampleSentence: 'わからない ことが あれば 遠慮[えんりょ]なく 聞[き]いて ください。',
              exampleTranslation: 'Tushunarsiz joyi boʻlsa, tortinmasdan soʻrang.',
            },
            {
              term: 'お構[かま]いなく',
              reading: 'okamai naku',
              meaning: 'Ovora boʻlmang, bezovtalanmang',
              exampleSentence: 'どうぞ お茶[ちゃ]など お構[かま]いなく。',
              exampleTranslation: 'Marhamat, choyga ovora boʻlib yurmang.',
            },
            {
              term: 'とんでもない',
              reading: 'tondemonai',
              meaning: 'Arzimaydi, hechqisi yoʻq',
              exampleSentence: '「お礼[れい]を 言[い]います」「いいえ、とんでもないです」。',
              exampleTranslation: '«Rahmat aytaman» — «Yoʻgʻ-e, arzimaydi».',
            },
            {
              term: '失礼[しつれい]いたします',
              reading: 'shitsurei itashimasu',
              meaning: 'Kechirasiz / Ruxsat bering',
              exampleSentence:
                'お先[さき]に 失礼[しつれい]いたします。お疲[つか]れ様[さま]でした。',
              exampleTranslation: 'Men sizdan avval ketishga ruxsat soʻrayman. Charchamang.',
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l5-s2',
        title: 'Tezkor Sinov Mashqi',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Eng tabiiy javobni tanlang.',
          exercises: [
            {
              id: 'ja-n3-u3-l5-e1',
              type: 'multiple-choice',
              prompt:
                'Suhbatdosh:「田中さん、ちょっと手伝っていただけませんか。」 Sizning javobingiz:',
              options: [
                'はい、手伝いました。',
                'どういたしまして。',
                'いいえ、手伝います。',
                'ええ、いいですよ。何ですか。',
              ],
              correctAnswer: 3,
              explanation: 'Ee, ii desu yo. Nan desu ka.',
            },
            {
              id: 'ja-n3-u3-l5-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「健康[けんこう]を 維持[いじ]するために 運動[うんどう]します。」",
              options: ['散歩[さんぽ]', '食事[しょくじ]', '運転[うんてん]', '維持[いじ]する'],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"維持[いじ]する\" (Saqlab turmoq (holatni)).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u3-l5-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u3-l5-q1',
              question: 'Boshliq:「この企画書、目を通しておいてくれた？」 Sizning javobingiz:',
              options: [
                'いいえ、見[み]てください。',
                'どういたしまして。',
                'はい、目[め]が 痛[いた]いです。',
                'はい、先ほど 拝見[はいけん]いたしました。',
              ],
              correctAnswerIndex: 3,
              explanation: 'Hai, sakihodo haiken itashimashita (Kenjougo).',
            },
            {
              id: 'ja-n3-u3-l5-q2',
              question: 'Hamkasb:「会議の準備、手伝おうか。」 Sizning javobingiz:',
              options: [
                '手伝[てつだ]っては いけません。',
                'さようなら。',
                '助[たす]かるよ、お願[ねが]いできる？',
                'はい、手伝[てつだ]いましょう。',
              ],
              correctAnswerIndex: 2,
              explanation: 'Tasukaru yo, onegai dekiru?',
            },
            {
              id: 'ja-n3-u3-l5-q3',
              question: "Xo'jayin:「悪いけど、コピー頼める？」 Sizning javobingiz:",
              options: [
                'ごちそうさま。',
                'かしこまりました。すぐ やります。',
                'ダメです。',
                'コピーが あります。',
              ],
              correctAnswerIndex: 1,
              explanation: 'Kashikomarimashita. Sugu yarimasu.',
            },
            {
              id: 'ja-n3-u3-l5-q4',
              question:
                "Sokuji Outou bo'limida bitta savolga javob berish uchun qancha soniya vaqt beriladi?",
              options: ['Faqat 3-5 soniya', '2 daqiqa', '10 daqiqa', 'Vaqt chegarasiz'],
              correctAnswerIndex: 0,
              explanation: '3-5 seconds instant response.',
            },
            {
              id: 'ja-n3-u3-l5-q5',
              question:
                '「この 書類[しょるい]、今日[きょう]中[じゅう]に 出[だ]さないと いけない？」に対する 最適[さいてき]な 応答[おうとう]は？',
              options: [
                'うん、今日[きょう]中[じゅう]に 出[だ]さなきゃ だめだよ。',
                'いいえ、昨日[きのう] 出[だ]したよ。',
                'じゃあ、出[だ]さなくても いいよ。',
                '明日[あした] 出[だ]しました。',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Bugun topshirish shartmi savoliga: ha, bugun topshirmasang boʻlmaydi (出さなきゃだめだよ).',
            },
            {
              id: 'ja-n3-u3-l5-q6',
              question:
                '「プロジェクトの 進捗[しんちょく]は いかがですか？」に対する 応答[おうとう]は？',
              options: [
                '順調[じゅんちょう]に 進[すす]んでおります。',
                'いいえ、行きません。',
                'どういたしまして。',
                'お疲[つか]れ様[さま]です。',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Loyiha qay darajada ketyapti soʻroviga: barchasi reja asosida ketmoqda (順調に進んでおります).',
            },
            {
              id: 'ja-n3-u3-l5-q7',
              question:
                '「ちょっと 手[て]を 貸[か]して もらえない？」に対する 適切[てきせつ]な 返事[へんじ]は？',
              options: [
                'いいよ、何[なに]を 手伝[てつだ]えば いい？',
                '手[て]は ありません。',
                'どうぞ お貸[か]しください。',
                '貸[か]したことが あります。',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Qoʻl berib yordamlashib yubora olmaysanmi: Mayli, nimada yordamlashay? (何を手伝えばいい？).',
            },
            {
              id: 'ja-n3-u3-l5-q8',
              question:
                '「コーヒーのおかわりは いかがですか？」に対する 丁寧[ていねい]な 断[ことわ]り方[かた]は？',
              options: [
                'あ、もう 十分[じゅうぶん] いただきましたので、結構[けっこう]です。',
                '絶対に 飲[の]みません。',
                '美味[おい]しくないです。',
                'おかわりは ありません。',
              ],
              correctAnswerIndex: 0,
              explanation: 'Xushmuomala rad etish: Rahmat, yetarlicha ichdim, boʻldi (結構です).',
            },
            {
              id: 'ja-n3-u3-l5-q9',
              question:
                '「鈴木[すずき]さん、急[いそ]ぎの 仕事[しごと]が 入[はい]っちゃったんだけど、手伝[てつだ]える？」に対する 返答[へんとう]：',
              options: [
                'すみません、今[いま] 手[て]が 離[はな]せなくて…',
                'ぜんぜん 忙[いそが]しくないです。',
                '手伝[てつだ]わせてくださいました。',
                '急[いそ]ぎではありません。',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Uzrli sabab bilan yordam berolmaslik: 今手が離せなくて (Hozir qoʻlim boʻshamayapti).',
            },
            {
              id: 'ja-n3-u3-l5-q10',
              question:
                '即時[そくじ]応答[おうとう]（Sokuji outou）問題[もんだい]を 解[と]く 際[さい]の 鉄則[てっそく]は？',
              options: [
                '相手[あいて]の 発話[はつわ]の 意図[いと]（依頼[いらい]・感謝[かんしゃ]・謝罪[しゃざい]・質問[しつもん]）を 瞬時[しゅんじ]に 見極[みきわ]めること',
                '全[すべ]ての 選択肢[せんたくし]の 漢字[かんじ]を 書[か]いてみること',
                '5分[ごふん]間[かん] 考[かんが]えてから 答[こた]えること',
                '長[なが]い 選択肢[せんたくし]だけを 選[えら]ぶこと',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sokuji outou: Suhbatdoshning maqsadi (iltimos, minnatdorchilik, uzr, savol)ni darhol anglab toʻgʻri reaksiyani tanlash kerak.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u4-l1',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u4',
    unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
    language: 'ja',
    level: 'N3',
    lessonNumber: 16,
    title: 'Contrast & Opposites: 〜に対して vs 〜反面 (In contrast to vs On the flip side)',
    description:
      'Taqqoslashdagi keskin farq (taishite) va bir narsaning ikki qarama-qarshi tomoni (hanmen).',
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
          explanation:
            "1. 〜に対[たい]して (Ikki narsani solishtirish): 兄[あに]が 社交的[しゃこうてき]なのに対[たい]して、弟[おとうと]は 内気[うちき]だ (Akam kirishimli bo'lgani holda, ukam tortinchoq). 2. 〜反面[はんめん] (Bitta narsaning ikkala ijobiy va salbiy tomoni): 一人[ひとり]暮[ぐ]らしは 自由[じゆう]な 反面[はんめん]、寂[さび]しさも ある (Yolg'iz yashash erkin bo'lgani bilan, yolg'izlik hissi ham bor).",
          vocabulary: [
            {
              term: '積極的[せっきょくてき]',
              reading: 'sekkyokuteki',
              meaning: 'Faol, tashabbuskor',
              exampleSentence:
                '彼[かれ]は 授業[じゅぎょう]で 積極的[せっきょくてき]に 発言[はつげん]します。',
              exampleTranslation: 'U darslarda faol tarzda oʻz fikrini bildiradi.',
            },
            {
              term: '消極的[しょうきょくてき]',
              reading: 'shoukyokuteki',
              meaning: 'Sust, passiv',
              exampleSentence:
                '兄[あに]は 外向的[がいこうてき]なのに 対[たい]して、弟[おとうと]は 消極的[しょうきょくてき]です。',
              exampleTranslation:
                'Akasi kirishimli boʻlganiga zid tarzda, ukasi tortinchoq va passiv.',
            },
            {
              term: '反面[はんめん]',
              reading: 'hanmen',
              meaning: 'Aksincha, boshqa tomondan',
              exampleSentence:
                '便利[べんり]な 反面[はんめん]、危険[きけん]な 面[めん]も あります。',
              exampleTranslation: 'Qulay boʻlishi bilan birga, xavfli tomonlari ham bor.',
            },
            {
              term: '長所[ちょうしょ]',
              reading: 'chousho',
              meaning: 'Afzallik, kuchli tomon',
              exampleSentence: '誰[だれ]にでも 長所[ちょうしょ]と 短所[たんしょ]が あります。',
              exampleTranslation: 'Har bir insonda kuchli va ojiz tomonlar mavjud.',
            },
            {
              term: '短所[たんしょ]',
              reading: 'tansho',
              meaning: 'Kamchilik, zaif tomon',
              exampleSentence:
                '自分[じぶん]の 短所[たんしょ]を 理解[りかい]して 改善[かいぜん]します。',
              exampleTranslation: 'Oʻz kamchiligimni tushunib, uni toʻgʻrilayman.',
            },
            {
              term: '比較[ひかく]する',
              reading: 'hikaku suru',
              meaning: 'Solishtirmoq, qiyoslamoq',
              exampleSentence:
                '二[ふた]つの 案[あん]を 比較[ひかく]して 良[よ]い 方[ほう]を 選[えら]びます。',
              exampleTranslation: 'Ikki loyihani solishtirib, yaxshirogʻini tanlaymiz.',
            },
          ],
          grammarRules: [
            {
              pattern:
                'Contrast & Opposites: 〜に対して vs 〜反面 (In contrast to vs On the flip side)',
              meaning:
                'Taqqoslashdagi keskin farq (taishite) va bir narsaning ikki qarama-qarshi tomoni (hanmen).',
              usageNotes:
                "1. 〜に対[たい]して (Ikki narsani solishtirish): 兄[あに]が 社交的[しゃこうてき]なのに対[たい]して、弟[おとうと]は 内気[うちき]だ (Akam kirishimli bo'lgani holda, ukam tortinchoq). 2. 〜反面[はんめん] (Bitta narsaning ikkala ijobiy va salbiy tomoni): 一人[ひとり]暮[ぐ]らしは 自由[じゆう]な 反面[はんめん]、寂[さび]しさも ある (Yolg'iz yashash erkin bo'lgani bilan, yolg'izlik hissi ham bor).",
              examples: [
                {
                  sentence: '社交的[しゃこうてき]な 人[ひと]。',
                  translation: 'Kirishimli inson.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l1-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri bog'lovchini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u4-l1-e1',
              type: 'multiple-choice',
              prompt: "«Ushbu dori juda samarali bo'lgani bilan, nojo'ya ta'sirlari ham kuchli»:",
              options: [
                '効果[こうか]が 高[たか]い から',
                '効果[こうか]です',
                'この薬[くすり]は 効果[こうか]が 高[たか]い 反面[はんめん]、副作用[ふくさよう]も 強[つよ]い',
                '効果[こうか]が 高[たか]い 対[たい]して',
              ],
              correctAnswer: 2,
              explanation: 'Takai hanmen (bitta narsaning ikki tomoni).',
            },
            {
              id: 'ja-n3-u4-l1-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「環境[かんきょう]への 意識[いしき]が 高[たか]まっています。」",
              options: ['意識[いしき]', '運転[うんてん]', '食事[しょくじ]', '散歩[さんぽ]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"意識[いしき]\" (Ong, xabardorlik).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l1-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u4-l1-q1',
              question:
                'Bitta hodisaning ham yaxshi, ham yomon tomonini ochib berishda qaysi biri ishlatiladi?',
              options: ['〜から', '〜ため', '〜反面[はんめん]', '〜に対[たい]して'],
              correctAnswerIndex: 2,
              explanation: '〜反面 (On the other hand / Flip side).',
            },
            {
              id: 'ja-n3-u4-l1-q2',
              question: "«Katta shaharlar qulay bo'lgani bilan, yashash narxi qimmat»:",
              options: [
                '都会[とかい]は 便利[べんり]な 対[たい]して',
                '都会[とかい]です',
                '都会[とかい]だから',
                '都会[とかい]は 便利[べんり]な 反面[はんめん]、生活[せいかつ]費[ひ]が 高[たか]い',
              ],
              correctAnswerIndex: 3,
              explanation: 'Benri na hanmen.',
            },
            {
              id: 'ja-n3-u4-l1-q3',
              question: "«Erkaklar soni ko'payganiga nisbatan ayollar soni kamaydi»:",
              options: [
                '男性[だんせい]が 増[ふ]えたのに 対[たい]して、女性[じょせい]は 減[へ]った',
                '増[ふ]えた から',
                '増[ふ]えた 反面[はんめん]',
                '増[ふ]えた',
              ],
              correctAnswerIndex: 0,
              explanation: 'Fueta no ni taishite (ikkala toifani solishtirish).',
            },
            {
              id: 'ja-n3-u4-l1-q4',
              question: "「内気[うちき]な」so'zining ma'nosi:",
              options: ['Kirishimli', 'Xushchaqchaq', 'Tortinchoq / Kamgap', 'Jizzaki'],
              correctAnswerIndex: 2,
              explanation: 'Uchiki na — Tortinchoq.',
            },
            {
              id: 'ja-n3-u4-l1-q5',
              question:
                '兄[あに]が 外向[がいこう]的[てき]な （　）、弟[おとうと]は 内向[ないこう]的[てき]で 静[しず]かだ。',
              options: ['のに対[たい]して', '反面[はんめん]', 'せいで', 'おかげで'],
              correctAnswerIndex: 0,
              explanation:
                'Ikki xil shaxs yoki obyektni qiyosiy taqqoslash: 〜に対して (Aksincha, nisbatan).',
            },
            {
              id: 'ja-n3-u4-l1-q6',
              question:
                'この マンションは 駅[えき]に 近[ちか]くて 便利[べんり]な （　）、家賃[やちん]が 高[たか]い。',
              options: ['反面[はんめん]', 'に対して', 'によって', 'ばかりに'],
              correctAnswerIndex: 0,
              explanation:
                'Ayni bir narsaning ikki xil (ijobiy va salbiy) jihatini ifodalash: 〜反面 (Boshqa tomondan qaraganda).',
            },
            {
              id: 'ja-n3-u4-l1-q7',
              question:
                '都市[とし]部[ぶ]で 人口[じんこう]が 増[ふ]えている （　）、地方[ちほう]では 過疎[かそ]化[か]が 進[すす]んでいる。',
              options: ['のに対[たい]して', '反面', 'せいで', 'おかげで'],
              correctAnswerIndex: 0,
              explanation: 'Ikki hududiy vaziyatni qarama-qarshi qoʻyish: 〜のに対して.',
            },
            {
              id: 'ja-n3-u4-l1-q8',
              question:
                '一人[ひとり]暮[ぐ]らしは 自由[じゆう]な （　）、寂[さび]しさを 感[かん]じる ことも ある。',
              options: ['反面[はんめん]', 'に対して', 'ばかりか', 'によって'],
              correctAnswerIndex: 0,
              explanation:
                'Yakka yashash erkin boʻlishining teskari tomoni — yolgʻizlik: 自由な反面.',
            },
            {
              id: 'ja-n3-u4-l1-q9',
              question:
                '女性[じょせい]の 賛成[さんせい]が 多[おお]かったの （　）、男性[だんせい]は 反対[はんたい]が 多[おお]かった。',
              options: ['に対[たい]して', '反面', 'せいで', 'ために'],
              correctAnswerIndex: 0,
              explanation: 'Ayollar maʼqullaganiga qaramasdan/nisbatan: 〜のに対して.',
            },
            {
              id: 'ja-n3-u4-l1-q10',
              question:
                '「〜に対して」va「〜反面」ning asosiy farqi qaysi javobda toʻgʻri koʻrsatilgan?',
              options: [
                '〜に対して ikki xil narsani taqqoslaydi, 〜反面 esa ayni bitta narsaning ikki qarama-qarshi tomonini bildiradi',
                '〜反面 faqat insonlarga, 〜に対して esa narsalarga ishlatiladi',
                'Ikkalasi ham faqat salbiy sabab bildiradi',
                'Hech qanday farq mavjud emas',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜に対して 2 ta alohida subyektni qiyoslaydi, 〜反面 esa bitta subyektning ikki qarama-qarshi yuzini (tangadek) koʻrsatadi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u4-l2',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u4',
    unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
    language: 'ja',
    level: 'N3',
    lessonNumber: 17,
    title: 'Cause & Spontaneous Emotion: 〜によって (Means & Cause) & 〜せいで',
    description:
      'Sabab va vosita (ni yotte - orqali/sababli) hamda ayblovchi salbiy sabab (sei de - dastidan).',
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
          explanation:
            '1. 〜によって: Vosita ("orqali") yoki neytral sabab ("tufayli"): インターネットによって、世界[せかい]と つながる (Internet orqali dunyo bilan bog\'lanamiz); 地震[じしん]によって 建物[たてもの]が 壊[こわ]れた (Zilzila tufayli). 2. 〜せいで: Faqat salbiy oqibat va birovni/biror narsani ayblash ("... dastidan / kasofatiga"): 台風[たいふう]の せいで、旅行[りょこう]が 中止[ちゅうし]に なった (To\'fon dastidan sayohat bekor bo\'ldi).',
          vocabulary: [
            {
              term: '原因[げんいん]',
              reading: "gen'in",
              meaning: 'Sabab, omil',
              exampleSentence: '事故[じこ]の 原因[げんいん]は スピードの 出[だ]しすぎでした。',
              exampleTranslation: 'Halokatning sababi meʼyordan ortiq tezlik boʻldi.',
            },
            {
              term: '影響[えいきょう]',
              reading: 'eikyou',
              meaning: 'Taʼsir, asorat',
              exampleSentence:
                'インターネットの 普及[ふきゅう]に よって 生活[せいかつ]が 変[か]わりました。',
              exampleTranslation: 'Internet ommalashuvi tufayli turmush tarzi oʻzgardi.',
            },
            {
              term: '渋滞[じゅうたい]',
              reading: 'juutai',
              meaning: 'Yoʻldagi tirbandlik, probka',
              exampleSentence:
                '事故[じこ]の せいで 道路[どうろ]が ひどく 渋滞[じゅうたい]して います。',
              exampleTranslation: 'Avariya sababli yoʻlda qattiq tirbandlik vujudga keldi.',
            },
            {
              term: '中止[ちゅうし]する',
              reading: 'chuushi suru',
              meaning: 'Bekor qilmoq, toʻxtatmoq',
              exampleSentence:
                '大雨[おおあめ]に よって 試合[しあい]が 中止[ちゅうし]に なりました。',
              exampleTranslation: 'Kuchli yomgʻir sababli oʻyin bekor qilindi.',
            },
            {
              term: 'おかげで',
              reading: 'okage de',
              meaning: 'Sharofati bilan, yordamida',
              exampleSentence:
                '先生[せんせい]の 指導[しどう]の おかげで 試験[しけん]に 合格[ごうかく]できました。',
              exampleTranslation: 'Ustozning yoʻl-yoʻriqlari tufayli imtihondan oʻtdim.',
            },
            {
              term: 'せいで',
              reading: 'sei de',
              meaning: 'Dastidan, salbiy oqibati bilan',
              exampleSentence:
                '寝坊[ねぼう]した せいで 飛行機[ひこうき]に 乗[の]り遅[おく]れました。',
              exampleTranslation: 'Uxlab qolganim dastidan samolyotga kechikdim.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Cause & Spontaneous Emotion: 〜によって (Means & Cause) & 〜せいで',
              meaning:
                'Sabab va vosita (ni yotte - orqali/sababli) hamda ayblovchi salbiy sabab (sei de - dastidan).',
              usageNotes:
                '1. 〜によって: Vosita ("orqali") yoki neytral sabab ("tufayli"): インターネットによって、世界[せかい]と つながる (Internet orqali dunyo bilan bog\'lanamiz); 地震[じしん]によって 建物[たてもの]が 壊[こわ]れた (Zilzila tufayli). 2. 〜せいで: Faqat salbiy oqibat va birovni/biror narsani ayblash ("... dastidan / kasofatiga"): 台風[たいふう]の せいで、旅行[りょこう]が 中止[ちゅうし]に なった (To\'fon dastidan sayohat bekor bo\'ldi).',
              examples: [
                {
                  sentence: '試合[しあい]が 中止[ちゅうし]に なった。',
                  translation: "O'yin bekor bo'ldi.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l2-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri sabab ifodasini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u4-l2-e1',
              type: 'multiple-choice',
              prompt: '«Uning xatosi dastidan barcha jazolandi (salbiy ayblov)»:',
              options: [
                '彼[かれ]の おかげで',
                '彼[かれ]の ミスの せいで、みんなが 怒[おこ]られた',
                '彼[かれ]です',
                '彼[かれ]に よって',
              ],
              correctAnswer: 1,
              explanation: 'Misu no sei de (dastidan).',
            },
            {
              id: 'ja-n3-u4-l2-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「困難[こんなん]を 克服[こくふく]して 成功[せいこう]しました。」",
              options: ['散歩[さんぽ]', '食事[しょくじ]', '運転[うんてん]', '克服[こくふく]する'],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"克服[こくふく]する\" (Yengib oʻtmoq, bartaraf etmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l2-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u4-l2-q1',
              question: 'Ijobiy natija va minnatdorchilik bildirishda qaysi biri ishlatiladi?',
              options: ['〜せいで', '〜おかげで', '〜わりに', '〜くせに'],
              correctAnswerIndex: 1,
              explanation: '〜おかげで (Thanks to / Sharofati bilan).',
            },
            {
              id: 'ja-n3-u4-l2-q2',
              question: "«Ustozimning yordami sharofati bilan imtihondan o'tdim»:",
              options: [
                '先生[せんせい]の おかげで、試験[しけん]に 合格[ごうかく]しました',
                '先生[せんせい]に よって',
                '先生[せんせい]です',
                '先生[せんせい]の せいで',
              ],
              correctAnswerIndex: 0,
              explanation: 'Sensei no okage de.',
            },
            {
              id: 'ja-n3-u4-l2-q3',
              question:
                '「人[ひと]によって 考[かんが]え方[かた]が 違[ちが]う」dagi 〜によって nimani bildiradi?',
              options: [
                'Salbiy ayblov',
                'Minnatdorchilik',
                'Taqiq',
                'Turli-tumanlik (... ga qarab har xil)',
              ],
              correctAnswerIndex: 3,
              explanation: 'Depends on the person.',
            },
            {
              id: 'ja-n3-u4-l2-q4',
              question: "«Uyqusizlik dastidan boshim og'riyapti»:",
              options: [
                '寝不足[ねぶそく]の せいで、頭[あたま]が 痛[いた]い',
                '寝不足[ねぶそく]の おかげで',
                '寝不足[ねぶそく]なら',
                '寝不足[ねぶそく]です',
              ],
              correctAnswerIndex: 0,
              explanation: 'Nebusoku no sei de.',
            },
            {
              id: 'ja-n3-u4-l2-q5',
              question: '台風[たいふう]に （　）、電車[でんしゃ]が 止[と]まって しまいました。',
              options: ['よって', 'ついて', '対して', '関して'],
              correctAnswerIndex: 0,
              explanation: 'Sabab/omil: 〜によって (Tayfun tufayli/sababli).',
            },
            {
              id: 'ja-n3-u4-l2-q6',
              question:
                '彼[かれ]の 遅刻[ちこく]の （　）、チーム全体[ぜんたい]が 迷惑[めいわく]を 被[こうむ]った。',
              options: ['せいで', 'おかげで', 'ために', 'わりには'],
              correctAnswerIndex: 0,
              explanation:
                'Salbiy oqibatga sabab boʻlgan shaxs yoki omilni ayblash: 〜せいで (Uning kechikishi dastidan).',
            },
            {
              id: 'ja-n3-u4-l2-q7',
              question:
                '先生[せんせい]の 分[わ]かりやすい 指導[しどう]の （　）、合格[ごうかく]できました。',
              options: ['おかげで', 'せいで', 'くせに', 'ばかりで'],
              correctAnswerIndex: 0,
              explanation:
                'Ijobiy natija va minnatdorchilik sababi: 〜おかげで (Ustozning tushuntirishi sharofati bilan).',
            },
            {
              id: 'ja-n3-u4-l2-q8',
              question:
                'インターネットの 普及[ふきゅう]に （　）、世界中[せかいじゅう]の 情報[じょうほう]が 瞬時[しゅんじ]に 得[え]られる。',
              options: ['よって', '対して', '反面', 'くせに'],
              correctAnswerIndex: 0,
              explanation: 'Vosita/usul (Means): 〜によって (Internet ommalashuvi vositasida).',
            },
            {
              id: 'ja-n3-u4-l2-q9',
              question: '人[ひと]に （　）、考[かんが]え方[かた]は さまざまだ。',
              options: ['よって', 'せいで', 'おかげで', '反面'],
              correctAnswerIndex: 0,
              explanation:
                'Farqlanish, xilma-xillik: 人によって (Odamiga qarab/har kimda har xil).',
            },
            {
              id: 'ja-n3-u4-l2-q10',
              question:
                '寝坊[ねぼう]した （　）、大事[だいじ]な 面接[めんせつ]に 遅[おく]れてしまった。',
              options: ['せいで', 'おかげで', 'わりに', '反面'],
              correctAnswerIndex: 0,
              explanation:
                'Salbiy hodisaga sababchi boʻlish: 寝坊したせいで (Uxlab qolganim kasofatiga).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u4-l3',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u4',
    unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
    language: 'ja',
    level: 'N3',
    lessonNumber: 18,
    title: 'Limitation & Scope: 〜ばかり vs 〜だけ vs 〜のみ',
    description:
      "Faqatgina (dake - aniq chegara), faqat shu ishni qilaverish (bakari - salbiy ko'p takrorlanish).",
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
          explanation:
            "1. 〜ばかり: Shunchaki \"faqat\" emas, balki bir xil ishni keragidan ortiq takrorlayverish (ko'pincha tanqidiy ohang): ゲームばかり している (Faqat o'yin o'ynayveradi-a!); 肉[にく]ばかり 食[た]べないで、野菜[やさい]も 食[た]べなさい (Faqat go'sht yeyvermasdan, sabzavot ham yeng). 2. 〜だけ: Neytral obyektiv chegara: 100円[ひゃくえん]だけ あります (Faqat 100 iyena bor).",
          vocabulary: [
            {
              term: '文句[もんく]',
              reading: 'monku',
              meaning: 'Eʼtiroz, norozilik gapi',
              exampleSentence:
                '彼[かれ]は 仕事[しごと]も せずに 文句[もんく]ばかり 言[い]って います。',
              exampleTranslation: 'U ish ham qilmasdan faqat noliyveradi.',
            },
            {
              term: '失敗[しっぱい]する',
              reading: 'shippai suru',
              meaning: 'Muvaffaqiyatsizlikka uchramoq',
              exampleSentence: '一度[いちど]の 失敗[しっぱい]だけで あきらめては いけません。',
              exampleTranslation: 'Birgina muvaffaqiyatsizlik tufayli taslim boʻlmaslik kerak.',
            },
            {
              term: '限定[げんてい]する',
              reading: 'gentei suru',
              meaning: 'Cheklamoq, eksklyuziv qilmoq',
              exampleSentence: 'この セールは 本日[ほんじつ]限[げん]りの 開催[かいさい]です。',
              exampleTranslation: 'Ushbu chegirma faqat bugungi kun uchungina amal qiladi.',
            },
            {
              term: '対象[たいしょう]',
              reading: 'taishou',
              meaning: 'Nishon, maqsadli qatlam',
              exampleSentence:
                'この 講座[こうざ]は 初心者[しょしんしゃ]のみを 対象[たいしょう]と して います。',
              exampleTranslation: 'Ushbu darslik faqat boshlovchilarga moʻljallangan.',
            },
            {
              term: '範囲[はんい]',
              reading: "han'i",
              meaning: 'Doira, koʻlam, qamrov',
              exampleSentence:
                '試験[しけん]の 出題[しゅつだい]範囲[はんい]を しっかり 確認[かくにん]しましょう。',
              exampleTranslation: 'Imtihon savollari doirasini puxta tekshirib oling.',
            },
            {
              term: '専念[せんねん]する',
              reading: 'sennen suru',
              meaning: 'Faqat bir ishga butunlay berilmoq',
              exampleSentence:
                '受験[じゅけん]勉強[べんきょう]だけに 専念[せんねん]する ことに しました。',
              exampleTranslation:
                'Faqatgina imtihonga tayyorgarlikka diqqatimni qaratishga qaror qildim.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Limitation & Scope: 〜ばかり vs 〜だけ vs 〜のみ',
              meaning:
                "Faqatgina (dake - aniq chegara), faqat shu ishni qilaverish (bakari - salbiy ko'p takrorlanish).",
              usageNotes:
                "1. 〜ばかり: Shunchaki \"faqat\" emas, balki bir xil ishni keragidan ortiq takrorlayverish (ko'pincha tanqidiy ohang): ゲームばかり している (Faqat o'yin o'ynayveradi-a!); 肉[にく]ばかり 食[た]べないで、野菜[やさい]も 食[た]べなさい (Faqat go'sht yeyvermasdan, sabzavot ham yeng). 2. 〜だけ: Neytral obyektiv chegara: 100円[ひゃくえん]だけ あります (Faqat 100 iyena bor).",
              examples: [
                {
                  sentence: '遊[あそ]んでばかり いないで、勉強[べんきょう]しなさい。',
                  translation: "Faqat o'ynayvermasdan, dars qil.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l3-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri chegaralash shaklini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u4-l3-e1',
              type: 'multiple-choice',
              prompt: "«Ukam faqat televizor ko'raveradi (tanqidiy)»:",
              options: [
                '弟[おとうと]は テレビばかり 見[み]ている',
                'テレビが あります',
                'テレビだけ 見[み]る',
                'テレビです',
              ],
              correctAnswer: 0,
              explanation: 'Terebi bakari mite iru.',
            },
            {
              id: 'ja-n3-u4-l3-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「教育[きょういく]は 人生[じんせい]に 深[ふか]い 影響[えいきょう]を 与[あた]えます。」",
              options: [
                '影響[えいきょう]を与える',
                '食事[しょくじ]',
                '散歩[さんぽ]',
                '運転[うんてん]',
              ],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"影響[えいきょう]を与える\" (Taʼsir koʻrsatmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l3-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u4-l3-q1',
              question: "«Fe'lning Ta-shakli + ばかり (Ta bakari)» nimani bildiradi?",
              options: [
                "Hozirgina biror ishni bajarib bo'lganlikni",
                'Hech qachon qilmaslikni',
                "Faqat o'yin o'ynashni",
                'Kelasi zamonni',
              ],
              correctAnswerIndex: 0,
              explanation: 'Ta bakari = Just finished doing.',
            },
            {
              id: 'ja-n3-u4-l3-q2',
              question: "「日本[にほん]に 来[き]た ばかりです」ning ma'nosi:",
              options: [
                'Yaponiyaga bormoqchiman',
                "Yaponiyaga ko'p bordim",
                'Yaponiyaga hozirgina (yaqindagina) keldim',
                'Yaponiyada yashamayman',
              ],
              correctAnswerIndex: 2,
              explanation: 'Just arrived in Japan.',
            },
            {
              id: 'ja-n3-u4-l3-q3',
              question: '«Faqat bitta savolga javob bera olmadim (neytral fakt)»:',
              options: [
                '1問[いちもん]だけ 答[こた]えられなかった',
                '1問[いちもん]です',
                '1問[いちもん]くせに',
                '1問[いちもん]ばかり',
              ],
              correctAnswerIndex: 0,
              explanation: '1-mon dake (neytral chegara).',
            },
            {
              id: 'ja-n3-u4-l3-q4',
              question: "Rasmiy yozma tilda «dake» o'rniga qaysi so'z ishlatiladi?",
              options: ['〜ほど', '〜くらい', '〜ばかり', '〜のみ'],
              correctAnswerIndex: 3,
              explanation: '〜のみ (Formal written "only").',
            },
            {
              id: 'ja-n3-u4-l3-q5',
              question: '弟[おとうと]は 勉強[べんきょう]しないで、ゲーム（　） している。',
              options: ['ばかり', 'だけ', 'のみ', 'ほど'],
              correctAnswerIndex: 0,
              explanation:
                'Faqat bir xil nojoʻya ishni takrorlayverish: 〜ばかりしている (Faqat oʻyin oʻynagani-oʻynagan).',
            },
            {
              id: 'ja-n3-u4-l3-q6',
              question:
                '本日[ほんじつ]は 関係[かんけい]者[しゃ]（　） ご入場[にゅうじょう]いただけます。',
              options: ['のみ', 'ばかり', 'だけしか', 'ほど'],
              correctAnswerIndex: 0,
              explanation:
                'Rasmiy yozma eʼlonlarda qatʼiy cheklov: 〜のみ (Faqatgina mutasaddilar uchun).',
            },
            {
              id: 'ja-n3-u4-l3-q7',
              question: '財布[さいふ]の 中[なか]に 100円[えん]（　） 残[のこ]っていない。',
              options: ['しか', 'だけ', 'ばかり', 'のみ'],
              correctAnswerIndex: 0,
              explanation:
                'Inkor bilan birga keladigan cheklov: 〜しか…ない (100 yendan boshqa qolmadi).',
            },
            {
              id: 'ja-n3-u4-l3-q8',
              question:
                '彼[かれ]は 肉[にく]（　） 食[た]べて、野菜[やさい]を まったく 食[た]べない。',
              options: ['ばかり', 'のみ', 'ほど', 'くらい'],
              correctAnswerIndex: 0,
              explanation:
                'Haddan ziyod bir narsaga ruju qoʻyish: 肉ばかり食べて (Faqat goʻsht yeydi).',
            },
            {
              id: 'ja-n3-u4-l3-q9',
              question: 'ご飯[はん]を 食[た]べた（　）なのに、もう お腹[なか]が すいた。',
              options: ['ばかり', 'だけ', 'のみ', 'ところ'],
              correctAnswerIndex: 0,
              explanation:
                'Yaqindagina bajarilgan harakat hissi: V-ta + ばかり (Hozirgina ovqatlangan boʻlsam ham).',
            },
            {
              id: 'ja-n3-u4-l3-q10',
              question: '「〜ばかり」va「〜だけ」ning asosiy farqi nima?',
              options: [
                '〜ばかり koʻpincha haddan oshiq takrorlanish va tanqid ohangiga ega boʻladi, 〜だけ esa xolis miqdoriy chegarani bildiradi',
                '〜だけ faqat oziq-ovqat bilan ishlatiladi',
                '〜ばかり faqat bir marta qilinadigan ishlar bilan keladi',
                'Hech qanday farqi yoʻq',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜ばかり ortiqcha meʼyordan oshish va koʻpincha norozilik ohangini bildiradi, 〜だけ esa aniq chegaralash.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u4-l4',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u4',
    unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
    language: 'ja',
    level: 'N3',
    lessonNumber: 19,
    title: 'JLPT N3 Dokkai: Mid-Length Reading & Logic Extraction',
    description: "O'rta hajmdagi tahliliy matnlarni o'qib muallifning asosiy xulosasini topish.",
    estimatedDurationMinutes: 16,
    icon: '📖',
    steps: [
      {
        id: 'ja-n3-u4-l4-s1',
        title: "O'rta Hajmli Dokkai",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'Mid-Length Text Analysis: Communication in Digital Age',
          explanation:
            'SNSの 普及[ふきゅう]に より、私[わたし]たちは いつでも 誰[だれ]とでも 連絡[れんらく]が 取[と]れるように なった。 しかし、短[みじか]い メッセージや スタンプだけの やり取[と]りが 増[ふ]えたことで、相手[あいて]の 表情[ひょうじょう]や 声[こえ]の トーンを 感[かん]じ取[と]る 機会[きかい]が 減少[げんしょう]して いる。 筆者[ひっしゃ]は、便利[べんり]な ツールを 使[つか]いながらも、時[とき]には 直接[ちょくせつ] 会[あ]って 言葉[ことば]を 交[か]わすことの 大切[たいせつ]さを 忘[わす]れては ならないと 主張[しゅちょう]する。',
          keyPoints: [
            "Muallifning asosiy g'oyasi: Matn oxiridagi「〜忘れてはならないと主張する」(Yuzma-yuz muloqot qadrini unutmaslik kerak).",
          ],
          vocabulary: [
            {
              term: '筆者[ひっしゃ]',
              reading: 'hissha',
              meaning: 'Muallif, yozuvchi',
              exampleSentence:
                '筆者[ひっしゃ]の 主張[しゅちょう]を 50字[じ]以内[いない]で まとめて ください。',
              exampleTranslation: 'Muallifning asosiy fikrini 50 harf ichida xulosalang.',
            },
            {
              term: '主張[しゅちょう]する',
              reading: 'shuchou suru',
              meaning: 'Taʼkidlamoq, fikrni ilgari surmoq',
              exampleSentence:
                '自分[じぶん]の 意見[いけん]を 論理的[ろんりてき]に 主張[しゅちょう]します。',
              exampleTranslation: 'Oʻz fikrini mantiqiy asoslab ilgari suradi.',
            },
            {
              term: '結論[けつろん]',
              reading: 'ketsuron',
              meaning: 'Xulosa, yakuniy fikr',
              exampleSentence:
                '文章[ぶんしょう]の 結論[けつろん]は 最終[さいしゅう]段落[だんらく]に 書[か]かれて います。',
              exampleTranslation: 'Matnning xulosasi soʻnggi xatboshida yozilgan.',
            },
            {
              term: '要約[ようやく]する',
              reading: 'youyaku suru',
              meaning: 'Qisqacha mazmunini tuzmoq',
              exampleSentence:
                '長[なが]い 記事[きじ]を 要約[ようやく]して 説明[せつめい]しました。',
              exampleTranslation: 'Uzun maqolaning qisqacha mazmunini tushuntirib berdim.',
            },
            {
              term: '根拠[こんきょ]',
              reading: 'konkyo',
              meaning: 'Asos, dalil, isbot',
              exampleSentence:
                '主張[しゅちょう]を 支[ささ]える 明確[めいかく]な 根拠[こんきょ]が 必要[ひつよう]です。',
              exampleTranslation: 'Fikrni mustahkamlovchi aniq asoslar boʻlishi zarur.',
            },
            {
              term: '展開[てんかい]',
              reading: 'tenkai',
              meaning: 'Rivojlanish, voqealar bayoni',
              exampleSentence:
                '段落[だんらく]ごとの 論理[ろんり]展開[てんかい]を 意識[いしき]して 読[よ]みます。',
              exampleTranslation: 'Har bir xatboshidagi fikr rivojini kuzatib oʻqiymiz.',
            },
          ],
          grammarRules: [
            {
              pattern: 'JLPT N3 Dokkai: Mid-Length Reading & Logic Extraction',
              meaning:
                "O'rta hajmdagi tahliliy matnlarni o'qib muallifning asosiy xulosasini topish.",
              usageNotes:
                'SNSの 普及[ふきゅう]に より、私[わたし]たちは いつでも 誰[だれ]とでも 連絡[れんらく]が 取[と]れるように なった。 しかし、短[みじか]い メッセージや スタンプだけの やり取[と]りが 増[ふ]えたことで、相手[あいて]の 表情[ひょうじょう]や 声[こえ]の トーンを 感[かん]じ取[と]る 機会[きかい]が 減少[げんしょう]して いる。 筆者[ひっしゃ]は、便利[べんり]な ツールを 使[つか]いながらも、時[とき]には 直接[ちょくせつ] 会[あ]って 言葉[ことば]を 交[か]わすことの 大切[たいせつ]さを 忘[わす]れては ならないと 主張[しゅちょう]する。',
              examples: [
                {
                  sentence: 'スマホの 普及[ふきゅう]。',
                  translation: 'Smartfonlarning ommalashishi.',
                },
                {
                  sentence: '筆者[ひっしゃ]の 考[かんが]え。',
                  translation: 'Muallifning fikri.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l4-s2',
        title: 'Tahlil Mashqi',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Muallifning asosiy fikrini tanlang.',
          exercises: [
            {
              id: 'ja-n3-u4-l4-e1',
              type: 'multiple-choice',
              prompt: "Muallif nima haqida ta'kidlamoqda?",
              options: [
                'SNS dan butunlay voz kechish kerak',
                'Faqat stikerlar orqali muloqot qilish lozim',
                'Smartfonlarni taqiqlash kerak',
                "Raqamli qulayliklardan foydalangan holda, ba'zan yuzma-yuz uchrashib gaplashish muhimligini unutmaslik kerak",
              ],
              correctAnswer: 3,
              explanation: 'Direct face-to-face communication value.',
            },
            {
              id: 'ja-n3-u4-l4-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「筆者[ひっしゃ]の 考[かんが]え。」",
              options: ['散歩[さんぽ]', '筆者[ひっしゃ]', '運転[うんてん]', '食事[しょくじ]'],
              correctAnswer: 1,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"筆者[ひっしゃ]\" (Muallif / Yozuvchi).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l4-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u4-l4-q1',
              question:
                "JLPT Dokkai savollarida muallifning fikri ko'pincha abzasning qaysi qismida ifodalanadi?",
              options: [
                "Eng birinchi so'zida",
                'Faqat sarlavhada',
                'Faqat qavs ichida',
                'Matnning eng oxirgi xulosa qismida (〜と考える, 〜べきだ, 〜ではないだろうか)',
              ],
              correctAnswerIndex: 3,
              explanation: 'Conclusion at end of text.',
            },
            {
              id: 'ja-n3-u4-l4-q2',
              question: "「交[か]わす (Kawasu)」fe'lining ma'nosi:",
              options: [
                "O'zaro almashmoq (so'z almashmoq / salomlashmoq)",
                'Sotib olmoq',
                'Yozmoq',
                'Yugurmoq',
              ],
              correctAnswerIndex: 0,
              explanation: "O'zaro almashmoq.",
            },
            {
              id: 'ja-n3-u4-l4-q3',
              question: '«SNS tufayli qaysi imkoniyat kamaydi?»',
              options: [
                'Xabar yuborish',
                'Suhbatdoshning yuz ifodasi va ovoz ohangini his qilish imkoniyati',
                'Rasm yuborish',
                'Matn yozish',
              ],
              correctAnswerIndex: 1,
              explanation: 'Facial expressions & voice tone cues.',
            },
            {
              id: 'ja-n3-u4-l4-q4',
              question: "「減少[げんしょう]する」kanjisining ma'nosi:",
              options: ["To'xtamoq", 'Boshlanmoq', 'Kamaymoq / Qisqarmoq', "Ko'paymoq"],
              correctAnswerIndex: 2,
              explanation: 'Genshou suru — Kamaymoq.',
            },
            {
              id: 'ja-n3-u4-l4-q5',
              question:
                '中編[ちゅうへん]読解[どっかい]で「筆者[ひっしゃ]の 最[もっと]も 言[い]いたいこと」は 通常[つうじょう] どこに 書[か]かれているか？',
              options: [
                '文章[ぶんしょう]の 最後[さいご]の 段落[だんらく]（結末[けつまつ]）',
                '文章[ぶんしょう]の 最初[さいしょ]の 1行[ぎょう]目[め]だけ',
                '挿絵[さしえ]の 説明[せつめい]',
                '選択肢[せんたくし]の中',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Muallifning yakuniy xulosasi va asosiy fikri koʻpincha matnning oxirgi xulosa qismida keladi.',
            },
            {
              id: 'ja-n3-u4-l4-q6',
              question:
                '「つまり」という 接続[せつぞく]詞[し]が 出[で]てきたら、その 後[うしろ]には 何[なに]が くるか？',
              options: [
                '前[まえ]の 内容[ないよう]の 要約[ようやく]や 結論[けつろん]',
                'まったく 新[あたら]しい 別[べつ]の 話題[わだい]',
                '登場[とうじょう]人物[じんぶつ]の 名前[なまえ]',
                '過去[かこ]の 歴史[れきし]データ',
              ],
              correctAnswerIndex: 0,
              explanation:
                '「つまり」 (yaʼni/xulosa qilib aytganda) oldingi jumlalarning mazmunini ixchamlashtirib xulosa beradi.',
            },
            {
              id: 'ja-n3-u4-l4-q7',
              question:
                '文章[ぶんしょう]中[ちゅう]の「これ」「それ」などの 指示[しじ]語[ご]が 指[さ]す 内容[ないよう]を 探[さが]す コツは？',
              options: [
                '直前[ちょくぜん]の 文[ぶん]や フレーズに 注目[ちゅうもく]して 前後[ぜんご]の 文脈[ぶんみゃく]を 照合[しょうごう]する',
                '次[つぎ]の ページを 探[さが]す',
                '自分[じぶん]の 想像[そうぞう]で 決[き]める',
                '一番[いちばん] 難[むずか]しい 漢字[かんじ]を 選[えら]ぶ',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Korsatkich olmoshlari (Kore, Sore) deyarli doim oʻzidan oldingi jumlada tilga olingan tushunchaga ishora qiladi.',
            },
            {
              id: 'ja-n3-u4-l4-q8',
              question:
                '「しかし」「だが」などの 逆接[ぎゃくせつ]の 後[うしろ]には 何[なに]が 述[の]べられる 傾向[けいこう]が あるか？',
              options: [
                '筆者[ひっしゃ]の 本当[ほんとう]に 主張[しゅちょう]したい 意見[いけん]',
                '一般的[いっぱんてき]な 常識[じょうしき]',
                '他者[たしゃ]の 批判[ひはん]だけ',
                '単[たん]なる 冗談[じょうだん]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Biroq / ammo (Shikashi) dan keyin muallifning oʻz haqiqiy qarashi va dalili bayon qilinadi.',
            },
            {
              id: 'ja-n3-u4-l4-q9',
              question:
                '読解[どっかい]の 設問[せつもん]に 答[こた]える 際[さい]、一番[いちばん] やってはいけないことは？',
              options: [
                '本文[ほんぶん]に 書[か]かれていない 自分[じぶん]の 先入観[せんにゅうかん]や 常識[じょうしき]だけで 判断[はんだん]すること',
                '本文[ほんぶん]の キーワードを 探[さが]すこと',
                '段落[だんらく]ごとに 整理[せいり]すること',
                '制限[せいげん]時間[じかん]を 意識[いしき]すること',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Matn oʻqishda shaxsiy qarash emas, aynan matnda yozilgan fakt va muallif fikriga tayanish shart.',
            },
            {
              id: 'ja-n3-u4-l4-q10',
              question:
                '「〜ではないだろうか」という 表現[ひょうげん]の 筆者[ひっしゃ]の ニュアンスは？',
              options: [
                '自分[じぶん]の 意見[いけん]を 丁寧[ていねい]に 主張[しゅちょう]している (Ehtimol shunday emasmi / Menimcha shunday)',
                '完全[かんぜん]に 否定[ひてい]している',
                '質問[しつもん]して 答[こた]えを 待[ま]っている',
                '意味[いみ]が 分[わ]かっていない',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜ではないだろうか muallif oʻz gʻoyasini muloyim va ishonchli tarzda ilgari surayotganini bildiradi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u4-l5',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u4',
    unitTitle: 'Unit 4: Advanced Reasoning & Contrast',
    language: 'ja',
    level: 'N3',
    lessonNumber: 20,
    title: 'Nuanced Expectations: 〜はずだ vs 〜わけだ vs 〜べきだ',
    description:
      "Mantiqiy ishonch (hazu da - bo'lishi kerak), tabiiy xulosa (wake da - shunday ekanda), axloqiy burch (beki da).",
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
          explanation:
            "1. 〜はずだ: Mantiqan shunday bo'lishi kerak (aniq dalilga asoslangan ishonch): 今日[きょう]は 日曜日[にちようび]だから、銀行[ぎんこう]は 休[やす]みのはずだ (Bugun yakshanba, demak bank yopiq bo'lishi kerak). 2. 〜わけだ: Sababni tushunib yetgach: 「昨日[きのう] 熱[ねつ]が あったんです」「ああ、それで 元気[げんき]が なかったわけですね」 (Kecha isitmasi bor edida, shuning uchun darmonsiz ekanda!). 3. 〜べきだ: Shunday qilish burch/to'g'ri: 約束[やくそく]は 守[まも]るべきだ (Va'dani bajarish kerak).",
          vocabulary: [
            {
              term: '当然[とうぜん]',
              reading: 'touzen',
              meaning: 'Tabiiy, shunday boʻlishi kerak',
              exampleSentence:
                '毎日[まいにち] 練習[れんしゅう]したのだから、合格[ごうかく]する はずです。',
              exampleTranslation: 'Har kuni mashq qilgani uchun, albatta oʻtishi tayin.',
            },
            {
              term: '義務[ぎむ]',
              reading: 'gimu',
              meaning: 'Burch, majburiyat',
              exampleSentence: '約束[やくそく]は きちんと 守[まも]るべきです。',
              exampleTranslation: 'Vaʼdaga qatʼiy vafo qilish shartdir.',
            },
            {
              term: '納得[なっとく]する',
              reading: 'nattoku suru',
              meaning: 'Tushunib qoniqmoq, rozi boʻlmoq',
              exampleSentence: '理由[りゆう]を 聞[き]いて ようやく 納得[なっとく]が いきました。',
              exampleTranslation: 'Sababini eshitgach, nihoyat qoniqdim va tushundim.',
            },
            {
              term: '常識[じょうしき]',
              reading: 'joushiki',
              meaning: 'Umumiy qabul qilingan odob/tushuncha',
              exampleSentence:
                '時間[じかん]を 守[まも]ることは 社会人[しゃかいじん]としての 常識[じょうしき]です。',
              exampleTranslation: 'Vaqtga rioya qilish har bir yetuk insonning burchidir.',
            },
            {
              term: '責任[せきにん]',
              reading: 'sekinin',
              meaning: 'Masʼuliyat, javobgarlik',
              exampleSentence:
                'リーダーとして 最後[さいご]まで 責任[せきにん]を 持[も]つべきです。',
              exampleTranslation: 'Yetakchi sifatida oxirigacha masʼuliyatni olish lozim.',
            },
            {
              term: 'わけだ',
              reading: 'wake da',
              meaning: 'Demak shunday ekan-da (mantiqiy xulosa)',
              exampleSentence:
                '道理[どうり]で 今日[きょう]は 寒[さむ]い わけですね。雪[ゆき]が 降[ふ]っています。',
              exampleTranslation: 'Shuning uchun ham bugun havo sovuq ekan-da! Qor yogʻyapti.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Nuanced Expectations: 〜はずだ vs 〜わけだ vs 〜べきだ',
              meaning:
                "Mantiqiy ishonch (hazu da - bo'lishi kerak), tabiiy xulosa (wake da - shunday ekanda), axloqiy burch (beki da).",
              usageNotes:
                "1. 〜はずだ: Mantiqan shunday bo'lishi kerak (aniq dalilga asoslangan ishonch): 今日[きょう]は 日曜日[にちようび]だから、銀行[ぎんこう]は 休[やす]みのはずだ (Bugun yakshanba, demak bank yopiq bo'lishi kerak). 2. 〜わけだ: Sababni tushunib yetgach: 「昨日[きのう] 熱[ねつ]が あったんです」「ああ、それで 元気[げんき]が なかったわけですね」 (Kecha isitmasi bor edida, shuning uchun darmonsiz ekanda!). 3. 〜べきだ: Shunday qilish burch/to'g'ri: 約束[やくそく]は 守[まも]るべきだ (Va'dani bajarish kerak).",
              examples: [
                {
                  sentence: 'ルールを 守[まも]る。',
                  translation: 'Qoidaga amal qilmoq.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l5-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri mantiqiy xulosani tanlang.",
          exercises: [
            {
              id: 'ja-n3-u4-l5-e1',
              type: 'multiple-choice',
              prompt:
                '«U 10 yil Yaponiyada yashagan, demak yapon tilini yaxshi bilishi kerak (mantiqiy ishonch)»:',
              options: [
                '彼[かれ]は 10年[じゅうねん] 日本[にほん]に 住[す]んでいたから、日本語[にほんご]が 上手[じょうず]な はずだ',
                '上手[じょうず]です',
                '上手[じょうず]な べきだ',
                '上手[じょうず]な わけだ',
              ],
              correctAnswer: 0,
              explanation: 'Jouzu na hazu da (mantiqiy ishonch).',
            },
            {
              id: 'ja-n3-u4-l5-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「環境[かんきょう]への 意識[いしき]が 高[たか]まっています。」",
              options: ['食事[しょくじ]', '運転[うんてん]', '意識[いしき]', '散歩[さんぽ]'],
              correctAnswer: 2,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"意識[いしき]\" (Ong, xabardorlik).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u4-l5-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u4-l5-q1',
              question: "«Kattalarga hurmat ko'rsatish insoniy burchdir»:",
              options: [
                '年上[としうえ]の 人[ひと]を 敬[うやま]うべきだ',
                '敬[うやま]う',
                '敬[うやま]うわけだ',
                '敬[うやま]うはずだ',
              ],
              correctAnswerIndex: 0,
              explanation: 'Uyamau beki da (burch/axloqiy talab).',
            },
            {
              id: 'ja-n3-u4-l5-q2',
              question: "「する」fe'lining 〜べき shakli qaysi?",
              options: ['させべきだ', 'したべきだ', 'すべくだ', 'すべきだ (yoki するべきだ)'],
              correctAnswerIndex: 3,
              explanation: 'Subeki da / Suru beki da.',
            },
            {
              id: 'ja-n3-u4-l5-q3',
              question: "«Bunday bo'lishi mutlaqo mumkin emas!» qat'iy inkor qaysi?",
              options: [
                '〜ないそうだ',
                '〜ないべきだ',
                '〜はずが ない (Hazu ga nai) / 〜わけが ない',
                '〜ないだろう',
              ],
              correctAnswerIndex: 2,
              explanation: 'Hazu ga nai / Wake ga nai.',
            },
            {
              id: 'ja-n3-u4-l5-q4',
              question: "「暑[あつ]いわけだ。38度[さんじゅうはちど]も ある」ning ma'nosi:",
              options: [
                'Issiq emas',
                "Issiq bo'lmay iloji yo'qda, harorat 38 daraja ekanku!",
                "Harorat yo'q",
                "Sovuq bo'lishi kerak",
              ],
              correctAnswerIndex: 1,
              explanation: 'No wonder it is so hot!',
            },
            {
              id: 'ja-n3-u4-l5-q5',
              question:
                '田中[たなか]さんは 日本[にほん]に 10年[じゅうねん]も 住[す]んでいたから、日本語[にほんご]が 上手[じょうず]な （　）。',
              options: ['はずだ', 'べきだ', 'ことだ', 'ものだ'],
              correctAnswerIndex: 0,
              explanation:
                'Yetarli asosga tayangan mantiqiy ishonch/kutilma: 〜はずだ (Yaxshi bilishi aniq/kerak).',
            },
            {
              id: 'ja-n3-u4-l5-q6',
              question:
                '約束[やくそく]の 時間[じかん]は 守[まも]る （　）。遅[おく]れては いけない。',
              options: ['べきだ', 'はずだ', 'わけだ', 'つもりだ'],
              correctAnswerIndex: 0,
              explanation:
                'Axloqiy burch, ijtimoiy qoida yoki masʼuliyat: 〜べきだ (Vaqtni saqlash lozim/shart).',
            },
            {
              id: 'ja-n3-u4-l5-q7',
              question:
                'エアコンが ついていなかったのか。道理[どうり]で 部屋[へや]が 暑[あつ]い （　）。',
              options: ['わけだ', 'はずだ', 'べきだ', 'ことだ'],
              correctAnswerIndex: 0,
              explanation:
                'Sababi maʼlum boʻlib, shuning uchun shunday ekan-da deb tushunish: 〜わけだ (Shuning uchun issiq ekanda).',
            },
            {
              id: 'ja-n3-u4-l5-q8',
              question: '学生[がくせい]は もっと 勉強[べんきょう]す （　）。',
              options: ['べきだ', 'はずだ', 'わけだ', 'そうだ'],
              correctAnswerIndex: 0,
              explanation: 'Suru feʼli bilan odob/burch: すべきだ (Bajarmogʻi lozim).',
            },
            {
              id: 'ja-n3-u4-l5-q9',
              question: '鍵[かぎ]を 掛[か]けた （　）なのに、ドアが 開[あ]いている。おかしいな。',
              options: ['はず', 'わけ', 'べき', 'もの'],
              correctAnswerIndex: 0,
              explanation:
                'Qulflagan boʻlishim aniq edi-ku (kutilmaga zid holat): 掛[か]けたはずなのに.',
            },
            {
              id: 'ja-n3-u4-l5-q10',
              question: '「〜わけがない」の意味[いみ]として 最適[さいてき]なものは？',
              options: [
                '絶対に 〜のはずがない (Mantiqan aslo bunday boʻlishi mumkin emas)',
                '〜かもしれない',
                '〜したほうがいい',
                '〜のはずだ',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜わけがない qatʼiy inkor: Hech qanaqasiga bunday boʻlishi mumkin emas.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u5-l1',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u5',
    unitTitle: 'Unit 5: Kanji Mastery & Reading',
    language: 'ja',
    level: 'N3',
    lessonNumber: 21,
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
          explanation:
            "科 (ka - bo'lim/fan), 技 (gi/waza - mahorat/texnika), 術 (jutsu - san'at/usul), 発 (hatsu - paydo bo'lish/otilish), 明 (mei/aka - yorug'/ochiq), 究 (kyuu/kiwa - tadqiq qilish), 実 (jitsu/mi - haqiqat/meva), 験 (ken - sinov).",
          vocabulary: [
            {
              term: '科学[かがく]',
              reading: 'kagaku',
              meaning: 'Ilm-fan, tabiiy fanlar',
              exampleSentence:
                '最新[さいしん]の 科学[かがく]技術[ぎじゅつ]が 医療[いりょう]を 変[か]えています。',
              exampleTranslation: 'Eng soʻnggi fan-texnika tibbiyotni oʻzgartirmoqda.',
            },
            {
              term: '技術[ぎじゅつ]',
              reading: 'gijutsu',
              meaning: 'Texnologiya, muhandislik mahorati',
              exampleSentence:
                '日本[にほん]の 建築[けんちく]技術[ぎじゅつ]は 世界[せかい]で 高[たか]く 評価[ひょうか]されています。',
              exampleTranslation: 'Yaponiya qurilish texnologiyasi jahonda yuqori baholanadi.',
            },
            {
              term: '発明[はつめい]する',
              reading: 'hatsumei suru',
              meaning: 'Ixtiro qilmoq',
              exampleSentence:
                'エジソンは 多[おお]くの 便利[べんり]な 道具[どうぐ]を 発明[はつめい]しました。',
              exampleTranslation: 'Edison juda koʻp qulay anjomlarni ixtiro qilgan.',
            },
            {
              term: '実験[じっけん]する',
              reading: 'jikken suru',
              meaning: 'Tajriba/eksperiment oʻtkazmoq',
              exampleSentence:
                '大学[だいがく]の 研究室[けんきゅうしつ]で 何度[なんど]も 実験[じっけん]を 重[かさ]ねました。',
              exampleTranslation: 'Universitet laboratoriyasida qayta-qayta tajribalar oʻtkazildi.',
            },
            {
              term: '研究[けんきゅう]する',
              reading: 'kenkyuu suru',
              meaning: 'Ilmiy tadqiqot olib bormoq',
              exampleSentence:
                '再生[さいせい]可能[かのう]エネルギーの 活用[かつよう]について 研究[けんきゅう]して います。',
              exampleTranslation:
                'Qayta tiklanuvchi energiya manbalari boʻyicha izlanish olib bormoqdaman.',
            },
            {
              term: '発展[はってん]する',
              reading: 'hatten suru',
              meaning: 'Rivojlanmoq, taraqqiy etmoq',
              exampleSentence:
                'AIの 登場[とうじょう]により、IT産業[さんぎょう]が 急速[きゅうそく]に 発展[はってん]しています。',
              exampleTranslation:
                'Sunʼiy intellekt paydo boʻlishi bilan IT sohasi shiddat bilan rivojlanmoqda.',
            },
          ],
          grammarRules: [
            {
              pattern: 'N3 Kanji 1: Technology & Science (科学, 技術, 発明, 研究, 実験)',
              meaning: 'Fan, texnika, ixtiro va tadqiqotlarni ifodalovchi N3 iyerogliflari.',
              usageNotes:
                "科 (ka - bo'lim/fan), 技 (gi/waza - mahorat/texnika), 術 (jutsu - san'at/usul), 発 (hatsu - paydo bo'lish/otilish), 明 (mei/aka - yorug'/ochiq), 究 (kyuu/kiwa - tadqiq qilish), 実 (jitsu/mi - haqiqat/meva), 験 (ken - sinov).",
              examples: [
                {
                  sentence: '現代[げんだい]の 科学[かがく]。',
                  translation: 'Zamonaviy ilm-fan.',
                },
                {
                  sentence: '先端[せんたん] 技術[ぎじゅつ]。',
                  translation: "Ilg'or texnologiya.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l1-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Iyeroglifni tanlang.',
          exercises: [
            {
              id: 'ja-n3-u5-l1-e1',
              type: 'multiple-choice',
              prompt: '«Ixtiro qilmoq» kanjisi qaysi?',
              options: ['実験[じっけん]', '技術[ぎじゅつ]', '研究[けんきゅう]', '発明[はつめい]'],
              correctAnswer: 3,
              explanation: '発明 (Hatsumei).',
            },
            {
              id: 'ja-n3-u5-l1-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「先端[せんたん] 技術[ぎじゅつ]。」",
              options: ['散歩[さんぽ]', '運転[うんてん]', '食事[しょくじ]', '技術[ぎじゅつ]'],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"技術[ぎじゅつ]\" (Texnologiya / Texnika).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l1-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u5-l1-q1',
              question: '«Laboratoriya tajribasi / Eksperiment» kanjisi qaysi?',
              options: ['研究[けんきゅう]', '発明[はつめい]', '科学[かがく]', '実験[じっけん]'],
              correctAnswerIndex: 3,
              explanation: '実験 (Jikken).',
            },
            {
              id: 'ja-n3-u5-l1-q2',
              question: "「研究[けんきゅう]者[しゃ]」so'zining ma'nosi:",
              options: ['Tadqiqotchi / Olim', 'Boshliq', 'Talaba', 'Shifokor'],
              correctAnswerIndex: 0,
              explanation: 'Kenkyuusha — Tadqiqotchi.',
            },
            {
              id: 'ja-n3-u5-l1-q3',
              question: '«Kashfiyot (yangi narsani topish)» kanjisi qaysi?',
              options: ['発明[はつめい]', '出発[しゅっぱつ]', '発見[はっけん]', '発展[はってん]'],
              correctAnswerIndex: 2,
              explanation: '発見 (Hakken).',
            },
            {
              id: 'ja-n3-u5-l1-q4',
              question: "「発展[はってん]する」ning ma'nosi:",
              options: ['Rivojlanmoq / Taraqqiy etmoq', 'Boshlanmoq', 'Tugamoq', "Kasal bo'lmoq"],
              correctAnswerIndex: 0,
              explanation: 'Hatten suru — Rivojlanmoq.',
            },
            {
              id: 'ja-n3-u5-l1-q5',
              question: '「技術」ning toʻgʻri oʻqilishi qaysi?',
              options: ['ぎじゅつ', 'ぎしゅつ', 'きじゅつ', 'きしゅつ'],
              correctAnswerIndex: 0,
              explanation: '技術 = ぎじゅつ (Texnologiya, mahorat).',
            },
            {
              id: 'ja-n3-u5-l1-q6',
              question:
                '大学[だいがく]の 研究[けんきゅう]室[しつ]で 新薬[しんやく]の （　）を 行[おこな]う。',
              options: ['実験[じっけん]', '科学[かがく]', '発明[はつめい]', '技術[ぎじゅつ]'],
              correctAnswerIndex: 0,
              explanation: 'Laboratoriyada sinov/tajriba oʻtkazish: 実験を行う (Jikken o okonau).',
            },
            {
              id: 'ja-n3-u5-l1-q7',
              question: 'エジソンは 多[おお]くの 画期的[かっきてき]な （　）を 残[のこ]した。',
              options: ['発明[はつめい]', '実験[じっけん]', '科学[かがく]', '研究[けんきゅう]'],
              correctAnswerIndex: 0,
              explanation: 'Ixtiro: 発明 (Hatsumei).',
            },
            {
              id: 'ja-n3-u5-l1-q8',
              question: '「論文」ning toʻgʻri oʻqilishi va maʼnosi:',
              options: [
                'ろんぶん (Ilmiy maqola, tezis)',
                'ろんもん (Darslik)',
                'らんぶん (Jurnal)',
                'りんぶん (Gazeta)',
              ],
              correctAnswerIndex: 0,
              explanation: '論文 = ろんぶん (Ilmiy maqola, dissertatsiya).',
            },
            {
              id: 'ja-n3-u5-l1-q9',
              question:
                'AI技術[ぎじゅつ]の 進歩[しんぽ]は （　）の 発展[はってん]に 大[おお]きく 貢献[こうけん]している。',
              options: ['科学[かがく]', '発明[はつめい]', '実験[じっけん]', '論文[ろんぶん]'],
              correctAnswerIndex: 0,
              explanation: 'Fan rivoji: 科学の発展 (Kagaku no hatten).',
            },
            {
              id: 'ja-n3-u5-l1-q10',
              question: '「研究」kanjisining oʻqilishi qaysi?',
              options: ['けんきゅう', 'けんきゅ', 'げんきゅう', 'がんきゅう'],
              correctAnswerIndex: 0,
              explanation: '研究 = けんきゅう (Tadqiqot, ilmiy izlanish).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u5-l2',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u5',
    unitTitle: 'Unit 5: Kanji Mastery & Reading',
    language: 'ja',
    level: 'N3',
    lessonNumber: 22,
    title: 'N3 Kanji 2: Health, Body & Feelings (感情, 緊張, 複雑, 単純, 苦痛)',
    description: "Tug'g'ular, asabiylashish, murakkablik va oddiylik iyerogliflari.",
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
          explanation:
            "感 (kan - his qilish), 情 (jou/nasa - tuyg'u/mehr), 緊 (kin - tarang), 張 (chou/ha - tortish/taranglashish), 複 (fuku - takror/qo'shaloq), 雑 (zatsu - aralash), 単 (tan - yakka/oddiy), 純 (jun - toza/sofdil).",
          vocabulary: [
            {
              term: '緊張[きんちょう]する',
              reading: 'kinchou suru',
              meaning: 'Hayajonlanmoq, tarang holatda boʻlmoq',
              exampleSentence:
                '面接[めんせつ]の 前[まえ]は 誰[だれ]でも 緊張[きんちょう]する ものです。',
              exampleTranslation: 'Suhbatdan oldin har qanday inson hayajonlanishi tabiiy.',
            },
            {
              term: '不安[ふあん]',
              reading: 'fuan',
              meaning: 'Xavotir, bezovtalik',
              exampleSentence:
                '新[あたら]しい 環境[かんきょう]に 不安[ふあん]を 感[かん]じる 必要[ひつよう]は ありません。',
              exampleTranslation: 'Yangi muhitda xavotirga tushishga hech qanday hojat yoʻq.',
            },
            {
              term: '症状[しょうじょう]',
              reading: 'shoujou',
              meaning: 'Kasallik alomati, simptom',
              exampleSentence:
                '熱[ねつ]や 咳[せき]などの 症状[しょうじょう]が あれば 休[やす]んで ください。',
              exampleTranslation: 'Isitma yoki yoʻtal kabi alomatlar boʻlsa, dam oling.',
            },
            {
              term: '診断[しんだん]する',
              reading: 'shindan suru',
              meaning: 'Tashxis qoʻymoq',
              exampleSentence: '医師[いし]に 詳[くわ]しく 診断[しんだん]して もらいました。',
              exampleTranslation: 'Shifokorga batafsil koʻrsatib, tashxis qoʻydirdim.',
            },
            {
              term: '睡眠[すいみん]',
              reading: 'suimin',
              meaning: 'Uyqu',
              exampleSentence:
                '十分[じゅうぶん]な 睡眠[すいみん]を とることが 健康[けんこう]の 秘訣[ひけつ]です。',
              exampleTranslation: 'Yetarlicha uxlash salomatlikning eng katta siri.',
            },
            {
              term: '栄養[えいよう]',
              reading: 'eiyou',
              meaning: 'Oziqlanish, vitaminlar',
              exampleSentence:
                '栄養[えいよう]バランスの 良[よ]い 食事[しょくじ]を 心[こころ]がけましょう。',
              exampleTranslation: 'Vitaminlarga boy va muvozanatli ovqatlanishga intiling.',
            },
          ],
          grammarRules: [
            {
              pattern: 'N3 Kanji 2: Health, Body & Feelings (感情, 緊張, 複雑, 単純, 苦痛)',
              meaning: "Tug'g'ular, asabiylashish, murakkablik va oddiylik iyerogliflari.",
              usageNotes:
                "感 (kan - his qilish), 情 (jou/nasa - tuyg'u/mehr), 緊 (kin - tarang), 張 (chou/ha - tortish/taranglashish), 複 (fuku - takror/qo'shaloq), 雑 (zatsu - aralash), 単 (tan - yakka/oddiy), 純 (jun - toza/sofdil).",
              examples: [
                {
                  sentence: '面接[めんせつ]で 緊張[きんちょう]した。',
                  translation: 'Suhbatda hayajonlandim.',
                },
                {
                  sentence: '複雑[ふくざつ]な 問題[もんだい]。',
                  translation: 'Murakkab masala.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l2-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Iyeroglifni tanlang.',
          exercises: [
            {
              id: 'ja-n3-u5-l2-e1',
              type: 'multiple-choice',
              prompt: '«Oddiy / Sodda» kanjisi qaysi?',
              options: [
                '単純[たんじゅん]',
                '緊張[きんちょう]',
                '感情[かんじょう]',
                '複雑[ふくざつ]',
              ],
              correctAnswer: 0,
              explanation: '単純 (Tanjun).',
            },
            {
              id: 'ja-n3-u5-l2-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「複雑[ふくざつ]な 問題[もんだい]。」",
              options: ['複雑[ふくざつ]', '食事[しょくじ]', '運転[うんてん]', '散歩[さんぽ]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"複雑[ふくざつ]\" (Murakkab / Chigal).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l2-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u5-l2-q1',
              question: '«Hayajonlanmoq / Asabiylashmoq» kanjisi qaysi?',
              options: ['緊張[きんちょう]', '苦痛[くつう]', '安心[あんしん]', '感情[かんじょう]'],
              correctAnswerIndex: 0,
              explanation: '緊張 (Kinchou).',
            },
            {
              id: 'ja-n3-u5-l2-q2',
              question: "「感情[かんじょう]を 抑[おさ]える」ning ma'nosi:",
              options: [
                "Yig'lamoq",
                'Kulmoq',
                "Xafa bo'lmoq",
                "Hissiyotlarni jilovlamoq / Bosiq bo'lmoq",
              ],
              correctAnswerIndex: 3,
              explanation: 'Hissiyotlarni jilovlash.',
            },
            {
              id: 'ja-n3-u5-l2-q3',
              question: '«Murakkab» (Fukuzatsu) ning antonimi qaysi?',
              options: ['単純[たんじゅん]', '緊張[きんちょう]', '安心[あんしん]', '心配[しんぱい]'],
              correctAnswerIndex: 0,
              explanation: 'Tanjun (oddiy).',
            },
            {
              id: 'ja-n3-u5-l2-q4',
              question: "「苦痛[くつう]」so'zidagi 痛 nimani bildiradi?",
              options: ['Balandlik', "Og'riq / Azob", 'Quvonch', 'Hayajon'],
              correctAnswerIndex: 1,
              explanation: "Og'riq / Azob.",
            },
            {
              id: 'ja-n3-u5-l2-q5',
              question: '面接[めんせつ]の 前[まえ]で とても （　）して 手[て]が 震[ふる]えた。',
              options: ['緊張[きんちょう]', '感情[かんじょう]', '複雑[ふくざつ]', '苦痛[くつう]'],
              correctAnswerIndex: 0,
              explanation: 'Hayajonlanmoq, asabiylashmoq: 緊張する (Kinchou suru).',
            },
            {
              id: 'ja-n3-u5-l2-q6',
              question:
                'この 問題[もんだい]は （　）そうに 見[み]えて、実[じつ]は とても 簡単[かんたん]だ。',
              options: [
                '複雑[ふくざつ]',
                '単純[たんじゅん]',
                '緊張[きんちょう]',
                '感情[かんじょう]',
              ],
              correctAnswerIndex: 0,
              explanation: 'Murakkab, chigal: 複雑 (Fukuzatsu).',
            },
            {
              id: 'ja-n3-u5-l2-q7',
              question: '「単純」ning antonimi (qarama-qarshi maʼnoli soʻzi) qaysi?',
              options: ['複雑[ふくざつ]', '簡単[かんたん]', '明確[めいかく]', '平易[へいい]'],
              correctAnswerIndex: 0,
              explanation: 'Oddiy (単純) ning aksi — murakkab (複雑).',
            },
            {
              id: 'ja-n3-u5-l2-q8',
              question: '人間[にんげん]は さまざまな （　）を 表情[ひょうじょう]に 表[あらわ]す。',
              options: ['感情[かんじょう]', '苦痛[くつう]', '緊張[きんちょう]', '単純[たんじゅん]'],
              correctAnswerIndex: 0,
              explanation: 'Hissiyotlar: 感情 (Kanjou).',
            },
            {
              id: 'ja-n3-u5-l2-q9',
              question: '「苦痛」ning toʻgʻri oʻqilishi qaysi?',
              options: ['くつう', 'にがつう', 'くとう', 'にがとう'],
              correctAnswerIndex: 0,
              explanation: '苦痛 = くつう (Ogʻriq, azob).',
            },
            {
              id: 'ja-n3-u5-l2-q10',
              question:
                '長[なが]い 治療[ちりょう]の （　）に 耐[た]えて、ついに 完治[かんち]した。',
              options: ['苦痛[くつう]', '感情[かんじょう]', '緊張[きんちょう]', '単純[たんじゅん]'],
              correctAnswerIndex: 0,
              explanation: 'Davolanish azobi/ogʻrigʻiga chidab: 苦痛に耐えて (Kutsuu ni taete).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u5-l3',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u5',
    unitTitle: 'Unit 5: Kanji Mastery & Reading',
    language: 'ja',
    level: 'N3',
    lessonNumber: 23,
    title: 'N3 Conditionals Deep Dive: 〜と vs 〜たら vs 〜ば vs 〜なら',
    description: "To'rtta yapon shart ergash shaklining aniq chegaralari va nozik farqlari.",
    estimatedDurationMinutes: 16,
    icon: '🔀',
    steps: [
      {
        id: 'ja-n3-u5-l3-s1',
        title: "To'rtta Shart Shakli Qiyosi",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'The 4 Japanese Conditionals (〜と, 〜たら, 〜ば, 〜なら)',
          explanation:
            '1. 〜と: Tabiiy, muqarrar natija ("Tugmani bossang, chipta chiqadi"). 2. 〜たら: O\'tmishdagi kutilmagan voqea yoki universal shart ("Borib ko\'rsam, u yo\'q ekan"). 3. 〜ば: Umumiy gipotetik shart va maslahat ("Vaqt bo\'lsa, boraman"). 4. 〜なら: Suhbatdosh aytgan mavzuga taklif/maslahat ("Yaponiya bo\'yicha bo\'lsa, u kishidan so\'rang").',
          vocabulary: [
            {
              term: '条件[じょうけん]',
              reading: 'jouken',
              meaning: 'Shart, talab',
              exampleSentence: '良[よ]い 条件[じょうけん]が そろえば、すぐに行動[こうどう]します。',
              exampleTranslation: 'Qulay shartlar paydo boʻlsa, darhol harakat qilaman.',
            },
            {
              term: '仮定[かてい]する',
              reading: 'katei suru',
              meaning: 'Taxmin qilmoq, faraz qilmoq',
              exampleSentence:
                'もし 雨[あめ]が 降[ふ]ったら どうするか、仮定[かてい]して 話[はな]し合[あ]います。',
              exampleTranslation:
                'Agar yomgʻir yogʻsa nima qilishimizni taxmin qilib kelishib olamiz.',
            },
            {
              term: '結果[けっか]',
              reading: 'kekka',
              meaning: 'Natija, oqibat',
              exampleSentence:
                '努力[どりょく]すれば、必[かなら]ず 良[よ]い 結果[けっか]が 出[で]ます。',
              exampleTranslation: 'Harakat qilsangiz, albatta ajoyib natijaga erishasiz.',
            },
            {
              term: '必ず[かならず]',
              reading: 'kanarazu',
              meaning: 'Albatta, muqarrar',
              exampleSentence: '春[はる]に なると、必[かなら]ず 桜[さくら]が 咲[さ]きます。',
              exampleTranslation: 'Bahor kelishi bilan, shubhasiz gilos gullari ochiladi.',
            },
            {
              term: '案内[あんない]する',
              reading: 'annai suru',
              meaning: 'Yoʻl koʻrsatmoq, maʼlumot bermoq',
              exampleSentence:
                '京都[きょうと]へ 行[い]くなら、私[わたし]が 案内[あんない]しますよ。',
              exampleTranslation: 'Agar Kyotoga borsangiz, men oʻzim sizga yoʻlboshchilik qilaman.',
            },
            {
              term: '提案[ていあん]する',
              reading: 'teian suru',
              meaning: 'Taklif kiritmoq',
              exampleSentence:
                '会議[かいぎ]で 新[あたら]しい スケジュールを 提案[ていあん]しました。',
              exampleTranslation: 'Yigʻilishda yangi ish rejasini taklif qildim.',
            },
          ],
          grammarRules: [
            {
              pattern: 'N3 Conditionals Deep Dive: 〜と vs 〜たら vs 〜ば vs 〜なら',
              meaning: "To'rtta yapon shart ergash shaklining aniq chegaralari va nozik farqlari.",
              usageNotes:
                '1. 〜と: Tabiiy, muqarrar natija ("Tugmani bossang, chipta chiqadi"). 2. 〜たら: O\'tmishdagi kutilmagan voqea yoki universal shart ("Borib ko\'rsam, u yo\'q ekan"). 3. 〜ば: Umumiy gipotetik shart va maslahat ("Vaqt bo\'lsa, boraman"). 4. 〜なら: Suhbatdosh aytgan mavzuga taklif/maslahat ("Yaponiya bo\'yicha bo\'lsa, u kishidan so\'rang").',
              examples: [
                {
                  sentence: '春[はる]に なると、花[はな]が 咲[さ]く。',
                  translation: 'Bahor kelsa, gullar ochiladi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l3-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri shart turini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u5-l3-e1',
              type: 'multiple-choice',
              prompt: "«Sushi yemoqchi bo'lsangiz, ana u do'kon eng yaxshisi» (mavzuga tavsiya):",
              options: [
                '寿司[すし]と、あの店[みせ]',
                '寿司[すし]です',
                '寿司[すし]なら、あの店[みせ]が 一番[いちばん]ですよ',
                '寿司[すし]ば、あの店[みせ]',
              ],
              correctAnswer: 2,
              explanation: "Sushi nara (Agar sushi haqida bo'lsa).",
            },
            {
              id: 'ja-n3-u5-l3-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「健康[けんこう]を 維持[いじ]するために 運動[うんどう]します。」",
              options: ['散歩[さんぽ]', '運転[うんてん]', '維持[いじ]する', '食事[しょくじ]'],
              correctAnswer: 2,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"維持[いじ]する\" (Saqlab turmoq (holatni)).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l3-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u5-l3-q1',
              question:
                'Tabiiy qonuniyatlar (Masalan: Bahor kelsa gullar ochiladi) uchun qaysi biri eng mos?',
              options: ['〜なら', '〜ても', '〜と', '〜たい'],
              correctAnswerIndex: 2,
              explanation: '〜と (Tabiiy muqarrar oqibat).',
            },
            {
              id: 'ja-n3-u5-l3-q2',
              question: "«Derazani ochib qarasam, qor yog'ayotgan ekan (kutilmagan kashfiyot)»:",
              options: [
                '窓[まど]を 開[あ]けたら、雪[ゆき]が 降[ふ]っていた',
                '開[あ]けるなら',
                '開[あ]ければ 雪[ゆき]',
                '窓[まど]を 開[あ]けると 雪[ゆき]',
              ],
              correctAnswerIndex: 0,
              explanation: "Aketara (o'tmishdagi kutilmagan kashfiyot).",
            },
            {
              id: 'ja-n3-u5-l3-q3',
              question: 'Qaysi shart shaklidan keyin buyruq yoki taklif kela OLMAYDI?',
              options: [
                '〜なら',
                '〜ば',
                '〜たら',
                "〜と (To dan keyin buyruq/taklif qo'llab bo'lmaydi)",
              ],
              correctAnswerIndex: 3,
              explanation: '〜と cannot be followed by volition/command.',
            },
            {
              id: 'ja-n3-u5-l3-q4',
              question: "«Arzon bo'lsa sotib olaman» (ba shakli):",
              options: [
                '安[やす]いなら',
                '安[やす]いと 買[か]う',
                '安[やす]ければ 買[か]います',
                '安[やす]い',
              ],
              correctAnswerIndex: 2,
              explanation: 'Yasukereba kaimasu.',
            },
            {
              id: 'ja-n3-u5-l3-q5',
              question: '春[はる]に （　）、桜[さくら]が 咲[さ]きます。',
              options: ['なると', 'なったら', 'なれば', 'なるなら'],
              correctAnswerIndex: 0,
              explanation: 'Tabiiy qonuniyat va muqarrar hodisalarda: 〜と (Bahor kelishi bilan).',
            },
            {
              id: 'ja-n3-u5-l3-q6',
              question: '日本[にほん]へ （　）、富士山[ふじさん]に 登[のぼ]って みたい。',
              options: ['行[い]ったら', '行[い]くと', '行[い]けば', '行[い]くなら'],
              correctAnswerIndex: 0,
              explanation:
                'Harakat ketma-ketligi va kelgusi istak (tai): 〜たら eng tabiiy va koʻp qirrali shart shaklidir.',
            },
            {
              id: 'ja-n3-u5-l3-q7',
              question: '安[やす]（　）、たくさん 買[か]いたいです。',
              options: ['ければ', 'いなら', 'いと', 'くたら'],
              correctAnswerIndex: 0,
              explanation: 'I-sifat shart shakli: 安い -> 安ければ (Arzon boʻlsa).',
            },
            {
              id: 'ja-n3-u5-l3-q8',
              question: '「パソコンを 買[か]う（　）、秋葉原[あきはばら]が いいですよ。」',
              options: ['なら', 'たら', 'と', 'ば'],
              correctAnswerIndex: 0,
              explanation:
                'Suhbatdoshning niyatiga maslahat berish: 〜なら (Sotib olmoqchi boʻlsangiz).',
            },
            {
              id: 'ja-n3-u5-l3-q9',
              question: 'この ボタンを （　）と、おつりが 出[で]て きます。',
              options: ['押[お]す', '押[お]して', '押[お]した', '押[お]せ'],
              correctAnswerIndex: 0,
              explanation:
                'Mexanizm va avtomatika harakatlarida: Lugʻat shakl + と (Bosishi bilanoq).',
            },
            {
              id: 'ja-n3-u5-l3-q10',
              question: '「〜と」ning ikkinchi qismida qaysi shakllar KELMAYDI?',
              options: [
                'Buyruq, iltimos va xohish shakllari (〜てください, 〜たい)',
                'Oʻtmish zamon faktlari',
                'Oʻz-oʻzidan sodir boʻladigan holatlar',
                'Tabiiy hodisalar',
              ],
              correctAnswerIndex: 0,
              explanation:
                '〜と shart shaklidan keyin shaxsiy iroda, buyruq yoki iltimos (〜てください, 〜たい) kelishi mumkin emas.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u5-l4',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u5',
    unitTitle: 'Unit 5: Kanji Mastery & Reading',
    language: 'ja',
    level: 'N3',
    lessonNumber: 24,
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
          explanation:
            "Yapon tilida kitoblar, maqolalar va gazetalar です/ます shaklida emas, balki である shaklida yoziladi: です -> である, ではありません -> ではない, でした -> であった. Fe'llar oddiy jisho-kei/ta-kei shaklda bo'ladi.",
          keyPoints: [
            '本稿[ほんこう]の 目的[もくてき]は〜を 明[あき]らかにする ことで ある。 (Ushbu maqolaning maqsadi ... ni oydinlashtirishdan iboratdir.)',
          ],
          vocabulary: [
            {
              term: '論文[ろんぶん]',
              reading: 'ronbun',
              meaning: 'Ilmiy maqola, tezis',
              exampleSentence:
                '大学院[だいがくいん]で 修士[しゅうし]論文[ろんぶん]を 執筆[しっぴつ]して います。',
              exampleTranslation: 'Magistraturada ilmiy dissertatsiya yozmoqdaman.',
            },
            {
              term: '報告書[ほうこくしょ]',
              reading: 'houkokusho',
              meaning: 'Hisobot hujjati',
              exampleSentence:
                '調査[ちょうさ]の 結果[けっか]を 報告書[ほうこくしょ]に まとめました。',
              exampleTranslation: 'Tadqiqot natijalarini hisobot shaklida jamladim.',
            },
            {
              term: '考察[こうさつ]する',
              reading: 'kousatsu suru',
              meaning: 'Chuqur tahlil/mulohaza qilmoq',
              exampleSentence:
                '実験[じっけん]データに 基[もと]づいて 慎重[しんちょう]に 考察[こうさつ]します。',
              exampleTranslation: 'Tajriba maʼlumotlari asosida sinchkovlik bilan tahlil qilamiz.',
            },
            {
              term: '明らか[あきらか]',
              reading: 'akiraka',
              meaning: 'Aniq, yaqqol, ochiq-oydin',
              exampleSentence: '調査[ちょうさ]により 原因[げんいん]が 明[あき]らかに なりました。',
              exampleTranslation: 'Tekshiruv natijasida sabab aniq-ravshan boʻldi.',
            },
            {
              term: '傾向[けいこう]',
              reading: 'keikou',
              meaning: 'Tendensiya, moyillik',
              exampleSentence:
                '若者[わかもの]の 読書[どくしょ]時間[じかん]が 減少[げんしょう]する 傾向[けいこう]に あります。',
              exampleTranslation: 'Yoshlarning kitob oʻqish vaqti kamayish tendensiyasiga ega.',
            },
            {
              term: '示す[しめす]',
              reading: 'shimesu',
              meaning: 'Koʻrsatmoq, dalolat bermoq',
              exampleSentence:
                'グラフは 売上[うりあげ]が 急増[きゅうぞう]したことを 示[しめ]して います。',
              exampleTranslation: 'Grafik sotuv hajmi keskin oshganini koʻrsatib turibdi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Formal Writing Style (普通体 / だ・である調) & Academic Register',
              meaning: 'Insholar, ilmiy maqolalar va gazetalarning rasmiy yozma tili (Da / Dearu).',
              usageNotes:
                "Yapon tilida kitoblar, maqolalar va gazetalar です/ます shaklida emas, balki である shaklida yoziladi: です -> である, ではありません -> ではない, でした -> であった. Fe'llar oddiy jisho-kei/ta-kei shaklda bo'ladi.",
              examples: [
                {
                  sentence: '事実[じじつ]が 明[あき]らかに なった。',
                  translation: 'Haqiqat oydinlashdi.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l4-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Rasmiy yozma shaklni tanlang.',
          exercises: [
            {
              id: 'ja-n3-u5-l4-e1',
              type: 'multiple-choice',
              prompt: '«Bu muhim masaladir» ilmiy maqola shakli qaysi?',
              options: [
                'これ は 重要[じゅうよう]な 問題[もんだい]で ある',
                'これ は 重要[じゅうよう]な 問題[もんだい]です',
                '問題[もんだい]だね',
                '問題[もんだい]でした',
              ],
              correctAnswer: 0,
              explanation: 'Mondai de aru (rasmiy ilmiy yozma til).',
            },
            {
              id: 'ja-n3-u5-l4-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「環境[かんきょう]への 意識[いしき]が 高[たか]まっています。」",
              options: ['意識[いしき]', '散歩[さんぽ]', '食事[しょくじ]', '運転[うんてん]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"意識[いしき]\" (Ong, xabardorlik).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l4-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u5-l4-q1',
              question: "Gazeta va rasmiy hisobotlarda qaysi uslub qo'llaniladi?",
              options: ['である調', 'です・ます調', 'くだけた話し言葉', 'ギャル文字'],
              correctAnswerIndex: 0,
              explanation: 'である調.',
            },
            {
              id: 'ja-n3-u5-l4-q2',
              question: "「ではない」ning o'tgan zamon rasmiy yozma shakli:",
              options: [
                'ではないでした',
                'ではなかった / であたらなかった',
                'じゃない',
                'でしたない',
              ],
              correctAnswerIndex: 1,
              explanation: 'Dewa nakatta.',
            },
            {
              id: 'ja-n3-u5-l4-q3',
              question: '«Ushbu tadqiqot natijasi quyidagicha»:',
              options: [
                '結果[けっか]だ',
                '結果[けっか]でした',
                '研究[けんきゅう]の 結果[けっか]は 次[つぎ]の 通[とお]りで ある',
                '結果[けっか]は 次[つぎ]です',
              ],
              correctAnswerIndex: 2,
              explanation: 'Tsugi no toori de aru.',
            },
            {
              id: 'ja-n3-u5-l4-q4',
              question: "JLPT N3 Dokkai matnlarining aksariyati qaysi uslubda yozilgan bo'ladi?",
              options: [
                'Faqat bolalar tilida',
                'Inglizcha',
                'Katakana bilan',
                'Oddiy yozma (だ・である) uslubida',
              ],
              correctAnswerIndex: 3,
              explanation: 'だ・である style.',
            },
            {
              id: 'ja-n3-u5-l4-q5',
              question:
                '論文[ろんぶん]や レポートで「〜です・〜ます」の 代[か]わりに 最[もっと]も 適[てき]した 文末[ぶんまつ]は？',
              options: ['〜である / 〜だ', '〜じゃん', '〜だよ', '〜でございます'],
              correctAnswerIndex: 0,
              explanation:
                'Akademik va rasmiy maqolalarda da/de aru uslubi (だ・である調) qoʻllanadi.',
            },
            {
              id: 'ja-n3-u5-l4-q6',
              question: '「とても」の レポート用[よう]の 改[あらた]まった 表現[ひょうげん]は？',
              options: ['極[きわ]めて / 非常[ひじょう]に', 'めっちゃ', 'すっごく', 'かなり'],
              correctAnswerIndex: 0,
              explanation:
                'Rasmiy yozma tilda "juda" soʻzi: 極めて (Kiwamete) yoki 非常に (Hijou ni).',
            },
            {
              id: 'ja-n3-u5-l4-q7',
              question: '「だから」の アカデミックな 接続[せつぞく]詞[し]は？',
              options: ['したがって / それゆえに', 'でも', 'だけど', 'それでね'],
              correctAnswerIndex: 0,
              explanation: 'Ilmiy matnlarda "shuning uchun" bogʻlovchisi: したがって (Shitagatte).',
            },
            {
              id: 'ja-n3-u5-l4-q8',
              question: '「考[かんが]えられます」を である調[ちょう]に 直[なお]すと？',
              options: [
                '考[かんが]えられる',
                '考[かんが]えるである',
                '考[かんが]えらである',
                '考[かんが]えるだ',
              ],
              correctAnswerIndex: 0,
              explanation: 'Feʼlning oddiy zamon shakli (Futsuutai): 考えられる.',
            },
            {
              id: 'ja-n3-u5-l4-q9',
              question:
                '公式[こうしき]な 報告[ほうこく]書[しょ]で 避[さ]けるべき 言葉[ことば]遣[づか]いは？',
              options: [
                '口語[こうご]表現[ひょうげん]（〜ちゃう、〜しちゃった）',
                '受身形[うけみけい]',
                '専門[せんもん]用語[ようご]',
                '漢字[かんじ]表記[ひょうき]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Rasmiy hujjatlarda ogʻzaki soʻzlashuv qisqartmalari (〜ちゃう) qatʼiyan ishlatilmaydi.',
            },
            {
              id: 'ja-n3-u5-l4-q10',
              question:
                '「しかし」と 同じ[おなじ] 逆接[ぎゃくせつ]の 改[あらた]まった 論文[ろんぶん]表現[ひょうげん]は？',
              options: ['だが / しかしながら', 'でもさ', 'だけど', 'なのにね'],
              correctAnswerIndex: 0,
              explanation: 'Yozma ilmiy tilda ammo/biroq: だが yoki しかしながら.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u5-l5',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u5',
    unitTitle: 'Unit 5: Kanji Mastery & Reading',
    language: 'ja',
    level: 'N3',
    lessonNumber: 25,
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
          explanation:
            "A matn: Qog'oz kitoblarning hid va sahifani his qilish kabi taktil xususiyatlarini afzal ko'radi. B matn: Elektron kitoblarning ko'chma qulayligi va xotira sig'imini maqtaydi. Savol: Ikkala muallif qaysi nuqtada o'zaro HAMFIKR?",
          keyPoints: [
            "Ikkala matnning umumiy kesishgan nuqtasini topish: «O'qish orqali intellektual o'sish muhimligi».",
          ],
          grammarRules: [
            {
              pattern: 'N3 Long Dokkai: Comparative Reading (統合読解)',
              meaning: 'Ikki xil muallifning bir mavzudagi fikrlarini qiyosiy tahlil qilish.',
              usageNotes:
                "A matn: Qog'oz kitoblarning hid va sahifani his qilish kabi taktil xususiyatlarini afzal ko'radi. B matn: Elektron kitoblarning ko'chma qulayligi va xotira sig'imini maqtaydi. Savol: Ikkala muallif qaysi nuqtada o'zaro HAMFIKR?",
              examples: [
                {
                  sentence: '日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。',
                  translation: "Har kuni yapon tilini o'rganaman.",
                },
              ],
            },
          ],
          vocabulary: [
            {
              term: '比較[ひかく]',
              reading: 'hikaku',
              meaning: 'Solishtirish, qiyoslash',
              exampleSentence:
                '二[ふた]つの 文章[ぶんしょう]を 比較[ひかく]して 読[よ]み取[と]ります。',
              exampleTranslation: 'Ikki matnni qiyoslagan holda mazmunini anglaymiz.',
            },
            {
              term: '共通点[きょうつうてん]',
              reading: 'kyoutsuuten',
              meaning: 'Umumiy, mushtarak jihat',
              exampleSentence:
                '両者[りょうしゃ]の 意見[いけん]には 多[おお]くの 共通点[きょうつうてん]が あります。',
              exampleTranslation: 'Har ikki tomonning fikrida koʻplab oʻxshash jihatlar mavjud.',
            },
            {
              term: '相違点[そういてん]',
              reading: 'souiten',
              meaning: 'Farqli jihat, ziddiyat',
              exampleSentence:
                '従来[じゅうらい]の 方式[ほうしき]との 相違点[そういてん]を 明確[めいかく]に します。',
              exampleTranslation: 'Oldingi usul bilan hozirgisi oʻrtasidagi farqni aniqlaymiz.',
            },
            {
              term: '視点[してん]',
              reading: 'shiten',
              meaning: 'Qarash, nuqtayi nazar',
              exampleSentence:
                '異[こと]なる 視点[してん]から 問題[もんだい]を 捉[とら]え直[なお]します。',
              exampleTranslation: 'Muammoga boshqa tomondan nazar solamiz.',
            },
            {
              term: '双方[そうほう]',
              reading: 'souhou',
              meaning: 'Har ikki tomon, tomonlarning ikkisi ham',
              exampleSentence:
                '双方[そうほう]の メリットを 考慮[こうりょ]して 決定[けってい]しました。',
              exampleTranslation: 'Har ikki tomonning manfaatlarini hisobga olib qaror qildik.',
            },
            {
              term: '分析[ぶんせき]する',
              reading: 'bunseki suru',
              meaning: 'Tahlil qilmoq, analiz qilmoq',
              exampleSentence:
                '市場[しじょう]の 動向[どうこう]を 正確[せいかく]に 分析[ぶんせき]します。',
              exampleTranslation: 'Bozor harakatini aniq va xolis tahlil qilamiz.',
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l5-s2',
        title: 'Tahlil Mashqi',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Ikkala muallifning mushtarak fikrini tanlang.',
          exercises: [
            {
              id: 'ja-n3-u5-l5-e1',
              type: 'multiple-choice',
              prompt: "Ikkala muallif qaysi masalada to'liq yakdil fikrda?",
              options: [
                "Smartfonlarni o'chirish kerak",
                "Elektron kitoblar bepul bo'lishi kerak",
                "Qog'oz kitoblar butunlay yo'qolishi kerak",
                "Kitobning formati qanday bo'lishidan qat'i nazar, mutolaa inson tafakkurini boyitishi",
              ],
              correctAnswer: 3,
              explanation: 'Universal value of reading.',
            },
            {
              id: 'ja-n3-u5-l5-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「困難[こんなん]を 克服[こくふく]して 成功[せいこう]しました。」",
              options: ['食事[しょくじ]', '運転[うんてん]', '散歩[さんぽ]', '克服[こくふく]する'],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"克服[こくふく]する\" (Yengib oʻtmoq, bartaraf etmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u5-l5-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u5-l5-q1',
              question: "Qiyosiy Dokkai topshiriqlarida eng muhim ko'nikma nima?",
              options: [
                'Tezroq sahifani yopish',
                "Faqat bitta matnni o'qish",
                'Matnni yodlab olish',
                "A va B matnlarining o'xshash va farqli tomonlarini solishtirib xulosalash",
              ],
              correctAnswerIndex: 3,
              explanation: 'Synthesizing commonalities & divergences.',
            },
            {
              id: 'ja-n3-u5-l5-q2',
              question: "「共通[きょうつう]している」so'zining ma'nosi:",
              options: [
                "Kichik bo'lgan",
                "Farqli bo'lgan",
                "Umumiy / Bir xil bo'lgan",
                "Eski bo'lgan",
              ],
              correctAnswerIndex: 2,
              explanation: 'Common to both.',
            },
            {
              id: 'ja-n3-u5-l5-q3',
              question: "「異[こと]なる」so'zining ma'nosi:",
              options: [
                "Bir xil bo'lmoq",
                "Farq qilmoq / Boshqacha bo'lmoq",
                "Yo'qolmoq",
                "To'xtamoq",
              ],
              correctAnswerIndex: 1,
              explanation: 'To differ.',
            },
            {
              id: 'ja-n3-u5-l5-q4',
              question:
                "JLPT N3 imtihonida Dokkai bo'limi umumiy ballning qancha qismini tashkil etadi?",
              options: [
                "60 ball (umumiy 180 balldan til bilimlari va o'qish birgalikda 120 ball beradi)",
                '180 ball',
                '5 ball',
                '10 ball',
              ],
              correctAnswerIndex: 0,
              explanation: 'Substantial weighted portion of exam.',
            },
            {
              id: 'ja-n3-u5-l5-q5',
              question:
                '複数[ふくすう]の 文章[ぶんしょう]を 比[くら]べて 読[よ]む（統合[とうごう]読解[どっかい]）時[とき]の 最重要[さいじゅうよう]ポイントは？',
              options: [
                '両者[りょうしゃ]の「共通[きょうつう]点[てん]」と「相違[そうい]点[てん]（意見[いけん]の 食[く]い違[ちが]い）」を 整理[せいり]すること',
                '漢字[かんじ]の 多[おお]い 文章[ぶんしょう]だけを 信[しん]じること',
                '最初[さいしょ]の 文章[ぶんしょう]だけを 読[よ]むこと',
                '時間[じかん]を 気[き]にせず 読[よ]むこと',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Qiyosiy oʻqishda ikki matn oʻrtasidagi oʻxshashlik va qarama-qarshi farqli fikrlarni ajratib olish zarur.',
            },
            {
              id: 'ja-n3-u5-l5-q6',
              question:
                'A文[ぶん]と B文[ぶん]の 両方[りょうほう]に 共通[きょうつう]する 主題[しゅだい]を 答[こた]える 問題[もんだい]の 解[と]き方[かた]は？',
              options: [
                '両方[りょうほう]の 文章[ぶんしょう]に 何度[なんど]も 登場[とうじょう]する キーワードに 着目[ちゃくもく]する',
                'A文[ぶん]の 1文[ぶん]目[め]だけを 選[えら]ぶ',
                'B文[ぶん]の 筆者[ひっしゃ]の 年齢[ねんれい]を 調[しら]べる',
                '関係[かんけい]ない 文[ぶん]を 選[えら]ぶ',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ikkala matnda ham takrorlanayotgan kalit soʻz va umumiy muammoga eʼtibor beriladi.',
            },
            {
              id: 'ja-n3-u5-l5-q7',
              question:
                '「一方[いっぽう]では〜、他方[たほう]では〜」という 対比[たいひ]表現[ひょうげん]の 目的[もくてき]は？',
              options: [
                '物事[ものごと]の 二面[にめん]性[せい]を 明確[めいかく]に 比較[ひかく]すること',
                '話[はな]し手[て]の 混乱[こんらん]を 表[あらわ]すこと',
                '単[たん]なる 言葉[ことば]遊[あそ]び',
                '時間[じかん]の 経過[けいか]を 示[しめ]すこと',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Bir tomondan..., boshqa tomondan... iborasi masalaning ikki qirrasini qiyoslash uchun xizmat qiladi.',
            },
            {
              id: 'ja-n3-u5-l5-q8',
              question:
                'グラフや 図表[ずひょう]が 付[つ]いた 読解[どっかい]で、最初[さいしょ]に 見[み]るべき 場所[ばしょ]は？',
              options: [
                'タイトルと 縦軸[たてじく]・横軸[よこじく]の 単位[たんい]',
                '色[いろ]の ついた 部分[ぶぶん]だけ',
                '一番[いちばん] 小[ちい]さい 数字[すうじ]',
                '印刷[いんさつ]の 日付[ひづけ]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Jadvalli matnlarda eng avval sarlavha va grafik oʻqlarining oʻlchov birliklari tekshiriladi.',
            },
            {
              id: 'ja-n3-u5-l5-q9',
              question:
                '「筆者[ひっしゃ]Aと 筆者[ひっしゃ]Bの 意見[いけん]の 食い違い」を 問[と]われた 際[さい]の 正解[せいかい]の 条件[じょうけん]は？',
              options: [
                '一方[いっぽう]の 主張[しゅちょう]に 対[たい]して、もう 一方[いっぽう]が 異[こと]なる 立場[たちば]をとっている 根拠[こんきょ]が 本文[ほんぶん]に 明記[めいき]されていること',
                'どちらも 述[の]べていないこと',
                '自説[じせつ]と 一致[いっち]していること',
                '単語[たんご]が 長[なが]いこと',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ikkala muallifning qarama-qarshi pozitsiyasi aynan matndagi dalillar bilan asoslangan boʻlishi shart.',
            },
            {
              id: 'ja-n3-u5-l5-q10',
              question:
                '長文[ちょうぶん]読解[どっかい]の 時間[じかん]配分[はいぶん]で 理想[りそう]的[てき]な 戦略[せんりゃく]は？',
              options: [
                'まず 設問[せつもん]に 目[め]を 通[とお]してから 本文[ほんぶん]の 該当[がいとう]箇所[かしょ]を 探[さが]す（スキャニング）',
                '最後[さいご]まで 何度[なんど]も 全文[ぜんぶん]を 音読[おんどく]する',
                '辞書[じしょ]を 想像[そうぞう]して 止[と]まる',
                '勘[かん]で 全[すべ]て マークする',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avval savolni koʻrib olib, soʻng matndan kerakli javob qismini maqsadli qidirish eng samarali usuldir.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u6-l1',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u6',
    unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
    language: 'ja',
    level: 'N3',
    lessonNumber: 26,
    title: 'N3 Choukai: Summary & Gist Comprehension (概要理解)',
    description:
      'Eshitishning umumiy mazmun tushunish qismi: batafsil raqamlar emas, balki asosiy mavzuni anglash.',
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
          explanation:
            "Gaiyou Rikai bo'limida radio eshittirish yoki monolog beriladi. Savol odatda quyidagicha bo'ladi:「話[はな]し手[て]は 何[なに]について 話[はな]していますか」 (Gapiruvchi nima haqida gapirmoqda?).",
          keyPoints: [
            "Mayda tafsilotlarga chalg'imasdan, umumiy asosiy mavzuni va muallifning xulosasini ilg'ab olish.",
          ],
          grammarRules: [
            {
              pattern: 'N3 Choukai: Summary & Gist Comprehension (概要理解)',
              meaning:
                'Eshitishning umumiy mazmun tushunish qismi: batafsil raqamlar emas, balki asosiy mavzuni anglash.',
              usageNotes:
                "Gaiyou Rikai bo'limida radio eshittirish yoki monolog beriladi. Savol odatda quyidagicha bo'ladi:「話[はな]し手[て]は 何[なに]について 話[はな]していますか」 (Gapiruvchi nima haqida gapirmoqda?).",
              examples: [
                {
                  sentence: '日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。',
                  translation: "Har kuni yapon tilini o'rganaman.",
                },
              ],
            },
          ],
          vocabulary: [
            {
              term: '概要[がいよう]',
              reading: 'gaiyou',
              meaning: 'Asosiy mazmun, qisqacha maʼlumot',
              exampleSentence:
                '話[はなし]の 概要[がいよう]を つかむ ことが 聴解[ちょうかい]の コツです。',
              exampleTranslation: 'Nutqning asosiy mazmunini ilgʻab olish tinglashning siridir.',
            },
            {
              term: 'テーマ',
              reading: 'teema',
              meaning: 'Mavzu, bosh yoʻnalish',
              exampleSentence:
                '今日[きょう]の 講義[こうぎ]の テーマは 環境[かんきょう]保護[ほご]です。',
              exampleTranslation: 'Bugungi maʼruzaning mavzusi atrof-muhitni muhofaza qilishdir.',
            },
            {
              term: '意図[いと]',
              reading: 'ito',
              meaning: 'Niyat, koʻzlangan maqsad',
              exampleSentence:
                '話[はな]し手[て]の 意図[いと]を 正[ただ]しく 読[よ]み取[と]りましょう。',
              exampleTranslation: 'Soʻzlovchining asl niyatini toʻgʻri tushunishga harakat qiling.',
            },
            {
              term: '結論[けつろん]',
              reading: 'ketsuron',
              meaning: 'Xulosa',
              exampleSentence:
                '最後[さいご]に 述[の]べられた 結論[けつろん]に 注目[ちゅうもく]します。',
              exampleTranslation: 'Oxirida aytilgan xulosaga eʼtibor qaratamiz.',
            },
            {
              term: '呼[よ]びかけ',
              reading: 'yobikake',
              meaning: 'Murojaat, chaqiriq',
              exampleSentence:
                '市民[しみん]への 節電[せつでん]の 呼[よ]びかけが 行[おこな]われました。',
              exampleTranslation: 'Aholiga elektrni tejash boʻyicha murojaat qilindi.',
            },
            {
              term: '要点[ようてん]',
              reading: 'youten',
              meaning: 'Eng muhim nuqta, mohiyat',
              exampleSentence: '要点[ようてん]を メモしながら 聞[き]いて ください。',
              exampleTranslation: 'Eng muhim nuqtalarni yozib olgan holda tinglang.',
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l1-s2',
        title: 'Eshitish Mashqi',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: 'Umumiy mavzuni tanlang.',
          exercises: [
            {
              id: 'ja-n3-u6-l1-e1',
              type: 'multiple-choice',
              prompt:
                "Spiker shahar ekologiyasida velosipedlarning o'rni va yangi veloyo'laklar haqida gapirdi. Asosiy mavzu:",
              options: [
                'Ekologik toza shahar transportini rivojlantirish',
                'Avtomobil sotib olish',
                'Velosiped narxlari',
                'Poyezd qatnovi',
              ],
              correctAnswer: 0,
              explanation: 'Eco-friendly urban transport development.',
            },
            {
              id: 'ja-n3-u6-l1-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「教育[きょういく]は 人生[じんせい]に 深[ふか]い 影響[えいきょう]を 与[あた]えます。」",
              options: [
                '食事[しょくじ]',
                '散歩[さんぽ]',
                '影響[えいきょう]を与える',
                '運転[うんてん]',
              ],
              correctAnswer: 2,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"影響[えいきょう]を与える\" (Taʼsir koʻrsatmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l1-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u6-l1-q1',
              question: "Gaiyou Rikai savollarida nima so'raladi?",
              options: [
                'Nutqning asosiy mavzusi va maqsadi',
                "Har bir so'zning imlosi",
                "Muallifning tug'ilgan sanasi",
                'Poyezd chiptasi narxi',
              ],
              correctAnswerIndex: 0,
              explanation: 'Overall main theme & speaker stance.',
            },
            {
              id: 'ja-n3-u6-l1-q2',
              question:
                'Spiker «つまり (Tsumari)...» yoki «要するに (Yousuru ni)...» desa, nima aytiladi?',
              options: [
                "Yangi mavzuga o'tish",
                "Kechirim so'rash",
                "O'z fikrining yakuniy xulosasi va asosiy mazmuni",
                'Salomlashish',
              ],
              correctAnswerIndex: 2,
              explanation: 'Core summary statement.',
            },
            {
              id: 'ja-n3-u6-l1-q3',
              question: 'N3 Choukai paytida yozib borish (memo qilish) ruxsat etiladimi?',
              options: [
                'Ha, test kitobchasiga xohlagancha qaydlar yozib borish mumkin',
                'Faqat barmoq bilan chiziladi',
                "Faqat dastro'molga yozish mumkin",
                'Taqiqlanadi',
              ],
              correctAnswerIndex: 0,
              explanation: 'Taking notes in test booklet is allowed.',
            },
            {
              id: 'ja-n3-u6-l1-q4',
              question: '«最も 伝[つた]えたい こと» nimani bildiradi?',
              options: [
                'Kechagi xabar',
                'Ob-havo',
                'Eng sirli gap',
                "Eng yetkazmoqchi bo'lgan asosiy fikr",
              ],
              correctAnswerIndex: 3,
              explanation: 'Primary message intended by speaker.',
            },
            {
              id: 'ja-n3-u6-l1-q5',
              question:
                '概要[がいよう]理解[りかい]（Gaiyou rikai）問題[もんだい]の 最大[さいだい]の 特徴[とくちょう]は？',
              options: [
                '問題[もんだい]用紙[ようし]に 質問[しつもん]も 選択肢[せんたくし]も 書[か]いておらず、全[すべ]て 音声[おんせい]で 流[なが]れること',
                '絵[え]を 見[み]て 答[こた]えること',
                '文字[もじ]を 書[か]く 試験[しけん]であること',
                '音楽[おんがく]を 聴[き]くこと',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Gaiyou rikai boʻlimida savol va variantlar qogʻozda yozilmaydi, barchasi audio orqali eshittiriladi.',
            },
            {
              id: 'ja-n3-u6-l1-q6',
              question:
                '話[はな]し手[て]が 最[もっと]も 伝[つた]えたい「テーマ」を つかむ 際[さい]の キーフレーズは？',
              options: [
                '「一番[いちばん] 大切[たいせつ]なのは〜」「私[わたし]が 言[い]いたいのは〜」',
                '「こんにちは」',
                '「では、また」',
                '「失礼[しつれい]します」',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Gapiruvchining asosiy muddaosi koʻpincha "eng muhimi...", "aytmoqchi boʻlganim..." kabi iboralar ortidan keladi.',
            },
            {
              id: 'ja-n3-u6-l1-q7',
              question:
                '留守番[るすばん]電話[でんわ]の メッセージで 最優先[さいゆうせん]で 聞[き]き取[と]るべき 情報[じょうほう]は？',
              options: [
                '誰[だれ]が、何[なに]の 用件[ようけん]で、次[つぎ]に 何[なに]を してほしいのか',
                '電話[でんわ]代[だい]',
                '今日[きょう]の 天気[てんき]',
                '相手[あいて]の 趣味[しゅみ]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Kim, qanday masala yuzasidan va keyingi qadam sifatida nima qilish kerakligini ilgʻab olish zarur.',
            },
            {
              id: 'ja-n3-u6-l1-q8',
              question:
                '音声[おんせい]を 聴[き]きながら メモを 取[と]る 際[さい]の 賢[かしこ]い コツは？',
              options: [
                '重要[じゅうよう]な 名詞[めいし]、数字[すうじ]、接続[せつぞく]詞[し]（しかし・だから）だけを 記号[きごう]や 略語[りゃくご]で 書[か]く',
                '聞こえた 日本語[にほんご]を 漢字[かんじ]で 全文[ぜんぶん] 書[か]き留[と]める',
                '何[なに]も 書[か]かずに 目[め]を つぶる',
                '絵[え]を 描[えが]く',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Faqat muhim kalit soʻzlar, sonlar va bogʻlovchilarni qisqacha belgilab borish eslab qolishni osonlashtiradi.',
            },
            {
              id: 'ja-n3-u6-l1-q9',
              question:
                '話[はな]しの 途中[とちゅう]で「実は（じつは）」が 聞[き]こえたら、何[なに]を 警戒[けいかい]すべきか？',
              options: [
                'それまでの 前置[まえお]きとは 異[こと]なる、本当[ほんとう]の 本音[ほんね]や 変更[へんこう]点[てん]が 語[かた]られること',
                '話[はな]しが 終[お]わること',
                '嘘[うそ]を ついていること',
                '音楽[おんがく]が 鳴[な]ること',
              ],
              correctAnswerIndex: 0,
              explanation:
                '「実は」 (Aslida...) dan keyin gapning haqiqiy tub mohiyati va kutilmagan oʻzgarish eʼlon qilinadi.',
            },
            {
              id: 'ja-n3-u6-l1-q10',
              question:
                '聴解[ちょうかい]で 1問[もん] 聞[き]き逃[のが]してしまった 時[とき]の 最善[さいぜん]の 対処[たいしょ]法[ほう]は？',
              options: [
                'すっぱり 諦[あきら]めて 直感[ちょっかん]で マークし、次[つぎ]の 問題[もんだい]の 音声[おんせい]に 集中[しゅうちゅう]する',
                'その 問題[もんだい]を 考[かんが]え続[つづ]けて 3問[もん] 聞[き]き逃[のが]す',
                '試験[しけん]官[かん]に もう 一度[いちど] 再生[さいせい]を 頼[たの]む',
                'テストを やめる',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Oʻtgan savolga chalgʻimay darhol keyingi savolga diqqatni qaratish imtihonning oltin qoidasidir.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u6-l2',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u6',
    unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
    language: 'ja',
    level: 'N3',
    lessonNumber: 27,
    title: 'Star (*) Grammar Mastery: Scrambled Sentence Logic',
    description:
      'JLPT ning yulduzcha (*) grammatik topshiriqlarini mantiqiy sintaksis orqali yechish texnikasi.',
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
          explanation:
            "Gapda 4 ta bo'sh joy beriladi: ___ ___ ★ ___ . Variantlardagi 4 ta bo'lakni grammatik qoidalar asosida to'g'ri joylashtirib, ★ turgan 3-o'rindagi raqamni topish talab etiladi.",
          keyPoints: ["Juftliklarni oldindan topib olish (masalan: Sifat + Ot, Yuklama + Fe'l)."],
          grammarRules: [
            {
              pattern: 'Star (*) Grammar Mastery: Scrambled Sentence Logic',
              meaning:
                'JLPT ning yulduzcha (*) grammatik topshiriqlarini mantiqiy sintaksis orqali yechish texnikasi.',
              usageNotes:
                "Gapda 4 ta bo'sh joy beriladi: ___ ___ ★ ___ . Variantlardagi 4 ta bo'lakni grammatik qoidalar asosida to'g'ri joylashtirib, ★ turgan 3-o'rindagi raqamni topish talab etiladi.",
              examples: [
                {
                  sentence: '日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。',
                  translation: "Har kuni yapon tilini o'rganaman.",
                },
              ],
            },
          ],
          vocabulary: [
            {
              term: '語順[ごじゅん]',
              reading: 'gojun',
              meaning: 'Gapda soʻzlar tartibi',
              exampleSentence:
                '日本語[にほんご]の 正[ただ]しい 語順[ごじゅん]を 身[み]につけましょう。',
              exampleTranslation: 'Yapon tilida soʻzlarning toʻgʻri ketma-ketligini oʻrganing.',
            },
            {
              term: '修飾[しゅうしょく]する',
              reading: 'shuushoku suru',
              meaning: 'Aniqlovchi boʻlib kelmoq, sifatlamoq',
              exampleSentence:
                '名詞[めいし]を 前[まえ]から 修飾[しゅうしょく]する 形[かたち]を 確認[かくにん]します。',
              exampleTranslation:
                'Ot soʻz turkumi oldidan kelib uni sifatlovchi shaklni tekshiramiz.',
            },
            {
              term: '接続[せつぞく]する',
              reading: 'setsuzoku suru',
              meaning: 'Bogʻlanmoq, grammatik ulanmoq',
              exampleSentence:
                '動詞[どうし]の 辞書形[じしょけい]に 接続[せつぞく]する 文法[ぶんぽう]です。',
              exampleTranslation: 'Feʼlning lugʻat shakliga ulanadigan grammatik qoidadir.',
            },
            {
              term: '文脈[ぶんみゃく]',
              reading: 'bunmyaku',
              meaning: 'Kontekst, matn mazmuni',
              exampleSentence:
                '文脈[ぶんみゃく]から 最[もっと]も 自然[しぜん]な 表現[ひょうげん]を 導[みちび]きます。',
              exampleTranslation: 'Kontekstdan kelib chiqib eng tabiiy ifodani tanlaymiz.',
            },
            {
              term: '構造[こうぞう]',
              reading: 'kouzou',
              meaning: 'Tuzilma, grammatik konstruksiya',
              exampleSentence:
                '複雑[ふくざつ]な 文[ぶん]の 構造[こうぞう]を 分解[ぶんかい]して 理解[りかい]します。',
              exampleTranslation: 'Murakkab gap tuzilmasini boʻlaklarga ajratib anglaymiz.',
            },
            {
              term: '並[なら]べ替[か]え',
              reading: 'narabekahe',
              meaning: 'Qaytadan tartib bilan joylashtirish (Star masalasi)',
              exampleSentence:
                '星印[ほしじるし]に 入[はい]る 単語[たんご]を 並[なら]べ替[か]えて 答[こた]えます。',
              exampleTranslation:
                'Yulduzcha oʻrniga keluvchi soʻzni toʻgʻri tartiblab javob beramiz.',
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l2-s2',
        title: 'Yulduzcha Mashqi',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "Yulduzcha o'rnidagi to'g'ri raqamni toping.",
          exercises: [
            {
              id: 'ja-n3-u6-l2-e1',
              type: 'multiple-choice',
              prompt:
                "Gap:「雨が [ 1. 降った 2. にも 3. かかわらず 4. 試合は ] 行われた。」 To'g'ri tartib: 1 -> 2 -> 3 -> 4. Yulduzcha 3-o'rinda qaysi son turadi?",
              options: ['1', '2', '4', '3 (かかわらず)'],
              correctAnswer: 3,
              explanation: '降った(1) にも(2) かかわらず(3) 試合は(4).',
            },
            {
              id: 'ja-n3-u6-l2-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「健康[けんこう]を 維持[いじ]するために 運動[うんどう]します。」",
              options: ['運転[うんてん]', '維持[いじ]する', '散歩[さんぽ]', '食事[しょくじ]'],
              correctAnswer: 1,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"維持[いじ]する\" (Saqlab turmoq (holatni)).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l2-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u6-l2-q1',
              question: 'Yulduzcha savollarini yechishda eng samarali dastlabki qadam nima?',
              options: [
                'Hamma javobni 1 deb belgilash',
                "Faqat oxirgi so'zni o'qish",
                'Tavakkal qilish',
                "Bir-biriga grammatik bog'lanadigan juftliklarni (chunk) birlashtirib olish",
              ],
              correctAnswerIndex: 3,
              explanation: 'Find grammatical chunks & collocational pairs.',
            },
            {
              id: 'ja-n3-u6-l2-q2',
              question: '「〜にも かかわらず」grammatikasi nimani bildiradi?',
              options: [
                '... qaramasdan (Despite / In spite of)',
                '... sababli',
                "... bo'lgach",
                '... uchun',
              ],
              correctAnswerIndex: 0,
              explanation: 'Despite / In spite of.',
            },
            {
              id: 'ja-n3-u6-l2-q3',
              question: 'N3 imtihonida nechta yulduzcha (*) savoli tushadi?',
              options: ['100 ta', 'Har yili 5 ta savol', '50 ta', '1 ta'],
              correctAnswerIndex: 1,
              explanation: '5 questions in Bunpou section.',
            },
            {
              id: 'ja-n3-u6-l2-q4',
              question: "Agar variantda «Ot + にとって» bo'lsa, u qanday ma'no beradi?",
              options: ['... haqida', '... dan', '... uchun / ... nazarida', '... bilan birga'],
              correctAnswerIndex: 2,
              explanation: 'From the standpoint of.',
            },
            {
              id: 'ja-n3-u6-l2-q5',
              question:
                '星[ほし]印[じるし]（★）問題[もんだい]で 正[ただ]しい 順番[じゅんばん]に 並[なら]べ替[か]える 基本[きほん]手順[てじゅん]は？',
              options: [
                '意味[いみ]の つながる 2語[ご]の ペア（コロケーション）を まず 作[つく]ること',
                '長[なが]い 単語[たんご]から 順[じゅん]に 並[なら]べる',
                'あいうえお順[じゅん]に 並[なら]べる',
                '適当[てきとう]に 並[なら]べる',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Yulduzcha testlarida bir-biriga bogʻlanuvchi 2 ta soʻz birikmasini (juftlikni) topib olish jumboqni tez yechadi.',
            },
            {
              id: 'ja-n3-u6-l2-q6',
              question:
                '健康[けんこう]の ため、毎日[まいにち] ［ 1. ように 2. 野菜[やさい]を 3. 食[た]べる 4. たくさん ］ ★ しています。★に入るのは？',
              options: ['1', '2', '3', '4'],
              correctAnswerIndex: 0,
              explanation:
                'Toʻgʻri tartib: 野菜を(2) たくさん(4) 食べる(3) ように(1) しています. Demak, ★ oʻrnida 1 (ように) turadi.',
            },
            {
              id: 'ja-n3-u6-l2-q7',
              question:
                'どんなに ［ 1. あきらめないで 2. つらく 3. 頑張[がんば]る 4. ても ］ ★ つもりだ。★に入るのは？',
              options: ['1', '2', '3', '4'],
              correctAnswerIndex: 0,
              explanation:
                'Toʻgʻri tartib: つらく(2) ても(4) あきらめないで(1) 頑張る(3) つもりだ. Demak, 3-oʻrindagi ★ da 1 turadi.',
            },
            {
              id: 'ja-n3-u6-l2-q8',
              question:
                '文末[ぶんまつ]に「〜わけがない」が ある 場合[ばあい]、直前[ちょくぜん]に 来[く]る 品詞[ひんし]の 形[かたち]は？',
              options: [
                '普通[ふつう]形[けい]（名詞[めいし]なら な/である、な形容詞[けいようし]なら な/である）',
                'ます形[けい]',
                '命令[めいれい]形[けい]',
                '意志[いし]形[けい]',
              ],
              correctAnswerIndex: 0,
              explanation: '〜わけがない oldidan soʻzlarning futsuutai (oddiy) shakli keladi.',
            },
            {
              id: 'ja-n3-u6-l2-q9',
              question:
                '雨[あめ]が ［ 1. 中止[ちゅうし]に 2. 降[ふ]った 3. なった 4. ために ］ 試合[しあい]が ★ 。★に入るのは？',
              options: ['1', '2', '3', '4'],
              correctAnswerIndex: 0,
              explanation:
                'Toʻgʻri tartib: 降った(2) ために(4) 試合が 中止に(1) なった(3). 3-oʻrindagi ★ da 1 (中止に) keladi.',
            },
            {
              id: 'ja-n3-u6-l2-q10',
              question:
                '並[なら]べ替[か]え 問題[もんだい]で「助詞[じょし]（は・が・を・に）」の 後[うしろ]に 来[く]る ものは？',
              options: [
                '助詞[じょし]と 文法[ぶんぽう]的[てき]に 結[むす]びつく 述語[じゅつご]や 名詞[めいし]',
                '読点[とうてん]（、）だけ',
                '関係[かんけい]のない 疑問[ぎもん]詞[し]',
                '英語[えいご]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Yuklamalar (o, ni, ga) oʻziga mos feʼl yoki ot bilan qatʼiy sintaktik munosabatga kirishadi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u6-l3',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u6',
    unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
    language: 'ja',
    level: 'N3',
    lessonNumber: 28,
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
          explanation:
            "1. Qo'ng'iroqni qabul qilish:「お電話[でんわ]ありがとうございます。〇〇商事[しょうじ]の アリでございます。」 2. Doimiy hamkorga salom:「いつも 大変[たいへん] お世話[せわ]に なっております。」 3. Uchrashuvni tasdiqlash:「明日[あした]の 14時[じゅうよじ]に そちらへ 伺[うかが]います。」",
          vocabulary: [
            {
              term: '伝言[でんごん]',
              reading: 'dengon',
              meaning: 'Xabar qoldirish (ogʻzaki)',
              exampleSentence: '部長[ぶちょう]に 伝言[でんごん]を お願[ねが]い できますか。',
              exampleTranslation: 'Boʻlim boshligʻiga xabarimni yetkaza olasizmi?',
            },
            {
              term: '折[お]り返[かえ]し',
              reading: 'orikaeshi',
              meaning: 'Qayta qoʻngʻiroq qilish',
              exampleSentence: '後[のち]ほど 折[お]り返[かえ]し お電話[でんわ] いたします。',
              exampleTranslation: 'Birozdan soʻng oʻzim qaytadan qoʻngʻiroq qilaman.',
            },
            {
              term: '担当者[たんとうしゃ]',
              reading: 'tantousha',
              meaning: 'Masʼul xodim, javobgar shaxs',
              exampleSentence: '担当者[たんとうしゃ]が ただいま 席[せき]を 外[はず]して おります。',
              exampleTranslation: 'Masʼul xodimimiz ayni daqiqada oʻz joyida emas edi.',
            },
            {
              term: '日程[にってい]調整[ちょうせい]',
              reading: 'nittei chousei',
              meaning: 'Uchrashuv vaqtini kelishish',
              exampleSentence:
                '来週[らいしゅう]の 面談[めんだん]の 日程[にってい]調整[ちょうせい]を させて ください。',
              exampleTranslation:
                'Kelasi haftadagi uchrashuv vaqtini kelishib olishga ijozat bering.',
            },
            {
              term: '承知[しょうち]する',
              reading: 'shouchi suru',
              meaning: 'Tushundim, qabul qildim (rasmiy)',
              exampleSentence: 'かしこまりました。そのように 承知[しょうち]いたしました。',
              exampleTranslation: 'Tushundim. Aynan aytganingizdek bajariladi.',
            },
            {
              term: '恐[おそ]れ入[い]りますが',
              reading: 'osoreirimasu ga',
              meaning: 'Noqulay boʻlsa ham, kechirasiz-ku',
              exampleSentence:
                '恐[おそ]れ入[い]りますが、もう一度[いちど] お名前[なまえ]を 伺[うかが]えますか。',
              exampleTranslation: 'Noqulay boʻlsa ham, ismingizni takrorlab bera olmaysizmi?',
            },
          ],
          grammarRules: [
            {
              pattern: 'N3 Business Etiquette: Phone Calls & Appointment Confirmation',
              meaning:
                'Yapon kompaniyasida telefon orqali muloqot va uchrashuvlarni tasdiqlash Keigosi.',
              usageNotes:
                "1. Qo'ng'iroqni qabul qilish:「お電話[でんわ]ありがとうございます。〇〇商事[しょうじ]の アリでございます。」 2. Doimiy hamkorga salom:「いつも 大変[たいへん] お世話[せわ]に なっております。」 3. Uchrashuvni tasdiqlash:「明日[あした]の 14時[じゅうよじ]に そちらへ 伺[うかが]います。」",
              examples: [
                {
                  sentence: 'いつも お世話[せわ]に なっております。',
                  translation: 'Doimiy hamkorligingiz uchun rahmat.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l3-s2',
        title: 'Mashq',
        type: 'practice',
        estimatedMinutes: 5,
        practiceData: {
          instructions: "To'g'ri biznes telefon formulasini tanlang.",
          exercises: [
            {
              id: 'ja-n3-u6-l3-e1',
              type: 'multiple-choice',
              prompt: "Kompaniyada go'shakni ko'targanda aytiladigan rasmiy ibora qaysi?",
              options: [
                'お電話[でんわ] ありがとうございます。〇〇の アリでございます。',
                'こんにちは。',
                'はい、何ですか。',
                'もしもし、誰ですか。',
              ],
              correctAnswer: 0,
              explanation: 'Odenwa arigatou gozaimasu... de gozaimasu.',
            },
            {
              id: 'ja-n3-u6-l3-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「環境[かんきょう]への 意識[いしき]が 高[たか]まっています。」",
              options: ['意識[いしき]', '運転[うんてん]', '食事[しょくじ]', '散歩[さんぽ]'],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"意識[いしき]\" (Ong, xabardorlik).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l3-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u6-l3-q1',
              question:
                "Biznes qo'ng'iroqlarida «もしもし (Moshimoshi)» deyish nima uchun taqiqlanadi?",
              options: [
                "Chunki bu norasmiy, do'stona ibora bo'lib, biznesda qo'pol hisoblanadi",
                "Farqi yo'q",
                'Chunki bu eshitilmaydi',
                "Chunki bu inglizcha so'z",
              ],
              correctAnswerIndex: 0,
              explanation: 'Moshimoshi is too casual for professional business.',
            },
            {
              id: 'ja-n3-u6-l3-q2',
              question:
                "«Boshlig'im boshqa qo'ng'iroqda gaplashmoqda» kamtarona qanday tushuntiriladi?",
              options: [
                '電話[でんわ]が あります',
                '忙[いそが]しいです',
                '田中[たなか]さんは 話[はな]しています',
                'ただいま 別[べつ]の 電話[でんわ]に 出[で]て おります',
              ],
              correctAnswerIndex: 3,
              explanation: 'Tadaima betsu no denwa ni dete orimasu.',
            },
            {
              id: 'ja-n3-u6-l3-q3',
              question: "Suhbat oxirida go'shakni qo'yishdan oldin aytiladigan ibora:",
              options: ['バイバイ', 'さようなら', '失礼[しつれい]いたします', 'おやすみ'],
              correctAnswerIndex: 2,
              explanation: 'Shitsurei itashimasu.',
            },
            {
              id: 'ja-n3-u6-l3-q4',
              question: '«Kechirasiz, biroz ovozingiz uzoqdan kelmoqda (yaxshi eshitilmayapti)»:',
              options: [
                '聞[き]こえない',
                '恐[おそ]れ入[い]りますが、少[すこ]し お電話[でんわ]が 遠[とお]いようでございます',
                '声[こえ]が 小[ちい]さい',
                '大[おお]きな 声[こえ]で 話[はな]せ',
              ],
              correctAnswerIndex: 1,
              explanation: 'Odenwa ga tooi you de gozaimasu.',
            },
            {
              id: 'ja-n3-u6-l3-q5',
              question:
                '電話[でんわ]を かけて 相手[あいて]が 出[で]た 際[さい]、最初[さいしょ]に 言[い]う 言葉[ことば]は？',
              options: [
                'いつも お世話[せわ]に なっております。〇〇社[しゃ]の 田中[たなか]で ございます。',
                'もしもし、誰[だれ]ですか？',
                '用事[ようじ]が あります。',
                '今[いま] 忙[いそが]しいですか？',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Yapon biznes qoʻngʻirogʻi har doim "Osewa ni natte orimasu. ...shaning Falonchisiman" deb boshlanadi.',
            },
            {
              id: 'ja-n3-u6-l3-q6',
              question:
                '担当[たんとう]者[しゃ]が 外出[がいしゅつ]中の 際[さい]、同僚[どうりょう]として 適切[てきせつ]な 返答[へんとう]は？',
              options: [
                'あいにく 山田[やまだ]は 外出[がいしゅつ]しております。戻[もど]り次第[しだい]、折[お]り返[かえ]し お電話[でんわ]させましょうか。',
                '山田[やまだ]さんはいません。切[き]りますね。',
                'どこかへ 行[い]きました。',
                '山田[やまだ]部長[ぶちょう]様[さま]は お出[で]かけに なられました。',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Xodim tashqarida boʻlsa, qaytib kelishi bilan telefon qilishini taklif etish xushmuomala standartdir.',
            },
            {
              id: 'ja-n3-u6-l3-q7',
              question:
                '相手[あいて]の 名前[なまえ]を もう 一度[いちど] 確認[かくにん]したい 時[とき]の 丁寧[ていねい]な 表現[ひょうげん]は？',
              options: [
                '恐[おそ]れ入[い]りますが、もう 一度[いちど] お名前[なまえ]を 伺[うかが]っても よろしいでしょうか。',
                '名前[なまえ]を もう 一回[いっかい] 言[い]え。',
                '聞[き]こえなかったよ。',
                '名前[なまえ]は何[なに]？',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Kechirasiz, ismingizni yana bir bor eshitsam boʻladimi: 恐れ入りますが、もう一度お名前を伺ってもよろしいでしょうか.',
            },
            {
              id: 'ja-n3-u6-l3-q8',
              question:
                '約束[やくそく]の 日時[にちじ]を 変更[へんこう]したい 際[さい]の 丁重[ていちょう]な 依頼[いらい]は？',
              options: [
                '大変[たいへん] 恐縮[きょうしゅく]ですが、お打[う]ち合[あ]わせの 日時[にちじ]を ご変更[へんこう]いただくことは 可能[かのう]でしょうか。',
                '日[ひ]を 変[か]えて ください。',
                '明日[あした]は 行[い]けません。',
                '勝手[かって]に 変[か]えます。',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Uchrashuv vaqtini oʻzgartirishni soʻrashda: 大変恐縮ですが、日時をご変更いただくことは可能でしょうか.',
            },
            {
              id: 'ja-n3-u6-l3-q9',
              question: '電話[でんわ]を 切[き]る 際[さい]の 決[き]まり文句[もんく]は？',
              options: ['失礼[しつれい]いたします', 'さようなら', 'じゃあね', 'バイバイ'],
              correctAnswerIndex: 0,
              explanation: 'Rasmiy suhbat yakunida: 失礼いたします (Shitsurei itashimasu).',
            },
            {
              id: 'ja-n3-u6-l3-q10',
              question: '電話[でんわ]を 切[き]る 時[とき]のマナーとして 正[ただ]しいものは？',
              options: [
                '電話[でんわ]を かけてきた 相手[あいて]（または お客様[きゃくさま]）が 切[き]ったのを 確認[かくにん]してから 静[しず]かに 切[き]る',
                '話[はな]し終[お]わったら すぐに ガチャリと 切[き]る',
                '相手[あいて]より 先[さき]に 大[おお]きな 音[おと]を 立[た]てて 切[き]る',
                '何[なに]も 言[い]わずに 切[き]る',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Yapon biznes odobiga koʻra, mijoz yoki qoʻngʻiroq qilgan tomon goʻshakni qoʻygach, muloyimlik bilan qoʻyiladi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u6-l4',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u6',
    unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
    language: 'ja',
    level: 'N3',
    lessonNumber: 29,
    title: 'Full JLPT N3 Simulation Exam: Moji, Goi, Bunpou & Dokkai',
    description: "JLPT N3 imtihonining to'liq formatli va vaqt chegaralangan simulatsiya testi.",
    estimatedDurationMinutes: 18,
    icon: '📝',
    steps: [
      {
        id: 'ja-n3-u6-l4-s1',
        title: "N3 To'liq Imtihon Sinovi",
        type: 'learn',
        estimatedMinutes: 5,
        learnData: {
          title: 'JLPT N3 Simulation Strategy',
          explanation:
            "N3 darajasida umumiy 180 ball: 1. Moji/Goi (60 ball) 2. Bunpou/Dokkai (60 ball) 3. Choukai (60 ball). Har bir bo'limdan minimal 19 ball olish va umumiy 95+ ball to'plash talab etiladi.",
          keyPoints: [
            'Time management: Moji/Goi & Bunpou ga 30 daqiqa, Dokkai ga 40 daqiqa ajratish.',
          ],
          grammarRules: [
            {
              pattern: 'Full JLPT N3 Simulation Exam: Moji, Goi, Bunpou & Dokkai',
              meaning:
                "JLPT N3 imtihonining to'liq formatli va vaqt chegaralangan simulatsiya testi.",
              usageNotes:
                "N3 darajasida umumiy 180 ball: 1. Moji/Goi (60 ball) 2. Bunpou/Dokkai (60 ball) 3. Choukai (60 ball). Har bir bo'limdan minimal 19 ball olish va umumiy 95+ ball to'plash talab etiladi.",
              examples: [
                {
                  sentence: '日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。',
                  translation: "Har kuni yapon tilini o'rganaman.",
                },
              ],
            },
          ],
          vocabulary: [
            {
              term: '合格[ごうかく]する',
              reading: 'goukaku suru',
              meaning: 'Imtihondan muvaffaqiyatli oʻtmoq',
              exampleSentence:
                '毎日[まいにち]の 積[つ]み重[かさ]ねで N3に 合格[ごうかく]しました。',
              exampleTranslation: 'Kundalik tinimsiz oʻrganish orqali N3 imtihonidan oʻtdim.',
            },
            {
              term: '配分[はいぶん]',
              reading: 'haibun',
              meaning: 'Taqsimlash (vaqtni, kuchni)',
              exampleSentence:
                '試験[しけん]では 時間[じかん]配分[はいぶん]が 最[もっと]も 重要[じゅうよう]です。',
              exampleTranslation: 'Imtihonda vaqtni toʻgʻri taqsimlash eng muhim omildir.',
            },
            {
              term: '正解[せいかい]',
              reading: 'seikai',
              meaning: 'Toʻgʻri javob',
              exampleSentence:
                '全[すべ]ての 問題[もんだい]で 正解[せいかい]を 目指[めざ]しましょう。',
              exampleTranslation: 'Barcha savollarda toʻgʻri javobga erishishga intiling.',
            },
            {
              term: '見直[みなお]し',
              reading: 'minaoshi',
              meaning: 'Qaytadan tekshirib chiqish',
              exampleSentence: '解答[かいとう]の 後[あと]は 必[かなら]ず 見直[みなお]しを します。',
              exampleTranslation: 'Javoblarni belgilagach, albatta qaytadan tekshiraman.',
            },
            {
              term: '選択肢[せんたくし]',
              reading: 'sentakushi',
              meaning: 'Javob variantlari (A, B, C, D)',
              exampleSentence:
                '紛[まぎ]らわしい 選択肢[せんたくし]に 惑[まど]わされない ように します。',
              exampleTranslation:
                'Chalgʻituvchi variantlarga chalgʻib qolmaslikka harakat qilaman.',
            },
            {
              term: '得点[とくてん]',
              reading: 'tokuten',
              meaning: 'Toʻplangan ball',
              exampleSentence:
                '目標[もくひょう]の 得点[とくてん]を 大[おお]きく 上回[うわまわ]りました。',
              exampleTranslation: 'Koʻzlangan maqsadli balldan ancha yuqori natija koʻrsatdim.',
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l4-s2',
        title: 'Imtihon Mashqi',
        type: 'practice',
        estimatedMinutes: 6,
        practiceData: {
          instructions: "To'g'ri javobni tanlang.",
          exercises: [
            {
              id: 'ja-n3-u6-l4-e1',
              type: 'multiple-choice',
              prompt:
                '「子供[こども]の ころは、よく 川[かわ]で 泳[およ]いだ _______ だ。」 (Eski xotiralarni eslash)',
              options: ['はず', 'もの (mono da)', 'こと', 'わけ'],
              correctAnswer: 1,
              explanation: 'Ta mono da (used to do in the past).',
            },
            {
              id: 'ja-n3-u6-l4-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「困難[こんなん]を 克服[こくふく]して 成功[せいこう]しました。」",
              options: ['散歩[さんぽ]', '食事[しょくじ]', '運転[うんてん]', '克服[こくふく]する'],
              correctAnswer: 3,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"克服[こくふく]する\" (Yengib oʻtmoq, bartaraf etmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l4-s3',
        title: 'Test',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u6-l4-q1',
              question: '「〜たものだ (Ta mono da)」grammatikasi nimani anglatadi?',
              options: [
                "Birovga sovg'a berish",
                'O\'tmishdagi qadrdon odat va xotirani eslash ("... qiluvchi edim")',
                'Kelajakdagi reja',
                'Hozirgi taqiq',
              ],
              correctAnswerIndex: 1,
              explanation: 'Reminiscing about past habits.',
            },
            {
              id: 'ja-n3-u6-l4-q2',
              question:
                '「彼[かれ]は まるで 日本人[にほんじん]の _______ 上手[じょうず]に 話[はな]す。」',
              options: ['そうに', 'らしい', 'ように', 'ために'],
              correctAnswerIndex: 2,
              explanation: 'Marude Nihonjin no you ni (xuddi yapondek).',
            },
            {
              id: 'ja-n3-u6-l4-q3',
              question: "«Har bir bo'limdan minimal qancha ball to'plash shart?»",
              options: ['50 ball', '60 ball', '0 ball', '19 ball'],
              correctAnswerIndex: 3,
              explanation: 'Sectional benchmark is 19/60.',
            },
            {
              id: 'ja-n3-u6-l4-q4',
              question: '「試験[しけん]の 結果[けっか]を 楽[たの]しみに して _______。」',
              options: ['おります', 'なさいます', 'いらっしゃいます', 'ごらんになります'],
              correctAnswerIndex: 0,
              explanation: 'Tanoshimi ni shite orimasu.',
            },
            {
              id: 'ja-n3-u6-l4-q5',
              question:
                '【語彙[ごい]】彼[かれ]は どんな 困難[こんなん]にも （　） 耐[た]え抜[ぬ]いた。',
              options: ['じっと', 'さらさら', 'ぎっしり', 'ぺらぺら'],
              correctAnswerIndex: 0,
              explanation:
                'Ogʻriq yoki qiyinchilikka chidab, sabr bilan qimirlamay turish: じっと耐える.',
            },
            {
              id: 'ja-n3-u6-l4-q6',
              question:
                '【文法[ぶんぽう]】夜[よる] 遅[おそ]く コーヒーを 飲[の]んだ （　）、全然[ぜんぜん] 眠[ねむ]れなかった。',
              options: ['せいで', 'おかげで', '反面', 'くせに'],
              correctAnswerIndex: 0,
              explanation: 'Uxlay olmaslik kabi noxush natijaga sabab: 飲んだせいで.',
            },
            {
              id: 'ja-n3-u6-l4-q7',
              question:
                '【漢字[かんじ]】事故[じこ]の 原因[げんいん]を （きゅうめい）する。下線[かせん]部[ぶ]の 漢字[かんじ]は？',
              options: ['究明', '求明', '急名', '球命'],
              correctAnswerIndex: 0,
              explanation: 'Sababni chuqur aniqlash/tadqiq qilish: 究明 (Kyuumei).',
            },
            {
              id: 'ja-n3-u6-l4-q8',
              question:
                '【文法[ぶんぽう]】この 仕事[しごと]は 経験[けいけん]の 有無[うむ]を （　）、誰[だれ]でも 応募[おうぼ]できる。',
              options: ['問[と]わず', '込[こ]めて', '通[つう]じて', 'めぐって'],
              correctAnswerIndex: 0,
              explanation:
                'Qatʼiy nazar, farqsiz: 〜を問わず (Oʻtmish tajribasi bormi-yoʻqmi qatʼiy nazar).',
            },
            {
              id: 'ja-n3-u6-l4-q9',
              question:
                '【語彙[ごい]】新[あたら]しい 職場[しょくば]の 環境[かんきょう]に ようやく （　）きた。',
              options: ['慣[な]れて', '飽[あ]きて', '疲[つか]れて', '忘[わす]れて'],
              correctAnswerIndex: 0,
              explanation: 'Koʻnikib qolmoq: 慣れてきた (Narete kita).',
            },
            {
              id: 'ja-n3-u6-l4-q10',
              question:
                '【敬語[けいご]】先生[せんせい]、研究[けんきゅう]室[しつ]へ 何時[なんじ]ごろ （　）でしょうか。',
              options: [
                '伺[うかが]っても よろしい',
                'いらっしゃっても よろしい',
                '召[め]し上[あ]がっても よろしい',
                'おっしゃっても よろしい',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Oʻzi ustozning huzuriga bormoqchi (kenjougo): 伺ってもよろしいでしょうか (Tashrif buyursam boʻladimi?).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'ja-n3-u6-l5',
    courseId: 'japanese-n3',
    unitId: 'ja-n3-u6',
    unitTitle: 'Unit 6: Capstone Mastery & Exam Strategy',
    language: 'ja',
    level: 'N3',
    lessonNumber: 30,
    title: 'JLPT N3 Capstone Grand Examination & N2 Promotion Certification',
    description:
      "JLPT N3 darajasini to'liq yakunlash va N2 darajasiga o'tish rasmiy sertifikatsiya sinovi.",
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
          explanation:
            "Siz yapon tilining barcha oraliq to'siqlarini (Passive, Causative, Causative-Passive, Sonkeigo, Kenjougo, Dokkai, Choukai) muvaffaqiyatli zabt etdingiz! Siz endi Yaponiyada ishlash va oliy ta'lim olish imkonini beruvchi N2 darajasiga to'liq yo'llanma oldingiz!",
          keyPoints: [
            'Total command of intermediate grammar & reading',
            'Speaking is NOT required for JLPT promotion',
            'Next Destination: JLPT N2',
          ],
          grammarRules: [
            {
              pattern: 'JLPT N3 Capstone Grand Examination & N2 Promotion Certification',
              meaning:
                "JLPT N3 darajasini to'liq yakunlash va N2 darajasiga o'tish rasmiy sertifikatsiya sinovi.",
              usageNotes:
                "Siz yapon tilining barcha oraliq to'siqlarini (Passive, Causative, Causative-Passive, Sonkeigo, Kenjougo, Dokkai, Choukai) muvaffaqiyatli zabt etdingiz! Siz endi Yaponiyada ishlash va oliy ta'lim olish imkonini beruvchi N2 darajasiga to'liq yo'llanma oldingiz!",
              examples: [
                {
                  sentence: '日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。',
                  translation: "Har kuni yapon tilini o'rganaman.",
                },
              ],
            },
          ],
          vocabulary: [
            {
              term: '実力[じつりょく]',
              reading: 'jitsuryoku',
              meaning: 'Haqiqiy bilim va iqtidor',
              exampleSentence:
                'これまでに 培[つちか]った 実力[じつりょく]を 存分[ぞんぶん]に 発揮[はっき]します。',
              exampleTranslation:
                'Shu paytgacha toʻplagan haqiqiy bilimimni toʻliq namoyon qilaman.',
            },
            {
              term: '達成[たっせい]する',
              reading: 'tassei suru',
              meaning: 'Maqsadga erishmoq',
              exampleSentence:
                '毎日[まいにち]の 学習[がくしゅう]目標[もくひょう]を 見事[みごと]に 達成[たっせい]しました。',
              exampleTranslation: 'Kunlik oʻrganish maqsadiga aʼlo darajada erishdim.',
            },
            {
              term: '応用[おうよう]する',
              reading: 'ouyou suru',
              meaning: 'Amaliyotda qoʻllamoq, adaptatsiya qilmoq',
              exampleSentence:
                '学[まな]んだ 文法[ぶんぽう]を 会話[かいわ]に 応用[おうよう]します。',
              exampleTranslation: 'Oʻrgangan grammatikani jonli suhbatda qoʻllayman.',
            },
            {
              term: '認定[にんてい]',
              reading: 'nintei',
              meaning: 'Rasmiy tasdiqlash, sertifikat',
              exampleSentence: 'JLPT N3レベルの 認定[にんてい]を 獲得[かくとく]しました。',
              exampleTranslation: 'JLPT N3 darajasidagi rasmiy sertifikatni qoʻlga kiritdim.',
            },
            {
              term: '向上[こうじょう]する',
              reading: 'koujou suru',
              meaning: 'Oʻsmoq, yuksalmoq, yaxshilanmoq',
              exampleSentence:
                '日本語[にほんご]の コミュニケーション能力[のうりょく]が 大[おお]きく 向上[こうじょう]しました。',
              exampleTranslation:
                'Yapon tilida muloqot qilish mahoratim sezilarli darajada yuksaldi.',
            },
            {
              term: '次の段階[つぎのだんかい]',
              reading: 'tsugi no dankai',
              meaning: 'Keyingi bosqich (N2)',
              exampleSentence:
                '次[つぎ]の 段階[だんかい]である N2合格[ごうかく]に 向[む]けて スタートします。',
              exampleTranslation: 'Keyingi bosqich boʻlgan N2 sari dadil qadam tashlaymiz.',
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l5-s2',
        title: 'N3 Yakuniy Sinov Mashqi',
        type: 'practice',
        estimatedMinutes: 7,
        practiceData: {
          instructions: "Yakuniy bitiruv savoliga to'g'ri javob bering.",
          exercises: [
            {
              id: 'ja-n3-u6-l5-e1',
              type: 'multiple-choice',
              prompt:
                '「先生[せんせい]、お忙[いそが]しい ところ、お時間[じかん]を いただき、_______。」',
              options: [
                'すみません',
                'どうも',
                '誠[まこと]に ありがとうございます (Makoto ni arigatou gozaimasu)',
                'おめでとう',
              ],
              correctAnswer: 2,
              explanation: 'Makoto ni arigatou gozaimasu (chuqur minnatdorchilik).',
            },
            {
              id: 'ja-n3-u6-l5-ex-2',
              type: 'multiple-choice',
              prompt:
                "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「教育[きょういく]は 人生[じんせい]に 深[ふか]い 影響[えいきょう]を 与[あた]えます。」",
              options: [
                '影響[えいきょう]を与える',
                '食事[しょくじ]',
                '散歩[さんぽ]',
                '運転[うんてん]',
              ],
              correctAnswer: 0,
              explanation:
                "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"影響[えいきょう]を与える\" (Taʼsir koʻrsatmoq).",
            },
          ],
        },
      },
      {
        id: 'ja-n3-u6-l5-s3',
        title: 'N3 Grand Sertifikatsiya Testi',
        type: 'test',
        estimatedMinutes: 10,
        testData: {
          instructions: 'Darsni mustahkamlash uchun barcha 10 ta savolga javob bering.',
          passingScorePercentage: 75,
          questions: [
            {
              id: 'ja-n3-u6-l5-q1',
              question:
                "「社長[しゃちょう]は ゴルフを _______。」 (Prezident harakatini ulug'lash)",
              options: ['されます', 'いたします', 'なさいます', 'ゴルフだ'],
              correctAnswerIndex: 2,
              explanation: 'Nasaimasu (Sonkeigo).',
            },
            {
              id: 'ja-n3-u6-l5-q2',
              question:
                '「あの人[ひと]が そんな 嘘[うそ]を つく _______。」 (Mantiqan mutlaqo imkonsiz)',
              options: ['はずだ', 'はずが ない', 'そうだ', 'べきだ'],
              correctAnswerIndex: 1,
              explanation: 'Hazu ga nai.',
            },
            {
              id: 'ja-n3-u6-l5-q3',
              question: '「雨[あめ]が 降[ふ]って きた _______、傘[かさ]を 差[さ]した。」',
              options: ['ので', 'くせに', '反面', 'のに'],
              correctAnswerIndex: 0,
              explanation: 'Futte kita node.',
            },
            {
              id: 'ja-n3-u6-l5-q4',
              question: "JLPT N3 darajasidan so'ng qaysi yuqori darajaga o'tiladi?",
              options: [
                'JLPT N1',
                'N4',
                'C1',
                'JLPT N2 (Upper-Intermediate / Professional Business Japanese)',
              ],
              correctAnswerIndex: 3,
              explanation: 'JLPT N2.',
            },
            {
              id: 'ja-n3-u6-l5-q5',
              question:
                '【N3総[そう]仕上げ】JLPT N3 合格[ごうかく]に 最[もっと]も 必要[ひつよう]な 力[ちから]は 何[なに]か？',
              options: [
                '日常[にちじょう]的[てき]な 場面[ばめん]で 使[つか]われる 日本語[にほんご]を ある程度[ていど] 理解[りかい]し、自然[しぜん]に 読[よ]み書[か]き・会話[かいわ]ができる 力[ちから]',
                '辞書[じしょ]を 丸暗記[まるあんき]する 力[ちから]',
                '英語[えいご]の 翻訳[ほんやく]力[りょく]',
                '早口[はやくち]で 話[はな]す 力[ちから]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'JLPT N3 standarti: Kundalik hayotiy vaziyatlarda yapon tilini maʼlum darajada mustaqil tushunish va qoʻllay olish.',
            },
            {
              id: 'ja-n3-u6-l5-q6',
              question:
                '【総合[そうごう]文法[ぶんぽう]】彼[かれ]は 忙[いそが]しい （　）、いつも 私[わたし]の 相談[そうだん]に 乗[の]ってくれる。',
              options: ['にもかかわらず', 'せいで', 'ばかりに', '反面[はんめん]'],
              correctAnswerIndex: 0,
              explanation: 'Qaramasdan (kutilganiga teskari mehmondoʻstlik): 〜にもかかわらず.',
            },
            {
              id: 'ja-n3-u6-l5-q7',
              question:
                '【総合[そうごう]語彙[ごい]】長年[ながねん]の 夢[ゆめ]だった JLPT N3 合格[ごうかく]を ついに （　）した。',
              options: ['達成[たっせい]', '緊張[きんちょう]', '被害[ひがい]', '苦痛[くつう]'],
              correctAnswerIndex: 0,
              explanation: 'Maqsadga erishmoq: 達成する (Tassei suru).',
            },
            {
              id: 'ja-n3-u6-l5-q8',
              question:
                '【N2への 架[か]け橋[はし]】N2 レベルで 要求[ようきゅう]される 新[あたら]しい 学習[がくしゅう]内容[ないよう]は？',
              options: [
                'ビジネスや 社会[しゃかい]的[てき]・抽象[ちゅうしょう]的[てき]な 論説[ろんせつ]文[ぶん]の 読解[どっかい]と 高度[こうど]な 敬語[けいご]・表現[ひょうげん]',
                'ひらがなの 練習[れんしゅう]',
                'カタカナの 単語[たんご]だけ',
                '挨拶[あいさつ]の 復習[ふくしゅう]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'N2 darajasida ijtimoiy, ilmiy va ishbilarmonlik mavzularidagi chuqur tahliliy matnlar hamda murakkab sintaksis oʻrganiladi.',
            },
            {
              id: 'ja-n3-u6-l5-q9',
              question:
                '【総合[そうごう]漢字[かんじ]】「維持[いじ]」ning toʻgʻri maʼnosi va oʻqilishi qaysi?',
              options: [
                'いじ (Mavjud holatni saqlab turmoq)',
                'ゆじ (Buzmoq)',
                'いし (Tosh)',
                'いぢ (Kechikmoq)',
              ],
              correctAnswerIndex: 0,
              explanation: '維持 = いじ (Mavjud sifat yoki darajani barqaror saqlamoq).',
            },
            {
              id: 'ja-n3-u6-l5-q10',
              question:
                '【修了[しゅうりょう]判定[はんてい]】「千里[せんり]の 道[みち]も 一歩[いっぽ]から」ということわざが 示[しめ]す 精神[せいしん]は？',
              options: [
                'どんなに 大[おお]きな 目標[もくひょう]（N1合格[ごうかく]など）でも、毎日[まいにち]の 地道[じみち]な 1課[か]ずつの 積[つ]み重[かさ]ねが 成功[せいこう]につながる',
                '急[いそ]いで 走[はし]らなければ ならない',
                '歩[ある]くのを やめること',
                '一人[ひとり]だけで 勉強[べんきょう]すること',
              ],
              correctAnswerIndex: 0,
              explanation:
                '"Ming chaqirimlik yoʻl ham birinchi qadamdan boshlanadi" — har kuni qilinadigan kichik va muntazam oʻrganish buyuk choʻqqilarga yetaklaydi.',
            },
          ],
        },
      },
    ],
  },
];
