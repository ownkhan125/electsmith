import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import SectionFrame from "@/components/section-frame";
import Arrow from "@/components/arrow";
import CtaSection from "@/components/cta-section";
import { NEWS, getArticle } from "@/data/news";

export const generateStaticParams = () =>
  NEWS.map((n) => ({ slug: n.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
};

const ArticlePage = async ({ params }) => {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const idx = NEWS.findIndex((n) => n.slug === slug);
  const others = NEWS.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${article.category} · ${article.date}`}
        title={article.title}
        intro={article.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.category },
        ]}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              Read time
            </p>
            <p className="mt-1 font-display text-2xl italic text-ink">
              {article.readMins} min
            </p>
          </div>
        }
      />

      <section className="pb-4">
        <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-10 md:px-16">
          <div
            data-reveal
            className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-plum-500/15 shadow-[0_30px_60px_-30px_rgba(40,15,55,0.4)]"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <SectionFrame id="article-body" eyebrow="Full article">
        <div className="mx-auto max-w-3xl">
          <div className="prose-like flex flex-col gap-6 text-base leading-relaxed text-ink/85 sm:text-lg">
            {article.body.map((p, i) => (
              <p key={i} data-reveal>
                {p}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <figure
            data-reveal
            className="mt-12 rounded-2xl border-l-2 border-plum-500 bg-paper-2/60 px-6 py-5"
          >
            <p className="font-display text-xl italic leading-snug text-ink sm:text-2xl">
              “This campaign is about returning Congress to the people who pay
              attention to school-board votes.”
            </p>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">
              — Jordan Smith
            </figcaption>
          </figure>
        </div>
      </SectionFrame>

      {/* More from the press */}
      <SectionFrame id="more-news" eyebrow="More from the press">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {others.map((n) => (
            <li key={n.slug} data-reveal>
              <Link
                href={`/news/${n.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-plum-500/15 bg-paper transition-colors duration-500 hover:border-plum-500/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                    {n.category} · {n.date}
                  </p>
                  <h3 className="mt-3 font-display text-lg leading-tight text-ink">
                    {n.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-3 text-ink/65 transition-colors group-hover:text-plum-500">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                      Read article
                    </span>
                    <Arrow size="md" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SectionFrame>

      <CtaSection
        title="Stay in the loop."
        copy="One email, every Friday. Field updates, town hall recaps, and what we learned this week."
        primary={{ label: "Subscribe", href: "/contact" }}
        secondary={{ label: "All news", href: "/news" }}
      />
    </>
  );
};

export default ArticlePage;
