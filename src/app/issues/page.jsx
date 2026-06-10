import Link from 'next/link'
import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import Arrow from '@/components/arrow'
import CtaSection from '@/components/cta-section'
import { ISSUES } from '@/data/issues'

export const metadata = {
  title: 'Issues',
  description:
    "Six fights worth taking to Washington — Jordan Smith's policy priorities for Oregon's 3rd Congressional District.",
}

const IssuesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Issues — Chapter 02"
        title="Six fights worth taking to Washington."
        intro="These aren't talking points — they're the bills we'll introduce in the first session, paired with the floor votes we'll demand."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Issues' }]}
      />

      <SectionFrame id="all-issues" eyebrow="The platform" tone="ink">
        <ul className="flex flex-col gap-4">
          {ISSUES.map((it) => (
            <li key={it.slug} data-reveal>
              <Link
                href={`/issues/${it.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-cream-100/10 bg-plum-800/40 p-7 transition-colors duration-500 hover:border-mint-300/40 hover:bg-plum-700/60 sm:p-9"
              >
                <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-mint-300 via-sage-300 to-cream-200 transition-transform duration-700 group-hover:scale-y-100" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                  <div className="shrink-0">
                    <span className="font-display text-3xl italic leading-none text-mint-300 sm:text-4xl">
                      {it.n}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="font-display text-xl text-cream-50 sm:text-2xl">{it.title}</h2>
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream-100/55">
                        {it.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-cream-100/75 sm:text-base">
                      {it.summary}
                    </p>

                    <div className="mt-5 flex items-center gap-3 text-cream-100/70 transition-colors duration-500 group-hover:text-mint-300">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                        Read the platform
                      </span>
                      <Arrow size="md" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SectionFrame>

      <CtaSection
        title="Have an issue we missed?"
        copy="If your priority isn't on this list, write to the campaign — we read every email."
        primary={{ label: 'Get in touch', href: '/contact' }}
        secondary={{ label: 'Volunteer', href: '/volunteer' }}
      />
    </>
  )
}

export default IssuesPage
