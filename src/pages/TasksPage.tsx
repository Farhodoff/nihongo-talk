import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { TaskStatus } from '../types';
import { sendNotification } from '../utils/notifications';
import KanbanBoard from './kanban/KanbanBoard';

const TasksPage: React.FC = () => {
    const { tasks, subjects, goals, updateTask, deleteTask, toggleTask, addTask, settings, awardXP } = useStudyData();
    const [viewMode, setViewMode] = useState<'list' | 'board'>('list');

    // New Task Form
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskLink, setNewTaskLink] = useState('');
    const [newTaskDate, setNewTaskDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
    const [selectedGoal, setSelectedGoal] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleStageChange = (taskId: string, newStatus: TaskStatus) => {
        updateTask(taskId, { status: newStatus });
        sendNotification('Task Updated', 'Task moved to ' + newStatus);
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;

        addTask({
            title: newTaskTitle,
            priority: 'medium',
            dueDate: newTaskDate, // Pass the date
            goalId: selectedGoal || undefined,
            subjectId: selectedSubject || undefined,
            link: newTaskLink || undefined
        });

        if (settings.notificationsEnabled) {
            sendNotification('Task Added', `Added "${newTaskTitle}" to your list.`);
        }

        setNewTaskTitle('');
        setNewTaskLink('');
        // Keep date as today or reset? Better keep as today for multiple entries.
    };

    const handleToggleTask = (taskId: string) => {
        const task = tasks.find(t => t.id === taskId);
        toggleTask(taskId);
        if (task && !task.completed) {
            awardXP(50);
        }
    };

    const getGoalTitle = (id?: string) => {
        const g = goals.find(x => x.id === id);
        return g ? g.title : null;
    }

    const getSubjectInfo = (id?: string) => {
        return subjects.find(s => s.id === id);
    }

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Kunlik Vazifalar</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Kunlik faoliyatingizni boshqaring</p>
                </div>
                <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
                    <button
                        onClick={() => setViewMode('list')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-white' : 'text-gray-500'}`}
                    >
                        Ro'yxat
                    </button>
                    <button
                        onClick={() => setViewMode('board')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'board' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-white' : 'text-gray-500'}`}
                    >
                        Doska
                    </button>
                </div>
            </div>

            {viewMode === 'list' && (
                <div className="bg-white dark:bg-[#1f2937] p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
                    <form onSubmit={handleCreate} className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row flex-wrap gap-4">
                            <input
                                type="text"
                                value={newTaskTitle}
                                onChange={(e) => setNewTaskTitle(e.target.value)}
                                placeholder="Yangi vazifa qo'shish..."
                                className="flex-1 min-w-[200px] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <input
                                type="date"
                                value={newTaskDate}
                                onChange={(e) => setNewTaskDate(e.target.value)}
                                className="w-full md:w-auto px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row flex-wrap gap-4">
                            <input
                                type="text"
                                value={newTaskLink}
                                onChange={(e) => setNewTaskLink(e.target.value)}
                                placeholder="Havola (ixtiyoriy)..."
                                className="flex-1 min-w-[200px] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <select
                                value={selectedGoal}
                                onChange={(e) => setSelectedGoal(e.target.value)}
                                className="w-full md:w-auto px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2937] text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Maqsadga bog'lash</option>
                                {goals.map(g => (
                                    <option key={g.id} value={g.id}>{g.title}</option>
                                ))}
                            </select>
                            <select
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                className="w-full md:w-auto px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2937] text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Fanga bog'lash</option>
                                {subjects.map(s => (
                                    <option key={s.id} value={s.id}>{s.name}</option>
                                ))}
                            </select>
                            <Button type="submit" className="w-full md:w-auto shrink-0 px-8">Qo'shish</Button>
                        </div>
                    </form>
                </div>
            )}

            {viewMode === 'list' ? (
                <div className="space-y-8">
                    {/* Guruhlash logikasi */}
                    {(() => {
                        const todayStr = new Date().toISOString().split('T')[0];
                        const groups = {
                            overdue: tasks.filter(t => !t.completed && (t.dueDate || t.deadline || '').split('T')[0] < todayStr),
                            today: tasks.filter(t => !t.completed && (t.dueDate || t.deadline || '').split('T')[0] === todayStr),
                            upcoming: tasks.filter(t => !t.completed && (t.dueDate || t.deadline || '').split('T')[0] > todayStr),
                            completed: tasks.filter(t => t.completed)
                        };

                        const renderTaskGroup = (title: string, groupTasks: typeof tasks, colorClass: string) => {
                            if (groupTasks.length === 0) return null;
                            return (
                                <div className="space-y-3">
                                    <h3 className={`text-sm font-bold uppercase tracking-wider ${colorClass} flex items-center gap-2 px-1`}>
                                        {title}
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                                            {groupTasks.length}
                                        </span>
                                    </h3>
                                    <div className="space-y-3">
                                        {groupTasks.map(task => {
                                            const subject = getSubjectInfo(task.subjectId);
                                            return (
                                                <div key={task.id} className={`group bg-white dark:bg-[#1f2937] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center gap-4 transition-all ${task.completed ? 'opacity-60' : ''}`}>
                                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                                        <button
                                                            onClick={() => handleToggleTask(task.id)}
                                                            className={`w-6 h-6 shrink-0 rounded-lg border-2 flex items-center justify-center transition-colors ${task.completed ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300 dark:border-gray-600 hover:border-indigo-600'}`}
                                                        >
                                                            {task.completed && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                                                        </button>

                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <p className={`font-medium text-gray-900 dark:text-white truncate ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                                                    {task.title}
                                                                </p>
                                                                {task.googleEventId && (
                                                                    <div className="flex-shrink-0 text-blue-500" title="Google Calendar bilan sinxronizatsiya qilingan">
                                                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-5v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                                                        </svg>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex flex-wrap items-center gap-2 mt-1">
                                                                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    {(task.dueDate || task.deadline || '').split('T')[0]}
                                                                </span>
                                                                {task.link && (
                                                                    <a href={task.link} target="_blank" rel="noopener noreferrer" className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1">
                                                                        🔗 Havola
                                                                    </a>
                                                                )}
                                                                {task.goalId && (
                                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium">
                                                                        🎯 {getGoalTitle(task.goalId)}
                                                                    </span>
                                                                )}
                                                                {subject && (
                                                                    <span
                                                                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                                                                        style={{ backgroundColor: subject.color + '20', color: subject.color }}
                                                                    >
                                                                        {subject.name}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={() => deleteTask(task.id)}
                                                        className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 transition-all self-end md:self-auto"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        };

                        if (tasks.length === 0) {
                            return (
                                <div className="text-center py-20 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Vazifalar yo'q</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mt-1">Yangi vazifa qo'shish orqali boshlang!</p>
                                </div>
                            );
                        }

                        return (
                            <>
                                {renderTaskGroup("O'tib ketgan", groups.overdue, "text-red-500")}
                                {renderTaskGroup("Bugun", groups.today, "text-indigo-600 dark:text-indigo-400")}
                                {renderTaskGroup("Kelajakda", groups.upcoming, "text-gray-500")}
                                {renderTaskGroup("Bajarilgan", groups.completed, "text-green-600 dark:text-green-500")}
                            </>
                        );
                    })()}
                </div>
            ) : (
                <KanbanBoard
                    tasks={tasks}
                    onStatusChange={handleStageChange}
                />
            )}
        </div>
    );
};

export default TasksPage;
