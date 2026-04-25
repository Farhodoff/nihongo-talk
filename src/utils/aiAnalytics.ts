import { StudySession } from '../types';
import { callOllama, isOllamaAvailable } from './ollama';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { requestWithRetry } from "./ai";

type AIProvider = 'ollama' | 'gemini';

const getAIProvider = async (): Promise<AIProvider> => {
    const ollamaUrl = import.meta.env.VITE_OLLAMA_URL;
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (ollamaUrl) {
        const available = await isOllamaAvailable();
        if (available) return 'ollama';
    }
    if (geminiKey) return 'gemini';
    throw new Error("AI provider not configured.");
};

export const generateStudyInsights = async (sessions: StudySession[], subjects: any[], apiKey: string) => {
    // Time of Day Analysis
    const morningSessions = sessions.filter(s => {
        const hour = new Date(s.startTime).getHours();
        return hour >= 6 && hour < 12;
    });

    const afternoonSessions = sessions.filter(s => {
        const hour = new Date(s.startTime).getHours();
        return hour >= 12 && hour < 18;
    });

    const eveningSessions = sessions.filter(s => {
        const hour = new Date(s.startTime).getHours();
        return hour >= 18 && hour < 24;
    });

    const nightSessions = sessions.filter(s => {
        const hour = new Date(s.startTime).getHours();
        return hour >= 0 && hour < 6;
    });

    const calculateAvgMood = (sessionsArr: StudySession[]) => {
        if (sessionsArr.length === 0) return 0;
        const total = sessionsArr.reduce((acc, s) => acc + (s.moodAfter || 0), 0);
        return (total / sessionsArr.length).toFixed(1);
    };

    const avgNightMood = calculateAvgMood(nightSessions);
    const avgMorningMood = calculateAvgMood(morningSessions);
    const avgAfternoonMood = calculateAvgMood(afternoonSessions);
    const avgEveningMood = calculateAvgMood(eveningSessions);

    const subjectCounts: Record<string, number> = {};
    sessions.forEach(s => {
        if (s.subjectId) {
            subjectCounts[s.subjectId] = (subjectCounts[s.subjectId] || 0) + 1;
        }
    });

    const topSubjectIds = Object.entries(subjectCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([id]) => id);

    const topSubjects = topSubjectIds.map(id => subjects.find(s => s.id === id)?.name).filter(Boolean).join(", ");

    const prompt = `
    Siz professional ta'lim tahlilchisisiz (AI Study Coach). Quyida foydalanuvchining o'qish statistikasi keltirilgan:

    📊 VAQT VA SAMARADORLIK (1-5 ball):
    - 🌅 Tong (05:00-11:00): ${morningSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgMorningMood}/5
    - ☀️ Tush (12:00-17:00): ${afternoonSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgAfternoonMood}/5
    - 🌆 Kech (18:00-21:00): ${eveningSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgEveningMood}/5
    - 🌙 Tun (22:00-04:00): ${nightSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgNightMood}/5

    📚 ENG KO'P O'QILGAN FANLAR: ${topSubjects || "Ma'lum emas"}

    VAZIFA: O'ZBEK tilida qisqa (3-4 jumla), motivatsion tahliliy xulosa bering.
    `;

    try {
        const provider = await getAIProvider();

        if (provider === 'ollama') {
            return await callOllama(prompt);
        } else {
            // Standardized using SDK and requestWithRetry
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            
            const result = await requestWithRetry(() => model.generateContent(prompt));
            const response = await result.response;
            return response.text();
        }
    } catch (error) {
        console.error("AI Generation Error:", error);
        throw error;
    }
};
