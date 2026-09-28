import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { resolveLocale } from "@/lib/params";
import { PageHero } from "@/components/sections/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({
    locale,
    page: "terms",
    title: { hi: "नियम और शर्तें", en: "Terms" },
    description: { hi: "इस वेबसाइट के उपयोग की शर्तें।", en: "Terms of use for this website." },
  });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  return (
    <>
      <PageHero title={hi ? "नियम और शर्तें" : "Terms"} art={null} />
      <section className="section section--chuna">
        <div className="container container--narrow legal">
          {hi ? (
            <>
              <p>
                villagejamani.com जमानी की विरासत का उत्सव मनाने वाली एक स्वतंत्र सांस्कृतिक और
                सामुदायिक परियोजना है। यह ग्राम पंचायत या किसी सरकारी संस्था की आधिकारिक वेबसाइट
                नहीं है।
              </p>
              <h2>ऐतिहासिक सामग्री</h2>
              <p>
                सामग्री प्रकाशित स्रोतों, पारिवारिक अभिलेखों और मौखिक इतिहास पर आधारित है, और हर
                प्रविष्टि के साथ उसकी सत्यापन स्थिति दी गई है। सुधार के सुझावों का स्वागत है।
              </p>
              <h2>चित्र और अभिलेख</h2>
              <p>
                अभिलेखीय चित्र और दस्तावेज़ उनके स्वामियों की अनुमति से प्रकाशित हैं। बिना अनुमति
                उनका पुनः उपयोग न करें।
              </p>
              <h2>अनुभव और उपज</h2>
              <p>
                सूचीबद्ध अनुभव और उत्पाद विकसित किए जा रहे हैं। इस वेबसाइट पर कोई ऑनलाइन भुगतान या
                बुकिंग नहीं होती; कोई भी व्यवस्था सीधे बातचीत से तय होती है।
              </p>
            </>
          ) : (
            <>
              <p>
                villagejamani.com is an independent cultural and community project celebrating
                Jamani&apos;s heritage. It is not the official website of the Gram Panchayat or any
                government body.
              </p>
              <h2>Historical content</h2>
              <p>
                Content is drawn from published sources, family archives and oral history, and each
                record shows its verification state. Corrections are welcome.
              </p>
              <h2>Photographs and archive material</h2>
              <p>
                Archival photographs and documents are published with the permission of their
                owners. Please do not reuse them without permission.
              </p>
              <h2>Experiences and produce</h2>
              <p>
                Listed experiences and products are under development. No payments or bookings are
                taken on this website; any arrangement is agreed directly.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
