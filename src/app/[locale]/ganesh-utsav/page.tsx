import Link from "next/link";
import type { Metadata } from "next";
import { href } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { siteConfig } from "@/config/site";
import { formatDate, festivalDateLabel } from "@/lib/festival-dates";
import { festivalEventJsonLd, JsonLd } from "@/lib/structured-data";
import {
  festivalIntro,
  festivalSong,
  programme,
  performerInfo,
  visitorGuidance,
  birjuMaharajDay,
} from "@/content/festival";
import { artists, artistsIntro } from "@/content/artists";
import { gallery, galleryCategories } from "@/content/gallery";
import { galleryEntries } from "@/lib/archive-items";
import { TreeSun } from "@/components/brand/TreeSun";
import { Garland } from "@/components/brand/Garland";
import { WarliBand } from "@/components/brand/WarliBand";
import { FestivalMoments } from "@/components/sections/FestivalMoments";
import { FestivalClaims } from "@/components/sections/FestivalClaims";
import { TempleSection } from "@/components/sections/TempleSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "@/components/ui/Quote";
import { ArtworkPlaceholder, ContributeLink } from "@/components/ui/Placeholders";
import { ArtistCard } from "@/components/festival/ArtistCard";
import { Countdown } from "@/components/festival/Countdown";
import { GalleryGrid } from "@/components/archive/GalleryGrid";
import { EditorialNote, VerificationBadge } from "@/components/ui/Verification";
import { EnquiryButton } from "@/components/ui/EnquiryButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "ganesh-utsav",
    title: {
      hi: "जमानी का गणेश उत्सव — शास्त्रीय संगीत और कथक",
      en: "Jamani Ganesh Utsav — Classical Music & Kathak near Itarsi",
    },
    description: {
      hi: "दुबे परिवार द्वारा लगभग पाँच पीढ़ियों से मनाया जा रहा जमानी का गणेश उत्सव, जिसमें अनंत चतुर्दशी की रात शास्त्रीय संगीत और कथक का मुख्य कार्यक्रम होता है।",
      en: "Jamani's Ganesh Utsav, sustained by the Dubey family for about five generations, with a night of classical music and Kathak on Anant Chaturdashi.",
    },
  });
}

