import Link from 'next/link';
import { Metadata } from 'next';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";

export const generateMetadata = (): Metadata => {
  return {
    title: 'FAQ - Vidzo',
    description: 'Frequently Asked Questions about Vidzo',
    other: {
      'script:ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vidzo.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FAQ",
            "item": "https://vidzo.app/faq"
          }
        ]
      }),
    },
  };
};

export default function FAQPage() {
  return (
     <>
      <Head>
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vidzo.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FAQ",
                "item": "https://vidzo.app/faq"
              }
            ]
          })
        }} />

        {/* FAQ Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Geo Frame?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Geo Frame is Link professional camera app that captures photos and videos with precise GPS location, timestamp, address, and customizable overlays."
                }
              },
              {
                "@type": "Question",
                "name": "What overlays can I add?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can add GPS coordinates, address, date/time, custom text, map thumbnails, and customize fonts, colors, and positions."
                }
              },
              {
                "@type": "Question",
                "name": "Does Geo Frame work offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Geo Frame works offline using your device’s last known location. However, address lookup and map thumbnails may require an internet connection."
                }
              },
              {
                "@type": "Question",
                "name": "Does it support videos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Geo Frame supports both photos and videos with overlays such as GPS coordinates and timestamps."
                }
              },
              {
                "@type": "Question",
                "name": "Is Geo Frame free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Geo Frame offers essential features for free. Premium features such as advanced overlays and customization options require Link subscription."
                }
              },
              {
                "@type": "Question",
                "name": "Is Geo Frame ad-free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Geo Frame is completely ad-free, offering Link distraction-free user experience."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is GPS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GPS accuracy depends on your device and environment. For the best results, enable high-accuracy mode and ensure Link clear view of the sky."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize overlays?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can fully customize overlays including font, color, size, position, and visibility of GPS coordinates, timestamps, and maps."
                }
              },
              {
                "@type": "Question",
                "name": "Where are my files saved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All media files are saved locally on your device. You can access them from the Geo Frame app gallery or your phone’s file manager."
                }
              },
              {
                "@type": "Question",
                "name": "How do I share media?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can easily share your captured photos and videos via email, messaging apps, social media, or cloud storage directly from within the app."
                }
              },
              {
                "@type": "Question",
                "name": "Does Geo Frame support multiple languages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Geo Frame supports major global languages. You can change the language from within the app settings."
                }
              },
              {
                "@type": "Question",
                "name": "How do I subscribe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To subscribe, open the app and go to Settings > Subscription. Complete your purchase via Google Play to unlock all premium features."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact Geo Frame support via the in-app Support section or by emailing support@orbitcodeworks.com."
                }
              }
            ]
          })
        }} />
      </Head>

    <main id="faq-page" className="bg-light py-5" aria-label="Frequently Asked Questions">
 
        <section className="container max-w-xxl mx-auto py-12 px-4 pt-24" id="faq">
            <h1 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-center text-gray-500 mb-10">Quick answers to common questions about Geo Frame.</p>

            <div className="space-y-4"> 
            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                What is Geo Frame?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">Geo Frame is Link professional camera app that captures photos and videos with precise GPS location, timestamp, address, and customizable overlays.</p>
            </details>

            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                What overlays can I add?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">You can add GPS coordinates, address, date/time, custom text, map thumbnails, and customize fonts, colors, and positions.</p>
            </details>

            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                Does Geo Frame work offline?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">Yes, it works offline using your device’s last known location. Address and map features may require internet access.</p>
            </details>

            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                Does it support videos?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">Yes! Geo Frame supports both photos and videos with overlays.</p>
            </details>

            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                Is Geo Frame free?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">Geo Frame offers core features for free. Advanced features require Link subscription.</p>
            </details>

            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                Is Geo Frame ad-free?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">Yes, Geo Frame is 100% ad-free.</p>
            </details>

            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                How accurate is GPS?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">Accuracy depends on your device. For best results, enable high-accuracy mode and ensure Link clear sky view.</p>
            </details>

            <details className="group bg-white shadow-sm p-5 rounded-lg cursor-pointer">
                <summary className="text-lg font-medium flex justify-between items-center">
                How do I contact support?
                <Icon  className="size-4 transform transition-transform group-open:rotate-180" icon={faChevronDown}  />
                </summary>
                <p className="mt-2 text-gray-600">Reach us via the in-app support section or email: <Link href="mailto:support@vidzo.app" className="text-blue-600 underline">support@vidzo.app</Link></p>
            </details>
            </div>
        </section>
    </main>
    </>
  );
}
