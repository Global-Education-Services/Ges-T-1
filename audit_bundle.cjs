const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

// Asset matches
const assetMatches = [...new Set(code.match(/\/assets\/[a-zA-Z0-9_\-\.\/]+/g) || [])];
console.log('Total unique asset paths:', assetMatches.length);
fs.writeFileSync('extracted_assets.json', JSON.stringify(assetMatches, null, 2));

// Route matches
const routeMatches = [...new Set(code.match(/["'](\/[a-zA-Z0-9_\-\.\/]*)["']/g) || [])];
const routes = routeMatches.filter(r => {
  const clean = r.replace(/['"]/g, '');
  return clean.startsWith('/') && !clean.startsWith('/assets') && !clean.includes('.') && clean.length > 1;
});
console.log('Discovered routes:', routes);

// Look for Chairman message or key texts
console.log('Includes Sheikh Salim:', code.includes('Salim Hamood'));
console.log('Includes Quest for Excellence:', code.includes('Quest for Excellence'));
console.log('Includes Al Shomoukh:', code.includes('Al Shomoukh'));
console.log('Includes 5,000+:', code.includes('5,000') || code.includes('5000'));
