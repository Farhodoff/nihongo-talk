import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
    parseCoachResponse,
    cleanJapaneseTTS,
    extractSpeechAudioText,
    converseWithCoachStructured,
    converseWithCoach,
    validateSpeechInput
} from '../ai';
import { DEFAULT_SCENARIOS } from '../../data/defaultScenarios';

vi.mock('../ai/aiCore', () => ({
    callSelectedAIProvider: vi.fn(),
    getGenAI: vi.fn(),
    isAIKeyConfigured: vi.fn(() => true)
}));

import { callSelectedAIProvider } from '../ai/aiCore';

describe('JAPANESE AI COACH & TTS INTEGRITY SUITE', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('TEST 1: Japanese scenario returns structured Japanese JSON with Kanji/Kana and no English in reply', () => {
        const mockRawAiResponse = JSON.stringify({
            language: 'ja',
            reply: 'かしこまりました。ラーメンをお持ちいたします。お飲み物はいかがですか？',
            ttsText: 'かしこまりました。ラーメンをお持ちいたします。お飲み物はいかがですか？',
            romaji: 'Kashikomarimashita. Raamen o omochi itashimasu. Onomimono wa ikaga desu ka?',
            correction: {
                hasError: false,
                original: '',
                corrected: '',
                explanation: ''
            },
            vocabulary: [
                { word: 'お飲み物', reading: 'おのみもの', meaning: 'Ichimlik', example: 'お飲み物は何にしますか？' }
            ]
        });

        const parsed = parseCoachResponse(mockRawAiResponse, 'ja');
        expect(parsed.language).toBe('ja');
        expect(parsed.reply).toBe('かしこまりました。ラーメンをお持ちいたします。お飲み物はいかがですか？');
        expect(parsed.ttsText).toBe('かしこまりました。ラーメンをお持ちいたします。お飲み物はいかがですか？');
        expect(parsed.romaji).toContain('Kashikomarimashita');
        expect(parsed.vocabulary?.length).toBe(1);
    });

    it('TEST 2: English scenario returns structured English response without Japanese or Romaji', () => {
        const mockRawAiResponse = JSON.stringify({
            language: 'en',
            reply: "Certainly! I'd recommend trying our special pasta. Would you like a beverage to go with it?",
            ttsText: "Certainly! I'd recommend trying our special pasta. Would you like a beverage to go with it?",
            romaji: '',
            correction: {
                hasError: false
            },
            vocabulary: [
                { word: 'beverage', reading: '', meaning: 'Ichimlik', example: 'Hot beverage' }
            ]
        });

        const parsed = parseCoachResponse(mockRawAiResponse, 'en');
        expect(parsed.language).toBe('en');
        expect(parsed.reply).toContain('Certainly!');
        expect(parsed.romaji).toBe('');
    });

    it('TEST 3 & 4: cleanJapaneseTTS completely strips Romaji, Uzbek translations, and emojis from TTS text', () => {
        const dirtyJapaneseWithRomaji = 'ご注文はお決まりですか？ (Gochuumon wa okimari desu ka?) [Buyurtmangiz tayyormi? 🎉]';
        const cleanTTS = cleanJapaneseTTS(dirtyJapaneseWithRomaji);

        expect(cleanTTS).toBe('ご注文はお決まりですか？');
        expect(cleanTTS).not.toMatch(/[a-zA-Z]/); // No Latin letters
        expect(cleanTTS).not.toContain('Gochuumon');
        expect(cleanTTS).not.toContain('Buyurtmangiz');
        expect(cleanTTS).not.toContain('🎉');
    });

    it('TEST 5: extractSpeechAudioText extracts clean spoken text without visual notes or lecture markers', () => {
        const fullDialogueWithLecture = `
かしこまりました。
📖 例文: 過去形を使います。
💡 解説: 社外の人に対しては「参る」を使います。
(Kashikomarimashita)
[Tushundim]
        `;

        const spoken = extractSpeechAudioText(fullDialogueWithLecture);
        expect(spoken).toBe('かしこまりました。');
        expect(spoken).not.toContain('例文');
        expect(spoken).not.toContain('解説');
        expect(spoken).not.toContain('Kashikomarimashita');
    });

    it('TEST 6 & 7: Japanese grammar correction is structured properly with error details and explanation', () => {
        const mockErrorResponse = JSON.stringify({
            language: 'ja',
            reply: '昨日学校へ行きましたね。学校では何を勉強しましたか？',
            ttsText: '昨日学校へ行きましたね。学校では何を勉強しましたか？',
            romaji: 'Kinou gakkou e ikimashita ne. Gakkou de wa nani o benkyou shimashita ka?',
            correction: {
                hasError: true,
                original: '昨日学校に行きます',
                corrected: '昨日学校に行きました',
                explanation: '「昨日」は過去の出来事なので、過去形の「行きました」を使います。'
            },
            vocabulary: [
                { word: '出来事', reading: 'できごと', meaning: 'Voqea, hodisa', example: '昨日の出来事' }
            ]
        });

        const parsed = parseCoachResponse(mockErrorResponse, 'ja');
        expect(parsed.correction?.hasError).toBe(true);
        expect(parsed.correction?.original).toBe('昨日学校に行きます');
        expect(parsed.correction?.corrected).toBe('昨日学校に行きました');
        expect(parsed.correction?.explanation).toContain('過去形');
    });

    it('TEST 8: Scenario context is preserved when calling converseWithCoachStructured', async () => {
        const ramenScenario = DEFAULT_SCENARIOS.find(s => s.id === 'sc_restaurant_ramen') || DEFAULT_SCENARIOS[0];

        (callSelectedAIProvider as any).mockResolvedValueOnce(JSON.stringify({
            language: 'ja',
            reply: 'いらっしゃいませ！何名様でしょうか？',
            ttsText: 'いらっしゃいませ！何名様でしょうか？',
            romaji: 'Irasshaimase! Nanmei-sama deshou ka?',
            correction: { hasError: false },
            vocabulary: [{ word: '名様', reading: 'めいさま', meaning: 'Kishi (hurmat shakli)', example: '二名様です' }]
        }));

        const result = await converseWithCoachStructured(
            'こんにちは',
            [],
            'ja',
            'roast',
            undefined,
            ramenScenario
        );

        expect(result.language).toBe('ja');
        expect(result.reply).toContain('いらっしゃいませ');
        expect(callSelectedAIProvider).toHaveBeenCalledWith(
            expect.stringContaining(ramenScenario.title_ja),
            undefined,
            true
        );
    });

    it('TEST 9 & 10: Deduplication prevents duplicate vocabulary flashcards from being generated', () => {
        const vocabList = [
            { front: '🇯🇵 単語:\n"注文"', back: "📌 Ma'nosi: Buyurtma" },
            { front: '🇯🇵 単語:\n"注文"', back: "📌 Ma'nosi: Buyurtma (takror)" },
            { front: '🇯🇵 単語:\n"お冷"', back: "📌 Ma'nosi: Muzdek suv" }
        ];

        const uniqueVocab = vocabList.filter((card, index, self) =>
            index === self.findIndex(c => c.front === card.front)
        );

        expect(uniqueVocab.length).toBe(2);
        expect(uniqueVocab.map(c => c.front)).toEqual([
            '🇯🇵 単語:\n"注文"',
            '🇯🇵 単語:\n"お冷"'
        ]);
    });

    it('TEST 11: converseWithCoach backward compatibility returns clean reply string', async () => {
        (callSelectedAIProvider as any).mockResolvedValueOnce(JSON.stringify({
            language: 'ja',
            reply: 'お待たせいたしました！醤油ラーメンです。',
            ttsText: 'お待たせいたしました！醤油ラーメンです。',
            romaji: 'Omatase itashimashita! Shouyu raamen desu.',
            correction: { hasError: false }
        }));

        const replyString = await converseWithCoach('ラーメンをお願いします', [], 'ja');
        expect(replyString).toBe('お待たせいたしました！醤油ラーメンです。');
    });

    it('TEST 12 & 13: validateSpeechInput rejects empty or sub-second accidental noise', () => {
        expect(validateSpeechInput('', 0)).toBe(false);
        expect(validateSpeechInput('   ', 2000)).toBe(false);
        expect(validateSpeechInput('a', 200)).toBe(false); // Too short duration
        expect(validateSpeechInput('ラーメンを一つお願いします', 1500)).toBe(true);
    });

    it('TEST 14: Malformed AI response never crashes parser and gracefully falls back', () => {
        const malformed1 = 'I cannot parse this JSON { broken';
        const parsed1 = parseCoachResponse(malformed1, 'ja');
        expect(parsed1.language).toBe('ja');
        expect(parsed1.reply).toBe(malformed1);
        expect(parsed1.ttsText).toBeDefined();

        const malformed2 = '';
        const parsed2 = parseCoachResponse(malformed2, 'en');
        expect(parsed2.language).toBe('en');
        expect(parsed2.reply).toBe("Understood, let's keep going!");
    });
});
