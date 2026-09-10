import React, { useState, useEffect, useCallback } from 'react';
import { WifiOff, Wifi, RefreshCw, CheckCircle2 } from 'lucide-react';
import { FlashcardOfflineSync } from '../services/FlashcardOfflineSync';
import { toast } from '../hooks/use-toast';

const OfflineIndicator: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [pendingCount, setPendingCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [justSynced, setJustSynced] = useState(false);

  // Fetch pending count periodically
  const refreshPendingCount = useCallback(async () => {
    try {
      const count = await FlashcardOfflineSync.getPendingCount();
      setPendingCount(count);
    } catch {}
  }, []);

  useEffect(() => {
    refreshPendingCount();

    const handleOnline = async () => {
      setIsOffline(false);

      // Auto-sync when coming back online
      const count = await FlashcardOfflineSync.getPendingCount();
      if (count > 0) {
        setIsSyncing(true);
        try {
          const result = await FlashcardOfflineSync.syncPending();
          if (result.synced > 0) {
            setJustSynced(true);
            toast({
              title: '✅ Sinxronlash muvaffaqiyatli',
              description: `${result.synced} ta oflayn o'zgarish bazaga saqlandi.`,
            });
            setTimeout(() => setJustSynced(false), 4000);
          }
        } catch {
        } finally {
          setIsSyncing(false);
          refreshPendingCount();
        }
      }
    };

    const handleOffline = () => {
      setIsOffline(true);
      refreshPendingCount();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Refresh pending count every 30s while offline
    const interval = setInterval(refreshPendingCount, 30000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, [refreshPendingCount]);

  // Success toast after reconnection sync
  if (justSynced && !isOffline) {
    return (
      <div className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-2 bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md animate-in slide-in-from-top-2">
        <CheckCircle2 size={16} />
        <span>Internet qayta ulandi — barcha o'zgarishlar sinxronlandi ✓</span>
      </div>
    );
  }

  // Nothing to show when online with no pending items
  if (!isOffline && pendingCount === 0) return null;

  // Online but has pending sync items
  if (!isOffline && pendingCount > 0) {
    return (
      <div className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-2 bg-amber-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md animate-in slide-in-from-top-2">
        {isSyncing ? (
          <>
            <RefreshCw size={16} className="animate-spin" />
            <span>Sinxronlanmoqda...</span>
          </>
        ) : (
          <>
            <Wifi size={16} />
            <span>{pendingCount} ta o'zgarish sinxronlanishni kutmoqda</span>
          </>
        )}
      </div>
    );
  }

  // Offline state
  return (
    <div className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-2 bg-yellow-500/95 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm animate-in slide-in-from-top-2">
      <WifiOff size={16} />
      <span>
        Oflayn rejim
        {pendingCount > 0 && (
          <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
            {pendingCount} ta o'zgarish kutmoqda
          </span>
        )}
      </span>
    </div>
  );
};

export default OfflineIndicator;
