'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'
import CineButton from '@/components/cine-button'
import Arrow from '@/components/arrow'
import { EVENTS } from '@/data/events'

const Events = () => {
  const [hover, setHover] = useState(null)

  // Featured + first 4 upcoming
  const featured = EVENTS[0]
  const upcoming = EVENTS.slice(1, 5)

  const rsvpPct = Math.round((featured.rsvp / featured.capacity) * 100)

  return (
    <SectionFrame id="events" eyebrow="Events — Chapter 05" tone="paper">
      {/* Editorial title bar */}
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <SplitText
            as="h2"
            text="Come find me in the community."
            className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] tracking-[-0.025em] text-ink"
          />
        </div>
        <div className="col-span-12 md:col-span-4">
          <div data-reveal className="flex items-center gap-4 md:justify-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55">
              Calendar
            </p>
            <CineButton href="/events" variant="ghost" size="sm">
              Full calendar
            </CineButton>
          </div>
        </div>
      </div>

      {/* Asymmetric editorial: featured (left) + numbered list (right) */}
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        {/* FEATURED */}
        <article data-reveal className="col-span-12 md:col-span-7">
          <Link
            href={`/events/${featured.slug}`}
            className="group relative block overflow-hidden rounded-[28px] border border-plum-500/15 bg-gradient-to-br from-plum-500 via-plum-700 to-plum-900 p-7 text-cream-50 shadow-[0_30px_60px_-30px_rgb(var(--shadow-warm)_/_0.5)] transition-transform duration-500 hover:-translate-y-1 sm:p-10 md:p-12 lg:p-14"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(120% 70% at 25% 20%, color-mix(in oklab, var(--mint-300) 50%, transparent) 0%, transparent 55%), radial-gradient(120% 80% at 90% 90%, color-mix(in oklab, var(--cream-200) 22%, transparent) 0%, transparent 60%)',
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-12 select-none font-display text-[22rem] leading-none text-cream-50/8"
            >
              {featured.date.split(' ')[1]}
            </span>

            <div className="relative flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/25 bg-ink/30 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-mint-300 animate-pulse" />
                Featured · Next event
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100/60">
                01 / 05
              </span>
            </div>

            <div className="relative mt-10 flex items-end gap-6 sm:mt-14">
              <div className="flex-shrink-0 border-r border-cream-100/15 pr-6 sm:pr-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/60">
                  {featured.weekday}
                </p>
                <p className="mt-2 font-display text-6xl leading-none sm:text-7xl">
                  {featured.date.split(' ')[1]}
                </p>
                <p className="mt-2 font-display text-xl italic text-mint-300">
                  {featured.date.split(' ')[0]}
                </p>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/60">
                  {featured.time}
                </p>
                <h3 className="mt-3 font-display text-3xl leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-3 font-display text-base italic text-cream-100/80 sm:text-lg">
                  {featured.subtitle}
                </p>
              </div>
            </div>

            <p className="relative mt-8 max-w-lg text-sm leading-relaxed text-cream-100/80 sm:text-base">
              {featured.blurb}
            </p>

            <div className="relative mt-10 flex flex-col gap-4 border-t border-cream-100/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-cream-100/70">
                  <span>{featured.rsvp} RSVPs</span>
                  <span>{featured.capacity} capacity</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-cream-100/15">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${rsvpPct}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-mint-300 via-sage-300 to-cream-200"
                  />
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 text-cream-50 transition-colors group-hover:text-mint-300">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                  Reserve a seat
                </span>
                <Arrow size="lg" />
              </div>
            </div>
          </Link>
        </article>

        {/* UPCOMING — numbered editorial column */}
        <aside data-reveal className="col-span-12 md:col-span-5">
          <div className="rounded-[28px] border border-plum-500/15 bg-paper/70 backdrop-blur p-7 sm:p-8 lg:p-10">
            <div className="flex items-baseline justify-between border-b border-plum-500/15 pb-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-plum-500">
                Up next
              </p>
              <p className="font-display text-sm italic text-ink/60">
                {String(upcoming.length).padStart(2, '0')} events
              </p>
            </div>

            <ul className="mt-2 flex flex-col">
              {upcoming.map((e, i) => (
                <motion.li
                  key={e.slug}
                  onHoverStart={() => setHover(i)}
                  onHoverEnd={() => setHover(null)}
                  className="group relative border-b border-plum-500/10 last:border-b-0"
                >
                  <Link
                    href={`/events/${e.slug}`}
                    className="grid grid-cols-12 items-center gap-3 py-5"
                  >
                    <div className="col-span-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-plum-500/70">
                        {String(i + 2).padStart(2, '0')}
                      </p>
                      <p className="mt-1 font-display text-2xl leading-none text-ink sm:text-3xl">
                        {e.date.split(' ')[1]}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55">
                        {e.date.split(' ')[0]} · {e.weekday.slice(0, 3)}
                      </p>
                    </div>

                    <div className="col-span-7 min-w-0">
                      <p className="truncate font-display text-base text-ink sm:text-lg">
                        {e.title}
                      </p>
                      <p className="mt-1 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                        {e.time} · {e.venue}
                      </p>
                    </div>

                    <div className="col-span-2 flex justify-end">
                      <Arrow
                        size="md"
                        className={`transition-colors duration-500 ${
                          hover === i ? 'text-plum-500' : 'text-ink/45'
                        }`}
                      />
                    </div>

                    <span
                      className={`pointer-events-none absolute -top-2 right-0 font-mono text-[9px] uppercase tracking-[0.3em] transition-all duration-500 ${
                        hover === i ? 'opacity-100 text-plum-500' : '-translate-y-1 opacity-0'
                      }`}
                    >
                      {e.cat}
                    </span>
                  </Link>

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-plum-500 transition-all duration-700 ${
                      hover === i ? 'w-full' : 'w-0'
                    }`}
                  />
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-between gap-3 border-t border-plum-500/15 pt-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                  Host an event at home
                </p>
                <p className="mt-1 font-display text-base italic text-plum-500">
                  Bring the campaign home.
                </p>
              </div>
              <CineButton href="/contact" variant="ghost" size="sm">
                Host
              </CineButton>
            </div>
          </div>
        </aside>
      </div>
    </SectionFrame>
  )
}

export default Events
