'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'motion/react'
import SocialPreview from '@/components/social/social-preview'
import Arrow from '@/components/arrow'
import { cn } from '@/lib/cn'

const FORMAT_FILTERS = [
  { key: 'all', label: 'All', meta: 'Every creative' },
  { key: 'feed', label: 'Feed', meta: '1 : 1' },
  { key: 'story', label: 'Story', meta: '9 : 16' },
]

const SocialGallery = ({ posts, categories }) => {
  const [format, setFormat] = useState('all')
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => {
      if (format !== 'all' && p.format !== format) return false
      if (category !== 'all' && p.category !== category) return false
      if (!q) return true
      const hay = [p.title, p.blurb, p.category, p.formatLabel, ...(p.tags || [])]
        .join(' ')
        .toLowerCase()
      return hay.includes(q)
    })
  }, [posts, format, category, query])

  const counts = useMemo(() => {
    const base = { all: posts.length }
    for (const f of ['feed', 'story']) {
      base[f] = posts.filter((p) => p.format === f).length
    }
    return base
  }, [posts])

  return (
    <div className="flex flex-col gap-12">
      {/* Filter / search rail */}
      <div className="relative rounded-3xl border border-plum-500/15 bg-paper-2/40 p-5 backdrop-blur sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Format pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
              Format
            </span>
            {FORMAT_FILTERS.map((f) => {
              const active = format === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFormat(f.key)}
                  className={cn(
                    'group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition-all duration-300',
                    active
                      ? 'border-plum-500 bg-plum-500 text-cream-50 shadow-[0_10px_24px_-12px_rgb(var(--shadow-warm)_/_0.55)]'
                      : 'border-plum-500/25 text-ink/70 hover:border-plum-500/60 hover:text-ink',
                  )}
                  aria-pressed={active}
                >
                  <span className="font-medium">{f.label}</span>
                  <span
                    className={cn(
                      'font-mono text-[10px] uppercase tracking-[0.2em]',
                      active ? 'text-cream-100/80' : 'text-ink/45',
                    )}
                  >
                    {counts[f.key]}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <span
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/50"
              aria-hidden
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M11 11l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search creatives — quote, stat, event…"
              className="w-full rounded-full border border-plum-500/20 bg-paper/80 py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-plum-500 focus:outline-none"
              aria-label="Search social creatives"
            />
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
            Category
          </span>
          <CategoryChip
            label="All"
            active={category === 'all'}
            onClick={() => setCategory('all')}
          />
          {categories.map((c) => (
            <CategoryChip
              key={c}
              label={c}
              active={category === c}
              onClick={() => setCategory(c)}
            />
          ))}
        </div>
      </div>

      {/* Meta line */}
      <div className="flex items-baseline justify-between gap-4 border-b border-plum-500/15 pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-600">
          {filtered.length} {filtered.length === 1 ? 'creative' : 'creatives'}
        </span>
        {(format !== 'all' || category !== 'all' || query) && (
          <button
            type="button"
            onClick={() => {
              setFormat('all')
              setCategory('all')
              setQuery('')
            }}
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/60 transition-colors hover:text-plum-500"
          >
            Reset filters →
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <EmptyState onReset={() => { setFormat('all'); setCategory('all'); setQuery('') }} />
      ) : (
        <motion.ul
          layout
          className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.min(i * 0.035, 0.3),
                }}
                className={cn(p.format === 'story' && 'sm:row-span-1')}
              >
                <SocialCard post={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  )
}

const CategoryChip = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'rounded-full border px-3.5 py-1.5 text-xs transition-all duration-300',
      active
        ? 'border-mint-400 bg-mint-300/30 text-ink'
        : 'border-plum-500/15 text-ink/65 hover:border-plum-500/45 hover:text-ink',
    )}
    aria-pressed={active}
  >
    {label}
  </button>
)

CategoryChip.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

const SocialCard = ({ post }) => (
  <Link
    href={`/social-media-posts/${post.slug}`}
    className="group block focus:outline-none"
  >
    <div className="relative">
      <SocialPreview
        src={post.src}
        srcDoc={post.html}
        nativeWidth={post.nativeWidth}
        nativeHeight={post.nativeHeight}
        aspect={post.aspect}
        title={post.title}
        className="transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
      />
      {/* Format badge */}
      <span className="absolute left-4 top-4 z-10 rounded-full border border-cream-100/30 bg-ink/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-50 backdrop-blur">
        {post.formatLabel}
      </span>
      {/* Hover veil + view CTA */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-cream-100/40 bg-cream-50/95 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-ink opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 translate-y-2">
        Open
        <span className="text-plum-500">→</span>
      </span>
    </div>

    <div className="mt-4 flex items-start justify-between gap-4">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-500">
          {post.index} · {post.category}
        </p>
        <h3 className="mt-1 font-display text-xl italic leading-tight text-ink sm:text-2xl">
          {post.title}
        </h3>
        <p className="mt-1.5 text-sm leading-snug text-ink/65">{post.blurb}</p>
      </div>
      <span className="mt-2 shrink-0 text-ink/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-plum-500">
        <Arrow size="md" />
      </span>
    </div>
  </Link>
)

SocialCard.propTypes = {
  post: PropTypes.object.isRequired,
}

const EmptyState = ({ onReset }) => (
  <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-plum-500/30 bg-paper-2/30 px-6 py-16 text-center">
    <p className="font-display text-2xl italic text-ink/85">No creatives match those filters.</p>
    <p className="max-w-sm text-sm text-ink/65">
      Try widening the format, clearing the category, or searching for something simpler.
    </p>
    <button
      type="button"
      onClick={onReset}
      className="mt-2 inline-flex items-center gap-2 rounded-full border border-plum-500/40 px-5 py-2 text-xs font-medium text-ink transition-colors hover:border-plum-500 hover:text-plum-500"
    >
      Reset filters
    </button>
  </div>
)

EmptyState.propTypes = {
  onReset: PropTypes.func.isRequired,
}

SocialGallery.propTypes = {
  posts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}

export default SocialGallery
