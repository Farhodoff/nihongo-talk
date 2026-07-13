/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";
import { callOllama } from "./ollama";
import { callDeepSeek } from "./deepseek";

export type AIProvider = 'ollama' | 'gemini' | 'deepseek';

// Persistent cache to prevent duplicate requests across page reloads
const CACHE_PREFIX = 'study_planner_ai_cache_';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

const aiCache = {
    has: (key: string): boolean => {
        const itemStr = localStorage.getItem(CACHE_PREFIX + key);
        if (!itemStr) return false;
        try {
            const item = JSON.parse(itemStr);
            if (Date.now() > item.expiry) {
                localStorage.removeItem(CACHE_PREFIX + key);
                return false;
            }
            return true;
        } catch {
            return false;
        }
    },
    get: (key: string): unknown | undefined => {
        const itemStr = localStorage.getItem(CACHE_PREFIX + key);
        if (!itemStr) return undefined;
        try {
            const item = JSON.parse(itemStr);
            return item.value;
        } catch {
            return undefined;
        }
    },
    set: (key: string, value: unknown): void => {
        const item = {
            value,
            expiry: Date.now() + CACHE_TTL_MS
        };
        try {
            localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(item));
        } catch (e) {
            console.warn('Failed to save to AI cache, possibly quota exceeded', e);
        }
    }
};

export const getAIConfig = () => {
    const savedStr = localStorage.getItem('study_planner_ai_settings');
    let aiModel = 'deepseek';
    let deepseekKey = '';
    let geminiKey = '';

    let deepseekModel: 'deepseek-v4-flash' | 'deepseek-v4-pro' = 'deepseek-v4-flash';
    let deepseekThinkingMode = false;

    if (savedStr) {
        try {
            const saved = JSON.parse(savedStr);
            if (saved.aiModel) aiModel = saved.aiModel;
            if (saved.deepseekApiKey) deepseekKey = saved.deepseekApiKey;
            if (saved.googleApiKey) geminiKey = saved.googleApiKey;
            if (saved.deepseekModel) deepseekModel = saved.deepseekModel;
            if (saved.deepseekThinkingMode !== undefined) deepseekThinkingMode = saved.deepseekThinkingMode;
        } catch (e) {
            console.error("Failed to parse ai settings from localStorage", e);
        }
    }
    return {
        provider: aiModel as AIProvider,
        geminiKey,
        deepseekKey,
        deepseekModel,
        deepseekThinkingMode
    };
};

/**
 * Checks if the user has configured a valid AI API key for their selected provider.
 * Returns true if ready to use AI, false if key is missing.
 */
export const isAIKeyConfigured = (): boolean => {
    // 1. O'z kaliti bormi? (BYOK)
    const config = getAIConfig();
    if (config.provider === 'ollama') return true; 
    if (config.provider === 'deepseek' && config.deepseekKey) return true;
    if (config.provider === 'gemini' && config.geminiKey) return true;

    // 2. Admin obunasi bormi? (Pro yoki Kreditlar)
    const subStr = localStorage.getItem('study_planner_subscription');
    if (subStr) {
        try {
            const sub = JSON.parse(subStr);
            const isPro = sub.tier === 'pro' || sub.tier === 'premium';
            
            const trialDays = 7;
            const isTrialValid = sub.trial_start_date ? 
                (new Date().getTime() - new Date(sub.trial_start_date).getTime()) / (1000 * 3600 * 24) <= trialDays
                : false; // Agar trial start date yo'q bo'lsa trial invalid deb hisoblaymiz (faqat Pro/Premium yoki haqiqiy trial ishlaydi)
                
            if (sub.adminApiKey && (isPro || (isTrialValid && sub.ai_credits > 0))) {
                return true;
            }
        } catch (e) {
            console.error("Failed to parse subscription", e);
        }
    }

    return false;
};


const getAIProvider = async (): Promise<AIProvider> => {
    const config = getAIConfig();
    return config.provider || 'gemini';
};

