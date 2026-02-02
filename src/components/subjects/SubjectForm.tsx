import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { SUBJECT_ICONS } from './constants';

interface SubjectFormProps {
    onClose: () => void;
    onSubmit: (data: {
        name: string;
        description?: string;
        teacherName: string;
        roomLocation: string;
        color: string;
        icon: string;
        schedule: string[];
    }) => void;
}

const SubjectForm: React.FC<SubjectFormProps> = ({ onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [teacher, setTeacher] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState('#8b5cf6');
    const [selectedIcon, setSelectedIcon] = useState('book');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        onSubmit({
            name,
            description: description.trim() || undefined,
            icon: selectedIcon,
            teacherName: teacher,
            roomLocation: room,
            color,
            schedule: [],
        });
    };

    return (
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
                        onClick={onClose}
                        className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        Bekor qilish
                    </button>
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </div>
    );
};

export default SubjectForm;
