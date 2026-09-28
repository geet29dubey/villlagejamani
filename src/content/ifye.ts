import type { Bilingual, SourceMeta } from "./types";

export const ifyeIntro = {
  title: { hi: "जमानी और दुनिया", en: "Jamani and the World" },
  subtitle: {
    hi: "1964 का अंतरराष्ट्रीय कृषि युवा आदान-प्रदान (IFYE)",
    en: "The 1964 International Farm Youth Exchange",
  },
  paragraphs: [
    {
      hi: "अंतरराष्ट्रीय कृषि युवा आदान-प्रदान (International Farm Youth Exchange — IFYE) अमेरिका के 4-H क्लबों के सदस्यों को दूसरे देशों के ग्रामीण युवाओं से जोड़ता था। कार्यक्रम का उद्देश्य था मेज़बान परिवारों के साथ रहकर और काम करके अंतरराष्ट्रीय समझ को बढ़ाना।",
      en: "The International Farm Youth Exchange (IFYE) connected members of American 4-H clubs with rural young people in other countries. The programme promoted international understanding through delegates living and working with host families.",
    },
    {
      hi: "दुबे परिवार के अभिलेख में सुरक्षित कार्ड 1964 में IFYE प्रतिनिधियों को जमानी से जोड़ते हैं। परिवार के इतिहास के अनुसार, ये अतिथि आर. एस. दुबे के परिवार के साथ ठहरे थे।",
      en: "Cards surviving in the Dubey family archive connect IFYE delegates with Jamani in 1964. According to Dubey family history, the visitors stayed with the family of R. S. Dubey.",
    },
  ] as Bilingual[],
  motto: { hi: "“For a Better World Understanding”", en: "“For a Better World Understanding”" },
  mottoNote: {
    hi: "— IFYE सामग्री पर छपा ऐतिहासिक वाक्य",
    en: "— the historical phrase printed on IFYE material",
  },
};

export interface ArchiveDocument extends SourceMeta {
  id: string;
  /** Image id in the manifest; null while the scan is still being added. */
  imageId: string | null;
  title: Bilingual;
  caption: Bilingual;
  alt: Bilingual;
  documentType: Bilingual;
  approximateDate: string;
  person: string;
  /**
   * Transcription of clearly legible text only. Uncertain passages are marked [illegible].
   * Null until transcribed directly from the scan.
   */
  transcription: { printed: string[]; handwritten: string[] | null } | null;
  featured?: boolean;
}

