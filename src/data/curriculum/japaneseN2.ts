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
    }
];
