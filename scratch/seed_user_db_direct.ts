import { createClient } from '@supabase/supabase-js';
import { PRESET_DECKS } from '../src/data/presetDecks';

const SUPABASE_URL = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDUzMTAsImV4cCI6MjA4Mjc4MTMxMH0.gpFa0ZdyCULHLLzHlwuLSEePKchajThwTUBgWdRdX8c';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function seedUserDataDirectly() {
    const userId = '99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
    console.log('--- SEEDING DEFAULT SUBJECTS & FLASHCARDS FOR USER:', userId, '---');

    const defaultSubjects = [
        {
            id: 'a0000000-0000-0000-0000-000000000001',
            user_id: userId,
            name: '🎌 JLPT Japanese Master',
            color: '#f43f5e',
            icon: 'Sparkles',
            is_archived: false
        },
        {
            id: 'a0000000-0000-0000-0000-000000000002',
            user_id: userId,
            name: '📘 IELTS Academic & CEFR Master',
            color: '#6366f1',
            icon: 'GraduationCap',
            is_archived: false
        },
        {
            id: 'a0000000-0000-0000-0000-000000000003',
            user_id: userId,
            name: '💻 IT & Dasturlash',
            color: '#10b981',
            icon: 'Code',
            is_archived: false
        },
        {
            id: 'a0000000-0000-0000-0000-000000000004',
            user_id: userId,
            name: '📝 Qaydnoma va Konspektlar',
            color: '#8b5cf6',
            icon: 'BookOpen',
            is_archived: false
        }
    ];

    const { data: subData, error: subErr } = await supabase.from('subjects').upsert(defaultSubjects).select();
    if (subErr) {
        console.error('FAILED TO UPSERT SUBJECTS TO DB:', subErr);
    } else {
        console.log('✅ SUBJECTS SUCCESSFULLY SAVED TO DB:', subData?.length);
    }

    // Now seed flashcards for JLPT master
    console.log('Loading preset cards to seed DB...');
    let cardsToInsert: any[] = [];
    for (const deck of PRESET_DECKS) {
        try {
            const cards = await deck.loadCards();
            if (cards && cards.length > 0) {
                const mapped = cards.map(c => ({
                    user_id: userId,
                    subject_id: 'a0000000-0000-0000-0000-000000000001',
                    front: c.front,
                    back: `${c.back} ${c.phonetic ? `(${c.phonetic})` : ''} ${c.example ? `\nExample: "${c.example}"` : ''}`.trim(),
                    interval: 1,
                    repetitions: 0,
                    ease_factor: 2.5,
                    next_review_date: new Date().toISOString(),
                    is_archived: false
                }));
                cardsToInsert.push(...mapped);
            }
        } catch (e) {
            console.error('Error loading cards for deck', deck.title, e);
        }
    }

    console.log(`Preparing to insert ${cardsToInsert.length} flashcards to DB...`);
    const chunkSize = 50;
    let insertedCount = 0;
    for (let i = 0; i < cardsToInsert.length; i += chunkSize) {
        const chunk = cardsToInsert.slice(i, i + chunkSize);
        const { data: fcData, error: fcErr } = await supabase.from('flashcards').insert(chunk).select('id');
        if (fcErr) {
            console.error('Error inserting flashcard chunk:', fcErr);
        } else {
            insertedCount += fcData?.length || 0;
        }
    }

    console.log(`✅ TOTAL FLASHCARDS SUCCESSFULLY SAVED TO DB FOR USER fsoyilov@gmail.com: ${insertedCount}`);
}

seedUserDataDirectly();
