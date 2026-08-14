import React, { useState } from 'react';
import { PRESET_DECKS, PresetCard, PresetSubDeck } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { X, Upload, Scissors, CheckCircle2, Sparkles, FolderPlus, FileJson, AlertCircle, Layers, Download } from 'lucide-react';
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
    const [mode, setMode] = useState<'json_upload' | 'auto_split' | 'custom_standalone'>('json_upload');
    const [selectedLevel, setSelectedLevel] = useState<string>('JLPT N3');
    const [partName, setPartName] = useState<string>('1-Qism');
    const [chunkSize, setChunkSize] = useState<number>(50);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // Custom Standalone Album states
    const [customTitle, setCustomTitle] = useState<string>('Biznes va Ish Yaponchasi (Special Album)');
    const [customDesc, setCustomDesc] = useState<string>("Suhbatlar va rasmiy muloqot uchun maxsus iboralar to'plami.");
    const [customBadge, setCustomBadge] = useState<string>('MUSTAQIL');

    // JSON upload states
    const [uploadedCards, setUploadedCards] = useState<PresetCard[]>([]);
    const [jsonFileName, setJsonFileName] = useState<string | null>(null);

    const downloadSampleJson = () => {
        const sampleData = [
            {
                "front": "申し込む (もうしこむ)",
                "back": "Ariza topshirmoq, ro'yxatdan o'tmoq",
                "phonetic": "moushikomu",
                "example": "JLPT imtihoniga ariza topshirdim.",
                "category": "Fe'l"
            },
            {
                "front": "打ち合わせ (うちあわせ)",
                "back": "Oldindan uchrashuv, maslahatlashuv",
                "phonetic": "uchiawase",
                "example": "Ertaga soat 10 da mijoz bilan uchrashuvimiz bor.",
                "category": "Biznes"
            },
            {
                "front": "Comprehensive",
                "back": "Keng qamrovli, har tomonlama to'liq",
                "phonetic": "/ˌkɑːmprɪˈhensɪv/",
                "example": "The study offers a comprehensive analysis of the topic.",
                "category": "IELTS Academic"
            },
            {
                "front": "Substantial",
                "back": "Sezilarli darajada katta, muhim",
                "phonetic": "/səbˈstænʃl/",
                "example": "There was a substantial increase in exports.",
                "category": "IELTS Academic"
            }
        ];
        const blob = new Blob([JSON.stringify(sampleData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sample_flashcards_template.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast({ title: "📥 Namuna JSON yuklab olindi!", description: "sample_flashcards_template.json fayli saqlandi." });
    };

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

            // Save album directly to Supabase DB table
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
                title: "🎉 Albom DBga Saqlandi!",
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

    const handleCreateCustomStandaloneAlbum = async () => {
        if (uploadedCards.length === 0) {
            toast({ variant: 'destructive', title: "❌ Kartochka yo'q", description: "Iltimos, avval JSON fayl yuklang." });
            return;
        }

        if (!customTitle.trim()) {
            toast({ variant: 'destructive', title: "❌ Sarlavha yo'q", description: "Mustaqil albom sarlavhasini kiriting." });
            return;
        }

        setIsProcessing(true);
        try {
            const albumId = 'standalone_' + generateUUID();

            const newStandaloneAlbum: PresetSubDeck = {
                id: albumId,
                deckId: 'deck_custom_standalone',
                title: customTitle.trim(),
                level: customBadge.trim() || 'MUSTAQIL',
                partNumber: 1,
                cardCount: uploadedCards.length,
                cards: uploadedCards,
                createdAt: new Date().toISOString()
            };

            // Save directly to Supabase DB table `admin_preset_albums`
            const { error } = await supabase.from('admin_preset_albums').upsert({
                id: newStandaloneAlbum.id,
                deck_id: newStandaloneAlbum.deckId,
                title: newStandaloneAlbum.title,
                level: newStandaloneAlbum.level,
                description: customDesc.trim(),
                part_number: 1,
                card_count: newStandaloneAlbum.cardCount,
                cards: newStandaloneAlbum.cards,
                created_at: newStandaloneAlbum.createdAt
            } as any);

            if (error) {
                console.warn("Supabase standalone album insert warning:", error.message);
            }

            // Save to localStorage cache as backup
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            const localAlbums: PresetSubDeck[] = savedLocal ? JSON.parse(savedLocal) : [];
            localAlbums.push(newStandaloneAlbum);
            localStorage.setItem('study_planner_admin_albums', JSON.stringify(localAlbums));

            if (onAlbumCreated) onAlbumCreated(newStandaloneAlbum);

            toast({
                title: "✨ Mustaqil Albom Muvaffaqiyatli Saqlandi!",
                description: `"${newStandaloneAlbum.title}" (${newStandaloneAlbum.cardCount} ta card) DBga to'g'ridan-to'g'ri joylandi.`
            });
            onClose();
        } catch (err: any) {
            console.error("Custom standalone album error:", err);
            toast({ variant: 'destructive', title: "❌ Xatolik", description: err.message || "Mustaqil albomni saqlashda xatolik." });
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
                            <FolderPlus size={14} /> Admin Albom & JSON Boshqaruvi
                        </div>
                        <h2 className="text-xl font-black">Yangi Albom Yaratish (DB Direct JSON Import)</h2>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full transition-all">
                        <X size={20} />
                    </button>
                </div>

                {/* Mode Selector Tabs */}
                <div className="p-3 bg-muted/40 border-b border-border flex items-center gap-2">
                    <button
                        onClick={() => setMode('json_upload')}
                        className={`flex-1 py-2 px-3 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                            mode === 'json_upload' ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <FileJson size={15} /> Standard Darajali Import
                    </button>

                    <button
                        onClick={() => setMode('custom_standalone')}
                        className={`flex-1 py-2 px-3 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                            mode === 'custom_standalone' ? 'bg-emerald-600 text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <Layers size={15} /> Mustaqil Maxsus Albom (DB)
                    </button>

                    <button
                        onClick={() => setMode('auto_split')}
                        className={`flex-1 py-2 px-3 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                            mode === 'auto_split' ? 'bg-purple-600 text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <Scissors size={15} /> Avto 50 tadan Bo'lish
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6 flex-1 overflow-y-auto">
                    {mode === 'json_upload' && (
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
                                <div className="flex items-center justify-center gap-3 flex-wrap">
                                    <label className="inline-block px-5 py-2.5 bg-primary text-primary-foreground font-bold text-xs rounded-xl cursor-pointer shadow-sm hover:shadow">
                                        <Upload size={14} className="inline mr-1.5" /> Faylni Tanlash (.json)
                                        <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                                    </label>
                                    <button
                                        type="button"
                                        onClick={downloadSampleJson}
                                        className="px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm border border-border"
                                    >
                                        <Download size={14} /> Namuna JSON Yuklab Olish
                                    </button>
                                </div>

                                {jsonFileName && (
                                    <div className="pt-2 flex items-center justify-center gap-2 text-xs font-black text-emerald-500">
                                        <CheckCircle2 size={16} /> {jsonFileName} ({uploadedCards.length} ta card)
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {mode === 'custom_standalone' && (
                        <div className="space-y-5 text-xs">
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex items-start gap-3 text-emerald-600 dark:text-emerald-400">
                                <Sparkles size={20} className="shrink-0 mt-0.5 text-emerald-500" />
                                <div>
                                    <p className="font-extrabold">Mustaqil Maxsus Albom Yaratish (Super Admin):</p>
                                    <p className="text-[11px] opacity-90 mt-0.5">
                                        Standart darajalardan (JLPT/IELTS) tashqari har qanday mustaqil mavzu uchun yangi Albom tuzing. JSON kartochkalar to'g'ridan-to'g'ri DBga saqlanadi.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="font-extrabold text-foreground block mb-1.5">Albom Sarlavhasi:</label>
                                    <input
                                        type="text"
                                        value={customTitle}
                                        onChange={e => setCustomTitle(e.target.value)}
                                        placeholder="Kompaniya & Biznes Yaponchasi"
                                        className="w-full p-2.5 bg-muted/50 border border-border rounded-xl font-bold"
                                    />
                                </div>

                                <div>
                                    <label className="font-extrabold text-foreground block mb-1.5">Kategoriya / Yorliq (Badge):</label>
                                    <input
                                        type="text"
                                        value={customBadge}
                                        onChange={e => setCustomBadge(e.target.value)}
                                        placeholder="MUSTAQIL, SPECIAL, BIZNES"
                                        className="w-full p-2.5 bg-muted/50 border border-border rounded-xl font-bold"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-extrabold text-foreground block mb-1.5">Albom Tavsifi (Description):</label>
                                <textarea
                                    rows={2}
                                    value={customDesc}
                                    onChange={e => setCustomDesc(e.target.value)}
                                    placeholder="Albom haqida qisqacha ma'lumot..."
                                    className="w-full p-2.5 bg-muted/50 border border-border rounded-xl font-medium outline-none resize-none"
                                />
                            </div>

                            {/* JSON Drag & Drop */}
                            <div className="border-2 border-dashed border-emerald-500/40 hover:border-emerald-500 rounded-2xl p-6 text-center space-y-3 bg-emerald-500/5 transition-all">
                                <FileJson className="mx-auto text-emerald-500 animate-bounce" size={36} />
                                <div>
                                    <p className="text-xs font-extrabold text-foreground">Mustaqil Albom JSON Faylini Yuklang</p>
                                    <p className="text-[11px] text-muted-foreground mt-0.5">Format: [{`{"front":"word","back":"meaning"}`}]</p>
                                </div>
                                <div className="flex items-center justify-center gap-3 flex-wrap">
                                    <label className="inline-block px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl cursor-pointer shadow-sm">
                                        <Upload size={14} className="inline mr-1.5" /> JSON Fayl Tanlash
                                        <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                                    </label>
                                    <button
                                        type="button"
                                        onClick={downloadSampleJson}
                                        className="px-4 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm border border-emerald-500/30"
                                    >
                                        <Download size={14} /> Namuna JSON Yuklab Olish
                                    </button>
                                </div>

                                {jsonFileName && (
                                    <div className="pt-2 flex items-center justify-center gap-2 text-xs font-black text-emerald-500">
                                        <CheckCircle2 size={16} /> {jsonFileName} ({uploadedCards.length} ta card tayyor)
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {mode === 'auto_split' && (
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
                    ) : mode === 'custom_standalone' ? (
                        <Button
                            disabled={isProcessing || uploadedCards.length === 0 || !customTitle.trim()}
                            onClick={handleCreateCustomStandaloneAlbum}
                            className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-indigo-600 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2"
                        >
                            <Sparkles size={16} /> Mustaqil Albomni DBga Saqlash ({uploadedCards.length} ta card)
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
