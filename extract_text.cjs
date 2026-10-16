const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

// Find all occurrences of JSX strings or text arrays
// Let's search for Chairman's message text in code:
const chairmanMsgIndex = code.indexOf('Salim Hamood Al Hashmi');
let p = chairmanMsgIndex;
while (p < code.length && p < chairmanMsgIndex + 4000) {
  // Let's find strings in this area
  p++;
}

// Let's write a targeted search for page contents
const keywords = [
  'Quest for Excellence',
  'Chairman',
  'Sheikh Salim',
  'Al Shomoukh International Private School',
  'Early Childhood Education',
  'Master Franchise',
  'Public-Private Partnerships',
  'Licensed Schools',
  'Working at GES',
  'Online Application',
  'Resume Review',
  'Job Fit Assessment',
  'Preliminary Interview',
  'Second Interview',
  'Job Offer',
  'Management Team',
  'Sarah',
  'Jinan',
  'Al Qurum',
  'Al Mouj',
  'Airport Heights'
];

keywords.forEach(kw => {
  let idx = 0;
  let count = 0;
  while ((idx = code.indexOf(kw, idx)) !== -1) {
    count++;
    if (count <= 2) {
      console.log(`=== FOUND: "${kw}" at index ${idx} ===`);
      console.log(code.substring(Math.max(0, idx - 150), Math.min(code.length, idx + 250)));
    }
    idx += kw.length;
  }
});
