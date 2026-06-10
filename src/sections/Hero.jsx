'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap-setup'
import SplitText from '@/components/split-text'
import CineButton from '@/components/cine-button'
import HeroBackdrop from '@/components/hero-backdrop'

/**
 * HERO IMAGE
 * High-quality Unsplash landscape (Pacific Northwest mountains).
 * Chosen for civic/political tone — wide-open, calm, hopeful — without
 * misrepresenting a specific person as the candidate.
 *
 * To swap in a real candidate portrait later, replace this URL with a
 * local file (e.g. /public/jordan-portrait.jpg) and Next/Image will
 * optimize it the same way.
 */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=80'

const ISSUE_TAGS = ['Healthcare', 'Education', 'Climate', 'Housing', 'Working families']

const Hero = () => {
  const scope = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 },
      )
        .fromTo(
          '.hero-line',
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: 'expo.out' },
          '-=0.4',
        )
        .fromTo('.hero-sub', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, '+=0.2')
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.4',
        )
        .fromTo(
          '.hero-image-card',
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out' },
          '-=0.95',
        )
        .fromTo(
          '.hero-stat',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.07 },
          '-=0.5',
        )

      // Restrained parallax (no scrub on headlines — feels less twitchy)
      gsap.to('.hero-image-card', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={scope}
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28"
    >
      <HeroBackdrop />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-10 md:px-16">
        {/* Eyebrow */}
        <div className="hero-eyebrow flex items-center gap-4">
          <span className="hero-line block h-px w-10 origin-left bg-plum-500/60 sm:w-14" />
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-600 sm:text-xs">
            Oregon · 3rd Congressional District · 2026
          </span>
        </div>

        {/* Headline + portrait — balanced 7/5 split on desktop */}
        <div className="mt-10 grid grid-cols-1 gap-12 sm:mt-14 md:mt-16 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Headline column */}
          <div className="md:col-span-7 md:pt-2">
            <SplitText
              as="h1"
              text="Leadership"
              trigger="first-paint"
              className="font-display text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.95] tracking-[-0.035em] text-ink"
            />
            <SplitText
              as="h1"
              text="that listens."
              trigger="first-paint"
              delay={0.18}
              className="font-display text-[clamp(3rem,9vw,7.5rem)] font-light italic leading-[0.95] tracking-[-0.035em] text-plum-500"
            />

            <p className="hero-sub mt-8 max-w-xl text-base leading-relaxed text-ink/72 sm:text-lg">
              <span className="font-semibold text-ink">Jordan Smith</span> is running for Congress
              to put working families first, protect our freedoms, and build an economy that lifts
              every household — not just the wealthiest.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CineButton href="/donate" className="hero-cta">
                Donate to the campaign
              </CineButton>
              <CineButton href="/volunteer" variant="ghost" className="hero-cta">
                Join the campaign
              </CineButton>
            </div>

            {/* Trust line */}
            <p className="hero-cta mt-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-400" />
              Grassroots funded · No corporate PACs
            </p>
          </div>

          {/* Image column */}
          <div className="md:col-span-5">
            <div className="hero-image-card relative ml-auto w-full max-w-[480px] md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-plum-700 shadow-[0_30px_60px_-30px_rgb(var(--shadow-warm)_/_0.45)] ring-1 ring-plum-500/15">
                {/* Photo — Next/Image optimized */}
                <Image
                  src={HERO_IMAGE}
                  alt="Oregon landscape — the Pacific Northwest the campaign is built to serve"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />

                {/* Soft plum overlay to harmonize with palette */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 35%, rgb(var(--shadow-warm)_/_0.45) 100%)',
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-overlay opacity-30"
                  style={{
                    background:
                      'linear-gradient(180deg, color-mix(in oklab, var(--plum-500) 70%, transparent), transparent 60%)',
                  }}
                />

                {/* Subtle inner-edge highlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-cream-100/10"
                />

                {/* Bottom plate — name + district */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream-100/70">
                      Candidate · U.S. House
                    </p>
                    <p className="mt-1.5 font-display text-2xl leading-tight text-cream-50">
                      Jordan Smith
                    </p>
                  </div>
                  <span className="rounded-full border border-cream-100/25 bg-ink/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100/85 backdrop-blur">
                    OR-3
                  </span>
                </div>
              </div>

              {/* Quiet caption beneath the frame */}
              <p className="mt-4 max-w-[480px] font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
                Photographed in the Columbia River Gorge — the district we represent.
              </p>
            </div>
          </div>
        </div>

        {/* Stats — a calm horizontal strip beneath the composition */}
        <div className="mt-16 grid grid-cols-3 overflow-hidden rounded-2xl border border-plum-500/15 bg-paper-2/40 md:mt-20">
          {[
            { k: '18,400', v: 'Doors knocked' },
            { k: '342', v: 'Volunteers' },
            { k: '31', v: 'Town halls' },
          ].map((s, i) => (
            <div
              key={s.v}
              className={`hero-stat px-4 py-5 text-center sm:py-6 ${
                i < 2 ? 'border-r border-plum-500/15' : ''
              }`}
            >
              <p className="font-display text-2xl text-plum-500 sm:text-3xl">{s.k}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>

        {/* Issue tag rail — simple, political-friendly */}
        <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-plum-500/10 pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
            Priorities
          </span>
          {ISSUE_TAGS.map((t, i) => (
            <span key={t} className="flex items-center gap-2 text-sm text-ink/75">
              <span className="font-display italic">{t}</span>
              {i < ISSUE_TAGS.length - 1 && <span className="text-plum-500/60">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
