/**
 * minnaMondaiListeningData.ts
 * Authentic Minna no Nihongo Shokyu 1 (Lessons 1-25) Mondai Listening Questions Bank.
 * Each question is linked directly to official CD tracks (/audio/minna/minna_shokyu_1_00X.mp3).
 */
import { TestQuestion } from '../../types/lesson';

export interface MinnaLessonMondai {
  lessonNumber: number;
  title: string;
  estimatedMinutes: number;
  questions: TestQuestion[];
}

export const MINNA_MONDAI_LISTENING_DATA: Record<number, MinnaLessonMondai> = {
  '1': {
    lessonNumber: 1,
    title: "1-dars: Tanishuv va O'zini tanishtirish",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l1-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_002.mp3',
        audioTitle: '1-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「あなたは サントスさんですか。」',
        options: [
          'はい、サントスじゃ ありません。',
          'いいえ、サントスです。',
          'いいえ、サントスじゃ ありません。ミラーです。',
          '初めまして、サントスです。',
        ],
        correctAnswerIndex: 2,
        explanation:
          "Audioda «Siz Santosmisiz?» deb so'ralmoqda. Bunga mos inkor javob: «いいえ、サントスじゃ ありません。ミラーです» (Yo'q, Santos emasman. Miller bo'laman).",
      },
      {
        id: 'ja-minna-l1-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_002.mp3',
        audioTitle: '1-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 2】Audioni tinglang:\n「お名前[なまえ]は？」',
        options: [
          'アメリカから 来ました。',
          '会社員[かいしゃいん]です。',
          'マイク・ミラーです。',
          '28歳[にじゅうはっさい]です。',
        ],
        correctAnswerIndex: 2,
        explanation:
          "«Ismingiz nima?» (お名前は？) degan savolga o'z ismini aytib «マイク・ミラーです» deb javob beriladi.",
      },
      {
        id: 'ja-minna-l1-m1-q3',
        audioUrl: '/audio/minna/minna_shokyu_1_002.mp3',
        audioTitle: '1-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 3】Audioni tinglang:\n「何歳[なんさい]ですか。」',
        options: [
          'アメリカ人[じん]です。',
          '28歳[にじゅうはっさい]です。',
          '学生[がくせい]じゃ ありません。',
          'いいえ、違[ちが]います。',
        ],
        correctAnswerIndex: 1,
        explanation:
          '«Yoshingiz nechida?» (何歳ですか) savoliga yosh aytiladi: «28歳です» (28 yoshdaman).',
      },
      {
        id: 'ja-minna-l1-m1-q4',
        audioUrl: '/audio/minna/minna_shokyu_1_002.mp3',
        audioTitle: '1-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 4】Audioni tinglang:\n「アメリカ人[じん]ですか。」',
        options: [
          'はい、アメリカ人です。',
          'いいえ、アメリカから 来ました。',
          'はい、会社員じゃ ありません。',
          '初めまして、どうぞ よろしく。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Amerikalikmisiz?» savoliga to'g'ri tasdiq javob: «はい、アメリカ人です» (Ha, amerikalikman).",
      },
      {
        id: 'ja-minna-l1-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_003.mp3',
        audioTitle: '1-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\nシュミットさんは どこの 会社員[かいしゃいん]ですか。',
        options: [
          'IMCの 社員',
          'パワー電気[でんき]の 社員',
          '富士大学[ふじだいがく]の 学生',
          '神戸病院[こうべびょういん]の 医者',
        ],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «こちらは パワー電気の シュミットさんです。初めまして、シュミットです» deyiladi. Schmidt janoblari 'Pawa Denki' kompaniyasi xodimi.",
      },
      {
        id: 'ja-minna-l1-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_003.mp3',
        audioTitle: '1-dars Mondai 2: Qisqa suhbat',
        question: '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\nワンさんは 何歳[なんさい]ですか。',
        options: ['25歳', '28歳', '29歳', '35歳'],
        correctAnswerIndex: 2,
        explanation:
          'Audioda: «お名前は？... ワンです。何歳ですか？... 29歳です» deb aytiladi. Demak, Wang janoblari 29 yoshda.',
      },
      {
        id: 'ja-minna-l1-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_004.mp3',
        audioTitle: "1-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Suhbatni tinglab, bayonot to'g'riligini aniqlang:\n「ミラーさんは アメリカ人[じん]です。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Miller janob: «初めまして。ミラーです。アメリカから 来ました» deydi. U Amerikadan kelganligi aytilgan, demak «ミラーさんは アメリカ人です» jumlasi to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l1-m3-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_004.mp3',
        audioTitle: "1-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Suhbatni tinglab, bayonot to'g'riligini aniqlang:\n「カリナさんは 富士大学[ふじだいがく]の 先生[せんせい]です。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «先生ですか？... いいえ、富士大学の 学生です» deyilgan. Karina Fuji universitetining o'qituvchisi emas, balki talabasi. Shuning uchun bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l1-m3-q3',
        audioUrl: '/audio/minna/minna_shokyu_1_004.mp3',
        audioTitle: "1-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 3-gap】Suhbatni tinglab, bayonot to'g'riligini aniqlang:\n「ワンさんは 研究者[けんきゅうしゃ]じゃ ありません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «ワンさんも 研究者ですか？... いいえ、ワンさんは 医者です» deyilgan. Demak u tadqiqotchi emas, shifokor. «ワンさんは 研究者じゃ ありません» jumlasi to'g'ri (〇).",
      },
    ],
  },
  '2': {
    lessonNumber: 2,
    title: "2-dars: Buyumlar va Ko'rsatish olmoshlari (これ、それ、あれ)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l2-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_006.mp3',
        audioTitle: '2-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 1】Audioni tinglang:\n「これは 手帳[てちょう]ですか。」',
        options: [
          'はい、そうです。手帳です。',
          'いいえ、手帳です。',
          'これは 本じゃ ありません。',
          'だれの 手帳ですか。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Bu yon daftarcha (bloknot)mi?» savoliga eng to'g'ri javob: «はい、そうです。手帳です» (Ha shunday, yon daftarcha).",
      },
      {
        id: 'ja-minna-l2-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_006.mp3',
        audioTitle: '2-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 4】Audioni tinglang:\n「これは 何[なん]の 雑誌[ざっし]ですか。」',
        options: [
          '自動車[じどうしゃ]の 雑誌です。',
          'はい、雑誌です。',
          'いいえ、本です。',
          'あそこに あります。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Bu nima haqidagi jurnal?» savoliga mavzu bilan «自動車の 雑誌です» (Avtomobillar haqidagi jurnal) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l2-m1-q3',
        audioUrl: '/audio/minna/minna_shokyu_1_006.mp3',
        audioTitle: '2-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 5】Audioni tinglang:\n「この かばんは あなたのですか。」',
        options: [
          'はい、かばんじゃ ありません。',
          'いいえ、わたしのじゃ ありません。サントスさんのです。',
          'だれの かばんですか。',
          'これ、どうぞ。',
        ],
        correctAnswerIndex: 1,
        explanation:
          "«Bu sumka siznikimi?» savoliga: «いいえ、わたしのじゃ ありません。サントスさんのです» (Yo'q, meniki emas. Santosnikidir) degan javob to'g'ri.",
      },
      {
        id: 'ja-minna-l2-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_007.mp3',
        audioTitle: '2-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\nミラーさんの 部屋[へや]は 何号室[なんごうしつ]ですか。',
        options: ['408号室', '505号室', '302号室', '508号室'],
        correctAnswerIndex: 1,
        explanation:
          'Miller eshikni taqillatganda «はい、どなたですか？... 505の ミラーです» deb javob beradi (505-xona).',
      },
      {
        id: 'ja-minna-l2-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_007.mp3',
        audioTitle: '2-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\nミラーさんは 田中[たなか]さんに 何[なに]を あげましたか。',
        options: ['コーヒー', '手帳[てちょう]', 'チョコレート', '雑誌[ざっし]'],
        correctAnswerIndex: 2,
        explanation:
          "Audioda: «あの、これ、どうぞ。... え？ 何ですか？... チョコレートです。どうも ありがとうございます» deb aytiladi. Sovg'a shokolad edi.",
      },
      {
        id: 'ja-minna-l2-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_008.mp3',
        audioTitle: "2-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「これは 手帳[てちょう]です。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «それは 手帳ですか？... いいえ、違います。辞書です» deyiladi. Bu lug'at bo'lgani sababli «手帳です» bayonoti noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l2-m3-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_008.mp3',
        audioTitle: "2-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「あの 車[くるま]は 木村[きむら]さんのです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "«木村さん、あの 車は 木村さんのですか？... はい、そうです。私のです» - Kimura xonim mashina o'ziniki ekanini tasdiqlaydi. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '3': {
    lessonNumber: 3,
    title: '3-dars: Joylar va Narxlar (ここ、そこ、あそこ、いくら)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l3-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_010.mp3',
        audioTitle: '3-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 1】Audioni tinglang:\n「お国[くに]は どちらですか。」',
        options: [
          '事務所[じむしょ]です。',
          'ウズベキスタンです。',
          'あそこです。',
          '1階[いっかい]です。',
        ],
        correctAnswerIndex: 1,
        explanation:
          "«Mamlakatingiz qaysi?» (hurmat shakli: お国はどちらですか) degan savolga o'z yurtini aytiladi: «ウズベキスタンです».",
      },
      {
        id: 'ja-minna-l3-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_010.mp3',
        audioTitle: '3-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 5】Audioni tinglang:\n「あなたの カメラは いくらですか。」',
        options: [
          '日本[にほん]のです。',
          '28,000円[にまんはっせんえん]です。',
          'はい、カメラです。',
          'そこに あります。',
        ],
        correctAnswerIndex: 1,
        explanation:
          '«Kamerangiz qancha turadi?» (いくらですか) savoliga narx aytiladi: «28,000円です».',
      },
      {
        id: 'ja-minna-l3-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_011.mp3',
        audioTitle: '3-dars Mondai 2: Joylar va Xonalar',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n事務所[じむしょ]と 食堂[しょくどう]は どこですか。',
        options: [
          '事務所は あそこ、食堂は そこ',
          '事務所は 2階、食堂は 地下',
          '事務所は ここ、食堂は あそこ',
          '事務所は 1階、食堂は 3階',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Audioda: «すみません、事務所は どこですか？... あそこです。食堂は？... 食堂は そこです» deb javob beriladi.',
      },
      {
        id: 'ja-minna-l3-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_011.mp3',
        audioTitle: '3-dars Mondai 2: Joylar va Xonalar',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n佐藤[さとう]さんと ミラーさんは どこに いますか。',
        options: ['教室[きょうしつ]', '会議室[かいぎしつ]', '受付[うけつけ]', '食堂[しょくどう]'],
        correctAnswerIndex: 1,
        explanation:
          'Audioda: «佐藤さんは どちらですか？... 会議室です。ミラーさんも 会議室ですか？... はい、そうです» deb aytiladi. Ikkalasi ham majlislar xonasida (会議室).',
      },
      {
        id: 'ja-minna-l3-m2-q3',
        audioUrl: '/audio/minna/minna_shokyu_1_011.mp3',
        audioTitle: '3-dars Mondai 2: Joylar va Xonalar',
        question:
          '【Mondai 2 - Suhbat 3】Suhbatni tinglang:\nパワー電気[でんき]は 何[なん]の 会社[かいしゃ]ですか。',
        options: [
          '自動車[じどうしゃ]の 会社',
          'カメラの 会社',
          'コンピューターの 会社',
          '時計[とけい]の 会社',
        ],
        correctAnswerIndex: 2,
        explanation:
          '«何の 会社ですか？... コンピューターの 会社です» deyiladi. Demak kompyuter kompaniyasi.',
      },
      {
        id: 'ja-minna-l3-m2-q4',
        audioUrl: '/audio/minna/minna_shokyu_1_011.mp3',
        audioTitle: '3-dars Mondai 2: Joylar va Xonalar',
        question: '【Mondai 2 - Suhbat 5】Suhbatni tinglang:\n時計[とけい]は いくらですか。',
        options: ['2,300円', '23,600円', '23,800円', '28,000円'],
        correctAnswerIndex: 1,
        explanation:
          "Xaridor soatning narxini so'raganda: «すみません、この時計は いくらですか？... 23,600円です» (ni-man san-zen roppyaku en) deyiladi.",
      },
    ],
  },
  '4': {
    lessonNumber: 4,
    title: "4-dars: Vaqt, Soatlar va Fe'llar (何時、何分、起きます、寝ます)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l4-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_013.mp3',
        audioTitle: '4-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 1】Audioni tinglang:\n「今[いま] 何時[なんじ]ですか。」',
        options: [
          '7時半[しちじはん]です。',
          '月曜日[げつようび]です。',
          '10時までです。',
          '勉強[べんきょう]しました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Hozir soat necha?» degan savolga aniq vaqt aytiladi: «7時半です» (Soat yetti yarim).',
      },
      {
        id: 'ja-minna-l4-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_013.mp3',
        audioTitle: '4-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang:\n「毎朝[まいあさ] 何時[なんじ]に 起[お]きますか。」',
        options: [
          '6時[ろくじ]に 起きます。',
          '11時[じゅういちじ]に 寝ます。',
          'はい、起きます。',
          'きのう 起きました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Har kuni ertalab soat nechada uyg'onasiz?» savoliga: «6時に 起きます» (Soat 6 da uyg'onaman) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l4-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_014.mp3',
        audioTitle: '4-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n今[いま]、ロンドンは 何時[なんじ]ですか。',
        options: ['午前[ごぜん] 4時', '午前[ごぜん] 1時半', '午後[ごご] 1時半', '午後[ごご] 4時'],
        correctAnswerIndex: 1,
        explanation:
          'Audioda: «今 何時ですか？... 4時です。ロンドンは 何時ですか？... 午前 1時半です» deb aytiladi.',
      },
      {
        id: 'ja-minna-l4-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_015.mp3',
        audioTitle: "4-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは 今日[きょう] 10時[じゅうじ]まで 働[はたら]きます。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «今日も 10時まで 働きますか？... いいえ、5時に 終わります» deyilgan. U bugun soat 5 da tugatadi. Shuning uchun bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l4-m3-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_015.mp3',
        audioTitle: "4-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「みどり図書館[としょかん]の 休[やす]みは 月曜日[げつようび]です。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «休みは何曜日ですか？... 月曜日です» deb aytiladi. Midori kutubxonasining dam olish kuni dushanba (月曜日). Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l4-m4-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_016.mp3',
        audioTitle: '4-dars Mondai 4: Raqamlar va Vaqtlar',
        question:
          '【Mondai 4 - 5-savol】Audioni tinglang:\n田中[たなか]さんの うちの 電話番号[でんわばんごう]は 何番[なんばん]ですか。',
        options: ['349-7865', '349-7856', '075-138-667', '348-7965'],
        correctAnswerIndex: 0,
        explanation:
          'Audioda: «田中さんの うちの 電話番号は 349の 7865 (san-yon-kyuu no nana-hachi-roku-go) です» deyiladi.',
      },
    ],
  },
  '5': {
    lessonNumber: 5,
    title: "5-dars: Harakat Fe'llari va Yo'nalish zarrachalari (へ、で、と)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l5-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_018.mp3',
        audioTitle: '5-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「日曜日[にちようび] どこへ 行[い]きますか。」',
        options: [
          'スーパーへ 行きます。',
          '電車[でんしゃ]で 行きます。',
          '友[とも]だちと 行きます。',
          'どこも 行きませんでした。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Yakshanba kuni qayerga borasiz?» degan kelasi zamon savoliga boriladigan joy: «スーパーへ 行きます» (Supermarketga boraman) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l5-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_018.mp3',
        audioTitle: '5-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang:\n「何[なん]で スーパーへ 行[い]きますか。」',
        options: [
          '日曜日に行きます。',
          '自転車[じてんしゃ]で 行きます。',
          '一人[ひとり]で 行きます。',
          'パンを 買います。',
        ],
        correctAnswerIndex: 1,
        explanation:
          '«Supermarketga nima bilan (qaysi transportda) borasiz?» savoliga transport vositasi aytiladi: «自転車で 行きます» (Velosipedda boraman).',
      },
      {
        id: 'ja-minna-l5-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_019.mp3',
        audioTitle: '5-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n佐藤[さとう]さんは 日曜日[にちようび] どこへ 行[い]きましたか。',
        options: [
          '奈良[なら]へ 行きました。',
          '京都[きょうと]へ 行きました。',
          'どこも 行きませんでした。',
          '東京[とうきょう]へ 行きました。',
        ],
        correctAnswerIndex: 2,
        explanation:
          "Audioda Miller Naraga borganini aytadi, Sato xonimdan so'ralganda esa: «佐藤さんは？... どこも 行きませんでした» (Hech qayerga bormadim) deb javob beradi.",
      },
      {
        id: 'ja-minna-l5-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_020.mp3',
        audioTitle: "5-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは あさって 山田[やまだ]さんと 名古屋[なごや]へ 行[い]きます。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «いつ 名古屋へ 行きますか？... あさって 行きます。一人で 行きますか？... いいえ、山田さんと 行きます» deb aytiladi. Bayonot to'liq to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l5-m3-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_020.mp3',
        audioTitle: "5-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 3-gap】Suhbatni tinglang va bayonotni tekshiring:\n「次[つぎ]の 電車[でんしゃ]は 京都[きょうと]へ 行[い]きます。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «この電車は 京都へ 行きますか？... いいえ、行きません。次の電車ですよ» deb javob beriladi. Demak keyingi poyezd Kyotoga boradi. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '6': {
    lessonNumber: 6,
    title: "6-dars: O'timli Fe'llar va Vosita zarrachalari (を、で、ませんか)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l6-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_022.mp3',
        audioTitle: '6-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 1】Audioni tinglang:\n「あなたは たばこを 吸[す]いますか。」',
        options: [
          'はい、吸いません。',
          'いいえ、吸いません。',
          'お酒[さけ]を 飲みます。',
          '喫茶店[きっさてん]で 吸いました。',
        ],
        correctAnswerIndex: 1,
        explanation:
          "«Tamaki chekasizmi?» savoliga chekmaydigan kishi inkor bilan: «いいえ、吸いません» (Yo'q, chekmayman) deb javob beradi.",
      },
      {
        id: 'ja-minna-l6-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_022.mp3',
        audioTitle: '6-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 5】Audioni tinglang:\n「いつも どこで 昼[ひる]ご飯[はん]を 食[た]べますか。」',
        options: [
          '12時[じゅうにじ]に 食べます。',
          '会社[かいしゃ]の 食堂[しょくどう]で 食べます。',
          '魚[さかな]と ご飯を 食べます。',
          '一人[ひとり]で 食べます。',
        ],
        correctAnswerIndex: 1,
        explanation:
          '«Odatda qayerda tushlik qilasiz?» (どこで) degan joy savoliga «会社の 食堂で 食べます» (Kompaniya oshxonasida yeyman) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l6-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_023.mp3',
        audioTitle: "6-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「山田[やまだ]さんは お酒[さけ]を 飲[の]みません。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «山田さんは お酒を 飲みますか？... はい、飲みます。いつも うちで 飲みます» deyilgan. Yamada ichadi, shuning uchun «お酒を 飲みません» bayonoti noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l6-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_023.mp3',
        audioTitle: "6-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは けさ パンと 卵[たまご]を 食[た]べました。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «何を食べましたか？... パンと 卵を 食べました» deb aytiladi. Miller non va tuxum yegan. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '7': {
    lessonNumber: 7,
    title: '7-dars: Qurollar, Til va Hadya qilish (で、あげます、もらいます、もう)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l7-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_025.mp3',
        audioTitle: '7-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「もう 晩[ばん]ご飯[はん]を 食[た]べましたか。」',
        options: [
          'はい、もう 食べました。',
          'いいえ、食べました。',
          'はい、まだです。',
          '今[いま]から 食べました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Kechki ovqatni yeb bo'ldingizmi?» savoliga tasdiq javob: «はい、もう 食べました» (Ha, allaqachon yedim).",
      },
      {
        id: 'ja-minna-l7-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_025.mp3',
        audioTitle: '7-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang:\n「何[なん]で ご飯[はん]を 食[た]べますか。」',
        options: [
          'はしで 食べます。',
          '食堂[しょくどう]で 食べます。',
          '7時[しちじ]に 食べます。',
          '肉[にく]を 食べます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Nima bilan (qaysi asbobda) ovqatlanasiz?» savoliga «はしで 食べます» (Hashi/cho'p bilan yeyman) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l7-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_026.mp3',
        audioTitle: '7-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\nミラーさんは だれに ネクタイを もらいましたか。',
        options: [
          '父[ちち]に もらいました。',
          '母[はは]に もらいました。',
          '友[とも]だちに もらいました。',
          '会社[かいしゃ]の 人[ひと]に もらいました。',
        ],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «そのネクタイ素敵ですね。... 誕生日に 母に もらいました» deyiladi. Bo'yinbog' onasidan sovg'a olingan.",
      },
      {
        id: 'ja-minna-l7-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_027.mp3',
        audioTitle: "7-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんは 一人[ひとり]で 昼[ひる]ご飯[はん]を 食[た]べます。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «じゃあ、一緒に 食べませんか？... ええ、行きましょう» deyilgan. Ular birga ovqatlangani boradilar. Demak Karina yolg'iz ovqatlanmaydi (✕).",
      },
      {
        id: 'ja-minna-l7-m3-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_027.mp3',
        audioTitle: "7-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは ファクスで レポートを 送[おく]りました。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          'Audioda: «メールで 送りましたか？... いいえ、ファクスで 送りました» deb aytiladi. Hisobot faks orqali yuborilgan (〇).',
      },
    ],
  },
  '8': {
    lessonNumber: 8,
    title: '8-dars: Sifatlar (い-sifatlar va な-sifatlar)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l8-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_029.mp3',
        audioTitle: '8-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang:\n「あなたの 国[くに]は 今[いま] 暑[あつ]いですか。」',
        options: [
          'はい、とても 暑いです。',
          'いいえ、暑いです。',
          'はい、寒[さむ]いです。',
          '暑い 国じゃ ありませんでした。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Mamlakatingiz hozir issiqmi?» savoliga to'g'ri tasdiq javob: «はい、とても 暑いです» (Ha, juda issiq).",
      },
      {
        id: 'ja-minna-l8-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_029.mp3',
        audioTitle: '8-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 5】Audioni tinglang:\n「日本語[にほんご]は どうですか。」',
        options: [
          '面白[おもしろ]いですが、難[むずか]しいです。',
          '日本語を 勉強[べんきょう]します。',
          'はい、そうです。',
          '日本の 人[ひと]です。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Yapon tili qanday?» (どうですか) degan taassurot savoliga qarama-qarshilik bilan: «面白いですが、難しいです» (Qiziq, lekin qiyin) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l8-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_030.mp3',
        audioTitle: '8-dars Mondai 2: Qisqa suhbat',
        question: '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n白[しろ]い シャツは いくらですか。',
        options: ['2,500円', '3,500円', '4,500円', '5,500円'],
        correctAnswerIndex: 1,
        explanation:
          "Audioda xaridor oq ko'ylak narxini so'raydi va sotuvchi «これは 3,500円 (san-zen go-hyaku en) です» deb javob beradi.",
      },
      {
        id: 'ja-minna-l8-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_031.mp3',
        audioTitle: "8-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]は これから 冷[つめ]たい お茶[ちゃ]を 飲[の]みます。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «冷たい お茶は いかがですか？... ええ、ありがとうございます» deyilgan. Erkak mehmondo'stlik taklifini qabul qilib sovuq choy ichadi (〇).",
      },
      {
        id: 'ja-minna-l8-m3-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_031.mp3',
        audioTitle: "8-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんは 先週[せんしゅう] 大阪城[おおさかじょう]へ 行[い]きました。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda Karina ertaga borishini aytadi, suhbatdoshi esa o'zi o'tgan hafta borganini aytadi. Shuning uchun bayonot noto'g'ri (✕).",
      },
    ],
  },
  '9': {
    lessonNumber: 9,
    title: '9-dars: Qobiliyat, Xohish va Sabab (好き、上手、わかります、から)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l9-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_033.mp3',
        audioTitle: '9-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「お母[かあ]さんは 料理[りょうり]が 上手[じょうず]ですか。」',
        options: [
          'はい、とても 上手です。',
          'いいえ、料理が 好きじゃ ありません。',
          'はい、上手じゃ ありません。',
          '料理を 食べます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Onangiz taom pishirishga ustami?» savoliga to'g'ri javob: «はい、とても 上手です» (Ha, juda usta).",
      },
      {
        id: 'ja-minna-l9-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_033.mp3',
        audioTitle: '9-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 4】Audioni tinglang:\n「漢字[かんじ]が 分[わ]かりますか。」',
        options: [
          'はい、少[すこ]し 分かります。',
          'いいえ、よく 分かります。',
          'はい、全然[ぜんぜん] 分かりません。',
          '漢字を 書[か]きませんでした。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Kanji (iyerogliflar)ni tushunasizmi?» savoliga mos javob: «はい、少し 分かります» (Ha, bir oz tushunaman).',
      },
      {
        id: 'ja-minna-l9-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_034.mp3',
        audioTitle: "9-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「マリアさんの ご主人[しゅじん]は テニスが 好[す]きです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: Mariyaning eri futbolni yaxshi ko'radi («サッカーが 好きです»), Mariyaning o'zi esa tennisni yoqtiradi («私は テニスが 好きです»). Demak bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l9-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_034.mp3',
        audioTitle: "9-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「サントスさんは 漢字[かんじ]が よく 分[わ]かります。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda Santos: «漢字は 全然 分かりません» (Kanjini umuman tushunmayman) deydi. Demak bayonot noto'g'ri (✕).",
      },
    ],
  },
  '10': {
    lessonNumber: 10,
    title: '10-dars: Mavjudlik (あります、います、上、下、前、後ろ)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l10-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_036.mp3',
        audioTitle: '10-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「あなたの 部屋[へや]に 何[なに]が ありますか。」',
        options: [
          'ベッドや 机[つくえ]が あります。',
          '犬[いぬ]が います。',
          '静[しず]かじゃ ありません。',
          '部屋へ 行[い]きます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Xonangizda nimalar bor?» (jonsiz buyumlar uchun あります) savoliga: «ベッドや 机が あります» (Karavot va stol bor) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l10-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_036.mp3',
        audioTitle: '10-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 5】Audioni tinglang:\n「今[いま] 教室[きょうしつ]に だれが いますか。」',
        options: [
          '先生[せんせい]と 学生[がくせい]が います。',
          '本[ほん]が あります。',
          'はい、教室です。',
          'だれも いませんでした。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Hozir sinfda kim bor?» (jonli shaxslar uchun います) savoliga: «先生と 学生が います» (Ustoz va talabalar bor) deyiladi.',
      },
      {
        id: 'ja-minna-l10-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_037.mp3',
        audioTitle: '10-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Audioni tinglang:\n写真[しゃしん]の 中[なか]、木[き]の 下[した]に だれが いますか。',
        options: [
          '女の子[おんなのこ]',
          '男の子[おとこのこ]と 犬[いぬ]',
          '猫[ねこ]',
          'お父[とう]さん',
        ],
        correctAnswerIndex: 1,
        explanation:
          "Audioda rasm tasvirlanadi: «木の下に 男の子と 犬が います» (Daraxt ostida o'g'il bola va kuchukcha bor).",
      },
      {
        id: 'ja-minna-l10-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_038.mp3',
        audioTitle: "10-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ポストは コンビニの 隣[となり]に あります。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «ポストは どこに ありますか？... 駅の 前です。コンビニの 隣に あります» deyilgan. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '11': {
    lessonNumber: 11,
    title: "11-dars: Sanoq so'zlari, Miqdor va Muddat (〜つ、〜人、〜回、〜時間)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l11-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_040.mp3',
        audioTitle: '11-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「ご家族[かぞく]は 何人[なんにん]ですか。」',
        options: ['4人[よにん]です。', '4つです。', '4回[よんかい]です。', '4年[よねん]です。'],
        correctAnswerIndex: 0,
        explanation:
          "Oila a'zolari soni (odamlar soni) «〜人 (nin)» bilan sanaladi: «4人 (yonin) です».",
      },
      {
        id: 'ja-minna-l11-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_040.mp3',
        audioTitle: '11-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 4】Audioni tinglang:\n「あなたの 国[くに]から 日本[にほん]まで 飛行機[ひこうき]で 何時間[なんじかん] かかりますか。」',
        options: [
          '7時間[ななじかん]ぐらい かかります。',
          '7時[しちじ]に 着[つ]きます。',
          '7枚[ななまい] 買いました。',
          '7回[ななかい] 行きました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Muddat / soat davomiyligi so'ralganda «〜時間 かかります» (taxminan 7 soat ketadi) shakli ishlatiladi.",
      },
      {
        id: 'ja-minna-l11-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_041.mp3',
        audioTitle: '11-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Audioni tinglang:\n切手[きって]は 全部[ぜんぶ]で いくらですか。',
        options: ['400円', '500円', '600円', '700円'],
        correctAnswerIndex: 1,
        explanation:
          'Audioda: «80円の 切手を 5枚 (80x5=400) と、50円の 切手を 2枚 (50x2=100) ください» deyilgan. Jami narx: 400 + 100 = 500円.',
      },
      {
        id: 'ja-minna-l11-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_042.mp3',
        audioTitle: "11-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんの 家族[かぞく]は 4人[よにん]です。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «家族は 4人です。両親と 姉と 私です» deyilgan. Oilada 4 kishi (ota-ona, opasi va Karina). Bayonot to'g'ri (〇).",
      },
    ],
  },
  '12': {
    lessonNumber: 12,
    title: "12-dars: O'tgan zamon sifatlari va Taqqoslash (〜より、一番、どうでしたか)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l12-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_044.mp3',
        audioTitle: '12-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 1】Audioni tinglang:\n「きのうは 寒[さむ]かったですか。」',
        options: [
          'はい、とても 寒かったです。',
          'いいえ、寒いです。',
          'はい、寒くないです。',
          'あした 寒いです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O'tgan zamon sifat savoliga («Kecha sovuq edimi?»): «はい、とても 寒かったです» deb javob beriladi.",
      },
      {
        id: 'ja-minna-l12-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_044.mp3',
        audioTitle: '12-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 4】Audioni tinglang:\n「日本料理[にほんりょうり]で 何[なに]が 一番[いちばん] 好[す]きですか。」',
        options: [
          'すしが 一番 好きです。',
          '日本料理を 食べました。',
          'おいしかったです。',
          'はい、好きです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Yapon taomlari orasida eng yoqtirganingiz qaysi?» savoliga: «すしが 一番 好きです» (Eng yaxshi ko'rganim sushi) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l12-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_045.mp3',
        audioTitle: "12-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「京都[きょうと]と 奈良[なら]と どちらも 面白[おもしろ]かったです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «京都と 奈良と どちらが 面白かったですか？... どちらも 面白かったです» (Ikkalasi ham qiziq edi) deyiladi. Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l12-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_045.mp3',
        audioTitle: "12-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「旅行[りょこう]の ホテルは とても よかったです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «天気は よかったですが、ホテルは あまり よくなかったです» (Ob-havo yaxshi edi, lekin mehmonxona unchalik yaxshi emasdi) deyilgan. Demak bayonot noto'g'ri (✕).",
      },
    ],
  },
  '13': {
    lessonNumber: 13,
    title: '13-dars: Istak va Maqsad (〜が 欲しい、〜たい、〜に 行きます)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l13-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_047.mp3',
        audioTitle: '13-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「今[いま] 何[なに]が 一番[いちばん] 欲[ほ]しいですか。」',
        options: [
          '新[あたら]しい 車[くるま]が 欲しいです。',
          '日本へ 行きたいです。',
          'はい、欲しいです。',
          '車を 買いました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Hozir nimani eng ko'p xohlaysiz?» savoliga ot + が 欲しいです shaklida javob beriladi: «新しい 車が 欲しいです».",
      },
      {
        id: 'ja-minna-l13-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_047.mp3',
        audioTitle: '13-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 4】Audioni tinglang:\n「週末[しゅうまつ] どこへ 遊[あそ]びに 行[い]きたいですか。」',
        options: [
          '海[うみ]へ 遊びに 行きたいです。',
          '友だちと 会いました。',
          'はい、行きたいです。',
          '日曜日でした。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Dam olish kunlari qayerga dam olgani/aylangani bormoqchisiz?» savoliga: «海へ 遊びに 行きたいです» (Dengizga aylangani bormoqchiman) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l13-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_048.mp3',
        audioTitle: '13-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n山田[やまだ]さんは 今[いま] 何[なに]が 欲[ほ]しいですか。',
        options: ['新しい パソコン', '時間[じかん]', 'お金[かね]', '車[くるま]'],
        correctAnswerIndex: 1,
        explanation:
          'Sato yangi kompyuter xohlaydi, Yamada esa: «私は 毎日 忙しいですから、時間が 欲しいです» (Har kuni bandman, shuning uchun vaqt xohlayman) deydi.',
      },
      {
        id: 'ja-minna-l13-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_048.mp3',
        audioTitle: '13-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n二人は 何[なに]を 食[た]べに 行[い]きますか。',
        options: ['ラーメン', 'カレー', 'すし', 'そば'],
        correctAnswerIndex: 1,
        explanation:
          'Audioda: «何を食べたいですか？... カレーを食べたいです。じゃあ、そうしましょう» deb aytiladi. Ular karri yeyishga borishadi.',
      },
    ],
  },
  '14': {
    lessonNumber: 14,
    title: '14-dars: Te-shakli va Iltimos (〜てください、〜ましょうか、〜ています)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l14-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_050.mp3',
        audioTitle: '14-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「今[いま] 雨[あめ]が 降[ふ]っていますか。」',
        options: [
          'はい、降っています。',
          'いいえ、雨でした。',
          'はい、降りませんでした。',
          'あした 降ります。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Hozir yomg'ir yog'yaptimi?» savoliga davomli zamonda: «はい、降っています» (Ha, yog'yapti) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l14-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_051.mp3',
        audioTitle: '14-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Audioni tinglang:\n佐藤[さとう]さんは 今[いま] どこで 何[なに]を していますか。',
        options: [
          '2階で 会議[かいぎ]を しています。',
          '1階で コピーしています。',
          '食堂で ご飯を 食べています。',
          '外で タクシーを 呼んでいます。',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Audioda: «佐藤さんは どこに いますか？... 1階で コピーしています» deb javob beriladi.',
      },
      {
        id: 'ja-minna-l14-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_052.mp3',
        audioTitle: "14-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]は 一緒[いっしょ]に 車[くるま]で 帰[かえ]ります。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Ayol taksi taklif qiladi, erkak esa bugun mashinada kelganini aytib birga ketishni taklif qiladi va ayol rozi bo'ladi. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '15': {
    lessonNumber: 15,
    title: '15-dars: Ruxsat va Taqiqlash (〜ても いいです、〜ては いけません)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l15-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_054.mp3',
        audioTitle: '15-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「美術館[びじゅつかん]で 写真[しゃしん]を 撮[と]っても いいですか。」',
        options: [
          'いいえ、撮っては いけません。',
          'はい、写真じゃ ありません。',
          'いいえ、撮りませんでした。',
          '写真を 見ました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«San'at muzeyida rasmga tushirish mumkinmi?» savoliga taqiq javobi: «いいえ、撮っては いけません» (Yo'q, tushirish mumkin emas).",
      },
      {
        id: 'ja-minna-l15-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_055.mp3',
        audioTitle: "15-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ロビーで たばこを 吸[す]っても いいです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          'Audioda: «ここで たばこを 吸っても いいですか？... すみません、あちらの ロビーで お願いします» deyilgan. Demak lobbida chekish mumkin (〇).',
      },
      {
        id: 'ja-minna-l15-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_055.mp3',
        audioTitle: "15-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ここへ 車[くるま]を 止[と]めても いいです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «ここに 車を 止めても いいですか？... すみません、あちらに 止めてください» deyilgan. Bu yerga to'xtatish mumkin emas. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '16': {
    lessonNumber: 16,
    title: "16-dars: Ketma-ketlik va Sifatlarni bog'lash (〜て、〜てから、〜くて)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l16-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_057.mp3',
        audioTitle: '16-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「朝[あさ] 起[お]きて 何[なに]を しますか。」',
        options: [
          '顔[かお]を 洗[あら]って、ご飯を 食べます。',
          '6時に 起きました。',
          'はい、起きます。',
          'きのう 起きました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Ertalab uyg'onib nimalar qilishi ketma-ket fe'l zanjirida aytiladi: «顔を 洗って、ご飯を 食べます» (Yuzimni yuvib, ovqatlanaman).",
      },
      {
        id: 'ja-minna-l16-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_058.mp3',
        audioTitle: '16-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Audioni tinglang:\n会社[かいしゃ]まで どうやって 行[い]きますか。',
        options: [
          '地下鉄[ちかてつ]と タクシーで 行きます。',
          'JRで 行って、近鉄[きんてつ]に 乗り換[か]えて、歩[ある]いて 行きます。',
          'バスだけで 行きます。',
          '車を 運転[うんてん]して 行きます。',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Audioda: «JRで 大阪まで 行って、近鉄に 乗り換えて、日本橋で 降ります。それから 歩いて 行きます» deyiladi.',
      },
      {
        id: 'ja-minna-l16-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_059.mp3',
        audioTitle: "16-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は 3時[さんじ]に テニスを します。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda dars 3 da tugashi («3時に 終わります»), tennis esa 3 yarimda boshlanishi («3時半に ロビーで») aytiladi. Demak bayonot noto'g'ri (✕).",
      },
    ],
  },
  '17': {
    lessonNumber: 17,
    title: '17-dars: Inkor shakl va Majburiyat (〜ないで ください、〜なければ なりません)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l17-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_061.mp3',
        audioTitle: '17-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「外国旅行[がいこくりょこう]に 何[なに]を 持[も]って行[い]かなければ なりませんか。」',
        options: [
          'パスポートを 持って行かなければ なりません。',
          '旅行へ 行きました。',
          'いいえ、持って行かないで ください。',
          'とても 楽[たの]しかったです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Chet el safariga nimani olib borish majburiy?» savoliga: «パスポートを 持って行かなければ なりません» (Pasportni olib borish kerak) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l17-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_062.mp3',
        audioTitle: "17-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は 今晩[こんばん] 食事[しょくじ]に 行[い]きません。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «今晩は レポートを 書かなければ なりませんから...» (Bugun oqshom hisobot yozishim kerak) deb taklifni rad etadi. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '18': {
    lessonNumber: 18,
    title: "18-dars: Lug'at shakli, Qobiliyat va Qiziqish (〜ことが できます、趣味は〜ことです)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l18-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_064.mp3',
        audioTitle: '18-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 1】Audioni tinglang:\n「ダンスが できますか。」',
        options: [
          'はい、少し できます。',
          'いいえ、ダンスを しました。',
          'ダンスが 好きでした。',
          'はい、できません。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Raqsga tusha olasizmi?» savoliga qobiliyat ifodasi bilan: «はい、少し できます» (Ha, ozroq eplay olaman) deb javob beriladi.',
      },
      {
        id: 'ja-minna-l18-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_064.mp3',
        audioTitle: '18-dars Mondai 1: Savollarga javob',
        question: '【Mondai 1 - Savol 4】Audioni tinglang:\n「趣味[しゅみ]は 何[なん]ですか。」',
        options: [
          '音楽[おんがく]を 聞[き]く ことです。',
          '映画[えいが]を 見ました。',
          'スポーツじゃ ありません。',
          '日曜日です。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Qiziqishingiz/hobbingiz nima?» deyilganda Lug'at shakli + ことです bilan javob beriladi: «音楽を 聞く ことです».",
      },
      {
        id: 'ja-minna-l18-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_065.mp3',
        audioTitle: "18-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]の 趣味[しゅみ]は 料理[りょうり]を 作[つく]る ことです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «色々な 国の 料理を 作る ことです» deyilgan. Uning qiziqishi har xil taomlar tayyorlash. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '19': {
    lessonNumber: 19,
    title:
      "19-dars: Ta-shakli, Tajriba va Sanab o'tish (〜た ことが あります、〜たり〜たり します)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l19-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_067.mp3',
        audioTitle: '19-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「相撲[すもう]を 見[み]た ことが ありますか。」',
        options: [
          'はい、一度[いちど] あります。',
          'いいえ、見ました。',
          'はい、相撲です。',
          'あした 見ます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Hayotiy tajriba so'ralganda (〜た ことがありますか): «はい、一度 あります» (Ha, bir marta ko'rganman) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l19-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_068.mp3',
        audioTitle: "19-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]の ご両親[りょうしん]は 元気[げんき]です。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: ota-onasi 80 yoshdan oshgan bo'lsa-da, sayohat qilib, sabzavot yetishtirib tetik yurgani aytiladi. Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l19-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_068.mp3',
        audioTitle: "19-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]は 今晩[こんばん] お風呂[ふろ]に 入[はい]ります。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda isitmasi borligi uchun: «お風呂に 入らないで、早く 寝てください» (Vannaga tushmay, ertaroq uxlang) deb maslahat beriladi. Demak bayonot noto'g'ri (✕).",
      },
    ],
  },
  '20': {
    lessonNumber: 20,
    title: '20-dars: Oddiy Uslub (普通形 Futsuugo)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l20-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_070.mp3',
        audioTitle: '20-dars Mondai 1: Savollarga javob (Oddiy uslub)',
        question:
          '【Mondai 1 - Savol 1】Oddiy uslubdagi audioni tinglang:\n「日曜日[にちようび] 何[なに] する？」',
        options: [
          '友達[ともだち]と 遊[あそ]ぶ。',
          '日曜日です。',
          '勉強[べんきょう]しました。',
          'どこも 行きません。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Oddiy uslubda (Futsuugo) do'stlar o'rtasida berilgan savolga oddiy fe'l shaklida: «友達と 遊ぶ» (Do'stlarim bilan aylanaman/o'ynayman) deb javob qaytariladi.",
      },
      {
        id: 'ja-minna-l20-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_070.mp3',
        audioTitle: '20-dars Mondai 1: Savollarga javob (Oddiy uslub)',
        question:
          '【Mondai 1 - Savol 5】Oddiy uslubdagi audioni tinglang:\n「日本[にほん]の 映画[えいが]を 見[み]た こと ある？」',
        options: [
          'うん、あるよ。',
          'ううん、見ない。',
          'はい、見ました。',
          '映画[えいが]じゃない。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Oddiy uslubda «...mita koto aru?» savoliga tasdiq javob: «うん、あるよ» (Ha, ko'rganman).",
      },
      {
        id: 'ja-minna-l20-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_071.mp3',
        audioTitle: "20-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Oddiy uslubdagi suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]は 傘[かさ]を 持[も]っていません。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «傘 持ってる？... ううん。田中さんは？... 僕も 持ってない» deyilgan. Ikkalasida ham soyabon yo'q. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '21': {
    lessonNumber: 21,
    title: '21-dars: Fikr va Iqtibos (〜と 思います、〜と 言いました)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l21-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_073.mp3',
        audioTitle: '21-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「明日[あした]は 天気[てんき]が いいと 思[おも]いますか。」',
        options: [
          'はい、いいと 思います。',
          'いいえ、天気です。',
          'はい、雨でした。',
          'きのう よかったです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Ertaga ob-havo yaxshi bo'ladi deb o'ylaysizmi?» savoliga fikr bildirib: «はい、いいと 思います» (Ha, yaxshi bo'ladi deb o'ylayman) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l21-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_073.mp3',
        audioTitle: '21-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 4】Audioni tinglang:\n「日本人は ご飯[はん]を 食[た]べる 前[まえ]に 何[なん]と 言[い]いますか。」',
        options: [
          '「いただきます」と 言います。',
          '「ごちそうさま」と 言います。',
          '「さようなら」と 言います。',
          '「いってきます」と 言います。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Yaponlar ovqat yeyishdan oldin «いただきます» (Itadakimasu) deb aytadilar.',
      },
      {
        id: 'ja-minna-l21-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_074.mp3',
        audioTitle: "21-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「サントスさんは 車[くるま]を 運転[うんてん]しますから、ビールを 飲[の]みません。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda Santos mashinada kelgani va ichsa ruxsat berilmasligi sababli pivo ichmasligini aytadi. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '22': {
    lessonNumber: 22,
    title: '22-dars: Sifatdosh Birikmalar (Otni ifodalovchi jumlalar)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l22-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_076.mp3',
        audioTitle: '22-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「あなたが 生[う]まれた 所[ところ]は どこですか。」',
        options: [
          'サマルカンドです。',
          '先週[せんしゅう] 生まれました。',
          '病院[びょういん]へ 行きました。',
          'はい、生まれました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Siz tug'ilgan joy qayer?» savoliga shahar/joy nomi aytiladi: «サマルカンドです».",
      },
      {
        id: 'ja-minna-l22-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_076.mp3',
        audioTitle: '22-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang:\n「家族[かぞく]で 眼鏡[めがね]を かけている 人[ひと]が いますか。」',
        options: [
          'はい、父[ちち]が かけています。',
          'いいえ、眼鏡じゃ ありません。',
          '眼鏡を 買いました。',
          'はい、だれも いません。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Oilangizda ko'zoynak taqqan odam bormi?» savoliga: «はい、父が かけています» (Ha, otam taqqanlar) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l22-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_077.mp3',
        audioTitle: "22-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は クッキーを 作[つく]りました。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «これ、私が 作った クッキーですけど、いかがですか» deyiladi. Ayol o'zi kuki pechenyelarini pishirgan. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '23': {
    lessonNumber: 23,
    title: '23-dars: Holat va Shart (〜とき、〜と)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l23-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_079.mp3',
        audioTitle: '23-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang:\n「道[みち]が 分[わ]からない とき、どうしますか。」',
        options: [
          '交番[こうばん]の 人[ひと]に 聞[き]きます。',
          '道を 歩[ある]きました。',
          'はい、分かりました。',
          'タクシーが ありません。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Yo'lni bilmagan paytda nima qilasiz?» savoliga: «交番の 人に 聞きます» (Militsiya maskanidagi xodimdan so'rayman) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l23-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_079.mp3',
        audioTitle: '23-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang:\n「暇[ひま]な とき、何[なに]を しますか。」',
        options: [
          '本[ほん]を 読[よ]んだり、音楽[おんがく]を 聞[き]いたり します。',
          'はい、暇でした。',
          '仕事[しごと]を しなければ なりません。',
          '日曜日です。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Bo'sh paytingizda nima qilasiz?» savoliga odatdagi mashg'ulotlar aytiladi: «本を 読んだり、音楽を 聞いたり します».",
      },
      {
        id: 'ja-minna-l23-m3-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_081.mp3',
        audioTitle: "23-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「この ボタンを 押[お]すと、切符[きっぷ]が 出[で]ます。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda tugmani bosganda chipta emas, karta chiqishi aytiladi («カードが 出ます»). Shuning uchun bayonot noto'g'ri (✕).",
      },
    ],
  },
  '24': {
    lessonNumber: 24,
    title: '24-dars: Harakat Hadyasi (〜て くれます、〜て あげます、〜て もらいます)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l24-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_083.mp3',
        audioTitle: '24-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「子どもの とき、お母[かあ]さんは お菓子[かし]を くれましたか。」',
        options: [
          'はい、よく くれました。',
          'いいえ、あげました。',
          '母に お菓子を もらいました。',
          'お菓子を 買いました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Bolaligingizda onangiz shirinliklar berarmidi?» (〜てくれましたか) savoliga to'g'ri javob: «はい、よく くれました» (Ha, tez-tez berib turardi).",
      },
      {
        id: 'ja-minna-l24-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_084.mp3',
        audioTitle: "24-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]は お兄[にい]さんに 時計[とけい]を もらいました。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda: «誕生日に 兄が くれました» deyilgan. Demak akasi unga soat sovg'a qilgan, ya'ni soatni akasidan olgan (〇).",
      },
      {
        id: 'ja-minna-l24-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_084.mp3',
        audioTitle: "24-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は 男[おとこ]の 人[ひと]に 傘[かさ]を 貸[か]します。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda yomg'irda qolgan kishiga ayol soyabonini qarzga beradi («傘を 貸しましょうか？... ありがとうございます»). Bayonot to'g'ri (〇).",
      },
    ],
  },
  '25': {
    lessonNumber: 25,
    title: "25-dars: Shart va To'siqsizlik (〜たら、〜ても)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l25-m1-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_086.mp3',
        audioTitle: '25-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang:\n「もし 1億円[いちおくえん] あったら、何[なに]を したいですか。」',
        options: [
          '世界旅行[せかいりょこう]を したいです。',
          'お金[かね]が ありませんでした。',
          'はい、1億円です。',
          '銀行[ぎんこう]へ 行きました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Agar 100 million iyenangiz bo'lganida nima qilardingiz?» (〜たら) savoliga: «世界旅行を したいです» (Dunyo bo'ylab sayohat qilmoqchi bo'lardim) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l25-m1-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_086.mp3',
        audioTitle: '25-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 4】Audioni tinglang:\n「第25課[だいにじゅうごか]の 問題[もんだい]が 終[お]わったら、何[なに]を しますか。」',
        options: [
          '初級[しょきゅう]2（第26課）を 勉強[べんきょう]します！',
          '日本語を やめます。',
          'きのう 終わりました。',
          'はい、25課です。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«25-dars masalalari tugagach, nima qilasiz?» savoliga Minna no Nihongo Shokyu 1 kitobi tugagach Shokyu 2 (26-dars)ni o'rganish javobi to'g'ri keladi.",
      },
      {
        id: 'ja-minna-l25-m2-q1',
        audioUrl: '/audio/minna/minna_shokyu_1_087.mp3',
        audioTitle: "25-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんは 1年[いちねん] 休[やす]みを もらったら、絵[え]を 見[み]に 行[い]きたいです。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Audioda Karina: «いろいろな 国の 美術館へ 絵を 見に 行きたいです» deydi. Demak u rasmlar ko'rish uchun muzeylarga bormoqchi. Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l25-m2-q2',
        audioUrl: '/audio/minna/minna_shokyu_1_087.mp3',
        audioTitle: "25-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          '【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「明日[あした] 雨[あめ]が 降[ふ]ったら、サッカーの 試合[しあい]を しません。」',
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Audioda: «明日 雨が 降っても、サッカーの 試合を しますか？... ええ、雨が 降っても、やりますよ» (Yomg'ir yog'sa ham o'ynaymiz) deyilgan. Demak bayonot noto'g'ri (✕).",
      },
    ],
  },
  '26': {
    lessonNumber: 26,
    title: '26-Dars: 〜んです / 〜んですが (Izoh, sabab va iltimos)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l26-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_001.mp3',
        audioTitle: '26-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「どうして 遅[おく]れたんですか。」',
        options: [
          '道[みち]が 混[こ]んでいたんです。',
          '駅[えき]に 行[い]きます。',
          '遅[おく]れませんでした。',
          'はい、そうです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Nega kechikdingiz?» (どうして遅れたんですか) savoliga sababni «〜んです» bilan ifodalab: «道が 混んでいたんです» (Yo'l tirband edi-da) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l26-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_001.mp3',
        audioTitle: '26-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「日本語[にほんご]が お上手[じょうず]ですね。どこで 習[なら]ったんですか。」',
        options: [
          '大学[だいがく]で 勉強[べんきょう]したんです。',
          'いいえ、下手[へた]です。',
          '本[ほん]を 買[か]いました。',
          '明日[あした]から 始[はじ]めます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Yapon tilingiz juda yaxshi ekan, qayerda o'rgangansiz?» savoliga o'tmishdagi sabab va izoh bilan: «大学で 勉強したんです» (Universitetda o'rganganman) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l26-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_001.mp3',
        audioTitle: '26-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「頭[あたま]が 痛[いた]いんですが、どうしたら いいですか。」',
        options: [
          '薬[くすり]を 飲[の]んで、休[やす]んだら いいですよ。',
          '痛[いた]くないです。',
          '病院[びょういん]は あそこです。',
          'はい、痛[いた]いです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Boshim og'riyapti, nima qilsam bo'ladi?» maslahat so'roviga «〜たらいいですよ» qolipi bilan: «薬を 飲んで、休んだら いいですよ» (Dori ichib, dam olsangiz yaxshi bo'ladi) tavsiya etiladi.",
      },
      {
        id: 'ja-minna-l26-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_002.mp3',
        audioTitle: '26-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「レポートの 書[か]き方[かた]が 分[わ]からないんですが、教[おし]えて いただけませんか。」\n\n男[おとこ]の 人[ひと]は 何[なに]を 頼[たの]んでいますか。',
        options: [
          'レポートの 書き方を 教えてもらうこと',
          'レポートを 書いてあげること',
          'レポートを 提出すること',
          '本を 探すこと',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Erkak kishi: «Hisobot yozish qoidasini bilmayapman, o'rgatib berolmaysizmi?» deb muloyim iltimos (〜ていただけませんか) qilmoqda.",
      },
      {
        id: 'ja-minna-l26-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_002.mp3',
        audioTitle: '26-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「すみません、パスポートを 落[お]として しまったんですが、どうしたら いいですか。交番[こうばん]へ 行[い]ったら いいですよ。」\n\nパスポートを 落とした 人は まず どこへ 行きますか。',
        options: ['交番[こうばん]', '大使館[たいしかん]', '駅[えき]', '空港[くうこう]'],
        correctAnswerIndex: 0,
        explanation:
          'Pasportini tushirib qoldirgan shaxsga militsiya tayanch punkti (交番)ga borish maslahat berildi.',
      },
      {
        id: 'ja-minna-l26-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_002.mp3',
        audioTitle: "26-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「生花[いけばな]を 習[なら]いたいんですが、いい 先生[せんせい]を 紹介[しょうかい]して いただけませんか。鈴木[すずき]先生が 親切[しんせつ]ですよ。」\nBayonot: 「女[おんな]の 人[ひと]は 鈴木先生を 紹介[しょうかい]して もらいました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Ayol kishi gul bezash (Ikebana) o'qituvchisini so'radi va unga Suzuki sensei tavsiya etildi. Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l26-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_002.mp3',
        audioTitle: "26-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「運動会[うんどうかい]に 行[い]かないんですか。ええ、用事[ようじ]が あるんです。」\nBayonot: 「男[おとこ]の 人[ひと]は 運動会に 行きます。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Erkak kishi ishi borligi sababli sport musobaqasiga (運動会) bormasligini aytdi (行かないんですか -> ええ、用事があるんです). Shuning uchun bayonot noto'g'ri (✕).",
      },
    ],
  },
  '27': {
    lessonNumber: 27,
    title: '27-Dars: 可能形 (Qodirlik mayli / Mumkinlik)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l27-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_003.mp3',
        audioTitle: '27-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「漢字[かんじ]が 書[か]けますか。」',
        options: [
          'はい、少[すこ]し 書[か]けます。',
          'いいえ、書[か]きません。',
          'はい、漢字[かんじ]が 好[す]きです。',
          '書[か]いて ください。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Kanji yozishni bilasizmi / yoza olasizmi?» (書けますか) so'rog'iga qodirlik shakli bilan: «はい、少し 書けます» (Ha, biroz yoza olaman) deb javob beriladi.",
      },
      {
        id: 'ja-minna-l27-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_003.mp3',
        audioTitle: '27-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「富士山[ふじさん]が 見[み]えますか。」',
        options: [
          'はい、きれいに 見[み]えます。',
          'いいえ、見[み]ません。',
          '見[み]せて ください。',
          '山[やま]へ 行[い]きます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Fuji tog'i ko'rinyaptimi?» (見えますか - o'z-o'zidan ko'rinish) savoliga: «はい、きれいに 見えます» (Ha, chiroyli ko'rinyapti) javobi to'g'ri.",
      },
      {
        id: 'ja-minna-l27-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_003.mp3',
        audioTitle: '27-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「お金[かね]は いくら ありますか。」',
        options: [
          '1000円[えん]しか ありません。',
          'たくさん ありません。',
          '1000円[えん]だけ ありません。',
          'お金[かね]を 払[はら]いました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Qancha pulingiz bor?» savoliga chegaralangan miqdorni inkor bilan «〜しか〜ない» ifodalab: «1000円しか ありません» (Faqat 1000 yenim bor xolos) deyiladi.',
      },
      {
        id: 'ja-minna-l27-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_004.mp3',
        audioTitle: '27-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「この マンションから 海[うみ]が 見[み]えますか。ええ、天[てん]気[き]が いい 日[ひ]は よく 見[み]えますよ。波[なみ]の 音[おと]も 聞[き]こえます。」\n\nこの マンションの 特徴[とくちょう]は 何[なに]ですか。',
        options: [
          '海[うみ]が 見[み]えて、波[なみ]の 音[おと]が 聞[き]こえること',
          '駅[えき]から 近[ちか]いこと',
          '部屋[へや]が 狭[せま]いこと',
          '富士山[ふじさん]が 見[み]えること',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Suhbatda bu kvartiradan havo yaxshi paytda dengiz ko'rinishi (海が見える) va to'lqin ovozi eshitilishi (波の音が聞こえる) ta'kidlandi.",
      },
      {
        id: 'ja-minna-l27-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_004.mp3',
        audioTitle: '27-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「日本語[にほんご]の 新聞[しんぶん]が 読[よ]めますか。いいえ、漢字[かんじ]が 難[むずか]しいですから、読[よ]めません。ひらがなしか 読[よ]めません。」\n\nこの 人[ひと]は 何[なに]が 読[よ]めますか。',
        options: [
          'ひらがな',
          '漢字[かんじ]の 新聞[しんぶん]',
          '英語[えいご]の 雑誌[ざっし]',
          '本[ほん]',
        ],
        correctAnswerIndex: 0,
        explanation:
          "So'zlovchi yaponcha gazetalarni kanjisi qiyin bo'lgani uchun o'qiy olmasligini, faqat hiraganani o'qiy olishini (ひらがなしか 読めません) aytdi.",
      },
      {
        id: 'ja-minna-l27-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_004.mp3',
        audioTitle: "27-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「新[あたら]しい 空港[くうこう]は いつ できますか。来年[らいねん]の 4月[しがつ]に できる 予定[よてい]です。」\nBayonot: 「来年[らいねん]の 4月[しがつ]に 空港[くうこう]が 完成[かんせい]します。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Yangi aeroport kelasi yilning aprel oyida qurib bitkazilishi (できる) rejalashtirilgan. Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l27-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_004.mp3',
        audioTitle: "27-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「駅前[えきまえ]に 大[おお]きな スーパーが できましたね。ええ、便利[べんり]に なりましたが、夜[よる]は 8時[はちじ]までしか 開[あ]いて いません。」\nBayonot: 「新[あたら]しい スーパーは 夜[よる] 遅[おそ]くまで 開[あ]いて います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Yangi supermarket kechasi faqat soat 8 gacha ochiq xolos (8時までしか開いていません), kechgacha emas. Shuning uchun bayonot noto'g'ri (✕).",
      },
    ],
  },
  '28': {
    lessonNumber: 28,
    title: '28-Dars: 〜ながら / 〜し、〜し (Bir paytda harakat va sabablar)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l28-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_005.mp3',
        audioTitle: '28-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「いつも 音楽[おんがく]を 聞[き]きながら 勉強[べんきょう]するんですか。」',
        options: [
          'はい、いつも そうして います。',
          'いいえ、音楽[おんがく]は 聞[き]きません。',
          '勉強[べんきょう]は 好[す]きです。',
          '音楽[おんがく]を 歌[うた]います。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Har doim musiqa tinglab dars qilasizmi?» so'rog'iga «はい、いつも そうしています» (Ha, har doim shunday qilaman) deb tasdiqlanadi.",
      },
      {
        id: 'ja-minna-l28-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_005.mp3',
        audioTitle: '28-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「どうして この レストランに よく 来[く]るんですか。」',
        options: [
          'おいしいし、値段[ねだん]も 安[やす]いからです。',
          '高[たか]いからです。',
          '一人[ひとり]で 来[き]ました。',
          'お腹[なか]が すきました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Sabablarni ketma-ket sanashda «〜し、〜し、〜から» qolipi ishlatiladi: «Mazali hamda narxi ham arzon bo'lgani uchun».",
      },
      {
        id: 'ja-minna-l28-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_005.mp3',
        audioTitle: '28-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「休[やす]みの 日[ひ]は いつも 何[なに]を して いますか。」',
        options: [
          '本[ほん]を 読[よ]んだり、テレビを 見[み]たり して います。',
          '働[はたら]きます。',
          'どこへも 行[い]きません。',
          '昨日[きのう]は 休[やす]みでした。',
        ],
        correctAnswerIndex: 0,
        explanation: "Doimiy odat va mashg'ulotlarni ifodalashda V-て＋います qo'llaniladi.",
      },
      {
        id: 'ja-minna-l28-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_006.mp3',
        audioTitle: '28-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「山田[やまだ]さんは 真面目[まじめ]だし、親切[しんせつ]だし、それに 英語[えいご]も 上手[じょうず]ですね。ええ、ですから みんなに 人気[にんき]が あるんですよ。」\n\n山田[やまだ]さんは どうして 人気[にんき]が ありますか。',
        options: [
          '真面目[まじめ]で 親切[しんせつ]で、英語[えいご]も 上手[じょうず]だから',
          'スポーツが 得意[とくい]だから',
          'お金持[かねも]ちだから',
          '背[せ]が 高[たか]いから',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Yamada san jiddiy, mehribon va ingliz tilini yaxshi bilgani uchun hammaga yoqishi aytildi.',
      },
      {
        id: 'ja-minna-l28-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_006.mp3',
        audioTitle: '28-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「お茶[ちゃ]を 飲[の]みながら、少[すこ]し 話[はな]しませんか。ええ、いいですね。そうしましょう。」\n\n2人[ふたり]は これから 何[なに]を しますか。',
        options: [
          'お茶[ちゃ]を 飲[の]みながら 話[はな]す',
          '食事[しょくじ]を する',
          '会議[かいぎ]を 始[はじ]める',
          '帰[かえ]る',
        ],
        correctAnswerIndex: 0,
        explanation: 'Ikkala suhbatdosh choy icha turib biroz suhbatlashishga kelishib olishdi.',
      },
      {
        id: 'ja-minna-l28-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_006.mp3',
        audioTitle: "28-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「田中[たなか]さんは 歌[うた]を 歌[うた]いながら 運転[うんてん]して います。危[あぶ]ないですよ。」\nBayonot: 「田中[たなか]さんは 静[しず]かに 運転[うんてん]して います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Tanaka san qo'shiq aytib mashina haydamoqda (歌を歌いながら運転しています), u xotirjam va jim haydamayapti. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l28-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_006.mp3',
        audioTitle: "28-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「この アパートは 駅[えき]から 近[ちか]いし、家賃[やちん]も 安[やす]いです。ですから、ここに 決[き]めました。」\nBayonot: 「この 人[ひと]は 駅[えき]から 近[ちか]くて 安[やす]いので、アパートを 決[き]めました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Kvartira bekatga yaqin va ijarasi arzon bo'lgani uchun tanlandi. Bayonot to'g'ri (〇).",
      },
    ],
  },
  '29': {
    lessonNumber: 29,
    title: "29-Dars: 自動詞 / 〜ています / 〜てしまいました (Holat fe'llari va afsus)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l29-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_007.mp3',
        audioTitle: '29-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「窓[まど]が 開[あ]いて いますね。寒[さむ]いですか。」',
        options: [
          'はい、閉[し]めて ください。',
          'はい、開[あ]けました。',
          'いいえ、閉[し]まりません。',
          '窓[まど]が 割[わ]れました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O'z-o'zidan sodir bo'lgan holat (自動詞＋〜ています): Deraza ochiq turibdi (開いています), sovuq bo'lsa uni yopib berish so'raladi: «はい、閉めてください».",
      },
      {
        id: 'ja-minna-l29-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_007.mp3',
        audioTitle: '29-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「電車[でんしゃ]の 中[なか]に かばんを 忘[わす]れて しまったんです。」',
        options: [
          'それは 大変[たいへん]でしたね。すぐ 駅員[えきいん]に 言[い]いましょう。',
          'おめでとうございます。',
          'かばんを 買[か]いましょう。',
          'はい、忘[わす]れました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          '«Poyezdda sumkamni unutib qoldirdim» (忘れてしまった) degan afsusli vaziyatga hamdardlik bildiriladi.',
      },
      {
        id: 'ja-minna-l29-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_007.mp3',
        audioTitle: '29-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「この パソコンは 壊[こわ]れて いますか。」',
        options: [
          'はい、動[うご]きません。',
          'いいえ、壊[こわ]しました。',
          '新[あたら]しい パソコンです。',
          '買[か]いたいです。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Buzilgan holatda turgan buyum haqida: «はい、動きません» (Ha, ishlamayapti).',
      },
      {
        id: 'ja-minna-l29-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_008.mp3',
        audioTitle: '29-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「あれ？ 会議室[かいぎしつ]の 電気が 消[き]えて いますね。もう 誰[だれ]も いないんですか。ええ、5時[ごじ]に 終[お]わりましたから。」\n\n会議室[かいぎしつ]は 今[いま] どうなって いますか。',
        options: [
          '電気が 消えていて、誰も いない',
          'まだ 会議をして いる',
          '電気が ついて いる',
          '掃除[そうじ]をして いる',
        ],
        correctAnswerIndex: 0,
        explanation: "Majlis xonasining chirog'i o'chgan va hech kim yo'q.",
      },
      {
        id: 'ja-minna-l29-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_008.mp3',
        audioTitle: '29-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「宿題[しゅくだい]は もう やりましたか。すみません、昨日[きのう] 熱[ねつ]が 出[で]て しまって、できませんでした。」\n\nどうして 宿題[しゅくだい]が できませんでしたか。',
        options: [
          '熱[ねつ]が 出[で]て しまったから',
          '宿題[しゅくだい]を 忘[わす]れたから',
          '遊[あそ]んでいたから',
          '時間[じかん]が なかったから',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Kutilmaganda isitmasi chiqib qolgani sababli vazifani bajara olmaganini aytdi.',
      },
      {
        id: 'ja-minna-l29-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_008.mp3',
        audioTitle: "29-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「この 皿[さら]は 割[わ]れて いますから、使[つか]わないで ください。分[わ]かりました。」\nBayonot: 「この 皿[さら]は まだ 使[つか]えます。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Tarelka singanligi sababli ishlatmaslik aytildi. Demak, undan foydalanib bo'lmaydi. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l29-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_008.mp3',
        audioTitle: "29-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「買[か]い物[もの]の お金[かね]を 全部[ぜんぶ] 使[つか]って しまいました。」\nBayonot: 「お金[かね]が まだ 残[のこ]って います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Barcha xarid pullari sarflab tugatilgan (全部使ってしまいました). Shuning uchun pul qolmagan. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '30': {
    lessonNumber: 30,
    title: "30-Dars: 〜てあります / 〜ておきます (Oldindan tayyorlab qo'yish)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l30-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_009.mp3',
        audioTitle: '30-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「カレンダーに 何[なに]か 書[か]いて ありますか。」',
        options: [
          'はい、今月[こんげつ]の 予定[よてい]が 書[か]いて あります。',
          'いいえ、カレンダーは ありません。',
          'カレンダーを 買[か]いました。',
          '壁[かべ]に 掛[か]けます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Biror maqsadda qilingan harakat natijasi (他動詞＋〜てあります): «はい、今月の 予定が 書いて あります» (Ha, bu oylik rejalar yozib qo'yilgan).",
      },
      {
        id: 'ja-minna-l30-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_009.mp3',
        audioTitle: '30-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「会議[かいぎ]の 前[まえ]に 資料[しりょう]を コピーして おきましょうか。」',
        options: [
          'ええ、20部[ぶ] コピーして おいて ください。',
          'いいえ、コピーしました。',
          '資料[しりょう]は 読[よ]みました。',
          '会議[かいぎ]は 終[お]わりました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Oldindan tayyorgarlik ko'rish (〜ておきます): 20 nusxa ko'chirib qo'yish so'ralmoqda.",
      },
      {
        id: 'ja-minna-l30-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_009.mp3',
        audioTitle: '30-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「ハサミを 使[つか]った 後[あと]で、どこに 置[お]きますか。」',
        options: [
          '元[もと]の 所[ところ]に 戻[もど]して おいて ください。',
          'ゴミ箱[ばこ]に 捨[す]てます。',
          '机[つくえ]の 上[うえ]に あります。',
          '買[か]って きます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Ishlatib bo'lgach asbobni o'z joyiga qaytarib qo'yish: «元の所に 戻して おいてください».",
      },
      {
        id: 'ja-minna-l30-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_010.mp3',
        audioTitle: '30-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「壁[かべ]に 綺麗[きれい]な 絵[え]が 掛[か]けて ありますね。ええ、誕生日に 友達が くれた 絵なんです。」\n\n壁[かべ]の 絵[え]は どうした ものですか。',
        options: [
          '友達[ともだち]が くれた 絵[え]',
          '自分[じぶん]で 描[か]いた 絵[え]',
          'デパートで 買[か]った 絵[え]',
          '先生[せんせい]の 絵[え]',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Devorga osib qo'yilgan rasm do'sti tug'ilgan kuniga sovg'a qilgan rasm ekanligi aytildi.",
      },
      {
        id: 'ja-minna-l30-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_010.mp3',
        audioTitle: '30-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「旅行[りょこう]の 前[まえ]に ホテルを 予約[よやく]して おきましたか。ええ、もう インターネットで 予約[よやく]して ありますよ。」\n\nホテルは どうなって いますか。',
        options: [
          'もう 予約[よやく]して ある',
          'これから 予約[よやく]する',
          '予約[よやく]できなかった',
          '泊[と]まらない',
        ],
        correctAnswerIndex: 0,
        explanation: "Mehmonxona allaqachon internet orqali band qilib (〜てあります) qo'yilgan.",
      },
      {
        id: 'ja-minna-l30-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_010.mp3',
        audioTitle: "30-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「パーティーの 準備[じゅんび]は もう できましたか。ビールと ワインは 冷蔵庫[れいぞうこ]に 入[い]れて あります。」\nBayonot: 「飲[の]み物[もの]は 冷[つめ]たくなって います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Ichimliklar muzlatgichga solib qo'yilgan (入れてあります), demak ular sovutilgan holatda. Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l30-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_010.mp3',
        audioTitle: "30-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「道具[どうぐ]を 片付[かたづ]けましょうか。いいえ、明日[あした]も 使[つか]いますから、そのままに して おいて ください。」\nBayonot: 「道具[どうぐ]を すぐ 箱[はこ]に しまいます。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Ertaga ham ishlatilishi sababli asboblarni yig'ishtirmasdan shunday qoldirish (そのままにしておいて) aytildi. Shuning uchun bayonot noto'g'ri (✕).",
      },
    ],
  },
  '31': {
    lessonNumber: 31,
    title: '31-Dars: 意向形 (Niyat mayli / 〜ようと思っています)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l31-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_011.mp3',
        audioTitle: '31-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「夏休[なつやす]みは どこか 行[い]くの？」',
        options: [
          '北海道[ほっかいどう]へ 行[い]こうと 思[おも]って いるんだ。',
          '行[い]きませんでした。',
          '休[やす]みは 短[みじか]いです。',
          '家[いえ]に いました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Ixtiyor / niyat mayli: «北海道へ 行こうと 思っているんだ» (Hokkaydoga bormoqchi bo'lib turibman).",
      },
      {
        id: 'ja-minna-l31-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_011.mp3',
        audioTitle: '31-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「週末[しゅうまつ]は 何[なに]を する つもりですか。」',
        options: [
          '家[いえ]で ゆっくり 休[やす]む つもりです。',
          'はい、休[やす]みます。',
          '週末[しゅうまつ]でした。',
          'どこか 行[い]きました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Qat'iy reja / niyat: «家で ゆっくり 休む つもりです» (Uyda xotirjam dam olmoqchiman).",
      },
      {
        id: 'ja-minna-l31-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_011.mp3',
        audioTitle: '31-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「飛行機[ひこうき]の 時間[じかん]は 何時[なんじ]の 予定[よてい]ですか。」',
        options: [
          '午後[ごご] 3時[さんじ]に 出発[しゅっぱつ]する 予定[よてい]です。',
          '昨日[きのう] 乗[の]りました。',
          '空港[くうこう]は 遠[とお]いです。',
          '3時間[さんじかん] かかります。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Jadvaldagi aniq reja: «午後3時に 出発する 予定です» (Kundan keyin soat 3 da jo'nash rejalashtirilgan).",
      },
      {
        id: 'ja-minna-l31-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_012.mp3',
        audioTitle: '31-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「大学[だいがく]を 卒業[そつぎょう]した 後[あと]、どうするの？ 日本[にほん]の 会社[かいしゃ]に 就職[しゅうしょく]しようと 思[おも]って いるんだ。」\n\n男[おとこ]の 人[ひと]の 卒業後[そつぎょうご]の 予定[よてい]は 何[なに]ですか。',
        options: [
          '日本[にほん]の 会社[かいしゃ]に 就職[しゅうしょく]すること',
          '国[くに]へ 帰[かえ]ること',
          '大学院[だいがくいん]に 進学[しんがく]すること',
          '旅行[りょこう]すること',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Yigit universitetni bitirgach Yaponiyadagi kompaniyaga ishga kirmoqchi bo'lib turganini ma'lum qildi.",
      },
      {
        id: 'ja-minna-l31-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_012.mp3',
        audioTitle: '31-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「明日[あした]の 日曜日[にちようび]、映画[えいが]を 見[み]に 行[い]こうよ。いいね、行[い]こう！」\n\n2人[ふたり]は 明日[あした] 何[なに]を しますか。',
        options: [
          '映画[えいが]を 見[み]に 行[い]く',
          '勉強[べんきょう]する',
          '買[か]い物[もの]を する',
          '家[いえ]に いる',
        ],
        correctAnswerIndex: 0,
        explanation: "Oddiy muloqotda «〜ようよ» (yur, qilaylik) taklifiga rozi bo'lishdi.",
      },
      {
        id: 'ja-minna-l31-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_012.mp3',
        audioTitle: "31-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「将来[しょうらい] 自分[じぶん]の 会社[かいしゃ]を 作[つく]る つもりです。そのために 今[いま] 一生懸命[いっしょうけんめい] 働[はたら]いて います。」\nBayonot: 「この 人[ひと]は 会社[かいしゃ]を 作[つく]る 計画[けいかく]が あります。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Kelajakda o'z kompaniyasini ochmoqchi bo'lib (作るつもり) harakat qilmoqda. Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l31-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_012.mp3',
        audioTitle: "31-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「銀行[ぎんこう]は まだ 開[あ]いて いますか。いいえ、もう 3時[さんじ]ですから、閉[し]まった はずですよ。」\nBayonot: 「銀行[ぎんこう]は 今[いま] 開[あ]いて います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Soat 3 bo'lgani sababli bank yopilgan bo'lishi kerak. Demak hozir ochiq emas. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '32': {
    lessonNumber: 32,
    title: '32-Dars: 〜たほうがいい / 〜でしょう / 〜かもしれません (Maslahat va ehtimollik)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l32-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_013.mp3',
        audioTitle: '32-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「風邪[かぜ]を ひいたんですが、どうしたら いいですか。」',
        options: [
          '温[あたた]かくして、早[はや]く 寝[ね]たほうが いいですよ。',
          '元気[げんき]ですね。',
          '病院[びょういん]は 行[い]きません。',
          '薬[くすり]は 嫌[きら]いです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Maslahat berishda V-た＋ほうがいいです: «温かくして、早く 寝たほうが いいですよ» (Issiq kiyinib/yopinib, erta uxlagan ma'qul).",
      },
      {
        id: 'ja-minna-l32-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_013.mp3',
        audioTitle: '32-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「明日[あした]は 雨[あめ]が 降[ふ]るでしょうか。」',
        options: [
          'ええ、天気予報[てんきよほう]に よると、降[ふ]るそうですよ。',
          '降[ふ]りませんでした。',
          '雨[あめ]が 好[す]きです。',
          '晴[は]れました。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Ehtimol yoki ob-havoni taxmin qilishda 〜でしょう.',
      },
      {
        id: 'ja-minna-l32-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_013.mp3',
        audioTitle: '32-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「約束[やくそく]の 時間[じかん]に 間[ま]に合[あ]いますか。」',
        options: [
          '道[みち]が 混[こ]んで いますから、遅[おく]れるかもしれません。',
          '間[ま]に合[あ]いました。',
          '急[いそ]ぎません。',
          '走[はし]りました。',
        ],
        correctAnswerIndex: 0,
        explanation: "Noma'lum ehtimollik: «遅れるかもしれません» (Kechikib qolishim ham mumkin).",
      },
      {
        id: 'ja-minna-l32-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_014.mp3',
        audioTitle: '32-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「熱[ねつ]が 38度[ど]も あるんです。それは 大変[たいへん]ですね。今日[きょう]は 無理[むり]を しないで、会社[かいしゃ]を 休[やす]んだほうが いいですよ。」\n\n女[おんな]の 人[ひと]は 男[おとこ]の 人[ひと]に 何[なに]を 勧[すす]めて いますか。',
        options: [
          '会社[かいしゃ]を 休[やす]むこと',
          '会社[かいしゃ]へ 行[い]くこと',
          '薬[くすり]を 買[か]いに行[い]くこと',
          'ご飯[はん]を 食[た]べること',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Yuqori isitma chiqqan odamga ishga bormasdan dam olish (会社を休むこと) tavsiya etildi.',
      },
      {
        id: 'ja-minna-l32-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_016.mp3',
        audioTitle: '32-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「最近[さいきん] 胃[い]が 痛[いた]いんです。それは いけませんね。一度[いちど] 病院[びょういん]で 診[み]てもらったほうが いいですよ。」\n\n男[おとこ]の 人[ひと]は どうしたほうが いいですか。',
        options: [
          '病院[びょういん]で 診[み]てもらう',
          '薬[くすり]を たくさん 買[か]う',
          'お酒[さけ]を 飲[の]む',
          '運動[うんどう]を する',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Oshqozoni og'riyotgan kishiga shifokor ko'rigidan o'tish (病院で診てもらう) maslahat berildi.",
      },
      {
        id: 'ja-minna-l32-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_014.mp3',
        audioTitle: "32-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「午後[ごご]から 雪[ゆき]が 降[ふ]るかもしれませんから、傘[かさ]を 持[も]って 行[い]ったほうが いいですよ。」\nBayonot: 「午後[ごご]は 必ず[かならず] 晴[は]れます。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Qor yog'ishi mumkinligi aytilgan, quyoshli bo'ladi deyilmagan. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l32-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_016.mp3',
        audioTitle: "32-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「明日[あした]は 寒[さむ]く なるでしょう。コートを 準備[じゅんび]して ください。」\nBayonot: 「明日[あした]は とても 暑[あつ]い 日[ひ]に なります。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Ertaga sovuq bo'lishi taxmin qilinmoqda, issiq emas. Shuning uchun bayonot noto'g'ri (✕).",
      },
    ],
  },
  '33': {
    lessonNumber: 33,
    title: "33-Dars: 命令形・禁止形 / 〜という意味です (Buyruq, taqiq va ma'nosi)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l33-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_015.mp3',
        audioTitle: '33-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「あそこに「止[と]まれ」と 書[か]いて ありますよ。」',
        options: [
          'はい、車[くるま]を 止[と]めましょう。',
          '走[はし]りましょう。',
          '行[い]きましょう。',
          '見[み]えません。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«止まれ» (To'xta!) yo'l belgisi buyruq shaklidir, mashinani to'xtatish kerak.",
      },
      {
        id: 'ja-minna-l33-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_015.mp3',
        audioTitle: '33-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「この マークは どういう 意味[いみ]ですか。」',
        options: [
          'ここで 写真[しゃしん]を 撮[と]るなという 意味[いみ]です。',
          '写真[しゃしん]を 撮[と]って ください。',
          '写真[しゃしん]です。',
          '分[わ]かりません。',
        ],
        correctAnswerIndex: 0,
        explanation: "«〜という意味です» belgi va ramzlar ma'nosini tushuntirishda xizmat qiladi.",
      },
      {
        id: 'ja-minna-l33-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_015.mp3',
        audioTitle: '33-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「部長[ぶちょう]は 何[なに]と おっしゃいましたか。」',
        options: [
          '明日[あした] 9時[くじ]に 集[あつ]まれと 言[い]っていました。',
          '集[あつ]まりました。',
          'はい、言[い]いました。',
          '知[し]りません。',
        ],
        correctAnswerIndex: 0,
        explanation: "Uchinchi shaxsning so'zlarini yetkazishda qo'llanadigan vositali nutq.",
      },
      {
        id: 'ja-minna-l33-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_016.mp3',
        audioTitle: '33-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「すみません、あの 漢字[かんじ]は 何[なに]と 読[よ]むんですか。「立入禁止[たちいりきんし]」ですよ。入[はい]るなという 意味[いみ]です。」\n\nあの 場所[ばしょ]に 入[はい]っても いいですか。',
        options: [
          'いいえ、入[はい]ってはいけない',
          'はい、入[はい]ってもいい',
          '走[はし]ってもいい',
          '写真[しゃしん]を 撮[と]ってもいい',
        ],
        correctAnswerIndex: 0,
        explanation: "Taqiq ma'nosidagi belgi sababli kirish mumkin emasligi bildirildi.",
      },
      {
        id: 'ja-minna-l33-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_018.mp3',
        audioTitle: '33-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「この レバーを 下[さ]げろと 言[い]われました。はい、すぐ 下[さ]げましょう。」\n\n2人[ふたり]は レバーを どうしますか。',
        options: ['下[さ]げる', '上[あ]げる', '壊[こわ]す', '触[さわ]らない'],
        correctAnswerIndex: 0,
        explanation: 'Tutqichni pastga tushirish (下げる) aytilgan edi.',
      },
      {
        id: 'ja-minna-l33-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_016.mp3',
        audioTitle: "33-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「先生[せんせい]は 田中[たなか]さんに もっと 勉強[べんきょう]しろと 言[い]いました。」\nBayonot: 「田中[たなか]さんは 先生[せんせい]に 褒[ほ]められました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Ustoz unga ko'proq o'qishni buyurdi (勉強しろ), maqtamadi. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l33-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_018.mp3',
        audioTitle: "33-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「「使用禁止[しようきんし]」と 書[か]いて あります。使[つか]ってはいけません。」\nBayonot: 「この 物[もの]は 自由[じゆう]に 使[つか]って いいです。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "«使用禁止» - ishlatish taqiqlangan deganidir. Demak erkin ishlatib bo'lmaydi. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '34': {
    lessonNumber: 34,
    title: "34-Dars: 〜とおりに / 〜あとで / 〜ないで (Ko'rsatilgandek va ketma-ketlik)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l34-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_017.mp3',
        audioTitle: '34-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「この プラモデルは どうやって 作[つく]るんですか。」',
        options: [
          '説明書[せつめいしょ]の とおりに 作[つく]って ください。',
          '上手に 作[つく]りました。',
          '昨日[きのう] 作[つく]りました。',
          '簡単[かんたん]でした。',
        ],
        correctAnswerIndex: 0,
        explanation: "«Yo'riqnomada ko'rsatilgandek qilib yasang» (説明書のとおりに).",
      },
      {
        id: 'ja-minna-l34-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_017.mp3',
        audioTitle: '34-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「いつ ジョギングを しますか。」',
        options: [
          '仕事[しごと]が 終[お]わった あとで、走[はし]ります。',
          '仕事[しごと]の 前[まえ]です。',
          '走[はし]りません。',
          '朝[あさ] 走[はし]りました。',
        ],
        correctAnswerIndex: 0,
        explanation: "Harakatdan keyin: V-た＋あとで: Ish tugagandan so'ng yuguradi.",
      },
      {
        id: 'ja-minna-l34-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_017.mp3',
        audioTitle: '34-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「コーヒーに 砂糖[さとう]を 入[い]れますか。」',
        options: [
          'いいえ、砂糖[さとう]を 入[い]れないで 飲[の]みます。',
          'はい、入[い]れません。',
          '甘[あま]いのが 好[す]きです。',
          '入[い]れました。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Bir harakatsiz ikkinchisini bajarish: V-ないで (shakarsiz ichaman).',
      },
      {
        id: 'ja-minna-l34-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_018.mp3',
        audioTitle: '34-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「新[あたら]しい 機械[きかい]の 使[つか]い方[かた]が 分[わ]かりません。まず 私[わたし]が やる とおりに、見[み]て いて ください。はい、分[わ]かりました。」\n\n女[おんな]の 人[ひと]は これから 何[なに]を しますか。',
        options: [
          '男[おとこ]の 人[ひと]が やるのを 見[み]る',
          '機械[きかい]を 買[か]いに行[い]く',
          '説明書[せつめいしょ]を 読[よ]む',
          '機械[きかい]を 直[なお]す',
        ],
        correctAnswerIndex: 0,
        explanation: "So'zlovchi avval o'zi ko'rsatganidek tomosha qilib turishni aytdi.",
      },
      {
        id: 'ja-minna-l34-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_020.mp3',
        audioTitle: '34-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「お湯[ゆ]を 入[い]れてから、3分[さんぷん] 待[ま]って ください。はい、時計[とけい]を 見[み]ます。」\n\nカップラーメンは いつ 食[た]べられますか。',
        options: [
          '3分[さんぷん] 待[ま]った あと',
          'すぐ',
          '10分[じゅっぷん] 後[あと]',
          '明日[あした]',
        ],
        correctAnswerIndex: 0,
        explanation: "Qaynoq suv quyilgach 3 daqiqa kutilgandan so'ng yeyish mumkin.",
      },
      {
        id: 'ja-minna-l34-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_018.mp3',
        audioTitle: "34-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「ご飯[はん]を 食[た]べた あとで、歯[は]を 磨[みが]きます。」\nBayonot: 「歯[は]を 磨[みが]いてから、ご飯[はん]を 食[た]べます。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Avval ovqat yeb, so'ng tish yuviladi. Bayonot teskari qilib aytilgan, shuning uchun noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l34-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_020.mp3',
        audioTitle: "34-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「砂糖[さとう]を 入[い]れないで、ブラックコーヒーを 飲[の]みます。」\nBayonot: 「この 人[ひと]は 甘[あま]い コーヒーが 大好[だいす]きです。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Shakar solmasdan qora kofe ichadi, demak u shirin kofeni yaxshi ko'rmaydi. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '35': {
    lessonNumber: 35,
    title: '35-Dars: 条件形 〜ば / 〜なら (Shart mayli)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l35-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_019.mp3',
        audioTitle: '35-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「ボタンを 押[お]せば、切符[きっぷ]が 出[で]ますか。」',
        options: [
          'はい、お釣[つ]りも 一緒[いっしょ]に 出[で]ますよ。',
          '押[お]しませんでした。',
          '切符[きっぷ]を 買[か]いません。',
          'ボタンが ありません。',
        ],
        correctAnswerIndex: 0,
        explanation: "Shart mayli fe'li: 押せば (bossangiz chiqadi).",
      },
      {
        id: 'ja-minna-l35-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_019.mp3',
        audioTitle: '35-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「安[やす]い パソコンを 買[か]いたいんですが、どこが いいですか。」',
        options: [
          'パソコンなら、秋葉原[あきはばら]が 安[やす]くて いいですよ。',
          '高[たか]いです。',
          '買[か]いませんでした。',
          'パソコンは 便利[べんり]です。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Mavzu bo'yicha shart va tavsiya: «パソコンなら» (Kompyuter bo'lsa Akihabara yaxshi).",
      },
      {
        id: 'ja-minna-l35-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_019.mp3',
        audioTitle: '35-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「明日[あした] 雨[あめ]が 降[ふ]れば、試合[しあい]は どうなりますか。」',
        options: [
          '中止[ちゅうし]に なります。',
          '試合[しあい]を します。',
          '晴[は]れます。',
          '雨[あめ]が 好[す]きです。',
        ],
        correctAnswerIndex: 0,
        explanation: "Yomg'ir yog'sa o'yin bekor qilinadi (中止になります).",
      },
      {
        id: 'ja-minna-l35-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_020.mp3',
        audioTitle: '35-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「どうすれば、日本語[にほんご]が 上手[じょうず]に なりますか。毎日[まいにち] 日本人[にほんじん]と 話[はな]せば、上手[じょうず]に なりますよ。」\n\n日本語[にほんご]が 上手[じょうず]に なるために、何[なに]を すれば いいですか。',
        options: [
          '毎日[まいにち] 日本人[にほんじん]と 話[はな]すこと',
          '本[ほん]を 1冊[いっさつ]だけ 読[よ]むこと',
          '国[くに]へ 帰[かえ]ること',
          '寝[ね]ること',
        ],
        correctAnswerIndex: 0,
        explanation: 'Har kuni yaponlar bilan gaplashilsa til rivojlanishi aytildi.',
      },
      {
        id: 'ja-minna-l35-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_022.mp3',
        audioTitle: '35-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「安[やす]ければ、買[か]いますか。ええ、1万円[いちまんえん]以下[いか]なら 買[か]いますよ。」\n\n男[おとこ]の 人[ひと]は いくらなら 買[か]いますか。',
        options: [
          '1万円[いちまんえん]以下[いか]',
          '10万円[じゅうまんえん]',
          '無料[むりょう]だけ',
          '買[か]わない',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Narxi arzon bo'lsa, xususan 10 000 yendan past bo'lsa sotib olishini bildirdi.",
      },
      {
        id: 'ja-minna-l35-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_020.mp3',
        audioTitle: "35-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「時間[じかん]が なければ、明日[あした]でも いいですよ。じゃ、明日[あした] お願[ねが]いします。」\nBayonot: 「今日[きょう] 必ず[かならず] 終[お]わらせなければ なりません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Vaqt bo'lmasa ertaga qilsa ham bo'lishi aytildi. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l35-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_022.mp3',
        audioTitle: "35-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「質問[しつもん]が あれば、いつでも 手[て]を 挙[あ]げて ください。」\nBayonot: 「質問[しつもん]が あっても、話[はな]してはいけません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Savol bo'lsa bemalol qo'l ko'tarishi so'ralgan. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '36': {
    lessonNumber: 36,
    title: "36-Dars: 〜ようにします / 〜ようになります (Odatlanish va o'zgarish)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l36-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_021.mp3',
        audioTitle: '36-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「健康[けんこう]のために、何[なに]を して いますか。」',
        options: [
          '毎日[まいにち] 野菜[やさい]を 食[た]べるように して います。',
          '野菜[やさい]が 嫌[きら]いです。',
          '何[なに]も しません。',
          '病院[びょういん]に 行[い]きました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Odat qilishga intilish: V-るようにしています (sabzavot yeyishga harakat qilyapman).',
      },
      {
        id: 'ja-minna-l36-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_021.mp3',
        audioTitle: '36-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「日本[にほん]の 刺身[さしみ]が 食[た]べられるように なりましたか。」',
        options: [
          'はい、初[はじ]めは だめでしたが、今[いま]は 大好[だいす]きです。',
          'いいえ、食[た]べました。',
          '食[た]べさせます。',
          '魚[さかな]を 買[か]いました。',
        ],
        correctAnswerIndex: 0,
        explanation: "Qobiliyatning o'zgarishi: V-るようになります (yeya oladigan bo'ldim).",
      },
      {
        id: 'ja-minna-l36-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_021.mp3',
        audioTitle: '36-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「約束[やくそく]の 時間[じかん]に 遅[おく]れないように して くださいね。」',
        options: [
          'はい、気[き]を つけます。',
          '遅[おく]れました。',
          '時間[じかん]が ありません。',
          '行[い]きません。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Salbiy holat yuz bermasligi uchun harakat: «遅れないようにしてください».',
      },
      {
        id: 'ja-minna-l36-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_022.mp3',
        audioTitle: '36-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「最近[さいきん] 体重[たいじゅう]が 増[ふ]えたので、甘[あま]い 物[もの]を 食[た]べないように して いるんです。偉[えら]いですね。」\n\nこの 人[ひと]は 今[いま] どうして いますか。',
        options: [
          '甘[あま]い 物[もの]を 食[た]べないように 努力[どりょく]して いる',
          '甘[あま]い 物[もの]を たくさん 食[た]べて いる',
          '運動[うんどう]を やめた',
          'ケーキを 買[か]った',
        ],
        correctAnswerIndex: 0,
        explanation: 'Vazn ortgani uchun shirinlik yemaslikka intilmoqda.',
      },
      {
        id: 'ja-minna-l36-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_024.mp3',
        audioTitle: '36-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「エレベーターを 使[つか]わないで、階段[かいだん]を 使[つか]うように して います。いい 運動[うんどう]に なりますね。」\n\nこの 人[ひと]は 毎日[まいにち] どうして いますか。',
        options: [
          '階段[かいだん]を 使[つか]うように して いる',
          'エレベーターに 乗[の]る',
          '走[はし]らない',
          '歩[ある]かない',
        ],
        correctAnswerIndex: 0,
        explanation: 'Har kuni zinapoyadan foydalanishga harakat qilib kelmoqda.',
      },
      {
        id: 'ja-minna-l36-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_022.mp3',
        audioTitle: "36-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「練習[れんしゅう]したら、自転車[じてんしゃ]に 乗[の]れるように なりました。」\nBayonot: 「まだ 自転車[じてんしゃ]に 乗[の]れません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Mashq qilib velosiped minishni o'rganib oldi. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l36-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_024.mp3',
        audioTitle: "36-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「メガネを かけたら、遠[とお]くの 字[じ]が 見[み]えるように なりました。」\nBayonot: 「メガネを かけても、字[じ]が 見[み]えません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Ko'zoynak taqqach uzoqdagi harflar ko'rinadigan bo'ldi (見えるようになりました). Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '37': {
    lessonNumber: 37,
    title: '37-Dars: 受身形 (Majhul nisbat - 〜に褒められた / 〜に叱られた)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l37-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_023.mp3',
        audioTitle: '37-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「どうして 嬉[うれ]しそうな 顔[かお]を して いるの？」',
        options: [
          '先生[せんせい]に スピーチを 褒[ほ]められたんだ。',
          '先生[せんせい]を 褒[ほ]めました。',
          '怒[おこ]られました。',
          '悲[かな]しいです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Majhul nisbat (受身形): Ustoz tomonidan nutqi maqtangani uchun xursand: «先生に 褒められたんだ».',
      },
      {
        id: 'ja-minna-l37-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_023.mp3',
        audioTitle: '37-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「電車[でんしゃ]の 中[なか]で 足[あし]を 踏[ふ]まれて しまいました。」',
        options: [
          'それは 痛[いた]かったですね。',
          'よかったですね。',
          '踏[ふ]みました。',
          '靴[くつ]を 買[か]いましょう。',
        ],
        correctAnswerIndex: 0,
        explanation: "Birov oyog'ini bosib olgandagi yoqimsiz passiv vaziyat (足を踏まれた).",
      },
      {
        id: 'ja-minna-l37-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_023.mp3',
        audioTitle: '37-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「この 寺[てら]は いつ 建[た]てられたんですか。」',
        options: [
          '500年[ねん]前[まえ]に 建[た]てられました。',
          '建[た]てました。',
          '新[あたら]しいです。',
          '壊[こわ]れました。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Tarixiy obidalarning qurilgan davri majhul nisbatda beriladi.',
      },
      {
        id: 'ja-minna-l37-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_024.mp3',
        audioTitle: '37-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「昨日[きのう] 母[はは]に 部屋[へや]の 掃除[そうじ]を しろと 叱[しか]られたよ。大変[たいへん]だったね。」\n\n男[おとこ]の 人[ひと]は どうして 叱[しか]られましたか。',
        options: [
          '部屋[へや]を 掃除[そうじ]しなかったから',
          '宿題[しゅくだい]を 忘[わす]れたから',
          '朝[あさ] 寝坊[ねぼう]したから',
          '喧嘩[けんか]したから',
        ],
        correctAnswerIndex: 0,
        explanation: 'Xonasini tozalamagani uchun onasi tomonidan koyildi (叱られた).',
      },
      {
        id: 'ja-minna-l37-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_026.mp3',
        audioTitle: '37-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「犬[いぬ]に 手[て]を 噛[か]まれて しまいました。すぐ 消毒[しょうどく]して くださいね。」\n\n男[おとこ]の 人[ひと]は どうしましたか。',
        options: [
          '犬[いぬ]に 手[て]を 噛[か]まれた',
          '犬[いぬ]を 買[か]った',
          '手[て]を 洗[あら]った',
          '犬[いぬ]と 遊[あそ]んだ',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Ishi yurishmay it qo'lini tishlab olgani passiv / majhul shaklda (噛まれました) aytildi.",
      },
      {
        id: 'ja-minna-l37-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_024.mp3',
        audioTitle: "37-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「私[わたし]の 傘[かさ]は 誰[だれ]かに 持[も]って 行[い]かれて しまいました。」\nBayonot: 「傘[かさ]は まだ 手元[てもと]に あります。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Zontik birov tomonidan olib ketilgan, qo'lida yo'q. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l37-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_026.mp3',
        audioTitle: "37-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「弟[おとうと]に 私[わたし]の ケーキを 食[た]べられて しまいました。」\nBayonot: 「私[わたし]が ケーキを 全部[ぜんぶ] 食[た]べました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Tort ukasi tomonidan yeb qo'yilgan (食べられてしまいました). Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '38': {
    lessonNumber: 38,
    title: '38-Dars: 名詞化 (〜のは / 〜のを / 〜のが)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l38-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_025.mp3',
        audioTitle: '38-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「趣味[しゅみ]は 何[なに]ですか。」',
        options: [
          '写真[しゃしん]を 撮[と]るのが 好[す]きです。',
          '写真[しゃしん]を 撮[と]りました。',
          'カメラです。',
          '撮[と]りません。',
        ],
        correctAnswerIndex: 0,
        explanation: "Fe'lni otlashtirish (名詞化): V-るのが好きです: «写真を 撮るのが 好きです».",
      },
      {
        id: 'ja-minna-l38-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_025.mp3',
        audioTitle: '38-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「薬[くすり]を 飲[の]むのを 忘[わす]れないで くださいね。」',
        options: [
          'はい、食後[しょくご]に 飲[の]みます。',
          '忘[わす]れました。',
          '飲[の]みたくないです。',
          '薬[くすり]を 買[か]います。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Harakatni unutmaslik: V-るのを忘れないで: «はい、食後に 飲みます».',
      },
      {
        id: 'ja-minna-l38-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_025.mp3',
        audioTitle: '38-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「一人[ひとり]で 外国[がいこく]へ 行[い]くのは 不安[ふあん]ですか。」',
        options: [
          'ええ、少[すこ]し 不安[ふあん]ですが、楽[たの]しみです。',
          'いいえ、行[い]きません。',
          '外国[がいこく]人[じん]です。',
          '行[い]きたくないです。',
        ],
        correctAnswerIndex: 0,
        explanation: "Bosh bo'lak sifatidagi otlashgan ibora: «〜のは 不安ですが、楽しみです».",
      },
      {
        id: 'ja-minna-l38-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_026.mp3',
        audioTitle: '38-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「木村[きむら]さんが 結婚[けっこん]したのを 知[し]って いますか。いいえ、ちっとも 知[し]りませんでした！ 驚[おどろ]きました。」\n\n女[おんな]の 人[ひと]は 木村[きむら]さんの 結婚[けっこん]を 知[し]って いましたか。',
        options: [
          '知[し]らなかった',
          '前[まえ]から 知[し]っていた',
          '結婚式[けっこんしき]に 出席[しゅっせき]した',
          '木村[きむら]さんに 聞[き]いた',
        ],
        correctAnswerIndex: 0,
        explanation: 'Kimura turmush qurganini mutlaqo bilmasligini aytdi.',
      },
      {
        id: 'ja-minna-l38-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_028.mp3',
        audioTitle: '38-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「車[くるま]の 窓[まど]を 閉[し]めるのを 忘[わす]れました。雨[あめ]が 降[ふ]る前[まえ]に 閉[し]めましょう。」\n\n何[なに]を 忘[わす]れましたか。',
        options: [
          '窓[まど]を 閉[し]めること',
          '鍵[かぎ]を かけること',
          '車[くるま]を 洗[あら]うこと',
          '傘[かさ]を 差[さ]すこと',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mashina oynasini yopishni esdan chiqargani bildirildi (閉めるのを忘れました).',
      },
      {
        id: 'ja-minna-l38-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_026.mp3',
        audioTitle: "38-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「朝[あさ] 早[はや]く 起[お]きるのは 体[からだ]に いいです。」\nBayonot: 「早起[はやお]きは 体[からだ]に 悪[わる]いです。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Ertalab barvaqt turish sog'liq uchun foydali deyilgan. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l38-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_028.mp3',
        audioTitle: "38-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「外国語[がいこくご]を 習[なら]うのは 面白[おもしろ]いです。」\nBayonot: 「外国語[がいこくご]の 勉強[べんきょう]は 退屈[たいくつ]です。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Chet tili o'rganish maroqli ekani aytilgan. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '39': {
    lessonNumber: 39,
    title: '39-Dars: 〜て / 〜ので (Sabab va oqibat)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l39-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_027.mp3',
        audioTitle: '39-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「どうして パーティーに 来[こ]られなかったんですか。」',
        options: [
          '用事[ようじ]が あって、行[い]けなかったんです。',
          'パーティーは 楽[たの]しかったです。',
          '来[き]ました。',
          '明日[あした] 行[い]きます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Sabab shakli: V-て: «用事が あって、行けなかったんです» (Ishim chiqib qolib, borolmadim).',
      },
      {
        id: 'ja-minna-l39-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_027.mp3',
        audioTitle: '39-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「地震[じしん]の ニュースを 聞[き]いて、驚[おどろ]きました。」',
        options: [
          '本当[ほんとう]に びっくりしましたね。',
          '面白[おもしろ]かったですね。',
          '見[み]ませんでした。',
          '逃[に]げましょう。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Hissiy taassurot sababi: V-て: «聞いて、驚きました».',
      },
      {
        id: 'ja-minna-l39-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_027.mp3',
        audioTitle: '39-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「危[あぶ]ないので、機械[きかい]に 触[さわ]らないで ください。」',
        options: [
          'はい、分[わ]かりました。',
          '触[さわ]ります。',
          '大丈夫[だいじょうぶ]です。',
          '壊[こわ]れました。',
        ],
        correctAnswerIndex: 0,
        explanation: "Obyektiv muloyim sabab: 〜ので: Xavfli bo'lgani uchun tegmang.",
      },
      {
        id: 'ja-minna-l39-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_028.mp3',
        audioTitle: '39-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「バスが 遅[おく]れたので、授業[じゅぎょう]に 遅刻[ちこく]して しまいました。先生[せんせい]に 怒[おこ]られたよ。」\n\n男[おとこ]の 人[ひと]が 遅刻[ちこく]した 理由[りゆう]は 何[なに]ですか。',
        options: [
          'バスが 遅[おく]れたから',
          '寝坊[ねぼう]したから',
          '道[みち]に 迷[まよ]ったから',
          '教科書[きょうかしょ]を 忘[わす]れたから',
        ],
        correctAnswerIndex: 0,
        explanation: 'Avtobus kechikkani sababli darsga kech qolganini bildirdi.',
      },
      {
        id: 'ja-minna-l39-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_030.mp3',
        audioTitle: '39-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「事故[じこ]が あって、電車[でんしゃ]が 止[と]まって います。困[こま]りましたね、タクシーに しましょう。」\n\n2人[ふたり]は どうして タクシーに 乗[の]りますか。',
        options: [
          '電車[でんしゃ]が 止[と]まったから',
          'タクシーが 好[す]きだから',
          'お金[かね]が あるから',
          '近[ちか]いから',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Poyezd halokat sababli to'xtab qolgani uchun taksida ketishga qaror qilishdi.",
      },
      {
        id: 'ja-minna-l39-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_028.mp3',
        audioTitle: "39-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「家族[かぞく]に 会[あ]えなくて、とても 寂[さび]しいです。」\nBayonot: 「この 人[ひと]は 家族[かぞく]と 一緒[いっしょ]に 住[す]んで います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Oilasi bilan ko'risha olmagani uchun sog'inmoqda, birga yashamayapti. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l39-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_030.mp3',
        audioTitle: "39-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「台風[たいふう]で 木[き]が 倒[たお]れました。」\nBayonot: 「木[き]は 倒[たお]れませんでした。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Tayfun sababli daraxt qulab tushgani aytilgan. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '40': {
    lessonNumber: 40,
    title: '40-Dars: 〜かどうか / 疑問詞＋か (Savolli ergash gaplar)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l40-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_029.mp3',
        audioTitle: '40-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「明日[あした] 雨[あめ]が 降[ふ]るかどうか、分[わ]かりますか。」',
        options: [
          'いいえ、天気予報[てんきよほう]を 見[み]て みます。',
          '降[ふ]りません。',
          '雨[あめ]です。',
          '傘[かさ]を 買[か]いました。',
        ],
        correctAnswerIndex: 0,
        explanation: "Ikki tomonlama noma'lumlik: «降るかどうか» (yog'ish-yog'masligi).",
      },
      {
        id: 'ja-minna-l40-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_029.mp3',
        audioTitle: '40-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「鍵[かぎ]が どこに あるか、知[し]って いますか。」',
        options: [
          '机[つくえ]の 引[ひ]き出[だ]しを 調[しら]べて みて ください。',
          '鍵[かぎ]を かけました。',
          '知[し]りませんでした。',
          '車[くるま]の 鍵[かぎ]です。',
        ],
        correctAnswerIndex: 0,
        explanation: "Savol so'zli ergash gap: «どこにあるか».",
      },
      {
        id: 'ja-minna-l40-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_029.mp3',
        audioTitle: '40-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「この 靴[くつ]を 履[は]いて みても いいですか。」',
        options: [
          'はい、どうぞ サイズを 確[たし]かめて ください。',
          '脱[ぬ]いで ください。',
          '高[たか]いですよ。',
          '買[か]ってください。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Sinab ko'rish: V-てみます: «履いてみてもいいですか» (Kiyib ko'rsam bo'ladimi?).",
      },
      {
        id: 'ja-minna-l40-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_030.mp3',
        audioTitle: '40-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「忘[わす]れ物[もの]が ないかどうか、もう 一度[いちど] 部屋[へや]を 確認[かくにん]して ください。はい、見[み]て きます。」\n\n2人[ふたり]は これから 何[なに]を しますか。',
        options: [
          '部屋[へや]に 忘れ物[わすれもの]が ないか 確認[かくにん]する',
          '出[で]かけるのを やめる',
          '掃除[そうじ]を 始[はじ]める',
          '荷物[にもつ]を 捨[す]てる',
        ],
        correctAnswerIndex: 0,
        explanation: "Unutilgan narsa yo'qligini tekshirishga kelishishdi.",
      },
      {
        id: 'ja-minna-l40-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_032.mp3',
        audioTitle: '40-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「いつ 日本[にほん]へ 来[き]たか、覚[おぼ]えて いますか。2年[にねん]前[まえ]の 春[はる]ですよ。」\n\nこの 人[ひと]は いつ 日本[にほん]に 来[き]ましたか。',
        options: [
          '2年[にねん]前[まえ]の 春[はる]',
          '去年[きょねん]の 夏[なつ]',
          '先月[せんげつ]',
          '今年[ことし]',
        ],
        correctAnswerIndex: 0,
        explanation: "Yaponiyaga 2 yil oldingi bahorda kelgani ta'kidlandi.",
      },
      {
        id: 'ja-minna-l40-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_030.mp3',
        audioTitle: "40-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「美味[おい]しいかどうか、食[た]べて みなければ 分[わ]かりません。」\nBayonot: 「食[た]べなくても 味[あじ]が 分[わ]かります。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Tatib ko'rmasdan ta'mini bilib bo'lmaydi. Shuning uchun bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l40-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_032.mp3',
        audioTitle: "40-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「箱[はこ]の 中[なか]に 何[なに]が あるか、分[わ]かりません。」\nBayonot: 「箱[はこ]の 中身[なかみ]を よく 知[し]って います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Qutining ichida nima borligi noma'lum. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '41': {
    lessonNumber: 41,
    title: "41-Dars: いただきます / くださいます / やります (Berish-olish hurmat fe'llari)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l41-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_031.mp3',
        audioTitle: '41-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「部長[ぶちょう]に お土産[みやげ]を いただきました。」',
        options: [
          'どんな お土産[みやげ]でしたか。',
          '部長[ぶちょう]に あげました。',
          '食[た]べませんでした。',
          '買[か]いました。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Yuqori martabali kishidan qabul qilib olish: «いただきました».',
      },
      {
        id: 'ja-minna-l41-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_031.mp3',
        audioTitle: '41-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「先生[せんせい]が 本[ほん]を 貸[か]して くださったんです。」',
        options: [
          '親切[しんせつ]な 先生[せんせい]ですね。',
          '先生[せんせい]に 貸[か]しました。',
          '本[ほん]を 返[かえ]しません。',
          '読[よ]みませんでした。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Yuqori martabali kishi menga yaxshilik qilganda: «貸してくださいました».',
      },
      {
        id: 'ja-minna-l41-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_031.mp3',
        audioTitle: '41-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「犬[いぬ]に 餌[えさ]を やりましたか。」',
        options: [
          'はい、さっき やりましたよ。',
          '犬[いぬ]に もらいました。',
          '餌[えさ]を 食[た]べます。',
          '犬[いぬ]が いません。',
        ],
        correctAnswerIndex: 0,
        explanation: "O'simlik yoki hayvonga nimadir berishda «やります» ishlatiladi.",
      },
      {
        id: 'ja-minna-l41-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_032.mp3',
        audioTitle: '41-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「その ネクタイ、素敵[すてき]ですね。社長[しゃちょう]が くださったんです。大切[たいせつ]に して います。」\n\n男[おとこ]の 人[ひと]の ネクタイは 誰[だれ]から もらったものですか。',
        options: ['社長[しゃちょう]', '友達[ともだち]', '家族[かぞく]', '先生[せんせい]'],
        correctAnswerIndex: 0,
        explanation: "Bo'yinbog' shaxsan kompaniya rahbari (shachou) sovg'a qilgani ta'kidlandi.",
      },
      {
        id: 'ja-minna-l41-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_034.mp3',
        audioTitle: '41-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「先生[せんせい]が 発音[はつおん]を 直[なお]して くだすったんです。良[よ]かったですね。」\n\n先生[せんせい]は 何[なに]を して くれましたか。',
        options: [
          '発音[はつおん]を 直[なお]してくれた',
          '本[ほん]を くれた',
          '宿題[しゅくだい]を 出[だ]した',
          '歌[うた]を 歌[うた]った',
        ],
        correctAnswerIndex: 0,
        explanation: "Ustoz talaffuzni to'g'rilab berganliklari aytildi (直してくださいました).",
      },
      {
        id: 'ja-minna-l41-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_032.mp3',
        audioTitle: "41-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「子供[こども]に 新[あたら]しい おもちゃを やりました。」\nBayonot: 「子供[こども]から おもちゃを もらいました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Bolaga o'yinchoq berildi, undan olinmadi. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l41-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_034.mp3',
        audioTitle: "41-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「花[はな]に 水[みず]を やりました。」\nBayonot: 「花[はな]から 水[みず]を もらいました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Gulga suv quyildi (やりました). Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '42': {
    lessonNumber: 42,
    title: "42-Dars: 〜ために / 〜のに (Maqsad va qo'llanish)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l42-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_033.mp3',
        audioTitle: '42-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「何[なに]のために 貯金[ちょきん]して いるんですか。」',
        options: [
          '将来[しょうらい] 家[いえ]を 買[か]うために 貯金[ちょきん]して います。',
          'お金[かね]が ありません。',
          '銀行[ぎんこう]へ 行[い]きます。',
          '買[か]いません。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Aniqlangan maqsad: V-るために: «家を 買うために 貯金しています».',
      },
      {
        id: 'ja-minna-l42-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_033.mp3',
        audioTitle: '42-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「この ハサミは 何[なに]に 使[つか]うんですか。」',
        options: [
          '花[はな]を 切[き]るのに 使[つか]います。',
          '花[はな]を 買[か]います。',
          '切[き]りませんでした。',
          'ハサミです。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Vazifa va foydalanish sohasi: V-るのに使います.',
      },
      {
        id: 'ja-minna-l42-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_033.mp3',
        audioTitle: '42-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「日本[にほん]で アパートを 探[さが]すのに 時間[じかん]が かかりましたか。」',
        options: [
          'ええ、2週間[にしゅうかん]ぐらい かかりました。',
          '探[さが]しませんでした。',
          '家賃[やちん]は 高[たか]いです。',
          'アパートに 住[す]んでいます。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Vaqt sarflanishi: V-るのに時間がかかります.',
      },
      {
        id: 'ja-minna-l42-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_034.mp3',
        audioTitle: '42-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「健康[けんこう]のために、毎朝[まいあさ] 走[はし]るように して います。雨[あめ]の 日[ひ]も 体育館[たいいくかん]で 走[はし]りますよ。」\n\nこの 人[ひと]は どうして 走[はし]って いますか。',
        options: [
          '健康[けんこう]の ため',
          '大会[たいかい]に 出[で]る ため',
          '痩[や]せたくない ため',
          '友達[ともだち]に 会[あ]う ため',
        ],
        correctAnswerIndex: 0,
        explanation: 'Salomatlik maqsadida (健康のために) yugurishi aytildi.',
      },
      {
        id: 'ja-minna-l42-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_036.mp3',
        audioTitle: '42-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「この ナイフは チーズを 切[き]るのに 便利[べんり]ですよ。そうですね、買[か]いましょう。」\n\nこの ナイフの 役目[やくめ]は 何[なに]ですか。',
        options: [
          'チーズを 切[き]るため',
          '肉[にく]を 焼[や]くため',
          'パンを 食[た]べるため',
          '飾[かざ]るため',
        ],
        correctAnswerIndex: 0,
        explanation: 'Bu pichoq pishloq kesish uchun juda qulaydir.',
      },
      {
        id: 'ja-minna-l42-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_034.mp3',
        audioTitle: "42-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「この 本[ほん]は 日本語[にほんご]を 勉強[べんきょう]するのに 役[やく]に 立[た]ちます。」\nBayonot: 「この 本[ほん]は 役[やく]に 立[た]ちません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Kitob yapon tilini o'rganishda foydali (役に立つ) ekani aytildi. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l42-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_036.mp3',
        audioTitle: "42-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「試験[しけん]に 合格[ごうかく]する ために、一生懸命[いっしょうけんめい] 勉強[べんきょう]します。」\nBayonot: 「試験[しけん]は どうでも いいと 思[おも]って います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Imtihondan o'tish maqsadida astoydil o'qimoqda. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '43': {
    lessonNumber: 43,
    title: "43-Dars: 〜そうです / 〜て来ます (Ko'rinish va borib kelish)",
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l43-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_035.mp3',
        audioTitle: '43-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「空[そら]が 暗[くら]く なって きましたね。」',
        options: [
          'ええ、今[いま]にも 雨[あめ]が 降[ふ]りそうですね。',
          '雨[あめ]が 降[ふ]りました。',
          '晴[は]れました。',
          '傘[かさ]を 忘[わす]れました。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Darhol ro'y berish arafasidagi holat: «今にも 雨が 降りそうですね» (Hozir yog'ib yuboradiganga o'xshaydi).",
      },
      {
        id: 'ja-minna-l43-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_035.mp3',
        audioTitle: '43-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「この ケーキ、とても おいしそうですね。」',
        options: [
          'ええ、有名[ゆうめい]な 店[みせ]の ケーキなんですよ。',
          'まずいです。',
          '食[た]べたくないです。',
          '高[たか]かったです。',
        ],
        correctAnswerIndex: 0,
        explanation: "Tashqi ko'rinishdan baholash: Sifat o'zagi + そうです (Mazaliga o'xshaydi).",
      },
      {
        id: 'ja-minna-l43-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_035.mp3',
        audioTitle: '43-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「ちょっと 喉[のど]が 渇[かわ]きましたね。」',
        options: [
          '自販機[じはんき]で ジュースを 買[か]って 来[き]ますね。',
          '水[みず]を 飲[の]みませんでした。',
          '買[か]いに行[い]きません。',
          'コンビニは どこですか。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Qisqa muddatga biror ish qilib qaytish: V-て来ます (sotib kelaman).',
      },
      {
        id: 'ja-minna-l43-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_036.mp3',
        audioTitle: '43-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「荷物[にもつ]が 重[おも]そうですね。お持[も]ちしましょうか。ありがとうございます。助[たす]かります。」\n\n男[おとこ]の 人[ひと]は 何[なに]を しますか。',
        options: [
          '女[おんな]の 人[ひと]の 荷物[にもつ]を 持[も]つ',
          '荷物[にもつ]を 捨[す]てる',
          'タクシーを 呼[よ]ぶ',
          '見[み]て いるだけ',
        ],
        correctAnswerIndex: 0,
        explanation: "Yuki og'ir ko'ringanligi sababli uni ko'tarishib berishni taklif qildi.",
      },
      {
        id: 'ja-minna-l43-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_038.mp3',
        audioTitle: '43-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「この 料理[りょうり]、辛[から]そうですね。ええ、唐辛子[とうがらし]が 入[はい]って いますから。」\n\n料理[りょうり]の 見[み]た目[め]は どうですか。',
        options: ['辛[から]そう', '甘[あま]そう', '苦[にが]そう', '冷[つめ]たそう'],
        correctAnswerIndex: 0,
        explanation: "Qalampir solingani sababli taom achchiqqa o'xshab ko'rinmoqda.",
      },
      {
        id: 'ja-minna-l43-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_036.mp3',
        audioTitle: "43-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「この ボタンが 外[はず]れそうです。」\nBayonot: 「ボタンは もう 完全[かんぜん]に 取[と]れました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Tugma uzilib tushish arafasida (外れそう), hali butunlay tushib ketmagan. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l43-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_038.mp3',
        audioTitle: "43-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「ちょっと 切符[きっぷ]を 買[か]って 来[き]ますから、ここで 待[ま]って いて ください。」\nBayonot: 「この 人[ひと]は もう 切符[きっぷ]を 買[か]いました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Bilet sotib olish uchun borib kelishini aytmoqda, hali sotib olmagan. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '44': {
    lessonNumber: 44,
    title: '44-Dars: 〜すぎます / 〜やすい / 〜にくい (Haddan oshish va qulaylik darajasi)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l44-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_037.mp3',
        audioTitle: '44-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「夕べ[ゆうべ] お酒[さけ]を 飲[の]みすぎました。」',
        options: [
          'お酒[さけ]は ほどほどに したほうが いいですよ。',
          'たくさん 飲[の]みましょう。',
          'お酒[さけ]は 好[す]きです。',
          '元気[げんき]ですね。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Haddan oshib ketish: V-masu o'zagi + すぎます: «飲みすぎました» (Me'yordan ortiq ichib qo'ydim).",
      },
      {
        id: 'ja-minna-l44-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_037.mp3',
        audioTitle: '44-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「この ペンは とても 書[か]きやすいですね。」',
        options: [
          'ええ、手[て]が 疲[つか]れませんよ。',
          '書[か]けません。',
          '高[たか]いペンです。',
          '壊[こわ]れました。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Bajarish qulayligi: V-やすい: «書きやすい» (Yozishga juda qulay).',
      },
      {
        id: 'ja-minna-l44-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_037.mp3',
        audioTitle: '44-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「東京[とうきょう]の 地下鉄[ちかてつ]は 乗[の]り換[か]えが 複雑[ふくざつ]で、分[わ]かりにくいです。」',
        options: [
          '慣[な]れるまで 大変[たいへん]ですね。',
          '簡単[かんたん]ですね。',
          '安[やす]いです。',
          '電車[でんしゃ]が 好[す]きです。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Qiyin va noqulay holat: V-にくい: «分かりにくい» (Tushunish qiyin).',
      },
      {
        id: 'ja-minna-l44-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_038.mp3',
        audioTitle: '44-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「この 辞書[じしょ]は 説明[せつめい]が 詳[くわ]しくて、使[つか]いやすいですよ。じゃ、これに します。」\n\n男[おとこ]の 人[ひと]が この 辞書[じしょ]を 選[えら]んだ 理由[りゆう]は 何[なに]ですか。',
        options: [
          '説明[せつめい]が 詳[くわ]しくて 使[つか]いやすいから',
          '値段[ねだん]が 一番[いちばん] 安[やす]いから',
          '小[ちい]さくて 軽[かる]いから',
          'デザインが いいから',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Tushuntirishlari batafsil va foydalanishga qulay bo'lgani uchun shu lug'atni tanladi.",
      },
      {
        id: 'ja-minna-l44-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_040.mp3',
        audioTitle: '44-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「この 靴[くつ]は 軽[かる]くて、歩[ある]きやすいですね。じゃ、これに 決[き]めます。」\n\n靴[くつ]の 特徴[とくちょう]は 何[なに]ですか。',
        options: ['歩[ある]きやすい', '重[おも]い', '痛[いた]い', '高[たか]い'],
        correctAnswerIndex: 0,
        explanation: 'Poyabzal yengil va yurishga qulay (歩きやすい).',
      },
      {
        id: 'ja-minna-l44-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_038.mp3',
        audioTitle: "44-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「ご飯[はん]を 食[た]べすぎて、お腹[なか]が 痛[いた]いです。」\nBayonot: 「この 人[ひと]は お腹[なか]が すいて います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Ko'p yeb qo'yganidan qorni og'rimoqda, och emas. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l44-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_040.mp3',
        audioTitle: "44-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「テレビを 見[み]すぎて、目[め]が 疲[つか]れました。」\nBayonot: 「テレビを ちっとも 見[み]ませんでした。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Televizorni ko'p ko'rib yuborganidan ko'zi toliqqan. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '45': {
    lessonNumber: 45,
    title: '45-Dars: 〜場合は / 〜のに (Vaziyatda va qaramasdan kutilmagan natija)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l45-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_039.mp3',
        audioTitle: '45-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「火事[かじ]や 地震[じしん]の 場合[ばあい]は、どうしますか。」',
        options: [
          'エレベーターを 使[つか]わないで、階段[かいだん]で 避難[ひなん]します。',
          'エレベーターに 乗[の]ります。',
          '何[なに]も しません。',
          '逃[に]げません。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Muayyan favqulodda vaziyatda: «〜の場合は»: Zinapoyadan tushish lozim.',
      },
      {
        id: 'ja-minna-l45-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_039.mp3',
        audioTitle: '45-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「約束[やくそく]したのに、どうして 来[こ]なかったんですか。」',
        options: [
          'すみません、急[きゅう]な 用事[ようじ]が 入[はい]って しまったんです。',
          '楽[たの]しかったです。',
          '来[き]ましたよ。',
          'はい、行[い]きます。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Norozilik va afsus (〜のに - va'da bergan bo'lsa-da nega kelmadi?): «急な用事が入ってしまったんです».",
      },
      {
        id: 'ja-minna-l45-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_039.mp3',
        audioTitle: '45-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「一生懸命[いっしょうけんめい] 勉強[べんきょう]したのに、不合格[ふごうかく]でした。」',
        options: [
          'それは 残念[ざんねん]でしたね。次回[じかい] 頑張[がんば]りましょう。',
          'おめでとうございます。',
          'よかったです。',
          '簡単[かんたん]でした。',
        ],
        correctAnswerIndex: 0,
        explanation: "Kutilgan natija bo'lmagandagi taajjub/afsus: 〜のに.",
      },
      {
        id: 'ja-minna-l45-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_040.mp3',
        audioTitle: '45-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「領収書[りょうしゅうしょ]が 必要[ひつよう]な 場合は、ボタンを 押[お]して ください。はい、押[お]しました。」\n\n男[おとこ]の 人[ひと]は いつ ボタンを 押[お]しますか。',
        options: [
          '領収書[りょうしゅうしょ]が 欲[ほ]しい とき',
          'お釣[つ]りが 欲[ほ]しい とき',
          '商品[しょうひん]が 出[で]ない とき',
          '機械[きかい]が 壊[こわ]れた とき',
        ],
        correctAnswerIndex: 0,
        explanation: "Kvitansiya kerak bo'lgan holatda tugmani bosadi.",
      },
      {
        id: 'ja-minna-l45-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_042.mp3',
        audioTitle: '45-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「パスポートを 紛失[ふんしつ]した 場合は、大使館[たいしかん]へ 連絡[れんらく]して ください。はい、メモしました。」\n\nパスポートが なくなった とき、どこへ 行[い]きますか。',
        options: ['大使館[たいしかん]', 'ホテル', '病院[びょういん]', '空港[くうこう]'],
        correctAnswerIndex: 0,
        explanation: "Pasport yo'qolgan taqdirda elchixonaga murojaat qilinadi.",
      },
      {
        id: 'ja-minna-l45-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_040.mp3',
        audioTitle: "45-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「薬[くすり]を 飲[の]んだのに、まだ 頭[あたま]が 痛[いた]いです。」\nBayonot: 「薬[くすり]を 飲[の]んで、頭痛[ずつう]が 完全[かんぜん]に 治[なお]りました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Dori ichgan bo'lsa-da hali bosh og'rig'i qolmagan. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l45-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_042.mp3',
        audioTitle: "45-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「たくさん 練習[れんしゅう]したのに、試合[しあい]で 負[ま]けて しまいました。」\nBayonot: 「試合[しあい]で 勝[か]ちました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Ko'p mashq qilgan bo'lsa-da mag'lub bo'ldi. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '46': {
    lessonNumber: 46,
    title: '46-Dars: 〜ところです / 〜ばかりです (Bosqich va yaqindagina bajarilgan harakat)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l46-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_041.mp3',
        audioTitle: '46-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「昼[ひる]ご飯[はん]は もう 食[た]べましたか。」',
        options: [
          '今[いま]から 食[た]べるところです。一緒[いっしょ]に いかがですか。',
          '昨日[きのう] 食[た]べました。',
          '食[た]べませんでした。',
          'お腹[なか]が いっぱいです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Ayni paytda boshlanish arafasida: V-るところです (hozir yemoqchi bo'lib turibman).",
      },
      {
        id: 'ja-minna-l46-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_041.mp3',
        audioTitle: '46-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「田中[たなか]さんは まだ 会議室[かいぎしつ]に いますか。」',
        options: [
          'いえ、たった今[いま] 帰[かえ]ったところですよ。',
          'はい、会議[かいぎ]は 始[はじ]まりません。',
          'いませんでした。',
          '会議[かいぎ]を します。',
        ],
        correctAnswerIndex: 0,
        explanation: "Yaqindagina sodir bo'lgan lahza: V-たところです (hozirgina ketdilar).",
      },
      {
        id: 'ja-minna-l46-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_041.mp3',
        audioTitle: '46-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「先月[せんげつ] 車[くるま]を 買[か]ったばかりなのに、もう 故障[こしょう]して しまいました。」',
        options: [
          'それは ひどいですね。保証[ほしょう]は ありますか。',
          'よかったですね。',
          '高[たか]い車[くるま]です。',
          '買[か]いましょう。',
        ],
        correctAnswerIndex: 0,
        explanation: "Yaqinda bo'lgan subyektiv his: V-たばかりなのに.",
      },
      {
        id: 'ja-minna-l46-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_042.mp3',
        audioTitle: '46-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「今[いま] お時間[じかん] よろしいですか。すみません、今[いま]から 出[で]かけるところなんです。後[あと]で お願[ねが]いできますか。」\n\n男[おとこ]の 人[ひと]は 今[いま]から 何[なに]を しますか。',
        options: [
          '外出[がいしゅつ]する',
          '電話[でんわ]で 話[はな]す',
          '昼食[ちゅうしょく]を とる',
          '休[やす]む',
        ],
        correctAnswerIndex: 0,
        explanation: "Ayni daqiqada ko'chaga chiqib ketish arafasida turganini aytdi.",
      },
      {
        id: 'ja-minna-l46-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_044.mp3',
        audioTitle: '46-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「仕事[しごと]は もう 終[お]わりましたか。いえ、今[いま]から 始[はじ]めるところです。」\n\n仕事[しごと]は どの 段階[だんかい]ですか。',
        options: [
          'これから 始[はじ]まる ところ',
          'もう 終[お]わった ところ',
          '半分[はんぶん] 終[お]わった',
          '何[なに]も しない',
        ],
        correctAnswerIndex: 0,
        explanation: 'Ish endi boshlanish arafasida turibdi (始めるところです).',
      },
      {
        id: 'ja-minna-l46-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_042.mp3',
        audioTitle: "46-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「さっき 昼[ひる]ご飯[はん]を 食[た]べたばかりですから、お腹[なか]が すいて いません。」\nBayonot: 「この 人[ひと]は 今[いま] とても お腹[なか]が すいて います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Yaqindagina ovqatlanganligi uchun qorni och emas. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l46-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_044.mp3',
        audioTitle: "46-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「先週[せんしゅう] 日本[にほん]に 来[き]たばかりですから、まだ 道[みち]が よく 分[わ]かりません。」\nBayonot: 「日本[にほん]に 長[なが]い 間[あいだ] 住[す]んで います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "O'tgan haftagina Yaponiyaga kelgan, uzoq vaqtdan beri yashamayapti. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '47': {
    lessonNumber: 47,
    title: '47-Dars: 〜そうです / 〜ようです (Eshitilgan xabar va taxmin)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l47-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_043.mp3',
        audioTitle: '47-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「天気予報[てんきよほう]に よると、明日[あした]は 寒[さむ]く なるそうですね。」',
        options: [
          'ええ、コートを 着[き]て 行[い]ったほうが いいですね。',
          '寒[さむ]くなかったです。',
          '暖[あたた]かいです。',
          '雨[あめ]が 降[ふ]りました。',
        ],
        correctAnswerIndex: 0,
        explanation: "Olingan xabarni yetkazish: Oddiy shakl + そうです (sovuq bo'lar emish).",
      },
      {
        id: 'ja-minna-l47-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_043.mp3',
        audioTitle: '47-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「外[そと]が 騒[さわ]がしいですね。何[なに]か あったんでしょうか。」',
        options: [
          '事故[じこ]が あったようですよ。パトカーが 来[き]て います。',
          '静[しず]かですね。',
          '何[なに]も ありません。',
          '知[し]りません。',
        ],
        correctAnswerIndex: 0,
        explanation: "Sezgi va holatga qarab taxmin: 〜ようです (avariya bo'lganga o'xshaydi).",
      },
      {
        id: 'ja-minna-l47-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_043.mp3',
        audioTitle: '47-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「山田[やまだ]さんは 来月[らいげつ] 会社[かいしゃ]を 辞[や]めるそうですよ。」',
        options: [
          'えっ、本当[ほんとう]ですか。全然[ぜんぜん] 知[し]りませんでした。',
          '辞[や]めました。',
          'よかったです。',
          'おめでとうございます。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Uchinchi shaxs haqidagi yangilik: 〜辞めるそうです.',
      },
      {
        id: 'ja-minna-l47-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_044.mp3',
        audioTitle: '47-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「噂[うわさ]に よると、駅前[えきまえ]に 大[おお]きな 映画館[えいがかん]が できるそうですよ。へえ、便利[べんり]に なりますね。」\n\n駅前[えきまえ]に 何[なに]が できると 言[い]って いますか。',
        options: ['映画館[えいがかん]', '病院[びょういん]', 'スーパー', '学校[がっこう]'],
        correctAnswerIndex: 0,
        explanation: "Mish-mishlarga ko'ra vokzal oldida katta kinoteatr qurilar emish.",
      },
      {
        id: 'ja-minna-l47-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_046.mp3',
        audioTitle: '47-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「明日[あした]は 暖[あたた]かく なるそうですよ。じゃ、ピクニックに 行[い]きましょう。」\n\n明日[あした]の 天気[てんき]は どうですか。',
        options: [
          '暖[あたた]かくなる そう',
          '大雨[おおあめ]に なる そう',
          '雪[ゆき]が 降[ふ]る そう',
          '台風[たいふう]が 来[く]る そう',
        ],
        correctAnswerIndex: 0,
        explanation: 'Ertaga havo ilishi aytilgan, shuning uchun sayrga chiqishmoqchi.',
      },
      {
        id: 'ja-minna-l47-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_044.mp3',
        audioTitle: "47-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「咳[せき]が 出[で]るし、熱[ねつ]も あります。風邪[かぜ]を ひいたようです。」\nBayonot: 「この 人[ひと]は とても 元気[げんき]です。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Yo'talyapti va isitmasi bor, shamollaganga o'xshaydi. Demak uning ahvoli yaxshi emas. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l47-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_046.mp3',
        audioTitle: "47-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「部屋[へや]に 明[あ]かりが ついて います。誰[だれ]か いるようです。」\nBayonot: 「部屋[へや]には 絶対[ぜったい]に 誰[だれ]も いません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Xonada chiroq yoqilgan, kimdir borga o'xshaydi (いるようです). Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '48': {
    lessonNumber: 48,
    title: '48-Dars: 使役形 (Majburlash va ruxsat - 使役形: 走らせる / 歌わせる)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l48-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_045.mp3',
        audioTitle: '48-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「部長[ぶちょう]、この 仕事[しごと]は 私[わたし]に やらせて いただけませんか。」',
        options: [
          'ええ、じゃ、君[きみ]に 任[まか]せよう。',
          'やりませんでした。',
          'だめです、やれ。',
          '仕事[しごと]が ありません。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O'ziga biror ishni bajarishga ruxsat so'rash: «私に やらせて いただけませんか».",
      },
      {
        id: 'ja-minna-l48-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_045.mp3',
        audioTitle: '48-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「お母[かあ]さんは 子供[こども]に 毎日[まいにち] ピアノを 練習[れんしゅう]させて います。」',
        options: [
          '熱心[ねっしん]な お母[かあ]さんですね。',
          'ピアノを 弾[ひ]きません。',
          '子供[こども]が 弾[ひ]かせました。',
          '好[す]きじゃ ありません。',
        ],
        correctAnswerIndex: 0,
        explanation: 'Boshqa shaxsga ish-harakatni bajartirish (使役形): 練習させています.',
      },
      {
        id: 'ja-minna-l48-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_045.mp3',
        audioTitle: '48-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「気分[きぶん]が 悪[わる]いので、早[はや]く 帰[かえ]らせて ください。」',
        options: [
          '無理[むり]を しないで、早[はや]く 病院[びょういん]へ 行[い]きなさい。',
          '帰[かえ]りました。',
          '働[はたら]いて ください。',
          '元気[げんき]ですね。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Sog'lig'i yomonligi sababli erta ketishga ijozat so'rash: «早く 帰らせてください».",
      },
      {
        id: 'ja-minna-l48-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_046.mp3',
        audioTitle: '48-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「先生[せんせい]、気分[きぶん]が 悪[わる]いので、保健室[ほけんしつ]へ 行[い]かせて いただけませんか。ええ、すぐ 行[い]って 休[やす]みなさい。」\n\n生徒[せいと]は これから どこへ 行[い]きますか。',
        options: ['保健室[ほけんしつ]', '職員室[しょくいんしつ]', '家[いえ]', '教室[きょうしつ]'],
        correctAnswerIndex: 0,
        explanation:
          "Ahvoli yomonlashgan o'quvchiga tibbiyot xonasiga (保健室) borishga ruxsat berildi.",
      },
      {
        id: 'ja-minna-l48-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_048.mp3',
        audioTitle: '48-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「子供[こども]に 部屋[へや]を 片付[かたづ]けさせました。綺麗[きれい]に なりましたね。」\n\n誰[だれ]が 部屋[へや]を 掃除[そうじ]しましたか。',
        options: ['子供[こども]', 'お父[とう]さん', 'お母[かあ]さん', '先生[せんせい]'],
        correctAnswerIndex: 0,
        explanation: 'Bolaga xonani tozalattirildi (片付けさせました).',
      },
      {
        id: 'ja-minna-l48-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_046.mp3',
        audioTitle: "48-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「父[ちち]は 私[わたし]に 自由[じゆう]に 留学[りゅうがく]させて くれました。」\nBayonot: 「父[ちち]は 留学[りゅうがく]に 反対[はんたい]しました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Otasi chet elda o'qishiga erkin ruxsat bergan, qarshi bo'lmagan. Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l48-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_048.mp3',
        audioTitle: "48-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「先生[せんせい]は 生徒[せいと]に 宿題[しゅくだい]を やらせました。」\nBayonot: 「先生[せんせい]が 生徒[せいと]の 宿題[しゅくだい]を やってあげました。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "O'qituvchi o'quvchiga vazifani bajartirdi, o'zi qilib bermadi. Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '49': {
    lessonNumber: 49,
    title: '49-Dars: 尊敬語 (Sonkeigo - Ehtirom nutqi: いらっしゃいます / なさいます)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l49-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_047.mp3',
        audioTitle: '49-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「社長[しゃちょう]は もう お帰[かえ]りに なりましたか。」',
        options: [
          'はい、先[さき]ほど お帰[かえ]りに なりました。',
          'はい、帰[かえ]ります。',
          'いいえ、帰[かえ]しました。',
          '帰[かえ]りたいです。',
        ],
        correctAnswerIndex: 0,
        explanation: "Hurmat shakli (尊敬語): お帰りに なりました (jo'nab ketdilar).",
      },
      {
        id: 'ja-minna-l49-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_047.mp3',
        audioTitle: '49-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「何[なに]を 召[め]し上[あ]がりますか。」',
        options: [
          'コーヒーを お願[ねが]いします。',
          '召[め]し上[あ]がります。',
          '食[た]べさせます。',
          'おいしいです。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "«Nima tanovul qilasiz?» ehtirom savoliga o'z nomidan oddiy muloyim javob: «コーヒーを お願いします».",
      },
      {
        id: 'ja-minna-l49-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_047.mp3',
        audioTitle: '49-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「先生[せんせい]は 明日[あした] 研究室[けんきゅうしつ]に いらっしゃいますか。」',
        options: [
          'ええ、午後[ごご]なら ずっと おりますよ。',
          '来[き]ません。',
          'いませんでした。',
          '行[い]きましょう。',
        ],
        correctAnswerIndex: 0,
        explanation: "Ustozning mavjudligini so'rashda ehtirom shakli: «いらっしゃいますか».",
      },
      {
        id: 'ja-minna-l49-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_048.mp3',
        audioTitle: '49-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「鈴木[すずき]先生[せんせい]、昨日[きのう]の テレビを ご覧[らん]に なりましたか。ええ、とても 面白[おもしろ]かったですね。」\n\n先生[せんせい]は テレビを 見[み]ましたか。',
        options: [
          'はい、見[み]ました',
          'いいえ、見[み]ませんでした',
          'テレビが 壊[こわ]れて いた',
          '知[し]らなかった',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Ustozga nisbatan hurmat fe'li «ご覧になりましたか» (ko'rdingizmi?) ishlatildi va ustoz ko'rganini tasdiqladi.",
      },
      {
        id: 'ja-minna-l49-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_050.mp3',
        audioTitle: '49-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「社長[しゃちょう]は 何時[なんじ]に いらっしゃいますか。10時[じゅうじ]に お見[み]えに なります。」\n\n社長[しゃちょう]は いつ 来[き]ますか。',
        options: ['10時[じゅうじ]', '12時[じゅうにじ]', '明日[あした]', '来[き]ません'],
        correctAnswerIndex: 0,
        explanation: 'Prezident soat 10 da tashrif buyurishlari (お見えになる = 来る) bildirildi.',
      },
      {
        id: 'ja-minna-l49-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_048.mp3',
        audioTitle: "49-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「社長[しゃちょう]は ゴルフを なさいます。」\nBayonot: 「社長[しゃちょう]は ゴルフを 全然[ぜんぜん] しません。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation: "Prezident golf o'ynaydilar (なさいます = されます). Bayonot noto'g'ri (✕).",
      },
      {
        id: 'ja-minna-l49-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_050.mp3',
        audioTitle: "49-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「先生[せんせい]は もう お帰[かえ]りに なりました。」\nBayonot: 「先生[せんせい]は まだ 教室[きょうしつ]に います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "Ustoz allaqachon uylariga jo'nab ketganlar (お帰りになりました). Bayonot noto'g'ri (✕).",
      },
    ],
  },
  '50': {
    lessonNumber: 50,
    title: '50-Dars: 謙譲語 (Kenjougo - Kamtarlik nutqi: 参ります / 申します / 拝見します)',
    estimatedMinutes: 8,
    questions: [
      {
        id: 'ja-minna-l50-m1-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_049.mp3',
        audioTitle: '50-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「お名前[なまえ]は 何[なん]と おっしゃいますか。」',
        options: [
          'スミスと 申[もう]します。どうぞ よろしく お願[ねが]いします。',
          'スミスさんです。',
          'おっしゃいます。',
          '名前[なまえ]は ありません。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O'z ismini kamtarlik bilan aytishda Kenjougo: «〜と 申します» (Smith deb atalaman).",
      },
      {
        id: 'ja-minna-l50-m1-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_049.mp3',
        audioTitle: '50-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 2】Audioni tinglang va mos javobni tanlang:\n「明日[あした] 10時[じゅうじ]に そちらへ 伺[うかが]います。」',
        options: [
          'お待[ま]ちして おります。気[き]を つけて お越[こ]しください。',
          '参[まい]りません。',
          '来[き]てください。',
          '伺[うかが]いました。',
        ],
        correctAnswerIndex: 0,
        explanation: "Birovning huzuriga borishda kamtarlik fe'li: «伺います» (tashrif buyuraman).",
      },
      {
        id: 'ja-minna-l50-m1-q3',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_049.mp3',
        audioTitle: '50-dars Mondai 1: Savollarga javob',
        question:
          '【Mondai 1 - Savol 3】Audioni tinglang va mos javobni tanlang:\n「先生[せんせい]の 新[あたら]しい ご著書[ちょしょ]を 拝見[はいけん]しました。」',
        options: [
          '読[よ]んで くださって ありがとうございます。',
          '見[み]ませんでした。',
          '本[ほん]を 書[か]きました。',
          '拝見[はいけん]します。',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Birovning buyumini yoki kitobini ehtirom bilan ko'rish/o'qish: «拝見しました» (mutolaa qildim/ko'rib chiqdim).",
      },
      {
        id: 'ja-minna-l50-m2-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_050.mp3',
        audioTitle: '50-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n「IMCの ミラーと 申[もう]します。社長[しゃちょう]に お目[め]に かかりたいんですが。少々[しょうしょう] お待[ま]ちください、呼[よ]んで まいります。」\n\nミラーさんは 何[なに]をしに 来[き]ましたか。',
        options: [
          '社長[しゃちょう]に 会[あ]いに 来[き]た',
          '書類[しょるい]を 届[とど]けに 来[き]た',
          '電話[でんわ]を かけに 来[き]た',
          '休憩[きゅうけい]しに 来[き]た',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Miller prezident bilan ko'rishish (お目にかかる = 会う) maqsadida kelganini aytdi.",
      },
      {
        id: 'ja-minna-l50-m2-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_052.mp3',
        audioTitle: '50-dars Mondai 2: Qisqa suhbat',
        question:
          '【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n「明日[あした]の スケジュールを ご説明[せつめい]いたします。はい、お願[ねが]いします。」\n\nこの 人[ひと]は 何[なに]を しますか。',
        options: [
          'スケジュールを 説明[せつめい]する',
          'スケジュールを 聞[き]く',
          '帰[かえ]る',
          '休[やす]む',
        ],
        correctAnswerIndex: 0,
        explanation:
          "So'zlovchi kamtarlik bilan ertangi jadvalni tushuntirib berishini (ご説明いたします) aytdi.",
      },
      {
        id: 'ja-minna-l50-m3-q1',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_050.mp3',
        audioTitle: "50-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 1-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「重[おも]そうな お荷物[にもつ]ですね。私[わたし]が お持[も]ちします。」\nBayonot: 「この 人[ひと]は 相手[あいて]の 荷物[にもつ]を 持[も]ちたいと 思[おも]って います。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 0,
        explanation:
          "Birovning og'ir yukini ko'tarib berish taklifi kamtarlik shaklida ifodalangan: «お持ちします». Bayonot to'g'ri (〇).",
      },
      {
        id: 'ja-minna-l50-m3-q2',
        audioUrl: '/audio/choukai/n4/shinkanzen_chokai_n4_CD-A_052.mp3',
        audioTitle: "50-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
        question:
          "【Mondai 3 - 2-gap】Audioni tinglab, bayonot to'g'riligini aniqlang:\nSuhbat: 「明日[あした] 社長[しゃちょう]の お宅[たく]に 伺[うかが]います。」\nBayonot: 「明日[あした] 社長[しゃちょう]が 私[わたし]の 家[いえ]に 来[き]ます。」",
        options: ["〇 正[ただ]しい (To'g'ri)", "✕ 間違[まちが]い (Noto'g'ri)"],
        correctAnswerIndex: 1,
        explanation:
          "So'zlovchi rahbarning xonadoniga tashrif buyuradi (伺います = 行きます). Rahbar uning uyiga kelmaydi. Bayonot noto'g'ri (✕).",
      },
    ],
  },
};
