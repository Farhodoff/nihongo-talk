import { Book, Play, Plus, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Subject } from '../../types';

interface DeckCardProps {
    subject: Subject;
    cardCount: number;
    dueCount: number;
    onAIGenerate: () => void;
}

const DeckCard: React.FC<DeckCardProps> = ({ subject, cardCount, dueCount, onAIGenerate }) => {
    return (
        <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: subject.color + '20', color: subject.color }}>
                    <Book size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-foreground">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{cardCount} kartalar</p>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hozirgi</span>
                    <span className="font-bold text-primary">{dueCount}</span>
                </div>

                <div className="pt-4 flex gap-2">
                    <Link to={`/flashcards/study/${subject.id}`} className="flex-1">
                        <Button className="w-full flex justify-center items-center gap-2" disabled={dueCount === 0}>
                            <Play size={16} /> O'rganish
                        </Button>
                    </Link>
                    <Button
                        variant="secondary"
                        className="px-3 text-primary"
                        onClick={onAIGenerate}
                        title="AI bilan yaratish"
                    >
                        <Sparkles size={20} />
                    </Button>
                    <Link to={`/flashcards/new?subjectId=${subject.id}`}>
                        <Button variant="secondary" className="px-3 text-muted-foreground hover:text-foreground">
                            <Plus size={20} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DeckCard;
