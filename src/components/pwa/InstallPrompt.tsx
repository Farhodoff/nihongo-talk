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
            <div className="bg-card border border-border rounded-3xl shadow-2xl p-6 text-foreground max-w-sm mx-auto relative overflow-hidden ring-1 ring-primary/20">
                {/* Background Decoration */}
                <div className="absolute -right-4 -top-4 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-4 -bottom-4 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-full transition-colors"
                >
                    <X size={18} />
                </button>

                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/25 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
                        <Smartphone className="text-primary w-7 h-7" />
                    </div>
                    
                    <div className="space-y-1">
                        <h3 className="text-lg font-display font-black text-foreground">Ilovani o'rnating</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            Nihongo Talk-ni mobil ilova sifatida ishlating va barcha imkoniyatlardan tezroq foydalaning.
                        </p>
                    </div>

                    {!isIOS ? (
                        <button
                            onClick={handleInstall}
                            className="w-full py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={16} />
                            O'rnatish
                        </button>
                    ) : (
                        <div className="bg-muted/60 border border-border rounded-2xl p-3.5 w-full text-xs flex items-start gap-2.5 text-left text-muted-foreground">
                            <ArrowUpCircle className="shrink-0 mt-0.5 text-primary" size={18} />
                            <p>
                                iOS uchun: <span className="font-bold text-foreground">"Share"</span> tugmasini bosing va <span className="font-bold text-foreground">"Add to Home Screen"</span>-ni tanlang.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstallPrompt;
