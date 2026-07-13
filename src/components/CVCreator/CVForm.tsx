import React, { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';

interface CVFormProps {
    onSubmit: (data: Record<string, string>, language: 'en' | 'ja') => void;
    isGenerating: boolean;
}

export const CVForm: React.FC<CVFormProps> = ({ onSubmit, isGenerating }) => {
    const [language, setLanguage] = useState<'en' | 'ja'>('en');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
        rawExperience: '',
        rawEducation: '',
        certificates: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData, language);
    };

    const isFormValid = formData.fullName && formData.rawExperience;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Rezyume Ma'lumotlari</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    O'zingiz haqingizda erkin tilda (o'zbek, rus yoki ingliz tilida) qisqacha ma'lumot bering. AI uni professional {language === 'ja' ? "Yapon (Rirekisho/Shokumukeirekisho)" : "Ingliz"} formatiga o'tkazib beradi.
                </p>
                
                <div className="mt-4 flex gap-2">
                    <button
                        type="button"
                        onClick={() => setLanguage('en')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${language === 'en' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}
                    >
                        🇺🇸 English CV
                    </button>
                    <button
                        type="button"
                        onClick={() => setLanguage('ja')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${language === 'ja' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}
                    >
                        🇯🇵 日本語 CV
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Personal Info */}
                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Shaxsiy Ma'lumotlar</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">To'liq ism *</label>
                            <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Masalan: Alisher Navoiy" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Pochta (Email)</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="email@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Telefon raqam</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+998 90 123 45 67" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Yashash manzili</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Tashkent, Uzbekistan" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">LinkedIn URL</label>
                            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://linkedin.com/in/..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">GitHub URL</label>
                            <input type="url" name="github" value={formData.github} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://github.com/..." />
                        </div>
                    </div>
                </div>

                <hr className="border-slate-200 dark:border-slate-700" />

                {/* Experience & Skills */}
                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Ish Tajribasi va Skillar *</h4>
                    <p className="text-xs text-slate-500 mb-3">Erkin tilda ishlagan joylaringiz, qaysi texnologiyalardan foydalanganingiz va nimalar qilganingizni yozing.</p>
                    <textarea 
                        required
                        name="rawExperience" 
                        value={formData.rawExperience} 
                        onChange={handleChange} 
                        rows={6}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-y" 
                        placeholder="Masalan: 2021-yildan beri Epam kompaniyasida Frontend dasturchi bo'lib ishlayman. React va Node.js ni yaxshi bilaman. Asosan payment tizimlarini qildik..." 
                    />
                </div>

                {/* Education */}
                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Ta'lim (Universitet / Kurslar)</h4>
                    <textarea 
                        name="rawEducation" 
                        value={formData.rawEducation} 
                        onChange={handleChange} 
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-y" 
                        placeholder="Masalan: 2018-2022 TATU ni Dasturiy Injiniring yo'nalishida tugatganman." 
                    />
                </div>

                {/* Certificates */}
                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Sertifikatlar va Yutuqlar</h4>
                    <textarea 
                        name="certificates" 
                        value={formData.certificates} 
                        onChange={handleChange} 
                        rows={2}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-y" 
                        placeholder="Masalan: IELTS 7.0, AWS Certified Developer Associate, JLPT N3" 
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={!isFormValid || isGenerating}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl font-medium transition-colors shadow-sm"
                    >
                        {isGenerating ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                AI Rezyume yaratmoqda (15-20 soniya kutamiz)...
                            </>
                        ) : (
                            <>
                                <Wand2 className="w-5 h-5" />
                                Sehrli Rezyumeni Yaratish (AI 1 Kredit)
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};
