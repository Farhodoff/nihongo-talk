import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
const url = env.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const serviceKey = env.match(/SERVICE_ROLE=(.*)/)[1].trim();
const anonKey = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();

const adminClient = createClient(url, serviceKey);

async function applyMigration() {
    console.log('--- Applying Migration 20260905000000 ---');
    const sql = fs.readFileSync('supabase/migrations/20260905000000_fix_profiles_rls_and_create_preset_deck_curations.sql', 'utf-8');

    // Try executing via rpc if sql execution RPC exists, or test creating table via query
    const { data: cData, error: cErr } = await adminClient.from('preset_deck_curations').select('*').limit(1);
    if (cErr && cErr.message.includes('PGRST205')) {
        console.log('Table preset_deck_curations does not exist yet via REST cache.');
    } else {
        console.log('preset_deck_curations table query status:', !cErr);
    }
}

applyMigration();
