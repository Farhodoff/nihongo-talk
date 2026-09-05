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
];
