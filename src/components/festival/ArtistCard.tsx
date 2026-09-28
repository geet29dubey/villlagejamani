import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { ArtistRecord } from "@/content/artists";
import { VerificationBadge, EditorialNote } from "@/components/ui/Verification";
import { ArchiveImage } from "@/components/ui/ArchiveImage";

const tones = ["rani", "indigo", "mor", "genda"] as const;

function Initials({ name }: { name: string }) {
  const letters = name
    .replace(/^(Pandit|Ustad)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className="artist-card__initials" aria-hidden="true">
      {letters}
    </span>
  );
}

export function ArtistCard({
  artist,
  locale,
  index,
}: {
  artist: ArtistRecord;
  locale: Locale;
  index: number;
}) {
  const tone = tones[index % tones.length];
  return (
    <li className={`artist-card card card--white`}>
      <div className={`artist-card__media artist-card__media--${tone}`}>
        {artist.photo ? (
          <ArchiveImage
            id={artist.photo.id}
            alt={artist.photo.alt[locale]}
            sizes="(min-width:1024px) 25vw, 50vw"
          />
        ) : (
          <Initials name={artist.name.en} />
        )}
      </div>
      <h3 className="artist-card__name">{artist.name[locale]}</h3>
      {artist.knownAs ? (
        <p className="artist-card__aka">
          {locale === "hi" ? "जिन्हें " : "Known as "}
          {artist.knownAs[locale]}
          {locale === "hi" ? " के नाम से जाना जाता है" : ""}
        </p>
      ) : null}
      <dl className="meta-list">
        <div>
          <dt>{locale === "hi" ? "कला" : "Art form"}</dt>
          <dd>
            {artist.artForm ? (
              artist.artForm[locale]
            ) : (
              <span className="pending">{ui.beingDocumented[locale]}</span>
            )}
          </dd>
        </div>
        <div>
          <dt>{locale === "hi" ? "शहर / घराना" : "City / gharana"}</dt>
          <dd>
            {artist.cityOrGharana ? (
              artist.cityOrGharana[locale]
            ) : (
              <span className="pending">{ui.beingDocumented[locale]}</span>
            )}
          </dd>
        </div>
        <div>
          <dt>{locale === "hi" ? "जमानी में" : "In Jamani"}</dt>
          <dd>
            {artist.performanceYear ?? (
              <span className="pending">{ui.yearBeingDocumented[locale]}</span>
            )}
          </dd>
        </div>
        <div>
          <dt>{ui.source[locale]}</dt>
          <dd>
            {locale === "hi" ? "दुबे परिवार — उत्सव अभिलेख और मौखिक इतिहास" : artist.sourceName}
          </dd>
        </div>
      </dl>
      {artist.familyAccount ? (
        <p className="artist-card__account">{artist.familyAccount[locale]}</p>
      ) : null}
      <VerificationBadge status={artist.verificationStatus} locale={locale} />
      <EditorialNote note={artist.editorialNotes} />
    </li>
  );
}
