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
  // ==========================================
  // === N5 PASSAGES ==========================
  // ==========================================
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
    uzbekTranslation:
      "Tanaka san har kuni ertalab soat 7:00 da uyg'onadi. Nonushtaga non va tuxum yeydi. Keyin soat 8:00 da poyezdda kompaniyaga boradi. Kompaniya soat 9:00 dan 17:00 gacha ishlaydi. Kechasi uyda yapon tilini o'rganadi.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_1_1',
        questionText: '田中[たなか]さんは 何時[なんじ]に 電車[でんしゃ]に 乗[の]りますか。',
        options: ['7時[しちじ]', '8時[はちじ]', '9時[くじ]', '5時[ごじ]'],
        correctIndex: 1,
        explanation:
          'Matnda "8時[はちじ]に 電車[でんしゃ]で 会社[かいしゃ]へ 行[い]きます" deb ko\'rsatilgan.',
      },
      {
        id: 'q_n5_1_2',
        questionText: '田中[たなか]さんは 夜[よる] 何[なに]を しますか。',
        options: [
          'テレビを 見[み]ます',
          '仕事[しごと]を します',
          '日本語[にほんご]を 勉強[べんきょう]します',
          '散歩[さんぽ]を します',
        ],
        correctIndex: 2,
        explanation:
          'Matnning so\'nggi qatorida "夜[よる]は 家[うち]で 日本語[にほんご]を 勉強[べんきょう]します" deyilgan.',
      },
    ],
  },
  {
    id: 'n5_read_2',
    level: 'N5',
    title: 'スーパーの 買[か]い物[もの]',
    passageType: 'short',
    japaneseContent: `今日[きょう]は 土曜日[どようび]ですから、駅[えき]の 前[まえ]の スーパーへ 行[い]きました。
りんごと バナナを 買[か]いました。
りんごは 3つで 300円[えん]でした。バナナは 1房[ひとふさ] 200円[えん]でした。
全部[ぜんぶ]で 500円[えん] 払[はら]いました。スーパーの 人[ひと]は とても 親切[しんせつ]でした。`,
    uzbekTranslation:
      "Bugun shanba bo'lgani uchun vokzal oldidagi supermarketga bordim. Olma va banan sotib oldim. Olma 3 donasi 300 yen edi. Banan bitta bog'lami 200 yen edi. Jami 500 yen to'ladim. Supermarket xodimi juda xushmuomala edi.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_2_1',
        questionText: '買[か]い物[もの]で 全部[ぜんぶ]で いくら 払[はら]いましたか。',
        options: ['300円[えん]', '200円[えん]', '500円[えん]', '600円[えん]'],
        correctIndex: 2,
        explanation:
          'Matnda 300 yen olma va 200 yen banan, "全部[ぜんぶ]で 500円[えん] 払[はら]いました" deb yozilgan.',
      },
    ],
  },
  {
    id: 'n5_read_3',
    level: 'N5',
    title: '友達[ともだち]からの 手紙[てがみ]',
    passageType: 'short',
    japaneseContent: `アジズさんへ
こんにちは。お元気[げんき]ですか。
来週[らいしゅう]の 日曜日[にちようび]に 私[わたし]の 家[うち]で パーティーを します。
一緒[いっしょ]に 日本料理[にほんりょうり]を 作[つく]りませんか。
時間[じかん]は 午後[ごご] 2時[にじ]からです。
待[ま]っています。
健太[けんた]より`,
    uzbekTranslation:
      'Azizga: Salom. Yaxshimisiz? Kelasi haftaning yakshanba kuni uyimda bayram (ziyofat) qilamiz. Birgalikda yapon taomini tayyorlamaymizmi? Vaqt soat 14:00 dan boshlanadi. Kutaman. Kenta dan.',
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_3_1',
        questionText: 'パーティーは いつ、何時[なんじ]からですか。',
        options: [
          '今週[こんしゅう]の 日曜日[にちようび] 午後[ごご] 1時[いちじ]',
          '来週[らいしゅう]の 日曜日[にちようび] 午後[ごご] 2時[にじ]',
          '来週[らいしゅう]の 土曜日[どようび] 午後[ごご] 2時[にじ]',
          '来週[らいしゅう]の 日曜日[にちようび] 午前[ごぜん] 10時[じゅうじ]',
        ],
        correctIndex: 1,
        explanation:
          'Xatda "来週[らいしゅう]の 日曜日[にちようび]" va "午後[ごご] 2時[にじ]から" deb aniq ko\'rsatilgan.',
      },
    ],
  },

  // ==========================================
  // === N4 PASSAGES ==========================
  // ==========================================
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
    uzbekTranslation:
      "Markaziy kutubxona e'loni. Ish vaqti: 9:00 - 19:00 (Shanba va yakshanba kunlari 17:00 gacha). Dam olish kunlari: Har haftaning dushanbasi va har oyning oxirgi chorshanbasi. Bir kishi ko'pi bilan 5 ta kitobni 2 haftaga olib turishi mumkin. Qaytarish kechiktirilsa, yangi kitob berilmaydi.",
    recommendedTimeMinutes: 4,
    questions: [
      {
        id: 'q_n4_1_1',
        questionText: '日曜日[にちようび]の 開館[かいかん] 時間[じかん]は いつですか。',
        options: [
          '午前[ごぜん]9時[くじ]～午後[ごご]7時[しちじ]',
          '午前[ごぜん]9時[くじ]～午後[ごご]5時[ごじ]',
          '休館日[きゅうかんび]です',
          '午後[ごご]1時[いちじ]～午後[ごご]5時[ごじ]',
        ],
        correctIndex: 1,
        explanation:
          'E\'londa "(土曜日[どようび]・日曜日[にちようび]は午後[ごご]5時[ごじ]まで)" deb ko\'rsatilgan.',
      },
      {
        id: 'q_n4_1_2',
        questionText: '本[ほん]は何冊[なんさつ]まで、何週間[なんしゅうかん] 借[か]りられますか。',
        options: [
          '3冊[さんさつ]・1週間[いっしゅうかん]',
          '5冊[ごさつ]・2週間[にしゅうかん]',
          '10冊[じゅっさつ]・2週間[にしゅうかん]',
          '5冊[ごさつ]・1か月[いっかげつ]',
        ],
        correctIndex: 1,
        explanation: 'Matnda "一人[ひとり] 5冊[ごさつ]まで、2週間[にしゅうかん]" deb qayd etilgan.',
      },
    ],
  },
  {
    id: 'n4_read_2',
    level: 'N4',
    title: '落[お]とし物[もの]の お知[し]らせ',
    passageType: 'information_retrieval',
    japaneseContent: `【駅[えき]からのお知[し]らせ】
昨日[きのう]、午後[ごご]3時[さんじ]ごろ、2番[にばん]ホームの ベンチで 黒[くろ]い かばんの 落[お]とし物[もの]がありました。
中[なか]には ノートと 青[あお]い 傘[かさ]が 入[はい]っています。
心当[こころあ]たりの ある 方[かた]は、駅[えき]の 窓口[まどぐち]まで お越[こ]しください。
受取[うけと]りには 身分証明書[みぶんしょうめいしょ]（学生証[がくせいしょう]など）が 必要[ひつよう]です。`,
    uzbekTranslation:
      "Vokzaldan e'lon. Kecha taxminan soat 15:00 larda 2-platforma o'rindig'ida qora sumka tushirib qoldirilgan. Ichida daftar va ko'k soyabon bor. Egasi bo'lgan shaxs vokzal oynasiga (qabulxonasiga) kelishi so'raladi. Qabul qilib olish uchun shaxsni tasdiqlovchi hujjat kerak.",
    recommendedTimeMinutes: 4,
    questions: [
      {
        id: 'q_n4_2_1',
        questionText: 'かばんを 受[う]け取[と]る ために 何[なに]が 必要[ひつよう]ですか。',
        options: [
          'お金[かね]',
          '身分証明書[みぶんしょうめいしょ]',
          '電車の切符[きっぷ]',
          '電話番号[でんわばんごう]',
        ],
        correctIndex: 1,
        explanation:
          'E\'londa "受取[うけと]りには 身分証明書[みぶんしょうめいしょ]が 必要[ひつよう]です" deb yozilgan.',
      },
    ],
  },

  // ==========================================
  // === N3 PASSAGES ==========================
  // ==========================================
  {
    id: 'n3_read_1',
    level: 'N3',
    title: 'AIと 将来[しょうらい]の 働き方[はたらきかた]',
    passageType: 'medium',
    japaneseContent: `近年[きんねん]、人工知能[じんこうちのう]（AI）の 発達[はったつ]により、私[わたし]たちの 生活[せいかつ]や 働き方[はたらきかた]が 大[おお]きく 変[か]わりつつあります。
かつては 人間[にんげん]が 行[おこな]っていた 単調[たんちょう]な 作業[さぎょう]は、AIによって 自動化[じどうか]されつつあります。
しかし、AIには 感情[かんじょう]や 創造性[そうぞうせい]が ありません。
したがって、これから 必要[ひつよう]とされるのは、AIを活用[かつよう]しながら 新[あたら]しい 価値[かち]を 創出[そうしゅつ]する 人才[じんざい]です。`,
    uzbekTranslation:
      "So'nggi yillarda sun'iy intellekt (AI) rivojlanishi tufayli hayotimiz va ishlash tarzimiz sezilarli darajada o'zgarmoqda. Inson bajaradigan bir xil mehnat AI tomonidan avtomatlashtirilmoqda. Biroq, AI da his-tuyg'ular va ijodkorlik yo'q. Shuning uchun kelajakda AI dan unumli foydalangan holda yangi qadriyatlarni yarata oladigan kadrlar talab etiladi.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_1_1',
        questionText: '文章[ぶんしょう]によると、AIに 欠[か]けているものは 何[なに]ですか。',
        options: [
          '計算[けいさん] 能力[のうりょく]',
          '感情[かんじょう]と 創造性[そうぞうせい]',
          '自動化[じどうか]の 技術[ぎじゅつ]',
          '情報[じょうほう]の 処理[しょり] 速度[そくど]',
        ],
        correctIndex: 1,
        explanation:
          'Matnda "AIには 感情[かんじょう]や 創造性[そうぞうせい]が ありません" deb aniq ko\'rsatilgan.',
      },
      {
        id: 'q_n3_1_2',
        questionText: 'これから 必要[ひつよう]とされる 人才[じんざい]とは どんな 人[ひと]ですか。',
        options: [
          'AIを 全[まった]く 使[つか]わない人',
          '単調[たんちょう]な 作業[さぎょう]だけを 速[はや]く できる人',
          'AIを活用[かつよう]して 新[あたら]しい 価値[かち]を 生[う]み出[だ]せる人',
          'コンピューターの 製造[せいぞう]だけを 行[おこな]う人',
        ],
        correctIndex: 2,
        explanation:
          'Matnning oxirida "AIを活用しながら新しい価値を創出する人材" talab qilinishi yozilgan.',
      },
    ],
  },
  {
    id: 'n3_read_2',
    level: 'N3',
    title: '食品[しょくひん]ロスを 減[へ]らす 取[と]り組[く]み',
    passageType: 'medium',
    japaneseContent: `まだ 食[た]べられるのに 捨[す]てられてしまう 食品[しょくひん]のことを「食品[しょくひん]ロス」と呼[よ]びます。
日本[にほん]では 年間[ねんかん] 数百万[すうひゃくまん]トンもの 食品[しょくひん]が 廃棄[はいき]されており、環境[かんきょう]への 悪影響[あくえいきょう]が 懸念[けねん]されています。
この問題[もんだい]に対処[たいしょ]するため、スーパーでは 賞味期限[しょうみきげん]が 近[ちか]い 商品[しょうひん]に 割引[わりびき]シールを 貼[は]ったり、消費者が 買[か]い過[す]ぎないよう 呼[よ]びかけたり しています。
一人一人[ひとりひとり]の 意識[いしき]が、大[おお]きな 変化[へんか]を もたらすのです。`,
    uzbekTranslation:
      "Hali yeyishga yaroqli bo'lsa-da, tashlab yuboriladigan oziq-ovqatlarga 'oziq-ovqat isrofi' (Food Loss) deyiladi. Yaponiyada har yili millionlab tonna oziq-ovqat tashlanadi va bu ekologiyaga salbiy ta'sir ko'rsatmoqda. Buni kamaytirish uchun do'konlar yaroqlilik muddati yaqinlashgan tovarlarga chegirma stikerlari qo'ymoqda. Har bir insonning ongli yondashuvi katta o'zgarishlar keltirib chiqaradi.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_2_1',
        questionText:
          'スーパーが 食品[しょくひん]ロスを 減[へ]らすために 行[おこな]っていることは 何[なに]ですか。',
        options: [
          '商品[しょうひん]の 販売[はんばい]を 中止[ちゅうし]すること',
          '賞味期限[しょうみきげん]が 近[ちか]い ものに 割引[わりびき]シールを 貼[は]ること',
          '食品[しょくひん]の 価格[かかく]を すべて 値上[ねあ]げすること',
          '海外[かいがい]へ すべて 輸出[ゆしゅつ]すること',
        ],
        correctIndex: 1,
        explanation: 'Matnda "賞味期限が近い商品に割引シールを貼ったり" deb keltirilgan.',
      },
    ],
  },

  // ==========================================
  // === N2 PASSAGES ==========================
  // ==========================================
  {
    id: 'n2_read_1',
    level: 'N2',
    title: 'コミュニケーションにおける「間[ま]」の 重要性[じゅうようせい]',
    passageType: 'medium',
    japaneseContent: `会話[かいわ]において、沈黙[ちんもく]や「間[ま]」を 恐[おそ]れる 人[ひと]は 少[すく]なくない。
しかし、適切[てきせつ]な「間[ま]」は 相手[あいて]に 考えさせる 時間[じかん]を 与[あた]え、発言[はつげん]の 重み[おもみ]を 増[ま]す 効果[こうか]がある。
話[はなし]し上手[じょうず]な 人[ひと]ほど、言葉[ことば]の 量[りょう]ではなく、この「間[ま]」を 巧み[たくみ]に 操[あやつ]っているのである。
言葉[ことば]を 詰[つ]め込む[こむ]ことだけが 意思伝達[いしでんたつ]の 手段[しゅだん]ではない。`,
    uzbekTranslation:
      "Muloqotda sukunat yoki suhbat orasidagi tanaffus ('ma') dan qo'rqadiganlar kam emas. Biroq, to'g'ri qo'llanilgan tanaffus suhbatdoshga o'ylash uchun vaqt beradi va aytilayotgan gapning qadrini oshiradi. Yaxshi suhbatdoshlar ko'p gapirish bilan emas, balki aynan shu 'ma' ni ustalik bilan boshqarish bilan ajralib turadilar.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_1_1',
        questionText: '筆者[ひっしゃ]が 最[もっと]も 伝[つた]えたいことは 何[なに]ですか。',
        options: [
          '沈黙[ちんもく]は 避[さ]けるべきである',
          '会話[かいわ]では 言葉[ことば]の 量[りょう]が 最[もっと]も 重要[じゅうよう]である',
          '適切[てきせつ]な「間[ま]」が 会話[かいわ]の 質[しつ]を 高[たか]める',
          '話[はなし]し上手[じょうず]になるには 練習[れんしゅう]が 不可欠[ふかけつ]である',
        ],
        correctIndex: 2,
        explanation:
          "Muallif to'g'ri qo'llanilgan tanaffus muloqot sifatini va ta'sirini oshirishini ta'kidlamoqda.",
      },
    ],
  },
  {
    id: 'n2_read_2',
    level: 'N2',
    title: 'テレワークと 都市[とし] 構造[こうぞう]の 変容[へんよう]',
    passageType: 'medium',
    japaneseContent: `情報[じょうほう] 通信[つうしん] 技術[ぎじゅつ]の 進展[しんてん]に伴い、在宅勤務[ざいたくきんむ]（テレワーク）が 普及[ふきゅう]した。
その結果[けっか]、都心[としん]の オフィスビルに 毎日[まいにち] 通勤[つうきん]する 必要性[ひつようせい]が 薄[うす]れ、郊外[こうがい]や 地方[ちほう]への 移住[いじゅう]を 選択[せんたく]する 人々[ひとびと]が 増加[ぞうか]している。
これにより、過度[かど]な 一極[いっきょく] 集中[しゅうちゅう]の 是正[ぜせい]や 地方[ちほう] 創生[そうせい]が 期待[きたい]される 一方[いっぽう]で、対面[たいめん]での 交流[こうりゅう] 不足[ぶそく]による 組織[そしき]力[りょく] 低下[ていか]という 新[あら]たな 課題[かだい]も 浮[う]かび上[あ]がっている。`,
    uzbekTranslation:
      "Axborot-kommunikatsiya texnologiyalari rivojlanishi bilan masofaviy ish keng tarqaldi. Natijada shahar markazidagi ofislarga har kuni qatnash zarurati kamayib, shahar chekkasi va hududlarga ko'chib o'tuvchilar soni ortmoqda. Bu poytaxtga haddan tashqari to'planishni yumshatishi kutilayotgan bo'lsa-da, yuzma-yuz muloqot yetishmasligi oqibatida jamoaviy birdamlikning pasayishi kabi yangi muammolarni ham keltirib chiqarmoqda.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_2_1',
        questionText:
          'テレワークの 普及[ふきゅう]によって 生[しょう]じた 課題[かだい]は 何[なに]ですか。',
        options: [
          '通信[つうしん] 費用[ひよう]の 高騰[こうとう]',
          '対面[たいめん]の 交流[こうりゅう] 不足[ぶそく]による 組織[そしき]力[りょく]の 低下[ていか]',
          '郊外[こうがい]の 交通[こうつう] 渋滞[じゅうたい]',
          '地方[ちほう] 人口[じんこう]の 激減[げきげん]',
        ],
        correctIndex: 1,
        explanation:
          'Matn oxirida "対面での交流不足による組織力低下という新たな課題" deb aniq ko\'rsatilgan.',
      },
    ],
  },

  // ==========================================
  // === N1 PASSAGES ==========================
  // ==========================================
  {
    id: 'n1_read_1',
    level: 'N1',
    title: '技術[ぎじゅつ] 革新[かくしん]と 倫理的[りんりてき] 葛藤[かっとう]',
    passageType: 'medium',
    japaneseContent: `科学[かがく] 技術[ぎじゅつ]の 飛躍的[ひやくてき]な 進歩[しんぽ]は、人類[じんるい]に 未曽有[みぞう]の 利便性[りべんせい]を もたらした 反面[はんめん]、倫理的[りんりてき]な 境界線[きょうかいせん]を 曖昧[あいまい]にしてきた。
ゲノム 編集[へんしゅう]や 人工知能[じんこうちのう]の 制御[せいぎょ]を 巡[めぐ]る 議論[ぎろん]は、単なる 技術論[ぎじゅつろん]を超え、人間性[にんげんせい]の 本質[ほんしつ]を 問[と]い直[なお]す 哲学的[てつがくてき] 命題[めいだい]へと 昇華[しょうか]している。
我々[われわれ]は 技術[ぎじゅつ]の 可能性[かのうせい]を 追求[ついきゅう]すると 同時[どうじ]に、その 帰結[きけつ]に対する 責任[せきにん]を 負[お]わねばならない。`,
    uzbekTranslation:
      "Fan va texnologiyaning misli ko'rilmagan darajada rivojlanishi insoniyatga ulkan qulayliklar keltirgan bo'lsa-da, axloqiy chegaralarni xiralashtirib qo'ydi. Genom tahriri va sun'iy intellekt ustidan nazorat kabi munozaralar sof texnik masalalardan oshib, insoniylik mohiyatini qayta ko'rib chiqishga undaydigan falsafiy mavzuga aylandi. Biz texnologiya imkoniyatlarini izlash bilan birga uning oqibatlari uchun ham mas'uliyatni zimmamizga olishimiz shart.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_1_1',
        questionText:
          '筆者[ひっしゃ]の 視点[してん]として 最[もっと]も 妥当[だとう]なものは どれか。',
        options: [
          '技術[ぎじゅつ]の 進歩[しんぽ]は 全[すべ]て 肯定[こうてい]されるべきだ',
          '倫理的[りんりてき] 葛藤[かっとう]を 理由[りゆう]に 研究[けんきゅう]を 中止[ちゅうし]すべきだ',
          '技術[ぎじゅつ]の 追求[ついきゅう]と その 結果[けっか]への 責任[せきにん]の 両立[りょうりつ]が 必要[ひつよう]だ',
          '哲学的[てつがくてき] 議論[ぎろん]は 実用性[じつようせい]に 欠[か]ける',
        ],
        correctIndex: 2,
        explanation:
          "So'nggi jumlada texnologiya imkoniyatlarini izlash bilan birga uning oqibatlari uchun mas'uliyatni ham zimmasiga olish kerakligi aytilgan.",
      },
    ],
  },
  {
    id: 'n1_read_2',
    level: 'N1',
    title: '伝統[でんとう] 工芸[こうげい]の 継承[けいしょう]と 現代的[げんだいてき] 価値[かち]',
    passageType: 'medium',
    japaneseContent: `長[なが]い 年月[ねんげつ]をかけて 培[つちか]われてきた 伝統[でんとう] 工芸[こうげい]の 技法[ぎほう]は、単なる 過去[かこ]の 遺物[いぶつ]ではない。
素材[そざい]の 特性[とくせい]を 見極[みきわ]め、過不足[かふそく]なく 手[て]を加[くわ]える 職人[しょくにん]の 身体知[しんたいち]には、大量[たいりょう] 生産[せいさん]・大量[たいりょう] 消費[しょうひ] 社会[しゃかい]が 見失[みうしな]った 持続[じぞく] 可能性[かのうせい]への 示唆[しさ]が 豊[ゆた]かに 息[いき]づいている。
伝統[でんとう]を 頑[かたく]なに 保持[ほじ]することのみならず、現代[げんだい]の 審美眼[しんびがん]と 融合[ゆうごう]させる 試[こころ]みこそが、真[しん]の 継承[けいしょう]を 可能[かのう]にする。`,
    uzbekTranslation:
      "Asrlar davomida shakllanib kelgan an'anaviy hunarmandchilik texnikasi shunchaki o'tmish qoldig'i emas. Material xususiyatlarini chuqur anglash va me'yordan ortiq yoki kam bo'lmagan holda ishlov berish mahorati ommaviy ishlab chiqarish jamiyati yo'qotgan barqarorlik (sustainable) tushunchasiga boy ishoralarni beradi. An'anani faqat ko'r-ko'rona saqlash emas, balki uni zamonaviy estetika bilan uyg'unlashtirish orqaligina haqiqiy merosni davom ettirish mumkin.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_2_1',
        questionText:
          '筆者[ひっしゃ]の 述[の]べる「真[しん]の 継承[けいしょう]」とは どういうことか。',
        options: [
          '過去[かこ]の 技法[ぎほう]を 一切[いっさい] 変[か]えずに そのまま 残[のこ]すこと',
          '伝統[でんとう]の 技法[ぎほう]を 現代[げんだい]の 感性[かんせい]や 美意識[びいしき]と 融合[ゆうごう]させること',
          '大量[たいりょう] 生産[せいさん]の 技術[ぎじゅつ]を 伝統[でんとう] 工芸[こうげい]に 導入[どうにゅう]すること',
          '伝統[でんとう] 工芸[こうげい]を 博物館[はくぶつかん]の 展示品[てんじひん]として 保存[ほぞん]すること',
        ],
        correctIndex: 1,
        explanation:
          "Muallif an'anani qotib qolgan holda emas, zamonaviy estetik qarashlar (現代の審美眼) bilan birlashtirib rivojlantirish haqiqiy meros ekanligini ta'kidlaydi.",
      },
    ],
  },
  // --- N5 EXPANDED PASSAGES ---
  {
    id: 'n5_read_4',
    level: 'N5',
    title: '私[わたし]の 部屋[へや]',
    passageType: 'short',
    japaneseContent: `私[わたし]の 部屋[へや]は 2階[にかい]に あります。
部屋[へや]に 机[つくえ]と ベッドが あります。
机[つくえ]の 上[うえ]に パソコンと 本[ほん]が あります。
窓[まど]の 近[ちか]くに 小[ちい]さい 花[はな]が あります。とても きれいです。`,
    uzbekTranslation:
      'Mening xonam 2-qavatda joylashgan. Xonada stol va karavot bor. Stol ustida kompyuter va kitoblar bor. Deraza yaqinida kichkina gul bor. U juda chiroyli.',
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_4_1',
        questionText: '机[つくえ]の 上[うえ]に 何[なに]が ありますか。',
        options: ['ベッドと 花', 'パソコンと 本', 'テレビと 本', 'かばんと 鍵'],
        correctIndex: 1,
        explanation:
          'Matnda "机[つくえ]の 上[うえ]に パソコンと 本[ほん]が あります" deb yozilgan.',
      },
    ],
  },
  {
    id: 'n5_read_5',
    level: 'N5',
    title: 'スーパーの セール',
    passageType: 'information_retrieval',
    japaneseContent: `【週末[しゅうまつ]の お知[し]らせ】
土曜日[どようび]と 日曜日[にちようび]は、すべての 野菜[やさい]が 20％引[にじゅっぱーせんとび]きになります。
果物[くだもの]を 3個[さんこ] 買[か]うと、100円[ひゃくえん] 安[やす]くなります。
午前[ごぜん]10時[じゅうじ]から 開[あ]きます。`,
    uzbekTranslation:
      "Dam olish kunlari barcha sabzavotlar 20% chegirma bilan sotiladi. 3 dona meva xarid qilsangiz, 100 yen arzonroq bo'ladi. Ertalab soat 10:00 da ochiladi.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_5_1',
        questionText: '野菜[やさい]は いつ 安[やす]くなりますか。',
        options: [
          '月曜日[げつようび]と 火曜日[かようび]',
          '土曜日[どようび]と 日曜日[にちようび]',
          '水曜日[すいようび]だけ',
          '毎日[まいにち]',
        ],
        correctIndex: 1,
        explanation:
          'Matnda shanba va yakshanba kunlari sabzavotlar 20% chegirmada ekanligi aniq aytilgan.',
      },
    ],
  },

  {
    id: 'n5_read_6',
    level: 'N5',
    title: '日本語学校[にほんごがっこう]の ピクニック',
    passageType: 'short',
    japaneseContent:
      '来週[らいしゅう]の 金曜日[きんようび]に 学生[がくせい]と 先生[せんせい]で 公園[こうえん]へ ピクニックに 行[い]きます。\n朝[あさ] 9時[くじ]に 学校[がっこう]の 前[まえ]に 集[あつ]まってください。\nバスで 1時間[いちじかん] 行[い]きます。\n飲[の]み物[もの]とお弁当[べんとう]を 持[も]ってきてください。\n雨[あめ]の ときは、ピクニックは ありません。',
    uzbekTranslation:
      "Kelasi hafta juma kuni talabalar va o'qituvchilar bog'ga sayrga (piknikka) boradilar. Ertalab soat 9:00 da maktab oldida to'planish kerak. Avtobusda 1 soat yuriladi. Ichimlik va tushlik ovqatingizni (bento) olib keling. Yomg'ir yog'sa, sayr bekor qilinadi.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_6_1',
        questionText: 'ピクニックは いつ 行[い]きますか。',
        options: [
          '今週[こんしゅう]の 金曜日[きんようび]',
          '来週[らいしゅう]の 金曜日[きんようび]',
          '来週[らいしゅう]の 日曜日[にちようび]',
          '毎日[まいにち]',
        ],
        correctIndex: 1,
        explanation: 'Matnda "来週[らいしゅう]の 金曜日[きんようび]に" deb yozilgan.',
      },
      {
        id: 'q_n5_6_2',
        questionText: '雨[あめ]が 降[ふ]ったら どうしますか。',
        options: [
          '学校[がっこう]で 食[た]べます',
          'ピクニックを しません',
          'バスの 中[なか]で 遊[あそ]びます',
          '土曜日[どようび]に 行[い]きます',
        ],
        correctIndex: 1,
        explanation:
          "Matnning oxirida \"雨[あめ]の ときは、ピクニックは ありません\" (yomg'ir bo'lsa sayr bo'lmaydi) deyilgan.",
      },
    ],
  },
  {
    id: 'n5_read_7',
    level: 'N5',
    title: '駅前[えきまえ] レストランの 案内[あんない]',
    passageType: 'information_retrieval',
    japaneseContent:
      '【さくら 食堂[しょくどう]のお知[し]らせ】\n昼[ひる]の 時間[じかん]：午前[ごぜん]11時[じゅういちじ]～午後[ごご]2時半[にじはん]\n夜[よる]の 時間[じかん]：午後[ごご]5時[ごじ]～午後[ごご]9時[くじ]\n定休日[ていきゅうび]：毎週[まいしゅう] 水曜日[すいようび]\n\nお昼[ひる]の 定食[ていしょく]は 全部[ぜんぶ] 700円[ななひゃくえん]です。\nコーヒーは 無料[むりょう]（0円[ぜろえん]）で 飲[の]むことができます。',
    uzbekTranslation:
      "Sakura oshxonasi e'loni. Tushlik vaqti: 11:00 dan 14:30 gacha. Kechki vaqt: 17:00 dan 21:00 gacha. Dam olish kuni: Har chorshanba. Tushlik kompleks taomlari barchasi 700 yen. Qahva bepul (0 yen) taqdim etiladi.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_7_1',
        questionText: 'レストランが 休[やす]みの 日[ひ]は いつですか。',
        options: [
          '月曜日[げつようび]',
          '火曜日[かようび]',
          '水曜日[すいようび]',
          '日曜日[にちようび]',
        ],
        correctIndex: 2,
        explanation:
          'E\'londa "定休日[ていきゅうび]：毎週[まいしゅう] 水曜日[すいようび]" deb aniq yozilgan.',
      },
      {
        id: 'q_n5_7_2',
        questionText: '昼[ひる]の 定食[ていしょく]と コーヒーを 飲[の]むと、いくらですか。',
        options: [
          '500円[ごひゃくえん]',
          '700円[ななひゃくえん]',
          '900円[きゅうひゃくえん]',
          '1200円[せんにひゃくえん]',
        ],
        correctIndex: 1,
        explanation: "Tushlik 700 yen, kofe esa bepul (0 yen), jami 700 yen bo'ladi.",
      },
    ],
  },
  {
    id: 'n5_read_8',
    level: 'N5',
    title: 'アパートの ルール',
    passageType: 'information_retrieval',
    japaneseContent:
      '【アパートに 住[す]む みなさんへ】\n1. 夜[よる] 10時[じゅうじ]から 朝[あさ] 7時[しちじ]までは、大[おお]きい 声[こえ]で 話[はな]したり、音楽[おんがく]を 聞[き]いたり しないでください。\n2. 燃[も]える ゴミは 火曜日[かようび]と 金曜日[きんようび]の 朝[あさ] 8時[はちじ]までに 出[だ]してください。\n3. 部屋[へや]の 中[なか]で 犬[いぬ]や 猫[ねこ]などの ペットを 飼[か]うことは できません。',
    uzbekTranslation:
      'Kvartirada yashovchilar diqqatiga: 1. Kechki soat 22:00 dan ertalab 7:00 gacha baland ovozda gaplashmang yoki musiqa eshitmang. 2. Yonuvchi axlatlarni seshanba va juma kunlari ertalab soat 8:00 gacha chiqaring. 3. Xonada it yoki mushuk kabi uy hayvonlarini boqish taqiqlanadi.',
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_8_1',
        questionText: 'ゴミは いつ 出[だ]しますか。',
        options: [
          '水曜日[すいようび]の 夜[よる]',
          '火曜日[かようび]と 金曜日[きんようび]の 朝[あさ] 8時[はちじ]まで',
          '土曜日[どようび]の 午後[ごご]',
          'いつでも いいです',
        ],
        correctIndex: 1,
        explanation:
          'Qoidada "火曜日[かようび]と 金曜日[きんようび]の 朝[あさ] 8時[はちじ]までに 出[だ]してください" deb ko\'rsatilgan.',
      },
      {
        id: 'q_n5_8_2',
        questionText: '部屋[へや]で しては いけないことは どれですか。',
        options: [
          '本[ほん]を 読[よ]むこと',
          '料理[りょうり]を すること',
          '犬[いぬ]や 猫[ねこ]を 飼[か]うこと',
          '電気[でんき]を つけること',
        ],
        correctIndex: 2,
        explanation: '3-bandda xonada it yoki mushuk saqlash mumkin emasligi aytilgan.',
      },
    ],
  },
  {
    id: 'n5_read_9',
    level: 'N5',
    title: '京都[きょうと]への 週末[しゅうまつ] 旅行[りょこう]',
    passageType: 'short',
    japaneseContent:
      '私[わたし]は 先週[せんしゅう]の 土曜日[どようび]に 新幹線[しんかんせん]で 京都[きょうと]へ 行[い]きました。\n東京[とうきょう]から 京都[きょうと]まで 2時間半[にじかんはん] かかりました。\n京都[きょうと]で 古[ふる]い 有名[ゆうめい]な お寺[てら]を 見[み]ました。紅葉[もみじ]が とても きれいでした。\n抹茶[まっちゃ]の アイスクリームを 食[た]べました。甘[あま]くて おいしかったです。\nまた 春[はる]に 桜[さくら]を 見[み]に 行[い]きたいです。',
    uzbekTranslation:
      "Men o'tgan haftaning shanba kuni Shinkansenda Kyotoga bordim. Tokyodan Kyotogacha 2 yarim soat vaqt ketdi. Kyotoda qadimiy mashhur ibodatxonalarni tomosha qildim. Kuzgi qizil yaproqlar juda chiroyli edi. Matcha muzqaymog'ini yedim. Shirin va mazali edi. Yana bahorda sakuralarni ko'rgani borishni xohlayman.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_9_1',
        questionText: '東京[とうきょう]から 京都[きょうと]まで どのくらい かかりましたか。',
        options: ['1時間[いちじかん]', '2時間半[にじかんはん]', '5時間[ごじかん]', '1日[いちにち]'],
        correctIndex: 1,
        explanation: 'Matnda "2時間半[にじかんはん] かかりました" deb aniq yozilgan.',
      },
      {
        id: 'q_n5_9_2',
        questionText: 'この 人[ひと]は 春[はる]に 何[なに]を しに 行[い]きたいですか。',
        options: [
          'スキーを しに 行[い]きたい',
          '桜[さくら]を 見[み]に 行[い]きたい',
          '泳[およ]ぎに 行[い]きたい',
          '仕事[しごと]を しに 行[い]きたい',
        ],
        correctIndex: 1,
        explanation:
          'Matnning oxirgi jumlasida: "また 春[はる]に 桜[さくら]を 見[み]に 行[い]きたいです" deyilgan.',
      },
    ],
  },
  {
    id: 'n5_read_10',
    level: 'N5',
    title: '友[とも]だちからの メモ',
    passageType: 'short',
    japaneseContent:
      'アリさんへ\n今日[きょう]の 午後[ごご]、アリさんの 部屋[へや]へ 行[い]きましたが、留守[るす]でした。\n借[か]りていた 日本語[にほんご]の 辞書[じしょ]を 机[つくえ]の 上[うえ]に 置[お]きました。\n辞書[じしょ]のおかげで、宿題[しゅくだい]が 全部[ぜんぶ] 終[お]わりました。どうも ありがとうございました。\nまた 明日[あした]、学校[がっこう]で 会[あ]いましょう。\nカルロスより',
    uzbekTranslation:
      "Aliga: Bugun tushdan keyin xonangizga bordim, lekin uydamasmidingiz. Qarzga olgan yapon tili lug'atimni stulingiz ustiga qo'ydim. Lug'at yordamida uy vazifasini hammasini tugatdim. Katta rahmat. Ertaga yana maktabda ko'rishguncha. Karlosdan.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_10_1',
        questionText: 'カルロスさんは 机[つくえ]の 上[うえ]に 何[なに]を 置[お]きましたか。',
        options: ['ノート', '宿題[しゅくだい]', '辞書[じしょ]', '時計[とけい]'],
        correctIndex: 2,
        explanation: "Karlos olib turgan lug'atini (辞書) stol ustiga qo'yib ketgan.",
      },
      {
        id: 'q_n5_10_2',
        questionText: 'カルロスさんは なぜ アリさんに お礼[れい]を 言[い]いましたか。',
        options: [
          'お金[かね]を もらったから',
          '辞書[じしょ]のおかげで 宿題[しゅくだい]が 終[お]わったから',
          '部屋[へや]を 掃除[そうじ]してくれたから',
          '一緒[いっしょ]に ご飯[はん]を 食[た]べたから',
        ],
        correctIndex: 1,
        explanation:
          'Matnda "辞書[じしょ]のおかげで、宿題[しゅくだい]が 全部[ぜんぶ] 終[お]わりました。どうも ありがとうございました" deb tushuntirilgan.',
      },
    ],
  },

  {
    id: 'n5_read_6',
    level: 'N5',
    title: '日本語学校[にほんごがっこう]の ピクニック',
    passageType: 'short',
    japaneseContent:
      '来週[らいしゅう]の 金曜日[きんようび]に 学生[がくせい]と 先生[せんせい]で 公園[こうえん]へ ピクニックに 行[い]きます。\n朝[あさ] 9時[くじ]に 学校[がっこう]の 前[まえ]に 集[あつ]まってください。\nバスで 1時間[いちじかん] 行[い]きます。\n飲[の]み物[もの]とお弁当[べんとう]を 持[も]ってきてください。\n雨[あめ]の ときは、ピクニックは ありません。',
    uzbekTranslation:
      "Kelasi hafta juma kuni talabalar va o'qituvchilar bog'ga sayrga (piknikka) boradilar. Ertalab soat 9:00 da maktab oldida to'planish kerak. Avtobusda 1 soat yuriladi. Ichimlik va tushlik ovqatingizni (bento) olib keling. Yomg'ir yog'sa, sayr bekor qilinadi.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_6_1',
        questionText: 'ピクニックは いつ 行[い]きますか。',
        options: [
          '今週[こんしゅう]の 金曜日[きんようび]',
          '来週[らいしゅう]の 金曜日[きんようび]',
          '来週[らいしゅう]の 日曜日[にちようび]',
          '毎日[まいにち]',
        ],
        correctIndex: 1,
        explanation: 'Matnda "来週[らいしゅう]の 金曜日[きんようび]に" deb yozilgan.',
      },
      {
        id: 'q_n5_6_2',
        questionText: '雨[あめ]が 降[ふ]ったら どうしますか。',
        options: [
          '学校[がっこう]で 食[た]べます',
          'ピクニックを しません',
          'バスの 中[なか]で 遊[あそ]びます',
          '土曜日[どようび]に 行[い]きます',
        ],
        correctIndex: 1,
        explanation:
          "Matnning oxirida \"雨[あめ]の ときは、ピクニックは ありません\" (yomg'ir bo'lsa sayr bo'lmaydi) deyilgan.",
      },
    ],
  },

  {
    id: 'n5_read_7',
    level: 'N5',
    title: '駅前[えきまえ] レストランの 案内[あんない]',
    passageType: 'information_retrieval',
    japaneseContent:
      '【さくら 食堂[しょくどう]のお知[し]らせ】\n昼[ひる]の 時間[じかん]：午前[ごぜん]11時[じゅういちじ]～午後[ごご]2時半[にじはん]\n夜[よる]の 時間[じかん]：午後[ごご]5時[ごじ]～午後[ごご]9時[くじ]\n定休日[ていきゅうび]：毎週[まいしゅう] 水曜日[すいようび]\n\nお昼[ひる]の 定食[ていしょく]は 全部[ぜんぶ] 700円[ななひゃくえん]です。\nコーヒーは 無料[むりょう]（0円[ぜろえん]）で 飲[の]むことができます。',
    uzbekTranslation:
      "Sakura oshxonasi e'loni. Tushlik vaqti: 11:00 dan 14:30 gacha. Kechki vaqt: 17:00 dan 21:00 gacha. Dam olish kuni: Har chorshanba. Tushlik kompleks taomlari barchasi 700 yen. Qahva bepul (0 yen) taqdim etiladi.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_7_1',
        questionText: 'レストランが 休[やす]みの 日[ひ]は いつですか。',
        options: [
          '月曜日[げつようび]',
          '火曜日[かようび]',
          '水曜日[すいようび]',
          '日曜日[にちようび]',
        ],
        correctIndex: 2,
        explanation:
          'E\'londa "定休日[ていきゅうび]：毎週[まいしゅう] 水曜日[すいようび]" deb aniq yozilgan.',
      },
      {
        id: 'q_n5_7_2',
        questionText: '昼[ひる]の 定食[ていしょく]と コーヒーを 飲[の]むと、いくらですか。',
        options: [
          '500円[ごひゃくえん]',
          '700円[ななひゃくえん]',
          '900円[きゅうひゃくえん]',
          '1200円[せんにひゃくえん]',
        ],
        correctIndex: 1,
        explanation: "Tushlik 700 yen, kofe esa bepul (0 yen), jami 700 yen bo'ladi.",
      },
    ],
  },

  {
    id: 'n5_read_8',
    level: 'N5',
    title: 'アパートの ルール',
    passageType: 'information_retrieval',
    japaneseContent:
      '【アパートに 住[す]む みなさんへ】\n1. 夜[よる] 10時[じゅうじ]から 朝[あさ] 7時[しちじ]までは、大[おお]きい 声[こえ]で 話[はな]したり、音楽[おんがく]を 聞[き]いたり しないでください。\n2. 燃[も]える ゴミは 火曜日[かようび]と 金曜日[きんようび]の 朝[あさ] 8時[はちじ]までに 出[だ]してください。\n3. 部屋[へや]の 中[なか]で 犬[いぬ]や 猫[ねこ]などの ペットを 飼[か]うことは できません。',
    uzbekTranslation:
      'Kvartirada yashovchilar diqqatiga: 1. Kechki soat 22:00 dan ertalab 7:00 gacha baland ovozda gaplashmang yoki musiqa eshitmang. 2. Yonuvchi axlatlarni seshanba va juma kunlari ertalab soat 8:00 gacha chiqaring. 3. Xonada it yoki mushuk kabi uy hayvonlarini boqish taqiqlanadi.',
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_8_1',
        questionText: 'ゴミは いつ 出[だ]しますか。',
        options: [
          '水曜日[すいようび]の 夜[よる]',
          '火曜日[かようび]と 金曜日[きんようび]の 朝[あさ] 8時[はちじ]まで',
          '土曜日[どようび]の 午後[ごご]',
          'いつでも いいです',
        ],
        correctIndex: 1,
        explanation:
          'Qoidada "火曜日[かようび]と 金曜日[きんようび]の 朝[あさ] 8時[はちじ]までに 出[だ]してください" deb ko\'rsatilgan.',
      },
      {
        id: 'q_n5_8_2',
        questionText: '部屋[へや]で しては いけないことは どれですか。',
        options: [
          '本[ほん]を 読[よ]むこと',
          '料理[りょうり]を すること',
          '犬[いぬ]や 猫[ねこ]を 飼[か]うこと',
          '電気[でんき]を つけること',
        ],
        correctIndex: 2,
        explanation: '3-bandda xonada it yoki mushuk saqlash mumkin emasligi aytilgan.',
      },
    ],
  },

  {
    id: 'n5_read_9',
    level: 'N5',
    title: '京都[きょうと]への 週末[しゅうまつ] 旅行[りょこう]',
    passageType: 'short',
    japaneseContent:
      '私[わたし]は 先週[せんしゅう]の 土曜日[どようび]に 新幹線[しんかんせん]で 京都[きょうと]へ 行[い]きました。\n東京[とうきょう]から 京都[きょうと]まで 2時間半[にじかんはん] かかりました。\n京都[きょうと]で 古[ふる]い 有名[ゆうめい]な お寺[てら]を 見[み]ました。紅葉[もみじ]が とても きれいでした。\n抹茶[まっちゃ]の アイスクリームを 食[た]べました。甘[あま]くて おいしかったです。\nまた 春[はる]に 桜[さくら]を 見[み]に 行[い]きたいです。',
    uzbekTranslation:
      "Men o'tgan haftaning shanba kuni Shinkansenda Kyotoga bordim. Tokyodan Kyotogacha 2 yarim soat vaqt ketdi. Kyotoda qadimiy mashhur ibodatxonalarni tomosha qildim. Kuzgi qizil yaproqlar juda chiroyli edi. Matcha muzqaymog'ini yedim. Shirin va mazali edi. Yana bahorda sakuralarni ko'rgani borishni xohlayman.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_9_1',
        questionText: '東京[とうきょう]から 京都[きょうと]まで どのくらい かかりましたか。',
        options: ['1時間[いちじかん]', '2時間半[にじかんはん]', '5時間[ごじかん]', '1日[いちにち]'],
        correctIndex: 1,
        explanation: 'Matnda "2時間半[にじかんはん] かかりました" deb aniq yozilgan.',
      },
      {
        id: 'q_n5_9_2',
        questionText: 'この 人[ひと]は 春[はる]に 何[なに]を しに 行[い]きたいですか。',
        options: [
          'スキーを しに 行[い]きたい',
          '桜[さくら]を 見[み]に 行[い]きたい',
          '泳[およ]ぎに 行[い]きたい',
          '仕事[しごと]を しに 行[い]きたい',
        ],
        correctIndex: 1,
        explanation:
          'Matnning oxirgi jumlasida: "また 春[はる]に 桜[さくら]を 見[み]に 行[い]きたいです" deyilgan.',
      },
    ],
  },

  {
    id: 'n5_read_10',
    level: 'N5',
    title: '友[とも]だちからの メモ',
    passageType: 'short',
    japaneseContent:
      'アリさんへ\n今日[きょう]の 午後[ごご]、アリさんの 部屋[へや]へ 行[い]きましたが、留守[るす]でした。\n借[か]りていた 日本語[にほんご]の 辞書[じしょ]を 机[つくえ]の 上[うえ]に 置[お]きました。\n辞書[じしょ]のおかげで、宿題[しゅくだい]が 全部[ぜんぶ] 終[お]わりました。どうも ありがとうございました。\nまた 明日[あした]、学校[がっこう]で 会[あ]いましょう。\nカルロスより',
    uzbekTranslation:
      "Aliga: Bugun tushdan keyin xonangizga bordim, lekin uydamasmidingiz. Qarzga olgan yapon tili lug'atimni stulingiz ustiga qo'ydim. Lug'at yordamida uy vazifasini hammasini tugatdim. Katta rahmat. Ertaga yana maktabda ko'rishguncha. Karlosdan.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n5_10_1',
        questionText: 'カルロスさんは 机[つくえ]の 上[うえ]に 何[なに]を 置[お]きましたか。',
        options: ['ノート', '宿題[しゅくだい]', '辞書[じしょ]', '時計[とけい]'],
        correctIndex: 2,
        explanation: "Karlos olib turgan lug'atini (辞書) stol ustiga qo'yib ketgan.",
      },
      {
        id: 'q_n5_10_2',
        questionText: 'カルロスさんは なぜ アリさんに お礼[れい]を 言[い]いましたか。',
        options: [
          'お金[かね]を もらったから',
          '辞書[じしょ]のおかげで 宿題[しゅくだい]が 全部[ぜんぶ] 終[お]わったから',
          '部屋[へや]を 掃除[そうじ]してくれたから',
          '一緒[いっしょ]に ご飯[はん]を 食[た]べたから',
        ],
        correctIndex: 1,
        explanation:
          'Matnda "辞書[じしょ]のおかげで、宿題[しゅくだい]が 全部[ぜんぶ] 終[お]わりました。どうも ありがとうございました" deb tushuntirilgan.',
      },
    ],
  },

  // --- N4 EXPANDED PASSAGES ---
  {
    id: 'n4_read_3',
    level: 'N4',
    title: 'ゴミの 分別[ぶんべつ] ルール',
    passageType: 'information_retrieval',
    japaneseContent: `【アパートの 住民[じゅうみん]の 皆様[みなさま]へ】
燃[も]える ゴミは 火曜日[かようび]と 金曜日[きんようび]の 朝[あさ]8時[はちじ]までに 出[だ]してください。
燃[も]えない ゴミは 第2[だいに]・第4[だいよん] 水曜日[すいようび]です。
ビンや カンは 洗[あら]ってから、専用[せんよう]の カゴに 入[い]れてください。
指定[してい]の ゴミ袋[ぶくろ]を 必ず 使[つか]ってください。`,
    uzbekTranslation:
      'Kvartira aholisiga: Yonadigan chiqindilarni seshanba va juma kunlari ertalab soat 8:00 gacha chiqaring. Yonmaydigan chiqindilar har oyning 2- va 4-chorshanbasida. Shisha va konserva bankalarini yuvib maxsus savatga soling. Belgilangan maxsus chiqindi xaltasidan foydalaning.',
    recommendedTimeMinutes: 4,
    questions: [
      {
        id: 'q_n4_3_1',
        questionText: '燃[も]える ゴミは いつ 出[だ]しますか。',
        options: [
          '水曜日[すいようび]の 午後',
          '火曜日[かようび]と 金曜日[きんようび]の 朝8時まで',
          '土曜日[どようび]の 朝',
          '毎日 いつでも よい',
        ],
        correctIndex: 1,
        explanation: 'Matnda "火曜日と 金曜日の 朝8時までに 出してください" deyilgan.',
      },
    ],
  },
  {
    id: 'n4_read_4',
    level: 'N4',
    title: '薬[くすり]の 飲[の]み方[かた]の 注意[ちゅうい]',
    passageType: 'short',
    japaneseContent: `この 薬[くすり]は 1日[いちにち] 3回[さんかい]、毎食後[まいしょくご] 30分[さんじゅっぷん]以内[いない]に 飲[の]んでください。
お茶[ちゃ]や ジュースではなく、水[みず]または ぬるま湯[ゆ]で 飲[の]むようにしてください。
もし 熱[ねつ]が 下[さ]がっても、渡[わた]された 3日分[みっかぶん]は 最後[さいご]まで 飲[の]み切[き]る 必要[ひつよう]があります。`,
    uzbekTranslation:
      "Ushbu dorini kuniga 3 mahal, har ovqatdan so'ng 30 daqiqa ichida iching. Choy yoki sharbat bilan emas, suv yoki iliq suv bilan iching. Haroratingiz tushsa ham berilgan 3 kunlik dorini oxirigacha tugatishingiz shart.",
    recommendedTimeMinutes: 4,
    questions: [
      {
        id: 'q_n4_4_1',
        questionText: '熱[ねつ]が 下[さ]がった 後[あと]、薬[くすり]を どうしなければなりませんか。',
        options: [
          'すぐに 飲[の]むのを やめる',
          '最後[さいご]まで 全部[ぜんぶ] 飲[の]み切[き]る',
          '1日1回[いっかい]に 減[へ]らす',
          'ジュースと 一緒[いっしょ]に 飲[の]む',
        ],
        correctIndex: 1,
        explanation: 'Matnda "渡された 3日分は 最後まで 飲み切る必要があります" deb yozilgan.',
      },
    ],
  },

  // --- N3 EXPANDED PASSAGES ---
  {
    id: 'n3_read_3',
    level: 'N3',
    title: '日本[にほん]の 銭湯[せんとう] 文化[ぶんか]',
    passageType: 'medium',
    japaneseContent: `日本[にほん]の 銭湯[せんとう]は、単[たん]に 体[からだ]を 洗[あら]うだけでなく、地域[ちいき]の 人々[ひとびと]が 交流[こうりゅう]する 憩[いこ]いの 場[ば]として 親[した]しまれてきました。
銭湯[せんとう]を 利用[りよう]する 際[さい]には、湯船[ゆぶね]に 入[はい]る 前[まえ]に 体[からだ]を 洗[あら]い、タオルを 湯船[ゆぶね]の 中[なか]に 入[い]れないといった 独自[どくじ]の マナーが 存在[そんざい]します。
近年[きんねん]では、若者[わかもの]や 外国人[がいこくじん] 観光客[かんこうきゃく]の間[あいだ]でも、その レトロな 雰囲気[ふんいき]が 再評価[さいひょうか]されています。`,
    uzbekTranslation:
      "Yaponiyadagi ommaviy hammomlar (Sentou) faqat yuvinish joyi emas, balki mahalla ahlining dildan suhbatlashadigan hordiq maskani hisoblanadi. Sentoudan foydalanganda hovuzga tushishdan oldin tanani yuvish va sochiqni hovuz suviga botirmaslik kabi o'ziga xos odob-qoidalar mavjud. So'nggi yillarda yoshlar va xorijiy sayyohlar orasida ham uning retro muhiti qayta qadrlanmoqda.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_3_1',
        questionText: '銭湯[せんとう]の マナーとして 正[ただ]しいものは どれですか。',
        options: [
          'タオルを 湯船[ゆぶね]の 中[なか]で 洗[あら]うこと',
          '湯船[ゆぶね]に 入[はい]る 前[まえ]に 体[からだ]を 洗[あら]うこと',
          '入浴[にゅうよく]しながら 大声[おおごえ]で 電話[でんわ]すること',
          '石鹸[せっけん]を つけたまま 湯船[ゆぶね]に 入[はい]ること',
        ],
        correctIndex: 1,
        explanation: 'Matnda "湯船に入る前に体を洗い" deb aniq odob qoidasi keltirilgan.',
      },
    ],
  },
  {
    id: 'n3_read_4',
    level: 'N3',
    title: '電子[でんし]書籍[しょせき]と 紙[かみ]の 本[ほん]',
    passageType: 'medium',
    japaneseContent: `スマートフォンや 専用[せんよう]端末[たんまつ]で 読[よ]める 電子[でんし]書籍[しょせき]は、場所[ばしょ]を 取[と]らず、いつでも どこでも 読書[どくしょ]を 楽[たの]しめる 利便性[りべんせい]がある。
しかし、紙[かみ]の 本[ほん]が 持[も]つ「手触[てざわ]り」や「ページを めくる 感覚[かんかく]」は、読書[どくしょ]の 記憶[きおく]を 定着[ていちゃく]させる 上[うえ]で 大切[たいせつ]な 役割[やくわり]を 果[は]たしているとされる。
双方[そうほう]の 利点[りてん]を 理解[りかい]し、目的[もくてき]に 応[おう]じて 使[つか]い分[わ]けることが 望[のぞ]ましい。`,
    uzbekTranslation:
      "Elektron kitoblar joy egallamaydi va istalgan joyda mutolaa qilish imkonini beradi. Biroq qog'oz kitobning ushlashdagi hissi va sahifalarni varaqlash jarayoni xotirani mustahkamlashda muhim ahamiyat kasb etadi. Ikkalasining afzalliklarini tushunib, maqsadga qarab to'g'ri tanlash maqsadga muvofiqdir.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_4_1',
        questionText:
          '筆者[ひっしゃ]は 電子[でんし]書籍[しょせき]と 紙[かみ]の 本[ほん]について どう考[かんが]えていますか。',
        options: [
          '紙[かみ]の 本[ほん]は 将来[しょうらい] すべて なくなるべきだ',
          '電子[でんし]書籍[しょせき]だけを 使[つか]うべきだ',
          '目的[もくてき]に 応[おう]じて 両方[りょうほう]を 上手[じょうず]に 使[つか]い分[わ]けるのが よい',
          'どちらも 読書[どくしょ]には 適[てき]していない',
        ],
        correctIndex: 2,
        explanation:
          "So'nggi jumlada maqsadga qarab ikkalasidan o'rinli foydalanish (使い分ける) maqsadga muvofiq deyilgan.",
      },
    ],
  },

  // --- N2 EXPANDED PASSAGES ---
  {
    id: 'n2_read_3',
    level: 'N2',
    title: '食品[しょくひん] 表示[ひょうじ]と 消費者[しょうひしゃ] 心理[しんり]',
    passageType: 'medium',
    japaneseContent: `製品[せいひん]の パッケージに「国産[こくさん]」や「無添加[むてんか]」と 記[しる]されていると、消費者[しょうひしゃ]は 無条件[むじょうけん]に 安全[あんぜん]かつ 高品質[こうひんしつ]だと 判断[はんだん]しがちである。
しかし、添加物[てんかぶつ]の 全[すべ]てが 有害[ゆうがい]なわけではなく、保存性[ほぞんせい]や 安全性[あんぜんせい]を 保[たも]つために 必要不可欠[ひつようふかけつ]なものも 少[すく]なくない。
単なる イメージや 宣伝[せんでん]文句[もんく]に 惑[まど]わされず、正確[せいかく]な 知識[ちしき]に 基[づ]いて 商品[しょうひん]を 吟味[ぎんみ]する 姿勢[しせい]が 消費者[しょうひしゃ]に 求[もと]められている。`,
    uzbekTranslation:
      "Qadoqda 'Mahalliy mahsulot' yoki 'Qo'shimchalarsiz' deb yozilsa, iste'molchilar so'zsiz xavfsiz va sifatli deb hisoblashga moyildirlar. Holbuki barcha qo'shimchalar zararli emas, balki mahsulotni saqlash va xavfsizligini ta'minlashda o'rni beqiyos. Shunchaki reklama so'zlariga aldanmasdan, aniq bilimlar asosida tanlash lozim.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_3_1',
        questionText:
          '筆者[ひっしゃ]が 消費者[しょうひしゃ]に 求[もと]めていることは 何[なに]ですか。',
        options: [
          '無添加[むてんか]の 商品[しょうひん]だけを 徹底[てってい]して 買[か]うこと',
          '正確[せいかく]な 知識[ちしき]に 基[もと]づいて 商品[しょうひん]を 冷静[れいせい]に 選[えら]ぶこと',
          '安[やす]い 食品[しょくひん]だけを 優先[ゆうせん]すること',
          'すべての 添加物[てんかぶつ]の 使用[しよう]を 禁止[きんし]する 署名[しょめい]を 集[あつ]めること',
        ],
        correctIndex: 1,
        explanation:
          "Muallif aniq bilimlar asosida mahsulotlarni xolis tekshirib tanlashni (正確な知識に基づいて商品を吟味する姿勢) so'ramoqda.",
      },
    ],
  },
  {
    id: 'n2_read_4',
    level: 'N2',
    title: 'シェアリング・エコノミーの 功罪[こうざい]',
    passageType: 'medium',
    japaneseContent: `自動車[じどうしゃ]や 住居[じゅうきょ]、衣服[いふく]に至[いた]るまで、モノを「所有[しょゆう]」するのではなく「共有[きょうゆう]」する シェアリング・エコノミーが 急速[きゅうそく]に 浸透[しんとう]している。
資源[しげん]の 有効[ゆうこう] 活用[かつよう]や 費用[ひよう] 削減[さくげん]という 恩恵[おんけい]をもたらす 一方[いっぽう]で、事故[じこ]や トラブルが 生[しょう]じた 際[さい]の 責任[せきにん] 所在[しょざい]の 曖昧[あいまい]さが 法的[ほうてき]な 争点[そうてん]となっている。
利便性[りべんせい]と セーフティネットの 構築[こうちく]を 両立[りょうりつ]させることが、この 新[あら]たな 経済[けいざい]モデルの 持続[じぞく]には 欠[か]かせない。`,
    uzbekTranslation:
      "Buyumlarga egalik qilish emas, balki ularni birgalikda foydalanish (sharing economy) avtomobil, uy-joy va kiyimgacha shiddat bilan kirib bormoqda. Resurslarni tejash va arzonlik kabi yutuqlar bilan birga, falokat yuz berganda javobgarlikning noaniqligi huquqiy muammo tug'dirmoqda. Qulaylik va xavfsizlik kafolatlarini uyg'unlashtirish muhim shartdir.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_4_1',
        questionText:
          'シェアリング・エコノミーの 課題[かだい]として 挙[あ]げられているのは 何[なに]ですか。',
        options: [
          '資源[しげん]の 浪費[ろうひ]',
          'トラブル 発生時[はっせいじ]における 責任[せきにん]の 所在[しょざい]が 曖昧[あいまい]なこと',
          '利用[りよう] 料金[りょうきん]が 従来[じゅうらい]より はるかに 高額[こうがく]なこと',
          '若者[わかもの]の 利用者[りようしゃ]が まったく 伸[の]びないこと',
        ],
        correctIndex: 1,
        explanation:
          'Matnda "事故やトラブルが生じた際の責任所在の曖昧さ" muammo sifatida aytilgan.',
      },
    ],
  },

  // --- N1 EXPANDED PASSAGES ---
  {
    id: 'n1_read_3',
    level: 'N1',
    title: '身体知[しんたいち]と 暗黙知[あんもくち]の 構造[こうぞう]',
    passageType: 'medium',
    japaneseContent: `職人[しょくにん]の 熟練[じゅくれん]した 技[わざ]や 一流[いちりゅう]の 演奏家[えんそうか]の 表現[ひょうげん]力[りょく]は、言語化[げんごか]して 他者[たしゃ]に 伝達[でんたつ]することが 極[きわ]めて 困難[こんなん]な「暗黙知[あんもくち]」に 属[ぞく]する。
この 身体[しんたい]に 深[ふか]く 根[ね]ざした 知[ち]の 体系[たいけい]は、試行[しこう] 錯誤[さくご]の 蓄積[ちくせき]を通じてのみ 獲得[かくとく]されるものであり、アルゴリズムによる 単純[たんじゅん]な 形式化[けいしきか]を 拒絶[きょぜつ]する。
デジタル 時代[じだい]において 情報[じょうほう]の 共有[きょうゆう]が 容易[ようい]になったからこそ、言語[げんご]化[か]し得[え]ない 身体知[しんたいち]の 希少[きしょう] 価値[かち]は むしろ 高[たか]まっているといえる。`,
    uzbekTranslation:
      "Usta hunarmandlarning mahorati yoki mohir sozandaning ifoda qudrati so'z bilan boshqalarga yetkazish mushkul bo'lgan 'yashirin bilim' (tacit knowledge) sohasiga kiradi. Tanaga singgan bu bilim tizimi tinimsiz amaliy urinishlar orqaligina shakllanadi va oddiy algoritmlar bilan ifodalashga bo'ysunmaydi. Axborot oqimi cheksiz bo'lgan raqamli zamonda aynan so'z bilan ifodalab bo'lmaydigan jismoniy mahoratning qadri yanada oshmoqda.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_3_1',
        questionText:
          '筆者[ひっしゃ]が 主張[しゅちょう]する「身体知[しんたいち]」の 特徴[とくちょう]は どれか。',
        options: [
          'コンピューターの アルゴリズムで 容易[ようい]に 再現[さいげん]できる',
          'マニュアルを 読[よ]めば 誰[だれ]でも 短期間[たんきかん]で 習得[しゅうとく]できる',
          '単純[たんじゅん]な 言語化[げんごか]を 拒[こば]み、実践的[じっせんてき]な 蓄積[ちくせき]によってのみ 体得[たいとく]される',
          'デジタル 社会[しゃかい]においては もはや 価値[かち]を 失[うしな]った',
        ],
        correctIndex: 2,
        explanation:
          "Muallif jismoniy bilim oddiy so'z bilan ifodalab bo'lmasligini va tinimsiz amaliyot bilan shakllanishini aniq ta'kidlaydi.",
      },
    ],
  },
  {
    id: 'n1_read_4',
    level: 'N1',
    title: '都市[とし]の 景観[けいかん]と 記憶[きおく]の 地層[ちそう]',
    passageType: 'medium',
    japaneseContent: `都市[とし]の 再開発[さいかいはつ]は、老朽化[ろうきゅうか]した 建造物[けんぞうぶつ]を 一掃[いっそう]し、機能的[きのうてき]で 耐震性[たいしんせい]に 優[すぐ]れた 近代的[きんだいてき] 空間[くうかん]を 生[う]み出[だ]す。
しかし、街並[まちな]みが 均質化[きんしつか]される 過程[かてい]で、その 土地[とち]に 堆積[たいせき]していた 歴史的[れきしてき] 記憶[きおく]や 固有[こゆう]の 人間的[にんげんてき] 営[いとな]みの 痕跡[こんせき]は 容赦[ようしゃ]なく 削[そ]ぎ落[お]とされる。
真[しん]に 豊[ゆた]かな 都市[とし]とは、新旧[しんきゅう]の 時間[じかん]が 重層的[じゅうそうてき]に 共存[きょうぞん]し、過去[かこ]の 記憶[きおく]が 息[いき]づいている 空間[くうかん]に他[ほか]ならない。`,
    uzbekTranslation:
      "Shaharlarni qayta qurish eski binolarni bartaraf etib, xavfsiz va zamonaviy infratuzilma yaratadi. Biroq shahar qiyofasi bir xillashuvi jarayonida ushbu zaminda asrlar davomida yig'ilgan tarixiy xotira va insoniy izlar shafqatsizlarcha yo'qotiladi. Haqiqiy boy shahar — bu o'tmish va yangi zamon bir-biri bilan qavatma-qavat uyg'un yashaydigan maskandir.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_4_1',
        questionText:
          '筆者[ひっしゃ]の 考[かんが]える「真[しん]に 豊[ゆた]かな 都市[とし]」とは どのようなものか。',
        options: [
          'すべてが 最新[さいしん]の 高層[こうそう]ビルだけで 構成[こうせい]された 都市',
          '新[あたら]しい 機能[きのう]と 歴史的[れきしてき]な 記憶[きおく]が 共存[きょうぞん]している 都市',
          '再開発[さいかいはつ]を 一切[いっさい] 行[おこな]わず、古[ふる]い 建物[たてもの]だけを 残[のこ]した 都市',
          '人間[にんげん]の 居住[きょじゅう]を 制限[せいげん]した 自然[しぜん] 公園[こうえん]都市',
        ],
        correctIndex: 1,
        explanation:
          'So‘nggi jumlada yangi va eski zamonning birgalikda mavjud bo‘lishi haqiqiy boy shahar ekanligi ifodalangan.',
      },
    ],
  },
  {
    id: 'n4_read_5',
    level: 'N4',
    title: '図書館[としょかん]の 利用[りよう] 案内[あんない]',
    passageType: 'information_retrieval',
    japaneseContent:
      '市営[しえい] 図書館[としょかん]からのお知[し]らせです。\n【開館[かいかん] 時間[じかん]】\n平日[へいじつ]：午前[ごぜん] 9時[くじ]〜午後[ごご] 7時[しちじ]\n土日[どにち]・祝日[しゅくじつ]：午前[ごぜん] 9時[くじ]〜午後[ごご] 5時[ごじ]\n【休館日[きゅうかんび]】\n毎週[まいしゅう] 月曜日[げつようび]（月曜日[げつようび]が 祝日[しゅくじつ]の 場合[ばあい]は、次[つぎ]の 火曜日[かようび]）\n【本[ほん]の 貸[か]し出[だ]し】\n1人[ひとり] 5冊[さつ]まで、2週間[にしゅうかん] 借[か]りることができます。\n※初[はじ]めて 利用[りよう]する 方[かた]は、住所[じゅうしょ]が わかる もの（保険証[ほけんしょう]や 免許証[めんきょしょう]など）を 受付[うけつけ]に 見[み]せてください。',
    uzbekTranslation:
      "Shahar kutubxonasidan e'lon:\n【Ish vaqti】\nIsh kunlari: 09:00 - 19:00\nDam olish va bayram kunlari: 09:00 - 17:00\n【Dam olish kuni】\nHar dushanba (Agar dushanba bayramga to'g'ri kelsa, keyingi seshanba kuni yopiladi)\n【Kitob ijarasi】\nBir kishi 5 tagacha kitobni 2 haftaga qarzga olishi mumkin.\n※ Birinchi marta foydalanuvchilar qabulxona (resepshn)ga manzilini tasdiqlovchi hujjat (sug'urta polisi yoki haydovchilik guvohnomasi)ni ko'rsatishlari shart.",
    recommendedTimeMinutes: 4,
    questions: [
      {
        id: 'q_n4_5_1',
        questionText:
          '月曜日[げつようび]が 祝日[しゅくじつ]の とき、図書館[としょかん]は いつ 休[やす]みになりますか。',
        options: [
          '月曜日[げつようび]',
          '火曜日[かようび]',
          '水曜日[すいようび]',
          '土曜日[どようび]',
        ],
        correctIndex: 1,
        explanation:
          "Matnda '月曜日が祝日の場合は、次の火曜日' (agar dushanba bayram bo'lsa, keyingi seshanba kuni dam olinadi) deb aniq yozilgan.",
      },
      {
        id: 'q_n4_5_2',
        questionText:
          '初[はじ]めて 本[ほん]を 借[か]りたい 人[ひと]は、何[なに]を しなければなりませんか。',
        options: [
          'お金[かね]を 払[はら]う',
          '本[ほん]を 5冊[さつ] 寄付[きふ]する',
          '住所[じゅうしょ]が わかる 証明書[しょうめいしょ]を 見[み]せる',
          '電話[でんわ]で 予約[よやく]する',
        ],
        correctIndex: 2,
        explanation:
          "E'lon oxirida yangi foydalanuvchi manzilini tasdiqlovchi hujjat ko'rsatishi zarurligi aytilgan.",
      },
    ],
  },
  {
    id: 'n4_read_6',
    level: 'N4',
    title: '留学生[りゅうがくせい]の アルバイト 経験[けいけん]',
    passageType: 'short',
    japaneseContent:
      '私[わたし]は 日本[にほん]に 来[き]て 3ヶ月[さんかげつ]後[ご]に、レストランで アルバイトを 始[はじ]めました。\n最初[さいしょ]は お客[きゃく]さんの 注文[ちゅうもん]が 聞[き]き取[と]れなくて、何回[なんかい]も 聞[き]き返[かえ]してしまいました。\n店長[てんちょう]や 先輩[せんぱい]が 優[やさ]しく 接客[せっきゃく]の 言葉[ことば]を 教[おし]えてくれたおかげで、今[いま]では 自信[じしん]を 持[も]って 働[はたら]けるようになりました。\nアルバイトを 通[とお]して、日本語[にほんご]の 会話[かいわ]が 前[まえ]より ずっと 上手[じょうず]になったと 感[かん]じています。',
    uzbekTranslation:
      "Men Yaponiyaga kelganimdan 3 oy o'tgach, restoranda yarim stavka (arubaito) ishlay boshladim. Avvaliga mijozlarning buyurtmasini tushuna olmay, ko'p marta qayta so'rashga majbur bo'ldim. Do'kon mudiri va tajribali hamkasblarim mijozlar bilan muloyim muomala so'zlarini o'rgatgani sababli, hozirda ishonch bilan ishlay oladigan bo'ldim. Ish orqali yapon tilidagi so'zlashuvim oldingidan ancha yaxshilanganini his qilyapman.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n4_6_1',
        questionText:
          '筆者[ひっしゃ]は アルバイトを 始[はじ]めた ばかりの とき、何[なに]に 困[こま]りましたか。',
        options: [
          '料理[りょうり]を 作[つく]ること',
          'お客[きゃく]さんの 注文[ちゅうもん]を 聞[き]き取[と]ること',
          '店長[てんちょう]と けんかしたこと',
          '給料[きゅうりょう]が 安[やす]かったこと',
        ],
        correctIndex: 1,
        explanation:
          'Matn boshida mijozlarning buyurtmasini tushuna olmagani (注文が聞き取れなくて) bayon qilingan.',
      },
    ],
  },
  {
    id: 'n4_read_7',
    level: 'N4',
    title: '健康[けんこう]の ための 散歩[さんぽ]',
    passageType: 'short',
    japaneseContent:
      '毎日[まいにち] 激[はげ]しい 運動[うんどう]を することは、忙[いそが]しい 人[ひと]にとって 簡単[かんたん]では ありません。\nしかし、1日[ついたち] 20分[にじゅっぷん] 程度[ていど]の 散歩[さんぽ]なら、無理[むり]なく 続[つづ]けることが できます。\n通勤[つうきん]の ときに 一[ひと]駅[えき] 手前[てまえ]で 降[お]りて 歩[ある]いたり、エレベーターを 使[つか]わずに 階段[かいだん]を 使[つか]ったりするだけでも、十分[じゅうぶん]な 運動[うんどう]になります。\n大切[たいせつ]なのは、毎日[まいにち] 少しずつ 習慣[しゅうかん]に することです。',
    uzbekTranslation:
      "Har kuni og'ir jismoniy mashqlar bilan shug'ullanish band insonlar uchun oson emas. Biroq kuniga taxminan 20 daqiqa piyoda sayr qilishni ortiqcha qiyinchiliksiz davom ettirish mumkin. Ishga borayotganda bir bekat oldin tushib piyoda yurish yoki liftdan foydalanmasdan zinapoyadan chiqishning o'zi ham yetarli jismoniy faollik hisoblanadi. Eng muhimi — har kuni asta-sekin odatga aylantirishdir.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n4_7_1',
        questionText: '筆者[ひっしゃ]が 最[مっと]も 勧[すす]めていることは 何[なに]ですか。',
        options: [
          '高価[こうか]な スポーツジムに 通[かよ]うこと',
          'エレベーターだけを 利用[りよう]すること',
          '無理[むり]のない 運動[うんどう]を 毎日[まいにち] 習慣[しゅうかん]に すること',
          '毎日[まいにち] 2時間[にじかん]以上[いじょう] 走[はし]ること',
        ],
        correctIndex: 2,
        explanation:
          "Muallif ortiqcha zo'riqishsiz kichik harakatlarni har kuni odatga aylantirishni tavsiya qiladi (習慣にすること).",
      },
    ],
  },
  {
    id: 'n4_read_8',
    level: 'N4',
    title: 'ごみの 分別[ぶんべつ] ルール',
    passageType: 'information_retrieval',
    japaneseContent:
      '【アパートの 住人[じゅうにん]の 皆[みな]様[さま]へ】\nごみは 指定[してい]された 曜日[ようび]の 朝[あさ] 8時[はちじ]までに、1階[いっかい]の ごみ置[お]き場[ば]へ 出[だ]してください。\n● 燃[も]える ごみ（生[なま]ごみ・紙[かみ]くず）：火曜日[かようび]・金曜日[きんようび]\n● 燃[も]えない ごみ（ガラス・金属[きんぞく]）：第2[だいに]・第4[だいよん] 水曜日[すいようび]\n● 資源[しげん] ごみ（ペットボトル・缶[かん]）：木曜日[もくようび]\n※ ペットボトルは キャップと ラベルを はがして、中[なか]を 洗[あら]ってから 出[だ]してください。',
    uzbekTranslation:
      "【Kvartira yashovchilari diqqatiga】\nChiqindilarni belgilangan kun ertalab soat 8:00 gacha 1-qavatdagi maxsus chiqindi joyiga olib chiqing.\n● Yonadigan chiqindi (oziq-ovqat qoldiqlari, qog'oz): Seshanba va Juma\n● Yonmaydigan chiqindi (shisha, metall): Har oyning 2- va 4-chorshanbasi\n● Qayta ishlanadigan chiqindi (plastik idish, konserva qutisi): Payshanba\n※ Plastik idishlarning qopqog'i va yorlig'ini yechib, ichini yuvib keyin tashlang.",
    recommendedTimeMinutes: 4,
    questions: [
      {
        id: 'q_n4_8_1',
        questionText: 'ペットボトルを 捨[す]てるとき、どうしなければなりませんか。',
        options: [
          '火曜日[かようび]に そのまま 出[だ]す',
          'キャップと ラベルを はがし、洗[あら]って 木曜日[もくようび]に 出[だ]す',
          '水曜日[すいようび]の 夜[よる]に 出[だ]す',
          '袋[ふくろ]に 入[い]れずに 部屋[へや]に 置[お]いておく',
        ],
        correctIndex: 1,
        explanation:
          "Qoidada plastik idishlar (shigen gomi) payshanba kuni qopqog'i olinib, yuvilgan holda tashlanishi belgilangan.",
      },
    ],
  },
  {
    id: 'n4_read_9',
    level: 'N4',
    title: '日本[にほん]の お盆[ぼん]と 帰省[きせい]',
    passageType: 'medium',
    japaneseContent:
      '日本[にほん]には 8月[はちがつ]中旬[ちゅうじゅん]に「お盆[ぼん]」という 伝統的[でんとうてき]な 行事[ぎょうじ]があります。\nこの 時期[じき]には、先祖[せんぞ]の 魂[たましい]が 家[いえ]に 帰[かえ]ってくると 信[しん]じられています。\n多[おお]くの 人[ひと]が 田舎[いなか]の 実家[じっか]へ 帰省[きせい]し、家族[かぞく]そろって お墓参[はかまい]りを します。\nそのため、新幹線[しんかんせん]や 高速[こうそく]道路[どうろ]は 毎年[まいとし]たいへん 混雑[こんざつ]します。\n遠[とお]く 離[はな]れて 暮[く]らす 親戚[しんせき]と 会[あ]える 貴重[きちょう]な 機会[きかい]でもあります。',
    uzbekTranslation:
      "Yaponiyada avgust oyi o'rtalarida 'O-bon' deb nomlangan an'anaviy marosim mavjud. Bu davrda o'tgan ajdodlarning ruhi xonadonga qaytadi deb ishoniladi. Ko'plab odamlar qishloqdagi ota uylariga qaytib (kisei), oila davrasida qabristonni ziyorat qilishadi. Shu sababli shinkansen poyezdlari va tezyurar magistrallar har yili juda tirband bo'ladi. Bu uzoqda yashaydigan qarindoshlar bilan diydor ko'rishishning g'oyat qadrli imkoniyatidir.",
    recommendedTimeMinutes: 4,
    questions: [
      {
        id: 'q_n4_9_1',
        questionText:
          'お盆[ぼん]の 時期[じき]に 交通機関[こうつうきかん]が 混雑[こんざつ]するのは なぜですか。',
        options: [
          '海外[かいがい]旅行[りょこう]に 行[い]く 外国人[がいこくじん]が 増[ふ]えるから',
          '多[おお]くの 人[ひと]が 実家[じっか]へ 帰省[きせい]するから',
          '新幹線[しんかんせん]の 料金[りょうきん]が 無料[むりょう]になるから',
          'すべてのお店[みせ]が 休[やす]みになるから',
        ],
        correctIndex: 1,
        explanation:
          "Matnda odamlar ota uyiga qaytishi (実家へ帰省し) sababli yo'llar va poyezdlar juda tirband bo'lishi aniq aytilgan.",
      },
    ],
  },
  {
    id: 'n4_read_10',
    level: 'N4',
    title: '日本[にほん]の 自動販売機[じどうはんばいき]',
    passageType: 'short',
    japaneseContent:
      '日本[にほん]の 町[まち]を 歩[ある]くと、至[いた]る所[ところ]に 自動販売機[じどうはんばいき]が あります。\n冷[つめ]たい 飲[の]み物[もの]だけでなく、冬[ふゆ]には 温[あたた]かい お茶[ちゃ]や コーヒーも 同[おな]じ 機械[きかい]で 買[か]うことができます。\nお金[かね]だけでなく、交通系[こうつうけい] ICカードや スマートフォンで 支払[しはら]えるものが ほとんどです。\n治安[ちあん]が 良[よ]く、管理[かんり]が 行[ゆ]き届[とど]いている 日本[にほん]ならではの 便利[べんり]な 文化[ぶんか]です。',
    uzbekTranslation:
      "Yaponiya ko'chalarida yursangiz, deyarli har qadamda avtomat savdo qutilari (jidohanbaiki)ni uchratasiz. Nafaqat sovuq ichimliklar, balki qish faslida issiq choy va kofelarni ham aynan bitta apparatdan xarid qilish mumkin. Naqd puldan tashqari, transport IC kartasi yoki smartfon orqali to'lov qilish imkoniyati keng joriy etilgan. Tinchlik-osoyishtalik va tartibli nazorat tufayli bu Yaponiyaga xos qulay madaniyatdir.",
    recommendedTimeMinutes: 3,
    questions: [
      {
        id: 'q_n4_10_1',
        questionText:
          '日本[にほん]の 自動販売機[じどうはんばいき]の 特徴[とくちょう]として 正[ただ]しいものは どれですか。',
        options: [
          '冬[ふゆ]でも 冷[つめ]たいものしか 買[か]えない',
          '現金[げんきん]しか 使[つか]えない',
          '同[おな]じ 機械[きかい]で 温[あたた]かい 飲[の]み物[もの]と 冷[つめ]たい 飲[の]み物[もの]が 買[か]える',
          '昼間[ひるま]しか 動[うご]いていない',
        ],
        correctIndex: 2,
        explanation:
          'Matnda ayni bitta apparatda sovuq hamda issiq ichimliklar birga sotilishi qayd etilgan.',
      },
    ],
  },
  {
    id: 'n3_read_5',
    level: 'N3',
    title: '食品[しょくひん]ロスと 「賞味期限[しょうみきげん]」の 正[ただ]しい 知識[ちしき]',
    passageType: 'medium',
    japaneseContent:
      '近年[きんねん]、食[た]べられるのに 捨[す]てられてしまう「食品[しょくひん]ロス」が 社会的[しゃかいてき]な 問題[もんだい]となっています。\n原因[げんいん]の 一[ひと]つに、「消費期限[しょうひきげん]」と「賞味期限[しょうみきげん]」の 混同[こんどう]が 挙[あ]げられます。\n消費期限[しょうひきげん]は「安全[あんぜん]に 食[た]べられる 期限[きげん]」であり、過[す]ぎたら 食[た]べない 方[ほう]が よい日付[ひづけ]です。\n一方[いっぽう]、賞味期限[しょうみきげん]は「おいしく 食[た]べられる 目安[めやす]の 期限[きげん]」に すぎず、日付[ひづけ]を 少[すこ]し 過[す]ぎても すぐに 食[た]べられなくなる わけでは ありません。\nこの 二[ふた]つの 違[ちが]いを 正[ただ]しく 理解[りかい]することが、家庭[かてい]での 無駄[むだ]な 廃棄[はいき]を 減[へ]らす 第一歩[だいいっぽ]となります。',
    uzbekTranslation:
      "So'nggi yillarda iste'molga yaroqli bo'la turib tashlab yuboriladigan oziq-ovqat isrofi (shokuhin rosu) jiddiy ijtimoiy muammoga aylanmoqda. Bunga asosiy sabablardan biri 'shouhi kigen' (iste'mol muddati) va 'shoumi kigen' (ta'm sifati kafolatlangan muddat) tushunchalarining chalkashtirilishidir. Shouhi kigen — xavfsiz iste'mol qilish mumkin bo'lgan oxirgi muddat bo'lib, o'tgach yemaslik ma'qul. Aksincha, shoumi kigen — mahsulotning eng xushxo'r bo'lib turish davri bo'lib, ushbu sana ozgina o'tsa ham yaroqsiz bo'lib qolmaydi. Ushbu ikki muddat farqini to'g'ri anglash oilaviy isrofgarchilikni kamaytirishning ilk qadamidir.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_5_1',
        questionText:
          '「賞味期限[しょうみきげん]」についての 説明[せつめい]として 最[もっと]も 適切[てきせつ]なものは どれか。',
        options: [
          '日付[ひづけ]を 1日[いちにち]でも 過[す]ぎたら 必[かなら]ず 捨[す]てなければならない',
          'おいしく 食[た]べられる 目安[めやす]であり、過[す]ぎても すぐ 腐[くさ]るわけではない',
          '薬[くすり]にしか 使[つか]われない 期限[きげん]である',
          '消費期限[しょうひきげん]と 全[まった]く 同[おな]じ 意味[いみ]である',
        ],
        correctIndex: 1,
        explanation:
          "Shoumi kigen — mahsulotning lazzatli turish mezoni bo'lib, sana o'tishi bilan zudlik bilan aynib qolmasligi matnda uqtirilgan.",
      },
    ],
  },
  {
    id: 'n3_read_6',
    level: 'N3',
    title: '「手書[てが]き」が 記憶[きおく]に 与[あた]える 効果[こうか]',
    passageType: 'medium',
    japaneseContent:
      'パソコンや スマートフォンの 普及[ふきゅう]により、文字[もじ]を「手[て]で 書[か]く」機会[きかい]が 激減[げきげん]しました。\nしかし、最新[さいしん]の 脳科学[のうかがく]の 研究[けんきゅう]によると、キーボードで 入力[にゅうりょく]するよりも、手[て]で ノートに 書[か]く 方[ほう]が、記憶[きおく]の 定着率[ていちゃくりつ]が 高[たか]いことが 明[あき]らかになっています。\n手[て]を 動[うご]かして 漢字[かんじ]や 図[ず]を 書[か]く 行為[こうい]は、脳[のう]の 複数[ふくすう]の 領域[りょういき]を 同時[どうじ]に 刺激[しげき]するためです。\n急[いそ]いでいる 時[とき]は タイピングが 便利[べんり]ですが、深[ふか]く 理解[りかい]して 学[まな]びたい 時[とき]には、敢[あ]えて 手書[てが]きを 選[えら]ぶ 価値[かち]が あります。',
    uzbekTranslation:
      "Kompyuter va smartfonlarning ommalashuvi natijasida qo'lda yozish imkoniyati keskin kamaydi. Biroq zamonaviy neyrobiologik tadqiqotlarga ko'ra, klaviaturada yozgandan ko'ra daftarga qo'lda yozish xotirada uzoq va mustahkam saqlanishini ko'rsatmoqda. Qo'lni harakatlantirib iyeroglif va sxemalarni chizish miyaning bir necha qismlarini bir vaqtda faollashtiradi. Shoshilinch vaziyatlarda klaviatura qulay bo'lsa-da, chuqur tushunib o'rganishda qo'lda yozishning o'rni beqiyosdir.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_6_1',
        questionText:
          '手[て]で 文字[もじ]を 書[か]く 方[ほう]が 記憶[きおく]に 残[のこ]りやすい 理由[りゆう]は 何[なに]か。',
        options: [
          '文字[もじ]が きれいに 見[み]えるから',
          '脳[のう]の 複数[ふくすう]の 領域[りょういき]が 同時[どうじ]に 刺激[しげき]されるから',
          'キーボードを 叩[たた]くより 時間[じかん]が かからないから',
          '指[ゆび]の 筋力[きんりょく]が 鍛[きた]えられるから',
        ],
        correctIndex: 1,
        explanation:
          "Qo'l harakati orqali miyaning bir nechta sohalari bir vaqtning o'zida rag'batlantirilishi (複数の領域を刺激) sabab qilib ko'rsatilgan.",
      },
    ],
  },
  {
    id: 'n3_read_7',
    level: 'N3',
    title: 'シェアハウス生活[せいかつ]の メリットと 留意点[りゅういてん]',
    passageType: 'medium',
    japaneseContent:
      '若者[わかもの]の 間[あいだ]で、家賃[やちん]を 抑[おさ]えながら 他人[たにん]と 暮[く]らす「シェアハウス」が 人気[にんき]を 集[あつ]めています。\n個室[こしつ]で プライベートを 保[たも]ちつつ、キッチンや リビングを 共有[きょうゆう]することで、孤独感[こどくかん]を 和[やわ]らげ、多様[たよう]な 価値観[かちかん]に 触[ふ]れることができます。\nしかし、掃除[そうじ]の 分担[ぶんたん]や 深夜[しんや]の 騒音[そうおん]などを 巡[めぐ]って トラブルが 生[しょう]じることも 少[すく]なくありません。\n円満[えんまん]な 共同生活[きょうどうせいかつ]を 送[おく]るためには、最低限[さいていげん]の ルールを 遵守[じゅんしゅ]し、互[たが]いに 思[おも]いやりを 持[も]って コミュニケーションを 取[と]ることが 欠[か]かせません。',
    uzbekTranslation:
      "Yoshlar orasida ijara haqini tejagan holda boshqalar bilan birga yashaydigan 'sher-haus' (umumiy uy) mashhurlikka erishmoqda. Alohida xonada shaxsiy hududni saqlagan holda oshxona va mehmonxonani birgalikda ishlatish yolg'izlik hissini kamaytiradi va turli xil dunyoqarashlar bilan tanishish imkonini beradi. Biroq tozalash navbati yoki tunda shovqin qilish kabi masalalarda kelishmovchiliklar ham kam emas. Totuv yashash uchun qoidalarga rioya qilish va samimiy muloqot o'rnatish juda muhimdir.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_7_1',
        questionText:
          'シェアハウスで 良好[りょうこう]な 関係[かんけい]を 維持[いじ]するために 最[もっと]も 重要[じゅうよう]なことは 何[なに]か。',
        options: [
          '共有[きょうゆう]スペースを 一切[いっさい] 使[つか]わないこと',
          'ルールを 守[まも]り、思[おも]いやりを 持[も]って 対話[たいわ]すること',
          '家賃[やちん]を 一人[ひとり]だけで 全額[ぜんがく] 支払[しはら]うこと',
          '他人[たにん]と 一言[ひとこと]も 会話[かいわ]しないこと',
        ],
        correctIndex: 1,
        explanation:
          "Qoidalarga rioya qilish va bir-biriga e'tiborli munosabatda bo'lish (ルールを遵守し、互いに思いやりを持つ) asosiy shartdir.",
      },
    ],
  },
  {
    id: 'n3_read_8',
    level: 'N3',
    title: '日本[にほん]の 宅配便[たくはいびん]と 再配達[さいはいたつ]問題[もんだい]',
    passageType: 'medium',
    japaneseContent:
      'インターネット通販[つうはん]の 急速[きゅうそく]な 拡大[かくだい]に伴[ともな]い、日本[にほん]の 宅配[たくはい]個数[こすう]は 過去[かこ]最高[さいこう]を 記録[きろく]し続[つづ]けています。\nその 一方[いっぽう]で、配達時[はいたつじ]に 受取人[うけとりにん]が 不在[ふざい]であるための「再配達[さいはいたつ]」が、ドライバーの 長時間[ちょうじかん]労働[ろうどう]や CO2排出[はいしゅつ]の 増加[ぞうか]を 引[ひ]き起[お]こしています。\nこの 課題[かだい]を 克服[こくふく]するため、宅配[たくはい]ボックスの 設置[せっち]や、コンビニ・駅[えき]の ロッカーでの 受[う]け取[と]りなど、受取方法[うけとりほうほう]の 多様化[たようか]が 推進[すいしん]されています。',
    uzbekTranslation:
      "Internet savdosining shiddatli kengayishi natijasida Yaponiyada yetkazib berilayotgan posilkalar soni rekord darajaga yetmoqda. Boshqa tomondan, buyurtmachi uyda bo'lmagani sababli qayta yetkazish (sai-haitatsu) haydovchilarning ortiqcha ishlashi va atrof-muhitga zarar yetishiga olib kelmoqda. Bu muammoni hal etish uchun posilka qutilari (takuhaibox) o'rnatish, qulay do'konlar (kombini) yoki metro bekatlaridagi maxsus shkaflardan qabul qilib olish kabi usullar faol qo'llab-quvvatlanmoqda.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_8_1',
        questionText:
          '再配達[さいはいたつ]の 増加[ぞうか]が もたらす 悪影響[あくえいきょう]として 挙[あ]げられているものは どれか。',
        options: [
          '商品[しょうひん]の 価格[かかく]が 半額[はんがく]になること',
          'ドライバーの 長時間[ちょうじかん]労働[ろうどう]や 環境[かんきょう]負荷[ふか]の 増大[ぞうだい]',
          'インターネット通販[つうはん]の 利用者[りようしゃ]が 激減[げきげん]すること',
          '新幹線[しんかんせん]の 運行[うんこう]が 遅[おく]れること',
        ],
        correctIndex: 1,
        explanation:
          'Haydovchilarning uzoq ishlashi va CO2 chiqindilarining ortishi (長時間労働やCO2排出の増加) qayd etilgan.',
      },
    ],
  },
  {
    id: 'n3_read_9',
    level: 'N3',
    title: '気候[きこう]変動[へんどう]と 日本[にほん]の 農業[のうぎょう]',
    passageType: 'medium',
    japaneseContent:
      '地球[ちきゅう]温暖化[おんだんか]による 気温[きおん]の 上昇[じょうしょう]は、日本[にほん]の 伝統的[でんとうてき]な 農作物[のうさくぶつ]にも 大[おお]きな 影[かげ]を 落[お]としています。\n例[たと]えば、高品質[こうひんしつ]な 米[こめ]や リンゴの 産地[さんち]が、より 涼[すず]しい 北[きた]の 地域[ちいき]へと 移動[いどう]しつつあります。\nまた、これまで 南国[なんごく]でしか 栽培[さいばい]できなかった マンゴーや パッションフルーツが、本州[ほんしゅう]でも 収穫[しゅうかく]できるようになりました。\n農家[のうか]は、暑[あつ]さに 強[つよ]い 新[あたら]しい 品種[ひんしゅ]の 開発[かいはつ]など、環境[かんきょう]の 変化[へんか]に 対応[たいおう]した 農業[のうぎょう]への 転換[てんかん]を 迫[せま]られています。',
    uzbekTranslation:
      "Global isish oqibatida haroratning ko'tarilishi Yaponiyaning an'anaviy qishloq xo'jaligiga ham jiddiy ta'sir ko'rsatmoqda. Masalan, yuqori sifatli guruch va olma yetishtiruvchi asosiy hududlar ancha salqinroq bo'lgan shimoliy mintaqalarga ko'chib bormoqda. Shuningdek, ilgari faqat janubiy orollarda o'sadigan mango kabi subtropik mevalar markaziy Xonsyu orolida ham pishib yetilmoqda. Fermerlar jazirama issiqqa chidamli yangi navlarni yaratish kabi iqlimga moslashish choralarini ko'rishmoqda.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_9_1',
        questionText: '本文[ほんぶん]の 内容[ないよう]と 一致[いっち]するものは どれか。',
        options: [
          '日本[にほん]全土[ぜんど]で お米[こめ]が 全[まった]く 取[と]れなくなった',
          '温暖化[おんだんか]の 影響[えいきょう]で、農作物[のうさくぶつ]の 適地[てきち]が 北[きた]へ 移動[いどう]している',
          'すべての 果物[くだもの]の 栽培[さいばい]が 中止[ちゅうし]された',
          '農家[のうか]は 何[なに]も 対策[たいさく]を 取[と]っていない',
        ],
        correctIndex: 1,
        explanation:
          "Iqlim isishi tufayli qishloq xo'jaligi hosil yetishtirish hududlari shimolga surilayotgani tasdiqlangan.",
      },
    ],
  },
  {
    id: 'n3_read_10',
    level: 'N3',
    title: 'コミュニケーションにおける「傾聴[けいちょう]」の 意義[いぎ]',
    passageType: 'medium',
    japaneseContent:
      '人間関係[にんげんかんけい]を 円滑[えんかつ]にする 鍵[かぎ]は、「上手に 話[はな]すこと」よりも「相手[あいて]の 話[はなし]を 深[ふか]く 聴[き]くこと」にあると 言[い]われています。\nこれを「傾聴[けいちょう]」と 呼[よ]び、単[たん]に 耳[みみ]で 音[おと]を 受[う]け止[と]めるだけでなく、相手[あいて]の 感情[かんじょう]や 背景[はいけい]に 共感[きょうかん]しながら 聴[き]く 姿勢[しせい]を 指[さ]します。\n自[みずか]らの 意見[いけん]を 挟[はさ]まずに 最後[さいご]まで 聴[き]いてもらえたと 実感[じっかん]した 相手[あいて]は、深[ふか]い 信頼感[しんらいかん]を 抱[いだ]くようになります。\n傾聴[けいちょう]こそが、真[しん]の 相互[そうご]理解[りかい]を 築[きず]く 土台[どだい]なのです。',
    uzbekTranslation:
      "Insoniy munosabatlarni mustahkamlash garovi chiroyli gapirishdan ko'ra boshqalarni chin yurakdan tinglashda ekanligi aytiladi. Bu yapon tilida 'keichou' (diqqat bilan tinglash) deb atalib, shunchaki so'zlarni eshitish emas, balki suhbatdoshning his-tuyg'ulari va vaziyatini his qilgan holda quloq solishdir. O'z fikrini aralashtirmay oxirigacha eshitilganini ko'rgan inson kuchli ishonch hissini tuyadi. Aynan shunday tinglash o'zaro ishonchning mustahkam poydevoridir.",
    recommendedTimeMinutes: 5,
    questions: [
      {
        id: 'q_n3_10_1',
        questionText: '「傾聴[けいちょう]」とは どのような 聴[き]き方[かた]のことか。',
        options: [
          '自分[じぶん]の 言[い]いたいことを 次々[つぎつぎ]に 主張[しゅちょう]しながら 聴[き]くこと',
          '相手[あいて]の 感情[かんじょう]に 共感[きょうかん]し、最後[さいご]まで 熱心[ねっしん]に 聴[き]くこと',
          '音楽[おんがく]を 聴[き]きながら 適当[てきとう]に 相槌[あいづち]を 打[う]つこと',
          '話[はなし]の 途中[とちゅう]で 相手[あいて]の 誤[あやま]りを 正[ただ]すこと',
        ],
        correctIndex: 1,
        explanation:
          'Keichou — suhbatdoshning hissiyotlarini tushunib, xalaqit bermasdan oxirigacha quloq solishdir.',
      },
    ],
  },
  {
    id: 'n2_read_5',
    level: 'N2',
    title: '人工知能[じんこうちのう]（AI）の 進化[しんか]と 労働[ろうどう]の 変容[へんよう]',
    passageType: 'medium',
    japaneseContent:
      '生成[せいせい]AIの 飛躍的[ひやくてき]な 発展[はってん]は、単純[たんじゅん]作業[さぎょう]のみならず、文章[ぶんしょう]執筆[しっぴつ]や プログラミングといった 知的[ちてき]労働[ろうどう]の 領域[りょういき]にまで 劇的[げきてき]な 変革[へんかく]を もたらしつつある。\n従来の 知識[ちしき]偏重型[へんじゅうがた]の 専門性[せんもんせい]は、瞬時[しゅんじ]に 膨大[ぼうだい]な 情報[じょうほう]を 処理[しょり]する 機械[きかい]によって 代替[だいたい]されかねない。\nこれからの 時代[じだい]に 人間[にんげん]に 寄与[きよ]される 本質的[ほんしつてき]な 価値[かち]とは、既知[きち]の 枠組み[わくぐみ]を 超[こ]えて 新[あたら]たな 課題[かだい]を 発見[はっけん]する 構想力[こうそうりょく]と、他者[たしゃ]の 心情[しんじょう]を 汲[く]み取[と]る 共感[きょうかん]能力[のうりょく]に他[ほか]ならない。\nAIを 脅威[きょうい]として 排除[はいじょ]するのではなく、自律的[じりつてき]な 協働[きょうどう]パートナーとして 活用[かつよう]する 知恵[ちえ]が 希求[ききゅう]されている。',
    uzbekTranslation:
      "Generativ sun'iy intellektning shiddatli rivojlanishi nafaqat oddiy jismoniy mehnat, balki matn yozish va dasturlash kabi aqliy faoliyat sohalarida ham tub o'zgarishlarni keltirib chiqarmoqda. Ilgari qadrlangan shunchaki bilimlarni yodlashga asoslangan professionallik ulkan ma'lumotlarni bir zumda tahlil qiluvchi mashinalar tomonidan siqib chiqarilishi mumkin. Kelajakda insonning asl qiymati mavjud qoliplardan chiqib yangi muammolarni topish va boshqalarning dardini his qiluvchi empatiya qobiliyatidadir. AI dan qo'rqib voz kechish emas, uni hamkor sifatida unumli ishlatish aql-idroki talab etiladi.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_5_1',
        questionText:
          'AI時代[じだい]において 人間[にんげん]に 特[とく]に 求[もと]められる 力[ちから]として 筆者[ひっしゃ]が 述[の]べているものは どれか。',
        options: [
          '膨大[ぼうだい]な 辞書[じしょ]や 専門[せんもん]用語[ようご]を 暗記[あんき]する 記憶力[きおくりょく]',
          '課題[かだい]を 自[みずか]ら 見出[みいだ]す 構想力[こうそうりょく]と、他者[たしゃ]への 共感[きょうかん]能力[のうりょく]',
          'あらゆる 機械[きかい]の 利用[りよう]を 拒絶[きょぜつ]する 頑固[がんこ]さ',
          'タイピングの 入力[にゅうりょく]スピード',
        ],
        correctIndex: 1,
        explanation:
          "Matnda insoniy fazilat sifatida yangi muammoni topish qobiliyati (構想力) va empatiya (共感能力) ko'rsatilgan.",
      },
    ],
  },
  {
    id: 'n2_read_6',
    level: 'N2',
    title: '「曖昧[あいまい]さ」を 尊[とうと]ぶ 日本[にほん]の 言語[げんご]文化[ぶんか]',
    passageType: 'medium',
    japaneseContent:
      '西洋[せいよう]の コミュニケーションでは、論理[ろんり]の 明確性[めいかくせい]や「Yes / No」の 峻別[しゅんべつ]が 最[もっと]も 重視[じゅうし]される。\nそれに対[たい]し、日本語[にほんご]の 表現[ひょうげん]には「〜かもしれません」「〜と思[おも]われます」といった 婉曲[えんきょく]な 言[い]い回[まわ]しが 頻繁[ひんぱん]に 用[もち]いられる。\nこれは 意思[いし]の 欠如[けつじょ]ではなく、自[みずか]らの 意見[いけん]を 一方的[いっぽうてき]に 押[お]し付[つ]けず、相手[あいて]に 判断[はんだん]の 余白[よはく]を 残[のこ]すという 配慮[はいりょ]の 産物[さんぶつ]である。\n言葉[ことば]の 背後[はいご]にある 文脈[ぶんみゃく]や 沈黙[ちんもく]を 読[よ]み取[と]る「察[さっ]し」の 文化[ぶんか]は、共同体[きょうどうたい]の 調和[ちょうわ]を 保[たも]つ 知恵[ちえ]として 磨[みが]かれてきたのである。',
    uzbekTranslation:
      "G'arb muloqot madaniyatida fikrning ochiqligi va 'Ha/Yo'q' deb aniq ajratish ustuvor sanaladi. Bunga qarama-qarshi o'laroq, yapon tilida kinoyali va muloyim ifodalar tez-tez qo'llaniladi. Bu shaxsiy fikr yo'qligini emas, balki o'z nuqtai nazarini zo'rlab tiqishtirmasdan suhbatdoshga o'ylab ko'rish imkonini qoldirish odobidir. Gap ortidagi ma'no va jimlikni uqib oladigan 'sasshi' (his qilish) madaniyati jamoaviy totuvlikni asrash vositasi sifatida shakllangan.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_6_1',
        questionText:
          '日本語[にほんご]に 婉曲[えんきょく]な 表現[ひょうげん]が 多[おお]い 理由[りゆう]として 筆者[ひっしゃ]が 主張[しゅちょう]しているのは どれか。',
        options: [
          '自分[じぶん]の 意見[いけん]を 持[も]っていないから',
          '相手[あいて]に 配慮[はいりょ]し、調和[ちょうわ]を 保[たも]つための 知恵[ちえ]であるから',
          '単語[たんご]の 数[かず]が 他[ほか]の 言語[げんご]より 少[すく]ないから',
          '急[いそ]いで 返事[へんじ]を するのが 嫌[きら]いだから',
        ],
        correctIndex: 1,
        explanation:
          'Suhbatdoshga hurmat va jamiyatdagi totuvlikni saqlash vositasi (調和を保つ知恵) ekanligi uqtiriladi.',
      },
    ],
  },
  {
    id: 'n2_read_7',
    level: 'N2',
    title: 'サステナビリティと 企業[きぎょう]の 社会的[しゃかいてき] 責任[せきにん]（CSR）',
    passageType: 'medium',
    japaneseContent:
      'かつて 企業[きぎょう]の 目的[もくてき]は、利潤[りじゅん]の 最大化[さいだいか]こそが 唯一[ゆいいつ]の 使命[しめい]であると 捉[とら]えられていた。\nしかし、地球[ちきゅう]規模[きぼ]の 環境[かんきょう]破壊[はかい]や 格差[かくさ]の 拡大[かくだい]が 深刻化[しんこくか]する 現代[げんだい]において、短期的[たんきてき]な 利益[りえき]のみを 追求[ついきゅう]する 組織[そしき]は、社会[しゃかい]からの 信頼[しんらい]を 失[うしな]いつつある。\n環境[かんきょう]保護[ほご]や 地域[ちいき]貢献[こうけん]、人権[じんけん]の 尊重[そんちょう]といった ESG（環境[かんきょう]・社会[しゃかい]・ガバナンス）課題[かだい]への 積極的[せっきょくてき]な 取[と]り組[く]みこそが、中長期的[ちゅうちょうきてき]な 企業[きぎょう]価値[かち]の 向上[こうじょう]に 直結[ちょっけつ]する。\n持続可能[じぞくかのう]な 社会[しゃかい]の 構築[こうちく]に 寄与[きよ]しない 企業[きぎょう]は、市場[しじょう]から 淘汰[とうた]される 運命[うんめい]にある。',
    uzbekTranslation:
      "Ilgari kompaniyalarning birdan-bir maqsadi foydani maksimal darajaga ko'tarish deb qaralar edi. Biroq ekologik inqiroz va ijtimoiy tengsizlik kuchaygan hozirgi davrda faqat qisqa muddatli manfaat ortidan quvgan tashkilotlar jamiyat ishonchini yo'qotmoqda. Tabiatni muhofaza qilish, inson huquqlarini hurmat qilish kabi ESG masalalariga hissa qo'shish kompaniyaning uzoq muddatli qadr-qimmatini belgilaydi. Barqaror jamiyat qurishga xizmat qilmagan biznes bozor raqobatidan chiqib ketishga mahkumdir.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_7_1',
        questionText:
          '現代[げんだい]の 企業[きぎょう]に 最[もっと]も 求[もと]められている 姿勢[しせい]は 何[なに]か。',
        options: [
          'どのような 手段[しゅだん]を 使[つか]っても 今期[こんき]の 利益[りえき]を 倍増[ばいぞう]させること',
          '環境[かんきょう]や 社会[しゃかい]課題[かだい]の 解決[かいけつ]に 貢献[こうけん]し、持続可能性[じぞくかのうせい]を 重視[じゅうし]すること',
          'すべての 従業員[じゅうぎょういん]を 解雇[かいこ]して コストを 削減[さくげん]すること',
          '海外[かいがい]の 競合[きょうごう]他社[たしゃ]を 買収[ばいしゅう]することだけに 専念[せんねん]すること',
        ],
        correctIndex: 1,
        explanation:
          "Ekologik va ijtimoiy masalalarni hal qilish orqali barqaror rivojlanishni ta'minlash (持続可能性を重視) talab etiladi.",
      },
    ],
  },
  {
    id: 'n2_read_8',
    level: 'N2',
    title: '睡眠[すいみん]の 質[しつ]と 心身[しんしん]の パフォーマンス',
    passageType: 'medium',
    japaneseContent:
      '「睡眠[すいみん]時間[じかん]を 削[けず]って 努力[どりょく]する」という 根性論[こんじょうろん]は、現代[げんだい]の 医学的[いがくてき] 知見[ちけん]によって 完全[かんぜん]に 否定[ひてい]されている。\n慢性的な 睡眠[すいみん]不足[ぶそく]（睡眠[すいみん]負債[ふさい]）は、注意力[ちゅういりょく]や 免疫力[めんえきりょく]を 著[いちじる]しく 低下[ていか]させ、鬱病[うつびょう]や 生活[せいかつ]習慣病[しゅうかんびょう]の リスクを 激増[げきぞう]させる。\n特[とく]に、就寝前[しゅうしんまえ]の スマートフォンの ブルーライトは、睡眠[すいみん]ホルモンである メラトニンの 分泌[ぶんぴつ]を 抑制[よくせい]してしまう。\n良質[りょうしつ]な 睡眠[すいみん]を 確保[かくほ]することは、単[たん]なる 休養[きゅうよう]ではなく、日中[にっちゅう]の 創造性[そうぞうせい]を 最大化[さいだいか]するための 攻[せ]めの 戦略[せんりゃく]である。',
    uzbekTranslation:
      "Uyqudan vaqt ajratib mehnat qilish haqidagi eskicha qarashlar zamonaviy tibbiyot tomonidan mutlaqo rad etilmoqda. Surunkali uyqusizlik diqqatni jamlash va immunitetni keskin tushirib yuboradi, depressiya va qon bosimi xavfini oshiradi. Ayniqsa yotishdan oldin smartfon ekranining nurlanishi uyqu gormoni melatonin ajralishini to'xtatib qo'yadi. Yetarlicha sifatli uxlash bu vaqtni behuda o'tkazish emas, balki kunduzgi ijodkorlikni eng yuqori darajaga chiqarishning oqilona strategiyasidir.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_8_1',
        questionText:
          '良質[りょうしつ]な 睡眠[すいみん]をとるために 控[ひか]えるべきこととして 触[ふ]れられているのは どれか。',
        options: [
          'ぬるめの お湯[ゆ]に 浸[つ]かること',
          '就寝前[しゅうしんまえ]に スマートフォンなどの 画面[がめん]を 見[み]ること',
          '静[しず]かな 音楽[おんがく]を 聴[き]くこと',
          '部屋[へや]を 暗[くら]くして 寝[ね]ること',
        ],
        correctIndex: 1,
        explanation:
          "Yotish oldidan smartfonning ko'k nuri melatonin ajralishini to'xtatishi sababli undan saqlanish aytilgan.",
      },
    ],
  },
  {
    id: 'n2_read_9',
    level: 'N2',
    title: '都市[とし]における「サードプレイス」の 必要性[ひつようせい]',
    passageType: 'medium',
    japaneseContent:
      'アメリカの 社会学者[しゃかいがくしゃ] レイ・オルデンバーグは、自宅[じたく]（第1[だいいち]の場[ば]）でも 職場[しょくば]・学校[がっこう]（第2[だいに]の場[ば]）でもない、心[こころ]から くつろげる 第3[だいさん]の 居場所[いばしょ]を「サードプレイス」と 定義[ていぎ]した。\nカフェや 公園[こうえん]、地域の コミュニティスペースなどが これに 該当[がいとう]する。\n肩書[かたが]きや 利害[りがい]関係[かんけい]から 解放[かいほう]され、誰[だれ]もが 対等[たいとう]に 穏[おだ]やかな 時間[じかん]を 共有[きょうゆう]できる 空間[くうかん]は、都市生活者[としせいかつしゃ]の 孤立[こりつ]を 防[ふせ]ぐ 避難所[ひなんじょ]として 機能[きのう]する。\n現代[げんだい]の 都市[とし]計画[けいかく]には、こうした ゆとりある 交流[こうりゅう]空間[くうかん]の 創出[そうしゅつ]が 強[つよ]く 求[もと]められている。',
    uzbekTranslation:
      "Amerikalik sotsiolog Rey Oldenburg insonning uyi (birinchi joy) hamda ishxonasi yoki maktabi (ikkinchi joy)dan tashqari xotirjam dam oladigan maskanni 'uchinchi joy' (Third Place) deb atagan. Qahvaxona, xiyobon yoki jamoat maskanlari bunga misoldir. Mansab va manfaatparastlikdan xoli bo'lib, har kim teng va osoyishta vaqt o'tkazadigan bunday joylar shahar aholisini yolg'izlikdan asraydi. Zamonaviy shaharsozlikda bunday maskanlarni ko'paytirish juda zarurdir.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_9_1',
        questionText:
          '「サードプレイス」の 果[は]たす 役割[やくわり]として 最[もっと]も 合致[がっち]するものは どれか。',
        options: [
          '職場[しょくば]の 残業[ざんぎょう]を 徹夜[てつや]で こなす 場所',
          '肩書[かたが]きから 解放[かいほう]され、心[こころ]穏[おだ]やかに 交流[こうりゅう]できる 居場所[いばしょ]',
          '高級[こうきゅう]品[ひん]を 売買[ばいばい]するための 排他的[はいたてき]な クラブ',
          '自宅[じたく]の 部屋[へや]に 鍵[かぎ]を かけて 閉[と]じこもること',
        ],
        correctIndex: 1,
        explanation:
          "Mansab va manfaatlardan xoli bo'lib samimiy muloqot qilish maskani (心穏やかに交流できる居場所) ta'kidlangan.",
      },
    ],
  },
  {
    id: 'n2_read_10',
    level: 'N2',
    title: '「便利[べんり]さ」の 追求[ついきゅう]が 奪[うば]うもの',
    passageType: 'medium',
    japaneseContent:
      'ワンクリックで 物[もの]が 届[とど]き、あらゆる 疑問[ぎもん]に 即座[そくざ]に 検索[けんさく]結果[けっか]が 返[かえ]ってくる 現代[げんだい]社会[しゃかい]は、かつてない 利便性[りべんせい]を 実現[じつげん]した。\nしかし、待[ま]つことの もどかしさや、試行錯誤[しこうさくご]を 重[かさ]ねる 手間[てま]を「無駄[むだ]」として 徹底的[てっていてき]に 排除[はいじょ]した 結果[けっか]、我々[われわれ]は 不便[ふべん]さに対する 耐性[たいせい]を 著[いちじる]しく 喪失[そうしつ]してしまったのではないか。\n遠回[とおまわ]りの中にこそ、偶発的[ぐうはつてき]な 出会[であ]いや 予期[よき]せぬ 発見[はっけん]の 喜[よろこ]びが 潜[ひそ]んでいる。\n効率[こうりつ]の 檻[おり]に 自[みずか]らを 閉[と]じ込[こ]めることなく、敢[あ]えて 余白[よはく]を 慈[いつく]しむ 姿勢[しせい]が 今[いま]こそ 見直[みなお]されるべきである。',
    uzbekTranslation:
      "Birgina tugmani bosish bilan buyum yetib keladigan va har qanday savolga zumda javob topiladigan bugungi jamiyat ilgari ko'rilmagan darajada qulaylik yaratdi. Biroq kutish hayajoni va sinov-xatoliklar bilan o'rganish mashaqqatini 'foydasiz' deb chetga surish oqibatida, biz noqulayliklarga chidamlilik xususiyatini yo'qotib qo'ymadikmikan? Aynan to'g'ri bo'lmagan aylanma yo'llarda kutilmagan qiziqarli uchrashuvlar va kashfiyotlar yashiringan bo'ladi. Samaradorlik qafasiga tushib qolmay, hayotning shoshilinch bo'lmagan go'zalliklarini qadrlash lozim.",
    recommendedTimeMinutes: 6,
    questions: [
      {
        id: 'q_n2_10_1',
        questionText:
          '筆者[ひっしゃ]が 現代[げんだい]の「便利[べんり]さの 追求[ついきゅう]」に対して 抱[いだ]いている 危機感[ききかん]は 何[なに]か。',
        options: [
          '通信[つうしん]料金[りょうきん]が 高額[こうがく]になりすぎていること',
          '効率[こうりつ]のみを 追[お]い求[もと]めるあまり、試行錯誤[しこうさくご]や 偶然[ぐうぜん]の 発見[はっけん]の 喜[よろこ]びが 失[うしな]われていること',
          '配達員[はいたついん]の 数[かず]が 増[ふ]えすぎたこと',
          'インターネットの 情報[じょうほう]が すべて 嘘[うそ]であること',
        ],
        correctIndex: 1,
        explanation:
          "Samaradorlik ortidan quvib, izlanish va kutilmagan kashfiyotlar lazzatidan mahrum bo'layotganimiz uqtiriladi.",
      },
    ],
  },
  {
    id: 'n1_read_5',
    level: 'N1',
    title: '歴史[れきし]記述[きじゅつ]における「客観性[きゃっかんせい]」の イデオロギー',
    passageType: 'medium',
    japaneseContent:
      '実証主義的[じっしょうしゅぎてき] 歴史学[れきしがく]は、史料[しりょう]の 厳密[げんみつ]な 批判[ひはん]を 通[つう]じて「起[お]こったままの 過去[かこ]」を 復元[ふくげん]できると 標榜[ひょうぼう]してきた。\nしかし、いかなる 歴史的[れきしてき] 史料[しりょう]も、その 時代[じだい]の 権力[けんりょく]構造[こうぞう]や 支配的[しハいてき] イデオロギーの 刻印[こくいん]を 免[まぬが]れることは できない。\n何[なに]が 記録[きろく]され、何[なに]が 忘却[ぼうきゃく]の 淵[ふち]に 沈[しず]められたのかを 問[と]い直[なお]すことなしに、中立的[ちゅうりつてき]な 事実[じじつ]など 存在[そんざい]し得[え]ない。\n歴史[れきし]を 語[かた]るとは、勝者[しょうしゃ]の 語[かた]りを 脱構築[だつこうちく]し、沈黙[ちんもく]を 強[し]いられた 弱者[じゃくしゃ]の 呻吟[しんぎん]に 耳[みみ]を 傾[かたむ]ける 倫理的[りんりてき] 行為[こうい]に他[ほか]ならない。',
    uzbekTranslation:
      "Pozitivistik tarixshunoslik arxiv manbalarini sinchkovlik bilan tekshirib o'tmishni aynan qanday sodir bo'lgan bo'lsa shunday qayta tiklash mumkin deb da'vo qilgan. Biroq har qanday tarixiy manba o'sha davrning hokimiyat manfaatlari va mafkurasi muhridan xoli emas. Nimaning yozib qoldirilgani va nimalarning qasddan unuttirilganini tahlil qilmasdan turib 'xolis haqiqat'ga erishib bo'lmaydi. Haqiqiy tarix — g'oliblarning yozganlarini tanqidiy qayta ko'rib chiqish va ovozi bo'g'ilgan ojizlarning nolasiga quloq solishdek axloqiy mas'uliyatdir.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_5_1',
        questionText:
          '歴史的[れきしてき] 事実[じじつ]の 性質[せいしつ]について、筆者[ひっしゃ]の 見解[けんかい]として 最[もっと]も 適切[てきせつ]なものは どれか。',
        options: [
          '公的[こうてき]な 史料[しりょう]さえ 調[しら]べれば、完全[かんぜん]に 客観的[きゃっかんてき]な 真実[しんじつ]を 復元[ふくげん]できる',
          '史料[しりょう]そのものが 時代[じだい]の 権力[けんりょく]や イデオロギーを 反映[はんえい]しているため、無批判[むひはん]に 客観的[きゃっかんてき]とは 言[い]えない',
          '敗者[はいしゃ]の 記録[きろく]は 信憑性[しんぴょうせい]が 乏[とぼ]しいため 排除[はいじょ]すべきである',
          '歴史[れきし]とは 単[たん]なる 年代記[ねんだいき]の 暗記[あんき]作業[さぎょう]である',
        ],
        correctIndex: 1,
        explanation:
          "Hujjatlarning o'zi o'sha davr hukumati mafkurasini aks ettirishi sababli, ularni shubhasiz mutlaq deb qabul qilib bo'lmasligi ta'kidlangan.",
      },
    ],
  },
  {
    id: 'n1_read_6',
    level: 'N1',
    title: '翻訳[ほんやく]における「文化[ぶんか]の 不可訳性[ふかやくせい]」',
    passageType: 'medium',
    japaneseContent:
      '翻訳[ほんやく]とは、単語[たんご]と 単語[たんご]を 辞書的[じしょてき]に 置き換[おきか]える 機械的[きかいてき]な 作業[さぎょう]ではない。\n言語[げんご]とは、その 民族[みんぞく]が 幾世代[いくせだい]にもわたって 培[つちか]ってきた 身体的[しんたいてき] 実感[じっかん]や 風土[ふうど]、独自の 存在論[そんざいろん]が 凝縮[ぎょうしゅく]された 体系[たいけい]である。\nしたがって、完全[かんぜん]な 等価性[とうかせい]を 持[も]つ 翻訳[ほんやく]などは 原理的[げんりてき]に 不可能[ふかのう]であり、翻訳者[ほんやくしゃ]は 常[つね]に「不可訳[ふかやく]な 余白[よはく]」という 深淵[しんえん]と 対峙[たいじ]せざるを 得[え]ない。\nしかし、その 絶望的[ぜつぼうてき]な 隔たり[へだたり]を 自覚[じかく]しつつ、異質[いしつ]な 他者[たしゃ]の 声[こえ]を 自国[じこく]の 言語[げんご]空間[くうかん]に 響[ひび]かせようと 苦闘[くとう]する 営[いとな]みの中にこそ、異文化[いぶんか] 対話[たいわ]の 真[しん]の 尊厳[そんげん]が 宿[やど]るのである。',
    uzbekTranslation:
      "Tarjima — shunchaki so'zlarni lug'at orqali bir-biriga almashtirib qo'yadigan mexanik jarayon emas. Til — o'sha xalqning ko'p asrlar davomida shakllangan hayotiy tajribasi va o'ziga xos borliq tizimidir. Shu bois mutlaq mukammal tarjima nazariy jihatdan imkonsiz bo'lib, tarjimon har doim 'tarjima qilib bo'lmas tubsizlik' bilan yuzlashishga majbur. Biroq ushbu ulkan tafovutni anglagan holda, o'zga madaniyat ovozini o'z ona tilida jaranglatishga urinish mashaqqatida xalqlararo muloqotning chinakam oliy qadr-qimmati namoyon bo'ladi.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_6_1',
        questionText:
          '筆者[ひっしゃ]が 考[かんが]える「翻訳[ほんやく]の 本質[ほんしつ]」として 最[もっと]も 適切[てきせつ]なものは どれか。',
        options: [
          'AI翻訳[ほんやく]に 依存[いぞん]して 時間[じかん]を 短縮[たんしゅく]すること',
          '完全[かんぜん]な 等価[とうか]翻訳[ほんやく]が 不可能[ふかのう]であることを 自覚[じかく]しながらも、他者[たしゃ]の 声[こえ]を 響[ひび]かせようとする 営[いとな]み',
          '外国語[がいこくご]の 特殊[とくしゅ]な 単語[たんご]を すべて カタカナで 音訳[おんやく]すること',
          '自国[じこく]の 読者[どくしゃ]に 都合[つごう]の 良[よ]いように 原文[げんぶん]を 改変[かいへん]すること',
        ],
        correctIndex: 1,
        explanation:
          'Mukammal ekvivalentlik imkonsizligini bilgan holda boshqa madaniyat ruhini yetkazishga urinish (他者の声を響かせようとする営み) tarjimaning asl mohiyatidir.',
      },
    ],
  },
  {
    id: 'n1_read_7',
    level: 'N1',
    title:
      '「自己責任[じこせきにん]論[ろん]」の 陥穽[かんせい]と 共同体[きょうどうたい]の 倫理[りんり]',
    passageType: 'medium',
    japaneseContent:
      '新自由主義的[しんじゆうしゅぎてき] 潮流[ちょうりゅう]の もとで 跋扈[ばっこ]する「自己責任[じこせきにん]論[ろん]」は、個人の 成功[せいこう]を 自らの 努力[どりょく]の 賜物[たまもの]とし、貧困[ひんこん]や 挫折[ざせつ]を 個人の 怠惰[たいだ]や 資質[ししつ]の 欠如[けつじょ]に 帰責[きせき]させる。\nしかし、個人の 生[せい]の 軌跡[きせき]は、生[う]まれ落[お]ちた 家庭[かてい]環境[かんきょう]や 生得的[せいとくてき]な 偶然性[ぐうぜんせい]、社会[しゃかい]の 構造的[こうぞうてき] 不平等[ふびょうどう]によって 深[ふか]く 条件[じょうけん]づけられている。\n自らの 恵[めぐ]まれた 境遇[きょうぐう]を 能力[のうりょく]の 証左[しょうさ]と 錯覚[さっかく]する 勝者[しょうしゃ]の 傲慢[ごうまん]こそが、社会[しゃかい]の 連帯[れんたい]を 蝕[むしば]む 根源的[こんげんてき]な 毒素[どくそ]である。\n偶然[ぐうぜん]の 恩恵[おんけい]に 謙虚[けんきょ]であり、構造的[こうぞうてき] 脆弱性[ぜいじゃくせい]に 曝[さら]された 他者[たしゃ]への 相互[そうご]扶助[ふじょ]を 構想[こうそう]することこそが、今[いま]問[と]われている。',
    uzbekTranslation:
      "Neoliberal qarashlar ta'sirida avj olgan 'o'z aybi bilan' (jiko-sekinin) tushunchasi boylik va muvaffaqiyatni shaxsiy sa'y-harakat natijasi deb, kambag'allik va muvaffaqiyatsizlikni esa dangasalik yoki qobiliyatsizlikka bog'laydi. Holbuki inson taqdiri oilaviy sharoit, tug'ilishdagi tasodiflar va jamiyatdagi tengsizliklar bilan chambarchas bog'langan. O'zining omadi chopganligini faqat qobiliyat mevasi deb o'ylaydigan g'olibona manmanlik jamiyat birdamligiga putur yetkazadi. Tasodifiy imkoniyatlar oldida kamtar bo'lish va qiyin ahvoldagilarga yelkadosh bo'lish adolat garovidir.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_7_1',
        questionText:
          '筆者[ひっしゃ]が「自己責任[じこせきにん]論[ろん]」を 批判[ひはん]する 根拠[こんきょ]は 何[なに]か。',
        options: [
          '個人の 努力[どりょく]は 一切[いっさい] 意味[いみ]を 持[も]たないから',
          '個人の 境遇[きょうぐう]は 環境[かんきょう]や 構造的[こうぞうてき] 不平等[ふびょうどう]といった 偶然性[ぐうぜんせい]に 大[おお]きく 左右[さゆう]されるから',
          '税金[ぜいきん]を 払[はら]う 人[ひと]が いなくなるから',
          'すべての 競争[きょうそう]が 法律[ほうりつ]で 禁止[きんし]されるべきだから',
        ],
        correctIndex: 1,
        explanation:
          "Inson taqdiri shaxsiy tirishqoqlikdan tashqari jamiyatdagi tengsizliklar va tasodiflarga bog'liqligi (偶然性に左右される) uqtirilgan.",
      },
    ],
  },
  {
    id: 'n1_read_8',
    level: 'N1',
    title: '暗黙知[あんもくち]と 職人[しょくにん]の 身体[しんたい]知[ち]',
    passageType: 'medium',
    japaneseContent:
      'マニュアル化[か]と 定量化[ていりょうか]を 信奉[しんぽう]する 近代[きんだい]産業[さんぎょう]社会[しゃかい]は、言語化[げんごか]可能な「形式知[けいしきち]」のみを 正統[せいとう]な 知識[ちしき]として 特権化[とっけんか]してきた。\nしかし、刀鍛冶[かたなかじ]が 炎[ほのお]の 色[いろ]から 温度[おんど]を 瞬時[しゅんじ]に 察知[さっち]し、大工[だいく]が 木[き]の 目[め]を 指先[ゆびさき]で 撫[な]でて 癖[くせ]を 見極[みきわ]めるように、真[しん]の 卓越性[たくえつせい]は 言葉[ことば]で 尽[つ]くせぬ「身体[しんたい]知[ち]（暗黙知[あんもくち]）」の中に 蓄積[ちくせき]されている。\nこの 身体[しんたい]の 深層[しんそう]に 根[ね]ざした 直観的[ちょっかんてき] 判断力[はんだんりょく]は、デジタルな アルゴリズムでは 決して 捕捉[ほそく]し得[え]ない。\n身体[しんたい]を 軽視[けいし]した 知性[ちせい]は、根[ね]なし草[ぐさ]のように 脆弱[ぜいじゃく]である。',
    uzbekTranslation:
      "Ko'rsatmalar va raqamlarga sig'inuvchi zamonaviy sanoat jamiyati faqat tilda ifodalab bo'ladigan 'ochiq bilim'ni oliy bilim deb hisoblab keldi. Biroq temirchi olovning rangidan haroratni bir zumda aniqlashi yoki duradgor barmoqlari bilan yog'och tolalarini paypaslab xususiyatini bilib olishi kabi yuksak mahorat til bilan ifodalab bo'lmaydigan 'jismoniy bilim' (yashirin bilim - anmokuchi)da to'planadi. Jismoniy sezgilar tubida yotgan bunday intuitsiya hech qachon raqamli algoritmlarga sig'maydi. Tanani chetga surgan aql ildizsiz o'simlik kabi omonatdir.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_8_1',
        questionText:
          '筆者[ひっしゃ]の 主張[しゅちょう]する「暗黙知[あんもくち]」の 特徴[とくちょう]は どれか。',
        options: [
          'マニュアルを 読[よ]めば 誰[だれ]でも 1日で 習得[しゅうとく]できるもの',
          '言語化[げんごか]は 困難[こんなん]であるが、身体[しんたい]の 鍛錬[たんれん]を 通[つう]じて 蓄積[ちくせき]される 直観的[ちょっかんてき] 知恵[ちえ]',
          'デジタルデータとして 完璧[かんぺき]に 保存[ほぞん]できるもの',
          '科学的[かがくてき]には まったく 無価値[むかち]な 迷信[めいしん]',
        ],
        correctIndex: 1,
        explanation:
          "Til bilan to'liq tushuntirib bo'lmasa-da, mashaqqatli jismoniy amaliyot orqali shakllanadigan intuitsiya ekanligi aytiladi.",
      },
    ],
  },
  {
    id: 'n1_read_9',
    level: 'N1',
    title: '情報[じょうほう]社会[しゃかい]と「エコーチェンバー現象[げんしょう]」',
    passageType: 'medium',
    japaneseContent:
      'SNSの アルゴリズムは、ユーザーの 過去[かこ]の 閲覧[えつらん]履歴[りれき]に 基[づ]き、その 嗜好[しこう]に 合致[がっち]した 情報[じょうほう]のみを 選択的[せんたくてき]に 供給[きょうきゅう]し続[つづ]ける。\nその 結果[けっか]、自[みずか]らと 同質[どうしつ]の 意見[いけん]のみが 閉[と]ざされた 空間[くうかん]で 肯定[こうてい]され、増幅[ぞうふく]される「エコーチェンバー（反響[はんきょう]室[しつ]）現象[げんしょう]」が 加速[かそく]している。\n異質[いしつ]な 他者[たしゃ]の 視点[してん]に 触[ふ]れる 機会[きかい]を 奪[うば]われた 人々[ひとびと]は、自らの 信念[しんねん]を 絶対[ぜったい]視[し]し、異論[いろん]を 敵視[てきし]する 不寛容[ふかんよう]に 陥[おちい]る。\n民主主義[みんしゅしゅぎ]の 根幹[こんかん]を なす 公共的[こうきょうてき] 対話[たいわ]の 空間[くうかん]が、今[いま]まさに 深刻[しんこく]な 分断[ぶんだん]の 危機[きき]に 瀕[ひん]している。',
    uzbekTranslation:
      "Ijtimoiy tarmoqlar algoritmlari foydalanuvchining ko'rgan ma'lumotlariga qarab, faqat uning didiga mos keladigan yangiliklarni uzatishda davom etadi. Natijada yopiq muhitda faqat o'xshash fikrlar bir-birini ma'qullab kuchaytiruvchi 'aks-sado xonasi' (echo chamber) hodisasi yuzaga keladi. O'zga fikr egalari bilan muloqot qilishdan mahrum bo'lgan odamlar o'z qarashlarini yagona haqiqat deb bilib, boshqalarga nisbatan murosasiz bo'lib qolishadi. Demokratiyaning asosi bo'lgan erkin va xolis muloqot maydoni jiddiy bo'linish xavfi ostida qolmoqda.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_9_1',
        questionText:
          '「エコーチェンバー現象[げんしょう]」が 社会[しゃかい]に 与[あた]える 深刻[しんこく]な 影響[えいきょう]は 何[なに]か。',
        options: [
          'スマートフォンの バッテリー消費[しょうひ]が 早[はや]くなること',
          '同質[どうしつ]の 意見[いけん]のみが 増幅[ぞうふく]され、異質[いしつ]な 他者[たしゃ]への 不寛容[ふかんよう]と 社会的[しゃかいてき] 分断[ぶんだん]が 深[ふか]まること',
          '世界中[せかいじゅう]の 言語[げんご]が 一[ひと]つに 統一[とういつ]されること',
          '紙[かみ]の 本[ほん]の 出版[しゅっぱん]数が 激増[げきぞう]すること',
        ],
        correctIndex: 1,
        explanation:
          "Faqat bir xil fikrlar kuchayib, boshqalarga nisbatan murosasizlik va jamiyatda bo'linish yuzaga kelishi aniq bayon etilgan.",
      },
    ],
  },
  {
    id: 'n1_read_10',
    level: 'N1',
    title: '「自然[しぜん]の 摂理[せつり]」と「人為[じんい]」の 境界[きょうかい]',
    passageType: 'medium',
    japaneseContent:
      '遺伝子[いでんし]編集[へんしゅう]技術[ぎじゅつ]や 生殖[せいしょく]医療[いりょう]の 飛躍的[ひやくてき]な 進歩[しんぽ]は、生命[せいめい]の 誕生[たんじょう]と 終焉[しゅうえん]をも 人間[にんげん]の 意図的[いとてき]な 制御[せいぎょ]下に 置[お]くことを 可能[かのう]にしつつある。\nしかし、あらゆる 生命[せいめい]現象[げんしょう]を 技術的[ぎじゅつてき]に 操作[そうさ]可能な「手段[しゅだん]」へと 貶[おとし]めることは、生命[せいめい]が 生来[せいらい] 帯[お]びている「贈与[ぞうよ]としての 性質[せいしつ]」を 忘却[ぼうきゃく]することに他[ほか]ならない。\n我々[われわれ]は 自らの 存在[そんざい]を 選択[せんたく]したのではなく、自然[しぜん]の 摂理[せつり]の 中で「生[い]かされている」のである。\n人間[にんげん]の 万能[ばんのう]感[かん]を 戒[いまし]め、超越的[ちょうえつてき]な 生命[せいめい]の 尊厳[そんげん]に 畏怖[いふ]の 念[ねん]を 払[はら]う 哲学的[てつがくてき] 節度[せつど]が 今[いま]こそ 厳[きび]しく 試[ため]されている。',
    uzbekTranslation:
      "Gen tahrirlash texnologiyalari va reproduktiv tibbiyotning jadal rivojlanishi hayotning boshlanishi va tugashini insonning to'liq nazorati ostiga olish imkoniyatini yaratmoqda. Biroq hayotiy hodisalarni faqat boshqariladigan 'asbob' deb bilish hayotning asl mohiyati bo'lmish 'in'om etilgan ne'mat' ekanligini unutishdir. Inson o'z borligini tanlab olmagan, balki tabiat qonunlari ichida yashamoqda. Inson o'zini hamma narsaga qodir deb bilish xomxayolidan tiyilib, hayotning buyukligiga ehtirom saqlaydigan falsafiy bosiqlik zarur.",
    recommendedTimeMinutes: 7,
    questions: [
      {
        id: 'q_n1_10_1',
        questionText:
          '筆者[ひっしゃ]が 生命[せいめい]工学[こうがく]の 進歩[しんぽ]に対して 警鐘[けいしょう]を 鳴[な]らしている 点[てん]は 何[なに]か。',
        options: [
          '新[あたら]しい 薬[くすり]の 開発[かいはつ]に お金[かね]が かかりすぎること',
          '生命[せいめい]を 操作[そうさ]の 対象[たいしょう]と みなし、生命[せいめい]の 尊厳[そんげん]や 畏怖[いふ]の 念[ねん]を 見失[みうしな]うこと',
          '医師[いし]の 数[かず]が 将来[しょうらい] 減少[げんしょう]すること',
          '機械[きかい]の 誤作動[ごさどう]によって 手術[しゅじゅつ]が 失敗[しっぱい]すること',
        ],
        correctIndex: 1,
        explanation:
          "Inson hayotni boshqarish vositasiga aylantirib, hayotga nisbatan hurmat va hayrat tuyg'usini yo'qotib qo'yishidan ogohlantiradi.",
      },
    ],
  },
];
