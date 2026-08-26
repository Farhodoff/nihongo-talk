import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2, ArrowLeft, PenTool, Mic, FileText, Headphones, CheckCircle2, XCircle, Award } from 'lucide-react';
import { WritingSection } from '../../components/exams/WritingSection';
import { SpeakingSection } from '../../components/exams/SpeakingSection';
import { Button } from '../../components/ui/Button';
import { ExamCertificateModal } from '../../components/exams/ExamCertificateModal';
import { useStudyData } from '../../context/StudyPlannerContext';
import { HistoryService } from '../../services/HistoryService';

// Built-in standalone exams catalog when DB records do not exist
const BUILTIN_EXAMS: Record<string, {
    exam: any;
    sections: any[];
    questionsBySection: Record<string, any[]>;
}> = {
    'exam_ielts_academic_1': {
        exam: {
            id: 'exam_ielts_academic_1',
            title: 'IELTS Academic Full Mock Test #1',
            type: 'IELTS (Academic)',
            description: 'Full Reading, Listening, Writing & Speaking simulation test'
        },
        sections: [
            {
                id: 'sec_ielts_read_1',
                exam_id: 'exam_ielts_academic_1',
                title: 'Reading Passage 1: The Renewable Energy Revolution',
                type: 'Reading',
                order_index: 1,
                content: `Renewable energy resources have expanded exponentially over the past two decades. Solar and wind power technologies have witnessed a dramatic plunge in manufacturing costs, making green energy competitive with traditional fossil fuel power plants.\n\nCountries worldwide are setting ambitious targets to transition towards net-zero carbon emissions by 2050. However, integrating intermittent power sources into existing national electrical grids poses major technological challenges. Advanced grid-scale battery storage and decentralized microgrid systems are proving crucial in addressing this variability.`
            },
            {
                id: 'sec_ielts_write_1',
                exam_id: 'exam_ielts_academic_1',
                title: 'Writing Task 2: Academic Essay',
                type: 'Writing',
                order_index: 2,
                content: 'Some experts believe that governments should spend money on space exploration, while others think this money should be used for public services like healthcare and education. Discuss both views and give your opinion.'
            },
            {
                id: 'sec_ielts_speak_1',
                exam_id: 'exam_ielts_academic_1',
                title: 'Speaking Part 2: Cue Card Practice',
                type: 'Speaking',
                order_index: 3,
                content: 'Describe an important achievement in your academic or professional life. You should say: what it was, when it happened, how you achieved it, and explain why it was so meaningful to you.'
            }
        ],
        questionsBySection: {
            'sec_ielts_read_1': [
                {
                    id: 'q_ielts_1',
                    section_id: 'sec_ielts_read_1',
                    question_text: 'What has made solar and wind energy competitive with fossil fuels?',
                    options: ['Higher government subsidies', 'Plunge in manufacturing costs', 'Shortage of coal and oil', 'Public protests'],
                    correct_answer: 'Plunge in manufacturing costs',
                    order_index: 1
                },
                {
                    id: 'q_ielts_2',
                    section_id: 'sec_ielts_read_1',
                    question_text: 'By which target year are many countries striving for net-zero carbon emissions?',
                    options: ['2030', '2040', '2050', '2060'],
                    correct_answer: '2050',
                    order_index: 2
                },
                {
                    id: 'q_ielts_3',
                    section_id: 'sec_ielts_read_1',
                    question_text: 'What is essential to address the variability of intermittent power sources?',
                    options: ['Building more coal plants', 'Grid-scale battery storage', 'Reducing domestic energy use', 'Increasing oil exports'],
                    correct_answer: 'Grid-scale battery storage',
                    order_index: 3
                }
            ]
        }
    },
    'exam_jlpt_n3_1': {
        exam: {
            id: 'exam_jlpt_n3_1',
            title: 'JLPT N3 Official Practice Exam',
            type: 'JLPT N3',
            description: 'Kanji, Vocabulary, Grammar & Reading comprehensive exam'
        },
        sections: [
            {
                id: 'sec_n3_dokkai_1',
                exam_id: 'exam_jlpt_n3_1',
                title: '言語知識・読解 (Language Knowledge & Reading)',
                type: 'Reading',
                order_index: 1,
                content: `最近、リモートワークやオンライン授業が急速に普及してきました。家で仕事ができることは、通勤時間の節約になり、自由な時間が増えるという大きなメリットがあります。\n\nその一方で、同僚やクラスメートとの直接的なコミュニケーションが減少し、孤独を感じる人も増えています。効率性と人間関係のバランスをどのように取るかが、現代社会における重要な課題となっています。`
            }
        ],
        questionsBySection: {
            'sec_n3_dokkai_1': [
                {
                    id: 'q_n3_1',
                    section_id: 'sec_n3_dokkai_1',
                    question_text: 'リモートワークの大きなメリットとして本文に挙げられているのはどれですか。',
                    options: ['給料が増えること', '通勤時間が節約できること', '同僚と毎日会えること', '会社が大きくなること'],
                    correct_answer: '通勤時間が節約できること',
                    order_index: 1
                },
                {
                    id: 'q_n3_2',
                    section_id: 'sec_n3_dokkai_1',
                    question_text: 'リモートワークの普及に伴って生じている課題は何ですか。',
                    options: ['電気代が高くなること', '直接的な交流が減り孤独を感じること', '仕事がなくなること', 'パソコンが壊れること'],
                    correct_answer: '直接的な交流が減り孤独を感じること',
                    order_index: 2
                },
                {
                    id: 'q_n3_3',
                    section_id: 'sec_n3_dokkai_1',
                    question_text: '「節約 (せつやく)」の反対の意味に最も近い言葉はどれですか。',
                    options: ['無駄遣い (むだづかい)', '努力 (どりょく)', '案内 (あんない)', '準備 (じゅんび)'],
                    correct_answer: '無駄遣い (むだづかい)',
                    order_index: 3
                }
            ]
        }
    },
    'exam_jlpt_n2_1': {
        exam: {
            id: 'exam_jlpt_n2_1',
            title: 'JLPT N2 Advanced Reading & Listening',
            type: 'JLPT N2',
            description: 'Dokkai and Chokkai mock exam for N2 candidates'
        },
        sections: [
            {
                id: 'sec_n2_dokkai_1',
                exam_id: 'exam_jlpt_n2_1',
                title: 'N2 読解 (Reading Comprehension)',
                type: 'Reading',
                order_index: 1,
                content: `科学技術の進歩は私たちの生活を便利にするだけでなく、価値観そのものをも変容させつつある。人工知能（AI）の急速な台頭によって、従来人間にしかできないと考えられていた創造的な作業さえも機械が代替する可能性が指摘されている。\n\nしかし、技術を過信することなく、倫理的な観点からその利用方法を慎重に議論し続ける姿勢が不可欠である。`
            }
        ],
        questionsBySection: {
            'sec_n2_dokkai_1': [
                {
                    id: 'q_n2_1',
                    section_id: 'sec_n2_dokkai_1',
                    question_text: 'AIの台頭に関して筆者が述べていることは何ですか。',
                    options: ['AIは生活を不便にする', '人間にしかできなかった創造的作業も代替される可能性がある', 'AIの開発は即時停止すべきである', 'AIは倫理的な判断が得意である'],
                    correct_answer: '人間にしかできなかった創造的作業も代替される可能性がある',
                    order_index: 1
                },
                {
                    id: 'q_n2_2',
                    section_id: 'sec_n2_dokkai_1',
                    question_text: '筆者が不可欠だと強調している姿勢は何ですか。',
                    options: ['技術をすべて受け入れる姿勢', '倫理的観点から利用方法を慎重に議論する姿勢', 'AIに頼り切る姿勢', '技術革新を恐れる姿勢'],
                    correct_answer: '倫理的観点から利用方法を慎重に議論する姿勢',
                    order_index: 2
                }
            ]
        }
    }
};

