import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import SectionFrame from "@/components/section-frame";
import Arrow from "@/components/arrow";
import CtaSection from "@/components/cta-section";
import { EVENTS } from "@/data/events";

export const metadata = {
  title: "Events",
  description:
    "Town halls, volunteer kickoffs, and meet-ups across Oregon's 3rd Congressional District. Every event is free, open, and on the calendar.",
};

const EventsPage = () => {
  const [featured, ...rest] = EVENTS;

  return (
    <>
      <PageHero
        eyebrow="Events — Chapter 05"
        title="Come find me in the community."
        intro="Every event is free, open, and on the calendar. Bring questions — we'll bring chairs, coffee, and answers."
        crumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              On the calendar
            </p>
            <p className="mt-1 font-display text-2xl italic text-ink">
              {EVENTS.length}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
              upcoming
            </p>
          </div>
        }
      />

      {/* Featured event */}
      <SectionFrame id="featured" eyebrow="Featured · next event">
        <Link
          href={`/events/${featured.slug}`}
          data-reveal
          className="group relative block overflow-hidden rounded-[28px] border border-plum-500/15 shadow-[0_30px_60px_-30px_rgba(40,15,55,0.5)] transition-transform duration-500 hover:-translate-y-1"
        >
          <div className="relative grid grid-cols-1 md:grid-cols-12">
            <div className="relative aspect-[4/3] md:col-span-6 md:aspect-auto md:min-h-[420px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(40,15,55,0.55) 100%)",
                }}
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-cream-100/25 bg-ink/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-300" />
                Featured
              </div>
            </div>

            <div className="bg-gradient-to-br from-plum-500 via-plum-700 to-plum-900 p-8 text-cream-50 md:col-span-6 md:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/70">
                {featured.fullDate} · {featured.time}
              </p>
              <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-3 font-display text-base italic text-cream-100/85 sm:text-lg">
                {featured.subtitle}
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-100/80 sm:text-base">
                {featured.blurb}
              </p>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-cream-100/15 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream-100/65">
                  {featured.rsvp}/{featured.capacity} RSVPs
                </span>
                <span className="inline-flex items-center gap-3 text-cream-50 transition-colors group-hover:text-mint-300">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                    Event details
                  </span>
                  <Arrow size="lg" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </SectionFrame>

      {/* Calendar list */}
      <SectionFrame id="calendar" eyebrow="Full calendar">
        <ul className="flex flex-col">
          {rest.map((e, i) => (
            <li
              key={e.slug}
              data-reveal
              className="group relative border-t border-plum-500/15 last:border-b"
            >
              <Link
                href={`/events/${e.slug}`}
                className="grid grid-cols-12 items-center gap-3 py-7 sm:py-8"
              >
                <div className="col-span-3 sm:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-plum-500/70">
                    {String(i + 2).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-display text-3xl leading-none text-ink sm:text-4xl">
                    {e.date.split(" ")[1]}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55">
                    {e.date.split(" ")[0]} · {e.weekday}
                  </p>
                </div>
                <div className="col-span-7 sm:col-span-7 min-w-0">
                  <p className="truncate font-display text-base text-ink sm:text-xl">
                    {e.title}
                  </p>
                  <p className="mt-1 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 sm:text-[11px]">
                    {e.time} · {e.venue}
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-3 flex items-center justify-end gap-3">
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55 sm:inline">
                    {e.cat}
                  </span>
                  <Arrow
                    size="md"
                    className="text-ink/45 transition-colors duration-500 group-hover:text-plum-500"
                  />
                </div>
              </Link>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-plum-500 transition-all duration-700 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </SectionFrame>

      <CtaSection
        title="Host an event at home."
        copy="House parties are the backbone of this campaign. Pick a date — we'll bring the snacks."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Volunteer", href: "/volunteer" }}
      />
    </>
  );
};

export default EventsPage;
