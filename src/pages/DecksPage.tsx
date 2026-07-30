import { Book, Plus, Sparkles, Upload, Library, Layers, FileText, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AIGeneratorModal from '../components/AIGeneratorModal';
import DeckCard from '../components/decks/DeckCard';
import ImportModal from '../components/decks/ImportModal';
import { PresetDeckCard } from '../components/decks/PresetDeckCard';
import { ExtractVocabModal } from '../components/decks/ExtractVocabModal';
import { AdminFlashcardManager } from '../components/decks/AdminFlashcardManager';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFlashcardImport } from '../hooks/useFlashcardImport';
import { isAdminEmail } from '../utils/admin';
import { PRESET_DECKS, PresetDeck } from '../data/presetDecks';

const DecksPage: React.FC = () => {
    const { user, subjects, flashcards, importFlashcards, addSubject, deleteSubject, addFlashcardsBatch } = useStudyData();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState<'my' | 'library'>('my');
    const [aiSubjectId, setAiSubjectId] = useState<string | null>(null);
    const [isImportModalOpen, setImportModalOpen] = useState(false);
    const [isExtractModalOpen, setIsExtractModalOpen] = useState(false);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
    const [importedDeckTitle, setImportedDeckTitle] = useState<string | null>(null);
    const [isImportingPreset, setIsImportingPreset] = useState(false);

    const isAdmin = isAdminEmail(user?.email) || localStorage.getItem('admin_override') === 'true';

    const { handleImport, downloadTemplate, isImporting } = useFlashcardImport(importFlashcards);

    const onImport = async (subjectId: string, file: File) => {
        await handleImport(subjectId, file);
        setImportModalOpen(false);
    };

    const getCleanTitle = (title: string) => {
        return title
            .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}]/gu, '')
            .replace(/\s*\(\d+\s*Kartochka\)/i, '')
            .replace(/\s*\([^)]*\)/gi, '')
            .trim();
    };

    const findMatchingSubject = (preset: PresetDeck) => {
        const cleanTitle = getCleanTitle(preset.title).toLowerCase();
        return subjects.find(s => {
            const cleanSubName = s.name.toLowerCase().trim();
            return cleanSubName === preset.title.toLowerCase().trim() ||
                cleanSubName.includes(cleanTitle) ||
                cleanTitle.includes(cleanSubName);
        });
    };

    const handleImportPresetDeck = async (preset: PresetDeck) => {
        setIsImportingPreset(true);
        try {
            const cleanTitle = getCleanTitle(preset.title);
            let subject = findMatchingSubject(preset);
            let targetSubjectId = subject?.id;

            if (!targetSubjectId) {
                const newSub = await addSubject({
                    name: cleanTitle || preset.title,
                    color: '#6366f1',
                    icon: preset.icon,
                    isArchived: false,
                });
                targetSubjectId = newSub?.id;
            }

            if (targetSubjectId) {
                // Ensure we don't import duplicates if subject already has cards
                const existingCards = flashcards.filter(c => c.subjectId === targetSubjectId);
                if (existingCards.length === 0) {
                    const loadedCards = await preset.loadCards();
                    if (loadedCards && loadedCards.length > 0) {
                        const batchCards = loadedCards.map(c => ({
                            subjectId: targetSubjectId!,
                            front: c.front,
                            back: `${c.back} ${c.phonetic ? `(${c.phonetic})` : ''} ${c.example ? `\nExample: "${c.example}"` : ''}`.trim(),
                            interval: 1,
                            repetitions: 0,
                            easeFactor: 2.5,
                            nextReviewDate: new Date().toISOString()
                        }));

                        // Chunk insertions into batches of 100 for maximum stability
                        const chunkSize = 100;
                        for (let i = 0; i < batchCards.length; i += chunkSize) {
                            const chunk = batchCards.slice(i, i + chunkSize);
                            await addFlashcardsBatch(chunk);
                        }
                    }
                }
            }

            setImportedDeckTitle(preset.title);
            setTimeout(() => setImportedDeckTitle(null), 4000);
        } catch (err) {
            console.error('Import preset error:', err);
            alert('To\'plamni saqlashda xatolik yuz berdi. Qayta urinib ko\'ring.');
        } finally {
            setIsImportingPreset(false);
        }
    };

    const handleRemovePresetDeck = async (preset: PresetDeck) => {
        const matchingSubject = findMatchingSubject(preset);
        if (!matchingSubject) return;

        if (window.confirm(`"${preset.title}" to'plamini va uning barcha kartochkalarini "Mening To'plamlarim"dan o'chirmoqchimisiz?`)) {
            try {
                await deleteSubject(matchingSubject.id);
            } catch (err) {
                console.error("Remove preset deck error:", err);
            }
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/60">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-2">
                        <Layers size={14} /> ANKI SM-2 ENGINE ⚡
                    </div>
                    <h2 className="text-3xl font-black text-foreground tracking-tight">Fleshkartalar & Lug'at</h2>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
                        Anki SM-2 algoritmi, Audio TTS va tayyor to'plamlar bilan lug'at boyligingizni oshiring.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                    {/* Primary Button */}
                    <Link to="/flashcards/new">
                        <Button className="font-extrabold shadow-md rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 text-xs">
                            <Plus size={16} className="mr-1.5" /> Qo'lda Qo'shish
                        </Button>
                    </Link>

                    {/* AI & Import Action Group */}
                    <div className="flex items-center gap-1.5 p-1 bg-muted/60 border border-border rounded-2xl">
                        <button
                            onClick={() => setAiSubjectId('global')}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-primary hover:bg-background rounded-xl transition-all"
                            title="AI bilan kartochka yaratish"
                        >
                            <Sparkles size={15} /> AI Yaratish
                        </button>
                        <button
                            onClick={() => setIsExtractModalOpen(true)}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-400 hover:bg-background rounded-xl transition-all"
                            title="Matndan lug'at ajratib olish"
                        >
                            <FileText size={15} /> Extractor
                        </button>
                        <button
                            onClick={() => setImportModalOpen(true)}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-all"
                            title="JSON formatida fayl yuklash"
                        >
                            <Upload size={15} /> Import
                        </button>
                        {isAdmin && (
                            <button
                                onClick={() => setIsAdminModalOpen(true)}
                                className="flex items-center gap-1.5 px-3 py-2 text-xs font-black text-rose-600 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-xl transition-all"
                                title="Buzuq kartalarni saralash va o'chirish"
                            >
                                <ShieldAlert size={15} /> Admin Cleaner
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Toast/Notice for preset deck import */}
            {isImportingPreset && (
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-between animate-pulse">
                    <div className="flex items-center gap-2 font-extrabold text-sm">
                        <Sparkles size={18} className="animate-spin" />
                        <span>Kutubxonadagi barcha kartochkalar bazaga saqlanmoqda...</span>
                    </div>
                </div>
            )}

            {importedDeckTitle && !isImportingPreset && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-2 font-extrabold text-sm">
                        <Sparkles size={18} />
                        <span>"{importedDeckTitle}" to'plami va uning barcha kartochkalari muvaffaqiyatli saqlandi!</span>
                    </div>
                </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-muted/40 border border-border/80 rounded-2xl w-fit">
                <button
                    onClick={() => setActiveTab('my')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'my'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Layers size={16} className="text-indigo-500" /> Mening To'plamlarim ({subjects.length})
                </button>
                <button
                    onClick={() => setActiveTab('library')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'library'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Library size={16} className="text-amber-500" /> Standart Kutubxona ({PRESET_DECKS.length})
                </button>
            </div>

            {activeTab === 'my' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjects.map((subject, index) => {
                        const deckCards = flashcards.filter(c => 
                            c.subjectId === subject.id || 
                            (!c.subjectId && index === 0)
                        );
                        const dueCards = deckCards.filter(c => new Date(c.nextReviewDate) <= new Date());
                        const matchingPreset = PRESET_DECKS.find(p => {
                            const cleanTitle = getCleanTitle(p.title).toLowerCase();
                            const cleanSubName = subject.name.toLowerCase().trim();
                            return cleanSubName === p.title.toLowerCase().trim() ||
                                cleanSubName.includes(cleanTitle) ||
                                cleanTitle.includes(cleanSubName);
                        });

                        return (
                            <DeckCard
                                key={subject.id}
                                subject={subject}
                                cardCount={deckCards.length}
                                dueCount={dueCards.length}
                                onAIGenerate={() => setAiSubjectId(subject.id)}
                                onPopulatePreset={matchingPreset ? () => handleImportPresetDeck(matchingPreset) : undefined}
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
                    {PRESET_DECKS.map(deck => {
                        const matchingSubject = findMatchingSubject(deck);
                        return (
                            <PresetDeckCard
                                key={deck.id}
                                deck={deck}
                                isAdded={!!matchingSubject}
                                onImport={handleImportPresetDeck}
                                onRemove={handleRemovePresetDeck}
                                onUpgradeClick={() => navigate('/settings')}
                            />
                        );
                    })}
                </div>
            )}

            {aiSubjectId && (
                <AIGeneratorModal
                    isOpen={true}
                    onClose={() => setAiSubjectId(null)}
                    subjectId={aiSubjectId === 'global' ? undefined : aiSubjectId}
                />
            )}

            <AdminFlashcardManager
                isOpen={isAdminModalOpen}
                onClose={() => setIsAdminModalOpen(false)}
            />

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

