import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { SUBJECT_ICONS } from './constants';
import { Subject } from '../../types';

interface SubjectFormProps {
    onClose: () => void;
    onSubmit: (data: {
        name: string;
        description?: string;
        color: string;
        icon: string;
        schedule: string[];
    }) => void;
    initialData?: Subject;
}

const SubjectForm: React.FC<SubjectFormProps> = ({ onClose, onSubmit, initialData }) => {
    const [name, setName] = useState(initialData?.name || '');
    const [description, setDescription] = useState(initialData?.description || '');
    const [color, setColor] = useState(initialData?.color || '#8b5cf6');
    const [selectedIcon, setSelectedIcon] = useState(initialData?.icon || 'book');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        onSubmit({
            name,
            description: description.trim() || undefined,
            icon: selectedIcon,
            color,
            schedule: initialData?.schedule || [],
        });
    };

    return (
        <div className="glass-card p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 duration-300">
            <h3 className="text-lg font-bold mb-4 text-foreground">
                {initialData ? 'Fanni Tahrirlash' : 'Yangi Fan'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Fan Nomi</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary outline-none backdrop-blur-sm"
                            placeholder="masalan, Backend Development"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Rang</label>
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
                    <label className="text-sm font-medium text-foreground">Tavsif</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={100}
                        rows={2}
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary outline-none resize-none backdrop-blur-sm"
                        placeholder="Fan haqida qisqacha ma'lumot..."
                    />
                    <div className="text-xs text-muted-foreground text-right">{description.length}/100</div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Belgi (Ikonka)</label>
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                        {SUBJECT_ICONS.map(({ id, Icon, label }) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setSelectedIcon(id)}
                                className={`p-2 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${selectedIcon === id
                                    ? 'border-primary bg-primary/10'
                                    : 'border-border hover:border-primary/50'
                                    }`}
                                title={label}
                            >
                                <Icon size={20} className={selectedIcon === id ? 'text-primary' : 'text-muted-foreground'} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Bekor qilish
                    </button>
                    <Button type="submit">{initialData ? 'Yangilash' : 'Saqlash'}</Button>
                </div>
            </form>
        </div>
    );
};

export default SubjectForm;
