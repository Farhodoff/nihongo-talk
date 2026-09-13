import React, { useState, useEffect } from 'react';
import { RefreshCw, X } from 'lucide-react';
import { VersionUpdateService, AppVersionInfo } from '../../services/VersionUpdateService';

export const ReloadPrompt: React.FC = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [versionInfo, setVersionInfo] = useState<AppVersionInfo | null>(null);
  const [countdown, setCountdown] = useState(3);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // 1. VersionUpdateService orqali yangi deploy aniqlanganda
    const unsubscribe = VersionUpdateService.onUpdateAvailable((info) => {
      setVersionInfo(info);
      setShowUpdate(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!showUpdate || isUpdating) return;

    // 3 soniyadan keyin avtomatik yangilash
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleUpdateNow();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showUpdate, isUpdating]);

  const handleUpdateNow = async () => {
    setIsUpdating(true);
    await VersionUpdateService.applyUpdate();
  };

  const handleDismiss = () => {
    setShowUpdate(false);
  };

  if (!showUpdate) return null;

  return (
    <aside
      aria-label="Ilova yangilanishi"
      className="fixed bottom-20 left-4 right-4 z-[100] duration-300 animate-in slide-in-from-bottom-6 md:bottom-8 md:left-auto md:right-8"
    >
      <div className="mx-auto flex max-w-md items-center gap-4 rounded-2xl border border-primary/20 bg-background/95 p-4 shadow-2xl backdrop-blur-md dark:border-primary/30 md:p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
          <RefreshCw className={`h-6 w-6 ${isUpdating ? 'animate-spin' : ''}`} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h4 className="truncate text-sm font-bold text-foreground">
              Yangi funksiyalar qo'shildi! {versionInfo?.version ? `(v${versionInfo.version})` : ''}
            </h4>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {isUpdating
              ? 'Kesh tozalanib, yangilanmoqda...'
              : `Ilova ${countdown}s ichida avtomatik yangilanadi.`}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleUpdateNow}
            disabled={isUpdating}
            className="whitespace-nowrap rounded-xl bg-primary px-4 py-2 text-xs font-black text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
          >
            {isUpdating ? 'Yuklanmoqda...' : 'Yangilash'}
          </button>
          {!isUpdating && (
            <button
              onClick={handleDismiss}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Keyinroq"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ReloadPrompt;
