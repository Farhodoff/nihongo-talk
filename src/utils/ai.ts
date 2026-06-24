/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";
import { callOllama, isOllamaAvailable } from "./ollama";

type AIProvider = 'ollama' | 'gemini';

// Simple in-memory cache to prevent duplicate requests and save tokens
const aiCache = new Map<string, unknown>();

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
    } catch (error: unknown) {
        // Handle rate limit (429) or quota issues
        const err = error as { message?: string; status?: number };
        const isRateLimit = err?.message?.includes('429') || err?.status === 429 || err?.message?.includes('quota');
        
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
        return aiCache.get(cacheKey) as { front: string; back: string }[];
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
      Task: Create ${count} high-quality, educational flashcards about this topic.
      Language: Detect the language of the topic and use it for the flashcards (e.g., if topic is in Uzbek, flashcards should be in Uzbek).
      Output Format: A VALID JSON array of objects. Each object must have "front" and "back" keys.
      Example: [{"front": "What is 2+2?", "back": "4"}]
      Constraint: ONLY return the JSON array. Do not include any markdown formatting, preamble, or explanation.
    `;

    try {
        const provider = await getAIProvider();
        let json: unknown[];

        if (provider === 'ollama') {
            const response = await callOllama(prompt);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            json = JSON.parse(cleanedText);
        } else {
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.95,
                    topK: 40,
                    maxOutputTokens: 8192,
                    responseMimeType: "application/json",
                }
            });

            const result = await requestWithRetry(() => model.generateContent(prompt));
            const response = await result.response;
            const text = response.text();
            
            // Even with responseMimeType, let's be safe
            let cleanedText = text.trim();
            if (cleanedText.startsWith('```')) {
                cleanedText = cleanedText.replace(/```json/g, "").replace(/```/g, "").trim();
            }
            
            json = JSON.parse(cleanedText);
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
        throw error;
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
        let json: unknown[];

        if (provider === 'ollama') {
            const response = await callOllama(prompt);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            json = JSON.parse(cleanedText);
        } else {
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                generationConfig: {
                    temperature: 0.7,
                    responseMimeType: "application/json",
                }
            });

            const result = await requestWithRetry(() => model.generateContent(prompt));
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
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey) as FullStudyPlan;

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
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                generationConfig: { responseMimeType: "application/json" }
            });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!json.schedule || !Array.isArray(json.schedule)) throw new Error("Invalid Schedule Format");

        const resources = (json.resources || []).map((item: unknown) => {
            const resource = item as { title: string; type: 'video' | 'article' | 'book' | 'course'; description: string; link: string };
            return {
                ...resource,
                link: resource.link.startsWith('http') ? resource.link :
                    resource.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(resource.link)}` :
                        `https://www.google.com/search?q=${encodeURIComponent(resource.link)}`
            };
        });

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

export const generateStudyPlanWithAI = async (): Promise<unknown[]> => {
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
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey) as SmartResource[];

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
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                generationConfig: { responseMimeType: "application/json" }
            });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Invalid Format");

        const result = json.map((item: unknown) => {
            const resource = item as { title: string; type: 'video' | 'article' | 'book' | 'course'; description: string; link: string };
            return {
                ...resource,
                link: resource.link.startsWith('http') ? resource.link :
                    resource.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(resource.link)}` :
                        `https://www.google.com/search?q=${encodeURIComponent(resource.link)}`
            };
        });
        
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
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey) as { subject: string; advice: string }[];

    const prompt = `
        Foydalanuvchi o'quv statistikasi: ${JSON.stringify(stats)}
        Vazifa: Eng ko'p e'tibor talab qiladigan 1-2 ta fanni aniqlang va aniq, motivatsiya beruvchi maslahat bering.
        
        Maslahat berishda quyidagilarga e'tibor bering:
        - Agar masteryScore < 50 bo'lsa: Ko'proq flashcard yaratishni va SRS orqali takrorlashni maslahat bering.
        - Agar pendingTasks > 3 bo'lsa: Vazifalarni kichik qismlarga bo'lishni va Pomodoro taymeridan foydalanishni taklif qiling.
        - Agar soatlar kam bo'lsa: Kuniga kamida 30 daqiqa ajratish muhimligini ayting.
        
        Javob Formati: Faqat JSON array ko'rinishida bo'lsin: [{"subject": "Fan nomi", "advice": "O'zbek tilida aniq maslahat"}].
        Cheklov: Maksimal 2 ta taklif. Kirish so'zlari yoki qo'shimcha matn qo'shmang.
    `;

    try {
        const provider = await getAIProvider();
        let text: string;

        if (provider === 'ollama') {
            text = await callOllama(prompt);
        } else {
            const genAI = getGenAI(userKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                generationConfig: { responseMimeType: "application/json" }
            });
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

export interface ExamQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export const generateExamWithAI = async (
    subjectName: string,
    notesContent: string,
    questionCount: number = 5,
    userKey?: string
): Promise<ExamQuestion[]> => {
    const prompt = `
      Fan nomi: "${subjectName}"
      Fanga oid Konspektlar va Flashcardlar: "${notesContent.substring(0, 4000)}"
      
      Vazifa: Yuqoridagi ma'lumotlar va fan nomi asosida aynan ${questionCount} ta multiple choice (savol va 4 ta variantli) test savollarini yarating. 
      Savollar fanga va konspektlarga mos bo'lsin. Agar konspekt bo'sh bo'lsa, fanga oid umumiy bilimlar bo'yicha savol bering.
      Til: O'zbek tili.
      
      Javob Formati: Faqat quyidagi strukturali VALID JSON array bo'lsin, boshqa hech qanday matn (preamble, markdown belgilari va h.k.) qo'shmang:
      [
        {
          "id": 1,
          "question": "Savol matni",
          "options": ["Variant A", "Variant B", "Variant C", "Variant D"],
          "correctAnswer": 0,
          "explanation": "Bu javobning to'g'riligi sababi va boshqa variantlar noto'g'riligi izohi (O'zbek tilida)"
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
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                generationConfig: { 
                    temperature: 0.7,
                    responseMimeType: "application/json" 
                }
            });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Format xato");
        return json.map((item: unknown) => {
            const temp = item as { id?: number; question?: string; options?: string[]; correctAnswer?: number; explanation?: string };
            return {
                id: Number(temp.id || 0),
                question: String(temp.question || ''),
                options: Array.isArray(temp.options) ? temp.options.map(String) : [],
                correctAnswer: Number(temp.correctAnswer ?? 0),
                explanation: String(temp.explanation || '')
            };
        });
    } catch (e) {
        console.error("AI Exam Generation Error", e);
        throw e;
    }
};

export const expandNoteWithAI = async (
    content: string,
    subjectName: string,
    userKey?: string
): Promise<string> => {
    const prompt = `
      Fan: "${subjectName}"
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Vazifa: Ushbu konspekt matnini o'rganilayotgan fan doirasida kengaytiring va batafsilroq ma'lumotlar bilan boyiting. 
      Qo'shimcha ilmiy faktlar, tushunchalar va aniq misollar qo'shing.
      Format: Markdown formatidan foydalaning.
      Til: O'zbek tili.
      Cheklov: Faqat yangilangan, kengaytirilgan konspekt matnini qaytaring, boshqa hech qanday izoh, sarlavha yoki kirish so'zlarini yozmang.
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

        return text.replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Expand Note Error", e);
        throw e;
    }
};

