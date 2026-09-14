import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function testInsert() {
  console.log('Testing booking insert...');
  const { data, error } = await supabase.from('bookings').insert([{
    customer_name: 'Test Kavin',
    customer_phone: '1234567890',
    service: 'Facial',
    booking_date: '2026-10-10',
    booking_time: '10:00 AM'
  }]).select();
  
  if (error) {
    console.error('Insert Failed:', error.message);
  } else {
    console.log('Insert Success:', data);
  }
}
testInsert();
