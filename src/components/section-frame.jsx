'use client'

import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'
import { cn } from '@/lib/cn'

/**
 * SectionFrame
 * Builds a section's borders/lines on scroll enter, then reveals content.
 * Wrap each section with this to get the cinematic "frame builds, then
 * content drops in" effect.
 *
 *  - eyebrow: small label above content (rendered with a line)
 *  - id: anchor id
 *  - tone: "paper" | "ink" | "plum" — controls bg/line colors
 */
const SectionFrame = ({
  id,
  eyebrow,
  tone = 'paper',
  children,
  className = '',
  innerClassName = '',
}) => {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return

    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll('[data-line]')
      const reveals = el.querySelectorAll('[data-reveal]')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          once: true,
        },
      })

      if (lines.length) {
        tl.to(lines, {
          scaleX: (i, t) => (t.dataset.line === 'v' ? 1 : 1),
          scaleY: (i, t) => (t.dataset.line === 'v' ? 1 : 1),
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.08,
        })
      }
      if (reveals.length) {
        tl.to(
          reveals,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.07,
          },
          '-=0.5',
        )
      }
    }, scope)

    return () => ctx.revert()
  }, [])

  const toneCls =
    tone === 'ink'
      ? 'bg-ink text-cream-100'
      : tone === 'plum'
        ? 'bg-plum-900 text-cream-100'
        : 'bg-paper text-ink'

  const lineCls = tone === 'paper' ? 'bg-plum-500/30' : 'bg-cream-200/40'

  return (
    <section
      id={id}
      ref={scope}
      className={cn('relative isolate overflow-hidden', toneCls, className)}
    >
      {/* top + bottom build lines */}
      <span data-line className={cn('absolute left-0 right-0 top-0 h-px', lineCls)} />
      <span data-line className={cn('absolute left-0 right-0 bottom-0 h-px', lineCls)} />
      {/* corner ticks */}
      <span
        data-line="v"
        className={cn('absolute left-6 top-0 h-8 w-px sm:left-10 md:left-16', lineCls)}
      />
      <span
        data-line="v"
        className={cn('absolute right-6 top-0 h-8 w-px sm:right-10 md:right-16', lineCls)}
      />

      <div
        className={cn(
          'relative mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28 md:px-16 md:py-32',
          innerClassName,
        )}
      >
        {eyebrow && (
          <div className="mb-12 flex items-center gap-4">
            <span data-line className={cn('h-px w-12', lineCls)} />
            <span data-reveal className="font-mono text-xs uppercase tracking-[0.3em] opacity-70">
              {eyebrow}
            </span>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

SectionFrame.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.string,
  tone: PropTypes.oneOf(['paper', 'ink', 'plum']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
}

export default SectionFrame
