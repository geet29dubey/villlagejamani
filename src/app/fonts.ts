import { Mukta, Tiro_Devanagari_Hindi, Yatra_One } from "next/font/google";

export const yatra = Yatra_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-yatra",
});

export const mukta = Mukta({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-mukta",
});

export const tiro = Tiro_Devanagari_Hindi({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-tiro",
});

export const fontVariables = `${yatra.variable} ${mukta.variable} ${tiro.variable}`;
