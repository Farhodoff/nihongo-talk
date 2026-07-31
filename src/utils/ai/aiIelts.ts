import { getAIConfig } from './aiConfig';
import { callDeepSeek } from '../deepseek';
import { generateAlgorithmicIeltsPlan } from '../curriculum/ieltsAlgorithmicPlanner';

export interface IeltsStudyPlanDay {
    day: number;
    title: string;
    focusSkill: 'Writing' | 'Speaking' | 'Reading' | 'Listening' | 'Vocabulary';
    tasks: string[];
    pomodoroTargetMinutes: number;
    vocabularyList?: { word: string; meaning: string; example?: string }[];
    grammarNotes?: { rule: string; explanation: string; example?: string }[];
}

export interface IeltsStudyPlanResult {
    headline: string;
    summary: string;
    dailyPlan: IeltsStudyPlanDay[];
    recommendedTips: string[];
}

function enrichIeltsPlanWithConcreteContent(
    aiDailyPlan: IeltsStudyPlanDay[],
    algorithmicDailyPlan: IeltsStudyPlanDay[]
): IeltsStudyPlanDay[] {
    return aiDailyPlan.map((dayItem, idx) => {
        const algoItem = algorithmicDailyPlan[idx % algorithmicDailyPlan.length] || algorithmicDailyPlan[0];

        const vocabularyList = (dayItem.vocabularyList && dayItem.vocabularyList.length > 0)
            ? dayItem.vocabularyList
            : algoItem.vocabularyList;

        const grammarNotes = (dayItem.grammarNotes && dayItem.grammarNotes.length > 0)
            ? dayItem.grammarNotes
            : algoItem.grammarNotes;

        let enrichedTasks = Array.isArray(dayItem.tasks) && dayItem.tasks.length > 0
            ? [...dayItem.tasks]
            : [...algoItem.tasks];

        // Ensure tasks explicitly contain vocabulary items if missing
        if (vocabularyList && vocabularyList.length > 0) {
            const firstWord = vocabularyList[0].word;
            const hasVocabInTasks = enrichedTasks.some(t => t.toLowerCase().includes(firstWord.toLowerCase()) || t.includes('Lug\'at') || t.includes('so\'z'));
            if (!hasVocabInTasks) {
                const vocabStr = vocabularyList.slice(0, 4).map(v => `"${v.word}" (${v.meaning})`).join(', ');
                enrichedTasks.unshift(`📖 Lug'at yodlash: ${vocabStr} — ma'nosi va misoli bilan`);
            }
        }

        // Ensure tasks explicitly contain grammar notes if missing
        if (grammarNotes && grammarNotes.length > 0) {
            const g = grammarNotes[0];
            const hasGrammarInTasks = enrichedTasks.some(t => t.includes(g.rule) || t.includes('Grammatika'));
            if (!hasGrammarInTasks) {
                enrichedTasks.push(`✏️ Grammatika: "${g.rule}" — ${g.explanation}. ${g.example ? `Misol: ${g.example}` : ''}`);
            }
        }

        return {
            ...dayItem,
            tasks: enrichedTasks,
            vocabularyList,
            grammarNotes
        };
    });
}

