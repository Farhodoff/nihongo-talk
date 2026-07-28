import { JLPT_KANJI_DATABASE } from '../../data/jlptKanjiDatabase';
import { JLPT_GRAMMAR_DATABASE } from '../../data/jlptGrammarDatabase';
import { JLPT_PRESET_DECKS } from '../../data/jlptPresetDecks';
import { JlptStudyPlanDay } from '../ai/aiJlpt';

export const generateAlgorithmicJlptPlan = (
    _currentLevel: string,
    targetLevel: string,
    durationDays: number
): JlptStudyPlanDay[] => {
    // 1. Get all Kanji for target level
    const kanjiForLevel = JLPT_KANJI_DATABASE.filter(k => k.level === targetLevel);
    
    // 2. Get all Grammar for target level
    const grammarForLevel = JLPT_GRAMMAR_DATABASE.filter(g => g.level === targetLevel);
    
    // 3. Get all Vocab for target level
    const vocabDecks = JLPT_PRESET_DECKS.filter(d => d.level === targetLevel && d.id.includes('vocab'));
    const vocabForLevel = vocabDecks.flatMap(d => d.cards.filter(c => c.type === 'vocab'));

    // Calculate items per day (ceiling to ensure all items are covered)
    const kanjiPerDay = Math.ceil(kanjiForLevel.length / durationDays) || 1;
    const grammarPerDay = Math.ceil(grammarForLevel.length / durationDays) || 1;
    const vocabPerDay = Math.ceil(vocabForLevel.length / durationDays) || 5;

    const dailyPlan: JlptStudyPlanDay[] = [];

    for (let day = 1; day <= durationDays; day++) {
        // Chunk logic
        const startKanji = (day - 1) * kanjiPerDay;
        const kanjiChunk = kanjiForLevel.slice(startKanji, startKanji + kanjiPerDay);

        const startGrammar = (day - 1) * grammarPerDay;
        const grammarChunk = grammarForLevel.slice(startGrammar, startGrammar + grammarPerDay);

        const startVocab = (day - 1) * vocabPerDay;
        const vocabChunk = vocabForLevel.slice(startVocab, startVocab + vocabPerDay);

        // Determine focus area
        let focusArea: 'Kanji' | 'Vocabulary' | 'Grammar' | 'Reading' | 'Listening' | 'Speaking' = 'Vocabulary';
        if (day % 3 === 0) focusArea = 'Grammar';
        else if (day % 2 === 0) focusArea = 'Kanji';

        const tasks: string[] = [];
        if (kanjiChunk.length > 0) tasks.push(`Kanjilarni yodlash: ${kanjiChunk.map(k => k.kanji).join(', ')}`);
        if (vocabChunk.length > 0) tasks.push(`Yangi so'zlarni o'rganish: ${vocabChunk.length} ta so'z`);
        if (grammarChunk.length > 0) tasks.push(`Grammatika qoidasini ko'rib chiqish: ${grammarChunk.map(g => g.title).join(', ')}`);

        // If it's a review day (all items exhausted)
        if (tasks.length === 0) {
            tasks.push("O'tilgan so'zlar va grammatikani takrorlash");
            tasks.push("Mock test ishlash yoki matn o'qish");
            focusArea = 'Reading';
        }

        const dayPlan: JlptStudyPlanDay = {
            day,
            title: `Kunlik JLPT ${targetLevel} Mashg'uloti`,
            focusArea,
            tasks,
            pomodoroTargetMinutes: 60,
            vocabularyList: vocabChunk.map(v => ({
                word: v.front,
                reading: v.romaji || v.furigana || '',
                meaning: v.back,
                example: v.example
            })),
            grammarNotes: grammarChunk.map(g => ({
                rule: g.title,
                explanation: g.meaningUz + '\n\n' + (g as any).structure, // Cast to any to avoid strict checking if structure is missing, though it's there
                example: g.examples && g.examples[0] ? `${g.examples[0].ja} - ${g.examples[0].uz}` : ''
            })),
            kanjiList: kanjiChunk.map(k => ({
                kanji: k.kanji,
                meaning: k.meaningUz,
                onyomi: k.onyomi,
                kunyomi: k.kunyomi
            }))
        };
        dailyPlan.push(dayPlan);
    }

    return dailyPlan;
};
