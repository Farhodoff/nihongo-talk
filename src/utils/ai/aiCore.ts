import { getAIConfig, parseAIError, callGeminiFallback } from './aiConfig';
import { callOllama } from '../ollama';
import { callDeepSeek } from '../deepseek';

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

/**
 * Universal AI Dispatcher that routes prompt execution based on user's active provider selection in Settings.
 * Supports: 'ollama' (Local Ollama), 'gemini' (Google Gemini), and 'deepseek' (DeepSeek).
 */
export const callSelectedAIProvider = async (
    prompt: string,
    systemPrompt?: string,
    isJson: boolean = false
): Promise<string> => {
    const config = getAIConfig();

    if (config.provider === 'ollama') {
        try {
            const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt;
            const text = await callOllama(fullPrompt);
            if (text && text.trim()) return text.trim();
        } catch (err) {
            console.warn("[AI Fallback] Ollama failed in callSelectedAIProvider, attempting fallback to DeepSeek/Gemini:", err);
        }
    } else if (config.provider === 'gemini') {
        try {
            const text = await callGeminiFallback(prompt, systemPrompt);
            if (text && text.trim()) return text.trim();
        } catch (err) {
            console.warn("[AI Dispatcher] Gemini execution failed, attempting fallback to DeepSeek:", err);
        }
    }

    // Default / DeepSeek provider
    return await callDeepSeek(
        prompt,
        config.deepseekKey || '',
        systemPrompt,
        isJson,
        config.deepseekModel,
        config.deepseekThinkingMode
    );
};

/**
 * Detects user intent to provide accurate, helpful assistance without hallucinations.
 */
export function detectUserIntent(message: string): 'video_generation' | 'video_search' | 'video_prompt' | 'general' {
    const lower = message.toLowerCase();
    if (/video.*(qidir|topib|top|search|find|smotret|posmotret|qayerda)/i.test(lower) ||
        /(qidir|topib|top|search|find).*video/i.test(lower)) {
        return 'video_search';
    }
    if (/prompt.*video|video.*prompt|storyboard|script.*video|video.*script/i.test(lower)) {
        return 'video_prompt';
    }
    if (/video.*(qil|yarat|tayyorla|generate|create|render|animatsiya|sdelat|sozdat)/i.test(lower) ||
        /(qil|yarat|tayyorla|generate|create|render|sozdat|sdelat).*video/i.test(lower)) {
        return 'video_generation';
    }
    return 'general';
}

/**
 * Handles multi-turn chat with the AI, passing context about a specific subject.
 */
