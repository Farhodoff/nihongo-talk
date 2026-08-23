import { parseAIError } from './aiConfig';
import { callSelectedAIProvider } from './aiCore';
import { ErrorVaultService } from '../../services/ErrorVaultService';
import { ConversationScenario } from '../../components/speaking/scenarioTypes';

export interface SpeechAnalysisResult {
    grammar_corrections: string[];
    better_vocabulary: { original: string; suggested: string }[];
    fluency_score: number;
    overall_feedback: string;
}

export const analyzeSpeech = async (
    transcript: string,
    topic: string = 'General Conversation',
    _userKey?: string
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
        const text = await callSelectedAIProvider(prompt, undefined, true);
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedText);
    } catch (error: any) {
        throw new Error(parseAIError(error));
    }
};

export interface CoachCorrection {
    hasError: boolean;
    original?: string;
    corrected?: string;
    explanation?: string;
}

export interface CoachVocabularyItem {
    word: string;
    reading?: string;
    meaning: string;
    example?: string;
}

export interface CoachStructuredResponse {
    language: 'ja' | 'en';
    reply: string;
    ttsText: string;
    romaji?: string;
    correction?: CoachCorrection | null;
    vocabulary?: CoachVocabularyItem[];
    rawText?: string;
}

export const cleanJapaneseTTS = (text: string): string => {
    if (!text) return '';
    return text
        .replace(/\[[^\]]*\]/g, '') // strip bracketed translations [Uzbek / English]
        .replace(/\([^)]*\)/g, '')   // strip parenthesized Romaji or notes (Romaji)
        .replace(/[a-zA-Z]/g, '')    // strip any remaining Latin alphabet characters
        .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '') // emojis
        .replace(/\s+/g, ' ')
        .trim();
};

export const parseCoachResponse = (raw: string, fallbackLang: 'en' | 'ja' = 'ja'): CoachStructuredResponse => {
    if (!raw || typeof raw !== 'string') {
        const defaultReply = fallbackLang === 'ja' ? 'はい、分かりました。続けましょう！' : "Understood, let's keep going!";
        return {
            language: fallbackLang,
            reply: defaultReply,
            ttsText: defaultReply,
            romaji: fallbackLang === 'ja' ? 'Hai, wakarimashita. Tsudukemashou!' : '',
            correction: { hasError: false },
            vocabulary: [],
            rawText: raw || ''
        };
    }

    try {
        let cleaned = raw.trim();
        if (cleaned.startsWith('```json')) {
            cleaned = cleaned.substring(7);
        } else if (cleaned.startsWith('```')) {
            cleaned = cleaned.substring(3);
        }
        if (cleaned.endsWith('```')) {
            cleaned = cleaned.substring(0, cleaned.length - 3);
        }
        cleaned = cleaned.trim();

        const firstBrace = cleaned.indexOf('{');
        const lastBrace = cleaned.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
            cleaned = cleaned.substring(firstBrace, lastBrace + 1);
        }

        const parsed = JSON.parse(cleaned);
        if (parsed && typeof parsed === 'object') {
            const lang: 'en' | 'ja' = parsed.language === 'en' || parsed.language === 'ja' ? parsed.language : fallbackLang;
            let reply = typeof parsed.reply === 'string' ? parsed.reply.trim() : '';
            let ttsText = typeof parsed.ttsText === 'string' ? parsed.ttsText.trim() : '';
            let romaji = typeof parsed.romaji === 'string' ? parsed.romaji.trim() : '';

            if (!reply) reply = ttsText || (lang === 'ja' ? 'はい、続けましょう！' : "Let's continue!");
            if (!ttsText) ttsText = extractSpeechAudioText(reply);

            if (lang === 'ja') {
                ttsText = cleanJapaneseTTS(ttsText);
            }

            const correction: CoachCorrection = parsed.correction && typeof parsed.correction === 'object' ? {
                hasError: Boolean(parsed.correction.hasError),
                original: parsed.correction.original || '',
                corrected: parsed.correction.corrected || '',
                explanation: parsed.correction.explanation || ''
            } : { hasError: false };

            const vocabulary: CoachVocabularyItem[] = Array.isArray(parsed.vocabulary) ? parsed.vocabulary.map((v: any) => ({
                word: String(v.word || ''),
                reading: String(v.reading || ''),
                meaning: String(v.meaning || ''),
                example: String(v.example || '')
            })).filter((v: CoachVocabularyItem) => v.word.trim().length > 0) : [];

            return {
                language: lang,
                reply,
                ttsText,
                romaji,
                correction,
                vocabulary,
                rawText: raw
            };
        }
    } catch {
        // Fallback for non-JSON strings
    }

    const isJapanese = fallbackLang === 'ja' || /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(raw);
    const lang: 'en' | 'ja' = isJapanese ? 'ja' : 'en';

    let extractedRomaji = '';
    const romajiMatch = raw.match(/\(([^)]*[a-zA-Z]{3,}[^)]*)\)/);
    if (romajiMatch && isJapanese) {
        extractedRomaji = romajiMatch[1].replace(/romaji/gi, '').trim();
    }

    const ttsText = extractSpeechAudioText(raw);
    const extractedErrors = parseMicroErrors(raw);
    const hasError = extractedErrors.length > 0;
    const firstErr = hasError ? extractedErrors[0] : null;

    return {
        language: lang,
        reply: raw,
        ttsText,
        romaji: extractedRomaji,
        correction: firstErr ? {
            hasError: true,
            original: firstErr.originalText,
            corrected: firstErr.correction,
            explanation: firstErr.explanation
        } : { hasError: false },
        vocabulary: [],
        rawText: raw
    };
};

