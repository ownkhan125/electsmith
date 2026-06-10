import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/page-hero'
import SectionFrame from '@/components/section-frame'
import Arrow from '@/components/arrow'
import CtaSection from '@/components/cta-section'
import { NEWS } from '@/data/news'

export const metadata = {
  title: 'News & press',
  description:
    'Campaign announcements, endorsements, field updates, and press releases from the ElectSmith campaign.',
}

const NewsPage = () => {
  const [lead, ...rest] = NEWS

  return (
    <>
      <PageHero
        eyebrow="News — Chapter 04"
        title="From the trail."
        intro="Press releases, endorsements, and notes from the field. Every week, in plain English."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'News' }]}
      />

      {/* Lead story */}
      <SectionFrame id="lead" eyebrow="Latest">
        <Link
          href={`/news/${lead.slug}`}
          data-reveal
          className="group relative block overflow-hidden rounded-[28px] border border-plum-500/15 shadow-[0_30px_60px_-30px_rgb(var(--shadow-warm)_/_0.4)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="relative aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[400px]">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full border border-cream-100/30 bg-ink/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-100 backdrop-blur">
                {lead.category}
              </span>
            </div>
            <div className="bg-paper p-8 md:col-span-5 md:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                {lead.date} · {lead.readMins} min read
              </p>
              <h2 className="mt-4 font-display text-2xl leading-tight text-ink sm:text-3xl md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/72">{lead.excerpt}</p>
              <div className="mt-8 flex items-center gap-3 text-ink/65 transition-colors group-hover:text-plum-500">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                  Read the article
                </span>
                <Arrow size="lg" />
              </div>
            </div>
          </div>
        </Link>
      </SectionFrame>

      {/* Archive */}
      <SectionFrame id="archive" eyebrow="Archive">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <li key={n.slug} data-reveal>
              <Link
                href={`/news/${n.slug}`}
                className="group block h-full overflow-hidden rounded-[24px] border border-plum-500/15 bg-paper transition-colors duration-500 hover:border-plum-500/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-cream-100/30 bg-ink/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-50 backdrop-blur">
                    {n.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-plum-500">
                    {n.date} · {n.readMins} min
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-tight text-ink">{n.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/65">
                    {n.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-ink/65 transition-colors group-hover:text-plum-500">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                      Read more
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
        title="Press inquiry?"
        copy="Reach the press team directly — we respond within 24 hours."
        primary={{ label: 'Contact the team', href: '/contact' }}
        secondary={null}
      />
    </>
  )
}

export default NewsPage
