import { Book, Play, Plus, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AIGeneratorModal from '../components/AIGeneratorModal';
import { Button } from '../components/ui/Button';
import { useStudyPlanner } from '../context/StudyPlannerContext';

const DecksPage: React.FC = () => {
    const { subjects, flashcards } = useStudyPlanner();
    const [aiSubjectId, setAiSubjectId] = useState<string | null>(null);

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
                        <div key={subject.id} className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                                    <Book size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{subject.name}</h3>
                                    <p className="text-sm text-gray-500">{deckCards.length} kartalar</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Hozirgi</span>
                                    <span className="font-bold text-indigo-600">{dueCards.length}</span>
                                </div>

                                <div className="pt-4 flex gap-2">
                                    <Link to={`/flashcards/study/${subject.id}`} className="flex-1">
                                        <Button className="w-full flex justify-center items-center gap-2" disabled={dueCards.length === 0}>
                                            <Play size={16} /> O'rganish
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="secondary"
                                        className="px-3 text-indigo-600"
                                        onClick={() => setAiSubjectId(subject.id)}
                                        title="AI bilan yaratish"
                                    >
                                        <Sparkles size={20} />
                                    </Button>
                                    <Link to={`/flashcards/new?subjectId=${subject.id}`}>
                                        <Button variant="secondary" className="px-3">
                                            <Plus size={20} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {subjects.length === 0 && (
                    <div className="col-span-full text-center py-10 text-gray-400">
                        Fanlar topilmadi. Fleshkarta yaratish uchun oldin fan yarating.
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
        </div>
    );
};

export default DecksPage;
