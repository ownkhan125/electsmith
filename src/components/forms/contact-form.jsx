"use client";

import { useState } from "react";
import FormField from "@/components/form-field";
import CineButton from "@/components/cine-button";

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TOPICS = [
  "General inquiry",
  "Press request",
  "Volunteer follow-up",
  "Endorsement",
  "Policy question",
  "Other",
];

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: TOPICS[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k) => (e) =>
    setData((p) => ({ ...p, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!data.firstName.trim()) e.firstName = "Required";
    if (!data.lastName.trim()) e.lastName = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!EMAIL_RX.test(data.email)) e.email = "Invalid email";
    if (!data.message.trim()) e.message = "Required";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    // Demo only — wire to API route in production
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-mint-300/40 bg-mint-300/10 p-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint-500">
          Message received
        </p>
        <p className="mt-3 font-display text-2xl text-ink sm:text-3xl">
          Thank you — we’ll be in touch.
        </p>
        <p className="mt-2 text-sm text-ink/65">
          A member of the campaign team will respond within two business days.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="First name"
          name="firstName"
          required
          value={data.firstName}
          onChange={onChange("firstName")}
          error={errors.firstName}
          autoComplete="given-name"
        />
        <FormField
          label="Last name"
          name="lastName"
          required
          value={data.lastName}
          onChange={onChange("lastName")}
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
        onChange={onChange("email")}
        error={errors.email}
        autoComplete="email"
        placeholder="you@example.com"
      />
      <FormField
        label="What's this about?"
        name="topic"
        type="select"
        value={data.topic}
        onChange={onChange("topic")}
      >
        <select
          id="topic"
          name="topic"
          value={data.topic}
          onChange={onChange("topic")}
          className="block w-full rounded-2xl border border-plum-500/15 bg-paper px-4 py-3 text-base text-ink transition-colors duration-300 focus:border-plum-500 focus:outline-none focus:ring-2 focus:ring-plum-500/20"
        >
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </FormField>
      <FormField
        label="Message"
        name="message"
        type="textarea"
        required
        value={data.message}
        onChange={onChange("message")}
        error={errors.message}
        placeholder="Tell us what's on your mind."
      />

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          We respond within 2 business days
        </p>
        <CineButton type="submit" onClick={() => {}}>
          {submitting ? "Sending…" : "Send message"}
        </CineButton>
      </div>
    </form>
  );
};

export default ContactForm;
