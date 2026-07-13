import React, { useState } from 'react';
import { Loader2, Wand2, Plus, Trash2, Sparkles, X } from 'lucide-react';

const AI_SUGGESTIONS = [
    "Communication", "Teamwork", "Problem-solving", "Adaptability",
    "Project Management", "Client Relations", "Process Improvement",
    "React", "Node.js", "TypeScript", "Tailwind CSS", "Data Analysis",
    "Time Management", "Leadership", "Git/GitHub"
];

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

    const [jobs, setJobs] = useState([
        { id: Date.now().toString(), title: '', company: '', period: '', description: '' }
    ]);

    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState('');

    const handleAddSkill = () => {
        const s = skillInput.trim();
        if (s && !skills.includes(s)) {
            setSkills(prev => [...prev, s]);
        }
        setSkillInput('');
    };

    const handleKeyDownSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    const toggleSuggestion = (suggestion: string) => {
        if (skills.includes(suggestion)) {
            setSkills(prev => prev.filter(s => s !== suggestion));
        } else {
            setSkills(prev => [...prev, suggestion]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const combinedExperience = jobs.map((job, index) => {
            return `Ish ${index + 1}:\nKompaniya: ${job.company}\nLavozim: ${job.title}\nVaqti: ${job.period}\nNima ishlar qilgan: ${job.description}`;
        }).join('\n\n');
        
        onSubmit({ ...formData, rawExperience: combinedExperience, rawSkills: skills.join(', ') }, language);
    };

    const isFormValid = formData.fullName && jobs[0]?.company;

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
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white">Ish Tajribasi *</h4>
                        <button
                            type="button"
                            onClick={() => setJobs(prev => [...prev, { id: Date.now().toString(), title: '', company: '', period: '', description: '' }])}
                            className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                        >
                            <Plus className="w-4 h-4" />
                            Yana ish qo'shish
                        </button>
                    </div>
                    
                    <div className="space-y-4">
                        {jobs.map((job) => (
                            <div key={job.id} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 relative">
                                {jobs.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setJobs(prev => prev.filter(j => j.id !== job.id))}
                                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Lavozim (Role)</label>
                                        <input 
                                            type="text" 
                                            value={job.title} 
                                            onChange={(e) => setJobs(prev => prev.map(j => j.id === job.id ? { ...j, title: e.target.value } : j))}
                                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" 
                                            placeholder="Masalan: Frontend dasturchi" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Kompaniya</label>
                                        <input 
                                            type="text" 
                                            value={job.company} 
                                            onChange={(e) => setJobs(prev => prev.map(j => j.id === job.id ? { ...j, company: e.target.value } : j))}
                                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" 
                                            placeholder="Masalan: Epam Systems" 
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Vaqti (Period)</label>
                                    <input 
                                        type="text" 
                                        value={job.period} 
                                        onChange={(e) => setJobs(prev => prev.map(j => j.id === job.id ? { ...j, period: e.target.value } : j))}
                                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" 
                                        placeholder="Masalan: 2021 May - Hozirgacha" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nima ishlar qilingan? Skillar?</label>
                                    <textarea 
                                        value={job.description} 
                                        onChange={(e) => setJobs(prev => prev.map(j => j.id === job.id ? { ...j, description: e.target.value } : j))}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-y" 
                                        placeholder="Masalan: React va Node.js ni ishlatib payment tizimini qildim..." 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
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

                {/* Skills */}
                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Qobiliyatlar (Skills)</h4>
                    <p className="text-xs text-slate-500 mb-3">6 dan 8 tagacha asosiy skillaringizni kiriting. AI tavsiyalaridan ham foydalanishingiz mumkin.</p>
                    
                    <div className="flex gap-2 mb-3">
                        <input 
                            type="text" 
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleKeyDownSkill}
                            className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="e.g. Data Analysis"
                        />
                        <button 
                            type="button" 
                            onClick={handleAddSkill}
                            className="px-4 py-2 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors flex items-center gap-1"
                        >
                            <Plus className="w-4 h-4" /> Add
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {skills.map(skill => (
                            <span key={skill} className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full text-sm font-medium">
                                {skill}
                                <button type="button" onClick={() => toggleSuggestion(skill)} className="hover:text-indigo-900 dark:hover:text-indigo-100">
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))}
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                            <Sparkles className="w-4 h-4" />
                            <span>AI Suggestions</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {AI_SUGGESTIONS.map(suggestion => {
                                const isSelected = skills.includes(suggestion);
                                return (
                                    <button
                                        key={suggestion}
                                        type="button"
                                        onClick={() => toggleSuggestion(suggestion)}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                            isSelected 
                                                ? 'bg-indigo-600 text-white shadow-sm' 
                                                : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400'
                                        }`}
                                    >
                                        <Plus className={`w-3.5 h-3.5 ${isSelected ? 'rotate-45' : ''} transition-transform`} />
                                        {suggestion}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
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
