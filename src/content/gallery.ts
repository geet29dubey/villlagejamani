import type { Bilingual, SourceMeta } from "./types";

export type GalleryCategory =
  | "ganesh-utsav"
  | "classical-music"
  | "kathak"
  | "orchards"
  | "agriculture"
  | "crafts"
  | "people"
  | "historical-archive"
  | "village-life";

export const galleryCategories: Record<GalleryCategory, Bilingual> = {
  "ganesh-utsav": { hi: "गणेश उत्सव", en: "Ganesh Utsav" },
  "classical-music": { hi: "शास्त्रीय संगीत", en: "Classical Music" },
  kathak: { hi: "कथक", en: "Kathak" },
  orchards: { hi: "बाग़", en: "Orchards" },
  agriculture: { hi: "खेती", en: "Agriculture" },
  crafts: { hi: "शिल्प", en: "Crafts" },
  people: { hi: "लोग", en: "People" },
  "historical-archive": { hi: "ऐतिहासिक अभिलेख", en: "Historical Archive" },
  "village-life": { hi: "गाँव का जीवन", en: "Village Life" },
};

export interface GalleryPhoto extends SourceMeta {
  id: string;
  imageId: string;
  categories: GalleryCategory[];
  caption: Bilingual;
  alt: Bilingual;
  /** Null renders "Date being documented". */
  approximateDate: string | null;
  photographer: Bilingual | null;
  /** Null renders "Being identified". Only name people with consent. */
  peoplePictured: Bilingual | null;
  usagePermission: Bilingual;
  /** Visible text in the photo, transcribed exactly as written. */
  transcription?: string[];
}

const archiveSource = {
  sourceType: "photograph" as const,
  sourceName: "Dubey Family Archive",
  sourceDate: null,
  verificationStatus: "family-archive" as const,
  imageRights: "family-permission-granted" as const,
  photographer: null,
  peoplePictured: null,
  approximateDate: null,
  usagePermission: {
    hi: "दुबे परिवार की अनुमति से प्रकाशित",
    en: "Published with permission of the Dubey family",
  },
};

/**
 * Archival photographs supplied for this project. Captions describe only what is visible —
 * dates, places, occasions and people are left for the family to identify.
 */
