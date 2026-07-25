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
    forceShow
}) => {
    const { settings } = useStudyData();
    const showFurigana = forceShow !== undefined ? forceShow : settings.showFurigana;

    if (!text) return null;

    // Pattern matches Kanji[Furigana] e.g. 日本[にほん] or 漢字[かんじ]
    const regex = /([一-龯ヶ々A-Za-z\u3040-\u30FF]+)\[([^\]]+)\]/g;
    const parts: { type: 'text' | 'ruby'; content?: string; kanji?: string; furigana?: string }[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
        }
        parts.push({ type: 'ruby', kanji: match[1], furigana: match[2] });
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
                    <ruby key={idx} className="inline-flex flex-col items-center mx-[1px]">
                        <span className="leading-none">{part.kanji}</span>
                        <rt className={`leading-none pt-0.5 tracking-tight ${rubyClassName}`}>{part.furigana}</rt>
                    </ruby>
                );
            })}
        </span>
    );
};

export default FuriganaText;
