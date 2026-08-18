import React, { useState, useMemo } from 'react';
import { 
    BarChart, BookOpen, CheckSquare, ChevronLeft, ChevronRight, ChevronDown,
    Clock, Copy, Home, Menu, Settings as SettingsIcon, Users, Sparkles, 
    GraduationCap, Mic, Crown, Folder, Brain,
    Headphones, PenTool, FileText, Target, Shield
} from 'lucide-react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SessionCompleteModal } from './SessionCompleteModal';
import InAppNotificationModal from './InAppNotificationModal';
import AIAccountabilityManager from './AIAccountabilityManager';
import { useFocusTimerContext } from '../context/FocusTimerContext';
import { useLanguage } from '../context/LanguageContext';
import { useStudyData } from '../context/StudyPlannerContext';
import { isAdminEmail } from '../utils/admin';
import { AnimatePresence, motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/Button';
import { AppLogo } from './AppLogo';
import { GlobalAnnouncementBanner } from './GlobalAnnouncementBanner';

import { PersonalizedOnboardingModal } from './onboarding/PersonalizedOnboardingModal';

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
    const location = useLocation();
    const navigate = useNavigate();
    const { focusState } = useFocusTimerContext();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(() => {
        const saved = localStorage.getItem('study_planner_sidebar_collapsed');
        return saved === 'true';
    });

    // Personalized Onboarding First-Visit Trigger
    const [showOnboarding, setShowOnboarding] = useState(() => {
        const onboarded = localStorage.getItem('study_planner_personalized_onboarded');
        return !onboarded;
    });

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

    const { language, setLanguage, t } = useLanguage();
    const { user, primaryLanguage, enabledLanguages, targetLevel, setPrimaryFocus } = useStudyData();
    const displayEmail = user?.email || (typeof window !== 'undefined' ? localStorage.getItem('study_planner_user_email') || 'fsoyilov@gmail.com' : 'fsoyilov@gmail.com');
    const isAdmin = isAdminEmail(displayEmail);

    const navGroups: NavGroup[] = useMemo(() => {
        if (primaryLanguage === 'ja') {
            return [
                {
                    category: "O'RGANISH (LEARN)",
                    icon: BookOpen,
                    items: [
                        { name: "Lug'at & Vocab", path: '/vocabulary?lang=ja', icon: Brain, tourId: 'nav-vocabulary' },
                        { name: "Kanji O'rganish", path: '/jlpt', icon: BookOpen, tourId: 'nav-kanji' },
                        { name: "Grammatika Quiz", path: '/jlpt/grammar-quiz', icon: Sparkles, tourId: 'nav-grammar' },
                        { name: "Reading (O'qish)", path: '/jlpt/reading', icon: FileText, tourId: 'nav-reading' },
                        { name: "Listening (Tinglash)", path: '/jlpt/listening', icon: Headphones, tourId: 'nav-listening' },
                        { name: "Speaking & Senariylar", path: '/scenarios', icon: Mic, tourId: 'nav-speaking' },
                    ]
                },
                {
                    category: 'TARGET (JLPT)',
                    icon: Target,
                    items: [
                        { name: 'JLPT Hub (Level)', path: '/jlpt', icon: GraduationCap, tourId: 'nav-jlpt' },
                        { name: 'JLPT Mock Exam', path: '/jlpt/mock-exam', icon: Sparkles, tourId: 'nav-mock' },
                    ]
                },
                {
                    category: 'ASBOBLAR (TOOLS)',
                    icon: CheckSquare,
                    items: [
                        { name: 'Tasks', path: '/tasks', icon: CheckSquare, tourId: 'nav-tasks' },
                        { name: 'Fleshkartalar', path: '/flashcards', icon: Copy, tourId: 'nav-flashcards' },
                        { name: 'Fokus & Pomodoro', path: '/focus', icon: Clock, tourId: 'nav-focus' },
                        { name: 'Progress', path: '/progress', icon: BarChart, tourId: 'nav-progress' },
                        { name: 'Hamjamiyat', path: '/community', icon: Users, tourId: 'nav-community' },
                    ]
                }
            ];
        }

        // Default: English ('en')
        return [
            {
                category: "O'RGANISH (LEARN)",
                icon: BookOpen,
                items: [
                    { name: "Lug'at & Vocab", path: '/vocabulary?lang=en', icon: Brain, tourId: 'nav-vocabulary' },
                    { name: "Grammatika", path: '/ielts', icon: BookOpen, tourId: 'nav-grammar' },
                    { name: "Reading & Listening", path: '/ielts/reading-listening', icon: Headphones, tourId: 'nav-reading' },
                    { name: "Writing Mock", path: '/ielts/writing', icon: PenTool, tourId: 'nav-writing' },
                    { name: "Speaking Examiner", path: '/speaking-coach?lang=en', icon: Mic, tourId: 'nav-speaking' },
                ]
            },
            {
                category: 'TARGET (IELTS)',
                icon: Target,
                items: [
                    { name: 'IELTS Hub (Band)', path: '/ielts', icon: GraduationCap, tourId: 'nav-ielts' },
                    { name: 'Speaking Mock Exam', path: '/ielts/speaking-mock', icon: Sparkles, tourId: 'nav-mock' },
                ]
            },
            {
                category: 'ASBOBLAR (TOOLS)',
                icon: CheckSquare,
                items: [
                    { name: 'Tasks', path: '/tasks', icon: CheckSquare, tourId: 'nav-tasks' },
                    { name: 'Fleshkartalar', path: '/flashcards', icon: Copy, tourId: 'nav-flashcards' },
                    { name: 'Fokus & Pomodoro', path: '/focus', icon: Clock, tourId: 'nav-focus' },
                    { name: 'Progress', path: '/progress', icon: BarChart, tourId: 'nav-progress' },
                    { name: 'Hamjamiyat', path: '/community', icon: Users, tourId: 'nav-community' },
                ]
            }
        ];
    }, [primaryLanguage]);

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
        return 'Kaizen AI';
    };

    const NavLinks = ({ onClick }: { onClick?: () => void }) => (
        <div className="flex-1 overflow-y-auto scrollbar-hide px-3 py-2 space-y-3">
            {/* Standalone Dashboard Link */}
            <NavLink
                to="/dashboard"
                onClick={onClick}
                data-tour="nav-dashboard"
                className={({ isActive }) =>
                    `group relative flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${isActive
                        ? 'bg-primary/10 text-primary font-bold shadow-xs'
                        : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                    }`
                }
                title={isCollapsed ? (t('nav.dashboard') || 'Dashboard') : ''}
            >
                {({ isActive }) => (
                    <>
                        {isActive && (
                            <motion.div
                                layoutId="activeNavIndicator"
                                className="absolute left-0 w-1 h-5 bg-primary rounded-r-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <Home 
                            size={18} 
                            className={`transition-transform duration-200 ${isCollapsed ? '' : 'group-hover:scale-110'} ${isActive ? 'text-primary' : 'text-muted-foreground'}`} 
                            strokeWidth={isActive ? 2.5 : 2}
                        />
                        {!isCollapsed && <span className="truncate">{t('nav.dashboard') || 'Dashboard'}</span>}
                    </>
                )}
            </NavLink>

            {navGroups.map((group) => {
                const isGroupCollapsed = !!collapsedGroups[group.category];
                const GroupIcon = group.icon || Folder;

                return (
                    <div key={group.category} className="space-y-1">
                        {!isCollapsed ? (
                            <button
                                onClick={() => toggleGroup(group.category)}
                                className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/40 select-none group"
                            >
                                <span className="flex items-center gap-1.5">
                                    <GroupIcon size={13} className="text-primary/80" />
                                    {group.category}
                                </span>
                                <div className="text-muted-foreground/60 group-hover:text-foreground transition-transform">
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
                                    className="space-y-0.5 overflow-hidden"
                                >
                                    {group.items.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={onClick}
                                            data-tour={item.tourId}
                                            className={({ isActive }) =>
                                                `group relative flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-2 rounded-xl transition-all duration-200 text-sm font-medium ${isActive
                                                    ? 'bg-primary/10 text-primary font-bold shadow-xs'
                                                    : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                                                }`
                                            }
                                            title={isCollapsed ? item.name : ''}
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="activeNavIndicator"
                                                            className="absolute left-0 w-1 h-5 bg-primary rounded-r-full"
                                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                        />
                                                    )}
                                                    <item.icon 
                                                        size={18} 
                                                        className={`transition-transform duration-200 ${isCollapsed ? '' : 'group-hover:scale-110'} ${isActive ? 'text-primary' : 'text-muted-foreground'}`} 
                                                        strokeWidth={isActive ? 2.5 : 2}
                                                    />
                                                    {!isCollapsed && <span className="truncate">{item.name}</span>}
                                                </>
                                            )}
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

                {/* Secondary Focus Quick Switcher (Only when 2 languages enabled) */}
                {enabledLanguages.length > 1 && (
                    <div className={`px-3 pt-2 pb-1 ${isCollapsed ? 'flex justify-center px-1' : ''}`}>
                        {!isCollapsed ? (
                            <div className={`px-2.5 py-1.5 rounded-xl border flex items-center justify-between transition-all ${
                                primaryLanguage === 'ja'
                                    ? 'bg-rose-950/25 border-rose-500/30 text-rose-300'
                                    : 'bg-indigo-950/25 border-indigo-500/30 text-indigo-300'
                            }`}>
                                <div className="flex items-center gap-1.5 min-w-0">
                                    <span className="text-sm">{primaryLanguage === 'ja' ? '🇯🇵' : '🇬🇧'}</span>
                                    <span className="text-xs font-bold truncate text-foreground">
                                        {primaryLanguage === 'ja' ? `JLPT ${targetLevel || 'N3'}` : `IELTS ${targetLevel || 'B2'}`}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setPrimaryFocus(primaryLanguage === 'en' ? 'ja' : 'en')}
                                    className="px-2 py-0.5 rounded-lg bg-background/80 hover:bg-background border border-border text-[10px] font-bold text-muted-foreground hover:text-foreground transition-all shadow-xs shrink-0"
                                    title="Boshqa tilga o'tish"
                                >
                                    ⇄ Almashtirish
                                </button>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setPrimaryFocus(primaryLanguage === 'en' ? 'ja' : 'en')}
                                className={`w-9 h-9 rounded-xl border flex items-center justify-center text-sm transition-all ${
                                    primaryLanguage === 'ja'
                                        ? 'bg-rose-950/30 border-rose-500/30'
                                        : 'bg-indigo-950/30 border-indigo-500/30'
                                }`}
                                title={primaryLanguage === 'ja' ? `🇯🇵 JLPT ${targetLevel || 'N3'}` : `🇬🇧 IELTS ${targetLevel || 'B2'}`}
                            >
                                {primaryLanguage === 'ja' ? '🇯🇵' : '🇬🇧'}
                            </button>
                        )}
                    </div>
                )}

                {/* Navigation Links */}
                <NavLinks />

                {/* Bottom Section: Settings & Admin */}
                <div className="p-3 border-t border-border space-y-2 bg-card">
                    {isAdmin && (
                        <NavLink
                            to="/admin"
                            className={({ isActive }) =>
                                `w-full flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-2 rounded-xl transition-all duration-200 text-xs font-bold ${isActive
                                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-xs'
                                    : 'text-rose-400 hover:bg-rose-500/10 border border-rose-500/20'
                                }`
                            }
                            title={isCollapsed ? 'Admin Panel' : ''}
                        >
                            <Shield size={17} className="text-rose-500 shrink-0" />
                            {!isCollapsed && <span>Admin Panel</span>}
                        </NavLink>
                    )}

                    <div className="flex items-center gap-1">
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `flex-1 flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-3 py-2 rounded-xl transition-all duration-200 text-xs font-semibold ${isActive
                                    ? 'bg-primary/10 text-primary font-bold shadow-xs'
                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`
                            }
                            title={isCollapsed ? t('nav.settings') : ''}
                        >
                            <SettingsIcon size={17} />
                            {!isCollapsed && <span>{t('nav.settings')}</span>}
                        </NavLink>

                        <button
                            onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}
                            className="px-2.5 py-2 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground transition-colors border border-border shrink-0"
                            title={language === 'uz' ? 'Switch to English' : "O'zbekchaga o'tish"}
                        >
                            {language === 'uz' ? '🇺🇿 UZ' : '🇬🇧 EN'}
                        </button>
                    </div>

                    {/* Premium Upgrade Button */}
                    {!isCollapsed ? (
                        <button
                            onClick={() => navigate('/pricing')}
                            className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-black text-xs rounded-xl shadow-md shadow-rose-500/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 border border-rose-400/30"
                        >
                            <Crown size={16} className="animate-bounce" />
                            <span>{t('common.upgrade')}</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/pricing')}
                            title="Obunani Yangilash (Get Premium)"
                            className="w-full py-2.5 flex justify-center bg-gradient-to-r from-rose-500 to-indigo-600 text-white rounded-xl shadow-md hover:scale-110 transition-transform"
                        >
                            <Crown size={18} />
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
            <nav className="md:hidden fixed bottom-0 w-full glass-card border-t border-border z-40 flex justify-around items-center px-2 py-2 pb-safe bg-background/90 backdrop-blur-md">
                {[
                    { name: 'Dashboard', path: '/dashboard', icon: Home },
                    { name: 'Fleshkarta', path: '/flashcards', icon: Copy },
                    { name: 'Fokus', path: '/focus', icon: Clock },
                    { name: 'Vazifalar', path: '/tasks', icon: CheckSquare },
                ].map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `flex flex-col items-center justify-center w-16 p-1.5 rounded-xl transition-all duration-200 ${isActive ? 'text-primary bg-primary/10 font-bold scale-105' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={20} className="mb-1" strokeWidth={isActive ? 2.5 : 2} />
                                <span className="text-[10px] font-medium leading-none">{item.name}</span>
                            </>
                        )}
                    </NavLink>
                ))}
                
                <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
                    <SheetTrigger asChild>
                        <button aria-label="Menyuni ochish" className="flex flex-col items-center justify-center w-16 p-1.5 text-muted-foreground hover:text-foreground rounded-xl transition-colors">
                            <Menu size={20} className="mb-1" />
                            <span className="text-[10px] font-medium leading-none">Menyu</span>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-72 flex flex-col bg-card">
                        <div className="h-16 p-4 flex items-center justify-between border-b border-border">
                            <div className="flex items-center gap-2">
                                <AppLogo size="sm" />
                            </div>
                        </div>
                        <NavLinks onClick={() => setSidebarOpen(false)} />
                        <div className="p-4 border-t border-border space-y-2">
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

            {/* Personalized 60s Onboarding Wizard */}
            <PersonalizedOnboardingModal
                isOpen={showOnboarding}
                onClose={() => setShowOnboarding(false)}
            />

            {/* Global Modals */}
            <SessionCompleteModal />
            <InAppNotificationModal />
        </div>
    );
};

export default Layout;
