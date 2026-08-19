/**
 * Strict AI Output Schema Validators
 * Prevents UI crashes from malformed, missing, or out-of-bounds AI responses.
 */

/**
 * Validates and normalizes IELTS evaluation response
 */
export function validateIeltsResponse(rawObj, fallbackEssay = '') {
  if (!rawObj || typeof rawObj !== 'object') {
    return {
      overallBand: 6.0,
      scores: {
        taskAchievement: 6.0,
        coherenceAndCohesion: 6.0,
        lexicalResource: 6.0,
        grammaticalRange: 6.0,
      },
      summary: 'Insho qabul qilindi, ammo baholash strukturasida noaniqlik yuz berdi.',
      strengths: ['Grammatika asoslari yaxshi.'],
      improvements: ['Lug\'at boyligini yanada oshirish tavsiya etiladi.'],
      correctedEssay: fallbackEssay || '',
    };
  }

  const clampBand = (val, defaultVal = 6.0) => {
    const num = Number(val);
    if (isNaN(num) || num < 0 || num > 9) return defaultVal;
    return Math.round(num * 2) / 2; // Rounds to nearest 0.5 step (IELTS standard)
  };

  const scoresObj = rawObj.scores && typeof rawObj.scores === 'object' ? rawObj.scores : {};

  const taskAchievement = clampBand(scoresObj.taskAchievement || scoresObj.taskResponse, 6.0);
  const coherenceAndCohesion = clampBand(scoresObj.coherenceAndCohesion, 6.0);
  const lexicalResource = clampBand(scoresObj.lexicalResource, 6.0);
  const grammaticalRange = clampBand(scoresObj.grammaticalRange || scoresObj.grammaticalRangeAndAccuracy, 6.0);

  const calculatedOverall = Math.round(((taskAchievement + coherenceAndCohesion + lexicalResource + grammaticalRange) / 4) * 2) / 2;
  const overallBand = clampBand(rawObj.overallBand, calculatedOverall);

  const summary = typeof rawObj.summary === 'string' && rawObj.summary.trim().length > 0
    ? rawObj.summary.trim().substring(0, 3000)
    : 'Insho tahlil qilindi.';

  const sanitizeStringArray = (arr, maxItems = 10) => {
    if (!Array.isArray(arr)) return [];
    return arr
      .filter(item => typeof item === 'string' && item.trim().length > 0)
      .slice(0, maxItems)
      .map(item => item.trim().substring(0, 500));
  };

  const strengths = sanitizeStringArray(rawObj.strengths);
  const improvements = sanitizeStringArray(rawObj.improvements);

  const correctedEssay = typeof rawObj.correctedEssay === 'string' && rawObj.correctedEssay.trim().length > 0
    ? rawObj.correctedEssay.trim()
    : fallbackEssay || '';

  return {
    overallBand,
    scores: {
      taskAchievement,
      coherenceAndCohesion,
      lexicalResource,
      grammaticalRange,
    },
    summary,
    strengths: strengths.length > 0 ? strengths : ['Asosiy fikrlar yaxshi bayon etilgan.'],
    improvements: improvements.length > 0 ? improvements : ['Murakkab gap tuzilmalaridan ko\'proq foydalaning.'],
    correctedEssay,
  };
}

/**
 * Validates and normalizes Flashcards generation response
 */
export function validateFlashcardsResponse(rawObj) {
  if (!rawObj || typeof rawObj !== 'object') {
    return [];
  }

  const list = Array.isArray(rawObj) ? rawObj : Array.isArray(rawObj.flashcards) ? rawObj.flashcards : [];

  const validated = [];

  for (const card of list) {
    if (!card || typeof card !== 'object') continue;

    const front = typeof card.front === 'string' ? card.front.trim() : typeof card.word === 'string' ? card.word.trim() : '';
    const back = typeof card.back === 'string' ? card.back.trim() : typeof card.translation === 'string' ? card.translation.trim() : '';
    const example = typeof card.example === 'string' ? card.example.trim() : '';

    if (front.length > 0 && back.length > 0) {
      validated.push({
        front: front.substring(0, 500),
        back: back.substring(0, 1000),
        example: example.substring(0, 1000),
      });
    }
  }

  return validated;
}
