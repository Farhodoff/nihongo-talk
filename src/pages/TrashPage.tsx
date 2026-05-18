import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Task, Flashcard } from '../types';
import { useStudyData } from '../context/StudyPlannerContext';
import { Trash2, RotateCcw, Inbox } from 'lucide-react';
import { Button } from '../components/ui/Button';

const TrashPage: React.FC = () => {
    const { deleteTask, restoreTask, deleteFlashcard, restoreFlashcard, subjects } = useStudyData();
    const [deletedTasks, setDeletedTasks] = useState<Task[]>([]);
    const [deletedFlashcards, setDeletedFlashcards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'tasks' | 'flashcards'>('tasks');

    const fetchDeletedItems = async () => {
        setLoading(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            // Fetch deleted tasks
            const { data: delTasks, error: tasksError } = await supabase
                .from('tasks')
                .select('*')
                .eq('user_id', user.id)
                .not('deleted_at', 'is', null);

            if (tasksError) throw tasksError;

            // Fetch deleted flashcards
            const { data: delCards, error: cardsError } = await supabase
                .from('flashcards')
                .select('*')
                .eq('user_id', user.id)
                .not('deleted_at', 'is', null);

            if (cardsError) throw cardsError;

            setDeletedTasks((delTasks || []).map(t => ({
                ...t,
                subjectId: t.subject_id,
                goalId: t.goal_id,
                dueDate: t.due_date,
                deadline: t.due_date,
                createdAt: t.created_at,
                googleEventId: t.google_event_id,
                deletedAt: t.deleted_at
            })) as Task[]);

            setDeletedFlashcards((delCards || []).map(c => ({
                ...c,
                subjectId: c.subject_id,
                nextReviewDate: c.next_review_date,
                easeFactor: c.ease_factor,
                deletedAt: c.deleted_at
            })) as Flashcard[]);

        } catch (error) {
            console.error('Error fetching deleted items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDeletedItems();
    }, []);

    const handleRestoreTask = async (id: string) => {
        await restoreTask(id);
        alert("Vazifa muvaffaqiyatli tiklandi! 📋");
        await fetchDeletedItems();
    };

    const handlePermanentDeleteTask = async (id: string) => {
        if (confirm("Ushbu vazifani butunlay o'chirib yubormoqchimisiz? Ushbu amalni ortga qaytarib bo'lmaydi.")) {
            await deleteTask(id, true);
            await fetchDeletedItems();
        }
    };

    const handleRestoreFlashcard = async (id: string) => {
        await restoreFlashcard(id);
        alert("Flashcard muvaffaqiyatli tiklandi! 🧠");
        await fetchDeletedItems();
    };

    const handlePermanentDeleteFlashcard = async (id: string) => {
        if (confirm("Ushbu flashcardni butunlay o'chirib yubormoqchimisiz? Ushbu amalni ortga qaytarib bo'lmaydi.")) {
            await deleteFlashcard(id, true);
            await fetchDeletedItems();
        }
    };

    const handleEmptyTrash = async () => {
        const count = deletedTasks.length + deletedFlashcards.length;
        if (count === 0) {
            alert("Savatcha allaqachon bo'sh.");
            return;
        }

        if (confirm(`Savatchadagi barcha ${count} ta ma'lumotni butunlay o'chirmoqchimisiz? Bu amalni aslo ortga qaytarib bo'lmaydi.`)) {
            setLoading(true);
            try {
                // Bulk delete permanent tasks
                for (const t of deletedTasks) {
                    await deleteTask(t.id, true);
                }
                // Bulk delete permanent flashcards
                for (const f of deletedFlashcards) {
                    await deleteFlashcard(f.id, true);
                }
                alert("Savatcha butunlay tozalandi! 🧹");
                await fetchDeletedItems();
            } catch (err) {
                console.error("Empty trash error:", err);
            } finally {
                setLoading(false);
            }
        }
    };

    const getSubjectName = (subjectId?: string) => {
        if (!subjectId) return 'Fasiz';
        const sub = subjects.find(s => s.id === subjectId);
        return sub ? sub.name : 'Noma\'lum fan';
    };



    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Savatcha</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">O'chirilgan vazifalar va flashcardlarni tiklash yoki butunlay o'chirish</p>
                </div>
                <Button
                    variant="danger"
                    onClick={handleEmptyTrash}
                    disabled={loading || (deletedTasks.length === 0 && deletedFlashcards.length === 0)}
                    className="flex items-center gap-2 self-start sm:self-center"
                >
                    <Trash2 size={16} /> Savatchani tozalash
                </Button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                <button
                    onClick={() => setActiveTab('tasks')}
                    className={`py-2.5 px-4 font-semibold text-sm border-b-2 transition-colors ${
                        activeTab === 'tasks'
                            ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                >
                    Vazifalar ({deletedTasks.length})
                </button>
                <button
                    onClick={() => setActiveTab('flashcards')}
                    className={`py-2.5 px-4 font-semibold text-sm border-b-2 transition-colors ${
                        activeTab === 'flashcards'
                            ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                >
                    Flashcardlar ({deletedFlashcards.length})
                </button>
            </div>

            {/* Content Area */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                </div>
            ) : (
                <>
                    {activeTab === 'tasks' && (
                        deletedTasks.length === 0 ? (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-12 text-center flex flex-col items-center">
                                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-full text-gray-400 dark:text-gray-500 mb-4">
                                    <Inbox size={48} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Savatcha bo'sh</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">O'chirilgan vazifalar bu yerda ko'rinadi.</p>
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {deletedTasks.map((task) => (
                                        <div key={task.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">{task.title}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    {task.subjectId && (
                                                        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                                            {getSubjectName(task.subjectId)}
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        O'chirilgan vaqt: {task.deletedAt ? new Date(task.deletedAt).toLocaleString('uz-UZ') : ''}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleRestoreTask(task.id)}
                                                    className="p-2 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
                                                    title="Tiklash"
                                                >
                                                    <RotateCcw size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handlePermanentDeleteTask(task.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                                                    title="Butunlay o'chirish"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}

                    {activeTab === 'flashcards' && (
                        deletedFlashcards.length === 0 ? (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-12 text-center flex flex-col items-center">
                                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-full text-gray-400 dark:text-gray-500 mb-4">
                                    <Inbox size={48} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Savatcha bo'sh</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">O'chirilgan flashcardlar bu yerda ko'rinadi.</p>
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {deletedFlashcards.map((card) => (
                                        <div key={card.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                            <div className="max-w-[70%]">
                                                <div className="flex items-start gap-4">
                                                    <div>
                                                        <span className="text-xs font-semibold text-gray-400 uppercase block">Savol</span>
                                                        <p className="text-gray-900 dark:text-white font-medium line-clamp-1">{card.front}</p>
                                                    </div>
                                                    <div className="border-l border-gray-200 dark:border-gray-700 pl-4">
                                                        <span className="text-xs font-semibold text-gray-400 uppercase block">Javob</span>
                                                        <p className="text-gray-500 dark:text-gray-400 font-medium line-clamp-1">{card.back}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium">
                                                        {getSubjectName(card.subjectId)}
                                                    </span>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        O'chirilgan vaqt: {card.deletedAt ? new Date(card.deletedAt).toLocaleString('uz-UZ') : ''}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleRestoreFlashcard(card.id)}
                                                    className="p-2 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
                                                    title="Tiklash"
                                                >
                                                    <RotateCcw size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handlePermanentDeleteFlashcard(card.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                                                    title="Butunlay o'chirish"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </>
            )}
        </div>
    );
};

export default TrashPage;
