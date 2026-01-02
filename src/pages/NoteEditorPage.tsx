import { ArrowLeft, File, Image, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyPlanner } from '../context/StudyPlannerContext';

const NoteEditorPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { notes, subjects, addNote, updateNote } = useStudyPlanner();

    const isNew = !id || id === 'new';

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [previewMode, setPreviewMode] = useState(false);

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
            attachments: [] // Placeholder for now
        };

        if (isNew) {
            addNote(noteData);
        } else {
            updateNote(id!, noteData);
        }
        navigate('/notes');
    };

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-100px)] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/notes')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <ArrowLeft size={20} className="text-gray-500" />
                    </button>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{isNew ? 'Yangi Qayd' : 'Qaydni Tahrirlash'}</h2>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => setPreviewMode(!previewMode)}>
                        {previewMode ? 'Tahrirlash' : 'Ko\'rish'}
                    </Button>
                    <Button onClick={handleSave} className="flex items-center gap-2">
                        <Save size={18} /> Saqlash
                    </Button>
                </div>
            </div>

            {/* Inputs */}
            <div className="bg-white dark:bg-[#1f2937] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col flex-1 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex gap-4">
                    <input
                        type="text"
                        placeholder="Qayd Sarlavhasi"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 text-lg font-bold bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400"
                    />
                    <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        className="px-3 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 border-none outline-none text-sm"
                    >
                        <option value="">Fanni Tanlang</option>
                        {subjects.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>

                {/* Editor / Preview */}
                <div className="flex-1 overflow-y-auto">
                    {previewMode ? (
                        <div className="prose dark:prose-invert max-w-none p-6">
                            <Markdown>{content || '*Mazmun yo\'q*'}</Markdown>
                        </div>
                    ) : (
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Qaydingizni shu yerga yozing... (Markdown qo'llab-quvvatlanadi)"
                            className="w-full h-full p-6 bg-transparent border-none outline-none resize-none text-gray-700 dark:text-gray-300 font-mono text-sm leading-relaxed"
                        />
                    )}
                </div>

                {/* Toolbar */}
                <div className="p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-500" title="Rasm Biriktirish (Demo)">
                        <Image size={18} />
                    </button>
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-500" title="PDF Biriktirish (Demo)">
                        <File size={18} />
                    </button>
                    <div className="border-l border-gray-300 dark:border-gray-600 mx-2 h-6 self-center"></div>
                    <span className="text-xs text-gray-400 self-center">markdown qo'llab-quvvatlanadi</span>
                </div>
            </div>
        </div>
    );
};

export default NoteEditorPage;
