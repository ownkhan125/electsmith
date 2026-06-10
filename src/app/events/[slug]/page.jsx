import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import Arrow from '@/components/arrow'
import CtaSection from '@/components/cta-section'
import RsvpForm from '@/components/forms/rsvp-form'
import Reveal from '@/components/reveal'
import { EVENTS, getEvent, getRelatedEvents } from '@/data/events'

export const generateStaticParams = () => EVENTS.map((e) => ({ slug: e.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) return {}
  return {
    title: event.title,
    description: event.blurb,
  }
}

const EventDetailPage = async ({ params }) => {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) notFound()

  const pct = Math.round((event.rsvp / event.capacity) * 100)
  const related = getRelatedEvents(slug, 3)

  return (
    <>
      <PageHero
        eyebrow={`${event.cat} · ${event.fullDate}`}
        title={event.title}
        intro={event.blurb}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: event.title },
        ]}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              Capacity
            </p>
            <p className="mt-1 font-display text-2xl italic text-ink">
              {event.rsvp}/{event.capacity}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
              {pct}% reserved
            </p>
          </div>
        }
      />

      {/* Featured image */}
      <section className="relative pt-6 pb-12 sm:pt-10 md:pt-14 md:pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 md:px-16">
          {/* Above-image meta strip — gives vertical rhythm above the photo */}
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <span className="block h-px w-12 bg-plum-500/50 sm:w-16" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-plum-600 sm:text-xs">
              {event.cat} · {event.fullDate}
            </span>
            <span className="hidden h-px flex-1 max-w-[180px] bg-plum-500/25 sm:block" />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 sm:inline">
              {event.venue}
            </span>
          </div>

          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-plum-500/15 shadow-[0_30px_60px_-30px_rgb(var(--shadow-warm)_/_0.4)] sm:aspect-[21/9]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 50%, rgb(var(--shadow-warm)_/_0.55) 100%)',
              }}
            />
            <div className="absolute left-6 bottom-6 flex flex-wrap items-center gap-3 sm:left-8 sm:bottom-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 bg-ink/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-300" />
                Featured event
              </span>
            </div>
          </Reveal>

          {/* Below-image caption — venue + host, with vertical rhythm */}
          <figcaption className="mt-5 flex flex-col gap-2 text-ink/65 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="font-display italic text-base sm:text-lg">{event.venue}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
              Hosted by {event.host}
            </p>
          </figcaption>
        </div>
      </section>

      {/* Info + description + RSVP */}
      <SectionFrame id="info" eyebrow="Event details">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Left — info */}
          <div className="md:col-span-7 flex flex-col gap-10">
            {/* Date / time / location strip */}
            <ul data-reveal className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <li className="rounded-2xl border border-plum-500/15 bg-paper p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                  Date
                </p>
                <p className="mt-2 font-display text-xl text-ink">{event.fullDate}</p>
              </li>
              <li className="rounded-2xl border border-plum-500/15 bg-paper p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                  Time
                </p>
                <p className="mt-2 font-display text-xl text-ink">{event.time}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  {event.timezone}
                </p>
              </li>
              <li className="rounded-2xl border border-plum-500/15 bg-paper p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                  Location
                </p>
                <p className="mt-2 font-display text-base leading-tight text-ink">{event.venue}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  {event.address}
                </p>
              </li>
            </ul>

            {/* Description */}
            <div data-reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                About this event
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">
                {event.description}
              </p>
            </div>

            {/* Highlights */}
            <div data-reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                What to expect
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {event.highlights.map((h, i) => (
                  <li
                    key={h}
                    className="flex items-start gap-4 rounded-2xl border border-plum-500/15 bg-paper p-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="flex-1 text-base text-ink/85">{h}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RSVP progress */}
            <div data-reveal className="rounded-3xl border border-plum-500/15 bg-paper-2/50 p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-ink/65">
                <span>{event.rsvp} RSVPs</span>
                <span>{event.capacity} capacity</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-plum-500/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-mint-300 via-sage-300 to-plum-500 transition-all duration-700"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-ink/65">
                Seats fill quickly — reserve yours to lock in capacity.
              </p>
            </div>
          </div>

          {/* Right — RSVP form (sticky on desktop) */}
          <aside className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <div
                data-reveal
                className="rounded-[28px] border border-plum-500/15 bg-paper p-7 sm:p-8 lg:p-10"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                  RSVP
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                  Reserve your seat.
                </h2>
                <p className="mt-2 text-sm text-ink/65">
                  Free for everyone. We send a reminder with directions and accessibility notes the
                  day before.
                </p>
                <div className="mt-7">
                  <RsvpForm eventTitle={event.title} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </SectionFrame>

      {/* Related events */}
      {related.length > 0 && (
        <SectionFrame id="related" eyebrow="More events" tone="ink">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} data-reveal>
                <Link
                  href={`/events/${r.slug}`}
                  className="group relative block overflow-hidden rounded-3xl border border-cream-100/15 bg-plum-800/40 transition-colors duration-500 hover:border-mint-300/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 30%, rgb(var(--shadow-warm)_/_0.65) 100%)',
                      }}
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-cream-100/30 bg-ink/35 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100 backdrop-blur">
                      {r.cat}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mint-300">
                      {r.fullDate}
                    </p>
                    <h3 className="mt-3 font-display text-xl text-cream-50">{r.title}</h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
                      {r.time} · {r.venue}
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-cream-50 transition-colors group-hover:text-mint-300">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                        Event details
                      </span>
                      <Arrow size="md" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </SectionFrame>
      )}

      <CtaSection
        title="Can't make it? Stay in the loop."
        copy="Volunteer, donate, or just sign up for the weekly note from the trail."
        primary={{ label: 'Donate', href: '/donate' }}
        secondary={{ label: 'Volunteer', href: '/volunteer' }}
      />
    </>
  )
}

export default EventDetailPage
