import fs from 'fs';
let content = fs.readFileSync('data/content.tsx', 'utf-8');
content = content.replace(/font-serif/g, 'font-math');
fs.writeFileSync('data/content.tsx', content);
console.log('Replaced serif with math');
