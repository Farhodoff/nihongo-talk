import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { toast } from '../hooks/use-toast';

const FlashcardForm: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const defaultSubjectId = searchParams.get('subjectId') || '';

    const [isCreatingNewSub, setIsCreatingNewSub] = useState(false);
    const [newSubName, setNewSubName] = useState('');
    const [newSubColor, setNewSubColor] = useState('#8b5cf6');

    const { addFlashcard, addSubject, subjects } = useStudyData();

    const handleCreateSubjectInline = async () => {
        if (!newSubName.trim()) return;
        const created = await addSubject({
            name: newSubName.trim(),
            color: newSubColor,
            schedule: []
        });
        if (created && created.id) {
            setSubjectId(created.id);
            setIsCreatingNewSub(false);
            setNewSubName('');
        }
    };

    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [subjectId, setSubjectId] = useState(defaultSubjectId);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!front || !back || isSubmitting) return;

        const targetSubId = subjectId || (subjects.find(s => !s.isArchived)?.id || '');

        setIsSubmitting(true);
        try {
            await addFlashcard({
                subjectId: targetSubId,
                front,
                back,
            });
            toast({ title: 'Fleshkarta Saqlandi', description: 'Yangi fleshkarta muvaffaqiyatli saqlandi!' });
            navigate('/flashcards');
        } catch (error) {
            console.error("Failed to add flashcard:", error);
            toast({ variant: 'destructive', title: 'Xatolik', description: "Fleshkarta saqlashda xatolik yuz berdi. Qayta urinib ko'ring." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/flashcards')} className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <ArrowLeft size={20} className="text-muted-foreground" />
                </button>
                <h2 className="text-2xl font-bold text-foreground">Yangi Fleshkarta</h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl border border-border space-y-6 shadow-xl">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-bold text-foreground">Fan</label>
                        <button
                            type="button"
                            onClick={() => setIsCreatingNewSub(!isCreatingNewSub)}
                            className="text-xs font-bold text-primary hover:underline"
                        >
                            + Yangi Fan Yaratish
                        </button>
                    </div>

                    {isCreatingNewSub ? (
                        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 space-y-3 mb-2">
                            <input
                                type="text"
                                placeholder="Fan nomi (masalan, Yapon tili)..."
                                value={newSubName}
                                onChange={(e) => setNewSubName(e.target.value)}
                                className="w-full px-3 py-2 text-sm rounded-xl border border-border bg-card text-foreground outline-hidden focus:ring-2 focus:ring-primary"
                            />
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    {['#E8483A', '#C9A961', '#10b981', '#3b82f6', '#8b5cf6'].map(c => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setNewSubColor(c)}
                                            className={`w-6 h-6 rounded-full transition-transform ${newSubColor === c ? 'scale-125 ring-2 ring-primary' : ''}`}
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsCreatingNewSub(false)}
                                        className="px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                                    >
                                        Bekor qilish
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCreateSubjectInline}
                                        className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-lg font-bold"
                                    >
                                        Saqlash
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <select
                            value={subjectId}
                            onChange={(e) => setSubjectId(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                        >
                            <option value="">Avtomatik Fan (yoki tanlang)</option>
                            {subjects.filter(s => !s.isArchived).map(s => (
                                <option key={s.id} value={s.id}>{s.name}</option>
                            ))}
                        </select>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Old tomoni (Savol / Ie / So'z)</label>
                    <textarea
                        value={front}
                        onChange={(e) => setFront(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary h-32 resize-none placeholder:text-muted-foreground"
                        placeholder="masalan, ありがとう (Arigatou)"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Orqa tomoni (Javob / Ma'nosi)</label>
                    <textarea
                        value={back}
                        onChange={(e) => setBack(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary h-32 resize-none placeholder:text-muted-foreground"
                        placeholder="masalan, Rahmat, tashakkur"
                        required
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full py-4 text-base font-black rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                        Fleshkarta Yaratish
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FlashcardForm;
