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
    {
        id: 1,
        level: "N5",
        pattern: "~たことがある (tajribaga ega bo'lmoq)",
        questionText: "私は日本へ行ったこと（　）あります。",
        options: ["が", "を", "に", "で"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Feylning past/ta shakli] + ことがある. Bu yerda 'こと' (fact/thing) ot bo'lganligi sababli, undan keyin 'が' predlogi keladi: ことがあります."
    },
    {
        id: 2,
        level: "N4",
        pattern: "~ながら (bajarib turganda / ayni paytda)",
        questionText: "音楽を（　）ながら勉強します。",
        options: ["聞き", "聞く", "聞いて", "聞こえ"],
        correctAnswer: 0,
        explanationUzbek: "Qolip: [Feylning ます formasi (stem)] + ながら. '聞きます' (tinglamoq) -> stem qismi '聞き' + ながら = 聞きながら (musiqa tinglayotib dars qilaman)."
    },
    {
        id: 3,
        level: "N3",
        pattern: "~うちに (imkoniyat borida / fursatdan foydalanib)",
        questionText: "暗くならない（　）うちに、家に帰りましょう。",
        options: ["の", "な", "に", "（なし）"],
        correctAnswer: 3,
        explanationUzbek: "Qolip: [Feylning inkor/nai formasi] + うちに. Inkor shaklidagi feylga hech qanday yordamchi predlog (no/na/ni) qo'shmasdan to'g'ridan-to'g'ri 'うちに' birikadi."
    }
];
