import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://qwcognltmkfakzpohcvw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3Y29nbmx0bWtmYWt6cG9oY3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExOTEwMzIsImV4cCI6MjEwNjc2NzAzMn0.wBUFm7ANXz85YCWRTyOinHKR_xnVmaC9OgltrThC0xc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: 'sszonex-auth'
    }
});
