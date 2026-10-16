const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

const pages = [
  { name: 'homepage', id: 'eh' },
  { name: 'about', id: 'th' },
  { name: 'operational', id: 'nh' },
  { name: 'schools', id: 'rh' },
  { name: 'partner', id: 'ih' },
  { name: 'careers', id: 'lh' },
  { name: 'news', id: 'oh' },
  { name: 'contact', id: 'ah' }
];

pages.forEach(p => {
  // Regex to find assignment to p.id, e.g. "eh=()=>" or "eh=function" or ",eh="
  const regex = new RegExp(`(?:const|let|var|,)\\s*${p.id}\\s*=\\s*(?:\\([^)]*\\)|[a-zA-Z0-9_$]+)?\\s*=>`);
  const match = regex.exec(code);
  if (match) {
    console.log(`Found ${p.name} (${p.id}) at index ${match.index}`);
    // Let's grab 15000 characters
    const snippet = code.slice(match.index, match.index + 20000);
    fs.writeFileSync(`content_audit/page_${p.name}.js`, snippet);
  } else {
    // try looser search
    const idx = code.indexOf(`${p.id}=`);
    console.log(`Fallback for ${p.name}: idx ${idx}`);
    if (idx !== -1) {
      fs.writeFileSync(`content_audit/page_${p.name}.js`, code.slice(idx, idx + 20000));
    }
  }
});

// Let's also find header and footer components
// Looking at the end of pages: `i.jsx(ln,{})` is likely Footer, `i.jsx(rn,...)` is Header!
// Let's search for `ln=` and `rn=`
['ln', 'rn'].forEach(id => {
  const idx = code.indexOf(`${id}=`);
  if (idx !== -1) {
    fs.writeFileSync(`content_audit/comp_${id}.js`, code.slice(idx, idx + 15000));
    console.log(`Found component ${id} at ${idx}`);
  }
});
