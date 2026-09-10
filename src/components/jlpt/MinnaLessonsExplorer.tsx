import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  Play,
  Search,
  MessageSquare,
  Layers,
  BookOpen,
} from 'lucide-react';
import { MINNA_N5_LESSONS } from '../../data/curriculum/minnaN5Lessons';
import { MINNA_N4_LESSONS } from '../../data/curriculum/minnaN4Lessons';
import { LessonService } from '../../services/LessonService';
import { useStudyData } from '../../context/StudyPlannerContext';
import { useLanguage } from '../../context/LanguageContext';

type MinnaLevel = 'n5' | 'n4';

const UNIT_TABS_N5 = [
  { id: 'all', title: 'Barcha Darslar (1–25)', titleJa: 'すべての課 (1–25)' },
  {
    id: 'u1',
    unitNum: 1,
    title: 'Unit 1: 1–5 Darslar (Tanishuv & Harakat)',
    titleJa: '第1課〜第5課',
  },
  {
    id: 'u2',
    unitNum: 2,
    title: 'Unit 2: 6–10 Darslar (Hayot & Mavjudlik)',
    titleJa: '第6課〜第10課',
  },
  {
    id: 'u3',
    unitNum: 3,
    title: 'Unit 3: 11–15 Darslar (Sanoq & Te-shakli)',
    titleJa: '第11課〜第15課',
  },
  {
    id: 'u4',
    unitNum: 4,
    title: 'Unit 4: 16–20 Darslar (Ketma-ketlik & Futsuugo)',
    titleJa: '第16課〜第20課',
  },
  {
    id: 'u5',
    unitNum: 5,
    title: 'Unit 5: 21–25 Darslar (Fikr & Shart)',
    titleJa: '第21課〜第25課',
  },
];

const UNIT_TABS_N4 = [
  { id: 'all', title: 'Barcha Darslar (26–50)', titleJa: 'すべての課 (26–50)' },
  {
    id: 'u6',
    unitNum: 6,
    title: 'Unit 6: 26–30 Darslar (Holat & Izoh)',
    titleJa: '第26課〜第30課',
  },
  {
    id: 'u7',
    unitNum: 7,
    title: 'Unit 7: 31–35 Darslar (Reja & Shart)',
    titleJa: '第31課〜第35課',
  },
  {
    id: 'u8',
    unitNum: 8,
    title: "Unit 8: 36–40 Darslar (Ko'nikma & Sabab)",
    titleJa: '第36課〜第40課',
  },
  {
    id: 'u9',
    unitNum: 9,
    title: 'Unit 9: 41–45 Darslar (Hadya & Maqsad)',
    titleJa: '第41課〜第45課',
  },
  {
    id: 'u10',
    unitNum: 10,
    title: 'Unit 10: 46–50 Darslar (Keigo & Nisbatlar)',
    titleJa: '第46課〜第50課',
  },
];

const SCENARIO_MAP: Record<number, string> = {
  1: 'minna_l1_hajimemashite',
  2: 'minna_l2_honno_kimochi',
  3: 'minna_l3_kore_wo_kudasai',
  4: 'minna_l4_nanji_kara',
  5: 'minna_l5_koushien',
  6: 'minna_l6_isshoni_ikimasenka',
  10: 'minna_l10_chiri_so_su',
  14: 'minna_l14_umeda_made',
  26: 'minna_l26_advice',
  27: 'minna_l27_ability',
  28: 'minna_l28_nagara',
  30: 'minna_l30_junbi',
  32: 'minna_l32_byoki',
  37: 'minna_l37_ukemi',
  49: 'minna_l49_sonkeigo',
  50: 'minna_l50_kenjougo',
};

