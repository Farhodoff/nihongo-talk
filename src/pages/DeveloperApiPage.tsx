import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Terminal, Copy, Check, Send, ArrowLeft
} from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { KaizenAI } from '../sdk/kaizen-sdk';
import { AppLogo } from '../components/AppLogo';

const DeveloperApiPage: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'ielts' | 'flashcards' | 'srs'>('ielts');
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    // Playground States
    const [essayText, setEssayText] = useState("Technology has transformed modern education by making learning accessible from anywhere. However, some argue that it reduces real-time interpersonal communication.");
    const [fcTopic, setFcTopic] = useState("Japanese JLPT N3 Travel Vocabulary");
    const [srsQuality, setSrsQuality] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState<any>(null);

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://kaizen-ai.uz';

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedCode(id);
        toast({ title: "Nusxa olindi! 📋", description: "Kod buferga muvaffaqiyatli saqlandi." });
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const runPlayground = async () => {
        setIsLoading(true);
        setApiResponse(null);
        try {
            const client = new KaizenAI({ baseUrl });
            let res;
            if (activeTab === 'ielts') {
                res = await client.ielts.evaluateEssay({ essay: essayText, taskType: 'task2' });
            } else if (activeTab === 'flashcards') {
                res = await client.flashcards.generate({ topic: fcTopic, count: 3 });
            } else if (activeTab === 'srs') {
                res = await client.srs.calculateNextReview({ quality: srsQuality, repetitions: 1, interval: 1, easeFactor: 2.5 });
            }
            setApiResponse(res);
            toast({ title: "✅ So'rov muvaffaqiyatli bajarildi!" });
        } catch (e: any) {
            console.error(e);
            setApiResponse({ error: e.message || 'API request failed' });
            toast({ title: "Xatolik", description: e.message, variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };

    const getCurlSnippet = () => {
        if (activeTab === 'ielts') {
            return `curl -X POST "${baseUrl}/api/v1/ielts-evaluate" \\
  -H "Content-Type: application/json" \\
  -d '{
    "essay": "${essayText.replace(/"/g, '\\"')}",
    "taskType": "task2"
  }'`;
        }
        if (activeTab === 'flashcards') {
            return `curl -X POST "${baseUrl}/api/v1/flashcards-generate" \\
  -H "Content-Type: application/json" \\
  -d '{
    "topic": "${fcTopic}",
    "count": 5
  }'`;
        }
        return `curl -X POST "${baseUrl}/api/v1/srs" \\
  -H "Content-Type: application/json" \\
  -d '{
    "quality": ${srsQuality},
    "repetitions": 1,
    "interval": 1,
    "easeFactor": 2.5
  }'`;
    };

    const getJsSnippet = () => {
        if (activeTab === 'ielts') {
            return `// 1. Fetch orqali to'g'ridan-to'g'ri chaqirish
const response = await fetch("${baseUrl}/api/v1/ielts-evaluate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    essay: "${essayText.substring(0, 60)}...",
    taskType: "task2"
  })
});
const data = await response.json();
console.log("Overall Band:", data.data.overallBand);`;
        }
        if (activeTab === 'flashcards') {
            return `const response = await fetch("${baseUrl}/api/v1/flashcards-generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    topic: "${fcTopic}",
    count: 5
  })
});
const { data } = await response.json();
console.log("Generated Cards:", data);`;
        }
        return `const response = await fetch("${baseUrl}/api/v1/srs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ quality: ${srsQuality}, repetitions: 1, interval: 1, easeFactor: 2.5 })
});
const { data } = await response.json();
console.log("Next Review Date:", data.nextReviewDate);`;
    };

    const getPythonSnippet = () => {
        if (activeTab === 'ielts') {
            return `import requests

url = "${baseUrl}/api/v1/ielts-evaluate"
payload = {
    "essay": "${essayText.substring(0, 60)}...",
    "taskType": "task2"
}
response = requests.post(url, json=payload)
data = response.json()
print("IELTS Band:", data['data']['overallBand'])`;
        }
        return `import requests

url = "${baseUrl}/api/v1/flashcards-generate"
payload = {
    "topic": "${fcTopic}",
    "count": 5
}
response = requests.post(url, json=payload)
print(response.json())`;
    };

    return (
        <div className="min-h-screen bg-background text-foreground pb-12 animate-in fade-in duration-300">
            {/* Top Navbar */}
            <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-8 py-3 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title="Orqaga"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <AppLogo size="sm" />
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate('/')}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                        Asosiy Sahifa
                    </button>
                    <button
                        onClick={() => navigate('/auth')}
                        className="px-4 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-black shadow-xs hover:scale-102 transition-all"
                    >
                        Kirish / Ro'yxat
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-border">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                            <Terminal size={14} />
                            Kaizen AI Developer Suite & Public API
                        </div>
                        <h1 className="text-3xl font-black tracking-tight text-foreground">
                            Dasturchilar Uchun Ochiq API & SDK
                        </h1>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">
                            Istalgan tashqi loyihangizdan (Telegram bot, Mobil ilova, React/Next.js, Python) Kaizen AI imkoniyatlarini chaqiring.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            CORS: Barcha domenlarga ochiq (*)
                        </span>
                    </div>
                </div>

            {/* Quick Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { title: "🎓 IELTS Examiner API", desc: "Esse baholash, 4 ta mezon va takomillashtirilgan versiya.", path: "/api/v1/ielts-evaluate" },
                    { title: "🎴 Flashcard Generator API", desc: "Mavzu bo'yicha avtomatik so'z va kartochkalar yaratish.", path: "/api/v1/flashcards-generate" },
                    { title: "🧠 SM-2 SRS Algorithm API", desc: "Unutish egri chizig'iga mos interval takrorlash hisoblash.", path: "/api/v1/srs" },
                ].map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-card border border-border space-y-2 shadow-xs">
                        <div className="font-extrabold text-sm text-foreground">{item.title}</div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                        <div className="font-mono text-[11px] text-primary pt-1">{item.path}</div>
                    </div>
                ))}
            </div>

            {/* Main Interactive Playground & Code Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: API Selector & Playground */}
                <div className="lg:col-span-5 space-y-5">
                    <div className="bg-card rounded-2xl border border-border p-5 space-y-4 shadow-xs">
                        <div className="flex items-center justify-between">
                            <span className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground">
                                1. ENDPOINT TANLASH
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <button
                                onClick={() => { setActiveTab('ielts'); setApiResponse(null); }}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                                    activeTab === 'ielts' ? 'bg-primary text-primary-foreground shadow-xs' : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                                }`}
                            >
                                IELTS AI
                            </button>
                            <button
                                onClick={() => { setActiveTab('flashcards'); setApiResponse(null); }}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                                    activeTab === 'flashcards' ? 'bg-primary text-primary-foreground shadow-xs' : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                                }`}
                            >
                                Fleshkartalar
                            </button>
                            <button
                                onClick={() => { setActiveTab('srs'); setApiResponse(null); }}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                                    activeTab === 'srs' ? 'bg-primary text-primary-foreground shadow-xs' : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                                }`}
                            >
                                SM-2 SRS
                            </button>
                        </div>

                        {/* Inputs based on endpoint */}
                        <div className="space-y-3 pt-2">
                            {activeTab === 'ielts' && (
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                        Test Esse Matni (JSON payload: "essay"):
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={essayText}
                                        onChange={(e) => setEssayText(e.target.value)}
                                        className="w-full p-3 rounded-xl bg-muted/50 border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    />
                                </div>
                            )}

                            {activeTab === 'flashcards' && (
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                        Generatsiya Mavzusi ("topic"):
                                    </label>
                                    <input
                                        type="text"
                                        value={fcTopic}
                                        onChange={(e) => setFcTopic(e.target.value)}
                                        className="w-full p-3 rounded-xl bg-muted/50 border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    />
                                </div>
                            )}

                            {activeTab === 'srs' && (
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                                        Eslab Qolish Sifati ("quality" 0 dan 5 gacha): {srsQuality}
                                    </label>
                                    <input
                                        type="range"
                                        min={0}
                                        max={5}
                                        value={srsQuality}
                                        onChange={(e) => setSrsQuality(Number(e.target.value))}
                                        className="w-full accent-primary"
                                    />
                                </div>
                            )}

                            <button
                                onClick={runPlayground}
                                disabled={isLoading}
                                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-black text-xs shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={14} className={isLoading ? "animate-spin" : ""} />
                                <span>{isLoading ? "Yuborilmoqda..." : "Jonli So'rov Yuborish (Test Request)"}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Code Snippets & Response */}
                <div className="lg:col-span-7 space-y-4">
                    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xs">
                        <div className="p-3 bg-muted/50 border-b border-border flex items-center justify-between">
                            <span className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground">
                                KOD NAMUNALARI (SNIPPETS)
                            </span>
                            <button
                                onClick={() => handleCopy(getCurlSnippet(), 'curl')}
                                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                            >
                                {copiedCode === 'curl' ? <Check size={13} /> : <Copy size={13} />}
                                cURL Nusxalash
                            </button>
                        </div>

                        {/* Tabs / Code box */}
                        <div className="p-4 bg-[#0d1117] text-[#e6edf3] font-mono text-xs overflow-x-auto space-y-4">
                            <div>
                                <div className="text-gray-400 text-[10px] uppercase font-bold mb-1">// cURL (Terminal / Bash)</div>
                                <pre className="text-emerald-400 whitespace-pre-wrap">{getCurlSnippet()}</pre>
                            </div>

                            <div className="pt-2 border-t border-gray-800">
                                <div className="text-gray-400 text-[10px] uppercase font-bold mb-1">// JavaScript / TypeScript (Node.js & Frontend)</div>
                                <pre className="text-cyan-300 whitespace-pre-wrap">{getJsSnippet()}</pre>
                            </div>

                            <div className="pt-2 border-t border-gray-800">
                                <div className="text-gray-400 text-[10px] uppercase font-bold mb-1">// Python (requests)</div>
                                <pre className="text-yellow-300 whitespace-pre-wrap">{getPythonSnippet()}</pre>
                            </div>
                        </div>
                    </div>

                    {/* Live JSON Response Viewer */}
                    {apiResponse && (
                        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xs animate-in fade-in duration-200">
                            <div className="p-3 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black flex items-center justify-between">
                                <span>SERVER JAVOBI (HTTP 200 OK):</span>
                                <button
                                    onClick={() => handleCopy(JSON.stringify(apiResponse, null, 2), 'response')}
                                    className="hover:underline flex items-center gap-1"
                                >
                                    {copiedCode === 'response' ? <Check size={13} /> : <Copy size={13} />}
                                    JSON Nusxalash
                                </button>
                            </div>
                            <div className="p-4 bg-[#0d1117] text-emerald-400 font-mono text-xs max-h-60 overflow-y-auto">
                                <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeveloperApiPage;
