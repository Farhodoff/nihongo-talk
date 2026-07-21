import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
    validateSpeechInput, 
    getGeminiAPIKeys, 
    markKeyRateLimited, 
    getGenAI, 
    requestWithRetry,
    generateFlashcardsWithAI,
    analyzeSpeech,
    converseWithCoach
} from '../ai';
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
                            { front: 'Empirical Front', back: 'Empirical Back' }
                        ])
                    }
                })
            });
        })
    };
});

describe('EMPIRICAL CHALLENGE 1: Speech Safeguards Boundary & Stress Testing', () => {
    it('discards duration strictly below 1200ms regardless of text length', () => {
        expect(validateSpeechInput('This is a very long sentence with many words', 0)).toBe(false);
        expect(validateSpeechInput('This is a very long sentence with many words', 1199)).toBe(false);
        expect(validateSpeechInput('Super long text test', -100)).toBe(false);
    });

    it('discards transcripts with length < 5 and word count < 2 even if duration >= 1200ms', () => {
        expect(validateSpeechInput('', 1500)).toBe(false);
        expect(validateSpeechInput('   ', 1500)).toBe(false);
        expect(validateSpeechInput('a', 2000)).toBe(false);
        expect(validateSpeechInput('hi', 2000)).toBe(false);
        expect(validateSpeechInput(' hey ', 2000)).toBe(false);
    });

    it('accepts valid duration (>= 1200ms) with character length >= 5', () => {
        expect(validateSpeechInput('Hello', 1200)).toBe(true);
        expect(validateSpeechInput('12345', 1200)).toBe(true);
        expect(validateSpeechInput(' Uzbek ', 1500)).toBe(true);
    });

    it('accepts valid duration (>= 1200ms) with word count >= 2 (even if length < 5)', () => {
        expect(validateSpeechInput('go on', 1200)).toBe(true); // length 5, words 2
        expect(validateSpeechInput('a b', 1200)).toBe(true);   // length 3, words 2
        expect(validateSpeechInput('  x  y  ', 1300)).toBe(true); // length 3 trimmed, words 2
    });
});

describe('EMPIRICAL CHALLENGE 2: Key Rotation, Multi-Key Parsing & 45s Cooldown', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('correctly parses complex key strings with mixed separators (comma, semicolon, space, newline) and filters invalid sk- keys', () => {
        const rawKeyInput = `
            AIzaSyKey_ALPHA_12345, AIzaSyKey_BETA_67890; AIzaSyKey_GAMMA_11223
            sk-deepseek-should-be-filtered AIzaSyKey_ALPHA_12345
            short
        `;
        const keys = getGeminiAPIKeys(rawKeyInput);
        expect(keys).toEqual([
            'AIzaSyKey_ALPHA_12345',
            'AIzaSyKey_BETA_67890',
            'AIzaSyKey_GAMMA_11223'
        ]);
    });

    it('blacklists rate-limited key for 45s and skips it during round-robin rotation', () => {
        const keysStr = "AIzaSyKey_1, AIzaSyKey_2, AIzaSyKey_3";

        const genAI1 = getGenAI(keysStr);
        const key1 = genAI1.key;

        // Mark key1 as rate limited (cooldown active for 45s)
        markKeyRateLimited(key1);

        // Subsequent calls should pick key2 or key3, never key1 while on cooldown
        const genAI2 = getGenAI(keysStr);
        const genAI3 = getGenAI(keysStr);

        expect(genAI2.key).not.toBe(key1);
        expect(genAI3.key).not.toBe(key1);
        expect(['AIzaSyKey_1', 'AIzaSyKey_2', 'AIzaSyKey_3']).toContain(genAI2.key);
        expect(['AIzaSyKey_1', 'AIzaSyKey_2', 'AIzaSyKey_3']).toContain(genAI3.key);
    });

    it('retries with key rotation when operation throws 429 RESOURCE_EXHAUSTED', async () => {
        const keysStr = "AIzaSyKeyXXXX1111, AIzaSyKeyYYYY2222";
        let attempt = 0;

        const op = vi.fn().mockImplementation(async (_genAI) => {
            attempt++;
            if (attempt === 1) {
                throw new Error("429 RESOURCE_EXHAUSTED: Rate limit exceeded (15 RPM)");
            }
            return "SUCCESS_DATA";
        });

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const res = await requestWithRetry(op, 2, 10, keysStr);

        expect(res).toBe("SUCCESS_DATA");
        expect(op).toHaveBeenCalledTimes(2);
        warnSpy.mockRestore();
    });
});

describe('EMPIRICAL CHALLENGE 3: Seamless Silent Fallback for Ollama and DeepSeek', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('seamlessly falls back from Ollama to Gemini 1.5 Flash when Ollama connection fails in generateFlashcardsWithAI', async () => {
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({ 
            aiModel: 'ollama',
            googleApiKey: 'AIzaSyD1234567890abcdef'
        }));
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        vi.mocked(ollamaModule.callOllama).mockRejectedValueOnce(new Error('Ollama ECONNREFUSED'));

        const cards = await generateFlashcardsWithAI('Math', 1);

        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('[AI Fallback] Ollama failed in generateFlashcardsWithAI'),
            expect.any(Error)
        );
        expect(cards).toEqual([{ front: 'Empirical Front', back: 'Empirical Back' }]);
        warnSpy.mockRestore();
    });

    it('seamlessly falls back from DeepSeek to Gemini 1.5 Flash when DeepSeek API errors in analyzeSpeech', async () => {
        const mockSpeechResponse = {
            grammar_corrections: ['Empirical fix'],
            better_vocabulary: [],
            fluency_score: 8.0,
            overall_feedback: 'Great speaking!'
        };

        localStorage.setItem('study_planner_ai_settings', JSON.stringify({ 
            aiModel: 'deepseek',
            deepseekApiKey: 'sk-invalid-key',
            googleApiKey: 'AIzaSyD1234567890abcdef'
        }));
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        vi.mocked(deepseekModule.callDeepSeek).mockRejectedValueOnce(new Error('DeepSeek 500 Internal Server Error'));

        vi.mocked(GoogleGenerativeAI).mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockReturnValue({
                generateContent: vi.fn().mockResolvedValue({
                    response: {
                        text: () => JSON.stringify(mockSpeechResponse)
                    }
                })
            });
        } as any);

        const analysis = await analyzeSpeech('Empirical speech test input', 'English');

        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('[AI Fallback] DeepSeek failed in analyzeSpeech'),
            expect.any(Error)
        );
        expect(analysis.fluency_score).toBe(8.0);
        warnSpy.mockRestore();
    });

    it('seamlessly falls back from Ollama to Gemini 1.5 Flash in converseWithCoach when Ollama is offline', async () => {
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({ 
            coachAiModel: 'ollama',
            googleApiKey: 'AIzaSyD1234567890abcdef'
        }));
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        vi.mocked(ollamaModule.callOllama).mockRejectedValueOnce(new Error('Ollama service down'));

        vi.mocked(GoogleGenerativeAI).mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockReturnValue({
                generateContent: vi.fn().mockResolvedValue({
                    response: {
                        text: () => 'Gemini coach fallback response'
                    }
                })
            });
        } as any);

        const reply = await converseWithCoach('Hello coach', []);

        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('[AI Fallback] Ollama failed in converseWithCoach'),
            expect.any(Error)
        );
        expect(reply).toBe('Gemini coach fallback response');
        warnSpy.mockRestore();
    });
});
