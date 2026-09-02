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
];
