import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const url = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const anonKey = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

const supabase = createClient(url, anonKey);

async function getLiveSession() {
    const email = 'testadmin2026@nihon-talk.com';
    const password = 'TestAdminPassword123!';

    console.log(`Signing in as ${email}...`);
    const authRes = await supabase.auth.signInWithPassword({ email, password });

    if (authRes.data?.session) {
        console.log('Successfully obtained live Supabase Auth session!');
        fs.writeFileSync(
            '/Users/farhod/Documents/github/study_planner/scripts/live_session.json',
            JSON.stringify(authRes.data.session, null, 2)
        );
        console.log('Saved session to scripts/live_session.json');
    } else {
        console.error('Failed to obtain session:', authRes.error);
    }
}

getLiveSession();
