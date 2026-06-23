import { Loader2, Lock, Mail, User, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { supabase } from '../lib/supabase';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal';
import { motion } from 'framer-motion';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Parolni ko'rsatish/yashirish uchun state
    const [showPassword, setShowPassword] = useState(false);

    // Forgot password modal state
    const [isRegistered, setIsRegistered] = useState(false);

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
                {isRegistered ? (
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
                        <div className="text-center mb-8">
                            <div className="inline-block p-3 rounded-2xl bg-primary/10 text-primary mb-4 animate-bounce">
                                <span className="text-4xl">🎓</span>
                            </div>
                            <h1 className="text-4xl font-extrabold text-foreground mb-2 tracking-tight">
                                {isLogin ? 'Xush kelibsiz' : "Ro'yxatdan o'tish"}
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                                {isLogin ? 'O\'quv rejangizga kirish uchun ma\'lumotlaringizni kiriting.' : 'Jamoaga qo\'shiling va bilim cho\'qqilarini zabt eting.'}
                            </p>
                        </div>

                        {error && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-4 p-3 bg-destructive/10 text-destructive rounded-lg text-sm flex items-center">
                                <span className="mr-2">⚠️</span> {error}
                            </motion.div>
                        )}

                        <form onSubmit={handleAuth} className="space-y-4">
                            {!isLogin && (
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

                            <div>
                                <Label className="block text-sm font-medium mb-1">Parol</Label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete={isLogin ? "current-password" : "new-password"}
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

                            {isLogin && (
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
                                {loading ? <Loader2 className="animate-spin mr-2" /> : (isLogin ? 'Kirish' : 'Ro\'yxatdan o\'tish')}
                            </Button>
                        </form>

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