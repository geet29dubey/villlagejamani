import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { href } from "@/i18n/routes";
import { siteConfig } from "@/config/site";

function CameraIcon() {
  return (
    <svg
      className="photo-slot__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

/**
 * Shown where a photograph is genuinely missing. Production shows a tasteful
 * invitation; editorial mode also shows what is needed.
 */
export function PhotoSlot({
  locale,
  need,
  light = false,
  withPermission = false,
}: {
  locale: Locale;
  /** Internal description of the photograph needed (editorial mode only). */
  need?: string;
  light?: boolean;
  withPermission?: boolean;
}) {
  return (
    <div className={`photo-slot${light ? " photo-slot--light" : ""}`}>
      <div style={{ display: "grid", justifyItems: "center", gap: 8 }}>
        <CameraIcon />
        <p className="photo-slot__text" style={{ margin: 0 }}>
          {withPermission ? ui.photoWithPermission[locale] : ui.photoToCome[locale]}
        </p>
        {siteConfig.editorialMode && need ? (
          <span className="editorial-flag">Needed: {need}</span>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Placeholder for commissioned Gond artwork. The brand book requires the final art
 * to be painted by a Gond artist and credited — this deliberately does not imitate it.
 */
export function ArtworkPlaceholder({
  locale,
  subject,
  className,
}: {
  locale: Locale;
  subject: { hi: string; en: string };
  className?: string;
}) {
  return (
    <figure
      className={["artwork-placeholder", className].filter(Boolean).join(" ")}
      style={{ margin: 0 }}
    >
      <div className="artwork-placeholder__inner">
        <span className="pill pill--genda">
          {locale === "hi" ? "कमीशन की गई गोंड कलाकृति" : "Commissioned Gond artwork"}
        </span>
        <figcaption className="artwork-placeholder__label">{subject[locale]}</figcaption>
        <span className="artwork-placeholder__credit">
          {locale === "hi"
            ? "यह स्थान एक गोंड कलाकार की मूल कृति के लिए आरक्षित है। कलाकार का नाम यहाँ श्रेय सहित दिया जाएगा।"
            : "Reserved for an original painting by a Gond artist, who will be credited here by name."}
        </span>
      </div>
    </figure>
  );
}

export function ContributeLink({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <Link href={href(locale, "contribute")} className={className ?? "text-link"}>
      {ui.contributeMemory[locale]} →
    </Link>
  );
}
