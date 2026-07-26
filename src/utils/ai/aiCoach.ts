import { getAIConfig, getAIProvider, getGenAI, parseAIError, requestWithRetry } from './aiConfig';
import { callOllama } from '../ollama';
import { callDeepSeek } from '../deepseek';

export interface SpeechAnalysisResult {
    grammar_corrections: string[];
    better_vocabulary: { original: string; suggested: string }[];
    fluency_score: number;
    overall_feedback: string;
}

export const analyzeSpeech = async (
    transcript: string,
    topic: string = 'General Conversation',
    userKey?: string
): Promise<SpeechAnalysisResult> => {
    const prompt = `
      Act as an expert English language Speaking Coach (like an IELTS examiner).
      The user was asked to talk about: "${topic}".
      Here is the exact transcript of what they said:
      "${transcript}"
      
      Task: Analyze the transcript and provide feedback.
      Output Format: A VALID JSON object with the following keys exactly:
      - "grammar_corrections": An array of strings, pointing out grammar mistakes and how to fix them.
      - "better_vocabulary": An array of objects with "original" and "suggested" keys to improve their word choice.
      - "fluency_score": A number out of 9.0 (IELTS band scale) estimating their fluency based on the text coherence.
      - "overall_feedback": A short, encouraging paragraph summarizing their performance and areas to improve.

      Constraint: ONLY return the JSON object. Do not include any markdown formatting, preamble, or explanation.
    `;

    try {
        const provider = await getAIProvider();
        let json: unknown = null;

        if (provider === 'ollama') {
            try {
                const response = await callOllama(prompt);
                const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
                json = JSON.parse(cleanedText);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in analyzeSpeech, falling back to Gemini 1.5 Flash:", err);
            }
        } else if (provider === 'deepseek') {
            try {
                const config = getAIConfig();
                const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
                json = JSON.parse(response);
            } catch (err) {
                console.warn("[AI Fallback] DeepSeek failed in analyzeSpeech, falling back to Gemini 1.5 Flash:", err);
            }
        }

        if (!json) {
            const config = getAIConfig();
            const apiKey = userKey || config.geminiKey;
            const result = await requestWithRetry((genAI) => {
                const ai = genAI || getGenAI(apiKey || undefined);
                const model = ai.getGenerativeModel({ 
                    model: "gemini-2.0-flash",
                    generationConfig: {
                        temperature: 0.7,
                        responseMimeType: "application/json",
                    }
                });
                return model.generateContent(prompt);
            }, 2, 1000, apiKey || undefined);
            const response = await result.response;
            const text = response.text();
            
            let cleanedText = text.trim();
            if (cleanedText.startsWith('```')) {
                cleanedText = cleanedText.replace(/```json/g, "").replace(/```/g, "").trim();
            }
            json = JSON.parse(cleanedText);
        }

        const data = json as any;
        return {
            grammar_corrections: Array.isArray(data.grammar_corrections) ? data.grammar_corrections : [],
            better_vocabulary: Array.isArray(data.better_vocabulary) ? data.better_vocabulary : [],
            fluency_score: typeof data.fluency_score === 'number' ? data.fluency_score : 5.0,
            overall_feedback: data.overall_feedback || 'Good effort, keep practicing!',
        };
    } catch (error: unknown) {
        console.error('AI Speech Analysis Error:', error);
        throw new Error(parseAIError(error));
    }
};

