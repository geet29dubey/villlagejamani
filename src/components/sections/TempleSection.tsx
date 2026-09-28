import type { Locale } from "@/i18n/config";
import { temple } from "@/content/temple";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerificationBadge, EditorialNote } from "@/components/ui/Verification";
import { PhotoSlot } from "@/components/ui/Placeholders";
import { Quote } from "@/components/ui/Quote";
import { ArchiveImage } from "@/components/ui/ArchiveImage";
import { WarliBand } from "@/components/brand/WarliBand";

/** Reverent Line & Earth treatment: geru and chuna, single-colour Warli. */
export function TempleSection({ locale, id = "temple" }: { locale: Locale; id?: string }) {
  const hi = locale === "hi";
  return (
    <section className="section section--chuna temple" id={id} aria-labelledby={`${id}-title`}>
      <div className="container two-col two-col--center">
        <div>
          <SectionHeading
            id={`${id}-title`}
            eyebrow={hi ? "आस्था का केंद्र" : "The spiritual centre"}
            title={temple.title[locale]}
          />
          <p className="temple__age">{temple.ageStatement[locale]}</p>
          <VerificationBadge status={temple.meta.verificationStatus} locale={locale} />
          <div className="prose" style={{ marginTop: "1rem" }}>
            <p>{temple.body[locale]}</p>
            {temple.architecture ? <p>{temple.architecture[locale]}</p> : null}
            <p className="temple__visit">
              <strong>{hi ? "दर्शन:" : "Visiting:"}</strong> {temple.visitNote[locale]}
            </p>
          </div>
          <EditorialNote note={temple.meta.editorialNotes} />
          {temple.citation ? (
            <p className="temple__citation">
              {hi ? "स्रोत: " : "Source: "}
              {temple.citation}
            </p>
          ) : null}
        </div>
        <div className="temple__panel">
          <div className="temple__frame">
            {temple.photos.length ? (
              <div className="media-frame">
                <ArchiveImage id={temple.photos[0].id} alt={temple.photos[0].alt[locale]} />
              </div>
            ) : (
              <PhotoSlot
                locale={locale}
                withPermission
                need="Temple exterior, sanctum (if permitted), architectural details"
              />
            )}
          </div>
          <WarliBand />
          <div style={{ marginTop: 20 }}>
            <Quote
              quote={temple.memory}
              locale={locale}
              tone="sand"
              placeholder={{
                hi: "मंदिर से जुड़ी पारिवारिक स्मृतियाँ यहाँ परिवार के अपने शब्दों में जोड़ी जाएँगी।",
                en: "Family memories of the temple will be added here, in the family's own words.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
