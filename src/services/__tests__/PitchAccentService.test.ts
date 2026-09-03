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
