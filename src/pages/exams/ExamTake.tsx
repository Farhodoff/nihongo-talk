import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2, ArrowLeft, PenTool, Mic, FileText, Headphones, CheckCircle2, XCircle } from 'lucide-react';
import { WritingSection } from '../../components/exams/WritingSection';
import { SpeakingSection } from '../../components/exams/SpeakingSection';
import { Button } from '../../components/ui/Button';

export const ExamTake: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [exam, setExam] = useState<any>(null);
    const [sections, setSections] = useState<any[]>([]);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Questions and user answers state
    const [questions, setQuestions] = useState<any[]>([]);
    const [loadingQuestions, setLoadingQuestions] = useState(false);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [submittedResults, setSubmittedResults] = useState<{ score: number; total: number } | null>(null);

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const { data: examData } = await supabase.from('exams').select('*').eq('id', id).single();
                setExam(examData);

                const { data: sectionsData } = await supabase
                    .from('exam_sections')
                    .select('*')
                    .eq('exam_id', id)
                    .order('order_index', { ascending: true });
                
                setSections(sectionsData || []);
                if (sectionsData && sectionsData.length > 0) {
                    setActiveSectionId(sectionsData[0].id);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchExam();
    }, [id]);

    // Fetch questions when active section changes
    useEffect(() => {
        if (!activeSectionId) return;

        const activeSec = sections.find(s => s.id === activeSectionId);
        if (activeSec && (activeSec.type === 'Reading' || activeSec.type === 'Listening')) {
            setLoadingQuestions(true);
            setSubmittedResults(null);
            setUserAnswers({});
            supabase
                .from('exam_questions')
                .select('*')
                .eq('section_id', activeSectionId)
                .order('order_index', { ascending: true })
                .then(({ data }) => {
                    setQuestions(data || []);
                    setLoadingQuestions(false);
                });
        }
    }, [activeSectionId, sections]);

    const handleSelectOption = (questionId: string, option: string) => {
        if (submittedResults) return; // Prevent changing after submission
        setUserAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const handleSubmitAnswers = () => {
        let correctCount = 0;
        questions.forEach(q => {
            if (userAnswers[q.id] === q.correct_answer) {
                correctCount++;
            }
        });
        setSubmittedResults({ score: correctCount, total: questions.length });
    };

    if (loading) return <div className="p-12 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-500" /></div>;
    if (!exam) return <div className="p-12 text-center text-slate-500">Imtihon topilmadi.</div>;

    const activeSection = sections.find(s => s.id === activeSectionId);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <button onClick={() => navigate(-1)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 transition">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
                <div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full uppercase">
                        {exam.type}
                    </span>
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{exam.title}</h1>
                </div>
            </div>

            {/* Sections Tab Navigation */}
            <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto">
                {sections.map(section => {
                    const isActive = section.id === activeSectionId;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveSectionId(section.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                                isActive
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                            }`}
                        >
                            {section.type === 'Writing' && <PenTool className="w-4 h-4" />}
                            {section.type === 'Speaking' && <Mic className="w-4 h-4" />}
                            {section.type === 'Reading' && <FileText className="w-4 h-4" />}
                            {section.type === 'Listening' && <Headphones className="w-4 h-4" />}
                            {section.title}
                        </button>
                    );
                })}
            </div>

            {/* Active Section Content */}
            <div className="pt-2">
                {activeSection ? (
                    <div>
                        {activeSection.type === 'Writing' && (
                            <WritingSection
                                examType={exam.type.includes('JLPT') ? 'JLPT' : 'IELTS'}
                                promptText={activeSection.content || "IELTS/JLPT Writing Task prompti..."}
                                promptId={activeSection.id}
                                sessionId={id || ''}
                            />
                        )}

                        {activeSection.type === 'Speaking' && (
                            <SpeakingSection
                                examType={exam.type.includes('JLPT') ? 'JLPT' : 'IELTS'}
                                promptText={activeSection.content || "IELTS/JLPT Speaking Topic..."}
                                promptId={activeSection.id}
                                sessionId={id || ''}
                            />
                        )}

                        {(activeSection.type === 'Reading' || activeSection.type === 'Listening') && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left Side: Dokkai Reading Passage / Text */}
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4 max-h-[75vh] overflow-y-auto">
                                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <FileText className="w-5 h-5 text-indigo-500" />
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                                            {activeSection.title} (Dokkai Matni)
                                        </h3>
                                    </div>
                                    <div className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                                        {activeSection.content || "Hali matn kiritilmagan."}
                                    </div>
                                </div>

                                {/* Right Side: Questions & Option Selector */}
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Savollar</h3>
                                        {submittedResults && (
                                            <span className="text-sm font-bold text-green-600 bg-green-50 dark:bg-green-500/10 px-3 py-1 rounded-full">
                                                Natija: {submittedResults.score} / {submittedResults.total}
                                            </span>
                                        )}
                                    </div>

                                    {loadingQuestions ? (
                                        <div className="py-8 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-indigo-500" /></div>
                                    ) : questions.length > 0 ? (
                                        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-1">
                                            {questions.map((q, qIdx) => {
                                                const isCorrect = userAnswers[q.id] === q.correct_answer;
                                                return (
                                                    <div key={q.id} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
                                                        <p className="font-bold text-sm text-slate-900 dark:text-white">
                                                            {qIdx + 1}. {q.question_text}
                                                        </p>

                                                        {q.options && (
                                                            <div className="space-y-2">
                                                                {(q.options as string[]).map((opt, optIdx) => {
                                                                    const isSelected = userAnswers[q.id] === opt;
                                                                    let btnStyle = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400";

                                                                    if (submittedResults) {
                                                                        if (opt === q.correct_answer) {
                                                                            btnStyle = "bg-green-500/10 border-green-500 text-green-600 font-bold";
                                                                        } else if (isSelected && !isCorrect) {
                                                                            btnStyle = "bg-red-500/10 border-red-500 text-red-600";
                                                                        }
                                                                    } else if (isSelected) {
                                                                        btnStyle = "bg-indigo-600 text-white font-bold border-indigo-600";
                                                                    }

                                                                    return (
                                                                        <button
                                                                            key={optIdx}
                                                                            onClick={() => handleSelectOption(q.id, opt)}
                                                                            className={`w-full text-left p-3 rounded-xl border text-sm transition flex items-center justify-between ${btnStyle}`}
                                                                        >
                                                                            <span>{String.fromCharCode(65 + optIdx)}) {opt}</span>
                                                                            {submittedResults && opt === q.correct_answer && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                                                            {submittedResults && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500" />}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}

                                            {!submittedResults ? (
                                                <Button
                                                    onClick={handleSubmitAnswers}
                                                    disabled={Object.keys(userAnswers).length === 0}
                                                    className="w-full py-3"
                                                >
                                                    Javoblarni tekshirish ({Object.keys(userAnswers).length}/{questions.length})
                                                </Button>
                                            ) : (
                                                <Button variant="outline" onClick={() => setSubmittedResults(null)} className="w-full py-3">
                                                    Qayta urinish
                                                </Button>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-center py-8 text-slate-400 text-sm">
                                            Bu bo'limga hali savollar kiritilmagan.
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-12 text-slate-400">Bo'lim tanlanmagan yoki yuklanmadi.</div>
                )}
            </div>
        </div>
    );
};

export default ExamTake;
