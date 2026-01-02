import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';
import { MoreHorizontal } from 'lucide-react';
import React from 'react';
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

    const onDragEnd = (result: DropResult) => {
        const { destination, draggableId } = result;

        if (!destination) return;

        if (destination.droppableId !== result.source.droppableId) {
            onStatusChange(draggableId, destination.droppableId as TaskStatus);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-x-auto pb-4">
                {columns.map(column => (
                    <div key={column.id} className="flex flex-col bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 min-w-[280px]">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-700 dark:text-gray-200">{column.title}</h3>
                            <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-600 dark:text-gray-400 font-medium">
                                {tasks.filter(t => (t.status || (t.completed ? 'done' : 'todo')) === column.id).length}
                            </span>
                        </div>

                        <Droppable droppableId={column.id}>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="flex-1 space-y-3 min-h-[100px]"
                                >
                                    {tasks
                                        .filter(t => (t.status || (t.completed ? 'done' : 'todo')) === column.id)
                                        .map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`bg-white dark:bg-[#1f2937] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-shadow ${snapshot.isDragging ? 'rotate-2 shadow-lg' : ''}`}
                                                        style={{ ...provided.draggableProps.style }}
                                                    >
                                                        <div className="flex justify-between items-start mb-2">
                                                            <span className={`text-xs px-2 py-1 rounded-md font-medium ${task.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                                    task.priority === 'medium' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                                                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                                }`}>
                                                                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                                                            </span>
                                                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                                                <MoreHorizontal size={16} />
                                                            </button>
                                                        </div>
                                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{task.title}</h4>
                                                        {task.deadline && (
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                Due: {new Date(task.deadline).toLocaleDateString()}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default KanbanBoard;
