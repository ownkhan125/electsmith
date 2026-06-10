'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'

const ISSUES = [
  {
    n: 'I',
    title: 'Healthcare you can actually use',
    body: 'Cap prescription costs, expand mental health coverage, and protect Medicare from privatization. Every family deserves care without a coin-flip about rent.',
    tag: 'Health',
  },
  {
    n: 'II',
    title: 'Schools that prepare every kid',
    body: 'Fully fund Title I, raise teacher pay to a living wage, and bring trade & technical pathways back to high schools across the district.',
    tag: 'Education',
  },
  {
    n: 'III',
    title: 'A climate plan with jobs attached',
    body: 'Invest in clean-energy manufacturing, rural transmission, and wildfire resilience — built by union labor right here in Oregon.',
    tag: 'Climate',
  },
  {
    n: 'IV',
    title: 'Housing as a right, not a roulette',
    body: 'Tax-credit incentives for missing-middle housing, support for first-time buyers, and a federal floor on tenant protections.',
    tag: 'Housing',
  },
  {
    n: 'V',
    title: 'Defending our freedoms',
    body: 'Codify reproductive rights, protect voting access, and stand up for LGBTQ+ Oregonians without compromise.',
    tag: 'Rights',
  },
  {
    n: 'VI',
    title: 'A democracy worthy of your time',
    body: 'Ban congressional stock trades, end gerrymandering with independent commissions, and bring transparency to every floor vote.',
    tag: 'Reform',
  },
]

const Priorities = () => {
  const [active, setActive] = useState(0)

  return (
    <SectionFrame id="priorities" eyebrow="Priorities — Chapter 02" tone="ink">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        {/* Sticky title */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <SplitText
              as="h2"
              text="Six fights worth taking to Washington."
              className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] tracking-[-0.025em] text-cream-50"
            />
            <p
              data-reveal
              className="mt-6 max-w-md text-base leading-relaxed text-cream-100/70 sm:text-lg"
            >
              These aren’t talking points — they’re the bills I’ll introduce in my first session,
              paired with the floor votes I’ll demand.
            </p>

            {/* Tag pills */}
            <div data-reveal className="mt-10 flex flex-wrap gap-2">
              {ISSUES.map((i, idx) => (
                <button
                  key={i.tag}
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                    active === idx
                      ? 'border-mint-300 bg-mint-300 text-ink'
                      : 'border-cream-100/20 text-cream-100/70 hover:border-cream-100/50'
                  }`}
                >
                  {i.tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards stack */}
        <div className="md:col-span-7">
          <ul className="flex flex-col gap-5">
            {ISSUES.map((it, idx) => (
              <motion.li
                key={it.n}
                data-reveal
                onMouseEnter={() => setActive(idx)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition-colors duration-500 sm:p-8 ${
                  active === idx
                    ? 'border-mint-300/50 bg-plum-700/60'
                    : 'border-cream-100/10 bg-plum-800/40'
                }`}
              >
                {/* Hover gradient bar */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-mint-300 via-sage-300 to-cream-200 transition-transform duration-700 ${
                    active === idx ? 'scale-y-100' : ''
                  }`}
                />
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl italic leading-none text-mint-300 sm:text-4xl">
                    {it.n}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl text-cream-50 sm:text-2xl">{it.title}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100/55">
                        {it.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-cream-100/75 sm:text-base">
                      {it.body}
                    </p>
                  </div>
                </div>
                {/* Arrow */}
                <span
                  className="absolute right-7 bottom-7 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 text-cream-50 transition-all duration-500 group-hover:border-mint-300 group-hover:bg-mint-300 group-hover:text-ink"
                  aria-hidden
                >
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
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionFrame>
  )
}

export default Priorities
