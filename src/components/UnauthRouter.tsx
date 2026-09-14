import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { StudyPlannerProvider } from '../context/StudyPlannerContext';
import { lazyWithRetry } from '../utils/lazyRetry';

// Lazy load auth related and public pages
const AuthPage = lazyWithRetry(() => import('../pages/AuthPage'));
const LandingPage = lazyWithRetry(() => import('../pages/LandingPage'));
const DeveloperApiPage = lazyWithRetry(() => import('../pages/DeveloperApiPage'));
const PricingPage = lazyWithRetry(() =>
  import('../pages/PricingPage').then((m) => ({ default: m.PricingPage })),
);
const JlptHubPage = lazyWithRetry(() => import('../pages/JlptHubPage'));
const SpeakingCoachPage = lazyWithRetry(() => import('../pages/SpeakingCoachPage'));

/**
 * Router used when the user is not authenticated.
 * It provides public access to indexable educational pages for search engines and guests.
 */
export const UnauthRouter: React.FC = () => (
  <StudyPlannerProvider>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center bg-background text-foreground">
            Yuklanmoqda...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/twa" element={<Navigate to="/jlpt" replace />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/jlpt" element={<JlptHubPage />} />
          <Route path="/speaking" element={<SpeakingCoachPage />} />
          <Route path="/speaking-coach" element={<SpeakingCoachPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/reset-password" element={<AuthPage />} />
          <Route path="/reset-password" element={<AuthPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/admin/login" element={<AuthPage />} />
          <Route path="/admin" element={<AuthPage />} />
          <Route path="/developers" element={<DeveloperApiPage />} />
          <Route path="/api-docs" element={<Navigate to="/developers" replace />} />
          <Route path="/dashboard" element={<Navigate to="/auth?redirect=/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StudyPlannerProvider>
);

export default UnauthRouter;
