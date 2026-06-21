import { Book, Plus, Sparkles, Upload } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AIGeneratorModal from '../components/AIGeneratorModal';
import DeckCard from '../components/decks/DeckCard';
import ImportModal from '../components/decks/ImportModal';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFlashcardImport } from '../hooks/useFlashcardImport';

const DecksPage: React.FC = () => {
    const { subjects, flashcards, importFlashcards } = useStudyData();
    const [aiSubjectId, setAiSubjectId] = useState<string | null>(null);
    const [isImportModalOpen, setImportModalOpen] = useState(false);

    const { handleImport, downloadTemplate, isImporting } = useFlashcardImport(importFlashcards);

    const onImport = async (subjectId: string, file: File) => {
        await handleImport(subjectId, file);
        setImportModalOpen(false);
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">Fleshkartalar</h2>
                    <p className="text-muted-foreground mt-1">To'plamlarni takrorlang.</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => setImportModalOpen(true)}
                        className="text-muted-foreground border-border hover:bg-muted"
                    >
                        <Upload size={20} className="mr-2" /> JSON Yuklash
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setAiSubjectId('global')}
                        className="text-primary border-primary/20 hover:bg-primary/10"
                    >
                        <Sparkles size={20} className="mr-2" /> AI Yaratish
                    </Button>
                    <Link to="/flashcards/new">
                        <Button>
                            <Plus size={20} className="mr-2" /> Qo'lda Qo'shish
                        </Button>
                    </Link>
                </div>
            </div>

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
                            Fleshkarta yaratish uchun avval fan qo'shishingiz kerak.
                        </p>
                        <Link to="/subjects">
                            <Button className="px-8">
                                <Plus size={20} className="mr-2" /> Fan Qo'shish
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

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
        </div>
    );
};

export default DecksPage;
