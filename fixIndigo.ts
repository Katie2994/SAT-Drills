import fs from 'fs';

let res = fs.readFileSync('components/ResourcesView.tsx', 'utf-8');
res = res.replace(/bg-indigo-300/g, 'bg-[#ffe36d]');
res = res.replace(/hover:text-indigo-600/g, 'hover:text-[#dc2323]');
res = res.replace(/group-hover:text-indigo-600/g, 'group-hover:text-[#dc2323]');
res = res.replace(/hover:border-indigo-600/g, 'hover:border-[#dc2323]');
res = res.replace(/text-slate-900/g, 'text-black');
fs.writeFileSync('components/ResourcesView.tsx', res);

let home = fs.readFileSync('components/HomeView.tsx', 'utf-8');
home = home.replace(/text-indigo-950/g, 'text-black');
fs.writeFileSync('components/HomeView.tsx', home);

console.log("Colors updated!");
