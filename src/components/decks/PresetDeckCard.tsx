import React, { useState, useEffect } from 'react';
import { PresetDeck } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { ShieldAlert, Lock, Sparkles, Plus, Check, Trash2, BookOpen, ChevronDown, ChevronUp, Layers, FolderPlus } from 'lucide-react';
import { useSubscription } from '../../hooks/useSubscription';
import { PresetDeckService, DeckPart } from '../../services/PresetDeckService';

interface PresetDeckCardProps {
    deck: PresetDeck;
    isAdded?: boolean;
    isAdmin?: boolean;
    userSubjectNames?: string[];
    onImport: (deck: PresetDeck) => void;
    onImportPart?: (part: DeckPart) => void;
    onRemove?: (deck: PresetDeck) => void;
    onAdminAudit?: (deck: PresetDeck) => void;
    onAdminAddNextPart?: (deck: PresetDeck, nextPartNumber: number) => void;
    onUpgradeClick: () => void;
}

export const PresetDeckCard: React.FC<PresetDeckCardProps> = ({ 
    deck, 
    isAdded = false, 
    isAdmin = false,
    userSubjectNames = [],
    onImport,
    onImportPart, 
    onRemove, 
    onAdminAudit,
    onAdminAddNextPart,
    onUpgradeClick 
}) => {
    const { isPro, subscription } = useSubscription();
    const isLocked = deck.isPremiumOnly && !isPro && subscription?.tier !== 'premium';

    const [isPartsOpen, setIsPartsOpen] = useState(false);
    const [parts, setParts] = useState<DeckPart[]>([]);
    const [loadingParts, setLoadingParts] = useState(false);

    useEffect(() => {
        if (isPartsOpen && parts.length === 0) {
            setLoadingParts(true);
            PresetDeckService.getDeckParts(deck, 100).then(loadedParts => {
                setParts(loadedParts);
                setLoadingParts(false);
            }).catch(() => setLoadingParts(false));
        }
    }, [isPartsOpen, deck, parts.length]);

    const nextPartNumber = parts.length > 0 ? (Math.max(...parts.map(p => p.partNumber)) + 1) : 1;

    return (
        <div className={`bg-card border rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group ${
            isAdded ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-border'
        }`}>
            {deck.isPremiumOnly && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[11px] font-extrabold rounded-full flex items-center gap-1">
                    {isLocked ? <Lock size={12} /> : <Sparkles size={12} />} PRO
                </div>
            )}

            {isAdded && !deck.isPremiumOnly && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-extrabold rounded-full flex items-center gap-1">
                    <Check size={12} /> Saqlangan
                </div>
            )}

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl p-2.5 bg-muted/60 rounded-2xl">{deck.icon}</span>
                    <div>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${deck.badgeColor}`}>
                            {deck.level}
                        </span>
                        <h3 className="text-lg font-extrabold text-foreground mt-1 leading-snug">{deck.title}</h3>
                    </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {deck.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <BookOpen size={14} className="text-primary" />
                        <span>{deck.cardCount} ta kartochka</span>
                    </div>

                    <button
                        onClick={() => setIsPartsOpen(!isPartsOpen)}
                        className="text-xs font-extrabold text-primary hover:underline flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20"
                    >
                        <Layers size={13} /> Qismlarga bo'lish {isPartsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                </div>

                {/* Expandable Parts Drawer */}
                {isPartsOpen && (
                    <div className="p-3 bg-muted/40 border border-border rounded-2xl space-y-2 animate-in fade-in max-h-60 overflow-y-auto">
                        <div className="text-[11px] font-extrabold text-muted-foreground flex items-center justify-between border-b border-border pb-1.5">
                            <span>📂 Qismlar va Boblar (100 tadan)</span>
                            {isAdmin && (
                                <button
                                    onClick={() => onAdminAddNextPart && onAdminAddNextPart(deck, nextPartNumber)}
                                    className="text-[10px] font-black text-rose-500 hover:underline flex items-center gap-1"
                                >
                                    <FolderPlus size={12} /> ➕ {nextPartNumber}-Qism Qo'shish
                                </button>
                            )}
                        </div>

                        {loadingParts ? (
                            <p className="text-[11px] text-muted-foreground text-center py-2 animate-pulse">Qismlar yuklanmoqda...</p>
                        ) : parts.length === 0 ? (
                            <p className="text-[11px] text-muted-foreground text-center py-2">Qismlar mavjud emas</p>
                        ) : (
                            parts.map(part => {
                                const isPartAdded = userSubjectNames.some(name => name.toLowerCase().trim() === part.title.toLowerCase().trim());
                                return (
                                    <div key={part.id} className="flex items-center justify-between p-2 bg-card rounded-xl border border-border/80 text-xs">
                                        <div className="space-y-0.5">
                                            <span className="font-extrabold text-foreground block leading-tight">{part.title}</span>
                                            {part.isCustomAdminPart && (
                                                <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">Admin Qo'shgan</span>
                                            )}
                                        </div>
                                        {isPartAdded ? (
                                            <span className="px-2.5 py-1 text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-1">
                                                <Check size={12} /> Saqlangan
                                            </span>
                                        ) : (
                                            <Button
                                                size="sm"
                                                onClick={() => onImportPart ? onImportPart(part) : onImport(deck)}
                                                className="py-1 px-2.5 text-[10px] font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-none"
                                            >
                                                + Qo'shish
                                            </Button>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                )}
            </div>

            <div className="pt-6 border-t border-border/50 mt-4 space-y-2">
                {isAdmin && (
                    <Button
                        variant="outline"
                        onClick={() => onAdminAudit && onAdminAudit(deck)}
                        className="w-full py-2 bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-amber-500/10 hover:bg-rose-500/20 text-rose-500 dark:text-rose-400 border border-rose-500/30 text-xs font-black rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                    >
                        <ShieldAlert size={14} /> 🛠️ Admin Tekshirish va Saralash
                    </Button>
                )}

                {isLocked ? (
                    <Button
                        variant="secondary"
                        onClick={onUpgradeClick}
                        className="w-full py-2.5 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/30 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                    >
                        <Lock size={14} /> PRO Obuna bilan Ochish
                    </Button>
                ) : isAdded ? (
                    <Button
                        variant="outline"
                        onClick={() => onRemove && onRemove(deck)}
                        className="w-full py-2.5 border-rose-500/30 text-rose-600 hover:bg-rose-500/10 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                    >
                        <Trash2 size={14} /> - Mening to'plamimdan o'chirish
                    </Button>
                ) : (
                    <Button
                        onClick={() => onImport(deck)}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow"
                    >
                        <Plus size={14} /> + Mening to'plamimga qo'shish
                    </Button>
                )}
            </div>
        </div>
    );
};

