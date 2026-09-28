import type { Bilingual, ImageRights, SourceMeta } from "./types";
import type { QuoteRecord } from "@/components/ui/Quote";

export interface Fact extends SourceMeta {
  label: Bilingual;
  value: Bilingual;
}

export const parsai = {
  id: "harishankar-parsai",
  kicker: { hi: "जमानी में जन्मे", en: "Born in Jamani" },
  name: { hi: "हरिशंकर परसाई", en: "Harishankar Parsai" },
  lifespan: "1924–1995",
  birthDateIso: "1924-08-22",
  deathYear: "1995",
  summary: {
    hi: "हिंदी के प्रसिद्ध व्यंग्यकार और लेखक हरिशंकर परसाई का जन्म 22 अगस्त 1924 को जमानी में हुआ। उनके व्यंग्य और निबंध आज भी व्यापक रूप से पढ़े जाते हैं।",
    en: "The celebrated Hindi satirist and writer Harishankar Parsai was born in Jamani on 22 August 1924. His satire and essays continue to be widely read.",
  },
  facts: [
    {
      label: { hi: "1924", en: "1924" },
      value: { hi: "22 अगस्त को जमानी में जन्म", en: "Born in Jamani on 22 August" },
      sourceType: "published-source",
      sourceName: "Published biographies of Harishankar Parsai",
      sourceDate: null,
      verificationStatus: "verified-published",
      imageRights: "not-applicable",
      editorialNotes: "Add specific citation on Sources page.",
    },
    {
      label: { hi: "साहित्य अकादमी", en: "Sahitya Akademi" },
      value: {
        hi: "1982 में ‘विकलांग श्रद्धा का दौर’ के लिए साहित्य अकादमी पुरस्कार",
        en: "Sahitya Akademi Award, 1982, for ‘Viklang Shraddha Ka Daur’",
      },
      sourceType: "published-source",
      sourceName: "Sahitya Akademi awards list",
      sourceDate: "1982",
      verificationStatus: "verified-published",
      imageRights: "not-applicable",
      editorialNotes: "Add a link to Sahitya Akademi's awards list on the Sources page.",
    },
  ] satisfies Fact[],
  /** Notable works (supplied by the project team). */
  notableWorks: [
    {
      title: { hi: "विकलांग श्रद्धा का दौर", en: "Viklang Shraddha Ka Daur" },
      year: { hi: "1982 साहित्य अकादमी पुरस्कार", en: "1982 Sahitya Akademi Award" },
      description: {
        hi: "व्यंग्य निबंधों का प्रमुख संग्रह, जिसे 1982 में प्रतिष्ठित साहित्य अकादमी पुरस्कार मिला; सार्वजनिक जीवन के अवसरवाद और नैतिक पतन पर प्रहार।",
        en: "A premier satirical essay collection that won the prestigious Sahitya Akademi Award in 1982, targeting opportunism and moral decay in public life.",
      },
    },
    {
      title: { hi: "निठल्ले की डायरी", en: "Nithalle Ki Diary" },
      year: null,
      description: {
        hi: "चुटीले व्यंग्यों का लोकप्रिय संग्रह, जो एक निठल्ले पर्यवेक्षक की नज़र से समाज के आलसी, पाखंडी और भ्रष्ट वर्गों का मज़ाक उड़ाता है।",
        en: "A popular collection of witty satires that mock the idle, hypocritical and corrupt segments of society through the lens of a lazy observer.",
      },
    },
    {
      title: { hi: "प्रेमचंद के फटे जूते", en: "Premchand Ke Phate Joote" },
      year: null,
      description: {
        hi: "बहुपठित व्यंग्य निबंध (अक्सर स्कूली पाठ्यक्रम में शामिल), जो महान हिंदी उपन्यासकार मुंशी प्रेमचंद के माध्यम से ईमानदारी और भौतिक सफलता के बीच के गहरे अंतर को परखता है।",
        en: "A widely read satirical essay, often included in school curricula, examining the stark contrast between integrity and material success through the iconic Hindi novelist Munshi Premchand.",
      },
    },
    {
      title: { hi: "भेड़ और भेड़िए", en: "Bhed Aur Bhediye" },
      year: null,
      description: {
        hi: "एक सशक्त रूपक-कथा, जो दिखाती है कि राजनीतिक व्यवस्थाएँ किस तरह भोले-भाले लोगों को बहकाती और उनका शोषण करती हैं।",
        en: "A brilliant allegorical tale exposing how political systems manipulate and exploit the innocent.",
      },
    },
    {
      title: { hi: "ठिठुरता हुआ गणतंत्र", en: "Thithurta Hua Gantantra" },
      year: null,
      description: {
        hi: "स्वतंत्रता के बाद के भारतीय लोकतंत्र और खोखले राजनीतिक वादों की तीखी आलोचना।",
        en: "A scathing critique of post-independence Indian democracy and hollow political promises.",
      },
    },
  ] as { title: Bilingual; year: Bilingual | null; description: Bilingual }[],
  /** Birthplace or memorial in Jamani — only if confirmed. */
  birthplaceNote: null as Bilingual | null,
  portrait: {
    id: "parsai-portrait",
    alt: {
      hi: "हरिशंकर परसाई का श्वेत-श्याम चित्र — सफ़ेद बाल, चिंतनशील दृष्टि",
      en: "Black-and-white portrait of Harishankar Parsai — grey hair swept back, a thoughtful gaze",
    },
  } as { id: string; alt: Bilingual } | null,
  /** Source of the portrait as used on this site. */
  portraitCredit: {
    label: { hi: "चित्र: द एशियन एज", en: "Image: The Asian Age" },
    url: "https://www.asianage.com/life/more-features/290619/in-pursuit-of-parsai.html",
  } as { label: Bilingual; url: string } | null,
  /** Newspaper image: publication permission from The Asian Age (or the photographer) still to be obtained. */
  portraitRights: "permission-pending" as ImageRights,
  editorialNotes:
    "Portrait taken from The Asian Age article 'In pursuit of Parsai' (asianage.com). Newspaper images are copyrighted: obtain written permission from The Asian Age / the photographer, or replace with a licensed image, before launch. Confirm whether a birthplace marker or memorial exists in Jamani.",
};