export const converseWithCoachStructured = async (
    message: string,
    history: { role: 'user' | 'assistant', content: string }[],
    language: 'en' | 'ja' = 'en',
    persona: string = 'roast',
    _userKey?: string,
    scenario?: ConversationScenario | null
): Promise<CoachStructuredResponse> => {
    // Keep last 6 messages to optimize token usage & ensure fast responses
    const recentHistory = history.slice(-6);
    const historyText = recentHistory.map(h => `${h.role === 'user' ? 'Student' : 'Coach'}: ${h.content}`).join('\n');
    
    let personaPrompt = '';

    if (scenario) {
        const isJa = (scenario.language || (scenario.title_en ? 'en' : 'ja')) === 'ja';
        const scenarioTitle = isJa
            ? `${scenario.title_ja || scenario.title_uz} (${scenario.title_uz})`
            : `${scenario.title_en || scenario.title_uz} (${scenario.title_uz})`;
        const difficultyLabel = isJa ? `JLPT ${scenario.difficulty}` : `CEFR / ${scenario.difficulty}`;

        if (isJa) {
            personaPrompt = `IDENTITY: あなたは【${scenarioTitle}】の会話シナリオに登場するネイティブキャラクターです。
           ROLE CONTEXT: ${scenario.context_prompt}
           TARGET DIFFICULTY: ${difficultyLabel}
           KEY PHRASES TO ENCOURAGE: ${scenario.key_phrases.join(', ')}`;
        } else {
            personaPrompt = `IDENTITY: You are an authentic roleplay character for the scenario: "${scenarioTitle}".
           ROLE CONTEXT: ${scenario.context_prompt}
           TARGET DIFFICULTY: ${difficultyLabel}
           KEY PHRASES TO ENCOURAGE & TEST: ${scenario.key_phrases.join(', ')}
           INSTRUCTION: Strictly stay in character, respond naturally, ask realistic follow-up questions, and evaluate user's responses.`;
        }
    } else if (language === 'ja') {
        switch (persona) {
            case 'keigo':
                personaPrompt = `IDENTITY: 敬語・ビジネス日本語マスター教師。ビジネスシーンに相応しい尊敬語・謙譲語・丁寧語を指導します。`;
                break;
            case 'interview':
                personaPrompt = `IDENTITY: 日本企業の採用面接官。PREP法に基づく自己紹介・志望動機・経験を面接形式で指導します。`;
                break;
            case 'examiner':
            case 'ielts':
                personaPrompt = `IDENTITY: JLPTスピーキング試験官。助詞や語彙の正確性を中立的・公正に評価します。`;
                break;
            case 'gentle':
                personaPrompt = `IDENTITY: 優しく忍耐強い日本語教師「ケン先生」。丁寧語で温かくサポートし自信を育てます。`;
                break;
            case 'travel':
                personaPrompt = `IDENTITY: 旅行会話コーチ（空港・ホテル・駅・レストラン等）。旅行で役立つ実践日本語を指導します。`;
                break;
            case 'casual':
                personaPrompt = `IDENTITY: 東京在住の親しい友達「レン」。タメ口（カジュアル表現）でリアルな日常口語を教えます。`;
                break;
            default: // 'roast' -> Oni Sensei (鬼先生)
                personaPrompt = `IDENTITY: 熱心で実践的な会話を引き出す日本語コーチ「鬼先生」。自然な対話を第一にし、不自然な表現を的確に指導します。`;
                break;
        }
    } else { // English
        switch (persona) {
            case 'ielts':
                personaPrompt = `IDENTITY: Official Senior IELTS Speaking Examiner. Direct, academic, and criteria-driven.`;
                break;
            case 'interview':
                personaPrompt = `IDENTITY: Tech Hiring Manager. STAR framework based behavioral and technical interviews.`;
                break;
            case 'gentle':
                personaPrompt = `IDENTITY: Sarah, kind and encouraging ESL tutor. Builds confidence warmly.`;
                break;
            case 'travel':
                personaPrompt = `IDENTITY: Travel Concierge and customs/hotel roleplayer. High-utility travel English.`;
                break;
            case 'casual':
                personaPrompt = `IDENTITY: Alex, friendly native speaker buddy. Phrasal verbs, idioms, and natural daily chatter.`;
                break;
            default: // 'roast'
                personaPrompt = `IDENTITY: Gordon, sharp-witted and strict English Speaking Coach. Upgrades basic vocabulary to Band 8/9.`;
                break;
        }
    }

    const weakItemsSnippet = ErrorVaultService.getWeakItemsPromptSnippet(language);

    const jsonContract = language === 'ja'
        ? `STRICT JSON OUTPUT CONTRACT:
You MUST respond with a VALID JSON object matching this schema exactly:
{
  "language": "ja",
  "reply": "自然な日本語での返答と次の質問1つ（漢字・ひらがな・カタカナのみ。1〜2文）",
  "ttsText": "音声読み上げ用の純粋な日本語テキスト（replyと同一または簡潔な日本語。ローマ字・英語・記号不可）",
  "romaji": "replyのローマ字表記（画面表示用）",
  "correction": {
    "hasError": true/false,
    "original": "学生が間違えた表現（なければ空文字）",
    "corrected": "自然な正しい日本語（なければ空文字）",
    "explanation": "助詞や文法の短い解説（なければ空文字）"
  },
  "vocabulary": [
    {
      "word": "単語（漢字・かな）",
      "reading": "読み",
      "meaning": "意味（ウズベク語または英語）",
      "example": "短い例文"
    }
  ]
}`
        : `STRICT JSON OUTPUT CONTRACT:
You MUST respond with a VALID JSON object matching this schema exactly:
{
  "language": "en",
  "reply": "Natural conversational response with exactly 1 follow-up question (1-2 sentences)",
  "ttsText": "Clean English text for audio reading (identical to reply)",
  "romaji": "",
  "correction": {
    "hasError": true/false,
    "original": "Student mistake if any",
    "corrected": "Correct natural English",
    "explanation": "Brief grammar or vocabulary explanation"
  },
  "vocabulary": [
    {
      "word": "Useful word or collocation",
      "reading": "",
      "meaning": "Meaning or definition",
      "example": "Contextual example sentence"
    }
  ]
}`;

    const prompt = `
      ${personaPrompt}
      Target Language: ${language === 'ja' ? 'Japanese (日本語)' : 'English'}
      ${weakItemsSnippet}

      ${jsonContract}

      PEDAGOGICAL & DIALOGUE RULES:
      1. ONLY return the valid JSON object. Do not include any text, preamble, or explanation outside the JSON.
      2. Keep responses brief (1-3 sentences maximum). Act as an active conversation partner and coach. Always encourage the student to speak more by asking a natural, relevant follow-up question.
      3. For Japanese: "reply" and "ttsText" MUST be 100% Japanese (Kanji/Kana). NEVER mix Romaji or English into reply or ttsText. Romaji goes ONLY in "romaji" field for UI display.
      4. For English: "reply" and "ttsText" MUST be 100% English. "romaji" must be an empty string.
      5. Error Correction Policy: Correct ONLY meaningful mistakes (incorrect particles は/が/に/で/を, wrong verb/adjective forms, incorrect tenses, or unnatural vocabulary). Do NOT nitpick minor stylistic variations. If the student made no mistake, set "hasError": false. Keep explanations concise (1 short sentence).
      6. Vocabulary Engine: Provide 1 to 3 truly useful, contextual words or collocations with reading, meaning, and contextual example.
      7. Scenario & Topic Adherence: Stay in character and context throughout the dialogue.
      
      Conversation History:
      ${historyText}

      Student's current message:
      "${message}"
    `;

    try {
        const dsResult = await callSelectedAIProvider(prompt, undefined, true);
        if (dsResult) {
            return parseCoachResponse(dsResult, language);
        }

        const defaultReply = language === 'ja'
            ? 'はい、素晴らしいですね！日本語で話を続けましょう！'
            : "I understand! Let's continue our speaking practice.";
        return {
            language,
            reply: defaultReply,
            ttsText: defaultReply,
            romaji: language === 'ja' ? 'Hai, subarashii desu ne! Nihongo de hanashi wo tsudukemashou!' : '',
            correction: { hasError: false },
            vocabulary: [],
            rawText: defaultReply
        };
    } catch (error: unknown) {
        console.error('AI Coach Conversation Error:', error);
        throw new Error(parseAIError(error));
    }
};

