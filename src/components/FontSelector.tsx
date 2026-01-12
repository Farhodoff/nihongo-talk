import { Type } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { FontType, useFontPreference } from '../hooks/useFontPreference';

const fonts: { id: FontType; name: string; class: string; example: string }[] = [
    { id: 'sans', name: 'Sans-Serif', class: 'font-sans', example: 'Zamonaviy va toza' },
    { id: 'serif', name: 'Serif', class: 'font-serif', example: 'Kitob uslubi' },
    { id: 'mono', name: 'Monospace', class: 'font-mono', example: 'Kod va algoritmlar' },
];

const FontSelector: React.FC = () => {
    const { font, changeFont } = useFontPreference();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleFontSelect = (fontId: FontType) => {
        changeFont(fontId);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={menuRef}>
            {/* Aa Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-bold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-1.5"
                title="Shrift turini tanlash"
            >
                <Type size={16} />
                <span className="text-sm">Aa</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg p-3 w-64 z-50">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase mb-3 px-1">
                        Shrift turi
                    </p>
                    <div className="flex flex-col gap-2">
                        {fonts.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => handleFontSelect(f.id)}
                                className={`p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg border transition-all ${f.class
                                    } ${font === f.id
                                        ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20 dark:ring-blue-400/20 bg-blue-50/50 dark:bg-blue-900/20'
                                        : 'border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {f.name}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            {f.example}
                                        </div>
                                    </div>
                                    {font === f.id && (
                                        <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FontSelector;
