import { Book, Plus, Sparkles, Upload, Library, Layers, FileText } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AIGeneratorModal from '../components/AIGeneratorModal';
import DeckCard from '../components/decks/DeckCard';
import ImportModal from '../components/decks/ImportModal';
import { PresetDeckCard } from '../components/decks/PresetDeckCard';
import { ExtractVocabModal } from '../components/decks/ExtractVocabModal';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFlashcardImport } from '../hooks/useFlashcardImport';
import { PRESET_DECKS, PresetDeck } from '../data/presetDecks';

const DecksPage: React.FC = () => {
    const { subjects, flashcards, importFlashcards, addSubject, addFlashcard } = useStudyData();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState<'my' | 'library'>('my');
    const [aiSubjectId, setAiSubjectId] = useState<string | null>(null);
    const [isImportModalOpen, setImportModalOpen] = useState(false);
    const [isExtractModalOpen, setIsExtractModalOpen] = useState(false);
    const [importedDeckTitle, setImportedDeckTitle] = useState<string | null>(null);

    const { handleImport, downloadTemplate, isImporting } = useFlashcardImport(importFlashcards);

    const onImport = async (subjectId: string, file: File) => {
        await handleImport(subjectId, file);
        setImportModalOpen(false);
    };

    const handleImportPresetDeck = async (preset: PresetDeck) => {
        let subject = subjects.find(s => s.name.toLowerCase() === preset.title.toLowerCase());
        let targetSubjectId = subject?.id;

        if (!targetSubjectId) {
            const newSub = await addSubject({
                name: preset.title,
                color: '#6366f1',
                icon: preset.icon,
                isArchived: false,
            });
            targetSubjectId = newSub?.id || subject?.id;
        }

        if (targetSubjectId) {
            preset.cards.forEach(c => {
                addFlashcard({
                    subjectId: targetSubjectId!,
                    front: c.front,
                    back: `${c.back} ${c.phonetic ? `(${c.phonetic})` : ''} ${c.example ? `\nExample: "${c.example}"` : ''}`,
                    interval: 1,
                    repetitions: 0,
                    easeFactor: 2.5,
                    nextReviewDate: new Date().toISOString()
                });
            });
        }

        setImportedDeckTitle(preset.title);
        setTimeout(() => setImportedDeckTitle(null), 3000);
        setActiveTab('my');
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Fleshkartalar & Aqlli Lug'at</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                        Anki SM-2 algoritmi, Audio TTS va tayyor IELTS to'plamlari bilan lug'at boyligingizni oshiring.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => setIsExtractModalOpen(true)}
                        className="text-indigo-600 dark:text-indigo-400 border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20 font-bold"
                    >
                        <FileText size={18} className="mr-2" /> AI Vocab Extractor
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setImportModalOpen(true)}
                        className="text-muted-foreground border-border hover:bg-muted font-bold"
                    >
                        <Upload size={18} className="mr-2" /> JSON Yuklash
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setAiSubjectId('global')}
                        className="text-primary border-primary/20 hover:bg-primary/10 font-bold"
                    >
                        <Sparkles size={18} className="mr-2" /> AI Yaratish
                    </Button>
                    <Link to="/flashcards/new">
                        <Button className="font-bold">
                            <Plus size={18} className="mr-2" /> Qo'lda Qo'shish
                        </Button>
                    </Link>
                </div>
            </div>

            {importedDeckTitle && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold rounded-2xl text-sm flex items-center gap-2">
                    ✨ "{importedDeckTitle}" to'plami muvaffaqiyatli saqlandi!
                </div>
            )}

            <div className="flex items-center gap-2 border-b border-border pb-1">
                <button
                    onClick={() => setActiveTab('my')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-extrabold text-sm rounded-xl transition-all ${
                        activeTab === 'my'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                >
                    <Layers size={18} /> Mening To'plamlarim ({subjects.length})
                </button>
                <button
                    onClick={() => setActiveTab('library')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-extrabold text-sm rounded-xl transition-all ${
                        activeTab === 'library'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                >
                    <Library size={18} /> Standart IELTS Kutubxonasi ({PRESET_DECKS.length})
                </button>
            </div>

            {activeTab === 'my' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjects.map(subject => {
                        const deckCards = flashcards.filter(c => c.subjectId === subject.id);
                        const dueCards = deckCards.filter(c => new Date(c.nextReviewDate) <= new Date());

                        return (
                            <DeckCard
                                key={subject.id}
                                subject={subject}
                                cardCount={deckCards.length}
                                dueCount={dueCards.length}
                                onAIGenerate={() => setAiSubjectId(subject.id)}
                            />
                        );
                    })}

                    {subjects.length === 0 && (
                        <div className="col-span-full flex flex-col items-center justify-center p-12 text-center glass-card rounded-3xl border-dashed">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Book size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Fleshkartalar to'plami yo'q</h3>
                            <p className="text-muted-foreground max-w-sm mb-8">
                                O'zingiz fan qo'shing yoki Standart Kutubxonadan tayyor IELTS to'plamlarini saqlab oling.
                            </p>
                            <div className="flex gap-3">
                                <Button onClick={() => setActiveTab('library')} variant="secondary" className="px-6 font-bold">
                                    <Library size={18} className="mr-2" /> Standart Kutubxona
                                </Button>
                                <Link to="/subjects">
                                    <Button className="px-6 font-bold">
                                        <Plus size={18} className="mr-2" /> Fan Qo'shish
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'library' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRESET_DECKS.map(deck => (
                        <PresetDeckCard
                            key={deck.id}
                            deck={deck}
                            onImport={handleImportPresetDeck}
                            onUpgradeClick={() => navigate('/settings')}
                        />
                    ))}
                </div>
            )}

            {aiSubjectId && (
                <AIGeneratorModal
                    isOpen={true}
                    onClose={() => setAiSubjectId(null)}
                    subjectId={aiSubjectId === 'global' ? undefined : aiSubjectId}
                />
            )}

            <ImportModal
                isOpen={isImportModalOpen}
                onClose={() => setImportModalOpen(false)}
                subjects={subjects}
                onImport={onImport}
                isImporting={isImporting}
                downloadTemplate={downloadTemplate}
            />

            <ExtractVocabModal
                isOpen={isExtractModalOpen}
                onClose={() => setIsExtractModalOpen(false)}
                subjects={subjects}
            />
        </div>
    );
};

export default DecksPage;
