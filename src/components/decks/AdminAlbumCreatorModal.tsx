import React, { useState } from 'react';
import { PRESET_DECKS, PresetCard, PresetSubDeck } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { X, Upload, Scissors, CheckCircle2, Sparkles, FolderPlus, FileJson, AlertCircle } from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import { supabase } from '../../lib/supabase';
import { generateUUID } from '../../utils/uuid';

interface AdminAlbumCreatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAlbumCreated?: (album: PresetSubDeck) => void;
}

export const AdminAlbumCreatorModal: React.FC<AdminAlbumCreatorModalProps> = ({
    isOpen,
    onClose,
    onAlbumCreated
}) => {
    const [mode, setMode] = useState<'json_upload' | 'auto_split'>('json_upload');
    const [selectedLevel, setSelectedLevel] = useState<string>('JLPT N3');
    const [partName, setPartName] = useState<string>('1-Qism');
    const [chunkSize, setChunkSize] = useState<number>(50);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // JSON upload states
    const [uploadedCards, setUploadedCards] = useState<PresetCard[]>([]);
    const [jsonFileName, setJsonFileName] = useState<string | null>(null);

    // Auto-split states
    const [selectedDeckId, setSelectedDeckId] = useState<string>('deck_jlpt_n4');

    if (!isOpen) return null;

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setJsonFileName(file.name);
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target?.result as string);
                if (Array.isArray(parsed)) {
                    const validCards: PresetCard[] = parsed.map((item: any) => ({
                        front: String(item.front || item.word || item.kanji || item.title || '').trim(),
                        back: String(item.back || item.meaning || item.definition || item.meaningUz || '').trim(),
                        phonetic: item.phonetic || item.reading || item.romaji || undefined,
                        example: item.example || (item.examples && item.examples[0] ? String(item.examples[0].ja || item.examples[0] || '') : undefined),
                        category: item.category || undefined
                    })).filter(c => c.front && c.back);

                    setUploadedCards(validCards);
                    toast({
                        title: "📂 JSON Muvaffaqiyatli O'qildi!",
                        description: `${validCards.length} ta yaroqli fleshkard aniqlandi.`
                    });
                } else {
                    toast({ variant: 'destructive', title: "❌ Xatolik", description: "JSON fayl ichida kartochkalar massivi (array) bo'lishi kerak." });
                }
            } catch (err) {
                console.error("JSON parse error:", err);
                toast({ variant: 'destructive', title: "❌ JSON parsing xatosi", description: "Fayl formati noto'g'ri." });
            }
        };
        reader.readAsText(file);
    };

    const handleCreateJsonAlbum = async () => {
        if (uploadedCards.length === 0) {
            toast({ variant: 'destructive', title: "❌ Kartochka yo'q", description: "Iltimos, avval JSON fayl yuklang." });
            return;
        }

        setIsProcessing(true);
        try {
            const albumId = 'album_' + generateUUID();
            const parentDeck = PRESET_DECKS.find(d => d.level === selectedLevel) || PRESET_DECKS[0];

            const newAlbum: PresetSubDeck = {
                id: albumId,
                deckId: parentDeck.id,
                title: `${selectedLevel} — ${partName}`,
                level: selectedLevel,
                partNumber: parseInt(partName.replace(/\D/g, '')) || 1,
                cardCount: Math.min(uploadedCards.length, chunkSize),
                cards: uploadedCards.slice(0, chunkSize),
                createdAt: new Date().toISOString()
            };

            // Save album to Supabase DB table
            const { error } = await supabase.from('admin_preset_albums').upsert({
                id: newAlbum.id,
                deck_id: newAlbum.deckId,
                title: newAlbum.title,
                level: newAlbum.level,
                part_number: newAlbum.partNumber,
                card_count: newAlbum.cardCount,
                cards: newAlbum.cards,
                created_at: newAlbum.createdAt
            } as any);

            if (error) {
                console.warn("Supabase album insert warning:", error.message);
            }

            // Save to localStorage cache as backup
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            const localAlbums: PresetSubDeck[] = savedLocal ? JSON.parse(savedLocal) : [];
            localAlbums.push(newAlbum);
            localStorage.setItem('study_planner_admin_albums', JSON.stringify(localAlbums));

            if (onAlbumCreated) onAlbumCreated(newAlbum);

            toast({
                title: "🎉 Albom Muvaffaqiyatli Yaratildi!",
                description: `"${newAlbum.title}" albomiga ${newAlbum.cardCount} ta kartochka biriktirildi.`
            });
            onClose();
        } catch (err: any) {
            console.error("Album creation error:", err);
            toast({ variant: 'destructive', title: "❌ Xatolik", description: err.message || "Albomni saqlashda xatolik yuz berdi." });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleAutoSplitDeck = async () => {
        const targetDeck = PRESET_DECKS.find(d => d.id === selectedDeckId);
        if (!targetDeck) return;

        setIsProcessing(true);
        try {
            const loadedCards = await targetDeck.loadCards();
            if (!loadedCards || loadedCards.length === 0) {
                toast({ variant: 'destructive', title: "❌ Kartochkalar topilmadi" });
                setIsProcessing(false);
                return;
            }

            const createdAlbums: PresetSubDeck[] = [];
            let partCounter = 1;

            for (let i = 0; i < loadedCards.length; i += chunkSize) {
                const chunk = loadedCards.slice(i, i + chunkSize);
                const album: PresetSubDeck = {
                    id: `album_${targetDeck.id}_part_${partCounter}`,
                    deckId: targetDeck.id,
                    title: `${targetDeck.level} — ${partCounter}-Qism (${chunk.length} ta card)`,
                    level: targetDeck.level,
                    partNumber: partCounter,
                    cardCount: chunk.length,
                    cards: chunk,
                    createdAt: new Date().toISOString()
                };
                createdAlbums.push(album);
                partCounter++;
            }

            // Batch save albums to Supabase DB
            const dbPayload = createdAlbums.map(a => ({
                id: a.id,
                deck_id: a.deckId,
                title: a.title,
                level: a.level,
                part_number: a.partNumber,
                card_count: a.cardCount,
                cards: a.cards,
                created_at: a.createdAt
            }));

            await supabase.from('admin_preset_albums').upsert(dbPayload as any);

            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            const localAlbums: PresetSubDeck[] = savedLocal ? JSON.parse(savedLocal) : [];
            const updatedLocal = [...localAlbums, ...createdAlbums];
            localStorage.setItem('study_planner_admin_albums', JSON.stringify(updatedLocal));

            toast({
                title: "⚡ Avto-Bo'lish Yakunlandi!",
                description: `"${targetDeck.title}" to'plami ${createdAlbums.length} ta (${chunkSize} tadan) Albom qismlariga bo'lindi!`
            });
            onClose();
        } catch (err: any) {
            console.error("Auto split error:", err);
            toast({ variant: 'destructive', title: "❌ Xatolik", description: err.message || "To'plamni bo'lishda xatolik yuz berdi." });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
                
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-rose-900 via-purple-950 to-indigo-900 text-white flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-md">
                            <FolderPlus size={14} /> Admin Albom Yaratuvchisi
                        </div>
                        <h2 className="text-xl font-black">50 tadan Bo'lingan Albom Yaratish (JSON Import)</h2>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full transition-all">
                        <X size={20} />
                    </button>
                </div>

                {/* Mode Selector */}
                <div className="p-4 bg-muted/40 border-b border-border flex items-center gap-2">
                    <button
                        onClick={() => setMode('json_upload')}
                        className={`flex-1 py-2.5 px-4 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 ${
                            mode === 'json_upload' ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <FileJson size={16} /> JSON Fayl Yuklash & Albom Tuzish
                    </button>
                    <button
                        onClick={() => setMode('auto_split')}
                        className={`flex-1 py-2.5 px-4 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 ${
                            mode === 'auto_split' ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <Scissors size={16} /> Katta To'plamni 50 tadan Bo'lish
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6 flex-1 overflow-y-auto">
                    {mode === 'json_upload' ? (
                        <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                    <label className="font-extrabold text-foreground block mb-1.5">Daraja (Level):</label>
                                    <select
                                        value={selectedLevel}
                                        onChange={e => setSelectedLevel(e.target.value)}
                                        className="w-full p-2.5 bg-muted/50 border border-border rounded-xl font-bold"
                                    >
                                        <option value="JLPT N5">JLPT N5</option>
                                        <option value="JLPT N4">JLPT N4</option>
                                        <option value="JLPT N3">JLPT N3</option>
                                        <option value="JLPT N2">JLPT N2</option>
                                        <option value="JLPT N1">JLPT N1</option>
                                        <option value="A1-A2">A1-A2 Starter</option>
                                        <option value="B1-B2">B1-B2 Academic</option>
                                        <option value="C1-C2">C1-C2 Master</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="font-extrabold text-foreground block mb-1.5">Qism Nomi (Part Name):</label>
                                    <input
                                        type="text"
                                        value={partName}
                                        onChange={e => setPartName(e.target.value)}
                                        placeholder="1-Qism, 2-Qism..."
                                        className="w-full p-2.5 bg-muted/50 border border-border rounded-xl font-bold"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-extrabold text-foreground block mb-1.5 text-xs">Kartochkalar Soni (Chunk Size):</label>
                                <div className="flex items-center gap-3">
                                    {[20, 50, 100].map(size => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setChunkSize(size)}
                                            className={`px-4 py-2 text-xs font-black rounded-xl border transition-all ${
                                                chunkSize === size ? 'bg-rose-500/20 border-rose-500 text-rose-400' : 'bg-muted/40 border-border text-muted-foreground'
                                            }`}
                                        >
                                            {size} ta kartochka
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* JSON Drag & Drop */}
                            <div className="border-2 border-dashed border-border hover:border-primary rounded-2xl p-6 text-center space-y-3 bg-muted/20 transition-all">
                                <FileJson className="mx-auto text-primary animate-bounce" size={36} />
                                <div>
                                    <p className="text-xs font-extrabold text-foreground">JSON Faylni Tanlang yoki Shuyerga Tashlang</p>
                                    <p className="text-[11px] text-muted-foreground mt-0.5">Format: [{`{"front":"so'z","back":"ta'rif"}`}]</p>
                                </div>
                                <label className="inline-block px-5 py-2.5 bg-primary text-primary-foreground font-bold text-xs rounded-xl cursor-pointer shadow-sm hover:shadow">
                                    <Upload size={14} className="inline mr-1.5" /> Faylni Tanlash (.json)
                                    <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                                </label>

                                {jsonFileName && (
                                    <div className="pt-2 flex items-center justify-center gap-2 text-xs font-black text-emerald-500">
                                        <CheckCircle2 size={16} /> {jsonFileName} ({uploadedCards.length} ta card)
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-5 text-xs">
                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-start gap-3 text-amber-600 dark:text-amber-400">
                                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-extrabold">Avto-Bo'lish Funksiyasi:</p>
                                    <p className="text-[11px] opacity-90 mt-0.5">
                                        Katta (500+ ta cardli) to'plamni avtomatik ravishda 50 tadan bo'lib, foydalanuvchilar o'rganishi uchun ixcham 1-Qism, 2-Qism albomlariga ajratib chiqadi.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label className="font-extrabold text-foreground block mb-1.5">Bo'linadigan To'plamni Tanlang:</label>
                                <select
                                    value={selectedDeckId}
                                    onChange={e => setSelectedDeckId(e.target.value)}
                                    className="w-full p-2.5 bg-muted/50 border border-border rounded-xl font-bold"
                                >
                                    {PRESET_DECKS.map(d => (
                                        <option key={d.id} value={d.id}>{d.title} ({d.cardCount} ta card)</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="font-extrabold text-foreground block mb-1.5">Har Bir Albom Necha Tadan Bo'lsin:</label>
                                <div className="flex items-center gap-3">
                                    {[30, 50, 100].map(size => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setChunkSize(size)}
                                            className={`px-4 py-2 text-xs font-black rounded-xl border transition-all ${
                                                chunkSize === size ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground'
                                            }`}
                                        >
                                            {size} tadan
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-end gap-3">
                    <Button variant="outline" onClick={onClose} className="px-5 py-2 text-xs font-bold rounded-xl">
                        Bekor Qilish
                    </Button>
                    {mode === 'json_upload' ? (
                        <Button
                            disabled={isProcessing || uploadedCards.length === 0}
                            onClick={handleCreateJsonAlbum}
                            className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2"
                        >
                            <Sparkles size={16} /> JSON Albomni Yaratish ({uploadedCards.length} ta card)
                        </Button>
                    ) : (
                        <Button
                            disabled={isProcessing}
                            onClick={handleAutoSplitDeck}
                            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2"
                        >
                            <Scissors size={16} /> Avtomatik 50 tadan Bo'lish
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
