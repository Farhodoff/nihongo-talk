import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Navigate, ToolbarProps } from 'react-big-calendar';

const CustomToolbar: React.FC<ToolbarProps> = ({ label, onNavigate, onView, view }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

            {/* Left: Navigation Buttons */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                <button
                    onClick={() => onNavigate(Navigate.PREVIOUS)}
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm transition-all"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => onNavigate(Navigate.TODAY)}
                    className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-all"
                >
                    Bugun
                </button>
                <button
                    onClick={() => onNavigate(Navigate.NEXT)}
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm transition-all"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Center: Label */}
            <div className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                <CalendarIcon className="text-indigo-500" size={24} />
                <span>{label}</span>
            </div>

            {/* Right: View Switcher */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                {['oy', 'hafta', 'kun'].map((viewName) => (
                    <button
                        key={viewName}
                        onClick={() => onView((viewName === 'oy' ? 'month' : viewName === 'hafta' ? 'week' : 'day') as any)}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all ${view === (viewName === 'oy' ? 'month' : viewName === 'hafta' ? 'week' : 'day')
                            ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-white shadow-sm'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                            }`}
                    >
                        {viewName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CustomToolbar;
