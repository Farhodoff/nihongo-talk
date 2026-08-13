import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy load auth related pages
const AuthPage = lazy(() => import('../pages/AuthPage'));
const LandingPage = lazy(() => import('../pages/LandingPage'));

/**
 * Router used when the user is not authenticated.
 * It isolates the unauthenticated routes from the main application router.
 */
export const UnauthRouter: React.FC = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default UnauthRouter;
