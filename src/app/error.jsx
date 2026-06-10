'use client'

import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import CineButton from '@/components/cine-button'

const ErrorBoundary = ({ error, reset }) => {
  useEffect(() => {
    console.error('[RootError]:', error)
  }, [error])

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24 sm:px-10">
      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-plum-500">
          Something broke
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
          Hold on — let’s try that again.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink/72">
          Something on our end didn’t load right. Reset the page below, or head back to the campaign
          home.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <CineButton onClick={reset}>Try again</CineButton>
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/65 transition-colors hover:text-plum-500"
          >
            Back to home →
          </Link>
        </div>
      </div>
    </section>
  )
}

ErrorBoundary.propTypes = {
  error: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
}

export default ErrorBoundary