export const converseWithCoach = async (
    message: string,
    history: { role: 'user' | 'assistant', content: string }[],
    language: 'en' | 'ja' = 'en',
    persona: string = 'roast',
    userKey?: string
): Promise<string> => {
    // Keep last 6 messages to optimize token usage & ensure fast responses
    const recentHistory = history.slice(-6);
    const historyText = recentHistory.map(h => `${h.role === 'user' ? 'Student' : 'Coach'}: ${h.content}`).join('\n');
    
    let personaPrompt = '';

    if (language === 'ja') {
        switch (persona) {
            case 'keigo':
                personaPrompt = `You are a Master Japanese Business & Honorific Language Trainer (敬語・ビジネス日本語マスター).
                   Pedagogical Goals:
                   1. Teach precise usage of Sonkeigo (尊敬語 - e.g. おっしゃる, いらっしゃる), Kenjougo (謙譲語 - e.g. 申す, 参る), and Teineigo (丁寧語 - です/ます).
                   2. When the student makes a honorific error (e.g. using '行く' or '言う' casually), politely correct them with exact Sonkeigo/Kenjougo forms.
                   3. Cover business phone etiquette, email greetings (お世話になっております), and customer interactions.
                   4. Provide Romaji in parentheses () and Uzbek translation in brackets [] at the end of responses.`;
                break;
            case 'interview':
                personaPrompt = `You are a Professional Corporate Hiring Director at a top Tokyo Tech Enterprise (日本企業の採用面接官).
                   Pedagogical Goals:
                   1. Conduct realistic Japanese Job Interviews (就職面接).
                   2. Ask about Jikoshoukai (自己紹介), Shibou Douki (志望動機), and project experience using the PREP method (Point, Reason, Example, Point).
                   3. Provide instantaneous polite corrections for business manners and Keigo. Ask ONE clear interview question per turn.`;
                break;
            case 'examiner':
            case 'ielts':
                personaPrompt = `You are an Official JLPT Oral Proficiency Examiner (JLPT会話実技試験官).
                   Pedagogical Goals:
                   1. Assess Japanese speaking across N5 to N1 levels.
                   2. Test grammar structures (~に関して, ~わけだ, ~ざるを得ない), sentence connectors, and vocabulary range.
                   3. Provide constructive feedback, correct particle misuses (は vs が, に vs で), and challenge the student with level-appropriate questions.`;
                break;
            case 'gentle':
                personaPrompt = `You are Ken-sensei (優しい日本語の先生), a warm, supportive, and patient Japanese tutor.
                   Pedagogical Goals:
                   1. Speak in clear, friendly polite Japanese (です・ます調).
                   2. Praise student efforts, explain difficult Kanji/vocabulary simply, and gently offer correct Japanese phrasing without overwhelming the student.`;
                break;
            case 'travel':
                personaPrompt = `You are an authentic Japanese Travel & Airport Concierge (空港入国審査官・ホテルコンシェルジュ).
                   Pedagogical Goals:
                   1. Roleplay real-world Japan travel scenarios: Narita airport immigration, hotel check-in, ordering at Izakayas, asking for Shinkansen directions.
                   2. Use authentic conversational Japanese expressions (いらっしゃいませ, 少々お持ちください, お会計).`;
                break;
            case 'casual':
                personaPrompt = `You are Ren (蓮), a friendly Tokyo native chatting in casual Japanese (タメ口の友達).
                   Pedagogical Goals:
                   1. Speak naturally in informal Japanese (タメ口, ~じゃん, ~つ言ってた, ~んだよね), everyday slang, and informal contractions (~てる, ~なきゃ).
                   2. Chat casually about hobbies, anime, food, Tokyo spots, and daily lifestyle.`;
                break;
            default: // 'roast' -> Oni Sensei (鬼先生)
                personaPrompt = `You are Oni-Sensei (鬼先生 / Demon Coach), an extremely strict, sarcastic, but highly effective Japanese Language Coach.
                   Pedagogical Goals:
                   1. Eliminate non-native Japanese flaws: particle errors (は vs が, に vs で), incorrect Keigo, and literal English/Uzbek translations.
                   2. Roast flaws with sharp, humorous Japanese sarcasm, then immediately give the precise native Japanese correction and explanation.`;
                break;
        }
    } else { // English
        switch (persona) {
            case 'ielts':
                personaPrompt = `You are a Senior Official IELTS Speaking Examiner with 20+ years of British Council & IDP experience.
                   Pedagogical Goals:
                   1. Conduct authentic Part 1, Part 2 (Cue Card), and Part 3 questions.
                   2. Evaluate strictly on Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.
                   3. Upgrade Band 5/6 words ('very good', 'nice', 'big', 'happy') to Band 8/9 academic alternatives ('exceptional', 'paramount', 'substantial', 'ecstatic').`;
                break;
            case 'interview':
                personaPrompt = `You are a Tech Hiring Manager and Executive Recruiter at a Silicon Valley firm.
                   Pedagogical Goals:
                   1. Conduct structured mock technical and behavioral interviews.
                   2. Evaluate responses using the STAR method (Situation, Task, Action, Result).
                   3. Challenge candidate answers on clarity, impact metrics, technical depth, and executive communication.`;
                break;
            case 'gentle':
                personaPrompt = `You are Sarah, a warm, patient, and encouraging English ESL Tutor.
                   Pedagogical Goals:
                   1. Build student confidence and encourage active speaking.
                   2. Praise their effort first, then gently offer natural native alternatives (e.g. "Instead of 'I am agree', natives say 'I completely agree'").
                   3. Ask engaging, low-pressure follow-up questions.`;
                break;
            case 'travel':
                personaPrompt = `You are an international Airport Customs Officer, Hotel Manager, and Tour Guide.
                   Pedagogical Goals:
                   1. Roleplay authentic travel situations (immigration control, flight delays, restaurant reservations, asking directions, emergency help).
                   2. Teach practical, high-utility native travel idioms and phrases.`;
                break;
            case 'casual':
                personaPrompt = `You are Alex, a fun, energetic native English friend hanging out.
                   Pedagogical Goals:
                   1. Chat about movies, tech, travel, music, and daily life using natural idioms, phrasal verbs, modern slang, and casual banter.
                   2. Keep the dialogue spontaneous, fun, and natural.`;
                break;
            default: // 'roast' -> Ramsay style
                personaPrompt = `You are Gordon, an extremely strict, hilarious, and ruthless English Speaking Coach (Gordon Ramsay style).
                   Pedagogical Goals:
                   1. Ruthlessly call out lazy vocabulary ('very good', 'nice', 'bad'), filler words ('um', 'like', 'you know'), and grammatical errors.
                   2. Roast mistakes with sharp, witty banter, then instantly demonstrate the Band 9 native English phrasing.`;
                break;
        }
    }

    const prompt = `
      ${personaPrompt}
      Language: ${language === 'ja' ? 'Japanese (日本語)' : 'English'}
      
      Conversation History:
      ${historyText}

      Student's current message:
      "${message}"
      
      Constraint: Keep your response SHORT, conversational, and natural to be read aloud by Text-to-Speech (maximum 2-3 sentences). Do NOT use any markdown formatting, asterisks, emojis, or structural text like "Coach:". Respond ONLY with the raw spoken text to the student.
    `;

    try {
        const config = getAIConfig();
        
        // --- 1. TRY OLLAMA FIRST IF SELECTED ---
        if (config.coachAiModel === 'ollama') {
            try {
                const response = await callOllama(prompt);
                if (response) return response;
            } catch (err: any) {
                console.warn("[AI Fallback] Ollama failed in converseWithCoach, falling back to Gemini 1.5 Flash:", err);
            }
        }
        
        // --- 2. TRY DEEPSEEK SECOND IF USER HAS SK- KEY OR DEEPSEEK PROVIDER ---
        const dsKeyToUse = (userKey && userKey.trim().startsWith('sk-') ? userKey.trim() : undefined)
            || (config.coachApiKey && config.coachApiKey.trim().startsWith('sk-') ? config.coachApiKey.trim() : undefined) 
            || (config.deepseekKey && config.deepseekKey.trim().startsWith('sk-') ? config.deepseekKey.trim() : undefined);
        
        if (dsKeyToUse || config.coachAiModel === 'deepseek' || config.provider === 'deepseek') {
            try {
                const dsResult = await callDeepSeek(prompt, dsKeyToUse, undefined, false, config.deepseekModel || 'deepseek-chat', config.deepseekThinkingMode);
                if (dsResult) return dsResult;
            } catch (deepseekErr: any) {
                console.warn("[AI Coach] DeepSeek call error, trying Gemini fallback:", deepseekErr?.message || deepseekErr);
            }
        }

        // --- 3. TRY GEMINI WITH AUTOMATIC KEY ROTATION & VALID MODEL FALLBACK ---
        const geminiKeyToUse = (userKey && userKey.trim() && !userKey.startsWith('sk-') ? userKey.trim() : undefined)
            || (config.geminiKey && config.geminiKey.trim() && !config.geminiKey.startsWith('sk-') ? config.geminiKey.trim() : undefined)
            || (config.coachApiKey && !config.coachApiKey.startsWith('sk-') ? config.coachApiKey.trim() : undefined);

        const models = ["gemini-2.0-flash", "gemini-2.0-flash-lite-preview-02-05", "gemini-1.5-flash", "gemini-1.5-pro"];

        for (const modelName of models) {
            try {
                const result = await requestWithRetry((genAI) => {
                    const ai = genAI || getGenAI(geminiKeyToUse);
                    const model = ai.getGenerativeModel({ model: modelName });
                    return model.generateContent(prompt);
                }, 2, 600, geminiKeyToUse);
                const textResult = result.response.text();
                if (textResult) return textResult;
            } catch (err: any) {
                console.warn(`[AI Coach] Gemini model ${modelName} limited or failed, trying next:`, err?.message || err);
            }
        }

        // --- 4. RETRY DEEPSEEK AS LAST RESORT IF NOT TRIED YET ---
        if (!dsKeyToUse) {
            try {
                const dsResult = await callDeepSeek(prompt, undefined, undefined, false, config.deepseekModel, false);
                if (dsResult) return dsResult;
            } catch (e) {
                console.debug('Fallback DeepSeek failed:', e);
            }
        }

        // --- 5. SAFE LANGUAGE-AWARE FALLBACK RESPONSE ---
        if (language === 'ja' || (typeof prompt === 'string' && (prompt.includes('Japanese') || prompt.includes('Kaiwa')))) {
            return 'はい、素晴らしいですね！日本語で話を続けましょう！ (Hai, subarashii desu ne! Nihongo de hanashi wo tsudukemashou!) [Juda yaxshi! Yapon tilida muloqotni davom ettiramiz.]';
        }
        return 'I understand! Let\'s continue our speaking practice.';
    } catch (error: unknown) {
        console.error('AI Coach Conversation Error:', error);
        if (error instanceof Error && (error.message.startsWith('⏳') || error.message.startsWith('🔑') || error.message.startsWith('⚠️') || error.message.startsWith('🌐') || error.message.startsWith('❌'))) {
            throw error;
        }
        throw new Error(parseAIError(error));
    }
};