export const chatWithAI = async (
    message: string,
    history: ChatMessage[],
    contextContent: string,
    subjectName: string,
    _userKey?: string
): Promise<string> => {
    const systemPrompt = `Siz Kaizen AI (Study Planner) platformasidagi do'stona, professional va intellektual o'quv yordamchisisiz (AI Tutor & Assistant).

MUHIM QOIDALAR (STRICT CAPABILITY & LANGUAGE RULES):
1. LANGUAGE CONSISTENCY:
   - Foydalanuvchi qaysi tilda murojaat qilsa (O'zbekcha, English, Русский, 日本語 va h.k.), AYNAN O'SHA TILDA javob bering.
   - O'zbek tilidagi murojaatga ruscha yoki boshqa tilda javob bermang. Rus tilidagi murojaatga ruscha javob bering. Ingliz tilidagi murojaatga inglizcha javob bering.

2. CAPABILITY AWARENESS & NO HALLUCINATED LIMITATIONS:
   - Siz matnli AI yordamchisiz.
   - HECH QACHON "Bugun video yaratib bo'lmaydi", "Сегодня создать видео уже не получится", "Bugun limit tugadi", "Server band", "Keyinroq urinib ko'ring" kabi o'ylab topilgan vaqtinchalik bahonalar qilmang.
   - Agar foydalanuvchi video yoki animatsiya yaratishni so'rasa:
     * To'g'ridan-to'g'ri MP4 video faylini chatda render qilib bo'lmasligini 1 ta qisqa jumlada ayting.
     * DARHOL foydalanuvchiga amaliy va foydali yechim taqdim eting: AI Video vositalari (Runway Gen-3, Midjourney, Luma Dream Machine, Sora, Pika) uchun tayyor Promptlar, Sahna ko'rinishlari (Storyboard), Dialog va Ovozli matn (Voiceover Script) yozib bering.
   - Agar foydalanuvchi video qidirishni so'rasa: aniq qidiruv kalit so'zlari, YouTube/ta'lim kanallari va mavzu bo'yicha tavsiyalarni bering.
   - Agar foydalanuvchi video prompt so'rasa: to'g'ridan-to'g'ri batafsil video promptlarini taqdim eting.
   - Dars, grammatika, IELTS, JLPT, fan konspektlari, rejalashtirish yoki dasturlash bo'yicha so'rovlarga to'liq, amaliy va aniq javob bering.

3. CONTEXT & PEDAGOGY:
   - Mavzu/Fan nomi: "${subjectName || 'Umumiy'}"
   - Talabaning ushbu fanga oid konspekt va ma'lumotlari:
"""
${contextContent ? contextContent.substring(0, 10000) : "Foydalanuvchi hali bu fan uchun konspekt kiritmagan."}
"""
   - Agar konspekt mavjud bo'lsa, undan foydalaning. Agar yo'q bo'lsa, umumiy bilimlaringiz asosida javob bering.
   - Javoblarni chiroyli Markdown formatida taqdim eting.
`;

    try {
        const conversation = history.slice(-5).map(h => `${h.role === 'user' ? 'Student' : 'AI'}: ${h.text}`).join('\n');
        const prompt = `Suhbat tarixi:\n${conversation}\n\nStudent: ${message}\nAI:`;
        const text = await callSelectedAIProvider(prompt, systemPrompt, false);
        return text.trim();
    } catch (e) {
        console.error("AI Chat Error", e);
        throw new Error(parseAIError(e));
    }
};

export const generateAIResponse = async (
    messages: { role: 'system' | 'user'; content: string }[],
    _userKey?: string | null
): Promise<string> => {
    try {
        let prompt = "";
        let systemPrompt = "";
        messages.forEach(m => {
            if (m.role === 'system') {
                systemPrompt += m.content + "\n";
            } else {
                prompt += `[${m.role.toUpperCase()}]: ${m.content}\n`;
            }
        });

        const response = await callSelectedAIProvider(prompt, systemPrompt || undefined, false);
        return response || '';
    } catch (error) {
        console.error("AI Error:", error);
        throw new Error(parseAIError(error));
    }
};

export interface AiTutorExplanation {
    questionNumber: string | number;
    studentAnswer: string;
    correctAnswer: string;
    explanation: string;
}

export const generateAiTutorExplanations = async (
    examTitle: string,
    wrongAnswers: { questionNumber: string | number; questionText: string; studentAnswer: string; correctAnswer: string }[]
): Promise<AiTutorExplanation[]> => {
    if (wrongAnswers.length === 0) return [];

    const prompt = `
      Siz Tajribali O'qituvchi / AI Tutorsiz.
      Talaba "${examTitle}" imtihonida quyidagi savollardan xato qildi.
      
      Har bir xato qilingan savol uchun:
      1. Nega talabaning javobi xato ekanligini o'zbek tilida tushuntiring.
      2. Nega to'g'ri javob to'g'riligini aniq misol yoki qoida bilan ko'rsating.
      
      Xatolar ro'yxati:
      ${JSON.stringify(wrongAnswers, null, 2)}

      Javobni FAQAT QUYIDAGI JSON FORMATIDA qaytaring (hech qanday qo'shimcha matnsiz):
      [
        {
          "questionNumber": 1,
          "studentAnswer": "xato javob",
          "correctAnswer": "to'g'ri javob",
          "explanation": "Tushuntirish matni..."
        }
      ]
    `;

    try {
        const text = await callSelectedAIProvider(prompt, undefined, true);
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(cleanedText);
    } catch (err) {
        console.error("AI Tutor Explanations Error:", err);
        return wrongAnswers.map(wa => ({
            questionNumber: wa.questionNumber,
            studentAnswer: wa.studentAnswer,
            correctAnswer: wa.correctAnswer,
            explanation: `Ushbu savol bo'yicha to'g'ri javob: "${wa.correctAnswer}". Tahlil vaqtida xatolik yuz berdi.`
        }));
    }
};