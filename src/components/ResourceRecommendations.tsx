import { BookOpen, FileText, GraduationCap, Loader2, Search, Video } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { SmartResource, recommendResourcesWithAI } from '../utils/ai';
import { Button } from './ui/Button';

interface Props {
    initialTopic: string;
}

const ResourceRecommendations: React.FC<Props> = ({ initialTopic }) => {
    const { settings } = useStudyData();
    const [query, setQuery] = useState(initialTopic);
    const [resources, setResources] = useState<SmartResource[]>([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<'all' | 'video' | 'article' | 'book' | 'course'>('all');

    // Initial load - Empty useEffect or removed if not needed. 
    // We remove the automatic handleSearch() to save tokens and prevent rate limits.
    useEffect(() => {
        // handleSearch(); // Removed auto-fetch
    }, []); 

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);
        try {
            const data = await recommendResourcesWithAI(query, settings.googleApiKey);
            setResources(data);
        } catch (e) {
            alert("Xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    const filteredResources = useMemo(() => {
        if (filter === 'all') return resources;
        return resources.filter(r => r.type === filter);
    }, [resources, filter]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'video': return <Video size={24} className="text-red-500" />;
            case 'book': return <BookOpen size={24} className="text-emerald-500" />;
            case 'course': return <GraduationCap size={24} className="text-blue-500" />;
            case 'article': return <FileText size={24} className="text-gray-500" />;
            default: return <Search size={24} />;
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'video': return 'Video';
            case 'book': return 'Kitob';
            case 'course': return 'Kurs';
            case 'article': return 'Maqola';
            default: return 'Manba';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header & Search */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">
                <h2 className="text-3xl font-bold mb-2">Resurslar Tavsiyasi</h2>
                <p className="text-blue-100 mb-6">AI orqali o'zingizga kerakli o'quv materiallarini toping</p>

                <div className="flex gap-2 max-w-2xl bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Mavzuni kriting (masalan: Python, Iqtisodiyot...)"
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-blue-200 px-4"
                    />
                    <Button onClick={handleSearch} disabled={loading} className="bg-white text-blue-600 hover:bg-gray-100 border-none shadow-md">
                        {loading ? <Loader2 className="animate-spin" /> : 'Topish'}
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
                {([
                    { id: 'all', label: 'Barchasi', icon: null },
                    { id: 'video', label: 'Videolar', icon: <Video size={16} /> },
                    { id: 'article', label: 'Maqolalar', icon: <FileText size={16} /> },
                    { id: 'book', label: 'Kitoblar', icon: <BookOpen size={16} /> },
                    { id: 'course', label: 'Kurslar', icon: <GraduationCap size={16} /> },
                ] as const).map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setFilter(item.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === item.id
                                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                    >
                        {item.icon} {item.label}
                    </button>
                ))}
            </div>

            {/* Results Grid */}
            {loading ? (
                <div className="text-center py-20">
                    <Loader2 size={40} className="animate-spin text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-500">Eng yaxshi manbalar qidirilmoqda...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredResources.map((res, idx) => (
                        <div key={idx} className="group bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                    {getIcon(res.type)}
                                </div>
                                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-2 py-1 rounded-md uppercase">
                                    {getTypeLabel(res.type)}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                {res.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                {res.description}
                            </p>

                            <a
                                href={res.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-blue-600 font-semibold text-sm hover:underline"
                            >
                                MATERIALNI O'RGANISH →
                            </a>
                        </div>
                    ))}

                    {!loading && resources.length === 0 && (
                        <div className="col-span-2 text-center py-10 text-gray-400">
                            Hali hech narsa topilmadi. Qidirish tugmasini bosing.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ResourceRecommendations;
