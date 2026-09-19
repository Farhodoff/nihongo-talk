/**
 * listening_data.ts
 * Comprehensive JLPT Choukai (聴解 - Listening) Master Database.
 * Contains authentic exam scenarios across N5, N4, N3, N2, N1 with
 * structured dialogue lines, multi-speaker tagging, and detailed pedagogical explanations.
 */

export interface DialogueLine {
  id: string;
  speaker: string; // e.g. '男', '女', '先生', '店員', 'ナレーション', 'アナウンス'
  speakerRoleUz?: string; // 'Erkak', 'Ayol', 'O'qituvchi', 'Sotuvchi', 'Boshlovchi'
  gender?: 'male' | 'female' | 'neutral';
  japanese: string;
  uzbek?: string;
}

export interface JlptListeningQuestion {
  id: number;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  type: 'task' | 'point' | 'quick' | 'summary'; // 課題理解, ポイント理解, 即時応答, 概要理解
  titleUz?: string;
  audioUrl: string;
  script: string;
  dialogueLines?: DialogueLine[];
  questionText: string;
  questionTextUz?: string;
  options: string[];
  optionsUz?: string[];
  correctAnswer: number; // index of options (0-indexed)
  explanationUzbek: string;
  tipUzbek?: string;
}

export const JLPT_LISTENING_QUESTIONS: JlptListeningQuestion[] = [
  {
    id: 1,
    level: 'N5',
    type: 'task',
    titleUz: 'Soyabon olish',
    audioUrl: '',
    script:
      '男の人と女の人が話しています。男の人はこれから何をしますか？\n男：あ、雨が降ってきましたね。\n女：そうですね。傘を持っていますか？\n男：いいえ、持っていません。コンビニで買ってきます。\n女：あ、私の傘を貸しましょうか？車の中にありますから。\n男：ありがとうございます！じゃあ、お願いします。',
    questionText: '男の人はこれから何をしますか？',
    questionTextUz: 'Erkak kishi bundan keyin nima qiladi?',
    options: [
      'コンビニで傘を買います',
      '女の人の車から傘を持ってきます',
      '雨の中を歩きます',
      '店の中で待ちます',
    ],
    optionsUz: [
      "Do'kondan soyabon sotib oladi",
      'Ayolning mashinasidan soyabonni oladi',
      "Yomg'irda piyoda yuradi",
      "Do'kon ichida kutadi",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Erkak kishi soyaboni yo'qligini aytib do'kondan sotib olmoqchi bo'ladi, ammo ayol mashinasidagi zaxira soyabonini berib turishini aytganda erkak buni minnatdorchilik bilan qabul qiladi. Demak, u ayolning mashinasidan soyabonni oladi.",
    tipUzbek:
      "Suhbat oxiridagi 'じゃあ、お願いします' (undog'am iltimos) jumlasi ayolning taklifiga rozilikni bildiradi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '男の人と女の人が話しています。男の人はこれから何をしますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'あ、雨が降ってきましたね。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'そうですね。傘を持っていますか？',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'いいえ、持っていません。コンビニで買ってきます。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'あ、私の傘を貸しましょうか？車の中にありますから。',
        uzbek: '',
      },
      {
        id: 'line_6',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'ありがとうございます！じゃあ、お願いします。',
        uzbek: '',
      },
    ],
  },
  {
    id: 2,
    level: 'N5',
    type: 'quick',
    titleUz: "Poezd yo'li raqami",
    audioUrl: '',
    script:
      '駅で男の人が駅員に聞いています。\n男：すみません、東京行きの電車は何番線ですか？\n駅員：3番線ですよ。もうすぐ来ますよ。',
    questionText: '東京行きの電車は何番線ですか？',
    questionTextUz: "Tokioga ketadigan poyezd nechanchi yo'ldan jo'naydi?",
    options: ['1番線', '2番線', '3番線', '4番線'],
    optionsUz: ["1-yo'l", "2-yo'l", "3-yo'l", "4-yo'l"],
    correctAnswer: 2,
    explanationUzbek: "Vokzal xodimi aniq qilib '3番線ですよ' (3-yo'l) deb javob beradi.",
    tipUzbek: "Raqamlar va '番線' (yo'l raqami) qo'shimchasiga diqqat qiling.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '駅で男の人が駅員に聞いています。',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'すみません、東京行きの電車は何番線ですか？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '駅員',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '3番線ですよ。もうすぐ来ますよ。',
        uzbek: '',
      },
    ],
  },
  {
    id: 3,
    level: 'N5',
    type: 'point',
    titleUz: 'Test kuni',
    audioUrl: '',
    script:
      '学校で先生と学生が話しています。テストは何曜日ですか？\n学生：先生、日本語のテストは金曜日ですか？\n先生：いいえ、金曜日は祝日でお休みですから、木曜日に行いますよ。\n学生：わかりました。木曜日ですね。',
    questionText: '日本語のテストは何曜日ですか？',
    questionTextUz: "Yapon tili testi haftaning qaysi kuni bo'ladi?",
    options: ['水曜日', '木曜日', '金曜日', '土曜日'],
    optionsUz: ['Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
    correctAnswer: 1,
    explanationUzbek:
      "O'qituvchi juma kuni bayram bo'lgani sababli, test payshanba (木曜日) kuni o'tkazilishini tushuntiradi.",
    tipUzbek:
      "'金曜日は祝日でお休み' (juma bayram va dam olish) sababli '木曜日' (payshanba) tanlanadi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '学校で先生と学生が話しています。テストは何曜日ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '学生',
        speakerRoleUz: 'Talaba',
        gender: 'neutral',
        japanese: '先生、日本語のテストは金曜日ですか？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '先生',
        speakerRoleUz: "O'qituvchi",
        gender: 'male',
        japanese: 'いいえ、金曜日は祝日でお休みですから、木曜日に行いますよ。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '学生',
        speakerRoleUz: 'Talaba',
        gender: 'neutral',
        japanese: 'わかりました。木曜日ですね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 12,
    level: 'N5',
    type: 'task',
    titleUz: "Ko'ylak xaridi",
    audioUrl: '',
    script:
      '店で男の人と店員が話しています。男の人はどのシャツを買いますか？\n男：すみません、この白いシャツのMサイズはありますか？\n店員：申し訳ありません、白のMは売り切れてしまいました。青のMならございます。\n男：そうですか。じゃあ、青のMをお願いします。',
    questionText: '男の人はどのシャツを買いますか？',
    questionTextUz: "Erkak qaysi ko'ylakni sotib oladi?",
    options: ['白のMサイズ', '青のMサイズ', '白のLサイズ', '黒のSサイズ'],
    optionsUz: [
      "Oq rangli M o'lcham",
      "Ko'k rangli M o'lcham",
      "Oq rangli L o'lcham",
      "Qora rangli S o'lcham",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Oq M o'lcham qolmagani uchun xaridor sotuvchi taklif qilgan ko'k rangli M o'lchamdagi ko'ylakni sotib oladi.",
    tipUzbek: "'売り切れ' (tugab qolgan) so'zidan keyingi muqobil taklifga e'tibor qarating.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '店で男の人と店員が話しています。男の人はどのシャツを買いますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'すみません、この白いシャツのMサイズはありますか？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '店員',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese: '申し訳ありません、白のMは売り切れてしまいました。青のMならございます。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'そうですか。じゃあ、青のMをお願いします。',
        uzbek: '',
      },
    ],
  },
  {
    id: 13,
    level: 'N5',
    type: 'quick',
    titleUz: 'Mehmondorchilik odobi',
    audioUrl: '',
    script:
      '友達の家で。友達がお茶を出してくれました。何と言いますか？\n男：お茶をどうぞ。\nあなた：あ、（　）',
    questionText: 'こんなとき、何と言いますか？',
    questionTextUz: 'Bunday vaziyatda nima deyiladi?',
    options: ['いただきます', 'ごちそうさまでした', 'いってきます', 'ただいま'],
    optionsUz: [
      'Itadakimasu (Ichish/yeyishdan oldin)',
      'Gochisousamadeshita (Ovqatdan keyin)',
      'Ittekimasu (Uydan chiqayotganda)',
      'Tadaima (Uyga qaytganda)',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Ichimlik yoki taom taqdim etilganda boshlashdan oldin 'いただきます' (itadakimasu) aytiladi.",
    tipUzbek: "Oshxona va mehmondorchilik kundalik iboralari JLPT N5 Choukaida juda ko'p tushadi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '友達の家で。友達がお茶を出してくれました。何と言いますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'お茶をどうぞ。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: 'あ、（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 22,
    level: 'N5',
    type: 'task',
    titleUz: 'Kutubxonada kitob topshirish',
    audioUrl: '',
    script:
      '図書館で男の学生と係の人が話しています。学生は何冊本を返しますか？\n学生：すみません、本を返したいんですが。\n係員：はい。全部で4冊ですね。あれ、この本は来週まで借りられますよ。\n学生：あ、まだ読んでいないので、この1冊はそのまま借ります。\n係員：わかりました。じゃあ、3冊お預かりします。',
    questionText: '学生は何冊本を返しますか？',
    questionTextUz: 'Talaba necha dona kitobni qaytaradi?',
    options: ['1冊', '2冊', '3冊', '4冊'],
    optionsUz: ['1 dona', '2 dona', '3 dona', '4 dona'],
    correctAnswer: 2,
    explanationUzbek:
      "Talabada jami 4 ta kitob bo'lgan, ammo bittasini hali o'qib bo'lmagani sababli olib qoladi. Natijada 3 ta kitobni qaytaradi (3冊お預かりします).",
    tipUzbek: 'Sonlar hisobi: 4 - 1 = 3 ta kitob qaytariladi.',
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '図書館で男の学生と係の人が話しています。学生は何冊本を返しますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '学生',
        speakerRoleUz: 'Talaba',
        gender: 'neutral',
        japanese: 'すみません、本を返したいんですが。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '係員',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese: 'はい。全部で4冊ですね。あれ、この本は来週まで借りられますよ。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '学生',
        speakerRoleUz: 'Talaba',
        gender: 'neutral',
        japanese: 'あ、まだ読んでいないので、この1冊はそのまま借ります。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '係員',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese: 'わかりました。じゃあ、3冊お預かりします。',
        uzbek: '',
      },
    ],
  },
  {
    id: 23,
    level: 'N5',
    type: 'point',
    titleUz: 'Ertangi uchrashuv joyi',
    audioUrl: '',
    script:
      '男の人と女の人が話しています。2人は明日どこで会いますか？\n男：明日の待ち合わせ、駅の改札口でいい？\n女：改札口は人が多くて見つけにくいから、駅の東口にあるカフェの前にしない？\n男：あそこね、いいね。じゃあ、10時にカフェの前で。\n女：うん、そうしよう。',
    questionText: '2人は明日どこで会いますか？',
    questionTextUz: 'Ular ertaga qayerda uchrashadilar?',
    options: ['駅の改札口', '駅の東口のカフェの前', '駅のホーム', '学校の前'],
    optionsUz: [
      'Vokzal chiptaxonasida',
      'Sharqiy chiqishdagi qahvaxona oldida',
      'Poyezd platformasida',
      'Maktab oldida',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Erkak dastlab chiptaxona (改札口) oldini taklif qiladi, lekin ayol u yerda odam ko'pligini aytib, sharqiy chiqishdagi kafe oldini (駅の東口にあるカフェの前) tanlaydi va erkak rozi bo'ladi.",
    tipUzbek: "Taklif qilingan birinchi joy emas, kelishilgan yakuniy joy to'g'ri javob bo'ladi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '男の人と女の人が話しています。2人は明日どこで会いますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: '明日の待ち合わせ、駅の改札口でいい？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '改札口は人が多くて見つけにくいから、駅の東口にあるカフェの前にしない？',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'あそこね、いいね。じゃあ、10時にカフェの前で。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'うん、そうしよう。',
        uzbek: '',
      },
    ],
  },
  {
    id: 24,
    level: 'N5',
    type: 'quick',
    titleUz: "Kutubxonada ruxsat so'rash",
    audioUrl: '',
    script: '教室でペンがありません。隣の人に借りたいです。何と言いますか？\nあなた：（　）',
    questionText: 'こんなとき、何と言いますか？',
    questionTextUz: "Ruchka so'rashda qanday murojaat qilinadi?",
    options: [
      'ペンを貸してください',
      'ペンを借りてください',
      'ペンをあげますよ',
      'ペンをもらいませんか',
    ],
    optionsUz: [
      'Iltimos, ruchkangizni berib turing',
      'Ruchka qarz oling',
      'Sizga ruchka beraman',
      'Ruchka olmaysizmi',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Birovdan narsa so'rab turishda '貸してください' (kashite kudasai - qarzga/berib turing) iborasi ishlatiladi.",
    tipUzbek: "«貸す» (berib turmoq) va «借りる» (olib turmoq) fe'llarini adashtirmaslik kerak.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '教室でペンがありません。隣の人に借りたいです。何と言いますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: '（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 25,
    level: 'N5',
    type: 'task',
    titleUz: "Supermarketdagi xarid ro'yxati",
    audioUrl: '',
    script:
      '家で母親と息子が話しています。息子は何を買ってきますか？\n母：買い物に行ってくれる？牛乳と卵を買ってきて。\n息子：わかった。パンはまだあったっけ？\n母：パンは今朝買ったのがあるから買わなくていいわ。あ、リンゴも2つお願い。\n息子：牛乳、卵、リンゴ2つだね。行ってきます。',
    questionText: '息子は何を買ってきますか？',
    questionTextUz: "O'g'il nimalarni sotib olib keladi?",
    options: ['牛乳と卵とリンゴ', '牛乳とパンとリンゴ', 'パンと卵だけ', '牛乳とパンだけ'],
    optionsUz: ['Sut, tuxum va olma', 'Sut, non va olma', 'Faqat non va tuxum', 'Faqat sut va non'],
    correctAnswer: 0,
    explanationUzbek:
      "Ona sut va tuxum, so'ngra 2 ta olma buyuradi. Non esa ertalab olingani sababli kerak emas (買わなくていい). Shuning uchun o'g'il sut, tuxum va olma olib keladi.",
    tipUzbek: "'買わなくていい' (olish shart emas) degan narsa ro'yxatdan chiqariladi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '家で母親と息子が話しています。息子は何を買ってきますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '母',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '買い物に行ってくれる？牛乳と卵を買ってきて。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '息子',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'わかった。パンはまだあったっけ？',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '母',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'パンは今朝買ったのがあるから買わなくていいわ。あ、リンゴも2つお願い。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '息子',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: '牛乳、卵、リンゴ2つだね。行ってきます。',
        uzbek: '',
      },
    ],
  },
  {
    id: 4,
    level: 'N4',
    type: 'point',
    titleUz: 'Dars qoldirish sababi',
    audioUrl: '',
    script:
      '女の学生と男の学生が話しています。男の学生はどうして昨日学校を休みましたか？\n女：山田くん、昨日はどうして休んだの？風邪？\n男：ううん、風邪じゃなくて。実は、自転車が途中で壊れちゃって、遅刻しそうだったから家に帰ったんだ。\n女：えー、それだけで休んだの？\n男：うん、テストもない日だったしね。',
    questionText: '男の学生はどうして昨日学校を休みましたか？',
    questionTextUz: 'Yigit nima sababdan kecha darsga kelmadi?',
    options: [
      '風邪をひいたからです',
      '自転車が壊れたからです',
      'テストがなかったからです',
      '寝坊したからです',
    ],
    optionsUz: [
      'Shamollagani uchun',
      'Velosipedi buzilib qolgani uchun',
      "Test bo'lmagani uchun",
      'Uxlab qolgani uchun',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Erkak talaba shamollagani yo'q, balki yo'lda velosipedi buzilib qolgani sababli darsga kelmay uyiga qaytib ketganligini aytadi.",
    tipUzbek:
      "'風邪じゃなくて' (shamollash emas) inkoridan keyingi '自転車が壊れちゃって' haqiqiy sababdir.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '女の学生と男の学生が話しています。男の学生はどうして昨日学校を休みましたか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '山田くん、昨日はどうして休んだの？風邪？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese:
          'ううん、風邪じゃなくて。実は、自転車が途中で壊れちゃって、遅刻しそうだったから家に帰ったんだ。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'えー、それだけで休んだの？',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'うん、テストもない日だったしね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 5,
    level: 'N4',
    type: 'task',
    titleUz: 'Majlis hujjatlari nusxasi',
    audioUrl: '',
    script:
      '会社で女の人と男の人が話しています。男の人はまず何をコピーしますか？\n女：田中さん、会議の準備を手伝ってくれませんか？\n男：はい、何をしましょうか？\n女：まずこの企画書を10部コピーしてください。それからスケジュールの表もお願いします。\n男：わかりました。企画書ですね。',
    questionText: '男の人はまず何をコピーしますか？',
    questionTextUz: 'Erkak avval nimadan nusxa oladi?',
    options: ['スケジュールの表', '企画書', '参加者名簿', 'アンケート用紙'],
    optionsUz: [
      'Jadval varaqasi',
      'Loyiha rejasi (kikakusho)',
      "Qatnashuvchilar ro'yxati",
      "So'rovnoma varaqasi",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ayol kishi 'まずこの企画書を10部コピーしてください' (avval loyiha rejasidan 10 nusxa oling) deydi. Demak, u birinchi navbatda 企画書 ni nusxa qiladi.",
    tipUzbek: "'まず' (avvalo / birinchi navbatda) so'ziga ergashgan buyruqqa diqqat qiling.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '会社で女の人と男の人が話しています。男の人はまず何をコピーしますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '田中さん、会議の準備を手伝ってくれませんか？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'はい、何をしましょうか？',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese:
          'まずこの企画書を10部コピーしてください。それからスケジュールの表もお願いします。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'わかりました。企画書ですね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 14,
    level: 'N4',
    type: 'task',
    titleUz: 'Kasalxonada birinchi qadam',
    audioUrl: '',
    script:
      '病院の受付で女の人と係の人が話しています。女の人はまずどこへ行きますか？\n係員：初診ですね。まずあちらの窓口で問診票を記入して出してください。その後、2階の内科の前でお待ちください。\n女：わかりました。問診票ですね。',
    questionText: '女の人はまず何をしますか？',
    questionTextUz: 'Ayol dastlab nima qilishi kerak?',
    options: ['2階の内科に行く', '問診票を記入して出す', '薬局で薬をもらう', '会計を済ませる'],
    optionsUz: [
      '2-qavatdagi terapevt oldiga borish',
      "Savolnomani to'ldirib topshirish",
      'Dorixonadan dori olish',
      "Kassada to'lov qilish",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Xodim avval qabul oynasida savolnomani (問診票) to'ldirib berishni, keyin 2-qavatga chiqishni aytadi.",
    tipUzbek: "'まず' va 'その後' (undan keyin) orqali ketma-ketlikni belgilang.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '病院の受付で女の人と係の人が話しています。女の人はまずどこへ行きますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '係員',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese:
          '初診ですね。まずあちらの窓口で問診票を記入して出してください。その後、2階の内科の前でお待ちください。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'わかりました。問診票ですね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 15,
    level: 'N4',
    type: 'quick',
    titleUz: "Boshliq topshirig'iga javob",
    audioUrl: '',
    script:
      '会社で上司に書類の提出を頼まれました。何と答えますか？\n上司：佐藤さん、この報告書を今日中にまとめてもらえるかい？\nあなた：（　）',
    questionText: '質問を聞いて、何と答えますか？',
    questionTextUz: 'Topshiriqqa qanday muloyim javob beriladi?',
    options: [
      'かしこまりました。すぐに取りかかります',
      'どういたしまして',
      'お疲れ様でした',
      'ごめんなさい',
    ],
    optionsUz: [
      "Xo'p bo'ladi, darhol kirishaman",
      'Arzimaydi',
      'Charchamang / Rahmat',
      'Kechirasiz',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Boshliqning rasmiy topshirig'iga xodim xushmuomalalik bilan 'かしこまりました' (kashikomarimashita) deb javob beradi.",
    tipUzbek:
      "Yapon ishbilarmonlik madaniyatida 'かしこまりました' eng standart qabul qilish iborasidir.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '会社で上司に書類の提出を頼まれました。何と答えますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '上司',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '佐藤さん、この報告書を今日中にまとめてもらえるかい？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: '（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 26,
    level: 'N4',
    type: 'point',
    titleUz: 'Dam olish kuni sayohati',
    audioUrl: '',
    script:
      '男の人と女の人が週末の予定について話しています。2人はどうして山に行くのをやめましたか？\n男：今週末、温泉に行こうか、山に登ろうか。\n女：山登りもいいけど、天気予報見たら土曜日も日曜日も雨が降るって言ってたよ。\n男：本当？雨の中の山道は滑って危ないから、今回は温泉旅館でのんびりしよう。\n女：そうだね、賛成！',
    questionText: '2人はどうして山に行くのをやめましたか？',
    questionTextUz: 'Ular nima sababdan toqqa chiqish fikridan qaytdilar?',
    options: [
      '雨の予報で危険だから',
      '温泉のほうが安かったから',
      '男の人の体調が悪いから',
      '旅館の予約が取れなかったから',
    ],
    optionsUz: [
      "Yomg'ir kutilayotgani va xavfli bo'lgani uchun",
      "Issiq buloq ancha arzon bo'lgani uchun",
      'Erkakning tobi qochgani uchun',
      'Mehmonxonada joy qolmagani uchun',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Ob-havo ma'lumotida yomg'ir yog'ishi aytilgani va yomg'irli kunda tog' yo'llari sirpanchiq bo'lib xavfli bo'lgani uchun toqqa borish bekor qilinadi.",
    tipUzbek: "'雨が降る' va '滑って危ない' sabab-oqibat zanjiriga e'tibor qarating.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '男の人と女の人が週末の予定について話しています。2人はどうして山に行くのをやめましたか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: '今週末、温泉に行こうか、山に登ろうか。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '山登りもいいけど、天気予報見たら土曜日も日曜日も雨が降るって言ってたよ。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: '本当？雨の中の山道は滑って危ないから、今回は温泉旅館でのんびりしよう。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'そうだね、賛成！',
        uzbek: '',
      },
    ],
  },
  {
    id: 27,
    level: 'N4',
    type: 'task',
    titleUz: "Mehmonxona xonasidagi ko'rsatma",
    audioUrl: '',
    script:
      'ホテルの部屋でフロントからの電話を聞いています。客はチェックアウトのとき鍵をどこに置きますか？\nフロント：お客様、明朝のチェックアウトについてご案内いたします。朝7時前はフロントが無人となりますので、ルームキーはお部屋のテーブルの上に置いたまま、ドアを閉めてご出発ください。\n客：わかりました。テーブルの上ですね。',
    questionText: '客は鍵をどこに置きますか？',
    questionTextUz: 'Mijoz xona kalitini qayerga qoldirishi kerak?',
    options: ['部屋のテーブルの上', 'フロントのカウンター', '玄関のポストの中', 'エレベーターの前'],
    optionsUz: [
      'Xonadagi stol ustiga',
      'Qabulxona (front) ustiga',
      'Eshik oldidagi pochta qutisiga',
      'Lift oldiga',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Tongda qabulxona bo'sh bo'lgani uchun kalitni xonaning stoli ustida qoldirib (お部屋のテーブルの上に置いたまま) chiqib ketish aytildi.",
    tipUzbek: "'〜に置いたまま' grammatikasi (qoldirgan holatda) joyni aniqlab beradi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'ホテルの部屋でフロントからの電話を聞いています。客はチェックアウトのとき鍵をどこに置きますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'フロント',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese:
          'お客様、明朝のチェックアウトについてご案内いたします。朝7時前はフロントが無人となりますので、ルームキーはお部屋のテーブルの上に置いたまま、ドアを閉めてご出発ください。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '客',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'わかりました。テーブルの上ですね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 28,
    level: 'N4',
    type: 'quick',
    titleUz: "Uzr so'rash va kechirim",
    audioUrl: '',
    script: '駅で人とぶつかってしまいました。何と言いますか？\nあなた：（　）',
    questionText: 'こんなとき、何と言いますか？',
    questionTextUz: 'Birov bilan turtilishib ketganda nima deyiladi?',
    options: [
      'すみません、大丈夫ですか？',
      'おめでとうございます',
      '失礼いたしました、さようなら',
      'ごちそうさまでした',
    ],
    optionsUz: ['Kechirasiz, tuzukmisiz?', 'Tabriklayman', 'Uzr, xayr', "Rahmat, to'ydim"],
    correctAnswer: 0,
    explanationUzbek:
      "Birovga tegib ketganda 'すみません、大丈夫ですか？' (Kechirasiz, hammasi yaxshimi / og'rimadingizmi?) deyish odobdandir.",
    tipUzbek: "Kundalik favqulodda vaziyatlarda kechirim so'rash iboralari.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '駅で人とぶつかってしまいました。何と言いますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: '（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 29,
    level: 'N4',
    type: 'summary',
    titleUz: 'Yangi taom xulosasi',
    audioUrl: '',
    script:
      'レストランで2人が新メニューについて話しています。2人はこの料理をどう思っていますか？\n男：この季節限定のスープ、すごく野菜の甘みが出ているね。\n女：本当！少し辛いけど、体の芯から温まる感じがして、冬にぴったりだわ。\n男：うん、また来週も食べに来たいね。',
    questionText: '2人はこの料理をどう評価していますか？',
    questionTextUz: 'Ikkala suhbatdosh taomga qanday umumiy baho bermoqda?',
    options: [
      'とても美味しくて気に入っている',
      '辛すぎて食べられない',
      '野菜が少なくて物足りない',
      '値段が高すぎると感じている',
    ],
    optionsUz: [
      'Juda mazali va ularga yoqdi',
      "Haddan tashqari achchiq, yeb bo'lmaydi",
      'Sabzavoti kam, qoniqarsiz',
      'Narxi juda qimmat deb hisoblashmoqda',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Ikkala suhbatdosh ham sho'rvaning shirinligi, isitishi va qishga mosligini olqishlab, keyingi hafta ham kelishni niyat qilishadi. Demak, taom ularga juda yoqqan.",
    tipUzbek:
      "'冬にぴったり' (qishga ayni muddao) va 'また食べに来たい' (yana kelib yegim bor) ijobiy xulosani bildiradi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'レストランで2人が新メニューについて話しています。2人はこの料理をどう思っていますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'この季節限定のスープ、すごく野菜の甘みが出ているね。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '本当！少し辛いけど、体の芯から温まる感じがして、冬にぴったりだわ。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'うん、また来週も食べに来たいね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 30,
    level: 'N4',
    type: 'task',
    titleUz: 'Chiqindilarni saralash',
    audioUrl: '',
    script:
      'アパートのゴミ捨て場で管理人と住人が話しています。ペットボトルはいつ出しますか？\n住人：すみません、このペットボトルの回収日は何曜日ですか？\n管理人：ペットボトルと缶は水曜日の朝8時までに出してください。月曜と木曜は燃えるゴミです。\n住人：わかりました。水曜日ですね。',
    questionText: 'ペットボトルは何曜日に出しますか？',
    questionTextUz: 'Yelim idishlar (pet-butulka) haftaning qaysi kuni chiqariladi?',
    options: ['月曜日', '火曜日', '水曜日', '木曜日'],
    optionsUz: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba'],
    correctAnswer: 2,
    explanationUzbek:
      'Uy boshqaruvchisi pet-butulka va tunuka bankalar chorshanba kuni ertalab 8 gacha chiqarilishi kerakligini aytadi.',
    tipUzbek: "'燃えるゴミ' (yonuvchi chiqindi) bilan 'ペットボトル' kunini farqlang.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'アパートのゴミ捨て場で管理人と住人が話しています。ペットボトルはいつ出しますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '住人',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'すみません、このペットボトルの回収日は何曜日ですか？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '管理人',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'ペットボトルと缶は水曜日の朝8時までに出してください。月曜と木曜は燃えるゴミです。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '住人',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'わかりました。水曜日ですね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 6,
    level: 'N3',
    type: 'quick',
    titleUz: 'Pochta qayerda?',
    audioUrl: '',
    script:
      '男の人が女の人に話しかけています。\n男：すみません、この近くに郵便局はありますか？\n女：あ、それなら、この道をまっすぐ行って、最初の角を右に曲がると左側にありますよ。',
    questionText: '郵便局はどこにありますか？',
    questionTextUz: 'Pochta qayerda joylashgan?',
    options: [
      '最初の角を左に曲がったところ',
      'この道をまっすぐ行って、最初の角を右に曲がった左側',
      'この道の右側',
      'コンビニの隣',
    ],
    optionsUz: [
      'Birinchi chorrahadan chapga burilganda',
      "To'g'ri borib, birinchi chorrahadan o'ngga burilgandagi chap tomon",
      "Ushbu ko'chaning o'ng tomonida",
      "Do'konning yonida",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ayol kishi pochta manzilini: ko'chadan to'g'ri borib, birinchi chorrahadan o'ngga burilganda chap tomonda joylashganligini tushuntirdi.",
    tipUzbek: "'まっすぐ' (to'g'ri), '右に曲がる' (o'ngga burilish), '左側' (chap tomon).",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '男の人が女の人に話しかけています。',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'すみません、この近くに郵便局はありますか？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'あ、それなら、この道をまっすぐ行って、最初の角を右に曲がると左側にありますよ。',
        uzbek: '',
      },
    ],
  },
  {
    id: 7,
    level: 'N3',
    type: 'task',
    titleUz: 'Restoranda vazifa tartibi',
    audioUrl: '',
    script:
      'レストランで店長とアルバイトの人が話しています。アルバイトの人はこれから何をしますか？\n店長：鈴木さん、テーブルの片付け終わった？\n鈴木：はい、終わりました。次はお皿を洗いましょうか？\n店長：お皿は後でいいから、先に予約のお客様の席を奥の個室に準備しておいてくれる？もうすぐいらっしゃる時間だから。\n鈴木：かしこまりました。すぐ準備します。',
    questionText: '鈴木さんはこれから何をしますか？',
    questionTextUz: 'Suzuki-san darhol nima ish qilishi kerak?',
    options: ['お皿を洗う', '予約の席を準備する', '新しい料理を作る', '店の看板を出す'],
    optionsUz: [
      'Idishlarni yuvish',
      'Bron qilingan joyni tayyorlash',
      'Yangi taom pishirish',
      "Do'kon peshlavhasini ilish",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Boshliq idishlarni yuvishni keyinga qoldirib, eng avvalo bron qilib qo'yilgan mijozlarning xonasidagi joyni tayyorlashni buyuradi.",
    tipUzbek: "'お皿は後でいい' (idishlar keyinroq bo'laveradi), '先に...' (avval...).",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'レストランで店長とアルバイトの人が話しています。アルバイトの人はこれから何をしますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '店長',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese: '鈴木さん、テーブルの片付け終わった？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '鈴木',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'はい、終わりました。次はお皿を洗いましょうか？',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '店長',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese:
          'お皿は後でいいから、先に予約のお客様の席を奥の個室に準備しておいてくれる？もうすぐいらっしゃる時間だから。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '鈴木',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'かしこまりました。すぐ準備します。',
        uzbek: '',
      },
    ],
  },
  {
    id: 16,
    level: 'N3',
    type: 'point',
    titleUz: "Grant talablari o'zgarishi",
    audioUrl: '',
    script:
      '留学生センターで職員が説明しています。奨学金の申請条件で変更されたのは何ですか？\n職員：今年度から申請条件が一部変更されました。成績基準のGPA3.0以上という点は去年と同じですが、アルバイトの週当たり就業時間の上限が、これまでの28時間から20時間以内に制限されることになりました。',
    questionText: '奨学金の申請条件で新しく変更された点は何ですか？',
    questionTextUz: "Grant talabida yangi o'zgargan band qaysi?",
    options: [
      '成績基準がGPA3.5に上がったこと',
      'アルバイトの週就業時間の上限が20時間以内になったこと',
      '申請の締切日が1ヶ月早まったこと',
      '面接試験が廃止されたこと',
    ],
    optionsUz: [
      "Baholar talabi GPA 3.5 ga ko'tarilgani",
      'Haftalik ish vaqti 20 soatgacha cheklangani',
      'Hujjat topshirish muddati 1 oy oldinga surilgani',
      'Suhbat imtihoni bekor qilingani',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Xodim baholar o'zgarmagani, ammo yarim kunlik ish vaqti cheklovi haftasiga 28 soatdan 20 soatga tushirilganini ta'kidlaydi.",
    tipUzbek: "'去年と同じですが' (o'tgan yilgidek, ammo...) burilish nuqtasiga e'tibor bering.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '留学生センターで職員が説明しています。奨学金の申請条件で変更されたのは何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '職員',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '今年度から申請条件が一部変更されました。成績基準のGPA3.0以上という点は去年と同じですが、アルバイトの週当たり就業時間の上限が、これまでの28時間から20時間以内に制限されることになりました。',
        uzbek: '',
      },
    ],
  },
  {
    id: 17,
    level: 'N3',
    type: 'task',
    titleUz: 'Bazm menyusi tanlovi',
    audioUrl: '',
    script:
      'オフィスで同僚2人が話しています。男性はこれから何を注文しますか？\n女：来週の歓迎会、お店の予約は済んだ？\n男：席は確保したんだけど、飲み放題のコースにするか料理だけのコースにするか迷っていて。\n女：みんなお酒好きだから、飲み放題付きのコースのほうが安心だよ。\n男：そうだね、じゃあそっちに変更しておくよ。',
    questionText: '男性はどのコースに変更して注文しますか？',
    questionTextUz: "Yigit qaysi to'plamga o'zgartirib buyurtma beradi?",
    options: [
      '料理のみのコース',
      '飲み放題付きのコース',
      'ランチタイムの軽食コース',
      'テイクアウトのオードブル',
    ],
    optionsUz: [
      'Faqat taomlardan iborat kurs',
      'Cheksiz ichimlikli kurs (nomihoudai)',
      'Tushlik yengil tamaddi kursi',
      "Olib ketiladigan gazaklar to'plami",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Hamkasb qiz barchaga cheksiz ichimlikli (飲み放題付き) to'plam ma'qul ekanini aytadi va erkak unga o'zgartirishini tasdiqlaydi.",
    tipUzbek: "'じゃあそっちに変更しておくよ' iborasi oxirgi tanlangan variantni bildiradi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'オフィスで同僚2人が話しています。男性はこれから何を注文しますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '来週の歓迎会、お店の予約は済んだ？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese:
          '席は確保したんだけど、飲み放題のコースにするか料理だけのコースにするか迷っていて。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '女',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: 'みんなお酒好きだから、飲み放題付きのコースのほうが安心だよ。',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '男',
        speakerRoleUz: 'Erkak',
        gender: 'male',
        japanese: 'そうだね、じゃあそっちに変更しておくよ。',
        uzbek: '',
      },
    ],
  },
  {
    id: 31,
    level: 'N3',
    type: 'summary',
    titleUz: "Masofaviy ishning ta'siri",
    audioUrl: '',
    script:
      'テレビでアナウンサーが在宅勤務の調査結果について話しています。調査で明らかになった最も大きなメリットは何ですか？\nアナウンサー：全国の社会人3000人を対象にした意識調査によりますと、テレワークの導入により、通勤による身体的・精神的ストレスが激減したと答えた人が全体の約7割に達し、業務効率化や家族との時間の増加を抑えて最大の利点として挙げられました。',
    questionText: '調査で明らかになった最大のメリットは何ですか？',
    questionTextUz: "So'rovnomada qayd etilgan eng katta ijobiy jihat nima?",
    options: [
      '通勤ストレスが大幅に減ったこと',
      '残業代が増加したこと',
      '光熱費の負担が軽くなったこと',
      '会社のオフィス面積が半減したこと',
    ],
    optionsUz: [
      "Yo'l yurishdagi stressning keskin kamaygani",
      "Qo'shimcha ish haqi oshgani",
      "Kommunal to'lovlar yengillashgani",
      'Ofis maydoni qisqargani',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "So'rovnoma qatnashchilarining 70 foizi通勤ストレス (qatnovdagi jismoniy va ruhiy stress) keskin kamayganini eng katta ijobiy omil deb e'tirof etgan.",
    tipUzbek:
      "'最大の利点として挙げられました' (eng katta afzallik sifatida keltirildi) jumlasiga diqqat qiling.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'テレビでアナウンサーが在宅勤務の調査結果について話しています。調査で明らかになった最も大きなメリットは何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'アナウンサー',
        speakerRoleUz: "E'lon / Diktor",
        gender: 'neutral',
        japanese:
          '全国の社会人3000人を対象にした意識調査によりますと、テレワークの導入により、通勤による身体的・精神的ストレスが激減したと答えた人が全体の約7割に達し、業務効率化や家族との時間の増加を抑えて最大の利点として挙げられました。',
        uzbek: '',
      },
    ],
  },
  {
    id: 32,
    level: 'N3',
    type: 'point',
    titleUz: "Ko'chmas mulk ijarasi",
    audioUrl: '',
    script:
      '不動産屋で女性客と店員が話しています。女性がこの部屋を気に入った一番の理由は何ですか？\n店員：こちらのお部屋は、駅からは徒歩15分と少し離れていますが、南向きで日当たりが良く、何より周囲が閑静な住宅街で夜も大変静かです。\n客：駅近の物件も見ましたが、夜勤もあって昼間にぐっすり眠りたいので、この静かさが何より決め手になりますね。ここにします。',
    questionText: '女性がこの部屋に決めた一番の理由は何ですか？',
    questionTextUz: "Ayol bu uyni tanlashiga asosiy sabab nima bo'ldi?",
    options: [
      '駅から近くて便利なこと',
      '周囲が静かで昼間もぐっすり眠れること',
      '家賃が相場より大幅に安いこと',
      '最新の家電製品が備え付けられていること',
    ],
    optionsUz: [
      'Vokzalga yaqin va qulayligi',
      'Atrof tinchligi va kunduzi yaxshi uxlash mumkinligi',
      'Ijara narxi bozordan arzonligi',
      "Yangi maishiy texnikalar o'rnatilgani",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ayol tunda ishlagani sababli kunduz kuni tinch uxlash unga muhim bo'lgan va atrofning tinchligi (静かさ) asosiy hal qiluvchi omil (決め手) bo'lgan.",
    tipUzbek: "'決め手になります' (hal qiluvchi omil bo'ladi) so'zi to'g'ri javobni ko'rsatadi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '不動産屋で女性客と店員が話しています。女性がこの部屋を気に入った一番の理由は何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '店員',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese:
          'こちらのお部屋は、駅からは徒歩15分と少し離れていますが、南向きで日当たりが良く、何より周囲が閑静な住宅街で夜も大変静かです。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '客',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '駅近の物件も見ましたが、夜勤もあって昼間にぐっすり眠りたいので、この静かさが何より決め手になりますね。ここにします。',
        uzbek: '',
      },
    ],
  },
  {
    id: 33,
    level: 'N3',
    type: 'quick',
    titleUz: 'Maslahatga minnatdorchilik',
    audioUrl: '',
    script: '先輩に仕事の相談に乗ってもらいました。別れ際に何と言いますか？\nあなた：（　）',
    questionText: 'こんなとき、何と言いますか？',
    questionTextUz:
      'Kattaroq hamkasb (senpai) maslahat berib yordam qilganda xayrlashuvda nima deyiladi?',
    options: [
      'お忙しいところ、お時間をいただきありがとうございました',
      'どういたしまして、またいつでもどうぞ',
      '失礼ですが、お名前を教えてください',
      'お邪魔しました、ごちそうさまでした',
    ],
    optionsUz: [
      'Band vaqtingizda menga vaqt ajratganingiz uchun katta rahmat',
      "Arzimaydi, yana bemalol so'rang",
      'Uzr, ismingizni aytib yuboring',
      'Bezovta qildim, mehmondorchilik uchun rahmat',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Kattaroq inson sizga vaqt ajratib maslahat berganda 'お忙しいところ、お時間をいただきありがとうございました' minnatdorchiligi bildiriladi.",
    tipUzbek: 'Senpai va Kouhai orasidagi hurmat shakllari (teinei/keigo).',
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '先輩に仕事の相談に乗ってもらいました。別れ際に何と言いますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: '（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 34,
    level: 'N3',
    type: 'task',
    titleUz: "Ekskursiya yig'ilishi",
    audioUrl: '',
    script:
      'ツアーガイドが観光バスの中で案内しています。乗客はバスを降りた後、まず何をしますか？\nガイド：皆様、まもなく目的地の美術館に到着します。到着しましたら、まず入口前の広場で記念撮影を行います。その後、入場チケットをお配りして館内自由見学となります。集合時間は15時です。\n乗客：写真撮影が先なんだね。',
    questionText: '乗客はバスを降りた後、まず何をしますか？',
    questionTextUz: 'Sayyohlar avtobusdan tushgach, birinchi navbatda nima qilishadi?',
    options: [
      '広場で記念撮影をする',
      'チケットを受け取って入場する',
      'お土産店で買い物をする',
      '15時まで自由に食事をする',
    ],
    optionsUz: [
      'Maydonda esdalik suratga tushish',
      'Chipta olib ichkariga kirish',
      "Sovg'alar do'konida xarid qilish",
      'Soat 15 gacha erkin ovqatlanish',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Gid avval maydonda esdalik uchun rasmga tushilishini, shundan so'ng chiptalar tarqatilishini uqtirdi.",
    tipUzbek: "'まず記念撮影を行います' jumlasi ketma-ketlikning boshini belgilaydi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'ツアーガイドが観光バスの中で案内しています。乗客はバスを降りた後、まず何をしますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'ガイド',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '皆様、まもなく目的地の美術館に到着します。到着しましたら、まず入口前の広場で記念撮影を行います。その後、入場チケットをお配りして館内自由見学となります。集合時間は15時です。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '乗客',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '写真撮影が先なんだね。',
        uzbek: '',
      },
    ],
  },
  {
    id: 35,
    level: 'N3',
    type: 'summary',
    titleUz: 'Muzey qoidalari',
    audioUrl: '',
    script:
      '美術館の館内放送を聞いています。来館者に呼びかけている主な注意事項は何ですか？\nアナウンス：本日は特別展にご来館いただきありがとうございます。特別展示室内の作品はフラッシュ撮影および動画の撮影が固く禁じられております。また、他のお客様のご迷惑となりますので、携帯電話での通話はお控えください。',
    questionText: '館内放送の主な注意事項は何ですか？',
    questionTextUz: "Muzey e'lonida ziyoratchilarga qaratilgan asosiy ogohlantirish nima?",
    options: [
      '撮影制限と携帯通話の禁止',
      '入場料の追加徴収について',
      '閉館時間が早まったこと',
      '雨傘の持ち込み禁止',
    ],
    optionsUz: [
      "Suratga tushirish taqiqlari va telefon so'zlashuvi cheklovi",
      "Qo'shimcha kirish to'lovi haqida",
      "Yopilish vaqti erta bo'lishi haqida",
      'Soyabon olib kirish taqiqlangani',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "E'londa fleshka orqali surat/video olish qat'iyan man etilgani va telefon orqali gaplashmaslik so'ralgan.",
    tipUzbek: "'固く禁じられております' (qat'iyan man etiladi) e'londagi asosiy taqiq.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '美術館の館内放送を聞いています。来館者に呼びかけている主な注意事項は何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'アナウンス',
        speakerRoleUz: "E'lon / Diktor",
        gender: 'neutral',
        japanese:
          '本日は特別展にご来館いただきありがとうございます。特別展示室内の作品はフラッシュ撮影および動画の撮影が固く禁じられております。また、他のお客様のご迷惑となりますので、携帯電話での通話はお控えください。',
        uzbek: '',
      },
    ],
  },
  {
    id: 36,
    level: 'N3',
    type: 'task',
    titleUz: "Dori ichish yo'riqnomasi",
    audioUrl: '',
    script:
      '薬局で薬剤師と患者が話しています。患者は食後すぐにどの薬を飲みますか？\n薬剤師：こちらの白い錠剤は毎食後30分以内に1錠お飲みください。そして、こちらの粉薬は胃を保護するものですので、食事の直後すぐにお飲みください。\n患者：食後すぐは粉薬ですね。わかりました。',
    questionText: '患者は食後すぐにどの薬を飲みますか？',
    questionTextUz: "Bemor ovqatdan darhol so'ng qaysi dorini ichadi?",
    options: ['胃を保護する粉薬', '白い錠剤', '両方の薬を同時に', '水で薄めたシロップ'],
    optionsUz: [
      'Oshqozonni himoyalovchi kukun dori',
      'Oq tabletka',
      'Ikkala dorini bir vaqtda',
      'Suv bilan aralashtirilgan sirop',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Farmatsevt kukun dori oshqozonni himoyalashi uchun '食事の直後すぐ' (ovqatdan darhol keyin) ichilishini, oq tabletka esa 30 daqiqa ichida ichilishini tushuntirdi.",
    tipUzbek: "'食後すぐ' (darhol keyin) vs '食後30分以内' (30 daqiqa ichida).",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '薬局で薬剤師と患者が話しています。患者は食後すぐにどの薬を飲みますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '薬剤師',
        speakerRoleUz: 'Xodim / Sotuvchi',
        gender: 'neutral',
        japanese:
          'こちらの白い錠剤は毎食後30分以内に1錠お飲みください。そして、こちらの粉薬は胃を保護するものですので、食事の直後すぐにお飲みください。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '患者',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '食後すぐは粉薬ですね。わかりました。',
        uzbek: '',
      },
    ],
  },
  {
    id: 8,
    level: 'N2',
    type: 'task',
    titleUz: 'Taqdimot tayyorgarligi',
    audioUrl: '',
    script:
      '会社で課長と女性社員が話しています。女性社員はこれからまず何をしますか？\n課長：佐藤さん、明日の新商品発表会の資料の準備はどうなっていますか？\n佐藤：はい、スライドの印刷はすべて完了しました。会場のプロジェクターの確認も済んでいます。\n課長：そうか。じゃあ、参加者の名簿の最新版を印刷して、受付に届けておいてくれるかい？\n佐藤：承知いたしました。すぐに名簿を確認して印刷します。',
    questionText: '女性社員はこれからまず何をしますか？',
    questionTextUz: 'Xodim ayol bundan keyin dastlab nimani bajaradi?',
    options: [
      'スライドを印刷する',
      'プロジェクターを確認する',
      '参加者名簿の最新版を印刷して届ける',
      '新商品のサンプルを用意する',
    ],
    optionsUz: [
      'Slaydlarni chop etish',
      'Proyektorni tekshirish',
      "Qatnashuvchilar yangi ro'yxatini chop etib topshirish",
      'Yangi mahsulot namunalarini tayyorlash',
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Slaydlar va proyektor tayyor bo'lgani sababli, bo'lim boshlig'i qatnashuvchilar ro'yxatining so'nggi nusxasini chop etib qabulxonaga olib borishni so'radi va ayol buni darhol bajarishini bildirdi.",
    tipUzbek: "'最新版を印刷して、受付に届けて' buyrug'i birinchi bajariladi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '会社で課長と女性社員が話しています。女性社員はこれからまず何をしますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '課長',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '佐藤さん、明日の新商品発表会の資料の準備はどうなっていますか？',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '佐藤',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese:
          'はい、スライドの印刷はすべて完了しました。会場のプロジェクターの確認も済んでいます。',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '課長',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'そうか。じゃあ、参加者の名簿の最新版を印刷して、受付に届けておいてくれるかい？',
        uzbek: '',
      },
      {
        id: 'line_5',
        speaker: '佐藤',
        speakerRoleUz: 'Ayol',
        gender: 'female',
        japanese: '承知いたしました。すぐに名簿を確認して印刷します。',
        uzbek: '',
      },
    ],
  },
  {
    id: 9,
    level: 'N2',
    type: 'point',
    titleUz: 'Suhbatda eng muhim qobiliyat',
    audioUrl: '',
    script:
      '大学の就職支援セミナーで講師が話しています。講師は面接で最も重視されるのは何だと言っていますか？\n講師：面接では、資格の多さや話の流暢さももちろんプラスになりますが、それ以上に採用担当者が注目しているのは「相手の質問の意図を正確に捉えて端的に答える力」です。どんなに素晴らしい経歴があっても、質問とずれた回答をしていては信頼を得られません。',
    questionText: '講師は面接で最も重視されるのは何だと言っていますか？',
    questionTextUz: "Ma'ruzachining fikricha ishga kirish suhbatida eng muhim ko'nikma nima?",
    options: [
      '取得している資格の数',
      '途切れずに長く話す流暢さ',
      '質問の意図を理解して的確に答える力',
      '有名大学での成績',
    ],
    optionsUz: [
      'Egalik qilayotgan sertifikatlar soni',
      "To'xtovsiz uzoq gapirish qobiliyati",
      'Savolning tub mohiyatini tushunib, ixcham va aniq javob berish',
      "Nufuzli universitetdagi a'lo baholar",
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Ma'ruzachi suhbatda eng ko'p e'tibor qaratiladigan jihat suhbatdoshning savol niyatini to'g'ri tushunib, ixcham va aniq javob berish qobiliyati ekanini aytadi.",
    tipUzbek: "'それ以上に...注目しているのは' iborasidan keyingi jumlaga e'tibor qaratiladi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '大学の就職支援セミナーで講師が話しています。講師は面接で最も重視されるのは何だと言っていますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '講師',
        speakerRoleUz: "O'qituvchi",
        gender: 'male',
        japanese:
          '面接では、資格の多さや話の流暢さももちろんプラスになりますが、それ以上に採用担当者が注目しているのは「相手の質問の意図を正確に捉えて端的に答える力」です。どんなに素晴らしい経歴があっても、質問とずれた回答をしていては信頼を得られません。',
        uzbek: '',
      },
    ],
  },
  {
    id: 18,
    level: 'N2',
    type: 'point',
    titleUz: "Mijozlarga tezkor e'tibor",
    audioUrl: '',
    script:
      'ビジネスセミナーで経営者が話しています。新規事業を成功させる上で最も重視した要素は何ですか？\n経営者：資金力や最新のITシステムも有用ですが、当社が急成長できた決定的な要因は「顧客からの不満やクレームに24時間以内に直接電話で対応する徹底したアフターフォロー」でした。顧客の信頼が最大の差別化になります。',
    questionText: '経営者が成功の決定的要因として挙げているのは何ですか？',
    questionTextUz:
      "Tadbirkor o'z biznesi muvaffaqiyatining asosiy omili sifatida nimani ta'kidlamoqda?",
    options: [
      '莫大な広告宣伝費の投入',
      '競合他社より圧倒的に安い価格設定',
      '顧客の不満に即座に対応する徹底したアフターフォロー',
      'AIによる完全無人のカスタマー対応',
    ],
    optionsUz: [
      'Milliardlab reklama sarflash',
      "Raqobatchilardan ancha arzon narx qo'yish",
      "Mijoz e'tiroziga 24 soat ichida darhol javob berish",
      "AI orqali insonlarsiz xizmat ko'rsatish",
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Tadbirkor eng asosiy muvaffaqiyat omili mijozlarning e'tirozlariga 24 soat ichida darhol bevosita javob berish (徹底したアフターフォロー) bo'lganini aytadi.",
    tipUzbek: "'決定的な要因は' (hal qiluvchi omil esa) kalit ifodadir.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'ビジネスセミナーで経営者が話しています。新規事業を成功させる上で最も重視した要素は何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '経営者',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '資金力や最新のITシステムも有用ですが、当社が急成長できた決定的な要因は「顧客からの不満やクレームに24時間以内に直接電話で対応する徹底したアフターフォロー」でした。顧客の信頼が最大の差別化になります。',
        uzbek: '',
      },
    ],
  },
  {
    id: 19,
    level: 'N2',
    type: 'quick',
    titleUz: "Biznes qo'ng'iroq odobi",
    audioUrl: '',
    script:
      '取引先の担当者と電話で話しています。相手が「あいにく部長の田中は席を外しております」と言いました。あなたは何と言いますか？\n相手：あいにく部長の田中は席を外しております。\nあなた：（　）',
    questionText: '適切な返答はどれですか？',
    questionTextUz: "Hamkor kompaniyaga qo'ng'iroq qilganda qanday javob qaytariladi?",
    options: [
      'では、後ほど改めてお電話差し上げます',
      'いえ、とんでもございません',
      'どうもごちそうさまでした',
      'お邪魔いたします',
    ],
    optionsUz: [
      "Unday bo'lsa birozdan so'ng yana qayta qo'ng'iroq qilaman",
      "Yo'g'e, arzimaydi",
      'Ziyofat uchun rahmat',
      'Kechirasiz, kirishga ruxsat bering',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Boshliq joyida yo'qligi aytilganda rasmiy biznes yapon tilida '後ほど改めてお電話差し上げます' (birozdan so'ng qayta aloqaga chiqaman) deb javob beriladi.",
    tipUzbek:
      "Biznes yapon tilida '席を外しております'ga standart javob '後ほど改めてお電話差し上げます'.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '取引先の担当者と電話で話しています。相手が「あいにく部長の田中は席を外しております」と言いました。あなたは何と言いますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '相手',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'あいにく部長の田中は席を外しております。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: '（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 37,
    level: 'N2',
    type: 'summary',
    titleUz: 'Mahalliy iqtisodiyotni jonlantirish',
    audioUrl: '',
    script:
      '市役所の地域創生課で職員が報告しています。地方活性化プロジェクトで最も高い成果を上げた施策は何ですか？\n職員：過去3年間の施策を検証した結果、大型商業施設の誘致よりも、地元の伝統工芸品や農産物を首都圏のレストランと直接提携してブランディング化した取り組みが、安定した雇用創出と地域所得の向上に最も貢献したことが判明しました。',
    questionText: '最も成果を上げた施策は何ですか？',
    questionTextUz: "Eng yuqori natija bergan chora qaysi bo'ldi?",
    options: [
      '地場産品と大都市レストランとの直接提携によるブランド化',
      '郊外への大型ショッピングモールの誘致',
      '若年層への一律現金給付金支給',
      '外国人観光客向けの免税店設置',
    ],
    optionsUz: [
      "Mahalliy mahsulotlarni poytaxt restoranlari bilan to'g'ridan-to'g'ri bog'lash",
      'Shahar chetiga yirik savdo majmualarini qurish',
      'Yoshlarga naqd pul tarqatish',
      "Chet ellik sayyohlar uchun bojxonasiz do'konlar ochish",
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Tekshiruv xulosasiga ko'ra, yirik savdo markazlari qurishdan ko'ra mahalliy hunarmandchilik va qishloq xo'jaligi mahsulotlarini poytaxt restoranlari bilan bog'lab brend qilish eng katta daromad keltirgan.",
    tipUzbek: "'最も貢献したことが判明しました' jumlasi xulosani ko'rsatadi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '市役所の地域創生課で職員が報告しています。地方活性化プロジェクトで最も高い成果を上げた施策は何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '職員',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '過去3年間の施策を検証した結果、大型商業施設の誘致よりも、地元の伝統工芸品や農産物を首都圏のレストランと直接提携してブランディング化した取り組みが、安定した雇用創出と地域所得の向上に最も貢献したことが判明しました。',
        uzbek: '',
      },
    ],
  },
  {
    id: 38,
    level: 'N2',
    type: 'task',
    titleUz: 'Shartnoma tuzatishi',
    audioUrl: '',
    script:
      '法務部の担当者と営業担当者が話しています。営業担当者はこれから契約書のどこを修正しますか？\n法務：この業務委託契約書ですが、第5条の損害賠償の上限額の記述が曖昧です。受託側の一方的な過失による場合でも発注額全額とするのはリスクが高すぎます。\n営業：では、月額報酬の3ヶ月分を限度額とする文言に修正すればよろしいでしょうか？\n法務：ええ、その条件なら問題ありません。直ちに修正して先方に送付してください。',
    questionText: '営業担当者は契約書のどこをどのように修正しますか？',
    questionTextUz: 'Savdo xodimi shartnomaning qayeriga tuzatish kiritadi?',
    options: [
      '第5条の損害賠償額の上限を月額報酬3ヶ月分に限定する',
      '契約期間を3ヶ月短縮する',
      '第1条の業務内容を全て削除する',
      '支払い期日を月末から翌月10日に変更する',
    ],
    optionsUz: [
      '5-moddadagi zararni qoplash chegarasini 3 oylik maosh miqdoriga cheklash',
      'Shartnoma muddatini 3 oyga qisqartirish',
      "1-moddadagi barcha bandlarni o'chirib tashlash",
      "To'lov muddatini keyingi oyning 10-sanasiga ko'chirish",
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Yurist 5-moddadagi zararni qoplash yuqori riskdaligini aytgach, savdo xodimi 3 oylik maosh chegarasini qo'yishni taklif qiladi va yurist buni ma'qullaydi.",
    tipUzbek: "'第5条の損害賠償の上限' va '月額報酬の3ヶ月分' iboralariga e'tibor qarating.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '法務部の担当者と営業担当者が話しています。営業担当者はこれから契約書のどこを修正しますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '法務',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'この業務委託契約書ですが、第5条の損害賠償の上限額の記述が曖昧です。受託側の一方的な過失による場合でも発注額全額とするのはリスクが高すぎます。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '営業',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'では、月額報酬の3ヶ月分を限度額とする文言に修正すればよろしいでしょうか？',
        uzbek: '',
      },
      {
        id: 'line_4',
        speaker: '法務',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'ええ、その条件なら問題ありません。直ちに修正して先方に送付してください。',
        uzbek: '',
      },
    ],
  },
  {
    id: 39,
    level: 'N2',
    type: 'quick',
    titleUz: 'Rasmiy taklifga rozilik bildirish',
    audioUrl: '',
    script:
      '取引先の社長から「もしよろしければ、弊社の新工場をご案内いたしましょうか」と提案されました。何と答えますか？\n社長：もしよろしければ、弊社の新工場をご案内いたしましょうか。\nあなた：（　）',
    questionText: '適切な返答はどれですか？',
    questionTextUz: 'Prezidentning samimiy taklifiga qanday minnatdor javob qaytariladi?',
    options: [
      'ぜひよろしくお願い申し上げます。お言葉に甘えさせていただきます',
      'いえ、結構ですのでお構いなく',
      'どういたしまして、いつでもどうぞ',
      'ご案内してあげても構いませんよ',
    ],
    optionsUz: [
      'Jon deb qabul qilamiz, marhamatingizdan mamnunmiz',
      "Yo'q, menga kerak emas, bezovta bo'lmang",
      'Arzimaydi, bemalol',
      "Sizni kuzatib qo'ysam ham mayli",
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Yapon madaniyatida samimiy mehmondo'stlik taklifiga 'ぜひよろしくお願い申し上げます。お言葉に甘えさせていただきます' (Marhamatingizdan mamnunmiz) deb xushmuomala javob beriladi.",
    tipUzbek: "'お言葉に甘える' iborasi kattalarning iltifotini qabul qilishda qo'llanadi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '取引先の社長から「もしよろしければ、弊社の新工場をご案内いたしましょうか」と提案されました。何と答えますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '社長',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'もしよろしければ、弊社の新工場をご案内いたしましょうか。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: '（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 40,
    level: 'N2',
    type: 'point',
    titleUz: 'Ekologik qadoqlash loyihasi',
    audioUrl: '',
    script:
      '商品開発会議でデザイナーが話しています。新パッケージでプラスチックを全廃する代わりに採用された工夫は何ですか？\nデザイナー：脱プラスチックに向けて様々な素材を比較検討しました。紙製容器は環境負荷は低いものの湿気に弱い欠点がありましたが、サトウキビの搾りかすを再利用した耐水性植物性コーティングを施すことで、鮮度保持と環境性能の両立を実現しました。',
    questionText: '新パッケージに採用された画期的な工夫は何ですか？',
    questionTextUz: "Yangi qadoqda qo'llanilgan innovatsion yechim nima?",
    options: [
      'サトウキビ廃棄物を原料にした植物性耐水コーティングの採用',
      'アルミ箔を二重に重ねる密閉構造',
      'ガラス容器への全面的な切り替え',
      '防腐剤を増量して賞味期限を延ばすこと',
    ],
    optionsUz: [
      "Shakarqamish chiqindisidan olingan o'simlik suv o'tkazmas qoplama",
      'Alyuminiy qatlamini ikki barobar qalinlashtirish',
      "To'liq shisha idishlarga o'tish",
      "Konservantlarni ko'paytirib saqlash muddatini uzaytirish",
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Dizayner qog'ozning namga chidamsizligini hal qilish uchun shakarqamish chiqindisidan olingan o'simlik qoplamasi qo'llanilganini ta'kidlaydi.",
    tipUzbek: "'サトウキビの搾りかすを再利用した耐水性植物性コーティング' asosiy javobdir.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '商品開発会議でデザイナーが話しています。新パッケージでプラスチックを全廃する代わりに採用された工夫は何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'デザイナー',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '脱プラスチックに向けて様々な素材を比較検討しました。紙製容器は環境負荷は低いものの湿気に弱い欠点がありましたが、サトウキビの搾りかすを再利用した耐水性植物性コーティングを施すことで、鮮度保持と環境性能の両立を実現しました。',
        uzbek: '',
      },
    ],
  },
  {
    id: 41,
    level: 'N2',
    type: 'task',
    titleUz: 'Taqdimot slaydlarini yangilash',
    audioUrl: '',
    script:
      '研究室で教授が生徒に指示を出しています。生徒は発表スライドをどう変更しますか？\n教授：実験結果のデータは非常に説得力があるね。ただ、グラフの軸の文字が小さすぎて、後方の聴衆には読み取れないよ。フォントサイズを最低でも24ポイントに拡大して、凡例の色分けもコントラストを強めておきなさい。\n生徒：承知しました。フォントを大きくして配色を調整します。',
    questionText: '生徒は発表スライドをどう修正しますか？',
    questionTextUz: 'Talaba taqdimot slaydlarini qanday tuzatadi?',
    options: [
      'グラフのフォントサイズを拡大し色のコントラストを強める',
      'スライドの枚数を半分に減らす',
      '実験データ全体を削除して写真に置き換える',
      '英語のアブストラクトを追加する',
    ],
    optionsUz: [
      'Grafik shriftini kattalashtirish va ranglar kontrastini oshirish',
      'Slaydlar sonini yarmiga qisqartirish',
      "Eksperiment ma'lumotlarini o'chirib fotosurat qo'yish",
      "Inglizcha annotatsiya qo'shish",
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Professor grafikdagi harflar orqadagi tomoshabinga ko'rinmasligini aytib, shriftni 24pt ga kattalashtirishni va ranglar kontrastini kuchaytirishni buyurdi.",
    tipUzbek: "'フォントサイズを拡大して、凡例の色分けもコントラストを強めて' buyrug'i.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '研究室で教授が生徒に指示を出しています。生徒は発表スライドをどう変更しますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '教授',
        speakerRoleUz: "O'qituvchi",
        gender: 'male',
        japanese:
          '実験結果のデータは非常に説得力があるね。ただ、グラフの軸の文字が小さすぎて、後方の聴衆には読み取れないよ。フォントサイズを最低でも24ポイントに拡大して、凡例の色分けもコントラストを強めておきなさい。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: '生徒',
        speakerRoleUz: 'Talaba',
        gender: 'neutral',
        japanese: '承知しました。フォントを大きくして配色を調整します。',
        uzbek: '',
      },
    ],
  },
  {
    id: 10,
    level: 'N1',
    type: 'point',
    titleUz: "Iste'mol pasayishi sababi",
    audioUrl: '',
    script:
      'ラジオで経済評論家が話しています。評論家は今年度の個人消費が伸び悩んでいる最大の原因は何だと言っていますか？\n評論家：今年度の景気動向を見ますと、雇用の改善は見られるものの、実質賃金の伸びが物価の上昇に追いついていないことが、消費者の節約志向に拍車をかけています。将来の社会保障に対する不安も背景にありますが、やはり直接的には購買力の低下が最大の要因と分析されます。',
    questionText: '今年度の個人消費が伸び悩んでいる最大の原因は何ですか？',
    questionTextUz: "Ekspertning fikricha shaxsiy iste'mol o'smasligining eng katta sababi nima?",
    options: [
      '失業率が上昇したこと',
      '実質賃金の伸びが物価高に追いつかず購買力が低下したこと',
      '新製品の流通が滞っていること',
      '若者の人口が急減したこと',
    ],
    optionsUz: [
      'Ishsizlik darajasi oshgani',
      'Real oylik inflyatsiyaga yetolmay xarid qobiliyati tushgani',
      "Yangi mahsulotlar yetkazilishi to'xtab qolgani",
      'Yoshlar aholisi keskin kamaygani',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ekspertning ta'kidlashicha, bandlik yaxshilangan bo'lsa-da, real ish haqining narxlar o'sishidan orqada qolishi va xarid qobiliyatining pasayishi iste'mol o'smasligining bevosita asosiy sababidir.",
    tipUzbek: "'実質賃金の伸びが物価の上昇に追いついていない' jumlasini tushunish.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'ラジオで経済評論家が話しています。評論家は今年度の個人消費が伸び悩んでいる最大の原因は何だと言っていますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '評論家',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '今年度の景気動向を見ますと、雇用の改善は見られるものの、実質賃金の伸びが物価の上昇に追いついていないことが、消費者の節約志向に拍車をかけています。将来の社会保障に対する不安も背景にありますが、やはり直接的には購買力の低下が最大の要因と分析されます。',
        uzbek: '',
      },
    ],
  },
  {
    id: 11,
    level: 'N1',
    type: 'task',
    titleUz: 'Xalqaro anjuman ochilishidan oldin',
    audioUrl: '',
    script:
      'シンポジウムの運営会議でリーダーが話しています。メンバーは開会までに何を完了させなければなりませんか？\nリーダー：皆さん、準備ご苦労様です。来場者向けのパンフレット配布と誘導動線の確保は整いました。ただ、登壇される海外招聘教授の同時通訳レシーバーの動作確認が一部未完了のままです。開会まであと30分しかありませんので、全端末の音声テストを最優先で完了させてください。\nメンバー：承知しました。直ちに全員で点検します。',
    questionText: 'メンバーは開会までに最優先で何をしなければなりませんか？',
    questionTextUz: "A'zolar anjuman ochilishigacha eng ustuvor nima ishni tugatishlari kerak?",
    options: [
      '来場者パンフレットの印刷',
      '誘導動線の再設計',
      '同時通訳レシーバーの全数動作確認',
      '海外教授の宿泊ホテルの予約',
    ],
    optionsUz: [
      'Tashrif buyuruvchilar bukletini chop etish',
      "Yo'l harakati chiziqlarini qayta chizish",
      "Sinxron tarjima qabul qilgichlarini to'liq tekshirib chiqish",
      'Xorijiy professorlarning mehmonxonasini band qilish',
    ],
    correctAnswer: 2,
    explanationUzbek:
      "Lider ochilishga 30 daqiqa qolganini va sinxron tarjima uskunalarining (同時通訳レシーバー) to'liq ovoz sinovidan o'tishini eng ustuvor vazifa deb topshirdi.",
    tipUzbek: "'全端末の音声テストを最優先で' buyrug'i.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          'シンポジウムの運営会議でリーダーが話しています。メンバーは開会までに何を完了させなければなりませんか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: 'リーダー',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '皆さん、準備ご苦労様です。来場者向けのパンフレット配布と誘導動線の確保は整いました。ただ、登壇される海外招聘教授の同時通訳レシーバーの動作確認が一部未完了のままです。開会まであと30分しかありませんので、全端末の音声テストを最優先で完了させてください。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: 'メンバー',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: '承知しました。直ちに全員で点検します。',
        uzbek: '',
      },
    ],
  },
  {
    id: 20,
    level: 'N1',
    type: 'point',
    titleUz: "Yashil energetika to'sig'i",
    audioUrl: '',
    script:
      '環境問題の専門家フォーラムで学者が話しています。再生可能エネルギーの普及を阻む本質的なボトルネックは何だと指摘されていますか？\n学者：発電コストの低下や技術革新は著しいものの、天候による発電量の変動を吸収する大規模蓄電池インフラの未整備と、既存の基幹送電網の容量不足が、これ以上の系統連系拡大における最大の障壁となっています。',
    questionText: '再生可能エネルギー普及の最大の障壁として指摘されているのは何ですか？',
    questionTextUz:
      "Olimning fikricha qayta tiklanuvchi energiya tarqalishiga eng katta to'siq nima?",
    options: [
      '国民の環境意識の著しい欠如',
      '蓄電池インフラの未整備と既存送電網の容量不足',
      '太陽光パネルの製造コストの高騰',
      '原子力発電所の新設ラッシュ',
    ],
    optionsUz: [
      'Aholining ekologik ongi pastligi',
      "Akkumulyator infratuzilmasi yo'qligi va uzatish tarmoqlari yetishmasligi",
      'Quyosh panellari narxining keskin qimmatlashgani',
      "Yangi atom stansiyalari ko'paygani",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Olim ob-havo o'zgaruvchanligini kompensatsiya qiluvchi ulkan akkumulyator tizimlari va uzatish tarmoqlarining sig'imi yetishmasligini asosiy to'siq deb atadi.",
    tipUzbek: "'大規模蓄電池インフラの未整備と、既存の基幹送電網の容量不足' kalit terminlar.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '環境問題の専門家フォーラムで学者が話しています。再生可能エネルギーの普及を阻む本質的なボトルネックは何だと指摘されていますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '学者',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '発電コストの低下や技術革新は著しいものの、天候による発電量の変動を吸収する大規模蓄電池インフラの未整備と、既存の基幹送電網の容量不足が、これ以上の系統連系拡大における最大の障壁となっています。',
        uzbek: '',
      },
    ],
  },
  {
    id: 21,
    level: 'N1',
    type: 'task',
    titleUz: 'Ilmiy maqola uchun etika hujjati',
    audioUrl: '',
    script:
      '国際共同研究プロジェクトのオンラインミーティングで研究代表者が指示を出しています。各国の研究チームは今週末までに何を提出しなければなりませんか？\n代表：論文の初稿執筆は予定通り進んでいます。しかし、査読付き学術誌への投稿に先立ち、各国の研究倫理委員会の承認証明書の英訳原本が必要です。今週末までにクラウドの共有フォルダにアップロードを完了させてください。',
    questionText: '各研究チームが今週末までに提出すべきものは何ですか？',
    questionTextUz: 'Tadqiqot jamoalari hafta oxirigacha nimani yuklashlari kerak?',
    options: [
      '論文の最終決定稿',
      '研究倫理委員会の承認証明書の英訳原本',
      '実験データの全生データファイル',
      '来年度の研究費予算要求書',
    ],
    optionsUz: [
      'Maqolaning yakuniy matni',
      "Tadqiqot etika qo'mitasi tasdiqnomasining inglizcha asl nusxasi",
      "Barcha xom tajriba ma'lumotlari fayllari",
      'Kelasi yilgi tadqiqot byudjeti arizasi',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Loyiha rahbari har bir davlat jamoasiga ilmiy etika qo'mitasining tasdiqlangan inglizcha hujjati asl nusxasini yuklashni buyurdi.",
    tipUzbek: "'研究倫理委員会の承認証明書の英訳原本' iborasi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '国際共同研究プロジェクトのオンラインミーティングで研究代表者が指示を出しています。各国の研究チームは今週末までに何を提出しなければなりませんか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '代表',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '論文の初稿執筆は予定通り進んでいます。しかし、査読付き学術誌への投稿に先立ち、各国の研究倫理委員会の承認証明書の英訳原本が必要です。今週末までにクラウドの共有フォルダにアップロードを完了させてください。',
        uzbek: '',
      },
    ],
  },
  {
    id: 42,
    level: 'N1',
    type: 'summary',
    titleUz: "Sun'iy intellekt va mualliflik huquqi",
    audioUrl: '',
    script:
      '知的財産権のシンポジウムで弁護士がAI生成物の法的扱いについて基調講演を行っています。弁護士は現行法制度の課題をどのように総括していますか？\n弁護士：生成AIによる創作物は、従来の「人間の思想や感情の創作的表現」を前提とした著作権法の枠組みでは捉えきれなくなっています。権利者保護とイノベーション促進のバランスを図る新たな包括的法制度の構築が喫緊の課題と言えます。',
    questionText: '弁護士が指摘する最大の課題は何ですか？',
    questionTextUz: "Advokatning ta'kidlagan eng dolzarb vazifasi nima?",
    options: [
      '生成AIの技術革新を即座に禁止すること',
      '現行著作権法の限界と権利保護・技術革新の両立を目指す新法制定',
      'AI企業の海外移転を促進すること',
      'すべての著作物を無償公開すること',
    ],
    optionsUz: [
      'AI texnologiyalarini darhol taqiqlash',
      'Mavjud mualliflik huquqi chegaralari va innovatsiya bilan muvozanatli yangi qonun qabul qilish',
      "AI kompaniyalarini xorijga ko'chirish",
      'Barcha intellektual mulkni bepul qilish',
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Advokat an'anaviy mualliflik huquqi inson hissiyotiga asoslangani uchun AI asarlarini qamrab ololmasligini va yangi qonunchilik tizimini yaratish kechiktirib bo'lmas vazifa ekanini umumlashtirdi.",
    tipUzbek: "'権利者保護とイノベーション促進のバランスを図る新たな包括的法制度' xulosasi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '知的財産権のシンポジウムで弁護士がAI生成物の法的扱いについて基調講演を行っています。弁護士は現行法制度の課題をどのように総括していますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '弁護士',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '生成AIによる創作物は、従来の「人間の思想や感情の創作的表現」を前提とした著作権法の枠組みでは捉えきれなくなっています。権利者保護とイノベーション促進のバランスを図る新たな包括的法制度の構築が喫緊の課題と言えます。',
        uzbek: '',
      },
    ],
  },
  {
    id: 43,
    level: 'N1',
    type: 'point',
    titleUz: 'Aholi qarishi va tibbiyot texnologiyalari',
    audioUrl: '',
    script:
      '公衆衛生政策の諮問会議で有識者が提言しています。超高齢社会における医療費抑制のために最も優先すべき方針は何ですか？\n有識者：重症化してからの高度医療の拡充も大切ですが、財政破綻を防ぐためには、AIバイタルセンシングを用いた未病段階での早期介入と生活習慣病の予防医療へのシフトが不可欠です。治療中心から予防中心への転換こそが核心です。',
    questionText: '医療費抑制のために最優先すべき方針は何ですか？',
    questionTextUz: 'Tibbiyot xarajatlarini jilovlashda eng ustuvor strategiya nima?',
    options: [
      '国民皆保険制度の廃止',
      '治療中心からAIセンサーを用いた予防医療への転換',
      '高齢者の入院期間の一律制限',
      '医薬品の輸入規制強化',
    ],
    optionsUz: [
      "Umumiy sug'urta tizimini bekor qilish",
      "Davolashdan ko'ra AI sensorlari orqali kasallikni oldini olish (profilaktika)ga o'tish",
      'Keksalar shifoxonada yotish muddatini majburiy cheklash',
      "Dori-darmon importini to'xtatish",
    ],
    correctAnswer: 1,
    explanationUzbek:
      "Ekspert kasallik og'irlashgandan so'ng davolashdan ko'ra, sun'iy intellekt orqali boshlang'ich bosqichdayoq profilaktika (予防中心への転換) qilish tibbiy byudjetni saqlashning eng asosiy yo'li ekanini ta'kidladi.",
    tipUzbek:
      "'治療中心から予防中心への転換こそが核心です' (Davolashdan profilaktikaga o'tish eng asosiy nuqtadir).",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '公衆衛生政策の諮問会議で有識者が提言しています。超高齢社会における医療費抑制のために最も優先すべき方針は何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '有識者',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '重症化してからの高度医療の拡充も大切ですが、財政破綻を防ぐためには、AIバイタルセンシングを用いた未病段階での早期介入と生活習慣病の予防医療へのシフトが不可欠です。治療中心から予防中心への転換こそが核心です。',
        uzbek: '',
      },
    ],
  },
  {
    id: 44,
    level: 'N1',
    type: 'quick',
    titleUz: 'Yuqori darajadagi rasmiy muzokara rad javobi',
    audioUrl: '',
    script:
      '役員会で他社との提携案について意見を求められました。時期尚早であると慎重な立場を伝える場合、最もふさわしい表現はどれですか？\n議長：この事業提携案について、経営企画部としての見解を聞かせてください。\nあなた：（　）',
    questionText: '適切な発言はどれですか？',
    questionTextUz:
      'Hali vaqti kelmagani (erta) haqida rasmiy va ehtiyotkor fikr qanday bildiriladi?',
    options: [
      '将来的な可能性は認めつつも、市場の動向を踏まえますと、現段階では時期尚早かと存じます',
      'そんな提携案は全く意味がありませんので却下すべきです',
      'どちらでも構いませんので皆さんにお任せいたします',
      '早く契約を結ばないと他社に取られてしまいますよ',
    ],
    optionsUz: [
      "Kelajak imkoniyatlarini e'tirof etgan holda, bozor holatini inobatga olsak hozircha erta deb hisoblayman",
      'Bu reja befoyda, rad qilish kerak',
      "Farqi yo'q, o'zlaringiz bilasizlar",
      'Tezroq imzolamasak boshqalar ilib ketadi',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "JLPT N1 darajasidagi rasmiy korporativ etikada salbiy fikr bildirilganda oldin ijobiy tomoni e'tirof etilib, so'ngra muloyim qilib '現段階では時期尚早かと存じます' deyiladi.",
    tipUzbek:
      "'時期尚早かと存じます' (hali erta deb o'ylayman) oliy darajadagi biznes keigo iborasi.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '役員会で他社との提携案について意見を求められました。時期尚早であると慎重な立場を伝える場合、最もふさわしい表現はどれですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '議長',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese: 'この事業提携案について、経営企画部としての見解を聞かせてください。',
        uzbek: '',
      },
      {
        id: 'line_3',
        speaker: 'あなた',
        speakerRoleUz: 'Siz',
        gender: 'neutral',
        japanese: '（　）',
        uzbek: '',
      },
    ],
  },
  {
    id: 45,
    level: 'N1',
    type: 'task',
    titleUz: 'Kiberxavfsizlik protokoli',
    audioUrl: '',
    script:
      '情報システム部の緊急対策会議でセキュリティ責任者が指示を出しています。社員が直ちに実施すべき初動対応は何ですか？\n責任者：社内サーバーへの不正アクセスが検知されました。基幹データベースの遮断は完了しましたが、感染拡大を防ぐため、全社のアカウントパスワードの強制リセットを行います。全社員に対し、社内ネットワークから即座に端末を切断し、指定の手順で新パスワードを再設定するよう通達してください。',
    questionText: '全社員が直ちに取るべき対応は何ですか？',
    questionTextUz: 'Barcha xodimlar darhol qanday harakatni amalga oshirishlari shart?',
    options: [
      '端末をネットワークから切断し新パスワードを再設定する',
      'パソコンの電源を完全に切って帰宅する',
      '外部の取引先に謝罪メールを一斉送信する',
      'サーバー室の物理バックアップテープを回収する',
    ],
    optionsUz: [
      "Qurilmani tarmoqdan uzib, yangi parolni qayta o'rnatish",
      "Kompyuterni o'chirib uyga ketish",
      'Mijozlarga birdaniga kechirim xatlari yozish',
      'Server xonasidan tasmali arxivlarni olib chiqish',
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Xavfsizlik rahbari zudlik bilan tarmoqdan kompyuterlarni uzishni (ネットワークから即座に端末を切断) va yangi parol o'rnatishni buyurdi.",
    tipUzbek: "'ネットワークから即座に端末を切断し、...再設定する' buyrug'i.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '情報システム部の緊急対策会議でセキュリティ責任者が指示を出しています。社員が直ちに実施すべき初動対応は何ですか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '責任者',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '社内サーバーへの不正アクセスが検知されました。基幹データベースの遮断は完了しましたが、感染拡大を防ぐため、全社のアカウントパスワードの強制リセットを行います。全社員に対し、社内ネットワークから即座に端末を切断し、指定の手順で新パスワードを再設定するよう通達してください。',
        uzbek: '',
      },
    ],
  },
  {
    id: 46,
    level: 'N1',
    type: 'summary',
    titleUz: "Ta'lim falsafasi va inson kapitali",
    audioUrl: '',
    script:
      '大学の学術シンポジウムで教育哲学者が講演しています。現代社会における高等教育の真の使命は何だと論じられていますか？\n講演者：短期的な即戦力としての職業スキルの習得が声高に叫ばれる昨今ですが、技術革新のスピードが加速する時代において真に必要なのは、既存の知識を批判的に疑い、未知の問いを自ら立てる教養と批判的思考力です。知識の消費者を育てるのではなく、問いの創造者を育てることこそが高等教育の真髄です。',
    questionText: '講演者が主張する高等教育の本質的使命は何ですか？',
    questionTextUz: "Ma'ruzachining ta'kidlashicha oliy ta'limning eng asosiy maqsadi nima?",
    options: [
      '未知の問いを自ら立てる批判的思考力を持った人材の育成',
      '即座に使えるプログラミングスキルの徹底的な訓練',
      '大学の学費を無償化して進学率を90%に引き上げること',
      '企業の要求に応じた専門資格取得者の大量輩出',
    ],
    optionsUz: [
      "Noma'lum savollarni mustaqil qo'ya oluvchi tanqidiy fikrlovchi insonlarni tarbiyalash",
      "Tezkor dasturlash ko'nikmalarini intensiv o'rgatish",
      "Talabalarni 90% ga yetkazish uchun o'qishni tekin qilish",
      "Kompaniyalar talabiga ko'ra mutaxassislar tayyorlash",
    ],
    correctAnswer: 0,
    explanationUzbek:
      "Olim oliy ta'lim faqat kasbiy ko'nikma beruvchi emas, balki mavjud bilimlarni tanqidiy tahlil qilib, o'z oldiga yangi savollar qo'ya oladigan ijodkor insonlarni (未知の問いを自ら立てる教養と批判的思考力) yetishtirishi kerakligini ta'kidladi.",
    tipUzbek: "'問いの創造者を育てることこそが高等教育の真髄です' eng asosiy xulosa.",
    dialogueLines: [
      {
        id: 'line_1',
        speaker: 'ナレーション',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '大学の学術シンポジウムで教育哲学者が講演しています。現代社会における高等教育の真の使命は何だと論じられていますか？',
        uzbek: '',
      },
      {
        id: 'line_2',
        speaker: '講演者',
        speakerRoleUz: 'Boshlovchi',
        gender: 'neutral',
        japanese:
          '短期的な即戦力としての職業スキルの習得が声高に叫ばれる昨今ですが、技術革新のスピードが加速する時代において真に必要なのは、既存の知識を批判的に疑い、未知の問いを自ら立てる教養と批判的思考力です。知識の消費者を育てるのではなく、問いの創造者を育てることこそが高等教育の真髄です。',
        uzbek: '',
      },
    ],
  },
];

