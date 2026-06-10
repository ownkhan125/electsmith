import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import VolunteerForm from '@/components/forms/volunteer-form'
import CtaSection from '@/components/cta-section'

export const metadata = {
  title: 'Volunteer',
  description:
    'Door-knock, phone bank, host a meet-up, or write postcards from your couch. Pick what fits your week — the campaign moves at the speed of you.',
}

const ROLES = [
  {
    k: 'Door-knocking',
    d: 'Pair up with a partner, learn a short script, and walk the precincts that decide this race.',
  },
  {
    k: 'Phone & text banks',
    d: 'From your couch or our office. Sundays are our biggest call days.',
  },
  {
    k: 'Host a meet-up',
    d: 'House parties are the backbone of this campaign. We bring the snacks; you bring the friends.',
  },
  {
    k: 'Postcards from home',
    d: 'Write personal notes to swing-precinct voters. We provide the stamps.',
  },
  {
    k: 'Translation',
    d: 'Spanish, Vietnamese, Mandarin, or Russian speakers — we need you for flyers and at events.',
  },
  {
    k: 'Photography',
    d: 'Capture rallies, town halls, and quiet moments on the trail.',
  },
]

const VolunteerPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Volunteer — For your hours"
        title="Pick a way in."
        intro="One hour or twenty, in person or from home — every shift matters. Sign up below and a field organizer will reach out within 48 hours."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Volunteer' }]}
      />

      <SectionFrame id="roles" eyebrow="Where you can help">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((r, i) => (
            <li
              key={r.k}
              data-reveal
              className="group rounded-2xl border border-plum-500/15 bg-paper p-6 transition-colors duration-500 hover:border-plum-500/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 font-display text-xl text-ink">{r.k}</p>
              <p className="mt-2 text-sm text-ink/65">{r.d}</p>
            </li>
          ))}
        </ul>
      </SectionFrame>

      <SectionFrame id="form" eyebrow="Sign up" tone="ink">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl text-cream-50 sm:text-4xl">
              Tell us how you want to help.
            </h2>
            <p className="mt-4 max-w-md text-base text-cream-100/75">
              The more specific you are, the faster we can match you with a shift that fits your
              week. Bilingual? Tell us. Free Sunday mornings? Tell us.
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-sm text-cream-100/80">
              {[
                'Field organizer follow-up in 48 hours',
                'Flexible shifts — pick what works',
                'Friendly partners on every walk',
                'Childcare available at most events',
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-300" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-reveal
            className="md:col-span-8 rounded-[28px] border border-cream-100/15 bg-paper p-7 text-ink sm:p-8 lg:p-10"
          >
            <VolunteerForm />
          </div>
        </div>
      </SectionFrame>

      <CtaSection
        title="Not ready to volunteer? Donate."
        copy="Every dollar funds field staff, town halls, and the literature we hand out at the door."
        primary={{ label: 'Donate', href: '/donate' }}
        secondary={{ label: 'See events', href: '/events' }}
      />
    </>
  )
}

export default VolunteerPage
