import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X } from 'lucide-react';

export const PWAInstallPrompt: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    };

    if (!deferredPrompt || isDismissed) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-md bg-indigo-600 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-indigo-500/30 animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/20 rounded-xl">
                    <Smartphone size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-bold">Telefonga O'rnatish</h4>
                    <p className="text-xs text-indigo-100/90">
                        Dasturiy ilovani ekranga saqlab, tezkor foydalaning
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={handleInstallClick}
                    className="px-3 py-2 bg-white text-indigo-600 font-bold text-xs rounded-xl shadow hover:bg-indigo-50 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                    <Download size={14} />
                    O'rnatish
                </button>
                <button
                    onClick={() => setIsDismissed(true)}
                    className="p-1.5 text-indigo-200 hover:text-white rounded-lg transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default PWAInstallPrompt;
