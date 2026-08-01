import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDUzMTAsImV4cCI6MjA4Mjc4MTMxMH0.gpFa0ZdyCULHLLzHlwuLSEePKchajThwTUBgWdRdX8c';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkTasksAndSubjects() {
    const userId = '99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
    console.log('=== EMPIRICAL CHECK FOR fsoyilov@gmail.com (ID: ' + userId + ') ===');

    // 1. Check profiles table
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle();
    console.log('PROFILE IN DB:', profile ? `Found (${profile.email || 'fsoyilov@gmail.com'})` : 'Not found');

    // 2. Check tasks table
    const { data: tasks, error: taskErr } = await supabase.from('tasks').select('id, title, user_id, status').eq('user_id', userId);
    console.log('TASKS count:', tasks?.length || 0, taskErr ? 'ERROR: ' + taskErr.message : '');
    if (tasks && tasks.length > 0) {
        console.log('Sample tasks:', tasks.slice(0, 5));
    }

    // 3. Check subjects table
    const { data: subjects, error: subErr } = await supabase.from('subjects').select('id, name, user_id').eq('user_id', userId);
    console.log('SUBJECTS count:', subjects?.length || 0, subErr ? 'ERROR: ' + subErr.message : '');

    // 4. Check flashcards table
    const { data: flashcards, error: fcErr } = await supabase.from('flashcards').select('id, front, user_id').eq('user_id', userId).limit(5);
    console.log('FLASHCARDS count:', flashcards?.length || 0, fcErr ? 'ERROR: ' + fcErr.message : '');
}

checkTasksAndSubjects();