export const MinnaLessonsExplorer: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useStudyData();
  const { language } = useLanguage();

  const [activeLevel, setActiveLevel] = useState<MinnaLevel>('n5');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentLessons = useMemo(() => {
    return activeLevel === 'n5' ? MINNA_N5_LESSONS : MINNA_N4_LESSONS;
  }, [activeLevel]);

  const currentUnitTabs = useMemo(() => {
    return activeLevel === 'n5' ? UNIT_TABS_N5 : UNIT_TABS_N4;
  }, [activeLevel]);

  // Map progress for each lesson in current level
  const lessonProgressMap = useMemo(() => {
    const map: Record<string, { completed: boolean; score?: number }> = {};
    for (const l of currentLessons) {
      const prog = LessonService.getLessonProgress(user?.id || '', l.id);
      map[l.id] = {
        completed: prog?.isCompleted || false,
        score: prog?.quizScore?.percentage,
      };
    }
    return map;
  }, [user?.id, currentLessons]);

  const completedCount = useMemo(() => {
    return Object.values(lessonProgressMap).filter((p) => p.completed).length;
  }, [lessonProgressMap]);

  const filteredLessons = useMemo(() => {
    return currentLessons.filter((lesson) => {
      // Unit filter
      if (selectedUnit !== 'all') {
        const unitNum = parseInt(selectedUnit.replace('u', ''), 10);
        const expectedUnitId = `ja-minna-u${unitNum}`;
        if (lesson.unitId !== expectedUnitId) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = lesson.title.toLowerCase().includes(query);
        const inDesc = lesson.description.toLowerCase().includes(query);
        const inSubtitle =
          lesson.steps[0]?.learnData?.subtitle?.toLowerCase().includes(query) || false;
        return inTitle || inDesc || inSubtitle;
      }

      return true;
    });
  }, [currentLessons, selectedUnit, searchQuery]);

  const isN5 = activeLevel === 'n5';

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Level Switcher: Shokyu 1 (N5) vs Shokyu 2 (N4) */}
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur-sm sm:w-fit">
        <button
          onClick={() => {
            setActiveLevel('n5');
            setSelectedUnit('all');
          }}
          className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:flex-initial sm:text-sm ${
            isN5
              ? 'border border-border bg-card text-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
          }`}
        >
          <span>🌸 初級1 (1–25 Darslar)</span>
          <span className="rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-black text-rose-600 dark:text-rose-400">
            JLPT N5
          </span>
        </button>

        <button
          onClick={() => {
            setActiveLevel('n4');
            setSelectedUnit('all');
          }}
          className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:flex-initial sm:text-sm ${
            !isN5
              ? 'border border-border bg-card text-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
          }`}
        >
          <span>🌿 初級2 (26–50 Darslar)</span>
          <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-black text-emerald-600 dark:text-emerald-400">
            JLPT N4
          </span>
        </button>
      </div>

      {/* Course Hero Banner */}
      <div
        className={`relative overflow-hidden rounded-3xl border p-5 shadow-xs transition-colors duration-300 sm:p-6 ${
          isN5
            ? 'border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-amber-500/5 to-transparent'
            : 'border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent'
        }`}
      >
        <div className="relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold ${
                isN5
                  ? 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                  : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
              }`}
            >
              <Sparkles size={13} />
              <span>
                {isN5 ? 'JLPT N5 Rasmiy Darslik Bazasidan' : 'JLPT N4 Rasmiy Darslik Bazasidan'}
              </span>
            </div>
            <h2 className="text-xl font-black text-foreground sm:text-2xl">
              {isN5
                ? '🌸 みんなの日本語 初級1 (Minna no Nihongo 1–25 Darslar)'
                : '🌿 みんなの日本語 初級2 (Minna no Nihongo 26–50 Darslar)'}
            </h2>
            <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {isN5
                ? "Yapon tilining eng mashhur darsligi bo'yicha 25 ta to'liq dars. 1,135 ta so'z, 144 ta grammatika qoidasi, o'zbekcha izohlar, interaktiv mashqlar va sinov testlari bilan bosqichma-bosqich o'rganing."
                : "Minna no Nihongo Shokyu 2 bo'yicha 25 ta to'liq dars. Potensial, majhul, majburiy nisbat, keigo hurmat tili, 450+ yangi so'z, o'zbekcha tushuntirishlar va sinov testlari bilan N4 darajasini to'liq o'zlashtiring."}
            </p>
          </div>

          {/* Stats card */}
          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card/80 p-3.5 backdrop-blur-md">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${
                isN5 ? 'bg-rose-500/15' : 'bg-emerald-500/15'
              }`}
            >
              🎓
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>O'zlashtirish:</span>
              </div>
              <div className="text-lg font-black text-foreground">
                {completedCount} / 25{' '}
                <span className="text-xs font-medium text-muted-foreground">dars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="mb-1 flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <span>{isN5 ? 'Umumiy N5 Darslik Jarayoni' : 'Umumiy N4 Darslik Jarayoni'}</span>
            <span>{Math.round((completedCount / 25) * 100)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted/60">
            <div
              className={`h-full transition-all duration-500 ${
                isN5
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500'
              }`}
              style={{ width: `${(completedCount / 25) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Unit Selector Tabs */}
        <div className="scrollbar-none flex items-center gap-1.5 overflow-x-auto pb-1">
          {currentUnitTabs.map((tab) => {
            const isActive = selectedUnit === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedUnit(tab.id)}
                className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  isActive
                    ? 'scale-[1.02] bg-primary text-primary-foreground shadow-xs'
                    : 'border border-border bg-card text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                }`}
              >
                <span>{language === 'ja' ? tab.titleJa : tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Search box */}
        <div className="relative min-w-[220px] sm:w-64">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Dars yoki qoidani qidirish..."
            className="focus:outline-hidden w-full rounded-xl border border-border bg-card py-2 pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredLessons.map((lesson) => {
          const prog = lessonProgressMap[lesson.id];
          const vocabCount = lesson.steps[0]?.learnData?.vocabulary?.length || 0;
          const grammarRules = lesson.steps[0]?.learnData?.grammarRules || [];
          const subtitle = lesson.steps[0]?.learnData?.subtitle || '';
          const scenarioId = SCENARIO_MAP[lesson.lessonNumber];

          return (
            <div
              key={lesson.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                {/* Header badges */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                        isN5
                          ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      }`}
                    >
                      {lesson.lessonNumber}
                    </span>
                    <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
                      JLPT {lesson.level}
                    </span>
                  </div>

                  {prog?.completed ? (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={12} />
                      <span>{prog.score ? `${prog.score}%` : 'Tugallandi'}</span>
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                      ~20 daqiqa
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="line-clamp-1 text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base">
                  {lesson.title}
                </h3>
                {subtitle && (
                  <p className="mt-0.5 line-clamp-1 font-mono text-xs font-medium text-muted-foreground/80">
                    {subtitle}
                  </p>
                )}

                {/* Description & Key Grammar Rules */}
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {lesson.description}
                </p>

                {/* Meta stats: vocab & grammar count */}
                <div className="mt-2.5 flex items-center gap-3 text-[11px] font-medium text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} className={isN5 ? 'text-rose-500' : 'text-emerald-500'} />
                    <span>{vocabCount} ta so'z</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-500" />
                    <span>{grammarRules.length} ta qoida</span>
                  </span>
                </div>

                {/* Grammar tags preview */}
                {grammarRules.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {grammarRules.slice(0, 3).map((g, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-semibold text-foreground/80"
                      >
                        {g.pattern.length > 25 ? `${g.pattern.slice(0, 25)}...` : g.pattern}
                      </span>
                    ))}
                    {grammarRules.length > 3 && (
                      <span className="rounded-md bg-muted/30 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        +{grammarRules.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex items-center justify-between gap-2 border-t border-border pt-4">
                <button
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                  className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-95"
                >
                  <Play size={13} fill="currentColor" />
                  <span>{prog?.completed ? "Qayta O'qish" : 'Darsni Boshlash'}</span>
                </button>

                <button
                  onClick={() => navigate('/flashcards')}
                  title="Fleshkartalarni takrorlash"
                  className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
                >
                  <Layers size={14} />
                </button>

                <button
                  onClick={() =>
                    navigate(
                      scenarioId
                        ? `/speaking-coach?lang=ja&scenario=${scenarioId}`
                        : '/speaking-coach?lang=ja',
                    )
                  }
                  title="AI Speaking Coach bilan suhbat"
                  className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
                >
                  <MessageSquare size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLessons.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Qidiruvingiz bo'yicha darslar topilmadi.
          </p>
        </div>
      )}
    </div>
  );
};

export default MinnaLessonsExplorer;
