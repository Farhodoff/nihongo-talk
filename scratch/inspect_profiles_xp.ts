import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDUzMTAsImV4cCI6MjA4Mjc4MTMxMH0.gpFa0ZdyCULHLLzHlwuLSEePKchajThwTUBgWdRdX8c';

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspectProfiles() {
    const { data, error } = await supabase.from('profiles').select('id, full_name, level, total_xp, created_at').order('total_xp', { ascending: false });
    if (error) {
        console.error('Error fetching profiles:', error);
        return;
    }
    console.log('--- PROFILES TABLE XP AUDIT ---');
    data.forEach((p, idx) => {
        console.log(`${idx + 1}. Name: ${p.full_name || 'N/A'} | Level: ${p.level} | XP: ${p.total_xp} | ID: ${p.id}`);
    });
}

inspectProfiles();
