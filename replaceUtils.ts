import fs from 'fs';
let content = fs.readFileSync('utils/exportHelper.ts', 'utf-8');
content = content.replace(/text-blue-600/g, 'text-[#dc2323]');
fs.writeFileSync('utils/exportHelper.ts', content);

let appContent = fs.readFileSync('App.tsx', 'utf-8');
appContent = appContent.replace(/text-blue-600/g, 'text-[#dc2323]');
fs.writeFileSync('App.tsx', appContent);
console.log('Replaced in utils');
