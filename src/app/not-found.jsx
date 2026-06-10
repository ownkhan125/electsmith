import Link from 'next/link'
import CineButton from '@/components/cine-button'

const NotFound = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24 sm:px-10">
      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-500">
          404 · Page not found
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
          That page is off the trail.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink/72">
          We couldn’t find the page you were looking for. The campaign calendar moves quickly — try
          one of these instead.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <CineButton href="/">Back to home</CineButton>
          <CineButton href="/events" variant="ghost">
            See upcoming events
          </CineButton>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-plum-500/15 pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
            Quick links
          </span>
          {[
            { l: 'About', h: '/about' },
            { l: 'Issues', h: '/issues' },
            { l: 'Endorsements', h: '/endorsements' },
            { l: 'Contact', h: '/contact' },
          ].map((q) => (
            <Link
              key={q.h}
              href={q.h}
              className="text-sm text-ink/75 transition-colors hover:text-plum-500"
            >
              {q.l}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NotFound
