import { CheckCircle, Loader2 } from 'lucide-react';
import React from 'react';
import CountdownWidget from '../components/CountdownWidget';
import { useStudyData } from '../context/StudyPlannerContext';

const DashboardPage: React.FC = () => {
    // Hook orqali barcha kerakli ma'lumot va funksiyalarni olamiz
    const { tasks, loading, updateTaskStatus } = useStudyData();

    // Faqat bugungi va hali bajarilmagan vazifalarni filtrlaymiz
    const pendingTasks = tasks.filter(t => t.status !== 'done');

    if (loading) {
        return <div className="flex justify-center p-10"><Loader2 className="animate-spin" /></div>;
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <CountdownWidget />

            <h1 className="text-2xl font-bold mb-6 mt-6 text-gray-900 dark:text-white">Bugungi Reja</h1>

            <div className="space-y-4">
                {pendingTasks.length > 0 ? (
                    pendingTasks.map(task => (
                        <div key={task.id} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex justify-between items-center border border-gray-100 dark:border-gray-700 transition-colors">
                            <span className="text-gray-900 dark:text-white font-medium">{task.title}</span>
                            <button
                                onClick={() => updateTaskStatus(task.id, 'done')}
                                className="text-gray-300 hover:text-green-500 transition-colors"
                            >
                                <CheckCircle size={24} />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Barcha vazifalar bajarildi! 🎉</p>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;