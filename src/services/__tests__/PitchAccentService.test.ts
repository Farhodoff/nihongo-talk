import { describe, it, expect } from 'vitest';
import { PitchAccentService, splitIntoMorae } from '../PitchAccentService';

describe('PitchAccentService', () => {
  it('splits contracted sounds (digraphs) into single mora correctly', () => {
    expect(splitIntoMorae('きょう')).toEqual(['きょ', 'う']);
    expect(splitIntoMorae('でんしゃ')).toEqual(['で', 'ん', 'しゃ']);
    expect(splitIntoMorae('ひこうき')).toEqual(['ひ', 'こ', 'う', 'き']);
    expect(splitIntoMorae('さくら')).toEqual(['さ', 'く', 'ら']);
  });

  it('correctly identifies Atamadaka (pattern 1) pitch accent', () => {
    const ame = PitchAccentService.getPitchAccent('あめ');
    expect(ame.pitchType).toBe('atamadaka');
    expect(ame.pitchPatternNumber).toBe(1);
    expect(ame.morae[0].isHigh).toBe(true);
    expect(ame.morae[0].isDrop).toBe(true);
    expect(ame.morae[1].isHigh).toBe(false);
    expect(ame.pitchFormula).toBe('H-L');
  });

  it('correctly identifies Heiban (pattern 0) pitch accent', () => {
    const sakura = PitchAccentService.getPitchAccent('さくら');
    expect(sakura.pitchType).toBe('heiban');
    expect(sakura.pitchPatternNumber).toBe(0);
    expect(sakura.morae[0].isHigh).toBe(false);
    expect(sakura.morae[1].isHigh).toBe(true);
    expect(sakura.morae[2].isHigh).toBe(true);
    expect(sakura.pitchFormula).toBe('L-H-H');
  });

  it('correctly identifies Nakadaka pitch accent', () => {
    const tamago = PitchAccentService.getPitchAccent('たまご');
    expect(tamago.pitchType).toBe('nakadaka');
    expect(tamago.pitchPatternNumber).toBe(2);
    expect(tamago.morae[0].isHigh).toBe(false);
    expect(tamago.morae[1].isHigh).toBe(true);
    expect(tamago.morae[1].isDrop).toBe(true);
    expect(tamago.morae[2].isHigh).toBe(false);
    expect(tamago.pitchFormula).toBe('L-H-L');
  });

  it('finds pitch accents inside full Japanese sentence', () => {
    const text = 'きょうはさくらをみにいきます。あめがふります。';
    const found = PitchAccentService.findPitchAccentsInText(text);
    const words = found.map((f) => f.word);
    expect(words).toContain('きょう');
    expect(words).toContain('さくら');
    expect(words).toContain('あめ');
  });
});

it('provides verified Minimal Pair homophones for contrastive training', () => {
  const pairs = PitchAccentService.getMinimalPairs();
  expect(pairs.length).toBeGreaterThanOrEqual(8);

  // Verify Ame (rain vs candy)
  const amePair = pairs.find((p) => p.id === 'ame');
  expect(amePair).toBeDefined();
  expect(amePair!.word1.kanji).toBe('雨');
  expect(amePair!.word1.pitchType).toBe('atamadaka');
  expect(amePair!.word2.kanji).toBe('飴');
  expect(amePair!.word2.pitchType).toBe('heiban');

  // Verify Hashi (chopsticks vs bridge)
  const hashiPair = pairs.find((p) => p.id === 'hashi');
  expect(hashiPair).toBeDefined();
  expect(hashiPair!.word1.kanji).toBe('箸');
  expect(hashiPair!.word1.pitchType).toBe('atamadaka');
  expect(hashiPair!.word2.kanji).toBe('橋');
  expect(hashiPair!.word2.pitchType).toBe('odaka');
});

it('retrieves all dictionary words and groups by pitch type', () => {
  const all = PitchAccentService.getAllDictionaryWords();
  expect(all.length).toBeGreaterThan(150);

  const heibanWords = PitchAccentService.getWordsByPitchType('heiban');
  const atamadakaWords = PitchAccentService.getWordsByPitchType('atamadaka');
  const nakadakaWords = PitchAccentService.getWordsByPitchType('nakadaka');
  const odakaWords = PitchAccentService.getWordsByPitchType('odaka');

  expect(heibanWords.length).toBeGreaterThan(20);
  expect(atamadakaWords.length).toBeGreaterThan(20);
  expect(nakadakaWords.length).toBeGreaterThan(20);
  expect(odakaWords.length).toBeGreaterThan(5);

  expect(heibanWords.every((w) => w.pitchType === 'heiban')).toBe(true);
});

it('generates random pitch quiz items of requested count', () => {
  const quiz = PitchAccentService.getRandomPitchQuiz(5);
  expect(quiz).toHaveLength(5);
  quiz.forEach((item) => {
    expect(item.word).toBeDefined();
    expect(item.reading).toBeDefined();
    expect(item.pitchType).toBeDefined();
    expect(item.morae.length).toBeGreaterThan(0);
  });
});
