import {
  Book,
  Play,
  Plus,
  Sparkles,
  Download,
  GraduationCap,
  Award,
  BookOpen,
  Code,
  Mic,
  Globe,
  Beaker,
  Atom,
  Music,
  Palette,
  Dumbbell,
  Trash2,
  Archive,
  ArchiveRestore,
  CheckSquare,
  Square,
} from 'lucide-react';
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
  onStudy?: () => void;
  onPopulatePreset?: () => void;
  onExploreFolders?: () => void;
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
  onStudy,
  onPopulatePreset,
  onExploreFolders,
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border bg-card p-4 transition-all hover:shadow-lg sm:rounded-3xl sm:p-6 ${
        isSelected
          ? 'border-primary bg-primary/5 ring-2 ring-primary'
          : 'border-border hover:border-primary/40'
      }`}
    >
      {/* Top Bar with Select Checkbox & Quick Actions */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
          {onToggleSelect && (
            <button
              onClick={onToggleSelect}
              className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              title={isSelected ? 'Tanlovni bekor qilish' : 'Tanlash'}
            >
              {isSelected ? (
                <CheckSquare size={20} className="text-primary" />
              ) : (
                <Square size={20} />
              )}
            </button>
          )}

          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl"
            style={{ backgroundColor: subject.color + '20', color: subject.color }}
          >
            {renderSubjectIcon(subject.icon)}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-extrabold leading-snug text-foreground sm:text-lg">
              {subject.name}
            </h3>
            <p className="text-xs font-semibold text-muted-foreground">{cardCount} ta kartochka</p>
          </div>
        </div>

        {/* Quick Action Icons (Archive / Delete) */}
        <div className="flex shrink-0 items-center gap-1 opacity-80 transition-opacity group-hover:opacity-100">
          {onToggleArchive && (
            <button
              onClick={onToggleArchive}
              className="rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-[#C9A961]/10 hover:text-[#C9A961]"
              title={subject.isArchived ? 'Arxivdan chiqarish' : 'Arxivlash'}
            >
              {subject.isArchived ? <ArchiveRestore size={16} /> : <Archive size={16} />}
            </button>
          )}

          {onDelete && (
            <button
              onClick={onDelete}
              className="rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-rose-500/10 hover:text-rose-500"
              title="To'plamni o'chirish"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 flex justify-between text-xs font-bold">
        <span className="text-muted-foreground">Bugungi takrorlash:</span>
        <span
          className={`rounded-full px-2.5 py-0.5 ${dueCount > 0 ? 'bg-[#C9A961]/15 text-[#C9A961]' : 'bg-emerald-500/10 text-emerald-500'}`}
        >
          {dueCount > 0 ? `${dueCount} ta kutilmoqda` : 'Barchasi bajargan ✨'}
        </span>
      </div>

      <div className="space-y-3">
        {cardCount === 0 && onPopulatePreset ? (
          <Button
            onClick={onPopulatePreset}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-extrabold text-primary-foreground shadow-xs hover:bg-primary/90"
          >
            <Download size={15} /> To'plam Kartochkalarini Yuklash ⚡
          </Button>
        ) : (
          <div className="flex flex-wrap gap-2 pt-2 sm:flex-nowrap">
            {onStudy ? (
              <Button
                onClick={onStudy}
                className="flex min-w-[120px] flex-1 items-center justify-center gap-2 bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90"
                disabled={cardCount === 0}
              >
                <Play size={15} /> {dueCount > 0 ? "O'rganish" : "Qayta Ko'rib Chiqish"}
              </Button>
            ) : (
              <Link to={`/flashcards?study=${subject.id}`} className="min-w-[120px] flex-1">
                <Button
                  className="flex w-full items-center justify-center gap-2 bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90"
                  disabled={cardCount === 0}
                >
                  <Play size={15} /> {dueCount > 0 ? "O'rganish" : "Qayta Ko'rib Chiqish"}
                </Button>
              </Link>
            )}
            <div className="flex shrink-0 items-center gap-1.5">
              {onExploreFolders && (
                <Button
                  variant="secondary"
                  className="px-2.5 text-foreground hover:text-primary sm:px-3"
                  onClick={onExploreFolders}
                  title="Keyingi qismlar / Jildlarni ko'rish"
                >
                  <BookOpen size={17} />
                </Button>
              )}
              <Button
                variant="secondary"
                className="px-2.5 text-primary hover:bg-primary/10 sm:px-3"
                onClick={onAIGenerate}
                title="AI bilan yaratish"
              >
                <Sparkles size={17} />
              </Button>
              <Link to={`/flashcards/new?subjectId=${subject.id}`}>
                <Button
                  variant="secondary"
                  className="px-2.5 text-muted-foreground hover:text-foreground sm:px-3"
                >
                  <Plus size={17} />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeckCard;