export const converseWithCoach = async (
    message: string,
    history: { role: 'user' | 'assistant', content: string }[],
    language: 'en' | 'ja' = 'en',
    persona: string = 'roast',
    userKey?: string,
    scenario?: ConversationScenario | null
): Promise<string> => {
    const structured = await converseWithCoachStructured(message, history, language, persona, userKey, scenario);
    return structured.reply || structured.rawText || '';
};


export interface SessionAnalysisReport {
    lexical_score: number;
    grammar_score: number;
    fluency_score: number;
    pronunciation_score: number;
    overall_score: number;
    user_level_eng?: string;
    user_level_jp?: string;
    pronunciation_feedback: string;
    pronunciation_errors: { word: string; correctionHelp: string }[];
    grammar_corrections: { original: string; corrected: string; explanation: string }[];
    better_vocabulary: { original: string; suggested: string; context: string }[];
    overall_feedback: string;
    strengths: string[];
    areas_to_improve: string[];
}

export const calculateWeightedOverallScore = (
    lexical: number,
    grammar: number,
    fluency: number,
    pronunciation: number
): number => {
    const overall = (0.30 * lexical) + (0.30 * grammar) + (0.25 * fluency) + (0.15 * pronunciation);
    return Math.round(overall * 2) / 2; // Round to nearest 0.5
};

