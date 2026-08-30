import React, { useState } from 'react';
import { ScenarioSessionResult } from './scenarioTypes';
import { VoicePlaybackBar } from './VoicePlaybackBar';
import { Award, CheckCircle2, XCircle, Sparkles, RotateCcw, ArrowRight, X, Layers } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';

interface ScenarioReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    result: ScenarioSessionResult | null;
    isLoading: boolean;
    recordedUrl?: string | null;
    durationSeconds?: number;
    isPlayingRecorded?: boolean;
    audioProgressRecorded?: number;
    onPlayRecorded?: () => void;
    onPauseRecorded?: () => void;
    onRetry?: () => void;
}

export const ScenarioReportModal: React.FC<ScenarioReportModalProps> = ({
    isOpen,
    onClose,
    result,
    isLoading,
    recordedUrl,
    durationSeconds = 0,
    isPlayingRecorded = false,
    audioProgressRecorded = 0,
    onPlayRecorded,
    onPauseRecorded,
    onRetry,
}) => {
    const { addFlashcardsBatch } = useStudyData();
    const [isExporting, setIsExporting] = useState(false);

    if (!isOpen) return null;

    const handleExportToFlashcards = async () => {
        if (!result) return;
        const phrases = [...(result.key_phrases_missed || []), ...(result.key_phrases_used || [])];
        if (phrases.length === 0) {
            toast({
                title: 'ℹ️ Iboralar yo\'q',
                description: 'Fleshkartaga saqlash uchun kalit iboralar topilmadi.'
            });
            return;
        }

        setIsExporting(true);
        try {
            const cards = phrases.map(p => ({
                front: `🇯🇵 Scenario Iborasi (${result.scenario_title}):\n"${p}"`,
                back: `✨ Kontekst: ${result.scenario_title}\n\n💡 Tavsiya: ${result.ai_feedback.substring(0, 150)}...`,
                subjectId: '00000000-0000-4000-8000-000000000001' // JLPT Master
            }));

            // Deduplicate
            const uniqueCards = cards.filter((c, i, self) => i === self.findIndex(x => x.front === c.front));
            await addFlashcardsBatch(uniqueCards);

            toast({
                title: '🎴 Fleshkartalar Yaratildi!',
                description: `${uniqueCards.length} ta yaponcha iboralar Anki SM-2 Fleshkartalariga saqlandi.`
            });
        } catch (e) {
            toast({
                variant: 'destructive',
                title: 'Xatolik',
                description: 'Fleshkartalarga eksport qilishda xatolik yuz berdi.'
            });
        } finally {
            setIsExporting(false);
        }
    };

    const getGrade = (score: number) => {
        if (score >= 90) return { label: 'S (A`lo)', color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' };
        if (score >= 80) return { label: 'A (Juda yaxshi)', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' };
        if (score >= 70) return { label: 'B (Yaxshi)', color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30' };
        return { label: 'C (Qoniqarli)', color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' };
    };

    const grade = result ? getGrade(result.overall_score) : null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="max-w-2xl w-full bg-card border border-border p-6 rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-1.5 text-muted-foreground hover:text-foreground rounded-xl transition-colors"
                >
                    <X size={18} />
                </button>
                {isLoading || !result ? (
                    <div className="py-16 text-center space-y-4">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
                        <h3 className="text-base font-extrabold text-foreground">
                            AI Scenario va Pronunciation Tahlil qilinmoqda...
                        </h3>
                        <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                            Talaffuzingiz, yaponcha key iboralar ishlatilishi va grammatikangiz AI tomonidan baholanmoqda.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Header Banner */}
                        <div className="flex items-center justify-between border-b border-border/80 pb-4">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A961] bg-[#C9A961]/10 px-2.5 py-1 rounded-full border border-[#C9A961]/20">
                                    Suhbat Natijasi
                                </span>
                                <h2 className="text-xl font-extrabold text-foreground mt-1">
                                    {result.scenario_title}
                                </h2>
                            </div>
                            {grade && (
                                <div className={`px-4 py-2 rounded-2xl border text-sm font-extrabold flex items-center gap-2 ${grade.color}`}>
                                    <Award size={18} />
                                    <span>{grade.label}</span>
                                </div>
                            )}
                        </div>

                        {/* Audio Playback of Student Voice */}
                        {recordedUrl && onPlayRecorded && onPauseRecorded && (
                            <VoicePlaybackBar
                                recordedUrl={recordedUrl}
                                durationSeconds={durationSeconds}
                                isPlaying={isPlayingRecorded}
                                audioProgress={audioProgressRecorded}
                                onPlay={onPlayRecorded}
                                onPause={onPauseRecorded}
                            />
                        )}

                        {/* Score Dashboard Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-card border border-border rounded-2xl p-3.5 text-center">
                                <span className="text-[11px] text-muted-foreground font-medium">🎤 Talaffuz</span>
                                <div className="text-2xl font-black text-primary mt-1">
                                    {result.pronunciation_score}<span className="text-xs text-muted-foreground">/100</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{ width: `${result.pronunciation_score}%` }} />
                                </div>
                            </div>

                            <div className="bg-card border border-border rounded-2xl p-3.5 text-center">
                                <span className="text-[11px] text-muted-foreground font-medium">⚡ Silliqlik</span>
                                <div className="text-2xl font-black text-emerald-400 mt-1">
                                    {result.fluency_score}<span className="text-xs text-muted-foreground">/100</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${result.fluency_score}%` }} />
                                </div>
                            </div>

                            <div className="bg-card border border-border rounded-2xl p-3.5 text-center">
                                <span className="text-[11px] text-muted-foreground font-medium">📖 Grammatika</span>
                                <div className="text-2xl font-black text-[#C9A961] mt-1">
                                    {result.grammar_score}<span className="text-xs text-muted-foreground">/100</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div className="bg-[#C9A961] h-full rounded-full" style={{ width: `${result.grammar_score}%` }} />
                                </div>
                            </div>

                            <div className="bg-card border border-border rounded-2xl p-3.5 text-center">
                                <span className="text-[11px] text-muted-foreground font-medium">💬 Lug'at</span>
                                <div className="text-2xl font-black text-amber-400 mt-1">
                                    {result.vocabulary_score}<span className="text-xs text-muted-foreground">/100</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div className="bg-amber-400 h-full rounded-full" style={{ width: `${result.vocabulary_score}%` }} />
                                </div>
                            </div>
                        </div>

                        {/* Key Phrases Checklist */}
                        <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
                            <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                                <Sparkles size={14} className="text-[#C9A961]" />
                                <span>Scenario Kalit Iboralari Tekshiruvi</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {result.key_phrases_used.map((phrase, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-bold">
                                        <CheckCircle2 size={13} />
                                        <span>{phrase}</span>
                                    </span>
                                ))}
                                {result.key_phrases_missed.map((phrase, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-xs font-medium">
                                        <XCircle size={13} />
                                        <span>{phrase}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* AI Coach Feedback */}
                        <div className="bg-card border border-border rounded-2xl p-4 space-y-2">
                            <h4 className="text-xs font-extrabold text-[#C9A961] flex items-center gap-1.5">
                                <Sparkles size={14} />
                                <span>AI Coach Xulosasi va Tavsiyalari</span>
                            </h4>
                            <p className="text-xs text-foreground leading-relaxed whitespace-pre-line">
                                {result.ai_feedback}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between gap-3 pt-2">
                            <button
                                onClick={handleExportToFlashcards}
                                disabled={isExporting}
                                className="px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground border border-border rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                                <Layers size={14} />
                                <span>{isExporting ? 'Saqlanmoqda...' : "Iboralardan Fleshkarta Yaratish 🎴"}</span>
                            </button>

                            <div className="flex items-center gap-2">
                                {onRetry && (
                                    <button
                                        onClick={() => {
                                            onClose();
                                            onRetry();
                                        }}
                                        className="px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground border border-border rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                                    >
                                        <RotateCcw size={14} />
                                        <span>Qayta Mashq Qilish</span>
                                    </button>
                                )}

                                <button
                                    onClick={onClose}
                                    className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-primary/20 transition-all cursor-pointer active:scale-95"
                                >
                                    <span>Yopish va Saqlash</span>
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
