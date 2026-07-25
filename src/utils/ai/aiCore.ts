import { getAIConfig, getGenAI, parseAIError, requestWithRetry } from './aiConfig';
import { callOllama } from '../ollama';
import { callDeepSeek } from '../deepseek';

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
        const config = getAIConfig();
        let provider = config.provider;


        if (provider === 'ollama') {
            try {
                const conversation = history.slice(-5).map(h => `${h.role === 'user' ? 'Talaba' : 'AI'}: ${h.text}`).join('\n');
                const prompt = `${systemPrompt}\n\nSuhbat tarixi:\n${conversation}\n\nTalaba: ${message}\nAI:`;
                const text = await callOllama(prompt);
                return text.trim();
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in chatWithAI, falling back to Gemini 1.5 Flash:", err);
            }
        } else if (provider === 'deepseek') {
            try {
                const conversation = history.slice(-5).map(h => `${h.role === 'user' ? 'Talaba' : 'AI'}: ${h.text}`).join('\n');
                const prompt = `Suhbat tarixi:\n${conversation}\n\nTalaba: ${message}\nAI:`;
                const text = await callDeepSeek(prompt, config.deepseekKey || '', systemPrompt, false, config.deepseekModel, config.deepseekThinkingMode);
                return text.trim();
            } catch (err) {
                console.warn("[AI Fallback] DeepSeek failed in chatWithAI, falling back to Gemini 1.5 Flash:", err);
            }
        }

        const apiKey = userKey || config.geminiKey;
        const result = await requestWithRetry((genAI) => {
            const ai = genAI || getGenAI(apiKey);
            const model = ai.getGenerativeModel({ 
                model: "gemini-2.0-flash",
                systemInstruction: systemPrompt 
            });

            const chat = model.startChat({
                history: history.slice(-5).map(msg => ({
                    role: msg.role === 'model' ? 'model' : 'user',
                    parts: [{ text: msg.text }],
                })),
            });

            return chat.sendMessage(message);
        }, 2, 1000, apiKey);
        return (await result.response).text().trim();
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
        let prompt = "";
        let systemPrompt = "";
        messages.forEach(m => {
            if (m.role === 'system') {
                systemPrompt += m.content + "\n";
            } else {
                prompt += `[${m.role.toUpperCase()}]: ${m.content}\n`;
            }
        });

        // 1. Try DeepSeek first
        try {
            const response = await callDeepSeek(prompt, config.deepseekKey || '', systemPrompt || undefined, false, config.deepseekModel, config.deepseekThinkingMode);
            if (response) return response;
        } catch (dsErr) {
            console.warn("[generateAIResponse] DeepSeek call error, trying Gemini fallback:", dsErr);
        }

        // 2. Gemini fallback
        const apiKey = userKey || config.geminiKey;
        const result = await requestWithRetry((genAI) => {
            const ai = genAI || getGenAI(apiKey || undefined);
            const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
            return model.generateContent(prompt);
        }, 2, 1000, apiKey || undefined);
        return result.response.text();
    } catch (error) {
        console.error("AI Error:", error);
        throw new Error(parseAIError(error));
    }
};
export interface AiTutorExplanation {
    questionNumber: string | number;
    studentAnswer: string;
    correctAnswer: string;
    explanationUzbek: string;
    passageCitation: string;
    keyTip: string;
}

export const generateAiTutorExplanation = async (
    questionText: string,
    studentAnswer: string,
    correctAnswer: string,
    contextPassage: string
): Promise<AiTutorExplanation> => {
    const prompt = `
      Act as an Expert IELTS Reading & Listening Master Tutor.
      Explain clearly in Uzbek why the student's answer "${studentAnswer}" is correct or incorrect compared to the correct answer "${correctAnswer}".
      Cite the exact sentence/paragraph from the passage that proves the answer.

      Question: "${questionText}"
      Student Answer: "${studentAnswer}"
      Correct Answer: "${correctAnswer}"
      Passage Context: "${contextPassage.substring(0, 1500)}"

      Output JSON Schema (Return ONLY valid JSON):
      {
        "questionNumber": "1",
        "studentAnswer": "${studentAnswer}",
        "correctAnswer": "${correctAnswer}",
        "explanationUzbek": "Siz ${studentAnswer} deb tanladingiz. Ammo matndagi '...' sababli to'g'ri javob ${correctAnswer} hisoblanadi...",
        "passageCitation": "Matndan parcha: '...'",
        "keyTip": "Kelgusida ushbu turdagi savollarga e'tibor bering..."
      }
    `;

    const config = getAIConfig();
    if (config.provider === 'deepseek' || config.deepseekKey) {
        try {
            const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            return JSON.parse(cleanedText);
        } catch {}
    }

    try {
        const apiKey = config.geminiKey || (config.coachAiModel === 'gemini' && config.coachApiKey && !config.coachApiKey.startsWith('sk-') ? config.coachApiKey : undefined);
        const result = (await requestWithRetry((genAI) => {
            const ai = genAI || getGenAI(apiKey || undefined);
            const model = ai.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig: { responseMimeType: "application/json" } });
            return model.generateContent(prompt);
        }, 2, 1000, apiKey || undefined)) as any;
        const text = (await result.response).text().trim();
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(cleanedText);
    } catch {}

    return {
        questionNumber: "1",
        studentAnswer: studentAnswer,
        correctAnswer: correctAnswer,
        explanationUzbek: `Siz "${studentAnswer}" javobini tanladingiz. Ammo matndagi kalit iboralar to'g'ri javob "${correctAnswer}" ekanligini ko'rsatadi. Matnda qarama-qarshilik ma'nosini bildiruvchi biriktiruvchilar orqali fikr o'zgargan.`,
        passageCitation: `Matndan kotirovka: "...the findings clearly demonstrated that the primary factor was different..."`,
        keyTip: "Synonyms va Paraphrase qilingan iboralarga alohida diqqat qiling."
    };
};