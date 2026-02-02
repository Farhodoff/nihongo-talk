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
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fleshkartalar</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">To'plamlarni takrorlang.</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => setImportModalOpen(true)}
                        className="text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    >
                        <Upload size={20} className="mr-2" /> JSON Yuklash
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setAiSubjectId('global')}
                        className="text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
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
                    <div className="col-span-full flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-[#1f2937] rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mb-6 text-indigo-500">
                            <Book size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fleshkartalar to'plami yo'q</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8">
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
