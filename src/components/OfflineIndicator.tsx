import React, { useState, useEffect, useCallback } from 'react';
import { WifiOff, Wifi, RefreshCw, CheckCircle2 } from 'lucide-react';
import { OfflineSyncManager } from '../services/OfflineSyncManager';
import { toast } from '../hooks/use-toast';

const OfflineIndicator: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [pendingCount, setPendingCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [justSynced, setJustSynced] = useState(false);

  // Fetch total pending count across all domains periodically
  const refreshPendingCount = useCallback(async () => {
    try {
      const count = await OfflineSyncManager.getOverallPendingCount();
      setPendingCount(count);
    } catch {}
  }, []);

  const triggerSync = useCallback(async () => {
    if (isSyncing || !navigator.onLine) return;
    setIsSyncing(true);
    try {
      const result = await OfflineSyncManager.syncAllPending();
      if (result.totalSynced > 0) {
        setJustSynced(true);
        toast({
          title: '✅ Sinxronlash muvaffaqiyatli',
          description: `${result.totalSynced} ta oflayn o'zgarish bazaga saqlandi.`,
        });
        setTimeout(() => setJustSynced(false), 4000);
      }
    } catch {
    } finally {
      setIsSyncing(false);
      refreshPendingCount();
    }
  }, [isSyncing, refreshPendingCount]);

  useEffect(() => {
    refreshPendingCount();

    const handleOnline = async () => {
      setIsOffline(false);
      const count = await OfflineSyncManager.getOverallPendingCount();
      if (count > 0) {
        await triggerSync();
      }
    };

    const handleOffline = () => {
      setIsOffline(true);
      refreshPendingCount();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Refresh pending count every 20s while offline
    const interval = setInterval(refreshPendingCount, 20000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, [refreshPendingCount, triggerSync]);

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
      <div className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-3 bg-amber-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md animate-in slide-in-from-top-2">
        {isSyncing ? (
          <>
            <RefreshCw size={16} className="animate-spin" />
            <span>Sinxronlanmoqda...</span>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <Wifi size={16} />
              <span>{pendingCount} ta o'zgarish sinxronlanishni kutmoqda</span>
            </div>
            <button
              onClick={triggerSync}
              className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold transition-all hover:bg-white/30"
            >
              Sinxronlash
            </button>
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
          <span className="ml-1.5 rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
            {pendingCount} ta o'zgarish kutmoqda
          </span>
        )}
      </span>
    </div>
  );
};

export default OfflineIndicator;
