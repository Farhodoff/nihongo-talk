# Bot 401 Error - Quick Fix Guide

## ⚠️ Problem

After every `supabase functions deploy`, the bot stops working with:
```
Wrong response from the webhook: 401 Unauthorized
```

## 🔍 Why This Happens

Supabase Edge Functions require JWT authentication by default. Telegram webhooks don't send auth headers.

## ✅ Quick Fix (Run After Every Deploy)

```bash
# 1. Check webhook status
source .env
curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo" | python3 -m json.tool

# 2. If you see "401 Unauthorized" error, reset webhook:
curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/deleteWebhook?drop_pending_updates=true"

sleep 1

curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/telegram-bot"}'

# 3. Verify
curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo" | python3 -m json.tool
```

## 🔄 One-Liner for Quick Reset

```bash
source .env && curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/deleteWebhook?drop_pending_updates=true" && sleep 1 && curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook" -H "Content-Type: application/json" -d '{"url": "https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/telegram-bot"}' | python3 -m json.tool
```

## 📝 Deploy Workflow

```bash
# Always run these in order:
cd supabase/functions/telegram-bot
supabase functions deploy telegram-bot

# THEN immediately:
source ../../../.env
curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/deleteWebhook?drop_pending_updates=true"
sleep 1
curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/telegram-bot"}'
```

## ✅ Verify Bot Working

```bash
# Test in Telegram:
/start   # Should show your account status
/help    # Should show help guide
```

---

**Save this file for future reference!** 🔖
