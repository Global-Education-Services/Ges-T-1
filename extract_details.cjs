const fs = require('fs');

// We have the raw bundle and files. Let's write a comprehensive script to extract and structure the complete content.
const code = fs.readFileSync('ges_bundle.js', 'utf8');

// Let's extract schools detailed array
// In page_schools.js, we saw `p=[{name:...`
const schoolsStart = code.indexOf('Al Shomoukh International Private School (SIPS)');
const schoolsEnd = code.indexOf('return i.jsxs("div"', schoolsStart);

console.log('--- Schools data chunk ---');
console.log(code.slice(schoolsStart - 50, schoolsStart + 4000));

// Let's write a script to extract the exact arrays and objects
