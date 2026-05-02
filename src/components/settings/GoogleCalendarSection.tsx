import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';

const GoogleCalendarSection: React.FC = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);

    useEffect(() => {
        // Tekshirish: Foydalanuvchi allaqachon Google bilan bog'langanmi?
        // Bu odatda session provider_token bor-yo'qligiga qarab aniqlanadi
        checkConnection();
    }, []);

    const checkConnection = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.provider_token) {
            setIsConnected(true);
        }
    };

    const handleConnect = async () => {
        setIsConnecting(true);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                    scopes: 'https://www.googleapis.com/auth/calendar.events'
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Google Calendar Connection Error:', error);
            alert('Google bilan bog\'lanishda xatolik yuz berdi.');
        } finally {
            setIsConnecting(false);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Google Calendar</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Vazifalarni kalendaringizga sinxronizatsiya qiling</p>
                    </div>
                </div>
                {isConnected && (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-full border border-green-100 dark:border-green-800">
                        <CheckCircle size={14} /> Bog'langan
                    </span>
                )}
            </div>

            <div className="space-y-4">
                {isConnected ? (
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                            <span className="flex items-center gap-2">
                                <RefreshCw size={16} className="text-blue-500" />
                                Avtomatik sinxronizatsiya faol
                            </span>
                        </div>
                        <Button
                            variant="secondary"
                            className="w-full flex items-center justify-center gap-2"
                            onClick={() => window.open('https://calendar.google.com', '_blank')}
                        >
                            <ExternalLink size={18} />
                            Google Calendar'ni ochish
                        </Button>
                    </div>
                ) : (
                    <div className="text-center py-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            Vazifa va tadbirlaringizni Google Kalendaringizda ko'rish uchun hisobingizni bog'lang.
                        </p>
                        <Button
                            onClick={handleConnect}
                            disabled={isConnecting}
                            className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 shadow-sm"
                        >
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                            {isConnecting ? 'Bog\'lanmoqda...' : 'Google bilan bog\'lash'}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoogleCalendarSection;
