import { Trash, AlertTriangle, X, Download, Upload, FileText, FileSpreadsheet } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '../ui/Button';
import { useStudyData } from '../../context/StudyPlannerContext';
import { exportImportService } from '../../services/ExportImportService';

interface DataManagementSectionProps {
    onClearData: () => Promise<void>;
}

const DataManagementSection: React.FC<DataManagementSectionProps> = ({ onClearData }) => {
    const { user, subjects, refreshData } = useStudyData();
    const [showClearModal, setShowClearModal] = useState(false);
    const [showImportFlashcardsModal, setShowImportFlashcardsModal] = useState(false);
    const [selectedSubjectId, setSelectedSubjectId] = useState('');
    const [isExporting, setIsExporting] = useState(false);
    const [isImporting, setIsImporting] = useState(false);

    const jsonFileInputRef = useRef<HTMLInputElement>(null);
    const csvTasksInputRef = useRef<HTMLInputElement>(null);
    const csvFlashcardsInputRef = useRef<HTMLInputElement>(null);

    const handleClear = async () => {
        await onClearData();
        setShowClearModal(false);
        alert("Barcha ma'lumotlar tozalandi.");
    };

    const handleExportJSON = async () => {
        if (!user) return;
        setIsExporting(true);
        try {
            await exportImportService.exportToJSON(user.id);
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Xatolik yuz berdi.');
        } finally {
            setIsExporting(false);
        }
    };

    const handleImportJSON = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || !e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        setIsImporting(true);
        try {
            const success = await exportImportService.importFromJSON(file, user.id);
            if (success) {
                await refreshData();
                alert("Ma'lumotlar muvaffaqiyatli import qilindi! 🚀");
            }
        } catch (err) {
            alert(err instanceof Error ? err.message : "Faylni import qilishda xatolik yuz berdi.");
        } finally {
            setIsImporting(false);
            if (jsonFileInputRef.current) jsonFileInputRef.current.value = '';
        }
    };

    const handleExportTasksCSV = async () => {
        if (!user) return;
        setIsExporting(true);
        try {
            await exportImportService.exportTasksToCSV(user.id);
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Xatolik yuz berdi.');
        } finally {
            setIsExporting(false);
        }
    };

    const handleImportTasksCSV = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || !e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        setIsImporting(true);
        try {
            const success = await exportImportService.importTasksFromCSV(file, user.id);
            if (success) {
                await refreshData();
                alert("Vazifalar muvaffaqiyatli import qilindi! 📋");
            }
        } catch (err) {
            alert(err instanceof Error ? err.message : "Vazifalarni import qilishda xatolik yuz berdi.");
        } finally {
            setIsImporting(false);
            if (csvTasksInputRef.current) csvTasksInputRef.current.value = '';
        }
    };

    const handleExportFlashcardsCSV = async () => {
        if (!user) return;
        setIsExporting(true);
        try {
            await exportImportService.exportFlashcardsToCSV(user.id);
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Xatolik yuz berdi.');
        } finally {
            setIsExporting(false);
        }
    };

    const handleImportFlashcardsCSV = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || !e.target.files || e.target.files.length === 0 || !selectedSubjectId) return;
        const file = e.target.files[0];
        setIsImporting(true);
        try {
            const success = await exportImportService.importFlashcardsFromCSV(file, user.id, selectedSubjectId);
            if (success) {
                await refreshData();
                setShowImportFlashcardsModal(false);
                alert("Flashcardlar muvaffaqiyatli import qilindi! 🧠");
            }
        } catch (err) {
            alert(err instanceof Error ? err.message : "Flashcardlarni import qilishda xatolik yuz berdi.");
        } finally {
            setIsImporting(false);
            if (csvFlashcardsInputRef.current) csvFlashcardsInputRef.current.value = '';
        }
    };

    return (
        <>
            <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm">
                    MA'LUMOTLARN BOSHQARISH VA ZAXIRALASH
                </div>

                {/* JSON Backup & Restore */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                                <FileText size={20} />
                            </div>
                            <div>
                                <span className="font-semibold block text-gray-900 dark:text-white">To'liq zaxira (JSON)</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">Barcha fanlar, vazifalar va statistikani zaxiralash</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="file"
                                accept=".json"
                                ref={jsonFileInputRef}
                                onChange={handleImportJSON}
                                className="hidden"
                            />
                            <Button
                                variant="secondary"
                                onClick={() => jsonFileInputRef.current?.click()}
                                disabled={isImporting || isExporting}
                                className="px-3 py-1.5 text-xs flex items-center gap-1"
                            >
                                <Upload size={14} /> Import
                            </Button>
                            <Button
                                variant="default"
                                onClick={handleExportJSON}
                                disabled={isImporting || isExporting}
                                className="px-3 py-1.5 text-xs flex items-center gap-1"
                            >
                                <Download size={14} /> Eksport
                            </Button>
                        </div>
                    </div>
                </div>

                {/* CSV Tasks Backup & Restore */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                                <FileSpreadsheet size={20} />
                            </div>
                            <div>
                                <span className="font-semibold block text-gray-900 dark:text-white">Vazifalar (CSV)</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">Vazifalar ro'yxatini jadval ko'rinishida eksport/import qilish</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="file"
                                accept=".csv"
                                ref={csvTasksInputRef}
                                onChange={handleImportTasksCSV}
                                className="hidden"
                            />
                            <Button
                                variant="secondary"
                                onClick={() => csvTasksInputRef.current?.click()}
                                disabled={isImporting || isExporting}
                                className="px-3 py-1.5 text-xs flex items-center gap-1"
                            >
                                <Upload size={14} /> Import
                            </Button>
                            <Button
                                variant="default"
                                onClick={handleExportTasksCSV}
                                disabled={isImporting || isExporting}
                                className="px-3 py-1.5 text-xs flex items-center gap-1"
                            >
                                <Download size={14} /> Eksport
                            </Button>
                        </div>
                    </div>
                </div>

                {/* CSV Flashcards Backup & Restore */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                                <FileSpreadsheet size={20} />
                            </div>
                            <div>
                                <span className="font-semibold block text-gray-900 dark:text-white">Flashcardlar (CSV)</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">Flashcardlar to'plamini jadval ko'rinishida boshqarish</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="file"
                                accept=".csv"
                                ref={csvFlashcardsInputRef}
                                onChange={handleImportFlashcardsCSV}
                                className="hidden"
                            />
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    if (subjects.length === 0) {
                                        alert("Avval kamida bitta fan yaratishingiz kerak.");
                                        return;
                                    }
                                    setSelectedSubjectId(subjects[0].id);
                                    setShowImportFlashcardsModal(true);
                                }}
                                disabled={isImporting || isExporting}
                                className="px-3 py-1.5 text-xs flex items-center gap-1"
                            >
                                <Upload size={14} /> Import
                            </Button>
                            <Button
                                variant="default"
                                onClick={handleExportFlashcardsCSV}
                                disabled={isImporting || isExporting}
                                className="px-3 py-1.5 text-xs flex items-center gap-1"
                            >
                                <Download size={14} /> Eksport
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Clear Data */}
                <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
                            <Trash size={20} />
                        </div>
                        <div>
                            <span className="font-semibold block text-red-600 dark:text-red-400">Barcha ma'lumotlarni tozalash</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Barcha ma'lumotlarni butunlay o'chirib yuborish</span>
                        </div>
                    </div>
                    <Button variant="destructive" onClick={() => setShowClearModal(true)} className="px-3 py-1.5 text-xs">
                        Tozalash
                    </Button>
                </div>
            </div>

            {/* Clear Data Modal */}
            {showClearModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
                        <button
                            onClick={() => setShowClearModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-4">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Haqiqatan ham o'chirmoqchimisiz?</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Bu amalni ortga qaytarib bo'lmaydi. Barcha vazifalar, fanlar va statistikalar o'chib ketadi.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Button variant="secondary" onClick={() => setShowClearModal(false)} className="flex-1">
                                Bekor qilish
                            </Button>
                            <Button variant="destructive" onClick={handleClear} className="flex-1">
                                O'chirish
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Import Flashcards Subject Select Modal */}
            {showImportFlashcardsModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 relative">
                        <button
                            onClick={() => setShowImportFlashcardsModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col mb-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fanni tanlang</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                Import qilinadigan flashcardlar qaysi fanga biriktirilsin?
                            </p>
                            <select
                                value={selectedSubjectId}
                                onChange={(e) => setSelectedSubjectId(e.target.value)}
                                className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            >
                                {subjects.map((sub) => (
                                    <option key={sub.id} value={sub.id}>
                                        {sub.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-3">
                            <Button variant="secondary" onClick={() => setShowImportFlashcardsModal(false)} className="flex-1">
                                Bekor qilish
                            </Button>
                            <Button
                                variant="default"
                                onClick={() => csvFlashcardsInputRef.current?.click()}
                                className="flex-1"
                            >
                                Faylni tanlash
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DataManagementSection;
