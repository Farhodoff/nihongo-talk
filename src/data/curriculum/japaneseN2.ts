import { Lesson } from '../../types/lesson';

export const JAPANESE_N2_LESSONS: Lesson[] = [
    // Unit 1: Advanced Connectors & Logical Progression
    {
        id: 'ja-n2-u1-l1',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u1',
        unitTitle: 'Unit 1: Advanced Connectors & Progression',
        language: 'ja',
        level: 'N2',
        lessonNumber: 1,
        title: 'Proportional Change: 〜につれて vs 〜にしたがって vs 〜に伴って',
        description: 'Boshqa biror hodisa o\'zgargani sari ikkinchi hodisaning parallel o\'zgarishi.',
        estimatedDurationMinutes: 16,
        icon: '📈',
        steps: [
            {
                id: 'ja-n2-u1-l1-s1',
                title: 'Parallel O\'zgarish Qoidalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Proportional Change (〜につれて / 〜に伴って)',
                    explanation: '1. 〜につれて: A o\'zgargan sari tabiiy ravishda B ham o\'zgarishi (bir yo\'nalishda): 台風[たいふう]が 近[ちか]づくにつれて、風[かぜ]が 強[つよ]く なってきた (Tayfun yaqinlashgani sari shamol kuchayib bordi). 2. 〜にしたがって: Tabiiy yoki qoidaga ko\'ra parallel o\'zgarish: 年[とし]を 取[と]るにしたがって、記憶力[きおくりょく]が 衰[おとろ]える (Yosh o\'tgan sari xotira pasayadi). 3. 〜に伴[ともな]って: Katta ijtimoiy/iqtisodiy hodisalar va unga hamroh bo\'lgan o\'zgarishlar: 経済[けいざい]の 発展[はってん]に伴って、公害[こうがい]が 深刻[しんこく]化した (Iqtisodiyot rivojlanishi bilan birga ekologik ifloslanish chuqurlashdi).',
                    vocabulary: [
                        { term: '衰[おとろ]える', reading: 'Otoroeru', meaning: 'Zaiflashmoq / Pasaymoq', exampleSentence: '体力[たいりょく]が 衰[おとろ]える。', exampleTranslation: 'Jismoniy quvvat zaiflashmoqda.' },
                        { term: '深刻[しんこく]化', reading: 'Shinkokuka', meaning: 'Jiddiylashuv / Chuqurlashuv', exampleSentence: '問題[もんだい]が 深刻[しんこく]化する。', exampleTranslation: 'Muammo jiddiylashmoqda.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri mutanosib o\'zgarish shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n2-u1-l1-e1', type: 'multiple-choice', prompt: '«Shahar aholisi ko\'paygani sari tirbandlik ham jiddiylashib bordi»:', options: ['人口[じんこう]が 増[ふ]えるにつれて、交通[こうつう]渋滞[じゅうたい]も 悪化[あっか]した', '人口[じんこう]が 増[ふ]えたから', '人口[じんこう]が 増[ふ]えるなら', '人口[じんこう]です'], correctAnswer: 0, explanation: 'Fueru ni tsurete (ko\'paygani sari).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u1-l1-q1', question: '«〜に伴って (Ni tomonatte)» ko\'proq qaysi sohalarda qo\'llaniladi?', options: ['Ijtimoiy, iqtisodiy va keng ko\'lamli tizimli o\'zgarishlarda', 'Faqat oshxonada ovqat pishirganda', 'Faqat xarid qilganda', 'Faqat ob-havoda'], correctAnswerIndex: 0, explanation: 'Used for large-scale societal/macro-events.' },
                        { id: 'ja-n2-u1-l1-q2', question: '「時間[じかん]の 経過[けいか]に したがって」ning ma\'nosi:', options: ['Vaqt o\'tishi bilan birga / Vaqt o\'tgani sari', 'Vaqt to\'xtaganda', 'Vaqt yetmaganda', 'Vaqt yo\'qligida'], correctAnswerIndex: 0, explanation: 'As time elapsed / With the passage of time.' },
                        { id: 'ja-n2-u1-l1-q3', question: '«Tog\' cho\'qqisiga ko\'tarilgan sari havo soviy boshladi»:', options: ['山[やま]の 頂上[ちょうじょう]に 近[ちか]づくにつれて、寒[さむ]く なってきた', '山[やま]に 行[い]くから', '山[やま]が あるから', '山[やま]です'], correctAnswerIndex: 0, explanation: 'Chikadzuku ni tsurete.' },
                        { id: 'ja-n2-u1-l1-q4', question: '〜につれて dan oldin fe\'l qaysi shaklda bo\'ladi?', options: ['O\'zgarishni bildiruvchi fe\'lning lug\'at shakli (Jisho-kei)', 'O\'tgan zamon ta shakli', 'Nai shakli', 'Masu shakli'], correctAnswerIndex: 0, explanation: 'Change verb in Dictionary form.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u1-l2',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u1',
        unitTitle: 'Unit 1: Advanced Connectors & Progression',
        language: 'ja',
        level: 'N2',
        lessonNumber: 2,
        title: 'Compliance & Basis: 〜に応じて vs 〜に沿って vs 〜に基づいて',
        description: 'Talab va ehtiyojga mos holda (ni oujite), qoida va reja bo\'yicha (ni sotte), dalilga asoslanib (ni motozuite).',
        estimatedDurationMinutes: 16,
        icon: '📐',
        steps: [
            {
                id: 'ja-n2-u1-l2-s1',
                title: 'Moslik va Asoslash Qoidalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜に応じて vs 〜に沿って vs 〜に基づいて',
                    explanation: '1. 〜に応[おう]じて: Ehtiyoj, yosh yoki darajaga moslab moslashtirish: 予算[よさん]に応[おう]じて プランを 選[えら]ぶ (Byudjetga moslab rejani tanlash). 2. 〜に沿[そ]って: Reja, qoida yoki yo\'nalish bo\'ylab bormoq: マニュアルに沿[そ]って 作業[さぎょう]を 進[すす]める (Qo\'llanmaga amal qilib ishni davom ettirish). 3. 〜に基[もと]づいて: Aniq ma\'lumot, qonun yoki faktga asoslanib: 調査[ちょうさ]結果[けっか]に基[もと]づいて 判断[はんだん]する (Tekshiruv natijalariga asoslanib xulosa chiqarish).',
                    vocabulary: [
                        { term: '予算[よさん]', reading: 'Yosan', meaning: 'Byudjet', exampleSentence: '予算[よさん]を 立[た]てる。', exampleTranslation: 'Byudjet tuzmoq.' },
                        { term: '判断[はんだん]', reading: 'Handan', meaning: 'Qaror / Baholash / Hukm', exampleSentence: '冷静[れいせい]に 判断[はんだん]する。', exampleTranslation: 'Vazminlik bilan baholamoq.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri moslik iborasini tanlang.',
                    exercises: [
                        { id: 'ja-n2-u1-l2-e1', type: 'multiple-choice', prompt: '«Ushbu film real tarixiy faktlarga asoslangan»:', options: ['この映画[えいが]は 歴史的[れきしてき]な 事実[じじつ]に基[もと]づいて 制作[せいさく]された', '事実[じじつ]に応[おう]じて', '事実[じじつ]に沿[そ]って', '事実[じじつ]です'], correctAnswer: 0, explanation: 'Jijitsu ni motozuite (faktga asoslangan).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u1-l2-q1', question: '«Mijozning talabiga mos ravishda xizmat ko\'rsatish»:', options: ['お客様[きゃくさま]の 要望[ようぼう]に応[おう]じて サービスを 提供[ていきょう]する', '要望[ようぼう]に基[もと]づいて', '要望[ようぼう]に沿[そ]って', '要望[ようぼう]です'], correctAnswerIndex: 0, explanation: 'Youbou ni oujite (talabga mos ravishda).' },
                        { id: 'ja-n2-u1-l2-q2', question: '«Kompaniya siyosatiga amal qilgan holda harakat qilish»:', options: ['会社[かいしゃ]の 方針[ほうしん]に沿[そ]って 行動[こうどう]する', '方針[ほうしん]に応[おう]じて', '方針[ほうしん]に基[もと]づいて', '方針[ほうしん]です'], correctAnswerIndex: 0, explanation: 'Houshin ni sotte (yo\'nalishga amal qilgan holda).' },
                        { id: 'ja-n2-u1-l2-q3', question: '「経験[けいけん]や 能力[のうりょく]に応[おう]じて 給与[きゅうよ]を 決定[けってい]する」ning ma\'nosi:', options: ['Tajriba va qobiliyatga mos ravishda maoshni belgilash', 'Hamma bir xil maosh oladi', 'Tajriba kerak emas', 'Maosh berilmaydi'], correctAnswerIndex: 0, explanation: 'Salary determined according to experience & ability.' },
                        { id: 'ja-n2-u1-l2-q4', question: '«Xaritaga qarab daryo bo\'ylab yurish»:', options: ['川[かわ]に沿[そ]って 歩[ある]く', '川[かわ]に応[おう]じて', '川[かわ]に基[もと]づいて', '川[かわ]です'], correctAnswerIndex: 0, explanation: 'Kawa ni sotte (daryo yoqalab).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u1-l3',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u1',
        unitTitle: 'Unit 1: Advanced Connectors & Progression',
        language: 'ja',
        level: 'N2',
        lessonNumber: 3,
        title: 'Psychological Inability & Risk: 〜かねる vs 〜かねない',
        description: 'Rad etish muloyimligi (kaneru - qila olmayman) va xavfli ehtimol (kanenai - bo\'lib qolishi mumkin!).',
        estimatedDurationMinutes: 16,
        icon: '⚠️',
        steps: [
            {
                id: 'ja-n2-u1-l3-s1',
                title: '〜かねる va 〜かねない Farqi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Polite Inability (〜かねる) vs Dangerous Potential (〜かねない)',
                    explanation: '1. 〜かねる (Muloyim rasmiy rad etish / Masu asosi + kaneru): Sharoit yoki mas\'uliyat sababli "... qila olmayman": そのような ご要望[ようぼう]には 応[おう]じかねます (Bunday talabni qondira olmaymiz). 2. 〜かねない (Salbiy/xatarli narsaning sodir bo\'lish xavfi / Masu asosi + kanenai): "... bo\'lib qolishi xavfi bor": スピードを 出[だ]しすぎると、大[おお]きな 事故[じこ]を 起[お]こしかねない (Juda tez yursa, katta avariyaga sabab bo\'lib qolishi mumkin!).',
                    vocabulary: [
                        { term: '応[おう]じかねます', reading: 'Oujikanemasu', meaning: 'Qabul qila olmaymiz / Qondira olmaymiz (muloyim)', exampleSentence: 'ご期待[きたい]には 添[そ]いかねます。', exampleTranslation: 'Umidlaringizni oqlay olmasak kerak.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u1-l3-e1', type: 'multiple-choice', prompt: '«Bu sir oshkor bo\'lib qolsa, kompaniya bankrot bo\'lib qolishi xavfi bor»:', options: ['倒産[とうさん]しかねない', '倒産[とうさん]しかねる', '倒産[とうさん]するはずだ', '倒産[とうさん]です'], correctAnswer: 0, explanation: 'Tousan shikanenai (xatarli ehtimol).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u1-l3-q1', question: 'Mijozga «Hozir bu savolga aniq javob bera olmayman (psixologik/rasmiy rad etish)»:', options: ['ただいま お答[こた]えしかねます', 'お答[こた]えしかねない', '答[こた]えない', '答[こた]えるな'], correctAnswerIndex: 0, explanation: 'Okotaeshikanemasu (Kenjougo refusal).' },
                        { id: 'ja-n2-u1-l3-q2', question: '「あの男[おとこ]なら そんな 悪事[あくじ]も やりかねない」ning ma\'nosi:', options: ['Agar u bo\'lsa, shunday yomonlikni ham bemalol qilib qo\'yishi mumkin (salbiy ehtimol)', 'U hech qachon yomonlik qilmaydi', 'U yaxshi inson', 'U ketdi'], correctAnswerIndex: 0, explanation: 'Capable of committing bad deeds.' },
                        { id: 'ja-n2-u1-l3-q3', question: '〜かねない qaysi holatlarda ishlatiladi?', options: ['Faqat salbiy, xavfli, fojiali oqibatlarning sodir bo\'lish xavfida', 'Faqat xursandchilikda', 'Sovg\'a berishda', 'O\'tgan zamonda'], correctAnswerIndex: 0, explanation: 'Strictly negative/dangerous risks.' },
                        { id: 'ja-n2-u1-l3-q4', question: '«Charchoq to\'planib kelsa, kasal bo\'lib qolish xavfi bor»:', options: ['過労[かろう]で 病気[びょうき]に なりかねない', '病気[びょうき]に なりかねる', '病気[びょうき]に なった', '病気[びょうき]です'], correctAnswerIndex: 0, explanation: 'Narikanenai.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u1-l4',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u1',
        unitTitle: 'Unit 1: Advanced Connectors & Progression',
        language: 'ja',
        level: 'N2',
        lessonNumber: 4,
        title: 'Absolute Impossibility: 〜っこない & Subjective Guess: 〜げ',
        description: 'Mutlaqo ilojsiz ekanini qat\'iy ta\'kidlash (kkonai) va tuyg\'u belgisi (ge: sabishige, ureshige).',
        estimatedDurationMinutes: 16,
        icon: '❌',
        steps: [
            {
                id: 'ja-n2-u1-l4-s1',
                title: '〜っこない va 〜げ Qoidalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Impossibility (〜っこない) vs Outward Nuance (〜げ)',
                    explanation: '1. 〜っこない (Masu asosi + kkonai): Gapiruvchining sub\'ektiv ishonchi bo\'yicha "mutlaqo iloji yo\'q / imkonsiz": こんな難[むずか]しい 本[ほん]、1日[いちにち]で 読[よ]めっこない (Bunday qiyin kitobni 1 kunda o\'qib bo\'larmidi!). 2. 〜げ (Sifat asosi + ge): Tashqaridan sezilayotgan holat/tuyg\'u: 寂[さび]しげな 表情[ひょうじょう] (G\'amgin ko\'ringan yuz ifodasi), 自信[じしん]ありげに 話[はな]す (Ishonchi komilligi sezilib gapirish).',
                    vocabulary: [
                        { term: '表情[ひょうじょう]', reading: 'Hyoujou', meaning: 'Yuz ifodasi', exampleSentence: '明[あか]るい 表情[ひょうじょう]。', exampleTranslation: 'Ochiq yuz ifodasi.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri ifodani tanlang.',
                    exercises: [
                        { id: 'ja-n2-u1-l4-e1', type: 'multiple-choice', prompt: '«U kabi kuchli raqibni yutib bo\'lmaydi (mutlaqo imkonsiz)»:', options: ['彼[かれ]のような 強豪[きょうごう]に 勝[か]てっこない', '勝[か]てるはずだ', '勝[か]ちかねない', '勝[か]つ'], correctAnswer: 0, explanation: 'Katekkonai (absolutely cannot win).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u1-l4-q1', question: '「言[い]いっこない」nimani anglatadi?', options: ['Aslo aytmaydi / Aytishi mutlaqo imkonsiz', 'Darhol aytadi', 'Aytgan edi', 'Aytmoqchi'], correctAnswerIndex: 0, explanation: 'Absolutely won\'t say.' },
                        { id: 'ja-n2-u1-l4-q2', question: '「悲[かな]しげな 目[め]」dagi 〜げ nimani bildiradi?', options: ['G\'amginlik hissi sezilib turgan (ko\'zlar)', 'Juda xursand', 'Baland', 'Ko\'k'], correctAnswerIndex: 0, explanation: 'Looking sorrowful/sad.' },
                        { id: 'ja-n2-u1-l4-q3', question: '「自信[じしん]ありげに」ning ma\'nosi:', options: ['O\'ziga ishonchi yaqqol sezilib turgan holda', 'Qo\'rqib', 'Shoshib', 'Hech narsa bilmay'], correctAnswerIndex: 0, explanation: 'With an apparent air of confidence.' },
                        { id: 'ja-n2-u1-l4-q4', question: '〜っこない qaysi uslubda ko\'proq qo\'llaniladi?', options: ['Og\'zaki so\'zlashuvda qat\'iy shaxsiy ishonchni bildirishda', 'Faqat qonun hujjatlarida', 'Faqat kompyuter dasturlarida', 'Katakana matnlarida'], correctAnswerIndex: 0, explanation: 'Strong conversational emphasis of impossibility.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u1-l5',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u1',
        unitTitle: 'Unit 1: Advanced Connectors & Progression',
        language: 'ja',
        level: 'N2',
        lessonNumber: 5,
        title: 'N2 Editorial Dokkai: Column Analysis on AI & Ethics',
        description: 'Sun\'iy intellekt, avtomatlashtirish va insoniyat axloqi haqidagi gazeta tahririyat maqolasi tahlili.',
        estimatedDurationMinutes: 18,
        icon: '🤖',
        steps: [
            {
                id: 'ja-n2-u1-l5-s1',
                title: 'Tahririyat Maqolasi (社説)',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Editorial: AI Evolution and Human Autonomy',
                    explanation: '人文学的[じんぶんがくてき]な 視点[してん]から 見[み]れば、AIの 急速[きゅうそく]な 進化[しんか]は 単[たん]なる 生産性[せいさんせい]の 向上[こうじょう]に 留[とど]まらず、人間[にんげん]の 尊厳[そんげん]や 意思[いし]決定[けってい]の 主体性[しゅたいせい]そのものを 問[と]い直[なお]す 契機[けいき]と なっている。 アルゴリズムに よる 最適化[さいてきか]に 過度[かど]に 依存[いぞん]するあまり、人間[にんげん]が 試行[しこう]錯誤[さくご]を 通[つう]じて 培[つちか]うべき 倫理的[りんりてき]な 葛藤[かっとう]や 洞察力[どうさつりょく]を 放棄[ほうき]しては ならない。',
                    keyPoints: [
                        'Muallif fikri: Algoritmik optimallashuvga qaram bo\'lib, inson axloqiy izlanish va chuqur tahlil qobiliyatidan voz kechmasligi shart.'
                    ],
                    vocabulary: [
                        { term: '尊厳[そんげん]', reading: 'Songen', meaning: 'Insoniy qadr-qimmat', exampleSentence: '人間[にんげん]の 尊厳[そんげん]。', exampleTranslation: 'Inson qadr-qimmati.' },
                        { term: '葛藤[かっとう]', reading: 'Kattou', meaning: 'Ichki ziddiyat / Ruhiy kurash', exampleSentence: '倫理的[りんりてき]な 葛藤[かっとう]。', exampleTranslation: 'Axloqiy ichki kurash.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l5-s2',
                title: 'Tahlil Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Muallifning tahririyat xulosasini tanlang.',
                    exercises: [
                        { id: 'ja-n2-u1-l5-e1', type: 'multiple-choice', prompt: 'Muallif qaysi xatardan qat\'iy ogohlantirmoqda?', options: ['AI ga haddan ortiq tayangan holda inson o\'z axloqiy qaror qabul qilish va tafakkur qobiliyatini yo\'qotishidan', 'Kompyuterlar elektrsiz qolishidan', 'Hamma AI mutaxassisi bo\'lib ketishidan', 'Smartfonlar qimmatlashishidan'], correctAnswer: 0, explanation: 'Abandoning ethical pondering & critical discernment to AI.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u1-l5-q1', question: '「単[たん]なる〜に留[とど]まらず」nimani anglatadi?', options: ['Faqatgina ... bilan cheklanib qolmasdan', 'Faqat bitta narsa bo\'lib', 'To\'xtab qolib', 'Boshlanib'], correctAnswerIndex: 0, explanation: 'Not limited merely to...' },
                        { id: 'ja-n2-u1-l5-q2', question: '「〜あまり」grammatikasi nimani bildiradi?', options: ['Haddan tashqari ko\'p bo\'lganligi natijasida (salbiy oqibat)', 'Vaqt o\'tgach', 'Oz bo\'lgani uchun', 'Qimmat bo\'lgani uchun'], correctAnswerIndex: 0, explanation: 'Excessive degree leading to negative result.' },
                        { id: 'ja-n2-u1-l5-q3', question: '「洞察力[どうさつりょく]」so\'zining ma\'nosi:', options: ['Ichki mohiyatni ko\'ra bilish / Zukkolik / Fikr tiniqligi', 'Tez yugurish', 'Ko\'rish qobiliyati', 'Eshitish'], correctAnswerIndex: 0, explanation: 'Insight / Discernment.' },
                        { id: 'ja-n2-u1-l5-q4', question: 'JLPT N2 Dokkai tahririyat matnlarida qanday mavzular eng ko\'p tushadi?', options: ['Zamonaviy jamiyat muammolari, fan-texnika etikasi, psixologiya va tilshunoslik', 'Bolalar ertaklari', 'Ovqat retseptlari', 'Ob-havo jadvallari'], correctAnswerIndex: 0, explanation: 'Societal dilemmas, science ethics, psychology.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Nuanced Psychological & Evaluative Expressions
    {
        id: 'ja-n2-u2-l1',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u2',
        unitTitle: 'Unit 2: Corporate Keigo & High Register',
        language: 'ja',
        level: 'N2',
        lessonNumber: 1,
        title: 'Advanced Business Correspondence: 〜申し上げます & 〜存じます',
        description: 'Rasmiy korporativ yozishmalar va diplomatik ehtirom formulalari.',
        estimatedDurationMinutes: 16,
        icon: '💼',
        steps: [
            {
                id: 'ja-n2-u2-l1-s1',
                title: 'Oliy Biznes Formulalari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Corporate Honorifics: 申し上げます & 存じます',
                    explanation: '1. お/ご + Fe\'l asosi + 申[もう]し上[あ]げます (Chuqur ehtirom bilan bildiramiz): 心[こころ]より お礼[れい] 申[もう]し上[あ]げます (Chin qalbimizdan minnatdorchilik bildiramiz); お詫[わ]び 申[もう]し上[あ]げます (Kechirim so\'raymiz). 2. 〜と 存[ぞん]じます (Deb hisoblaymiz / O\'ylaymiz - omou ning oliy Kenjougo shakli): 幸[さいわ]いに 存[ぞん]じます (Baxtiyor bo\'lardik).',
                    vocabulary: [
                        { term: 'お詫[わ]び', reading: 'Owabi', meaning: 'Uzr / Kechirim', exampleSentence: '深[ふか]く お詫[わ]び 申[もう]し上[あ]げます。', exampleTranslation: 'Chuqur uzr so\'raymiz.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri biznes iborasini tanlang.',
                    exercises: [
                        { id: 'ja-n2-u2-l1-e1', type: 'multiple-choice', prompt: '«Sizga yana bir bor minnatdorchilik bildiramiz»:', options: ['重[かさ]ねて お礼[れい] 申[もう]し上[あ]げます', 'お礼[れい]を 言[い]います', 'お礼[れい]です', 'ありがとう'], correctAnswer: 0, explanation: 'Kasanete orei moushiagemasu.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u2-l1-q1', question: 'Biznes xatlarida «Xursand bo\'lardik / Mamnuniyat deb bilardik» qanday yoziladi?', options: ['幸[さいわ]いに 存[ぞん]じます (Saiwai ni zonjimasu)', 'うれしいです', '楽[たの]しいです', 'いいです'], correctAnswerIndex: 0, explanation: 'Saiwai ni zonjimasu.' },
                        { id: 'ja-n2-u2-l1-q2', question: '「ご査収[さしゅう]ください」ning ma\'nosi:', options: ['Iltimos, hujjatlarni tekshirib qabul qilib oling', 'Iltimos, pul to\'lang', 'Xat yozing', 'Qaytaring'], correctAnswerIndex: 0, explanation: 'Please inspect and accept the enclosed documents.' },
                        { id: 'ja-n2-u2-l1-q3', question: '«Hurmat bilan ma\'lum qilamiz»:', options: ['ご案内[あんない] 申[もう]し上[あ]げます', '教[おし]えます', '言[い]います', '案内[あんない]だ'], correctAnswerIndex: 0, explanation: 'Goannai moushiagemasu.' },
                        { id: 'ja-n2-u2-l1-q4', question: 'N2 darajasida Keigo qanchalik chuqur tekshiriladi?', options: ['Mukammal biznes email yozishmalari, xatolar tuzatish va ierarxik ehtirom nuanslari darajasida', 'Faqat desu/masu darajasida', 'Faqat salomlashish', 'Tekshirilmaydi'], correctAnswerIndex: 0, explanation: 'Thorough business email & hierarchical nuance mastery.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u2-l2',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u2',
        unitTitle: 'Unit 2: Corporate Keigo & High Register',
        language: 'ja',
        level: 'N2',
        lessonNumber: 2,
        title: 'N2 Advanced Kanji: Macroeconomics, Commerce & Law (融資, 景気, 契約, 義務, 損害)',
        description: 'Bank krediti, bozor konyunkturasi, shartnomalar va huquqiy javobgarlik kanjilari.',
        estimatedDurationMinutes: 16,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n2-u2-l2-s1',
                title: 'Moliya va Huquq Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Commerce & Law Kanji',
                    explanation: '融 (yuu - erish/moliya), 資 (shi - resurs/mablag\'), 景 (kei - manzara/iqtisodiy vaziyat), 契 (kei - bitim/shartnoma), 約 (yaku - va\'da/chegara), 損 (son - ziyon), 害 (gai - zarar).',
                    vocabulary: [
                        { term: '融資[ゆうし]', reading: 'Yuushi', meaning: 'Kredit / Moliyalashtirish', exampleSentence: '銀行[ぎんこう]から 融資[ゆうし]を 受[う]ける。', exampleTranslation: 'Bankdan kredit olmoq.' },
                        { term: '景気[けいき]', reading: 'Keiki', meaning: 'Bozor iqtisodiy holati / Konyunktura', exampleSentence: '景気[けいき]が 回復[かいふく]する。', exampleTranslation: 'Iqtisodiy vaziyat tiklanmoqda.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Iyeroglifni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u2-l2-e1', type: 'multiple-choice', prompt: '«Shartnoma tuzmoq» kanjisi qaysi?', options: ['契約[けいやく]を 結[むす]ぶ', '約束[やくそく]', '融資[ゆうし]', '損害[そんがい]'], correctAnswer: 0, explanation: '契約 (Keiyaku).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u2-l2-q1', question: '«Ziyonni qoplamoq / Zararni to\'lamoq»:', options: ['損害[そんがい]を 賠償[ばいしょう]する', '融資[ゆうし]する', '景気[けいき]が いい', '契約[けいやく]する'], correctAnswerIndex: 0, explanation: 'Songai o baishou suru.' },
                        { id: 'ja-n2-u2-l2-q2', question: '「不景気[ふけいき]」so\'zining ma\'nosi:', options: ['Iqtisodiy tanazzul / Inqiroz (Recession)', 'Katta daromad', 'Boylik', 'Bozor yopilishi'], correctAnswerIndex: 0, explanation: 'Economic recession / slump.' },
                        { id: 'ja-n2-u2-l2-q3', question: '«Majburiyat / Burch» kanjisi qaysi?', options: ['義務[ぎむ]', '権利[けんり]', '責任[せきにん]', '判断[はんだん]'], correctAnswerIndex: 0, explanation: '義務 (Gimu).' },
                        { id: 'ja-n2-u2-l2-q4', question: '「投資[とうし]」so\'zining ma\'nosi:', options: ['Investitsiya / Sarmoya kiritish', 'Pul yo\'qotish', 'Kredit olish', 'Soliq'], correctAnswerIndex: 0, explanation: 'Toushi — Investitsiya.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u2-l3',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u2',
        unitTitle: 'Unit 2: Corporate Keigo & High Register',
        language: 'ja',
        level: 'N2',
        lessonNumber: 3,
        title: 'Formal Negation & Concession: 〜ざるを得ない vs 〜わけにはいかない',
        description: 'Majburlikdan qilishdan o\'zga chora yo\'qligi (zaru o enai) va axloqan/vaziyat sababli qila olmaslik (wake ni wa ikanai).',
        estimatedDurationMinutes: 16,
        icon: '⚖️',
        steps: [
            {
                id: 'ja-n2-u2-l3-s1',
                title: '〜ざるを得ない va 〜わけにはいかない',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Forced Choice (〜ざるを得ない) vs Ethical Restraint (〜わけにはいかない)',
                    explanation: '1. 〜ざるを得[え]ない (Nai asosi + zaru o enai / する -> せざるを得ない): Xohlamasa ham sharoit taqozosi bilan "... qilishdan o\'zga chora yo\'q": 事実[じじつ]を 認[みと]めざるを得ない (Haqiqatni tan olishdan boshqa chora yo\'q). 2. 〜わけにはいかない: Axloq, burch yoki ijtimoiy qoida sababli "... qila olmayman / qilishga haqqim yo\'q": 大事[だいじ]な 会議[かいぎ]だから、休[やす]むわけには いかない (Muhim majlis bo\'lgani uchun, bormay qola olmayman).',
                    vocabulary: [
                        { term: '認[みと]める', reading: 'Mitomeru', meaning: 'Tan olmoq / E\'tirof etmoq', exampleSentence: '失敗[しっぱい]を 認[みと]める。', exampleTranslation: 'Xatoni tan olmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri majburiyat shaklini tanlang.',
                    exercises: [
                        { id: 'ja-n2-u2-l3-e1', type: 'multiple-choice', prompt: '«Ertaga imtihon, shuning uchun dars qilmasdan yotib uxlashga haqqim yo\'q»:', options: ['勉強[べんきょう]しないわけには いかない', '勉強[べんきょう]せざるを得ない', '勉強[べんきょう]するはずだ', '勉強[べんきょう]です'], correctAnswer: 0, explanation: 'Shinai wake ni wa ikanai (must study).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u2-l3-q1', question: '「する」fe\'lining 〜ざるを得ない shakli qaysi?', options: ['せざるを得[え]ない (Sezaru o enai - istisno)', 'しざるを得ない', 'すざるを得ない', 'されざるを得ない'], correctAnswerIndex: 0, explanation: 'Istisno: せざるを得ない.' },
                        { id: 'ja-n2-u2-l3-q2', question: '«Boshliqning buyrug\'iga bo\'ysunishdan o\'zga chora yo\'q»:', options: ['上司[じょうし]の 命令[めいれい]に 従[したが]わざるを得ない', '従[したが]うわけには いかない', '従[したが]うはずだ', '従[したが]う'], correctAnswerIndex: 0, explanation: 'Shitagainikui -> Shitagawa zaru o enai.' },
                        { id: 'ja-n2-u2-l3-q3', question: '「車[くるま]を 運転[うんてん]するから、お酒[さけ]を 飲[の]むわけには いかない」ning ma\'nosi:', options: ['Mashina haydashim kerakligi sababli, ichishga haqqim yo\'q', 'Spirtli ichimlik ichishim shart', 'Mashinam yo\'q', 'Spirtli ichimlik yaxshi'], correctAnswerIndex: 0, explanation: 'Cannot drink because I will drive.' },
                        { id: 'ja-n2-u2-l3-q4', question: '〜ざるを得ない qanday hissiyotni ifodalaydi?', options: ['Ich-ichidan xohlamaslik, ammo noilojlikdan majbur bo\'lish', 'Ulkan xursandchilik', 'Hech qanday qiziqish yo\'qligi', 'Befarqlik'], correctAnswerIndex: 0, explanation: 'Reluctant inevitability.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u2-l4',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u2',
        unitTitle: 'Unit 2: Corporate Keigo & High Register',
        language: 'ja',
        level: 'N2',
        lessonNumber: 4,
        title: 'N2 Choukai: Integrated Information Listening (統合理解)',
        description: 'Bir nechta shaxslarning fikrlari va jadvalli variantlarni solishtirib yakuniy yechimni topish.',
        estimatedDurationMinutes: 16,
        icon: '🎧',
        steps: [
            {
                id: 'ja-n2-u2-l4-s1',
                title: '統合理解 (Tougou Rikai) Strategiyasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Integrated Information Listening',
                    explanation: 'Uzoq suhbatda 4 ta mahsulot yoki reja muhokama qilinadi. Har bir ishtirokchi o\'z talablarini aytadi (narx, muddat, sifat, xavfsizlik). Oxirida barcha shartlarga mos keladigan YAGONA to\'g\'ri variant tanlanishi kerak.',
                    keyPoints: [
                        'Qog\'ozga darhol 1, 2, 3, 4 matritsa chizib, kim qaysi shartni qo\'yganini belgilab borish.'
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l4-s2',
                title: 'Matritsa Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Shartlarni solishtirib to\'g\'ri variantni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u2-l4-e1', type: 'multiple-choice', prompt: 'Kompaniya xarajat 1 million iyenadan oshmasligi va yetkazib berish 3 kundan oshmasligini talab qildi. A (1.2 mln, 2 kun), B (800 ming, 2 kun), C (700 ming, 5 kun). Qaysi reja tanlanadi?', options: ['B rejasi (800 ming iyena, 2 kun)', 'A rejasi', 'C rejasi', 'Hech biri'], correctAnswer: 0, explanation: 'Plan B satisfies both budget (<1M) and delivery (<3 days).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u2-l4-q1', question: 'Tougou Rikai bo\'limida audioni eshitishdan oldin nima qilish eng foydali?', options: ['Test varaqasidagi 4 ta variantning xususiyatlarini tezda ko\'zdan kechirish', 'Ko\'zni yumib uxlash', 'Qalamni sindirish', 'Hech narsaga qaramaslik'], correctAnswerIndex: 0, explanation: 'Scan the 4 choices beforehand to establish a matrix.' },
                        { id: 'ja-n2-u2-l4-q2', question: 'Ishtirokchi «コストを 最優先[さいゆうせん]に したい» desa, qaysi mezonga urg\'u beradi?', options: ['Narx / Xarajat eng birinchi o\'rinda (Cost is highest priority)', 'Tezlik', 'Dizayn', 'Rang'], correctAnswerIndex: 0, explanation: 'Cost is highest priority.' },
                        { id: 'ja-n2-u2-l4-q3', question: '「納期[のうき]」so\'zining ma\'nosi:', options: ['Mahsulotni yetkazib berish muddati (Delivery deadline)', 'Mahsulot narxi', 'Ish haqi', 'Shartnoma soni'], correctAnswerIndex: 0, explanation: 'Delivery deadline.' },
                        { id: 'ja-n2-u2-l4-q4', question: 'N2 Choukai ning ushbu bo\'limi nechta savoldan iborat?', options: ['Har yili 3-4 ta yirik integratsiyalashgan savol', '50 ta', '1 ta', '100 ta'], correctAnswerIndex: 0, explanation: '3-4 multi-part integrated scenario questions.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u2-l5',
        courseId: 'japanese-n2',
        unitId: 'ja-n2-u2',
        unitTitle: 'Unit 2: Corporate Keigo & High Register',
        language: 'ja',
        level: 'N2',
        lessonNumber: 5,
        title: 'JLPT N2 Capstone Grand Mastery & N1 Transition Examination',
        description: 'JLPT N2 oliy-o\'rta biznes darajasini to\'liq tasdiqlash va N1 oliy darajasiga o\'tish sinovi.',
        estimatedDurationMinutes: 20,
        icon: '🏆',
        steps: [
            {
                id: 'ja-n2-u2-l5-s1',
                title: 'N2 Professional Xulosasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'JLPT N2 Certified Professional Status',
                    explanation: 'Siz Yaponiyaning yetakchi korporatsiyalari (Sony, Toyota, Rakuten), nufuzli davlat universitetlari va oliy kasbiy sohalar talab qiladigan N2 darajasini to\'liq egalladingiz! Siz 1000+ kanji, murakkab tahririyat maqolalari, oliy korporativ Keigo va integratsiyalashgan audit eshitish ko\'nikmalariga egasiz.',
                    keyPoints: [
                        'Full business & academic operational fluency',
                        'Speaking is NOT required for JLPT promotion',
                        'Final Frontier: JLPT N1 Mastery'
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l5-s2',
                title: 'N2 Oliy Bitiruv Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Bitiruv savoliga to\'g\'ri javob bering.',
                    exercises: [
                        { id: 'ja-n2-u2-l5-e1', type: 'multiple-choice', prompt: '「今後[こんご]とも 格別[かくべつ]の ご高配[こうはい]を 賜[たまわ]りますよう、_______。」 (Oliy korporativ ehtirom yakuni)', options: ['お願[ねが]い 申[もう]し上[あ]げます (Onegai moushiagemasu)', 'お願[ねが]いします', '頼[たの]むよ', 'どうぞ'], correctAnswer: 0, explanation: 'Onegai moushiagemasu (highest corporate closing).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u2-l5-s3',
                title: 'N2 Grand Sertifikatsiya Testi',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'N2 darajasini to\'liq tasdiqlash uchun barcha savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u2-l5-q1', question: '「事故[じこ]の 原因[げんいん]を 究明[きゅうめい]せざるを _______。」', options: ['得[え]ない (enai)', 'いかない', 'ならない', 'かねない'], correctAnswerIndex: 0, explanation: 'Kyuumei sezaru o enai.' },
                        { id: 'ja-n2-u2-l5-q2', question: '「お忙[いそが]しい ところ 恐[おそ]れ入[い]りますが、資料[しりょう]を ご確認[かくにん] _______。」', options: ['いただけますでしょうか', 'ください', 'しろ', 'いたす'], correctAnswerIndex: 0, explanation: 'Itadakemasu deshou ka.' },
                        { id: 'ja-n2-u2-l5-q3', question: '「景気[けいき]の 変動[へんどう]に _______、生産[せいさん]計画[けいかく]を 変更[へんこう]する。」', options: ['伴[ともな]って / 応[おう]じて', 'ついて', '対[たい]して', 'とって'], correctAnswerIndex: 0, explanation: 'Oujite / Tomonatte.' },
                        { id: 'ja-n2-u2-l5-q4', question: 'JLPT ning eng yuqori oliy cho\'qqisi qaysi daraja?', options: ['JLPT N1 (Native-like Academic & Classical Mastery)', 'JLPT N2', 'JLPT N5', 'CEFR B1'], correctAnswerIndex: 0, explanation: 'JLPT N1.' }
                    ]
                }
            }
        ]
    },

    // Unit 3: N2 Advanced Grammar & Expressions (Lessons 11 - 15)
    {
        id: 'ja-n2-u3-l1',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u3',
        unitTitle: 'Unit 3: N2 Advanced Grammar & Expressions',
        language: 'ja',
        level: 'N2',
        lessonNumber: 11,
        title: '〜にすぎない (Nothing more than / Merely)',
        description: 'Cheklov va kamtarinlik ifodasi: "Shunchaki ...dan iborat, xolos".',
        estimatedDurationMinutes: 16,
        icon: '📌',
        steps: [
            {
                id: 'ja-n2-u3-l1-s1',
                title: '〜にすぎない Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜にすぎない (Ni suginai) Usage',
                    explanation: 'Oddiy taxmin yoki kamtarona fikr bildirishda "shunchaki ... xolos" degan ma\'noni beradi.',
                    keyPoints: [
                        'これは私の個人的な意見にすぎない。 (Bu shunchaki mening shaxsiy fikrim xolos.)',
                        '単なる噂にすぎません。 (Bu shunchaki mish-mish xolos.)'
                    ],
                    vocabulary: [
                        { term: '単[たん]なる', reading: 'Tannaru', meaning: 'Shunchaki / Oddiy', exampleSentence: '単なる偶然です。', exampleTranslation: 'Shunchaki tasodif xolos.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri shaklni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u3-l1-e1', type: 'multiple-choice', prompt: '「それは 試作[しさく]段階[だんかい]の モデルに _______。」', options: ['すぎない (suginai)', 'ほかない', 'に違いない', 'かぎらない'], correctAnswer: 0, explanation: 'Ni suginai = shunchaki ... xolos.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u3-l1-q1', question: '「にすぎない」ning o\'zbek tilidagi ma\'nosi:', options: ['...dan iborat, xolos', 'Juda qiyin', 'Mumkin emas', 'Taqiqlanadi'], correctAnswerIndex: 0, explanation: 'Ni suginai = ...dan iborat xolos.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u3-l2',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u3',
        unitTitle: 'Unit 3: N2 Advanced Grammar & Expressions',
        language: 'ja',
        level: 'N2',
        lessonNumber: 12,
        title: '〜をめぐって (Surrounding / Concerning a dispute)',
        description: 'Muammo yoki munozara atrofida bahslashish: "...atrofida / ...xususida".',
        estimatedDurationMinutes: 16,
        icon: '💬',
        steps: [
            {
                id: 'ja-n2-u3-l2-s1',
                title: '〜をめぐって Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜をめぐって (O megutte)',
                    explanation: 'Biror masala, miras yoki siyosat atrofida kelishmovchilik, munozara bo\'lganda ishlatiladi.',
                    keyPoints: [
                        '遺産をめぐって兄弟が争っている。 (Meros atrofida aka-ukalar urishishmoqda.)',
                        '新政策をめぐり議論が続いている。 (Yangi siyosat xususida munozara davom etmoqda.)'
                    ],
                    vocabulary: [
                        { term: '議論[ぎろん]', reading: 'Giron', meaning: 'Munozara / Bahs', exampleSentence: '活発な議論が行われた。', exampleTranslation: 'Qizg\'in munozara bo\'lib o\'tdi.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri gramatik iborani tanlang.',
                    exercises: [
                        { id: 'ja-n2-u3-l2-e1', type: 'multiple-choice', prompt: '「再開発[さいかいはつ]計画[けいかく]を _______ 住民[じゅうみん]の 意見[いけん]が 対立[たいりつ]している。」', options: ['めぐって (megutte)', 'について', 'にとって', 'として'], correctAnswer: 0, explanation: 'O megutte (masala atrofida).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u3-l2-q1', question: '「をめぐって」 grammatik konstruktsiyasining ishlatilish o\'rni:', options: ['Bahs, munozara yoki nizo ob\'ekti bo\'lgan masala atrofida', 'Yo\'nalish ko\'rsatganda', 'Vaqtni o\'lchaganda', 'Sabab ko\'rsatganda'], correctAnswerIndex: 0, explanation: 'Bahs/munozara ob\'ekti atrofida.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u3-l3',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u3',
        unitTitle: 'Unit 3: N2 Advanced Grammar & Expressions',
        language: 'ja',
        level: 'N2',
        lessonNumber: 13,
        title: '〜に際して (On the occasion of / Prior to)',
        description: 'Rasmiy tadbir yoki muhim hodisa munosabati bilan: "...munosabati bilan / ...olida".',
        estimatedDurationMinutes: 16,
        icon: '🎉',
        steps: [
            {
                id: 'ja-n2-u3-l3-s1',
                title: '〜に際して Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜に際して (Ni saishite)',
                    explanation: 'Shartnoma tuzish, ish boshlash, to\'y yoki tantana kabi muhim voqealar oldidan qo\'llanadigan rasmiy ibora.',
                    keyPoints: [
                        '契約に際して、いくつかの注意点があります。 (Shartnoma munosabati bilan bir nechta muhim nuqtalar bor.)',
                        '利用に際しまして、規約をお読みください。 (Foydalanishdan oldin qoidalarni o\'qing.)'
                    ],
                    vocabulary: [
                        { term: '規約[きやく]', reading: 'Kiyaku', meaning: 'Nizom / Qoidalar', exampleSentence: '規約に同意する。', exampleTranslation: 'Nizomga rozi bo\'lmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u3-l3-e1', type: 'multiple-choice', prompt: '「新校舎[しんこうしゃ]の 完成[かんせい]に _______ 式典[しきてん]が 行[おこな]われた。」', options: ['際して (saishite)', '沿って', '反して', '応じて'], correctAnswer: 0, explanation: 'Ni saishite = munosabati bilan.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u3-l3-q1', question: '「に際して」 qaysi uslubga xos?', options: ['Koushi/Rasmiy va tantanali uslub', 'Ko\'cha nutqi', 'Yosh bolalar tili', 'Dialekt'], correctAnswerIndex: 0, explanation: 'Rasmiy/tantanali uslub.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u3-l4',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u3',
        unitTitle: 'Unit 3: N2 Advanced Grammar & Expressions',
        language: 'ja',
        level: 'N2',
        lessonNumber: 14,
        title: '〜っこない (No chance of / Absolutely impossible)',
        description: 'Qat\'iy inkor va ishonchsizlik: "Aslo ... bo\'lishi mumkin emas".',
        estimatedDurationMinutes: 16,
        icon: '🚫',
        steps: [
            {
                id: 'ja-n2-u3-l4-s1',
                title: '〜っこない Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜っこない (Kkonai)',
                    explanation: 'Mas-stem + っこない. Gapiruvchining shaxsiy ishonchi bo\'yicha biror narsa mutlaqo imkonsizligini ta\'kidlaydi.',
                    keyPoints: [
                        'こんな難しい問題、分かりっこない。 (Bunday murakkab savolni tushunish aslo imkonsiz.)',
                        '一日で全部覚えられっこないよ。 (Bir kunda hammasini yodlab bo\'lmaydi-ku!)'
                    ],
                    vocabulary: [
                        { term: '勝[か]ち目[め]', reading: 'Kachime', meaning: 'G\'alaba imkoniyati', exampleSentence: '勝ち目がない。', exampleTranslation: 'G\'alaba qozonish imkoni yo\'q.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'ja-n2-u3-l4-e1', type: 'multiple-choice', prompt: '「彼[かれ]が 来[き] _______ よ。もう 諦[あきら]めよう。」', options: ['っこない (kkonai)', 'に違いない', 'はずだ', 'べきだ'], correctAnswer: 0, explanation: 'Kkonai = kelishi aslo imkonsiz.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u3-l4-q1', question: '「〜っこない」 fe\'lning qaysi shakliga qo\'shiladi?', options: ['Fe\'lning Mas-o\'zagiga (Mas-stem)', 'Dictionary form', 'Te-form', 'Nai-form'], correctAnswerIndex: 0, explanation: 'Mas-stem + っこない.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u3-l5',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u3',
        unitTitle: 'Unit 3: N2 Advanced Grammar & Expressions',
        language: 'ja',
        level: 'N2',
        lessonNumber: 15,
        title: '〜にほかならない (Nothing other than / Must be precisely)',
        description: 'Qat\'iy xulosa: "...dan boshqa narsa emas / aynan ...dir".',
        estimatedDurationMinutes: 16,
        icon: '🎯',
        steps: [
            {
                id: 'ja-n2-u3-l5-s1',
                title: '〜にほかならない Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜にほかならない (Ni hokaranarai)',
                    explanation: 'Sabab yoki xulosaning yagona va haqiqiy ekanligini uzil-kesil ta\'kidlash.',
                    keyPoints: [
                        '彼の成功は努力の成果にほかならない。 (Mening muvaffaqiyatim mehnat mevasidan boshqa narsa emas.)',
                        '親が叱るのは愛情からにほかならない。 (Ota-onaning urushishi sevgidan boshqa narsa emas.)'
                    ],
                    vocabulary: [
                        { term: '成果[せいか]', reading: 'Seika', meaning: 'Natija / Meva', exampleSentence: '努力の成果が出た。', exampleTranslation: 'Mehnat mevasini berdi.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u3-l5-e1', type: 'multiple-choice', prompt: '「合格[ごうかく]できたのは 先生[せんせい]の 指導[しどう]の おかげ _______。」', options: ['にほかならない (nihokaranarai)', 'にすぎない', 'にあたらない', 'にかぎらない'], correctAnswer: 0, explanation: 'Ni hokaranarai = o\'qituvchi rahbarligidan boshqa narsa emas.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u3-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u3-l5-q1', question: '「にほかならない」 ning ma\'nosi:', options: ['Aynan shu sabab/narsa ekanligi (boshqasi emas)', 'Mumkin bo\'lgan narsa', 'Noma\'lum narsa', 'Juda arzon narsa'], correctAnswerIndex: 0, explanation: 'Aynan shu narsadan boshqasi emas.' }
                    ]
                }
            }
        ]
    },

    // Unit 4: N2 Social Topics & Business Dokkai (Lessons 16 - 20)
    {
        id: 'ja-n2-u4-l1',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u4',
        unitTitle: 'Unit 4: N2 Dokkai & Social Context',
        language: 'ja',
        level: 'N2',
        lessonNumber: 16,
        title: 'Environmental & Technological Reading (環境・技術の読解)',
        description: 'Ekologiya va texnologiyaga oid N2 uzun matnlarni tahlil qilish va muallif g\'oyasini topish.',
        estimatedDurationMinutes: 18,
        icon: '🌱',
        steps: [
            {
                id: 'ja-n2-u4-l1-s1',
                title: 'Ekologiya va Texnologiya Matni',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'Environmental Literacy & Dokkai',
                    explanation: 'N2 imtihonidagi "Choubun" (uzun matn) va "Chuubun" (o\'rta matn) strategiyalari.',
                    keyPoints: [
                        '再利用 (Sairiyou) — qayta foydalanish',
                        '持続可能 (Jizokukanou) — barqaror (sustainable)',
                        'Muallif ta\'kidlagan xulosa matn oxirida 「〜のではないだろうか」 bilan keladi.'
                    ],
                    vocabulary: [
                        { term: '持続可能[じぞくかのう]', reading: 'Jizokukanou', meaning: 'Barqaror (sustainable)', exampleSentence: '持続可能な社会を目指す。', exampleTranslation: 'Barqaror jamiyat sari intilish.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l1-s2',
                title: 'Dokkai Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Matn bo\'yicha to\'g\'ri fikrni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u4-l1-e1', type: 'multiple-choice', prompt: '「持続可能な社会」 deganda nimaga e\'tibor qaratiladi?', options: ['Kelajak avlod uchun resurslarni asrash va atrof-muhitni muhofaza qilishga', 'Faqat tez pul topishga', 'Zavodlarni ko\'paytirishga', 'Yo\'llarni kengaytirishga'], correctAnswer: 0, explanation: 'Kelajak avlod uchun atrof-muhitni asrash.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u4-l1-q1', question: 'N2 Dokkai matnlarida 「〜とは限らない」 ning vazifasi:', options: ['Umumiy qarashga nisbatan istisno ko\'rsatish', 'Buyruq berish', 'Ruxsat berish', 'Minnatdorchilik bildirish'], correctAnswerIndex: 0, explanation: 'Istisno va chegaralash.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u4-l2',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u4',
        unitTitle: 'Unit 4: N2 Dokkai & Social Context',
        language: 'ja',
        level: 'N2',
        lessonNumber: 17,
        title: '〜に先立って (Prior to / In advance of)',
        description: 'Tadbir yoki loyiha oldidan tayyorgarlik ko\'rish: "...dan oldin / ...ga tayyorgarlik ko\'rib".',
        estimatedDurationMinutes: 16,
        icon: '📅',
        steps: [
            {
                id: 'ja-n2-u4-l2-s1',
                title: '〜に先立って Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜に先立って (Ni sakadatte)',
                    explanation: 'Loyiha yoki yirik tadbir boshlanishidan oldin zarur tayyorgarlik yoki uchrashuv o\'tkazish.',
                    keyPoints: [
                        '開店に先立ち、関係者向けの内覧会が行われた。 (Do\'kon ochilishidan oldin taklif etilganlar uchun ko\'rgazma bo\'ldi.)',
                        '総会に先立って、理事会が開かれた。 (Bosh assambleyadan oldin kengash yig\'ildi.)'
                    ],
                    vocabulary: [
                        { term: '総会[そうかい]', reading: 'Soukai', meaning: 'Bosh assambleya / Umumiy yig\'ilish', exampleSentence: '年次総会を開催する。', exampleTranslation: 'Yillik bosh assambleyani o\'tkazmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u4-l2-e1', type: 'multiple-choice', prompt: '「映画[えいが]の 公開[こうかい]に _______、監督[かんとく]の 記者[きしゃ]会見[かいけん]が あった。」', options: ['先立って (sakadatte)', '際して', '伴って', '応じて'], correctAnswer: 0, explanation: 'Ni sakadatte = namoyishdan oldin.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u4-l2-q1', question: '「に先立って」 grammatik birikmasi fe\'lning qaysi shakli bilan ishlatiladi?', options: ['Lug\'at shakli (Dictionary form) yoki Ot (Noun)', 'Te-form', 'Nai-form', 'Ba-form'], correctAnswerIndex: 0, explanation: 'Dict-form / Noun + に先立って.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u4-l3',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u4',
        unitTitle: 'Unit 4: N2 Dokkai & Social Context',
        language: 'ja',
        level: 'N2',
        lessonNumber: 18,
        title: '〜を契機に (Triggered by / Taking the opportunity of)',
        description: 'Katta o\'zgarishga turtki bo\'lgan hodisa: "...munosabati bilan / ...turtki bo\'lib".',
        estimatedDurationMinutes: 16,
        icon: '🚀',
        steps: [
            {
                id: 'ja-n2-u4-l3-s1',
                title: '〜を契機に Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜を契機に (O keiki ni)',
                    explanation: 'Biror muhim hodisa hayotda yoki jamiyatda burilish yasaganda turtki sifatida ko\'rsatish.',
                    keyPoints: [
                        '病気を契機に、健康的な生活を始めた。 (Kasal bo\'lganim hayotimni sog\'lom tomonga o\'zgartirishga turtki bo\'ldi.)',
                        '渡日を契機として、合気道を習い始めた。 (Yaponiyaga kelganim Aikidoni o\'rganishimga turtki berdi.)'
                    ],
                    vocabulary: [
                        { term: '契機[けいき]', reading: 'Keiki', meaning: 'Turtki / Imkoniyat / Burilish nuqtasi', exampleSentence: '発展の契機となる。', exampleTranslation: 'Rivojlanishga turtki bo\'lmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri grammatik iborani tanlang.',
                    exercises: [
                        { id: 'ja-n2-u4-l3-e1', type: 'multiple-choice', prompt: '「定年[ていねん]退職[たいしょく]を _______、写真[しゃしん]を 趣味[しゅみ]に した。」', options: ['契機に (keiki ni)', 'めぐって', 'に際して', 'ついでに'], correctAnswer: 0, explanation: 'O keiki ni = pensiyaga chiqish turtki bo\'ldi.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u4-l3-q1', question: '「を契機に」 bilan 「をきっかけに」 o\'rtasidagi farq:', options: ['「を契機に」 rasmiyroq va yozma yirik o\'zgarishlarga ishlatiladi', 'Farqi yo\'q, bir xil', 'Aksincha', 'Faqat salbiy holatlarga'], correctAnswerIndex: 0, explanation: 'Keiki ni = rasmiy yozma uslub.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u4-l4',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u4',
        unitTitle: 'Unit 4: N2 Dokkai & Social Context',
        language: 'ja',
        level: 'N2',
        lessonNumber: 19,
        title: '〜を込めて (With all one\'s heart / Filled with)',
        description: 'Hissiyot va tilaklarni bag\'ishlash: "...mehr bilan / ...tilaklar bilan".',
        estimatedDurationMinutes: 16,
        icon: '💖',
        steps: [
            {
                id: 'ja-n2-u4-l4-s1',
                title: '〜を込めて Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: '〜を込めて (O komete)',
                    explanation: 'Yurakdan chiqqan tuyg\'u (mehr, tilak, duo, raxmat) bilan biror ish qilish.',
                    keyPoints: [
                        '感謝の気持ちを込めて、プレゼントを贈る。 (Minnetdorchilik tuyg\'usi bilan sovg\'a taqdim etmoq.)',
                        '愛を込めて編んだセーター。 (Mehr bilan to\'qilgan sviter.)'
                    ],
                    vocabulary: [
                        { term: '込[こ]める', reading: 'Komeru', meaning: 'Bag\'ishlamoq / Bag\'riga olmoq', exampleSentence: '心を込めて作りました。', exampleTranslation: 'Samimiy qalb bilan tayyorladim.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri iborani tanlang.',
                    exercises: [
                        { id: 'ja-n2-u4-l4-e1', type: 'multiple-choice', prompt: '「平和[へいわ]への 願い[ねがい]を _______、歌[うた]を 歌[うた]う。」', options: ['込めて (komete)', '通じて', 'めぐって', '応じて'], correctAnswer: 0, explanation: 'O komete = tinchlik tilagi bilan.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u4-l4-q1', question: '「心を込めて」 iborasining ma\'nosi:', options: ['Chin yurakdan / samimiy mehr bilan', 'Shoshilib', 'Majburiyatdan', 'Xafa bo\'lib'], correctAnswerIndex: 0, explanation: 'Chin yurakdan / mehr bilan.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u4-l5',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u4',
        unitTitle: 'Unit 4: N2 Dokkai & Social Context',
        language: 'ja',
        level: 'N2',
        lessonNumber: 20,
        title: 'N2 Listening Comprehension (聴解 - 即時応答 & 概要理解)',
        description: 'JLPT N2 Chokkai tinglab tushunish ko\'nikmasi: Tezkor javob (Sokuji outou) va Asosiy g\'oya (Gaiyou rikai).',
        estimatedDurationMinutes: 18,
        icon: '🎧',
        steps: [
            {
                id: 'ja-n2-u4-l5-s1',
                title: 'Chokkai Strategiyasi',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'N2 Chokkai Audio Listening',
                    explanation: 'N2 Tinglab tushunish imtihonida dialog va mulohazalarni tezkor va aniq ilg\'ash.',
                    keyPoints: [
                        'Sokuji outou — Savol aytilishi bilan darhol to\'g\'ri javob reaksiyasini tanlash',
                        'Gaiyou rikai — Butun dialog oxirida aytilgan umumiy xulosani tushunish',
                        'Intonatsiya va so\'zlarning o\'zaro bog\'liqligi'
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l5-s2',
                title: 'Chokkai Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Tinglab to\'g\'ri reaksiyani tanlang.',
                    exercises: [
                        { id: 'ja-n2-u4-l5-e1', type: 'multiple-choice', prompt: '«A: この資料、明日までにコピーしておいてくれない？» — B ning to\'g\'ri javobi:', options: ['わかりました。何部用意しましょうか。', 'いいえ、昨日しました。', '明日行きます。', 'コピー機がありません。'], correctAnswer: 0, explanation: 'Wakarimashita. Nanbu yooideshou ka (tushundim, nechta nusxa?).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u4-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u4-l5-q1', question: '«A: ちょっと手伝っていただけますか。» — B ning mos javobi:', options: ['ええ、もちろんです。何でしょうか。', '手伝いました。', '駄目です。', '知りません。'], correctAnswerIndex: 0, explanation: 'Ee, mochiron desu (albatta, xizmat?).' }
                    ]
                }
            }
        ]
    },

    // Unit 5: N2 Kanji & Advanced Vocabulary (Lessons 21 - 25)
    {
        id: 'ja-n2-u5-l1',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u5',
        unitTitle: 'Unit 5: N2 Kanji & Vocabulary',
        language: 'ja',
        level: 'N2',
        lessonNumber: 21,
        title: 'N2 Business Kanji (職・企・業・採)',
        description: 'Ish va biznesga oid N2 kanjilar: 職 (ish/kasb), 企 (reja/korxona), 業 (sanoat), 採 (qabul qilish).',
        estimatedDurationMinutes: 16,
        icon: '🏢',
        steps: [
            {
                id: 'ja-n2-u5-l1-s1',
                title: 'Biznes Kanjilar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Kanji for Employment & Business',
                    explanation: 'N2 darajadagi 1000 ta kanjidan biznes sohasida eng faol qism.',
                    keyPoints: [
                        '職業 (Shokugyou) — kasb-kor',
                        '企業 (Kigyou) — korxona / kompaniya',
                        '採用 (Saiyou) — ishga qabul qilish'
                    ],
                    vocabulary: [
                        { term: '採用[さいよう]', reading: 'Saiyou', meaning: 'Ishga qabul qilish', exampleSentence: '新卒を採用する。', exampleTranslation: 'Bitiruvchilarni ishga olmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l1-s2',
                title: 'Kanji Mashqi',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'Kanji o\'qilishini tanlang.',
                    exercises: [
                        { id: 'ja-n2-u5-l1-e1', type: 'multiple-choice', prompt: '「企業」 kanjisining o\'qilishi:', options: ['きぎょう (kigyou)', 'しぎょう', 'こうぎょう', 'さんぎょう'], correctAnswer: 0, explanation: 'Kigyou = korxona.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u5-l1-q1', question: '「職業」 so\'zining ma\'nosi:', options: ['Kasb / Hunar', 'Maktab', 'Sayohat', 'Kasalxona'], correctAnswerIndex: 0, explanation: 'Shokugyou = kasb.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u5-l2',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u5',
        unitTitle: 'Unit 5: N2 Kanji & Vocabulary',
        language: 'ja',
        level: 'N2',
        lessonNumber: 22,
        title: 'N2 Legal & Government Kanji (法・律・規・政)',
        description: 'Qonunchilik va davlat boshqaruvi kanjilari: 法 (qonun), 律 (qoida), 規 (nizom), 政 (siyosat).',
        estimatedDurationMinutes: 16,
        icon: '🏛️',
        steps: [
            {
                id: 'ja-n2-u5-l2-s1',
                title: 'Qonun va Siyosat Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Kanji for Law & Governance',
                    explanation: 'N2 matn va yangiliklarda ko\'p uchraydigan qonunchilik kanjilari.',
                    keyPoints: [
                        '法律 (Houritsu) — qonun',
                        '規則 (Kisoku) — qoida / intizom',
                        '政府 (Seifu) — hukumat'
                    ],
                    vocabulary: [
                        { term: '政府[せいふ]', reading: 'Seifu', meaning: 'Hukumat', exampleSentence: '政府の方針。', exampleTranslation: 'Hukumat yo\'nalishi.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri o\'qilishni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u5-l2-e1', type: 'multiple-choice', prompt: '「法律」 kanjisining to\'g\'ri o\'qilishi:', options: ['ほうりつ (houritsu)', 'ほうりつく', 'ほりつ', 'ほうりっつ'], correctAnswer: 0, explanation: 'Houritsu = qonun.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u5-l2-q1', question: '「規則を守る」 ning ma\'nosi:', options: ['Qoidalarga rioya qilish', 'Qoidalarni buzish', 'Qoidalarni o\'chirish', 'Qoidasiz yashash'], correctAnswerIndex: 0, explanation: 'Qoidalarga rioya qilish.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u5-l3',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u5',
        unitTitle: 'Unit 5: N2 Kanji & Vocabulary',
        language: 'ja',
        level: 'N2',
        lessonNumber: 23,
        title: 'N2 Compound Verbs (〜直す, 〜直ちに, 〜終える)',
        description: 'Qo\'shma fe\'llar: "...qaytadan qilish", "darg\'azab bo\'lish", "yakuniga yetkazish".',
        estimatedDurationMinutes: 16,
        icon: '🔄',
        steps: [
            {
                id: 'ja-n2-u5-l3-s1',
                title: 'N2 Qo\'shma Fe\'llar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'N2 Compound Verbs Mastery',
                    explanation: 'Ikki fe\'lning birikishidan hosil bo\'lgan N2 murakkab harakatlar.',
                    keyPoints: [
                        'やり直す (Yarinaosu) — qaytadan boshqatdan qilish',
                        '見直す (Minaosu) — qayta ko\'rib chiqish / baha berish',
                        '直ちに (Tadachi ni) — zudlik bilan / darhol'
                    ],
                    vocabulary: [
                        { term: '直[ただ]ちに', reading: 'Tadachini', meaning: 'Zudlik bilan / Darhol', exampleSentence: '直ちに報告しなさい。', exampleTranslation: 'Darhol hisobot bering.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri fe\'lni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u5-l3-e1', type: 'multiple-choice', prompt: '「間違えたので、もう一度 _______。」', options: ['やり直した (yarinaoshita)', 'やり始めた', 'やり終わった', 'やりかけた'], correctAnswer: 0, explanation: 'Yarinaoshita = qaytadan qildim.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u5-l3-q1', question: '「見直す」 ning ma\'nosi:', options: ['Qayta tekshirmoq / qayta ko\'rib chiqmoq', 'Ko\'rishni to\'xtatmoq', 'Ko\'zni yummoq', 'Ko\'ra olmaslik'], correctAnswerIndex: 0, explanation: 'Qayta ko\'rib chiqmoq.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u5-l4',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u5',
        unitTitle: 'Unit 5: N2 Kanji & Vocabulary',
        language: 'ja',
        level: 'N2',
        lessonNumber: 24,
        title: 'N2 Onomatopoeia & Mimetic Words (擬音語・擬態語)',
        description: 'Tavsifiy taqlid so\'zlar: "Sukkiri", "Giri-giri", "Waku-waku", "Ira-ira".',
        estimatedDurationMinutes: 16,
        icon: '✨',
        steps: [
            {
                id: 'ja-n2-u5-l4-s1',
                title: 'Giongo & Gitaigo',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'N2 Onomatopoeic Expressions',
                    explanation: 'Yapon tilidagi ruhiy va jismoniy holatlarni ifodalovchi taqlid so\'zlar.',
                    keyPoints: [
                        'すっきり (Sukkiri) — yengil tortured, tinchlanganda',
                        'ぎりぎり (Girigiri) — zo\'rg\'a, so\'nggi sekundda',
                        'いらいら (Iraira) — asabiylashib, g\'azablanib'
                    ],
                    vocabulary: [
                        { term: 'ぎりぎり', reading: 'Girigiri', meaning: 'Zo\'rg me\'yorida / oxirgi momentda', exampleSentence: '電車にぎりぎり間に合った。', exampleTranslation: 'Poyezdga zo\'rg\'a ulgurdim.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri taqlid so\'zni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u5-l4-e1', type: 'multiple-choice', prompt: '「テストが終わって、気分が _______ した。」', options: ['すっきり (sukkiri)', 'いらいら', 'ぎりぎり', 'ぐっすり'], correctAnswer: 0, explanation: 'Sukkiri = ruhiy yengillik.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u5-l4-q1', question: '«Iraira suru» nimani bildiradi?', options: ['Asabiylashmoq / g\'azablanmoq', 'Uchib ketmoq', 'Uxlash', 'Kulmoq'], correctAnswerIndex: 0, explanation: 'Asabiylashmoq.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u5-l5',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u5',
        unitTitle: 'Unit 5: N2 Kanji & Vocabulary',
        language: 'ja',
        level: 'N2',
        lessonNumber: 25,
        title: 'N2 Vocabulary Synthesis & Synonym Practice',
        description: 'Sinonimlar va ma\'nodosh N2 so\'zlarni moslashtirish mashg\'uloti.',
        estimatedDurationMinutes: 16,
        icon: '📚',
        steps: [
            {
                id: 'ja-n2-u5-l5-s1',
                title: 'N2 Sinonimlar',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'N2 Synonyms & Paraphrasing',
                    explanation: 'N2 imtihonidagi "Iikae ruiyaku" (ma\'nodosh almashtirish) bo\'limi.',
                    keyPoints: [
                        '抽象的 (Chuushouteki) = 具体的ではない (Aniqlikdan yiroq)',
                        '奇妙な (Kimyou na) = 変な (G\'alati)',
                        '断念する (Dannen suru) = 諦める (Tashlab qo\'ymoq/Umid uzmoq)'
                    ],
                    vocabulary: [
                        { term: '断念[だんねん]する', reading: 'Dannen suru', meaning: 'Umid uzmoq / Voz kechmoq', exampleSentence: '計画を断念する。', exampleTranslation: 'Rejadan voz kechmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l5-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 5,
                practiceData: {
                    instructions: 'To\'g\'ri sinonimni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u5-l5-e1', type: 'multiple-choice', prompt: '「断念した」 ning sinonimi:', options: ['諦めた (akirame ta)', '始めた', '成功した', '信じた'], correctAnswer: 0, explanation: 'Akirameta = voz kechdi.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u5-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u5-l5-q1', question: '「奇妙な」 so\'zining ma\'nosi:', options: ['G\'alati / Anoyi', 'Chiroyli', 'Qimmat', 'Yangi'], correctAnswerIndex: 0, explanation: 'Hen na / G\'alati.' }
                    ]
                }
            }
        ]
    },

    // Unit 6: N2 Capstone & Certification Exam (Lessons 26 - 30)
    {
        id: 'ja-n2-u6-l1',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u6',
        unitTitle: 'Unit 6: N2 Final Assessment & N1 Bridge',
        language: 'ja',
        level: 'N2',
        lessonNumber: 26,
        title: 'N2 Keigo Mastery (尊敬語・謙譲語の総復習)',
        description: 'Hurmat va kamtarinlik iboralarining biznes darajasidagi to\'liq sinovidan o\'tish.',
        estimatedDurationMinutes: 18,
        icon: '🙇',
        steps: [
            {
                id: 'ja-n2-u6-l1-s1',
                title: 'Keigo General Mastery',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'Sonkeigo & Kenjougo Review',
                    explanation: 'N2 Keigo grammatikasida eng ko\'p adashtiriladigan fe\'llar integratsiyasi.',
                    keyPoints: [
                        '行く/来る -> 拝察する (xatda), お越しになる (mijozga), 伺う (o\'zi borishi)',
                        '言われる -> おっしゃる, 言う -> 申す / 申し上げます'
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l1-s2',
                title: 'Keigo Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri Keigo fe\'lini tanlang.',
                    exercises: [
                        { id: 'ja-n2-u6-l1-e1', type: 'multiple-choice', prompt: '「社長[しゃちょう]が _______。」 (Prezident kelmoqda)', options: ['お見えになりました', '伺いました', '参りました', '申しました'], correctAnswer: 0, explanation: 'Omie ni narimashita = Prezident tashrif buyurdi.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u6-l1-q1', question: 'O\'zingiz haqingizda mijozga gapirganda qaysi Keigo turi ishlatiladi?', options: ['Kenjougo (Kamtarinlik)', 'Sonkeigo (Izzat)', 'Teineigo (Oddiy mas)', 'Koushi'], correctAnswerIndex: 0, explanation: 'Kenjougo (Kamtarinlik shakli).' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u6-l2',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u6',
        unitTitle: 'Unit 6: N2 Final Assessment & N1 Bridge',
        language: 'ja',
        level: 'N2',
        lessonNumber: 27,
        title: 'N2 Grammar Integration (文法総合問題)',
        description: 'JLPT N2 darajasidagi barcha 50+ grammatik qoidalarni aralash test orqali tekshirish.',
        estimatedDurationMinutes: 18,
        icon: '📝',
        steps: [
            {
                id: 'ja-n2-u6-l2-s1',
                title: 'Grammatika Integratsiyasi',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'N2 Grammar Comprehensive Rules',
                    explanation: '〜に際して, 〜を契機に, 〜ざるを得ない, 〜にほかならない kabi N2 birikmalari.',
                    keyPoints: [
                        'Rasmiy grammatika qo\'shimchalari',
                        'Sub\'yektiv baho va shaxsiy qaror gramatikasi'
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u6-l2-e1', type: 'multiple-choice', prompt: '「彼[かれ]の 成功[せいこう]は 努力[どりょく]の 賜物[たまもの] _______。」', options: ['にほかならない', 'っこない', 'にすぎない', 'に先立って'], correctAnswer: 0, explanation: 'Ni hokaranarai (boshqa narsa emas).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u6-l2-q1', question: '「雨[あめ]が 降[ふ]り _______。」 (Yomg\'ir yog\'ishi ehtimoldan yiroq emas/xavf bor)', options: ['かねない (kanenai)', 'かねる', 'っこない', 'にすぎない'], correctAnswerIndex: 0, explanation: 'Kanenai = salbiy xavf bor.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u6-l3',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u6',
        unitTitle: 'Unit 6: N2 Final Assessment & N1 Bridge',
        language: 'ja',
        level: 'N2',
        lessonNumber: 28,
        title: 'N2 Information Retrieval (情報検索の読解)',
        description: 'JLPT N2 "Jouhou Kensaku" — E\'lonlar, jadval va hujjatlardan tezkor ma\'lumot qidirish.',
        estimatedDurationMinutes: 18,
        icon: '🔍',
        steps: [
            {
                id: 'ja-n2-u6-l3-s1',
                title: 'Ma\'lumot Izlash Dokkaisi',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'Information Retrieval Techniques',
                    explanation: 'Jadval va e\'lonlardan berilgan shartga mos keladigan bandni 2 daqiqada topish.',
                    keyPoints: [
                        'Diqqatni faqat savoldagi shartlarga qaratish (masalan: yosh, narx, muddat)',
                        'E\'lon tagidagi izoh (※ hamda 注) ga alohida e\'tibor bering.'
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Shartga mos keladigan variantni tanlang.',
                    exercises: [
                        { id: 'ja-n2-u6-l3-e1', type: 'multiple-choice', prompt: 'E\'londa 「学生割引は平日のみ適用」 deb yozilgan bo\'lsa, Shanba kuni talaba chegirma oladimi?', options: ['Chegirma ololmaydi (Faqat ish kunlari)', 'Oladi', 'Yarim narx', 'Tekin'], correctAnswer: 0, explanation: 'Faqat ish kunlari (平日のみ).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 6,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u6-l3-q1', question: '「※」 belgisining imtihon matnlaridagi ma\'nosi:', options: ['Ishora / Muhim qo\'shimcha izoh', 'Rasm', 'Xato', 'Narx'], correctAnswerIndex: 0, explanation: 'Muhim qo\'shimcha izoh.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u6-l4',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u6',
        unitTitle: 'Unit 6: N2 Final Assessment & N1 Bridge',
        language: 'ja',
        level: 'N2',
        lessonNumber: 29,
        title: 'N2 Full Simulation Mock Exam (模擬試験)',
        description: 'JLPT N2 darajasidagi to\'liq sinov simulyatsiyasi va baholash.',
        estimatedDurationMinutes: 20,
        icon: '📊',
        steps: [
            {
                id: 'ja-n2-u6-l4-s1',
                title: 'N2 Sinov Imtihoni',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'N2 Simulation Readiness',
                    explanation: 'Gengo Chishiki, Dokkai va Chokkai bo\'limlarini birlashtirgan simulyatsiya.',
                    keyPoints: [
                        'Vaqtni to\'g\'ri taqsimlash',
                        'N1 darajasiga o\'tish ko\'rsatkichi (75%+)'
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l4-s2',
                title: 'Simulyatsiya Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'N2 simulyatsiya savoliga javob bering.',
                    exercises: [
                        { id: 'ja-n2-u6-l4-e1', type: 'multiple-choice', prompt: '「社長[しゃちょう]の 方針[ほうしん]に 反[はん]して、プロジェクトを 進[すす]める わけには _______。」', options: ['いかない', 'ならない', '得ない', 'すぎない'], correctAnswer: 0, explanation: 'Wake ni wa ikanai (shaxsiy prinsiplarga zid).' }
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n2-u6-l4-q1', question: '「〜ざるを得ない」 ning to\'g\'ri ma\'nosi:', options: ['...qilishga majbur bo\'lmoq (boshqa chora yo\'q)', 'Taqiqlanadi', 'Xohlamayman', 'Tushunmayman'], correctAnswerIndex: 0, explanation: 'Majbur bo\'lmoq.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n2-u6-l5',
        courseId: 'jlpt-n2',
        unitId: 'ja-n2-u6',
        unitTitle: 'Unit 6: N2 Final Assessment & N1 Bridge',
        language: 'ja',
        level: 'N2',
        lessonNumber: 30,
        title: 'JLPT N2 Official Graduation & N1 Gate Assessment',
        description: 'JLPT N2 darajasini rasman bitirish va JLPT N1 cho\'qqisiga o\'tish imtihoni.',
        estimatedDurationMinutes: 20,
        icon: '🏆',
        steps: [
            {
                id: 'ja-n2-u6-l5-s1',
                title: 'N2 Oliy Xulosa',
                type: 'learn',
                estimatedMinutes: 6,
                learnData: {
                    title: 'N2 Graduation & N1 Preparation',
                    explanation: 'Tabriklaymiz! Siz JLPT N2 darajasini to\'liq tamomladingiz. Endi Yaponiyada oliy ta\'lim va professional ishga tayyorsiz.',
                    keyPoints: [
                        '1000 Kanji va 6000 Vocabulary bazasiga ega bo\'ldingiz.',
                        'JLPT N1 darajasidagi klassik va oliy ilmiy grammatikaga tayyorsiz.'
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l5-s2',
                title: 'N2 Bitiruv Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Bitiruv testining amaliy savoliga javob bering.',
                    exercises: [
                        { id: 'ja-n2-u6-l5-e1', type: 'multiple-choice', prompt: '「今後[こんご]とも 格別[かくべつ]の ご高配[こうはい]を 賜[たまわ]りますよう、_______。」', options: ['お願[ねが]い 申[もう]し上[あ]げます', 'お願[ねが]いします', '頼[たの]むよ', 'どうぞ'], correctAnswer: 0, explanation: 'Onegai moushiagemasu.' }
                    ]
                }
            },
            {
                id: 'ja-n2-u6-l5-s3',
                title: 'JLPT N2 Final Promotion Certification Exam',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'N1 darajasiga o\'tish uchun testni kamida 80% natija bilan topshiring.',
                    passingScorePercentage: 80,
                    questions: [
                        { id: 'ja-n2-u6-l5-q1', question: '「事故[じこ]の 原因[げんいん]を 究明[きゅうめい]せざるを _______。」', options: ['得[え]ない (enai)', 'いかない', 'ならない', 'かねない'], correctAnswerIndex: 0, explanation: 'Sezaru o enai.' },
                        { id: 'ja-n2-u6-l5-q2', question: '「景気[けいき]の 変動[へんどう]に _______、生産[せいさん]計画[けいかく]を 変更[へんこう]する。」', options: ['伴[ともな]って / 応[おう]じて', 'ついて', '対[たい]して', 'とって'], correctAnswerIndex: 0, explanation: 'Oujite / Tomonatte.' },
                        { id: 'ja-n2-u6-l5-q3', question: 'JLPT N2 darajasini tugatgandan so\'ng qaysi darajaga o\'tiladi?', options: ['JLPT N1 (Native-level Academic Mastery)', 'JLPT N3', 'CEFR A1', 'TOEFL'], correctAnswerIndex: 0, explanation: 'JLPT N1.' },
                        { id: 'ja-n2-u6-l5-q4', question: 'Tabriklaymiz! Siz N2 sertifikatlash talablarini muvaffaqiyatli bajardingiz.', options: ['Sertifikatni Qabul Qilish', 'Darslarni Takrorlash', 'Bosh Sahifa', 'N1 Darslariga O\'tish'], correctAnswerIndex: 0, explanation: 'Sertifikat taqdim etildi.' }
                    ]
                }
            }
        ]
    }
];

