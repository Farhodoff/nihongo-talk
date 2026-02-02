import { Tldraw, getSnapshot, loadSnapshot } from 'tldraw';
import 'tldraw/tldraw.css';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { supabase } from '../lib/supabase';

interface WhiteboardProps {
    whiteboardId: string;
}

const Whiteboard: React.FC<WhiteboardProps> = ({ whiteboardId }) => {
    const { user } = useStudyData();
    const [storeData, setStoreData] = useState<Record<string, unknown> | null>(null);
    const [loading, setLoading] = useState(true);
    const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const localSaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error' | 'unsaved'>('saved');

    // Persistence Key (Unique per whiteboard)
    const persistenceKey = `whiteboard-instance-${whiteboardId}`;

    // Load Data
    useEffect(() => {
        const loadWhiteboard = async () => {
            if (!user) return;
            setLoading(true);

            console.log(`Loading whiteboard ${whiteboardId}...`);

            // 1. Try Supabase
            const { data, error } = await supabase
                .from('whiteboards')
                .select('data')
                .eq('id', whiteboardId)
                .maybeSingle();

            if (error) {
                console.error("Error loading whiteboard from Supabase:", error);
            }

            if (data?.data && Object.keys(data.data).length > 0) {
                console.log("Loaded from Supabase:", data.data);
                setStoreData(data.data);
            } else {
                console.log("No data in Supabase or empty, checking LocalStorage...");
                // 2. Fallback to LocalStorage
                const local = localStorage.getItem(persistenceKey);
                if (local) {
                    try {
                        const parsed = JSON.parse(local);
                        console.log("Loaded from LocalStorage:", parsed);
                        setStoreData(parsed);
                    } catch (e) {
                        console.error("Failed to parse local whiteboard", e);
                    }
                }
            }
            setLoading(false);
        };
        loadWhiteboard();
    }, [whiteboardId, user]);

    // Save Data Handler
    const handleMount = useCallback((editor: any) => {
        // Load initial data
        if (storeData) {
            try {
                console.log("Restoring snapshot to editor...");
                loadSnapshot(editor.store, storeData);
            } catch (e) {
                console.error("Failed to load snapshot", e);
            }
        }

        // Subscribe to changes
        const cleanup = editor.store.listen(() => {
            setSaveStatus('unsaved');

            // DEBOUNCE EVERYTHING to prevent lag
            if (localSaveTimeoutRef.current) clearTimeout(localSaveTimeoutRef.current);
            if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

            // Local Storage Save (Fast debounce - 1s)
            localSaveTimeoutRef.current = setTimeout(() => {
                const snapshot = getSnapshot(editor.store);
                localStorage.setItem(persistenceKey, JSON.stringify(snapshot));
            }, 1000);

            // Supabase Save (Slow debounce - 3s)
            setSaveStatus('saving');
            saveTimeoutRef.current = setTimeout(async () => {
                if (!user) return;
                const snapshot = getSnapshot(editor.store);

                console.log("Auto-saving to Supabase...");
                // Update by ID, not subject_id
                const { error } = await supabase.from('whiteboards').update({
                    data: snapshot,
                    updated_at: new Date().toISOString()
                }).eq('id', whiteboardId);

                if (error) {
                    console.error("Whiteboard save failed:", error.message);
                    setSaveStatus('error');
                    // alert("Saqlashda xatolik bo'ldi! Internetni tekshiring."); // Optional
                } else {
                    console.log("Auto-save success!");
                    setSaveStatus('saved');
                }
            }, 3000);
        });

        return cleanup;
    }, [storeData, user, whiteboardId, persistenceKey]);



    if (loading) return <div className="h-full flex items-center justify-center">Yuklanmoqda...</div>;

    return (
        <div className="h-[600px] w-full border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white relative touch-none">
            <div className="absolute top-2 right-2 z-50 flex gap-2">
                <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border ${saveStatus === 'saved' ? 'bg-green-100/80 text-green-700 border-green-200' :
                    saveStatus === 'saving' ? 'bg-yellow-100/80 text-yellow-700 border-yellow-200' :
                        saveStatus === 'error' ? 'bg-red-100/80 text-red-700 border-red-200' :
                            'bg-gray-100/80 text-gray-600 border-gray-200'
                    }`}>
                    {saveStatus === 'saved' && 'Saqlandi'}
                    {saveStatus === 'saving' && 'Saqlanmoqda...'}
                    {saveStatus === 'error' && 'Xatolik!'}
                    {saveStatus === 'unsaved' && 'O\'zgarishlar bor...'}
                </div>
            </div>

            <Tldraw
                persistenceKey={persistenceKey}
                onMount={handleMount}
                licenseKey="tldraw-2026-04-19/WyJGVDdNS09TcCIsWyIqIl0sMTYsIjIwMjYtMDQtMTkiXQ.BW86tQhO9nXNyQ6IIZJl3oracKtUetYw7risI1lZbitBjGYo0BbmD/dQqi/IbESV8TetvGWCXXtUmaPV1itm6A"
            />
        </div>
    );
};

export default Whiteboard;
