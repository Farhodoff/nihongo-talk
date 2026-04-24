import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// .env faylidan o'zgaruvchilarni yuklash
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Xatolik: VITE_SUPABASE_URL yoki VITE_SUPABASE_ANON_KEY topilmadi (.env faylini tekshiring)");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCommunityService() {
    console.log("🔍 Umumiy chat xizmatini tekshirish boshlandi...");

    try {
        // 1. Jadval mavjudligini va xabarlarni o'qishni tekshirish
        const { data, error } = await supabase
            .from('messages')
            .select('id, content, created_at')
            .limit(1);

        if (error) {
            if (error.code === '42P01') {
                console.error("❌ Xatolik: 'messages' jadvali bazada mavjud emas!");
            } else {
                console.error("❌ Xatolik (Fetch):", error.message);
            }
            return;
        }
        console.log("✅ Bazaga ulanish: Muvaffaqiyatli. 'messages' jadvali mavjud.");

        // 2. Real-time ulanishni tekshirish
        console.log("📡 Real-time ulanish tekshirilmoqda...");
        const channel = supabase.channel('health-check')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload) => {
                console.log('Change received!', payload);
            })
            .subscribe((status) => {
                if (status === 'SUBSCRIBED') {
                    console.log("✅ Real-time: Kanalga ulanish muvaffaqiyatli!");
                    process.exit(0);
                } else if (status === 'CHANNEL_ERROR') {
                    console.error("❌ Real-time: Kanalda xatolik yuz berdi.");
                    process.exit(1);
                }
            });

        // 5 soniyadan keyin timeout
        setTimeout(() => {
            console.log("⚠️ Real-time ulanish kutilmoqda (Timeout)...");
            process.exit(0);
        }, 5000);

    } catch (err) {
        console.error("❌ Kutilmagan xatolik:", err.message);
        process.exit(1);
    }
}

checkCommunityService();
