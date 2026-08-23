import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Play, AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';
import { callAI } from '../utils/ai';
import { useNavigate } from 'react-router-dom';

interface AIUstozModalProps {
    isOpen: boolean;
    onClose: () => void;
    studiedMinutes: number;
    goalMinutes: number;
}

interface Message {
    id: string;
    text: string;
    role: 'user' | 'model';
}

const AIUstozModal: React.FC<AIUstozModalProps> = ({ isOpen, onClose, studiedMinutes, goalMinutes }) => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const systemPrompt = `Siz qattiqqo'l, talabchan, lekin g'amxo'r "Ustoz" (AI Coach) rolasiz. 
Sizning vazifangiz: Foydalanuvchi bugungi dars rejasini bajarmayotganida uni tergash va dars qilishga undash.
Foydalanuvchi bugun jami ${goalMinutes} daqiqa dars qilishi kerak edi, lekin hozirgacha faqat ${studiedMinutes} daqiqa o'qigan.
Siz darhol so'roq qilishni boshlaysiz: Nega dars qilinmayapti? Vaqt zoya ketyapti! 
O'zbek tilida yozing. Gaplaringiz qisqa, ta'sirli va biroz qattiqqo'l bo'lsin. Hech qanday markdown ishlatmang.`;

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            startConversation();
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const startConversation = async () => {
        setIsLoading(true);
        try {
            const reply = await callAI("Salom ustoz. Men hozir dars qilmayapman, ilovaga kirdim.", systemPrompt, false);
            setMessages([{ id: Date.now().toString(), role: 'model', text: reply }]);
        } catch (e: any) {
            setMessages([{ id: Date.now().toString(), role: 'model', text: "Nimadir xato ketdi. Lekin baribir dars qilishing kerak!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const conversation = messages.map(m => `${m.role === 'user' ? 'Talaba' : 'Ustoz'}: ${m.text}`).join('\n');
            const prompt = `Suhbat tarixi:\n${conversation}\n\nTalaba: ${input}\nUstoz:`;
            
            const reply = await callAI(prompt, systemPrompt, false);
            setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: reply }]);
        } catch (error: any) {
             console.error("AI Ustoz error:", error);
             setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Bahonalarni yig'ishtirib darsni boshla! Vaqtingni zoya ketkazma." }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-slate-900 border border-red-500/30 rounded-3xl w-full max-w-lg shadow-2xl shadow-red-500/20 overflow-hidden flex flex-col h-[80vh] md:h-[600px] animate-in zoom-in-95">
                {/* Header */}
                <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center relative">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-500/10 rounded-xl">
                            <AlertTriangle className="text-red-500" size={24} />
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-lg">AI Ustoz Nazorati</h2>
                            <p className="text-red-400 text-xs font-medium">Siz darsdan chalg'idingiz!</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${
                                msg.role === 'user' 
                                ? 'bg-indigo-600 text-white rounded-br-none' 
                                : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 rounded-bl-none text-slate-400 text-sm flex gap-1">
                                <span className="animate-bounce">.</span>
                                <span className="animate-bounce" style={{animationDelay: '0.2s'}}>.</span>
                                <span className="animate-bounce" style={{animationDelay: '0.4s'}}>.</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Actions */}
                <div className="p-4 border-t border-slate-800 bg-slate-900/50 space-y-3">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                            placeholder="Ustozga uzringizni yozing..."
                            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            autoFocus
                        />
                        <Button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-red-600 hover:bg-red-700 border-none">
                            <Send size={18} />
                        </Button>
                    </div>
                    <Button 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl border-none font-bold"
                        onClick={() => {
                            onClose();
                            navigate('/focus');
                        }}
                    >
                        <Play size={18} className="mr-2" />
                        Xo'p Ustoz, Darsni Boshlayman!
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AIUstozModal;