export const ifyeDocuments: ArchiveDocument[] = [
  {
    id: "ifye-ray-ropp",
    imageId: null,
    featured: true,
    title: { hi: "रे रॉप — 1964 भारत प्रतिनिधि", en: "Ray Ropp — 1964 Delegate to India" },
    caption: {
      hi: "IFYE प्रतीक-चिह्न और “For a Better World Understanding” वाक्य वाला अवकाश-कार्ड, जिस पर जमानी के मित्रों के नाम हस्तलिखित संदेश है।",
      en: "Holiday card bearing the IFYE emblem and the phrase “For a Better World Understanding”, with a handwritten message addressed to friends in Jamani.",
    },
    alt: {
      hi: "रे रॉप, नॉर्मल, इलिनॉय का 1964 IFYE भारत प्रतिनिधि कार्ड, IFYE प्रतीक-चिह्न और हस्तलिखित संदेश सहित",
      en: "Ray Ropp's 1964 IFYE Delegate to India card from Normal, Illinois, with the IFYE emblem and a handwritten holiday message",
    },
    documentType: {
      hi: "अवकाश-कार्ड, हस्तलिखित संदेश सहित",
      en: "Holiday card with handwritten message",
    },
    approximateDate: "c. 1964",
    person: "Ray Ropp · Normal, Illinois",
    transcription: {
      printed: [
        "1964 Delegate to India",
        "Ray Ropp",
        "Normal, Illinois",
        "For a Better World Understanding",
      ],
      handwritten: null,
    },
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: "c. 1964",
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes:
      "Scan not yet in repo: add to assets/archive/originals/ifye-ray-ropp.jpg and set imageId. Printed lines above were supplied by the family — check against the scan. Transcribe the handwritten message only where clearly legible; mark the rest [illegible].",
  },
  {
    id: "ifye-dotty-smith",
    imageId: null,
    title: { hi: "डॉटी स्मिथ का IFYE धन्यवाद-कार्ड", en: "Dotty Smith's IFYE thank-you card" },
    caption: {
      hi: "IFYE प्रतिनिधि डॉटी स्मिथ का धन्यवाद-कार्ड, दुबे परिवार के अभिलेख से।",
      en: "A thank-you card from IFYE delegate Dotty Smith, from the Dubey family archive.",
    },
    alt: {
      hi: "डॉटी स्मिथ का IFYE धन्यवाद-कार्ड",
      en: "Dotty Smith's IFYE thank-you card",
    },
    documentType: { hi: "धन्यवाद-कार्ड", en: "Thank-you card" },
    approximateDate: "c. 1964",
    person: "Dotty Smith",
    transcription: null,
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: "c. 1964",
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes:
      "Scan not yet in repo: add assets/archive/originals/ifye-dotty-smith.jpg. Transcribe from the scan.",
  },
  {
    id: "ifye-mary-ellen-patterson",
    imageId: null,
    title: { hi: "मैरी एलेन पैटरसन का IFYE कार्ड", en: "Mary Ellen Patterson's IFYE card" },
    caption: {
      hi: "यह कार्ड 4-H के दो-तरफ़ा आदान-प्रदान और संस्थागत सहयोग के बारे में बताता है।",
      en: "This card explains the two-way 4-H exchange and the cooperation between institutions behind it.",
    },
    alt: {
      hi: "मैरी एलेन पैटरसन का IFYE कार्ड, जिसमें 4-H आदान-प्रदान की जानकारी है",
      en: "Mary Ellen Patterson's IFYE card describing the two-way 4-H exchange",
    },
    documentType: { hi: "सूचना-कार्ड", en: "Information card" },
    approximateDate: "c. 1964",
    person: "Mary Ellen Patterson",
    transcription: null,
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: "c. 1964",
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes:
      "Scan not yet in repo: add assets/archive/originals/ifye-mary-ellen-patterson.jpg. Transcribe the printed explanation verbatim.",
  },
];

export interface BioItem {
  text: Bilingual;
  /** True when an external source is required before publication. Hidden on production until sourced. */
  requiresSource: boolean;
  source: string | null;
}

/**
 * Ray Ropp — draft biography from family research. Items flagged `requiresSource`
 * are shown only in editorial mode with a visible flag, and never on production
 * until a source is recorded. Do not add "legendary", award details, exact service
 * duration or current positions without verification.
 */
export const rayRoppBio: { name: string; hometown: string; items: BioItem[] } = {
  name: "Ray Ropp",
  hometown: "Normal, Illinois",
  items: [
    {
      text: {
        hi: "1964 में रे रॉप एक युवा IFYE प्रतिनिधि के रूप में भारत आए; उनका कार्ड जमानी के मित्रों को संबोधित है।",
        en: "In 1964 Ray Ropp travelled to India as a young IFYE delegate; his card is addressed to friends in Jamani.",
      },
      requiresSource: false,
      source: "Dubey Family Archive (IFYE card)",
    },
    {
      text: {
        hi: "4-H युवा विकास से उनका लंबा जुड़ाव रहा।",
        en: "He had a long association with 4-H youth development.",
      },
      requiresSource: true,
      source: null,
    },
    {
      text: {
        hi: "इलिनॉय में उनकी पृष्ठभूमि कृषि और डेयरी खेती की रही।",
        en: "His background was in agriculture and dairy farming in Illinois.",
      },
      requiresSource: true,
      source: null,
    },
    {
      text: {
        hi: "उन्होंने युवाओं के मार्गदर्शन और अंतर-सांस्कृतिक समझ का समर्थन किया।",
        en: "He supported youth mentorship and cross-cultural understanding.",
      },
      requiresSource: true,
      source: null,
    },
    {
      text: {
        hi: "रॉप जर्सी डेयरी फ़ार्म और चीज़ फ़ैक्ट्री से उनका संबंध।",
        en: "His connection with the Ropp Jersey Dairy Farm and Cheese Factory.",
      },
      requiresSource: true,
      source: null,
    },
  ],
};
