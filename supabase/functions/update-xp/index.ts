// @ts-expect-error: Deno env setup
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
  // CORS so'rovlarini (preflight) qayta ishlash
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { session_id } = await req.json()

    // Service Role kalitlari (Faqat serverda!)
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceKey = Deno.env.get('SERVICE_ROLE_KEY') ?? ''

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Foydalanuvchini tekshirish
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) throw new Error('No authorization header')

    const { data: { user }, error: authError } = await supabase.auth.getUser(authHeader.replace('Bearer ', ''))
    if (authError || !user) return new Response("Unauthorized", { status: 401, headers: corsHeaders })

    // 1. Sessiyani olish
    const { data: session, error: sessionError } = await supabase
      .from('study_sessions')
      .select('*')
      .eq('id', session_id)
      .eq('user_id', user.id)
      .single()

    if (sessionError || !session) {
      return new Response(JSON.stringify({ error: "Session not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    }

    // 2. XP Hisoblash (Server-side mantiq)
    // $XP = \text{minut} \times 5 \times \text{samaradorlik}$
    const startTime = new Date(session.start_time).getTime()
    const endTime = session.end_time ? new Date(session.end_time).getTime() : new Date().getTime()

    const durationInMinutes = Math.max(1, (endTime - startTime) / 60000)
    const earnedXP = Math.floor(durationInMinutes * 5 * (session.productivity_rating || 1))

    // 3. Profilni yangilash
    const { error: updateError } = await supabase.rpc('increment_xp', {
      row_id: user.id,
      x_amount: earnedXP
    })

    if (updateError) throw updateError

    return new Response(JSON.stringify({ earnedXP, message: "XP muvaffaqiyatli qo'shildi" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    })

  } catch (error: unknown) {
    const err = error as { message?: string };
    return new Response(JSON.stringify({ error: err.message || String(error) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    })
  }
})