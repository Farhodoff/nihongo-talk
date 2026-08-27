import { createClient } from '@supabase/supabase-js';

const url = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const anonKey = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

const supabase = createClient(url, anonKey);

async function testAuthAndRPC() {
    const email = 'testadmin2026@nihon-talk.com';
    const password = 'TestAdminPassword123!';

    console.log(`1. Attempting login for ${email}...`);
    let authRes = await supabase.auth.signInWithPassword({ email, password });

    if (authRes.error) {
        console.log('Login failed, attempting sign up for test user...');
        const signUpRes = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: 'Test Superadmin User' }
            }
        });
        console.log('Sign Up Result:', { user: signUpRes.data?.user?.email, session: Boolean(signUpRes.data?.session), error: signUpRes.error });

        authRes = await supabase.auth.signInWithPassword({ email, password });
    }

    console.log('Auth Session Result:', { user: authRes.data?.user?.email, hasSession: Boolean(authRes.data?.session), error: authRes.error });

    if (authRes.data?.session) {
        const authedSupabase = createClient(url, anonKey, {
            global: {
                headers: {
                    Authorization: `Bearer ${authRes.data.session.access_token}`
                }
            }
        });

        // First ensure user profile has role='superadmin' in profiles table
        console.log('2. Inserting/upserting profile with superadmin role...');
        const profileUpsert = await authedSupabase.from('profiles').upsert({
            id: authRes.data.user.id,
            email: authRes.data.user.email,
            full_name: 'Test Superadmin User',
            role: 'superadmin',
            updated_at: new Date().toISOString()
        });
        console.log('Profile Upsert Result:', profileUpsert.error || 'Success!');

        console.log('3. Testing get_admin_all_users() RPC with authenticated token...');
        const authedRpc = await authedSupabase.rpc('get_admin_all_users');
        console.log('RPC get_admin_all_users() Result:', {
            dataCount: authedRpc.data?.length,
            error: authedRpc.error
        });

        if (authedRpc.data && authedRpc.data.length > 0) {
            console.log('\n=== REAL SUPABASE USERS RETURNED (First 10) ===');
            console.log(authedRpc.data.slice(0, 10));
        }

        console.log('\n=== VALID SESSION OBJECT FOR BROWSER INJECTION ===');
        console.log(JSON.stringify(authRes.data.session));
    }
}

testAuthAndRPC();
