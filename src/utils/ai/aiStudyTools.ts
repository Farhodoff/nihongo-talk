import { aiCache, getAIConfig, parseAIError } from './aiConfig';
import { callOllama } from '../ollama';
import { callDeepSeek } from '../deepseek';

export interface SmartResource {
    title: string;
    type: 'video' | 'article' | 'book' | 'course';
    description: string;
    link: string;
}

export interface FullStudyPlan {
    schedule: {
        title: string;
        dayOffset: number;
        duration: number;
        description?: string;
    }[];
    resources: SmartResource[];
}

export const generateFullStudyPlan = async (
    topic: string,
    daysUntilExam: number,
    hoursPerDay: number,
    level: 'beginner' | 'intermediate' | 'advanced' = 'beginner',
    learningStyle: 'visual' | 'reading' | 'practical' = 'visual',
    _userKey?: string
): Promise<FullStudyPlan> => {
    const cacheKey = `plan-${topic}-${daysUntilExam}-${hoursPerDay}-${level}-${learningStyle}`;
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey) as FullStudyPlan;

    const levelDescriptions = {
        beginner: "This user is completely new to the topic. Explain fundamentals simply and clearly without jargon.",
        intermediate: "This user knows the basics. Skip introductions and focus on core concepts and deeper understanding.",
        advanced: "This user is experienced. Focus entirely on advanced topics, edge cases, best practices, and complex problems."
    };

    const styleDescriptions = {
        visual: "Focus heavily on recommending YouTube video tutorials, visual diagrams, and interactive content.",
        reading: "Focus heavily on recommending official documentation, books, and detailed articles/blogs.",
        practical: "Focus heavily on coding exercises, hands-on projects, platforms like LeetCode/HackerRank, and practical labs."
    };

    const prompt = `
        Sen professional Akademik Mentor va O'quv Rejalashtiruvchi uztozsan.
        Mavzu: "${topic}".
        Muddati: ${daysUntilExam} kun.
        Kunlik vaqt: ${hoursPerDay} soat.
        Foydalanuvchi darajasi: ${level} (${levelDescriptions[level]}).
        O'rganish uslubi: ${learningStyle} (${styleDescriptions[learningStyle]}).

        VAZIFA 1: KUNLIK JADVAL (Kuniga bittadan vazifa)
        Mavzuni foydalanuvchi darajasiga qarab to'g'ri taqsimla.
        - Har bir kun uchun bitta vazifa (0 dan ${daysUntilExam - 1} gacha).
        - Har bir vazifaning "description" qismida: "Nima uchun bu muhim?" va "Qanday qilib amaliyot qilish kerak?" degan savollarga qisqacha o'zbek tilida javob yoz.
        - Agar muddat 6 kundan ko'p bo'lsa, har haftada 1 kunni "Takrorlash (Review)" yoki "Amaliyot" uchun ajrat.

        VAZIFA 2: ENG ZO'R RESURSLAR (Aynan 6 ta taqdim et)
        Foydalanuvchining o'rganish uslubiga (${learningStyle}) eng mos keladigan eng sifatli 6 ta resursni tanla.
        - Ta'riflar (description) albatta o'zbek tilida bo'lishi shart!
        - "link" (havola) qismiga ishlamaydigan fake url bermang! Agar aniq urlni bilmasangiz, qidiruv tizimi urlidan foydalaning.

        OUTPUT FORMAT:
        Faqat va faqat YAGONA VALID JSON obyekt qaytar. Hech qanday markdown, izoh yoki text qo'shma. JSON struktura quyidagicha bo'lishi shart:
        
        {
          "schedule": [
            { 
              "title": "Vazifa nomi", 
              "dayOffset": 0,
              "duration": ${hoursPerDay * 60},
              "description": "Nima uchun muhim va qanday amaliyot qilish bo'yicha ko'rsatma..." 
            }
          ],
          "resources": [
            {
              "title": "Resurs nomi",
              "type": "video" | "article" | "book" | "course",
              "description": "Nima uchun bu resurs yaxshi ekanligi haqida qisqacha o'zbekcha ta'rif.",
              "link": "https://www.youtube.com/results?search_query=react+crash+course"
            }
          ]
        }
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateFullStudyPlan, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                true,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        const cleanedText = (text || '').replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!json.schedule || !Array.isArray(json.schedule)) throw new Error("Invalid Schedule Format");

        const resources = (json.resources || []).map((item: unknown) => {
            const resource = item as { title: string; type: 'video' | 'article' | 'book' | 'course'; description: string; link: string };
            return {
                ...resource,
                link: resource.link.startsWith('http') ? resource.link :
                    resource.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(resource.link)}` :
                        `https://www.google.com/search?q=${encodeURIComponent(resource.link)}`
            };
        });

        const result = {
            schedule: json.schedule,
            resources: resources
        };
        
        aiCache.set(cacheKey, result);
        return result;
    } catch (e) {
        console.error("AI Plan Error:", e);
        throw new Error(parseAIError(e));
    }
};

