import { Subject, Flashcard } from '../types';
import { PRESET_DECKS } from '../data/presetDecks';
import { EXTRACTED_CURRICULUM } from '../data/curriculumData';

export const ensureIeltsSubjectAndDecks = async (
    currentBand: number,
    targetBand: number,
    subjects: Subject[],
    addSubject: (s: Partial<Subject>) => Promise<Subject | null>,
    addFlashcard: (f: Partial<Flashcard>) => void
): Promise<string | null> => {
    const subjectName = "📘 IELTS Academic & CEFR Master";
    let targetSubject = subjects.find(s => s.name.toLowerCase() === subjectName.toLowerCase());
    let subjectId = targetSubject?.id;

    if (!subjectId) {
        const created = await addSubject({
            name: subjectName,
            color: '#6366f1',
            icon: 'GraduationCap',
            isArchived: false,
        });
        subjectId = created?.id;
    }

    if (!subjectId) return null;

    // Filter relevant preset decks based on levels
    let selectedDecks = PRESET_DECKS;
    if (currentBand === 0 || currentBand <= 5.0) {
        selectedDecks = PRESET_DECKS.filter(d => d.level === 'A1-A2' || d.level === 'B1-B2');
    } else if (targetBand >= 7.0) {
        selectedDecks = PRESET_DECKS.filter(d => d.level === 'B1-B2' || d.level === 'C1-C2' || d.id.includes('collocation'));
    }

    // Populate preset flashcards into the IELTS Subject
    selectedDecks.forEach(deck => {
        deck.cards.forEach(c => {
            addFlashcard({
                subjectId: subjectId!,
                front: c.front,
                back: `${c.back} ${c.phonetic ? `(${c.phonetic})` : ''} ${c.example ? `\nExample: "${c.example}"` : ''}`,
                interval: 1,
                repetitions: 0,
                easeFactor: 2.5,
                nextReviewDate: new Date().toISOString()
            });
        });
    });

    // Populate extracted book curriculum cards (from /books PDF files)
    const targetLevels: ('A1-A2' | 'B1-B2' | 'C1-C2')[] = targetBand >= 7.5
        ? ['B1-B2', 'C1-C2']
        : currentBand <= 5.0 ? ['A1-A2', 'B1-B2'] : ['B1-B2'];

    targetLevels.forEach(lvl => {
        const bookItems = EXTRACTED_CURRICULUM[lvl]?.vocab || [];
        bookItems.forEach(item => {
            addFlashcard({
                subjectId: subjectId!,
                front: `${item.front} [${lvl}]`,
                back: `${item.back}\nManba: ${item.source}`,
                interval: 1,
                repetitions: 0,
                easeFactor: 2.5,
                nextReviewDate: new Date().toISOString()
            });
        });
    });

    return subjectId;
};
