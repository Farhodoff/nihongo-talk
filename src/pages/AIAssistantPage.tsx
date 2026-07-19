import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';
import { chatWithAI, generateExamWithAI, generateMindMapWithAI, ChatMessage, ExamQuestion, getAIConfig } from '../utils/ai';
import { callDeepSeek } from '../utils/deepseek';
import { getJapaneseRecruiterPrompt } from '../utils/interviewPrompts';
import { 
    Bot, Send, User, Sparkles, Loader2, Copy, Save, Paperclip, GraduationCap, 
    MessageSquare, Award, CheckCircle2, XCircle, ChevronRight, HelpCircle, 
    BrainCircuit, Download, ZoomIn, ZoomOut, Maximize, AlertCircle, ChevronUp, ChevronDown, Fullscreen, Minimize2, Mic, MicOff, Briefcase, FileText, Volume2, VolumeX, RefreshCw
} from 'lucide-react';
import AIKeyGuard from '../components/AIKeyGuard';
import ReactMarkdown from 'react-markdown';
import MermaidViewer from '../components/MermaidViewer';
import { Subject } from '../types';
import { Button } from '../components/ui/Button';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { CVCreatorTab } from '../components/CVCreator/CVCreatorTab';

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    mindmap: { padding: 15 }
});

type ActiveTab = 'chat' | 'exam' | 'mindmap' | 'interview' | 'cv';

interface InterviewMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
}

