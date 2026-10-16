const { chromium } = require('playwright');
const { spawn } = require('child_process');

async function testVideo() {
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], { shell: true });
  await new Promise(r => setTimeout(r, 2500));

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

  // Locate the video story by text and scroll to it
  const story = page.locator('text=Ceremony Class of 2024').first();
  await story.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await story.click();
  await page.waitForTimeout(1000);

  const iframe = await page.locator('iframe').first();
  const isVisible = await iframe.isVisible();
  const src = await iframe.getAttribute('src');
  console.log(`Video Modal Test: isVisible=${isVisible}, src=${src}`);

  await page.screenshot({ path: 'test_evidence/video_modal_verified.png' });

  await browser.close();
  server.kill();
  console.log('Video modal test result:', isVisible && src.includes('embed') ? 'PASS' : 'FAIL');
}

testVideo().catch(e => {
  console.error(e);
  process.exit(1);
});
