import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import ContactForm from '@/components/forms/contact-form'
import NewsletterForm from '@/components/forms/newsletter-form'
import CtaSection from '@/components/cta-section'
import { CANDIDATE } from '@/data/candidate'

export const metadata = {
  title: 'Contact',
  description:
    'Write the campaign — general inquiries, press, endorsements, or just to say hi. We respond within two business days.',
}

const ContactPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact — Get in touch"
        title="Write us. We'll write back."
        intro="Every email is read by a human. Press requests get a same-day response from the comms team."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <SectionFrame id="contact-form" eyebrow="Send a message">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7" data-reveal>
            <ContactForm />
          </div>

          {/* Sidebar — direct lines */}
          <aside className="md:col-span-5 flex flex-col gap-5">
            <div data-reveal className="rounded-2xl border border-plum-500/15 bg-paper-2/50 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                General
              </p>
              <p className="mt-3 font-display text-xl text-ink">Email the team</p>
              <a
                href={`mailto:${CANDIDATE.email}`}
                className="mt-2 inline-block text-sm text-ink/75 underline-offset-4 hover:text-plum-500 hover:underline"
              >
                {CANDIDATE.email}
              </a>
            </div>
            <div data-reveal className="rounded-2xl border border-plum-500/15 bg-paper-2/50 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                Press
              </p>
              <p className="mt-3 font-display text-xl text-ink">Media inquiries</p>
              <a
                href={`mailto:${CANDIDATE.pressEmail}`}
                className="mt-2 inline-block text-sm text-ink/75 underline-offset-4 hover:text-plum-500 hover:underline"
              >
                {CANDIDATE.pressEmail}
              </a>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                24-hour response window
              </p>
            </div>
            <div data-reveal className="rounded-2xl border border-plum-500/15 bg-paper-2/50 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                Field office
              </p>
              <address className="mt-3 not-italic text-sm leading-relaxed text-ink/80">
                {CANDIDATE.fieldOffice.street}
                <br />
                {CANDIDATE.fieldOffice.city}
              </address>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                Walk-ins welcome · Mon–Fri 10–6
              </p>
            </div>
          </aside>
        </div>
      </SectionFrame>

      <SectionFrame id="newsletter" eyebrow="Weekly trail note" tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7" data-reveal>
            <h2 className="font-display text-3xl text-cream-50 sm:text-4xl">
              One email, every Friday.
            </h2>
            <p className="mt-3 max-w-md text-base text-cream-100/75">
              Field updates, town hall recaps, and what we learned this week. Unsubscribe in one
              click.
            </p>
          </div>
          <div className="md:col-span-5 flex md:items-center" data-reveal>
            <NewsletterForm tone="dark" />
          </div>
        </div>
      </SectionFrame>

      <CtaSection
        title="Want to get involved instead?"
        copy="If you're ready to do more than send a message, we'd love your help."
        primary={{ label: 'Volunteer', href: '/volunteer' }}
        secondary={{ label: 'Donate', href: '/donate' }}
      />
    </>
  )
}

export default ContactPage
