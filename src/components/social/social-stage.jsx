'use client'

import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import SocialPreview from '@/components/social/social-preview'
import { cn } from '@/lib/cn'

/**
 * SocialStage — large preview surface used on the detail page.
 *  - Sizes the creative to fit the available width and viewport height
 *    without ever cropping (uses object-contain logic via aspect-ratio).
 *  - Toggles a true full-screen overlay that lets the user view the
 *    creative at maximum size — still scaled, never clipped.
 *  - Esc / click backdrop closes the overlay.
 *  - Provides a "View full" button users can press to enter the overlay.
 */
const SocialStage = ({ post }) => {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isStory = post.format === 'story'

  return (
    <>
      <div className="relative">
        <div
          className={cn(
            'mx-auto w-full',
            isStory ? 'max-w-[420px] sm:max-w-[460px] md:max-w-[500px]' : 'max-w-[760px]',
          )}
        >
          <div className="relative">
            <SocialPreview
              src={post.src}
              srcDoc={post.html}
              nativeWidth={post.nativeWidth}
              nativeHeight={post.nativeHeight}
              aspect={post.aspect}
              title={post.title}
              rounded="rounded-[28px]"
              className="border border-plum-500/15"
            />
            {/* Floating actions */}
            <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 bg-ink/55 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-cream-50 backdrop-blur transition-colors hover:border-mint-300 hover:text-mint-300"
                aria-label="Open full-screen view"
              >
                <span>Full view</span>
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
                  <path
                    d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <a
                href={post.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 bg-ink/55 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-cream-50 backdrop-blur transition-colors hover:border-mint-300 hover:text-mint-300"
              >
                <span>Open in tab</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
            {/* Format chip */}
            <span className="absolute left-4 top-4 z-10 rounded-full border border-cream-100/30 bg-ink/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-50 backdrop-blur">
              {post.formatLabel} · {post.dimensions}
            </span>
          </div>

          {/* Caption */}
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
            {post.index} · {post.category} · Preview is the live creative
          </p>
        </div>
      </div>

      {/* Full-view overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${post.title} — full view`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 px-4 py-6 backdrop-blur-md sm:px-8 sm:py-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close full view"
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/40 bg-ink/60 text-cream-50 transition-colors hover:border-mint-300 hover:text-mint-300"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            className={cn(
              'relative w-full',
              isStory
                ? 'max-h-[92vh] max-w-[min(92vw,calc(92vh*9/16))]'
                : 'max-w-[min(92vw,92vh)]',
            )}
            style={{ aspectRatio: post.aspect }}
          >
            <SocialPreview
              src={post.src}
              srcDoc={post.html}
              nativeWidth={post.nativeWidth}
              nativeHeight={post.nativeHeight}
              aspect={post.aspect}
              title={`${post.title} — full view`}
              interactive
              rounded="rounded-2xl"
              className="border border-cream-100/15"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-cream-100/70">
            Esc to close · {post.dimensions}
          </div>
        </div>
      )}
    </>
  )
}

SocialStage.propTypes = {
  post: PropTypes.object.isRequired,
}

export default SocialStage
