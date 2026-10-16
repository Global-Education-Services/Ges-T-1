const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

// Let's find objects, arrays, and text snippets
// Search for Chairman message
const chairmanIdx = code.indexOf('Sheikh Salim Hamood');
console.log('Chairman snippet:\n', code.slice(Math.max(0, chairmanIdx - 200), chairmanIdx + 800));

// Search for Impact stats
const statIdx = code.indexOf('5,000');
console.log('\nImpact snippet:\n', code.slice(Math.max(0, statIdx - 200), statIdx + 400));

// Search for Vision Mission Values
const visionIdx = code.indexOf('Our Vision');
console.log('\nVision snippet:\n', code.slice(Math.max(0, visionIdx - 200), visionIdx + 600));

// Search for News stories
const newsIdx = code.indexOf('Stories');
console.log('\nNews snippet:\n', code.slice(Math.max(0, newsIdx - 100), newsIdx + 500));
