import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Search, Home, CheckSquare, Calendar, BookOpen, Copy, 
    Sparkles, GraduationCap, Mic, Clock, NotebookText, 
    Users, BarChart, Settings, ArrowRight, X, Compass, Brain, Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandItem {
    id: string;
    title: string;
    description: string;
    category: string;
    path: string;
    icon: React.ComponentType<any>;
    keywords: string[];
}

const COMMANDS: CommandItem[] = [
    // Boshqaruv
    { id: 'dashboard', title: 'Dashboard', description: 'Kunlik progress va xulosa', category: 'Boshqaruv', path: '/dashboard', icon: Home, keywords: ['bosh sahifa', 'asosiy', 'statistika', 'home'] },
    { id: 'tasks', title: 'Vazifalar & Reja', description: 'Rejalashtirilgan ishlar ro\'yxati', category: 'Boshqaruv', path: '/tasks', icon: CheckSquare, keywords: ['tasks', 'todo', 'ishlar', 'reja'] },
    { id: 'calendar', title: 'O\'quv Kalendari', description: 'Dars jadvali va voqealar', category: 'Boshqaruv', path: '/calendar', icon: Calendar, keywords: ['jadval', 'timetable', 'events', 'kun'] },
    { id: 'subjects', title: 'Fanlar & Kurslar', description: 'Fanlar va darsliklar boshqaruvi', category: 'Boshqaruv', path: '/subjects', icon: BookOpen, keywords: ['fan', 'dars', 'subjects', 'kurslar'] },
    
    // Fleshkartalar & Lug'at
    { id: 'flashcards', title: 'Fleshkartalar (Decks)', description: 'To\'plamlar, albomlar va SRS takrorlash', category: 'Fleshkartalar & Lug\'at', path: '/flashcards', icon: Copy, keywords: ['cards', 'lugat', 'kartochkalar', 'anki', 'srs', 'takrorlash'] },
    { id: 'vocabulary', title: 'Smart Lug\'at 🧠', description: 'So\'z boyligini kengaytirish', category: 'Fleshkartalar & Lug\'at', path: '/vocabulary', icon: Brain, keywords: ['sozlar', 'vocabulary', 'words', 'lugat'] },

    // Til & Imtihonlar
    { id: 'jlpt', title: 'JLPT Hub 🎌', description: 'Yapon tili N5-N1 imtihon va darslari', category: 'Til & Imtihonlar', path: '/jlpt', icon: Sparkles, keywords: ['yapon', 'japanese', 'n5', 'n4', 'n3', 'n2', 'n1', 'kanji'] },
    { id: 'ielts', title: 'IELTS Hub 🎓', description: 'IELTS Mock, Writing va Reading', category: 'Til & Imtihonlar', path: '/ielts', icon: GraduationCap, keywords: ['ingliz', 'english', 'ielts', 'writing', 'reading', 'listening'] },
    { id: 'speaking', title: 'AI Speaking Coach 🗣️', description: 'Jonli ovozli suhbat mashqi', category: 'Til & Imtihonlar', path: '/speaking-coach', icon: Mic, keywords: ['speaking', 'gaplashish', 'audio', 'suhbat'] },
    { id: 'scenarios', title: 'Real Scenarios 🧭', description: 'Hayotiy dialoglar va vaziyatlar', category: 'Til & Imtihonlar', path: '/scenarios', icon: Compass, keywords: ['dialog', 'suhbat', 'restoran', 'aeroport'] },

    // Fokus & Hamjamiyat
    { id: 'focus', title: 'Fokus Taymer (Pomodoro) ⏱️', description: 'Diqqatni jamlash va tanaffus', category: 'Fokus & Hamjamiyat', path: '/focus', icon: Clock, keywords: ['pomodoro', 'timer', 'vaqt', 'diqqat'] },
    { id: 'notes', title: 'Qaydlar & Konspektlar 📝', description: 'Mavzular bo\'yicha xulosalar', category: 'Fokus & Hamjamiyat', path: '/notes', icon: NotebookText, keywords: ['konspekt', 'qayd', 'notepad', 'yozuvlar'] },
    { id: 'community', title: 'Hamjamiyat & O\'quv Xonalari 👥', description: 'Boshqalar bilan birga o\'rganish', category: 'Fokus & Hamjamiyat', path: '/community', icon: Users, keywords: ['chat', 'study room', 'jamoa', 'xona'] },
    { id: 'progress', title: 'Natijalar & Tahlil 📊', description: 'O\'rganish grafigi va samaradorlik', category: 'Fokus & Hamjamiyat', path: '/progress', icon: BarChart, keywords: ['statistika', 'grafik', 'samaradorlik', 'analytics'] },
    { id: 'developers', title: 'Dasturchilar & Ochiq API 💻', description: 'Tashqi loyihalar uchun REST API va SDK', category: 'Boshqaruv', path: '/developers', icon: Code2, keywords: ['api', 'sdk', 'developer', 'dasturchi', 'rest', 'curl', 'token'] },
    { id: 'settings', title: 'Sozlamalar & Profil ⚙️', description: 'Profil, maqsadlar va interfeys', category: 'Boshqaruv', path: '/settings', icon: Settings, keywords: ['profile', 'theme', 'api', 'sozlash', 'maqsad', 'onboarding'] }
];

