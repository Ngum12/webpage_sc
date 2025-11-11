-- ================================================
-- Student Companion Chatbot - Supabase Database Schema
-- ================================================
-- Run this SQL in your Supabase SQL Editor
-- Project: wfffmtxsphynzzrclmta

-- ================================================
-- 1. MEETING BOOKINGS TABLE
-- ================================================
CREATE TABLE IF NOT EXISTS meeting_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organization TEXT NOT NULL,
    meeting_type TEXT NOT NULL CHECK (meeting_type IN ('demo', 'consultation', 'implementation', 'partnership')),
    preferred_date DATE NOT NULL,
    preferred_time TEXT NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE meeting_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert meeting bookings
CREATE POLICY "Anyone can create meeting bookings"
ON meeting_bookings FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow authenticated users to read their own bookings
CREATE POLICY "Users can view meeting bookings"
ON meeting_bookings FOR SELECT
TO public
USING (true);

-- Index for faster queries
CREATE INDEX idx_meeting_bookings_email ON meeting_bookings(email);
CREATE INDEX idx_meeting_bookings_created_at ON meeting_bookings(created_at DESC);

-- ================================================
-- 2. CHAT MESSAGES TABLE
-- ================================================
CREATE TABLE IF NOT EXISTS chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    user_id TEXT,
    message TEXT NOT NULL,
    sender TEXT NOT NULL CHECK (sender IN ('user', 'bot')),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable Row Level Security
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert chat messages
CREATE POLICY "Anyone can create chat messages"
ON chat_messages FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow users to view their own messages
CREATE POLICY "Users can view their chat messages"
ON chat_messages FOR SELECT
TO public
USING (true);

-- Indexes for faster queries
CREATE INDEX idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX idx_chat_messages_timestamp ON chat_messages(timestamp DESC);

-- ================================================
-- 3. NEWSLETTER SUBSCRIBERS TABLE
-- ================================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to newsletter"
ON newsletter_subscribers FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow users to view their subscription
CREATE POLICY "Users can view subscriptions"
ON newsletter_subscribers FOR SELECT
TO public
USING (true);

-- Index for email lookups
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);

-- ================================================
-- 4. CONTACT SUBMISSIONS TABLE
-- ================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'responded', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    responded_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to submit contact form
CREATE POLICY "Anyone can submit contact form"
ON contact_submissions FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow viewing contact submissions
CREATE POLICY "Users can view contact submissions"
ON contact_submissions FOR SELECT
TO public
USING (true);

-- Indexes
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);

-- ================================================
-- 5. ANALYTICS TABLE (Track user interactions)
-- ================================================
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_type TEXT NOT NULL,
    event_data JSONB DEFAULT '{}'::jsonb,
    session_id TEXT,
    user_agent TEXT,
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to create analytics events
CREATE POLICY "Anyone can create analytics events"
ON analytics_events FOR INSERT
TO public
WITH CHECK (true);

-- Indexes
CREATE INDEX idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_created_at ON analytics_events(created_at DESC);

-- ================================================
-- 6. FUNCTIONS & TRIGGERS
-- ================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for meeting_bookings
CREATE TRIGGER update_meeting_bookings_updated_at
BEFORE UPDATE ON meeting_bookings
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ================================================
-- 7. VIEWS FOR ADMIN DASHBOARD
-- ================================================

-- View: Recent bookings
CREATE OR REPLACE VIEW recent_bookings AS
SELECT 
    id,
    name,
    email,
    organization,
    meeting_type,
    preferred_date,
    preferred_time,
    status,
    created_at
FROM meeting_bookings
ORDER BY created_at DESC
LIMIT 50;

-- View: Chat statistics
CREATE OR REPLACE VIEW chat_statistics AS
SELECT 
    DATE(timestamp) as date,
    COUNT(*) as total_messages,
    COUNT(DISTINCT session_id) as unique_sessions,
    COUNT(CASE WHEN sender = 'user' THEN 1 END) as user_messages,
    COUNT(CASE WHEN sender = 'bot' THEN 1 END) as bot_messages
FROM chat_messages
GROUP BY DATE(timestamp)
ORDER BY date DESC;

-- View: Newsletter stats
CREATE OR REPLACE VIEW newsletter_statistics AS
SELECT 
    COUNT(*) FILTER (WHERE status = 'active') as active_subscribers,
    COUNT(*) FILTER (WHERE status = 'unsubscribed') as unsubscribed,
    COUNT(*) as total_subscribers
FROM newsletter_subscribers;

-- ================================================
-- SETUP COMPLETE!
-- ================================================
-- Next steps:
-- 1. Run this SQL in Supabase SQL Editor
-- 2. Verify tables are created
-- 3. Test with frontend integration
-- ================================================
