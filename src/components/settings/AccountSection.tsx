import React from 'react';
import { Button } from '../ui/Button';
// import PasswordChangeSection from './PasswordChangeSection';
import { supabase } from '../../lib/supabase';

interface AccountSectionProps {
}

const AccountSection: React.FC<AccountSectionProps> = () => {
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

            {/* Password Change */}
            {/* <PasswordChangeSection /> */}

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
