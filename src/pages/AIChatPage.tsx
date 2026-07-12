import React, { useState, useRef, useEffect } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { chatWithAI, ChatMessage } from '../utils/ai';
import { Bot, Send, User, Sparkles, Loader2, Copy, Save, Paperclip } from 'lucide-react';
import AIKeyGuard from '../components/AIKeyGuard';
import ReactMarkdown from 'react-markdown';
import { Subject } from '../types';

const AIChatPage: React.FC = () => {
    const { subjects, notes, flashcards, settings, addStudyNote } = useStudyData();
    const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
    const [messages, setMessages] = useState<ChatMessage[]>([{
        role: 'model',
        text: "Salom! Men sizning AI yordamchingizman. Qaysi fan bo'yicha savollaringiz bor yoki qanday yordam bera olaman?"
    }]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMsg = inputValue.trim();
        setInputValue('');
        
        const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
        setMessages(newHistory);
        setIsLoading(true);

        try {
            let contextContent = '';
            let subjectName = 'Umumiy';

            if (selectedSubjectId) {
                const subject = subjects.find(s => s.id === selectedSubjectId);
                if (subject) subjectName = subject.name;

                const subjectNotes = notes
                    .filter(n => n.subjectId === selectedSubjectId)
                    .map(n => `Sarlavha: ${n.title}\nMatn: ${n.content}`)
                    .join('\n\n')
                    .substring(0, 2000); // Limit to 2000 chars

                const subjectCards = flashcards
                    .filter(f => f.subjectId === selectedSubjectId)
                    .map(f => `S: ${f.front} J: ${f.back}`)
                    .join('\n')
                    .substring(0, 1000); // Limit to 1000 chars

                contextContent = `Konspektlar:\n${subjectNotes}\n\nFlashcardlar:\n${subjectCards}`;
            }

            const aiResponse = await chatWithAI(
                userMsg,
                newHistory,
                contextContent,
                subjectName,
                settings.googleApiKey
            );

            setMessages([...newHistory, { role: 'model', text: aiResponse }]);
        } catch (error: any) {
            setMessages([...newHistory, { role: 'model', text: `⚠️ Xatolik yuz berdi: ${error.message}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        // Simple visual feedback could be added here
    };

    const handleSaveNote = async (text: string) => {
        if (!selectedSubjectId) {
            alert("Konspektni saqlash uchun avval chap tomondan fanni tanlang!");
            return;
        }
        const title = prompt("Konspekt uchun qisqacha sarlavha kiriting:", "AI Javobi");
        if (!title) return;
        
        await addStudyNote({
            title,
            content: text,
            subjectId: selectedSubjectId
        });
        alert('Konspekt muvaffaqiyatli saqlandi! ✅');
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target?.result as string;
            setInputValue(prev => prev + `\n\n[Fayl: ${file.name}]\n` + text.substring(0, 3000) + `\n`);
        };
        reader.readAsText(file);
        
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="h-full flex flex-col md:flex-row bg-background">
            {/* Sidebar (Subject Selection) */}
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-card p-4 flex flex-col gap-4">
                <div>
                    <h2 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                        <Sparkles className="text-primary w-5 h-5" /> AI Chat
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Konspekt va flashcardlaringiz asosida AI ga savol bering.
                    </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <label className="text-sm font-medium text-foreground">Kontekstni tanlang:</label>
                    <select
                        value={selectedSubjectId}
                        onChange={(e) => setSelectedSubjectId(e.target.value)}
                        className="w-full p-2 border border-border rounded-lg bg-background text-foreground text-sm outline-none focus:border-primary"
                    >
                        <option value="">🌐 Umumiy (Fanga bog'lanmagan)</option>
                        {subjects.map((s: Subject) => (
                            <option key={s.id} value={s.id}>
                                {s.icon || '📚'} {s.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col relative min-h-0">
                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-3 rounded-2xl overflow-x-auto ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-none' : 'bg-muted text-foreground rounded-tl-none border border-border shadow-sm'}`}>
                                    {msg.role === 'user' ? (
                                        <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                                    ) : (
                                        <div className="group relative">
                                            <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-pre:bg-background/50 prose-pre:border prose-pre:border-border">
                                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                                            </div>
                                            <div className="absolute top-0 right-0 -mt-2 -mr-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleCopy(msg.text)} className="p-1.5 bg-background border border-border rounded-md text-muted-foreground hover:text-foreground hover:bg-muted shadow-sm" title="Nusxa olish">
                                                    <Copy size={14} />
                                                </button>
                                                <button onClick={() => handleSaveNote(msg.text)} className="p-1.5 bg-background border border-border rounded-md text-muted-foreground hover:text-foreground hover:bg-muted shadow-sm" title="Konspekt sifatida saqlash">
                                                    <Save size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="flex gap-3 max-w-[85%] md:max-w-[70%]">
                                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                                    <Bot size={16} />
                                </div>
                                <div className="p-3 rounded-2xl bg-muted text-foreground rounded-tl-none border border-border shadow-sm flex items-center gap-2">
                                    <Loader2 size={16} className="animate-spin text-primary" />
                                    <span className="text-sm text-muted-foreground">AI o'ylamoqda...</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-card/80 backdrop-blur-md border-t border-border">
                    <div className="flex items-center gap-2 relative">
                        <input 
                            type="file" 
                            accept=".txt,.md,.csv" 
                            className="hidden" 
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors shrink-0"
                            title="Fayl (matn) biriktirish"
                        >
                            <Paperclip size={20} />
                        </button>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Savolingizni yozing..."
                            disabled={isLoading}
                            className="flex-1 p-3 bg-background border border-border rounded-xl text-foreground text-sm outline-none focus:border-primary disabled:opacity-50 transition-colors"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            className="p-3 bg-primary text-primary-foreground rounded-xl disabled:opacity-50 hover:bg-primary/90 transition-colors shrink-0"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AIChatPageWithGuard: React.FC = () => (
    <AIKeyGuard>
        <AIChatPage />
    </AIKeyGuard>
);

export default AIChatPageWithGuard;
