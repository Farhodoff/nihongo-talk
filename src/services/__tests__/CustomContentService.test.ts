import { describe, it, expect, beforeEach } from 'vitest';
import { CustomContentService } from '../CustomContentService';
import { JlptKanjiItem, JlptGrammarItem } from '../../data/jlptGrammarKanji';

describe('CustomContentService Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves and retrieves custom Kanji', async () => {
    const testKanji: JlptKanjiItem = {
      id: 'test-k-1',
      kanji: '愛',
      level: 'N3',
      onyomi: 'アイ',
      kunyomi: 'いと.しい',
      meaningUz: 'Sevgi, Muhabbat',
      strokeCount: 13,
      examples: [{ word: '愛人', reading: 'あいじん', meaning: 'Sevikli yor' }],
    };

    const saved = await CustomContentService.saveCustomKanji(testKanji);
    expect(saved).toBe(true);

    const list = CustomContentService.getCustomKanji();
    expect(list.length).toBe(1);
    expect(list[0].kanji).toBe('愛');
    expect(list[0].meaningUz).toBe('Sevgi, Muhabbat');
  });

  it('deletes custom Kanji by id or kanji character', async () => {
    const testKanji: JlptKanjiItem = {
      id: 'test-k-2',
      kanji: '海',
      level: 'N4',
      onyomi: 'カイ',
      kunyomi: 'うみ',
      meaningUz: 'Dengiz',
      strokeCount: 9,
      examples: [],
    };

    await CustomContentService.saveCustomKanji(testKanji);
    expect(CustomContentService.getCustomKanji().length).toBe(1);

    const deleted = await CustomContentService.deleteCustomKanji('test-k-2');
    expect(deleted).toBe(true);
    expect(CustomContentService.getCustomKanji().length).toBe(0);
  });

  it('saves and retrieves custom Grammar', async () => {
    const testGrammar: JlptGrammarItem = {
      id: 'test-g-1',
      title: '~てたまらない',
      level: 'N3',
      romaji: 'te tamaranai',
      meaningUz: 'Juda ham... chidab bo‘lmas darajada',
      structure: "Fe'l [te shakli] / Sifat [kute] + たまらない",
      examples: [
        { ja: '会いたくてたまらない。', romaji: 'Aitakute tamaranai.', uz: 'Ko‘rgim kelib ketdi.' },
      ],
    };

    const saved = await CustomContentService.saveCustomGrammar(testGrammar);
    expect(saved).toBe(true);

    const list = CustomContentService.getCustomGrammar();
    expect(list.length).toBe(1);
    expect(list[0].title).toBe('~てたまらない');
    expect(list[0].meaningUz).toBe('Juda ham... chidab bo‘lmas darajada');
  });

  it('merges custom Kanji with base dataset', async () => {
    const customKanji: JlptKanjiItem = {
      id: 'custom-k-merge',
      kanji: '龍',
      level: 'N1',
      onyomi: 'リュウ',
      kunyomi: 'たつ',
      meaningUz: 'Ajdaho',
      strokeCount: 16,
      examples: [],
    };

    await CustomContentService.saveCustomKanji(customKanji);

    const baseList: JlptKanjiItem[] = [
      {
        id: 'base-k-1',
        kanji: '日',
        level: 'N5',
        onyomi: 'ニチ',
        kunyomi: 'ひ',
        meaningUz: 'Quyosh',
        strokeCount: 4,
        examples: [],
      },
    ];

    const merged = CustomContentService.mergeKanji(baseList);
    expect(merged.length).toBe(2);
    expect(merged[0].kanji).toBe('龍');
    expect(merged[1].kanji).toBe('日');
  });
});
