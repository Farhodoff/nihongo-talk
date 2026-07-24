import React from 'react';
import { Flame, Sparkles, GraduationCap, Briefcase, Compass, Coffee } from 'lucide-react';

export type CoachPersona = 'roast' | 'gentle' | 'ielts' | 'interview' | 'travel' | 'casual';

export const PERSONAS_BY_LANG: Record<'en' | 'ja', Record<CoachPersona, { name: string; icon: any; color: string; gradientBg: string; desc: string; badge: string; emoji: string }>> = {
    en: {
        roast: {
            name: 'Strict Roast Coach',
            icon: Flame,
            color: 'from-orange-500 to-rose-600',
            gradientBg: 'from-orange-500/20 via-rose-500/10 to-transparent',
            desc: 'Kamchiliklaringizni shafqatsiz va hazil aralash roast qiladi',
            badge: '🌶️ Shiddatli & Roast',
            emoji: '🔥'
        },
        gentle: {
            name: 'Sabrli Tutor',
            icon: Sparkles,
            color: 'from-emerald-400 to-teal-600',
            gradientBg: 'from-emerald-500/20 via-teal-500/10 to-transparent',
            desc: 'Yumshoq va xushmuomala tarzda xatolaringizni tushuntiradi',
            badge: '🌿 Muloyim & Sabrli',
            emoji: '✨'
        },
        ielts: {
            name: 'IELTS Examiner',
            icon: GraduationCap,
            color: 'from-blue-500 to-indigo-600',
            gradientBg: 'from-blue-500/20 via-indigo-500/10 to-transparent',
            desc: 'IELTS Speaking standarti bo\'yicha savol-javob qiladi',
            badge: '🎓 IELTS Imtihonchi',
            emoji: '🎓'
        },
        interview: {
            name: 'Tech Interviewer',
            icon: Briefcase,
            color: 'from-purple-500 to-violet-700',
            gradientBg: 'from-purple-500/20 via-violet-500/10 to-transparent',
            desc: 'Ishga kirish suhbatlariga ingliz tilida tayyorlaydi',
            badge: '💼 HR & Intervyuer',
            emoji: '💼'
        },
        travel: {
            name: 'Travel & Airport',
            icon: Compass,
            color: 'from-cyan-500 to-blue-600',
            gradientBg: 'from-cyan-500/20 via-blue-500/10 to-transparent',
            desc: 'Aeroport, mehmonxona va restoranlarda muloqot mashqi',
            badge: '✈️ Sayohat & Aeroport',
            emoji: '✈️'
        },
        casual: {
            name: 'Casual Friend',
            icon: Coffee,
            color: 'from-amber-500 to-orange-600',
            gradientBg: 'from-amber-500/20 via-orange-500/10 to-transparent',
            desc: 'Erkin, do\'stona va kundalik mavzularda suhbatdosh',
            badge: '☕ Do\'stona Suhbat',
            emoji: '☕'
        }
    },
    ja: {
        roast: {
            name: "厳格な先生 (Qattiqqo'l Sensei)",
            icon: Flame,
            color: 'from-red-500 to-rose-600',
            gradientBg: 'from-red-500/20 via-rose-500/10 to-transparent',
            desc: 'Keigo va yapon tili xatolarini zudlik bilan tuzatadi',
            badge: '🔥 厳格 (Qattiqqo\'l)',
            emoji: '🔥'
        },
        gentle: {
            name: '優しいチューター (Sabrli Sensei)',
            icon: Sparkles,
            color: 'from-emerald-400 to-teal-600',
            gradientBg: 'from-emerald-500/20 via-teal-500/10 to-transparent',
            desc: 'Boshlovchilar uchun muloyim va tushunarli muloqot',
            badge: '🌸 優しい (Muloyim)',
            emoji: '🌸'
        },
        ielts: {
            name: 'JLPT 会話試験官 (JLPT Examiner)',
            icon: GraduationCap,
            color: 'from-blue-500 to-indigo-600',
            gradientBg: 'from-blue-500/20 via-indigo-500/10 to-transparent',
            desc: 'JLPT N5-N1 darajasidagi og\'zaki suhbat imtihoni',
            badge: '🎌 面接 (JLPT Imtihonchi)',
            emoji: '🎌'
        },
        interview: {
            name: '面接官 (Job Interviewer)',
            icon: Briefcase,
            color: 'from-purple-500 to-violet-700',
            gradientBg: 'from-purple-500/20 via-violet-500/10 to-transparent',
            desc: 'Yaponiyada ishga kirish (Syukatsu) suhbati mashqi',
            badge: '💼 就活 (Intervyuer)',
            emoji: '💼'
        },
        travel: {
            name: '旅行ガイド (Travel Coach)',
            icon: Compass,
            color: 'from-cyan-500 to-blue-600',
            gradientBg: 'from-cyan-500/20 via-blue-500/10 to-transparent',
            desc: 'Tokio, aeroport va restoranlarda yaponcha muloqot',
            badge: '🗼 旅行 (Sayohat)',
            emoji: '🗼'
        },
        casual: {
            name: '日常会話の友達 (Casual Friend)',
            icon: Coffee,
            color: 'from-amber-500 to-orange-600',
            gradientBg: 'from-amber-500/20 via-orange-500/10 to-transparent',
            desc: 'Do\'stona va erkin uslubdagi yaponcha suhbat',
            badge: '🍵 友達 (Do\'st)',
            emoji: '🍵'
        }
    }
};

interface PersonaSelectorProps {
    language: 'en' | 'ja';
    selectedPersona: CoachPersona;
    onSelectPersona: (p: CoachPersona) => void;
    disabled?: boolean;
}

export const PersonaSelector: React.FC<PersonaSelectorProps> = ({
    language,
    selectedPersona,
    onSelectPersona,
    disabled = false,
}) => {
    const personas = PERSONAS_BY_LANG[language];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {(Object.keys(personas) as CoachPersona[]).map(pKey => {
                const p = personas[pKey];
                const IconComponent = p.icon;
                const isSelected = selectedPersona === pKey;

                return (
                    <button
                        key={pKey}
                        disabled={disabled}
                        onClick={() => onSelectPersona(pKey)}
                        className={`p-3.5 rounded-2xl text-left transition-all border relative overflow-hidden flex flex-col justify-between ${
                            isSelected
                                ? `bg-gradient-to-br ${p.gradientBg} border-primary shadow-md ring-2 ring-primary/20`
                                : 'bg-card hover:bg-muted/50 border-border/70 text-muted-foreground'
                        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                    >
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className={`p-2 rounded-xl bg-gradient-to-r ${p.color} text-white shadow-sm`}>
                                    <IconComponent size={16} />
                                </span>
                                <span className="text-xs font-bold">{p.emoji}</span>
                            </div>
                            <h4 className="text-xs font-extrabold text-foreground line-clamp-1">{p.name}</h4>
                            <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                                {p.desc}
                            </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-border/30 flex justify-between items-center text-[10px] font-bold">
                            <span className="text-primary">{p.badge}</span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};
