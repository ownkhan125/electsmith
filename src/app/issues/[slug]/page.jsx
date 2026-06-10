import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import SectionFrame from "@/components/section-frame";
import Arrow from "@/components/arrow";
import CtaSection from "@/components/cta-section";
import { ISSUES, getIssue } from "@/data/issues";

export const generateStaticParams = () =>
  ISSUES.map((i) => ({ slug: i.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) return {};
  return {
    title: issue.title,
    description: issue.summary,
  };
};

const IssueDetailPage = async ({ params }) => {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) notFound();

  const idx = ISSUES.findIndex((i) => i.slug === slug);
  const next = ISSUES[(idx + 1) % ISSUES.length];

  return (
    <>
      <PageHero
        eyebrow={`Issue ${issue.n} — ${issue.tag}`}
        title={issue.title}
        intro={issue.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Issues", href: "/issues" },
          { label: issue.tag },
        ]}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              Position
            </p>
            <p className="mt-1 font-display text-2xl italic text-ink">
              {issue.n}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
              of {ISSUES.length}
            </p>
          </div>
        }
      />

      {/* Pillars */}
      <SectionFrame id="pillars" eyebrow="What we'll fight for">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p
              data-reveal
              className="font-display text-xl italic leading-snug text-ink sm:text-2xl"
            >
              “{issue.quote}”
            </p>
            <p
              data-reveal
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55"
            >
              — Jordan, on {issue.tag.toLowerCase()}
            </p>
          </div>
          <ul className="md:col-span-7 flex flex-col gap-3">
            {issue.pillars.map((p, i) => (
              <li
                key={p}
                data-reveal
                className="group relative overflow-hidden rounded-2xl border border-plum-500/15 bg-paper p-5 transition-colors duration-500 hover:border-plum-500/40"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-base text-ink/85">{p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {/* Bills */}
      <SectionFrame id="bills" eyebrow="Bills we'll co-sponsor" tone="ink">
        <p
          data-reveal
          className="max-w-3xl text-base leading-relaxed text-cream-100/80 sm:text-lg"
        >
          A vote for this campaign is a vote for the bills below. We’ll
          co-sponsor every one of them on day one and publish the floor-vote
          schedule in plain English.
        </p>
        <ul
          data-reveal
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {issue.bills.map((b, i) => (
            <li
              key={b}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-cream-100/15 bg-plum-800/50 px-5 py-4 transition-colors hover:border-mint-300/40"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mint-300">
                  HR{i + 1}.0{idx + 1}
                </p>
                <p className="mt-1 font-display text-base text-cream-50">{b}</p>
              </div>
              <Arrow size="md" className="text-cream-100/70 group-hover:text-mint-300" />
            </li>
          ))}
        </ul>
      </SectionFrame>

      {/* Next + related */}
      <SectionFrame id="next-issue" eyebrow="Next issue">
        <Link
          href={`/issues/${next.slug}`}
          className="group relative block overflow-hidden rounded-3xl border border-plum-500/15 bg-paper p-7 transition-colors duration-500 hover:border-plum-500/40 sm:p-10"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-plum-500/70">
                Issue {next.n} — {next.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-ink sm:text-3xl">
                {next.title}
              </h3>
            </div>
            <div className="flex items-center gap-3 text-ink/65 transition-colors group-hover:text-plum-500">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                Continue
              </span>
              <Arrow size="lg" />
            </div>
          </div>
        </Link>
      </SectionFrame>

      <CtaSection
        title="Care about this? Help us win it."
        copy="The fastest way to move policy is to win in November. Pick a way in."
        primary={{ label: "Donate", href: "/donate" }}
        secondary={{ label: "Volunteer", href: "/volunteer" }}
      />
    </>
  );
};

export default IssueDetailPage;
