export interface ExamQuestion {
  id: number;
  section: 'knowledge' | 'reading' | 'listening';
  questionText: string;
  passageText?: string;
  audioUrl?: string;
  script?: string;
  options: string[];
  correctAnswer: number;
  explanationUzbek: string;
}

export const JLPT_MOCK_EXAM_DATA: Record<'N5' | 'N4' | 'N3' | 'N2' | 'N1', ExamQuestion[]> = {
  // ==========================================
  // === N5 MOCK EXAM (25 questions) ==========
  // ==========================================
  N5: [
    {
      id: 101,
      section: 'knowledge',
      questionText: 'きょうは 水曜日（すいようび）です。あしたは（　）曜日です。',
      options: ['火', '木', '金', '土'],
      correctAnswer: 1,
      explanationUzbek:
        "Bugun Chorshanba (水曜日). Ertaga esa Payshanba (木曜日 - もくようび) bo'ladi. 火曜日 - Seshanba, 金曜日 - Juma, 土曜日 - Shanba.",
    },
    {
      id: 102,
      section: 'knowledge',
      questionText: '教室（きょうしつ）の なかに つくえ（　）いすが あります。',
      options: ['と', 'が', 'を', 'も'],
      correctAnswer: 0,
      explanationUzbek:
        "Narsalarni to'liq sanab o'tishda 'va' ma'nosida 'と' yuklamasi keladi: つくえ と いす (stol va stul).",
    },
    {
      id: 103,
      section: 'knowledge',
      questionText: '毎朝、新聞を（　）から、会社へ行きます。',
      options: ['読みます', '読んで', '読んだ', '読む'],
      correctAnswer: 1,
      explanationUzbek:
        "Ketma-ket harakatlarda '~te kara' (qilib bo'lgach) grammatikasi qo'llanadi: 読んでから (o'qib bo'lgach).",
    },
    {
      id: 104,
      section: 'knowledge',
      questionText: '駅まで バスで どの（　）かかりますか。',
      options: ['いくら', 'ぐらい', 'ごろ', 'なんにん'],
      correctAnswer: 1,
      explanationUzbek:
        "Vaqt yoki muddat miqdorini (taxminan qancha) so'rashda 'どのぐらい' (dono gurai) birikmasi ishlatiladi.",
    },
    {
      id: 105,
      section: 'knowledge',
      questionText: '田中さんは（毎朝）ジョギングを します。',
      options: ['まいあさ', 'まいばん', 'まいとし', 'まいにち'],
      correctAnswer: 0,
      explanationUzbek:
        "「毎朝」kanjisining to'g'ri o'qilishi — まいあさ (har tong). 毎晩 - har oqshom, 毎日 - har kun.",
    },
    {
      id: 106,
      section: 'knowledge',
      questionText: 'わたしは 毎朝 7時半（　）起きます。',
      options: ['に', 'で', 'を', 'へ'],
      correctAnswer: 0,
      explanationUzbek:
        "Aniq vaqt ko'rsatkichlaridan keyin (soat, daqiqa) 'に' yuklamasi qo'yiladi: 7時半に 起きます (7 yarimda uyg'onaman).",
    },
    {
      id: 107,
      section: 'knowledge',
      questionText: '日本人は はし（　）ご飯を 食べます。',
      options: ['に', 'で', 'を', 'へ'],
      correctAnswer: 1,
      explanationUzbek:
        "Biror vosita yoki qurol yordamida harakat bajarilganda 'で' yuklamasi ishlatiladi: はしで (cho'p bilan).",
    },
    {
      id: 108,
      section: 'knowledge',
      questionText: '部屋が 暗いですから、電気を（　）ください。',
      options: ['つけて', '消して', 'あけて', 'しめて'],
      correctAnswer: 0,
      explanationUzbek:
        "Xona qorong'i bo'lgani uchun chiroqni yoqish so'ralmoqda. Chiroqni yoqish — つける (つけます -> つけて). 消す - o'chirmoq.",
    },
    {
      id: 109,
      section: 'knowledge',
      questionText: '日曜日、デパートへ（友だち）と 行きました。',
      options: ['こども', 'ともだち', 'きょうだい', 'かぞく'],
      correctAnswer: 1,
      explanationUzbek:
        "「友だち」kanjisining to'g'ri o'qilishi — ともだち (do'st). 子ども - bola, 家族 - oila.",
    },
    {
      id: 110,
      section: 'knowledge',
      questionText: 'ここは 図書館ですから、大きな声で（　）で ください。',
      options: ['話さない', '話す', '話して', '話した'],
      correctAnswer: 0,
      explanationUzbek:
        "Biror ishni qilmaslikni so'rashda inkor '〜ないでください' qolipi ishlatiladi: 話さないでください (gapirmang).",
    },
    {
      id: 111,
      section: 'knowledge',
      questionText: 'この みかんは 甘くて、（　）です。',
      options: ['おいしい', 'おいしくて', 'おいしかった', 'おいしくない'],
      correctAnswer: 0,
      explanationUzbek:
        "Gap oxirida kesim sifatida i-sifatning lug'aviy shakli + です keladi: 甘くて、おいしいです (shirin va mazali).",
    },
    {
      id: 112,
      section: 'knowledge',
      questionText: 'テーブルの上に ペンが（　）あります。',
      options: ['3ぽん', '3まい', '3さつ', '3だい'],
      correctAnswer: 0,
      explanationUzbek:
        "Qalam, ruchka kabi uzun ingichka buyumlar '本 (ほん/ぼん/ぽん)' sanoq so'zi bilan sanaladi: 3本 (さんぼん).",
    },
    {
      id: 113,
      section: 'knowledge',
      questionText: '正しい文を作ってください：\n昨日 ＿＿ ＿＿ ★ ＿＿ 買いました。',
      options: ['デパートで', '新しい', '靴（くつ）を', '友達と'],
      correctAnswer: 2,
      explanationUzbek:
        "To'g'ri tartib: 昨日 [友達と] [デパートで] [★ 靴を] [新しい] 買いました (yoki 新しい 靴を). Yulduzcha o'rnida 靴を (3-variant) turadi.",
    },
    {
      id: 114,
      section: 'reading',
      passageText:
        'リーさんは 毎朝（まいあさ）７時に おきます。朝ご飯を 食べてから、８時に 自転車で 学校へ 行きます。学校は ８時半に 始まります。',
      questionText: 'リーさんは 何で 学校へ 行きますか？',
      options: ['歩いて', 'バスで', '自転車で', '電車で'],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda aniq keltirilgan: 'jitensha de gakkou e ikimasu' (velosipedda maktabga boradi).",
    },
    {
      id: 115,
      section: 'reading',
      passageText:
        'きのう 田中さんと レストランへ 行きました。わたしは さかなを 食べました。田中さんは にくを 食べました。とても おいしかったです。二人で 3000円でした。',
      questionText: '二人の 食事は いくらでしたか？',
      options: ['1500円', '2000円', '3000円', '6000円'],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda 'Futari de 3000-en deshita' (ikkalamizga jami 3000 yen bo'ldi) deyilgan.",
    },
    {
      id: 116,
      section: 'reading',
      passageText:
        '【母からのメモ】\nタケシへ。\n冷蔵庫の中にカレーがあります。電子レンジで2分温めて食べてください。食べたあとで、お皿を洗っておいてね。お母さんは8時に帰ります。',
      questionText: 'タケシさんは カレーを 食べた後で、何を しなければなりませんか？',
      options: ['カレーを作る', 'お皿を洗う', '母を駅へ迎えに行く', '冷蔵庫を掃除する'],
      correctAnswer: 1,
      explanationUzbek:
        "Onaning xatida: '食べたあとで、お皿を洗っておいてね' (ovqatlangandan so'ng likopchalarni yuvib qo'y) deb topshiriq berilgan.",
    },
    {
      id: 117,
      section: 'reading',
      passageText:
        '山田さんの日記：\n土曜日は朝から雨が降っていましたから、一日中うちで映画を見ました。日曜日はとてもいい天気でした。山田さんは朝9時から公園を散歩して、午後から友達とお茶を飲みました。楽しかったです。',
      questionText: '山田さんは 日曜日の午前に 何を しましたか？',
      options: ['映画を見た', '友達とお茶を飲んだ', '公園を散歩した', '一日中うちにいた'],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda: '日曜日はとてもいい天気でした。山田さんは朝9時から公園を散歩して...' (yakshanba ertalab 9 dan parkda sayr qildi) deb yozilgan.",
    },
    {
      id: 118,
      section: 'reading',
      passageText:
        'はじめまして、マリアです。ブラジルから来ました。日本に来て3か月になります。最初は日本語が全然わかりませんでしたが、クラスの友達や先生が親切に教えてくれました。今はひらがなとカタカナが読めます。来週から漢字の勉強が始まります。少し難しいですが、一生懸命がんばります。',
      questionText: 'マリアさんは 今、何が できますか？',
      options: [
        '漢字がたくさん読める',
        'ひらがなとカタカナが読める',
        '日本語でスピーチができる',
        '英語を教えている',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Matnda: '今はひらがなとカタカナが読めます' (Hozir hiragana va katakanani o'qiy olaman) deb yozilgan. Kanji o'rganish kelasi hafta boshlanadi.",
    },
    {
      id: 119,
      section: 'reading',
      passageText:
        '【さくらクリニック 診療案内】\n・月曜日〜金曜日：午前 9:00〜12:30 / 午後 14:30〜18:00\n・土曜日：午前 9:00〜13:00（午後は休診）\n・休診日：日曜日・祝日\n※予約がない方は、受付終了の30分前までにお越しください。',
      questionText: '土曜日の 午後3時に このクリニックで 診察を 受けることが できますか？',
      options: [
        '受けることができる',
        '予約があれば受けられる',
        '午後は休診なので受けることができない',
        '祝日なら受けられる',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "E'londa yozilgan: '土曜日：午前 9:00〜13:00（午後は休診）' — Shanba kuni tushdan keyin klinika ishlamaydi (休診 - qabul yo'q).",
    },
    {
      id: 120,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      script:
        '女の人が話しています。テーブルの上に何を置きますか？\n女：食事の準備をしましょう。お皿を並べて、その右側にスプーンを置いてください。',
      questionText: 'お皿の右側に何を置きますか？',
      options: ['フォーク', 'ナイフ', 'スプーン', 'はし'],
      correctAnswer: 2,
      explanationUzbek:
        "Ayol kishi: 'migi gawa ni supuun o oite kudasai' (o'ng tomonga qoshiqni qo'ying) deb aytadi.",
    },
    {
      id: 121,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      script:
        '男の人と女の人が話しています。男の人はあした何時に起きますか？\n女：あしたは何時に出かけるの？\n男：8時の電車に乗るから、7時に起きるよ。',
      questionText: '男の人はあした何時に起きますか？',
      options: ['6時', '7時', '8時', '9時'],
      correctAnswer: 1,
      explanationUzbek: "Erkak kishi: '7-ji ni okiru yo' (soat 7 da uyg'onaman) deb javob beradi.",
    },
    {
      id: 122,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      script:
        '男の人と女の人が話しています。二人はどこで会いますか？\n男：明日の待ち合わせ、駅の改札口にする？\n女：うーん、改札口は人が多くて見つけにくいよ。北口の本屋さんの前にしない？\n男：そうだね、じゃあそこにしよう。',
      questionText: '二人は 明日 どこで 会いますか？',
      options: ['駅の改札口', '北口の本屋の前', '南口のカフェ', '映画館の入り口'],
      correctAnswer: 1,
      explanationUzbek:
        "Suhbatda ayol '北口の本屋さんの前にしない？' (Shimoliy chiqishdagi kitob do'koni oldi bo'lsinmi?) deb taklif qiladi va erkak rozi bo'ladi.",
    },
    {
      id: 123,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      script:
        '先生が学生に話しています。学生は明日何を持ってこなければなりませんか？\n先生：みなさん、明日は作文のテストをします。えんぴつと消しゴムを必ず持ってきてください。辞書や教科書は使えませんから、机の上に出さないでください。',
      questionText: '学生は 明日 机の上に 何を 出しますか？',
      options: ['辞書と教科書', 'えんぴつと消しゴム', 'ノートと教科書', '携帯電話'],
      correctAnswer: 1,
      explanationUzbek:
        "O'qituvchi: 'えんぴつと消しゴムを必ず持ってきてください' (Qalam va o'chirg'ichni albatta olib keling) deb ta'kidlaydi.",
    },
    {
      id: 124,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      script:
        '女の人と男の人が話しています。男の人は何を着て出かけますか？\n女：外は風が強くて寒いよ。上着を着ていったほうがいいよ。\n男：うん、じゃあ厚いコートを着ていくよ。帽子もかぶろう。',
      questionText: '男の人は 何を着て 出かけますか？',
      options: ['薄いシャツ', '厚いコート', 'レインコート', 'セーターだけ'],
      correctAnswer: 1,
      explanationUzbek:
        "Erkak kishi: 'じゃあ厚いコートを着ていくよ' (U holda qalin palto kiyib boraman) deb javob beradi.",
    },
    {
      id: 125,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      script:
        'レストランで男の人と店員が話しています。男の人は飲み物に何を頼みましたか？\n店員：ご注文はお決まりですか？\n男：カレーライスを一つお願いします。それから、冷たいお茶をください。\n店員：かしこまりました。冷たいお茶ですね。',
      questionText: '男の人は 飲み物に 何を 頼みましたか？',
      options: ['温かいコーヒー', '冷たいお茶', 'ジュース', 'コーラ'],
      correctAnswer: 1,
      explanationUzbek: "Mijoz: '冷たいお茶をください' (Muzdek choy bering) deb buyurtma qiladi.",
    },
  ],

  // ==========================================
  // === N4 MOCK EXAM (25 questions) ==========
  // ==========================================
  N4: [
    {
      id: 201,
      section: 'knowledge',
      questionText: '雨が 降って（　）、試合は 中止になりました。',
      options: ['きたので', 'くるのに', 'きたら', 'きても'],
      correctAnswer: 0,
      explanationUzbek:
        "Sabab-oqibatni bildirishda 'node' qo'llaniladi: Ame ga futte kita node (yomg'ir yog'ib boshlaganligi sababli).",
    },
    {
      id: 202,
      section: 'knowledge',
      questionText: '先生に 本を（　）。ありがとうございました。',
      options: ['あげました', 'くれました', 'いただきました', 'やりました'],
      correctAnswer: 2,
      explanationUzbek:
        "Ustoz yoki hurmatli shaxsdan biror narsa qabul qilganda kamtarlik fe'li 'itadakimasu' ishlatiladi.",
    },
    {
      id: 203,
      section: 'knowledge',
      questionText: 'この漢字は どういう（　）ですか。',
      options: ['いみ', 'わけ', 'こと', 'りゆう'],
      correctAnswer: 0,
      explanationUzbek:
        "So'z yoki belgining ma'nosi so'ralganda 'imi' (意味 - ma'no) so'zi to'g'ri keladi.",
    },
    {
      id: 204,
      section: 'knowledge',
      questionText: '毎日 走る（　）に しています。健康のためです。',
      options: ['こと', 'よう', 'はず', 'わけ'],
      correctAnswer: 1,
      explanationUzbek:
        "O'ziga odat qilib olish ma'nosida 'fe'l oddiy shakli + you ni suru' ifodasi ishlatiladi.",
    },
    {
      id: 205,
      section: 'knowledge',
      questionText: '来年の（計画）を 立てています。',
      options: ['けいかく', 'けいがく', 'けいかっ', 'かいかく'],
      correctAnswer: 0,
      explanationUzbek: "「計画」kanjisining to'g'ri o'qilishi — けいかく (reja).",
    },
    {
      id: 206,
      section: 'knowledge',
      questionText: '漢字が 難しくて、日本の新聞が まだ（　）。',
      options: ['読めません', '読みません', '読まれません', '読ませません'],
      correctAnswer: 0,
      explanationUzbek:
        "Qobiliyat yetmasligida imkoniyat/potentsial fe'lining inkori ishlatiladi: 読めません (o'qiy olmayman).",
    },
    {
      id: 207,
      section: 'knowledge',
      questionText: '風で ドアが（　）しまいました。',
      options: ['閉めて', '閉まって', '開けて', '止めて'],
      correctAnswer: 1,
      explanationUzbek:
        "Eshik shamolda o'z-o'zidan yopilgani uchun o'timsiz fe'l (jidoushi) '閉まる' (しまって) ishlatiladi.",
    },
    {
      id: 208,
      section: 'knowledge',
      questionText: '熱が ありますから、今日は 早く 寝た（　）が いいですよ。',
      options: ['ほう', 'こと', 'もの', 'よう'],
      correctAnswer: 0,
      explanationUzbek:
        "Tavsiya va maslahat berishda 'fe'l ta-shakli + ほうがいい' qo'llaniladi: 寝たほうがいい (uxlaganingiz ma'qul).",
    },
    {
      id: 209,
      section: 'knowledge',
      questionText: '弟に 大切な ケーキを（　）しまいました。',
      options: ['食べて', '食べられて', '食べさせて', '食べられても'],
      correctAnswer: 1,
      explanationUzbek:
        "Birovning harakatidan noxush zarar ko'rilganda majhullik (ukemi) ishlatiladi: 食べられてしまいました.",
    },
    {
      id: 210,
      section: 'knowledge',
      questionText: '空が 暗くなってきました。今にも 雨が（　）そうです。',
      options: ['降る', '降り', '降った', '降って'],
      correctAnswer: 1,
      explanationUzbek:
        "Ko'rinishdan sodir bo'lish arafasidagi holat uchun 'fe'l o'zagi + そうだ' ishlatiladi: 降りそうです.",
    },
    {
      id: 211,
      section: 'knowledge',
      questionText: '駅前の 図書館へ 本を（　）に 行きます。',
      options: ['返し', '返す', '返して', '返した'],
      correctAnswer: 0,
      explanationUzbek:
        "Maqsad bilan borishda 'fe'l o'zagi + に行く' qo'llanadi: 返しに行きます (topshirgani boraman).",
    },
    {
      id: 212,
      section: 'knowledge',
      questionText: '田中さんは 用事があるから、今日のパーティーには（　）と 言っていました。',
      options: ['来られない', '来ないで', '来させる', '来られる'],
      correctAnswer: 0,
      explanationUzbek:
        "Kela olmaslik haqidagi iqtibos: potentsial inkor '来られない' (korarenai to itte imashita).",
    },
    {
      id: 213,
      section: 'knowledge',
      questionText: '正しい文を作ってください：\n日本へ ＿＿ ＿＿ ★ ＿＿ 勉強しています。',
      options: ['留学するために', '大学で', '経済を', '一生懸命'],
      correctAnswer: 2,
      explanationUzbek:
        "To'g'ri tartib: 日本へ [留学するために] [大学で] [★ 経済を] [一生懸命] 勉強しています -> 経済を (3-variant).",
    },
    {
      id: 214,
      section: 'reading',
      passageText:
        '先週 新しい アパートに 引っ越しました。前の 部屋より 広くて 明るいですが、駅から 少し 遠くなりました。でも、近くに 静かな 公園が あるので 気に入っています。',
      questionText: '新しい アパートの どんなところが 気に入っていますか？',
      options: [
        '駅から とても 近いところ',
        '近くに 静かな 公園が あるところ',
        '家賃が 前より 安いところ',
        '近くに 大きな スーパーが あるところ',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Matnda aniq keltirilgan: 'chikaku ni shizukana kouen ga aru node ki ni itte imasu' (yaqinida tinch bog' borligi yoqmoqda).",
    },
    {
      id: 215,
      section: 'reading',
      passageText:
        '【図書館の お知らせ】\n本は 一人 5冊まで 2週間 借りられます。ただし、DVDや 雑誌の 最新号は 借りることが できません。図書館の 中で 見てください。返却期限は 必ず 守ってください。',
      questionText: '借りることが できないものは 何ですか？',
      options: ['古い小説', '歴史の本', 'DVDや最新号の雑誌', '辞書'],
      correctAnswer: 2,
      explanationUzbek:
        "E'londa yozilgan: 'DVD ya zasshi no saishingou wa kariru koto ga dekimasen' (DVD va yangi son jurnallarni qarzga olib ketib bo'lmaydi).",
    },
    {
      id: 216,
      section: 'reading',
      passageText:
        '【ごみ収集（しゅうしゅう）の ルール】\n・燃えるごみ：火曜日・金曜日の 朝8時まで。\n・燃えないごみ：第2・第4水曜日の 朝8時まで。\n・資源ごみ（ペットボトル・びん・缶）：木曜日の 朝8時まで。\n※前日の夜には 絶対に 出さないでください。カラスや猫が ごみを荒らす原因になります。',
      questionText: 'ペットボトルや空き缶は、いつ 出さなければなりませんか？',
      options: ['火曜日の夜', '水曜日の朝8時まで', '木曜日の朝8時まで', '金曜日の午後'],
      correctAnswer: 2,
      explanationUzbek:
        "Qoidalarda resurs chiqindilari (資源ごみ: pet butilkalar, bankalar) '木曜日の 朝8時まで' (Payshanba ertalab soat 8 gacha) deb belgilangan.",
    },
    {
      id: 217,
      section: 'reading',
      passageText:
        '先週の日曜日、留学生センターの料理教室に参加しました。先生から「肉じゃが」の作り方を習いました。じゃがいもや牛肉をしょうゆと砂糖で煮る日本の家庭料理です。思ったより簡単で、とても美味しかったです。来週、自分の国から来た友達をアパートに招待して作ってあげるつもりです。',
      questionText: 'この文章の内容と合っているものはどれですか？',
      options: [
        '肉じゃがを作るのはとても難しかった',
        '友達のためにすでにアパートで作った',
        '来週友達を招待して肉じゃがを作るつもりだ',
        '先生に料理を振る舞った',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "Matn oxirida yozilgan: '来週、自分の国から来た友達をアパートに招待して作ってあげるつもりです' (Kelasi hafta do'stlarimni chaqirib pishirib bermoqchiman).",
    },
    {
      id: 218,
      section: 'reading',
      passageText:
        '【業務連絡メール】\n宛先：田中課長\n発信：営業部 佐藤\nお疲れ様です。本日15時に予定していたABC商事との打ち合わせですが、先方の担当者が急な出張となったため、来週月曜日の午前10時に変更となりました。会議室の予約も変更済みです。よろしくお願いいたします。',
      questionText: '打ち合わせの日時が変更になった理由は何ですか？',
      options: [
        '会議室が予約できなかったから',
        '佐藤さんが病気になったから',
        '田中課長が不在だったから',
        '先方の担当者が急に出張になったから',
      ],
      correctAnswer: 3,
      explanationUzbek:
        "Email matnida aniq ko'rsatilgan: '先方の担当者が急な出張となったため' (hamkor tomon mas'ul xodimi to'satdan xizmat safariga ketgani sababli).",
    },
    {
      id: 219,
      section: 'reading',
      passageText:
        '【休日メトロ1日乗り放題きっぷ】\n・土曜日、日曜日、国民の祝日に限り利用可能。\n・大人：600円 / 子ども：300円\n・地下鉄全線が1日中何度でも乗り降り自由。\n※JR線や民間鉄道、都営バスにはご利用いただけません。自動券売機でお買い求めください。',
      questionText: 'この切符について 正しい 説明は どれですか？',
      options: [
        '平日の通勤時にも使える',
        'バスにも自由に乗ることができる',
        '土日や祝日に地下鉄全線で何度でも使える',
        'JR線にも自由に乗ることができる',
      ],
      correctAnswer: 2,
      explanationUzbek:
        'Qoidalarda aytilganidek: dam olish va bayram kunlarida metroning barcha liniyalarida cheksiz foydalanish mumkin. Boshqa transportlarda esa amal qilmaydi.',
    },
    {
      id: 220,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      script:
        '女の学生と男の学生が話しています。男の学生はどうしてパーティーに来られませんか？\n女：明日の夜、みんなでタワポンさんの送別会をするんだけど、来られる？\n男：あー、明日はアルバイトのシフトが入っていて、休めないんだ。ごめんね。',
      questionText: '男の学生はどうしてパーティーに来られませんか？',
      options: ['風邪をひいたから', 'アルバイトがあるから', 'お金がないから', '宿題が多いから'],
      correctAnswer: 1,
      explanationUzbek:
        "Erkak talaba: 'arubaito no shifuto ga haitte ite' (yarim kunlik ish navbati borligi sababli) kela olmasligini aytadi.",
    },
    {
      id: 221,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      script:
        '駅で案内放送を聞いています。新幹線は何番線から発車しますか？\n放送：まもなく11番線に、博多行き新幹線が到着いたします。黄色い線の内側までお下がりください。',
      questionText: '新幹線は何番線から発車しますか？',
      options: ['10番線', '11番線', '12番線', '13番線'],
      correctAnswer: 1,
      explanationUzbek:
        "E'londa aniq eshitiladi: '11-bansen ni Hakata-yuki shinkansen ga touchaku itashimasu' (11-yo'lga yetib keladi).",
    },
    {
      id: 222,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      script:
        '会社で課長と女性社員が話しています。女性社員はまず何をしますか？\n課長：佐藤さん、午後の会議の準備だけど、資料のコピーはできた？\n女性：あ、まだ会議室の予約をしただけです。\n課長：そうか。じゃあ、先にこの資料を20部コピーして会議室に持っていって。パソコンの準備はその後でいいから。\n女性：はい、わかりました。すぐやります。',
      questionText: '女性社員は まず 何を しますか？',
      options: ['会議室を予約する', '資料を20部コピーする', 'パソコンの準備をする', 'お茶を入れる'],
      correctAnswer: 1,
      explanationUzbek:
        "Boshliq: '先にこの資料を20部コピーして会議室に持っていって' (avval ushbu hujjatdan 20 nusxa ko'chirib majlis xonasiga olib bor) deb buyuradi.",
    },
    {
      id: 223,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      script:
        '病院で医者と男の人が話しています。男の人は白い薬をいつ飲みますか？\n医者：喉の痛みを抑える白い薬と、熱が出たときだけの青い薬を出しますね。\n男：はい。\n医者：白い薬は毎食後、必ず水と一緒に飲んでください。青い薬は38度以上の熱が出たときだけですよ。\n男：わかりました。',
      questionText: '男の人は 白い薬を いつ 飲みますか？',
      options: ['毎食後', '寝る前', '熱が38度以上出たときだけ', '朝起きたときだけ'],
      correctAnswer: 0,
      explanationUzbek:
        "Shifokor: '白い薬は毎食後、必ず水と一緒に飲んでください' (oq dorini har ovqatdan keyin iching) deb uqtiradi.",
    },
    {
      id: 224,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      script:
        '店で客と店員が話しています。客はどうやって支払いますか？\n店員：お会計は4200円になります。\n客：クレジットカードは使えますか？\n店員：すみません、ただいま通信端末の故障でカードとバーコード決済が使えないんです。現金かSuicaなどの交通系電子マネーのみとなります。\n客：そうですか。じゃあSuicaでお願いします。',
      questionText: '客は どうやって 支払いますか？',
      options: [
        'クレジットカード',
        'スマホのバーコード決済',
        '交通系電子マネー（Suica）',
        '商品券',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "Xaridor bank kartasi ishlamagach: 'じゃあSuicaでお願いします' (undog' bo'lsa Suica transport elektron puli bilan to'layman) deydi.",
    },
    {
      id: 225,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      script:
        '男の人と女の人が明日の旅行について話しています。二人は何時の電車に乗りますか？\n男：明日は9時の特急に乗る予定だったよね？\n女：うん。でも現地の博物館が10時から特別展をやるから、できればもう一本早い8時半の電車にしない？\n男：いいね。じゃあ8時半のに乗ろう。駅には8時15分に集合ね。',
      questionText: '二人は 明日 何時の 電車に 乗りますか？',
      options: ['8時', '8時15分', '8時半', '9時'],
      correctAnswer: 2,
      explanationUzbek:
        "Ayol 8:30 dagi poyezdni taklif qiladi va erkak ham rozi bo'ladi ('8時半のに乗ろう'). 8:15 esa stantsiyada uchrashish vaqti.",
    },
  ],

  // ==========================================
  // === N3 MOCK EXAM (25 questions) ==========
  // ==========================================
  N3: [
    {
      id: 301,
      section: 'knowledge',
      questionText: '大事な 会議の 最中に、携帯電話が 鳴って（　）。',
      options: ['しまった', 'おいた', 'みた', 'いった'],
      correctAnswer: 0,
      explanationUzbek:
        "Kutilmagan yoki noxush hodisa yuz berganda '~te shimatta' (afsuski bo'lib qoldi) grammatikasi ishlatiladi.",
    },
    {
      id: 302,
      section: 'knowledge',
      questionText: 'どんなに 頼まれても、この仕事を 引き受ける（　）には いかない。',
      options: ['もの', 'こと', 'わけ', 'はず'],
      correctAnswer: 2,
      explanationUzbek:
        "'~wake ni wa ikanai' ijtimoiy yoki axloqiy sababga ko'ra 'bunday qilib bo'lmaydi' degan ma'noni ifodalaydi.",
    },
    {
      id: 303,
      section: 'knowledge',
      questionText: '試験の 結果は、ウェブサイトに（　）次第、メールで ご連絡します。',
      options: ['発表する', '発表した', '発表され', '発表して'],
      correctAnswer: 2,
      explanationUzbek:
        "'fe'l o'zagi (stem) + shidai' (darhol, bo'lishi bilanoq) ma'nosini bildiradi: happyousare-shidai (e'lon qilinishi bilanoq).",
    },
    {
      id: 304,
      section: 'knowledge',
      questionText: '最近の パソコンは 小型化される（　）、性能も 著しく 向上している。',
      options: ['反面', '一方', '途端', '次第'],
      correctAnswer: 1,
      explanationUzbek:
        "Biror tendensiyaning bir tomonlama rivojlanib borishini bildirishda 'ippou' qo'llaniladi.",
    },
    {
      id: 305,
      section: 'knowledge',
      questionText: '契約を結ぶ前に、条件を（慎重）に 確認してください。',
      options: ['しんちょう', 'きんちょう', 'しんじょう', 'きんじょう'],
      correctAnswer: 0,
      explanationUzbek:
        "「慎重」kanjisining to'g'ri o'qilishi — しんちょう (ehtiyotkorlik bilan, chuqur o'ylab).",
    },
    {
      id: 306,
      section: 'knowledge',
      questionText: '今回の 新規事業の 計画（　）、役員会で 詳しい 説明が あった。',
      options: ['に関して', 'にとって', 'に反して', 'を通じて'],
      correctAnswer: 0,
      explanationUzbek:
        "Biror mavzu yoki masala to'g'risida gap ketganda '〜に関して' (to'g'risida / haqida) grammatikasi ishlatiladi.",
    },
    {
      id: 307,
      section: 'knowledge',
      questionText: '毎日 仕事で 多忙な 現代人（　）、質の良い 睡眠は 不可欠だ。',
      options: ['にとって', 'に対して', 'によって', 'につれて'],
      correctAnswer: 0,
      explanationUzbek:
        "Muayyan shaxs yoki toifa nuqtai nazaridan baholaganda '〜にとって' (... uchun) ifodasi to'g'ri keladi.",
    },
    {
      id: 308,
      section: 'knowledge',
      questionText: '冬の 寒い 時期は、どうしても 運動不足に（　）になる。',
      options: ['なりがち', 'なりぎみ', 'なりそう', 'なりかけ'],
      correctAnswer: 0,
      explanationUzbek:
        "Noxush odat yoki tendensiyaga moyillikni bildirishda 'fe'l o'zagi + がち' (〜がち) qo'llanadi: なりがち (bo'lib qolishga moyil).",
    },
    {
      id: 309,
      section: 'knowledge',
      questionText: '明日、午前10時に 貴社へ（　）。よろしくお願いいたします。',
      options: ['お伺いします', 'いらっしゃいます', '参られます', 'おいでになります'],
      correctAnswer: 0,
      explanationUzbek:
        "Hamkor kompaniyaga borishda o'z harakatini kamtarin qilish uchun kenjougo (kamtarlik) fe'li 'お伺いします' ishlatiladi.",
    },
    {
      id: 310,
      section: 'knowledge',
      questionText: '午後から 天気が 崩れると 思っていたが、（　）雷雨になった。',
      options: ['案の定', 'かえって', 'むしろ', 'せっかく'],
      correctAnswer: 0,
      explanationUzbek:
        "'案の定' (あんのじょう) - kutilganidek, taxmin qilinganidek (ko'pincha salbiy holatlarda) ma'nosidagi ravishdir.",
    },
    {
      id: 311,
      section: 'knowledge',
      questionText: 'あんなに 毎日 猛練習を 積み重ねて きたのだから、彼なら 必ず 合格する（　）。',
      options: ['に違いない', 'にすぎない', 'わけがない', 'はずがない'],
      correctAnswer: 0,
      explanationUzbek:
        "Kuchli ishonch bilan xulosa chiqarishda '〜に違いない' (shubhasiz, aniq shunday bo'ladi) qo'llanadi.",
    },
    {
      id: 312,
      section: 'knowledge',
      questionText: '会社の 就業規則により、勤務中の 私用電話は 原則禁止という（　）。',
      options: ['ことになっている', 'ことにしている', 'わけになっている', 'ようにしている'],
      correctAnswer: 0,
      explanationUzbek:
        "Ijtimoiy qoida, qonun yoki tashkiliy tartib-qoidani bildirishda '〜ことになっている' (shunday tartib belgilangan) ishlatiladi.",
    },
    {
      id: 313,
      section: 'knowledge',
      questionText: '正しい文を作ってください：\n困難な 状況でも、＿＿ ＿＿ ★ ＿＿ 努力した。',
      options: ['決して', '目標に向かって', '諦めることなく', '最後まで'],
      correctAnswer: 2,
      explanationUzbek:
        "To'g'ri tartib: 困難な 状況でも、[決して] [目標に向かって] [★ 諦めることなく] [最後まで] 努力した -> 諦めることなく (3-variant).",
    },
    {
      id: 314,
      section: 'reading',
      passageText:
        '環境保護の観点から、プラスチックごみの削減が世界的な課題となっている。レジ袋の有料化以降、エコバッグを持参する消費者は確実に増えたが、容器包装プラスチックの総量は依然として高水準にある。単に消費者の意識に頼るだけでなく、企業側が分解可能な代替素材を積極的に採用することが不可欠である。',
      questionText: '筆者が最も強調したい点はどれですか？',
      options: [
        'レジ袋の価格をもっと引き上げるべきだ',
        '消費者の努力だけに頼らず、企業が代替素材を採用すべきだ',
        'プラスチック製品の製造を完全に禁止すべきだ',
        'エコバッグの普及率をさらに高める必要がある',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Muallif: 'iste'molchilar ongi bilangina cheklanmay, korxonalar parchalanishi mumkin bo'lgan muqobil materiallarni qo'llashi shart' deb ta'kidlaydi.",
    },
    {
      id: 315,
      section: 'reading',
      passageText:
        '時間を有効に使うためには、「緊急度」と「重要度」の2つの軸でタスクを整理するとよい。多くの人は「緊急だが重要ではないこと」に追われがちだが、自己成長につながるのは「緊急ではないが重要なこと」である。毎日の読書や健康管理がその典型例だ。',
      questionText: '自己成長にとって最も重要だとされているのはどのようなことですか？',
      options: [
        '緊急かつ重要なこと',
        '緊急だが重要ではないこと',
        '緊急ではないが重要なこと',
        '緊急でも重要でもないこと',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda o'sish uchun eng muhimi: 'kinkyuu dewa nai ga juuyou na koto' (shoshilinch bo'lmagan, lekin muhim ishlar) deb aniq aytilgan.",
    },
    {
      id: 316,
      section: 'reading',
      passageText:
        'テレワークの普及により通勤負担は激減したが、オフィスでの偶然の立ち話や雑談から生まれていたクリエイティブな発想やチームの一体感が薄れるという弊害も生じている。テキストチャットや画面越しの定例会議だけでは相手の微妙な感情の機微を察知しにくいため、週に数日の出社日を設けたり、オンライン上で気軽に雑談できる場を意図的に設ける企業が増えている。',
      questionText: '文章によると、テレワークにおいてどのような課題が生じていますか？',
      options: [
        '通勤時間が以前より長くなってしまったこと',
        '業務の生産性が完全にゼロになってしまうこと',
        '偶発的な雑談から生まれるアイデアや一体感が減少すること',
        '社員同士の給与格差が広がること',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda tasvirlanishicha, teleworkning asosiy muammosi — tasodifiy suhbatlardan tug'iladigan ijodiy g'oyalar va jamoaviy birdamlikning susayishidir.",
    },
    {
      id: 317,
      section: 'reading',
      passageText:
        '現代はインターネット上で膨大な要約や解説動画を即座に閲覧できる時代である。しかし、一冊の書物を最初から最後までじっくりと読み通す経験には、それに代えがたい独自の価値が存在する。著者が長い論理の筋道をどのように組み立て、どのような葛藤を経て結論に至ったのかを追体験することによってのみ、表面的な知識にとどまらない「本質を見抜く深い洞察力」が培われるからである。',
      questionText: '筆者が考える「1冊の本を読み通すことの最大の価値」は何ですか？',
      options: [
        '短時間で大量のトリビアを記憶できること',
        '著者の思考過程を追体験し、本質を見抜く深い洞察力を養えること',
        '最新の流行やトレンドをいち早く知ること',
        '要約動画を作るスキルが身につくこと',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Muallif kitobni to'liq o'qish orqali muallifning fikrlash zanjirini bosib o'tish va chuqur mohiyatni tushunish ko'nikmasi shakllanishini ta'kidlaydi.",
    },
    {
      id: 318,
      section: 'reading',
      passageText:
        '【クラウドサービス利用規約および料金改定のお知らせ】\n平素は当ストレージサービスをご利用いただき、誠にありがとうございます。\nこのたび、最新のセキュリティ基盤強化およびAI検索機能の標準搭載に伴い、2026年10月1日より月額利用料を現行の1,200円から1,500円に改定いたします。\nなお、現行プランをご契約中のお客様は、9月30日までに1年契約の自動更新をお申し込みいただくことで、向こう1年間は旧料金（月額1,200円）のまま新機能をご利用いただけます。',
      questionText: '現行の利用者が来年も旧料金のまま利用し続けるにはどうすればよいですか？',
      options: [
        '何もしないで待っていればよい',
        '9月30日までに1年契約の自動更新を申し込む',
        'セキュリティ機能を無効にする',
        '10月1日以降に新規アカウントを作成する',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "E'lon shartida aytilgan: '9月30日までに1年契約の自動更新をお申し込みいただくことで、向こう1年間は旧料金（月額1,200円）のまま新機能をご利用いただけます'.",
    },
    {
      id: 319,
      section: 'reading',
      passageText:
        '【コワーキングスペース『MIRAI』料金プランのご案内】\n・デイタイム会員（平日 9:00〜18:00利用可能）：月額15,000円\n・ナイト＆ホリデー会員（平日 18:00〜23:00 および 土日祝日終日）：月額12,000円\n・フルタイム会員（24時間365日利用可能、登記利用可）：月額28,000円\n※全プランでフリードリンク、高速Wi-Fi、通話専用ブースが無料利用可能。会議室利用は1時間あたり別途1,000円（フルタイム会員は月3時間まで無料）。',
      questionText:
        '平日夜（19時以降）と日曜日を中心に利用し、費用を最も抑えたい人に最適なプランはどれですか？',
      options: ['デイタイム会員', 'ナイト＆ホリデー会員', 'フルタイム会員', '会議室専用プラン'],
      correctAnswer: 1,
      explanationUzbek:
        "Ish kunlari kechasi (18:00 dan keyin) va dam olish kunlari foydalanuvchilar uchun eng arzon va mos tarif — 'ナイト＆ホリデー会員' (oyiga 12,000 yen).",
    },
    {
      id: 320,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      script:
        '会社で上司と部下が話しています。部下はこれから何を修正しますか？\n上司：山田さん、提出してもらった企画書、大筋はいいんだけど、予算のグラフが去年のデータのままだよ。\n部下：あ、大変失礼しました！すぐに最新のデータに差し替えます。\n上司：うん、それとスケジュールのフォントも統一しておいてね。',
      questionText: '部下はまず何を修正しますか？',
      options: ['企画書のタイトル', '予算のグラフのデータ', '全体の構成', '参加者のリスト'],
      correctAnswer: 1,
      explanationUzbek:
        "Xodim o'tgan yilgi eski byudjet grafik ma'lumotlarini eng so'nggisiga almashtirishini aytadi.",
    },
    {
      id: 321,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      script:
        '留学生と先生が相談しています。留学生は何のビザを申請しなければなりませんか？\n学生：先生、卒業後も日本で就職活動を続けたいのですが。\n先生：それなら、「特定活動ビザ」への変更手続きが必要になりますよ。推薦状を準備しましょう。',
      questionText: '留学生が申請するビザの種類は何ですか？',
      options: ['留学ビザ', '特定活動ビザ', '就労ビザ', '観光ビザ'],
      correctAnswer: 1,
      explanationUzbek:
        "O'qituvchi o'qishni tugatgach ish qidirish uchun 'Tokutei Katsudou Visa' kerakligini tushuntiradi.",
    },
    {
      id: 322,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      script:
        '会社で男性社員と女性上司が話しています。男性社員は今日中に何を終わらせなければなりませんか？\n男：課長、来週のセミナーの発表スライドと、取引先へ送る見積書の作成があるのですが、どちらを優先しましょうか？\n上司：スライドは明日一緒に見直すから、今日はまず見積書を直ちに完成させて先方にメール送信しておいて。\n男：承知しました。見積書を最優先で片付けます。',
      questionText: '男性社員は 今日中に 何を 終わらせますか？',
      options: [
        'セミナーの発表スライド',
        '取引先への見積書の作成と送信',
        '会議室の手配',
        '出張の精算手続き',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Boshliq taqdimot slaydlarini ertaga birga ko'rishlarini, bugun esa kechiktirmasdan hisob-faktura (見積書) ni yuborishni buyuradi.",
    },
    {
      id: 323,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      script:
        'デパートの館内放送を聞いています。迷子のお子様の特徴は何ですか？\n放送：お客様にお呼び出しを申し上げます。4階おもちゃ売り場にて、4歳くらいの男の子がお連れ様をお探しです。青い長袖Tシャツに、黒い半ズボンを着用し、赤い帽子をかぶっております。お心当たりのあるお客様は、1階案内所までお越しください。',
      questionText: '迷子の男の子が 着ている 服装の 特徴は どれですか？',
      options: [
        '黄色いシャツに白いズボン',
        '青い長袖Tシャツに黒い半ズボン、赤い帽子',
        '緑のセーターにジーンズ',
        '白いシャツに茶色い帽子',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "E'londa aniq aytildi: '青い長袖Tシャツに、黒い半ズボンを着用し、赤い帽子をかぶっております'.",
    },
    {
      id: 324,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      script:
        'ホテルのフロントで客と係員が話しています。客は何時の朝食券をもらいましたか？\n係員：ご朝食は7時、8時、9時の時間指定制となっておりますが、何時がよろしいでしょうか？\n客：明日は朝8時半にチェックアウトして出発したいんです。\n係員：それでしたら、7時からの回が最もゆっくり召し上がっていただけます。\n客：わかりました。では7時でお願いします。',
      questionText: '客は 何時の 朝食券を もらいましたか？',
      options: ['7時', '8時', '8時半', '9時'],
      correctAnswer: 0,
      explanationUzbek:
        "Mijoz 8:30 da jo'nab ketishi kerak bo'lgani sababli soat 7 dagi nonushta vaqtini tanlaydi.",
    },
    {
      id: 325,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      script:
        'ラジオで専門家が節電について話しています。家庭で最も簡単に効果が出る節電対策は何ですか？\n専門家：みなさんエアコンの設定温度を気にされますが、実は長期間使っていない家電製品の待機電力を減らすこと、特にスイッチ付きタップでこまめに電源を切ることが、生活の快適さを損なわずに最も効果的な節電になります。',
      questionText: '専門家が 勧めている 最も 手軽で 効果的な 節電対策は何ですか？',
      options: [
        'エアコンを一切つけないこと',
        'スイッチ付きタップなどを活用して待機電力を切ること',
        '夜間は照明をすべて消すこと',
        '冷蔵庫の電源を定期的に抜くこと',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Mutaxassis maishiy texnikalarning kutish rejimidagi quvvatini o'chirish (スイッチ付きタップ orqali) eng samarali ekanligini ta'kidlaydi.",
    },
  ],

  // ==========================================
  // === N2 & N1 MOCK EXAMS ===================
  // ==========================================
  N2: [
    // Language Knowledge
    {
      id: 401,
      section: 'knowledge',
      questionText: '景気の 低迷に（　）、多くの 企業が 採用人数を 削減した。',
      options: ['ともなって', '関わらず', '限らず', 'おいて'],
      correctAnswer: 0,
      explanationUzbek:
        "'~ni tomonatte' (biror narsa sodir bo'lishi bilan birga, mutanosib ravishda) ma'nosini beradi.",
    },
    {
      id: 402,
      section: 'knowledge',
      questionText: 'いくら 経験が 豊富だからと（　）、過信は 禁物だ。',
      options: ['いっても', 'いったら', 'いえば', 'いって'],
      correctAnswer: 0,
      explanationUzbek:
        "'~kara to itte / to ittemo' (garchi ... bo'lgan taqdirda ham) qolipi to'g'ri keladi.",
    },
    {
      id: 403,
      section: 'knowledge',
      questionText: '新商品の 発売を（　）、大規模な キャンペーンを 展開する。',
      options: ['めぐって', '皮切りに', '契機に', 'よそに'],
      correctAnswer: 1,
      explanationUzbek:
        "'~o kawakiri ni' biror ketma-ket hodisalar zanjirining boshlanishi va startini ifodalaydi.",
    },
    {
      id: 404,
      section: 'knowledge',
      questionText: 'あの 作家の 新作は、期待を（　）素晴らしい 傑作だった。',
      options: ['通して', '裏切らない', 'もとにした', 'めざした'],
      correctAnswer: 1,
      explanationUzbek:
        "'kitai o uragiranai' (kutilmalarni puchga chiqarmagan, ishonchni oqlagan) iborasi qo'llaniladi.",
    },
    // Reading Comprehension
    {
      id: 405,
      section: 'reading',
      passageText:
        'テレワークの普及により、労働者は通勤ストレスから解放された一方で、業務と私生活の境界が曖昧になるという弊害が指摘されている。常時接続された環境下では、終業後も連絡への対応を迫られ、慢性的な疲労蓄積を招く恐れがある。この問題に対処すべく、諸外国では「つながらない権利」を法制化する動きが加速している。日本においても、単なる柔軟な働き方の推進にとどまらず、労働者の心身の健康を守る明確なルール作りが喫緊の課題といえよう。',
      questionText: '筆者が日本社会に求めていることは何ですか？',
      options: [
        'テレワークを廃止し、全員がオフィスに出社すること',
        '終業後の連絡を規制するなど、労働者の健康を守る明確なルールを作ること',
        '諸外国と同じ労働法をそのまま無条件に導入すること',
        'IT機器の利用時間を個人が自己責任で管理すること',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Muallif ish vaqtidan keyin aloqaga chiqmaslik huquqi kabi aniq himoya qoidalari zarurligini ta'kidlaydi.",
    },
    {
      id: 406,
      section: 'reading',
      passageText:
        '人工知能（AI）の急速な進化は、定型的な業務のみならず、創造性を要する分野にまで影響を及ぼし始めている。しかし、AIが生成する作品は過去の厖大なデータの再構成に過ぎず、人間特有の「個人的な体験や葛藤から生じる独自性」を代替することは原理的に不可能である。したがって、人間はAIを競合相手とみなすのではなく、自らの創造性を拡張するための道具として共生を図るべきである。',
      questionText: '筆者によると、人間にしか生み出せないものとは何ですか？',
      options: [
        '膨大なデータに基づく正確な分析結果',
        '個人的な体験や葛藤から生じる独自性',
        '短時間で大量に作成できる絵画や文章',
        '過去の様式を忠実に模倣した作品',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Matnda odamning o'z shaxsiy kechinmalari va ziddiyatlaridan kelib chiquvchi o'ziga xoslikni (独自性) sun'iy intellekt o'rnini bosa olmasligi yozilgan.",
    },
    // Listening Comprehension
    {
      id: 407,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      script:
        'テレビで経済アナリストが話しています。今年度の個人消費の特徴は何ですか？\nアナリスト：今年度は物価高の影響で生活必需品の節約志向が強まる一方、旅行やコンサートなど体験型の消費には惜しみなく支出する傾向が見られます。二極化が顕著になっています。',
      questionText: '今年度の個人消費の特徴として述べられているのはどれですか？',
      options: [
        'すべての分野で消費が均等に落ち込んでいる',
        '日用品は節約するが、体験型のことにはお金を使うという二極化',
        '高級ブランド品の売上だけが伸びている',
        'オンラインショッピングの利用が激減している',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Iste'molchilar ro'zg'or mahsulotlarida tejab, sayohat va konsert kabi tajriba (taiken) sohalariga pul sarflamoqda (qutblanish).",
    },
    {
      id: 408,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      script:
        'セミナーで講師が話しています。チームの生産性を高めるために最も重要な要素は何ですか？\n講師：心理的安全性の確保です。失敗を恐れず率直に意見を言える環境こそが、イノベーションの土台となります。',
      questionText: 'チームの生産性を高めるために最重要とされているものは何ですか？',
      options: ['厳格な上下関係', '心理的安全性', '労働時間の延長', '成果主義による競争'],
      correctAnswer: 1,
      explanationUzbek:
        'Spiker jamoada psixologik xavfsizlik (shinriteki anzensei) eng asosiy omil ekanligini aytadi.',
    },
  ],

  // ==========================================
  // === N1 MOCK EXAM =========================
  // ==========================================
  N1: [
    // Language Knowledge
    {
      id: 501,
      section: 'knowledge',
      questionText: '国家の 安全保障に 関わる 重大な 秘密を（　）漏らすことは 許されない。',
      options: ['たりとも', 'だに', 'すら', 'まじき'],
      correctAnswer: 0,
      explanationUzbek:
        "'~taritomo (...nai)' qolipi 'hatto zarracha ham' degan kuchli inkor ma'nosini bildiradi: ichi-nichi taritomo / sukoshi taritomo.",
    },
    {
      id: 502,
      section: 'knowledge',
      questionText: '親友の 突然の 訃報に、悲しみを（　）ことが できなかった。',
      options: ['禁じ得ない', '禁じざる', '禁じかねない', '禁じ得る'],
      correctAnswer: 0,
      explanationUzbek:
        "'~kinji enai' hissiyotlarni bosib tura olmaslik, tiyib bo'lmas qayg'uni bildiradi: kanashimi o kinji enai.",
    },
    {
      id: 503,
      section: 'knowledge',
      questionText: '誠心誠意の 謝罪が あって（　）、初めて 和解への 道が 開かれる。',
      options: ['こそあれ', 'ならでは', 'をおいて', 'なりに'],
      correctAnswer: 0,
      explanationUzbek:
        "'A atte koso / koso are' ta'kid qolipi: chin dildan uzr bo'lgandagina yo'l ochiladi.",
    },
    {
      id: 504,
      section: 'knowledge',
      questionText: '公職に ある者が、私利私欲を 肥やすなど 断じて（　）行為だ。',
      options: ['あるまじき', 'ありがちな', 'あるべき', 'あり得る'],
      correctAnswer: 0,
      explanationUzbek:
        "'~aru majiki' qolipi kasbiy yoki mavqe nuqtai nazaridan 'aslo yo'l qo'yib bo'lmaydigan' ma'nosini anglatadi.",
    },
    // Reading Comprehension
    {
      id: 505,
      section: 'reading',
      passageText:
        '近代合理主義の進展は、自然を人間が支配・利用すべき客体として捉える二元論的世界観を定着させた。この知のパラダイムは産業革命を駆動し、物質的繁栄をもたらしたが、同時に生態系の深刻な破壊と人間自身の疎外という未曽有の危機を胚胎していた。今求められているのは、人間を自然の支配者ではなく、生命圏の不可分な一環として再定位する思想的転回である。東洋の伝統思想に見られる「天人合一」の境地は、持続可能な文明を再構築する上で、極めて示唆に富む洞察を提供している。',
      questionText: '筆者の主張の核心として最も適切なものはどれですか？',
      options: [
        '近代合理主義による産業革命の成果を全面的に放棄すべきだ',
        '自然を支配の対象とみなす思想を改め、自然と共生する世界観へ転換すべきだ',
        '東洋思想は西洋の科学技術と一切相容れないものである',
        '生態系の破壊は科学技術のさらなる進歩によってのみ解決できる',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Muallif inson tabiat ustidan hukmronlik qilishi haqidagi qarashdan voz kechib, tabiat bilan uyg'unlikdagi falsafaga o'tish lozimligini ta'kidlaydi.",
    },
    {
      id: 506,
      section: 'reading',
      passageText:
        '古典を読む意義は、単なる過去の知識の蓄積にあるのではない。同時代の価値観に無批判に同調しがちな我々の思考の偏りを、異なる時代精神の鏡に照らし出すことによって自覚化させ、相対化する点にこそある。古典との対話は、自明視されている現代の前提を疑う批判的思考の契機となるのである。',
      questionText: '筆者が考える「古典を読む最大の意義」とは何ですか？',
      options: [
        '過去の歴史的事実を暗記し、教養を高めること',
        '現代の価値観を絶対的な基準として過去の誤りを批判すること',
        '自らの時代の前提を相対化し、批判的に省察する契機を得ること',
        '古風な文体を模倣して美しい文章を書けるようになること',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "Klassik asarlarni o'qish orqali zamonamiz qoliplaridan chiqib, tanqidiy fikrlash (批判的思考) imkoniyati paydo bo'ladi.",
    },
    // Listening Comprehension
    {
      id: 507,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      script:
        '大学の公開講座で教授が話しています。科学哲学においてパラダイムシフトが起こる契機とは何ですか？\n教授：既存の理論的枠組みでは到底説明のつかない「アノマリー（変則事象）」が累積し、もはや無視できないレベルに達したとき、根本的な転換が促されるのです。',
      questionText: 'パラダイムシフトが起こる根本的な契機として述べられているのはどれですか？',
      options: [
        '学会の指導者が交代したとき',
        '既存の理論で説明できない変則事象が累積したとき',
        '実験機器の予算が大幅に増額されたとき',
        '社会一般の関心が科学から離れたとき',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Professor mavjud nazariyalar tushuntirib bera olmaydigan anomaliyalar to'planib ketganda paradigma o'zgarishini aytadi.",
    },
    {
      id: 508,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      script:
        '国際シンポジウムで言語学者が話しています。言語の多様性を保持すべき理由は何ですか？\n言語学者：言語の消滅は、単なる語彙の喪失にとどまりません。その言語共同体が何世代にもわたって培ってきた独自の認識体系や世界観そのものが永遠に失われることを意味するからです。',
      questionText: '言語学者が言語の多様性を重要視する最大の理由は何ですか？',
      options: [
        '観光産業の発展に直結するから',
        '独自の認識体系や世界観の喪失を防ぐため',
        '外国語学習者の教材を増やすため',
        '翻訳技術の精度を測る指標になるから',
      ],
      correctAnswer: 1,
      explanationUzbek:
        "Tilning yo'qolishi shu xalqning asrlar davomida shakllangan o'ziga xos dunyoqarashi va idrok tizimining yo'qolishidir.",
    },
  ],
};
