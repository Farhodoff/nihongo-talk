import { aiCache, getAIConfig, getAIProvider, getGenAI, parseAIError, requestWithRetry } from './aiConfig';
import { callOllama } from '../ollama';
import { callDeepSeek } from '../deepseek';

/**
 * Generates flashcards using AI. 
 * Supports batching for large counts to prevent output truncation and token waste.
 */
export const generateFlashcardsWithAI = async (
    topic: string,
    count: number = 5,
    userKey?: string,
    previousQuestions: string[] = []
): Promise<{ front: string; back: string }[]> => {
    // Check Cache first
    const cacheKey = `flashcards-${topic}-${count}`;
    if (aiCache.has(cacheKey)) {
        console.log(`[AI Cache] Returning cached flashcards for: ${topic}`);
        return aiCache.get(cacheKey) as { front: string; back: string }[];
    }

    // Batching logic: Gemini 1.5/2.0 and Deepseek can handle large outputs (up to 8k tokens).
    // But to be safe against smaller Ollama models, we split into batches of 50.
    if (count > 50) {
        const batches = [];
        let remaining = count;
        while (remaining > 0) {
            batches.push(Math.min(remaining, 50));
            remaining -= 50;
        }

        console.log(`[AI Batching] Splitting ${count} cards into ${batches.length} batches (sequential)...`);
        const allCards: { front: string; back: string }[] = [];
        const generatedQuestions: string[] = [];
        for (const batchCount of batches) {
            const batchResult = await generateFlashcardsWithAI(topic, batchCount, userKey, generatedQuestions);
            allCards.push(...batchResult);
            generatedQuestions.push(...batchResult.map(c => c.front));
            // Small optional delay between batches to stay under rate limits
            if (batches.length > 1) await new Promise(r => setTimeout(r, 500));
        }
        
        // Final deduplication in JS just in case AI ignores the prompt constraint
        const uniqueCardsMap = new Map();
        for (const card of allCards) {
            if (card && card.front && !uniqueCardsMap.has(card.front.toLowerCase())) {
                uniqueCardsMap.set(card.front.toLowerCase(), card);
            }
        }
        const merged = Array.from(uniqueCardsMap.values());
        
        aiCache.set(cacheKey, merged);
        return merged;
    }

    const prompt = `
      Topic: "${topic}"
      Task: Create ${count} high-quality, educational flashcards about this topic.
      Language: Detect the language of the topic and use it for the flashcards (e.g., if topic is in Uzbek, flashcards should be in Uzbek).
      Output Format: A VALID JSON array of objects. Each object must have "front" and "back" keys.
      ${previousQuestions.length > 0 ? `CRITICAL CONSTRAINT: Do NOT generate flashcards with these questions (they are already generated):\n${previousQuestions.map(q => `- ${q}`).join('\n')}\n` : ''}
      Example: [{"front": "What is 2+2?", "back": "4"}]
      Constraint: ONLY return the JSON array. Do not include any markdown formatting, preamble, or explanation.
      Constraint 2: ALL flashcards must be completely unique and cover different aspects of the topic.
    `;

    try {
        const config = getAIConfig();
        let provider = config.provider;

        let json: unknown[] | null = null;

        if (provider === 'ollama') {
            try {
                const response = await callOllama(prompt);
                const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
                json = JSON.parse(cleanedText);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateFlashcardsWithAI, falling back to Gemini 1.5 Flash:", err);
            }
        } else if (provider === 'deepseek') {
            try {
                const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
                json = JSON.parse(response);
            } catch (err) {
                console.warn("[AI Fallback] DeepSeek failed in generateFlashcardsWithAI, falling back to Gemini 1.5 Flash:", err);
            }
        }

        if (!json) {
            try {
                const apiKey = userKey || config.geminiKey;
                const result = await requestWithRetry((genAI) => {
                    const ai = genAI || getGenAI(apiKey);
                    const model = ai.getGenerativeModel({ 
                        model: "gemini-2.0-flash",
                        generationConfig: {
                            temperature: 0.7,
                            topP: 0.95,
                            topK: 40,
                            maxOutputTokens: 8192,
                            responseMimeType: "application/json",
                        }
                    });
                    return model.generateContent(prompt);
                }, 2, 1000, apiKey);
                const response = await result.response;
                const text = response.text();
                
                let cleanedText = text.trim();
                if (cleanedText.startsWith('```')) {
                    cleanedText = cleanedText.replace(/```json/g, "").replace(/```/g, "").trim();
                }
                
                json = JSON.parse(cleanedText) as unknown[];
            } catch (geminiErr) {
                console.warn("[AI Fallback] Gemini failed in generateFlashcardsWithAI, attempting DeepSeek fallback...", geminiErr);
                // Fallback to DeepSeek if configured or available
                if (config.deepseekKey || config.provider === 'deepseek') {
                    try {
                        const dsResponse = await callDeepSeek(
                            prompt,
                            config.deepseekKey || '',
                            undefined,
                            true,
                            config.deepseekModel,
                            config.deepseekThinkingMode
                        );
                        const cleanedText = dsResponse.replace(/```json/g, "").replace(/```/g, "").trim();
                        json = JSON.parse(cleanedText);
                    } catch (dsErr) {
                        console.warn("[AI Fallback] DeepSeek fallback also failed:", dsErr);
                        throw geminiErr;
                    }
                } else {
                    throw geminiErr;
                }
            }
        }

        if (!Array.isArray(json)) throw new Error("Invalid response format");

        const result = json.slice(0, count).map((item: unknown) => {
            const card = item as { front?: string; back?: string };
            return {
                front: String(card.front || ''),
                back: String(card.back || '')
            };
        });

        // Cache the result
        aiCache.set(cacheKey, result);
        return result;

    } catch (error: unknown) {
        console.error('AI Request Error:', error);
        throw new Error(parseAIError(error));
    }
};

