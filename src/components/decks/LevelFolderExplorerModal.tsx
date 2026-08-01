import React, { useState, useMemo } from 'react';
import { PresetDeck } from '../../data/presetDecks';
import { DeckPart } from '../../services/PresetDeckService';
import { Button } from '../ui/Button';
import { X, Folder, FolderCheck, FolderPlus, Search, Check, BookOpen } from 'lucide-react';

interface LevelFolderExplorerModalProps {
    isOpen: boolean;
    deck: PresetDeck | null;
    parts: DeckPart[];
    userSubjectNames?: string[];
    isAdmin?: boolean;
    onClose: () => void;
    onImportPart: (part: DeckPart) => void;
    onAdminAddNextPart?: (deck: PresetDeck, nextPartNumber: number) => void;
}

export const LevelFolderExplorerModal: React.FC<LevelFolderExplorerModalProps> = ({
    isOpen,
    deck,
    parts,
    userSubjectNames = [],
    isAdmin = false,
    onClose,
    onImportPart,
    onAdminAddNextPart
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterTab, setFilterTab] = useState<'all' | 'saved' | 'admin'>('all');

    const filteredParts = useMemo(() => {
        return parts.filter(part => {
            const q = searchQuery.toLowerCase();
            const matchesSearch = !q || part.title.toLowerCase().includes(q);
            const isSaved = userSubjectNames.some(name => name.toLowerCase().trim() === part.title.toLowerCase().trim());

            if (filterTab === 'saved') return matchesSearch && isSaved;
            if (filterTab === 'admin') return matchesSearch && part.isCustomAdminPart;
            return matchesSearch;
        });
    }, [parts, searchQuery, filterTab, userSubjectNames]);

    const nextPartNumber = parts.length > 0 ? (Math.max(...parts.map(p => p.partNumber)) + 1) : 1;

    if (!isOpen || !deck) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-5xl h-[88vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
                
                {/* Modal Header */}
                <div className="p-6 bg-gradient-to-r from-indigo-900 via-purple-950 to-slate-900 text-white flex items-center justify-between border-b border-white/10">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 bg-indigo-500/20 border border-indigo-500/40 rounded-xl text-xs font-black text-indigo-300 flex items-center gap-1">
                                <Folder size={14} /> Jildlar Kolleksiyasi
                            </span>
                            <span className="text-xs font-bold text-slate-300">{deck.level}</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-black flex items-center gap-2">
                            <span>{deck.icon}</span> {deck.title} — Qismlar va Boblar
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        {isAdmin && (
                            <Button
                                onClick={() => onAdminAddNextPart && onAdminAddNextPart(deck, nextPartNumber)}
                                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow-md flex items-center gap-1.5"
                            >
                                <FolderPlus size={14} /> ➕ {nextPartNumber}-Qism Yaratish
                            </Button>
                        )}
                        <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full transition-all">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="p-4 bg-muted/40 border-b border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-2.5 text-muted-foreground" size={16} />
                        <input
                            type="text"
                            placeholder="Jild yoki qism nomini qidirish..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs bg-card border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary font-bold"
                        />
                    </div>

                    <div className="flex items-center bg-card p-1 rounded-xl border border-border shrink-0">
                        <button
                            onClick={() => setFilterTab('all')}
                            className={`px-3 py-1 text-xs font-extrabold rounded-lg transition-all ${filterTab === 'all' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground'}`}
                        >
                            Barchasi ({parts.length})
                        </button>
                        <button
                            onClick={() => setFilterTab('saved')}
                            className={`px-3 py-1 text-xs font-extrabold rounded-lg transition-all ${filterTab === 'saved' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground'}`}
                        >
                            Saqlanganlar
                        </button>
                        <button
                            onClick={() => setFilterTab('admin')}
                            className={`px-3 py-1 text-xs font-extrabold rounded-lg transition-all ${filterTab === 'admin' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground'}`}
                        >
                            Admin Jildlari
                        </button>
                    </div>
                </div>

                {/* Folder Grid Body */}
                <div className="flex-1 overflow-y-auto p-6 bg-background">
                    {filteredParts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-center space-y-3">
                            <Folder size={48} className="text-muted-foreground/40" />
                            <h3 className="text-base font-black text-foreground">Jildlar topilmadi</h3>
                            <p className="text-xs text-muted-foreground">Qidiruv yoki filtr bo'yicha hech qanday qism mos kelmadi.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredParts.map(part => {
                                const isSaved = userSubjectNames.some(name => {
                                    const cleanUserSub = name.toLowerCase().trim();
                                    const cleanPartTitle = part.title.toLowerCase().trim();
                                    return cleanUserSub === cleanPartTitle || cleanUserSub.includes(cleanPartTitle) || cleanPartTitle.includes(cleanUserSub);
                                });
                                return (
                                    <div
                                        key={part.id}
                                        className={`bg-card border rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden ${
                                            part.isCustomAdminPart 
                                                ? 'border-amber-500/40 bg-gradient-to-br from-amber-500/5 to-card' 
                                                : isSaved ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-border'
                                        }`}
                                    >
                                        {/* Top folder tab indicator */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className={`p-2.5 rounded-xl border ${
                                                    part.isCustomAdminPart 
                                                        ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' 
                                                        : 'bg-primary/10 text-primary border-primary/20'
                                                }`}>
                                                    {isSaved ? <FolderCheck size={20} /> : <Folder size={20} />}
                                                </div>
                                                <span className="text-xs font-black text-muted-foreground">#{part.partNumber}-Qism</span>
                                            </div>

                                            {part.isCustomAdminPart && (
                                                <span className="px-2 py-0.5 text-[9px] font-black uppercase text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-md">
                                                    Admin Jildi
                                                </span>
                                            )}
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            <h4 className="text-sm font-black text-foreground group-hover:text-primary transition-colors leading-snug">
                                                {part.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-bold">
                                                <BookOpen size={13} className="text-primary" />
                                                <span>{part.cardCount} ta kartochka</span>
                                            </div>
                                        </div>

                                        <div className="pt-3 border-t border-border/60">
                                            {isSaved ? (
                                                <div className="w-full py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-extrabold rounded-xl flex items-center justify-center gap-1">
                                                    <Check size={14} /> Saqlangan
                                                </div>
                                            ) : (
                                                <Button
                                                    onClick={() => onImportPart(part)}
                                                    className="w-full py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-extrabold rounded-xl shadow-sm"
                                                >
                                                    + Qo'shish
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-between text-xs">
                    <span className="font-bold text-muted-foreground">
                        Jami Jildlar Soni: <span className="text-foreground font-black">{parts.length} ta</span>
                    </span>
                    <Button variant="outline" onClick={onClose} className="px-5 py-2 font-bold rounded-xl">
                        Yopish
                    </Button>
                </div>
            </div>
        </div>
    );
};