/**
 * Parses raw script text into structured DialogueLine elements
 */
export function parseScriptIntoDialogueLines(script: string): DialogueLine[] {
  const lines: DialogueLine[] = [];
  const rawLines = script.split('\n');
  let idx = 1;

  for (const raw of rawLines) {
    const trimmed = raw.trim();
    if (!trimmed) continue;

    let speaker = 'ナレーション';
    let speakerRoleUz = 'Boshlovchi';
    let gender: 'male' | 'female' | 'neutral' = 'neutral';
    let text = trimmed;

    if (trimmed.includes('：')) {
      const parts = trimmed.split('：');
      speaker = parts[0].trim();
      text = parts.slice(1).join('：').trim();
    } else if (trimmed.includes(':')) {
      const parts = trimmed.split(':');
      speaker = parts[0].trim();
      text = parts.slice(1).join(':').trim();
    }

    if (['男', '男の人', '男性', '息子', '彼', '山田', '田中', '鈴木'].includes(speaker)) {
      gender = 'male';
      speakerRoleUz = 'Erkak';
    } else if (['女', '女の人', '女性', '母', '母親', '彼女', '佐藤'].includes(speaker)) {
      gender = 'female';
      speakerRoleUz = 'Ayol';
    } else if (['先生', '教授', '講師'].includes(speaker)) {
      gender = 'male';
      speakerRoleUz = "O'qituvchi";
    } else if (['学生', '生徒'].includes(speaker)) {
      gender = 'neutral';
      speakerRoleUz = 'Talaba';
    } else if (['店員', '店長', '係員', '係の人', 'フロント', '薬剤師'].includes(speaker)) {
      gender = 'neutral';
      speakerRoleUz = 'Xodim / Sotuvchi';
    } else if (['アナウンサー', 'アナウンス'].includes(speaker)) {
      gender = 'neutral';
      speakerRoleUz = "E'lon / Diktor";
    } else if (speaker === 'あなた') {
      gender = 'neutral';
      speakerRoleUz = 'Siz';
    }

    lines.push({
      id: `line_${idx++}`,
      speaker,
      speakerRoleUz,
      gender,
      japanese: text,
    });
  }

  return lines;
}

/**
 * Filters questions by JLPT Level
 */
export function getQuestionsByLevel(
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1',
): JlptListeningQuestion[] {
  return JLPT_LISTENING_QUESTIONS.filter((q) => q.level === level);
}

/**
 * Filters questions by JLPT Question Type
 */
export function getQuestionsByType(type: string): JlptListeningQuestion[] {
  return JLPT_LISTENING_QUESTIONS.filter((q) => q.type === type);
}
