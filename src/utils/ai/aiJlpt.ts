import { getAIConfig, getGenAI, requestWithRetry } from './aiConfig';
import { callDeepSeek } from '../deepseek';
import { generateAlgorithmicJlptPlan } from '../curriculum/jlptAlgorithmicPlanner';

export interface JlptStudyPlanDay {
    day: number;
    title: string;
    focusArea: 'Kanji' | 'Vocabulary' | 'Grammar' | 'Reading' | 'Listening' | 'Speaking';
    tasks: string[];
    pomodoroTargetMinutes: number;
    vocabularyList?: { word: string; meaning: string; reading?: string; example?: string }[];
    grammarNotes?: { rule: string; explanation: string; example?: string }[];
    kanjiList?: { kanji: string; meaning: string; onyomi?: string; kunyomi?: string }[];
}

export interface JlptStudyPlanResult {
    headline: string;
    summary: string;
    dailyPlan: JlptStudyPlanDay[];
    recommendedTips: string[];
}

export const generateJlptStudyPlan = async (
    currentLevel: string,
    targetLevel: string,
    durationDays: number,
    planType: 'special' | 'jlpt',
    specialGoal: string
): Promise<JlptStudyPlanResult> => {
    const isZeroLevel = currentLevel === '0';
    const prompt = `
      Act as a Senior Japanese Language Master Coach and JLPT Specialist.
      Generate a customized ${durationDays}-day Japanese Study Roadmap for a student with:
      - Plan Type: ${planType} (${planType === 'special' ? `Focus Area: ${specialGoal}` : 'General JLPT Prep'})
      - Current Level: ${isZeroLevel ? "0 Level (Absolute Beginner starting from Hiragana/Katakana)" : currentLevel}
      - Target Level/Goal: ${targetLevel}
      - Preparation Period: ${durationDays} days

      ${isZeroLevel ? `CRITICAL SPECIAL INSTRUCTION FOR BEGINNER (0 LEVEL):
      The student starts from scratch (A0/A1) and needs to learn Hiragana and Katakana first.
      Structure the 7-day schedule to focus on:
      - Phase 1 (Kana Foundation): Hiragana and Katakana writing/pronunciation.
      - Phase 2 (Basic Kanji/Vocab): Basic Kanji (like Numbers, Days, Simple nouns), basic N5 vocabulary.
      - Phase 3 (Intro Bunpou): Simple sentence patterns (A wa B desu, particles like wa, ga, o, ni).` : ''}

      Requirements:
      1. Provide a motivating headline and Uzbek summary.
      2. Provide exactly 3 recommended tips.
      3. All headlines, summaries, and tips MUST be in Uzbek (O'zbek tilida).
      4. DO NOT generate the daily plan, it will be handled by the algorithm.

      Output JSON Schema (Return ONLY valid JSON):
      {
        "headline": "Uzbekcha sarlavha (masalan: 90 Kunlik JLPT N3 Intensiv Yo'l Xaritasi)",
        "summary": "Qisqa Uzbekcha strategik tavsiya va reja mazmuni.",
        "recommendedTips": ["Tavsiya 1", "Tavsiya 2", "Tavsiya 3"]
      }
    `;

    const algorithmicDailyPlan = generateAlgorithmicJlptPlan(currentLevel, targetLevel, durationDays);

    const config = getAIConfig();

    // 1. Try DeepSeek first
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
            const cleanedText = response.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(cleanedText);
            const dailyPlanRaw = parsed.dailyPlan || parsed.daily_plan || parsed.plan;
            const finalDailyPlan = (Array.isArray(dailyPlanRaw) && dailyPlanRaw.length > 0)
                ? dailyPlanRaw
                : algorithmicDailyPlan;

            return {
                headline: parsed.headline || parsed.title || `${durationDays} Kunlik Yapon Tili Rejasi`,
                summary: parsed.summary || "JLPT tayyorgarligi uchun intensiv yo'l xaritasi.",
                dailyPlan: finalDailyPlan,
                recommendedTips: parsed.recommendedTips || parsed.recommended_tips || parsed.tips || []
            };
        } catch (dsErr) {
            console.warn("DeepSeek study plan failed for JLPT, trying Gemini fallback...", dsErr);
        }
    }

    // 2. Try Gemini
    try {
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
        const parsed = JSON.parse(cleanedText);

        return {
            headline: parsed.headline || parsed.title || `${durationDays} Kunlik Yapon Tili Rejasi`,
            summary: parsed.summary || "JLPT tayyorgarligi uchun intensiv yo'l xaritasi.",
            dailyPlan: algorithmicDailyPlan,
            recommendedTips: parsed.recommendedTips || parsed.recommended_tips || parsed.tips || []
        };
    } catch (geminiErr) {
        console.warn("Gemini study plan failed for JLPT, trying backend proxy...", geminiErr);
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
            return {
                headline: parsed.headline || parsed.title || `${durationDays} Kunlik Yapon Tili Rejasi`,
                summary: parsed.summary || "JLPT tayyorgarligi uchun intensiv yo'l xaritasi.",
                dailyPlan: algorithmicDailyPlan,
                recommendedTips: parsed.recommendedTips || parsed.recommended_tips || parsed.tips || []
            };
        }
    } catch (proxyErr) {
        console.warn("Backend proxy study plan failed for JLPT, using fallback...", proxyErr);
    }

    // 4. Default fallback plan
    return {
        headline: isZeroLevel ? "🌱 Hiragana & Katakana Alifbosi Boshlang'ich Rejasi" : `🎌 JLPT ${targetLevel} Maqsadli Dars Rejasi`,
        summary: isZeroLevel 
            ? "Yapon tilini mutlaqo noldan boshlovchilar uchun Kana alifbosini o'zlashtirish rejasi."
            : `Hozirgi ${currentLevel} darajangizdan ${targetLevel} darajaga erishish uchun intensiv yo'l xaritasi.`,
        dailyPlan: algorithmicDailyPlan,
        recommendedTips: [
            "Kuniga kamida 45-60 daqiqa diqqat bilan shug'ullaning.",
            "Yangi o'rgangan so'zlaringizni darhol gap ichida qo'llang.",
            "Flashcard va Notes sahifalaridagi ma'lumotlarni muntazam takrorlang."
        ]
    };
};
