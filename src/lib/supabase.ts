import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials topilmadi. VITE_SUPABASE_URL va VITE_SUPABASE_ANON_KEY o\'rniga fallback kalitlar ishlatilmoqda.');
}

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
