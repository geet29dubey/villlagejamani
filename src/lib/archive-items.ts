import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { getImage } from "@/components/ui/ArchiveImage";
import type { ArchiveEntry, ArchiveThumb } from "@/components/archive/ArchiveViewer";
import type { ArchiveDocument } from "@/content/ifye";
import type { GalleryPhoto } from "@/content/gallery";
import { galleryCategories } from "@/content/gallery";

export function thumbFor(imageId: string | null): ArchiveThumb | null {
  if (!imageId) return null;
  const img = getImage(imageId);
  if (!img) return null;
  const mid = img.variants.find((v) => v.width >= 480) ?? img.variants[0];
  return {
    src: mid.src,
    srcSet: img.variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    width: img.width,
    height: img.height,
    blur: img.blur,
  };
}

function full(imageId: string | null) {
  if (!imageId) return { src: null };
  const img = getImage(imageId);
  if (!img) return { src: null };
  const v = img.variants[img.variants.length - 1];
  return { src: v.src, width: img.width, height: img.height };
}

export function ifyeEntries(docs: ArchiveDocument[], locale: Locale): ArchiveEntry[] {
  const hi = locale === "hi";
  return docs.map((doc) => {
    const transcription = doc.transcription
      ? [
          ...(doc.transcription.printed.length
            ? [{ heading: hi ? "छपा हुआ पाठ" : "Printed text", lines: doc.transcription.printed }]
            : []),
          ...(doc.transcription.handwritten && doc.transcription.handwritten.length === 0
            ? []
            : [
                {
                  heading: hi ? "हस्तलिखित" : "Handwritten",
                  lines: doc.transcription.handwritten ?? [
                    hi
                      ? "प्रतिलेखन जारी — केवल स्पष्ट पढ़ा जा सकने वाला पाठ लिखा जाएगा; अस्पष्ट अंश [illegible] से चिह्नित होंगे।"
                      : "Transcription in progress — only clearly legible text will be transcribed; uncertain passages will be marked [illegible].",
                  ],
                },
              ]),
        ]
      : [
          {
            heading: hi ? "प्रतिलेख" : "Transcription",
            lines: [
              hi ? "स्कैन से प्रतिलेखन जारी है।" : "Transcription from the scan is in progress.",
            ],
          },
        ];
    return {
      subtitle: `${doc.person} · ${doc.approximateDate}`,
      thumb: thumbFor(doc.imageId),
      item: {
        key: doc.id,
        ...full(doc.imageId),
        alt: doc.alt[locale],
        title: doc.title[locale],
        caption: doc.caption[locale],
        meta: [
          { label: ui.source[locale], value: doc.sourceName ?? "—" },
          { label: ui.approxDate[locale], value: doc.approximateDate },
          { label: ui.documentType[locale], value: doc.documentType[locale] },
          { label: ui.contributor[locale], value: doc.person },
        ],
        transcription,
      },
    };
  });
}

export function galleryEntries(
  photos: GalleryPhoto[],
  locale: Locale,
): (ArchiveEntry & { categories: string[] })[] {
  return photos.map((p) => ({
    categories: p.categories,
    subtitle: p.categories.map((c) => galleryCategories[c][locale]).join(" · "),
    thumb: thumbFor(p.imageId),
    item: {
      key: p.id,
      ...full(p.imageId),
      alt: p.alt[locale],
      title: p.categories.map((c) => galleryCategories[c][locale]).join(" · "),
      caption: p.caption[locale],
      meta: [
        {
          label: ui.approxDate[locale],
          value: p.approximateDate ?? ui.dateBeingDocumented[locale],
        },
        {
          label: ui.photographer[locale],
          value: p.photographer?.[locale] ?? p.sourceName ?? ui.unknown[locale],
        },
        { label: ui.usage[locale], value: p.usagePermission[locale] },
        {
          label: ui.peoplePictured[locale],
          value: p.peoplePictured?.[locale] ?? ui.beingIdentified[locale],
        },
      ],
      transcription: p.transcription
        ? [
            {
              heading: locale === "hi" ? "चित्र में लिखा पाठ" : "Text visible in the photograph",
              lines: p.transcription,
            },
          ]
        : null,
    },
  }));
}
