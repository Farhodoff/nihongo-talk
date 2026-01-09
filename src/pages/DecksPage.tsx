import { Book, Play, Plus, Sparkles, Upload, Download, X, FileText } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AIGeneratorModal from '../components/AIGeneratorModal';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';

const DecksPage: React.FC = () => {
    const { subjects, flashcards, importFlashcards } = useStudyData();
    const [aiSubjectId, setAiSubjectId] = useState<string | null>(null);
    const [isImportModalOpen, setImportModalOpen] = useState(false);
    const [importSubjectId, setImportSubjectId] = useState('');
    const [importFile, setImportFile] = useState<File | null>(null);
    const [isImporting, setIsImporting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!importSubjectId || !importFile) return;

        setIsImporting(true);
        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const json = JSON.parse(event.target?.result as string);
                if (!Array.isArray(json)) throw new Error("JSON must be an array");

                // Validate structure roughly
                if (json.length > 0 && (!json[0].front || !json[0].back)) {
                    throw new Error("Invalid JSON structure. Needs 'front' and 'back' fields.");
                }

                const success = await importFlashcards(importSubjectId, json);
                if (success) {
                    alert("Muvaffaqiyatli yuklandi!");
                    setImportModalOpen(false);
                    setImportFile(null);
                    setImportSubjectId('');
                } else {
                    alert("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
                }
            } catch (err) {
                console.error(err);
                alert("JSON fayl xato formatda! Iltimos, namunani tekshiring.");
            } finally {
                setIsImporting(false);
            }
        };
        reader.readAsText(importFile);
    };

    const downloadTemplate = () => {
        const template = [
            {
                "front": "Mizu",
                "back": "Suv",
                "example": "Mizu o nomimasu (Suv ichaman)"
            },
            {
                "front": "Hon",
                "back": "Kitob",
                "example": "Hon o yomimasu (Kitob o'qiyman)"
            }
        ];
        const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'flashcards_template.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fleshkartalar</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">To'plamlarni takrorlang.</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => setImportModalOpen(true)}
                        className="text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    >
                        <Upload size={20} className="mr-2" /> JSON Yuklash
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setAiSubjectId('global')}
                        className="text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
                    >
                        <Sparkles size={20} className="mr-2" /> AI Yaratish
                    </Button>
                    <Link to="/flashcards/new">
                        <Button>
                            <Plus size={20} className="mr-2" /> Qo'lda Qo'shish
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map(subject => {
                    const deckCards = flashcards.filter(c => c.subjectId === subject.id);
                    const dueCards = deckCards.filter(c => new Date(c.nextReviewDate) <= new Date());

                    return (
                        <div key={subject.id} className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                                    <Book size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{subject.name}</h3>
                                    <p className="text-sm text-gray-500">{deckCards.length} kartalar</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Hozirgi</span>
                                    <span className="font-bold text-indigo-600">{dueCards.length}</span>
                                </div>

                                <div className="pt-4 flex gap-2">
                                    <Link to={`/flashcards/study/${subject.id}`} className="flex-1">
                                        <Button className="w-full flex justify-center items-center gap-2" disabled={dueCards.length === 0}>
                                            <Play size={16} /> O'rganish
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="secondary"
                                        className="px-3 text-indigo-600"
                                        onClick={() => setAiSubjectId(subject.id)}
                                        title="AI bilan yaratish"
                                    >
                                        <Sparkles size={20} />
                                    </Button>
                                    <Link to={`/flashcards/new?subjectId=${subject.id}`}>
                                        <Button variant="secondary" className="px-3">
                                            <Plus size={20} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {subjects.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-[#1f2937] rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mb-6 text-indigo-500">
                            <Book size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fleshkartalar to'plami yo'q</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8">
                            Fleshkarta yaratish uchun avval fan qo'shishingiz kerak.
                        </p>
                        <Link to="/subjects">
                            <Button className="px-8">
                                <Plus size={20} className="mr-2" /> Fan Qo'shish
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

            {aiSubjectId && (
                <AIGeneratorModal
                    isOpen={true}
                    onClose={() => setAiSubjectId(null)}
                    subjectId={aiSubjectId === 'global' ? undefined : aiSubjectId}
                />
            )}

            {isImportModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 relative">
                        <button
                            onClick={() => setImportModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">JSON orqali yuklash</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                            Katta hajmdagi ma'lumotlarni tezkor yuklash uchun.
                        </p>

                        <form onSubmit={handleFileUpload} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Qaysi fanga?</label>
                                <select
                                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={importSubjectId}
                                    onChange={(e) => setImportSubjectId(e.target.value)}
                                    required
                                >
                                    <option value="">Fanni tanlang...</option>
                                    {subjects.map(s => (
                                        <option key={s.id} value={s.id}>{s.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">JSON Fayl</label>
                                <div
                                    className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept=".json"
                                        onChange={(e) => setImportFile(e.target.files?.[0] || null)}
                                    />
                                    <FileText className="mx-auto text-gray-400 mb-2" size={32} />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {importFile ? importFile.name : "Faylni tanlang yoki shu yerga tashlang"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm">
                                <button type="button" onClick={downloadTemplate} className="text-indigo-600 hover:underline flex items-center gap-1">
                                    <Download size={14} /> Namuna yuklab olish
                                </button>
                            </div>

                            <Button type="submit" disabled={isImporting} className="w-full">
                                {isImporting ? 'Yuklanmoqda...' : 'Yuklash'}
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DecksPage;
