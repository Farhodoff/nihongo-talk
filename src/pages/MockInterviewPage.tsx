import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { callDeepSeek } from '../utils/deepseek';
import { getAIConfig } from '../utils/ai';
import { getJapaneseRecruiterPrompt } from '../utils/interviewPrompts';
import { Mic, MicOff, Send, MessageSquare, AlertCircle } from 'lucide-react';
import AIKeyGuard from '../components/AIKeyGuard';
import ReactMarkdown from 'react-markdown';
import { useStudyData } from '../context/StudyPlannerContext';

interface Message {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
}

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const MockInterviewPage: React.FC = () => {
    const { user } = useStudyData();
    const navigate = useNavigate();

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<any>(null);

    // Guard route
    useEffect(() => {
        if (user && user.email !== 'fsoyilov@gmail.com') {
            navigate('/dashboard', { replace: true });
        }
    }, [user, navigate]);

    // Initialize the conversation
    useEffect(() => {
        if (messages.length === 0) {
            const initialMessage: Message = {
                id: Date.now().toString(),
                role: 'assistant',
                content: '本日は面接にお越しいただきありがとうございます。まずは自己紹介をお願いします。',
                timestamp: Date.now()
            };
            setMessages([initialMessage]);
        }
    }, [messages.length]);

    // Setup Speech Recognition
    useEffect(() => {
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'ja-JP';

            recognition.onresult = (event: any) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }

                if (finalTranscript) {
                    setInput(prev => prev + finalTranscript + ' ');
                }
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error", event.error);
                if (event.error !== 'no-speech') {
                    setError(`Ovozni aniqlashda xatolik: ${event.error}`);
                    setIsRecording(false);
                }
            };

            recognition.onend = () => {
                setIsRecording(false);
            };

            recognitionRef.current = recognition;
        }
    }, []);

    const toggleRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        } else {
            setError(null);
            if (!SpeechRecognition) {
                setError("Kechirasiz, sizning brauzeringiz ovozli yozishni (Web Speech API) qo'llab-quvvatlamaydi. Iltimos Chrome brauzeridan foydalaning.");
                return;
            }
            try {
                recognitionRef.current?.start();
                setIsRecording(true);
            } catch (e) {
                console.error(e);
                setError("Ovozni yozishni boshlashda xatolik. Mikrofon ruxsatlarini tekshiring.");
            }
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        }

        const newUserMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim(),
            timestamp: Date.now()
        };

        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const config = getAIConfig();
            const systemPrompt = getJapaneseRecruiterPrompt();
            
            // Build conversation history for context
            let prompt = "これまでの会話履歴:\n";
            updatedMessages.slice(-3).forEach(m => {
                prompt += `${m.role === 'user' ? '候補者' : '面接官'}: ${m.content}\n`;
            });
            prompt += "\n上記の文脈を踏まえ、面接官として候補者の最後の発言に対するフィードバックと、次の質問を行ってください。";

            const aiResponseText = await callDeepSeek(
                prompt,
                config.deepseekKey,
                systemPrompt,
                false,
                'deepseek-v4-flash',
                false
            );

            const newAiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: aiResponseText,
                timestamp: Date.now()
            };

            setMessages(prev => [...prev, newAiMessage]);
        } catch (err: any) {
            console.error(err);
            setError(err.message || "AI bilan ulanishda xatolik yuz berdi.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="flex-none p-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">IT Nihongo - Mock Interview</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">AI Recruiter bilan yapon tilida suhbat</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Recruiter Online</span>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50 dark:bg-gray-900/50">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                            msg.role === 'user' 
                                ? 'bg-indigo-600 text-white rounded-br-none' 
                                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-bl-none'
                        }`}>
                            {msg.role === 'assistant' ? (
                                <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed prose-p:my-1 prose-headings:my-2">
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                            ) : (
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                            )}
                        </div>
                    </div>
                ))}
                
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            <span className="text-xs text-gray-500 ml-2">Recruiter yozmoqda...</span>
                        </div>
                    </div>
                )}
                
                {error && (
                    <div className="mx-auto max-w-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                    </div>
                )}
                
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex-none p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 z-10">
                <div className="flex items-end gap-2 max-w-4xl mx-auto">
                    <button
                        onClick={toggleRecording}
                        className={`p-3.5 rounded-xl flex-shrink-0 transition-all duration-200 ${
                            isRecording 
                                ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse ring-2 ring-red-500 ring-offset-2 dark:ring-offset-gray-900' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                        title={isRecording ? "Yozishni to'xtatish" : "Ovozli gapirish (Yapon tilida)"}
                    >
                        {isRecording ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                    </button>

                    <div className="flex-1 relative">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                            placeholder={isRecording ? "Sizni eshityapman (Yapon tilida gapiring)..." : "Javobingizni yozing yoki mikrofon orqali gapiring..."}
                            className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent py-3 pl-4 pr-12 text-sm resize-none h-[52px] min-h-[52px] max-h-[150px]"
                            rows={1}
                        />
                    </div>

                    <button
                        onClick={handleSendMessage}
                        disabled={!input.trim() || isLoading}
                        className="p-3.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0 shadow-sm shadow-indigo-200 dark:shadow-none"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
                <div className="text-center mt-2">
                    <p className="text-xs text-gray-400">Maslahat: Mikrofonni bosib yapon tilida o'zingizni tanishtiring. AI xatolaringizni to'g'rilab beradi.</p>
                </div>
            </div>
        </div>
    );
};

const MockInterviewPageWithGuard: React.FC = () => (
    <AIKeyGuard>
        <MockInterviewPage />
    </AIKeyGuard>
);

export default MockInterviewPageWithGuard;
