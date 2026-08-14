import React, { useState, useEffect } from 'react';
import { PRESET_DECKS, PresetCard, PresetSubDeck } from '../../data/presetDecks';
import { Button } from '../ui/Button';
import { X, Upload, Scissors, CheckCircle2, Sparkles, FileJson, AlertCircle, Download } from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import { supabase } from '../../lib/supabase';
import { generateUUID } from '../../utils/uuid';

interface AdminAlbumCreatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAlbumCreated?: (album: PresetSubDeck) => void;
    initialTitle?: string;
    initialPartName?: string;
    initialBadge?: string;
    initialMode?: 'json_upload' | 'auto_split' | 'custom_standalone';
}

export const AdminAlbumCreatorModal: React.FC<AdminAlbumCreatorModalProps> = ({
    isOpen,
    onClose,
    onAlbumCreated,
    initialTitle,
    initialPartName,
    initialBadge,
    initialMode
}) => {
    const [mode, setMode] = useState<'json_upload' | 'auto_split' | 'custom_standalone'>('custom_standalone');
    const [selectedLevel, setSelectedLevel] = useState<string>('JLPT N3');
    const [partName, setPartName] = useState<string>('1-Qism');
    const [chunkSize, setChunkSize] = useState<number>(50);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // Custom Standalone Album states
    const [customTitle, setCustomTitle] = useState<string>('日本語できる');
    const [customPartName, setCustomPartName] = useState<string>('2-Qism');
    const [customDesc, setCustomDesc] = useState<string>("Suhbatlar va darsliklar uchun maxsus iboralar to'plami.");
    const [customBadge, setCustomBadge] = useState<string>('MUSTAQIL');
    const [customSplitMode, setCustomSplitMode] = useState<'auto_50' | 'auto_100' | 'single_part' | 'no_split'>('auto_50');

    useEffect(() => {
        if (isOpen) {
            if (initialTitle) setCustomTitle(initialTitle);
            if (initialPartName) {
                setCustomPartName(initialPartName);
                setCustomSplitMode('single_part');
            }
            if (initialBadge) setCustomBadge(initialBadge);
            if (initialMode) setMode(initialMode);
        }
    }, [isOpen, initialTitle, initialPartName, initialBadge, initialMode]);

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

            // Save to localStorage cache as backup
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            const localAlbums: PresetSubDeck[] = savedLocal ? JSON.parse(savedLocal) : [];
            const filteredLocal = localAlbums.filter(a => a.id !== newAlbum.id);
            filteredLocal.push(newAlbum);
            localStorage.setItem('study_planner_admin_albums', JSON.stringify(filteredLocal));

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
            const trimmedTitle = customTitle.trim();
            const trimmedBadge = customBadge.trim() || 'MUSTAQIL';
            const trimmedDesc = customDesc.trim();

            const albumsToSave: PresetSubDeck[] = [];

            if ((customSplitMode === 'auto_50' || customSplitMode === 'auto_100') && uploadedCards.length > (customSplitMode === 'auto_50' ? 50 : 100)) {
                const size = customSplitMode === 'auto_50' ? 50 : 100;
                for (let i = 0; i < uploadedCards.length; i += size) {
                    const chunk = uploadedCards.slice(i, i + size);
                    const pNum = Math.floor(i / size) + 1;
                    const albumId = 'standalone_' + generateUUID();

                    albumsToSave.push({
                        id: albumId,
                        deckId: 'deck_custom_standalone',
                        title: `${trimmedTitle} — ${pNum}-Qism`,
                        level: trimmedBadge,
                        description: trimmedDesc,
                        partNumber: pNum,
                        cardCount: chunk.length,
                        cards: chunk,
                        createdAt: new Date().toISOString()
                    });
                }
            } else if (customSplitMode === 'no_split') {
                const albumId = 'standalone_' + generateUUID();
                albumsToSave.push({
                    id: albumId,
                    deckId: 'deck_custom_standalone',
                    title: trimmedTitle,
                    level: trimmedBadge,
                    description: trimmedDesc,
                    partNumber: 1,
                    cardCount: uploadedCards.length,
                    cards: uploadedCards,
                    createdAt: new Date().toISOString()
                });
            } else {
                // single_part mode or small card count
                const trimmedPart = customPartName.trim();
                const fullTitle = (trimmedPart && !trimmedTitle.toLowerCase().includes(trimmedPart.toLowerCase()))
                    ? `${trimmedTitle} — ${trimmedPart}`
                    : trimmedTitle;
                const partNumber = parseInt(trimmedPart.replace(/\D/g, '')) || 1;
                const albumId = 'standalone_' + generateUUID();

                albumsToSave.push({
                    id: albumId,
                    deckId: 'deck_custom_standalone',
                    title: fullTitle,
                    level: trimmedBadge,
                    description: trimmedDesc,
                    partNumber: partNumber,
                    cardCount: uploadedCards.length,
                    cards: uploadedCards,
                    createdAt: new Date().toISOString()
                });
            }

            // 1. Save all generated parts to localStorage cache immediately
            const savedLocal = localStorage.getItem('study_planner_admin_albums');
            const localAlbums: PresetSubDeck[] = savedLocal ? JSON.parse(savedLocal) : [];
            const idsToDelete = new Set(albumsToSave.map(a => a.id));
            const filteredLocal = localAlbums.filter(a => !idsToDelete.has(a.id));
            localStorage.setItem('study_planner_admin_albums', JSON.stringify([...filteredLocal, ...albumsToSave]));

            // 2. Save directly to Supabase DB table `admin_preset_albums`
            const dbPayloads = albumsToSave.map(a => ({
                id: a.id,
                deck_id: a.deckId,
                title: a.title,
                level: a.level,
                description: a.description,
                part_number: a.partNumber,
                card_count: a.cardCount,
                cards: a.cards,
                created_at: a.createdAt
            }));

            const { error } = await supabase.from('admin_preset_albums').upsert(dbPayloads as any);
            if (error) {
                console.warn("Supabase standalone album batch insert warning:", error.message);
            }

            if (onAlbumCreated && albumsToSave[0]) {
                onAlbumCreated(albumsToSave[0]);
            }

            toast({
                title: "✨ Mustaqil Albom Muvaffaqiyatli Saqlandi!",
                description: `"${trimmedTitle}" albomi ${albumsToSave.length} ta jildga (${uploadedCards.length} ta card) ajratilib saqlandi.`
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
            const allCards = await targetDeck.loadCards();
            if (!allCards || allCards.length === 0) {
                toast({ variant: 'destructive', title: "Xatolik", description: "To'plamda kartalar topilmadi." });
                return;
            }

            let createdCount = 0;
            for (let i = 0; i < allCards.length; i += chunkSize) {
                const chunk = allCards.slice(i, i + chunkSize);
                const pNum = Math.floor(i / chunkSize) + 1;
                const albumId = `${targetDeck.id}_split_${chunkSize}_part_${pNum}`;

                const dbPayload = {
                    id: albumId,
                    deck_id: targetDeck.id,
                    title: `${targetDeck.level} — ${pNum}-Qism`,
                    level: targetDeck.level,
                    part_number: pNum,
                    card_count: chunk.length,
                    cards: chunk,
                    created_at: new Date().toISOString()
                };

                await supabase.from('admin_preset_albums').upsert(dbPayload as any);
                createdCount++;
            }

            toast({
                title: "✂️ Avto-Bo'lish Muvaffaqiyatli!",
                description: `${targetDeck.title} to'plami ${createdCount} ta alohida ${chunkSize} tadan iborat qismga ajratilib, DBga saqlandi!`
            });
            onClose();
        } catch (err: any) {
            toast({ variant: 'destructive', title: "Xatolik", description: err.message });
        } finally {
            setIsProcessing(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-card border border-border w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col relative max-h-[90vh]">
                
                {/* Modal Header */}
                <div className="p-6 bg-gradient-to-r from-rose-950 via-purple-950 to-indigo-950 text-white flex items-center justify-between border-b border-white/10 shrink-0">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs font-black text-rose-300 flex items-center gap-1">
                                <Sparkles size={14} /> SUPER ADMIN
                            </span>
                            <span className="text-xs font-bold text-slate-300">Albom Yaratish & Bo'lish</span>
                        </div>
                        <h2 className="text-xl font-black flex items-center gap-2">
                            <span>📚</span> Albom Yaratish (DB Direct JSON Import)
                        </h2>
                    </div>

                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full transition-all">
                        <X size={20} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="p-2 bg-muted/60 border-b border-border flex items-center gap-2 shrink-0">
                    <button
                        onClick={() => setMode('custom_standalone')}
                        className={`flex-1 py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                            mode === 'custom_standalone' ? 'bg-emerald-600 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <Sparkles size={14} /> Mustaqil Maxsus Albom (DB)
                    </button>
                    <button
                        onClick={() => setMode('json_upload')}
                        className={`flex-1 py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                            mode === 'json_upload' ? 'bg-indigo-600 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <FileJson size={14} /> JLPT / IELTS Qism Qo'shish
                    </button>
                    <button
                        onClick={() => setMode('auto_split')}
                        className={`flex-1 py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                            mode === 'auto_split' ? 'bg-amber-600 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <Scissors size={14} /> Katta To'plamni Bo'lish
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1">
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
                                    <p className="font-extrabold">Mustaqil Maxsus Albom Yaratish / Keyingi Qism Qo'shish:</p>
                                    <p className="text-[11px] opacity-90 mt-0.5">
                                        Har qanday mavzudagi to'plam yoki mavjud albomning 1-Qism, 2-Qism, 3-Qismlarini yuklang. JSON kartochkalar to'g'ridan-to'g'ri DBga saqlanadi.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="md:col-span-1">
                                    <label className="font-extrabold text-foreground block mb-1.5">Albom Asosiy Nomi:</label>
                                    <input
                                        type="text"
                                        value={customTitle}
                                        onChange={e => setCustomTitle(e.target.value)}
                                        placeholder="日本語できる"
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
                                    <div className="flex flex-wrap gap-1 mt-1.5">
                                        {['MUSTAQIL', 'JLPT N3', 'JLPT N2', 'IELTS', 'BIZNES', 'TIBBIYOT', 'A1-A2'].map(tag => (
                                            <button
                                                key={tag}
                                                type="button"
                                                onClick={() => setCustomBadge(tag)}
                                                className={`px-2 py-0.5 text-[10px] font-bold rounded-lg transition-all ${
                                                    customBadge === tag ? 'bg-emerald-600 text-white' : 'bg-muted/60 text-muted-foreground hover:text-foreground'
                                                }`}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="font-extrabold text-foreground block mb-1.5">Jild Rejimi (Split / Part):</label>
                                    <select
                                        value={customSplitMode}
                                        onChange={e => setCustomSplitMode(e.target.value as any)}
                                        className="w-full p-2.5 bg-muted/50 border border-border rounded-xl font-bold"
                                    >
                                        <option value="auto_50">⚡ Har 50 tadan jildlarga bo'lish (Avtomatik)</option>
                                        <option value="auto_100">⚡ Har 100 tadan jildlarga bo'lish</option>
                                        <option value="single_part">📁 Alohida qism yuklash ({customPartName || '2-Qism'})</option>
                                        <option value="no_split">📦 Bo'linmasin (Yagona to'plam)</option>
                                    </select>
                                    {customSplitMode === 'single_part' && (
                                        <input
                                            type="text"
                                            value={customPartName}
                                            onChange={e => setCustomPartName(e.target.value)}
                                            placeholder="2-Qism (yoki 3-Qism)"
                                            className="w-full mt-1.5 p-2 bg-muted/50 border border-border rounded-lg font-bold text-xs"
                                        />
                                    )}
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
                                    <div className="pt-2 space-y-1">
                                        <div className="flex items-center justify-center gap-2 text-xs font-black text-emerald-500">
                                            <CheckCircle2 size={16} /> {jsonFileName} ({uploadedCards.length} ta card tayyor)
                                        </div>
                                        {uploadedCards.length > 0 && (customSplitMode === 'auto_50' || customSplitMode === 'auto_100') && (
                                            <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 py-1 px-3 rounded-full inline-block">
                                                ⚡ Avtomatik {Math.ceil(uploadedCards.length / (customSplitMode === 'auto_50' ? 50 : 100))} ta jildga (1-Qism, 2-Qism...) ajratilib, bitta albom kartasi ostiga joylanadi!
                                            </div>
                                        )}
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
