
\restrict CE6B74Ki810A6cP1aWsR5SALCssHhlUCc5VLee4Tvct92L0KWtqVxe0J2yRCVMd


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$;


ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."increment_xp"("row_id" "uuid", "x_amount" integer) RETURNS "void"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  UPDATE profiles
  SET xp = COALESCE(xp, 0) + x_amount
  WHERE id = row_id;
END;
$$;


ALTER FUNCTION "public"."increment_xp"("row_id" "uuid", "x_amount" integer) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_sessions_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_sessions_updated_at"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_tasks_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_tasks_updated_at"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."flashcards" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "subject_id" "uuid" NOT NULL,
    "front" "text" NOT NULL,
    "back" "text" NOT NULL,
    "next_review_date" timestamp with time zone,
    "interval" integer DEFAULT 0,
    "ease_factor" double precision DEFAULT 2.5,
    "repetitions" integer DEFAULT 0,
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL
);


ALTER TABLE "public"."flashcards" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."goals" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "description" "text",
    "deadline" timestamp with time zone,
    "progress" integer DEFAULT 0,
    "color" "text" DEFAULT '#6366f1'::"text",
    "priority" "text" DEFAULT 'medium'::"text",
    "completed" boolean DEFAULT false,
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL
);


ALTER TABLE "public"."goals" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."notes" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "subject_id" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "content" "text",
    "attachments" "jsonb" DEFAULT '[]'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL
);


ALTER TABLE "public"."notes" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" NOT NULL,
    "email" "text",
    "full_name" "text",
    "avatar_url" "text",
    "theme" "text" DEFAULT 'system'::"text",
    "notifications_enabled" boolean DEFAULT true,
    "total_xp" integer DEFAULT 0,
    "level" integer DEFAULT 1,
    "current_streak" integer DEFAULT 0,
    "last_activity_date" "date",
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL
);


ALTER TABLE "public"."profiles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."study_sessions" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "subject_id" "uuid",
    "start_time" timestamp with time zone NOT NULL,
    "duration" integer NOT NULL,
    "type" "text" DEFAULT 'focus'::"text",
    "completed" boolean DEFAULT true,
    "mood_before" integer,
    "mood_after" integer,
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "task_id" "uuid",
    "end_time" timestamp with time zone,
    "planned_duration" integer,
    "productivity_rating" integer,
    "interrupted" boolean DEFAULT false,
    "interruption_reason" "text",
    "notes" "text",
    "topics_covered" "jsonb" DEFAULT '[]'::"jsonb",
    "breaks_taken" integer DEFAULT 0,
    "xp_earned" integer DEFAULT 0,
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "study_sessions_productivity_rating_check" CHECK ((("productivity_rating" >= 1) AND ("productivity_rating" <= 5))),
    CONSTRAINT "study_sessions_type_check" CHECK (("type" = ANY (ARRAY['focus'::"text", 'pomodoro'::"text", 'review'::"text", 'practice'::"text", 'break'::"text"])))
);


ALTER TABLE "public"."study_sessions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."subjects" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "color" "text" DEFAULT '#10b981'::"text",
    "teacher_name" "text",
    "room_location" "text",
    "schedule" "jsonb" DEFAULT '[]'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL
);


ALTER TABLE "public"."subjects" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."recent_sessions" AS
 SELECT "ss"."id",
    "ss"."user_id",
    "ss"."subject_id",
    "ss"."start_time",
    "ss"."duration",
    "ss"."type",
    "ss"."completed",
    "ss"."mood_before",
    "ss"."mood_after",
    "ss"."created_at",
    "ss"."task_id",
    "ss"."end_time",
    "ss"."planned_duration",
    "ss"."productivity_rating",
    "ss"."interrupted",
    "ss"."interruption_reason",
    "ss"."notes",
    "ss"."topics_covered",
    "ss"."breaks_taken",
    "ss"."xp_earned",
    "ss"."updated_at",
    "s"."name" AS "subject_name",
    "s"."color" AS "subject_color"
   FROM ("public"."study_sessions" "ss"
     LEFT JOIN "public"."subjects" "s" ON (("ss"."subject_id" = "s"."id")))
  WHERE (("ss"."start_time" >= ("now"() - '7 days'::interval)) AND ("ss"."user_id" = "auth"."uid"()))
  ORDER BY "ss"."start_time" DESC;


