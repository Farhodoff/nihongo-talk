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

  it('updates existing custom Kanji', async () => {
    const testKanji: JlptKanjiItem = {
      id: 'test-k-update',
      kanji: '山',
      level: 'N5',
      onyomi: 'サン',
      kunyomi: 'やま',
      meaningUz: 'Tog',
      strokeCount: 3,
      examples: [],
    };

    await CustomContentService.saveCustomKanji(testKanji);

    const updated = await CustomContentService.updateCustomKanji('test-k-update', {
      meaningUz: "Tog', Cho'qqi",
      level: 'N5',
    });
    expect(updated).toBe(true);

    const list = CustomContentService.getCustomKanji();
    expect(list.length).toBe(1);
    expect(list[0].meaningUz).toBe("Tog', Cho'qqi");
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

  it('saves, updates, and retrieves custom Grammar', async () => {
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

    let list = CustomContentService.getCustomGrammar();
    expect(list.length).toBe(1);
    expect(list[0].title).toBe('~てたまらない');

    const updated = await CustomContentService.updateCustomGrammar('test-g-1', {
      meaningUz: "Juda ham qattiq xohlamoq / chidab bo'lmaydi",
    });
    expect(updated).toBe(true);

    list = CustomContentService.getCustomGrammar();
    expect(list[0].meaningUz).toBe("Juda ham qattiq xohlamoq / chidab bo'lmaydi");
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
  });

  it('parses delimited text and imports Kanji in bulk', async () => {
    const rawInput = `
      桜 | N3 | オウ | さくら | Olcha guli | 10
      川 | N5 | セン | かわ | Daryo | 3
      月 - Oy
    `;

    const parsed = CustomContentService.parseKanjiInput(rawInput);
    expect(parsed.length).toBe(3);
    expect(parsed[0].kanji).toBe('桜');
    expect(parsed[0].level).toBe('N3');
    expect(parsed[1].meaningUz).toBe('Daryo');
    expect(parsed[2].kanji).toBe('月');
    expect(parsed[2].meaningUz).toBe('Oy');

    const result = await CustomContentService.bulkImportKanji(parsed);
    expect(result.added).toBe(3);
    expect(result.failed).toBe(0);

    const saved = CustomContentService.getCustomKanji();
    expect(saved.length).toBe(3);
  });

  it('parses JSON format for Kanji bulk import', async () => {
    const jsonStr = JSON.stringify([
      {
        kanji: '木',
        level: 'N5',
        onyomi: 'モク',
        kunyomi: 'き',
        meaningUz: 'Daraxt',
        strokeCount: 4,
      },
      {
        kanji: '金',
        level: 'N5',
        onyomi: 'キン',
        kunyomi: 'かね',
        meaningUz: 'Oltin, Pul',
        strokeCount: 8,
      },
    ]);

    const parsed = CustomContentService.parseKanjiInput(jsonStr);
    expect(parsed.length).toBe(2);
    expect(parsed[0].kanji).toBe('木');

    const result = await CustomContentService.bulkImportKanji(parsed);
    expect(result.added).toBe(2);
    expect(CustomContentService.getCustomKanji().length).toBe(2);
  });

  it('parses delimited text and imports Grammar in bulk', async () => {
    const rawInput = `
      〜わけにはいかない | N2 | wake ni wa ikanai | V-ru + わけにはいかない | ... qilib bo'lmaydi
      〜ことにする | N3 | koto ni suru | V-ru + ことにする | ... ga qaror qilmoq
      〜てはいけない - ... qilish mumkin emas
    `;

    const parsed = CustomContentService.parseGrammarInput(rawInput);
    expect(parsed.length).toBe(3);
    expect(parsed[0].title).toBe('〜わけにはいかない');
    expect(parsed[0].level).toBe('N2');
    expect(parsed[1].meaningUz).toBe('... ga qaror qilmoq');
    expect(parsed[2].title).toBe('〜てはいけない');

    const result = await CustomContentService.bulkImportGrammar(parsed);
    expect(result.added).toBe(3);
    expect(result.failed).toBe(0);

    const saved = CustomContentService.getCustomGrammar();
    expect(saved.length).toBe(3);
  });

  it('exports and restores JSON backup', async () => {
    await CustomContentService.saveCustomKanji({
      id: 'k-bk',
      kanji: '星',
      level: 'N3',
      onyomi: 'セイ',
      kunyomi: 'ほし',
      meaningUz: 'Yulduz',
      strokeCount: 9,
      examples: [],
    });

    await CustomContentService.saveCustomGrammar({
      id: 'g-bk',
      title: '〜ばかりか',
      level: 'N2',
      romaji: 'bakari ka',
      meaningUz: 'Nafaqat... balki',
      structure: 'A + ばかりか + B',
      examples: [],
    });

    const backupJson = CustomContentService.exportBackupJSON();
    expect(backupJson).toContain('星');
    expect(backupJson).toContain('〜ばかりか');

    // Clear and restore
    localStorage.clear();
    expect(CustomContentService.getCustomKanji().length).toBe(0);
    expect(CustomContentService.getCustomGrammar().length).toBe(0);

    const restoreResult = await CustomContentService.importBackupJSON(backupJson);
    expect(restoreResult.kanjiResult.added).toBe(1);
    expect(restoreResult.grammarResult.added).toBe(1);
    expect(CustomContentService.getCustomKanji().length).toBe(1);
    expect(CustomContentService.getCustomGrammar().length).toBe(1);
  });
});
