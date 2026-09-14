import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function addMissingBooking() {
  const { data, error } = await supabase.from('bookings').insert([{
    customer_name: 'deepika',
    customer_phone: '9894161521',
    customer_whatsapp: '9894161521',
    service: 'Mehendi',
    price: 199,
    booking_date: '2026-09-18',
    booking_time: '13:00',
    notes: 'No additional message'
  }]).select();
  
  if (error) {
    console.error('Error adding booking:', error.message);
  } else {
    console.log('Successfully added booking:', data);
  }
}
addMissingBooking();
