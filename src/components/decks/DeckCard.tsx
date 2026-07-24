import { Book, Play, Plus, Sparkles, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Subject } from '../../types';

interface DeckCardProps {
    subject: Subject;
    cardCount: number;
    dueCount: number;
    onAIGenerate: () => void;
    onPopulatePreset?: () => void;
}

const DeckCard: React.FC<DeckCardProps> = ({ subject, cardCount, dueCount, onAIGenerate, onPopulatePreset }) => {
    return (
        <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                        {subject.icon || <Book size={24} />}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground leading-snug">{subject.name}</h3>
                        <p className="text-sm font-semibold text-muted-foreground">{cardCount} ta kartochka</p>
                    </div>
                </div>

                <div className="flex justify-between text-xs font-bold mb-4">
                    <span className="text-muted-foreground">Bugungi takrorlash:</span>
                    <span className={`px-2 py-0.5 rounded-full ${dueCount > 0 ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-emerald-500/10 text-emerald-600'}`}>
                        {dueCount > 0 ? `${dueCount} ta kutilmoqda` : 'Barchasi bajargan ✨'}
                    </span>
                </div>
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
