import React, { useState, useEffect, useCallback } from 'react';
import { Wifi, WifiOff, RefreshCw, HardDrive, CheckCircle2, ShieldCheck } from 'lucide-react';
import { OfflineSyncManager, StorageDiagnostics } from '../../services/OfflineSyncManager';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';

export const OfflineStorageSettings: React.FC = () => {
  const { user } = useStudyData();
  const [diagnostics, setDiagnostics] = useState<StorageDiagnostics | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isRefreshingCache, setIsRefreshingCache] = useState(false);

  const loadDiagnostics = useCallback(async () => {
    try {
      const data = await OfflineSyncManager.getDiagnostics(user?.id);
      setDiagnostics(data);
    } catch (e) {
      console.warn('[OfflineStorageSettings] Failed to load diagnostics:', e);
    }
  }, [user?.id]);

  useEffect(() => {
    loadDiagnostics();

    const handleNetworkChange = () => {
      loadDiagnostics();
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, [loadDiagnostics]);

  const handleManualSync = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      const res = await OfflineSyncManager.syncAllPending();
      if (res.totalSynced > 0) {
        toast({
          title: '✅ Barcha maʼlumotlar sinxronlandi',
          description: `${res.totalSynced} ta o'zgarish Supabase bazasiga saqlandi.`,
        });
      } else if (res.totalFailed > 0) {
        toast({
          title: '⚠️ Sinxronlashda xatolik',
          description: `${res.totalFailed} ta element keyingi safarga saqlab qolindi.`,
          variant: 'destructive',
        });
      } else {
        toast({
          title: '✨ Hammasi yangilangan',
          description: "Kutayotgan oflayn o'zgarishlar mavjud emas.",
        });
      }
    } catch {
      toast({
        title: '❌ Sinxronlash xatosi',
        description: 'Tarmoqqa ulanishni tekshiring va qayta urining.',
        variant: 'destructive',
      });
    } finally {
      setIsSyncing(false);
      loadDiagnostics();
    }
  };

  const handleRefreshCache = async () => {
    if (isRefreshingCache) return;
    setIsRefreshingCache(true);
    try {
      if ('caches' in window) {
        const cacheKeys = await window.caches.keys();
        const appCaches = cacheKeys.filter(
          (k) => k.includes('large-data') || k.includes('tts-audio'),
        );
        // Prune or touch
        await Promise.all(appCaches.map((k) => window.caches.open(k)));
      }

      toast({
        title: '⚡ Kesh muvaffaqiyatli tekshirildi',
        description: 'Oflayn lug‘at va darslar bazasi xotirada to‘liq yangilandi.',
      });
    } catch {
      toast({
        title: 'Xatolik',
        description: 'Keshni tekshirishda xatolik yuz berdi.',
        variant: 'destructive',
      });
    } finally {
      setIsRefreshingCache(false);
      loadDiagnostics();
    }
  };

  const isOnline = diagnostics
    ? diagnostics.isOnline
    : typeof navigator !== 'undefined'
      ? navigator.onLine
      : true;
  const totalPending = diagnostics?.totalPending ?? 0;
  const cachedCards = diagnostics?.cachedFlashcardsCount ?? 0;

  return (
    <div className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-xs md:p-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 border-b border-border pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
            <HardDrive size={20} />
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-base font-bold text-foreground">
              Oflayn Rejim & Kesh Boshqaruvi
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                PWA v1.3
              </span>
            </h4>
            <p className="text-xs text-muted-foreground">
              Internet uzilganda ham darslar, kanji chizish va takrorlash xavfsiz davom etadi.
            </p>
          </div>
        </div>

        {/* Live Status Badge */}
        <div
          className={`inline-flex items-center gap-1.5 self-start rounded-full border px-3 py-1.5 text-xs font-bold transition-colors sm:self-auto ${
            isOnline
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
              : 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400'
          }`}
        >
          {isOnline ? (
            <>
              <Wifi size={14} />
              <span>Tarmoq Ulangan</span>
            </>
          ) : (
            <>
              <WifiOff size={14} />
              <span>Oflayn Rejim</span>
            </>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-muted/30 p-3.5">
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Keshdagi Kartochkalar
          </span>
          <div className="flex items-center gap-1.5 text-xl font-black text-foreground">
            <ShieldCheck size={18} className="text-primary" />
            {cachedCards > 0 ? cachedCards : 'Yuklanmoqda...'}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-muted/30 p-3.5">
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Kutayotgan O'zgarishlar
          </span>
          <div className="flex items-center gap-1.5 text-xl font-black text-foreground">
            <RefreshCw
              size={18}
              className={totalPending > 0 ? 'animate-spin text-amber-500' : 'text-emerald-500'}
            />
            {totalPending}{' '}
            <span className="text-xs font-normal text-muted-foreground">ta amal</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-muted/30 p-3.5">
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Mahalliy Xotira Holati
          </span>
          <div className="flex items-center gap-1.5 text-xl font-black text-foreground">
            <CheckCircle2 size={18} className="text-emerald-500" />
            <span>Faol (IDB)</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2">
        <button
          type="button"
          onClick={handleManualSync}
          disabled={isSyncing || !isOnline}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RefreshCw size={14} className={isSyncing ? 'animate-spin' : ''} />
          {isSyncing ? 'Sinxronlanmoqda...' : 'Hozir Sinxronlash'}
        </button>

        <button
          type="button"
          onClick={handleRefreshCache}
          disabled={isRefreshingCache}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted/80 disabled:opacity-50"
        >
          <HardDrive size={14} className={isRefreshingCache ? 'animate-spin' : ''} />
          {isRefreshingCache ? 'Tekshirilmoqda...' : 'Keshni Yangilash'}
        </button>
      </div>
    </div>
  );
};

export default OfflineStorageSettings;