export const generateSmartResources = async (
    topic: string,
    learningStyle: 'visual' | 'reading' | 'practical' = 'visual',
    _userKey?: string
): Promise<{ title: string; type: 'video' | 'article' | 'book' | 'course'; description: string; link: string }[]> => {
    const cacheKey = `res-${topic}-${learningStyle}`;
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey) as { title: string; type: 'video' | 'article' | 'book' | 'course'; description: string; link: string }[];

    const prompt = `
        Mavzu: "${topic}".
        O'rganish uslubi: ${learningStyle}.
        Vazifa: Ushbu mavzuni o'rganish uchun eng mos keladigan 4 ta resursni topib ber.
        Javob Formati: Faqat JSON array bo'lsin: [{"title": "Resurs nomi", "type": "video"|"article"|"book"|"course", "description": "Qisqacha ta'rif", "link": "Aniq URL"}]
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateSmartResources, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                true,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        const cleanedText = (text || '').replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Invalid Format");

        const result = json.map((item: unknown) => {
            const resource = item as { title: string; type: 'video' | 'article' | 'book' | 'course'; description: string; link: string };
            return {
                ...resource,
                link: resource.link.startsWith('http') ? resource.link :
                    resource.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(resource.link)}` :
                        `https://www.google.com/search?q=${encodeURIComponent(resource.link)}`
            };
        });
        
        aiCache.set(cacheKey, result);
        return result;
    } catch (e) {
        console.error("Smart Resource Error:", e);
        return [];
    }
};

