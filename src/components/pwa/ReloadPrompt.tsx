import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X } from 'lucide-react';

const ReloadPrompt: React.FC = () => {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            if (r) {
                // Sahifaga kirganda va har 15 soniyada yangi versiya borligini avtomatik tekshirish
                r.update();
                setInterval(() => {
                    r.update();
                }, 15 * 1000);
            }
        },
        onRegisterError(error) {
            console.log('SW registration error', error);
        },
    });

    const close = () => {
        setOfflineReady(false);
        setNeedRefresh(false);
    };

    if (!offlineReady && !needRefresh) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[100] animate-in slide-in-from-bottom-10 duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 max-w-md mx-auto">
                <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                        <RefreshCw className={`w-6 h-6 text-indigo-600 dark:text-indigo-400 ${needRefresh ? 'animate-spin' : ''}`} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                            {offlineReady ? 'Offline ishlashga tayyor' : 'Yangi versiya mavjud'}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {offlineReady 
                                ? 'Ilova keshlandi va internetsiz ham ishlaydi.' 
                                : 'Ilovani yangilash uchun "Yangilash" tugmasini bosing.'}
                        </p>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                    {needRefresh && (
                        <button
                            onClick={() => updateServiceWorker(true)}
                            className="flex-1 md:flex-none px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors whitespace-nowrap"
                        >
                            Yangilash
                        </button>
                    )}
                    <button
                        onClick={() => close()}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        aria-label="Yopish"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReloadPrompt;
