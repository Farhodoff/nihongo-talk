import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDUzMTAsImV4cCI6MjA4Mjc4MTMxMH0.gpFa0ZdyCULHLLzHlwuLSEePKchajThwTUBgWdRdX8c';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function inspectUserSubjects() {
    const userId = '99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
    console.log('Inspecting subjects for user:', userId);

    const { data: subjects, error } = await supabase
        .from('subjects')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching subjects:', error);
    } else {
        console.log(`Found ${subjects?.length || 0} subjects for user in DB:`);
        console.log(JSON.stringify(subjects, null, 2));
    }
}

inspectUserSubjects();
