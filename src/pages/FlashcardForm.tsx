import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';

const FlashcardForm: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const defaultSubjectId = searchParams.get('subjectId') || '';

    const { addFlashcard, subjects } = useStudyData();

    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [subjectId, setSubjectId] = useState(defaultSubjectId);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!front || !back || !subjectId || isSubmitting) return;

        setIsSubmitting(true);
        try {
            await addFlashcard({
                subjectId,
                front,
                back,
            });
            navigate('/flashcards');
        } catch (error) {
            console.error("Failed to add flashcard:", error);
            alert("Fleshkarta saqlashda xatolik yuz berdi. Qayta urinib ko'ring.");
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

            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border-border space-y-6">
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Fan</label>
                    <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                        required
                    >
                        <option value="">Fanni Tanlang</option>
                        {subjects.filter(s => !s.isArchived).map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Old tomoni (Savol)</label>
                    <textarea
                        value={front}
                        onChange={(e) => setFront(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none backdrop-blur-sm placeholder:text-muted-foreground"
                        placeholder="masalan, O'zbekiston poytaxti qayer?"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Orqa tomoni (Javob)</label>
                    <textarea
                        value={back}
                        onChange={(e) => setBack(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none backdrop-blur-sm placeholder:text-muted-foreground"
                        placeholder="masalan, Toshkent"
                        required
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full py-4 text-lg">Fleshkarta Yaratish</Button>
                </div>
            </form>
        </div>
    );
};

export default FlashcardForm;
