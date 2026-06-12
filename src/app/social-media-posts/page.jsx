import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import CtaSection from '@/components/cta-section'
import SocialGallery from '@/components/social/social-gallery'
import { SOCIAL_POSTS, CATEGORIES, FORMATS } from '@/data/social-posts'
import { attachHtml } from '@/lib/social-html'

export const metadata = {
  title: 'Social media posts',
  description:
    'A premium library of campaign-ready social creatives — Instagram feed, Reels and Stories — designed for the ElectSmith brand voice.',
}

const SocialMediaPostsPage = async () => {
  const posts = await attachHtml(SOCIAL_POSTS)
  const feedCount = posts.filter((p) => p.format === 'feed').length
  const storyCount = posts.filter((p) => p.format === 'story').length

  return (
    <>
      <PageHero
        eyebrow="Social library — Vol. 01 / 2026"
        title="A cinematic brand voice, shipped post by post."
        intro="Every creative below is a hand-coded, agency-quality composition built to feel native in the feed. Browse the full library, preview each design in place, and open any post for the full-screen experience."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Social posts' }]}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              In the library
            </p>
            <p className="mt-1 font-display text-2xl italic text-ink">
              {posts.length} creatives
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/55">
              {feedCount} feed · {storyCount} story
            </p>
          </div>
        }
      />

      <SectionFrame id="library" eyebrow="Browse the library">
        <SocialGallery posts={posts} categories={CATEGORIES} />
      </SectionFrame>

      {/* Format notes */}
      <SectionFrame id="formats" eyebrow="About the formats" tone="paper">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.values(FORMATS).map((f) => (
            <div
              key={f.key}
              data-reveal
              className="rounded-3xl border border-plum-500/15 bg-paper-2/40 p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-500">
                {f.label} · {f.dimensions}
              </p>
              <h3 className="mt-3 font-display text-2xl italic leading-tight text-ink sm:text-3xl">
                {f.blurb}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Native canvas is {f.nativeWidth} × {f.nativeHeight}px. Every preview is rendered at
                native resolution and scaled into place — what you see in the grid is exactly what
                ships to the feed, with no cropping or letterboxing applied.
              </p>
            </div>
          ))}
        </div>
      </SectionFrame>

      <CtaSection
        eyebrow="Use these creatives"
        title="Want this library on your feed?"
        copy="Volunteer to help amplify the campaign, or get in touch about adapting these creatives for partner orgs and coalitions."
        primary={{ label: 'Volunteer', href: '/volunteer' }}
        secondary={{ label: 'Contact press', href: '/contact' }}
      />
    </>
  )
}

export default SocialMediaPostsPage
