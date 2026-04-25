/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";
import { callOllama, isOllamaAvailable } from "./ollama";

type AIProvider = 'ollama' | 'gemini';

// Simple in-memory cache to prevent duplicate requests and save tokens
const aiCache = new Map<string, any>();

const getAIProvider = async (): Promise<AIProvider> => {
    const ollamaUrl = import.meta.env.VITE_OLLAMA_URL;
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Prefer Ollama if configured and available
    if (ollamaUrl) {
        const available = await isOllamaAvailable();
        if (available) return 'ollama';
    }

    // Fallback to Gemini
    if (geminiKey) return 'gemini';

    throw new Error("AI provider not configured. Please set up Ollama or Gemini API key in Settings.");
};

const getGenAI = (userKey?: string) => {
    if (!userKey) {
        throw new Error("AI Kaliti yo'q. Iltimos, Sozlamalar bo'limida Google API kalitingizni kiriting.");
    }
    return new GoogleGenerativeAI(userKey);
};

export const requestWithRetry = async <T>(
    operation: () => Promise<T>,
    retries: number = 2, // Reduced from 3
    delay: number = 3000 // Reduced from 20s to 3s for better UX
): Promise<T> => {
    try {
        return await operation();
    } catch (error: any) {
        // Handle rate limit (429) or quota issues
        const isRateLimit = error?.message?.includes('429') || error?.status === 429 || error?.message?.includes('quota');
        
        if (retries > 0 && isRateLimit) {
            console.warn(`AI Rate limit hit. Retrying in ${delay / 1000}s... (${retries} retries left)`);
            await new Promise(resolve => setTimeout(resolve, delay));
            // Exponential backoff
            return requestWithRetry(operation, retries - 1, delay * 2);
        }
        throw error;
    }
};

/**
 * Generates flashcards using AI. 
 * Supports batching for large counts to prevent output truncation and token waste.
 */
export const generateFlashcardsWithAI = async (
    topic: string,
    count: number = 5,
    userKey?: string
): Promise<{ front: string; back: string }[]> => {
    // Check Cache first
    const cacheKey = `flashcards-${topic}-${count}`;
    if (aiCache.has(cacheKey)) {
        console.log(`[AI Cache] Returning cached flashcards for: ${topic}`);
        return aiCache.get(cacheKey);
    }

    // Batching logic: Gemini 1.5 Flash works best with smaller JSON outputs.
    // If count > 20, we split it into multiple batches of 20 to ensure reliability.
    if (count > 20) {
        const batches = [];
        let remaining = count;
        while (remaining > 0) {
            batches.push(Math.min(remaining, 20));
            remaining -= 20;
        }

        console.log(`[AI Batching] Splitting ${count} cards into ${batches.length} batches (sequential)...`);
        const allCards = [];
        for (const batchCount of batches) {
            const batchResult = await generateFlashcardsWithAI(topic, batchCount, userKey);
            allCards.push(batchResult);
            // Small optional delay between batches to stay under rate limits
            if (batches.length > 1) await new Promise(r => setTimeout(r, 500));
        }
        const merged = allCards.flat();
        aiCache.set(cacheKey, merged);
        return merged;
    }

    const prompt = `
      Topic: "${topic}"
      Task: Create ${count} high-quality flashcards.
      Format: JSON array of {"front": "question", "back": "answer"}. 
      Constraint: No markdown, no intro.
    `;

    try {
        const provider = await getAIProvider();
        let json: any[];

        if (provider === 'ollama') {
            const response = await callOllama(prompt);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            json = JSON.parse(cleanedText);
        } else {
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const result = await requestWithRetry(() => model.generateContent(prompt));
            const response = await result.response;
            const text = response.text();
            const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
            json = JSON.parse(cleanedText);
        }

        if (!Array.isArray(json)) throw new Error("Invalid response format");

        const result = json.slice(0, count).map((item: any) => ({
            front: String(item.front),
            back: String(item.back)
        }));

        // Cache the result
        aiCache.set(cacheKey, result);
        return result;

    } catch (error: unknown) {
        console.error('AI Request Error:', error);
        throw error;
    }
};

// Combined Plan + Resources Interface
export interface FullStudyPlan {
    schedule: {
        title: string;
        dayOffset: number;
        duration: number;
        description?: string;
    }[];
    resources: {
        title: string;
        type: 'video' | 'article' | 'book' | 'course';
        description: string;
        link: string;
    }[];
}

