import { getAIConfig } from './aiConfig';
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
      Generate a highly customized ${durationDays}-day Japanese Study Roadmap for a student:
      - Plan Type: ${planType === 'special' ? `MAXSUS MAQSAD (Focus/Goal: ${specialGoal})` : `JLPT ${targetLevel} Imtihon Rejasi`}
      - Current Level: ${isZeroLevel ? "0 Level (Absolute Beginner starting from Hiragana/Katakana)" : currentLevel}
      - Target Goal: ${planType === 'special' ? specialGoal : targetLevel}
      - Duration: ${durationDays} days

      Requirements:
      1. Provide a motivating headline and Uzbek summary tailored specifically to "${specialGoal || targetLevel}".
      2. Provide a 7-day representative weekly routine schedule (Day 1 to Day 7) that escalates over ${durationDays} days.
      3. For EACH day, provide:
         - "title": A unique, inspiring day title in Uzbek (e.g. "Kun 1: Jikoshoukai & Salomlashish iboralari", "Kun 2: Ishxona Muloqoti & Keigo", etc.)
         - "focusArea": One of 'Speaking' | 'Listening' | 'Reading' | 'Kanji' | 'Vocabulary' | 'Grammar'
         - "tasks": Array of 2-3 specific, actionable study tasks in Uzbek.
         - "vocabularyList": Array of 3-5 target Japanese words/phrases with "word", "reading", "meaning" (in Uzbek), and optional "example".
      4. All headlines, summaries, daily titles, and tasks MUST be in Uzbek (O'zbek tilida).

      Output JSON Schema (Return ONLY valid JSON):
      {
        "headline": "Uzbekcha sarlavha (masalan: 30 Kunlik Kaiwa Erkin Muloqot Yo'l Xaritasi)",
        "summary": "Qisqa Uzbekcha strategik tavsiya va reja mazmuni.",
        "dailyPlan": [
          {
            "day": 1,
            "title": "Kun 1: O'zini tanishtirish (Jikoshoukai) va Salomlashish",
            "focusArea": "Speaking",
            "tasks": ["1 daqiqalik Jikoshoukai nutqini yozish", "Salomlashish va odob-ahloq iboralarini takrorlash"],
            "pomodoroTargetMinutes": 60,
            "vocabularyList": [
              {"word": "はじめまして", "reading": "hajimemashite", "meaning": "tanishganimdan xursandman", "example": "はじめまして、田中です。"},
              {"word": "よろしくお願いします", "reading": "yoroshiku onegaishimasu", "meaning": "e'tiboringiz uchun rahmat", "example": "本日はよろしくお願いします。"}
            ]
          }
        ],
        "recommendedTips": ["Tavsiya 1", "Tavsiya 2", "Tavsiya 3"]
      }
    `;

    const algorithmicDailyPlan = generateAlgorithmicJlptPlan(currentLevel, targetLevel, durationDays, planType, specialGoal);

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
            console.warn("DeepSeek study plan failed for JLPT, trying backend proxy...", dsErr);
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
