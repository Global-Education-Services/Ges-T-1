const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = JSON.parse(fs.readFileSync('extracted_assets.json', 'utf8'));

// Filter valid downloadable asset paths
const downloadable = assets.filter(a => {
  return a.startsWith('/assets/') && (
    a.endsWith('.png') || a.endsWith('.jpg') || a.endsWith('.jpeg') || 
    a.endsWith('.svg') || a.endsWith('.gif') || a.endsWith('.pdf') || a.endsWith('.ico')
  );
});

// Also add favicon and key brochure if not in list
downloadable.push('/assets/img/favicon.ico');
downloadable.push('/assets/downloads/GES Corporate Broucher.pdf');

console.log(`Starting download of ${downloadable.length} assets...`);

function downloadFile(urlPath) {
  return new Promise((resolve) => {
    const cleanPath = urlPath.replace(/\s/g, '%20');
    const fullUrl = `https://www.ges.om${cleanPath}`;
    const localRelPath = path.join('public', urlPath.replace(/^\//, ''));
    const dir = path.dirname(localRelPath);

    fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(localRelPath);
    https.get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve({ path: urlPath, success: true });
        });
      } else {
        file.close();
        if (fs.existsSync(localRelPath)) fs.unlinkSync(localRelPath);
        resolve({ path: urlPath, success: false, status: res.statusCode });
      }
    }).on('error', (err) => {
      if (fs.existsSync(localRelPath)) fs.unlinkSync(localRelPath);
      resolve({ path: urlPath, success: false, error: err.message });
    });
  });
}

async function run() {
  let successCount = 0;
  for (let i = 0; i < downloadable.length; i += 5) {
    const batch = downloadable.slice(i, i + 5);
    const results = await Promise.all(batch.map(downloadFile));
    for (const r of results) {
      if (r.success) {
        successCount++;
      } else {
        console.log(`Failed: ${r.path} (${r.status || r.error})`);
      }
    }
  }
  console.log(`Finished downloading: ${successCount} / ${downloadable.length} assets successfully saved.`);
}

run();
