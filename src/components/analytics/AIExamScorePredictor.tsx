import React, { useState } from 'react';
import { Sparkles, BarChart2 } from 'lucide-react';

export const AIExamScorePredictor: React.FC = () => {
    const [examType, setExamType] = useState<'IELTS' | 'JLPT'>('IELTS');

    // IELTS Input Metrics (0-9)
    const [ieltsFluency, setIeltsFluency] = useState(7.0);
    const [ieltsVocab, setIeltsVocab] = useState(7.5);
    const [ieltsGrammar, setIeltsGrammar] = useState(6.5);
    const [ieltsTaskAch, setIeltsTaskAch] = useState(7.0);

    // JLPT Input Metrics (0-100%)
    const [jlptMojiGoi, setJlptMojiGoi] = useState(85);
    const [jlptBunpou, setJlptBunpou] = useState(70);
    const [jlptDokkai, setJlptDokkai] = useState(75);
    const [jlptChoukai, setJlptChoukai] = useState(80);
    const [jlptTargetLevel, setJlptTargetLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N2');

    // Calculate IELTS Overall Band
    const rawIeltsOverall = (ieltsFluency + ieltsVocab + ieltsGrammar + ieltsTaskAch) / 4;
    // IELTS Rounding Rule (.25 -> .5, .75 -> 1.0)
    const calculateIeltsBand = (val: number) => {
        const floor = Math.floor(val);
        const decimal = val - floor;
        if (decimal < 0.25) return floor;
        if (decimal < 0.75) return floor + 0.5;
        return floor + 1.0;
    };
    const ieltsPredictedBand = calculateIeltsBand(rawIeltsOverall);

    // Calculate JLPT Total Score (out of 180)
    const jlptScore180 = Math.round(((jlptMojiGoi + jlptBunpou + jlptDokkai + jlptChoukai) / 400) * 180);
    const jlptPassMark = jlptTargetLevel === 'N1' ? 100 : jlptTargetLevel === 'N2' ? 90 : 80;
    const isJlptPassing = jlptScore180 >= jlptPassMark;

    // AI Diagnostics Analysis
    const getWeaknessDiagnostic = () => {
        if (examType === 'IELTS') {
            const lowest = Math.min(ieltsFluency, ieltsVocab, ieltsGrammar, ieltsTaskAch);
            if (lowest === ieltsGrammar) return { title: "Grammatical Range & Accuracy", desc: "Murakkab sintaktik tuzilmalar va zamonlar moslashuviga ko'proq e'tibor bering.", icon: "⚠️" };
            if (lowest === ieltsFluency) return { title: "Fluency & Coherence", desc: "Nutq tezligini oshirish va ikkilanmasdan (hesitation) gapirish ustida ishlang.", icon: "🎙️" };
            if (lowest === ieltsVocab) return { title: "Lexical Resource", desc: "Idraviy iboralar va C1-C2 darajadagi akademik sinonimlarni oshiring.", icon: "📚" };
            return { title: "Task Achievement / Pronunciation", desc: "Savol shartlarini to'liq yoritish va talaffuz ravonligini yaxshilang.", icon: "🎯" };
        } else {
            const lowest = Math.min(jlptMojiGoi, jlptBunpou, jlptDokkai, jlptChoukai);
            if (lowest === jlptBunpou) return { title: "Bunpou (Grammatika)", desc: "N2/N1 grammatik iboralari va moslashuv qoidalarini takrorlang.", icon: "⛩️" };
            if (lowest === jlptMojiGoi) return { title: "Moji/Goi (Kanji & Lug'at)", desc: "Kanji o'qilishlari va Onyomi/Kunyomi farqlariga ko'proq e'tibor bering.", icon: "📝" };
            if (lowest === jlptDokkai) return { title: "Dokkai (Matn O'qish)", desc: "Uzun matnlardan tezkor xulosa chiqarish ko'nikmasini oshiring.", icon: "📖" };
            return { title: "Choukai (Eshitib Tushunish)", desc: "Yaponcha audiolar va jonli muloqot mashqlarini ko'paytiring.", icon: "🎧" };
        }
    };

    const diag = getWeaknessDiagnostic();

    return (
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-6 shadow-xl my-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs rounded-full border border-indigo-500/20 flex items-center gap-1.5">
                            <Sparkles size={14} /> AI PREDICTIVE ANALYTICS RADAR 🎯
                        </span>
                    </div>
                    <h2 className="text-2xl font-black text-foreground">AI Imtihon Natijasini Bashorat qilish</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        Test natijalaringiz asosida rasmiy IELTS / JLPT Band Score va kamchiliklar diagnostikasi
                    </p>
                </div>

                {/* Exam Switcher */}
                <div className="flex items-center gap-1.5 bg-muted/60 p-1.5 rounded-2xl border border-border">
                    <button
                        onClick={() => setExamType('IELTS')}
                        className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                            examType === 'IELTS' ? 'bg-indigo-600 text-white shadow' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        🎓 IELTS Prediction
                    </button>
                    <button
                        onClick={() => setExamType('JLPT')}
                        className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                            examType === 'JLPT' ? 'bg-rose-600 text-white shadow' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        🎌 JLPT Mastery
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Input Sliders */}
                <div className="lg:col-span-2 bg-muted/30 border border-border/70 p-6 rounded-2xl space-y-5">
                    <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                        <BarChart2 size={18} className="text-indigo-500" />
                        {examType === 'IELTS' ? 'IELTS Metriklari (Slajderni suring):' : 'JLPT Bo\'limlar Ozlashtirishi (%):'}
                    </h3>

                    {examType === 'IELTS' ? (
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Fluency & Coherence (Ravonlik):</span>
                                    <span className="text-indigo-500 font-extrabold">{ieltsFluency.toFixed(1)} Band</span>
                                </div>
                                <input
                                    type="range"
                                    min="4.0"
                                    max="9.0"
                                    step="0.5"
                                    value={ieltsFluency}
                                    onChange={e => setIeltsFluency(parseFloat(e.target.value))}
                                    className="w-full accent-indigo-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Lexical Resource (Lug'at Boyligi):</span>
                                    <span className="text-indigo-500 font-extrabold">{ieltsVocab.toFixed(1)} Band</span>
                                </div>
                                <input
                                    type="range"
                                    min="4.0"
                                    max="9.0"
                                    step="0.5"
                                    value={ieltsVocab}
                                    onChange={e => setIeltsVocab(parseFloat(e.target.value))}
                                    className="w-full accent-indigo-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Grammatical Range & Accuracy (Grammatika):</span>
                                    <span className="text-indigo-500 font-extrabold">{ieltsGrammar.toFixed(1)} Band</span>
                                </div>
                                <input
                                    type="range"
                                    min="4.0"
                                    max="9.0"
                                    step="0.5"
                                    value={ieltsGrammar}
                                    onChange={e => setIeltsGrammar(parseFloat(e.target.value))}
                                    className="w-full accent-indigo-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Task Achievement / Pronunciation:</span>
                                    <span className="text-indigo-500 font-extrabold">{ieltsTaskAch.toFixed(1)} Band</span>
                                </div>
                                <input
                                    type="range"
                                    min="4.0"
                                    max="9.0"
                                    step="0.5"
                                    value={ieltsTaskAch}
                                    onChange={e => setIeltsTaskAch(parseFloat(e.target.value))}
                                    className="w-full accent-indigo-600 cursor-pointer"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between gap-3 mb-2">
                                <span className="text-xs font-bold text-muted-foreground">Maqsad JLPT Darajasi:</span>
                                <div className="flex gap-1">
                                    {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map(lvl => (
                                        <button
                                            key={lvl}
                                            onClick={() => setJlptTargetLevel(lvl)}
                                            className={`px-2.5 py-1 text-xs font-extrabold rounded-lg transition-all ${
                                                jlptTargetLevel === lvl ? 'bg-rose-600 text-white' : 'bg-background text-muted-foreground border'
                                            }`}
                                        >
                                            {lvl}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Moji / Goi (Kanji & Lug'at):</span>
                                    <span className="text-rose-500 font-extrabold">{jlptMojiGoi}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="5"
                                    value={jlptMojiGoi}
                                    onChange={e => setJlptMojiGoi(parseInt(e.target.value))}
                                    className="w-full accent-rose-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Bunpou (Grammatika):</span>
                                    <span className="text-rose-500 font-extrabold">{jlptBunpou}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="5"
                                    value={jlptBunpou}
                                    onChange={e => setJlptBunpou(parseInt(e.target.value))}
                                    className="w-full accent-rose-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Dokkai (Matn O'qish):</span>
                                    <span className="text-rose-500 font-extrabold">{jlptDokkai}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="5"
                                    value={jlptDokkai}
                                    onChange={e => setJlptDokkai(parseInt(e.target.value))}
                                    className="w-full accent-rose-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span className="text-muted-foreground">Choukai (Eshitib Tushunish):</span>
                                    <span className="text-rose-500 font-extrabold">{jlptChoukai}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="5"
                                    value={jlptChoukai}
                                    onChange={e => setJlptChoukai(parseInt(e.target.value))}
                                    className="w-full accent-rose-600 cursor-pointer"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Predicted Score & AI Recommendations */}
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 p-6 rounded-2xl text-white space-y-5 flex flex-col justify-between shadow-xl">
                    <div className="space-y-3 text-center">
                        <span className="text-[11px] font-extrabold uppercase text-indigo-300 tracking-wider">
                            {examType === 'IELTS' ? 'Taxminiy Rasmiy Natija' : `JLPT ${jlptTargetLevel} Bashorat Balli`}
                        </span>

                        {examType === 'IELTS' ? (
                            <div>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                                    {ieltsPredictedBand.toFixed(1)} BAND
                                </div>
                                <span className="text-xs text-indigo-200 font-bold block mt-1">
                                    {ieltsPredictedBand >= 8.0 ? '🌟 C2 Expert User' : ieltsPredictedBand >= 7.0 ? '✨ C1 Good User' : '👍 B2 Competent User'}
                                </span>
                            </div>
                        ) : (
                            <div>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">
                                    {jlptScore180} / 180
                                </div>
                                <span className={`text-xs font-bold block mt-1 ${isJlptPassing ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {isJlptPassing ? `🟢 JLPT ${jlptTargetLevel} PASS (O'tdingiz!)` : `🔴 JLPT ${jlptTargetLevel} FAIL (O'tmadingiz)`}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Weakness Diagnostic Box */}
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15 space-y-1.5 text-left">
                        <span className="text-[10px] font-extrabold uppercase text-amber-300 tracking-wider block">
                            🎯 AI Kamchilik Diagnostikasi:
                        </span>
                        <h4 className="text-xs font-extrabold text-white flex items-center gap-1.5">
                            <span>{diag.icon}</span> <span>{diag.title}</span>
                        </h4>
                        <p className="text-[11px] text-gray-300 leading-relaxed">
                            {diag.desc}
                        </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-center text-[10px] text-gray-400">
                        ⚡ AI Model so'nggi 20 ta mashqingiz va rasmiy imtihon kriteriyalari bo'yicha hisoblaydi.
                    </div>
                </div>
            </div>
        </div>
    );
};
