const { chromium } = require('playwright');

const TARGET_URL = 'http://localhost:3001';
const OUT = 'C:/Users/General/AppData/Local/Temp';

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/issues', name: 'issues' },
  { path: '/issues/healthcare', name: 'issues-healthcare' },
  { path: '/events', name: 'events' },
  { path: '/events/backyard-town-hall-hood-river', name: 'event-detail' },
  { path: '/news', name: 'news' },
  { path: '/news/jordan-smith-announces-congress', name: 'news-detail' },
  { path: '/endorsements', name: 'endorsements' },
  { path: '/contact', name: 'contact' },
  { path: '/volunteer', name: 'volunteer' },
  { path: '/donate', name: 'donate' },
  { path: '/privacy', name: 'privacy' },
  { path: '/terms', name: 'terms' },
  { path: '/accessibility', name: 'accessibility' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet-1024', width: 1024, height: 1366 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  const errors = {};
  const recordError = (route, e) => {
    if (!errors[route]) errors[route] = [];
    errors[route].push(e);
  };

  // Brief throat-clear for each navigation
  for (const r of ROUTES) {
    errors[r.path] = [];
    page.removeAllListeners('pageerror');
    page.removeAllListeners('console');
    page.on('pageerror', (err) => recordError(r.path, `pageerror: ${err.message}`));
    page.on('console', (msg) => {
      if (msg.type() === 'error') recordError(r.path, `console.error: ${msg.text()}`);
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    const resp = await page.goto(TARGET_URL + r.path, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1800);
    const status = resp ? resp.status() : 'n/a';
    console.log(`${r.path} → ${status}`);

    // Desktop hero shot
    await page.screenshot({
      path: `${OUT}/site-${r.name}-desktop.png`,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
  }

  // Per viewport: home + about + events/[slug] + donate
  for (const v of VIEWPORTS) {
    if (v.name === 'desktop') continue;
    await page.setViewportSize({ width: v.width, height: v.height });
    for (const p of ['/', '/events/backyard-town-hall-hood-river', '/donate']) {
      await page.goto(TARGET_URL + p, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(1400);
      const safeName = p === '/' ? 'home' : p.split('/').filter(Boolean).join('-');
      await page.screenshot({
        path: `${OUT}/site-${safeName}-${v.name}.png`,
        clip: { x: 0, y: 0, width: v.width, height: Math.min(v.height, 1200) },
      });
    }
  }

  // Mobile menu open/close
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(TARGET_URL + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  const burger = page.locator('button[aria-label="Open menu"]');
  await burger.click();
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/site-mobile-menu-open.png`, clip: { x: 0, y: 0, width: 375, height: 812 } });
  await burger.click();
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/site-mobile-menu-closed.png`, clip: { x: 0, y: 0, width: 375, height: 812 } });

  // Collect internal links from every visited page and check 200
  const internal = new Set();
  for (const r of ROUTES) {
    await page.goto(TARGET_URL + r.path, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const hrefs = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]'))
        .map((a) => a.getAttribute('href'))
        .filter(
          (h) =>
            h &&
            !h.startsWith('http') &&
            !h.startsWith('mailto:') &&
            !h.startsWith('tel:') &&
            !h.startsWith('#')
        )
    );
    hrefs.forEach((h) => internal.add(h));
  }

  console.log('\n--- INTERNAL LINK CHECK ---');
  const linkResults = { ok: 0, broken: [] };
  for (const link of internal) {
    try {
      const res = await page.request.get(TARGET_URL + link);
      if (res.ok()) linkResults.ok++;
      else linkResults.broken.push({ link, status: res.status() });
    } catch (e) {
      linkResults.broken.push({ link, error: e.message });
    }
  }
  console.log(`OK: ${linkResults.ok}`);
  console.log('Broken:', JSON.stringify(linkResults.broken, null, 2));

  // Summary errors
  console.log('\n--- ERRORS PER ROUTE ---');
  for (const [k, list] of Object.entries(errors)) {
    if (list.length) console.log(`${k}:`, list.slice(0, 3));
  }
  const totalErr = Object.values(errors).reduce((a, l) => a + l.length, 0);
  console.log(`Total error events: ${totalErr}`);

  await browser.close();
})();
