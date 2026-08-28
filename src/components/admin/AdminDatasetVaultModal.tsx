import React, { useState, useEffect } from 'react';
import { 
    X, Download, Send, RefreshCw, Database, Mic, AlertTriangle, 
    CheckCircle2, Lock, Flame, BarChart3, Clock, Sparkles, Calendar, Layers 
} from 'lucide-react';
import JSZip from 'jszip';
import { TelegramDatasetService, DailySpeechSummary } from '../../services/TelegramDatasetService';
import { toast } from '../../hooks/use-toast';

interface AdminDatasetVaultModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type PeriodFilter = 'TODAY' | 'YESTERDAY' | '7DAYS' | 'ALL' | 'CUSTOM';

export const AdminDatasetVaultModal: React.FC<AdminDatasetVaultModalProps> = ({
    isOpen,
    onClose
}) => {
    const [summary, setSummary] = useState<DailySpeechSummary | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isExportingZip, setIsExportingZip] = useState(false);
    const [isSendingTelegram, setIsSendingTelegram] = useState(false);

    // Period state
    const [period, setPeriod] = useState<PeriodFilter>('TODAY');
    const [customDate, setCustomDate] = useState<string>(new Date().toISOString().split('T')[0]);

    // Telegram Settings
    const [botToken, setBotToken] = useState('');
    const [chatId, setChatId] = useState('');
    const [isConfigSaved, setIsConfigSaved] = useState(false);

    const resolveTargetDate = (p: PeriodFilter, cDate: string): string => {
        if (p === 'ALL') return 'ALL';
        if (p === '7DAYS') return '7DAYS';
        if (p === 'YESTERDAY') {
            const y = new Date(Date.now() - 24 * 60 * 60 * 1000);
            return y.toISOString().split('T')[0];
        }
        if (p === 'CUSTOM') return cDate;
        return new Date().toISOString().split('T')[0];
    };

    const loadData = async (targetPeriod: PeriodFilter = period, targetCustomDate: string = customDate) => {
        setIsLoading(true);
        try {
            const queryDate = resolveTargetDate(targetPeriod, targetCustomDate);
            const data = await TelegramDatasetService.getDailySummary(queryDate);
            setSummary(data);

            const config = TelegramDatasetService.getStoredConfig();
            setBotToken(config.botToken);
            setChatId(config.chatId);
        } catch (err) {
            console.error('Failed to load dataset summary:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            loadData(period, customDate);
        }
    }, [isOpen, period, customDate]);

    const handlePeriodChange = (newPeriod: PeriodFilter) => {
        setPeriod(newPeriod);
    };

    const handleSaveTelegramConfig = (e: React.FormEvent) => {
        e.preventDefault();
        TelegramDatasetService.saveConfig(botToken, chatId);
        setIsConfigSaved(true);
        setTimeout(() => setIsConfigSaved(false), 2500);
        toast({
            title: '✅ Maxfiy Sozlamalar Saqlandi',
            description: "Telegram Bot Token va Chat ID saqlandi."
        });
    };

    const handleSendTelegramNow = async () => {
        if (!summary) return;
        setIsSendingTelegram(true);
        try {
            const res = await TelegramDatasetService.sendDailyReportToTelegram(summary);
            if (res.success) {
                toast({
                    title: '✈️ Telegramga Yuborildi',
                    description: res.message
                });
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Xatolik',
                    description: res.message
                });
            }
        } catch (err: any) {
            toast({
                variant: 'destructive',
                title: 'Yuborishda xatolik',
                description: err.message
            });
        } finally {
            setIsSendingTelegram(false);
        }
    };

    const handleDownloadZipDataset = async () => {
        if (!summary || summary.sessions.length === 0) {
            toast({
                title: 'Dataset bo\'sh',
                description: 'Tanlangan muddat uchun ovozli suhbatlar topilmadi. "Barcha Datasetlar" tugmasini tanlab ko\'ring.'
            });
            return;
        }

        setIsExportingZip(true);
        try {
            const zip = new JSZip();

            // 1. Build metadata.jsonl for ML training pipelines (Hugging Face / PyTorch / Whisper fine-tuning standard)
            // PRIVACY STRICT: user emails and full names are completely excluded.
            const jsonlLines = summary.sessions.map((s, index) => {
                const fullText = s.transcript.map(t => `${t.role === 'user' ? 'User' : 'AI'}: ${t.content}`).join('\n');
                const userOnlyText = s.transcript.filter(t => t.role === 'user').map(t => t.content).join(' ');
                
                return JSON.stringify({
                    session_id: s.id,
                    index: index + 1,
                    anonymous_user_id: s.anonymousUserId,
                    created_at: s.createdAt,
                    language: s.language,
                    topic: s.topic,
                    duration_seconds: s.durationSeconds,
                    score: s.score,
                    turn_count: s.transcript.length,
                    user_speech_text: userOnlyText,
                    full_text: fullText,
                    full_dialogue: s.transcript
                });
            }).join('\n');

            zip.file('metadata.jsonl', jsonlLines);

            // 2. Human-readable text archive (Clean & Beautiful)
            let humanReadableText = `================================================================================\n`;
            humanReadableText += `NIHON TALK SPEECH DATASET ARCHIVE\n`;
            humanReadableText += `Export Timestamp: ${new Date().toISOString()}\n`;
            humanReadableText += `Dataset Filter: ${summary.date}\n`;
            humanReadableText += `Total Sessions: ${summary.totalSessions} | Total Duration: ${summary.totalDurationMinutes} min | Active Users: ${summary.activeUsersCount}\n`;
            humanReadableText += `PRIVACY NOTICE: All user emails and PII have been anonymized for AI Model Training.\n`;
            humanReadableText += `================================================================================\n\n`;

            summary.sessions.forEach((s, idx) => {
                humanReadableText += `--------------------------------------------------------------------------------\n`;
                humanReadableText += `[SESSION #${idx + 1}] ID: ${s.id}\n`;
                humanReadableText += `ANONYMOUS USER: ${s.anonymousUserId} | CREATED AT: ${s.createdAt}\n`;
                humanReadableText += `LANGUAGE: ${s.language.toUpperCase()} | TOPIC: ${s.topic} | DURATION: ${Math.round(s.durationSeconds)}s | SCORE: ${s.score}%\n`;
                humanReadableText += `--------------------------------------------------------------------------------\n`;
                if (s.transcript && s.transcript.length > 0) {
                    s.transcript.forEach(t => {
                        humanReadableText += `${t.role === 'user' ? '👤 USER' : '🤖 AI'}: ${t.content}\n`;
                    });
                } else {
                    humanReadableText += `(Bo'sh transkript / Faqat ovozli sessiya)\n`;
                }
                humanReadableText += `\n`;
            });

            zip.file('transcripts.txt', humanReadableText);

            // 3. Sanitized Summary JSON
            const sanitizedSummary = {
                date: summary.date,
                totalSessions: summary.totalSessions,
                totalDurationMinutes: summary.totalDurationMinutes,
                activeUsersCount: summary.activeUsersCount,
                topTopics: summary.topTopics,
                topMistakes: summary.topMistakes,
                sessions: summary.sessions.map(s => ({
                    id: s.id,
                    anonymousUserId: s.anonymousUserId,
                    language: s.language,
                    topic: s.topic,
                    durationSeconds: s.durationSeconds,
                    score: s.score,
                    createdAt: s.createdAt,
                    turnCount: s.transcript.length
                }))
            };
            zip.file('summary.json', JSON.stringify(sanitizedSummary, null, 2));

            // 4. Audio folder (if any recorded blob URLs exist in session)
            const audioFolder = zip.folder('audios');
            for (const s of summary.sessions) {
                if (s.audioUrl && (s.audioUrl.startsWith('blob:') || s.audioUrl.startsWith('http'))) {
                    try {
                        const response = await fetch(s.audioUrl);
                        const blob = await response.blob();
                        audioFolder?.file(`session_${s.id}.webm`, blob);
                    } catch (fetchErr) {
                        console.warn(`Audio fetch skipped for session ${s.id}:`, fetchErr);
                    }
                }
            }

            // Generate zip file and trigger browser download
            const content = await zip.generateAsync({ type: 'blob' });
            const downloadUrl = URL.createObjectURL(content);
            const a = document.createElement('a');
            a.href = downloadUrl;
            const filenameDate = summary.date.replace(/[^a-zA-Z0-9_-]/g, '_');
            a.download = `dataset_${filenameDate}.zip`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);

            toast({
                title: '📦 Dataset Yuklandi',
                description: `dataset_${filenameDate}.zip fayli muvaffaqiyatli saqlandi! (${summary.totalSessions} ta suhbat)`
            });
        } catch (err: any) {
            console.error('ZIP generation error:', err);
            toast({
                variant: 'destructive',
                title: 'Eksportda xatolik',
                description: err.message || 'ZIP yaratishda xatolik yuz berdi.'
            });
        } finally {
            setIsExportingZip(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
            <div className="bg-card border border-border shadow-2xl rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-5 border-b border-border bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-500/20 border border-indigo-500/30 rounded-2xl text-indigo-400">
                            <Lock size={20} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-black tracking-tight">AI Speech Dataset & Voice Vault</h2>
                                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                                    SECRET ADMIN PORTAL
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Ovozli suhbatlar, transkriptlar, xatolar tahlili va model train qilish arxivi (Anonim & Xavfsiz)
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl text-muted-foreground hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Filter Toolbar */}
                <div className="px-6 py-3 bg-secondary/30 border-b border-border flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] font-bold text-muted-foreground mr-1 flex items-center gap-1">
                            <Calendar size={13} /> Davr:
                        </span>
                        <button
                            onClick={() => handlePeriodChange('TODAY')}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                period === 'TODAY' 
                                    ? 'bg-indigo-600 text-white shadow-xs' 
                                    : 'bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            Bugun
                        </button>
                        <button
                            onClick={() => handlePeriodChange('YESTERDAY')}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                period === 'YESTERDAY' 
                                    ? 'bg-indigo-600 text-white shadow-xs' 
                                    : 'bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            Kecha
                        </button>
                        <button
                            onClick={() => handlePeriodChange('7DAYS')}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                period === '7DAYS' 
                                    ? 'bg-indigo-600 text-white shadow-xs' 
                                    : 'bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            Oxirgi 7 kun
                        </button>
                        <button
                            onClick={() => handlePeriodChange('ALL')}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                period === 'ALL' 
                                    ? 'bg-emerald-600 text-white shadow-xs' 
                                    : 'bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <Layers size={12} />
                            Barcha Datasetlar
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="date"
                            value={customDate}
                            onChange={(e) => {
                                setCustomDate(e.target.value);
                                setPeriod('CUSTOM');
                            }}
                            className="px-2.5 py-1 text-xs rounded-xl bg-background border border-border focus:border-primary outline-none text-foreground font-medium"
                        />
                        <button
                            onClick={() => loadData(period, customDate)}
                            disabled={isLoading}
                            className="p-1.5 rounded-xl bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                            title="Yangilash"
                        >
                            <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
                        </button>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1 text-foreground">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
                            <RefreshCw size={24} className="animate-spin text-primary" />
                            <p className="text-xs font-semibold">Ovozli ma'lumotlar tahlili yuklanmoqda...</p>
                        </div>
                    ) : (
                        <>
                    {/* Top Metric Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-4 rounded-2xl bg-secondary/50 border border-border space-y-1">
                            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Mic size={14} className="text-indigo-400" />
                                <span>Suhbatlar</span>
                            </div>
                            <div className="text-2xl font-black text-foreground">
                                {summary?.totalSessions || 0} ta
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-secondary/50 border border-border space-y-1">
                            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Clock size={14} className="text-emerald-400" />
                                <span>Umumiy Vaqt</span>
                            </div>
                            <div className="text-2xl font-black text-foreground">
                                {summary?.totalDurationMinutes || 0} daq
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-secondary/50 border border-border space-y-1">
                            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Flame size={14} className="text-amber-400" />
                                <span>Faol O'quvchilar</span>
                            </div>
                            <div className="text-2xl font-black text-foreground">
                                {summary?.activeUsersCount || 0} nafar
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-secondary/50 border border-border space-y-1">
                            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Database size={14} className="text-purple-400" />
                                <span>Filtr / Sana</span>
                            </div>
                            <div className="text-sm font-bold text-foreground pt-1 truncate">
                                {period === 'ALL' ? 'Barchasi (All Time)' : period === '7DAYS' ? 'Oxirgi 7 kun' : summary?.date || 'Bugun'}
                            </div>
                        </div>
                    </div>

                    {summary?.totalSessions === 0 && (
                        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs flex items-center justify-between flex-wrap gap-2">
                            <span>ℹ️ Tanlangan sana uchun suhbatlar topilmadi. Barcha mavjud suhbatlarni ko'rish uchun <b>"Barcha Datasetlar"</b> tugmasini bosing.</span>
                            <button
                                onClick={() => handlePeriodChange('ALL')}
                                className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-bold text-xs cursor-pointer shadow-xs"
                            >
                                Barchasini Ko'rish
                            </button>
                        </div>
                    )}

                    {/* Deep Breakdown: Top Topics & Top Grammar Mistakes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Top Topics */}
                        <div className="p-4 rounded-2xl bg-card border border-border shadow-sm space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                    <BarChart3 size={14} className="text-indigo-400" />
                                    <span>Eng Ko'p Gaplashilgan Mavzular</span>
                                </h3>
                                <span className="text-[10px] text-muted-foreground">Top 5</span>
                            </div>
                            
                            {summary?.topTopics && summary.topTopics.length > 0 ? (
                                <div className="space-y-2">
                                    {summary.topTopics.map((t, i) => (
                                        <div key={i} className="flex items-center justify-between text-xs p-2 rounded-xl bg-secondary/30">
                                            <span className="font-semibold truncate max-w-[200px]">{i + 1}. {t.topic}</span>
                                            <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-bold">{t.count} ta</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-xs text-muted-foreground text-center py-6">
                                    Tanlangan muddatda mavzular qayd etilmadi.
                                </div>
                            )}
                        </div>

                        {/* Top Grammar Mistakes */}
                        <div className="p-4 rounded-2xl bg-card border border-border shadow-sm space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                    <AlertTriangle size={14} className="text-rose-400" />
                                    <span>Ko'p Uchragan Xatolar</span>
                                </h3>
                                <span className="text-[10px] text-muted-foreground">Grammar Log</span>
                            </div>

                            {summary?.topMistakes && summary.topMistakes.length > 0 ? (
                                <div className="space-y-2">
                                    {summary.topMistakes.map((m, i) => (
                                        <div key={i} className="text-xs p-2 rounded-xl bg-rose-500/5 border border-rose-500/15 space-y-0.5">
                                            <div className="line-through text-rose-500 text-[11px]">{m.mistake}</div>
                                            <div className="font-bold text-emerald-500 flex items-center justify-between">
                                                <span>➔ {m.correction}</span>
                                                <span className="text-[10px] text-muted-foreground">({m.count}x)</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-xs text-muted-foreground text-center py-6">
                                    Tanlangan muddat uchun grammatik xatolar qayd etilmadi.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Telegram Config & 22:00 Dispatch Section */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent border border-indigo-500/20 space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div>
                                <h4 className="text-sm font-bold flex items-center gap-2 text-foreground">
                                    <Send size={16} className="text-indigo-400" />
                                    <span>Telegram Yopiq Kanalga Kunlik Yuborish (22:00)</span>
                                </h4>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    Suhbat transkriptlari va kunlik tahliliy hisobotni Telegram yopiq guruhga yuborish
                                </p>
                            </div>
                            <button
                                onClick={handleSendTelegramNow}
                                disabled={isSendingTelegram || !botToken || !chatId}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 disabled:opacity-50 flex items-center gap-2 transition-all cursor-pointer"
                            >
                                {isSendingTelegram ? <RefreshCw size={14} className="animate-spin" /> : <Send size={14} />}
                                <span>Hozir Telegramga Yuborish</span>
                            </button>
                        </div>

                        <form onSubmit={handleSaveTelegramConfig} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div>
                                <label className="text-[11px] font-bold text-muted-foreground block mb-1">
                                    Telegram Bot Token:
                                </label>
                                <input
                                    type="password"
                                    placeholder="7123456789:AAH..."
                                    value={botToken}
                                    onChange={(e) => setBotToken(e.target.value)}
                                    className="w-full px-3 py-2 text-xs rounded-xl bg-background border border-border focus:border-primary outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[11px] font-bold text-muted-foreground block mb-1">
                                    Yopiq Kanal / Guruh Chat ID:
                                </label>
                                <input
                                    type="text"
                                    placeholder="-1001234567890"
                                    value={chatId}
                                    onChange={(e) => setChatId(e.target.value)}
                                    className="w-full px-3 py-2 text-xs rounded-xl bg-background border border-border focus:border-primary outline-none"
                                />
                            </div>

                            <div className="flex items-end">
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-secondary hover:bg-secondary/80 border border-border text-foreground rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                >
                                    {isConfigSaved ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Database size={14} />}
                                    <span>{isConfigSaved ? 'Saqlandi!' : 'Sozlamani Saqlash'}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    </>
                    )}
                </div>

                {/* Footer Action */}
                <div className="p-4 border-t border-border bg-card/80 flex items-center justify-between gap-3 flex-wrap">
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Sparkles size={14} className="text-indigo-400 shrink-0" />
                        <span>Fayl arxivi: <code>metadata.jsonl</code> + <code>transcripts.txt</code> (Privacy & AI Train Ready)</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground border border-border cursor-pointer transition-colors"
                        >
                            Yopish
                        </button>

                        <button
                            onClick={handleDownloadZipDataset}
                            disabled={isExportingZip || (summary?.totalSessions || 0) === 0}
                            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-md shadow-emerald-600/30 flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                        >
                            {isExportingZip ? <RefreshCw size={14} className="animate-spin" /> : <Download size={14} />}
                            <span>📦 Datasetni Yuklab Olish (.ZIP) ({summary?.totalSessions || 0} ta)</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
