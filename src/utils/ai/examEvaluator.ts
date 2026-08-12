import { callDeepSeek } from '../deepseek';

export interface ExamQuestionAnswer {
    questionText: string;
    section?: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanationUzbek?: string;
}

export interface ExamDiagnosticReport {
    overall_score_text: string;
    percentage: number;
    passed: boolean;
    top_3_mistakes: Array<{
        title: string;
        explanation_uz: string;
        correct_concept: string;
    }>;
    actionable_recommendation: string;
}

export async function evaluateMockExamSession(
    level: string,
    questions: ExamQuestionAnswer[],
    durationSeconds: number
): Promise<ExamDiagnosticReport> {
    const totalCount = questions.length;
    const correctCount = questions.filter(q => q.isCorrect).length;
    const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const passed = percentage >= 60;

    const overall_score_text = `${level}: ${correctCount}/${totalCount} (${percentage}%) - ${passed ? "MUVAFFAQIYATLI (O'TDI 🎉)" : "QAYTA TOPSHIRISH TAVSIYA ETILADI ⚠️"}`;

    const incorrectQuestions = questions.filter(q => !q.isCorrect);

    // Fallback heuristic report if no mistakes
    if (incorrectQuestions.length === 0) {
        return {
            overall_score_text,
            percentage,
            passed: true,
            top_3_mistakes: [],
            actionable_recommendation: "Ajoyib natija! Barcha savollarga to'g'ri javob berdingiz. Keyingi JLPT darajasiga o'tishni tavsiya etamiz."
        };
    }

    // Try AI deep analysis via DeepSeek
    try {
        const prompt = `JLPT/IELTS Imtihon Natijalari Tahlili:
Daraja: ${level}
Umumiy savollar: ${totalCount}
To'g'ri javoblar: ${correctCount}
Vaqt: ${durationSeconds} soniya

Noto'g'ri ishlangan savollar:
${incorrectQuestions.slice(0, 6).map((q, idx) => `
${idx + 1}. Savol: ${q.questionText}
Foydalanuvchi javobi: ${q.userAnswer}
To'g'ri javob: ${q.correctAnswer}
Izoh: ${q.explanationUzbek || 'Yo\'q'}
`).join('\n')}

Iltimos, ushbu xatolar asosida aniq TOP 3 TA Asosiy Xatoni tahlil qiling va 1 ta amaliy tavsiya bering.
Format faqat JSON bo'lsin:
{
  "top_3_mistakes": [
    {
      "title": "Grammatika/Zamon xatosi",
      "explanation_uz": "Nega foydalanuvchi adashganligi izohi",
      "correct_concept": "To'g'ri qoida yoki kalit so'z"
    }
  ],
  "actionable_recommendation": "Amaliy tavsiya matni o'zbek tilida"
}`;

        const aiResponseText = await callDeepSeek(
            prompt,
            undefined,
            "Siz Yapon va Ingliz tili imtihonlari (JLPT/IELTS) bo'yicha professional ekspert va AI murabbiyisiz. Javobingiz faqat so'ralgan JSON formatida bo'lsin.",
            true,
            'deepseek-chat',
            false
        );

        if (aiResponseText) {
            const cleanJson = aiResponseText.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(cleanJson);
            if (parsed && Array.isArray(parsed.top_3_mistakes)) {
                return {
                    overall_score_text,
                    percentage,
                    passed,
                    top_3_mistakes: parsed.top_3_mistakes.slice(0, 3),
                    actionable_recommendation: parsed.actionable_recommendation || "Xato qilingan mavzular ustida ko'proq mashq qiling."
                };
            }
        }
    } catch (e) {
        console.warn('AI exam evaluation fallback to heuristic:', e);
    }

    // Heuristic Fallback report if AI call fails or offline
    const fallbackMistakes = incorrectQuestions.slice(0, 3).map((q, idx) => ({
        title: `${idx + 1}-xato: ${q.section || 'Imtihon'} savoli`,
        explanation_uz: q.explanationUzbek || `Javobingiz: "${q.userAnswer}", lekin to'g'risi "${q.correctAnswer}" edi.`,
        correct_concept: `To'g'ri javob: ${q.correctAnswer}`
    }));

    return {
        overall_score_text,
        percentage,
        passed,
        top_3_mistakes: fallbackMistakes,
        actionable_recommendation: "Xato qilingan savollar izohini qayta ko'rib chiqing va JLPT grammatika lug'atini takrorlang."
    };
}
