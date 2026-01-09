import React, { useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { Plus, Trash2, Edit2, Layout, Calendar } from 'lucide-react';
import moment from 'moment';

interface WhiteboardListProps {
    subjectId: string;
    onSelect: (id: string) => void;
}

const WhiteboardList: React.FC<WhiteboardListProps> = ({ subjectId, onSelect }) => {
    const { whiteboards, addWhiteboard, deleteWhiteboard, updateWhiteboardTitle } = useStudyData();
    const [isCreating, setIsCreating] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState('');

    const subjectWhiteboards = whiteboards
        .filter(w => w.subjectId === subjectId)
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim()) return;
        setIsCreating(true); // show loading state if needed
        const id = await addWhiteboard(subjectId, newTitle);
        if (id) {
            setNewTitle('');
            setIsCreating(false);
            // Optionally auto-select
            // onSelect(id); 
        } else {
            setIsCreating(false);
        }
    };

    const handleUpdateTitle = async (id: string) => {
        if (!editTitle.trim()) return;
        await updateWhiteboardTitle(id, editTitle);
        setEditingId(null);
    };

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm("Rostdan ham bu doskani o'chirmoqchimisiz?")) {
            await deleteWhiteboard(id);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold dark:text-white">Mavjud Doskalar</h3>
            </div>

            {/* Create New */}
            <form onSubmit={handleCreate} className="flex gap-2">
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Yangi doska nomi..."
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    disabled={isCreating || !newTitle.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                >
                    <Plus size={20} />
                    <span>Yaratish</span>
                </button>
            </form>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjectWhiteboards.length === 0 ? (
                    <div className="col-span-full text-center py-10 text-gray-400">
                        <Layout size={48} className="mx-auto mb-3 opacity-20" />
                        <p>Hozircha doskalar yo'q. Yangi qo'shing!</p>
                    </div>
                ) : (
                    subjectWhiteboards.map(wb => (
                        <div
                            key={wb.id}
                            onClick={() => onSelect(wb.id)}
                            className="group relative p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 cursor-pointer transition-all hover:shadow-md"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    {editingId === wb.id ? (
                                        <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                                            <input
                                                autoFocus
                                                type="text"
                                                value={editTitle}
                                                onChange={e => setEditTitle(e.target.value)}
                                                className="px-2 py-1 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                            />
                                            <button onClick={() => handleUpdateTitle(wb.id)} className="text-green-500 hover:bg-green-100 p-1 rounded">✔</button>
                                        </div>
                                    ) : (
                                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
                                            {wb.title}
                                        </h4>
                                    )}
                                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                                        <Calendar size={14} />
                                        <span>{moment(wb.updatedAt).fromNow()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
                                    <button
                                        onClick={() => { setEditingId(wb.id); setEditTitle(wb.title); }}
                                        className="p-2 text-gray-400 hover:text-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                        title="Nomini o'zgartirish"
                                    >
                                        <Edit2 size={16} />
                                    </button>
                                    <button
                                        onClick={(e) => handleDelete(wb.id, e)}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                        title="O'chirish"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default WhiteboardList;
