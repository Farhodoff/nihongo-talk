export interface JlptListeningQuestion {
    id: number;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    type: 'task' | 'point' | 'quick'; // 課題理解, ポイント理解, 即時応答
    audioUrl: string;
    script: string;
    questionText: string;
    options: string[];
    correctAnswer: number; // index of options
    explanationUzbek: string;
}

export const JLPT_LISTENING_QUESTIONS: JlptListeningQuestion[] = [
    {
        id: 1,
        level: "N5",
        type: "task",
        audioUrl: "",
        script: "男の人と女の人が話しています。男の人はこれから何をしますか？\n男：あ、雨が降ってきましたね。\n女：そうですね。傘を持っていますか？\n男：いいえ、持っていません。コンビニで買ってきます。\n女：あ、私の傘を貸しましょうか？車の中にありますから。\n男：ありがとうございます！じゃあ、お願いします。",
        questionText: "男の人はこれから何をしますか？ (Erkak kishi endi nima qiladi?)",
        options: [
            "コンビニで傘を買います (Konvinidan soyabon sotib oladi)",
            "女の人の車から傘を持ってきます (Ayolning mashinasidan soyabon olib keladi)",
            "雨の中を歩きます (Yomg'irda yuradi)",
            "店の中で待ちます (Do'kon ichida kutadi)"
        ],
        correctAnswer: 1,
        explanationUzbek: "Erkak kishi soyaboni yo'qligini aytib konvinidan sotib olmoqchi bo'ladi, ammo ayol mashinasidagi soyabonini berib turishini aytganda erkak buni qabul qiladi. Demak, u ayolning mashinasidan soyabonni olib keladi."
    },
    {
        id: 2,
        level: "N4",
        type: "point",
        audioUrl: "",
        script: "女の学生と男の学生が話しています。男の学生はどうして昨日学校を休みましたか？\n女：山田くん、昨日はどうして休んだの？風邪？\n男：ううん、風邪じゃなくて。実は、自転車が途中で壊れちゃって、遅刻しそうだったから家に帰ったんだ。\n女：えー、それだけで休んだの？\n男：うん、テストもない日だったしね。",
        questionText: "男の学生はどうして昨日学校を休みましたか？ (O'quvchi bola kecha nega maktabga kelmadi?)",
        options: [
            "風邪をひいたからです (Shomollab qolgani uchun)",
            "自転車が壊れたからです (Velosipedi buzilib qolgani uchun)",
            "テストがなかったからです (Imtihon bo'lmaganligi uchun)",
            "寝坊したからです (Uxlab qolgani uchun)"
        ],
        correctAnswer: 1,
        explanationUzbek: "Erkak talaba shamollagani yo'q, yo'lda velosipedi buzilib qolgani va darsga kechikishni xohlamagani sababli uyga qaytib ketganligini va darsni qoldirganligini aytadi."
    },
    {
        id: 3,
        level: "N3",
        type: "quick",
        audioUrl: "",
        script: "男の人が女の人に話しかけています。\n男：すみません、この近くに郵便局はありますか？\n女：あ、それなら、この道をまっすぐ行って、最初の角を右に曲がると左側にありますよ。",
        questionText: "郵便局はどこにありますか？ (Pochta qayerda joylashgan?)",
        options: [
            "最初の角を左に曲がったところ (Birinchi chorrahadan chapga burilganda)",
            "この道をまっすぐ行って、最初の角を右に曲がった左側 (Shu ko'chadan to'g'ri borib, birinchi chorrahadan o'ngga burilganda chap tomonda)",
            "この道の右側 (Shu ko'chaning o'ng tomonida)",
            "コンビニの隣 (Konvinining yonida)"
        ],
        correctAnswer: 1,
        explanationUzbek: "Ayol kishi pochta manzilini: ko'chadan to'g'ri borib, birinchi burchakdan (chorrahadan) o'ngga burilganda chap tomonda joylashganligini tushuntirdi."
    },
    {
        id: 4,
        level: "N2",
        type: "task",
        audioUrl: "",
        script: "会社で課長と女性社員が話しています。女性社員はこれからまず何をしますか？\n課長：佐藤さん、明日の新商品発表会の資料の準備はどうなっていますか？\n佐藤：はい、スライドの印刷はすべて完了しました。会場のプロジェクターの確認も済んでいます。\n課長：そうか。じゃあ、参加者の名簿の最新版を印刷して、受付に届けておいてくれるかい？\n佐藤：承知いたしました。すぐに名簿を確認して印刷します。",
        questionText: "女性社員はこれからまず何をしますか？ (Xodim ayol endi birinchi navbatda nima qiladi?)",
        options: [
            "スライドを印刷する (Slaydlarni chop etadi)",
            "プロジェクターを確認する (Proyektorni tekshiradi)",
            "参加者名簿の最新版を印刷して届ける (Ishtirokchilar ro'yxatining so'nggi nusxasini chop etib topshiradi)",
            "新商品のサンプルを用意する (Yangi mahsulot namunalarini tayyorlaydi)"
        ],
        correctAnswer: 2,
        explanationUzbek: "Slaydlar va proyektor tayyor bo'lgani sababli, bo'lim boshlig'i qatnashuvchilar ro'yxatini chop etib qabulxonaga olib borishni so'radi va ayol xodim buni darhol bajarishini aytdi."
    },
    {
        id: 5,
        level: "N1",
        type: "point",
        audioUrl: "",
        script: "ラジオで経済評論家が話しています。評論家は今年度の個人消費が伸び悩んでいる最大の原因は何だと言っていますか？\n評論家：今年度の景気動向を見ますと、雇用の改善は見られるものの、実質賃金の伸びが物価の上昇に追いついていないことが、消費者の節約志向に拍車をかけています。将来の社会保障に対する不安も背景にありますが、やはり直接的には購買力の低下が最大の要因と分析されます。",
        questionText: "今年度の個人消費が伸び悩んでいる最大の原因は何ですか？ (Shaxsiy iste'mol o'smayotganining eng asosiy sababi nima?)",
        options: [
            "失業率が上昇したこと (Ishsizlik darajasi oshgani)",
            "実質賃金の伸びが物価高に追いつかず購買力が低下したこと (Haqiqiy oyliklar inflyatsiyaga yetmay xarid qobiliyati pasaygani)",
            "新製品の流通が滞っていること (Yangi mahsulotlar yetishmovchiligi)",
            "若者の人口が急減したこと (Yoshlar sonining keskin kamayishi)"
        ],
        correctAnswer: 1,
        explanationUzbek: "Ekspertning ta'kidlashicha, bandlik yaxshilangan bo'lsa-da, real ish haqining narxlar o'sishidan orqada qolishi va to'g'ridan-to'g'ri xarid qobiliyatining pasayishi iste'mol o'smasligining asosiy sababidir."
    }
];