export const summarizeNoteWithAI = async (
    content: string,
    subjectName: string,
    userKey?: string
): Promise<string> => {
    const prompt = `
      Fan: "${subjectName}"
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Vazifa: Ushbu konspekt matnini qisqacha xulosalang (summary yarating). Muhim tushunchalar va asosiy fikrlarni saqlab qoling.
      Format: Markdown formatidan foydalaning (qisqa bandlar/punktlar shaklida bo'lsin).
      Til: O'zbek tili.
      Cheklov: Faqat tayyor xulosani qaytaring, boshqa hech qanday qo'shimcha kirish yoki tushuntirish yozmang.
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

        return text.replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Summarize Note Error", e);
        throw e;
    }
};

export const fixNoteSpellingWithAI = async (
    content: string,
    subjectName: string,
    userKey?: string
): Promise<string> => {
    const prompt = `
      Fan: "${subjectName}"
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Vazifa: Ushbu konspekt matnidagi barcha grammatik, imlo va tinish belgilari xatolarini tuzatib chiqing. Matn mazmuni va uslubini o'zgartirmang, faqat to'g'ri yozilishini ta'minlang.
      Format: Markdown formatida bo'lsin.
      Til: O'zbek tili.
      Cheklov: Faqat tuzatilgan tayyor matnni qaytaring, boshqa hech qanday izoh yozmang.
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

        return text.replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Fix Spelling Error", e);
        throw e;
    }
};

/**
 * Generates Mermaid.js Mind Map code based on user notes.
 */
export const generateMindMapWithAI = async (
    content: string,
    userKey?: string
): Promise<string> => {
    const prompt = `
      Siz expert darajasidagi Mind Map (Aqliy xarita) yaratuvchisiz.
      Foydalanuvchining quyidagi konspekt matnidan vizual ko'rinishda go'zal va tushunarli Mermaid.js mindmap yoki graph kodini yarating.
      
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Qoidalar:
      1. Matndagi eng asosiy mavzuni markazga, undan tarmoqlanadigan qismlarni mantiqiy tarzda ajrating.
      2. Format sifatida "mindmap" yoki "graph TD" dan foydalanishingiz mumkin. "mindmap" formati ustunroq.
      3. Mermaid kodini hech qanday tushuntirishsiz, faqatgina toza kod holatida qaytaring (hech qanday \`\`\`mermaid va \`\`\` belgilarisiz).
      4. O'zbek tilidan foydalaning.
      
      Misol (graph TD uchun):
      graph TD;
      A[Markaziy Mavzu] --> B[Qism 1];
      A --> C[Qism 2];
      
      Misol (mindmap uchun):
      mindmap
        root((Markaziy Mavzu))
          Qism 1
            Kichik qism 1.1
          Qism 2
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

        return text.replace(/```mermaid/g, "").replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Mind Map Error", e);
        throw e;
    }
};
