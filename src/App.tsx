import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';
import Layout from './components/Layout';
import { StudyPlannerProvider } from './context/StudyPlannerContext';
import { supabase } from './lib/supabase';

// Lazy load all page components for better performance
const AuthPage = lazy(() => import('./pages/AuthPage'));
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

// Loading component
const PageLoader = () => (
    <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Yuklanmoqda...</p>
        </div>
    </div>
);

const App: React.FC = () => {
    const [session, setSession] = useState<any>(null);
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

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-500">Loading...</div>;

    if (!session) {
        return (
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="*" element={<AuthPage />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        );
    }

    return (
        <ErrorBoundary>
            <StudyPlannerProvider>
                <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden">
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<Navigate to="/dashboard" replace />} />
                                    <Route path="dashboard" element={<DashboardPage />} />
                                    <Route path="calendar" element={<CalendarPage />} />
                                    <Route path="subjects" element={<SubjectsPage />} />
                                    <Route path="subjects/:id" element={<SubjectDetailPage />} />
                                    <Route path="goals" element={<GoalsPage />} />
                                    <Route path="tasks" element={<TasksPage />} />
                                    <Route path="focus" element={<FocusPage />} />
                                    <Route path="notes" element={<NotesPage />} />
                                    <Route path="notes/:id" element={<NoteEditorPage />} />
                                    <Route path="study-notes" element={<StudyNotesPage />} />
                                    <Route path="flashcards" element={<DecksPage />} />
                                    <Route path="flashcards/new" element={<FlashcardForm />} />
                                    <Route path="flashcards/study/:subjectId" element={<StudyModePage />} />
                                    <Route path="progress" element={<ProgressPage />} />
                                    <Route path="community" element={<CommunityPage />} />
                                    <Route path="room/:roomId" element={<StudyRoomPage />} />
                                    <Route path="settings" element={<SettingsPage />} />
                                </Route>
                            </Routes>
                        </Suspense>
                        <GlobalAudioPlayer />
                    </div>
                </BrowserRouter>
            </StudyPlannerProvider>
        </ErrorBoundary>
    );
};

export default App;
