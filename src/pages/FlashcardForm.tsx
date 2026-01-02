import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyPlanner } from '../context/StudyPlannerContext';

const FlashcardForm: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const defaultSubjectId = searchParams.get('subjectId') || '';

    const { addFlashcard, subjects } = useStudyPlanner();

    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [subjectId, setSubjectId] = useState(defaultSubjectId);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!front || !back || !subjectId) return;

        addFlashcard({
            subjectId,
            front,
            back,
        });

        navigate('/flashcards');
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/flashcards')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                    <ArrowLeft size={20} className="text-gray-500" />
                </button>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Yangi Fleshkarta</h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1f2937] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fan</label>
                    <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#374151] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    >
                        <option value="">Fanni Tanlang</option>
                        {subjects.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Old tomoni (Savol)</label>
                    <textarea
                        value={front}
                        onChange={(e) => setFront(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#374151] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
                        placeholder="masalan, O'zbekiston poytaxti qayer?"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Orqa tomoni (Javob)</label>
                    <textarea
                        value={back}
                        onChange={(e) => setBack(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#374151] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
                        placeholder="masalan, Toshkent"
                        required
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full py-4 text-lg">Fleshkarta Yaratish</Button>
                </div>
            </form>
        </div>
    );
};

export default FlashcardForm;
