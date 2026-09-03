"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/brand/arrow";
import { contactPage } from "@/content/copy";
import { isContactDeliveryConfigured } from "@/lib/contact/config";
import {
  submitContact,
  type ContactField,
  type ContactResult,
} from "@/lib/contact/submit";

type FormValues = {
  name: string;
  email: string;
  organization: string;
  seeing: string;
};

const emptyValues: FormValues = {
  name: "",
  email: "",
  organization: "",
  seeing: "",
};

export function ContactForm() {
  const deliveryReady = isContactDeliveryConfigured();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<ContactResult | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    try {
      const next = await submitContact(values);
      setResult(next);
    } finally {
      setPending(false);
    }
  }

  if (result?.status === "success") {
    return (
      <p className="measure text-lead text-ink" role="status">
        {result.message}
      </p>
    );
  }

  const fieldErrors = result?.fieldErrors ?? {};

  return (
    <form onSubmit={onSubmit} className="max-w-xl" noValidate>
      {!deliveryReady ? (
        <p className="measure mb-10 text-sm leading-relaxed text-muted">
          {contactPage.form.pendingChannel}
        </p>
      ) : null}

      <Field
        id="name"
        name="name"
        label={contactPage.form.name}
        autoComplete="name"
        value={values.name}
        error={fieldErrors.name}
        onChange={(value) => setValues((current) => ({ ...current, name: value }))}
      />
      <Field
        id="email"
        name="email"
        label={contactPage.form.email}
        type="email"
        autoComplete="email"
        value={values.email}
        error={fieldErrors.email}
        onChange={(value) => setValues((current) => ({ ...current, email: value }))}
      />
      <Field
        id="organization"
        name="organization"
        label={contactPage.form.organization}
        hint={contactPage.form.organizationOptional}
        autoComplete="organization"
        value={values.organization}
        onChange={(value) =>
          setValues((current) => ({ ...current, organization: value }))
        }
      />
      <div className="mt-10">
        <label htmlFor="seeing" className="kicker block">
          {contactPage.form.seeing}
        </label>
        <p id="seeing-hint" className="mt-2 text-sm text-faint">
          {contactPage.form.seeingHint}
        </p>
        <textarea
          id="seeing"
          name="seeing"
          rows={6}
          value={values.seeing}
          aria-describedby={
            fieldErrors.seeing ? "seeing-hint seeing-error" : "seeing-hint"
          }
          aria-invalid={Boolean(fieldErrors.seeing)}
          className="mt-4 w-full resize-y border-0 border-b border-line bg-transparent px-0 py-3 text-[1.0625rem] text-ink outline-none focus:border-ink"
          onChange={(event) =>
            setValues((current) => ({ ...current, seeing: event.target.value }))
          }
        />
        {fieldErrors.seeing ? (
          <p id="seeing-error" className="mt-2 text-sm text-ink" role="alert">
            {fieldErrors.seeing}
          </p>
        ) : null}
      </div>

      {result?.message ? (
        <p className="measure mt-8 text-sm leading-relaxed text-muted" role="status">
          {result.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="cta cta-primary mt-10 disabled:opacity-60"
      >
        <span>{pending ? contactPage.form.sending : contactPage.form.submit}</span>
        <Arrow className="cta-arrow" />
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  hint,
  type = "text",
  autoComplete,
  value,
  error,
  onChange,
}: {
  id: string;
  name: ContactField | "organization";
  label: string;
  hint?: string;
  type?: string;
  autoComplete?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-8 first:mt-0">
      <label htmlFor={id} className="kicker flex items-baseline justify-between gap-4">
        <span>{label}</span>
        {hint ? (
          <span className="normal-case tracking-normal text-faint">{hint}</span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[1.0625rem] text-ink outline-none focus:border-ink"
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-ink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