export interface Milestone {
  title: Bilingual | null;
  year: string | null;
  impact: Bilingual | null;
}

export const rsDubey = {
  id: "rs-dubey",
  kicker: { hi: "जमानी के निर्माता", en: "A Builder of Jamani" },
  name: { hi: "श्री आर. एस. दुबे", en: "R. S. Dubey" },
  /** Full name — editable, to be supplied by the family. */
  fullName: null as Bilingual | null,
  /** Supplied by the Dubey family (ISO yyyy-mm-dd). */
  birthDate: "1923-09-24" as string | null,
  deathDate: "1994-03-08" as string | null,
  contribution: {
    hi: "जमानी आर. एस. दुबे को गाँव के विकास में उनके योगदान के लिए याद करता है।",
    en: "Jamani remembers R. S. Dubey for his contribution to the development of the village.",
  },
  /** His contribution in the family's own words. */
  familyWords: null as Bilingual | null,
  ifyeRole: {
    hi: "दुबे परिवार के इतिहास के अनुसार, 1964 में अंतरराष्ट्रीय कृषि युवा आदान-प्रदान के अतिथि आर. एस. दुबे के परिवार के साथ ठहरे थे।",
    en: "According to Dubey family history, visitors from the 1964 International Farm Youth Exchange stayed with the family of R. S. Dubey.",
  },
  /** Ray Ropp's words about him, from the IFYE holiday card (recipient identified by the family). */
  ifyeTribute: {
    quote: "You were the hardest working man that I met in India.",
    attribution: {
      hi: "— रे रॉप, 1964 IFYE प्रतिनिधि, आर. एस. दुबे को लिखे अवकाश-कार्ड में",
      en: "— Ray Ropp, 1964 IFYE delegate, in a holiday card to R. S. Dubey",
    },
    context: {
      hi: "उसी कार्ड में उन्होंने युवा क्लबों के साथ उनके काम के बारे में पूछा और आशा जताई कि “और लोग आपके उत्तम उदाहरण का अनुसरण करेंगे”।",
      en: "In the same card he asked how “your work with youth clubs” was progressing and hoped “more people will follow your fine example.”",
    },
  },
  culturalRole: {
    hi: "वे परिवार की सांस्कृतिक और सामुदायिक परंपराओं — जिनमें गणेश उत्सव भी शामिल है — से जुड़े रहे।",
    en: "He was connected with the family's cultural and community traditions, including Ganesh Utsav.",
  },
  milestones: [
    { title: null, year: null, impact: null },
    { title: null, year: null, impact: null },
    { title: null, year: null, impact: null },
  ] as Milestone[],
  remembrance: {
    text: null,
    speaker: null,
    sourceType: "oral-history",
    sourceName: null,
    sourceDate: null,
    verificationStatus: "awaiting-confirmation",
    imageRights: "not-applicable",
    editorialNotes: "A memory of R. S. Dubey, shared by the family or villagers, with attribution.",
  } satisfies QuoteRecord,
  portrait: null as { id: string; alt: Bilingual } | null,
  meta: {
    sourceType: "family-archive",
    sourceName: "Dubey family",
    sourceDate: null,
    verificationStatus: "family-archive",
    imageRights: "permission-pending",
    editorialNotes:
      "Needed from family: full name, 3 contribution milestones (title, year, impact), a remembrance quote, a portrait with permission.",
  } satisfies SourceMeta,
};

export type ContributorCategory =
  | "elder"
  | "farmer"
  | "teacher"
  | "artist"
  | "craftsperson"
  | "organiser"
  | "social"
  | "dubey-family";

export const contributorCategories: Record<ContributorCategory, Bilingual> = {
  elder: { hi: "गाँव के बुज़ुर्ग", en: "Village elders" },
  farmer: { hi: "किसान", en: "Farmers" },
  teacher: { hi: "शिक्षक", en: "Teachers" },
  artist: { hi: "कलाकार", en: "Artists" },
  craftsperson: { hi: "शिल्पकार", en: "Craftspeople" },
  organiser: { hi: "सांस्कृतिक आयोजक", en: "Cultural organisers" },
  social: { hi: "सामाजिक योगदानकर्ता", en: "Social contributors" },
  "dubey-family": { hi: "दुबे परिवार", en: "The wider Dubey family" },
};

export interface Contributor extends SourceMeta {
  id: string;
  name: Bilingual;
  category: ContributorCategory;
  lifespan: string | null;
  role: Bilingual | null;
  story: Bilingual | null;
  quote: QuoteRecord | null;
  portrait: { id: string; alt: Bilingual } | null;
  /** Set true only when the person (or their family) has consented to publication. */
  consentToPublish: boolean;
}

/**
 * Additional contributors. Add entries here — the page renders them automatically,
 * grouped by category, without layout changes. Entries without consent are not shown.
 */
export const contributors: Contributor[] = [];

/** "1923–1994" style lifespan from the configured dates, or null if neither is known. */
export function rsDubeyLifespan(): string | null {
  const b = rsDubey.birthDate?.slice(0, 4);
  const d = rsDubey.deathDate?.slice(0, 4);
  if (!b && !d) return null;
  return `${b ?? "?"}–${d ?? ""}`;
}
