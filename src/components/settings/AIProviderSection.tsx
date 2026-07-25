import React, { useState, useEffect } from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Button } from '../ui/Button';
import { AIProvider } from '../../utils/ai';
import { isAdminEmail } from '../../utils/admin';
import { ShieldCheck } from 'lucide-react';
import { toast } from '../../hooks/use-toast';

const AIProviderSection: React.FC = () => {
    const { user, settings, updateSettings } = useStudyData();
    const isAdmin = isAdminEmail(user?.email);

    const [aiModel, setAiModel] = useState<AIProvider>((settings.aiModel as AIProvider) || 'gemini');
    const [googleKey, setGoogleKey] = useState(settings.googleApiKey || '');
    const [deepseekKey, setDeepseekKey] = useState(settings.deepseekApiKey || '');
    const [deepseekModel, setDeepseekModel] = useState<'deepseek-chat' | 'deepseek-reasoner'>(settings.deepseekModel || 'deepseek-chat');
    const [deepseekThinkingMode, setDeepseekThinkingMode] = useState(settings.deepseekThinkingMode || false);
    const [ollamaUrl, setOllamaUrl] = useState(settings.ollamaUrl || 'http://localhost:11434');
    const [ollamaModel, setOllamaModel] = useState(settings.ollamaModel || 'llama3.2');
    const [availableOllamaModels, setAvailableOllamaModels] = useState<string[]>([]);
    const [isFetchingModels, setIsFetchingModels] = useState(false);
    
    // Voice Coach Settings
    const [openAIApiKey, setOpenAIApiKey] = useState(settings.openAIApiKey || '');
    const [coachVoice, setCoachVoice] = useState<'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer'>(settings.coachVoice || 'alloy');
    const [coachAiModel, setCoachAiModel] = useState<AIProvider>((settings.coachAiModel as AIProvider) || 'gemini');
    const [coachApiKey, setCoachApiKey] = useState(settings.coachApiKey || '');

    useEffect(() => {
        if (aiModel === 'ollama' && ollamaUrl) {
            setIsFetchingModels(true);
            fetch(`${ollamaUrl}/api/tags`)
                .then(res => res.json())
                .then(data => {
                    if (data && data.models) {
                        const models = data.models.map((m: any) => m.name);
                        setAvailableOllamaModels(models);
                        if (models.length > 0 && !models.includes(ollamaModel)) {
                            setOllamaModel(models[0]);
                        }
                    }
                })
                .catch(err => {
                    console.error("Failed to fetch ollama models", err);
                    setAvailableOllamaModels([]);
                })
                .finally(() => setIsFetchingModels(false));
        }
    }, [aiModel, ollamaUrl]);

    const [isSaved, setIsSaved] = useState(false);

    const handleSave = async () => {
        await updateSettings({
            aiModel: aiModel as any,
            googleApiKey: googleKey,
            deepseekApiKey: deepseekKey,
            deepseekModel: deepseekModel,
            deepseekThinkingMode: deepseekThinkingMode,
            ollamaUrl: ollamaUrl,
            ollamaModel: ollamaModel,
            openAIApiKey: openAIApiKey,
            coachVoice: coachVoice as any,
            coachAiModel: coachAiModel,
            coachApiKey: coachApiKey,
        });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2500);
        toast({ title: '✅ AI Sozlamalari Saqlandi', description: 'Barcha API kalit va model sozlamalari muvaffaqiyatli saqlandi.' });
    };

    if (!isAdmin) {
        return (
            <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden mb-6 p-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl text-indigo-600 dark:text-indigo-400 shrink-0">
                        <ShieldCheck size={28} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                            🤖 AI va Neyrotarmoq Integratsiyasi
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            API kalitlar va neyrotarmoq sozlamalari admin tomonidan markazlashtirilgan holda boshqariladi.
                            Sizning obunangiz doirasida barcha AI xizmatlari avtomatik sozlangan va foydalanishga tayyor.
                        </p>
                        <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>AI Xizmatlari Faol (DeepSeek & Gemini Connected)</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm flex justify-between items-center">
                <span>🤖 AI MODELLAR (NEYROTARMOQLAR)</span>
            </div>
            
            <div className="p-4 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Asosiy AI Modelni Tanlang
                    </label>
                    <select
                        value={aiModel}
                        onChange={(e) => setAiModel(e.target.value as AIProvider)}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="gemini">Google Gemini (Bepul limiti bor, Tez)</option>
                        <option value="deepseek">DeepSeek (Arzon, Sifatli, Dasturlashga zo'r)</option>
                        <option value="ollama">Ollama (Local, Mutlaqo bepul, Internet kerak emas)</option>
                    </select>
                </div>

                {aiModel === 'gemini' && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Google Gemini API Key
                        </label>
                        <input
                            type="password"
                            value={googleKey}
                            onChange={(e) => setGoogleKey(e.target.value)}
                            placeholder="AI Studio'dan olingan kalit..."
                            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <p className="text-xs text-gray-400">
                            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">Kalit olish.</a>
                        </p>
                    </div>
                )}

                {aiModel === 'deepseek' && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            DeepSeek API Key
                        </label>
                        <input
                            type="password"
                            value={deepseekKey}
                            onChange={(e) => setDeepseekKey(e.target.value)}
                            placeholder="DeepSeek platformasidan olingan kalit..."
                            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <p className="text-xs text-gray-400">
                            <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">Kalit olish.</a>
                        </p>
                        
                        <div className="pt-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                DeepSeek Modeli
                            </label>
                            <select
                                value={deepseekModel}
                                onChange={(e) => setDeepseekModel(e.target.value as any)}
                                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="deepseek-chat">DeepSeek-V3 (Chat - Tez va arzon)</option>
                                <option value="deepseek-reasoner">DeepSeek-R1 (Reasoner - Chuqur mulohazali)</option>
                            </select>
                        </div>
                        
                        <div className="pt-2 flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id="thinking-mode"
                                checked={deepseekThinkingMode}
                                onChange={(e) => setDeepseekThinkingMode(e.target.checked)}
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="thinking-mode" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Thinking Mode'ni yoqish (AI avval chuqur o'ylaydi)
                            </label>
                        </div>
                    </div>
                )}

                {aiModel === 'ollama' && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Ollama API URL (yoki Ngrok Manzil)
                            </label>
                            <input
                                type="text"
                                value={ollamaUrl}
                                onChange={(e) => setOllamaUrl(e.target.value)}
                                placeholder="Masalan: https://....ngrok-free.app yoki http://localhost:11434"
                                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between">
                                <span>Ollama Model Nomi</span>
                                {isFetchingModels && <span className="text-xs text-indigo-500 animate-pulse">Yuklanmoqda...</span>}
                            </label>
                            
                            {availableOllamaModels.length > 0 ? (
                                <select
                                    value={ollamaModel}
                                    onChange={(e) => setOllamaModel(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    {availableOllamaModels.map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            ) : (
                                <div>
                                    <input
                                        type="text"
                                        value={ollamaModel}
                                        onChange={(e) => setOllamaModel(e.target.value)}
                                        placeholder="Masalan: llama3.2, mistral, gemma2..."
                                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <p className="text-xs text-amber-500 mt-2">
                                        Modellar ro'yxatini yuklab bo'lmadi. Ollama ishlayotganiga (yoki OLLAMA_ORIGINS="*" sozlanganiga) ishonch hosil qiling.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                {/* Voice Coach Settings */}
                <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        🎙 Ovozli Murabbiy (Speaking Coach) Sozlamalari
                    </h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Coach uchun alohida matn/fikr yuritish modeli (AI Model)
                            </label>
                            <select
                                value={coachAiModel}
                                onChange={(e) => setCoachAiModel(e.target.value as AIProvider)}
                                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                            >
                                <option value="gemini">Google Gemini (Tavsiya etiladi)</option>
                                <option value="deepseek">DeepSeek</option>
                                <option value="ollama">Ollama (Local)</option>
                            </select>
                            
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Ushbu model uchun API Key (Faqat Coach uchun ishlaydi)
                            </label>
                            <input
                                type="password"
                                value={coachApiKey}
                                onChange={(e) => setCoachApiKey(e.target.value)}
                                placeholder="Alohida token (Agar bo'sh qoldirsangiz, asosiy model tokeni ishlatiladi)"
                                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        
                        <hr className="border-gray-200 dark:border-gray-700" />
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                OpenAI API Key (Haqiqiy inson ovozi uchun)
                            </label>
                            <input
                                type="password"
                                value={openAIApiKey}
                                onChange={(e) => setOpenAIApiKey(e.target.value)}
                                placeholder="sk-proj-..."
                                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <p className="text-xs text-gray-400 mt-1">
                                Agar buni kiritmasangiz, brauzerning oflayn (robotdek) ovozidan foydalaniladi.
                            </p>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Murabbiy Ovozi
                            </label>
                            <select
                                value={coachVoice}
                                onChange={(e) => setCoachVoice(e.target.value as any)}
                                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="alloy">Alloy (O'rta, neytral)</option>
                                <option value="echo">Echo (Erkak, xotirjam)</option>
                                <option value="fable">Fable (Erkak, inglizcha aksent)</option>
                                <option value="onyx">Onyx (Erkak, yo'g'on ovoz)</option>
                                <option value="nova">Nova (Ayol, g'ayratli)</option>
                                <option value="shimmer">Shimmer (Ayol, yumshoq)</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="pt-2">
                    <Button onClick={handleSave} className={`w-full transition-all ${isSaved ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}>
                        {isSaved ? '✅ AI Sozlamalari Saqlandi!' : "O'zgarishlarni Saqlash"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AIProviderSection;
