import { Loader2, Lock, Mail, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal';
import { AppLogo } from '../components/AppLogo';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Password visibility toggles
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Forgot password modal state
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!isLogin && !isResetPassword) {
            if (password !== confirmPassword) {
                setError("Kiritilgan parollar bir-biriga mos kelmadi");
                return;
            }
            if (!agreedToTerms) {
                setError("Foydalanish shartlari va Maxfiylik siyosatiga rozilik bildiring");
                return;
            }
        }

        setLoading(true);

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

                if (signUpData?.session) {
                    navigate('/');
                    return;
                }

                // Try automatic sign in
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
                    // Supabase email confirm flow
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
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden font-sans select-none">
            {/* Ambient Sumi-e & Hanko Background Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-[130px] pointer-events-none" />

            {/* Auth Card Container */}
            <motion.div 
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full max-w-[490px] bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative z-10"
            >
                {resetSuccess ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-6 space-y-4"
                    >
                        <div className="w-16 h-16 mx-auto bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/10">
                            <Lock size={32} />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-foreground tracking-tight">Parol yangilandi!</h2>
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                            Yangi parolingiz muvaffaqiyatli saqlandi. Endi yangi parol bilan tizimga kirishingiz mumkin.
                        </p>
                        <div className="pt-4">
                            <button 
                                onClick={() => {
                                    setResetSuccess(false);
                                    setIsResetPassword(false);
                                    setIsLogin(true);
                                    navigate('/login', { replace: true });
                                }} 
                                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-md shadow-primary/25 transition-all flex items-center justify-center text-sm cursor-pointer"
                            >
                                Kirish sahifasiga o'tish
                            </button>
                        </div>
                    </motion.div>
                ) : isRegistered ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-6 space-y-4"
                    >
                        <div className="w-16 h-16 mx-auto bg-[#C9A961]/15 text-[#C9A961] border border-[#C9A961]/30 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#C9A961]/10">
                            <Mail size={32} />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-foreground tracking-tight">Emailingizni tekshiring!</h2>
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                            Biz <span className="text-foreground font-semibold">{email}</span> manziliga tasdiqlash xatini yubordik. 
                            Akkauntingizni faollashtirish uchun xatdagi link ustiga bosing va tizimga kiring.
                        </p>
                        <div className="pt-4">
                            <button 
                                onClick={() => {
                                    setIsRegistered(false);
                                    setIsLogin(true);
                                    navigate('/login', { replace: true });
                                }} 
                                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-md shadow-primary/25 transition-all flex items-center justify-center text-sm cursor-pointer"
                            >
                                Kirish sahifasiga qaytish
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <>
                        {/* Top Back Link */}
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors group cursor-pointer"
                        >
                            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
                            <span>Bosh sahifaga qaytish</span>
                        </button>

                        {/* Brand Logo & Tagline */}
                        <div className="text-center mb-6 flex flex-col items-center">
                            {/* Torii Gate Brand Logo */}
                            <div className="mb-4 cursor-pointer" onClick={() => navigate('/')}>
                                <AppLogo size="lg" />
                            </div>

                            {/* Main Mode Heading */}
                            <div className="mt-2 space-y-1">
                                <h1 className="text-2xl sm:text-[28px] font-display font-black text-foreground tracking-tight">
                                    {isResetPassword 
                                        ? "Yangi parol o'rnatish" 
                                        : (isLogin ? 'Hisobingizga kiring' : "Ro'yxatdan o'tish")}
                                </h1>
                                <p className="text-xs sm:text-[13px] text-muted-foreground max-w-xs mx-auto leading-relaxed">
                                    {isResetPassword
                                        ? "Akkauntingiz uchun yangi xavfsiz parol kiriting."
                                        : (isLogin 
                                            ? "O'quv jarayoningizni davom ettirish uchun hisobingizga kiring" 
                                            : "Yangi hisob yarating va bepul o'rganishni boshlang")}
                                </p>
                            </div>
                        </div>

                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0, y: -6 }} 
                                    animate={{ opacity: 1, height: 'auto', y: 0 }} 
                                    exit={{ opacity: 0, height: 0, y: -6 }}
                                    className="mb-4 p-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl text-xs flex items-center gap-2"
                                >
                                    <span className="shrink-0 text-sm">⚠️</span>
                                    <span className="leading-snug">{error}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Form */}
                        <form onSubmit={handleAuth} className="space-y-4">
                            {/* Full Name field (Register only) */}
                            {!isLogin && !isResetPassword && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -8 }} 
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-1.5"
                                >
                                    <label className="block text-xs font-semibold text-foreground">
                                        To'liq ism
                                    </label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                                        <input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Ism Familiyangizni kiriting"
                                            required
                                            className="w-full h-12 rounded-xl bg-background border border-border hover:border-border/80 focus:border-primary text-foreground placeholder:text-muted-foreground/60 pl-11 pr-4 outline-none text-sm transition-all shadow-xs"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Email field */}
                            {!isResetPassword && (
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-semibold text-foreground">
                                        Email manzil
                                    </label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email manzilingizni kiriting"
                                            autoComplete="email"
                                            required
                                            className="w-full h-12 rounded-xl bg-background border border-border hover:border-border/80 focus:border-primary text-foreground placeholder:text-muted-foreground/60 pl-11 pr-4 outline-none text-sm transition-all shadow-xs"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Password field */}
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-foreground">
                                    {isResetPassword ? 'Yangi parol' : 'Parol'}
                                </label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder={isLogin || isResetPassword ? "Parolingizni kiriting" : "Kamida 6 ta belgidan iborat bo'lsin"}
                                        autoComplete={isLogin && !isResetPassword ? "current-password" : "new-password"}
                                        required
                                        minLength={6}
                                        className="w-full h-12 rounded-xl bg-background border border-border hover:border-border/80 focus:border-primary text-foreground placeholder:text-muted-foreground/60 pl-11 pr-11 outline-none text-sm transition-all shadow-xs"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                        tabIndex={-1}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password field (Register only) */}
                            {!isLogin && !isResetPassword && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -8 }} 
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-1.5"
                                >
                                    <label className="block text-xs font-semibold text-foreground">
                                        Parolni tasdiqlang
                                    </label>
                                    <div className="relative">
                                        <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Parolingizni qayta kiriting"
                                            autoComplete="new-password"
                                            required
                                            minLength={6}
                                            className="w-full h-12 rounded-xl bg-background border border-border hover:border-border/80 focus:border-primary text-foreground placeholder:text-muted-foreground/60 pl-11 pr-11 outline-none text-sm transition-all shadow-xs"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                            tabIndex={-1}
                                        >
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Terms & Privacy checkbox (Register only) */}
                            {!isLogin && !isResetPassword && (
                                <div className="flex items-start gap-2.5 pt-1">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                        className="mt-0.5 w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer accent-primary"
                                    />
                                    <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none">
                                        Men <span className="text-primary hover:underline">Foydalanish shartlari</span> va <span className="text-primary hover:underline">Maxfiylik siyosati</span> bilan tanishib chiqdim va roziman
                                    </label>
                                </div>
                            )}

                            {/* Forgot Password Link (Login only) */}
                            {isLogin && !isResetPassword && (
                                <div className="text-right pt-0.5">
                                    <button
                                        type="button"
                                        onClick={() => setShowForgotPassword(true)}
                                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                    >
                                        Parolni unutdingizmi?
                                    </button>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-12 rounded-xl font-bold text-sm text-primary-foreground bg-primary hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {loading ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : (
                                        isResetPassword 
                                            ? 'Parolni yangilash' 
                                            : (isLogin ? 'Kirish' : "Ro'yxatdan o'tish")
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Bottom Switch Link */}
                        {!isResetPassword && (
                            <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm">
                                <span className="h-[1px] w-6 sm:w-10 bg-border" />
                                <span className="text-muted-foreground">
                                    {isLogin ? "Akkauntingiz yo'qmi?" : "Akkauntingiz bormi?"}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const nextState = !isLogin;
                                        setIsLogin(nextState);
                                        setError('');
                                        navigate(nextState ? '/login' : '/register', { replace: true });
                                    }}
                                    className="text-primary hover:underline font-bold transition-colors cursor-pointer"
                                >
                                    {isLogin ? "Ro'yxatdan o'tish" : "Kirish"}
                                </button>
                                <span className="h-[1px] w-6 sm:w-10 bg-border" />
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