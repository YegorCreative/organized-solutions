import { contactPage } from "@/content/copy";
import { getContactEndpoint } from "@/lib/contact/config";

/**
 * Isolated contact-action implementation.
 *
 * This is the only module that should know how a note is delivered.
 * When an owner-approved static-compatible service is chosen, adapt
 * the request here. Do not add a Next.js server action or API route.
 */

export type ContactPayload = {
  name: string;
  email: string;
  organization: string;
  seeing: string;
};

export type ContactField = "name" | "email" | "seeing";

export type ContactResult = {
  status: "success" | "error" | "unconfigured" | "invalid";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
};

export function validateContact(payload: ContactPayload): ContactResult | null {
  const fieldErrors: ContactResult["fieldErrors"] = {};

  if (payload.name.trim().length < 2) {
    fieldErrors.name = "Please include your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
    fieldErrors.email = "Please include a valid email.";
  }

  if (payload.seeing.trim().length < 10) {
    fieldErrors.seeing =
      "A few sentences will help us understand what you’re seeing.";
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

  const endpoint = getContactEndpoint();
  if (!endpoint) {
    return {
      status: "unconfigured",
      message: contactPage.form.unconfigured,
      fieldErrors: {},
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        organization: payload.organization.trim(),
        seeing: payload.seeing.trim(),
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
