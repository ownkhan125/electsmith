import Link from 'next/link'
import PropTypes from 'prop-types'
import SocialPreview from '@/components/social/social-preview'

const SocialPager = ({ prev, next }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
    {prev && (
      <PagerCard
        post={prev}
        direction="prev"
        label="Previous"
      />
    )}
    {next && (
      <PagerCard
        post={next}
        direction="next"
        label="Next"
      />
    )}
  </div>
)

SocialPager.propTypes = {
  prev: PropTypes.object,
  next: PropTypes.object,
}

const PagerCard = ({ post, direction, label }) => (
  <Link
    href={`/social-media-posts/${post.slug}`}
    className="group flex items-center gap-5 rounded-3xl border border-plum-500/15 bg-paper-2/30 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-plum-500/40 hover:bg-paper-2/60 sm:p-5"
    style={{
      flexDirection: direction === 'prev' ? 'row' : 'row-reverse',
      textAlign: direction === 'prev' ? 'left' : 'right',
    }}
  >
    <div className="relative w-24 shrink-0 sm:w-28">
      <SocialPreview
        src={post.src}
        srcDoc={post.html}
        nativeWidth={post.nativeWidth}
        nativeHeight={post.nativeHeight}
        aspect={post.aspect}
        title={post.title}
        rounded="rounded-xl"
      />
    </div>
    <div className="min-w-0 flex-1">
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-500">
        {direction === 'prev' ? '←' : '→'} {label}
      </p>
      <p className="mt-2 truncate font-display text-lg italic text-ink">{post.title}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/55">
        {post.formatLabel} · {post.category}
      </p>
    </div>
  </Link>
)

PagerCard.propTypes = {
  post: PropTypes.object.isRequired,
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  label: PropTypes.string.isRequired,
}

export default SocialPager
