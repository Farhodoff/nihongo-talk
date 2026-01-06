import { BookOpen, MapPin, Plus, Trash2, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';

const SubjectsPage: React.FC = () => {
    const { subjects, addSubject, deleteSubject } = useStudyData();
    const [isAdding, setIsAdding] = useState(false);

    // Form State
    const [name, setName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState('#3b82f6'); // Blue default

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        addSubject({
            name,
            teacherName: teacher,
            roomLocation: room,
            color,
            schedule: []
        });

        // Reset
        setName('');
        setTeacher('');
        setRoom('');
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
                <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-in slide-in-from-top-4 duration-300">
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Yangi Fan</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Fan Nomi</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="masalan, Matematika"
                            />
                        </div>

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

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Rang</label>
                            <div className="flex gap-2">
                                {['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'].map(c => (
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

                        <div className="md:col-span-2 flex justify-end gap-3 mt-4">
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

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map(subject => (
                    <div key={subject.id} className="group relative bg-white dark:bg-[#1f2937] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => {
                                    if (window.confirm('Fanni o\'chirasizmi?')) deleteSubject(subject.id);
                                }}
                                className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

                        <Link to={`/subjects/${subject.id}`} className="block">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                                <BookOpen size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{subject.name}</h3>

                            <div className="space-y-2">
                                {subject.teacherName && (
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <User size={16} className="mr-2 opacity-70" />
                                        {subject.teacherName}
                                    </div>
                                )}
                                {subject.roomLocation && (
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <MapPin size={16} className="mr-2 opacity-70" />
                                        {subject.roomLocation}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}

                {subjects.length === 0 && !isAdding && (
                    <div className="col-span-full py-12 text-center text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <BookOpen size={48} className="mx-auto mb-4 opacity-20" />
                        <p className="text-lg font-medium">Fanlar yo'q</p>
                        <p className="text-sm">Boshlash uchun "Fan Qo'shish" ni bosing</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubjectsPage;
