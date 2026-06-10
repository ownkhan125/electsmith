"use client";

import PageHero from "@/components/page-hero";
import SectionFrame from "@/components/section-frame";

/**
 * LegalPage — single-column long-form page for privacy/terms/accessibility.
 *
 * sections: [{ heading, body: string[] | string }, ...]
 */
const LegalPage = ({ title, eyebrow, intro, updated, sections, crumbs }) => {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        crumbs={crumbs}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              Last updated
            </p>
            <p className="mt-1 font-display text-xl italic text-ink">
              {updated}
            </p>
          </div>
        }
      />

      <SectionFrame id="legal-body" eyebrow="In full">
        <div className="mx-auto max-w-3xl">
          {sections.map((s, i) => (
            <div key={s.heading} data-reveal className="mb-12 last:mb-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                §{String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                {s.heading}
              </h2>
              <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-ink/80">
                {(Array.isArray(s.body) ? s.body : [s.body]).map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionFrame>
    </>
  );
};

export default LegalPage;
