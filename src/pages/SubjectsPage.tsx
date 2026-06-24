import { BookOpen, Plus, Search } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import SubjectCard from '../components/subjects/SubjectCard';
import SubjectForm from '../components/subjects/SubjectForm';
import { Subject } from '../types';

const SubjectsPage: React.FC = () => {
    const { subjects, addSubject, updateSubject, deleteSubject, tasks, flashcards } = useStudyData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSubjects = useMemo(() => {
        if (!searchQuery.trim()) return subjects;
        return subjects.filter(subject => 
            subject.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            (subject.description && subject.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [subjects, searchQuery]);

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

    const handleSubjectSubmit = (data: Partial<Subject>) => {
        if (editingSubject) {
            updateSubject(editingSubject.id, data);
        } else {
            addSubject(data);
        }
        setIsAdding(false);
        setEditingSubject(null);
    };

    const handleEditClick = (subject: Subject) => {
        setEditingSubject(subject);
        setIsAdding(true);
    };

    const handleCloseForm = () => {
        setIsAdding(false);
        setEditingSubject(null);
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">Fanlar</h2>
                    <p className="text-muted-foreground mt-1">Kurslar va materiallarni boshqaring</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="Fanlarni qidirish..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <Button onClick={() => { setIsAdding(!isAdding); setEditingSubject(null); }} className="w-full sm:w-auto shrink-0">
                        <Plus size={20} className="mr-2" /> Fan Qo'shish
                    </Button>
                </div>
            </div>

            {/* Add/Edit Subject Form */}
            {isAdding && (
                <SubjectForm
                    onClose={handleCloseForm}
                    onSubmit={handleSubjectSubmit}
                    initialData={editingSubject || undefined}
                />
            )}

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {filteredSubjects.map(subject => (
                    <SubjectCard
                        key={subject.id}
                        subject={subject}
                        progress={getSubjectProgress(subject.id)}
                        onDelete={deleteSubject}
                        onEdit={handleEditClick}
                    />
                ))}

                {subjects.length > 0 && filteredSubjects.length === 0 && !isAdding && (
                    <div className="col-span-full py-12 text-center text-muted-foreground">
                        Siz izlagan fan topilmadi.
                    </div>
                )}

                {subjects.length === 0 && !isAdding && (
                    <div className="col-span-full flex flex-col items-center justify-center p-12 text-center glass-card rounded-3xl border-dashed">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                            <BookOpen size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Hali fanlar yaratilmagan</h3>
                        <p className="text-muted-foreground max-w-sm mb-8">
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
