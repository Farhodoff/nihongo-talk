-- Exams table
CREATE TABLE IF NOT EXISTS exams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- e.g., 'IELTS', 'JLPT N2', 'JLPT N3'
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Exam sections (Reading Passages, Listening Parts, Writing Tasks, etc.)
CREATE TABLE IF NOT EXISTS exam_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exam_id UUID REFERENCES exams(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    type TEXT NOT NULL, -- 'Reading', 'Listening', 'Writing', 'Speaking'
    content TEXT, -- For reading passages
    audio_url TEXT, -- For listening
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Questions for Reading & Listening
CREATE TABLE IF NOT EXISTS exam_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section_id UUID REFERENCES exam_sections(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    type TEXT NOT NULL, -- 'multiple_choice', 'true_false', 'matching', 'short_answer'
    options JSONB,
    correct_answer TEXT,
    explanation TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Prompts for Writing & Speaking
CREATE TABLE IF NOT EXISTS exam_prompts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section_id UUID REFERENCES exam_sections(id) ON DELETE CASCADE,
    prompt_text TEXT NOT NULL,
    type TEXT NOT NULL, -- 'writing_task_1', 'writing_task_2', 'speaking_part_1'
    image_url TEXT,
    time_limit_minutes INTEGER,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- User exam sessions
CREATE TABLE IF NOT EXISTS exam_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exam_id UUID REFERENCES exams(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'in_progress',
    started_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- User answers for Reading & Listening
CREATE TABLE IF NOT EXISTS exam_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES exam_sessions(id) ON DELETE CASCADE,
    question_id UUID REFERENCES exam_questions(id) ON DELETE CASCADE,
    user_answer TEXT,
    is_correct BOOLEAN,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- User responses for Writing & Speaking
CREATE TABLE IF NOT EXISTS exam_prompt_responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES exam_sessions(id) ON DELETE CASCADE,
    prompt_id UUID REFERENCES exam_prompts(id) ON DELETE CASCADE,
    text_response TEXT,
    audio_url TEXT,
    ai_score DECIMAL,
    ai_feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add RLS Policies
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_prompts ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_prompt_responses ENABLE ROW LEVEL SECURITY;

-- Admins can do everything, users can read published exams
CREATE POLICY "Anyone can view published exams" ON exams FOR SELECT USING (is_published = true OR (auth.jwt() ->> 'role' = 'admin'));
CREATE POLICY "Admins can manage exams" ON exams FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Anyone can view sections of published exams" ON exam_sections FOR SELECT USING (EXISTS (SELECT 1 FROM exams WHERE id = exam_sections.exam_id AND (is_published = true OR auth.jwt() ->> 'role' = 'admin')));
CREATE POLICY "Admins can manage exam sections" ON exam_sections FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Anyone can view questions of published exams" ON exam_questions FOR SELECT USING (EXISTS (SELECT 1 FROM exam_sections JOIN exams ON exam_sections.exam_id = exams.id WHERE exam_sections.id = exam_questions.section_id AND (exams.is_published = true OR auth.jwt() ->> 'role' = 'admin')));
CREATE POLICY "Admins can manage exam questions" ON exam_questions FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Anyone can view prompts of published exams" ON exam_prompts FOR SELECT USING (EXISTS (SELECT 1 FROM exam_sections JOIN exams ON exam_sections.exam_id = exams.id WHERE exam_sections.id = exam_prompts.section_id AND (exams.is_published = true OR auth.jwt() ->> 'role' = 'admin')));
CREATE POLICY "Admins can manage exam prompts" ON exam_prompts FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Users can only manage their own sessions
CREATE POLICY "Users can view their own sessions" ON exam_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own sessions" ON exam_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own sessions" ON exam_sessions FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own answers" ON exam_answers FOR ALL USING (EXISTS (SELECT 1 FROM exam_sessions WHERE id = exam_answers.session_id AND user_id = auth.uid()));

CREATE POLICY "Users can manage their own prompt responses" ON exam_prompt_responses FOR ALL USING (EXISTS (SELECT 1 FROM exam_sessions WHERE id = exam_prompt_responses.session_id AND user_id = auth.uid()));
