# Telegram Bot Edge Function

Supabase Edge Function to handle Telegram bot webhooks.

## Setup

1. Set the bot token secret:
```bash
supabase secrets set TELEGRAM_BOT_TOKEN=your_actual_token_here
```

2. Deploy the function:
```bash
supabase functions deploy telegram-bot --no-verify-jwt
```

3. Set webhook URL on Telegram:
```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://your-project.supabase.co/functions/v1/telegram-bot"}'
```

## Testing Locally

```bash
# Start local development
supabase functions serve telegram-bot --env-file supabase/functions/.env

# In another terminal, send test webhook
curl -X POST http://localhost:54321/functions/v1/telegram-bot \
  -H "Content-Type: application/json" \
  -d '{"message":{"text":"/start","from":{"id":123456}}}'
```

## Commands

- `/start` - Welcome message & linking instructions
- `/help` - List of available commands

## Environment Variables

- `TELEGRAM_BOT_TOKEN` - Bot token from @BotFather
