import type { Locale } from "@/i18n/config";
import { festivalClaims } from "@/content/festival";
import { VerificationBadge, EditorialNote } from "@/components/ui/Verification";

/** Festival history, each point labelled with how it is known. */
export function FestivalClaims({ locale, ids }: { locale: Locale; ids?: string[] }) {
  const claims = ids ? festivalClaims.filter((c) => ids.includes(c.id)) : festivalClaims;
  return (
    <ul className="claims">
      {claims.map((c) => (
        <li key={c.id} className="claims__item">
          <span className="claims__dot" aria-hidden="true" />
          <div>
            <p className="claims__text">{c.text[locale]}</p>
            <VerificationBadge status={c.verificationStatus} locale={locale} />
            <EditorialNote note={c.editorialNotes} />
          </div>
        </li>
      ))}
    </ul>
  );
}
