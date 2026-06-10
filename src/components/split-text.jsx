'use client'

import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'

/**
 * SplitText
 * Splits text into per-word and per-char spans, then animates
 * each character on enter via ScrollTrigger.
 *
 * Props:
 *  - as: tag (default "h2")
 *  - text: string
 *  - className
 *  - delay (sec)
 *  - stagger (sec)
 *  - duration (sec)
 *  - trigger ("self" | "first-paint")
 */
const SplitText = ({
  as: Tag = 'h2',
  text,
  className = '',
  delay = 0,
  stagger = 0.035,
  duration = 0.9,
  trigger = 'self',
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const chars = el.querySelectorAll('.split-char')
    if (!chars.length) return

    gsap.set(chars, { yPercent: 110, opacity: 0, rotate: 4 })

    const animate = () =>
      gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration,
        ease: 'power3.out',
        stagger,
        delay,
      })

    let st
    if (trigger === 'first-paint') {
      const id = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(id)
    } else {
      st = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: animate,
      })
    }
    return () => {
      st?.kill()
    }
  }, [text, delay, stagger, duration, trigger])

  const words = text.split(' ')
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block whitespace-nowrap"
          style={{ overflow: 'hidden', paddingBottom: '0.12em' }}
        >
          {[...word].map((ch, ci) => (
            <span key={ci} className="split-char">
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <span className="split-char">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}

SplitText.propTypes = {
  as: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  stagger: PropTypes.number,
  duration: PropTypes.number,
  trigger: PropTypes.oneOf(['self', 'first-paint']),
}

export default SplitText
