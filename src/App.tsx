import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';
import Layout from './components/Layout';
import { StudyPlannerProvider } from './context/StudyPlannerContext';
import { FocusTimerProvider } from './context/FocusTimerContext';
import { supabase } from './lib/supabase';
import { OnboardingTour } from './components/OnboardingTour';
import { Toaster } from './components/ui/toaster';

// Lazy load all page components for better performance
const AuthPage = lazy(() => import('./pages/AuthPage'));
const AIAssistantPage = lazy(() => import('./pages/AIAssistantPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const DecksPage = lazy(() => import('./pages/DecksPage'));
const FlashcardForm = lazy(() => import('./pages/FlashcardForm'));
const FocusPage = lazy(() => import('./pages/FocusPage'));
const GoalsPage = lazy(() => import('./pages/GoalsPage'));
const NoteEditorPage = lazy(() => import('./pages/NoteEditorPage'));
const StudyNotesPage = lazy(() => import('./pages/StudyNotesPage'));
const NotesPage = lazy(() => import('./pages/NotesPage'));
const ProgressPage = lazy(() => import('./pages/ProgressPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const StudyModePage = lazy(() => import('./pages/StudyModePage'));
const StudyRoomPage = lazy(() => import('./pages/StudyRoomPage'));
const SubjectDetailPage = lazy(() => import('./pages/SubjectDetailPage'));
const SubjectsPage = lazy(() => import('./pages/SubjectsPage'));
const TasksPage = lazy(() => import('./pages/TasksPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const SpeakingCoachPage = lazy(() => import('./pages/SpeakingCoachPage'));
const IeltsWritingPage = lazy(() => import('./pages/IeltsWritingPage'));
const IeltsHubPage = lazy(() => import('./pages/IeltsHubPage'));
const IeltsSpeakingMockPage = lazy(() => import('./pages/IeltsSpeakingMockPage'));
const IeltsReadingListeningMockPage = lazy(() => import('./pages/IeltsReadingListeningMockPage').then(m => ({ default: m.IeltsReadingListeningMockPage })));
const JlptHubPage = lazy(() => import('./pages/JlptHubPage'));
const JlptWritingPage = lazy(() => import('./pages/JlptWritingPage'));
const JlptListeningMockPage = lazy(() => import('./pages/JlptListeningMockPage').then(m => ({ default: m.JlptListeningMockPage })));
const JlptGrammarQuizPage = lazy(() => import('./pages/JlptGrammarQuizPage').then(m => ({ default: m.JlptGrammarQuizPage })));
const JlptMockExamPage = lazy(() => import('./pages/JlptMockExamPage').then(m => ({ default: m.JlptMockExamPage })));
const CVCreatorTab = lazy(() => import('./components/CVCreator/CVCreatorTab').then(m => ({ default: m.CVCreatorTab })));

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
import InstallPrompt from './components/pwa/InstallPrompt';
import OfflineIndicator from './components/OfflineIndicator';

const App: React.FC = () => {
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setIsLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-500">Yuklanmoqda...</div>;

    if (!session) {
        return (
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="*" element={<AuthPage />} />
                    </Routes>
                </Suspense>
                <ReloadPrompt />
                <InstallPrompt />
            </BrowserRouter>
        );
    }

    return (
        <ErrorBoundary>
            <StudyPlannerProvider>
                <FocusTimerProvider>
                    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                        <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden relative">
                            <Suspense fallback={<PageLoader />}>
                                <Routes>
                                    <Route path="/" element={<Layout />}>
                                        <Route index element={<Navigate to="/dashboard" replace />} />
                                        <Route path="dashboard" element={<DashboardPage />} />
                                        <Route path="speaking-coach" element={<SpeakingCoachPage />} />
                                        <Route path="ielts-writing" element={<IeltsWritingPage />} />
                                        <Route path="ielts" element={<IeltsHubPage />} />
                                        <Route path="ielts/writing" element={<IeltsWritingPage />} />
                                        <Route path="ielts/speaking-mock" element={<IeltsSpeakingMockPage />} />
                                        <Route path="ielts/reading-listening" element={<IeltsReadingListeningMockPage />} />
                                        <Route path="jlpt" element={<JlptHubPage />} />
                                        <Route path="jlpt-speaking" element={<Navigate to="/speaking-coach?lang=ja" replace />} />
                                        <Route path="jlpt-writing" element={<JlptWritingPage />} />
                                        <Route path="jlpt/listening" element={<JlptListeningMockPage />} />
                                        <Route path="jlpt/grammar" element={<JlptGrammarQuizPage />} />
                                        <Route path="jlpt/mock-exam" element={<JlptMockExamPage />} />
                                        <Route path="calendar" element={<CalendarPage />} />
                                        <Route path="subjects" element={<SubjectsPage />} />
                                        <Route path="subjects/:id" element={<SubjectDetailPage />} />
                                        <Route path="goals" element={<GoalsPage />} />
                                        <Route path="tasks" element={<TasksPage />} />
                                        <Route path="focus" element={<FocusPage />} />
                                        <Route path="notes" element={<NotesPage />} />
                                        <Route path="notes/:id" element={<NoteEditorPage />} />
                                        <Route path="study-notes" element={<StudyNotesPage />} />
                                        <Route path="ai" element={<AIAssistantPage />} />
                                        <Route path="flashcards" element={<DecksPage />} />
                                        <Route path="flashcards/new" element={<FlashcardForm />} />
                                        <Route path="flashcards/study/:subjectId" element={<StudyModePage />} />
                                        <Route path="progress" element={<ProgressPage />} />
                                        <Route path="community" element={<CommunityPage />} />
                                        <Route path="cv-creator" element={<CVCreatorTab />} />
                                        <Route path="room/:roomId" element={<StudyRoomPage />} />
                                        <Route path="settings" element={<SettingsPage />} />
                                        <Route path="admin" element={<AdminDashboardPage />} />
                                    </Route>
                                </Routes>
                            </Suspense>
                            <GlobalAudioPlayer />
                            <OnboardingTour />
                            
                            {/* PWA Prompts */}
                            <ReloadPrompt />
                            <InstallPrompt />
                            
                            <OfflineIndicator />
                            <Toaster />
                        </div>
                    </BrowserRouter>
                </FocusTimerProvider>
            </StudyPlannerProvider>
        </ErrorBoundary>
    );
};

export default App;
