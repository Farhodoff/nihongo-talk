import React, { useState } from 'react';
import { PresetSubDeck } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { Folder, FolderCheck, FolderPlus, ChevronDown, ChevronUp, Layers, Trash2, Plus, Check } from 'lucide-react';

export interface StandaloneDeckGroup {
    baseTitle: string;
    level: string;
    description: string;
    totalCards: number;
    parts: PresetSubDeck[];
}

interface StandaloneDeckCardProps {
    group: StandaloneDeckGroup;
    isAdmin?: boolean;
    userSubjectNames?: string[];
    isImporting?: boolean;
    onImportPart: (part: PresetSubDeck) => void;
    onImportAllParts: (group: StandaloneDeckGroup) => void;
    onAddNextPart: (group: StandaloneDeckGroup, nextPartNumber: number) => void;
    onDeletePart: (part: PresetSubDeck) => void;
    onDeleteGroup: (group: StandaloneDeckGroup) => void;
}

export const StandaloneDeckCard: React.FC<StandaloneDeckCardProps> = ({
    group,
    isAdmin = false,
    userSubjectNames = [],
    isImporting = false,
    onImportPart,
    onImportAllParts,
    onAddNextPart,
    onDeletePart,
    onDeleteGroup
}) => {
    const [isPartsOpen, setIsPartsOpen] = useState(false);

    const nextPartNumber = group.parts.length > 0 
        ? Math.max(...group.parts.map(p => p.partNumber || 1)) + 1 
        : 1;

    const isPartAdded = (part: PresetSubDeck) => {
        const cleanPartTitle = part.title.toLowerCase().trim();
        return userSubjectNames.some(name => {
            const cleanUserSub = name.toLowerCase().trim();
            return cleanUserSub === cleanPartTitle || cleanUserSub.includes(cleanPartTitle) || cleanPartTitle.includes(cleanUserSub);
        });
    };

    const isGroupFullyAdded = group.parts.length > 0 && group.parts.every(p => isPartAdded(p));

    return (
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 hover:border-emerald-500 flex flex-col justify-between transition-all group hover:shadow-xl bg-card relative overflow-hidden">
            <div className="space-y-4">
                {/* Header Badge & Delete */}
                <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-black shrink-0 border border-emerald-500/20">
                        ⭐
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                            {group.level || 'MUSTAQIL'}
                        </span>
                        {isAdmin && (
                            <button
                                onClick={() => onDeleteGroup(group)}
                                className="p-1.5 text-muted-foreground hover:text-rose-500 transition-colors"
                                title="Butun albomni o'chirish"
                            >
                                <Trash2 size={14} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Title & Description */}
                <div>
                    <h4 className="text-base font-black text-foreground group-hover:text-emerald-500 transition-colors">
                        {group.baseTitle}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {group.description || "Maxsus mustaqil kartochkalar to'plami."}
                    </p>
                </div>

                {/* Card Count & Folders Toggle */}
                <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <Layers size={14} className="text-emerald-500" />
                        <span>{group.totalCards} ta kartochka</span>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsPartsOpen(!isPartsOpen)}
                        className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-500/20 transition-all shadow-sm"
                    >
                        <Folder size={14} /> Jildlar ({group.parts.length}) {isPartsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                </div>

                {/* Nested Jildlar / Parts Drawer */}
                {isPartsOpen && (
                    <div className="p-3.5 bg-muted/40 border border-border rounded-2xl space-y-3 animate-in fade-in max-h-72 overflow-y-auto">
                        <div className="text-[11px] font-extrabold text-muted-foreground flex items-center justify-between border-b border-border/80 pb-2">
                            <span className="flex items-center gap-1">📂 Albom Jildlari ({group.parts.length} ta qism)</span>
                            {isAdmin && (
                                <button
                                    onClick={() => onAddNextPart(group, nextPartNumber)}
                                    className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                                >
                                    <FolderPlus size={12} /> ➕ {nextPartNumber}-Qism
                                </button>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            {group.parts.map(part => {
                                const added = isPartAdded(part);
                                return (
                                    <div
                                        key={part.id}
                                        className={`p-2.5 bg-card rounded-xl border flex items-center justify-between transition-all hover:shadow-md ${
                                            added ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-border/80'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-1.5 rounded-lg border bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                                                {added ? <FolderCheck size={16} /> : <Folder size={16} />}
                                            </div>
                                            <div className="space-y-0.5">
                                                <span className="font-black text-foreground block text-xs leading-tight">
                                                    {part.title}
                                                </span>
                                                <span className="text-[10px] font-bold text-muted-foreground">
                                                    {part.cardCount || part.cards?.length || 0} ta card
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            {added ? (
                                                <span className="px-2 py-1 text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-1">
                                                    <Check size={11} /> Qo'shilgan
                                                </span>
                                            ) : (
                                                <Button
                                                    onClick={() => onImportPart(part)}
                                                    disabled={isImporting}
                                                    className="px-2.5 py-1 text-[10px] font-black rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 shadow-sm"
                                                >
                                                    <Plus size={11} /> Qo'shish
                                                </Button>
                                            )}
                                            {isAdmin && (
                                                <button
                                                    onClick={() => onDeletePart(part)}
                                                    className="p-1 text-muted-foreground hover:text-rose-500"
                                                    title="Qismni o'chirish"
                                                >
                                                    <Trash2 size={12} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Main Action */}
            <div className="pt-5 mt-4 border-t border-border/60 flex items-center gap-2">
                {isGroupFullyAdded ? (
                    <div className="flex-1 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-black text-center flex items-center justify-center gap-1.5 border border-emerald-500/20">
                        <FolderCheck size={15} /> Barcha Qismlar Qo'shilgan
                    </div>
                ) : (
                    <Button
                        onClick={() => onImportAllParts(group)}
                        disabled={isImporting}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black py-2.5 flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                        <Plus size={15} /> To'plamlarimga Qo'shish ({group.totalCards} ta card)
                    </Button>
                )}
                {isAdmin && (
                    <button
                        onClick={() => onAddNextPart(group, nextPartNumber)}
                        className="px-3 py-2.5 bg-muted hover:bg-muted/80 text-foreground font-black text-xs rounded-xl flex items-center gap-1 border border-border shrink-0 transition-all hover:border-emerald-500/40"
                        title={`Yangi ${nextPartNumber}-Qismni yuklash`}
                    >
                        <FolderPlus size={14} className="text-emerald-500" /> + Qism
                    </button>
                )}
            </div>
        </div>
    );
};
