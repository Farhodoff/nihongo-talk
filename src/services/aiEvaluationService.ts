import OpenAI from 'openai';

const getDeepSeekClient = () => {
  const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
  if (!apiKey || apiKey === 'dummy_key') {
    console.warn('VITE_DEEPSEEK_API_KEY topilmadi! AI baholash ishlamaydi.');
  }
  return new OpenAI({
    apiKey: apiKey || 'missing_key',
    baseURL: 'https://api.deepseek.com/v1',
    dangerouslyAllowBrowser: true
  });
};

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
    // Try to extract score and feedback manually
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
      const openai = getDeepSeekClient();
      const response = await openai.chat.completions.create({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        response_format: { type: 'json_object' }
      });

      const choices = response.choices;
      if (!choices || choices.length === 0) {
        throw new Error('DeepSeek javob bermadi (bo\'sh choices).');
      }

      const content = choices[0].message.content;
      if (!content) throw new Error("DeepSeek javob berdi, lekin content bo'sh.");

      return parseAiResponse(content);
    } catch (error: any) {
      console.error('Error evaluating writing:', error);
      if (error?.status === 401) {
        throw new Error('DeepSeek API kaliti noto\'g\'ri yoki muddati o\'tgan. VITE_DEEPSEEK_API_KEY ni tekshiring.');
      }
      if (error?.status === 429) {
        throw new Error('DeepSeek API rate limit. Biroz kutib qayta urinib ko\'ring.');
      }
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
      const openai = getDeepSeekClient();
      const response = await openai.chat.completions.create({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        response_format: { type: 'json_object' }
      });

      const choices = response.choices;
      if (!choices || choices.length === 0) {
        throw new Error('DeepSeek javob bermadi (bo\'sh choices).');
      }

      const content = choices[0].message.content;
      if (!content) throw new Error("DeepSeek javob berdi, lekin content bo'sh.");

      return parseAiResponse(content);
    } catch (error: any) {
      console.error('Error evaluating speaking:', error);
      if (error?.status === 401) {
        throw new Error('DeepSeek API kaliti noto\'g\'ri yoki muddati o\'tgan. VITE_DEEPSEEK_API_KEY ni tekshiring.');
      }
      if (error?.status === 429) {
        throw new Error('DeepSeek API rate limit. Biroz kutib qayta urinib ko\'ring.');
      }
      throw new Error(`Speaking baholashda xatolik: ${error?.message || 'Noma\'lum xato'}`);
    }
  }
};
