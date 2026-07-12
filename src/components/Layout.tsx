import React, { useState, useEffect } from 'react';
import { BarChart, BookOpen, Calendar, CheckSquare, ChevronLeft, ChevronRight, Clock, Copy, FileText, Flag, Home, Menu, Settings as SettingsIcon, Users, Sparkles, BrainCircuit, MessageSquare, Zap, Shield } from 'lucide-react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SessionCompleteModal } from './SessionCompleteModal';
import AIAccountabilityManager from './AIAccountabilityManager';
import { useFocusTimerContext } from '../context/FocusTimerContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/Button';

import { useStudyData } from '../context/StudyPlannerContext';

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Mobile
    const [isCollapsed, setIsCollapsed] = useState(false); // Desktop
    const location = useLocation();
    const navigate = useNavigate();
    const { focusState } = useFocusTimerContext();
    const { user } = useStudyData();
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
        { name: 'AI Chatbot', path: '/ai-chat', icon: MessageSquare },
        { name: 'Aqliy Xarita', path: '/mindmap', icon: BrainCircuit },
        ...(user?.email === 'fsoyilov@gmail.com' ? [{ name: '🇯🇵 IT Interview', path: '/interview', icon: Users }] : []),
        { name: 'Jamoa', path: '/community', icon: Users },
        { name: 'Statistika', path: '/progress', icon: BarChart },
        { name: 'Tariflar', path: '/pricing', icon: Zap },
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

    const NavLinks = ({ onClick }: { onClick?: () => void }) => (
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-hide">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClick}
                    data-tour={`nav-${item.path.replace('/', '')}`}
                    className={({ isActive }) =>
                        `group flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? 'bg-primary/10 text-primary font-medium shadow-sm'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
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
    );

    return (
        <div className="h-screen flex flex-col md:flex-row bg-background text-foreground transition-colors duration-300 overflow-hidden font-sans">
            <AIAccountabilityManager />
            
            {/* Mini Timer Overlay */}
            {focusState.isActive && location.pathname !== '/focus' && (
                <div 
                    onClick={() => navigate('/focus')}
                    className="fixed bottom-6 right-6 z-50 glass-card p-3 rounded-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-all group animate-in slide-in-from-bottom-4"
                >
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
                            <Clock size={18} className="text-primary animate-pulse" />
                        </div>
                        <svg className="absolute inset-0 w-10 h-10 -rotate-90" viewBox="0 0 100 100">
                            <circle 
                                cx="50" cy="50" r="45" 
                                fill="none" stroke="currentColor" strokeWidth="8" 
                                strokeDasharray="283" 
                                strokeDashoffset={283 - (283 * ((focusState.mode === 'focus' ? 25*60 : focusState.mode === 'short_break' ? 5*60 : 15*60) - focusState.timeLeft) / (focusState.mode === 'focus' ? 25*60 : focusState.mode === 'short_break' ? 5*60 : 15*60))}
                                className="text-primary transition-all duration-1000"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">
                            {focusState.mode === 'focus' ? 'Fokus' : 'Tanaffus'}
                        </span>
                        <span className="text-lg font-mono font-bold text-foreground leading-none tabular-nums">
                            {formatTime(focusState.timeLeft)}
                        </span>
                    </div>
                    <div className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={16} className="text-muted-foreground" />
                    </div>
                </div>
            )}

            {/* Mobile Header */}
            <header className="md:hidden glass-card p-4 flex justify-between items-center z-30 border-b">
                <div className="flex items-center gap-2">
                    <Sparkles className="text-primary" size={24} />
                    <h1 className="text-xl font-bold text-gradient">
                        {getPageTitle()}
                    </h1>
                </div>
                <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-72 flex flex-col">
                        <div className="h-20 p-6 flex items-center gap-3 border-b border-border">
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <Sparkles className="text-primary" size={24} />
                            </div>
                            <span className="text-xl font-bold text-gradient tracking-tight">
                                Planner
                            </span>
                        </div>
                        <NavLinks onClick={() => setSidebarOpen(false)} />
                    </SheetContent>
                </Sheet>
            </header>

            {/* Desktop Sidebar */}
            <aside
                className={`hidden md:flex flex-col relative translate-x-0 ${isCollapsed ? 'w-20' : 'w-72'} bg-card border-r border-border transition-all duration-300 ease-in-out z-30`}
            >
                {/* Logo Area */}
                <div className={`h-20 p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} border-b border-border`}>
                    {!isCollapsed && (
                        <div className="flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <Sparkles className="text-primary" size={24} />
                            </div>
                            <span className="text-xl font-bold text-gradient tracking-tight">
                                Planner
                            </span>
                        </div>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:flex text-muted-foreground"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </Button>
                </div>
                <NavLinks />
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-hidden relative w-full bg-background flex flex-col">
                {!isOnline && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full shadow-sm flex items-center gap-2 text-destructive animate-in fade-in slide-in-from-top-4">
                        <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                        <p className="text-xs font-medium">Oflayn rejim</p>
                    </div>
                )}
                <div className="flex-1 overflow-y-auto w-full relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="h-full w-full"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
            {/* Global Modals */}
            <SessionCompleteModal />
        </div>
    );
};

export default Layout;
