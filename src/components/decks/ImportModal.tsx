import { X, Download, FileText } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '../ui/Button';
import { Subject } from '../../types';


interface ImportModalProps {
    isOpen: boolean;
    onClose: () => void;
    subjects: Subject[];
    onImport: (subjectId: string, file: File) => Promise<void>;
    isImporting: boolean;
    downloadTemplate: () => void;
}

const ImportModal: React.FC<ImportModalProps> = ({
    isOpen,
    onClose,
    subjects,
    onImport,
    isImporting,
    downloadTemplate
}) => {
    const [importSubjectId, setImportSubjectId] = useState('');
    const [importFile, setImportFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!importSubjectId || !importFile) return;
        await onImport(importSubjectId, importFile);
        setImportFile(null);
        setImportSubjectId('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                    <X size={24} />
                </button>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">JSON orqali yuklash</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    Katta hajmdagi ma'lumotlarni tezkor yuklash uchun.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Qaysi fanga?</label>
                        <select
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={importSubjectId}
                            onChange={(e) => setImportSubjectId(e.target.value)}
                            required
                        >
                            <option value="">Fanni tanlang...</option>
                            {subjects.filter(s => !s.isArchived).map(s => (
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
    );
};

export default ImportModal;
