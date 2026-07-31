import React, { useState, useEffect } from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Flashcard } from '../../types';
import { Button } from '../ui/Button';
import { X, Sparkles, CheckCircle2, RefreshCw, Wand2, AlertTriangle } from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import { sanitizeCardContent } from '../../services/FlashcardService';
import { supabase } from '../../lib/supabase';

interface AdminAiCardCleanerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AdminAiCardCleanerModal: React.FC<AdminAiCardCleanerModalProps> = ({ isOpen, onClose }) => {
    const { flashcards, updateFlashcard } = useStudyData();
    const [badCards, setBadCards] = useState<Array<{ card: Flashcard; cleanedFront: string; cleanedBack: string; isModified: boolean }>>([]);
    const [isScanning, setIsScanning] = useState(false);
    const [isCleaning, setIsCleaning] = useState(false);

    useEffect(() => {
        if (isOpen) {
            handleScanCards();
        }
    }, [isOpen]);

    const handleScanCards = () => {
        setIsScanning(true);
        const results: Array<{ card: Flashcard; cleanedFront: string; cleanedBack: string; isModified: boolean }> = [];

        flashcards.forEach(card => {
            const { card: cleanedCard, wasModified } = sanitizeCardContent(card);
            if (wasModified) {
                results.push({
                    card,
                    cleanedFront: cleanedCard.front,
                    cleanedBack: cleanedCard.back,
                    isModified: wasModified
                });
            }
        });

        setBadCards(results);
        setIsScanning(false);
    };

    const handleCleanAllCards = async () => {
        if (badCards.length === 0) return;
        setIsCleaning(true);

        try {
            let cleanedCount = 0;
            for (const item of badCards) {
                const { card, cleanedFront, cleanedBack } = item;
                // Update Supabase DB
                await supabase
                    .from('flashcards')
                    .update({ front: cleanedFront, back: cleanedBack })
                    .eq('id', card.id);

                // Update context
                await updateFlashcard(card.id, { front: cleanedFront, back: cleanedBack });
                cleanedCount++;
            }

            toast({
                title: "⚡ AI Card Cleaner Yakunlandi!",
                description: `${cleanedCount} ta buzuq OCR kartochkasi avtomatik tozalandi va saqlandi.`
            });

            setBadCards([]);
            onClose();
        } catch (err) {
            console.error("Card cleaning error:", err);
            toast({ variant: 'destructive', title: "❌ Xatolik", description: "Kartalarni tozalashda xatolik yuz berdi." });
        } finally {
            setIsCleaning(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
                
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 text-white flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-md">
                            <Wand2 size={14} /> AI OCR Card Cleaner
                        </div>
                        <h2 className="text-xl font-black">Buzuq va Takroriy Kartochkalarni Avto-Tozalagich</h2>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full transition-all">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6 flex-1 overflow-y-auto bg-background">
                    {isScanning ? (
                        <div className="flex flex-col items-center justify-center h-64 space-y-4">
                            <RefreshCw className="animate-spin text-amber-500" size={40} />
                            <p className="text-sm font-bold text-muted-foreground">Baza skanerlanmoqda...</p>
                        </div>
                    ) : badCards.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 space-y-3 text-center">
                            <CheckCircle2 className="text-emerald-500" size={56} />
                            <h3 className="text-lg font-black text-foreground">Baza 100% Toza!</h3>
                            <p className="text-xs text-muted-foreground">Barcha kartochkalar OCR va simvollardan tozalangan.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center justify-between text-amber-600 dark:text-amber-400">
                                <div className="flex items-center gap-3">
                                    <AlertTriangle size={24} className="shrink-0" />
                                    <div>
                                        <p className="font-extrabold text-xs">Topilgan Buzuq Kartochkalar: {badCards.length} ta</p>
                                        <p className="text-[11px] opacity-90">OCR shovqini (`(a`, `6 た くさん`, JSON kodlar) aniqlandi.</p>
                                    </div>
                                </div>
                                <Button
                                    disabled={isCleaning}
                                    onClick={handleCleanAllCards}
                                    className="px-5 py-2 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-black text-xs rounded-xl shadow-md flex items-center gap-1.5 shrink-0"
                                >
                                    <Sparkles size={14} /> ⚡ Hammasini Avto-Tozalash ({badCards.length})
                                </Button>
                            </div>

                            {/* Detected list */}
                            <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border bg-card">
                                {badCards.map(({ card, cleanedFront, cleanedBack }, idx) => (
                                    <div key={card.id || idx} className="p-4 space-y-2 text-xs hover:bg-muted/40 transition-colors">
                                        <div className="flex items-center justify-between font-extrabold text-muted-foreground">
                                            <span>Karta #{idx + 1}</span>
                                            <span className="text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded text-[10px]">Tuzatilishi kerak</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-2.5 bg-rose-500/5 border border-rose-500/20 rounded-xl space-y-1">
                                                <span className="text-[10px] font-black text-rose-500 block">ESKI (Buzuq):</span>
                                                <p className="font-bold text-foreground line-through opacity-80">{card.front}</p>
                                                <p className="text-[11px] text-muted-foreground line-through opacity-80">{card.back}</p>
                                            </div>
                                            <div className="p-2.5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl space-y-1">
                                                <span className="text-[10px] font-black text-emerald-500 block">YANGI (Tozalangan):</span>
                                                <p className="font-bold text-emerald-600 dark:text-emerald-400">{cleanedFront}</p>
                                                <p className="text-[11px] text-muted-foreground">{cleanedBack}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-between text-xs">
                    <span className="font-bold text-muted-foreground">Jami kartochkalar: <span className="text-foreground font-black">{flashcards.length} ta</span></span>
                    <Button variant="outline" onClick={onClose} className="px-5 py-2 font-bold rounded-xl">Yopish</Button>
                </div>
            </div>
        </div>
    );
};
