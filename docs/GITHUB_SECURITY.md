# 🔒 GitHub Xavfsizlik Qo'llanmasi

## ⚠️ MUHIM: GitHub ga Yuklashdan Oldin

Loyihangizni GitHub ga yuklashdan oldin quyidagi xavfsizlik choralarini bajaring:

---

## ✅ 1. `.gitignore` Tekshirish

`.gitignore` faylida quyidagilar mavjudligini tekshiring:

```gitignore
# Environment variables - API keys va parollar
.env
.env.local
.env*.local
.env.development.local
.env.test.local
.env.production.local

# Dependencies
node_modules/

# Build files
dist/
build/

# IDE files
.vscode/
.idea/
*.swp

# Logs
*.log
logs/

# OS files
.DS_Store
```

---

## 🔑 2. `.env` Faylini Tekshirish

### ❌ HECH QACHON `.env` ni GitHub ga yuklamang!

`.env` faylingizda maxfiy ma'lumotlar bor:

```env
VITE_GEMINI_API_KEY=AIzaSy...  # ❌ Maxfiy!
VITE_SUPABASE_URL=https://...  # ⚠️ Maxfiy!
VITE_SUPABASE_ANON_KEY=eyJ...  # ❌ Maxfiy!
```

### ✅ O'rniga `.env.example` yarating

```env
# .env.example - Bu faylni GitHub ga yuklash mumkin
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🚀 3. GitHub ga Yuklash

### Birinchi Marta

```bash
# 1. Git repository yaratish
git init

# 2. .gitignore tekshirish
cat .gitignore | grep ".env"

# 3. .env ignore qilinganligini tekshirish
git check-ignore .env
# Output: .env (agar ignore qilingan bo'lsa)

# 4. Barcha fayllarni qo'shish
git add .

# 5. Commit qilish
git commit -m "Initial commit"

# 6. GitHub repository yaratish
# GitHub.com da yangi repository yarating

# 7. Remote qo'shish
git remote add origin https://github.com/username/repo-name.git

# 8. Push qilish
git push -u origin main
```

### Mavjud Repository

```bash
# 1. .env ni git cache dan olib tashlash (agar oldin qo'shilgan bo'lsa)
git rm --cached .env

# 2. Commit qilish
git commit -m "Remove .env from git"

# 3. Push qilish
git push
```

---

## 🔍 4. Tekshirish

### GitHub da `.env` yo'qligini tekshirish

1. GitHub repository ga o'ting
2. Fayllar ro'yxatini ko'ring
3. `.env` fayli **BO'LMASLIGI** kerak
4. `.env.example` fayli **BO'LISHI** kerak

### Local da tekshirish

```bash
# Git status
git status

# .env tracked emasligini tekshirish
git ls-files | grep .env
# Output: bo'sh (yoki faqat .env.example)

# .gitignore ishlayotganini tekshirish
git check-ignore -v .env
# Output: .gitignore:33:.env    .env
```

---

## 🆘 Agar `.env` Allaqachon GitHub ga Yuklangan Bo'lsa

### ⚠️ JIDDIY MUAMMO!

Agar `.env` GitHub ga yuklangan bo'lsa:

1. **Darhol API kalitlarni o'zgartiring!**
   - Google Gemini: Yangi key yarating
   - Supabase: Yangi project yarating yoki keyni reset qiling

2. **Git history dan olib tashlang**

```bash
# BFG Cleaner yoki git filter-branch ishlatish
# OGOHLANTIRISHLAR: Bu history ni o'zgartiradi!

# BFG Cleaner (tavsiya etiladi)
brew install bfg  # macOS
bfg --delete-files .env
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push --force
```

3. **Yangi `.env` yarating**

```bash
cp .env.example .env
# Yangi API kalitlarni kiriting
```

---

## 📋 Xavfsizlik Checklist

GitHub ga yuklashdan oldin:

- [ ] `.gitignore` da `.env` bor
- [ ] `.env.example` yaratilgan
- [ ] `git check-ignore .env` ishlaydi
- [ ] `git status` da `.env` ko'rinmaydi
- [ ] API kalitlar `.env.example` da yo'q
- [ ] `node_modules/` ignore qilingan
- [ ] `dist/` va `build/` ignore qilingan
- [ ] Maxfiy ma'lumotlar kodda yo'q

---

## 🎯 Eng Yaxshi Amaliyotlar

### 1. Environment Variables ni To'g'ri Nomlash

```env
# ✅ Yaxshi
VITE_GEMINI_API_KEY=...
VITE_SUPABASE_URL=...

# ❌ Yomon
API_KEY=...
PASSWORD=...
SECRET=...
```

### 2. Har Bir Environment Uchun Alohida

```
.env                 # Local development
.env.development     # Development server
.env.staging         # Staging server
.env.production      # Production server
```

### 3. README da Ko'rsatmalar

```markdown
## Setup

1. Clone the repository
2. Copy `.env.example` to `.env`
3. Fill in your API keys
4. Run `npm install`
5. Run `npm run dev`
```

---

## 🔐 Qo'shimcha Xavfsizlik

### GitHub Secrets (CI/CD uchun)

1. Repository Settings → Secrets → Actions
2. "New repository secret" bosing
3. Nom va qiymat kiriting
4. GitHub Actions da ishlatish:

```yaml
# .github/workflows/deploy.yml
env:
  VITE_GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
```

### Vercel/Netlify Environment Variables

1. Project Settings → Environment Variables
2. Har bir variable ni qo'shing
3. Production/Preview/Development uchun alohida

---

## ❓ FAQ

### `.env.local` va `.env` farqi nima?

- `.env` - Default values, GitHub ga yuklash mumkin
- `.env.local` - Local overrides, **hech qachon** GitHub ga yuklanmaydi

### API key leak bo'lsa nima qilish kerak?

1. Darhol keyni o'chirish/reset qilish
2. Git history dan olib tashlash
3. Yangi key yaratish
4. Monitoring qilish (noto'g'ri foydalanish bormi)

### `.gitignore` ishlamayapti?

```bash
# Git cache ni tozalash
git rm -r --cached .
git add .
git commit -m "Fix .gitignore"
```

---

## 📞 Yordam

Savollar yoki muammolar bo'lsa:
- GitHub Issues: [Issues](https://github.com/username/repo/issues)
- Documentation: [Docs](./docs/)

---

**Eslatma**: Xavfsizlik - birinchi o'rinda! API kalitlaringizni himoya qiling! 🔒
