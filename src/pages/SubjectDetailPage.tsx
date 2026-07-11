import { ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import ResourceRecommendations from '../components/ResourceRecommendations';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import SubjectNotes from '../components/SubjectNotes';
import { Suspense, lazy } from 'react';
const Whiteboard = lazy(() => import('../components/Whiteboard'));
import WhiteboardList from '../components/WhiteboardList';
import { useStudyData } from '../context/StudyPlannerContext';
import { calculateMasteryScore } from '../utils/analytics';

const SubjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { subjects, tasks, toggleTask, deleteSubject, flashcards } = useStudyData();
    const [activeTab, setActiveTab] = useState<'tasks' | 'resources' | 'notes' | 'whiteboard'>('tasks');
    const [selectedWhiteboardId, setSelectedWhiteboardId] = useState<string | null>(null);

    const subject = subjects.find(s => s.id === id);
    if (!subject) return <div>Fan topilmadi</div>;

    const subjectTasks = tasks
        .filter(t => t.subjectId === id)
        .sort((a, b) => {
            const dateA = new Date(a.deadline || a.dueDate || 0).getTime();
            const dateB = new Date(b.deadline || b.dueDate || 0).getTime();
            if (dateA === dateB) {
                return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
            }
            return dateA - dateB;
        });
    const subjectCards = flashcards.filter(c => c.subjectId === id);
    const masteryScore = calculateMasteryScore(subjectCards);

    const handleDelete = () => {
        if (confirm('Ushbu fanni o\'chirishga ishonchingiz komilmi?')) {
            deleteSubject(subject.id);
            navigate('/subjects');
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate('/subjects')} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Orqaga
                </button>
                <div className="flex gap-2">
                    <Button 
                        onClick={() => navigate(`/ai-exam/${subject.id}`)} 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2"
                    >
                        <Sparkles size={16} /> AI Imtihon
                    </Button>
                    <Button variant="secondary" onClick={handleDelete} className="text-red-500 hover:bg-red-50">O'chirish</Button>
                </div>
            </div>

            <div className="glass-card p-8 rounded-3xl mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: subject.color }} />
                <h1 className="text-4xl font-bold text-foreground mb-4">{subject.name}</h1>
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                    {subject.schedule && subject.schedule.length > 0 && (
                        <span className="flex items-center"><Calendar size={18} className="mr-2 text-primary" /> {subject.schedule.join(', ')}</span>
                    )}
                </div>

                <div className="mt-6 max-w-md">
                    <div className="flex justify-between text-sm font-medium mb-1 text-muted-foreground">
                        <span>O'zlashtirish Darajasi</span>
                        <span>{masteryScore}%</span>
                    </div>
                    <ProgressBar progress={masteryScore} color={subject.color} height={8} />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-border/50 mb-6">
                <button
                    onClick={() => setActiveTab('tasks')}
                    className={`pb-4 font-medium transition-all ${activeTab === 'tasks' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    Vazifalar ({subjectTasks.length})
                </button>
                <button
                    onClick={() => setActiveTab('resources')}
                    className={`pb-4 font-medium transition-all flex items-center gap-2 ${activeTab === 'resources' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <Sparkles size={16} /> Aqlli Manbalar
                </button>
                <button
                    onClick={() => setActiveTab('notes')}
                    className={`pb-4 font-medium transition-all ${activeTab === 'notes' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    Konspektlar
                </button>
                <button
                    onClick={() => setActiveTab('whiteboard')}
                    className={`pb-4 font-medium transition-all ${activeTab === 'whiteboard' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    Doska
                </button>
            </div>

            {activeTab === 'tasks' && (
                <div className="space-y-3">
                    {subjectTasks.map(task => (
                        <div key={task.id} className={`flex items-center p-4 glass-card border border-border/50 rounded-xl ${task.completed ? 'opacity-50' : ''}`}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                className="w-5 h-5 rounded border-border text-primary focus:ring-primary mr-4 bg-background/50"
                            />
                            <div className="flex-1">
                                <span className={`font-medium text-foreground ${task.completed ? 'line-through' : ''}`}>{task.title}</span>
                                {(task.deadline || task.dueDate) && (
                                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                                        <Clock size={12} className="mr-1" /> {new Date(task.deadline || task.dueDate || '').toLocaleDateString()}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {subjectTasks.length === 0 && <div className="text-center py-10 text-muted-foreground">Bu fan uchun hali vazifalar yo'q.</div>}
                </div>
            )}

            {activeTab === 'resources' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* <ResourceRecommendations initialTopic={subject.name} /> */}
                    <div className="text-muted-foreground p-4 text-center">Manbalar funksiyasi hozircha mavjud emas</div>
                </div>
            )}

            {activeTab === 'notes' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <SubjectNotes subjectId={subject.id} />
                </div>
            )}

            {activeTab === 'whiteboard' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {selectedWhiteboardId ? (
                        <div className="space-y-4">
                            <button
                                onClick={() => setSelectedWhiteboardId(null)}
                                className="mb-4 text-blue-500 hover:text-blue-700 font-medium flex items-center gap-2"
                            >
                                ← Ortga qaytish
                            </button>
                            <Suspense fallback={<div className="h-full flex items-center justify-center p-8 bg-gray-50 rounded-xl"><div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div></div>}>
                                <Whiteboard whiteboardId={selectedWhiteboardId} />
                            </Suspense>
                        </div>
                    ) : (
                        <WhiteboardList
                            subjectId={subject.id}
                            onSelect={(id) => setSelectedWhiteboardId(id)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default SubjectDetailPage;
