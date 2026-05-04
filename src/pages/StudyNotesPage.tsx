import { BookOpen, FileText, Search } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';

const StudyNotesPage: React.FC = () => {
    const { studyNotes, subjects } = useStudyData();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const filteredNotes = studyNotes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    );

    // Group by Subject
    const groupedNotes = filteredNotes.reduce((acc, note) => {
        const subjectName = subjects.find(s => s.id === note.subjectId)?.name || 'Noma\'lum fan';
        if (!acc[subjectName]) acc[subjectName] = [];
        acc[subjectName].push(note);
        return acc;
    }, {} as Record<string, typeof studyNotes>);

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Konspektlar</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Faqat fanlarga oid chuqur bilimlar.</p>
                </div>
            </div>

            {/* Search */}
            <div className="relative mb-8 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Konspektlardan qidirish..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2937] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Content */}
            {Object.keys(groupedNotes).length > 0 ? (
                <div className="space-y-8">
                    {Object.entries(groupedNotes).map(([subjectName, notes]) => (
                        <div key={subjectName}>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                <BookOpen size={20} className="text-indigo-500" />
                                {subjectName}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {notes.map(note => (
                                    <div
                                        key={note.id}
                                        onClick={() => navigate(`/subjects/${note.subjectId}`)}
                                        className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group"
                                    >
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">{note.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                                            {note.content}
                                        </p>
                                        <div className="flex justify-between items-center text-xs text-gray-400">
                                            <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                                            <span className="flex items-center gap-1"><FileText size={12} /> Konspekt</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-gray-400">
                    <BookOpen size={64} className="mx-auto mb-4 opacity-20" />
                    <p className="text-xl">Hozircha konspektlar yo'q.</p>
                    <p className="text-sm mt-2">Fanning ichiga kirib, "Konspektlar" bo'limidan qo'shishingiz mumkin.</p>
                </div>
            )}
        </div>
    );
};

export default StudyNotesPage;
