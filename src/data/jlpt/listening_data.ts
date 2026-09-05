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
  // ==========================================
  // === EXPANDED LISTENING QUESTIONS =========
  // ==========================================
  // --- N5 EXPANDED ---
  {
    id: 12,
    level: 'N5',
    type: 'task',
    audioUrl: '',
    script:
      '店で男の人と店員が話しています。男の人はどのシャツを買いますか？\n男：すみません、この白いシャツのMサイズはありますか？\n店員：申し訳ありません、白のMは売り切れてしまいました。青のMならございます。\n男：そうですか。じゃあ、青のMをお願いします。',
    questionText: "男の人はどのシャツを買いますか？ (Erkak kishi qaysi ko'ylakni sotib oladi?)",
    options: [
      "白のMサイズ (Oq M o'lcham)",
      "青のMサイズ (Ko'k M o'lcham)",
      "白のLサイズ (Oq L o'lcham)",
      "黒のSサイズ (Qora S o'lcham)",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Oq M o'lcham qolmagani uchun xaridor sotuvchi taklif qilgan ko'k rangli M o'lchamdagi ko'ylakni sotib oladi.",
  },
  {
    id: 13,
    level: 'N5',
    type: 'quick',
    audioUrl: '',
    script:
      '友達の家で。友達がお茶を出してくれました。何と言いますか？\n男：お茶をどうぞ。\nあなた：あ、（　）',
    questionText: '何と言いますか？ (Nima deb javob berasiz?)',
    options: [
      'いただきます (Qani, marhamat / Ichaman)',
      "ごちそうさまでした (Rahmat, to'ydim)",
      'いってきます (Ketdim)',
      'ただいま (Men qaytdim)',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Ichimlik yoki taom taqdim etilganda boshlashdan oldin 'いただきます' (itadakimasu) aytiladi.",
  },

  // --- N4 EXPANDED ---
  {
    id: 14,
    level: 'N4',
    type: 'task',
    audioUrl: '',
    script:
      '病院の受付で女の人と係の人が話しています。女の人はまずどこへ行きますか？\n係員：初診ですね。まずあちらの窓口で問診票を記入して出してください。その後、2階の内科の前でお待ちください。\n女：わかりました。問診票ですね。',
    questionText: '女の人はまず何をしますか？ (Ayol kishi avval nima qiladi?)',
    options: [
      '2階の内科に行く (2-qavatdagi terapiyaga chiqadi)',
      "問診票を記入して出す (Anketa savolnomasini to'ldirib topshiradi)",
      '薬局で薬をもらう (Dorixonadan dori oladi)',
      "会計を済ませる (To'lovni amalga oshiradi)",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Xodim avval qabul oynasida savolnomani (問診票) to'ldirib berishni, keyin 2-qavatga chiqishni aytadi.",
  },
  {
    id: 15,
    level: 'N4',
    type: 'quick',
    audioUrl: '',
    script:
      '会社で上司に書類の提出を頼まれました。何と答えますか？\n上司：佐藤さん、この報告書を今日中にまとめてもらえるかい？\nあなた：（　）',
    questionText: '何と答えますか？ (Nima deb javob berasiz?)',
    options: [
      'かしこまりました。すぐに取りかかります (Tushundim, darhol boshlayman)',
      'どういたしまして (Arzimaydi)',
      'お疲れ様でした (Charchamang)',
      'ごめんなさい (Kechirasiz)',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Boshliqning rasmiy topshirig'iga xodim xushmuomalalik bilan 'かしこまりました' (kashikomarimashita) deb javob beradi.",
  },

  // --- N3 EXPANDED ---
  {
    id: 16,
    level: 'N3',
    type: 'point',
    audioUrl: '',
    script:
      '留学生センターで職員が説明しています。奨学金の申請条件で変更されたのは何ですか？\n職員：今年度から申請条件が一部変更されました。成績基準のGPA3.0以上という点は去年と同じですが、アルバイトの週当たり就業時間の上限が、これまでの28時間から20時間以内に制限されることになりました。',
    questionText: '奨学金の申請条件で新しく変更された点は何ですか？',
    options: [
      '成績基準がGPA3.5に上がったこと',
      'アルバイトの週就業時間の上限が20時間以内になったこと',
      '申請の締切日が1ヶ月早まったこと',
      '面接試験が廃止されたこと',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Xodim baholar o'zgarmagani, ammo yarim kunlik ish vaqti cheklovi haftasiga 28 soatdan 20 soatga tushirilganini ta'kidlaydi.",
  },
  {
    id: 17,
    level: 'N3',
    type: 'task',
    audioUrl: '',
    script:
      'オフィスで同僚2人が話しています。男性はこれから何を注文しますか？\n女：来週の歓迎会、お店の予約は済んだ？\n男：席は確保したんだけど、飲み放題のコースにするか料理だけのコースにするか迷っていて。\n女：みんなお酒好きだから、飲み放題付きのコースのほうが安心だよ。\n男：そうだね、じゃあそっちに変更しておくよ。',
    questionText: '男性はどのコースに変更して注文しますか？',
    options: [
      '料理のみのコース',
      "飲み放題付きのコース (Ichimliklar cheksiz bo'lgan kurs)",
      'ランチタイムの軽食コース',
      'テイクアウトのオードブル',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Hamkasb qiz barchaga cheksiz ichimlikli (飲み放題付き) to'plam ma'qul ekanini aytadi va erkak unga o'zgartirishini tasdiqlaydi.",
  },

  // --- N2 EXPANDED ---
  {
    id: 18,
    level: 'N2',
    type: 'point',
    audioUrl: '',
    script:
      'ビジネスセミナーで経営者が話しています。新規事業を成功させる上で最も重視した要素は何ですか？\n経営者：資金力や最新のITシステムも有用ですが、当社が急成長できた決定的な要因は「顧客からの不満やクレームに24時間以内に直接電話で対応する徹底したアフターフォロー」でした。顧客の信頼が最大の差別化になります。',
    questionText: '経営者が成功の決定的要因として挙げているのは何ですか？',
    options: [
      '莫大な広告宣伝費の投入',
      '競合他社より圧倒的に安い価格設定',
      '顧客の不満に即座に対応する徹底したアフターフォロー',
      'AIによる完全無人のカスタマー対応',
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Tadbirkor eng asosiy muvaffaqiyat omili mijozlarning e'tirozlariga 24 soat ichida darhol bevosita javob berish (徹底したアフターフォロー) bo'lganini aytadi.",
  },
  {
    id: 19,
    level: 'N2',
    type: 'quick',
    audioUrl: '',
    script:
      '取引先の担当者と電話で話しています。相手が「あいにく部長の田中は席を外しております」と言いました。あなたは何と言いますか？\n相手：あいにく部長の田中は席を外しております。\nあなた：（　）',
    questionText: "適切な返答はどれですか？ (Qaysi javob to'g'ri?)",
    options: [
      "では、後ほど改めてお電話差し上げます (U holda, birozdan so'ng qaytadan qo'ng'iroq qilaman)",
      'いえ、とんでもございません',
      'どうもごちそうさまでした',
      'お邪魔いたします',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Boshliq joyida yo'qligi aytilganda rasmiy biznes yapon tilida '後ほど改めてお電話差し上げます' (birozdan so'ng qayta aloqaga chiqaman) deb javob beriladi.",
  },

  // --- N1 EXPANDED ---
  {
    id: 20,
    level: 'N1',
    type: 'point',
    audioUrl: '',
    script:
      '環境問題の専門家フォーラムで学者が話しています。再生可能エネルギーの普及を阻む本質的なボトルネックは何だと指摘されていますか？\n学者：発電コストの低下や技術革新は著しいものの、天候による発電量の変動を吸収する大規模蓄電池インフラの未整備と、既存の基幹送電網の容量不足が、これ以上の系統連系拡大における最大の障壁となっています。',
    questionText: '再生可能エネルギー普及の最大の障壁として指摘されているのは何ですか？',
    options: [
      '国民の環境意識の著しい欠如',
      '蓄電池インフラの未整備と既存送電網の容量不足 (Akkumulyator infratuzilmasi yetishmasligi va tarmoq quvvati cheklovi)',
      '太陽光パネルの製造コストの高騰',
      '原子力発電所の新設ラッシュ',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Olim ob-havo o'zgaruvchanligini kompensatsiya qiluvchi ulkan akkumulyator tizimlari va uzatish tarmoqlarining sig'imi yetishmasligini asosiy to'siq deb atadi.",
  },
  {
    id: 21,
    level: 'N1',
    type: 'task',
    audioUrl: '',
    script:
      '国際共同研究プロジェクトのオンラインミーティングで研究代表者が指示を出しています。各国の研究チームは今週末までに何を提出しなければなりませんか？\n代表：論文の初稿執筆は予定通り進んでいます。しかし、査読付き学術誌への投稿に先立ち、各国の研究倫理委員会の承認証明書の英訳原本が必要です。今週末までにクラウドの共有フォルダにアップロードを完了させてください。',
    questionText: '各研究チームが今週末までに提出すべきものは何ですか？',
    options: [
      '論文の最終決定稿',
      "研究倫理委員会の承認証明書の英訳原本 (Tadqiqot etikasi komissiyasi ma'qullagan inglizcha guvohnoma asl nusxasi)",
      '実験データの全生データファイル',
      '来年度の研究費予算要求書',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Loyiha rahbari har bir davlat jamoasiga ilmiy etika qo'mitasining tasdiqlangan inglizcha hujjati asl nusxasini yuklashni buyurdi.",
  },
];
