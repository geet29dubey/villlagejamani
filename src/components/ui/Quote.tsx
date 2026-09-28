import type { Locale } from "@/i18n/config";
import type { Bilingual, SourceMeta } from "@/content/types";
import { VerificationBadge, EditorialNote } from "./Verification";
import { ContributeLink } from "./Placeholders";

export interface QuoteRecord extends SourceMeta {
  /** Exact words as recorded. Null until a real quotation is recorded — never invented. */
  text: Bilingual | null;
  /** Language the quotation was originally spoken/written in. */
  originalLanguage?: "hi" | "en" | "other";
  speaker: Bilingual | null;
}

/**
 * A saying or remembered memory, set in Tiro Devanagari. When no real
 * quotation has been recorded, shows an invitation instead of a fabricated quote.
 */
export function Quote({
  quote,
  locale,
  placeholder,
  tone = "chuna",
}: {
  quote: QuoteRecord;
  locale: Locale;
  placeholder: Bilingual;
  tone?: "chuna" | "rani" | "sand";
}) {
  const toneClass = tone === "rani" ? "card--rani" : tone === "sand" ? "card--sand" : "card--white";
  if (!quote.text) {
    return (
      <div className={`card ${toneClass} quote-placeholder`}>
        <span className="quote-placeholder__mark" aria-hidden="true">
          “
        </span>
        <p className="quote-placeholder__text">{placeholder[locale]}</p>
        <ContributeLink
          locale={locale}
          className={tone === "rani" ? "text-link on-dark-link" : undefined}
        />
        <EditorialNote note={quote.editorialNotes} />
      </div>
    );
  }
  return (
    <figure className={`card ${toneClass} saying-card`} style={{ margin: 0 }}>
      <blockquote
        className="saying"
        lang={quote.originalLanguage === "hi" ? "hi" : undefined}
        style={{ margin: 0 }}
      >
        “{quote.text[locale]}”
      </blockquote>
      <figcaption>
        {quote.speaker ? <span>— {quote.speaker[locale]} </span> : null}
        <VerificationBadge status={quote.verificationStatus} locale={locale} />
      </figcaption>
    </figure>
  );
}
