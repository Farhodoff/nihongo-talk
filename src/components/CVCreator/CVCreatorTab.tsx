import React, { useState, useRef } from 'react';
import { generateAIResponse } from '../../utils/ai';
import { cvCreatorSystemPrompt } from '../../utils/cvPrompts';
import { useSubscription } from '../../hooks/useSubscription';
import { CVForm } from './CVForm';
import { CVPreview } from './CVPreview';
import { FileText, Wand2, Download, RefreshCw, AlertCircle } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';

export interface CVData {
    personalInfo: {
        fullName: string;
        email: string;
        phone: string;
        location: string;
        linkedin: string;
        github: string;
    };
    summary: string;
    experience: {
        company: string;
        role: string;
        period: string;
        description: string[];
    }[];
    education: {
        institution: string;
        degree: string;
        period: string;
    }[];
    skills: string[];
    certificates?: string[];
    advice?: string;
}

export const CVCreatorTab: React.FC = () => {
    const { hasCredits, decrementCredit, adminApiKey } = useSubscription();
    
    const [isGenerating, setIsGenerating] = useState(false);
    const [cvData, setCvData] = useState<CVData | null>(null);
    const [advice, setAdvice] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: cvData ? `${cvData.personalInfo.fullName}_Resume` : 'Resume'
    });

    const handleGenerateCV = async (rawInput: Record<string, string>, language: 'en' | 'ja') => {
        if (!hasCredits && !adminApiKey) {
            setError("AI kreditlaringiz tugagan. Iltimos, obunangizni yangilang.");
            return;
        }

        setIsGenerating(true);
        setError(null);

        try {
            const userPrompt = `
Language to use: ${language === 'ja' ? 'Japanese' : 'English'}
User's Raw Info:
Name: ${rawInput.fullName}
Email: ${rawInput.email}
Phone: ${rawInput.phone}
Location: ${rawInput.location}
LinkedIn: ${rawInput.linkedin}
GitHub: ${rawInput.github}

Raw Experience provided by user:
${rawInput.rawExperience}

Raw Skills provided by user:
${rawInput.rawSkills}

Raw Education provided by user:
${rawInput.rawEducation}
            `;

            const aiResponse = await generateAIResponse(
                [{ role: 'system', content: cvCreatorSystemPrompt }, { role: 'user', content: userPrompt }],
                adminApiKey
            );

            await decrementCredit();

            // Extract JSON from response (handling potential markdown formatting)
            const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error("AI kutilmagan formatda javob qaytardi.");
            }

            const parsedData = JSON.parse(jsonMatch[0]);
            
            setCvData({
                personalInfo: {
                    fullName: rawInput.fullName,
                    email: rawInput.email,
                    phone: rawInput.phone,
                    location: rawInput.location,
                    linkedin: rawInput.linkedin,
                    github: rawInput.github
                },
                summary: parsedData.summary || "",
                experience: parsedData.experience || [],
                education: parsedData.education || [],
                skills: parsedData.skills || [],
                certificates: parsedData.certificates || []
            });
            setAdvice(parsedData.advice || null);

        } catch (err: unknown) {
            console.error(err);
            setError("CV yaratishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
        } finally {
            setIsGenerating(false);
        }
    };

    const [templateStyle, setTemplateStyle] = useState<'international' | 'rirekisho'>('international');

    return (
        <div className="h-full flex flex-col bg-slate-50 dark:bg-slate-900">
            {/* Header */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                        <FileText className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">AI Resume & CV Creator</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Professional rezyume va yaponcha Rirekisho (履歴書) yaratish</p>
                    </div>
                </div>
                
                {cvData && (
                    <div className="flex items-center gap-3">
                        {/* Style Selector */}
                        <div className="flex bg-slate-100 dark:bg-slate-700 p-1 rounded-xl text-xs font-bold">
                            <button
                                onClick={() => setTemplateStyle('international')}
                                className={`px-3 py-1.5 rounded-lg transition-all ${templateStyle === 'international' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow' : 'text-slate-500'}`}
                            >
                                🇪🇺 International CV
                            </button>
                            <button
                                onClick={() => setTemplateStyle('rirekisho')}
                                className={`px-3 py-1.5 rounded-lg transition-all ${templateStyle === 'rirekisho' ? 'bg-rose-600 text-white shadow' : 'text-slate-500'}`}
                            >
                                🇯🇵 Rirekisho (履歴書)
                            </button>
                        </div>

                        <button 
                            onClick={() => { setCvData(null); setAdvice(null); }}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
                        >
                            <RefreshCw className="w-4 h-4" /> Tahrirlash
                        </button>
                        
                        <button 
                            onClick={handlePrint}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                        >
                            <Download className="w-4 h-4" /> PDF Yuklab olish
                        </button>
                    </div>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                {advice && cvData && (
                    <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
                        <Wand2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <div>
                            <h4 className="text-sm font-semibold mb-1 text-amber-900 dark:text-amber-200">AI Maslahati:</h4>
                            <p className="text-sm">{advice}</p>
                        </div>
                    </div>
                )}

                {!cvData ? (
                    <div className="max-w-3xl mx-auto">
                        <CVForm onSubmit={handleGenerateCV} isGenerating={isGenerating} />
                    </div>
                ) : (
                    <div className="flex justify-center pb-12">
                        <div className="w-full max-w-[800px] shadow-2xl bg-white rounded-sm overflow-hidden" style={{ minHeight: '1131px' }}>
                            <CVPreview ref={componentRef} data={cvData} templateStyle={templateStyle} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
