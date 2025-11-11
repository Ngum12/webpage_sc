-- ================================================
-- VERIFICATION QUERIES
-- ================================================
-- Run these queries to verify your database is set up correctly
-- Copy and paste each query one at a time in Supabase SQL Editor

-- 1. Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE'
ORDER BY table_name;

-- 2. Check meeting_bookings structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'meeting_bookings'
ORDER BY ordinal_position;

-- 3. Check chat_messages structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'chat_messages'
ORDER BY ordinal_position;

-- 4. Check newsletter_subscribers structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'newsletter_subscribers'
ORDER BY ordinal_position;

-- 5. View all policies
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- 6. Check recent bookings (should return empty result if no data yet)
SELECT * FROM meeting_bookings ORDER BY created_at DESC LIMIT 5;

-- 7. Check chat messages (should return empty result if no data yet)
SELECT * FROM chat_messages ORDER BY timestamp DESC LIMIT 5;

-- 8. Check newsletter subscribers (should return empty result if no data yet)
SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC LIMIT 5;

-- 9. Test views
SELECT * FROM recent_bookings LIMIT 5;
SELECT * FROM chat_statistics LIMIT 5;
SELECT * FROM newsletter_statistics;

-- ================================================
-- If all queries run successfully, your database is ready! ✅
-- ================================================
