/**
 * Isolated contact-delivery configuration.
 *
 * This site is statically hosted on GitHub Pages. There is no
 * runtime server, so a note can only be delivered through an
 * external static-compatible form service.
 *
 * Do not choose or integrate a third-party provider without
 * explicit owner approval. Until then, leave the endpoint empty.
 */
export function getContactEndpoint() {
  return process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ?? "";
}

export function isContactDeliveryConfigured() {
  return getContactEndpoint().length > 0;
}
