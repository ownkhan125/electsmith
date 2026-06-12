import PropTypes from 'prop-types'
import { notFound } from 'next/navigation'
import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import CtaSection from '@/components/cta-section'
import SocialStage from '@/components/social/social-stage'
import SocialPager from '@/components/social/social-pager'
import { SOCIAL_POSTS, getSocialPost, getAdjacentPosts } from '@/data/social-posts'
import { readCreativeHtml } from '@/lib/social-html'

export const generateStaticParams = () => SOCIAL_POSTS.map((p) => ({ slug: p.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const post = getSocialPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} · ${post.formatLabel}`,
    description: post.blurb,
  }
}

const SocialPostPage = async ({ params }) => {
  const { slug } = await params
  const post = getSocialPost(slug)
  if (!post) notFound()

  const { prev, next } = getAdjacentPosts(slug)

  const [html, prevHtml, nextHtml] = await Promise.all([
    readCreativeHtml(post.file),
    prev ? readCreativeHtml(prev.file) : Promise.resolve(''),
    next ? readCreativeHtml(next.file) : Promise.resolve(''),
  ])

  const postWithHtml = { ...post, html }
  const prevWithHtml = prev ? { ...prev, html: prevHtml } : null
  const nextWithHtml = next ? { ...next, html: nextHtml } : null

  return (
    <>
      <PageHero
        eyebrow={`${post.formatLabel} · ${post.category} · ${post.index}`}
        title={post.title}
        intro={post.blurb}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Social posts', href: '/social-media-posts' },
          { label: post.title },
        ]}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              Native size
            </p>
            <p className="mt-1 font-display text-2xl italic text-ink">{post.dimensions}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/55">
              Aspect {post.aspect.replace(' / ', ' : ')}
            </p>
          </div>
        }
      />

      {/* Live preview stage */}
      <section className="relative pt-2 pb-16 sm:pt-6 md:pt-10 md:pb-24">
        <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-10 md:px-16">
          <SocialStage post={postWithHtml} />
        </div>
      </section>

      {/* Spec strip */}
      <SectionFrame id="spec" eyebrow="Creative spec">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          <SpecItem term="Format" value={post.formatLabel} />
          <SpecItem term="Aspect" value={post.aspect.replace(' / ', ' : ')} />
          <SpecItem term="Native size" value={post.dimensions} />
          <SpecItem term="Category" value={post.category} />
        </dl>

        {post.tags?.length ? (
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
              Tags
            </span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-plum-500/20 bg-paper-2/40 px-3 py-1 text-xs text-ink/75"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </SectionFrame>

      {/* Prev / Next */}
      <SectionFrame id="pager" eyebrow="Keep browsing">
        <SocialPager prev={prevWithHtml} next={nextWithHtml} />
      </SectionFrame>

      <CtaSection
        eyebrow="Use this creative"
        title="Share it. Remix it. Take it to the streets."
        copy="This creative is part of the ElectSmith campaign library. Volunteer to help amplify it, or get in touch about adapting the file for partner orgs."
        primary={{ label: 'Volunteer', href: '/volunteer' }}
        secondary={{ label: 'Back to library', href: '/social-media-posts' }}
      />
    </>
  )
}

const SpecItem = ({ term, value }) => (
  <div data-reveal>
    <dt className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-500">{term}</dt>
    <dd className="mt-2 font-display text-2xl italic text-ink sm:text-3xl">{value}</dd>
  </div>
)

SpecItem.propTypes = {
  term: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default SocialPostPage
