import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const CSV_FILE = path.join(__dirname, 'bookings.csv');

// Initialize CSV with headers if it doesn't exist
if (!fs.existsSync(CSV_FILE)) {
  fs.writeFileSync(CSV_FILE, 'Date,Time,Name,Email,Mobile,WhatsApp,Service,Message\n');
}

app.post('/api/book', (req, res) => {
  const { name, email, phone, whatsapp, service, date, time, message } = req.body;
  
  // Format data for CSV (escape commas if necessary)
  const safeName = `"${name?.replace(/"/g, '""') || ''}"`;
  const safeEmail = `"${email?.replace(/"/g, '""') || ''}"`;
  const safeMessage = `"${message?.replace(/"/g, '""') || ''}"`;
  
  const csvRow = `${date || ''},${time || ''},${safeName},${safeEmail},${phone || ''},${whatsapp || ''},${service || ''},${safeMessage}\n`;

  
  fs.appendFile(CSV_FILE, csvRow, (err) => {
    if (err) {
      console.error('Error writing to CSV:', err);
      return res.status(500).json({ success: false, error: 'Failed to save booking' });
    }
    console.log('Booking saved to CSV:', name);
    res.json({ success: true });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`Bookings will be saved to: ${CSV_FILE}`);
});
