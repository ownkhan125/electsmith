"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import SectionFrame from "@/components/section-frame";
import CineButton from "@/components/cine-button";
import FormField from "@/components/form-field";
import CtaSection from "@/components/cta-section";

const AMOUNTS = [25, 50, 100, 250, 500, 1000];

const DonatePage = () => {
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const finalAmount = custom ? Number(custom) || 0 : amount;

  const onSubmit = (e) => {
    e.preventDefault();
    if (finalAmount < 1) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Donate — For your dollar"
        title="No corporate PACs. No dark money."
        intro="Every dollar funds field staff, town halls, and the literature we hand out at the door. The maximum federal contribution per individual is $3,300 per election."
        crumbs={[{ label: "Home", href: "/" }, { label: "Donate" }]}
      />

      <SectionFrame id="donate" eyebrow="Choose an amount">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Left — story */}
          <div className="md:col-span-5">
            <ul data-reveal className="flex flex-col gap-3">
              {[
                {
                  k: "$25",
                  v: "Funds yard signs for an entire precinct",
                },
                {
                  k: "$50",
                  v: "Pays for one canvass shift’s supplies",
                },
                {
                  k: "$100",
                  v: "Covers a small-town town hall venue",
                },
                {
                  k: "$250",
                  v: "Sponsors one week of a field organizer’s coffee",
                },
                {
                  k: "$500+",
                  v: "Helps train a precinct captain for the cycle",
                },
              ].map((row) => (
                <li
                  key={row.k}
                  className="flex items-baseline justify-between gap-4 border-b border-plum-500/15 pb-3"
                >
                  <span className="font-display text-2xl text-plum-500">
                    {row.k}
                  </span>
                  <span className="text-right text-sm text-ink/70">{row.v}</span>
                </li>
              ))}
            </ul>

            <p
              data-reveal
              className="mt-10 rounded-2xl border border-plum-500/15 bg-paper-2/40 p-5 text-sm leading-relaxed text-ink/75"
            >
              <span className="font-semibold text-ink">Required by law:</span>{" "}
              Contributions are not tax-deductible. Federal law limits
              contributions to $3,300 per individual per election. Foreign
              nationals and federal contractors are prohibited from donating.
            </p>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            <form
              onSubmit={onSubmit}
              data-reveal
              className="rounded-[28px] border border-plum-500/15 bg-paper p-7 sm:p-8 lg:p-10"
            >
              {submitted ? (
                <div className="text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint-500">
                    Thank you
                  </p>
                  <p className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                    ${finalAmount} {recurring ? "/ month" : ""} — received.
                  </p>
                  <p className="mt-2 text-sm text-ink/65">
                    Your receipt and FEC disclosure are on the way to your
                    inbox.
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                    Step 1 · Amount
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {AMOUNTS.map((a) => {
                      const active = !custom && amount === a;
                      return (
                        <button
                          key={a}
                          type="button"
                          onClick={() => {
                            setAmount(a);
                            setCustom("");
                          }}
                          className={`rounded-2xl border px-2 py-4 font-display text-lg transition-all duration-300 ${
                            active
                              ? "border-plum-500 bg-plum-500 text-cream-50"
                              : "border-plum-500/20 text-ink hover:border-plum-500/50"
                          }`}
                        >
                          ${a}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5">
                    <FormField
                      label="Other amount"
                      name="custom"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={3300}
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      placeholder="Enter a custom amount"
                    />
                  </div>

                  <label className="mt-6 flex items-center gap-3 rounded-2xl border border-plum-500/15 bg-paper-2/40 px-4 py-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={recurring}
                      onChange={(e) => setRecurring(e.target.checked)}
                      className="h-5 w-5 accent-plum-500"
                    />
                    <span className="text-sm text-ink">
                      Make this a{" "}
                      <span className="font-semibold">monthly</span> donation
                    </span>
                  </label>

                  <div className="mt-8 border-t border-plum-500/15 pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                      Step 2 · Your details
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField label="First name" name="firstName" required />
                      <FormField label="Last name" name="lastName" required />
                      <FormField label="Email" name="email" type="email" required />
                      <FormField label="ZIP code" name="zip" required inputMode="numeric" maxLength={5} />
                      <FormField label="Employer" name="employer" required hint="Required by federal law" />
                      <FormField label="Occupation" name="occupation" required hint="Required by federal law" />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                      Secure · FEC-compliant · No corporate PAC dollars
                    </p>
                    <CineButton type="submit" onClick={() => {}}>
                      Donate ${finalAmount}
                      {recurring ? " / mo" : ""}
                    </CineButton>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </SectionFrame>

      <CtaSection
        title="Can't donate today?"
        copy="Volunteering, hosting a meet-up, or sharing the campaign are all just as valuable."
        primary={{ label: "Volunteer", href: "/volunteer" }}
        secondary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
};

export default DonatePage;
