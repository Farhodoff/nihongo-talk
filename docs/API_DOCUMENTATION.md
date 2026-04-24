# 🔌 AI Study Planner - API & Integration Documentation

> Detailed API specifications for External Services va Internal Endpoints

---

## 🤖 GOOGLE GEMINI AI API

### **1. Study Plan Generation**

**Purpose:** AI-powered weekly/monthly study schedule generator

**Endpoint:** `supabase/functions/v1/generate-plan` (Edge Function)

**Method:** POST

**Request Body:**
```json
{
  "subject": "Machine Learning with Python",
  "duration_weeks": 4,
  "learning_level": "intermediate",
  "hours_per_day": 2,
  "learning_style": "hands-on",
  "user_id": "uuid-here"
}
```

**Prompt Engineering Template:**
```
You are an expert curriculum designer with 15 years of experience 
in computer science education.

Create a ${duration_weeks}-week comprehensive study plan for: "${subject}"

Student Level: ${learning_level} (options: beginner, intermediate, advanced)
Available Study Time: ${hours_per_day} hours per day
Learning Style: ${learning_style} (options: hands-on, theoretical, visual)

Requirements:
1. Progressive difficulty (easy → medium → hard)
2. Mix of theory and practical exercises
3. Include recommended resources (videos, articles, projects)
4. Daily breakdown with estimated times
5. Include milestone projects for hands-on practice
6. Focus on commonly tested/used concepts

Format your response as valid JSON ONLY (no markdown):
{
  "schedule": [
    {
      "week": 1,
      "theme": "...",
      "topics": ["topic1", "topic2"],
      "daily_breakdown": [
        {
          "day": "Monday",
          "activities": [
            {"type": "lecture", "resource": "...", "duration_min": 60},
            {"type": "practice", "task": "...", "duration_min": 45}
          ]
        }
      ],
      "resources": {
        "videos": [{"title": "...", "url": "...", "duration_min": 30}],
        "articles": [{"title": "...", "url": "..."}],
        "projects": [{"name": "...", "difficulty": "medium"}]
      },
      "milestone_project": {
        "name": "...",
        "description": "...",
        "estimated_hours": 8
      }
    }
  ],
  "tips": "Key learning strategies...",
  "total_hours": 40
}
```

**Response:**
```json
{
  "schedule": [
    {
      "week": 1,
      "theme": "Fundamentals & Setup",
      "topics": ["Python Basics", "NumPy Intro", "Pandas Basics"],
      "daily_breakdown": [...],
      "resources": {...},
      "milestone_project": {...}
    }
  ],
  "tips": "Start with basics, practice daily, focus on understanding concepts",
  "total_hours": 40
}
```

**Error Handling:**
```
429 - Rate Limited
  └─ Retry after 1 hour
  └─ Check daily quota in Supabase

400 - Invalid parameters
  └─ Check subject, duration, level

500 - API error
  └─ Fallback to static templates
  └─ Log to Sentry
```

**Rate Limits:**
- Free tier: 60 requests/minute
- Per user: 5 requests/day
- Global quota: 1000 requests/day

**Implementation Code Pattern:**
```typescript
// Frontend
const generatePlan = async (config: PlanConfig) => {
  try {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke('generate-plan', {
      body: config,
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    if (error) throw error;
    
    // Validate response
    if (!isValidSchedule(data.schedule)) {
      toast.error('Invalid response format');
      return;
    }
    
    // Save to database
    await savePlan(data);
    toast.success('Plan generated!');
  } catch (err) {
    if (err.status === 429) {
      toast.error('Rate limited. Try again later.');
    } else {
      toast.error('Failed to generate plan');
    }
  }
};
```

---

### **2. Flashcard Generation**

**Purpose:** Auto-generate Anki-style flashcards from topic

**Endpoint:** `supabase/functions/v1/generate-flashcards`

**Method:** POST

**Request:**
```json
{
  "topic": "German Verbs - Present Tense",
  "count": 20,
  "difficulty": "intermediate",
  "deck_id": "uuid",
  "user_id": "uuid"
}
```

