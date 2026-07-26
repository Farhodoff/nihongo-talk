export interface JlptReadingQuestion {
    id: string;
    questionText: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface JlptReadingPassage {
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    title: string;
    passageType: 'short' | 'medium' | 'information_retrieval';
    japaneseContent: string; // Accepts Furigana format like 毎日[まいにち]
    uzbekTranslation: string;
    recommendedTimeMinutes: number;
    questions: JlptReadingQuestion[];
}

export const JLPT_READING_PASSAGES: JlptReadingPassage[] = [
    // === N5 ===
    {
        id: 'n5_read_1',
        level: 'N5',
        title: '田中[たなか]さんの 一日[いちにち]',
        passageType: 'short',
        japaneseContent: `田中[たなか]さんは 毎朝[まいあさ] 7時[しちじ]に 起[お]きます。
朝[あさ]ごはんは パンと 卵[たまご]を 頂[いただ]きます。
それから 8時[はちじ]に 電車[でんしゃ]で 会社[かいしゃ]へ 行[い]きます。
会社[かいしゃ]は 9時[くじ]から 5時[ごじ]までです。
夜[よる]は 家[うち]で 日本語[にほんご]を 勉強[べんきょう]します。`,
        uzbekTranslation: "Tanaka san har kuni ertalab soat 7:00 da uyg'onadi. Nonushtaga non va tuxum yeydi. Keyin soat 8:00 da poyezdda kompaniyaga boradi. Kompaniya soat 9:00 dan 17:00 gacha ishlaydi. Kechasi uyda yapon tilini o'rganadi.",
        recommendedTimeMinutes: 3,
        questions: [
            {
                id: 'q_n5_1_1',
                questionText: '田中[たなか]さんは 何時[なんじ]に 電車[でんしゃ]に 乗[の]りますか。',
                options: ['7時[しちじ]', '8時[はちじ]', '9時[くじ]', '5時[ごじ]'],
                correctIndex: 1,
                explanation: 'Matnda "8時[はちじ]に 電車[でんしゃ]で 会社[かいしゃ]へ 行[い]きます" deb ko\'rsatilgan.'
            },
            {
                id: 'q_n5_1_2',
                questionText: '田中[たなか]さんは 夜[よる] 何[なに]を しますか。',
                options: ['テレビを 見[み]ます', '仕事[しごと]を します', '日本語[にほんご]を 勉強[べんきょう]します', '散歩[さんぽ]を します'],
                correctIndex: 2,
                explanation: 'Matnning so\'nggi qatorida "夜[よる]は 家[うち]で 日本語[にほんご]を 勉強[べんきょう]します" deyilgan.'
            }
        ]
    },
    // === N4 ===
    {
        id: 'n4_read_1',
        level: 'N4',
        title: '図書館[としょかん]の 利用[りよう] 案内[あんない]',
        passageType: 'information_retrieval',
        japaneseContent: `【中央[ちゅうおう] 図書館[としょかん]のお知らせ】
開館[かいかん] 時間[じかん]：午前[ごぜん]9時[くじ]～午後[ごご]7時[しちじ]（土曜日[どようび]・日曜日[にちようび]は午後[ごご]5時[ごじ]まで）
休館日[きゅうかんび]：毎週[まいしゅう] 月曜日[げつようび]、毎月[まいつき] 最終[さいしゅう] 水曜日[すいようび]

本[ほん]は 一人[ひとり] 5冊[ごさつ]まで、2週間[にしゅうかん] 借[か]りることができます。
返却[へんきゃく]が 遅[おく]れた 場合[ばあい]、新[あたら]しい 本[ほん]を 借[か]りることができません。`,
        uzbekTranslation: "Markaziy kutubxona e'loni. Ish vaqti: 9:00 - 19:00 (Shanba va yakshanba kunlari 17:00 gacha). Dam olish kunlari: Har haftaning dushanbasi va har oyning oxirgi chorshanbasi. Bir kishi ko'pi bilan 5 ta kitobni 2 haftaga olib turishi mumkin.",
        recommendedTimeMinutes: 4,
        questions: [
            {
                id: 'q_n4_1_1',
                questionText: '日曜日[にちようび]の 開館[かいかん] 時間[じかん]は いつですか。',
                options: [
                    '午前[ごぜん]9時[くじ]～午後[ごご]7時[しちじ]',
                    '午前[ごぜang]9時[くじ]～午後[ごご]5時[ごじ]',
                    '休館日[きゅうかんび]です',
                    '午後[ごご]1時[いちじ]～午後[ごご]5時[ごじ]'
                ],
                correctIndex: 1,
                explanation: 'E\'londa "(土曜日[どようび]・日曜日[にちようび]は午後[ごご]5時[ごじ]まで)" deb ko\'rsatilgan.'
            }
        ]
    },
    // === N3 ===
    {
        id: 'n3_read_1',
        level: 'N3',
        title: 'AIと 将来[しょうらい]の 働き方[はたらきかた]',
        passageType: 'medium',
        japaneseContent: `近年[きんねん]、人工知能[じんこうちのう]（AI）の 発達[はったつ]により、私[わたし]たちの 生活[せいかつ]や 働き方[はたらきかた]が 大[おお]きく 変[か]わりつつあります。
かつては 人間[にんげん]が 行[おこな]っていた 単調[たんちょう]な 作業[さぎょう]は、AIによって 自動化[じどうか]されつつあります。
しかし、AIには 感情[かんじょう]や 創造性[そうぞうせい]が ありません。
したがって、これから 必要[ひつよう]とされるのは、AIを活用[かつよう]しながら 新[あたら]しい 価値[かち]を 創出[そうしゅつ]する 人才[じんざい]です。`,
        uzbekTranslation: "So'nggi yillarda sun'iy intellekt (AI) rivojlanishi tufayli hayotimiz va ishlash tarzimiz sezilarli darajada o'zgarmoqda. Inson bajaradigan bir xil mehnat AI tomonidan avtomatlashtirilmoqda. Biroq, AI da his-tuyg'ular va ijodkorlik yo'q. Shuning uchun kelajakda AI dan unumli foydalangan holda yangi qadriyatlarni yarata oladigan kadrlar talab etiladi.",
        recommendedTimeMinutes: 5,
        questions: [
            {
                id: 'q_n3_1_1',
                questionText: '文章[ぶんしょう]によると、AIに 欠[か]けているものは 何[なに]ですか。',
                options: [
                    '計算[けいさん] 能力[のうりょく]',
                    '感情[かんじょう]と 創造性[そうぞうせい]',
                    '自動化[じどうか]の 技術[ぎじゅつ]',
                    '情報[じょうほう]の 処理[しょり] 速度[そくど]'
                ],
                correctIndex: 1,
                explanation: 'Matnda "AIには 感情[かんじょう]や 創造性[そうぞうせい]が ありません" deb aniq ko\'rsatilgan.'
            }
        ]
    },
    // === N2 ===
    {
        id: 'n2_read_1',
        level: 'N2',
        title: 'コミュニケーションにおける「間[ま]」の 重要性[じゅうようせい]',
        passageType: 'medium',
        japaneseContent: `会話[かいわ]において、沈黙[ちんもく]や「間[ま]」を 恐[おそ]れる 人[ひと]は 少[すく]なくない。
しかし、適切[てきせつ]な「間[ま]」は 相手[あいて]に 考えさせる 時間[じかん]を 与[あた]え、発言[はつげん]の 重み[おもみ]を 増[ま]す 効果[こうか]がある。
話[はなし]し上手[じょうず]な 人[ひと]ほど、言葉[ことば]の 量[りょう]ではなく、この「間[ま]」を 巧み[たくみ]に 操[あやつ]っているのである。
言葉[ことば]を 詰[つ]め込む[こむ]ことだけが 意思伝達[いしでんたつ]の 手段[しゅだん]ではない。`,
        uzbekTranslation: "Muloqotda sukunat yoki suhbat orasidagi tanaffus ('ma') dan qo'rqadiganlar kam emas. Biroq, to'g'ri qo'llanilgan tanaffus suhbatdoshga o'ylash uchun vaqt beradi va aytilayotgan gapning qadrini oshiradi. Yaxshi suhbatdoshlar ko'p gapirish bilan emas, balki aynan shu 'ma' ni ustalik bilan boshqarish bilan ajralib turadilar.",
        recommendedTimeMinutes: 6,
        questions: [
            {
                id: 'q_n2_1_1',
                questionText: '筆者[ひっしゃ]が 最[もっと]も 伝[つた]えたいことは 何[なに]ですか。',
                options: [
                    '沈黙[ちんもく]は 避[さ]けるべきである',
                    '会話[かいわ]では 言葉[ことば]の 量[りょう]が 最[もっと]も 重要[じゅうよう]である',
                    '適切[てきせつ]な「間[ま]」が 会話[かいわ]の 質[しつ]を 高[たか]める',
                    '話[はなし]し上手[じょうず]になるには 練習[れんしゅう]が 不可欠[ふかけつ]である'
                ],
                correctIndex: 2,
                explanation: 'Muallif to\'g\'ri qo\'llanilgan tanaffus muloqot sifatini va ta\'sirini oshirishini ta\'kidlamoqda.'
            }
        ]
    },
    // === N1 ===
    {
        id: 'n1_read_1',
        level: 'N1',
        title: '技術[ぎじゅつ] 革新[かくしん]と 倫理的[りんりてき] 葛藤[かっとう]',
        passageType: 'medium',
        japaneseContent: `科学[かがく] 技術[ぎじゅつ]の 飛躍的[ひやくてき]な 進歩[しんぽ]は、人類[じんるい]に 未曽有[みぞう]の 利便性[りべんせい]を もたらした 反面[はんめん]、倫理的[りんりてき]な 境界線[きょうかいせん]を 曖昧[あいまい]にしてきた。
ゲノム 編集[へんしゅう]や 人工知能[じんこうちのう]の 制御[せいぎょ]を 巡[めぐ]る 議論[ぎろん]は、単なる 技術論[ぎじゅつろん]を超え、人間性[にんげんせい]の 本質[ほんしつ]を 問[と]い直[なお]す 哲学的[てつがくてき] 命題[めいだい]へと 昇華[しょうか]している。
我々[われわれ]は 技術[ぎじゅつ]の 可能性[かのうせい]を 追求[ついきゅう]すると 同時[どうじ]に、その 帰結[きけつ]に対する 責任[せきにん]を 負[お]わねばならない。`,
        uzbekTranslation: "Fan va texnologiyaning misli ko'rilmagan darajada rivojlanishi insoniyatga ulkan qulayliklar keltirgan bo'lsa-da, axloqiy chegaralarni xiralashtirib qo'ydi. Genom tahriri va sun'iy intellekt ustidan nazorat kabi munozaralar sof texnik masalalardan oshib, insoniylik mohiyatini qayta ko'rib chiqishga undaydigan falsafiy mavzuga aylandi.",
        recommendedTimeMinutes: 7,
        questions: [
            {
                id: 'q_n1_1_1',
                questionText: '筆者[ひっしゃ]の 視点[してん]として 最[もっと]も 妥当[だとう]なものは どれか。',
                options: [
                    '技術[ぎじゅつ]の 進歩[しんぽ]は 全[すべ]て 肯定[こうてい]されるべきだ',
                    '倫理的[りんりてき] 葛藤[かっとう]を 理由[りゆう]に 研究[けんきゅう]を 中止[ちゅうし]すべきだ',
                    '技術[ぎじゅつ]の 追求[ついきゅう]と その 結果[けっか]への 責任[せきにん]の 両立[りょうりつ]が 必要[ひつよう]だ',
                    '哲学的[てつがくてき] 議論[ぎろん]は 実用性[じつようせい]に 欠[か]ける'
                ],
                correctIndex: 2,
                explanation: 'So\'nggi jumlada texnologiya imkoniyatlarini izlash bilan birga uning oqibatlari uchun mas\'uliyatni ham zimmasiga olish kerakligi aytilgan.'
            }
        ]
    }
];