const getGenAI = (userKey?: string) => {
    let keyToUse = userKey;
    
    // Fallback 1: LocalStorage config
    if (!keyToUse) {
        const config = getAIConfig();
        keyToUse = config.geminiKey;
    }
    
    // Fallback 2: Admin subscription key
    if (!keyToUse) {
        const subStr = localStorage.getItem('study_planner_subscription');
        if (subStr) {
            try {
                const sub = JSON.parse(subStr);
                if (sub.adminApiKey && (sub.tier === 'pro' || sub.ai_credits > 0)) {
                    keyToUse = sub.adminApiKey;
                }
            } catch (e) {
                console.error("Failed to parse subscription", e);
            }
        }
    }

    if (!keyToUse) {
        throw new Error("AI Kaliti yo'q. Iltimos, Sozlamalar bo'limida API kalitingizni kiriting yoki PRO tarifni oling.");
    }
    return new GoogleGenerativeAI(keyToUse);
};

/**
 * Texnik AI xato xabarlarini foydalanuvchiga tushunarli O'zbek tilidagi xabarlarga aylantiradi.
 */
export const parseAIError = (error: unknown): string => {
    const err = error as { message?: string; status?: number };
    const msg = err?.message || '';

    // Quota / Rate limit tugagan
    if (msg.includes('429') || msg.includes('quota') || msg.includes('rate limit') || msg.includes('RESOURCE_EXHAUSTED')) {
        if (msg.includes('FreeTier') || msg.includes('free_tier')) {
            return '⏳ Bepul AI limit bugunlik tugagan. Ertaga qayta urinib ko\'ring yoki Google AI Studio\'da pullik rejaga o\'ting (aistudio.google.com → Settings → Billing).';
        }
        return '⏳ AI so\'rovlar limiti vaqtincha tugadi. Iltimos, bir necha daqiqadan keyin qayta urinib ko\'ring.';
    }

    // API kalit noto'g'ri
    if (msg.includes('API key not valid') || msg.includes('API_KEY_INVALID')) {
        return '🔑 API kalit noto\'g\'ri yoki yaroqsiz. Iltimos, Sozlamalar bo\'limida kalitingizni tekshiring va yangi kalit kiriting.';
    }

    // Model topilmadi
    if (msg.includes('not found') && msg.includes('model')) {
        return '⚠️ AI model topilmadi. Ilova yangilanishi kerak bo\'lishi mumkin. Sahifani yangilab ko\'ring.';
    }

    // Internet / tarmoq xatoligi
    if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('net::')) {
        return '🌐 Internet aloqasi yo\'q yoki server javob bermayapti. Internet ulanishingizni tekshiring.';
    }

    // Umumiy xatolik
    return `❌ AI xatoligi yuz berdi: ${msg.substring(0, 150)}`;
};

import { supabase } from '../lib/supabase';

const decrementCredit = async () => {
    try {
        const subStr = localStorage.getItem('study_planner_subscription');
        if (!subStr) return;
        
        const sub = JSON.parse(subStr);
        // Faqat admin kalitidan foydalanyotgan va "free" tarifidagilar uchun kredit ayiriladi
        if (sub.tier === 'free' && sub.ai_credits > 0) {
            const newCredits = sub.ai_credits - 1;
            sub.ai_credits = newCredits;
            localStorage.setItem('study_planner_subscription', JSON.stringify(sub));
            
            const { data } = await supabase.auth.getSession();
            if (data?.session?.user) {
                await supabase.from('user_subscriptions').update({ ai_credits: newCredits }).eq('id', data.session.user.id);
            }
        }
    } catch(e) {
        console.error("Kredit ayirishda xatolik:", e);
    }
};

