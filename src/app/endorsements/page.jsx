import PageHero from "@/components/page-hero";
import SectionFrame from "@/components/section-frame";
import CtaSection from "@/components/cta-section";
import {
  TESTIMONIAL_QUOTES,
  ORGANIZATIONS,
  INDIVIDUALS,
} from "@/data/endorsements";

export const metadata = {
  title: "Endorsements",
  description:
    "The organizations and elected officials standing with Jordan Smith for Congress — backed by teachers, nurses, firefighters, farmers, and former opponents.",
};

const EndorsementsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Endorsements — Chapter 04"
        title="Backed by people who do the actual work."
        intro="Teachers, nurses, firefighters, farmers, machinists, and a few former opponents. No corporate PACs — only people whose names fit on a school newsletter."
        crumbs={[{ label: "Home", href: "/" }, { label: "Endorsements" }]}
      />

      {/* Quotes */}
      <SectionFrame id="quotes" eyebrow="In their words">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIAL_QUOTES.map((q) => (
            <li
              key={q.name}
              data-reveal
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
                  {q.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{q.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                    {q.role}
                  </p>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-mint-300 via-sage-300 to-plum-500 transition-transform duration-700 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </SectionFrame>

      {/* Organizations */}
      <SectionFrame id="organizations" eyebrow="Organizations" tone="ink">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ORGANIZATIONS.map((o, i) => (
            <li
              key={o.name}
              data-reveal
              className="group flex items-start justify-between gap-4 rounded-2xl border border-cream-100/12 bg-plum-800/40 p-5 transition-colors hover:border-mint-300/35"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mint-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-lg leading-tight text-cream-50">
                  {o.name}
                </p>
                <p className="mt-1 text-sm text-cream-100/70">{o.note}</p>
              </div>
              <span className="rounded-full border border-cream-100/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100/70">
                {o.type}
              </span>
            </li>
          ))}
        </ul>
      </SectionFrame>

      {/* Individuals */}
      <SectionFrame id="individuals" eyebrow="Elected officials & community leaders">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {INDIVIDUALS.map((p) => (
            <li
              key={p.name}
              data-reveal
              className="rounded-2xl border border-plum-500/15 bg-paper-2/50 p-5"
            >
              <p className="font-display text-base text-ink">{p.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                {p.note}
              </p>
            </li>
          ))}
        </ul>
      </SectionFrame>

      <CtaSection
        title="Want to endorse?"
        copy="If your organization wants to add its name, we'd love to hear from you."
        primary={{ label: "Contact the team", href: "/contact" }}
        secondary={{ label: "Volunteer", href: "/volunteer" }}
      />
    </>
  );
};

export default EndorsementsPage;
