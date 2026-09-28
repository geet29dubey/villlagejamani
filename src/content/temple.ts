import type { Bilingual, SourceMeta } from "./types";
import type { QuoteRecord } from "@/components/ui/Quote";

export const temple = {
  title: { hi: "श्री राम–जानकी मंदिर", en: "The Ram–Janaki Temple" },
  ageStatement: {
    hi: "दुबे परिवार के मौखिक इतिहास के अनुसार, राम–जानकी मंदिर लगभग 300 वर्ष पुराना है।",
    en: "According to the Dubey family's oral history, the Ram–Janaki temple is approximately 300 years old.",
  },
  body: {
    hi: "यह मंदिर दुबे परिवार के परिसर में स्थित है। परिवार इसे गणेश उत्सव की परंपरा का आध्यात्मिक केंद्र मानता है।",
    en: "The temple stands within the Dubey family premises. The family regards it as the spiritual centre of its Ganesh Utsav tradition.",
  },
  visitNote: {
    hi: "मंदिर एक निजी पारिवारिक परिसर में है। दर्शन के लिए कृपया पहले से संपर्क करें।",
    en: "The temple is within a private family home. Please get in touch in advance before visiting.",
  },
  /** Architectural details — to be written from observation / a heritage survey. */
  architecture: null as Bilingual | null,
  /** Family memories of the temple, in the family's words. */
  memory: {
    text: null,
    speaker: null,
    sourceType: "oral-history",
    sourceName: null,
    sourceDate: null,
    verificationStatus: "awaiting-confirmation",
    imageRights: "not-applicable",
    editorialNotes:
      "A family memory connected with the temple, recorded verbatim with attribution.",
  } satisfies QuoteRecord,
  /** Photographs of the temple (ids in the image manifest). */
  photos: [
    {
      id: "ram-janaki-temple-shikhara",
      alt: {
        hi: "श्वेत-श्याम चित्र: राम–जानकी मंदिर का सफ़ेद पुता शिखर, ऊपर कलश, नीचे मेहराबदार द्वार; पीछे पेड़, खपरैल की छतें और दूर पहाड़ियाँ।",
        en: "Black-and-white photograph: the whitewashed shikhara of the Ram–Janaki temple with a finial on top and an arched doorway below; trees, tiled roofs and distant hills behind.",
      },
    },
  ] as { id: string; alt: Bilingual }[],
  /** Future independent historical citation. */
  citation: null as string | null,
  meta: {
    sourceType: "oral-history",
    sourceName: "Dubey family oral history",
    sourceDate: null,
    verificationStatus: "oral-history",
    imageRights: "permission-pending",
    editorialNotes:
      "Age (~300 years) is family oral history only. Seek an independent source (inscription, land/temple records, ASI/state archaeology, gazetteer).",
  } satisfies SourceMeta,
};
