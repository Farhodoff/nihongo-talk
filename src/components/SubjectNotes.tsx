import { FileText, Plus, Save, Trash2, X } from 'lucide-react';
import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { useStudyData } from '../context/StudyPlannerContext';
import { Button } from './ui/Button';

interface SubjectNotesProps {
    subjectId: string;
}

const SubjectNotes: React.FC<SubjectNotesProps> = ({ subjectId }) => {
    const { studyNotes, addStudyNote, updateStudyNote, deleteStudyNote } = useStudyData();
    const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
    const [isCreating, setIsCreating] = useState(false);

    // Editor State
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Ensure studyNotes is defined before filtering
    const subjectNotes = (studyNotes || []).filter(n => n.subjectId === subjectId);

    const startEditing = (note: any) => {
        setEditingNoteId(note.id);
        setTitle(note.title);
        setContent(note.content);
        setIsCreating(false);
    };

    const startCreating = () => {
        setEditingNoteId(null);
        setTitle('');
        setContent('');
        setIsCreating(true);
    };

    const cancelEdit = () => {
        setEditingNoteId(null);
        setIsCreating(false);
    };

    const saveNote = () => {
        if (!title.trim()) return alert("Sarlavha yozing!");

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

    // Editor View
    if (isCreating || editingNoteId) {
        return (
            <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-[600px]">
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800 rounded-t-2xl">
                    <input
                        className="bg-transparent text-lg font-bold outline-none text-gray-900 dark:text-white placeholder-gray-400 w-full"
                        placeholder="Mavzu sarlavhasi..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <Button variant="secondary" onClick={cancelEdit} className="text-gray-500">
                            <X size={20} />
                        </Button>
                        <Button onClick={saveNote}>
                            <Save size={20} className="mr-2" /> Saqlash
                        </Button>
                    </div>
                </div>
                <div className="flex-1 p-4 grid grid-cols-2 gap-4">
                    <textarea
                        className="w-full h-full p-4 bg-gray-50 dark:bg-gray-900 rounded-xl resize-none outline-none dark:text-white font-mono"
                        placeholder="Markdown formatida yozing..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="prose dark:prose-invert overflow-y-auto p-4 border border-gray-100 dark:border-gray-700 rounded-xl">
                        <Markdown>{content || '*Natija shu yerda ko\'rinadi*'}</Markdown>
                    </div>
                </div>
            </div>
        );
    }

    // List View
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Fanga oid konspektlar</h3>
                <Button onClick={startCreating}>
                    <Plus size={20} className="mr-2" /> Yangi Konspekt
                </Button>
            </div>

            {subjectNotes.length === 0 ? (
                <div className="text-center py-12 bg-white dark:bg-[#1f2937] rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                    <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Hozircha konspektlar yo'q</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjectNotes.map(note => (
                        <div
                            key={note.id}
                            onClick={() => startEditing(note)}
                            className="p-6 bg-white dark:bg-[#1f2937] rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group relative"
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); deleteStudyNote(note.id); }}
                                    className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{note.title}</h4>
                            <p className="text-sm text-gray-500 line-clamp-3">{note.content}</p>
                            <p className="text-xs text-gray-400 mt-4">{new Date(note.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SubjectNotes;