ALTER VIEW "public"."recent_sessions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tasks" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "status" "text" DEFAULT 'todo'::"text",
    "priority" "text" DEFAULT 'medium'::"text",
    "completed" boolean DEFAULT false,
    "due_date" timestamp with time zone,
    "goal_id" "uuid",
    "subject_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "description" "text",
    "tags" "jsonb" DEFAULT '[]'::"jsonb",
    "estimated_duration" integer,
    "actual_duration" integer,
    "completed_at" timestamp with time zone,
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "tasks_priority_check" CHECK (("priority" = ANY (ARRAY['low'::"text", 'medium'::"text", 'high'::"text", 'urgent'::"text"]))),
    CONSTRAINT "tasks_status_check" CHECK (("status" = ANY (ARRAY['todo'::"text", 'in_progress'::"text", 'done'::"text", 'archived'::"text"])))
);


ALTER TABLE "public"."tasks" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."today_tasks" AS
 SELECT "t"."id",
    "t"."user_id",
    "t"."title",
    "t"."status",
    "t"."priority",
    "t"."completed",
    "t"."due_date",
    "t"."goal_id",
    "t"."subject_id",
    "t"."created_at",
    "t"."description",
    "t"."tags",
    "t"."estimated_duration",
    "t"."actual_duration",
    "t"."completed_at",
    "t"."updated_at",
    "s"."name" AS "subject_name",
    "s"."color" AS "subject_color"
   FROM ("public"."tasks" "t"
     LEFT JOIN "public"."subjects" "s" ON (("t"."subject_id" = "s"."id")))
  WHERE (("t"."due_date" = CURRENT_DATE) AND ("t"."completed" = false) AND ("t"."user_id" = "auth"."uid"()));


ALTER VIEW "public"."today_tasks" OWNER TO "postgres";


ALTER TABLE ONLY "public"."flashcards"
    ADD CONSTRAINT "flashcards_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."goals"
    ADD CONSTRAINT "goals_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."notes"
    ADD CONSTRAINT "notes_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."study_sessions"
    ADD CONSTRAINT "study_sessions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."subjects"
    ADD CONSTRAINT "subjects_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("id");



CREATE INDEX "idx_sessions_completed" ON "public"."study_sessions" USING "btree" ("completed");



CREATE INDEX "idx_sessions_start_time" ON "public"."study_sessions" USING "btree" ("start_time" DESC);



CREATE INDEX "idx_sessions_subject_id" ON "public"."study_sessions" USING "btree" ("subject_id");



CREATE INDEX "idx_sessions_task_id" ON "public"."study_sessions" USING "btree" ("task_id");



CREATE INDEX "idx_sessions_type" ON "public"."study_sessions" USING "btree" ("type");



CREATE INDEX "idx_sessions_user_id" ON "public"."study_sessions" USING "btree" ("user_id");



CREATE INDEX "idx_tasks_due_date" ON "public"."tasks" USING "btree" ("due_date");



CREATE INDEX "idx_tasks_goal_id" ON "public"."tasks" USING "btree" ("goal_id");



CREATE INDEX "idx_tasks_priority" ON "public"."tasks" USING "btree" ("priority");



CREATE INDEX "idx_tasks_status" ON "public"."tasks" USING "btree" ("status");



CREATE INDEX "idx_tasks_subject_id" ON "public"."tasks" USING "btree" ("subject_id");



CREATE INDEX "idx_tasks_user_id" ON "public"."tasks" USING "btree" ("user_id");



CREATE OR REPLACE TRIGGER "sessions_updated_at_trigger" BEFORE UPDATE ON "public"."study_sessions" FOR EACH ROW EXECUTE FUNCTION "public"."update_sessions_updated_at"();



CREATE OR REPLACE TRIGGER "tasks_updated_at_trigger" BEFORE UPDATE ON "public"."tasks" FOR EACH ROW EXECUTE FUNCTION "public"."update_tasks_updated_at"();



ALTER TABLE ONLY "public"."flashcards"
    ADD CONSTRAINT "flashcards_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."flashcards"
    ADD CONSTRAINT "flashcards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."goals"
    ADD CONSTRAINT "goals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."notes"
    ADD CONSTRAINT "notes_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."notes"
    ADD CONSTRAINT "notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."study_sessions"
    ADD CONSTRAINT "study_sessions_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."study_sessions"
    ADD CONSTRAINT "study_sessions_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."study_sessions"
    ADD CONSTRAINT "study_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."subjects"
    ADD CONSTRAINT "subjects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "public"."goals"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



