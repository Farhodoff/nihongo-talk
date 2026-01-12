import { ArrowLeft, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import FontSelector from '../components/FontSelector';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFontPreference } from '../hooks/useFontPreference';

const NoteEditorPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { notes, subjects, addNote, updateNote } = useStudyData();
    const { font } = useFontPreference();

    const isNew = !id || id === 'new';

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [mode, setMode] = useState<'write' | 'preview'>('write');

    useEffect(() => {
        if (!isNew) {
            const note = notes.find(n => n.id === id);
            if (note) {
                setTitle(note.title);
                setContent(note.content);
                setSubjectId(note.subjectId);
            }
        }
    }, [id, notes, isNew]);

    const handleSave = () => {
        if (!title.trim()) return alert('Sarlavha kiritish shart');
        if (!subjectId) return alert('Fan tanlash shart');

        const noteData = {
            subjectId,
            title,
            content,
            attachments: []
        };

        if (isNew) {
            addNote(noteData);
        } else {
            updateNote(id!, noteData);
        }
        navigate('/notes');
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-dark-bg">
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-gray-700">
                {/* Left: Back button + Tabs */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/notes')}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                        <ArrowLeft size={20} className="text-gray-500 dark:text-gray-400" />
                    </button>

                    {/* Tabs */}
                    <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <button
                            onClick={() => setMode('write')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'write'
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            ✏️ Yozish
                        </button>
                        <button
                            onClick={() => setMode('preview')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'preview'
                                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            👁️ Ko'rish
                        </button>
                    </div>
                </div>

                {/* Right: Font Selector + Save Button */}
                <div className="flex items-center gap-2">
                    <FontSelector />
                    <Button
                        onClick={handleSave}
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Save size={18} />
                        Saqlash
                    </Button>
                </div>
            </div>

            {/* Meta Info (Title + Subject) */}
            <div className="px-6 py-4 bg-white dark:bg-dark-card border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-4xl mx-auto flex gap-4">
                    <input
                        type="text"
                        placeholder="Qayd Sarlavhasi..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 text-xl font-bold bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400"
                    />
                    <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    >
                        <option value="">Fanni Tanlang</option>
                        {subjects.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto bg-white dark:bg-dark-card">
                <div className={`max-w-4xl mx-auto px-6 py-8 h-full ${font === 'sans' ? 'font-sans' : font === 'serif' ? 'font-serif' : 'font-mono'
                    }`}>
                    {mode === 'write' ? (
                        /* EDIT MODE */
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full h-full resize-none outline-none text-gray-800 dark:text-gray-200 text-base leading-relaxed bg-transparent placeholder-gray-400"
                            placeholder="Konspekt yozishni boshlang... (Markdown qo'llab-quvvatlanadi)"
                            spellCheck="false"
                        />
                    ) : (
                        /* PREVIEW MODE */
                        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                            <Markdown>{content || '*Mazmun yozilmagan*'}</Markdown>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Hint */}
            <div className="px-6 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <div className="max-w-4xl mx-auto">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        💡 Markdown formatidan foydalaning: **bold**, *italic*, # Sarlavha, - Ro'yxat
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NoteEditorPage;
