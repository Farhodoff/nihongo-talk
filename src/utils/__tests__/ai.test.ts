import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generateFlashcardsFromNote, analyzeSpeech, getGeminiAPIKeys, markKeyRateLimited, getGenAI, requestWithRetry, validateSpeechInput, converseWithCoach, analyzeSpeakingSession, generateAITimetable } from '../ai';
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
    });

    it('falls back to Gemini 1.5 Flash if callOllama throws in generateFlashcardsFromNote', async () => {
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({ 
            aiModel: 'ollama',
            googleApiKey: 'AIzaSyD1234567890abcdef'
        }));
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        vi.mocked(ollamaModule.callOllama).mockRejectedValueOnce(new Error('Ollama offline'));

        const cards = await generateFlashcardsFromNote('Note text', 1);

        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('[AI Fallback] Ollama failed in generateFlashcardsFromNote'),
            expect.any(Error)
        );
        expect(cards).toEqual([{ front: 'Question 1', back: 'Answer 1' }]);
        warnSpy.mockRestore();
    });

    it('falls back to Gemini 1.5 Flash if callDeepSeek throws in analyzeSpeech', async () => {
        const mockSpeechResponse = {
            grammar_corrections: ['Fix typo'],
            better_vocabulary: [{ original: 'good', suggested: 'excellent' }],
            fluency_score: 7.5,
            overall_feedback: 'Nice attempt!'
        };

        localStorage.setItem('study_planner_ai_settings', JSON.stringify({ 
            aiModel: 'deepseek', 
            deepseekApiKey: 'sk-invalid',
            googleApiKey: 'AIzaSyD1234567890abcdef'
        }));
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        vi.mocked(deepseekModule.callDeepSeek).mockRejectedValueOnce(new Error('DeepSeek 404'));

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

        const analysis = await analyzeSpeech('I talk about study', 'Study');

        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('[AI Fallback] DeepSeek failed in analyzeSpeech'),
            expect.any(Error)
        );
        expect(analysis.fluency_score).toBe(7.5);
        expect(analysis.grammar_corrections).toEqual(['Fix typo']);
        warnSpy.mockRestore();
    });
});

describe('Gemini Key Rotation & Multi-Key Format Safeguards', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
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

    it('uses fallback model chain when primary model returns 404 / error in converseWithCoach', async () => {
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({ 
            googleApiKey: 'AIzaSyD1234567890abcdef'
        }));
        vi.mocked(GoogleGenerativeAI).mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockImplementation(({ model }: { model: string }) => {
                if (model === 'gemini-1.5-flash') {
                    throw new Error('404 Model Not Found');
                }
                return {
                    generateContent: vi.fn().mockResolvedValue({
                        response: { text: () => 'Fallback response from coach' }
                    })
                };
            });
        } as any);

        const response = await converseWithCoach('Hello coach', []);
        expect(response).toBe('Fallback response from coach');
    });

    it('rotates keys and blacklists rate-limited key when converseWithCoach receives 429 rate limit', async () => {
        const multiKeys = "AIzaSyKeyAAAA1111, AIzaSyKeyBBBB2222";
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({
            googleApiKey: multiKeys
        }));
        let callCount = 0;
        vi.mocked(GoogleGenerativeAI).mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockImplementation(() => ({
                generateContent: vi.fn().mockImplementation(async () => {
                    callCount++;
                    if (callCount === 1) {
                        throw new Error("429 RESOURCE_EXHAUSTED: Rate limit exceeded (15 RPM)");
                    }
                    return {
                        response: { text: () => 'Rotated key response' }
                    };
                })
            }));
        } as any);

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const response = await converseWithCoach('Hello coach', []);
        expect(response).toBe('Rotated key response');
        expect(callCount).toBe(2);
        warnSpy.mockRestore();
    });

    it('rotates keys and blacklists rate-limited key when analyzeSpeakingSession receives 429 rate limit', async () => {
        const multiKeys = "AIzaSyKeyAAAA1111, AIzaSyKeyBBBB2222";
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({
            googleApiKey: multiKeys
        }));
        let callCount = 0;
        vi.mocked(GoogleGenerativeAI).mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockImplementation(() => ({
                generateContent: vi.fn().mockImplementation(async () => {
                    callCount++;
                    if (callCount === 1) {
                        throw new Error("429 RESOURCE_EXHAUSTED: Rate limit exceeded (15 RPM)");
                    }
                    return {
                        response: { text: () => JSON.stringify({ fluency_score: 8.0, overall_feedback: "Great!" }) }
                    };
                })
            }));
        } as any);

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const report = await analyzeSpeakingSession([{ role: 'user', content: 'Testing report' }]);
        expect(report.fluency_score).toBe(8.0);
        expect(callCount).toBe(2);
        warnSpy.mockRestore();
    });

    it('rotates keys and blacklists rate-limited key when generateAITimetable receives 429 rate limit', async () => {
        const multiKeys = "AIzaSyKeyAAAA1111, AIzaSyKeyBBBB2222";
        localStorage.setItem('study_planner_ai_settings', JSON.stringify({
            googleApiKey: multiKeys
        }));
        let callCount = 0;
        vi.mocked(GoogleGenerativeAI).mockImplementation(function (this: any, key: string) {
            this.apiKey = key;
            this.getGenerativeModel = vi.fn().mockImplementation(() => ({
                generateContent: vi.fn().mockImplementation(async () => {
                    callCount++;
                    if (callCount === 1) {
                        throw new Error("429 RESOURCE_EXHAUSTED: Rate limit exceeded (15 RPM)");
                    }
                    return {
                        response: { text: () => JSON.stringify([{ title: "Math", description: "Study math", date: "2026-07-22", startTime: "10:00", durationMinutes: 60, eventType: "study" }]) }
                    };
                })
            }));
        } as any);

        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const timetable = await generateAITimetable('Learn math', 2, 1);
        expect(timetable.length).toBe(1);
        expect(timetable[0].title).toBe('Math');
        expect(callCount).toBe(2);
        warnSpy.mockRestore();
    });
});


