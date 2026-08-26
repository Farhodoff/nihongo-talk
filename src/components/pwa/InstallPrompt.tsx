import React, { useEffect, useState } from 'react';
import { Download, X, Smartphone, ArrowUpCircle } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

const InstallPrompt: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // iOS detection
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
        setIsIOS(isIOSDevice);

        // Standard PWA install prompt
        const handler = (e: Event) => {
            const installEvent = e as BeforeInstallPromptEvent;
            installEvent.preventDefault();
            setDeferredPrompt(installEvent);
            
            // Faqat bir marta ko'rsatish (yoki har 24 soatda)
            const lastShown = localStorage.getItem('pwa-prompt-last-shown');
            const now = Date.now();
            if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
                setShowPrompt(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handler);

        // iOS uchun "Add to Home Screen" ko'rsatmasi
        if (isIOSDevice && !('standalone' in window.navigator && (window.navigator as unknown as { standalone: boolean }).standalone)) {
             const lastShown = localStorage.getItem('pwa-prompt-last-shown');
             const now = Date.now();
             if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
                 setShowPrompt(true);
             }
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShowPrompt(false);
        }
        localStorage.setItem('pwa-prompt-last-shown', Date.now().toString());
    };

    const handleClose = () => {
        setShowPrompt(false);
        localStorage.setItem('pwa-prompt-last-shown', Date.now().toString());
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[101] animate-in slide-in-from-bottom-10 duration-500">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl shadow-2xl p-6 text-white max-w-sm mx-auto relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl" />
                
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                        <Smartphone className="text-indigo-600 w-8 h-8" />
                    </div>
                    
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">Ilovani o'rnating</h3>
                        <p className="text-indigo-100 text-sm">
                            Nihon Talk-ni mobil ilova sifatida ishlating va barcha imkoniyatlardan tezroq foydalaning.
                        </p>
                    </div>

                    {!isIOS ? (
                        <button
                            onClick={handleInstall}
                            className="w-full py-3 bg-white text-indigo-600 font-bold rounded-2xl shadow-md hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <Download size={18} />
                            O'rnatish
                        </button>
                    ) : (
                        <div className="bg-white/10 rounded-2xl p-4 w-full text-sm flex items-start gap-3 text-left">
                            <ArrowUpCircle className="shrink-0 mt-0.5" size={20} />
                            <p>
                                iOS uchun: <span className="font-bold">"Share"</span> tugmasini bosing va <span className="font-bold">"Add to Home Screen"</span>-ni tanlang.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstallPrompt;
