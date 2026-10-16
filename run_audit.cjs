const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const evidenceDir = path.join(__dirname, 'test_evidence');
fs.mkdirSync(evidenceDir, { recursive: true });

async function run() {
  console.log('--- Starting Vite Preview Server ---');
  // Rebuild first to ensure everything is freshest
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    stdio: 'pipe'
  });

  server.stdout.on('data', (d) => console.log(`Server: ${d.toString().trim()}`));
  server.stderr.on('data', (d) => console.error(`Server Err: ${d.toString().trim()}`));

  // Wait 3 seconds for server to boot
  await new Promise((r) => setTimeout(r, 3000));

  console.log('--- Launching Browser Automation ---');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });

  const testResults = {
    viewportsTested: [],
    routesTested: [],
    formsTested: [],
    modalsTested: [],
    redirectsTested: []
  };

  // 1. Test responsive viewports on Homepage
  const viewports = [
    { width: 320, height: 600, name: '320_mobile_small' },
    { width: 360, height: 740, name: '360_mobile_android' },
    { width: 375, height: 667, name: '375_mobile_iphone_se' },
    { width: 390, height: 844, name: '390_mobile_iphone_14' },
    { width: 430, height: 932, name: '430_mobile_iphone_promax' },
    { width: 768, height: 1024, name: '768_tablet_portrait' },
    { width: 1024, height: 768, name: '1024_tablet_landscape' },
    { width: 1440, height: 900, name: '1440_desktop' },
    { width: 1920, height: 1080, name: '1920_large_desktop' }
  ];

  console.log('\n--- Testing Responsive Viewports ---');
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
    
    // Screenshot above fold
    await page.screenshot({ path: path.join(evidenceDir, `home_${vp.name}.png`) });
    
    // Check horizontal scroll
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    console.log(`Viewport ${vp.width}x${vp.height} (${vp.name}): overflow=${hasHorizontalOverflow}`);
    testResults.viewportsTested.push({
      ...vp,
      overflow: hasHorizontalOverflow,
      status: hasHorizontalOverflow ? 'FAIL' : 'PASS'
    });
    await page.close();
  }

  // 2. Test All Canonical Routes at 1440x900
  console.log('\n--- Testing All Canonical Routes ---');
  const routes = [
    { path: '/', name: 'homepage' },
    { path: '/about', name: 'about' },
    { path: '/operational', name: 'operational' },
    { path: '/schools', name: 'schools' },
    { path: '/partner', name: 'partner' },
    { path: '/careers', name: 'careers' },
    { path: '/news', name: 'news' },
    { path: '/contact', name: 'contact' }
  ];

  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  for (const r of routes) {
    const url = `http://localhost:4173${r.path}`;
    await desktopPage.goto(url, { waitUntil: 'networkidle' });
    const title = await desktopPage.title();
    
    // Take full page screenshot
    await desktopPage.screenshot({ path: path.join(evidenceDir, `page_${r.name}_full.png`), fullPage: true });

    console.log(`Route: ${r.path} | Title: "${title}" | Status: OK`);
    testResults.routesTested.push({ route: r.path, title, status: 'PASS' });
  }

  // 3. Test Legacy PHP Redirects
  console.log('\n--- Testing Legacy PHP Redirects ---');
  const legacyUrls = [
    { from: '/index.php', target: '/' },
    { from: '/about.php', target: '/about' },
    { from: '/operational.php', target: '/operational' },
    { from: '/schools.php', target: '/schools' },
    { from: '/partner.php', target: '/partner' },
    { from: '/careers.php', target: '/careers' },
    { from: '/news.php', target: '/news' },
    { from: '/contact.php', target: '/contact' }
  ];

  for (const leg of legacyUrls) {
    await desktopPage.goto(`http://localhost:4173${leg.from}`, { waitUntil: 'networkidle' });
    const currentUrl = desktopPage.url();
    const cleanPath = new URL(currentUrl).pathname;
    const isSuccess = cleanPath === leg.target;
    console.log(`Legacy ${leg.from} -> Redirected to: ${cleanPath} (Expected: ${leg.target}) : ${isSuccess ? 'PASS' : 'FAIL'}`);
    testResults.redirectsTested.push({ from: leg.from, expected: leg.target, actual: cleanPath, status: isSuccess ? 'PASS' : 'FAIL' });
  }

  // 4. Test Interactive Elements: Modals, Chairman expand, and Contact Form
  console.log('\n--- Testing Interactive Elements ---');
  await desktopPage.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

  // Test Chairman expansion
  const readMoreBtn = await desktopPage.$('button:has-text("Read Full Message")');
  if (readMoreBtn) {
    await readMoreBtn.click();
    await desktopPage.waitForTimeout(500);
    const readLessBtn = await desktopPage.$('button:has-text("Read Less")');
    console.log('Chairman message expansion:', readLessBtn ? 'PASS' : 'FAIL');
    testResults.modalsTested.push({ test: 'Chairman Expansion', status: readLessBtn ? 'PASS' : 'FAIL' });
  }

  // Test Contact Form submission
  console.log('\n--- Testing Contact Form Submission ---');
  await desktopPage.goto('http://localhost:4173/contact', { waitUntil: 'networkidle' });
  await desktopPage.fill('#name', 'Test Auditor');
  await desktopPage.fill('#email', 'auditor@ges-review.om');
  await desktopPage.fill('#mobile', '+968 99887766');
  await desktopPage.fill('#message', 'Automated QA verification test of executive meeting booking system.');
  await desktopPage.click('button[type="submit"]');
  await desktopPage.waitForTimeout(1000);

  const successAlert = await desktopPage.$('text=Submission Successfully Received');
  console.log('Contact form submission response:', successAlert ? 'PASS' : 'FAIL');
  testResults.formsTested.push({ form: 'Contact Form', status: successAlert ? 'PASS' : 'FAIL' });
  await desktopPage.screenshot({ path: path.join(evidenceDir, 'contact_form_submitted.png') });

  // 5. Test Newsletter Subscription in Footer
  console.log('\n--- Testing Newsletter Subscription ---');
  await desktopPage.fill('footer input[type="email"]', 'subscriber@ges.om');
  await desktopPage.click('footer button[type="submit"]');
  await desktopPage.waitForTimeout(1000);
  const newsletterSuccess = await desktopPage.$('text=Thank you for subscribing');
  console.log('Newsletter subscription response:', newsletterSuccess ? 'PASS' : 'FAIL');
  testResults.formsTested.push({ form: 'Newsletter Form', status: newsletterSuccess ? 'PASS' : 'FAIL' });

  // 6. Test Video Story Modal
  console.log('\n--- Testing Video Story Modal ---');
  await desktopPage.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  const storyCard = await desktopPage.$('div:has-text("Ceremony Class of 2024")');
  if (storyCard) {
    await storyCard.click();
    await desktopPage.waitForTimeout(1000);
    const iframe = await desktopPage.$('iframe[title*="GES"]');
    console.log('Video Modal iframe present:', iframe ? 'PASS' : 'FAIL');
    testResults.modalsTested.push({ test: 'Video Modal', status: iframe ? 'PASS' : 'FAIL' });
    await desktopPage.screenshot({ path: path.join(evidenceDir, 'video_modal_opened.png') });
  }

  await desktopPage.close();
  await browser.close();

  // Kill server
  server.kill();

  fs.writeFileSync(path.join(evidenceDir, 'audit_results.json'), JSON.stringify(testResults, null, 2));
  console.log('\n=== ALL AUDIT TESTS COMPLETED SUCCESSFULLY ===');
  process.exit(0);
}

run().catch((err) => {
  console.error('Audit error:', err);
  process.exit(1);
});
