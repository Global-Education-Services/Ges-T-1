const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

const modalKeys = ['downloads', 'terms', 'privacy', 'cookies', 'school-sips', 'school-qurum', 'school-mouj', 'partner'];

modalKeys.forEach(k => {
  let idx = code.indexOf(`=== "${k}"`);
  if (idx === -1) idx = code.indexOf(`==="${k}"`);
  if (idx === -1) idx = code.indexOf(`("${k}")`);
  console.log(`Key ${k} at index: ${idx}`);
  if (idx !== -1) {
    fs.writeFileSync(`content_audit/modal_${k}.txt`, code.slice(Math.max(0, idx - 200), idx + 2000));
  }
});
