import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_REGISTRY, AchievementService } from '../../services/AchievementService';
import { DailyQuestService } from '../../services/DailyQuestService';
import { useGamificationStore } from '../../stores/useGamificationStore';
import { useLanguage } from '../../context/LanguageContext';
import { AchievementCategory, AchievementDefinition } from '../../types/gamification';
import { toast } from '../../hooks/use-toast';

export const AchievementsGrid: React.FC = () => {
  const { currentStreak, awardXP } = useGamificationStore();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>('all');
  const [unlockedList, setUnlockedList] = useState(() =>
    AchievementService.getUnlockedAchievements(null),
  );

  const langKey = language === 'ja' ? 'ja' : language === 'en' ? 'en' : 'uz';
  const meta = DailyQuestService.getGamificationMeta(null);

  const unlockedMap = new Map(unlockedList.map((u) => [u.id, u]));

  const getMetricCurrentValue = (metric: AchievementDefinition['metric']): number => {
    switch (metric) {
      case 'currentStreak':
        return currentStreak;
      case 'totalFlashcards':
        return meta.flashcardsReviewed;
      case 'totalKanji':
        return meta.kanjiMastered;
      case 'totalListening':
        return meta.listeningQuestionsCompleted;
      case 'totalSpeaking':
        return meta.speakingSessionsCompleted;
      case 'totalPitchAccent':
        return meta.pitchAccentPracticesCompleted;
      case 'mockExamsCompleted':
        return meta.mockExamsCompleted;
      case 'mockExamHighScore':
        return meta.highestMockScore;
      case 'dailyQuestsAllClear':
        return meta.dailyQuestsAllClearCount;
      default:
        return 0;
    }
  };

  const handleClaim = (achId: string) => {
    const res = AchievementService.claimAchievement(achId, null);
    if (res.xpAwarded > 0) {
      awardXP(res.xpAwarded);
      toast({
        title:
          language === 'ja'
            ? `+${res.xpAwarded} XP バッジ獲得！`
            : language === 'en'
              ? `+${res.xpAwarded} XP Achievement Claimed!`
              : `+${res.xpAwarded} XP Nishon Bonusi Qabul Qilindi!`,
        description: res.achievement?.title[langKey],
      });
      setUnlockedList(AchievementService.getUnlockedAchievements(null));
    }
  };

  const filteredAchievements = ACHIEVEMENTS_REGISTRY.filter((a) =>
    selectedCategory === 'all' ? true : a.category === selectedCategory,
  );

  const totalAchievements = ACHIEVEMENTS_REGISTRY.length;
  const unlockedCount = unlockedList.length;

  const categories = [
    {
      id: 'all',
      label: language === 'ja' ? 'すべて' : language === 'en' ? 'All' : 'Barchasi',
      icon: '🏆',
    },
    {
      id: 'streak',
      label: language === 'ja' ? 'ストリーク' : language === 'en' ? 'Streak' : 'Streak',
      icon: '🔥',
    },
    {
      id: 'vocabulary',
      label: language === 'ja' ? '語彙・カード' : language === 'en' ? 'Vocabulary' : "So'zlar",
      icon: '📖',
    },
    {
      id: 'kanji',
      label: language === 'ja' ? '漢字' : language === 'en' ? 'Kanji' : 'Kanji',
      icon: '🖌️',
    },
    {
      id: 'listening',
      label: language === 'ja' ? '聴解' : language === 'en' ? 'Listening' : 'Tinglash',
      icon: '🎧',
    },
    {
      id: 'speaking',
      label: language === 'ja' ? 'スピーキング' : language === 'en' ? 'Speaking' : 'Speaking',
      icon: '🎙️',
    },
    {
      id: 'jlpt',
      label: language === 'ja' ? 'JLPT模試' : language === 'en' ? 'JLPT' : 'JLPT & Sinov',
      icon: '📝',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header KPI Overview */}
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-2xl">
            🎖️
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tight text-foreground sm:text-xl">
              {language === 'ja'
                ? '実績・バッジコレクション'
                : language === 'en'
                  ? 'Achievements & Badges'
                  : 'Yutuqlar & Nishonlar Vitrinasi'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {language === 'ja'
                ? '学習マイルストーンを達成して名誉あるバッジとXPを獲得'
                : language === 'en'
                  ? 'Unlock pedagogical milestones and collect prestigious badges'
                  : "O'quv marralarini egallab maxsus nishonlar va mukofot XP'larini to'plang"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-border bg-muted/40 px-4 py-2 text-right">
            <span className="text-[11px] font-bold text-muted-foreground">
              {language === 'ja' ? '獲得バッジ' : language === 'en' ? 'Unlocked' : 'Ochilgan'}
            </span>
            <p className="text-lg font-black text-foreground">
              {unlockedCount} / {totalAchievements}
            </p>
          </div>
          <div className="h-2 w-28 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
              style={{ width: `${Math.round((unlockedCount / totalAchievements) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all active:scale-95 ${
              selectedCategory === cat.id
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'bg-muted/40 text-muted-foreground hover:bg-muted'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAchievements.map((ach) => {
          const userAch = unlockedMap.get(ach.id);
          const isUnlocked = !!userAch;
          const isClaimed = userAch?.claimed || false;
          const curVal = getMetricCurrentValue(ach.metric);
          const progressPercent = isUnlocked
            ? 100
            : Math.min(100, Math.round((curVal / ach.target) * 100));

          const tierColor =
            ach.tier === 'diamond'
              ? 'border-sky-500/50 bg-sky-500/5 dark:bg-sky-950/20'
              : ach.tier === 'gold'
                ? 'border-amber-500/50 bg-amber-500/5 dark:bg-amber-950/20'
                : ach.tier === 'silver'
                  ? 'border-slate-400/50 bg-slate-400/5 dark:bg-slate-900/20'
                  : 'border-orange-700/40 bg-orange-700/5 dark:bg-orange-950/20';

          const tierBadge =
            ach.tier === 'diamond'
              ? '💎 Diamond'
              : ach.tier === 'gold'
                ? '🥇 Gold'
                : ach.tier === 'silver'
                  ? '🥈 Silver'
                  : '🥉 Bronze';

          return (
            <div
              key={ach.id}
              className={`relative flex flex-col justify-between rounded-3xl border p-5 transition-all duration-200 ${
                isUnlocked
                  ? `${tierColor} shadow-sm hover:shadow-md`
                  : 'border-border/60 bg-muted/20 opacity-75 hover:opacity-90'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-background text-2xl shadow-xs">
                    {isUnlocked ? ach.icon : '🔒'}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                      {tierBadge}
                    </span>
                    <span className="rounded-lg bg-amber-500/10 px-2 py-0.5 text-[11px] font-black text-amber-600 dark:text-amber-400">
                      +{ach.xpReward} XP
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-black tracking-tight text-foreground">
                    {ach.title[langKey]}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {ach.description[langKey]}
                  </p>
                </div>
              </div>

              {/* Footer: Progress or Unlocked status */}
              <div className="mt-5 border-t border-border/50 pt-3">
                {isUnlocked ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={15} />
                      <span>
                        {language === 'ja'
                          ? '達成済み'
                          : language === 'en'
                            ? 'Achieved'
                            : 'Erishildi'}
                      </span>
                    </div>

                    {!isClaimed ? (
                      <button
                        onClick={() => handleClaim(ach.id)}
                        className="flex cursor-pointer items-center gap-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-black text-white shadow-xs transition-all hover:opacity-90 active:scale-95"
                      >
                        <Sparkles size={12} />
                        <span>
                          {language === 'ja' ? '受取る' : language === 'en' ? 'Claim' : 'Olish'}
                        </span>
                      </button>
                    ) : (
                      <span className="text-[11px] font-bold text-muted-foreground">
                        {language === 'ja'
                          ? '受取完了'
                          : language === 'en'
                            ? 'Claimed'
                            : 'Qabul qilingan'}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                      <span>
                        {language === 'ja' ? '進捗' : language === 'en' ? 'Progress' : 'Progress'}
                      </span>
                      <span>
                        {curVal} / {ach.target}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary/70 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