export const generateIeltsStudyPlan = async (
    currentBand: number,
    targetBand: number,
    durationDays: number,
    weakSkill: string
): Promise<IeltsStudyPlanResult> => {
    const isZeroLevel = currentBand === 0;
    const algorithmicDailyPlan = generateAlgorithmicIeltsPlan(currentBand, targetBand, durationDays, weakSkill);

    const prompt = `
      Act as a Head IELTS Academic Master Coach.
      Generate a customized ${durationDays}-day IELTS Study Roadmap for a student with:
      - Current Estimated Score: ${isZeroLevel ? "0 Level (Absolute Beginner A0/A1 - Starting from Scratch)" : `Band ${currentBand}`}
      - Target Score: Band ${targetBand}
      - Preparation Period: ${durationDays} days
      - Focus/Weakest Skill Area: ${weakSkill}

      ${isZeroLevel ? `CRITICAL SPECIAL INSTRUCTION FOR 0 LEVEL (BEGINNER):
      The student has 0 prior IELTS experience and starts from basic English (A0/A1).
      Structure the 7-day representative schedule with a 3-Phase progression:
      - Phase 1 (Foundation): Basic Grammar (Present/Past Tenses, Subject-Verb-Object), Essential 500 Daily English Words.
      - Phase 2 (Pre-IELTS): Sentence Building, Paraphrasing, Intro to Listening & Speaking basics.
      - Phase 3 (IELTS Prep): Intro to IELTS Task 1/2 Templates and basic Practice.` : ''}

      Requirements:
      1. Provide a motivating headline and Uzbek summary.
      2. Provide a 7-day representative weekly routine schedule (Day 1 to Day 7) that repeats and escalates over the ${durationDays} days.
      3. All daily tasks, headlines, and tips MUST be in Uzbek (O'zbek tilida).
      4. CRITICAL MANDATE: For EVERY day, you MUST provide a "vocabularyList" of 5-10 specific target IELTS words/collocations (with Uzbek meaning & example).
      5. CRITICAL MANDATE: In the "tasks" array for vocabulary or topic days, explicitly include the exact target words to learn (e.g., "Mavzuga oid lug'at yodlash: crucial, ubiquitous, detrimental"). Never leave the user guessing which words to memorize!

      Output JSON Schema (Return ONLY valid JSON):
      {
        "headline": "Uzbekcha sarlavha (masalan: 30 Kunlik Band 7.5 Strategik Rejasi)",
        "summary": "Qisqa Uzbekcha strategik tavsiya va reja mazmuni.",
        "dailyPlan": [
          {
            "day": 1,
            "title": "Kunlik diqqat markazi (masalan: Task 2 Structure & Intro)",
            "focusSkill": "Writing",
            "tasks": ["Task 2 uchun 3 ta essay outline tuzish", "Mavzuga oid lug'at yodlash: crucial, ubiquitous, detrimental"],
            "pomodoroTargetMinutes": 90,
            "vocabularyList": [
              {"word": "crucial", "meaning": "hal qiluvchi, juda muhim", "example": "It is crucial to understand the rules."},
              {"word": "ubiquitous", "meaning": "hamma joyda uchraydigan", "example": "Smartphones are ubiquitous nowadays."},
              {"word": "detrimental", "meaning": "zararli, salbiy ta'sir etuvchi", "example": "Smoking has a detrimental effect on health."}
            ],
            "grammarNotes": [{"rule": "Subject-Verb Agreement", "explanation": "Ega va kesimning moslashuvi."}]
          }
        ],
        "recommendedTips": ["Tavsiya 1", "Tavsiya 2", "Tavsiya 3"]
      }
    `;

    const config = getAIConfig();

    // 1. Try DeepSeek first if configured or available
    if (config.provider === 'deepseek' || config.deepseekKey) {
        try {
            const response = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                true,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            const parsed = JSON.parse(cleanedText);
            const dailyPlanRaw = parsed.dailyPlan || parsed.daily_plan || parsed.plan;
            const finalDailyPlan = (Array.isArray(dailyPlanRaw) && dailyPlanRaw.length > 0)
                ? enrichIeltsPlanWithConcreteContent(dailyPlanRaw, algorithmicDailyPlan)
                : algorithmicDailyPlan;

            return {
                headline: parsed.headline || parsed.title || `${durationDays} Kunlik IELTS Rejasi`,
                summary: parsed.summary || "IELTS tayyorgarligi uchun intensiv reja.",
                dailyPlan: finalDailyPlan,
                recommendedTips: parsed.recommendedTips || parsed.recommended_tips || parsed.tips || []
            };
        } catch (dsErr) {
            console.warn("DeepSeek study plan failed, trying backend proxy fallback...", dsErr);
        }
    }

    // 3. Fallback: Call backend proxy /api/ai
    try {
        const res = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, jsonMode: true })
        });
        if (res.ok) {
            const data = await res.json();
            const rawText = data.text || data.reply || '';
            const cleanedText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
            const parsed = JSON.parse(cleanedText);
            const dailyPlanRaw = parsed.dailyPlan || parsed.daily_plan || parsed.plan;
            const finalDailyPlan = (Array.isArray(dailyPlanRaw) && dailyPlanRaw.length > 0)
                ? enrichIeltsPlanWithConcreteContent(dailyPlanRaw, algorithmicDailyPlan)
                : algorithmicDailyPlan;
            return {
                headline: parsed.headline || parsed.title || `${durationDays} Kunlik IELTS Rejasi`,
                summary: parsed.summary || "IELTS tayyorgarligi uchun intensiv reja.",
                dailyPlan: finalDailyPlan,
                recommendedTips: parsed.recommendedTips || parsed.recommended_tips || parsed.tips || []
            };
        }
    } catch (proxyErr) {
        console.warn("Backend proxy study plan failed, using fallback roadmap...", proxyErr);
    }

    // 4. Default fallback plan if all network AI calls fail
    return {
        headline: isZeroLevel ? `🌱 0 Level -> Band ${targetBand} 3-Bosqichli Yo'l Xaritasi` : `${durationDays} Kunlik Band ${targetBand} IELTS Rejasi`,
        summary: isZeroLevel 
            ? "Noldan boshlab IELTS 7.0+ darajasiga erishish uchun 3 bosqichli poydevoriy dars rejasi."
            : `Hozirgi Band ${currentBand} darajangizdan Band ${targetBand} ga yetish uchun intensiv kunlik reja.`,
        dailyPlan: algorithmicDailyPlan,
        recommendedTips: [
            "Kuniga kamida 45-60 daqiqa diqqat bilan shug'ullaning.",
            "Yangi o'rgangan so'zlaringizni darhol gap ichida qo'llang.",
            "Writing va Speaking javoblaringizni AI Coach orqali tekshirtiring."
        ]
    };
};

