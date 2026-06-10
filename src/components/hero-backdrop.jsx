'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-setup'

/**
 * HeroBackdrop — quiet, premium ambient backdrop.
 *
 * Restrained on purpose:
 *  - A single warm gradient wash anchored top-right
 *  - One slow-drifting blur orb (cream)
 *  - A faint paper-grain layer
 *
 * No SVG networks, no grid lines, no light sweeps — the goal is for
 * the headline + portrait to lead and the ambient layer to support.
 */
const HeroBackdrop = () => {
  const scope = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hb-orb', {
        xPercent: 6,
        yPercent: -4,
        duration: 14,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={scope} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Warm wash anchored top-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 85% 10%, color-mix(in oklab, var(--mint-300) 25%, transparent) 0%, transparent 70%), radial-gradient(50% 60% at 0% 100%, color-mix(in oklab, var(--cream-300) 35%, transparent) 0%, transparent 70%)',
        }}
      />

      {/* Single slow orb (very soft) */}
      <div
        className="hb-orb absolute -top-32 right-[8%] h-[480px] w-[480px] rounded-full opacity-50 blur-[120px]"
        style={{
          background: 'radial-gradient(closest-side, var(--cream-200), transparent 70%)',
        }}
      />

      {/* Faint paper grain (kept extremely low opacity) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--ink-900) 1px, transparent 0)',
          backgroundSize: '3px 3px',
        }}
      />

      {/* Soft bottom fade to ground the hero */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--paper))',
        }}
      />
    </div>
  )
}

export default HeroBackdrop
