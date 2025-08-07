import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rhmfjwuaurbjwcgnojmd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJobWZqd3VhdXJiandjZ25vam1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MzE4NDQsImV4cCI6MjA2OTMwNzg0NH0.M48L1lm44qnUWd0TeWTgSo-ilRH9puS6DAYKxzRpJI4'; // use your full anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data, error } = await supabase.from('genres').select('id, name');
  console.log('Genres:', data);
  console.log('Error:', error);
}

test();
