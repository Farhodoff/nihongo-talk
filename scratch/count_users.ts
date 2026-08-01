import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDUzMTAsImV4cCI6MjA4Mjc4MTMxMH0.gpFa0ZdyCULHLLzHlwuLSEePKchajThwTUBgWdRdX8c';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function countRegisteredUsers() {
    console.log('--- COUNTING REGISTERED USERS IN PROFILES TABLE ---');

    const { data: profiles, count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact' });

    if (error) {
        console.error('Error fetching profiles count:', error);
    } else {
        console.log(`EXACT PROFILES COUNT: ${count || profiles?.length || 0}`);
        if (profiles && profiles.length > 0) {
            console.log('User profiles list (sample):');
            profiles.forEach((p, idx) => {
                console.log(`${idx + 1}. ID: ${p.id} | Email/Name: ${p.full_name || p.email || 'User'}`);
            });
        }
    }
}

countRegisteredUsers();
