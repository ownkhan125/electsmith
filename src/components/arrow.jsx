'use client'

import PropTypes from 'prop-types'
import { cn } from '@/lib/cn'

/**
 * Arrow — long horizontal rule with a refined chevron tip.
 *
 * Visual language:
 *   ──────▶
 * The shaft is a thin horizontal line; the tip is a small open chevron.
 * On hover (handled by the parent via group/hover), the shaft extends.
 *
 * Variants:
 *   "inline"   — just the SVG, no frame (best for editorial rows)
 *   "framed"   — sits inside a hairline circle (replaces the old generic chip)
 *   "rule"     — wider, longer shaft, no chevron — useful as a divider arrow
 *
 * Sizes: sm, md, lg
 *
 * Use:
 *   <button className="group ...">
 *     Label <Arrow />            // shaft animates on group-hover
 *   </button>
 */
const SIZE = {
  sm: { w: 28, h: 10, shaft: 16, tip: 4, strokeW: 1.5 },
  md: { w: 38, h: 12, shaft: 22, tip: 5, strokeW: 1.6 },
  lg: { w: 56, h: 14, shaft: 34, tip: 6, strokeW: 1.8 },
}

const Arrow = ({
  variant = 'inline',
  size = 'md',
  className = '',
  ariaHidden = true,
  framedTone = 'default',
}) => {
  const s = SIZE[size] || SIZE.md
  const tipX = s.w - 1
  const shaftStart = s.w - s.shaft - 1

  const svg = (
    <svg
      viewBox={`0 0 ${s.w} ${s.h}`}
      width={s.w}
      height={s.h}
      fill="none"
      aria-hidden={ariaHidden}
      className="overflow-visible"
    >
      {/* Shaft — anchored to the chevron tip on the right.
          Animates by extending leftward via CSS on group-hover. */}
      <line
        x1={shaftStart}
        x2={tipX - 1}
        y1={s.h / 2}
        y2={s.h / 2}
        stroke="currentColor"
        strokeWidth={s.strokeW}
        strokeLinecap="round"
        className="origin-right transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:[transform:scaleX(1.35)]"
      />
      {/* Chevron tip — translates right on hover */}
      <path
        d={`M${tipX - s.tip} ${s.h / 2 - s.tip} L${tipX} ${s.h / 2} L${tipX - s.tip} ${s.h / 2 + s.tip}`}
        stroke="currentColor"
        strokeWidth={s.strokeW}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1"
      />
    </svg>
  )

  if (variant === 'framed') {
    const dims = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
    const toneCls =
      framedTone === 'filled'
        ? 'border-current bg-current text-current'
        : framedTone === 'light'
          ? 'border-cream-100/30 group-hover:border-cream-100/70'
          : 'border-current/25 group-hover:border-current/70'
    return (
      <span
        className={cn(
          'inline-flex shrink-0 items-center justify-center rounded-full border transition-colors duration-500',
          dims,
          toneCls,
          className,
        )}
      >
        <span className="inline-flex">{svg}</span>
      </span>
    )
  }

  return (
    <span className={cn('inline-flex shrink-0 items-center text-current', className)}>{svg}</span>
  )
}

Arrow.propTypes = {
  variant: PropTypes.oneOf(['inline', 'framed', 'rule']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  ariaHidden: PropTypes.bool,
  framedTone: PropTypes.oneOf(['default', 'light', 'filled']),
}

export default Arrow
