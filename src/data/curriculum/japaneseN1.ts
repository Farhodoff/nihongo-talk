import { Lesson } from '../../types/lesson';

export const JAPANESE_N1_LESSONS: Lesson[] = [
    // Unit 1: Classical & Literary Grammar Foundations
    {
        id: 'ja-n1-u1-l1',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u1',
        unitTitle: 'Unit 1: Classical & Literary Grammar',
        language: 'ja',
        level: 'N1',
        lessonNumber: 1,
        title: 'Classical Concessions: 〜であれ / 〜であろうと (No Matter What / Be it)',
        description: 'Mumtoz yapon tili grammatikasining oliy ifodasi: qanday holat bo\'lishidan qat\'i nazar (De are / Dearou to).',
        estimatedDurationMinutes: 18,
        icon: '📜',
        steps: [
            {
                id: 'ja-n1-u1-l1-s1',
                title: '〜であれ / 〜であろうと Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Universal Concession (〜であれ / 〜であろうと)',
                    explanation: 'Qadimgi mumtoz bungo (文語) uslubidan saqlanib qolgan yuksak adabiy konstruksiya: "Kim yoki nima bo\'lishidan qat\'i nazar, qoida o\'zgarmasdir".',
                    keyPoints: [
                        'たとえ 国王[こくおう]であれ、法[ほう]の 前[まえ]には 平等[びょうどう]で ある。 (Hatto podshoh bo\'lsa ham, qonun oldida tengdir.)',
                        'いかなる 理由[りゆう]であろうと、暴力[ぼうりょく]は 許[ゆる]されない。 (Har qanday vaj yoki sabab bo\'lmasin, zo\'ravonlik oqlanmaydi.)'
                    ],
                    vocabulary: [
                        { term: 'いかなる', reading: 'Ikanaru', meaning: 'Har qanday / Qanday bo\'lmasin (oliy adabiy)', exampleSentence: 'いかなる 困難[こんなん]にも 屈[くっ]しない。', exampleTranslation: 'Har qanday qiyinchilikka bo\'ysunmaslik.' },
                        { term: '屈[くっ]する', reading: 'Kussuru', meaning: 'Tiz cho\'kmoq / Bo\'ysunmoq', exampleSentence: '圧力[あつりょく]に 屈[くっ]する。', exampleTranslation: 'Bosimga bo\'ysunmoq.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Oliy adabiy shaklni tanlang.',
                    exercises: [
                        { id: 'ja-n1-u1-l1-e1', type: 'multiple-choice', prompt: '«Kim bo\'lishidan qat\'i nazar, barcha fuqarolar soliq to\'lashi shart»:', options: ['いかなる 富豪[ふごう]であれ、納税[のうぜい]の 義務[ぎむ]を 負[お]う', '富豪[ふごう]だから', '富豪[ふごう]なら', '富豪[ふごう]です'], correctAnswer: 0, explanation: 'Fugou de are (boy bo\'lishidan qat\'i nazar).' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u1-l1-q1', question: '「たとえ 誰[だれ]であろうと」ning ma\'nosi:', options: ['Kim bo\'lishidan qat\'i nazar (No matter who it is)', 'Faqat bitta kishi', 'O\'sha kishi', 'Hech kim'], correctAnswerIndex: 0, explanation: 'No matter who it is.' },
                        { id: 'ja-n1-u1-l1-q2', question: '「〜であれ〜であれ」qo\'shaloq shakli nimani bildiradi?', options: ['A bo\'lsin, B bo\'lsin (ikkala holatda ham baribir)', 'Faqat A', 'Faqat B', 'Hech biri'], correctAnswerIndex: 0, explanation: 'Whether A or B.' },
                        { id: 'ja-n1-u1-l1-q3', question: '«Qanday sabab bo\'lishidan qat\'i nazar qotillik jinoyatdir»:', options: ['いかなる 理由[りゆう]であれ、殺人[さつじん]は 犯罪[はんざい]で ある', '理由[りゆう]が あるから', '理由[りゆう]なら', '理由[りゆう]です'], correctAnswerIndex: 0, explanation: 'Ikanaru riyuu de are.' },
                        { id: 'ja-n1-u1-l1-q4', question: '〜であれ konstruksiyasi qaysi uslubga mansub?', options: ['Bungo / Oliy adabiy-rasmiy yapon tili', 'Ko\'cha slengi', 'Bolalar tili', 'SMS tili'], correctAnswerIndex: 0, explanation: 'High literary / Classical register.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u1-l2',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u1',
        unitTitle: 'Unit 1: Classical & Literary Grammar',
        language: 'ja',
        level: 'N1',
        lessonNumber: 2,
        title: 'Status & Duty: 〜たるもの vs 〜まじき (Fit for a leader vs Unforgivable for)',
        description: 'Sharafli maqomga loyiqlik (tarumono - mavqeiga xos) va mutlaqo yarashmaydigan xatti-harakat (majiki).',
        estimatedDurationMinutes: 18,
        icon: '⚖️',
        steps: [
            {
                id: 'ja-n1-u1-l2-s1',
                title: '〜たるもの va 〜まじき Qoidasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Status Expectation (〜たるもの) vs Unpardonable Act (〜まじき)',
                    explanation: '1. 〜たるもの (Ot + taru mono): Boshqaruvchi, olim yoki rahbar kabi yuqori maqom egasi qanday bo\'lishi shartligini bildiradi: 医者[いしゃ]たるもの、患者[かんじゃ]の 命[いのち]を 最優先[さいゆうせん]に すべきだ (Shifokor degan zot bemor hayotini eng birinchi o\'ringa qo\'yishi shart). 2. 〜まじき (Fe\'l lug\'at shakli + majiki + Ot): Ushbu kasb yoki maqomdagi inson uchun mutlaqo kechirib bo\'lmas xato: 政治家[せいじか]として あるまじき 発言[はつげん] (Siyosatchi uchun mutlaqo yarashmaydigan/kechirilmas bayonot).',
                    vocabulary: [
                        { term: '発言[はつげん]', reading: 'Hatsugen', meaning: 'Rasmiy bayonot / Fikr bildirish', exampleSentence: '無責任[むせきにん]な 発言[はつげん]。', exampleTranslation: 'Mas\'uliyatsiz bayonot.' }
                    ]
                }
            },
            {
                id: 'ja-n3-u1-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri maqom ifodasini tanlang.',
                    exercises: [
                        { id: 'ja-n1-u1-l2-e1', type: 'multiple-choice', prompt: '«O\'qituvchi degan kishi o\'quvchilariga namuna bo\'lishi shart»:', options: ['教師[きょうし]たるもの、生徒[せいと]の 模範[もはん]と なるべきだ', '教師[きょうし]だから', '教師[きょうし]なら', '教師[きょうし]です'], correctAnswer: 0, explanation: 'Kyoushi taru mono (o\'qituvchi degan shaxs).' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u1-l2-q1', question: '「警察官[けいさつかん]にあるまじき 行為[こうい]」ning ma\'nosi:', options: ['Politsiyachi uchun mutlaqo yarashmaydigan, nomaqbul xatti-harakat', 'Yaxshi ish', 'Politsiya boshlig\'i', 'Maosh'], correctAnswerIndex: 0, explanation: 'Unforgivable/unbecoming conduct for a police officer.' },
                        { id: 'ja-n1-u1-l2-q2', question: '「たるもの」ning grammatik kelib chiqishi qaysi manbaga borib taqaladi?', options: ['Mumtoz yapon tili bog\'lovchi sifati (たり -> たる)', 'Zamonaviy sleng', 'Inglizcha o\'zlashma', 'Xitoycha raqamlar'], correctAnswerIndex: 0, explanation: 'Classical bungo auxiliary verb tari -> taru.' },
                        { id: 'ja-n1-u1-l2-q3', question: '«Rahbar shaxs har doim sovuqqon bo\'lishi kerak»:', options: ['指導者[しどうしゃ]たるもの、常[つね]に 冷静[れいせい]で あるべきだ', '指導者[しどうしゃ]だから', '指導者[しどうしゃ]なら', '指導者[しどうしゃ]です'], correctAnswerIndex: 0, explanation: 'Shidousha taru mono.' },
                        { id: 'ja-n1-u1-l2-q4', question: '「許[ゆる]すまじき 暴挙[ぼうきょ]」nimani anglatadi?', options: ['Mutlaqo kechirib bo\'lmas vahshiylik / zo\'ravonlik', 'Kichik hazil', 'Ruxsat berilgan ish', 'Bayram tantanasi'], correctAnswerIndex: 0, explanation: 'Unpardonable atrocity / outrageous act.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u1-l3',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u1',
        unitTitle: 'Unit 1: Classical & Literary Grammar',
        language: 'ja',
        level: 'N1',
        lessonNumber: 3,
        title: 'Uniqueness & Supreme Exclusivity: 〜ならでは vs 〜をおいて他にない',
        description: 'Faqat shu narsaga xos yagona fazilat (naradehawa) va undan o\'zga muqobil yo\'qligi (o oite hoka ni nai).',
        estimatedDurationMinutes: 18,
        icon: '💎',
        steps: [
            {
                id: 'ja-n1-u1-l3-s1',
                title: 'Noyoblik va Eksklyuzivlik',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Supreme Exclusivity (〜ならでは / 〜をおいて他にない)',
                    explanation: '1. 〜ならでは (Ot + narade wa): Faqat shu joy, inson yoki san\'atga xos takrorlanmas ajoyib xususiyat: 京都[きょうと]ならではの 伝統[でんとう]美[び] (Faqat Kiotoga xos an\'anaviy go\'zallik). 2. 〜をおいて他[ほか]にない: Bu vazifani bajarishga undan o\'zga munosib yo\'q: この大役[たいやく]を 果[は]たせるのは、彼[かれ]をおいて他[ほか]にない (Bu ulkan mas\'uliyatni uddalay oladigan undan boshqa hech kim yo\'q).',
                    vocabulary: [
                        { term: '伝統[でんとう]美[び]', reading: 'Dentoubi', meaning: 'An\'anaviy go\'zallik', exampleSentence: '日本[にほん]の 伝統[でんとう]美[び]。', exampleTranslation: 'Yaponiyaning an\'anaviy go\'zalligi.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l3-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri eksklyuzivlik iborasini tanlang.',
                    exercises: [
                        { id: 'ja-n1-u1-l3-e1', type: 'multiple-choice', prompt: '«Faqat mohir ustaga xos nozik hunarmandchilik»:', options: ['職人[しょくにん]ならではの 繊細[せんさい]な 技[わざ]', '職人[しょくにん]だから', '職人[しょくにん]なら', '職人[しょくにん]です'], correctAnswer: 0, explanation: 'Shokunin narade wa no sensai na waza.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u1-l3-q1', question: '«Bu loyihani boshqarishga sizdan boshqa hech kim mos kelmaydi»:', options: ['このプロジェクトの リーダーは、あなたをおいて他[ほか]に いません', 'あなたなら', 'あなただから', 'あなたです'], correctAnswerIndex: 0, explanation: 'Anata o oite hoka ni imasen.' },
                        { id: 'ja-n1-u1-l3-q2', question: '「〜ならでは」ifodasi ko\'pincha qanday ma\'noda qo\'llaniladi?', options: ['Birovning yoki biror joyning o\'ta yuqori ijobiy, tengi yo\'q xususiyatini maqtashda', 'Salbiy tanqid qilishda', 'Kechirim so\'rashda', 'Vaqtni belgilashda'], correctAnswerIndex: 0, explanation: 'Praising unique, irreplaceable positive qualities.' },
                        { id: 'ja-n1-u1-l3-q3', question: '「プロならではの 視点[してん]」ning ma\'nosi:', options: ['Faqat haqiqiy professionalgagina xos bo\'lgan chuqur nuqtai nazar', 'Havasmand fikri', 'Oddiy xato', 'Kitob narxi'], correctAnswerIndex: 0, explanation: 'Insight unique only to a seasoned professional.' },
                        { id: 'ja-n1-u1-l3-q4', question: '「大役[たいやく]を 果[は]たす」ning ma\'nosi:', options: ['Ulkan mas\'uliyatli vazifani muvaffaqiyatli bajarmoq', 'Vazifadan qochmoq', 'Kasal bo\'lmoq', 'Uyga ketmoq'], correctAnswerIndex: 0, explanation: 'Fulfill a momentous responsibility.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u1-l4',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u1',
        unitTitle: 'Unit 1: Classical & Literary Grammar',
        language: 'ja',
        level: 'N1',
        lessonNumber: 4,
        title: 'Extreme Completeness: 〜ずくめ vs 〜まみれ vs 〜だらけ',
        description: 'Mutlaqo qamrab olganlik (zukume - faqat shunday hodisalar), kirlanganlik (mamire - qonga/loyga belanish), tartibsizlik (darake).',
        estimatedDurationMinutes: 18,
        icon: '✨',
        steps: [
            {
                id: 'ja-n1-u1-l4-s1',
                title: '〜ずくめ, 〜まみれ, 〜だらけ Farqlari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Total Immersion & Contamination Nuances',
                    explanation: '1. 〜ずくめ: Butunlay shu narsalardan iborat (ijobiy yoki qora rang kabi abstrakt hodisalar): 結構[けっこう]ずくめ (Faqat quvonchli xabarlar), 黒[くろ]ずくめの 服[ふく] (Toza qora kiyim). 2. 〜まみれ: Suyuqlik yoki ifloslikka badanning to\'liq belanishi (yopishib qolish): 泥[どろ]まみれ (Loyga belangan), 血[ち]まみれ (Qonga belangan). 3. 〜だらけ: Yuzada juda ko\'p tarqoq salbiy narsalar bo\'lishi: 間違[まちが]いだらけ (Xatolarga to\'la), ゴミだらけ (Chiqindiga to\'la).',
                    vocabulary: [
                        { term: '結構[けっこう]ずくめ', reading: 'Kekkouzukume', meaning: 'Faqat xushxabarlar / Ajoyib voqealar', exampleSentence: '今年[ことし]は 結構[けっこう]ずくめの 1年[いちねん]だった。', exampleTranslation: 'Bu yil faqat quvonchli voqealarga boy bo\'ldi.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l4-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'To\'g\'ri qoplanganlik ifodasini tanlang.',
                    exercises: [
                        { id: 'ja-n1-u1-l4-e1', type: 'multiple-choice', prompt: '«Futbolchi yiqilib butun vujudi loyga belandi»:', options: ['泥[どろ]まみれに なった', '泥[どろ]ずくめに なった', '泥[どろ]だらけに なった', '泥[どろ]です'], correctAnswer: 0, explanation: 'Doro-mamire (suyuq ifloslikka yopishib belanish).' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u1-l4-q1', question: '«Bu imtihon varaqasi xatolarga to\'la»:', options: ['この答案[とうあん]は 間違[まちが]いだらけだ', '間違[まちが]いまみれだ', '間違[まちが]いずくめだ', '間違[まちが]いです'], correctAnswerIndex: 0, explanation: 'Machigai-darake.' },
                        { id: 'ja-n1-u1-l4-q2', question: '「異例[いれい]ずくめの 人事[じんじ]」ning ma\'nosi:', options: ['Faqat g\'ayrioddiy, kutilmagan qarorlardan iborat bo\'lgan tayinlov', 'Oddiy ish', 'Kechikkan ish', 'Ishdan bo\'shatish'], correctAnswerIndex: 0, explanation: 'Appointments packed with unprecedented exceptions.' },
                        { id: 'ja-n1-u1-l4-q3', question: '〜まみれ qaysi so\'zlar bilan eng ko\'p ishlatiladi?', options: ['血[ち] (qon), 汗[あせ] (ter), 泥[どろ] (loy), 油[あぶら] (moy)', 'Quvonch, kulgi', 'Kitob, qalam', 'Poyezd, mashina'], correctAnswerIndex: 0, explanation: 'Blood, sweat, mud, grease contamination.' },
                        { id: 'ja-n1-u1-l4-q4', question: '«Qora kiyingan sirli kishi»:', options: ['黒[くろ]ずくめの 男[おとこ]', '黒[くろ]まみれの 男[おとこ]', '黒[くろ]だらけの 男[おとこ]', '黒[くろ]の 男[おとこ]'], correctAnswerIndex: 0, explanation: 'Kuro-zukume no otoko.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u1-l5',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u1',
        unitTitle: 'Unit 1: Classical & Literary Grammar',
        language: 'ja',
        level: 'N1',
        lessonNumber: 5,
        title: 'N1 Deep Hermeneutics: Philosophical Treatise on Epistemology & Language',
        description: 'Til falsafasi, Vitgenshteyn va strukturalizm bo\'yicha yapon tilidagi chuqur ilmiy traktat mutolaasi.',
        estimatedDurationMinutes: 20,
        icon: '🏛️',
        steps: [
            {
                id: 'ja-n1-u1-l5-s1',
                title: 'Falsafiy Traktat Matni',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Treatise: The Limits of Language and Ontological Reality',
                    explanation: '言語[げんご]とは 単[たん]に 既存[きぞん]の 客観的[きゃっかんてき] 実在[じつざい]を 模写[もしゃ]する 記号[きごう]体系[たいけい]では なく、むしろ 世界[せかい]そのものを 分節化[ぶんせつか]し、人間[にんげん]の 認識[にんしき]の 地平[ちへい]を 規定[きてい]する 構造的[こうぞうてき] 枠組[わくぐ]みに 他[ほか]ならない。 言語[げんご]の 限界[げんかい]が 思考[しこう]の 限界[げんかい]を 画定[かくてい]するが ゆえに、私[わたし]たちが 自明[じめい]と 見[み]なす 現実[げんじつ]は、常[つね]に 文化的[ぶんかてき] コンテクストに 媒介[ばいかい]された 表象[ひょうしょう]の 集積[しゅうせき]で ある。',
                    keyPoints: [
                        'Epistemologik xulosa: Til borliqni shunchaki nusxalamaydi, balki inson tafakkur chegaralarini shakllantiradi.'
                    ],
                    vocabulary: [
                        { term: '分節化[ぶんせつか]', reading: 'Bunsetsuka', meaning: 'Bo\'laklarga ajratib anglash (Strukturalizm)', exampleSentence: '概念[がいねん]を 分節化[ぶんせつか]する。', exampleTranslation: 'Tushunchalarni kategoriyalarga ajratmoq.' },
                        { term: '媒介[ばいかい]', reading: 'Baikai', meaning: 'Vositachilik / Oraliq vosita bo\'lish', exampleSentence: '言葉[ことば]に 媒介[ばいかい]された 認識[にんしき]。', exampleTranslation: 'Til vositasida shakllangan idrok.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l5-s2',
                title: 'Falsafiy Tahlil Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Matnning ontologik xulosasini tanlang.',
                    exercises: [
                        { id: 'ja-n1-u1-l5-e1', type: 'multiple-choice', prompt: 'Muallifning fikricha til qanday vazifani bajaradi?', options: ['Insonning butun dunyoni idrok etish chegaralarini belgilab beruvchi strukturaviy qolip vazifasini bajaradi', 'Shunchaki harflarni yozish uchun kerak', 'Faqat xorijliklar bilan gaplashish vositasi', 'Grammatika testlarini yechish uchun'], correctAnswer: 0, explanation: 'Structural framework defining the horizon of human cognitive reality.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u1-l5-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u1-l5-q1', question: '「〜に他[ほか]ならない」grammatikasi nimani anglatadi?', options: ['Aynan ... ning o\'zidir / ... dan boshqa narsa emasdir (qat\'iy falsafiy xulosa)', 'Boshqa narsadir', 'O\'xshamaydi', 'Inkor qiladi'], correctAnswerIndex: 0, explanation: 'Is nothing other than...' },
                        { id: 'ja-n1-u1-l5-q2', question: '「自明[じめい]と見なす」so\'zining ma\'nosi:', options: ['O\'z-o\'zidan ravshan, shubhasiz haqiqat deb hisoblamoq', 'Tushunarsiz deb bilmoq', 'Kasal deb bilmoq', 'Eski deb bilmoq'], correctAnswerIndex: 0, explanation: 'Regard as self-evident.' },
                        { id: 'ja-n1-u1-l5-q3', question: '「〜がゆえに (Ga yue ni)」nimani bildiradi?', options: ['... bo\'lganligi sababli (oliy adabiy sabab ergash bog\'lovchi)', '... qaramasdan', '... bilan birga', '... qilgach'], correctAnswerIndex: 0, explanation: 'Because of / On account of (Classical bungo).' },
                        { id: 'ja-n1-u1-l5-q4', question: 'JLPT N1 Dokkai bo\'limi kimlar uchun mo\'ljallangan?', options: ['Yapon tilida magistratura/doktorantura dissertatsiyalarini va falsafiy adabiyotlarni erkin tahlil qila oluvchilar uchun', 'Boshlang\'ich talabalar', 'Faqat sayyohlar', 'Bolalar'], correctAnswerIndex: 0, explanation: 'Doctoral-level academic treatises & high philosophy.' }
                    ]
                }
            }
        ]
    },

    // Unit 2: Advanced Epistemological & Abstract Kanji
    {
        id: 'ja-n1-u2-l1',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u2',
        unitTitle: 'Unit 2: Advanced Kanji & Academic Register',
        language: 'ja',
        level: 'N1',
        lessonNumber: 1,
        title: 'N1 Master Kanji 1: Cognitive Discrepancy & Ambiguity (齟齬, 乖離, 曖昧, 葛藤, 矛盾)',
        description: 'Tafakkurdagi kelishmovchilik, uzilish, noaniqlik va ziddiyatlarni ifodalovchi N1 iyerogliflari.',
        estimatedDurationMinutes: 18,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n1-u2-l1-s1',
                title: 'Ziddiyat va Noaniqlik Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'N1 High-Register Kanji',
                    explanation: '齟齬 (sogo - kelishmovchilik / uzviy ziddiyat), 乖離 (kairi - keskin uzilish / begonalashuv), 曖昧 (aimai - noaniq / mavhum), 矛盾 (mujun - ziddiyat / paradoks), 葛藤 (kattou - ichki ruhiy kurash).',
                    vocabulary: [
                        { term: '齟齬[そご]', reading: 'Sogo', meaning: 'Ziddiyat / Mos kelmaslik', exampleSentence: '両者[りょうしゃ]の 意見[いけん]に 齟齬[そご]が 生[しょう]じる。', exampleTranslation: 'Ikkala tomon fikrida ziddiyat yuzaga keldi.' },
                        { term: '乖離[かいり]', reading: 'Kairi', meaning: 'Keskin uzilish / Bog\'liqlik yo\'qolishi', exampleSentence: '理想[りそう]と 現実[げんじつ]の 乖離[かいり]。', exampleTranslation: 'Orzu va haqiqat o\'rtasidagi keskin uzilish.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l1-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Iyeroglifni tanlang.',
                    exercises: [
                        { id: 'ja-n1-u2-l1-e1', type: 'multiple-choice', prompt: '«Nazariya va amaliyot o\'rtasidagi keskin uzilish»:', options: ['理論[りろん]と 実践[じっせん]の 乖離[かいり]', '齟齬[そご]', '曖昧[あいまい]', '矛盾[むじゅん]'], correctAnswer: 0, explanation: '乖離 (Kairi).' }
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l1-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u2-l1-q1', question: '«Fikrlardagi kelishmovchilik / nomuvofiqlik» oliy kanjisi qaysi?', options: ['齟齬[そご]', '乖離[かいり]', '曖昧[あいまい]', '葛藤[かっとう]'], correctAnswerIndex: 0, explanation: '齟齬 (Sogo).' },
                        { id: 'ja-n1-u2-l1-q2', question: '「曖昧[あいまい]な 態度[たいど]」ning ma\'nosi:', options: ['Mavhum, noaniq va ikkilangan pozitsiya', 'Aniq javob', 'Qat\'iy qaror', 'Quvonch'], correctAnswerIndex: 0, explanation: 'Ambiguous / evasive attitude.' },
                        { id: 'ja-n1-u2-l1-q3', question: '«Paradoks / O\'zaro ziddiyat» kanjisi qaysi?', options: ['矛盾[むじゅん]', '齟齬[そご]', '乖離[かいり]', '葛藤[かっとう]'], correctAnswerIndex: 0, explanation: '矛盾 (Mujun).' },
                        { id: 'ja-n1-u2-l1-q4', question: '「自己[じこ]矛盾[むじゅん]」nimani anglatadi?', options: ['O\'z-o\'zini inkor qiluvchi ichki ziddiyat', 'O\'zini sevish', 'O\'zini maqtash', 'O\'zini yo\'qotish'], correctAnswerIndex: 0, explanation: 'Self-contradiction.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u2-l2',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u2',
        unitTitle: 'Unit 2: Advanced Kanji & Academic Register',
        language: 'ja',
        level: 'N1',
        lessonNumber: 2,
        title: 'N1 Master Kanji 2: Statecraft, Vulnerability & Anxiety (憂慮, 脆弱, 覇権, 諮問, 隠蔽)',
        description: 'Davlat xavfsizligi, chuqur xavotir, zaiflik, gegemoniya va yashirish kanjilari.',
        estimatedDurationMinutes: 18,
        icon: '🈴',
        steps: [
            {
                id: 'ja-n1-u2-l2-s1',
                title: 'Geosiyosat va Xavfsizlik Kanjilari',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'High Statecraft & Epistemic Terms',
                    explanation: '憂慮 (yuuryo - chuqur tashvish/xavotir), 脆弱 (zeijaku - zaiflik/himoyasizlik), 覇権 (haken - gegemoniya/hukmronlik), 諮問 (shimon - rasmiy konsultatsiya/ekspert maslahati), 隠蔽 (inpei - faktlarni qasddan yashirish).',
                    vocabulary: [
                        { term: '憂慮[ゆうりょ]', reading: 'Yuuryo', meaning: 'Chuqur tashvish / Xavotir', exampleSentence: '事態[じたい]を 深[ふか]く 憂慮[ゆうりょ]する。', exampleTranslation: 'Vaziyatdan chuqur xavotirdamiz.' },
                        { term: '脆弱[ぜいじゃく]性', reading: 'Zeijakusei', meaning: 'Zaiflik / Omonatlik (Vulnerability)', exampleSentence: 'システムの 脆弱[ぜいじゃく]性。', exampleTranslation: 'Tizimning zaif tomoni.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l2-s2',
                title: 'Mashq',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Iyeroglifni tanlang.',
                    exercises: [
                        { id: 'ja-n1-u2-l2-e1', type: 'multiple-choice', prompt: '«Faktlarni atayin yashirish / Berkitish» kanjisi qaysi?', options: ['隠蔽[いんぺい]', '憂慮[ゆうりょ]', '諮問[しもん]', '覇権[はけん]'], correctAnswer: 0, explanation: '隠蔽 (Inpei).' }
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l2-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u2-l2-q1', question: '«Dunyo gegemonligi / Siyosiy ustunlik» kanjisi qaysi?', options: ['覇権[はけん]', '隠蔽[いんぺい]', '諮問[しもん]', '脆弱[ぜいじゃく]'], correctAnswerIndex: 0, explanation: '覇権 (Haken).' },
                        { id: 'ja-n1-u2-l2-q2', question: '「諮問[しもん]機関[きかん]」so\'zining ma\'nosi:', options: ['Maslahat beruvchi ekspert kengashi / Maslahat organi', 'Sud binosi', 'Kasalxona', 'Maktab'], correctAnswerIndex: 0, explanation: 'Advisory council / Consultative body.' },
                        { id: 'ja-n1-u2-l2-q3', question: '«Kiber-xavfsizlikdagi zaiflik»:', options: ['セキュリティの 脆弱[ぜいじゃく]性', 'セキュリティの 憂慮[ゆうりょ]', 'セキュリティの 覇権[はけん]', 'セキュリティです'], correctAnswerIndex: 0, explanation: 'Security vulnerability (Zeijakusei).' },
                        { id: 'ja-n1-u2-l2-q4', question: '「隠蔽[いんぺい]工作[こうさく]」nimani bildiradi?', options: ['Dalillarni yashirish va jamoatchilikni chalg\'itish harakati', 'Yangi qurilish', 'Qonun qabul qilish', 'Diplomatik uchrashuv'], correctAnswerIndex: 0, explanation: 'Cover-up operation.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u2-l3',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u2',
        unitTitle: 'Unit 2: Advanced Kanji & Academic Register',
        language: 'ja',
        level: 'N1',
        lessonNumber: 3,
        title: 'N1 Choukai: Integrated Lecture Synthesis (統合学術講義)',
        description: 'Universitet professori ma\'ruzasidagi ko\'p o\'lchovli ilmiy sintezni to\'liq tushunish.',
        estimatedDurationMinutes: 18,
        icon: '🎓',
        steps: [
            {
                id: 'ja-n1-u2-l3-s1',
                title: 'Akademik Ma\'ruza Tinglash',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Doctoral Lecture Synthesis',
                    explanation: 'Choukai bo\'limida Kvant fizikasi, neyrobiologiya yoki konstitutsiyaviy huquq bo\'yicha 3 daqiqalik ma\'ruza tinglanadi. Savollar ma\'ruzadagi paradoksal xulosalar va gipotezalarni sinovdan o\'tkazadi.',
                    keyPoints: [
                        'No visual questions on test sheet; everything is processed aurally with rapid note-taking.'
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l3-s2',
                title: 'Ma\'ruza Mashqi',
                type: 'practice',
                estimatedMinutes: 6,
                practiceData: {
                    instructions: 'Ilmiy gipotezani aniqlang.',
                    exercises: [
                        { id: 'ja-n1-u2-l3-e1', type: 'multiple-choice', prompt: 'Professor neyrobiologiyadagi yangi kashfiyot bo\'yicha qanday xulosa berdi?', options: ['Inson miyasi qariganda ham neyroplastiklik tufayli yangi aloqalar hosil qila oladi', 'Miya 20 yoshda to\'liq to\'xtaydi', 'Xotirani yaxshilash imkonsiz', 'Uyqu kerak emas'], correctAnswer: 0, explanation: 'Neuroplasticity persists across the human lifespan.' }
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l3-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 7,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u2-l3-q1', question: 'N1 Choukai da professor qarama-qarshi nazariyalarni solishtirganda qaysi ko\'nikma talab etiladi?', options: ['Har bir gipotezaning dalillarini tezda qayd qilib, yakuniy sintezni topish', 'Faqat birinchi gapni eshitish', 'Xonadan chiqib ketish', 'Lug\'at varaqlash'], correctAnswerIndex: 0, explanation: 'Rapid conceptual synthesis & hypothesis contrast.' },
                        { id: 'ja-n1-u2-l3-q2', question: '「仮説[かせつ]を 検証[けんしょう]する」ning ma\'nosi:', options: ['Ilmiy gipotezani amalda tekshirib tasdiqlamoq', 'Gipotezani o\'chirib tashlamoq', 'Gipotezadan qochmoq', 'Darsdan qochmoq'], correctAnswerIndex: 0, explanation: 'Verify/test a hypothesis.' },
                        { id: 'ja-n1-u2-l3-q3', question: 'N1 Choukai testida savol qachon aytiladi?', options: ['Uzoq ma\'ruza matni to\'liq tugagandan so\'nggina aytiladi', 'Boshida ekranda yoziladi', 'Matndan oldin aytiladi', 'Hech qachon aytilmaydi'], correctAnswerIndex: 0, explanation: 'Question is asked ONLY after the full monologue concludes.' },
                        { id: 'ja-n1-u2-l3-q4', question: '«パラダイムシフト (Paradigm Shift)» nimani anglatadi?', options: ['Ilmiy tafakkur va asosiy dunyoqarashning tubdan inqilobiy o\'zgarishi', 'Kompyuter klaviaturasi', 'Oddiy xato', 'Yangi poyezd'], correctAnswerIndex: 0, explanation: 'Fundamental paradigm shift.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u2-l4',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u2',
        unitTitle: 'Unit 2: Advanced Kanji & Academic Register',
        language: 'ja',
        level: 'N1',
        lessonNumber: 4,
        title: 'Ultimate JLPT N1 Full Simulation Exam: Grand Mastery',
        description: 'JLPT N1 oliy darajali to\'liq vaqtli imtihon sinovi va xatolar ustida ishlash.',
        estimatedDurationMinutes: 20,
        icon: '📝',
        steps: [
            {
                id: 'ja-n1-u2-l4-s1',
                title: 'N1 Mock Exam Strategy',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'JLPT N1 Grand Blueprint',
                    explanation: 'N1 imtihoni 2000+ kanji, 10,000+ so\'z boyligi va 110 daqiqalik intensiv Language Knowledge/Reading bo\'limidan iborat.',
                    keyPoints: [
                        'Moji/Goi/Bunpou: 40 minutes max',
                        'Dokkai (Short, Mid, Long, Comparative, Information Retrieval): 70 minutes'
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l4-s2',
                title: 'N1 Sinov Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'To\'g\'ri javobni tanlang.',
                    exercises: [
                        { id: 'ja-n1-u2-l4-e1', type: 'multiple-choice', prompt: '「彼[かれ]の 成功[せいこう]は、血[ち]の にじむような 努力[どりょく]の _______。」 (Natijasi / Meva bergan holati)', options: ['賜物[たまもの]で ある (Tamamono de aru)', 'せいで ある', 'あまりで ある', 'くせに ある'], correctAnswer: 0, explanation: 'Tamamono de aru (qimmatbaho mevasidir).' }
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l4-s3',
                title: 'Test',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'Savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u2-l4-q1', question: '「〜の 賜物[たまもの]」nimani anglatadi?', options: ['Mashaqqatli mehnatning oliy mevasi / Natijasi', 'Yomon oqibat', 'Tasodif', 'Sovg\'a qutisi'], correctAnswerIndex: 0, explanation: 'Fruit / Blessed outcome of great toil.' },
                        { id: 'ja-n1-u2-l4-q2', question: '「一概[いちがい]に〜とは 言[い]えない」ning ma\'nosi:', options: ['Barchasini bir xil deb umumlashtirib bo\'lmaydi', 'Albatta shunday', 'Hech qachon bo\'lmaydi', 'To\'g\'ri gap'], correctAnswerIndex: 0, explanation: 'Cannot generalize sweepingly.' },
                        { id: 'ja-n1-u2-l4-q3', question: '«JLPT N1 umumiy sertifikat balining o\'tish chegarasi qancha?»', options: ['100 / 180 ball (har bir bo\'limdan kamida 19 ball bilan)', '50 ball', '180 ball', '90 ball'], correctAnswerIndex: 0, explanation: '100/180 overall with 19/60 sectional minimums.' },
                        { id: 'ja-n1-u2-l4-q4', question: '「余儀[よぎ]なく される」nimani bildiradi?', options: ['Vaziyat taqozosi bilan majburan shunday yo\'l tutishga majbur bo\'lmoq (Forced to do)', 'Xursand bo\'lmoq', 'Rad etmoq', 'Dam olmoq'], correctAnswerIndex: 0, explanation: 'Forced / Constrained inevitably.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ja-n1-u2-l5',
        courseId: 'japanese-n1',
        unitId: 'ja-n1-u2',
        unitTitle: 'Unit 2: Advanced Kanji & Academic Register',
        language: 'ja',
        level: 'N1',
        lessonNumber: 5,
        title: 'JLPT N1 Pinnacle Capstone: Native-Equivalent Master Certification',
        description: 'Yapon tili bo\'yicha dunyo miqyosidagi eng oliy sertifikatlash bitiruv imtihoni (JLPT N1 Grand Pinnacle).',
        estimatedDurationMinutes: 20,
        icon: '👑',
        steps: [
            {
                id: 'ja-n1-u2-l5-s1',
                title: 'JLPT N1 Grand Pinnacle Xulosasi',
                type: 'learn',
                estimatedMinutes: 5,
                learnData: {
                    title: 'Pinnacle of Japanese Language Mastery (JLPT N1)',
                    explanation: 'Siz Yapon tilining eng yuksak cho\'qqisi — JLPT N1 darajasini to\'liq zabt etdingiz! Sizning bilimingiz Yaponiya vazirliklari, Oliy sud, Tokio Universiteti ilmiy kengashlari va xalqaro korporatsiyalarda ona tili darajasidagi tengma-teng ilmiy va kasbiy salohiyat sifatida to\'liq e\'tirof etiladi.',
                    keyPoints: [
                        '2000+ Kanji absolute fluency',
                        'Classical Bungo syntax & profound modern philosophy mastery',
                        'JLPT N1 certified peak capability'
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l5-s2',
                title: 'Oliy Bitiruv Mashqi',
                type: 'practice',
                estimatedMinutes: 7,
                practiceData: {
                    instructions: 'Yakuniy bitiruv savoliga to\'g\'ri javob bering.',
                    exercises: [
                        { id: 'ja-n1-u2-l5-e1', type: 'multiple-choice', prompt: '「いかに 時代[じだい]が 変遷[へんせん]しようと、真理[しんり]は _______。」 (Oliy adabiy yakun)', options: ['不変[ふへん]で ある (Fuhen de aru)', '変[か]わる', 'ない', 'でした'], correctAnswer: 0, explanation: 'Fuhen de aru (haqiqat o\'zgarmasdir).' }
                    ]
                }
            },
            {
                id: 'ja-n1-u2-l5-s3',
                title: 'JLPT N1 Yakuniy Grand Sertifikatsiya Testi',
                type: 'test',
                estimatedMinutes: 8,
                testData: {
                    instructions: 'JLPT N1 darajasini to\'liq tasdiqlash uchun barcha savollarga javob bering.',
                    passingScorePercentage: 75,
                    questions: [
                        { id: 'ja-n1-u2-l5-q1', question: '「時代[じだい]の 変遷[へんせん]」dagi 変遷 nimani anglatadi?', options: ['Davrlarning almashinuvi / Tarixiy evrilish', 'Bitta kun', 'Quyosh chiqishi', 'Kitob o\'qish'], correctAnswerIndex: 0, explanation: 'Historical vicissitudes / Transitions of eras.' },
                        { id: 'ja-n1-u2-l5-q2', question: '「真理[しんり]は 不変[ふへん]で ある」ning ma\'nosi:', options: ['Haqiqat o\'zgarmas va boqiydir', 'Haqiqat yo\'q', 'Haqiqat yolg\'ondir', 'Haqiqat yangidir'], correctAnswerIndex: 0, explanation: 'Truth is immutable.' },
                        { id: 'ja-n1-u2-l5-q3', question: 'Yapon tili bo\'yicha JLPT tizimidagi eng yuqori oliy daraja qaysi?', options: ['JLPT N1', 'JLPT N2', 'JLPT N5', 'CEFR B2'], correctAnswerIndex: 0, explanation: 'JLPT N1.' },
                        { id: 'ja-n1-u2-l5-q4', question: 'JLPT N1 sertifikati qanday huquqiy va akademik maqom beradi?', options: ['Yaponiyada shifokorlik litsenziyasi, oliy davlat xizmati, universitet professori va doimiy rezidentlik ballarida eng yuqori imtiyoz beradi', 'Faqat muzeyga kirish chiptasi', 'Faqat do\'konda chegirma', 'Hech qanday imtiyoz bermaydi'], correctAnswerIndex: 0, explanation: 'Highest legal, medical, academic & immigration status advantages.' }
                    ]
                }
            }
        ]
    }
];
