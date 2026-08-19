export interface JlptGrammarQuestion {
    id: number;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    pattern: string; // grammar pattern (e.g. ~たことがある)
    questionText: string; // question with blank
    options: string[];
    correctAnswer: number; // index of options
    explanationUzbek: string;
}

export const JLPT_GRAMMAR_QUESTIONS: JlptGrammarQuestion[] = [
    // === N5 ===
    {
        id: 1,
        level: "N5",
        pattern: "~たことがある (tajribaga ega bo'lmoq)",
        questionText: "私は日本へ行ったこと（　）あります。",
        options: ["が", "を", "に", "で"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Fe'lning past/ta shakli] + ことがある. Bu yerda 'こと' (fact/thing) ot bo'lganligi sababli, undan keyin 'が' predlogi keladi: ことがあります."
    },
    {
        id: 2,
        level: "N5",
        pattern: "~たい (xohlamoq / istamoq)",
        questionText: "日本料理を（　）たいです。",
        options: ["食べ", "食べる", "食べた", "食べて"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Fe'lning ます shakli (stem)] + たい. '食べます' -> '食べ' + たい = 食べたい (yegim kelyapti)."
    },
    // === N4 ===
    {
        id: 3,
        level: "N4",
        pattern: "~ながら (bajarib turganda / ayni paytda)",
        questionText: "音楽を（　）ながら勉強します。",
        options: ["聞き", "聞く", "聞いて", "聞こえ"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Fe'lning ます formasi (stem)] + ながら. '聞きます' (tinglamoq) -> stem qismi '聞き' + ながら = 聞きながら (musiqa tinglayotib dars qilaman)."
    },
    {
        id: 4,
        level: "N4",
        pattern: "~てはいけない (taqiqlash / mumkin emas)",
        questionText: "ここでタバコを吸っ（　）いけません。",
        options: ["ては", "では", "たら", "ても"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Fe'lning て shakli] + は + いけません. '吸って' + は + いけません = Chekish mumkin emas."
    },
    // === N3 ===
    {
        id: 5,
        level: "N3",
        pattern: "~うちに (imkoniyat borida / fursatdan foydalanib)",
        questionText: "暗くならない（　）うちに、家に帰りましょう。",
        options: ["の", "な", "に", "（なし）"],
        correctAnswer: 3,
        explanationUzbek: "Qolip: [Fe'lning inkor/nai formasi] + うちに. Inkor shaklidagi fe'lga hech qanday yordamchi predlog (no/na/ni) qo'shmasdan to'g'ridan-to'g'ri 'うちに' birikadi."
    },
    {
        id: 6,
        level: "N3",
        pattern: "~ことにする (qaror qabul qilmoq)",
        questionText: "来月から日本語学校に（　）ことにしました。",
        options: ["通う", "通って", "通い", "通った"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Fe'lning lug'at/dictionary formasi] + ことにする = Shaxsiy qaror qabul qilmoq."
    },
    // === N2 ===
    {
        id: 7,
        level: "N2",
        pattern: "~わけにはいかない (qila olmaslik / ijtimoiy/axloqiy sababga ko'ra)",
        questionText: "明日は大切な試験があるので、休む（　）にはいかない。",
        options: ["わけ", "こと", "はず", "もの"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Fe'lning lug'at formasi] + わけにはいかない. Muhim imtihon bo'lgani sababli dars qoldirish mumkin emasligini ifodalaydi."
    },
    {
        id: 8,
        level: "N2",
        pattern: "~に違いない (shubhasiz / aniq)",
        questionText: "彼があんなに一生懸命勉強したのだから、合格する（　）。",
        options: ["に違いない", "にすぎない", "にほかならない", "に決まらない"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Oddiy shakl] + に違いない. Kuchli ishonch va shubhasiz xulosani anglatadi."
    },
    // === N1 ===
    {
        id: 9,
        level: "N1",
        pattern: "~極まりない / ~極まる (haddan tashqari / o'ta darajada)",
        questionText: "彼の無責任な態度は、遺憾（　）極まりない。",
        options: ["（なし）", "の", "に", "な"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Ot / な-sifat o'zagi] + 極まりない (Kiwamarinai). Haddan ortiq afsusdaman degan rasmiy ma'noda ishlatiladi."
    },
    {
        id: 10,
        level: "N1",
        pattern: "~を皮切りに (boshlanishi bilan / ketma-ketlikda)",
        questionText: "東京公演（　）皮切りに、全国ツアーがスタートする。",
        options: ["を", "に", "で", "から"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Ot] + を皮切りに (o kawakiri ni). Biror yirik tadbirlar zanjirining boshlang'ich nuqtasini bildiradi."
    }
];
