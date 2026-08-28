import { Loader2, Lock, Mail, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { supabase } from '../lib/supabase';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal';
import { motion } from 'framer-motion';

const AuthPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const isRegisterPath = location.pathname === '/register' || 
                           location.pathname === '/signup' || 
                           searchParams.get('mode') === 'register' || 
                           searchParams.get('mode') === 'signup';

    const [isLogin, setIsLogin] = useState(() => !isRegisterPath);
    const [isResetPassword, setIsResetPassword] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.location.pathname.includes('reset-password') || 
                   window.location.hash.includes('type=recovery') ||
                   window.location.search.includes('type=recovery');
        }
        return false;
    });

    useEffect(() => {
        if (isRegisterPath) {
            setIsLogin(false);
        } else if (location.pathname === '/login' || searchParams.get('mode') === 'login') {
            setIsLogin(true);
        }

        if (location.pathname.includes('reset-password') || 
            window.location.hash.includes('type=recovery') || 
            window.location.search.includes('type=recovery')) {
            setIsResetPassword(true);
        }
    }, [location.pathname, searchParams, isRegisterPath]);

    const [resetSuccess, setResetSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Parolni ko'rsatish/yashirish uchun state
    const [showPassword, setShowPassword] = useState(false);

    // Forgot password modal state
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isResetPassword) {
                const { error: resetErr } = await supabase.auth.updateUser({
                    password,
                });
                if (resetErr) throw resetErr;
                setResetSuccess(true);
                return;
            }

            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
            } else {
                const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: window.location.origin,
                        data: {
                            full_name: fullName,
                            avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(fullName || email)}`,
                        },
                    },
                });
                if (signUpError) throw signUpError;

                // Agar Supabase auto-confirm yoqilgan bo'lsa yoki sessiya qaytsa, to'g'ridan-to'g'ri tizimga kiramiz
                if (signUpData?.session) {
                    navigate('/');
                    return;
                }

                // Avtomatik kirishga urinish
                try {
                    const { data: loginData, error: loginErr } = await supabase.auth.signInWithPassword({
                        email,
                        password,
                    });
                    if (!loginErr && loginData?.session) {
                        navigate('/');
                        return;
                    }
                } catch {
                    // Supabase email confirm kutilayotgan holat
                }

                setIsRegistered(true);
            }
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'Xatolik yuz berdi');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-md w-full glass shadow-2xl rounded-3xl p-8 border border-white/20 relative z-10"
            >
                {resetSuccess ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-6"
                    >
                        <div className="w-20 h-20 mx-auto bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                            <Lock size={40} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-4">Parol yangilandi!</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Yangi parolingiz muvaffaqiyatli saqlandi. Endi yangi parol bilan tizimga kirishingiz mumkin.
                        </p>
                        <Button 
                            onClick={() => {
                                setResetSuccess(false);
                                setIsResetPassword(false);
                                setIsLogin(true);
                                navigate('/auth');
                            }} 
                            size="lg" 
                            className="w-full rounded-xl"
                        >
                            Kirish sahifasiga o'tish
                        </Button>
                    </motion.div>
                ) : isRegistered ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-6"
                    >
                        <div className="w-20 h-20 mx-auto bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                            <Mail size={40} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground mb-4">Emailingizni tekshiring!</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Biz <b>{email}</b> manziliga tasdiqlash xatini yubordik. 
                            Akkauntingizni faollashtirish uchun xatdagi link ustiga bosing va tizimga kiring.
                        </p>
                        <Button 
                            onClick={() => {
                                setIsRegistered(false);
                                setIsLogin(true);
                            }} 
                            size="lg" 
                            className="w-full rounded-xl"
                        >
                            Kirish sahifasiga qaytish
                        </Button>
                    </motion.div>
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-semibold mb-4 transition-colors"
                        >
                            <ArrowLeft size={14} />
                            <span>Bosh sahifaga qaytish</span>
                        </button>

                        <div className="text-center mb-8">
                            <div className="inline-block p-3 rounded-2xl bg-primary/10 text-primary mb-4 animate-bounce">
                                <span className="text-4xl">🎓</span>
                            </div>
                            <h1 className="text-4xl font-extrabold text-foreground mb-2 tracking-tight">
                                {isResetPassword ? "Yangi parol o'rnatish" : (isLogin ? 'Xush kelibsiz' : "Ro'yxatdan o'tish")}
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                                {isResetPassword
                                    ? "Akkauntingiz uchun yangi xavfsiz parol kiriting."
                                    : (isLogin ? 'O\'quv rejangizga kirish uchun ma\'lumotlaringizni kiriting.' : 'Jamoaga qo\'shiling va bilim cho\'qqilarini zabt eting.')}
                            </p>
                        </div>

                        {error && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-4 p-3 bg-destructive/10 text-destructive rounded-lg text-sm flex items-center">
                                <span className="mr-2">⚠️</span> {error}
                            </motion.div>
                        )}

                        <form onSubmit={handleAuth} className="space-y-4">
                            {!isLogin && !isResetPassword && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                    <Label className="block text-sm font-medium mb-1">To'liq ism</Label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="pl-10 h-12 rounded-xl bg-background/50 border-white/20 dark:border-gray-700/50 backdrop-blur-sm"
                                            placeholder="Ism Familiya"
                                            required
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {!isResetPassword && (
                                <div>
                                    <Label className="block text-sm font-medium mb-1">Email</Label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                            className="pl-10 h-12 rounded-xl bg-background/50 border-white/20 dark:border-gray-700/50 backdrop-blur-sm"
                                            placeholder="siz@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <Label className="block text-sm font-medium mb-1">
                                    {isResetPassword ? 'Yangi parol' : 'Parol'}
                                </Label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete={isLogin && !isResetPassword ? "current-password" : "new-password"}
                                        className="pl-10 pr-12 h-12 rounded-xl bg-background/50 border-white/20 dark:border-gray-700/50 backdrop-blur-sm"
                                        placeholder="••••••••"
                                        required
                                        minLength={6}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {isLogin && !isResetPassword && (
                                <div className="text-right">
                                    <button
                                        type="button"
                                        onClick={() => setShowForgotPassword(true)}
                                        className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                    >
                                        Parolni unutdingizmi?
                                    </button>
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full mt-6 rounded-xl shadow-lg shadow-primary/30" disabled={loading}>
                                {loading ? <Loader2 className="animate-spin mr-2" /> : (isResetPassword ? 'Parolni yangilash' : (isLogin ? 'Kirish' : 'Ro\'yxatdan o\'tish'))}
                            </Button>
                        </form>

                        {!isResetPassword && (
                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => {
                                        setIsLogin(!isLogin);
                                        setError('');
                                    }}
                                    className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                >
                                    {isLogin ? "Akkauntingiz yo'qmi? Ro'yxatdan o'tish" : 'Akkauntingiz bormi? Kirish'}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </motion.div>

            {/* Forgot Password Modal */}
            <ForgotPasswordModal
                isOpen={showForgotPassword}
                onClose={() => setShowForgotPassword(false)}
            />
        </div>
    );
};

export default AuthPage;