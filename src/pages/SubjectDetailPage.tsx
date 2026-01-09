import { ArrowLeft, Calendar, Clock, MapPin, Sparkles, User } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ResourceRecommendations from '../components/ResourceRecommendations';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import SubjectNotes from '../components/SubjectNotes';
import Whiteboard from '../components/Whiteboard';
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
    if (!subject) return <div>Subject not found</div>;

    const subjectTasks = tasks.filter(t => t.subjectId === id);
    const subjectCards = flashcards.filter(c => c.subjectId === id);
    const masteryScore = calculateMasteryScore(subjectCards);

    const handleDelete = () => {
        if (confirm('Ushbu fanni o\'chirishga ishonchingiz komilmi?')) {
            deleteSubject(subject.id);
            navigate('/subjects');
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate('/subjects')} className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Orqaga
                </button>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={handleDelete} className="text-red-500 hover:bg-red-50">O'chirish</Button>
                </div>
            </div>

            <div className="bg-white dark:bg-[#1f2937] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: subject.color }} />
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{subject.name}</h1>
                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
                    {subject.teacherName && (
                        <span className="flex items-center"><User size={18} className="mr-2 text-indigo-500" /> {subject.teacherName}</span>
                    )}
                    {subject.roomLocation && (
                        <span className="flex items-center"><MapPin size={18} className="mr-2 text-indigo-500" /> {subject.roomLocation}</span>
                    )}
                    {subject.schedule && subject.schedule.length > 0 && (
                        <span className="flex items-center"><Calendar size={18} className="mr-2 text-indigo-500" /> {subject.schedule.join(', ')}</span>
                    )}
                </div>

                <div className="mt-6 max-w-md">
                    <div className="flex justify-between text-sm font-medium mb-1 text-gray-500">
                        <span>O'zlashtirish Darajasi</span>
                        <span>{masteryScore}%</span>
                    </div>
                    <ProgressBar progress={masteryScore} color={subject.color} height={8} />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-gray-200 dark:border-gray-700 mb-6">
                <button
                    onClick={() => setActiveTab('tasks')}
                    className={`pb-4 font-medium transition-all ${activeTab === 'tasks' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Vazifalar ({subjectTasks.length})
                </button>
                <button
                    onClick={() => setActiveTab('resources')}
                    className={`pb-4 font-medium transition-all flex items-center gap-2 ${activeTab === 'resources' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Sparkles size={16} /> Aqlli Manbalar
                </button>
                <button
                    onClick={() => setActiveTab('notes')}
                    className={`pb-4 font-medium transition-all ${activeTab === 'notes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Konspektlar
                </button>
                <button
                    onClick={() => setActiveTab('whiteboard')}
                    className={`pb-4 font-medium transition-all ${activeTab === 'whiteboard' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Doska
                </button>
            </div>

            {activeTab === 'tasks' && (
                <div className="space-y-3">
                    {subjectTasks.map(task => (
                        <div key={task.id} className={`flex items-center p-4 bg-white dark:bg-[#1f2937] rounded-xl border border-gray-100 dark:border-gray-700 ${task.completed ? 'opacity-50' : ''}`}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-4"
                            />
                            <div className="flex-1">
                                <span className={`font-medium text-gray-900 dark:text-white ${task.completed ? 'line-through' : ''}`}>{task.title}</span>
                                {task.deadline && (
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <Clock size={12} className="mr-1" /> {new Date(task.deadline).toLocaleDateString()}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {subjectTasks.length === 0 && <div className="text-center py-10 text-gray-400">Bu fan uchun hali vazifalar yo'q.</div>}
                </div>
            )}

            {activeTab === 'resources' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <ResourceRecommendations initialTopic={subject.name} />
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
                                className="text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                            >
                                ← Orqaga
                            </button>
                            <Whiteboard whiteboardId={selectedWhiteboardId} />
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
