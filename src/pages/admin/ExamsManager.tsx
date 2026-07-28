import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Plus, BookOpen, Edit2, Loader2, ArrowLeft } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { isAdminEmail } from '../../utils/admin';

export const ExamsManager: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();
    const [exams, setExams] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchExams = async () => {
        try {
            const { data, error } = await supabase
                .from('exams')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            setExams(data || []);
        } catch (err) {
            console.error('Error fetching exams', err);
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
        const title = prompt("Imtihon nomini kiriting (masalan: IELTS Mock Test 1):");
        if (!title) return;
        
        const type = prompt("Turi (IELTS, JLPT N2, JLPT N3, JLPT N4, JLPT N5):");
        if (!type) return;

        try {
            const { error } = await supabase.from('exams').insert({
                title,
                type,
                description: 'Yangi imtihon'
            });
            if (error) throw error;
            fetchExams();
        } catch (err: any) {
            console.error("Exams creation error details:", err);
            alert(`Xatolik yuz berdi: ${err?.message || err?.details || JSON.stringify(err)}`);
        }
    };

    if (loading) return <div className="p-8 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-500" /></div>;

    if (!isAdminEmail(user?.email)) {
        return <div className="p-8 text-center text-red-500">Siz admin emassiz!</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/admin')} className="p-2 bg-slate-100 rounded-xl hover:bg-slate-200 transition">
                        <ArrowLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Imtihonlar (Exams) Manager</h1>
                        <p className="text-sm text-slate-500">IELTS va JLPT testlarini boshqarish</p>
                    </div>
                </div>
                <Button onClick={handleCreateExam} className="gap-2">
                    <Plus className="w-4 h-4" /> Yangi imtihon
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map(exam => (
                    <div key={exam.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                                    {exam.type}
                                </span>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mt-2">{exam.title}</h3>
                                <p className="text-xs text-slate-500 mt-1">{exam.description}</p>
                            </div>
                            {exam.is_published ? (
                                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 rounded">Active</span>
                            ) : (
                                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 rounded">Draft</span>
                            )}
                        </div>

                        <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                            <Button variant="outline" className="flex-1 gap-1 text-xs" onClick={() => navigate(`/admin/exams/${exam.id}`)}>
                                <Edit2 className="w-3.5 h-3.5" /> Savollar
                            </Button>
                        </div>
                    </div>
                ))}
                {exams.length === 0 && (
                    <div className="col-span-full p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                        <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
                        <p>Hali hech qanday imtihon yaratilmagan.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExamsManager;