interface QuickCommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
}

export const QuickCommandPalette: React.FC<QuickCommandPaletteProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Auto-focus input on open
    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    const filtered = COMMANDS.filter(cmd => {
        if (!query.trim()) return true;
        const q = query.toLowerCase().trim();
        return (
            cmd.title.toLowerCase().includes(q) ||
            cmd.description.toLowerCase().includes(q) ||
            cmd.category.toLowerCase().includes(q) ||
            cmd.keywords.some(k => k.toLowerCase().includes(q))
        );
    });

    const handleSelect = (path: string) => {
        navigate(path);
        onClose();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filtered[selectedIndex]) {
                handleSelect(filtered[selectedIndex].path);
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Palette Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="relative w-full max-w-xl bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[70vh]"
                        onKeyDown={handleKeyDown}
                    >
                        {/* Search Input Bar */}
                        <div className="flex items-center px-4 py-3.5 border-b border-border/70 gap-3 bg-muted/30">
                            <Search size={20} className="text-primary shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                }}
                                placeholder="Sahifa yoki qurol qidirish... (masalan: Fleshkartalar, IELTS, Pomodoro)"
                                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                            />
                            {query && (
                                <button 
                                    onClick={() => setQuery('')}
                                    className="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground"
                                >
                                    <X size={16} />
                                </button>
                            )}
                            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold text-muted-foreground bg-muted border border-border rounded-md">
                                ESC
                            </kbd>
                        </div>

                        {/* Results List */}
                        <div className="flex-1 overflow-y-auto p-2 space-y-1">
                            {filtered.length === 0 ? (
                                <div className="p-8 text-center text-muted-foreground space-y-2">
                                    <p className="text-sm font-medium">Hech qanday natija topilmadi</p>
                                    <p className="text-xs text-muted-foreground/70">Iltimos, boshqa so'z bilan qidirib ko'ring</p>
                                </div>
                            ) : (
                                filtered.map((item, index) => {
                                    const Icon = item.icon;
                                    const isSelected = index === selectedIndex;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => handleSelect(item.path)}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left group ${
                                                isSelected 
                                                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm' 
                                                    : 'hover:bg-muted/60 text-foreground'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                                                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:text-foreground'
                                                }`}>
                                                    <Icon size={18} />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="font-bold text-sm truncate flex items-center gap-2">
                                                        {item.title}
                                                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-semibold uppercase">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                                                </div>
                                            </div>
                                            <ArrowRight size={16} className={`shrink-0 transition-transform ${isSelected ? 'translate-x-0.5 opacity-100' : 'opacity-0 -translate-x-1'}`} />
                                        </button>
                                    );
                                })
                            )}
                        </div>

                        {/* Footer Tips */}
                        <div className="px-4 py-2 bg-muted/40 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <span>Tanlash: <kbd className="font-mono font-bold bg-muted px-1.5 py-0.5 rounded border border-border">↵ Enter</kbd></span>
                                <span>Harakat: <kbd className="font-mono font-bold bg-muted px-1.5 py-0.5 rounded border border-border">↑ ↓</kbd></span>
                            </div>
                            <span className="font-medium text-primary">Kaizen Quick Jump</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
