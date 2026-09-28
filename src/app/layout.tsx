import "./globals.css";

/**
 * The <html> element lives in app/[locale]/layout.tsx so each locale renders
 * the correct `lang`. This pass-through root layout is required by Next.js.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
