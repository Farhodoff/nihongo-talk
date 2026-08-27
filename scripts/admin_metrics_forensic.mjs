import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const url = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const anonKey = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

async function runForensics() {
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

    console.log('=== ADMIN METRICS FORENSIC DATABASE AUDIT ===\n');

    // 1. Auth & RPC Users
    const rpcRes = await supabase.rpc('get_admin_all_users');
    const allUsers = rpcRes.data || [];
    
    const superadmins = allUsers.filter(u => u.role === 'superadmin' || u.email === 'fsoyilov@gmail.com' || u.email === 'testadmin2026@nihon-talk.com');
    const admins = allUsers.filter(u => u.role === 'admin' && !superadmins.some(sa => sa.id === u.id));
    const students = allUsers.filter(u => !superadmins.some(sa => sa.id === u.id) && !admins.some(a => a.id === u.id));

    console.log('1. USERS METRICS:');
    console.log(`- Total Auth Accounts: ${allUsers.length}`);
    console.log(`- Superadmins Count: ${superadmins.length} (${superadmins.map(u => u.email).join(', ')})`);
    console.log(`- Admins Count: ${admins.length} (${admins.map(u => u.email).join(', ')})`);
    console.log(`- Students (Normal Users) Count: ${students.length}`);

    // 2. Query Session Tables
    const [studyRes, speakingRes, coachRes, aiCoachRes] = await Promise.all([
        supabase.from('study_sessions').select('*'),
        supabase.from('speaking_sessions').select('*'),
        supabase.from('speaking_coach_sessions').select('*'),
        supabase.from('ai_coach_sessions').select('*')
    ]);

    const studyData = studyRes.data || [];
    const speakingData = speakingRes.data || [];
    const coachData = coachRes.data || [];
    const aiCoachData = aiCoachRes.data || [];

    console.log('\n2. SESSION TABLES COUNTS:');
    console.log(`- study_sessions count: ${studyData.length}`);
    console.log(`- speaking_sessions count: ${speakingData.length}`);
    console.log(`- speaking_coach_sessions count: ${coachData.length}`);
    console.log(`- ai_coach_sessions count: ${aiCoachData.length}`);
    console.log(`- EXACT TOTAL SESSIONS COUNT = ${studyData.length} + ${speakingData.length} + ${coachData.length} + ${aiCoachData.length} = ${studyData.length + speakingData.length + coachData.length + aiCoachData.length}`);

    console.log('\nRECORD IDS BY TABLE:');
    console.log('study_sessions IDs:', studyData.map(s => s.id));
    console.log('speaking_sessions IDs:', speakingData.map(s => s.id));
    console.log('speaking_coach_sessions IDs:', coachData.map(s => s.id));
    console.log('ai_coach_sessions IDs:', aiCoachData.map(s => s.id));

    // 3. Durations & Timings
    let totalStudyMin = 0;
    studyData.forEach(s => totalStudyMin += (s.duration || 0));
    let totalSpeakingSec = 0;
    speakingData.forEach(s => totalSpeakingSec += (s.duration_seconds || 0));
    coachData.forEach(s => totalSpeakingSec += (s.duration_seconds || 0));
    aiCoachData.forEach(s => totalSpeakingSec += (s.duration_seconds || 0));

    const grandTotalDurationMin = totalStudyMin + Math.round(totalSpeakingSec / 60);
    const totalHours = Math.floor(grandTotalDurationMin / 60);
    const remMin = grandTotalDurationMin % 60;

    console.log('\n3. DURATION METRICS:');
    console.log(`- study_sessions total duration: ${totalStudyMin} min`);
    console.log(`- speaking & coach sessions total speaking duration: ${totalSpeakingSec} sec (${Math.round(totalSpeakingSec / 60)} min)`);
    console.log(`- Grand Total Duration: ${grandTotalDurationMin} min (${totalHours}h ${remMin}m)`);

    // 4. Today's Activity (UTC / Local)
    const todayISO = new Date().toISOString().split('T')[0];
    console.log(`\n4. TODAY ACTIVITY (${todayISO}):`);
    
    const todayStudy = studyData.filter(s => s.created_at && s.created_at.startsWith(todayISO));
    const todaySpeaking = speakingData.filter(s => s.created_at && s.created_at.startsWith(todayISO));
    const todayCoach = coachData.filter(s => s.created_at && s.created_at.startsWith(todayISO));
    const todayAiCoach = aiCoachData.filter(s => s.created_at && s.created_at.startsWith(todayISO));

    const todaySessionsTotal = todayStudy.length + todaySpeaking.length + todayCoach.length + todayAiCoach.length;
    const todaySpeakingTotal = todaySpeaking.length + todayCoach.length + todayAiCoach.length;

    const todayUsersSet = new Set([
        ...todayStudy.map(s => s.user_id),
        ...todaySpeaking.map(s => s.user_id),
        ...todayCoach.map(s => s.user_id),
        ...todayAiCoach.map(s => s.user_id),
    ].filter(Boolean));

    console.log(`- Today's Total Sessions: ${todaySessionsTotal}`);
    console.log(`- Today's Speaking Sessions: ${todaySpeakingTotal}`);
    console.log(`- Today's Unique Active Users: ${todayUsersSet.size} (${Array.from(todayUsersSet).join(', ')})`);

    // 5. Scores (Daily & Weekly)
    const allScoresToday = [
        ...todaySpeaking.map(s => s.overall_score || s.grammar_score),
        ...todayCoach.map(s => s.grammar_score || (s.fluency_score ? s.fluency_score * 20 : 0)),
        ...todayAiCoach.map(s => s.grammar_score || s.vocabulary_score)
    ].filter(v => typeof v === 'number' && v > 0);

    const dailyAvg = allScoresToday.length > 0 ? Math.round(allScoresToday.reduce((a, b) => a + b, 0) / allScoresToday.length) : 0;

    const sevenDaysAgo = new Date(Date.now() - 7 * 86400 * 1000).toISOString().split('T')[0];
    const weekSpeaking = speakingData.filter(s => s.created_at && s.created_at >= sevenDaysAgo);
    const weekCoach = coachData.filter(s => s.created_at && s.created_at >= sevenDaysAgo);
    const weekAiCoach = aiCoachData.filter(s => s.created_at && s.created_at >= sevenDaysAgo);

    const allScoresWeekly = [
        ...weekSpeaking.map(s => s.overall_score || s.grammar_score),
        ...weekCoach.map(s => s.grammar_score || (s.fluency_score ? s.fluency_score * 20 : 0)),
        ...weekAiCoach.map(s => s.grammar_score || s.vocabulary_score)
    ].filter(v => typeof v === 'number' && v > 0);

    const weeklyAvg = allScoresWeekly.length > 0 ? Math.round(allScoresWeekly.reduce((a, b) => a + b, 0) / allScoresWeekly.length) : 0;

    console.log('\n5. SCORE METRICS:');
    console.log(`- Today's Scores: [${allScoresToday.join(', ')}] -> Daily Avg = ${dailyAvg}%`);
    console.log(`- Weekly's Scores: [${allScoresWeekly.join(', ')}] -> Weekly Avg = ${weeklyAvg}%`);
}

runForensics();
