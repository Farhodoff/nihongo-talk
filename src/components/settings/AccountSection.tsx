import { useState } from 'react';
import { Button } from '../ui/Button';
import PasswordChangeSection from './PasswordChangeSection';
import { supabase } from '../../lib/supabase';

interface AccountSectionProps {
    apiKey: string;
    onSaveApiKey: (key: string) => Promise<void>;
}

const AccountSection: React.FC<AccountSectionProps> = ({ apiKey: initialApiKey, onSaveApiKey }) => {
    const [apiKey, setApiKey] = useState(initialApiKey);

    const handleSave = async () => {
        await onSaveApiKey(apiKey);
        alert("API Kalit Saqlandi! ✅");
    };

    const handleLogout = async () => {
        if (confirm('Tizimdan chiqishni xohlaysizmi?')) {
            try {
                await supabase.auth.signOut();
            } catch (e) {
                console.error("Sign out error", e);
            } finally {
                // Ensure local state is wiped even if server sign out fails
                localStorage.clear();
                window.location.href = '/';
            }
        }
    };

    return (
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm">
                HISOB SOZLAMALARI
            </div>

            {/* Google API Key */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Google Gemini API Key
                </label>
                <div className="flex gap-2">
                    <input
                        type="password"
                        placeholder="AI ishlatish uchun shaxsiy kalit..."
                        className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                    />
                    <Button onClick={handleSave}>
                        Saqlash
                    </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                    Shaxsiy API kalitingiz bo'lsa, AI funksiyalari (Fleshkarta, Reja) shaxsiy hisobingizdan foydalanadi va limitga tushmaydi.
                    <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-indigo-500 ml-1 hover:underline">Kalit olish.</a>
                </p>
            </div>

            {/* Password Change */}
            <PasswordChangeSection />

            <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <Button
                    variant="destructive"
                    onClick={handleLogout}
                    className="w-full"
                >
                    <span className="flex items-center justify-center gap-2">
                        🚪 Tizimdan Chiqish
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default AccountSection;
