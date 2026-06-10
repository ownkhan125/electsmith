import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import Arrow from '@/components/arrow'
import CtaSection from '@/components/cta-section'
import Reveal from '@/components/reveal'
import { NEWS, getArticle } from '@/data/news'

export const generateStaticParams = () => NEWS.map((n) => ({ slug: n.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

const ArticlePage = async ({ params }) => {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const idx = NEWS.findIndex((n) => n.slug === slug)
  const others = NEWS.filter((_, i) => i !== idx).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`${article.category} · ${article.date}`}
        title={article.title}
        intro={article.excerpt}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'News', href: '/news' },
          { label: article.category },
        ]}
        right={
          <div className="rounded-2xl border border-plum-500/15 bg-paper-2/40 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
              Read time
            </p>
            <p className="mt-1 font-display text-2xl italic text-ink">{article.readMins} min</p>
          </div>
        }
      />

      <section className="relative pt-6 pb-12 sm:pt-10 md:pt-14 md:pb-20">
        <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-10 md:px-16">
          {/* Above-image meta strip */}
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <span className="block h-px w-12 bg-plum-500/50 sm:w-16" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-plum-600 sm:text-xs">
              {article.category} · {article.date}
            </span>
            <span className="hidden h-px flex-1 max-w-[180px] bg-plum-500/25 sm:block" />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 sm:inline">
              {article.readMins} min read
            </span>
          </div>

          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-plum-500/15 shadow-[0_30px_60px_-30px_rgb(var(--shadow-warm)_/_0.4)] sm:aspect-[21/9]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 60%, rgb(var(--shadow-warm)_/_0.45) 100%)',
              }}
            />
            <div className="absolute left-6 bottom-6 sm:left-8 sm:bottom-8">
              <span className="rounded-full border border-cream-100/30 bg-ink/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100 backdrop-blur">
                {article.category}
              </span>
            </div>
          </Reveal>

          {/* Below-image caption */}
          <figcaption className="mt-5 flex flex-col gap-2 text-ink/65 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="font-display italic text-base sm:text-lg">{article.title}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
              Photo · ElectSmith campaign
            </p>
          </figcaption>
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
              “This campaign is about returning Congress to the people who pay attention to
              school-board votes.”
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
                  <h3 className="mt-3 font-display text-lg leading-tight text-ink">{n.title}</h3>
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
        primary={{ label: 'Subscribe', href: '/contact' }}
        secondary={{ label: 'All news', href: '/news' }}
      />
    </>
  )
}

export default ArticlePage