export const ExamTake: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, awardXP } = useStudyData();
    const [exam, setExam] = useState<any>(null);
    const [sections, setSections] = useState<any[]>([]);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Questions and user answers state
    const [questions, setQuestions] = useState<any[]>([]);
    const [loadingQuestions, setLoadingQuestions] = useState(false);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [submittedResults, setSubmittedResults] = useState<{ score: number; total: number } | null>(null);

    // Certificate modal state
    const [showCertificate, setShowCertificate] = useState(false);

    useEffect(() => {
        const fetchExam = async () => {
            if (!id) {
                setLoading(false);
                return;
            }

            // Check built-in exams first
            if (BUILTIN_EXAMS[id]) {
                const builtIn = BUILTIN_EXAMS[id];
                setExam(builtIn.exam);
                setSections(builtIn.sections);
                if (builtIn.sections.length > 0) {
                    setActiveSectionId(builtIn.sections[0].id);
                }
                setLoading(false);
                return;
            }

            try {
                const { data: examData, error: examErr } = await supabase.from('exams').select('*').eq('id', id).single();
                if (examErr || !examData) {
                    // Fallback to first built-in exam if completely unknown
                    const fallback = BUILTIN_EXAMS['exam_ielts_academic_1'];
                    setExam(fallback.exam);
                    setSections(fallback.sections);
                    if (fallback.sections.length > 0) {
                        setActiveSectionId(fallback.sections[0].id);
                    }
                } else {
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
                }
            } catch (err) {
                console.error('Exam fetch error:', err);
                const fallback = BUILTIN_EXAMS['exam_ielts_academic_1'];
                setExam(fallback.exam);
                setSections(fallback.sections);
                if (fallback.sections.length > 0) {
                    setActiveSectionId(fallback.sections[0].id);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchExam();
    }, [id]);

    useEffect(() => {
        if (!activeSectionId || !id) return;

        const activeSec = sections.find(s => s.id === activeSectionId);
        if (activeSec && (activeSec.type === 'Reading' || activeSec.type === 'Listening')) {
            setLoadingQuestions(true);
            setSubmittedResults(null);
            setUserAnswers({});

            // If built-in exam, load from dictionary
            if (BUILTIN_EXAMS[id]?.questionsBySection[activeSectionId]) {
                setQuestions(BUILTIN_EXAMS[id].questionsBySection[activeSectionId]);
                setLoadingQuestions(false);
                return;
            }

            const fetchQuestions = async () => {
                try {
                    const { data } = await supabase
                        .from('exam_questions')
                        .select('*')
                        .eq('section_id', activeSectionId)
                        .order('order_index', { ascending: true });
                    setQuestions(data || []);
                } catch {
                    setQuestions([]);
                } finally {
                    setLoadingQuestions(false);
                }
            };
            fetchQuestions();
        }
    }, [activeSectionId, sections, id]);

    const handleSelectOption = (questionId: string, option: string) => {
        if (submittedResults) return;
        setUserAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const handleSubmitAnswers = async () => {
        let correctCount = 0;
        questions.forEach(q => {
            if (userAnswers[q.id] === q.correct_answer) {
                correctCount++;
            }
        });
        const result = { score: correctCount, total: questions.length };
        setSubmittedResults(result);
        setShowCertificate(true);

        // Award XP
        try {
            if (awardXP) {
                await awardXP(correctCount * 20);
            }
        } catch (e) {}

        // Persist attempt to HistoryService (mock_exams_history table)
        try {
            const isJlpt = exam?.type?.includes('JLPT');
            await HistoryService.saveMockExam({
                examType: isJlpt ? 'jlpt' : 'ielts_reading',
                level: exam?.type,
                score: correctCount,
                totalQuestions: questions.length,
                bandScore: isJlpt 
                    ? Math.round((correctCount / (questions.length || 1)) * 180)
                    : Number(((correctCount / (questions.length || 1)) * 9).toFixed(1))
            });
        } catch (err) {
            console.warn('Failed to persist mock exam result to history:', err);
        }

        // Record session to DB if user is logged in
        if (user?.id && id) {
            try {
                await supabase.from('exam_sessions').insert({
                    user_id: user.id,
                    exam_id: id,
                    status: 'completed',
                    completed_at: new Date().toISOString()
                });
            } catch (e) {
                console.warn("Session record warning:", e);
            }
        }
    };

    if (loading) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
            <p className="text-sm font-semibold text-slate-500">Imtihon yuklanmoqda...</p>
        </div>
    );

    if (!exam) return (
        <div className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl max-w-sm space-y-4">
                <FileText className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="font-bold text-slate-700 dark:text-slate-300">Imtihon topilmadi</h3>
                <Button onClick={() => navigate('/exams')} className="w-full">Imtihonlar ro'yxatiga qaytish</Button>
            </div>
        </div>
    );

    const activeSection = sections.find(s => s.id === activeSectionId);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
                <button 
                    onClick={() => navigate(-1)} 
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
                <div>
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase border ${
                        exam.type.includes('JLPT') 
                            ? 'bg-rose-500/10 text-rose-600 border-rose-500/20' 
                            : 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20'
                    }`}>
                        {exam.type}
                    </span>
                    <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">{exam.title}</h1>
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
                            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-extrabold text-sm transition-all whitespace-nowrap ${
                                isActive
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 scale-[1.02]'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                        >
                            {section.type === 'Writing' && <PenTool className="w-4 h-4" />}
                            {section.type === 'Speaking' && <Mic className="w-4 h-4" />}
                            {section.type === 'Reading' && <FileText className="w-4 h-4" />}
                            {section.type === 'Listening' && <Headphones className="w-4 h-4" />}
                            <span>{section.title}</span>
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
                                examType="JLPT"
                                promptText={activeSection.content || "JLPT Writing Task prompti..."}
                                promptId={activeSection.id}
                                sessionId={id || ''}
                            />
                        )}

                        {activeSection.type === 'Speaking' && (
                            <SpeakingSection
                                examType="JLPT"
                                promptText={activeSection.content || "JLPT Speaking Topic..."}
                                promptId={activeSection.id}
                                sessionId={id || ''}
                            />
                        )}

                        {(activeSection.type === 'Reading' || activeSection.type === 'Listening') && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                {/* Left Pane: Dokkai Reading Passage / Text */}
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4 max-h-[78vh] overflow-y-auto sticky top-4">
                                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <FileText className="w-5 h-5 text-indigo-500" />
                                        <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                                            {activeSection.title} (Dokkai Matni)
                                        </h3>
                                    </div>
                                    <div className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                                        {activeSection.content || "Hali matn kiritilmagan."}
                                    </div>
                                </div>

                                {/* Right Pane: Questions & Answer Selectors */}
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-6">
                                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Savollar</h3>
                                        {submittedResults ? (
                                            <button 
                                                onClick={() => setShowCertificate(true)}
                                                className="text-xs font-black text-green-600 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full flex items-center gap-1 hover:bg-green-500/20 transition"
                                            >
                                                <Award className="w-4 h-4" /> Natija: {submittedResults.score} / {submittedResults.total} (Sertifikat)
                                            </button>
                                        ) : (
                                            <span className="text-xs font-bold text-slate-400">
                                                Javob berildi: {Object.keys(userAnswers).length} / {questions.length}
                                            </span>
                                        )}
                                    </div>

                                    {loadingQuestions ? (
                                        <div className="py-12 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-500" /></div>
                                    ) : questions.length > 0 ? (
                                        <div className="space-y-6 max-h-[62vh] overflow-y-auto pr-1">
                                            {questions.map((q, qIdx) => {
                                                const isCorrect = userAnswers[q.id] === q.correct_answer;
                                                return (
                                                    <div key={q.id} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/80 space-y-3">
                                                        <p className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                                                            {qIdx + 1}. {q.question_text}
                                                        </p>

                                                        {q.options && (
                                                            <div className="space-y-2">
                                                                {(q.options as string[]).map((opt, optIdx) => {
                                                                    const isSelected = userAnswers[q.id] === opt;
                                                                    let btnStyle = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400";

                                                                    if (submittedResults) {
                                                                        if (opt === q.correct_answer) {
                                                                            btnStyle = "bg-green-500/10 border-green-500 text-green-600 font-bold shadow-sm";
                                                                        } else if (isSelected && !isCorrect) {
                                                                            btnStyle = "bg-red-500/10 border-red-500 text-red-600 font-bold";
                                                                        }
                                                                    } else if (isSelected) {
                                                                        btnStyle = "bg-indigo-600 text-white font-bold border-indigo-600 shadow-md";
                                                                    }

                                                                    return (
                                                                        <button
                                                                            key={optIdx}
                                                                            onClick={() => handleSelectOption(q.id, opt)}
                                                                            className={`w-full text-left p-3.5 rounded-xl border text-sm transition flex items-center justify-between ${btnStyle}`}
                                                                        >
                                                                            <span>{String.fromCharCode(65 + optIdx)}) {opt}</span>
                                                                            {submittedResults && opt === q.correct_answer && <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />}
                                                                            {submittedResults && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
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
                                                    className="w-full py-3.5 font-bold rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                                                >
                                                    Javoblarni Tekshirish va Sertifikat Olish 🎓 ({Object.keys(userAnswers).length}/{questions.length})
                                                </Button>
                                            ) : (
                                                <Button variant="outline" onClick={() => setSubmittedResults(null)} className="w-full py-3.5 rounded-2xl font-bold">
                                                    Qayta Urinish
                                                </Button>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-center py-12 text-slate-400 text-sm">
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

            {/* Official Certificate Modal */}
            <ExamCertificateModal
                isOpen={showCertificate}
                onClose={() => setShowCertificate(false)}
                examTitle={exam.title}
                examType={exam.type}
                overallScore={submittedResults ? `${submittedResults.score} / ${submittedResults.total}` : 'N/A'}
                sectionScores={{
                    reading: submittedResults ? `${Math.round((submittedResults.score / submittedResults.total) * 100)}%` : undefined
                }}
                userName={user?.email ? user.email.split('@')[0] : 'O\'quvchi'}
                aiFeedback={submittedResults ? `Tabriklaymiz! Siz ${exam.title} bo'yicha ${submittedResults.score} ta to'g'ri javob berdingiz (${Math.round((submittedResults.score / (submittedResults.total || 1)) * 100)}%). Keyingi bosqichga o'tish tavsiya etiladi.` : undefined}
            />
        </div>
    );
};

export default ExamTake;
