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
  // === N5 MOCK EXAM =========================
  // ==========================================
  N5: [
    // Language Knowledge (Moji / Goi / Bunpou)
    {
      id: 101,
      section: 'knowledge',
      questionText: 'きょうは 水曜日（すいようび）です。あしたは（　）曜日です。',
      options: ['火', '木', '金', '土'],
      correctAnswer: 1,
      explanationUzbek: "Bugun Chorshanba (水曜日). Ertaga esa Payshanba (木曜日) bo'ladi.",
    },
    {
      id: 102,
      section: 'knowledge',
      questionText: '教室（きょうしつ）の なかに つくえ（　）いすが あります。',
      options: ['と', 'が', 'を', 'も'],
      correctAnswer: 0,
      explanationUzbek:
        "Narsalarni sanashda 'va' ma'nosida 'と' yuklamasi keladi: tsukue to isu (stol va stul).",
    },
    {
      id: 103,
      section: 'knowledge',
      questionText: '毎朝、新聞を（　）から、会社へ行きます。',
      options: ['読みます', '読んで', '読んだ', '読む'],
      correctAnswer: 1,
      explanationUzbek:
        "Ketma-ket harakatlarda '~te kara' (qilib bo'lgach) grammatikasi qo'llanadi: Yonde kara.",
    },
    {
      id: 104,
      section: 'knowledge',
      questionText: '駅まで バスで どの（　）かかりますか。',
      options: ['いくら', 'ぐらい', 'ごろ', 'なんにん'],
      correctAnswer: 1,
      explanationUzbek:
        "Vaqt yoki muddat miqdorini so'rashda 'dono gurai' (taxminan qancha) birikmasi ishlatiladi.",
    },
    // Reading Comprehension
    {
      id: 105,
      section: 'reading',
      passageText:
        'リーさんは 毎朝（まいあさ）７時に おきます。朝ご飯を 食べてから、８時に 自転車で 学校へ 行きます。学校は ８時半に 始まります。',
      questionText: 'リーさんは 何で 学校へ 行きますか？',
      options: [
        '歩いて (piyoda)',
        'バスで (avtobusda)',
        '自転車で (velosipedda)',
        '電車で (poezdda)',
      ],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda aniq keltirilgan: 'jitensha de gakkou e ikimasu' (velosipedda maktabga boradi).",
    },
    {
      id: 106,
      section: 'reading',
      passageText:
        'きのう 田中さんと レストランへ 行きました。わたしは さかなを 食べました。田中さんは にくを 食べました。とても おいしかったです。二人で 3000円でした。',
      questionText: '二人の 食事は いくらでしたか？',
      options: ['1500円', '2000円', '3000円', '6000円'],
      correctAnswer: 2,
      explanationUzbek:
        "Matnda 'Futari de 3000-en deshita' (ikkalamizga 3000 yen bo'ldi) deyilgan.",
    },
    // Listening Comprehension
    {
      id: 107,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      script:
        '女の人が話しています。テーブルの上に何を置きますか？\n女：食事の準備をしましょう。お皿を並べて、その右側にスプーンを置いてください。',
      questionText: "お皿の右側に何を置きますか？ (Likopchaning o'ng tomoniga nima qo'yiladi?)",
      options: ['フォーク (vilka)', 'ナイフ (pichoq)', 'スプーン (qoshiq)', "はし (cho'p)"],
      correctAnswer: 2,
      explanationUzbek:
        "Ayol kishi: 'migi gawa ni supuun o oite kudasai' (o'ng tomonga qoshiqni qo'ying) deb aytadi.",
    },
    {
      id: 108,
      section: 'listening',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      script:
        '男の人と女の人が話しています。男の人はあした何時に起きますか？\n女：あしたは何時に出かけるの？\n男：8時の電車に乗るから、7時に起きるよ。',
      questionText: '男の人はあした何時に起きますか？',
      options: ['6時', '7時', '8時', '9時'],
      correctAnswer: 1,
      explanationUzbek: "Erkak kishi: '7-ji ni okiru yo' (soat 7 da uyg'onaman) deb javob beradi.",
    },
  ],

  // ==========================================
  // === N4 MOCK EXAM =========================
  // ==========================================
  N4: [
    // Language Knowledge
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
    // Reading Comprehension
    {
      id: 205,
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
      id: 206,
      section: 'reading',
      passageText:
        '【図書館の お知らせ】\n本は 一人 5冊まで 2週間 借りられます。ただし、DVDや 雑誌の 最新号は 借りることが できません。図書館の 中で 見てください。返却期限は 必ず 守ってください。',
      questionText: '借りることが できないものは 何ですか？',
      options: ['古い小説', '歴史の本', 'DVDや最新号の雑誌', '辞書'],
      correctAnswer: 2,
      explanationUzbek:
        "E'londa yozilgan: 'DVD ya zasshi no saishingou wa kariru koto ga dekimasen' (DVD va yangi son jurnallarni qarzga olib ketib bo'lmaydi).",
    },
    // Listening Comprehension
    {
      id: 207,
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
      id: 208,
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
  ],

  // ==========================================
  // === N3 MOCK EXAM =========================
  // ==========================================
  N3: [
    // Language Knowledge
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
        "'~wake ni wa ikanai' ijtimoiy yoki ahloqiy sababga ko'ra 'bunday qilib bo'lmaydi' degan ma'noni ifodalaydi.",
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
    // Reading Comprehension
    {
      id: 305,
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
      id: 306,
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
    // Listening Comprehension
    {
      id: 307,
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
      id: 308,
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
  ],

  // ==========================================
  // === N2 MOCK EXAM =========================
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
