import { getAIConfig, parseAIError } from './aiConfig';
import { callOllama } from '../ollama';
import { callDeepSeek } from '../deepseek';

export const expandNoteWithAI = async (
    content: string,
    subjectName: string,
    _userKey?: string
): Promise<string> => {
    const prompt = `
      Fan: "${subjectName}"
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Vazifa: Ushbu konspekt matnini o'rganilayotgan fan doirasida kengaytiring va batafsilroq ma'lumotlar bilan boyiting. 
      Qo'shimcha ilmiy faktlar, tushunchalar va aniq misollar qo'shing.
      Format: Markdown formatidan foydalaning.
      Til: O'zbek tili.
      Cheklov: Faqat yangilangan, kengaytirilgan konspekt matnini qaytaring, boshqa hech qanday izoh, sarlavha yoki kirish so'zlarini yozmang.
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in expandNoteWithAI, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                false,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        return (text || '').replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Expand Note Error", e);
        throw new Error(parseAIError(e));
    }
};

export const summarizeNoteWithAI = async (
    content: string,
    subjectName: string,
    _userKey?: string
): Promise<string> => {
    const prompt = `
      Fan: "${subjectName}"
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Vazifa: Ushbu konspekt matnini qisqacha xulosalang (summary yarating). Muhim tushunchalar va asosiy fikrlarni saqlab qoling.
      Format: Markdown formatidan foydalaning (qisqa bandlar/punktlar shaklida bo'lsin).
      Til: O'zbek tili.
      Cheklov: Faqat tayyor xulosani qaytaring, boshqa hech qanday qo'shimcha kirish yoki tushuntirish yozmang.
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in summarizeNoteWithAI, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                false,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        return (text || '').replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Summarize Note Error", e);
        throw new Error(parseAIError(e));
    }
};

export const fixNoteSpellingWithAI = async (
    content: string,
    subjectName: string,
    _userKey?: string
): Promise<string> => {
    const prompt = `
      Fan: "${subjectName}"
      Konspekt matni: "${content.substring(0, 4000)}"
      
      Vazifa: Ushbu konspekt matnidagi barcha grammatik, imlo va tinish belgilari xatolarini tuzatib chiqing. Matn mazmuni va uslubini o'zgartirmang, faqat to'g'ri yozilishini ta'minlang.
      Format: Markdown formatida bo'lsin.
      Til: O'zbek tili.
      Cheklov: Faqat tuzatilgan tayyor matnni qaytaring, boshqa hech qanday izoh yozmang.
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in fixNoteSpellingWithAI, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                false,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        return (text || '').replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Fix Spelling Error", e);
        throw new Error(parseAIError(e));
    }
};

/**
 * Generates Mermaid.js Mind Map code based on user notes via DeepSeek.
 */
export const generateMindMapWithAI = async (
    content: string,
    _userKey?: string
): Promise<string> => {
    const prompt = `
      Siz expert darajasidagi Mind Map yaratuvchi AIsiz.
      Foydalanuvchi sizga mavzu, yo'riqnoma yoki matn beradi.
      Sizning vazifangiz shu mavzuni chuqur tahlil qilib, kerakli barcha ma'lumotlarni (konseptlar, texnologiyalar, misollar) o'zingizning bilimingizdan qo'shgan holda, batafsil va keng qamrovli Mermaid.js "mindmap" kodini yaratishdir.
      
      Foydalanuvchi so'rovi: "${content.substring(0, 4000)}"
      
      Qoidalar:
      1. Agar foydalanuvchi shunchaki mavzu (masalan, "JavaScript") yoki qandaydir yo'riqnoma bersa, siz uning ichini o'zingizning bilimingiz asosida aniq va to'g'ri ma'lumotlar bilan to'ldiring. Aslo quruq sarlavhalarning o'zini qaytarmang!
      2. Agar foydalanuvchi xarita qanday shoxlarga bo'linishi kerakligini aytgan bo'lsa, o'sha shoxlarni yarating va har bir shoxning ichini tegishli muhim mavzular (terminlar, texnologiyalar, tushunchalar) bilan kengaytiring.
      3. Hech qanday tushuntirishsiz, faqatgina toza kod holatida qaytaring (hech qanday \`\`\`mermaid yoki \`\`\`markdown belgilarisiz, to'g'ridan to'g'ri "mindmap" so'zidan boshlang).
      4. O'zbek tilidan foydalaning.
      5. Mermaid.js ning "mindmap" formatidan foydalaning. Misol:
mindmap
  root((Mavzu nomi))
    Tarmoq 1
      Ost-tarmoq 1
      Ost-tarmoq 2
    Tarmoq 2
      Ost-tarmoq 3
    `;

    try {
        const config = getAIConfig();
        let text: string | null = null;

        if (config.provider === 'ollama') {
            try {
                text = await callOllama(prompt);
            } catch (err) {
                console.warn("[AI Fallback] Ollama failed in generateMindMapWithAI, falling back to DeepSeek:", err);
            }
        }

        if (!text) {
            text = await callDeepSeek(
                prompt,
                config.deepseekKey || '',
                undefined,
                false,
                config.deepseekModel,
                config.deepseekThinkingMode
            );
        }

        return (text || '').replace(/```mermaid/g, "").replace(/```markdown/g, "").replace(/```/g, "").trim();
    } catch (e) {
        console.error("AI Mind Map Error", e);
        throw new Error(parseAIError(e));
    }
};

export interface ExtractedVocabItem {
    front: string;
    back: string;
    phonetic: string;
    example: string;
}

export const extractVocabularyFromText = async (text: string): Promise<ExtractedVocabItem[]> => {
    const prompt = `
      Act as an IELTS Academic Vocabulary Specialist.
      Analyze the following text and extract 5 to 10 key B1-C2 level vocabulary words/phrases for an English learner.
      Provide Uzbek translation, phonetic transcription, and an example sentence.

      Text: "${text.substring(0, 2000)}"

      Output JSON Schema (Return ONLY valid JSON array):
      [
        {
          "front": "Word or Phrase",
          "back": "Uzbekcha ma'nosi",
          "phonetic": "/fonetik transkripsiya/",
          "example": "English example sentence from context or relevant use case."
        }
      ]
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
        return JSON.parse(cleanedText);
    } catch (dsErr) {
        console.warn("DeepSeek vocab extraction failed, returning default vocabulary:", dsErr);
    }

    return [
        { front: "Extract", back: "Ajratib olmoq, terib olmoq", phonetic: "/ˈek.strækt/", example: "We extract key words from reading texts." },
        { front: "Vocabulary", back: "Lug'at zaxirasi", phonetic: "/vəˈkæb.jə.lər.i/", example: "Building vocabulary improves writing." }
    ];
};