**Prompt Template:**
```
You are an expert language teacher creating spaced repetition flashcards.

Generate exactly ${count} Anki-style flashcards for: "${topic}"
Difficulty Level: ${difficulty} (beginner/intermediate/advanced)

Requirements:
1. Front (question): Clear, concise, unambiguous
2. Back (answer): Correct, with brief explanation/example if needed
3. Progressive difficulty within the set
4. Avoid duplicate concepts
5. Include examples where applicable
6. Format: Valid JSON array only

Each card must have:
- front: string (the question)
- back: string (the answer + brief context)
- example: string (usage example, optional)
- category: string (subtopic)

Return as valid JSON array:
[
  {
    "front": "How do you conjugate 'sein' in present tense (ich)?",
    "back": "'ich bin' (I am). Regular pattern for 'sein'.",
    "example": "Ich bin ein Lehrer. (I am a teacher.)",
    "category": "Auxiliary Verbs"
  }
]
```

**Response:**
```json
[
  {
    "front": "German question?",
    "back": "Answer with explanation",
    "example": "Usage example in context",
    "category": "Subtopic"
  }
]
```

**Quality Validation:**
```javascript
function validateFlashcards(cards) {
  const checks = {
    count: cards.length === expectedCount,
    structure: cards.every(c => c.front && c.back),
    length: cards.every(c => c.front.length > 5 && c.back.length > 10),
    diversity: hasDifferentCategories(cards),
    noDuplicates: new Set(cards.map(c => c.front)).size === cards.length
  };
  
  return Object.values(checks).every(Boolean);
}
```

---

### **3. Resource Recommendation**

**Purpose:** Find relevant YouTube videos, articles for a topic

**Endpoint:** `supabase/functions/v1/find-resources`

**Method:** POST

**Request:**
```json
{
  "topic": "Thermodynamics",
  "resource_types": ["video", "article", "interactive"],
  "difficulty": "intermediate"
}
```

**Prompt:**
```
Find 10 best resources (mix video, article, interactive tutorials) 
for learning: "${topic}" at ${difficulty} level.

Focus on: Free, reputable sources (YouTube, Khan Academy, Wikipedia, 
Medium articles, interactive tutorials).

Return JSON:
{
  "resources": [
    {
      "type": "video",
      "title": "...",
      "source": "YouTube",
      "url": "https://...",
      "duration_min": 15,
      "quality": "excellent",
      "recommendation_reason": "Clear explanation of core concepts"
    }
  ]
}
```

---

## 📱 TELEGRAM BOT API

### **1. Webhook Setup**

**Purpose:** Receive user messages and commands from Telegram

**Register Webhook:**
```bash
curl -X POST https://api.telegram.org/botYOUR_TOKEN/setWebhook \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-project.supabase.co/functions/v1/telegram-webhook",
    "allowed_updates": ["message", "callback_query"]
  }'
```

**Configure in Supabase:**
```sql
-- Store bot token in secrets
INSERT INTO secrets (name, value) VALUES 
  ('TELEGRAM_BOT_TOKEN', 'YOUR_TOKEN_HERE'),
  ('TELEGRAM_BOT_SECRET', 'webhook_secret_for_validation');
```

### **2. Message Handler (Edge Function)**

**Endpoint:** `POST /telegram-webhook`

**Incoming Payload (from Telegram):**
```json
{
  "update_id": 123456789,
  "message": {
    "message_id": 1,
    "from": {
      "id": 987654321,
      "first_name": "John",
      "username": "johndoe"
    },
    "chat": {
      "id": 987654321,
      "type": "private"
    },
    "date": 1700000000,
    "text": "/start"
  }
}
```

**Handler Logic:**
```typescript
// supabase/functions/telegram-webhook/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/mod.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')!

async function sendTelegramMessage(chatId: number, text: string) {
  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    }
  )
  return response.json()
}

serve(async (req) => {
  const update = await req.json()
  const message = update.message
  
  if (!message?.text) return new Response('OK')
  
  const chatId = message.chat.id
  const userId = message.from.id
  const text = message.text
  
  if (text === '/start') {
    // Link Telegram account to user
    await sendTelegramMessage(
      chatId,
      `👋 Welcome to AI Study Planner!\n\n` +
      `Your Telegram ID: ${userId}\n` +
      `Complete linking: https://app.example.com/link?tid=${userId}`
    )
    
    // Insert into telegram_users (pending status)
    await supabase.from('telegram_users').insert({
      telegram_id: userId,
      chat_id: chatId,
      first_name: message.from.first_name,
      username: message.from.username,
      status: 'pending'
    })
  }
  
  return new Response('OK')
})
```

### **3. Scheduled Notifications (Cron)**

**Purpose:** Send daily schedules at 9 AM and reminders at 8 PM

**Cron Function:** `send-daily-schedule`

**Trigger:** Every day at 9:00 AM UTC via Supabase Cron

```sql
-- Enable pg_cron extension (usually pre-enabled)
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule daily message sending
SELECT cron.schedule('send-daily-study-schedule', '0 9 * * *', 
  'SELECT send_daily_study_reminders()');
