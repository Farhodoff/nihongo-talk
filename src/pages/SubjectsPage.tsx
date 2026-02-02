import { BookOpen, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import SubjectCard from '../components/subjects/SubjectCard';
import SubjectForm from '../components/subjects/SubjectForm';

const SubjectsPage: React.FC = () => {
    const { subjects, addSubject, deleteSubject, tasks, flashcards } = useStudyData();
    const [isAdding, setIsAdding] = useState(false);

    // Calculate progress for a subject
    const getSubjectProgress = (subjectId: string): number => {
        const subjectTasks = tasks.filter(t => t.subjectId === subjectId);
        const completedTasks = subjectTasks.filter(t => t.completed || t.status === 'done').length;

        const subjectFlashcards = flashcards.filter(f => f.subjectId === subjectId);
        const reviewedCards = subjectFlashcards.filter(f => (f.repetitions || 0) > 0).length;

        const total = subjectTasks.length + subjectFlashcards.length;
        const completed = completedTasks + reviewedCards;

        return total > 0 ? Math.round((completed / total) * 100) : 0;
    };

    const handleCreateSubject = (data: any) => {
        addSubject(data);
        setIsAdding(false);
    };

    return (
        <div>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fanlar</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Kurslar va materiallarni boshqaring</p>
                </div>
                <Button onClick={() => setIsAdding(!isAdding)}>
                    <Plus size={20} className="mr-2" /> Fan Qo'shish
                </Button>
            </div>

            {/* Add Subject Form */}
            {isAdding && (
                <SubjectForm
                    onClose={() => setIsAdding(false)}
                    onSubmit={handleCreateSubject}
                />
            )}

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {subjects.map(subject => (
                    <SubjectCard
                        key={subject.id}
                        subject={subject}
                        progress={getSubjectProgress(subject.id)}
                        onDelete={deleteSubject}
                    />
                ))}

                {subjects.length === 0 && !isAdding && (
                    <div className="col-span-full flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-[#1f2937] rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mb-6 text-indigo-500">
                            <BookOpen size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hali fanlar yaratilmagan</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8">
                            O'qish rejangizni tuzishni boshlash uchun birinchi faningizni qo'shing.
                        </p>
                        <Button onClick={() => setIsAdding(true)} className="px-8">
                            <Plus size={20} className="mr-2" /> Birinchi Fanni Qo'shish
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubjectsPage;
