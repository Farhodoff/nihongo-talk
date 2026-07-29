import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generateFlashcardsFromNote, getGeminiAPIKeys, markKeyRateLimited, clearDisabledKeysMap, getGenAI, requestWithRetry, validateSpeechInput, converseWithCoach } from '../ai';
import * as ollamaModule from '../ollama';
import * as deepseekModule from '../deepseek';
import { GoogleGenerativeAI } from '@google/generative-ai';

vi.mock('../ollama', () => ({
    callOllama: vi.fn(),
}));

vi.mock('../deepseek', () => ({
    callDeepSeek: vi.fn(),
}));

vi.mock('@google/generative-ai', () => {
    return {
        GoogleGenerativeAI: vi.fn().mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockReturnValue({
                generateContent: vi.fn().mockResolvedValue({
                    response: {
                        text: () => JSON.stringify([
                            { front: 'Question 1', back: 'Answer 1' }
                        ])
                    }
                })
            });
        })
    };
});

describe('AI Silent Fallback Behavior', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        clearDisabledKeysMap();
    });

    it('falls back to DeepSeek if callOllama throws in generateFlashcardsFromNote', async () => {
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({ 
            aiModel: 'ollama'
        }));
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        vi.mocked(ollamaModule.callOllama).mockRejectedValueOnce(new Error('Ollama offline'));
        vi.mocked(deepseekModule.callDeepSeek).mockResolvedValueOnce(JSON.stringify([{ front: 'Question 1', back: 'Answer 1' }]));

        const cards = await generateFlashcardsFromNote('Note text', 1);

        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('[AI Fallback] Ollama failed'),
            expect.any(Error)
        );
        expect(cards).toEqual([{ front: 'Question 1', back: 'Answer 1' }]);
        warnSpy.mockRestore();
    });
});

describe('Gemini Key Rotation & Multi-Key Format Safeguards', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        clearDisabledKeysMap();
        vi.mocked(GoogleGenerativeAI).mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockReturnValue({
                generateContent: vi.fn().mockResolvedValue({
                    response: {
                        text: () => JSON.stringify([
                            { front: 'Question 1', back: 'Answer 1' }
                        ])
                    }
                })
            });
        } as any);
    });

    it('parses space, comma, semicolon, and newline-delimited keys while removing duplicates and invalid sk- keys', () => {
        const keyString = "AIzaSyKey1234567890, AIzaSyKey0987654321\nAIzaSyKey1234567890; AIzaSyKey1122334455 sk-deepseekKey123456";
        const keys = getGeminiAPIKeys(keyString);
        expect(keys).toEqual([
            'AIzaSyKey1234567890',
            'AIzaSyKey0987654321',
            'AIzaSyKey1122334455'
        ]);
    });

    it('blacklists rate-limited keys for 45s and rotates to next available key in getGenAI', () => {
        const multiKeys = "AIzaSyKeyAAAA1111, AIzaSyKeyBBBB2222";
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({
            googleApiKey: multiKeys
        }));

        const genAI1 = getGenAI();
        const firstKey = genAI1.key;
        expect(firstKey).toBeDefined();

        markKeyRateLimited(firstKey);

        const genAI2 = getGenAI();
        expect(genAI2.key).not.toBe(firstKey);
    });

    it('retries with key rotation when operation throws 429 / RESOURCE_EXHAUSTED rate limit error in requestWithRetry', async () => {
        const multiKeys = "AIzaSyKeyXXXX1111, AIzaSyKeyYYYY2222";
        let attempt = 0;

        const op = vi.fn().mockImplementation(async (_genAI) => {
            attempt++;
            if (attempt === 1) {
                throw new Error("429 RESOURCE_EXHAUSTED: Rate limit exceeded (15 RPM)");
            }
            return "success_result";
        });

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const res = await requestWithRetry(op, 2, 10, multiKeys);

        expect(res).toBe("success_result");
        expect(op).toHaveBeenCalledTimes(2);
        warnSpy.mockRestore();
    });
});

describe('Realtime Speech Recognition Safeguards', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        clearDisabledKeysMap();
    });
    it('rejects audio duration shorter than 1200ms', () => {
        expect(validateSpeechInput('Hello world', 1000)).toBe(false);
        expect(validateSpeechInput('Hello world', 1199)).toBe(false);
    });

    it('rejects transcripts shorter than 5 chars and under 2 words', () => {
        expect(validateSpeechInput('hi', 1500)).toBe(false);
        expect(validateSpeechInput('a', 2000)).toBe(false);
        expect(validateSpeechInput('   ', 2000)).toBe(false);
    });

    it('accepts audio duration >= 1200ms when transcript length >= 5', () => {
        expect(validateSpeechInput('Hello', 1200)).toBe(true);
        expect(validateSpeechInput('Speaking test', 1500)).toBe(true);
    });

    it('accepts audio duration >= 1200ms when word count >= 2', () => {
        expect(validateSpeechInput('go on', 1200)).toBe(true);
        expect(validateSpeechInput('we talk', 1300)).toBe(true);
    });

    it('returns response from DeepSeek in converseWithCoach', async () => {
        vi.mocked(deepseekModule.callDeepSeek).mockResolvedValueOnce('DeepSeek response from coach');
        const response = await converseWithCoach('Hello coach', []);
        expect(response).toBe('DeepSeek response from coach');
    });
});


