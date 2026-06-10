"use client";

import Link from "next/link";
import SplitText from "@/components/split-text";

/**
 * PageHero — shared top-of-page hero for every inner page.
 *
 *   eyebrow   — small label
 *   title     — h1 (split-text on first paint)
 *   intro     — optional lede paragraph
 *   crumbs    — optional breadcrumb [{label, href}]
 *   right     — optional ReactNode rendered on the right side (badge, meta)
 */
const PageHero = ({ eyebrow, title, intro, crumbs, right }) => {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20">
      {/* Calm backdrop, matches Hero on home but lighter */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 0%, color-mix(in oklab, var(--mint-300) 20%, transparent) 0%, transparent 70%), radial-gradient(50% 60% at 0% 100%, color-mix(in oklab, var(--cream-300) 30%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--ink-900) 1px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-10 md:px-16">
        {/* Breadcrumbs */}
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
              {crumbs.map((c, i) => (
                <li key={`${i}-${c.label}`} className="flex items-center gap-2">
                  {i > 0 && <span className="text-plum-500/40">/</span>}
                  {c.href && i < crumbs.length - 1 ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-plum-500"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink/40">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center gap-4">
            <span className="block h-px w-12 bg-plum-500/60 sm:w-16" />
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-600 sm:text-xs">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Title + intro + optional right rail */}
        <div className="mt-8 grid grid-cols-1 items-end gap-10 md:mt-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <SplitText
              as="h1"
              text={title}
              trigger="first-paint"
              className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-0.03em] text-ink"
            />
            {intro && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/72 sm:text-lg">
                {intro}
              </p>
            )}
          </div>
          {right && <div className="md:col-span-4 md:text-right">{right}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
