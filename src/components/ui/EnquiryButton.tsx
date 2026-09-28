import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { href } from "@/i18n/routes";
import { whatsappLink } from "@/config/site";

/**
 * WhatsApp enquiry. If no WhatsApp number is configured yet, links to the contact
 * form with the topic pre-selected, so the button always works.
 */
export function EnquiryButton({
  locale,
  topic,
  label,
  variant = "primary",
}: {
  locale: Locale;
  topic: string;
  label?: string;
  variant?: "primary" | "secondary" | "genda";
}) {
  const message =
    locale === "hi"
      ? `नमस्ते! मैं villagejamani.com से "${topic}" के बारे में जानकारी चाहता/चाहती हूँ।`
      : `Hello! I'd like to know more about "${topic}" (via villagejamani.com).`;
  const wa = whatsappLink(message);
  const text = label ?? ui.enquireWhatsApp[locale];
  const cls = `btn btn--${variant} btn--sm`;
  if (wa) {
    return (
      <a className={cls} href={wa} target="_blank" rel="noopener noreferrer">
        {text}
        <span className="visually-hidden">
          {" "}
          ({locale === "hi" ? "नई विंडो में" : "opens WhatsApp in a new tab"})
        </span>
      </a>
    );
  }
  return (
    <Link
      className={cls}
      href={`${href(locale, "plan-your-visit")}?topic=${encodeURIComponent(topic)}#contact`}
    >
      {label ?? ui.enquire[locale]}
    </Link>
  );
}
