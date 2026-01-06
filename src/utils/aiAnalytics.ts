import { StudySession } from '../context/StudyPlannerContext';

export const generateStudyInsights = async (sessions: StudySession[], subjects: any[], apiKey: string) => {
    // 1. Data Aggregation
    const nightSessions = sessions.filter(s => {
        const hour = new Date(s.start_time).getHours();
        return hour >= 22 || hour <= 4;
    });

    const morningSessions = sessions.filter(s => {
        const hour = new Date(s.start_time).getHours();
        return hour >= 5 && hour <= 11;
    });

    const afternoonSessions = sessions.filter(s => {
        const hour = new Date(s.start_time).getHours();
        return hour >= 12 && hour <= 17;
    });

    const eveningSessions = sessions.filter(s => {
        const hour = new Date(s.start_time).getHours();
        return hour >= 18 && hour <= 21;
    });

    const calculateAvgMood = (sessionsArr: StudySession[]) => {
        if (sessionsArr.length === 0) return 0;
        const total = sessionsArr.reduce((acc, s) => acc + (s.mood_after || 0), 0);
        return (total / sessionsArr.length).toFixed(1);
    };

    const avgNightMood = calculateAvgMood(nightSessions);
    const avgMorningMood = calculateAvgMood(morningSessions);
    const avgAfternoonMood = calculateAvgMood(afternoonSessions);
    const avgEveningMood = calculateAvgMood(eveningSessions);

    // Subject popularity
    const subjectCounts: Record<string, number> = {};
    sessions.forEach(s => {
        if (s.subject_id) {
            subjectCounts[s.subject_id] = (subjectCounts[s.subject_id] || 0) + 1;
        }
    });

    // Get top 3 subjects names
    const topSubjectIds = Object.entries(subjectCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([id]) => id);

    const topSubjects = topSubjectIds.map(id => subjects.find(s => s.id === id)?.name).filter(Boolean).join(", ");

    // 2. Prepare Prompt
    const prompt = `
    Siz professional ta'lim tahlilchisisiz (AI Study Coach). Quyida foydalanuvchining o'qish statistikasi keltirilgan:

    📊 VAQT VA SAMARADORLIK (1-5 ball):
    - 🌅 Tong (05:00-11:00): ${morningSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgMorningMood}/5
    - ☀️ Tush (12:00-17:00): ${afternoonSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgAfternoonMood}/5
    - 🌆 Kech (18:00-21:00): ${eveningSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgEveningMood}/5
    - 🌙 Tun (22:00-04:00): ${nightSessions.length} ta sessiya, O'rtacha kayfiyat: ${avgNightMood}/5

    📚 ENG KO'P O'QILGAN FANLAR: ${topSubjects || "Ma'lum emas"}

    VAZIFA:
    Ushbu ma'lumotlarga asoslanib, foydalanuvchiga O'ZBEK tilida qisqa, aniq va do'stona tahliliy xulosa bering.
    
    TALABLAR:
    1. Agar bir vaqt oralig'ida samaradorlik boshqasiga qaraganda ancha yuqori bo'lsa (masalan, Tong > Tun), buni foizda yoki aniq farq bilan ko'rsating va shu vaqtda qiyin fanlarni o'qishni maslahat bering.
    2. Agar tuni bilan ko'p o'qigan bo'lsa va kayfiyat past bo'lsa, uyqu rejimini to'g'irlashni maslahat bering.
    3. Javobingiz 3-4 ta qisqa jumladan iborat bo'lsin. Juda uzun bo'lmasin.
    4. Motivatsion ohangda bo'lsin.
    `;

    // 3. Call Gemini API
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API request failed');
        }

        const result = await response.json();
        return result.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("AI Generation Error:", error);
        throw error;
    }
};