export default async function GaneshUtsavPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  const f = siteConfig.festival;
  const event = festivalEventJsonLd(locale);
  const archivePhotos = gallery.filter((g) => g.categories.includes("classical-music"));
  const categories = Object.entries(galleryCategories);
  const hasProgramme = programme.some((d) => d.items.length);

  return (
    <>
      {/* Hero — night indigo, marigold and rani */}
      <section
        className="page-hero page-hero--indigo section--indigo ground-dots"
        style={{ paddingTop: 0 }}
        aria-labelledby="gu-title"
      >
        <Garland tone="indigo" />
        <div className="container page-hero__grid" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}>
          <div>
            {f.anantChaturdashi ? (
              <Countdown
                targetIso={f.anantChaturdashi}
                locale={locale}
                label={festivalDateLabel(locale)}
              />
            ) : null}
            <span className="eyebrow">{hi ? "गणेश उत्सव · जमानी" : "Ganesh Utsav · Jamani"}</span>
            <h1 id="gu-title" lang="hi" className="gu-hero__title">
              {festivalIntro.title.hi}
            </h1>
            <p className="section-head__sub gu-hero__line">{festivalIntro.heroLine[locale]}</p>
            {hi ? null : (
              <p className="gu-hero__line-hi" lang="hi">
                {festivalIntro.heroLine.hi}
              </p>
            )}
            <p className="lede">{festivalIntro.summary[locale]}</p>
            <div className="btn-row btn-row--stack-mobile">
              <Link href="#artists" className="btn btn--genda">
                {hi ? "कलाकार और स्मृतियाँ" : "Artists and memories"}
              </Link>
              <Link href="#perform" className="btn btn--ghost-light">
                {hi ? "जमानी में प्रस्तुति दें" : "Perform at Jamani"}
              </Link>
            </div>
          </div>
          <div className="page-hero__art gu-hero__art" aria-hidden="true">
            <TreeSun variant="warli" />
          </div>
        </div>
      </section>
      <div className="gond-band gond-band--rani" aria-hidden="true" />

      {/* Introduction & family history */}
      <section className="section section--chuna" aria-labelledby="about-title">
        <div className="container two-col">
          <div>
            <SectionHeading
              id="about-title"
              eyebrow={hi ? "उत्सव के बारे में" : "About the festival"}
              title={hi ? "गणपति बप्पा मोरया" : "A continuing sadhana"}
            />
            <FestivalClaims locale={locale} />
            <p className="pending" style={{ marginTop: 16 }}>
              {festivalIntro.attribution[locale]}
            </p>
            <div style={{ marginTop: 24 }}>
              <Quote
                quote={festivalSong}
                locale={locale}
                tone="rani"
                placeholder={{
                  hi: "उत्सव में गाया जाने वाला कोई गीत या भजन, गाँव की ओर से साझा किया गया — शीघ्र यहाँ।",
                  en: "A festival song or bhajan, shared by the village — to be added here.",
                }}
              />
            </div>
          </div>
          <ArtworkPlaceholder
            locale={locale}
            subject={{
              hi: "गोंड चित्र: संगीतकारों के साथ जमानी से गुज़रती गणपति की सवारी",
              en: "Gond painting: Ganpati's procession through Jamani with the musicians",
            }}
          />
        </div>
      </section>

      {/* Three moments */}
      <section className="section section--indigo ground-dots" aria-labelledby="moments-title">
        <div className="container">
          <SectionHeading
            id="moments-title"
            eyebrow={hi ? "उत्सव के तीन पड़ाव" : "Three moments"}
            title={hi ? "स्थापना से विसर्जन तक" : "From Sthapana to Visarjan"}
          />
          <FestivalMoments locale={locale} />
        </div>
      </section>

      <TempleSection locale={locale} id="gu-temple" />

      {/* Artists */}
      <section
        className="section section--sand ground-dots"
        id="artists"
        aria-labelledby="artists-title"
      >
        <div className="container">
          <SectionHeading
            id="artists-title"
            eyebrow={hi ? "पीढ़ियों के कलाकार" : "Artists through the generations"}
            title={artistsIntro.title[locale]}
          />
          <div className="notice notice--genda artists-note" style={{ marginBottom: 28 }}>
            <span className="notice__icon" aria-hidden="true">
              ℹ
            </span>
            <p style={{ margin: 0 }}>{artistsIntro.note[locale]}</p>
          </div>
          <ul className="artist-grid grid grid--4" role="list">
            {artists.map((a, i) => (
              <ArtistCard key={a.id} artist={a} locale={locale} index={i} />
            ))}
          </ul>
          <p style={{ marginTop: 24 }}>
            <ContributeLink locale={locale} />
          </p>
        </div>
      </section>

      {/* 4 February */}
      <section
        className="section section--chuna section--tight"
        id="birju-maharaj"
        aria-labelledby="feb4-title"
      >
        <div className="container two-col two-col--center">
          <div>
            <span className="eyebrow">{hi ? "कथक" : "Kathak"}</span>
            <h2 id="feb4-title">{birjuMaharajDay.title[locale]}</h2>
            <p className="prose">{birjuMaharajDay.body[locale]}</p>
            {birjuMaharajDay.observance ? (
              <p className="prose">{birjuMaharajDay.observance[locale]}</p>
            ) : null}
            <VerificationBadge status={birjuMaharajDay.verificationStatus} locale={locale} />
            <EditorialNote note={birjuMaharajDay.editorialNotes} />
          </div>
          <div className="card card--rani card--stitched feb4-card">
            <p className="feb4-card__date display">4</p>
            <p className="feb4-card__month">{hi ? "फ़रवरी" : "February"}</p>
          </div>
        </div>
      </section>

      {/* Historic photographs */}
      <section className="section section--chuna" aria-labelledby="photos-title">
        <div className="container">
          <SectionHeading
            id="photos-title"
            eyebrow={hi ? "पुराने चित्र" : "Historic photographs"}
            title={hi ? "संगीत की पुरानी बैठकें" : "Music gatherings from the archive"}
            lede={
              hi
                ? "पारिवारिक अभिलेख के ये चित्र संगीत बैठकों के हैं; स्थान, वर्ष और कलाकारों की पहचान जारी है।"
                : "These family-archive photographs show music gatherings; the places, years and performers are still being identified."
            }
          />
          <GalleryGrid
            entries={galleryEntries(archivePhotos, locale)}
            categories={categories}
            locale={locale}
            showFilters={false}
          />
        </div>
      </section>

      {/* Programme */}
      <section className="section section--sand" id="programme" aria-labelledby="programme-title">
        <div className="container">
          <SectionHeading
            id="programme-title"
            eyebrow={hi ? "इस वर्ष" : "This year"}
            title={hi ? "उत्सव का कार्यक्रम" : "Festival programme"}
          />
          {hasProgramme ? (
            <div className="programme">
              {programme.map((day) => (
                <div key={day.day} className="card card--white programme__day">
                  <h3>{day.label[locale]}</h3>
                  <ul>
                    {day.items.map((it, i) => (
                      <li key={i}>
                        {it.time ? <span className="programme__time">{it.time}</span> : null}
                        {it.text[locale]}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="card card--white">
              <p style={{ margin: 0 }}>
                {hi
                  ? "इस वर्ष का कार्यक्रम घोषित होते ही यहाँ प्रकाशित किया जाएगा। गणेश उत्सव भाद्रपद मास में होता है और मुख्य संगीत व कथक कार्यक्रम अनंत चतुर्दशी की रात।"
                  : "This year's programme will be published here once announced. Ganesh Utsav falls in the month of Bhadrapada, with the principal music and Kathak programme on the night of Anant Chaturdashi."}
              </p>
              {f.anantChaturdashi ? (
                <p style={{ margin: "8px 0 0" }}>
                  <strong>{hi ? "अनंत चतुर्दशी:" : "Anant Chaturdashi:"}</strong>{" "}
                  {formatDate(f.anantChaturdashi, locale)}
                </p>
              ) : null}
            </div>
          )}
        </div>
      </section>

      <WarliBand />

      {/* Performers & visitors */}
      <section className="section section--chuna" aria-labelledby="perform-title">
        <div className="container grid grid--2">
          <div id="perform" className="card card--white">
            <span className="eyebrow">{hi ? "कलाकारों के लिए" : "For performers"}</span>
            <h2 id="perform-title" style={{ fontSize: "var(--step-2)" }}>
              {hi ? "जमानी में प्रस्तुति दें" : "Perform at Jamani"}
            </h2>
            {performerInfo.map((p, i) => (
              <p key={i}>{p[locale]}</p>
            ))}
            <EnquiryButton
              locale={locale}
              topic="Performing at Jamani Ganesh Utsav"
              label={hi ? "संपर्क करें" : "Get in touch"}
            />
          </div>
          <div id="visitors" className="card card--sand">
            <span className="eyebrow">{hi ? "अतिथियों के लिए" : "For visitors"}</span>
            <h2 style={{ fontSize: "var(--step-2)" }}>
              {hi ? "उत्सव में आने से पहले" : "Before you come"}
            </h2>
            <ul className="guidance-list">
              {visitorGuidance.map((g, i) => (
                <li key={i}>{g[locale]}</li>
              ))}
            </ul>
            <Link href={href(locale, "plan-your-visit")} className="text-link">
              {hi ? "यात्रा की योजना →" : "Plan your visit →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Archive submission */}
      <section className="section section--indigo section--tight" aria-labelledby="submit-title">
        <div className="container cta-banner">
          <div>
            <h2 id="submit-title" style={{ color: "var(--genda)" }}>
              {hi
                ? "क्या आपके पास उत्सव की कोई स्मृति है?"
                : "Do you have a memory of the festival?"}
            </h2>
            <p className="prose" style={{ color: "var(--sand)" }}>
              {hi
                ? "पुराने चित्र, कार्यक्रम-पत्रक, रिकॉर्डिंग या कहानियाँ — जमानी के उत्सव इतिहास को दर्ज करने में मदद करें।"
                : "Old photographs, programme leaflets, recordings or stories — help document the history of Jamani's festival."}
            </p>
            <Link href={href(locale, "contribute")} className="btn btn--genda">
              {hi ? "अभिलेख में योगदान दें" : "Contribute to the archive"}
            </Link>
          </div>
        </div>
      </section>
      {event ? <JsonLd data={event} /> : null}
    </>
  );
}
