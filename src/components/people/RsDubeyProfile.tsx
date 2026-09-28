import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { rsDubey, rsDubeyLifespan } from "@/content/people";
import { formatDate } from "@/lib/festival-dates";
import { VerificationBadge, EditorialNote } from "@/components/ui/Verification";
import { PhotoSlot } from "@/components/ui/Placeholders";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { Quote } from "@/components/ui/Quote";

const tones = ["card--rani", "card--indigo", "card--genda"];

export function RsDubeyProfile({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  const years = rsDubeyLifespan();
  const born = formatDate(rsDubey.birthDate, locale);
  const died = formatDate(rsDubey.deathDate, locale);
  const hasMilestones = rsDubey.milestones.some((m) => m.title);
  return (
    <article
      className="profile profile--reverse card card--sand"
      id={rsDubey.id}
      aria-labelledby={`${rsDubey.id}-name`}
    >
      <div className="profile__portrait arch arch--mor">
        {rsDubey.portrait ? (
          <ArchiveImage
            id={rsDubey.portrait.id}
            alt={rsDubey.portrait.alt[locale]}
            sizes="(min-width: 900px) 30vw, 90vw"
          />
        ) : (
          <PhotoSlot
            locale={locale}
            withPermission
            need="Portrait of R. S. Dubey, from the family"
          />
        )}
      </div>
      <div className="profile__body">
        <span className="eyebrow">{rsDubey.kicker[locale]}</span>
        <h3 id={`${rsDubey.id}-name`} className="profile__name display" lang="hi">
          {rsDubey.name.hi}
        </h3>
        <p className="profile__sub">
          {rsDubey.fullName ? rsDubey.fullName[locale] : rsDubey.name.en}
          {" · "}
          {years ?? <span className="pending">{ui.dateBeingDocumented[locale]}</span>}
        </p>
        {born || died ? (
          <dl className="profile__dates">
            {born ? (
              <div>
                <dt>{hi ? "जन्म" : "Born"}</dt>
                <dd>
                  <time dateTime={rsDubey.birthDate!}>{born}</time>
                </dd>
              </div>
            ) : null}
            {died ? (
              <div>
                <dt>{hi ? "पुण्यतिथि" : "Death anniversary"}</dt>
                <dd>
                  <time dateTime={rsDubey.deathDate!}>{died}</time>
                </dd>
              </div>
            ) : null}
          </dl>
        ) : null}
        <p>{rsDubey.contribution[locale]}</p>
        {rsDubey.familyWords ? <p>{rsDubey.familyWords[locale]}</p> : null}
        <p>{rsDubey.ifyeRole[locale]}</p>
        <p>{rsDubey.culturalRole[locale]}</p>
        <VerificationBadge status={rsDubey.meta.verificationStatus} locale={locale} />

        <h4 className="profile__milestones-title">{hi ? "योगदान" : "Contributions"}</h4>
        {hasMilestones ? (
          <ul className="fact-chips">
            {rsDubey.milestones
              .filter((m) => m.title)
              .map((m, i) => (
                <li key={i} className={`fact-chip card ${tones[i % 3]}`}>
                  <span className="fact-chip__label">{m.title![locale]}</span>
                  <span className="fact-chip__value">
                    {m.year ?? ui.yearBeingDocumented[locale]}
                    {m.impact ? ` · ${m.impact[locale]}` : ""}
                  </span>
                </li>
              ))}
          </ul>
        ) : (
          <p className="pending">
            {hi
              ? "उनके योगदान के प्रमुख पड़ाव परिवार के शब्दों में दर्ज किए जा रहे हैं।"
              : "Milestones of his contribution are being recorded in the family's words."}
          </p>
        )}

        <Quote
          quote={rsDubey.remembrance}
          locale={locale}
          placeholder={{
            hi: "परिवार या गाँववासियों द्वारा साझा की गई उनकी कोई स्मृति यहाँ जोड़ी जाएगी।",
            en: "A memory of him, shared by the family or villagers, will be added here.",
          }}
        />
        <EditorialNote note={rsDubey.meta.editorialNotes} />
      </div>
    </article>
  );
}
