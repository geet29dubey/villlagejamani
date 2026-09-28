/**
 * Site-wide configuration. Values set to `null` are intentionally unconfigured:
 * the UI hides or gracefully replaces the feature until a value is supplied.
 */
export const siteConfig = {
  url: "https://villagejamani.com",
  name: { hi: "ग्राम जमानी", en: "Village Jamani" },
  tagline: {
    hi: "परंपरा, कला और मिट्टी की जीवित कहानी",
    en: "Where tradition, art and the earth tell stories.",
  },

  /**
   * WhatsApp number in international format without "+" or spaces, e.g. "919800000000".
   * When null, enquiry buttons open the contact form instead of WhatsApp.
   */
  whatsappNumber: null as string | null,

  /** Public enquiry email (optional). */
  contactEmail: null as string | null,

  /**
   * Google Maps (or OpenStreetMap) embed URL for the village area — never a private residence.
   * When null, a "view on map" link to a public place search is shown instead.
   */
  mapEmbedUrl: null as string | null,
  mapSearchUrl:
    "https://www.openstreetmap.org/search?query=Jamani%2C%20Itarsi%2C%20Madhya%20Pradesh",

  /**
   * Festival dates for the current year (ISO yyyy-mm-dd). The countdown and the Event
   * structured data only render when these are configured and in the future.
   */
  festival: {
    year: null as number | null,
    sthapana: null as string | null,
    anantChaturdashi: null as string | null,
    visarjan: null as string | null,
  },

  /**
   * Editorial mode shows internal verification flags and placeholder labels.
   * Enabled automatically in `next dev`, or explicitly with NEXT_PUBLIC_EDITORIAL_MODE=true
   * for preview deployments. Never enable on the production domain.
   */
  editorialMode:
    process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_EDITORIAL_MODE === "true",
} as const;

export function whatsappLink(message: string): string | null {
  if (!siteConfig.whatsappNumber) return null;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