CREATE POLICY "Users can crud flashcards" ON "public"."flashcards" USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can crud goals" ON "public"."goals" USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can crud notes" ON "public"."notes" USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can crud sessions" ON "public"."study_sessions" USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can crud subjects" ON "public"."subjects" USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can crud tasks" ON "public"."tasks" USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can delete own sessions" ON "public"."study_sessions" FOR DELETE USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can delete own tasks" ON "public"."tasks" FOR DELETE USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can insert own profile" ON "public"."profiles" FOR INSERT WITH CHECK (("auth"."uid"() = "id"));



CREATE POLICY "Users can insert own sessions" ON "public"."study_sessions" FOR INSERT WITH CHECK (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can insert own tasks" ON "public"."tasks" FOR INSERT WITH CHECK (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can update own profile" ON "public"."profiles" FOR UPDATE USING (("auth"."uid"() = "id"));



CREATE POLICY "Users can update own sessions" ON "public"."study_sessions" FOR UPDATE USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can update own tasks" ON "public"."tasks" FOR UPDATE USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can view all profiles" ON "public"."profiles" FOR SELECT USING (true);



CREATE POLICY "Users can view own profile" ON "public"."profiles" FOR SELECT USING (("auth"."uid"() = "id"));



CREATE POLICY "Users can view own sessions" ON "public"."study_sessions" FOR SELECT USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can view own tasks" ON "public"."tasks" FOR SELECT USING (("auth"."uid"() = "user_id"));



ALTER TABLE "public"."flashcards" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."goals" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."notes" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."study_sessions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."subjects" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tasks" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";






GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

























































































































































GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";



GRANT ALL ON FUNCTION "public"."increment_xp"("row_id" "uuid", "x_amount" integer) TO "anon";
GRANT ALL ON FUNCTION "public"."increment_xp"("row_id" "uuid", "x_amount" integer) TO "authenticated";
GRANT ALL ON FUNCTION "public"."increment_xp"("row_id" "uuid", "x_amount" integer) TO "service_role";



GRANT ALL ON FUNCTION "public"."update_sessions_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_sessions_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_sessions_updated_at"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_tasks_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_tasks_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_tasks_updated_at"() TO "service_role";


















GRANT ALL ON TABLE "public"."flashcards" TO "anon";
GRANT ALL ON TABLE "public"."flashcards" TO "authenticated";
GRANT ALL ON TABLE "public"."flashcards" TO "service_role";



GRANT ALL ON TABLE "public"."goals" TO "anon";
GRANT ALL ON TABLE "public"."goals" TO "authenticated";
GRANT ALL ON TABLE "public"."goals" TO "service_role";



GRANT ALL ON TABLE "public"."notes" TO "anon";
GRANT ALL ON TABLE "public"."notes" TO "authenticated";
GRANT ALL ON TABLE "public"."notes" TO "service_role";



GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";



GRANT ALL ON TABLE "public"."study_sessions" TO "anon";
GRANT ALL ON TABLE "public"."study_sessions" TO "authenticated";
GRANT ALL ON TABLE "public"."study_sessions" TO "service_role";



GRANT ALL ON TABLE "public"."subjects" TO "anon";
GRANT ALL ON TABLE "public"."subjects" TO "authenticated";
GRANT ALL ON TABLE "public"."subjects" TO "service_role";



GRANT ALL ON TABLE "public"."recent_sessions" TO "anon";
GRANT ALL ON TABLE "public"."recent_sessions" TO "authenticated";
GRANT ALL ON TABLE "public"."recent_sessions" TO "service_role";



GRANT ALL ON TABLE "public"."tasks" TO "anon";
GRANT ALL ON TABLE "public"."tasks" TO "authenticated";
GRANT ALL ON TABLE "public"."tasks" TO "service_role";



GRANT ALL ON TABLE "public"."today_tasks" TO "anon";
GRANT ALL ON TABLE "public"."today_tasks" TO "authenticated";
GRANT ALL ON TABLE "public"."today_tasks" TO "service_role";









ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";






























\unrestrict CE6B74Ki810A6cP1aWsR5SALCssHhlUCc5VLee4Tvct92L0KWtqVxe0J2yRCVMd

RESET ALL;
