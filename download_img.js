import https from 'https';
import fs from 'fs';
import path from 'path';

const outPath = path.join(process.cwd(), 'public', 'mathreference.png');

https.get('https://exam.satpanda.com/assets/images/mathreference.png', (res) => {
  if (!fs.existsSync(path.dirname(outPath))) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
  }
  const fileStream = fs.createWriteStream(outPath);
  res.pipe(fileStream);
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Downloaded mathreference.png');
  });
}).on('error', (err) => {
  console.error('Error:', err);
});
