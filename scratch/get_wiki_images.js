import fs from 'fs';

const files = [
  { name: 'mehendi1', title: 'File:Bridal_Mehndi.JPG' },
  { name: 'mehendi2', title: 'File:Indian_Traditional_Wedding_Images_(40).jpg' },
  { name: 'saree_drape', title: 'File:South_Asian_Bridal_Stying_by_pattupleats.jpg' },
  { name: 'saree_kanchi', title: 'File:Traditional_Silk_Sarees_–_Timeless_Kanchipuram_Elegance.jpg' },
  { name: 'hair_wash', title: 'File:Backwards_salon_hair_wash.jpg' }
];

for (const f of files) {
  const apiUrl = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' + encodeURIComponent(f.title) + '&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json';
  try {
    const res = await fetch(apiUrl, { headers: { 'User-Agent': 'BeautyParlourWeb/1.0 (contact@salon.com)' } });
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    const thumbUrl = page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url;
    if (thumbUrl) {
      const imgRes = await fetch(thumbUrl, { headers: { 'User-Agent': 'BeautyParlourWeb/1.0 (contact@salon.com)' } });
      const buf = Buffer.from(await imgRes.arrayBuffer());
      fs.writeFileSync('scratch/' + f.name + '.jpg', buf);
      console.log(f.name, 'saved', buf.length);
    } else {
      console.log(f.name, 'no thumb');
    }
  } catch (e) {
    console.log(f.name, 'error', e.message);
  }
}
