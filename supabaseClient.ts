import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xsahwkxbimedbvtlbhmm.supabase.co';  // Supabase project URL
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzYWh3a3hiaW1lZGJ2dGxiaG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMTM3NjAsImV4cCI6MjA0MTc4OTc2MH0.h7HxsZtGsTOU3_kasvw_dlgK36KDoBOvAujubKQ8Y9E';  // API Key


export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);


