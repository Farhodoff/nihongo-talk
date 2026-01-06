import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { Button } from './ui/Button';

const MOODS = [
    { value: 1, label: 'Stressed', emoji: '😫' },
    { value: 2, label: 'Tired', emoji: '😕' },
    { value: 3, label: 'Okay', emoji: '😐' },
    { value: 4, label: 'Good', emoji: '🙂' },
    { value: 5, label: 'Great', emoji: '🤩' },
];

export const SessionCompleteModal: React.FC = () => {
    const { focusState, addSession, awardXP, resetTimer } = useStudyData();
    const [selectedMood, setSelectedMood] = useState<number | null>(null);

    if (!focusState.isSessionCompleted || focusState.mode !== 'focus') return null;

    const handleSave = () => {
        addSession({
            subjectId: focusState.selectedSubjectId || undefined,
            startTime: new Date().toISOString(), // Should ideally be (Date.now() - duration), but simplified
            duration: 25,
            type: 'focus',
            completed: true,
            moodAfter: selectedMood || 3 // Default to Okay
        });
        awardXP(250);
        resetTimer();
        setSelectedMood(null);
    };

    const handleSkip = () => {
        resetTimer();
        setSelectedMood(null);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl scale-100 animate-in zoom-in-95">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Tabriklaymiz!
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        25 daqiqalik fokus sessiyasi yakunlandi. Hozir o'zingizni qanday his qilyapsiz?
                    </p>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-8">
                    {MOODS.map(m => (
                        <button
                            key={m.value}
                            onClick={() => setSelectedMood(m.value)}
                            className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-all ${selectedMood === m.value ? 'bg-indigo-100 dark:bg-indigo-900/40 ring-2 ring-indigo-500 transform scale-110' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                        >
                            <span className="text-3xl" role="img" aria-label={m.label}>{m.emoji}</span>
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{m.label}</span>
                        </button>
                    ))}
                </div>

                <div className="flex gap-4">
                    <Button variant="secondary" onClick={handleSkip} className="flex-1">
                        O'tkazib yuborish
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                        disabled={!selectedMood}
                    >
                        Saqlash (+250 XP)
                    </Button>
                </div>
            </div>
        </div>
    );
};