export const generateStudyInsight = async (
    stats: { subject: string; hours: number; mood: number; pendingTasks: number; masteryScore: number }[],
    _userKey?: string
): Promise<{ subject: string; advice: string }[]> => {
    const cacheKey = `insight-${JSON.stringify(stats)}`;
    if (aiCache.has(cacheKey)) return aiCache.get(cacheKey) as { subject: string; advice: string }[];

    const prompt = `
        Foydalanuvchi o'quv statistikasi: ${JSON.stringify(stats)}
        Vazifa: Eng ko'p e'tibor talab qiladigan 1-2 ta fanni aniqlang va aniq, motivatsiya beruvchi maslahat bering.
        
        Javob Formati: Faqat JSON array ko'rinishida bo'lsin: [{"subject": "Fan nomi", "advice": "O'zbek tilida aniq maslahat"}].
        Cheklov: Maksimal 2 ta taklif. Kirish so'zlari yoki qo'shimcha matn qo'shmang.
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateStudyInsight, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                true,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        const cleanedText = (text || '').replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) return [];
        aiCache.set(cacheKey, json);
        return json;
    } catch (e) {
        console.error("AI Insight Error", e);
        return [];
    }
};

export interface ExamQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export const generateExamWithAI = async (
    subjectName: string,
    notesContent: string,
    questionCount: number = 5,
    _userKey?: string
): Promise<ExamQuestion[]> => {
    const prompt = `
      Fan nomi: "${subjectName}"
      Fanga oid Konspektlar va Flashcardlar: "${notesContent.substring(0, 4000)}"
      
      Vazifa: Yuqoridagi ma'lumotlar va fan nomi asosida aynan ${questionCount} ta multiple choice (savol va 4 ta variantli) test savollarini yarating. 
      Savollar fanga va konspektlarga mos bo'lsin. Agar konspekt bo'sh bo'lsa, fanga oid umumiy bilimlar bo'yicha savol bering.
      Til: O'zbek tili.
      
      Javob Formati: Faqat quyidagi strukturali VALID JSON array bo'lsin:
      [
        {
          "id": 1,
          "question": "Savol matni",
          "options": ["Variant A", "Variant B", "Variant C", "Variant D"],
          "correctAnswer": 0,
          "explanation": "Bu javobning to'g'riligi sababi va boshqa variantlar noto'g'riligi izohi (O'zbek tilida)"
        }
      ]
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateExamWithAI, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                true,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        const cleanedText = (text || '').replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Format xato");
        return json.map((item: unknown) => {
            const temp = item as { id?: number; question?: string; options?: string[]; correctAnswer?: number; explanation?: string };
            return {
                id: Number(temp.id || 0),
                question: String(temp.question || ''),
                options: Array.isArray(temp.options) ? temp.options.map(String) : [],
                correctAnswer: Number(temp.correctAnswer ?? 0),
                explanation: String(temp.explanation || '')
            };
        });
    } catch (e) {
        console.error("AI Exam Generation Error", e);
        throw new Error(parseAIError(e));
    }
};

export interface AITimetableScheduleItem {
    title: string;
    description: string;
    date: string; // YYYY-MM-DD
    startTime: string; // HH:mm
    durationMinutes: number;
    eventType: 'study' | 'exam' | 'reminder';
}

export const generateAITimetable = async (
    goalDescription: string,
    dailyHours: number,
    daysCount: number = 7
): Promise<AITimetableScheduleItem[]> => {
    const todayStr = new Date().toISOString().split('T')[0];
    const prompt = `
      You are an expert AI Study Planner & Academic Mentor.
      The user wants an automated study timetable for the goal: "${goalDescription}".
      Daily study limit: ${dailyHours} hours per day.
      Generate a realistic, structured study schedule starting from today (${todayStr}) for the next ${daysCount} days.

      Return JSON array of objects with the exact schema:
      [
        {
          "title": "Subject/Topic Title in Uzbek (e.g. IELTS Reading Mock Test 1)",
          "description": "Specific action plan in Uzbek",
          "date": "YYYY-MM-DD",
          "startTime": "HH:mm (e.g. 09:00, 14:00, 18:00)",
          "durationMinutes": 60,
          "eventType": "study"
        }
      ]

      Constraint: Return ONLY valid JSON array without any markdown formatting or commentary.
    `;

    try {
        const config = getAIConfig();
        let items: any = null;

        if (config.provider === 'ollama') {
            try {
                const response = await callOllama(prompt);
                const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
                items = JSON.parse(cleanedText);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateAITimetable, falling back to DeepSeek:", err);
            }
        }

        if (!items) {
            const response = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                true,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            items = JSON.parse(cleanedText);
        }

        if (Array.isArray(items)) {
            return items.map(item => ({
                title: item.title || 'Dars Mashg\'uloti',
                description: item.description || 'AI tomonidan rejalashtirilgan mashg\'ulot',
                date: item.date || todayStr,
                startTime: item.startTime || '10:00',
                durationMinutes: typeof item.durationMinutes === 'number' ? item.durationMinutes : 60,
                eventType: item.eventType || 'study'
            }));
        }
        return [];
    } catch (err) {
        console.error("AI Timetable Error:", err);
        return [];
    }
};