import React, { Suspense, lazy } from 'react';
import { Target, FileText, BookOpen, Languages, Headphones, GraduationCap } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const JlptGrammarKanjiMaster = lazy(() => import('../components/jlpt/JlptGrammarKanjiMaster'));
const KanjiCanvasPractice = lazy(() => import('../components/jlpt/KanjiCanvasPractice'));

const JlptReadingPage = lazy(() =>
  import('./JlptReadingPage').then((m) => ({ default: m.JlptReadingPage })),
);
const JlptListeningMockPage = lazy(() =>
  import('./JlptListeningMockPage').then((m) => ({ default: m.JlptListeningMockPage })),
);
const JlptMockExamPage = lazy(() =>
  import('./JlptMockExamPage').then((m) => ({ default: m.JlptMockExamPage })),
);

export const JlptHubPage: React.FC = () => {
  useSEO({
    title: 'JLPT N5-N1 Tayyorgarlik Markazi (Kanji, Grammatika, Mocks)',
    description:
      "Yapon tili JLPT N5 dan N1 gacha bo'lgan to'liq o'quv dasturi. 1000+ Kanji mashqi, grammatika viktorinalari va rasmiy formatdagi mock imtihonlar.",
    canonical: '/jlpt',
    keywords: "JLPT N5 N4 N3 N2 N1, yapon tili o'rganish O'zbekiston, Kanji mashq, JLPT mock exam",
  });

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { settings, updateSettings } = useStudyData();
  const { language } = useLanguage();

  const activeTab = searchParams.get('tab') || 'kanji';

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <div className="mx-auto max-w-7xl max-w-full space-y-6 overflow-x-hidden p-3.5 pb-16 sm:p-4 md:space-y-8 md:p-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-xs md:p-6">
        <div className="relative z-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h1 className="font-display text-2xl font-black tracking-tight text-foreground md:text-3xl">
            {language === 'ja' ? '日本語マスターハブ' : 'JLPT Master Hub'}
          </h1>

          <div className="flex w-full flex-wrap items-center gap-3 md:w-auto">
            {/* Furigana & Romaji Controls */}
            <div className="hidden items-center rounded-xl border border-border bg-muted/50 p-1 md:flex">
              <button
                onClick={() => updateSettings({ showFurigana: !settings.showFurigana })}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  settings.showFurigana
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Languages size={13} />
                <span>Furigana</span>
                <span className="text-[10px] opacity-75">
                  {settings.showFurigana ? 'ON' : 'OFF'}
                </span>
              </button>
              <button
                onClick={() => updateSettings({ showRomaji: !settings.showRomaji })}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  settings.showRomaji
                    ? 'border border-[#C9A961]/30 bg-amber-500/15 text-[#C9A961]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>Romaji</span>
                <span className="ml-1 text-[10px] opacity-75">
                  {settings.showRomaji ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>

            {/* Shaxsiy Reja */}
            <button
              onClick={() => navigate('/personal-plan')}
              className="flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-95"
            >
              <Target size={15} />
              <span>{language === 'ja' ? '学習プラン' : 'Shaxsiy Rejam'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Unified JLPT Skill Navigation Tabs */}
      <div className="scrollbar-none sticky top-0 z-20 flex max-w-full items-center gap-1.5 overflow-x-auto rounded-2xl border border-border bg-card/90 p-1.5 shadow-xs backdrop-blur-md">
        <button
          onClick={() => handleTabChange('kanji')}
          className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
            activeTab === 'kanji'
              ? 'scale-[1.02] bg-primary text-primary-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
          }`}
        >
          <BookOpen size={15} /> {language === 'ja' ? '⛩️ 漢字・文法' : '⛩️ Kanji & Grammatika'}
        </button>

        <button
          onClick={() => handleTabChange('reading')}
          className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
            activeTab === 'reading'
              ? 'scale-[1.02] bg-primary text-primary-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
          }`}
        >
          <FileText size={15} /> {language === 'ja' ? '📖 読解トレーニング' : "📖 Dokkai (O'qish)"}
        </button>

        <button
          onClick={() => handleTabChange('listening')}
          className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
            activeTab === 'listening'
              ? 'scale-[1.02] bg-primary text-primary-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
          }`}
        >
          <Headphones size={15} />{' '}
          {language === 'ja' ? '🎧 聴解トレーニング' : '🎧 Choukai (Tinglash)'}
        </button>

        <button
          onClick={() => handleTabChange('mock')}
          className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
            activeTab === 'mock'
              ? 'scale-[1.02] bg-primary text-primary-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
          }`}
        >
          <GraduationCap size={15} /> {language === 'ja' ? '🏆 JLPT模擬試験' : '🏆 JLPT Mock Exam'}
        </button>
      </div>

      {/* Tab Views */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center p-12">
            <div className="border-3 h-8 w-8 animate-spin rounded-full border-primary border-t-transparent" />
          </div>
        }
      >
        {/* Tab 1: Kanji Canvas & Bunpou Grammar Master */}
        {activeTab === 'kanji' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <KanjiCanvasPractice />
            </div>
            <div>
              <JlptGrammarKanjiMaster />
            </div>
          </div>
        )}

        {/* Tab 3: Dokkai (Reading) */}
        {activeTab === 'reading' && (
          <div className="animate-in fade-in">
            <JlptReadingPage />
          </div>
        )}

        {/* Tab 4: Choukai (Listening) */}
        {activeTab === 'listening' && (
          <div className="animate-in fade-in">
            <JlptListeningMockPage />
          </div>
        )}

        {/* Tab 5: Full Mock Exam */}
        {activeTab === 'mock' && (
          <div className="animate-in fade-in">
            <JlptMockExamPage />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default JlptHubPage;
