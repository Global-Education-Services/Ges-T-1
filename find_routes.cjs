const fs = require('fs');

const code = fs.readFileSync('ges_bundle.js', 'utf8');

// Let's create an output directory for all audited contents
fs.mkdirSync('content_audit', { recursive: true });

// Find all routes and component names
// React router setup:
const routerMatch = code.match(/createBrowserRouter\(\[([\s\S]*?)\]\)/) || code.match(/useRoutes\(\[([\s\S]*?)\]\)/);
if (routerMatch) {
  console.log('Router match found:');
  console.log(routerMatch[1].slice(0, 500));
}

// Let's look for routes definition in the code
const routeRegex = /path:\s*["']([^"']+)["'],\s*element:\s*i\.jsx\(([a-zA-Z0-9_$]+)/g;
let m;
const routeComponents = [];
while ((m = routeRegex.exec(code)) !== null) {
  routeComponents.push({ path: m[1], componentName: m[2], index: m.index });
}
console.log('Route components:', routeComponents);

fs.writeFileSync('content_audit/routes.json', JSON.stringify(routeComponents, null, 2));
