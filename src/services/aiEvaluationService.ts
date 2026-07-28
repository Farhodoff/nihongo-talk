import OpenAI from 'openai';

// Assuming we store the DeepSeek API key in env variable VITE_DEEPSEEK_API_KEY
// In production, AI evaluation should ideally happen on the server/edge function to hide the API key.
// But for now, we'll keep it on the client/service side as requested.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY || 'dummy_key',
  baseURL: 'https://api.deepseek.com/v1',
  dangerouslyAllowBrowser: true // Required since we are in Vite client-side code
});

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

export const aiEvaluationService = {
  /**
   * Evaluates an IELTS or JLPT writing response.
   */
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
    `;

    const userMessage = `Prompt/Question:\n${promptText}\n\nUser Response:\n${userResponse}`;

    try {
      const response = await openai.chat.completions.create({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        response_format: { type: 'json_object' }
      });

      const content = response.choices[0].message.content;
      if (!content) throw new Error("No content received from DeepSeek");

      const parsed = JSON.parse(content) as AiEvaluationResult;
      return parsed;
    } catch (error) {
      console.error('Error evaluating writing:', error);
      throw new Error('Failed to evaluate writing with DeepSeek');
    }
  },

  /**
   * Evaluates a speaking response.
   * Note: DeepSeek doesn't natively support Audio input directly via Chat API yet in the same way as Whisper.
   * For a real implementation, you'd first transcribe the audio using Whisper/Google STT, 
   * then send the transcript to DeepSeek.
   */
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
    `;

    const userMessage = `Prompt/Question:\n${promptText}\n\nUser Spoken Transcript:\n${transcript}`;

    try {
      const response = await openai.chat.completions.create({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        response_format: { type: 'json_object' }
      });

      const content = response.choices[0].message.content;
      if (!content) throw new Error("No content received from DeepSeek");

      const parsed = JSON.parse(content) as AiEvaluationResult;
      return parsed;
    } catch (error) {
      console.error('Error evaluating speaking:', error);
      throw new Error('Failed to evaluate speaking transcript with DeepSeek');
    }
  }
};
