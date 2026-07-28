import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Plus, Loader2, List, FileText, Headphones, Mic, PenTool } from 'lucide-react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { isAdminEmail } from '../../utils/admin';

export const QuestionEditor: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useStudyData();
    const [exam, setExam] = useState<any>(null);
    const [sections, setSections] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchExamDetails = async () => {
        try {
            const { data: examData } = await supabase.from('exams').select('*').eq('id', id).single();
            setExam(examData);

            const { data: sectionsData } = await supabase
                .from('exam_sections')
                .select('*')
                .eq('exam_id', id)
                .order('order_index', { ascending: true });
            
            setSections(sectionsData || []);
        } catch (err) {
            console.error(err);
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
        } catch (err) {
            alert('Bo\'lim qo\'shishda xatolik');
        }
    };

    if (loading) return <div className="p-8 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-500" /></div>;

    if (!isAdminEmail(user?.email)) {
        return <div className="p-8 text-center text-red-500">Siz admin emassiz!</div>;
    }

    if (!exam) return <div className="p-8 text-center">Imtihon topilmadi.</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/admin/exams')} className="p-2 bg-slate-100 rounded-xl hover:bg-slate-200 transition">
                    <ArrowLeft className="w-5 h-5 text-slate-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{exam.title} - Tahrirlash</h1>
                    <p className="text-sm text-slate-500">Bo'limlar va savollarni boshqarish</p>
                </div>
                <div className="ml-auto">
                    <Button variant={exam.is_published ? "outline" : "default"} onClick={async () => {
                        await supabase.from('exams').update({ is_published: !exam.is_published }).eq('id', exam.id);
                        fetchExamDetails();
                    }}>
                        {exam.is_published ? 'Bekitish (Unpublish)' : 'Nashr qilish (Publish)'}
                    </Button>
                </div>
            </div>

            <div className="flex gap-2 mb-6">
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
                {sections.map(section => (
                    <div key={section.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg">{section.title} <span className="text-sm font-normal text-slate-400">({section.type})</span></h3>
                            <Button variant="outline" size="sm" className="gap-1 text-xs">
                                <Plus className="w-3.5 h-3.5" /> Savol qo'shish
                            </Button>
                        </div>
                        
                        <div className="text-sm text-slate-500 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                            (Bu yerda savollar ro'yxati chiqadi)
                        </div>
                    </div>
                ))}

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