export const generateFullStudyPlan = async (
    topic: string,
    daysUntilExam: number,
    hoursPerDay: number,
    userKey?: string
): Promise<FullStudyPlan> => {
    const cacheKey = `plan-${topic}-${daysUntilExam}-${hoursPerDay}`;
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey);

    const prompt = `
        Act as an expert academic advisor. Create a comprehensive study program for: "${topic}".
        Duration: ${daysUntilExam} days.
        Intensity: ${hoursPerDay} hours/day.

        TASK 1: DAILY SCHEDULE
        Break down the subject into a logical curriculum.
        - Group by concepts.
        - For EACH DAY (0 to ${daysUntilExam - 1}), provide a specific task.
        - Allow 1 Rest Day/Review Day per week if duration > 6 days.

        TASK 2: SMART RESOURCES (Exactly 6 items)
        Recommend high-quality learning materials:
        - 2 VIDEOS (YouTube channels/videos, English & Uzbek mix).
        - 2 ARTICLES/WEBSITES (Docs/Blogs).
        - 2 BOOKS or COURSES.
        - For descriptions, use Uzbek language.
        - For links, if no direct URL, use a specific search query.

        OUTPUT FORMAT:
        Return A SINGLE VALID JSON OBJECT with two keys: "schedule" and "resources".
        
        {
          "schedule": [
            { 
              "title": "Topic Name", 
              "dayOffset": 0, // 0 = Today
              "duration": 60, // minutes
              "description": "Instruction..." 
            }
          ],
          "resources": [
            {
              "title": "Resource Title",
              "type": "video" | "article" | "book" | "course",
              "description": "Short description in Uzbek.",
              "link": "https://... or search query"
            }
          ]
        }
    `;

    try {
        const provider = await getAIProvider();
        let text: string;

        if (provider === 'ollama') {
            text = await callOllama(prompt);
        } else {
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!json.schedule || !Array.isArray(json.schedule)) throw new Error("Invalid Schedule Format");

        const resources = (json.resources || []).map((item: any) => ({
            ...item,
            link: item.link.startsWith('http') ? item.link :
                item.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(item.link)}` :
                    `https://www.google.com/search?q=${encodeURIComponent(item.link)}`
        }));

        const result = {
            schedule: json.schedule,
            resources: resources
        };
        
        aiCache.set(cacheKey, result);
        return result;

    } catch (e) {
        console.error("AI Full Plan Error:", e);
        throw e;
    }
};

export const generateStudyPlanWithAI = async (_topic: string, _days: number, _hours: number, _key?: string) => {
    return [];
};

// Smart Resource Interface
export interface SmartResource {
    title: string;
    type: 'video' | 'article' | 'book' | 'course';
    description: string;
    link?: string;
}

export const recommendResourcesWithAI = async (
    topic: string,
    userKey?: string
): Promise<SmartResource[]> => {
    const cacheKey = `resources-${topic}`;
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey);

    const prompt = `
        Topic: "${topic}"
        Task: Recommend 8 learning resources (2 Videos, 2 Articles, 2 Books, 2 Courses).
        Language: Mix of Uzbek and English.
        Output: JSON array of {"title": "str", "type": "video|article|book|course", "description": "UZB", "link": "URL/Query"}.
    `;

    try {
        const provider = await getAIProvider();
        let text: string;

        if (provider === 'ollama') {
            text = await callOllama(prompt);
        } else {
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Invalid Format");

        const result = json.map((item: any) => ({
            ...item,
            link: item.link.startsWith('http') ? item.link :
                item.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(item.link)}` :
                    `https://www.google.com/search?q=${encodeURIComponent(item.link)}`
        }));
        
        aiCache.set(cacheKey, result);
        return result;
    } catch (e) {
        console.error("Smart Resource Error:", e);
        return [];
    }
};

export const generateStudyInsight = async (
    stats: { subject: string; hours: number; mood: number; pendingTasks: number; masteryScore: number }[],
    userKey?: string
): Promise<{ subject: string; advice: string }[]> => {
    const cacheKey = `insight-${JSON.stringify(stats)}`;
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey);

    const prompt = `
        Stats: ${JSON.stringify(stats)}
        Task: Identify 1-2 weakest subjects.
        Output: JSON array of {"subject": "str", "advice": "UZB"}.
        Limit: Top 2 suggestions.
    `;

    try {
        const provider = await getAIProvider();
        let text: string;

        if (provider === 'ollama') {
            text = await callOllama(prompt);
        } else {
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) return [];
        aiCache.set(cacheKey, json);
        return json;
    } catch (e) {
        console.error("AI Insight Error", e);
        return [];
    }
};
