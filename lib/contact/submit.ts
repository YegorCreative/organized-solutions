import { contactPage } from "@/content/copy";
import {
  CONTACT_NOTIFICATION_SUBJECT,
  getContactEndpoint,
} from "@/lib/contact/config";

/**
 * Isolated contact-action implementation.
 *
 * Browser POST to Formspree. No Next.js server action or API route.
 */

export type ContactPayload = {
  name: string;
  email: string;
  organization: string;
  seeing: string;
  gotcha?: string;
};

export type ContactField = "name" | "email" | "seeing";

export type ContactResult = {
  status: "success" | "error" | "unconfigured" | "invalid";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
};

export function validateContact(payload: ContactPayload): ContactResult | null {
  const fieldErrors: ContactResult["fieldErrors"] = {};

  if (payload.name.trim().length < 1) {
    fieldErrors.name = contactPage.form.errors.name;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
    fieldErrors.email = contactPage.form.errors.email;
  }

  if (payload.seeing.trim().length < 1) {
    fieldErrors.seeing = contactPage.form.errors.seeing;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "invalid",
      message: "",
      fieldErrors,
    };
  }

  return null;
}

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  const invalid = validateContact(payload);
  if (invalid) {
    return invalid;
  }

  if (payload.gotcha?.trim()) {
    return {
      status: "success",
      message: contactPage.form.success,
      fieldErrors: {},
    };
  }

  const endpoint = getContactEndpoint();
  if (!endpoint) {
    return {
      status: "unconfigured",
      message: contactPage.form.unconfigured,
      fieldErrors: {},
    };
  }

  const email = payload.email.trim();
  const organization = payload.organization.trim();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email,
        _replyto: email,
        ...(organization ? { organization } : {}),
        message: payload.seeing.trim(),
        subject: CONTACT_NOTIFICATION_SUBJECT,
        _subject: CONTACT_NOTIFICATION_SUBJECT,
        _gotcha: payload.gotcha ?? "",
      }),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: contactPage.form.error,
        fieldErrors: {},
      };
    }

    return {
      status: "success",
      message: contactPage.form.success,
      fieldErrors: {},
    };
  } catch {
    return {
      status: "error",
      message: contactPage.form.error,
      fieldErrors: {},
    };
  }
}
