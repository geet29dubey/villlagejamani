import Link from "next/link";
import { fontVariables } from "./fonts";
import { LogoMark } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <html lang="hi" className={fontVariables}>
      <body>
        <main className="chooser" style={{ paddingTop: 0 }}>
          <LogoMark className="chooser__logo" />
          <h1 className="chooser__title">404</h1>
          <p lang="hi">यह पृष्ठ नहीं मिला।</p>
          <p lang="en">This page could not be found.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--primary" href="/hi" lang="hi">
              मुखपृष्ठ
            </Link>
            <Link className="btn btn--secondary" href="/en" lang="en">
              Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
