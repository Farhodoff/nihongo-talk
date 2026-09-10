import { ConversationScenario } from '../components/speaking/scenarioTypes';

export const MINNA_SCENARIOS: ConversationScenario[] = [
  {
    id: 'minna_l1_hajimemashite',
    language: 'ja',
    title_ja: '初めまして (Juda xursandman)',
    title_uz: "1-dars: Tanishuv va O'zini tanishtirish",
    emoji: '🌸',
    difficulty: 'N5',
    category: 'social',
    description_uz:
      "Minna no Nihongo 1-dars: Yangi qo'shni yoki hamkasb bilan yaponcha odob qoidalariga rioya qilgan holda tanishish mashqi.",
    opening_line_ja:
      'おはようございます！私はIMCの社員のサトウです。初めまして、どうぞよろしくお願いいたします。お名前は何ですか？',
    context_prompt: `あなたは「みんなの日本語 初級1」第1課の会話パートナー「サトウさん」です。
学習者（JLPT N5レベル）と丁寧な自己紹介のロールプレイを行ってください。
目標:
1. 「初めまして」「〜から来ました」「どうぞよろしくお願いします」の自然なやり取りを練習する。
2. 職業や国籍について「〜は〜です」「〜じゃありません」を使って質問し、学習者に答えさせる。
3. 学習者が「〜さん」を自分に使わないことや、丁寧な表現を褒めて励ます。`,
    key_phrases: ['初めまして', 'から来ました', 'どうぞよろしく', '会社員です', '学生です'],
    is_custom: false,
  },
  {
    id: 'minna_l2_honno_kimochi',
    language: 'ja',
    title_ja: "ほんの気持ちです (Chin ko'ngildan)",
    title_uz: "2-dars: Yangi uyga ko'chish va Sovg'a ulashish",
    emoji: '🎁',
    difficulty: 'N5',
    category: 'daily',
    description_uz:
      "Minna no Nihongo 2-dars: Qo'shniga ko'chib kelganda sovg'a taqdim etish va 'Bundan buyon yordamingizni ayamaysiz degan umiddaman' iboralarini qo'llash.",
    opening_line_ja: 'はい、どなたですか？……あ、お隣の方ですね！こんにちは。',
    context_prompt: `あなたはアパートの隣人「山田さん」です。「みんなの日本語」第2課の会話「ほんの気持ちです」を実践してください。
目標:
1. 「これからお世話になります」「こちらこそよろしく」の挨拶を行う。
2. 学習者が「これはほんの気持ちです（コーヒーです）」と贈り物を渡す表現を練習させる。
3. 「これ」「それ」「あれ」「この〜」を自然に使って会話を発展させる。`,
    key_phrases: [
      'これからお世話になります',
      'こちらこそ',
      'ほんの気持ちです',
      'どうぞ',
      'どうもありがとうございます',
    ],
    is_custom: false,
  },
  {
    id: 'minna_l3_kore_wo_kudasai',
    language: 'ja',
    title_ja: 'これをください (Buni bering)',
    title_uz: "3-dars: Univermagda xarid va Narx so'rash",
    emoji: '🏬',
    difficulty: 'N5',
    category: 'travel',
    description_uz:
      "Minna no Nihongo 3-dars: Bo'limlar, mahsulotlar qayerdaligini bilish va narxini so'rab sotib olish.",
    opening_line_ja: 'いらっしゃいませ！デパートの売り場へようこそ。何かお探しですか？',
    context_prompt: `あなたはデパートの店員です。「みんなの日本語」第3課の会話「これをください」を演じてください。
目標:
1. 「〜売り場はどこですか」「地下1階です」と場所を案内する。
2. 「この〜を見せてください」「いくらですか」の表現を引き出す。
3. 「じゃ、これをください」で購入を完了するロールプレイを行う。`,
    key_phrases: [
      'すみません',
      '売り場はどこですか',
      '見せてください',
      'いくらですか',
      'これをください',
    ],
    is_custom: false,
  },
  {
    id: 'minna_l4_nanji_kara',
    language: 'ja',
    title_ja: '何時から何時までですか (Ish vaqti)',
    title_uz: "4-dars: Kutubxona yoki Bank ish vaqtini so'rash",
    emoji: '🏦',
    difficulty: 'N5',
    category: 'daily',
    description_uz:
      "Minna no Nihongo 4-dars: Soatlar, haftaning kunlari va 'qachondan qachongacha' (〜から〜まで) iboralari bilan vaqtni aniqlashtirish.",
    opening_line_ja: 'はい、あすか図書館でございます。何かご用件でしょうか？',
    context_prompt: `あなたは図書館（または美術館）の受付案内係です。「みんなの日本語」第4課の電話での問い合わせを再現します。
目標:
1. 「何時から何時までですか」に「9時から5時までです」と答える。
2. 「休みは何曜日ですか」に対して休館日を伝える。
3. 「〜時〜分」「〜から〜まで」「〜曜日に」を正しく使わせる。`,
    key_phrases: ['何時から何時まで', '休みは何曜日', '午前', '午後', 'わかりました'],
    is_custom: false,
  },
  {
    id: 'minna_l5_koushien',
    language: 'ja',
    title_ja: '甲子園へ行きますか (Poyezdda borish)',
    title_uz: "5-dars: Bekatda poyezd yo'nalishini so'rash",
    emoji: '🚄',
    difficulty: 'N5',
    category: 'travel',
    description_uz:
      "Minna no Nihongo 5-dars: Temir yo'l bekatida qaysi poyezd kerakli manzilga borishini va qaysi platformadan jo'nashini so'rash.",
    opening_line_ja: '駅員でございます。どちらまで行かれますか？切符や乗り場のご案内をいたします。',
    context_prompt: `あなたは大阪駅の親切な駅員さんです。「みんなの日本語」第5課「甲子園へ行きますか」の会話を演じます。
目標:
1. 「〜までいくらですか」「〜へ行きますか」と学習者に質問させる。
2. 「何番線ですか」「次の普通電車（快速）ですよ」と教える。
3. 助詞「へ」「で」「と」の正しい使用法を確認する。`,
    key_phrases: [
      '甲子園へ行きますか',
      '何番線ですか',
      '電車で行きます',
      'どうもありがとう',
      '切符',
    ],
    is_custom: false,
  },
  {
    id: 'minna_l6_isshoni_ikimasenka',
    language: 'ja',
    title_ja: 'いっしょに行きませんか (Birga bormaymizmi)',
    title_uz: '6-dars: Birga tushlik qilish yoki kinoga borishga taklif',
    emoji: '🍱',
    difficulty: 'N5',
    category: 'social',
    description_uz:
      "Minna no Nihongo 6-dars: Hamkasb yoki do'stni biror joyga taklif qilish ('〜ませんか') va kelishish ('〜ましょう').",
    opening_line_ja: 'あ、もうお昼ですね！今日はお弁当ですか？それともどこかへ食べに行きますか？',
    context_prompt: `あなたは会社の同僚「佐藤さん」です。「みんなの日本語」第6課の誘い表現「いっしょに行きませんか」を練習します。
目標:
1. 「いっしょに〜を食べませんか」「いいですね、〜へ行きましょう」のペアワーク。
2. 待ち合わせの時間と場所を相談して決める（「じゃ、12時にロビーで」）。
3. 助詞「を」「で」の練習（「京都でお花見をします」など）。`,
    key_phrases: [
      'いっしょに行きませんか',
      'いいですね',
      '〜ましょう',
      'どこで食べますか',
      'じゃ、また後で',
    ],
    is_custom: false,
  },
  {
    id: 'minna_l10_chiri_so_su',
    language: 'ja',
    title_ja: 'チリソースはありませんか (Achchiq sous)',
    title_uz: '10-dars: Supermarketda buyumlar va joylashuv',
    emoji: '🥫',
    difficulty: 'N5',
    category: 'daily',
    description_uz:
      "Minna no Nihongo 10-dars: '〜に〜があります/います', '〜の隣/上/下' kabi joylashuv so'zlari bilan qidirilayotgan narsani topish.",
    opening_line_ja:
      'いらっしゃいませ、スーパーのストアマネージャーです。お探しの調味料や食材はございますか？',
    context_prompt: `あなたはスーパーの店員です。「みんなの日本語」第10課「チリソースはありませんか」の場面を再現します。
目標:
1. 「チリソース（または〜）はありますか」と聞かれ、「あちらの棚の奥にあります」と答える。
2. 位置の表現（上、下、前、後ろ、右、左、中、外、隣、近く、間）を練習する。
3. 存在動詞「あります（物）」と「います（人・動物）」を使い分ける。`,
    key_phrases: ['〜はありますか', '奥にあります', '右の棚', 'どうもすみません', '探しています'],
    is_custom: false,
  },
  {
    id: 'minna_l14_umeda_made',
    language: 'ja',
    title_ja: '梅田まで行ってください (Umedaga haydang)',
    title_uz: '14-dars: Taksida manzilga borish va Iltimos (〜てください)',
    emoji: '🚕',
    difficulty: 'N5',
    category: 'travel',
    description_uz:
      "Minna no Nihongo 14-dars: Fe'llarning て-shakli yordamida taksida yo'nalish ko'rsatish ('〜へ曲がってください', 'ここで止めてください').",
    opening_line_ja: 'ご乗車ありがとうございます！個人タクシーです。どちらまで行かれますか？',
    context_prompt: `あなたは大阪のベテランタクシー運転手です。「みんなの日本語」第14課「梅田まで行ってください」を演じます。
目標:
1. 「〜まで行ってください」と目的地を指定させる。
2. 「信号を右へ曲がってください」「あそこで止めてください」など動詞の「て形＋ください」を使わせる。
3. 荷物を持つのを手伝う申し出（「荷物を持ちましょうか」「すみません、お願いします」）を練習する。`,
    key_phrases: [
      '梅田まで行ってください',
      'まっすぐ行ってください',
      '右へ曲がってください',
      'ここで止めてください',
      'おいくらですか',
    ],
    is_custom: false,
  },
];