```

**Function Implementation:**
```sql
CREATE OR REPLACE FUNCTION send_daily_study_reminders()
RETURNS void AS $$
DECLARE
  user_record RECORD;
  tasks_text TEXT;
  message_text TEXT;
BEGIN
  -- Get all users with linked Telegram & notifications enabled
  FOR user_record IN 
    SELECT tu.chat_id, tu.user_id, up.first_name
    FROM telegram_users tu
    JOIN users_profiles up ON tu.user_id = up.user_id
    WHERE tu.notifications_enabled = TRUE
  LOOP
    -- Get today's tasks
    SELECT string_agg(
      '• ' || title || ' (Due: ' || due_date || ')',
      E'\n'
    ) INTO tasks_text
    FROM tasks
    WHERE user_id = user_record.user_id
      AND DATE(due_date) <= CURRENT_DATE + INTERVAL '1 day'
      AND completed = FALSE
    LIMIT 5;
    
    IF tasks_text IS NULL THEN
      tasks_text := 'No tasks scheduled for today! 🎉';
    END IF;
    
    message_text := '📚 Your Study Plan for Today' || E'\n\n' ||
                    'Hi ' || user_record.first_name || '!' || E'\n\n' ||
                    tasks_text;
    
    -- Send via Telegram API
    PERFORM http_post(
      'https://api.telegram.org/bot' || current_setting('app.telegram_token') || '/sendMessage',
      json_build_object(
        'chat_id', user_record.chat_id,
        'text', message_text,
        'parse_mode', 'HTML'
      )::text
    );
  END LOOP;
END;
$$ LANGUAGE plpgsql;
```

### **4. Deadline Reminders**

**Purpose:** Alert users 24h and 1h before exam/task deadline

```sql
CREATE OR REPLACE FUNCTION send_deadline_reminders()
RETURNS void AS $$
DECLARE
  task_record RECORD;
  message_text TEXT;
BEGIN
  -- 24 hours before
  FOR task_record IN
    SELECT t.id, t.title, tu.chat_id, up.first_name
    FROM tasks t
    JOIN users_profiles up ON t.user_id = up.user_id
    JOIN telegram_users tu ON up.user_id = tu.user_id
    WHERE (t.due_date - CURRENT_DATE) = INTERVAL '1 day'
      AND t.completed = FALSE
      AND tu.notifications_enabled = TRUE
  LOOP
    message_text := '⏰ Reminder: ' || task_record.title || 
                    ' is due tomorrow!';
    
    PERFORM http_post(
      'https://api.telegram.org/bot' || current_setting('app.telegram_token') || '/sendMessage',
      json_build_object(
        'chat_id', task_record.chat_id,
        'text', message_text
      )::text
    );
  END LOOP;
  
  -- 1 hour before
  FOR task_record IN
    SELECT t.id, t.title, tu.chat_id, up.first_name
    FROM tasks t
    JOIN users_profiles up ON t.user_id = up.user_id
    JOIN telegram_users tu ON up.user_id = tu.user_id
    WHERE (t.due_date - CURRENT_TIMESTAMP) <= INTERVAL '1 hour'
      AND (t.due_date - CURRENT_TIMESTAMP) > INTERVAL '0 hours'
      AND t.completed = FALSE
      AND tu.notifications_enabled = TRUE
  LOOP
    message_text := '⚠️ URGENT: ' || task_record.title || 
                    ' due in 1 hour!';
    
    PERFORM http_post(...);
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Schedule to run every 5 minutes
SELECT cron.schedule('send-deadline-reminders', '*/5 * * * *', 
  'SELECT send_deadline_reminders()');
```

### **5. Message Format Examples**

**Daily Schedule:**
```
📚 Your Study Plan for Today

