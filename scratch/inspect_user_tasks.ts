import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDUzMTAsImV4cCI6MjA4Mjc4MTMxMH0.gpFa0ZdyCULHLLzHlwuLSEePKchajThwTUBgWdRdX8c';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function inspectUserTasks() {
    const userId = '99a2f2c1-3fa0-477e-b73c-2ca6537d1721';
    console.log('Inspecting tasks for user:', userId);

    const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching tasks:', error);
    } else {
        console.log(`Found ${tasks?.length || 0} tasks for user in DB:`);
        console.log(JSON.stringify(tasks, null, 2));
    }
}

inspectUserTasks();
