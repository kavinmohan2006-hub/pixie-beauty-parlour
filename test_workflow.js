import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function testBooking() {
  const { data, error } = await supabase.from('bookings').insert([{
    customer_name: 'Workflow Test',
    customer_phone: '1231231234',
    service: 'Test Service',
    booking_date: '2026-09-20',
    booking_time: '14:00'
  }]);
  
  if (error) {
    console.error('Booking Error:', error.message);
  } else {
    console.log('Booking works flawlessly!');
  }
}
testBooking();
