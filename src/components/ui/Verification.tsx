import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { VerificationStatus } from "@/content/types";
import { siteConfig } from "@/config/site";

const variant: Record<VerificationStatus, string> = {
  "verified-published": "badge--verified",
  "family-archive": "badge--family",
  "oral-history": "badge--oral",
  "awaiting-confirmation": "badge--awaiting",
};

const icon: Record<VerificationStatus, string> = {
  "verified-published": "✓",
  "family-archive": "▣",
  "oral-history": "❝",
  "awaiting-confirmation": "…",
};

/** Public verification label — text + symbol, so meaning never depends on colour alone. */
export function VerificationBadge({
  status,
  locale,
}: {
  status: VerificationStatus;
  locale: Locale;
}) {
  return (
    <span className={`badge ${variant[status]}`}>
      <span aria-hidden="true">{icon[status]}</span>
      {ui[status][locale]}
    </span>
  );
}

/**
 * Internal flag for details that need an external source before publication.
 * Renders only in editorial mode (dev / preview), never on production.
 */
export function EditorialFlag({ children }: { children: React.ReactNode }) {
  if (!siteConfig.editorialMode) return null;
  return <span className="editorial-flag">{children}</span>;
}

/** Internal editorial note block — editorial mode only. */
export function EditorialNote({ note }: { note?: string }) {
  if (!siteConfig.editorialMode || !note) return null;
  return (
    <div className="editorial-block" role="note">
      <strong>Editorial:</strong> {note}
    </div>
  );
}

/** Gentle public placeholder for a genuinely missing value. */
export function Pending({
  locale,
  kind = "beingDocumented",
}: {
  locale: Locale;
  kind?: "beingDocumented" | "dateBeingDocumented" | "yearBeingDocumented" | "beingIdentified";
}) {
  return <span className="pending">{ui[kind][locale]}</span>;
}
