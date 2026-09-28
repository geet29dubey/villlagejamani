import type { Locale } from "@/i18n/config";
import { parsai } from "@/content/people";
import { VerificationBadge, EditorialNote, EditorialFlag } from "@/components/ui/Verification";
import { PhotoSlot } from "@/components/ui/Placeholders";
import { ArchiveImage } from "@/components/ui/ArchiveImage";

export function ParsaiProfile({ locale }: { locale: Locale }) {
  const hi = locale === "hi";
  return (
    <article
      className="profile card card--white"
      id={parsai.id}
      aria-labelledby={`${parsai.id}-name`}
    >
      <div className="profile__portrait arch arch--rani">
        {parsai.portrait ? (
          <ArchiveImage
            id={parsai.portrait.id}
            alt={parsai.portrait.alt[locale]}
            sizes="(min-width: 900px) 30vw, 90vw"
          />
        ) : (
          <PhotoSlot
            locale={locale}
            withPermission
            need="Portrait of Harishankar Parsai from a lawful source / rights holder"
          />
        )}
      </div>
      <div className="profile__body">
        <span className="eyebrow">{parsai.kicker[locale]}</span>
        <h3 id={`${parsai.id}-name`} className="profile__name display" lang="hi">
          {parsai.name.hi}
        </h3>
        <p className="profile__sub">
          {parsai.name.en} · {parsai.lifespan}
        </p>
        <p>{parsai.summary[locale]}</p>

        <ul className="fact-chips">
          {parsai.facts.map((f, i) => (
            <li key={i} className={`fact-chip card ${i === 0 ? "card--indigo" : "card--mor"}`}>
              <span className="fact-chip__label">{f.label[locale]}</span>
              <span className="fact-chip__value">{f.value[locale]}</span>
              <EditorialNote note={f.editorialNotes} />
            </li>
          ))}
        </ul>
        <VerificationBadge status="verified-published" locale={locale} />

        <div className="profile__works">
          <h4>{hi ? "प्रमुख कृतियाँ" : "Notable works"}</h4>
          {parsai.notableWorks.length ? (
            <ul className="works-list">
              {parsai.notableWorks.map((w) => (
                <li key={w.title.en} className="work">
                  <details>
                    <summary>
                      <cite className="work__title">
                        {w.title.hi}
                        {locale === "en" ? <span lang="en"> · {w.title.en}</span> : null}
                      </cite>
                      {w.year ? <span className="work__year">{w.year[locale]}</span> : null}
                    </summary>
                    <p className="work__desc">{w.description[locale]}</p>
                  </details>
                </li>
              ))}
            </ul>
          ) : (
            <p className="pending">
              {hi
                ? "प्रमुख कृतियों की सूची सत्यापित स्रोतों के साथ तैयार की जा रही है।"
                : "A list of notable works is being prepared with verified sources."}
            </p>
          )}
        </div>
        {parsai.birthplaceNote ? <p>{parsai.birthplaceNote[locale]}</p> : null}
        <EditorialFlag>Birthplace/memorial in Jamani: add only if confirmed</EditorialFlag>
        <EditorialNote note={parsai.editorialNotes} />
      </div>
    </article>
  );
}
