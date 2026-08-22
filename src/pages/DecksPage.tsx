import { Book, Plus, Sparkles, Upload, Library, Layers, FileText, ShieldAlert, Archive, ArchiveRestore, Trash2, CheckSquare, Square, FolderCheck, FolderArchive } from 'lucide-react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AIGeneratorModal from '../components/AIGeneratorModal';
import DeckCard from '../components/decks/DeckCard';
import { FlashcardStudySession } from '../components/decks/FlashcardStudySession';
import ImportModal from '../components/decks/ImportModal';
import { PresetDeckCard } from '../components/decks/PresetDeckCard';
import { StandaloneDeckCard, StandaloneDeckGroup } from '../components/decks/StandaloneDeckCard';
import { ExtractVocabModal } from '../components/decks/ExtractVocabModal';
import { AiDocumentFlashcardModal } from '../components/decks/AiDocumentFlashcardModal';
import { AdminFlashcardManager } from '../components/decks/AdminFlashcardManager';
import { AdminPresetAuditorModal } from '../components/decks/AdminPresetAuditorModal';
import { AdminAlbumCreatorModal } from '../components/decks/AdminAlbumCreatorModal';
import { LevelFolderExplorerModal } from '../components/decks/LevelFolderExplorerModal';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { useFlashcardImport } from '../hooks/useFlashcardImport';
import { isAdminEmail } from '../utils/admin';
import { PRESET_DECKS, PresetDeck, PresetSubDeck } from '../data/presetDecks';
import { PresetDeckService, DeckPart } from '../services/PresetDeckService';
import { toast } from '../hooks/use-toast';

import SubjectForm from '../components/subjects/SubjectForm';

