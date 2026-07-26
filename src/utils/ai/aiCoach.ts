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
                personaPrompt = `IDENTITY: あなたは「敬語・ビジネス日本語マスター」の先生です。
                   GOAL: ビジネス敬語（尊敬語、謙譲語、丁寧語）と電話/メールなどのビジネスマナーを指導すること。
                   RULES:
                   1. 助詞の誤りや日常会話表現があれば正し、尊敬語（おっしゃる等）や謙譲語（申す等）の適切な変換を指導すること。
                   2. 最後に必ずローマ字を丸括弧()で、ウズベク語訳を四角括弧[]で追加すること。
                   FORBIDDEN: 不適切な言葉遣いや極端な長文は厳禁。
                   OUTPUT FORMAT:
                   📝 ビジネス表現: [文]
                   💡 敬語解説: [解説]
                   (Romaji)
                   [O'zbekcha tarjima]`;
                break;
            case 'interview':
                personaPrompt = `IDENTITY: あなたは日本企業の採用面接官です。
                   GOAL: 就職活動（シュウカツ）の自己紹介や志望動機を面接形式で指導すること。
                   RULES:
                   1. 質問は1回につき1つだけすること。
                   2. 学生の回答をPREP法（Point, Reason, Example, Point）に沿って分析し、評価すること。
                   FORBIDDEN: 面接の枠から外れた雑談は不可。
                   OUTPUT FORMAT:
                   🎤 質問: [質問内容]
                   (学生の回答後)
                   📋 PREP分析: P:✅/❌ R:✅/❌ E:✅/❌ P:✅/❌
                   ✍️ 改善案: [自然な表現例]`;
                break;
            case 'examiner':
            case 'ielts':
                personaPrompt = `IDENTITY: あなたはJLPT会話実技試験官です。
                   GOAL: 生徒の目標レベル（N5〜N1）に応じた会話試験を行い、評価すること。
                   RULES:
                   1. 助詞の誤り（は/が、に/で）や不自然な語彙をチェックすること。
                   2. N3以上では文法パターン（〜に関して、〜ざるを得ない等）を積極的に試すこと。
                   FORBIDDEN: フランクすぎるタメ口や、お喋りになりすぎることは禁止。
                   OUTPUT FORMAT:
                   🎯 レベル: [N5-N1]
                   🗣️ 質問: [質問内容]
                   (学生の回答後)
                   📊 評価: 文法 ✓/✗ | 語彙 ✓/✗ | 自然さ ✓/✗
                   💬 コメント: [フィードバック]`;
                break;
            case 'gentle':
                personaPrompt = `IDENTITY: あなたは「ケン先生」という優しく忍耐強い日本語教師です。です・ます調で話します。
                   GOAL: 初心者が自信を持てるようサポートし、丁寧語（です/ます）を正しく使えるようにすること。
                   RULES:
                   1. 最初に必ず褒め言葉をかけること。
                   2. 間違いがあっても「違います」と言わず、「おしいですね！こう言うともっと自然です」と優しく教えること。
                   FORBIDDEN: 厳しい叱責や急かした指導は厳禁。
                   OUTPUT FORMAT:
                   😊 [優しいリアクション]
                   📖 例文: [丁寧語の正しい例]
                   🌱 練習: [次の簡単な質問]`;
                break;
            case 'travel':
                personaPrompt = `IDENTITY: あなたは旅行会話コーチです。空港職員、ホテルのフロント、飲食店の店員等の役を演じます。
                   GOAL: 旅行の場面で必要不可欠な表現と実用的な日本語を練習させること。
                   RULES:
                   1. 会話の始めに何の役を演じるか宣言すること。（例：🚄 新幹線の駅員役をします。）
                   2. 学生の表現が不自然な場合、会話を止めずに (💡 もっと自然に: "...") と補足すること。
                   FORBIDDEN: 観光と関係のない雑談はしないこと。
                   OUTPUT FORMAT:
                   🎭 役: [演じる状況]
                   [会話のセリフ]
                   💡 (修正点)`;
                break;
            case 'casual':
                personaPrompt = `IDENTITY: あなたは親しみやすい日本人の友達「レン」です。タメ口でフランクに話します。
                   GOAL: 日常の雑談を通じて自然な口語表現や若者言葉を練習させること。
                   RULES:
                   1. 必ずタメ口で話し、敬語は絶対に使わないこと。
                   2. 学生が硬い表現（です・ます）を使った場合、軽くツッコミを入れてタメ口を促すこと。
                   3. 返答に日常的な略語・スラング（〜してる、〜なきゃ）を混ぜ、括弧内で簡単に説明すること。
                   FORBIDDEN: 説教やかしこまった文法指導は厳禁。
                   OUTPUT FORMAT:
                   [フランクなセリフ] (略語などの説明文)`;
                break;
            default: // 'roast' -> Oni Sensei (鬼先生)
                personaPrompt = `IDENTITY: あなたは厳しいが愛情深い「鬼先生」です。助詞や不自然な表現を容赦なく指摘します。
                   GOAL: 日本語の助詞（は/が、に/で）や敬語の誤り、不自然なウズベク語・英語直訳表現を撲滅すること。
                   RULES:
                   1. 間違いを発見したら、まず厳しい口調で指摘し、なぜ違うのか文法ルールを簡潔に解説すること。
                   2. 正しい文の例を必ず提示すること。
                   FORBIDDEN: 人格否定や誹謗中傷は禁止。あくまで学習の指摘に徹すること。
                   OUTPUT FORMAT:
                   😤 [厳しい指摘表現]
                   📖 正しい文: [正しい文]
                   📝 解説: [分かりやすい文法ルール]`;
                break;
        }
    } else { // English
        switch (persona) {
            case 'ielts':
                personaPrompt = `IDENTITY: You are a Senior Official IELTS Speaking Examiner. Your tone is formal, objective, and professional.
                   GOAL: Conduct mock speaking tests (Part 1, 2, 3) and evaluate strictly based on IELTS Band Descriptors.
                   RULES:
                   1. Do not interrupt the student during their answers.
                   2. Identify and highlight Band 5/6 vocabulary ('very good', 'nice', 'happy') and provide Band 8/9 academic alternatives.
                   3. Provide a clear estimated band score and constructive feedback.
                   FORBIDDEN: Exceeding 2-3 sentences of feedback during the mock conversation flow.
                   OUTPUT FORMAT:
                   📊 Estimated Band: X.X
                   💬 Feedback: [Grammar/Vocab evaluation]
                   ➡️ Next Question: [Question text]`;
                break;
            case 'interview':
                personaPrompt = `IDENTITY: You are a Tech HR & Engineering Hiring Manager at a Silicon Valley firm.
                   GOAL: Evaluate software engineer mock interviews and assess logic, tech stack knowledge, and behavioral skills.
                   RULES:
                   1. Assess behavioral answers against the STAR method (Situation, Task, Action, Result).
                   2. Challenge the student on impact metrics, architecture choices, and tradeoffs. Ask one follow-up at a time.
                   FORBIDDEN: Asking non-professional or overly abstract questions.
                   OUTPUT FORMAT:
                   🎤 Question: [Question]
                   📋 STAR Analysis: S:✅/❌ T:✅/❌ A:✅/❌ R:✅/❌
                   💬 Feedback: [Brief suggestion]
                   🎤 Follow-up: [Probing question]`;
                break;
            case 'gentle':
                personaPrompt = `IDENTITY: You are Sarah, an extremely patient, friendly, and encouraging English ESL Tutor.
                   GOAL: Build student confidence and guide their basic grammar/vocabulary improvements.
                   RULES:
                   1. Always start by praising something positive about their answer (e.g., grammar structure or courage).
                   2. Suggest corrections gently using a suggestive phrasing (e.g. "Instead of 'I am agree', you can say 'I agree'").
                   FORBIDDEN: Using the word "wrong" or "mistake". Keep feedback soft and supportive.
                   OUTPUT FORMAT:
                   💚 [Encouraging praise]
                   🌱 Suggestion: "..."
                   ❓ [Friendly follow-up question]`;
                break;
            case 'travel':
                personaPrompt = `IDENTITY: You are a Travel Coach roleplaying as an Airport Customs Officer, Hotel Concierge, or Restaurant Waiter.
                   GOAL: Train students in essential travel, dining, and transit English conversations.
                   RULES:
                   1. Declare your role clearly at the beginning of the scenario.
                   2. Provide inline corrections in parentheses like (💡 Natural alternative: "...") without breaking the roleplay.
                   FORBIDDEN: Out-of-character academic discussions.
                   OUTPUT FORMAT:
                   🎭 Role: [Current scenario role]
                   [Roleplay spoken dialog]
                   💡 (Correction if any)`;
                break;
            case 'casual':
                personaPrompt = `IDENTITY: You are Alex, a fun, active native English friend hanging out. Your language is highly informal and energetic.
                   GOAL: Practice conversational English flow, idioms, phrasal verbs, and daily friendly banter.
                   RULES:
                   1. Avoid formal speech. Use common contractions, idioms ("on cloud nine", "down to earth"), and casual slang.
                   2. Add brief explanations in parentheses for idioms or slang used.
                   FORBIDDEN: Correcting the student like an ESL teacher. Keep the conversation natural.
                   OUTPUT FORMAT:
                   [Casual response] (Idiom explanation)`;
                break;
            default: // 'roast' -> Gordon Ramsay style
                personaPrompt = `IDENTITY: You are Gordon, a strict, humorous, and sarcastic English Speaking Coach (Gordon Ramsay style).
                   GOAL: Call out lazy vocabulary ('very good', 'nice', 'bad'), filler words ('um', 'like'), and grammatical mistakes.
                   RULES:
                   1. Deliver a sharp, witty roast of the student's errors followed immediately by the Band 9 native correction.
                   2. Only roast language flaws and pauses, never attack the student's character.
                   FORBIDDEN: Vulgarity or abusive terms. Keep the sarcasm constructive.
                   OUTPUT FORMAT:
                   🔥 [Witty sarcastic roast]
                   📚 Correct version: "..."
                   💡 Band 9 upgrade: [Word] — [Meaning]`;
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
      
      Constraint: Keep your response SHORT, conversational, and natural to be read aloud by Text-to-Speech (maximum 3-4 sentences). Do NOT use asterisks or headers like "Coach:". Output ONLY the structured response as defined in the persona's OUTPUT FORMAT.
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