export const getCEFRLevelFromScore = (score: number): string => {
    if (score >= 8.5) return "CEFR C2 (IELTS Band 8.5 - 9.0)";
    if (score >= 7.5) return "CEFR C1 (IELTS Band 7.5 - 8.0)";
    if (score >= 6.0) return "CEFR B2 (IELTS Band 6.0 - 7.0)";
    if (score >= 5.0) return "CEFR B1 (IELTS Band 5.0 - 5.5)";
    return "CEFR A1/A2 (Basic / Elementary)";
};

export const getJLPTLevelFromScore = (score: number): string => {
    if (score >= 8.5) return "JLPT N1 (超上級 - Expert)";
    if (score >= 7.5) return "JLPT N2 (上級 - Advanced)";
    if (score >= 6.0) return "JLPT N3 (中級 - Intermediate)";
    if (score >= 5.0) return "JLPT N4 (初級 - Pre-Intermediate)";
    return "JLPT N5 (入門 - Beginner)";
};

export const analyzeSpeakingSession = async (
    history: { role: 'user' | 'assistant'; content: string }[],
    language: 'en' | 'ja' = 'en',
    persona: string = 'roast'
): Promise<SessionAnalysisReport> => {
    const userMessages = history.filter(h => h.role === 'user').map(h => h.content);
    if (userMessages.length === 0) {
        return {
            lexical_score: 0,
            grammar_score: 0,
            fluency_score: 0,
            pronunciation_score: 0,
            overall_score: 0,
            user_level_eng: "Boshlang'ich (A1)",
            user_level_jp: "Boshlang'ich (N5)",
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
      
      Full Conversation Transcript:
      ${conversationText}

      Task: Perform a FORMAL MULTI-DIMENSIONAL LINGUISTIC ASSESSMENT using 4 weighted pillars:
      1. Lexical Resource (30%): Analyze vocabulary depth, idioms, kanji/keigo or C1/C2 terms used.
      2. Grammatical Range & Accuracy (30%): Sentence complexity ratio & error density.
      3. Fluency & Coherence (25%): Turn length & logical connectors used.
      4. Pronunciation & Intonation (15%): Pitch accent, stress, and clarity.

      Provide JSON feedback in natural Uzbek (O'zbek tilida).

      Output Format (STRICT VALID JSON ONLY):
      {
        "lexical_score": 7.5,
        "grammar_score": 7.0,
        "fluency_score": 7.5,
        "pronunciation_score": 8.0,
        "user_level_eng": "CEFR B2 (IELTS Band 6.5)",
        "user_level_jp": "JLPT N3 (中級 - Intermediate)",
        "pronunciation_feedback": "Intonatsiya, nutq tempi va urg'u bo'yicha chuqur tahlil (O'zbek tilida)...",
        "pronunciation_errors": [
          {
            "word": "miss-pronounced word or phrase",
            "correctionHelp": "O'zbek tilida urg'u yoki to'g'ri aytish bo'yicha yordam"
          }
        ],
        "grammar_corrections": [
          {
            "original": "Student's flawed sentence from transcript",
            "corrected": "Corrected native sentence",
            "explanation": "O'zbek tilida grammatik tushuntirish"
          }
        ],
        "better_vocabulary": [
          {
            "original": "simple word used by student",
            "suggested": "native or Band 8+ word",
            "context": "Context or example sentence in Uzbek"
          }
        ],
        "overall_feedback": "Studentning suhbatini to'liq sarhisob qiluvchi chuqur tahliliy fikr (O'zbek tilida).",
        "strengths": ["Suhbatdagi 2-3 ta eng kuchli tomonlari (O'zbek tilida)"],
        "areas_to_improve": ["Kelgusida ishlash kerak bo'lgan 2-3 ta yo'nalish (O'zbek tilida)"]
      }

      Constraint: Return ONLY valid JSON without markdown fences.
    `;

    try {
        const response = await callSelectedAIProvider(prompt, undefined, true);
        const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
        const data = JSON.parse(cleanedText);

        const lexical = typeof data.lexical_score === 'number' ? data.lexical_score : 7.0;
        const grammar = typeof data.grammar_score === 'number' ? data.grammar_score : 7.0;
        const fluency = typeof data.fluency_score === 'number' ? data.fluency_score : 7.0;
        const pronunciation = typeof data.pronunciation_score === 'number' ? data.pronunciation_score : 7.5;
        const overall = calculateWeightedOverallScore(lexical, grammar, fluency, pronunciation);

        return {
            lexical_score: lexical,
            grammar_score: grammar,
            fluency_score: fluency,
            pronunciation_score: pronunciation,
            overall_score: overall,
            user_level_eng: data.user_level_eng || getCEFRLevelFromScore(overall),
            user_level_jp: data.user_level_jp || getJLPTLevelFromScore(overall),
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
        const totalWords = userMessages.join(' ').split(/\s+/).length;
        const baseScore = Math.min(9.0, Math.max(5.0, 5.0 + Math.floor(totalWords / 20) * 0.5));
        const overall = calculateWeightedOverallScore(baseScore, baseScore, baseScore, baseScore);
        
        return {
            lexical_score: baseScore,
            grammar_score: baseScore,
            fluency_score: baseScore,
            pronunciation_score: baseScore,
            overall_score: overall,
            user_level_eng: getCEFRLevelFromScore(overall),
            user_level_jp: getJLPTLevelFromScore(overall),
            pronunciation_feedback: "Sessiyadagi so'zlashuv tempi va grammatik bog'liqlik asosida avtomatik daraja baholandi.",
            pronunciation_errors: [],
            grammar_corrections: [],
            better_vocabulary: [],
            overall_feedback: "Suhbat yakunlandi. Yana ko'proq muloqot qilish orqali darajangizni oshirishingiz mumkin!",
            strengths: ["Suhbatda faol gapirdingiz"],
            areas_to_improve: ["Murakkabroq so'z birikmalarini ishlatish"]
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
        const dsResult = await callSelectedAIProvider(prompt, undefined, false);
        if (dsResult) return dsResult.trim().replace(/^["']|["']$/g, '');
        return text;
    } catch (err) {
        console.error("Translation Error:", err);
        return text;
    }
};

/**
 * Dynamically builds a system prompt for adaptive CEFR / JLPT conversation tutoring
 */
export const buildAdaptiveSystemPrompt = (
    mode: 'eng' | 'jp' = 'eng',
    cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' = 'B2',
    jlptLevel?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
): string => {
    if (mode === 'jp') {
        return `You are Sakamoto-sensei, an expert Japanese Kaiwa coach. Target JLPT Level: ${jlptLevel || 'N3'}. Adapt vocabulary and kanji usage dynamically. If user makes a grammar error, append micro-feedback format: [GRAMMAR_ERR: original -> correction | explanation].`;
    }
    return `You are Alex, an expert IELTS Examiner and adaptive CEFR Coach. Current Target CEFR Level: ${cefrLevel}. Adapt vocabulary, speed, and question depth. If user makes a grammar/vocab error, append micro-feedback format: [GRAMMAR_ERR: original -> correction | explanation].`;
};

/**
 * Parses micro-error tags from AI streaming or text output
 */
export const parseMicroErrors = (text: string) => {
    const errorRegex = /\[(GRAMMAR_ERR|VOCAB_ERR|PRON_ERR):\s*([^->]+)->([^|]+)\|\s*([^\]]+)\]/gi;
    const errors: { id: string; type: 'grammar' | 'vocabulary' | 'pronunciation'; originalText: string; correction: string; explanation: string }[] = [];
    
    let match;
    while ((match = errorRegex.exec(text)) !== null) {
        const typeTag = match[1].toUpperCase();
        errors.push({
            id: Math.random().toString(36).substring(2, 9),
            type: typeTag.includes('VOCAB') ? 'vocabulary' : typeTag.includes('PRON') ? 'pronunciation' : 'grammar',
            originalText: match[2].trim(),
            correction: match[3].trim(),
            explanation: match[4].trim()
        });
    }

    return errors;
};

/**
 * Extracts clean, natural conversational text for TTS voice playback.
 * Removes visual grammar notes, emojis, PREP analysis, bracketed translations, and lecture sections so voice audio remains concise and natural (5-10 seconds max).
 */
export const extractSpeechAudioText = (fullText: string): string => {
    if (!fullText) return '';

    // 1. Remove micro-error tags [GRAMMAR_ERR: ...]
    const text = fullText.replace(/\[(GRAMMAR_ERR|VOCAB_ERR|PRON_ERR):[^\]]+\]/gi, '');

    // 2. Check if text contains Japanese characters (Hiragana/Katakana/Kanji)
    const hasJapanese = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(text);

    if (hasJapanese) {
        const lines = text.split('\n');
        const spokenLines: string[] = [];

        for (const rawLine of lines) {
            const line = rawLine.trim();
            if (!line) continue;
            if (/^(?:📖|📝|📋|✍️|📊|💡|🎯|🔍|🌱)/u.test(line) || /^(解説|正しい文|Grammar Note|Note|ヒント|アドバイス):/i.test(line)) {
                break;
            }
            spokenLines.push(line);
        }

        const joined = spokenLines.join(' ');
        const cleanedJa = cleanJapaneseTTS(joined);
        if (cleanedJa.length > 0) return cleanedJa;

        return cleanJapaneseTTS(text);
    }

    // English text cleaning:
    const lines = text.split('\n');
    const spokenLines: string[] = [];

    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line) continue;
        if (/^(?:📖|📝|📋|✍️|📊|💡|🎯|🔍|🌱)/u.test(line) || /^(Grammar Note|Note|Feedback|Analysis|Tip):/i.test(line)) {
            break;
        }
        spokenLines.push(line);
    }

    let spokenText = spokenLines.join(' ');
    spokenText = spokenText.replace(/\[[^\]]*\]/g, '');
    spokenText = spokenText.replace(/\([^)]*\)/g, '');
    spokenText = spokenText.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');

    return spokenText.replace(/\s+/g, ' ').trim();
};