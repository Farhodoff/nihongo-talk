import React, { useState, useEffect } from 'react';
import { PresetDeck } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { ShieldAlert, Plus, Check, Trash2, BookOpen, ChevronDown, ChevronUp, Folder, FolderCheck, FolderPlus, ExternalLink } from 'lucide-react';
import { PresetDeckService, DeckPart } from '../../services/PresetDeckService';
import { useLanguage } from '../../context/LanguageContext';

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
    onOpenFolderExplorer?: (deck: PresetDeck, parts: DeckPart[]) => void;
    onUpgradeClick?: () => void;
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
    onOpenFolderExplorer
}) => {
    const { language } = useLanguage();
    const isJa = language === 'ja';
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
            {isAdded && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-extrabold rounded-full flex items-center gap-1">
                    <Check size={12} /> {isJa ? '保存済み' : 'Saqlangan'}
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
                        <span>{deck.cardCount} {isJa ? '枚のカード' : 'ta kartochka'}</span>
                    </div>

                    <button
                        onClick={() => setIsPartsOpen(!isPartsOpen)}
                        className="text-xs font-extrabold text-primary hover:underline flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-xl border border-primary/20 transition-all shadow-sm"
                    >
                        <Folder size={14} /> {isJa ? 'フォルダ' : 'Jildlar'} ({parts.length > 0 ? parts.length : '...'}) {isPartsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                </div>

                {/* Expandable Parts Folder Drawer */}
                {isPartsOpen && (
                    <div className="p-3.5 bg-muted/40 border border-border rounded-2xl space-y-3 animate-in fade-in max-h-72 overflow-y-auto">
                        <div className="text-[11px] font-extrabold text-muted-foreground flex items-center justify-between border-b border-border/80 pb-2">
                            <span className="flex items-center gap-1">📂 {isJa ? 'レベル別単語集（各100語）' : 'Jildlar Kolleksiyasi (100 tadan)'}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onOpenFolderExplorer && onOpenFolderExplorer(deck, parts)}
                                    className="text-[10px] font-extrabold text-indigo-500 hover:underline flex items-center gap-1"
                                >
                                    <ExternalLink size={12} /> {isJa ? 'すべて見る' : 'Barchasini Ochish'}
                                </button>
                                {isAdmin && (
                                    <button
                                        onClick={() => onAdminAddNextPart && onAdminAddNextPart(deck, nextPartNumber)}
                                        className="text-[10px] font-black text-rose-500 hover:underline flex items-center gap-1"
                                    >
                                        <FolderPlus size={12} /> ➕ {nextPartNumber}-Qism
                                    </button>
                                )}
                            </div>
                        </div>

                        {loadingParts ? (
                            <p className="text-[11px] text-muted-foreground text-center py-3 animate-pulse">{isJa ? '読み込み中...' : 'Jildlar yuklanmoqda...'}</p>
                        ) : parts.length === 0 ? (
                            <p className="text-[11px] text-muted-foreground text-center py-3">{isJa ? 'フォルダがありません' : 'Jildlar mavjud emas'}</p>
                        ) : (
                            <div className="grid grid-cols-1 gap-2">
                                {parts.map(part => {
                                    const isPartAdded = userSubjectNames.some(name => {
                                        const cleanUserSub = name.toLowerCase().trim();
                                        const cleanPartTitle = part.title.toLowerCase().trim();
                                        return cleanUserSub === cleanPartTitle || cleanUserSub.includes(cleanPartTitle) || cleanPartTitle.includes(cleanUserSub);
                                    });
                                    return (
                                        <div
                                            key={part.id}
                                            className={`p-2.5 bg-card rounded-xl border flex items-center justify-between transition-all hover:shadow-md ${
                                                part.isCustomAdminPart 
                                                    ? 'border-amber-500/30 bg-amber-500/5' 
                                                    : isPartAdded ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-border/80'
                                            }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <div className={`p-1.5 rounded-lg border ${
                                                    part.isCustomAdminPart 
                                                        ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' 
                                                        : 'bg-primary/10 text-primary border-primary/20'
                                                }`}>
                                                    {isPartAdded ? <FolderCheck size={16} /> : <Folder size={16} />}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <span className="font-black text-foreground block text-xs leading-tight">{part.title}</span>
                                                    {part.isCustomAdminPart && (
                                                        <span className="text-[9px] font-extrabold text-amber-500 bg-amber-500/10 px-1 rounded">Admin Jildi</span>
                                                    )}
                                                </div>
                                            </div>

                                            {isPartAdded ? (
                                                <span className="px-2 py-1 text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-1 shrink-0">
                                                    <Check size={12} /> {isJa ? '保存済み' : 'Saqlangan'}
                                                </span>
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    onClick={() => onImportPart ? onImportPart(part) : onImport(deck)}
                                                    className="py-1 px-2.5 text-[10px] font-extrabold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-none shrink-0"
                                                >
                                                    {isJa ? '+ 追加' : "+ Qo'shish"}
                                                </Button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
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

                {isAdded ? (
                    <Button
                        variant="outline"
                        onClick={() => onRemove && onRemove(deck)}
                        className="w-full py-2.5 border-rose-500/30 text-rose-500 hover:bg-rose-500/10 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                    >
                        <Trash2 size={14} /> {isJa ? '- マイ単語帳から削除' : "- Mening to'plamimdan o'chirish"}
                    </Button>
                ) : (
                    <Button
                        onClick={() => onImport(deck)}
                        className="w-full py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow"
                    >
                        <Plus size={14} /> {isJa ? '+ マイ単語帳に追加' : "+ Mening to'plamimga qo'shish"}
                    </Button>
                )}
            </div>
        </div>
    );
};

