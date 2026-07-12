import { ArrowLeft, Save, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import FontSelector from '../components/FontSelector';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { useFontPreference } from '../hooks/useFontPreference';
import { generateFlashcardsFromNote, expandNoteWithAI, summarizeNoteWithAI, fixNoteSpellingWithAI, isAIKeyConfigured } from '../utils/ai';

const NoteEditorPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { notes, subjects, addNote, updateNote, addFlashcard, settings } = useStudyData();
    const { font } = useFontPreference();

    const isNew = !id || id === 'new';

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [mode, setMode] = useState<'write' | 'preview'>('write');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [isAiMenuOpen, setIsAiMenuOpen] = useState(false);

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

    const handleGenerateFlashcards = async () => {
        if (!isAIKeyConfigured()) {
            return alert('AI funksiyalar uchun API kalit kerak. Sozlamalar → AI bo\'limida kiriting.');
        }
        if (!content.trim() || content.length < 50) {
            return alert('Fleshkartalar yaratish uchun kamida 50 ta belgi bo\'lgan matn kerak.');
        }
        if (!subjectId) {
            return alert('Iltimos, avval fanni tanlang, kartalar shu fanga biriktiriladi.');
        }

        setIsGenerating(true);
        try {
            const cards = await generateFlashcardsFromNote(content, 5, settings.googleApiKey);
            
            let count = 0;
            for (const card of cards) {
                await addFlashcard({
                    subjectId,
                    front: card.front,
                    back: card.back,
                });
                count++;
            }
            
            alert(`${count} ta fleshkarta muvaffaqiyatli yaratildi va fanga biriktirildi!`);
        } catch (error) {
            console.error('Flashcard generation error:', error);
            alert('Fleshkartalar yaratishda xatolik yuz berdi. API kalitini tekshiring.');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleAIAction = async (action: 'expand' | 'summarize' | 'fix') => {
        if (!isAIKeyConfigured()) return alert('AI funksiyalar uchun API kalit kerak. Sozlamalar → AI bo\'limida kiriting.');
        if (!content.trim()) return alert('AI ishlov berishi uchun konspekt matni yozilgan bo\'lishi kerak!');
        if (!subjectId) return alert('Iltimos, avval fanni tanlang!');

        const selectedSubject = subjects.find(s => s.id === subjectId);
        const subjectName = selectedSubject ? selectedSubject.name : '';

        setIsAiLoading(true);
        try {
            let result = '';
            if (action === 'expand') {
                result = await expandNoteWithAI(content, subjectName, settings.googleApiKey);
            } else if (action === 'summarize') {
                result = await summarizeNoteWithAI(content, subjectName, settings.googleApiKey);
            } else if (action === 'fix') {
                result = await fixNoteSpellingWithAI(content, subjectName, settings.googleApiKey);
            }

            if (result) {
                setContent(result);
            }
        } catch (error) {
            console.error(`AI ${action} failed:`, error);
            alert('AI amalni bajarishda xatolik yuz berdi. Sozlamalarda API kalitini tekshiring.');
        } finally {
            setIsAiLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-background text-foreground">
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-6 py-3 glass-card border-b border-border z-10 relative">
                {/* Left: Back button + Tabs */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/notes')}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        <ArrowLeft size={20} className="text-muted-foreground" />
                    </button>

                    {/* Tabs */}
                    <div className="flex p-1 bg-muted rounded-lg">
                        <button
                            onClick={() => setMode('write')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'write'
                                ? 'bg-background text-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            ✏️ Yozish
                        </button>
                        <button
                            onClick={() => setMode('preview')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'preview'
                                ? 'bg-background text-primary shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            👁️ Ko'rish
                        </button>
                    </div>
                </div>

                {/* Right: AI + Font Selector + Save Button */}
                <div className="flex items-center gap-2">
                    {/* AI Tools Dropdown */}
                    <div className="relative">
                        <Button
                            onClick={() => setIsAiMenuOpen(!isAiMenuOpen)}
                            disabled={isGenerating || isAiLoading}
                            variant="secondary"
                            className="flex items-center gap-2 text-primary border-primary/20"
                        >
                            <Sparkles size={18} className={isGenerating || isAiLoading ? 'animate-pulse' : ''} />
                            {isAiLoading ? 'Ishlov berilmoqda...' : 'AI Yordamchi'}
                        </Button>
                        {isAiMenuOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setIsAiMenuOpen(false)} />
                                <div className="absolute right-0 mt-2 w-56 glass-card border border-border py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <button
                                        onClick={() => {
                                            setIsAiMenuOpen(false);
                                            handleGenerateFlashcards();
                                        }}
                                        disabled={!content.trim()}
                                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted text-foreground font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
                                    >
                                        ✨ Fleshkartalar Yaratish
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsAiMenuOpen(false);
                                            handleAIAction('expand');
                                        }}
                                        disabled={!content.trim()}
                                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted text-foreground font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
                                    >
                                        🚀 Matnni Kengaytirish
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsAiMenuOpen(false);
                                            handleAIAction('summarize');
                                        }}
                                        disabled={!content.trim()}
                                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted text-foreground font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
                                    >
                                        📝 Qisqacha Xulosa (Summary)
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsAiMenuOpen(false);
                                            handleAIAction('fix');
                                        }}
                                        disabled={!content.trim()}
                                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted text-foreground font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
                                    >
                                        ✍️ Imloni Tuzatish
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
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
            <div className="px-6 py-4 glass-card border-b border-border z-0">
                <div className="max-w-4xl mx-auto flex gap-4">
                    <input
                        type="text"
                        placeholder="Qayd Sarlavhasi..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 text-xl font-bold bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                    />
                    <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-background border border-border outline-none text-sm text-foreground focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    >
                        <option value="">Fanni Tanlang</option>
                        {subjects.filter(s => !s.isArchived).map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto bg-transparent relative z-0">
                <div className={`max-w-4xl mx-auto px-6 py-8 h-full ${font === 'sans' ? 'font-sans' : font === 'serif' ? 'font-serif' : 'font-mono'
                    }`}>
                    {mode === 'write' ? (
                        /* EDIT MODE */
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full h-full resize-none outline-none text-foreground text-base leading-relaxed bg-transparent placeholder:text-muted-foreground"
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
            <div className="px-6 py-2 glass-card border-t border-border z-10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-xs text-muted-foreground">
                        💡 Markdown formatidan foydalaning: **bold**, *italic*, # Sarlavha, - Ro'yxat
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NoteEditorPage;
