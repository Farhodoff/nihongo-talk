import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
const url = env.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const anonKey = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();
const serviceKey = env.match(/SERVICE_ROLE=(.*)/)[1].trim();

const adminClient = createClient(url, serviceKey);

async function testAuthUserInsert() {
    const testEmail = `newuser_${Date.now()}@test.com`;
    const testPassword = 'Password123!';
    
    // Create a new user in auth.users via admin
    const { data: signUpUser, error: sErr } = await adminClient.auth.admin.createUser({
        email: testEmail,
        password: testPassword,
        email_confirm: true
    });

    if (sErr) {
        console.error('Failed to create test user:', sErr.message);
        return;
    }

    const userId = signUpUser.user.id;
    console.log('Created auth user:', userId, testEmail);

    // Now login as this newly registered user with anon client
    const userClient = createClient(url, anonKey);
    const { data: loginData, error: lErr } = await userClient.auth.signInWithPassword({
        email: testEmail,
        password: testPassword
    });

    if (lErr) {
        console.error('Failed to sign in:', lErr.message);
        await adminClient.auth.admin.deleteUser(userId);
        return;
    }

    console.log('User signed in. Now upserting into profiles with user JWT token...');
    const { data: profData, error: profErr } = await userClient.from('profiles').upsert({
        id: userId,
        email: testEmail,
        full_name: 'Newly Registered Student'
    });

    console.log('Profile UPSERT result for authenticated user:', {
        success: !profErr,
        error: profErr?.message,
        code: profErr?.code
    });

    // Clean up test user
    await adminClient.auth.admin.deleteUser(userId);
    console.log('Test user cleaned up.');
}

testAuthUserInsert();
