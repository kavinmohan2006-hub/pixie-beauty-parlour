import fs from 'fs';

async function searchAndSave(name, query) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=' + 
              encodeURIComponent(query) + 
              '&gsrlimit=5&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json';
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'BeautyParlourWeb/1.0 (contact@salon.com)' } });
    const data = await res.json();
    const pages = Object.values(data?.query?.pages || {});
    let i = 1;
    for (const p of pages) {
      const thumb = p.imageinfo?.[0]?.thumburl;
      if (thumb && (thumb.includes('.jpg') || thumb.includes('.jpeg') || thumb.includes('.png'))) {
        const imgRes = await fetch(thumb, { headers: { 'User-Agent': 'BeautyParlourWeb/1.0 (contact@salon.com)' } });
        const buf = Buffer.from(await imgRes.arrayBuffer());
        const filename = `scratch/${name}_${i}.jpg`;
        fs.writeFileSync(filename, buf);
        console.log(`Saved ${filename} (${buf.length} bytes) - from ${p.title}`);
        i++;
        if (i > 3) break;
      }
    }
  } catch (e) {
    console.log(name, 'error', e.message);
  }
}

await searchAndSave('hairspa', 'hair wash salon sink');
await searchAndSave('party', 'fashion makeup portrait woman');
await searchAndSave('engagement', 'Indian bride jewellery traditional portrait');
