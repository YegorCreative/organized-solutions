"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Arrow } from "@/components/brand/arrow";
import { contactPage } from "@/content/copy";
import { company } from "@/content/site";
import { isContactDeliveryConfigured } from "@/lib/contact/config";
import {
  submitContact,
  validateContact,
  type ContactField,
  type ContactResult,
} from "@/lib/contact/submit";

type FormValues = {
  name: string;
  email: string;
  organization: string;
  seeing: string;
  gotcha: string;
};

const emptyValues: FormValues = {
  name: "",
  email: "",
  organization: "",
  seeing: "",
  gotcha: "",
};

export function ContactForm() {
  const deliveryReady = isContactDeliveryConfigured();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<ContactResult | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLParagraphElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const honeypotId = useId();

  useEffect(() => {
    if (result?.status === "success") {
      successHeadingRef.current?.focus();
      return;
    }
    if (result?.status === "error" || result?.status === "unconfigured") {
      errorRef.current?.focus();
      return;
    }
    if (result?.status === "invalid") {
      formRef.current
        ?.querySelector<HTMLElement>("[aria-invalid='true']")
        ?.focus();
    }
  }, [result]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) {
      return;
    }

    const invalid = validateContact(values);
    if (invalid) {
      setResult(invalid);
      return;
    }

    setPending(true);
    setResult(null);

    try {
      const next = await submitContact(values);
      setResult(next);
    } finally {
      setPending(false);
    }
  }

  if (result?.status === "success") {
    return (
      <div className="max-w-xl">
        <p
          ref={successHeadingRef}
          tabIndex={-1}
          className="display mt-0 text-title text-ink outline-none"
        >
          {contactPage.form.successTitle}
        </p>
        <p
          className="measure mt-5 text-lead text-muted"
          role="status"
          aria-live="polite"
        >
          {contactPage.form.success}
        </p>
        <button
          type="button"
          className="cta-header mt-10"
          onClick={() => {
            setValues(emptyValues);
            setResult(null);
          }}
        >
          {contactPage.form.another}
        </button>
      </div>
    );
  }

  const fieldErrors = result?.fieldErrors ?? {};
  const banner =
    result?.status === "error" || result?.status === "unconfigured"
      ? result.message
      : null;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="relative max-w-xl"
      noValidate
    >
      <p className="sr-only" role="status" aria-live="polite">
        {pending ? contactPage.form.sending : ""}
      </p>

      {!deliveryReady ? (
        <p className="measure mb-10 text-sm leading-relaxed text-muted">
          {contactPage.form.pendingChannel}
          {process.env.NODE_ENV === "development" ? (
            <span className="mt-3 block">
              Development: set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT in .env.local.
            </span>
          ) : null}
        </p>
      ) : null}

      <div
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={honeypotId}>Website</label>
        <input
          id={honeypotId}
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={values.gotcha}
          onChange={(event) =>
            setValues((current) => ({ ...current, gotcha: event.target.value }))
          }
        />
      </div>

      <Field
        id="name"
        name="name"
        label={contactPage.form.name}
        autoComplete="name"
        required
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
        required
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
          required
          aria-required="true"
          value={values.seeing}
          aria-describedby={
            fieldErrors.seeing ? "seeing-hint seeing-error" : "seeing-hint"
          }
          aria-invalid={Boolean(fieldErrors.seeing)}
          className="mt-4 w-full resize-y border-0 border-b border-line bg-transparent px-0 py-3 text-[1.0625rem] text-ink outline-none focus:border-accent"
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

      {banner ? (
        <div className="mt-8">
          <p
            ref={errorRef}
            tabIndex={-1}
            className="measure text-sm leading-relaxed text-ink outline-none"
            role="alert"
            aria-live="assertive"
          >
            {banner}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="nav-link mt-3 inline-block w-fit max-w-full break-all text-[0.9375rem] text-ink"
          >
            {company.email}
          </a>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="cta cta-primary mt-10 disabled:pointer-events-none disabled:opacity-60"
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
  required,
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
  required?: boolean;
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
        required={required}
        aria-required={required || undefined}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[1.0625rem] text-ink outline-none focus:border-accent"
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
