import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDUzMTAsImV4cCI6MjA4Mjc4MTMxMH0.gpFa0ZdyCULHLLzHlwuLSEePKchajThwTUBgWdRdX8c';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkAllUserData() {
    const userId = '99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
    console.log('--- CHECKING SUPABASE FOR USER:', userId, '---');

    const { data: subjects, error: subErr } = await supabase
        .from('subjects')
        .select('id, name, user_id, created_at')
        .eq('user_id', userId);
    
    console.log('SUBJECTS count:', subjects?.length || 0, subErr ? 'ERROR: ' + subErr.message : '');
    if (subjects && subjects.length > 0) {
        console.log('Subjects list:', subjects);
    }

    const { data: flashcards, error: fcErr } = await supabase
        .from('flashcards')
        .select('id, front, back, subject_id, user_id')
        .eq('user_id', userId)
        .limit(10);
    
    console.log('FLASHCARDS count:', flashcards?.length || 0, fcErr ? 'ERROR: ' + fcErr.message : '');
    if (flashcards && flashcards.length > 0) {
        console.log('Sample Flashcards:', flashcards.slice(0, 5));
    }

    // Check all subjects regardless of user_id to see if user_id is different or null
    const { data: allSubjects } = await supabase.from('subjects').select('id, name, user_id').limit(20);
    console.log('ALL SUBJECTS IN DB (sample):', allSubjects);
}

checkAllUserData();
