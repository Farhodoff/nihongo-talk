import React from 'react';
import { X } from 'lucide-react';
import { ConversationScenario } from './scenarioTypes';

interface SpeakingScenarioBannerProps {
  activeScenario: ConversationScenario | null;
  onExitScenario: () => void;
}

export const SpeakingScenarioBanner: React.FC<SpeakingScenarioBannerProps> = ({
  activeScenario,
  onExitScenario,
}) => {
  if (!activeScenario) return null;

  return (
    <div className="z-10 mx-3 mt-1.5 flex shrink-0 items-center justify-between gap-4 rounded-2xl border border-border bg-card p-3 text-foreground shadow-md backdrop-blur-md animate-in fade-in md:mx-5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="shrink-0 rounded-xl border border-border bg-muted p-2 text-xl">
          {activeScenario.emoji}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="truncate text-xs font-bold tracking-tight text-foreground">
              {(activeScenario.language === 'en'
                ? activeScenario.title_en
                : activeScenario.title_ja) ||
                activeScenario.title_en ||
                activeScenario.title_ja}{' '}
              ({activeScenario.title_uz})
            </span>
            <span className="rounded-full border border-[#C9A961]/30 bg-[#C9A961]/15 px-2 py-0.5 text-[10px] font-extrabold text-[#C9A961]">
              {activeScenario.language === 'en' ? 'CEFR / ' : 'JLPT '}
              {activeScenario.difficulty}
            </span>
          </div>
          <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
            {activeScenario.description_uz}
          </p>
        </div>
      </div>

      <button
        onClick={onExitScenario}
        className="flex min-h-[44px] shrink-0 cursor-pointer items-center gap-1 rounded-xl border border-border bg-muted px-3 py-2 text-xs font-bold text-muted-foreground transition-all hover:bg-muted/80 hover:text-foreground"
        title="Ssenariydan chiqish"
        aria-label="Ssenariydan chiqish"
      >
        <X size={15} />
        <span className="hidden sm:inline">Chiqish</span>
      </button>
    </div>
  );
};

export default SpeakingScenarioBanner;
