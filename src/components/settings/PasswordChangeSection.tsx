import { Key } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';

const PasswordChangeSection = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        if (password.length < 6) return alert("Parol kamida 6 belgidan iborat bo'lishi kerak.");
        setLoading(true);
        const { error } = await supabase.auth.updateUser({ password: password });
        if (error) alert("Xatolik: " + error.message);
        else {
            alert("Parol muvaffaqiyatli yangilandi!");
            setPassword('');
        }
        setLoading(false);
    };

    return (
        <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-1">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                    <Key size={20} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">Parolni O'zgartirish</span>
            </div>
            <div className="flex gap-2">
                <input
                    type="password"
                    placeholder="Yangi parol..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Button onClick={handleUpdate} disabled={loading}>{loading ? 'Saqlanmoqda...' : 'Saqlash'}</Button>
            </div>
        </div>
    );
};

export default PasswordChangeSection;
