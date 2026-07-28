import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Plus, BookOpen, Edit2, Loader2, ArrowLeft, Trash2, X, Award, FileText } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { isAdminEmail } from '../../utils/admin';

export const ExamsManager: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();
    const [exams, setExams] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    // Step-by-Step Creation Wizard State
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [examCategory, setExamCategory] = useState<'IELTS' | 'JLPT'>('IELTS');
    const [jlptLevel, setJlptLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N3');
    const [ieltsType, setIeltsType] = useState<'Academic' | 'General'>('Academic');
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [creating, setCreating] = useState(false);

    const fetchExams = async () => {
        setFetchError(null);
        try {
            const { data, error } = await supabase
                .from('exams')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            setExams(data || []);
        } catch (err: any) {
            console.error('Error fetching exams:', err);
            setFetchError(err?.message || "Imtihonlarni yuklashda xatolik yuz berdi.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAdminEmail(user?.email)) {
            fetchExams();
        } else {
            setLoading(false);
        }
    }, [user]);

    const handleCreateExam = async () => {
        const fullType = examCategory === 'JLPT' ? `JLPT ${jlptLevel}` : `IELTS (${ieltsType})`;
        const titleToSave = newTitle.trim() || `${fullType} Mock Test`;

        setCreating(true);
        try {
            const { data, error } = await supabase.from('exams').insert({
                title: titleToSave,
                type: fullType,
                description: newDesc.trim() || null
            }).select().single();

            if (error) throw error;

            setShowCreateModal(false);
            setNewTitle('');
            setNewDesc('');
            fetchExams();

            // Automatically navigate to Question Editor for this new exam
            if (data?.id) {
                navigate(`/admin/exams/${data.id}`);
            }
        } catch (err: any) {
            console.error("Exam creation error:", err);
            alert(`Xatolik: ${err?.message || JSON.stringify(err)}`);
        } finally {
            setCreating(false);
        }
    };

    const handleDeleteExam = async (examId: string, examTitle: string) => {
        if (!confirm(`"${examTitle}" imtihonini o'chirishni xohlaysizmi? Bu qaytarib bo'lmaydi.`)) return;
        try {
            const { error } = await supabase.from('exams').delete().eq('id', examId);
            if (error) throw error;
            fetchExams();
        } catch (err: any) {
            console.error("Exam delete error:", err);
            alert(`O'chirishda xatolik: ${err?.message || JSON.stringify(err)}`);
        }
    };

    if (loading) return <div className="p-8 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-500" /></div>;
    if (!isAdminEmail(user?.email)) return <div className="p-8 text-center text-red-500">Siz admin emassiz!</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/admin')} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                        <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Imtihonlar (Exams) Manager</h1>
                        <p className="text-sm text-slate-500">IELTS va JLPT testlarini boshqarish va yangi savollar qo'shish</p>
                    </div>
                </div>
                <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                    <Plus className="w-4 h-4" /> Yangi Imtihon Qo'shish
                </Button>
            </div>

            {fetchError && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-sm text-red-600">
                    ⚠️ {fetchError}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map(exam => (
                    <div key={exam.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                                    {exam.type}
                                </span>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mt-2">{exam.title}</h3>
                                {exam.description && <p className="text-xs text-slate-500 mt-1">{exam.description}</p>}
                            </div>
                            {exam.is_published ? (
                                <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded">Active</span>
                            ) : (
                                <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded">Draft</span>
                            )}
                        </div>

                        <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                            <Button variant="outline" className="flex-1 gap-1 text-xs" onClick={() => navigate(`/admin/exams/${exam.id}`)}>
                                <Edit2 className="w-3.5 h-3.5" /> Savollar va Bo'limlar
                            </Button>
                            <button
                                onClick={() => handleDeleteExam(exam.id, exam.title)}
                                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition"
                                title="O'chirish"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}

                {exams.length === 0 && !fetchError && (
                    <div className="col-span-full p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                        <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
                        <p>Hali hech qanday imtihon yaratilmagan.</p>
                        <p className="text-xs mt-1">Yuqoridagi tugmani bosib IELTS yoki JLPT imtihonini qo'shing.</p>
                    </div>
                )}
            </div>

            {/* Step-by-Step Create Exam Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowCreateModal(false)}>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-6" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Yangi Imtihon Qo'shish</h3>
                            <button onClick={() => setShowCreateModal(false)} className="p-1 text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Step 1: Category Selection (IELTS vs JLPT) */}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">1. Imtihon Turini Tanlang:</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setExamCategory('IELTS')}
                                    className={`p-4 rounded-xl border font-bold text-sm flex flex-col items-center gap-2 transition ${
                                        examCategory === 'IELTS'
                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                                    }`}
                                >
                                    <FileText className="w-6 h-6" />
                                    <span>IELTS</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setExamCategory('JLPT')}
                                    className={`p-4 rounded-xl border font-bold text-sm flex flex-col items-center gap-2 transition ${
                                        examCategory === 'JLPT'
                                            ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-rose-300'
                                    }`}
                                >
                                    <Award className="w-6 h-6" />
                                    <span>JLPT (Yapon Tili)</span>
                                </button>
                            </div>
                        </div>

                        {/* Step 2: Level Selection (If JLPT) or Sub-type (If IELTS) */}
                        {examCategory === 'JLPT' ? (
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">2. JLPT Darajasini Tanlang (N1 - N5):</label>
                                <div className="grid grid-cols-5 gap-2">
                                    {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                                        <button
                                            key={lvl}
                                            type="button"
                                            onClick={() => setJlptLevel(lvl)}
                                            className={`py-3 rounded-xl font-black text-sm border transition ${
                                                jlptLevel === lvl
                                                    ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                                                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                                            }`}
                                        >
                                            {lvl}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">2. IELTS Turini Tanlang:</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {(['Academic', 'General'] as const).map(t => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setIeltsType(t)}
                                            className={`py-2.5 rounded-xl font-bold text-sm border transition ${
                                                ieltsType === t
                                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                                            }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Title & Description */}
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Imtihon Nomi</label>
                                <input
                                    value={newTitle}
                                    onChange={e => setNewTitle(e.target.value)}
                                    placeholder={examCategory === 'JLPT' ? `JLPT ${jlptLevel} Mock Test 1` : `IELTS ${ieltsType} Mock Test 1`}
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Tavsif (ixtiyoriy)</label>
                                <textarea
                                    value={newDesc}
                                    onChange={e => setNewDesc(e.target.value)}
                                    rows={2}
                                    placeholder="Imtihon haqida qisqacha ma'lumot..."
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 justify-end pt-2">
                            <Button variant="outline" onClick={() => setShowCreateModal(false)}>Bekor qilish</Button>
                            <Button onClick={handleCreateExam} disabled={creating} className="gap-1 px-6">
                                {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                Davom etish va Savollar qo'shish ➔
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExamsManager;
