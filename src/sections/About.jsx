'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'
import CineButton from '@/components/cine-button'

const VALUES = [
  {
    k: '01',
    t: 'Public service',
    d: 'Twelve years in the classroom and four in the Navy taught me that progress starts with showing up.',
  },
  {
    k: '02',
    t: 'Independence',
    d: 'I answer to neighbors, not corporate PACs. Every dollar comes from people like you.',
  },
  {
    k: '03',
    t: 'Transparency',
    d: 'Open calendars, town halls every month, and a real record of every vote — published in plain English.',
  },
]

const About = () => {
  const portraitRef = useRef(null)

  useEffect(() => {
    const el = portraitRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <SectionFrame id="about" eyebrow="About — Chapter 01">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
        {/* Portrait column */}
        <div className="md:col-span-5">
          <div
            ref={portraitRef}
            data-reveal="x"
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-plum-500/15 bg-gradient-to-tr from-sage-300 via-mint-300 to-cream-200"
          >
            <div
              className="absolute inset-0 mix-blend-multiply opacity-40"
              style={{
                background:
                  'repeating-linear-gradient(45deg, color-mix(in oklab, var(--plum-700) 10%, transparent) 0 2px, transparent 2px 7px)',
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-[16rem] leading-none text-plum-500/30 select-none">
                JS
              </span>
            </div>

            {/* Caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-paper/85 px-4 py-3 backdrop-blur">
              <div>
                <p className="font-display text-sm text-ink">Hood River, OR</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55">
                  Hometown
                </p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-plum-500 text-cream-50">
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Quote chip */}
          <figure
            data-reveal
            className="mt-6 rounded-2xl border border-plum-500/15 bg-paper-2/60 p-5"
          >
            <p className="font-display italic text-lg leading-snug text-ink">
              “Politics shouldn’t feel like a spectator sport. It should feel like a town meeting
              where every voice fits in the room.”
            </p>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">
              — Jordan, kickoff rally
            </figcaption>
          </figure>
        </div>

        {/* Copy column */}
        <div className="md:col-span-7">
          <SplitText
            as="h2"
            text="Built from the schools, soil, and sidewalks of this district."
            className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] tracking-[-0.025em] text-ink"
          />

          <div
            data-reveal
            className="mt-8 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg"
          >
            <p>
              I grew up watching my mom teach third grade and my dad fix radiators in a shop he
              opened with a $4,000 SBA loan. We weren’t wealthy, but we had public school, public
              libraries, and a public health clinic that kept us going when things got hard.
            </p>
            <p>
              I’m running because too many of those guardrails are crumbling while Washington
              bickers. I want to be the kind of representative who returns phone calls, files real
              bills, and actually shows up when the bridge to your neighborhood is closing.
            </p>
          </div>

          {/* Values grid */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.k}
                data-reveal
                className="group relative overflow-hidden rounded-2xl border border-plum-500/15 bg-paper p-5 transition-colors duration-500 hover:border-plum-500/40"
              >
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-plum-500 transition-transform duration-700 group-hover:scale-x-100" />
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-plum-500">
                  {v.k}
                </p>
                <p className="mt-3 font-display text-xl text-ink">{v.t}</p>
                <p className="mt-2 text-sm text-ink/65">{v.d}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10">
            <CineButton href="/issues" variant="ghost">
              Read my full platform
            </CineButton>
          </div>
        </div>
      </div>
    </SectionFrame>
  )
}

export default About
