import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Plus, BookOpen, Edit2, Loader2, Trash2, X, Award, FileText, Sparkles, CheckCircle2, Search, Shield } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { isAdminEmail } from '../../utils/admin';

export const ExamsManager: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();
    const [exams, setExams] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    // Filter & Search
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'ALL' | 'IELTS' | 'JLPT' | 'PUBLISHED'>('ALL');

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

    // Filter logic
    const filteredExams = exams.filter(exam => {
        const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              exam.type.toLowerCase().includes(searchQuery.toLowerCase());
        if (!matchesSearch) return false;

        if (activeTab === 'IELTS') return exam.type.includes('IELTS');
        if (activeTab === 'JLPT') return exam.type.includes('JLPT');
        if (activeTab === 'PUBLISHED') return exam.is_published;
        return true;
    });

    const stats = {
        total: exams.length,
        ielts: exams.filter(e => e.type.includes('IELTS')).length,
        jlpt: exams.filter(e => e.type.includes('JLPT')).length,
        published: exams.filter(e => e.is_published).length
    };

    if (loading) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
            <p className="text-sm font-semibold text-slate-500">Imtihonlar yuklanmoqda...</p>
        </div>
    );

    if (!isAdminEmail(user?.email)) return (
        <div className="min-h-[50vh] flex items-center justify-center">
            <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-2xl p-8 text-center max-w-md">
                <Shield className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-red-600 dark:text-red-400">Ruxsat Yo'q</h3>
                <p className="text-sm text-slate-500 mt-1">Siz admin emassiz! Faqat tasdiqlangan adminlar ushbu sahifaga kirishi mumkin.</p>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 p-8 text-white shadow-xl shadow-indigo-500/10">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5" /> Exam Management Studio
                        </div>
                        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">IELTS & JLPT Imtihonlar Markazi</h1>
                        <p className="text-sm text-indigo-100 max-w-xl">
                            Testlar yaratish, Dokkai o'qish matnlari, Listening qismlari hamda AI orqali tekshiriladigan Writing/Speaking topshiriqlarini boshqarish.
                        </p>
                    </div>
                    <Button 
                        onClick={() => setShowCreateModal(true)} 
                        className="gap-2 bg-white text-indigo-700 hover:bg-slate-100 font-extrabold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
                    >
                        <Plus className="w-5 h-5" /> Yangi Imtihon Qo'shish
                    </Button>
                </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.total}</div>
                        <div className="text-xs font-semibold text-slate-400">Jami Imtihonlar</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.ielts}</div>
                        <div className="text-xs font-semibold text-slate-400">IELTS Testlar</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.jlpt}</div>
                        <div className="text-xs font-semibold text-slate-400">JLPT Testlar (N1-N5)</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.published}</div>
                        <div className="text-xs font-semibold text-slate-400">Faol Nashr Qilingan</div>
                    </div>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-sm">
                <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                    {[
                        { id: 'ALL', label: 'Barchasi' },
                        { id: 'IELTS', label: 'IELTS' },
                        { id: 'JLPT', label: 'JLPT (読解/聴解)' },
                        { id: 'PUBLISHED', label: 'Nashr qilinganlar' },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                                activeTab === tab.id
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                    <input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Imtihon nomini izlash..."
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {fetchError && (
                <div className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-sm text-red-600">
                    ⚠️ {fetchError}
                </div>
            )}

            {/* Exams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map(exam => (
                    <div 
                        key={exam.id} 
                        className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className={`px-3 py-1 text-xs font-extrabold rounded-full ${
                                    exam.type.includes('JLPT') 
                                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20' 
                                        : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                                }`}>
                                    {exam.type}
                                </span>
                                {exam.is_published ? (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full">
                                        <CheckCircle2 className="w-3 h-3" /> Active
                                    </span>
                                ) : (
                                    <span className="text-[11px] font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                                        Draft (Qoralama)
                                    </span>
                                )}
                            </div>

                            <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                                {exam.title}
                            </h3>
                            {exam.description && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                    {exam.description}
                                </p>
                            )}
                        </div>

                        <div className="flex gap-2 pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
                            <Button 
                                variant="outline" 
                                className="flex-1 gap-2 text-xs font-bold hover:bg-indigo-600 hover:text-white transition" 
                                onClick={() => navigate(`/admin/exams/${exam.id}`)}
                            >
                                <Edit2 className="w-3.5 h-3.5" /> Savollar va Bo'limlar
                            </Button>
                            <button
                                onClick={() => handleDeleteExam(exam.id, exam.title)}
                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition"
                                title="O'chirish"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}

                {filteredExams.length === 0 && !fetchError && (
                    <div className="col-span-full p-12 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 space-y-3">
                        <BookOpen className="w-16 h-16 mx-auto opacity-20" />
                        <p className="font-bold text-base text-slate-600 dark:text-slate-300">Testlar topilmadi.</p>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto">
                            Hali hech qanday imtihon yaratilmagan yoki qidiruv bo'yicha imtihon mavjud emas. Yuqoridagi tugmani bosib yaratishingiz mumkin.
                        </p>
                    </div>
                )}
            </div>

            {/* Step-by-Step Create Exam Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in" onClick={() => setShowCreateModal(false)}>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg p-6 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div>
                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Yangi Imtihon Qo'shish</h3>
                                <p className="text-xs text-slate-400">Bo'lim va savollarni yaratish rejimi</p>
                            </div>
                            <button onClick={() => setShowCreateModal(false)} className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Step 1: Category Selection */}
                        <div className="space-y-2">
                            <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider">1. Imtihon Turini Tanlang:</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setExamCategory('IELTS')}
                                    className={`p-4 rounded-2xl border font-bold text-sm flex flex-col items-center gap-2 transition ${
                                        examCategory === 'IELTS'
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20 scale-[1.02]'
                                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                                    }`}
                                >
                                    <FileText className="w-7 h-7" />
                                    <span>IELTS</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setExamCategory('JLPT')}
                                    className={`p-4 rounded-2xl border font-bold text-sm flex flex-col items-center gap-2 transition ${
                                        examCategory === 'JLPT'
                                            ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white border-rose-600 shadow-lg shadow-rose-500/20 scale-[1.02]'
                                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-rose-300'
                                    }`}
                                >
                                    <Award className="w-7 h-7" />
                                    <span>JLPT (Yapon Tili)</span>
                                </button>
                            </div>
                        </div>

                        {/* Step 2: Level Selection */}
                        {examCategory === 'JLPT' ? (
                            <div className="space-y-2">
                                <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider">2. JLPT Darajasini Tanlang (N1 - N5):</label>
                                <div className="grid grid-cols-5 gap-2">
                                    {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                                        <button
                                            key={lvl}
                                            type="button"
                                            onClick={() => setJlptLevel(lvl)}
                                            className={`py-3 rounded-xl font-black text-sm border transition ${
                                                jlptLevel === lvl
                                                    ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-[1.05]'
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
                                <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider">2. IELTS Turini Tanlang:</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {(['Academic', 'General'] as const).map(t => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setIeltsType(t)}
                                            className={`py-3 rounded-xl font-bold text-sm border transition ${
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
                                    className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-sans outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Tavsif (ixtiyoriy)</label>
                                <textarea
                                    value={newDesc}
                                    onChange={e => setNewDesc(e.target.value)}
                                    rows={2}
                                    placeholder="Imtihon haqida qisqacha ma'lumot..."
                                    className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-sans outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end pt-2">
                            <Button variant="outline" onClick={() => setShowCreateModal(false)} className="rounded-xl">Bekor qilish</Button>
                            <Button 
                                onClick={handleCreateExam} 
                                disabled={creating} 
                                className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg"
                            >
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
