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
        hi: "साहित्य अकादमी पुरस्कार से सम्मानित",
        en: "Recognised with the Sahitya Akademi Award",
      },
      sourceType: "published-source",
      sourceName: "Sahitya Akademi awards list",
      sourceDate: null,
      verificationStatus: "verified-published",
      imageRights: "not-applicable",
      editorialNotes:
        "Brand book mock-up cites 1982 for 'Viklang Shraddha Ka Daur'. Confirm year and title against Sahitya Akademi's official list before adding them.",
    },
  ] satisfies Fact[],
  /** Notable works — add only with a verified source. */
  notableWorks: [] as { title: Bilingual; year: string | null; source: string }[],
  /** Birthplace or memorial in Jamani — only if confirmed. */
  birthplaceNote: null as Bilingual | null,
  portrait: null as { id: string; alt: Bilingual } | null,
  portraitRights: "unknown" as ImageRights,
  editorialNotes:
    "No portrait until a lawful source/permission is secured (rights holder). Confirm whether a birthplace marker or memorial exists in Jamani.",
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
  birthYear: null as string | null,
  deathYear: null as string | null,
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
      "Needed from family: full name, birth/death years, 3 contribution milestones (title, year, impact), a remembrance quote, a portrait with permission.",
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
