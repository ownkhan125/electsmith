'use client'

import { motion } from 'motion/react'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'

const QUOTES = [
  {
    quote:
      'Jordan is the rare candidate who answers hard questions on the first call. We need that in Washington.',
    name: 'Mayor Lila Avina',
    role: 'Mayor of Hood River',
  },
  {
    quote:
      'I’ve worked across the aisle with Jordan for a decade. They keep their word, even when it costs them.',
    name: 'Rep. Marcus Tate (R)',
    role: 'OR State Legislature',
  },
  {
    quote: 'From the picket line to the policy desk, Jordan stands with working people. Full stop.',
    name: 'Theresa Okoro',
    role: 'President, Oregon Labor Council',
  },
]

const SUPPORTERS = [
  'Oregon Education Assoc.',
  'Sierra Club Oregon',
  'Planned Parenthood Advocates',
  'Building Trades Council',
  'Veterans for Civic Trust',
  'OneOregon Climate',
  'Latino Voters United',
  'Lambda Equality NW',
]

const Endorsements = () => {
  return (
    <SectionFrame id="endorsements" eyebrow="Endorsements — Chapter 04">
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SplitText
              as="h2"
              text="Backed by people who do the actual work."
              className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] tracking-[-0.025em] text-ink"
            />
          </div>
          <div className="md:col-span-5">
            <p data-reveal className="text-base leading-relaxed text-ink/70 sm:text-lg">
              Teachers, nurses, firefighters, farmers, machinists, and a few former opponents. No
              corporate PACs — only people whose names fit on a school newsletter.
            </p>
          </div>
        </div>

        {/* Quote cards */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.li
              key={q.name}
              data-reveal
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-plum-500/15 bg-paper p-7 sm:p-8"
            >
              <span className="absolute -top-6 left-6 font-display text-[8rem] leading-none text-plum-500/15 select-none">
                “
              </span>
              <p className="relative font-display text-lg italic leading-snug text-ink sm:text-xl">
                {q.quote}
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-plum-500/15 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-plum-500 font-display text-sm text-cream-50">
                  {q.name
                    .split(' ')
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{q.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                    {q.role}
                  </p>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-mint-300 via-sage-300 to-plum-500 transition-transform duration-700 group-hover:scale-x-100" />
            </motion.li>
          ))}
        </ul>

        {/* Supporter marquee */}
        <div data-reveal className="overflow-hidden border-y border-plum-500/15 py-5">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap font-display text-lg text-ink/55 italic sm:text-xl">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-10">
                {SUPPORTERS.map((s, i) => (
                  <span key={s + i} className="flex items-center gap-10">
                    <span>{s}</span>
                    <span className="text-plum-500">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  )
}

export default Endorsements
