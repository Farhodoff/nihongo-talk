import React from 'react';
import { Sparkles, Trophy, ArrowRight, Star } from 'lucide-react';
import { useGamificationStore } from '../../stores/useGamificationStore';
import { useLanguage } from '../../context/LanguageContext';
import { getLevelInfo } from '../../utils/gamification';

export const LevelUpModal: React.FC = () => {
  const { pendingLevelUp, clearPendingLevelUp } = useGamificationStore();
  const { language } = useLanguage();

  if (!pendingLevelUp) return null;

  const isJa = language === 'ja';
  const isEn = language === 'en';
  const levelInfo = getLevelInfo(
    // Calculate approximate XP for title and perks
    pendingLevelUp.newLevel === 1
      ? 0
      : pendingLevelUp.newLevel === 2
        ? 500
        : pendingLevelUp.newLevel === 3
          ? 1500
          : pendingLevelUp.newLevel === 4
            ? 3000
            : pendingLevelUp.newLevel === 5
              ? 5000
              : pendingLevelUp.newLevel === 6
                ? 8000
                : pendingLevelUp.newLevel === 7
                  ? 12000
                  : 20000,
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="levelup-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-200 animate-in fade-in"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-amber-500/30 bg-card p-6 text-center shadow-2xl transition-all duration-300 animate-in zoom-in-95 sm:p-8">
        {/* Glow effect */}
        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />

        {/* Badge / Trophy Icon */}
        <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-500/40 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 text-4xl shadow-inner shadow-amber-500/20">
          <Trophy className="h-10 w-10 animate-bounce text-amber-500" />
        </div>

        {/* Subtitle */}
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Sparkles size={13} />
          <span>{isJa ? 'レベルアップ達成！' : isEn ? 'LEVEL UP ACHIEVED!' : 'DARAJA OSHDI!'}</span>
        </div>

        {/* Title */}
        <h3
          id="levelup-title"
          className="text-2xl font-black tracking-tight text-foreground sm:text-3xl"
        >
          {isJa
            ? `レベル ${pendingLevelUp.newLevel} に到達！`
            : isEn
              ? `Reached Level ${pendingLevelUp.newLevel}!`
              : `${pendingLevelUp.newLevel}-Darajaga Yetdingiz!`}
        </h3>

        {/* Rank title */}
        <p className="mt-2 text-base font-extrabold text-amber-600 dark:text-amber-400">
          "{pendingLevelUp.title}"
        </p>

        {/* Unlocked Perks */}
        {levelInfo.perks && levelInfo.perks.length > 0 && (
          <div className="mt-5 rounded-2xl border border-border/80 bg-muted/40 p-4 text-left">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
              <Star size={13} className="text-amber-500" />
              <span>
                {isJa
                  ? '新しくアンロックされた特典:'
                  : isEn
                    ? 'Newly Unlocked Perks:'
                    : 'Yangi ochilgan imtiyozlar:'}
              </span>
            </p>
            <ul className="space-y-1.5 text-xs font-semibold text-foreground/90">
              {levelInfo.perks.map((perk, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={clearPendingLevelUp}
          className="active:scale-98 mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-amber-500/25 transition-all hover:opacity-95"
        >
          <span>
            {isJa ? '学習を続ける' : isEn ? 'Continue Learning' : "O'qishni davom ettirish"}
          </span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
