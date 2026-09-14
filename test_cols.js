import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkCols() {
  const { data, error } = await supabase.from('bookings').insert([{
    customer_name: 'deepika',
    customer_phone: '9894161521',
    service: 'Mehendi',
    booking_date: '2026-09-18',
    booking_time: '13:00'
  }]).select();
  
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Success:', data);
  }
}
checkCols();
