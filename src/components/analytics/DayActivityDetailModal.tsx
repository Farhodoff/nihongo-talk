import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Layers,
  Mic,
  Timer,
  BookOpen,
  Award,
  Zap,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { UserLearningActivity, ActivityDaySummary } from '../../services/ActivityLoggingService';
import { useLanguage } from '../../context/LanguageContext';
import { format } from 'date-fns';

interface DayActivityDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  daySummary: ActivityDaySummary | null;
  selectedDate: Date | null;
  onStartFlashcards?: () => void;
  onStartSpeaking?: () => void;
}

const WEEKDAY_NAMES_UZ: Record<number, string> = {
  0: 'Yakshanba',
  1: 'Dushanba',
  2: 'Seshanba',
  3: 'Chorshanba',
  4: 'Payshanba',
  5: 'Juma',
  6: 'Shanba',
};

const MONTH_NAMES_UZ: Record<number, string> = {
  0: 'Yanvar',
  1: 'Fevral',
  2: 'Mart',
  3: 'Aprel',
  4: 'May',
  5: 'Iyun',
  6: 'Iyul',
  7: 'Avgust',
  8: 'Sentabr',
  9: 'Oktabr',
  10: 'Noyabr',
  11: 'Dekabr',
};

export const DayActivityDetailModal: React.FC<DayActivityDetailModalProps> = ({
  isOpen,
  onClose,
  daySummary,
  selectedDate,
  onStartFlashcards,
  onStartSpeaking,
}) => {
  const { language } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !selectedDate) return null;

  const dayOfWeek =
    language === 'ja'
      ? ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'][
          selectedDate.getDay()
        ]
      : WEEKDAY_NAMES_UZ[selectedDate.getDay()];

  const monthName =
    language === 'ja'
      ? `${selectedDate.getMonth() + 1}月`
      : MONTH_NAMES_UZ[selectedDate.getMonth()];

  const formattedDate =
    language === 'ja'
      ? `${selectedDate.getFullYear()}年 ${monthName} ${selectedDate.getDate()}日 (${dayOfWeek})`
      : `${selectedDate.getDate()}-${monthName}, ${selectedDate.getFullYear()} (${dayOfWeek})`;

  const activities = daySummary?.activities || [];
  const totalMinutes = daySummary?.totalMinutes || 0;
  const totalXp = daySummary?.totalXp || 0;

  const getActivityIcon = (type: UserLearningActivity['activityType']) => {
    switch (type) {
      case 'flashcards':
        return <Layers className="text-amber-400" size={20} />;
      case 'speaking':
        return <Mic className="text-indigo-400" size={20} />;
      case 'focus':
        return <Timer className="text-emerald-400" size={20} />;
      case 'lesson':
      case 'quiz':
      case 'exam':
      default:
        return <Award className="text-purple-400" size={20} />;
    }
  };

  const getActivityBg = (type: UserLearningActivity['activityType']) => {
    switch (type) {
      case 'flashcards':
        return 'border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40';
      case 'speaking':
        return 'border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40';
      case 'focus':
        return 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40';
      default:
        return 'border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40';
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0f141c] text-white shadow-2xl duration-300 animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
                {formattedDate}
              </h3>
              <p className="text-xs text-gray-400">
                {language === 'ja'
                  ? '本日の学習アクティビティ詳細'
                  : "Ushbu kunda bajarilgan o'quv ishlari"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Daily KPI summary banner */}
        <div className="grid grid-cols-3 gap-3 border-b border-white/10 bg-white/[0.02] p-5">
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-center">
            <div className="mb-1 flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Clock size={14} className="text-emerald-400" />
              <span>{language === 'ja' ? '学習時間' : "O'qish vaqti"}</span>
            </div>
            <p className="text-lg font-black text-white">{totalMinutes} daq</p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-center">
            <div className="mb-1 flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Zap size={14} className="text-amber-400" />
              <span>{language === 'ja' ? '獲得 XP' : 'Yutilgan XP'}</span>
            </div>
            <p className="text-lg font-black text-amber-400">+{totalXp} XP</p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-center">
            <div className="mb-1 flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <CheckCircle2 size={14} className="text-indigo-400" />
              <span>{language === 'ja' ? 'アクティビティ' : 'Faoliyatlar'}</span>
            </div>
            <p className="text-lg font-black text-white">{activities.length} ta</p>
          </div>
        </div>

        {/* Activity list or empty state */}
        <div className="scrollbar-thin max-h-[380px] space-y-3 overflow-y-auto p-5">
          {activities.length > 0 ? (
            activities.map((act) => (
              <div
                key={act.id}
                className={`rounded-2xl border p-4 transition-all duration-200 ${getActivityBg(
                  act.activityType,
                )}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      {getActivityIcon(act.activityType)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold leading-snug text-white">
                        {act.activityTitle}
                      </h4>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                        {act.durationMinutes > 0 && (
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {act.durationMinutes} daqiqa
                          </span>
                        )}
                        {act.itemsCount > 0 && (
                          <span>
                            • {act.itemsCount}{' '}
                            {act.activityType === 'flashcards'
                              ? 'kartochka'
                              : act.activityType === 'speaking'
                                ? 'suhbat'
                                : 'mashq'}
                          </span>
                        )}
                        {act.createdAt && (
                          <span className="text-gray-500">
                            • {format(new Date(act.createdAt), 'HH:mm')}
                          </span>
                        )}
                      </div>

                      {/* Milestone badge if available */}
                      {act.metadata?.badge && (
                        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                          <Sparkles size={11} />
                          <span>{act.metadata.badge}</span>
                        </div>
                      )}

                      {/* Fluency score if available */}
                      {act.metadata?.fluencyScore !== undefined && (
                        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-bold text-indigo-300">
                          <span>Ravonlik: {act.metadata.fluencyScore}%</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {act.xpEarned > 0 && (
                    <div className="shrink-0 rounded-xl border border-amber-500/30 bg-amber-500/15 px-2.5 py-1 text-xs font-black text-amber-400">
                      +{act.xpEarned} XP
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-4 py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-gray-500">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-300">
                  {language === 'ja'
                    ? 'この日はまだ学習記録がありません'
                    : "Bu kunda o'quv faolligi qayd etilmagan"}
                </p>
                <p className="mx-auto mt-1 max-w-xs text-xs text-gray-500">
                  {language === 'ja'
                    ? 'フラッシュカードを復習するか、AIコーチと会話してスコアを獲得しましょう！'
                    : "Flashkarta yodlang yoki AI Coach bilan yaponcha gaplashib XP ballarini jamg'aring!"}
                </p>
              </div>

              {(onStartFlashcards || onStartSpeaking) && (
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {onStartFlashcards && (
                    <button
                      onClick={() => {
                        onClose();
                        onStartFlashcards();
                      }}
                      className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/20 px-3.5 py-2 text-xs font-bold text-amber-300 transition-all hover:bg-amber-500/30"
                    >
                      <Layers size={14} />
                      <span>{language === 'ja' ? 'フラッシュカード' : 'Fleshkarta Yodlash'}</span>
                    </button>
                  )}
                  {onStartSpeaking && (
                    <button
                      onClick={() => {
                        onClose();
                        onStartSpeaking();
                      }}
                      className="flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/20 px-3.5 py-2 text-xs font-bold text-indigo-300 transition-all hover:bg-indigo-500/30"
                    >
                      <Mic size={14} />
                      <span>{language === 'ja' ? 'AIコーチと会話' : 'AI Coach Suhbat'}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.01] px-6 py-4">
          <p className="text-[11px] text-gray-500">
            {language === 'ja'
              ? 'すべてのデータはクラウドに安全に同期されます'
              : 'Barcha faolliklar Supabase bulutiga saqlanadi'}
          </p>
          <button
            onClick={onClose}
            className="rounded-xl bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/20 active:scale-95"
          >
            {language === 'ja' ? '閉じる' : 'Yopish'}
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
};
