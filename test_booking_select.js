import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function testSelect() {
  const { data, error } = await supabase.from('bookings').select('*').limit(1);
  console.log('Data:', data, 'Error:', error);
}
testSelect();
