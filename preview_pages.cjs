const fs = require('fs');

const pages = ['about', 'operational', 'schools', 'partner', 'careers', 'news', 'contact'];

pages.forEach(p => {
  const content = fs.readFileSync(`content_audit/page_${p}.js`, 'utf8');
  console.log(`=== PAGE: ${p} (length: ${content.length}) ===`);
  // print first 1500 chars
  console.log(content.slice(0, 800));
  console.log('-------------------------------------------');
});
