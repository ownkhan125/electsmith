import Image from 'next/image'
import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import SplitText from '@/components/split-text'
import CineButton from '@/components/cine-button'
import CtaSection from '@/components/cta-section'
import Journey from '@/sections/Journey'
import { CANDIDATE } from '@/data/candidate'

export const metadata = {
  title: 'About Jordan',
  description:
    "Teacher, veteran, lifelong Oregonian. Read Jordan Smith's story and why they're running for Congress in 2026.",
}

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
    d: 'Open calendars, monthly town halls, and every vote published in plain English.',
  },
]

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="About — Chapter 01"
        title="Built from the schools, soil, and sidewalks of this district."
        intro={`I'm ${CANDIDATE.name} — a teacher, veteran, and lifelong Oregonian. Here's how this campaign started and what we're running on.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <SectionFrame id="story" eyebrow="The story">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div
              data-reveal="x"
              className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-plum-500/15"
            >
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop&q=80"
                alt="Hood River, Oregon — Jordan's hometown"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 40%, rgb(var(--shadow-warm) /0.45) 100%)',
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-paper/85 px-4 py-3 backdrop-blur">
                <p className="font-display text-sm text-ink">Hood River, OR</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55">
                  Hometown
                </p>
              </div>
            </div>

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

          <div className="md:col-span-7">
            <SplitText
              as="h2"
              text="A son of public school, public libraries, and a public clinic."
              className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.025em] text-ink"
            />

            <div
              data-reveal
              className="mt-8 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg"
            >
              <p>
                I grew up in Hood River. My mom taught third grade and my dad fixed radiators in a
                shop he opened with a $4,000 SBA loan. We weren’t wealthy, but we had public school,
                public libraries, and a public health clinic that kept us going when things got
                hard.
              </p>
              <p>
                After high school I enlisted in the U.S. Navy. Four years and two Pacific
                deployments later I came home, used the GI Bill, and started teaching physics.
                Twelve years and 1,100 students later, I still keep their letters in a shoebox under
                my desk.
              </p>
              <p>
                I’m running because too many of those guardrails are crumbling while Washington
                bickers. I want to be the kind of representative who returns phone calls, files real
                bills, and shows up when the bridge to your neighborhood is closing.
              </p>
            </div>

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
                Read the full platform
              </CineButton>
            </div>
          </div>
        </div>
      </SectionFrame>

      {/* Journey timeline (reuses home component) */}
      <Journey />

      <CtaSection
        title="Want to know more? Come to a town hall."
        copy="No pre-screening, no scripted questions. Just a conversation under a tent."
        primary={{ label: 'See upcoming events', href: '/events' }}
        secondary={{ label: 'Get in touch', href: '/contact' }}
      />
    </>
  )
}

export default AboutPage
