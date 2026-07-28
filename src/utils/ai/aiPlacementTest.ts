import { getAIConfig, getGenAI, requestWithRetry } from './aiConfig';
import { callDeepSeek } from '../deepseek';

export interface PlacementQuestion {
    id: string;
    question: string;
    options: string[];
}

export interface PlacementResult {
    determinedLevel: string;
    feedback: string;
    score: number;
    total: number;
}

export const generatePlacementQuestions = async (type: 'jlpt' | 'ielts'): Promise<PlacementQuestion[]> => {
    const prompt = type === 'jlpt' 
        ? `Act as an expert Japanese JLPT examiner. Generate exactly 5 multiple choice questions to determine a student's Japanese level (from N5 to N3).
           Include a mix of grammar, vocabulary, and kanji reading.
           Provide 4 options for each question.
           Output ONLY valid JSON in this format:
           [
             {
               "id": "q1",
               "question": "Choose the correct reading for 水",
               "options": ["みず", "き", "ひ", "つち"]
             }
           ]`
        : `Act as an expert IELTS examiner. Generate exactly 5 multiple choice questions to determine a student's English level (from Band 4.0 to 7.0).
           Include a mix of advanced vocabulary, grammar, and sentence structure.
           Provide 4 options for each question.
           Output ONLY valid JSON in this format:
           [
             {
               "id": "q1",
               "question": "Which word is a synonym for 'ubiquitous'?",
               "options": ["Rare", "Found everywhere", "Expensive", "Dangerous"]
             }
           ]`;

    const config = getAIConfig();
    let parsed: PlacementQuestion[] = [];

    // Try DeepSeek
    if (config.provider === 'deepseek' || config.deepseekKey) {
        try {
            const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            parsed = JSON.parse(cleanedText);
            return parsed;
        } catch (dsErr) {
            console.warn("DeepSeek placement generation failed, trying Gemini...", dsErr);
        }
    }

    // Try Gemini
    try {
        const apiKey = config.geminiKey || (config.coachAiModel === 'gemini' && config.coachApiKey && !config.coachApiKey.startsWith('sk-') ? config.coachApiKey : undefined);
        const result = (await requestWithRetry((genAI) => {
            const ai = genAI || getGenAI(apiKey || undefined);
            const model = ai.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig: { responseMimeType: "application/json" } });
            return model.generateContent(prompt);
        }, 2, 1000, apiKey || undefined)) as any;
        
        const text = (await result.response).text().trim();
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        parsed = JSON.parse(cleanedText);
        return parsed;
    } catch (gErr) {
        console.warn("Gemini placement generation failed", gErr);
        throw new Error("Savollarni generatsiya qilishda xatolik yuz berdi. Internetni tekshiring.");
    }
};

export const evaluatePlacementTest = async (
    type: 'jlpt' | 'ielts',
    qaList: { question: string, userAnswer: string }[]
): Promise<PlacementResult> => {
    const transcript = qaList.map(qa => `Q: ${qa.question}\nStudent's Answer: ${qa.userAnswer}`).join('\n\n');
    
    const prompt = type === 'jlpt'
        ? `Act as an expert Japanese JLPT examiner. Evaluate the following 5 questions and the student's answers.
           Determine their exact JLPT level (e.g., 'N5', 'N4', 'N3', 'N2', 'N1') based on their performance.
           Provide the result strictly in this JSON schema:
           {
             "determinedLevel": "N4",
             "score": 3,
             "total": 5,
             "feedback": "O'zbek tilida qisqacha tahlil va xatolar haqida izoh."
           }
           
           Transcript:
           ${transcript}`
        : `Act as an expert IELTS examiner. Evaluate the following 5 questions and the student's answers.
           Determine their exact IELTS Band score (e.g., '4.0', '5.0', '6.0', '7.0') based on their performance.
           Provide the result strictly in this JSON schema:
           {
             "determinedLevel": "6.0",
             "score": 4,
             "total": 5,
             "feedback": "O'zbek tilida qisqacha tahlil va xatolar haqida izoh."
           }
           
           Transcript:
           ${transcript}`;

    const config = getAIConfig();
    let parsed: any;

    if (config.provider === 'deepseek' || config.deepseekKey) {
        try {
            const response = await callDeepSeek(prompt, config.deepseekKey || '', undefined, true, config.deepseekModel, config.deepseekThinkingMode);
            const cleanedText = response.replace(/```json/g, "").replace(/```/g, "").trim();
            parsed = JSON.parse(cleanedText);
            return parsed;
        } catch (dsErr) {
            console.warn("DeepSeek placement evaluation failed, trying Gemini...", dsErr);
        }
    }

    try {
        const apiKey = config.geminiKey || (config.coachAiModel === 'gemini' && config.coachApiKey && !config.coachApiKey.startsWith('sk-') ? config.coachApiKey : undefined);
        const result = (await requestWithRetry((genAI) => {
            const ai = genAI || getGenAI(apiKey || undefined);
            const model = ai.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig: { responseMimeType: "application/json" } });
            return model.generateContent(prompt);
        }, 2, 1000, apiKey || undefined)) as any;
        
        const text = (await result.response).text().trim();
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        parsed = JSON.parse(cleanedText);
        return parsed;
    } catch (gErr) {
        console.warn("Gemini placement evaluation failed", gErr);
        throw new Error("Darajani aniqlashda xatolik yuz berdi. Internetni tekshiring.");
    }
};
