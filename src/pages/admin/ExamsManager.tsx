import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Plus, BookOpen, Edit2, Loader2, ArrowLeft, Trash2, X } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { isAdminEmail } from '../../utils/admin';

export const ExamsManager: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();
    const [exams, setExams] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    // Create exam modal state
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newType, setNewType] = useState('IELTS');
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
        if (!newTitle.trim()) {
            alert("Imtihon nomini kiriting!");
            return;
        }
        setCreating(true);
        try {
            const { error } = await supabase.from('exams').insert({
                title: newTitle.trim(),
                type: newType,
                description: newDesc.trim() || null
            });
            if (error) throw error;
            setShowCreateModal(false);
            setNewTitle('');
            setNewDesc('');
            fetchExams();
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
                        <p className="text-sm text-slate-500">IELTS va JLPT testlarini boshqarish</p>
                    </div>
                </div>
                <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                    <Plus className="w-4 h-4" /> Yangi imtihon
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
                                <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">Draft</span>
                            )}
                        </div>

                        <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                            <Button variant="outline" className="flex-1 gap-1 text-xs" onClick={() => navigate(`/admin/exams/${exam.id}`)}>
                                <Edit2 className="w-3.5 h-3.5" /> Savollar
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
                    </div>
                )}
            </div>

            {/* Create Exam Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowCreateModal(false)}>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Yangi Imtihon Yaratish</h3>
                            <button onClick={() => setShowCreateModal(false)} className="p-1 text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Imtihon nomi *</label>
                                <input
                                    value={newTitle}
                                    onChange={e => setNewTitle(e.target.value)}
                                    placeholder="Masalan: IELTS Mock Test 1"
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Turi *</label>
                                <select
                                    value={newType}
                                    onChange={e => setNewType(e.target.value)}
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                                >
                                    <option value="IELTS">IELTS</option>
                                    <option value="JLPT N5">JLPT N5</option>
                                    <option value="JLPT N4">JLPT N4</option>
                                    <option value="JLPT N3">JLPT N3</option>
                                    <option value="JLPT N2">JLPT N2</option>
                                    <option value="JLPT N1">JLPT N1</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Tavsif (ixtiyoriy)</label>
                                <textarea
                                    value={newDesc}
                                    onChange={e => setNewDesc(e.target.value)}
                                    rows={2}
                                    placeholder="Imtihon haqida qisqacha..."
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 justify-end pt-2">
                            <Button variant="outline" onClick={() => setShowCreateModal(false)}>Bekor</Button>
                            <Button onClick={handleCreateExam} disabled={creating} className="gap-1">
                                {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                Yaratish
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExamsManager;
