import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

const OfflineIndicator: React.FC = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!isOffline) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-yellow-500 text-white px-4 py-1.5 flex items-center justify-center gap-2 text-sm font-medium shadow-md animate-in slide-in-from-top-2">
            <WifiOff size={16} />
            <span>Siz hozir oflayn rejimdasiz. O'zgarishlar qurilmada saqlanadi.</span>
        </div>
    );
};

export default OfflineIndicator;
