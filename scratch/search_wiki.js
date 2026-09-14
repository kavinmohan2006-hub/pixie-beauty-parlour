async function searchWiki(category, query) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=' + 
              encodeURIComponent(query) + 
              '&gsrlimit=5&prop=imageinfo&iiprop=url|size&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': 'BeautyParlourWeb/1.0 (contact@salon.com)' } });
  const data = await res.json();
  const pages = Object.values(data?.query?.pages || {});
  console.log('=== ' + category + ' (' + pages.length + ' results) ===');
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (info && !info.url.endsWith('.svg') && !info.url.endsWith('.ogg') && !info.url.endsWith('.tif')) {
      console.log('  ' + info.url);
    }
  }
}

await searchWiki('Bridal Makeup', 'Indian bride wedding makeup');
await searchWiki('Mehendi', 'Mehndi hands wedding bride');
await searchWiki('Saree Draping', 'Silk saree South Indian');
await searchWiki('Pedicure', 'Pedicure foot spa');
await searchWiki('Hair Spa / Wash', 'Hair wash salon');
await searchWiki('Haircut', 'Woman getting haircut salon');
await searchWiki('Party Makeup', 'Indian woman party makeup glamorous');
