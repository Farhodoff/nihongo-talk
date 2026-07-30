import { JLPT_KANJI_DATABASE } from '../../data/jlptKanjiDatabase';
import { JLPT_GRAMMAR_DATABASE } from '../../data/jlptGrammarDatabase';
import { JLPT_PRESET_DECKS } from '../../data/jlptPresetDecks';
import { JlptStudyPlanDay } from '../ai/aiJlpt';

export const generateAlgorithmicJlptPlan = (
    _currentLevel: string,
    targetLevel: string,
    durationDays: number,
    planType: 'special' | 'jlpt' = 'jlpt',
    specialGoal: string = ''
): JlptStudyPlanDay[] => {
    // 1. Get all Kanji for target level
    const kanjiForLevel = JLPT_KANJI_DATABASE.filter(k => k.level === targetLevel || (targetLevel === 'N3' && (k.level === 'N5' || k.level === 'N4' || k.level === 'N3')));
    
    // 2. Get all Grammar for target level
    const grammarForLevel = JLPT_GRAMMAR_DATABASE.filter(g => g.level === targetLevel || (targetLevel === 'N3' && (g.level === 'N5' || g.level === 'N4' || g.level === 'N3')));
    
    // 3. Get all Vocab for target level
    const vocabDecks = JLPT_PRESET_DECKS.filter(d => d.level === targetLevel && d.id.includes('vocab'));
    const vocabForLevel = vocabDecks.flatMap(d => d.cards.filter(c => c.type === 'vocab'));

    // Special Goal specific vocabulary presets fallback
    const kaiwaPhrases = [
        { word: "はじめまして (Hajimemashite)", reading: "はじめておあいします", meaning: "Tanishganimdan xursandman", example: "はじめまして、ファルホドと申します。" },
        { word: "お世話になっております (Osewa ni natte orimasu)", reading: "おせわになっております", meaning: "Yordamingiz uchun tashakkur (biznes muloqot)", example: "いつもお世話になっております。" },
        { word: "なるほど (Naruhodo)", reading: "なるほど", meaning: "Tushunarli / Haqiqatdan ham shunday", example: "なるほど、そういうことですね。" },
        { word: "そうですね (Sou desu ne)", reading: "そうですね", meaning: "Shunday-a / To'g'ri aytasiz", example: "そうですね、私もそう思います。" },
        { word: "ちょっとよろしいでしょうか (Chotto yoroshii de shou ka)", reading: "ちょっとよろしいでしょうか", meaning: "Bir daqiqa vaqtingizni olsam bo'ladimi?", example: "今、ちょっとよろしいでしょうか？" },
        { word: "かしこまりました (Kashikomarimashita)", reading: "かしこまりました", meaning: "Tushundim / Xo'p bo'ladi (rasmiy)", example: "はい、かしこまりました。" }
    ];

    const mensetsuPhrases = [
        { word: "自己PR (Jiko PR)", reading: "じこぴーあーる", meaning: "O'zini namoyon qilish / Kuchli taraflar", example: "私の自己PRをお話しさせていただきます。" },
        { word: "志望動機 (Shibou douki)", reading: "しぼうどうき", meaning: "Kompaniyaga topshirish sababi / Maqsad", example: "貴社を志望した理由は二つあります。" },
        { word: "長所と短所 (Chousho to Tansho)", reading: "ちょうしょとたんしょ", meaning: "Yutuqlar va kamchiliklar", example: "私の長所は粘り強いところです。" },
        { word: "御社 (Onsha)", reading: "おんしゃ", meaning: "Sizning kompaniyangiz (og'zaki biznes)", example: "御社の事業内容に強く惹かれました。" },
        { word: "よろしくお願いいたします (Yoroshiku onegai itashimasu)", reading: "よろしくおねがいいたします", meaning: "E'tiboringiz uchun rahmat", example: "本日はよろしくお願いいたします。" }
    ];

    // Calculate items per day
    const kanjiPerDay = Math.ceil(kanjiForLevel.length / durationDays) || 1;
    const grammarPerDay = Math.ceil(grammarForLevel.length / durationDays) || 1;
    const vocabPerDay = Math.ceil(vocabForLevel.length / durationDays) || 5;

    const dailyPlan: JlptStudyPlanDay[] = [];

    for (let day = 1; day <= durationDays; day++) {
        let focusArea: 'Kanji' | 'Vocabulary' | 'Grammar' | 'Reading' | 'Listening' | 'Speaking' = 'Speaking';
        let dayTitle = "";
        const tasks: string[] = [];
        let dayVocab: any[] = [];
        let dayKanji: any[] = [];
        let dayGrammar: any[] = [];

        if (planType === 'special') {
            if (specialGoal === 'kaiwa') {
                focusArea = day % 2 === 0 ? 'Speaking' : 'Listening';
                dayTitle = `🗣️ Kaiwa Muloqot Mashg'uloti (Kun ${day})`;
                const vSlice = kaiwaPhrases.slice((day - 1) % kaiwaPhrases.length, ((day - 1) % kaiwaPhrases.length) + 3);
                dayVocab = vSlice;
                tasks.push("Kaiwa AI Coach bilan 15 daqiqa jonli ovozli suhbat o'tkazish");
                tasks.push(`Muloqot iboralarini talaffuz qilish: ${vSlice.map(v => v.word).join(', ')}`);
                tasks.push("Kundalik hayotiy dialogni tinglab qaytarish (Shadowing)");
            } else if (specialGoal === 'mensetsu') {
                focusArea = 'Speaking';
                dayTitle = `💼 Mensetsu Intervyu Prep (Kun ${day})`;
                const vSlice = mensetsuPhrases.slice((day - 1) % mensetsuPhrases.length, ((day - 1) % mensetsuPhrases.length) + 2);
                dayVocab = vSlice;
                tasks.push("Jikoshoukai (O'zingiz haqida 1 daqiqalik nutq) tayyorlash va taymer bilan aytish");
                tasks.push(`Intervyu tayanch tushunchalari: ${vSlice.map(v => v.word).join(', ')}`);
                tasks.push("Keigo (Hushmomila tili) shakllarini takrorlash va javob mashq qilish");
            } else if (specialGoal === 'dokkai') {
                focusArea = 'Reading';
                dayTitle = `📖 Dokkai Mutolaa & Matn Tushunish (Kun ${day})`;
                const startG = (day - 1) * grammarPerDay;
                const gSlice = grammarForLevel.slice(startG, startG + grammarPerDay);
                dayGrammar = gSlice.map(g => ({ rule: g.title, explanation: g.meaningUz, example: g.examples?.[0]?.ja }));
                tasks.push("1 ta o'rtacha murakkablikdagi Yaponcha matnni o'qib, tahlil qilish");
                if (gSlice.length > 0) tasks.push(`Matndagi grammatik qurilmalar: ${gSlice.map(g => g.title).join(', ')}`);
                tasks.push("Noma'lum so'zlarni kontekst orqali topish mashqi");
            } else if (specialGoal === 'kanji') {
                focusArea = 'Kanji';
                dayTitle = `⛩️ Kanji & Lug'at Yodlash Intensivi (Kun ${day})`;
                const startK = (day - 1) * kanjiPerDay;
                const kSlice = kanjiForLevel.slice(startK, startK + kanjiPerDay);
                dayKanji = kSlice.map(k => ({ kanji: k.kanji, meaning: k.meaningUz, onyomi: k.onyomi, kunyomi: k.kunyomi }));
                if (kSlice.length > 0) tasks.push(`Kanjilarni yodlash va yozish: ${kSlice.map(k => `${k.kanji} (${k.meaningUz})`).join(', ')}`);
                tasks.push("Kanji va so'zlar bo'yicha Flashcard kartalarni takrorlash");
            } else {
                focusArea = 'Vocabulary';
                dayTitle = `🎯 Custom Maqsadli Mashg'ulot (Kun ${day})`;
                tasks.push(`Kunlik maqsadingiz bo'yicha mashq bajarish`);
                tasks.push("Yangi iboralar va qoidalarni qayta ko'rib chiqish");
            }
        } else {
            // General JLPT Level plan
            const startKanji = (day - 1) * kanjiPerDay;
            const kanjiChunk = kanjiForLevel.slice(startKanji, startKanji + kanjiPerDay);

            const startGrammar = (day - 1) * grammarPerDay;
            const grammarChunk = grammarForLevel.slice(startGrammar, startGrammar + grammarPerDay);

            const startVocab = (day - 1) * vocabPerDay;
            const vocabChunk = vocabForLevel.slice(startVocab, startVocab + vocabPerDay);

            if (day % 3 === 0) focusArea = 'Grammar';
            else if (day % 2 === 0) focusArea = 'Kanji';
            else focusArea = 'Vocabulary';

            dayTitle = `Kunlik JLPT ${targetLevel} Mashg'uloti (Kun ${day})`;

            if (kanjiChunk.length > 0) {
                tasks.push(`Kanjilarni yodlash: ${kanjiChunk.map(k => `${k.kanji} (${k.meaningUz})`).join(', ')}`);
            }
            if (vocabChunk.length > 0) {
                tasks.push(`Yangi so'zlarni yodlash: ${vocabChunk.map(v => `${v.front} (${v.back})`).join(', ')}`);
            }
            if (grammarChunk.length > 0) {
                tasks.push(`Grammatika qoidasi: ${grammarChunk.map(g => `${g.title} (${g.meaningUz})`).join(', ')}`);
            }

            if (tasks.length === 0) {
                tasks.push("O'tilgan so'zlar va grammatikani takrorlash");
                tasks.push("Mock test ishlash yoki matn o'qish");
                focusArea = 'Reading';
            }

            dayVocab = vocabChunk.map(v => ({
                word: v.front,
                reading: v.romaji || v.furigana || '',
                meaning: v.back,
                example: v.example
            }));
            dayGrammar = grammarChunk.map(g => ({
                rule: g.title,
                explanation: g.meaningUz + '\n\n' + (g as any).structure,
                example: g.examples && g.examples[0] ? `${g.examples[0].ja} - ${g.examples[0].uz}` : ''
            }));
            dayKanji = kanjiChunk.map(k => ({
                kanji: k.kanji,
                meaning: k.meaningUz,
                onyomi: k.onyomi,
                kunyomi: k.kunyomi
            }));
        }

        const dayPlan: JlptStudyPlanDay = {
            day,
            title: dayTitle,
            focusArea,
            tasks,
            pomodoroTargetMinutes: 60,
            vocabularyList: dayVocab.length > 0 ? dayVocab : undefined,
            grammarNotes: dayGrammar.length > 0 ? dayGrammar : undefined,
            kanjiList: dayKanji.length > 0 ? dayKanji : undefined
        };
        dailyPlan.push(dayPlan);
    }

    return dailyPlan;
};
