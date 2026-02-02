import { Loader2, Lock, Mail, User, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Parolni ko'rsatish/yashirish uchun state
    const [showPassword, setShowPassword] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                            avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${fullName}`,
                        },
                    },
                });
                if (error) throw error;
                alert('Muvaffaqiyatli! Iltimos, tasdiqlash linki uchun emailingizni tekshiring.');
            }
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'Xatolik yuz berdi');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white/90 dark:bg-[#1f2937]/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                    <div className="inline-block p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-4 animate-bounce">
                        <span className="text-4xl">🎓</span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                        {isLogin ? 'Xush kelibsiz' : "Ro'yxatdan o'tish"}
                    </h1>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                        {isLogin ? 'O\'quv rejangizga kirish uchun ma\'lumotlaringizni kiriting.' : 'Jamoaga qo\'shiling va bilim cho\'qqilarini zabt eting.'}
                    </p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center">
                        <span className="mr-2">⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleAuth} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">To'liq ism</label>
                            <div className="relative">
                                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="Ism Familiya"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="siz@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Parol</label>
                        <div className="relative">
                            <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"} // Dinamik o'zgarish
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="••••••••"
                                required
                                minLength={6}
                            />
                            {/* Ko'zcha tugmasi */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors focus:outline-none"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <Button type="submit" className="w-full py-3 mt-4" disabled={loading}>
                        {loading ? <Loader2 className="animate-spin mr-2" /> : (isLogin ? 'Kirish' : 'Ro\'yxatdan o\'tish')}
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                        }}
                        className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                        {isLogin ? "Akkauntingiz yo'qmi? Ro'yxatdan o'tish" : 'Akkauntingiz bormi? Kirish'}
                    </button>
                    <div className="mt-4 text-xs text-gray-400">
                        Supabase tomonidan quvvatlanadi ⚡
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;