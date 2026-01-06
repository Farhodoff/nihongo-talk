import React, { useState } from 'react';
import { BarChart, BookOpen, Calendar, CheckSquare, ChevronLeft, ChevronRight, Clock, Copy, FileText, Flag, Home, Menu, Settings as SettingsIcon, Users, X } from 'lucide-react';

import { NavLink, Outlet, useLocation } from 'react-router-dom';
import LevelUpModal from './LevelUpModal';
import LevelProgress from './LevelProgress';
import { SessionCompleteModal } from './SessionCompleteModal';

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Mobile
    const [isCollapsed, setIsCollapsed] = useState(false); // Desktop
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: Home },
        { name: 'Maqsadlar', path: '/goals', icon: Flag },
        { name: 'Fanlar', path: '/subjects', icon: BookOpen },
        { name: 'Vazifalar', path: '/tasks', icon: CheckSquare },
        { name: 'Kalendar', path: '/calendar', icon: Calendar },
        { name: 'Fokus', path: '/focus', icon: Clock },
        { name: 'Qaydlar', path: '/notes', icon: FileText },
        { name: 'Fleshkartalar', path: '/flashcards', icon: Copy },
        { name: 'Jamoa', path: '/community', icon: Users },
        { name: 'Statistika', path: '/progress', icon: BarChart },
        { name: 'Sozlamalar', path: '/settings', icon: SettingsIcon },
    ];

    const getPageTitle = () => {
        const current = navItems.find(item => item.path === location.pathname);
        return current ? current.name : 'Study Planner';
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#f3f4f6] dark:bg-[#111827] text-gray-900 dark:text-gray-100 transition-colors duration-200">
            {/* Mobile Header */}
            <header className="md:hidden bg-white dark:bg-[#1f2937] p-4 flex justify-between items-center shadow-sm z-20">
                <h1 className="text-xl font-bold">{getPageTitle()}</h1>
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${isCollapsed ? 'md:w-20' : 'md:w-64'} w-64 bg-white dark:bg-[#1f2937] shadow-lg transition-all duration-300 ease-in-out z-10 flex flex-col`}
            >
                <div className={`p-6 border-b border-gray-100 dark:border-gray-700 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    {!isCollapsed && <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">StudyPlanner</h1>}

                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:block p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400"
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                <div className={`p-4 pb-0 ${isCollapsed ? 'hidden' : 'block'}`}>
                    <LevelProgress />
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`
                            }
                            title={isCollapsed ? item.name : ''}
                        >
                            <item.icon size={20} />
                            {!isCollapsed && <span>{item.name}</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className={`p-4 border-t border-gray-100 dark:border-gray-700 text-center text-xs text-gray-400 ${isCollapsed ? 'hidden' : 'block'}`}>
                    v1.0.0
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                <LevelUpModal />
                <Outlet />
            </main>
            {/* Global Modals */}
            <SessionCompleteModal />
        </div>
    );
};

export default Layout;