Hi John!

✅ Tasks for today:
• Complete Python Chapter 5 (Due: Mar 26)
• Review Flashcards - Spanish Vocabulary (Due: Mar 26)
• Project: Build TODO App (Due: Mar 28)

🔥 Streak: 7 days! Keep it up!

💡 Tip: Start with the hardest task first

👉 Open app: https://app.example.com/dashboard
```

**Deadline Alert:**
```
⏰ Reminder: Final Exam Preparation
Due in 24 hours!

📖 Suggested actions:
• Review key concepts
• Practice mock exam
• Get good sleep before

🎯 Focus Mode is locked and ready!
```

---

## 🎥 JITSI MEET INTEGRATION

### **1. Study Room Setup**

**Purpose:** Real-time video study sessions with other users

**Create Study Room:**
```typescript
const createStudyRoom = async (title: string, description: string) => {
  // Generate unique room name
  const roomName = `study_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Create Jitsi URL
  const jitsiUrl = `https://meet.jitsi.si/${roomName}`;
  
  // Save to database
  const { data } = await supabase.from('study_rooms').insert({
    creator_id: user.id,
    title,
    description,
    jitsi_url: jitsiUrl,
    is_active: true,
    created_at: new Date()
  });
  
  return jitsiUrl;
};
```

**Jitsi Embed:**
```typescript
import JitsiMeetExternalAPI from '@jitsi/react-sdk';

const StudyRoomPage = ({ roomId, roomUrl }) => {
  const jitsiContainerStyle = {
    display: 'flex',
    width: '100%',
    height: '600px'
  };

  const jitsiApi = new JitsiMeetExternalAPI(
    'meet.jitsi.si',
    {
      roomName: roomUrl.split('/').pop(),
      width: '100%',
      height: '100%',
      parentNode: document.querySelector('#jitsi-container'),
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'closedcaptions', 'chat',
          'desktop', 'fullscreen', 'hangup',
          'settings', 'raisehand'
        ]
      },
      configOverwrite: {
        startWithAudioMuted: false,
        startWithVideoMuted: false,
        enableNoisyMicDetection: true
      }
    }
  );

  return (
    <div id="jitsi-container" style={jitsiContainerStyle} />
  );
};
```

---

## 📊 INTERNAL EDGE FUNCTIONS

### **1. Generate Flashcard Deck with AI**

**Endpoint:** `POST /generate-flashcard-deck`

```json
REQUEST:
{
  "topic": "World War 2",
  "card_count": 30,
  "difficulty": "intermediate"
}

RESPONSE:
{
  "deck_id": "uuid",
  "card_count": 30,
  "cards": [
    {"front": "...", "back": "..."}
  ]
}
```

### **2. Calculate XP & Update Streak**

**Endpoint:** `POST /recalculate-gamification`

```json
REQUEST:
{
  "user_id": "uuid",
  "session_duration_minutes": 25,
  "completed_cards": 20
}

RESPONSE:
{
  "xp_earned": 85,
  "level": 5,
  "streak": 10,
  "achievements_unlocked": ["Pomodoro Master"]
}
```

### **3. Health Check Endpoint**

**Endpoint:** `GET /health`

```
RESPONSE:
{
  "status": "ok",
  "database": "connected",
  "gemini_api": "available",
  "telegram_bot": "active"
}
```

---

## 🔑 ENVIRONMENT VARIABLES

```bash
# Frontend (.env.local for development, Vercel secrets for production)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_GEMINI_API_KEY=your_gemini_key_here

# Supabase Edge Functions (stored in Supabase secrets)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=service_role_key_here
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_BOT_SECRET=webhook_verification_secret
SENTRY_DSN=sentry_project_dsn
```

---

## ⚠️ ERROR CODES & RESPONSES

```
200 OK
  Success response

400 Bad Request
  Invalid parameters or request format
  
401 Unauthorized
  Missing or invalid authentication token
  
403 Forbidden
  User doesn't have permission (RLS violation)
  
429 Too Many Requests
  Rate limit exceeded
  Retry-After header included
  
500 Internal Server Error
  Server-side error
  Logged to Sentry

503 Service Unavailable
  External API (Gemini, Telegram) down
  Fallback to cached/static data
```

---

**Happy integrating!** 🚀