/**
 * Generates flashcards based on a specific study note (markdown content).
 */
export const generateFlashcardsFromNote = async (
    noteContent: string,
    count: number = 5,
    userKey?: string
): Promise<{ front: string; back: string }[]> => {
    const prompt = `
      Note Content: "${noteContent.substring(0, 4000)}"
      Task: Create ${count} educational flashcards based EXACTLY on the information in the note above.
      Language: Use the same language as the note content (Uzbek or English).
      Output Format: A VALID JSON array of objects with "front" and "back" keys.
      Constraint: ONLY return the JSON array. No preamble or markdown.
    `;

    try {
        const provider = await getAIProvider();
        let json: unknown[] | null = null;

        if (provider === 'ollama') {
            try {
                const response = await callOllama(prompt);
                const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
                json = JSON.parse(cleanedText);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateFlashcardsFromNote, falling back to Gemini 1.5 Flash:", err);
            }
        } else if (provider === 'deepseek') {
            try {
                const config = getAIConfig();
                const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
                json = JSON.parse(response);
            } catch (err) {
                console.warn("[AI Fallback] DeepSeek failed in generateFlashcardsFromNote, falling back to Gemini 1.5 Flash:", err);
            }
        }

        if (!json) {
            const config = getAIConfig();
            const apiKey = userKey || config.geminiKey;
            const result = await requestWithRetry((genAI) => {
                const ai = genAI || getGenAI(apiKey);
                const model = ai.getGenerativeModel({ 
                    model: "gemini-2.0-flash",
                    generationConfig: {
                        temperature: 0.7,
                        responseMimeType: "application/json",
                    }
                });
                return model.generateContent(prompt);
            }, 2, 1000, apiKey);
            const response = await result.response;
            const text = response.text();
            
            let cleanedText = text.trim();
            if (cleanedText.startsWith('```')) {
                cleanedText = cleanedText.replace(/```json/g, "").replace(/```/g, "").trim();
            }
            json = JSON.parse(cleanedText);
        }

        if (!Array.isArray(json)) throw new Error("Invalid response format");

        return json.slice(0, count).map((item: unknown) => {
            const card = item as { front?: string; back?: string };
            return {
                front: String(card.front || ''),
                back: String(card.back || '')
            };
        });

    } catch (error: unknown) {
        console.error('AI Flashcards from Note Error:', error);
        throw new Error(parseAIError(error));
    }
};