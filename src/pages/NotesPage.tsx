import { Edit, FileText, Plus, Search, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';

const NotesPage: React.FC = () => {
    const { notes, subjects, deleteNote } = useStudyData();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stikerlar</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Tezkor eslatmalar va g'oyalar.</p>
                </div>
                <Link to="/notes/new">
                    <Button className="flex items-center gap-2">
                        <Plus size={20} /> Yangi Qayd
                    </Button>
                </Link>
            </div>

            {/* Search */}
            <div className="relative mb-6 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Qaydlarni qidirish..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2937] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes.length > 0 ? filteredNotes.map(note => {
                    const subject = subjects.find(s => s.id === note.subjectId);
                    return (
                        <div key={note.id} className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group relative">
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigate(`/notes/${note.id}`); }}
                                    className="p-1.5 text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
                                >
                                    <Edit size={16} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); if (confirm('Qaydni o\'chirasizmi?')) deleteNote(note.id); }}
                                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>

                            {subject && (
                                <span className="inline-block px-2 py-1 rounded text-xs font-medium mb-3" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                                    {subject.name}
                                </span>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">{note.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                                {note.content.substring(0, 150)}...
                            </p>
                            <p className="text-xs text-gray-400">
                                {new Date(note.updatedAt).toLocaleDateString()}
                            </p>
                        </div>
                    );
                }) : (
                    <div className="col-span-full text-center py-12 text-gray-400">
                        <FileText size={48} className="mx-auto mb-4 opacity-20" />
                        <p>Qaydlar topilmadi. Boshlash uchun yarating!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotesPage;
