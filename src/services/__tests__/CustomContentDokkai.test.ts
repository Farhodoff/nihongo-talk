import { describe, it, expect, beforeEach } from 'vitest';
import { CustomContentService } from '../CustomContentService';
import { JlptReadingPassage } from '../../data/jlptReadingData';
import { JlptListeningQuestion } from '../../data/jlpt/listening_data';

describe('CustomContentService Dokkai & Choukai Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves and retrieves custom Dokkai reading passage', async () => {
    const testPassage: JlptReadingPassage = {
      id: 'custom-dokkai-1',
      level: 'N4',
      passageType: 'short',
      title: 'Toshkent Boʻylab Sayohat',
      japaneseContent: 'わたしは[昨日|きのう]友達と[図書館|としょかん]へ行きました。',
      uzbekTranslation: 'Men kecha do‘stim bilan kutubxonaga bordim.',
      recommendedTimeMinutes: 4,
      questions: [
        {
          id: 'q-1',
          questionText: 'Kim bilan kutubxonaga bordi?',
          options: ['Yolg‘iz', 'Do‘sti bilan', 'Oilasi bilan', 'O‘qituvchisi bilan'],
          correctIndex: 1,
          explanation: 'Matnda "友達と" (do‘stim bilan) deb aniq keltirilgan.',
        },
      ],
    };

    const saved = await CustomContentService.saveCustomReadingPassage(testPassage);
    expect(saved).toBe(true);

    const list = CustomContentService.getCustomReadingPassages();
    expect(list.length).toBe(1);
    expect(list[0].id).toBe('custom-dokkai-1');
    expect(list[0].title).toBe('Toshkent Boʻylab Sayohat');
    expect(list[0].questions[0].options[1]).toBe('Do‘sti bilan');
  });

  it('updates existing custom Dokkai passage when saved with matching ID', async () => {
    const testPassage: JlptReadingPassage = {
      id: 'custom-dokkai-2',
      level: 'N3',
      passageType: 'medium',
      title: 'Texnologiya va Jamiyat',
      japaneseContent: 'AIは[未来|みらい]を変えるでしょう。',
      uzbekTranslation: 'AI kelajakni oʻzgartiradi.',
      recommendedTimeMinutes: 5,
      questions: [],
    };

    await CustomContentService.saveCustomReadingPassage(testPassage);

    const updatedPassage: JlptReadingPassage = {
      ...testPassage,
      recommendedTimeMinutes: 7,
      uzbekTranslation: 'Sun’iy intellekt kelajakni oʻzgartirmoqda.',
    };

    await CustomContentService.saveCustomReadingPassage(updatedPassage);

    const list = CustomContentService.getCustomReadingPassages();
    expect(list.length).toBe(1);
    expect(list[0].recommendedTimeMinutes).toBe(7);
    expect(list[0].uzbekTranslation).toBe('Sun’iy intellekt kelajakni oʻzgartirmoqda.');
  });

  it('deletes custom Dokkai passage by ID', async () => {
    const testPassage: JlptReadingPassage = {
      id: 'custom-dokkai-delete-me',
      level: 'N2',
      passageType: 'short',
      title: 'Oʻchiriladigan Matn',
      japaneseContent: 'テストです。',
      uzbekTranslation: 'Bu test.',
      recommendedTimeMinutes: 3,
      questions: [],
    };

    await CustomContentService.saveCustomReadingPassage(testPassage);
    expect(CustomContentService.getCustomReadingPassages().length).toBe(1);

    const deleted =
      await CustomContentService.deleteCustomReadingPassage('custom-dokkai-delete-me');
    expect(deleted).toBe(true);
    expect(CustomContentService.getCustomReadingPassages().length).toBe(0);
  });

  it('merges base reading passages and gives custom passages higher priority', async () => {
    const customOverride: JlptReadingPassage = {
      id: 'custom-n4-new',
      level: 'N4',
      passageType: 'short',
      title: 'N4 Maxsus Yangi Matn',
      japaneseContent: '[新|あたら]しいニュースです。',
      uzbekTranslation: 'Yangi yangilik.',
      recommendedTimeMinutes: 3,
      questions: [],
    };

    await CustomContentService.saveCustomReadingPassage(customOverride);

    const mergedN4 = CustomContentService.getMergedReadingPassages('N4');
    expect(mergedN4.length).toBeGreaterThan(0);
    // Custom passage should be present in merged output
    const found = mergedN4.find((p) => p.id === 'custom-n4-new');
    expect(found).toBeDefined();
    expect(found?.title).toBe('N4 Maxsus Yangi Matn');
  });

  it('bulk imports Dokkai passages correctly', async () => {
    const passages: JlptReadingPassage[] = [
      {
        id: 'bulk-1',
        level: 'N5',
        passageType: 'short',
        title: 'Bulk 1',
        japaneseContent: '[朝|あさ]ごはんを[食|た]べます。',
        uzbekTranslation: 'Nonushta qilaman.',
        recommendedTimeMinutes: 3,
        questions: [],
      },
      {
        id: 'bulk-2',
        level: 'N5',
        passageType: 'short',
        title: 'Bulk 2',
        japaneseContent: '[水|みず]を[飲|の]みます。',
        uzbekTranslation: 'Suv ichaman.',
        recommendedTimeMinutes: 3,
        questions: [],
      },
    ];

    const result = await CustomContentService.bulkImportReadingPassages(passages);
    expect(result.added).toBe(2);
    expect(result.failed).toBe(0);

    const stored = CustomContentService.getCustomReadingPassages();
    expect(stored.length).toBe(2);
  });

  it('bulk imports Choukai questions correctly', async () => {
    const choukaiQuestions: JlptListeningQuestion[] = [
      {
        id: 'choukai-bulk-1',
        level: 'N4',
        type: 'task',
        titleUz: 'Tinglab tushunish 1',
        audioUrl: '/audio/choukai/n4_01.mp3',
        script: '男の人と女の人が話しています。',
        questionText: '女の人は何を買いますか。',
        options: ['りんご', 'みかん', 'バナナ', 'ぶどう'],
        correctAnswer: 0,
        explanationUzbek: 'Ayol olma sotib oladi.',
      },
    ];

    const res = await CustomContentService.bulkImportChoukaiQuestions(choukaiQuestions);
    expect(res.added).toBe(1);
    expect(res.failed).toBe(0);

    const list = CustomContentService.getCustomChoukaiQuestions();
    expect(list.length).toBe(1);
    expect(list[0].id).toBe('choukai-bulk-1');
  });

  it('exports and imports backup JSON with Dokkai and Choukai preserved', async () => {
    // Add dokkai
    await CustomContentService.saveCustomReadingPassage({
      id: 'backup-dokkai',
      level: 'N3',
      passageType: 'short',
      title: 'Backup Dokkai Test',
      japaneseContent: '[空|そら]が[青|あお]いです。',
      uzbekTranslation: 'Osmon moviy.',
      recommendedTimeMinutes: 2,
      questions: [],
    });

    // Add choukai
    await CustomContentService.addCustomChoukaiQuestion({
      id: 'backup-choukai',
      level: 'N3',
      type: 'point',
      titleUz: 'Backup Choukai Test',
      audioUrl: '/audio/choukai/n3_test.mp3',
      script: 'テストスクリプト',
      questionText: 'Savol',
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
      explanationUzbek: 'Tushuntirish',
    });

    const jsonBackup = CustomContentService.exportBackupJSON();
    expect(jsonBackup).toContain('backup-dokkai');
    expect(jsonBackup).toContain('backup-choukai');

    // Clear and restore
    localStorage.clear();
    expect(CustomContentService.getCustomReadingPassages().length).toBe(0);
    expect(CustomContentService.getCustomChoukaiQuestions().length).toBe(0);

    const importRes = await CustomContentService.importBackupJSON(jsonBackup);
    expect(importRes.dokkaiResult.added).toBe(1);
    expect(importRes.choukaiResult.added).toBe(1);

    expect(CustomContentService.getCustomReadingPassages().length).toBe(1);
    expect(CustomContentService.getCustomChoukaiQuestions().length).toBe(1);
  });
});
