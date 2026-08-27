import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy load auth related and public pages
const AuthPage = lazy(() => import('../pages/AuthPage'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const DeveloperApiPage = lazy(() => import('../pages/DeveloperApiPage'));
const PricingPage = lazy(() => import('../pages/PricingPage').then(m => ({ default: m.PricingPage })));

/**
 * Router used when the user is not authenticated.
 * It isolates the unauthenticated routes from the main application router.
 */
export const UnauthRouter: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Yuklanmoqda...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/reset-password" element={<AuthPage />} />
        <Route path="/reset-password" element={<AuthPage />} />
        <Route path="/login" element={<Navigate to="/auth" replace />} />
        <Route path="/register" element={<Navigate to="/auth" replace />} />
        <Route path="/admin/login" element={<Navigate to="/auth" replace />} />
        <Route path="/admin" element={<AuthPage />} />
        <Route path="/developers" element={<DeveloperApiPage />} />
        <Route path="/api-docs" element={<Navigate to="/developers" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default UnauthRouter;
