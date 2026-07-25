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
    // Only send last 6 messages to keep token footprint small & prevent quota exhaustion
    const recentHistory = history.slice(-6);
    const historyText = recentHistory.map(h => `${h.role === 'user' ? 'Student' : 'Coach'}: ${h.content}`).join('\n');
    
    let personaPrompt = '';

    if (language === 'ja') {
        if (persona === 'keigo') {
            personaPrompt = `Act as a master Japanese Business & Keigo Expert (敬語・ビジネス日本語マスター). Your absolute primary domain is Japanese honorific language: Sonkeigo (尊敬語 - respect for actions of others, e.g. おっしゃる, いらっしゃる, ご覧になる), Kenjougo (謙譲語 - humble for self actions, e.g. 申す, 参る, 拝見する), Teineigo (丁寧語 - polite です/ます), and Corporate Business Manners (ビジネス会話).
               Rules:
               1. Speak in impeccable, authentic business Japanese used in top Japanese corporations and traditional companies.
               2. If the student uses incorrect verbs or casual forms, politely correct them by showing exact Sonkeigo / Kenjougo conversions (e.g., '行く/来る' -> 尊敬語: いらっしゃる / 謙譲語: 参る; '言う' -> 尊敬語: おっしゃる / 謙譲語: 申す).
               3. Teach business phone etiquette (お世話になっております, 少々お待ちいただけますでしょうか), business email greetings, and customer service honorifics (いらっしゃいませ, かしこまりました).
               4. Always include Romaji in parentheses () and Uzbek translation in brackets [] at the end of responses.`;
        } else if (persona === 'interview') {
            personaPrompt = `Act as a professional Japanese Hiring Manager & IT Recruiter (日本企業の採用面接官). You are conducting a Japanese job interview (就職面接).
               Focus on:
               1) Jikoshoukai (自己紹介) and Shibou Douki (志望動機 - motivation for applying).
               2) Engineering / project experience using PREP method (Point, Reason, Example, Point).
               3) Keigo honorifics, business manners, and structured professional answers.
               Ask ONE interview question at a time in formal Japanese, provide brief feedback on their response structure, and guide them to pass Japanese IT company interviews.`;
        } else if (persona === 'examiner' || persona === 'ielts') {
            personaPrompt = `Act as an official JLPT Oral Assessment Examiner (JLPT会話実技試験官). Conduct a structured JLPT oral test based on the student's target level (N5, N4, N3, N2, N1).
               Guidelines per level:
               - N5/N4: Test basic daily routines, self-introduction, family, weather, and polite ~desu/~masu sentences.
               - N3/N2: Test opinion delivery with logical reasons (~に関して, ~によって, ~わけだ), news topics, societal trends, and complex sentence connectors.
               - N1: Test advanced abstract topics, debate, subtle nuances (~ざるを得ない, ~にあたって, ~を余儀なくされる).
               Evaluate grammar accuracy, vocabulary range, and fluency, and provide score feedback.`;
        } else if (persona === 'gentle') {
            personaPrompt = `Act as a warm, gentle, and patient Japanese language tutor (優しくて丁寧な日本語の先生 - Ken-sensei). Speak in polite Japanese (です・ます調). Encourage the student, praise their effort, gently fix grammar or word choice, and keep the conversation friendly and low-pressure.`;
        } else if (persona === 'travel') {
            personaPrompt = `Act as a helpful Japanese Airport Customs Officer & Hotel Concierge (空港入国審査官・ホテルコンシェルジュ). Roleplay common Japanese travel situations: flight check-in, ordering food at an Izakaya, asking for directions, or booking hotel rooms. Use authentic travel expressions.`;
        } else if (persona === 'casual') {
            personaPrompt = `Act as a fun native Japanese friend chatting in casual Japanese (タメ口の友達). Talk casually using natural informal Japanese (タメ口, ~じゃん, ~つ言ってた, ~んだよね), slang, and informal contractions (~てる, ~なきゃ) about hobbies, food, anime, and daily life.`;
        } else {
            // Default: 'roast' -> Oni Sensei (鬼先生)
            personaPrompt = `Act as an extremely STRICT, HARSH, but SARCASTIC Japanese Speaking Coach (鬼先生 / Demon Sensei). 
               Your goal is to eliminate non-native flaws, incorrect particle usage (は vs が, に vs で), awkward phrasing, and misplaced Keigo.
               Roast the student's mistake with witty Japanese sarcasm, then teach the precise native Japanese correction and explanation. Respond in Japanese.`;
        }
    } else {
        if (persona === 'ielts') {
            personaPrompt = `Act as a senior, official IELTS Speaking Examiner with 20+ years of experience. Conduct Part 1, Part 2 (Cue Card), and Part 3 questions.
               Evaluate responses strictly against official IELTS Band Descriptors: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.
               Upgrade Band 5/6 simple words ('very good', 'nice', 'big', 'happy') to Band 8/9 academic alternatives ('exceptional', 'detrimental', 'substantial', 'ecstatic').`;
        } else if (persona === 'interview') {
            personaPrompt = `Act as a Senior HR Recruiter & Tech Hiring Manager conducting a professional software engineer mock interview.
               Evaluate candidate responses using the STAR method (Situation, Task, Action, Result) and PREP method. Challenge the candidate on technical projects, problem-solving, communication skills, and executive presence.`;
        } else if (persona === 'gentle') {
            personaPrompt = `Act as a warm, patient, and encouraging English ESL Tutor. Your goal is to build student confidence. Congratulate them on effort, gently point out minor grammar/vocabulary improvements with clear Band 8+ alternatives, and ask friendly open-ended follow-up questions.`;
        } else if (persona === 'travel') {
            personaPrompt = `Act as an Airport Customs Officer, Hotel Manager, and Local Tour Guide. Roleplay authentic travel situations (ordering at restaurants, hotel check-in, taxi directions, buying tickets, resolving travel issues). Keep dialogue fast-paced and natural.`;
        } else if (persona === 'casual') {
            personaPrompt = `Act as a fun, energetic native English friend hanging out. Chat casually about hobbies, movies, food, tech, and daily life using natural idioms, slang, phrasal verbs, and friendly banter.`;
        } else {
            // Default: 'roast' -> Gordon Ramsay style
            personaPrompt = `Act as an extremely STRICT, HARSH, but HUMOROUS English Speaking Coach (Gordon Ramsay style).
               Your goal is to prepare them for native Band 9 fluency by brutally calling out lazy vocabulary (e.g. 'very good', 'big', 'nice'), grammatical flaws, awkward pauses, and filler words. Roast them with sharp sarcasm, then give the high-level native correction.`;
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
            } catch (e) {}
        }

        // --- 5. SAFE LANGUAGE-AWARE FALLBACK RESPONSE ---
        if (language === 'ja' || (typeof prompt === 'string' && (prompt.includes('Japanese') || prompt.includes('Kaiwa')))) {
            return 'はい、素晴らしいですね！日本語で話を続けましょう！ (Hai, subarashii desu ne! Nihongo de hanashi wo tsudukemashou!) [Juda yaxshi! Yapon tilida muloqotni davom ettiramiz.]';
        }
        return 'I understand! Let\'s continue our speaking practice.';
    } catch (error: unknown) {
        console.error('AI Coach Conversation Error:', error);
        // If error is already parsed by requestWithRetry, re-throw as is
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
        let provider = config.coachAiModel || config.provider || 'deepseek';
        let deepseekKey = (config.coachApiKey && config.coachApiKey.trim()) || (config.deepseekKey && config.deepseekKey.trim());


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
        let provider = config.coachAiModel || config.provider || 'deepseek';

        // 1. Try DeepSeek if selected or sk- key present
        if (provider === 'deepseek' || (config.deepseekKey && config.deepseekKey.startsWith('sk-'))) {
            try {
                const dsKey = config.deepseekKey || config.coachApiKey;
                const dsResult = await callDeepSeek(prompt, dsKey, undefined, false, config.deepseekModel, config.deepseekThinkingMode);
                if (dsResult) return dsResult.trim().replace(/^["']|["']$/g, '');
            } catch (e) {
                console.warn("[Translate Fallback] DeepSeek failed, attempting Gemini...", e);
            }
        }

        // 2. Try Gemini
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

        // 3. Fallback DeepSeek backend proxy / key
        const fallbackDsResult = await callDeepSeek(prompt, config.coachApiKey || config.deepseekKey, undefined, false, config.deepseekModel, config.deepseekThinkingMode);
        if (fallbackDsResult) return fallbackDsResult.trim().replace(/^["']|["']$/g, '');

        throw new Error("API keys unavailable for translation");
    } catch (err) {
        console.error("Translation Error:", err);
        return "Tarjima qilishda xatolik yuz berdi.";
    }
};