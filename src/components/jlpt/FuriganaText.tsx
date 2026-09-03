import React from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';

interface FuriganaTextProps {
  text: string;
  className?: string;
  rubyClassName?: string;
  /** Override global setting for specific usage */
  forceShow?: boolean;
}

/**
 * Renders Japanese text with optional Furigana (ruby) annotations.
 * Respects global showFurigana / showRomaji settings from StudyPlannerContext.
 *
 * Syntax: 漢字[かんじ] — wraps kanji with its reading in brackets.
 * Example: "日本語[にほんご]を勉強[べんきょう]する"
 */
export const FuriganaText: React.FC<FuriganaTextProps> = ({
  text,
  className = '',
  rubyClassName = 'text-xs text-indigo-400 font-normal select-none',
  forceShow,
}) => {
  const { settings } = useStudyData();
  const showFurigana = forceShow !== undefined ? forceShow : (settings?.showFurigana ?? true);

  if (!text) return null;

  // Pattern matches Kanji[Furigana] or Kanji(Furigana) or Kanji（Furigana）
  const regex =
    /([一-龯々〆ヵヶA-Za-z0-9]+)(?:\[([^\]]+)\]|\(([\u3040-\u309f\u30a0-\u30ff]+)\)|（([\u3040-\u309f\u30a0-\u30ff]+)）)/g;
  const parts: { type: 'text' | 'ruby'; content?: string; kanji?: string; furigana?: string }[] =
    [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
    }
    const reading = match[2] || match[3] || match[4];
    parts.push({ type: 'ruby', kanji: match[1], furigana: reading });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.substring(lastIndex) });
  }

  return (
    <span className={`inline-flex flex-wrap items-baseline leading-relaxed ${className}`}>
      {parts.map((part, idx) => {
        if (part.type === 'text') {
          return <span key={idx}>{part.content}</span>;
        }
        if (!showFurigana) {
          return <span key={idx}>{part.kanji}</span>;
        }
        return (
          <ruby key={idx} className="mx-[1px] inline-flex flex-col items-center">
            <span className="leading-none">{part.kanji}</span>
            <rt className={`pt-0.5 leading-none tracking-tight ${rubyClassName}`}>
              {part.furigana}
            </rt>
          </ruby>
        );
      })}
    </span>
  );
};

export default FuriganaText;
