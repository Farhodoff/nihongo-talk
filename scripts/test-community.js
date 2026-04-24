import { supabase } from '../src/lib/supabase';

async function testCommunityFunctionality() {
    console.log("🚀 Hamjamiyat bo'limini test qilish boshlandi...");

    // 1. Auth holatini tekshirish
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        console.error("❌ Xatolik: Foydalanuvchi tizimga kirmagan. Testni davom ettirib bo'lmaydi.");
        return;
    }
    console.log("✅ Auth: Foydalanuvchi sessiyasi mavjud.");

    // 2. Chat xabarlarini o'qish (Fetch)
    console.log("📡 Xabarlarni yuklash tekshirilmoqda...");
    const { data: messages, error: fetchError } = await supabase
        .from('messages')
        .select('*, profiles(full_name)')
        .limit(5);

    if (fetchError) {
        console.error("❌ Xatolik: Xabarlarni yuklashda xato:", fetchError.message);
    } else {
        console.log(`✅ Fetch: ${messages.length} ta xabar muvaffaqiyatli yuklandi.`);
    }

    // 3. Xabar yuborish (Insert)
    console.log("📝 Xabar yuborish tekshirilmoqda...");
    const testContent = `Test xabari - ${new Date().toISOString()}`;
    const { error: sendError } = await supabase
        .from('messages')
        .insert({ user_id: session.user.id, content: testContent });

    if (sendError) {
        console.error("❌ Xatolik: Xabar yuborishda xato:", sendError.message);
    } else {
        console.log("✅ Insert: Test xabari yuborildi.");
    }

    // 4. Presence va Real-time ulanish
    console.log("🌐 Real-time kanallarni tekshirish...");
    const channel = supabase.channel('test-channel');
    channel.subscribe((status) => {
        if (status === 'SUBSCRIBED') {
            console.log("✅ Real-time: Kanalga muvaffaqiyatli ulanildi.");
            supabase.removeChannel(channel);
        } else {
            console.log(`ℹ️ Real-time holati: ${status}`);
        }
    });
}

testCommunityFunctionality();