export const requestWithRetry = async <T>(
    operation: () => Promise<T>,
    retries: number = 2, // Reduced from 3
    delay: number = 3000 // Reduced from 20s to 3s for better UX
): Promise<T> => {
    try {
        const result = await operation();
        await decrementCredit(); // Muvaffaqiyatli bo'lsa kreditni ayirish
        return result;
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

        // Barcha retrylar tugagandan keyin tushunarli xato berish
        throw new Error(parseAIError(error));
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
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
            json = JSON.parse(response);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash",
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
        let json: unknown[];

        if (provider === 'ollama') {
            const response = await callOllama(prompt);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            json = JSON.parse(cleanedText);
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
            json = JSON.parse(response);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash",
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
        throw new Error(parseAIError(error));
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
    level: 'beginner' | 'intermediate' | 'advanced' = 'beginner',
    learningStyle: 'visual' | 'reading' | 'practical' = 'visual',
    userKey?: string
): Promise<FullStudyPlan> => {
    const cacheKey = `plan-${topic}-${daysUntilExam}-${hoursPerDay}-${level}-${learningStyle}`;
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey) as FullStudyPlan;

    const levelDescriptions = {
        beginner: "This user is completely new to the topic. Explain fundamentals simply and clearly without jargon.",
        intermediate: "This user knows the basics. Skip introductions and focus on core concepts and deeper understanding.",
        advanced: "This user is experienced. Focus entirely on advanced topics, edge cases, best practices, and complex problems."
    };

    const styleDescriptions = {
        visual: "Focus heavily on recommending YouTube video tutorials, visual diagrams, and interactive content.",
        reading: "Focus heavily on recommending official documentation, books, and detailed articles/blogs.",
        practical: "Focus heavily on coding exercises, hands-on projects, platforms like LeetCode/HackerRank, and practical labs."
    };

    const prompt = `
        Sen professional Akademik Mentor va O'quv Rejalashtiruvchi uztozsan.
        Mavzu: "${topic}".
        Muddati: ${daysUntilExam} kun.
        Kunlik vaqt: ${hoursPerDay} soat.
        Foydalanuvchi darajasi: ${level} (${levelDescriptions[level]}).
        O'rganish uslubi: ${learningStyle} (${styleDescriptions[learningStyle]}).

        VAZIFA 1: KUNLIK JADVAL (Kuniga bittadan vazifa)
        Mavzuni foydalanuvchi darajasiga qarab to'g'ri taqsimla.
        - Har bir kun uchun bitta vazifa (0 dan ${daysUntilExam - 1} gacha).
        - Har bir vazifaning "description" qismida: "Nima uchun bu muhim?" va "Qanday qilib amaliyot qilish kerak?" degan savollarga qisqacha o'zbek tilida javob yoz. (Masalan: "Bu tushuncha Reactda holatni boshqarish uchun muhim. Buni amaliyotda Todo app qilib sinab ko'ring.")
        - Agar muddat 6 kundan ko'p bo'lsa, har haftada 1 kunni "Takrorlash (Review)" yoki "Amaliyot" uchun ajrat.

        VAZIFA 2: ENG ZO'R RESURSLAR (Aynan 6 ta taqdim et)
        Foydalanuvchining o'rganish uslubiga (${learningStyle}) eng mos keladigan eng sifatli 6 ta resursni tanla.
        - Ta'riflar (description) albatta o'zbek tilida bo'lishi shart!
        - "link" (havola) qismiga ishlamaydigan fake url bermang! Agar aniq urlni bilmasangiz, qidiruv tizimi urlidan foydalaning. Masalan:
          - Video uchun: "https://www.youtube.com/results?search_query=..."
          - Kitob/Maqola uchun: "https://www.google.com/search?q=..."

        OUTPUT FORMAT:
        Faqat va faqat YAGONA VALID JSON obyekt qaytar. Hech qanday markdown, izoh yoki text qo'shma. JSON struktura quyidagicha bo'lishi shart:
        
        {
          "schedule": [
            { 
              "title": "Vazifa nomi", 
              "dayOffset": 0, // 0 = Bugun
              "duration": ${hoursPerDay * 60}, // minutlarda
              "description": "Nima uchun muhim va qanday amaliyot qilish bo'yicha ko'rsatma..." 
            }
          ],
          "resources": [
            {
              "title": "Resurs nomi (Masalan: 'Traversy Media - React Crash Course')",
              "type": "video" | "article" | "book" | "course",
              "description": "Nima uchun bu resurs yaxshi ekanligi haqida qisqacha o'zbekcha ta'rif.",
              "link": "https://www.youtube.com/results?search_query=react+crash+course"
            }
          ]
        }
    `;

    try {
        const provider = await getAIProvider();
        let text: string;

        if (provider === 'ollama') {
            text = await callOllama(prompt);
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash",
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
        throw new Error(parseAIError(e));
    }
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
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash",
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
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash",
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
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash",
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
        throw new Error(parseAIError(e));
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
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, false, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        return text.replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Expand Note Error", e);
        throw new Error(parseAIError(e));
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
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, false, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        return text.replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Summarize Note Error", e);
        throw new Error(parseAIError(e));
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
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, false, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        return text.replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Fix Spelling Error", e);
        throw new Error(parseAIError(e));
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
      Siz expert darajasidagi Mind Map yaratuvchisiz.
      Foydalanuvchining konspektidan vizual ko'rinishda tushunarli Mermaid.js "mindmap" yoki "graph TD" kodini yarating.
      
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Qoidalar:
      1. Eng asosiy mavzuni markazga qo'ying va tarmoqlang.
      2. Hech qanday tushuntirishsiz, faqatgina toza kod holatida qaytaring (hech qanday \`\`\`mermaid belgilarisiz).
      3. O'zbek tilidan foydalaning.
    `;

    try {
        const provider = await getAIProvider();
        let text: string;

        if (provider === 'ollama') {
            text = await callOllama(prompt);
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            text = await callDeepSeek(prompt, config.deepseekKey || '', undefined, false, config.deepseekModel, config.deepseekThinkingMode);
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const result = await requestWithRetry(() => model.generateContent(prompt));
            text = (await result.response).text();
        }

        return text.replace(/```mermaid/g, "").replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Mind Map Error", e);
        throw new Error(parseAIError(e));
    }
};

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

/**
 * Handles multi-turn chat with the AI, passing context about a specific subject.
 */
export const chatWithAI = async (
    message: string,
    history: ChatMessage[],
    contextContent: string,
    subjectName: string,
    userKey?: string
): Promise<string> => {
    // Construct system instructions
    const systemPrompt = `Siz Study Planner ilovasidagi talabalarga yordam beruvchi do'stona va aqlli o'quv yordamchisisiz (AI Tutor).
Sizning asosiy vazifangiz talabalarga o'z darslarini yaxshiroq o'zlashtirishga yordam berishdir.
Javoblaringiz o'zbek tilida, tushunarli va Markdown formatida (chiroyli qilib) bo'lishi kerak.

Mavzu/Fan nomi: "${subjectName || 'Umumiy'}"

Talabaning ushbu fanga oid konspekt va ma'lumotlari:
"""
${contextContent ? contextContent.substring(0, 10000) : "Foydalanuvchi hali bu fan uchun konspekt kiritmagan."}
"""

Qoidalar:
1. Eng avvalo foydalanuvchining yuqoridagi konspektlaridan kelib chiqib javob bering.
2. Agar foydalanuvchi savoli konspektda bo'lmasa, o'zingizning umumiy bilimlaringizdan foydalanib to'g'ri tushuntiring.
3. Chat tarixini yodda tuting va suhbatga mos javob bering.
`;

    try {
        const provider = await getAIProvider();

            if (provider === 'ollama') {
            // Ollama support for chat is basic, we will prepend history manually
            const conversation = history.slice(-5).map(h => `${h.role === 'user' ? 'Talaba' : 'AI'}: ${h.text}`).join('\n');
            const prompt = `${systemPrompt}\n\nSuhbat tarixi:\n${conversation}\n\nTalaba: ${message}\nAI:`;
            const text = await callOllama(prompt);
            return text.trim();
        } else if (provider === 'deepseek') {
            const config = getAIConfig();
            const conversation = history.slice(-5).map(h => `${h.role === 'user' ? 'Talaba' : 'AI'}: ${h.text}`).join('\n');
            const prompt = `Suhbat tarixi:\n${conversation}\n\nTalaba: ${message}\nAI:`;
            const text = await callDeepSeek(prompt, config.deepseekKey || '', systemPrompt, false, config.deepseekModel, config.deepseekThinkingMode);
            return text.trim();
        } else {
            const config = getAIConfig();
            const genAI = getGenAI(userKey || config.geminiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.0-flash",
                systemInstruction: systemPrompt 
            });

            const chat = model.startChat({
                history: history.slice(-5).map(msg => ({
                    role: msg.role === 'model' ? 'model' : 'user',
                    parts: [{ text: msg.text }],
                })),
            });

            const result = await requestWithRetry(() => chat.sendMessage(message));
            return (await result.response).text().trim();
        }
    } catch (e) {
        console.error("AI Chat Error", e);
        throw new Error(parseAIError(e));
    }
};

export const generateAIResponse = async (
    messages: { role: 'system' | 'user'; content: string }[],
    userKey?: string | null
): Promise<string> => {
    try {
        const config = getAIConfig();
        const apiKey = userKey || config.geminiKey;
        if (!apiKey) throw new Error("API kalit mavjud emas.");
        
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        let prompt = "";
        messages.forEach(m => {
            prompt += `[${m.role.toUpperCase()}]: ${m.content}\n`;
        });

        const result = await model.generateContent(prompt);
        await decrementCredit();
        return result.response.text();
    } catch (error) {
        console.error("AI Error:", error);
        throw new Error(parseAIError(error));
    }
};
