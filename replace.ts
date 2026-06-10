import fs from 'fs';
let content = fs.readFileSync('data/content.tsx', 'utf-8');
content = content.replace(/bg-blue-50 border-l-4 border-blue-500/g, 'bg-[#fffdf0] border-l-4 border-[#ffe36d]');
content = content.replace(/text-blue-600/g, 'text-[#dc2323]');
content = content.replace(/bg-blue-50/g, 'bg-[#fffdf0]');
fs.writeFileSync('data/content.tsx', content);
console.log('Replaced colors');
