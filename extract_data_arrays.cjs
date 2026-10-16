const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

// Look for Vision, Mission, Values array
// It has items with carousel or cards
const vmIdx = code.indexOf('Our Vision');
console.log('--- Vision Mission Values Snippet ---');
console.log(code.slice(vmIdx - 300, vmIdx + 1200));

// Look for services in operational / smarter educational services
const servIdx = code.indexOf('Smarter');
console.log('--- Services Snippet ---');
console.log(code.slice(servIdx - 100, servIdx + 1000));

// Look for schools data
const schoolsIdx = code.indexOf('Al Shomoukh International Private School (SIPS)');
console.log('--- Schools Snippet ---');
console.log(code.slice(schoolsIdx - 100, schoolsIdx + 1200));

// Look for leadership team array
const leadIdx = code.indexOf('Sarah Saeed');
console.log('--- Leadership Snippet ---');
console.log(code.slice(leadIdx - 200, leadIdx + 1200));

// Look for news stories array
const storiesIdx = code.indexOf('video-thumb-1');
console.log('--- Stories Snippet ---');
console.log(code.slice(storiesIdx - 200, storiesIdx + 1200));
