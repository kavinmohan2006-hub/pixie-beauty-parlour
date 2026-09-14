import fs from 'fs';

const code = fs.readFileSync('src/components/OurWorks.tsx', 'utf8') + 
             fs.readFileSync('src/data/gallery.ts', 'utf8') +
             fs.readFileSync('src/components/Bridal.tsx', 'utf8') +
             fs.readFileSync('src/components/Hero.tsx', 'utf8');

const urls = [...new Set(code.match(/https:\/\/images\.unsplash\.com\/[^\s\"\'\`,]+/g) || [])];
console.log('Testing ' + urls.length + ' URLs...');

for (const u of urls) {
  try {
    const res = await fetch(u, { method: 'HEAD' });
    console.log(res.status, u.split('?')[0]);
  } catch (e) {
    console.log('ERR', u.split('?')[0]);
  }
}