/**
 * Fetches TTS audio blob from OpenAI's audio/speech endpoint
 */
export const fetchOpenAITTS = async (
    text: string, 
    voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer', 
    apiKey: string
): Promise<Blob> => {
    try {
        const response = await fetch('https://api.openai.com/v1/audio/speech', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'tts-1',
                input: text,
                voice: voice
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`OpenAI TTS Error: ${response.status} - ${errText}`);
        }

        return await response.blob();
    } catch (error: unknown) {
        console.error('OpenAI TTS API Error:', error);
        throw error;
    }
};

export interface SessionAnalysisReport {
    fluency_score: number;
    pronunciation_score: number;
    pronunciation_feedback: string;
    pronunciation_errors: { word: string; correctionHelp: string }[];
    grammar_corrections: { original: string; corrected: string; explanation: string }[];
    better_vocabulary: { original: string; suggested: string; context: string }[];
    overall_feedback: string;
    strengths: string[];
    areas_to_improve: string[];
}

export const analyzeSpeakingSession = async (
    history: { role: 'user' | 'assistant'; content: string }[],
    language: 'en' | 'ja' = 'en',
    persona: string = 'roast'
): Promise<SessionAnalysisReport> => {
    const userMessages = history.filter(h => h.role === 'user').map(h => h.content);
    if (userMessages.length === 0) {
        return {
            fluency_score: 0,
            pronunciation_score: 0,
            pronunciation_feedback: "Talaffuz tahlili uchun suhbatda gaplar aytilishi lozim.",
            pronunciation_errors: [],
            grammar_corrections: [],
            better_vocabulary: [],
            overall_feedback: "Suhbatda hali hech qanday gap aytilmadi.",
            strengths: ["Suhbatni boshlashga urindingiz!"],
            areas_to_improve: ["Ovozli suhbatni sinab ko'rish uchun ko'proq gapiring."]
        };
    }

    const conversationText = history.map(h => `${h.role === 'user' ? 'Student' : 'Coach'}: ${h.content}`).join('\n');

    const prompt = `
      Act as an expert ${language === 'ja' ? 'Japanese (日本語)' : 'English'} Language Examiner & Speaking Analyst.
      The student just completed a speaking session in the scenario/persona: "${persona}".
      
      Full Transcript:
      ${conversationText}

      Task: Analyze ALL student responses and provide a JSON feedback report.
      Identify phoneme stress, intonation patterns, grammatical flaws, and lexical alternatives.
      Language of explanation: Uzbek (O'zbek tilida tushuntiring).
      
      Output Format (Strictly valid JSON):
      {
        "fluency_score": 8.0,
        "pronunciation_score": 7.5,
        "pronunciation_feedback": "Intonatsiya va urg'u bo'yicha tahlil (in Uzbek)...",
        "pronunciation_errors": [
          {
            "word": "incorrectly pronounced word",
            "correctionHelp": "How to fix it or correct stress help in Uzbek"
          }
        ],
        "grammar_corrections": [
          {
            "original": "Student's flawed sentence",
            "corrected": "Corrected native sentence",
            "explanation": "Short explanation in Uzbek of why it was wrong"
          }
        ],
        "better_vocabulary": [
          {
            "original": "basic word like 'good'",
            "suggested": "Band 8/native word like 'exceptional'",
            "context": "Context or example sentence in Uzbek"
          }
        ],
        "overall_feedback": "Paragraph in Uzbek summarizing performance with constructive tips.",
        "strengths": ["Strong point 1 in Uzbek", "Strong point 2"],
        "areas_to_improve": ["Improvement tip 1 in Uzbek", "Improvement tip 2"]
      }

      Constraint: Return ONLY valid JSON without any markdown formatting or extra text.
    `;

    try {
        const config = getAIConfig();
        const provider = config.coachAiModel || config.provider || 'deepseek';
        const deepseekKey = (config.coachApiKey && config.coachApiKey.trim()) || (config.deepseekKey && config.deepseekKey.trim());

        let data: any = null;

        if (provider === 'ollama') {
            try {
                const response = await callOllama(prompt);
                const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
                data = JSON.parse(cleanedText);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in analyzeSpeakingSession, falling back to Gemini 1.5 Flash:", err);
            }
        } else if (provider === 'deepseek') {
            try {
                const response = await callDeepSeek(prompt, deepseekKey, undefined, true, config.deepseekModel, config.deepseekThinkingMode);
                data = JSON.parse(response);
            } catch (err) {
                console.warn("[AI Fallback] DeepSeek failed in analyzeSpeakingSession, falling back to Gemini 1.5 Flash:", err);
            }
        }

        if (!data) {
            const apiKey = config.geminiKey || (config.coachAiModel === 'gemini' && config.coachApiKey && !config.coachApiKey.startsWith('sk-') ? config.coachApiKey : undefined);
            const result = (await requestWithRetry((genAI) => {
                const ai = genAI || getGenAI(apiKey || undefined);
                const model = ai.getGenerativeModel({
                    model: "gemini-2.0-flash",
                    generationConfig: { responseMimeType: "application/json" }
                });
                return model.generateContent(prompt);
            }, 2, 1000, apiKey || undefined)) as any;
            const text = (await result.response).text().trim();
            const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
            data = JSON.parse(cleanedText);
        }

        return {
            fluency_score: typeof data.fluency_score === 'number' ? data.fluency_score : 7.0,
            pronunciation_score: typeof data.pronunciation_score === 'number' ? data.pronunciation_score : 7.0,
            pronunciation_feedback: data.pronunciation_feedback || "Talaffuzingiz yaxshi, urg'uga biroz e'tibor bering.",
            pronunciation_errors: Array.isArray(data.pronunciation_errors) ? data.pronunciation_errors : [],
            grammar_corrections: Array.isArray(data.grammar_corrections) ? data.grammar_corrections : [],
            better_vocabulary: Array.isArray(data.better_vocabulary) ? data.better_vocabulary : [],
            overall_feedback: data.overall_feedback || "Yaxshi harakat qildingiz, mashq qilishni davom eting!",
            strengths: Array.isArray(data.strengths) ? data.strengths : ["Faol ishtirok etdingiz"],
            areas_to_improve: Array.isArray(data.areas_to_improve) ? data.areas_to_improve : ["Grammatikani oshirish"]
        };
    } catch (err) {
        console.error("Session Analysis Error:", err);
        return {
            fluency_score: 6.5,
            pronunciation_score: 6.5,
            pronunciation_feedback: "Sessiya tugadi. Kelgusida talaffuzingiz ustida ishlashni davom eting.",
            pronunciation_errors: [],
            grammar_corrections: [],
            better_vocabulary: [],
            overall_feedback: "Suhbat yakunlandi. Keyingi gal yanada ko'proq mashq qiling!",
            strengths: ["Suhbatni yakunladingiz"],
            areas_to_improve: ["Ko'proq suhbatlashish"]
        };
    }
};

