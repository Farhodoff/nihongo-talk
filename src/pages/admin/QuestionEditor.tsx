import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Plus, Loader2, List, FileText, Headphones, Mic, PenTool, Trash2, X } from 'lucide-react';
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

    // Content editing state (for Writing/Speaking prompts)
    const [editingContentId, setEditingContentId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState('');

    const fetchExamDetails = async () => {
        try {
            const { data: examData, error: examErr } = await supabase.from('exams').select('*').eq('id', id).single();
            if (examErr) {
                console.error("Error fetching exam:", examErr);
            }
            setExam(examData);

            const { data: sectionsData, error: secErr } = await supabase
                .from('exam_sections')
                .select('*')
                .eq('exam_id', id)
                .order('order_index', { ascending: true });

            if (secErr) {
                console.error("Error fetching sections:", secErr);
            }

            const secs = sectionsData || [];
            setSections(secs);

            // Fetch questions for each section
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
        const title = prompt(`${type} bo'limi uchun nom kiriting (masalan: Part 1):`);
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

    const handleSaveQuestion = async (sectionId: string) => {
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

            setShowQuestionForm(null);
            setQuestionForm({ question_text: '', type: 'multiple_choice', options: ['', '', '', ''], correct_answer: '', explanation: '' });
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

    if (loading) return <div className="p-8 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-500" /></div>;
    if (!isAdminEmail(user?.email)) return <div className="p-8 text-center text-red-500">Siz admin emassiz!</div>;
    if (!exam) return <div className="p-8 text-center">Imtihon topilmadi.</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/admin/exams')} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                    <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{exam.title} - Tahrirlash</h1>
                    <p className="text-sm text-slate-500">Bo'limlar va savollarni boshqarish</p>
                </div>
                <div className="ml-auto">
                    <Button variant={exam.is_published ? "outline" : "default"} onClick={handlePublishToggle}>
                        {exam.is_published ? 'Bekitish (Unpublish)' : 'Nashr qilish (Publish)'}
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                <Button variant="outline" className="gap-2" onClick={() => handleAddSection('Reading')}>
                    <FileText className="w-4 h-4" /> + Reading
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => handleAddSection('Listening')}>
                    <Headphones className="w-4 h-4" /> + Listening
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => handleAddSection('Writing')}>
                    <PenTool className="w-4 h-4" /> + Writing
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => handleAddSection('Speaking')}>
                    <Mic className="w-4 h-4" /> + Speaking
                </Button>
            </div>

            <div className="space-y-4">
                {sections.map(section => {
                    const questions = sectionQuestions[section.id] || [];
                    const isWritingOrSpeaking = section.type === 'Writing' || section.type === 'Speaking';

                    return (
                        <div key={section.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                                    {section.title} <span className="text-sm font-normal text-slate-400">({section.type})</span>
                                </h3>
                                <div className="flex gap-2">
                                    {!isWritingOrSpeaking && (
                                        <Button variant="outline" size="sm" className="gap-1 text-xs" onClick={() => setShowQuestionForm(section.id)}>
                                            <Plus className="w-3.5 h-3.5" /> Savol qo'shish
                                        </Button>
                                    )}
                                    <button
                                        onClick={() => handleDeleteSection(section.id)}
                                        className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition"
                                        title="Bo'limni o'chirish"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Writing/Speaking uchun content (prompt) tahrirlash */}
                            {isWritingOrSpeaking && (
                                <div className="mb-4">
                                    {editingContentId === section.id ? (
                                        <div className="space-y-2">
                                            <textarea
                                                rows={4}
                                                value={editContent}
                                                onChange={(e) => setEditContent(e.target.value)}
                                                placeholder={`${section.type} mavzusi/savoli (prompt)...`}
                                                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                                            />
                                            <div className="flex gap-2">
                                                <Button size="sm" onClick={() => handleSaveContent(section.id)}>Saqlash</Button>
                                                <Button size="sm" variant="outline" onClick={() => setEditingContentId(null)}>Bekor</Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => { setEditingContentId(section.id); setEditContent(section.content || ''); }}
                                            className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 cursor-pointer hover:border-indigo-300 transition"
                                        >
                                            {section.content || `📝 ${section.type} mavzusi yozilmagan. Bosib yozing...`}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Reading/Listening uchun savollar ro'yxati */}
                            {!isWritingOrSpeaking && (
                                <div className="space-y-2">
                                    {questions.length > 0 ? questions.map((q, idx) => (
                                        <div key={q.id} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                            <span className="text-xs font-bold text-slate-400 mt-0.5">{idx + 1}.</span>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{q.question_text}</p>
                                                {q.options && (
                                                    <div className="mt-1 flex flex-wrap gap-1">
                                                        {(q.options as string[]).map((opt, i) => (
                                                            <span key={i} className={`text-xs px-2 py-0.5 rounded-full border ${opt === q.correct_answer ? 'bg-green-50 border-green-300 text-green-700 font-bold' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
                                                                {opt}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <button onClick={() => handleDeleteQuestion(q.id)} className="text-red-400 hover:text-red-600 p-1">
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    )) : (
                                        <p className="text-xs text-slate-400 text-center py-3">Hali savollar kiritilmagan.</p>
                                    )}
                                </div>
                            )}

                            {/* Savol qo'shish formasi */}
                            {showQuestionForm === section.id && (
                                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-xl space-y-3">
                                    <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-300">Yangi savol qo'shish</h4>
                                    <textarea
                                        rows={2}
                                        value={questionForm.question_text}
                                        onChange={(e) => setQuestionForm(f => ({ ...f, question_text: e.target.value }))}
                                        placeholder="Savol matni..."
                                        className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm bg-white dark:bg-slate-900"
                                    />
                                    <select
                                        value={questionForm.type}
                                        onChange={(e) => setQuestionForm(f => ({ ...f, type: e.target.value as any }))}
                                        className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm bg-white dark:bg-slate-900"
                                    >
                                        <option value="multiple_choice">Multiple Choice (Ko'p variantli)</option>
                                        <option value="true_false">True / False</option>
                                        <option value="short_answer">Short Answer (Qisqa javob)</option>
                                    </select>

                                    {questionForm.type === 'multiple_choice' && (
                                        <div className="space-y-1.5">
                                            <p className="text-xs font-bold text-slate-500">Variantlar:</p>
                                            {questionForm.options.map((opt, i) => (
                                                <input
                                                    key={i}
                                                    value={opt}
                                                    onChange={(e) => {
                                                        const newOpts = [...questionForm.options];
                                                        newOpts[i] = e.target.value;
                                                        setQuestionForm(f => ({ ...f, options: newOpts }));
                                                    }}
                                                    placeholder={`Variant ${String.fromCharCode(65 + i)}`}
                                                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm bg-white dark:bg-slate-900"
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <input
                                        value={questionForm.correct_answer}
                                        onChange={(e) => setQuestionForm(f => ({ ...f, correct_answer: e.target.value }))}
                                        placeholder="To'g'ri javob"
                                        className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm bg-white dark:bg-slate-900"
                                    />

                                    <div className="flex gap-2 pt-1">
                                        <Button size="sm" onClick={() => handleSaveQuestion(section.id)} disabled={savingQuestion} className="gap-1">
                                            {savingQuestion ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                                            Saqlash
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={() => setShowQuestionForm(null)}>Bekor</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {sections.length === 0 && (
                    <div className="p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                        <List className="w-12 h-12 mx-auto mb-3 opacity-20" />
                        <p>Hali hech qanday bo'lim qo'shilmagan.</p>
                        <p className="text-xs mt-1">Yuqoridagi tugmalar orqali Reading/Listening/Writing/Speaking qo'shing.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionEditor;
