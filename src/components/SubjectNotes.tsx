import { FileText, Plus, Save, Trash2, X } from 'lucide-react';
import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFontPreference } from '../hooks/useFontPreference';
import { StudyNote } from '../types';
import MermaidViewer from './MermaidViewer';
import FontSelector from './FontSelector';
import { Button } from './ui/Button';
import { toast } from '../hooks/use-toast';

interface SubjectNotesProps {
    subjectId: string;
}

const SubjectNotes: React.FC<SubjectNotesProps> = ({ subjectId }) => {
    const { studyNotes, addStudyNote, updateStudyNote, deleteStudyNote } = useStudyData();
    const { font } = useFontPreference();
    const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
    const [isCreating, setIsCreating] = useState(false);

    // Mode: 'write' or 'preview'
    const [mode, setMode] = useState<'write' | 'preview'>('write');

    // Editor State
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Ensure studyNotes is defined before filtering
    const subjectNotes = (studyNotes || []).filter(n => n.subjectId === subjectId);

    const startEditing = (note: StudyNote) => {
        setEditingNoteId(note.id);
        setTitle(note.title);
        setContent(note.content);
        setIsCreating(false);
        setMode('write'); // Reset to write mode
    };

    const startCreating = () => {
        setEditingNoteId(null);
        setTitle('');
        setContent('');
        setIsCreating(true);
        setMode('write'); // Start in write mode
    };

    const cancelEdit = () => {
        setEditingNoteId(null);
        setIsCreating(false);
        setMode('write');
    };

    const saveNote = () => {
        if (!title.trim()) {
            toast({ variant: 'destructive', title: 'Xatolik', description: "Sarlavha yozing!" });
            return;
        }

        if (isCreating) {
            addStudyNote({
                subjectId,
                title,
                content
            });
        } else if (editingNoteId) {
            updateStudyNote(editingNoteId, {
                title,
                content
            });
        }
        cancelEdit();
    };

    // Editor View - Tab-Based UI
    if (isCreating || editingNoteId) {
        return (
            <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-[600px] shadow-lg">
                {/* Header with Tabs */}
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-t-2xl">
                    <div className="flex justify-between items-center mb-3">
                        <input
                            className="bg-transparent text-lg font-bold outline-none text-gray-900 dark:text-white placeholder-gray-400 flex-1 mr-4"
                            placeholder="Mavzu sarlavhasi..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="flex gap-2">
                            <Button variant="secondary" onClick={cancelEdit} className="text-gray-500 dark:text-gray-400">
                                <X size={20} />
                            </Button>
                            <FontSelector />
                            <Button onClick={saveNote} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                                <Save size={20} className="mr-2" /> Saqlash
                            </Button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex p-1 bg-gray-100 dark:bg-gray-900 rounded-lg w-fit">
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

                {/* Content Area */}
                <div className={`flex-1 overflow-hidden p-6 ${font === 'sans' ? 'font-sans' : font === 'serif' ? 'font-serif' : 'font-mono'
                    }`}>
                    {mode === 'write' ? (
                        /* EDIT MODE */
                        <textarea
                            className="w-full h-full p-4 bg-gray-50 dark:bg-gray-900 rounded-xl resize-none outline-none text-gray-800 dark:text-gray-200 text-sm leading-relaxed placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                            placeholder="Markdown formatida yozing..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            spellCheck="false"
                        />
                    ) : (
                        /* PREVIEW MODE */
                        <div className="w-full h-full overflow-y-auto p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <Markdown
                                    components={{
                                        code({ node, inline, className, children, ...props }: any) {
                                            const match = /language-(\w+)/.exec(className || '');
                                            if (!inline && match && match[1] === 'mermaid') {
                                                return <MermaidViewer chart={String(children).replace(/\n$/, '')} />;
                                            }
                                            return (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            );
                                        }
                                    }}
                                >
                                    {content || '*Natija shu yerda ko\'rinadi*'}
                                </Markdown>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // List View
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Fanga oid konspektlar</h3>
                <Button onClick={startCreating} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    <Plus size={20} className="mr-2" /> Yangi Konspekt
                </Button>
            </div>

            {subjectNotes.length === 0 ? (
                <div className="text-center py-12 bg-white dark:bg-dark-card rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                    <FileText size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">Hozircha konspektlar yo'q</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjectNotes.map(note => (
                        <div
                            key={note.id}
                            onClick={() => startEditing(note)}
                            className="p-6 bg-white dark:bg-dark-card rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all cursor-pointer group relative"
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); deleteStudyNote(note.id); }}
                                    className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 rounded transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{note.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">{note.content}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">{new Date(note.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SubjectNotes;
