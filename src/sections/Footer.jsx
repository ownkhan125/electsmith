"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-setup";
import { CANDIDATE, SOCIALS } from "@/data/candidate";

const COLS = [
  {
    title: "Campaign",
    links: [
      { l: "About Jordan", h: "/about" },
      { l: "Our Issues", h: "/issues" },
      { l: "Endorsements", h: "/endorsements" },
      { l: "News & press", h: "/news" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { l: "Volunteer", h: "/volunteer" },
      { l: "Donate", h: "/donate" },
      { l: "Events", h: "/events" },
      { l: "Contact", h: "/contact" },
    ],
  },
];

const Footer = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-wordmark .split-char",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const word = "ElectSmith.";
  return (
    <footer
      ref={ref}
      className="relative isolate overflow-hidden bg-ink text-cream-100"
    >
      <div className="dot-field pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-24 pb-10 sm:px-10 md:px-16">
        {/* Big wordmark */}
        <div className="footer-wordmark overflow-hidden leading-none" aria-label={word}>
          <p
            className="font-display text-[clamp(3.5rem,14vw,12rem)] tracking-[-0.04em] text-cream-100"
            style={{ overflow: "hidden", paddingBottom: "0.1em" }}
          >
            {[...word].map((c, i) => (
              <span key={i} className="split-char inline-block">
                {c === " " ? " " : c}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-500 font-display text-cream-50">
                E
              </span>
              <div>
                <p className="font-display text-lg">
                  Elect<span className="text-mint-300">Smith</span>
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/60">
                  {CANDIDATE.name} · Congress 2026
                </p>
              </div>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream-100/65">
              An Oregon campaign for working families, climate dignity, and a
              democracy that returns your call.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-cream-100/15 px-4 py-2 text-xs text-cream-100/80 transition-colors duration-300 hover:border-mint-300 hover:text-mint-300"
                  >
                    <span>{s.label}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="col-span-1 md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/55">
                {c.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.l}>
                    <Link
                      href={l.h}
                      className="group inline-flex items-center gap-2 text-sm text-cream-100/85 transition-colors hover:text-mint-300"
                    >
                      {l.l}
                      <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Office */}
          <div className="col-span-2 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/55">
              Field Office
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-cream-100/85">
              {CANDIDATE.fieldOffice.street}
              <br />
              {CANDIDATE.fieldOffice.city}
              <br />
              <Link
                href={`mailto:${CANDIDATE.email}`}
                className="mt-2 inline-block underline-offset-4 hover:text-mint-300 hover:underline"
              >
                {CANDIDATE.email}
              </Link>
            </address>
          </div>

          <div className="col-span-2 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/55">
              Press
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-cream-100/85">
              For media inquiries
              <br />
              <Link
                href={`mailto:${CANDIDATE.pressEmail}`}
                className="mt-2 inline-block underline-offset-4 hover:text-mint-300 hover:underline"
              >
                {CANDIDATE.pressEmail}
              </Link>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream-100/15 pt-6 text-xs text-cream-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CANDIDATE.campaignName}.{" "}
            <span className="opacity-70">All rights reserved.</span>
          </p>
          <p className="max-w-xl">
            Paid for by {CANDIDATE.paidForBy}. FEC ID {CANDIDATE.fec}. Not
            authorized by any candidate or candidate’s committee. Contributions
            are not tax-deductible.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-mint-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-mint-300">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-mint-300">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
