import { Bot, Loader2, Save, Sparkles, X } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { generateFlashcardsWithAI, isAIKeyConfigured, parseAIError } from '../utils/ai';

interface AIGeneratorModalProps {
    isOpen: boolean;
    onClose: () => void;
    subjectId?: string; // Optional now
}

const AIGeneratorModal: React.FC<AIGeneratorModalProps> = ({ isOpen, onClose, subjectId: propSubjectId }) => {
    const { importFlashcards, settings, subjects, addSubject } = useStudyData();
    const [topic, setTopic] = useState('');
    const [subjectId, setSubjectId] = useState(propSubjectId || '');
    const [count, setCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [generatedCards, setGeneratedCards] = useState<{ front: string; back: string }[]>([]);
    const [step, setStep] = useState<'input' | 'preview'>('input');

    if (!isOpen) return null;

    const handleGenerate = async () => {
        if (!isAIKeyConfigured()) {
            alert('AI funksiyalar uchun API kalit kerak. Sozlamalar → AI bo\'limida kiriting.');
            return;
        }
        if (!topic.trim()) return;
        if (!subjectId) {
            alert("Iltimos, avval fanni tanlang!");
            return;
        }
        setIsLoading(true);
        try {
            const cards = await generateFlashcardsWithAI(topic, count, settings.googleApiKey);
            setGeneratedCards(cards);
            setStep('preview');
        } catch (error: any) {
            console.error('Error generating flashcards:', error);
            const friendlyError = parseAIError(error);
            alert(friendlyError);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveAll = async () => {
        let targetSubjectId = subjectId || propSubjectId;

        // Auto-resolve subject if not selected
        if (!targetSubjectId) {
            const firstActiveSub = subjects.find(s => !s.isArchived);
            if (firstActiveSub) {
                targetSubjectId = firstActiveSub.id;
            } else {
                const newSub = await addSubject({
                    name: 'AI Fleshkartalar',
                    color: '#6366f1',
                    icon: 'Sparkles',
                    isArchived: false,
                });
                targetSubjectId = newSub?.id;
            }
        }

        if (!targetSubjectId) {
            alert("Iltimos, avval fanni tanlang!");
            return;
        }

        setIsSaving(true);
        try {
            // Use bulk import with chunking and optimistic local update
            const success = await importFlashcards(targetSubjectId, generatedCards);
            
            if (!success) {
                throw new Error("Failed to bulk save flashcards");
            }

            console.log(`[Batch Save] All ${generatedCards.length} cards saved successfully!`);

            onClose();
            setTopic('');
            setGeneratedCards([]);
            setStep('input');
        } catch (error) {
            console.error('Failed to save flashcards:', error);
            alert('Saqlashda xatolik yuz berdi. Qayta urinib ko\'ring.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#1f2937] rounded-3xl w-full max-w-lg shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        <Sparkles size={24} />
                        <h2 className="text-xl font-bold">AI Fleshkarta Sehrgari</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6">
                    {step === 'input' ? (
                        <div className="space-y-6">
                            {!propSubjectId && (
                                <div>
                                    <label htmlFor="subject-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fan</label>
                                    <select
                                        id="subject-select"
                                        value={subjectId}
                                        onChange={(e) => setSubjectId(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                    >
                                        <option value="">-- Fanni Tanlang --</option>
                                        {subjects.filter(s => !s.isArchived).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                    </select>
                                </div>
                            )}

                            <div>
                                <label htmlFor="topic-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Mavzu yoki Matn:
                                </label>
                                <textarea
                                    id="topic-input"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    placeholder="Mavzu nomini yozing (masalan: 'Python Asoslari') yoki o'quv materialini shu yerga nusxalab qo'ying..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
                                />
                                <p className="text-xs text-gray-500 mt-2">AI siz kiritgan matndan yoki mavzudan avtomatik savol-javob yaratadi.</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <label htmlFor="count-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">Kartalar soni:</label>
                                <select
                                    id="count-select"
                                    value={count}
                                    onChange={(e) => setCount(Number(e.target.value))}
                                    className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-none outline-none"
                                >
                                    <option value={3}>3</option>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                    <option value={40}>40</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                            </div>

                            <Button
                                onClick={handleGenerate}
                                disabled={isLoading || !topic.trim()}
                                className="w-full py-4 text-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" /> Yaratilmoqda...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Bot /> AI bilan Yaratish
                                    </span>
                                )}
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col h-[60vh]">
                            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                                {generatedCards.map((card, idx) => (
                                    <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <div className="mb-2">
                                            <span className="text-xs font-bold text-gray-400 uppercase">Savol</span>
                                            <p className="font-medium text-gray-900 dark:text-white">{card.front}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase">Javob</span>
                                            <p className="text-gray-600 dark:text-gray-300">{card.back}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-700 flex gap-4">
                                <Button variant="secondary" onClick={() => setStep('input')} className="flex-1" disabled={isSaving}>
                                    Orqaga
                                </Button>
                                <Button onClick={handleSaveAll} className="flex-1" disabled={isSaving}>
                                    {isSaving ? (
                                        <>
                                            <Loader2 size={18} className="mr-2 animate-spin" /> Saqlanmoqda...
                                        </>
                                    ) : (
                                        <>
                                            <Save size={18} className="mr-2" /> Kartalarni Saqlash
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIGeneratorModal;
