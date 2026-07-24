import React, { useState } from 'react';
import { Edit, FileText, Plus, Search, Trash2, Pin, PinOff, BookOpen, NotebookText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';

export const NotesPage: React.FC = () => {
    const { notes, studyNotes, subjects, deleteNote, updateNote } = useStudyData();
    const [activeTab, setActiveTab] = useState<'stickers' | 'study-notes'>('stickers');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    // Filter Sticky Notes
    const filteredStickers = notes
        .filter(note =>
            note.title.toLowerCase().includes(search.toLowerCase()) ||
            note.content.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (a.isPinned && !b.isPinned) return -1;
            if (!a.isPinned && b.isPinned) return 1;
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });

    // Filter & Group Study Notes by Subject
    const filteredStudyNotes = studyNotes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    );

    const groupedStudyNotes = filteredStudyNotes.reduce((acc, note) => {
        const subjectName = subjects.find(s => s.id === note.subjectId)?.name || 'Noma\'lum fan';
        if (!acc[subjectName]) acc[subjectName] = [];
        acc[subjectName].push(note);
        return acc;
    }, {} as Record<string, typeof studyNotes>);

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 pb-16">
            {/* Header & Main Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-foreground">Qaydlar & Konspektlar 📝</h2>
                    <p className="text-muted-foreground mt-1 text-sm">
                        Tezkor stikerlar, g'oyalar va fanlarga oid strukturaviy konspektlar
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {activeTab === 'stickers' && (
                        <Link to="/notes/new">
                            <Button className="flex items-center gap-2 font-bold shadow-md">
                                <Plus size={18} /> Yangi Stiker
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-muted/60 border border-border rounded-2xl w-full max-w-md">
                <button
                    onClick={() => setActiveTab('stickers')}
                    className={`flex-1 py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                        activeTab === 'stickers'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <FileText size={16} className="text-amber-500" />
                    <span>📌 Stikerlar ({notes.length})</span>
                </button>
                <button
                    onClick={() => setActiveTab('study-notes')}
                    className={`flex-1 py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                        activeTab === 'study-notes'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <NotebookText size={16} className="text-indigo-500" />
                    <span>📚 Fan Konspektlari ({studyNotes.length})</span>
                </button>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md">
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                    type="text"
                    placeholder={activeTab === 'stickers' ? "Stikerlardan qidirish..." : "Konspektlardan qidirish..."}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border border-border bg-background/60 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                />
            </div>

            {/* Tab 1: Sticky Notes Grid */}
            {activeTab === 'stickers' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in">
                    {filteredStickers.length > 0 ? (
                        filteredStickers.map(note => {
                            const subject = subjects.find(s => s.id === note.subjectId);
                            return (
                                <div key={note.id} className={`glass-card p-6 rounded-3xl transition-all hover:-translate-y-1 hover:shadow-xl group relative border border-border ${note.isPinned ? 'ring-2 ring-primary/30 bg-primary/5' : ''}`}>
                                    <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); updateNote(note.id, { isPinned: !note.isPinned }); }}
                                            className={`p-1.5 rounded-lg transition-colors ${note.isPinned ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-primary/10'}`}
                                        >
                                            {note.isPinned ? <PinOff size={16} /> : <Pin size={16} />}
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigate(`/notes/${note.id}`); }}
                                            className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); if (confirm('Qaydni o\'chirasizmi?')) deleteNote(note.id); }}
                                            className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>

                                    {subject && (
                                        <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-black mb-3" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                                            {subject.name}
                                        </span>
                                    )}
                                    <h3 className="text-lg font-black text-foreground mb-2 line-clamp-1">{note.title}</h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-4">
                                        {note.content.substring(0, 150)}...
                                    </p>
                                    <p className="text-[11px] font-bold text-muted-foreground">
                                        {new Date(note.updatedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-16 text-muted-foreground">
                            <FileText size={48} className="mx-auto mb-3 opacity-20" />
                            <p className="font-bold text-sm">Hozircha stikerlar yo'q. Yangi stiker yaratish tugmasini bosing!</p>
                        </div>
                    )}
                </div>
            )}

            {/* Tab 2: Study Notes Grouped by Subject */}
            {activeTab === 'study-notes' && (
                <div className="animate-in fade-in">
                    {Object.keys(groupedStudyNotes).length > 0 ? (
                        <div className="space-y-8">
                            {Object.entries(groupedStudyNotes).map(([subjectName, notes]) => (
                                <div key={subjectName}>
                                    <h3 className="text-lg font-black text-foreground mb-4 flex items-center gap-2">
                                        <BookOpen size={20} className="text-primary" />
                                        {subjectName} ({notes.length})
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {notes.map(note => (
                                            <div
                                                key={note.id}
                                                onClick={() => navigate(`/subjects/${note.subjectId}`)}
                                                className="glass-card p-6 rounded-3xl transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer group border border-border"
                                            >
                                                <h4 className="font-black text-foreground mb-2 group-hover:text-primary transition-colors">{note.title}</h4>
                                                <p className="text-xs text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                                                    {note.content}
                                                </p>
                                                <div className="flex justify-between items-center text-[11px] font-bold text-muted-foreground">
                                                    <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                                                    <span className="flex items-center gap-1 text-primary"><FileText size={12} /> Konspekt</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-foreground">
                            <BookOpen size={56} className="mx-auto mb-3 opacity-20" />
                            <p className="font-bold text-base">Hozircha konspektlar yo'q.</p>
                            <p className="text-xs mt-1 text-muted-foreground">Fanning ichiga kirib, "Konspektlar" bo'limidan qo'shishingiz mumkin.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotesPage;
