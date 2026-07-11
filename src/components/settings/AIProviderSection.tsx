import React, { useState } from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Button } from '../ui/Button';
import { AIProvider } from '../../utils/ai';

const AIProviderSection: React.FC = () => {
    const { settings, updateSettings } = useStudyData();
    const [aiModel, setAiModel] = useState<AIProvider>((settings.aiModel as AIProvider) || 'gemini');
    const [googleKey, setGoogleKey] = useState(settings.googleApiKey || '');
    const [deepseekKey, setDeepseekKey] = useState(settings.deepseekApiKey || '');
    const [ollamaUrl, setOllamaUrl] = useState(settings.ollamaUrl || 'http://localhost:11434');
    const [ollamaModel, setOllamaModel] = useState(settings.ollamaModel || 'llama3.2');

    const handleSave = async () => {
        await updateSettings({
            aiModel: aiModel as any,
            googleApiKey: googleKey,
            deepseekApiKey: deepseekKey,
            ollamaUrl: ollamaUrl,
            ollamaModel: ollamaModel,
        });
        alert('AI sozlamalari saqlandi! ✅');
    };

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
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Ollama Model Nomi
                            </label>
                            <input
                                type="text"
                                value={ollamaModel}
                                onChange={(e) => setOllamaModel(e.target.value)}
                                placeholder="Masalan: llama3.2, mistral, gemma2..."
                                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                )}
                
                <div className="pt-2">
                    <Button onClick={handleSave} className="w-full">
                        O'zgarishlarni Saqlash
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AIProviderSection;
