import { CheckCircle, Loader2, ListTodo, Trophy, ArrowRight, Clock } from 'lucide-react';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import CountdownWidget from '../components/CountdownWidget';
import { useStudyData } from '../context/StudyPlannerContext';

const DashboardPage: React.FC = () => {
    const { tasks, loading, updateTaskStatus } = useStudyData();

    // Sanalarni ajratib olish
    const todayStr = new Date().toISOString().split('T')[0];
    
    const todayTasks = tasks.filter(t => {
        const taskDate = (t.dueDate || t.deadline || '').split('T')[0];
        return taskDate === todayStr;
    }).sort((a, b) => {
        const timeA = new Date(a.dueDate || a.deadline || 0).getTime();
        const timeB = new Date(b.dueDate || b.deadline || 0).getTime();
        return timeA - timeB;
    });

    const overdueTasks = tasks.filter(t => {
        const taskDate = (t.dueDate || t.deadline || '').split('T')[0];
        return taskDate < todayStr && t.status !== 'done';
    }).sort((a, b) => {
        const timeA = new Date(a.dueDate || a.deadline || 0).getTime();
        const timeB = new Date(b.dueDate || b.deadline || 0).getTime();
        return timeA - timeB;
    });

    const todayPendingTasks = todayTasks.filter(t => t.status !== 'done');
    const todayCompletedCount = todayTasks.filter(t => t.status === 'done').length;
    
    const progressPercentage = todayTasks.length > 0 
        ? Math.round((todayCompletedCount / todayTasks.length) * 100) 
        : 0;

    const greeting = useMemo(() => {
        const hour = new Date().getHours();
        if (hour < 12) return "Xayrli tong";
        if (hour < 18) return "Xayrli kun";
        return "Xayrli kech";
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
                <p className="text-gray-500 dark:text-gray-400 font-medium">Ma'lumotlar yuklanmoqda...</p>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header / Greeting */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        {greeting}, O'quvchi! 👋
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Bugun nimani o'rganamiz? O'z oldingizga qo'ygan maqsadlarga bir qadam yaqinlashing.
                    </p>
                </div>
                
                {/* Mini Stats Card */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <div className="flex justify-between items-end mb-1">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Kunlik progress</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white ml-4">{progressPercentage}%</span>
                        </div>
                        <div className="w-32 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <CountdownWidget />

            {/* Tasks Section */}
            <div className="space-y-6">
                {/* Today's Tasks Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <ListTodo className="text-indigo-500" size={24} />
                            Bugungi Reja
                        </h2>
                        <Link to="/tasks" className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center gap-1">
                            Barchasi <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid gap-3">
                        {todayPendingTasks.length > 0 ? (
                            todayPendingTasks.map(task => (
                                <div 
                                    key={task.id} 
                                    className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 hover:border-indigo-100 dark:hover:border-indigo-900/50 flex justify-between items-center transition-all duration-200 transform hover:-translate-y-0.5"
                                >
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => updateTaskStatus(task.id, 'done')}
                                            className="text-gray-300 dark:text-gray-600 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                                            title="Bajarildi deb belgilash"
                                        >
                                            <CheckCircle size={26} />
                                        </button>
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {task.title}
                                            </span>
                                            {task.subjectId && (
                                                <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                    <Clock size={12} /> Bugun
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 px-4 bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 mb-4">
                                    <Trophy size={32} />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Bugungi vazifalar yo'q! 🎉</h3>
                                <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-6">
                                    Bugun uchun rejalashtirilgan vazifalar mavjud emas yoki hammasi bajarilgan.
                                </p>
                                <Link to="/tasks" className="inline-flex items-center justify-center px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200 dark:shadow-none">
                                    Yangi vazifa qo'shish
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Overdue Tasks Section */}
                {overdueTasks.length > 0 && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                                <Clock className="animate-pulse" size={24} />
                                O'tib ketgan vazifalar
                            </h2>
                            <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full">
                                {overdueTasks.length} ta
                            </span>
                        </div>
                        <div className="grid gap-3">
                            {overdueTasks.map(task => (
                                <div 
                                    key={task.id} 
                                    className="group p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 flex justify-between items-center transition-all duration-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => updateTaskStatus(task.id, 'done')}
                                            className="text-red-300 dark:text-red-800 hover:text-green-500 transition-colors"
                                        >
                                            <CheckCircle size={26} />
                                        </button>
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 dark:text-white font-medium">
                                                {task.title}
                                            </span>
                                            <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                                                <Clock size={12} /> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Muddat o\'tib ketgan'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;