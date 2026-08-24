import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';
import Layout from './components/Layout';
import { StudyPlannerProvider } from './context/StudyPlannerContext';
import { FocusTimerProvider } from './context/FocusTimerContext';
import { LanguageProvider } from './context/LanguageContext';
import { supabase } from './lib/supabase';
import OfflineIndicator from './components/OfflineIndicator';
import { PushNotificationPrompt } from './components/pwa/PushNotificationPrompt';
import { Toaster } from './components/ui/toaster';
import { lazyWithRetry } from './utils/lazyRetry';

import { OnboardingTour } from './components/OnboardingTour';

const DashboardPage = lazyWithRetry(() => import('./pages/DashboardPage'));
const CalendarPage = lazyWithRetry(() => import('./pages/CalendarPage'));
const CommunityPage = lazyWithRetry(() => import('./pages/CommunityPage'));
const DecksPage = lazyWithRetry(() => import('./pages/DecksPage'));
const FlashcardForm = lazyWithRetry(() => import('./pages/FlashcardForm'));
const FocusPage = lazyWithRetry(() => import('./pages/FocusPage'));
const ProgressPage = lazyWithRetry(() => import('./pages/ProgressPage'));
const SettingsPage = lazyWithRetry(() => import('./pages/SettingsPage'));
const StudyRoomPage = lazyWithRetry(() => import('./pages/StudyRoomPage'));
const SubjectDetailPage = lazyWithRetry(() => import('./pages/SubjectDetailPage'));
const SubjectsPage = lazyWithRetry(() => import('./pages/SubjectsPage'));
const TasksPage = lazyWithRetry(() => import('./pages/TasksPage'));
const AdminDashboardPage = lazyWithRetry(() => import('./pages/AdminDashboardPage'));
const SpeakingCoachPage = lazyWithRetry(() => import('./pages/SpeakingCoachPage'));
const IeltsHubPage = lazyWithRetry(() => import('./pages/IeltsHubPage'));
const IeltsSpeakingMockPage = lazyWithRetry(() => import('./pages/IeltsSpeakingMockPage'));
const JlptHubPage = lazyWithRetry(() => import('./pages/JlptHubPage'));
const JlptWritingPage = lazyWithRetry(() => import('./pages/JlptWritingPage'));
const VocabularyBuilderPage = lazyWithRetry(() => import('./pages/VocabularyBuilderPage').then(m => ({ default: m.VocabularyBuilderPage })));
const PricingPage = lazyWithRetry(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const ExamsManager = lazyWithRetry(() => import('./pages/admin/ExamsManager'));
const QuestionEditor = lazyWithRetry(() => import('./pages/admin/QuestionEditor'));
const ExamTake = lazyWithRetry(() => import('./pages/exams/ExamTake'));
const DeveloperApiPage = lazyWithRetry(() => import('./pages/DeveloperApiPage'));
const LessonPlayerPage = lazyWithRetry(() => import('./pages/LessonPlayerPage'));
const RoadmapPage = lazyWithRetry(() => import('./pages/RoadmapPage'));
const DiagnosticPage = lazyWithRetry(() => import('./pages/DiagnosticPage').then(m => ({ default: m.DiagnosticPage })));
const PersonalPlanPage = lazyWithRetry(() => import('./pages/PersonalPlanPage').then(m => ({ default: m.PersonalPlanPage })));
const StudyModePage = lazyWithRetry(() => import('./pages/StudyModePage'));
const ScenarioPickerPage = lazyWithRetry(() => import('./pages/ScenarioPickerPage').then(m => ({ default: m.ScenarioPickerPage })));


import { isSuperAdmin } from './utils/admin';
import { useStudyData } from './context/StudyPlannerContext';

const SuperAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useStudyData();
    if (!isSuperAdmin(user?.email)) {
        return <Navigate to="/jlpt" replace />;
    }
    return <>{children}</>;
};

// Loading component
const PageLoader = () => (
    <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Yuklanmoqda...</p>
        </div>
    </div>
);

import ReloadPrompt from './components/pwa/ReloadPrompt';
import UnauthRouter from './components/UnauthRouter';
import InstallPrompt from './components/pwa/InstallPrompt';

