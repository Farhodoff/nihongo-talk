import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Task, TaskStatus } from '../../types';

interface KanbanBoardProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
}

const columns: { id: TaskStatus; title: string }[] = [
    { id: 'todo', title: 'To Do' },
    { id: 'in_progress', title: 'In Progress' },
    { id: 'done', title: 'Done' },
];

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks, onStatusChange }) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
        e.dataTransfer.setData('taskId', taskId);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: TaskStatus) => {
        const taskId = e.dataTransfer.getData('taskId');
        if (taskId) {
            onStatusChange(taskId, status);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex gap-6 h-full overflow-x-auto pb-4 custom-scrollbar">
            {columns.map(column => (
                <div 
                    key={column.id} 
                    className="flex flex-col bg-muted/30 rounded-2xl p-4 min-w-[300px] max-w-[300px] md:flex-1 md:max-w-none border border-border/50"
                    onDrop={(e) => handleDrop(e, column.id)}
                    onDragOver={handleDragOver}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-foreground">{column.title}</h3>
                        <span className="bg-muted text-xs px-2 py-1 rounded-full text-muted-foreground font-medium">
                            {tasks.filter(t => (t.status || (t.completed ? 'done' : 'todo')) === column.id).length}
                        </span>
                    </div>

                    <div className="flex-1 space-y-3 min-h-[100px]">
                        {tasks
                            .filter(t => (t.status || (t.completed ? 'done' : 'todo')) === column.id)
                            .map((task) => (
                                <div
                                    key={task.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, task.id)}
                                    className="glass-card p-4 rounded-xl group transition-all hover:border-primary/50 transform hover:-translate-y-0.5 cursor-grab active:cursor-grabbing"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider ${task.priority === 'high' ? 'bg-destructive/10 text-destructive' :
                                                task.priority === 'medium' ? 'bg-orange-500/10 text-orange-500' :
                                                    'bg-blue-500/10 text-blue-500'
                                            }`}>
                                            {task.priority}
                                        </span>
                                        <button className="text-muted-foreground hover:text-foreground transition-colors">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-1">{task.title}</h4>
                                    {task.deadline && (
                                        <p className="text-xs text-muted-foreground font-medium">
                                            Due: {new Date(task.deadline).toLocaleDateString()}
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;