const AIAssistantPage: React.FC = () => {
    const location = useLocation();
    const { subjects, notes, studyNotes, flashcards, settings, addStudyNote, awardXP, user } = useStudyData();
    const [selectedSubjectId, setSelectedSubjectId] = useState<string>(location.state?.subjectId || '');
    const [activeTab, setActiveTab] = useState<ActiveTab>(location.state?.tab || 'chat');

    // ==========================================
    // 1. CHAT TAB LOGIC
    // ==========================================
    const CHAT_STORAGE_KEY = 'study_planner_ai_chat_history';
    const INTERVIEW_STORAGE_KEY = 'study_planner_interview_history';

    const defaultWelcome: ChatMessage = {
        role: 'model',
        text: "Salom! Men sizning AI yordamchingizman. Qaysi fan bo'yicha savollaringiz bor yoki qanday yordam bera olaman?"
    };

    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        try {
            const saved = localStorage.getItem(CHAT_STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch {}
        return [defaultWelcome];
    });
    const [inputValue, setInputValue] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Persist chat messages to localStorage
    useEffect(() => {
        try {
            localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
        } catch {}
    }, [messages]);

    useEffect(() => {
        if (activeTab === 'chat') {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, activeTab]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isChatLoading) return;
        const userMsg = inputValue.trim();
        setInputValue('');
        
        const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
        setMessages(newHistory);
        setIsChatLoading(true);

        try {
            let contextContent = '';
            let subjectName = 'Umumiy';

            if (selectedSubjectId) {
                const subject = subjects.find(s => s.id === selectedSubjectId);
                if (subject) subjectName = subject.name;
                const subjectNotes = [...notes, ...studyNotes].filter(n => n.subjectId === selectedSubjectId).map(n => `Sarlavha: ${n.title}\nMatn: ${n.content}`).join('\n\n').substring(0, 2000);
                const subjectCards = flashcards.filter(f => f.subjectId === selectedSubjectId).map(f => `S: ${f.front} J: ${f.back}`).join('\n').substring(0, 1000);
                contextContent = `Konspektlar:\n${subjectNotes}\n\nFlashcardlar:\n${subjectCards}`;
            }

            const aiResponse = await chatWithAI(userMsg, newHistory, contextContent, subjectName, settings.googleApiKey);
            setMessages([...newHistory, { role: 'model', text: aiResponse }]);
        } catch (error: any) {
            setMessages([...newHistory, { role: 'model', text: `⚠️ Xatolik yuz berdi: ${error.message}` }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    const handleSaveNote = async (text: string) => {
        if (!selectedSubjectId) return alert("Konspektni saqlash uchun avval chap tomondan fanni tanlang!");
        const title = prompt("Konspekt uchun qisqacha sarlavha kiriting:", "AI Javobi");
        if (!title) return;
        await addStudyNote({ title, content: text, subjectId: selectedSubjectId });
        alert('Konspekt muvaffaqiyatli saqlandi! ✅');
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => setInputValue(prev => prev + `\n\n[Fayl: ${file.name}]\n` + (event.target?.result as string).substring(0, 3000) + `\n`);
        reader.readAsText(file);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    // ==========================================
    // 2. EXAM TAB LOGIC
    // ==========================================
    const [questionCount, setQuestionCount] = useState(5);
    const [isExamLoading, setIsExamLoading] = useState(false);
    const [questions, setQuestions] = useState<ExamQuestion[]>([]);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [examState, setExamState] = useState<'setup' | 'testing' | 'results'>('setup');
    const [score, setScore] = useState(0);
    const [xpEarned, setXpEarned] = useState(0);

    const handleStartExam = async () => {
        if (!selectedSubjectId) return alert('Iltimos, chap tomondan fanni tanlang!');
        const selectedSubject = subjects.find(s => s.id === selectedSubjectId);
        if (!selectedSubject) return;

        setIsExamLoading(true);
        try {
            const subjectNotesContent = [...notes, ...studyNotes].filter(n => n.subjectId === selectedSubjectId).map(n => `Sarlavha: ${n.title}\nMatn: ${n.content}`).join('\n\n');
            const subjectCards = flashcards.filter(f => f.subjectId === selectedSubjectId).map(f => `Savol: ${f.front} - Javob: ${f.back}`).join('\n');
            const referenceContent = `Konspektlar:\n${subjectNotesContent}\n\nFlashcardlar:\n${subjectCards}`;

            const generatedQuestions = await generateExamWithAI(selectedSubject.name, referenceContent, questionCount, settings.googleApiKey);
            if (generatedQuestions.length === 0) throw new Error("Savollar yaratib bo'lmadi");

            setQuestions(generatedQuestions);
            setCurrentQuestionIdx(0);
            setSelectedAnswers({});
            setExamState('testing');
        } catch (error) {
            alert('AI Imtihon yaratishda xatolik yuz berdi. Iltimos, API kalitingizni tekshiring.');
        } finally {
            setIsExamLoading(false);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIdx < questions.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
        } else {
            let correctCount = 0;
            questions.forEach((q, idx) => { if (selectedAnswers[idx] === q.correctAnswer) correctCount++; });
            const points = correctCount * 50; 
            setScore(correctCount);
            setXpEarned(points);
            awardXP(points);
            
            // Save to exam history
            try {
                const subject = subjects.find(s => s.id === selectedSubjectId);
                const subjectName = subject ? subject.name : 'Umumiy';
                const newResult = {
                    id: Date.now().toString(),
                    subjectName,
                    score: correctCount,
                    totalQuestions: questions.length,
                    xpEarned: points,
                    timestamp: Date.now()
                };
                const existing = localStorage.getItem('study_planner_exam_history');
                const history = existing ? JSON.parse(existing) : [];
                history.unshift(newResult);
                localStorage.setItem('study_planner_exam_history', JSON.stringify(history));
            } catch (e) {
                console.error("Failed to save exam history", e);
            }
            
            setExamState('results');
        }
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) return { title: 'Ajoyib natija! 🏆', color: 'text-yellow-500' };
        if (percentage >= 80) return { title: 'Juda yaxshi! 🌟', color: 'text-green-500' };
        if (percentage >= 60) return { title: 'Yaxshi! 👍', color: 'text-blue-500' };
        return { title: 'Yana harakat qiling! 💪', color: 'text-indigo-500' };
    };

    // ==========================================
    // 3. MINDMAP TAB LOGIC
    // ==========================================
    const [mindmapNote, setMindmapNote] = useState('');
    const [isMindmapGenerating, setIsMindmapGenerating] = useState(false);
    const [mermaidCode, setMermaidCode] = useState('');
    const [svgContent, setSvgContent] = useState('');
    const [mindmapError, setMindmapError] = useState('');
    const [isInputCollapsed, setIsInputCollapsed] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (!mermaidCode) {
            setSvgContent('');
            return;
        }
        const renderMermaid = async () => {
            try {
                const id = `mermaid-${Date.now()}`;
                const { svg } = await mermaid.render(id, mermaidCode);
                setSvgContent(svg);
                setMindmapError('');
            } catch (err: any) {
                setMindmapError("Aqliy xaritani chizishda xatolik yuz berdi. Boshqa matn yoki format kiriting.");
                setSvgContent('');
            }
        };
        renderMermaid();
    }, [mermaidCode]);

    const handleGenerateMindmap = async () => {
        if (!mindmapNote.trim()) return setMindmapError("Iltimos, avval matn kiriting!");
        setMindmapError('');
        setIsMindmapGenerating(true);
        setSvgContent('');
        try {
            const code = await generateMindMapWithAI(mindmapNote, settings.googleApiKey);
            setMermaidCode(code);
            setIsInputCollapsed(true);
        } catch (err: any) {
            setMindmapError(err.message || "Xatolik yuz berdi.");
        } finally {
            setIsMindmapGenerating(false);
        }
    };

    const downloadSvg = () => {
        if (!svgContent) return;
        const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `mindmap-${Date.now()}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    // ==========================================
    // 4. IT INTERVIEW LOGIC
    // ==========================================
    const [interviewMsgs, setInterviewMsgs] = useState<InterviewMessage[]>(() => {
        try {
            const saved = localStorage.getItem(INTERVIEW_STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch {}
        return [];
    });

    // Persist interview messages to localStorage
    useEffect(() => {
        try {
            if (interviewMsgs.length > 0) {
                localStorage.setItem(INTERVIEW_STORAGE_KEY, JSON.stringify(interviewMsgs));
            }
        } catch {}
    }, [interviewMsgs]);
    const [interviewInput, setInterviewInput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [speechLang, setSpeechLang] = useState('ja-JP');
    const [isTTSActive, setIsTTSActive] = useState(true);
    
    const speakJapanese = (text: string) => {
        if (!isTTSActive || !window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    const [isInterviewLoading, setIsInterviewLoading] = useState(false);
    const [interviewError, setInterviewError] = useState<string | null>(null);
    const interviewEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (activeTab === 'interview') {
            interviewEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [interviewMsgs, isInterviewLoading, activeTab]);

    useEffect(() => {
        if (activeTab === 'interview' && interviewMsgs.length === 0) {
            setInterviewMsgs([{
                id: Date.now().toString(),
                role: 'assistant',
                content: '本日は面接にお越しいただきありがとうございます。まずは自己紹介をお願いします。',
                timestamp: Date.now()
            }]);
        }
    }, [activeTab, interviewMsgs.length]);

    useEffect(() => {
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = speechLang;

            recognition.onresult = (event: any) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
                }
                if (finalTranscript) setInterviewInput(prev => prev + finalTranscript + ' ');
            };
            recognition.onerror = (event: any) => {
                if (event.error !== 'no-speech') {
                    setInterviewError(`Ovoz xatosi: ${event.error}`);
                    setIsRecording(false);
                }
            };
            recognition.onend = () => setIsRecording(false);
            recognitionRef.current = recognition;
        }

        return () => {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {}
            }
        };
    }, [speechLang]);

    const toggleRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        } else {
            setInterviewError(null);
            if (!SpeechRecognition) return setInterviewError("Brauzeringiz ovozli yozishni qo'llab-quvvatlamaydi.");
            try {
                recognitionRef.current?.start();
                setIsRecording(true);
            } catch (e) {
                setInterviewError("Mikrofon xatosi.");
            }
        }
    };

    const handleSendInterviewMsg = async () => {
        if (!interviewInput.trim()) return;
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        }

        const newUserMsg: InterviewMessage = { id: Date.now().toString(), role: 'user', content: interviewInput.trim(), timestamp: Date.now() };
        const updatedMsgs = [...interviewMsgs, newUserMsg];
        setInterviewMsgs(updatedMsgs);
        setInterviewInput('');
        setIsInterviewLoading(true);
        setInterviewError(null);

        try {
            const config = getAIConfig();
            const systemPrompt = getJapaneseRecruiterPrompt();
            let prompt = "これまでの会話履歴:\n";
            updatedMsgs.slice(-3).forEach(m => { prompt += `${m.role === 'user' ? '候補者' : '面接官'}: ${m.content}\n`; });
            prompt += "\n上記の文脈を踏まえ、面接官として候補者の最後の発言に対するフィードバックと、次の質問を行ってください。";

            const aiResponseText = await callDeepSeek(prompt, config.deepseekKey, systemPrompt, false, 'deepseek-v4-flash', false);
            setInterviewMsgs(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: aiResponseText, timestamp: Date.now() }]);
            speakJapanese(aiResponseText);
        } catch (err: any) {
            setInterviewError("AI bilan ulanishda xatolik yuz berdi.");
        } finally {
            setIsInterviewLoading(false);
        }
    };

    // ==========================================
    // RENDER HELPERS
    // ==========================================

    // Fullscreen mindmap render
    if (isFullscreen && svgContent && activeTab === 'mindmap') {
        return (
            <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white">
                        <BrainCircuit size={20} className="text-teal-400" />
                        <span className="text-sm font-bold">Aqliy Xarita</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="secondary" onClick={() => navigator.clipboard.writeText(svgContent)} className="text-xs py-1.5 px-3 border border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
                            <Copy size={14} className="mr-1.5" /> Nusxalash
                        </Button>
                        <Button variant="secondary" onClick={downloadSvg} className="text-xs py-1.5 px-3 bg-teal-600 hover:bg-teal-700 text-white border-none">
                            <Download size={14} className="mr-1.5" /> SVG
                        </Button>
                        <button onClick={() => setIsFullscreen(false)} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                            <Minimize2 size={18} />
                        </button>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <TransformWrapper initialScale={0.8} minScale={0.1} maxScale={5} centerOnInit wheel={{ step: 0.08 }} pinch={{ step: 5 }}>
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <React.Fragment>
                                <div className="absolute bottom-6 right-6 z-10 flex gap-1 bg-slate-900/90 p-1.5 rounded-xl backdrop-blur border border-slate-700">
                                    <button onClick={() => zoomIn()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg"><ZoomIn size={18} /></button>
                                    <button onClick={() => zoomOut()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg"><ZoomOut size={18} /></button>
                                    <button onClick={() => resetTransform()} className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg"><Maximize size={18} /></button>
                                </div>
                                <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }} contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div dangerouslySetInnerHTML={{ __html: svgContent }} className="w-full h-full flex items-center justify-center p-8 [&>svg]:max-w-none [&>svg]:h-auto" />
                                </TransformComponent>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </div>
            </div>
        );
    }

    return (
        <AIKeyGuard>
            <div className="h-full flex flex-col bg-background">
                {/* HEADER & CONTEXT SELECTOR */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border-b border-border bg-card">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                            <Sparkles className="text-primary w-6 h-6" /> AI Yordamchi
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Barcha AI vositalari yagona markazda.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="hidden md:block font-semibold text-muted-foreground uppercase tracking-wider text-xs whitespace-nowrap">
                            Kontekst:
                        </label>
                        <select
                            value={selectedSubjectId}
                            onChange={(e) => setSelectedSubjectId(e.target.value)}
                            disabled={examState === 'testing' || examState === 'results'}
                            className="w-full md:w-64 p-2.5 border border-border rounded-xl bg-background text-foreground text-sm outline-none focus:border-primary disabled:opacity-50 transition-colors"
                        >
                            <option value="">🌐 Umumiy (Fanga bog'lanmagan)</option>
                            {subjects.filter((s) => !s.isArchived).map((s: Subject) => (
                                <option key={s.id} value={s.id}>{s.icon || '📚'} {s.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* MAIN AREA */}
                <div className="flex-1 flex flex-col relative min-h-0 bg-slate-50/50 dark:bg-background">
                    {/* TABS */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card overflow-x-auto scrollbar-hide">
                        <button
                            onClick={() => setActiveTab('chat')}
                            className={`flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                                activeTab === 'chat' ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`}
                        >
                            <MessageSquare size={16} /> Suhbat
                        </button>
                        <button
                            onClick={() => setActiveTab('exam')}
                            className={`flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                                activeTab === 'exam' ? 'bg-fuchsia-500 text-white shadow-sm' : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`}
                        >
                            <GraduationCap size={16} /> Imtihon
                        </button>
                        <button
                            onClick={() => setActiveTab('mindmap')}
                            className={`flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                                activeTab === 'mindmap' ? 'bg-teal-500 text-white shadow-sm' : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`}
                        >
                            <BrainCircuit size={16} /> Aqliy Xarita
                        </button>
                        {user?.email === 'fsoyilov@gmail.com' && (
                            <button
                                onClick={() => setActiveTab('interview')}
                                className={`flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                                    activeTab === 'interview' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                            >
                                <Briefcase size={16} /> IT Interview (🇯🇵)
                            </button>
                        )}
                        <button
                            onClick={() => setActiveTab('cv')}
                            className={`flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                                activeTab === 'cv' ? 'bg-orange-500 text-white shadow-sm' : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`}
                        >
                            <FileText size={16} /> Rezyume
                        </button>
                    </div>

                    {/* CONTENT AREA */}
                    <div className="flex-1 overflow-hidden relative">
                        
                        {/* 1. CHAT TAB */}
                        {activeTab === 'chat' && (
                            <div className="h-full flex flex-col">
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {messages.map((msg, idx) => (
                                        <div key={idx} className={`flex items-start gap-3 max-w-4xl mx-auto ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary/20 text-primary' : 'bg-indigo-500/20 text-indigo-500'}`}>
                                                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                            </div>
                                            <div className={`flex flex-col gap-1 max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                                <div className={`px-4 py-3 rounded-2xl shadow-sm text-[15px] leading-relaxed ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-card border border-border text-foreground rounded-tl-sm'}`}>
                                                    {msg.role === 'user' ? <p className="whitespace-pre-wrap">{msg.text}</p> : <div className="prose prose-sm dark:prose-invert max-w-none break-words"><ReactMarkdown
                                                        components={{
                                                            code({ node, inline, className, children, ...props }: any) {
                                                                const match = /language-(\w+)/.exec(className || '');
                                                                if (!inline && match && match[1] === 'mermaid') {
                                                                    return <MermaidViewer chart={String(children).replace(/\n$/, '')} />;
                                                                }
                                                                return (
                                                                    <code className={className} {...props}>
                                                                        {children}
                                                                    </code>
                                                                );
                                                            }
                                                        }}
                                                    >{msg.text}</ReactMarkdown></div>}
                                                </div>
                                                {msg.role === 'model' && (
                                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button onClick={() => navigator.clipboard.writeText(msg.text)} className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md" title="Nusxa olish"><Copy size={14} /></button>
                                                        <button onClick={() => handleSaveNote(msg.text)} className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md" title="Konspekt saqlash"><Save size={14} /></button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {isChatLoading && (
                                        <div className="flex items-start gap-3 max-w-4xl mx-auto">
                                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0"><Bot size={16} /></div>
                                            <div className="px-4 py-3 rounded-2xl bg-card border border-border rounded-tl-sm flex items-center gap-2 text-muted-foreground text-sm">
                                                <Loader2 size={16} className="animate-spin" /><span>AI o'ylamoqda...</span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                                <div className="p-4 bg-card border-t border-border">
                                    <div className="max-w-4xl mx-auto flex items-center gap-2 relative">
                                        <button onClick={() => fileInputRef.current?.click()} className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl shrink-0">
                                            <Paperclip size={20} /><input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".txt" className="hidden" />
                                        </button>
                                        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSendMessage()} placeholder="Savolingizni yozing..." className="flex-1 px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 text-foreground" disabled={isChatLoading} />
                                        <button onClick={handleSendMessage} disabled={!inputValue.trim() || isChatLoading} className="p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 shrink-0"><Send size={20} /></button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 2. EXAM TAB */}
                        {activeTab === 'exam' && (
                            <div className="h-full overflow-y-auto p-4 md:p-8">
                                <div className="max-w-3xl mx-auto">
                                    {examState === 'setup' && (
                                        <div className="glass-card border-border p-8 rounded-3xl shadow-xl space-y-6">
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center"><HelpCircle className="text-fuchsia-500 w-6 h-6" /></div>
                                                <div>
                                                    <h2 className="text-2xl font-bold text-foreground">Imtihonni Sozlash</h2>
                                                    <p className="text-sm text-muted-foreground mt-1">Tanlangan faningiz bo'yicha test ishlang va XP oling.</p>
                                                </div>
                                            </div>
                                            <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                                                <p className="text-sm text-muted-foreground flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" /><strong>Tanlangan fan:</strong> {selectedSubjectId ? subjects.find(s => s.id === selectedSubjectId)?.name : 'Tanlanmagan'}</p>
                                                {!selectedSubjectId && <p className="text-xs text-amber-500 mt-2 font-medium">Testni boshlash uchun chap panelda fanni tanlang.</p>}
                                            </div>
                                            <div className="space-y-3">
                                                <label className="block text-xs font-bold text-muted-foreground uppercase ml-1">Savollar Soni</label>
                                                <div className="flex items-center gap-4">
                                                    {[5, 10, 15, 20].map(num => (
                                                        <button key={num} onClick={() => setQuestionCount(num)} className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${questionCount === num ? 'border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400' : 'border-border bg-background hover:border-fuchsia-500/30'}`}>{num} ta</button>
                                                    ))}
                                                </div>
                                            </div>
                                            <Button onClick={handleStartExam} disabled={isExamLoading || !selectedSubjectId} className="w-full py-6 text-lg rounded-xl gap-2 mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                                                {isExamLoading ? <Loader2 className="animate-spin w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                                                {isExamLoading ? 'Imtihon tayyorlanmoqda...' : 'Imtihonni Boshlash'}
                                            </Button>
                                        </div>
                                    )}
                                    {examState === 'testing' && questions.length > 0 && (
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center bg-card p-4 rounded-2xl border">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500 font-bold">{currentQuestionIdx + 1}</div>
                                                    <span className="text-sm font-semibold text-muted-foreground">/ {questions.length} savol</span>
                                                </div>
                                                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-fuchsia-500 transition-all duration-300" style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }} /></div>
                                            </div>
                                            <div className="bg-card p-6 md:p-8 rounded-3xl border shadow-lg">
                                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">{questions[currentQuestionIdx].question}</h3>
                                                <div className="space-y-3">
                                                    {questions[currentQuestionIdx].options.map((opt, idx) => {
                                                        const isSelected = selectedAnswers[currentQuestionIdx] === idx;
                                                        return (
                                                            <button key={idx} onClick={() => setSelectedAnswers(p => ({...p, [currentQuestionIdx]: idx}))} className={`w-full text-left p-4 rounded-2xl border-2 flex items-center gap-4 ${isSelected ? 'border-fuchsia-500 bg-fuchsia-500/5' : 'border-border hover:border-fuchsia-500/30'}`}>
                                                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-fuchsia-500 text-fuchsia-500' : 'border-muted-foreground/30'}`}>{String.fromCharCode(65 + idx)}</div>
                                                                <span className="text-[15px] font-medium">{opt}</span>
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                                <div className="mt-8 flex justify-end">
                                                    <Button onClick={handleNextQuestion} disabled={selectedAnswers[currentQuestionIdx] === undefined} className="gap-2 px-8 py-6 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                                                        {currentQuestionIdx === questions.length - 1 ? 'Yakunlash' : 'Keyingisi'} <ChevronRight className="w-5 h-5" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {examState === 'results' && (
                                        <div className="space-y-8">
                                            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center">
                                                <div className="w-24 h-24 mx-auto bg-card rounded-full shadow-lg flex items-center justify-center mb-6"><Award className={`w-12 h-12 ${getScoreMessage().color}`} /></div>
                                                <h2 className={`text-3xl font-black mb-2 ${getScoreMessage().color}`}>{getScoreMessage().title}</h2>
                                                <p className="text-xl font-medium mb-8">{questions.length} ta savoldan {score} tasiga to'g'ri javob berdingiz.</p>
                                                <div className="inline-flex items-center gap-3 bg-fuchsia-500/10 text-fuchsia-600 px-6 py-3 rounded-2xl font-bold text-lg"><Sparkles className="w-6 h-6" />+{xpEarned} XP ishladingiz!</div>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-bold flex items-center gap-2">Xatolar ustida ishlash</h3>
                                                {questions.map((q, idx) => {
                                                    const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                                                    return (
                                                        <div key={idx} className={`p-6 rounded-2xl border bg-card ${isCorrect ? 'border-green-500/30' : 'border-red-500/30'}`}>
                                                            <div className="flex items-start gap-4">
                                                                <div className="mt-1">{isCorrect ? <CheckCircle2 className="text-green-500" /> : <XCircle className="text-red-500" />}</div>
                                                                <div className="flex-1 space-y-4">
                                                                    <p className="font-bold">{idx + 1}. {q.question}</p>
                                                                    <div className="space-y-2">
                                                                        {q.options.map((opt, optIdx) => {
                                                                            const isAct = q.correctAnswer === optIdx, isUser = selectedAnswers[idx] === optIdx;
                                                                            let cls = "border-border text-muted-foreground";
                                                                            if (isAct) cls = "border-green-500 bg-green-500/10 text-green-700 font-medium";
                                                                            else if (isUser) cls = "border-red-500 bg-red-500/10 text-red-700";
                                                                            return <div key={optIdx} className={`p-3 rounded-xl border flex items-center gap-3 ${cls}`}><div className="w-6 h-6 rounded-full border flex justify-center items-center text-xs">{String.fromCharCode(65 + optIdx)}</div>{opt}</div>
                                                                        })}
                                                                    </div>
                                                                    {!isCorrect && <div className="mt-4 p-4 rounded-xl bg-muted/50 border text-sm"><strong>Tushuntirish:</strong> {q.explanation}</div>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="flex justify-center pt-8"><Button onClick={() => setExamState('setup')} className="px-8 py-4 rounded-xl text-lg">Yangi Imtihon</Button></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* 3. MINDMAP TAB */}
                        {activeTab === 'mindmap' && (
                            <div className="h-full flex flex-col bg-slate-950 dark:bg-slate-950">
                                <div className="shrink-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                                    {isInputCollapsed ? (
                                        <div className="flex items-center gap-3 px-4 py-3 w-full">
                                            <BrainCircuit size={20} className="text-teal-400 shrink-0" />
                                            <p className="text-sm text-slate-400 truncate flex-1">{mindmapNote.substring(0, 80) || "Kontekst ochiq..."}</p>
                                            <button onClick={() => setIsInputCollapsed(false)} className="text-xs text-teal-400 font-semibold flex items-center gap-1"><ChevronDown size={14} /> Tahrirlash</button>
                                        </div>
                                    ) : (
                                        <div className="w-full px-4 py-5 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2.5"><BrainCircuit size={22} className="text-teal-400" /><h1 className="text-lg font-bold text-white">Aqliy Xarita</h1></div>
                                                {svgContent && <button onClick={() => setIsInputCollapsed(true)} className="text-xs text-slate-400 hover:text-white flex items-center gap-1"><ChevronUp size={14} /> Yig'ish</button>}
                                            </div>
                                            <div className="flex gap-3">
                                                <textarea className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:ring-2 focus:ring-teal-500 resize-none" placeholder="Konspekt yoki matn kiriting..." value={mindmapNote} onChange={e => setMindmapNote(e.target.value)} rows={3} />
                                                <Button onClick={handleGenerateMindmap} disabled={isMindmapGenerating || !mindmapNote.trim()} className="self-end bg-teal-600 hover:bg-teal-700 text-white rounded-xl border-none">
                                                    {isMindmapGenerating ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {mindmapError && <div className="p-3 bg-red-500/10 border-red-500/20 text-red-400 m-4 rounded-xl flex gap-3 text-sm"><AlertCircle size={18} />{mindmapError}</div>}
                                <div className="flex-1 min-h-0 relative">
                                    {!svgContent && !isMindmapGenerating && !mindmapError && (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-600"><BrainCircuit size={64} className="opacity-20" /></div>
                                    )}
                                    {isMindmapGenerating && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-teal-400 animate-pulse"><Loader2 size={48} className="animate-spin mb-4" /><p className="text-sm font-bold">Chizilmoqda...</p></div>
                                    )}
                                    {svgContent && (
                                        <TransformWrapper initialScale={0.7} minScale={0.05} maxScale={5} centerOnInit wheel={{ step: 0.08 }} pinch={{ step: 5 }}>
                                            {({ zoomIn, zoomOut, resetTransform }) => (
                                                <React.Fragment>
                                                    <div className="absolute bottom-5 right-5 z-10 flex gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-700 shadow-2xl">
                                                        <button onClick={() => zoomIn()} className="p-2.5 text-slate-300 hover:text-white"><ZoomIn size={18} /></button>
                                                        <button onClick={() => zoomOut()} className="p-2.5 text-slate-300 hover:text-white"><ZoomOut size={18} /></button>
                                                        <button onClick={() => resetTransform()} className="p-2.5 text-slate-300 hover:text-white"><Maximize size={18} /></button>
                                                        <div className="w-px bg-slate-700 mx-0.5" />
                                                        <button onClick={() => setIsFullscreen(true)} className="p-2.5 text-slate-300 hover:text-white"><Fullscreen size={18} /></button>
                                                    </div>
                                                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                                                        <Button variant="secondary" onClick={() => navigator.clipboard.writeText(svgContent)} className="text-xs py-1.5 px-3 bg-slate-800 text-white"><Copy size={14} className="mr-1.5"/> Nusxa</Button>
                                                        <Button variant="secondary" onClick={downloadSvg} className="text-xs py-1.5 px-3 bg-teal-600 text-white border-none"><Download size={14} className="mr-1.5"/> SVG</Button>
                                                    </div>
                                                    <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }} contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div dangerouslySetInnerHTML={{ __html: svgContent }} className="w-full h-full flex items-center justify-center p-8 [&>svg]:max-w-none [&>svg]:h-auto" />
                                                    </TransformComponent>
                                                </React.Fragment>
                                            )}
                                        </TransformWrapper>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* 4. IT INTERVIEW TAB */}
                        {activeTab === 'interview' && (
                            <div className="h-full flex flex-col bg-white dark:bg-gray-900">
                                <div className="flex-none p-4 border-b border-border flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"><Briefcase className="w-5 h-5" /></div>
                                        <div><h2 className="font-semibold text-gray-900 dark:text-white">IT Nihongo - Mock Interview</h2><p className="text-xs text-muted-foreground">AI Recruiter bilan yapon tilida suhbat</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => {
                                                const newTTS = !isTTSActive;
                                                setIsTTSActive(newTTS);
                                                if (!newTTS) window.speechSynthesis?.cancel();
                                            }} 
                                            className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${isTTSActive ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}
                                            title="Ovozli o'qish (TTS)"
                                        >
                                            {isTTSActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                                        </button>
                                        <button 
                                            onClick={() => {
                                                if (confirm("Suhbatni boshidan boshlashni xohlaysizmi?")) {
                                                    setInterviewMsgs([{
                                                        id: Date.now().toString(),
                                                        role: 'assistant',
                                                        content: '本日は面接にお越しいただきありがとうございます。まずは自己紹介をお願いします。',
                                                        timestamp: Date.now()
                                                    }]);
                                                    localStorage.removeItem(INTERVIEW_STORAGE_KEY);
                                                    window.speechSynthesis?.cancel();
                                                }
                                            }}
                                            className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 rounded-lg transition-colors flex items-center justify-center"
                                            title="Suhbatni tozalash"
                                        >
                                            <RefreshCw className="w-4 h-4" />
                                        </button>
                                        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1"></div>
                                        <select 
                                            value={speechLang} 
                                            onChange={e => setSpeechLang(e.target.value)} 
                                            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-none rounded-lg px-2 py-1 outline-none cursor-pointer focus:ring-1 focus:ring-indigo-500 transition-colors"
                                            title="Mikrofon tili"
                                        >
                                            <option value="ja-JP">🇯🇵 Yapon tili</option>
                                            <option value="uz-UZ">🇺🇿 O'zbek tili</option>
                                            <option value="en-US">🇺🇸 Ingliz tili</option>
                                            <option value="ru-RU">🇷🇺 Rus tili</option>
                                        </select>
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-3 w-3"><span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
                                            <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">Recruiter Online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50 dark:bg-gray-900/50">
                                    {interviewMsgs.map(msg => (
                                        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none'}`}>
                                                {msg.role === 'assistant' ? <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed prose-p:my-1"><ReactMarkdown>{msg.content}</ReactMarkdown></div> : <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>}
                                            </div>
                                        </div>
                                    ))}
                                    {isInterviewLoading && <div className="flex justify-start"><div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div><span className="text-xs text-gray-500 ml-2">Recruiter yozmoqda...</span></div></div>}
                                    {interviewError && <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-xl flex items-start gap-3"><AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><p className="text-sm">{interviewError}</p></div>}
                                    <div ref={interviewEndRef} />
                                </div>
                                <div className="flex-none p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 z-10">
                                    <div className="flex items-end gap-2 max-w-4xl mx-auto">
                                        <button onClick={toggleRecording} className={`p-3.5 rounded-xl flex-shrink-0 transition-colors ${isRecording ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse ring-2 ring-red-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'}`}>{isRecording ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}</button>
                                        <div className="flex-1 relative">
                                            <textarea value={interviewInput} onChange={e => setInterviewInput(e.target.value)} onKeyDown={e => {if(e.key==='Enter' && !e.shiftKey){e.preventDefault();handleSendInterviewMsg()}}} placeholder={isRecording ? "Sizni eshityapman..." : "Javobingizni yozing..."} className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 py-3 pl-4 pr-12 text-sm resize-none h-[52px] min-h-[52px] max-h-[150px]" rows={1} />
                                        </div>
                                        <button onClick={handleSendInterviewMsg} disabled={!interviewInput.trim() || isInterviewLoading} className="p-3.5 bg-indigo-600 text-white rounded-xl disabled:opacity-50"><Send className="w-5 h-5" /></button>
                                    </div>
                                    <div className="text-center mt-2"><p className="text-xs text-gray-400">Maslahat: Mikrofonni bosib yapon tilida gapiring. AI xatolaringizni to'g'rilab beradi.</p></div>
                                </div>
                            </div>
                        )}
                        
                        {/* 5. CV CREATOR TAB */}
                        {activeTab === 'cv' && (
                            <CVCreatorTab />
                        )}
                        
                    </div>
                </div>
            </div>
        </AIKeyGuard>
    );
};

export default AIAssistantPage;