const App: React.FC = () => {
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Safety timeout: Never leave the UI stuck on "Yuklanmoqda..."
        const safetyTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        supabase.auth.getSession().then(({ data: { session } }) => {
            clearTimeout(safetyTimer);
            setSession(session);
            setIsLoading(false);
        }).catch((err) => {
            clearTimeout(safetyTimer);
            console.warn("Session check aborted/failed:", err);
            setIsLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                setSession(null);
            } else if (session) {
                setSession(session);
            }
        });

        const handleStorageAuth = (e: StorageEvent) => {
            if (e.key && (e.key.includes('auth-token') || e.key.includes('supabase.auth.token')) && !e.newValue) {
                setSession(null);
            }
        };

        window.addEventListener('storage', handleStorageAuth);

        return () => {
            clearTimeout(safetyTimer);
            subscription.unsubscribe();
            window.removeEventListener('storage', handleStorageAuth);
        };
    }, []);

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-500">Yuklanmoqda...</div>;

    if (!session) {
        return (
            <>
                <UnauthRouter />
                <ReloadPrompt />
                <InstallPrompt />
            </>
        );
    }

    return (
        <ErrorBoundary>
            <LanguageProvider>
                <StudyPlannerProvider>
                    <FocusTimerProvider>
                        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                        <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden relative">
                            <Suspense fallback={<PageLoader />}>
                                <Routes>
                                    <Route path="/" element={<Layout />}>
                                        <Route index element={<Navigate to="/dashboard" replace />} />
                                        <Route path="dashboard" element={<DashboardPage />} />
                                        <Route path="roadmap" element={<RoadmapPage />} />
                                        <Route path="personal-plan" element={<PersonalPlanPage />} />
                                        <Route path="diagnostic" element={<DiagnosticPage />} />
                                        <Route path="lesson/:lessonId" element={<LessonPlayerPage />} />
                                        <Route path="speaking-coach" element={<SpeakingCoachPage />} />
                                        <Route path="ielts" element={<SuperAdminRoute><IeltsHubPage /></SuperAdminRoute>} />
                                        <Route path="ielts/grammar" element={<SuperAdminRoute><Navigate to="/ielts?tab=grammar" replace /></SuperAdminRoute>} />
                                        <Route path="ielts/writing" element={<SuperAdminRoute><Navigate to="/ielts?tab=writing" replace /></SuperAdminRoute>} />
                                        <Route path="ielts-writing" element={<SuperAdminRoute><Navigate to="/ielts?tab=writing" replace /></SuperAdminRoute>} />
                                        <Route path="ielts/speaking-mock" element={<SuperAdminRoute><IeltsSpeakingMockPage /></SuperAdminRoute>} />
                                        <Route path="ielts/reading-listening" element={<SuperAdminRoute><Navigate to="/ielts?tab=reading_listening" replace /></SuperAdminRoute>} />
                                        <Route path="jlpt" element={<JlptHubPage />} />
                                        <Route path="scenarios" element={<ScenarioPickerPage />} />
                                        <Route path="jlpt-speaking" element={<Navigate to="/speaking-coach?lang=ja" replace />} />
                                        <Route path="jlpt-writing" element={<JlptWritingPage />} />
                                        <Route path="jlpt/listening" element={<Navigate to="/jlpt?tab=listening" replace />} />
                                        <Route path="jlpt/grammar" element={<Navigate to="/jlpt?tab=kanji" replace />} />
                                        <Route path="jlpt/grammar-quiz" element={<Navigate to="/jlpt?tab=kanji" replace />} />
                                        <Route path="jlpt/reading" element={<Navigate to="/jlpt?tab=reading" replace />} />
                                        <Route path="jlpt/mock-exam" element={<Navigate to="/jlpt?tab=mock" replace />} />
                                        <Route path="calendar" element={<CalendarPage />} />
                                        <Route path="subjects" element={<SubjectsPage />} />
                                        <Route path="subjects/:id" element={<SubjectDetailPage />} />
                                        <Route path="plan" element={<Navigate to="/personal-plan" replace />} />
                                        <Route path="goals" element={<Navigate to="/personal-plan" replace />} />
                                        <Route path="tasks" element={<TasksPage />} />
                                        <Route path="focus" element={<FocusPage />} />
                                        <Route path="notes" element={<Navigate to="/dashboard" replace />} />
                                        <Route path="notes/:id" element={<Navigate to="/dashboard" replace />} />
                                        <Route path="ai" element={<Navigate to="/dashboard" replace />} />
                                        <Route path="flashcards" element={<DecksPage />} />
                                        <Route path="deck" element={<Navigate to="/flashcards" replace />} />
                                        <Route path="decks" element={<Navigate to="/flashcards" replace />} />
                                        <Route path="deck/:id" element={<Navigate to="/flashcards" replace />} />
                                        <Route path="decks/:id" element={<Navigate to="/flashcards" replace />} />
                                        <Route path="flashcards/new" element={<FlashcardForm />} />
                                        <Route path="study-mode" element={<StudyModePage />} />
                                        <Route path="study-mode/:subjectId" element={<StudyModePage />} />
                                        <Route path="flashcards/study/:subjectId" element={<StudyModePage />} />
                                        <Route path="progress" element={<ProgressPage />} />
                                        <Route path="community" element={<CommunityPage />} />
                                        <Route path="cv-creator" element={<Navigate to="/dashboard" replace />} />
                                        <Route path="vocabulary" element={<VocabularyBuilderPage />} />
                                        <Route path="pricing" element={<PricingPage />} />
                                        <Route path="leaderboard" element={<Navigate to="/community?tab=leaderboard" replace />} />
                                        <Route path="room/:roomId" element={<StudyRoomPage />} />
                                        <Route path="settings" element={<SettingsPage />} />
                                        <Route path="developers" element={<DeveloperApiPage />} />
                                        <Route path="api-docs" element={<Navigate to="/developers" replace />} />
                                        <Route path="admin" element={<AdminDashboardPage />} />
                                        <Route path="admin/exams" element={<ExamsManager />} />
                                        <Route path="admin/exams/:id" element={<QuestionEditor />} />
                                        <Route path="exams/:id" element={<ExamTake />} />
                                        <Route path="auth" element={<Navigate to="/dashboard" replace />} />
                                        <Route path="login" element={<Navigate to="/dashboard" replace />} />
                                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                                    </Route>
                                    <Route path="/auth" element={<Navigate to="/dashboard" replace />} />
                                    <Route path="/login" element={<Navigate to="/dashboard" replace />} />
                                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                                </Routes>
                            </Suspense>
                            <GlobalAudioPlayer />
                            <OnboardingTour />
                            
                            {/* PWA Prompts */}
                            <ReloadPrompt />
                            <InstallPrompt />
                            <PushNotificationPrompt />
                            
                            <OfflineIndicator />
                            <Toaster />
                        </div>
                    </BrowserRouter>
                </FocusTimerProvider>
            </StudyPlannerProvider>
        </LanguageProvider>
    </ErrorBoundary>
    );
};

export default App;
