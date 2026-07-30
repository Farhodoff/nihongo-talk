import { Book, Play, Plus, Sparkles, Download, GraduationCap, Award, BookOpen, Code, Mic, Globe, Beaker, Atom, Music, Palette, Dumbbell, Trash2, Archive, ArchiveRestore, CheckSquare, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Subject } from '../../types';

interface DeckCardProps {
    subject: Subject;
    cardCount: number;
    dueCount: number;
    isSelected?: boolean;
    onToggleSelect?: () => void;
    onToggleArchive?: () => void;
    onDelete?: () => void;
    onAIGenerate: () => void;
    onPopulatePreset?: () => void;
}

const renderSubjectIcon = (iconName?: string) => {
    if (!iconName) return <Book size={22} />;
    
    // Check if it's an emoji (or non-ascii symbol)
    if (/\p{Extended_Pictographic}/u.test(iconName)) {
        return <span className="text-xl leading-none">{iconName}</span>;
    }

    const lower = iconName.toLowerCase().trim();
    if (lower === 'sparkles') return <Sparkles size={22} />;
    if (lower.includes('graduation')) return <GraduationCap size={22} />;
    if (lower === 'award') return <Award size={22} />;
    if (lower === 'code') return <Code size={22} />;
    if (lower === 'mic') return <Mic size={22} />;
    if (lower === 'book' || lower === 'bookopen') return <BookOpen size={22} />;
    if (lower === 'globe') return <Globe size={22} />;
    if (lower === 'beaker' || lower === 'science') return <Beaker size={22} />;
    if (lower === 'atom') return <Atom size={22} />;
    if (lower === 'music') return <Music size={22} />;
    if (lower === 'art' || lower === 'palette') return <Palette size={22} />;
    if (lower === 'sport' || lower === 'dumbbell') return <Dumbbell size={22} />;

    // Fallback: If it's short string (emoji), render text, else fallback icon
    if (iconName.length <= 4) {
        return <span className="text-xl leading-none">{iconName}</span>;
    }

    return <Book size={22} />;
};

const DeckCard: React.FC<DeckCardProps> = ({ 
    subject, 
    cardCount, 
    dueCount, 
    isSelected,
    onToggleSelect,
    onToggleArchive,
    onDelete,
    onAIGenerate, 
    onPopulatePreset 
}) => {
    return (
        <div className={`glass-card p-6 rounded-2xl hover:shadow-lg transition-all flex flex-col justify-between relative group ${
            isSelected ? 'ring-2 ring-indigo-500 bg-indigo-500/5' : ''
        }`}>
            {/* Top Bar with Select Checkbox & Quick Actions */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    {onToggleSelect && (
                        <button
                            onClick={onToggleSelect}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            title={isSelected ? "Tanlovni bekor qilish" : "Tanlash"}
                        >
                            {isSelected ? (
                                <CheckSquare size={20} className="text-indigo-600 dark:text-indigo-400" />
                            ) : (
                                <Square size={20} />
                            )}
                        </button>
                    )}

                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                        {renderSubjectIcon(subject.icon)}
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-foreground leading-snug">{subject.name}</h3>
                        <p className="text-sm font-semibold text-muted-foreground">{cardCount} ta kartochka</p>
                    </div>
                </div>

                {/* Quick Action Icons (Archive / Delete) */}
                <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    {onToggleArchive && (
                        <button
                            onClick={onToggleArchive}
                            className="p-1.5 text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10 rounded-lg transition-all"
                            title={subject.isArchived ? "Arxivdan chiqarish" : "Arxivlash"}
                        >
                            {subject.isArchived ? <ArchiveRestore size={16} /> : <Archive size={16} />}
                        </button>
                    )}

                    {onDelete && (
                        <button
                            onClick={onDelete}
                            className="p-1.5 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
                            title="To'plamni o'chirish"
                        >
                            <Trash2 size={16} />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex justify-between text-xs font-bold mb-4">
                <span className="text-muted-foreground">Bugungi takrorlash:</span>
                <span className={`px-2 py-0.5 rounded-full ${dueCount > 0 ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-emerald-500/10 text-emerald-600'}`}>
                    {dueCount > 0 ? `${dueCount} ta kutilmoqda` : 'Barchasi bajargan ✨'}
                </span>
            </div>

            <div className="space-y-3">
                {cardCount === 0 && onPopulatePreset ? (
                    <Button
                        onClick={onPopulatePreset}
                        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm"
                    >
                        <Download size={15} /> To'plam Kartochkalarini Yuklash ⚡
                    </Button>
                ) : (
                    <div className="pt-2 flex gap-2">
                        <Link to={`/flashcards/study/${subject.id}`} className="flex-1">
                            <Button 
                                className="w-full flex justify-center items-center gap-2 font-bold text-xs" 
                                disabled={cardCount === 0}
                            >
                                <Play size={15} /> {dueCount > 0 ? "O'rganish" : "Qayta Ko'rib Chiqish"}
                            </Button>
                        </Link>
                        <Button
                            variant="secondary"
                            className="px-3 text-primary"
                            onClick={onAIGenerate}
                            title="AI bilan yaratish"
                        >
                            <Sparkles size={18} />
                        </Button>
                        <Link to={`/flashcards/new?subjectId=${subject.id}`}>
                            <Button variant="secondary" className="px-3 text-muted-foreground hover:text-foreground">
                                <Plus size={18} />
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeckCard;

