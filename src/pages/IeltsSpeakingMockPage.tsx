import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mic, MicOff, Award, Clock, Sparkles, AlertCircle, ChevronRight, RefreshCw, Volume2, Dices } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { evaluateIeltsSpeakingFullMock, SpeakingMockReport } from '../utils/ai';
import { speakText } from '../utils/audioTts';
import { CAMBRIDGE_IELTS_TOPICS, IeltsSpeakingTopic } from '../data/ieltsSpeakingTopics';

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

export const IeltsSpeakingMockPage: React.FC = () => {
    const navigate = useNavigate();

    // Topic Selection
    const [selectedTopic, setSelectedTopic] = useState<IeltsSpeakingTopic>(() => {
        const randomIndex = Math.floor(Math.random() * CAMBRIDGE_IELTS_TOPICS.length);
        return CAMBRIDGE_IELTS_TOPICS[randomIndex];
    });

    // Steps: 'intro' -> 'part1' -> 'part2_prep' -> 'part2_speech' -> 'part3' -> 'evaluating' -> 'report'
    const [step, setStep] = useState<'intro' | 'part1' | 'part2_prep' | 'part2_speech' | 'part3' | 'evaluating' | 'report'>('intro');

    // Part 1 Questions
    const PART1_QUESTIONS = selectedTopic.part1;
    const [part1Index, setPart1Index] = useState(0);

    // Part 2 Cue Card Topic
    const CUE_CARD_TOPIC = selectedTopic.part2;
    const [prepSeconds, setPrepSeconds] = useState(60);
    const [speechSeconds, setSpeechSeconds] = useState(120);

    // Part 3 Discussion Questions
    const PART3_QUESTIONS = selectedTopic.part3;
    const [part3Index, setPart3Index] = useState(0);

    const handleRandomizeTopic = () => {
        const otherTopics = CAMBRIDGE_IELTS_TOPICS.filter(t => t.id !== selectedTopic.id);
        const random = otherTopics[Math.floor(Math.random() * otherTopics.length)] || CAMBRIDGE_IELTS_TOPICS[0];
        setSelectedTopic(random);
    };

    // STT & Transcripts
    const [transcriptList, setTranscriptList] = useState<{ part: string; question: string; answer: string }[]>([]);
    const [currentAnswerText, setCurrentAnswerText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [report, setReport] = useState<SpeakingMockReport | null>(null);

    const recognitionRef = useRef<any>(null);
    const silenceTimerRef = useRef<any>(null);

    // Prep countdown timer for Part 2
    useEffect(() => {
        let timer: any;
        if (step === 'part2_prep') {
            if (prepSeconds > 0) {
                timer = setTimeout(() => setPrepSeconds(prev => prev - 1), 1000);
            } else {
                setStep('part2_speech');
            }
        }
        return () => clearTimeout(timer);
    }, [step, prepSeconds]);

    // Speech countdown timer for Part 2
    useEffect(() => {
        let timer: any;
        if (step === 'part2_speech') {
            if (speechSeconds > 0) {
                timer = setTimeout(() => setSpeechSeconds(prev => prev - 1), 1000);
            } else {
                handleFinishPart2();
            }
        }
        return () => clearTimeout(timer);
    }, [step, speechSeconds]);

    // Initialize Speech Recognition
    const startListening = () => {
        if (!SpeechRecognition) return alert("Brauzeringiz ovozli yozishni qo'llab-quvvatlamaydi.");
        if (recognitionRef.current) recognitionRef.current.stop();

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);

        recognition.onresult = (event: any) => {
            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = 0; i < event.results.length; i++) {
                const transcriptChunk = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcriptChunk + ' ';
                } else {
                    interimTranscript += transcriptChunk;
                }
            }

            const cleanText = (finalTranscript + interimTranscript).replace(/\s+/g, ' ').trim();
            setCurrentAnswerText(cleanText);

            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
            silenceTimerRef.current = setTimeout(() => {
                try { recognition.stop(); } catch {}
            }, 3000);
        };

        recognitionRef.current = recognition;
        recognition.start();
    };

    const stopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        setIsListening(false);
    };

    // Flow controls
    const handleNextPart1 = () => {
        stopListening();
        const currentQ = PART1_QUESTIONS[part1Index];
        const newRecord = { part: 'Part 1', question: currentQ, answer: currentAnswerText.trim() || "No answer recorded." };
        setTranscriptList(prev => [...prev, newRecord]);
        setCurrentAnswerText('');

        if (part1Index < PART1_QUESTIONS.length - 1) {
            setPart1Index(prev => prev + 1);
        } else {
            setStep('part2_prep');
        }
    };

    const handleFinishPart2 = () => {
        stopListening();
        const newRecord = {
            part: 'Part 2 (Cue Card)',
            question: `${CUE_CARD_TOPIC.title} (${CUE_CARD_TOPIC.bullets.join(', ')})`,
            answer: currentAnswerText.trim() || "No answer recorded."
        };
        setTranscriptList(prev => [...prev, newRecord]);
        setCurrentAnswerText('');
        setStep('part3');
    };

    const handleNextPart3 = () => {
        stopListening();
        const currentQ = PART3_QUESTIONS[part3Index];
        const newRecord = { part: 'Part 3', question: currentQ, answer: currentAnswerText.trim() || "No answer recorded." };
        const updatedList = [...transcriptList, newRecord];
        setTranscriptList(updatedList);
        setCurrentAnswerText('');

        if (part3Index < PART3_QUESTIONS.length - 1) {
            setPart3Index(prev => prev + 1);
        } else {
            triggerFullEvaluation(updatedList);
        }
    };

    const triggerFullEvaluation = async (fullTranscript: { part: string; question: string; answer: string }[]) => {
        setStep('evaluating');
        try {
            const evalReport = await evaluateIeltsSpeakingFullMock(fullTranscript);
            setReport(evalReport);
            setStep('report');
        } catch (err) {
            alert("Examiner baholashida xatolik yuz berdi. Qayta urinib ko'ring.");
            setStep('intro');
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
            {/* Header Navigation */}
            <div className="flex items-center justify-between border-b border-border pb-4">
                <button
                    onClick={() => navigate('/ielts')}
                    className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs rounded-full border border-indigo-500/20">
                        🎙️ Official 3-Part Speaking Simulator
                    </span>
                </div>
            </div>

            {/* STEP 1: INTRO */}
            {step === 'intro' && (
                <div className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-indigo-500/10 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                        <Mic size={40} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-foreground">IELTS Speaking Full Mock Test</h2>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            Haqiqiy imtihon muhitida Part 1, Part 2 (Cue Card + 60s tayyorlanish) va Part 3 bosqichlarini topshiring hamda rasmiy 4 ta mezon bo'yicha Band Score hisobotingizni oling.
                        </p>
                    </div>

                    {/* Active Cambridge Exam Card */}
                    <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 p-4 rounded-2xl text-left flex items-center justify-between gap-3">
                        <div>
                            <span className="text-[10px] font-extrabold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                                {selectedTopic.category} (Cambridge IELTS Test)
                            </span>
                            <h4 className="text-sm font-extrabold text-foreground mt-0.5">
                                Cue Card: "{selectedTopic.part2.title}"
                            </h4>
                        </div>
                        <button
                            onClick={handleRandomizeTopic}
                            className="px-3 py-2 bg-background border border-border rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-1.5 shrink-0 transition-all active:scale-95"
                            title="Boshqa imtihon bileti"
                        >
                            <Dices size={15} className="text-indigo-500" /> Boshqa Bilet 🎲
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-left">
                        <div className="p-3 bg-muted/40 rounded-2xl border border-border/50">
                            <span className="text-xs font-bold text-primary block">Part 1</span>
                            <span className="text-xs text-muted-foreground">4 ta umumiy savol</span>
                        </div>
                        <div className="p-3 bg-muted/40 rounded-2xl border border-border/50">
                            <span className="text-xs font-bold text-indigo-500 block">Part 2</span>
                            <span className="text-xs text-muted-foreground">60s tayyorgarlik + 120s nutq</span>
                        </div>
                        <div className="p-3 bg-muted/40 rounded-2xl border border-border/50">
                            <span className="text-xs font-bold text-purple-500 block">Part 3</span>
                            <span className="text-xs text-muted-foreground">3 ta mantiqiy savol</span>
                        </div>
                    </div>

                    <Button
                        onClick={() => {
                            setStep('part1');
                            speakText(PART1_QUESTIONS[0], 'en-GB');
                        }}
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-indigo-500/20"
                    >
                        Imtihonni Boshlash <ChevronRight className="ml-2" size={20} />
                    </Button>
                </div>
            )}

            {/* STEP 2: PART 1 */}
            {step === 'part1' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                        <span className="text-xs font-black uppercase text-indigo-500 tracking-wider">Part 1: Introduction ({part1Index + 1} / {PART1_QUESTIONS.length})</span>
                        <button onClick={() => speakText(PART1_QUESTIONS[part1Index], 'en-GB')} className="p-2 text-primary hover:bg-primary/10 rounded-xl">
                            <Volume2 size={20} />
                        </button>
                    </div>

                    <div className="text-center space-y-3 py-4">
                        <h3 className="text-2xl font-extrabold text-foreground">{PART1_QUESTIONS[part1Index]}</h3>
                        <p className="text-xs text-muted-foreground">Savolga 2-3 ta mukammal gap bilan javob bering.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-muted/40 rounded-2xl border border-border min-h-24 font-medium text-foreground">
                            {currentAnswerText || <span className="text-muted-foreground italic">Ovozli javobingiz bu yerda ko'rinadi...</span>}
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                onClick={isListening ? stopListening : startListening}
                                variant={isListening ? "destructive" : "default"}
                                className="flex-1 py-3 font-bold rounded-xl"
                            >
                                {isListening ? <><MicOff className="mr-2" size={18} /> To'xtatish</> : <><Mic className="mr-2" size={18} /> Ovozli Javob Berish</>}
                            </Button>

                            <Button onClick={handleNextPart1} className="py-3 px-6 font-bold bg-indigo-600 text-white rounded-xl">
                                Keyingi Savol <ChevronRight className="ml-1" size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: PART 2 PREP (CUE CARD 60S COUNTDOWN) */}
            {step === 'part2_prep' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl max-w-2xl mx-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-amber-500 tracking-wider">Part 2: Cue Card Preparation</span>
                        <div className="flex items-center gap-2 text-amber-500 font-extrabold text-lg bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                            <Clock size={20} /> {prepSeconds} soniya
                        </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl space-y-4 text-left">
                        <h3 className="text-xl font-black text-foreground">{CUE_CARD_TOPIC.title}</h3>
                        <p className="text-xs text-muted-foreground font-bold uppercase">Siz quyidagilar haqida gapirishingiz kerak:</p>
                        <ul className="space-y-2 text-sm text-foreground font-medium">
                            {CUE_CARD_TOPIC.bullets.map((b, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-xs text-muted-foreground">Eslatmalaringizni o'ylang. 60 soniyadan so'ng nutq taymeri boshlanadi.</p>

                    <Button
                        onClick={() => setStep('part2_speech')}
                        className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl"
                    >
                        Tayyorman — Nutqni Boshlash (120s)
                    </Button>
                </div>
            )}

            {/* STEP 4: PART 2 SPEECH (120S SPEECH COUNTDOWN) */}
            {step === 'part2_speech' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-amber-500 tracking-wider">Part 2: Long Turn Speech</span>
                        <div className="flex items-center gap-2 text-red-500 font-extrabold text-lg bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                            <Clock size={20} /> {speechSeconds} soniya qoldi
                        </div>
                    </div>

                    <div className="p-4 bg-muted/40 border border-border rounded-2xl text-left">
                        <h4 className="font-bold text-sm text-foreground mb-1">{CUE_CARD_TOPIC.title}</h4>
                        <p className="text-xs text-muted-foreground">{CUE_CARD_TOPIC.bullets.join(" • ")}</p>
                    </div>

                    <div className="p-4 bg-muted/40 rounded-2xl border border-border min-h-32 font-medium text-foreground">
                        {currentAnswerText || <span className="text-muted-foreground italic">Gapirishni boshlang. Javobingiz yozib olinmoqda...</span>}
                    </div>

                    <div className="flex gap-3">
                        <Button
                            onClick={isListening ? stopListening : startListening}
                            variant={isListening ? "destructive" : "default"}
                            className="flex-1 py-3 font-bold rounded-xl"
                        >
                            {isListening ? <><MicOff className="mr-2" size={18} /> To'xtatish</> : <><Mic className="mr-2" size={18} /> Mikrofonni Yoqish</>}
                        </Button>
                        <Button onClick={handleFinishPart2} className="py-3 px-6 font-bold bg-amber-500 text-white rounded-xl">
                            Part 2 Yakunlash <ChevronRight className="ml-1" size={18} />
                        </Button>
                    </div>
                </div>
            )}

            {/* STEP 5: PART 3 */}
            {step === 'part3' && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                        <span className="text-xs font-black uppercase text-purple-500 tracking-wider">Part 3: Discussion ({part3Index + 1} / {PART3_QUESTIONS.length})</span>
                        <button onClick={() => speakText(PART3_QUESTIONS[part3Index], 'en-GB')} className="p-2 text-primary hover:bg-primary/10 rounded-xl">
                            <Volume2 size={20} />
                        </button>
                    </div>

                    <div className="text-center space-y-3 py-4">
                        <h3 className="text-2xl font-extrabold text-foreground">{PART3_QUESTIONS[part3Index]}</h3>
                        <p className="text-xs text-muted-foreground">PREP usuli (Point, Reason, Example) bo'yicha batafsil fikringizni ayting.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-muted/40 rounded-2xl border border-border min-h-24 font-medium text-foreground">
                            {currentAnswerText || <span className="text-muted-foreground italic">Ovozli javobingiz bu yerda ko'rinadi...</span>}
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                onClick={isListening ? stopListening : startListening}
                                variant={isListening ? "destructive" : "default"}
                                className="flex-1 py-3 font-bold rounded-xl"
                            >
                                {isListening ? <><MicOff className="mr-2" size={18} /> To'xtatish</> : <><Mic className="mr-2" size={18} /> Ovozli Javob Berish</>}
                            </Button>

                            <Button onClick={handleNextPart3} className="py-3 px-6 font-bold bg-purple-600 text-white rounded-xl">
                                {part3Index < PART3_QUESTIONS.length - 1 ? 'Keyingi Savol' : 'Testni Yakunlash'} <ChevronRight className="ml-1" size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 6: EVALUATING */}
            {step === 'evaluating' && (
                <div className="bg-card border border-border rounded-3xl p-12 text-center space-y-6 shadow-xl max-w-lg mx-auto">
                    <div className="w-20 h-20 bg-indigo-500/10 text-indigo-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <Sparkles size={40} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground">IELTS Examiner Tahlil Qilmoqda...</h3>
                        <p className="text-xs text-muted-foreground mt-2">
                            Fluency, Lexical Resource, Grammar va Pronunciation ko'rsatkichlaringiz hisoblanmoqda.
                        </p>
                    </div>
                </div>
            )}

            {/* STEP 7: FINAL EXAMINER REPORT */}
            {step === 'report' && report && (
                <div className="bg-card border border-border rounded-3xl p-8 space-y-8 shadow-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-6">
                        <div>
                            <span className="text-xs font-black uppercase text-indigo-500">Rasmiy IELTS Examiner Hisoboti</span>
                            <h2 className="text-3xl font-extrabold text-foreground mt-1">Speaking Mock Natijangiz</h2>
                        </div>
                        <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-2xl shadow-lg">
                            <Award size={36} />
                            <div>
                                <span className="text-xs font-bold uppercase opacity-80 block">Umumiy Band Score</span>
                                <span className="text-4xl font-black">{report.overallBand.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>

                    {/* 4 Criteria Scores */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-muted/40 rounded-2xl border border-border space-y-1">
                            <span className="text-xs text-muted-foreground font-bold uppercase block">Fluency (FC)</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{report.fluencyScore.toFixed(1)}</span>
                            <p className="text-xs text-muted-foreground">{report.fluencyFeedback}</p>
                        </div>
                        <div className="p-4 bg-muted/40 rounded-2xl border border-border space-y-1">
                            <span className="text-xs text-muted-foreground font-bold uppercase block">Vocabulary (LR)</span>
                            <span className="text-2xl font-black text-purple-600 dark:text-purple-400">{report.lexicalResourceScore.toFixed(1)}</span>
                            <p className="text-xs text-muted-foreground">{report.lexicalResourceFeedback}</p>
                        </div>
                        <div className="p-4 bg-muted/40 rounded-2xl border border-border space-y-1">
                            <span className="text-xs text-muted-foreground font-bold uppercase block">Grammar (GRA)</span>
                            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{report.grammarScore.toFixed(1)}</span>
                            <p className="text-xs text-muted-foreground">{report.grammarFeedback}</p>
                        </div>
                        <div className="p-4 bg-muted/40 rounded-2xl border border-border space-y-1">
                            <span className="text-xs text-muted-foreground font-bold uppercase block">Pronunciation (P)</span>
                            <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{report.pronunciationScore.toFixed(1)}</span>
                            <p className="text-xs text-muted-foreground">{report.pronunciationFeedback}</p>
                        </div>
                    </div>

                    {/* Grammar & Vocab Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {report.grammarErrors.length > 0 && (
                            <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl space-y-3">
                                <h4 className="font-bold text-sm text-red-500 flex items-center gap-2">
                                    <AlertCircle size={16} /> Grammatik Xatolar Tahlili:
                                </h4>
                                <div className="space-y-2">
                                    {report.grammarErrors.map((err, i) => (
                                        <div key={i} className="text-xs space-y-1 p-2.5 bg-background/50 rounded-xl border border-border/50">
                                            <p className="text-red-400 line-through">"{err.original}"</p>
                                            <p className="text-emerald-500 font-bold">➔ "{err.corrected}"</p>
                                            <p className="text-muted-foreground text-[11px]">{err.explanation}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {report.advancedVocabSuggestions.length > 0 && (
                            <div className="p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-3">
                                <h4 className="font-bold text-sm text-indigo-500 flex items-center gap-2">
                                    <Sparkles size={16} /> Band 8.0 So'zlar Almashtiruvi:
                                </h4>
                                <div className="space-y-2">
                                    {report.advancedVocabSuggestions.map((v, i) => (
                                        <div key={i} className="text-xs flex items-center justify-between p-2.5 bg-background/50 rounded-xl border border-border/50">
                                            <span className="text-muted-foreground">"{v.original}"</span>
                                            <span className="font-bold text-indigo-500">➔ "{v.band8Alternative}"</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Button onClick={() => setStep('intro')} className="w-full py-4 font-bold rounded-2xl">
                        <RefreshCw className="mr-2" size={18} /> Qayta Test Topshirish
                    </Button>
                </div>
            )}
        </div>
    );
};

export default IeltsSpeakingMockPage;
