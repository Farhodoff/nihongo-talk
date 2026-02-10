/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";
import { callOllama, isOllamaAvailable } from "./ollama";

type AIProvider = 'ollama' | 'gemini';

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

const requestWithRetry = async <T>(
    operation: () => Promise<T>,
    retries: number = 3,
    delay: number = 20000 // Start with 20s
): Promise<T> => {
    try {
        return await operation();
    } catch (error: any) {
        if (retries > 0 && (error?.message?.includes('429') || error?.status === 429 || error?.message?.includes('quota'))) {
            console.warn(`Rate limit hit. Retrying in ${delay / 1000}s...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            // Exponential backoff: 20s -> 60s -> 120s
            return requestWithRetry(operation, retries - 1, delay * 3);
        }
        throw error;
    }
};

// ... (Flashcard function omitted for brevity as it is unchanged) ...
export const generateFlashcardsWithAI = async (
    topic: string,
    count: number = 5,
    userKey?: string
): Promise<{ front: string; back: string }[]> => {
    const prompt = `
      Task: Create ${count} high-quality flashcards for study purposes.
      Source Material or Topic: "${topic}"

      Instructions:
      1. If the source is a topic, generate key concepts.
      2. If the source is text/notes, extract key facts.
      3. "Front" should be a clear question or term.
      4. "Back" should be a concise answer or definition.
      
      Output Format:
      Return ONLY a valid JSON array of objects. No markdown formatting.
      [{"front": "Question?", "back": "Answer"}]
    `;

    try {
        const provider = await getAIProvider();

        if (provider === 'ollama') {
            // Use Ollama
            const response = await callOllama(prompt);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            const json = JSON.parse(cleanedText);

            if (!Array.isArray(json)) throw new Error("Invalid response format");

            return json.slice(0, count).map((item: any) => ({
                front: String(item.front),
                back: String(item.back)
            }));
        } else {
            // Use Gemini (fallback)
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const result = await requestWithRetry(() => model.generateContent(prompt));
            const response = await result.response;
            const text = response.text();
            const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
            const json = JSON.parse(cleanedText);

            if (!Array.isArray(json)) throw new Error("Invalid response format");

            return json.slice(0, count).map((item: any) => ({
                front: String(item.front),
                back: String(item.back)
            }));
        }
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

        // Optimize links in resources
        const resources = (json.resources || []).map((item: any) => ({
            ...item,
            link: item.link.startsWith('http') ? item.link :
                item.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(item.link)}` :
                    `https://www.google.com/search?q=${encodeURIComponent(item.link)}`
        }));

        return {
            schedule: json.schedule,
            resources: resources
        };

    } catch (e) {
        console.error("AI Full Plan Error:", e);
        throw e;
    }
};

// Keep old functions for backward compatibility if needed, but export them
// Keep old functions for backward compatibility if needed, but export them
export const generateStudyPlanWithAI = async (_topic: string, _days: number, _hours: number, _key?: string) => {
    // Legacy wrapper stub
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
    const prompt = `
        Act as an expert academic advisor. Find 8 high-quality, preferably FREE learning resources for the topic: "${topic}".
        
        CRITICAL INSTRUCTION: You MUST return exactly 8 items. Do not skip any category.
        
        REQUIRED COMPOSITION:
        1.  **2 VIDEOS** (YouTube channels/videos). Mix of English & Uzbek.
        2.  **2 ARTICLES/WEBSITES** (Docs/Blogs).
        3.  **2 BOOKS** (MANDATORY). If no specific book exists, recommend a general textbook for the field.
        4.  **2 COURSES** (MANDATORY). If no specific course exists, recommend a related playlist or Coursera/EdX course.

        LANGUAGE:
        - Prioritize UZBEK resources where possible (minimum 3-4 items).
        - Use ENGLISH for the rest (Global standard).

        Return ONLY a valid JSON array of objects:
        [
          {
            "title": "Resource Title",
            "type": "video" | "article" | "book" | "course",
            "description": "Short description in Uzbek (mention 'Bepul' if free).",
            "link": "Search query or URL"
          }
        ]
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

        // Optimize links for search if they aren't URLs
        return json.map((item: any) => ({
            ...item,
            link: item.link.startsWith('http') ? item.link :
                item.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(item.link)}` :
                    `https://www.google.com/search?q=${encodeURIComponent(item.link)}`
        }));
    } catch (e) {
        console.error("Smart Resource Error:", e);
        return [];
    }
};

export const generateStudyInsight = async (
    stats: { subject: string; hours: number; mood: number; pendingTasks: number; masteryScore: number }[],
    userKey?: string
): Promise<{ subject: string; advice: string }[]> => {
    const prompt = `
        Analyze these study stats and identify 1-2 weakest subjects.
        Prioritize subjects with LOW MASTERY SCORE (< 50%) or LOW MOOD.
        Stats: ${JSON.stringify(stats)}
        
        Return a JSON array with "subject" and "advice" (in Uzbek language).
        Give specific, encouraging advice to improve mastery and performance.
        Example: [{"subject": "Math", "advice": "Matematikadan o'zlashtirish darajangiz past (30%)..."}]
        Limit to top 2 suggestions.
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
        return json;
    } catch (e) {
        console.error("AI Insight Error", e);
        return [];
    }
};
