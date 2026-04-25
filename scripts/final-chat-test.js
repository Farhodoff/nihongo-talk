import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function functionalTest() {
    console.log("🧪 Chat funksional testini boshlaymiz...");
    
    const testMessage = `Test xabari - ${Math.random().toString(36).substring(7)}`;
    let received = false;

    // 1. Real-time kanalga obuna bo'lish
    const channel = supabase.channel('test-room')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
            if (payload.new.content === testMessage) {
                console.log("✅ Real-time: Yangi xabar darhol qabul qilindi!");
                received = true;
            }
        })
        .subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                console.log("📡 Kanalga ulanildi, xabar yuborilmoqda...");
                
                // 2. Xabar yuborish (bazaga yozish)
                // Eslatma: Bu erda user_id kerak. Test uchun birinchi topilgan profilni ishlatamiz.
                const { data: profile } = await supabase.from('profiles').select('id').limit(1).single();
                
                if (profile) {
                    const { error } = await supabase.from('messages').insert({
                        user_id: profile.id,
                        content: testMessage
                    });

                    if (error) console.error("❌ Xabar yuborishda xato:", error.message);
                    else console.log("📝 Xabar muvaffaqiyatli yuborildi.");
                } else {
                    console.error("❌ Test uchun profil topilmadi.");
                }
            }
        });

    // 10 soniya kutish
    setTimeout(() => {
        if (received) {
            console.log("🚀 XULOSA: Chat 100% ishlamoqda!");
            process.exit(0);
        } else {
            console.log("⚠️ Real-time xabar kelmadi (Balki bazada Realtime yoqilmagandir).");
            process.exit(1);
        }
    }, 8000);
}

functionalTest();
