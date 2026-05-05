# Google OAuth Sozlash Qo'llanmasi (Supabase)

Ushbu loyihada Google Calendar integratsiyasidan foydalanish uchun Supabase loyihangizda Google OAuth provayderini yoqishingiz kerak. Agar siz `"Unsupported provider: provider is not enabled"` xatoligini olsangiz, quyidagi qadamlarni bajaring:

## 1. Google Cloud Console'da loyiha yaratish
1. [Google Cloud Console](https://console.cloud.google.com/) ga kiring.
2. Yangi loyiha yarating yoki mavjudini tanlang.
3. **APIs & Services > Credentials** bo'limiga o'ting.
4. **Create Credentials > OAuth client ID** ni tanlang.
5. **Web application** turini tanlang.
6. **Authorized redirect URIs** qismiga Supabase'dan olingan Callback URL'ni kiriting (pastga qarang).

## 2. Supabase Dashboard'da Google'ni yoqish
1. [Supabase Dashboard](https://supabase.com/dashboard) ga kiring.
2. Loyihangizni tanlang.
3. **Authentication > Providers** bo'limiga o'ting.
4. **Google** provayderini toping va uni yoqing (Enabled).
5. Google Cloud'dan olingan **Client ID** va **Client Secret** ni kiriting.
6. Shu yerdagi **Callback URL (Redirect URI)** ni nusxalab, Google Cloud Console'dagi redirect URIs qismiga qo'shing.

## 3. Scope'larni sozlash
Google Calendar'dan foydalanish uchun `scopes` qismiga quyidagilarni qo'shing:
- `https://www.googleapis.com/auth/calendar.events`
- `https://www.googleapis.com/auth/userinfo.email`
- `https://www.googleapis.com/auth/userinfo.profile`

## 4. Muhim: Offline Access
Foydalanuvchi ilovada bo'lmaganida ham sinxronizatsiya ishlashi uchun Supabase sozlamalarida **Skip nonce check** va **Allow offline access (refresh tokens)** yoqilganligiga ishonch hosil qiling.

---
*Farhodoff tomonidan tayyorlandi.*
