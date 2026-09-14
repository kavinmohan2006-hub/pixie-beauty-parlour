async function getImg(slug) {
  const res = await fetch('https://unsplash.com/photos/' + slug, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  console.log(slug, res.status);
  if (res.ok) {
    const html = await res.text();
    const matches = html.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-_]+/g);
    console.log('Matches:', [...new Set(matches || [])]);
  }
}
await getImg('a-close-up-of-a-person-getting-henna-on-another-persons-hand-74ab1cd5eafb');
await getImg('hands-with-intricate-henna-patterns-holding-each-other-against-a-dark-background-8c0ccf9c8eb8');