const DecksPage: React.FC = () => {
    const { user, subjects, flashcards, importFlashcards, addSubject, updateSubject, deleteSubject, addFlashcardsBatch, primaryLanguage } = useStudyData();
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const studyQueryParam = searchParams.get('study');
    const [activeStudySubjectId, setActiveStudySubjectId] = useState<string | null>(studyQueryParam);

    useEffect(() => {
        if (studyQueryParam) {
            setActiveStudySubjectId(studyQueryParam);
        }
    }, [studyQueryParam]);

    const [activeTab, setActiveTab] = useState<'my' | 'library'>('my');
    const [subTab, setSubTab] = useState<'active' | 'archived'>('active');
    const [libraryFilter, setLibraryFilter] = useState<'primary' | 'ja' | 'en' | 'all'>('primary');
    const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);
    const [aiSubjectId, setAiSubjectId] = useState<string | null>(null);
    const [isImportModalOpen, setImportModalOpen] = useState(false);
    const [isExtractModalOpen, setIsExtractModalOpen] = useState(false);
    const [isDocGeneratorOpen, setIsDocGeneratorOpen] = useState(false);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
    const [isAlbumCreatorOpen, setIsAlbumCreatorOpen] = useState(false);
    const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
    const [auditingDeck, setAuditingDeck] = useState<PresetDeck | null>(null);
    const [explorerDeck, setExplorerDeck] = useState<PresetDeck | null>(null);
    const [explorerParts, setExplorerParts] = useState<DeckPart[]>([]);
    const [importedDeckTitle, setImportedDeckTitle] = useState<string | null>(null);
    const [isImportingPreset, setIsImportingPreset] = useState(false);
    const [standaloneAlbums, setStandaloneAlbums] = useState<PresetSubDeck[]>([]);

    const isAdmin = isAdminEmail(user?.email);

    const activeSubjects = subjects.filter(s => !s.isArchived);
    const archivedSubjects = subjects.filter(s => !!s.isArchived);
    const currentList = subTab === 'active' ? activeSubjects : archivedSubjects;

    const { handleImport, downloadTemplate, isImporting } = useFlashcardImport(importFlashcards);

    const onImport = async (subjectId: string, file: File) => {
        await handleImport(subjectId, file);
        setImportModalOpen(false);
    };

    const getCleanTitle = (title: string) => {
        return title
            .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}]/gu, '')
            .replace(/\s*\(\d+\s*Kartochka\)/i, '')
            .replace(/\s*\([^)]*\)/gi, '')
            .trim();
    };

    const findMatchingSubject = (preset: PresetDeck) => {
        const cleanTitle = getCleanTitle(preset.title).toLowerCase();
        return subjects.find(s => {
            const cleanSubName = getCleanTitle(s.name).toLowerCase();
            return cleanSubName === cleanTitle || s.name.toLowerCase().trim() === preset.title.toLowerCase().trim();
        });
    };

    const handleImportPresetDeck = async (preset: PresetDeck) => {
        setIsImportingPreset(true);
        try {
            const cleanTitle = getCleanTitle(preset.title);
            let subject = findMatchingSubject(preset);
            let targetSubjectId = subject?.id;

            if (!targetSubjectId) {
                const newSub = await addSubject({
                    name: cleanTitle || preset.title,
                    color: '#6366f1',
                    icon: preset.icon,
                    isArchived: false,
                });
                targetSubjectId = newSub?.id;
            }

            if (targetSubjectId) {
                const loadedCards = await preset.loadCards();
                if (loadedCards && loadedCards.length > 0) {
                    const existingFronts = new Set(
                        flashcards
                            .filter(c => c.subjectId === targetSubjectId)
                            .map(c => c.front.trim().toLowerCase())
                    );
                    const newCards = loadedCards.filter(c => !existingFronts.has(c.front.trim().toLowerCase()));

                    if (newCards.length > 0) {
                        const batchCards = newCards.map(c => ({
                            subjectId: targetSubjectId!,
                            front: c.front,
                            back: `${c.back} ${c.phonetic ? `(${c.phonetic})` : ''} ${c.example ? `\nExample: "${c.example}"` : ''}`.trim(),
                            interval: 1,
                            repetitions: 0,
                            easeFactor: 2.5,
                            dueDate: new Date().toISOString().split('T')[0],
                            nextReviewDate: new Date().toISOString(),
                            isArchived: false
                        }));

                        const chunkSize = 100;
                        for (let i = 0; i < batchCards.length; i += chunkSize) {
                            const chunk = batchCards.slice(i, i + chunkSize);
                            await addFlashcardsBatch(chunk);
                        }
                        setImportedDeckTitle(`${cleanTitle || preset.title} (${newCards.length} ta yangi kartochka qo'shildi)`);
                    } else {
                        setImportedDeckTitle(`${cleanTitle || preset.title} (Barcha kartochkalar mavjud)`);
                    }
                }
            }

            setTimeout(() => setImportedDeckTitle(null), 4000);
        } catch (err) {
            console.error('Import preset error:', err);
            toast({ variant: 'destructive', title: 'Xatolik', description: 'To\'plamni saqlashda xatolik yuz berdi. Qayta urinib ko\'ring.' });
        } finally {
            setIsImportingPreset(false);
        }
    };

    const handleImportDeckPart = async (part: DeckPart) => {
        setIsImportingPreset(true);
        try {
            const cleanTitle = part.title.trim();
            // Match existing subject by base level/title or part name
            let subject = subjects.find(s => {
                const cleanSubName = s.name.toLowerCase().trim();
                const cleanPTitle = cleanTitle.toLowerCase();
                return cleanSubName === cleanPTitle || cleanSubName.includes(cleanPTitle) || cleanPTitle.includes(cleanSubName);
            });

            if (!subject) {
                // Determine sensible color based on level
                let color = '#8b5cf6';
                if (cleanTitle.includes('N5')) color = '#10b981';
                else if (cleanTitle.includes('N4')) color = '#3b82f6';
                else if (cleanTitle.includes('N3')) color = '#f59e0b';
                else if (cleanTitle.includes('N2')) color = '#ec4899';
                else if (cleanTitle.includes('N1')) color = '#ef4444';

                const newSub = await addSubject({
                    name: cleanTitle,
                    color,
                    schedule: []
                });
                if (newSub) {
                    subject = newSub;
                }
            }

            if (subject) {
                const existingCards = flashcards.filter(f => f.subjectId === subject.id);
                const existingFronts = new Set(existingCards.map(f => f.front.trim().toLowerCase()));

                const rawCards = part.cards || [];
                if (rawCards && rawCards.length > 0) {
                    const newCards = rawCards.filter((c: any) => !existingFronts.has(c.front.trim().toLowerCase()));

                    if (newCards.length > 0) {
                        const batchCards = newCards.map((c: any) => ({
                            subjectId: subject!.id,
                            front: c.front,
                            back: c.back,
                            interval: 1,
                            repetitions: 0,
                            easeFactor: 2.5
                        }));

                        const chunkSize = 100;
                        for (let i = 0; i < batchCards.length; i += chunkSize) {
                            const chunk = batchCards.slice(i, i + chunkSize);
                            await addFlashcardsBatch(chunk);
                        }

                        setImportedDeckTitle(`${cleanTitle} (${newCards.length} ta yangi kartochka qo'shildi)`);
                    } else {
                        setImportedDeckTitle(`${cleanTitle} (Barcha kartochkalar mavjud)`);
                    }
                    setTimeout(() => setImportedDeckTitle(null), 4000);
                }
            }
        } catch (err) {
            console.error("Part import error:", err);
            toast({ variant: 'destructive', title: 'Xatolik', description: "Jildni saqlashda xatolik yuz berdi. Qayta urinib ko'ring." });
        } finally {
            setIsImportingPreset(false);
        }
    };

    const loadStandaloneAlbums = useCallback(async () => {
        try {
            const list = await PresetDeckService.getStandaloneAlbums();
            setStandaloneAlbums(list);
        } catch (e) {
            console.error('Error loading standalone albums:', e);
        }
    }, []);

    useEffect(() => {
        loadStandaloneAlbums();
    }, [loadStandaloneAlbums]);

    const standaloneGroups: StandaloneDeckGroup[] = useMemo(() => {
        const groupMap = new Map<string, StandaloneDeckGroup>();

        standaloneAlbums.forEach(album => {
            const rawTitle = album.title.trim();
            const baseTitle = rawTitle.replace(/\s*—\s*\d+-Qism.*/i, '').trim();

            if (!groupMap.has(baseTitle)) {
                groupMap.set(baseTitle, {
                    baseTitle: baseTitle,
                    level: album.level || 'MUSTAQIL',
                    description: album.description || "Maxsus mustaqil kartochkalar to'plami.",
                    totalCards: 0,
                    parts: []
                });
            }

            const grp = groupMap.get(baseTitle)!;
            grp.parts.push(album);
            grp.totalCards += (album.cardCount || album.cards?.length || 0);
        });

        return Array.from(groupMap.values()).map(grp => ({
            ...grp,
            parts: grp.parts.sort((a, b) => (a.partNumber || 1) - (b.partNumber || 1))
        }));
    }, [standaloneAlbums]);

    const handleImportAllGroupParts = async (group: StandaloneDeckGroup) => {
        for (const part of group.parts) {
            await handleImportStandaloneAlbum(part);
        }
    };

    const handleDeleteGroup = async (group: StandaloneDeckGroup) => {
        if (!window.confirm(`"${group.baseTitle}" albomini va uning barcha ${group.parts.length} ta qismini o'chirasizmi?`)) return;
        for (const part of group.parts) {
            await PresetDeckService.deleteStandaloneAlbum(part.id);
        }
        await loadStandaloneAlbums();
    };

    const [albumCreatorProps, setAlbumCreatorProps] = useState<{
        initialTitle?: string;
        initialPartName?: string;
        initialBadge?: string;
        initialMode?: 'json_upload' | 'auto_split' | 'custom_standalone';
    }>({});

    const handleImportStandaloneAlbum = async (album: PresetSubDeck) => {
        setIsImportingPreset(true);
        try {
            const rawTitle = album.title.trim();

            let subject = subjects.find(s => {
                const cleanSubName = s.name.toLowerCase().trim();
                const cleanRaw = rawTitle.toLowerCase().trim();
                return cleanSubName === cleanRaw || cleanSubName.includes(cleanRaw) || cleanRaw.includes(cleanSubName);
            });
            let targetSubjectId = subject?.id;

            if (!targetSubjectId) {
                const newSub = await addSubject({
                    name: rawTitle,
                    color: '#10b981',
                    icon: album.icon || '⭐',
                    description: album.description,
                    isArchived: false,
                });
                targetSubjectId = newSub?.id;
            }

            if (targetSubjectId && album.cards && album.cards.length > 0) {
                const existingFronts = new Set(
                    flashcards.filter(c => c.subjectId === targetSubjectId).map(c => c.front.trim().toLowerCase())
                );
                const newCards = album.cards.filter(c => !existingFronts.has(c.front.trim().toLowerCase()));

                if (newCards.length > 0) {
                    const batchCards = newCards.map(c => ({
                        subjectId: targetSubjectId!,
                        front: c.front,
                        back: `${c.back} ${c.phonetic ? `(${c.phonetic})` : ''} ${c.example ? `\nExample: "${c.example}"` : ''}`.trim(),
                        interval: 1,
                        repetitions: 0,
                        easeFactor: 2.5,
                        dueDate: new Date().toISOString().split('T')[0],
                        nextReviewDate: new Date().toISOString(),
                        isArchived: false
                    }));

                    const chunkSize = 50;
                    for (let i = 0; i < batchCards.length; i += chunkSize) {
                        const chunk = batchCards.slice(i, i + chunkSize);
                        await addFlashcardsBatch(chunk);
                    }
                    setImportedDeckTitle(`${rawTitle} (${newCards.length} ta kartochka to'plamga qo'shildi)`);
                } else {
                    setImportedDeckTitle(`"${rawTitle}" kartochkalari allaqachon to'plamingizda mavjud!`);
                }
                setTimeout(() => setImportedDeckTitle(null), 4000);
            }
        } catch (err) {
            console.error("Standalone album import error:", err);
            toast({ variant: 'destructive', title: 'Xatolik', description: "Albomni saqlashda xatolik yuz berdi." });
        } finally {
            setIsImportingPreset(false);
        }
    };

    const handleDeleteStandaloneAlbum = async (album: PresetSubDeck) => {
        if (!window.confirm(`"${album.title}" maxsus albomini butunlay o'chirmoqchimisiz?`)) return;
        await PresetDeckService.deleteStandaloneAlbum(album.id);
        await loadStandaloneAlbums();
    };

    const handleRemovePresetDeck = async (preset: PresetDeck) => {
        const matchingSubject = findMatchingSubject(preset);
        if (!matchingSubject) return;

        if (window.confirm(`"${preset.title}" to'plamini va uning barcha kartochkalarini "Mening To'plamlarim"dan o'chirmoqchimisiz?`)) {
            try {
                await deleteSubject(matchingSubject.id);
            } catch (err) {
                console.error("Remove preset deck error:", err);
            }
        }
    };

    // Selection Handlers
    const toggleSelectSubject = (id: string) => {
        setSelectedSubjectIds(prev => 
            prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedSubjectIds.length === currentList.length) {
            setSelectedSubjectIds([]);
        } else {
            setSelectedSubjectIds(currentList.map(s => s.id));
        }
    };

    const handleBatchDelete = async () => {
        if (selectedSubjectIds.length === 0) return;
        if (!window.confirm(`Siz rostdan ham tanlangan ${selectedSubjectIds.length} ta fan/to'plamni va ularning BARCHA KARTALARINI o'chirmoqchimisiz?`)) return;

        for (const id of selectedSubjectIds) {
            await deleteSubject(id);
        }
        setSelectedSubjectIds([]);
    };

    const handleBatchArchive = async (archive: boolean) => {
        if (selectedSubjectIds.length === 0) return;
        for (const id of selectedSubjectIds) {
            await updateSubject(id, { isArchived: archive });
        }
        setSelectedSubjectIds([]);
    };

    const handleOpenDeckExplorer = async (preset: PresetDeck) => {
        try {
            const parts = await PresetDeckService.getDeckParts(preset);
            setExplorerDeck(preset);
            setExplorerParts(parts);
        } catch (e) {
            console.error("Error opening explorer:", e);
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/60">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-2">
                        <Layers size={14} /> ANKI SM-2 ENGINE ⚡
                    </div>
                    <h2 className="text-3xl font-black text-foreground tracking-tight">Fleshkartalar & Lug'at</h2>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
                        Anki SM-2 algoritmi, Audio TTS va tayyor to'plamlar bilan lug'at boyligingizni oshiring.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                    {/* Add Subject Button */}
                    <Button
                        onClick={() => setIsAddSubjectOpen(true)}
                        className="font-extrabold shadow-md rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs"
                    >
                        <Plus size={16} className="mr-1.5" /> + Fan Qo'shish
                    </Button>

                    {/* Primary Button */}
                    <Link to="/flashcards/new">
                        <Button className="font-extrabold shadow-md rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 text-xs">
                            <Plus size={16} className="mr-1.5" /> Qo'lda Qo'shish
                        </Button>
                    </Link>

                    {/* AI & Import Action Group */}
                    <div className="flex items-center gap-1.5 p-1 bg-muted/60 border border-border rounded-2xl">
                        <button
                            onClick={() => setIsDocGeneratorOpen(true)}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl shadow-sm transition-all"
                            title="Konspekt yoki matndan Q&A va test fleshkartalari tuzish"
                        >
                            <Sparkles size={15} /> AI Konspekt & Quiz
                        </button>
                        <button
                            onClick={() => setAiSubjectId('global')}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-primary hover:bg-background rounded-xl transition-all"
                            title="AI bilan kartochka yaratish"
                        >
                            <Book size={15} /> AI Generator
                        </button>
                        <button
                            onClick={() => setIsExtractModalOpen(true)}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-400 hover:bg-background rounded-xl transition-all"
                            title="Matndan lug'at ajratib olish"
                        >
                            <FileText size={15} /> Extractor
                        </button>
                        <button
                            onClick={() => setImportModalOpen(true)}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-all"
                            title="JSON formatida fayl yuklash"
                        >
                            <Upload size={15} /> Import
                        </button>
                        {isAdmin && (
                            <button
                                onClick={() => setIsAdminModalOpen(true)}
                                className="flex items-center gap-1.5 px-3 py-2 text-xs font-black text-rose-600 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-xl transition-all"
                                title="Buzuq kartalarni saralash va o'chirish"
                            >
                                <ShieldAlert size={15} /> Admin Cleaner
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Toast/Notice for preset deck import */}
            {isImportingPreset && (
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-between animate-pulse">
                    <div className="flex items-center gap-2 font-extrabold text-sm">
                        <Sparkles size={18} className="animate-spin" />
                        <span>Kutubxonadagi barcha kartochkalar bazaga saqlanmoqda...</span>
                    </div>
                </div>
            )}

            {importedDeckTitle && !isImportingPreset && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-2 font-extrabold text-sm">
                        <Sparkles size={18} />
                        <span>"{importedDeckTitle}" to'plami va uning barcha kartochkalari muvaffaqiyatli saqlandi!</span>
                    </div>
                </div>
            )}

            {/* SubjectForm Modal */}
            {isAddSubjectOpen && (
                <SubjectForm
                    onClose={() => setIsAddSubjectOpen(false)}
                    onSubmit={async (data) => {
                        await addSubject(data);
                        setIsAddSubjectOpen(false);
                    }}
                />
            )}

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-muted/40 border border-border/80 rounded-2xl w-fit">
                <button
                    onClick={() => setActiveTab('my')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'my'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Layers size={16} className="text-indigo-500" /> {t('flashcards.myDecks')} ({subjects.length})
                </button>
                <button
                    onClick={() => setActiveTab('library')}
                    className={`flex items-center gap-2 px-5 py-2.5 font-black text-xs rounded-xl transition-all ${
                        activeTab === 'library'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    <Library size={16} className="text-amber-500" /> {t('flashcards.library')} ({PRESET_DECKS.length})
                </button>
            </div>

            {activeTab === 'my' && (
                <div className="space-y-6">
                    {/* Sub-tabs & Multi-select Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-muted/30 border border-border/80 rounded-2xl">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => { setSubTab('active'); setSelectedSubjectIds([]); }}
                                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-black rounded-xl transition-all ${
                                    subTab === 'active'
                                        ? 'bg-indigo-600 text-white shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                                }`}
                            >
                                <FolderCheck size={15} /> Faol To'plamlar ({activeSubjects.length})
                            </button>
                            <button
                                onClick={() => { setSubTab('archived'); setSelectedSubjectIds([]); }}
                                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-black rounded-xl transition-all ${
                                    subTab === 'archived'
                                        ? 'bg-amber-600 text-white shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                                }`}
                            >
                                <FolderArchive size={15} /> Arxivlangan ({archivedSubjects.length})
                            </button>
                        </div>

                        {/* Multi-select Action Buttons */}
                        {currentList.length > 0 && (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={toggleSelectAll}
                                    className="px-3 py-2 bg-background border border-input rounded-xl text-xs font-bold text-foreground hover:bg-muted flex items-center gap-1.5"
                                >
                                    {selectedSubjectIds.length === currentList.length && currentList.length > 0 ? (
                                        <CheckSquare size={14} className="text-indigo-600 dark:text-indigo-400" />
                                    ) : (
                                        <Square size={14} />
                                    )}
                                    <span>Barchasini Belgilash</span>
                                </button>

                                {selectedSubjectIds.length > 0 && (
                                    <>
                                        <button
                                            onClick={() => handleBatchArchive(subTab === 'active')}
                                            className="px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-xl text-xs font-bold flex items-center gap-1.5"
                                        >
                                            {subTab === 'active' ? <Archive size={14} /> : <ArchiveRestore size={14} />}
                                            <span>{subTab === 'active' ? `${selectedSubjectIds.length} ta Arxivlash` : `${selectedSubjectIds.length} ta Tiklash`}</span>
                                        </button>

                                        <button
                                            onClick={handleBatchDelete}
                                            className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm"
                                        >
                                            <Trash2 size={14} />
                                            <span>{selectedSubjectIds.length} ta O'chirish</span>
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentList.map((subject, index) => {
                            const deckCards = flashcards.filter(c => 
                                c.subjectId === subject.id || 
                                (!c.subjectId && index === 0)
                            );
                            const dueCards = deckCards.filter(c => new Date(c.nextReviewDate) <= new Date());
                            const matchingPreset = PRESET_DECKS.find(p => {
                                const cleanTitle = getCleanTitle(p.title).toLowerCase();
                                const cleanSubName = subject.name.toLowerCase().trim();
                                return cleanSubName === p.title.toLowerCase().trim() ||
                                    cleanSubName.includes(cleanTitle) ||
                                    cleanTitle.includes(cleanSubName);
                            });

                            return (
                                <DeckCard
                                    key={subject.id}
                                    subject={subject}
                                    cardCount={deckCards.length}
                                    dueCount={dueCards.length}
                                    isSelected={selectedSubjectIds.includes(subject.id)}
                                    onToggleSelect={() => toggleSelectSubject(subject.id)}
                                    onToggleArchive={() => updateSubject(subject.id, { isArchived: !subject.isArchived })}
                                    onDelete={async () => {
                                        if (window.confirm(`"${subject.name}" fani va uning barcha kartalarini o'chirasizmi?`)) {
                                            await deleteSubject(subject.id);
                                        }
                                    }}
                                    onAIGenerate={() => setAiSubjectId(subject.id)}
                                    onStudy={() => setActiveStudySubjectId(subject.id)}
                                    onPopulatePreset={matchingPreset ? () => handleImportPresetDeck(matchingPreset) : undefined}
                                    onExploreFolders={matchingPreset ? () => handleOpenDeckExplorer(matchingPreset) : undefined}
                                />
                            );
                        })}

                        {currentList.length === 0 && (
                            <div className="col-span-full flex flex-col items-center justify-center p-12 text-center glass-card rounded-3xl border-dashed">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                    {subTab === 'archived' ? <FolderArchive size={40} /> : <Book size={40} />}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {subTab === 'archived' ? "Arxivlangan to'plamlar yo'q" : "Fleshkartalar to'plami yo'q"}
                                </h3>
                                <p className="text-muted-foreground max-w-sm mb-8">
                                    {subTab === 'archived' 
                                        ? "Siz hali hech qanday to'plamni arxivga o'tkazmagansiz."
                                        : "O'zingiz fan qo'shing yoki Standart Kutubxonadan tayyor IELTS to'plamlarini saqlab oling."
                                    }
                                </p>
                                {subTab === 'active' && (
                                    <div className="flex gap-3">
                                        <Button onClick={() => setActiveTab('library')} variant="secondary" className="px-6 font-bold">
                                            <Library size={18} className="mr-2" /> Standart Kutubxona
                                        </Button>
                                        <Link to="/subjects">
                                            <Button className="px-6 font-bold">
                                                <Plus size={18} className="mr-2" /> Fan Qo'shish
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeTab === 'library' && (
                <div className="space-y-6">
                    {isAdmin && (
                        <div className="p-4 bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-indigo-500/10 border border-rose-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="space-y-0.5">
                                <h3 className="text-sm font-black text-foreground flex items-center gap-2">
                                    <Sparkles size={16} className="text-rose-500" /> Admin Albomlar va JSON Boshqaruvi
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    N3/N4 darajalaridagi 500+ cardli to'plamlarni 50 tadan bo'lib, 1-Qism, 2-Qism albomlari tuzish yoki yangi JSON yuklash.
                                </p>
                            </div>
                            <Button
                                onClick={() => setIsAlbumCreatorOpen(true)}
                                className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white font-black text-xs rounded-xl shadow-md shrink-0 flex items-center gap-2"
                            >
                                <Plus size={16} /> ➕ Yangi Albom Yaratish (JSON Import)
                            </Button>
                        </div>
                    )}

                    {/* Standalone Custom Albums Section */}
                    {standaloneGroups.length > 0 && (
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center justify-between pb-2 border-b border-border/50">
                                <div>
                                    <h3 className="text-base font-black text-foreground flex items-center gap-2">
                                        <Sparkles size={18} className="text-emerald-500" />
                                        Maxsus & Mustaqil Albomlar ({standaloneGroups.length})
                                    </h3>
                                    <p className="text-xs text-muted-foreground">Admin tomonidan yaratilgan mustaqil to'plamlar va ularning jildlari</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {standaloneGroups.map(group => (
                                    <StandaloneDeckCard
                                        key={group.baseTitle}
                                        group={group}
                                        isAdmin={isAdmin}
                                        userSubjectNames={subjects.map(s => s.name)}
                                        isImporting={isImportingPreset}
                                        onImportPart={handleImportStandaloneAlbum}
                                        onImportAllParts={handleImportAllGroupParts}
                                        onAddNextPart={(grp, nextPNum) => {
                                            setAlbumCreatorProps({
                                                initialTitle: grp.baseTitle,
                                                initialPartName: `${nextPNum}-Qism`,
                                                initialBadge: grp.level || 'MUSTAQIL',
                                                initialMode: 'custom_standalone'
                                            });
                                            setIsAlbumCreatorOpen(true);
                                        }}
                                        onDeletePart={handleDeleteStandaloneAlbum}
                                        onDeleteGroup={handleDeleteGroup}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Standard Level Library */}
                    <div className="space-y-4 pt-2">
                        <div className="pb-2 border-b border-border/50">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Standart Darajalar Kutubxonasi
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        JLPT va IELTS uchun tayyor 100 tadan bo'lingan jildlar to'plami
                                    </p>
                                </div>
                                
                                {/* Filter Chips */}
                                <div className="flex items-center gap-1.5 p-1 bg-muted/60 border border-border rounded-xl self-start sm:self-center">
                                    <button
                                        type="button"
                                        onClick={() => setLibraryFilter('primary')}
                                        className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                                            libraryFilter === 'primary'
                                                ? 'bg-primary text-primary-foreground shadow-xs'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        ⭐ Asosiy ({primaryLanguage === 'ja' ? '🇯🇵' : '🇬🇧'})
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setLibraryFilter('ja')}
                                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                            libraryFilter === 'ja'
                                                ? 'bg-rose-600 text-white shadow-xs'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        🇯🇵 JLPT
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setLibraryFilter('en')}
                                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                            libraryFilter === 'en'
                                                ? 'bg-indigo-600 text-white shadow-xs'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        🇬🇧 IELTS
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setLibraryFilter('all')}
                                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                            libraryFilter === 'all'
                                                ? 'bg-background text-foreground shadow-xs'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        Barchasi
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...PRESET_DECKS]
                                .filter(deck => {
                                    const isJa = deck.level.startsWith('JLPT');
                                    if (libraryFilter === 'primary') {
                                        return primaryLanguage === 'ja' ? isJa : !isJa;
                                    }
                                    if (libraryFilter === 'ja') return isJa;
                                    if (libraryFilter === 'en') return !isJa;
                                    return true;
                                })
                                .sort((a, b) => {
                                    const aIsJa = a.level.startsWith('JLPT');
                                    const bIsJa = b.level.startsWith('JLPT');
                                    if (primaryLanguage === 'ja') {
                                        if (aIsJa && !bIsJa) return -1;
                                        if (!aIsJa && bIsJa) return 1;
                                    } else {
                                        if (!aIsJa && bIsJa) return -1;
                                        if (aIsJa && !bIsJa) return 1;
                                    }
                                    return 0;
                                }).map(deck => {
                                const matchingSubject = findMatchingSubject(deck);
                                return (
                                    <PresetDeckCard
                                        key={deck.id}
                                        deck={deck}
                                        isAdded={!!matchingSubject}
                                        isAdmin={isAdmin}
                                        userSubjectNames={subjects.map(s => s.name)}
                                        onImport={handleImportPresetDeck}
                                        onImportPart={handleImportDeckPart}
                                        onRemove={handleRemovePresetDeck}
                                        onAdminAudit={deckToAudit => setAuditingDeck(deckToAudit)}
                                        onAdminAddNextPart={() => {
                                            setAlbumCreatorProps({
                                                initialTitle: deck.title,
                                                initialBadge: deck.level,
                                                initialMode: 'json_upload'
                                            });
                                            setIsAlbumCreatorOpen(true);
                                        }}
                                        onOpenFolderExplorer={(d, p) => {
                                            setExplorerDeck(d);
                                            setExplorerParts(p);
                                        }}
                                        onUpgradeClick={() => navigate('/settings')}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {aiSubjectId && (
                <AIGeneratorModal
                    isOpen={true}
                    onClose={() => setAiSubjectId(null)}
                    subjectId={aiSubjectId === 'global' ? undefined : aiSubjectId}
                />
            )}

            <AdminFlashcardManager
                isOpen={isAdminModalOpen}
                onClose={() => setIsAdminModalOpen(false)}
            />

            <AdminPresetAuditorModal
                isOpen={!!auditingDeck}
                deck={auditingDeck}
                onClose={() => setAuditingDeck(null)}
            />

            <AdminAlbumCreatorModal
                isOpen={isAlbumCreatorOpen}
                initialTitle={albumCreatorProps.initialTitle}
                initialPartName={albumCreatorProps.initialPartName}
                initialBadge={albumCreatorProps.initialBadge}
                initialMode={albumCreatorProps.initialMode}
                onClose={() => {
                    setIsAlbumCreatorOpen(false);
                    setAlbumCreatorProps({});
                    loadStandaloneAlbums();
                }}
                onAlbumCreated={() => {
                    loadStandaloneAlbums();
                }}
            />

            <LevelFolderExplorerModal
                isOpen={!!explorerDeck}
                deck={explorerDeck}
                parts={explorerParts}
                userSubjectNames={subjects.map(s => s.name)}
                isAdmin={isAdmin}
                onClose={() => setExplorerDeck(null)}
                onImportPart={handleImportDeckPart}
                onAdminAddNextPart={() => {
                    setExplorerDeck(null);
                    setIsAlbumCreatorOpen(true);
                }}
            />

            <ImportModal
                isOpen={isImportModalOpen}
                onClose={() => setImportModalOpen(false)}
                subjects={subjects}
                onImport={onImport}
                isImporting={isImporting}
                downloadTemplate={downloadTemplate}
            />

            <ExtractVocabModal
                isOpen={isExtractModalOpen}
                onClose={() => setIsExtractModalOpen(false)}
                subjects={subjects}
            />

            <AiDocumentFlashcardModal
                isOpen={isDocGeneratorOpen}
                onClose={() => setIsDocGeneratorOpen(false)}
                subjects={subjects}
            />

            {activeStudySubjectId && (
                <FlashcardStudySession
                    subjectId={activeStudySubjectId}
                    onClose={() => {
                        setActiveStudySubjectId(null);
                        setSearchParams({});
                    }}
                />
            )}
        </div>
    );
};

export default DecksPage;

