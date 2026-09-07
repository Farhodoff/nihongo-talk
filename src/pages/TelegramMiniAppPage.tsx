import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { initTelegramAuth } from '../utils/telegramAuth';

/**
 * TelegramMiniAppPage:
 * Seamlessly authenticates Telegram WebApp users and immediately routes
 * them to the actual, full Nihongo Talk application (/jlpt).
 */
export const TelegramMiniAppPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    initTelegramAuth();
    navigate('/jlpt', { replace: true });
  }, [navigate]);

  return <Navigate to="/jlpt" replace />;
};

export default TelegramMiniAppPage;
