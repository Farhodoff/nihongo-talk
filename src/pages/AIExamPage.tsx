import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, Loader2, Award, CheckCircle2, XCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { generateExamWithAI, ExamQuestion } from '../utils/ai';

const AIExamPage: React.FC = () => {
    const { id: routeSubjectId } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const { subjects, notes, flashcards, awardXP, settings } = useStudyData();

    // Configuration Phase
    const [subjectId, setSubjectId] = useState(routeSubjectId || '');
    const [questionCount, setQuestionCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);

    // Exam Phase
    const [questions, setQuestions] = useState<ExamQuestion[]>([]);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [examState, setExamState] = useState<'setup' | 'testing' | 'results'>('setup');

    // Stats
    const [score, setScore] = useState(0);
    const [xpEarned, setXpEarned] = useState(0);

    const handleStartExam = async () => {
        if (!subjectId) return alert('Iltimos, fanni tanlang!');

        const selectedSubject = subjects.find(s => s.id === subjectId);
        if (!selectedSubject) return;

        setIsLoading(true);
        try {
            // Gather Reference Content (Notes + Flashcards)
            const subjectNotes = notes
                .filter(n => n.subjectId === subjectId)
                .map(n => `Sarlavha: ${n.title}\nMatn: ${n.content}`)
                .join('\n\n');

            const subjectCards = flashcards
                .filter(f => f.subjectId === subjectId)
                .map(f => `Savol: ${f.front} - Javob: ${f.back}`)
                .join('\n');

            const referenceContent = `Konspektlar:\n${subjectNotes}\n\nFlashcardlar:\n${subjectCards}`;

            const generatedQuestions = await generateExamWithAI(
                selectedSubject.name,
                referenceContent,
                questionCount,
                settings.googleApiKey
            );

            if (generatedQuestions.length === 0) {
                throw new Error("Savollar yaratib bo'lmadi");
            }

            setQuestions(generatedQuestions);
            setCurrentQuestionIdx(0);
            setSelectedAnswers({});
            setExamState('testing');
        } catch (error) {
            console.error('Failed to start exam:', error);
            alert('AI Imtihon yaratishda xatolik yuz berdi. Iltimos, Sozlamalarda API kalitingizni tekshiring.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAnswerSelect = (optionIdx: number) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestionIdx]: optionIdx
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIdx < questions.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
        } else {
            // Calculate Results
            let correctCount = 0;
            questions.forEach((q, idx) => {
                if (selectedAnswers[idx] === q.correctAnswer) {
                    correctCount++;
                }
            });

            const points = correctCount * 50; // 50 XP per correct answer
            setScore(correctCount);
            setXpEarned(points);
            awardXP(points);
            setExamState('results');
        }
    };

    const handleReset = () => {
        setQuestions([]);
        setSelectedAnswers({});
        setExamState('setup');
        setScore(0);
        setXpEarned(0);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground"
                >
                    <ArrowLeft size={24} />
                </button>
                <div>
                    <h1 className="text-3xl font-black text-foreground flex items-center gap-2 tracking-tight">
                        <Sparkles size={28} className="text-primary" />
                        AI Imtihon Simulyatori
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        AI orqali bilimingizni tekshiring va qo'shimcha XP ballariga ega bo'ling.
                    </p>
                </div>
            </div>

            {/* Main Phase Container */}
            {examState === 'setup' && (
                /* SETUP PHASE UI */
                <div className="glass-card border-border p-8 rounded-[2rem] shadow-xl space-y-6 animate-in fade-in duration-300">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <HelpCircle className="text-primary" /> Imtihonni Sozlash
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Subject Selection */}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Fanni Tanlang</label>
                            <select
                                value={subjectId}
                                onChange={e => setSubjectId(e.target.value)}
                                className="w-full px-5 py-4 rounded-2xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-semibold"
                            >
                                <option value="">-- Fanni tanlang --</option>
                                {subjects.map(s => (
                                    <option key={s.id} value={s.id}>{s.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Questions Count Selection */}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Savollar Soni</label>
                            <div className="flex bg-background p-1.5 rounded-2xl border-2 border-border">
                                {[3, 5, 10].map(count => (
                                    <button
                                        key={count}
                                        onClick={() => setQuestionCount(count)}
                                        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                                            questionCount === count 
                                                ? 'bg-primary text-primary-foreground shadow' 
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        {count} ta savol
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Meta info / Helper */}
                    {subjectId && (
                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-sm text-primary">
                            💡 Tanlangan fan bo'yicha jami {notes.filter(n => n.subjectId === subjectId).length} ta konspekt va {flashcards.filter(f => f.subjectId === subjectId).length} ta fleshkarta topildi. AI test savollarini aynan mana shu materiallardan kelib chiqib tuzadi.
                        </div>
                    )}

                    {/* Start Button */}
                    <Button
                        onClick={handleStartExam}
                        disabled={isLoading || !subjectId}
                        className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-xl shadow-primary/20 text-base"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="animate-spin" /> Sun'iy Intellekt Savollarni Tayyorlamoqda...
                            </span>
                        ) : (
                            'Imtihonni Yaratish'
                        )}
                    </Button>
                </div>
            )}

            {examState === 'testing' && questions.length > 0 && (
                /* TESTING PHASE UI */
                <div className="glass-card border-border rounded-[2rem] p-8 shadow-xl space-y-8 animate-in fade-in duration-300">
                    {/* Progress */}
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                            Savol {currentQuestionIdx + 1} / {questions.length}
                        </span>
                        <div className="w-32 bg-muted h-2.5 rounded-full overflow-hidden">
                            <div 
                                className="bg-primary h-full transition-all duration-300"
                                style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Question Text */}
                    <h3 className="text-xl font-bold text-foreground leading-relaxed">
                        {questions[currentQuestionIdx].question}
                    </h3>

                    {/* Multiple Choice Options */}
                    <div className="grid grid-cols-1 gap-4">
                        {questions[currentQuestionIdx].options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswerSelect(idx)}
                                className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-semibold flex items-center justify-between group ${
                                    selectedAnswers[currentQuestionIdx] === idx
                                        ? 'border-primary bg-primary/10 text-primary shadow-md shadow-primary/5'
                                        : 'border-border bg-background hover:border-border/80 text-foreground'
                                }`}
                            >
                                <span className="flex items-center gap-4">
                                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                                        selectedAnswers[currentQuestionIdx] === idx
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted text-muted-foreground border border-border'
                                    }`}>
                                        {String.fromCharCode(65 + idx)}
                                    </span>
                                    {option}
                                </span>
                                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                            </button>
                        ))}
                    </div>

                    {/* Next / Submit Button */}
                    <Button
                        onClick={handleNextQuestion}
                        disabled={selectedAnswers[currentQuestionIdx] === undefined}
                        className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-xl shadow-primary/20 text-base flex items-center justify-center gap-2"
                    >
                        {currentQuestionIdx < questions.length - 1 ? 'Keyingi Savol' : 'Imtihonni Yakunlash'}
                    </Button>
                </div>
            )}

            {examState === 'results' && questions.length > 0 && (
                /* RESULTS PHASE UI */
                <div className="space-y-6 animate-in fade-in duration-500">
                    {/* Score Summary Card */}
                    <div className="bg-primary rounded-[2rem] p-8 text-primary-foreground text-center shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-8 -mb-8" />
                        
                        <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                            <Award size={40} className="text-yellow-300" />
                        </div>
                        <h2 className="text-3xl font-black mb-1">Natijalar</h2>
                        <p className="text-primary-foreground/80 text-sm mb-6">Imtihon muvaffaqiyatli topshirildi!</p>

                        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                <div className="text-3xl font-black text-yellow-300">{score} / {questions.length}</div>
                                <div className="text-xs text-primary-foreground/70 font-semibold uppercase tracking-wider mt-1">To'g'ri javoblar</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                <div className="text-3xl font-black text-green-300">+{xpEarned} XP</div>
                                <div className="text-xs text-primary-foreground/70 font-semibold uppercase tracking-wider mt-1">Qo'lga kiritilgan XP</div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Question Review List */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-foreground px-1">Savollar Tahlili</h3>
                        {questions.map((q, idx) => {
                            const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                            return (
                                <div 
                                    key={q.id} 
                                    className="glass-card border-border rounded-3xl p-6 shadow-sm flex gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        {isCorrect ? (
                                            <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-xl">
                                                <CheckCircle2 size={24} />
                                            </div>
                                        ) : (
                                            <div className="p-2 bg-destructive/10 text-destructive rounded-xl">
                                                <XCircle size={24} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-3 flex-1 min-w-0">
                                        <h4 className="font-bold text-foreground text-[15px] leading-relaxed">
                                            {q.question}
                                        </h4>
                                        <div className="space-y-1.5 text-sm">
                                            <p className="text-muted-foreground">
                                                Sizning javobingiz:{' '}
                                                <span className={`font-bold ${isCorrect ? 'text-emerald-500' : 'text-destructive'}`}>
                                                    {q.options[selectedAnswers[idx]] || 'Javobsiz'}
                                                </span>
                                            </p>
                                            {!isCorrect && (
                                                <p className="text-muted-foreground">
                                                    To'g'ri javob:{' '}
                                                    <span className="font-bold text-emerald-500">
                                                        {q.options[q.correctAnswer]}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                        <div className="p-4 bg-muted/50 rounded-2xl text-xs leading-relaxed text-muted-foreground border border-border">
                                            <span className="font-bold text-foreground block mb-1">Izoh (AI):</span>
                                            {q.explanation}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Reset Button */}
                    <Button
                        onClick={handleReset}
                        className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-xl shadow-primary/20 text-base"
                    >
                        Qaytadan Imtihon Topshirish
                    </Button>
                </div>
            )}
        </div>
    );
};

export default AIExamPage;
