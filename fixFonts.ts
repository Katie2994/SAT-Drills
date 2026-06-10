import fs from 'fs';

let content = fs.readFileSync('components/TheoryView.tsx', 'utf-8');

// Any explicit font family class replacements
content = content.replace(/font-[a-z]+/g, (match) => {
    if (match === 'font-bold' || match === 'font-semibold' || match === 'font-extrabold' || match === 'font-medium' || match === 'font-black' || match === 'font-normal' || match === 'font-serif') return match;
    if (match === 'font-mono' || match === 'font-sans' || match === 'font-display') return match;
    return match;
});

fs.writeFileSync('components/TheoryView.tsx', content);
