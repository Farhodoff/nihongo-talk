import { CoachPersona } from './speakingTypes';

export const PROMPT_SUGGESTIONS_BY_LANG: Record<
  'en' | 'ja',
  { title: string; text: string; icon: string }[]
> = {
  en: [
    {
      title: 'Introduce Yourself',
      text: "Hajimemashite. Let's practice self-introduction in Japanese. Can you ask me questions to prompt my self-intro?",
      icon: '👋',
    },
    {
      title: 'Roast My Japanese',
      text: 'I want you to be a strict Japanese teacher. Correct every grammatical or pronunciation mistake I make in Japanese!',
      icon: '🔥',
    },
    {
      title: 'JLPT Speaking Mock',
      text: "Let's practice for JLPT speaking. Give me a daily conversation topic to talk about.",
      icon: '📝',
    },
    {
      title: 'IT Mock Interview',
      text: 'Act as a Japanese IT recruiter and ask me 3 interview questions in Japanese.',
      icon: '💼',
    },
  ],
  ja: [
    {
      title: '自己紹介 (Jikoshoukai)',
      text: 'はじめまして。自己紹介の練習をしたいです。',
      icon: '🙋',
    },
    {
      title: 'IT面接 (IT Mock Interview)',
      text: '日本のIT企業の面接練習をお願いします。自己紹介からスタートしてください。',
      icon: '💻',
    },
    {
      title: '敬語チェック (Keigo Check)',
      text: '私の敬語の使い方をチェックしてアドバイスをください。',
      icon: '📖',
    },
    {
      title: '日常会話 (Daily Japanese)',
      text: '日本語で楽しい日常会話をしましょう！',
      icon: '🗣️',
    },
  ],
};

export const getCoachInitialGreeting = (lang: 'en' | 'ja', p: CoachPersona): string => {
  if (lang === 'ja') {
    switch (p) {
      case 'roast':
        return 'こんにちは！鬼先生です。遠慮せずに日本語で話してください！';
      case 'gentle':
        return 'こんにちは！日本語の先生です。いつでもお話ししてくださいね。';
      case 'ielts':
        return 'こんにちは！JLPTスピーキングの練習を始めましょう！';
      case 'interview':
        return 'こんにちは。本日のIT面接を担当いたします。自己紹介をお願いします。';
      case 'travel':
        return 'いらっしゃいませ！成田空港へようこそ。どのようなご要件でしょうか？';
      case 'casual':
        return 'やあ！元気？今日は何について話そうか！';
    }
  } else {
    switch (p) {
      case 'roast':
        return 'Hello! Strict Japanese Roast Coach here. Speak in Japanese and prepare for corrections!';
      case 'gentle':
        return "Hello! I'm your Japanese language tutor. Feel free to start talking in Japanese whenever you're ready!";
      case 'ielts':
        return "Good day! Let's practice Japanese JLPT Speaking. Shall we begin?";
      case 'interview':
        return "Hello! Welcome to your Japanese IT Job Mock Interview. Let's start with a self-introduction in Japanese.";
      case 'travel':
        return "Konnichiwa! Welcome to Narita Airport. Let's practice travel Japanese.";
      case 'casual':
        return "Hey friend! Let's chat in casual Japanese. What's on your mind today?";
    }
  }
};
