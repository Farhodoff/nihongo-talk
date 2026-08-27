import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const url = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const anonKey = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

async function runAudit() {
    const sessionFilePath = '/Users/farhod/Documents/github/study_planner/scripts/live_session.json';
    if (!fs.existsSync(sessionFilePath)) {
        console.error('live_session.json not found!');
        process.exit(1);
    }

    const sessionObj = JSON.parse(fs.readFileSync(sessionFilePath, 'utf-8'));
    const accessToken = sessionObj.access_token;

    const supabase = createClient(url, anonKey, {
        global: {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    });

    console.log('=== REAL SUPABASE PRODUCTION DB AUDIT ===\n');

    // Auth check
    const authRes = await supabase.auth.getUser(accessToken);
    console.log('AUTH USER CHECK:', {
        exists: !!authRes.data?.user,
        email: authRes.data?.user?.email,
        id: authRes.data?.user?.id,
        error: authRes.error?.message || null
    });

    // A) RPC get_admin_all_users
    console.log('\n--- 1. RPC: get_admin_all_users ---');
    const rpcRes = await supabase.rpc('get_admin_all_users');
    console.log({
        error: rpcRes.error || null,
        dataLength: rpcRes.data ? rpcRes.data.length : null,
        sampleFirst3: rpcRes.data ? rpcRes.data.slice(0, 3) : []
    });

    // B) profiles
    console.log('\n--- 2. TABLE: profiles ---');
    const profilesRes = await supabase.from('profiles').select('*', { count: 'exact' });
    console.log({
        error: profilesRes.error || null,
        count: profilesRes.count,
        dataLength: profilesRes.data ? profilesRes.data.length : null,
        sampleFirst3: profilesRes.data ? profilesRes.data.slice(0, 3) : []
    });

    // C) study_sessions
    console.log('\n--- 3. TABLE: study_sessions ---');
    const studyRes = await supabase.from('study_sessions').select('*', { count: 'exact' });
    console.log({
        error: studyRes.error || null,
        count: studyRes.count,
        dataLength: studyRes.data ? studyRes.data.length : null,
        sampleFirst3: studyRes.data ? studyRes.data.slice(0, 3) : []
    });

    // D) speaking_sessions
    console.log('\n--- 4. TABLE: speaking_sessions ---');
    const speakingRes = await supabase.from('speaking_sessions').select('*', { count: 'exact' });
    console.log({
        error: speakingRes.error || null,
        count: speakingRes.count,
        dataLength: speakingRes.data ? speakingRes.data.length : null,
        sampleFirst3: speakingRes.data ? speakingRes.data.slice(0, 3) : []
    });

    // E) speaking_coach_sessions
    console.log('\n--- 5. TABLE: speaking_coach_sessions ---');
    const coachRes = await supabase.from('speaking_coach_sessions').select('*', { count: 'exact' });
    console.log({
        error: coachRes.error || null,
        count: coachRes.count,
        dataLength: coachRes.data ? coachRes.data.length : null,
        sampleFirst3: coachRes.data ? coachRes.data.slice(0, 3) : []
    });

    // F) ai_coach_sessions
    console.log('\n--- 6. TABLE: ai_coach_sessions ---');
    const aiCoachRes = await supabase.from('ai_coach_sessions').select('*', { count: 'exact' });
    console.log({
        error: aiCoachRes.error || null,
        count: aiCoachRes.count,
        dataLength: aiCoachRes.data ? aiCoachRes.data.length : null,
        sampleFirst3: aiCoachRes.data ? aiCoachRes.data.slice(0, 3) : []
    });

    // G) diagnostic_results / mastery_evidence (checking for percentages/scores)
    console.log('\n--- 7. TABLE: diagnostic_results ---');
    const diagRes = await supabase.from('diagnostic_results').select('*', { count: 'exact' });
    console.log({
        error: diagRes.error || null,
        count: diagRes.count,
        sampleFirst3: diagRes.data ? diagRes.data.slice(0, 3) : []
    });

    console.log('\n--- 8. TABLE: mastery_evidence ---');
    const masteryRes = await supabase.from('mastery_evidence').select('*', { count: 'exact' });
    console.log({
        error: masteryRes.error || null,
        count: masteryRes.count,
        sampleFirst3: masteryRes.data ? masteryRes.data.slice(0, 3) : []
    });
}

runAudit();
