'use client'

import { useState } from 'react'
import PropTypes from 'prop-types'
import CineButton from '@/components/cine-button'

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * NewsletterForm — compact, single-field newsletter signup.
 *
 *   tone: "light" (used on paper backgrounds) | "dark" (plum sections)
 */
const NewsletterForm = ({ tone = 'light', buttonLabel = 'Subscribe' }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (!email.trim()) return setError('Required')
    if (!EMAIL_RX.test(email)) return setError('Invalid email')
    setError('')
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.3em] ${
          tone === 'dark' ? 'text-mint-300' : 'text-plum-500'
        }`}
      >
        You’re subscribed — see you Friday.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-start">
      <label className="relative block flex-1">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          aria-invalid={Boolean(error)}
          placeholder="you@example.com"
          className={`w-full rounded-full border px-5 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2 ${
            tone === 'dark'
              ? 'border-cream-100/20 bg-plum-900/60 text-cream-50 placeholder:text-cream-100/40 focus:border-mint-300 focus:ring-mint-300/20'
              : 'border-plum-500/20 bg-paper text-ink placeholder:text-ink/40 focus:border-plum-500 focus:ring-plum-500/20'
          }`}
        />
        {error && (
          <span className="absolute -bottom-5 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-plum-500">
            {error}
          </span>
        )}
      </label>
      <CineButton
        type="submit"
        onClick={() => {}}
        variant={tone === 'dark' ? 'on-dark' : 'primary'}
      >
        {submitting ? 'Subscribing…' : buttonLabel}
      </CineButton>
    </form>
  )
}

NewsletterForm.propTypes = {
  tone: PropTypes.oneOf(['light', 'dark']),
  buttonLabel: PropTypes.string,
}

export default NewsletterForm