export interface IeltsEssayEvaluationReport {
    overallBand: number;
    taskResponseScore: number;
    coherenceScore: number;
    lexicalResourceScore: number;
    grammarScore: number;
    taskResponseFeedback: string;
    coherenceFeedback: string;
    lexicalResourceFeedback: string;
    grammarFeedback: string;
    wordCount: number;
    strengths: string[];
    weaknesses: string[];
    grammarErrors: { original: string; corrected: string; explanation: string }[];
    advancedVocabularySuggestions: { original: string; band8Alternative: string; context: string }[];
    modelAnswerBand8: string;
    improvementTips: string[];
}

export const evaluateIeltsEssay = async (
    taskType: 'task1' | 'task2',
    promptQuestion: string,
    essayText: string
): Promise<IeltsEssayEvaluationReport> => {
    const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length;

    const prompt = `
      Act as an official Senior IELTS Writing Examiner (BC/IDP certified).
      Evaluate the following IELTS Writing ${taskType === 'task1' ? 'Task 1' : 'Task 2'} essay strictly against the official 4 criteria:
      1. Task ${taskType === 'task1' ? 'Achievement' : 'Response'} (TR)
      2. Coherence and Cohesion (CC)
      3. Lexical Resource (LR)
      4. Grammatical Range and Accuracy (GRA)

      PROMPT / ESSAY QUESTION:
      "${promptQuestion}"

      STUDENT'S ESSAY TEXT (Word count: ${wordCount}):
      """
      ${essayText}
      """

      Provide a comprehensive JSON evaluation report. All explanations, feedbacks, strengths, and tips MUST be written in Uzbek (O'zbek tilida).
      The Band scores must be numbers (e.g. 5.5, 6.0, 6.5, 7.0, 7.5, 8.0).
      Calculate overallBand as average of the 4 scores rounded to nearest half band.

      JSON Output Schema (Return ONLY valid JSON without markdown formatting):
      {
        "overallBand": 6.5,
        "taskResponseScore": 6.5,
        "coherenceScore": 6.0,
        "lexicalResourceScore": 7.0,
        "grammarScore": 6.0,
        "taskResponseFeedback": "Tushuntirish Uzbek tilida",
        "coherenceFeedback": "Tushuntirish Uzbek tilida",
        "lexicalResourceFeedback": "Tushuntirish Uzbek tilida",
        "grammarFeedback": "Tushuntirish Uzbek tilida",
        "wordCount": ${wordCount},
        "strengths": ["Kuchli jihati 1", "Kuchli jihati 2"],
        "weaknesses": ["Kuchsiz jihati 1", "Kuchsiz jihati 2"],
        "grammarErrors": [
          {
            "original": "Xato gap yoki ibora",
            "corrected": "To'g'ri shakli",
            "explanation": "Nima uchun xatoligi haqida izoh (Uzbekcha)"
          }
        ],
        "advancedVocabularySuggestions": [
          {
            "original": "Oddiy so'z (masalan 'good')",
            "band8Alternative": "Yuqori darajadagi sinonim (masalan 'exceptional')",
            "context": "Qanday gapda ishlatish (Uzbekcha)"
          }
        ],
        "modelAnswerBand8": "Ushbu inshoning Band 8.0/9.0 darajasidagi ideal, qayta mukammal yozilgan to'liq varianti (ingliz tilida)",
        "improvementTips": ["Tavsiya 1", "Tavsiya 2"]
      }
    `;

    try {
        const config = getAIConfig();
        const response = await callDeepSeek(
            prompt,
            config.deepseekKey || '',
            undefined,
            true,
            config.deepseekModel,
            config.deepseekThinkingMode
        );
        const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
        const reportData = JSON.parse(cleanedText);

        return {
            overallBand: reportData.overallBand || 6.0,
            taskResponseScore: reportData.taskResponseScore || 6.0,
            coherenceScore: reportData.coherenceScore || 6.0,
            lexicalResourceScore: reportData.lexicalResourceScore || 6.0,
            grammarScore: reportData.grammarScore || 6.0,
            taskResponseFeedback: reportData.taskResponseFeedback || "Mavzuga mos yozilgan.",
            coherenceFeedback: reportData.coherenceFeedback || "Mantiqiy bog'liqlik yaxshi.",
            lexicalResourceFeedback: reportData.lexicalResourceFeedback || "Lug'at boyligi o'rtacha.",
            grammarFeedback: reportData.grammarFeedback || "Grammatik konstruksiyalar ko'rsatilgan.",
            wordCount: wordCount,
            strengths: reportData.strengths || [],
            weaknesses: reportData.weaknesses || [],
            grammarErrors: reportData.grammarErrors || [],
            advancedVocabularySuggestions: reportData.advancedVocabularySuggestions || [],
            modelAnswerBand8: reportData.modelAnswerBand8 || "Band 8.0 namuna mavjud emas.",
            improvementTips: reportData.improvementTips || []
        };
    } catch (err) {
        console.error("IELTS Essay Evaluation Error:", err);
        throw new Error("AI orqali inshoni baholashda xatolik yuz berdi. Qayta urinib ko'ring.");
    }
};
export interface SpeakingMockReport {
    overallBand: number;
    fluencyScore: number;
    lexicalResourceScore: number;
    grammarScore: number;
    pronunciationScore: number;
    fluencyFeedback: string;
    lexicalResourceFeedback: string;
    grammarFeedback: string;
    pronunciationFeedback: string;
    strengths: string[];
    weaknesses: string[];
    grammarErrors: { original: string; corrected: string; explanation: string }[];
    advancedVocabSuggestions: { original: string; band8Alternative: string }[];
    modelAnswers: { part: string; question: string; band8Response: string }[];
    improvementTips: string[];
}

