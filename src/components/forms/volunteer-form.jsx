'use client'

import { useState } from 'react'
import FormField from '@/components/form-field'
import CineButton from '@/components/cine-button'

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ROLES = [
  'Door knocking',
  'Phone banking',
  'Texting',
  'Host a meet-up',
  'Postcards from home',
  'Translate flyers',
  'Photography',
  'Logistics',
]

const HOURS = [
  '1–2 hours / week',
  '3–5 hours / week',
  '5–10 hours / week',
  '10+ hours / week',
  'One-off / event',
]

const VolunteerForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
    hours: HOURS[1],
    roles: new Set(),
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (k) => (e) => setData((p) => ({ ...p, [k]: e.target.value }))

  const toggleRole = (r) => {
    setData((p) => {
      const next = new Set(p.roles)
      next.has(r) ? next.delete(r) : next.add(r)
      return { ...p, roles: next }
    })
  }

  const validate = () => {
    const e = {}
    if (!data.firstName.trim()) e.firstName = 'Required'
    if (!data.lastName.trim()) e.lastName = 'Required'
    if (!data.email.trim()) e.email = 'Required'
    else if (!EMAIL_RX.test(data.email)) e.email = 'Invalid email'
    if (!data.zip.trim()) e.zip = 'Required'
    else if (!/^\d{5}$/.test(data.zip.trim())) e.zip = '5-digit ZIP'
    if (data.roles.size === 0) e.roles = 'Choose at least one'
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
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint-500">You’re in</p>
        <p className="mt-3 font-display text-2xl text-ink sm:text-3xl">Welcome to the team.</p>
        <p className="mt-2 text-sm text-ink/65">
          A field organizer will reach out within 48 hours to pair you with a shift that matches
          your week.
        </p>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        <FormField
          label="ZIP code"
          name="zip"
          required
          inputMode="numeric"
          maxLength={5}
          value={data.zip}
          onChange={onChange('zip')}
          error={errors.zip}
          autoComplete="postal-code"
          placeholder="97058"
        />
      </div>

      <FormField label="How much time can you give?" name="hours">
        <select
          id="hours"
          name="hours"
          value={data.hours}
          onChange={onChange('hours')}
          className="block w-full rounded-2xl border border-plum-500/15 bg-paper px-4 py-3 text-base text-ink transition-colors duration-300 focus:border-plum-500 focus:outline-none focus:ring-2 focus:ring-plum-500/20"
        >
          {HOURS.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>
      </FormField>

      <FormField label="How would you like to help?" name="roles" error={errors.roles}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {ROLES.map((r) => {
            const active = data.roles.has(r)
            return (
              <button
                key={r}
                type="button"
                onClick={() => toggleRole(r)}
                aria-pressed={active}
                className={`rounded-2xl border px-3 py-3 text-left text-sm transition-all duration-300 ${
                  active
                    ? 'border-plum-500 bg-plum-500/10 text-ink'
                    : 'border-plum-500/20 text-ink/75 hover:border-plum-500/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full transition-all ${
                      active ? 'bg-plum-500' : 'bg-plum-500/30'
                    }`}
                  />
                  {r}
                </span>
              </button>
            )
          })}
        </div>
      </FormField>

      <FormField
        label="Anything else?"
        name="notes"
        type="textarea"
        value={data.notes}
        onChange={onChange('notes')}
        placeholder="Languages spoken, accessibility needs, specific precincts — whatever you'd like us to know."
      />

      <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          By signing up you agree to be contacted about volunteer shifts.
        </p>
        <CineButton type="submit" onClick={() => {}}>
          {submitting ? 'Signing up…' : 'Sign me up'}
        </CineButton>
      </div>
    </form>
  )
}

export default VolunteerForm
