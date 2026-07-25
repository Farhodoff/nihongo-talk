import React from 'react';

interface FuriganaTextProps {
    text: string;
    className?: string;
    rubyClassName?: string;
}

export const FuriganaText: React.FC<FuriganaTextProps> = ({ text, className = '', rubyClassName = 'text-xs text-indigo-400 font-normal select-none' }) => {
    if (!text) return null;

    // Pattern matches Kanji[Furigana] e.g. 日本[にほん] or 漢字[かんじ]
    const regex = /([一-龯ヶ々]+)\[([^\]]+)\]/g;
    const parts = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        // Push text before match
        if (match.index > lastIndex) {
            parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
        }

        // Push ruby pair
        parts.push({
            type: 'ruby',
            kanji: match[1],
            furigana: match[2]
        });

        lastIndex = regex.lastIndex;
    }

    // Remaining text
    if (lastIndex < text.length) {
        parts.push({ type: 'text', content: text.substring(lastIndex) });
    }

    return (
        <span className={`inline-flex flex-wrap items-baseline leading-relaxed ${className}`}>
            {parts.map((part, idx) => {
                if (part.type === 'text') {
                    return <span key={idx}>{part.content}</span>;
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
