import React from 'react';
import { PresetDeck } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { ShieldAlert, Lock, Sparkles, Plus, Check, Trash2, BookOpen } from 'lucide-react';
import { useSubscription } from '../../hooks/useSubscription';

interface PresetDeckCardProps {
    deck: PresetDeck;
    isAdded?: boolean;
    isAdmin?: boolean;
    onImport: (deck: PresetDeck) => void;
    onRemove?: (deck: PresetDeck) => void;
    onAdminAudit?: (deck: PresetDeck) => void;
    onUpgradeClick: () => void;
}

export const PresetDeckCard: React.FC<PresetDeckCardProps> = ({ 
    deck, 
    isAdded = false, 
    isAdmin = false,
    onImport, 
    onRemove, 
    onAdminAudit,
    onUpgradeClick 
}) => {
    const { isPro, subscription } = useSubscription();
    const isLocked = deck.isPremiumOnly && !isPro && subscription?.tier !== 'premium';

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

                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <BookOpen size={14} className="text-primary" />
                    <span>{deck.cardCount} ta kartochka</span>
                </div>
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

