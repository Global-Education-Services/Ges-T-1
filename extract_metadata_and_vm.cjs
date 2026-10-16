const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

// Find the page metadata dictionary
const seoIdx = code.indexOf('"/about":{title:');
if (seoIdx !== -1) {
  // Find where it starts and ends
  const start = code.lastIndexOf('{', seoIdx);
  // find matching or take a good chunk
  const slice = code.slice(start, start + 15000);
  fs.writeFileSync('content_audit/seo_metadata.js', slice);
  console.log('Saved seo_metadata.js');
}

// Find vision mission values in homepage
const hpFile = fs.readFileSync('content_audit/page_homepage.js', 'utf8');
// Let's find array definitions in hpFile or around it
// Look for carousel items
const chIdx = code.indexOf('carousel__controls');
console.log('carousel controls index:', chIdx);
console.log(code.slice(chIdx - 1500, chIdx + 2500));
