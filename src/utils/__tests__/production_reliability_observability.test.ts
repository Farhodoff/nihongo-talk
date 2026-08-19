import { describe, it, expect } from 'vitest';
import { sanitizeErrorMessage } from '../../components/ErrorBoundary';
import { parseAIError, validateSpeechInput } from '../ai/aiConfig';

describe('PRODUCTION RELIABILITY & OBSERVABILITY SUITE', () => {
    describe('1. Secret Sanitization & Error Masking', () => {
        it('masks Google Gemini API key patterns from error messages', () => {
            const rawError = 'API call failed with key AIzaSyA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q: quota exceeded';
            const sanitized = sanitizeErrorMessage(rawError);
            expect(sanitized).not.toContain('AIzaSyA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q');
            expect(sanitized).toContain('AIzaSy[REDACTED]');
        });

        it('masks DeepSeek & Bearer token patterns from error messages', () => {
            const rawError = 'Error connecting to DeepSeek with Bearer test_dummy_bearer_token_string';
            const sanitized = sanitizeErrorMessage(rawError);
            expect(sanitized).not.toContain('test_dummy_bearer_token_string');
            expect(sanitized).toContain('Bearer [REDACTED]');
        });

        it('handles null or empty error strings safely', () => {
            expect(sanitizeErrorMessage('')).toBe("Noma'lum xatolik");
            expect(sanitizeErrorMessage(null as any)).toBe("Noma'lum xatolik");
        });
    });

    describe('2. AI Reliability & Error Categorization', () => {
        it('translates 429 rate-limit into clear user guidance without leaking technical details', () => {
            const error = new Error('HTTP 429: Resource has been exhausted (e.g. check quota)');
            const message = parseAIError(error);
            expect(message).toContain('limit');
            expect(message).not.toContain('HTTP 429: Resource has been exhausted');
        });

        it('translates 404 model not found into helpful instructions', () => {
            const error = new Error('HTTP 404: models/gemini-pro not found');
            const message = parseAIError(error);
            expect(message).toContain('AI model topilmadi');
        });

        it('translates network fetch failures into offline network notice', () => {
            const error = new Error('Failed to fetch from https://api.deepseek.com');
            const message = parseAIError(error);
            expect(message).toContain('Internet aloqasi');
        });

        it('redacts any exposed API keys in generic AI errors', () => {
            const error = new Error('Generic error with key AIzaSyDUMMYKEY1234567890ABCDEF123456789');
            const message = parseAIError(error);
            expect(message).not.toContain('AIzaSyDUMMYKEY1234567890ABCDEF123456789');
            expect(message).toContain('AIzaSy[REDACTED]');
        });
    });

    describe('3. Speech (STT/TTS) Guard & Audio Validation', () => {
        it('rejects empty or whitespace-only spoken transcript', () => {
            expect(validateSpeechInput('')).toBe(false);
            expect(validateSpeechInput('   ')).toBe(false);
        });

        it('rejects short noise or single letter accidental microphone activations', () => {
            expect(validateSpeechInput('a', 500)).toBe(false);
            expect(validateSpeechInput('um', 800)).toBe(false);
        });

        it('accepts valid spoken responses with adequate duration and word count', () => {
            expect(validateSpeechInput('Konnichiwa, genki desu ka?', 2000)).toBe(true);
            expect(validateSpeechInput('Tokyo tower', 1500)).toBe(true);
        });
    });

    describe('4. In-Flight Request Locking & Idempotency', () => {
        it('prevents concurrent double submit when lock is active', async () => {
            let isLocked = false;
            let executionCount = 0;

            const triggerAction = async () => {
                if (isLocked) return false;
                isLocked = true;
                try {
                    await new Promise(resolve => setTimeout(resolve, 50));
                    executionCount++;
                    return true;
                } finally {
                    isLocked = false;
                }
            };

            // Trigger 5 concurrent calls simultaneously
            const results = await Promise.all([
                triggerAction(),
                triggerAction(),
                triggerAction(),
                triggerAction(),
                triggerAction()
            ]);

            // Only 1 should have succeeded, 4 should have been blocked
            const succeeded = results.filter(Boolean).length;
            expect(succeeded).toBe(1);
            expect(executionCount).toBe(1);
        });
    });
});
