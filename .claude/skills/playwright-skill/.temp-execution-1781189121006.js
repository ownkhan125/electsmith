const { chromium } = require('playwright')
;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  // Feed 07
  await page.setViewportSize({ width: 1080, height: 1080 })
  await page.goto('file:///C:/Users/General/Documents/GitHub/ElectSmith/social/feed/07-cta-donate.html', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'C:/Users/General/AppData/Local/Temp/social-feed-07-cta-donate.png' })
  console.log('feed/07 captured')

  // Stories
  await page.setViewportSize({ width: 1080, height: 1920 })
  for (const s of ['01-vertical-announcement', '06-behind-scenes', '10-brand-close']) {
    await page.goto('file:///C:/Users/General/Documents/GitHub/ElectSmith/social/story/' + s + '.html', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
    await page.screenshot({ path: 'C:/Users/General/AppData/Local/Temp/social-story-' + s + '.png' })
    console.log('story/' + s + ' captured')
  }

  await browser.close()
})()