export const gallery: GalleryPhoto[] = [
  {
    id: "music-gathering-room",
    imageId: "archive-music-gathering-room",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "एक कक्ष में शास्त्रीय संगीत की बैठक — तबला, हारमोनियम, तानपुरा और सारंगी के साथ कलाकार; दीवार पर चित्रों की पंक्ति।",
      en: "A classical music gathering in a room — musicians with tabla, harmonium, tanpura and sarangi, beneath a row of framed pictures.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: छह संगीतकार एक कक्ष में बैठे हैं; बीच में काली जैकेट पहने गायक, दाईं ओर तानपुरा और सारंगी, बाईं ओर तबला और हारमोनियम; सामने श्रोता।",
      en: "Black-and-white photograph: six musicians seated in a room; a vocalist in a dark jacket at the centre, tanpura and sarangi to the right, tabla and harmonium to the left, with listeners in the foreground.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify place, occasion, date and performers with the family before naming anyone.",
  },
  {
    id: "stage-street-backdrop",
    imageId: "archive-stage-street-backdrop",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "चित्रित नगर-दृश्य की पृष्ठभूमि वाले मंच पर कलाकारों का समूह; बीच में माला पहने एक व्यक्ति।",
      en: "A group of musicians on a stage with a painted street-scene backdrop; a garlanded man sits at the centre.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: चित्रित इमारतों वाली पृष्ठभूमि के सामने मंच पर लगभग बारह लोग बैठे हैं, तबला, तानपुरा और सारंगी के साथ; बीच में माला पहने व्यक्ति।",
      en: "Black-and-white photograph: about twelve people seated on a stage before a painted backdrop of buildings, with tabla, tanpuras and a sarangi; a garlanded man at the centre.",
    },
    ...archiveSource,
    editorialNotes: "Identify the garlanded man, the occasion and the venue.",
  },
  {
    id: "stage-microphones",
    imageId: "archive-stage-microphones",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "स्तंभों वाली चित्रित पृष्ठभूमि के सामने माइक्रोफ़ोन के साथ मंच पर प्रस्तुति; हारमोनियम और गायक।",
      en: "A performance on a stage with microphones before a painted backdrop of pillars; a harmonium player and vocalists.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: मंच पर पाँच लोग बैठे हैं, सामने माइक्रोफ़ोन स्टैंड और हारमोनियम; पृष्ठभूमि में चित्रित स्तंभ।",
      en: "Black-and-white photograph: five people seated on a stage with microphone stands and a harmonium in front; painted pillars behind.",
    },
    ...archiveSource,
    editorialNotes: "Identify performers, venue and year.",
  },
  {
    id: "stage-saraswati-backdrop",
    imageId: "archive-stage-saraswati-backdrop",
    categories: ["classical-music", "historical-archive"],
    caption: {
      hi: "वीणा-वादिनी सरस्वती के चित्र वाली पृष्ठभूमि के सामने सजे मंच पर संगीत प्रस्तुति; सामने भीड़ भरे श्रोता।",
      en: "A music performance on a decorated stage before a painting of Saraswati with the veena, with a crowded audience in front.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: फूल-पत्ती की नक़्क़ाशी वाले मंच पर हारमोनियम, तानपुरा, सारंगी और तबले के साथ कलाकार; पीछे सरस्वती का चित्र; आगे श्रोताओं की भीड़।",
      en: "Black-and-white photograph: musicians with harmonium, tanpura, sarangi and tabla on an ornately bordered stage, a painting of Saraswati behind them and a crowd of listeners in front.",
    },
    ...archiveSource,
    editorialNotes:
      "Is this the Ganesh Utsav stage in Jamani? Confirm before adding the 'ganesh-utsav' category.",
  },
  {
    id: "gram-panchayat-bhawan",
    imageId: "archive-gram-panchayat-bhawan",
    categories: ["people", "village-life", "historical-archive"],
    caption: {
      hi: "खपरैल की छत वाले भवन के सामने खड़े पाँच व्यक्ति; दीवार पर “ग्राम पचायत भवन” लिखा है।",
      en: "Five men standing in front of a tiled-roof building; the wall is painted with “ग्राम पचायत भवन” (Gram Panchayat Bhawan).",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: खपरैल की छत वाले सफ़ेद भवन के सामने पाँच पुरुष खड़े हैं; दरवाज़े के ऊपर देवनागरी में भवन का नाम लिखा है।",
      en: "Black-and-white photograph: five men stand before a whitewashed building with a clay-tiled roof; the building's name is painted in Devanagari above the door.",
    },
    transcription: ["ग्राम पचायत भवन"],
    ...archiveSource,
    editorialNotes:
      "Text is transcribed exactly as painted (without the anusvara). Confirm whether this is Jamani's Panchayat Bhawan, the year and the people pictured (possibly connected with the 1964 visit? — do NOT state without confirmation).",
  },
  {
    id: "kathak-dancer-spin-bw",
    imageId: "kathak-dancer-spin-bw",
    categories: ["kathak", "historical-archive"],
    caption: {
      hi: "चक्कर लेती हुई कथक नृत्यांगना — घूमता घेरदार परिधान, हाथ में दुपट्टा और पैरों में घुँघरू; पीछे संगतकार।",
      en: "A Kathak dancer mid-spin — a flaring skirt, a veil held aloft and ghungroo at the ankles, with accompanists behind.",
    },
    alt: {
      hi: "श्वेत-श्याम चित्र: मंच पर एक कथक नृत्यांगना चक्कर ले रही है, उसका घेरदार परिधान फैला हुआ है और हाथ में उठा दुपट्टा है; पृष्ठभूमि में बैठे संगतकार।",
      en: "Black-and-white photograph: a Kathak dancer spins on stage, her flared skirt and a raised veil swirling around her, with seated accompanists in the background.",
    },
    ...archiveSource,
    editorialNotes: "Identify the dancer, occasion and year; confirm consent to publish.",
  },
  {
    id: "kathak-dancer-red-costume",
    imageId: "kathak-dancer-red-costume",
    categories: ["kathak", "historical-archive"],
    caption: {
      hi: "लाल चौखानेदार परिधान में कथक नृत्यांगना, माइक्रोफ़ोन के सामने; पीछे बैठे श्रोता और ऊपर चित्रों की पंक्ति।",
      en: "A Kathak dancer in a red checked costume before a microphone, with seated listeners behind and a row of framed pictures above.",
    },
    alt: {
      hi: "पुराना रंगीन चित्र: लाल-सुनहरे चौखानेदार परिधान में नृत्यांगना कथक मुद्रा में; सामने माइक्रोफ़ोन, अग्रभूमि में दर्शक, पीछे मेहराबदार आला और दीवार पर चित्र।",
      en: "Faded colour photograph: a dancer in a red and gold checked costume holds a Kathak pose; a microphone in front, spectators in the foreground, an arched niche and framed pictures on the wall behind.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify the dancer and year. The wall niche and row of framed pictures resemble other archive photos — confirm the venue before stating it.",
  },
  {
    id: "kathak-dancer-with-musicians",
    imageId: "kathak-dancer-with-musicians",
    categories: ["kathak", "classical-music", "historical-archive"],
    caption: {
      hi: "संगतकारों के साथ बैठी कथक नृत्यांगना — पखावज, हारमोनियम और तबला; पीछे सरस्वती के चित्र के सामने भरी हुई सभा।",
      en: "A Kathak dancer seated with her accompanists — pakhawaj, harmonium and tabla — before a packed audience and a painting of Saraswati.",
    },
    alt: {
      hi: "पुराना रंगीन चित्र: लाल परिधान में नृत्यांगना मंच पर बैठी है; बाईं ओर पखावज वादक, बीच में हारमोनियम, दाईं ओर तबला वादक; पीछे बच्चों और बड़ों की भीड़ और सरस्वती का चित्र।",
      en: "Faded colour photograph: a dancer in red sits on stage; a pakhawaj player to the left, a harmonium at the centre, a tabla player to the right; behind them a crowd of children and adults and a painting of Saraswati.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify dancer, musicians and year. Saraswati backdrop resembles 'stage-saraswati-backdrop' — confirm if this is the same stage in Jamani.",
  },
  {
    id: "kathak-performer-microphone",
    imageId: "kathak-performer-microphone",
    categories: ["kathak"],
    caption: {
      hi: "माइक्रोफ़ोन पर प्रस्तुति देती कथक कलाकार, लाल और सुनहरे परिधान में; ऊपर रंग-बिरंगी झालरें।",
      en: "A Kathak artist speaking or reciting at the microphone in red and gold, beneath strings of coloured tinsel.",
    },
    alt: {
      hi: "रंगीन चित्र: माँग-टीका और लाल-सुनहरे परिधान में एक कलाकार माइक्रोफ़ोन के सामने खड़ी है; छत पर रंगीन झालरें और तेज़ रोशनी, पीछे सफ़ेद दीवार पर मेहराबदार आला।",
      en: "Colour photograph: an artist in a red and gold costume with a maang tikka stands at a microphone; coloured tinsel and bright lights across the ceiling, a white wall with an arched niche behind.",
    },
    ...archiveSource,
    editorialNotes: "Identify the artist and year; confirm consent to publish.",
  },
  {
    id: "kathak-duet-pranam",
    imageId: "kathak-duet-pranam",
    categories: ["kathak"],
    caption: {
      hi: "प्रणाम की मुद्रा में दो कथक नृत्यांगनाएँ — सिर के ऊपर जुड़े हाथ, गहरे परिधान और लाल दुपट्टे।",
      en: "Two Kathak dancers in pranam — hands joined above their heads, in dark costumes with red dupattas.",
    },
    alt: {
      hi: "रंगीन चित्र: दो नृत्यांगनाएँ बैठी मुद्रा में सिर के ऊपर हाथ जोड़े हुए हैं; गहरे रंग के परिधान और लाल दुपट्टे; बीच में माइक्रोफ़ोन स्टैंड, पीछे सफ़ेद दीवार में मेहराबदार आले और नीली बीम।",
      en: "Colour photograph: two dancers kneel with hands joined above their heads, in dark costumes with red dupattas; a microphone stand between them, a white wall with arched niches and blue beams behind.",
    },
    ...archiveSource,
    editorialNotes:
      "Identify the dancers and year; confirm consent. This appears to be a photograph of a screen — request the original file if available.",
  },
];
