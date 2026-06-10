'use client'

import { useState } from 'react'
import PropTypes from 'prop-types'
import FormField from '@/components/form-field'
import CineButton from '@/components/cine-button'

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RsvpForm = ({ eventTitle, tone = 'light' }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    guests: '1',
    accommodations: '',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (k) => (e) => setData((p) => ({ ...p, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!data.firstName.trim()) e.firstName = 'Required'
    if (!data.lastName.trim()) e.lastName = 'Required'
    if (!data.email.trim()) e.email = 'Required'
    else if (!EMAIL_RX.test(data.email)) e.email = 'Invalid email'
    return e
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-mint-300/40 bg-mint-300/10 p-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint-500">
          You’re on the list
        </p>
        <p className="mt-3 font-display text-2xl text-ink sm:text-3xl">
          See you {eventTitle ? `at ${eventTitle.toLowerCase()}` : 'soon'}.
        </p>
        <p className="mt-2 text-sm text-ink/65">
          A confirmation email is on its way with directions and accessibility notes.
        </p>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          label="First name"
          name="firstName"
          required
          value={data.firstName}
          onChange={onChange('firstName')}
          error={errors.firstName}
          autoComplete="given-name"
        />
        <FormField
          label="Last name"
          name="lastName"
          required
          value={data.lastName}
          onChange={onChange('lastName')}
          error={errors.lastName}
          autoComplete="family-name"
        />
      </div>
      <FormField
        label="Email"
        name="email"
        type="email"
        required
        value={data.email}
        onChange={onChange('email')}
        error={errors.email}
        autoComplete="email"
        placeholder="you@example.com"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          label="How many seats?"
          name="guests"
          type="number"
          min={1}
          max={6}
          value={data.guests}
          onChange={onChange('guests')}
        />
        <FormField
          label="Accommodations"
          name="accommodations"
          value={data.accommodations}
          onChange={onChange('accommodations')}
          placeholder="ASL, childcare, wheelchair…"
          hint="Optional — we'll do our best to accommodate"
        />
      </div>
      <FormField
        label="A question for Jordan?"
        name="notes"
        type="textarea"
        value={data.notes}
        onChange={onChange('notes')}
        placeholder="Optional — we'll do our best to answer at the event."
      />
      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          Free · open to all
        </p>
        <CineButton type="submit" onClick={() => {}}>
          {submitting ? 'Reserving…' : 'Reserve my seat'}
        </CineButton>
      </div>
    </form>
  )
}

RsvpForm.propTypes = {
  eventTitle: PropTypes.string,
  tone: PropTypes.oneOf(['light', 'dark']),
}

export default RsvpForm
