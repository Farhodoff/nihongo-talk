import React, { useState } from 'react';
import { Sparkles, RefreshCw, AlertCircle, CheckCircle2, BookOpen, Plus, PlusCircle } from 'lucide-react';
import { generateAIResponse } from '../../utils/ai/aiCore';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Button } from '../ui/Button';

interface GeneratedWord {
    word: string;
    definition: string;
    collocation: string;
    example: string;
    uzbekTranslation: string;
}

export const VocabularyGenerator: React.FC = () => {
    const { addFlashcardsBatch } = useStudyData();
    const [topic, setTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [words, setWords] = useState<GeneratedWord[]>([]);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [addedSet, setAddedSet] = useState<Set<number>>(new Set());

    const handleGenerate = async () => {
        const targetTopic = topic.trim() || "Global Economy & Trade";
        setIsGenerating(true);
        setErrorMsg(null);
        setSuccessMsg(null);
        setAddedSet(new Set());

        const prompt = `
          Act as an expert IELTS Vocabulary Builder.
          Generate exactly 10 advanced Band 7.5+ IELTS Academic words, collocations, or phrases related to the topic: "${targetTopic}".
          For each vocabulary item, provide:
          1. The word or collocation itself.
          2. A clear English definition.
          3. A common IELTS style collocation/phrase.
          4. An IELTS writing style example sentence using the word.
          5. A clear Uzbek translation of the word and its context.
          
          Return ONLY a valid JSON array matching this exact format (DO NOT write markdown or backticks):
          [
            {
              "word": "ubiquitous",
              "definition": "present, appearing, or found everywhere",
              "collocation": "ubiquitous technology",
              "example": "Smartphones have become ubiquitous in modern society, altering communication patterns.",
              "uzbekTranslation": "hamma yerda mavjud bo'lgan, keng tarqalgan"
            }
          ]
        `;

        try {
            const rawResponse = await generateAIResponse([
                { role: 'system', content: 'You are a JSON only provider.' },
                { role: 'user', content: prompt }
            ]);
            const cleanJson = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();
            const data: GeneratedWord[] = JSON.parse(cleanJson);
            
            if (Array.isArray(data) && data.length > 0) {
                setWords(data);
            } else {
                throw new Error("Invalid response structure.");
            }
        } catch (err: any) {
            console.error(err);
            setErrorMsg("Lug'at ro'yxatini yaratishda xatolik yuz berdi. Qayta urinib ko'ring.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleAddSingleToSRS = async (wordItem: GeneratedWord, idx: number) => {
        try {
            await addFlashcardsBatch([{
                subjectId: "general",
                front: `${wordItem.word} (${wordItem.collocation}) [IELTS Band 7.5+]`,
                back: `Ma'nosi: ${wordItem.definition}\nO'zbekcha: ${wordItem.uzbekTranslation}\nMisol: ${wordItem.example}`,
                interval: 1,
                easeFactor: 2.5,
                repetitions: 0,
                nextReviewDate: new Date().toISOString()
            }]);
            setAddedSet(prev => {
                const next = new Set(prev);
                next.add(idx);
                return next;
            });
        } catch (e) {
            setErrorMsg("Fleshkartaga qo'shishda xatolik yuz berdi.");
        }
    };

    const handleAddAllToSRS = async () => {
        if (words.length === 0) return;
        try {
            const cardsToSave = words.map(wordItem => ({
                subjectId: "general",
                front: `${wordItem.word} (${wordItem.collocation}) [IELTS Band 7.5+]`,
                back: `Ma'nosi: ${wordItem.definition}\nO'zbekcha: ${wordItem.uzbekTranslation}\nMisol: ${wordItem.example}`,
                interval: 1,
                easeFactor: 2.5,
                repetitions: 0,
                nextReviewDate: new Date().toISOString()
            }));
            await addFlashcardsBatch(cardsToSave);
            setSuccessMsg("Barcha so'zlar muvaffaqiyatli fleshkartalar to'plamiga qo'shildi! ⛩️");
            // Mark all as added
            const allIdxs = new Set<number>(words.map((_, i) => i));
            setAddedSet(allIdxs);
        } catch (e) {
            setErrorMsg("Kartalarni qo'shishda xatolik yuz berdi.");
        }
    };

    return (
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-border pb-3">
                <div className="p-2 bg-amber-500/10 text-amber-600 rounded-xl">
                    <BookOpen size={20} />
                </div>
                <div>
                    <h3 className="text-sm font-extrabold text-foreground">AI Academic Vocabulary Generator</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Istalgan mavzuda Band 7.5+ darajali so'zlarni generator qilib SRS fleshkartalariga qo'shing.</p>
                </div>
            </div>

            {/* Input & Action */}
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Mavzuni kiriting (e.g. Higher Education, Climate Change, Tourism)"
                    className="flex-1 px-4 py-2.5 text-xs border border-border rounded-xl bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
                    disabled={isGenerating}
                />
                <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
                >
                    {isGenerating ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
                    <span>Lug'at Yaratish</span>
                </Button>
            </div>

            {errorMsg && (
                <div className="p-3.5 bg-rose-500/10 text-rose-500 rounded-xl text-xs flex items-center gap-2 border border-rose-500/25">
                    <AlertCircle size={14} />
                    <span>{errorMsg}</span>
                </div>
            )}

            {successMsg && (
                <div className="p-3.5 bg-emerald-500/10 text-emerald-500 rounded-xl text-xs flex items-center gap-2 border border-emerald-500/25">
                    <CheckCircle2 size={14} />
                    <span>{successMsg}</span>
                </div>
            )}

            {/* Generated Words List */}
            {words.length > 0 && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                        <span className="text-xs font-extrabold text-foreground uppercase tracking-wider">Topilgan Advanced So'zlar:</span>
                        <Button
                            onClick={handleAddAllToSRS}
                            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[10px] rounded-lg shadow-sm flex items-center gap-1"
                        >
                            <PlusCircle size={12} />
                            Barchasini SRS-ga qo'shish
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-1">
                        {words.map((item, idx) => {
                            const isAdded = addedSet.has(idx);
                            return (
                                <div key={idx} className="p-4 bg-muted/30 border border-border rounded-2xl flex flex-col justify-between space-y-3">
                                    <div>
                                        <div className="flex justify-between items-start gap-2">
                                            <span className="font-serif font-black text-indigo-500 text-sm">{item.word}</span>
                                            <span className="text-[9px] text-muted-foreground italic font-medium">Colloc: {item.collocation}</span>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground mt-1">
                                            <b>English:</b> {item.definition}
                                        </p>
                                        <p className="text-[10px] text-foreground font-semibold mt-1">
                                            <b>Tarjimasi:</b> {item.uzbekTranslation}
                                        </p>
                                        <div className="text-[10px] bg-card p-2 rounded-lg border border-border/50 mt-2">
                                            <b>Example:</b> "{item.example}"
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => handleAddSingleToSRS(item, idx)}
                                        disabled={isAdded}
                                        className={`w-full py-2 font-bold text-[10px] rounded-lg transition-all flex items-center justify-center gap-1 ${
                                            isAdded
                                                ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                                                : 'bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20'
                                        }`}
                                    >
                                        {isAdded ? <CheckCircle2 size={12} /> : <Plus size={12} />}
                                        <span>{isAdded ? "SRS-ga qo'shildi" : "SRS Flashcard-ga qo'shish"}</span>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
