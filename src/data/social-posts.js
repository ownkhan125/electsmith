/**
 * Social media post catalog.
 * Each post is a hand-coded HTML creative served from
 * /public/social-creatives/{format}/{file}.html
 *
 * Slugs are `{format}-{kebab-name}` so URLs stay readable
 * (e.g. /social-media-posts/feed-pull-quote).
 */

export const FORMATS = {
  feed: {
    key: 'feed',
    label: 'Feed',
    aspect: '1 / 1',
    nativeWidth: 1080,
    nativeHeight: 1080,
    blurb: 'Square 1:1 — Instagram / Facebook feed',
    dimensions: '1080 × 1080',
  },
  story: {
    key: 'story',
    label: 'Story',
    aspect: '9 / 16',
    nativeWidth: 1080,
    nativeHeight: 1920,
    blurb: 'Vertical 9:16 — Stories / Reels / TikTok',
    dimensions: '1080 × 1920',
  },
}

export const CATEGORIES = [
  'Announcement',
  'Event',
  'Stat',
  'Quote',
  'CTA',
  'Endorsement',
  'Interactive',
  'Brand',
]

const POSTS = [
  // ─── FEED · 1:1 ──────────────────────────────────────────────
  {
    slug: 'feed-pull-quote',
    file: 'feed/01-pull-quote.html',
    index: '01',
    format: 'feed',
    title: 'Pull quote',
    blurb: 'Editorial-magazine pull quote with serif italic flourish.',
    category: 'Quote',
    tags: ['editorial', 'serif', 'quote'],
  },
  {
    slug: 'feed-bold-announcement',
    file: 'feed/02-bold-announcement.html',
    index: '02',
    format: 'feed',
    title: 'Bold announcement',
    blurb: 'Mega-headline launch announcement with confident hierarchy.',
    category: 'Announcement',
    tags: ['launch', 'headline'],
  },
  {
    slug: 'feed-mega-stat',
    file: 'feed/03-mega-stat.html',
    index: '03',
    format: 'feed',
    title: 'Mega stat',
    blurb: 'Single oversized statistic for impact-driven messaging.',
    category: 'Stat',
    tags: ['data', 'impact'],
  },
  {
    slug: 'feed-event-poster',
    file: 'feed/04-event-poster.html',
    index: '04',
    format: 'feed',
    title: 'Event poster',
    blurb: 'Poster-style event announcement with date and venue lock-up.',
    category: 'Event',
    tags: ['event', 'poster'],
  },
  {
    slug: 'feed-editorial-testimonial',
    file: 'feed/05-editorial-testimonial.html',
    index: '05',
    format: 'feed',
    title: 'Editorial testimonial',
    blurb: 'Testimonial card with attribution and editorial framing.',
    category: 'Quote',
    tags: ['testimonial', 'editorial'],
  },
  {
    slug: 'feed-bold-question',
    file: 'feed/06-bold-question.html',
    index: '06',
    format: 'feed',
    title: 'Bold question',
    blurb: 'Provocative question card designed to invite engagement.',
    category: 'Interactive',
    tags: ['question', 'engagement'],
  },
  {
    slug: 'feed-cta-donate',
    file: 'feed/07-cta-donate.html',
    index: '07',
    format: 'feed',
    title: 'CTA · donate',
    blurb: 'High-conversion donate ask with brand mark and clear CTA.',
    category: 'CTA',
    tags: ['donate', 'fundraise'],
  },
  {
    slug: 'feed-impact-grid',
    file: 'feed/08-impact-grid.html',
    index: '08',
    format: 'feed',
    title: 'Impact grid',
    blurb: 'Multi-stat grid summarising campaign impact at a glance.',
    category: 'Stat',
    tags: ['impact', 'grid'],
  },
  {
    slug: 'feed-wordmark-poster',
    file: 'feed/09-wordmark-poster.html',
    index: '09',
    format: 'feed',
    title: 'Wordmark poster',
    blurb: 'Display-typography brand wordmark set against negative space.',
    category: 'Brand',
    tags: ['brand', 'wordmark'],
  },
  {
    slug: 'feed-carousel-opener',
    file: 'feed/10-carousel-opener.html',
    index: '10',
    format: 'feed',
    title: 'Carousel opener',
    blurb: 'Title card designed as slide 1 of a multi-slide carousel.',
    category: 'Brand',
    tags: ['carousel', 'opener'],
  },

  // ─── STORY · 9:16 ────────────────────────────────────────────
  {
    slug: 'story-vertical-announcement',
    file: 'story/01-vertical-announcement.html',
    index: '01',
    format: 'story',
    title: 'Vertical announcement',
    blurb: 'Vertical launch poster sized for Stories and Reels covers.',
    category: 'Announcement',
    tags: ['launch', 'vertical'],
  },
  {
    slug: 'story-event-poster',
    file: 'story/02-event-poster.html',
    index: '02',
    format: 'story',
    title: 'Event poster',
    blurb: 'Vertical event announcement with date, venue, and RSVP cue.',
    category: 'Event',
    tags: ['event', 'poster'],
  },
  {
    slug: 'story-vertical-stat',
    file: 'story/03-vertical-stat.html',
    index: '03',
    format: 'story',
    title: 'Vertical stat',
    blurb: 'Full-bleed impact stat optimised for vertical viewing.',
    category: 'Stat',
    tags: ['data', 'impact'],
  },
  {
    slug: 'story-vertical-quote',
    file: 'story/04-vertical-quote.html',
    index: '04',
    format: 'story',
    title: 'Vertical quote',
    blurb: 'Pull-quote card composed for top-to-bottom reading.',
    category: 'Quote',
    tags: ['quote', 'editorial'],
  },
  {
    slug: 'story-cta-vertical',
    file: 'story/05-cta-vertical.html',
    index: '05',
    format: 'story',
    title: 'CTA · swipe up',
    blurb: 'Vertical CTA story directing toward a swipe-up action.',
    category: 'CTA',
    tags: ['cta', 'swipe-up'],
  },
  {
    slug: 'story-behind-scenes',
    file: 'story/06-behind-scenes.html',
    index: '06',
    format: 'story',
    title: 'Behind the scenes',
    blurb: 'Documentary-style behind-the-scenes frame for the campaign trail.',
    category: 'Brand',
    tags: ['BTS', 'narrative'],
  },
  {
    slug: 'story-countdown',
    file: 'story/07-countdown.html',
    index: '07',
    format: 'story',
    title: 'Countdown',
    blurb: 'Election countdown card built for urgency and recall.',
    category: 'Event',
    tags: ['countdown', 'urgency'],
  },
  {
    slug: 'story-endorsement',
    file: 'story/08-endorsement.html',
    index: '08',
    format: 'story',
    title: 'Endorsement',
    blurb: 'Vertical endorsement card highlighting a supporter quote.',
    category: 'Endorsement',
    tags: ['endorsement', 'quote'],
  },
  {
    slug: 'story-poll-style',
    file: 'story/09-poll-style.html',
    index: '09',
    format: 'story',
    title: 'Poll',
    blurb: 'Interactive-looking poll prompt to drive story reactions.',
    category: 'Interactive',
    tags: ['poll', 'engagement'],
  },
  {
    slug: 'story-brand-close',
    file: 'story/10-brand-close.html',
    index: '10',
    format: 'story',
    title: 'Brand close',
    blurb: 'Closing brand frame designed to end a story sequence.',
    category: 'Brand',
    tags: ['close', 'brand'],
  },
]

const fileNameWithoutExt = (file) => file.split('/').pop().replace(/\.html?$/, '')

export const SOCIAL_POSTS = POSTS.map((p) => ({
  ...p,
  src: `/api/social-creative/${p.format}/${fileNameWithoutExt(p.file)}`,
  formatLabel: FORMATS[p.format].label,
  aspect: FORMATS[p.format].aspect,
  nativeWidth: FORMATS[p.format].nativeWidth,
  nativeHeight: FORMATS[p.format].nativeHeight,
  dimensions: FORMATS[p.format].dimensions,
}))

export const getSocialPost = (slug) => SOCIAL_POSTS.find((p) => p.slug === slug)

export const getAdjacentPosts = (slug) => {
  const idx = SOCIAL_POSTS.findIndex((p) => p.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  const prev = idx > 0 ? SOCIAL_POSTS[idx - 1] : SOCIAL_POSTS[SOCIAL_POSTS.length - 1]
  const next = idx < SOCIAL_POSTS.length - 1 ? SOCIAL_POSTS[idx + 1] : SOCIAL_POSTS[0]
  return { prev, next }
}
