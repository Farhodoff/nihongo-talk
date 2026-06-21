import React, { useState, useEffect } from 'react';
import { BarChart, BookOpen, Calendar, CheckSquare, ChevronLeft, ChevronRight, Clock, Copy, FileText, Flag, Home, Menu, Settings as SettingsIcon, Users, X, Sparkles, Trash2 } from 'lucide-react';
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
        { name: 'AI Imtihon', path: '/ai-exam', icon: Sparkles },
        { name: 'Jamoa', path: '/community', icon: Users },
        { name: 'Statistika', path: '/progress', icon: BarChart },
        { name: 'Sozlamalar', path: '/settings', icon: SettingsIcon },
    ];

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getPageTitle = () => {
        const current = navItems.find(item => item.path === location.pathname);
        return current ? current.name : 'Study Planner';
    }

    return (
        <div className="h-screen flex flex-col md:flex-row bg-[#f8fafc] dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden font-sans">
            {/* Mini Timer Overlay (Visible when active and NOT on focus page) */}
            {focusState.isActive && location.pathname !== '/focus' && (
                <div 
                    onClick={() => navigate('/focus')}
                    className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-3 border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-3 cursor-pointer hover:scale-105 transition-all group animate-in slide-in-from-bottom-4"
                >
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full border-2 border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center">
                            <Clock size={18} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
                        </div>
                        <svg className="absolute inset-0 w-10 h-10 -rotate-90" viewBox="0 0 100 100">
                            <circle 
                                cx="50" cy="50" r="45" 
                                fill="none" stroke="currentColor" strokeWidth="8" 
                                strokeDasharray="283" 
                                strokeDashoffset={283 - (283 * ((focusState.mode === 'focus' ? 25*60 : focusState.mode === 'short_break' ? 5*60 : 15*60) - focusState.timeLeft) / (focusState.mode === 'focus' ? 25*60 : focusState.mode === 'short_break' ? 5*60 : 15*60))}
                                className="text-indigo-600 dark:text-indigo-400 transition-all duration-1000"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none mb-1">
                            {focusState.mode === 'focus' ? 'Fokus' : 'Tanaffus'}
                        </span>
                        <span className="text-lg font-mono font-bold text-gray-900 dark:text-white leading-none tabular-nums">
                            {formatTime(focusState.timeLeft)}
                        </span>
                    </div>
                    <div className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={16} className="text-gray-400" />
                    </div>
                </div>
            )}

            {/* Mobile Header */}
            <header className="md:hidden bg-white/80 dark:bg-[#1e293b]/80 backdrop-blur-md p-4 flex justify-between items-center shadow-sm z-30 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <Sparkles className="text-indigo-600 dark:text-indigo-400" size={24} />
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                        {getPageTitle()}
                    </h1>
                </div>
                <button 
                    onClick={() => setSidebarOpen(!isSidebarOpen)} 
                    data-tour="mobile-menu-toggle"
                    className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-20 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${isCollapsed ? 'md:w-20' : 'md:w-72'} w-72 bg-white dark:bg-[#1e293b] shadow-xl md:shadow-none border-r border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out z-30 flex flex-col`}
            >
                {/* Logo Area */}
                <div className={`h-20 p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} border-b border-gray-50 dark:border-gray-800/50`}>
                    {!isCollapsed && (
                        <div className="flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                            <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl">
                                <Sparkles className="text-indigo-600 dark:text-indigo-400" size={24} />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 tracking-tight">
                                Planner
                            </span>
                        </div>
                    )}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:flex p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto scrollbar-hide">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            data-tour={`nav-${item.path.replace('/', '')}`}
                            className={({ isActive }) =>
                                `group flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${isActive
                                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-200'
                                }`
                            }
                            title={isCollapsed ? item.name : ''}
                        >
                            <item.icon 
                                size={22} 
                                className={`transition-transform duration-200 ${isCollapsed ? '' : 'group-hover:scale-110'}`} 
                                strokeWidth={2}
                            />
                            {!isCollapsed && <span className="tracking-wide">{item.name}</span>}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative w-full bg-[#f8fafc] dark:bg-[#0f172a]">
                {!isOnline && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-amber-50 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 rounded-full shadow-sm flex items-center gap-2 text-amber-700 dark:text-amber-400 animate-in fade-in slide-in-from-top-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <p className="text-xs font-medium">Oflayn rejim</p>
                    </div>
                )}
                <div className="h-full">
                    <Outlet />
                </div>
            </main>
            {/* Global Modals */}
            <SessionCompleteModal />
        </div>
    );
};

export default Layout;
