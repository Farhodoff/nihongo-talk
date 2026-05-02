import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Pencil } from 'lucide-react';
import { Subject } from '../../types';
import { getIconComponent } from './constants';

interface SubjectCardProps {
    subject: Subject;
    progress: number;
    onDelete: (id: string) => void;
    onEdit: (subject: Subject) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, progress, onDelete, onEdit }) => {
    const IconComponent = getIconComponent(subject.icon);

    return (
        <div
            className="group relative rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${subject.color}dd 0%, ${subject.color}aa 100%)`,
            }}
        >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10">
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onEdit(subject);
                        }}
                        className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
                        title="Tahrirlash"
                    >
                        <Pencil size={16} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (window.confirm('Fanni o\'chirasizmi?')) onDelete(subject.id);
                        }}
                        className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
                        title="O'chirish"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>

                <Link to={`/subjects/${subject.id}`} className="block">
                    {/* Icon Circle - Smaller */}
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                        <IconComponent size={24} className="text-white" />
                    </div>

                    {/* Text Content */}
                    <h3 className="text-base font-semibold text-white mb-2 truncate">{subject.name}</h3>

                    {subject.description && (
                        <p className="text-white/80 text-xs mb-3 line-clamp-2 leading-tight">
                            {subject.description}
                        </p>
                    )}

                    {/* Progress Bar - Thinner */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] text-white/90 font-medium">
                            <span>O'zlashtirish</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                            <div
                                className="h-full bg-white/90 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Glow effect on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{ background: subject.color }}
            ></div>
        </div>
    );
};

export default SubjectCard;
