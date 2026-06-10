'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/cn'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Issues', href: '/issues' },
  { label: 'Events', href: '/events' },
  { label: 'Endorsements', href: '/endorsements' },
  { label: 'News', href: '/news' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hoverIdx, setHoverIdx] = useState(null)

  // Track each link's bounding box for the sliding indicator
  const navRef = useRef(null)
  const linkRefs = useRef([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (hoverIdx === null || !navRef.current) return
    const el = linkRefs.current[hoverIdx]
    if (!el) return
    const navBox = navRef.current.getBoundingClientRect()
    const box = el.getBoundingClientRect()
    setIndicator({
      left: box.left - navBox.left,
      width: box.width,
    })
  }, [hoverIdx])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[padding] duration-500',
          scrolled ? 'py-3' : 'py-5',
        )}
      >
        <div
          className={cn(
            'pointer-events-none absolute inset-x-3 top-2 bottom-2 rounded-2xl border transition-all duration-500 sm:inset-x-6',
            scrolled
              ? 'border-plum-500/15 bg-paper/85 backdrop-blur-xl shadow-[0_10px_40px_-22px_rgb(var(--shadow-warm)_/_0.35)]'
              : 'border-transparent bg-transparent',
          )}
        />

        <nav className="relative mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 sm:px-10 md:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="group relative z-10 flex items-center gap-3"
            aria-label="ElectSmith — home"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-plum-500 text-cream-50 ring-1 ring-plum-700/40">
              <span className="font-display text-lg leading-none">E</span>
              <span className="absolute -bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-mint-300 transition-all duration-500 group-hover:scale-150" />
            </span>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  'font-display text-lg tracking-tight transition-colors duration-300',
                  open ? 'text-cream-50' : 'text-ink',
                )}
              >
                Elect
                <span className={open ? 'text-mint-300' : 'text-plum-500'}>Smith</span>
              </span>
              <span
                className={cn(
                  'font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300',
                  open ? 'text-cream-200/70' : 'text-ink/60',
                )}
              >
                For Congress · 2026
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul
            ref={navRef}
            className="relative hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setHoverIdx(null)}
          >
            {/* Sliding indicator */}
            <motion.span
              aria-hidden
              animate={{
                left: indicator.left,
                width: indicator.width,
                opacity: hoverIdx === null ? 0 : 1,
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-plum-500/10"
            />

            {NAV_LINKS.map((l, i) => (
              <li key={l.href}>
                <Link
                  ref={(el) => (linkRefs.current[i] = el)}
                  href={l.href}
                  onMouseEnter={() => setHoverIdx(i)}
                  className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink/80 transition-colors duration-300 hover:text-ink"
                >
                  {/* Leading dot */}
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full transition-all duration-500',
                      hoverIdx === i ? 'bg-plum-500 scale-100' : 'bg-plum-500/0 scale-0',
                    )}
                  />
                  <span className="relative">
                    {l.label}
                    {/* Traced underline */}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px bg-plum-500 transition-all duration-500',
                        hoverIdx === i ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/volunteer"
              className="group relative text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              <span className="relative">
                Volunteer
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-plum-500 transition-all duration-500 group-hover:w-full" />
              </span>
            </Link>
            <Link
              href="/donate"
              className="cine-btn text-xs"
              style={{ padding: '0.65rem 1.15rem 0.65rem 1.25rem' }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">Donate</span>
              <span className="cine-arrow relative z-10" aria-hidden>
                <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className={cn(
              'relative z-10 grid h-11 w-11 place-items-center rounded-full border backdrop-blur transition-colors duration-300 lg:hidden',
              open ? 'border-cream-100/30 bg-plum-800/60' : 'border-plum-500/30 bg-paper/80',
            )}
          >
            <span
              className={cn(
                'absolute h-px w-5 transition-all duration-500',
                open ? 'translate-y-0 rotate-45 bg-cream-50' : '-translate-y-1.5 bg-ink',
              )}
            />
            <span
              className={cn(
                'absolute h-px w-5 transition-all duration-500',
                open ? 'translate-y-0 -rotate-45 bg-cream-50' : 'translate-y-1.5 bg-ink',
              )}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full bg-plum-900 px-6 pt-28 pb-12 text-cream-50"
            >
              <div className="absolute inset-0 dot-field opacity-20" />
              <ul className="relative flex flex-col gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-cream-100/15 py-5 font-display text-3xl"
                    >
                      <span>{l.label}</span>
                      <span className="text-mint-300 transition-transform duration-500 group-hover:translate-x-2">
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative mt-10 flex flex-col gap-3"
              >
                <Link
                  href="/volunteer"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-cream-100/30 px-6 py-4 text-center font-semibold"
                >
                  Volunteer
                </Link>
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-mint-300 px-6 py-4 text-center font-semibold text-ink"
                >
                  Donate to the Campaign
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
