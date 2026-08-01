import React, { useState } from 'react';
import { 
    BarChart, BookOpen, Calendar, CheckSquare, ChevronLeft, ChevronRight, ChevronDown,
    Clock, Copy, Home, Menu, Settings as SettingsIcon, Users, Sparkles, 
    NotebookText, GraduationCap, Mic, Crown, Folder, FolderOpen
} from 'lucide-react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SessionCompleteModal } from './SessionCompleteModal';
import InAppNotificationModal from './InAppNotificationModal';
import AIAccountabilityManager from './AIAccountabilityManager';
import { useFocusTimerContext } from '../context/FocusTimerContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/Button';
import { AppLogo } from './AppLogo';
import { GlobalAnnouncementBanner } from './GlobalAnnouncementBanner';

interface NavGroup {
    category: string;
    icon?: React.ComponentType<any>;
    items: {
        name: string;
        path: string;
        icon: React.ComponentType<any>;
        tourId: string;
    }[];
}

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Mobile
    const [isCollapsed, setIsCollapsed] = useState(false); // Desktop
    const location = useLocation();
    const navigate = useNavigate();
    const { focusState } = useFocusTimerContext();

    const isFullScreenPage = React.useMemo(() => {
        const fullScreenPaths = [
            '/speaking-coach',
            '/ai',
            '/room',
            '/focus',
            '/ielts/speaking-mock',
            '/jlpt/listening'
        ];
        return fullScreenPaths.some(p => location.pathname.startsWith(p));
    }, [location.pathname]);

    // Accordion / Collapsible Group State
    const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>(() => {
        const saved = localStorage.getItem('study_planner_collapsed_groups');
        return saved ? JSON.parse(saved) : {};
    });

    const toggleGroup = (category: string) => {
        setCollapsedGroups(prev => {
            const next = { ...prev, [category]: !prev[category] };
            localStorage.setItem('study_planner_collapsed_groups', JSON.stringify(next));
            return next;
        });
    };

    const navGroups: NavGroup[] = [
        {
            category: 'ASOSIY',
            icon: Home,
            items: [
                { name: 'Dashboard', path: '/dashboard', icon: Home, tourId: 'nav-dashboard' },
                { name: 'IELTS Hub', path: '/ielts', icon: GraduationCap, tourId: 'nav-ielts' },
                { name: 'JLPT Hub', path: '/jlpt', icon: Sparkles, tourId: 'nav-jlpt' },
                { name: 'AI Coach', path: '/speaking-coach', icon: Mic, tourId: 'nav-speaking-coach' },
            ]
        },
        {
            category: "O'QUV QUROLLARI",
            icon: FolderOpen,
            items: [
                { name: 'Kalendar', path: '/calendar', icon: Calendar, tourId: 'nav-calendar' },
                { name: 'Fanlar & Reja', path: '/subjects', icon: BookOpen, tourId: 'nav-subjects' },
                { name: 'Vazifalar', path: '/tasks', icon: CheckSquare, tourId: 'nav-tasks' },
                { name: 'Fokus Timer', path: '/focus', icon: Clock, tourId: 'nav-focus' },
                { name: 'Qaydlar & Konspektlar', path: '/notes', icon: NotebookText, tourId: 'nav-notes' },
                { name: 'Fleshkartalar', path: '/flashcards', icon: Copy, tourId: 'nav-flashcards' },
                { name: "Aqlli Lug'at", path: '/vocabulary', icon: BookOpen, tourId: 'nav-vocabulary' },
                { name: 'AI Yordamchi', path: '/ai', icon: Sparkles, tourId: 'nav-ai' },
            ]
        },
        {
            category: 'TAHLIL & JAMOA',
            icon: BarChart,
            items: [
                { name: 'Statistika', path: '/progress', icon: BarChart, tourId: 'nav-progress' },
                { name: 'Jamoa', path: '/community', icon: Users, tourId: 'nav-community' },
            ]
        }
    ];

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getPageTitle = () => {
        for (const group of navGroups) {
            const found = group.items.find(item => item.path === location.pathname);
            if (found) return found.name;
        }
        if (location.pathname === '/settings') return 'Sozlamalar';
        return 'Study Planner';
    };

    const NavLinks = ({ onClick }: { onClick?: () => void }) => (
        <div className="flex-1 overflow-y-auto scrollbar-hide px-3 py-2 space-y-4">
            {navGroups.map((group) => {
                const isGroupCollapsed = !!collapsedGroups[group.category];
                const GroupIcon = group.icon || Folder;

                return (
                    <div key={group.category} className="space-y-1">
                        {!isCollapsed ? (
                            <button
                                onClick={() => toggleGroup(group.category)}
                                className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-800/40 select-none group"
                            >
                                <span className="flex items-center gap-1.5">
                                    <GroupIcon size={13} className="text-primary/70" />
                                    {group.category}
                                </span>
                                <div className="text-slate-500 group-hover:text-slate-300 transition-transform">
                                    {isGroupCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                                </div>
                            </button>
                        ) : (
                            <div className="h-px bg-border/50 my-2" />
                        )}

                        <AnimatePresence initial={false}>
                            {(!isGroupCollapsed || isCollapsed) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-1 overflow-hidden"
                                >
                                    {group.items.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={onClick}
                                            data-tour={item.tourId}
                                            className={({ isActive }) =>
                                                `group flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-2 rounded-xl transition-all duration-200 text-sm font-medium ${isActive
                                                    ? 'bg-primary/10 text-primary font-bold shadow-sm'
                                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                                }`
                                            }
                                            title={isCollapsed ? item.name : ''}
                                        >
                                            <item.icon 
                                                size={19} 
                                                className={`transition-transform duration-200 ${isCollapsed ? '' : 'group-hover:scale-110'}`} 
                                                strokeWidth={2}
                                            />
                                            {!isCollapsed && <span className="truncate">{item.name}</span>}
                                        </NavLink>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="h-screen flex flex-col md:flex-row bg-background text-foreground transition-colors duration-300 overflow-hidden font-sans">
            <AIAccountabilityManager />
            
            {/* Mini Timer Overlay */}
            {focusState.isActive && location.pathname !== '/focus' && (
                <div 
                    onClick={() => navigate('/focus')}
                    className={`fixed ${isFullScreenPage ? 'bottom-28 md:bottom-24 right-6' : 'bottom-20 md:bottom-6 right-6'} z-50 glass-card p-3 rounded-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-all group animate-in slide-in-from-bottom-4 shadow-xl`}
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
            <header className="md:hidden glass-card p-4 flex justify-between items-center z-30 border-b relative">
                <div className="flex items-center gap-2">
                    <AppLogo size="sm" showText={false} />
                    <h1 className="text-xl font-bold text-gradient">
                        {getPageTitle()}
                    </h1>
                </div>
            </header>

            {/* Desktop Sidebar */}
            <aside
                className={`hidden md:flex flex-col relative translate-x-0 ${isCollapsed ? 'w-20' : 'w-72'} bg-card border-r border-border transition-all duration-300 ease-in-out z-30`}
            >
                {/* Logo Area */}
                <div className={`h-16 px-4 py-3 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} border-b border-border bg-gradient-to-b from-card/80 to-card backdrop-blur-md`}>
                    <AppLogo size="md" collapsed={isCollapsed} />
                    
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:flex text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-xl"
                        aria-label={isCollapsed ? "Sidebar-ni ochish" : "Sidebar-ni yopish"}
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </Button>
                </div>

                {/* Navigation Links (Accordion Folders) */}
                <NavLinks />

                {/* Bottom Section: Settings & Get Premium */}
                <div className="p-3 border-t border-border space-y-2 bg-card">

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${isActive
                                ? 'bg-primary/10 text-primary font-bold shadow-sm'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`
                        }
                        title={isCollapsed ? 'Sozlamalar & Profil' : ''}
                    >
                        <SettingsIcon size={19} />
                        {!isCollapsed && <span>Sozlamalar & Profil</span>}
                    </NavLink>

                    {/* Premium Upgrade Button */}
                    {!isCollapsed ? (
                        <button
                            onClick={() => navigate('/pricing')}
                            className="w-full py-3 px-4 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 border border-rose-400/30"
                        >
                            <Crown size={18} className="animate-bounce" />
                            <span>Obunani Yangilash 🚀</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/pricing')}
                            title="Obunani Yangilash (Get Premium)"
                            className="w-full py-3 flex justify-center bg-gradient-to-r from-rose-500 to-indigo-600 text-white rounded-xl shadow-lg hover:scale-110 transition-transform"
                        >
                            <Crown size={20} />
                        </button>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-hidden relative w-full bg-background flex flex-col">
                <GlobalAnnouncementBanner />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`w-full ${
                            isFullScreenPage 
                            ? 'h-full flex flex-col overflow-hidden' 
                            : 'h-full overflow-y-auto pb-24 md:pb-6'
                        }`}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 w-full glass-card border-t border-border z-40 flex justify-around items-center px-2 py-2 pb-safe bg-background/80 backdrop-blur-md">
                {[
                    { name: 'Dashboard', path: '/dashboard', icon: Home },
                    { name: 'Vazifalar', path: '/tasks', icon: CheckSquare },
                    { name: 'Fokus', path: '/focus', icon: Clock },
                    { name: 'Kalendar', path: '/calendar', icon: Calendar },
                ].map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `flex flex-col items-center justify-center w-16 p-1.5 rounded-xl transition-all duration-200 ${isActive ? 'text-primary bg-primary/10 scale-105' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={22} className="mb-1" strokeWidth={isActive ? 2.5 : 2} />
                                <span className="text-[10px] font-medium leading-none">{item.name}</span>
                            </>
                        )}
                    </NavLink>
                ))}
                
                <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
                    <SheetTrigger asChild>
                        <button aria-label="Menyuni ochish" className="flex flex-col items-center justify-center w-16 p-1.5 text-muted-foreground hover:text-foreground rounded-xl transition-colors">
                            <Menu size={22} className="mb-1" />
                            <span className="text-[10px] font-medium leading-none">Boshqa</span>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-72 flex flex-col">
                        <div className="h-16 p-4 flex items-center gap-3 border-b border-border">
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <Sparkles className="text-primary" size={20} />
                            </div>
                            <span className="text-lg font-black text-gradient tracking-tight">
                                PLANNER
                            </span>
                        </div>
                        <NavLinks onClick={() => setSidebarOpen(false)} />
                        <div className="p-4 border-t border-border">
                            <button
                                onClick={() => {
                                    setSidebarOpen(false);
                                    navigate('/pricing');
                                }}
                                className="w-full py-3 px-4 bg-gradient-to-r from-rose-500 to-indigo-600 text-white font-bold text-sm rounded-xl shadow flex items-center justify-center gap-2"
                            >
                                <Crown size={18} />
                                <span>Obunani Yangilash 🚀</span>
                            </button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>

            {/* Global Modals */}
            <SessionCompleteModal />
            <InAppNotificationModal />
        </div>
    );
};

export default Layout;
