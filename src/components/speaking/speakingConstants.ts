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
      title: 'カフェ・買い物 (Shopping & Cafe)',
      text: 'カフェでの注文やお店での買い物の練習をしたいです。',
      icon: '☕',
    },
    {
      title: '日常会話 (Daily Japanese)',
      text: '日本語で楽しい日常会話をしましょう！今日の予定や趣味を話したいです。',
      icon: '🗣️',
    },
    {
      title: '敬語・面接 (Interview & Keigo)',
      text: '丁寧な敬語や面接の練習をお願いします。',
      icon: '💼',
    },
  ],
};

export const getCoachInitialGreeting = (lang: 'en' | 'ja', p: CoachPersona): string => {
  if (lang === 'ja') {
    switch (p) {
      case 'roast':
        return 'こんにちは！鬼の雪先生です。遠慮せずに日本語で話してください！';
      case 'gentle':
        return 'こんにちは！雪先生です。いつでもリラックスしてお話ししてくださいね。';
      case 'ielts':
        return 'こんにちは！雪先生です。JLPTスピーキングの練習を始めましょう！';
      case 'interview':
        return 'こんにちは。本日のIT面接を担当いたします。自己紹介をお願いします。';
      case 'travel':
        return 'いらっしゃいませ！成田空港へようこそ。どこへ行きますか？';
      case 'casual':
        return 'やあ！ユキだよ。元気？今日は何について話そうか！';
    }
  } else {
    switch (p) {
      case 'roast':
        return 'Hello! Strict Oni Yuki-sensei here. Speak in Japanese and prepare for corrections!';
      case 'gentle':
        return "Hello! I'm Yuki-sensei, your Japanese language tutor. Feel free to talk whenever you're ready!";
      case 'ielts':
        return "Good day! I'm Yuki-sensei. Let's practice Japanese JLPT Speaking. Shall we begin?";
      case 'interview':
        return "Hello! Welcome to your Japanese IT Job Mock Interview. Let's start with a self-introduction in Japanese.";
      case 'travel':
        return "Konnichiwa! Welcome to Narita Airport. Let's practice travel Japanese.";
      case 'casual':
        return "Hey friend! I'm Yuki. Let's chat in casual Japanese. What's on your mind today?";
    }
  }
};
