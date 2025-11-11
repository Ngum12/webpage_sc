import { createClient } from '@supabase/supabase-js';

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface MeetingBooking {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  organization: string;
  meeting_type: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
}

export interface ChatMessage {
  id?: string;
  user_id?: string;
  message: string;
  sender: 'user' | 'bot';
  timestamp: string;
  session_id?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribed_at?: string;
  status?: 'active' | 'unsubscribed';
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'responded' | 'resolved';
}
