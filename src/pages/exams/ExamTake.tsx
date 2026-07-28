import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2, ArrowLeft, PenTool, Mic, FileText, Headphones } from 'lucide-react';
import { WritingSection } from '../../components/exams/WritingSection';
import { SpeakingSection } from '../../components/exams/SpeakingSection';

export const ExamTake: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [exam, setExam] = useState<any>(null);
    const [sections, setSections] = useState<any[]>([]);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

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
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center space-y-3">
                                <FileText className="w-12 h-12 mx-auto text-indigo-500 opacity-40" />
                                <h3 className="font-bold text-lg">{activeSection.title}</h3>
                                <p className="text-sm text-slate-500 max-w-md mx-auto">
                                    {activeSection.content || "Matn va savollar yuklanmoqda..."}
                                </p>
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
