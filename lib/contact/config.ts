/**
 * Isolated contact-delivery configuration.
 *
 * GitHub Pages has no runtime server. Delivery is a browser POST
 * to an owner-created Formspree form:
 * https://formspree.io/f/{form_id}
 *
 * Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT. Do not hardcode a form ID.
 */

export const CONTACT_NOTIFICATION_SUBJECT =
  "New Organized Solutions Website Inquiry";

export function getContactEndpoint() {
  const raw = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ?? "";
  if (!raw) {
    return "";
  }

  try {
    const url = new URL(raw);
    const isFormspree =
      url.protocol === "https:" &&
      url.hostname === "formspree.io" &&
      url.pathname.startsWith("/f/") &&
      url.pathname.replace(/\/$/, "").length > 3;

    return isFormspree ? `${url.origin}${url.pathname.replace(/\/$/, "")}` : "";
  } catch {
    return "";
  }
}

export function isContactDeliveryConfigured() {
  return getContactEndpoint().length > 0;
}
