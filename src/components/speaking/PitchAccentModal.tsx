import React from 'react';
import { X, Volume2, TrendingUp, Sparkles, HelpCircle } from 'lucide-react';
import { PitchAccentInfo, PitchType } from '../../services/PitchAccentService';
import { speakText } from '../../utils/audioTts';

interface PitchAccentModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentInfo: PitchAccentInfo | null;
}

const TYPE_STYLES: Record<PitchType, { badge: string; text: string; label: string }> = {
  heiban: {
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500',
    text: 'text-emerald-500',
    label: 'Heiban (平板型 ⓪ - Tekis)',
  },
  atamadaka: {
    badge: 'border-rose-500/30 bg-rose-500/10 text-rose-500',
    text: 'text-rose-500',
    label: 'Atamadaka (頭高型 ① - Boshida baland)',
  },
  nakadaka: {
    badge: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-500',
    text: 'text-indigo-500',
    label: "Nakadaka (中高型 - O'rtasida baland)",
  },
  odaka: {
    badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-500',
    label: 'Odaka (尾高型 - Oxirida baland)',
    text: 'text-cyan-500',
  },
};

export const PitchAccentModal: React.FC<PitchAccentModalProps> = ({
  isOpen,
  onClose,
  accentInfo,
}) => {
  if (!isOpen || !accentInfo) return null;

  const style = TYPE_STYLES[accentInfo.pitchType];
  const morae = accentInfo.morae;

  const handlePlayAudio = () => {
    speakText(accentInfo.reading || accentInfo.word, 'ja-JP');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md duration-200 animate-in fade-in">
      <div className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl duration-200 animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/10 via-purple-500/10 to-transparent p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-primary/20 bg-primary/15 p-2.5 text-primary">
              <TrendingUp size={22} />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">
                Pitch Accent (アクセント) Tahlili
              </h3>
              <p className="text-xs text-muted-foreground">
                Standart Tokio lahjasi bo&apos;yicha baland/past ohang grafigi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          {/* Main Word Banner */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted/40 p-5 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {accentInfo.romaji}
            </span>
            <div className="mt-1 flex items-center gap-3">
              <span className="text-3xl font-black tracking-wide text-foreground">
                {accentInfo.word}
              </span>
              <button
                type="button"
                onClick={handlePlayAudio}
                className="cursor-pointer rounded-full border border-primary/30 bg-primary/15 p-2.5 text-primary transition-all hover:scale-105 hover:bg-primary/25"
                title="Talaffuzni tinglash"
              >
                <Volume2 size={20} />
              </button>
            </div>
            <div className="mt-2.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold ${style.badge}`}
              >
                <Sparkles size={12} />
                {style.label}
              </span>
            </div>
          </div>

          {/* SVG Pitch Curve Visualizer */}
          <div className="rounded-2xl border border-border bg-muted/20 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold text-muted-foreground">
                Ohang Ko&apos;rinishi (Pitch Contour):
              </span>
              <span className="font-mono text-xs font-bold text-primary">
                {accentInfo.pitchFormula}
              </span>
            </div>

            {/* Visual Step Chart */}
            <div className="relative flex items-center justify-around py-6">
              {/* High / Low boundary guide lines */}
              <div className="pointer-events-none absolute inset-x-4 top-4 border-b border-dashed border-primary/20" />
              <div className="pointer-events-none absolute inset-x-4 bottom-8 border-b border-dashed border-muted-foreground/20" />

              <span className="absolute -top-1 left-0 text-[10px] font-bold text-primary/70">
                HIGH (Baland)
              </span>
              <span className="absolute -bottom-1 left-0 text-[10px] font-bold text-muted-foreground">
                LOW (Past)
              </span>

              {morae.map((m, idx) => {
                const nextMora = morae[idx + 1];
                return (
                  <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                    {/* Pitch Dot */}
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black shadow-md transition-all ${
                        m.isHigh
                          ? '-translate-y-4 border-2 border-primary bg-primary text-primary-foreground shadow-primary/30'
                          : 'translate-y-2 border-2 border-border bg-card text-foreground'
                      }`}
                    >
                      {m.isHigh ? 'H' : 'L'}
                    </div>

                    {/* Downstep drop marker */}
                    {m.isDrop && (
                      <div className="absolute -top-7 animate-bounce text-xs font-black text-rose-500">
                        ▼
                      </div>
                    )}

                    {/* Mora Character Label */}
                    <div className="mt-4 flex flex-col items-center">
                      <span className="text-base font-extrabold text-foreground">{m.mora}</span>
                      <span className="text-[10px] font-semibold text-muted-foreground">
                        {idx + 1}-bo&apos;g&apos;in
                      </span>
                    </div>

                    {/* Connecting line to next mora */}
                    {nextMora && (
                      <div
                        className="pointer-events-none absolute left-1/2 top-4 h-0.5 w-full -translate-y-1/2 bg-primary/40"
                        style={{
                          transform: `translateY(${m.isHigh ? '-16px' : '8px'}) rotate(${
                            m.isHigh && !nextMora.isHigh
                              ? '30deg'
                              : !m.isHigh && nextMora.isHigh
                                ? '-30deg'
                                : '0deg'
                          })`,
                          transformOrigin: 'left center',
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explanation in Uzbek */}
          <div className="space-y-2 rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-xs font-extrabold text-foreground">
              <HelpCircle size={15} className="text-primary" />
              <span>Qanday to&apos;g&apos;ri aytiladi?</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {accentInfo.ruleExplanationUz}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-border bg-muted/20 p-4">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            Tushunarli
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitchAccentModal;
