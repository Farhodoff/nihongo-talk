import React, { useState, useEffect } from 'react';
import { BarChart, BookOpen, Calendar, CheckSquare, ChevronLeft, ChevronRight, Clock, Copy, FileText, Flag, Home, Menu, Settings as SettingsIcon, Users, X } from 'lucide-react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SessionCompleteModal } from './SessionCompleteModal';
import { useStudyData } from '../context/StudyPlannerContext';

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Mobile
    const [isCollapsed, setIsCollapsed] = useState(false); // Desktop
    const location = useLocation();
    const navigate = useNavigate();
    const { focusState } = useStudyData();
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: Home },
        { name: 'Maqsadlar', path: '/goals', icon: Flag },
        { name: 'Fanlar', path: '/subjects', icon: BookOpen },
        { name: 'Vazifalar', path: '/tasks', icon: CheckSquare },
        { name: 'Kalendar', path: '/calendar', icon: Calendar },
        { name: 'Fokus', path: '/focus', icon: Clock },
        { name: 'Stikerlar', path: '/notes', icon: FileText },
        { name: 'Konspektlar', path: '/study-notes', icon: BookOpen },
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
        <div className="h-screen flex flex-col md:flex-row bg-[#f3f4f6] dark:bg-[#111827] text-gray-900 dark:text-gray-100 transition-colors duration-200 overflow-hidden">
            {/* Mobile Header */}
            <header className="md:hidden bg-white dark:bg-[#1f2937] p-4 flex justify-between items-center shadow-sm z-30 relative">
                <h1 className="text-xl font-bold">{getPageTitle()}</h1>
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${isCollapsed ? 'md:w-20' : 'md:w-64'} w-64 bg-white dark:bg-[#1f2937] shadow-lg transition-all duration-300 ease-in-out z-30 flex flex-col`}
            >
                <div className={`p-6 border-b border-gray-100 dark:border-gray-700 flex items-center ${isCollapsed ? 'justify-center' : 'justify-end'}`}>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:block p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400"
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={(e) => {
                                if (focusState.isActive) {
                                    e.preventDefault();
                                    if (window.confirm("Diqqat! Fokus rejimi faol. Agar chiqib ketsangiz, taymer to'xtaydi. Davom etasizmi?")) {
                                        // If confirmed, navigate manually
                                        setSidebarOpen(false);
                                        navigate(item.path);
                                    }
                                } else {
                                    setSidebarOpen(false);
                                }
                            }}
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
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 relative w-full">
                {!isOnline && (
                    <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl flex items-center gap-3 text-amber-700 dark:text-amber-400 animate-in fade-in slide-in-from-top-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <p className="text-sm font-medium">Oflayn rejim. O'zgarishlar internet tiklanganda sinxronizatsiya qilinadi.</p>
                    </div>
                )}
                <Outlet />
            </main>
            {/* Global Modals */}
            <SessionCompleteModal />
        </div>
    );
};

export default Layout;
