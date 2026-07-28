import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Plus, Loader2, List, FileText, Headphones, Mic, PenTool, Trash2, X, Edit3, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { isAdminEmail } from '../../utils/admin';

interface QuestionFormData {
    question_text: string;
    type: 'multiple_choice' | 'true_false' | 'short_answer';
    options: string[];
    correct_answer: string;
    explanation: string;
}

export const QuestionEditor: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useStudyData();
    const [exam, setExam] = useState<any>(null);
    const [sections, setSections] = useState<any[]>([]);
    const [sectionQuestions, setSectionQuestions] = useState<Record<string, any[]>>({});
    const [loading, setLoading] = useState(true);

    // Question form state
    const [showQuestionForm, setShowQuestionForm] = useState<string | null>(null);
    const [questionForm, setQuestionForm] = useState<QuestionFormData>({
        question_text: '',
        type: 'multiple_choice',
        options: ['', '', '', ''],
        correct_answer: '',
        explanation: ''
    });
    const [savingQuestion, setSavingQuestion] = useState(false);

    // Content editing state
    const [editingContentId, setEditingContentId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState('');

    const fetchExamDetails = async () => {
        try {
            const { data: examData, error: examErr } = await supabase.from('exams').select('*').eq('id', id).single();
            if (examErr) console.error("Error fetching exam:", examErr);
            setExam(examData);

            const { data: sectionsData, error: secErr } = await supabase
                .from('exam_sections')
                .select('*')
                .eq('exam_id', id)
                .order('order_index', { ascending: true });

            if (secErr) console.error("Error fetching sections:", secErr);

            const secs = sectionsData || [];
            setSections(secs);

            const questionsMap: Record<string, any[]> = {};
            for (const sec of secs) {
                const { data: qData } = await supabase
                    .from('exam_questions')
                    .select('*')
                    .eq('section_id', sec.id)
                    .order('order_index', { ascending: true });
                questionsMap[sec.id] = qData || [];
            }
            setSectionQuestions(questionsMap);
        } catch (err) {
            console.error("Unexpected error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAdminEmail(user?.email)) {
            fetchExamDetails();
        } else {
            setLoading(false);
        }
    }, [user, id]);

    const handleAddSection = async (type: string) => {
        const defaultTitle = type === 'Reading' ? "Dokkai (読解) Part 1" : type === 'Listening' ? "Choukai (聴解) Part 1" : `${type} Part 1`;
        const title = prompt(`${type} bo'limi uchun nom kiriting:`, defaultTitle);
        if (!title) return;

        try {
            const { error } = await supabase.from('exam_sections').insert({
                exam_id: id,
                title,
                type,
                order_index: sections.length
            });
            if (error) throw error;
            fetchExamDetails();
        } catch (err: any) {
            console.error("Section creation error:", err);
            alert(`Bo'lim qo'shishda xatolik: ${err?.message || JSON.stringify(err)}`);
        }
    };

    const handleDeleteSection = async (sectionId: string) => {
        if (!confirm("Bu bo'limni o'chirishni xohlaysizmi? Ichidagi barcha savollar ham o'chadi.")) return;
        try {
            const { error } = await supabase.from('exam_sections').delete().eq('id', sectionId);
            if (error) throw error;
            fetchExamDetails();
        } catch (err: any) {
            console.error("Section delete error:", err);
            alert(`O'chirishda xatolik: ${err?.message || JSON.stringify(err)}`);
        }
    };

    const handleSaveQuestion = async (sectionId: string, keepOpen = false) => {
        if (!questionForm.question_text.trim()) {
            alert("Savol matnini kiriting!");
            return;
        }
        setSavingQuestion(true);
        try {
            const existingQuestions = sectionQuestions[sectionId] || [];
            const { error } = await supabase.from('exam_questions').insert({
                section_id: sectionId,
                question_text: questionForm.question_text,
                type: questionForm.type,
                options: questionForm.type === 'multiple_choice' ? questionForm.options.filter(o => o.trim()) : null,
                correct_answer: questionForm.correct_answer,
                explanation: questionForm.explanation || null,
                order_index: existingQuestions.length
            });
            if (error) throw error;

            setQuestionForm({ question_text: '', type: 'multiple_choice', options: ['', '', '', ''], correct_answer: '', explanation: '' });
            if (!keepOpen) {
                setShowQuestionForm(null);
            }
            fetchExamDetails();
        } catch (err: any) {
            console.error("Question creation error:", err);
            alert(`Savol qo'shishda xatolik: ${err?.message || JSON.stringify(err)}`);
        } finally {
            setSavingQuestion(false);
        }
    };

    const handleDeleteQuestion = async (questionId: string) => {
        if (!confirm("Bu savolni o'chirishni xohlaysizmi?")) return;
        try {
            const { error } = await supabase.from('exam_questions').delete().eq('id', questionId);
            if (error) throw error;
            fetchExamDetails();
        } catch (err: any) {
            console.error("Question delete error:", err);
            alert(`Savolni o'chirishda xatolik: ${err?.message || JSON.stringify(err)}`);
        }
    };

    const handleSaveContent = async (sectionId: string) => {
        try {
            const { error } = await supabase.from('exam_sections').update({ content: editContent }).eq('id', sectionId);
            if (error) throw error;
            setEditingContentId(null);
            fetchExamDetails();
        } catch (err: any) {
            console.error("Content save error:", err);
            alert(`Kontentni saqlashda xatolik: ${err?.message || JSON.stringify(err)}`);
        }
    };

    const handlePublishToggle = async () => {
        try {
            const { error } = await supabase.from('exams').update({ is_published: !exam.is_published }).eq('id', exam.id);
            if (error) throw error;
            fetchExamDetails();
        } catch (err: any) {
            console.error("Publish toggle error:", err);
            alert(`Nashr qilishda xatolik: ${err?.message || JSON.stringify(err)}`);
        }
    };

    if (loading) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
            <p className="text-sm font-semibold text-slate-500">Imtihon ma'lumotlari yuklanmoqda...</p>
        </div>
    );

    if (!isAdminEmail(user?.email)) return <div className="p-8 text-center text-red-500 font-bold">Siz admin emassiz!</div>;
    if (!exam) return <div className="p-8 text-center text-slate-500">Imtihon topilmadi.</div>;

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate('/admin/exams')} 
                        className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >
                        <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </button>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-0.5 rounded-full text-xs font-black bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                                {exam.type}
                            </span>
                            {exam.is_published ? (
                                <span className="text-[11px] font-bold text-green-600 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" /> Published
                                </span>
                            ) : (
                                <span className="text-[11px] font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                                    Draft
                                </span>
                            )}
                        </div>
                        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">{exam.title}</h1>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" onClick={() => navigate(`/exams/${exam.id}`)} className="gap-2 text-xs font-bold rounded-xl">
                        <Eye className="w-4 h-4" /> O'quvchi Ko'rinishi
                    </Button>
                    <Button 
                        variant={exam.is_published ? "outline" : "default"} 
                        onClick={handlePublishToggle}
                        className={!exam.is_published ? "bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md" : "rounded-xl font-bold"}
                    >
                        {exam.is_published ? 'Bekitish (Draft)' : 'Nashr Qilish 🚀'}
                    </Button>
                </div>
            </div>

            {/* Quick Section Add Bar */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-3xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-500" /> Bo'lim Qo'shish (Sections):
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <Button variant="outline" className="gap-2 bg-white dark:bg-slate-900 justify-start hover:border-emerald-500" onClick={() => handleAddSection('Reading')}>
                        <FileText className="w-4 h-4 text-emerald-500" />
                        <span>+ Reading (読解)</span>
                    </Button>
                    <Button variant="outline" className="gap-2 bg-white dark:bg-slate-900 justify-start hover:border-blue-500" onClick={() => handleAddSection('Listening')}>
                        <Headphones className="w-4 h-4 text-blue-500" />
                        <span>+ Listening (聴解)</span>
                    </Button>
                    <Button variant="outline" className="gap-2 bg-white dark:bg-slate-900 justify-start hover:border-purple-500" onClick={() => handleAddSection('Writing')}>
                        <PenTool className="w-4 h-4 text-purple-500" />
                        <span>+ Writing (作文)</span>
                    </Button>
                    <Button variant="outline" className="gap-2 bg-white dark:bg-slate-900 justify-start hover:border-rose-500" onClick={() => handleAddSection('Speaking')}>
                        <Mic className="w-4 h-4 text-rose-500" />
                        <span>+ Speaking (会話)</span>
                    </Button>
                </div>
            </div>

            {/* Sections List */}
            <div className="space-y-6">
                {sections.map(section => {
                    const questions = sectionQuestions[section.id] || [];

                    return (
                        <div key={section.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
                            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">
                                        {section.title}
                                    </h3>
                                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                                        {section.type}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {(section.type === 'Reading' || section.type === 'Listening') && (
                                        <Button size="sm" className="gap-1 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl" onClick={() => setShowQuestionForm(section.id)}>
                                            <Plus className="w-4 h-4" /> Savol Qo'shish
                                        </Button>
                                    )}
                                    <button
                                        onClick={() => handleDeleteSection(section.id)}
                                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition"
                                        title="Bo'limni o'chirish"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Section Content Editing (Dokkai Passage / Listening Audio / Prompts) */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                                        {section.type === 'Reading' ? '📖 Dokkai Matni (Reading Passage):' : section.type === 'Listening' ? '🎧 Audio URL / Transkript:' : '📝 Prompt / Topshiriq Mavzusi:'}
                                    </span>
                                    {editingContentId !== section.id && (
                                        <button
                                            onClick={() => { setEditingContentId(section.id); setEditContent(section.content || ''); }}
                                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-bold"
                                        >
                                            <Edit3 className="w-3.5 h-3.5" /> Matnni Tahrirlash
                                        </button>
                                    )}
                                </div>

                                {editingContentId === section.id ? (
                                    <div className="space-y-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-indigo-300 dark:border-indigo-700">
                                        <textarea
                                            rows={7}
                                            value={editContent}
                                            onChange={(e) => setEditContent(e.target.value)}
                                            placeholder={section.type === 'Reading' ? "Dokkai matnini shu yerga yozing..." : "Mavzu yoki matnni yozing..."}
                                            className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-sans leading-relaxed outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        <div className="flex gap-2 justify-end">
                                            <Button size="sm" variant="outline" onClick={() => setEditingContentId(null)} className="rounded-xl">Bekor</Button>
                                            <Button size="sm" onClick={() => handleSaveContent(section.id)} className="rounded-xl font-bold bg-indigo-600">Saqlash</Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => { setEditingContentId(section.id); setEditContent(section.content || ''); }}
                                        className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 cursor-pointer hover:border-indigo-400 transition leading-relaxed max-h-48 overflow-y-auto"
                                    >
                                        {section.content || `+ Dokkai matni yoki mavzu kiritilmagan. Tahrirlash uchun ustiga bosing...`}
                                    </div>
                                )}
                            </div>

                            {/* Reading/Listening Questions List */}
                            {(section.type === 'Reading' || section.type === 'Listening') && (
                                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                                            Savollar ({questions.length}):
                                        </h4>
                                    </div>

                                    {questions.length > 0 ? (
                                        <div className="space-y-3">
                                            {questions.map((q, idx) => (
                                                <div key={q.id} className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700/80 space-y-3">
                                                    <div className="flex justify-between items-start gap-3">
                                                        <div className="flex gap-2">
                                                            <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">{idx + 1}.</span>
                                                            <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{q.question_text}</p>
                                                        </div>
                                                        <button onClick={() => handleDeleteQuestion(q.id)} className="text-slate-400 hover:text-red-600 p-1">
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    {q.options && (
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                                            {(q.options as string[]).map((opt, i) => {
                                                                const isCorrect = opt === q.correct_answer;
                                                                return (
                                                                    <div 
                                                                        key={i} 
                                                                        className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center justify-between ${
                                                                            isCorrect 
                                                                                ? 'bg-green-500/10 border-green-500/30 text-green-600 font-bold' 
                                                                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                                                                        }`}
                                                                    >
                                                                        <span>{String.fromCharCode(65 + i)}) {opt}</span>
                                                                        {isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-xs text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                                            Hali savollar kiritilmagan. Yuqoridagi "+ Savol Qo'shish" tugmasini bosing.
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Rapid Question Creation Form */}
                            {showQuestionForm === section.id && (
                                <div className="mt-4 p-5 bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-2xl space-y-4 animate-in fade-in duration-200">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-extrabold text-sm text-indigo-900 dark:text-indigo-300">Yangi Savol Qo'shish</h4>
                                        <button onClick={() => setShowQuestionForm(null)} className="p-1 text-slate-400 hover:text-slate-600">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-1">Savol Matni *</label>
                                        <textarea
                                            rows={2}
                                            value={questionForm.question_text}
                                            onChange={(e) => setQuestionForm(f => ({ ...f, question_text: e.target.value }))}
                                            placeholder="Savol matni (masalan: 本文の内容と合っているものはどれか)..."
                                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-white dark:bg-slate-900 font-sans outline-none focus:ring-2 focus:ring-indigo-500"
                                            autoFocus
                                        />
                                    </div>

                                    {questionForm.type === 'multiple_choice' && (
                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold text-slate-500">4 ta Variant va To'g'ri javobni tanlang:</label>
                                            <div className="space-y-2">
                                                {questionForm.options.map((opt, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <span className="text-xs font-bold text-slate-400 w-5 text-center">{String.fromCharCode(65 + i)})</span>
                                                        <input
                                                            value={opt}
                                                            onChange={(e) => {
                                                                const newOpts = [...questionForm.options];
                                                                newOpts[i] = e.target.value;
                                                                setQuestionForm(f => ({ ...f, options: newOpts }));
                                                            }}
                                                            placeholder={`Variant ${String.fromCharCode(65 + i)}`}
                                                            className="flex-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-white dark:bg-slate-900 outline-none"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setQuestionForm(f => ({ ...f, correct_answer: opt }))}
                                                            className={`text-xs px-3 py-2 rounded-xl border font-bold transition ${
                                                                questionForm.correct_answer === opt && opt 
                                                                    ? 'bg-green-600 text-white border-green-600 shadow-sm' 
                                                                    : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-green-400'
                                                            }`}
                                                        >
                                                            {questionForm.correct_answer === opt && opt ? "✓ To'g'ri" : "Tanlash"}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-indigo-100 dark:border-indigo-900/30">
                                        <Button 
                                            size="sm" 
                                            onClick={() => handleSaveQuestion(section.id, true)} 
                                            disabled={savingQuestion} 
                                            className="gap-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl"
                                        >
                                            {savingQuestion ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                                            Saqlash va Yana Qo'shish (+1)
                                        </Button>
                                        <Button 
                                            size="sm" 
                                            variant="outline" 
                                            onClick={() => handleSaveQuestion(section.id, false)} 
                                            disabled={savingQuestion}
                                            className="rounded-xl font-bold"
                                        >
                                            Saqlash va Yopish
                                        </Button>
                                        <Button 
                                            size="sm" 
                                            variant="outline" 
                                            className="ml-auto text-slate-400 rounded-xl" 
                                            onClick={() => setShowQuestionForm(null)}
                                        >
                                            Bekor
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {sections.length === 0 && (
                    <div className="p-12 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 space-y-3">
                        <List className="w-16 h-16 mx-auto opacity-20" />
                        <p className="font-bold text-base text-slate-600 dark:text-slate-300">Hali hech qanday bo'lim qo'shilmagan.</p>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto">
                            Yuqoridagi tugmalar orqali Reading (Dokkai) / Listening / Writing / Speaking bo'limlarini qo'shing.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionEditor;
