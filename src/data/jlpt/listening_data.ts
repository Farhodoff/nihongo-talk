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
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
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
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
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
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
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
    }
];
