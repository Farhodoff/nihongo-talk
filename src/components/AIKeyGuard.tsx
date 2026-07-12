import React, { useState } from 'react';
import { isAIKeyConfigured, AIProvider } from '../utils/ai';
import { useStudyData } from '../context/StudyPlannerContext';
import { KeyRound, Sparkles, ExternalLink, Eye, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface AIKeyGuardProps {
    children: React.ReactNode;
}

/**
 * Wrapper component that blocks access to AI-powered pages
 * until the user has configured their own API key (BYOK model).
 */
const AIKeyGuard: React.FC<AIKeyGuardProps> = ({ children }) => {
    const { settings, updateSettings } = useStudyData();
    const [provider, setProvider] = useState<AIProvider>(
        (settings.aiModel as AIProvider) || 'gemini'
    );
    const [geminiKey, setGeminiKey] = useState(settings.googleApiKey || '');
    const [deepseekKey, setDeepseekKey] = useState(settings.deepseekApiKey || '');
    const [showKey, setShowKey] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    // Check if key is already configured
    if (isAIKeyConfigured()) {
        return <>{children}</>;
    }

    const handleSave = async () => {
        setSaving(true);
        await updateSettings({
            aiModel: provider as any,
            googleApiKey: provider === 'gemini' ? geminiKey : settings.googleApiKey,
            deepseekApiKey: provider === 'deepseek' ? deepseekKey : settings.deepseekApiKey,
        });
        setSaving(false);
        setSaved(true);
        // Small delay so user sees the checkmark, then component re-renders naturally
        setTimeout(() => setSaved(false), 1500);
    };

    const isKeyFilled = provider === 'gemini' ? geminiKey.trim().length > 10
        : provider === 'deepseek' ? deepseekKey.trim().length > 10
        : true; // ollama

    return (
        <div className="flex items-center justify-center min-h-[70vh] px-4 animate-in fade-in duration-500">
            <div className="w-full max-w-lg">
                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
                    {/* Glow */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-indigo-500 rounded-full blur-[100px] opacity-20" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-fuchsia-500 rounded-full blur-[100px] opacity-15" />

                    {/* Icon + Title */}
                    <div className="relative z-10 text-center space-y-3">
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                            <KeyRound size={32} className="text-indigo-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                            AI Limitingiz Tugadi <Sparkles size={20} className="text-fuchsia-400" />
                        </h2>
                        <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-4 mb-4">
                            <p className="text-sm text-fuchsia-200">
                                Kunlik bepul AI limitingiz tugadi! Cheksiz foydalanish uchun Admin (@fsoyilov) ga murojaat qiling va PRO tarifni oling.
                            </p>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
                            Yoki o'zingizning shaxsiy Google/DeepSeek API kalitingizni (BYOK) kiritsangiz bo'ladi.
                        </p>
                        <p className="text-sm">
                            <a href="/pricing" className="text-fuchsia-400 font-medium hover:text-fuchsia-300 underline underline-offset-2 flex items-center justify-center gap-1 transition-colors">
                                Tayyor Pro tariflarini ko'rish <ArrowRight size={14} />
                            </a>
                        </p>
                    </div>

                    {/* Provider Select */}
                    <div className="relative z-10 space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                AI Modelni Tanlang
                            </label>
                            <select
                                value={provider}
                                onChange={(e) => setProvider(e.target.value as AIProvider)}
                                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            >
                                <option value="gemini">Google Gemini (Bepul, Tez)</option>
                                <option value="deepseek">DeepSeek (Arzon, Sifatli)</option>
                                <option value="ollama">Ollama (Local, Kalitsiz)</option>
                            </select>
                        </div>

                        {/* Gemini Key Input */}
                        {provider === 'gemini' && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Google Gemini API Key
                                </label>
                                <div className="relative">
                                    <input
                                        type={showKey ? 'text' : 'password'}
                                        value={geminiKey}
                                        onChange={(e) => setGeminiKey(e.target.value)}
                                        placeholder="AIza..."
                                        className="w-full px-4 py-3 pr-12 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowKey(!showKey)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                    >
                                        {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                {/* Step-by-step guide */}
                                <div className="bg-indigo-500/5 border border-indigo-500/15 rounded-xl p-4 space-y-2.5 mt-3">
                                    <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Qanday olish mumkin:</p>
                                    <ol className="text-xs text-slate-400 space-y-1.5 list-decimal list-inside">
                                        <li>Google hisobingiz bilan kiring</li>
                                        <li>
                                            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer"
                                                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 inline-flex items-center gap-1">
                                                AI Studio <ExternalLink size={12} />
                                            </a>
                                            {' '}saytiga o'ting
                                        </li>
                                        <li>"Create API Key" tugmasini bosing</li>
                                        <li>Kalitni nusxalab, yuqoridagi maydonga joylang</li>
                                    </ol>
                                </div>
                            </div>
                        )}

                        {/* DeepSeek Key Input */}
                        {provider === 'deepseek' && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    DeepSeek API Key
                                </label>
                                <div className="relative">
                                    <input
                                        type={showKey ? 'text' : 'password'}
                                        value={deepseekKey}
                                        onChange={(e) => setDeepseekKey(e.target.value)}
                                        placeholder="sk-..."
                                        className="w-full px-4 py-3 pr-12 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowKey(!showKey)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                    >
                                        {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                <div className="bg-indigo-500/5 border border-indigo-500/15 rounded-xl p-4 space-y-2.5 mt-3">
                                    <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Qanday olish mumkin:</p>
                                    <ol className="text-xs text-slate-400 space-y-1.5 list-decimal list-inside">
                                        <li>
                                            <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noreferrer"
                                                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 inline-flex items-center gap-1">
                                                DeepSeek Platform <ExternalLink size={12} />
                                            </a>
                                            {' '}saytiga o'ting
                                        </li>
                                        <li>Ro'yxatdan o'ting va API Keys bo'limiga kiring</li>
                                        <li>"Create API Key" tugmasini bosing</li>
                                        <li>Kalitni nusxalab, yuqoridagi maydonga joylang</li>
                                    </ol>
                                </div>
                            </div>
                        )}

                        {/* Ollama - no key needed */}
                        {provider === 'ollama' && (
                            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                <p className="text-sm text-green-400 font-medium flex items-center gap-2">
                                    <CheckCircle2 size={16} /> Ollama uchun API kalit kerak emas!
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    Kompyuteringizda Ollama o'rnatilgan bo'lishi kerak. Sozlamalar sahifasida URL manzilini tekshiring.
                                </p>
                            </div>
                        )}

                        {/* Save Button */}
                        <Button
                            onClick={handleSave}
                            disabled={!isKeyFilled || saving}
                            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all border-none disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            {saved ? (
                                <span className="flex items-center justify-center gap-2">
                                    <CheckCircle2 size={18} /> Saqlandi!
                                </span>
                            ) : saving ? (
                                'Saqlanmoqda...'
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Saqlash va Davom Etish <ArrowRight size={18} />
                                </span>
                            )}
                        </Button>
                    </div>

                    {/* Footer note */}
                    <p className="relative z-10 text-center text-[11px] text-slate-600">
                        🔒 Kalitingiz faqat shu brauzerda saqlanadi. Serverga yuborilmaydi.
                    </p>
                </div>
            </div>
        </div>
    );
};

/**
 * Inline banner for pages that partially use AI (Dashboard, NoteEditor).
 * Shows a small reminder instead of blocking the entire page.
 */
export const AIKeyInlineBanner: React.FC = () => {
    if (isAIKeyConfigured()) return null;
    
    return (
        <div className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 text-sm">
            <KeyRound size={16} className="shrink-0" />
            <p>
                AI funksiyalar uchun API kalit kerak.{' '}
                <a href="/settings" className="underline underline-offset-2 font-semibold hover:text-amber-300 transition-colors">
                    Sozlamalar → AI bo'limida kiriting
                </a>
            </p>
        </div>
    );
};

export default AIKeyGuard;
