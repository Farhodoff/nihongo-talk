#!/bin/bash
# Telegram Bot Webhook Reset Script
# Run this after every 'supabase functions deploy telegram-bot'

set -e

echo "🔄 Resetting Telegram Bot Webhook..."
echo ""

# Load environment variables
if [ -f .env ]; then
    source .env
else
    echo "❌ Error: .env file not found!"
    exit 1
fi

# Check if bot token exists
if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
    echo "❌ Error: TELEGRAM_BOT_TOKEN not found in .env"
    exit 1
fi

# Delete webhook
echo "🗑️  Deleting old webhook..."
curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/deleteWebhook?drop_pending_updates=true" > /dev/null

sleep 2

# Set new webhook
echo "🔗 Setting new webhook..."
WEBHOOK_URL="https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/telegram-bot"
curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook" \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"${WEBHOOK_URL}\"}" > /dev/null

sleep 1

# Verify
echo "✅ Checking status..."
echo ""
curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo" | \
  python3 -c "import sys, json; data=json.load(sys.stdin); err = data['result'].get('last_error_message'); print('Status:', '✅ OK' if not err else '❌ ' + err); print('Pending:', data['result'].get('pending_update_count', 0))"

echo ""
echo "✨ Done! Test your bot with /start or /help"
