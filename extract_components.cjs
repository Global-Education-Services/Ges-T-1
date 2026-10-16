const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

const components = ['eh', 'th', 'nh', 'rh', 'ih', 'lh', 'oh', 'ah'];

components.forEach(name => {
  // Search for "const name=" or "function name("
  const patterns = [
    `const ${name}=`,
    `var ${name}=`,
    `function ${name}(`,
    `let ${name}=`
  ];
  
  let found = -1;
  for (const p of patterns) {
    const idx = code.indexOf(p);
    if (idx !== -1) {
      found = idx;
      console.log(`Found ${name} at index ${idx} with pattern "${p}"`);
      break;
    }
  }

  if (found !== -1) {
    // Extract 6000 chars around it
    const snippet = code.slice(found, found + 12000);
    fs.writeFileSync(`content_audit/component_${name}.js`, snippet);
  }
});

// Also find common subcomponents like Chairman's message, header, footer
// Chairman message text:
const chIndex = code.indexOf('Honorable Sheikh Salim');
console.log('Chairman occurrence count:');
let idx = 0;
let chCount = 0;
while ((idx = code.indexOf('Honorable Sheikh Salim', idx)) !== -1) {
  chCount++;
  console.log(`Chairman at ${idx}`);
  fs.writeFileSync(`content_audit/chairman_snippet_${chCount}.txt`, code.slice(Math.max(0, idx - 500), idx + 2500));
  idx += 22;
}

console.log('Components written to content_audit/');
