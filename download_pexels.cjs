const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const urls = [
  'https://images.pexels.com/photos/13854720/pexels-photo-13854720.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/14845012/pexels-photo-14845012.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/15869407/pexels-photo-15869407.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/12316530/pexels-photo-12316530.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/20348744/pexels-photo-20348744.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/13591602/pexels-photo-13591602.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/11181292/pexels-photo-11181292.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/20129032/pexels-photo-20129032.jpeg?auto=compress&cs=tinysrgb&w=800'
];

async function run() {
  for (let i = 0; i < urls.length; i++) {
    try {
      await download(urls[i], 'public/images/gallery/pexels_bride_' + (i+1) + '.jpg');
      console.log('Downloaded bride ' + (i+1));
    } catch (e) {
      console.log('Failed bride ' + (i+1), e.message);
    }
  }
}
run();
