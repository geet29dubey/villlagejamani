import type { Bilingual } from "./config";

/** Interface strings (not cultural content — that lives in src/content). */
export const ui = {
  skipToContent: { hi: "मुख्य सामग्री पर जाएँ", en: "Skip to main content" },
  brandSub: { hi: "जमानी · इटारसी के पास", en: "Jamani · Near Itarsi" },
  brandName: { hi: "जमानी", en: "Jamani" },
  home: { hi: "मुखपृष्ठ", en: "Home" },
  menu: { hi: "मेनू", en: "Menu" },
  openMenu: { hi: "मेनू खोलें", en: "Open menu" },
  closeMenu: { hi: "मेनू बंद करें", en: "Close menu" },
  primaryNav: { hi: "मुख्य नेविगेशन", en: "Primary navigation" },
  languageSwitch: { hi: "भाषा चुनें", en: "Choose language" },
  planVisit: { hi: "यात्रा की योजना", en: "Plan Your Visit" },
  discoverGanesh: { hi: "गणेश उत्सव की कहानी", en: "Discover Ganesh Utsav" },

  // verification
  "verified-published": { hi: "प्रकाशित स्रोत से सत्यापित", en: "Verified by published source" },
  "family-archive": { hi: "पारिवारिक अभिलेख", en: "Family archive" },
  "oral-history": { hi: "मौखिक इतिहास", en: "Oral history" },
  "awaiting-confirmation": { hi: "पुष्टि की प्रतीक्षा", en: "Awaiting confirmation" },

  // placeholders (public-facing, never raw tokens)
  dateBeingDocumented: { hi: "तिथि का दस्तावेज़ीकरण जारी", en: "Date being documented" },
  yearBeingDocumented: { hi: "वर्ष का दस्तावेज़ीकरण जारी", en: "Year being documented" },
  beingDocumented: { hi: "दस्तावेज़ीकरण जारी", en: "Being documented" },
  photoToCome: {
    hi: "चित्र शीघ्र — क्या आपके पास है?",
    en: "Photograph to come — do you have one?",
  },
  photoWithPermission: {
    hi: "अनुमति मिलने पर चित्र जोड़ा जाएगा",
    en: "Photograph to be added with permission",
  },
  contributeMemory: { hi: "चित्र या स्मृति साझा करें", en: "Contribute a photograph or memory" },
  source: { hi: "स्रोत", en: "Source" },
  approxDate: { hi: "अनुमानित तिथि", en: "Approximate date" },
  documentType: { hi: "दस्तावेज़ का प्रकार", en: "Document type" },
  contributor: { hi: "योगदानकर्ता / प्रतिनिधि", en: "Contributor / delegate" },
  peoplePictured: { hi: "चित्र में", en: "People pictured" },
  photographer: { hi: "छायाकार / स्रोत", en: "Photographer / source" },
  usage: { hi: "उपयोग अनुमति", en: "Usage permission" },
  unknown: { hi: "अज्ञात", en: "Unknown" },
  beingIdentified: { hi: "पहचान जारी", en: "Being identified" },

  // lightbox
  close: { hi: "बंद करें", en: "Close" },
  previous: { hi: "पिछला", en: "Previous" },
  next: { hi: "अगला", en: "Next" },
  zoomIn: { hi: "बड़ा करें", en: "Zoom in" },
  zoomOut: { hi: "छोटा करें", en: "Zoom out" },
  resetZoom: { hi: "मूल आकार", en: "Reset zoom" },
  transcription: { hi: "प्रतिलेख", en: "Transcription" },
  showTranscription: { hi: "प्रतिलेख दिखाएँ", en: "Show transcription" },
  hideTranscription: { hi: "प्रतिलेख छिपाएँ", en: "Hide transcription" },
  openImage: { hi: "बड़ा देखें", en: "View larger" },
  scanPending: { hi: "स्कैन जोड़ा जा रहा है", en: "Scan being added" },

  // filters
  all: { hi: "सभी", en: "All" },
  filterBy: { hi: "श्रेणी से छाँटें", en: "Filter by category" },
  showing: { hi: "दिखाए जा रहे", en: "Showing" },
  items: { hi: "प्रविष्टियाँ", en: "items" },

  // enquiries
  enquireWhatsApp: { hi: "व्हाट्सऐप पर पूछें", en: "Enquire on WhatsApp" },
  enquire: { hi: "पूछताछ करें", en: "Enquire" },
  registerInterest: { hi: "रुचि दर्ज करें", en: "Register your interest" },
  comingSoon: { hi: "शीघ्र उपलब्ध", en: "Coming soon" },
  readMore: { hi: "और पढ़ें", en: "Read more" },
  learnMore: { hi: "और जानें", en: "Learn more" },
  backToTop: { hi: "ऊपर जाएँ", en: "Back to top" },
} satisfies Record<string, Bilingual>;

export type UiKey = keyof typeof ui;
