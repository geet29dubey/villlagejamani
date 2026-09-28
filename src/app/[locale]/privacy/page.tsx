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
    page: "privacy",
    title: { hi: "गोपनीयता", en: "Privacy" },
    description: {
      hi: "यह वेबसाइट आपकी जानकारी कैसे संभालती है।",
      en: "How this website handles your information.",
    },
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const hi = locale === "hi";
  return (
    <>
      <PageHero title={hi ? "गोपनीयता" : "Privacy"} art={null} />
      <section className="section section--chuna">
        <div className="container container--narrow legal">
          {hi ? (
            <>
              <p>
                यह एक स्थिर (static) वेबसाइट है। हम कोई खाता नहीं बनाते, कोई विज्ञापन-ट्रैकर नहीं
                लगाते और पूछताछ फ़ॉर्म की जानकारी अपने सर्वर पर संग्रहीत नहीं करते।
              </p>
              <h2>पूछताछ</h2>
              <p>
                पूछताछ फ़ॉर्म आपके संदेश को आपके अपने व्हाट्सऐप या ईमेल ऐप में खोलता है। संदेश भेजने
                के बाद उस सेवा की गोपनीयता नीति लागू होती है।
              </p>
              <h2>चित्र और व्यक्ति</h2>
              <p>
                हम किसी का निजी घर का पता प्रकाशित नहीं करते। लोगों के नाम और चित्र केवल उनकी या
                उनके परिवार की सहमति से प्रकाशित किए जाते हैं। किसी चित्र या जानकारी को हटवाने के
                लिए संपर्क करें।
              </p>
              <h2>होस्टिंग</h2>
              <p>
                यह साइट Cloudflare पर होस्ट की जाती है, जो सुरक्षा और प्रदर्शन के लिए सामान्य तकनीकी
                लॉग रख सकता है।
              </p>
            </>
          ) : (
            <>
              <p>
                This is a static website. We do not create accounts, run advertising trackers or
                store enquiry-form submissions on a server.
              </p>
              <h2>Enquiries</h2>
              <p>
                The enquiry form opens your message in your own WhatsApp or email app. Once sent,
                that service&apos;s privacy policy applies.
              </p>
              <h2>Photographs and people</h2>
              <p>
                We never publish private home addresses. Names and photographs of people are
                published only with their, or their family&apos;s, consent. Contact us to have a
                photograph or detail removed.
              </p>
              <h2>Hosting</h2>
              <p>
                This site is hosted on Cloudflare, which may keep standard technical logs for
                security and performance.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
