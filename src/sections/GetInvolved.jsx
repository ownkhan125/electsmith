'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'
import CineButton from '@/components/cine-button'
import NewsletterForm from '@/components/forms/newsletter-form'

const AMOUNTS = ['$15', '$50', '$100', '$250', '$500']

const GetInvolved = () => {
  const scope = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.gi-orb', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.4,
        },
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <SectionFrame id="involved" eyebrow="Get Involved — Chapter 06" tone="plum">
      <div ref={scope}>
        {/* Floating orbs */}
        <div
          aria-hidden
          className="gi-orb pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{
            background: 'radial-gradient(closest-side, var(--mint-300), transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="gi-orb pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(closest-side, var(--cream-200), transparent 70%)',
          }}
        />

        <SplitText
          as="h2"
          text="This campaign moves at the speed of you."
          className="max-w-4xl font-display text-[clamp(2.25rem,5vw,5.5rem)] font-light leading-[1] tracking-[-0.03em] text-cream-50"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Volunteer */}
          <motion.div
            id="volunteer"
            data-reveal
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group relative overflow-hidden rounded-3xl border border-cream-100/15 bg-plum-800/60 p-8 sm:p-10"
          >
            <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-mint-300 transition-transform duration-700 group-hover:scale-x-100" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint-300">
              For your hours
            </p>
            <h3 className="mt-3 font-display text-3xl text-cream-50 sm:text-4xl">Volunteer</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream-100/70">
              Door-knock with us, host a house party, or write postcards from your couch. Pick what
              fits your week.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm text-cream-100/80">
              {[
                'Door-knocking shifts',
                'Phone & text banking',
                'Host a meet-up',
                'Postcards from home',
                'Translate flyers',
                'Bring snacks 🥨',
              ].map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-2 rounded-full border border-cream-100/10 bg-plum-700/40 px-3 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-300" />
                  {it}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CineButton href="/volunteer" variant="ghost">
                Sign up to help
              </CineButton>
            </div>
          </motion.div>

          {/* Donate */}
          <motion.div
            id="donate"
            data-reveal
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group relative overflow-hidden rounded-3xl border border-mint-300/30 bg-gradient-to-br from-mint-300 via-sage-300 to-cream-200 p-8 text-ink sm:p-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-plum-600">
              For your dollar
            </p>
            <h3 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Donate</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">
              No corporate PACs. No dark money. Every dollar funds field staff, town halls, and the
              literature we hand out at the door.
            </p>

            <div className="mt-8 grid grid-cols-5 gap-2">
              {AMOUNTS.map((a, i) => (
                <button
                  key={a}
                  type="button"
                  className={`group/btn relative overflow-hidden rounded-2xl border border-plum-700/25 bg-paper px-2 py-3 text-center font-display text-lg text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-plum-700 ${
                    i === 2 ? 'ring-2 ring-plum-700' : ''
                  }`}
                >
                  <span className="relative z-10">{a}</span>
                  <span className="absolute inset-0 -translate-y-full bg-plum-500 transition-transform duration-500 group-hover/btn:translate-y-0" />
                  <span className="relative z-10 mix-blend-difference text-cream-50 hidden group-hover/btn:inline" />
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CineButton href="/donate">Give once</CineButton>
              <CineButton href="/donate" variant="ghost">
                Become a monthly donor
              </CineButton>
            </div>
          </motion.div>
        </div>

        {/* Newsletter strip */}
        <motion.div
          data-reveal
          className="relative mt-16 grid grid-cols-1 gap-4 rounded-3xl border border-cream-100/15 bg-plum-800/50 p-6 sm:grid-cols-[1fr_auto] sm:gap-6 sm:p-8"
        >
          <div>
            <p className="font-display text-2xl text-cream-50">Get a weekly note from the trail.</p>
            <p className="mt-1 text-sm text-cream-100/70">
              One email, every Friday. Field updates, town hall recaps, and what we learned this
              week.
            </p>
          </div>
          <div className="flex md:items-center">
            <NewsletterForm tone="dark" />
          </div>
        </motion.div>
      </div>
    </SectionFrame>
  )
}

export default GetInvolved
