import { Trash, AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

interface DataManagementSectionProps {
    onClearData: () => Promise<void>;
}

const DataManagementSection: React.FC<DataManagementSectionProps> = ({ onClearData }) => {
    const [showClearModal, setShowClearModal] = useState(false);

    const handleClear = async () => {
        await onClearData();
        setShowClearModal(false);
        alert("Barcha ma'lumotlar tozalandi.");
    };

    return (
        <>
            <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm">
                    MA'LUMOTLARNI BOSHQARISH
                </div>

                <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
                            <Trash size={20} />
                        </div>
                        <span className="font-medium text-red-600">Barcha ma'lumotlarni tozalash</span>
                    </div>
                    <Button variant="danger" onClick={() => setShowClearModal(true)} className="px-3 py-1 text-sm">
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
                            <Button variant="danger" onClick={handleClear} className="flex-1">
                                O'chirish
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DataManagementSection;
