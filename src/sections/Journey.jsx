'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'

const MILESTONES = [
  {
    year: '2002',
    title: 'Enlisted in the U.S. Navy',
    body: 'Served four years as an electronics technician, deploying twice across the Pacific.',
  },
  {
    year: '2006',
    title: 'First class at Bridge High',
    body: 'Came home, used the GI Bill, and started teaching physics. 1,100 students later, and I still keep their letters.',
  },
  {
    year: '2014',
    title: 'Elected to the school board',
    body: 'Led the fund-balanced budget that brought back music, art, and shop class to every middle school in the district.',
  },
  {
    year: '2019',
    title: 'Founded the River Coalition',
    body: 'Built a bipartisan partnership protecting 60 miles of the Columbia tributaries from industrial discharge.',
  },
  {
    year: '2023',
    title: 'Joined the State Workforce Council',
    body: 'Helped expand apprenticeships in clean energy — the program is now training 2,300 Oregonians a year.',
  },
  {
    year: '2026',
    title: 'Running for U.S. Congress',
    body: 'Filed Day 1. Refused every corporate dollar. Showed up to 31 town halls before lunch on launch week.',
  },
]

const Journey = () => {
  const scope = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 0.8,
        },
      })

      gsap.utils.toArray('.milestone').forEach((m, i) => {
        gsap.fromTo(
          m,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: m,
              start: 'top 82%',
              once: true,
            },
          },
        )
        gsap.fromTo(
          m.querySelector('.milestone-dot'),
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: 'back.out(2.2)',
            scrollTrigger: {
              trigger: m,
              start: 'top 80%',
              once: true,
            },
          },
        )
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <SectionFrame id="journey" eyebrow="Journey — Chapter 03">
      <div ref={scope}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SplitText
              as="h2"
              text="Twenty years of showing up before this campaign began."
              className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] tracking-[-0.025em] text-ink"
            />
            <p
              data-reveal
              className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
            >
              You don’t get to call yourself a public servant on Day 1. You have to earn it — on
              school boards, in town halls, on the river, in the wind. Here’s the trail.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="relative pl-10 sm:pl-14">
              {/* vertical track */}
              <span className="absolute left-3 top-2 bottom-2 w-px bg-plum-500/15 sm:left-5" />
              {/* progress fill */}
              <span
                ref={lineRef}
                className="absolute left-3 top-2 bottom-2 w-px origin-top scale-y-0 bg-gradient-to-b from-plum-500 via-sage-300 to-mint-300 sm:left-5"
              />

              <ul className="flex flex-col gap-10">
                {MILESTONES.map((m, idx) => (
                  <li key={m.year} className="milestone relative">
                    <span className="milestone-dot absolute -left-[2.05rem] top-2 grid h-5 w-5 place-items-center rounded-full bg-paper ring-2 ring-plum-500 sm:-left-[2.55rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-plum-500" />
                    </span>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-3 font-mono text-xs uppercase tracking-[0.25em] text-plum-500 sm:col-span-2 sm:text-sm">
                        {m.year}
                      </div>
                      <div className="col-span-9 sm:col-span-10">
                        <h3 className="font-display text-xl text-ink sm:text-2xl">{m.title}</h3>
                        <p className="mt-2 text-sm text-ink/70 sm:text-base">{m.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  )
}

export default Journey