export const translateTextToUzbek = async (text: string): Promise<string> => {
    const prompt = `
      Translate the following text into clear, natural Uzbek (O'zbek tili).
      Return ONLY the Uzbek translation without explanations, markdown, or quotation marks.

      Text to translate:
      "${text}"
    `;

    try {
        const config = getAIConfig();
        const provider = config.coachAiModel || config.provider || 'deepseek';

        if (provider === 'deepseek' || (config.deepseekKey && config.deepseekKey.startsWith('sk-'))) {
            try {
                const dsKey = config.deepseekKey || config.coachApiKey;
                const dsResult = await callDeepSeek(prompt, dsKey, undefined, false, config.deepseekModel, config.deepseekThinkingMode);
                if (dsResult) return dsResult.trim().replace(/^["']|["']$/g, '');
            } catch (e) {
                console.warn("[Translate Fallback] DeepSeek failed, attempting Gemini...", e);
            }
        }

        const geminiKeyToUse = config.geminiKey 
            || (config.coachAiModel === 'gemini' && config.coachApiKey && !config.coachApiKey.startsWith('sk-') ? config.coachApiKey : undefined);

        if (geminiKeyToUse) {
            try {
                const result = await requestWithRetry((genAI) => {
                    const ai = genAI || getGenAI(geminiKeyToUse);
                    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
                    return model.generateContent(prompt);
                }, 2, 1000, geminiKeyToUse) as any;

                const translation = (await result.response).text().trim();
                if (translation) return translation.replace(/^["']|["']$/g, '');
            } catch (err) {
                console.warn("[Translate Fallback] Gemini failed, attempting DeepSeek...", err);
            }
        }

        const fallbackDsResult = await callDeepSeek(prompt, config.coachApiKey || config.deepseekKey, undefined, false, config.deepseekModel, config.deepseekThinkingMode);
        if (fallbackDsResult) return fallbackDsResult.trim().replace(/^["']|["']$/g, '');

        throw new Error("API keys unavailable for translation");
    } catch (err) {
        console.error("Translation Error:", err);
        return "Tarjima qilishda xatolik yuz berdi.";
    }
};