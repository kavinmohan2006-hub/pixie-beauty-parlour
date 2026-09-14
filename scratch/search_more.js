async function searchAndDownload(name, query) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=' + 
              encodeURIComponent(query) + 
              '&gsrlimit=3&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json';
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'BeautyParlourWeb/1.0 (contact@salon.com)' } });
    const data = await res.json();
    const pages = Object.values(data?.query?.pages || {});
    let i = 1;
    for (const p of pages) {
      const thumb = p.imageinfo?.[0]?.thumburl;
      if (thumb && (thumb.endsWith('.jpg') || thumb.endsWith('.jpeg') || thumb.includes('.jpg/') || thumb.includes('.jpeg/'))) {
        const imgRes = await fetch(thumb, { headers: { 'User-Agent': 'BeautyParlourWeb/1.0 (contact@salon.com)' } });
        const buf = Buffer.from(await imgRes.arrayBuffer());
        const filename = `scratch/${name}_${i}.jpg`;
        fs.writeFileSync(filename, buf);
        console.log(`Saved ${filename} (${buf.length} bytes)`);
        i++;
      }
    }
  } catch (e) {
    console.log(name, 'error', e.message);
  }
}

import fs from 'fs';
await searchAndDownload('pedicure', 'pedicure treatment feet');
await searchAndDownload('haircut', 'woman haircut salon');
await searchAndDownload('hairspa', 'hair wash salon woman');
await searchAndDownload('party_makeup', 'Indian glamour makeup woman');
await searchAndDownload('engagement', 'Indian bride jewelry smile portrait');
