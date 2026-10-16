const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('content_audit').filter(f => f.startsWith('page_') || f.startsWith('comp_'));

files.forEach(file => {
  const content = fs.readFileSync(path.join('content_audit', file), 'utf8');
  // Extract all string literals: "..." and '...'
  const stringRegex = /(["'])(?:(?=(\\?))\2.)*?\1/g;
  const matches = content.match(stringRegex) || [];
  
  // Filter out tiny or purely code strings
  const cleanStrings = matches
    .map(s => s.slice(1, -1).replace(/\\"/g, '"').replace(/\\n/g, ' ').trim())
    .filter(s => s.length > 15 && !s.includes('class') && !s.includes('div') && !s.startsWith('http') && !s.startsWith('/assets'));
  
  const unique = [...new Set(cleanStrings)];
  fs.writeFileSync(path.join('content_audit', `strings_${file}.json`), JSON.stringify(unique, null, 2));
  console.log(`${file}: found ${unique.length} unique substantial strings.`);
});
