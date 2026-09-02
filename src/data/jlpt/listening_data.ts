export interface JlptListeningQuestion {
  id: number;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  type: 'task' | 'point' | 'quick'; // 課題理解, ポイント理解, 即時応答
  audioUrl: string;
  script: string;
  questionText: string;
  options: string[];
  correctAnswer: number; // index of options (0-indexed)
  explanationUzbek: string;
}

export const JLPT_LISTENING_QUESTIONS: JlptListeningQuestion[] = [
  // ==========================================
  // === N5 LISTENING =========================
  // ==========================================
  {
    id: 1,
    level: 'N5',
    type: 'task',
    audioUrl: '',
    script:
      '男の人と女の人が話しています。男の人はこれから何をしますか？\n男：あ、雨が降ってきましたね。\n女：そうですね。傘を持っていますか？\n男：いいえ、持っていません。コンビニで買ってきます。\n女：あ、私の傘を貸しましょうか？車の中にありますから。\n男：ありがとうございます！じゃあ、お願いします。',
    questionText: '男の人はこれから何をしますか？ (Erkak kishi endi nima qiladi?)',
    options: [
      'コンビニで傘を買います (Konvinidan soyabon sotib oladi)',
      '女の人の車から傘を持ってきます (Ayolning mashinasidan soyabon olib keladi)',
      "雨の中を歩きます (Yomg'irda yuradi)",
      "店の中で待ちます (Do'kon ichida kutadi)",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Erkak kishi soyaboni yo'qligini aytib do'kondan sotib olmoqchi bo'ladi, ammo ayol mashinasidagi zaxira soyabonini berib turishini aytganda erkak buni minnatdorchilik bilan qabul qiladi. Demak, u ayolning mashinasidan soyabonni oladi.",
  },
  {
    id: 2,
    level: 'N5',
    type: 'quick',
    audioUrl: '',
    script:
      '駅で男の人が駅員に聞いています。\n男：すみません、東京行きの電車は何番線ですか？\n駅員：3番線ですよ。もうすぐ来ますよ。',
    questionText: "東京行きの電車は何番線ですか？ (Tokyoga boradigan poyezd nechanchi yo'lda?)",
    options: ["1番線 (1-yo'l)", "2番線 (2-yo'l)", "3番線 (3-yo'l)", "4番線 (4-yo'l)"],
    correctAnswer: 2,
    explanationUzbek: "Vokzal xodimi aniq qilib '3番線ですよ' (3-yo'l) deb javob beradi.",
  },
  {
    id: 3,
    level: 'N5',
    type: 'point',
    audioUrl: '',
    script:
      '学校で先生と学生が話しています。テストは何曜日ですか？\n学生：先生、日本語のテストは金曜日ですか？\n先生：いいえ、金曜日は祝日でお休みですから、木曜日に行いますよ。\n学生：わかりました。木曜日ですね。',
    questionText: '日本語のテストは何曜日ですか？ (Yapon tili testi haftaning qaysi kunida?)',
    options: ['水曜日 (Chorshanba)', '木曜日 (Payshanba)', '金曜日 (Juma)', '土曜日 (Shanba)'],
    correctAnswer: 1,
    explanationUzbek:
      "O'qituvchi juma kuni bayram bo'lgani sababli, test payshanba (木曜日) kuni o'tkazilishini tushuntiradi.",
  },

  // ==========================================
  // === N4 LISTENING =========================
  // ==========================================
  {
    id: 4,
    level: 'N4',
    type: 'point',
    audioUrl: '',
    script:
      '女の学生と男の学生が話しています。男の学生はどうして昨日学校を休みましたか？\n女：山田くん、昨日はどうして休んだの？風邪？\n男：ううん、風邪じゃなくて。実は、自転車が途中で壊れちゃって、遅刻しそうだったから家に帰ったんだ。\n女：えー、それだけで休んだの？\n男：うん、テストもない日だったしね。',
    questionText:
      "男の学生はどうして昨日学校を休みましたか？ (O'quvchi bola kecha nega maktabga kelmadi?)",
    options: [
      '風邪をひいたからです (Shomollab qolgani uchun)',
      '自転車が壊れたからです (Velosipedi buzilib qolgani uchun)',
      "テストがなかったからです (Imtihon bo'lmaganligi uchun)",
      '寝坊したからです (Uxlab qolgani uchun)',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Erkak talaba shamollagani yo'q, balki yo'lda velosipedi buzilib qolgani sababli darsga kelmay uyiga qaytib ketganligini aytadi.",
  },
  {
    id: 5,
    level: 'N4',
    type: 'task',
    audioUrl: '',
    script:
      '会社で女の人と男の人が話しています。男の人はまず何をコピーしますか？\n女：田中さん、会議の準備を手伝ってくれませんか？\n男：はい、何をしましょうか？\n女：まずこの企画書を10部コピーしてください。それからスケジュールの表もお願いします。\n男：わかりました。企画書ですね。',
    questionText:
      '男の人はまず何をコピーしますか？ (Erkak kishi birinchi navbatda nimani nusxa qiladi?)',
    options: [
      'スケジュールの表 (Reja jadvalini)',
      '企画書 (Loyiha taklifnomasini)',
      "参加者名簿 (Qatnashuvchilar ro'yxatini)",
      "アンケート用紙 (So'rovnoma varag'ini)",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ayol kishi 'まずこの企画書を10部コピーしてください' (avval loyiha rejasidan 10 nusxa oling) deydi. Demak, u birinchi navbatda企画書 ni nusxa qiladi.",
  },

  // ==========================================
  // === N3 LISTENING =========================
  // ==========================================
  {
    id: 6,
    level: 'N3',
    type: 'quick',
    audioUrl: '',
    script:
      '男の人が女の人に話しかけています。\n男：すみません、この近くに郵便局はありますか？\n女：あ、それなら、この道をまっすぐ行って、最初の角を右に曲がると左側にありますよ。',
    questionText: '郵便局はどこにありますか？ (Pochta qayerda joylashgan?)',
    options: [
      '最初の角を左に曲がったところ (Birinchi chorrahadan chapga burilganda)',
      "この道をまっすぐ行って、最初の角を右に曲がった左側 (Shu ko'chadan to'g'ri borib, birinchi chorrahadan o'ngga burilganda chap tomonda)",
      "この道の右側 (Shu ko'chaning o'ng tomonida)",
      'コンビニの隣 (Konvinining yonida)',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ayol kishi pochta manzilini: ko'chadan to'g'ri borib, birinchi chorrahadan o'ngga burilganda chap tomonda joylashganligini tushuntirdi.",
  },
  {
    id: 7,
    level: 'N3',
    type: 'task',
    audioUrl: '',
    script:
      'レストランで店長とアルバイトの人が話しています。アルバイトの人はこれから何をしますか？\n店長：鈴木さん、テーブルの片付け終わった？\n鈴木：はい、終わりました。次はお皿を洗いましょうか？\n店長：お皿は後でいいから、先に予約のお客様の席を奥の個室に準備しておいてくれる？もうすぐいらっしゃる時間だから。\n鈴木：かしこまりました。すぐ準備します。',
    questionText: '鈴木さんはこれから何をしますか？ (Suzuki endi nima qiladi?)',
    options: [
      'お皿を洗う (Idishlarni yuvadi)',
      '予約の席を準備する (Bron qilingan xonadagi joyni tayyorlaydi)',
      '新しい料理を作る (Yangi taom pishiradi)',
      "店の看板を出す (Do'kon lavhasini chiqaradi)",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Boshliq idishlarni yuvishni keyinga qoldirib, eng avvalo bron qilib qo'yilgan mijozlarning xonasidagi joyni tayyorlashni buyuradi.",
  },

  // ==========================================
  // === N2 LISTENING =========================
  // ==========================================
  {
    id: 8,
    level: 'N2',
    type: 'task',
    audioUrl: '',
    script:
      '会社で課長と女性社員が話しています。女性社員はこれからまず何をしますか？\n課長：佐藤さん、明日の新商品発表会の資料の準備はどうなっていますか？\n佐藤：はい、スライドの印刷はすべて完了しました。会場のプロジェクターの確認も済んでいます。\n課長：そうか。じゃあ、参加者の名簿の最新版を印刷して、受付に届けておいてくれるかい？\n佐藤：承知いたしました。すぐに名簿を確認して印刷します。',
    questionText:
      '女性社員はこれからまず何をしますか？ (Xodim ayol endi birinchi navbatda nima qiladi?)',
    options: [
      'スライドを印刷する (Slaydlarni chop etadi)',
      'プロジェクターを確認する (Proyektorni tekshiradi)',
      "参加者名簿の最新版を印刷して届ける (Ishtirokchilar ro'yxatining so'nggi nusxasini chop etib topshiradi)",
      '新商品のサンプルを用意する (Yangi mahsulot namunalarini tayyorlaydi)',
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Slaydlar va proyektor tayyor bo'lgani sababli, bo'lim boshlig'i qatnashuvchilar ro'yxatining so'nggi nusxasini chop etib qabulxonaga olib borishni so'radi va ayol buni darhol bajarishini bildirdi.",
  },
  {
    id: 9,
    level: 'N2',
    type: 'point',
    audioUrl: '',
    script:
      '大学の就職支援セミナーで講師が話しています。講師は面接で最も重視されるのは何だと言っていますか？\n講師：面接では、資格の多さや話の流暢さももちろんプラスになりますが、それ以上に採用担当者が注目しているのは「相手の質問の意図を正確に捉えて端的に答える力」です。どんなに素晴らしい経歴があっても、質問とずれた回答をしていては信頼を得られません。',
    questionText:
      "講師は面接で最も重視されるのは何だと言っていますか？ (Ma'ruzachi suhbatda eng muhim narsa nima deb ta'kidlamoqda?)",
    options: [
      '取得している資格の数 (Sertifikatlar soni)',
      "途切れずに長く話す流暢さ (To'xtovsiz uzoq gapirish)",
      '質問の意図を理解して的確に答える力 (Savol maqsadini anglab aniq javob bera olish)',
      '有名大学での成績 (Nufuzli universitetdagi baholar)',
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Ma'ruzachi suhbatda eng ko'p e'tibor qaratiladigan jihat suhbatdoshning savol niyatini to'g'ri tushunib, ixcham va aniq javob berish qobiliyati ekanini aytadi.",
  },

  // ==========================================
  // === N1 LISTENING =========================
  // ==========================================
  {
    id: 10,
    level: 'N1',
    type: 'point',
    audioUrl: '',
    script:
      'ラジオで経済評論家が話しています。評論家は今年度の個人消費が伸び悩んでいる最大の原因は何だと言っていますか？\n評論家：今年度の景気動向を見ますと、雇用の改善は見られるものの、実質賃金の伸びが物価の上昇に追いついていないことが、消費者の節約志向に拍車をかけています。将来の社会保障に対する不安も背景にありますが、やはり直接的には購買力の低下が最大の要因と分析されます。',
    questionText:
      "今年度の個人消費が伸び悩んでいる最大の原因は何ですか？ (Shaxsiy iste'mol o'smayotganining eng asosiy sababi nima?)",
    options: [
      '失業率が上昇したこと (Ishsizlik darajasi oshgani)',
      '実質賃金の伸びが物価高に追いつかず購買力が低下したこと (Haqiqiy oyliklar inflyatsiyaga yetmay xarid qobiliyati pasaygani)',
      '新製品の流通が滞っていること (Yangi mahsulotlar yetishmovchiligi)',
      '若者の人口が急減したこと (Yoshlar sonining keskin kamayishi)',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ekspertning ta'kidlashicha, bandlik yaxshilangan bo'lsa-da, real ish haqining narxlar o'sishidan orqada qolishi va xarid qobiliyatining pasayishi iste'mol o'smasligining bevosita asosiy sababidir.",
  },
  {
    id: 11,
    level: 'N1',
    type: 'task',
    audioUrl: '',
    script:
      'シンポジウムの運営会議でリーダーが話しています。メンバーは開会までに何を完了させなければなりませんか？\nリーダー：皆さん、準備ご苦労様です。来場者向けのパンフレット配布と誘導動線の確保は整いました。ただ、登壇される海外招聘教授の同時通訳レシーバーの動作確認が一部未完了のままです。開会まであと30分しかありませんので、全端末の音声テストを最優先で完了させてください。\nメンバー：承知しました。直ちに全員で点検します。',
    questionText:
      "メンバーは開会までに最優先で何をしなければなりませんか？ (A'zolar anjuman ochilishigacha eng birinchi navbatda nimani yakunlashlari kerak?)",
    options: [
      '来場者パンフレットの印刷 (Broshyuralarni chop etish)',
      "誘導動線の再設計 (Yo'nalish xaritasini qayta tuzish)",
      '同時通訳レシーバーの全数動作確認 (Sinxron tarjima qabul qilgichlarining barchasini tekshirish)',
      '海外教授の宿泊ホテルの予約 (Mehmonxona band qilish)',
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Lider ochilishga 30 daqiqa qolganini va sinxron tarjima uskunalarining (同時通訳レシーバー) to'liq ovoz sinovidan o'tishini eng ustuvor vazifa deb topshirdi.",
  },
];
