import fs from 'fs';

function replaceColors(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/gray-500/g, 'slate-500');
    content = content.replace(/gray-600/g, 'slate-600');
    content = content.replace(/gray-700/g, 'slate-700');
    content = content.replace(/gray-800/g, 'slate-800');
    content = content.replace(/gray-900/g, 'slate-900');
    content = content.replace(/gray-50/g, 'slate-50');
    content = content.replace(/gray-100/g, 'slate-100');
    content = content.replace(/gray-200/g, 'slate-200');
    content = content.replace(/gray-300/g, 'slate-300');
    content = content.replace(/gray-400/g, 'slate-400');
    
    // Convert to brand colors where prominent
    content = content.replace(/text-slate-600/g, 'text-black/70');
    content = content.replace(/text-slate-700/g, 'text-black/80');
    content = content.replace(/text-slate-800/g, 'text-black');
    content = content.replace(/text-slate-900/g, 'text-black');
    content = content.replace(/border-slate-200/g, 'border-black/10');
    content = content.replace(/border-slate-300/g, 'border-black/20');
    content = content.replace(/bg-slate-50/g, 'bg-[#fffdf0]');
    content = content.replace(/bg-slate-100/g, 'bg-[#ffe36d]/20');
    
    // Replace gray mentions with black yellow red
    
    fs.writeFileSync(filePath, content);
}

replaceColors('data/content.tsx');
replaceColors('components/TheoryView.tsx');
// replaceColors('components/VocabView.tsx');

console.log("Colors replaced");
