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
    {
      hi: "1964 के प्रतिनिधि रे रॉप ने बाद में अपने कार्ड पर लिखा कि वे आशा करते हैं “जमानी के मेरे मित्र” प्रसन्न और स्वस्थ हैं। 23 नवंबर 1966 के एक पत्र में IFYE प्रतिनिधि डॉटी स्मिथ ने जमानी में “दुबे परिवार के साथ बिताए सुंदर समय” के लिए अपने “प्रिय परिवार” को धन्यवाद दिया। अभिलेख में “1967 Delegate to India” छपा एक और IFYE कार्ड भी सुरक्षित है।",
      en: "Ray Ropp, a 1964 delegate, later wrote on his card that he hoped “my friends of Jamani” were happy and in good health. In a letter dated 23 November 1966, IFYE delegate Dotty Smith thanked “my dear family” for “the wonderful time I had while staying with the Dubey family” at Jamani. The archive also holds another IFYE card printed “1967 Delegate to India”.",
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
    imageId: "ifye-ray-ropp",
    featured: true,
    title: { hi: "रे रॉप — 1964 भारत प्रतिनिधि", en: "Ray Ropp — 1964 Delegate to India" },
    caption: {
      hi: "अवकाश-शुभकामना कार्ड, जिस पर रे रॉप का IFYE प्रतिनिधि-कार्ड चिपका है। हस्तलिखित संदेश में वे “जमानी के मेरे मित्रों” का हाल पूछते हैं।",
      en: "A holiday greeting card with Ray Ropp's IFYE delegate card attached. In his handwritten message he asks after “my friends of Jamani”.",
    },
    alt: {
      hi: "पुराना अवकाश-कार्ड: ऊपर बाईं ओर रे रॉप की फ़ोटो वाला IFYE कार्ड ('1964 Delegate to India', 'Normal, Illinois'), नीचे नीली स्याही में हस्तलिखित संदेश, दाईं ओर लाल अक्षरों में छपी शुभकामना और हस्ताक्षर।",
      en: "An old holiday card: at top left, Ray Ropp's IFYE card with his photograph ('1964 Delegate to India', 'Normal, Illinois'); below it a handwritten message in blue ink; on the right a printed greeting in red and his signature.",
    },
    documentType: {
      hi: "अवकाश-कार्ड, प्रतिनिधि-कार्ड और हस्तलिखित संदेश सहित",
      en: "Holiday card with delegate card and handwritten message",
    },
    approximateDate: "1964 delegate; card undated",
    person: "Ray Ropp · Normal, Illinois",
    transcription: {
      printed: [
        "1964 Delegate to India",
        "Ray Ropp",
        "RFD 1",
        "Normal, Illinois",
        "International Farm Youth Exchange",
        "For A Better World Understanding",
        "With best wishes at this Holiday Season and throughout the New Year",
      ],
      handwritten: [
        "[first line partly covered by the attached card — illegible]",
        "of my friends of Jamani are happy and in good health. How is your work with youth clubs progressing?",
        "You were the hardest working man that I met in India. I hope more people will follow your fine example.",
        "Your close friend",
        "Ray Ropp",
      ],
    },
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: null,
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes:
      "The card does not name the recipient. Ask the family whom it was addressed to (R. S. Dubey?) before saying so publicly. The year the card was sent is not written on it.",
  },
  {
    id: "ifye-dotty-smith-letter-p1",
    imageId: "ifye-dotty-smith-letter-p1",
    title: {
      hi: "डॉटी स्मिथ का पत्र, 23 नवंबर 1966 — पृष्ठ 1",
      en: "Dotty Smith's letter, 23 November 1966 — page 1",
    },
    caption: {
      hi: "“My dear family” से शुरू होते इस पत्र में डॉटी स्मिथ जमानी में दुबे परिवार के साथ बिताए “wonderful time” के लिए धन्यवाद देती हैं। वे केरल के एक प्रशिक्षण केंद्र से लिख रही हैं।",
      en: "Beginning “My dear family”, Dotty Smith thanks the Dubey family for “the wonderful time I had while staying with the Dubey family” and for making her stay at Jamani pleasant. She writes from a training centre in Kerala.",
    },
    alt: {
      hi: "नीली स्याही में हस्तलिखित दो-स्तंभ वाला पत्र, ऊपर तारीख '23-11-66', शुरुआत 'My dear family'।",
      en: "A two-column handwritten letter in blue ink, dated '23-11-66' at the top and beginning 'My dear family'.",
    },
    documentType: { hi: "हस्तलिखित पत्र (पृष्ठ 1 / 2)", en: "Handwritten letter (page 1 of 2)" },
    approximateDate: "23 November 1966",
    person: "Dotty Smith",
    transcription: {
      printed: [],
      handwritten: [
        "23-11-66",
        "My dear family,",
        "Surely by now you must think I have forgotten you, but I could never forget the wonderful time I had while staying with the Dubey family. Nor will I forget all my friends there.",
        "Thank you very much for all your efforts that you did in order to make my stay at Jamani pleasant.",
        "I just arrived last night at this training center. My address is on the outside of the envelope and I will be here until Dec. 25th.",
        "Please tell Mausey [?], Chappa [?], all the women, Dee Dee [?], Ma and my 3 Bhabees (sisters [illegible]) and all the other relatives.",
        "Kerala is a beautiful state and I know I will like it here because I am seeing coconut, pineapple, and so many other fruit and spice trees for the 1st time.",
        "Tell my guardian M. P. Dubey I am fine and give him my warmest greetings.",
        "How is everyone?",
        "I'll be keeping in touch from [continued on page 2]",
      ],
    },
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: "1966-11-23",
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes:
      "Names marked [?] are uncertain readings — ask the family (Mausey = मौसी? Dee Dee = दीदी?). Who was M. P. Dubey ('my guardian')? Do not merge with R. S. Dubey without confirmation.",
  },
  {
    id: "ifye-dotty-smith",
    imageId: "ifye-dotty-smith",
    title: {
      hi: "डॉटी स्मिथ का पत्र, 23 नवंबर 1966 — पृष्ठ 2",
      en: "Dotty Smith's letter, 23 November 1966 — page 2",
    },
    caption: {
      hi: "पत्र का अंतिम पृष्ठ — “Thank You” छपा IFYE पत्र-काग़ज़, 4-H चिह्न, IFYE ग्लोब और “Working Together for World Understanding” स्टिकर के साथ; डॉटी स्मिथ के हस्ताक्षर।",
      en: "The letter's final page — IFYE “Thank You” stationery with the 4-H clover, the IFYE globe and a “Working Together for World Understanding” sticker, signed by Dotty Smith.",
    },
    alt: {
      hi: "मुड़ा हुआ पत्र-काग़ज़: दाईं ओर हरे अक्षरों में 'Thank You', 4-H का चार पत्तियों वाला चिह्न, IFYE ग्लोब और विश्व-मानचित्र वाला स्टिकर; बाईं ओर हस्तलिखित समापन पंक्तियाँ और हस्ताक्षर।",
      en: "Folded stationery: on the right 'Thank You' in green, the four-leaf 4-H clover, the IFYE globe and a world-map sticker; on the left the handwritten closing lines and signature.",
    },
    documentType: { hi: "हस्तलिखित पत्र (पृष्ठ 2 / 2)", en: "Handwritten letter (page 2 of 2)" },
    approximateDate: "23 November 1966",
    person: "Dotty Smith",
    transcription: {
      printed: ["Working Together for World Understanding", "IFYE", "Thank You"],
      handwritten: [
        "[continued from page 1] time to time, and I hope you will write me, too –",
        "Affectionately,",
        "Dotty Smith IFYE",
      ],
    },
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: "1966-11-23",
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes: "Page 2 of the letter dated 23-11-66.",
  },
  {
    id: "ifye-mary-ellen-patterson",
    imageId: "ifye-mary-ellen-patterson",
    title: { hi: "मैरी एलेन पैटरसन का IFYE कार्ड", en: "Mary Ellen Patterson's IFYE card" },
    caption: {
      hi: "यह कार्ड बताता है कि IFYE अमेरिका के 4-H क्लबों और 69 देशों के ग्रामीण युवाओं के बीच दो-तरफ़ा आदान-प्रदान था, जिसमें भारत के खाद्य एवं कृषि मंत्रालय का भी सहयोग था। उस पर हिंदी में हाथ से लिखा है — “मेरा नाम मेरी है”।",
      en: "The card explains that IFYE was a two-way exchange between US 4-H Clubs and rural young people of 69 countries, with cooperation from India's Ministry of Food and Agriculture. Written on it by hand, in Hindi: “My name is Mary”.",
    },
    alt: {
      hi: "खुला हुआ कार्ड: बाईं ओर IFYE के बारे में छपा अनुच्छेद; दाईं ओर मैरी एलेन पैटरसन की श्वेत-श्याम फ़ोटो, नाम और पता, और ऊपर देवनागरी में हस्तलिखित पंक्ति।",
      en: "An open card: on the left a printed paragraph about IFYE; on the right a black-and-white photograph of Mary Ellen Patterson with her name and address, and a handwritten line in Devanagari above.",
    },
    documentType: { hi: "प्रतिनिधि-परिचय कार्ड", en: "Delegate introduction card" },
    approximateDate: "Undated",
    person: "Mary Ellen Patterson · Bloomington, Wisconsin",
    transcription: {
      printed: [
        "International Farm Youth Exchange is a two-way exchange of the 4-H Clubs of the United States with rural young people of 69 other countries. IFYE is conducted by the National 4-H Club Foundation for the Cooperative Extension Service, with cooperation from the Ministry of Food and Agriculture of India, the U.S. Department of State, and special sponsorship of International Minerals & Chemical Corporation, Skokie, Illinois.",
        "Mary Ellen Patterson",
        "Route 1",
        "Bloomington, Wisconsin 53804 U.S.A.",
      ],
      handwritten: [
        "मेटा नाम मेवी है",
        "(as written; apparently intended as “मेरा नाम मेरी है” — “My name is Mary”)",
      ],
    },
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: null,
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes:
      "Year of visit not printed on this side. The '1967 Delegate to India' card's show-through text matches this card — confirm whether it is the front of Mary Ellen Patterson's card.",
  },
  {
    id: "ifye-1967-delegate-card",
    imageId: "ifye-1967-delegate-card",
    title: { hi: "IFYE कार्ड — 1967 भारत प्रतिनिधि", en: "IFYE card — 1967 Delegate to India" },
    caption: {
      hi: "एक IFYE प्रतिनिधि-कार्ड का मुखपृष्ठ, जिस पर “1967 Delegate to India” छपा है। काग़ज़ के पार पीछे छपा पाठ झलकता है, जो मैरी एलेन पैटरसन के कार्ड के पाठ जैसा है।",
      en: "The front of an IFYE delegate card printed “1967 Delegate to India”. Text printed on the reverse shows through the paper and resembles the text of Mary Ellen Patterson's card.",
    },
    alt: {
      hi: "हल्के रंग का कार्ड: नीचे दाईं ओर IFYE ग्लोब चिह्न और काले अक्षरों में 'International Farm Youth Exchange', 'For A Better World Understanding', '1967 Delegate to India'।",
      en: "A pale card: at the lower right the IFYE globe emblem and, in black capitals, 'International Farm Youth Exchange', 'For A Better World Understanding', '1967 Delegate to India'.",
    },
    documentType: { hi: "प्रतिनिधि-कार्ड (मुखपृष्ठ)", en: "Delegate card (front)" },
    approximateDate: "1967",
    person: "Delegate not named on this side",
    transcription: {
      printed: [
        "International Farm Youth Exchange",
        "“For A Better World Understanding”",
        "1967 Delegate to India",
      ],
      handwritten: [],
    },
    sourceType: "document-scan",
    sourceName: "Dubey Family Archive",
    sourceDate: "1967",
    verificationStatus: "family-archive",
    imageRights: "family-permission-granted",
    editorialNotes:
      "Confirm with the family whether a 1967 delegate also visited Jamani, and whether this is Mary Ellen Patterson's card.",
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
        hi: "रे रॉप, नॉर्मल (इलिनॉय) से, 1964 में IFYE प्रतिनिधि के रूप में भारत आए।",
        en: "Ray Ropp, of Normal, Illinois, was a 1964 IFYE delegate to India.",
      },
      requiresSource: false,
      source: "Dubey Family Archive (IFYE delegate card)",
    },
    {
      text: {
        hi: "अपने अवकाश-कार्ड पर उन्होंने “जमानी के मेरे मित्रों” का हाल पूछा, युवा क्लबों के काम के बारे में जानना चाहा, और लिखा: “You were the hardest working man that I met in India.”",
        en: "On his holiday card he asked after “my friends of Jamani” and their “work with youth clubs”, and wrote: “You were the hardest working man that I met in India.”",
      },
      requiresSource: false,
      source: "Dubey Family Archive (holiday card)",
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
