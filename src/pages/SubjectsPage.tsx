import { Atom, Beaker, BookOpen, Calculator, Code, Dumbbell, Globe, MapPin, Mic, Music, Palette, Plus, Trash2, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';

// Merged Icon options
const SUBJECT_ICONS = [
    { id: 'book', Icon: BookOpen, label: 'Kitob' },
    { id: 'code', Icon: Code, label: 'IT' },
    { id: 'calculator', Icon: Calculator, label: 'Matematika' },
    { id: 'mic', Icon: Mic, label: 'Til' },
    { id: 'globe', Icon: Globe, label: 'Geografiya' },
    { id: 'science', Icon: Beaker, label: 'Kimyo' },
    { id: 'atom', Icon: Atom, label: 'Fizika' },
    { id: 'music', Icon: Music, label: 'Musiqa' },
    { id: 'art', Icon: Palette, label: 'San\'at' },
    { id: 'sport', Icon: Dumbbell, label: 'Sport' },
];

const SubjectsPage: React.FC = () => {
    const { subjects, addSubject, deleteSubject, tasks, flashcards } = useStudyData();
    const [isAdding, setIsAdding] = useState(false);

    // Form State
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [teacher, setTeacher] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState('#8b5cf6'); // Purple default
    const [selectedIcon, setSelectedIcon] = useState('book');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        addSubject({
            name,
            description: description.trim() || undefined,
            icon: selectedIcon,
            teacherName: teacher,
            roomLocation: room,
            color,
            schedule: [],
        });

        // Reset
        setName('');
        setDescription('');
        setTeacher('');
        setRoom('');
        setSelectedIcon('book');
        setIsAdding(false);
    };

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

    // Get icon component helper
    const getIconComponent = (iconId?: string) => {
        const iconData = SUBJECT_ICONS.find(i => i.id === iconId);
        return iconData ? iconData.Icon : BookOpen;
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
                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-in slide-in-from-top-4 duration-300">
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Yangi Fan</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Fan Nomi</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="masalan, Backend Development"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Rang</label>
                                <div className="flex gap-2">
                                    {['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'].map(c => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setColor(c)}
                                            className={`w-8 h-8 rounded-full transition-transform ${color === c ? 'scale-110 ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500' : ''}`}
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Tavsif</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                maxLength={100}
                                rows={2}
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                                placeholder="Fan haqida qisqacha ma'lumot..."
                            />
                            <div className="text-xs text-gray-400 text-right">{description.length}/100</div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Belgi (Ikonka)</label>
                            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                                {SUBJECT_ICONS.map(({ id, Icon, label }) => (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => setSelectedIcon(id)}
                                        className={`p-2 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${selectedIcon === id
                                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                            : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300'
                                            }`}
                                        title={label}
                                    >
                                        <Icon size={20} className={selectedIcon === id ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">O'qituvchi (Ixtiyoriy)</label>
                                <input
                                    type="text"
                                    value={teacher}
                                    onChange={(e) => setTeacher(e.target.value)}
                                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="masalan, Janob Smith"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Xona (Ixtiyoriy)</label>
                                <input
                                    type="text"
                                    value={room}
                                    onChange={(e) => setRoom(e.target.value)}
                                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="masalan, 101-B"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                type="button"
                                onClick={() => setIsAdding(false)}
                                className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                Bekor qilish
                            </button>
                            <Button type="submit">Saqlash</Button>
                        </div>
                    </form>
                </div>
            )}

            {/* Subjects Grid - Modern Gradient Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map(subject => {
                    const IconComponent = getIconComponent(subject.icon);
                    const progress = getSubjectProgress(subject.id);

                    return (
                        <div
                            key={subject.id}
                            className="group relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${subject.color}dd 0%, ${subject.color}aa 100%)`,
                            }}
                        >
                            {/* Glassmorphism overlay */}
                            <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (window.confirm('Fanni o\'chirasizmi?')) deleteSubject(subject.id);
                                        }}
                                        className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                <Link to={`/subjects/${subject.id}`} className="block">
                                    {/* Icon Circle */}
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30">
                                        <IconComponent size={32} className="text-white" />
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-xl font-bold text-white mb-2">{subject.name}</h3>

                                    {subject.description && (
                                        <p className="text-white/80 text-sm mb-4 line-clamp-2">
                                            {subject.description}
                                        </p>
                                    )}

                                    {/* Teacher & Room Info */}
                                    <div className="space-y-1 mb-4">
                                        {subject.teacherName && (
                                            <div className="flex items-center text-sm text-white/70">
                                                <User size={14} className="mr-2" />
                                                {subject.teacherName}
                                            </div>
                                        )}
                                        {subject.roomLocation && (
                                            <div className="flex items-center text-sm text-white/70">
                                                <MapPin size={14} className="mr-2" />
                                                {subject.roomLocation}
                                            </div>
                                        )}
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center text-xs text-white/90 font-medium">
                                            <span>O'zlashtirish</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                                            <div
                                                className="h-full bg-white/90 rounded-full transition-all duration-500"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                                style={{ background: subject.color }}
                            ></div>
                        </div>
                    );
                })}

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
