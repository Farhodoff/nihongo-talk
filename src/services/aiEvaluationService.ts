import { callDeepSeek } from '../utils/deepseek';
import { getAIConfig } from '../utils/ai/aiConfig';

export interface AiEvaluationResult {
  score: number;
  feedback: string;
  criteriaScores?: {
    vocabulary?: number;
    grammar?: number;
    taskAchievement?: number;
    coherence?: number;
    fluency?: number;
    pronunciation?: number;
  };
}

const parseAiResponse = (content: string): AiEvaluationResult => {
  // Strip markdown code fences if present
  let cleaned = content.trim();
  cleaned = cleaned.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();

  try {
    return JSON.parse(cleaned) as AiEvaluationResult;
  } catch {
    console.error('Failed to parse AI response as JSON:', cleaned);
    return {
      score: 0,
      feedback: cleaned || 'AI javobini qayta ishlashda xatolik yuz berdi.'
    };
  }
};

export const aiEvaluationService = {
  async evaluateWriting(
    examType: 'IELTS' | 'JLPT',
    promptText: string,
    userResponse: string
  ): Promise<AiEvaluationResult> {
    const systemPrompt = `You are an expert ${examType} examiner. Evaluate the following writing response based on official ${examType} grading criteria.
    Provide your evaluation in STRICT JSON format with the following structure:
    {
      "score": <number, overall band score or JLPT score out of 60>,
      "feedback": "<detailed text feedback in Uzbek explaining the mistakes and how to improve>",
      "criteriaScores": {
        "vocabulary": <number>,
        "grammar": <number>,
        "taskAchievement": <number>,
        "coherence": <number>
      }
    }
    Return ONLY the JSON object, no markdown, no code fences.`;

    const userMessage = `Prompt/Question:\n${promptText}\n\nUser Response:\n${userResponse}`;

    try {
      const config = getAIConfig();
      const content = await callDeepSeek(
        userMessage,
        config.deepseekKey || null,
        systemPrompt,
        true,
        config.deepseekModel,
        config.deepseekThinkingMode
      );

      if (!content) {
        throw new Error('DeepSeek javob bermadi.');
      }

      return parseAiResponse(content);
    } catch (error: any) {
      console.error('Error evaluating writing:', error);
      throw new Error(`Writing baholashda xatolik: ${error?.message || 'Noma\'lum xato'}`);
    }
  },

  async evaluateSpeakingTranscript(
    examType: 'IELTS' | 'JLPT',
    promptText: string,
    transcript: string
  ): Promise<AiEvaluationResult> {
    const systemPrompt = `You are an expert ${examType} speaking examiner. You are given a transcript of a user's spoken response.
    Evaluate it based on official ${examType} grading criteria for speaking. Focus on vocabulary, grammar, and coherence.
    Provide your evaluation in STRICT JSON format with the following structure:
    {
      "score": <number, overall band score or JLPT score>,
      "feedback": "<detailed text feedback in Uzbek explaining the mistakes and how to improve>",
      "criteriaScores": {
        "vocabulary": <number>,
        "grammar": <number>,
        "fluency": <number>,
        "pronunciation": <number>
      }
    }
    Return ONLY the JSON object, no markdown, no code fences.`;

    const userMessage = `Prompt/Question:\n${promptText}\n\nUser Spoken Transcript:\n${transcript}`;

    try {
      const config = getAIConfig();
      const content = await callDeepSeek(
        userMessage,
        config.deepseekKey || null,
        systemPrompt,
        true,
        config.deepseekModel,
        config.deepseekThinkingMode
      );

      if (!content) {
        throw new Error('DeepSeek javob bermadi.');
      }

      return parseAiResponse(content);
    } catch (error: any) {
      console.error('Error evaluating speaking:', error);
      throw new Error(`Speaking baholashda xatolik: ${error?.message || 'Noma\'lum xato'}`);
    }
  }
};
