/**
 * Acoustic Echo and Self-Loopback Detector for Voice Coach.
 * Prevents microphone from picking up the AI coach's own audio played through device speakers.
 */

function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, ' ')
    .trim();
}

/**
 * Checks if the user speech is an acoustic echo / repetition of the AI coach's last utterance.
 */
export function isAcousticEcho(userText: string, lastCoachText: string): boolean {
  if (!userText || !lastCoachText) return false;

  const normUser = normalizeText(userText);
  const normCoach = normalizeText(lastCoachText);

  const cleanUserNoSpace = normUser.replace(/\s+/g, '');
  const cleanCoachNoSpace = normCoach.replace(/\s+/g, '');

  // Guard against very short noise/greetings
  if (cleanUserNoSpace.length < 4 || cleanCoachNoSpace.length < 6) return false;

  // Exact repetition match
  if (cleanUserNoSpace === cleanCoachNoSpace) return true;

  // 1. Direct Substring / Superstring match (>= 8 chars for Japanese kana/kanji, >= 10 chars for English)
  const isJapanese = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(cleanCoachNoSpace);
  const minSubstringLen = isJapanese ? 8 : 10;
  if (
    cleanUserNoSpace.length >= minSubstringLen &&
    (cleanCoachNoSpace.includes(cleanUserNoSpace) || cleanUserNoSpace.includes(cleanCoachNoSpace))
  ) {
    return true;
  }

  // 2. Word token overlap for space-delimited text (e.g. English)
  const userWords = normUser.split(/\s+/).filter((w) => w.length > 1);
  const coachWords = normCoach.split(/\s+/).filter((w) => w.length > 1);

  if (userWords.length >= 3 && coachWords.length > 0) {
    const coachWordSet = new Set(coachWords);
    let matchCount = 0;
    for (const w of userWords) {
      if (coachWordSet.has(w)) {
        matchCount++;
      }
    }
    const wordRatio = matchCount / userWords.length;
    if (wordRatio >= 0.75) {
      return true;
    }
  }

  // 3. N-gram sequence overlap for continuous scripts (Japanese Kanji/Kana)
  if (
    /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(cleanUserNoSpace) &&
    cleanUserNoSpace.length >= 10
  ) {
    let matchingGrams = 0;
    let totalGrams = 0;
    for (let i = 0; i <= cleanUserNoSpace.length - 3; i++) {
      totalGrams++;
      const gram = cleanUserNoSpace.substring(i, i + 3);
      if (cleanCoachNoSpace.includes(gram)) {
        matchingGrams++;
      }
    }
    if (totalGrams > 0 && matchingGrams / totalGrams >= 0.75) {
      return true;
    }
  }

  return false;
}
