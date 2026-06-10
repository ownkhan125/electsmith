const { chromium } = require('playwright')

const TARGET_URL = 'http://localhost:3001'
const OUT = 'C:/Users/General/AppData/Local/Temp'

// Pages that end with the dark CtaSection (every inner page does)
const ROUTES = [
  { path: '/about', name: 'about' },
  { path: '/issues', name: 'issues' },
  { path: '/events', name: 'events' },
  { path: '/news', name: 'news' },
  { path: '/endorsements', name: 'endorsements' },
  { path: '/contact', name: 'contact' },
  { path: '/volunteer', name: 'volunteer' },
  { path: '/donate', name: 'donate' },
  { path: '/', name: 'home' },
]

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1440, height: 900 })

  for (const r of ROUTES) {
    await page.goto(TARGET_URL + r.path, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(900)
    // Scroll to bottom so the CtaSection lands in view
    await page.evaluate(() =>
      window.scrollTo({ top: document.body.scrollHeight - 900, behavior: 'instant' }),
    )
    await page.waitForTimeout(1200)

    // Find the ghost-on-dark button text and capture its computed color +
    // background of its container so we can confirm contrast.
    const info = await page.evaluate(() => {
      const ghost = document.querySelector('.cine-btn--ghost-on-dark')
      if (!ghost) return { found: false }
      const cs = window.getComputedStyle(ghost)
      // Resolve the container's effective background color
      let bg = 'unknown'
      let el = ghost
      while (el && bg === 'unknown') {
        const ecs = window.getComputedStyle(el)
        if (
          ecs.backgroundColor &&
          ecs.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
          ecs.backgroundColor !== 'transparent'
        ) {
          bg = ecs.backgroundColor
        }
        el = el.parentElement
      }
      return {
        found: true,
        text: ghost.textContent.trim().slice(0, 40),
        color: cs.color,
        bgBehind: bg,
        opacity: cs.opacity,
        boxShadow: cs.boxShadow.slice(0, 80),
      }
    })
    console.log(`${r.path} → ${JSON.stringify(info)}`)

    await page.screenshot({
      path: `${OUT}/btn-${r.name}-cta.png`,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    })
  }

  // Now hover-state on /about's CtaSection secondary to confirm hover legibility
  await page.goto(TARGET_URL + '/about', { waitUntil: 'networkidle' })
  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight - 900, behavior: 'instant' }),
  )
  await page.waitForTimeout(1100)
  const ghost = page.locator('.cine-btn--ghost-on-dark').first()
  if (await ghost.count()) {
    await ghost.hover()
    await page.waitForTimeout(700)
    await page.screenshot({
      path: `${OUT}/btn-hover-state.png`,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    })
  }

  // Mobile sanity
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto(TARGET_URL + '/issues', { waitUntil: 'networkidle' })
  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight - 812, behavior: 'instant' }),
  )
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${OUT}/btn-mobile-cta.png` })

  await browser.close()
})()