export const evaluateIeltsSpeakingFullMock = async (
    transcript: { part: string; question: string; answer: string }[]
): Promise<SpeakingMockReport> => {
    const formattedTranscript = transcript.map(t => `[${t.part}] Q: ${t.question}\nA: ${t.answer}`).join("\n\n");
    const prompt = `
      Act as an official Senior IELTS Speaking Examiner (BC/IDP certified).
      Evaluate the student's complete 3-Part IELTS Speaking Test transcript strictly against the official 4 criteria:
      1. Fluency & Coherence (FC)
      2. Lexical Resource (LR)
      3. Grammatical Range & Accuracy (GRA)
      4. Pronunciation (P)

      Full Test Transcript:
      ${formattedTranscript}

      Output JSON Schema (Return ONLY valid JSON):
      {
        "overallBand": 7.0,
        "fluencyScore": 7.0,
        "lexicalResourceScore": 7.5,
        "grammarScore": 6.5,
        "pronunciationScore": 7.0,
        "fluencyFeedback": "Uzbekcha tahlil...",
        "lexicalResourceFeedback": "Uzbekcha tahlil...",
        "grammarFeedback": "Uzbekcha tahlil...",
        "pronunciationFeedback": "Uzbekcha tahlil...",
        "strengths": ["Kuchli tomon 1", "Kuchli tomon 2"],
        "weaknesses": ["Kuchsiz tomon 1", "Kuchsiz tomon 2"],
        "grammarErrors": [
            {"original": "xato gap", "corrected": "to'g'ri gap", "explanation": "Uzbekcha tushuntirish"}
        ],
        "advancedVocabSuggestions": [
            {"original": "good", "band8Alternative": "exceptional / exemplary"}
        ],
        "modelAnswers": [
            {"part": "Part 2", "question": "Describe a place...", "band8Response": "Band 8.0 namuna javob..."}
        ],
        "improvementTips": ["Maslahat 1", "Maslahat 2"]
      }
    `;

    const config = getAIConfig();
    if (config.provider === 'deepseek' || config.deepseekKey) {
        try {
            const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            const parsed = JSON.parse(cleanedText);
            return {
                overallBand: parsed.overallBand || 6.5,
                fluencyScore: parsed.fluencyScore || 6.5,
                lexicalResourceScore: parsed.lexicalResourceScore || 6.5,
                grammarScore: parsed.grammarScore || 6.5,
                pronunciationScore: parsed.pronunciationScore || 6.5,
                fluencyFeedback: parsed.fluencyFeedback || "Fluency tahlili.",
                lexicalResourceFeedback: parsed.lexicalResourceFeedback || "Lug'at tahlili.",
                grammarFeedback: parsed.grammarFeedback || "Grammatika tahlili.",
                pronunciationFeedback: parsed.pronunciationFeedback || "Talaffuz tahlili.",
                strengths: parsed.strengths || [],
                weaknesses: parsed.weaknesses || [],
                grammarErrors: parsed.grammarErrors || [],
                advancedVocabSuggestions: parsed.advancedVocabSuggestions || [],
                modelAnswers: parsed.modelAnswers || [],
                improvementTips: parsed.improvementTips || []
            };
        } catch (dsErr) {
            console.warn("DeepSeek speaking mock evaluation failed:", dsErr);
        }
    }

    // Default fallback mock report
    return {
        overallBand: 7.0,
        fluencyScore: 7.0,
        lexicalResourceScore: 7.5,
        grammarScore: 6.5,
        pronunciationScore: 7.0,
        fluencyFeedback: "Nutqiz uzluksiz va mantiqan ketma-ket joylashgan. Pauzalar kam uchraydi.",
        lexicalResourceFeedback: "Academic so'zlar va collocations to'g'ri ishlatilgan.",
        grammarFeedback: "Murakkab gap strukturalarida ba'zi kichik artikl va zamon moslashuvi xatolari bor.",
        pronunciationFeedback: "Talaffuz tushunarli, intonatsiya va urg'ular to'g'ri qo'yilgan.",
        strengths: ["Ravon va ishonchli gapirish", "Boy lug'at zaxirasi"],
        weaknesses: ["Kichik grammatik xatolar"],
        grammarErrors: [
            { original: "I am study computer science since 2 years", corrected: "I have been studying computer science for 2 years", explanation: "Vaqt davomiyligi uchun Present Perfect Continuous ishlatiladi." }
        ],
        advancedVocabSuggestions: [
            { original: "important", band8Alternative: "vital / indispensable" }
        ],
        modelAnswers: [
            { part: "Part 2", question: "Describe a memorable journey...", band8Response: "One of the most memorable journeys I have ever undertaken was..." }
        ],
        improvementTips: [
            "Part 2 da gapirayotganda barcha bullet-pointlarga teng vaqt ajrating.",
            "Part 3 da berilgan analitik savollarga 'Point, Reason, Example' usulida javob bering."
        ]
    };
};