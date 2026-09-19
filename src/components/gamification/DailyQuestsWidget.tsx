import React, { useState } from 'react';
import { Target, Sparkles, CheckCircle2, Gift, Flame, ShieldCheck } from 'lucide-react';
import { useGamificationStore } from '../../stores/useGamificationStore';
import { useLanguage } from '../../context/LanguageContext';
import { DailyQuest } from '../../types/gamification';
import { DailyQuestService } from '../../services/DailyQuestService';
import { toast } from '../../hooks/use-toast';

export const DailyQuestsWidget: React.FC = () => {
  const { dailyQuestState, claimQuestReward, claimAllCompletedBonus, currentStreak } =
    useGamificationStore();
  const { language } = useLanguage();
  const [claimingId, setClaimingId] = useState<string | null>(null);

  const langKey = language === 'ja' ? 'ja' : language === 'en' ? 'en' : 'uz';
  const quests = dailyQuestState?.quests || [];
  const completedCount = quests.filter((q) => q.completed).length;
  const totalCount = quests.length || 4;
  const allCompleted = totalCount > 0 && completedCount === totalCount;
  const bonusClaimed = dailyQuestState?.allCompletedBonusClaimed || false;

  const meta = DailyQuestService.getGamificationMeta(null);

  const handleClaim = (quest: DailyQuest) => {
    if (!quest.completed || quest.claimed) return;
    setClaimingId(quest.id);
    try {
      const xp = claimQuestReward(quest.id);
      toast({
        title:
          language === 'ja'
            ? `+${xp} XP 獲得！`
            : language === 'en'
              ? `+${xp} XP Claimed!`
              : `+${xp} XP Qabul Qilindi!`,
        description: quest.title[langKey],
      });
    } finally {
      setClaimingId(null);
    }
  };

  const handleClaimAllClear = () => {
    if (!allCompleted || bonusClaimed) return;
    const xp = claimAllCompletedBonus();
    toast({
      title:
        language === 'ja'
          ? `+${xp} XP デイリーボーナス達成！`
          : language === 'en'
            ? `+${xp} XP All-Clear Bonus Claimed!`
            : `+${xp} XP Kunlik Chempion Bonusi Qabul Qilindi!`,
      description:
        language === 'ja'
          ? '本日のすべてのデイリークエストを完了しました！'
          : language === 'en'
            ? 'You completed all daily quests for today!'
            : 'Bugungi barcha kunlik topshiriqlarni 100% bajardingiz!',
    });
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md sm:p-6">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Target size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black tracking-tight text-foreground sm:text-lg">
                {language === 'ja'
                  ? 'デイリークエスト'
                  : language === 'en'
                    ? 'Daily Quests'
                    : 'Kunlik Missiyalar'}
              </h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                {completedCount}/{totalCount}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {language === 'ja'
                ? '毎日リセットされる学習ミッションでボーナスXPを獲得'
                : language === 'en'
                  ? 'Complete daily learning missions to earn bonus XP'
                  : "Har kuni yangilanadigan topshiriqlarni bajarib bonus XP to'plang"}
            </p>
          </div>
        </div>

        {/* Streak & Freeze Shield Status */}
        <div className="flex items-center gap-2 self-start rounded-2xl border border-border/80 bg-muted/30 px-3.5 py-1.5 sm:self-auto">
          <div className="flex items-center gap-1.5 text-xs font-black text-orange-600 dark:text-orange-400">
            <Flame size={16} className="fill-orange-500 text-orange-500" />
            <span>
              {currentStreak} {language === 'ja' ? '日' : language === 'en' ? 'days' : 'kun'}
            </span>
          </div>
          <span className="text-border">•</span>
          <div
            className="flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400"
            title={
              language === 'ja'
                ? 'ストリーク保護シールド'
                : language === 'en'
                  ? 'Streak Freeze Shield'
                  : 'Streak himoya qalqoni'
            }
          >
            <ShieldCheck size={15} />
            <span>
              {meta.streakFreezes > 0 ? (
                <span className="text-emerald-600 dark:text-emerald-400">
                  {meta.streakFreezes}x {language === 'ja' ? '保護中' : 'himoyalangan'}
                </span>
              ) : (
                <span className="text-muted-foreground">0x</span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Quests Grid */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {quests.map((quest) => {
          const progressPercent = Math.min(100, Math.round((quest.progress / quest.target) * 100));

          return (
            <div
              key={quest.id}
              className={`relative flex flex-col justify-between rounded-2xl border p-3.5 transition-all ${
                quest.claimed
                  ? 'border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/10'
                  : quest.completed
                    ? 'border-amber-500/40 bg-amber-500/5 shadow-xs dark:bg-amber-950/10'
                    : 'border-border/80 bg-muted/20 hover:border-border'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-background text-lg shadow-xs">
                    {quest.icon}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-foreground sm:text-sm">
                      {quest.title[langKey]}
                    </h4>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      {quest.description[langKey]}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-lg bg-amber-500/10 px-2 py-0.5 text-[11px] font-black text-amber-600 dark:text-amber-400">
                  +{quest.xpReward} XP
                </span>
              </div>

              {/* Progress & Claim Button */}
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex flex-1 items-center gap-2">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full transition-all duration-300 ${
                        quest.claimed
                          ? 'bg-emerald-500'
                          : quest.completed
                            ? 'bg-amber-500'
                            : 'bg-primary'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-muted-foreground">
                    {quest.progress}/{quest.target}
                  </span>
                </div>

                {/* Claim Action */}
                {quest.claimed ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={14} />
                    <span>
                      {language === 'ja' ? '受取済' : language === 'en' ? 'Claimed' : 'Olindi'}
                    </span>
                  </span>
                ) : quest.completed ? (
                  <button
                    onClick={() => handleClaim(quest)}
                    disabled={claimingId === quest.id}
                    className="flex cursor-pointer items-center gap-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-1 text-[11px] font-extrabold text-white shadow-xs transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
                  >
                    <Gift size={12} />
                    <span>
                      {language === 'ja' ? '受取る' : language === 'en' ? 'Claim' : 'Olish'}
                    </span>
                  </button>
                ) : (
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {progressPercent}%
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* All-Clear Bonus Banner */}
      <div
        className={`mt-4 flex flex-col items-center justify-between gap-3 rounded-2xl border p-3.5 sm:flex-row ${
          bonusClaimed
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
            : allCompleted
              ? 'border-amber-500/50 bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 text-amber-900 dark:text-amber-200'
              : 'border-border/60 bg-muted/30 text-muted-foreground'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-background text-base shadow-xs">
            🏆
          </div>
          <div>
            <p className="text-xs font-black">
              {language === 'ja'
                ? '全クエスト達成ボーナス (+100 XP)'
                : language === 'en'
                  ? 'All-Clear Daily Bonus (+100 XP)'
                  : 'Barcha Missiyalarni Tugatish Bonusi (+100 XP)'}
            </p>
            <p className="text-[11px] opacity-80">
              {bonusClaimed
                ? language === 'ja'
                  ? '本日の全ボーナスは受取り済みです！明日も頑張りましょう！'
                  : language === 'en'
                    ? "Today's bonus has been claimed! See you tomorrow!"
                    : 'Bugungi bonus qabul qilingan! Ertaga yangi missiyalar kutadi!'
                : allCompleted
                  ? language === 'ja'
                    ? 'すべてのミッション完了！今すぐ100 XPを受け取れます！'
                    : language === 'en'
                      ? 'All missions clear! Tap to claim your 100 XP bonus!'
                      : 'Barcha missiyalar tayyor! 100 XP bonusni qabul qilib oling!'
                  : language === 'ja'
                    ? `あと ${totalCount - completedCount} つのクエストを完了してボーナス獲得`
                    : language === 'en'
                      ? `Complete ${totalCount - completedCount} more quest(s) to unlock bonus`
                      : `Yana ${totalCount - completedCount} ta topshiriqni yakunlang`}
            </p>
          </div>
        </div>

        {allCompleted && !bonusClaimed && (
          <button
            onClick={handleClaimAllClear}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-black text-white shadow-md shadow-amber-500/20 transition-all hover:opacity-90 active:scale-95"
          >
            <Sparkles size={14} />
            <span>
              {language === 'ja'
                ? '100 XP を受け取る'
                : language === 'en'
                  ? 'Claim 100 XP'
                  : '100 XP Bonusni Olish'}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
